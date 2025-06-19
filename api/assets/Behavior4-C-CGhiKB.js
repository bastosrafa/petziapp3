import{r as v,c as w,a5 as C,Z as k,u as E,j as e,a6 as F}from"./index-Dye69HlV.js";import{d as s}from"./styled-components.browser.esm--5_Wn-ai.js";import"./ModuleCompletionPopup-BxaocN1j.js";const B="/assets/behavior1-BAUz1PkS.png",D=s.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,y=s.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,z=s.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,S=s.div`
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
`,A=s.div`
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
`,q=s.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,o=s.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`,I=s.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,l=s.li`
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
`,N=s.div`
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
`,h=s.button`
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
`,P=s.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,T=s.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${n=>n.active?"#4299E1":"#CBD5E0"};
  cursor: pointer;
  transition: background 0.2s;
`;s.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;s.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;s.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;const c=s.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,r=s.li`
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
`,U=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function M({onNextLesson:n}){const[i,m]=v.useState(0),{user:x}=w(),{addDocument:p}=C("progress"),{updateTraining:u,refreshData:g}=k();E();const d=[{title:"Comandos Não e Quieto",subtitle:"Limites e controle comportamental",content:e.jsxs("div",{children:[e.jsx(U,{src:B,alt:"Comandos Não e Quieto"}),e.jsx(o,{children:'Os comandos "Não" e "Quieto" são fundamentais para corrigir comportamentos indesejados e manter o controle em situações específicas.'}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Correção imediata"}),e.jsx(o,{children:"Interrompe comportamentos indesejados no momento."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Controle em situações específicas"}),e.jsx(o,{children:"Mantém o cão calmo e controlado quando necessário."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Comunicação clara"}),e.jsx(o,{children:"Estabelece limites de forma efetiva e consistente."})]})]})]})},{title:"Como Ensinar",content:e.jsxs("div",{children:[e.jsxs(I,{children:[e.jsxs(l,{"data-step":"1",children:[e.jsx("strong",{children:'Comece com o comando "Não"'}),e.jsx(o,{children:"Use um tom firme e consistente para interromper comportamentos indesejados."})]}),e.jsxs(l,{"data-step":"2",children:[e.jsx("strong",{children:'Introduza o comando "Quieto"'}),e.jsx(o,{children:"Ensine o cão a se acalmar e permanecer tranquilo."})]}),e.jsxs(l,{"data-step":"3",children:[e.jsx("strong",{children:"Pratique em diferentes situações"}),e.jsx(o,{children:"Use os comandos em contextos variados para reforçar o aprendizado."})]}),e.jsxs(l,{"data-step":"4",children:[e.jsx("strong",{children:"Recompense o comportamento correto"}),e.jsx(o,{children:"Elogie e recompense quando o cão obedecer aos comandos."})]})]}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Dica importante"}),e.jsx(o,{children:"Use gestos consistentes junto com os comandos verbais."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Evite erros comuns"}),e.jsx(o,{children:"Não use os comandos de forma excessiva ou sem necessidade."})]})]})]})},{title:"Dicas Importantes",content:e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Seja consistente"}),e.jsx(o,{children:"Use sempre os mesmos comandos e gestos."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Pratique em momentos calmos"}),e.jsx(o,{children:"Comece o treino quando o cão estiver tranquilo."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Aumente as distrações gradualmente"}),e.jsx(o,{children:"Comece em ambiente controlado e aumente as distrações aos poucos."})]})]}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Não use punição física"}),e.jsx(o,{children:"Use reforço positivo e redirecionamento."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Mantenha as sessões curtas"}),e.jsx(o,{children:"Treinos de 5-10 minutos são mais eficazes."})]})]})]})},{title:"Exemplo Prático",content:e.jsxs("div",{children:[e.jsx(o,{children:"Pratique os comandos em diferentes situações:"}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Durante os passeios"}),e.jsx(o,{children:'Use "Não" para interromper latidos excessivos e "Quieto" para acalmar.'})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Em casa"}),e.jsx(o,{children:"Use os comandos para controlar comportamentos indesejados."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Com visitas"}),e.jsx(o,{children:"Mantenha o cão calmo e controlado na presença de outras pessoas."})]})]}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Frequência de treino"}),e.jsx(o,{children:"Pratique 3-5 vezes por dia, em sessões curtas."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Progressão"}),e.jsx(o,{children:"Aumente gradualmente o nível de distração."})]})]})]})}],j=async()=>{if(i<d.length-1)m(i+1);else try{localStorage.setItem("behavior4_completed","true"),await p({userId:x.uid,lessonId:"behavior4",moduleId:"behavior",completedAt:F.now(),progress:100}),await u({completedLessons:1,currentLevel:"beginner",lastSession:new Date,totalTime:5}),await g(),console.log("Progresso da lição Behavior4 salvo com sucesso"),n()}catch(t){console.error("Erro ao salvar progresso:",t)}},b=()=>{m(t=>t-1)},f=t=>{m(t)};return e.jsxs(D,{children:[e.jsx(y,{children:"Comandos Não e Quieto"}),e.jsxs(z,{children:[d.map((t,a)=>e.jsx(S,{active:i===a,children:e.jsxs(A,{children:[t.subtitle&&e.jsx(q,{children:t.subtitle}),t.content]})},a)),e.jsxs(N,{children:[e.jsx(h,{onClick:b,disabled:i===0,children:"Anterior"}),e.jsx(P,{children:d.map((t,a)=>e.jsx(T,{active:i===a,onClick:()=>f(a)},a))}),e.jsx(h,{onClick:j,children:i===d.length-1?"Concluir":"Próximo"})]})]})]})}export{M as default};
