"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[67914],{60922:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>y,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>k,toc:()=>g});s(67294);var t=s(3905),m=s(54734),i=s(90238),n=s.n(i),l=s(36765),r=s(99473),p=s(50690),c=s(88337),o=s(48951),d=s(50551);const u={id:"read-namespaced-virtual-machine-instance-migration",title:"Read a Virtual Machine Instance Migration",description:"Get a VirtualMachineInstanceMigration object.",sidebar_label:"Read a Virtual Machine Instance Migration",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01v2zAM/SsCLwMGt2mHXZZhhx2GrRjaFdjHpc2BkZlYrS2pIp2tC/zfB8pt0jbu19BjTnJCiu+R1LOpJZTENrkoLngYw2cSg+aXS9JifYi2cp4OPAt6S4dunlD9TJiekZVdKEBwzjA+gZWNYVJAiNT/OihhDImwPMKGOKKl8pHYUEDEhA0JJY28vEPwexXaujRSkaE/MSQxU31CK7vmky7XfzfovKDzbGzdslDa4UjWzZw1M0d1yaZ252RerZi90nw8NgRjyAGhAKeQFy2lSyiAbUUNwngJchnVaxpCTaiUW+8uWjoQahjGklrquuJe5o7NAuuWeuZKlkoln2mzJBf5mqJUqP1omZKx6I0PYvo0Lm+x1a0vTFfrYsIsVzoRhzZZWkPm5QowolRQQKKL1iUq+4gD+Jqanz8R/ls+YkZxDPrSYCuVYRsiFYZbWxlkMwvJCGHD2SOmoFv4Nsnc2pdkOtH9HINnYt3yZm9Plzvsv0IBNnghL2rFGGtn8wEfnbG6LDdRe1Xd4ncC2m0o4Nz5EgrA6H5RYgWZFBCTCk1cT+SGbSOT7irCkKEhwRIF+yxm2NZKuSsepJUrvEGhr/sAxroTm9auK/osH8O/jbVo3NEwXA4oKC0/M6QNvnT9S2wdFVNClZPrD8EzapRtKyobxaqR5TiFKf1wQ2kUayDQEqr7j4SeM8On7WmIGefDLUmEfM9RWRfv4fC99WGv3I1YIQ93KptvquMSm3qrjq06tuoYUod+O96zJMLmw28UW22lspXKVipddy2Wt3v7m9PYT6/TY0juL5X/MZetQJ74pbrH/2navZlRllQV9A41p3zKdH4dwwij49F5O6WFS7LrwmixP1opg0fL1fP4BHf+7u28m1ytp6c7k9fdaNHfwZr+Duau7mDN6g7XRxjenGfpWciUndTK+QumBekVy3w8PtD5e3H9+oDF/pQE96Hr/gFOcgDn",sidebar_class_name:"get api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},h=void 0,k={unversionedId:"api/read-namespaced-virtual-machine-instance-migration",id:"version-v1.1/api/read-namespaced-virtual-machine-instance-migration",title:"Read a Virtual Machine Instance Migration",description:"Get a VirtualMachineInstanceMigration object.",source:"@site/versioned_docs/version-v1.1/api/read-namespaced-virtual-machine-instance-migration.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-virtual-machine-instance-migration",permalink:"/v1.1/api/read-namespaced-virtual-machine-instance-migration",draft:!1,editUrl:null,tags:[],version:"v1.1",frontMatter:{id:"read-namespaced-virtual-machine-instance-migration",title:"Read a Virtual Machine Instance Migration",description:"Get a VirtualMachineInstanceMigration object.",sidebar_label:"Read a Virtual Machine Instance Migration",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01v2zAM/SsCLwMGt2mHXZZhhx2GrRjaFdjHpc2BkZlYrS2pIp2tC/zfB8pt0jbu19BjTnJCiu+R1LOpJZTENrkoLngYw2cSg+aXS9JifYi2cp4OPAt6S4dunlD9TJiekZVdKEBwzjA+gZWNYVJAiNT/OihhDImwPMKGOKKl8pHYUEDEhA0JJY28vEPwexXaujRSkaE/MSQxU31CK7vmky7XfzfovKDzbGzdslDa4UjWzZw1M0d1yaZ252RerZi90nw8NgRjyAGhAKeQFy2lSyiAbUUNwngJchnVaxpCTaiUW+8uWjoQahjGklrquuJe5o7NAuuWeuZKlkoln2mzJBf5mqJUqP1omZKx6I0PYvo0Lm+x1a0vTFfrYsIsVzoRhzZZWkPm5QowolRQQKKL1iUq+4gD+Jqanz8R/ls+YkZxDPrSYCuVYRsiFYZbWxlkMwvJCGHD2SOmoFv4Nsnc2pdkOtH9HINnYt3yZm9Plzvsv0IBNnghL2rFGGtn8wEfnbG6LDdRe1Xd4ncC2m0o4Nz5EgrA6H5RYgWZFBCTCk1cT+SGbSOT7irCkKEhwRIF+yxm2NZKuSsepJUrvEGhr/sAxroTm9auK/osH8O/jbVo3NEwXA4oKC0/M6QNvnT9S2wdFVNClZPrD8EzapRtKyobxaqR5TiFKf1wQ2kUayDQEqr7j4SeM8On7WmIGefDLUmEfM9RWRfv4fC99WGv3I1YIQ93KptvquMSm3qrjq06tuoYUod+O96zJMLmw28UW22lspXKVipddy2Wt3v7m9PYT6/TY0juL5X/MZetQJ74pbrH/2navZlRllQV9A41p3zKdH4dwwij49F5O6WFS7LrwmixP1opg0fL1fP4BHf+7u28m1ytp6c7k9fdaNHfwZr+Duau7mDN6g7XRxjenGfpWciUndTK+QumBekVy3w8PtD5e3H9+oDF/pQE96Hr/gFOcgDn",sidebar_class_name:"get api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Read a Virtual Machine Image",permalink:"/v1.1/api/read-namespaced-virtual-machine-image"},next:{title:"Read a Virtual Machine Instance",permalink:"/v1.1/api/read-namespaced-virtual-machine-instance"}},y={},g=[{value:"Request",id:"request",level:2}],f={toc:g},_="wrapper";function v({components:e,...a}){return(0,t.kt)(_,{...f,...a,components:e,mdxType:"MDXLayout"},(0,t.kt)("h1",{className:"openapi__heading"},"Read a Virtual Machine Instance Migration"),(0,t.kt)(n(),{method:"get",path:"/apis/kubevirt.io/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachineinstancemigrations/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,t.kt)("p",null,"Get a VirtualMachineInstanceMigration object."),(0,t.kt)("h2",{id:"request"},"Request"),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(r.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,t.kt)(r.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(r.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,t.kt)(r.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,t.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"OK")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"vmiName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "vmiName": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastProbeTime": "string",\n        "lastTransitionTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"vmiName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "vmiName": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastProbeTime": "string",\n        "lastTransitionTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"vmiName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "vmiName": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastProbeTime": "string",\n        "lastTransitionTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Unauthorized")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))),(0,t.kt)(d.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))))))))))}v.isMDXComponent=!0}}]);