import React from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import './styles.css';

const StatsSummary = () => {
  const { petData, loading, error } = useDashboard();

  if (loading) {
    return <div className="stats-summary-container">Carregando...</div>;
  }

  if (error) {
    return <div className="stats-summary-container">Erro: {error}</div>;
  }

  const formatDateTime = (timestamp) => {
    if (!timestamp) return 'Não registrado';
    const date = new Date(timestamp);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatus = (lastActivity) => {
    if (!lastActivity) return 'Não registrado';
    const now = new Date();
    const last = new Date(lastActivity);
    const hoursDiff = (now - last) / (1000 * 60 * 60);
    return hoursDiff <= 24 ? 'Em dia' : 'Atrasado';
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
              <p className="datetime">{formatDateTime(petData.lastWalk)}</p>
              <span className={`status-badge ${getStatus(petData.lastWalk).toLowerCase()}`}>
                {getStatus(petData.lastWalk)}
              </span>
            </div>
            <div className="activity-item">
              <h4>Última Alimentação</h4>
              <p className="datetime">{formatDateTime(petData.lastFood)}</p>
              <span className={`status-badge ${getStatus(petData.lastFood).toLowerCase()}`}>
                {getStatus(petData.lastFood)}
              </span>
            </div>
          </div>
        </div>

        {/* Card de Vacinação */}
        <div className="stat-card vaccine-card">
          <h3>Vacinação</h3>
          <div className="vaccine-section">
            <div className="vaccine-status">
              <span className={`status-badge ${petData.vaccines.status}`}>
                {petData.vaccines.status === 'up_to_date' ? 'Em dia' : 'Pendente'}
              </span>
            </div>
            {petData.vaccines.nextDose && (
              <div className="next-dose">
                <h4>Próxima Dose</h4>
                <p className="datetime">{formatDateTime(petData.vaccines.nextDose)}</p>
              </div>
            )}
            <div className="vaccine-history">
              <h4>Histórico Recente</h4>
              <p>Última dose: {formatDateTime(petData.vaccines.lastDose)}</p>
            </div>
          </div>
        </div>

        {/* Card de Adestramento */}
        <div className="stat-card training-card">
          <h3>Adestramento</h3>
          <div className="training-section">
            <div className="training-progress">
              <h4>Progresso</h4>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${(petData.training.completedLessons / 10) * 100}%` }}
                />
              </div>
              <p>{petData.training.completedLessons}/10 lições concluídas</p>
            </div>
            <div className="training-stats">
              <div className="stat-item">
                <h4>Tempo Total</h4>
                <p>{petData.training.totalTime} minutos</p>
              </div>
              <div className="stat-item">
                <h4>Nível Atual</h4>
                <p className="level-badge">{petData.training.currentLevel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary; 