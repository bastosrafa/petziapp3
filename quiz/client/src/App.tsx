import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Quiz from "@/pages/quiz";
import petziaMascot from "@assets/Logotipo versão mascote isolado_Transparente_App, loading, botão início_1750355076211.png";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Quiz}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {/* Header with Petzia Logo */}
          <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <img 
                  src={petziaMascot} 
                  alt="Petzia Mascote" 
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <div>
                  <span className="text-2xl md:text-3xl font-bold text-petzia-blue">Petzia</span>
                  <div className="text-sm md:text-base text-petzia-turquoise font-medium">Educar com amor. Cuidar com leveza.</div>
                </div>
              </div>
            </div>
          </header>
          
          <main>
            <Router />
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
