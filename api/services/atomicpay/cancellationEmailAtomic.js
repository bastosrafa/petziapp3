const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendCancellationEmailAtomic(email, nome = 'Tutor(a)') {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-mascote-isolado_Transparente_App-loading-botao-inicio.png" alt="Logo Petzia" style="max-width: 120px;" />
      <h1 style="color: #FF595E;">Assinatura Cancelada</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Recebemos seu pedido de cancelamento e seu acesso será encerrado ao final do período vigente.</p>
      <p>Ficaremos felizes em receber você novamente no futuro!</p>
      <p style="margin-top: 24px;">Se precisar de suporte ou quiser reativar seu acesso, fale conosco pelo app.</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await resend.emails.send({
      from: 'Petzia <noreply@petziapp.com>',
      to: email,
      subject: '📩 Confirmação de Cancelamento',
      html,
    });

    console.log("✅ Cancelamento Atomic enviado:", response);
  } catch (err) {
    console.error("❌ Erro ao enviar e-mail de cancelamento Atomic:", err);
  }
}

module.exports = sendCancellationEmailAtomic;
