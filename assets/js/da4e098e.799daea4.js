"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[7445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},i="Style",o={unversionedId:"Visualization Reference/Style",id:"Visualization Reference/Style",title:"Style",description:"These are the common properties available in each visualization type",source:"@site/docs-reference/Visualization Reference/Style.md",sourceDirName:"Visualization Reference",slug:"/Visualization Reference/Style",permalink:"/felt-docs/docs-reference/Visualization Reference/Style",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/felt-docs/docs-reference/Visualization Reference/Config"},next:{title:"Label",permalink:"/felt-docs/docs-reference/Visualization Reference/Label"}},p={},s=[],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"style"},"Style"),(0,r.kt)("p",null,"These are the common properties available in each visualization type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Decides if draw call batching should be used in polygons. When the dataset contains overlapping semi-transparent polygons, setting this value to true can produce rendering artifacts where polygons that cross tile boundaries are shown with a color in one tile and a darker one in another tile. This happens because alpha value is computed per draw call, so all polygons in the same one have the same alpha value, even if they overlap. When two overlapping polygons are rendered in different draw calls, the result is the expected one where overlapping areas are darker than non-overlapping ones. Setting it to false incurs in a ~35% increase in rendering times")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},"FilterDefinition[] (see filtering)"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. A filter to be applied to the datasets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxZoom"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The maximum zoom level at which the visualization will be shown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minZoom"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The minimum zoom level at which the visualization will be shown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderAsLines"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Decides if a polygon dataset should be render as lines thus making them render above the basemap. Note that using this requires that the style uses line properties instead of polygon ones.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isSandwiched"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. A flag to tell if features affected by this visualization need to be rendered below the basemap road and water layers. Only applies to polygon features, point and line features are already rendered on top of the basemap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isClickable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. A flag to tell if features should be clickable")))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54"},"default values")," for the default values of these attributes on each geometry type."),(0,r.kt)("p",null,"The following properties are available for the ",(0,r.kt)("inlineCode",{parentName:"p"},"categorical")," type visualization. (You can see an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"categorical")," viz ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54"},"here"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Applies to"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Points, lines and polygons"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The color to be used. Either a single one to be used in all categories or one per each category.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashArray"),(0,r.kt)("td",{parentName:"tr",align:null},"number","[][]"),(0,r.kt)("td",{parentName:"tr",align:null},"Lines"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The dash line definition. Either a single one to be used in all categories or one per each category.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineCap"),(0,r.kt)("td",{parentName:"tr",align:null},'("butt"'),(0,r.kt)("td",{parentName:"tr",align:null},'"round"'),(0,r.kt)("td",{parentName:"tr",align:null},'"square")[]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineJoin"),(0,r.kt)("td",{parentName:"tr",align:null},'("bevel"'),(0,r.kt)("td",{parentName:"tr",align:null},'"round"'),(0,r.kt)("td",{parentName:"tr",align:null},'"miter")[]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"opacity"),(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"InterpolatorFunctions[] (see interpolators)"),(0,r.kt)("td",{parentName:"tr",align:null},"Points, lines and polygons")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"InterpolatorFunctions[] (see interpolators)"),(0,r.kt)("td",{parentName:"tr",align:null},"Points and lines")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showOther"),(0,r.kt)("td",{parentName:"tr",align:null},'"above"'),(0,r.kt)("td",{parentName:"tr",align:null},'"below"'),(0,r.kt)("td",{parentName:"tr",align:null},"Points, lines and polygons")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"InterpolatorFunctions[] (see interpolators)"),(0,r.kt)("td",{parentName:"tr",align:null},"Points and polygons")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"InterpolatorFunctions[] (see interpolators)"),(0,r.kt)("td",{parentName:"tr",align:null},"Points and polygons")))))}d.isMDXComponent=!0}}]);