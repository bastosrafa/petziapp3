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
      // Se já for um objeto Date, use diretamente
      let date = timestamp instanceof Date ? timestamp : null;
      
      // Se não for Date, tente converter
      if (!date) {
        // Se for uma string ISO, converta para Date
        if (typeof timestamp === 'string') {
          date = new Date(timestamp);
        }
        // Se for um timestamp do Firestore, converta para Date
        else if (timestamp.toDate) {
          date = timestamp.toDate();
        }
        // Se for um objeto com propriedades de data
        else if (timestamp.date) {
          date = timestamp.date instanceof Date ? timestamp.date : new Date(timestamp.date);
        }
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

  const getStatus = (lastActivity) => {
    if (!lastActivity) return 'Não registrado';
    try {
      const now = new Date();
      let last = null;
      
      // Se já for um objeto Date, use diretamente
      if (lastActivity instanceof Date) {
        last = lastActivity;
      }
      // Se for uma string ISO, converta para Date
      else if (typeof lastActivity === 'string') {
        last = new Date(lastActivity);
      }
      // Se for um timestamp do Firestore, converta para Date
      else if (lastActivity.toDate) {
        last = lastActivity.toDate();
      }
      // Se for um objeto com propriedades de data
      else if (lastActivity.date) {
        last = lastActivity.date instanceof Date ? lastActivity.date : new Date(lastActivity.date);
      }
      
      if (!last || isNaN(last.getTime())) {
        console.error('Data inválida:', lastActivity);
        return 'Data inválida';
      }
      
      const hoursDiff = (now - last) / (1000 * 60 * 60);
      return hoursDiff <= 24 ? 'Em dia' : 'Atrasado';
    } catch (error) {
      console.error('Error calculating status:', error);
      return 'Data inválida';
    }
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
              <h4>Último Passeio</h4>
              <p className="datetime">{formatDateTime(dashboardData.activities?.walk?.lastEntry?.timestamp)}</p>
              {dashboardData.activities?.walk?.lastEntry?.notes && (
                <p className="notes">{dashboardData.activities.walk.lastEntry.notes}</p>
              )}
              <span className={`status-badge ${getStatus(dashboardData.activities?.walk?.lastEntry?.timestamp).toLowerCase()}`}>
                {getStatus(dashboardData.activities?.walk?.lastEntry?.timestamp)}
              </span>
            </div>
            <div className="activity-item">
              <h4>Última Alimentação</h4>
              <p className="datetime">{formatDateTime(dashboardData.activities?.food?.lastEntry?.timestamp)}</p>
              {dashboardData.activities?.food?.lastEntry?.notes && (
                <p className="notes">{dashboardData.activities.food.lastEntry.notes}</p>
              )}
              <span className={`status-badge ${getStatus(dashboardData.activities?.food?.lastEntry?.timestamp).toLowerCase()}`}>
                {getStatus(dashboardData.activities?.food?.lastEntry?.timestamp)}
              </span>
            </div>
          </div>
        </div>

        {/* Card de Vacinação */}
        <div className="stat-card vaccine-card">
          <h3>Vacinação</h3>
          <div className="vaccine-section">
            <div className="vaccine-status">
              <span className={`status-badge ${dashboardData.health?.vaccines?.status || 'pending'}`}>
                {dashboardData.health?.vaccines?.status === 'up_to_date' ? 'Em dia' : 'Pendente'}
              </span>
            </div>
            {dashboardData.health?.vaccines?.nextVaccine && (
              <div className="next-dose">
                <h4>Próxima Dose</h4>
                <p className="datetime">{formatDateTime(dashboardData.health.vaccines.nextVaccine)}</p>
              </div>
            )}
            <div className="vaccine-history">
              <h4>Histórico Recente</h4>
              <p>Última dose: {formatDateTime(dashboardData.health?.vaccines?.lastVaccine)}</p>
            </div>
          </div>
        </div>

        {/* Card de Treinamento */}
        <div className="stat-card training-card">
          <h3>Treinamento</h3>
          <div className="training-section">
            <div className="training-progress">
              <h4>Progresso</h4>
              <p>Nível: {dashboardData.training?.currentLevel || 'Iniciante'}</p>
              <p>Lições completadas: {dashboardData.training?.completedLessons || 0}</p>
            </div>
            {dashboardData.training?.lastSession && (
              <div className="last-session">
                <h4>Última Sessão</h4>
                <p className="datetime">{formatDateTime(dashboardData.training.lastSession)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary; 