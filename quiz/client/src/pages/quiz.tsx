import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeSection from "@/components/quiz/WelcomeSection";
import QuizSection from "@/components/quiz/QuizSection";
import PersuasionBlock from "@/components/quiz/PersuasionBlock";
import ResultsSection from "@/components/quiz/ResultsSection";
import EmailCapture from "@/components/quiz/EmailCapture";
import ProgressBar from "@/components/quiz/ProgressBar";
import { Heart, PawPrint, Shield } from "lucide-react";

export type QuizStep = 'welcome' | 'quiz' | 'persuasion' | 'email' | 'results';

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState<QuizStep>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [currentPersuasion, setCurrentPersuasion] = useState(1);
  const [diagnosis, setDiagnosis] = useState<any>(null);

  const getContextualPersuasionBlock = (blockNumber: number) => {
    const petAge = answers[3] || '';
    const trainingExperience = answers[4] || '';
    const destructiveBehavior = answers[5] || '';
    const obedience = answers[8] || '';
    const concerns = answers[13] || [];
    
    switch (blockNumber) {
      case 1:
        let title1 = "Você não está sozinho!";
        let description1 = "A maioria dos tutores enfrenta dificuldades — o importante é saber por onde começar. Vamos entender seu caso.";
        
        if (petAge === 'Filhote') {
          title1 = "Fase de filhote é desafiadora!";
          description1 = "Filhotes precisam de paciência e consistência. É normal que ainda estejam aprendendo — vamos te ajudar nessa jornada.";
        } else if (petAge === 'Idoso') {
          title1 = "Cães idosos também podem aprender!";
          description1 = "Nunca é tarde para melhorar hábitos. Cães idosos respondem bem a rotinas suaves e consistentes.";
        }
        
        return {
          id: 1,
          icon: Heart,
          gradient: "from-blue-400 to-blue-600",
          title: title1,
          description: description1,
          buttonText: "Continuar diagnóstico",
          buttonColor: "text-blue-600"
        };
        
      case 2:
        let title2 = "Esses comportamentos têm explicação — e solução.";
        let description2 = "O Petzia combina técnicas leves de adestramento com rotina, carinho e tecnologia para te ajudar de forma prática.";
        
        if (destructiveBehavior === 'Sempre' || obedience === 'Nunca') {
          title2 = "Comportamentos desafiadores são comuns!";
          description2 = "Destruição e desobediência geralmente indicam ansiedade ou falta de estímulo. Com o método certo, isso muda rapidamente.";
        } else if (obedience === 'Só quando quer') {
          title2 = "Seu cão é esperto — mas teimoso!";
          description2 = "Quando o cão obedece 'só quando quer', ele entende os comandos mas precisa de motivação. Vamos trabalhar isso juntos.";
        }
        
        return {
          id: 2,
          icon: PawPrint,
          gradient: "from-yellow-400 to-orange-400",
          title: title2,
          description: description2,
          buttonText: "Ver como funciona",
          buttonColor: "text-orange-600"
        };
        
      case 3:
        let title3 = "Organizar os cuidados não precisa ser confuso.";
        let description3 = "Com o Petzia, você tem lembretes, histórico e planos diários — tudo em um só lugar.";
        
        if (Array.isArray(concerns) && concerns.includes('Falta de rotina')) {
          title3 = "Rotina é a chave do sucesso!";
          description3 = "Percebemos que a falta de rotina te preocupa. O Petzia cria horários personalizados para transformar o dia a dia do seu pet.";
        } else if (Array.isArray(concerns) && concerns.includes('Não saber por onde começar')) {
          title3 = "Vamos começar juntos, passo a passo!";
          description3 = "Sabemos que pode parecer complicado, mas o Petzia te guia desde o primeiro dia com um plano simples e eficaz.";
        }
        
        return {
          id: 3,
          icon: Shield,
          gradient: "from-green-500 to-teal-500",
          title: title3,
          description: description3,
          buttonText: "Quase terminando",
          buttonColor: "text-green-600"
        };
        
      case 4:
        return {
          id: 4,
          icon: PawPrint,
          gradient: "from-purple-500 to-pink-500",
          title: "Você está quase lá!",
          description: "Suas respostas estão nos ajudando a criar o plano perfeito para o seu pet. Só mais algumas perguntas!",
          buttonText: "Finalizar diagnóstico",
          buttonColor: "text-purple-600"
        };
        
      default:
        return {
          id: 1,
          icon: Heart,
          gradient: "from-blue-400 to-blue-600",
          title: "Você não está sozinho!",
          description: "Vamos entender seu caso e ajudar você.",
          buttonText: "Continuar",
          buttonColor: "text-blue-600"
        };
    }
  };

  const startQuiz = () => {
    setCurrentStep('quiz');
  };

  const showPersuasion = (blockNumber: number) => {
    setCurrentPersuasion(blockNumber);
    setCurrentStep('persuasion');
  };

  const continueQuiz = () => {
    // Advance to next question after persuasion block
    setCurrentQuestion(currentQuestion + 1);
    setCurrentStep('quiz');
  };

  const showEmailCapture = () => {
    setCurrentStep('email');
  };

  const showResults = (diagnosisData: any) => {
    setDiagnosis(diagnosisData);
    setCurrentStep('results');
  };

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <ProgressBar 
        visible={currentStep === 'quiz'} 
        currentQuestion={currentQuestion}
        totalQuestions={19}
      />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {currentStep === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <WelcomeSection onStart={startQuiz} />
          </motion.div>
        )}

        {currentStep === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuizSection
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              answers={answers}
              setAnswers={setAnswers}
              onShowPersuasion={showPersuasion}
              onComplete={showEmailCapture}
            />
          </motion.div>
        )}

        {currentStep === 'persuasion' && (
          <motion.div
            key="persuasion"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <PersuasionBlock
              block={getContextualPersuasionBlock(currentPersuasion)}
              onContinue={continueQuiz}
              answers={answers}
              currentPersuasion={currentPersuasion}
            />
          </motion.div>
        )}

        {currentStep === 'email' && (
          <motion.div
            key="email"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <EmailCapture
              answers={answers}
              onComplete={showResults}
            />
          </motion.div>
        )}

        {currentStep === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ResultsSection diagnosis={diagnosis} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
