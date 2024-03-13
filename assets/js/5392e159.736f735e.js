"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),c=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(a),d=n,v=s["".concat(m,".").concat(d)]||s[d]||p[d]||o;return a?r.createElement(v,i(i({ref:t},u),{},{components:a})):r.createElement(v,i({ref:t},u))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},i=void 0,l={unversionedId:"volume/index",id:"volume/index",title:"Create a Volume",description:"Create a volume from the Volume page.",source:"@site/docs/volume/create-volume.md",sourceDirName:"volume",slug:"/volume/index",permalink:"/v1.3/volume/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/volume/create-volume.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},sidebar:"docs",previous:{title:"Clone VM",permalink:"/v1.3/vm/clone-vm"},next:{title:"Edit a Volume",permalink:"/v1.3/volume/edit-volume"}},m={},c=[{value:"Create an Empty Volume",id:"create-an-empty-volume",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Basics Tab",id:"basics-tab",level:3},{value:"Create an Image Volume",id:"create-an-image-volume",level:2},{value:"Header Section",id:"header-section-1",level:3},{value:"Basics Tab",id:"basics-tab-1",level:3}],u={toc:c},s="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/create-volume"})),(0,n.kt)("h2",{id:"create-an-empty-volume"},"Create an Empty Volume"),(0,n.kt)("h3",{id:"header-section"},"Header Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the Volume ",(0,n.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,n.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,n.kt)("h3",{id:"basics-tab"},"Basics Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"New")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,n.kt)("li",{parentName:"ol"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"li"},"StorageClass"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-empty-volume",src:a(44868).Z,width:"2560",height:"726"})),(0,n.kt)("h2",{id:"create-an-image-volume"},"Create an Image Volume"),(0,n.kt)("h3",{id:"header-section-1"},"Header Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the Volume ",(0,n.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,n.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,n.kt)("h3",{id:"basics-tab-1"},"Basics Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Image")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,n.kt)("li",{parentName:"ol"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"li"},"Image"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-image-volume",src:a(70945).Z,width:"2560",height:"726"})))}p.isMDXComponent=!0},44868:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-empty-volume-e64eb8d677034412d1b394dda137a8ad.png"},70945:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-image-volume-ad01408a1eaa69454a211039f3de6c36.png"}}]);