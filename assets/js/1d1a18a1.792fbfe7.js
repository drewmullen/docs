"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,b=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},96798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},i=void 0,s={unversionedId:"troubleshooting/harvester",id:"version-v0.3/troubleshooting/harvester",title:"Harvester",description:"Generate a Support Bundle",source:"@site/versioned_docs/version-v0.3/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/v0.3/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/troubleshooting/harvester.md",tags:[],version:"v0.3",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/v0.3/troubleshooting/installation"},next:{title:"Operating System",permalink:"/v0.3/troubleshooting/os"}},l={},p=[{value:"Generate a Support Bundle",id:"generate-a-support-bundle",level:2},{value:"Access Embedded Rancher",id:"access-embedded-rancher",level:2},{value:"Access Embedded Longhorn",id:"access-embedded-longhorn",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/harvester"})),(0,a.kt)("h2",{id:"generate-a-support-bundle"},"Generate a Support Bundle"),(0,a.kt)("p",null,"Users can generate a support bundle in the Harvester GUI with the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Support")," link at the bottom-left of Harvester Web UI.\n",(0,a.kt)("img",{src:r(95611).Z,width:"955",height:"902"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," button.\n",(0,a.kt)("img",{src:r(37137).Z,width:"953",height:"286"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enter a useful description for the support bundle and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," to generate and download a support bundle.\n",(0,a.kt)("img",{src:r(78959).Z,width:"941",height:"436"})))),(0,a.kt)("h2",{id:"access-embedded-rancher"},"Access Embedded Rancher"),(0,a.kt)("p",null,"You can access the embedded Rancher dashboard via ",(0,a.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/explorer"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We only support to use the embedded Rancher dashboard for debugging and validation purpose.\nFor Rancher's multi-cluster and multi-tenant integration, please refer to the docs ",(0,a.kt)("a",{parentName:"p",href:"/v0.3/rancher/rancher-integration"},"here"),".")),(0,a.kt)("h2",{id:"access-embedded-longhorn"},"Access Embedded Longhorn"),(0,a.kt)("p",null,"You can access the embedded Longhorn UI via ",(0,a.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/longhorn"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We only support to use the embedded Longhorn UI for debugging and validation purpose .")))}u.isMDXComponent=!0},37137:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},95611:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},78959:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"}}]);