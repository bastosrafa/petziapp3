import React from 'react';
import { 
  FileText, 
  Shield, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  BookOpen,
  Mail,
  Phone
} from 'lucide-react';
import './styles.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Termos de Uso</h1>
        <p className="subtitle">Última atualização: 01/01/2024</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2><FileText className="icon" /> Introdução</h2>
          <p>
            Bem-vindo ao PetziApp. Ao acessar e usar nosso aplicativo, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
          </p>
        </section>

        <section className="terms-section">
          <h2><Shield className="icon" /> Aceitação dos Termos</h2>
          <p>
            Ao utilizar o PetziApp, você concorda com estes termos de uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso aplicativo.
          </p>
        </section>

        <section className="terms-section">
          <h2><AlertCircle className="icon" /> Uso do Aplicativo</h2>
          <div className="terms-list">
            <div className="term-item">
              <CheckCircle2 className="icon" />
              <p>O PetziApp é destinado apenas para uso pessoal e não comercial.</p>
            </div>
            <div className="term-item">
              <CheckCircle2 className="icon" />
              <p>Você é responsável por manter a confidencialidade de sua conta e senha.</p>
            </div>
            <div className="term-item">
              <CheckCircle2 className="icon" />
              <p>Você concorda em não usar o aplicativo para qualquer finalidade ilegal ou não autorizada.</p>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2><Clock className="icon" /> Modificações</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no aplicativo.
          </p>
        </section>

        <section className="terms-section">
          <h2><BookOpen className="icon" /> Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do PetziApp, incluindo textos, gráficos, logotipos, ícones e software, é propriedade do PetziApp e está protegido por leis de direitos autorais.
          </p>
        </section>

        <section className="terms-section">
          <h2>Contato</h2>
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="icon" />
              <p>contato@petziapp.com</p>
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

export default Terms; 