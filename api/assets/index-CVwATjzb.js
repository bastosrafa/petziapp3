import{r as A,c as he,a5 as xe,Z as ue,j as e,a6 as ge,u as $e,a4 as Te}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";import{M as Ae}from"./ModuleCompletionPopup-BxaocN1j.js";import{t as Le}from"./config-CJOQn1u_.js";import"./dog-BTx2Crur.js";import"./users-DQaJ2eXR.js";import"./droplets-m0QRMEgr.js";import"./triangle-alert-8qwZl-cm.js";const qe="/assets/hygiene1-C_8sVivr.png",He=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Me=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Ne=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,Re=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${t=>t.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${t=>t.active?"auto":"none"};
  z-index: ${t=>t.active?1:0};
`,be=o.div`
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
`,_e=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,Ye=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
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
`;const Xe=o.div`
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
`,je=o.button`
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
`,Ue=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,Ge=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${t=>t.active?"#4299E1":"#CBD5E0"};
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
`;const fe=o.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;o.li`
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
`;o.ul`
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
`;const Ve=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Oe=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,_=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,Y=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,X=o.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
`,U=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`,G=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`,We=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,V=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,O=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,W=o.div`
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
`,Z=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`,J=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`;function Ze({onNextLesson:t}){const[i,a]=A.useState(0),{user:d}=he(),{addDocument:u}=xe("progress"),{updateTraining:h,refreshData:m}=ue(),s=[{title:"Introdução à Higiene",content:e.jsxs(e.Fragment,{children:[e.jsx(Ve,{src:qe,alt:"Introdução à Higiene"}),e.jsx(Ye,{children:"Nesta aula, vamos aprender sobre a importância da higiene regular para a saúde e bem-estar do seu cão."})]})},{title:"Por que a Higiene é Importante?",content:e.jsxs(be,{children:[e.jsx(fe,{children:"Manter seu cão limpo e bem cuidado traz diversos benefícios:"}),e.jsxs(Oe,{children:[e.jsxs(_,{children:[e.jsxs(Y,{children:[e.jsx(X,{children:"🛁"}),e.jsx(U,{children:"Saúde e Prevenção"})]}),e.jsx(G,{children:"Reduz o risco de infecções e mantém a pele e pelagem saudáveis"})]}),e.jsxs(_,{children:[e.jsxs(Y,{children:[e.jsx(X,{children:"👃"}),e.jsx(U,{children:"Conforto e Bem-estar"})]}),e.jsx(G,{children:"Mantém o cão e o ambiente mais agradáveis, livre de odores"})]}),e.jsxs(_,{children:[e.jsxs(Y,{children:[e.jsx(X,{children:"💪"}),e.jsx(U,{children:"Vínculo e Confiança"})]}),e.jsx(G,{children:"Fortalece a relação entre você e seu pet durante os momentos de cuidado"})]}),e.jsxs(_,{children:[e.jsxs(Y,{children:[e.jsx(X,{children:"🔍"}),e.jsx(U,{children:"Monitoramento da Saúde"})]}),e.jsx(G,{children:"Permite identificar alterações na pele, pelagem ou comportamento precocemente"})]})]})]})},{title:"Rotina Básica de Higiene",content:e.jsxs(be,{children:[e.jsx(fe,{children:"Estabeleça uma rotina regular de cuidados:"}),e.jsxs(We,{children:[e.jsxs(V,{children:[e.jsxs(O,{children:[e.jsx(W,{children:"1"}),e.jsx(Z,{children:"Escovação Diária"})]}),e.jsx(J,{children:"Remove pelos mortos e previne a formação de nós na pelagem"})]}),e.jsxs(V,{children:[e.jsxs(O,{children:[e.jsx(W,{children:"2"}),e.jsx(Z,{children:"Banho Mensal"})]}),e.jsx(J,{children:"Use produtos específicos para cães e mantenha a pele hidratada"})]}),e.jsxs(V,{children:[e.jsxs(O,{children:[e.jsx(W,{children:"3"}),e.jsx(Z,{children:"Corte de Unhas"})]}),e.jsx(J,{children:"Mantenha as unhas curtas e saudáveis para evitar desconforto"})]}),e.jsxs(V,{children:[e.jsxs(O,{children:[e.jsx(W,{children:"4"}),e.jsx(Z,{children:"Limpeza de Ouvidos"})]}),e.jsx(J,{children:"Previne infecções e acúmulo de cera nos ouvidos"})]})]})]})}],x=async()=>{if(i===s.length-1)try{if(localStorage.setItem("hygiene1_completed","true"),window.dispatchEvent(new Event("storage")),d){const r={lessonId:"hygiene1",moduleId:"hygiene",courseId:"9DwWIAtShVCPXyRPSbqF",userId:d.uid,status:"completed",completedAt:ge.fromDate(new Date),duration:15};await u(r),await h({completedLessons:16,currentLevel:"intermediate",lastSession:new Date,totalTime:175}),await m(),console.log("Progresso da lição Hygiene1 salvo com sucesso")}t()}catch(r){console.error("Erro ao salvar progresso da lição:",r),t()}else a(r=>r+1)},B=()=>{a(r=>Math.max(0,r-1))},p=r=>{a(r)};return e.jsxs(He,{children:[e.jsxs(Me,{children:["Introdução à Higiene",localStorage.getItem("hygiene1_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(Ne,{children:[s.map((r,n)=>e.jsx(Re,{active:i===n,children:e.jsxs(be,{children:[e.jsx(_e,{children:r.title}),r.content]})},n)),e.jsxs(Xe,{children:[e.jsx(je,{onClick:B,disabled:i===0,children:"Anterior"}),e.jsx(Ue,{children:s.map((r,n)=>e.jsx(Ge,{active:i===n,onClick:()=>p(n)},n))}),e.jsx(je,{onClick:x,children:i===s.length-1?"Próxima Aula":"Próximo"})]})]})]})}const Je="/assets/Hygiene2-CLw6Mcly.png",Ke=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Qe=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,eo=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,oo=o.div`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${t=>t.active?"flex":"none"};
  flex-direction: column;
`,L=o.div`
  flex: 1;
  overflow-y: auto;
  max-width: 430px;
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
`,ro=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,to=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
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
`;const so=o.div`
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
`,ve=o.button`
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
  gap: 0.5rem;
  margin-top: 1rem;
`,no=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${t=>t.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,ao=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,q=o.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
`,we=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,g=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,b=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,j=o.div`
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
`,f=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`,v=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`,lo=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,K=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,Q=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,ee=o.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
`,oe=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`,re=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`,ye=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,I=o.li`
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
`;o.ul`
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
`;function co({onNextLesson:t}){const[i,a]=A.useState(0),{user:d}=he(),{addDocument:u}=xe("progress"),{updateTraining:h,refreshData:m}=ue(),s=[{title:"Banho e Tosa",content:e.jsxs(e.Fragment,{children:[e.jsx(ao,{src:Je,alt:"Cão sendo banhado e tosado"}),e.jsx(to,{children:"Nesta aula, vamos aprender sobre a importância do banho e tosa para a saúde e bem-estar do seu cão."})]})},{title:"Preparação para o Banho",content:e.jsxs(L,{children:[e.jsx(q,{children:"Antes de começar o banho, é importante preparar tudo corretamente:"}),e.jsxs(we,{children:[e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"1"}),e.jsx(f,{children:"Escovação Prévia"})]}),e.jsx(v,{children:"Remova todos os nós e pelos mortos antes do banho"})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"2"}),e.jsx(f,{children:"Produtos Necessários"})]}),e.jsx(v,{children:"Separe shampoo, condicionador e toalhas específicos para cães"})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"3"}),e.jsx(f,{children:"Local Adequado"})]}),e.jsx(v,{children:"Escolha um local seguro, quente e com boa iluminação"})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"4"}),e.jsx(f,{children:"Proteção dos Ouvidos"})]}),e.jsx(v,{children:"Use algodão para proteger os ouvidos da entrada de água"})]})]})]})},{title:"Passo a Passo do Banho",content:e.jsxs(L,{children:[e.jsx(q,{children:"Siga estes passos para um banho seguro e eficiente:"}),e.jsxs(we,{children:[e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"1"}),e.jsx(f,{children:"Molhe o Cão"})]}),e.jsx(v,{children:"Use água morna e molhe todo o corpo, evitando o rosto"})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"2"}),e.jsx(f,{children:"Aplique o Shampoo"})]}),e.jsx(v,{children:"Massageie suavemente da cabeça à cauda, evitando os olhos"})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"3"}),e.jsx(f,{children:"Enxágue Bem"})]}),e.jsx(v,{children:"Remova todo o shampoo para evitar irritações na pele"})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"4"}),e.jsx(f,{children:"Seque o Cão"})]}),e.jsx(v,{children:"Use toalhas e secador em temperatura baixa, se necessário"})]})]})]})},{title:"Dicas de Tosa",content:e.jsxs(L,{children:[e.jsx(q,{children:"Algumas dicas importantes para a tosa do seu cão:"}),e.jsxs(lo,{children:[e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(ee,{children:"✂️"}),e.jsx(oe,{children:"Frequência Ideal"})]}),e.jsx(re,{children:"A cada 4-6 semanas, dependendo da raça e tipo de pelo"})]}),e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(ee,{children:"🪒"}),e.jsx(oe,{children:"Equipamentos"})]}),e.jsx(re,{children:"Use tesouras e máquinas específicas para cães"})]}),e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(ee,{children:"👀"}),e.jsx(oe,{children:"Áreas Sensíveis"})]}),e.jsx(re,{children:"Tenha cuidado especial com rosto, patas e áreas íntimas"})]}),e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(ee,{children:"💇"}),e.jsx(oe,{children:"Profissional"})]}),e.jsx(re,{children:"Considere um profissional para tosas mais complexas"})]})]})]})},{title:"Resumo e Próximos Passos",content:e.jsxs(L,{children:[e.jsx(q,{children:"Parabéns! Você aprendeu sobre como dar banho e tosar seu cão de forma adequada."}),e.jsxs(ye,{children:[e.jsx(I,{children:"Prepare-se com antecedência reunindo os produtos e ferramentas necessárias"}),e.jsx(I,{children:"Siga a sequência correta: escovação, molhar, aplicar shampoo, enxaguar e secar"}),e.jsx(I,{children:"Use produtos específicos para cães e adaptados ao tipo de pelagem"}),e.jsx(I,{children:"Mantenha uma rotina consistente de banho e tosa para a saúde da pele e pelo"})]}),e.jsx(q,{children:"Próximos passos:"}),e.jsxs(ye,{children:[e.jsx(I,{children:"Estabeleça uma rotina de banho adequada à raça e necessidade do seu cão"}),e.jsx(I,{children:"Pratique a escovação diária para manter a pelagem saudável e livre de nós"}),e.jsx(I,{children:"Continue para a próxima aula para aprender sobre outras práticas de higiene importantes"})]})]})}],x=async()=>{if(i===s.length-1)try{if(localStorage.setItem("hygiene2_completed","true"),window.dispatchEvent(new Event("storage")),d){const r={lessonId:"hygiene2",moduleId:"hygiene",courseId:"9DwWIAtShVCPXyRPSbqF",userId:d.uid,status:"completed",completedAt:ge.fromDate(new Date),duration:15};await u(r),await h({completedLessons:17,currentLevel:"intermediate",lastSession:new Date,totalTime:190}),await m(),console.log("Progresso da lição Hygiene2 salvo com sucesso")}t()}catch(r){console.error("Erro ao salvar progresso da lição:",r),t()}else a(r=>r+1)},B=()=>{i>0&&a(r=>r-1)},p=r=>{a(r)};return e.jsxs(Ke,{children:[e.jsxs(Qe,{children:["Banho e Tosa",localStorage.getItem("hygiene2_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(eo,{children:[s.map((r,n)=>e.jsx(oo,{active:i===n,children:e.jsxs(L,{children:[e.jsx(ro,{children:r.title}),r.content]})},n)),e.jsxs(so,{children:[e.jsx(ve,{onClick:B,disabled:i===0,children:"Anterior"}),e.jsx(io,{children:s.map((r,n)=>e.jsx(no,{active:i===n,onClick:()=>p(n)},n))}),e.jsx(ve,{onClick:x,children:i===s.length-1?"Próxima Aula":"Próximo"})]})]})]})}const po="/assets/Hygiene3-J_gBjGZo.png",mo=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,ho=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,xo=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,uo=o.div`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${t=>t.active?"flex":"none"};
  flex-direction: column;
`,H=o.div`
  flex: 1;
  overflow-y: auto;
  max-width: 430px;
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
`,go=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,bo=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
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
`;const jo=o.div`
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
`,ke=o.button`
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
`,fo=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,vo=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${t=>t.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,wo=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,M=o.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
`,yo=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,te=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,se=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,ie=o.div`
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
`,ne=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`,ae=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`,Ee=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,w=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,y=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,k=o.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
`,E=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`,F=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`,Fe=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,P=o.li`
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
`;o.ul`
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
`;function ko({onNextLesson:t}){const[i,a]=A.useState(0),{user:d}=he(),{addDocument:u}=xe("progress"),{updateTraining:h,refreshData:m}=ue(),s=[{title:"Corte de Unhas",content:e.jsxs(e.Fragment,{children:[e.jsx(wo,{src:po,alt:"Cão tendo as unhas cortadas"}),e.jsx(bo,{children:"Nesta aula, vamos aprender sobre a importância do corte de unhas para a saúde e bem-estar do seu cão."})]})},{title:"Por que Cortar as Unhas?",content:e.jsxs(H,{children:[e.jsx(M,{children:"Manter as unhas do seu cão aparadas é essencial por vários motivos:"}),e.jsxs(Ee,{children:[e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{children:"🦶"}),e.jsx(E,{children:"Conforto"})]}),e.jsx(F,{children:"Unhas longas causam desconforto ao caminhar e podem deformar as patas"})]}),e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{children:"💪"}),e.jsx(E,{children:"Saúde"})]}),e.jsx(F,{children:"Previne problemas articulares e lesões nas patas"})]}),e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{children:"🏠"}),e.jsx(E,{children:"Proteção"})]}),e.jsx(F,{children:"Evita arranhões em móveis e pessoas"})]}),e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{children:"🩹"}),e.jsx(E,{children:"Prevenção"})]}),e.jsx(F,{children:"Reduz o risco de unhas quebradas e infecções"})]})]})]})},{title:"Como Cortar as Unhas",content:e.jsxs(H,{children:[e.jsx(M,{children:"Siga estes passos para um corte de unhas seguro e eficiente:"}),e.jsxs(yo,{children:[e.jsxs(te,{children:[e.jsxs(se,{children:[e.jsx(ie,{children:"1"}),e.jsx(ne,{children:"Preparação"})]}),e.jsx(ae,{children:"Acostume seu cão ao toque nas patas e ao cortador de unhas"})]}),e.jsxs(te,{children:[e.jsxs(se,{children:[e.jsx(ie,{children:"2"}),e.jsx(ne,{children:"Identificação"})]}),e.jsx(ae,{children:"Localize a parte viva da unha (quick) para evitar cortes dolorosos"})]}),e.jsxs(te,{children:[e.jsxs(se,{children:[e.jsx(ie,{children:"3"}),e.jsx(ne,{children:"Corte"})]}),e.jsx(ae,{children:"Corte em pequenos incrementos, mantendo-se longe da parte viva"})]}),e.jsxs(te,{children:[e.jsxs(se,{children:[e.jsx(ie,{children:"4"}),e.jsx(ne,{children:"Finalização"})]}),e.jsx(ae,{children:"Lixe as bordas para evitar farpas e recompense seu cão"})]})]})]})},{title:"Dicas Importantes",content:e.jsxs(H,{children:[e.jsx(M,{children:"Algumas dicas essenciais para o corte de unhas:"}),e.jsxs(Ee,{children:[e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{children:"⏰"}),e.jsx(E,{children:"Frequência"})]}),e.jsx(F,{children:"Corte a cada 2-4 semanas, dependendo do crescimento"})]}),e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{children:"🔍"}),e.jsx(E,{children:"Observação"})]}),e.jsx(F,{children:"Monitore o comportamento do cão durante o processo"})]}),e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{children:"🩹"}),e.jsx(E,{children:"Emergência"})]}),e.jsx(F,{children:"Tenha pó hemostático à mão para acidentes"})]}),e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{children:"👨‍⚕️"}),e.jsx(E,{children:"Profissional"})]}),e.jsx(F,{children:"Considere um veterinário para cães muito ansiosos"})]})]})]})},{title:"Resumo e Próximos Passos",content:e.jsxs(H,{children:[e.jsx(M,{children:"Parabéns! Você aprendeu sobre como cortar as unhas do seu cão de forma adequada."}),e.jsxs(Fe,{children:[e.jsx(P,{children:"Manter as unhas do seu cão aparadas é essencial para seu conforto e saúde"}),e.jsx(P,{children:"Use equipamentos adequados e siga a técnica correta para evitar machucados"}),e.jsx(P,{children:"Crie uma rotina de corte regular adaptada às necessidades do seu cão"}),e.jsx(P,{children:"Recompense seu cão após o procedimento para criar associações positivas"})]}),e.jsx(M,{children:"Próximos passos:"}),e.jsxs(Fe,{children:[e.jsx(P,{children:"Estabeleça uma rotina de corte de unhas adequada à sua rotina e do seu cão"}),e.jsx(P,{children:"Combine com outras práticas de higiene para manter seu cão saudável"}),e.jsx(P,{children:"Continue para a próxima aula para aprender sobre limpeza de ouvidos"})]})]})}],x=async()=>{if(i===s.length-1)try{if(localStorage.setItem("hygiene3_completed","true"),window.dispatchEvent(new Event("storage")),d){const r={lessonId:"hygiene3",moduleId:"hygiene",courseId:"9DwWIAtShVCPXyRPSbqF",userId:d.uid,status:"completed",completedAt:ge.fromDate(new Date),duration:15};await u(r),await h({completedLessons:18,currentLevel:"intermediate",lastSession:new Date,totalTime:205}),await m(),console.log("Progresso da lição Hygiene3 salvo com sucesso")}t()}catch(r){console.error("Erro ao salvar progresso da lição:",r),t()}else a(r=>r+1)},B=()=>{i>0&&a(r=>r-1)},p=r=>{a(r)};return e.jsxs(mo,{children:[e.jsxs(ho,{children:["Corte de Unhas",localStorage.getItem("hygiene3_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(xo,{children:[s.map((r,n)=>e.jsx(uo,{active:i===n,children:e.jsxs(H,{children:[e.jsx(go,{children:r.title}),r.content]})},n)),e.jsxs(jo,{children:[e.jsx(ke,{onClick:B,disabled:i===0,children:"Anterior"}),e.jsx(fo,{children:s.map((r,n)=>e.jsx(vo,{active:i===n,onClick:()=>p(n)},n))}),e.jsx(ke,{onClick:x,children:i===s.length-1?"Próxima Aula":"Próximo"})]})]})]})}const Eo="/assets/Hygiene4-eXG7ke9D.png",Fo=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Co=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,So=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,Do=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${t=>t.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${t=>t.active?"auto":"none"};
  z-index: ${t=>t.active?1:0};
`,N=o.div`
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
`,zo=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,$o=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
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
`;const Bo=o.div`
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
`,Ce=o.button`
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
`,Io=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,Po=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${t=>t.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`,To=o.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,R=o.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
`,Ao=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,de=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,le=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,ce=o.div`
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
`,pe=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`,me=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`,Se=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,C=o.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,S=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,D=o.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
`,z=o.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`,$=o.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`,De=o.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,T=o.li`
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
`;o.ul`
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
`;function Lo({onNextLesson:t}){const i=$e(),[a,d]=A.useState(0),[u,h]=A.useState(!1),{user:m}=he(),{addDocument:s}=xe("progress"),{updateTraining:x,refreshData:B}=ue(),p=[{title:"Limpeza de Ouvidos",content:e.jsxs(e.Fragment,{children:[e.jsx(To,{src:Eo,alt:"Cão tendo os ouvidos limpos"}),e.jsx($o,{children:"Nesta aula, vamos aprender sobre a importância da limpeza de ouvidos para a saúde e bem-estar do seu cão."})]})},{title:"Por que Limpar os Ouvidos?",content:e.jsxs(N,{children:[e.jsx(R,{children:"A limpeza regular dos ouvidos é essencial por vários motivos:"}),e.jsxs(Se,{children:[e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"👂"}),e.jsx(z,{children:"Prevenção"})]}),e.jsx($,{children:"Evita infecções e acúmulo de cera nos ouvidos"})]}),e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"🦮"}),e.jsx(z,{children:"Conforto"})]}),e.jsx($,{children:"Reduz coceira e desconforto causados por sujeira"})]}),e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"👃"}),e.jsx(z,{children:"Saúde"})]}),e.jsx($,{children:"Previne problemas auditivos e otites"})]}),e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"🔍"}),e.jsx(z,{children:"Monitoramento"})]}),e.jsx($,{children:"Permite identificar problemas precocemente"})]})]})]})},{title:"Como Limpar os Ouvidos",content:e.jsxs(N,{children:[e.jsx(R,{children:"Siga estes passos para uma limpeza segura e eficiente:"}),e.jsxs(Ao,{children:[e.jsxs(de,{children:[e.jsxs(le,{children:[e.jsx(ce,{children:"1"}),e.jsx(pe,{children:"Inspeção"})]}),e.jsx(me,{children:"Verifique se há vermelhidão, odor ou secreção"})]}),e.jsxs(de,{children:[e.jsxs(le,{children:[e.jsx(ce,{children:"2"}),e.jsx(pe,{children:"Limpeza Externa"})]}),e.jsx(me,{children:"Use um pano úmido para limpar a parte externa do ouvido"})]}),e.jsxs(de,{children:[e.jsxs(le,{children:[e.jsx(ce,{children:"3"}),e.jsx(pe,{children:"Limpeza Interna"})]}),e.jsx(me,{children:"Aplique o produto de limpeza e massageie suavemente"})]}),e.jsxs(de,{children:[e.jsxs(le,{children:[e.jsx(ce,{children:"4"}),e.jsx(pe,{children:"Finalização"})]}),e.jsx(me,{children:"Deixe o cão sacudir a cabeça e limpe o excesso"})]})]})]})},{title:"Dicas Importantes",content:e.jsxs(N,{children:[e.jsx(R,{children:"Algumas dicas essenciais para a limpeza de ouvidos:"}),e.jsxs(Se,{children:[e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"⏰"}),e.jsx(z,{children:"Frequência"})]}),e.jsx($,{children:"Limpe a cada 1-2 semanas, dependendo da raça"})]}),e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"⚠️"}),e.jsx(z,{children:"Cuidados"})]}),e.jsx($,{children:"Nunca use cotonetes ou objetos pontiagudos"})]}),e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"💧"}),e.jsx(z,{children:"Produtos"})]}),e.jsx($,{children:"Use apenas produtos específicos para cães"})]}),e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"👨‍⚕️"}),e.jsx(z,{children:"Profissional"})]}),e.jsx($,{children:"Consulte um veterinário se notar algo anormal"})]})]})]})},{title:"Resumo e Próximos Passos",content:e.jsxs(N,{children:[e.jsx(R,{children:"Parabéns! Você aprendeu sobre como limpar as orelhas do seu cão de forma segura e eficaz."}),e.jsxs(De,{children:[e.jsx(T,{children:"A limpeza regular dos ouvidos previne infecções e aumenta o conforto do seu cão"}),e.jsx(T,{children:"Siga os passos corretos: inspeção, limpeza externa, aplicação do produto e finalização"}),e.jsx(T,{children:"Use apenas produtos veterinários específicos para cães"}),e.jsx(T,{children:"Esteja atento a sinais de infecção ou desconforto"})]}),e.jsx(R,{children:"Próximos passos:"}),e.jsxs(De,{children:[e.jsx(T,{children:"Estabeleça uma rotina de limpeza, baseada nas necessidades específicas do seu cão"}),e.jsx(T,{children:"Inclua a limpeza dos ouvidos como parte da higiene geral do seu pet"}),e.jsx(T,{children:"Continue para o próximo módulo para aprender sobre o controle de maus hábitos"})]})]})}],r=async()=>{if(a===p.length-1)try{if(localStorage.setItem("hygiene4_completed","true"),localStorage.setItem("badhabits1_unlocked","true"),window.dispatchEvent(new Event("storage")),h(!0),m)try{const l={lessonId:"hygiene4",moduleId:"hygiene",courseId:"9DwWIAtShVCPXyRPSbqF",userId:m.uid,status:"completed",completedAt:ge.fromDate(new Date),duration:15};Promise.race([s(l),new Promise(c=>setTimeout(c,3e3))]).then(()=>{x({completedLessons:19,currentLevel:"intermediate",lastSession:new Date,totalTime:220,unlockedModules:["startHere","hygiene","badhabits"]}).catch(c=>console.error("Erro ao atualizar dashboard:",c)),B().catch(c=>console.error("Erro ao atualizar dados:",c)),console.log("Progresso da lição Hygiene4 salvo com sucesso")}).catch(c=>{console.error("Erro ao salvar progresso da lição:",c)})}catch(l){console.error("Erro ao processar progresso da lição:",l)}}catch(l){console.error("Erro ao salvar progresso da lição:",l),h(!0)}else d(l=>(l+1)%p.length)},n=()=>{d(l=>(l-1+p.length)%p.length)},Be=l=>{d(l)},Ie=()=>{h(!1)},Pe=()=>{localStorage.setItem("badhabits1_unlocked","true"),localStorage.setItem("badhabits_unlocked","true"),localStorage.setItem("startHere","true"),window.dispatchEvent(new Event("storage")),m&&x({completedLessons:19,currentLevel:"intermediate",lastSession:new Date,totalTime:220,unlockedModules:["startHere","hygiene","badhabits"]}).catch(l=>console.error("Erro ao atualizar dashboard:",l)),i("/content/training/badhabits")};return e.jsxs(Fo,{children:[e.jsxs(Co,{children:["Limpeza de Ouvidos",localStorage.getItem("hygiene4_completed")==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsxs(So,{children:[p.map((l,c)=>e.jsx(Do,{active:a===c,children:e.jsxs(N,{children:[e.jsx(zo,{children:l.title}),l.content]})},c)),e.jsxs(Bo,{children:[e.jsx(Ce,{onClick:n,disabled:a===0,children:"Anterior"}),e.jsx(Io,{children:p.map((l,c)=>e.jsx(Po,{active:a===c,onClick:()=>Be(c)},c))}),e.jsx(Ce,{onClick:r,children:a===p.length-1?"Concluir":"Próximo"})]})]}),u&&e.jsx(Ae,{onClose:Ie,onNextModule:Pe})]})}const qo=o.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Ho=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,Mo=o.h1`
  font-size: 2.5rem;
  color: #333;
`,No=o.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`,Ro=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,_o=o.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`,Yo=o.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.75rem;
`,Xo=o.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,Uo=o.span`
  color: #007bff;
  font-size: 0.875rem;
  font-weight: 500;
`,Go=o.button`
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
`,Vo=o(Go)`
  background-color: #6c757d;
  margin-right: 1rem;

  &:hover {
    background-color: #5a6268;
  }
`,ze=Le.find(t=>t.id==="hygiene");function rr(){const t=$e(),[i,a]=A.useState(null),d=[{id:"hygiene1",title:"Introdução à Higiene",description:"Aprenda a importância da higiene para seu cão",duration:"15 min",component:Ze,locked:!localStorage.getItem("hygiene1_unlocked")==="true"},{id:"hygiene2",title:"Banho e Tosa",description:"Como dar banho e tosar seu cão corretamente",duration:"15 min",component:co,locked:localStorage.getItem("hygiene1_completed")!=="true"},{id:"hygiene3",title:"Escovação e Cuidados",description:"Técnicas de escovação e cuidados diários",duration:"15 min",component:ko,locked:localStorage.getItem("hygiene2_completed")!=="true"},{id:"hygiene4",title:"Consolidação e Prática",description:"Prática final e consolidação dos conhecimentos",duration:"15 min",component:Lo,locked:localStorage.getItem("hygiene3_completed")!=="true"}],u=s=>{a(s)},h=()=>{const s=d.findIndex(x=>x.id===i.id);s<d.length-1&&a(d[s+1])},m=()=>{i?a(null):t("/content/training")};if(i){const s=i.component;return e.jsx(Te,{children:e.jsx(s,{onBack:m,onNextLesson:h})})}return e.jsxs(qo,{children:[e.jsxs(Ho,{children:[e.jsx(Vo,{onClick:m,children:"Voltar"}),e.jsx(Mo,{children:ze.title})]}),e.jsx(No,{children:ze.description}),e.jsx(Ro,{children:d.map(s=>e.jsxs(_o,{onClick:()=>!s.locked&&u(s),style:{opacity:s.locked?.5:1,cursor:s.locked?"not-allowed":"pointer",position:"relative"},children:[e.jsxs(Yo,{children:[s.title,localStorage.getItem(`${s.id}_completed`)==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsx(Xo,{children:s.description}),e.jsx(Uo,{children:s.duration}),s.locked&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"2rem"},children:"🔒"})]},s.id))})]})}export{rr as default};
