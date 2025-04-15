import { DogIcon, HeartIcon, UsersIcon, DropletsIcon, AlertTriangleIcon, BrainIcon } from "lucide-react";

export const trainingModules = [
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
    title: "Comportamento 🐕",
    description: "Aprenda a entender e modificar comportamentos indesejados",
    duration: "1 hora",
    route: "/content/training/behavior",
    icon: HeartIcon,
  },
  {
    id: "socialization",
    title: "Socialização 👥",
    description: "Aprenda a socializar seu cão e controlar seus impulsos",
    duration: "1 hora",
    route: "/content/training/socialization",
    icon: UsersIcon,
  },
  {
    id: "hygiene",
    title: "Higiene e Rotina 🚿",
    description: "Aprenda a estabelecer uma rotina de higiene saudável",
    duration: "1 hora",
    route: "/content/training/hygiene",
    icon: DropletsIcon,
  },
  {
    id: "badhabits",
    title: "Evitando Maus Hábitos ⚠️",
    description: "Prevenção e correção de comportamentos indesejados",
    duration: "1 hora",
    route: "/content/training/badhabits",
    icon: AlertTriangleIcon,
  },
  {
    id: "mental",
    title: "Exercícios Mentais 🧠",
    description: "Estimule a mente do seu cão com exercícios desafiadores",
    duration: "1 hora",
    route: "/content/training/mental",
    icon: BrainIcon,
  }
]; 