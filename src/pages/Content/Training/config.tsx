import { LucideIcon } from "lucide-react";
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
  icon: LucideIcon;
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
    title: "Comportamento Essencial",
    description: "Aprenda a lidar com comportamentos indesejados",
    duration: "2 horas",
    route: "/content/training/behavior",
    icon: BrainIcon,
    lessons: [
      {
        id: "behavior1",
        title: "Latidos Excessivos",
        description: "Como controlar latidos excessivos",
        duration: "20 min",
        component: "Behavior1",
      },
      {
        id: "behavior2",
        title: "Pular nas Pessoas",
        description: "Como ensinar seu cão a não pular nas pessoas",
        duration: "20 min",
        component: "Behavior2",
      },
      {
        id: "behavior3",
        title: "Morder e Roer",
        description: "Como lidar com mordidas e roer objetos",
        duration: "20 min",
        component: "Behavior3",
      },
      {
        id: "behavior4",
        title: "Ansiedade de Separação",
        description: "Como ajudar seu cão com ansiedade de separação",
        duration: "20 min",
        component: "Behavior4",
      },
      {
        id: "behavior5",
        title: "Agressividade",
        description: "Como lidar com comportamentos agressivos",
        duration: "20 min",
        component: "Behavior5",
      },
    ],
  },
  {
    id: "obedience",
    title: "Obediência 🏆",
    description: "Comandos básicos e avançados de obediência",
    duration: "3 horas",
    route: "/content/training/obedience",
    icon: HeartIcon,
    lessons: [
      {
        id: "obedience1",
        title: "Senta",
        description: "Como ensinar seu cão a sentar",
        duration: "15 min",
        component: "Obedience1",
      },
      {
        id: "obedience2",
        title: "Deita",
        description: "Como ensinar seu cão a deitar",
        duration: "15 min",
        component: "Obedience2",
      },
      {
        id: "obedience3",
        title: "Fica",
        description: "Como ensinar seu cão a ficar no lugar",
        duration: "20 min",
        component: "Obedience3",
      },
      {
        id: "obedience4",
        title: "Vem",
        description: "Como ensinar seu cão a vir quando chamado",
        duration: "20 min",
        component: "Obedience4",
      },
      {
        id: "obedience5",
        title: "Junto",
        description: "Como ensinar seu cão a andar junto",
        duration: "20 min",
        component: "Obedience5",
      },
    ],
  },
  {
    id: "socialization",
    title: "Socialização 👥",
    description: "Como socializar seu cão com pessoas e outros animais",
    duration: "2 horas",
    route: "/content/training/socialization",
    icon: UsersIcon,
    lessons: [
      {
        id: "socialization1",
        title: "Socialização com Pessoas",
        description: "Como apresentar seu cão a novas pessoas",
        duration: "20 min",
        component: "Socialization1",
      },
      {
        id: "socialization2",
        title: "Socialização com Cães",
        description: "Como apresentar seu cão a outros cães",
        duration: "20 min",
        component: "Socialization2",
      },
      {
        id: "socialization3",
        title: "Socialização com Ambientes",
        description: "Como acostumar seu cão a diferentes ambientes",
        duration: "20 min",
        component: "Socialization3",
      },
      {
        id: "socialization4",
        title: "Socialização com Crianças",
        description: "Como ensinar seu cão a interagir com crianças",
        duration: "20 min",
        component: "Socialization4",
      },
      {
        id: "socialization5",
        title: "Socialização com Outros Animais",
        description: "Como ensinar seu cão a interagir com outros animais",
        duration: "20 min",
        component: "Socialization5",
      },
    ],
  },
  {
    id: "health",
    title: "Saúde e Bem-estar 🏥",
    description: "Cuidados essenciais para a saúde do seu cão",
    duration: "2 horas",
    route: "/content/training/health",
    icon: DropletsIcon,
    lessons: [
      {
        id: "health1",
        title: "Alimentação",
        description: "Como escolher a melhor alimentação para seu cão",
        duration: "20 min",
        component: "Health1",
      },
      {
        id: "health2",
        title: "Exercícios",
        description: "Como manter seu cão ativo e saudável",
        duration: "20 min",
        component: "Health2",
      },
      {
        id: "health3",
        title: "Higiene",
        description: "Cuidados básicos de higiene para seu cão",
        duration: "20 min",
        component: "Health3",
      },
      {
        id: "health4",
        title: "Vacinação",
        description: "Importância da vacinação e cuidados preventivos",
        duration: "20 min",
        component: "Health4",
      },
      {
        id: "health5",
        title: "Primeiros Socorros",
        description: "O que fazer em situações de emergência",
        duration: "20 min",
        component: "Health5",
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergências 🚨",
    description: "Como lidar com situações de emergência",
    duration: "1 hora",
    route: "/content/training/emergency",
    icon: AlertTriangleIcon,
    lessons: [
      {
        id: "emergency1",
        title: "Primeiros Socorros",
        description: "O que fazer em situações de emergência",
        duration: "20 min",
        component: "Emergency1",
      },
      {
        id: "emergency2",
        title: "Envenenamento",
        description: "Como identificar e tratar envenenamento",
        duration: "20 min",
        component: "Emergency2",
      },
      {
        id: "emergency3",
        title: "Ferimentos",
        description: "Como tratar ferimentos em cães",
        duration: "20 min",
        component: "Emergency3",
      },
    ],
  },
]; 