const sgMail = require("@sendgrid/mail");

sgMail.setApiKey("SG.FlkuZ_3VS5iEfJjk39TUQw.-OTAeiyP6m2tpXdNtB1Nj1hChGr_0CvmO8qp8xTYME");

const msg = {
  to: "bastosrafael33@gmail.com",
  from: "Petzia <support@petziapp.com>",
  subject: "Teste direto com SendGrid",
  html: "<h1>Funcionou!</h1><p>Esse e-mail foi enviado diretamente via SendGrid API.</p>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("✅ E-mail enviado com sucesso!");
  })
  .catch((error) => {
    console.error("❌ Erro ao enviar e-mail:", error);
  });
