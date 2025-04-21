import React, { useState } from 'react';
import { 
  StepContainer, 
  StepTransition, 
  StepTitle, 
  StepDescription,
  FormGroup,
  Label,
  CheckboxContainer,
  CheckboxLabel,
  StyledCheckbox,
  HiddenCheckbox,
  CheckboxText,
  Select,
  Textarea,
  ButtonContainer,
  SecondaryButton,
  PrimaryButton,
  ErrorText
} from '../OnboardingStyles.jsx';

const TrainingGoals = ({ petData, updatePetData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const trainingGoals = [
    { id: 'basic', label: 'Comandos básicos (sentar, ficar, etc)' },
    { id: 'leash', label: 'Passeio na guia sem puxar' },
    { id: 'socialization', label: 'Socialização com outros pets' },
    { id: 'recall', label: 'Atender ao chamado' },
    { id: 'tricks', label: 'Truques divertidos' },
    { id: 'anxiety', label: 'Reduzir ansiedade' },
    { id: 'aggression', label: 'Lidar com agressividade' },
    { id: 'barking', label: 'Controlar latidos' },
    { id: 'housetraining', label: 'Treino de higiene' }
  ];

  const handleGoalChange = (id) => {
    const currentGoals = petData.goals || [];
    let newGoals;

    if (currentGoals.includes(id)) {
      newGoals = currentGoals.filter(item => item !== id);
    } else {
      newGoals = [...currentGoals, id];
    }

    updatePetData({ goals: newGoals });
    
    // Limpa o erro se pelo menos um objetivo foi selecionado
    if (newGoals.length > 0 && errors.goals) {
      setErrors({ ...errors, goals: null });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePetData({ [name]: value });
    
    // Limpa o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!petData.goals || petData.goals.length === 0) {
      newErrors.goals = 'Selecione pelo menos um objetivo de treinamento';
    }
    
    if (!petData.experienceLevel) {
      newErrors.experienceLevel = 'Selecione seu nível de experiência';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  const isChecked = (id) => {
    return petData.goals?.includes(id) || false;
  };

  return (
    <StepTransition>
      <StepContainer>
        <StepTitle>Objetivos de Treinamento</StepTitle>
        <StepDescription>
          Quais habilidades você gostaria que seu pet desenvolvesse?
        </StepDescription>

        <FormGroup>
          <Label>Objetivos de treinamento</Label>
          
          {trainingGoals.map(goal => (
            <CheckboxContainer key={goal.id}>
              <CheckboxLabel>
                <HiddenCheckbox 
                  type="checkbox" 
                  checked={isChecked(goal.id)} 
                  onChange={() => handleGoalChange(goal.id)}
                />
                <StyledCheckbox checked={isChecked(goal.id)} />
                <CheckboxText>{goal.label}</CheckboxText>
              </CheckboxLabel>
            </CheckboxContainer>
          ))}
          
          {errors.goals && <ErrorText>{errors.goals}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="experienceLevel">Seu nível de experiência com treinamento</Label>
          <Select
            id="experienceLevel"
            name="experienceLevel"
            value={petData.experienceLevel || ''}
            onChange={handleChange}
            error={errors.experienceLevel}
          >
            <option value="">Selecione</option>
            <option value="beginner">Iniciante - Primeiro pet</option>
            <option value="intermediate">Intermediário - Tenho alguma experiência</option>
            <option value="advanced">Avançado - Tenho muita experiência</option>
          </Select>
          {errors.experienceLevel && <ErrorText>{errors.experienceLevel}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="specificGoals">Objetivos específicos (opcional)</Label>
          <Textarea
            id="specificGoals"
            name="specificGoals"
            placeholder="Descreva objetivos específicos que você tem para o treinamento do seu pet..."
            value={petData.specificGoals || ''}
            onChange={handleChange}
            rows={4}
          />
        </FormGroup>

        <ButtonContainer>
          <SecondaryButton onClick={prevStep}>
            Voltar
          </SecondaryButton>
          <PrimaryButton onClick={handleNext}>
            Continuar
          </PrimaryButton>
        </ButtonContainer>
      </StepContainer>
    </StepTransition>
  );
};

export default TrainingGoals; 