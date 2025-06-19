import{r as v,c as w,a5 as k,Z as C,j as e,a6 as F}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";import"./ModuleCompletionPopup-BxaocN1j.js";const E="/assets/behavior1-BAUz1PkS.png",B=o.div`
  padding: 2rem 1rem 3.5rem 1rem;
  max-width: 800px;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,S=o.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,D=o.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`,y=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${n=>n.active?"flex":"none"};
  flex-direction: column;
  pointer-events: ${n=>n.active?"auto":"none"};
  margin: 0;
  max-width: none;
`,A=o.div`
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
`,z=o.h2`
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
`;const q=o.div`
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
`,I=o.div`
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
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;function M({onNextLesson:n}){const[i,m]=v.useState(0),{user:x}=w(),{addDocument:p}=k("progress"),{updateTraining:u,refreshData:g}=C(),d=[{title:"Comando Sentar",subtitle:"Primeiro passo do adestramento",content:e.jsxs("div",{children:[e.jsx(L,{src:E,alt:"Comando Sentar"}),e.jsx(r,{children:'O comando "Sentar" é um dos comandos mais importantes e fundamentais no adestramento canino. Ele serve como base para outros comandos e ajuda a estabelecer uma comunicação clara com seu cão.'}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Base para outros comandos"}),e.jsx(r,{children:'É o primeiro passo para ensinar comandos mais complexos como "Deitar" e "Ficar".'})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Controle em situações cotidianas"}),e.jsx(r,{children:"Ajuda a manter o cão calmo em diversas situações do dia a dia."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Fortalecimento do vínculo"}),e.jsx(r,{children:"Melhora a comunicação e o relacionamento entre você e seu cão."})]})]})]})},{title:"Como Ensinar",content:e.jsxs("div",{children:[e.jsxs(P,{children:[e.jsxs(l,{"data-step":"1",children:[e.jsx("strong",{children:"Posicione o petisco"}),e.jsx(r,{children:"Segure um petisco próximo ao nariz do cão e mova-o lentamente para cima e para trás, sobre a cabeça dele."})]}),e.jsxs(l,{"data-step":"2",children:[e.jsx("strong",{children:"Espere a resposta natural"}),e.jsx(r,{children:"O cão naturalmente sentará para acompanhar o movimento do petisco com o olhar."})]}),e.jsxs(l,{"data-step":"3",children:[e.jsx("strong",{children:"Recompense imediatamente"}),e.jsx(r,{children:"Assim que o cão sentar, dê o petisco e elogie com entusiasmo."})]}),e.jsxs(l,{"data-step":"4",children:[e.jsx("strong",{children:"Adicione o comando verbal"}),e.jsx(r,{children:'Diga "Senta" no momento exato em que o cão estiver se sentando.'})]})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Dica importante"}),e.jsx(r,{children:"Use petiscos de alto valor para motivar o cão durante o treino."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Evite erros comuns"}),e.jsx(r,{children:"Não force o cão a sentar fisicamente, deixe-o aprender naturalmente."})]})]})]})},{title:"Dicas Importantes",content:e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Consistência é fundamental"}),e.jsx(r,{children:"Use sempre o mesmo comando verbal e gesto para não confundir o cão."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Treine em diferentes ambientes"}),e.jsx(r,{children:"Pratique em casa, no quintal e em locais com distrações controladas."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Mantenha as sessões curtas"}),e.jsx(r,{children:"Treinos de 5-10 minutos são mais eficazes que sessões longas."})]})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Não force o cão"}),e.jsx(r,{children:"Deixe o cão aprender no seu próprio ritmo, sem pressão."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Seja paciente"}),e.jsx(r,{children:"Alguns cães podem demorar mais para aprender, mantenha a calma."})]})]})]})},{title:"Exemplo Prático",content:e.jsxs("div",{children:[e.jsx(r,{children:'Pratique o comando "Sentar" em diferentes situações:'}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Antes das refeições"}),e.jsx(r,{children:"Peça para o cão sentar antes de colocar a comida no pote."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Durante os passeios"}),e.jsx(r,{children:"Use o comando antes de atravessar a rua ou quando encontrar outros cães."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Em casa"}),e.jsx(r,{children:"Peça para sentar antes de abrir a porta ou dar atenção."})]})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Frequência de treino"}),e.jsx(r,{children:"Pratique 3-5 vezes por dia, em sessões curtas."})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Progressão"}),e.jsx(r,{children:"Aumente gradualmente as distrações conforme o cão melhora."})]})]})]})}],b=async()=>{if(i<d.length-1)m(i+1);else try{localStorage.setItem("behavior1_completed","true"),await p({userId:x.uid,lessonId:"behavior1",moduleId:"behavior",completedAt:F.now(),progress:100}),await u({completedLessons:1,currentLevel:"beginner",lastSession:new Date,totalTime:5}),await g(),console.log("Progresso da lição Behavior1 salvo com sucesso"),n()}catch(t){console.error("Erro ao salvar progresso:",t)}},j=()=>{m(t=>t-1)},f=t=>{m(t)};return e.jsxs(B,{children:[e.jsx(S,{children:"Comando Sentar"}),e.jsxs(D,{children:[d.map((t,a)=>e.jsx(y,{active:i===a,children:e.jsxs(A,{children:[t.subtitle&&e.jsx(z,{children:t.subtitle}),t.content]})},a)),e.jsxs(q,{children:[e.jsx(h,{onClick:j,disabled:i===0,children:"Anterior"}),e.jsx(T,{children:d.map((t,a)=>e.jsx(I,{active:i===a,onClick:()=>f(a)},a))}),e.jsx(h,{onClick:b,children:i===d.length-1?"Concluir":"Próximo"})]})]})]})}export{M as default};
