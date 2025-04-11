import React from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Recommendations = () => {
  const { dashboardData } = useDashboard();
  const navigate = useNavigate();

  const handleAction = (type, action) => {
    switch (action) {
      case 'Agendar vacinação':
        navigate('/vacinas');
        break;
      case 'Iniciar treino':
        // Verifica o nível atual e redireciona para o módulo apropriado
        if (!dashboardData.training?.completedLessons || dashboardData.training.completedLessons < 5) {
          navigate('/content/training/starthere');
        } else if (dashboardData.training.completedLessons < 10) {
          navigate('/content/training/behavior');
        } else if (dashboardData.training.completedLessons < 15) {
          navigate('/content/training/socialization');
        } else if (dashboardData.training.completedLessons < 20) {
          navigate('/content/training/hygiene');
        } else if (dashboardData.training.completedLessons < 25) {
          navigate('/content/training/badhabits');
        } else {
          navigate('/content/training/mental');
        }
        break;
      case 'Registrar passeio':
        navigate('/diario');
        break;
      case 'Registrar alimentação':
        navigate('/diario');
        break;
      default:
        break;
    }
  };

  const getRecommendations = () => {
    if (!dashboardData) return [];
    
    const recommendations = [];
    const now = new Date();

    // Verificar vacinas
    if (dashboardData.health?.vaccines?.status === 'pending') {
      recommendations.push({
        type: 'health',
        priority: 1,
        title: 'Vacinação Pendente',
        message: 'É necessário atualizar as vacinas do seu pet.',
        action: 'Agendar vacinação',
        icon: '💉'
      });
    }

    // Verificar passeios
    if (dashboardData.activities?.walk?.lastEntry) {
      const lastWalk = new Date(dashboardData.activities.walk.lastEntry.timestamp);
      const daysSinceLastWalk = (now - lastWalk) / (1000 * 60 * 60 * 24);
      if (daysSinceLastWalk >= 2) {
        recommendations.push({
          type: 'activity',
          priority: 2,
          title: 'Passeio Necessário',
          message: `Último passeio foi há ${Math.floor(daysSinceLastWalk)} dias.`,
          action: 'Registrar passeio',
          icon: '🦮'
        });
      }
    }

    // Verificar alimentação
    if (dashboardData.activities?.food?.lastEntry) {
      const lastFood = new Date(dashboardData.activities.food.lastEntry.timestamp);
      const hoursSinceLastFood = (now - lastFood) / (1000 * 60 * 60);
      if (hoursSinceLastFood >= 24) {
        recommendations.push({
          type: 'activity',
          priority: 2,
          title: 'Alimentação Pendente',
          message: 'Hora de alimentar seu pet.',
          action: 'Registrar alimentação',
          icon: '🍽️'
        });
      }
    }

    // Verificar treinos
    if (dashboardData.training?.completedLessons < 30) {
      recommendations.push({
        type: 'training',
        priority: 3,
        title: 'Treino Pendente',
        message: `${30 - dashboardData.training.completedLessons} lições restantes para completar o nível atual.`,
        action: 'Iniciar treino',
        icon: '🎓'
      });
    }

    // Ordenar por prioridade (1 = mais alta)
    return recommendations.sort((a, b) => a.priority - b.priority);
  };

  const recommendations = getRecommendations();

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-container">
        <h2>Recomendações</h2>
        <div className="no-recommendations">
          <p>🎉 Tudo em dia! Seu pet está bem cuidado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recommendations-container">
      <h2>Recomendações</h2>
      <div className="recommendations-list">
        {recommendations.map((rec, index) => (
          <div 
            key={index} 
            className={`recommendation-card ${rec.type}`}
          >
            <div className="recommendation-icon">{rec.icon}</div>
            <div className="recommendation-content">
              <h3>{rec.title}</h3>
              <p>{rec.message}</p>
              <button 
                className="action-button"
                onClick={() => handleAction(rec.type, rec.action)}
              >
                {rec.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations; 