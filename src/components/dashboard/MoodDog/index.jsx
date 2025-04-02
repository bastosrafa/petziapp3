import React from 'react';
import Lottie from 'lottie-react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import happyAnimation from './animations/happy.json';
import neutralAnimation from './animations/neutral.json';
import sadAnimation from './animations/sad.json';
import sickAnimation from './animations/sick.json';
import './styles.css';

const lottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const animations = {
  happy: happyAnimation,
  neutral: neutralAnimation,
  sad: sadAnimation,
  sick: sickAnimation
};

const MoodDog = () => {
  const { dashboardData } = useDashboard();

  // Se não houver dados do dashboard, mostrar animação neutra
  if (!dashboardData) {
    return (
      <div className="mood-dog-container">
        <Lottie
          animationData={animations.neutral}
          options={lottieOptions}
          className="mood-dog-animation"
        />
      </div>
    );
  }

  return (
    <div className="mood-dog-container">
      <Lottie
        animationData={animations[dashboardData.mood] || animations.neutral}
        options={lottieOptions}
        className="mood-dog-animation"
      />
    </div>
  );
};

export default MoodDog; 