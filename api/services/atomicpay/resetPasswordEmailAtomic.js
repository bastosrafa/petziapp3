const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendResetPasswordEmailAtomic(email, nome = "Tutor(a)", novaSenha) {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" alt="Logo Petzia" style="max-width: 120px;" />
      <h1 style="color: #3A86FF;">🔒 Redefinição de Senha</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Sua nova senha de acesso é:</p>
      <p style="background-color: #E6F4F1; padding: 12px 18px; border-radius: 8px; font-size: 18px;">
        <strong>${novaSenha}</strong>
      </p>
      <p>Recomendamos que você altere a senha após o primeiro login.</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
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

    console.log("✅ Reset Password e-mail (Atomic) enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Reset Password e-mail (Atomic):", err.response?.data || err.message);
    throw err;
  }
}

module.exports = sendResetPasswordEmailAtomic;
