import{r as f,c as w,a5 as F,Z as C,u as k,j as e,a6 as E}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";import"./ModuleCompletionPopup-BxaocN1j.js";const B="/assets/Behavior2-BAlmjNWJ.png",D=o.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,S=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,q=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,y=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${n=>n.active?1:0};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${n=>n.active?"auto":"none"};
  z-index: ${n=>n.active?1:0};
`,z=o.div`
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
`,A=o.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,r=o.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,P=o.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,l=o.li`
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
`,I=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`,h=o.button`
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
`,T=o.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,V=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${n=>n.active?"#4299E1":"#CBD5E0"};
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
`;const c=o.ul`
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
  background: #F0FFF4;
  border-radius: 8px;
  border-left: 4px solid #48BB78;
  transition: all 0.2s ease;

  &:hover {
    background: #E6FFED;
    transform: translateX(4px);
  }

  &:before {
    content: "•";
    color: #48BB78;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,L=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function M({onNextLesson:n}){const[i,m]=f.useState(0),{user:x}=w(),{addDocument:p}=F("progress"),{updateTraining:u,refreshData:g}=C();k();const d=[{title:"Comandos Fica e Vem",subtitle:"Controle à distância",content:e.jsxs("div",{children:[e.jsx(L,{src:B,alt:"Comandos Fica e Vem"}),e.jsx(r,{children:'Os comandos "Fica" e "Vem" são essenciais para manter seu cão seguro e sob controle em diversas situações. Eles ajudam a prevenir comportamentos indesejados e garantem a segurança do seu pet.'}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Segurança em primeiro lugar"}),e.jsx(r,{children:"Mantém o cão longe de perigos e situações de risco."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Controle em situações críticas"}),e.jsx(r,{children:"Permite gerenciar o comportamento do cão em momentos importantes."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Liberdade controlada"}),e.jsx(r,{children:"Permite que o cão explore com segurança, sabendo que voltará quando chamado."})]})]})]})},{title:"Como Ensinar",content:e.jsxs("div",{children:[e.jsxs(P,{children:[e.jsxs(l,{"data-step":"1",children:[e.jsx("strong",{children:'Comece com o comando "Fica"'}),e.jsx(r,{children:'Peça para o cão sentar e diga "Fica" enquanto faz um gesto com a mão aberta.'})]}),e.jsxs(l,{"data-step":"2",children:[e.jsx("strong",{children:"Dê alguns passos para trás"}),e.jsx(r,{children:"Afaste-se gradualmente, mantendo contato visual e elogiando quando o cão permanecer no lugar."})]}),e.jsxs(l,{"data-step":"3",children:[e.jsx("strong",{children:'Introduza o comando "Vem"'}),e.jsx(r,{children:"Chame o cão com entusiasmo e recompense quando ele vier até você."})]}),e.jsxs(l,{"data-step":"4",children:[e.jsx("strong",{children:"Combine os comandos"}),e.jsx(r,{children:'Pratique alternando entre "Fica" e "Vem" em sequência.'})]})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Dica importante"}),e.jsx(r,{children:"Use petiscos de alto valor para motivar o cão durante o treino."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Evite erros comuns"}),e.jsx(r,{children:"Não chame o cão para dar bronca ou fazer algo que ele não goste."})]})]})]})},{title:"Dicas Importantes",content:e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Seja consistente"}),e.jsx(r,{children:"Use sempre os mesmos comandos verbais e gestos."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Treine em diferentes ambientes"}),e.jsx(r,{children:"Comece em casa e gradualmente aumente as distrações."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Mantenha as sessões curtas"}),e.jsx(r,{children:"Treinos de 5-10 minutos são mais eficazes."})]})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Seja paciente"}),e.jsx(r,{children:"Alguns cães podem demorar mais para aprender, mantenha a calma."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Use reforço positivo"}),e.jsx(r,{children:"Sempre recompense o comportamento correto."})]})]})]})},{title:"Exemplo Prático",content:e.jsxs("div",{children:[e.jsx(r,{children:"Pratique os comandos em diferentes situações:"}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Durante os passeios"}),e.jsx(r,{children:'Use "Fica" antes de atravessar a rua e "Vem" para chamar de volta.'})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"No parque"}),e.jsx(r,{children:"Permita que o cão explore e pratique chamá-lo de volta."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Em casa"}),e.jsx(r,{children:'Peça para "Ficar" antes de abrir a porta e "Vir" quando necessário.'})]})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Frequência de treino"}),e.jsx(r,{children:"Pratique 3-5 vezes por dia, em sessões curtas."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Progressão"}),e.jsx(r,{children:"Aumente gradualmente a distância e as distrações."})]})]})]})}],j=async()=>{if(i<d.length-1)m(i+1);else try{localStorage.setItem("behavior2_completed","true"),await p({userId:x.uid,lessonId:"behavior2",moduleId:"behavior",completedAt:E.now(),progress:100}),await u({completedLessons:1,currentLevel:"beginner",lastSession:new Date,totalTime:5}),await g(),console.log("Progresso da lição Behavior2 salvo com sucesso"),n()}catch(t){console.error("Erro ao salvar progresso:",t)}},b=()=>{m(t=>t-1)},v=t=>{m(t)};return e.jsxs(D,{children:[e.jsx(S,{children:"Comandos Fica e Vem"}),e.jsxs(q,{children:[d.map((t,a)=>e.jsx(y,{active:i===a,children:e.jsxs(z,{children:[t.subtitle&&e.jsx(A,{children:t.subtitle}),t.content]})},a)),e.jsxs(I,{children:[e.jsx(h,{onClick:b,disabled:i===0,children:"Anterior"}),e.jsx(T,{children:d.map((t,a)=>e.jsx(V,{active:i===a,onClick:()=>v(a)},a))}),e.jsx(h,{onClick:j,children:i===d.length-1?"Concluir":"Próximo"})]})]})]})}export{M as default};
