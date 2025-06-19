const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// E-mails da versão Atomic
const sendCancellationEmailAtomic = require('../../services/emails/cancellationEmailAtomic');
const sendPlanChangeEmailAtomic = require('../../services/emails/planChangeEmailAtomic');

// [GET] Consulta plano atual (igual à versão Hotmart)
router.get('/:email', async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const db = admin.firestore();
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', email).get();

    if (snapshot.empty) return res.status(200).json({ plan: 'Não encontrado' });

    const userData = snapshot.docs[0].data();
    const plano = typeof userData.plan === 'object' ? userData.plan.name : userData.plan;

    res.status(200).json({ plan: plano || 'Plano não definido' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar assinatura.' });
  }
});

// [POST] Solicitação de cancelamento
router.post('/cancel', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email é obrigatório.' });

    const db = admin.firestore();
    await db.collection('cancellation_requests').add({ email, origem: 'atomic', timestamp: new Date() });

    await sendCancellationEmailAtomic(email, "Tutor(a)");

    res.status(200).json({ message: 'Cancelamento (Atomic) processado com sucesso.' });
  } catch (err) {
    console.error('Erro no cancelamento (Atomic):', err.message);
    res.status(500).json({ error: 'Erro ao cancelar.', details: err.message });
  }
});

// [POST] Registro de troca de plano
router.post('/switch', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email é obrigatório.' });

    const db = admin.firestore();
    await db.collection('plan_switches').add({ email, origem: 'atomic', timestamp: new Date() });

    await sendPlanChangeEmailAtomic(email, "Tutor(a)");

    res.status(200).json({ message: 'Troca de plano (Atomic) registrada com sucesso.' });
  } catch (err) {
    console.error('Erro na troca de plano (Atomic):', err.message);
    res.status(500).json({ error: 'Erro na troca.', details: err.message });
  }
});

module.exports = router;
