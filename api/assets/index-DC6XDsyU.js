import{r as w,c as k,a5 as E,Z as C,j as e,a6 as S,u as ae,a4 as ce}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";import{M as le}from"./ModuleCompletionPopup-BxaocN1j.js";const me="/assets/starthere1-C9ioJPtr.png",pe=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,ue=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,ge=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,he=o.div`
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
`,xe=o.div`
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
`,be=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,j=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,fe=o.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,L=o.li`
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
`;const ve=o.div`
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
`,_=o.button`
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
`,je=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,we=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
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
`;o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;o.button`
  padding: 0.5rem 1rem;
  background: #48BB78;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 1rem;

  &:hover {
    background: #38A169;
  }
`;const y=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,i=o.li`
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
`,Fe=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,F=o.li`
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
`;o.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  max-height: 420px;
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
`;o.h3`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;const ke=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;function Ee({onNextLesson:a}){const[n,c]=w.useState(0),{user:d}=k(),{addDocument:m}=E("progress"),{updateTraining:x,refreshData:p}=C(),s=async()=>{if(n===3){localStorage.setItem("starthere1_completed","true"),window.dispatchEvent(new Event("storage")),a();try{if(d){const t={lessonId:"starthere1",moduleId:"starthere",courseId:"9DwWIAtShVCPXyRPSbqF",userId:d.uid,status:"completed",completedAt:S.fromDate(new Date),duration:5};Promise.race([m(t),new Promise(r=>setTimeout(r,2e3))]).then(()=>{x({completedLessons:1,currentLevel:"beginner",lastSession:new Date,totalTime:5}).catch(r=>console.error("Erro ao atualizar dashboard:",r)),p().catch(r=>console.error("Erro ao atualizar dados:",r)),console.log("Progresso da lição StartHere1 salvo com sucesso")}).catch(r=>{console.error("Erro ao salvar progresso da lição:",r)})}}catch(t){console.error("Erro ao processar progresso da lição:",t)}}else c(t=>(t+1)%4)},g=()=>{c(t=>(t-1+4)%4)},f=t=>{c(t)},h=[{title:"Introdução ao Adestramento",content:e.jsxs(e.Fragment,{children:[e.jsx(ke,{src:me,alt:"Introdução ao Adestramento"}),e.jsx(j,{children:"Bem-vindo ao mundo do adestramento positivo! Neste módulo, você aprenderá os fundamentos essenciais para começar a treinar seu cão de forma eficaz e respeitosa."}),e.jsx(j,{children:"O adestramento positivo é uma abordagem baseada em recompensas que fortalece o vínculo entre você e seu cão, tornando o processo de aprendizado mais agradável e eficiente para ambos."})]})},{title:"Como os Cães Aprendem?",content:e.jsxs(e.Fragment,{children:[e.jsx(j,{children:"Os cães aprendem através de associação e repetição. Quando um comportamento é seguido por algo agradável (como um petisco ou carinho), eles tendem a repetir esse comportamento."}),e.jsx(j,{children:"O reforço positivo é a forma mais eficaz de treinamento, pois:"}),e.jsxs(y,{children:[e.jsx(i,{children:"Cria uma associação positiva com o aprendizado, tornando o treinamento mais prazeroso"}),e.jsx(i,{children:"Fortaleca o vínculo entre tutor e pet, aumentando a confiança mútua"}),e.jsx(i,{children:"Reduz o estresse e a ansiedade, criando um ambiente seguro para o aprendizado"}),e.jsx(i,{children:"Estimula o cão a pensar e tomar decisões, desenvolvendo sua inteligência"}),e.jsx(i,{children:"Torna o treinamento mais divertido para ambos, fortalecendo o relacionamento"})]}),e.jsx(j,{children:"O reforço negativo e punições não são recomendados, pois podem:"}),e.jsxs(Fe,{children:[e.jsx(F,{children:"Gerar medo e ansiedade, prejudicando o bem-estar do cão"}),e.jsx(F,{children:"Danificar a confiança do cão, afetando o relacionamento com o tutor"}),e.jsx(F,{children:"Criar associações negativas com o treinamento, dificultando o aprendizado"}),e.jsx(F,{children:"Inibir o comportamento natural do cão, afetando sua personalidade"}),e.jsx(F,{children:"Prejudicar o relacionamento entre tutor e pet, criando tensão"})]})]})},{title:"Exercício Prático: Reforço Positivo",content:e.jsxs(e.Fragment,{children:[e.jsx(j,{children:"Vamos praticar o reforço positivo com um exercício simples:"}),e.jsxs(fe,{children:[e.jsx(L,{"data-step":"1",children:"Pegue um petisco e segure na mão, mantendo uma postura relaxada e amigável"}),e.jsx(L,{"data-step":"2",children:"Quando o cão olhar para você ou sentar espontaneamente, recompense imediatamente com o petisco e um elogio animado"}),e.jsx(L,{"data-step":"3",children:"Repita 5 a 10 vezes para ensinar que prestar atenção no tutor traz benefícios positivos"})]}),e.jsx(j,{children:"Dicas importantes para o sucesso:"}),e.jsxs(y,{children:[e.jsx(i,{children:"Escolha um petisco que seu cão goste muito, aumentando a motivação"}),e.jsx(i,{children:"Recompense imediatamente após o comportamento desejado, criando uma associação clara"}),e.jsx(i,{children:"Mantenha as sessões curtas (5-10 minutos) para evitar cansaço ou desinteresse"}),e.jsx(i,{children:"Escolha um ambiente calmo e sem distrações, facilitando o foco do cão"}),e.jsx(i,{children:"Use um tom de voz animado e entusiasmado ao dar a recompensa, reforçando a positividade"}),e.jsx(i,{children:"Se o cão não responder, tente com um petisco mais atraente ou reduza as distrações do ambiente"})]}),e.jsx(j,{children:"Lembre-se sempre:"}),e.jsxs(y,{children:[e.jsx(i,{children:"Seja paciente - cada cão tem seu próprio ritmo de aprendizado e desenvolvimento"}),e.jsx(i,{children:"Celebre pequenos progressos, mesmo que pareçam insignificantes, mantendo a motivação"}),e.jsx(i,{children:"Termine sempre com uma nota positiva, mesmo que o cão não tenha respondido como esperado"}),e.jsx(i,{children:"Consistência é fundamental - use sempre os mesmos comandos e gestos para evitar confusão"}),e.jsx(i,{children:"O treinamento deve ser uma experiência positiva para ambos, fortalecendo o vínculo"})]})]})},{title:"Resumo Rápido",content:e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(i,{children:"Use reforço positivo sempre que possível, criando uma experiência agradável para o cão"}),e.jsx(i,{children:"Seja consistente nos comandos e recompensas, evitando confusão no aprendizado"}),e.jsx(i,{children:"Mantenha as sessões curtas e divertidas, respeitando o tempo de atenção do cão"}),e.jsx(i,{children:"Observe e respeite os limites do seu cão, adaptando o treinamento ao seu ritmo"}),e.jsx(i,{children:"Pratique regularmente em diferentes ambientes, aumentando a generalização do aprendizado"}),e.jsx(i,{children:"Celebre cada pequeno progresso, mantendo a motivação do cão e do tutor"}),e.jsx(i,{children:"Mantenha a paciência e o bom humor, tornando o treinamento uma experiência positiva"}),e.jsx(i,{children:"Adapte o treinamento à personalidade do seu cão, respeitando suas características individuais"}),e.jsx(i,{children:"Use petiscos de alto valor para recompensas, aumentando a motivação do cão"}),e.jsx(i,{children:"Estabeleça uma rotina de treinamento, criando hábitos consistentes"})]})})}];return e.jsxs(pe,{children:[e.jsxs(ue,{children:["Introdução ao Treinamento",localStorage.getItem("starthere1_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(ge,{children:[h.map((t,r)=>e.jsx(he,{active:n===r,children:e.jsxs(xe,{children:[e.jsx(be,{children:t.title}),t.content]})},r)),e.jsxs(ve,{children:[e.jsx(_,{onClick:g,disabled:n===0,children:"Anterior"}),e.jsx(je,{children:h.map((t,r)=>e.jsx(we,{active:n===r,onClick:()=>f(r)},r))}),e.jsx(_,{onClick:s,children:n===3?"Próxima Aula":"Próximo"})]})]})]})}const Ce="/assets/starthere2-DtnA24bV.png",Se=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,ye=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,ze=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,De=o.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px); /* Reduzido para dar espaço aos botões */
  opacity: ${a=>a.active==="true"?1:0};
  transition: opacity 0.5s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: ${a=>a.active==="true"?"auto":"none"};
`,Ae=o.div`
  height: 100%;
  padding: 2.5rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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
`,$e=o.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`,V=o.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`,z=o.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`,q=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,v=o.li`
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
`,M=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,D=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FFF5F5;
  border-radius: 8px;
  border-left: 4px solid #F56565;
  transition: all 0.2s ease;

  &:hover {
    background: #FFEBEB;
    transform: translateX(4px);
  }

  &:before {
    content: "⚠️";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,Be=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,R=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #EBF8FF;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  transition: all 0.2s ease;

  &:hover {
    background: #BEE3F8;
    transform: translateX(4px);
  }

  &:before {
    content: "💡";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
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
`;o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;const Pe=o.div`
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
`,W=o.button`
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
`,Ie=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 70px; /* Ajustado para ficar acima dos botões */
  left: 0;
  right: 0;
  z-index: 1;
`,Te=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,Le=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;function qe({onNextLesson:a}){const[n,c]=w.useState(0),{user:d}=k(),{addDocument:m}=E("progress"),{updateTraining:x,refreshData:p}=C(),s=async()=>{if(n===3){localStorage.setItem("starthere2_completed","true"),window.dispatchEvent(new Event("storage")),a();try{if(d){const t={lessonId:"starthere2",moduleId:"starthere",courseId:"9DwWIAtShVCPXyRPSbqF",userId:d.uid,status:"completed",completedAt:S.fromDate(new Date),duration:5};Promise.race([m(t),new Promise(r=>setTimeout(r,2e3))]).then(()=>{x({completedLessons:2,currentLevel:"beginner",lastSession:new Date,totalTime:10}).catch(r=>console.error("Erro ao atualizar dashboard:",r)),p().catch(r=>console.error("Erro ao atualizar dados:",r)),console.log("Progresso da lição StartHere2 salvo com sucesso")}).catch(r=>{console.error("Erro ao salvar progresso da lição:",r)})}}catch(t){console.error("Erro ao processar progresso da lição:",t)}}else c(t=>(t+1)%4)},g=()=>{c(t=>(t-1+4)%4)},f=t=>{c(t)},h=[{title:"Como os Cães se Comunicam",content:e.jsxs(e.Fragment,{children:[e.jsx(Le,{src:Ce,alt:"Comunicação Eficaz com o Cão"}),e.jsx(V,{children:"Os cães não entendem palavras como os humanos, mas são especialistas em interpretar sons, gestos e expressões faciais. Nesta aula, você aprenderá a se comunicar de forma clara e eficaz com seu cão."}),e.jsx(V,{children:"Uma comunicação eficaz fortalece o vínculo entre tutor e cão, tornando o treinamento mais fácil e agradável para ambos."})]})},{title:"Tom de Voz",content:e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"O tom de voz é crucial para uma comunicação eficaz. Veja como usar diferentes tons:"}),e.jsxs(q,{children:[e.jsx(v,{"data-step":"1",children:'Tom neutro e firme → Para comandos básicos como "Senta", "Deita", "Fica".'}),e.jsx(v,{"data-step":"2",children:"Tom animado e motivacional → Para elogios e recompensas verbais."}),e.jsx(v,{"data-step":"3",children:"Tom grave e firme → Para redirecionar comportamentos indesejados."})]}),e.jsxs(M,{children:[e.jsx(D,{children:"Não grite ou use tom agressivo → Pode assustar o cão."}),e.jsx(D,{children:"Não use tom agudo para repreender → Pode soar como brincadeira."})]})]})},{title:"Linguagem Corporal",content:e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"Os cães prestam mais atenção na linguagem corporal do que nas palavras:"}),e.jsxs(q,{children:[e.jsx(v,{"data-step":"1",children:"Postura relaxada → O cão se sente seguro e confortável."}),e.jsx(v,{"data-step":"2",children:"Movimentos calmos → Evita excitação excessiva ou medo."}),e.jsx(v,{"data-step":"3",children:"Contato visual moderado → Ajuda a manter a atenção."})]}),e.jsxs(M,{children:[e.jsx(D,{children:"Não se incline para frente → Pode soar ameaçador."}),e.jsx(D,{children:"Não aponte o dedo na cara do cão → Pode gerar estresse."})]})]})},{title:"Exemplo Prático",content:e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"Veja como aplicar a comunicação eficaz na prática:"}),e.jsxs(Be,{children:[e.jsx(R,{children:'Diga "Senta" com tom firme e neutro, mantendo postura relaxada.'}),e.jsx(R,{children:"Quando o cão acertar, elogie com tom animado e feliz."}),e.jsx(R,{children:"Use gestos claros junto com os comandos verbais."})]}),e.jsx(z,{children:"Exercício para praticar:"}),e.jsxs(q,{children:[e.jsx(v,{"data-step":"1",children:"Grave um comando e ouça sua voz → Seu tom está firme e neutro?"}),e.jsx(v,{"data-step":"2",children:"Observe sua postura → Você está relaxado e confiante?"}),e.jsx(v,{"data-step":"3",children:"Pratique os gestos → Eles são claros e consistentes?"})]})]})}];return e.jsxs(Se,{children:[e.jsx(ye,{children:"Comunicação eficaz com o cão"}),e.jsxs(ze,{children:[h.map((t,r)=>e.jsx(De,{active:(n===r).toString(),children:e.jsxs(Ae,{children:[e.jsx($e,{children:t.title}),t.content]})},r)),e.jsx(Ie,{children:[0,1,2,3].map(t=>e.jsx(Te,{active:n===t,onClick:()=>f(t)},t))}),e.jsxs(Pe,{children:[e.jsx(W,{onClick:g,disabled:n===0,children:"Anterior"}),e.jsx(W,{onClick:s,children:n===3?"Próxima Aula":"Próximo"})]})]})]})}const Re="/assets/starthere3-Bz9xOAst.png",Ne=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Xe=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Oe=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,He=o.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px); /* Reduzido para dar espaço aos botões */
  opacity: ${a=>a.active==="true"?1:0};
  transition: opacity 0.5s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: ${a=>a.active==="true"?"auto":"none"};
`,Ye=o.div`
  height: 100%;
  padding: 2.5rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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
`,_e=o.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`,N=o.p`
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`,Ve=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,A=o.li`
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
`,Me=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
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
  border-left: 4px solid #F56565;
  transition: all 0.2s ease;

  &:hover {
    background: #FFEBEB;
    transform: translateX(4px);
  }

  &:before {
    content: "⚠️";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,We=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,X=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #EBF8FF;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  transition: all 0.2s ease;

  &:hover {
    background: #BEE3F8;
    transform: translateX(4px);
  }

  &:before {
    content: "💡";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,Qe=o.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,$=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FAF5FF;
  border-radius: 8px;
  border-left: 4px solid #9F7AEA;
  transition: all 0.2s ease;

  &:hover {
    background: #F3E8FF;
    transform: translateX(4px);
  }

  &:before {
    content: attr(data-step);
    color: #9F7AEA;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
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
`;o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;const Ue=o.div`
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
`,U=o.button`
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
`,Ge=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  z-index: 1;
`,Je=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,Ze=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,G=o.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`;function Ke({onNextLesson:a}){const[n,c]=w.useState(0),{user:d}=k(),{addDocument:m}=E("progress"),{updateTraining:x,refreshData:p}=C(),s=async()=>{if(n===3){localStorage.setItem("starthere3_completed","true"),window.dispatchEvent(new Event("storage")),a();try{if(d){const t={lessonId:"starthere3",moduleId:"starthere",courseId:"9DwWIAtShVCPXyRPSbqF",userId:d.uid,status:"completed",completedAt:S.fromDate(new Date),duration:5};Promise.race([m(t),new Promise(r=>setTimeout(r,2e3))]).then(()=>{x({completedLessons:3,currentLevel:"beginner",lastSession:new Date,totalTime:15}).catch(r=>console.error("Erro ao atualizar dashboard:",r)),p().catch(r=>console.error("Erro ao atualizar dados:",r)),console.log("Progresso da lição StartHere3 salvo com sucesso")}).catch(r=>{console.error("Erro ao salvar progresso da lição:",r)})}}catch(t){console.error("Erro ao processar progresso da lição:",t)}}else c(t=>(t+1)%4)},g=()=>{c(t=>(t-1+4)%4)},f=t=>{c(t)},h=[{title:"O Poder das Recompensas",content:e.jsxs(e.Fragment,{children:[e.jsx(Ze,{src:Re,alt:"Recompensas e Reforço Positivo"}),e.jsx(G,{children:"O reforço positivo é a base do treinamento moderno. Nesta aula, você aprenderá como usar recompensas para ensinar seu cão de forma eficaz e divertida."}),e.jsx(G,{children:"Quando usamos recompensas corretamente, o cão aprende mais rápido e mantém o comportamento desejado por mais tempo, criando uma experiência positiva para ambos."})]})},{title:"Tipos de Recompensas",content:e.jsxs(e.Fragment,{children:[e.jsx(N,{children:"Cada cão tem suas preferências. Conheça os principais tipos de recompensas:"}),e.jsxs(Ve,{children:[e.jsx(A,{"data-step":"1",children:"Petiscos → Ideais para treinos curtos e comandos novos."}),e.jsx(A,{"data-step":"2",children:"Brinquedos → Perfeitos para treinos mais longos e interativos."}),e.jsx(A,{"data-step":"3",children:"Carinho → Excelente para cães que valorizam contato físico."}),e.jsx(A,{"data-step":"4",children:"Elogios → Importante para manter o vínculo e a motivação."})]})]})},{title:"Como Usar Recompensas",content:e.jsxs(e.Fragment,{children:[e.jsx(N,{children:"Para um treinamento eficaz, siga estas etapas:"}),e.jsxs(Qe,{children:[e.jsx($,{"data-step":"1",children:"Identifique o que seu cão mais gosta como recompensa."}),e.jsx($,{"data-step":"2",children:"Use recompensas de alto valor para comportamentos difíceis."}),e.jsx($,{"data-step":"3",children:"Dê a recompensa imediatamente após o comportamento desejado."}),e.jsx($,{"data-step":"4",children:"Reduza gradualmente as recompensas conforme o cão aprende."})]})]})},{title:"Exemplo Prático",content:e.jsxs(e.Fragment,{children:[e.jsx(N,{children:"Veja como aplicar o reforço positivo em situações do dia a dia:"}),e.jsxs(We,{children:[e.jsx(X,{children:"Quando o cão senta, dê um petisco e elogie com entusiasmo."}),e.jsx(X,{children:"Se o cão fica quieto quando pedido, ofereça um brinquedo favorito."}),e.jsx(X,{children:"Quando o cão vem quando chamado, faça carinho e dê um petisco especial."})]}),e.jsxs(Me,{children:[e.jsx(Q,{children:"Nunca use recompensas para parar comportamentos indesejados."}),e.jsx(Q,{children:"Mantenha as recompensas pequenas para não sobrecarregar o cão."})]})]})}];return e.jsxs(Ne,{children:[e.jsx(Xe,{children:"Recompensas e Reforço Positivo"}),e.jsxs(Oe,{children:[h.map((t,r)=>e.jsx(He,{active:(n===r).toString(),children:e.jsxs(Ye,{children:[e.jsx(_e,{children:t.title}),t.content]})},r)),e.jsx(Ge,{children:[0,1,2,3].map(t=>e.jsx(Je,{active:n===t,onClick:()=>f(t)},t))}),e.jsxs(Ue,{children:[e.jsx(U,{onClick:g,disabled:n===0,children:"Anterior"}),e.jsx(U,{onClick:s,children:n===3?"Próxima Aula":"Próximo"})]})]})]})}const eo="/assets/starthere4-BHi4qFy3.png",oo=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,to=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,ro=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,ao=o.div`
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
`,no=o.div`
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
`,so=o.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`,B=o.p`
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`;o.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;o.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "1️⃣";
    position: absolute;
    left: 0;
  }

  &:nth-child(2):before {
    content: "2️⃣";
  }

  &:nth-child(3):before {
    content: "3️⃣";
  }
`;o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;o.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "✔";
    color: #48BB78;
    position: absolute;
    left: 0;
  }
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
`;o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;const io=o.div`
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
`,J=o.button`
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
`,co=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,lo=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,mo=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Z=o.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`,O=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,b=o.li`
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
`,po=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,K=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FFF5F5;
  border-radius: 8px;
  border-left: 4px solid #F56565;
  transition: all 0.2s ease;

  &:hover {
    background: #FFEBEB;
    transform: translateX(4px);
  }

  &:before {
    content: "⚠️";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,uo=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,H=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #EBF8FF;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  transition: all 0.2s ease;

  &:hover {
    background: #BEE3F8;
    transform: translateX(4px);
  }

  &:before {
    content: "💡";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;o.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FAF5FF;
  border-radius: 8px;
  border-left: 4px solid #9F7AEA;
  transition: all 0.2s ease;

  &:hover {
    background: #F3E8FF;
    transform: translateX(4px);
  }

  &:before {
    content: attr(data-step);
    color: #9F7AEA;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;function go({onNextLesson:a}){const[n,c]=w.useState(0),{user:d}=k(),{addDocument:m}=E("progress"),{updateTraining:x,refreshData:p}=C(),s=async()=>{if(n===4){localStorage.setItem("starthere4_completed","true"),window.dispatchEvent(new Event("storage")),a();try{if(d){const t={lessonId:"starthere4",moduleId:"starthere",courseId:"9DwWIAtShVCPXyRPSbqF",userId:d.uid,status:"completed",completedAt:S.fromDate(new Date),duration:5};Promise.race([m(t),new Promise(r=>setTimeout(r,2e3))]).then(()=>{x({completedLessons:4,currentLevel:"beginner",lastSession:new Date,totalTime:20}).catch(r=>console.error("Erro ao atualizar dashboard:",r)),p().catch(r=>console.error("Erro ao atualizar dados:",r)),console.log("Progresso da lição StartHere4 salvo com sucesso")}).catch(r=>{console.error("Erro ao salvar progresso da lição:",r)})}}catch(t){console.error("Erro ao processar progresso da lição:",t)}}else c(t=>(t+1)%5)},g=()=>{c(t=>(t-1+5)%5)},f=t=>{c(t)},h=[{title:"O Momento Certo",content:e.jsxs(e.Fragment,{children:[e.jsx(mo,{src:eo,alt:"Timing e Consistência"}),e.jsx(Z,{children:"O timing e a consistência são fundamentais para o sucesso do treinamento. Nesta aula, você aprenderá como usar o timing correto e manter a consistência."}),e.jsx(Z,{children:"O timing adequado ajuda o cão a associar o comportamento à recompensa, enquanto a consistência reforça o aprendizado."})]})},{title:"Princípios do Timing",content:e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"Veja os princípios fundamentais para um bom timing:"}),e.jsxs(O,{children:[e.jsx(b,{"data-step":"1",children:"Recompense imediatamente → O cão precisa associar a recompensa ao comportamento."}),e.jsx(b,{"data-step":"2",children:"Seja consistente → Recompense sempre que o comportamento desejado ocorrer."}),e.jsx(b,{"data-step":"3",children:"Use diferentes tipos de recompensa → Mantenha o interesse do cão."}),e.jsx(b,{"data-step":"4",children:"Diminua gradualmente as recompensas → Conforme o comportamento se torna consistente."})]})]})},{title:"Exemplos Práticos",content:e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"Veja como aplicar o timing e a consistência na prática:"}),e.jsxs(uo,{children:[e.jsx(H,{children:"Quando o cão senta, dê um petisco imediatamente."}),e.jsx(H,{children:"Se o cão fica quieto quando pedido, ofereça um brinquedo."}),e.jsx(H,{children:"Quando o cão vem quando chamado, faça carinho e elogie."})]}),e.jsxs(po,{children:[e.jsx(K,{children:"Não use recompensas para comportamentos indesejados."}),e.jsx(K,{children:"Não prometa recompensas que não pode dar."})]})]})},{title:"Passo a Passo",content:e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"Siga estes passos para treinar com timing e consistência:"}),e.jsxs(O,{children:[e.jsx(b,{"data-step":"1",children:"Chame o nome do cão com um tom animado."}),e.jsx(b,{"data-step":"2",children:"Quando ele olhar para você, dê um petisco e um elogio."}),e.jsx(b,{"data-step":"3",children:"Repita o exercício 5x ao dia por uma semana."})]})]})},{title:"Resumo Rápido",content:e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"Lembre-se destes pontos importantes:"}),e.jsxs(O,{children:[e.jsx(b,{"data-step":"1",children:"O timing correto é essencial para o aprendizado."}),e.jsx(b,{"data-step":"2",children:"Seja consistente em suas recompensas e comandos."}),e.jsx(b,{"data-step":"3",children:"Ajuste o timing conforme o progresso do cão."})]})]})}];return e.jsxs(oo,{children:[e.jsx(to,{children:"Timing e Consistência"}),e.jsxs(ro,{children:[h.map((t,r)=>e.jsx(ao,{active:n===r,children:e.jsxs(no,{children:[e.jsx(so,{children:t.title}),t.content]})},r)),e.jsxs(io,{children:[e.jsx(J,{onClick:g,disabled:n===0,children:"Anterior"}),e.jsx(co,{children:h.map((t,r)=>e.jsx(lo,{active:n===r,onClick:()=>f(r)},r))}),e.jsx(J,{onClick:s,children:n===h.length-1?"Próxima Aula":"Próximo"})]})]})]})}const ho="/assets/Starthere5-BhTpkRTb.png",xo=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,bo=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,fo=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,vo=o.div`
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
`,jo=o.div`
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
`,wo=o.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`,ee=o.p`
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`;o.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;o.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "1️⃣";
    position: absolute;
    left: 0;
  }

  &:nth-child(2):before {
    content: "2️⃣";
  }

  &:nth-child(3):before {
    content: "3️⃣";
  }
`;o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;o.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "✔";
    color: #48BB78;
    position: absolute;
    left: 0;
  }
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
`;o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;const Fo=o.div`
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
`,oe=o.button`
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
`,ko=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,Eo=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${a=>a.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`;o.div`
  margin-bottom: 1.5rem;
`;o.h3`
  font-size: 1.2rem;
  color: #2D3748;
  margin-bottom: 0.75rem;
`;const te=o.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`,Co=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,P=o.li`
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
`,So=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,re=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FFF5F5;
  border-radius: 8px;
  border-left: 4px solid #F56565;
  transition: all 0.2s ease;

  &:hover {
    background: #FFEBEB;
    transform: translateX(4px);
  }

  &:before {
    content: "⚠️";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,yo=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Y=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #EBF8FF;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  transition: all 0.2s ease;

  &:hover {
    background: #BEE3F8;
    transform: translateX(4px);
  }

  &:before {
    content: "💡";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,zo=o.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,I=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FAF5FF;
  border-radius: 8px;
  border-left: 4px solid #9F7AEA;
  transition: all 0.2s ease;

  &:hover {
    background: #F3E8FF;
    transform: translateX(4px);
  }

  &:before {
    content: attr(data-step);
    color: #9F7AEA;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,Do=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;function Ao({onNextLesson:a,onBack:n}){const c=ae(),[d,m]=w.useState(0),[x,p]=w.useState(!1),s="Consistência e Paciência",{user:g}=k(),{addDocument:f}=E("progress"),{updateTraining:h,refreshData:t}=C(),r=async()=>{if(d===3){localStorage.setItem("starthere5_completed","true"),window.dispatchEvent(new Event("storage")),p(!0);try{if(g){const u={lessonId:"starthere5",moduleId:"starthere",courseId:"9DwWIAtShVCPXyRPSbqF",userId:g.uid,status:"completed",completedAt:S.fromDate(new Date),duration:5};Promise.race([f(u),new Promise(l=>setTimeout(l,2e3))]).then(()=>{h({completedLessons:5,currentLevel:"beginner",lastSession:new Date,totalTime:25}).catch(l=>console.error("Erro ao atualizar dashboard:",l)),t().catch(l=>console.error("Erro ao atualizar dados:",l)),console.log("Progresso da lição StartHere5 salvo com sucesso")}).catch(l=>{console.error("Erro ao salvar progresso da lição:",l)})}}catch(u){console.error("Erro ao processar progresso da lição:",u)}}else m(u=>(u+1)%4)},ne=()=>{m(u=>(u-1+4)%4)},se=u=>{m(u)},ie=()=>{p(!1)},de=()=>{localStorage.setItem("behavior1_unlocked","true"),localStorage.setItem("behavior_unlocked","true"),c("/content/training/behavior")},T=[{title:"A Base do Treinamento",content:e.jsxs(e.Fragment,{children:[e.jsx(Do,{src:ho,alt:"Consistência e Paciência"}),e.jsx(te,{children:"A consistência e a paciência são fundamentais para o sucesso do treinamento. Nesta aula, você aprenderá como manter a consistência e desenvolver paciência."}),e.jsx(te,{children:"O treinamento é um processo contínuo que requer tempo e dedicação. Com paciência e consistência, você verá resultados duradouros."})]})},{title:"Princípios da Consistência",content:e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:"Veja os princípios fundamentais para manter a consistência:"}),e.jsxs(Co,{children:[e.jsx(P,{"data-step":"1",children:"Use sempre os mesmos comandos → Evite variações nas palavras."}),e.jsx(P,{"data-step":"2",children:"Mantenha a mesma rotina → Horários regulares para treinos."}),e.jsx(P,{"data-step":"3",children:"Seja consistente nas recompensas → Reforce sempre os comportamentos desejados."}),e.jsx(P,{"data-step":"4",children:"Todos na família devem seguir as mesmas regras → Consistência entre todos os membros."})]})]})},{title:"Desenvolvendo Paciência",content:e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:"Aprenda a desenvolver e manter a paciência durante o treinamento:"}),e.jsxs(zo,{children:[e.jsx(I,{"data-step":"1",children:"Estabeleça expectativas realistas → Cada cão aprende no seu ritmo."}),e.jsx(I,{"data-step":"2",children:"Celebre pequenas conquistas → Reconheça cada progresso."}),e.jsx(I,{"data-step":"3",children:"Mantenha sessões curtas → 5-10 minutos são mais eficientes."}),e.jsx(I,{"data-step":"4",children:"Faça pausas quando necessário → Evite frustração."})]}),e.jsxs(So,{children:[e.jsx(re,{children:"Não perca a calma se o cão não entender imediatamente."}),e.jsx(re,{children:"Não compare o progresso do seu cão com outros cães."})]})]})},{title:"Exemplo Prático",content:e.jsxs(yo,{children:[e.jsx(Y,{children:"Quando o cão senta, dê um petisco imediatamente."}),e.jsx(Y,{children:"Se o cão fica quieto quando pedido, ofereça um brinquedo."}),e.jsx(Y,{children:"Quando o cão vem quando chamado, faça carinho e elogie."})]})}];return e.jsxs(xo,{children:[e.jsx(bo,{children:s}),e.jsxs(fo,{children:[T.map((u,l)=>e.jsx(vo,{active:d===l,children:e.jsxs(jo,{children:[e.jsx(wo,{children:u.title}),u.content]})},l)),e.jsxs(Fo,{children:[e.jsx(oe,{onClick:ne,disabled:d===0,children:"Anterior"}),e.jsx(ko,{children:T.map((u,l)=>e.jsx(Eo,{active:d===l,onClick:()=>se(l)},l))}),e.jsx(oe,{onClick:r,children:d===T.length-1?"Próxima Aula":"Próximo"})]})]}),x&&e.jsx(le,{onClose:ie,onNextModule:de})]})}const $o=o.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Bo=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,Po=o.h1`
  font-size: 2.5rem;
  color: #333;
`,Io=o.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`,To=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,Lo=o.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`,qo=o.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.75rem;
`,Ro=o.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,No=o.span`
  color: #007bff;
  font-size: 0.875rem;
  font-weight: 500;
`,Xo=o.button`
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
`,Oo=o(Xo)`
  background-color: #6c757d;
  margin-right: 1rem;

  &:hover {
    background-color: #5a6268;
  }
`;function Vo(){const a=ae(),[n,c]=w.useState(null),d=[{id:"starthere1",title:"Introdução ao Adestramento",description:"Entenda os conceitos básicos do adestramento positivo",duration:"10 min",component:Ee,locked:!1},{id:"starthere2",title:"Comunicação com seu Cão",description:"Aprenda a se comunicar efetivamente com seu cão",duration:"15 min",component:qe,locked:localStorage.getItem("starthere1_completed")!=="true"},{id:"starthere3",title:"Recompensas e Reforço Positivo",description:"Como usar recompensas para motivar seu cão",duration:"15 min",component:Ke,locked:localStorage.getItem("starthere2_completed")!=="true"},{id:"starthere4",title:"Timing e Consistência",description:"A importância do timing e da consistência no treinamento",duration:"15 min",component:go,locked:localStorage.getItem("starthere3_completed")!=="true"},{id:"starthere5",title:"Ambiente de Treinamento",description:"Como criar o ambiente ideal para o treinamento",duration:"15 min",component:Ao,locked:localStorage.getItem("starthere4_completed")!=="true"}],m=s=>{c(s)},x=()=>{const s=d.findIndex(g=>g.id===n.id);s<d.length-1&&c(d[s+1])},p=()=>{n?c(null):a("/content/training")};if(n){const s=n.component;return e.jsx(ce,{children:e.jsx(s,{onBack:p,onNextLesson:x})})}return e.jsxs($o,{children:[e.jsxs(Bo,{children:[e.jsx(Oo,{onClick:p,children:"Voltar"}),e.jsx(Po,{children:"Comece Aqui 🎯"})]}),e.jsx(Io,{children:"Fundamentos essenciais para começar a treinar seu cão e estabelecer uma comunicação efetiva."}),e.jsx(To,{children:d.map(s=>e.jsxs(Lo,{onClick:()=>!s.locked&&m(s),style:{opacity:s.locked?.5:1,cursor:s.locked?"not-allowed":"pointer",position:"relative"},children:[e.jsxs(qo,{children:[s.title,localStorage.getItem(`${s.id}_completed`)==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsx(Ro,{children:s.description}),e.jsx(No,{children:s.duration}),s.locked&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"2rem"},children:"🔒"})]},s.id))})]})}export{Vo as default};
