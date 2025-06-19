import{r as v,c as w,a5 as k,Z as C,u as E,j as e,a6 as F}from"./index-Dye69HlV.js";import{d as s}from"./styled-components.browser.esm--5_Wn-ai.js";import"./ModuleCompletionPopup-BxaocN1j.js";const S="/assets/Behavior3-D1hLKQdn.png",D=s.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,q=s.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,B=s.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,y=s.div`
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
`,z=s.div`
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
`,P=s.h2`
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
`,A=s.ol`
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
`,I=s.div`
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
`,u=s.button`
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
`,T=s.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,J=s.div`
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
`;const d=s.ul`
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
`,L=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function M({onNextLesson:n}){const[i,m]=v.useState(0),{user:h}=w(),{addDocument:x}=k("progress"),{updateTraining:p,refreshData:g}=C();E();const c=[{title:"Comandos Junto e Solta",subtitle:"Controle e liberdade durante os passeios",content:e.jsxs("div",{children:[e.jsx(L,{src:S,alt:"Comandos Junto e Solta"}),e.jsx(o,{children:'Os comandos "Junto" e "Solta" são essenciais para manter seu cão seguro e sob controle durante os passeios, permitindo uma transição suave entre momentos de controle e liberdade.'}),e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Segurança durante os passeios"}),e.jsx(o,{children:"Mantém o cão próximo e sob controle em situações de risco."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Liberdade controlada"}),e.jsx(o,{children:"Permite que o cão explore com segurança quando apropriado."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Transição suave"}),e.jsx(o,{children:"Facilita a alternância entre momentos de controle e liberdade."})]})]})]})},{title:"Como Ensinar",content:e.jsxs("div",{children:[e.jsxs(A,{children:[e.jsxs(l,{"data-step":"1",children:[e.jsx("strong",{children:'Comece com o comando "Junto"'}),e.jsx(o,{children:"Peça para o cão ficar ao seu lado e recompense quando ele obedecer."})]}),e.jsxs(l,{"data-step":"2",children:[e.jsx("strong",{children:"Pratique caminhando juntos"}),e.jsx(o,{children:"Mantenha o cão próximo durante o passeio, recompensando a boa posição."})]}),e.jsxs(l,{"data-step":"3",children:[e.jsx("strong",{children:'Introduza o comando "Solta"'}),e.jsx(o,{children:'Permita que o cão explore quando for seguro, usando o comando "Solta".'})]}),e.jsxs(l,{"data-step":"4",children:[e.jsx("strong",{children:"Pratique as transições"}),e.jsx(o,{children:'Alternar entre "Junto" e "Solta" durante o passeio.'})]})]}),e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Dica importante"}),e.jsx(o,{children:"Use uma guia adequada para manter o controle durante o treino."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Evite erros comuns"}),e.jsx(o,{children:"Não force o cão a ficar junto por muito tempo sem recompensas."})]})]})]})},{title:"Dicas Importantes",content:e.jsxs("div",{children:[e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Use uma guia adequada"}),e.jsx(o,{children:"Escolha uma guia que permita controle preciso."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Seja consistente"}),e.jsx(o,{children:"Use sempre os mesmos comandos e gestos."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Pratique em diferentes ambientes"}),e.jsx(o,{children:"Comece em locais tranquilos e aumente as distrações gradualmente."})]})]}),e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Não force o cão"}),e.jsx(o,{children:"Respeite o ritmo de aprendizado do seu pet."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Mantenha as sessões curtas"}),e.jsx(o,{children:"Treinos de 5-10 minutos são mais eficazes."})]})]})]})},{title:"Exemplo Prático",content:e.jsxs("div",{children:[e.jsx(o,{children:"Pratique os comandos em diferentes situações:"}),e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Durante os passeios"}),e.jsx(o,{children:'Use "Junto" em ruas movimentadas e "Solta" em áreas seguras.'})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Em áreas abertas"}),e.jsx(o,{children:'Permita que o cão explore com "Solta" e chame de volta com "Junto".'})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Em parques"}),e.jsx(o,{children:"Alternar entre os comandos conforme a situação."})]})]}),e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Frequência de treino"}),e.jsx(o,{children:"Pratique 3-5 vezes por dia, em sessões curtas."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Progressão"}),e.jsx(o,{children:"Aumente gradualmente a distância e as distrações."})]})]})]})}],j=async()=>{if(i<c.length-1)m(i+1);else try{localStorage.setItem("behavior3_completed","true"),await x({userId:h.uid,lessonId:"behavior3",moduleId:"behavior",completedAt:F.now(),progress:100}),await p({completedLessons:1,currentLevel:"beginner",lastSession:new Date,totalTime:5}),await g(),console.log("Progresso da lição Behavior3 salvo com sucesso"),n()}catch(t){console.error("Erro ao salvar progresso:",t)}},b=()=>{m(t=>t-1)},f=t=>{m(t)};return e.jsxs(D,{children:[e.jsx(q,{children:"Comandos Junto e Solta"}),e.jsxs(B,{children:[c.map((t,a)=>e.jsx(y,{active:i===a,children:e.jsxs(z,{children:[t.subtitle&&e.jsx(P,{children:t.subtitle}),t.content]})},a)),e.jsxs(I,{children:[e.jsx(u,{onClick:b,disabled:i===0,children:"Anterior"}),e.jsx(T,{children:c.map((t,a)=>e.jsx(J,{active:i===a,onClick:()=>f(a)},a))}),e.jsx(u,{onClick:j,children:i===c.length-1?"Concluir":"Próximo"})]})]})]})}export{M as default};
