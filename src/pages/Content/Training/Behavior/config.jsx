import Behavior1 from "./Lessons/Behavior1";
import Behavior2 from "./Lessons/Behavior2";
import Behavior3 from "./Lessons/Behavior3";
import Behavior4 from "./Lessons/Behavior4";
import { HeartIcon } from "lucide-react";

const isBehavior1Unlocked = localStorage.getItem("behavior1_unlocked") === "true";

export default {
  id: "behavior",
  title: "Comportamento",
  description: "Aprenda a entender e modificar comportamentos indesejados",
  icon: HeartIcon,
  lessons: [
    {
      id: "behavior1",
      title: "Entendendo o Comportamento",
      description: "Fundamentos do comportamento canino",
      duration: "15 min",
      component: "Behavior1",
      locked: !isBehavior1Unlocked,
    },
    {
      id: "behavior2",
      title: "Modificação de Comportamento",
      description: "Técnicas para mudar comportamentos indesejados",
      duration: "15 min",
      component: "Behavior2",
      locked: true,
    },
    {
      id: "behavior3",
      title: "Ansiedade e Medo",
      description: "Como lidar com cães ansiosos e medrosos",
      duration: "15 min",
      component: "Behavior3",
      locked: true,
    },
    {
      id: "behavior4",
      title: "Agressividade",
      description: "Entendendo e tratando a agressividade",
      duration: "15 min",
      component: "Behavior4",
      locked: true,
    },
  ],
}; 