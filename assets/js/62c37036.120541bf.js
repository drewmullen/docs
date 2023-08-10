"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,v=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(v,i(i({ref:t},m),{},{components:n})):r.createElement(v,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:9,sidebar_label:"Clone VM",title:"Clone VM",keywords:["Harvester","harvester","Rancher","rancher","Clone VM"],Description:"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."},i=void 0,l={unversionedId:"vm/clone-vm",id:"vm/clone-vm",title:"Clone VM",description:"Available as of v1.1.0",source:"@site/docs/vm/clone-vm.md",sourceDirName:"vm",slug:"/vm/clone-vm",permalink:"/dev/vm/clone-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/clone-vm.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Clone VM",title:"Clone VM",keywords:["Harvester","harvester","Rancher","rancher","Clone VM"],Description:"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."},sidebar:"tutorialSidebar",previous:{title:"Resource Overcommit",permalink:"/dev/vm/resource-overcommit"},next:{title:"Create a Volume",permalink:"/dev/volume/create-volume"}},c={},s=[{value:"Clone VM with volume data",id:"clone-vm-with-volume-data",level:2},{value:"Clone VM without volume data",id:"clone-vm-without-volume-data",level:2}],m={toc:s};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/clone-vm"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."),(0,a.kt)("h2",{id:"clone-vm-with-volume-data"},"Clone VM with volume data"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Clone")," of the VM actions."),(0,a.kt)("li",{parentName:"ol"},"Set a new VM name and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM.\n",(0,a.kt)("img",{alt:"clone-vm-with-data.png",src:n(58392).Z,width:"1599",height:"639"}))),(0,a.kt)("h2",{id:"clone-vm-without-volume-data"},"Clone VM without volume data"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Clone")," of the VM actions."),(0,a.kt)("li",{parentName:"ol"},"Unclick the ",(0,a.kt)("inlineCode",{parentName:"li"},"clone volume data")," checkbox."),(0,a.kt)("li",{parentName:"ol"},"Set a new VM name and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM.\n",(0,a.kt)("img",{alt:"clone-vm-without-data.png",src:n(86780).Z,width:"1599",height:"899"}))))}p.isMDXComponent=!0},58392:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clone-vm-with-data-c31f7312f951428fef067e4afd4196f8.png"},86780:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clone-vm-without-data-b04f17ece9f5f6c5872f9801bbd2bb9b.png"}}]);