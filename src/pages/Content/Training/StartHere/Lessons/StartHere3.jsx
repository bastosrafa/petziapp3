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
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active === "true" ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SlideTitle = styled.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Text = styled.p`
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const BulletItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "✔";
    color: #48BB78;
    position: absolute;
    left: 0;
  }
`;

const WarningList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const WarningItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "🚫";
    position: absolute;
    left: 0;
  }
`;

const ExampleList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ExampleItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "🔹";
    position: absolute;
    left: 0;
  }
`;

const ExerciseList = styled.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ExerciseItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "1️⃣";
    position: absolute;
    left: 0;
  }

  &:nth-child(2):before {
    content: "2️⃣";
  }

  &:nth-child(3):before {
    content: "3️⃣";
  }

  &:nth-child(4):before {
    content: "4️⃣";
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

export default function StartHere3({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 3) {
      // Salvar no localStorage primeiro
      localStorage.setItem("starthere3_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "starthere3",
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
              completedLessons: 3,
              currentLevel: 'beginner',
              lastSession: new Date(),
              totalTime: 15
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição StartHere3 salvo com sucesso");
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
      <Title>Como Usar a Linguagem Corporal?</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={(currentSlide === 0).toString()}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa da linguagem corporal com cães</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos aprender como usar a linguagem corporal para nos comunicar efetivamente com nosso cão.
          </IntroductionText>
        </Slide>

        {/* Slide 1: O que fazer */}
        <Slide active={(currentSlide === 1).toString()}>
          <SlideTitle>O que fazer:</SlideTitle>
          <BulletList>
            <BulletItem>Postura relaxada → O cão se sente seguro e confortável.</BulletItem>
            <BulletItem>Movimentos calmos e suaves → Evita excitação excessiva ou medo.</BulletItem>
            <BulletItem>Contato visual moderado → Ajuda a manter a atenção do cão.</BulletItem>
            <BulletItem>Usar gestos claros junto com os comandos → Exemplo: apontar para o chão ao dizer "Deita".</BulletItem>
          </BulletList>
        </Slide>

        {/* Slide 2: O que NÃO fazer */}
        <Slide active={(currentSlide === 2).toString()}>
          <SlideTitle>O que NÃO fazer:</SlideTitle>
          <WarningList>
            <WarningItem>Inclinar-se para frente ou fazer movimentos bruscos → Pode soar ameaçador.</WarningItem>
            <WarningItem>Apontar o dedo na cara do cão → Pode gerar estresse.</WarningItem>
            <WarningItem>Olhar fixamente nos olhos por muito tempo → Alguns cães interpretam isso como desafio.</WarningItem>
          </WarningList>
        </Slide>

        {/* Slide 3: Exemplo Prático */}
        <Slide active={(currentSlide === 3).toString()}>
          <SlideTitle>Exemplo Prático</SlideTitle>
          <ExampleList>
            <ExampleItem>Quando pedir "Senta", levante a mão com a palma para cima.</ExampleItem>
            <ExampleItem>Quando pedir "Fica", estenda a mão aberta como um sinal de "Pare".</ExampleItem>
            <ExampleItem>Sempre use o mesmo gesto para o mesmo comando para reforçar o aprendizado.</ExampleItem>
          </ExampleList>
        </Slide>

        {/* Slide 4: Exercício Prático */}
        <Slide active={(currentSlide === 4).toString()}>
          <SlideTitle>Exercício Prático para Aprimorar a Comunicação</SlideTitle>
          <ExerciseList>
            <ExerciseItem>Grave um comando e ouça sua voz → Seu tom está firme, neutro e claro?</ExerciseItem>
            <ExerciseItem>Treine com gestos claros e consistentes → Associe um gesto a cada comando.</ExerciseItem>
            <ExerciseItem>Observe seu pet → Ele está confuso ou responde melhor a certos tons e posturas?</ExerciseItem>
            <ExerciseItem>Repita os exercícios diariamente → A comunicação eficaz melhora com a repetição.</ExerciseItem>
          </ExerciseList>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Button onClick={nextSlide}>
          {currentSlide === 4 ? "Próxima Aula" : "Próximo"}
        </Button>
      </NavigationButtons>

      <Dots>
        {[0, 1, 2, 3, 4].map((index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Dots>
    </LessonContainer>
  );
} 