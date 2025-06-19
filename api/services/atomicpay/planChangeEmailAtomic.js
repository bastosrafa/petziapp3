const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendPlanChangeEmailAtomic(email, nome = "Tutor(a)") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" alt="Logo Petzia" style="max-width: 120px;" />
      <h1 style="color: #3A86FF;">Mudança de Plano Confirmada</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Confirmamos que sua mudança de plano foi realizada com sucesso!</p>
      <p>Você já pode aproveitar os novos benefícios através do nosso app Petzia.</p>
      <p style="margin-top: 24px;">Dúvidas? Estamos disponíveis para te ajudar!</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await axios.post("https://api.resend.com/emails", {
      from: FROM_EMAIL,
      to: [email],
      subject: "📦 Seu Plano foi Atualizado!",
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    console.log("✅ Plan Change e-mail (Atomic) enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Plan Change e-mail (Atomic):", err.response?.data || err.message);
  }
}

module.exports = sendPlanChangeEmailAtomic;
