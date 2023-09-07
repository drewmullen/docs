"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[119],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),o=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(t),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||p;return t?n.createElement(g,l(l({ref:a},c),{},{components:t})):n.createElement(g,l({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<p;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9416:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const p={sidebar_position:2,sidebar_label:"\u4ece v1.0.2 \u5347\u7ea7\u5230 v1.0.3",title:"\u4ece v1.0.2 \u5347\u7ea7\u5230 v1.0.3"},l=void 0,i={unversionedId:"upgrade/previous-releases/v1-0-2-to-v1-0-3",id:"upgrade/previous-releases/v1-0-2-to-v1-0-3",title:"\u4ece v1.0.2 \u5347\u7ea7\u5230 v1.0.3",description:"\u901a\u7528\u4fe1\u606f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrade/previous-releases/v1-0-2-to-v1-0-3.md",sourceDirName:"upgrade/previous-releases",slug:"/upgrade/previous-releases/v1-0-2-to-v1-0-3",permalink:"/zh/v1.2/upgrade/previous-releases/v1-0-2-to-v1-0-3",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/previous-releases/v1-0-2-to-v1-0-3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u4ece v1.0.2 \u5347\u7ea7\u5230 v1.0.3",title:"\u4ece v1.0.2 \u5347\u7ea7\u5230 v1.0.3"},sidebar:"docs",previous:{title:"\u4ece v1.0.3 \u5347\u7ea7\u5230 v1.1.0",permalink:"/zh/v1.2/upgrade/previous-releases/v1-0-3-to-v1-1-0"},next:{title:"\u4ece v1.0.1 \u5347\u7ea7\u5230 v1.0.2",permalink:"/zh/v1.2/upgrade/previous-releases/v1-0-1-to-v1-0-2"}},s={},o=[{value:"\u901a\u7528\u4fe1\u606f",id:"\u901a\u7528\u4fe1\u606f",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2},{value:"1. \u4e0b\u8f7d\u5347\u7ea7\u955c\u50cf\u5931\u8d25",id:"1-\u4e0b\u8f7d\u5347\u7ea7\u955c\u50cf\u5931\u8d25",level:3},{value:"2. \u5347\u7ea7\u5361\u4f4f\uff0c\u8282\u70b9\u5904\u4e8e \u201cPre-drained\u201d \u72b6\u6001\uff08\u6848\u4f8b 1\uff09",id:"2-\u5347\u7ea7\u5361\u4f4f\u8282\u70b9\u5904\u4e8e-pre-drained-\u72b6\u6001\u6848\u4f8b-1",level:3},{value:"3. \u5347\u7ea7\u5361\u4f4f\uff0c\u8282\u70b9\u5904\u4e8e \u201cPre-drained\u201d \u72b6\u6001\uff08\u6848\u4f8b 2\uff09",id:"3-\u5347\u7ea7\u5361\u4f4f\u8282\u70b9\u5904\u4e8e-pre-drained-\u72b6\u6001\u6848\u4f8b-2",level:3}],c={toc:o},d="wrapper";function m(e){let{components:a,...p}=e;return(0,r.kt)(d,(0,n.Z)({},c,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u901a\u7528\u4fe1\u606f"},"\u901a\u7528\u4fe1\u606f"),(0,r.kt)("p",null,"Harvester GUI Dashboard \u9875\u9762\u6709\u4e00\u4e2a\u5347\u7ea7\u6309\u94ae\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/v1.2/upgrade/index#%E5%BC%80%E5%A7%8B%E5%8D%87%E7%BA%A7"},"\u5f00\u59cb\u5347\u7ea7"),"\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u79bb\u7ebf\u73af\u5883\u5347\u7ea7\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/v1.2/upgrade/index#%E5%87%86%E5%A4%87%E7%A6%BB%E7%BA%BF%E5%8D%87%E7%BA%A7"},"\u51c6\u5907\u79bb\u7ebf\u5347\u7ea7"),"\u3002"),(0,r.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-\u4e0b\u8f7d\u5347\u7ea7\u955c\u50cf\u5931\u8d25"},"1. \u4e0b\u8f7d\u5347\u7ea7\u955c\u50cf\u5931\u8d25"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e")),(0,r.kt)("p",null,"\u65e0\u6cd5\u5b8c\u6210\u5347\u7ea7\u955c\u50cf\u7684\u4e0b\u8f7d\u6216\u5931\u8d25\u5e76\u51fa\u73b0\u9519\u8bef\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5296).Z,width:"372",height:"468"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173\u95ee\u9898")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2104"},"[BUG]\u521b\u5efa\u5347\u7ea7\u955c\u50cf\u5931\u8d25"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5")),(0,r.kt)("p",null,"\u5220\u9664\u5f53\u524d\u5347\u7ea7\u5e76\u91cd\u65b0\u5f00\u59cb\u3002\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/v1.2/upgrade/troubleshooting#%E9%87%8D%E6%96%B0%E5%BC%80%E5%A7%8B%E5%8D%87%E7%BA%A7"},"\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7"),"\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2-\u5347\u7ea7\u5361\u4f4f\u8282\u70b9\u5904\u4e8e-pre-drained-\u72b6\u6001\u6848\u4f8b-1"},"2. \u5347\u7ea7\u5361\u4f4f\uff0c\u8282\u70b9\u5904\u4e8e \u201cPre-drained\u201d \u72b6\u6001\uff08\u6848\u4f8b 1\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u80fd\u4f1a\u770b\u5230\u8282\u70b9\u505c\u7559\u5728 Pre-drained \u72b6\u6001\u4e00\u6bb5\u65f6\u95f4\uff08> 30 \u5206\u949f\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(94888).Z,width:"1140",height:"1596"})),(0,r.kt)("p",null,"\u8fd9\u53ef\u80fd\u662f\u7531\u4e8e\u8282\u70b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-z7j2g")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-r-*")," Pod \u65e0\u6cd5\u6e05\u7a7a\u9020\u6210\u7684\u3002\u8981\u9a8c\u8bc1\u4e0a\u8ff0\u60c5\u51b5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5 Rancher Server \u65e5\u5fd7\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl logs deployment/rancher -n cattle-system\n")),(0,r.kt)("p",{parentName:"li"}," \u793a\u4f8b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'error when evicting pods/"instance-manager-r-10dd59c4" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\nevicting pod longhorn-system/instance-manager-r-10dd59c4\nerror when evicting pods/"instance-manager-r-10dd59c4" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\nevicting pod longhorn-system/instance-manager-r-10dd59c4\nerror when evicting pods/"instance-manager-r-10dd59c4" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\nevicting pod longhorn-system/instance-manager-r-10dd59c4\nerror when evicting pods/"instance-manager-r-10dd59c4" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9a8c\u8bc1 Pod ",(0,r.kt)("inlineCode",{parentName:"p"},"longhorn-system/instance-manager-r-10dd59c4")," \u662f\u5426\u4f4d\u4e8e\u5361\u4f4f\u7684\u8282\u70b9\u4e0a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get pod instance-manager-r-10dd59c4 -n longhorn-system -o=jsonpath='{.spec.nodeName}'\n")),(0,r.kt)("p",{parentName:"li"}," \u793a\u4f8b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"harvester-z7j2g\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u964d\u7ea7\u7684\u5377\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get volumes -n longhorn-system\n")),(0,r.kt)("p",{parentName:"li"}," \u793a\u4f8b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE              AGE\npvc-08c34593-8225-4be6-9899-10a978df6ea1   attached   healthy      True        10485760      harvester-279l2   3d13h\npvc-526600f5-bde2-4244-bb8e-7910385cbaeb   attached   healthy      True        21474836480   harvester-x9jqw   3d1h\npvc-7b3fc2c3-30eb-48b8-8a98-11913f8314c2   attached   healthy      True        10737418240   harvester-x9jqw   3d\npvc-8065ed6c-a077-472c-920e-5fe9eacff96e   attached   healthy      True        21474836480   harvester-x9jqw   3d\npvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599   attached   degraded     True        10737418240   harvester-x9jqw   2d23h\npvc-9a6539b8-44e5-430e-9b24-ea8290cb13b7   attached   healthy      True        53687091200   harvester-x9jqw   3d13h\n")),(0,r.kt)("p",{parentName:"li"}," \u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5377 ",(0,r.kt)("inlineCode",{parentName:"p"},"pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599")," \u5df2\u964d\u7ea7\u3002"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7528\u6237\u9700\u8981\u68c0\u67e5\u6240\u6709\u964d\u7ea7\u7684\u5377\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u964d\u7ea7\u5377\u7684\u526f\u672c\u72b6\u6001\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get replicas -n longhorn-system --selector longhornvolume=pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599 -o json | jq '.items[] | {replica: .metadata.name, healthyAt: .spec.healthyAt, nodeID: .spec.nodeID, state: .status.currentState}'\n")),(0,r.kt)("p",{parentName:"li"}," \u793a\u4f8b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "replica": "pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-15e31246",\n  "healthyAt": "2022-07-25T07:33:16Z",\n  "nodeID": "harvester-z7j2g",\n  "state": "running"\n}\n{\n  "replica": "pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-22974d0f",\n  "healthyAt": "",\n  "nodeID": "harvester-279l2",\n  "state": "running"\n}\n{\n  "replica": "pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5",\n  "healthyAt": "",\n  "nodeID": "harvester-x9jqw",\n  "state": "stopped"\n}\n')),(0,r.kt)("p",{parentName:"li"}," \u8fd9\u91cc\u552f\u4e00\u5065\u5eb7\u7684\u526f\u672c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-15e31246"),"\uff0c\u5b83\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-z7j2g")," \u8282\u70b9\u4e0a\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u786e\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-r-*")," Pod \u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-z7j2g")," \u8282\u70b9\u4e0a\u5e76\u907f\u514d\u4e86\u6e05\u7a7a\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173\u95ee\u9898")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2053"},"[BUG] \u5347\u7ea7\uff1alonghorn-system \u65e0\u6cd5\u88ab\u9a71\u9010"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5")),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u542f\u52a8 \u201cStopped\u201d \u72b6\u6001\u7684\u526f\u672c\u3002\u5728\u524d\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u505c\u6b62\u7684\u526f\u672c\u7684\u540d\u79f0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5 Longhorn \u7ba1\u7406\u5668\u65e5\u5fd7\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u4e00\u4e2a\u526f\u672c\u5728\u7b49\u5f85 backing \u955c\u50cf\u3002\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u83b7\u53d6\u7ba1\u7406\u5668\u7684\u540d\u79f0\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -n longhorn-system --selector app=longhorn-manager --field-selector spec.nodeName=harvester-x9jqw\n")),(0,r.kt)("p",{parentName:"li"}," \u793a\u4f8b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nNAME                     READY   STATUS    RESTARTS   AGE\nlonghorn-manager-zmfbw   1/1     Running   0          3d10h\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6 Pod \u65e5\u5fd7\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl logs longhorn-manager-zmfbw -n longhorn-system | grep pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5\n")),(0,r.kt)("p",{parentName:"li"}," \u793a\u4f8b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'(...)\ntime="2022-07-28T04:35:34Z" level=debug msg="Prepare to create instance pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5"\ntime="2022-07-28T04:35:34Z" level=debug msg="Replica pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5 is waiting for backing image harvester-system-harvester-iso-n7bxh downloading file to node harvester-x9jqw disk 3830342d-c13d-4e55-ac74-99cad529e9d4, the current state is in-progress" controller=longhorn-replica dataPath= node=harvester-x9jqw nodeID=harvester-x9jqw ownerID=harvester-x9jqw replica=pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5\ntime="2022-07-28T04:35:34Z" level=info msg="Event(v1.ObjectReference{Kind:\\"Replica\\", Namespace:\\"longhorn-system\\", Name:\\"pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5\\", UID:\\"c511630f-2fe2-4cf9-97a4-21bce73782b1\\", APIVersion:\\"longhorn.io/v1beta1\\", ResourceVersion:\\"632926\\", FieldPath:\\"\\"}): type: \'Normal\' reason: \'Start\' Starts pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5"\n')),(0,r.kt)("p",{parentName:"li"}," \u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u786e\u5b9a\u526f\u672c\u6b63\u5728\u7b49\u5f85 backing \u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-system-harvester-iso-n7bxh"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ece backing \u955c\u50cf\u4e2d\u83b7\u53d6\u78c1\u76d8\u6587\u4ef6\u6620\u5c04\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl describe backingimage harvester-system-harvester-iso-n7bxh -n longhorn-system\n")),(0,r.kt)("p",{parentName:"li"}," \u793a\u4f8b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(...)\nDisk File Status Map:\n    3830342d-c13d-4e55-ac74-99cad529e9d4:\n      Last State Transition Time:  2022-07-25T08:30:34Z\n      Message:\n      Progress:                    29\n      State:                       in-progress\n    3aa804e1-229d-4141-8816-1f6a7c6c3096:\n      Last State Transition Time:  2022-07-25T08:33:20Z\n      Message:\n      Progress:                    100\n      State:                       ready\n    92726efa-bfb3-478e-8553-3206ad34ce70:\n      Last State Transition Time:  2022-07-28T04:31:49Z\n      Message:\n      Progress:                    100\n      State:                       ready\n")),(0,r.kt)("p",{parentName:"li"}," UUID ",(0,r.kt)("inlineCode",{parentName:"p"},"3830342d-c13d-4e55-ac74-99cad529e9d4")," \u7684\u78c1\u76d8\u6587\u4ef6\u72b6\u6001\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"in-progress"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u627e\u5230\u5305\u542b\u8fd9\u4e2a\u78c1\u76d8\u6587\u4ef6\u7684 backing-image-manager\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n longhorn-system --selector=longhorn.io/disk-uuid=3830342d-c13d-4e55-ac74-99cad529e9d4\n")),(0,r.kt)("p",{parentName:"li"}," \u793a\u4f8b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                              READY   STATUS    RESTARTS   AGE\nbacking-image-manager-c00e-3830   1/1     Running   0          3d1h\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5220\u9664 Pod \u91cd\u65b0\u542f\u52a8 backing-image-manager\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete pod -n longhorn-system backing-image-manager-c00e-3830\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"3-\u5347\u7ea7\u5361\u4f4f\u8282\u70b9\u5904\u4e8e-pre-drained-\u72b6\u6001\u6848\u4f8b-2"},"3. \u5347\u7ea7\u5361\u4f4f\uff0c\u8282\u70b9\u5904\u4e8e \u201cPre-drained\u201d \u72b6\u6001\uff08\u6848\u4f8b 2\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u80fd\u4f1a\u770b\u5230\u8282\u70b9\u505c\u7559\u5728 Pre-drained \u72b6\u6001\u4e00\u6bb5\u65f6\u95f4\uff08> 30 \u5206\u949f\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(44393).Z,width:"908",height:"1276"})),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u9a8c\u8bc1\u662f\u5426\u53d1\u751f\u4e86\u6b64\u95ee\u9898\u7684\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bbf\u95ee Longhorn GUI\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"https://{{VIP}}/k8s/clusters/local/api/v1/namespaces/longhorn-system/services/http:longhorn-frontend:80/proxy/#/volume"),"\uff08\u7528\u9002\u5f53\u7684\u503c\u66ff\u6362 VIP\uff09\u5e76\u68c0\u67e5\u964d\u7ea7\u7684\u5377\u3002\u964d\u7ea7\u7684\u5377\u53ef\u80fd\u53ea\u5305\u542b\u4e00\u4e2a\u5065\u5eb7\u7684\u526f\u672c\uff08\u84dd\u8272\u80cc\u666f\uff09\uff0c\u5e76\u4e14\u5065\u5eb7\u7684\u526f\u672c\u4f4d\u4e8e \u201cPre-drained\u201d \u8282\u70b9\u4e0a\uff1a"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{src:t(49231).Z,width:"2574",height:"1004"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u9f20\u6807\u60ac\u505c\u5728\u7ea2\u8272\u7684 scheduled \u56fe\u6807\u4e0a\uff0c\u53ef\u4ee5\u770b\u5230\u539f\u56e0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"toomanysnapshots"),"\uff1a"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{src:t(36031).Z,width:"784",height:"376"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173\u95ee\u9898")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2640"},"[BUG] \u5347\u7ea7\u5361\u5728 \u201cPredrained\u201d \u72b6\u6001\uff08\u5377\u5e26\u6709\u592a\u591a\u7cfb\u7edf\u5feb\u7167\uff09"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 \u201cSnapshots and Backup\u201d \u9762\u677f\u4e2d\uff0c\u5207\u6362 \u201cShow System Hidden\u201d \u5f00\u5173\u5e76\u5220\u9664\u6700\u65b0\u7684\u7cfb\u7edf\u5feb\u7167\uff08\u5c31\u5728 \u201cVolume Head\u201d \u524d\u9762\uff09\uff1a"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{src:t(46548).Z,width:"1296",height:"542"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5377\u5c06\u7ee7\u7eed\u91cd\u5efa\u4ee5\u6062\u590d\u5347\u7ea7\u3002"))))}m.isMDXComponent=!0},5296:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/known_issue_downloading_image_failure-e5c4ab5abb0ac17b4aaaa166991ad825.png"},94888:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2053-stuck-37c60bee142c94d778e38aabf6a0f545.png"},44393:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2640-stuck-e5ffde3f945c6d60de8aeddc9e2c9116.png"},49231:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2640-vol-1-89f1414500af2b02787af1288938ada0.png"},36031:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2640-vol-2-6eb01f626678e2c347187d79bccb6af8.png"},46548:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2640-vol-3-1bda35c79e234a8c50645812e926767e.png"}}]);