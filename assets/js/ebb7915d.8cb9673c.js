"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[4128],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,d=p["".concat(l,".").concat(f)]||p[f]||b[f]||o;return t?n.createElement(d,c(c({ref:r},s),{},{components:t})):n.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2596:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:4},c="Cubic Bezier",a={unversionedId:"Visualization Reference/Interpolators/cubic-bezier",id:"Visualization Reference/Interpolators/cubic-bezier",title:"Cubic Bezier",description:'{ "cubicbezier" Interpolates using the bezier curve defined by the curve control points.',source:"@site/docs-reference/Visualization Reference/Interpolators/cubic-bezier.md",sourceDirName:"Visualization Reference/Interpolators",slug:"/Visualization Reference/Interpolators/cubic-bezier",permalink:"/felt-docs/docs-reference/Visualization Reference/Interpolators/cubic-bezier",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Exponential",permalink:"/felt-docs/docs-reference/Visualization Reference/Interpolators/exponential"},next:{title:"Value functions",permalink:"/felt-docs/docs-reference/category/value-functions"}},l={},u=[],s={toc:u};function p(e){let{components:r,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cubic-bezier"},"Cubic Bezier"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'{ "cubicbezier": [number, number, number, number, Stops[]] }'),": Interpolates using the bezier curve defined by the curve control points."),(0,i.kt)("p",null,"The following images shows the behaviour of this definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{ "cubicbezier": [0.25, 0, 0.75, 1.5, [[0, 0], [100, 100]]]} // Blue\n{ "cubicbezier": [0.25, 0, 0.75, 1.5, [[0, 0], [50, 50], [100, 100]]} // Red\n{ "cubicbezier": [0.25, 0, 0.75, 1.5, [[0, 0], [25, 25], [50, 50], [75, 75], [100, 100]]} // Yellow\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:t(3399).Z,width:"2000",height:"1243"})))}p.isMDXComponent=!0},3399:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/cubic-bezier-12293995c5b98340580a6021f9bd9eb4.png"}}]);