import React, { useState } from 'react';
import { 
  StepContainer, 
  StepTitle, 
  StepDescription,
  FormGroup,
  Label,
  Input,
  Select,
  ButtonContainer,
  SecondaryButton,
  PrimaryButton,
  StepTransition
} from './OnboardingStyles.jsx';

const PetInfo = ({ onNext, onPrevious, data, updateData }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
    
    // Limpa o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!data.petName?.trim()) {
      newErrors.petName = 'Nome do pet é obrigatório';
    }
    
    if (!data.petType) {
      newErrors.petType = 'Selecione o tipo de pet';
    }
    
    if (!data.petBreed?.trim()) {
      newErrors.petBreed = 'Raça do pet é obrigatória';
    }
    
    if (!data.petAge?.trim()) {
      newErrors.petAge = 'Idade do pet é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <StepTransition>
      <StepContainer>
        <StepTitle>Informações do seu Pet</StepTitle>
        <StepDescription>
          Vamos conhecer um pouco mais sobre seu amigo de quatro patas.
        </StepDescription>

        <FormGroup>
          <Label htmlFor="petName">Nome do Pet</Label>
          <Input
            id="petName"
            name="petName"
            placeholder="Ex: Rex"
            value={data.petName || ''}
            onChange={handleChange}
            error={errors.petName}
          />
          {errors.petName && <span className="error-message">{errors.petName}</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="petType">Tipo de Pet</Label>
          <Select
            id="petType"
            name="petType"
            value={data.petType || ''}
            onChange={handleChange}
            error={errors.petType}
          >
            <option value="">Selecione</option>
            <option value="dog">Cachorro</option>
            <option value="cat">Gato</option>
            <option value="other">Outro</option>
          </Select>
          {errors.petType && <span className="error-message">{errors.petType}</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="petBreed">Raça</Label>
          <Input
            id="petBreed"
            name="petBreed"
            placeholder="Ex: Labrador, SRD"
            value={data.petBreed || ''}
            onChange={handleChange}
            error={errors.petBreed}
          />
          {errors.petBreed && <span className="error-message">{errors.petBreed}</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="petAge">Idade</Label>
          <Input
            id="petAge"
            name="petAge"
            placeholder="Ex: 2 anos"
            value={data.petAge || ''}
            onChange={handleChange}
            error={errors.petAge}
          />
          {errors.petAge && <span className="error-message">{errors.petAge}</span>}
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

export default PetInfo; 