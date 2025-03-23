import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Mental1 from "./Lessons/Mental1";
import Mental2 from "./Lessons/Mental2";
import Mental3 from "./Lessons/Mental3";
import Mental4 from "./Lessons/Mental4";

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

function MentalModule() {
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: "mental1",
      title: "Brinquedos Interativos",
      description: "Enriquecimento ambiental com brinquedos interativos",
      duration: "15 min",
      component: Mental1,
    },
    {
      id: "mental2",
      title: "Jogos para Gastar Energia",
      description: "Atividades divertidas para dentro de casa",
      duration: "15 min",
      component: Mental2,
    },
    {
      id: "mental3",
      title: "Truques Simples",
      description: "Truques divertidos para ensinar ao seu cão",
      duration: "15 min",
      component: Mental3,
    },
    {
      id: "mental4",
      title: "Esportes Caninos",
      description: "Introdução aos principais esportes caninos",
      duration: "15 min",
      component: Mental4,
    },
  ];

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleNextLesson = () => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === selectedLesson.id);
    if (currentIndex < lessons.length - 1) {
      setSelectedLesson(lessons[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    if (selectedLesson) {
      setSelectedLesson(null);
    } else {
      navigate("/content/training");
    }
  };

  if (selectedLesson) {
    const LessonComponent = selectedLesson.component;
    return <LessonComponent onBack={handleBack} onNextLesson={handleNextLesson} />;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>Voltar</BackButton>
        <Title>Exercícios Mentais e Diversão 🧩</Title>
      </Header>
      <Description>
        Atividades para estimular a mente do seu cão e fortalecer o vínculo entre vocês.
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

export default MentalModule; 