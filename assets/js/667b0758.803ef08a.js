"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[7586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="Filters",l={unversionedId:"Visualization Reference/Filters",id:"Visualization Reference/Filters",title:"Filters",description:"Filters are defined as strings and always return a boolean value. If that value is true, the feature is rendered.",source:"@site/docs-reference/Visualization Reference/Filters.md",sourceDirName:"Visualization Reference",slug:"/Visualization Reference/Filters",permalink:"/docs-reference/Visualization Reference/Filters",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Legend",permalink:"/docs-reference/Visualization Reference/Legend"},next:{title:"Interpolator",permalink:"/docs-reference/category/interpolator"}},p={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"filters"},"Filters"),(0,a.kt)("p",null,"Filters are defined as strings and always return a ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," value. If that value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the feature is rendered."),(0,a.kt)("p",null,"Filters have the following form ",(0,a.kt)("inlineCode",{parentName:"p"},"operand1 operator operand2")," where the operator is one of ",(0,a.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,a.kt)("inlineCode",{parentName:"p"},">"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,a.kt)("inlineCode",{parentName:"p"},">="),", ",(0,a.kt)("inlineCode",{parentName:"p"},"=="),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"!="),", and operands can be either a numerical value, a string value, or a boolean value. Operators ",(0,a.kt)("inlineCode",{parentName:"p"},"&&"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"||"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AND"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," can be used to chain multiple filters. Parentheses are not supported at this moment. Operands and operators need to be separated by a space."),(0,a.kt)("p",null,"Feature properties can be referenced using the ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," symbol in front of the attribute's name. "),(0,a.kt)("p",null,"If the same operator is to be applied to multiple operands, you can use the following array notation: ",(0,a.kt)("inlineCode",{parentName:"p"},"[operand1_1, operand1_2, operand1_3] operator [operand2_1, operand2_2, operand2_3]")," This filter is equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"operand1_1 operator operand2_1 AND operand1_2 operator operand2_2 AND operand1_3 operator operand2_3"),". "),(0,a.kt)("p",null,"If one side of the operator is an array and the other isn\u2019t, the single value operator is used multiple times. ",(0,a.kt)("inlineCode",{parentName:"p"},"operand1 operator [operand2_1, operand2_2]")," is equivalent to operand1 ",(0,a.kt)("inlineCode",{parentName:"p"},"operator operand2_1 AND operand1 operator operand2_2")),(0,a.kt)("p",null,"Let\u2019s take a look at some examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"$acres < 50000" // Will filter out features with a value in the attribute\n                 // "acres" higher than 50000\n"$acres >= 50000 && $acres <= 70000"// Will filter out features with a value in       \n                                                                        // the attribute "acres" not in the [50000, \n                                                                        // 7000] interval\n"$class == [rail, tram]"          // Will filter out features that have a\n                                                                    // class value of neither "rail" or "tram"\n"$class == \\"class one\\""         // Will filter out features that have a\n                                                                    // class value different than "class one"\n"true"           // All features will pass this filter check\n"false"          // No features will pass this filter check\n')),(0,a.kt)("p",null,"Examples of the filter syntax"))}c.isMDXComponent=!0}}]);