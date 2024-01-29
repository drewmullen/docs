"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),c=o,v=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},15242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={sidebar_position:7,sidebar_label:"Hot-Plug Volumes",title:"Hot-Plug Volumes",keywords:["Harvester","Hot-plug","Volume"],description:"Adding hot-plug volumes to a running VM."},a=void 0,i={unversionedId:"vm/hotplug-volume",id:"version-v0.3/vm/hotplug-volume",title:"Hot-Plug Volumes",description:"Adding hot-plug volumes to a running VM.",source:"@site/versioned_docs/version-v0.3/vm/hotplug-volume.md",sourceDirName:"vm",slug:"/vm/hotplug-volume",permalink:"/zh/v0.3/vm/hotplug-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/vm/hotplug-volume.md",tags:[],version:"v0.3",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Hot-Plug Volumes",title:"Hot-Plug Volumes",keywords:["Harvester","Hot-plug","Volume"],description:"Adding hot-plug volumes to a running VM."},sidebar:"tutorialSidebar",previous:{title:"Live Migration",permalink:"/zh/v0.3/vm/live-migration"},next:{title:"Harvester Network",permalink:"/zh/v0.3/networking/harvester-network"}},u={},s=[{value:"Adding Hot-Plug Volumes to a Running VM",id:"adding-hot-plug-volumes-to-a-running-vm",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...l}=e;return(0,o.kt)(m,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/hotplug-volume"})),(0,o.kt)("p",null,"Harvester supports adding hot-plug volumes to a running VM."),(0,o.kt)("h2",{id:"adding-hot-plug-volumes-to-a-running-vm"},"Adding Hot-Plug Volumes to a Running VM"),(0,o.kt)("p",null,"The following steps assume that you have a running VM and a ready volume:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,o.kt)("li",{parentName:"ol"},"Find the VM that you want to add a volume to and select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Add Volume"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Name")," and select the ",(0,o.kt)("strong",{parentName:"li"},"Volume"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apply"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Volume",src:r(83535).Z,width:"1148",height:"647"})))}d.isMDXComponent=!0},83535:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-volume-375de2ad2a3848f38d3e6da36ff3d33b.png"}}]);