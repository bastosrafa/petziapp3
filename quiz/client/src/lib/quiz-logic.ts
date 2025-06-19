export function generateDiagnosis(answers: Record<number, any>) {
  const diagnosis = {
    behavior: "Necessita rotina + reforço positivo",
    stimulus: "Baixo estímulo mental e físico",
    health: "Possível falta de organização em vacinas e vermífugos",
    owner: "Sobrecarregado, sem saber por onde começar"
  };

  // Customize diagnosis based on answers
  if (answers[4] === "Nunca tentei") {
    diagnosis.behavior = "Precisa de introdução ao adestramento básico";
  } else if (answers[4] === "Sim, com profissional") {
    diagnosis.behavior = "Pode precisar de reforços pontuais";
  }

  if (answers[9] === "2x ou mais" && answers[11] === "Sim") {
    diagnosis.stimulus = "Boa rotina de estímulos, manter consistência";
  } else if (answers[9] === "Nenhuma") {
    diagnosis.stimulus = "Necessita urgentemente de atividade física";
  }

  if (answers[13] === "Sim" && answers[14] === "Sim, sempre") {
    diagnosis.health = "Boa organização dos cuidados de saúde";
  } else if (answers[13] === "Não sei") {
    diagnosis.health = "Necessita organização urgente dos registros de saúde";
  }

  if (answers[17] === "Não" && answers[18] === "Sim, com certeza") {
    diagnosis.owner = "Motivado e pronto para seguir um plano estruturado";
  } else if (answers[17] === "Sim") {
    diagnosis.owner = "Precisa de apoio emocional e orientação clara";
  }

  return diagnosis;
}

export function calculateProgress(currentQuestion: number, totalQuestions: number): number {
  return Math.round(((currentQuestion + 1) / totalQuestions) * 100);
}
