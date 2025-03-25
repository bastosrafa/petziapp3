import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StartHere1 from "./Lessons/StartHere1";
import StartHere2 from "./Lessons/StartHere2";
import StartHere3 from "./Lessons/StartHere3";
import StartHere4 from "./Lessons/StartHere4";
import StartHere5 from "./Lessons/StartHere5";

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

function StartHereModule() {
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: "starthere1",
      title: "Introdução ao Adestramento",
      description: "Entenda os conceitos básicos do adestramento positivo",
      duration: "10 min",
      component: StartHere1,
      locked: false,
    },
    {
      id: "starthere2",
      title: "Comunicação com seu Cão",
      description: "Aprenda a se comunicar efetivamente com seu cão",
      duration: "15 min",
      component: StartHere2,
      locked: localStorage.getItem("starthere1_completed") !== "true",
    },
    {
      id: "starthere3",
      title: "Recompensas e Reforço Positivo",
      description: "Como usar recompensas para motivar seu cão",
      duration: "15 min",
      component: StartHere3,
      locked: localStorage.getItem("starthere2_completed") !== "true",
    },
    {
      id: "starthere4",
      title: "Timing e Consistência",
      description: "A importância do timing e da consistência no treinamento",
      duration: "15 min",
      component: StartHere4,
      locked: localStorage.getItem("starthere3_completed") !== "true",
    },
    {
      id: "starthere5",
      title: "Ambiente de Treinamento",
      description: "Como criar o ambiente ideal para o treinamento",
      duration: "15 min",
      component: StartHere5,
      locked: localStorage.getItem("starthere4_completed") !== "true",
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
        <Title>Comece Aqui 🎯</Title>
      </Header>
      <Description>
        Fundamentos essenciais para começar a treinar seu cão e estabelecer uma comunicação efetiva.
      </Description>
      <LessonsGrid>
        {lessons.map((lesson) => (
          <LessonCard 
            key={lesson.id} 
            onClick={() => !lesson.locked && handleLessonSelect(lesson)}
            style={{ 
              opacity: lesson.locked ? 0.5 : 1,
              cursor: lesson.locked ? 'not-allowed' : 'pointer',
              position: 'relative'
            }}
          >
            <LessonTitle>
              {lesson.title}
              {localStorage.getItem(`${lesson.id}_completed`) === "true" && (
                <span className="ml-2 text-green-500">✓</span>
              )}
            </LessonTitle>
            <LessonDescription>{lesson.description}</LessonDescription>
            <LessonDuration>{lesson.duration}</LessonDuration>
            {lesson.locked && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '2rem'
              }}>
                🔒
              </div>
            )}
          </LessonCard>
        ))}
      </LessonsGrid>
    </Container>
  );
}

export default StartHereModule; 