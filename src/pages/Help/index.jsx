import React, { useState } from 'react';
import { HelpCircle, User, Bell, Lock, Shield, MessageSquare, CreditCard, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import './styles.css';

const Help = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const helpTopics = [
    {
      icon: <User size={24} />,
      title: 'Conta e Perfil',
      items: [
        {
          question: 'Como criar uma conta',
          answer: 'Para criar uma conta, clique em "Cadastrar" na tela de login. Preencha seus dados pessoais, incluindo nome, email e senha. Após o cadastro, você receberá um email de confirmação.'
        },
        {
          question: 'Como editar seu perfil',
          answer: 'Acesse o menu "Perfil" e clique no ícone de edição. Você pode atualizar suas informações pessoais, foto de perfil e preferências de notificação.'
        },
        {
          question: 'Como adicionar um pet',
          answer: 'No menu "Perfil", clique em "Adicionar Pet". Preencha as informações do seu pet, incluindo nome, espécie, raça, data de nascimento e foto.'
        },
        {
          question: 'Como gerenciar múltiplos pets',
          answer: 'Você pode adicionar quantos pets desejar. Use o seletor de pets no topo da tela para alternar entre eles. Cada pet tem seu próprio perfil e histórico.'
        }
      ]
    },
    {
      icon: <Bell size={24} />,
      title: 'Notificações',
      items: [
        {
          question: 'Como ativar/desativar notificações',
          answer: 'Acesse o menu "Notificações" e use os interruptores para ativar ou desativar cada tipo de notificação. Você pode personalizar quais alertas deseja receber.'
        },
        {
          question: 'Tipos de notificações disponíveis',
          answer: 'Oferecemos notificações para: lembretes de alimentação, passeios, vacinas, consultas veterinárias, treinamentos e eventos importantes do seu pet.'
        },
        {
          question: 'Configurar horários de lembretes',
          answer: 'Em cada tipo de notificação, você pode definir horários específicos. Por exemplo, para alimentação, você pode configurar os horários das refeições do seu pet.'
        },
        {
          question: 'Solução de problemas com notificações',
          answer: 'Se não estiver recebendo notificações, verifique as configurações do seu navegador e dispositivo. Certifique-se de que o PetziApp tem permissão para enviar notificações.'
        }
      ]
    },
    {
      icon: <Lock size={24} />,
      title: 'Privacidade e Segurança',
      items: [
        {
          question: 'Configurações de privacidade',
          answer: 'No menu "Configurações", você pode controlar quem pode ver as informações do seu pet, definir senhas de acesso e gerenciar permissões de compartilhamento.'
        },
        {
          question: 'Como proteger sua conta',
          answer: 'Use uma senha forte, ative a autenticação de dois fatores e mantenha seu email de recuperação atualizado. Nunca compartilhe suas credenciais de acesso.'
        },
        {
          question: 'Gerenciamento de dados',
          answer: 'Você pode exportar ou excluir seus dados a qualquer momento. Acesse "Configurações > Privacidade" para gerenciar suas informações.'
        },
        {
          question: 'Política de privacidade',
          answer: 'Nossa política de privacidade detalha como coletamos, usamos e protegemos seus dados. Você pode acessá-la em "Configurações > Privacidade".'
        }
      ]
    },
    {
      icon: <Shield size={24} />,
      title: 'Segurança do Pet',
      items: [
        {
          question: 'Como adicionar informações médicas',
          answer: 'No perfil do seu pet, acesse a seção "Saúde". Aqui você pode registrar histórico médico, alergias, medicamentos e condições especiais.'
        },
        {
          question: 'Registro de vacinas',
          answer: 'Na seção "Vacinas", você pode registrar todas as vacinas do seu pet, incluindo datas, próximas doses e documentos comprovantes.'
        },
        {
          question: 'Histórico de consultas',
          answer: 'Mantenha um registro completo das consultas veterinárias, incluindo diagnósticos, tratamentos e recomendações do veterinário.'
        },
        {
          question: 'Emergências veterinárias',
          answer: 'Em caso de emergência, acesse a seção "Emergências" para encontrar veterinários 24h próximos e informações de primeiros socorros.'
        }
      ]
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Suporte',
      items: [
        {
          question: 'Como entrar em contato com o suporte',
          answer: 'Você pode nos contatar através do chat dentro do app, email (suporte@petziapp.com) ou telefone (0800-123-4567).'
        },
        {
          question: 'FAQ - Perguntas frequentes',
          answer: 'Acesse nossa seção de perguntas frequentes para encontrar respostas rápidas para as dúvidas mais comuns sobre o uso do app.'
        },
        {
          question: 'Reportar problemas',
          answer: 'Use o botão "Reportar Problema" nas configurações para enviar detalhes sobre qualquer problema técnico que encontrar.'
        },
        {
          question: 'Sugerir melhorias',
          answer: 'Valorizamos seu feedback! Use o formulário de sugestões para compartilhar ideias de melhorias para o PetziApp.'
        }
      ]
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Pagamentos e Assinatura',
      items: [
        {
          question: 'Planos disponíveis',
          answer: 'Oferecemos planos mensais e anuais, com diferentes níveis de acesso. Compare os planos em "Configurações > Assinatura".'
        },
        {
          question: 'Como atualizar seu plano',
          answer: 'Acesse "Configurações > Assinatura" e escolha o novo plano. O upgrade será aplicado imediatamente, com cobrança proporcional.'
        },
        {
          question: 'Métodos de pagamento',
          answer: 'Aceitamos cartões de crédito, débito, PIX e boleto bancário. Os pagamentos são processados de forma segura.'
        },
        {
          question: 'Cancelamento de assinatura',
          answer: 'Você pode cancelar sua assinatura a qualquer momento em "Configurações > Assinatura". O acesso será mantido até o fim do período pago.'
        }
      ]
    }
  ];

  const toggleItem = (topicIndex, itemIndex) => {
    const key = `${topicIndex}-${itemIndex}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="help-container">
      <div className="help-header">
        <HelpCircle size={32} />
        <h1>Central de Ajuda</h1>
        <p>Encontre respostas para suas dúvidas mais comuns</p>
      </div>

      <div className="search-box">
        <input 
          type="text" 
          placeholder="Pesquisar tópicos de ajuda..." 
          className="search-input"
        />
      </div>

      <div className="help-grid">
        {helpTopics.map((topic, topicIndex) => (
          <div key={topicIndex} className="help-card">
            <div className="help-card-icon">
              {topic.icon}
            </div>
            <h3>{topic.title}</h3>
            <ul>
              {topic.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <div 
                    className="help-item-header"
                    onClick={() => toggleItem(topicIndex, itemIndex)}
                  >
                    <span>{item.question}</span>
                    {expandedItems[`${topicIndex}-${itemIndex}`] ? 
                      <ChevronUp size={20} /> : 
                      <ChevronDown size={20} />
                    }
                  </div>
                  {expandedItems[`${topicIndex}-${itemIndex}`] && (
                    <div className="help-item-content">
                      {item.answer}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h2>Precisa de mais ajuda?</h2>
        <p>Nossa equipe de suporte está pronta para ajudar você</p>
        <button className="contact-button">
          Entrar em Contato
        </button>
      </div>
    </div>
  );
};

export default Help; 