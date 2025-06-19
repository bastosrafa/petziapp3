import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Brain, Zap, Heart, User, Check, Shield, CreditCard, Smartphone, Book, Calendar, Bell, BarChart3, Camera, MessageCircle, Award, Star, CheckCircle, AlertTriangle, Target, X, Lock, RefreshCw, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { tracking } from "@/lib/tracking";

interface ResultsSectionProps {
  diagnosis: {
    behavior: string;
    stimulus: string;
    health: string;
    owner: string;
  };
}

export default function ResultsSection({ diagnosis }: ResultsSectionProps) {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'quarterly' | 'annual' | null>(null);

  useEffect(() => {
    // Track when results section is viewed
    tracking.trackPlanView('results_page');

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showExitIntent]);

  const redirectToSignup = (plan: string) => {
    const planData = [...mainPlans, ...downsellPlans].find(p => p.id === plan);
    if (planData) {
      tracking.trackPlanClick(plan, planData.price);
    }
    window.open(`https://petzia.com/signup?plan=${plan}`, '_blank');
  };

  const mainPlans = [
    {
      id: 'monthly',
      name: 'Plano Mensal',
      price: 'R$ 39,90',
      period: '/ mês',
      description: 'Ideal para testar o app com todos os recursos liberados.',
      features: ['Acesso completo à plataforma', 'Todas as funcionalidades', 'Suporte prioritário'],
      buttonText: 'Selecionar Mensal',
      buttonColor: 'bg-petzia-turquoise'
    },
    {
      id: 'quarterly',
      name: 'Plano Trimestral',
      price: 'R$ 89,90',
      period: '/ 3 meses',
      originalPrice: 'R$ 119,70',
      discount: 'Economize 25% em relação ao mensal!',
      description: 'Mais economia e tempo para criar hábitos com seu pet.',
      features: ['Acesso completo à plataforma', 'Economia de 25%', 'Tempo ideal para resultados'],
      buttonText: 'Selecionar Trimestral',
      buttonColor: 'bg-petzia-yellow',
      popular: true
    },
    {
      id: 'annual',
      name: 'Plano Anual',
      price: 'R$ 299,90',
      period: '/ ano',
      originalPrice: 'R$ 478,80',
      discount: 'Economize 39% com o plano anual. É como pagar só R$ 18,32 por mês!',
      description: 'Tranquilidade o ano todo e suporte prioritário incluso.',
      features: ['Acesso completo à plataforma', 'Economia de 39%', 'Suporte prioritário', 'Melhor custo-benefício'],
      buttonText: 'Selecionar Anual',
      buttonColor: 'bg-petzia-blue',
      bestValue: true
    }
  ];

  const downsellPlans = [
    {
      id: 'downsell-monthly',
      name: 'Plano Mensal com Desconto',
      price: 'R$ 29,90',
      period: '/ mês',
      description: 'Acesso completo ao app para cuidar do seu pet com economia.',
      features: ['Acesso completo à plataforma', 'Desconto exclusivo', 'Cancele quando quiser'],
      buttonText: 'Aproveitar Mensal',
      buttonColor: 'bg-petzia-turquoise'
    },
    {
      id: 'downsell-quarterly',
      name: 'Plano Trimestral',
      price: 'R$ 67,90',
      period: '/ 3 meses',
      originalPrice: 'R$ 89,70',
      discount: 'Equivale a R$ 22,63 por mês. Mais economia que o plano mensal!',
      description: 'Ideal para quem quer testar por mais tempo sem compromisso anual.',
      features: ['Acesso completo', 'Mais economia', 'Tempo para criar hábitos'],
      buttonText: 'Aproveitar Trimestral',
      buttonColor: 'bg-petzia-purple'
    },
    {
      id: 'downsell-annual',
      name: 'Plano Anual com Desconto',
      price: 'R$ 219,90',
      period: '/ ano',
      originalPrice: 'R$ 358,80',
      discount: 'Economize mais de 38%! Equivale a R$ 18,32 por mês.',
      description: 'Ideal para quem quer tranquilidade e economia durante todo o ano.',
      features: ['Máxima economia', 'Suporte prioritário', 'Tranquilidade o ano todo'],
      buttonText: 'Aproveitar Anual',
      buttonColor: 'bg-petzia-blue'
    }
  ];

  const petziaFeatures = [
    {
      icon: Calendar,
      title: "📅 Agenda de vacinas e medicamentos",
      description: "Nunca mais esqueça datas importantes! Controle total das vacinas, vermífugos e medicamentos do seu pet"
    },
    {
      icon: Book,
      title: "📔 Diário do pet para registrar momentos e comportamentos",
      description: "Registre o dia a dia, comportamentos e momentos especiais para acompanhar a evolução"
    },
    {
      icon: BarChart3,
      title: "📊 Acompanhamento de peso e saúde",
      description: "Monitore o crescimento, peso e indicadores de saúde com gráficos detalhados"
    },
    {
      icon: Brain,
      title: "🧠 Treinamentos e hábitos",
      description: "Rotinas de adestramento personalizadas com técnicas de reforço positivo comprovadas"
    },
    {
      icon: Camera,
      title: "📁 Organização de documentos",
      description: "Tenha todos os documentos, exames e registros do seu pet organizados em um só lugar"
    },
    {
      icon: Bell,
      title: "🔔 Lembretes e alertas inteligentes",
      description: "Notificações personalizadas para cada necessidade do seu pet no momento certo"
    }
  ];

  const socialProof = [
    { number: "10.000+", label: "Tutores ativos" },
    { number: "4.9/5", label: "Avaliação na loja" },
    { number: "85%", label: "Melhoram em 30 dias" }
  ];

  const objections = [
    {
      icon: AlertTriangle,
      objection: "\"Meu cão é muito teimoso, nada funciona\"",
      response: "O Petzia usa métodos científicos de reforço positivo que funcionam com qualquer personalidade canina. Nossos planos são adaptados ao temperamento específico do seu pet."
    },
    {
      icon: AlertTriangle,
      objection: "\"Não tenho tempo para seguir rotinas\"",
      response: "Nossos lembretes automáticos e rotinas de 5-10 minutos se encaixam na sua agenda. O app organiza tudo para você não esquecer de nada."
    },
    {
      icon: AlertTriangle,
      objection: "\"É muito caro contratar um adestrador\"",
      response: "Por menos que um café por dia, você tem acesso a técnicas profissionais, suporte especializado e resultados comprovados - sem sair de casa."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Diagnosis Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            <ClipboardCheck className="w-16 h-16 text-petzia-coral mx-auto" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🔍 Seu Diagnóstico Personalizado
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Baseado nas suas respostas, identificamos os pontos principais para transformar a vida do seu pet
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-petzia-blue"
            >
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-petzia-blue mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Comportamento</h3>
              </div>
              <p className="text-gray-700">{diagnosis.behavior}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-petzia-turquoise"
            >
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-petzia-turquoise mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Estímulo</h3>
              </div>
              <p className="text-gray-700">{diagnosis.stimulus}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-petzia-yellow"
            >
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-petzia-yellow mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Saúde</h3>
              </div>
              <p className="text-gray-700">{diagnosis.health}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-petzia-purple"
            >
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-petzia-purple mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Tutor</h3>
              </div>
              <p className="text-gray-700">{diagnosis.owner}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            🚀 Como o Petzia Resolve Todos Esses Problemas
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Uma plataforma completa que combina tecnologia, ciência e amor pelos pets para transformar a relação com seu companheiro
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {petziaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-petzia-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-2xl p-8 mb-16 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            ⭐ Resultados Comprovados por Milhares de Tutores
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {socialProof.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-petzia-blue mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Objection Handling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            💭 Suas Dúvidas, Nossas Respostas
          </h3>
          <div className="space-y-6">
            {objections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <item.icon className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.objection}</h4>
                    <p className="text-gray-600">{item.response}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            🎯 Escolha o Plano Ideal
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Acesso completo à plataforma Petzia com tudo que seu pet precisa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-xl relative ${
                  plan.popular ? 'ring-2 ring-amber-500' : plan.bestValue ? 'ring-2 ring-green-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Mais Popular
                    </span>
                  </div>
                )}
                {plan.bestValue && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Melhor Oferta
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-lg text-gray-500 line-through mb-1">{plan.originalPrice}</div>
                  )}
                  <div className="text-4xl font-bold text-petzia-coral mb-2">
                    {plan.price}<span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  {plan.discount && (
                    <div className="bg-yellow-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {plan.discount}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => redirectToSignup(plan.id)}
                  className={`w-full ${plan.buttonColor} text-white py-3 rounded-full font-bold hover:opacity-90 transition-all duration-300`}
                >
                  {plan.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>
          
          {/* Security Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="mt-12"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center max-w-sm">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="text-lg font-bold text-green-700 mb-2">COMPRA GARANTIDA</div>
                <div className="text-sm text-green-600">7 dias para teste ou devolução integral do dinheiro</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-petzia-turquoise" />
                <span>Dados criptografados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-petzia-turquoise" />
                <span>Aprovado por veterinários</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-petzia-yellow" />
                <span>4.9/5 estrelas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4 text-petzia-turquoise" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Exit Intent Downsell Modal */}
        <AnimatePresence>
          {showExitIntent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={() => setShowExitIntent(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-petzia-coral mb-4">
                    ⚠️ Antes de sair, aproveite essa oferta exclusiva
                  </h3>
                  <p className="text-xl text-gray-600">
                    Você ganhou acesso com até 40% de desconto. Uma chance única para cuidar do seu pet com tudo que ele merece!
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {downsellPlans.map((plan, index) => (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-petzia-coral transition-colors"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{plan.name}</h4>
                      
                      <div className="mb-4">
                        {plan.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                        )}
                        <div className="text-3xl font-bold text-petzia-coral mb-2">
                          {plan.price}<span className="text-sm text-gray-600">{plan.period}</span>
                        </div>
                        {plan.discount && (
                          <div className="bg-yellow-100 text-amber-700 px-2 py-1 rounded text-xs font-medium mb-3">
                            {plan.discount}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button
                        onClick={() => redirectToSignup(plan.id)}
                        className={`w-full ${plan.buttonColor} text-white py-2 rounded-full font-bold hover:opacity-90 transition-all duration-300`}
                      >
                        {plan.buttonText}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
