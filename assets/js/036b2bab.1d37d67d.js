"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[787],{86117:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>k,default:()=>N,frontMatter:()=>g,metadata:()=>_,toc:()=>v});var s=t(87462),i=(t(67294),t(3905)),n=t(55410),m=(t(44646),t(22494)),r=t.n(m),p=t(83257),l=t.n(p),c=t(90502),o=t(23091),d=t(43296),u=t(24386),h=t(65254),y=t(18679);const g={id:"patch-namespaced-virtual-machine-instance-migration",title:"Patch a Virtual Machine Instance Migration",description:"Patch a VirtualMachineInstanceMigration object.",sidebar_label:"Patch a Virtual Machine Instance Migration",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a VirtualMachineInstanceMigration object.",tags:["Migrations"],operationId:"patchNamespacedVirtualMachineInstanceMigration",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{vmiName:{type:"string"}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastProbeTime:{type:"string",default:""},lastTransitionTime:{type:"string",default:""},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},phase:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/apis/kubevirt.io/v1/namespaces/{namespace:[a-z0-9][a-z0-9-]*}/virtualmachineinstancemigrations/{name:[a-z0-9][a-z0-9-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},k=void 0,_={unversionedId:"api/patch-namespaced-virtual-machine-instance-migration",id:"version-v1.2/api/patch-namespaced-virtual-machine-instance-migration",title:"Patch a Virtual Machine Instance Migration",description:"Patch a VirtualMachineInstanceMigration object.",source:"@site/versioned_docs/version-v1.2/api/patch-namespaced-virtual-machine-instance-migration.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-virtual-machine-instance-migration",permalink:"/v1.2/api/patch-namespaced-virtual-machine-instance-migration",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"patch-namespaced-virtual-machine-instance-migration",title:"Patch a Virtual Machine Instance Migration",description:"Patch a VirtualMachineInstanceMigration object.",sidebar_label:"Patch a Virtual Machine Instance Migration",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a VirtualMachineInstanceMigration object.",tags:["Migrations"],operationId:"patchNamespacedVirtualMachineInstanceMigration",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{vmiName:{type:"string"}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastProbeTime:{type:"string",default:""},lastTransitionTime:{type:"string",default:""},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},phase:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/apis/kubevirt.io/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachineinstancemigrations/{name:[a-z0-9][a-z0-9\\-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Delete a Virtual Machine Instance Migration",permalink:"/v1.2/api/delete-namespaced-virtual-machine-instance-migration"},next:{title:"List Virtual Machine Instance Migrations For All Namespaces",permalink:"/v1.2/api/list-virtual-machine-instance-migration-for-all-namespaces"}},b={},v=[{value:"Request",id:"request",level:2}],f={toc:v},T="wrapper";function N(e){let{components:a,...t}=e;return(0,i.kt)(T,(0,s.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Patch a Virtual Machine Instance Migration"),(0,i.kt)(r(),{method:"patch",path:"/apis/kubevirt.io/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachineinstancemigrations/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(l(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Patch a VirtualMachineInstanceMigration object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,i.kt)(y.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(y.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(h.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"vmiName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(u.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(u.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "vmiName": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastProbeTime": "string",\n        "lastTransitionTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(y.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(h.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}N.isMDXComponent=!0}}]);