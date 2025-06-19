const express = require('express');
const multer = require('multer');
const router = express.Router();
const sendProblemReport = require('../services/sendProblemReport');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { type, title, description } = req.body;
    const file = req.file;

    await sendProblemReport({ type, title, description, file });
    res.status(200).json({ message: 'Relatório enviado com sucesso.' });
  } catch (error) {
    console.error('Erro ao enviar relatório:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
