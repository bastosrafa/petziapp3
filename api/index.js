require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const multer = require('multer');

// Importações dos serviços
const sendWelcomeEmail = require("./services/emails/welcomeEmail");
const sendRefundEmail = require("./services/emails/refundEmail");
const sendChargebackEmail = require("./services/emails/chargebackEmail");
const sendPlanChangeEmail = require("./services/emails/planChangeEmail");
const sendSubscriptionExpiredEmail = require("./services/emails/subscriptionExpiredEmail");
const sendSubscriptionDelayedEmail = require("./services/emails/subscriptionDelayedEmail");
const sendCancellationEmail = require("./services/emails/cancellationEmail");
const sendForgotPasswordEmail = require("./services/emails/forgotPasswordEmail");
const createFirebaseUser = require("./services/createFirebaseUser");
const admin = require("./services/firebase");

// Rotas
const reportProblemRoute = require('./routes/reportProblemRoute');
const mailchimpRoute = require('./routes/mailchimp');
const subscriptionRoutes = require('./routes/subscriptionRoute');
const metaRoute = require('./routes/meta');
const whatsappRoute = require('./routes/whatsappRoute');
const webhookAtomicRoute = require('./routes/atomic/webhookAtomic'); // ✅ Nova rota Atomic

// CORS com domínios liberados
const allowedOrigins = [
  "http://localhost:5173",
  "https://petziapp.com",
  "https://www.petziapp.com",
  "https://app.petziapp.com",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Registro das rotas
app.use('/api/report-problem', reportProblemRoute);
app.use('/api/mailchimp', mailchimpRoute);
app.use('/api/subscription', subscriptionRoutes);
app.use('/', metaRoute);
app.use('/', whatsappRoute);

// Webhook da AtomicPay
app.use('/onAtomicpayWebhook', webhookAtomicRoute);

// Webhook da Hotmart
app.post("/onHotmartWebhook", async (req, res) => {
  const payload = req.body;
  const event = payload.event;

  const email =
    payload.data?.buyer?.email ||
    payload.data?.subscriber?.email ||
    payload.data?.subscription?.user?.email ||
    payload.buyer?.email;

  const nome =
    payload.data?.buyer?.name ||
    payload.data?.subscriber?.name ||
    payload.data?.subscription?.user?.name ||
    "Tutor(a)";

  if (!email) return res.status(400).json({ error: "Email não encontrado." });

  try {
    switch (event) {
      case "PURCHASE_APPROVED":
        const senha = Math.random().toString(36).slice(-8);
        const senhaCriada = await createFirebaseUser(email, nome, senha);
        if (senhaCriada) await sendWelcomeEmail(email, nome, senhaCriada);
        break;
      case "PURCHASE_REFUNDED":
        await sendRefundEmail(email, nome);
        break;
      case "PURCHASE_CHARGEBACK":
        await sendChargebackEmail(email, nome);
        break;
      case "PURCHASE_PLAN_CHANGED":
        await sendPlanChangeEmail(email, nome);
        break;
      case "PURCHASE_EXPIRED":
        await sendSubscriptionExpiredEmail(email, nome);
        break;
      case "PURCHASE_DELAYED":
        await sendSubscriptionDelayedEmail(email, nome);
        break;
      case "SUBSCRIPTION_CANCELLATION":
        await sendCancellationEmail(email, nome);
        break;
      default:
        console.log("Evento não tratado:", event);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error("Erro no webhook:", err);
    res.status(500).json({ error: "Erro interno", details: err.message });
  }
});

// Recuperação de senha
app.post("/forgot-password", async (req, res) => {
  const { email, nome } = req.body;
  if (!email) return res.status(400).json({ error: "Email é obrigatório." });

  try {
    const novaSenha = Math.random().toString(36).slice(-8);
    const userRecord = await admin.auth().getUserByEmail(email);
    await admin.auth().updateUser(userRecord.uid, { password: novaSenha });
    await sendForgotPasswordEmail(email, nome || "Tutor(a)", novaSenha);
    res.status(200).json({ success: true, message: "Nova senha enviada." });
  } catch (err) {
    res.status(500).json({ error: "Erro ao redefinir senha." });
  }
});

// Início do servidor
app.listen(3000, () => {
  console.log(`[${new Date().toISOString()}] API rodando na porta 3000.`);
});
