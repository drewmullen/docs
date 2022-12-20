"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,f=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},s=void 0,i={unversionedId:"faq",id:"faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/v1.1/faq",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1671526274,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:17,frontMatter:{sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/v1.1/troubleshooting/monitoring"}},l={},d=[{value:"How can I ssh login to the Harvester node?",id:"how-can-i-ssh-login-to-the-harvester-node",level:3},{value:"What is the default login username and password of the Harvester dashboard?",id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard",level:3},{value:"How can I access the kubeconfig file of the Harvester cluster?",id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster",level:3},{value:"How to install the qemu-guest-agent of a running VM?",id:"how-to-install-the-qemu-guest-agent-of-a-running-vm",level:3},{value:"How can I reset the administrator password?",id:"how-can-i-reset-the-administrator-password",level:3},{value:"I added an additional disk with partitions. Why is it not getting detected?",id:"i-added-an-additional-disk-with-partitions-why-is-it-not-getting-detected",level:3}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester."),(0,a.kt)("h3",{id:"how-can-i-ssh-login-to-the-harvester-node"},"How can I ssh login to the Harvester node?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh rancher@node-ip\n")),(0,a.kt)("h3",{id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard"},"What is the default login username and password of the Harvester dashboard?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"username: admin\npassword: # you will be promoted to set the default password when logging in for the first time\n")),(0,a.kt)("h3",{id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster"},"How can I access the kubeconfig file of the Harvester cluster?"),(0,a.kt)("p",null,"Option 1. You can download the kubeconfig file from the support page of the Harvester dashboard.\n",(0,a.kt)("img",{alt:"harvester-kubeconfig.png",src:n(68001).Z,width:"2866",height:"1246"})),(0,a.kt)("p",null,"Option 2. You can get the kubeconfig file from one of the Harvester management nodes. E.g.,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo su\n$ cat /etc/rancher/rke2/rke2.yaml\n")),(0,a.kt)("h3",{id:"how-to-install-the-qemu-guest-agent-of-a-running-vm"},"How to install the qemu-guest-agent of a running VM?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# cloud-init will only be executed once, reboot it after add the cloud-init config with the following command.\n$ cloud-init clean --logs --reboot\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/cli.html#clean"},"https://cloudinit.readthedocs.io/en/latest/topics/cli.html#clean")),(0,a.kt)("h3",{id:"how-can-i-reset-the-administrator-password"},"How can I reset the administrator password?"),(0,a.kt)("p",null,"In case you forget the administrator password, you can reset it via the command line. SSH to one of the management node and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# switch to root and run\n$ kubectl  -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,a.kt)("h3",{id:"i-added-an-additional-disk-with-partitions-why-is-it-not-getting-detected"},"I added an additional disk with partitions. Why is it not getting detected?"),(0,a.kt)("p",null,"As of Harvester v1.0.2, we no longer support adding additional partitioned disks, so be sure to delete all partitions first (e.g., using ",(0,a.kt)("inlineCode",{parentName:"p"},"fdisk"),")."))}u.isMDXComponent=!0},68001:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/harvester-kubeconfig-766a36ec753411c89d93b986cb5b9cdb.png"}}]);