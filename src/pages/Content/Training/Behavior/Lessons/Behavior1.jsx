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

const CarouselContainer = styled.div`
  position: relative;
  height: 600px;
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
`;

const SlideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
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
  width: 100%;
  height: 200px;
  margin: 20px 0;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.active ? '#48BB78' : '#4299E1'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.active ? '#38A169' : '#3182CE'};
  }

  &:disabled {
    background: #CBD5E0;
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
  z-index: 10;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background 0.2s;
`;

export default function Behavior1({ onNextLesson, onBack }) {
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
      localStorage.setItem("behavior1_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "behavior1",
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
            
            console.log("Progresso da lição Behavior1 salvo com sucesso");
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
      <Title>Senta e Deita</Title>
      
      <CarouselContainer>
        <Slide active={currentSlide === 0}>
          <SlideContent>
          <SlideTitle>Introdução</SlideTitle>
          <ContentSection>
            <ContentText>
                Bem-vindo à aula sobre os comandos "Senta" e "Deita". 
                Estes são os primeiros comandos que você deve ensinar ao seu cão, 
                pois são a base para outros comportamentos.
            </ContentText>
          </ContentSection>
            <ImageContainer>
              <Image src="/images/training/sit-down-intro.jpg" alt="Cão sentado" />
            </ImageContainer>
          </SlideContent>
        </Slide>

        <Slide active={currentSlide === 1}>
          <SlideContent>
          <SlideTitle>Como Ensinar</SlideTitle>
          <ContentSection>
            <SectionTitle>Passo a Passo</SectionTitle>
            <ContentText>
                1. Comece com o comando "Senta"
                2. Use um petisco para guiar o movimento
                3. Recompense imediatamente quando o cão sentar
                4. Repita várias vezes em sessões curtas
                5. Introduza o comando "Deita" após dominar o "Senta"
            </ContentText>
          </ContentSection>
            <ImageContainer>
              <Image src="/images/training/sit-down-steps.jpg" alt="Passos para ensinar sentar e deitar" />
            </ImageContainer>
          </SlideContent>
        </Slide>

        <Slide active={currentSlide === 2}>
          <SlideContent>
          <SlideTitle>Prática e Dicas</SlideTitle>
          <ContentSection>
            <SectionTitle>Dicas Importantes</SectionTitle>
            <ContentText>
              • Pratique em diferentes ambientes
              • Use recompensas variadas (petiscos, carinho, brincadeiras)
              • Seja paciente e consistente
              • Não force fisicamente o cão
              • Mantenha as sessões curtas e divertidas
            </ContentText>
          </ContentSection>
            <ImageContainer>
              <Image src="/images/training/sit-down-tips.jpg" alt="Dicas para treinamento" />
            </ImageContainer>
          </SlideContent>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={onBack}>Voltar</Button>
        <Button onClick={nextSlide}>
          {currentSlide === 2 ? "Próxima Aula" : "Próximo"}
        </Button>
      </NavigationButtons>

      <Dots>
        {[0, 1, 2].map((index) => (
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