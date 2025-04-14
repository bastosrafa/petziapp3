import React from 'react';
import { 
  Shield, 
  Lock, 
  Database, 
  Cookie,
  Eye,
  Mail,
  Phone,
  AlertCircle
} from 'lucide-react';
import './styles.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Política de Privacidade</h1>
        <p className="subtitle">Última atualização: 01/01/2024</p>
      </div>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2><Shield className="icon" /> Introdução</h2>
          <p>
            A privacidade dos nossos usuários é de extrema importância para nós. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
          </p>
        </section>

        <section className="privacy-section">
          <h2><Lock className="icon" /> Coleta de Dados</h2>
          <div className="privacy-list">
            <div className="privacy-item">
              <AlertCircle className="icon" />
              <p>Informações básicas de cadastro (nome, email, telefone)</p>
            </div>
            <div className="privacy-item">
              <AlertCircle className="icon" />
              <p>Dados do seu pet (nome, raça, idade, histórico médico)</p>
            </div>
            <div className="privacy-item">
              <AlertCircle className="icon" />
              <p>Informações de uso do aplicativo</p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2><Database className="icon" /> Uso dos Dados</h2>
          <p>
            Utilizamos suas informações para:
          </p>
          <div className="privacy-list">
            <div className="privacy-item">
              <AlertCircle className="icon" />
              <p>Fornecer e melhorar nossos serviços</p>
            </div>
            <div className="privacy-item">
              <AlertCircle className="icon" />
              <p>Enviar notificações importantes</p>
            </div>
            <div className="privacy-item">
              <AlertCircle className="icon" />
              <p>Personalizar sua experiência no aplicativo</p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2><Cookie className="icon" /> Cookies e Tecnologias Similares</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do aplicativo e personalizar o conteúdo.
          </p>
        </section>

        <section className="privacy-section">
          <h2><Eye className="icon" /> Compartilhamento de Dados</h2>
          <p>
            Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contato</h2>
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="icon" />
              <p>privacidade@petziapp.com</p>
            </div>
            <div className="contact-item">
              <Phone className="icon" />
              <p>(11) 1234-5678</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 