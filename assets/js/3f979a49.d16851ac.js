"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:1,sidebar_label:"Storage Class",title:""},r="Storage Class",l={unversionedId:"advanced/storageclass",id:"advanced/storageclass",title:"",description:"A StorageClass allows administrators to describe the classes of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called profiles in other storage systems.",source:"@site/docs/advanced/storageclass.md",sourceDirName:"advanced",slug:"/advanced/storageclass",permalink:"/next/advanced/storageclass",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/storageclass.md",tags:[],version:"current",lastUpdatedAt:1666185066,formattedLastUpdatedAt:"Oct 19, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Storage Class",title:""},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/next/monitoring/"},next:{title:"Settings",permalink:"/next/advanced/settings"}},s={},d=[{value:"Creating a Storage Class",id:"creating-a-storage-class",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Parameters Tab",id:"parameters-tab",level:3},{value:"Number of Replicas",id:"number-of-replicas",level:4},{value:"Stale Replica Timeout",id:"stale-replica-timeout",level:4},{value:"Node Selector (Optional)",id:"node-selector-optional",level:4},{value:"Disk Selector (Optional)",id:"disk-selector-optional",level:4},{value:"Migratable",id:"migratable",level:4},{value:"Customize Tab",id:"customize-tab",level:3},{value:"Reclaim Policy",id:"reclaim-policy",level:4},{value:"Allow Volume Expansion",id:"allow-volume-expansion",level:4},{value:"Volume Binding Mode",id:"volume-binding-mode",level:4}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage-class"},"Storage Class"),(0,o.kt)("p",null,"A StorageClass allows administrators to describe the ",(0,o.kt)("strong",{parentName:"p"},"classes")," of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called ",(0,o.kt)("strong",{parentName:"p"},"profiles")," in other storage systems."),(0,o.kt)("h2",{id:"creating-a-storage-class"},"Creating a Storage Class"),(0,o.kt)("p",null,"You can create one or more StorageClasses from the ",(0,o.kt)("strong",{parentName:"p"},"Advanced > Storage Classes")," page."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After a StorageClass is created, nothing can be changed except ",(0,o.kt)("inlineCode",{parentName:"p"},"Description"),".")),(0,o.kt)("h3",{id:"header-section"},"Header Section"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name"),": name of the StorageClass"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Description")," (optional): description of the StorageClass")),(0,o.kt)("h3",{id:"parameters-tab"},"Parameters Tab"),(0,o.kt)("h4",{id:"number-of-replicas"},"Number of Replicas"),(0,o.kt)("p",null,"The number of replicas created for each volume in Longhorn. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,o.kt)("h4",{id:"stale-replica-timeout"},"Stale Replica Timeout"),(0,o.kt)("p",null,"Determines when Longhorn would clean up an error replica after the replica's status is ERROR. The unit is minute. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"30")," minutes in Harvester."),(0,o.kt)("h4",{id:"node-selector-optional"},"Node Selector (Optional)"),(0,o.kt)("p",null,"Select the node tags to be matched in the volume scheduling stage. You can add node tags by going to ",(0,o.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,o.kt)("h4",{id:"disk-selector-optional"},"Disk Selector (Optional)"),(0,o.kt)("p",null,"Select the disk tags to be matched in the volume scheduling stage. You can add disk tags by going to ",(0,o.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,o.kt)("h4",{id:"migratable"},"Migratable"),(0,o.kt)("p",null,"Whether ",(0,o.kt)("a",{parentName:"p",href:"/next/vm/live-migration"},"Live Migration")," is supported. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes"),"."),(0,o.kt)("h3",{id:"customize-tab"},"Customize Tab"),(0,o.kt)("h4",{id:"reclaim-policy"},"Reclaim Policy"),(0,o.kt)("p",null,"Volumes dynamically created by a StorageClass will have the reclaim policy specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"reclaimPolicy")," field of the class. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete")," mode is used by default."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Delete"),": Deletes volumes and the underlying devices when the volume claim is deleted."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Retain"),": Retains the volume for manual cleanup.")),(0,o.kt)("h4",{id:"allow-volume-expansion"},"Allow Volume Expansion"),(0,o.kt)("p",null,"Volumes can be configured to be expandable. This feature is ",(0,o.kt)("inlineCode",{parentName:"p"},"Enabled")," by default, which allows users to resize the volume by editing the corresponding PVC object."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can only use the volume expansion feature to grow a Volume, not to shrink it.")),(0,o.kt)("h4",{id:"volume-binding-mode"},"Volume Binding Mode"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"volumeBindingMode")," field controls when volume binding and dynamic provisioning should occur. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Immediate")," mode is used by default."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Immediate"),": Binds and provisions a persistent volume once the PersistentVolumeClaim is created."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"WaitForFirstConsumer"),": Binds and provisions a persistent volume once a VM using the PersistentVolumeClaim is created.")))}p.isMDXComponent=!0}}]);