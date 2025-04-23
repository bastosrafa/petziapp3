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
      
      console.log('Formatando data para timestamp (tipo):', typeof timestamp, timestamp);
      
      // Verificar se é um objeto Date JavaScript nativo
      if (Object.prototype.toString.call(timestamp) === "[object Date]") {
        console.log('É um objeto Date nativo');
        date = timestamp;
      }
      // Se for uma string que representa uma data
      else if (typeof timestamp === 'string' && !isNaN(new Date(timestamp).getTime())) {
        console.log('É uma string de data válida');
        date = new Date(timestamp);
      }
      // Se for um timestamp Firestore
      else if (timestamp && typeof timestamp === 'object' && timestamp.toDate) {
        console.log('É um timestamp Firestore');
        date = timestamp.toDate();
      }
      // Se for um objeto com seconds (formato Firestore)
      else if (timestamp && typeof timestamp === 'object' && timestamp.seconds) {
        console.log('É um objeto com seconds');
        date = new Date(timestamp.seconds * 1000);
      }
      // Se for um objeto com propriedade date
      else if (timestamp && typeof timestamp === 'object' && timestamp.date) {
        console.log('Tem propriedade date:', timestamp.date);
        
        // Se a propriedade date for um timestamp Firestore
        if (timestamp.date.toDate) {
          console.log('date é um timestamp Firestore');
          date = timestamp.date.toDate();
        }
        // Se a propriedade date for um objeto com seconds
        else if (timestamp.date.seconds) {
          console.log('date tem seconds');
          date = new Date(timestamp.date.seconds * 1000);
        }
        // Se a propriedade date for uma string ou Date
        else if (typeof timestamp.date === 'string') {
          console.log('date é uma string');
          date = new Date(timestamp.date);
        }
        else if (Object.prototype.toString.call(timestamp.date) === "[object Date]") {
          console.log('date é um objeto Date');
          date = timestamp.date;
        }
      }
      // Tentar outras propriedades
      else if (timestamp && typeof timestamp === 'object') {
        if (timestamp.appliedDate) {
          console.log('Tentando usar appliedDate');
          date = new Date(timestamp.appliedDate);
        }
        else if (timestamp.timestamp) {
          console.log('Tentando usar timestamp');
          date = new Date(timestamp.timestamp);
        }
      }
      
      // Verificar se a data é válida
      if (!date || isNaN(date.getTime())) {
        console.log('Data inválida ou não reconhecida:', timestamp);
        return 'Data não disponível';
      }
      
      const formattedDate = date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      console.log('Data formatada final:', formattedDate);
      return formattedDate;
    } catch (error) {
      console.error('Erro ao formatar data:', error, timestamp);
      return 'Data não disponível';
    }
  };

  // Função especial apenas para vacinas
  const formatVaccineDate = (vaccine) => {
    if (!vaccine) return 'Não registrado';
    
    try {
      console.log('Formatando data de vacina:', vaccine);
      
      // Primeiro tenta usar o campo date diretamente
      if (vaccine.date) {
        const dateStr = formatDateTime(vaccine.date);
        if (dateStr !== 'Data não disponível') {
          return dateStr;
        }
      }
      
      // Se falhar, tenta extrair de outras propriedades
      if (vaccine.appliedDate) {
        return formatDateTime(vaccine.appliedDate);
      }
      
      if (vaccine.timestamp) {
        return formatDateTime(vaccine.timestamp);
      }
      
      // Se não encontrar uma data válida em nenhum campo específico
      // Passa o objeto inteiro para o formatDateTime tentar em todas as propriedades
      return formatDateTime(vaccine);
    } catch (error) {
      console.error('Erro ao formatar data da vacina:', error);
      return 'Data não disponível';
    }
  };

  const getStatus = (timestamp, type = 'activity') => {
    if (!timestamp) return type === 'vaccine' ? 'pending' : 'atrasado';
    
    // Para vacinas, usar diretamente o status guardado no dashboard
    if (type === 'vaccine') {
      if (dashboardData.health?.vaccines?.status === 'up_to_date') {
        return 'up_to_date';
      }
      
      // Se temos um objeto com status explícito, usar essa informação
      if (timestamp.status === 'Aplicada') {
        return 'up_to_date';
      }
      
      return 'pending';
    }
    
    let lastActivity;
    
    // Tentar extrair a data de diferentes formatos
    try {
      // Se for um objeto Date JavaScript nativo
      if (Object.prototype.toString.call(timestamp) === "[object Date]") {
        lastActivity = timestamp;
      }
      // Se for um objeto com toDate (Firestore timestamp)
      else if (timestamp.toDate) {
        lastActivity = timestamp.toDate();
      }
      // Se for uma string
      else if (typeof timestamp === 'string') {
        lastActivity = new Date(timestamp);
      }
      // Se for um objeto com seconds (Firestore timestamp)
      else if (timestamp.seconds) {
        lastActivity = new Date(timestamp.seconds * 1000);
      }
      
      // Se não conseguiu extrair ou a data é inválida
      if (!lastActivity || isNaN(lastActivity.getTime())) {
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
    } catch (error) {
      return 'atrasado'; // Em caso de erro, considerar atrasado
    }
  };
  
  // Verificar se temos dados de vacina válidos para exibir
  const hasVaccineData = dashboardData.health?.vaccines?.lastVaccine;

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
                  <p className="datetime">Última dose: {hasVaccineData ? formatVaccineDate(dashboardData.health.vaccines.lastVaccine) : 'Não registrado'}</p>
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