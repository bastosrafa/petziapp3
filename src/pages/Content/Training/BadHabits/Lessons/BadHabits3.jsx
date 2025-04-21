import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import badhabits3Image from '@/assets/images/training/badhabits3.png';

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

export default function BadHabits3({ onNextLesson }) {
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
          <SlideImage src={badhabits3Image} alt="Cão pulando em pessoas" />
          <ContentText>
            Nesta aula, vamos aprender técnicas eficazes para ensinar seu cão a não pular nas pessoas, um comportamento comum que pode ser incômodo e até perigoso em algumas situações.
          </ContentText>
        </>
      )
    },
    {
      title: "Por que ensinar?",
      content: (
        <>
          <SlideIntro>
            Por que é importante ensinar seu cão a não pular nas pessoas:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Segurança</StepTitle>
              </StepHeader>
              <StepDescription>
                Previne acidentes e lesões, especialmente com pessoas mais vulneráveis como crianças pequenas e idosos.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Bom Comportamento</StepTitle>
              </StepHeader>
              <StepDescription>
                Ensina o cão a interagir de forma mais educada e controlada com pessoas, melhorando sua aceitação social.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Socialização</StepTitle>
              </StepHeader>
              <StepDescription>
                Facilita a aceitação do cão em diferentes ambientes e situações, permitindo que ele seja bem-vindo em mais lugares.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Bem-estar</StepTitle>
              </StepHeader>
              <StepDescription>
                Reduz o estresse tanto para o cão quanto para as pessoas ao redor, criando interações mais tranquilas e agradáveis.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </>
      )
    },
    {
      title: "Passo a Passo",
      content: (
        <>
          <SlideIntro>
            Como ensinar seu cão a não pular nas pessoas:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Ignore o comportamento indesejado</StepTitle>
              </StepHeader>
              <StepDescription>
                Vire as costas quando o cão pular e só dê atenção quando ele estiver com as quatro patas no chão.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Ensine o comando "Senta"</StepTitle>
              </StepHeader>
              <StepDescription>
                Recompense quando o cão se sentar ao invés de pular, criando uma alternativa positiva ao comportamento indesejado.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Pratique em diferentes situações</StepTitle>
              </StepHeader>
              <StepDescription>
                Treine com diferentes pessoas e em diferentes ambientes para generalizar o comportamento desejado.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Use reforço positivo</StepTitle>
              </StepHeader>
              <StepDescription>
                Elogie e recompense quando o cão se comportar adequadamente, fortalecendo o comportamento correto.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>5</StepNumber>
                <StepTitle>Mantenha a consistência</StepTitle>
              </StepHeader>
              <StepDescription>
                Todos na casa devem seguir as mesmas regras para não confundir o cão durante o processo de aprendizagem.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </>
      )
    },
    {
      title: "Técnicas Eficazes",
      content: (
        <>
          <SlideIntro>
            Técnicas complementares para evitar que o cão pule nas pessoas:
          </SlideIntro>
          <ExerciseSteps>
            <ExerciseStep data-step="1">Treine o cão para se sentar quando alguém chegar, recompensando esse comportamento</ExerciseStep>
            <ExerciseStep data-step="2">Mantenha o cão na guia durante o treinamento inicial para melhor controle</ExerciseStep>
            <ExerciseStep data-step="3">Peça a visitantes para ignorar o cão até que ele se acalme</ExerciseStep>
            <ExerciseStep data-step="4">Ofereça um brinquedo para o cão segurar na boca, evitando que ele pule</ExerciseStep>
            <ExerciseStep data-step="5">Reduza a excitação antes das visitas com uma caminhada ou sessão de brincadeiras</ExerciseStep>
          </ExerciseSteps>
          <WarningList>
            <WarningItem>Nunca use punição física, pois isso pode aumentar a ansiedade e piorar o comportamento</WarningItem>
            <WarningItem>Não reforce o comportamento de pular dando atenção, mesmo que seja negativa</WarningItem>
            <WarningItem>Evite empurrar o cão, pois ele pode interpretar como uma brincadeira</WarningItem>
          </WarningList>
        </>
      )
    },
    {
      title: "Resumo",
      content: (
        <>
          <SlideIntro>
            Parabéns! Você aprendeu como ensinar seu cão a não pular nas pessoas.
          </SlideIntro>
          <BulletList>
            <BulletItem>Evitar que o cão pule nas pessoas é importante para a segurança e o bem-estar de todos</BulletItem>
            <BulletItem>A técnica principal consiste em ignorar o comportamento indesejado e recompensar a calma</BulletItem>
            <BulletItem>Ensinar comandos alternativos como "sentar" oferece ao cão uma forma apropriada de buscar atenção</BulletItem>
            <BulletItem>A consistência e a paciência são fundamentais para o sucesso do treinamento</BulletItem>
            <BulletItem>Com prática regular, seu cão aprenderá a cumprimentar pessoas de forma educada e controlada</BulletItem>
          </BulletList>
          
          <SlideIntro>
            Próximos passos:
          </SlideIntro>
          <BulletList>
            <BulletItem>Pratique diariamente com diferentes pessoas e em diferentes situações</BulletItem>
            <BulletItem>Aumente gradualmente o nível de excitação durante os treinos</BulletItem>
            <BulletItem>Continue para a próxima lição sobre como lidar com ansiedade de separação</BulletItem>
          </BulletList>
        </>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage primeiro
        localStorage.setItem("badhabits3_completed", "true");
        
        // Desbloquear a próxima lição
        localStorage.setItem("badhabits4_unlocked", "true");
        
        // Disparar evento para atualizar a interface
        window.dispatchEvent(new Event('storage'));

        // Tentativa de salvar no Firestore
        if (user) {
          try {
            const progressData = {
              lessonId: "badhabits3",
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
                completedLessons: 22,
                currentLevel: 'intermediate',
                lastSession: new Date(),
                totalTime: 265,
                unlockedModules: ['startHere', 'hygiene', 'badhabits']
              }).catch(err => console.error("Erro ao atualizar dashboard:", err));
              
              refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
              
              console.log("Progresso da lição BadHabits3 salvo com sucesso");
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
        Ensinando o Cão a Não Pular nas Pessoas
        {localStorage.getItem("badhabits3_completed") === "true" && (
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