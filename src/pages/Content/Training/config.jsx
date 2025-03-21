import { DogIcon, HeartIcon, UsersIcon, DropletsIcon, AlertTriangleIcon, BrainIcon } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  component: string;
}

interface TrainingModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  route: string;
  icon?: any;
  lessons: Lesson[];
}

export const trainingModules: TrainingModule[] = [
  {
    id: "starthere",
    title: "Comece Aqui 🎯",
    description: "Fundamentos essenciais para começar a treinar seu cão",
    duration: "1 hora",
    route: "/content/training/starthere",
    icon: DogIcon,
    lessons: [
      {
        id: "starthere1",
        title: "Introdução ao Adestramento",
        description: "Entenda os conceitos básicos do adestramento positivo",
        duration: "10 min",
        component: "StartHere1",
      },
      {
        id: "starthere2",
        title: "Comunicação com seu Cão",
        description: "Aprenda a se comunicar efetivamente com seu cão",
        duration: "15 min",
        component: "StartHere2",
      },
      {
        id: "starthere3",
        title: "Recompensas e Reforço Positivo",
        description: "Como usar recompensas para motivar seu cão",
        duration: "15 min",
        component: "StartHere3",
      },
      {
        id: "starthere4",
        title: "Timing e Consistência",
        description: "A importância do timing e da consistência no treinamento",
        duration: "15 min",
        component: "StartHere4",
      },
      {
        id: "starthere5",
        title: "Ambiente de Treinamento",
        description: "Como criar o ambiente ideal para o treinamento",
        duration: "15 min",
        component: "StartHere5",
      },
    ],
  },
  {
    id: "behavior",
    title: "Comportamento Essencial 🐕",
    description: "Comandos básicos e comportamentos essenciais para o dia a dia",
    duration: "1 hora e 15 minutos",
    route: "/content/training/behavior",
    icon: HeartIcon,
    lessons: [
      {
        id: "behavior1",
        title: "Comandos Básicos: Senta e Deita",
        description: "Aprenda a ensinar os comandos básicos de obediência",
        duration: "15 min",
        component: "Behavior1",
      },
      {
        id: "behavior2",
        title: "Comandos Básicos: Fica e Vem",
        description: "Controle e chamada do seu cão em diferentes situações",
        duration: "15 min",
        component: "Behavior2",
      },
      {
        id: "behavior3",
        title: "Comandos Básicos: Junto e Solta",
        description: "Passeio com guia e controle de objetos",
        duration: "15 min",
        component: "Behavior3",
      },
      {
        id: "behavior4",
        title: "Comandos Básicos: Não e Quieto",
        description: "Controle de comportamentos indesejados",
        duration: "15 min",
        component: "Behavior4",
      },
      {
        id: "behavior5",
        title: "Comandos Básicos: Busca e Entrega",
        description: "Jogos e brincadeiras para fortalecer o vínculo",
        duration: "15 min",
        component: "Behavior5",
      },
    ],
  },
  {
    id: "socialization",
    title: "Socialização e Controle 🎭",
    description: "Desenvolva a sociabilidade e o controle de impulsos do seu cão",
    duration: "1 hora e 25 minutos",
    route: "/content/training/socialization",
    icon: UsersIcon,
    lessons: [
      {
        id: "socialization1",
        title: "Como socializar o cão com pessoas e outros pets",
        description: "Técnicas para socializar seu cão com diferentes tipos de pessoas e animais",
        duration: "15 min",
        component: "Socialization1",
      },
      {
        id: "socialization2",
        title: "Passeio sem puxar a guia",
        description: "Aprenda a ensinar seu cão a caminhar sem puxar a guia",
        duration: "15 min",
        component: "Socialization2",
      },
      {
        id: "socialization3",
        title: "Latidos excessivos: Como reduzir e controlar",
        description: "Métodos para controlar e reduzir latidos excessivos",
        duration: "15 min",
        component: "Socialization3",
      },
      {
        id: "socialization4",
        title: "Ensinar a não pular em visitas",
        description: "Técnicas para evitar que seu cão pule em visitas",
        duration: "15 min",
        component: "Socialization4",
      },
      {
        id: "socialization5",
        title: "Controle na hora da refeição",
        description: "Evitar ansiedade e possessividade durante as refeições",
        duration: "15 min",
        component: "Socialization5",
      },
      {
        id: "socialization6",
        title: "Ensinar a aceitar manuseio",
        description: "Preparar seu cão para visitas ao veterinário, banho e tosa",
        duration: "15 min",
        component: "Socialization6",
      },
    ],
  },
  {
    id: "hygiene",
    title: "Higiene e Rotina 🧼",
    description: "Estabeleça uma rotina saudável de higiene para seu cão",
    duration: "1 hora",
    route: "/content/training/hygiene",
    icon: DropletsIcon,
    lessons: [
      {
        id: "hygiene1",
        title: "Banho e Escovação",
        description: "Técnicas adequadas para banho e escovação",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "hygiene2",
        title: "Corte de Unhas",
        description: "Como cortar as unhas do seu cão de forma segura",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "hygiene3",
        title: "Limpeza de Ouvidos",
        description: "Cuidados com a higiene dos ouvidos",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "hygiene4",
        title: "Escovação de Dentes",
        description: "Higiene bucal e escovação de dentes",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "hygiene5",
        title: "Rotina de Higiene",
        description: "Como estabelecer uma rotina de higiene",
        duration: "15 min",
        component: "ComingSoon",
      },
    ],
  },
  {
    id: "badhabits",
    title: "Evitando Maus Hábitos ⚠️",
    description: "Prevenção e correção de comportamentos indesejados",
    duration: "1 hora",
    route: "/content/training/badhabits",
    icon: AlertTriangleIcon,
    lessons: [
      {
        id: "badhabits1",
        title: "Latidos Excessivos",
        description: "Como controlar latidos excessivos",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "badhabits2",
        title: "Destruição de Objetos",
        description: "Prevenção e correção de comportamentos destrutivos",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "badhabits3",
        title: "Puxar na Guia",
        description: "Correção do comportamento de puxar na guia",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "badhabits4",
        title: "Ansiedade de Separação",
        description: "Como lidar com a ansiedade de separação",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "badhabits5",
        title: "Comportamentos Obsessivos",
        description: "Identificação e correção de comportamentos obsessivos",
        duration: "15 min",
        component: "ComingSoon",
      },
    ],
  },
  {
    id: "mental",
    title: "Exercícios Mentais e Diversão 🧩",
    description: "Atividades para estimular a mente do seu cão",
    duration: "1 hora",
    route: "/content/training/mental",
    icon: BrainIcon,
    lessons: [
      {
        id: "mental1",
        title: "Jogos de Busca",
        description: "Jogos para estimular a busca e o olfato",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "mental2",
        title: "Quebra-cabeças",
        description: "Atividades mentais com brinquedos interativos",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "mental3",
        title: "Treinamento de Truques",
        description: "Aprenda a ensinar truques divertidos",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "mental4",
        title: "Jogos de Agilidade",
        description: "Exercícios físicos e mentais combinados",
        duration: "15 min",
        component: "ComingSoon",
      },
      {
        id: "mental5",
        title: "Enriquecimento Ambiental",
        description: "Como criar um ambiente estimulante",
        duration: "15 min",
        component: "ComingSoon",
      },
    ],
  },
]; 