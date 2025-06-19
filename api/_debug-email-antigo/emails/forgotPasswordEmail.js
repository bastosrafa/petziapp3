const { default: axios } = require("axios");

async function sendForgotPasswordEmail(email, nome, novaSenha) {
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Recuperação de senha - Petzia</h2>
      <p>Olá ${nome},</p>
      <p>Você solicitou a recuperação da sua senha. Aqui está sua nova senha temporária:</p>
      <p><strong style="font-size: 18px;">${novaSenha}</strong></p>
      <p>Recomendamos que você altere essa senha após o login.</p>
      <br />
      <p>Com carinho,</p>
      <p>Equipe Petzia</p>
    </div>
  `;

  try {
    const response = await axios.post("https://api.mailersend.com/v1/email", {
      from: {
        email: "suporte@petziapp.com",
        name: "Equipe Petzia",
      },
      to: [{ email, name: nome }],
      subject: "Sua nova senha no Petzia 🐾",
      html,
    }, {
      headers: {
        Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    console.log("📩 Forgot password e-mail enviado:", response.status);
  } catch (error) {
    console.error("❌ Erro ao enviar e-mail de recuperação:", error.response?.data || error.message);
  }
}

module.exports = sendForgotPasswordEmail;
