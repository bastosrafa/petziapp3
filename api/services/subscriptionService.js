const admin = require('firebase-admin');

async function getPlanByEmail(email) {
  const db = admin.firestore();
  const usersRef = db.collection('users');
  const snapshot = await usersRef.where('email', '==', email).get();

  if (snapshot.empty) {
    return { plan: 'Não encontrado' };
  }

  const userData = snapshot.docs[0].data();

  // Lógica robusta para extrair o nome do plano
  const plano =
    typeof userData.plan === 'object' && userData.plan !== null
      ? userData.plan.name
      : userData.plan;

  return { plan: plano || 'Plano não definido' };
}

module.exports = { getPlanByEmail };
