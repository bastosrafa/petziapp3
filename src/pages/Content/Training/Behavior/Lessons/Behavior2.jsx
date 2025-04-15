import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { useCollection } from "@/hooks/useCollection";
import { Timestamp } from 'firebase/firestore';

const LessonContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  position: relative;
  height: 600px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SlideContent = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 20px;
`;

const SlideTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
`;

const ContentSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #444;
  margin-bottom: 10px;
`;

const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 10;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  z-index: 10;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? "#007bff" : "#ccc")};
  cursor: pointer;
`;

export default function Behavior2({ onNextLesson, onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();
  
  // Buscar todos os documentos de progresso do usuário
  const { documents: progressDocs } = useCollection(
    "progress",
    ["userId", "==", user.uid],
    null,
    ["courseId", "==", "9DwWIAtShVCPXyRPSbqF"]
  );

  const nextSlide = async () => {
    if (currentSlide === 2) {
      // Salvar no localStorage primeiro
      localStorage.setItem("behavior2_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "behavior2",
            moduleId: "behavior",
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
            // Calcular o progresso total
            const updatedProgressDocs = progressDocs ? [...progressDocs] : [];
            updatedProgressDocs.push(progressData);
            
            // Calcular o número total de lições completadas
            const completedLessons = updatedProgressDocs.filter(doc => doc.status === "completed").length;
            
            // Calcular o tempo total de treinamento
            const totalTime = updatedProgressDocs.reduce((acc, doc) => acc + (doc.duration || 0), 0);
            
            // Determinar o nível com base no número de lições
            const currentLevel = completedLessons < 10 ? 'beginner' : 
                               completedLessons < 20 ? 'intermediate' : 
                               completedLessons < 30 ? 'advanced' : 'expert';
            
            // Atualizar o dashboard em segundo plano
            updateTraining({
              completedLessons,
              currentLevel,
              lastSession: new Date(),
              totalTime
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição Behavior2 salvo com sucesso");
          }).catch(error => {
            console.error("Erro ao salvar progresso da lição:", error);
          });
        }
      } catch (error) {
        console.error("Erro ao processar progresso da lição:", error);
      }
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
    } else {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <LessonContainer>
      <Title>Módulo 2: Comportamento</Title>
      <SubTitle>Não Pular nas Pessoas</SubTitle>
      
      <CarouselContainer>
        <Slide active={currentSlide === 0}>
          <SlideContent>
            <ImageContainer>
              <Image src="/images/training/no-jump-intro.jpg" alt="Cão pulando em pessoa" />
            </ImageContainer>
          <ContentSection>
            <ContentText>
                Nesta aula, você aprenderá a ensinar seu cão a não pular nas pessoas. 
                Este é um comportamento comum que pode ser corrigido com paciência e consistência.
            </ContentText>
          </ContentSection>
          </SlideContent>
          <Dots>
            {[0, 1, 2].map((index) => (
              <Dot
                key={index}
                active={currentSlide === index}
                onClick={() => goToSlide(index)}
              />
            ))}
          </Dots>
          <NavigationButtons>
            <Button onClick={onBack}>Voltar</Button>
            <Button onClick={nextSlide}>
              {currentSlide === 2 ? "Próxima Aula" : "Próximo"}
            </Button>
          </NavigationButtons>
        </Slide>

        <Slide active={currentSlide === 1}>
          <SlideContent>
            <ContentSection>
          <SlideTitle>Como Ensinar</SlideTitle>
            <SectionTitle>Passo a Passo</SectionTitle>
            <ContentText>
                1. Ignore o cão quando ele pular
                <br />
                2. Vire as costas e não faça contato visual
                <br />
                3. Recompense quando ele estiver com as patas no chão
                <br />
                4. Pratique com diferentes pessoas
                <br />
                5. Seja consistente em todas as situações
            </ContentText>
          </ContentSection>
          </SlideContent>
          <Dots>
            {[0, 1, 2].map((index) => (
              <Dot
                key={index}
                active={currentSlide === index}
                onClick={() => goToSlide(index)}
              />
            ))}
          </Dots>
          <NavigationButtons>
            <Button onClick={onBack}>Voltar</Button>
            <Button onClick={nextSlide}>
              {currentSlide === 2 ? "Próxima Aula" : "Próximo"}
            </Button>
          </NavigationButtons>
        </Slide>

        <Slide active={currentSlide === 2}>
          <SlideContent>
            <ContentSection>
          <SlideTitle>Prática e Dicas</SlideTitle>
            <SectionTitle>Dicas Importantes</SectionTitle>
            <ContentText>
                • Mantenha a calma e não grite
                <br />
                • Ensine um comportamento alternativo (como sentar)
                <br />
                • Recompense comportamentos calmos
                <br />
                • Pratique com visitas
                <br />
                • Seja paciente e consistente
            </ContentText>
          </ContentSection>
          </SlideContent>
      <Dots>
        {[0, 1, 2].map((index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Dots>
          <NavigationButtons>
            <Button onClick={onBack}>Voltar</Button>
            <Button onClick={nextSlide}>
              {currentSlide === 2 ? "Próxima Aula" : "Próximo"}
            </Button>
          </NavigationButtons>
        </Slide>
      </CarouselContainer>
    </LessonContainer>
  );
} 