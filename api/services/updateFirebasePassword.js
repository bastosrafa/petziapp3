const admin = require("./firebase");

/**
 * Atualiza a senha de um usuário no Firebase
 * @param {string} email - Email do usuário
 * @param {string} newPassword - Nova senha a ser definida
 * @returns {boolean} - true se atualizou, false se deu erro
 */
async function updateFirebasePassword(email, newPassword) {
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    await admin.auth().updateUser(userRecord.uid, { password: newPassword });
    console.log(`🔄 Senha atualizada com sucesso para: ${email}`);
    return true;
  } catch (err) {
    console.error("❌ Erro ao atualizar senha no Firebase:", err.message || err);
    return false;
  }
}

module.exports = updateFirebasePassword;
