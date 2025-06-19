require('dotenv').config({ path: '/var/www/api/.env' });

const axios = require("axios");
require("dotenv").config();

const WHAPI_URL = "https://gate.whapi.cloud/messages/text";
const WHAPI_TOKEN = process.env.WHAPI_TOKEN;

const messages = {
  walk: [
    "Ei! Já faz um tempinho que não passeamos 🐾 Vamos dar uma voltinha?",
    "Hora do nosso passeio! Estou animado aqui! 🐶",
    "Ei, humano! Que tal uma caminhada juntos agora? 💚"
  ],
  food: [
    "Hora do rango! Minha barriguinha já está roncando! 🍽️",
    "Oi! Já se passaram 12h desde a última refeição. Podemos comer? 🦴",
    "Ei, esqueci de dizer... tô com fome de novo 😅"
  ],
  training: [
    "Vamos treinar juntos hoje? Quero aprender mais! 🧠",
    "Já faz um tempo desde o último treino. Bora praticar? 🐕",
    "Ei! Que tal um tempinho só nosso com treino e petiscos? 🍪"
  ],
  vacine: [
    "Atenção! Minha vacina está chegando (dia {{date}}). Já marcou com o vet? 🩺",
    "Humano, minha vacina é logo mais: {{date}}. Vamos nos preparar! 💉",
    "Oi! Minha saúde em primeiro lugar. Vacina marcada pro dia {{date}}? 💪"
  ],
  health: [
    "Já fazem 3 meses desde minha última consulta 😕 Bora dar uma olhadinha na saúde?",
    "Ei! Já passou o tempo desde o check-up. Vamos ver o vet? 🏥",
    "Hora de cuidar da minha saúde! Agende uma consulta se puder. 🐾"
  ]
};

module.exports = async function processReminders(db) {
  const snapshot = await db.collection("dashboards").get();
  const now = Date.now();

  for (const doc of snapshot.docs) {
    const data = doc.data();
    const userId = doc.id;
    const lastEntries = data.lastEntries || {};

    const userSnap = await db.collection("users").doc(userId).get();
    if (!userSnap.exists) continue;
    const userData = userSnap.data();
    const phone = userData.phone;
    const petName = userData.petName || "seu pet";
    if (!phone) continue;

    const rules = [
      { type: "walk", threshold: 1000 * 60 * 60 * 24 }, // 24h
      { type: "food", threshold: 1000 * 60 * 60 * 12 }, // 12h
      { type: "training", threshold: 1000 * 60 * 60 * 48 }, // 48h
      { type: "vacine", threshold: 1000 * 60 * 60 * 24 * 5, preWarn: true },
      { type: "health", threshold: 1000 * 60 * 60 * 24 * 90, postWarn: true } // 3 meses
    ];

    for (const { type, threshold, preWarn, postWarn } of rules) {
      const last = lastEntries[type];
      if (!last) continue;

      const lastTime = new Date(last).getTime();
      const diff = now - lastTime;

      if (preWarn && diff >= (threshold - 1000 * 60 * 60 * 24) && diff < threshold) {
        const dateStr = new Date(lastTime + threshold).toLocaleDateString("pt-BR");
        const msg = messages[type][Math.floor(Math.random() * messages[type].length)].replace("{{date}}", dateStr);
        await sendWhatsapp(phone, `${petName} diz: ${msg}`);
      } else if (postWarn && diff >= threshold) {
        const msg = messages[type][Math.floor(Math.random() * messages[type].length)];
        await sendWhatsapp(phone, `${petName} diz: ${msg}`);
      } else if (!preWarn && !postWarn && diff >= threshold) {
        const msg = messages[type][Math.floor(Math.random() * messages[type].length)];
        await sendWhatsapp(phone, `${petName} diz: ${msg}`);
      }
    }
  }
};

async function sendWhatsapp(phone, message) {
  if (!phone || !message) return;
  try {
    const res = await axios.post("https://gate.whapi.cloud/messages/text", {
      to: phone,
      body: message
    }, {
      headers: {
        Authorization: `Bearer ${process.env.WHAPI_TOKEN}`
      }
    });
    console.log(`✅ Enviado para ${phone}: ${message}`);
  } catch (err) {
    console.error(`❌ Erro para ${phone}:`, err.response?.data || err.message);
  }
}
