import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { useAuthContext } from '../hooks/useAuthContext';

// Criar o contexto de onboarding
const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
  
  // Verificar o status do onboarding quando o usuário mudar
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      
      try {
        const onboardingRef = doc(db, 'onboarding_data', user.uid);
        const onboardingDoc = await getDoc(onboardingRef);
        
        if (onboardingDoc.exists() && onboardingDoc.data().completed) {
          setOnboardingCompleted(true);
        } else {
          setOnboardingCompleted(false);
        }
      } catch (error) {
        console.error('Erro ao verificar status do onboarding:', error);
        setOnboardingCompleted(false);
      } finally {
        setLoading(false);
      }
    };
    
    checkOnboardingStatus();
  }, [user]);
  
  // Função para marcar o onboarding como concluído
  const completeOnboarding = async (onboardingData) => {
    if (!user) return;
    
    try {
      const onboardingRef = doc(db, 'onboarding_data', user.uid);
      await setDoc(onboardingRef, {
        ...onboardingData,
        userId: user.uid,
        completed: true,
        completedAt: Timestamp.now()
      });
      
      setOnboardingCompleted(true);
      return true;
    } catch (error) {
      console.error('Erro ao salvar dados do onboarding:', error);
      throw error;
    }
  };
  
  // Função para resetar o onboarding (útil para testes)
  const resetOnboarding = async () => {
    if (!user) return;
    
    try {
      const onboardingRef = doc(db, 'onboarding_data', user.uid);
      await setDoc(onboardingRef, {
        userId: user.uid,
        completed: false,
        resetAt: Timestamp.now()
      });
      
      // Limpar o localStorage também
      localStorage.removeItem('onboarding_progress');
      localStorage.removeItem('onboarding_completed');
      
      setOnboardingCompleted(false);
      
      // Retornar para indicar que o reset foi bem-sucedido
      return true;
    } catch (error) {
      console.error('Erro ao resetar onboarding:', error);
      throw error;
    }
  };
  
  return (
    <OnboardingContext.Provider value={{ 
      onboardingCompleted, 
      loading, 
      completeOnboarding,
      resetOnboarding
    }}>
      {children}
    </OnboardingContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding deve ser usado dentro de um OnboardingProvider');
  }
  return context;
};

// Componente de rota protegida
export const ProtectedRoute = ({ children }) => {
  const { onboardingCompleted, loading } = useOnboarding();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  
  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/login');
      } else if (!onboardingCompleted) {
        navigate('/onboarding');
      }
    }
  }, [loading, onboardingCompleted, user, navigate]);
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>;
  }
  
  return onboardingCompleted ? children : null;
}; 