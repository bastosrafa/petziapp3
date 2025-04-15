import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTrainingContext } from '../../../context/TrainingContext';

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

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const LessonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const LessonCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const LessonTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const LessonDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const BadHabits = () => {
  const navigate = useNavigate();
  const { completeLesson } = useTrainingContext();

  const lessons = [
    {
      id: 'barking',
      title: 'Latidos Excessivos',
      description: 'Aprenda a controlar os latidos excessivos do seu pet',
      isUnlocked: true
    },
    {
      id: 'chewing',
      title: 'Mastigação Destrutiva',
      description: 'Como evitar que seu pet destrua objetos e móveis',
      isUnlocked: false
    },
    {
      id: 'jumping',
      title: 'Pulos em Pessoas',
      description: 'Técnicas para evitar que seu pet pule em visitas',
      isUnlocked: false
    },
    {
      id: 'aggression',
      title: 'Agressividade',
      description: 'Identifique e corrija comportamentos agressivos',
      isUnlocked: false
    }
  ];

  const handleLessonClick = (lesson) => {
    if (lesson.isUnlocked) {
      navigate(`/content/training/bad-habits/${lesson.id}`);
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/content/training')}>←</BackButton>
        <Title>Maus Hábitos</Title>
      </Header>
      <Description>
        Aprenda a identificar e corrigir comportamentos indesejados do seu pet.
        Cada lição aborda um comportamento específico e oferece técnicas práticas
        para melhorar o comportamento do seu animal.
      </Description>
      <LessonsGrid>
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            onClick={() => handleLessonClick(lesson)}
            style={{
              opacity: lesson.isUnlocked ? 1 : 0.5,
              cursor: lesson.isUnlocked ? 'pointer' : 'not-allowed'
            }}
          >
            <LessonTitle>{lesson.title}</LessonTitle>
            <LessonDescription>{lesson.description}</LessonDescription>
          </LessonCard>
        ))}
      </LessonsGrid>
    </Container>
  );
};

export default BadHabits; 