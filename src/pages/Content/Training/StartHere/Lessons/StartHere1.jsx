import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';

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
  height: 500px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 80px);
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  padding: 20px;
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
  list-style-position: inside;
  margin-bottom: 1.5rem;
`;

const ExerciseStep = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  line-height: 1.6;
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
  margin-top: 2rem;
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
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 1.5rem;
`;

const BulletItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const WarningList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 1rem;
`;

const WarningItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.5rem;
  line-height: 1.6;
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

  return (
    <LessonContainer>
      <Title>
        Introdução ao Treinamento
        {localStorage.getItem("starthere1_completed") === "true" && (
          <span className="ml-2 text-green-500">✓</span>
        )}
      </Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={currentSlide === 0}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa do tema</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos explorar os fundamentos do aprendizado canino e como usar o reforço positivo para treinar seu cão de forma eficaz e amorosa.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Conceitos Básicos */}
        <Slide active={currentSlide === 1}>
          <SlideContent>
            <SlideTitle>Como os Cães Aprendem?</SlideTitle>
            <ContentText>
              Os cães aprendem através de associação e repetição. Quando um comportamento é seguido por algo agradável (como um petisco ou carinho), eles tendem a repetir esse comportamento.
            </ContentText>
            <ContentText>
              O reforço positivo (dar petiscos, carinho ou elogios quando fazem algo certo) é a forma mais eficaz de treinamento, pois:
            </ContentText>
            <BulletList>
              <BulletItem>Cria uma associação positiva com o aprendizado</BulletItem>
              <BulletItem>Fortaleca o vínculo entre tutor e pet</BulletItem>
              <BulletItem>Reduz o estresse e a ansiedade</BulletItem>
              <BulletItem>Estimula o cão a pensar e tomar decisões</BulletItem>
              <BulletItem>Torna o treinamento mais divertido para ambos</BulletItem>
            </BulletList>
            <ContentText>
              O reforço negativo e punições não são recomendados, pois podem:
            </ContentText>
            <WarningList>
              <WarningItem>Gerar medo e ansiedade</WarningItem>
              <WarningItem>Danificar a confiança do cão</WarningItem>
              <WarningItem>Criar associações negativas com o treinamento</WarningItem>
              <WarningItem>Inibir o comportamento natural do cão</WarningItem>
              <WarningItem>Prejudicar o relacionamento entre tutor e pet</WarningItem>
            </WarningList>
          </SlideContent>
        </Slide>

        {/* Slide 2: Exercício Prático */}
        <Slide active={currentSlide === 2}>
          <SlideContent>
            <SlideTitle>Exercício Prático: Reforço Positivo</SlideTitle>
            <ContentText>
              Vamos praticar o reforço positivo com um exercício simples:
            </ContentText>
            <ExerciseSteps>
              <ExerciseStep>Pegue um petisco e segure na mão</ExerciseStep>
              <ExerciseStep>Quando o cão olhar para você ou sentar espontaneamente, recompense imediatamente</ExerciseStep>
              <ExerciseStep>Repita 5 a 10 vezes para ensinar que prestar atenção no tutor traz benefícios</ExerciseStep>
            </ExerciseSteps>
            <ContentText>
              Dicas importantes:
            </ContentText>
            <BulletList>
              <BulletItem>Escolha um petisco que seu cão goste muito</BulletItem>
              <BulletItem>Recompense imediatamente após o comportamento desejado</BulletItem>
              <BulletItem>Mantenha as sessões curtas (5-10 minutos)</BulletItem>
              <BulletItem>Escolha um ambiente calmo e sem distrações</BulletItem>
              <BulletItem>Use um tom de voz animado e entusiasmado ao dar a recompensa, isso ajuda a criar uma associação positiva com o treinamento</BulletItem>
              <BulletItem>Se o cão não responder, tente com um petisco mais atraente ou reduza as distrações do ambiente</BulletItem>
            </BulletList>
            <ContentText>
              Lembre-se:
            </ContentText>
            <BulletList>
              <BulletItem>Seja paciente - cada cão tem seu próprio ritmo de aprendizado</BulletItem>
              <BulletItem>Celebre pequenos progressos, mesmo que pareçam insignificantes</BulletItem>
              <BulletItem>Termine sempre com uma nota positiva, mesmo que o cão não tenha respondido como esperado</BulletItem>
              <BulletItem>Consistência é fundamental - use sempre os mesmos comandos e gestos</BulletItem>
              <BulletItem>O treinamento deve ser uma experiência positiva para ambos</BulletItem>
            </BulletList>
          </SlideContent>
        </Slide>

        {/* Slide 3: Resumo */}
        <Slide active={currentSlide === 3}>
          <SlideContent>
            <ContentSection>
              <SlideTitle>Resumo Rápido</SlideTitle>
              <ContentText>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>🌟</span>
                  Use reforço positivo sempre que possível
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>🔄</span>
                  Seja consistente nos comandos e recompensas
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>⏱️</span>
                  Mantenha as sessões curtas e divertidas
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>🐾</span>
                  Observe e respeite os limites do seu cão
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>🌍</span>
                  Pratique regularmente em diferentes ambientes
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>🎉</span>
                  Celebre cada pequeno progresso
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>😊</span>
                  Mantenha a paciência e o bom humor
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>🎯</span>
                  Adapte o treinamento à personalidade do seu cão
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>🍖</span>
                  Use petiscos de alto valor para recompensas
                </span>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>📅</span>
                  Estabeleça uma rotina de treinamento
                </span>
              </ContentText>
            </ContentSection>
          </SlideContent>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Dots>
          {[0, 1, 2, 3].map((index) => (
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
    </LessonContainer>
  );
}
