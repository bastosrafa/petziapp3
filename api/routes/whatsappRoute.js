const express = require('express');
const { sendWhatsAppMessage } = require('../services/whatsappService');

const router = express.Router();

router.post('/send-whatsapp', async (req, res) => {
  const { phone, message } = req.body;

  if (!phone || !message) {
    return res.status(400).json({ error: 'Parâmetros phone e message são obrigatórios.' });
  }

  try {
    const result = await sendWhatsAppMessage(phone, message);
    res.status(200).json(result);
  } catch (err) {
    console.error('Erro na rota /send-whatsapp:', err.message);
    res.status(500).json({ error: 'Erro ao enviar mensagem pelo WhatsApp.' });
  }
});

module.exports = router;
