"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9529],{10621:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>f,default:()=>j,frontMatter:()=>y,metadata:()=>_,toc:()=>b});var s=t(87462),n=(t(67294),t(3905)),i=t(55410),m=(t(44646),t(22494)),p=t.n(m),o=t(83257),r=t.n(o),c=t(90502),l=t(23091),d=t(43296),h=t(24386),u=t(65254),k=t(18679);const y={id:"patch-namespaced-network-attachment-definition",title:"Patch a Network Attachment Definition",description:"Patch a NetworkAttachmentDefinition object.",sidebar_label:"Patch a Network Attachment Definition",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a NetworkAttachmentDefinition object.",tags:["Networks"],operationId:"patchNamespacedNetworkAttachmentDefinition",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["config"],properties:{config:{type:"string",default:""}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/apis/k8s.cni.cncf.io/v1/namespaces/{namespace:[a-z0-9][a-z0-9-]*}/network-attachment-definitions/{name:[a-z0-9][a-z0-9-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},f=void 0,_={unversionedId:"api/patch-namespaced-network-attachment-definition",id:"version-v1.2/api/patch-namespaced-network-attachment-definition",title:"Patch a Network Attachment Definition",description:"Patch a NetworkAttachmentDefinition object.",source:"@site/versioned_docs/version-v1.2/api/patch-namespaced-network-attachment-definition.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-network-attachment-definition",permalink:"/v1.2/api/patch-namespaced-network-attachment-definition",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"patch-namespaced-network-attachment-definition",title:"Patch a Network Attachment Definition",description:"Patch a NetworkAttachmentDefinition object.",sidebar_label:"Patch a Network Attachment Definition",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a NetworkAttachmentDefinition object.",tags:["Networks"],operationId:"patchNamespacedNetworkAttachmentDefinition",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["config"],properties:{config:{type:"string",default:""}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/apis/k8s.cni.cncf.io/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/network-attachment-definitions/{name:[a-z0-9][a-z0-9\\-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Delete a Network Attachment Definition",permalink:"/v1.2/api/delete-namespaced-network-attachment-definition"},next:{title:"List Network Attachment Definitions For All Namespaces",permalink:"/v1.2/api/list-network-attachment-definition-for-all-namespaces"}},g={},b=[{value:"Request",id:"request",level:2}],N={toc:b},v="wrapper";function j(e){let{components:a,...t}=e;return(0,n.kt)(v,(0,s.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Patch a Network Attachment Definition"),(0,n.kt)(p(),{method:"patch",path:"/apis/k8s.cni.cncf.io/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/network-attachment-definitions/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,n.kt)(r(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Patch a NetworkAttachmentDefinition object."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,n.kt)(l.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,n.kt)(k.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("span",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(k.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("span",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object"))))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(k.default,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(h.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(h.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(h.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(h.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(h.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(h.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,n.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "config": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(k.default,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unauthorized")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))))))))))))))}j.isMDXComponent=!0}}]);