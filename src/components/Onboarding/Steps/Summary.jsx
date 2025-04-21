import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../../contexts/OnboardingContext';
import {
  StepContainer,
  StepTransition,
  StepTitle,
  StepDescription,
  SummaryCard,
  SummaryItem,
  SummaryLabel,
  SummaryValue,
  SummaryList,
  ButtonContainer,
  SecondaryButton,
  PrimaryButton
} from '../OnboardingStyles.jsx';
import { FaCheck, FaSpinner } from 'react-icons/fa';

const Summary = ({ petData, prevStep, isLastStep }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { completeOnboarding } = useOnboarding();
  const navigate = useNavigate();

  const mapGender = (gender) => {
    const options = {
      male: 'Macho',
      female: 'Fêmea'
    };
    return options[gender] || gender;
  };

  const mapSize = (size) => {
    const options = {
      small: 'Pequeno (até 10kg)',
      medium: 'Médio (10kg a 25kg)',
      large: 'Grande (acima de 25kg)'
    };
    return options[size] || size;
  };

  const mapExperienceLevel = (level) => {
    const options = {
      beginner: 'Iniciante - Primeiro pet',
      intermediate: 'Intermediário - Tenho alguma experiência',
      advanced: 'Avançado - Tenho muita experiência'
    };
    return options[level] || level;
  };

  const mapGoals = (goals) => {
    if (!goals || goals.length === 0) return 'Nenhum objetivo selecionado';
    
    const mappings = {
      basic: 'Comandos básicos',
      leash: 'Passeio na guia sem puxar',
      socialization: 'Socialização com outros pets',
      recall: 'Atender ao chamado',
      tricks: 'Truques divertidos',
      anxiety: 'Reduzir ansiedade',
      aggression: 'Lidar com agressividade',
      barking: 'Controlar latidos',
      housetraining: 'Treino de higiene'
    };
    
    return goals.map(id => mappings[id] || id);
  };

  const mapBehaviors = (behaviors) => {
    if (!behaviors || behaviors.length === 0) return 'Nenhum comportamento selecionado';
    
    const mappings = {
      barking: 'Late excessivamente',
      chewing: 'Morde/Destrói objetos',
      jumping: 'Pula nas pessoas',
      pulling: 'Puxa a guia durante passeios',
      aggression: 'Mostra agressividade',
      anxiety: 'Demonstra ansiedade quando sozinho',
      marking: 'Faz xixi para marcar território',
      digging: 'Cava buracos',
      stealing: 'Rouba comida/objetos'
    };
    
    return behaviors.map(id => mappings[id] || id);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await completeOnboarding(petData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Erro ao salvar perfil:', err);
      setError('Ocorreu um erro ao salvar o perfil. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <StepTransition>
      <StepContainer>
        <StepTitle>Resumo</StepTitle>
        <StepDescription>
          Verifique as informações do seu pet antes de finalizar
        </StepDescription>

        {error && (
          <div style={{ color: 'red', marginBottom: '20px', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <SummaryCard>
          <SummaryItem>
            <SummaryLabel>Informações do Pet</SummaryLabel>
            <div>
              <strong>Nome:</strong> {petData.petName || 'Não informado'}
            </div>
            <div>
              <strong>Raça:</strong> {petData.breed || 'Não informada'}
            </div>
            <div>
              <strong>Idade:</strong> {petData.age ? `${petData.age} ${petData.age === 1 ? 'ano' : 'anos'}` : 'Não informada'}
            </div>
            <div>
              <strong>Gênero:</strong> {petData.gender ? mapGender(petData.gender) : 'Não informado'}
            </div>
            <div>
              <strong>Porte:</strong> {petData.size ? mapSize(petData.size) : 'Não informado'}
            </div>
          </SummaryItem>

          <SummaryItem>
            <SummaryLabel>Comportamentos a melhorar</SummaryLabel>
            {petData.behaviors && petData.behaviors.length > 0 ? (
              <SummaryList>
                {mapBehaviors(petData.behaviors).map((behavior, index) => (
                  <li key={index}>{behavior}</li>
                ))}
              </SummaryList>
            ) : (
              <SummaryValue>Nenhum comportamento selecionado</SummaryValue>
            )}
          </SummaryItem>

          <SummaryItem>
            <SummaryLabel>Objetivos de Treinamento</SummaryLabel>
            {petData.goals && petData.goals.length > 0 ? (
              <SummaryList>
                {mapGoals(petData.goals).map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </SummaryList>
            ) : (
              <SummaryValue>Nenhum objetivo selecionado</SummaryValue>
            )}
          </SummaryItem>

          <SummaryItem>
            <SummaryLabel>Nível de experiência</SummaryLabel>
            <SummaryValue>
              {petData.experienceLevel ? mapExperienceLevel(petData.experienceLevel) : 'Não informado'}
            </SummaryValue>
          </SummaryItem>

          {petData.specificGoals && (
            <SummaryItem>
              <SummaryLabel>Objetivos específicos</SummaryLabel>
              <SummaryValue>{petData.specificGoals}</SummaryValue>
            </SummaryItem>
          )}
        </SummaryCard>

        <ButtonContainer>
          <SecondaryButton onClick={prevStep} disabled={loading}>
            Voltar
          </SecondaryButton>
          <PrimaryButton onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <>
                <FaSpinner style={{ animation: 'spin 1s linear infinite', marginRight: '8px' }} />
                Salvando...
              </>
            ) : (
              <>
                <FaCheck style={{ marginRight: '8px' }} />
                Finalizar Cadastro
              </>
            )}
          </PrimaryButton>
        </ButtonContainer>
      </StepContainer>
    </StepTransition>
  );
};

export default Summary; 