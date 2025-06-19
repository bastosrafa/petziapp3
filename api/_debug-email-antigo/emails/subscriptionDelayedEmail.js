const axios = require("axios");

async function sendDelayedEmail(email, nome = "Tutor(a)") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <h1 style="color: #F77F00;">⏳ Pagamento Atrasado</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Percebemos que o pagamento da sua assinatura está em atraso.</p>
      <p>Você ainda pode regularizar e continuar aproveitando todos os benefícios do Petzia com seu pet!</p>
      <p style="margin-top: 16px;">Caso precise de ajuda, fale com a gente pelo suporte oficial.</p>
      <p style="color: #999;">Equipe Petzia 💛</p>
    </div>
  `;

  try {
    const response = await axios.post("https://api.mailersend.com/v1/email", {
      from: {
        email: "petzia@test-dnvo4d99896g5r86.mlsender.net",
        name: "Petzia"
      },
      to: [{ email, name: nome }],
      subject: "⚠️ Pagamento atrasado - regularize e continue no Petzia",
      html
    }, {
      headers: {
        Authorization: "Bearer re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM",
        "Content-Type": "application/json"
      }
    });

    console.log("✅ Subscription Delayed e-mail enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar email de atraso:", err.response?.data || err.message);
  }
}

module.exports = sendDelayedEmail;
