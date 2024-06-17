"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[23041],{54755:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},s=void 0,i={unversionedId:"rancher/node/node-driver",id:"version-v1.0/rancher/node/node-driver",title:"Harvester Node Driver",description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters.",source:"@site/versioned_docs/version-v1.0/rancher/node/node-driver.md",sourceDirName:"rancher/node",slug:"/rancher/node/node-driver",permalink:"/v1.0/rancher/node/node-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/node/node-driver.md",tags:[],version:"v1.0",lastUpdatedAt:1718611809,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},sidebar:"api",previous:{title:"Virtualization Management",permalink:"/v1.0/rancher/virtualization-management"},next:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/v1.0/rancher/node/rke1-cluster"}},l={},d=[{value:"Harvester Node Driver",id:"harvester-node-driver",level:2},{value:"RKE1 Kubernetes Cluster",id:"rke1-kubernetes-cluster",level:2},{value:"RKE2 Kubernetes Cluster",id:"rke2-kubernetes-cluster",level:2},{value:"K3s Kubernetes Cluster",id:"k3s-kubernetes-cluster",level:2},{value:"Topology Spread Constraints",id:"topology-spread-constraints",level:2},{value:"Sync Topology Labels to the Guest Cluster Node",id:"sync-topology-labels-to-the-guest-cluster-node",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/node-driver"})),(0,n.kt)("p",null,"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."),(0,n.kt)("p",null,"A node driver is the same as a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine driver"),", and the project repo is available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/docker-machine-driver-harvester"},"harvester/docker-machine-driver-harvester"),"."),(0,n.kt)("p",null,"You can now provision RKE1/RKE2 Kubernetes clusters in Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.3+")," with the built-in Harvester node driver.\nAdditionally, Harvester now can provide built-in ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/cloud-provider"},"Load Balancer support")," as well as raw cluster ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/csi-driver"},"persistent storage")," support to the guest Kubernetes cluster."),(0,n.kt)("p",null,"While you can ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/upload-image#upload-images-via-local-file"},"upload and view ",(0,n.kt)("inlineCode",{parentName:"a"},".ISO")," images in the Harvester UI"),", the same capability is not available in the Rancher UI. For more information on this, see the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/virtualization-admin/#harvester-node-driver"},"Rancher docs"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Harvester v1.0.0 is compatible with Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.3+")," only.")),(0,n.kt)("h2",{id:"harvester-node-driver"},"Harvester Node Driver"),(0,n.kt)("p",null,"The Harvester node driver is enabled by default from Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.3"),". You can go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Management")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Drivers")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Node Drivers")," page to manage the Harvester node driver manually."),(0,n.kt)("p",null,"When the Harvester node driver is enabled, you can create Kubernetes clusters on top of the Harvester cluster and manage them from Rancher."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rke1-cluster",src:r(87674).Z,width:"5118",height:"1972"})),(0,n.kt)("h2",{id:"rke1-kubernetes-cluster"},"RKE1 Kubernetes Cluster"),(0,n.kt)("p",null,"Click to learn ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/rke1-cluster"},"how to create RKE1 Kubernetes Clusters"),"."),(0,n.kt)("h2",{id:"rke2-kubernetes-cluster"},"RKE2 Kubernetes Cluster"),(0,n.kt)("p",null,"Click to learn ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/rke2-cluster"},"how to create RKE2 Kubernetes Clusters"),"."),(0,n.kt)("h2",{id:"k3s-kubernetes-cluster"},"K3s Kubernetes Cluster"),(0,n.kt)("p",null,"Click to learn ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/k3s-cluster"},"how to create k3s Kubernetes Clusters"),"."),(0,n.kt)("h2",{id:"topology-spread-constraints"},"Topology Spread Constraints"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.0.3")),(0,n.kt)("p",null,"In your guest Kubernetes cluster, you can use ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"},"topology spread constraints")," to control how workloads are spread across the Harvester VMs among failure-domains such as regions and zones. This can help to achieve high availability as well as efficient resource utilization of your cluster resources."),(0,n.kt)("p",null,"The minimum RKE2 versions required to support the sync topology label feature are as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported RKE2 Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">","=  v1.24.3+rke2r1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">","=  v1.23.9+rke2r1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">","=  v1.22.12+rke2r1")))),(0,n.kt)("p",null,"In addition, the cloud provider version installed via the ",(0,n.kt)("inlineCode",{parentName:"p"},"Apps")," of RKE/K3s must be >= v0.1.4"),(0,n.kt)("h3",{id:"sync-topology-labels-to-the-guest-cluster-node"},"Sync Topology Labels to the Guest Cluster Node"),(0,n.kt)("p",null,"During the cluster installation, the Harvester node driver will automatically help synchronize topology labels from VM nodes to guest cluster nodes. Currently, only ",(0,n.kt)("inlineCode",{parentName:"p"},"region")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"zone")," topology labels are supported."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Label synchronization will only take effect during guest node initialization. To avoid node drifts to another region or zone, it is recommended to add the ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/rke2-cluster#add-node-affinity"},"node affinity rules")," during the cluster provisioning, so that the VMs can be scheduled to the same zone even after rebuilding.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configuring topology labels on the Harvester nodes through ",(0,n.kt)("inlineCode",{parentName:"p"},"Hosts > Edit Config > Labels"),". e.g., add the topology labels as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"topology.kubernetes.io/region: us-east-1\ntopology.kubernetes.io/zone: us-east-1a\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(50889).Z,width:"4374",height:"1820"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Creating a guest Kubernetes cluster using the Harvester node driver and it is recommended to add the ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/rke2-cluster#add-node-affinity"},"node affinity rules"),", this will help to avoid node drifting to other zones after VM rebuilding.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the cluster is successfully deployed, confirm that guest Kubernetes node labels are successfully synchronized from the Harvester VM node.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now deploy workloads on your guest Kubernetes cluster, and you should be able to manage them using the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"},"topology spread constraints"),"."))))}p.isMDXComponent=!0},50889:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/node-add-affinity-labels-427cc8103802bf12cb3c6c8ac89086f3.png"},87674:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke1-node-driver-f8868c55d2aa08ff3d613ef8c6ce673b.png"}}]);