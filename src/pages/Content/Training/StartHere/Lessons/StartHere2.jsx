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
`;

const BulletItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;

  &:before {
    content: "🔹";
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

  return (
    <LessonContainer>
      <Title>Comunicação eficaz com o cão</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={(currentSlide === 0).toString()}>
          <SlideContent>
            <SlideTitle>Bem-vindo à Aula!</SlideTitle>
            <ImageContainer>
              <ImagePlaceholder>Imagem ilustrativa da comunicação com cães</ImagePlaceholder>
            </ImageContainer>
            <IntroductionText>
              Nesta aula, vamos aprender como se comunicar efetivamente com seu cão através do tom de voz e da linguagem corporal.
            </IntroductionText>
          </SlideContent>
        </Slide>

        {/* Slide 1: Como os Cães Interpretam o Mundo */}
        <Slide active={(currentSlide === 1).toString()}>
          <SlideContent>
            <SlideTitle>Como os Cães Interpretam o Mundo?</SlideTitle>
            <Text>
              Os cães não entendem palavras como os humanos, mas associam sons, gestos e expressões faciais ao que acontece em seguida.
            </Text>
            <BulletList>
              <BulletItem>Tom de voz: Indica emoções e intenções. Use um tom firme para comandos e animado para elogios.</BulletItem>
              <BulletItem>Linguagem corporal: Reforça ou contradiz o que estamos pedindo. Mantenha postura relaxada e gestos claros.</BulletItem>
              <BulletItem>Expressões faciais: Os cães percebem mudanças sutis no rosto do tutor. Sorria ao dar comandos positivos.</BulletItem>
              <BulletItem>Timing: O momento certo de dar comandos e recompensas é crucial para o aprendizado.</BulletItem>
              <BulletItem>Consistência: Use sempre os mesmos gestos e tons para os mesmos comandos.</BulletItem>
            </BulletList>
          </SlideContent>
        </Slide>

        {/* Slide 2: Como Usar o Tom de Voz Corretamente */}
        <Slide active={(currentSlide === 2).toString()}>
          <SlideContent>
            <SlideTitle>Como Usar o Tom de Voz Corretamente</SlideTitle>
            <Text>
              O tom de voz é uma ferramenta poderosa na comunicação com seu cão. Veja como usar de forma eficaz:
            </Text>
            <BulletList>
              <BulletItem>Comandos básicos: Use um tom firme e neutro, sem gritar ou alterar muito o volume.</BulletItem>
              <BulletItem>Elogios: Use um tom mais agudo e animado, mostrando entusiasmo genuíno.</BulletItem>
              <BulletItem>Correções: Use um tom mais grave e curto, sem demonstrar raiva ou frustração.</BulletItem>
              <BulletItem>Chamada: Use um tom convidativo e alegre para chamar a atenção do cão.</BulletItem>
              <BulletItem>Evite gritar: Isso pode assustar o cão e prejudicar a comunicação.</BulletItem>
            </BulletList>
          </SlideContent>
        </Slide>

        {/* Slide 3: Exemplo Prático */}
        <Slide active={(currentSlide === 3).toString()}>
          <SlideContent>
            <SlideTitle>Exemplo Prático</SlideTitle>
            <ExampleList>
              <ExampleItem>Diga "Senta" com um tom firme e neutro.</ExampleItem>
              <ExampleItem>Se ele acertar, elogie com um tom animado e feliz: "Isso, muito bem!"</ExampleItem>
              <ExampleItem>Se ele errar, use um "Ei!" em tom firme e neutro, sem gritar.</ExampleItem>
            </ExampleList>
          </SlideContent>
        </Slide>

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
