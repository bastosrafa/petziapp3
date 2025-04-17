import React, { useState } from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaWalking, FaUtensils, FaSyringe } from 'react-icons/fa';
import { 
  RecommendationsContainer, 
  RecommendationsHeader, 
  RecommendationsList,
  RecommendationCard,
  RecommendationContent,
  ActionButton,
  CarouselControls,
  CarouselButton
} from './styles.js';

const Recommendations = () => {
  const { dashboardData } = useDashboard();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAction = (type) => {
    switch (type) {
      case 'training':
        if (!dashboardData.training?.completedLessons || dashboardData.training.completedLessons < 5) {
          navigate('/content/training/starthere');
        } else if (dashboardData.training.completedLessons < 10) {
          navigate('/content/training/behavior');
        } else if (dashboardData.training.completedLessons < 15) {
          navigate('/content/training/socialization');
        } else if (dashboardData.training.completedLessons < 20) {
          navigate('/content/training/hygiene');
        } else if (dashboardData.training.completedLessons < 25) {
          navigate('/content/training/badhabits');
        } else {
          navigate('/content/training/mental');
        }
        break;
      case 'walk':
      case 'food':
        navigate('/diario');
        break;
      case 'vaccine':
        navigate('/vacinas');
        break;
      default:
        break;
    }
  };

  const recommendations = [
    {
      type: 'training',
      title: 'Treinamento Básico',
      description: '25 lições para ensinar comandos básicos ao seu pet',
      icon: <FaGraduationCap />,
      action: 'Iniciar Treino',
      time: 'Recomendado diariamente'
    },
    {
      type: 'walk',
      title: 'Passeio',
      description: 'Seu pet precisa de um passeio para gastar energia',
      icon: <FaWalking />,
      action: 'Registrar Passeio',
      time: 'Último passeio: 2 horas atrás'
    },
    {
      type: 'food',
      title: 'Alimentação',
      description: 'Hora de alimentar seu pet',
      icon: <FaUtensils />,
      action: 'Registrar Alimentação',
      time: 'Última refeição: 4 horas atrás'
    },
    {
      type: 'vaccine',
      title: 'Vacinação',
      description: 'Vacina contra raiva está próxima do vencimento',
      icon: <FaSyringe />,
      action: 'Ver Calendário',
      time: 'Vencimento em 15 dias'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const currentRecommendation = recommendations[currentSlide];

  return (
    <RecommendationsContainer>
      <RecommendationsHeader>
        <h2>Recomendações</h2>
        <CarouselControls>
          <CarouselButton onClick={prevSlide}>&lt;</CarouselButton>
          <CarouselButton onClick={nextSlide}>&gt;</CarouselButton>
        </CarouselControls>
      </RecommendationsHeader>
      
      <RecommendationsList>
        <RecommendationCard>
          <RecommendationContent>
            <h3>
              {currentRecommendation.icon}
              {currentRecommendation.title}
            </h3>
            <p>{currentRecommendation.description}</p>
          </RecommendationContent>
          <ActionButton onClick={() => handleAction(currentRecommendation.type)}>
            {currentRecommendation.action}
          </ActionButton>
        </RecommendationCard>
      </RecommendationsList>
    </RecommendationsContainer>
  );
};

export default Recommendations; 