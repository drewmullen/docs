"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[30183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,d=p["".concat(o,".").concat(h)]||p[h]||m[h]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:9,sidebar_label:"Net Install ISO",title:"Net Install ISO",keywords:["Harvester","Net ISO Installation","BMC ISO Redirection","BMC Virtual Media"],description:"Harvester Net Install ISO is a minimal ISO that contains only the OS binaries. It's useful for some situations."},i=void 0,s={unversionedId:"install/net-install",id:"install/net-install",title:"Net Install ISO",description:"Harvester Net Install ISO is a minimal ISO that contains only the OS binaries. It's useful for some situations.",source:"@site/docs/install/net-install.md",sourceDirName:"install",slug:"/install/net-install",permalink:"/v1.3/install/net-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/net-install.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Net Install ISO",title:"Net Install ISO",keywords:["Harvester","Net ISO Installation","BMC ISO Redirection","BMC Virtual Media"],description:"Harvester Net Install ISO is a minimal ISO that contains only the OS binaries. It's useful for some situations."},sidebar:"docs",previous:{title:"Install Harvester Binaries Only",permalink:"/v1.3/install/install-binaries-mode"},next:{title:"Air Gapped Environment",permalink:"/v1.3/airgap"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"PXE Installation",id:"pxe-installation",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/install/net-install"})),(0,r.kt)("p",null,"The Harvester net install ISO is a minimal installation image that contains only the core OS components, allowing the installer to boot and then install the Harvester OS on a disk. After installation is completed, the Harvester OS pulls all required container images from the internet (mostly from Docker Hub)."),(0,r.kt)("p",null,"You can use the net install ISO in the following situations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The virtual media implementation on a server is buggy or slow. Community users have reported that ISO redirection is too slow to preload all images onto a system. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2651"},"Issue 2651"),"."),(0,r.kt)("li",{parentName:"ul"},"You have a private registry that contains all Harvester images, as well as the knowledge and experience required to configure image mirrors for containerd.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"You must always use the full ISO to bootstrap a Harvester cluster")," (in other words, use the ISO without the ",(0,r.kt)("inlineCode",{parentName:"p"},"-net-install")," suffix). The full ISO contains all required images, and the installer preloads those images during installation. You can easily reach the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/download-rate-limit/"},"Docker Hub rate limit")," when using a net install ISO to bootstrap the Harvester cluster.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Download the net install ISO from the GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Releases")," page, and then boot the ISO to install Harvester. Net install ISO file names have the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"net-install")," (for example, ",(0,r.kt)("a",{parentName:"p",href:"https://releases.rancher.com/harvester/v1.3.0/harvester-v1.3.0-amd64-net-install.iso"},"https://releases.rancher.com/harvester/v1.3.0/harvester-v1.3.0-amd64-net-install.iso"),")."),(0,r.kt)("h2",{id:"pxe-installation"},"PXE Installation"),(0,r.kt)("p",null,"If you decide to use the net install ISO as the PXE installation source, add the following parameter when booting the kernel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"harvester.install.with_net_images=true\n")),(0,r.kt)("p",null,"Please check ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/install/pxe-boot-install"},"PXE Boot Installation")," for more information."))}m.isMDXComponent=!0}}]);