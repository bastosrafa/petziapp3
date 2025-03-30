import React from 'react';
import { DashboardProvider } from './contexts/DashboardContext';
import MoodDog from '../../components/dashboard/MoodDog';
import StatsSummary from '../../components/dashboard/StatsSummary';
import Recommendations from '../../components/dashboard/Recommendations';

const Dashboard = () => {
  return (
    <DashboardProvider>
      <div className="dashboard-container py-2.5 px-2.5 sm:px-5 max-w-7xl mx-auto">
        <div className="space-y-6">
          <MoodDog />
          <StatsSummary />
          <Recommendations />
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard; 