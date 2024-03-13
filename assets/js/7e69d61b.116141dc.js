"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5872],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>v});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(o),d=n,v=c["".concat(p,".").concat(d)]||c[d]||s[d]||a;return o?r.createElement(v,l(l({ref:t},u),{},{components:o})):r.createElement(v,l({ref:t},u))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<a;m++)l[m]=o[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},65846:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:4,sidebar_label:"Export a Volume to Image",title:"Export a Volume to Image",keywords:["Volume"],description:"Export volume to image from the Volume page."},l=void 0,i={unversionedId:"volume/export-volume",id:"volume/export-volume",title:"Export a Volume to Image",description:"Export volume to image from the Volume page.",source:"@site/docs/volume/export-volume.md",sourceDirName:"volume",slug:"/volume/export-volume",permalink:"/v1.3/volume/export-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/volume/export-volume.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Export a Volume to Image",title:"Export a Volume to Image",keywords:["Volume"],description:"Export volume to image from the Volume page."},sidebar:"docs",previous:{title:"Clone a Volume",permalink:"/v1.3/volume/clone-volume"},next:{title:"Volume Snapshots",permalink:"/v1.3/volume/volume-snapshots"}},p={},m=[],u={toc:m},c="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/export-volume"})),(0,n.kt)("p",null,"You can select and export an existing volume to an image by following the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Export Image")," option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"export-volume-to-image-1",src:o(37998).Z,width:"2538",height:"1164"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace")," of the new image.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"Name")," of the new image.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"p"},"StorageClass"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) You can download the exported image from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Images")," page by clicking the ",(0,n.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Download")," option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"export-volume-to-image-2",src:o(73052).Z,width:"659",height:"391"})))))}s.isMDXComponent=!0},37998:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/export-volume-to-image-1-0281e9ded41ab207e1869b372061aae1.png"},73052:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/export-volume-to-image-2-5697ce35fbe6270578c515b14431058e.png"}}]);