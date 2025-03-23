import React from "react";
import Hygiene1 from "./Lessons/Hygiene1";
import Hygiene2 from "./Lessons/Hygiene2";
import Hygiene3 from "./Lessons/Hygiene3";
import Hygiene4 from "./Lessons/Hygiene4";
import Hygiene5 from "./Lessons/Hygiene5";

const isHygiene1Unlocked = localStorage.getItem("hygiene1_unlocked") === "true";

export default {
  id: "hygiene",
  title: "Higiene e Rotina",
  description: "Estabeleça uma rotina saudável e hábitos de higiene com seu cão.",
  icon: "DropletsIcon",
  lessons: [
    {
      id: "hygiene1",
      title: "Introdução à Higiene",
      component: Hygiene1,
      locked: !isHygiene1Unlocked,
    },
    {
      id: "hygiene2",
      title: "Banho e Escovação",
      component: Hygiene2,
      locked: true,
    },
    {
      id: "hygiene3",
      title: "Corte de Unhas",
      component: Hygiene3,
      locked: true,
    },
    {
      id: "hygiene4",
      title: "Limpeza de Orelhas",
      component: Hygiene4,
      locked: true,
    },
    {
      id: "hygiene5",
      title: "Rotina de Higiene",
      component: Hygiene5,
      locked: true,
    },
  ],
}; 