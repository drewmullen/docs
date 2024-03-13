"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),c=n,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return r?a.createElement(h,p(p({ref:t},u),{},{components:r})):a.createElement(h,p({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},65289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={id:"index",sidebar_position:1,sidebar_label:"Upgrading Harvester",title:"Upgrading Harvester",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI."},p=void 0,o={unversionedId:"upgrade/index",id:"version-v1.2/upgrade/index",title:"Upgrading Harvester",description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI.",source:"@site/versioned_docs/version-v1.2/upgrade/automatic.md",sourceDirName:"upgrade",slug:"/upgrade/index",permalink:"/v1.2/upgrade/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/upgrade/automatic.md",tags:[],version:"v1.2",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Upgrading Harvester",title:"Upgrading Harvester",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI."},sidebar:"docs",previous:{title:"Air Gapped Environment",permalink:"/v1.2/airgap"},next:{title:"Upgrade from v1.1.2/v1.2.0 to v1.2.1",permalink:"/v1.2/upgrade/v1-2-0-to-v1-2-1"}},s={},l=[{value:"Upgrade support matrix",id:"upgrade-support-matrix",level:2},{value:"Rancher upgrade",id:"rancher-upgrade",level:2},{value:"Start an upgrade",id:"start-an-upgrade",level:2},{value:"Prepare an air-gapped upgrade",id:"prepare-an-air-gapped-upgrade",level:2},{value:"Free system partition space requirement",id:"free-system-partition-space-requirement",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/upgrade/automatic"})),(0,n.kt)("h2",{id:"upgrade-support-matrix"},"Upgrade support matrix"),(0,n.kt)("p",null,"The following table shows the upgrade path of all supported versions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Upgrade from version"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported new version(s)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/v1.2/upgrade/v1-2-0-to-v1-2-1"},"v1.1.2/v1.2.0")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.2.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/v1.2/upgrade/v1-1-1-to-v1-1-3"},"v1.1.1/v1.1.2")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.1.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/v1.2/upgrade/v1-1-to-v1-1-2"},"v1.1.0/v1.1.1")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.1.2")))),(0,n.kt)("h2",{id:"rancher-upgrade"},"Rancher upgrade"),(0,n.kt)("p",null,"If you are using Rancher to manage your Harvester cluster, we recommend upgrading your Rancher server first. For more information, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"Rancher upgrade guide"),"."),(0,n.kt)("p",null,"For the Harvester & Rancher support matrix, please visit our website ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"here"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Upgrading Rancher will not automatically upgrade your Harvester cluster. You still need to upgrade your Harvester cluster after upgrading Rancher."),(0,n.kt)("li",{parentName:"ul"},"Upgrading Rancher will not bring your Harvester cluster down. You can still access your Harvester cluster using its virtual IP."))),(0,n.kt)("h2",{id:"start-an-upgrade"},"Start an upgrade"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Before you upgrade your Harvester cluster, we highly recommend:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Back up your VMs if needed."))),(0,n.kt)("li",{parentName:"ul"},"Do not operate the cluster during an upgrade. For example, creating new VMs, uploading new images, etc."),(0,n.kt)("li",{parentName:"ul"},"Make sure your hardware meets the ",(0,n.kt)("strong",{parentName:"li"},"preferred")," ",(0,n.kt)("a",{parentName:"li",href:"/v1.2/install/requirements#hardware-requirements"},"hardware requirements"),". This is due to there will be intermediate resources consumed by an upgrade."),(0,n.kt)("li",{parentName:"ul"},"Make sure each node has at least 30 GiB of free system partition space (",(0,n.kt)("inlineCode",{parentName:"li"},"df -h /usr/local/"),"). If any node in the cluster has less than 30 GiB of free system partition space, the upgrade will be denied. Check ",(0,n.kt)("a",{parentName:"li",href:"#free-system-partition-space-requirement"},"free system partition space requirement")," for more information."),(0,n.kt)("li",{parentName:"ul"},"Run the pre-check script on a Harvester control-plane node. Please pick a script according to your cluster's version: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/upgrade-helpers/tree/main/pre-check"},"https://github.com/harvester/upgrade-helpers/tree/main/pre-check"),". "))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure all nodes' times are in sync. Using an NTP server to synchronize time is recommended. If an NTP server is not configured during the installation, you can manually add an NTP server ",(0,n.kt)("strong",{parentName:"p"},"on each node"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo -i\n\n# Add time servers\n$ vim /etc/systemd/timesyncd.conf\n[ntp]\nNTP=0.pool.ntp.org\n\n# Enable and start the systemd-timesyncd\n$ timedatectl set-ntp true\n\n# Check status\n$ sudo timedatectl status\n"))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"NICs that connect to a PCI bridge might be renamed after an upgrade. Please check the ",(0,n.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/nic-naming-scheme"},"knowledge base article")," for further information."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure to read the Warning paragraph at the top of this document first.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Harvester checks if there are new upgradable versions periodically. If there are new versions, an upgrade button shows up on the Dashboard page."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the cluster is in an air-gapped environment, please see ",(0,n.kt)("a",{parentName:"li",href:"#prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade")," section first. You can also speed up the ISO download by using the approach in that section."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Navigate to Harvester GUI and click the upgrade button on the Dashboard page."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:r(98375).Z,width:"1910",height:"812"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select a version to start upgrading."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:r(87490).Z,width:"1030",height:"598"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the circle on the top to display the upgrade progress.\n",(0,n.kt)("img",{src:r(25643).Z,width:"1910",height:"1124"})))),(0,n.kt)("h2",{id:"prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to check ",(0,n.kt)("a",{parentName:"p",href:"#upgrade-support-matrix"},"Upgrade support matrix")," section first about upgradable versions.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download a Harvester ISO file from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"release pages"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Save the ISO to a local HTTP server. Assume the file is hosted at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://10.10.0.1/harvester.iso"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download the version file from release pages, for example, ",(0,n.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester/{version}/version.yaml")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"isoURL")," value in the ",(0,n.kt)("inlineCode",{parentName:"p"},"version.yaml")," file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n  name: v1.0.2\n  namespace: harvester-system\nspec:\n  isoChecksum: <SHA-512 checksum of the ISO>\n  isoURL: http://10.10.0.1/harvester.iso  # change to local ISO URL\n  releaseDate: '20220512'\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Assume the file is hosted at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://10.10.0.1/version.yaml"),".")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Log in to one of your control plane nodes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Become root and create a version:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"rancher@node1:~> sudo -i\nrancher@node1:~> kubectl create -f http://10.10.0.1/version.yaml\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An upgrade button should show up on the Harvester GUI Dashboard page."))),(0,n.kt)("h2",{id:"free-system-partition-space-requirement"},"Free system partition space requirement"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,n.kt)("p",null,"The minimum free system partition space requirement in Harvester v1.2.0 is 30 GiB, which will be revised in each release."),(0,n.kt)("p",null,"Harvester will check the amount of free system partition space on each node when you select ",(0,n.kt)("strong",{parentName:"p"},"Upgrade"),". If any node does not meet the requirement, the upgrade will be denied as follows"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(86326).Z,width:"1630",height:"136"})),(0,n.kt)("p",null,"If some nodes do not have enough free system partition space, but you still want to try upgrading, you can customize the upgrade by updating the ",(0,n.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/minFreeDiskSpaceGB")," annotation of ",(0,n.kt)("inlineCode",{parentName:"p"},"Version")," object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'apiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n  annotations:\n    harvesterhci.io/minFreeDiskSpaceGB: "30" # the value is pre-defined and may be customized\n  name: 1.2.0\n  namespace: harvester-system\nspec:\n  isoChecksum: <SHA-512 checksum of the ISO>\n  isoURL: http://192.168.0.181:8000/harvester-master-amd64.iso\n  minUpgradableVersion: 1.1.2\n  releaseDate: "20230609"\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Setting a smaller value than the pre-defined value may cause the upgrade to fail and is not recommended in a production environment.")))}m.isMDXComponent=!0},98375:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/upgrade_button-cba6e7e3b12154a0c675fe149c719d4c.png"},86326:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/upgrade_free_space_check-20a92a99605a289417ff0786400d8986.png"},25643:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/upgrade_progress-9f571e740ff5c16d9fc0fc6518ee7b73.png"},87490:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/upgrade_select_version-cee0dbf88994b0b636f3df5ed2e47ae4.png"}}]);