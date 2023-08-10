"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[474],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},m=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),v=c(t),d=n,p=v["".concat(s,".").concat(d)]||v[d]||u[d]||i;return t?o.createElement(p,a(a({ref:r},m),{},{components:t})):o.createElement(p,a({ref:r},m))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=v;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},57213:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(87462),n=(t(67294),t(3905));const i={sidebar_position:8,sidebar_label:"Resource Overcommit",title:"Resource Overcommit",keywords:["Harvester","Overcommit","Overprovision","ballooning"],Description:"Overcommit resources to a VM."},a=void 0,l={unversionedId:"vm/resource-overcommit",id:"version-v1.1/vm/resource-overcommit",title:"Resource Overcommit",description:"Harvester supports global configuration of resource overload percentages on CPU, memory, and storage. By setting overcommit-config, this will allow scheduling of additional virtual machines even when physical resources are fully utilized.",source:"@site/versioned_docs/version-v1.1/vm/resource-overcommit.md",sourceDirName:"vm",slug:"/vm/resource-overcommit",permalink:"/v1.1/vm/resource-overcommit",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/vm/resource-overcommit.md",tags:[],version:"v1.1",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Resource Overcommit",title:"Resource Overcommit",keywords:["Harvester","Overcommit","Overprovision","ballooning"],Description:"Overcommit resources to a VM."},sidebar:"tutorialSidebar",previous:{title:"Hot-Plug Volumes",permalink:"/v1.1/vm/hotplug-volume"},next:{title:"Clone VM",permalink:"/v1.1/vm/clone-vm"}},s={},c=[{value:"Configure the global setting <code>overcommit-config</code>",id:"configure-the-global-setting-overcommit-config",level:2},{value:"Configure overcommit for a single virtual machine",id:"configure-overcommit-for-a-single-virtual-machine",level:2},{value:"Reserve more memory for the system overhead",id:"reserve-more-memory-for-the-system-overhead",level:2},{value:"Why my virtual machines are scheduled unevenly?",id:"why-my-virtual-machines-are-scheduled-unevenly",level:2}],m={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/resource-overcommit"})),(0,n.kt)("p",null,"Harvester supports global configuration of resource overload percentages on CPU, memory, and storage. By setting ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/advanced/settings#overcommit-config"},(0,n.kt)("inlineCode",{parentName:"a"},"overcommit-config")),", this will allow scheduling of additional virtual machines even when physical resources are fully utilized."),(0,n.kt)("p",null,"Harvester allows you to overcommit CPU and RAM on compute nodes. This allows you to increase the number of instances running on your cloud at the cost of reducing the performance of the instances. The Compute service uses the following ratios by default:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CPU allocation ratio: 1600%"),(0,n.kt)("li",{parentName:"ul"},"RAM allocation ratio: 150%"),(0,n.kt)("li",{parentName:"ul"},"Storage allocation ratio: 200%")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Classic memory overcommitment or memory ballooning is not yet supported by this feature. In other words, memory used by a virtual machine instance cannot be returned once allocated.")),(0,n.kt)("h2",{id:"configure-the-global-setting-overcommit-config"},"Configure the global setting ",(0,n.kt)("a",{parentName:"h2",href:"/v1.1/advanced/settings#overcommit-config"},(0,n.kt)("inlineCode",{parentName:"a"},"overcommit-config"))),(0,n.kt)("p",null,"Users can modify the global ",(0,n.kt)("inlineCode",{parentName:"p"},"overcommit-config")," by following the steps below, and it will be applied to each newly created virtual machine after the change."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Advanced > Settings")," page."),(0,n.kt)("li",{parentName:"ol"},"Find the ",(0,n.kt)("inlineCode",{parentName:"li"},"overcommit-config")," setting."),(0,n.kt)("li",{parentName:"ol"},"Configure the desired CPU, Memory, and Storage ratio.")),(0,n.kt)("h2",{id:"configure-overcommit-for-a-single-virtual-machine"},"Configure overcommit for a single virtual machine"),(0,n.kt)("p",null,"If you need to configure individual virtual machines without involving global configuration, consider adjusting the ",(0,n.kt)("inlineCode",{parentName:"p"}," spec.template.spec.domain.resources.<memory|cpu>")," value on the target VirtualMachine resource individually. Note that by modifying these values, you are taking over control of virtual machine resource management from Harvester."),(0,n.kt)("h2",{id:"reserve-more-memory-for-the-system-overhead"},"Reserve more memory for the system overhead"),(0,n.kt)("p",null,"By default, the Harvester reserves a certain amount of system management overhead memory from the memory allocated for the virtual machine. In most cases, this will not cause any problems. However, some operating systems, such as Windows 2022, will request more memory than is reserved."),(0,n.kt)("p",null,"To address the issue, Harvester provides an annotation ",(0,n.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory")," on VirtualMachine custom resource to let you specify the amount of memory to reserve. For instance, add ",(0,n.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory: 200Mi")," if you decide to reserve 200 MiB for the system overhead of the VM."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"}," apiVersion: kubevirt.io/v1\n kind: VirtualMachine\n metadata:\n   annotations:\n+    harvesterhci.io/reservedMemory: 200Mi\n     kubevirt.io/latest-observed-api-version: v1\n     kubevirt.io/storage-observed-api-version: v1alpha3\n     network.harvesterhci.io/ips: '[]'\n   ...\n   ...\n")),(0,n.kt)("h2",{id:"why-my-virtual-machines-are-scheduled-unevenly"},"Why my virtual machines are scheduled unevenly?"),(0,n.kt)("p",null,"The scheduling of virtual machines depends on the underlying behavior of the kube-scheduler. We have a dedicated article explaining the details. If you would like to learn more, check out:  ",(0,n.kt)("a",{parentName:"p",href:"https://harvesterhci.io/kb/vm-scheduling/"},"Harvester Knowledge Base: VM Scheduling"),"."))}u.isMDXComponent=!0}}]);