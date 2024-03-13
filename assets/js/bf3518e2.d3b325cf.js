"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,d=u["".concat(c,".").concat(p)]||u[p]||w[p]||i;return n?r.createElement(d,o(o({ref:t},h),{},{components:n})):r.createElement(d,o({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>w,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4,sidebar_label:"Single NIC with VLAN-aware Switch",title:"Single NIC with VLAN-aware Switch",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},o=void 0,s={unversionedId:"networking/best-practice/single-nic-vlan-aware-switch",id:"version-v1.0/networking/best-practice/single-nic-vlan-aware-switch",title:"Single NIC with VLAN-aware Switch",description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs.",source:"@site/versioned_docs/version-v1.0/networking/best-practice/single-nic-vlan-aware-switch.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/single-nic-vlan-aware-switch",permalink:"/v1.0/networking/best-practice/single-nic-vlan-aware-switch",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/single-nic-vlan-aware-switch.md",tags:[],version:"v1.0",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Single NIC with VLAN-aware Switch",title:"Single NIC with VLAN-aware Switch",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},sidebar:"tutorialSidebar",previous:{title:"Multiple NICs with Non VLAN-aware Switch",permalink:"/v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch"},next:{title:"Single NIC with Non VLAN-aware Switch",permalink:"/v1.0/networking/best-practice/single-nic-non-vlan-aware-switch"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"External Switch Configuration",id:"external-switch-configuration",level:2},{value:"Create a VLAN Network in Harvester",id:"create-a-vlan-network-in-harvester",level:2},{value:"Connect a VM to the subnet of the Harvester hosts",id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts",level:3},{value:"Connect a VM to specific VLAN network",id:"connect-a-vm-to-specific-vlan-network",level:3}],h={toc:l},u="wrapper";function w(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'In this best practice guide on how to configure "VLAN-aware", we will introduce Harvester VLAN network and external switch configuration for common scenario.'),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Hardware:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Three Harvester servers with only one single port network card."),(0,a.kt)("li",{parentName:"ul"},'One or more VLAN-aware switch(es). We will use "Cisco like" configuration as example.')),(0,a.kt)("p",null,"Network Specification:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assume that the subnet of the Harvester hosts is in VLAN 100."),(0,a.kt)("li",{parentName:"ul"},"Assume that the VMs are in the VLAN 101-200.")),(0,a.kt)("p",null,"Cabling:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Harvester servers are connected to the switch in a port from ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,a.kt)("p",null,"The following diagram illustrates the cabling used for this guide:"),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{alt:"vlan-aware-case.png",src:n(85141).Z,width:"921",height:"521"})),(0,a.kt)("h2",{id:"external-switch-configuration"},"External Switch Configuration"),(0,a.kt)("p",null,'For the external switch configuration, we\'ll use a "Cisco like" configuration as example. You can apply the following configurations to your switch:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"switch# config terminal\nswitch(config)# interface ethernet1/<Port Number>\nswitch(config-if)# switchport\nswitch(config-if)# switchport mode trunk\nswitch(config-if)# switchport trunk allowed vlan 100-200\nswitch(config-if)# switchport trunk native vlan 100\nswitch(config-if)# no shutdown\nswitch(config-if)# end\nswitch# copy running-config startup-config\n")),(0,a.kt)("h2",{id:"create-a-vlan-network-in-harvester"},"Create a VLAN Network in Harvester"),(0,a.kt)("p",null,"You can create a new VLAN network in the ",(0,a.kt)("strong",{parentName:"p"},"Advanced > Networks")," page, and click the ",(0,a.kt)("strong",{parentName:"p"},"Create")," button."),(0,a.kt)("p",null,"Specify the name and VLAN ID that you want to create for the VLAN network ",(0,a.kt)("small",null,"(You can specify the same VLAN ID in different namespaces if you have ",(0,a.kt)("a",{parentName:"p",href:"/v1.0/rancher/virtualization-management#multi-tenancy"},"Rancher multi-tenancy")," configured)"),"."),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{alt:"create-vlan-network.png",src:n(26084).Z,width:"3472",height:"1132"})),(0,a.kt)("h3",{id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts"},"Connect a VM to the subnet of the Harvester hosts"),(0,a.kt)("p",null,"Once you finished the configuration in the previous section, the external switch will send out untagged network traffic to the subnet of the Harvester hosts. In Harvester, the untagged traffic is received in VLAN 1."),(0,a.kt)("p",null,"Therefore, if you need VMs to connect to the VLAN ID 100, you need to create a VLAN ID 1 Network in Harvester."),(0,a.kt)("p",null,"The external switch will remove the VLAN 100 tag from the packet for egress and ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-br0")," will add the VLAN 1 tag to the packet and treat it as VLAN 1 as shown in the following diagram:"),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{alt:"vlan-aware-native-vlan.png",src:n(39305).Z,width:"921",height:"521"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Do not create a VLAN Network with VLAN 100 and associate any VM to it. The connectivity will not always be ensured and depends on the external switch behavior to add/remove VLAN tag from packets.")),(0,a.kt)("h3",{id:"connect-a-vm-to-specific-vlan-network"},"Connect a VM to specific VLAN network"),(0,a.kt)("p",null,"You need to create a VLAN Network with specific VLAN ID and associate the VM to that VLAN network. "),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/v1.0/networking/harvester-network"},"this page")," for additional information on Harvester Networking."))}w.isMDXComponent=!0},26084:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},85141:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vlan-aware-case-12efadc8a5d0fb3416a7166ad4d17379.png"},39305:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vlan-aware-native-vlan-1bfdaffcfed006592ac6d4cf66d94964.png"}}]);