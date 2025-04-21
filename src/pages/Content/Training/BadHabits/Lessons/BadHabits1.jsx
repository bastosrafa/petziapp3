import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import badhabits1Image from '@/assets/images/training/badhabits1.png';

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

const SlideIntro = styled.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
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

// Adicionando componentes do StartHere1 que podem estar faltando
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

const SlideImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function BadHabits1({ onNextLesson }) {
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
          <SlideImage src={badhabits1Image} alt="Cão com brinquedos apropriados para mastigação" />
          <ContentText>
            Nesta aula, vamos aprender como redirecionar o comportamento de mordidas e mastigação excessiva para brinquedos adequados.
          </ContentText>
        </>
      )
    },
    {
      title: "Por que ensinar?",
      content: (
        <>
          <SlideIntro>
            Por que é importante redirecionar o comportamento de mordidas e mastigação:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Comportamento Natural</StepTitle>
              </StepHeader>
              <StepDescription>
                Cães usam a boca como principal ferramenta para explorar o ambiente, sendo um comportamento instintivo e essencial para seu desenvolvimento.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Prevenção de Danos</StepTitle>
              </StepHeader>
              <StepDescription>
                Evitar danos a móveis, roupas e objetos pessoais, além de prevenir acidentes com materiais perigosos que possam ser ingeridos.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Saúde Bucal</StepTitle>
              </StepHeader>
              <StepDescription>
                Promover a saúde bucal através da mastigação de brinquedos apropriados, que ajudam na limpeza dos dentes e no fortalecimento da mandíbula.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Bem-estar Mental</StepTitle>
              </StepHeader>
              <StepDescription>
                Reduzir o estresse e a ansiedade através de comportamentos de mastigação saudáveis, proporcionando uma válvula de escape natural para o cão.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </>
      )
    },
    {
      title: "Métodos de Treinamento",
      content: (
        <>
          <SlideIntro>
            Como redirecionar o comportamento de mordidas e mastigação:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Brinquedos Apropriados</StepTitle>
              </StepHeader>
              <StepDescription>
                Ofereça brinquedos específicos para mastigação, como ossos de borracha ou brinquedos interativos, que sejam seguros e atrativos para o cão.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Redirecionamento</StepTitle>
              </StepHeader>
              <StepDescription>
                Quando o cão começar a morder algo inadequado, redirecione-o gentilmente para um brinquedo apropriado e recompense-o quando ele aceitar.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Consistência</StepTitle>
              </StepHeader>
              <StepDescription>
                Mantenha uma rotina consistente de oferecer brinquedos apropriados e recompensar o comportamento correto, reforçando positivamente as escolhas certas.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Ambiente Seguro</StepTitle>
              </StepHeader>
              <StepDescription>
                Mantenha objetos valiosos ou perigosos fora do alcance do cão e crie um ambiente onde ele possa explorar e mastigar com segurança.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </>
      )
    },
    {
      title: "Dicas Importantes",
      content: (
        <>
          <SlideIntro>
            Recomendações para o sucesso do treinamento:
          </SlideIntro>
          <BulletList>
            <BulletItem>Ofereça uma variedade de brinquedos com diferentes texturas e formatos para manter o interesse do cão</BulletItem>
            <BulletItem>Nunca use as mãos ou outras partes do corpo como brinquedos de mordida, para não confundir o cão</BulletItem>
            <BulletItem>Lembre-se que filhotes tem necessidades maiores de mastigar durante a fase de dentição</BulletItem>
            <BulletItem>Elogie efusivamente quando o cão escolher o brinquedo certo para mastigar</BulletItem>
            <BulletItem>Brinquedos com petiscos escondidos podem ajudar a aumentar o interesse pelos itens apropriados</BulletItem>
          </BulletList>
          <WarningList>
            <WarningItem>Evite brinquedos muito pequenos que possam ser engolidos ou causar asfixia</WarningItem>
            <WarningItem>Não ceda e permita a mastigação inapropriada "só desta vez", pois isso confunde o treinamento</WarningItem>
            <WarningItem>Supervisione sempre o uso de brinquedos novos até ter certeza de que são seguros</WarningItem>
          </WarningList>
        </>
      )
    },
    {
      title: "Resumo",
      content: (
        <>
          <SlideIntro>
            Parabéns! Você aprendeu sobre como redirecionar o comportamento de mordidas e mastigação do seu cão.
          </SlideIntro>
          <BulletList>
            <BulletItem>A mastigação é um comportamento natural dos cães e deve ser direcionada corretamente</BulletItem>
            <BulletItem>Oferecer brinquedos apropriados ajuda a proteger seus pertences e promover a saúde do cão</BulletItem>
            <BulletItem>A consistência e o reforço positivo são essenciais para o sucesso do treinamento</BulletItem>
            <BulletItem>Criar um ambiente seguro ajuda a prevenir acidentes e facilita o aprendizado</BulletItem>
            <BulletItem>Com paciência e prática, seu cão aprenderá o que é apropriado para mastigar</BulletItem>
          </BulletList>
          
          <SlideIntro>
            Próximos passos:
          </SlideIntro>
          <BulletList>
            <BulletItem>Estabeleça uma rotina para oferecer brinquedos apropriados ao seu cão</BulletItem>
            <BulletItem>Mantenha a consistência no redirecionamento de comportamentos inadequados</BulletItem>
            <BulletItem>Continue para a próxima lição para aprender mais sobre bons hábitos</BulletItem>
          </BulletList>
        </>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage primeiro
        localStorage.setItem("badhabits1_completed", "true");
        
        // Desbloquear a próxima lição
        localStorage.setItem("badhabits2_unlocked", "true");
        
        // Disparar evento para atualizar a interface
        window.dispatchEvent(new Event('storage'));

        // Tentativa de salvar no Firestore
        if (user) {
          try {
            const progressData = {
              lessonId: "badhabits1",
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
                completedLessons: 20,
                currentLevel: 'intermediate',
                lastSession: new Date(),
                totalTime: 235,
                unlockedModules: ['startHere', 'hygiene', 'badhabits']
              }).catch(err => console.error("Erro ao atualizar dashboard:", err));
              
              refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
              
              console.log("Progresso da lição BadHabits1 salvo com sucesso");
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
        Mordidas e Mastigação Excessiva
        {localStorage.getItem("badhabits1_completed") === "true" && (
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