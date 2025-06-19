const axios = require('axios');
require('dotenv').config();

const WAPI_BASE_URL = 'https://api.w-api.app/v1/message/send-text';

async function sendWhatsAppMessage(phone, message) {
  const instanceId = process.env.WAPI_INSTANCE_ID;
  const token = process.env.WAPI_TOKEN;

  try {
    const response = await axios.post(`${WAPI_BASE_URL}?instanceId=${instanceId}`, {
      phone,
      message,
      delayMessage: 2
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao enviar mensagem WhatsApp:', error?.response?.data || error.message);
    throw new Error('Falha no envio da mensagem via WhatsApp');
  }
}

module.exports = {
  sendWhatsAppMessage
};
