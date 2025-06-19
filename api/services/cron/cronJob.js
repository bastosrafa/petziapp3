const cron = require("node-cron");
const admin = require("firebase-admin");
const processReminders = require("./reminder");

const serviceAccount = require("../firebase-service-account.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Agenda para rodar a cada 5 minutos
cron.schedule("*/5 * * * *", async () => {
  console.log("Executando cron de lembretes -", new Date().toISOString());
  try {
    await processReminders(admin.firestore());
  } catch (err) {
    console.error("Erro no cron:", err.message);
  }
});
