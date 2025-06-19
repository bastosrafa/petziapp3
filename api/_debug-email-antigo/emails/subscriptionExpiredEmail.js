const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "petzia@test-dnvo4d99896g5r86.mlsender.net";

async function sendSubscriptionExpiredEmail(email, nome = "Tutor(a)") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" width="120" alt="Logo Petzia" />
      <h1 style="color: #FF595E;">Assinatura Expirada</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Seu período de acesso expirou e sua assinatura foi finalizada.</p>
      <p>Esperamos ter feito parte da jornada com seu pet!</p>
      <p style="margin-top: 24px;">Quando quiser, estaremos de portas abertas para você voltar. 🐾</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await axios.post('https://api.mailersend.com/v1/email', {
      from: {
        email: FROM_EMAIL,
        name: 'Petzia'
      },
      to: [{ email, name: nome }],
      subject: '🔔 Sua Assinatura Foi Finalizada',
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("✅ Subscription Expired e-mail enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Subscription Expired e-mail:", err.response?.data || err.message);
  }
}

module.exports = sendSubscriptionExpiredEmail;
