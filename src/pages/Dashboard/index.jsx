import React from 'react';
import { DashboardProvider } from './contexts/DashboardContext';
import PetStatus from '../../components/dashboard/PetStatus';
import StatsSummary from '../../components/dashboard/StatsSummary';
import Recommendations from '../../components/dashboard/Recommendations';
import './styles.css';

const Dashboard = () => {
  return (
    <DashboardProvider>
      <div className="dashboard-container">
        {/* Seção Principal - Pet */}
        <div className="dashboard-main-section">
          <div className="pet-status-wrapper">
            <PetStatus />
          </div>
        </div>

        {/* Seção Secundária - Outras Informações */}
        <div className="dashboard-secondary-section">
          <StatsSummary />
          <Recommendations />
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard; 