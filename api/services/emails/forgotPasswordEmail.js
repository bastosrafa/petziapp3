const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

module.exports = async function sendForgotPasswordEmail(email, nome, novaSenha) {
  try {
    const response = await axios.post("https://api.resend.com/emails", {
      from: FROM_EMAIL,
      to: [email],
      subject: "🔐 Recuperação de senha",
      html: `<p>Olá ${nome || 'Tutor(a)'},</p><p>Sua nova senha é: <strong>${novaSenha}</strong></p><p>Recomendamos alterá-la após o login.</p>`
    }, {
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    console.log("📧 E-mail de recuperação enviado:", response.data);
  } catch (err) {
    console.error("❌ Falha ao enviar e-mail:", err.response?.data || err.message);
    throw err;
  }
};
