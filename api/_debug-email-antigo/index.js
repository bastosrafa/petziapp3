const express = require("express");
const app = express();
const sendWelcomeEmail = require("./services/emails/welcomeEmail");
const sendRefundEmail = require("./services/emails/refundEmail");
const sendChargebackEmail = require("./services/emails/chargebackEmail");
const sendPlanChangeEmail = require("./services/emails/planChangeEmail");
const sendSubscriptionExpiredEmail = require("./services/emails/subscriptionExpiredEmail");
const sendSubscriptionDelayedEmail = require("./services/emails/subscriptionDelayedEmail");
const sendCancellationEmail = require("./services/emails/cancellationEmail");
const sendForgotPasswordEmail = require("./services/emails/forgotPasswordEmail");
const createFirebaseUser = require("./services/createFirebaseUser");
const admin = require("firebase-admin");
const serviceAccount = require("./config/firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const allowedOrigins = [
  "http://localhost:5173",
  "https://app.petziapp.com",
];

// Middleware para CORS
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

// Função auxiliar para gerar senha temporária
function gerarSenhaTemporaria() {
  return Math.random().toString(36).slice(-8);
}

// Rota para receber Webhook da Hotmart
app.post("/onHotmartWebhook", async (req, res) => {
  const payload = req.body;

  console.log("🔥 Webhook recebido:", JSON.stringify(payload, null, 2));

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

  if (!email) {
    console.error("❌ Email não encontrado no payload.");
    return res.status(400).json({ error: "Email não encontrado." });
  }

  try {
    switch (event) {
      case "PURCHASE_APPROVED":
        const senha = gerarSenhaTemporaria();
        const senhaCriada = await createFirebaseUser(email, nome, senha);

        if (senhaCriada) {
          console.log("✔️ Enviando Welcome Email para:", email);
          await sendWelcomeEmail(email, nome, senhaCriada);
          console.log("✅ Welcome Email enviado para:", email);
        } else {
          console.log("⚠️ Usuário já existia. Welcome Email não reenviado:", email);
        }
        break;

      case "PURCHASE_REFUNDED":
        console.log("✔️ Enviando Refund Email para:", email);
        await sendRefundEmail(email, nome);
        console.log("✅ Refund Email enviado para:", email);
        break;

      case "PURCHASE_CHARGEBACK":
        console.log("✔️ Enviando Chargeback Email para:", email);
        await sendChargebackEmail(email, nome);
        console.log("✅ Chargeback Email enviado para:", email);
        break;

      case "PURCHASE_PLAN_CHANGED":
        console.log("✔️ Enviando Plan Change Email para:", email);
        await sendPlanChangeEmail(email, nome);
        console.log("✅ Plan Change Email enviado para:", email);
        break;

      case "PURCHASE_EXPIRED":
        console.log("✔️ Enviando Subscription Expired Email para:", email);
        await sendSubscriptionExpiredEmail(email, nome);
        console.log("✅ Subscription Expired Email enviado para:", email);
        break;

      case "PURCHASE_DELAYED":
        console.log("✔️ Enviando Subscription Delayed Email para:", email);
        await sendSubscriptionDelayedEmail(email, nome);
        console.log("✅ Subscription Delayed Email enviado para:", email);
        break;

      case "SUBSCRIPTION_CANCELLATION":
        console.log("✔️ Enviando Subscription Cancellation Email para:", email);
        await sendCancellationEmail(email, nome);
        console.log("✅ Subscription Cancellation Email enviado para:", email);
        break;

      default:
        console.log("⚠️ Evento não tratado:", event);
    }
  } catch (err) {
    console.error("❌ Erro ao processar webhook:", err.response?.data || err.message);
  }

  res.status(200).json({ received: true });
});

// Nova rota para recuperação de senha
app.post("/forgot-password", async (req, res) => {
  const { email, nome } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email é obrigatório." });
  }

  try {
    const novaSenha = gerarSenhaTemporaria();

    const userRecord = await admin.auth().getUserByEmail(email);
    await admin.auth().updateUser(userRecord.uid, { password: novaSenha });

    await sendForgotPasswordEmail(email, nome || "Tutor(a)", novaSenha);

    console.log(`🔐 Nova senha enviada para: ${email}`);
    res.status(200).json({ success: true, message: "Nova senha enviada." });
  } catch (err) {
    console.error("❌ Erro ao redefinir senha:", err.message || err);
    res.status(500).json({ error: "Erro ao redefinir senha." });
  }
});

// Start servidor
app.listen(3000, () => {
  console.log(`[${new Date().toISOString()}] API rodando na porta 3000.`);
});
