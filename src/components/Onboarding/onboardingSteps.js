// Define a estrutura completa das etapas do onboarding
export const onboardingSteps = [
  // Etapa 1 - Boas-vindas
  {
    id: 'welcome',
    message: 'Olá! Seja bem-vindo ao Petzia, o app que vai ajudar você a treinar e cuidar do seu pet. Vamos configurar o perfil do seu amigo de quatro patas?',
    options: [
      { id: 'start', label: 'Vamos começar!' }
    ],
    nextStep: 'pet-name'
  },
  
  // Etapa 2 - Nome do pet
  {
    id: 'pet-name',
    message: 'Como se chama o seu amigo de quatro patas?',
    input: true,
    inputPlaceholder: 'Digite o nome do seu pet',
    nextStep: 'pet-type'
  },
  
  // Etapa 3 - Tipo de pet
  {
    id: 'pet-type',
    message: (petName) => `${petName} é um cachorro ou gato?`,
    options: [
      { id: 'dog', label: 'Cachorro 🐶' },
      { id: 'cat', label: 'Gato 🐱' }
    ],
    nextStep: 'pet-breed'
  },
  
  // Etapa 4 - Raça do pet
  {
    id: 'pet-breed',
    message: (petName, petType) => `Qual é a raça do ${petName}?`,
    input: true,
    inputPlaceholder: 'Digite a raça do seu pet',
    nextStep: 'pet-age'
  },
  
  // Etapa 5 - Idade do pet
  {
    id: 'pet-age',
    message: (petName) => `Qual é a idade aproximada do ${petName}?`,
    options: [
      { id: 'puppy', label: 'Filhote (0-1 ano)' },
      { id: 'young', label: 'Jovem (1-3 anos)' },
      { id: 'adult', label: 'Adulto (3-8 anos)' },
      { id: 'senior', label: 'Sênior (8+ anos)' }
    ],
    nextStep: 'pet-behavior'
  },
  
  // Etapa 6 - Comportamento do pet
  {
    id: 'pet-behavior',
    message: (petName) => `Quais comportamentos o ${petName} apresenta? (Selecione todos que se aplicam)`,
    options: [
      { id: 'barking', label: 'Late/Mia excessivamente' },
      { id: 'chewing', label: 'Mastiga objetos' },
      { id: 'jumping', label: 'Pula nas pessoas' },
      { id: 'pulling', label: 'Puxa a guia durante passeios' },
      { id: 'aggression', label: 'Agressividade com outros animais' },
      { id: 'anxiety', label: 'Ansiedade de separação' },
      { id: 'house-soiling', label: 'Faz necessidades em local inapropriado' },
      { id: 'fearful', label: 'Medo de barulhos/situações' },
      { id: 'well-behaved', label: 'Bem comportado, sem problemas' }
    ],
    multiSelect: true,
    nextStep: 'training-goals'
  },
  
  // Etapa 7 - Objetivos de treinamento
  {
    id: 'training-goals',
    message: 'Quais são seus objetivos principais de treinamento?',
    options: [
      { id: 'basic-obedience', label: 'Comandos básicos' },
      { id: 'stop-bad-behaviors', label: 'Parar comportamentos indesejados' },
      { id: 'socialization', label: 'Melhorar socialização' },
      { id: 'tricks', label: 'Ensinar truques divertidos' },
      { id: 'mental-stimulation', label: 'Estimulação mental' }
    ],
    multiSelect: true,
    nextStep: 'experience-level'
  },
  
  // Etapa 8 - Experiência com treinamento
  {
    id: 'experience-level',
    message: 'Qual é o seu nível de experiência com treinamento de pets?',
    options: [
      { id: 'beginner', label: 'Iniciante (primeira vez)' },
      { id: 'some-experience', label: 'Alguma experiência' },
      { id: 'experienced', label: 'Experiente' }
    ],
    nextStep: 'final-confirmation'
  },
  
  // Etapa 9 - Confirmação final
  {
    id: 'final-confirmation',
    message: (petData) => `Ótimo! Agora conhecemos melhor ${petData.petName}. Estamos prontos para preparar uma experiência personalizada para vocês.`,
    options: [
      { id: 'complete', label: 'Finalizar e ir para o app' }
    ],
    nextStep: 'complete'
  },
  
  // Etapa final - Completar
  {
    id: 'complete',
    message: 'Pronto! Seu perfil foi criado com sucesso. Vamos começar essa jornada de treinamento juntos!',
    isCompleted: true
  }
];

// Função auxiliar para obter a próxima etapa com base na etapa atual e resposta
export const getNextStep = (currentStepId, response, petData) => {
  const currentStep = onboardingSteps.find(step => step.id === currentStepId);
  
  if (!currentStep) return null;
  
  // Se houver uma função de condição para determinar a próxima etapa
  if (typeof currentStep.nextStep === 'function') {
    return currentStep.nextStep(response, petData);
  }
  
  // Caso contrário, retorna a próxima etapa definida no objeto da etapa
  return currentStep.nextStep;
}; 