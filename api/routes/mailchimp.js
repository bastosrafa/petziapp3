const express = require('express');
const router = express.Router();
const { addToMailchimp } = require('../services/mailchimpService');

router.post('/', async (req, res) => {
  const { nome, email, telefone, quiz } = req.body;

  if (!nome || !email || !telefone) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const result = await addToMailchimp({ nome, email, telefone, quiz });

    if (result.success) {
      return res.status(200).json({ message: 'Lead cadastrado com sucesso!' });
    } else {
      return res.status(500).json({
        error: 'Erro ao cadastrar no Mailchimp.',
        details: result.error,
      });
    }
  } catch (err) {
    console.error("Erro inesperado:", err);
    return res.status(500).json({
      error: 'Erro interno inesperado.',
      details: err.message || err,
    });
  }
});

module.exports = router;
