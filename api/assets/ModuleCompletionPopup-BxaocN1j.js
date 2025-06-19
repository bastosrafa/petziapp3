import{j as o}from"./index-Dye69HlV.js";import{d as e}from"./styled-components.browser.esm--5_Wn-ai.js";const i=e.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,s=e.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  text-align: center;
`,a=e.h2`
  color: #2D3748;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`,c=e.p`
  color: #4A5568;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`,d=e.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`,r=e.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &.close {
    background-color: #718096;
    color: white;

    &:hover {
      background-color: #4A5568;
    }
  }

  &.next {
    background-color: #48BB78;
    color: white;

    &:hover {
      background-color: #38A169;
    }
  }
`;function u({onClose:n,onNextModule:t}){return o.jsx(i,{children:o.jsxs(s,{children:[o.jsx(a,{children:"Parabéns! 🎉"}),o.jsx(c,{children:"Você completou com sucesso este módulo! Continue sua jornada de aprendizado com o próximo módulo para desenvolver ainda mais suas habilidades."}),o.jsxs(d,{children:[o.jsx(r,{className:"close",onClick:n,children:"Fechar"}),o.jsx(r,{className:"next",onClick:t,children:"Próximo Módulo"})]})]})})}export{u as M};
