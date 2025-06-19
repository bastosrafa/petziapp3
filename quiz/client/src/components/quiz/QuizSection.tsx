import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { questions } from "@/lib/quiz-data";
import { motion } from "framer-motion";

interface QuizSectionProps {
  currentQuestion: number;
  setCurrentQuestion: (q: number) => void;
  answers: Record<number, any>;
  setAnswers: (answers: Record<number, any>) => void;
  onShowPersuasion: (blockNumber: number) => void;
  onComplete: () => void;
}

export default function QuizSection({
  currentQuestion,
  setCurrentQuestion,
  answers,
  setAnswers,
  onShowPersuasion,
  onComplete
}: QuizSectionProps) {
  const [currentAnswer, setCurrentAnswer] = useState<any>(null);

  const question = questions[currentQuestion];

  useEffect(() => {
    setCurrentAnswer(answers[question.id] || (question.type === 'checkbox' ? [] : ''));
  }, [currentQuestion, answers, question.id, question.type]);

  const validateAnswer = () => {
    if (question.type === 'text') {
      return currentAnswer?.trim() !== '';
    } else if (question.type === 'radio') {
      return currentAnswer !== '';
    } else if (question.type === 'checkbox') {
      return Array.isArray(currentAnswer) && currentAnswer.length > 0;
    }
    return false;
  };

  const handleNext = () => {
    if (!validateAnswer()) return;

    const updatedAnswers = { ...answers, [question.id]: currentAnswer };
    setAnswers(updatedAnswers);

    if (question.showPersuasion) {
      onShowPersuasion(question.showPersuasion);
      return;
    }

    if (question.final) {
      onComplete();
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRadioChange = (value: string) => {
    setCurrentAnswer(value);
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const current = Array.isArray(currentAnswer) ? currentAnswer : [];
    if (checked) {
      setCurrentAnswer([...current, value]);
    } else {
      setCurrentAnswer(current.filter((item: string) => item !== value));
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8"
        >
          <div className="mb-6">
            <span className="inline-block bg-petzia-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-petzia-dark mb-6">
              {question.question}
            </h3>
          </div>

          {question.type === 'text' && (
            <div className="mb-6">
              <Input
                type="text"
                placeholder={question.placeholder || ''}
                value={currentAnswer || ''}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-petzia-blue focus:outline-none transition-all duration-300"
              />
            </div>
          )}

          {question.type === 'radio' && (
            <div className="space-y-3 mb-6">
              {question.options?.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                    currentAnswer === option
                      ? 'border-petzia-blue bg-blue-50'
                      : 'border-gray-200 hover:border-petzia-blue'
                  }`}
                >
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    value={option}
                    checked={currentAnswer === option}
                    onChange={() => handleRadioChange(option)}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-4 flex items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full bg-petzia-blue ${
                        currentAnswer === option ? '' : 'hidden'
                      }`}
                    />
                  </div>
                  <span className="text-lg">{option}</span>
                </label>
              ))}
            </div>
          )}

          {question.type === 'checkbox' && (
            <div className="space-y-3 mb-6">
              {question.options?.map((option, index) => {
                const isChecked = Array.isArray(currentAnswer) && currentAnswer.includes(option);
                return (
                  <label
                    key={index}
                    className={`flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                      isChecked
                        ? 'border-petzia-blue bg-blue-50'
                        : 'border-gray-200 hover:border-petzia-blue'
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={isChecked}
                      onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                      className="sr-only"
                    />
                    <div className="w-5 h-5 rounded border-2 border-gray-300 mr-4 flex items-center justify-center">
                      {isChecked && <span className="text-petzia-blue text-sm">✓</span>}
                    </div>
                    <span className="text-lg">{option}</span>
                  </label>
                );
              })}
            </div>
          )}
        </motion.div>

        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            variant="outline"
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              currentQuestion === 0 ? 'invisible' : ''
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>
          <div className="flex-1" />
          <Button
            onClick={handleNext}
            disabled={!validateAnswer()}
            className="bg-petzia-blue hover:bg-petzia-blue/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próxima
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
