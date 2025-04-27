const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const sendEmail = require("./utils/sendEmail");

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();
const auth = admin.auth();

exports.onHotmartWebhook = onRequest(
  { memory: "1GiB", timeoutSeconds: 120, cors: false },
  async (req, res) => {
    const handledEvents = ["PURCHASE_APPROVED", "PURCHASE_REFUNDED"];
    const webhook = req.body;
    const data = webhook.data;
    const event = webhook.event;
    let result;
    let planObject = {};

    if (!handledEvents.includes(event)) {
      return res.status(200).json({ success: true });
    }

    const email = data.buyer.email;
    const name = data.buyer.name;
    const phone_number = data.buyer.phone || "";
    const product = data.product.name;
    const full_price = data.purchase.full_price.value;
    const currency = data.purchase.full_price.currency_value;
    const paymentMethod = data.purchase.payment.type;
    const planName = data.subscription?.plan?.name;
    const offer = data.purchase.offer.code;
    const renewalDate = data.purchase.next_charge_date;
    
    // Adicionando estas linhas antes de usar as variáveis
    const isReferral = data.buyer.isReferral || false;
    const referrer = data.buyer.referrer || null;

    if (event === "PURCHASE_APPROVED") {
      planObject = {
        status: "active",
        name: "premium",
        status_date: new Date(),
        renewal_date: renewalDate ? new Date(renewalDate) : null,
        purchase_date: new Date(),
        platform: "hotmart",
      };
    } else if (event === "PURCHASE_REFUNDED") {
      planObject = {
        status: "refunded",
        status_date: new Date(),
      };
    }

    //Consultando a coleção "users" pelo e-mail para obter o ID
    let userRec;
    try {
      userRec = await auth.getUserByEmail(email);
      console.log(
        `[Authentication](INFO): Found user with email ${email}.`
      );
    } catch (error) {
      console.log(
        `[Authentication](INFO): Couldn't find user with email ${email}. Creating user...`
      );
    }

    // Verificar se encontrou o usuário
    if (!userRec) {
      try {
        userRec = await auth.createUser({
          email: email,
          password: "ma990mma",
          displayName: name,
          emailVerified: true,
          disabled: false,
        });
        console.log(
          "User created successfully with email :",
          email
        );
      } catch (error) {
        console.log(error);
        console.log(
          `[Authentication](ERROR) Failed to create user with email: ${email}. Stopping execution...`
        );
        return res.status(500).json({
          success: false,
          message:
            "Erro ao criar usuário no Auth para " + email,
        });
      }
    }

    // Pegando o ID do usuário
    const userId = userRec.uid;

    try {
      await db
        .collection("users")
        .doc(userId)
        .set(
          {
            email: email,
            name: name,
            phone: phone_number,
            id: userId,
            plan: planObject,
            risk: "medium",
            new: true,
            isReferral: isReferral,
            referrer: referrer,
            latam: true,
          },
          { merge: true }
        );
      console.log(
        `[Firestore](OK) Successfuly created user with email: ${email}`
      );
      result = "success";
    } catch (error) {
      console.error(
        `[Firestore](ERROR) Failed to create user with email: ${email}`,
        error
      );
      result = "error";
    }

    // await sendEmail(email, name, password);

    if (result === "success") {
      return res.status(200).json({ 
        success: true,
        message: `[onHotmartWebhook.js] Successfully processed webhook for ${email}`
      });
    } else {
      return res.status(500).json({ success: false });
    }
  }
);