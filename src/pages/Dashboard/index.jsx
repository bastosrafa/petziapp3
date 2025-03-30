import React from 'react';
import { DashboardProvider } from './contexts/DashboardContext';
import MoodDog from '../../components/dashboard/MoodDog';
import StatsSummary from '../../components/dashboard/StatsSummary';
import Recommendations from '../../components/dashboard/Recommendations';

const Dashboard = () => {
  return (
    <DashboardProvider>
      <div className="dashboard-container">
        <MoodDog />
        <StatsSummary />
        <Recommendations />
      </div>
    </DashboardProvider>
  );
};

export default Dashboard; 