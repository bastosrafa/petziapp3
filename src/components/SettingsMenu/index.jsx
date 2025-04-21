import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import { useOnboarding } from '@/contexts/OnboardingContext';
import './styles.css';

const SettingsMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { logout } = useAuthContext();
  const { resetOnboarding } = useOnboarding();
  const [activeSection, setActiveSection] = useState(null);
  const [isResetting, setIsResetting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const menuItems = [
    {
      id: 'profile',
      icon: '👤',
      label: 'Perfil',
      description: 'Gerencie suas informações pessoais'
    },
    {
      id: 'notifications',
      icon: '🔔',
      label: 'Notificações',
      description: 'Configure suas preferências de notificação'
    },
    {
      id: 'updatePet',
      icon: '🐾',
      label: 'Atualizar Informações do Pet',
      description: 'Refaça o cadastro para atualizar os dados do seu pet'
    },
    {
      id: 'help',
      icon: '❓',
      label: 'Ajuda',
      description: 'Encontre respostas para suas dúvidas'
    },
    {
      id: 'reportProblem',
      icon: '🐞',
      label: 'Reporte um Problema',
      description: 'Informe-nos sobre algum problema que encontrou'
    },
    {
      id: 'terms',
      icon: '📜',
      label: 'Termos de Uso',
      description: 'Leia nossos termos e condições'
    },
    {
      id: 'privacy',
      icon: '🔒',
      label: 'Privacidade',
      description: 'Conheça nossa política de privacidade'
    }
  ];

  const handleItemClick = (itemId) => {
    setActiveSection(itemId);
    // Aqui você pode adicionar a navegação para cada seção
    switch (itemId) {
      case 'profile':
        navigate('/profile');
        onClose();
        break;
      case 'notifications':
        navigate('/notifications');
        onClose();
        break;
      case 'updatePet':
        setShowConfirmation(true);
        break;
      case 'help':
        navigate('/help');
        onClose();
        break;
      case 'reportProblem':
        navigate('/report-problem');
        onClose();
        break;
      case 'terms':
        navigate('/terms');
        onClose();
        break;
      case 'privacy':
        navigate('/privacy');
        onClose();
        break;
      default:
        break;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleResetOnboarding = async () => {
    setIsResetting(true);
    try {
      await resetOnboarding();
      onClose();
      navigate('/onboarding');
    } catch (error) {
      console.error('Erro ao resetar onboarding:', error);
      setIsResetting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-menu" onClick={e => e.stopPropagation()}>
        <div className="settings-header">
          <h2>Configurações</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="settings-content">
          {menuItems.map(item => (
            <div
              key={item.id}
              className={`settings-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="item-icon">{item.icon}</span>
              <div className="item-info">
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
              <span className="item-arrow">→</span>
            </div>
          ))}
        </div>

        {showConfirmation && (
          <div className="confirmation-modal">
            <div className="confirmation-content">
              <h3>Atualizar Informações do Pet</h3>
              <p>Esta ação irá resetar as informações do seu pet e você precisará refazer o cadastro. Deseja continuar?</p>
              <div className="confirmation-buttons">
                <button 
                  className="cancel-button" 
                  onClick={() => setShowConfirmation(false)}
                  disabled={isResetting}
                >
                  Cancelar
                </button>
                <button 
                  className="confirm-button" 
                  onClick={handleResetOnboarding}
                  disabled={isResetting}
                >
                  {isResetting ? 'Processando...' : 'Confirmar'}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="settings-footer">
          <button className="logout-button" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu; 