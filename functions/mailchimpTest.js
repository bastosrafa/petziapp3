const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors")({ origin: true });
const mailchimpService = require("./utils/mailchimpService");

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const app = express();
app.use(cors);
app.use(express.json());

/**
 * Endpoint para testar a integração com Mailchimp
 * Apenas para fins de desenvolvimento
 */
app.post("/add-member", async (req, res) => {
  try {
    const { email, firstName, lastName, tags } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email é obrigatório" });
    }
    
    // Verificar autenticação via token (apenas para desenvolvimento)
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    if (!idToken) {
      return res.status(401).json({ error: "Não autorizado" });
    }
    
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      if (!decodedToken.admin && decodedToken.email !== email) {
        return res.status(403).json({ error: "Permissão negada" });
      }
    } catch (error) {
      return res.status(401).json({ error: "Token inválido" });
    }
    
    // Adicionar ao Mailchimp
    const result = await mailchimpService.addMemberToList(
      email,
      firstName || "",
      lastName || "",
      tags || []
    );
    
    return res.status(200).json({
      success: true,
      message: "Membro adicionado com sucesso",
      result
    });
  } catch (error) {
    functions.logger.error("Erro no endpoint de teste do Mailchimp:", error);
    return res.status(500).json({
      error: error.message || "Erro interno ao adicionar membro"
    });
  }
});

/**
 * Endpoint para adicionar tags a um membro
 */
app.post("/tag-member", async (req, res) => {
  try {
    const { email, tags } = req.body;
    
    if (!email || !tags || !tags.length) {
      return res.status(400).json({ error: "Email e tags são obrigatórios" });
    }
    
    // Verificar autenticação via token (apenas para desenvolvimento)
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    if (!idToken) {
      return res.status(401).json({ error: "Não autorizado" });
    }
    
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      if (!decodedToken.admin && decodedToken.email !== email) {
        return res.status(403).json({ error: "Permissão negada" });
      }
    } catch (error) {
      return res.status(401).json({ error: "Token inválido" });
    }
    
    // Adicionar tags ao membro
    await mailchimpService.tagMember(email, tags);
    
    return res.status(200).json({
      success: true,
      message: "Tags adicionadas com sucesso"
    });
  } catch (error) {
    functions.logger.error("Erro ao adicionar tags:", error);
    return res.status(500).json({
      error: error.message || "Erro interno ao adicionar tags"
    });
  }
});

exports.mailchimpApi = functions.https.onRequest(app); 