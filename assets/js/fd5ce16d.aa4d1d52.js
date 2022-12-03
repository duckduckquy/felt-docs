"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[9251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Felt Style Language Blocks",l={unversionedId:"intro",id:"intro",title:"Felt Style Language Blocks",description:"A Felt Markup Language definition includes a version identifier, a datasets block that contains an array of dataset definitions, and an array of visualization objects under the visualizations block, which define a set of visualizations to render from top to bottom.",source:"@site/docs-reference/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs-reference/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Dataset Reference",permalink:"/docs-reference/category/dataset-reference"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"felt-style-language-blocks"},"Felt Style Language Blocks"),(0,a.kt)("p",null,"A Felt Markup Language definition includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," identifier, a ",(0,a.kt)("inlineCode",{parentName:"p"},"datasets")," block that contains an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," definitions, and an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"visualization")," objects under the ",(0,a.kt)("inlineCode",{parentName:"p"},"visualizations")," block, which define a set of visualizations to render from top to bottom."),(0,a.kt)("p",null,"The basic anatomy of a Felt Style definition is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "version": "1.1",\n  "datasets": [ ... ],\n  "visualizations": [ ... ]\n}\n')))}u.isMDXComponent=!0}}]);