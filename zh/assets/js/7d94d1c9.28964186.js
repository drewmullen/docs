"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:6,sidebar_label:"\u70ed\u8fc1\u79fb",title:"\u70ed\u8fc1\u79fb",keywords:["Harvester","harvester","Rancher","rancher","\u70ed\u8fc1\u79fb"],Description:"\u70ed\u8fc1\u79fb\uff08\u4e5f\u79f0\u4e3a\u5b9e\u65f6\u8fc1\u79fb\uff0c\u52a8\u6001\u8fc1\u79fb\uff09\u6307\u7684\u662f\u5728\u4e0d\u505c\u673a\u7684\u60c5\u51b5\u4e0b\u5c06\u865a\u62df\u673a\u79fb\u52a8\u5230\u4e0d\u540c\u7684\u4e3b\u673a\u3002"},l=void 0,o={unversionedId:"vm/live-migration",id:"vm/live-migration",title:"\u70ed\u8fc1\u79fb",description:"\u70ed\u8fc1\u79fb\uff08\u4e5f\u79f0\u4e3a\u5b9e\u65f6\u8fc1\u79fb\uff0c\u52a8\u6001\u8fc1\u79fb\uff09\u6307\u7684\u662f\u5728\u4e0d\u505c\u673a\u7684\u60c5\u51b5\u4e0b\u5c06\u865a\u62df\u673a\u79fb\u52a8\u5230\u4e0d\u540c\u7684\u4e3b\u673a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/live-migration.md",sourceDirName:"vm",slug:"/vm/live-migration",permalink:"/zh/dev/vm/live-migration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/live-migration.md",tags:[],version:"current",lastUpdatedAt:1690816293,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"\u70ed\u8fc1\u79fb",title:"\u70ed\u8fc1\u79fb",keywords:["Harvester","harvester","Rancher","rancher","\u70ed\u8fc1\u79fb"],Description:"\u70ed\u8fc1\u79fb\uff08\u4e5f\u79f0\u4e3a\u5b9e\u65f6\u8fc1\u79fb\uff0c\u52a8\u6001\u8fc1\u79fb\uff09\u6307\u7684\u662f\u5728\u4e0d\u505c\u673a\u7684\u60c5\u51b5\u4e0b\u5c06\u865a\u62df\u673a\u79fb\u52a8\u5230\u4e0d\u540c\u7684\u4e3b\u673a\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f",permalink:"/zh/dev/vm/backup-restore"},next:{title:"\u70ed\u63d2\u62d4\u5377",permalink:"/zh/dev/vm/hotplug-volume"}},p={},s=[{value:"\u5f00\u59cb\u8fc1\u79fb",id:"\u5f00\u59cb\u8fc1\u79fb",level:2},{value:"\u4e2d\u6b62\u8fc1\u79fb",id:"\u4e2d\u6b62\u8fc1\u79fb",level:2},{value:"\u8fc1\u79fb\u8d85\u65f6",id:"\u8fc1\u79fb\u8d85\u65f6",level:2},{value:"\u5b8c\u6210\u8d85\u65f6",id:"\u5b8c\u6210\u8d85\u65f6",level:3},{value:"\u8fdb\u7a0b\u8d85\u65f6",id:"\u8fdb\u7a0b\u8d85\u65f6",level:3}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u70ed\u8fc1\u79fb\uff08\u4e5f\u79f0\u4e3a\u5b9e\u65f6\u8fc1\u79fb\uff0c\u52a8\u6001\u8fc1\u79fb\uff09\u6307\u7684\u662f\u5728\u4e0d\u505c\u673a\u7684\u60c5\u51b5\u4e0b\u5c06\u865a\u62df\u673a\u79fb\u52a8\u5230\u4e0d\u540c\u7684\u4e3b\u673a\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u865a\u62df\u673a\u4f7f\u7528\u6865\u63a5\u53e3\u7c7b\u578b\u7684\u7ba1\u7406\u7f51\u7edc\u65f6\uff0c\u4e0d\u5141\u8bb8\u8fdb\u884c\u70ed\u8fc1\u79fb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u865a\u62df\u673a\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"CD-ROM")," \u7c7b\u578b\u7684\u5377\u65f6\u4e0d\u652f\u6301\u5b9e\u65f6\u8fc1\u79fb\u3002\u4f60\u9700\u8981\u5728\u5b9e\u65f6\u8fc1\u79fb\u4e4b\u524d\u5f39\u51fa\u6b64\u7c7b\u5377\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u865a\u62df\u673a\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"Container Disk")," \u7c7b\u578b\u7684\u5377\u65f6\u4e0d\u652f\u6301\u5b9e\u65f6\u8fc1\u79fb\u3002\u4f60\u9700\u8981\u5728\u5b9e\u65f6\u8fc1\u79fb\u4e4b\u524d\u79fb\u9664\u6b64\u7c7b\u5377\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u4f7f\u7528\u70ed\u8fc1\u79fb\uff0c\u7531\u4e8e",(0,a.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/798"},"\u5df2\u77e5\u95ee\u9898"),"\uff0c\u9700\u8981 Harvester \u96c6\u7fa4\u4e2d\u7684 3 \u53f0\u6216\u4ee5\u4e0a\u7684\u4e3b\u673a\u3002"))),(0,a.kt)("h2",{id:"\u5f00\u59cb\u8fc1\u79fb"},"\u5f00\u59cb\u8fc1\u79fb"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,a.kt)("strong",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u8fc1\u79fb\u7684\u865a\u62df\u673a\uff0c\u7136\u540e\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Migrate"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u865a\u62df\u673a\u8fc1\u79fb\u7684\u76ee\u6807\u8282\u70b9\u3002\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Apply"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(60666).Z,width:"4266",height:"1958"})),(0,a.kt)("p",null,"\u4e3a\u865a\u62df\u673a\u914d\u7f6e",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/vm/create-windows-vm/#node-scheduling-tab"},"\u8282\u70b9\u8c03\u5ea6\u89c4\u5219"),"\u65f6\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd\u8981\u8fc1\u79fb\u7684\u76ee\u6807\u8282\u70b9\u6ee1\u8db3\u865a\u62df\u673a\u7684\u8fd0\u884c\u65f6\u8981\u6c42\u3002\u53ef\u4ee5\u641c\u7d22\u548c\u9009\u62e9\u7684\u8282\u70b9\u662f\u57fa\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u751f\u6210\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u865a\u62df\u673a\u8c03\u5ea6\u89c4\u5219\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u6765\u81ea\u7f51\u7edc\u914d\u7f6e\u7684\u8282\u70b9\u89c4\u5219\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(66707).Z,width:"4274",height:"1664"})),(0,a.kt)("h2",{id:"\u4e2d\u6b62\u8fc1\u79fb"},"\u4e2d\u6b62\u8fc1\u79fb"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,a.kt)("strong",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4e2d\u6b62\u7684\u5904\u4e8e\u8fc1\u79fb\u72b6\u6001\u7684\u865a\u62df\u673a\u3002\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Abort Migration"),"\u3002")),(0,a.kt)("h2",{id:"\u8fc1\u79fb\u8d85\u65f6"},"\u8fc1\u79fb\u8d85\u65f6"),(0,a.kt)("h3",{id:"\u5b8c\u6210\u8d85\u65f6"},"\u5b8c\u6210\u8d85\u65f6"),(0,a.kt)("p",null,"\u70ed\u8fc1\u79fb\u8fc7\u7a0b\u4f1a\u5c06\u865a\u62df\u673a\u5185\u5b58\u9875\u548c\u78c1\u76d8\u5757\u590d\u5236\u5230\u76ee\u6807\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u865a\u62df\u673a\u5199\u5165\u4e0d\u540c\u7684\u5185\u5b58\u9875\u6216\u78c1\u76d8\u5757\u7684\u901f\u5ea6\uff0c\u4f1a\u9ad8\u4e8e\u590d\u5236\u7684\u901f\u5ea6\u3002\u8fd9\u5c06\u5bfc\u81f4\u8fc1\u79fb\u4e0d\u80fd\u5728\u5408\u7406\u7684\u65f6\u95f4\u5185\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8d85\u8fc7\u5b8c\u6210\u8d85\u65f6\u7684\u65f6\u95f4\uff08\u6bcf GiB \u6570\u636e 800 \u79d2\uff09\uff0c\u70ed\u8fc1\u79fb\u5c06\u88ab\u4e2d\u6b62\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u62e5\u6709 8 GiB \u5185\u5b58\u7684\u865a\u62df\u673a\u5c06\u5728 6400 \u79d2\u540e\u8d85\u65f6\u3002"),(0,a.kt)("h3",{id:"\u8fdb\u7a0b\u8d85\u65f6"},"\u8fdb\u7a0b\u8d85\u65f6"),(0,a.kt)("p",null,"\u5f53\u590d\u5236\u5185\u5b58\u5728 150 \u79d2\u5185\u6ca1\u6709\u4efb\u4f55\u8fdb\u5c55\u65f6\uff0c\u70ed\u8fc1\u79fb\u4e5f\u5c06\u4e2d\u6b62\u3002"))}u.isMDXComponent=!0},60666:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/migrate-action-192c7bb5e368831a1a95bb8aa5583fa8.png"},66707:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/migrate-8c73e32fe486a552edc9130043bff0c4.png"}}]);