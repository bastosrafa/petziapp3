import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Socialization1 from "./Lessons/Socialization1";
import Socialization2 from "./Lessons/Socialization2";
import Socialization3 from "./Lessons/Socialization3";
import Socialization4 from "./Lessons/Socialization4";
import Socialization5 from "./Lessons/Socialization5";
import Socialization6 from "./Lessons/Socialization6";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const LessonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const LessonCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LessonTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const LessonDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const LessonDuration = styled.span`
  display: inline-block;
  background: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #666;
`;

const Button = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #45a049;
  }
`;

const BackButton = styled(Button)`
  background: #666;
  margin-bottom: 2rem;

  &:hover {
    background: #555;
  }
`;

const SocializationModule = () => {
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: "socialization1",
      title: "Como socializar o cão com pessoas e outros pets",
      description: "Técnicas para socializar seu cão com diferentes tipos de pessoas e animais",
      duration: "15 min",
      component: Socialization1,
    },
    {
      id: "socialization2",
      title: "Passeio sem puxar a guia",
      description: "Aprenda a ensinar seu cão a caminhar sem puxar a guia",
      duration: "15 min",
      component: Socialization2,
    },
    {
      id: "socialization3",
      title: "Latidos excessivos: Como reduzir e controlar",
      description: "Métodos para controlar e reduzir latidos excessivos",
      duration: "15 min",
      component: Socialization3,
    },
    {
      id: "socialization4",
      title: "Ensinar a não pular em visitas",
      description: "Técnicas para evitar que seu cão pule em visitas",
      duration: "15 min",
      component: Socialization4,
    },
    {
      id: "socialization5",
      title: "Controle na hora da refeição",
      description: "Evitar ansiedade e possessividade durante as refeições",
      duration: "15 min",
      component: Socialization5,
    },
    {
      id: "socialization6",
      title: "Ensinar a aceitar manuseio",
      description: "Preparar seu cão para visitas ao veterinário, banho e tosa",
      duration: "15 min",
      component: Socialization6,
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
    return (
      <Container>
        <BackButton onClick={handleBack}>Voltar para a lista de aulas</BackButton>
        <LessonComponent onNextLesson={handleNextLesson} />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Socialização e Controle 🎭</Title>
        <Description>
          Desenvolva a sociabilidade e o controle de impulsos do seu cão através de técnicas e exercícios práticos.
        </Description>
      </Header>
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
};

export default SocializationModule; 