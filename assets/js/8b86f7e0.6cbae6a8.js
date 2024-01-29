"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:7,sidebar_label:"Hot-Plug Volumes",title:"Hot-Plug Volumes",keywords:["Harvester","Hot-plug","Volume"],description:"Adding hot-plug volumes to a running VM."},l=void 0,i={unversionedId:"vm/hotplug-volume",id:"vm/hotplug-volume",title:"Hot-Plug Volumes",description:"Adding hot-plug volumes to a running VM.",source:"@site/docs/vm/hotplug-volume.md",sourceDirName:"vm",slug:"/vm/hotplug-volume",permalink:"/v1.3/vm/hotplug-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/hotplug-volume.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Hot-Plug Volumes",title:"Hot-Plug Volumes",keywords:["Harvester","Hot-plug","Volume"],description:"Adding hot-plug volumes to a running VM."},sidebar:"docs",previous:{title:"Live Migration",permalink:"/v1.3/vm/live-migration"},next:{title:"Resource Overcommit",permalink:"/v1.3/vm/resource-overcommit"}},u={},s=[{value:"Adding Hot-Plug Volumes to a Running VM",id:"adding-hot-plug-volumes-to-a-running-vm",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/hotplug-volume"})),(0,o.kt)("p",null,"Harvester supports adding hot-plug volumes to a running VM."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, KubeVirt only supports disk bus ",(0,o.kt)("inlineCode",{parentName:"p"},"scsi")," for hot-plug volumes. For more information, see this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubevirt/kubevirt/issues/5080#issuecomment-785183128"},"issue"),".")),(0,o.kt)("h2",{id:"adding-hot-plug-volumes-to-a-running-vm"},"Adding Hot-Plug Volumes to a Running VM"),(0,o.kt)("p",null,"The following steps assume that you have a running VM and a ready volume:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Virtual Machines")," page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the VM that you want to add a volume to and select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Add Volume"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Add Volume Button",src:n(57150).Z,width:"1603",height:"780"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the ",(0,o.kt)("strong",{parentName:"p"},"Name")," and select the ",(0,o.kt)("strong",{parentName:"p"},"Volume"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apply"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Add Volume Panel",src:n(11171).Z,width:"1610",height:"785"})))))}c.isMDXComponent=!0},57150:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add-volume-button-9f4cb4943f46c39773e22c10e4a8bdca.png"},11171:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add-volume-panel-1584f7a23ec9f62b879718141aa4ce72.png"}}]);