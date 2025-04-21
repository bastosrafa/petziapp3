import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
  StepContainer,
  StepTransition,
  StepTitle,
  StepDescription,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  InfoCard,
  InfoSection,
  InfoLabel,
  InfoValue,
} from './OnboardingStyles.jsx';
import { FaCheck, FaTimes } from 'react-icons/fa';
import LoadingSpinner from '../ui/LoadingSpinner';

const Confirmation = ({ onPrevious, data }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Criar conta de usuário com Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const userId = userCredential.user.uid;

      // Remover senha do objeto para não armazenar no Firestore
      const { password, ...userData } = data;

      // Salvar dados do usuário no Firestore
      await setDoc(doc(db, 'users', userId), {
        ...userData,
        createdAt: new Date(),
        lastLogin: new Date(),
        premium: false,
        id: userId
      });

      // Redirecionar para dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Erro ao criar conta:', err);
      setError(
        err.code === 'auth/email-already-in-use'
          ? 'Este e-mail já está em uso. Por favor, escolha outro ou faça login.'
          : 'Ocorreu um erro ao criar sua conta. Por favor, tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Funções para mapear valores para exibição mais amigável
  const mapGender = (gender) => {
    const options = {
      male: 'Macho',
      female: 'Fêmea'
    };
    return options[gender] || gender;
  };

  const mapSize = (size) => {
    const options = {
      small: 'Pequeno',
      medium: 'Médio',
      large: 'Grande'
    };
    return options[size] || size;
  };

  const mapExperienceLevel = (level) => {
    const options = {
      beginner: 'Iniciante',
      intermediate: 'Intermediário',
      advanced: 'Avançado'
    };
    return options[level] || level;
  };

  const mapPreferences = (prefs) => {
    if (!prefs || prefs.length === 0) return 'Nenhuma preferência selecionada';
    
    const preferences = {
      training: 'Treinamento básico',
      behavior: 'Problemas de comportamento',
      socialization: 'Socialização',
      tricks: 'Truques avançados'
    };
    
    return prefs.map(pref => preferences[pref] || pref).join(', ');
  };

  return (
    <StepTransition>
      <StepContainer>
        <StepTitle>Confirmação</StepTitle>
        <StepDescription>
          Revise suas informações antes de finalizar o cadastro
        </StepDescription>

        {error && (
          <InfoCard style={{ backgroundColor: '#ffecec', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', color: '#e74c3c' }}>
              <FaTimes style={{ marginRight: '10px' }} />
              {error}
            </div>
          </InfoCard>
        )}

        <InfoCard>
          <InfoSection>
            <InfoLabel>Seus dados</InfoLabel>
            <div style={{ marginTop: '15px' }}>
              <InfoLabel noMargin>Nome:</InfoLabel>
              <InfoValue>{data.name}</InfoValue>
            </div>
            <div style={{ marginTop: '10px' }}>
              <InfoLabel noMargin>E-mail:</InfoLabel>
              <InfoValue>{data.email}</InfoValue>
            </div>
          </InfoSection>
        </InfoCard>

        <InfoCard>
          <InfoSection>
            <InfoLabel>Dados do seu pet</InfoLabel>
            <div style={{ marginTop: '15px' }}>
              <InfoLabel noMargin>Nome do pet:</InfoLabel>
              <InfoValue>{data.petName}</InfoValue>
            </div>
            <div style={{ marginTop: '10px' }}>
              <InfoLabel noMargin>Raça:</InfoLabel>
              <InfoValue>{data.breed}</InfoValue>
            </div>
            <div style={{ marginTop: '10px' }}>
              <InfoLabel noMargin>Idade:</InfoLabel>
              <InfoValue>{data.age} {data.age === 1 ? 'ano' : 'anos'}</InfoValue>
            </div>
            <div style={{ marginTop: '10px' }}>
              <InfoLabel noMargin>Gênero:</InfoLabel>
              <InfoValue>{mapGender(data.gender)}</InfoValue>
            </div>
            <div style={{ marginTop: '10px' }}>
              <InfoLabel noMargin>Porte:</InfoLabel>
              <InfoValue>{mapSize(data.size)}</InfoValue>
            </div>
          </InfoSection>
        </InfoCard>

        <InfoCard>
          <InfoSection>
            <InfoLabel>Perfil de treinamento</InfoLabel>
            <div style={{ marginTop: '15px' }}>
              <InfoLabel noMargin>Nível de experiência:</InfoLabel>
              <InfoValue>{mapExperienceLevel(data.experienceLevel)}</InfoValue>
            </div>
            <div style={{ marginTop: '10px' }}>
              <InfoLabel noMargin>Preferências de treinamento:</InfoLabel>
              <InfoValue>{mapPreferences(data.trainingPreferences)}</InfoValue>
            </div>
          </InfoSection>
        </InfoCard>

        <ButtonContainer>
          <SecondaryButton onClick={onPrevious} disabled={loading}>
            Voltar
          </SecondaryButton>
          <PrimaryButton onClick={handleSubmit} disabled={loading}>
            {loading ? <LoadingSpinner size="small" color="white" /> : (
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

export default Confirmation; 