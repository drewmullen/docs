"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7212],{13797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>r,frontMatter:()=>n,metadata:()=>l,toc:()=>s});a(67294);var o=a(3905);const n={sidebar_position:2,sidebar_label:"Edit a Volume",title:"Edit a Volume",keywords:["Volume"],description:"Edit volume from the Volume page."},i=void 0,l={unversionedId:"volume/edit-volume",id:"version-v1.1/volume/edit-volume",title:"Edit a Volume",description:"Edit volume from the Volume page.",source:"@site/versioned_docs/version-v1.1/volume/edit-volume.md",sourceDirName:"volume",slug:"/volume/edit-volume",permalink:"/v1.1/volume/edit-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/volume/edit-volume.md",tags:[],version:"v1.1",lastUpdatedAt:1720145056,formattedLastUpdatedAt:"Jul 5, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Edit a Volume",title:"Edit a Volume",keywords:["Volume"],description:"Edit volume from the Volume page."},sidebar:"api",previous:{title:"Create a Volume",permalink:"/v1.1/volume/index"},next:{title:"Clone a Volume",permalink:"/v1.1/volume/clone-volume"}},d={},s=[{value:"Expand a Volume",id:"expand-a-volume",level:2},{value:"Cancel a Failed Volume Expansion",id:"cancel-a-failed-volume-expansion",level:2}],u={toc:s},m="wrapper";function r({components:e,...t}){return(0,o.kt)(m,{...u,...t,components:e,mdxType:"MDXLayout"},(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/edit-volume"})),(0,o.kt)("p",null,"After creating a volume, you can edit your volume by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit Config")," option."),(0,o.kt)("h2",{id:"expand-a-volume"},"Expand a Volume"),(0,o.kt)("p",null,"You can expand a volume by increasing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Size")," parameter directly.\nTo prevent the expansion from interference by unexpected data R/W, Harvester supports ",(0,o.kt)("inlineCode",{parentName:"p"},"offline")," expansion only. You must shut down the VM or detach the volume first if it is attached to a VM, and the detached volume will automatically attach to a random node with ",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/concepts/#22-reverting-volumes-in-maintenance-mode"},"maintenance mode")," to expand automatically."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"expand-volume",src:a(11817).Z,width:"2560",height:"726"})),(0,o.kt)("h2",{id:"cancel-a-failed-volume-expansion"},"Cancel a Failed Volume Expansion"),(0,o.kt)("p",null,"If you specify a size larger than Longhorn's capacity during the expansion, the status of the volume expansion will be stuck in ",(0,o.kt)("inlineCode",{parentName:"p"},"Resizing"),". You can cancel the failed volume expansion by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel Expand")," option."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cancel-failed-volume-expansion",src:a(76473).Z,width:"2560",height:"726"})))}r.isMDXComponent=!0},76473:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cancel-failed-volume-expansion-39ce92d8d4d2799a0090bf55d881ce42.png"},11817:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/expand-volume-b38ef393e5cea149fd57193a6192bc53.png"}}]);