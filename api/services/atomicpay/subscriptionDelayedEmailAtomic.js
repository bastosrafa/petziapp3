const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendSubscriptionDelayedEmailAtomic(email, nome = "Tutor(a)") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" alt="Logo Petzia" style="max-width: 120px;" />
      <h1 style="color: #F77F00;">⏳ Pagamento Atrasado</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Percebemos que o pagamento da sua assinatura está em atraso.</p>
      <p>Você ainda pode regularizar e continuar aproveitando todos os benefícios do Petzia com seu pet!</p>
      <p style="margin-top: 16px;">Caso precise de ajuda, fale com a gente pelo suporte oficial.</p>
      <p style="color: #999;">Equipe Petzia 💛</p>
    </div>
  `;

  try {
    const response = await axios.post("https://api.resend.com/emails", {
      from: FROM_EMAIL,
      to: [email],
      subject: "⚠️ Pagamento atrasado - regularize e continue no Petzia",
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    console.log("✅ Subscription Delayed e-mail (Atomic) enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Subscription Delayed e-mail (Atomic):", err.response?.data || err.message);
  }
}

module.exports = sendSubscriptionDelayedEmailAtomic;
