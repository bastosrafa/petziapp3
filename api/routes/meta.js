const express = require('express');
const router = express.Router();
const { enviarEvento } = require('../services/metaPixelService');

router.post('/meta/lead', async (req, res) => {
  const { nome, email, telefone, fbp, fbc } = req.body;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const url = req.headers['referer'] || null;

  const result = await enviarEvento('Lead', { nome, email, telefone, ip, userAgent, fbp, fbc, url });
  res.json({ sucesso: true, meta: result });
});

module.exports = router;
