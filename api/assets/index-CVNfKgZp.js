import{A as ce,r as c,a5 as G,c as U,aa as W,j as e,a6 as A,ab as ut,ac as ve,ad as ye,ae as xt,af as gt,h as ft,K as ht,ag as Ae,ah as mt,_ as R,$ as Te,ai as bt,aj as vt,F as yt,ak as jt,al as $t,am as Dt,an as Ee,ao as kt,ap as wt,X as z,aq as Ne,l as Ct,ar as St,as as At,at as Tt}from"./index-Dye69HlV.js";import{d as o}from"./styled-components.browser.esm--5_Wn-ai.js";import{T as Et}from"./triangle-alert-8qwZl-cm.js";import{C as Nt}from"./chevron-down-DFj8oiUy.js";import{T as Rt}from"./trash-2-BpMvl8tP.js";import{f as je,l as zt}from"./index-TL3IBvcq.js";import{D as Ft}from"./dog-BTx2Crur.js";import{U as Ot}from"./utensils-CVgCMBcr.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=ce("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=ce("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=ce("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=ce("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]),qt=o.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-height: 90vh;
    overflow-y: auto;
    padding-bottom: 80px;
  }
`,Lt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Bt=o.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;o.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;const Z=o.div`
  margin-bottom: 20px;
`,Q=o.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
`,re=o.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,Ht=o.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,Vt=o.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`,Re=o.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`,Gt=o(Re)`
  background-color: #007bff;
  color: white;
  border: none;
  
  &:hover {
    background-color: #0056b3;
  }
`,Ut=o(Re)`
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e9ecef;
  }
`,Wt=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;function Zt({onClose:t,onSuccess:i}){const[r,s]=c.useState({date:new Date().toISOString().split("T")[0],time:new Date().toTimeString().slice(0,5),category:"veterinario",title:"",description:"",location:""}),{addDocument:g}=G("diary"),{user:b}=U(),{toast:l}=W(),y=async n=>{n.preventDefault();try{const u=await g({...r,date:A.fromDate(v(r.date,r.time)),userId:b.uid,createdAt:A.now()});u&&u.type==="SUCCESS"?(l({title:"Sucesso!",description:"Visita ao veterinário registrada com sucesso.",variant:"default"}),i&&i(),t()):l({title:"Erro",description:"Não foi possível adicionar o registro. Tente novamente.",variant:"destructive"})}catch(u){console.error("Error adding record:",u),l({title:"Erro",description:"Ocorreu um erro ao adicionar o registro. Tente novamente.",variant:"destructive"})}},v=(n,u)=>{const[S,$,w]=n.split("-").map(h=>parseInt(h,10)),[k,f]=u.split(":").map(h=>parseInt(h,10));return new Date(S,$-1,w,k,f)};return e.jsxs(qt,{children:[e.jsx(Lt,{children:e.jsx(Bt,{children:"Nova Visita ao Veterinário"})}),e.jsxs("form",{onSubmit:y,children:[e.jsxs(Wt,{children:[e.jsxs(Z,{children:[e.jsx(Q,{children:"Data"}),e.jsx(re,{type:"date",value:r.date,onChange:n=>s({...r,date:n.target.value}),required:!0})]}),e.jsxs(Z,{children:[e.jsx(Q,{children:"Hora"}),e.jsx(re,{type:"time",value:r.time,onChange:n=>s({...r,time:n.target.value}),required:!0})]})]}),e.jsxs(Z,{children:[e.jsx(Q,{children:"Título"}),e.jsx(re,{type:"text",value:r.title,onChange:n=>s({...r,title:n.target.value}),placeholder:"Ex: Consulta de rotina, Exame de sangue",required:!0})]}),e.jsxs(Z,{children:[e.jsx(Q,{children:"Descrição"}),e.jsx(Ht,{value:r.description,onChange:n=>s({...r,description:n.target.value}),placeholder:"Descreva os detalhes da visita...",required:!0})]}),e.jsxs(Z,{children:[e.jsx(Q,{children:"Localização (opcional)"}),e.jsx(re,{type:"text",value:r.location,onChange:n=>s({...r,location:n.target.value}),placeholder:"Nome da clínica ou endereço"})]}),e.jsxs(Vt,{children:[e.jsx(Ut,{type:"button",onClick:t,children:"Cancelar"}),e.jsx(Gt,{type:"submit",children:"Salvar"})]})]})]})}const Qt=o.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-height: 90vh;
    overflow-y: auto;
    padding-bottom: 80px;
  }
`,Kt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Xt=o.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;o.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;const q=o.div`
  margin-bottom: 20px;
`,L=o.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
`,K=o.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,Yt=o.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,Jt=o.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`,ze=o.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`,eo=o(ze)`
  background-color: #007bff;
  color: white;
  border: none;
  
  &:hover {
    background-color: #0056b3;
  }
`,to=o(ze)`
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e9ecef;
  }
`,$e=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;function oo({onClose:t,onSuccess:i}){const[r,s]=c.useState({date:new Date().toISOString().split("T")[0],time:new Date().toTimeString().slice(0,5),weight:"",height:"",length:"",notes:"",category:"peso"}),{addDocument:g}=G("diary"),{user:b}=U(),{toast:l}=W(),y=async n=>{n.preventDefault();try{const u=await g({...r,date:A.fromDate(v(r.date,r.time)),userId:b.uid,createdAt:A.now()});u&&u.type==="SUCCESS"?(l({title:"Sucesso!",description:"Registro de peso adicionado com sucesso.",variant:"default"}),i&&i(),t()):l({title:"Erro",description:"Não foi possível adicionar o registro. Tente novamente.",variant:"destructive"})}catch(u){console.error("Error adding record:",u),l({title:"Erro",description:"Ocorreu um erro ao adicionar o registro. Tente novamente.",variant:"destructive"})}},v=(n,u)=>{const[S,$,w]=n.split("-").map(h=>parseInt(h,10)),[k,f]=u.split(":").map(h=>parseInt(h,10));return new Date(S,$-1,w,k,f)};return e.jsxs(Qt,{children:[e.jsx(Kt,{children:e.jsx(Xt,{children:"Novo Registro de Peso e Medidas"})}),e.jsxs("form",{onSubmit:y,children:[e.jsxs($e,{children:[e.jsxs(q,{children:[e.jsx(L,{children:"Data"}),e.jsx(K,{type:"date",value:r.date,onChange:n=>s({...r,date:n.target.value}),required:!0})]}),e.jsxs(q,{children:[e.jsx(L,{children:"Hora"}),e.jsx(K,{type:"time",value:r.time,onChange:n=>s({...r,time:n.target.value}),required:!0})]})]}),e.jsxs($e,{children:[e.jsxs(q,{children:[e.jsx(L,{children:"Peso (kg)"}),e.jsx(K,{type:"number",step:"0.1",value:r.weight,onChange:n=>s({...r,weight:n.target.value}),placeholder:"Ex: 5.2",required:!0})]}),e.jsxs(q,{children:[e.jsx(L,{children:"Altura (cm)"}),e.jsx(K,{type:"number",value:r.height,onChange:n=>s({...r,height:n.target.value}),placeholder:"Ex: 25",required:!0})]})]}),e.jsxs(q,{children:[e.jsx(L,{children:"Comprimento (cm)"}),e.jsx(K,{type:"number",value:r.length,onChange:n=>s({...r,length:n.target.value}),placeholder:"Ex: 40",required:!0})]}),e.jsxs(q,{children:[e.jsx(L,{children:"Observações"}),e.jsx(Yt,{value:r.notes,onChange:n=>s({...r,notes:n.target.value}),placeholder:"Adicione observações relevantes..."})]}),e.jsxs(Jt,{children:[e.jsx(to,{type:"button",onClick:t,children:"Cancelar"}),e.jsx(eo,{type:"submit",children:"Salvar"})]})]})]})}const ro=o.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-height: 90vh;
    overflow-y: auto;
    padding-bottom: 80px;
  }
`,ao=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,no=o.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;o.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;const X=o.div`
  margin-bottom: 20px;
`,Y=o.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
`,ae=o.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,so=o.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,io=o.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`,Fe=o.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`,co=o(Fe)`
  background-color: #007bff;
  color: white;
  border: none;
  
  &:hover {
    background-color: #0056b3;
  }
`,lo=o(Fe)`
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e9ecef;
  }
`,po=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;function uo({onClose:t,onSuccess:i}){const[r,s]=c.useState({date:new Date().toISOString().split("T")[0],time:new Date().toTimeString().slice(0,5),duration:"",location:"",notes:"",category:"passeio"}),{addDocument:g}=G("diary"),{user:b}=U(),{toast:l}=W(),y=async n=>{n.preventDefault();try{const u=await g({...r,date:A.fromDate(v(r.date,r.time)),userId:b.uid,createdAt:A.now()});u&&u.type==="SUCCESS"?(l({title:"Sucesso!",description:"Registro de passeio adicionado com sucesso.",variant:"default"}),i&&i(),t()):l({title:"Erro",description:"Não foi possível adicionar o registro. Tente novamente.",variant:"destructive"})}catch(u){console.error("Error adding record:",u),l({title:"Erro",description:"Ocorreu um erro ao adicionar o registro. Tente novamente.",variant:"destructive"})}},v=(n,u)=>{const[S,$,w]=n.split("-").map(h=>parseInt(h,10)),[k,f]=u.split(":").map(h=>parseInt(h,10));return new Date(S,$-1,w,k,f)};return e.jsxs(ro,{children:[e.jsx(ao,{children:e.jsx(no,{children:"Novo Registro de Passeio"})}),e.jsxs("form",{onSubmit:y,children:[e.jsxs(po,{children:[e.jsxs(X,{children:[e.jsx(Y,{children:"Data"}),e.jsx(ae,{type:"date",value:r.date,onChange:n=>s({...r,date:n.target.value}),required:!0})]}),e.jsxs(X,{children:[e.jsx(Y,{children:"Hora"}),e.jsx(ae,{type:"time",value:r.time,onChange:n=>s({...r,time:n.target.value}),required:!0})]})]}),e.jsxs(X,{children:[e.jsx(Y,{children:"Duração (minutos)"}),e.jsx(ae,{type:"number",value:r.duration,onChange:n=>s({...r,duration:n.target.value}),placeholder:"Ex: 30",required:!0})]}),e.jsxs(X,{children:[e.jsx(Y,{children:"Local"}),e.jsx(ae,{type:"text",value:r.location,onChange:n=>s({...r,location:n.target.value}),placeholder:"Onde foi o passeio?",required:!0})]}),e.jsxs(X,{children:[e.jsx(Y,{children:"Observações"}),e.jsx(so,{value:r.notes,onChange:n=>s({...r,notes:n.target.value}),placeholder:"Adicione observações relevantes sobre o passeio..."})]}),e.jsxs(io,{children:[e.jsx(lo,{type:"button",onClick:t,children:"Cancelar"}),e.jsx(co,{type:"submit",children:"Salvar"})]})]})]})}const xo=o.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-height: 90vh;
    overflow-y: auto;
    padding-bottom: 80px;
  }
`,go=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,fo=o.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;o.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;const J=o.div`
  margin-bottom: 20px;
`,ee=o.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
`,ne=o.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,ho=o.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,mo=o.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`,Oe=o.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`,bo=o(Oe)`
  background-color: #007bff;
  color: white;
  border: none;
  
  &:hover {
    background-color: #0056b3;
  }
`,vo=o(Oe)`
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e9ecef;
  }
`,yo=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;function jo({onClose:t,onSuccess:i}){const[r,s]=c.useState({date:new Date().toISOString().split("T")[0],time:new Date().toTimeString().slice(0,5),foodType:"",quantity:"",notes:"",category:"alimentacao"}),{addDocument:g}=G("diary"),{user:b}=U(),{toast:l}=W(),y=async n=>{n.preventDefault();try{(await g({...r,date:A.fromDate(v(r.date,r.time)),userId:b.uid,createdAt:A.now()})).type==="SUCCESS"?(l({title:"Sucesso!",description:"Registro de alimentação adicionado com sucesso.",variant:"default"}),i&&i(),t()):l({title:"Erro",description:"Não foi possível adicionar o registro. Tente novamente.",variant:"destructive"})}catch(u){console.error("Error adding record:",u),l({title:"Erro",description:"Ocorreu um erro ao adicionar o registro. Tente novamente.",variant:"destructive"})}},v=(n,u)=>{const[S,$,w]=n.split("-").map(h=>parseInt(h,10)),[k,f]=u.split(":").map(h=>parseInt(h,10));return new Date(S,$-1,w,k,f)};return e.jsxs(xo,{children:[e.jsx(go,{children:e.jsx(fo,{children:"Novo Registro de Alimentação"})}),e.jsxs("form",{onSubmit:y,children:[e.jsxs(yo,{children:[e.jsxs(J,{children:[e.jsx(ee,{children:"Data"}),e.jsx(ne,{type:"date",value:r.date,onChange:n=>s({...r,date:n.target.value}),required:!0})]}),e.jsxs(J,{children:[e.jsx(ee,{children:"Hora"}),e.jsx(ne,{type:"time",value:r.time,onChange:n=>s({...r,time:n.target.value}),required:!0})]})]}),e.jsxs(J,{children:[e.jsx(ee,{children:"Tipo de Alimento"}),e.jsx(ne,{type:"text",value:r.foodType,onChange:n=>s({...r,foodType:n.target.value}),placeholder:"Ex: Ração Premium, Carne, Frango",required:!0})]}),e.jsxs(J,{children:[e.jsx(ee,{children:"Quantidade"}),e.jsx(ne,{type:"text",value:r.quantity,onChange:n=>s({...r,quantity:n.target.value}),placeholder:"Ex: 100g, 1 xícara",required:!0})]}),e.jsxs(J,{children:[e.jsx(ee,{children:"Observações"}),e.jsx(ho,{value:r.notes,onChange:n=>s({...r,notes:n.target.value}),placeholder:"Adicione observações relevantes sobre a alimentação..."})]}),e.jsxs(mo,{children:[e.jsx(vo,{type:"button",onClick:t,children:"Cancelar"}),e.jsx(bo,{type:"submit",children:"Salvar"})]})]})]})}const $o=o.div`
  padding: 20px;
`,Do=o.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`,se=o.div`
  margin-bottom: 20px;
`,ie=o.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
`,pe=o.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,ko=o.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,wo=o.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`,Me=o.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`,Co=o(Me)`
  background-color: #007bff;
  color: white;
  border: none;
  
  &:hover {
    background-color: #0056b3;
  }
`,So=o(Me)`
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e9ecef;
  }
`,Ao=({onClose:t,onSuccess:i})=>{const[r,s]=c.useState(""),[g,b]=c.useState(""),[l,y]=c.useState(new Date().toISOString().split("T")[0]),[v,n]=c.useState(new Date().toTimeString().slice(0,5)),{addDocument:u}=G("diary"),{user:S}=U(),{toast:$}=W(),w=async f=>{f.preventDefault();try{const C=await u({type:"other",title:r,description:g,date:A.fromDate(k(l,v)),userId:S.uid,createdAt:A.now(),category:"outros"});C&&C.type==="SUCCESS"?($({title:"Sucesso!",description:"Registro adicionado com sucesso.",variant:"default"}),i&&i(),t()):$({title:"Erro",description:"Não foi possível adicionar o registro. Tente novamente.",variant:"destructive"})}catch(C){console.error("Error adding record:",C),$({title:"Erro",description:"Ocorreu um erro ao adicionar o registro. Tente novamente.",variant:"destructive"})}},k=(f,C)=>{const[h,O,_]=f.split("-").map(M=>parseInt(M,10)),[T,E]=C.split(":").map(M=>parseInt(M,10));return new Date(h,O-1,_,T,E)};return e.jsxs($o,{children:[e.jsx(Do,{children:"Novo Registro"}),e.jsxs("form",{onSubmit:w,children:[e.jsxs(se,{children:[e.jsx(ie,{children:"Título"}),e.jsx(pe,{type:"text",value:r,onChange:f=>s(f.target.value),required:!0,placeholder:"Digite um título para o registro"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[e.jsxs(se,{children:[e.jsx(ie,{children:"Data"}),e.jsx(pe,{type:"date",value:l,onChange:f=>y(f.target.value),required:!0})]}),e.jsxs(se,{children:[e.jsx(ie,{children:"Hora"}),e.jsx(pe,{type:"time",value:v,onChange:f=>n(f.target.value),required:!0})]})]}),e.jsxs(se,{children:[e.jsx(ie,{children:"Descrição"}),e.jsx(ko,{value:g,onChange:f=>b(f.target.value),required:!0,placeholder:"Descreva o registro em detalhes"})]}),e.jsxs(wo,{children:[e.jsx(So,{type:"button",onClick:t,children:"Cancelar"}),e.jsx(Co,{type:"submit",children:"Salvar"})]})]})]})},To=(t,i,r,s,g,b,l)=>{const[y,v]=c.useState(null),[n,u]=c.useState(null),S=c.useRef(!1),$=c.useRef(i).current,w=c.useRef(r).current,k=c.useRef(s).current;return c.useEffect(()=>{let f;f=ut(ft,t),$&&(f=ve(f,ye(...$))),k&&(f=ve(f,ye(...k)));const C=xt(f,h=>{const O=[];h.forEach(_=>{O.push({..._.data(),id:_.id})}),v(O),u(null),S.current=!0},h=>{console.log("Erro na coleção ",t),console.log(h),u(h.message||"Could not list transactions.")});return()=>C()},[t,$,k,w,gt]),{documents:y,error:n}},Eo="AlertDialog",[No,_r]=ht(Eo,[Ae]),F=Ae(),Ro=t=>{const{__scopeAlertDialog:i,...r}=t,s=F(i);return c.createElement(kt,R({},s,r,{modal:!0}))},zo=t=>{const{__scopeAlertDialog:i,...r}=t,s=F(i);return c.createElement(wt,R({},s,r))},Fo=c.forwardRef((t,i)=>{const{__scopeAlertDialog:r,...s}=t,g=F(r);return c.createElement(mt,R({},g,s,{ref:i}))}),_e="AlertDialogContent",[Oo,Mo]=No(_e),_o=c.forwardRef((t,i)=>{const{__scopeAlertDialog:r,children:s,...g}=t,b=F(r),l=c.useRef(null),y=Te(i,l),v=c.useRef(null);return c.createElement(bt,{contentName:_e,titleName:Io,docsSlug:"alert-dialog"},c.createElement(Oo,{scope:r,cancelRef:v},c.createElement(vt,R({role:"alertdialog"},b,g,{ref:y,onOpenAutoFocus:yt(g.onOpenAutoFocus,n=>{var u;n.preventDefault(),(u=v.current)===null||u===void 0||u.focus({preventScroll:!0})}),onPointerDownOutside:n=>n.preventDefault(),onInteractOutside:n=>n.preventDefault()}),c.createElement(jt,null,s),!1)))}),Io="AlertDialogTitle",Po=c.forwardRef((t,i)=>{const{__scopeAlertDialog:r,...s}=t,g=F(r);return c.createElement($t,R({},g,s,{ref:i}))}),qo=c.forwardRef((t,i)=>{const{__scopeAlertDialog:r,...s}=t,g=F(r);return c.createElement(Dt,R({},g,s,{ref:i}))}),Lo=c.forwardRef((t,i)=>{const{__scopeAlertDialog:r,...s}=t,g=F(r);return c.createElement(Ee,R({},g,s,{ref:i}))}),Bo="AlertDialogCancel",Ho=c.forwardRef((t,i)=>{const{__scopeAlertDialog:r,...s}=t,{cancelRef:g}=Mo(Bo,r),b=F(r),l=Te(i,g);return c.createElement(Ee,R({},b,s,{ref:l}))}),Vo=Ro,Go=zo,Ie=Fo,Pe=_o,qe=Lo,Le=Ho,Be=Po,He=qo,Uo=Vo,Wo=Go,Ve=c.forwardRef(({className:t,...i},r)=>e.jsx(Ie,{className:z("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...i,ref:r}));Ve.displayName=Ie.displayName;const Ge=c.forwardRef(({className:t,...i},r)=>e.jsxs(Wo,{children:[e.jsx(Ve,{}),e.jsx(Pe,{ref:r,className:z("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...i})]}));Ge.displayName=Pe.displayName;const Ue=({className:t,...i})=>e.jsx("div",{className:z("flex flex-col space-y-2 text-center sm:text-left",t),...i});Ue.displayName="AlertDialogHeader";const We=({className:t,...i})=>e.jsx("div",{className:z("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...i});We.displayName="AlertDialogFooter";const Ze=c.forwardRef(({className:t,...i},r)=>e.jsx(Be,{ref:r,className:z("text-lg font-semibold",t),...i}));Ze.displayName=Be.displayName;const Qe=c.forwardRef(({className:t,...i},r)=>e.jsx(He,{ref:r,className:z("text-sm text-muted-foreground",t),...i}));Qe.displayName=He.displayName;const Ke=c.forwardRef(({className:t,...i},r)=>e.jsx(qe,{ref:r,className:z(Ne(),t),...i}));Ke.displayName=qe.displayName;const Xe=c.forwardRef(({className:t,...i},r)=>e.jsx(Le,{ref:r,className:z(Ne({variant:"outline"}),"mt-2 sm:mt-0",t),...i}));Xe.displayName=Le.displayName;const Zo=o.div`
  margin-top: 0;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 5px;
  
  /* Estilo da barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d1d1d1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #b8b8b8;
  }

  @media (max-width: 600px) {
    max-height: none;
    height: auto;
    padding-bottom: 72px;
    padding-top: 0;
  }
`,Qo=o.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
`,Ko=o.p`
  color: #666;
  font-style: italic;
  padding: 20px;
  text-align: center;
  background: #f9f9f9;
  border-radius: 8px;
`,Xo=o.div`
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
`,Yo=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.2s, border-radius 0.3s;
  position: relative;
  border-radius: ${t=>t.expanded==="true"?"8px 8px 0 0":"8px"};
  
  &:hover {
    background-color: #e9e9e9;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 1px;
    background-color: #e0e0e0;
    opacity: ${t=>t.expanded==="true"?"1":"0"};
    transition: opacity 0.2s;
  }
`,Jo=o.div`
  font-weight: 500;
`,er=o.span`
  color: #666;
  margin-left: 10px;
  font-size: 14px;
`,tr=o.div`
  padding: 0;
  background: white;
  height: ${t=>t.expanded==="true"?"auto":"0"};
  max-height: ${t=>t.expanded==="true"?"1000px":"0"};
  overflow: hidden;
  opacity: ${t=>t.expanded==="true"?"1":"0"};
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
  border-top: ${t=>t.expanded==="true"?"1px solid #eee":"none"};
  border-radius: 0 0 8px 8px;
  margin-top: ${t=>t.expanded==="true"?"-1px":"0"};
`,or=o.div`
  padding: 15px;
  opacity: ${t=>t.expanded==="true"?"1":"0"};
  transition: opacity 0.2s ease-in-out;
  transition-delay: ${t=>t.expanded==="true"?"0.1s":"0"};
`,rr=o.div`
  display: flex;
  gap: 10px;
`,De=o.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  padding: 5px;
  
  &:hover {
    color: ${t=>t.$delete?"#dc3545":"#007bff"};
  }
`,B=o.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,H=o.span`
  font-weight: 600;
  color: #555;
  margin-right: 12px;
  min-width: 120px;
  display: block;
  margin-bottom: 4px;
  
  @media (min-width: 640px) {
    margin-bottom: 0;
    flex-shrink: 0;
  }
`,V=o.span`
  color: #333;
  flex: 1;
  display: block;
  word-break: break-word;
`,ke=o.hr`
  margin: 15px 0;
  border: 0;
  height: 1px;
  background-color: #eee;
`,ar=o.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`,ue=o.button`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${t=>t.active==="true"?"#007bff":"#f0f0f0"};
  color: ${t=>t.active==="true"?"white":"#333"};
  border: none;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background-color: ${t=>t.active==="true"?"#0056b3":"#e0e0e0"};
  }
`,nr=o.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  color: #666;
`,sr=o.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`,xe=o.button`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${t=>t.active==="true"?"#007bff":"#f0f0f0"};
  color: ${t=>t.active==="true"?"white":"#333"};
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${t=>t.active==="true"?"#0056b3":"#e0e0e0"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ir=o.div`
  margin-bottom: 15px;
`,cr=o.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,dr=o.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`,ge=o.div`
  flex: 1;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
`,fe=o.div`
  font-size: 24px;
  font-weight: 600;
  color: #007bff;
`,he=o.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`,lr=o.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  transform: ${t=>t.expanded==="true"?"rotate(180deg)":"rotate(0)"};
`;o.div`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  background-color: ${t=>{switch(t.category){case"veterinario":return"#4a90e2";case"peso":return"#50b83c";case"passeio":return"#9c6ade";case"alimentacao":return"#f49342";default:return"#637381"}}};
`;const we=o.div`
  color: #666;
  font-style: italic;
  padding: 10px 0;
  text-align: center;
`;function te({category:t,columns:i}){const[r,s]=c.useState([]),[g,b]=c.useState(!0),[l,y]=c.useState("all"),[v,n]=c.useState({}),[u,S]=c.useState(""),[$,w]=c.useState(1),k=5,[f,C]=c.useState(!1),[h,O]=c.useState(null),{deleteDocument:_}=G("diary"),{user:T}=U(),{toast:E}=W(),{documents:N,error:M}=To("diary",["userId","==",T==null?void 0:T.uid]);c.useEffect(()=>{if(b(!0),N)try{console.log("Todas as categorias disponíveis:",N.map(x=>x.category)),console.log("Categoria que estamos filtrando:",t);let a=N.filter(x=>x.category===t||t==="veterinario"&&(x.category==="vet"||x.category==="veterinária"||x.category==="veterinaria")||t==="passeio"&&(x.category==="passeios"||x.category==="walk")||t==="alimentacao"&&(x.category==="alimentação"||x.category==="comida"||x.category==="food")||t==="peso"&&(x.category==="weight"||x.category==="medidas")||t==="outros"&&(x.category==="other"||x.category==="outro"));console.log("Registros filtrados por categoria:",a.length),a.sort((x,D)=>{var m,p;try{const j=(m=x.date)!=null&&m.toDate?x.date.toDate():new Date(x.date);return((p=D.date)!=null&&p.toDate?D.date.toDate():new Date(D.date))-j}catch(j){return console.error("Erro ao ordenar datas:",j),0}});let d=a;if(l==="week"){const x=new Date;x.setDate(x.getDate()-7),d=a.filter(D=>{try{return D.date&&D.date.toDate&&D.date.toDate()>=x}catch(m){return console.error("Erro ao filtrar por semana:",m,D),!1}})}else if(l==="month"){const x=new Date;x.setMonth(x.getMonth()-1),d=a.filter(D=>{try{return D.date&&D.date.toDate&&D.date.toDate()>=x}catch(m){return console.error("Erro ao filtrar por mês:",m,D),!1}})}u.trim()&&(d=d.filter(x=>Object.keys(x).some(D=>{const m=x[D];return typeof m=="string"&&m.toLowerCase().includes(u.toLowerCase())}))),s(d),w(1);const I={};d.forEach(x=>{I[x.id]=!1}),n(I)}catch(a){console.error("Erro ao processar documentos:",a),E({title:"Erro ao processar dados",description:"Ocorreu um erro ao processar os dados. Tente novamente.",variant:"destructive"})}finally{b(!1)}},[N,l,u,t,E,T==null?void 0:T.uid,i]),c.useEffect(()=>{M?(console.error(`Erro na coleção ${t}:`,M),E({title:"Erro ao carregar histórico",description:"Estamos com problemas técnicos para carregar o histórico. Tente novamente mais tarde.",variant:"destructive"}),b(!1)):N&&N.length===0&&(s([]),b(!1))},[M,t,E,N]);const Ye=async a=>{O(a),C(!0)},Je=async()=>{if(h)try{await _(h),s(a=>a.filter(d=>d.id!==h)),E({title:"Sucesso!",description:"Registro excluído com sucesso.",variant:"default"})}catch(a){console.error("Error deleting record:",a),E({title:"Erro",description:"Não foi possível excluir o registro. Tente novamente.",variant:"destructive"})}finally{C(!1),O(null)}},me=a=>{n(d=>({...d,[a]:!d[a]}))},de=a=>{try{if(!a)return"Data não disponível";const d=a.toDate?a.toDate():new Date(a);return je(d,"dd 'de' MMMM 'de' yyyy",{locale:zt})}catch(d){return console.error("Erro ao formatar data:",d,a),"Data inválida"}},et=a=>{try{if(!a)return"";const d=a.toDate?a.toDate():new Date(a);return je(d,"HH:mm")}catch(d){return console.error("Erro ao formatar hora:",d,a),""}},tt=r.length,ot=r.filter(a=>{try{const d=new Date;return d.setDate(d.getDate()-7),a.date&&a.date.toDate&&a.date.toDate()>=d}catch(d){return console.error("Erro ao processar data do registro:",d,a),!1}}).length,rt=r.filter(a=>{try{const d=new Date;return d.setMonth(d.getMonth()-1),a.date&&a.date.toDate&&a.date.toDate()>=d}catch(d){return console.error("Erro ao processar data do registro:",d,a),!1}}).length,be=$*k,at=be-k,nt=r.slice(at,be),oe=Math.ceil(r.length/k),st=a=>w(a),it=()=>w(a=>Math.max(a-1,1)),ct=()=>w(a=>Math.min(a+1,oe)),le=(a,d)=>{if(!d)return"";switch(a){case"weight":return`${d} kg`;case"height":case"length":return`${d} cm`;case"duration":return`${d} minutos`;case"nextAppointment":return de(d);default:return d}},dt=(a,d,I)=>{if(!a)return e.jsx(we,{children:"Nenhum detalhe disponível"});if(console.log("Categoria do registro:",a.category),console.log("Categoria esperada:",d),console.log("Todos os campos do registro:",Object.keys(a)),d==="veterinario"){const p=[];if(a.title&&p.push({key:"title",label:"Título",value:a.title}),a.description&&p.push({key:"description",label:"Descrição",value:a.description}),a.location&&p.push({key:"location",label:"Localização",value:a.location}),a.vetName&&p.push({key:"vetName",label:"Veterinário",value:a.vetName}),a.procedure&&p.push({key:"procedure",label:"Procedimento",value:a.procedure}),a.reason&&p.push({key:"reason",label:"Motivo",value:a.reason}),p.length>0||a.notes)return e.jsxs("div",{className:"space-y-4",children:[p.length>0&&e.jsx("div",{className:"space-y-3",children:p.map(j=>e.jsxs(B,{children:[e.jsxs(H,{children:[j.label,":"]}),e.jsx(V,{children:j.value})]},j.key))}),a.notes&&e.jsxs("div",{children:[p.length>0&&e.jsx(ke,{}),e.jsxs(B,{children:[e.jsx(H,{children:"Observações:"}),e.jsx(V,{className:"whitespace-pre-line",children:a.notes})]})]})]})}const D={veterinario:["vetName","procedure","reason","nextAppointment"],peso:["weight","height","length"],passeio:["duration","location"],alimentacao:["foodType","quantity"],outros:["title","description"]}[d]||[];console.log("Campos a verificar para esta categoria:",D),console.log("Valores no registro para estes campos:",D.map(p=>({field:p,value:a[p]})));let m=[];if(I&&I.length>0?m=I.map(p=>{const j=a[p.key];return console.log(`Verificando coluna ${p.key}:`,j),{key:p.key,label:p.label,value:j?le(p.key,j):null}}).filter(p=>p.value):m=Object.entries(a).filter(([p,j])=>!["id","date","userId","createdAt","category","notes"].includes(p)&&j).map(([p,j])=>({key:p,label:p.replace(/([A-Z])/g," $1").replace(/^./,P=>P.toUpperCase()).trim(),value:le(p,j)})),d==="veterinario"&&a.nextAppointment&&m.push({key:"nextAppointment",label:"Próxima Consulta",value:de(a.nextAppointment)}),m.length===0&&(a.title&&m.push({key:"title",label:"Título",value:a.title}),a.description&&!m.some(p=>p.key==="description")&&m.push({key:"description",label:"Descrição",value:a.description}),a.location&&!m.some(p=>p.key==="location")&&m.push({key:"location",label:"Localização",value:a.location})),console.log("Campos a serem exibidos após processamento:",m),m.length===0&&!a.notes){const p=Object.entries(a).filter(([j,P])=>!["id","date","userId","createdAt","category","notes"].includes(j)&&P);return console.log("Campos adicionais encontrados:",p),p.length===0?e.jsx(we,{children:"Nenhum detalhe adicional disponível"}):e.jsxs("div",{className:"space-y-4",children:[p.map(([j,P])=>{const lt=j.replace(/([A-Z])/g," $1").replace(/^./,pt=>pt.toUpperCase()).trim();return e.jsxs(B,{children:[e.jsxs(H,{children:[lt,":"]}),e.jsx(V,{children:le(j,P)})]},j)}),a.notes&&e.jsxs(B,{children:[e.jsx(H,{children:"Observações:"}),e.jsx(V,{className:"whitespace-pre-line",children:a.notes})]})]})}return e.jsxs("div",{className:"space-y-4",children:[m.length>0&&e.jsx("div",{className:"space-y-3",children:m.map(p=>e.jsxs(B,{children:[e.jsxs(H,{children:[p.label,":"]}),e.jsx(V,{children:p.value})]},p.key))}),a.notes&&e.jsxs("div",{children:[m.length>0&&e.jsx(ke,{}),e.jsxs(B,{children:[e.jsx(H,{children:"Observações:"}),e.jsx(V,{className:"whitespace-pre-line",children:a.notes})]})]})]})};return e.jsxs(Zo,{children:[e.jsx(Qo,{children:"Histórico de Registros"}),e.jsx(Uo,{open:f,onOpenChange:C,children:e.jsxs(Ge,{className:"border-none shadow-lg",children:[e.jsxs(Ue,{children:[e.jsxs("div",{className:"flex items-center justify-center mb-2",children:[e.jsx(Et,{className:"text-red-500 mr-2",size:24}),e.jsx(Ze,{children:"Confirmar exclusão"})]}),e.jsxs(Qe,{className:"text-center",children:["Tem certeza que deseja excluir este registro?",e.jsx("br",{}),"Esta ação não pode ser desfeita."]})]}),e.jsxs(We,{children:[e.jsx(Xe,{className:"bg-gray-100 hover:bg-gray-200 text-gray-800 border-none",children:"Cancelar"}),e.jsx(Ke,{onClick:Je,className:"bg-red-500 hover:bg-red-600 text-white border-none",children:"Excluir"})]})]})}),e.jsxs(dr,{children:[e.jsxs(ge,{children:[e.jsx(fe,{children:tt}),e.jsx(he,{children:"Total de Registros"})]}),e.jsxs(ge,{children:[e.jsx(fe,{children:ot}),e.jsx(he,{children:"Nesta Semana"})]}),e.jsxs(ge,{children:[e.jsx(fe,{children:rt}),e.jsx(he,{children:"Neste Mês"})]})]}),e.jsx(ir,{children:e.jsx(cr,{type:"text",placeholder:"Buscar registros...",value:u,onChange:a=>S(a.target.value)})}),e.jsxs(ar,{children:[e.jsx(ue,{active:l==="all"?"true":void 0,onClick:()=>y("all"),children:"Todos"}),e.jsx(ue,{active:l==="week"?"true":void 0,onClick:()=>y("week"),children:"Última Semana"}),e.jsx(ue,{active:l==="month"?"true":void 0,onClick:()=>y("month"),children:"Último Mês"})]}),g?e.jsx(nr,{children:"Carregando registros..."}):r.length===0?e.jsx(Ko,{children:"Nenhum registro encontrado."}):e.jsxs(e.Fragment,{children:[nt.map(a=>e.jsxs(Xo,{children:[e.jsxs(Yo,{onClick:()=>me(a.id),expanded:v[a.id]?"true":"false",children:[e.jsxs(Jo,{children:[de(a.date),e.jsx(er,{children:et(a.date)})]}),e.jsxs(rr,{children:[e.jsx(De,{onClick:d=>{d.stopPropagation(),me(a.id)},children:e.jsx(lr,{expanded:v[a.id]?"true":"false",children:e.jsx(Nt,{size:18})})}),e.jsx(De,{$delete:!0,onClick:d=>{d.stopPropagation(),Ye(a.id)},children:e.jsx(Rt,{size:18})})]})]}),e.jsx(tr,{expanded:v[a.id]?"true":"false",children:e.jsx(or,{expanded:v[a.id]?"true":"false",children:dt(a,t,i)})})]},a.id)),oe>1&&e.jsxs(sr,{children:[e.jsx(xe,{onClick:it,disabled:$===1,children:"Anterior"}),Array.from({length:oe},(a,d)=>d+1).map(a=>e.jsx(xe,{active:$===a?"true":void 0,onClick:()=>st(a),children:a},a)),e.jsx(xe,{onClick:ct,disabled:$===oe,children:"Próximo"})]})]})]})}function pr(){const t=[{key:"vetName",label:"Veterinário"},{key:"procedure",label:"Procedimento"},{key:"reason",label:"Motivo"}];return e.jsx(te,{category:"veterinario",columns:t})}function ur(){const t=[{key:"weight",label:"Peso"},{key:"height",label:"Altura"},{key:"length",label:"Comprimento"}];return e.jsx(te,{category:"peso",columns:t})}function xr(){const t=[{key:"duration",label:"Duração (min)"},{key:"location",label:"Local"}];return e.jsx(te,{category:"passeio",columns:t})}function gr(){const t=[{key:"foodType",label:"Tipo de Alimento"},{key:"quantity",label:"Quantidade"}];return e.jsx(te,{category:"alimentacao",columns:t})}function fr(){const t=[{key:"title",label:"Título"},{key:"description",label:"Descrição"}];return e.jsx(te,{category:"outros",columns:t})}const hr=o.div`
  margin-bottom: 20px;
`,mr=o.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`,Ce=o.button`
  padding: 10px 15px;
  background: ${t=>t.active==="true"?"white":"transparent"};
  border: none;
  border-bottom: 2px solid ${t=>t.active==="true"?"#007bff":"transparent"};
  color: ${t=>t.active==="true"?"#007bff":"#666"};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: #007bff;
  }
`,br=o.div`
  padding-top: 20px;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,vr=o.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  max-width: 500px;
  margin: 0 auto;
  padding: 48px 24px 24px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  min-height: 0;
`;function yr({category:t,formComponent:i,listComponent:r}){const[s,g]=c.useState("form"),b=Ct.cloneElement(i,{onSuccess:()=>{g("list")}});return e.jsxs(vr,{children:[e.jsx(hr,{children:e.jsxs(mr,{children:[e.jsxs(Ce,{active:s==="form"?"true":"false",onClick:()=>g("form"),children:[e.jsx(_t,{size:18}),"Registrar"]}),e.jsxs(Ce,{active:s==="list"?"true":"false",onClick:()=>g("list"),children:[e.jsx(Mt,{size:18}),"Histórico"]})]})}),e.jsx(br,{children:s==="form"?b:r})]})}const jr=o.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,$r=o.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
`,Dr=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,kr=o.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: translateY(-2px);
  }
`,wr=o.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`,Cr=o.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 8px;
  color: #007bff;
`,Sr=o.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`,Ar=o.p`
  color: #666;
  margin-bottom: 15px;
`,Se=[{id:"veterinario",title:"Visitas ao Veterinário",icon:Pt,description:"Registre consultas, exames e procedimentos veterinários",color:"bg-blue-500",form:Zt,list:pr},{id:"peso",title:"Peso e Medidas",icon:It,description:"Acompanhe o peso e medidas do seu pet",color:"bg-green-500",form:oo,list:ur},{id:"passeios",title:"Passeios",icon:Ft,description:"Registre os passeios e atividades físicas",color:"bg-purple-500",form:uo,list:xr},{id:"alimentacao",title:"Alimentação",icon:Ot,description:"Controle a alimentação e dieta do seu pet",color:"bg-orange-500",form:jo,list:gr},{id:"outros",title:"Outros Registros",icon:Tt,description:"Registre outros acontecimentos importantes",color:"bg-gray-500",form:Ao,list:fr}];function Ir(){const[t,i]=c.useState(null),[r,s]=c.useState(!1),g=l=>{i(l.id),l.form&&s(!0)},b=()=>{const l=Se.find(n=>n.id===t);if(!l)return null;const y=l.form,v=l.list;return e.jsx(yr,{category:l.id,formComponent:e.jsx(y,{onClose:()=>s(!1)}),listComponent:e.jsx(v,{})})};return e.jsxs(jr,{children:[e.jsx($r,{children:"Diário do Pet"}),e.jsx(St,{open:r,onOpenChange:s,children:e.jsx(At,{className:"max-w-2xl",children:b()})}),e.jsx(Dr,{children:Se.map(l=>{const y=l.icon;return e.jsxs(kr,{onClick:()=>g(l),children:[e.jsxs(wr,{children:[e.jsx(Cr,{children:e.jsx(y,{size:24})}),e.jsx(Sr,{children:l.title})]}),e.jsx(Ar,{children:l.description})]},l.id)})})]})}export{Ir as default};
