import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import startHere1Image from '@/assets/images/training/starthere1.png';

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

const ImagePlaceholder = styled.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;

const IntroductionText = styled.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;

const NextLessonButton = styled.button`
  padding: 0.5rem 1rem;
  background: #48BB78;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 1rem;

  &:hover {
    background: #38A169;
  }
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

const ContentSection = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  max-height: 420px;
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

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const SlideImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function StartHere1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 3) {
      // Salvar no localStorage primeiro
      localStorage.setItem("starthere1_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "starthere1",
            moduleId: "starthere",
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
              completedLessons: 1,
              currentLevel: 'beginner',
              lastSession: new Date(),
              totalTime: 5
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição StartHere1 salvo com sucesso");
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
      title: "Introdução ao Adestramento",
      content: (
        <>
          <SlideImage src={startHere1Image} alt="Introdução ao Adestramento" />
          <ContentText>
            Bem-vindo ao mundo do adestramento positivo! Neste módulo, você aprenderá os fundamentos essenciais para começar a treinar seu cão de forma eficaz e respeitosa.
          </ContentText>
          <ContentText>
            O adestramento positivo é uma abordagem baseada em recompensas que fortalece o vínculo entre você e seu cão, tornando o processo de aprendizado mais agradável e eficiente para ambos.
          </ContentText>
        </>
      ),
    },
    {
      title: "Como os Cães Aprendem?",
      content: (
        <>
          <ContentText>
            Os cães aprendem através de associação e repetição. Quando um comportamento é seguido por algo agradável (como um petisco ou carinho), eles tendem a repetir esse comportamento.</ContentText>
          <ContentText>
            O reforço positivo é a forma mais eficaz de treinamento, pois:
          </ContentText>
          <BulletList>
            <BulletItem>Cria uma associação positiva com o aprendizado, tornando o treinamento mais prazeroso</BulletItem>
            <BulletItem>Fortaleca o vínculo entre tutor e pet, aumentando a confiança mútua</BulletItem>
            <BulletItem>Reduz o estresse e a ansiedade, criando um ambiente seguro para o aprendizado</BulletItem>
            <BulletItem>Estimula o cão a pensar e tomar decisões, desenvolvendo sua inteligência</BulletItem>
            <BulletItem>Torna o treinamento mais divertido para ambos, fortalecendo o relacionamento</BulletItem>
          </BulletList>
          <ContentText>
            O reforço negativo e punições não são recomendados, pois podem:
          </ContentText>
          <WarningList>
            <WarningItem>Gerar medo e ansiedade, prejudicando o bem-estar do cão</WarningItem>
            <WarningItem>Danificar a confiança do cão, afetando o relacionamento com o tutor</WarningItem>
            <WarningItem>Criar associações negativas com o treinamento, dificultando o aprendizado</WarningItem>
            <WarningItem>Inibir o comportamento natural do cão, afetando sua personalidade</WarningItem>
            <WarningItem>Prejudicar o relacionamento entre tutor e pet, criando tensão</WarningItem>
          </WarningList>
        </>
      ),
    },
    {
      title: "Exercício Prático: Reforço Positivo",
      content: (
        <>
          <ContentText>
            Vamos praticar o reforço positivo com um exercício simples:
          </ContentText>
          <ExerciseSteps>
            <ExerciseStep data-step="1">Pegue um petisco e segure na mão, mantendo uma postura relaxada e amigável</ExerciseStep>
            <ExerciseStep data-step="2">Quando o cão olhar para você ou sentar espontaneamente, recompense imediatamente com o petisco e um elogio animado</ExerciseStep>
            <ExerciseStep data-step="3">Repita 5 a 10 vezes para ensinar que prestar atenção no tutor traz benefícios positivos</ExerciseStep>
          </ExerciseSteps>
          <ContentText>
            Dicas importantes para o sucesso:
          </ContentText>
          <BulletList>
            <BulletItem>Escolha um petisco que seu cão goste muito, aumentando a motivação</BulletItem>
            <BulletItem>Recompense imediatamente após o comportamento desejado, criando uma associação clara</BulletItem>
            <BulletItem>Mantenha as sessões curtas (5-10 minutos) para evitar cansaço ou desinteresse</BulletItem>
            <BulletItem>Escolha um ambiente calmo e sem distrações, facilitando o foco do cão</BulletItem>
            <BulletItem>Use um tom de voz animado e entusiasmado ao dar a recompensa, reforçando a positividade</BulletItem>
            <BulletItem>Se o cão não responder, tente com um petisco mais atraente ou reduza as distrações do ambiente</BulletItem>
          </BulletList>
          <ContentText>
            Lembre-se sempre:
          </ContentText>
          <BulletList>
            <BulletItem>Seja paciente - cada cão tem seu próprio ritmo de aprendizado e desenvolvimento</BulletItem>
            <BulletItem>Celebre pequenos progressos, mesmo que pareçam insignificantes, mantendo a motivação</BulletItem>
            <BulletItem>Termine sempre com uma nota positiva, mesmo que o cão não tenha respondido como esperado</BulletItem>
            <BulletItem>Consistência é fundamental - use sempre os mesmos comandos e gestos para evitar confusão</BulletItem>
            <BulletItem>O treinamento deve ser uma experiência positiva para ambos, fortalecendo o vínculo</BulletItem>
          </BulletList>
        </>
      ),
    },
    {
      title: "Resumo Rápido",
      content: (
        <>
          <BulletList>
            <BulletItem>Use reforço positivo sempre que possível, criando uma experiência agradável para o cão</BulletItem>
            <BulletItem>Seja consistente nos comandos e recompensas, evitando confusão no aprendizado</BulletItem>
            <BulletItem>Mantenha as sessões curtas e divertidas, respeitando o tempo de atenção do cão</BulletItem>
            <BulletItem>Observe e respeite os limites do seu cão, adaptando o treinamento ao seu ritmo</BulletItem>
            <BulletItem>Pratique regularmente em diferentes ambientes, aumentando a generalização do aprendizado</BulletItem>
            <BulletItem>Celebre cada pequeno progresso, mantendo a motivação do cão e do tutor</BulletItem>
            <BulletItem>Mantenha a paciência e o bom humor, tornando o treinamento uma experiência positiva</BulletItem>
            <BulletItem>Adapte o treinamento à personalidade do seu cão, respeitando suas características individuais</BulletItem>
            <BulletItem>Use petiscos de alto valor para recompensas, aumentando a motivação do cão</BulletItem>
            <BulletItem>Estabeleça uma rotina de treinamento, criando hábitos consistentes</BulletItem>
          </BulletList>
        </>
      ),
    },
  ];

  return (
    <LessonContainer>
      <Title>
        Introdução ao Treinamento
        {localStorage.getItem("starthere1_completed") === "true" && (
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
