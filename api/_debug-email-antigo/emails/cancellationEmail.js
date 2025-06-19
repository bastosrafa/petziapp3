const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "petzia@test-dnvo4d99896g5r86.mlsender.net";

async function sendCancelationEmail(email, nome = "Tutor(a)") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" width="120" alt="Logo Petzia" />
      <h1 style="color: #FF595E;">Assinatura Cancelada</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Recebemos seu pedido de cancelamento e seu acesso será encerrado ao final do período vigente.</p>
      <p>Ficaremos felizes em receber você novamente no futuro!</p>
      <p style="margin-top: 24px;">Se precisar de suporte ou quiser reativar seu acesso, fale conosco pelo app.</p>
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
      subject: '📩 Confirmação de Cancelamento',
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("✅ Cancelation e-mail enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Cancelation e-mail:", err.response?.data || err.message);
  }
}

module.exports = sendCancelationEmail;
