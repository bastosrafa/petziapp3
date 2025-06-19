const express = require('express');
const router = express.Router();

const createFirebaseUser = require('../../services/createFirebaseUser');

// ⚠️ CORRIGIDO AQUI: nome do arquivo correto
const sendWelcomeEmailAtomic = require('../../services/emails/welcomeEmail');

const sendRefundEmailAtomic = require('../../services/emails/refundEmail');
const sendChargebackEmailAtomic = require('../../services/emails/chargebackEmail');
const sendPlanChangeEmailAtomic = require('../../services/emails/planChangeEmail');
const sendSubscriptionExpiredEmailAtomic = require('../../services/emails/subscriptionExpiredEmail');
const sendSubscriptionDelayedEmailAtomic = require('../../services/emails/subscriptionDelayedEmail');
const sendCancellationEmailAtomic = require('../../services/emails/cancellationEmail');

router.post('/', async (req, res) => {
  const payload = req.body;
  const event = payload.event;

  const email = payload?.data?.customer?.email;
  const nome = payload?.data?.customer?.name || "Tutor(a)";

  console.log("📥 Webhook recebido da AtomicPay:");
  console.log("🔗 Evento:", event);
  console.log("👤 E-mail:", email);
  console.log("👤 Nome:", nome);

  if (!email) return res.status(400).json({ error: "Email não encontrado." });

  try {
    switch (event) {
      case "PURCHASE_APPROVED":
        const senha = Math.random().toString(36).slice(-8);
        console.log("🔐 Gerando senha:", senha);

        const senhaCriada = await createFirebaseUser(email, nome, senha);
        console.log("✅ Firebase user criado");

        if (senhaCriada) {
          console.log("📤 Enviando e-mail de boas-vindas...");
          await sendWelcomeEmailAtomic(email, nome, senhaCriada);
          console.log("📬 E-mail enviado com sucesso!");
        }
        break;

      case "PURCHASE_REFUNDED":
        await sendRefundEmailAtomic(email, nome);
        break;
      case "PURCHASE_CHARGEBACK":
        await sendChargebackEmailAtomic(email, nome);
        break;
      case "PURCHASE_PLAN_CHANGED":
        await sendPlanChangeEmailAtomic(email, nome);
        break;
      case "PURCHASE_EXPIRED":
        await sendSubscriptionExpiredEmailAtomic(email, nome);
        break;
      case "PURCHASE_DELAYED":
        await sendSubscriptionDelayedEmailAtomic(email, nome);
        break;
      case "SUBSCRIPTION_CANCELLATION":
        await sendCancellationEmailAtomic(email, nome);
        break;
      default:
        console.log("⚠️ Evento não tratado (Atomic):", event);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error("❌ Erro no webhook (Atomic):", err);
    res.status(500).json({ error: "Erro interno", details: err.message });
  }
});

module.exports = router;
