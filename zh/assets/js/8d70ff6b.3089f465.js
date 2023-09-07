"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4704],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return t?r.createElement(g,o(o({ref:a},c),{},{components:t})):r.createElement(g,o({ref:a},c))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<n;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87174:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const n={sidebar_position:5,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],Description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},o=void 0,s={unversionedId:"upload-image",id:"version-v0.3/upload-image",title:"Upload Images",description:"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes.",source:"@site/versioned_docs/version-v0.3/upload-image.md",sourceDirName:".",slug:"/upload-image",permalink:"/zh/v0.3/upload-image",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/upload-image.md",tags:[],version:"v0.3",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],Description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},sidebar:"tutorialSidebar",previous:{title:"Upgrading Harvester",permalink:"/zh/v0.3/upgrade"},next:{title:"Host Management",permalink:"/zh/v0.3/host/"}},l={},p=[{value:"Upload Images via URL",id:"upload-images-via-url",level:3},{value:"Upload Images via Local File",id:"upload-images-via-local-file",level:3},{value:"Create Images via Volumes",id:"create-images-via-volumes",level:3}],c={toc:p},m="wrapper";function u(e){let{components:a,...n}=e;return(0,i.kt)(m,(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes."),(0,i.kt)("h3",{id:"upload-images-via-url"},"Upload Images via URL"),(0,i.kt)("p",null,"To import virtual machine images in the ",(0,i.kt)("strong",{parentName:"p"},"Images")," page, enter a URL that can be accessed from the cluster. Description and labels are optional."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image name will be auto-filled using the URL address's filename. You can customize the image name at any time.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(72873).Z,width:"3358",height:"1118"})),(0,i.kt)("h3",{id:"upload-images-via-local-file"},"Upload Images via Local File"),(0,i.kt)("p",null,"Currently, qcow2, raw, and ISO images are supported."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Please do not refresh the page until the file upload is finished."),(0,i.kt)("li",{parentName:"ul"},"This feature is temporarily unusable on the single cluster UI and will be fixed via ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/1415"},"#1415"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(19784).Z,width:"3358",height:"1110"})),(0,i.kt)("h3",{id:"create-images-via-volumes"},"Create Images via Volumes"),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"Volumes")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Export Image"),". Enter image name to create image."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(23957).Z,width:"3348",height:"1504"})))}u.isMDXComponent=!0},23957:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/export-image-2bfeb6369e6b56cc144acea8467c0628.png"},19784:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/upload-image-local-7ba461f1cd94e42e19b12aabfaa3f287.png"},72873:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/upload-image-f8e52b3aefcfc7e02dc2c78cc2e1817f.png"}}]);