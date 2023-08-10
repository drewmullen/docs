"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),s=a,v=d["".concat(c,".").concat(s)]||d[s]||m[s]||l;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:1,sidebar_label:"\u521b\u5efa\u5377",title:"\u521b\u5efa\u5377",keywords:["\u5377"],Description:"\u901a\u8fc7 Volume \u9875\u9762\u521b\u5efa\u5377\u3002"},i=void 0,o={unversionedId:"volume/create-volume",id:"volume/create-volume",title:"\u521b\u5efa\u5377",description:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u5377",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/volume/create-volume.md",sourceDirName:"volume",slug:"/volume/create-volume",permalink:"/zh/dev/volume/create-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/volume/create-volume.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u521b\u5efa\u5377",title:"\u521b\u5efa\u5377",keywords:["\u5377"],Description:"\u901a\u8fc7 Volume \u9875\u9762\u521b\u5efa\u5377\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u514b\u9686\u865a\u62df\u673a",permalink:"/zh/dev/vm/clone-vm"},next:{title:"\u7f16\u8f91\u5377",permalink:"/zh/dev/volume/edit-volume"}},c={},p=[{value:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u5377",id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u5377",level:2},{value:"\u6807\u9898\u90e8\u5206",id:"\u6807\u9898\u90e8\u5206",level:3},{value:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361",id:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361",level:3},{value:"\u521b\u5efa\u955c\u50cf\u5377",id:"\u521b\u5efa\u955c\u50cf\u5377",level:2},{value:"\u6807\u9898\u90e8\u5206",id:"\u6807\u9898\u90e8\u5206-1",level:3},{value:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361",id:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361-1",level:3}],u={toc:p};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u5377"},"\u521b\u5efa\u4e00\u4e2a\u7a7a\u5377"),(0,a.kt)("h3",{id:"\u6807\u9898\u90e8\u5206"},"\u6807\u9898\u90e8\u5206"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5377\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Name"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u8bbe\u7f6e\u5377\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Description"),"\u3002")),(0,a.kt)("h3",{id:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361"},"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Source")," \u4e2d\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"New"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u73b0\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"StorageClass"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5377\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Size"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-empty-volume",src:r(44868).Z,width:"2560",height:"726"})),(0,a.kt)("h2",{id:"\u521b\u5efa\u955c\u50cf\u5377"},"\u521b\u5efa\u955c\u50cf\u5377"),(0,a.kt)("h3",{id:"\u6807\u9898\u90e8\u5206-1"},"\u6807\u9898\u90e8\u5206"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5377\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Name"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u8bbe\u7f6e\u5377\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Description"),"\u3002")),(0,a.kt)("h3",{id:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361-1"},"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Source")," \u4e2d\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"VM Image"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u73b0\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Image"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5377\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Size"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-image-volume",src:r(70945).Z,width:"2560",height:"726"})))}m.isMDXComponent=!0},44868:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-empty-volume-e64eb8d677034412d1b394dda137a8ad.png"},70945:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-image-volume-ad01408a1eaa69454a211039f3de6c36.png"}}]);