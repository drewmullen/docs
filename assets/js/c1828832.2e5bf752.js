"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1064],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(a),c=n,v=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return a?r.createElement(v,l(l({ref:t},u),{},{components:a})):r.createElement(v,l({ref:t},u))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},l=void 0,i={unversionedId:"volume/index",id:"version-v1.1/volume/index",title:"Create a Volume",description:"Create a volume from the Volume page.",source:"@site/versioned_docs/version-v1.1/volume/create-volume.md",sourceDirName:"volume",slug:"/volume/index",permalink:"/v1.1/volume/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/volume/create-volume.md",tags:[],version:"v1.1",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},sidebar:"tutorialSidebar",previous:{title:"Clone VM",permalink:"/v1.1/vm/clone-vm"},next:{title:"Edit a Volume",permalink:"/v1.1/volume/edit-volume"}},s={},m=[{value:"Create an Empty Volume",id:"create-an-empty-volume",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Basics Tab",id:"basics-tab",level:3},{value:"Create an Image Volume",id:"create-an-image-volume",level:2},{value:"Header Section",id:"header-section-1",level:3},{value:"Basics Tab",id:"basics-tab-1",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"The Volumes page does not show the created volume",id:"the-volumes-page-does-not-show-the-created-volume",level:3},{value:"Summary",id:"summary",level:4},{value:"Workaround",id:"workaround",level:4}],u={toc:m},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/create-volume"})),(0,n.kt)("h2",{id:"create-an-empty-volume"},"Create an Empty Volume"),(0,n.kt)("h3",{id:"header-section"},"Header Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the Volume ",(0,n.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,n.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,n.kt)("h3",{id:"basics-tab"},"Basics Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"New")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,n.kt)("li",{parentName:"ol"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"li"},"StorageClass"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-empty-volume",src:a(42734).Z,width:"2560",height:"726"})),(0,n.kt)("h2",{id:"create-an-image-volume"},"Create an Image Volume"),(0,n.kt)("h3",{id:"header-section-1"},"Header Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the Volume ",(0,n.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,n.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,n.kt)("h3",{id:"basics-tab-1"},"Basics Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Image")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,n.kt)("li",{parentName:"ol"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"li"},"Image"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-image-volume",src:a(35006).Z,width:"2560",height:"726"})),(0,n.kt)("h2",{id:"known-issues"},"Known Issues"),(0,n.kt)("h3",{id:"the-volumes-page-does-not-show-the-created-volume"},"The Volumes page does not show the created volume"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Issue"),(0,n.kt)("th",{parentName:"tr",align:null},"Affected versions"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Last updated"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/issues/3874"},"The Volumes page does not show the created volume")),(0,n.kt)("td",{parentName:"tr",align:null},"Harvester v1.1.2"),(0,n.kt)("td",{parentName:"tr",align:null},"Resolved (Harvester > v1.1.2)"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-07-28")))),(0,n.kt)("h4",{id:"summary"},"Summary"),(0,n.kt)("p",null,"After creating a volume when using Harvester from Rancher, users with the project role ",(0,n.kt)("strong",{parentName:"p"},"Project Member")," cannot find the newly created volume on the ",(0,n.kt)("strong",{parentName:"p"},"Volumes")," page."),(0,n.kt)("h4",{id:"workaround"},"Workaround"),(0,n.kt)("p",null,"You can temporarily change the Harvester plugin version to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/dashboard/releases/tag/v1.1.2-patch1"},"v1.2.1-patch1")," from the Harvester UI."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Advanced")," > ",(0,n.kt)("strong",{parentName:"li"},"Settings")," page. Find  the ",(0,n.kt)("strong",{parentName:"li"},"ui-plugin-index")," and select ",(0,n.kt)("strong",{parentName:"li"},"\u22ee"),"  > ",(0,n.kt)("strong",{parentName:"li"},"Edit Setting"),"."),(0,n.kt)("li",{parentName:"ol"},"Change the ",(0,n.kt)("strong",{parentName:"li"},"Value")," to ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://releases.rancher.com/harvester-ui/plugin/harvester-release-harvester-v1.1.2-patch1/harvester-release-harvester-v1.1.2-patch1.umd.min.js"},"https://releases.rancher.com/harvester-ui/plugin/harvester-release-harvester-v1.1.2-patch1/harvester-release-harvester-v1.1.2-patch1.umd.min.js")),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," page, find ",(0,n.kt)("strong",{parentName:"li"},"ui-source")," and select ",(0,n.kt)("strong",{parentName:"li"},"\u22ee"),"  > ",(0,n.kt)("strong",{parentName:"li"},"Edit Setting"),"."),(0,n.kt)("li",{parentName:"ol"},"Change the ",(0,n.kt)("strong",{parentName:"li"},"Value")," to ",(0,n.kt)("strong",{parentName:"li"},"External")," to use an external UI source."),(0,n.kt)("li",{parentName:"ol"},"Log in again as a ",(0,n.kt)("strong",{parentName:"li"},"Project Member")," user in Rancher to view the newly created volume for your Harvester cluster.")))}d.isMDXComponent=!0},42734:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-empty-volume-e64eb8d677034412d1b394dda137a8ad.png"},35006:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-image-volume-ad01408a1eaa69454a211039f3de6c36.png"}}]);