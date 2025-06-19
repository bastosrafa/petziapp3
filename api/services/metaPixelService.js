const axios = require('axios');
const crypto = require('crypto');

const PIXEL_ID = '1357052352079181';
const ACCESS_TOKEN = 'EAAFwIg5ThZBIBO3wqVgimyHb3seZCF0RrQNfHH3dmk4jHRv4INaxw1aHlOBI0TaK7HSrkW8I7wrtTQIJrId3H3Ht7rEtGmBqLalA3jnRU1Rwimmy2jc3zU7VqDTgr81aqK4ZC3QPUlz5Bq07ZCvc82IZAsZAFKpakCuM2k3KZAvQZBeUlYK5QSIVlK3SCaCLFteaKwZDZD';
const API_URL = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`;

function hashSHA256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function normalizarTelefone(numero) {
  const digits = numero.replace(/\D/g, '');
  if (digits.length >= 13) return digits;
  if (digits.length === 11) return `55${digits}`;
  return digits;
}

async function enviarEvento(event_name, userData, customData = {}, event_id = null) {
  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: userData.url || 'https://petziapp.com',
        action_source: 'website',
        event_id: event_id || crypto.randomUUID(),
        user_data: {
          em: [hashSHA256(userData.email)],
          fn: [hashSHA256(userData.nome)],
          ph: userData.telefone ? [hashSHA256(normalizarTelefone(userData.telefone))] : undefined,
          client_ip_address: userData.ip,
          client_user_agent: userData.userAgent,
          fbc: userData.fbc,
          fbp: userData.fbp
        },
        custom_data: customData,
      },
    ],
    access_token: ACCESS_TOKEN,
  };

  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar evento Meta:', error.response?.data || error.message);
    return null;
  }
}

module.exports = { enviarEvento };
