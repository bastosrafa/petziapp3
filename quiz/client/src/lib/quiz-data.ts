export interface Question {
  id: number;
  type: 'text' | 'radio' | 'checkbox';
  question: string;
  options?: string[];
  placeholder?: string;
  block: number;
  showPersuasion?: number;
  final?: boolean;
}

export const questions: Question[] = [
  // Block 1 - Pet Profile
  {
    id: 1,
    type: 'text',
    question: 'Qual o nome do seu doguinho?',
    placeholder: 'Digite o nome do seu pet',
    block: 1
  },
  {
    id: 2,
    type: 'radio',
    question: 'Qual o porte dele?',
    options: ['Pequeno', 'Médio', 'Grande'],
    block: 1
  },
  {
    id: 3,
    type: 'radio',
    question: 'Qual a idade aproximada?',
    options: ['Filhote', 'Adulto', 'Idoso'],
    block: 1
  },
  {
    id: 4,
    type: 'radio',
    question: 'Você já tentou algum tipo de adestramento?',
    options: ['Sim, com profissional', 'Sim, sozinho(a)', 'Nunca tentei'],
    block: 1,
    showPersuasion: 1
  },
  
  // Block 2 - Problematic Behaviors
  {
    id: 5,
    type: 'radio',
    question: 'Ele destrói objetos ou móveis em casa?',
    options: ['Nunca', 'Às vezes', 'Sempre'],
    block: 2
  },
  {
    id: 6,
    type: 'radio',
    question: 'Ele faz as necessidades no lugar certo?',
    options: ['Sempre', 'Erra às vezes', 'Faz em qualquer lugar'],
    block: 2
  },
  {
    id: 7,
    type: 'radio',
    question: 'Ele late demais ou sem motivo?',
    options: ['Sim', 'Não'],
    block: 2
  },
  {
    id: 8,
    type: 'radio',
    question: 'Ele obedece quando você chama?',
    options: ['Sempre', 'Só quando quer', 'Nunca'],
    block: 2,
    showPersuasion: 2
  },
  
  // Block 3 - Routine and Stimulation
  {
    id: 9,
    type: 'radio',
    question: 'Quantas vezes ele sai para passear por dia?',
    options: ['Nenhuma', '1x', '2x ou mais'],
    block: 3
  },
  {
    id: 10,
    type: 'radio',
    question: 'Durante os passeios, ele puxa muito a guia?',
    options: ['Sim', 'Não'],
    block: 3
  },
  {
    id: 11,
    type: 'radio',
    question: 'Você costuma brincar ou estimular ele dentro de casa?',
    options: ['Sim', 'Quase nunca'],
    block: 3
  },
  {
    id: 12,
    type: 'radio',
    question: 'Ele demonstra tédio ou ansiedade quando você sai?',
    options: ['Sim', 'Não', 'Não sei'],
    block: 3
  },
  {
    id: 13,
    type: 'checkbox',
    question: 'O que mais te preocupa hoje?',
    options: ['Falta de obediência', 'Saúde e vacinas', 'Ansiedade e destruição', 'Falta de rotina', 'Não saber por onde começar'],
    block: 3,
    showPersuasion: 3
  },
  
  // Block 4 - Health and Care
  {
    id: 14,
    type: 'radio',
    question: 'As vacinas dele estão em dia?',
    options: ['Sim', 'Não', 'Não sei'],
    block: 4
  },
  {
    id: 15,
    type: 'radio',
    question: 'Você lembra das datas de vermífugo, anti-pulga etc?',
    options: ['Sim, sempre', 'Quase nunca'],
    block: 4
  },
  {
    id: 16,
    type: 'radio',
    question: 'Com que frequência ele vai ao veterinário?',
    options: ['Regularmente', 'Só quando tem problema', 'Nunca foi'],
    block: 4
  },
  {
    id: 17,
    type: 'radio',
    question: 'Você usa algum app ou caderno para organizar tudo isso?',
    options: ['Sim', 'Não'],
    block: 4,
    showPersuasion: 4
  },
  
  // Block 5 - Owner-Pet Relationship
  {
    id: 18,
    type: 'radio',
    question: 'Você já se sentiu frustrado(a) ou com vontade de desistir?',
    options: ['Sim', 'Às vezes', 'Não'],
    block: 5
  },
  {
    id: 19,
    type: 'radio',
    question: 'Você gostaria de seguir um plano simples, com lembretes e progresso diário?',
    options: ['Sim, com certeza', 'Tenho dúvidas', 'Não agora'],
    block: 5,
    final: true
  }
];
