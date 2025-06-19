const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "petzia@test-dnvo4d99896g5r86.mlsender.net";

async function sendChargebackEmail(email, nome = "Tutor(a)") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" width="120" alt="Logo Petzia" />
      <h1 style="color: #FF595E;">Contestação de Pagamento</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Fomos informados de que houve uma contestação da sua compra junto ao seu banco ou instituição financeira.</p>
      <p>Estamos à disposição para esclarecer qualquer dúvida e resolver a situação.</p>
      <p style="margin-top: 24px;">Entre em contato com o suporte pelo app Petzia se precisar de ajuda!</p>
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
      subject: '🚨 Contestação de Pagamento Recebida',
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("✅ Chargeback e-mail enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Chargeback e-mail:", err.response?.data || err.message);
  }
}

module.exports = sendChargebackEmail;

