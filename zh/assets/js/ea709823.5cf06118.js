"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4765],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,v=d["".concat(p,".").concat(g)]||d[g]||l[g]||o;return t?n.createElement(v,i(i({ref:r},u),{},{components:t})):n.createElement(v,i({ref:r},u))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},54535:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:4,sidebar_label:"Upgrading Harvester",title:"Upgrading Harvester",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI."},i=void 0,s={unversionedId:"upgrade",id:"version-v0.3/upgrade",title:"Upgrading Harvester",description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI.",source:"@site/versioned_docs/version-v0.3/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/zh/v0.3/upgrade",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/upgrade.md",tags:[],version:"v0.3",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Upgrading Harvester",title:"Upgrading Harvester",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI."},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/zh/v0.3/authentication"},next:{title:"Upload Images",permalink:"/zh/v0.3/upload-image"}},p={},c=[],u={toc:c},d="wrapper";function l(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Upgrade is not supported from previous versions to v0.3.0 version."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"A manual upgrade process starting with v0.3.0 is being investigated. Harvester will inform the community once this process is in place."),(0,a.kt)("li",{parentName:"ul"},"One-click upgrade will be supported starting with the v1.0.0 release."))))}l.isMDXComponent=!0}}]);