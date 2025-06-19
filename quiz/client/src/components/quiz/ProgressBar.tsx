import { motion } from "framer-motion";

interface ProgressBarProps {
  visible: boolean;
  currentQuestion: number;
  totalQuestions: number;
}

export default function ProgressBar({ visible, currentQuestion, totalQuestions }: ProgressBarProps) {
  if (!visible) return null;

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Progresso do Diagnóstico</span>
          <span className="text-sm font-medium text-petzia-blue">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-petzia-blue to-petzia-turquoise h-2 rounded-full transition-all duration-500 ease-out"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
