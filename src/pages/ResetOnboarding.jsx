import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '@/contexts/OnboardingContext';

const ResetOnboarding = () => {
  const { resetOnboarding } = useOnboarding();
  const [isResetting, setIsResetting] = useState(false);
  const [resetDone, setResetDone] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleReset = async () => {
    setIsResetting(true);
    setError(null);
    
    try {
      await resetOnboarding();
      setResetDone(true);
      // Redirecionar imediatamente para o onboarding
      navigate('/onboarding');
    } catch (err) {
      setError('Erro ao resetar onboarding: ' + err.message);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Reset de Onboarding</h1>
        <p className="mb-6 text-gray-600">
          Esta página permite resetar seu progresso de onboarding para fins de teste.
          Todos os dados do processo serão apagados e você poderá iniciar novamente.
        </p>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {resetDone ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Onboarding resetado com sucesso! Redirecionando...
          </div>
        ) : (
          <button
            onClick={handleReset}
            disabled={isResetting}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            {isResetting ? 'Resetando...' : 'Resetar Onboarding'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ResetOnboarding; 