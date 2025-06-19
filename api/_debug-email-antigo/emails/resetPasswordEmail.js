const mailersend = require("mailersend-node"); // ou o que você estiver usando

async function sendResetPasswordEmail(email, nome, novaSenha) {
  console.log("✔️ Enviando reset de senha para:", email);

  // Substitua pelo seu método real de envio com layout
  const html = `
    <h2>Olá ${nome},</h2>
    <p>Sua nova senha de acesso é: <strong>${novaSenha}</strong></p>
    <p>Recomendamos que você altere a senha após o login.</p>
    <p>Equipe Petzia 🐾</p>
  `;

  // Exemplo genérico:
  await mailersend.sendEmail({
    to: email,
    subject: "Redefinição de senha - Petzia",
    html,
  });
}

module.exports = sendResetPasswordEmail;
