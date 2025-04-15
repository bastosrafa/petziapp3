import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
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
  background: white;
  border-top: 1px solid #eee;
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
  bottom: 70px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background: white;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? "#007bff" : "#ccc")};
  cursor: pointer;
`;

export default function Behavior4({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 2) {
      // Salvar no localStorage primeiro
      localStorage.setItem("behavior4_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "behavior4",
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
            // Atualizar o dashboard em segundo plano
            updateTraining({
              completedLessons: 4,
              currentLevel: 'beginner',
              lastSession: new Date(),
              totalTime: 20
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição Behavior4 salvo com sucesso");
          }).catch(error => {
            console.error("Erro ao salvar progresso da lição:", error);
          });
        }
      } catch (error) {
        console.error("Erro ao processar progresso da lição:", error);
      }
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
      <SubTitle>Deitar e Rolar</SubTitle>
      
      <CarouselContainer>
        <Slide active={currentSlide === 0}>
          <SlideContent>
            <ImageContainer>
              <Image src="/images/training/lie-roll-intro.jpg" alt="Cão deitado e rolando" />
            </ImageContainer>
            <ContentSection>
              <SlideTitle>Bem-vindo à Aula: Deitar e Rolar</SlideTitle>
              <ContentText>
                Nesta aula, você aprenderá a ensinar seu cão dois comandos divertidos e úteis: 
                "Deitar" e "Rolar". Estes truques não só são impressionantes, mas também ajudam 
                a fortalecer o vínculo entre você e seu pet.
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
            <Button onClick={prevSlide}>Voltar</Button>
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
                1. Comece com o comando "Deitar" usando um petisco como guia
                2. Recompense quando o cão estiver completamente deitado
                3. Introduza o comando verbal "Deita"
                4. Para "Rolar", guie o cão com o petisco em círculo
                5. Pratique os movimentos separadamente antes de combiná-los
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
            <Button onClick={prevSlide}>Voltar</Button>
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
                • Use um tapete ou superfície confortável
                • Mantenha as sessões curtas e divertidas
                • Recompense cada pequeno progresso
                • Não force o movimento
                • Pratique em diferentes locais
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
            <Button onClick={prevSlide}>Voltar</Button>
            <Button onClick={nextSlide}>
              {currentSlide === 2 ? "Próxima Aula" : "Próximo"}
            </Button>
          </NavigationButtons>
        </Slide>
      </CarouselContainer>
    </LessonContainer>
  );
} 