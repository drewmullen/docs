"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),w=l(r),v=i,f=w["".concat(c,".").concat(v)]||w[v]||u[v]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=w;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},98373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:1,sidebar_label:"Overview",title:"",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],Description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},o="Overview",s={unversionedId:"networking/best-practice/overview",id:"version-v1.0/networking/best-practice/overview",title:"",description:"In a real production environment, we generally recommend that you have multiple NICs in your machine, one for node access and one for VM networking. If your machine has multiple NICs, please refer to multiple NICs for best practices. Otherwise, please refer to Single NIC best practice.",source:"@site/versioned_docs/version-v1.0/networking/best-practice/overview.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/overview",permalink:"/networking/best-practice/overview",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/overview.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",title:"",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],Description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},sidebar:"tutorialSidebar",previous:{title:"Harvester Network",permalink:"/networking/harvester-network"},next:{title:"Multiple NICs with VLAN-aware Switch",permalink:"/networking/best-practice/multiple-nics-vlan-aware-switch"}},c={},l=[{value:"Best Practice",id:"best-practice",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In a real production environment, we generally recommend that you have multiple NICs in your machine, one for node access and one for VM networking. If your machine has multiple NICs, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/networking/best-practice/multiple-nics-vlan-aware-switch"},"multiple NICs")," for best practices. Otherwise, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/networking/best-practice/single-nic-vlan-aware-switch"},"Single NIC")," best practice."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"bond")," interface with multiple NICs, please refer to the single NIC scenario, unless the Harvester node has multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"bond")," interfaces.")),(0,i.kt)("h2",{id:"best-practice"},"Best Practice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/networking/best-practice/multiple-nics-vlan-aware-switch"},"Multiple NICs with VLAN-aware switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/networking/best-practice/multiple-nics-non-vlan-aware-switch"},"Multiple NICs with non VLAN-aware switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/networking/best-practice/single-nic-vlan-aware-switch"},"Single NIC with VLAN-aware switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/networking/best-practice/single-nic-non-vlan-aware-switch"},"Single NIC with non VLAN-aware switch"))))}u.isMDXComponent=!0}}]);