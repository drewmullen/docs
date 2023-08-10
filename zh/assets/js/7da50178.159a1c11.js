"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6047],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(a),m=r,u=g["".concat(o,".").concat(m)]||g[m]||c[m]||s;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},10867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:2,sidebar_label:"StorageClass",title:"StorageClass"},i=void 0,l={unversionedId:"advanced/storageclass",id:"advanced/storageclass",title:"StorageClass",description:"StorageClass \u5141\u8bb8\u7ba1\u7406\u5458\u63cf\u8ff0\u5b58\u50a8\u7684\u7c7b\u3002\u4e0d\u540c\u7684 Longhorn StorageClass \u53ef\u80fd\u4f1a\u6620\u5c04\u5230\u96c6\u7fa4\u7ba1\u7406\u5458\u914d\u7f6e\u7684\u4e0d\u540c\u7684\u526f\u672c\u7b56\u7565\u3001\u4e0d\u540c\u7684\u8282\u70b9\u8c03\u5ea6\u7b56\u7565\u6216\u4e0d\u540c\u7684\u78c1\u76d8\u8c03\u5ea6\u7b56\u7565\u3002\u8fd9\u4e2a\u6982\u5ff5\u5728\u5176\u4ed6\u5b58\u50a8\u7cfb\u7edf\u4e2d\u4e5f\u79f0\u4e3a profiles\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced/storageclass.md",sourceDirName:"advanced",slug:"/advanced/storageclass",permalink:"/zh/dev/advanced/storageclass",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/storageclass.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"StorageClass",title:"StorageClass"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e",permalink:"/zh/dev/advanced/settings"},next:{title:"\u5b58\u50a8\u7f51\u7edc",permalink:"/zh/dev/advanced/storagenetwork"}},o={},d=[{value:"\u521b\u5efa StorageClass",id:"\u521b\u5efa-storageclass",level:2},{value:"\u6807\u9898\u90e8\u5206",id:"\u6807\u9898\u90e8\u5206",level:3},{value:"\u53c2\u6570\u9009\u9879\u5361",id:"\u53c2\u6570\u9009\u9879\u5361",level:3},{value:"\u526f\u672c\u6570\u91cf",id:"\u526f\u672c\u6570\u91cf",level:4},{value:"\u8fc7\u65f6\u526f\u672c\u8d85\u65f6",id:"\u8fc7\u65f6\u526f\u672c\u8d85\u65f6",level:4},{value:"\u8282\u70b9\u9009\u62e9\u5668\uff08\u53ef\u9009\uff09",id:"\u8282\u70b9\u9009\u62e9\u5668\u53ef\u9009",level:4},{value:"\u78c1\u76d8\u9009\u62e9\u5668\uff08\u53ef\u9009\uff09",id:"\u78c1\u76d8\u9009\u62e9\u5668\u53ef\u9009",level:4},{value:"\u53ef\u8fc1\u79fb",id:"\u53ef\u8fc1\u79fb",level:4},{value:"\u81ea\u5b9a\u4e49\u9009\u9879\u5361",id:"\u81ea\u5b9a\u4e49\u9009\u9879\u5361",level:3},{value:"\u56de\u6536\u7b56\u7565",id:"\u56de\u6536\u7b56\u7565",level:4},{value:"\u5141\u8bb8\u62d3\u5c55\u5377",id:"\u5141\u8bb8\u62d3\u5c55\u5377",level:4},{value:"\u5377\u7ed1\u5b9a\u6a21\u5f0f",id:"\u5377\u7ed1\u5b9a\u6a21\u5f0f",level:4},{value:"\u9644\u5f55 - \u7528\u4f8b",id:"\u9644\u5f55---\u7528\u4f8b",level:2},{value:"HDD \u573a\u666f",id:"hdd-\u573a\u666f",level:3},{value:"\u63a8\u8350\u505a\u6cd5",id:"\u63a8\u8350\u505a\u6cd5",level:4}],p={toc:d};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"StorageClass \u5141\u8bb8\u7ba1\u7406\u5458\u63cf\u8ff0\u5b58\u50a8\u7684",(0,r.kt)("strong",{parentName:"p"},"\u7c7b"),"\u3002\u4e0d\u540c\u7684 Longhorn StorageClass \u53ef\u80fd\u4f1a\u6620\u5c04\u5230\u96c6\u7fa4\u7ba1\u7406\u5458\u914d\u7f6e\u7684\u4e0d\u540c\u7684\u526f\u672c\u7b56\u7565\u3001\u4e0d\u540c\u7684\u8282\u70b9\u8c03\u5ea6\u7b56\u7565\u6216\u4e0d\u540c\u7684\u78c1\u76d8\u8c03\u5ea6\u7b56\u7565\u3002\u8fd9\u4e2a\u6982\u5ff5\u5728\u5176\u4ed6\u5b58\u50a8\u7cfb\u7edf\u4e2d\u4e5f\u79f0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"profiles"),"\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-storageclass"},"\u521b\u5efa StorageClass"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("strong",{parentName:"p"},"Advanced > StorageClasses")," \u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a StorageClass\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38091).Z,width:"1783",height:"771"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u521b\u5efa StorageClass \u540e\uff0c\u4f60\u5c06\u65e0\u6cd5\u66f4\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," \u4e4b\u5916\u7684\u4efb\u4f55\u5185\u5bb9\u3002")),(0,r.kt)("h3",{id:"\u6807\u9898\u90e8\u5206"},"\u6807\u9898\u90e8\u5206"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Name"),"\uff1aStorageClass \u7684\u540d\u79f0"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Description"),"\uff08\u53ef\u9009\uff09\uff1aStorageClass \u7684\u63cf\u8ff0")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(98836).Z,width:"1783",height:"771"})),(0,r.kt)("h3",{id:"\u53c2\u6570\u9009\u9879\u5361"},"\u53c2\u6570\u9009\u9879\u5361"),(0,r.kt)("h4",{id:"\u526f\u672c\u6570\u91cf"},"\u526f\u672c\u6570\u91cf"),(0,r.kt)("p",null,"\u5728 Longhorn \u4e2d\u4e3a\u6bcf\u4e2a\u5377\u521b\u5efa\u7684\u526f\u672c\u6570\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(65030).Z,width:"1783",height:"771"})),(0,r.kt)("h4",{id:"\u8fc7\u65f6\u526f\u672c\u8d85\u65f6"},"\u8fc7\u65f6\u526f\u672c\u8d85\u65f6"),(0,r.kt)("p",null,"\u526f\u672c\u72b6\u6001\u53d8\u4e3a ERROR \u4e4b\u540e\uff0cLonghorn \u591a\u4e45\u540e\u4f1a\u6e05\u9664\u9519\u8bef\u526f\u672c\uff0c\u5355\u4f4d\u662f\u5206\u949f\u3002\u5728 Harvester \u4e2d\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"30")," \u5206\u949f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55708).Z,width:"1783",height:"771"})),(0,r.kt)("h4",{id:"\u8282\u70b9\u9009\u62e9\u5668\u53ef\u9009"},"\u8282\u70b9\u9009\u62e9\u5668\uff08\u53ef\u9009\uff09"),(0,r.kt)("p",null,"\u5728\u5377\u8c03\u5ea6\u9636\u6bb5\u9009\u62e9\u8981\u5339\u914d\u7684\u8282\u70b9\u6807\u7b7e\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8f6c\u5230 ",(0,r.kt)("strong",{parentName:"p"},"Host > Edit Config")," \u6dfb\u52a0\u8282\u70b9\u6807\u7b7e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38742).Z,width:"1783",height:"771"})),(0,r.kt)("h4",{id:"\u78c1\u76d8\u9009\u62e9\u5668\u53ef\u9009"},"\u78c1\u76d8\u9009\u62e9\u5668\uff08\u53ef\u9009\uff09"),(0,r.kt)("p",null,"\u5728\u5377\u8c03\u5ea6\u9636\u6bb5\u9009\u62e9\u8981\u5339\u914d\u7684\u78c1\u76d8\u6807\u7b7e\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8f6c\u5230 ",(0,r.kt)("strong",{parentName:"p"},"Host > Edit Config")," \u6dfb\u52a0\u78c1\u76d8\u6807\u7b7e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(92106).Z,width:"1783",height:"771"})),(0,r.kt)("h4",{id:"\u53ef\u8fc1\u79fb"},"\u53ef\u8fc1\u79fb"),(0,r.kt)("p",null,"\u662f\u5426\u652f\u6301",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/vm/live-migration"},"\u70ed\u8fc1\u79fb"),"\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(11647).Z,width:"1783",height:"771"})),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u9009\u9879\u5361"},"\u81ea\u5b9a\u4e49\u9009\u9879\u5361"),(0,r.kt)("h4",{id:"\u56de\u6536\u7b56\u7565"},"\u56de\u6536\u7b56\u7565"),(0,r.kt)("p",null,"StorageClass \u52a8\u6001\u521b\u5efa\u7684\u5377\u5c06\u5177\u6709\u5728\u7c7b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"reclaimPolicy")," \u5b57\u6bb5\u4e2d\u6307\u5b9a\u7684\u56de\u6536\u7b56\u7565\u3002\u9ed8\u8ba4\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete")," \u6a21\u5f0f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Delete"),"\uff1a\u5220\u9664\u5377\u58f0\u660e\u65f6\uff0c\u540c\u65f6\u5220\u9664\u5377\u548c\u5e95\u5c42\u8bbe\u5907\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Retain"),"\uff1a\u4fdd\u7559\u5377\u4ee5\u8fdb\u884c\u624b\u52a8\u6e05\u7406\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(20527).Z,width:"1791",height:"770"})),(0,r.kt)("h4",{id:"\u5141\u8bb8\u62d3\u5c55\u5377"},"\u5141\u8bb8\u62d3\u5c55\u5377"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u5377\u914d\u7f6e\u4e3a\u53ef\u6269\u5c55\u3002\u8be5\u529f\u80fd\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled"),"\uff0c\u5373\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u7f16\u8f91\u5bf9\u5e94\u7684 PVC \u5bf9\u8c61\u6765\u8c03\u6574\u5377\u7684\u5927\u5c0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(11561).Z,width:"1791",height:"770"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u53ea\u80fd\u4f7f\u7528\u5377\u6269\u5c55\u529f\u80fd\u6765\u5bf9\u5377\u8fdb\u884c\u6269\u5bb9\uff0c\u800c\u4e0d\u80fd\u8fdb\u884c\u7f29\u5bb9\u3002")),(0,r.kt)("h4",{id:"\u5377\u7ed1\u5b9a\u6a21\u5f0f"},"\u5377\u7ed1\u5b9a\u6a21\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"volumeBindingMode")," \u5b57\u6bb5\u63a7\u5236\u4f55\u65f6\u5e94\u8be5\u8fdb\u884c\u5377\u7ed1\u5b9a\u548c\u52a8\u6001\u914d\u7f6e\u3002\u9ed8\u8ba4\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Immediate")," \u6a21\u5f0f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Immediate"),"\uff1a\u521b\u5efa PersistentVolumeClaim \u540e\u7ed1\u5b9a\u548c\u914d\u7f6e\u4e00\u4e2a\u6301\u4e45\u5377\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"WaitForFirstConsumer"),"\uff1a\u521b\u5efa\u4f7f\u7528 PersistentVolumeClaim \u7684 VM \u540e\u7ed1\u5b9a\u548c\u914d\u7f6e\u6301\u4e45\u5377\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3884).Z,width:"1791",height:"770"})),(0,r.kt)("h2",{id:"\u9644\u5f55---\u7528\u4f8b"},"\u9644\u5f55 - \u7528\u4f8b"),(0,r.kt)("h3",{id:"hdd-\u573a\u666f"},"HDD \u573a\u666f"),(0,r.kt)("p",null,"\u5f15\u5165 ",(0,r.kt)("em",{parentName:"p"},"StorageClass")," \u540e\uff0c\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"HDD")," \u8fdb\u884c\u5206\u5c42\u6216\u5f52\u6863\u51b7\u5b58\u50a8\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u5efa\u8bae\u5c06 HDD \u7528\u4e8e\u5bf9\u78c1\u76d8\u6027\u80fd\u8981\u6c42\u9ad8\u7684 RKE2 \u96c6\u7fa4\u6216 VM\u3002")),(0,r.kt)("h4",{id:"\u63a8\u8350\u505a\u6cd5"},"\u63a8\u8350\u505a\u6cd5"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Host")," \u9875\u9762\u6dfb\u52a0\u4f60\u7684 HDD\uff0c\u7136\u540e\u6839\u636e\u9700\u8981\u6dfb\u52a0\u78c1\u76d8\u6807\u7b7e\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"HDD")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"ColdStorage"),"\u3002\u6709\u5173\u5982\u4f55\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8\u548c\u78c1\u76d8\u6807\u7b7e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/host/#multi-disk-management"},"\u591a\u78c1\u76d8\u7ba1\u7406"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(28184).Z,width:"1785",height:"772"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(89253).Z,width:"1919",height:"1079"})),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u4e3a HDD \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass"),"\uff08\u4f7f\u7528\u4e0a\u9762\u7684\u78c1\u76d8\u6807\u7b7e\uff09\u3002\u5bf9\u4e8e\u5bb9\u91cf\u5927\u4f46\u6027\u80fd\u6162\u7684\u786c\u76d8\uff0c\u4f60\u53ef\u4ee5\u51cf\u5c11\u526f\u672c\u6570\u91cf\u6765\u63d0\u9ad8\u6027\u80fd\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/advanced/storageclass"},"storageclass"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(21138).Z,width:"1785",height:"767"})),(0,r.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass")," \u548c HDD \u521b\u5efa\u4e00\u4e2a\u5377\uff0c\u7528\u4e8e\u51b7\u5b58\u50a8\u6216\u5f52\u6863\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43941).Z,width:"1789",height:"767"})))}c.isMDXComponent=!0},28184:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_hdd_on_host_page-3ccc34f2a8bc65e511cc35776100e80d.png"},89253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_tags-00cf25164f80f53cdd438eaecee15665.png"},21138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_hdd_storageclass-8e158b236ade10694195738114374437.png"},92106:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_storageclasses_disk_selector-c60a5061987f68f18252a819732640e6.png"},38091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_storageclasses_entry-e4e255f7a07230ce65351e3966c056ff.png"},98836:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_storageclasses_header_sections-9d615b806de3fb6314419c0e76e30663.png"},11647:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_storageclasses_migratable-dde41ae11a1e2dbf156b91b4cc488a7a.png"},38742:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_storageclasses_node_selector-e055498ee31e10df985dd0452a825c21.png"},65030:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_storageclasses_replicas-720c4cf37f05197846b7d021a3d3fd7c.png"},55708:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_storageclasses_stale_timeout-5602affc442bba6fe5f933a309c3847f.png"},43941:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_volume_hdd-91b7f44277ede22bd6bd230b00697aa4.png"},11561:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/customize_tab_allow_vol_expansion-a76850a093cf3669eb31341081d8b51c.png"},20527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/customize_tab_reclaim_policy-5440e3059223d00fcf3fe0398afbaec0.png"},3884:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/customize_tab_vol_binding_mode-54f01765773587a542eedc6a2afe43fa.png"}}]);