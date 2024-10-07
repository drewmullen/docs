"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4007],{94966:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>o});t(67294);var a=t(3905);const n={sidebar_position:3,sidebar_label:"Creating an RKE2 Kubernetes Cluster",title:"Creating an RKE2 Kubernetes Cluster",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration","RKE2"],description:"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver."},s=void 0,i={unversionedId:"rancher/node/rke2-cluster",id:"version-v0.3/rancher/node/rke2-cluster",title:"Creating an RKE2 Kubernetes Cluster",description:"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver.",source:"@site/versioned_docs/version-v0.3/rancher/node/rke2-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke2-cluster",permalink:"/v0.3/rancher/node/rke2-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/node/rke2-cluster.md",tags:[],version:"v0.3",lastUpdatedAt:1728288535,formattedLastUpdatedAt:"Oct 7, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Creating an RKE2 Kubernetes Cluster",title:"Creating an RKE2 Kubernetes Cluster",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration","RKE2"],description:"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver."},sidebar:"api",previous:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/v0.3/rancher/node/rke1-cluster"},next:{title:"Harvester Cloud Provider",permalink:"/v0.3/rancher/cloud-provider"}},l={},o=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create RKE2 Kubernetes Cluster",id:"create-rke2-kubernetes-cluster",level:3}],d={toc:o},c="wrapper";function u({components:e,...r}){return(0,a.kt)(c,{...d,...r,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/rke2-cluster"})),(0,a.kt)("p",null,"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.1+")," using the built-in Harvester node driver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke2-cluster",src:t(43994).Z,width:"3566",height:"1554"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Harvester RKE2 node driver is in tech preview."),(0,a.kt)("li",{parentName:"ul"},"VLAN network is required for Harvester node driver."))),(0,a.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your cloud credential name"),(0,a.kt)("li",{parentName:"ol"},'Select "Imported Harvester" or "External Harvester".'),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:t(9077).Z,width:"3582",height:"1406"})),(0,a.kt)("h3",{id:"create-rke2-kubernetes-cluster"},"Create RKE2 Kubernetes Cluster"),(0,a.kt)("p",null,"Users can create a RKE2 Kubernetes cluster from the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," page via the RKE2 node driver."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," button."),(0,a.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,a.kt)("strong",{parentName:"li"},"RKE2/K3s"),"."),(0,a.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,a.kt)("li",{parentName:"ol"},"Select a ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Image")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Network Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"SSH User")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-rke2-harvester-cluster",src:t(62475).Z,width:"3080",height:"1766"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"RKE2 v1.21.5+rke2r2 or above provides a built-in Harvester Cloud Provider and Guest CSI driver integration."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Currently only imported Harvester clusters are supported automatically."))))}u.isMDXComponent=!0},62475:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/create-rke2-harvester-cluster-69f3e90ce583758d3fb637b41d103772.png"},9077:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/harvester-create-cloud-credentials-aff4e94b5cc164cc67fa7c67803db099.png"},43994:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/rke2-node-driver-6e6ba157f86e0e2027d4a00ae7d52865.png"}}]);