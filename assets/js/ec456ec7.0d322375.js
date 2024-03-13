"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),h=a,v=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},45493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},s=void 0,i={unversionedId:"rancher/node/node-driver",id:"version-v1.2/rancher/node/node-driver",title:"Harvester Node Driver",description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters.",source:"@site/versioned_docs/version-v1.2/rancher/node/node-driver.md",sourceDirName:"rancher/node",slug:"/rancher/node/node-driver",permalink:"/v1.2/rancher/node/node-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/rancher/node/node-driver.md",tags:[],version:"v1.2",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},sidebar:"docs",previous:{title:"Virtualization Management",permalink:"/v1.2/rancher/virtualization-management"},next:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/v1.2/rancher/node/rke1-cluster"}},l={},d=[{value:"Harvester node driver",id:"harvester-node-driver",level:2},{value:"RKE1 Kubernetes cluster",id:"rke1-kubernetes-cluster",level:2},{value:"RKE2 Kubernetes cluster",id:"rke2-kubernetes-cluster",level:2},{value:"K3s Kubernetes cluster",id:"k3s-kubernetes-cluster",level:2},{value:"Topology spread constraints",id:"topology-spread-constraints",level:2},{value:"Sync topology labels to the guest cluster node",id:"sync-topology-labels-to-the-guest-cluster-node",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/node-driver"})),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/docker-machine-driver-harvester"},"Harvester node driver"),", similar to the Docker Machine driver, is used to provision VMs in the Harvester cluster, and Rancher uses it to launch and manage Kubernetes clusters."),(0,a.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by the node driver is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected.\nAdditionally, the Harvester node driver is integrated with the Harvester cloud provider by default, providing ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/rancher/cloud-provider#load-balancer-support"},"built-in load balancer support")," as well as ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/rancher/csi-driver"},"storage passthrough")," from the bare-metal cluster to the guest Kubernetes clusters to gain native storage performance."),(0,a.kt)("p",null,"In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Harvester node driver only supports cloud images. This is because ISO images usually require additional setup that interferes with a clean deployment (without requiring user intervention), and they are not typically used in cloud environments.")),(0,a.kt)("h2",{id:"harvester-node-driver"},"Harvester node driver"),(0,a.kt)("p",null,"Starting from Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.3"),", the Harvester node driver is enabled by default. You can go to the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," > ",(0,a.kt)("strong",{parentName:"p"},"Drivers")," > ",(0,a.kt)("strong",{parentName:"p"},"Node Drivers")," page to check the Harvester node driver status."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-node-driver",src:r(23322).Z,width:"5118",height:"2070"})),(0,a.kt)("p",null,"When the Harvester node driver is enabled, you can create Kubernetes clusters on top of the Harvester cluster and manage them from Rancher."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"harvester-node-driver",src:r(32779).Z,width:"3058",height:"1466"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-7-5"},"Rancher downstream cluster support matrix")," for its supported RKE2 versions and guest OS versions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Changes made to the node driver configuration is not persisted. Any modifications applied will be reset upon restarting the Rancher container.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Starting with Harvester node driver v0.6.3, the automatic injection of the ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," has been removed from the backend. If the image you are using does not contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," package, you can still install it via the ",(0,a.kt)("inlineCode",{parentName:"p"},"userdata")," config. Otherwise, the cluster will not be provisioned successfully."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\npackage_update: true\npackages:\n- qemu-guest-agent\nruncmd:\n- - systemctl\n  - enable\n  - '--now'\n  - qemu-guest-agent.service\n"))))),(0,a.kt)("h2",{id:"rke1-kubernetes-cluster"},"RKE1 Kubernetes cluster"),(0,a.kt)("p",null,"Click to learn ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/rancher/node/rke1-cluster"},"how to create RKE1 Kubernetes Clusters"),"."),(0,a.kt)("h2",{id:"rke2-kubernetes-cluster"},"RKE2 Kubernetes cluster"),(0,a.kt)("p",null,"Click to learn ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/rancher/node/rke2-cluster"},"how to create RKE2 Kubernetes Clusters"),"."),(0,a.kt)("h2",{id:"k3s-kubernetes-cluster"},"K3s Kubernetes cluster"),(0,a.kt)("p",null,"Click to learn ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/rancher/node/k3s-cluster"},"how to create k3s Kubernetes Clusters"),"."),(0,a.kt)("h2",{id:"topology-spread-constraints"},"Topology spread constraints"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.3")),(0,a.kt)("p",null,"Within your guest Kubernetes cluster, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"},"topology spread constraints")," to manage how workloads are distributed across nodes, accounting for factors such as failure domains like regions and zones. This helps achieve high availability and efficient resource utilization of the Harvester cluster resources."),(0,a.kt)("p",null,"For RKE2 versions before ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.25.x"),", the minimum required versions to support the topology label sync feature are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Minimum Required RKE2 Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">","=  v1.24.3+rke2r1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">","=  v1.23.9+rke2r1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">","=  v1.22.12+rke2r1")))),(0,a.kt)("p",null,"Furthermore, for custom installation, the Harvester cloud provider version should be ",(0,a.kt)("inlineCode",{parentName:"p"},">= v0.1.4"),"."),(0,a.kt)("h3",{id:"sync-topology-labels-to-the-guest-cluster-node"},"Sync topology labels to the guest cluster node"),(0,a.kt)("p",null,"During the cluster installation, the Harvester node driver will automatically help synchronize topology labels from VM nodes to guest cluster nodes. Currently, only ",(0,a.kt)("inlineCode",{parentName:"p"},"region")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"zone")," topology labels are supported."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure topology labels on the Harvester nodes on the ",(0,a.kt)("strong",{parentName:"p"},"Hosts")," > ",(0,a.kt)("strong",{parentName:"p"},"Edit Config")," > ",(0,a.kt)("strong",{parentName:"p"},"Labels")," page. For example, add the topology labels as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"topology.kubernetes.io/region: us-east-1\ntopology.kubernetes.io/zone: us-east-1a\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(90886).Z,width:"4374",height:"1820"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a downstream RKE2 cluster using the Harvester node driver with Harvester cloud provider enabled. We recommend adding the ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/rancher/node/rke2-cluster#add-node-affinity"},"node affinity rules"),", which prevents nodes from drifting to other zones after VM rebuilding."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(17027).Z,width:"1919",height:"967"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the cluster is ready, confirm that those topology labels are successfully synchronized to the nodes on the guest Kubernetes cluster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now deploy workloads on your guest Kubernetes cluster, and you should be able to manage them using the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"},"topology spread constraints"),"."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For Harvester cloud provider >= v0.2.0, topology labels on the Harvester node will be automatically resynchronized when a VM (corresponding to the guest node) undergoes migration or update."),(0,a.kt)("p",{parentName:"admonition"},"For Harvester cloud provider < v0.2.0, label synchronization will only occur during the initialization of guest nodes. To prevent nodes from drifting to different regions or zones, we recommend adding ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/rancher/node/rke2-cluster#add-node-affinity"},"node affinity rules")," during cluster provisioning. This will allow you to schedule VMs in the same zone even after rebuilding.")))}p.isMDXComponent=!0},17027:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-rke2-harvester-cluster-3-00cefe48d71723e84d9ab215c1f11bfd.png"},23322:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-node-driver-3ba9aaffc8bf826bdad22db7edd2c141.png"},32779:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-node-driver-0f96d4d50096df390e979d33a58fea16.png"},90886:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/node-add-affinity-labels-427cc8103802bf12cb3c6c8ac89086f3.png"}}]);