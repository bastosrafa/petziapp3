import React from "react";
import Hygiene1 from "./Lessons/Hygiene1";
import Hygiene2 from "./Lessons/Hygiene2";
import Hygiene3 from "./Lessons/Hygiene3";
import Hygiene4 from "./Lessons/Hygiene4";

export const HygieneConfig = {
  id: "hygiene",
  title: "Higiene e Rotina",
  description: "Aprenda a estabelecer rotinas saudáveis e hábitos de higiene para seu cão",
  lessons: [
    {
      id: "hygiene1",
      title: "Ensinando o Local Correto",
      description: "Como ensinar seu cão onde fazer suas necessidades",
      component: Hygiene1,
    },
    {
      id: "hygiene2",
      title: "Rotina de Alimentação",
      description: "Estabelecendo horários e hábitos alimentares saudáveis",
      component: Hygiene2,
    },
    {
      id: "hygiene3",
      title: "Caixa de Transporte",
      description: "Acostumando seu cão com a caixa de transporte",
      component: Hygiene3,
    },
    {
      id: "hygiene4",
      title: "Preservando os Móveis",
      description: "Evitando que seu cão destrua móveis e objetos",
      component: Hygiene4,
    },
  ],
}; 