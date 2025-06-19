const admin = require("../services/firebase"); // ✅ CERTO
const path = require("path");

// Caminho da chave de acesso ao Firebase
const serviceAccount = require(path.resolve(__dirname, "firebase-service-account.json"));

// Inicializa o Firebase uma única vez
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

/**
 * Cria o usuário e retorna a senha sempre (mesmo se já existir)
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
