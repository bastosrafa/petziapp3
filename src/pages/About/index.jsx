import React from 'react';
import { 
  Heart, 
  Users, 
  Shield, 
  Award, 
  History, 
  Users2, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Star,
  CheckCircle
} from 'lucide-react';
import './styles.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Sobre o PetziApp</h1>
        <p className="subtitle">Conectando pets e tutores com amor e tecnologia</p>
      </div>

      <div className="about-content">
        {/* Missão e Valores */}
        <section className="about-section">
          <h2>Nossa Missão</h2>
          <p>
            O PetziApp nasceu da paixão por pets e do desejo de tornar a vida dos tutores mais fácil e organizada. 
            Nossa missão é proporcionar uma experiência completa e intuitiva para o cuidado dos seus animais de estimação, 
            promovendo o bem-estar e a saúde dos pets através de ferramentas inovadoras.
          </p>
          
          <div className="features-grid" style={{ marginTop: '2rem' }}>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={24} />
              </div>
              <h3>Amor pelos Pets</h3>
              <p>Desenvolvemos cada funcionalidade pensando no bem-estar e felicidade dos seus animais.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3>Comunidade</h3>
              <p>Conectamos tutores e profissionais para criar uma rede de apoio e compartilhamento.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <h3>Segurança</h3>
              <p>Garantimos a proteção dos dados e a privacidade de todos os usuários.</p>
            </div>
          </div>
        </section>

        {/* História */}
        <section className="about-section">
          <h2>Nossa História</h2>
          <div className="timeline">
            <div className="milestone">
              <div className="milestone-year">2023</div>
              <div className="milestone-content">
                <h3>Início da Jornada</h3>
                <p>O PetziApp foi concebido com a ideia de revolucionar o cuidado com pets.</p>
              </div>
            </div>
            
            <div className="milestone">
              <div className="milestone-year">2024</div>
              <div className="milestone-content">
                <h3>Lançamento</h3>
                <p>Após meses de desenvolvimento e testes, lançamos nossa primeira versão.</p>
              </div>
            </div>
            
            <div className="milestone">
              <div className="milestone-year">Futuro</div>
              <div className="milestone-content">
                <h3>Expansão</h3>
                <p>Planejamos expandir nossos serviços e alcançar mais tutores e pets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="about-section">
          <h2>Nossa Equipe</h2>
          <p>
            Nossa equipe é composta por apaixonados por tecnologia e animais, trabalhando juntos para 
            criar a melhor experiência possível para você e seu pet.
          </p>
          <div className="features-grid" style={{ marginTop: '2rem' }}>
            <div className="feature-card">
              <div className="feature-icon">
                <Users2 size={24} />
              </div>
              <h3>Desenvolvedores</h3>
              <p>Profissionais dedicados a criar soluções inovadoras e intuitivas.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={24} />
              </div>
              <h3>Designers</h3>
              <p>Especialistas em criar interfaces bonitas e funcionais.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <CheckCircle size={24} />
              </div>
              <h3>Suporte</h3>
              <p>Equipe pronta para ajudar e garantir sua satisfação.</p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="about-section">
          <h2>Entre em Contato</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Mail size={24} />
              </div>
              <h3>Email</h3>
              <p>contato@petziapp.com</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Phone size={24} />
              </div>
              <h3>Telefone</h3>
              <p>(11) 99999-9999</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={24} />
              </div>
              <h3>Endereço</h3>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 