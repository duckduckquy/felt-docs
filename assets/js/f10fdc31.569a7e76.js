"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[6790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,y=u["".concat(s,".").concat(d)]||u[d]||f[d]||r;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},o="Categorical visualizations",l={unversionedId:"Types of visualizations/categorial-visualizations",id:"Types of visualizations/categorial-visualizations",title:"Categorical visualizations",description:"Categorical visualizations define a categorical attribute and a set of values to apply to each one of the different values of that attribute.",source:"@site/docs/Types of visualizations/categorial-visualizations.md",sourceDirName:"Types of visualizations",slug:"/Types of visualizations/categorial-visualizations",permalink:"/felt-docs/docs/Types of visualizations/categorial-visualizations",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Simple visualizations",permalink:"/felt-docs/docs/Types of visualizations/simple-visualizations"},next:{title:"Legends",permalink:"/felt-docs/docs/legends"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"categorical-visualizations"},"Categorical visualizations"),(0,i.kt)("p",null,"Categorical visualizations define a categorical attribute and a set of values to apply to each one of the different values of that attribute."),(0,i.kt)("p",null,"Categorical visualizations must define ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201ctype\u201d: \u201ccategorical\u201d")," and, for every style and label properties used, either a single value that will apply to all categories or an array of different values for each category."),(0,i.kt)("p",null,"The Global Power Plants layer in Felt is an example of a categorical layer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:n(9225).Z,width:"2000",height:"837"})),(0,i.kt)("p",null,"and is defined with the following visualization block"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "type": "categorical",\n    "config": {\n        "showOther": true,\n        "labelAttribute": ["name"],\n    "categoricalAttribute": "primary_fuel",\n    "categories": [\n      "Nuclear",\n      "Oil",\n      "Coal",\n      "Gas",\n      "Wind",\n      "Hydro",\n      "Solar"\n    ]\n  }\n    "style": {\n    "color": [\n      "#DEA145",\n      "#EB9360",\n      "#AD7B68",\n      "#CC615C",\n      "#AB71A4",\n      "#7AB6C2",\n      "#E5C550"\n    ],\n    "size": 5,\n    "strokeColor": [\n      "#FAD398",\n      "#FFC8A8",\n      "#C7A395",\n      "#F1B3B0",\n      "#EBD3E8",\n      "#A3D6E0",\n      "#F2DB85"\n    ]\n  },\n  "label": {\n        "minZoom": 9,\n    "color": [\n      "#DEA145",\n      "#DE7D45",\n      "#946E59",\n      "#CC615C",\n      "#AB71A4",\n      "#5B99A6",\n      "#CCA929"\n    ],\n    "haloColor": [\n      "#F2E4CE",\n      "#F2E8C2",\n      "#F2E9E4",\n      "#FAE2E1",\n      "#F7E4F5",\n      "#D8ECF0",\n      "#F2E8C2"\n    ],\n    "offset": [8, 0],\n  },\n  "legend": {},\n}\n')),(0,i.kt)("p",null,"Notice that we are saying that the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_fuel")," data attribute will be used to categorize elements and that the possible values of that attribute that we are interested in are ",(0,i.kt)("inlineCode",{parentName:"p"},'"Nuclear"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"Oil"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"Coal"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"Gas"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"Wind"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hydro"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"Solar"'),". Also notice that we are defining either a single value that will apply to all categories (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),") or a value for each category (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"color"),")"))}u.isMDXComponent=!0},9225:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/global-power-plants-layer-912d0cf9b20c565836af9fb0b90ebda1.png"}}]);