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
  const { petData } = useDashboard();

  return (
    <div className="mood-dog-container">
      <Lottie
        animationData={animations[petData.mood] || animations.neutral}
        options={lottieOptions}
        className="mood-dog-animation"
      />
    </div>
  );
};

export default MoodDog; 