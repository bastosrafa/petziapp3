import React, { useState } from 'react';
import { 
  StepContainer, 
  StepTitle, 
  StepDescription,
  FormGroup,
  Label,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  ButtonContainer,
  SecondaryButton,
  PrimaryButton,
  StepTransition,
  SelectInput
} from './OnboardingStyles.jsx';

const PetPreferences = ({ onNext, onPrevious, data, updateData }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Para checkboxes, atualiza o array de preferências
      const currentPreferences = data.preferences || [];
      
      if (checked) {
        updateData({ 
          ...data, 
          preferences: [...currentPreferences, name] 
        });
      } else {
        updateData({ 
          ...data, 
          preferences: currentPreferences.filter(item => item !== name) 
        });
      }
    } else {
      // Para outros campos
      updateData({ ...data, [name]: value });
    }
    
    // Limpa os erros quando o usuário interage
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Verifica se pelo menos uma preferência foi selecionada
    if (!data.preferences || data.preferences.length === 0) {
      newErrors.preferences = 'Selecione pelo menos uma preferência';
    }
    
    // Verifica se um nível de experiência foi selecionado
    if (!data.experienceLevel) {
      newErrors.experienceLevel = 'Selecione seu nível de experiência';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  const preferences = [
    { id: 'training', label: 'Treinamento' },
    { id: 'nutrition', label: 'Nutrição' },
    { id: 'grooming', label: 'Higiene' },
    { id: 'health', label: 'Saúde' },
    { id: 'behavior', label: 'Comportamento' }
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Iniciante - Primeiro pet' },
    { value: 'intermediate', label: 'Intermediário - Tenho alguma experiência' },
    { value: 'advanced', label: 'Avançado - Tenho muita experiência' }
  ];

  return (
    <StepTransition>
      <StepContainer>
        <StepTitle>Preferências de Conteúdo</StepTitle>
        <StepDescription>
          Quais áreas você tem mais interesse em aprender sobre seu pet?
        </StepDescription>

        <FormGroup>
          <Label>Interesses</Label>
          {preferences.map(pref => (
            <CheckboxContainer key={pref.id}>
              <Checkbox
                id={pref.id}
                name={pref.id}
                type="checkbox"
                checked={data.preferences?.includes(pref.id) || false}
                onChange={handleChange}
              />
              <CheckboxLabel htmlFor={pref.id}>{pref.label}</CheckboxLabel>
            </CheckboxContainer>
          ))}
          {errors.preferences && <span className="error-message">{errors.preferences}</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="experienceLevel">Seu nível de experiência</Label>
          <SelectInput
            id="experienceLevel"
            name="experienceLevel"
            value={data.experienceLevel || ''}
            onChange={handleChange}
            error={errors.experienceLevel}
          >
            <option value="" disabled>Selecione seu nível de experiência</option>
            {experienceLevels.map(level => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </SelectInput>
          {errors.experienceLevel && <span className="error-message">{errors.experienceLevel}</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="goals">Objetivos específicos (opcional)</Label>
          <textarea
            id="goals"
            name="goals"
            placeholder="Ex: Quero que meu cachorro pare de pular em visitas"
            value={data.goals || ''}
            onChange={handleChange}
            rows={3}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </FormGroup>

        <ButtonContainer>
          <SecondaryButton onClick={onPrevious}>
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

export default PetPreferences; 