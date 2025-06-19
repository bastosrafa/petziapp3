# --------------------------------------------------------------------------
# CONFIGURAÇÕES
# --------------------------------------------------------------------------
$DesktopPath = [Environment]::GetFolderPath("Desktop")
$LocalDir = "$DesktopPath\Petziapp\api\"
$RemoteUser = "root"
$RemoteDir = "/var/www/api"
$RemoteHosts = @("209.38.134.141")

$VersionFile = "$DesktopPath\Petziapp\api\deploy_version.txt"
$LogFile = "$DesktopPath\Petziapp\api\deploy.log"

# --------------------------------------------------------------------------
# LÓGICA PARA CONTROLAR O NÚMERO DE VERSÃO
# --------------------------------------------------------------------------
if (!(Test-Path $VersionFile)) {
    "0" | Out-File -Encoding utf8 $VersionFile
}

$Version = [int](Get-Content $VersionFile)
$Version++
$Version.ToString() | Set-Content -Encoding utf8 $VersionFile

# --------------------------------------------------------------------------
# FUNÇÃO PARA PEGAR DATA/HORA EM FORMATO ISO (UTC)
# --------------------------------------------------------------------------
function Get-IsoDate {
    return (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
}

# --------------------------------------------------------------------------
# REGISTRA INÍCIO DO DEPLOY NO LOG
# --------------------------------------------------------------------------
$StartTime = Get-IsoDate
"[INFO] [$StartTime] Iniciando deploy (versão: $Version)" | Tee-Object -FilePath $LogFile -Append

# --------------------------------------------------------------------------
# PROCESSO DE DEPLOY
# --------------------------------------------------------------------------
foreach ($RemoteHost in $RemoteHosts) {
    $CurrentTime = Get-IsoDate
    "[INFO] [$CurrentTime] Iniciando deploy para $RemoteHost (versão: $Version)" | Tee-Object -FilePath $LogFile -Append

    Write-Host "Sincronizando arquivos..."
    & rsync -avz --exclude "node_modules" --exclude ".git" "$LocalDir" "${RemoteUser}@${RemoteHost}:${RemoteDir}" 2>&1 |
        Tee-Object -FilePath $LogFile -Append

    $CurrentTime = Get-IsoDate
    "[INFO] [$CurrentTime] Instalando dependências e reiniciando aplicação em $RemoteHost ..." | Tee-Object -FilePath $LogFile -Append

    & ssh "${RemoteUser}@${RemoteHost}" "cd $RemoteDir && npm install && pm2 restart all" 2>&1 |
        Tee-Object -FilePath $LogFile -Append

    $CurrentTime = Get-IsoDate
    "[INFO] [$CurrentTime] Deploy finalizado com sucesso em $RemoteHost (versão: $Version)" | Tee-Object -FilePath $LogFile -Append
    "----------------------------------------------------------" | Tee-Object -FilePath $LogFile -Append
}

# --------------------------------------------------------------------------
# FINALIZAÇÃO
# --------------------------------------------------------------------------
$EndTime = Get-IsoDate
"[INFO] [$EndTime] Deploy concluído para todos os servidores! (versão: $Version)" | Tee-Object -FilePath $LogFile -Append
