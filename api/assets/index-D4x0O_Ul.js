import{u as l,r as p,j as e,a4 as u}from"./index-Dye69HlV.js";import{d as t}from"./styled-components.browser.esm--5_Wn-ai.js";import h from"./Behavior1-CsoG-TDr.js";import g from"./Behavior2-J10O8qQw.js";import x from"./Behavior3-Cd51p6wW.js";import b from"./Behavior4-C-CGhiKB.js";import f from"./Behavior5-Dd0skT2T.js";import{t as v}from"./config-CJOQn1u_.js";import"./ModuleCompletionPopup-BxaocN1j.js";import"./dog-BTx2Crur.js";import"./users-DQaJ2eXR.js";import"./droplets-m0QRMEgr.js";import"./triangle-alert-8qwZl-cm.js";const k=t.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`,j=t.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-top: 20px;
`,B=t.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`,C=t.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`,S=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,L=t.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`,I=t.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.75rem;
`,w=t.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,z=t.span`
  color: #007bff;
  font-size: 0.875rem;
  font-weight: 500;
`,y=t.button`
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
`,D=t(y)`
  background-color: #6c757d;
  margin-right: 1rem;

  &:hover {
    background-color: #5a6268;
  }
`;v.find(n=>n.id==="behavior");function R(){const n=l(),[r,a]=p.useState(null),i=[{id:"behavior1",title:"Comandos Básicos: Senta e Deita",description:"Aprenda a ensinar os comandos básicos de obediência",duration:"15 min",component:h,locked:!localStorage.getItem("behavior1_unlocked")==="true"},{id:"behavior2",title:"Comandos Básicos: Fica e Vem",description:"Controle e chamada do seu cão em diferentes situações",duration:"15 min",component:g,locked:localStorage.getItem("behavior1_completed")!=="true"},{id:"behavior3",title:"Comandos Básicos: Junto e Solta",description:"Passeio com guia e controle de objetos",duration:"15 min",component:x,locked:localStorage.getItem("behavior2_completed")!=="true"},{id:"behavior4",title:"Comandos Básicos: Não e Quieto",description:"Controle de comportamentos indesejados",duration:"15 min",component:b,locked:localStorage.getItem("behavior3_completed")!=="true"},{id:"behavior5",title:"Comandos Básicos: Busca e Entrega",description:"Jogos e brincadeiras para fortalecer o vínculo",duration:"15 min",component:f,locked:localStorage.getItem("behavior4_completed")!=="true"}],c=o=>{a(o)},s=()=>{r?a(null):n("/content/training")},d=()=>{const o=i.findIndex(m=>m.id===r.id);o<i.length-1&&a(i[o+1])};if(r){const o=r.component;return e.jsx(u,{children:e.jsx(o,{onNextLesson:d,onBack:s})})}return e.jsxs(k,{children:[e.jsxs(j,{children:[e.jsx(D,{onClick:s,children:"Voltar"}),e.jsx(B,{children:"Comportamento Essencial 🐕"})]}),e.jsx(C,{children:"Desenvolva comportamentos essenciais para uma convivência harmoniosa com seu cão."}),e.jsx(S,{children:i.map(o=>e.jsxs(L,{onClick:()=>!o.locked&&c(o),style:{opacity:o.locked?.5:1,cursor:o.locked?"not-allowed":"pointer",position:"relative"},children:[e.jsxs(I,{children:[o.title,localStorage.getItem(`${o.id}_completed`)==="true"&&e.jsx("span",{className:"ml-2 text-green-500",children:"✓"})]}),e.jsx(w,{children:o.description}),e.jsx(z,{children:o.duration}),o.locked&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"2rem"},children:"🔒"})]},o.id))})]})}export{R as default};
