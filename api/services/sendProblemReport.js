require('dotenv').config();
const axios = require('axios');

const API_TOKEN = process.env.RESEND_API_KEY;
const FROM_EMAIL = 'Petzia App <noreply@petziapp.com>';
const TO_EMAIL = 'support@petziapp.com';

module.exports = async ({ type, title, description, file }) => {
  const subject = `[Petzia] Novo relatório de problema: ${title}`;

  const html = `
    <h2>📣 Relatório de Problema Recebido</h2>
    <p><strong>Tipo:</strong> ${type}</p>
    <p><strong>Título:</strong> ${title}</p>
    <p><strong>Descrição:</strong><br>${description}</p>
  `;

  const data = {
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    subject,
    html,
  };

  if (file) {
    const base64File = file.buffer.toString('base64');
    data.attachments = [
      {
        filename: file.originalname,
        content: base64File,
        type: file.mimetype,
      },
    ];
  }

  console.log('📤 Enviando e-mail via Resend API (JSON)...');

  await axios.post('https://api.resend.com/emails', data, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
};
