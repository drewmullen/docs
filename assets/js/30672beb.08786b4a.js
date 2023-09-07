"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,g=u["".concat(d,".").concat(h)]||u[h]||c[h]||i;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:4,sidebar_label:"Upgrade from v1.0.3/v1.1.0 to v1.1.1",title:"Upgrade from v1.0.3/v1.1.0 to v1.1.1"},s=void 0,o={unversionedId:"upgrade/v1-0-3-to-v1-1-1",id:"upgrade/v1-0-3-to-v1-1-1",title:"Upgrade from v1.0.3/v1.1.0 to v1.1.1",description:"General information",source:"@site/docs/upgrade/v1-0-3-to-v1-1-1.md",sourceDirName:"upgrade",slug:"/upgrade/v1-0-3-to-v1-1-1",permalink:"/v1.2/upgrade/v1-0-3-to-v1-1-1",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/v1-0-3-to-v1-1-1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Upgrade from v1.0.3/v1.1.0 to v1.1.1",title:"Upgrade from v1.0.3/v1.1.0 to v1.1.1"},sidebar:"docs",previous:{title:"Upgrade from v1.1.0/v1.1.1 to v1.1.2",permalink:"/v1.2/upgrade/v1-1-to-v1-1-2"},next:{title:"Upgrade from v1.0.3 to v1.1.0",permalink:"/v1.2/upgrade/previous-releases/v1-0-3-to-v1-1-0"}},d={},l=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. An upgrade is stuck when pre-draining a node",id:"1-an-upgrade-is-stuck-when-pre-draining-a-node",level:3},{value:"2. An upgrade is stuck when pre-draining a node (case 2)",id:"2-an-upgrade-is-stuck-when-pre-draining-a-node-case-2",level:3},{value:"3. An upgrade is stuck in upgrading the first node: Job was active longer than the specified deadline",id:"3-an-upgrade-is-stuck-in-upgrading-the-first-node-job-was-active-longer-than-the-specified-deadline",level:3},{value:"4. An upgrade is stuck after a node is pre-drained",id:"4-an-upgrade-is-stuck-after-a-node-is-pre-drained",level:3},{value:"5. Additional certificates disappear after an upgrade",id:"5-additional-certificates-disappear-after-an-upgrade",level:3}],p={toc:l},u="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/upgrade/v1-0-3-to-v1-1-1"})),(0,n.kt)("h2",{id:"general-information"},"General information"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Starting from version v1.1.0, Harvester brings in the new ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2236"},"VLAN enhancement")," feature. Due to the implementation changes, all user VMs must shut down if the upgrade is from v1.0.3 to v1.1.1. Please stop the VMs before an upgrade. Upgrading from v1.1.0 to v1.1.1 doesn't have this restriction (using live migration)."))),(0,n.kt)("p",null,"Once there is an upgradable version, the Harvester GUI Dashboard page will show an upgrade button. For more details, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#start-an-upgrade"},"start an upgrade"),"."),(0,n.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,n.kt)("h2",{id:"known-issues"},"Known issues"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-an-upgrade-is-stuck-when-pre-draining-a-node"},"1. An upgrade is stuck when pre-draining a node"),(0,n.kt)("p",null,'Starting from v1.1.0, Harvester will wait for all volumes to become healthy (when node count >= 3) before upgrading a node. Generally, users can check volumes\' health if an upgrade is stuck in the "pre-draining" state.'),(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},'"Access Embedded Longhorn"')," to see how to access the embedded Longhorn GUI."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2-an-upgrade-is-stuck-when-pre-draining-a-node-case-2"},"2. An upgrade is stuck when pre-draining a node (case 2)"),(0,n.kt)("p",null,"An upgrade is stuck, as shown in the screenshot below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9859).Z,width:"1128",height:"470"})),(0,n.kt)("p",null,"And the user can also observe multiple nodes have scheduling disabled."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get nodes\nNAME    STATUS                     ROLES                       AGE   VERSION\nnode1   Ready                      control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode2   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode3   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216"},"[BUG] Multiple nodes pre-drains in an upgrade")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"},"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3-an-upgrade-is-stuck-in-upgrading-the-first-node-job-was-active-longer-than-the-specified-deadline"},"3. An upgrade is stuck in upgrading the first node: Job was active longer than the specified deadline"),(0,n.kt)("p",null,"An upgrade fails, as shown in the screenshot below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(27667).Z,width:"1140",height:"918"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894"},"[BUG] Upgrade stuck in upgrading first node: Job was active longer than specified deadline")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"},"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"4-an-upgrade-is-stuck-after-a-node-is-pre-drained"},"4. An upgrade is stuck after a node is pre-drained"),(0,n.kt)("p",null,"An upgrade is stuck, as shown in the screenshot below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(50329).Z,width:"1136",height:"504"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021"},"[BUG] Upgrade stop at upgrading node3 stage, stuck in Pre-drained status")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"},"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"5-additional-certificates-disappear-after-an-upgrade"},"5. Additional certificates disappear after an upgrade"),(0,n.kt)("p",null,"After upgrading from v1.0.3, the file ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/pki/trust/anchors/additional-ca.pem")," configured via the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/advanced/settings#additional-ca"},(0,n.kt)("inlineCode",{parentName:"a"},"additional-ca")," setting")," disappears."),(0,n.kt)("p",null,"To fix this, the user needs to access the Settings page (Harvester GUI, ",(0,n.kt)("inlineCode",{parentName:"p"},"Advanced -> Settings"),"): "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Edit the ",(0,n.kt)("inlineCode",{parentName:"li"},"additional-ca")," setting. Back up the current value first, clear the current value, and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ul"},"Edit the ",(0,n.kt)("inlineCode",{parentName:"li"},"additional-ca")," setting again. Input the certificates again and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,n.kt)("hr",null))}c.isMDXComponent=!0},27667:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2894-deadline-8fbfd53960ef87f904f6a893a4a0bfcd.png"},50329:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3021-stuck-fe36d9af55b75fc0818de41c48ec670b.png"},9859:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3216-stuck-pre-drain-33d5537a9151085216d2cd275c92cf1f.png"}}]);