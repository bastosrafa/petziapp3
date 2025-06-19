const express = require('express');
const router = express.Router();
const updateFirebasePassword = require('../services/updateFirebasePassword');
const sendEmail = require('../services/sendEmail');

router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'E-mail é obrigatório.' });
  }

  try {
    const novaSenha = await updateFirebasePassword(email);
    await sendEmail('forgotPassword', { email, senha: novaSenha });

    return res.status(200).json({ message: 'Nova senha enviada com sucesso.' });
  } catch (error) {
    console.error('Erro ao processar esqueci a senha:', error);
    return res.status(500).json({ error: 'Erro ao enviar nova senha.' });
  }
});

module.exports = router;
