const admin = require("./firebase");

/**
 * Cria o usuário no Firebase. 
 * Se já existir, apenas retorna a senha recebida.
 */
async function createFirebaseUser(email, nome, senha) {
  try {
    await admin.auth().createUser({
      email,
      password: senha,
      displayName: nome,
    });
    console.log("✅ Usuário criado no Firebase:", email);
    return senha;
  } catch (error) {
    if (error.code === "auth/email-already-exists") {
      console.log("⚠️ Usuário já existia:", email);
      return senha; // Retorna a senha mesmo que já exista
    } else {
      console.error("❌ Erro ao criar usuário:", error.message);
      throw error;
    }
  }
}

module.exports = createFirebaseUser;
