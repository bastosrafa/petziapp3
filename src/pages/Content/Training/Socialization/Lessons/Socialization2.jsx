import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import socialization2Image from "@/assets/images/training/socialization2.png";

const LessonContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 0;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${props => props.active ? 'auto' : 'none'};
  z-index: ${props => props.active ? 1 : 0};
`;

const SlideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem;
  padding-bottom: 3rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  max-height: 500px;

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
  margin-bottom: 1rem;
  text-align: center;
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #4A5568;
  margin-bottom: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const BulletList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BulletItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.5;
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
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const UrbanBullet = styled(BulletItem)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`;

const ParkBullet = styled(BulletItem)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`;

const TransportBullet = styled(BulletItem)`
  background: #FAF5FF;
  border-left: 4px solid #9F7AEA;

  &:hover {
    background: #E9D8FD;
  }

  &:before {
    color: #9F7AEA;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${socialization2Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #4299E1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3182CE;
  }

  &:disabled {
    background: #CBD5E0;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background 0.2s;
`;

export default function Socialization2({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();
  const navigate = useNavigate();

  const slides = [
    {
      title: "Socialização com Pessoas",
      subtitle: "Construindo confiança e relacionamentos",
      content: (
        <div>
          <ImagePlaceholder />
          <ContentText>
            A socialização com pessoas é fundamental para o desenvolvimento de um cão confiante e amigável. 
            Vamos aprender como ajudar seu cão a se sentir confortável e seguro ao interagir com diferentes tipos de pessoas.
          </ContentText>
        </div>
      )
    },
    {
      title: "Tipos de Pessoas",
      subtitle: "Diversidade de interações",
      content: (
        <div>
          <BulletList>
            <BulletItem>
              <strong>Adultos:</strong> Apresente seu cão a pessoas de diferentes alturas, vozes e movimentos.
            </BulletItem>
            <BulletItem>
              <strong>Crianças:</strong> Ensine seu cão a interagir de forma gentil e calma com crianças.
            </BulletItem>
            <BulletItem>
              <strong>Idosos:</strong> Ajuda seu cão a se adaptar a movimentos mais lentos e diferentes.
            </BulletItem>
            <BulletItem>
              <strong>Pessoas com Necessidades Especiais:</strong> Ensine seu cão a respeitar diferentes formas de locomoção e comunicação.
            </BulletItem>
          </BulletList>
        </div>
      )
    },
    {
      title: "Métodos de Socialização",
      subtitle: "Técnicas eficazes",
      content: (
        <div>
          <BulletList>
            <BulletItem>
              <strong>Contato Visual:</strong> Ensine seu cão a manter contato visual calmo com pessoas.
            </BulletItem>
            <BulletItem>
              <strong>Toque Gentil:</strong> Acostume seu cão a ser tocado de forma suave e respeitosa.
            </BulletItem>
            <BulletItem>
              <strong>Comandos Básicos:</strong> Use comandos como "senta" e "fica" durante as interações.
            </BulletItem>
            <BulletItem>
              <strong>Reforço Positivo:</strong> Recompense comportamentos calmos e amigáveis.
            </BulletItem>
          </BulletList>
        </div>
      )
    },
    {
      title: "Ambientes e Situações",
      subtitle: "Contextos de socialização",
      content: (
        <div>
          <BulletList>
            <BulletItem>
              <strong>Em Casa:</strong> Convide pessoas para visitas controladas em seu ambiente.
            </BulletItem>
            <BulletItem>
              <strong>Em Público:</strong> Exponha gradualmente seu cão a diferentes locais públicos.
            </BulletItem>
            <BulletItem>
              <strong>Durante Passeios:</strong> Use os passeios como oportunidade para interações positivas.
            </BulletItem>
            <BulletItem>
              <strong>Em Eventos:</strong> Introduza seu cão a situações sociais de forma gradual.
            </BulletItem>
          </BulletList>
        </div>
      )
    },
    {
      title: "Dicas Importantes",
      subtitle: "Para uma socialização segura",
      content: (
        <div>
          <BulletList>
            <BulletItem>
              <strong>Respeite o Ritmo:</strong> Nunca force interações e respeite os limites do seu cão.
            </BulletItem>
            <BulletItem>
              <strong>Supervisão Constante:</strong> Mantenha sempre o controle da situação.
            </BulletItem>
            <BulletItem>
              <strong>Petiscos e Recompensas:</strong> Use reforços positivos para criar associações agradáveis.
            </BulletItem>
            <BulletItem>
              <strong>Consistência:</strong> Mantenha uma rotina regular de socialização.
            </BulletItem>
          </BulletList>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      try {
        localStorage.setItem('socialization2_completed', 'true');
        
        await addProgress({
          userId: user.uid,
          lessonId: 'socialization2',
          moduleId: 'socialization',
          completedAt: Timestamp.now(),
          progress: 100
        });

        await updateTraining({
          completedLessons: ['socialization2'],
          currentLevel: 'socialization',
          lastSession: Timestamp.now(),
          totalTime: 0
        });

        await refreshData();
        
        console.log('Progresso salvo com sucesso!');
        if (onNextLesson) {
          onNextLesson();
        }
      } catch (error) {
        console.error('Erro ao salvar progresso:', error);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <LessonContainer>
        <Title>Socialização com Pessoas</Title>
        <CarouselContainer>
          {slides.map((slide, index) => (
            <Slide key={index} active={currentSlide === index}>
              <SlideContent>
                {slide.subtitle && <SlideTitle>{slide.subtitle}</SlideTitle>}
                {slide.content}
              </SlideContent>
            </Slide>
          ))}
          <NavigationButtons>
            <Button onClick={prevSlide} disabled={currentSlide === 0}>
              Anterior
            </Button>
            <Dots>
              {slides.map((_, index) => (
                <Dot
                  key={index}
                  active={currentSlide === index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </Dots>
            <Button onClick={nextSlide}>
              {currentSlide === slides.length - 1 ? "Concluir" : "Próximo"}
            </Button>
          </NavigationButtons>
        </CarouselContainer>
      </LessonContainer>
    </>
  );
} 