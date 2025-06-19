const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendResetPasswordEmail(email, nome = "Tutor(a)", novaSenha) {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <h2>Olá ${nome},</h2>
      <p>Sua nova senha de acesso é: <strong>${novaSenha}</strong></p>
      <p>Recomendamos que você altere a senha após o login.</p>
      <p style="color: #999;">Equipe Petzia 🐾</p>
    </div>
  `;

  try {
    const response = await axios.post("https://api.resend.com/emails", {
      from: FROM_EMAIL,
      to: [email],
      subject: "🔒 Redefinição de senha - Petzia",
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    console.log("📧 E-mail de redefinição de senha enviado:", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar e-mail:", err.response?.data || err.message);
    throw err;
  }
}

module.exports = sendResetPasswordEmail;
