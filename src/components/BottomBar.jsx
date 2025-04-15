import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SettingsMenu from './SettingsMenu';
import './BottomBar.css';

const BottomBar = () => {
  const location = useLocation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bottom-bar">
        <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Início</span>
        </Link>

        <Link to="/content/training" className={`nav-item ${isActive('/content/training') ? 'active' : ''}`}>
          <span className="nav-icon">🎓</span>
          <span className="nav-label">Adestramento</span>
        </Link>

        <Link to="/diario" className={`nav-item ${isActive('/diario') ? 'active' : ''}`}>
          <span className="nav-icon">📝</span>
          <span className="nav-label">Diário</span>
        </Link>

        <Link to="/vacinas" className={`nav-item ${isActive('/vacinas') ? 'active' : ''}`}>
          <span className="nav-icon">💉</span>
          <span className="nav-label">Vacinas</span>
        </Link>

        <button 
          className={`nav-item ${isActive('/more') ? 'active' : ''}`}
          onClick={() => setIsSettingsOpen(true)}
        >
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Mais</span>
        </button>
      </nav>

      <SettingsMenu 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  );
};

export default BottomBar;
