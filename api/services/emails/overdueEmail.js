const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendOverdueEmail(email, nome = "Tutor(a)") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading.gif" style="max-width: 180px;">
      <h1 style="color: #FFAA00;">Pagamento em Atraso</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Identificamos que seu pagamento ainda não foi compensado.</p>
      <p>Pedimos que verifique as informações no app Petzia para regularizar e manter seu acesso ativo.</p>
      <p style="margin-top: 24px;">Se precisar de ajuda, estamos à disposição!</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await axios.post("https://api.resend.com/emails", {
      from: FROM_EMAIL,
      to: [email],
      subject: "⚠️ Aviso: Pagamento em Atraso",
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    console.log("✅ Overdue e-mail enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Overdue e-mail:", err.response?.data || err.message);
  }
}

module.exports = sendOverdueEmail;
