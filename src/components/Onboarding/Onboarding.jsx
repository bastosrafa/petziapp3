import React, { useState } from 'react';
import { 
  OnboardingContainer, 
  ProgressContainer, 
  ProgressStep, 
  ProgressLabel,
  ProgressStepWrapper
} from './OnboardingStyles.jsx';
import Welcome from './Steps/Welcome';
import PetDetails from './Steps/PetDetails';
import BehaviorQuestions from './Steps/BehaviorQuestions';
import TrainingGoals from './Steps/TrainingGoals';
import Summary from './Steps/Summary';

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [petData, setPetData] = useState({
    petName: '',
    breed: '',
    age: '',
    gender: '',
    size: '',
    behaviors: [],
    goals: [],
    experienceLevel: '',
    specificGoals: ''
  });

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const updatePetData = (data) => {
    setPetData({ ...petData, ...data });
  };

  const steps = [
    { title: 'Bem-vindo', component: Welcome },
    { title: 'Detalhes do Pet', component: PetDetails },
    { title: 'Comportamento', component: BehaviorQuestions },
    { title: 'Objetivos', component: TrainingGoals },
    { title: 'Resumo', component: Summary },
  ];

  const StepComponent = steps[step].component;

  return (
    <OnboardingContainer>
      {/* Indicador de progresso */}
      <ProgressContainer>
        {steps.map((s, i) => (
          <ProgressStepWrapper key={i}>
            <ProgressStep 
              active={i === step} 
              completed={i < step}
            >
              {i + 1}
            </ProgressStep>
            <ProgressLabel>{s.title}</ProgressLabel>
          </ProgressStepWrapper>
        ))}
      </ProgressContainer>

      {/* Renderiza o componente do passo atual */}
      <StepComponent 
        petData={petData}
        updatePetData={updatePetData}
        nextStep={nextStep}
        prevStep={prevStep}
        isFirstStep={step === 0}
        isLastStep={step === steps.length - 1}
      />
    </OnboardingContainer>
  );
};

export default Onboarding; 