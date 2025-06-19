#!/usr/bin/env bash

# -----------------------------------------------------------------------------
# Deploy Quiz - Petziapp (subdomínio quiz.petziapp.com)
# -----------------------------------------------------------------------------
# 1. Atualiza repo, instala dependências de produção e faz o build
# 2. Reinicia/Cria processo PM2 "quiz-backend" apontando para dist/index.js
# 3. Instala/Atualiza virtual-host do Nginx e recarrega o serviço
# -----------------------------------------------------------------------------
# Requisitos no servidor:
#   - git, node/npm, pm2, nginx
#   - repo clonado em /var/www/petzia (monorepo)
#   - arquivo .env com variáveis de produção em /var/www/petzia/quiz/.env
# -----------------------------------------------------------------------------

set -euo pipefail

PROJECT_DIR="/var/www/petzia/quiz"
REPO_DIR="/var/www/petzia"

# 1. Atualizar código ----------------------------------------------------------------
cd "$REPO_DIR"
echo "[Deploy-Quiz] Pulling latest code ..."
git pull --quiet

echo "[Deploy-Quiz] Installing production dependencies ..."
cd "$PROJECT_DIR"
# --omit=dev evita instalar dependências de dev em produção
npm ci --omit=dev --silent

echo "[Deploy-Quiz] Building front + backend ..."
npm run build --silent

# 2. PM2 ------------------------------------------------------------------------------
command -v pm2 >/dev/null 2>&1 || npm install -g pm2

# se existir, remove; se não existir, ignora erro
pm2 delete quiz-backend 2>/dev/null || true

# Carrega variáveis a partir do .env se existir
export $(grep -v '^#' "$PROJECT_DIR/.env" | xargs -d '\n' -r)

echo "[Deploy-Quiz] Starting PM2 process ..."
pm2 start "$PROJECT_DIR/dist/index.js" \
     --name quiz-backend \
     --update-env

pm2 save

# 3. Nginx ---------------------------------------------------------------------------
NGINX_SRC="$REPO_DIR/infra/quiz/nginx/quiz.petziapp.com.conf"
NGINX_AVAIL="/etc/nginx/sites-available/quiz.petziapp.com"
NGINX_ENABLED="/etc/nginx/sites-enabled/quiz.petziapp.com"

if [ -f "$NGINX_SRC" ]; then
    echo "[Deploy-Quiz] Updating Nginx vHost ..."
    cp "$NGINX_SRC" "$NGINX_AVAIL"
    ln -sf "$NGINX_AVAIL" "$NGINX_ENABLED"
fi

nginx -t
systemctl reload nginx

echo "[Deploy-Quiz] ✔ Deployment completed successfully." 