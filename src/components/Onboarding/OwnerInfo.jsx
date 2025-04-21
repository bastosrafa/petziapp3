import React, { useState } from 'react';
import { 
  StepContainer, 
  StepTitle, 
  StepDescription,
  FormGroup,
  Label,
  Input,
  ButtonContainer,
  SecondaryButton,
  PrimaryButton,
  StepTransition
} from './OnboardingStyles.jsx';

const OwnerInfo = ({ onNext, onPrevious, data, updateData }) => {
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
    
    if (!data.ownerName?.trim()) {
      newErrors.ownerName = 'Seu nome é obrigatório';
    }
    
    if (!data.email?.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!data.phone?.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
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
        <StepTitle>Suas Informações</StepTitle>
        <StepDescription>
          Agora, precisamos de algumas informações sobre você.
        </StepDescription>

        <FormGroup>
          <Label htmlFor="ownerName">Seu Nome</Label>
          <Input
            id="ownerName"
            name="ownerName"
            placeholder="Nome completo"
            value={data.ownerName || ''}
            onChange={handleChange}
            error={errors.ownerName}
          />
          {errors.ownerName && <span className="error-message">{errors.ownerName}</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={data.email || ''}
            onChange={handleChange}
            error={errors.email}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(00) 00000-0000"
            value={data.phone || ''}
            onChange={handleChange}
            error={errors.phone}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
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

export default OwnerInfo; 