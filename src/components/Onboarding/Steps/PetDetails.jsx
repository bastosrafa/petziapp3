import React, { useState } from 'react';
import { 
  StepContainer, 
  StepTransition, 
  StepTitle, 
  StepDescription,
  FormGroup,
  Label,
  Input,
  Select,
  ButtonContainer,
  SecondaryButton,
  PrimaryButton,
  ErrorText
} from '../OnboardingStyles.jsx';

const PetDetails = ({ petData, updatePetData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

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
    
    if (!petData.petName?.trim()) {
      newErrors.petName = 'Nome do pet é obrigatório';
    }
    
    if (!petData.breed?.trim()) {
      newErrors.breed = 'Raça do pet é obrigatória';
    }
    
    if (!petData.age) {
      newErrors.age = 'Idade do pet é obrigatória';
    }
    
    if (!petData.gender) {
      newErrors.gender = 'Gênero do pet é obrigatório';
    }
    
    if (!petData.size) {
      newErrors.size = 'Porte do pet é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <StepTransition>
      <StepContainer>
        <StepTitle>Detalhes do Pet</StepTitle>
        <StepDescription>
          Vamos conhecer um pouco mais sobre seu amigo de quatro patas.
        </StepDescription>

        <FormGroup>
          <Label htmlFor="petName">Nome do Pet</Label>
          <Input
            id="petName"
            name="petName"
            placeholder="Ex: Rex"
            value={petData.petName || ''}
            onChange={handleChange}
            error={errors.petName}
          />
          {errors.petName && <ErrorText>{errors.petName}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="breed">Raça</Label>
          <Input
            id="breed"
            name="breed"
            placeholder="Ex: Labrador, SRD"
            value={petData.breed || ''}
            onChange={handleChange}
            error={errors.breed}
          />
          {errors.breed && <ErrorText>{errors.breed}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="age">Idade (em anos)</Label>
          <Input
            id="age"
            name="age"
            type="number"
            min="0"
            max="30"
            placeholder="Ex: 2"
            value={petData.age || ''}
            onChange={handleChange}
            error={errors.age}
          />
          {errors.age && <ErrorText>{errors.age}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="gender">Gênero</Label>
          <Select
            id="gender"
            name="gender"
            value={petData.gender || ''}
            onChange={handleChange}
            error={errors.gender}
          >
            <option value="">Selecione</option>
            <option value="male">Macho</option>
            <option value="female">Fêmea</option>
          </Select>
          {errors.gender && <ErrorText>{errors.gender}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="size">Porte</Label>
          <Select
            id="size"
            name="size"
            value={petData.size || ''}
            onChange={handleChange}
            error={errors.size}
          >
            <option value="">Selecione</option>
            <option value="small">Pequeno (até 10kg)</option>
            <option value="medium">Médio (10kg a 25kg)</option>
            <option value="large">Grande (acima de 25kg)</option>
          </Select>
          {errors.size && <ErrorText>{errors.size}</ErrorText>}
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

export default PetDetails; 