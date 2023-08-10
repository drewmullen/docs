"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4023],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),k=a,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:2,sidebar_label:"\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4",title:"\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4"},i=void 0,o={unversionedId:"rancher/node/rke1-cluster",id:"rancher/node/rke1-cluster",title:"\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4",description:"\u5728 Rancher 2.6.3 \u6216\u4ee5\u4e0a\u7684\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 Harvester \u4e3b\u673a\u9a71\u52a8\u521b\u5efa\u57fa\u4e8e Harvester \u96c6\u7fa4\u4e4b\u4e0a\u7684 RKE1 Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rancher/node/rke1-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke1-cluster",permalink:"/zh/dev/rancher/node/rke1-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/node/rke1-cluster.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4",title:"\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"Harvester \u4e3b\u673a\u9a71\u52a8",permalink:"/zh/dev/rancher/node/node-driver"},next:{title:"\u521b\u5efa RKE2 Kubernetes \u96c6\u7fa4",permalink:"/zh/dev/rancher/node/rke2-cluster"}},p={},s=[{value:"\u521b\u5efa\u4f60\u7684\u4e91\u51ed\u8bc1",id:"\u521b\u5efa\u4f60\u7684\u4e91\u51ed\u8bc1",level:3},{value:"\u521b\u5efa\u8282\u70b9\u6a21\u677f",id:"\u521b\u5efa\u8282\u70b9\u6a21\u677f",level:3},{value:"\u6dfb\u52a0\u8282\u70b9\u4eb2\u548c\u6027",id:"\u6dfb\u52a0\u8282\u70b9\u4eb2\u548c\u6027",level:4},{value:"\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4",id:"\u521b\u5efa-rke1-kubernetes-\u96c6\u7fa4",level:3},{value:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 Harvester RKE1 \u4e3b\u673a\u9a71\u52a8",id:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528-harvester-rke1-\u4e3b\u673a\u9a71\u52a8",level:3}],d={toc:s};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"2.6.3")," \u6216\u4ee5\u4e0a\u7684\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 Harvester \u4e3b\u673a\u9a71\u52a8\u521b\u5efa\u57fa\u4e8e Harvester \u96c6\u7fa4\u4e4b\u4e0a\u7684 RKE1 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke1-cluster",src:r(38719).Z,width:"5118",height:"1972"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Harvester \u4e3b\u673a\u9a71\u52a8\u9700\u8981 VLAN \u7f51\u7edc\u3002"),(0,a.kt)("li",{parentName:"ul"},"Harvester \u4e3b\u673a\u9a71\u52a8\u4ec5\u652f\u6301\u4e91\u670d\u52a1\u955c\u50cf\uff08Cloud Image\uff09\u3002"))),(0,a.kt)("p",null,"\u5728\u521b\u5efa\u7531 Harvester \u57fa\u7840\u67b6\u6784\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4\u65f6\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"\u8282\u70b9\u6a21\u677f"),"\u7528\u4e8e\u914d\u7f6e\u96c6\u7fa4\u8282\u70b9\u3002\u8fd9\u4e9b\u6a21\u677f\u4f7f\u7528 Docker Machine \u914d\u7f6e\u9009\u9879\u6765\u5b9a\u4e49\u8282\u70b9\u7684\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf\u4ee5\u53ca\u8bbe\u7f6e/\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u8282\u70b9\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e91\u51ed\u8bc1"),"\u6765\u8bbf\u95ee\u5728\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u4e2d\u914d\u7f6e\u8282\u70b9\u6240\u9700\u7684\u51ed\u8bc1\u4fe1\u606f\u3002\u591a\u4e2a\u8282\u70b9\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e91\u51ed\u8bc1"),"\u3002\u901a\u8fc7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e91\u51ed\u8bc1"),"\uff0c\u4f60\u4e0d\u5fc5\u4e3a\u540c\u4e00\u4e91\u63d0\u4f9b\u5546\u91cd\u65b0\u8f93\u5165\u8bbf\u95ee\u5bc6\u94a5\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e91\u51ed\u8bc1"),"\u5b58\u50a8\u4e3a Kubernetes \u5bc6\u6587\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e24\u79cd\u60c5\u51b5\u4e0b\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e91\u51ed\u636e"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"\u5728\u4e3a\u96c6\u7fa4\u521b\u5efa\u8282\u70b9\u6a21\u677f\u671f\u95f4"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},'\u5728"\u7528\u6237\u8bbe\u7f6e"\u9875\u9762\u3002')),(0,a.kt)("p",null,"\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e91\u51ed\u8bc1"),"\u90fd\u7ed1\u5b9a\u5230\u4f60\u7684\u7528\u6237\u914d\u7f6e\u6587\u4ef6\uff0c\u4e0d\u80fd\u4e0e\u5176\u4ed6\u7528\u6237\u5171\u4eab\u3002"),(0,a.kt)("h3",{id:"\u521b\u5efa\u4f60\u7684\u4e91\u51ed\u8bc1"},"\u521b\u5efa\u4f60\u7684\u4e91\u51ed\u8bc1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f60\u7684\u4e91\u51ed\u8bc1\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Imported Harvester Cluster"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(52125).Z,width:"1920",height:"969"})),(0,a.kt)("h3",{id:"\u521b\u5efa\u8282\u70b9\u6a21\u677f"},"\u521b\u5efa\u8282\u70b9\u6a21\u677f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u4e3a\u4f60\u7684 Kubernetes \u96c6\u7fa4\u521b\u5efa\u8282\u70b9\u6a21\u677f\u5e76\u521b\u5efa\u8282\u70b9\u6c60\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e",(0,a.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e",(0,a.kt)("strong",{parentName:"li"},"\u5b9e\u4f8b\u9009\u9879"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e CPU\uff0c\u5185\u5b58\u548c\u78c1\u76d8\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"cloud-init")," \u914d\u7f6e\u517c\u5bb9\u7684\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 \u4e3b\u673a\u9a71\u52a8\u80fd\u591f\u8fde\u63a5\u7684\u7f51\u7edc\uff0c\u76ee\u524d\u4ec5\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"VLAN"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165 SSH \u7528\u6237\u3002\u7528\u6237\u540d\u4f1a\u7528\u4e8e SSH \u5230\u8282\u70b9\u3002\u4f8b\u5982\uff0cUbuntu \u4e91\u955c\u50cf\u7684\u9ed8\u8ba4\u7528\u6237\u5c06\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u9700\u8981\u81ea\u5b9a\u4e49\u865a\u62df\u673a\u7684 cloud-init \u914d\u7f6e\uff0c\u8bbe\u7f6e ",(0,a.kt)("strong",{parentName:"li"},"Advanced Options"),"\uff1a"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"li"},"RANCHER TEMPLATE")," \u540d\u79f0\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(79351).Z,width:"1691",height:"1027"})),(0,a.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/"},"\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9"),"\u3002"),(0,a.kt)("h4",{id:"\u6dfb\u52a0\u8282\u70b9\u4eb2\u548c\u6027"},"\u6dfb\u52a0\u8282\u70b9\u4eb2\u548c\u6027"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.0.3 + Rancher v2.6.7 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"Harvester \u4e3b\u673a\u9a71\u52a8\u73b0\u5728\u652f\u6301\u901a\u8fc7\u8282\u70b9\u4eb2\u548c\u6027\u89c4\u5219\u5c06\u4e00\u7ec4\u4e3b\u673a\u8c03\u5ea6\u5230\u7279\u5b9a\u8282\u70b9\uff0c\u8fd9\u80fd\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\u5e76\u63d0\u9ad8\u8d44\u6e90\u7684\u5229\u7528\u7387\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u96c6\u7fa4\u521b\u5efa\u671f\u95f4\u5c06\u8282\u70b9\u4eb2\u548c\u6027\u6dfb\u52a0\u5230\u8282\u70b9\u6a21\u677f\u4e2d\uff0c\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Node Template")," \u6216\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"RKE1 Configuration > Node Templates")," \u7f16\u8f91\u73b0\u6709\u8282\u70b9\u6a21\u677f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Advanced Options")," \u9009\u9879\u5361\u5e76\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),"\uff1a\n",(0,a.kt)("img",{alt:"affinity-add-node-selector",src:r(12291).Z,width:"1108",height:"468"})),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u5e0c\u671b\u8c03\u5ea6\u7a0b\u5e8f\u4ec5\u5728\u6ee1\u8db3\u89c4\u5219\u65f6\u8c03\u5ea6\u4e3b\u673a\uff0c\u8bf7\u5c06\u4f18\u5148\u7ea7\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Required"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Rule")," \u6307\u5b9a\u8282\u70b9\u4eb2\u548c\u89c4\u5219\uff0c\u4f8b\u5982\uff0c\u5bf9\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/rancher/node/node-driver#%E6%8B%93%E6%89%91%E5%88%86%E5%B8%83%E7%BA%A6%E6%9D%9F"},"topology spread constraints")," \u7528\u4f8b\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"region")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"zone")," \u6807\u7b7e\uff0c\u5982\u4e0b\uff1a",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list\nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list\nvalues: us-east-1a\n")),(0,a.kt)("img",{alt:"affinity-add-rules",src:r(14919).Z,width:"3336",height:"1382"})),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," \u4fdd\u5b58\u8282\u70b9\u6a21\u677f\u3002\u96c6\u7fa4\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u5176\u4e3b\u673a\u8282\u70b9\u662f\u5426\u6309\u7167\u4eb2\u548c\u6027\u89c4\u5219\u8fdb\u884c\u8c03\u5ea6\u3002")),(0,a.kt)("h3",{id:"\u521b\u5efa-rke1-kubernetes-\u96c6\u7fa4"},"\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Harvester RKE1 \u4e3b\u673a\u9a71\u52a8\u4ece",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406"),"\u9875\u9762\u521b\u5efa RKE1 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," \u83dc\u5355\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create")," \u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5207\u6362\u5230 ",(0,a.kt)("strong",{parentName:"li"},"RKE1"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 Harvester \u4e3b\u673a\u9a71\u52a8\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"li"},"Name Prefix"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"li"},"Template"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Etcd")," \u548c ",(0,a.kt)("strong",{parentName:"li"},"Control"),"\uff08\u5fc5\u987b\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 Harvester ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/rancher/cloud-provider"},"Cloud Provider")," \u548c ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/rancher/csi-driver"},"CSI \u9a71\u52a8"),"\uff0c\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9009\u9879"),"\u4e2d\uff0c\u628a ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloud Provider")," \u914d\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Harvester"),"\u3002\n",(0,a.kt)("img",{src:r(83054).Z,width:"3890",height:"676"})),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-rke-harvester-cluster",src:r(3568).Z,width:"1919",height:"970"})),(0,a.kt)("h3",{id:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528-harvester-rke1-\u4e3b\u673a\u9a71\u52a8"},"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 Harvester RKE1 \u4e3b\u673a\u9a71\u52a8"),(0,a.kt)("p",null,"RKE1 \u914d\u7f6e\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," \u6765\u83b7\u53d6\u865a\u62df\u673a\u7684 IP\uff0c\u5e76\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u6765\u8bbe\u7f6e RKE \u96c6\u7fa4\u3002\u4f46\u662f\uff0c\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u53ef\u80fd\u4e0d\u53ef\u884c\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\u89e3\u51b3\u5b89\u88c5\u9650\u5236\uff1a"),(0,a.kt)("p",null,"\u9009\u9879 1\uff1a\u4f7f\u7528\u5b89\u88c5\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u7684\u865a\u62df\u673a\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u9009\u9879 2\uff1a\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud init")," \u7528\u6237\u6570\u636e\uff0c\u4f7f\u865a\u62df\u673a\u80fd\u591f\u901a\u8fc7 HTTP(S) \u4ee3\u7406\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u3002"),(0,a.kt)("p",null,"Harvester \u8282\u70b9\u6a21\u677f\u4e2d\u7684\u7528\u6237\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\nwrite_files:\n- path: /etc/environment\n  content: |\n    HTTP_PROXY="http://192.168.0.1:3128"\n    HTTPS_PROXY="http://192.168.0.1:3128"\n  append: true\n')))}c.isMDXComponent=!0},12291:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-add-node-selector-18143e8a913dc813fba9da161c0e6d45.png"},14919:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-add-rules-8bcdbdc4b934146124eb7b92a0d0bb27.png"},52125:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-cloud-credentials-b3b6813e1a8b52c1e0fa45e740f27a23.png"},3568:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-rke-harvester-cluster-d8038687882cd19796516efe89c597c6.png"},83054:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enable-harvester-cloud-provider-033d0453f241f5d84af1fa0335c9a027.png"},79351:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/node-template-2a9949f1cb7e0acc9b6d9859ed838592.png"},38719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke1-node-driver-f8868c55d2aa08ff3d613ef8c6ce673b.png"}}]);