import{Z as oe,r as P,j as e,u as Ne,a0 as De,a1 as be,a2 as we,a3 as Ee,a4 as Ae}from"./index-Dye69HlV.js";import{d as L}from"./styled-components.browser.esm--5_Wn-ai.js";const Se={happy:"Feliz e energético",neutral:"Estado normal",sad:"Precisando de atenção"},ke=()=>{const{dashboardData:a}=oe(),[r,D]=P.useState("neutral"),[h,z]=P.useState(""),[g,F]=P.useState([]),[C,p]=P.useState(!1),u=s=>{if(!s)return null;try{return s&&s.toDate?s.toDate():s&&s.seconds?new Date(s.seconds*1e3):s instanceof Date?s:typeof s=="string"?new Date(s):(console.error("Formato de timestamp não reconhecido:",s),null)}catch(n){return console.error("Erro ao processar timestamp:",n,s),null}};P.useEffect(()=>{var B,J,q,U,Q,o,t,f,G,Y,K,_,se,te,ne,ie,re,le,ce,de,me,ge,ue,fe,he,pe;if(!a)return;console.log("Dashboard data recebido:",new Date().toLocaleString()),console.log("Dashboard completo:",JSON.stringify(a,(i,l)=>l&&typeof l=="object"&&l.toDate?"[Timestamp]":l,2));const s=new Date;console.log("Verificando última alimentação..."),a.lastFoodEntry?console.log("lastFoodEntry encontrado:",a.lastFoodEntry):(J=(B=a.activities)==null?void 0:B.food)!=null&&J.lastEntry?console.log("activities.food.lastEntry encontrado:",a.activities.food.lastEntry):(U=(q=a.activities)==null?void 0:q.lastFood)!=null&&U.date?console.log("activities.lastFood.date encontrado:",a.activities.lastFood.date):console.log("Nenhum registro de alimentação encontrado no dashboard");const n=((Q=a.lastFoodEntry)==null?void 0:Q.date)||((o=a.lastFoodEntry)==null?void 0:o.timestamp)||((G=(f=(t=a.activities)==null?void 0:t.food)==null?void 0:f.lastEntry)==null?void 0:G.timestamp)||((K=(Y=a.activities)==null?void 0:Y.lastFood)==null?void 0:K.date);console.log("Dados brutos da última alimentação:",n);const v=u(n);console.log("Timestamp processado da última alimentação:",v?v.toLocaleString():"NULL");const b=(_=a.lastFoodEntry)!=null&&_.feedingInterval?parseInt(a.lastFoodEntry.feedingInterval,10):8,w={good:b/2,late:b},j={good:12,late:24};console.log("Verificando último passeio..."),a.lastWalkEntry?console.log("lastWalkEntry encontrado:",a.lastWalkEntry):(te=(se=a.activities)==null?void 0:se.walk)!=null&&te.lastEntry?console.log("activities.walk.lastEntry encontrado:",a.activities.walk.lastEntry):(ie=(ne=a.activities)==null?void 0:ne.lastWalk)!=null&&ie.date?console.log("activities.lastWalk.date encontrado:",a.activities.lastWalk.date):console.log("Nenhum registro de passeio encontrado no dashboard");const W=((re=a.lastWalkEntry)==null?void 0:re.date)||((le=a.lastWalkEntry)==null?void 0:le.timestamp)||((me=(de=(ce=a.activities)==null?void 0:ce.walk)==null?void 0:de.lastEntry)==null?void 0:me.timestamp)||((ue=(ge=a.activities)==null?void 0:ge.lastWalk)==null?void 0:ue.date);console.log("Dados brutos do último passeio:",W);const x=u(W);console.log("Timestamp processado do último passeio:",x?x.toLocaleString():"NULL");const $=u((he=(fe=a.activities)==null?void 0:fe.lastTraining)==null?void 0:he.date),H=u((pe=a.lastVaccine)==null?void 0:pe.date);let c=null;if(v&&!isNaN(v.getTime()))if(v>s)console.error("ALERTA: Data da última alimentação está no futuro:",v.toLocaleString()),console.error("Data atual:",s.toLocaleString()),c=b+1,console.log("CORREÇÃO: Ajustando para considerar alimentação atrasada devido à data futura");else{const i=s.getTime()-v.getTime();c=Math.floor(i/(1e3*60*60)),console.log("Diferença em milissegundos:",i),console.log("Diferença calculada em horas desde última alimentação:",c)}else console.error("Não foi possível calcular o tempo desde a última alimentação - timestamp inválido");let d=null;if(x&&!isNaN(x.getTime()))if(x>s)console.error("ALERTA: Data do último passeio está no futuro:",x.toLocaleString()),console.error("Data atual:",s.toLocaleString()),d=j.late+1,console.log("CORREÇÃO: Ajustando para considerar passeio atrasado devido à data futura");else{const i=s.getTime()-x.getTime();d=Math.floor(i/(1e3*60*60)),console.log("Diferença calculada em horas desde último passeio:",d)}else console.error("Não foi possível calcular o tempo desde o último passeio - timestamp inválido");const y=$?Math.floor((s-$)/(1e3*60*60*24)):null,V=H?Math.floor((s-H)/(1e3*60*60*24)):null;console.log("Horas desde última refeição:",c),console.log("Intervalo de alimentação configurado:",b,"horas"),console.log("Horas desde último passeio:",d),console.log("Dias desde último treino:",y),console.log("Dias desde última vacina:",V);let N="unknown",E=0;console.log("Verificando status de alimentação:"),console.log("- Horas desde última refeição:",c),console.log("- Intervalo configurado:",b,"horas"),console.log("- Limites: bom < "+w.good+" horas, atrasado >= "+w.late+" horas"),c!==null?c<0?(N="late",E=-1,console.log("Alimentação: ATRASADA - Data futura detectada")):c<w.good?(N="recent",E=1,console.log("Alimentação: Recente")):c>=w.late?(N="late",E=-1,console.log("Alimentação: ATRASADA - Já se passaram",c,"horas (limite:",w.late,"horas)")):(N="normal",E=0,console.log("Alimentação: Normal")):console.log("Status de alimentação não pôde ser determinado");let A="unknown",S=0;console.log("Verificando status de passeio:"),console.log("- Horas desde último passeio:",d),console.log("- Limites: bom < "+j.good+" horas, atrasado >= "+j.late+" horas"),d!==null?d<0?(A="late",S=-1,console.log("Passeio: ATRASADO - Data futura detectada")):d<j.good?(A="recent",S=1,console.log("Passeio: Recente")):d>=j.late?(A="late",S=-1,console.log("Passeio: ATRASADO - Já se passaram",d,"horas (limite:",j.late,"horas)")):(A="normal",S=0,console.log("Passeio: Normal")):console.log("Status de passeio não pôde ser determinado");let M=0;y!==null&&(y<2?(M=1,console.log("Treino: Recente")):y>7?(M=-1,console.log("Treino: Atrasado")):console.log("Treino: Normal"));let I=0;V!==null&&V>365&&(I=-1,console.log("Vacina: Atrasada"));const k=E+S+M+I;console.log("Pontuação total:",k);let T="neutral";k>=1?T="happy":k<=-2&&(T="sad"),D(T);const m=[];if(N==="late"&&m.push(`Estou com fome! Já se passaram ${c} horas desde minha última refeição.`),A==="late"&&m.push(`Quero dar um passeio! Faz mais de ${Math.floor(d)} horas que não saio.`),y!==null&&y>7&&m.push("Que tal praticarmos alguns truques?"),I<0&&m.push("Minhas vacinas estão atrasadas!"),m.length===0&&(T==="happy"?m.push("Estou super bem hoje!"):T==="neutral"?m.push("Estou bem. O que vamos fazer hoje?"):m.push("Preciso de mais atenção...")),F(m),z(m[0]||"Olá!"),a.lastFoodEntry)try{const i=a.lastFoodEntry.date;let l=null;if(i&&i.toDate?l=i.toDate():i&&i.seconds?l=new Date(i.seconds*1e3):i instanceof Date&&(l=i),l&&!isNaN(l.getTime())){const X=parseInt(a.lastFoodEntry.feedingInterval||"8",10),Z=new Date;console.log("VERIFICAÇÃO FINAL DE ALIMENTAÇÃO:"),console.log("- Data da última alimentação:",l.toLocaleString()),console.log("- Data atual do sistema:",Z.toLocaleString()),console.log("- Intervalo configurado:",X,"horas");let O,ae;if(l>Z?(console.error("ALERTA: A data da última alimentação está no futuro!"),O=X+1,ae="ATRASADO (data futura)"):(O=(Z.getTime()-l.getTime())/(1e3*60*60),ae=O>=X?"ATRASADO":"EM DIA"),console.log("- Horas decorridas:",O),console.log("- Status calculado:",ae),(O>=X||l>Z)&&N!=="late"){console.warn("Corrigindo status de alimentação para ATRASADO");const ee=[...m],ve=ee.findIndex(ye=>ye.includes("com fome"));ve!==-1&&ee.splice(ve,1);const je=l>Z?"Data futura detectada!":`Já se passaram ${Math.floor(O)} horas`;ee.unshift(`Estou com fome! ${je} desde minha última refeição.`),F(ee),(k===0||k>0)&&D("neutral")}}}catch(i){console.error("Erro na verificação de segurança:",i)}p(!0)},[a]);const R=s=>{const n=s.toLowerCase();return n.includes("passeio")||n.includes("fome")||n.includes("atenção")||n.includes("atençao")?"atencao":n.includes("vacina")||n.includes("crítico")||n.includes("critico")||n.includes("saúde")||n.includes("saude")?"critico":(n.includes("feliz")||n.includes("super bem")||n.includes("bem hoje"),"feliz")};return e.jsx("div",{className:"pet-status-container",children:e.jsxs("div",{className:"pet-status-content",children:[e.jsx("div",{className:"pet-container",children:e.jsxs("div",{className:`pet ${r}`,children:[e.jsx("div",{className:"ear left"}),e.jsx("div",{className:"ear right"}),e.jsx("div",{className:"head"}),e.jsx("div",{className:"eye left"}),e.jsx("div",{className:"eye right"}),e.jsx("div",{className:"nose"}),e.jsx("div",{className:"mouth"})]})}),e.jsxs("div",{className:"pet-status-info",children:[e.jsx("h2",{children:`Como ${a!=null&&a.petName?a.petName:"seu pet"} está hoje:`}),C?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`mood-description ${r==="happy"?"feliz":r==="sad"?"critico":"atencao"}`,children:Se[r]}),e.jsx("div",{className:"mood-messages",children:g.map((s,n)=>e.jsx("div",{className:`mood-message ${R(s)}`,children:s},n))})]}):e.jsx("div",{className:"mood-description",children:"Carregando..."})]})]})})},Te=()=>{var C,p,u,R,s,n,v,b,w,j,W,x,$,H,c,d,y,V,N,E,A,S,M,I,k,T,m,B,J,q,U,Q;const{dashboardData:a,loading:r,error:D}=oe();if(r)return e.jsx("div",{className:"stats-summary-container",children:"Carregando..."});if(D)return e.jsxs("div",{className:"stats-summary-container",children:["Erro: ",D]});if(!a)return e.jsx("div",{className:"stats-summary-container",children:"Nenhum dado disponível"});const h=o=>{if(!o)return"Não registrado";try{let t;if(console.log("Formatando data para timestamp (tipo):",typeof o,o),Object.prototype.toString.call(o)==="[object Date]"?(console.log("É um objeto Date nativo"),t=o):typeof o=="string"&&!isNaN(new Date(o).getTime())?(console.log("É uma string de data válida"),t=new Date(o)):o&&typeof o=="object"&&o.toDate?(console.log("É um timestamp Firestore"),t=o.toDate()):o&&typeof o=="object"&&o.seconds?(console.log("É um objeto com seconds"),t=new Date(o.seconds*1e3)):o&&typeof o=="object"&&o.date?(console.log("Tem propriedade date:",o.date),o.date.toDate?(console.log("date é um timestamp Firestore"),t=o.date.toDate()):o.date.seconds?(console.log("date tem seconds"),t=new Date(o.date.seconds*1e3)):typeof o.date=="string"?(console.log("date é uma string"),t=new Date(o.date)):Object.prototype.toString.call(o.date)==="[object Date]"&&(console.log("date é um objeto Date"),t=o.date)):o&&typeof o=="object"&&(o.appliedDate?(console.log("Tentando usar appliedDate"),t=new Date(o.appliedDate)):o.timestamp&&(console.log("Tentando usar timestamp"),t=new Date(o.timestamp))),!t||isNaN(t.getTime()))return console.log("Data inválida ou não reconhecida:",o),"Data não disponível";const f=t.toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});return console.log("Data formatada final:",f),f}catch(t){return console.error("Erro ao formatar data:",t,o),"Data não disponível"}},z=o=>{if(!o)return"Não registrado";try{if(console.log("Formatando data de vacina:",o),o.date){const t=h(o.date);if(t!=="Data não disponível")return t}return o.appliedDate?h(o.appliedDate):o.timestamp?h(o.timestamp):h(o)}catch(t){return console.error("Erro ao formatar data da vacina:",t),"Data não disponível"}},g=(o,t="activity")=>{var G,Y;if(!o)return t==="vaccine"?"pending":"atrasado";if(t==="vaccine")return((Y=(G=a.health)==null?void 0:G.vaccines)==null?void 0:Y.status)==="up_to_date"||o.status==="Aplicada"?"up_to_date":"pending";let f;try{if(Object.prototype.toString.call(o)==="[object Date]"?f=o:o.toDate?f=o.toDate():typeof o=="string"?f=new Date(o):o.seconds&&(f=new Date(o.seconds*1e3)),!f||isNaN(f.getTime()))return"atrasado";const _=(new Date-f)/(1e3*60*60);return t==="food"?_<=8?"up_to_date":"atrasado":_<=24?"up_to_date":"atrasado"}catch{return"atrasado"}},F=(p=(C=a.health)==null?void 0:C.vaccines)==null?void 0:p.lastVaccine;return e.jsxs("div",{className:"stats-summary-container",children:[e.jsx("h2",{children:"Estatísticas do Pet"}),e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card activity-card",children:[e.jsx("h3",{children:"Passeio e Alimentação"}),e.jsxs("div",{className:"activity-section",children:[e.jsxs("div",{className:"activity-item",children:[e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:"Último Passeio"}),e.jsx("p",{className:"datetime",children:h((s=(R=(u=a.activities)==null?void 0:u.walk)==null?void 0:R.lastEntry)==null?void 0:s.timestamp)}),((b=(v=(n=a.activities)==null?void 0:n.walk)==null?void 0:v.lastEntry)==null?void 0:b.notes)&&e.jsx("p",{className:"notes",children:a.activities.walk.lastEntry.notes})]}),e.jsx("div",{className:`status-badge ${g((W=(j=(w=a.activities)==null?void 0:w.walk)==null?void 0:j.lastEntry)==null?void 0:W.timestamp,"walk")}`,children:g((H=($=(x=a.activities)==null?void 0:x.walk)==null?void 0:$.lastEntry)==null?void 0:H.timestamp,"walk")==="up_to_date"?"Em dia":"Atrasado"})]}),e.jsxs("div",{className:"activity-item",children:[e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:"Última Alimentação"}),e.jsx("p",{className:"datetime",children:h((y=(d=(c=a.activities)==null?void 0:c.food)==null?void 0:d.lastEntry)==null?void 0:y.timestamp)})]}),e.jsx("div",{className:`status-badge ${g((E=(N=(V=a.activities)==null?void 0:V.food)==null?void 0:N.lastEntry)==null?void 0:E.timestamp,"food")}`,children:g((M=(S=(A=a.activities)==null?void 0:A.food)==null?void 0:S.lastEntry)==null?void 0:M.timestamp,"food")==="up_to_date"?"Em dia":"Atrasado"})]})]})]}),e.jsxs("div",{className:"stat-card health-training-card",children:[e.jsx("h3",{children:"Saúde e Treinamento"}),e.jsxs("div",{className:"health-training-section",children:[e.jsxs("div",{className:"vaccine-section",children:[e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:"Vacinação"}),((k=(I=a.health)==null?void 0:I.vaccines)==null?void 0:k.nextVaccine)&&e.jsx("div",{className:"next-dose",children:e.jsxs("p",{className:"datetime",children:["Próxima dose: ",h(a.health.vaccines.nextVaccine)]})}),e.jsx("div",{className:"vaccine-history",children:e.jsxs("p",{className:"datetime",children:["Última dose: ",F?z(a.health.vaccines.lastVaccine):"Não registrado"]})})]}),e.jsx("div",{className:"vaccine-status",children:e.jsx("span",{className:`status-badge ${g((m=(T=a.health)==null?void 0:T.vaccines)==null?void 0:m.lastVaccine,"vaccine")}`,children:g((J=(B=a.health)==null?void 0:B.vaccines)==null?void 0:J.lastVaccine,"vaccine")==="up_to_date"?"Em dia":"Pendente"})})]}),e.jsxs("div",{className:"training-section",children:[e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:"Treinamento"}),e.jsxs("div",{className:"training-progress",children:[e.jsxs("p",{children:["Progresso: ",((q=a.training)==null?void 0:q.completedLessons)||0," aulas concluídas"]}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${(((U=a.training)==null?void 0:U.completedLessons)||0)*10}%`,backgroundColor:"#4CAF50"}})})]})]}),e.jsxs("p",{className:"level-badge",children:["Nível: ",((Q=a.training)==null?void 0:Q.currentLevel)||"Iniciante"]})]})]})]})]})]})},Le=L.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  margin-bottom: 1rem;
  max-width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    height: 200px;
    padding: 1rem;
  }
`,Re=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0;
  }
`,Fe=L.div`
  display: flex;
  gap: 0.5rem;
`,xe=L.button`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #495057;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #e9ecef;
    border-color: #ced4da;
  }
`,Ce=L.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  padding-right: 0.5rem;
`,Ve=L.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background-color: #f8f9fa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 0.25rem;
`,Me=L.div`
  flex-grow: 1;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  h3 {
    color: #2c3e50;
    margin-bottom: 0.25rem;
    font-size: 1rem;
    line-height: 1.2;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    color: #666;
    margin-bottom: 0;
    font-size: 0.9rem;
    line-height: 1.3;
    padding-left: 1.75rem;
  }
`,Ie=L.button`
  background-color: #FF6B6B;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  align-self: center;
  margin-left: 0.5rem;
  box-shadow: 0 2px 4px rgba(255, 107, 107, 0.2);

  &:hover {
    background-color: #ff5252;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(255, 107, 107, 0.3);
  }
`,_e=()=>{const{dashboardData:a}=oe(),r=Ne(),[D,h]=P.useState(0),z=u=>{var R;switch(u){case"training":!((R=a.training)!=null&&R.completedLessons)||a.training.completedLessons<5?r("/content/training/starthere"):a.training.completedLessons<10?r("/content/training/behavior"):a.training.completedLessons<15?r("/content/training/socialization"):a.training.completedLessons<20?r("/content/training/hygiene"):a.training.completedLessons<25?r("/content/training/badhabits"):r("/content/training/mental");break;case"walk":case"food":r("/diario");break;case"vaccine":r("/vacinas");break}},g=[{type:"training",title:"Treinamento Básico",description:"25 lições para ensinar comandos básicos ao seu pet",icon:e.jsx(De,{}),action:"Iniciar Treino",time:"Recomendado diariamente"},{type:"walk",title:"Passeio",description:"Seu pet precisa de um passeio para gastar energia",icon:e.jsx(be,{}),action:"Registrar Passeio",time:"Último passeio: 2 horas atrás"},{type:"food",title:"Alimentação",description:"Hora de alimentar seu pet",icon:e.jsx(we,{}),action:"Registrar Alimentação",time:"Última refeição: 4 horas atrás"},{type:"vaccine",title:"Vacinação",description:"Vacina contra raiva está próxima do vencimento",icon:e.jsx(Ee,{}),action:"Ver Calendário",time:"Vencimento em 15 dias"}],F=()=>{h(u=>(u+1)%g.length)},C=()=>{h(u=>(u-1+g.length)%g.length)},p=g[D];return e.jsxs(Le,{children:[e.jsxs(Re,{children:[e.jsx("h2",{children:"Recomendações"}),e.jsxs(Fe,{children:[e.jsx(xe,{onClick:C,children:"<"}),e.jsx(xe,{onClick:F,children:">"})]})]}),e.jsx(Ce,{children:e.jsxs(Ve,{children:[e.jsxs(Me,{children:[e.jsxs("h3",{children:[p.icon,p.title]}),e.jsx("p",{children:p.description})]}),e.jsx(Ie,{onClick:()=>z(p.type),children:p.action})]})})]})},ze=()=>e.jsx(Ae,{children:e.jsxs("div",{className:"dashboard-container",children:[e.jsx("div",{className:"dashboard-main-section",children:e.jsx("div",{className:"pet-status-wrapper",children:e.jsx(ke,{})})}),e.jsxs("div",{className:"dashboard-secondary-section",children:[e.jsx(Te,{}),e.jsx(_e,{})]})]})});export{ze as default};
