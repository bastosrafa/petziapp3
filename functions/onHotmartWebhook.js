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

    if (!handledEvents.includes(event)) {
      return res.status(200).json({ success: true });
    }

    const email = data.buyer.email;
    const name = data.buyer.name;
    const phone_number = data.buyer.checkout_phone_code && data.buyer.checkout_phone
      ? `+55${data.buyer.checkout_phone_code}${data.buyer.checkout_phone}`
      : "";
    const planName = data.subscription?.plan?.name || "free";
    let planObject = {};
    if (event === "PURCHASE_APPROVED") {
      planObject = {
        status: "active",
        name: planName,
        status_date: new Date(),
        renewal_date: data.purchase.date_next_charge
          ? new Date(data.purchase.date_next_charge)
          : null,
        purchase_date: new Date(),
        platform: "hotmart",
      };
    } else if (event === "PURCHASE_REFUNDED") {
      planObject = {
        status: "refunded",
        status_date: new Date(),
      };
    }

    const isReferral = data.buyer.isReferral || false;
    const referrer = data.buyer.referrer || null;

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
            whatsapp: phone_number,
            id: userId,
            plan: planName,
            planObject,
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