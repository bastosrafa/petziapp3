import{a7 as V,r as f,j as e,a8 as L,a9 as T}from"./index-Dye69HlV.js";import{d as t}from"./styled-components.browser.esm--5_Wn-ai.js";import{r as b,t as g,a as H,f as j,l as v}from"./index-TL3IBvcq.js";import{C as I}from"./circle-check-big-5MRl4p2p.js";function O(n,s){b(2,arguments);var a=g(n),o=H(s);return isNaN(o)?new Date(NaN):(o&&a.setDate(a.getDate()+o),a)}function k(n){b(1,arguments);var s=g(n);return s.setHours(0,0,0,0),s}function q(n,s){b(2,arguments);var a=g(n),o=g(s);return a.getTime()>o.getTime()}function F(n,s){b(2,arguments);var a=g(n),o=g(s);return a.getTime()<o.getTime()}const G=t.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,R=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,U=t.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`,Y=t.button`
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
`,h=t.div`
  margin-bottom: 20px;
`,m=t.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
`,N=t.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,$=t.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,X=t.textarea`
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
`,J=t.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`,P=t.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`,K=t(P)`
  background-color: #007bff;
  color: white;
  border: none;
  
  &:hover {
    background-color: #0056b3;
  }
`,Q=t(P)`
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e9ecef;
  }
`;function W({onClose:n}){const{addVaccine:s}=V(),[a,o]=f.useState({name:"",date:new Date().toISOString().split("T")[0],status:"Pendente",type:"V8/V10",notes:""}),d=[{value:"V8/V10",label:"V8/V10"},{value:"antirrabica",label:"Antirrábica"},{value:"gripe",label:"Gripe"},{value:"giardia",label:"Giárdia"},{value:"antipulgas",label:"Anti-pulgas e Carrapatos"},{value:"vermifugo",label:"Vermífugos"},{value:"outro",label:"Outro"}],x=async i=>{if(i.preventDefault(),!(!a.name||!a.date))try{await s(a),o({name:"",date:new Date().toISOString().split("T")[0],status:"Pendente",type:"V8/V10",notes:""})}catch(c){console.error("Error adding vaccine:",c)}};return e.jsxs(G,{children:[e.jsxs(R,{children:[e.jsx(U,{children:"Adicionar Novo"}),n&&e.jsx(Y,{onClick:n,children:e.jsx(L,{size:20})})]}),e.jsxs("form",{onSubmit:x,children:[e.jsxs(h,{children:[e.jsx(m,{children:"Nome"}),e.jsx(N,{type:"text",value:a.name,onChange:i=>o({...a,name:i.target.value}),placeholder:"Nome da vacina ou medicamento",required:!0})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Tipo"}),e.jsx($,{value:a.type,onChange:i=>o({...a,type:i.target.value}),children:d.map(i=>e.jsx("option",{value:i.value,children:i.label},i.value))})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Data de Aplicação"}),e.jsx(N,{type:"date",value:a.date,onChange:i=>o({...a,date:i.target.value}),required:!0})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Status"}),e.jsxs($,{value:a.status,onChange:i=>o({...a,status:i.target.value}),children:[e.jsx("option",{value:"Pendente",children:"Pendente"}),e.jsx("option",{value:"Aplicada",children:"Aplicada"})]})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Observações"}),e.jsx(X,{value:a.notes,onChange:i=>o({...a,notes:i.target.value}),placeholder:"Observações adicionais"})]}),e.jsxs(J,{children:[n&&e.jsx(Q,{type:"button",onClick:n,children:"Cancelar"}),e.jsx(K,{type:"submit",children:"Adicionar Vacina"})]})]})]})}const y=t.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,w=t.div`
  margin-bottom: 20px;
`,D=t.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`,Z=t.div`
  width: 100%;
`,_=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`,A=t.button`
  padding: 10px;
  border: none;
  background: ${n=>n.$active?"#007bff":"#f8f9fa"};
  color: ${n=>n.$active?"white":"#333"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${n=>n.$active?"#0056b3":"#e9ecef"};
  }
`,M=t.div`
  display: ${n=>n.$active?"block":"none"};
`,S=t.div`
  padding: 15px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
`,z=t.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`,B=t.h3`
  font-size: 16px;
  color: #333;
  margin: 0;
`,l=t.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`,E=t.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${n=>n.$variant==="success"?"#28a745":"#6c757d"};
  color: white;
`,ee=t.button`
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 13px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`,te=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`,ne=t.div`
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,ae=t.p`
  color: #666;
  margin: 0;
`,re=t.p`
  color: #dc3545;
  text-align: center;
  margin: 0;
`;function ie(){const{vaccines:n,loading:s,error:a,updateVaccineStatus:o}=V(),[d,x]=f.useState("pending");console.log("Estado do VaccineList:",{loading:s,error:a,vaccinesCount:n.length});const i=async(r,u)=>{try{await o(r,u),T({title:"Sucesso",description:`Vacina marcada como ${u.toLowerCase()}`})}catch{T({title:"Erro",description:"Erro ao atualizar status da vacina.",variant:"destructive"})}},c=n.filter(r=>r.status==="Pendente"),p=n.filter(r=>r.status==="Aplicada").sort((r,u)=>{const C=r.appliedDate?new Date(r.appliedDate):new Date(r.date);return(u.appliedDate?new Date(u.appliedDate):new Date(u.date))-C});return console.log("Vacinas filtradas:",{total:n.length,pending:c.length,applied:p.length}),s?e.jsxs(y,{children:[e.jsx(w,{children:e.jsx(D,{children:"Histórico de Vacinas e Medicamentos"})}),e.jsxs(te,{children:[e.jsx(ne,{}),e.jsx(ae,{children:"Carregando vacinas..."})]})]}):a?e.jsxs(y,{children:[e.jsx(w,{children:e.jsx(D,{children:"Histórico de Vacinas e Medicamentos"})}),e.jsxs(re,{children:["Erro ao carregar vacinas: ",a]})]}):e.jsxs(y,{children:[e.jsx(w,{children:e.jsx(D,{children:"Histórico de Vacinas e Medicamentos"})}),e.jsxs(Z,{children:[e.jsxs(_,{children:[e.jsxs(A,{$active:d==="pending",onClick:()=>x("pending"),children:["Pendentes (",c.length,")"]}),e.jsxs(A,{$active:d==="applied",onClick:()=>x("applied"),children:["Aplicadas (",p.length,")"]})]}),e.jsx(M,{$active:d==="pending",children:c.length>0?c.map(r=>e.jsx(S,{children:e.jsxs(z,{children:[e.jsxs("div",{children:[e.jsx(B,{children:r.name}),e.jsxs(l,{children:["Tipo: ",r.type]}),e.jsxs(l,{children:["Data: ",r.date&&!isNaN(new Date(r.date).getTime())?j(new Date(r.date),"dd 'de' MMMM 'de' yyyy",{locale:v}):"Data não disponível"]}),r.notes&&e.jsxs(l,{children:["Obs: ",r.notes]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"8px"},children:[e.jsx(E,{children:"Pendente"}),e.jsxs(ee,{onClick:()=>i(r.id,"Aplicada"),children:[e.jsx(I,{size:14}),"Marcar como Aplicada"]})]})]})},r.id)):e.jsx(l,{style:{textAlign:"center"},children:"Nenhuma vacina pendente."})}),e.jsx(M,{$active:d==="applied",children:p.length>0?p.map(r=>e.jsx(S,{children:e.jsxs(z,{children:[e.jsxs("div",{children:[e.jsx(B,{children:r.name}),e.jsxs(l,{children:["Tipo: ",r.type]}),e.jsxs(l,{children:["Data: ",r.appliedDate&&!isNaN(new Date(r.appliedDate).getTime())?j(new Date(r.appliedDate),"dd 'de' MMMM 'de' yyyy",{locale:v}):r.date&&!isNaN(new Date(r.date).getTime())?j(new Date(r.date),"dd 'de' MMMM 'de' yyyy",{locale:v}):"Data não disponível"]}),r.notes&&e.jsxs(l,{children:["Obs: ",r.notes]})]}),e.jsx(E,{$variant:"success",children:"Aplicada"})]})},r.id)):e.jsx(l,{style:{textAlign:"center"},children:"Nenhuma vacina aplicada."})})]})]})}const oe=()=>{const{vaccines:n}=V();return f.useEffect(()=>{const a=()=>{const d=k(new Date),x=O(d,3);n.forEach(i=>{if(i.status==="Pendente"){const c=new Date(i.date),p=k(c);q(p,d)&&F(p,x)&&Notification.permission==="granted"&&new Notification("Lembrete de Vacina",{body:`${i.name} está agendada para ${c.toLocaleDateString()}`,icon:"/icon.png"})}})},o=setInterval(a,864e5);return a(),()=>clearInterval(o)},[n]),{requestNotificationPermission:async()=>{try{return await Notification.requestPermission()==="granted"}catch(a){return console.error("Erro ao solicitar permissão de notificação:",a),!1}}}},se=t.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,de=t.div`
  margin-bottom: 30px;
`,ce=t.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`,le=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;function me(){const{requestNotificationPermission:n}=oe();return f.useEffect(()=>{n()},[]),e.jsxs(se,{children:[e.jsx(de,{children:e.jsx(ce,{children:"Carteira de Vacinação e Medicamentos"})}),e.jsxs(le,{children:[e.jsx(W,{}),e.jsx(ie,{})]})]})}export{me as default};
