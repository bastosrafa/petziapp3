const admin = require("../services/firebase"); // ✅ CERTO

async function updateFirebasePassword(email, newPassword) {
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    await admin.auth().updateUser(userRecord.uid, { password: newPassword });
    return true;
  } catch (err) {
    console.error("Erro ao atualizar senha no Firebase:", err);
    return false;
  }
}

module.exports = updateFirebasePassword;

