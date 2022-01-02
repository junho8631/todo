var J=Object.defineProperty,K=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var A=(a,t,n)=>t in a?J(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,C=(a,t)=>{for(var n in t||(t={}))U.call(t,n)&&A(a,n,t[n]);if(O)for(var n of O(t))z.call(t,n)&&A(a,n,t[n]);return a},S=(a,t)=>K(a,R(t));import{t as L,r as N,i as f,o as _,c as p,a as e,w as x,v as I,u as v,b as F,d as T,e as Y,f as V,g as j,F as y,h as k,j as D,k as G,p as w,l as h,m as H,n as Q,q as W,s as X,x as Z,y as tt,z as et}from"./vendor.ac822609.js";const ot=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};ot();const st=()=>{const a="my-todo-list",t=N({storage_id:0}),n=o=>{let c=JSON.parse(localStorage.getItem(a)||"[]");c.forEach((i,s)=>{i.id=s}),t.storage_id=c.length,o(c)},d=o=>{localStorage.setItem(a,JSON.stringify(o.value))};return S(C({},L(t)),{loadTodos:n,saveTodos:d})},nt={class:"mb-5"},at={class:"container"},dt={class:"row justify-content-center m-2"},ct={class:"col border border-primary rounded"},lt={class:"row my-2"},rt={class:"col-6"},it=["min"],ut={name:"TodoListNew"},_t=Object.assign(ut,{setup(a){const t=f("today"),n=f("addTodo"),d=N({job:"",date:t,today:t}),o=()=>{d.job.length>0&&(n(d.job,d.date),d.job="",d.date=t)},{job:c,date:i}=L(d);return(s,l)=>(_(),p("section",nt,[e("div",at,[e("div",dt,[e("div",ct,[x(e("input",{type:"text",id:"todo_input",class:"form-control my-2","onUpdate:modelValue":l[0]||(l[0]=r=>F(c)?c.value=r:null),placeholder:"\uC5EC\uAE30\uC5D0 \uD560\uC77C\uC744 \uC801\uC73C\uC138\uC694"},null,512),[[I,v(c)]]),e("div",lt,[e("div",rt,[x(e("input",{type:"date","onUpdate:modelValue":l[1]||(l[1]=r=>F(i)?i.value=r:null),min:v(t)},null,8,it),[[I,v(i)]])]),e("div",{class:"col-6"},[e("button",{type:"button",class:"btn btn-primary btn-sm float-end",onClick:o}," \uC791\uC5C5\uCD94\uAC00 ")])])])])])]))}}),pt=()=>{const a=f("today"),t=(s,l)=>{const r=Date.parse(s.date),u=Date.parse(l.date);return r>u?1:r<u?0:s.id-l.id},n=s=>s.value.filter(l=>l.date<a&&!l.completed).slice().sort(t),d=s=>s.value.filter(l=>l.date==a&&!l.completed).slice().sort(t),o=s=>s.value.filter(l=>l.date==a&&l.completed).slice().sort(t);return{getPendingTodos:n,getActiveTodayTodos:d,getCompletedTodayTodos:o,getAllTodayTodos:s=>d(s).concat(o(s)).slice().sort(t),getAllTodos:s=>s.value.slice().sort(t)}},mt={class:"row"},ft={class:"col"},vt=e("span",{style:{"background-color":"blue"}},"\xA0",-1),gt=D("\xA0 "),yt={class:"col"},ht={class:"btn-group float-end"},bt=e("button",{class:"btn btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown"}," \uB9AC\uC2A4\uD2B8 \uD544\uD130 ",-1),Tt={class:"dropdown-menu dropdown-menu-end"},$t=["onClick"],jt={name:"TodoListMenu"},wt=Object.assign(jt,{emits:["change-filter"],setup(a,{emit:t}){const n=f("filters"),d=T(0),o=Y(()=>n[d.value].str);return V(()=>d.value,c=>{t("change-filter",c)}),(c,i)=>(_(),p("div",mt,[e("div",ft,[vt,gt,e("strong",null,j(v(o)),1)]),e("div",yt,[e("div",ht,[bt,e("ul",Tt,[(_(!0),p(y,null,k(Object.keys(v(n)),s=>(_(),p("li",{key:s},[e("a",{class:"dropdown-item",onClick:l=>d.value=s},j(v(n)[s].str),9,$t)]))),128))])])])]))}}),kt={class:"input-group my-2 input-group-sm"},xt={class:"input-group-text"},Ot=["checked","disabled","onClick"],At={class:"input-group-text"},Ct=["min","value"],St=["value"],Lt=e("button",{class:"btn btn-outline-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown"}," \uD560\uC77C \uAD00\uB9AC ",-1),Nt={class:"dropdown-menu dropdown-menu-end"},It=["onClick"],Ft={class:"col border border-second"},Vt={name:"TodoList"},E=Object.assign(Vt,{props:{data:{type:Array,default:[]}},setup(a){const t=f("removeTodo"),n=f("completeTodo"),d=f("today"),o=[{str:"\uD560\uC77C \uC0AD\uC81C",func:t},{str:"\uD560\uC77C \uC644\uB8CC",func:n}];return(c,i)=>(_(),p("main",null,[(_(!0),p(y,null,k(a.data,(s,l)=>(_(),p("div",{key:s.id},[e("div",kt,[e("div",xt,[e("input",{class:"form-check-input mt-0",type:"checkbox",checked:s.completed,disabled:s.completed,onClick:r=>v(n)(s.id)},null,8,Ot)]),e("div",At,[e("input",{class:"form-input mt-0",type:"date",min:v(d),disabled:"",value:s.date},null,8,Ct)]),e("input",{type:"text",class:"form-control",value:s.job},null,8,St),Lt,e("ul",Nt,[(_(),p(y,null,k(o,r=>e("li",{key:r.str},[e("a",{class:"dropdown-item",onClick:u=>r.func(s.id)},j(r.str),9,It)])),64))])]),x(e("div",Ft,null,512),[[G,l+1<a.data.length]])]))),128))]))}}),Dt={key:0},Et=e("div",{class:"my-2 mt-5"},[e("span",{style:{"background-color":"red"}},"\xA0"),D("\xA0 "),e("strong",null,"\uCC98\uB9AC\uD558\uC9C0 \uBABB\uD55C \uC791\uC5C5\uB4E4")],-1),Bt={name:"TodoListMain"},Mt=Object.assign(Bt,{setup(a){const{getPendingTodos:t,getActiveTodayTodos:n,getCompletedTodayTodos:d,getAllTodayTodos:o,getAllTodos:c}=pt(),i=T(0),s=T([]),l=T([]),r=T(!1),u=f("todos"),$={0:{str:"\uD574\uC57C \uD560 \uC791\uC5C5\uB4E4",func:n,category:!1},1:{str:"\uC644\uB8CC\uD55C \uC791\uC5C5\uB4E4",func:d,category:!1},2:{str:"\uC624\uB298\uC758 \uBAA8\uB4E0 \uAE30\uB85D",func:o,category:!1},3:{str:"\uBAA8\uB4E0 \uC791\uC5C5",func:c,category:!0}};w("filters",$);const M=g=>g.reduce((b,m)=>(b[m.date]=b[m.date]||[],b[m.date].push(m),b),{}),P=g=>{i.value=Number(g)};return V([()=>i.value,u.value],([g,b],[m,Qt])=>{if(l.value=t(u),typeof g!="undefined"){let q=$[g].func(u);s.value=M(q),r.value=$[g].category}},{immediate:!0}),(g,b)=>(_(),p(y,null,[h(wt,{onChangeFilter:P,class:"p-0"}),(_(!0),p(y,null,k(Object.keys(s.value),m=>(_(),p("div",{key:m,class:"mb-3"},[r.value?(_(),p("div",Dt,[e("em",null,j(m),1)])):H("",!0),h(E,{data:s.value[m]},null,8,["data"])]))),128)),Et,h(E,{data:l.value},null,8,["data"])],64))}}),Pt={class:"container"},qt={class:"row justify-content-center m-2"},Jt={name:"TodoListContainer"},Kt=Object.assign(Jt,{setup(a){const t=T([]),{loadTodos:n,saveTodos:d,storage_id:o}=st();w("todos",Q(t));const c=r=>{t.value=r},i=(r,u)=>{t.value.push({id:o.value++,job:r,date:u,completed:!1}),d(t)},s=r=>{t.value.splice(r,1),t.value.forEach((u,$)=>{u.id=$}),d(t)},l=r=>{t.value.find(u=>u.id==r).completed=!0,d(t)};return w("addTodo",i),w("removeTodo",s),w("completeTodo",l),n(c),(r,u)=>(_(),p(y,null,[h(_t),e("section",Pt,[e("div",qt,[h(Mt)])])],64))}});var Rt=(a,t)=>{const n=a.__vccOpts||a;for(const[d,o]of t)n[d]=o;return n};const Ut=a=>(Z("data-v-4940daca"),a=a(),tt(),a),zt=Ut(()=>e("h1",null,"\uB098\uC758 \uD560\uC77C",-1)),Yt={name:"App"},Gt=Object.assign(Yt,{setup(a){const t=f("today");return(n,d)=>{const o=W("hgroup");return _(),p(y,null,[e("header",null,[h(o,{class:"my-5"},{default:X(()=>[zt,e("em",null,j(v(t)),1)]),_:1})]),h(Kt)],64)}}});var Ht=Rt(Gt,[["__scopeId","data-v-4940daca"]]);const B=et(Ht);B.provide("today",new Date().toISOString().split("T")[0]);B.mount("#app");
