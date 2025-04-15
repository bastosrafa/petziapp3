import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Training from './index';
import BasicCommands from './modules/BasicCommands';
import Socialization from './modules/Socialization';
import AdvancedCommands from './modules/AdvancedCommands';
import BadHabits from './modules/BadHabits';

const TrainingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Training />} />
      <Route path="/basic-commands" element={<BasicCommands />} />
      <Route path="/socialization" element={<Socialization />} />
      <Route path="/advanced-commands" element={<AdvancedCommands />} />
      <Route path="/bad-habits" element={<BadHabits />} />
    </Routes>
  );
};

export default TrainingRoutes; 