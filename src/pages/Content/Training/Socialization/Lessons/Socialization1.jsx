import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import socialization1Image from "@/assets/images/training/socialization1.png";

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
  height: 650px;
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
  max-height: 550px;

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
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4A5568;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const BulletList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BulletItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #F0FFF4;
  border-radius: 8px;
  border-left: 4px solid #48BB78;
  transition: all 0.2s ease;

  &:hover {
    background: #E6FFED;
    transform: translateX(4px);
  }

  &:before {
    content: "•";
    color: #48BB78;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${socialization1Image});
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
  padding: 15px;
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

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1rem;
  text-align: center;
`;

export default function Socialization1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();
  const navigate = useNavigate();

  const slides = [
    {
      title: "Introdução à Socialização",
      subtitle: "O que é e por que é importante",
      content: (
        <div>
          <ImagePlaceholder />
          <ContentText>
            A socialização é o processo de expor seu cão a diferentes experiências, pessoas, animais e ambientes de forma positiva e controlada. 
            É fundamental para o desenvolvimento de um cão confiante e equilibrado.
          </ContentText>
          <ContentText>
            Uma socialização adequada ajuda a prevenir problemas comportamentais e garante que seu cão se torne um companheiro equilibrado.
          </ContentText>
        </div>
      )
    },
    {
      title: "Por que Socializar?",
      subtitle: "Benefícios da Socialização",
      content: (
        <div>
          <BulletList>
            <BulletItem>
              <strong>Desenvolvimento Emocional:</strong> Ajuda o cão a desenvolver confiança e equilíbrio emocional.
            </BulletItem>
            <BulletItem>
              <strong>Prevenção de Problemas:</strong> Reduz a probabilidade de medos, ansiedades e comportamentos agressivos.
            </BulletItem>
            <BulletItem>
              <strong>Adaptação Social:</strong> Facilita a convivência com pessoas, outros animais e diferentes ambientes.
            </BulletItem>
            <BulletItem>
              <strong>Qualidade de Vida:</strong> Cães bem socializados são mais felizes e têm uma vida mais rica e variada.
            </BulletItem>
            <BulletItem>
              <strong>Vínculo com o Tutor:</strong> Fortalece a relação e a confiança entre você e seu cão.
            </BulletItem>
          </BulletList>
        </div>
      )
    },
    {
      title: "Período Crítico",
      subtitle: "A janela de oportunidade",
      content: (
        <div>
          <ContentText>
            O período mais importante para a socialização é entre as 3 e 16 semanas de idade. Durante este tempo, o cão está mais receptivo a novas experiências e forma suas primeiras impressões do mundo.
          </ContentText>
          <BulletList>
            <BulletItem>
              <strong>3-8 semanas:</strong> Período ideal para socialização com outros cães e pessoas.
            </BulletItem>
            <BulletItem>
              <strong>8-12 semanas:</strong> Momento crucial para exposição a diferentes ambientes e situações.
            </BulletItem>
            <BulletItem>
              <strong>12-16 semanas:</strong> Período para consolidar as experiências anteriores e introduzir novos desafios.
            </BulletItem>
          </BulletList>
          <ContentText>
            Embora este seja o período ideal, a socialização deve continuar ao longo da vida do cão para manter e reforçar os comportamentos positivos.
          </ContentText>
        </div>
      )
    },
    {
      title: "Como Socializar",
      subtitle: "Princípios básicos",
      content: (
        <div>
          <BulletList>
            <BulletItem>
              <strong>Gradualidade:</strong> Introduza novas experiências de forma gradual e controlada.
            </BulletItem>
            <BulletItem>
              <strong>Positividade:</strong> Associe cada nova experiência a algo positivo, como petiscos ou brincadeiras.
            </BulletItem>
            <BulletItem>
              <strong>Segurança:</strong> Mantenha o cão seguro e confortável durante todo o processo.
            </BulletItem>
            <BulletItem>
              <strong>Consistência:</strong> Pratique regularmente e mantenha uma rotina de socialização.
            </BulletItem>
            <BulletItem>
              <strong>Paciência:</strong> Respeite o ritmo do seu cão e não force situações desconfortáveis.
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
        localStorage.setItem('socialization1_completed', 'true');
        
        await addProgress({
            userId: user.uid,
          lessonId: 'socialization1',
          moduleId: 'socialization',
          completedAt: Timestamp.now(),
          progress: 100
        });

        await updateTraining({
          completedLessons: ['socialization1'],
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

  const handleClosePopup = () => {
    setShowPopup(false);
    if (onNextLesson) {
      onNextLesson();
    }
  };

  return (
    <>
      <LessonContainer>
        <Title>Introdução à Socialização</Title>
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