"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:5,sidebar_label:"VM \u5bfc\u5165",title:"VM \u5bfc\u5165"},l=void 0,o={unversionedId:"advanced/vmimport",id:"advanced/vmimport",title:"VM \u5bfc\u5165",description:"\u4ece v1.1.0 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced/vmimport.md",sourceDirName:"advanced",slug:"/advanced/vmimport",permalink:"/zh/dev/advanced/vmimport",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/vmimport.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"VM \u5bfc\u5165",title:"VM \u5bfc\u5165"},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6",permalink:"/zh/dev/advanced/addons"},next:{title:"PCI \u8bbe\u5907",permalink:"/zh/dev/advanced/pcidevices"}},p={},c=[{value:"vm-import-controller",id:"vm-import-controller",level:2},{value:"API",id:"api",level:2},{value:"\u6e90",id:"\u6e90",level:3},{value:"VirtualMachineImport",id:"virtualmachineimport",level:3}],s={toc:c};function m(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u4ece v1.1.0 \u5f00\u59cb\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u4ed6\u4eec\u7684 VMWare \u548c OpenStack \u865a\u62df\u673a\u5bfc\u5165\u5230 Harvester\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u901a\u8fc7 vm-import-controller \u63d2\u4ef6\u6765\u5b9e\u73b0\u7684\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528 VM \u5bfc\u5165\u529f\u80fd\uff0c\u7528\u6237\u9700\u8981\u542f\u7528 vm-import-controller \u63d2\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(97087).Z,width:"1572",height:"596"})),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cvm-import-controller \u4f7f\u7528 /var/lib/kubelet \u6302\u8f7d\u7684\u4e34\u65f6\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u5728\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u5927\u578b VM \u7684\u8282\u70b9\u53ef\u80fd\u4f1a\u7528\u5c3d\u6302\u8f7d\u70b9\u4e0a\u7684\u7a7a\u95f4\uff0c\u8fdb\u800c\u5bfc\u81f4\u540e\u7eed\u8c03\u5ea6\u5931\u8d25\u3002"),(0,r.kt)("p",null,"\u4e3a\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u5efa\u8bae\u7528\u6237\u542f\u7528\u7531 PVC \u652f\u6301\u7684\u5b58\u50a8\u5e76\u81ea\u5b9a\u4e49\u6240\u9700\u7684\u5b58\u50a8\u91cf\u3002\u6839\u636e\u6700\u4f73\u5b9e\u8df5\uff0cPVC \u7684\u5927\u5c0f\u5e94\u8be5\u662f\u8981\u8fc1\u79fb\u7684\u6700\u5927 VM \u5927\u5c0f\u7684\u4e24\u500d\u3002\u56e0\u4e3a PVC \u7528\u4f5c\u4e0b\u8f7d VM \u7684\u4e34\u65f6\u7a7a\u95f4\uff0c\u5e76\u5c06\u78c1\u76d8\u8f6c\u6362\u4e3a\u539f\u59cb\u955c\u50cf\u6587\u4ef6\uff0c\u6240\u4ee5\u6b64\u8bbe\u7f6e\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6978).Z,width:"1578",height:"776"})),(0,r.kt)("h2",{id:"vm-import-controller"},"vm-import-controller"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c\u652f\u6301\u4ee5\u4e0b\u6e90\u7684 provider\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VMWare"),(0,r.kt)("li",{parentName:"ul"},"OpenStack")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"vm-import-controller \u5f15\u5165\u4e86\u4e24\u4e2a CRD\u3002"),(0,r.kt)("h3",{id:"\u6e90"},"\u6e90"),(0,r.kt)("p",null,"\u6e90\uff08Source\uff09\u5141\u8bb8\u7528\u6237\u5b9a\u4e49\u6709\u6548\u7684\u6e90\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: migration.harvesterhci.io/v1beta1\nkind: VmwareSource\nmetadata:\n  name: vcsim\n  namespace: default\nspec:\n  endpoint: "https://vscim/sdk"\n  dc: "DCO"\n  credentials:\n    name: vsphere-credentials\n    namespace: default\n')),(0,r.kt)("p",null,"\u8be5 Secret \u5305\u542b vCenter \u7aef\u70b9\u7684\u51ed\u8bc1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: vsphere-credentials\n  namespace: default\nstringData:\n  "username": "user"\n  "password": "password"\n')),(0,r.kt)("p",null,"\u4f5c\u4e3a\u8c03\u534f\u8fc7\u7a0b\u7684\u4e00\u90e8\u5206\uff0c\u63a7\u5236\u5668\u5c06\u767b\u5f55\u5230 vCenter \u5e76\u9a8c\u8bc1\u6e90\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," \u4e2d\u6307\u5b9a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dc")," \u662f\u5426\u6709\u6548\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u6b64\u68c0\u67e5\u540e\uff0c\u6e90\u5c06\u88ab\u6807\u8bb0\u4e3a Ready\uff0c\u53ef\u7528\u4e8e VM \u8fc1\u79fb\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get vmwaresource.migration\nNAME      STATUS\nvcsim   clusterReady\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u57fa\u4e8e OpenStack \u7684\u6e90\u96c6\u7fa4\uff0c\u793a\u4f8b\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: migration.harvesterhci.io/v1beta1\nkind: OpenstackSource\nmetadata:\n  name: devstack\n  namespace: default\nspec:\n  endpoint: "https://devstack/identity"\n  region: "RegionOne"\n  credentials:\n    name: devstack-credentials\n    namespace: default\n')),(0,r.kt)("p",null,"\u8be5 Secret \u5305\u542b OpenStack \u7aef\u70b9\u7684\u51ed\u8bc1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: devstack-credentials\n  namespace: default\nstringData:\n  "username": "user"\n  "password": "password"\n  "project_name": "admin"\n  "domain_name": "default"\n  "ca_cert": "pem-encoded-ca-cert"\n')),(0,r.kt)("p",null,"OpenStack \u6e90\u7684\u8c03\u534f\u8fc7\u7a0b\u4f1a\u5c1d\u8bd5\u5217\u51fa\u9879\u76ee\u4e2d\u7684\u865a\u62df\u673a\u5e76\u5c06\u6e90\u6807\u8bb0\u4e3a Ready\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get opestacksource.migration\nNAME       STATUS\ndevstack   clusterReady\n")),(0,r.kt)("h3",{id:"virtualmachineimport"},"VirtualMachineImport"),(0,r.kt)("p",null,"VirtualMachineImport CRD \u63d0\u4f9b\u4e86\u5b9a\u4e49\u6e90 VM \u5e76\u6620\u5c04\u5230\u5b9e\u9645\u6e90\u96c6\u7fa4\u4ee5\u6267\u884c VM \u5bfc\u51fa/\u5bfc\u5165\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"VirtualMachineImport \u793a\u4f8b\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: migration.harvesterhci.io/v1beta1\nkind: VirtualMachineImport\nmetadata:\n  name: alpine-export-test\n  namespace: default\nspec:\n  virtualMachineName: "alpine-export-test"\n  networkMapping:\n  - sourceNetwork: "dvSwitch 1"\n    destinationNetwork: "default/vlan1"\n  - sourceNetwork: "dvSwitch 2"\n    destinationNetwork: "default/vlan2"\n  sourceCluster:\n    name: vcsim\n    namespace: default\n    kind: VmwareSource\n    apiVersion: migration.harvesterhci.io/v1beta1\n')),(0,r.kt)("p",null,"\u8fd9\u5c06\u89e6\u53d1\u63a7\u5236\u5668\u5bfc\u51fa VMWare \u6e90\u96c6\u7fa4\u4e0a\u540d\u4e3a \u201calpine-export-test\u201d \u7684 VM\uff0c\u4ece\u800c\u5c06 VM \u5bfc\u51fa\u3001\u5904\u7406\u5e76\u91cd\u65b0\u521b\u5efa\u5230 Harvester \u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("p",null,"\u6b64\u8fc7\u7a0b\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u865a\u62df\u673a\u7684\u5927\u5c0f\u3002\u7528\u6237\u5e94\u8be5\u53ef\u4ee5\u5728\u5b9a\u4e49\u7684\u865a\u62df\u673a\u4e2d\u770b\u5230\u4e3a\u6bcf\u4e2a\u78c1\u76d8\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualMachineImages"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"networkMapping")," \u4e2d\u7684\u9879\u76ee\u5217\u8868\u7528\u4e8e\u5b9a\u4e49\u6e90\u7f51\u7edc\u63a5\u53e3\u662f\u5982\u4f55\u6620\u5c04\u5230 Harvester \u7f51\u7edc\u7684\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u5339\u914d\u9879\uff0c\u6bcf\u4e2a\u4e0d\u5339\u914d\u7684\u7f51\u7edc\u63a5\u53e3\u90fd\u4f1a\u9644\u52a0\u5230\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"managementNetwork"),"\u3002"),(0,r.kt)("p",null,"\u6210\u529f\u5bfc\u5165\u865a\u62df\u673a\u540e\uff0c\u5bf9\u8c61\u5c06\u53cd\u6620\u4ee5\u4e0b\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get virtualmachineimport.migration\nNAME                    STATUS\nalpine-export-test      virtualMachineRunning\nopenstack-cirros-test   virtualMachineRunning\n\n")),(0,r.kt)("p",null,"\u540c\u6837\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u4e3a OpenStack \u6e90\u5b9a\u4e49 VirtualMachineImport\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: migration.harvesterhci.io/v1beta1\nkind: VirtualMachineImport\nmetadata:\n  name: openstack-demo\n  namespace: default\nspec:\n  virtualMachineName: "openstack-demo" #Name or UUID for instance\n  networkMapping:\n  - sourceNetwork: "shared"\n    destinationNetwork: "default/vlan1"\n  - sourceNetwork: "public"\n    destinationNetwork: "default/vlan2"\n  sourceCluster:\n    name: devstack\n    namespace: default\n    kind: OpenstackSource\n    apiVersion: migration.harvesterhci.io/v1beta1\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"OpenStack \u5141\u8bb8\u7528\u6237\u62e5\u6709\u591a\u4e2a\u540c\u540d\u7684\u5b9e\u4f8b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5efa\u8bae\u7528\u6237\u4f7f\u7528 Instance ID\u3002\u4f7f\u7528\u540d\u79f0\u65f6\uff0c\u8c03\u534f\u903b\u8f91\u4f1a\u5c1d\u8bd5\u6267\u884c\u4ece\u540d\u79f0\u5230 ID \u7684\u67e5\u8be2\u3002")))}m.isMDXComponent=!0},6978:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ConfigureAddon-49285f9d972b7a2c5cd658699010766d.png"},97087:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/EnableAddon-2d1d07ec9a24c2f478806943fb79214b.png"}}]);