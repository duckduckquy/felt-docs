"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[6301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,v=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Data-driven values",l={unversionedId:"Visualization Reference/Value functions/data-driven-values",id:"Visualization Reference/Value functions/data-driven-values",title:"Data-driven values",description:"The first value of these types of value definitions is a filter expression and the second value is either a single value or a zoom-based interpolator",source:"@site/docs-reference/Visualization Reference/Value functions/data-driven-values.md",sourceDirName:"Visualization Reference/Value functions",slug:"/Visualization Reference/Value functions/data-driven-values",permalink:"/docs-reference/Visualization Reference/Value functions/data-driven-values",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Value functions",permalink:"/docs-reference/category/value-functions"},next:{title:"Style properties",permalink:"/docs-reference/Visualization Reference/Default values/style-properties"}},s={},u=[],c={toc:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-driven-values"},"Data-driven values"),(0,a.kt)("p",null,"The first value of these types of value definitions is a filter expression and the second value is either a single value or a zoom-based interpolator"),(0,a.kt)("p",null,"A data-driven value that defines a fontSize value depending on the value of a feature acres property is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"fontSize": {\n    "$acres > 50000": 20,\n  "$acres > 20000": 18,\n  "$acres > 5000": 16,\n  "$acres > 100": 14,\n  "$acres > 0": 12\n}\n')),(0,a.kt)("p",null,"Currently, it can only be used on the ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSize")," label property"))}f.isMDXComponent=!0}}]);