"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||s;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:1,sidebar_label:"Upgrade from v1.0.3 to v1.1.0",title:"Upgrade from v1.0.3 to v1.1.0"},o=void 0,i={unversionedId:"upgrade/previous-releases/v1-0-3-to-v1-1-0",id:"upgrade/previous-releases/v1-0-3-to-v1-1-0",title:"Upgrade from v1.0.3 to v1.1.0",description:"Please do not upgrade a running cluster to v1.1.0 if the cluster has the following configuration:",source:"@site/docs/upgrade/previous-releases/v1-0-3-to-v1-1-0.md",sourceDirName:"upgrade/previous-releases",slug:"/upgrade/previous-releases/v1-0-3-to-v1-1-0",permalink:"/v1.2/upgrade/previous-releases/v1-0-3-to-v1-1-0",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/previous-releases/v1-0-3-to-v1-1-0.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Upgrade from v1.0.3 to v1.1.0",title:"Upgrade from v1.0.3 to v1.1.0"},sidebar:"docs",previous:{title:"Upgrade from v1.0.3/v1.1.0 to v1.1.1",permalink:"/v1.2/upgrade/v1-0-3-to-v1-1-1"},next:{title:"Upgrade from v1.0.2 to v1.0.3",permalink:"/v1.2/upgrade/previous-releases/v1-0-2-to-v1-0-3"}},p={},u=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. An upgrade is stuck when pre-draining a node",id:"1-an-upgrade-is-stuck-when-pre-draining-a-node",level:3},{value:"2. An upgrade is stuck after a node is pre-drained",id:"2-an-upgrade-is-stuck-after-a-node-is-pre-drained",level:3},{value:"3. The monitor dashboard displays nothing after an upgrade",id:"3-the-monitor-dashboard-displays-nothing-after-an-upgrade",level:3}],l={toc:u},d="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/upgrade/previous-releases/v1-0-3-to-v1-1-0"})),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Please do not upgrade a running cluster to v1.1.0 if the cluster has the following configuration:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The harvester-mgmt network contains two or more network interfaces.")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"  networks:\n    harvester-mgmt:\n      interfaces:\n      - name: ens5\n      - name: ens6\n      method: dhcp\n")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Defining a cluster_network in the configuration file with harvester-mgmt network:")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},'cluster_networks:\n  vlan:\n    enable: true\n    description: "harvester-mgmt"\n    config:\n      defaultPhysicalNIC: harvester-mgmt\n')),(0,n.kt)("p",{parentName:"admonition"},"Related issue: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3045"},"[BUG] Harvester Upgrade 1.0.3 to 1.1.0 does not handle multiple SLAVE in BOND for management interface"))),(0,n.kt)("h2",{id:"general-information"},"General information"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Starting from version v1.1.0, Harvester brings in the new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/2236"},"VLAN enhancement")," feature. Due to the implementation changes, all user VMs must shut down during an upgrade. Please stop the VMs before an upgrade.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We introduce ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/advanced/storagenetwork"},"Storage Network")," feature in v1.1.0. Due to a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3168"},"known issue"),", please ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/advanced/storagenetwork#prerequisites"},"create required CRDs")," before using the feature.")))),(0,n.kt)("p",null,"Once there is an upgradable version, the Harvester GUI Dashboard page will show an upgrade button. For more details, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#start-an-upgrade"},"start an upgrade"),"."),(0,n.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,n.kt)("h2",{id:"known-issues"},"Known issues"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-an-upgrade-is-stuck-when-pre-draining-a-node"},"1. An upgrade is stuck when pre-draining a node"),(0,n.kt)("p",null,'Starting from v1.1.0, Harvester will wait for all volumes to become healthy (when node counts >= 3) before upgrading a node. Generally, users can check volumes\' health if an upgrade is stuck in the "pre-draining" state.'),(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},'"Access Embedded Longhorn"')," to see how to access the embedded Longhorn GUI."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2-an-upgrade-is-stuck-after-a-node-is-pre-drained"},"2. An upgrade is stuck after a node is pre-drained"),(0,n.kt)("p",null,"An upgrade is stuck, as shown in the screenshot below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(50329).Z,width:"1136",height:"504"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021"},"[BUG] Upgrade stop at upgrading node3 stage, stuck in Pre-drained status")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"},"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3-the-monitor-dashboard-displays-nothing-after-an-upgrade"},"3. The monitor dashboard displays nothing after an upgrade"),(0,n.kt)("p",null,"After an upgrade, the user might see the embedded Grafana dashboard doesn't work:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(78370).Z,width:"3284",height:"588"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2984"},"[BUG] Cant's display monitoring dashboard after upgrade, alertmanager, prometheus and grafana monitoring pods Terminating")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2984#issuecomment-1286517922"},"https://github.com/harvester/harvester/issues/2984#issuecomment-1286517922"))))))}m.isMDXComponent=!0},78370:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2984-grafana-b85f039074c1b3f8ec47b93f1194573a.png"},50329:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3021-stuck-fe36d9af55b75fc0818de41c48ec670b.png"}}]);