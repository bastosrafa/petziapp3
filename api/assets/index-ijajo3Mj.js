import{r as N,c as O,a5 as G,Z as U,u as W,j as e,a6 as J,a4 as he}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";import{M as xe}from"./ModuleCompletionPopup-BxaocN1j.js";import{t as ge}from"./config-CJOQn1u_.js";import"./dog-BTx2Crur.js";import"./users-DQaJ2eXR.js";import"./droplets-m0QRMEgr.js";import"./triangle-alert-8qwZl-cm.js";const be="/assets/badhabits1-B_Dsj0KO.png",je=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,fe=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,ve=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,we=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${a=>a.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${a=>a.active?"auto":"none"};
  z-index: ${a=>a.active?1:0};
`,ke=o.div`
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
`,Ee=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Se=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;o.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;const _=o.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
`,ae=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,B=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`,P=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,I=o.div`
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
`,A=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
  font-weight: 600;
`,T=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
`,Ce=o.div`
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
`,se=o.button`
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
`,Fe=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,ye=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`;o.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;o.li`
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
`;const K=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,p=o.li`
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
`,qe=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Q=o.li`
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
`;o.ul`
  list-style: none;
  padding: 0;
`;o.li`
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
`;const ze=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;function $e({onNextLesson:a}){const[i,d]=N.useState(0),{user:c}=O(),{addDocument:h}=G("progress"),{updateTraining:l,refreshData:x}=U();W();const n=[{title:"Bem-vindo à Aula!",content:e.jsxs(e.Fragment,{children:[e.jsx(ze,{src:be,alt:"Cão com brinquedos apropriados para mastigação"}),e.jsx(Se,{children:"Nesta aula, vamos aprender como redirecionar o comportamento de mordidas e mastigação excessiva para brinquedos adequados."})]})},{title:"Por que ensinar?",content:e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"Por que é importante redirecionar o comportamento de mordidas e mastigação:"}),e.jsxs(ae,{children:[e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{children:"1"}),e.jsx(A,{children:"Comportamento Natural"})]}),e.jsx(T,{children:"Cães usam a boca como principal ferramenta para explorar o ambiente, sendo um comportamento instintivo e essencial para seu desenvolvimento."})]}),e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{children:"2"}),e.jsx(A,{children:"Prevenção de Danos"})]}),e.jsx(T,{children:"Evitar danos a móveis, roupas e objetos pessoais, além de prevenir acidentes com materiais perigosos que possam ser ingeridos."})]}),e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{children:"3"}),e.jsx(A,{children:"Saúde Bucal"})]}),e.jsx(T,{children:"Promover a saúde bucal através da mastigação de brinquedos apropriados, que ajudam na limpeza dos dentes e no fortalecimento da mandíbula."})]}),e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{children:"4"}),e.jsx(A,{children:"Bem-estar Mental"})]}),e.jsx(T,{children:"Reduzir o estresse e a ansiedade através de comportamentos de mastigação saudáveis, proporcionando uma válvula de escape natural para o cão."})]})]})]})},{title:"Métodos de Treinamento",content:e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"Como redirecionar o comportamento de mordidas e mastigação:"}),e.jsxs(ae,{children:[e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{children:"1"}),e.jsx(A,{children:"Brinquedos Apropriados"})]}),e.jsx(T,{children:"Ofereça brinquedos específicos para mastigação, como ossos de borracha ou brinquedos interativos, que sejam seguros e atrativos para o cão."})]}),e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{children:"2"}),e.jsx(A,{children:"Redirecionamento"})]}),e.jsx(T,{children:"Quando o cão começar a morder algo inadequado, redirecione-o gentilmente para um brinquedo apropriado e recompense-o quando ele aceitar."})]}),e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{children:"3"}),e.jsx(A,{children:"Consistência"})]}),e.jsx(T,{children:"Mantenha uma rotina consistente de oferecer brinquedos apropriados e recompensar o comportamento correto, reforçando positivamente as escolhas certas."})]}),e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{children:"4"}),e.jsx(A,{children:"Ambiente Seguro"})]}),e.jsx(T,{children:"Mantenha objetos valiosos ou perigosos fora do alcance do cão e crie um ambiente onde ele possa explorar e mastigar com segurança."})]})]})]})},{title:"Dicas Importantes",content:e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"Recomendações para o sucesso do treinamento:"}),e.jsxs(K,{children:[e.jsx(p,{children:"Ofereça uma variedade de brinquedos com diferentes texturas e formatos para manter o interesse do cão"}),e.jsx(p,{children:"Nunca use as mãos ou outras partes do corpo como brinquedos de mordida, para não confundir o cão"}),e.jsx(p,{children:"Lembre-se que filhotes tem necessidades maiores de mastigar durante a fase de dentição"}),e.jsx(p,{children:"Elogie efusivamente quando o cão escolher o brinquedo certo para mastigar"}),e.jsx(p,{children:"Brinquedos com petiscos escondidos podem ajudar a aumentar o interesse pelos itens apropriados"})]}),e.jsxs(qe,{children:[e.jsx(Q,{children:"Evite brinquedos muito pequenos que possam ser engolidos ou causar asfixia"}),e.jsx(Q,{children:'Não ceda e permita a mastigação inapropriada "só desta vez", pois isso confunde o treinamento'}),e.jsx(Q,{children:"Supervisione sempre o uso de brinquedos novos até ter certeza de que são seguros"})]})]})},{title:"Resumo",content:e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"Parabéns! Você aprendeu sobre como redirecionar o comportamento de mordidas e mastigação do seu cão."}),e.jsxs(K,{children:[e.jsx(p,{children:"A mastigação é um comportamento natural dos cães e deve ser direcionada corretamente"}),e.jsx(p,{children:"Oferecer brinquedos apropriados ajuda a proteger seus pertences e promover a saúde do cão"}),e.jsx(p,{children:"A consistência e o reforço positivo são essenciais para o sucesso do treinamento"}),e.jsx(p,{children:"Criar um ambiente seguro ajuda a prevenir acidentes e facilita o aprendizado"}),e.jsx(p,{children:"Com paciência e prática, seu cão aprenderá o que é apropriado para mastigar"})]}),e.jsx(_,{children:"Próximos passos:"}),e.jsxs(K,{children:[e.jsx(p,{children:"Estabeleça uma rotina para oferecer brinquedos apropriados ao seu cão"}),e.jsx(p,{children:"Mantenha a consistência no redirecionamento de comportamentos inadequados"}),e.jsx(p,{children:"Continue para a próxima lição para aprender mais sobre bons hábitos"})]})]})}],g=async()=>{if(i===n.length-1)try{if(localStorage.setItem("badhabits1_completed","true"),localStorage.setItem("badhabits2_unlocked","true"),window.dispatchEvent(new Event("storage")),c)try{const r={lessonId:"badhabits1",moduleId:"badhabits",courseId:"9DwWIAtShVCPXyRPSbqF",userId:c.uid,status:"completed",completedAt:J.fromDate(new Date),duration:15};Promise.race([h(r),new Promise(s=>setTimeout(s,2e3))]).then(()=>{l({completedLessons:20,currentLevel:"intermediate",lastSession:new Date,totalTime:235,unlockedModules:["startHere","hygiene","badhabits"]}).catch(s=>console.error("Erro ao atualizar dashboard:",s)),x().catch(s=>console.error("Erro ao atualizar dados:",s)),console.log("Progresso da lição BadHabits1 salvo com sucesso")}).catch(s=>{console.error("Erro ao salvar progresso da lição:",s)})}catch(r){console.error("Erro ao processar progresso da lição:",r)}a()}catch(r){console.error("Erro ao salvar progresso da lição:",r),a()}else d(r=>(r+1)%n.length)},t=()=>{d(r=>(r-1+n.length)%n.length)},u=r=>{d(r)};return e.jsxs(je,{children:[e.jsxs(fe,{children:["Mordidas e Mastigação Excessiva",localStorage.getItem("badhabits1_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(ve,{children:[n.map((r,s)=>e.jsx(we,{active:i===s,children:e.jsxs(ke,{children:[e.jsx(Ee,{children:r.title}),r.content]})},s)),e.jsxs(Ce,{children:[e.jsx(se,{onClick:t,disabled:i===0,children:"Anterior"}),e.jsx(Fe,{children:n.map((r,s)=>e.jsx(ye,{active:i===s,onClick:()=>u(s)},s))}),e.jsx(se,{onClick:g,children:i===n.length-1?"Concluir":"Próximo"})]})]})]})}const De="/assets/badhabits2-BMLGxhmU.png",Be=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Pe=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Ie=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,Ae=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${a=>a.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${a=>a.active?"auto":"none"};
  z-index: ${a=>a.active?1:0};
`,Te=o.div`
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
`,Le=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Me=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,R=o.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
`;o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;o.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;const te=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,b=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`,j=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,f=o.div`
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
`,v=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
  font-weight: 600;
`,w=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
`,Ne=o.div`
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
`,ne=o.button`
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
`,_e=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,Re=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,ie=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,L=o.li`
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
`,He=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Z=o.li`
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
`,Ye=o.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,H=o.li`
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
`,Xe=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;function We({onNextLesson:a}){const[i,d]=N.useState(0),{user:c}=O(),{addDocument:h}=G("progress"),{updateTraining:l,refreshData:x}=U();W();const n=[{title:"Bem-vindo à Aula!",content:e.jsxs(e.Fragment,{children:[e.jsx(Xe,{src:De,alt:"Cão esperando pacientemente durante refeição"}),e.jsx(Me,{children:"Nesta aula, vamos aprender como ensinar seu cão a não roubar comida da mesa e a esperar pacientemente durante as refeições."})]})},{title:"Por que ensinar?",content:e.jsxs(e.Fragment,{children:[e.jsx(R,{children:"Razões para ensinar seu cão a não roubar comida:"}),e.jsxs(te,{children:[e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"1"}),e.jsx(v,{children:"Segurança Alimentar"})]}),e.jsx(w,{children:"Prevenir o acesso a alimentos perigosos ou tóxicos para cães, como chocolate, cebola e uvas, que podem causar sérios problemas de saúde."})]}),e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"2"}),e.jsx(v,{children:"Comportamento Social"})]}),e.jsx(w,{children:"Evitar situações constrangedoras durante visitas ou refeições em família, mantendo um ambiente harmonioso e seguro para todos."})]}),e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"3"}),e.jsx(v,{children:"Saúde Digestiva"})]}),e.jsx(w,{children:"Prevenir problemas digestivos causados por alimentos inadequados ou em excesso, mantendo uma dieta balanceada e controlada."})]}),e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"4"}),e.jsx(v,{children:"Limites e Respeito"})]}),e.jsx(w,{children:"Estabelecer limites claros de comportamento, ensinando o cão a respeitar o espaço e os momentos das refeições da família."})]}),e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"5"}),e.jsx(v,{children:"Bem-estar Geral"})]}),e.jsx(w,{children:"Promover um ambiente mais tranquilo e organizado, reduzindo o estresse tanto para o cão quanto para os membros da família."})]})]})]})},{title:"Métodos de Treinamento",content:e.jsxs(e.Fragment,{children:[e.jsx(R,{children:"Estratégias eficazes para evitar o roubo de comida:"}),e.jsxs(te,{children:[e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"1"}),e.jsx(v,{children:"Local de Descanso"})]}),e.jsx(w,{children:"Ensine seu cão a ficar em um tapete ou cama específica durante as refeições. Este local deve ser confortável e estar a uma distância segura da mesa."})]}),e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"2"}),e.jsx(v,{children:"Comandos de Controle"})]}),e.jsx(w,{children:'Use comandos claros como "Fica" ou "Espera" para manter o cão no lugar. Pratique estes comandos em diferentes situações para reforçar o comportamento.'})]}),e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"3"}),e.jsx(v,{children:"Reforço Positivo"})]}),e.jsx(w,{children:"Recompense o cão com petiscos e elogios quando ele permanecer no local designado. O timing da recompensa é crucial para o aprendizado."})]}),e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"4"}),e.jsx(v,{children:"Ignorar Comportamentos Indesejados"})]}),e.jsx(w,{children:"Não dê atenção quando o cão tentar roubar comida. Ignorar completamente o comportamento indesejado ajuda a extinguir este hábito."})]}),e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"5"}),e.jsx(v,{children:"Consistência na Família"})]}),e.jsx(w,{children:"Todos na casa devem seguir as mesmas regras e comandos. A consistência é fundamental para o sucesso do treinamento."})]})]})]})},{title:"Exercício Prático",content:e.jsxs(e.Fragment,{children:[e.jsx(R,{children:"Vamos praticar este treinamento seguindo estas etapas:"}),e.jsxs(Ye,{children:[e.jsx(H,{"data-step":"1",children:"Escolha um local específico onde seu cão deve permanecer durante as refeições"}),e.jsx(H,{"data-step":"2",children:'Antes das refeições, leve seu cão para este local e use o comando "Fica"'}),e.jsx(H,{"data-step":"3",children:"Comece com períodos curtos e vá aumentando gradualmente o tempo de espera"}),e.jsx(H,{"data-step":"4",children:"Recompense com petiscos e elogios quando ele permanecer no local designado"}),e.jsx(H,{"data-step":"5",children:"Se o cão se levantar, gentilmente retorne-o ao lugar e repita o comando"})]}),e.jsxs(He,{children:[e.jsx(Z,{children:"Nunca puna o cão por se aproximar da mesa; apenas redirecione-o"}),e.jsx(Z,{children:"Não ofereça alimentos da mesa, para não confundir o treinamento"}),e.jsx(Z,{children:"Mantenha a consistência mesmo quando receber visitas"})]})]})},{title:"Resumo",content:e.jsxs(e.Fragment,{children:[e.jsx(R,{children:"Parabéns! Você aprendeu sobre como evitar que seu cão roube comida da mesa."}),e.jsxs(ie,{children:[e.jsx(L,{children:"Ensinar o cão a não roubar comida é essencial para sua segurança e saúde"}),e.jsx(L,{children:"Estabelecer um local de descanso durante refeições ajuda a criar limites claros"}),e.jsx(L,{children:"O reforço positivo é mais eficaz que a punição neste tipo de treinamento"}),e.jsx(L,{children:"A consistência de todos os membros da família é fundamental para o sucesso"}),e.jsx(L,{children:"Com paciência e prática, seu cão aprenderá a se comportar adequadamente durante as refeições"})]}),e.jsx(R,{children:"Próximos passos:"}),e.jsxs(ie,{children:[e.jsx(L,{children:"Pratique diariamente durante as refeições, aumentando gradualmente a dificuldade"}),e.jsx(L,{children:"Continue reforçando positivamente o comportamento desejado"}),e.jsx(L,{children:"Prossiga para a próxima lição sobre como lidar com medo e insegurança em cães"})]})]})}],g=async()=>{if(i===n.length-1)try{if(localStorage.setItem("badhabits2_completed","true"),localStorage.setItem("badhabits3_unlocked","true"),window.dispatchEvent(new Event("storage")),c)try{const r={lessonId:"badhabits2",moduleId:"badhabits",courseId:"9DwWIAtShVCPXyRPSbqF",userId:c.uid,status:"completed",completedAt:J.fromDate(new Date),duration:15};Promise.race([h(r),new Promise(s=>setTimeout(s,2e3))]).then(()=>{l({completedLessons:21,currentLevel:"intermediate",lastSession:new Date,totalTime:250,unlockedModules:["startHere","hygiene","badhabits"]}).catch(s=>console.error("Erro ao atualizar dashboard:",s)),x().catch(s=>console.error("Erro ao atualizar dados:",s)),console.log("Progresso da lição BadHabits2 salvo com sucesso")}).catch(s=>{console.error("Erro ao salvar progresso da lição:",s)})}catch(r){console.error("Erro ao processar progresso da lição:",r)}a()}catch(r){console.error("Erro ao salvar progresso da lição:",r),a()}else d(r=>(r+1)%n.length)},t=()=>{d(r=>(r-1+n.length)%n.length)},u=r=>{d(r)};return e.jsxs(Be,{children:[e.jsxs(Pe,{children:["Evitar Roubo de Comida da Mesa",localStorage.getItem("badhabits2_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(Ie,{children:[n.map((r,s)=>e.jsx(Ae,{active:i===s,children:e.jsxs(Te,{children:[e.jsx(Le,{children:r.title}),r.content]})},s)),e.jsxs(Ne,{children:[e.jsx(ne,{onClick:t,disabled:i===0,children:"Anterior"}),e.jsx(_e,{children:n.map((r,s)=>e.jsx(Re,{active:i===s,onClick:()=>u(s)},s))}),e.jsx(ne,{onClick:g,children:i===n.length-1?"Concluir":"Próximo"})]})]})]})}const Ve="/assets/badhabits3-cjyW2J0m.png",Oe=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Ge=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Ue=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,Je=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${a=>a.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${a=>a.active?"auto":"none"};
  z-index: ${a=>a.active?1:0};
`,Ke=o.div`
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
`,Qe=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Ze=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,Y=o.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
`;o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;o.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;const de=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,k=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`,E=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,S=o.div`
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
`,C=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
  font-weight: 600;
`,F=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
`,eo=o.div`
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
`,ce=o.button`
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
`,oo=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,ro=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,le=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,M=o.li`
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
`,ao=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ee=o.li`
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
`,so=o.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,X=o.li`
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
`,to=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;function no({onNextLesson:a}){const[i,d]=N.useState(0),{user:c}=O(),{addDocument:h}=G("progress"),{updateTraining:l,refreshData:x}=U();W();const n=[{title:"Bem-vindo à Aula!",content:e.jsxs(e.Fragment,{children:[e.jsx(to,{src:Ve,alt:"Cão pulando em pessoas"}),e.jsx(Ze,{children:"Nesta aula, vamos aprender técnicas eficazes para ensinar seu cão a não pular nas pessoas, um comportamento comum que pode ser incômodo e até perigoso em algumas situações."})]})},{title:"Por que ensinar?",content:e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:"Por que é importante ensinar seu cão a não pular nas pessoas:"}),e.jsxs(de,{children:[e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"1"}),e.jsx(C,{children:"Segurança"})]}),e.jsx(F,{children:"Previne acidentes e lesões, especialmente com pessoas mais vulneráveis como crianças pequenas e idosos."})]}),e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"2"}),e.jsx(C,{children:"Bom Comportamento"})]}),e.jsx(F,{children:"Ensina o cão a interagir de forma mais educada e controlada com pessoas, melhorando sua aceitação social."})]}),e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"3"}),e.jsx(C,{children:"Socialização"})]}),e.jsx(F,{children:"Facilita a aceitação do cão em diferentes ambientes e situações, permitindo que ele seja bem-vindo em mais lugares."})]}),e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"4"}),e.jsx(C,{children:"Bem-estar"})]}),e.jsx(F,{children:"Reduz o estresse tanto para o cão quanto para as pessoas ao redor, criando interações mais tranquilas e agradáveis."})]})]})]})},{title:"Passo a Passo",content:e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:"Como ensinar seu cão a não pular nas pessoas:"}),e.jsxs(de,{children:[e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"1"}),e.jsx(C,{children:"Ignore o comportamento indesejado"})]}),e.jsx(F,{children:"Vire as costas quando o cão pular e só dê atenção quando ele estiver com as quatro patas no chão."})]}),e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"2"}),e.jsx(C,{children:'Ensine o comando "Senta"'})]}),e.jsx(F,{children:"Recompense quando o cão se sentar ao invés de pular, criando uma alternativa positiva ao comportamento indesejado."})]}),e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"3"}),e.jsx(C,{children:"Pratique em diferentes situações"})]}),e.jsx(F,{children:"Treine com diferentes pessoas e em diferentes ambientes para generalizar o comportamento desejado."})]}),e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"4"}),e.jsx(C,{children:"Use reforço positivo"})]}),e.jsx(F,{children:"Elogie e recompense quando o cão se comportar adequadamente, fortalecendo o comportamento correto."})]}),e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"5"}),e.jsx(C,{children:"Mantenha a consistência"})]}),e.jsx(F,{children:"Todos na casa devem seguir as mesmas regras para não confundir o cão durante o processo de aprendizagem."})]})]})]})},{title:"Técnicas Eficazes",content:e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:"Técnicas complementares para evitar que o cão pule nas pessoas:"}),e.jsxs(so,{children:[e.jsx(X,{"data-step":"1",children:"Treine o cão para se sentar quando alguém chegar, recompensando esse comportamento"}),e.jsx(X,{"data-step":"2",children:"Mantenha o cão na guia durante o treinamento inicial para melhor controle"}),e.jsx(X,{"data-step":"3",children:"Peça a visitantes para ignorar o cão até que ele se acalme"}),e.jsx(X,{"data-step":"4",children:"Ofereça um brinquedo para o cão segurar na boca, evitando que ele pule"}),e.jsx(X,{"data-step":"5",children:"Reduza a excitação antes das visitas com uma caminhada ou sessão de brincadeiras"})]}),e.jsxs(ao,{children:[e.jsx(ee,{children:"Nunca use punição física, pois isso pode aumentar a ansiedade e piorar o comportamento"}),e.jsx(ee,{children:"Não reforce o comportamento de pular dando atenção, mesmo que seja negativa"}),e.jsx(ee,{children:"Evite empurrar o cão, pois ele pode interpretar como uma brincadeira"})]})]})},{title:"Resumo",content:e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:"Parabéns! Você aprendeu como ensinar seu cão a não pular nas pessoas."}),e.jsxs(le,{children:[e.jsx(M,{children:"Evitar que o cão pule nas pessoas é importante para a segurança e o bem-estar de todos"}),e.jsx(M,{children:"A técnica principal consiste em ignorar o comportamento indesejado e recompensar a calma"}),e.jsx(M,{children:'Ensinar comandos alternativos como "sentar" oferece ao cão uma forma apropriada de buscar atenção'}),e.jsx(M,{children:"A consistência e a paciência são fundamentais para o sucesso do treinamento"}),e.jsx(M,{children:"Com prática regular, seu cão aprenderá a cumprimentar pessoas de forma educada e controlada"})]}),e.jsx(Y,{children:"Próximos passos:"}),e.jsxs(le,{children:[e.jsx(M,{children:"Pratique diariamente com diferentes pessoas e em diferentes situações"}),e.jsx(M,{children:"Aumente gradualmente o nível de excitação durante os treinos"}),e.jsx(M,{children:"Continue para a próxima lição sobre como lidar com ansiedade de separação"})]})]})}],g=async()=>{if(i===n.length-1)try{if(localStorage.setItem("badhabits3_completed","true"),localStorage.setItem("badhabits4_unlocked","true"),window.dispatchEvent(new Event("storage")),c)try{const r={lessonId:"badhabits3",moduleId:"badhabits",courseId:"9DwWIAtShVCPXyRPSbqF",userId:c.uid,status:"completed",completedAt:J.fromDate(new Date),duration:15};Promise.race([h(r),new Promise(s=>setTimeout(s,2e3))]).then(()=>{l({completedLessons:22,currentLevel:"intermediate",lastSession:new Date,totalTime:265,unlockedModules:["startHere","hygiene","badhabits"]}).catch(s=>console.error("Erro ao atualizar dashboard:",s)),x().catch(s=>console.error("Erro ao atualizar dados:",s)),console.log("Progresso da lição BadHabits3 salvo com sucesso")}).catch(s=>{console.error("Erro ao salvar progresso da lição:",s)})}catch(r){console.error("Erro ao processar progresso da lição:",r)}a()}catch(r){console.error("Erro ao salvar progresso da lição:",r),a()}else d(r=>(r+1)%n.length)},t=()=>{d(r=>(r-1+n.length)%n.length)},u=r=>{d(r)};return e.jsxs(Oe,{children:[e.jsxs(Ge,{children:["Ensinando o Cão a Não Pular nas Pessoas",localStorage.getItem("badhabits3_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(Ue,{children:[n.map((r,s)=>e.jsx(Je,{active:i===s,children:e.jsxs(Ke,{children:[e.jsx(Qe,{children:r.title}),r.content]})},s)),e.jsxs(eo,{children:[e.jsx(ce,{onClick:t,disabled:i===0,children:"Anterior"}),e.jsx(oo,{children:n.map((r,s)=>e.jsx(ro,{active:i===s,onClick:()=>u(s)},s))}),e.jsx(ce,{onClick:g,children:i===n.length-1?"Concluir":"Próximo"})]})]})]})}const io="/assets/badhabits4-B1-vW7h4.png",co=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,lo=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,mo=o.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`,oe=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${a=>a.active?1:0};
  transition: opacity 0.5s ease-in-out;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  visibility: ${a=>a.active?"visible":"hidden"};
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;

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
`,re=o.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`,po=o.p`
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`,me=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  padding-bottom: 2rem;
`,y=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`,q=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,z=o.div`
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
`,$=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
  font-weight: 600;
`,D=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
`,uo=o.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`,pe=o.button`
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
`,ho=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,xo=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,go=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,bo=o.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,jo=o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;function fo({onNextLesson:a}){const i=W(),[d,c]=N.useState(0),[h,l]=N.useState(!1),{user:x}=O(),{addDocument:n}=G("progress"),{updateTraining:g}=U(),t=async()=>{d===2?(localStorage.setItem("badhabits4_completed","true"),window.dispatchEvent(new Event("storage")),l(!0),a()):c(m=>(m+1)%3)},u=()=>{c(m=>(m-1+3)%3)},r=m=>{m>=0&&m<3&&c(m)},s=()=>{l(!1)},ue=async()=>{if(localStorage.setItem("mental1_unlocked","true"),localStorage.setItem("mental_unlocked","true"),localStorage.setItem("startHere","true"),localStorage.setItem("isContentLocked","false"),x)try{await n({userId:x.uid,moduleId:"badhabits",lessonId:"badhabits4",completedAt:J.now(),progress:100}),g({completedLessons:24,currentLevel:"intermediate",lastSession:new Date,totalTime:300,unlockedModules:["startHere","badhabits","mental"]})}catch(m){console.error("Error updating progress:",m)}window.dispatchEvent(new Event("storage")),i("/content/training/mental")};return e.jsxs(co,{children:[e.jsx(lo,{children:"Evitar que o Cão Puxe na Coleira"}),e.jsxs(mo,{children:[e.jsxs(oe,{active:d===0,children:[e.jsx(re,{children:"Bem-vindo à Aula!"}),e.jsx(go,{children:e.jsx(bo,{src:io,alt:"Cão andando calmamente na coleira"})}),e.jsx(jo,{children:"Nesta aula, vamos aprender como ensinar seu cão a não puxar na coleira durante os passeios, tornando as caminhadas mais agradáveis para ambos."})]}),e.jsxs(oe,{active:d===1,children:[e.jsx(re,{children:"Por que ensinar?"}),e.jsx(po,{children:"Ensinar seu cão a não puxar na coleira é fundamental para passeios seguros e agradáveis. Este comportamento pode causar desconforto e até mesmo lesões, tanto para o cão quanto para o tutor."}),e.jsxs(me,{children:[e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"1"}),e.jsx($,{children:"Segurança"})]}),e.jsx(D,{children:"Previne acidentes e lesões, tanto para o cão quanto para o tutor."})]}),e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"2"}),e.jsx($,{children:"Controle"})]}),e.jsx(D,{children:"Permite passeios mais tranquilos e controlados em qualquer ambiente."})]}),e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"3"}),e.jsx($,{children:"Bem-estar"})]}),e.jsx(D,{children:"Reduz o estresse e a ansiedade durante os passeios."})]}),e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"4"}),e.jsx($,{children:"Socialização"})]}),e.jsx(D,{children:"Facilita a interação com outros cães e pessoas durante os passeios."})]})]})]}),e.jsxs(oe,{active:d===2,children:[e.jsx(re,{children:"Passo a Passo"}),e.jsxs(me,{children:[e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"1"}),e.jsx($,{children:"Pare quando o cão puxar"})]}),e.jsx(D,{children:"Pare imediatamente quando sentir a tensão na coleira e só continue quando o cão relaxar."})]}),e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"2"}),e.jsx($,{children:"Recompense o comportamento correto"})]}),e.jsx(D,{children:"Dê petiscos e elogios quando o cão andar ao seu lado sem puxar."})]}),e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"3"}),e.jsx($,{children:"Use equipamentos adequados"})]}),e.jsx(D,{children:"Coleiras peitorais ou peitorais anti-puxão podem ajudar no treinamento."})]}),e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"4"}),e.jsx($,{children:"Mantenha a consistência"})]}),e.jsx(D,{children:"Treine regularmente e siga sempre o mesmo método."})]}),e.jsxs(y,{children:[e.jsxs(q,{children:[e.jsx(z,{children:"5"}),e.jsx($,{children:"Seja paciente"})]}),e.jsx(D,{children:"O treinamento pode levar tempo, mas os resultados valem a pena."})]})]})]})]}),e.jsxs(uo,{children:[e.jsx(pe,{onClick:u,disabled:d===0,children:"Anterior"}),e.jsx(ho,{children:[0,1,2].map(m=>e.jsx(xo,{active:d===m,onClick:()=>r(m)},m))}),e.jsx(pe,{onClick:t,children:d===2?"Próxima Aula":"Próximo"})]}),h&&e.jsx(xe,{onClose:s,onNextModule:ue})]})}const vo=o.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,wo=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,ko=o.h1`
  font-size: 2.5rem;
  color: #333;
`,Eo=o.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`,So=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,Co=o.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`,Fo=o.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.75rem;
`,yo=o.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,qo=o.span`
  color: #007bff;
  font-size: 0.875rem;
  font-weight: 500;
`,zo=o.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,$o=o(zo)`
  background-color: #6c757d;
  margin-right: 1rem;

  &:hover {
    background-color: #5a6268;
  }
`,V=ge.find(a=>a.id==="badhabits");function No(){const a=W(),[i,d]=N.useState(null),[c,h]=N.useState(!1);N.useEffect(()=>{const t=localStorage.getItem("badhabits_unlocked")==="true";h(t),t||a("/content/training");const u=()=>{const r=localStorage.getItem("badhabits_unlocked")==="true";h(r)};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)},[a]);const l=[{id:"badhabits1",title:"Mordidas e Mastigação",description:"Como controlar mordidas e mastigação excessiva",duration:"15 min",component:$e,locked:localStorage.getItem("badhabits1_unlocked")!=="true"},{id:"badhabits2",title:"Roubo de Comida",description:"Evitar que o cão roube comida da mesa",duration:"15 min",component:We,locked:localStorage.getItem("badhabits1_completed")!=="true"},{id:"badhabits3",title:"Pular nas Pessoas",description:"Como evitar que o cão pule nas pessoas",duration:"15 min",component:no,locked:localStorage.getItem("badhabits2_completed")!=="true"},{id:"badhabits4",title:"Puxar na Coleira",description:"Ensinar o cão a andar sem puxar durante os passeios",duration:"15 min",component:fo,locked:localStorage.getItem("badhabits3_completed")!=="true"}],x=t=>{d(t)},n=()=>{const t=l.findIndex(u=>u.id===i.id);t<l.length-1&&d(l[t+1])},g=()=>{i?d(null):a("/content/training")};if(!c)return null;if(i){const t=i.component;return e.jsx(he,{children:e.jsx(t,{onBack:g,onNextLesson:n})})}return e.jsxs(vo,{children:[e.jsxs(wo,{children:[e.jsx($o,{onClick:g,children:"Voltar"}),e.jsx(ko,{children:V?V.title:"Evitando Maus Hábitos ⚠️"})]}),e.jsx(Eo,{children:V?V.description:"Prevenção e correção de comportamentos indesejados"}),e.jsx(So,{children:l.map(t=>e.jsxs(Co,{onClick:()=>!t.locked&&x(t),style:{opacity:t.locked?.5:1,cursor:t.locked?"not-allowed":"pointer",position:"relative"},children:[e.jsxs(Fo,{children:[t.title,localStorage.getItem(`${t.id}_completed`)==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsx(yo,{children:t.description}),e.jsx(qo,{children:t.duration}),t.locked&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"2rem"},children:"🔒"})]},t.id))})]})}export{No as default};
