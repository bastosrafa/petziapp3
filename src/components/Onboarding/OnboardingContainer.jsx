import React, { useState } from 'react';
import { OnboardingContainer, ProgressContainer, Progress, ProgressText } from './OnboardingStyles.jsx';
import Welcome from './Steps/Welcome';
import PetDetails from './Steps/PetDetails';
import BehaviorQuestions from './Steps/BehaviorQuestions';
import TrainingGoals from './Steps/TrainingGoals';
import Summary from './Steps/Summary';

const OnboardingProcess = () => {
  const [step, setStep] = useState(0);
  const [petData, setPetData] = useState({
    name: '',
    age: '',
    breed: '',
    size: '',
    behaviors: [],
    goals: []
  });

  const steps = [
    { component: Welcome, title: 'Bem-vindo' },
    { component: PetDetails, title: 'Detalhes do Pet' },
    { component: BehaviorQuestions, title: 'Comportamento' },
    { component: TrainingGoals, title: 'Objetivos' },
    { component: Summary, title: 'Resumo' },
  ];

  const totalSteps = steps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const updatePetData = (newData) => {
    setPetData({ ...petData, ...newData });
  };

  const CurrentStep = steps[step].component;

  return (
    <OnboardingContainer>
      <ProgressContainer>
        <Progress width={progress} />
        <ProgressText>{`${step + 1}/${totalSteps}: ${steps[step].title}`}</ProgressText>
      </ProgressContainer>

      <CurrentStep 
        petData={petData} 
        updatePetData={updatePetData} 
        nextStep={nextStep} 
        prevStep={prevStep} 
        isFirstStep={step === 0}
        isLastStep={step === totalSteps - 1}
      />
    </OnboardingContainer>
  );
};

export default OnboardingProcess; 