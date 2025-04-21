import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import badhabits2Image from '@/assets/images/training/badhabits2.png';

const LessonContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
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

const SlideIntro = styled.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
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

const ImagePlaceholder = styled.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const StepItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const StepNumber = styled.div`
  background: #4299E1;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
`;

const StepTitle = styled.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
  font-weight: 600;
`;

const StepDescription = styled.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
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

const SlideImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function BadHabits2({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();
  const navigate = useNavigate();

  const slides = [
    {
      title: "Bem-vindo à Aula!",
      content: (
        <>
          <SlideImage src={badhabits2Image} alt="Cão esperando pacientemente durante refeição" />
          <ContentText>
            Nesta aula, vamos aprender como ensinar seu cão a não roubar comida da mesa e a esperar pacientemente durante as refeições.
          </ContentText>
        </>
      )
    },
    {
      title: "Por que ensinar?",
      content: (
        <>
          <SlideIntro>
            Razões para ensinar seu cão a não roubar comida:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Segurança Alimentar</StepTitle>
              </StepHeader>
              <StepDescription>
                Prevenir o acesso a alimentos perigosos ou tóxicos para cães, como chocolate, cebola e uvas, que podem causar sérios problemas de saúde.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Comportamento Social</StepTitle>
              </StepHeader>
              <StepDescription>
                Evitar situações constrangedoras durante visitas ou refeições em família, mantendo um ambiente harmonioso e seguro para todos.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Saúde Digestiva</StepTitle>
              </StepHeader>
              <StepDescription>
                Prevenir problemas digestivos causados por alimentos inadequados ou em excesso, mantendo uma dieta balanceada e controlada.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Limites e Respeito</StepTitle>
              </StepHeader>
              <StepDescription>
                Estabelecer limites claros de comportamento, ensinando o cão a respeitar o espaço e os momentos das refeições da família.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>5</StepNumber>
                <StepTitle>Bem-estar Geral</StepTitle>
              </StepHeader>
              <StepDescription>
                Promover um ambiente mais tranquilo e organizado, reduzindo o estresse tanto para o cão quanto para os membros da família.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </>
      )
    },
    {
      title: "Métodos de Treinamento",
      content: (
        <>
          <SlideIntro>
            Estratégias eficazes para evitar o roubo de comida:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Local de Descanso</StepTitle>
              </StepHeader>
              <StepDescription>
                Ensine seu cão a ficar em um tapete ou cama específica durante as refeições. Este local deve ser confortável e estar a uma distância segura da mesa.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Comandos de Controle</StepTitle>
              </StepHeader>
              <StepDescription>
                Use comandos claros como "Fica" ou "Espera" para manter o cão no lugar. Pratique estes comandos em diferentes situações para reforçar o comportamento.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Reforço Positivo</StepTitle>
              </StepHeader>
              <StepDescription>
                Recompense o cão com petiscos e elogios quando ele permanecer no local designado. O timing da recompensa é crucial para o aprendizado.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Ignorar Comportamentos Indesejados</StepTitle>
              </StepHeader>
              <StepDescription>
                Não dê atenção quando o cão tentar roubar comida. Ignorar completamente o comportamento indesejado ajuda a extinguir este hábito.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>5</StepNumber>
                <StepTitle>Consistência na Família</StepTitle>
              </StepHeader>
              <StepDescription>
                Todos na casa devem seguir as mesmas regras e comandos. A consistência é fundamental para o sucesso do treinamento.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </>
      )
    },
    {
      title: "Exercício Prático",
      content: (
        <>
          <SlideIntro>
            Vamos praticar este treinamento seguindo estas etapas:
          </SlideIntro>
          <ExerciseSteps>
            <ExerciseStep data-step="1">Escolha um local específico onde seu cão deve permanecer durante as refeições</ExerciseStep>
            <ExerciseStep data-step="2">Antes das refeições, leve seu cão para este local e use o comando "Fica"</ExerciseStep>
            <ExerciseStep data-step="3">Comece com períodos curtos e vá aumentando gradualmente o tempo de espera</ExerciseStep>
            <ExerciseStep data-step="4">Recompense com petiscos e elogios quando ele permanecer no local designado</ExerciseStep>
            <ExerciseStep data-step="5">Se o cão se levantar, gentilmente retorne-o ao lugar e repita o comando</ExerciseStep>
          </ExerciseSteps>
          <WarningList>
            <WarningItem>Nunca puna o cão por se aproximar da mesa; apenas redirecione-o</WarningItem>
            <WarningItem>Não ofereça alimentos da mesa, para não confundir o treinamento</WarningItem>
            <WarningItem>Mantenha a consistência mesmo quando receber visitas</WarningItem>
          </WarningList>
        </>
      )
    },
    {
      title: "Resumo",
      content: (
        <>
          <SlideIntro>
            Parabéns! Você aprendeu sobre como evitar que seu cão roube comida da mesa.
          </SlideIntro>
          <BulletList>
            <BulletItem>Ensinar o cão a não roubar comida é essencial para sua segurança e saúde</BulletItem>
            <BulletItem>Estabelecer um local de descanso durante refeições ajuda a criar limites claros</BulletItem>
            <BulletItem>O reforço positivo é mais eficaz que a punição neste tipo de treinamento</BulletItem>
            <BulletItem>A consistência de todos os membros da família é fundamental para o sucesso</BulletItem>
            <BulletItem>Com paciência e prática, seu cão aprenderá a se comportar adequadamente durante as refeições</BulletItem>
          </BulletList>
          
          <SlideIntro>
            Próximos passos:
          </SlideIntro>
          <BulletList>
            <BulletItem>Pratique diariamente durante as refeições, aumentando gradualmente a dificuldade</BulletItem>
            <BulletItem>Continue reforçando positivamente o comportamento desejado</BulletItem>
            <BulletItem>Prossiga para a próxima lição sobre como lidar com medo e insegurança em cães</BulletItem>
          </BulletList>
        </>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage primeiro
        localStorage.setItem("badhabits2_completed", "true");
        
        // Desbloquear a próxima lição
        localStorage.setItem("badhabits3_unlocked", "true");
        
        // Disparar evento para atualizar a interface
        window.dispatchEvent(new Event('storage'));

        // Tentativa de salvar no Firestore
        if (user) {
          try {
            const progressData = {
              lessonId: "badhabits2",
              moduleId: "badhabits",
              courseId: "9DwWIAtShVCPXyRPSbqF",
              userId: user.uid,
              status: "completed",
              completedAt: Timestamp.fromDate(new Date()),
              duration: 15 // Duração estimada em minutos
            };
            
            // Usar Promise.race para não bloquear a navegação
            Promise.race([
              addProgress(progressData),
              new Promise(resolve => setTimeout(resolve, 2000)) // Timeout de 2 segundos
            ]).then(() => {
              // Atualizar o dashboard em segundo plano
              updateTraining({
                completedLessons: 21,
                currentLevel: 'intermediate',
                lastSession: new Date(),
                totalTime: 250,
                unlockedModules: ['startHere', 'hygiene', 'badhabits']
              }).catch(err => console.error("Erro ao atualizar dashboard:", err));
              
              refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
              
              console.log("Progresso da lição BadHabits2 salvo com sucesso");
            }).catch(error => {
              console.error("Erro ao salvar progresso da lição:", error);
            });
          } catch (error) {
            console.error("Erro ao processar progresso da lição:", error);
          }
        }
        
        // Próxima lição - chamar independentemente do resultado do Firestore
        onNextLesson();
      } catch (error) {
        console.error("Erro ao salvar progresso da lição:", error);
        onNextLesson();
      }
    } else {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <LessonContainer>
      <Title>
        Evitar Roubo de Comida da Mesa
        {localStorage.getItem("badhabits2_completed") === "true" && (
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
            {currentSlide === slides.length - 1 ? "Concluir" : "Próximo"}
          </Button>
        </NavigationButtons>
      </CarouselContainer>
    </LessonContainer>
  );
} 