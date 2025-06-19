import{r as k,c as O,a5 as W,Z as G,j as e,a6 as J,u as ie,a4 as ne}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";const ae="/assets/Mental1-DNSRd6YB.png",se=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,de=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,ce=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,le=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${r=>r.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${r=>r.active?"auto":"none"};
  z-index: ${r=>r.active?1:0};
`,me=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 60px; /* Espaço para os botões de navegação */

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
`,pe=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,w=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,he=o.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,C=o.li`
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
`;const ue=o.div`
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
  z-index: 5;
`,ee=o.button`
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
`,xe=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,be=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${r=>r.active?"#4299E1":"#CBD5E0"};
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
`;o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;const Q=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,s=o.li`
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
`,ge=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,y=o.li`
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
`;const fe=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;function ve({onNextLesson:r}){const[t,d]=k.useState(0),{user:l}=O(),{addDocument:p}=W("progress"),{updateTraining:h,refreshData:u}=G(),a=async()=>{if(t===3){localStorage.setItem("mental1_completed","true"),localStorage.setItem("mental2_unlocked","true"),window.dispatchEvent(new Event("storage")),r();try{if(l){const n={lessonId:"mental1",moduleId:"mental",courseId:"9DwWIAtShVCPXyRPSbqF",userId:l.uid,status:"completed",completedAt:J.fromDate(new Date),duration:5};Promise.race([p(n),new Promise(c=>setTimeout(c,2e3))]).then(()=>{h({completedLessons:25,currentLevel:"advanced",lastSession:new Date,totalTime:305,unlockedModules:["startHere","hygiene","badhabits","mental"]}).catch(c=>console.error("Erro ao atualizar dashboard:",c)),u().catch(c=>console.error("Erro ao atualizar dados:",c)),console.log("Progresso da lição Mental1 salvo com sucesso")}).catch(c=>{console.error("Erro ao salvar progresso da lição:",c)})}}catch(n){console.error("Erro ao processar progresso da lição:",n)}}else d(n=>(n+1)%4)},x=()=>{d(n=>(n-1+4)%4)},b=n=>{d(n)},i=[{title:"Introdução ao Enriquecimento Mental",content:e.jsxs(e.Fragment,{children:[e.jsx(fe,{src:ae,alt:"Cão brincando com brinquedos interativos"}),e.jsx(w,{children:"Bem-vindo à aula sobre Brinquedos Interativos e Enriquecimento Ambiental! Nesta aula, você aprenderá como manter seu cão mentalmente estimulado através de atividades e brinquedos que desafiam sua inteligência."}),e.jsx(w,{children:"O enriquecimento mental é tão importante quanto o exercício físico para a saúde e bem-estar do seu cão, ajudando a prevenir problemas comportamentais causados pelo tédio e falta de estímulo."})]})},{title:"Benefícios do Enriquecimento Mental",content:e.jsxs(e.Fragment,{children:[e.jsx(w,{children:"O enriquecimento mental oferece diversos benefícios para o seu cão, impactando positivamente sua saúde e comportamento."}),e.jsxs(Q,{children:[e.jsx(s,{children:"Reduz a ansiedade e o estresse, criando um estado mental mais equilibrado"}),e.jsx(s,{children:"Previne comportamentos destrutivos causados pelo tédio, como roer móveis e objetos"}),e.jsx(s,{children:"Estimula o desenvolvimento cognitivo, melhorando a capacidade de resolver problemas"}),e.jsx(s,{children:"Aumenta a confiança do cão ao superar desafios, reduzindo inseguranças"}),e.jsx(s,{children:"Fortalece o vínculo entre tutor e pet durante as atividades interativas"})]}),e.jsx(w,{children:"Situações onde o enriquecimento mental é especialmente importante:"}),e.jsxs(ge,{children:[e.jsx(y,{children:"Cães que ficam sozinhos por longos períodos, reduzindo o estresse da separação"}),e.jsx(y,{children:"Pets convalescentes ou com mobilidade reduzida, que precisam de estímulo sem esforço físico"}),e.jsx(y,{children:"Cães idosos, para manter a mente ativa e prevenir o declínio cognitivo"}),e.jsx(y,{children:"Filhotes em desenvolvimento, estimulando o aprendizado e a curiosidade natural"}),e.jsx(y,{children:"Cães muito ativos mentalmente, que precisam de desafios constantes"})]})]})},{title:"Tipos de Enriquecimento Mental",content:e.jsxs(e.Fragment,{children:[e.jsx(w,{children:"Existem diversas formas de proporcionar enriquecimento mental para seu cão:"}),e.jsxs(he,{children:[e.jsx(C,{"data-step":"1",children:"Brinquedos interativos: Quebra-cabeças, brinquedos que liberam petiscos e mordedores recheáveis estimulam o raciocínio"}),e.jsx(C,{"data-step":"2",children:"Jogos de farejar: Esconda petiscos pela casa ou jardim para estimular o olfato e a busca"}),e.jsx(C,{"data-step":"3",children:"Treinamento de truques: Ensine novos comandos e habilidades, desafiando seu cão a aprender"}),e.jsx(C,{"data-step":"4",children:"Rotação de brinquedos: Alterne os brinquedos disponíveis para manter a novidade e o interesse"}),e.jsx(C,{"data-step":"5",children:"Mudanças no ambiente: Altere os arranjos de móveis ou crie túneis e obstáculos pela casa"})]}),e.jsx(w,{children:"Dicas importantes para o sucesso:"}),e.jsxs(Q,{children:[e.jsx(s,{children:"Comece com desafios simples e aumente gradualmente a dificuldade"}),e.jsx(s,{children:"Observe o que mais interessa seu cão e adapte as atividades às suas preferências"}),e.jsx(s,{children:"Reveze entre diferentes tipos de enriquecimento para manter o interesse"}),e.jsx(s,{children:"Dedique pelo menos 15-30 minutos diários para atividades de estimulação mental"}),e.jsx(s,{children:"Participe das atividades junto com seu cão para fortalecer o vínculo"}),e.jsx(s,{children:"Recompense e comemore os sucessos, mantendo a experiência positiva e motivadora"})]})]})},{title:"Resumo Rápido",content:e.jsx(e.Fragment,{children:e.jsxs(Q,{children:[e.jsx(s,{children:"O enriquecimento mental é fundamental para o bem-estar do seu cão"}),e.jsx(s,{children:"Utilize brinquedos interativos, jogos de farejar e treinamento de novos truques"}),e.jsx(s,{children:"Reduza problemas comportamentais oferecendo estímulos mentais adequados"}),e.jsx(s,{children:"Varie as atividades para manter o interesse e o engajamento do seu cão"}),e.jsx(s,{children:"Dedique tempo diário para desafios mentais, assim como faz com exercícios físicos"}),e.jsx(s,{children:"Observe as preferências do seu cão e adapte as atividades às suas necessidades"}),e.jsx(s,{children:"Aumente gradualmente a dificuldade dos desafios conforme seu cão progride"}),e.jsx(s,{children:"Celebre os sucessos e mantenha uma experiência positiva de aprendizado"}),e.jsx(s,{children:"Utilize o enriquecimento mental em todas as fases da vida do seu cão"}),e.jsx(s,{children:"Combine diferentes tipos de estímulos para atender às diversas necessidades do seu pet"})]})})}];return e.jsxs(se,{children:[e.jsxs(de,{children:["Brinquedos Interativos e Enriquecimento Ambiental",localStorage.getItem("mental1_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(ce,{children:[i.map((n,c)=>e.jsx(le,{active:t===c,children:e.jsxs(me,{children:[e.jsx(pe,{children:n.title}),n.content]})},c)),e.jsxs(ue,{children:[e.jsx(ee,{onClick:x,disabled:t===0,children:"Anterior"}),e.jsx(xe,{children:i.map((n,c)=>e.jsx(be,{active:t===c,onClick:()=>b(c)},c))}),e.jsx(ee,{onClick:a,children:t===3?"Próxima Aula":"Próximo"})]})]})]})}const je="/assets/Mental2-DN1J_-8P.png",we=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,ke=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Ce=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,L=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${r=>r.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${r=>r.active?"auto":"none"};
  z-index: ${r=>r.active?1:0};
`,M=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 60px;

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
`,R=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;o.p`
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

  &:nth-child(4):before {
    content: "4️⃣";
  }

  &:nth-child(5):before {
    content: "5️⃣";
  }
`;const ye=o.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`,H=o.li`
  color: #4A5568;
  margin-bottom: 1rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
  line-height: 1.6;
  background: #F7FAFC;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #EBF8FF;
  }

  &:before {
    content: "•";
    color: #4299E1;
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  &:hover:before {
    transform: translateY(-50%) scale(1.2);
  }
`,Ee=o.div`
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
  z-index: 5;
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
`,Fe=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,Se=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${r=>r.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,ze=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Ae=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;o.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;const De=o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`,$e=o.div`
  background: #F7FAFC;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,Ie=o.h3`
  color: #2D3748;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,Be=o.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,E=o.li`
  color: #4A5568;
  padding: 1rem;
  position: relative;
  line-height: 1.6;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #F7FAFC;
  }

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #48BB78, #38A169);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(72, 187, 120, 0.2);
  }

  &:nth-child(1):before {
    content: "1";
  }

  &:nth-child(2):before {
    content: "2";
  }

  &:nth-child(3):before {
    content: "3";
  }

  &:nth-child(4):before {
    content: "4";
  }

  &:nth-child(5):before {
    content: "5";
  }
`,F=o.span`
  flex: 1;
  font-size: 1rem;
  color: #2D3748;
`,Pe=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  perspective: 1000px;
`,f=o.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #4299E1, #48BB78);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,S=o.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4299E1, #3182CE);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  ${f}:hover & {
    transform: scale(1.1);
  }
`,z=o.p`
  color: #4A5568;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
  transition: color 0.3s ease;

  ${f}:hover & {
    color: #2D3748;
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
`;function qe({onNextLesson:r}){const[t,d]=k.useState(0),{user:l}=O(),{addDocument:p}=W("progress"),{updateTraining:h,refreshData:u}=G(),a=async()=>{if(t===3){localStorage.setItem("mental2_completed","true"),localStorage.setItem("mental3_unlocked","true"),window.dispatchEvent(new Event("storage")),r();try{if(l){const i={lessonId:"mental2",moduleId:"mental",courseId:"9DwWIAtShVCPXyRPSbqF",userId:l.uid,status:"completed",completedAt:J.fromDate(new Date),duration:5};Promise.race([p(i),new Promise(n=>setTimeout(n,2e3))]).then(()=>{h({completedLessons:26,currentLevel:"advanced",lastSession:new Date,totalTime:310}).catch(n=>console.error("Erro ao atualizar dashboard:",n)),u().catch(n=>console.error("Erro ao atualizar dados:",n)),console.log("Progresso da lição Mental2 salvo com sucesso")}).catch(n=>{console.error("Erro ao salvar progresso da lição:",n)})}}catch(i){console.error("Erro ao processar progresso da lição:",i)}}else d(i=>(i+1)%4)},x=()=>{d(i=>(i-1+4)%4)},b=i=>{d(i)};return e.jsxs(we,{children:[e.jsxs(ke,{children:["Jogos para Gastar Energia Dentro de Casa",localStorage.getItem("mental2_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(Ce,{children:[e.jsx(L,{active:t===0,children:e.jsxs(M,{children:[e.jsx(R,{children:"Bem-vindo à Aula!"}),e.jsx(ze,{children:e.jsx(Ae,{src:je,alt:"Imagem ilustrativa de cão brincando dentro de casa"})}),e.jsx(De,{children:"Nesta aula, vamos aprender jogos e atividades divertidas para manter seu cão ativo mesmo dentro de casa."})]})}),e.jsx(L,{active:t===1,children:e.jsxs(M,{children:[e.jsx(R,{children:"Por que ensinar?"}),e.jsxs($e,{children:[e.jsx(Ie,{children:"Benefícios dos Jogos em Casa"}),e.jsxs(Be,{children:[e.jsx(E,{children:e.jsx(F,{children:"Mantém o cão ativo mesmo em dias chuvosos"})}),e.jsx(E,{children:e.jsx(F,{children:"Estimula o faro e a obediência"})}),e.jsx(E,{children:e.jsx(F,{children:"Fortalecimento do vínculo entre tutor e cão"})}),e.jsx(E,{children:e.jsx(F,{children:"Desenvolvimento de habilidades cognitivas"})}),e.jsx(E,{children:e.jsx(F,{children:"Reduz comportamentos destrutivos por tédio"})})]})]})]})}),e.jsx(L,{active:t===2,children:e.jsxs(M,{children:[e.jsx(R,{children:"Passo a Passo"}),e.jsxs(Pe,{children:[e.jsxs(f,{children:[e.jsx(S,{children:"1"}),e.jsx(z,{children:"Cabo de guerra: Use uma corda resistente para brincar, incentivando o cão a puxar (sempre controlando a intensidade)."})]}),e.jsxs(f,{children:[e.jsx(S,{children:"2"}),e.jsx(z,{children:"Esconde-esconde: Peça para o cão esperar, esconda-se e chame-o para te encontrar. Isso estimula o faro e a obediência."})]}),e.jsxs(f,{children:[e.jsx(S,{children:"3"}),e.jsx(z,{children:"Corrida de obstáculos caseira: Use almofadas, cadeiras e caixas para criar um pequeno percurso dentro de casa."})]}),e.jsxs(f,{children:[e.jsx(S,{children:"4"}),e.jsx(z,{children:"Busca de petiscos: Espalhe petiscos pela casa e incentive o cão a farejá-los."})]}),e.jsxs(f,{children:[e.jsx(S,{children:"5"}),e.jsx(z,{children:"Comandos intercalados: Peça ao cão para sentar, deitar, dar a pata e recompense com petiscos."})]})]})]})}),e.jsx(L,{active:t===3,children:e.jsxs(M,{children:[e.jsx(R,{children:"Resumo Rápido"}),e.jsxs(ye,{children:[e.jsx(H,{children:"Crie brincadeiras dentro de casa para gastar energia."}),e.jsx(H,{children:"Use desafios mentais como esconde-esconde e busca de petiscos."}),e.jsx(H,{children:"Intercale comandos de obediência com diversão."})]})]})}),e.jsxs(Ee,{children:[e.jsx(oe,{onClick:x,disabled:t===0,children:"Anterior"}),e.jsx(Fe,{children:[0,1,2,3].map(i=>e.jsx(Se,{active:t===i,onClick:()=>b(i)},i))}),e.jsx(oe,{onClick:a,children:t===3?"Próxima Aula":"Próximo"})]})]})]})}const Te="/assets/Mental1-DNSRd6YB.png",Le=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Me=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Re=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,N=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${r=>r.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${r=>r.active?"auto":"none"};
  z-index: ${r=>r.active?1:0};
`,_=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 60px;

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
`,X=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;o.p`
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

  &:nth-child(4):before {
    content: "4️⃣";
  }

  &:nth-child(5):before {
    content: "5️⃣";
  }
`;const Ne=o.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`,Z=o.li`
  color: #4A5568;
  margin-bottom: 1rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
  line-height: 1.6;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #F7FAFC;
  }

  &:before {
    content: "✓";
    color: white;
    position: absolute;
    left: 1rem;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #48BB78, #38A169);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(72, 187, 120, 0.2);
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scale(1.1);
  }
`,_e=o.div`
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
  z-index: 5;
`,re=o.button`
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
`,Xe=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,Ye=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${r=>r.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,Ue=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Ve=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;o.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;const Oe=o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`,We=o.div`
  background: #F7FAFC;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,Ge=o.h3`
  color: #2D3748;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,Je=o.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,A=o.li`
  color: #4A5568;
  padding: 1rem;
  position: relative;
  line-height: 1.6;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #F7FAFC;
  }

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #48BB78, #38A169);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(72, 187, 120, 0.2);
  }

  &:nth-child(1):before {
    content: "1";
  }

  &:nth-child(2):before {
    content: "2";
  }

  &:nth-child(3):before {
    content: "3";
  }

  &:nth-child(4):before {
    content: "4";
  }

  &:nth-child(5):before {
    content: "5";
  }
`,D=o.span`
  flex: 1;
  font-size: 1rem;
  color: #2D3748;
`,Qe=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  perspective: 1000px;
`,v=o.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #4299E1, #48BB78);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,$=o.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4299E1, #3182CE);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  ${v}:hover & {
    transform: scale(1.1);
  }
`,I=o.p`
  color: #4A5568;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
  transition: color 0.3s ease;

  ${v}:hover & {
    color: #2D3748;
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
`;function He({onNextLesson:r}){const[t,d]=k.useState(0),{user:l}=O(),{addDocument:p}=W("progress"),{updateTraining:h,refreshData:u}=G(),a=async()=>{if(t===3){localStorage.setItem("mental3_completed","true"),localStorage.setItem("mental4_unlocked","true"),window.dispatchEvent(new Event("storage")),r();try{if(l){const i={lessonId:"mental3",moduleId:"mental",courseId:"9DwWIAtShVCPXyRPSbqF",userId:l.uid,status:"completed",completedAt:J.fromDate(new Date),duration:5};Promise.race([p(i),new Promise(n=>setTimeout(n,2e3))]).then(()=>{h({completedLessons:27,currentLevel:"advanced",lastSession:new Date,totalTime:315}).catch(n=>console.error("Erro ao atualizar dashboard:",n)),u().catch(n=>console.error("Erro ao atualizar dados:",n)),console.log("Progresso da lição Mental3 salvo com sucesso")}).catch(n=>{console.error("Erro ao salvar progresso da lição:",n)})}}catch(i){console.error("Erro ao processar progresso da lição:",i)}}else d(i=>(i+1)%4)},x=()=>{d(i=>(i-1+4)%4)},b=i=>{d(i)};return e.jsxs(Le,{children:[e.jsxs(Me,{children:["Truques Simples para Ensinar ao Cão",localStorage.getItem("mental3_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(Re,{children:[e.jsx(N,{active:t===0,children:e.jsxs(_,{children:[e.jsx(X,{children:"Bem-vindo à Aula!"}),e.jsx(Ue,{children:e.jsx(Ve,{src:Te,alt:"Imagem ilustrativa de cão realizando truques"})}),e.jsx(Oe,{children:"Nesta aula, vamos aprender truques simples e divertidos que você pode ensinar ao seu cão para estimular seu desenvolvimento mental."})]})}),e.jsx(N,{active:t===1,children:e.jsxs(_,{children:[e.jsx(X,{children:"Por que ensinar?"}),e.jsxs(We,{children:[e.jsx(Ge,{children:"Benefícios dos Quebra-Cabeças"}),e.jsxs(Je,{children:[e.jsx(A,{children:e.jsx(D,{children:"Estimula o raciocínio e a resolução de problemas"})}),e.jsx(A,{children:e.jsx(D,{children:"Desenvolve a paciência e concentração"})}),e.jsx(A,{children:e.jsx(D,{children:"Reduz o estresse e ansiedade"})}),e.jsx(A,{children:e.jsx(D,{children:"Fortalecimento do vínculo entre tutor e cão"})}),e.jsx(A,{children:e.jsx(D,{children:"Previne o tédio e comportamentos destrutivos"})})]})]})]})}),e.jsx(N,{active:t===2,children:e.jsxs(_,{children:[e.jsx(X,{children:"Passo a Passo"}),e.jsxs(Qe,{children:[e.jsxs(v,{children:[e.jsx($,{children:"1"}),e.jsx(I,{children:"Comece com quebra-cabeças simples: Use caixas com petiscos fáceis de acessar."})]}),e.jsxs(v,{children:[e.jsx($,{children:"2"}),e.jsx(I,{children:"Introduza brinquedos interativos: Use brinquedos que liberam petiscos ao serem movidos."})]}),e.jsxs(v,{children:[e.jsx($,{children:"3"}),e.jsx(I,{children:"Desafios de busca: Esconda petiscos em diferentes níveis de dificuldade."})]}),e.jsxs(v,{children:[e.jsx($,{children:"4"}),e.jsx(I,{children:"Quebra-cabeças de nível médio: Use brinquedos que requerem mais manipulação."})]}),e.jsxs(v,{children:[e.jsx($,{children:"5"}),e.jsx(I,{children:"Desafios avançados: Introduza quebra-cabeças que combinam diferentes habilidades."})]})]})]})}),e.jsx(N,{active:t===3,children:e.jsxs(_,{children:[e.jsx(X,{children:"Resumo Rápido"}),e.jsxs(Ne,{children:[e.jsx(Z,{children:"Use petiscos como recompensa para motivar o aprendizado."}),e.jsx(Z,{children:"Mantenha as sessões de treino curtas e divertidas."}),e.jsx(Z,{children:"Celebre cada pequeno progresso do seu cão."})]})]})}),e.jsxs(_e,{children:[e.jsx(re,{onClick:x,disabled:t===0,children:"Anterior"}),e.jsx(Xe,{children:[0,1,2,3].map(i=>e.jsx(Ye,{active:t===i,onClick:()=>b(i)},i))}),e.jsx(re,{onClick:a,children:t===3?"Próxima Aula":"Próximo"})]})]})]})}const Ze="/assets/Mental4-DR5OPUiL.png",Ke=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,eo=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,oo=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,Y=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${r=>r.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${r=>r.active?"auto":"none"};
  z-index: ${r=>r.active?1:0};
`,U=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 60px;

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
`,V=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;o.p`
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

  &:nth-child(4):before {
    content: "4️⃣";
  }

  &:nth-child(5):before {
    content: "5️⃣";
  }
`;const ro=o.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`,K=o.li`
  color: #4A5568;
  margin-bottom: 1rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
  line-height: 1.6;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #F7FAFC;
  }

  &:before {
    content: "✓";
    color: white;
    position: absolute;
    left: 1rem;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #48BB78, #38A169);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(72, 187, 120, 0.2);
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scale(1.1);
  }
`,to=o.div`
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
  z-index: 5;
`,te=o.button`
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
`,io=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,no=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${r=>r.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,ao=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,so=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;o.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;const co=o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`,lo=o.div`
  background: #F7FAFC;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,mo=o.h3`
  color: #2D3748;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,po=o.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,B=o.li`
  color: #4A5568;
  padding: 1rem;
  position: relative;
  line-height: 1.6;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #F7FAFC;
  }

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #48BB78, #38A169);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(72, 187, 120, 0.2);
  }

  &:nth-child(1):before {
    content: "1";
  }

  &:nth-child(2):before {
    content: "2";
  }

  &:nth-child(3):before {
    content: "3";
  }

  &:nth-child(4):before {
    content: "4";
  }

  &:nth-child(5):before {
    content: "5";
  }
`,P=o.span`
  flex: 1;
  font-size: 1rem;
  color: #2D3748;
`,ho=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  perspective: 1000px;
`,j=o.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #4299E1, #48BB78);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,q=o.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4299E1, #3182CE);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  ${j}:hover & {
    transform: scale(1.1);
  }
`,T=o.p`
  color: #4A5568;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
  transition: color 0.3s ease;

  ${j}:hover & {
    color: #2D3748;
  }
`,uo=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,xo=o.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,bo=o.h2`
  color: #2D3748;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,go=o.p`
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,fo=o.button`
  background: #4299E1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #3182CE;
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
`;function vo({onNextLesson:r}){const[t,d]=k.useState(0),[l,p]=k.useState(!1),{user:h}=O(),{addDocument:u}=W("progress"),{updateTraining:a,refreshData:x}=G(),b=async()=>{if(t===3){localStorage.setItem("mental4_completed","true"),localStorage.setItem("training_completed","true"),window.dispatchEvent(new Event("storage"));try{if(h){const m={lessonId:"mental4",moduleId:"mental",courseId:"9DwWIAtShVCPXyRPSbqF",userId:h.uid,status:"completed",completedAt:J.fromDate(new Date),duration:5};Promise.race([u(m),new Promise(g=>setTimeout(g,2e3))]).then(()=>{a({completedLessons:28,currentLevel:"advanced",lastSession:new Date,totalTime:320,allCompleted:!0}).catch(g=>console.error("Erro ao atualizar dashboard:",g)),x().catch(g=>console.error("Erro ao atualizar dados:",g)),console.log("Progresso da lição Mental4 salvo com sucesso")}).catch(g=>{console.error("Erro ao salvar progresso da lição:",g)})}}catch(m){console.error("Erro ao processar progresso da lição:",m)}p(!0)}else d(m=>(m+1)%4)},i=()=>{d(m=>(m-1+4)%4)},n=m=>{d(m)},c=()=>{p(!1),window.location.href="/dashboard"};return e.jsxs(Ke,{children:[e.jsxs(eo,{children:["Introdução aos Esportes Caninos",localStorage.getItem("mental4_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(oo,{children:[e.jsx(Y,{active:t===0,children:e.jsxs(U,{children:[e.jsx(V,{children:"Bem-vindo à Aula!"}),e.jsx(ao,{children:e.jsx(so,{src:Ze,alt:"Imagem ilustrativa de cães praticando esportes"})}),e.jsx(co,{children:"Nesta aula, vamos conhecer os principais esportes caninos e como começar a praticá-los com seu cão."})]})}),e.jsx(Y,{active:t===1,children:e.jsxs(U,{children:[e.jsx(V,{children:"Por que ensinar?"}),e.jsxs(lo,{children:[e.jsx(mo,{children:"Benefícios da Consolidação"}),e.jsxs(po,{children:[e.jsx(B,{children:e.jsx(P,{children:"Revisão e prática dos conhecimentos adquiridos"})}),e.jsx(B,{children:e.jsx(P,{children:"Desenvolvimento de habilidades avançadas"})}),e.jsx(B,{children:e.jsx(P,{children:"Maior confiança e independência do cão"})}),e.jsx(B,{children:e.jsx(P,{children:"Preparação para novos desafios"})}),e.jsx(B,{children:e.jsx(P,{children:"Fortalecimento do vínculo e comunicação"})})]})]})]})}),e.jsx(Y,{active:t===2,children:e.jsxs(U,{children:[e.jsx(V,{children:"Passo a Passo"}),e.jsxs(ho,{children:[e.jsxs(j,{children:[e.jsx(q,{children:"1"}),e.jsx(T,{children:"Revisão dos exercícios anteriores: Pratique os quebra-cabeças e jogos já aprendidos."})]}),e.jsxs(j,{children:[e.jsx(q,{children:"2"}),e.jsx(T,{children:"Combinação de habilidades: Misture diferentes tipos de exercícios em uma mesma sessão."})]}),e.jsxs(j,{children:[e.jsx(q,{children:"3"}),e.jsx(T,{children:"Aumento da dificuldade: Adicione distrações ou aumente o tempo de espera."})]}),e.jsxs(j,{children:[e.jsx(q,{children:"4"}),e.jsx(T,{children:"Novos desafios: Introduza variações dos exercícios já conhecidos."})]}),e.jsxs(j,{children:[e.jsx(q,{children:"5"}),e.jsx(T,{children:"Prática independente: Incentive o cão a resolver problemas por conta própria."})]})]})]})}),e.jsx(Y,{active:t===3,children:e.jsxs(U,{children:[e.jsx(V,{children:"Resumo Rápido"}),e.jsxs(ro,{children:[e.jsx(K,{children:"Escolha um esporte que combine com o perfil do seu cão."}),e.jsx(K,{children:"Comece com treinos básicos e aumente gradualmente a dificuldade."}),e.jsx(K,{children:"Procure orientação profissional para praticar com segurança."})]})]})}),e.jsxs(to,{children:[e.jsx(te,{onClick:i,disabled:t===0,children:"Anterior"}),e.jsx(io,{children:[0,1,2,3].map(m=>e.jsx(no,{active:t===m,onClick:()=>n(m)},m))}),e.jsx(te,{onClick:b,children:t===3?"Concluir":"Próximo"})]})]}),l&&e.jsx(uo,{children:e.jsxs(xo,{children:[e.jsx(bo,{children:"Parabéns! 🎉"}),e.jsx(go,{children:"Você completou com sucesso o treinamento básico do seu pet! Agora ele está preparado com as habilidades fundamentais para uma vida mais feliz e saudável. Continue praticando e fortalecendo o vínculo com seu amigo de quatro patas!"}),e.jsx(fo,{onClick:c,children:"Voltar ao Início"})]})})]})}const jo=o.div`
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
`,Co=o.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`,yo=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,Eo=o.div`
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
`,So=o.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,zo=o.span`
  color: #007bff;
  font-size: 0.875rem;
  font-weight: 500;
`,Ao=o.button`
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
`,Do=o(Ao)`
  background-color: #6c757d;
  margin-right: 1rem;

  &:hover {
    background-color: #5a6268;
  }
`;function Bo(){const r=ie(),[t,d]=k.useState(null),l=[{id:"mental1",title:"Introdução aos Exercícios Mentais",description:"Aprenda a importância dos exercícios mentais para seu cão",duration:"15 min",component:ve,locked:!localStorage.getItem("mental1_unlocked")==="true"},{id:"mental2",title:"Jogos de Busca",description:"Como usar jogos de busca para estimular seu cão",duration:"15 min",component:qe,locked:localStorage.getItem("mental1_completed")!=="true"},{id:"mental3",title:"Quebra-Cabeças",description:"Técnicas de quebra-cabeças para cães",duration:"15 min",component:He,locked:localStorage.getItem("mental2_completed")!=="true"},{id:"mental4",title:"Consolidação e Prática",description:"Prática final e consolidação dos conhecimentos",duration:"15 min",component:vo,locked:localStorage.getItem("mental3_completed")!=="true"}],p=a=>{d(a)},h=()=>{const a=l.findIndex(x=>x.id===t.id);a<l.length-1&&d(l[a+1])},u=()=>{t?d(null):r("/content/training")};if(t){const a=t.component;return e.jsx(ne,{children:e.jsx(a,{onBack:u,onNextLesson:h})})}return e.jsxs(jo,{children:[e.jsxs(wo,{children:[e.jsx(Do,{onClick:u,children:"Voltar"}),e.jsx(ko,{children:"Exercícios Mentais e Diversão 🧩"})]}),e.jsx(Co,{children:"Atividades para estimular a mente do seu cão e fortalecer o vínculo entre vocês."}),e.jsx(yo,{children:l.map(a=>e.jsxs(Eo,{onClick:()=>!a.locked&&p(a),style:{opacity:a.locked?.5:1,cursor:a.locked?"not-allowed":"pointer",position:"relative"},children:[e.jsxs(Fo,{children:[a.title,localStorage.getItem(`${a.id}_completed`)==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsx(So,{children:a.description}),e.jsx(zo,{children:a.duration}),a.locked&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"2rem"},children:"🔒"})]},a.id))})]})}export{Bo as default};
