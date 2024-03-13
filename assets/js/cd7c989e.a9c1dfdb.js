"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9407],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,h=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={id:"host-management",sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},r=void 0,s={unversionedId:"host/host-management",id:"host/host-management",title:"Host Management",description:"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.",source:"@site/docs/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/v1.3/host/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/host/host.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"host-management",sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},sidebar:"docs",previous:{title:"Upload Images",permalink:"/v1.3/upload-image"},next:{title:"Create a Virtual Machine",permalink:"/v1.3/vm/index"}},l={},d=[{value:"Node Maintenance",id:"node-maintenance",level:2},{value:"Cordoning a Node",id:"cordoning-a-node",level:2},{value:"Deleting a Node",id:"deleting-a-node",level:2},{value:"Role Management",id:"role-management",level:2},{value:"Multi-disk Management",id:"multi-disk-management",level:2},{value:"Add Additional Disks",id:"add-additional-disks",level:3},{value:"Storage Tags",id:"storage-tags",level:3},{value:"Setup",id:"setup",level:4},{value:"Remove disks",id:"remove-disks",level:3},{value:"Identify the disk to remove (Harvester dashboard)",id:"identify-the-disk-to-remove-harvester-dashboard",level:4},{value:"Evict replicas (Longhorn dashboard)",id:"evict-replicas-longhorn-dashboard",level:4},{value:"Remove the disk (Harvester dashboard)",id:"remove-the-disk-harvester-dashboard",level:4},{value:"Ksmtuned Mode",id:"ksmtuned-mode",level:2},{value:"Quick Run",id:"quick-run",level:3},{value:"Parameters",id:"parameters",level:3},{value:"NTP Configuration",id:"ntp-configuration",level:2},{value:"Cloud-Native Node Configuration",id:"cloud-native-node-configuration",level:2},{value:"Creating a CloudInit Resource",id:"creating-a-cloudinit-resource",level:3},{value:"CloudInit Resource Spec",id:"cloudinit-resource-spec",level:4},{value:"Updating a CloudInit Resource",id:"updating-a-cloudinit-resource",level:3},{value:"Deleting a CloudInit Resource",id:"deleting-a-cloudinit-resource",level:3},{value:"Troubleshooting CloudInit Rollouts",id:"troubleshooting-cloudinit-rollouts",level:3}],m={toc:d},p="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/host"})),(0,o.kt)("p",null,"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because Harvester is built on top of Kubernetes and uses etcd as its database, the maximum node fault toleration is one when there are three management nodes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"host.png",src:a(11705).Z,width:"5118",height:"2170"})),(0,o.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,o.kt)("p",null,"For admin users, you can click ",(0,o.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," to evict all VMs from a node automatically. It will leverage the ",(0,o.kt)("inlineCode",{parentName:"p"},"VM live migration")," feature to migrate all VMs to other nodes automatically. Note that at least two active nodes are required to use this feature."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"node-maintenance.png",src:a(272).Z,width:"4394",height:"1932"})),(0,o.kt)("h2",{id:"cordoning-a-node"},"Cordoning a Node"),(0,o.kt)("p",null,"Cordoning a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions. When you\u2019re done, power back on and make the node schedulable again by uncordoning it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cordon-node.png",src:a(7721).Z,width:"4402",height:"1878"})),(0,o.kt)("h2",{id:"deleting-a-node"},"Deleting a Node"),(0,o.kt)("p",null,"Deleting a node is done in two phases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the node from Harvester"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page"),(0,o.kt)("li",{parentName:"ul"},"On the node you want to modify, click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Delete")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uninstall RKE2 from the node"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Login to the node as root"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," to delete the whole RKE2 service.")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You will lose all data of the control plane node after deleting the RKE2 service.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There's a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1497"},"known issue")," about node hard delete.\nOnce resolved, the last step can be skipped.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete.png",src:a(91810).Z,width:"4398",height:"1888"})),(0,o.kt)("h2",{id:"role-management"},"Role Management"),(0,o.kt)("p",null,"Hardware issues may force you to replace the management node. In earlier Harvester versions, accurately promoting a specific worker node to a management node was not easy. Harvester v1.3.0 improves the process by introducing the following roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Management"),": Allows a node to be prioritized when Harvester promotes nodes to management nodes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Witness"),": Restricts a node to being a witness node (only functions as an etcd node) in a specific cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Worker"),": Restricts a node to being a worker node (never promoted to management node) in a specific cluster.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Harvester currently allows only one witness node in the cluster.")),(0,o.kt)("p",null,"For more information about assigning roles to nodes, see ",(0,o.kt)("a",{parentName:"p",href:"/v1.3/install/index"},"ISO Installation"),"."),(0,o.kt)("h2",{id:"multi-disk-management"},"Multi-disk Management"),(0,o.kt)("h3",{id:"add-additional-disks"},"Add Additional Disks"),(0,o.kt)("p",null,"Users can view and add multiple disks as additional data volumes from the edit host page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,o.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit Config",src:a(91902).Z,width:"2878",height:"1178"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Storage")," tab and click ",(0,o.kt)("strong",{parentName:"li"},"Add Disk"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Disks",src:a(43752).Z,width:"2878",height:"1672"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As of Harvester v1.0.2, we no longer support adding partitions as additional disks. If you want to add it as an additional disk, be sure to delete all partitions first (e.g., using ",(0,o.kt)("inlineCode",{parentName:"p"},"fdisk"),").")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select an additional raw block device to add as an additional data volume.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is required if the block device has never been force-formatted.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Force Format",src:a(27355).Z,width:"2880",height:"2244"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Last, you can click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),' again to check the newly added disk. Meanwhile, you can also add the "Host/Disk" tag (details are described in the ',(0,o.kt)("a",{parentName:"li",href:"#storage-tags"},"next section"),").")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Check Result",src:a(89798).Z,width:"2880",height:"2424"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In order for Harvester to identify the disks, each disk needs to have a unique ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Wide_Name"},"WWN"),". Otherwise, Harvester will refuse to add the disk.\nIf your disk does not have a WWN, you can format it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXT4")," filesystem to help Harvester recognize the disk.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are testing Harvester in a QEMU environment, you'll need to use QEMU v6.0 or later. Previous versions of QEMU will always generate the same WWN for NVMe disks emulation. This will cause Harvester to not add the additional disks, as explained above. However, you can still add a virtual disk with the SCSI controller. The WWN information could be added manually along with the disk attach operation. For more details, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/vagrant-rancherd/blob/2782981b6017754d016f5b72d630dff4895f7ad6/scripts/attach-disk.sh#L75"},"script"),".")),(0,o.kt)("h3",{id:"storage-tags"},"Storage Tags"),(0,o.kt)("p",null,"The storage tag feature enables only certain nodes or disks to be used for storing Longhorn volume data. For example, performance-sensitive data can use only the high-performance disks which can be tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"fast"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ssd")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"nvme"),", or only the high-performance nodes tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"baremetal"),"."),(0,o.kt)("p",null,"This feature supports both disks and nodes."),(0,o.kt)("h4",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The tags can be set up through the Harvester UI on the host page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Hosts")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Edit Config")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Storage")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Add Host/Disk Tags")," to start typing and hit enter to add new tags."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Save")," to update tags."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("a",{parentName:"li",href:"/v1.3/advanced/storageclass"},"StorageClasses")," page, create a new storage class and select those defined tags on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Node Selector")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Disk Selector")," fields.")),(0,o.kt)("p",null,"All the existing scheduled volumes on the node or disk won\u2019t be affected by the new tags."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When multiple tags are specified for a volume, the disk and the nodes (that the disk belongs to) must have all the specified tags to become usable.")),(0,o.kt)("h3",{id:"remove-disks"},"Remove disks"),(0,o.kt)("p",null,"Before removing a disk, you must first evict Longhorn replicas on the disk."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The replica data would be rebuilt to another disk automatically to keep the high availability.")),(0,o.kt)("h4",{id:"identify-the-disk-to-remove-harvester-dashboard"},"Identify the disk to remove (Harvester dashboard)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,o.kt)("li",{parentName:"ol"},"On the node containing the disk, select the node name and go to the ",(0,o.kt)("strong",{parentName:"li"},"Storage")," tab."),(0,o.kt)("li",{parentName:"ol"},"Find the disk you want to remove. Let's assume we want to remove ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/sdb"),", and the disk's mount point is ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/harvester/extra-disks/1b805b97eb5aa724e6be30cbdb373d04"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Find disk to remove",src:a(96104).Z,width:"3772",height:"1526"})),(0,o.kt)("h4",{id:"evict-replicas-longhorn-dashboard"},"Evict replicas (Longhorn dashboard)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Please follow ",(0,o.kt)("a",{parentName:"li",href:"/v1.3/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"this session")," to enable the embedded Longhorn dashboard."),(0,o.kt)("li",{parentName:"ol"},"Visit the Longhorn dashboard and go to the ",(0,o.kt)("strong",{parentName:"li"},"Node")," page."),(0,o.kt)("li",{parentName:"ol"},"Expand the node containing the disk. Confirm the mount point ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/harvester/extra-disks/1b805b97eb5aa724e6be30cbdb373d04")," is in the disks list. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Check the removing disk",src:a(75056).Z,width:"3616",height:"726"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Edit node and disks"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit node and disks",src:a(6825).Z,width:"3616",height:"728"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Scroll to the disk you want to remove.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Scheduling")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Disable"),"."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Eviction Requested")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Save"),". Do not select the delete icon.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Evict disk",src:a(10052).Z,width:"1608",height:"966"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"The disk will be disabled. Please wait until the disk replica count becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to proceed with removing the disk.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wait replicas",src:a(27073).Z,width:"3618",height:"728"})),(0,o.kt)("h4",{id:"remove-the-disk-harvester-dashboard"},"Remove the disk (Harvester dashboard)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,o.kt)("li",{parentName:"ol"},"On the node containing the disk, select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Storage")," tab and select ",(0,o.kt)("strong",{parentName:"li"},"x"),"  to remove the disk.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remove disk",src:a(8893).Z,width:"3774",height:"1520"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Save")," to remove the disk.")),(0,o.kt)("h2",{id:"ksmtuned-mode"},"Ksmtuned Mode"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,o.kt)("p",null,"Ksmtuned is a KSM automation tool deployed as a DaemonSet to run Ksmtuned on each node. It will start or stop the KSM by watching the available memory percentage ratio (",(0,o.kt)("strong",{parentName:"p"},"i.e. Threshold Coefficient"),"). By default, you need to manually enable Ksmtuned on each node UI. You will be able to see the KSM statistics from the node UI after 1-2 minutes.(check ",(0,o.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/admin-guide/mm/ksm.html#ksm-daemon-sysfs-interface"},"KSM")," for more details)."),(0,o.kt)("h3",{id:"quick-run"},"Quick Run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,o.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Ksmtuned")," tab and select ",(0,o.kt)("strong",{parentName:"li"},"Run")," in ",(0,o.kt)("strong",{parentName:"li"},"Run Strategy"),"."),(0,o.kt)("li",{parentName:"ol"},"(Optional) You can modify ",(0,o.kt)("strong",{parentName:"li"},"Threshold Coefficient")," as needed.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit Ksmtuned",src:a(39413).Z,width:"2150",height:"984"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save")," to update."),(0,o.kt)("li",{parentName:"ol"},"Wait for about 1-2 minutes and you can check its ",(0,o.kt)("strong",{parentName:"li"},"Statistics")," by clicking ",(0,o.kt)("strong",{parentName:"li"},"Your Node > Ksmtuned tab"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View Ksmtuned Statistics",src:a(39937).Z,width:"2002",height:"402"})),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run Strategy:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stop:")," Stop Ksmtuned and KSM. VMs can still use shared memory pages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Run:")," Run Ksmtuned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prune:")," Stop Ksmtuned and prune KSM memory pages.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Threshold Coefficient"),": configures the available memory percentage ratio. If the available memory is less than the threshold, KSM will be started; otherwise, KSM will be stopped."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Merge Across Nodes:")," specifies if pages from different NUMA nodes can be merged."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mode:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Standard:")," The default mode. The control node ksmd uses about 20% of a single CPU. It uses the following parameters:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 0\nDecay: 0\nMaximum Pages: 100\nMinimum Pages: 100\nSleep Time: 20\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"High-performance:")," Node ksmd uses 20% to 100% of a single CPU and has higher scanning and merging efficiency. It uses the following parameters:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 200\nDecay: 50\nMaximum Pages: 10000\nMinimum Pages: 100\nSleep Time: 20\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customized:")," You can customize the configuration to reach the performance that you want.")),(0,o.kt)("p",null,"Ksmtuned uses the following parameters to control KSM efficiency:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Boost"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The number of scanned pages is incremented each time if the available memory is less than the ",(0,o.kt)("strong",{parentName:"td"},"Threshold Coefficient"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Decay"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The number of scanned pages is decremented each time if the available memory is greater than the ",(0,o.kt)("strong",{parentName:"td"},"Threshold Coefficient"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Maximum Pages"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Maximum number of pages per scan.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Minimum Pages"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The minimum number of pages per scan, also the configuration for the first run.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Sleep Time (ms)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The interval between two scans, which is calculated with the formula (",(0,o.kt)("strong",{parentName:"td"},"Sleep Time")," ","*"," 16 ","*"," 1024","*"," 1024 / Total Memory). Minimum: 10ms.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For example, assume you have a 512GiB memory node that uses the following parameters:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 300\nDecay: 100\nMaximum Pages: 5000\nMinimum Pages: 1000\nSleep Time: 50\n")),(0,o.kt)("p",null,"When Ksmtuned starts, initialize ",(0,o.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," in KSM to 1000 (",(0,o.kt)("strong",{parentName:"p"},"Minimum Pages"),") and set ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep_millisecs")," to 10 (50 ","*"," 16 ","*"," 1024 ","*"," 1024 / 536870912 KiB < 10)."),(0,o.kt)("p",null,"KSM starts when the available memory falls below the ",(0,o.kt)("strong",{parentName:"p"},"Threshold Coefficient"),". If it detects that it is running, ",(0,o.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," increments by 300 (",(0,o.kt)("strong",{parentName:"p"},"Boost"),") every minute until it reaches 5000 (",(0,o.kt)("strong",{parentName:"p"},"Maximum Pages"),")."),(0,o.kt)("p",null,"KSM will stop when the available memory is above the ",(0,o.kt)("strong",{parentName:"p"},"Threshold Coefficient"),". If it detects that it is stopped, ",(0,o.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," decrements by 100 (",(0,o.kt)("strong",{parentName:"p"},"Decay"),") every minute until it reaches 1000 (",(0,o.kt)("strong",{parentName:"p"},"Minimum Pages"),")."),(0,o.kt)("h2",{id:"ntp-configuration"},"NTP Configuration"),(0,o.kt)("p",null,"Time synchronization is an important aspect of distributed cluster architecture. Because of this, Harvester now provides a simpler way for configuring NTP settings."),(0,o.kt)("p",null,"In previous Harvester versions, NTP settings were mainly configurable ",(0,o.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/harvester-configuration#osntp_servers"},"during the installation process"),". To modify the settings, you needed to manually update the configuration file on each node."),(0,o.kt)("p",null,"Beginning with version v1.2.0, Harvester is supporting NTP configuration on the Harvester UI Settings screen (",(0,o.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,o.kt)("strong",{parentName:"p"},"Settings"),"). You can configure NTP settings for the entire Harvester cluster at any time, and the settings are applied to all nodes in the cluster."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(30028).Z,width:"1906",height:"877"})),(0,o.kt)("p",null,"You can set up multiple NTP servers at once."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(37814).Z,width:"1618",height:"808"})),(0,o.kt)("p",null,"You can check the settings in the ",(0,o.kt)("inlineCode",{parentName:"p"},"node.harvesterhci.io/ntp-service")," annotation in Kubernetes nodes: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ntpSyncStatus"),": Status of the connection to NTP servers (possible values: ",(0,o.kt)("inlineCode",{parentName:"li"},"disabled"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"synced")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"unsynced"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currentNtpServers"),": List of existing NTP servers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ kubectl get nodes harvester-node-0 -o yaml |yq -e \'.metadata.annotations.["node.harvesterhci.io/ntp-service"]\'\n{"ntpSyncStatus":"synced","currentNtpServers":"0.suse.pool.ntp.org 1.suse.pool.ntp.org"}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Do not modify the NTP configuration file on each node. Harvester will automatically sync the settings that you configured on the Harvester UI to the nodes."),(0,o.kt)("li",{parentName:"ol"},"If you upgraded Harvester from an earlier version, the ",(0,o.kt)("strong",{parentName:"li"},"ntp-servers")," list on the Settings screen will be empty (see screenshot). You must manually configure the NTP settings because Harvester is unaware of the previous settings and is unable to detect conflicts."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(54658).Z,width:"1544",height:"245"})),(0,o.kt)("h2",{id:"cloud-native-node-configuration"},"Cloud-Native Node Configuration"),(0,o.kt)("p",null,"You may need to customize one or more nodes after installing Harvester. This process usually entails updating the ",(0,o.kt)("a",{parentName:"p",href:"/v1.3/install/update-harvester-configuration/"},"runtime configuration")," and modifying files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem")," directory of each node to make changes persist after rebooting."),(0,o.kt)("p",null,"In Harvester v1.3.0, these customizations can be described in a Kubernetes manifest and then applied to the underlying cluster using kubectl or other GitOps-centric tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"Fleet"),"."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Misconfigurations might compromise the ability of a Harvester node to boot up, or even damage the overall stability of the cluster. You can prevent such issues by reading the Elemental toolkit documentation to learn how to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.github.io/elemental-toolkit/docs/customizing/"},"correctly customize Elemental"),".")),(0,o.kt)("h3",{id:"creating-a-cloudinit-resource"},"Creating a CloudInit Resource"),(0,o.kt)("p",null,"Harvester node customization is bounded only by your creativity and by what the Elemental toolkit markup can syntactically express. The documentation, therefore, cannot provide an exhaustive list of possible customizations and use cases."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example: You want to add an SSH authorized key for the default ",(0,o.kt)("inlineCode",{parentName:"strong"},"rancher")," user on all nodes.")),(0,o.kt)("p",null,"Start by creating a Kubernetes manifest for a CloudInit resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"file: ssh_access.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: node.harvesterhci.io/v1beta1\nkind: CloudInit\nmetadata:\n  name: ssh-access\nspec:\n  matchSelector: {}\n  filename: 99_ssh.yaml\n  contents: |\n    stages:\n      network:\n        - authorized_keys:\n            rancher:\n              - ssh-ed25519 AAAA...\n")),(0,o.kt)("p",null,"This manifest describes an Elemental cloud-init document that will be applied to ",(0,o.kt)("em",{parentName:"p"},"all nodes")," (because the empty ",(0,o.kt)("inlineCode",{parentName:"p"},"matchSelector: {}")," field matches everything). The YAML document in the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.contents")," field will be rendered to ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem/99_ssh.yaml")," (because of the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.filename")," field.)"),(0,o.kt)("p",null,"Apply this example using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f ssh_access.yaml"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Reboot the relevant Harvester nodes so that the Elemental toolkit executor can apply the new configuration at boot.")),(0,o.kt)("h4",{id:"cloudinit-resource-spec"},"CloudInit Resource Spec"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"matchSelector"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Setting that allows you to specify the nodes that will receive the configuration changes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"filename"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the file that appears in ",(0,o.kt)("inlineCode",{parentName:"td"},"/oem"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"contents"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Elemental toolkit cloud-init-style file that will be rendered to a file in ",(0,o.kt)("inlineCode",{parentName:"td"},"/oem"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"paused"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the file will not be updated on nodes as it changes.")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"matchSelector")," field can be used to target specific nodes or groups of nodes based on their labels."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'matchSelector:\n  kubernetes.io/hostname: "harvester-node-1"\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All label key-value pairs listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"matchSelector")," field must match the labels of the intended nodes. "),(0,o.kt)("p",{parentName:"admonition"},"In the following example, ",(0,o.kt)("inlineCode",{parentName:"p"},"matchSelector")," will match ",(0,o.kt)("inlineCode",{parentName:"p"},"harvester-node-1")," only if that node also has the ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com/role")," label with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"role-a"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'matchSelector:\n  kubernetes.io/hostname: "harvester-node-1"\n  example.com/role: "role-a"\n'))),(0,o.kt)("h3",{id:"updating-a-cloudinit-resource"},"Updating a CloudInit Resource"),(0,o.kt)("p",null,"You can use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl edit")," to update a CloudInit resource. However, there is a caveat if the ",(0,o.kt)("inlineCode",{parentName:"p"},"matchSelector")," field is updated to exclude one or more nodes from the customization. See the note in the ",(0,o.kt)("a",{parentName:"p",href:"#deleting-a-cloudinit-resource"},"Deleting a CloudInit Resource")," section regarding rolling back customizations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# kubectl edit cloudinit CLOUDINIT_NAME\n")),(0,o.kt)("h3",{id:"deleting-a-cloudinit-resource"},"Deleting a CloudInit Resource"),(0,o.kt)("p",null,"You can use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl delete")," to remove a CloudInit resource from the Harvester cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# kubectl delete cloudinit CLOUDINIT_NAME\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'Harvester is unable to "roll back" previously described customizations because the CloudInit resource can describe anything that can be expressed as an Elemental toolkit customization, including arbitrary shell commands.'),(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"#creating-a-cloudinit-resource"},"Creating a CloudInit Resource")," example, the YAML file contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorized_keys")," stanza. This is an append-only action in the Elemental toolkit. When the resource is changed or deleted, the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file in Rancher will still contain the old public key."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"You are responsible for amending or creating a CloudInit resource that rolls the changes back (if necessary) before you reboot the node."))),(0,o.kt)("h3",{id:"troubleshooting-cloudinit-rollouts"},"Troubleshooting CloudInit Rollouts"),(0,o.kt)("p",null,"If an Elemental toolkit cloud-init document does not appear in ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem")," or does not contain the expected contents, the status block of the CloudInit resource might contain useful hints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# kubectl get cloudinit CLOUDINIT_NAME -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'status:\n  rollouts:\n    harvester-dngmf:\n      conditions:\n      - lastTransitionTime: "2024-02-28T22:31:23Z"\n        message: ""\n        reason: CloudInitApplicable\n        status: "True"\n        type: Applicable\n      - lastTransitionTime: "2024-02-28T22:31:23Z"\n        message: Local file checksum is the same as the CloudInit checksum\n        reason: CloudInitChecksumMatch\n        status: "False"\n        type: OutOfSync\n      - lastTransitionTime: "2024-02-28T22:31:23Z"\n        message: 99_ssh.yaml is present under /oem\n        reason: CloudInitPresentOnDisk\n        status: "True"\n        type: Present\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"harvester-node-manager")," pod(s) in the ",(0,o.kt)("inlineCode",{parentName:"p"},"harvester-system")," namespace may also contain some hints as to why it is not rendering a file to a node.\nThis pod is part of a daemonset, so it may be worth checking the pod that is running on the node of interest."))}c.isMDXComponent=!0},43752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disks-770f1d364a4d956ff1f57a224e76bbc0.png"},89798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/check-added-disks-1e2efd9b76545d051ce4006a549f7032.png"},7721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cordon-nodes-1bd56c52995e6d73b2328bddc5f7e4fa.png"},91810:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete-node-66bb510f8160cf410a14ccafe973dbda.png"},91902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-config-1ea18d102ade6b702a763f4cbb7ac694.png"},39413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-ksmtuned-14bde13e55cb1f5615d01d4258e8f5ce.png"},27355:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/force-format-disks-7fbfbe35486660cc6f4d0f72f9537915.png"},11705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/host-59f511ef325881a27dfe07b04af4b5a2.png"},272:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/node-maintenance-f7a92cb91c2123bd985fe26c2c3f283c.png"},96104:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-harvester-find-disk-2b6cd0af1cf2f2be035635ec40763d66.png"},8893:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-harvester-remove-94cef82d865bc4ae4afaf9552831cb1d.png"},6825:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-edit-ae615edafa3907358bd7733a48c813cd.png"},10052:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-evict-disk-d15ebcea68f64c4fb2a007bccc8b89ab.png"},75056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-cfb6fd5ae28f64f63345dd3e33de2a84.png"},27073:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-wait-replicas-9a6c61abe6fe4310d4e63533c3f4b2b4.png"},39937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view-ksmtuned-statistics-c3e0cac6dc3344b72e8726a6cca8990e.png"},54658:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-ntp-settings-empty-17a0c85f9c08d558f06f97eb67927305.png"},37814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-ntp-settings-multiple-c63a4bd21618d58889aade68d25749c8.png"},30028:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-ntp-settings-616b9206fb3897e2dd6b6b4d57155296.png"}}]);