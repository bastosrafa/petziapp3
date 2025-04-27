const mailchimp = require('@mailchimp/mailchimp_marketing');
const functions = require('firebase-functions');

// Configuração do Mailchimp
mailchimp.setConfig({
  apiKey: 'cfbdaf1845a64c9c1022ffddecd61f0d-us11',
  server: 'us11', // O servidor está no final da apiKey após o traço (us11)
});

const AUDIENCE_ID = '917a60c311';

/**
 * Adiciona um membro à lista do Mailchimp
 * @param {string} email - Email do usuário
 * @param {string} firstName - Nome do usuário
 * @param {string} lastName - Sobrenome do usuário
 * @param {Object} tags - Tags adicionais para segmentação
 * @returns {Promise<Object>} - Resposta da API do Mailchimp
 */
async function addMemberToList(email, firstName = '', lastName = '', tags = []) {
  if (!email) {
    throw new Error('Email é obrigatório');
  }

  try {
    functions.logger.info(`Adicionando membro ao Mailchimp: ${email}`);
    
    // Verificar se o membro já existe
    let memberExists = false;
    try {
      const memberInfo = await mailchimp.lists.getListMember(
        AUDIENCE_ID,
        emailToMd5(email)
      );
      if (memberInfo && memberInfo.id) {
        memberExists = true;
        functions.logger.info(`Membro já existe no Mailchimp: ${email}`);
      }
    } catch (error) {
      if (error.status !== 404) {
        throw error;
      }
      // 404 significa que o membro não existe, o que é esperado
    }

    if (memberExists) {
      // Atualizar o membro existente
      const response = await mailchimp.lists.updateListMember(
        AUDIENCE_ID,
        emailToMd5(email),
        {
          email_address: email,
          status_if_new: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
          tags: tags,
        }
      );
      functions.logger.info(`Membro atualizado no Mailchimp: ${email}`);
      return response;
    } else {
      // Adicionar um novo membro
      const response = await mailchimp.lists.addListMember(AUDIENCE_ID, {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
        tags: tags,
      });
      functions.logger.info(`Novo membro adicionado ao Mailchimp: ${email}`);
      return response;
    }
  } catch (error) {
    functions.logger.error(`Erro ao adicionar membro ao Mailchimp: ${error}`);
    throw error;
  }
}

/**
 * Converte email para MD5 (formato usado pelo Mailchimp para identificação de usuários)
 * @param {string} email - Email do usuário
 * @returns {string} - Hash MD5 do email
 */
function emailToMd5(email) {
  const crypto = require('crypto');
  return crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
}

/**
 * Marca um usuário com uma tag específica
 * @param {string} email - Email do usuário
 * @param {Array<string>} tags - Tags para adicionar
 * @returns {Promise<Object>} - Resposta da API do Mailchimp
 */
async function tagMember(email, tags) {
  if (!email || !tags || !tags.length) {
    throw new Error('Email e tags são obrigatórios');
  }

  try {
    functions.logger.info(`Adicionando tags ao membro no Mailchimp: ${email}, Tags: ${tags.join(', ')}`);
    
    const response = await mailchimp.lists.updateListMemberTags(
      AUDIENCE_ID,
      emailToMd5(email),
      {
        tags: tags.map(tag => ({
          name: tag,
          status: 'active'
        }))
      }
    );
    
    functions.logger.info(`Tags adicionadas com sucesso ao membro: ${email}`);
    return response;
  } catch (error) {
    functions.logger.error(`Erro ao adicionar tags ao membro: ${error}`);
    throw error;
  }
}

/**
 * Remove um membro da lista do Mailchimp (apenas arquiva, não deleta permanentemente)
 * @param {string} email - Email do usuário
 * @returns {Promise<Object>} - Resposta da API do Mailchimp
 */
async function removeMember(email) {
  if (!email) {
    throw new Error('Email é obrigatório');
  }

  try {
    functions.logger.info(`Removendo membro do Mailchimp: ${email}`);
    
    const response = await mailchimp.lists.updateListMember(
      AUDIENCE_ID,
      emailToMd5(email),
      {
        status: 'unsubscribed'
      }
    );
    
    functions.logger.info(`Membro removido com sucesso: ${email}`);
    return response;
  } catch (error) {
    functions.logger.error(`Erro ao remover membro: ${error}`);
    throw error;
  }
}

module.exports = {
  addMemberToList,
  tagMember,
  removeMember
}; 