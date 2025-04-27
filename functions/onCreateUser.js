const functions = require("firebase-functions");
const admin = require("firebase-admin");
const generateReferrerId = require("./utils/generateReferrerId");

if (admin.apps.length === 0) {
  admin.initializeApp();
}

exports.onCreateUser = functions.auth.user().onCreate(async (user) => {
  try {
    // Verifica se o usuário existe
    if (!user) {
      functions.logger.error("User object is undefined");
      return null;
    }
    
    const userId = user.uid;
    const db = admin.firestore();
    
    // Verificar se o usuário já possui um documento de referral
    const referralRef = db.collection("referrals2").doc(userId);
    const referralDoc = await referralRef.get();
    
    if (!referralDoc.exists) {
      // Gerar um novo código de referência
      const referrerId = generateReferrerId();
      
      // Criar o documento de referral para o novo usuário
      await referralRef.set({
        userId: userId,
        referrerId: referrerId,
        successfulReferrals: 0,
        totalRevenue: 0,
        createdAt: new Date()
      });
      
      functions.logger.log(`Documento de referral criado para o usuário: ${userId} com código: ${referrerId}`);
    }
    
    return null;
  } catch (error) {
    functions.logger.error("Erro ao criar documento de referral:", error);
    return null;
  }
}); 