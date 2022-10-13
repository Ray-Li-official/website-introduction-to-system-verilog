"use strict";(self.webpackChunkwebsite_introduction_to_system_verilog=self.webpackChunkwebsite_introduction_to_system_verilog||[]).push([[5870],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),g=u(n),m=r,k=g["".concat(p,".").concat(m)]||g[m]||d[m]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3726:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:5},i="Data Type",o={unversionedId:"data-type",id:"data-type",title:"Data Type",description:"To be honest, the data type in SystemVerilog is kind of mess. Not only because it's a HDL rather than programming language, but also it supports high-level abstraction so some high-level abstraction data type is supoorted in SystemVerilog.",source:"@site/docs/5-data-type.md",sourceDirName:".",slug:"/data-type",permalink:"/website-introduction-to-system-verilog/docs/data-type",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-data-type.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Module Basic",permalink:"/website-introduction-to-system-verilog/docs/module-basic"}},p={},u=[],s={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-type"},"Data Type"),(0,r.kt)("p",null,"To be honest, the data type in SystemVerilog is kind of mess. Not only because it's a HDL rather than programming language, but also it supports high-level abstraction so some high-level abstraction data type is supoorted in SystemVerilog."),(0,r.kt)("p",null,"It's a tough topic to talk about here, ",(0,r.kt)("a",{parentName:"p",href:"https://www.verilogpro.com/verilog-reg-verilog-wire-systemverilog-logic/"},"here's the link to a perfect webpage that illustrates how data type works in SystemVerilog"),"."),(0,r.kt)("p",null,"However, do not worry too much about the data types. Remembering the following definitions is enough for one to start designing hardwares with SystemVerilog:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wire:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"wire is used for connecting different modules and other logic elements within module."),(0,r.kt)("li",{parentName:"ul"},"wire elements must be continuously driven and it store values. They can be both driven and read. "),(0,r.kt)("li",{parentName:"ul"},"wire data type is used on left hand side (LHS) in the continuous assignments and can be used for all types of ports. "))),(0,r.kt)("li",{parentName:"ul"},"Others?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reg")," is a data storage element that does not create an actual register."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reg")," retain the values until the next assignment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"logic")," is an extention of ",(0,r.kt)("strong",{parentName:"li"},"reg")," that supports continuous assignments.")))),(0,r.kt)("p",null,"And the following table would be usefule to understand the datatype:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"State"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Sign"),(0,r.kt)("th",{parentName:"tr",align:null},"SV/Verilog Representation"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reg"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"4-state"),(0,r.kt)("td",{parentName:"tr",align:null},"user-defined"),(0,r.kt)("td",{parentName:"tr",align:null},"unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"Verilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent  to var logic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logic"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"4-state"),(0,r.kt)("td",{parentName:"tr",align:null},"user-defined"),(0,r.kt)("td",{parentName:"tr",align:null},"unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"SystemVerilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Infers a  var logic  except for input/inout   ports  wire logic  is inferred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bit"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2-state"),(0,r.kt)("td",{parentName:"tr",align:null},"user-defined"),(0,r.kt)("td",{parentName:"tr",align:null},"unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"SystemVerilog"),(0,r.kt)("td",{parentName:"tr",align:null},"default 1-bit size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2-state"),(0,r.kt)("td",{parentName:"tr",align:null},"8-bit"),(0,r.kt)("td",{parentName:"tr",align:null},"signed"),(0,r.kt)("td",{parentName:"tr",align:null},"SystemVerilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to  var logic ","[7:0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"4-state"),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit"),(0,r.kt)("td",{parentName:"tr",align:null},"signed"),(0,r.kt)("td",{parentName:"tr",align:null},"Verilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to  var logic ","[31:0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shortint"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2-state"),(0,r.kt)("td",{parentName:"tr",align:null},"16-bit"),(0,r.kt)("td",{parentName:"tr",align:null},"signed"),(0,r.kt)("td",{parentName:"tr",align:null},"SystemVerilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to  var bit ","[15:0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2-state"),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit"),(0,r.kt)("td",{parentName:"tr",align:null},"signed"),(0,r.kt)("td",{parentName:"tr",align:null},"SystemVerilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to  var bit ","[31:0]",". Synthesis   compilers treats as 4-state  integer  type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"longint"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2-state"),(0,r.kt)("td",{parentName:"tr",align:null},"64-bit"),(0,r.kt)("td",{parentName:"tr",align:null},"signed"),(0,r.kt)("td",{parentName:"tr",align:null},"SystemVerilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to  var logic ","[63:0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"real"),(0,r.kt)("td",{parentName:"tr",align:null},"floatingpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"2-state"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Verilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot be synthesized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shortreal"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2-state"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"SystemVerilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot be synthesized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"realtime"),(0,r.kt)("td",{parentName:"tr",align:null},"floatingpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"2-state"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Verilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot be synthesized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"4-state"),(0,r.kt)("td",{parentName:"tr",align:null},"64-bit"),(0,r.kt)("td",{parentName:"tr",align:null},"unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"Verilog"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot be synthesized")))))}d.isMDXComponent=!0}}]);