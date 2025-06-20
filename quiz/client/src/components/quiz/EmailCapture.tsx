import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { tracking } from "@/lib/tracking";

declare global {
  interface Window {
    fbq: any;
  }
}

interface EmailCaptureProps {
  answers: Record<number, any>;
  onComplete: (diagnosis: any) => void;
}

export default function EmailCapture({ answers, onComplete }: EmailCaptureProps) {
  const [petName, setPetName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const { toast } = useToast();

  const submitLead = useMutation({
    mutationFn: async (data: { petName: string; userEmail: string; answers: Record<number, any> }) => {
      const response = await apiRequest('POST', '/api/quiz-leads', data);
      return response.json();
    },
    onSuccess: (data) => {
      onComplete(data.lead.diagnosis);
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Houve um problema ao processar seus dados. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!petName.trim() || !userEmail.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (!userEmail.includes('@')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, digite um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    // Track email capture event
    tracking.trackEmailCapture(userEmail, petName);
    
    // Track email capture event (Meta Pixel)
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        email: userEmail,
        petName: petName
      });
    }
    
    submitLead.mutate({ petName, userEmail, answers });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <Mail className="w-12 h-12 text-petzia-blue mx-auto" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold mb-4"
        >
          Quase pronto!
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-6"
        >
          Para receber seu diagnóstico personalizado, informe seu melhor e-mail:
        </motion.p>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            type="text"
            placeholder="Nome do seu pet"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-petzia-blue focus:outline-none"
            required
          />
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-petzia-blue focus:outline-none"
            required
          />
          <Button
            type="submit"
            disabled={submitLead.isPending || !petName.trim() || !userEmail.trim()}
            className="w-full bg-petzia-blue hover:bg-petzia-blue/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50"
          >
            {submitLead.isPending ? 'Processando...' : 'Receber Diagnóstico Gratuito'}
          </Button>
        </motion.form>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-gray-500 mt-4"
        >
          Seus dados estão 100% seguros conosco.
        </motion.p>
      </motion.div>
    </div>
  );
}
