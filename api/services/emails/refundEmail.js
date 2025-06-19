const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendRefundEmail(email, nome = "Tutor(a)") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading.gif" style="max-width: 180px;">
      <h1 style="color: #FF595E;">Solicitação de Reembolso Recebida</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Recebemos sua solicitação de reembolso e estamos processando.</p>
      <p>O estorno será concluído dentro dos próximos dias, conforme a política da Hotmart e do seu método de pagamento.</p>
      <p style="margin-top: 24px;">Se precisar de qualquer suporte, entre em contato conosco através do app Petzia.</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await axios.post("https://api.resend.com/emails", {
      from: FROM_EMAIL,
      to: [email],
      subject: "📩 Seu reembolso está em processamento",
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    console.log("✅ Refund e-mail enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Refund e-mail:", err.response?.data || err.message);
  }
}

module.exports = sendRefundEmail;
