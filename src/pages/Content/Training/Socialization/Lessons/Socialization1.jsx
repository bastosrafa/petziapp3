import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import socialization1Image from "@/assets/images/training/socialization1.png";

const LessonContainer = styled.div`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  background: transparent;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  margin-top: 0.2rem;
  text-align: center;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  margin: 0 auto;
  max-width: 480px;
`;

const SlideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;

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
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const ExerciseSteps = styled.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExerciseStep = styled.li`
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
    content: attr(data-step);
    color: #48BB78;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SummaryItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "✓";
    color: #48BB78;
    position: absolute;
    left: 0;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
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

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const IntroductionText = styled.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
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
  background: #F7FAFC;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  transition: all 0.2s ease;

  &:hover {
    background: #EBF8FF;
    transform: translateX(4px);
  }

  &:before {
    content: "•";
    color: #4299E1;
    font-size: 2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const WarningList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const WarningItem = styled.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FFF5F5;
  border-radius: 8px;
  border-left: 4px solid #E53E3E;
  transition: all 0.2s ease;

  &:hover {
    background: #FFEBEB;
    transform: translateX(4px);
  }

  &:before {
    content: "⚠";
    color: #E53E3E;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

export default function Socialization1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 3) {
      // Salvar no localStorage primeiro
      localStorage.setItem("socialization1_completed", "true");
      localStorage.setItem("socialization2_unlocked", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "socialization1",
            moduleId: "socialization",
            courseId: "9DwWIAtShVCPXyRPSbqF",
            userId: user.uid,
            status: "completed",
            completedAt: Timestamp.fromDate(new Date()),
            duration: 5
          };
          
          // Usar Promise.race para não bloquear a navegação
          Promise.race([
            addProgress(progressData),
            new Promise(resolve => setTimeout(resolve, 2000)) // Timeout de 2 segundos
          ]).then(() => {
            // Atualizar o dashboard em segundo plano
            updateTraining({
              completedLessons: 7,
              currentLevel: 'beginner',
              lastSession: new Date(),
              totalTime: 35
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição Socialization1 salvo com sucesso");
          }).catch(error => {
            console.error("Erro ao salvar progresso da lição:", error);
          });
        }
      } catch (error) {
        console.error("Erro ao processar progresso da lição:", error);
      }
    } else {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 4) % 4);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slides = [
    {
      title: "Introdução à Socialização",
      content: (
        <>
          <SlideImage src={socialization1Image} alt="Introdução à Socialização" />
          <ContentText>
            A socialização é o processo de expor seu cão a diferentes experiências, pessoas, animais e ambientes de forma positiva e controlada. 
            É fundamental para o desenvolvimento de um cão confiante e equilibrado.
          </ContentText>
          <ContentText>
            Uma socialização adequada ajuda a prevenir problemas comportamentais e garante que seu cão se torne um companheiro equilibrado.
          </ContentText>
        </>
      ),
    },
    {
      title: "Por que Socializar?",
      content: (
        <>
          <ContentText>
            A socialização adequada traz inúmeros benefícios para seu cão e para sua relação com ele:
          </ContentText>
          <BulletList>
            <BulletItem>Desenvolvimento Emocional: Ajuda o cão a desenvolver confiança e equilíbrio emocional</BulletItem>
            <BulletItem>Prevenção de Problemas: Reduz a probabilidade de medos, ansiedades e comportamentos agressivos</BulletItem>
            <BulletItem>Adaptação Social: Facilita a convivência com pessoas, outros animais e diferentes ambientes</BulletItem>
            <BulletItem>Qualidade de Vida: Cães bem socializados são mais felizes e têm uma vida mais rica e variada</BulletItem>
            <BulletItem>Vínculo com o Tutor: Fortalece a relação e a confiança entre você e seu cão</BulletItem>
          </BulletList>
          <ContentText>
            Consequências da falta de socialização:
          </ContentText>
          <WarningList>
            <WarningItem>Desenvolvimento de medos e fobias em situações cotidianas</WarningItem>
            <WarningItem>Comportamentos reativos ou agressivos por insegurança</WarningItem>
            <WarningItem>Dificuldade em lidar com mudanças de ambiente ou rotina</WarningItem>
            <WarningItem>Estresse e ansiedade em situações sociais</WarningItem>
            <WarningItem>Limitações na qualidade de vida por não poder frequentar ambientes diversos</WarningItem>
          </WarningList>
        </>
      ),
    },
    {
      title: "Período Crítico e Como Socializar",
      content: (
        <>
          <ContentText>
            O período mais importante para a socialização é entre as 3 e 16 semanas de idade. Durante este tempo, o cão está mais receptivo a novas experiências.
          </ContentText>
          <ExerciseSteps>
            <ExerciseStep data-step="1">3-8 semanas: Período ideal para socialização com outros cães e pessoas</ExerciseStep>
            <ExerciseStep data-step="2">8-12 semanas: Momento crucial para exposição a diferentes ambientes e situações</ExerciseStep>
            <ExerciseStep data-step="3">12-16 semanas: Período para consolidar as experiências anteriores e introduzir novos desafios</ExerciseStep>
          </ExerciseSteps>
          <ContentText>
            Princípios básicos para uma socialização eficaz:
          </ContentText>
          <BulletList>
            <BulletItem>Gradualidade: Introduza novas experiências de forma gradual e controlada</BulletItem>
            <BulletItem>Positividade: Associe cada nova experiência a algo positivo, como petiscos ou brincadeiras</BulletItem>
            <BulletItem>Segurança: Mantenha o cão seguro e confortável durante todo o processo</BulletItem>
            <BulletItem>Consistência: Pratique regularmente e mantenha uma rotina de socialização</BulletItem>
            <BulletItem>Paciência: Respeite o ritmo do seu cão e não force situações desconfortáveis</BulletItem>
          </BulletList>
        </>
      ),
    },
    {
      title: "Resumo Rápido",
      content: (
        <>
          <BulletList>
            <BulletItem>A socialização é fundamental para o desenvolvimento de um cão equilibrado e confiante</BulletItem>
            <BulletItem>O período crítico de socialização é entre 3-16 semanas, mas deve continuar por toda a vida</BulletItem>
            <BulletItem>Exponha seu cão gradualmente a diferentes pessoas, animais, ambientes e experiências</BulletItem>
            <BulletItem>Associe sempre novas experiências a recompensas e reforços positivos</BulletItem>
            <BulletItem>Respeite o ritmo e os limites do seu cão, sem forçar situações estressantes</BulletItem>
            <BulletItem>Cães bem socializados têm menos problemas comportamentais e melhor qualidade de vida</BulletItem>
            <BulletItem>A socialização fortalece o vínculo entre você e seu cão, criando confiança mútua</BulletItem>
            <BulletItem>Mantenha a consistência na rotina de socialização, com exposições frequentes e variadas</BulletItem>
            <BulletItem>Monitore a linguagem corporal do seu cão para identificar sinais de desconforto</BulletItem>
            <BulletItem>Busque ajuda profissional se notar problemas específicos durante a socialização</BulletItem>
          </BulletList>
        </>
      ),
    },
  ];

  return (
    <LessonContainer>
      <Title>
        Introdução à Socialização
        {localStorage.getItem("socialization1_completed") === "true" && (
          <span className="ml-2 text-green-500">✓</span>
        )}
      </Title>
      
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide key={index} active={currentSlide === index}>
            <SlideContent>
              <SlideTitle>{slide.title}</SlideTitle>
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
            {currentSlide === 3 ? "Próxima Aula" : "Próximo"}
          </Button>
        </NavigationButtons>
      </CarouselContainer>
    </LessonContainer>
  );
} 