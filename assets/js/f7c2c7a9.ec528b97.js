"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6403],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>v});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(o),d=r,v=p["".concat(c,".").concat(d)]||p[d]||s[d]||l;return o?n.createElement(v,a(a({ref:t},u),{},{components:o})):n.createElement(v,a({ref:t},u))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var m=2;m<l;m++)a[m]=o[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},75539:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=o(87462),r=(o(67294),o(3905));const l={sidebar_position:3,sidebar_label:"Clone a Volume",title:"Clone a Volume",keywords:["Volume"],description:"Clone volume from the Volume page."},a=void 0,i={unversionedId:"volume/clone-volume",id:"version-v1.2/volume/clone-volume",title:"Clone a Volume",description:"Clone volume from the Volume page.",source:"@site/versioned_docs/version-v1.2/volume/clone-volume.md",sourceDirName:"volume",slug:"/volume/clone-volume",permalink:"/v1.2/volume/clone-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/volume/clone-volume.md",tags:[],version:"v1.2",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Clone a Volume",title:"Clone a Volume",keywords:["Volume"],description:"Clone volume from the Volume page."},sidebar:"docs",previous:{title:"Edit a Volume",permalink:"/v1.2/volume/edit-volume"},next:{title:"Export a Volume to Image",permalink:"/v1.2/volume/export-volume"}},c={},m=[{value:"How to Clone a Volume",id:"how-to-clone-a-volume",level:2}],u={toc:m},p="wrapper";function s(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/clone-volume"})),(0,r.kt)("h2",{id:"how-to-clone-a-volume"},"How to Clone a Volume"),(0,r.kt)("p",null,"After creating a volume, you can clone the volume by following the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Clone")," option."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"clone-volume-1",src:o(19839).Z,width:"2560",height:"726"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"clone volume data"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," of the new volume and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) A cloned volume can be added to a VM using ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Existing Volume"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"clone-volume-2",src:o(85038).Z,width:"750",height:"304"})))))}s.isMDXComponent=!0},19839:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/clone-volume-1-e2e84cb2212fadbbaf4c4034072627b1.png"},85038:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/clone-volume-2-caf189b44630de7cb3e49689efdd88b5.png"}}]);