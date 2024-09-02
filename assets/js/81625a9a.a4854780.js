"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[55460],{36912:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>y,default:()=>b,frontMatter:()=>k,metadata:()=>h,toc:()=>g});t(67294);var s=t(3905),m=t(54734),i=t(90238),n=t.n(i),l=t(36765),r=t(99473),p=t(50690),o=t(88337),c=t(48951),d=t(50551);const k={id:"patch-namespaced-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",sidebar_label:"Patch a Node Network",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1T2zAQ/SuePbaCBMqlvsG0M820pUxLe4EcFmuTCGJJaGXKx/i/d9bOh504fKT01lzs0Uq7T+9t1u8BNHEWjI/GWUjhBGM2STA5dpqOKf524SpxF5eUxV1QEHHMkJ7BLMIwVOA8BZTTAw0peDl/jDmxx4x0Iw0oCHRdEMcjp+8gfYDM2Ug2yit6PzVZlaZ3yc7uVHneyquEOZtQjvIW7zxBCjUkKEvVOppTGNOzz5Y1IhNIQxpDQdUCe2eZWA7s9/vyaDP07TOox6A/VrNZ8AyujNUgFzC/KLBkHyrwQQiNpkbQiC2TcQzGjqFUdYauQE4RNUas4Y+wmArWUj2Kx2JO6xCq1a4adq5yR1S4ZU/Zy+pLs3RiaCnQBcVk3evzjGtBtYQFsMDVfY+IseAnb9JGnDmrjeDlRlYMAe9AgYmUP52wSU0VW0BZ42eKHE8DWq5KnpoNism2n15jpI1bcmLGcXcsEPIGAZYcbUNze1dFuq2HxuDDo/zN1o2NNKYACkYu5BjrpXf7zcT9RtYvxl79WEW84B11rRxOT1ok/xf8XwpurKbb52gqe/3NwaHWgfg53dFdU0GO3UMjR44UBi/A44PLDWeFazFy4dyU0FZEuiLS32AVurs12ji46rH4Ot1Yi1OPfFDN5uwY1s9WsvXv3Ib37k/Tagtu4G6bTlVQMOmju69ocUw52Tg3Nx2yL38KDvp7607ip8UiTlww96S38BQNqaUHMWBOkYIYtNVK8g1M3CiJE0oCsStCRnM507mqxtb+bQKrvkhtLK6gsOa6oEHdUpWJKtWaZap6KpE6CVqdyLUTzpwnlXAhfpOTkQtJJMy52uGDkyPcBlm7jVdEOqyc0sQtnKuMdcmbQg+94d7sg7E7wXBD0p6TzOwa17vZu6CIez0xGLM93HsQjOkZ7tz3d94PZ8/z853hmxIUiI7flwb44y3mfkr1f8/YkasgmyhL8GleLjk8GQgJN3MTCLPKUJZ/AACoCxQ=",sidebar_class_name:"patch api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},y=void 0,h={unversionedId:"api/patch-namespaced-node-network",id:"version-v1.1/api/patch-namespaced-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",source:"@site/versioned_docs/version-v1.1/api/patch-namespaced-node-network.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-node-network",permalink:"/v1.1/api/patch-namespaced-node-network",draft:!1,editUrl:null,tags:[],version:"v1.1",frontMatter:{id:"patch-namespaced-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",sidebar_label:"Patch a Node Network",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1T2zAQ/SuePbaCBMqlvsG0M820pUxLe4EcFmuTCGJJaGXKx/i/d9bOh504fKT01lzs0Uq7T+9t1u8BNHEWjI/GWUjhBGM2STA5dpqOKf524SpxF5eUxV1QEHHMkJ7BLMIwVOA8BZTTAw0peDl/jDmxx4x0Iw0oCHRdEMcjp+8gfYDM2Ug2yit6PzVZlaZ3yc7uVHneyquEOZtQjvIW7zxBCjUkKEvVOppTGNOzz5Y1IhNIQxpDQdUCe2eZWA7s9/vyaDP07TOox6A/VrNZ8AyujNUgFzC/KLBkHyrwQQiNpkbQiC2TcQzGjqFUdYauQE4RNUas4Y+wmArWUj2Kx2JO6xCq1a4adq5yR1S4ZU/Zy+pLs3RiaCnQBcVk3evzjGtBtYQFsMDVfY+IseAnb9JGnDmrjeDlRlYMAe9AgYmUP52wSU0VW0BZ42eKHE8DWq5KnpoNism2n15jpI1bcmLGcXcsEPIGAZYcbUNze1dFuq2HxuDDo/zN1o2NNKYACkYu5BjrpXf7zcT9RtYvxl79WEW84B11rRxOT1ok/xf8XwpurKbb52gqe/3NwaHWgfg53dFdU0GO3UMjR44UBi/A44PLDWeFazFy4dyU0FZEuiLS32AVurs12ji46rH4Ot1Yi1OPfFDN5uwY1s9WsvXv3Ib37k/Tagtu4G6bTlVQMOmju69ocUw52Tg3Nx2yL38KDvp7607ip8UiTlww96S38BQNqaUHMWBOkYIYtNVK8g1M3CiJE0oCsStCRnM507mqxtb+bQKrvkhtLK6gsOa6oEHdUpWJKtWaZap6KpE6CVqdyLUTzpwnlXAhfpOTkQtJJMy52uGDkyPcBlm7jVdEOqyc0sQtnKuMdcmbQg+94d7sg7E7wXBD0p6TzOwa17vZu6CIez0xGLM93HsQjOkZ7tz3d94PZ8/z853hmxIUiI7flwb44y3mfkr1f8/YkasgmyhL8GleLjk8GQgJN3MTCLPKUJZ/AACoCxQ=",sidebar_class_name:"patch api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Patch a Network Attachment Definition",permalink:"/v1.1/api/patch-namespaced-network-attachment-definition"},next:{title:"Patch a Persistent Volume Claim",permalink:"/v1.1/api/patch-namespaced-persistent-volume-claim"}},u={},g=[{value:"Request",id:"request",level:2}],N={toc:g},f="wrapper";function b({components:e,...a}){return(0,s.kt)(f,{...N,...a,components:e,mdxType:"MDXLayout"},(0,s.kt)("h1",{className:"openapi__heading"},"Patch a Node Network"),(0,s.kt)(n(),{method:"patch",path:"/apis/network.harvesterhci.io/v1beta1/nodenetworks/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Patch a NodeNetwork object."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"object"))))),(0,s.kt)(d.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"object")))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"nic",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"nodeName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"networkIDs",required:!1,schemaName:"int32[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int32",default:0}},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"networkLinkStatus"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"property name*"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"index",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"ipv4Address",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"mac",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"masterIndex",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"promiscuous",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"routes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"nics"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"index",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"masterIndex",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"usedByManagementNetwork",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "nic": "string",\n    "nodeName": "string",\n    "type": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "networkIDs": [\n      0\n    ],\n    "networkLinkStatus": {},\n    "nics": [\n      {\n        "index": 0,\n        "masterIndex": 0,\n        "name": "string",\n        "state": "string",\n        "type": "string",\n        "usedByManagementNetwork": true\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))))))))))}b.isMDXComponent=!0}}]);