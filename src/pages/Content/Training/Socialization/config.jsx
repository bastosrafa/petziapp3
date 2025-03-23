import Socialization1 from "./Lessons/Socialization1";
import Socialization2 from "./Lessons/Socialization2";
import Socialization3 from "./Lessons/Socialization3";
import Socialization4 from "./Lessons/Socialization4";
import Socialization5 from "./Lessons/Socialization5";

const isSocialization1Unlocked = localStorage.getItem("socialization1_unlocked") === "true";

export default {
  id: "socialization",
  title: "Socialização e Controle",
  description: "Aprenda a socializar seu cão e controlar seus impulsos em diferentes situações.",
  icon: "UsersIcon",
  lessons: [
    {
      id: "socialization1",
      title: "Introdução à Socialização",
      component: Socialization1,
      locked: !isSocialization1Unlocked,
    },
    {
      id: "socialization2",
      title: "Socialização com Pessoas",
      component: Socialization2,
      locked: true,
    },
    {
      id: "socialization3",
      title: "Socialização com Outros Cães",
      component: Socialization3,
      locked: true,
    },
    {
      id: "socialization4",
      title: "Controle de Impulsos",
      component: Socialization4,
      locked: true,
    },
    {
      id: "socialization5",
      title: "Ambientes Desafiadores",
      component: Socialization5,
      locked: true,
    },
  ],
}; 