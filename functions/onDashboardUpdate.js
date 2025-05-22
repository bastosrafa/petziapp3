const { onSchedule } = require("firebase-functions/v2/scheduler");
const { logger } = require("firebase-functions");
const axios = require("axios"); // Rodar npm i axios dentro da pasta functions

const admin = require("firebase-admin");

if (admin.apps.length === 0) {
  admin.initializeApp();
}

exports.processReminders = onSchedule(
  {
    schedule: "every 5 minutes",
    memory: "1GiB",
    timeoutSeconds: 540,
  },
  async () => {
    const db = admin.firestore();

    // TODO: Implementar a lógica do cron

    // Fazer query da coleção dashboards e verificar quando foi o "lastEntry" de cada campo
    // Como o campo "walk", "health", "food", e training, vacine
    // Para Vacine e Health, considerar regras de lembretes antes da data de aplicação (para o tutor se planejar)
    // verificar se o último registor é maior do que o padrão esperado para o tipo de atividade
    // Se for, usar o axios para fazer um POST na API do whapi.cloud para lembrar o usuário
    // através do WhatsApp.
  }
); 