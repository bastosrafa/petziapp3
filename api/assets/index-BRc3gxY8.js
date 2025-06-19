import{u as p,c as u,Z as x,r as s,j as e}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";import{t as a}from"./config-CJOQn1u_.js";import"./dog-BTx2Crur.js";import"./users-DQaJ2eXR.js";import"./droplets-m0QRMEgr.js";import"./triangle-alert-8qwZl-cm.js";const h=o.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,g=o.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
`,f=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,m=o.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${i=>i.locked?"not-allowed":"pointer"};
  opacity: ${i=>i.locked?.7:1};
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: ${i=>i.locked?"none":"translateY(-2px)"};
  }
`,b=o.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`,k=o.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 8px;
  color: #007bff;
`,v=o.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`,j=o.p`
  color: #666;
  margin-bottom: 15px;
`,M=o.span`
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
`,w=o.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ff4444;
`;function T(){const i=p();u(),x();const[n,d]=s.useState({starthere:!0,behavior:!1,socialization:!1,hygiene:!1,badhabits:!1,mental:!1});s.useEffect(()=>{const t=()=>{const r={starthere:!0,behavior:localStorage.getItem("behavior_unlocked")==="true",socialization:localStorage.getItem("socialization_unlocked")==="true",hygiene:localStorage.getItem("hygiene_unlocked")==="true",badhabits:localStorage.getItem("badhabits_unlocked")==="true",mental:localStorage.getItem("mental_unlocked")==="true"};d(r)};return t(),window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[]);const l=t=>{const r=a.find(c=>c.id===t);r&&r.route&&n[t]&&i(r.route)};return e.jsxs(h,{children:[e.jsx(g,{children:"Módulos de Treinamento"}),e.jsx(f,{children:a.map(t=>e.jsxs(m,{onClick:()=>l(t.id),locked:!n[t.id].toString(),children:[e.jsxs(b,{children:[e.jsx(k,{children:e.jsx(t.icon,{size:24})}),e.jsx(v,{children:t.title})]}),e.jsx(j,{children:t.description}),e.jsx(M,{children:t.duration}),!n[t.id]&&e.jsx(w,{children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})})]},t.id))})]})}export{T as default};
