"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={sidebar_position:6,sidebar_label:"Resource Quotas",title:"Resource Quotas",keywords:["Harvester","harvester","Rancher","rancher","Resource Quota"],description:"ResourceQuota allows administrators to set resource limits per namespace, preventing excessive resource usage and ensuring the smooth operation of other namespaces when the quota is reached."},i=void 0,s={unversionedId:"rancher/resource-quota",id:"version-v1.2/rancher/resource-quota",title:"Resource Quotas",description:"ResourceQuota allows administrators to set resource limits per namespace, preventing excessive resource usage and ensuring the smooth operation of other namespaces when the quota is reached.",source:"@site/versioned_docs/version-v1.2/rancher/resource-quota.md",sourceDirName:"rancher",slug:"/rancher/resource-quota",permalink:"/zh/v1.2/rancher/resource-quota",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/rancher/resource-quota.md",tags:[],version:"v1.2",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Resource Quotas",title:"Resource Quotas",keywords:["Harvester","harvester","Rancher","rancher","Resource Quota"],description:"ResourceQuota allows administrators to set resource limits per namespace, preventing excessive resource usage and ensuring the smooth operation of other namespaces when the quota is reached."},sidebar:"docs",previous:{title:"Harvester CSI Driver",permalink:"/zh/v1.2/rancher/csi-driver"},next:{title:"Harvester Terraform Provider",permalink:"/zh/v1.2/terraform/terraform-provider"}},l={},c=[{value:"Set ResourceQuota via Rancher",id:"set-resourcequota-via-rancher",level:2},{value:"Overhead memory of virtual machine",id:"overhead-memory-of-virtual-machine",level:2},{value:"Automatic adjustment of ResourceQuota during migration",id:"automatic-adjustment-of-resourcequota-during-migration",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"ResourceQuota")," is used to limit the usage of resources within a namespace. It helps administrators control and restrict the allocation of cluster resources to ensure fairness and controlled resource distribution among namespaces."),(0,o.kt)("p",null,"In Harvester, ResourceQuota can define usage limits for the following resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CPU:")," Limits compute resource usage, including CPU cores and CPU time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memory:")," Limits the usage of memory resources in bytes or other recognizable memory units.")),(0,o.kt)("h2",{id:"set-resourcequota-via-rancher"},"Set ResourceQuota via Rancher"),(0,o.kt)("p",null,"In the Rancher UI, administrators can configure resource quotas for namespaces through the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the hamburger menu and choose the ",(0,o.kt)("strong",{parentName:"li"},"Virtualization Management")," tab."),(0,o.kt)("li",{parentName:"ol"},"Choose one of the clusters and go to ",(0,o.kt)("strong",{parentName:"li"},"Projects/Namespaces")," > ",(0,o.kt)("strong",{parentName:"li"},"Create Project"),"."),(0,o.kt)("li",{parentName:"ol"},"Specify the desired project ",(0,o.kt)("strong",{parentName:"li"},"Name"),". Next, go to the ",(0,o.kt)("strong",{parentName:"li"},"Resource Quotas")," tab and select the ",(0,o.kt)("strong",{parentName:"li"},"Add Resource")," option. Within the ",(0,o.kt)("strong",{parentName:"li"},"Resource Type")," field, select either ",(0,o.kt)("strong",{parentName:"li"},"CPU Limit")," or ",(0,o.kt)("strong",{parentName:"li"},"Memory Limit")," and define the ",(0,o.kt)("strong",{parentName:"li"},"Project Limit")," and ",(0,o.kt)("strong",{parentName:"li"},"Namespace Default Limit")," values.\n",(0,o.kt)("img",{src:r(58690).Z,width:"3068",height:"1076"}))),(0,o.kt)("p",null,"You can configure the ",(0,o.kt)("strong",{parentName:"p"},"Namespace")," limits as follows: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find the newly created project, and select ",(0,o.kt)("strong",{parentName:"li"},"Create Namespace"),"."),(0,o.kt)("li",{parentName:"ol"},"Specify the desired namespace ",(0,o.kt)("strong",{parentName:"li"},"Name"),", and adjust the limits."),(0,o.kt)("li",{parentName:"ol"},"Complete the process by selecting ",(0,o.kt)("strong",{parentName:"li"},"Create"),".\n",(0,o.kt)("img",{src:r(35324).Z,width:"2562",height:"986"}))),(0,o.kt)("h2",{id:"overhead-memory-of-virtual-machine"},"Overhead memory of virtual machine"),(0,o.kt)("p",null,"Upon creating a virtual machine (VM), the VM controller seamlessly incorporates overhead resources into the VM's configuration. These additional resources intend to guarantee the consistent and uninterrupted functioning of the VM. It's important to note that configuring memory limits requires a higher memory reservation due to the inclusion of these overhead resources."),(0,o.kt)("p",null,"For example, consider the creation of a new VM with the following configuration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU: 8 cores"),(0,o.kt)("li",{parentName:"ul"},"Memory: 16Gi")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The operating system, either Linux or Windows, does not affect overhead calculations.")),(0,o.kt)("p",null,"Memory Overhead is calculated in the following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memory PageTables Overhead:")," This accounts for one bit for every 512b RAM size. For instance, a memory of 16Gi requires an overhead of 32Mi."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"VM Fixed Overhead:")," This consists of several components:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VirtLauncherMonitorOverhead"),": 25Mi  (the ",(0,o.kt)("inlineCode",{parentName:"li"},"ps")," RSS for virt-launcher-monitor)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VirtLauncherOverhead"),": 75Mi  (the ",(0,o.kt)("inlineCode",{parentName:"li"},"ps")," RSS for the virt-launcher process)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VirtlogdOverhead"),": 17Mi  (the ",(0,o.kt)("inlineCode",{parentName:"li"},"ps")," RSS for virtlogd)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LibvirtdOverhead"),": 33Mi (the ",(0,o.kt)("inlineCode",{parentName:"li"},"ps")," RSS for libvirtd)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QemuOverhead")," : 30Mi (the ",(0,o.kt)("inlineCode",{parentName:"li"},"ps")," RSS for qemu, minus the RAM of its (stressed) guest, minus the virtual page table)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"8Mi per CPU (vCPU) Overhead:")," Additionally, 8Mi of overhead per vCPU is added, along with a fixed 8Mi overhead for IOThread."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extra Added Overhead:")," This encompasses various factors like video RAM overhead and architecture overhead. Refer to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubevirt/kubevirt/blob/2bb88c3d35d33177ea16c0f1e9fffdef1fd350c6/pkg/virt-controller/services/template.go#L1853-L1890"},"Additional Overhead")," for further details.")),(0,o.kt)("p",null,"This calculation demonstrates that the VM instance necessitates an additional memory overhead of approximately 276Mi."),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/virtual_machines/virtual_hardware/#memory-overhead"},"Memory Overhead"),"."),(0,o.kt)("p",null,"For more information on how the memory overhead is calculated in Kubevirt, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubevirt/kubevirt/blob/v0.54.0/pkg/virt-controller/services/template.go#L1804"},"kubevirt/pkg/virt-controller/services/template.go"),"."),(0,o.kt)("h2",{id:"automatic-adjustment-of-resourcequota-during-migration"},"Automatic adjustment of ResourceQuota during migration"),(0,o.kt)("p",null,"When the allocated resource quota controlled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceQuota")," object reaches its limit, migrating a VM becomes unfeasible. The migration process automatically creates a new pod mirroring the resource requirements of the source VM. If these pod creation prerequisites surpass the defined quota, the migration operation cannot proceed."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,o.kt)("p",null,"In Harvester, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceQuota")," values will dynamically expand ahead of migration to accommodate the resource needs of the target virtual machine. After migration, the ResourceQuotas will be reinstated to their prior configurations."),(0,o.kt)("p",null,"Please be aware of the following constrains of the automatic resizing of ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceQuota"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ResourceQuota")," cannot be changed during VM migration."),(0,o.kt)("li",{parentName:"ul"},"When raising the ",(0,o.kt)("inlineCode",{parentName:"li"},"ResourceQuota")," value, if you create, start, or restore other VMs, Harvester will verify if the resources are sufficient based on the original ",(0,o.kt)("inlineCode",{parentName:"li"},"ResourceQuota"),". If the conditions are not met, the system will alert that the migration process is not feasible."),(0,o.kt)("li",{parentName:"ul"},"After expanding ",(0,o.kt)("inlineCode",{parentName:"li"},"ResourceQuota"),", potential resource contention may occur between non-VM pods and VM pods, leading to migration failures. Therefore, deploying custom container workloads and VMs to the same namespace is not recommended."),(0,o.kt)("li",{parentName:"ul"},"Due to the concurrent limitation of the webhook validator, the VM controller will execute a secondary validation to confirm resource sufficiency. If the resource is insufficient, it will auto config the VM's ",(0,o.kt)("inlineCode",{parentName:"li"},"RunStrategy")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Halted"),", and a new annotation ",(0,o.kt)("inlineCode",{parentName:"li"},"harvesterhci.io/insufficient-resource-quota")," will be added to the VM object, informing you that the VM was shut down due to insufficient resources.\n",(0,o.kt)("img",{src:r(14904).Z,width:"1710",height:"734"}))))}p.isMDXComponent=!0},35324:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-namespace-dabe48f1e0d7007c461edc2201aa9164.png"},58690:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-project-ade3b5d817a1a207fae384b58aeca3e9.png"},14904:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vm-annotation-insufficient-resource-quota-455e3b6632910212672bbb648877e3ee.png"}}]);