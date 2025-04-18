import React from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import './styles.css';

const StatsSummary = () => {
  const { dashboardData, loading, error } = useDashboard();

  if (loading) {
    return <div className="stats-summary-container">Carregando...</div>;
  }

  if (error) {
    return <div className="stats-summary-container">Erro: {error}</div>;
  }

  if (!dashboardData) {
    return <div className="stats-summary-container">Nenhum dado disponível</div>;
  }

  const formatDateTime = (timestamp) => {
    if (!timestamp) return 'Não registrado';
    try {
      let date;
      
      // Se for um timestamp do Firestore
      if (timestamp.toDate) {
        date = timestamp.toDate();
      }
      // Se for uma string ISO ou objeto Date
      else if (typeof timestamp === 'string' || timestamp instanceof Date) {
        date = new Date(timestamp);
      }
      // Se for um objeto com propriedade seconds (Firestore Timestamp)
      else if (timestamp.seconds) {
        date = new Date(timestamp.seconds * 1000);
      }
      
      // Verificar se a data é válida
      if (!date || isNaN(date.getTime())) {
        console.error('Data inválida:', timestamp);
        return 'Data inválida';
      }
      
      return date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Data inválida';
    }
  };

  const getStatus = (timestamp, type = 'activity') => {
    if (!timestamp) return type === 'vaccine' ? 'pending' : 'atrasado';
    
    if (type === 'vaccine') {
      return timestamp.status === 'Aplicada' ? 'up_to_date' : 'pending';
    }
    
    let lastActivity;
    
    // Se for um timestamp do Firestore
    if (timestamp.toDate) {
      lastActivity = timestamp.toDate();
    }
    // Se for uma string ISO ou objeto Date
    else if (typeof timestamp === 'string' || timestamp instanceof Date) {
      lastActivity = new Date(timestamp);
    }
    // Se for um objeto com propriedade seconds (Firestore Timestamp)
    else if (timestamp.seconds) {
      lastActivity = new Date(timestamp.seconds * 1000);
    }
    
    if (!lastActivity || isNaN(lastActivity.getTime())) {
      console.error('Data inválida:', timestamp);
      return 'atrasado';
    }
    
    const now = new Date();
    const diffHours = (now - lastActivity) / (1000 * 60 * 60);

    // Períodos diferentes para cada tipo de atividade
    if (type === 'food') {
      return diffHours <= 8 ? 'up_to_date' : 'atrasado'; // 8 horas para alimentação
    } else if (type === 'walk') {
      return diffHours <= 24 ? 'up_to_date' : 'atrasado'; // 24 horas para passeio
    }
    
    return diffHours <= 24 ? 'up_to_date' : 'atrasado'; // padrão para outras atividades
  };

  return (
    <div className="stats-summary-container">
      <h2>Estatísticas do Pet</h2>
      <div className="stats-grid">
        {/* Card de Passeio e Alimentação */}
        <div className="stat-card activity-card">
          <h3>Passeio e Alimentação</h3>
          <div className="activity-section">
            <div className="activity-item">
              <div className="content">
                <h4>Último Passeio</h4>
                <p className="datetime">{formatDateTime(dashboardData.activities?.walk?.lastEntry?.timestamp)}</p>
                {dashboardData.activities?.walk?.lastEntry?.notes && (
                  <p className="notes">{dashboardData.activities.walk.lastEntry.notes}</p>
                )}
              </div>
              <div className={`status-badge ${getStatus(dashboardData.activities?.walk?.lastEntry?.timestamp, 'walk')}`}>
                {getStatus(dashboardData.activities?.walk?.lastEntry?.timestamp, 'walk') === 'up_to_date' ? 'Em dia' : 'Atrasado'}
              </div>
            </div>
            <div className="activity-item">
              <div className="content">
                <h4>Última Alimentação</h4>
                <p className="datetime">{formatDateTime(dashboardData.activities?.food?.lastEntry?.timestamp)}</p>
              </div>
              <div className={`status-badge ${getStatus(dashboardData.activities?.food?.lastEntry?.timestamp, 'food')}`}>
                {getStatus(dashboardData.activities?.food?.lastEntry?.timestamp, 'food') === 'up_to_date' ? 'Em dia' : 'Atrasado'}
              </div>
            </div>
          </div>
        </div>

        {/* Card de Vacinação e Treinamento */}
        <div className="stat-card health-training-card">
          <h3>Saúde e Treinamento</h3>
          <div className="health-training-section">
            <div className="vaccine-section">
              <div className="content">
                <h4>Vacinação</h4>
                {dashboardData.health?.vaccines?.nextVaccine && (
                  <div className="next-dose">
                    <p className="datetime">Próxima dose: {formatDateTime(dashboardData.health.vaccines.nextVaccine)}</p>
                  </div>
                )}
                <div className="vaccine-history">
                  <p className="datetime">Última dose: {formatDateTime(dashboardData.health?.vaccines?.lastVaccine)}</p>
                </div>
              </div>
              <div className="vaccine-status">
                <span className={`status-badge ${getStatus(dashboardData.health?.vaccines?.lastVaccine, 'vaccine')}`}>
                  {getStatus(dashboardData.health?.vaccines?.lastVaccine, 'vaccine') === 'up_to_date' ? 'Em dia' : 'Pendente'}
                </span>
              </div>
            </div>

            <div className="training-section">
              <div className="content">
                <h4>Treinamento</h4>
                <div className="training-progress">
                  <p>Progresso: {dashboardData.training?.completedLessons || 0} aulas concluídas</p>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${(dashboardData.training?.completedLessons || 0) * 10}%`,
                        backgroundColor: '#4CAF50'
                      }} 
                    />
                  </div>
                </div>
              </div>
              <p className="level-badge">Nível: {dashboardData.training?.currentLevel || 'Iniciante'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary; 