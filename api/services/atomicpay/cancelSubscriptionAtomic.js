const axios = require('axios');

async function cancelAtomicpaySubscription(email) {
  try {
    const token = process.env.ATOMICPAY_TOKEN;
    const apiUrl = process.env.ATOMICPAY_API_URL || 'https://api.atomicpay.io/v1';

    // 1. Buscar assinatura pelo e-mail (ajustar conforme a documentação da AtomicPay)
    const search = await axios.get(`${apiUrl}/subscriptions`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { email }
    });

    const subscription = search.data?.subscriptions?.[0];
    if (!subscription?.id) {
      throw new Error("Assinatura não encontrada para este e-mail.");
    }

    // 2. Cancelar a assinatura encontrada
    const cancel = await axios.post(`${apiUrl}/subscriptions/${subscription.id}/cancel`, null, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return cancel.data || { success: true };
  } catch (err) {
    console.error("Erro ao cancelar assinatura na AtomicPay:", err.message);
    throw err;
  }
}

module.exports = cancelAtomicpaySubscription;
