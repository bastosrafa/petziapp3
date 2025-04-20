import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import socialization5Image from "@/assets/images/training/socialization5.png";

const LessonContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 0;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  position: relative;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
`;

const SlideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 1rem;
  margin-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  padding-left: 1rem;
  padding-right: 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #F7FAFC;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4299E1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #3182CE;
  }
`;

const SlideTitle = styled.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
  background: white;
  border-top: 1px solid #E2E8F0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavButton = styled.button`
  background-color: ${props => props.disabled ? '#CBD5E0' : '#4299E1'};
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.disabled ? '#CBD5E0' : '#3182CE'};
  }
`;

const ProgressDots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 0.5rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background-color 0.2s;
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4A5568;
  margin-bottom: 1rem;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BulletItem = styled.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "•";
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const PreparationBullet = styled(BulletItem)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`;

const InteractionBullet = styled(BulletItem)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`;

const ComfortBullet = styled(BulletItem)`
  background: #FAF5FF;
  border-left: 4px solid #9F7AEA;

  &:hover {
    background: #E9D8FD;
  }

  &:before {
    color: #9F7AEA;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  color: #2D3748;
  margin-bottom: 1rem;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${socialization5Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export default function Socialization5({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Ambientes Desafiadores",
      subtitle: "Expandindo os limites",
      content: (
        <div>
          <ImagePlaceholder />
          <ContentText>
            A socialização com diferentes ambientes é crucial para um cão confiante e adaptável. 
            Vamos aprender como ajudar seu cão a se sentir seguro em diversos contextos.
          </ContentText>
        </div>
      )
    },
    {
      title: "Preparação",
      content: (
        <div>
          <ContentText>
            Antes de expor seu cão a ambientes desafiadores:
          </ContentText>
          <BulletList>
            <PreparationBullet>Comece com ambientes mais tranquilos e conhecidos</PreparationBullet>
            <PreparationBullet>Use equipamentos de segurança adequados</PreparationBullet>
            <PreparationBullet>Leve petiscos para reforço positivo</PreparationBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Tipos de Ambientes",
      content: (
        <div>
          <ContentText>
            Ambientes que podem ser desafiadores:
          </ContentText>
          <BulletList>
            <InteractionBullet>Centros urbanos com tráfego e multidões</InteractionBullet>
            <InteractionBullet>Locais com sons altos e inesperados</InteractionBullet>
            <InteractionBullet>Espaços com diferentes superfícies e texturas</InteractionBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Dicas Importantes",
      content: (
        <div>
          <ContentText>
            Para uma exposição segura e positiva:
          </ContentText>
          <BulletList>
            <ComfortBullet>Respeite o ritmo do seu cão</ComfortBullet>
            <ComfortBullet>Mantenha sessões curtas e positivas</ComfortBullet>
            <ComfortBullet>Observe os sinais de estresse</ComfortBullet>
          </BulletList>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      // Salvar no localStorage primeiro
      localStorage.setItem("socialization5_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição usando a prop onNextLesson
      onNextLesson();
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <LessonContainer>
        <Title>Ambientes Desafiadores</Title>
        <CarouselContainer>
          <Slide>
            <SlideTitle>{slides[currentSlide].title}</SlideTitle>
            <SlideContent>
              {slides[currentSlide].content}
            </SlideContent>
            <NavigationButtons>
              <NavButton 
                onClick={prevSlide} 
                disabled={currentSlide === 0}
              >
                Anterior
              </NavButton>
              <ProgressDots>
                {slides.map((_, index) => (
                  <Dot 
                    key={index} 
                    $active={index === currentSlide}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </ProgressDots>
              <NavButton 
                onClick={nextSlide} 
              >
                {currentSlide === slides.length - 1 ? "Concluir" : "Próximo"}
              </NavButton>
            </NavigationButtons>
          </Slide>
        </CarouselContainer>
      </LessonContainer>
    </>
  );
} 