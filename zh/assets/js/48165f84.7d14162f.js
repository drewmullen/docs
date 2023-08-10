"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:3,sidebar_label:"\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4",title:"\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4"},i=void 0,o={unversionedId:"rancher/node/rke2-cluster",id:"version-v1.0/rancher/node/rke2-cluster",title:"\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4",description:"\u5728 Rancher 2.6.3 \u6216\u4ee5\u4e0a\u7684\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 Harvester \u4e3b\u673a\u9a71\u52a8\u521b\u5efa\u57fa\u4e8e Harvester \u96c6\u7fa4\u4e4b\u4e0a\u7684 RKE2 Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/rancher/node/rke2-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke2-cluster",permalink:"/zh/v1.0/rancher/node/rke2-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/node/rke2-cluster.md",tags:[],version:"v1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4",title:"\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4",permalink:"/zh/v1.0/rancher/node/rke1-cluster"},next:{title:"\u521b\u5efa K3s Kubernetes \u96c6\u7fa4",permalink:"/zh/v1.0/rancher/node/k3s-cluster"}},s={},p=[{value:"\u521b\u5efa\u4f60\u7684\u4e91\u51ed\u8bc1",id:"\u521b\u5efa\u4f60\u7684\u4e91\u51ed\u8bc1",level:3},{value:"\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4",id:"\u521b\u5efa-rke2-kubernetes-\u96c6\u7fa4",level:3},{value:"\u6dfb\u52a0\u8282\u70b9\u4eb2\u548c\u6027",id:"\u6dfb\u52a0\u8282\u70b9\u4eb2\u548c\u6027",level:4},{value:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 Harvester RKE2 \u4e3b\u673a\u9a71\u52a8",id:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528-harvester-rke2-\u4e3b\u673a\u9a71\u52a8",level:3}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"2.6.3")," \u6216\u4ee5\u4e0a\u7684\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 Harvester \u4e3b\u673a\u9a71\u52a8\u521b\u5efa\u57fa\u4e8e Harvester \u96c6\u7fa4\u4e4b\u4e0a\u7684 RKE2 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke2-cluster",src:r(63541).Z,width:"5118",height:"2002"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Harvester RKE2 \u4e3b\u673a\u9a71\u52a8\u5904\u4e8e\u6280\u672f\u9884\u89c8\u9636\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},"Harvester \u4e3b\u673a\u9a71\u52a8\u9700\u8981 VLAN \u7f51\u7edc\u3002"))),(0,a.kt)("h3",{id:"\u521b\u5efa\u4f60\u7684\u4e91\u51ed\u8bc1"},"\u521b\u5efa\u4f60\u7684\u4e91\u51ed\u8bc1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f60\u7684\u4e91\u51ed\u8bc1\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Imported Harvester")," \u6216 ",(0,a.kt)("strong",{parentName:"li"},"External Harvester"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(50009).Z,width:"5118",height:"1614"})),(0,a.kt)("h3",{id:"\u521b\u5efa-rke2-kubernetes-\u96c6\u7fa4"},"\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 RKE2 \u4e3b\u673a\u9a71\u52a8\u4ece",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406"),"\u9875\u9762\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," \u83dc\u5355\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create")," \u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5207\u6362\u5230 ",(0,a.kt)("strong",{parentName:"li"},"RKE2/K3s"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 Harvester \u4e3b\u673a\u9a71\u52a8\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Namespace"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Image"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Network Name"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"li"},"SSH User"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-rke2-harvester-cluster",src:r(29629).Z,width:"3080",height:"1766"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"RKE2 1.21.5 + rke2r2 \u6216\u66f4\u9ad8\u7248\u672c\u63d0\u4f9b\u5185\u7f6e\u7684 Harvester Cloud Provider \u548c Guest CSI \u9a71\u52a8\u96c6\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4ec5\u81ea\u52a8\u652f\u6301\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u3002"))),(0,a.kt)("h4",{id:"\u6dfb\u52a0\u8282\u70b9\u4eb2\u548c\u6027"},"\u6dfb\u52a0\u8282\u70b9\u4eb2\u548c\u6027"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.0.3 + Rancher v2.6.7 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"Harvester \u4e3b\u673a\u9a71\u52a8\u73b0\u5728\u652f\u6301\u901a\u8fc7\u8282\u70b9\u4eb2\u548c\u6027\u89c4\u5219\u5c06\u4e00\u7ec4\u4e3b\u673a\u8c03\u5ea6\u5230\u7279\u5b9a\u8282\u70b9\uff0c\u8fd9\u80fd\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\u5e76\u63d0\u9ad8\u8d44\u6e90\u7684\u5229\u7528\u7387\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u96c6\u7fa4\u521b\u5efa\u671f\u95f4\u5c06\u8282\u70b9\u4eb2\u548c\u6027\u6dfb\u52a0\u5230\u4e3b\u673a\u6c60\u4e2d\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Show Advanced")," \u6309\u94ae\u5e76\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),"\uff1a\n",(0,a.kt)("img",{alt:"affinity-add-node-selector",src:r(75717).Z,width:"3668",height:"1478"})),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u5e0c\u671b\u8c03\u5ea6\u7a0b\u5e8f\u4ec5\u5728\u6ee1\u8db3\u89c4\u5219\u65f6\u8c03\u5ea6\u4e3b\u673a\uff0c\u8bf7\u5c06\u4f18\u5148\u7ea7\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Required"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Rule")," \u6307\u5b9a\u8282\u70b9\u4eb2\u548c\u89c4\u5219\uff0c\u4f8b\u5982\uff0c\u5bf9\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"/zh/v1.0/rancher/node/node-driver#%E6%8B%93%E6%89%91%E5%88%86%E5%B8%83%E7%BA%A6%E6%9D%9F"},"topology spread constraints")," \u7528\u4f8b\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"region")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"zone")," \u6807\u7b7e\uff0c\u5982\u4e0b\uff1a",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list\nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list\nvalues: us-east-1a\n")),(0,a.kt)("img",{alt:"affinity-add-rules",src:r(24173).Z,width:"3634",height:"1290"})),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," \u4fdd\u5b58\u8282\u70b9\u6a21\u677f\u3002\u96c6\u7fa4\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u5176\u4e3b\u673a\u8282\u70b9\u662f\u5426\u6309\u7167\u4eb2\u548c\u6027\u89c4\u5219\u8fdb\u884c\u8c03\u5ea6\u3002")),(0,a.kt)("h3",{id:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528-harvester-rke2-\u4e3b\u673a\u9a71\u52a8"},"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 Harvester RKE2 \u4e3b\u673a\u9a71\u52a8"),(0,a.kt)("p",null,"RKE2 \u914d\u7f6e\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," \u6765\u83b7\u53d6\u865a\u62df\u673a\u7684 IP\u3002\u4f46\u662f\uff0c\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," \u53ef\u80fd\u4e0d\u53ef\u884c\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\u89e3\u51b3\u5b89\u88c5\u9650\u5236\uff1a"),(0,a.kt)("p",null,"\u9009\u9879 1\uff1a\u4f7f\u7528\u5b89\u88c5\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," \u7684\u865a\u62df\u673a\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u9009\u9879 2\uff1a\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud init")," \u7528\u6237\u6570\u636e\uff0c\u4f7f\u865a\u62df\u673a\u80fd\u591f\u901a\u8fc7 HTTP(S) \u4ee3\u7406\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent"),"\u3002"),(0,a.kt)("p",null,"Harvester \u8282\u70b9\u6a21\u677f\u4e2d\u7684\u7528\u6237\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\n")))}u.isMDXComponent=!0},75717:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-rke2-add-node-selector-43c8e7c2785ab6a07a2c90791d84f9c3.png"},24173:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-rke2-add-rules-6934a0009ec40592576d46f06523c040.png"},50009:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-cloud-credentials-802de79d7c98f1d103be549480f02365.png"},29629:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-rke2-harvester-cluster-69f3e90ce583758d3fb637b41d103772.png"},63541:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke2-k3s-node-driver-cc17f742cf8fe7fdf8fcf814c34754cb.png"}}]);