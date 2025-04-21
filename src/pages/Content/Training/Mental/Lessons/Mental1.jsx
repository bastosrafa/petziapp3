import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import Mental1Image from '@/assets/images/training/Mental1.png';

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
  padding: 2rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 60px; /* Espaço para os botões de navegação */

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
  z-index: 5;
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
  align-items: center;
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

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
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

export default function Mental1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 3) {
      // Salvar no localStorage primeiro
      localStorage.setItem("mental1_completed", "true");
      localStorage.setItem("mental2_unlocked", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "mental1",
            moduleId: "mental",
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
              completedLessons: 25,
              currentLevel: 'advanced',
              lastSession: new Date(),
              totalTime: 305,
              unlockedModules: ['startHere', 'hygiene', 'badhabits', 'mental']
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição Mental1 salvo com sucesso");
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
      title: "Introdução ao Enriquecimento Mental",
      content: (
        <>
          <SlideImage src={Mental1Image} alt="Cão brincando com brinquedos interativos" />
          <ContentText>
            Bem-vindo à aula sobre Brinquedos Interativos e Enriquecimento Ambiental! Nesta aula, você aprenderá como manter seu cão mentalmente estimulado através de atividades e brinquedos que desafiam sua inteligência.
          </ContentText>
          <ContentText>
            O enriquecimento mental é tão importante quanto o exercício físico para a saúde e bem-estar do seu cão, ajudando a prevenir problemas comportamentais causados pelo tédio e falta de estímulo.
          </ContentText>
        </>
      ),
    },
    {
      title: "Benefícios do Enriquecimento Mental",
      content: (
        <>
          <ContentText>
            O enriquecimento mental oferece diversos benefícios para o seu cão, impactando positivamente sua saúde e comportamento.
          </ContentText>
          <BulletList>
            <BulletItem>Reduz a ansiedade e o estresse, criando um estado mental mais equilibrado</BulletItem>
            <BulletItem>Previne comportamentos destrutivos causados pelo tédio, como roer móveis e objetos</BulletItem>
            <BulletItem>Estimula o desenvolvimento cognitivo, melhorando a capacidade de resolver problemas</BulletItem>
            <BulletItem>Aumenta a confiança do cão ao superar desafios, reduzindo inseguranças</BulletItem>
            <BulletItem>Fortalece o vínculo entre tutor e pet durante as atividades interativas</BulletItem>
          </BulletList>
          <ContentText>
            Situações onde o enriquecimento mental é especialmente importante:
          </ContentText>
          <WarningList>
            <WarningItem>Cães que ficam sozinhos por longos períodos, reduzindo o estresse da separação</WarningItem>
            <WarningItem>Pets convalescentes ou com mobilidade reduzida, que precisam de estímulo sem esforço físico</WarningItem>
            <WarningItem>Cães idosos, para manter a mente ativa e prevenir o declínio cognitivo</WarningItem>
            <WarningItem>Filhotes em desenvolvimento, estimulando o aprendizado e a curiosidade natural</WarningItem>
            <WarningItem>Cães muito ativos mentalmente, que precisam de desafios constantes</WarningItem>
          </WarningList>
        </>
      ),
    },
    {
      title: "Tipos de Enriquecimento Mental",
      content: (
        <>
          <ContentText>
            Existem diversas formas de proporcionar enriquecimento mental para seu cão:
          </ContentText>
          <ExerciseSteps>
            <ExerciseStep data-step="1">Brinquedos interativos: Quebra-cabeças, brinquedos que liberam petiscos e mordedores recheáveis estimulam o raciocínio</ExerciseStep>
            <ExerciseStep data-step="2">Jogos de farejar: Esconda petiscos pela casa ou jardim para estimular o olfato e a busca</ExerciseStep>
            <ExerciseStep data-step="3">Treinamento de truques: Ensine novos comandos e habilidades, desafiando seu cão a aprender</ExerciseStep>
            <ExerciseStep data-step="4">Rotação de brinquedos: Alterne os brinquedos disponíveis para manter a novidade e o interesse</ExerciseStep>
            <ExerciseStep data-step="5">Mudanças no ambiente: Altere os arranjos de móveis ou crie túneis e obstáculos pela casa</ExerciseStep>
          </ExerciseSteps>
          <ContentText>
            Dicas importantes para o sucesso:
          </ContentText>
          <BulletList>
            <BulletItem>Comece com desafios simples e aumente gradualmente a dificuldade</BulletItem>
            <BulletItem>Observe o que mais interessa seu cão e adapte as atividades às suas preferências</BulletItem>
            <BulletItem>Reveze entre diferentes tipos de enriquecimento para manter o interesse</BulletItem>
            <BulletItem>Dedique pelo menos 15-30 minutos diários para atividades de estimulação mental</BulletItem>
            <BulletItem>Participe das atividades junto com seu cão para fortalecer o vínculo</BulletItem>
            <BulletItem>Recompense e comemore os sucessos, mantendo a experiência positiva e motivadora</BulletItem>
          </BulletList>
        </>
      ),
    },
    {
      title: "Resumo Rápido",
      content: (
        <>
          <BulletList>
            <BulletItem>O enriquecimento mental é fundamental para o bem-estar do seu cão</BulletItem>
            <BulletItem>Utilize brinquedos interativos, jogos de farejar e treinamento de novos truques</BulletItem>
            <BulletItem>Reduza problemas comportamentais oferecendo estímulos mentais adequados</BulletItem>
            <BulletItem>Varie as atividades para manter o interesse e o engajamento do seu cão</BulletItem>
            <BulletItem>Dedique tempo diário para desafios mentais, assim como faz com exercícios físicos</BulletItem>
            <BulletItem>Observe as preferências do seu cão e adapte as atividades às suas necessidades</BulletItem>
            <BulletItem>Aumente gradualmente a dificuldade dos desafios conforme seu cão progride</BulletItem>
            <BulletItem>Celebre os sucessos e mantenha uma experiência positiva de aprendizado</BulletItem>
            <BulletItem>Utilize o enriquecimento mental em todas as fases da vida do seu cão</BulletItem>
            <BulletItem>Combine diferentes tipos de estímulos para atender às diversas necessidades do seu pet</BulletItem>
          </BulletList>
        </>
      ),
    },
  ];

  return (
    <LessonContainer>
      <Title>
        Brinquedos Interativos e Enriquecimento Ambiental
        {localStorage.getItem("mental1_completed") === "true" && (
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