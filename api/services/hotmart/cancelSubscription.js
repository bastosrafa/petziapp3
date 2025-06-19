const axios = require('axios');

async function cancelHotmartSubscription(email) {
  try {
    const accessToken = process.env.HOTMART_TOKEN;

    const search = await axios.get('https://api.hotmart.com/payments/api/v1/subscriptions', {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { email }
    });

    const subscription = search.data?.subscriptions?.[0];
    if (!subscription?.subscription_id) {
      throw new Error("Assinatura não encontrada para este e-mail.");
    }

    const cancel = await axios.delete(`https://api.hotmart.com/payments/api/v1/subscriptions/${subscription.subscription_id}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    return cancel.data || { success: true };
  } catch (err) {
    console.error("Erro ao cancelar assinatura na Hotmart:", err.message);
    throw err;
  }
}

module.exports = cancelHotmartSubscription;
