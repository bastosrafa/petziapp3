import{r as u,c as z,a5 as B,Z as D,u as S,j as e,a6 as y}from"./index-Dye69HlV.js";import{d as s}from"./styled-components.browser.esm--5_Wn-ai.js";import{M as P}from"./ModuleCompletionPopup-BxaocN1j.js";const q="/assets/Behavior5-Y9zaipfM.png",A=s.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,I=s.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`,T=s.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,M=s.div`
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
`,N=s.div`
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
`,L=s.h2`
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
`,U=s.ol`
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
`,_=s.div`
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
`,m=s.button`
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
`,$=s.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,Y=s.div`
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
`,O=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function G({onNextLesson:n}){const[i,h]=u.useState(0),[p,x]=u.useState(!1),{user:g}=z(),{addDocument:j}=B("progress"),{updateTraining:b,refreshData:v}=D(),f=S(),d=[{title:"Desenvolvendo habilidades de busca",content:e.jsxs("div",{children:[e.jsx(O,{src:q,alt:"Comandos Busca e Entrega"}),e.jsx(o,{children:'Os comandos "Busca" e "Entrega" são excelentes para exercícios físicos e mentais, além de fortalecer o vínculo entre você e seu cão.'}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Exercício físico e mental"}),e.jsx(o,{children:"Estimula o corpo e a mente do cão de forma divertida."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Fortalecimento do vínculo"}),e.jsx(o,{children:"Promove interação positiva e cooperação."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Habilidades práticas"}),e.jsx(o,{children:"Desenvolve capacidades úteis para o dia a dia."})]})]})]})},{title:"Como Ensinar",content:e.jsxs("div",{children:[e.jsxs(U,{children:[e.jsxs(l,{"data-step":"1",children:[e.jsx("strong",{children:'Ensine o comando "Busca"'}),e.jsx(o,{children:"Use um objeto que o cão goste e incentive-o a pegar."})]}),e.jsxs(l,{"data-step":"2",children:[e.jsx("strong",{children:'Introduza o comando "Entrega"'}),e.jsx(o,{children:"Ensine o cão a soltar o objeto em suas mãos."})]}),e.jsxs(l,{"data-step":"3",children:[e.jsx("strong",{children:"Combine os comandos"}),e.jsx(o,{children:"Pratique a sequência completa de busca e entrega."})]}),e.jsxs(l,{"data-step":"4",children:[e.jsx("strong",{children:"Aumente a distância"}),e.jsx(o,{children:"Gradualmente, aumente a distância da busca."})]})]}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Dica importante"}),e.jsx(o,{children:"Use objetos adequados e recompensas de alto valor."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Evite erros comuns"}),e.jsx(o,{children:"Não force o cão a buscar objetos que ele não gosta."})]})]})]})},{title:"Dicas Importantes",content:e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Use recompensas de alto valor"}),e.jsx(o,{children:"Escolha petiscos que o cão realmente goste."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Mantenha o treino divertido"}),e.jsx(o,{children:"O cão deve associar o treino a momentos prazerosos."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Pratique em diferentes locais"}),e.jsx(o,{children:"Varie os ambientes para generalizar o aprendizado."})]})]}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Não force o cão"}),e.jsx(o,{children:"Respeite o ritmo de aprendizado do seu pet."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Mantenha as sessões curtas"}),e.jsx(o,{children:"Treinos de 5-10 minutos são mais eficazes."})]})]})]})},{title:"Exemplo Prático",content:e.jsxs("div",{children:[e.jsx(o,{children:"Pratique os comandos em diferentes situações:"}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Durante as brincadeiras"}),e.jsx(o,{children:"Use brinquedos favoritos para treinar os comandos."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Em diferentes ambientes"}),e.jsx(o,{children:"Pratique em casa, no parque e em outros locais."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Com diferentes objetos"}),e.jsx(o,{children:"Varie os objetos para manter o interesse do cão."})]})]}),e.jsxs(c,{children:[e.jsxs(r,{children:[e.jsx("strong",{children:"Frequência de treino"}),e.jsx(o,{children:"Pratique 3-5 vezes por dia, em sessões curtas."})]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Progressão"}),e.jsx(o,{children:"Aumente gradualmente a dificuldade e as distrações."})]})]})]})}],w=async()=>{if(i<d.length-1)h(i+1);else try{localStorage.setItem("behavior5_completed","true"),window.dispatchEvent(new Event("storage")),await j({userId:g.uid,lessonId:"behavior5",moduleId:"behavior",completedAt:y.now(),progress:100}),await b({completedLessons:1,currentLevel:"beginner",lastSession:new Date,totalTime:5}),await v(),console.log("Progresso da lição Behavior5 salvo com sucesso"),x(!0)}catch(t){console.error("Erro ao salvar progresso:",t),x(!0)}},E=()=>{h(t=>t-1)},k=t=>{h(t)},C=()=>{x(!1)},F=()=>{localStorage.setItem("socialization1_unlocked","true"),localStorage.setItem("socialization_unlocked","true"),f("/content/training/socialization")};return e.jsxs(A,{children:[e.jsx(I,{children:"Comandos Busca e Entrega"}),e.jsxs(T,{children:[d.map((t,a)=>e.jsx(M,{active:i===a,children:e.jsxs(N,{children:[t.title&&e.jsx(L,{children:t.title}),t.content]})},a)),e.jsxs(_,{children:[e.jsx(m,{onClick:E,disabled:i===0,children:"Anterior"}),e.jsx($,{children:d.map((t,a)=>e.jsx(Y,{active:i===a,onClick:()=>k(a)},a))}),e.jsx(m,{onClick:w,children:i===d.length-1?"Concluir":"Próximo"})]})]}),p&&e.jsx(P,{onClose:C,onNextModule:F})]})}export{G as default};
