const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '1bbb6ae98bcbfc3e204bfa877790a1f5-us5',
  server: 'us5'
});

async function addToMailchimp({ nome, email, telefone, quiz }) {
  try {
    const merge_fields = {
      FNAME: nome,
      PHONE: telefone,
      DOR1: quiz?.dificuldades || '',
      DOR2: quiz?.comportamento || '',
      DOR3: quiz?.organizacao || '',
      DOR4: quiz?.esquecimento || '',
      DOR5: quiz?.tempo || '',
      DOR6: quiz?.app || ''
    };

    const response = await mailchimp.lists.addListMember('57537adaea', {
      email_address: email,
      status: 'subscribed',
      merge_fields,
      tags: ['lead_quiz_petzia']
    });

    return { success: true, response };
  } catch (error) {
    console.error('Erro Mailchimp:', error.response?.body || error.message);
    return { success: false, error: error.response?.body || error.message };
  }
}

module.exports = { addToMailchimp };
