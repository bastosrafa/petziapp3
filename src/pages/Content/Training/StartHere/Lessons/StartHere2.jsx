import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import startHere2Image from '@/assets/images/training/starthere2.png';

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
  height: calc(100% - 100px); /* Reduzido para dar espaço aos botões */
  opacity: ${props => props.active === "true" ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: ${props => props.active === "true" ? 'auto' : 'none'};
`;

const SlideContent = styled.div`
  height: 100%;
  padding: 2.5rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;

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

const ContentText = styled.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`;

const Text = styled.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
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

const WarningList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
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
  border-left: 4px solid #F56565;
  transition: all 0.2s ease;

  &:hover {
    background: #FFEBEB;
    transform: translateX(4px);
  }

  &:before {
    content: "⚠️";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ExampleList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExampleItem = styled.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #EBF8FF;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  transition: all 0.2s ease;

  &:hover {
    background: #BEE3F8;
    transform: translateX(4px);
  }

  &:before {
    content: "💡";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
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
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 70px; /* Ajustado para ficar acima dos botões */
  left: 0;
  right: 0;
  z-index: 1;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background 0.2s;
`;

const SlideImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function StartHere2({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 3) {
      // Salvar no localStorage primeiro
      localStorage.setItem("starthere2_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "starthere2",
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
              completedLessons: 2,
              currentLevel: 'beginner',
              lastSession: new Date(),
              totalTime: 10
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição StartHere2 salvo com sucesso");
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
      title: "Como os Cães se Comunicam",
      content: (
        <>
          <SlideImage src={startHere2Image} alt="Comunicação Eficaz com o Cão" />
          <ContentText>
            Os cães não entendem palavras como os humanos, mas são especialistas em interpretar sons, gestos e expressões faciais. Nesta aula, você aprenderá a se comunicar de forma clara e eficaz com seu cão.
          </ContentText>
          <ContentText>
            Uma comunicação eficaz fortalece o vínculo entre tutor e cão, tornando o treinamento mais fácil e agradável para ambos.
          </ContentText>
        </>
      ),
    },
    {
      title: "Tom de Voz",
      content: (
        <>
          <Text>
            O tom de voz é crucial para uma comunicação eficaz. Veja como usar diferentes tons:
          </Text>
          <BulletList>
            <BulletItem data-step="1">Tom neutro e firme → Para comandos básicos como "Senta", "Deita", "Fica".</BulletItem>
            <BulletItem data-step="2">Tom animado e motivacional → Para elogios e recompensas verbais.</BulletItem>
            <BulletItem data-step="3">Tom grave e firme → Para redirecionar comportamentos indesejados.</BulletItem>
          </BulletList>
          <WarningList>
            <WarningItem>Não grite ou use tom agressivo → Pode assustar o cão.</WarningItem>
            <WarningItem>Não use tom agudo para repreender → Pode soar como brincadeira.</WarningItem>
          </WarningList>
        </>
      ),
    },
    {
      title: "Linguagem Corporal",
      content: (
        <>
          <Text>
            Os cães prestam mais atenção na linguagem corporal do que nas palavras:
          </Text>
          <BulletList>
            <BulletItem data-step="1">Postura relaxada → O cão se sente seguro e confortável.</BulletItem>
            <BulletItem data-step="2">Movimentos calmos → Evita excitação excessiva ou medo.</BulletItem>
            <BulletItem data-step="3">Contato visual moderado → Ajuda a manter a atenção.</BulletItem>
          </BulletList>
          <WarningList>
            <WarningItem>Não se incline para frente → Pode soar ameaçador.</WarningItem>
            <WarningItem>Não aponte o dedo na cara do cão → Pode gerar estresse.</WarningItem>
          </WarningList>
        </>
      ),
    },
    {
      title: "Exemplo Prático",
      content: (
        <>
          <Text>
            Veja como aplicar a comunicação eficaz na prática:
          </Text>
          <ExampleList>
            <ExampleItem>Diga "Senta" com tom firme e neutro, mantendo postura relaxada.</ExampleItem>
            <ExampleItem>Quando o cão acertar, elogie com tom animado e feliz.</ExampleItem>
            <ExampleItem>Use gestos claros junto com os comandos verbais.</ExampleItem>
          </ExampleList>
          <Text>
            Exercício para praticar:
          </Text>
          <BulletList>
            <BulletItem data-step="1">Grave um comando e ouça sua voz → Seu tom está firme e neutro?</BulletItem>
            <BulletItem data-step="2">Observe sua postura → Você está relaxado e confiante?</BulletItem>
            <BulletItem data-step="3">Pratique os gestos → Eles são claros e consistentes?</BulletItem>
          </BulletList>
        </>
      ),
    },
  ];

  return (
    <LessonContainer>
      <Title>Comunicação eficaz com o cão</Title>
      
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide key={index} active={(currentSlide === index).toString()}>
            <SlideContent>
              <SlideTitle>{slide.title}</SlideTitle>
              {slide.content}
            </SlideContent>
          </Slide>
        ))}

        <Dots>
          {[0, 1, 2, 3].map((index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Dots>

        <NavigationButtons>
          <Button onClick={prevSlide} disabled={currentSlide === 0}>
            Anterior
          </Button>
          <Button onClick={nextSlide}>
            {currentSlide === 3 ? "Próxima Aula" : "Próximo"}
          </Button>
        </NavigationButtons>
      </CarouselContainer>
    </LessonContainer>
  );
}
