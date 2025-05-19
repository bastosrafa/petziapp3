const express = require("express");
const { messaging, firestore } = require("../firebaseinit");
const { getMessaging } = require("firebase/messaging");

const router = express.Router();

const verifyToken = async (req, res, next) => {
  const token = req.headers.authentication.split(" ")[1];

  let claims;
  try {
    claims = await auth.verifyIdToken(token, true);
    req.body.claims = claims;
  } catch (error) {
    console.log(error);
  }

  req.body.userId = claims.uid;

  next();
};

router.post("/", verifyToken, async (req, res) => {
  const { token } = req.body;
  const userId = req.body.userId;

  if (!token || !userId) {
    return res.status(400).json({ success: false, message: "Token e userId são obrigatórios." });
  }

  try {
    await firestore.collection("tokens").doc(userId).set({ token });
    res.status(200).json({ success: true, message: "Token salvo com sucesso." });
  } catch (error) {
    console.error("Erro ao salvar token:", error);
    res.status(500).json({ success: false, message: "Erro ao salvar token." });
  }
});

module.exports = router;
