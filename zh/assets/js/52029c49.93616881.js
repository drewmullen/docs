"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2651],{53830:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>g,default:()=>v,frontMatter:()=>h,metadata:()=>b,toc:()=>_});var s=t(87462),i=(t(67294),t(3905)),n=t(58219),m=(t(62316),t(80667)),r=t.n(m),p=t(24228),l=t.n(p),o=t(9487),c=t(41429),d=t(5397),u=t(4667),y=t(9472),k=t(85162);const h={id:"read-namespaced-cluster-network",title:"Read a Cluster Network",description:"Get a ClusterNetwork object.",sidebar_label:"Read a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a ClusterNetwork object.",tags:["Networks"],operationId:"readNamespacedClusterNetwork",parameters:[{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["enable","kind","apiVersion"],properties:{apiVersion:{type:"string"},config:{type:"object",additionalProperties:{type:"string",default:""}},description:{type:"string"},enable:{type:"boolean",default:!1},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}}}}},"application/yaml":{schema:{type:"object",required:["enable","kind","apiVersion"],properties:{apiVersion:{type:"string"},config:{type:"object",additionalProperties:{type:"string",default:""}},description:{type:"string"},enable:{type:"boolean",default:!1},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}}}}},"application/json;stream=watch":{schema:{type:"object",required:["enable","kind","apiVersion"],properties:{apiVersion:{type:"string"},config:{type:"object",additionalProperties:{type:"string",default:""}},description:{type:"string"},enable:{type:"boolean",default:!1},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}},"application/json;stream=watch":{schema:{type:"string"}}}}},method:"get",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks/{name:[a-z0-9][a-z0-9-]*}",info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"get api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},g=void 0,b={unversionedId:"api/read-namespaced-cluster-network",id:"version-v1.1/api/read-namespaced-cluster-network",title:"Read a Cluster Network",description:"Get a ClusterNetwork object.",source:"@site/versioned_docs/version-v1.1/api/read-namespaced-cluster-network.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-cluster-network",permalink:"/zh/v1.1/api/read-namespaced-cluster-network",draft:!1,editUrl:null,tags:[],version:"v1.1",frontMatter:{id:"read-namespaced-cluster-network",title:"Read a Cluster Network",description:"Get a ClusterNetwork object.",sidebar_label:"Read a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a ClusterNetwork object.",tags:["Networks"],operationId:"readNamespacedClusterNetwork",parameters:[{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["enable","kind","apiVersion"],properties:{apiVersion:{type:"string"},config:{type:"object",additionalProperties:{type:"string",default:""}},description:{type:"string"},enable:{type:"boolean",default:!1},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}}}}},"application/yaml":{schema:{type:"object",required:["enable","kind","apiVersion"],properties:{apiVersion:{type:"string"},config:{type:"object",additionalProperties:{type:"string",default:""}},description:{type:"string"},enable:{type:"boolean",default:!1},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}}}}},"application/json;stream=watch":{schema:{type:"object",required:["enable","kind","apiVersion"],properties:{apiVersion:{type:"string"},config:{type:"object",additionalProperties:{type:"string",default:""}},description:{type:"string"},enable:{type:"boolean",default:!1},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}},"application/json;stream=watch":{schema:{type:"string"}}}}},method:"get",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks/{name:[a-z0-9][a-z0-9\\-]*}",info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"get api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Create a Cluster Network",permalink:"/zh/v1.1/api/create-namespaced-cluster-network"},next:{title:"Replace a Cluster Network",permalink:"/zh/v1.1/api/replace-namespaced-cluster-network"}},f={},_=[{value:"Request",id:"request",level:2}],N={toc:_},x="wrapper";function v(e){let{components:a,...t}=e;return(0,i.kt)(x,(0,s.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Read a Cluster Network"),(0,i.kt)(r(),{method:"get",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(l(),{infoPath:"version-v1.1/api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Get a ClusterNetwork object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(k.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"config"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(k.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"config"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(k.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"config"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(k.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))),(0,i.kt)(k.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))),(0,i.kt)(k.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}v.isMDXComponent=!0}}]);