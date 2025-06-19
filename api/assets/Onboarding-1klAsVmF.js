import{r as d,l as ke,j as o,x as je,c as Se,u as $e}from"./index-Dye69HlV.js";import{m as I,d as n,l as K}from"./styled-components.browser.esm--5_Wn-ai.js";const G=[{id:"welcome",message:`Olá! Sou o Tobias e vou ajudar você a configurar seu perfil! 🐾

Vamos começar?`,options:[{id:"start",label:"Vamos lá! 👋"}],nextStep:"pet-name"},{id:"pet-name",message:"Como se chama o seu amigo de quatro patas?",input:!0,inputPlaceholder:"Digite o nome do seu pet",nextStep:"pet-type"},{id:"pet-type",message:t=>`${t} é um cachorro ou gato?`,options:[{id:"dog",label:"Cachorro 🐶"},{id:"cat",label:"Gato 🐱"}],nextStep:"pet-breed"},{id:"pet-breed",message:(t,x)=>`Qual é a raça do ${t}?`,input:!0,inputPlaceholder:"Digite a raça do seu pet",nextStep:"pet-age"},{id:"pet-age",message:t=>`Qual é a idade aproximada do ${t}?`,options:[{id:"puppy",label:"Filhote (0-1 ano)"},{id:"young",label:"Jovem (1-3 anos)"},{id:"adult",label:"Adulto (3-8 anos)"},{id:"senior",label:"Sênior (8+ anos)"}],nextStep:"pet-behavior"},{id:"pet-behavior",message:t=>`Quais comportamentos o ${t} apresenta? (Selecione todos que se aplicam)`,options:[{id:"barking",label:"Late/Mia excessivamente"},{id:"chewing",label:"Mastiga objetos"},{id:"jumping",label:"Pula nas pessoas"},{id:"pulling",label:"Puxa a guia durante passeios"},{id:"aggression",label:"Agressividade com outros animais"},{id:"anxiety",label:"Ansiedade de separação"},{id:"house-soiling",label:"Faz necessidades em local inapropriado"},{id:"fearful",label:"Medo de barulhos/situações"},{id:"well-behaved",label:"Bem comportado, sem problemas"}],multiSelect:!0,nextStep:"training-goals"},{id:"training-goals",message:"Quais são seus objetivos principais de treinamento?",options:[{id:"basic-obedience",label:"Comandos básicos"},{id:"stop-bad-behaviors",label:"Parar comportamentos indesejados"},{id:"socialization",label:"Melhorar socialização"},{id:"tricks",label:"Ensinar truques divertidos"},{id:"mental-stimulation",label:"Estimulação mental"}],multiSelect:!0,nextStep:"experience-level"},{id:"experience-level",message:"Qual é o seu nível de experiência com treinamento de pets?",options:[{id:"beginner",label:"Iniciante (primeira vez)"},{id:"some-experience",label:"Alguma experiência"},{id:"experienced",label:"Experiente"}],nextStep:"final-confirmation"},{id:"final-confirmation",message:t=>`Ótimo! Agora conhecemos melhor ${t.petName}. Estamos prontos para preparar uma experiência personalizada para vocês.`,options:[{id:"complete",label:"Finalizar e ir para o app"}],nextStep:"complete"},{id:"complete",message:"Pronto! Seu perfil foi criado com sucesso. Vamos começar essa jornada de treinamento juntos!",isCompleted:!0}],C={primary:"#3A86FF",primaryDark:"#2A76EF",secondary:"#FF5C8D",accent:"#FFD166",background:"#FFFFFF",lighterPrimary:"#EEF4FF",lightGray:"#F2F2F2",textDark:"#333333",textLight:"#FFFFFF",textMedium:"#666666",success:"#4CAF50",error:"#F44336",warning:"#FF9800",info:"#2196F3",border:"#E0E0E0",divider:"#EEEEEE"},F=I`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ce=I`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;n.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  min-height: 600px;
  background-color: ${C.background};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;n.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;n.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${t=>t.active?"#0078ff":t.completed?"#7ed321":"#eee"};
  color: ${t=>t.active||t.completed?"white":"#888"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    height: 2px;
    width: 30px;
    background-color: ${t=>t.completed?"#7ed321":"#eee"};
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
  }
`;n.div`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 5px;
  max-width: 80px;
`;n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;n.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;n.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;n.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;n.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
  text-align: center;
`;n.div`
  margin-bottom: 20px;
`;n.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;n.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #0078ff;
    outline: none;
  }
  
  ${t=>t.error&&K`
    border-color: #e74c3c;
  `}
`;n.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #0078ff;
    outline: none;
  }
  
  ${t=>t.error&&K`
    border-color: #e74c3c;
  `}
`;n.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #0078ff;
    outline: none;
  }
`;n.p`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
`;n.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;n.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;n.div`
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  position: relative;
  transition: all 0.2s;
  background-color: ${t=>t.checked?"#0078ff":"white"};
  
  &:after {
    content: '';
    position: absolute;
    display: ${t=>t.checked?"block":"none"};
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;n.span`
  font-size: 16px;
`;n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;n.button`
  background-color: #0078ff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0062cc;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;n.button`
  background-color: white;
  color: #0078ff;
  border: 1px solid #0078ff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f0f7ff;
  }
  
  &:disabled {
    border-color: #cccccc;
    color: #cccccc;
    cursor: not-allowed;
  }
`;n.div`
  background-color: ${C.background.light};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;n.div`
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;n.span`
  font-weight: 600;
  color: ${C.textDark};
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;n.span`
  color: ${C.textMedium};
  font-size: 16px;
`;n.ul`
  margin: 0;
  padding-left: 20px;
  
  li {
    margin-bottom: 5px;
  }
`;n.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 30px;
  background-color: ${C.lightGray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;n.h1`
  font-size: 28px;
  color: ${C.primary};
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;n.p`
  font-size: 16px;
  color: ${C.textMedium};
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.6;
`;I`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;I`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;I`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;const Pe=n.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(to bottom, #e6f2ff, #f8f9fa) !important;
  color: #222 !important;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  * { box-sizing: border-box; }
  @media (max-width: 600px) {
    max-width: 100%;
    border-radius: 0;
  }
`,Ie=n.header`
  position: sticky;
  top: 0;
  background: linear-gradient(to right, #4a89dc, #5ca9fb);
  padding: 8px 16px 8px 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0;
  flex-shrink: 0;
`,Le=n.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.5px;
`,Me=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding: 8px 20px 30px 20px;
  
  /* Estilizar scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
`,Ae=n.div`
  max-width: 80%;
  padding: 14px 18px;
  border-radius: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  line-height: 1.5;
  font-size: 16px;
  word-wrap: break-word;
  background-color: white;
  color: #333;
  align-self: flex-start;
  border-bottom-left-radius: 4px;
  animation: ${F} 0.3s ease-in-out;
  &.system-bubble {}

  .typing-cursor {
    display: inline-block;
    width: 2px;
    height: 16px;
    background-color: currentColor;
    margin-left: 2px;
    animation: blink 1s infinite;
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  }
`,Ne=n.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  background-color: white;
  border-radius: 20px;
  border-bottom-left-radius: 4px;
  margin-bottom: 16px;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: auto;
  animation: ${F} 0.3s ease-in-out;
  &.typing-indicator {}

  .typing-text {
    font-size: 14px;
    color: #666;
    margin-right: 8px;
  }

  span {
    height: 10px;
    width: 10px;
    background-color: #4a89dc;
    border-radius: 50%;
    display: inline-block;
    margin: 0 3px;
    animation: pulse 1.5s infinite ease-in-out;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes pulse {
    0%, 60%, 100% {
      transform: scale(1);
      opacity: 0.6;
    }
    30% {
      transform: scale(1.5);
      opacity: 1;
    }
  }
`,$=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  animation: ${F} 0.5s ease-out;
  align-self: center;
  margin-top: 8px;
  
  @media (min-width: 480px) {
    max-width: 90%;
  }
`,T=n.button`
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color: white;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  animation: ${F} 0.3s ease-out;
  animation-delay: ${t=>t.$index*.05}s;
  opacity: 0;
  animation-fill-mode: forwards;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  max-width: 90%;
  align-self: flex-start;
  width: 100%;
  
  &:hover {
    background-color: #f7f9fd;
    border-color: #4a89dc;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;n(T)`
  background-color: ${t=>t.$selected?"#f0f6ff":"white"};
  border-color: ${t=>t.$selected?"#4a89dc":"rgba(0, 0, 0, 0.1)"};
  
  &::before {
    content: '';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${t=>t.$selected?"#4a89dc":"#ddd"};
    background-color: ${t=>t.$selected?"#4a89dc":"transparent"};
    transition: all 0.2s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: 19px;
    top: 46.5%;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 10px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    opacity: ${t=>t.$selected?1:0};
  }
`;const B=n(T)`
  background-color: #4a89dc;
  color: white;
  text-align: center;
  font-weight: 600;
  
  &:hover {
    background-color: #3d7bcb;
  }
`;n.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  padding: 16px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  z-index: 10;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  animation: ${F} 0.3s ease-out;
  &.input-container {}
`;const q=n.input`
  flex: 1;
  padding: 14px 20px;
  border-radius: 24px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  color: #333333;
  &.text-input {}

  &:focus {
    border-color: #4a89dc;
    box-shadow: 0 2px 8px rgba(74, 137, 220, 0.3);
  }
  
  &::placeholder {
    color: #aaa;
  }
`,V=n.button`
  background: linear-gradient(to right, #4a89dc, #5ca9fb);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }
  
  svg {
    width: 22px;
    height: 22px;
    fill: none;
    stroke: white;
    stroke-width: 2;
  }
`;n.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${Ce} 1s steps(40, end);
`;const De=({message:t,isUser:x,showInstantly:k=!1,onTypingComplete:f})=>{const[c,u]=d.useState(k),[m,g]=d.useState(""),[b,O]=d.useState(!1),L=d.useRef(!1),h=ke.useMemo(()=>t==null?"":typeof t=="string"?t:typeof t=="number"?String(t):typeof t=="object"?t.label?t.label:t.text?t.text:JSON.stringify(t):String(t),[t]);if(d.useEffect(()=>{L.current=!1},[t]),d.useEffect(()=>{if(k)g(h);else{const M=setTimeout(()=>{u(!0),x?g(h):O(!0)},x?300:600);return()=>clearTimeout(M)}},[x,k,h]),d.useEffect(()=>{if(b&&m.length<h.length){const M=Math.random()*30+10,E=setTimeout(()=>{g(h.substring(0,m.length+1))},M);return()=>clearTimeout(E)}else b&&m.length===h.length&&(O(!1),f&&!L.current&&(L.current=!0,setTimeout(()=>{f()},500)))},[b,m,h,f]),!c)return null;const p=x?"user-bubble":"system-bubble";return o.jsxs(Ae,{$isUser:x,className:p,children:[x?h:m,b&&o.jsx("span",{className:"typing-cursor",children:"|"})]})},Re=({delay:t=300,duration:x=1800})=>{const[k,f]=d.useState(!1);return d.useEffect(()=>{const c=setTimeout(()=>{f(!0)},t),u=setTimeout(()=>{f(!1)},t+x);return()=>{clearTimeout(c),clearTimeout(u)}},[t,x]),k?o.jsxs(Ne,{children:[o.jsx("div",{className:"typing-text",children:"Digitando"}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]}):null},_e=I`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,H=n.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;n(V)`
  margin-left: 8px;
`;const Fe=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 100%;
  animation: ${_e} 0.5s ease-out;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Oe=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 16px;
  background-color: #f9f9f9;
`,ze=n.h3`
  font-size: 18px;
  margin: 0 0 8px;
  color: #333;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
`,D=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`,R=n.span`
  font-weight: 500;
  color: #666;
  font-size: 15px;
`,_=n.span`
  color: #333;
  font-size: 15px;
  font-weight: 500;
`,J=n(T)`
  background-color: ${t=>t.$selected?"#f0f6ff":"white"};
  border-color: ${t=>t.$selected?"#4a89dc":"rgba(0, 0, 0, 0.1)"};
  padding-right: 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${t=>t.$selected?"#4a89dc":"#ddd"};
    background-color: ${t=>t.$selected?"#4a89dc":"transparent"};
    transition: all 0.2s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: 19px;
    top: 46.5%;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 10px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    opacity: ${t=>t.$selected?1:0};
  }
`,s={WELCOME:{id:"welcome",message:`Olá! Sou o Tobias e vou ajudar você a configurar seu perfil! 🐾

Vamos começar?`,buttonText:"Vamos lá! 👋",nextStep:"pet-name"},PET_NAME:{id:"pet-name",message:"Como se chama o seu amigo de quatro patas?",placeholder:"Digite o nome do seu pet...",nextStep:"pet-type"},PET_TYPE:{id:"pet-type",getMessage:t=>`${t} é um cachorro ou gato?`,options:[{value:"cachorro",label:"Cachorro 🐶"},{value:"gato",label:"Gato 🐱"}],nextStep:"pet-breed"},PET_BREED:{id:"pet-breed",getMessage:(t,x)=>`Qual é a raça do ${t}?`,placeholder:"Digite a raça do seu pet...",nextStep:"pet-gender"},PET_GENDER:{id:"pet-gender",getMessage:(t,x)=>`${t} é ${x==="cachorro"?"um cachorro":"um gato"}! E qual é o gênero?`,options:[{value:"macho",label:"Macho"},{value:"femea",label:"Fêmea"}],nextStep:"pet-age"},PET_AGE:{id:"pet-age",getMessage:(t,x)=>`${t} é ${x==="macho"?"um menino":"uma menina"}! E qual é a idade aproximada?`,options:[{value:"filhote",label:"Filhote (até 1 ano)"},{value:"adulto",label:"Adulto (1 a 7 anos)"},{value:"idoso",label:"Idoso (mais de 7 anos)"}],nextStep:"pet-behavior"},PET_BEHAVIOR:{id:"pet-behavior",getMessage:t=>`Quais comportamentos o ${t} apresenta? (Selecione todos que se aplicam)`,options:[{value:"barking",label:"Late/Mia excessivamente"},{value:"chewing",label:"Mastiga objetos"},{value:"jumping",label:"Pula nas pessoas"},{value:"pulling",label:"Puxa a guia durante passeios"},{value:"aggression",label:"Agressividade com outros animais"},{value:"anxiety",label:"Ansiedade de separação"},{value:"house-soiling",label:"Faz necessidades em local inapropriado"},{value:"fearful",label:"Medo de barulhos/situações"},{value:"well-behaved",label:"Bem comportado, sem problemas"}],multiSelect:!0,nextStep:"training-goals"},TRAINING_GOALS:{id:"training-goals",message:"Quais são seus objetivos principais de treinamento?",options:[{value:"basic-obedience",label:"Comandos básicos"},{value:"stop-bad-behaviors",label:"Parar comportamentos indesejados"},{value:"socialization",label:"Melhorar socialização"},{value:"tricks",label:"Ensinar truques divertidos"},{value:"mental-stimulation",label:"Estimulação mental"}],multiSelect:!0,nextStep:"experience-level"},EXPERIENCE_LEVEL:{id:"experience-level",message:"Qual é o seu nível de experiência com treinamento de pets?",options:[{value:"beginner",label:"Iniciante (primeira vez)"},{value:"some-experience",label:"Alguma experiência"},{value:"experienced",label:"Experiente"}],nextStep:"final-confirmation"},FINAL_CONFIRMATION:{id:"final-confirmation",getMessage:t=>`Ótimo! Agora conhecemos melhor ${t}. Estamos prontos para preparar uma experiência personalizada para vocês.`,buttonText:"Finalizar e ir para o app",nextStep:"complete"},COMPLETE:{id:"complete",message:"Pronto! Seu perfil foi criado com sucesso. Vamos começar essa jornada de treinamento juntos!",isCompleted:!0}},Ge=()=>{const{completeOnboarding:t}=je(),{user:x}=Se(),k=$e(),[f,c]=d.useState([]),[u,m]=d.useState(s.WELCOME.id),[g,b]=d.useState({}),[O,L]=d.useState(!1),[h,p]=d.useState(!1),[M,E]=d.useState(1),[Z,U]=d.useState(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),[w,z]=d.useState(""),[P,ee]=d.useState(""),[te,oe]=d.useState(""),[ae,ie]=d.useState(""),[ne,se]=d.useState(""),[Y,re]=d.useState(""),[Be,le]=d.useState([]),[Ve,de]=d.useState([]),[Ye,ce]=d.useState("");d.useState(!1);const[A,pe]=d.useState([]),[N,ue]=d.useState([]),[j,v]=d.useState(!1);d.useEffect(()=>{console.log("Estado messageTypingComplete mudou:",j)},[j]);const xe=d.useRef(null),y=d.useRef(null);Object.values(s).find(e=>e.id===u),d.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),i=a=>{U(a.matches)};return e.addEventListener?e.addEventListener("change",i):e.addListener(i),()=>{e.removeEventListener?e.removeEventListener("change",i):e.removeListener(i)}},[]),d.useEffect(()=>{f.length===0&&(v(!1),setTimeout(()=>{c([{id:`system-${Date.now()}`,text:s.WELCOME.message,type:"system"}])},500))},[]),d.useEffect(()=>{if(y.current){const e=()=>{y.current.scrollIntoView({behavior:"smooth",block:"end"})};e();const i=setTimeout(e,100),a=setTimeout(e,500);return()=>{clearTimeout(i),clearTimeout(a)}}},[f,h,j]),d.useEffect(()=>{const e=()=>{y.current&&y.current.scrollIntoView({behavior:"smooth",block:"end"})},i=setTimeout(e,200),a=setTimeout(e,600);return()=>{clearTimeout(i),clearTimeout(a)}},[u]),d.useEffect(()=>{if(j&&!h&&y.current){const e=setTimeout(()=>{y.current.scrollIntoView({behavior:"smooth",block:"end"})},300);return()=>clearTimeout(e)}},[j,h]),d.useEffect(()=>{Object.keys(g).length>0&&localStorage.setItem("onboarding_progress",JSON.stringify({currentStepId:u,petData:g,messages:f}))},[u,g,f]),d.useEffect(()=>{const e=localStorage.getItem("onboarding_progress");if(e)try{const{currentStepId:i,petData:a,messages:l}=JSON.parse(e),r=G.find(S=>S.id===i);if(r&&!r.isCompleted){m(i),b(a),c(l);const S=G.findIndex(Te=>Te.id===i)+1;E(S)}}catch(i){console.error("Erro ao restaurar progresso do onboarding:",i)}},[]),d.useEffect(()=>{const e=G.findIndex(i=>i.id===u)+1;e>0&&E(e)},[u]);const me=async()=>{if(x)try{localStorage.removeItem("onboarding_progress"),await t(g),k("/")}catch(e){console.error("Erro ao finalizar onboarding:",e)}},ge=()=>{if(h||!j)return null;if(u===s.WELCOME.id)return setTimeout(()=>{window.dispatchEvent(new CustomEvent("optionsRendered"))},50),o.jsx($,{children:o.jsx(T,{$index:0,onClick:()=>{c(e=>[...e,{id:`user-${Date.now()}`,text:s.WELCOME.buttonText,type:"user"}]),m(s.WELCOME.nextStep),E(e=>e+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(e=>[...e,{id:`system-${Date.now()}`,text:s.PET_NAME.message,type:"system"}])},1500)},style:{backgroundColor:"#4a89dc",color:"white",textAlign:"center",fontWeight:"600",padding:"15px 20px",maxWidth:"200px",margin:"0 auto"},children:s.WELCOME.buttonText})});if(u===s.PET_NAME.id)return o.jsxs(H,{children:[o.jsx(q,{value:w,onChange:W,placeholder:s.PET_NAME.placeholder,onKeyPress:e=>{e.key==="Enter"&&w.trim()&&Q()}}),o.jsx(V,{onClick:()=>w.trim()&&Q(),disabled:!w.trim(),type:"button",children:o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M22 2L11 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M22 2L15 22L11 13L2 9L22 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]});if(u===s.PET_TYPE.id){const{options:e}=s.PET_TYPE;return setTimeout(()=>{window.dispatchEvent(new CustomEvent("optionsRendered"))},50),o.jsx($,{children:e.map((i,a)=>o.jsx(T,{$index:a,onClick:()=>he(i.value),children:i.label},i.value))})}if(u===s.PET_BREED.id)return o.jsxs(H,{children:[o.jsx(q,{value:w,onChange:W,placeholder:s.PET_BREED.placeholder,onKeyPress:e=>{e.key==="Enter"&&w.trim()&&X()}}),o.jsx(V,{onClick:()=>w.trim()&&X(),disabled:!w.trim(),type:"button",children:o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M22 2L11 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M22 2L15 22L11 13L2 9L22 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]});if(u===s.PET_GENDER.id){const{options:e}=s.PET_GENDER;return setTimeout(()=>{window.dispatchEvent(new CustomEvent("optionsRendered"))},50),o.jsx($,{children:e.map((i,a)=>o.jsx(T,{$index:a,onClick:()=>be(i.value),children:i.label},i.value))})}if(u===s.PET_AGE.id){const{options:e}=s.PET_AGE;return setTimeout(()=>{window.dispatchEvent(new CustomEvent("optionsRendered"))},50),o.jsx($,{children:e.map((i,a)=>o.jsx(T,{$index:a,onClick:()=>fe(i.value),children:i.label},i.value))})}if(u===s.PET_BEHAVIOR.id){const{options:e}=s.PET_BEHAVIOR;setTimeout(()=>{window.dispatchEvent(new CustomEvent("optionsRendered"))},50);const i=a=>{pe(l=>l.includes(a)?l.filter(r=>r!==a):[...l,a])};return o.jsxs("div",{style:{width:"100%"},children:[o.jsx($,{children:e.map((a,l)=>o.jsx(J,{$index:l,$selected:A.includes(a.value),onClick:()=>i(a.value),children:a.label},a.value))}),o.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"15px"},children:o.jsxs(B,{onClick:()=>Ee(A),disabled:A.length===0,style:{maxWidth:"200px"},children:["Confirmar (",A.length," selecionado",A.length!==1?"s":"",")"]})})]})}if(u===s.TRAINING_GOALS.id){const{options:e}=s.TRAINING_GOALS;setTimeout(()=>{window.dispatchEvent(new CustomEvent("optionsRendered"))},50);const i=a=>{ue(l=>l.includes(a)?l.filter(r=>r!==a):[...l,a])};return o.jsxs("div",{style:{width:"100%"},children:[o.jsx($,{children:e.map((a,l)=>o.jsx(J,{$index:l,$selected:N.includes(a.value),onClick:()=>i(a.value),children:a.label},a.value))}),o.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"15px"},children:o.jsxs(B,{onClick:()=>we(N),disabled:N.length===0,style:{maxWidth:"200px"},children:["Confirmar (",N.length," selecionado",N.length!==1?"s":"",")"]})})]})}if(u===s.EXPERIENCE_LEVEL.id){const{options:e}=s.EXPERIENCE_LEVEL;return setTimeout(()=>{window.dispatchEvent(new CustomEvent("optionsRendered"))},50),o.jsx($,{children:e.map((i,a)=>o.jsx(T,{$index:a,onClick:()=>ve(i.value),children:i.label},i.value))})}return u===s.FINAL_CONFIRMATION.id?(setTimeout(()=>{window.dispatchEvent(new CustomEvent("optionsRendered"))},50),o.jsxs(Fe,{children:[o.jsxs(Oe,{children:[o.jsx(ze,{children:"Resumo do Perfil"}),o.jsxs(D,{children:[o.jsx(R,{children:"Nome:"}),o.jsx(_,{children:P})]}),o.jsxs(D,{children:[o.jsx(R,{children:"Tipo:"}),o.jsx(_,{children:te==="cachorro"?"Cachorro":"Gato"})]}),o.jsxs(D,{children:[o.jsx(R,{children:"Raça:"}),o.jsx(_,{children:ae})]}),o.jsxs(D,{children:[o.jsx(R,{children:"Gênero:"}),o.jsx(_,{children:ne==="macho"?"Macho":"Fêmea"})]}),o.jsxs(D,{children:[o.jsx(R,{children:"Idade:"}),o.jsx(_,{children:Y==="filhote"?"Filhote (até 1 ano)":Y==="adulto"?"Adulto (1 a 7 anos)":"Idoso (mais de 7 anos)"})]})]}),o.jsx(B,{onClick:ye,style:{textAlign:"center"},children:s.FINAL_CONFIRMATION.buttonText})]})):null};d.useEffect(()=>{const e=()=>{y.current&&setTimeout(()=>{y.current.scrollIntoView({behavior:"smooth",block:"end"})},100)};return window.addEventListener("optionsRendered",e),()=>{window.removeEventListener("optionsRendered",e)}},[]);const W=e=>{z(e.target.value)},Q=()=>{if(w.trim()){const e=w.trim();ee(e),c(a=>[...a,{id:`user-${Date.now()}`,text:e,type:"user"}]);const i={...g,petName:e};b(i),z(""),m(s.PET_NAME.nextStep),E(a=>a+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(a=>[...a,{id:`system-${Date.now()}`,text:s.PET_TYPE.getMessage(e),type:"system"}])},1500)}},he=e=>{var l;oe(e);const i=((l=s.PET_TYPE.options.find(r=>r.value===e))==null?void 0:l.label)||e;c(r=>[...r,{id:`user-${Date.now()}`,text:i,type:"user"}]);const a={...g,petType:e};b(a),m(s.PET_TYPE.nextStep),E(r=>r+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(r=>[...r,{id:`system-${Date.now()}`,text:s.PET_BREED.getMessage(P,e),type:"system"}])},1500)},be=e=>{var l;se(e);const i=((l=s.PET_GENDER.options.find(r=>r.value===e))==null?void 0:l.label)||e;c(r=>[...r,{id:`user-${Date.now()}`,text:i,type:"user"}]);const a={...g,petGender:e};b(a),m(s.PET_GENDER.nextStep),E(r=>r+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(r=>[...r,{id:`system-${Date.now()}`,text:s.PET_AGE.getMessage(P,e),type:"system"}])},1500)},fe=e=>{var l;re(e);const i=((l=s.PET_AGE.options.find(r=>r.value===e))==null?void 0:l.label)||e;c(r=>[...r,{id:`user-${Date.now()}`,text:i,type:"user"}]);const a={...g,petAge:e};b(a),m(s.PET_AGE.nextStep),E(r=>r+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(r=>[...r,{id:`system-${Date.now()}`,text:s.PET_BEHAVIOR.getMessage(P),type:"system"}])},1500)},X=()=>{if(w.trim()){const e=w.trim();ie(e),c(a=>[...a,{id:`user-${Date.now()}`,text:e,type:"user"}]);const i={...g,petBreed:e};b(i),z(""),m(s.PET_BREED.nextStep),E(a=>a+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(a=>[...a,{id:`system-${Date.now()}`,text:`${P} é um ${e}! E qual é o gênero?`,type:"system"}])},1500)}},Ee=e=>{le(e);const i=e.map(l=>{var r;return((r=s.PET_BEHAVIOR.options.find(S=>S.value===l))==null?void 0:r.label)||l}).join(", ");c(l=>[...l,{id:`user-${Date.now()}`,text:i||"Nenhum comportamento selecionado",type:"user"}]);const a={...g,behaviors:e};b(a),m(s.PET_BEHAVIOR.nextStep),E(l=>l+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(l=>[...l,{id:`system-${Date.now()}`,text:s.TRAINING_GOALS.message,type:"system"}])},1500)},we=e=>{de(e);const i=e.map(l=>{var r;return((r=s.TRAINING_GOALS.options.find(S=>S.value===l))==null?void 0:r.label)||l}).join(", ");c(l=>[...l,{id:`user-${Date.now()}`,text:i||"Nenhum objetivo selecionado",type:"user"}]);const a={...g,trainingGoals:e};b(a),m(s.TRAINING_GOALS.nextStep),E(l=>l+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(l=>[...l,{id:`system-${Date.now()}`,text:s.EXPERIENCE_LEVEL.message,type:"system"}])},1500)},ve=e=>{var l;ce(e);const i=((l=s.EXPERIENCE_LEVEL.options.find(r=>r.value===e))==null?void 0:l.label)||e;c(r=>[...r,{id:`user-${Date.now()}`,text:i,type:"user"}]);const a={...g,experienceLevel:e};b(a),m(s.EXPERIENCE_LEVEL.nextStep),E(r=>r+1),p(!0),v(!1),setTimeout(()=>{p(!1),c(r=>[...r,{id:`system-${Date.now()}`,text:s.FINAL_CONFIRMATION.getMessage(P),type:"system"}])},1500)},ye=()=>{c(e=>[...e,{id:`user-${Date.now()}`,text:s.FINAL_CONFIRMATION.buttonText,type:"user"}]),m(s.COMPLETE.id),L(!0),p(!0),v(!1),setTimeout(()=>{p(!1),c(e=>[...e,{id:`system-${Date.now()}`,text:s.COMPLETE.message,type:"system"}]),setTimeout(()=>{me()},2e3)},1500)};return o.jsxs(Pe,{className:Z?"dark-mode":"light-mode",children:[o.jsx(Ie,{children:o.jsxs(Le,{children:["Etapa ",M," de ",Object.keys(s).length-1]})}),o.jsxs(Me,{ref:xe,children:[f.map((e,i)=>o.jsx(De,{message:e.text,isUser:e.type==="user",showInstantly:e.showInstantly,onTypingComplete:i===f.length-1&&e.type==="system"?()=>{setTimeout(()=>{v(!0)},200)}:void 0},e.id)),h&&o.jsx(Re,{}),!h&&!O&&j&&o.jsx("div",{style:{paddingTop:"10px",paddingBottom:"25px"},children:ge()}),o.jsx("div",{ref:y,style:{height:"20px",width:"100%"}})]})]})},qe=()=>o.jsx(Ge,{});export{qe as default};
