const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendWelcomeEmailAtomic(email, nome = "Tutor(a)", senhaTemporaria = "senha123") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" alt="Logo Petzia" style="max-width: 120px;" />
      <h1 style="color: #3A86FF;">Bem-vindo(a) ao Petzia!</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Seu acesso está liberado! Agora você tem acesso ao melhor conteúdo para cuidar e educar seu pet com carinho e eficiência.</p>
      <p>Sua senha temporária de acesso é:</p>
      <p style="font-size: 18px; font-weight: bold; color: #3A86FF;">${senhaTemporaria}</p>
      <p>Recomendamos que você altere essa senha no primeiro acesso.</p>
      <p style="margin-top: 24px;">Qualquer dúvida, conte com nosso suporte pelo próprio app.</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await axios.post('https://api.resend.com/emails', {
      from: FROM_EMAIL,
      to: [email],
      subject: '🎉 Seu acesso ao Petzia está liberado!',
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("✅ Welcome e-mail (Atomic) enviado com sucesso!");
    console.log("📬 Resposta Resend:", response.data);

  } catch (err) {
    const errorMsg = err.response?.data || err.message;
    console.error("❌ Erro ao enviar Welcome e-mail (Atomic):", errorMsg);
  }
}

module.exports = sendWelcomeEmailAtomic;
