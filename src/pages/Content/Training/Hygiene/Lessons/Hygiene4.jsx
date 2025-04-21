import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import hygiene4Image from '@/assets/images/training/Hygiene4.png';

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

const SlideImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
`;

const StepDescription = styled.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const TipItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TipHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const TipIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
`;

const TipTitle = styled.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`;

const TipDescription = styled.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
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

export default function Hygiene4({ onNextLesson }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Limpeza de Ouvidos",
      content: (
        <>
          <SlideImage src={hygiene4Image} alt="Cão tendo os ouvidos limpos" />
          <ContentText>
            Nesta aula, vamos aprender sobre a importância da limpeza de ouvidos para a
            saúde e bem-estar do seu cão.
          </ContentText>
        </>
      )
    },
    {
      title: "Por que Limpar os Ouvidos?",
      content: (
        <SlideContent>
          <SlideIntro>
            A limpeza regular dos ouvidos é essencial por vários motivos:
          </SlideIntro>
          <TipsGrid>
            <TipItem>
              <TipHeader>
                <TipIcon>👂</TipIcon>
                <TipTitle>Prevenção</TipTitle>
              </TipHeader>
              <TipDescription>
                Evita infecções e acúmulo de cera nos ouvidos
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🦮</TipIcon>
                <TipTitle>Conforto</TipTitle>
              </TipHeader>
              <TipDescription>
                Reduz coceira e desconforto causados por sujeira
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>👃</TipIcon>
                <TipTitle>Saúde</TipTitle>
              </TipHeader>
              <TipDescription>
                Previne problemas auditivos e otites
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🔍</TipIcon>
                <TipTitle>Monitoramento</TipTitle>
              </TipHeader>
              <TipDescription>
                Permite identificar problemas precocemente
              </TipDescription>
            </TipItem>
          </TipsGrid>
        </SlideContent>
      )
    },
    {
      title: "Como Limpar os Ouvidos",
      content: (
        <SlideContent>
          <SlideIntro>
            Siga estes passos para uma limpeza segura e eficiente:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Inspeção</StepTitle>
              </StepHeader>
              <StepDescription>
                Verifique se há vermelhidão, odor ou secreção
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Limpeza Externa</StepTitle>
              </StepHeader>
              <StepDescription>
                Use um pano úmido para limpar a parte externa do ouvido
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Limpeza Interna</StepTitle>
              </StepHeader>
              <StepDescription>
                Aplique o produto de limpeza e massageie suavemente
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Finalização</StepTitle>
              </StepHeader>
              <StepDescription>
                Deixe o cão sacudir a cabeça e limpe o excesso
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </SlideContent>
      )
    },
    {
      title: "Dicas Importantes",
      content: (
        <SlideContent>
          <SlideIntro>
            Algumas dicas essenciais para a limpeza de ouvidos:
          </SlideIntro>
          <TipsGrid>
            <TipItem>
              <TipHeader>
                <TipIcon>⏰</TipIcon>
                <TipTitle>Frequência</TipTitle>
              </TipHeader>
              <TipDescription>
                Limpe a cada 1-2 semanas, dependendo da raça
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>⚠️</TipIcon>
                <TipTitle>Cuidados</TipTitle>
              </TipHeader>
              <TipDescription>
                Nunca use cotonetes ou objetos pontiagudos
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>💧</TipIcon>
                <TipTitle>Produtos</TipTitle>
              </TipHeader>
              <TipDescription>
                Use apenas produtos específicos para cães
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>👨‍⚕️</TipIcon>
                <TipTitle>Profissional</TipTitle>
              </TipHeader>
              <TipDescription>
                Consulte um veterinário se notar algo anormal
              </TipDescription>
            </TipItem>
          </TipsGrid>
        </SlideContent>
      )
    },
    {
      title: "Resumo e Próximos Passos",
      content: (
        <SlideContent>
          <SlideIntro>
            Parabéns! Você aprendeu sobre como limpar as orelhas do seu cão de forma segura e eficaz.
          </SlideIntro>
          <BulletList>
            <BulletItem>A limpeza regular dos ouvidos previne infecções e aumenta o conforto do seu cão</BulletItem>
            <BulletItem>Siga os passos corretos: inspeção, limpeza externa, aplicação do produto e finalização</BulletItem>
            <BulletItem>Use apenas produtos veterinários específicos para cães</BulletItem>
            <BulletItem>Esteja atento a sinais de infecção ou desconforto</BulletItem>
          </BulletList>
          
          <SlideIntro>
            Próximos passos:
          </SlideIntro>
          <BulletList>
            <BulletItem>Estabeleça uma rotina de limpeza, baseada nas necessidades específicas do seu cão</BulletItem>
            <BulletItem>Inclua a limpeza dos ouvidos como parte da higiene geral do seu pet</BulletItem>
            <BulletItem>Continue para o próximo módulo para aprender sobre o controle de maus hábitos</BulletItem>
          </BulletList>
        </SlideContent>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage primeiro
        localStorage.setItem("hygiene4_completed", "true");
        
        // Desbloquear a primeira lição do próximo módulo (BadHabits)
        localStorage.setItem("badhabits1_unlocked", "true");
        
        // Disparar evento para atualizar a interface
        window.dispatchEvent(new Event('storage'));

        // Mostrar o popup de conclusão
        setShowPopup(true);
        
        // Tentativa de salvar no Firestore
        if (user) {
          try {
            const progressData = {
              lessonId: "hygiene4",
              moduleId: "hygiene",
              courseId: "9DwWIAtShVCPXyRPSbqF",
              userId: user.uid,
              status: "completed",
              completedAt: Timestamp.fromDate(new Date()),
              duration: 15 // Duração estimada em minutos
            };
            
            // Usar Promise.race para não bloquear a interface
            Promise.race([
              addProgress(progressData),
              new Promise(resolve => setTimeout(resolve, 3000)) // Timeout de 3 segundos
            ]).then(() => {
              // Atualizar o dashboard em segundo plano
              updateTraining({
                completedLessons: 19,
                currentLevel: 'intermediate',
                lastSession: new Date(),
                totalTime: 220,
                unlockedModules: ['startHere', 'hygiene', 'badhabits']
              }).catch(err => console.error("Erro ao atualizar dashboard:", err));
              
              refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
              
              console.log("Progresso da lição Hygiene4 salvo com sucesso");
            }).catch(error => {
              console.error("Erro ao salvar progresso da lição:", error);
            });
          } catch (error) {
            console.error("Erro ao processar progresso da lição:", error);
          }
        }
      } catch (error) {
        console.error("Erro ao salvar progresso da lição:", error);
        setShowPopup(true);
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

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = () => {
    // Desbloqueia a primeira aula do módulo de maus hábitos
    localStorage.setItem("badhabits1_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento
    localStorage.setItem("badhabits_unlocked", "true");
    
    // Desbloqueia o módulo na página de treinamento
    localStorage.setItem("startHere", "true");
    
    // Dispara evento para atualizar a interface
    window.dispatchEvent(new Event('storage'));
    
    // Atualiza o estado do módulo no Firestore
    if (user) {
      updateTraining({
        completedLessons: 19,
        currentLevel: 'intermediate',
        lastSession: new Date(),
        totalTime: 220,
        unlockedModules: ['startHere', 'hygiene', 'badhabits']
      }).catch(err => console.error("Erro ao atualizar dashboard:", err));
    }
    
    // Navega para o módulo de maus hábitos
    navigate("/content/training/badhabits");
  };

  return (
    <LessonContainer>
      <Title>
        Limpeza de Ouvidos
        {localStorage.getItem("hygiene4_completed") === "true" && (
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
      
      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </LessonContainer>
  );
} 