const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendForgotPasswordEmailAtomic(email, nome = "Tutor(a)", novaSenha = "senha123") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" alt="Logo Petzia" style="max-width: 120px;" />
      <h1 style="color: #3A86FF;">🔐 Recuperação de Senha</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Sua nova senha é:</p>
      <div style="background-color: #E6F4F1; padding: 12px 18px; border-radius: 8px; margin: 16px 0;">
        <p><strong>${novaSenha}</strong></p>
      </div>
      <p>Recomendamos que altere sua senha após o login no <a href="https://app.petziapp.com">app.petziapp.com</a>.</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await axios.post("https://api.resend.com/emails", {
      from: FROM_EMAIL,
      to: [email],
      subject: "🔐 Recuperação de senha",
      html
    }, {
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    console.log("📧 E-mail de recuperação (Atomic) enviado:", response.data);
  } catch (err) {
    console.error("❌ Falha ao enviar e-mail de recuperação (Atomic):", err.response?.data || err.message);
    throw err;
  }
}

module.exports = sendForgotPasswordEmailAtomic;
