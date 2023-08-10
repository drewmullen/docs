"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=l,u=k["".concat(s,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},56178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const i={sidebar_position:5,sidebar_label:"Harvester \u914d\u7f6e",title:"Harvester \u914d\u7f6e",keywords:["Harvester","harvester","Rancher","rancher","Harvester \u914d\u7f6e"],Description:"\u4f60\u53ef\u4ee5\u5728\u624b\u52a8\u6216\u81ea\u52a8\u5b89\u88c5\u671f\u95f4\u63d0\u4f9b Harvester \u914d\u7f6e\u6587\u4ef6\uff0c\u6765\u8fdb\u884c\u7279\u5b9a\u7684\u914d\u7f6e\u3002"},r=void 0,o={unversionedId:"install/harvester-configuration",id:"version-v1.1/install/harvester-configuration",title:"Harvester \u914d\u7f6e",description:"\u914d\u7f6e\u793a\u4f8b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/install/harvester-configuration.md",sourceDirName:"install",slug:"/install/harvester-configuration",permalink:"/zh/v1.1/install/harvester-configuration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/install/harvester-configuration.md",tags:[],version:"v1.1",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester \u914d\u7f6e",title:"Harvester \u914d\u7f6e",keywords:["Harvester","harvester","Rancher","rancher","Harvester \u914d\u7f6e"],Description:"\u4f60\u53ef\u4ee5\u5728\u624b\u52a8\u6216\u81ea\u52a8\u5b89\u88c5\u671f\u95f4\u63d0\u4f9b Harvester \u914d\u7f6e\u6587\u4ef6\uff0c\u6765\u8fdb\u884c\u7279\u5b9a\u7684\u914d\u7f6e\u3002"},sidebar:"tutorialSidebar",previous:{title:"PXE \u5f15\u5bfc\u5b89\u88c5",permalink:"/zh/v1.1/install/pxe-boot-install"},next:{title:"\u66f4\u65b0 Harvester \u914d\u7f6e",permalink:"/zh/v1.1/install/update-harvester-configuration"}},s={},d=[{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u53c2\u8003",id:"\u914d\u7f6e\u53c2\u8003",level:2},{value:"<code>scheme_version</code>",id:"scheme_version",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:4},{value:"<code>server_url</code>",id:"server_url",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"<code>token</code>",id:"token",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-2",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"<code>os.ssh_authorized_keys</code>",id:"osssh_authorized_keys",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-3",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"<code>os.write_files</code>",id:"oswrite_files",level:3},{value:"<code>os.hostname</code>",id:"oshostname",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-4",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:4},{value:"<code>os.modules</code>",id:"osmodules",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-5",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:4},{value:"<code>os.sysctls</code>",id:"ossysctls",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-6",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:4},{value:"<code>os.dns_nameservers</code>",id:"osdns_nameservers",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-7",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:4},{value:"<code>os.ntp_servers</code>",id:"osntp_servers",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-8",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-7",level:4},{value:"<code>os.password</code>",id:"ospassword",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-9",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-8",level:4},{value:"<code>os.environment</code>",id:"osenvironment",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-10",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-9",level:4},{value:"<code>os.labels</code>",id:"oslabels",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-11",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-10",level:4},{value:"<code>install.mode</code>",id:"installmode",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-12",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-11",level:4},{value:"<code>install.management_interface</code>",id:"installmanagement_interface",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-13",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-12",level:4},{value:"<code>install.force_efi</code>",id:"installforce_efi",level:3},{value:"<code>install.device</code>",id:"installdevice",level:3},{value:"<code>install.silent</code>",id:"installsilent",level:3},{value:"<code>install.iso_url</code>",id:"installiso_url",level:3},{value:"<code>install.poweroff</code>",id:"installpoweroff",level:3},{value:"<code>install.no_format</code>",id:"installno_format",level:3},{value:"<code>install.debug</code>",id:"installdebug",level:3},{value:"<code>install.tty</code>",id:"installtty",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-14",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-13",level:4},{value:"<code>install.vip</code>",id:"installvip",level:3},{value:"<code>install.vip_mode</code>",id:"installvip_mode",level:3},{value:"<code>install.vip_hw_addr</code>",id:"installvip_hw_addr",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-15",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-14",level:4},{value:"<code>install.force_mbr</code>",id:"installforce_mbr",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-16",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-15",level:4},{value:"<code>install.data_disk</code>",id:"installdata_disk",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-17",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-16",level:4},{value:"<code>system_settings</code>",id:"system_settings",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-18",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-17",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u624b\u52a8\u6216\u81ea\u52a8\u5b89\u88c5\u671f\u95f4\u63d0\u4f9b Harvester \u914d\u7f6e\u6587\u4ef6\uff0c\u6765\u8fdb\u884c\u7279\u5b9a\u7684\u914d\u7f6e\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'scheme_version: 1\nserver_url: https://cluster-VIP:443\ntoken: TOKEN_VALUE\nos:\n  ssh_authorized_keys:\n    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQAB...\n    - github:username\n  write_files:\n  - encoding: ""\n    content: test content\n    owner: root\n    path: /etc/test.txt\n    permissions: \'0755\'\n  hostname: myhost\n  modules:\n    - kvm\n    - nvme\n  sysctls:\n    kernel.printk: "4 4 1 7"\n    kernel.kptr_restrict: "1"\n  dns_nameservers:\n    - 8.8.8.8\n    - 1.1.1.1\n  ntp_servers:\n    - 0.suse.pool.ntp.org\n    - 1.suse.pool.ntp.org\n  password: rancher\n  environment:\n    http_proxy: http://myserver\n    https_proxy: http://myserver\n  labels:\n    topology.kubernetes.io/zone: zone1\n    foo: bar\n    mylabel: myvalue\ninstall:\n  mode: create\n  management_interface:\n    interfaces:\n    - name: ens5\n      hwAddr: "B8:CA:3A:6A:64:7C"\n    method: dhcp\n  force_efi: true\n  device: /dev/vda\n  silent: true\n  iso_url: http://myserver/test.iso\n  poweroff: true\n  no_format: true\n  debug: true\n  tty: ttyS0\n  vip: 10.10.0.19\n  vip_hw_addr: 52:54:00:ec:0e:0b\n  vip_mode: dhcp\n  force_mbr: false\nsystem_settings:\n  auto-disk-provision-paths: ""\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e\u53c2\u8003"},"\u914d\u7f6e\u53c2\u8003"),(0,l.kt)("p",null,"\u4e0b\u6587\u63d0\u4f9b\u6240\u6709\u914d\u7f6e\u5bc6\u94a5\u7684\u53c2\u8003\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u5b89\u5168\u98ce\u9669"),"\uff1a\u914d\u7f6e\u6587\u4ef6\u5305\u542b\u5e94\u4fdd\u5bc6\u7684\u51ed\u8bc1\u3002\u8bf7\u4e0d\u8981\u516c\u5f00\u914d\u7f6e\u6587\u4ef6\u3002")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4f18\u5148\u7ea7"),"\uff1a\u5982\u679c\u4f60\u5728\u5b89\u88c5 Harvester \u671f\u95f4\u63d0\u4f9b\u4e86\u8fdc\u7a0b Harvester \u914d\u7f6e\u6587\u4ef6\uff0cHarvester \u914d\u7f6e\u6587\u4ef6\u4e0d\u4f1a\u8986\u76d6\u4f60\u4e4b\u524d\u586b\u5199\u548c\u9009\u62e9\u7684\u8f93\u5165\u503c\u3002\u6362\u8a00\u4e4b\uff0c\u4f60\u5728\u5b89\u88c5\u671f\u95f4\u8f93\u5165\u7684\u503c\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5728 Harvester \u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"os.hostname"),"\uff0c\u5e76\u4e14\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u586b\u5199\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"hostname")," \u5b57\u6bb5\uff0c\u90a3\u4e48\u4f60\u586b\u5199\u7684\u503c\u5c06\u4f18\u5148\u4e8e Harvester \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"os.hostname"),"\u3002")),(0,l.kt)("h3",{id:"scheme_version"},(0,l.kt)("inlineCode",{parentName:"h3"},"scheme_version")),(0,l.kt)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u4e3a\u540e\u7eed\u914d\u7f6e\u8fc1\u79fb\u4fdd\u7559\u7684 scheme \u7248\u672c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u5c06\u914d\u7f6e\u8fc1\u79fb\u5230\u65b0\u7684 scheme \u7248\u672c\uff0c\u6b64\u8bbe\u7f6e\u662f\u5fc5\u9700\u7684\u3002\u5b83\u80fd\u544a\u8bc9 Harvester \u4ee5\u524d\u7684\u7248\u672c\u4ee5\u53ca\u8fc1\u79fb\u7684\u9700\u6c42\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u8be5\u5b57\u6bb5\u5728\u5f53\u524d\u7684 Harvester \u7248\u672c\u4e2d\u4e0d\u8d77\u4f5c\u7528\u3002")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u786e\u4fdd\u4f60\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u59cb\u7ec8\u5177\u6709\u6b63\u786e\u7684 scheme \u7248\u672c\u3002")),(0,l.kt)("h3",{id:"server_url"},(0,l.kt)("inlineCode",{parentName:"h3"},"server_url")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"server_url")," \u662f Harvester \u96c6\u7fa4\u7684 URL\uff0c\u7528\u4e8e\u5728\u96c6\u7fa4\u4e2d\u52a0\u5165\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u8282\u70b9"),"\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u6a21\u5f0f\u8fdb\u884c\u7684\u5b89\u88c5\uff0c\u914d\u7f6e\u662f\u5fc5\u987b\u7684\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"server_url")," \u7684\u9ed8\u8ba4\u683c\u5f0f\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"https://cluster-VIP:443"),"\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4e3a\u786e\u4fdd\u9ad8\u53ef\u7528\u7684 Harvester \u96c6\u7fa4\uff0c\u8bf7\u4f7f\u7528 Harvester \u96c6\u7fa4 ",(0,l.kt)("a",{parentName:"p",href:"#installvip"},"VIP")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"server_url")," \u4e2d\u7684\u57df\u540d\u3002")),(0,l.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server_url: https://cluster-VIP:443\ninstall:\n  mode: join\n")),(0,l.kt)("h3",{id:"token"},(0,l.kt)("inlineCode",{parentName:"h3"},"token")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u96c6\u7fa4\u5bc6\u6587\u6216\u8282\u70b9 Token\u3002\u5982\u679c\u8be5\u503c\u7b26\u5408\u8282\u70b9 Token \u7684\u683c\u5f0f\uff0c\u5b83\u5c06\u81ea\u52a8\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u8282\u70b9 Token\u3002\u5426\u5219\uff0c\u5b83\u5c06\u88ab\u89c6\u4e3a\u96c6\u7fa4\u5bc6\u6587\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5c06\u4e00\u4e2a\u65b0\u8282\u70b9\u52a0\u5165 Harvester \u96c6\u7fa4\uff0cToken \u5e94\u8be5\u4e0e\u670d\u52a1\u5668\u6240\u62e5\u6709\u7684\u76f8\u5339\u914d\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"token: myclustersecret\n")),(0,l.kt)("p",null,"\u8282\u70b9 Token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'token: "K1074ec55daebdf54ef48294b0ddf0ce1c3cb64ee7e3d0b9ec79fbc7baf1f7ddac6::node:77689533d0140c7019416603a05275d4"\n')),(0,l.kt)("h3",{id:"osssh_authorized_keys"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.ssh_authorized_keys")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-3"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u5e94\u8be5\u6dfb\u52a0\u5230\u9ed8\u8ba4\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher")," \u7684 SSH \u6388\u6743\u5bc6\u94a5\u7684\u5217\u8868\u3002SSH \u5bc6\u94a5\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"github:${USERNAME}")," \u683c\u5f0f\u4ece GitHub \u7528\u6237\u8d26\u6237\u83b7\u53d6\u3002\u8fd9\u662f\u901a\u8fc7\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"https://github.com/${USERNAME}.keys")," \u4e2d\u4e0b\u8f7d\u5bc6\u94a5\u6765\u5b9e\u73b0\u7684\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  ssh_authorized_keys:\n    - "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC2TBZGjE+J8ag11dzkFT58J3XPONrDVmalCNrKxsfADfyy0eqdZrG8hcAxAR/5zuj90Gin2uBR4Sw6Cn4VHsPZcFpXyQCjK1QDADj+WcuhpXOIOY3AB0LZBly9NI0ll+8lo3QtEaoyRLtrMBhQ6Mooy2M3MTG4JNwU9o3yInuqZWf9PvtW6KxMl+ygg1xZkljhemGZ9k0wSrjqif+8usNbzVlCOVQmZwZA+BZxbdcLNwkg7zWJSXzDIXyqM6iWPGXQDEbWLq3+HR1qKucTCSxjbqoe0FD5xcW7NHIME5XKX84yH92n6yn+rxSsyUfhJWYqJd+i0fKf5UbN6qLrtd/D"\n    - "github:ibuildthecloud"\n')),(0,l.kt)("h3",{id:"oswrite_files"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.write_files")),(0,l.kt)("p",null,"\u542f\u52a8\u65f6\u5199\u5165\u78c1\u76d8\u7684\u6587\u4ef6\u5217\u8868\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"encoding")," \u5b57\u6bb5\u6307\u5b9a\u5185\u5bb9\u7684\u7f16\u7801\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"encoding")," \u7684\u503c\u53ef\u4ee5\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'""'),"\uff1a\u5185\u5bb9\u6570\u636e\u4ee5\u7eaf\u6587\u672c\u5f62\u5f0f\u5199\u5165\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u7701\u7565 ",(0,l.kt)("inlineCode",{parentName:"li"},"encoding")," \u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"b64"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"base64"),"\uff1a\u5185\u5bb9\u6570\u636e\u91c7\u7528 base64 \u7f16\u7801\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gz"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"gzip"),"\uff1a\u5185\u5bb9\u6570\u636e\u7ecf\u8fc7 gzip \u538b\u7f29\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gz+base64"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"gzip+base64"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"gz+b64"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"gzip+b64"),"\uff1a\u5185\u5bb9\u6570\u636e\u5148\u7ecf\u8fc7 gzip \u538b\u7f29\u7136\u540e\u518d base64 \u7f16\u7801\u3002")),(0,l.kt)("p",null,"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  write_files:\n  - encoding: b64\n    content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4...\n    owner: root:root\n    path: /etc/connman/main.conf\n    permissions: '0644'\n  - content: |\n      # My new /etc/sysconfig/samba file\n\n      SMDBOPTIONS=\"-D\"\n    path: /etc/sysconfig/samba\n  - content: !!binary |\n      f0VMRgIBAQAAAAAAAAAAAAIAPgABAAAAwARAAAAAAABAAAAAAAAAAJAVAAAAAA\n      AEAAHgAdAAYAAAAFAAAAQAAAAAAAAABAAEAAAAAAAEAAQAAAAAAAwAEAAAAAAA\n      AAAAAAAAAwAAAAQAAAAAAgAAAAAAAAACQAAAAAAAAAJAAAAAAAAcAAAAAAAAAB\n      ...\n    path: /bin/arch\n    permissions: '0555'\n  - content: |\n      15 * * * * root ship_logs\n    path: /etc/crontab\n")),(0,l.kt)("h3",{id:"oshostname"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.hostname")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-4"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u7cfb\u7edf\u4e3b\u673a\u540d\u3002\u5982\u679c\u7528\u6237\u4e0d\u63d0\u4f9b\u503c\uff0c\u5b89\u88c5\u7a0b\u5e8f\u5c06\u751f\u6210\u4e00\u4e2a\u968f\u673a\u4e3b\u673a\u540d\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  hostname: myhostname\n")),(0,l.kt)("h3",{id:"osmodules"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.modules")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-5"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u542f\u52a8\u65f6\u8981\u52a0\u8f7d\u7684\u5185\u6838\u6a21\u5757\u5217\u8868\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  modules:\n    - kvm\n    - nvme\n")),(0,l.kt)("h3",{id:"ossysctls"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.sysctls")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-6"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u542f\u52a8\u65f6\u8981\u8bbe\u7f6e\u7684\u5185\u6838 sysctl\u3002\u8fd9\u4e9b\u914d\u7f6e\u4e0e\u4f60\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," \u4e2d\u627e\u5230\u7684\u914d\u7f6e\u7c7b\u4f3c\u3002\n\u6307\u5b9a\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  sysctls:\n    kernel.printk: 4 4 1 7 # YAML \u89e3\u6790\u5668\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32\u3002\n    kernel.kptr_restrict: "1" # \u5f3a\u5236 YAML \u89e3\u6790\u5668\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32\u3002\n')),(0,l.kt)("h3",{id:"osdns_nameservers"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.dns_nameservers")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-7"},"\u5b9a\u4e49"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5907\u7528")," DNS \u540d\u79f0\u670d\u52a1\u5668\u3002\u5982\u679c DHCP \u6216\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u6ca1\u6709\u914d\u7f6e DNS\uff0c\u5219\u4f7f\u7528\u5907\u7528 DNS \u540d\u79f0\u670d\u52a1\u5668\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-6"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  dns_nameservers:\n    - 8.8.8.8\n    - 1.1.1.1\n")),(0,l.kt)("h3",{id:"osntp_servers"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.ntp_servers")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-8"},"\u5b9a\u4e49"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5907\u7528")," NTP \u670d\u52a1\u5668\u3002\u5982\u679c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u5176\u4ed6\u4f4d\u7f6e\u6ca1\u6709\u914d\u7f6e NTP\uff0c\u5219\u4f7f\u7528\u5907\u7528 NTP \u670d\u52a1\u5668\u3002\u5f3a\u70c8\u5efa\u8bae\u4f60\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"os.ntp_servers")," \u4ee5\u907f\u514d\u4e3b\u673a\u4e4b\u95f4\u7684\u65f6\u95f4\u540c\u6b65\u95ee\u9898\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-7"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  ntp_servers:\n    - 0.suse.pool.ntp.org\n    - 1.suse.pool.ntp.org\n")),(0,l.kt)("h3",{id:"ospassword"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.password")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-9"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher")," \u7684\u5bc6\u7801\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"rancher")," \u7528\u6237\u6ca1\u6709\u5bc6\u7801\u3002\n\u5982\u679c\u4f60\u5728\u8fd0\u884c\u65f6\u8bbe\u7f6e\u5bc6\u7801\uff0c\u5bc6\u7801\u4f1a\u5728\u4e0b\u6b21\u542f\u52a8\u65f6\u91cd\u7f6e\u3002\u5bc6\u7801\u53ef\u4ee5\u662f\u660e\u6587\u6216\u52a0\u5bc6\u5f62\u5f0f\u3002\u83b7\u5f97\u8fd9\u79cd\u52a0\u5bc6\u5bc6\u7801\u6700\u5bb9\u6613\u7684\u65b9\u6cd5\uff0c\u662f\u5728 Linux \u7cfb\u7edf\u4e0a\u66f4\u6539\u4f60\u7684\u5bc6\u7801\uff0c\u5e76\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/shadow")," \u590d\u5236\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u7684\u503c\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 OpenSSL \u6765\u52a0\u5bc6\u5bc6\u7801\u3002\u5bf9\u4e8e Harvester \u652f\u6301\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u8bf7\u53c2\u8003\u4e0b\u8868\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7b97\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u6301"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SHA-512"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"openssl passwd -6")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SHA-256"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"openssl passwd -5")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f\uff08\u4ece v1.1.2 \u5f00\u59cb\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"MD5"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"openssl passwd -1")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f\uff08\u4ece v1.1.2 \u5f00\u59cb\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"MD5, Apache variant"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"openssl passwd -apr1")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f\uff08\u4ece v1.1.2 \u5f00\u59cb\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AIX-MD5"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"openssl passwd -aixmd5")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728 v1.1.2 \u524d\u4ec5\u652f\u6301 SHA-512\u3002")),(0,l.kt)("h4",{id:"\u793a\u4f8b-8"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u52a0\u5bc6\u5f62\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  password: "$6$kZYUnRaTxNdg4W8H$WSEJydGWsNpaRbbbRdTDLJ2hDLbkizxSFGW2RtexlqG6njEATaGQG9ssztjaKDCsaNUPBZ1E1YdsvSLMAi/IO/"\n')),(0,l.kt)("p",null,"\u660e\u6587\u5f62\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  password: supersecure\n")),(0,l.kt)("h3",{id:"osenvironment"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.environment")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-10"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u8981\u5728 K3s \u548c\u5176\u4ed6\u8fdb\u7a0b\uff08\u5982\u542f\u52a8\u8fdb\u7a0b\uff09\u4e0a\u8bbe\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u3002\n\u6b64\u5b57\u6bb5\u4e3b\u8981\u7528\u4e8e\u8bbe\u7f6e HTTP \u4ee3\u7406\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-9"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  environment:\n    http_proxy: http://myserver\n    https_proxy: http://myserver\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u6b64\u793a\u4f8b\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u57fa\u672c\u7684\u64cd\u4f5c\u7cfb\u7edf\u7ec4\u4ef6"),"\u8bbe\u7f6e HTTP(S) \u4ee3\u7406\u3002\n\u5982\u679c\u9700\u8981\u4e3a Harvester \u7ec4\u4ef6\uff08\u5982\u83b7\u53d6\u5916\u90e8\u955c\u50cf\u548c\u5907\u4efd\u5230 S3\uff09\u914d\u7f6e HTTP(S) \u4ee3\u7406\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/zh/v1.1/advanced/settings#http-proxy"},"Settings/http-proxy"),"\u3002")),(0,l.kt)("h3",{id:"oslabels"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.labels")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-11"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u8981\u6dfb\u52a0\u5230\u8282\u70b9\u7684\u6807\u7b7e\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-10"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  labels:\n    topology.kubernetes.io/zone: zone1\n    foo: bar\n    mylabel: myvalue\n")),(0,l.kt)("h3",{id:"installmode"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.mode")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-12"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"Harvester \u5b89\u88c5\u6a21\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"create"),"\uff1a\u521b\u5efa\u65b0\u7684 Harvester \u5b89\u88c5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"join"),"\uff1a\u52a0\u5165\u73b0\u6709\u7684 Harvester \u5b89\u88c5\u3002\u6b64\u6a21\u5f0f\u9700\u8981\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"server_url"),"\u3002")),(0,l.kt)("h4",{id:"\u793a\u4f8b-11"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  mode: create\n")),(0,l.kt)("h3",{id:"installmanagement_interface"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.management_interface")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-13"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u4e3a\u4e3b\u673a\u914d\u7f6e\u7f51\u7edc\u63a5\u53e3\u3002\u6709\u6548\u7684\u914d\u7f6e\u5b57\u6bb5\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"method"),"\uff1a\u4e3a\u8be5\u7f51\u7edc\u5206\u914d IP \u7684\u65b9\u6cd5\u3002\u652f\u6301\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"static"),"\uff1a\u624b\u52a8\u5206\u914d IP \u548c \u7f51\u5173\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dhcp"),"\uff1a\u5411 DHCP \u670d\u52a1\u5668\u8bf7\u6c42\u4e00\u4e2a IP\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ip"),"\uff1a\u6b64\u7f51\u7edc\u7684\u9759\u6001 IP\u3002\u5982\u679c\u9009\u62e9\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"static")," \u65b9\u6cd5\uff0c\u5219\u5fc5\u987b\u8bbe\u7f6e\u6b64\u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"subnet_mask"),"\uff1a\u6b64\u7f51\u7edc\u7684\u5b50\u7f51\u63a9\u7801\u3002\u5982\u679c\u9009\u62e9\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"static")," \u65b9\u6cd5\uff0c\u5219\u5fc5\u987b\u8bbe\u7f6e\u6b64\u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gateway"),"\uff1a\u6b64\u7f51\u7edc\u7684\u7f51\u5173\u3002\u5982\u679c\u9009\u62e9\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"static")," \u65b9\u6cd5\uff0c\u5219\u5fc5\u987b\u8bbe\u7f6e\u6b64\u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"interfaces"),"\uff1a\u63a5\u53e3\u540d\u79f0\u6570\u7ec4\u3002\u5982\u679c\u6307\u5b9a\u4e86\u8be5\u5b57\u6bb5\uff0c\u5b89\u88c5\u7a0b\u5e8f\u4f1a\u5c06\u8fd9\u4e9b NIC \u7ec4\u5408\u6210\u5355\u4e2a\u903b\u8f91\u7ed1\u5b9a\u63a5\u53e3\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"interfaces.name"),"\uff1a\u7ed1\u5b9a\u7f51\u7edc\u7684\u4ece\u63a5\u53e3\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"interfaces.hwAddr"),"\uff1a\u63a5\u53e3\u7684\u786c\u4ef6 MAC \u5730\u5740\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bond_options"),"\uff1a\u7ed1\u5b9a\u63a5\u53e3\u7684\u9009\u9879\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/networking/bonding.txt"},"\u6b64\u5904"),"\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mode: balance-tlb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"miimon: 100")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mtu"),"\uff1a\u63a5\u53e3\u7684 MTU\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vlan_id"),"\uff1a\u63a5\u53e3\u7684 VLAN ID\u3002")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Harvester \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.net-naming-scheme.html"},"systemd \u7f51\u7edc\u547d\u540d\u65b9\u6848"),"\u3002\n\u5b89\u88c5\u524d\u8bf7\u786e\u4fdd\u76ee\u6807\u673a\u5668\u4e0a\u5b58\u5728\u63a5\u53e3\u540d\u79f0\u3002")),(0,l.kt)("h4",{id:"\u793a\u4f8b-12"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'install:\n  mode: create\n  management_interface:\n    interfaces:\n    - name: ens5\n      hwAddr: "B8:CA:3A:6A:64:7D"     # hwAddr \u662f\u53ef\u9009\u7684\n    method: dhcp\n    bond_options:\n      mode: balance-tlb\n      miimon: 100\n    mtu: 1492\n    vlan_id: 101\n')),(0,l.kt)("h3",{id:"installforce_efi"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.force_efi")),(0,l.kt)("p",null,"\u5373\u4f7f\u672a\u68c0\u6d4b\u5230 EFI\uff0c\u4e5f\u5f3a\u5236\u5b89\u88c5 EFI\u3002\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,l.kt)("h3",{id:"installdevice"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.device")),(0,l.kt)("p",null,"\u7528\u4e8e\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf\u7684\u8bbe\u5907\u3002"),(0,l.kt)("h3",{id:"installsilent"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.silent")),(0,l.kt)("p",null,"\u4fdd\u7559\u3002"),(0,l.kt)("h3",{id:"installiso_url"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.iso_url")),(0,l.kt)("p",null,"\u5982\u679c\u4ece kernel/vmlinuz \u800c\u4e0d\u662f ISO \u542f\u52a8\uff0c\u5219\u4ece\u8fd9\u4e2a ISO \u4e0b\u8f7d\u548c\u5b89\u88c5\u3002"),(0,l.kt)("h3",{id:"installpoweroff"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.poweroff")),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\u5173\u95ed\u673a\u5668\uff0c\u800c\u4e0d\u662f\u91cd\u542f\u673a\u5668\u3002"),(0,l.kt)("h3",{id:"installno_format"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.no_format")),(0,l.kt)("p",null,"\u5982\u679c\u5e03\u5c40\u5df2\u7ecf\u5b58\u5728\uff0c\u4e0d\u8fdb\u884c\u5206\u533a\u548c\u683c\u5f0f\u5316\u3002"),(0,l.kt)("h3",{id:"installdebug"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.debug")),(0,l.kt)("p",null,"\u4e3a\u5b89\u88c5\u7684\u7cfb\u7edf\u542f\u7528\u65e5\u5fd7\u7ba1\u7406\u548c\u8c03\u8bd5\u6765\u8fd0\u884c\u5b89\u88c5\u3002"),(0,l.kt)("h3",{id:"installtty"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.tty")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-14"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u7528\u4e8e\u63a7\u5236\u53f0\u7684 tty \u8bbe\u5907\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-13"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  tty: ttyS0,115200n8\n")),(0,l.kt)("h3",{id:"installvip"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.vip")),(0,l.kt)("h3",{id:"installvip_mode"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.vip_mode")),(0,l.kt)("h3",{id:"installvip_hw_addr"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.vip_hw_addr")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-15"},"\u5b9a\u4e49"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install.vip"),"\uff1aHarvester \u7ba1\u7406 endpoint \u7684 VIP\u3002\u5b89\u88c5\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 URL ",(0,l.kt)("inlineCode",{parentName:"li"},"https://<VIP>")," \u8bbf\u95ee Harvester GUI\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install.vip_mode"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dhcp"),"\uff1aHarvester \u4f1a\u53d1\u9001 DHCP \u8bf7\u6c42\u6765\u83b7\u53d6 VIP\u3002\u9700\u8981\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"install.vip_hw_addr")," \u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"static"),"\uff1aHarvester \u4f7f\u7528\u9759\u6001 VIP\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install.vip_hw_addr"),"\uff1a\u4e0e VIP \u5bf9\u5e94\u7684\u786c\u4ef6\u5730\u5740\u3002\u7528\u6237\u9700\u8981\u914d\u7f6e\u672c\u5730\u7684 DHCP \u670d\u52a1\u5668\u6765\u63d0\u4f9b\u914d\u7f6e\u7684 VIP\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"install.vip_mode")," \u8bbe\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"dhcp")," \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u8be5\u5b57\u6bb5\u3002")),(0,l.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/v1.1/install/management-address"},"\u7ba1\u7406\u5730\u5740"),"\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-14"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u914d\u7f6e\u9759\u6001 VIP\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  vip: 192.168.0.100\n  vip_mode: static\n")),(0,l.kt)("p",null,"\u914d\u7f6e DHCP VIP\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  vip: 10.10.0.19\n  vip_mode: dhcp\n  vip_hw_addr: 52:54:00:ec:0e:0b\n")),(0,l.kt)("h3",{id:"installforce_mbr"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.force_mbr")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-16"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester \u5728 UEFI \u548c BIOS \u7cfb\u7edf\u4e0a\u90fd\u4f7f\u7528 GPT \u5206\u533a\u65b9\u6848\u3002\n\u4f46\u662f\uff0c\u5982\u679c\u4f60\u9047\u5230\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u53ef\u4ee5\u5728 BIOS \u7cfb\u7edf\u4e0a\u5f3a\u5236\u4f7f\u7528 MBR \u5206\u533a\u65b9\u6848\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,l.kt)("a",{parentName:"p",href:"#installdata_disk"},(0,l.kt)("inlineCode",{parentName:"a"},"install.data_disk"))," \u914d\u7f6e\u7684\u5b58\u50a8\u8bbe\u5907\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"#installdevice"},(0,l.kt)("inlineCode",{parentName:"a"},"install.device"))," \u76f8\u540c\uff0cHarvester \u4f1a\u521b\u5efa\u4e00\u4e2a\u989d\u5916\u7684\u5206\u533a\u6765\u5b58\u50a8 VM \u6570\u636e\u3002\n\u5728\u5f3a\u5236\u4f7f\u7528 MBR \u65f6\uff0c\u4e0d\u4f1a\u521b\u5efa\u989d\u5916\u7684\u5206\u533a\uff0c\u800c\u4e14\u865a\u62df\u673a\u6570\u636e\u5c06\u5b58\u50a8\u5728\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u6570\u636e\u5171\u4eab\u7684\u5206\u533a\u4e2d\u3002")),(0,l.kt)("h4",{id:"\u793a\u4f8b-15"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  force_mbr: true\n")),(0,l.kt)("h3",{id:"installdata_disk"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.data_disk")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u4ece v1.0.1 \u8d77\u53ef\u7528")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-17"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u9ed8\u8ba4\u5b58\u50a8\u8bbe\u5907\u6765\u5b58\u50a8 VM \u6570\u636e\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"#installdevice"},(0,l.kt)("inlineCode",{parentName:"a"},"install.device"))," \u8bbe\u7f6e\u7684\u5b58\u50a8\u8bbe\u5907\u76f8\u540c"),(0,l.kt)("h4",{id:"\u793a\u4f8b-16"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  data_disk: /dev/sdb\n")),(0,l.kt)("h3",{id:"system_settings"},(0,l.kt)("inlineCode",{parentName:"h3"},"system_settings")),(0,l.kt)("h4",{id:"\u5b9a\u4e49-18"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"system_settings")," \u8986\u76d6\u9ed8\u8ba4\u7684 Harvester \u7cfb\u7edf\u8bbe\u7f6e\u3002\n\u6709\u5173\u5176\u4ed6\u4fe1\u606f\u548c\u6240\u6709\u9009\u9879\u7684\u5217\u8868\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/v1.1/advanced/settings"},"\u8bbe\u7f6e"),"\u9875\u9762\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4ec5\u5f53 Harvester \u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")," \u6a21\u5f0f\u5b89\u88c5\u65f6\uff0c\u8986\u76d6\u7cfb\u7edf\u8bbe\u7f6e\u624d\u6709\u6548\u3002\n\u5982\u679c\u4f60\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"join")," \u6a21\u5f0f\u5b89\u88c5 Harvester\uff0c\u5219\u4f1a\u5ffd\u7565\u6b64\u8bbe\u7f6e\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"join")," \u6a21\u5f0f\u5b89\u88c5\u4f1a\u91c7\u7528\u73b0\u6709 Harvester \u7cfb\u7edf\u7684\u8bbe\u7f6e\u3002")),(0,l.kt)("h4",{id:"\u793a\u4f8b-17"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u8986\u76d6\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"containerd-registry"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"http-proxy")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ui-source")," \u7684\u8bbe\u7f6e\u3002\u503c\u5fc5\u987b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'system_settings:\n  containerd-registry: \'{"Mirrors": {"docker.io": {"Endpoints": ["https://myregistry.local:5000"]}}, "Configs": {"myregistry.local:5000": {"Auth": {"Username": "testuser", "Password": "testpassword"}, "TLS": {"InsecureSkipVerify": false}}}}\'\n  http-proxy: \'{"httpProxy": "http://my.proxy", "httpsProxy": "https://my.proxy", "noProxy": "some.internal.svc"}\'\n  ui-source: auto\n')))}m.isMDXComponent=!0}}]);