import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Play } from "lucide-react";
import petziaLogo from "@assets/Logotipo versão Horizontal com slogan_1750354589683.png";
import { tracking } from "@/lib/tracking";

interface WelcomeSectionProps {
  onStart: () => void;
}

export default function WelcomeSection({ onStart }: WelcomeSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
            alt="Happy Golden Retriever" 
            className="rounded-2xl shadow-lg mx-auto max-w-md w-full h-64 object-cover"
          />
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Seu cão está <span className="text-petzia-blue">ansioso</span>, <span className="text-petzia-blue">desobediente</span> ou <span className="text-petzia-blue">bagunceiro</span>?<br />
          <span className="text-2xl lg:text-4xl font-medium text-gray-600 mt-4 block">
            Descubra por quê — e receba um plano personalizado agora.
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Com poucos cliques, você vai entender o que está por trás do comportamento do seu pet e como transformá-lo com leveza, rotina e cuidado — tudo no app <strong className="text-petzia-blue">Petzia</strong>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={() => {
              tracking.trackQuizStart();
              onStart();
            }}
            className="bg-petzia-blue hover:bg-petzia-blue/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>👉 Começar diagnóstico gratuito</span>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-petzia-turquoise" />
            <span>3 minutos apenas</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-petzia-turquoise" />
            <span>+10.000 tutores ajudados</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-petzia-yellow fill-current" />
            <span>4.9/5 estrelas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
