import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Behavior1 from "./Lessons/Behavior1";
import Behavior2 from "./Lessons/Behavior2";
import Behavior3 from "./Lessons/Behavior3";
import Behavior4 from "./Lessons/Behavior4";
import Behavior5 from "./Lessons/Behavior5";
import { trainingModules } from "../config";

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const LessonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const LessonCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LessonTitle = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.75rem;
`;

const LessonDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const LessonDuration = styled.span`
  color: #007bff;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
  margin-right: 1rem;

  &:hover {
    background-color: #5a6268;
  }
`;

const behaviorModule = trainingModules.find(m => m.id === "behavior");

function BehaviorModule() {
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: "behavior1",
      title: "Comandos Básicos: Senta e Deita",
      description: "Aprenda a ensinar os comandos básicos de obediência",
      duration: "15 min",
      component: Behavior1,
    },
    {
      id: "behavior2",
      title: "Comandos Básicos: Fica e Vem",
      description: "Controle e chamada do seu cão em diferentes situações",
      duration: "15 min",
      component: Behavior2,
    },
    {
      id: "behavior3",
      title: "Comandos Básicos: Junto e Solta",
      description: "Passeio com guia e controle de objetos",
      duration: "15 min",
      component: Behavior3,
    },
    {
      id: "behavior4",
      title: "Comandos Básicos: Não e Quieto",
      description: "Controle de comportamentos indesejados",
      duration: "15 min",
      component: Behavior4,
    },
    {
      id: "behavior5",
      title: "Comandos Básicos: Busca e Entrega",
      description: "Jogos e brincadeiras para fortalecer o vínculo",
      duration: "15 min",
      component: Behavior5,
    },
  ];

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleBack = () => {
    if (selectedLesson) {
      setSelectedLesson(null);
    } else {
      navigate("/content/training");
    }
  };

  const handleNextLesson = () => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === selectedLesson.id);
    if (currentIndex < lessons.length - 1) {
      setSelectedLesson(lessons[currentIndex + 1]);
    }
  };

  if (selectedLesson) {
    const LessonComponent = selectedLesson.component;
    return <LessonComponent onNextLesson={handleNextLesson} onBack={handleBack} />;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>Voltar</BackButton>
        <Title>Comportamento Essencial 🐕</Title>
      </Header>
      <Description>
        Desenvolva comportamentos essenciais para uma convivência harmoniosa com seu cão.
      </Description>
      <LessonsGrid>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} onClick={() => handleLessonSelect(lesson)}>
            <LessonTitle>{lesson.title}</LessonTitle>
            <LessonDescription>{lesson.description}</LessonDescription>
            <LessonDuration>{lesson.duration}</LessonDuration>
          </LessonCard>
        ))}
      </LessonsGrid>
    </Container>
  );
}

export default BehaviorModule; 