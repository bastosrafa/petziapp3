import{r as j,c as C,a5 as F,Z as E,j as e,a6 as z,u as Z,a4 as ce}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";import{M as ae}from"./ModuleCompletionPopup-BxaocN1j.js";const de="/assets/socialization1-BQ2xbryo.png",le=o.div`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  background: transparent;
`,me=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  margin-top: 0.2rem;
  text-align: center;
`,pe=o.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ue=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${r=>r.active?"flex":"none"};
  flex-direction: column;
  margin: 0 auto;
  max-width: 480px;
`,he=o.div`
  flex: 1;
  overflow-y: auto;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
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
`,ge=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,k=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,xe=o.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,T=o.li`
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
`;const be=o.div`
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
`,fe=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,ve=o.div`
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
`;o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;const q=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,l=o.li`
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
`,je=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,S=o.li`
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
`,we=o.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;function ke({onNextLesson:r}){const[t,c]=j.useState(0),{user:m}=C(),{addDocument:h}=F("progress"),{updateTraining:n,refreshData:b}=E(),d=async()=>{if(t===3){localStorage.setItem("socialization1_completed","true"),localStorage.setItem("socialization2_unlocked","true"),window.dispatchEvent(new Event("storage")),r();try{if(m){const i={lessonId:"socialization1",moduleId:"socialization",courseId:"9DwWIAtShVCPXyRPSbqF",userId:m.uid,status:"completed",completedAt:z.fromDate(new Date),duration:5};Promise.race([h(i),new Promise(s=>setTimeout(s,2e3))]).then(()=>{n({completedLessons:7,currentLevel:"beginner",lastSession:new Date,totalTime:35}).catch(s=>console.error("Erro ao atualizar dashboard:",s)),b().catch(s=>console.error("Erro ao atualizar dados:",s)),console.log("Progresso da lição Socialization1 salvo com sucesso")}).catch(s=>{console.error("Erro ao salvar progresso da lição:",s)})}}catch(i){console.error("Erro ao processar progresso da lição:",i)}}else c(i=>(i+1)%4)},f=()=>{c(i=>(i-1+4)%4)},u=i=>{c(i)},v=[{title:"Introdução à Socialização",content:e.jsxs(e.Fragment,{children:[e.jsx(we,{src:de,alt:"Introdução à Socialização"}),e.jsx(k,{children:"A socialização é o processo de expor seu cão a diferentes experiências, pessoas, animais e ambientes de forma positiva e controlada. É fundamental para o desenvolvimento de um cão confiante e equilibrado."}),e.jsx(k,{children:"Uma socialização adequada ajuda a prevenir problemas comportamentais e garante que seu cão se torne um companheiro equilibrado."})]})},{title:"Por que Socializar?",content:e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"A socialização adequada traz inúmeros benefícios para seu cão e para sua relação com ele:"}),e.jsxs(q,{children:[e.jsx(l,{children:"Desenvolvimento Emocional: Ajuda o cão a desenvolver confiança e equilíbrio emocional"}),e.jsx(l,{children:"Prevenção de Problemas: Reduz a probabilidade de medos, ansiedades e comportamentos agressivos"}),e.jsx(l,{children:"Adaptação Social: Facilita a convivência com pessoas, outros animais e diferentes ambientes"}),e.jsx(l,{children:"Qualidade de Vida: Cães bem socializados são mais felizes e têm uma vida mais rica e variada"}),e.jsx(l,{children:"Vínculo com o Tutor: Fortalece a relação e a confiança entre você e seu cão"})]}),e.jsx(k,{children:"Consequências da falta de socialização:"}),e.jsxs(je,{children:[e.jsx(S,{children:"Desenvolvimento de medos e fobias em situações cotidianas"}),e.jsx(S,{children:"Comportamentos reativos ou agressivos por insegurança"}),e.jsx(S,{children:"Dificuldade em lidar com mudanças de ambiente ou rotina"}),e.jsx(S,{children:"Estresse e ansiedade em situações sociais"}),e.jsx(S,{children:"Limitações na qualidade de vida por não poder frequentar ambientes diversos"})]})]})},{title:"Período Crítico e Como Socializar",content:e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"O período mais importante para a socialização é entre as 3 e 16 semanas de idade. Durante este tempo, o cão está mais receptivo a novas experiências."}),e.jsxs(xe,{children:[e.jsx(T,{"data-step":"1",children:"3-8 semanas: Período ideal para socialização com outros cães e pessoas"}),e.jsx(T,{"data-step":"2",children:"8-12 semanas: Momento crucial para exposição a diferentes ambientes e situações"}),e.jsx(T,{"data-step":"3",children:"12-16 semanas: Período para consolidar as experiências anteriores e introduzir novos desafios"})]}),e.jsx(k,{children:"Princípios básicos para uma socialização eficaz:"}),e.jsxs(q,{children:[e.jsx(l,{children:"Gradualidade: Introduza novas experiências de forma gradual e controlada"}),e.jsx(l,{children:"Positividade: Associe cada nova experiência a algo positivo, como petiscos ou brincadeiras"}),e.jsx(l,{children:"Segurança: Mantenha o cão seguro e confortável durante todo o processo"}),e.jsx(l,{children:"Consistência: Pratique regularmente e mantenha uma rotina de socialização"}),e.jsx(l,{children:"Paciência: Respeite o ritmo do seu cão e não force situações desconfortáveis"})]})]})},{title:"Resumo Rápido",content:e.jsx(e.Fragment,{children:e.jsxs(q,{children:[e.jsx(l,{children:"A socialização é fundamental para o desenvolvimento de um cão equilibrado e confiante"}),e.jsx(l,{children:"O período crítico de socialização é entre 3-16 semanas, mas deve continuar por toda a vida"}),e.jsx(l,{children:"Exponha seu cão gradualmente a diferentes pessoas, animais, ambientes e experiências"}),e.jsx(l,{children:"Associe sempre novas experiências a recompensas e reforços positivos"}),e.jsx(l,{children:"Respeite o ritmo e os limites do seu cão, sem forçar situações estressantes"}),e.jsx(l,{children:"Cães bem socializados têm menos problemas comportamentais e melhor qualidade de vida"}),e.jsx(l,{children:"A socialização fortalece o vínculo entre você e seu cão, criando confiança mútua"}),e.jsx(l,{children:"Mantenha a consistência na rotina de socialização, com exposições frequentes e variadas"}),e.jsx(l,{children:"Monitore a linguagem corporal do seu cão para identificar sinais de desconforto"}),e.jsx(l,{children:"Busque ajuda profissional se notar problemas específicos durante a socialização"})]})})}];return e.jsxs(le,{children:[e.jsxs(me,{children:["Introdução à Socialização",localStorage.getItem("socialization1_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(pe,{children:[v.map((i,s)=>e.jsx(ue,{active:t===s,children:e.jsxs(he,{children:[e.jsx(ge,{children:i.title}),i.content]})},s)),e.jsxs(be,{children:[e.jsx(ee,{onClick:f,disabled:t===0,children:"Anterior"}),e.jsx(fe,{children:v.map((i,s)=>e.jsx(ve,{active:t===s,onClick:()=>u(s)},s))}),e.jsx(ee,{onClick:d,children:t===3?"Próxima Aula":"Próximo"})]})]})]})}const ze="/assets/socialization2-leLfG1z7.png",Ce=o.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,Fe=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 0;
`,Ee=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`,Se=o.div`
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
`,De=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem;
  padding-bottom: 3rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  max-height: 500px;

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
  margin-bottom: 1rem;
  text-align: center;
`,Ae=o.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #4A5568;
  margin-bottom: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,D=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,p=o.li`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "•";
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;o(p)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`;o(p)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`;o(p)`
  background: #FAF5FF;
  border-left: 4px solid #9F7AEA;

  &:hover {
    background: #E9D8FD;
  }

  &:before {
    color: #9F7AEA;
  }
`;const ye=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${ze});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  transform: translateZ(0);
  backface-visibility: hidden;
`,Be=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
`,Pe=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,Ie=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${r=>r.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`;function Te({onNextLesson:r}){const[t,c]=j.useState(0),{user:m}=C(),{addDocument:h}=F("progress"),{updateTraining:n,refreshData:b}=E();Z();const d=[{title:"Socialização com Pessoas",subtitle:"Construindo confiança e relacionamentos",content:e.jsxs("div",{children:[e.jsx(ye,{}),e.jsx(Ae,{children:"A socialização com pessoas é fundamental para o desenvolvimento de um cão confiante e amigável. Vamos aprender como ajudar seu cão a se sentir confortável e seguro ao interagir com diferentes tipos de pessoas."})]})},{title:"Tipos de Pessoas",subtitle:"Diversidade de interações",content:e.jsx("div",{children:e.jsxs(D,{children:[e.jsxs(p,{children:[e.jsx("strong",{children:"Adultos:"})," Apresente seu cão a pessoas de diferentes alturas, vozes e movimentos."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Crianças:"})," Ensine seu cão a interagir de forma gentil e calma com crianças."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Idosos:"})," Ajuda seu cão a se adaptar a movimentos mais lentos e diferentes."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Pessoas com Necessidades Especiais:"})," Ensine seu cão a respeitar diferentes formas de locomoção e comunicação."]})]})})},{title:"Métodos de Socialização",subtitle:"Técnicas eficazes",content:e.jsx("div",{children:e.jsxs(D,{children:[e.jsxs(p,{children:[e.jsx("strong",{children:"Contato Visual:"})," Ensine seu cão a manter contato visual calmo com pessoas."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Toque Gentil:"})," Acostume seu cão a ser tocado de forma suave e respeitosa."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Comandos Básicos:"}),' Use comandos como "senta" e "fica" durante as interações.']}),e.jsxs(p,{children:[e.jsx("strong",{children:"Reforço Positivo:"})," Recompense comportamentos calmos e amigáveis."]})]})})},{title:"Ambientes e Situações",subtitle:"Contextos de socialização",content:e.jsx("div",{children:e.jsxs(D,{children:[e.jsxs(p,{children:[e.jsx("strong",{children:"Em Casa:"})," Convide pessoas para visitas controladas em seu ambiente."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Em Público:"})," Exponha gradualmente seu cão a diferentes locais públicos."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Durante Passeios:"})," Use os passeios como oportunidade para interações positivas."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Em Eventos:"})," Introduza seu cão a situações sociais de forma gradual."]})]})})},{title:"Dicas Importantes",subtitle:"Para uma socialização segura",content:e.jsx("div",{children:e.jsxs(D,{children:[e.jsxs(p,{children:[e.jsx("strong",{children:"Respeite o Ritmo:"})," Nunca force interações e respeite os limites do seu cão."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Supervisão Constante:"})," Mantenha sempre o controle da situação."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Petiscos e Recompensas:"})," Use reforços positivos para criar associações agradáveis."]}),e.jsxs(p,{children:[e.jsx("strong",{children:"Consistência:"})," Mantenha uma rotina regular de socialização."]})]})})}],f=async()=>{if(t<d.length-1)c(t+1);else try{localStorage.setItem("socialization2_completed","true"),await h({userId:m.uid,lessonId:"socialization2",moduleId:"socialization",completedAt:z.now(),progress:100}),await n({completedLessons:["socialization2"],currentLevel:"socialization",lastSession:z.now(),totalTime:0}),await b(),console.log("Progresso salvo com sucesso!"),r&&r()}catch(i){console.error("Erro ao salvar progresso:",i)}},u=()=>{t>0&&c(t-1)},v=i=>{c(i)};return e.jsx(e.Fragment,{children:e.jsxs(Ce,{children:[e.jsx(Fe,{children:"Socialização com Pessoas"}),e.jsxs(Ee,{children:[d.map((i,s)=>e.jsx(Se,{active:t===s,children:e.jsxs(De,{children:[i.subtitle&&e.jsx($e,{children:i.subtitle}),i.content]})},s)),e.jsxs(Be,{children:[e.jsx(oe,{onClick:u,disabled:t===0,children:"Anterior"}),e.jsx(Pe,{children:d.map((i,s)=>e.jsx(Ie,{active:t===s,onClick:()=>v(s)},s))}),e.jsx(oe,{onClick:f,children:t===d.length-1?"Concluir":"Próximo"})]})]})]})})}const qe="/assets/socialization3-CVe-FxlA.png",Le=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Re=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,_e=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,Me=o.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
  opacity: ${r=>r.active==="true"?1:0};
  transition: opacity 0.5s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: ${r=>r.active==="true"?"auto":"none"};
`,Ne=o.div`
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
`,Ve=o.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`,Xe=o.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`,$=o.ul`
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
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "•";
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,A=o(H)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`,w=o(H)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`,y=o(H)`
  background: #FAF5FF;
  border-left: 4px solid #9F7AEA;

  &:hover {
    background: #E9D8FD;
  }

  &:before {
    color: #9F7AEA;
  }
`,Oe=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${qe});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  transform: translateZ(0);
  backface-visibility: hidden;
`,Ue=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
  background: white;
  border-top: 1px solid #E2E8F0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,re=o.button`
  background-color: ${r=>r.disabled?"#CBD5E0":"#4299E1"};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.9rem;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  transition: background-color 0.2s;
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${r=>r.disabled?"#CBD5E0":"#3182CE"};
  }
`,Ye=o.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 0.5rem;
`,Ge=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${r=>r.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background-color 0.2s;
`;function We({onNextLesson:r}){const[t,c]=j.useState(0),{user:m}=C(),{addDocument:h}=F("progress"),{updateTraining:n,refreshData:b}=E(),d=[{title:"Socialização com Outros Cães",subtitle:"Construindo amizades caninas",content:e.jsxs("div",{children:[e.jsx(Oe,{}),e.jsx(Xe,{children:"A socialização com outros cães é essencial para o desenvolvimento social do seu pet. Vamos aprender como criar encontros seguros e positivos entre cães."})]})},{title:"Preparação para Encontros",subtitle:"Configurando para o sucesso",content:e.jsx("div",{children:e.jsxs($,{children:[e.jsxs(A,{children:[e.jsx("strong",{children:"Escolha do Local:"})," Opte por parques para cães ou áreas seguras e controladas."]}),e.jsxs(A,{children:[e.jsx("strong",{children:"Horário Adequado:"})," Evite horários de pico e escolha momentos mais tranquilos."]}),e.jsxs(A,{children:[e.jsx("strong",{children:"Equipamentos:"})," Use coleira e guia adequadas, e leve petiscos para reforço positivo."]}),e.jsxs(A,{children:[e.jsx("strong",{children:"Estado do Cão:"})," Certifique-se que seu cão está calmo e bem alimentado antes do encontro."]})]})})},{title:"Durante o Encontro",subtitle:"Interações seguras e positivas",content:e.jsx("div",{children:e.jsxs($,{children:[e.jsxs(w,{children:[e.jsx("strong",{children:"Apresentação Gradual:"})," Permita que os cães se cheirem e se conheçam aos poucos."]}),e.jsxs(w,{children:[e.jsx("strong",{children:"Linguagem Corporal:"})," Observe e interprete os sinais de comunicação canina."]}),e.jsxs(w,{children:[e.jsx("strong",{children:"Intervenção:"})," Esteja preparado para interromper se necessário, mas sem pânico."]}),e.jsxs(w,{children:[e.jsx("strong",{children:"Reforço Positivo:"})," Recompense comportamentos calmos e amigáveis."]})]})})},{title:"Tipos de Interação",subtitle:"Diferentes formas de socialização",content:e.jsx("div",{children:e.jsxs($,{children:[e.jsxs(w,{children:[e.jsx("strong",{children:"Brincadeiras:"})," Observe e incentive brincadeiras apropriadas e recíprocas."]}),e.jsxs(w,{children:[e.jsx("strong",{children:"Passeios em Grupo:"})," Organize passeios com outros cães para socialização em movimento."]}),e.jsxs(w,{children:[e.jsx("strong",{children:"Parques para Cães:"})," Utilize áreas específicas para interação canina."]}),e.jsxs(w,{children:[e.jsx("strong",{children:"Encontros Controlados:"})," Comece com encontros individuais antes de grupos maiores."]})]})})},{title:"Dicas Importantes",subtitle:"Para uma socialização segura",content:e.jsx("div",{children:e.jsxs($,{children:[e.jsxs(y,{children:[e.jsx("strong",{children:"Respeite os Limites:"})," Cada cão tem seu próprio ritmo de socialização."]}),e.jsxs(y,{children:[e.jsx("strong",{children:"Supervisão Constante:"})," Mantenha-se atento durante todo o encontro."]}),e.jsxs(y,{children:[e.jsx("strong",{children:"Petiscos e Recompensas:"})," Use reforços positivos para criar associações agradáveis."]}),e.jsxs(y,{children:[e.jsx("strong",{children:"Consistência:"})," Mantenha uma rotina regular de socialização."]})]})})}],f=async()=>{if(t===d.length-1){localStorage.setItem("socialization3_completed","true"),window.dispatchEvent(new Event("storage")),r();try{if(m){const i={lessonId:"socialization3",moduleId:"socialization",courseId:"9DwWIAtShVCPXyRPSbqF",userId:m.uid,status:"completed",completedAt:z.fromDate(new Date),duration:15};Promise.race([h(i),new Promise(s=>setTimeout(s,2e3))]).then(()=>{n({completedLessons:13,currentLevel:"intermediate",lastSession:new Date,totalTime:130}).catch(s=>console.error("Erro ao atualizar dashboard:",s)),b().catch(s=>console.error("Erro ao atualizar dados:",s)),console.log("Progresso da lição Socialization3 salvo com sucesso")}).catch(s=>{console.error("Erro ao salvar progresso da lição:",s)})}}catch(i){console.error("Erro ao processar progresso da lição:",i)}}else c(i=>i+1)},u=()=>{c(i=>i-1)},v=i=>{c(i)};return e.jsx(e.Fragment,{children:e.jsxs(Le,{children:[e.jsx(Re,{children:"Socialização com Outros Cães"}),e.jsxs(_e,{children:[d.map((i,s)=>e.jsx(Me,{active:(t===s).toString(),children:e.jsxs(Ne,{children:[e.jsx(Ve,{children:i.title}),i.content]})},s)),e.jsxs(Ue,{children:[e.jsx(re,{onClick:u,disabled:t===0,children:"Anterior"}),e.jsx(Ye,{children:d.map((i,s)=>e.jsx(Ge,{active:t===s,onClick:()=>v(s)},s))}),e.jsx(re,{onClick:f,children:t===d.length-1?"Concluir":"Próximo"})]})]})]})})}const Ze="/assets/socialization4-DpXJwB0Z.png",He=o.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,Qe=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 0;
`,Je=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`,Ke=o.div`
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
`,eo=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem;
  padding-bottom: 3rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  max-height: 500px;

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
`,oo=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,ro=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4A5568;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,L=o.ul`
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
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "•";
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,R=o(Q)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`,_=o(Q)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`,M=o(Q)`
  background: #FAF5FF;
  border-left: 4px solid #9F7AEA;

  &:hover {
    background: #E9D8FD;
  }

  &:before {
    color: #9F7AEA;
  }
`,to=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${Ze});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  transform: translateZ(0);
  backface-visibility: hidden;
`,io=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
`,so=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,no=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${r=>r.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`;function ao({onNextLesson:r}){const[t,c]=j.useState(0),[m,h]=j.useState(!1),{user:n}=C(),{addDocument:b}=F("progress"),{updateTraining:d,refreshData:f}=E(),u=[{title:"Controle de Impulsos",subtitle:"Aprendendo a esperar",content:e.jsxs("div",{children:[e.jsx(to,{}),e.jsx(ro,{children:"O controle de impulsos é fundamental para um cão bem-comportado e equilibrado. Vamos aprender técnicas para ajudar seu cão a desenvolver autocontrole."})]})},{title:"Exercícios Básicos",subtitle:"Começando com o simples",content:e.jsx("div",{children:e.jsxs(L,{children:[e.jsxs(R,{children:[e.jsx("strong",{children:"Ficar Parado:"})," Ensine seu cão a permanecer calmo em diferentes situações."]}),e.jsxs(R,{children:[e.jsx("strong",{children:"Esperar por Comida:"})," Treine para que ele aguarde sua permissão antes de comer."]}),e.jsxs(R,{children:[e.jsx("strong",{children:"Controle na Porta:"})," Aprenda a não sair correndo quando a porta é aberta."]})]})})},{title:"Técnicas de Treinamento",subtitle:"Métodos eficazes",content:e.jsx("div",{children:e.jsxs(L,{children:[e.jsxs(_,{children:[e.jsx("strong",{children:"Comandos Claros:"}),' Use comandos consistentes como "espera" e "fica".']}),e.jsxs(_,{children:[e.jsx("strong",{children:"Reforço Positivo:"})," Recompense o comportamento calmo e controlado."]}),e.jsxs(_,{children:[e.jsx("strong",{children:"Progressão Gradual:"})," Aumente a dificuldade dos exercícios aos poucos."]})]})})},{title:"Dicas Importantes",subtitle:"Para um treinamento eficaz",content:e.jsx("div",{children:e.jsxs(L,{children:[e.jsxs(M,{children:[e.jsx("strong",{children:"Paciência:"})," Cada cão tem seu próprio ritmo de aprendizado."]}),e.jsxs(M,{children:[e.jsx("strong",{children:"Consistência:"})," Mantenha a rotina de treinos e comandos."]}),e.jsxs(M,{children:[e.jsx("strong",{children:"Ambiente Controlado:"})," Comece em locais tranquilos e sem distrações."]})]})})}],v=async()=>{if(t===u.length-1){localStorage.setItem("socialization4_completed","true"),window.dispatchEvent(new Event("storage")),r();try{if(n){const g={lessonId:"socialization4",moduleId:"socialization",courseId:"9DwWIAtShVCPXyRPSbqF",userId:n.uid,status:"completed",completedAt:z.fromDate(new Date),duration:15};Promise.race([b(g),new Promise(a=>setTimeout(a,2e3))]).then(()=>{d({completedLessons:14,currentLevel:"intermediate",lastSession:new Date,totalTime:145}).catch(a=>console.error("Erro ao atualizar dashboard:",a)),f().catch(a=>console.error("Erro ao atualizar dados:",a)),console.log("Progresso da lição Socialization4 salvo com sucesso")}).catch(a=>{console.error("Erro ao salvar progresso da lição:",a)})}}catch(g){console.error("Erro ao processar progresso da lição:",g)}}else c(g=>g+1)},i=()=>{t>0&&c(t-1)},s=g=>{c(g)},I=()=>{h(!1),r&&r()};return e.jsxs(e.Fragment,{children:[e.jsxs(He,{children:[e.jsx(Qe,{children:"Controlando Impulsos"}),e.jsxs(Je,{children:[u.map((g,a)=>e.jsx(Ke,{active:t===a,children:e.jsxs(eo,{children:[g.subtitle&&e.jsx(oo,{children:g.subtitle}),g.content]})},a)),e.jsxs(io,{children:[e.jsx(te,{onClick:i,disabled:t===0,children:"Anterior"}),e.jsx(so,{children:u.map((g,a)=>e.jsx(no,{active:t===a,onClick:()=>s(a)},a))}),e.jsx(te,{onClick:v,children:t===u.length-1?"Concluir":"Próximo"})]})]})]}),m&&e.jsx(ae,{onClose:I,moduleName:"Socialização",nextModule:"Comportamento"})]})}const co="/assets/socialization5-D-FyKjOj.png",lo=o.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`,mo=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 0;
`,po=o.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  position: relative;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,uo=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
`,ho=o.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 1rem;
  margin-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  padding-left: 1rem;
  padding-right: 1rem;

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
`,go=o.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`,xo=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
  background: white;
  border-top: 1px solid #E2E8F0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,ie=o.button`
  background-color: ${r=>r.disabled?"#CBD5E0":"#4299E1"};
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  transition: background-color 0.2s;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${r=>r.disabled?"#CBD5E0":"#3182CE"};
  }
`,bo=o.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 0.5rem;
`,fo=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${r=>r.$active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background-color 0.2s;
`,B=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4A5568;
  margin-bottom: 1rem;
`,N=o.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,J=o.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "•";
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,V=o(J)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`,X=o(J)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`,O=o(J)`
  background: #FAF5FF;
  border-left: 4px solid #9F7AEA;

  &:hover {
    background: #E9D8FD;
  }

  &:before {
    color: #9F7AEA;
  }
`;o.h3`
  font-size: 1.25rem;
  color: #2D3748;
  margin-bottom: 1rem;
`;const vo=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${co});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  transform: translateZ(0);
  backface-visibility: hidden;
`;function jo({onNextLesson:r}){const[t,c]=j.useState(0);C(),F("progress"),E();const m=[{title:"Ambientes Desafiadores",subtitle:"Expandindo os limites",content:e.jsxs("div",{children:[e.jsx(vo,{}),e.jsx(B,{children:"A socialização com diferentes ambientes é crucial para um cão confiante e adaptável. Vamos aprender como ajudar seu cão a se sentir seguro em diversos contextos."})]})},{title:"Preparação",content:e.jsxs("div",{children:[e.jsx(B,{children:"Antes de expor seu cão a ambientes desafiadores:"}),e.jsxs(N,{children:[e.jsx(V,{children:"Comece com ambientes mais tranquilos e conhecidos"}),e.jsx(V,{children:"Use equipamentos de segurança adequados"}),e.jsx(V,{children:"Leve petiscos para reforço positivo"})]})]})},{title:"Tipos de Ambientes",content:e.jsxs("div",{children:[e.jsx(B,{children:"Ambientes que podem ser desafiadores:"}),e.jsxs(N,{children:[e.jsx(X,{children:"Centros urbanos com tráfego e multidões"}),e.jsx(X,{children:"Locais com sons altos e inesperados"}),e.jsx(X,{children:"Espaços com diferentes superfícies e texturas"})]})]})},{title:"Dicas Importantes",content:e.jsxs("div",{children:[e.jsx(B,{children:"Para uma exposição segura e positiva:"}),e.jsxs(N,{children:[e.jsx(O,{children:"Respeite o ritmo do seu cão"}),e.jsx(O,{children:"Mantenha sessões curtas e positivas"}),e.jsx(O,{children:"Observe os sinais de estresse"})]})]})}],h=async()=>{t===m.length-1?(localStorage.setItem("socialization5_completed","true"),window.dispatchEvent(new Event("storage")),r()):c(d=>d+1)},n=()=>{c(d=>d-1)},b=d=>{c(d)};return e.jsx(e.Fragment,{children:e.jsxs(lo,{children:[e.jsx(mo,{children:"Ambientes Desafiadores"}),e.jsx(po,{children:e.jsxs(uo,{children:[e.jsx(go,{children:m[t].title}),e.jsx(ho,{children:m[t].content}),e.jsxs(xo,{children:[e.jsx(ie,{onClick:n,disabled:t===0,children:"Anterior"}),e.jsx(bo,{children:m.map((d,f)=>e.jsx(fo,{$active:f===t,onClick:()=>b(f)},f))}),e.jsx(ie,{onClick:h,children:t===m.length-1?"Concluir":"Próximo"})]})]})})]})})}const wo="/assets/socialization6-Ce4WEVEl.png",ko=o.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,zo=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 0;
`,Co=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`,Fo=o.div`
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
`,Eo=o.div`
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
`,So=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,P=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4A5568;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,U=o.ul`
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
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "•";
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,Y=o(K)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`,G=o(K)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`,W=o(K)`
  background: #FAF5FF;
  border-left: 4px solid #9F7AEA;

  &:hover {
    background: #E9D8FD;
  }

  &:before {
    color: #9F7AEA;
  }
`,Do=o.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${wo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  transform: translateZ(0);
  backface-visibility: hidden;
`,$o=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
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
`,Ao=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,yo=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${r=>r.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`;function Bo(){const r=Z(),[t,c]=j.useState(0),[m,h]=j.useState(!1),{user:n}=C(),{addDocument:b}=F("progress"),{updateTraining:d,refreshData:f}=E(),u=[{title:"Consolidação e Prática",subtitle:"Revisão e aplicação",content:e.jsxs("div",{children:[e.jsx(Do,{}),e.jsx(P,{children:"A socialização em diferentes ambientes é essencial para um cão adaptável e confiante. Vamos aprender como ajudar seu cão a se sentir seguro em diversos contextos."})]})},{title:"Revisão dos Conceitos",content:e.jsxs("div",{children:[e.jsx(P,{children:"Pontos principais para revisar:"}),e.jsxs(U,{children:[e.jsx(Y,{children:"Importância da socialização precoce"}),e.jsx(Y,{children:"Período crítico de desenvolvimento"}),e.jsx(Y,{children:"Exposição gradual e positiva"})]})]})},{title:"Plano de Prática",content:e.jsxs("div",{children:[e.jsx(P,{children:"Como implementar na prática:"}),e.jsxs(U,{children:[e.jsx(G,{children:"Crie uma rotina de socialização"}),e.jsx(G,{children:"Mantenha sessões curtas e positivas"}),e.jsx(G,{children:"Registre o progresso do seu cão"})]})]})},{title:"Dicas Finais",content:e.jsxs("div",{children:[e.jsx(P,{children:"Para um treinamento bem-sucedido:"}),e.jsxs(U,{children:[e.jsx(W,{children:"Seja consistente e paciente"}),e.jsx(W,{children:"Celebre pequenas conquistas"}),e.jsx(W,{children:"Mantenha o treinamento divertido"})]})]})}],v=async()=>{if(t===u.length-1){localStorage.setItem("socialization6_completed","true"),window.dispatchEvent(new Event("storage")),h(!0);try{if(n){const a={lessonId:"socialization6",moduleId:"socialization",courseId:"9DwWIAtShVCPXyRPSbqF",userId:n.uid,status:"completed",completedAt:z.fromDate(new Date),duration:15};Promise.race([b(a),new Promise(x=>setTimeout(x,2e3))]).then(()=>{d({completedLessons:16,currentLevel:"intermediate",lastSession:new Date,totalTime:160}).catch(x=>console.error("Erro ao atualizar dashboard:",x)),f().catch(x=>console.error("Erro ao atualizar dados:",x)),console.log("Progresso da lição Socialization6 salvo com sucesso")}).catch(x=>{console.error("Erro ao salvar progresso da lição:",x)})}}catch(a){console.error("Erro ao processar progresso da lição:",a)}}else c(a=>a+1)},i=()=>{c(a=>a-1)},s=a=>{c(a)},I=()=>{h(!1)},g=()=>{localStorage.setItem("hygiene1_unlocked","true"),localStorage.setItem("hygiene_unlocked","true"),r("/content/training/hygiene")};return e.jsxs(e.Fragment,{children:[e.jsxs(ko,{children:[e.jsx(zo,{children:"Consolidação da Socialização"}),e.jsxs(Co,{children:[u.map((a,x)=>e.jsx(Fo,{active:t===x,children:e.jsxs(Eo,{children:[a.subtitle&&e.jsx(So,{children:a.subtitle}),a.content]})},x)),e.jsxs($o,{children:[e.jsx(se,{onClick:i,disabled:t===0,children:"Anterior"}),e.jsx(Ao,{children:u.map((a,x)=>e.jsx(yo,{active:t===x,onClick:()=>s(x)},x))}),e.jsx(se,{onClick:v,children:t===u.length-1?"Concluir":"Próximo"})]})]})]}),m&&e.jsx(ae,{onClose:I,onNextModule:g})]})}const ne=o.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Po=o.div`
  text-align: center;
  margin-bottom: 3rem;
`,Io=o.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`,To=o.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`,qo=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Lo=o.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`,Ro=o.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`,_o=o.p`
  color: #666;
  margin-bottom: 1rem;
`,Mo=o.span`
  display: inline-block;
  background: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #666;
`;o.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #45a049;
  }
`;const Oo=()=>{Z();const[r,t]=j.useState(null),c=[{id:"socialization1",title:"Introdução à Socialização",description:"Aprenda a socializar seu cão com pessoas e outros animais",duration:"15 min",component:ke,locked:!localStorage.getItem("socialization1_unlocked")==="true"},{id:"socialization2",title:"Socialização com Pessoas",description:"Como apresentar seu cão a diferentes tipos de pessoas",duration:"15 min",component:Te,locked:localStorage.getItem("socialization1_completed")!=="true"},{id:"socialization3",title:"Socialização com Outros Cães",description:"Técnicas para socialização segura com outros cães",duration:"15 min",component:We,locked:localStorage.getItem("socialization2_completed")!=="true"},{id:"socialization4",title:"Controle de Impulsos",description:"Aprenda a controlar a excitação do seu cão",duration:"15 min",component:ao,locked:localStorage.getItem("socialization3_completed")!=="true"},{id:"socialization5",title:"Ambientes Desafiadores",description:"Como lidar com diferentes ambientes e situações",duration:"15 min",component:jo,locked:localStorage.getItem("socialization4_completed")!=="true"},{id:"socialization6",title:"Consolidação e Prática",description:"Prática final e consolidação dos conhecimentos",duration:"15 min",component:Bo,locked:localStorage.getItem("socialization5_completed")!=="true"}],m=n=>{t(n)},h=()=>{const n=c.findIndex(b=>b.id===r.id);n<c.length-1&&t(c[n+1])};if(r){const n=r.component;return e.jsx(ne,{children:e.jsx(ce,{children:e.jsx(n,{onNextLesson:h})})})}return e.jsxs(ne,{children:[e.jsxs(Po,{children:[e.jsx(Io,{children:"Socialização e Controle 🎭"}),e.jsx(To,{children:"Desenvolva a sociabilidade e o controle de impulsos do seu cão através de técnicas e exercícios práticos."})]}),e.jsx(qo,{children:c.map(n=>e.jsxs(Lo,{onClick:()=>!n.locked&&m(n),style:{opacity:n.locked?.5:1,cursor:n.locked?"not-allowed":"pointer",position:"relative"},children:[e.jsxs(Ro,{children:[n.title,localStorage.getItem(`${n.id}_completed`)==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsx(_o,{children:n.description}),e.jsx(Mo,{children:n.duration}),n.locked&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"2rem"},children:"🔒"})]},n.id))})]})};export{Oo as default};
