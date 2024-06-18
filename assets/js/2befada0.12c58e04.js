"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[72889],{41299:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>u,contentTitle:()=>y,default:()=>f,frontMatter:()=>k,metadata:()=>h,toc:()=>g});s(67294);var t=s(3905),m=s(54734),i=s(90238),n=s.n(i),l=s(36765),p=s(99473),r=s(50690),c=s(88337),o=s(48951),d=s(50551);const k={id:"create-namespaced-network-attachment-definition",title:"Create a Namespaced Network Attachment Definition",description:"Create a NetworkAttachmentDefinition object.",sidebar_label:"Create a Namespaced Network Attachment Definition",hide_title:!0,hide_table_of_contents:!0,api:"eJztWUFz0zwQ/SuePQHjJE3nO3z41gIzMAyUocAlzWEjb2JRWxKSnBI8/u/MWo7jJiFAufTgXCJLu9Lb3bdvHKUCjysHyQzek7/T9tbBPIaUnLDSeKkVJPDCEnqKMGpNLrxHkRWk/EtaSiXZLNKLryT8GGLQhizy3JsUEhCN83ssyBkUlJ7YA2Kw9K0k5y91uoGkAqGVJ+V5iMbkUjT7Tr46xlWBExkVyCO/MQQJBBDtPtJSyoGhkV/IunDArVQpxOAMCQ7UWEbrJblwRme529N5K9UK6tb32EJBHlP0DZKUlljmDLmOAfP8agnJ7DRAhQUdgmlmj52mtrk8slrH4KXPeer2fzeWeryejq+aQ9+RR6jndRv8w6AKrZZydQi2nT8AFO8OgQN0QsmxUGLZwjzBjGtGXM8fvkFzdp9CGyzygUIDhf6KQnU/Em9Laiac0cqFGM7PzkJW+vJ59RbiQckGGg5KNlDosVCInc/PpodiFd710kGxBroNijVQ6PFQKCjW+aFiXQhBZpCsgW+DZA0UelQUYuf/jr1kfVZY+kxb+eNBstVL/R9xtLNvEBm0WJAn65rch6L3ShyDZIwGfQb7N4GhrhEbR6jSiMOInNCG4siVIovQRUttI09YuMbCWM0uDvZ/Ose/xMkQvSfLB85w9ONs9Hzeft/cjObPoK7nTQdkmi8YjXY++GSQwASNdJO9Uk3W00kXoJtU3bieqFDBEXYlHKVdDRm1I1Fa6TfXjDZQ7xKdFD3cmfcG2nj4edGs1zFcElqypyyDAZeFq/1xd/v56jsWJqd9jdjlKEjD7rmvCG1Nu7Ve//a6etuU207q80qqpW5wt9x/jXZNzpONLj684bSsO0Tr6YI8TnlHLkWBqgdhd3XcXQBvb5GjXddE9+6A71Gudwf8t/fQbc49ffcTk6NUDLG0TY8EtjRKzdHs8YXjm/bzxjZJv0V+Q5t5DBnTMplBVS3Q0Web1zVPfyvJbiCZzWNYo5W44PTOKkil43EKyRJzRyey8ORj20dPo39qx6PpaSdRbTgHmJf8xAmizT2RaFQ9I0yZ3rOqXX8RQI4+8S47/wNRq+OtR3h5O2nb7/UPV9efIIZF+/dAoVP2sXjH8oJ3kMAN3EDzH0QoRFKF+QpyVKsSV2wf9uXPT040p+g=",sidebar_class_name:"post api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},y=void 0,h={unversionedId:"api/create-namespaced-network-attachment-definition",id:"version-v1.3/api/create-namespaced-network-attachment-definition",title:"Create a Namespaced Network Attachment Definition",description:"Create a NetworkAttachmentDefinition object.",source:"@site/versioned_docs/version-v1.3/api/create-namespaced-network-attachment-definition.api.mdx",sourceDirName:"api",slug:"/api/create-namespaced-network-attachment-definition",permalink:"/v1.3/api/create-namespaced-network-attachment-definition",draft:!1,editUrl:null,tags:[],version:"v1.3",frontMatter:{id:"create-namespaced-network-attachment-definition",title:"Create a Namespaced Network Attachment Definition",description:"Create a NetworkAttachmentDefinition object.",sidebar_label:"Create a Namespaced Network Attachment Definition",hide_title:!0,hide_table_of_contents:!0,api:"eJztWUFz0zwQ/SuePQHjJE3nO3z41gIzMAyUocAlzWEjb2JRWxKSnBI8/u/MWo7jJiFAufTgXCJLu9Lb3bdvHKUCjysHyQzek7/T9tbBPIaUnLDSeKkVJPDCEnqKMGpNLrxHkRWk/EtaSiXZLNKLryT8GGLQhizy3JsUEhCN83ssyBkUlJ7YA2Kw9K0k5y91uoGkAqGVJ+V5iMbkUjT7Tr46xlWBExkVyCO/MQQJBBDtPtJSyoGhkV/IunDArVQpxOAMCQ7UWEbrJblwRme529N5K9UK6tb32EJBHlP0DZKUlljmDLmOAfP8agnJ7DRAhQUdgmlmj52mtrk8slrH4KXPeer2fzeWeryejq+aQ9+RR6jndRv8w6AKrZZydQi2nT8AFO8OgQN0QsmxUGLZwjzBjGtGXM8fvkFzdp9CGyzygUIDhf6KQnU/Em9Laiac0cqFGM7PzkJW+vJ59RbiQckGGg5KNlDosVCInc/PpodiFd710kGxBroNijVQ6PFQKCjW+aFiXQhBZpCsgW+DZA0UelQUYuf/jr1kfVZY+kxb+eNBstVL/R9xtLNvEBm0WJAn65rch6L3ShyDZIwGfQb7N4GhrhEbR6jSiMOInNCG4siVIovQRUttI09YuMbCWM0uDvZ/Ose/xMkQvSfLB85w9ONs9Hzeft/cjObPoK7nTQdkmi8YjXY++GSQwASNdJO9Uk3W00kXoJtU3bieqFDBEXYlHKVdDRm1I1Fa6TfXjDZQ7xKdFD3cmfcG2nj4edGs1zFcElqypyyDAZeFq/1xd/v56jsWJqd9jdjlKEjD7rmvCG1Nu7Ve//a6etuU207q80qqpW5wt9x/jXZNzpONLj684bSsO0Tr6YI8TnlHLkWBqgdhd3XcXQBvb5GjXddE9+6A71Gudwf8t/fQbc49ffcTk6NUDLG0TY8EtjRKzdHs8YXjm/bzxjZJv0V+Q5t5DBnTMplBVS3Q0Web1zVPfyvJbiCZzWNYo5W44PTOKkil43EKyRJzRyey8ORj20dPo39qx6PpaSdRbTgHmJf8xAmizT2RaFQ9I0yZ3rOqXX8RQI4+8S47/wNRq+OtR3h5O2nb7/UPV9efIIZF+/dAoVP2sXjH8oJ3kMAN3EDzH0QoRFKF+QpyVKsSV2wf9uXPT040p+g=",sidebar_class_name:"post api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Create a Namespaced Key Pair",permalink:"/v1.3/api/create-namespaced-key-pair"},next:{title:"Create a Namespaced Persistent Volume Claim",permalink:"/v1.3/api/create-namespaced-persistent-volume-claim"}},u={},g=[{value:"Request",id:"request",level:2}],_={toc:g},N="wrapper";function f({components:e,...a}){return(0,t.kt)(N,{..._,...a,components:e,mdxType:"MDXLayout"},(0,t.kt)("h1",{className:"openapi__heading"},"Create a Namespaced Network Attachment Definition"),(0,t.kt)(n(),{method:"post",path:"/apis/k8s.cni.cncf.io/v1/namespaces/{namespace}/network-attachment-definitions",mdxType:"MethodEndpoint"}),(0,t.kt)("p",null,"Create a NetworkAttachmentDefinition object."),(0,t.kt)("h2",{id:"request"},"Request"),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(p.Z,{className:"paramsItem",param:{name:"namespace",in:"path",description:"Object name and auth scope, such as for teams and projects",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,t.kt)("span",{className:"openapi-schema__required"},"required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,t.kt)("span",{className:"openapi-schema__required"},"required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))))))),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,t.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"OK")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "config": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "config": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.default,{label:"201",value:"201",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Created")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "config": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "config": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.default,{label:"202",value:"202",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Accepted")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "config": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "config": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Unauthorized")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))))))))))}f.isMDXComponent=!0}}]);