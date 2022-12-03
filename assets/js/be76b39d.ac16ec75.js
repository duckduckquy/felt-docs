"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[9891],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),b=a,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2795:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Attribute definition",l={unversionedId:"Felt Styles/The datasets block/attribute-defintion",id:"Felt Styles/The datasets block/attribute-defintion",title:"Attribute definition",description:"An attribute is defined as a named block that contains information about how this attribute will be used and shown in Felt. In the example below, attribute_name is the name of a field in our dataset.",source:"@site/docs/Felt Styles/The datasets block/attribute-defintion.md",sourceDirName:"Felt Styles/The datasets block",slug:"/Felt Styles/The datasets block/attribute-defintion",permalink:"/docs/Felt Styles/The datasets block/attribute-defintion",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"The datasets block",permalink:"/docs/category/the-datasets-block"},next:{title:"The visualizations block",permalink:"/docs/category/the-visualizations-block"}},s={},c=[],u={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"attribute-definition"},"Attribute definition"),(0,a.kt)("p",null,"An attribute is defined as a named block that contains information about how this attribute will be used and shown in Felt. In the example below, attribute_name is the name of a field in our dataset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"attribute_name": { "displayName": "Attribute", "format": "x"}\n')),(0,a.kt)("p",null,"Example of a complete attribute block"),(0,a.kt)("p",null,"Each attribute block might contain one of the following fields:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"displayName"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. How this attribute will be shown in different parts of the Felt UI.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"format"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. A d3-format string that encodes how numeric fields should be shown.")))))}d.isMDXComponent=!0}}]);