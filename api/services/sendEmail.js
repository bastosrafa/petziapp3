const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendWelcomeEmail(email, nome = 'Tutor(a)', senhaTemporaria = 'senha123') {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading.gif" width="120" />
      <h1 style="color: #3A86FF;">Bem-vindo à Petzia! 💙</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Seu acesso foi ativado com sucesso. Aqui estão seus dados:</p>
      <div style="background-color: #E6F4F1; padding: 10px 16px; border-radius: 8px; margin-top: 12px;">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Senha:</strong> ${senhaTemporaria}</p>
        <p><strong>App:</strong> <a href="https://app.petziapp.com" style="color: #3A86FF;">app.petziapp.com</a></p>
      </div>
      <div style="margin-top: 24px;">
        <a href="https://app.petziapp.com" style="display: inline-block; padding: 12px 24px; background-color: #3A86FF; color: #fff; border-radius: 6px; text-decoration: none;">Acessar agora</a>
      </div>
      <p style="margin-top: 24px;">Recomendamos alterar sua senha após o primeiro acesso.</p>
      <p style="color: #999;">Obrigado por fazer parte da comunidade Petzia 🐶</p>
    </div>
  `;

  try {
    const response =
