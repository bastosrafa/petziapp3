import React from "react";
import BadHabits1 from "./Lessons/BadHabits1";
import BadHabits2 from "./Lessons/BadHabits2";
import BadHabits3 from "./Lessons/BadHabits3";
import BadHabits4 from "./Lessons/BadHabits4";

export const BadHabitsConfig = {
  id: "badhabits",
  title: "Evitando Maus Hábitos ⚠️",
  description: "Prevenção e correção de comportamentos indesejados",
  lessons: [
    {
      id: "badhabits1",
      title: "Mordidas e Mastigação Excessiva",
      description: "Como redirecionar para brinquedos adequados",
      component: BadHabits1,
    },
    {
      id: "badhabits2",
      title: "Evitar Roubo de Comida",
      description: "Como evitar que o cão roube comida da mesa",
      component: BadHabits2,
    },
    {
      id: "badhabits3",
      title: "Medo e Insegurança",
      description: "Como tornar o cão mais confiante",
      component: BadHabits3,
    },
    {
      id: "badhabits4",
      title: "Ansiedade de Separação",
      description: "Como evitar ansiedade de separação",
      component: BadHabits4,
    },
  ],
}; 