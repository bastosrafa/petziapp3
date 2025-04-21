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
  ButtonContainer,
  SecondaryButton,
  PrimaryButton,
  ErrorText
} from '../OnboardingStyles.jsx';

const BehaviorQuestions = ({ petData, updatePetData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const behaviors = [
    { id: 'barking', label: 'Late excessivamente' },
    { id: 'chewing', label: 'Morde/Destrói objetos' },
    { id: 'jumping', label: 'Pula nas pessoas' },
    { id: 'pulling', label: 'Puxa a guia durante passeios' },
    { id: 'aggression', label: 'Mostra agressividade' },
    { id: 'anxiety', label: 'Demonstra ansiedade quando sozinho' },
    { id: 'marking', label: 'Faz xixi para marcar território' },
    { id: 'digging', label: 'Cava buracos' },
    { id: 'stealing', label: 'Rouba comida/objetos' }
  ];

  const handleBehaviorChange = (id) => {
    const currentBehaviors = petData.behaviors || [];
    let newBehaviors;

    if (currentBehaviors.includes(id)) {
      newBehaviors = currentBehaviors.filter(item => item !== id);
    } else {
      newBehaviors = [...currentBehaviors, id];
    }

    updatePetData({ behaviors: newBehaviors });
    
    // Limpa o erro se pelo menos um comportamento foi selecionado
    if (newBehaviors.length > 0 && errors.behaviors) {
      setErrors({ ...errors, behaviors: null });
    }
  };

  const validate = () => {
    // Nenhuma validação obrigatória, esse passo é opcional
    return true;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  const isChecked = (id) => {
    return petData.behaviors?.includes(id) || false;
  };

  return (
    <StepTransition>
      <StepContainer>
        <StepTitle>Comportamento do Pet</StepTitle>
        <StepDescription>
          Selecione os comportamentos que seu pet apresenta e que você gostaria de melhorar.
        </StepDescription>

        <FormGroup>
          <Label>Comportamentos a melhorar (opcional)</Label>
          
          {behaviors.map(behavior => (
            <CheckboxContainer key={behavior.id}>
              <CheckboxLabel>
                <HiddenCheckbox 
                  type="checkbox" 
                  checked={isChecked(behavior.id)} 
                  onChange={() => handleBehaviorChange(behavior.id)}
                />
                <StyledCheckbox checked={isChecked(behavior.id)} />
                <CheckboxText>{behavior.label}</CheckboxText>
              </CheckboxLabel>
            </CheckboxContainer>
          ))}
          
          {errors.behaviors && <ErrorText>{errors.behaviors}</ErrorText>}
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

export default BehaviorQuestions; 