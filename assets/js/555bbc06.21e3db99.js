"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4036],{71483:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>y,default:()=>b,frontMatter:()=>k,metadata:()=>u,toc:()=>g});t(67294);var s=t(3905),m=t(54734),i=t(90238),n=t.n(i),l=t(36765),r=t(99473),p=t(50690),o=t(88337),c=t(48951),d=t(50551);const k={id:"patch-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",sidebar_label:"Patch a Node Network",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V01z2zYQ/SuaPfWD+nDaQ8ub7XYmnjaxJ7ZzkXVYkSsRMQkwwNK2ouF/7yxBSqJMMZGS6kIKWCzevt0FHtfAuHQQTuE98bOxjw5mAcTkIqtyVkZDCDfIUTLAwXsTU201MPNPFPEIAjA5WRTLqxhCyMV2xxACsPS5IMcXJl5BuIbIaCbN8op5nqqoWjz+5IweVqt/lVeZdlFCGcobr3KCEPymEAArTmXg8Q83Umb0dDaqMEJZBi2nGdkl/QCvpY9CWYohZFtQNeByox05cfVmMpFHm7frfyDoC7cfzXbDKWCuPpJ14jaAR6VjSVJuhXpWHsGOydaZY6v0Esp6UddERowxMnr4CyxSwSo8pun1AsJpPzKNGb0GU4127SYTLseoa7bsysB1tek7YoRyVgbgcopOhSpV2Qm3lbYu1CrqHm88vpoMtgBBLP1sX8ja98soQftEjskmkfIczInxbLTTU7fCgWeDkQt3BB/tuCOjYyVRux1saC2uIADFlB3jepfqGlcd9yu+U3R8Z1G7avM7daBYxOw+j5HpoElGzuGye84SugMJ3fJ2StraVkfk8LLhW7In9ePtr/7q5b8eV5ppSRYCWBibIfuh397swpnseP1X6cfb/Tg32cLYI8H0ppWa43td6ZhevgWnpAu7GylDYevqCE/dJ8x+/nJrMuWiwrRImBuTEuqmELqr5/s7dicBpT9EfnSbeeprMppgDjXdN+epVU//X24OUH9KCwZQOIovVu9Q45Iy0tyoj86ke+OPKeoes2OO5rqNNZNdyN0m3X3i0V7Xy+zE9aJVygB+n5y9liP3GgtOjFVfKD5BmGw6oNohR4sZMVlXValPeVOISnslmMC+lJTbcmAWA05oYMmZwkYE++IqOLi57MtMVlxNcfhlMvxzVj8fHoazX6AsZ5WkScxGjPpFCYQwxly58QE2xzWbY7nUaxs3XktEpfQWRYVVvLoVZL6hLtC1dEHCnEONvSqlar4M4ILQku2z9AbCq9D/YSuY/37BLJcikENB6YWpvNR18baJYHB+cyW37VMjAKEOpjoDjeMM9VaWtfT8YKvT91TQpj6+ov/rmJheeJynqHyL2VR8eOIr/Sr4DlAvyGu8XlM19EMAYXPpJMaxuFqv5+jo3qZlKcOfC7IrCKezAJ7QKpwLM9M1xMrJewzhAlNHPdH99KEuvp8HB6qzM8LmGNdyiD9hWsg/Uee0ahqhkmgJYSzJn67rqUu/8/BOHGyX9n0LlUGz+DyKKOeeZdBqgJvzu8u3EMC8/vbKTCyLLD5L0+EzhPAAD1B9xW10YDUuIk0vi0pbgXcsv/8Ay27hlg==",sidebar_class_name:"patch api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},y=void 0,u={unversionedId:"api/patch-node-network",id:"version-v1.3/api/patch-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",source:"@site/versioned_docs/version-v1.3/api/patch-node-network.api.mdx",sourceDirName:"api",slug:"/api/patch-node-network",permalink:"/v1.3/api/patch-node-network",draft:!1,editUrl:null,tags:[],version:"v1.3",frontMatter:{id:"patch-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",sidebar_label:"Patch a Node Network",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V01z2zYQ/SuaPfWD+nDaQ8ub7XYmnjaxJ7ZzkXVYkSsRMQkwwNK2ouF/7yxBSqJMMZGS6kIKWCzevt0FHtfAuHQQTuE98bOxjw5mAcTkIqtyVkZDCDfIUTLAwXsTU201MPNPFPEIAjA5WRTLqxhCyMV2xxACsPS5IMcXJl5BuIbIaCbN8op5nqqoWjz+5IweVqt/lVeZdlFCGcobr3KCEPymEAArTmXg8Q83Umb0dDaqMEJZBi2nGdkl/QCvpY9CWYohZFtQNeByox05cfVmMpFHm7frfyDoC7cfzXbDKWCuPpJ14jaAR6VjSVJuhXpWHsGOydaZY6v0Esp6UddERowxMnr4CyxSwSo8pun1AsJpPzKNGb0GU4127SYTLseoa7bsysB1tek7YoRyVgbgcopOhSpV2Qm3lbYu1CrqHm88vpoMtgBBLP1sX8ja98soQftEjskmkfIczInxbLTTU7fCgWeDkQt3BB/tuCOjYyVRux1saC2uIADFlB3jepfqGlcd9yu+U3R8Z1G7avM7daBYxOw+j5HpoElGzuGye84SugMJ3fJ2StraVkfk8LLhW7In9ePtr/7q5b8eV5ppSRYCWBibIfuh397swpnseP1X6cfb/Tg32cLYI8H0ppWa43td6ZhevgWnpAu7GylDYevqCE/dJ8x+/nJrMuWiwrRImBuTEuqmELqr5/s7dicBpT9EfnSbeeprMppgDjXdN+epVU//X24OUH9KCwZQOIovVu9Q45Iy0tyoj86ke+OPKeoes2OO5rqNNZNdyN0m3X3i0V7Xy+zE9aJVygB+n5y9liP3GgtOjFVfKD5BmGw6oNohR4sZMVlXValPeVOISnslmMC+lJTbcmAWA05oYMmZwkYE++IqOLi57MtMVlxNcfhlMvxzVj8fHoazX6AsZ5WkScxGjPpFCYQwxly58QE2xzWbY7nUaxs3XktEpfQWRYVVvLoVZL6hLtC1dEHCnEONvSqlar4M4ILQku2z9AbCq9D/YSuY/37BLJcikENB6YWpvNR18baJYHB+cyW37VMjAKEOpjoDjeMM9VaWtfT8YKvT91TQpj6+ov/rmJheeJynqHyL2VR8eOIr/Sr4DlAvyGu8XlM19EMAYXPpJMaxuFqv5+jo3qZlKcOfC7IrCKezAJ7QKpwLM9M1xMrJewzhAlNHPdH99KEuvp8HB6qzM8LmGNdyiD9hWsg/Uee0ahqhkmgJYSzJn67rqUu/8/BOHGyX9n0LlUGz+DyKKOeeZdBqgJvzu8u3EMC8/vbKTCyLLD5L0+EzhPAAD1B9xW10YDUuIk0vi0pbgXcsv/8Ay27hlg==",sidebar_class_name:"patch api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Patch a Namespaced Virtual Machine",permalink:"/v1.3/api/patch-namespaced-virtual-machine"},next:{title:"Read a Cluster Network",permalink:"/v1.3/api/read-cluster-network"}},h={},g=[{value:"Request",id:"request",level:2}],N={toc:g},f="wrapper";function b({components:e,...a}){return(0,s.kt)(f,{...N,...a,components:e,mdxType:"MDXLayout"},(0,s.kt)("h1",{className:"openapi__heading"},"Patch a Node Network"),(0,s.kt)(n(),{method:"patch",path:"/apis/network.harvesterhci.io/v1beta1/nodenetworks/{name}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Patch a NodeNetwork object."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"object"))))),(0,s.kt)(d.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"object")))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"nic",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"nodeName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"networkIDs",required:!1,schemaName:"int32[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int32",default:0}},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"networkLinkStatus"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"property name*"),(0,s.kt)("span",{className:"openapi-schema__name"}," network.harvesterhci.io.v1beta1.LinkStatus"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"index",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"mac",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"masterIndex",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"promiscuous",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"nics"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"index",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"masterIndex",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"usedByManagementNetwork",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"usedByVlanNetwork",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "nic": "string",\n    "nodeName": "string",\n    "type": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "networkIDs": [\n      0\n    ],\n    "networkLinkStatus": {},\n    "nics": [\n      {\n        "index": 0,\n        "masterIndex": 0,\n        "name": "string",\n        "state": "string",\n        "type": "string",\n        "usedByManagementNetwork": true,\n        "usedByVlanNetwork": true\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))))))))))}b.isMDXComponent=!0}}]);