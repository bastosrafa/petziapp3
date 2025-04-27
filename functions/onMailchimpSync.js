const functions = require("firebase-functions");
const admin = require("firebase-admin");
const mailchimpService = require("./utils/mailchimpService");

if (admin.apps.length === 0) {
  admin.initializeApp();
}

/**
 * Função que é acionada quando um novo usuário é criado no Firebase Authentication
 * Adiciona o usuário à lista do Mailchimp
 */
exports.onUserCreated = functions.auth.user().onCreate(async (user) => {
  try {
    // Verificar se o objeto user existe e tem email
    if (!user || !user.email) {
      functions.logger.warn('Usuário inválido ou sem email, não sincronizando com Mailchimp');
      return null;
    }

    functions.logger.info(`Novo usuário criado no Firebase Auth: ${user.uid}, email: ${user.email}`);
    
    // Extrair informações do usuário
    const email = user.email;
    const displayName = user.displayName || '';
    
    // Dividir o nome (se disponível)
    let firstName = '';
    let lastName = '';
    
    if (displayName) {
      const nameParts = displayName.split(' ');
      firstName = nameParts[0] || '';
      lastName = nameParts.slice(1).join(' ') || '';
    }
    
    // Adicionar o usuário à lista do Mailchimp com a tag 'novo_cadastro'
    await mailchimpService.addMemberToList(email, firstName, lastName, ['novo_cadastro']);
    
    functions.logger.info(`Usuário adicionado ao Mailchimp com sucesso: ${email}`);
    return null;
  } catch (error) {
    functions.logger.error('Erro ao sincronizar novo usuário com Mailchimp:', error);
    return null;
  }
});

/**
 * Função que é acionada quando um documento de usuário é criado ou atualizado
 * Atualiza as informações do usuário no Mailchimp
 */
exports.onUserDocumentUpdated = functions.firestore
  .document('users/{userId}')
  .onWrite(async (change, context) => {
    try {
      if (!context || !context.params) {
        functions.logger.error('Contexto inválido na função onUserDocumentUpdated');
        return null;
      }
      
      const userId = context.params.userId;
      
      if (!change || !change.after || !change.before) {
        functions.logger.error(`Dados de alteração inválidos para usuário ${userId}`);
        return null;
      }
      
      const newData = change.after.exists ? change.after.data() : null;
      const previousData = change.before.exists ? change.before.data() : null;
      
      // Se o documento foi excluído, não fazemos nada
      if (!newData) {
        functions.logger.info(`Documento do usuário ${userId} foi excluído, nenhuma ação necessária`);
        return null;
      }
      
      // Verificar se o documento tem email
      if (!newData.email) {
        functions.logger.warn(`Documento do usuário ${userId} não tem email, não sincronizando com Mailchimp`);
        return null;
      }

      // Determinar se houve mudança no email
      const emailChanged = previousData && previousData.email !== newData.email;
      
      // Verificar se houve mudança no plano (para atualizar tags)
      const planStatusChanged = 
        (previousData && previousData.planStatus !== newData.planStatus) || 
        !previousData;
      
      functions.logger.info(
        `Documento do usuário atualizado - ${userId}, email: ${newData.email}, ` +
        `Email alterado: ${emailChanged}, Plano alterado: ${planStatusChanged}`
      );
      
      // Se não houve alteração relevante, não fazemos nada
      if (!emailChanged && !planStatusChanged) {
        functions.logger.info(`Nenhuma alteração relevante para o Mailchimp, ignorando atualização`);
        return null;
      }
      
      // Preparar informações do usuário para o Mailchimp
      const email = newData.email;
      const displayName = newData.displayName || newData.name || '';
      
      // Dividir o nome (se disponível)
      let firstName = '';
      let lastName = '';
      
      if (displayName) {
        const nameParts = displayName.split(' ');
        firstName = nameParts[0] || '';
        lastName = nameParts.slice(1).join(' ') || '';
      }
      
      // Determinar as tags com base no status do plano
      const tags = [];
      
      if (newData.plan && newData.plan.name === 'premium') {
        tags.push('cliente_premium');
      } else {
        tags.push('usuario_gratuito');
      }
      
      // Atualizar o usuário no Mailchimp
      await mailchimpService.addMemberToList(email, firstName, lastName, tags);
      
      functions.logger.info(`Usuário atualizado no Mailchimp com sucesso: ${email}`);
      return null;
    } catch (error) {
      functions.logger.error('Erro ao atualizar usuário no Mailchimp:', error);
      return null;
    }
  });

/**
 * Função que é acionada quando uma compra Hotmart é processada
 * Adiciona tags específicas ao usuário no Mailchimp
 */
exports.onHotmartPurchase = functions.https.onRequest(async (req, res) => {
  try {
    // Verificar o método HTTP
    if (!req || req.method !== 'POST') {
      functions.logger.warn(`Método não permitido: ${req ? req.method : 'undefined'}`);
      return res.status(405).send('Método não permitido');
    }
    
    // Obter dados do webhook
    const webhookData = req.body;
    
    // Verificar se os dados são válidos
    if (!webhookData || !webhookData.data || !webhookData.data.buyer || !webhookData.data.buyer.email) {
      functions.logger.warn('Dados de webhook inválidos', webhookData);
      return res.status(400).send('Dados de webhook inválidos');
    }
    
    const buyerEmail = webhookData.data.buyer.email;
    const status = webhookData.data.status;
    
    functions.logger.info(`Processando compra do Hotmart - Email: ${buyerEmail}, Status: ${status}`);
    
    // Processar com base no status
    if (status === 'APPROVED') {
      // Adicionar tag de cliente aprovado no Mailchimp
      await mailchimpService.tagMember(buyerEmail, ['cliente_aprovado', 'cliente_premium']);
      
      functions.logger.info(`Compra aprovada processada para: ${buyerEmail}`);
    } else if (status === 'REFUNDED' || status === 'CHARGEBACK') {
      // Adicionar tag de reembolso/chargeback no Mailchimp
      const tag = status === 'REFUNDED' ? 'cliente_reembolsado' : 'cliente_chargeback';
      await mailchimpService.tagMember(buyerEmail, [tag, 'usuario_gratuito']);
      
      functions.logger.info(`${status} processado para: ${buyerEmail}`);
    }
    
    return res.status(200).send('Webhook processado com sucesso');
  } catch (error) {
    functions.logger.error('Erro ao processar webhook do Hotmart:', error);
    return res.status(500).send('Erro interno ao processar webhook');
  }
}); 