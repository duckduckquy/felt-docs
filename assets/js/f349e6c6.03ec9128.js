"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[9553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},l="Legend",o={unversionedId:"Visualization Reference/Legend",id:"Visualization Reference/Legend",title:"Legend",description:"The legend block describes how this visualization should be shown in the legend panel and contains the following properties:",source:"@site/docs-reference/Visualization Reference/Legend.md",sourceDirName:"Visualization Reference",slug:"/Visualization Reference/Legend",permalink:"/docs-reference/Visualization Reference/Legend",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Label",permalink:"/docs-reference/Visualization Reference/Label"},next:{title:"Filters",permalink:"/docs-reference/Visualization Reference/Filters"}},s={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"legend"},"Legend"),(0,r.kt)("p",null,"The legend block describes how this visualization should be shown in the legend panel and contains the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Used both in simple and categorical visualizations. A single string that defines the title for the legend item in simple visualizations or a dictionary that maps from each category to what will be displayed on the legend in categorical visualizations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"If more than one visualization defines a legend block with the same displayName, toggling that legend item on/off will show/hide all the visualizations that share it."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subtitle"),(0,r.kt)("td",{parentName:"tr",align:null},"Mandatory. Used in categorical visualizations. The attribute that contains the categories that will be used.")))),(0,r.kt)("p",null,"Simple visualizations only show a single item on the legend. If multiple visualizations use the same displayName attribute, all of them will be shown/hidden when the legend item is toggled on/off"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// This is a simple visualization legend\n{\n  "legend": {\n    "displayName": "Area",\n    "subtitle": "In squared meters"\n  }\n}\n')),(0,r.kt)("p",null,"Categorical visualizations can define a mapping from each category name to a string to customize how those are shown in the legend."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// This is a categorical visualization legend\n// that renames categories A and B to 1 and 2\n// on the legend\n{\n  "legend": {\n    "displayName": {\n      "A": "1",\n      "B": "2"\n    },\n    "subtitle": "In squared meters"\n  }\n}\n')))}p.isMDXComponent=!0}}]);