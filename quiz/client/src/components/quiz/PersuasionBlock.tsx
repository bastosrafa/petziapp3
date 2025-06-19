import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon, Activity, Brain, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface PersuasionBlockProps {
  block: {
    id: number;
    icon: LucideIcon;
    gradient: string;
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
  };
  onContinue: () => void;
  answers: Record<number, any>;
  currentPersuasion: number;
}

export default function PersuasionBlock({ block, onContinue, answers, currentPersuasion }: PersuasionBlockProps) {
  const { icon: Icon, gradient, title, description, buttonText, buttonColor } = block;

  // Create interactive diagnostic elements based on answers
  const getDiagnosticElements = () => {
    const elements = [];
    
    if (currentPersuasion === 1 && answers[3]) {
      elements.push({
        icon: Brain,
        label: `Pet ${answers[3].toLowerCase()}`,
        value: answers[3],
        color: "bg-blue-100 text-blue-800"
      });
    }
    
    if (currentPersuasion === 1 && answers[4]) {
      elements.push({
        icon: Activity,
        label: "Experiência com treino",
        value: answers[4],
        color: "bg-green-100 text-green-800"
      });
    }
    
    if (currentPersuasion === 2 && answers[5]) {
      elements.push({
        icon: Zap,
        label: "Comportamento destrutivo",
        value: answers[5],
        color: answers[5] === 'Sempre' ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
      });
    }
    
    if (currentPersuasion === 2 && answers[8]) {
      elements.push({
        icon: Heart,
        label: "Obediência",
        value: answers[8],
        color: answers[8] === 'Sempre' ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
      });
    }
    
    if (currentPersuasion === 3 && answers[13] && Array.isArray(answers[13])) {
      answers[13].slice(0, 2).forEach((concern: string, index: number) => {
        elements.push({
          icon: Brain,
          label: "Preocupação",
          value: concern,
          color: "bg-purple-100 text-purple-800"
        });
      });
    }
    
    return elements;
  };

  const diagnosticElements = getDiagnosticElements();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`py-16 bg-gradient-to-br ${gradient} text-white`}
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <Icon className="w-16 h-16 mx-auto opacity-80" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-4"
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl opacity-90 mb-8"
        >
          {description}
        </motion.p>
        
        {/* Interactive diagnostic elements */}
        {diagnosticElements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-6">
              <h4 className="text-lg font-semibold mb-4 opacity-90">📊 Analisando seu caso:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {diagnosticElements.map((element, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-lg p-4 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <element.icon className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="text-sm text-gray-600 font-medium">{element.label}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${element.color} mt-1`}>
                          {element.value}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Animated progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-6"
        >
          <div className="bg-white bg-opacity-20 rounded-full h-2 w-64 mx-auto">
            <motion.div
              className="bg-white h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentPersuasion / 4) * 100}%` }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </div>
          <p className="text-sm opacity-80 mt-2">Diagnóstico {Math.round((currentPersuasion / 4) * 100)}% completo</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            onClick={onContinue}
            className={`bg-white ${buttonColor} px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl`}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
