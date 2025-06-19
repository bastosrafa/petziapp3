const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "petzia@test-dnvo4d99896g5r86.mlsender.net";

async function sendWelcomeEmail(email, nome = "Tutor(a)", senhaTemporaria = "senha123") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" width="120" alt="Logo Petzia" />
      <h1 style="color: #3A86FF;">Bem-vindo à Petzia! 💙</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Seu acesso foi ativado com sucesso. Aqui estão seus dados:</p>
      <div style="background-color: #E6F4F1; padding: 12px 18px; border-radius: 8px; margin: 16px 0;">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Senha:</strong> ${senhaTemporaria}</p>
        <p><strong>App:</strong> <a href="https://app.petziapp.com" target="_blank">app.petziapp.com</a></p>
      </div>
      <a href="https://app.petziapp.com" style="display: inline-block; background-color: #3A86FF; color: white; text-decoration: none; padding: 12px 20px; border-radius: 6px;">Acessar agora</a>
      <p style="margin-top: 20px;">Recomendamos alterar sua senha após o primeiro acesso.</p>
      <p style="color: #999;">Obrigado por fazer parte da comunidade Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await axios.post('https://api.mailersend.com/v1/email', {
      from: {
        email: FROM_EMAIL,
        name: 'Petzia'
      },
      to: [{ email, name: nome }],
      subject: '🎉 Acesso ao Petzia liberado!',
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("✅ Welcome e-mail enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Welcome e-mail:", err.response?.data || err.message);
  }
}

module.exports = sendWelcomeEmail;
