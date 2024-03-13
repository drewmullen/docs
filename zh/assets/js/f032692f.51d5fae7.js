(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6933],{1807:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>h.z,ErrorBoundaryError:()=>N.aG,ErrorBoundaryTryAgainButton:()=>N.Cw,ErrorCauseBoundary:()=>N.QW,HtmlClassNameProvider:()=>w.FG,NavbarSecondaryMenuFiller:()=>_.Zo,PageMetadata:()=>w.d,ReactContextError:()=>b.i6,SkipToContentFallbackId:()=>O.u,SkipToContentLink:()=>O.l,ThemeClassNames:()=>v.k,composeProviders:()=>b.Qc,createStorageSlot:()=>n.WA,duplicates:()=>I.l,filterDocCardListItems:()=>s.MN,isMultiColumnFooterLinks:()=>L.a,isRegexpStringMatch:()=>S.F,listStorageKeys:()=>n._f,listTagsByLetters:()=>T,prefersReducedMotion:()=>g.n,processAdmonitionProps:()=>F,translateTagsPageTitle:()=>E,uniq:()=>I.j,useCollapsible:()=>h.u,useColorMode:()=>y.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>s.jA,useDocsPreferredVersion:()=>j.J,useEvent:()=>b.zX,useIsomorphicLayoutEffect:()=>b.LI,usePluralForm:()=>m,usePrevious:()=>b.D9,usePrismTheme:()=>R.p,useSearchLinkCreator:()=>P,useSearchQueryString:()=>M,useStorageSlot:()=>n.Nk,useThemeConfig:()=>r.L,useWindowSize:()=>k.i});var r=o(20107),n=o(92560),a=o(60246),s=o(78259),i=o(67294),l=o(39962),u=o(25108);const c=["zero","one","two","few","many","other"];function d(e){return c.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function f(){const{i18n:{currentLocale:e}}=(0,l.default)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:d(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return u.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),p}}),[e])}function m(){const e=f();return{selectMessage:(t,o)=>function(e,t,o){const r=e.split("|");if(1===r.length)return r[0];r.length>o.pluralForms.length&&u.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=o.select(t),a=o.pluralForms.indexOf(n);return r[Math.min(a,r.length-1)]}(o,t,e)}}var h=o(54639),v=o(23702),g=o(58986),b=o(43768),w=o(79488),y=o(9200),_=o(53086),k=o(13488),C=o(97325);const E=()=>(0,C.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function T(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);t[o]??=[],t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[r]=t;return o.localeCompare(r)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var x=o(75238);const A="q";function M(){return(0,x.Nc)(A)}function P(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,l.default)(),{algolia:{searchPagePath:o}}=t;return(0,i.useCallback)((t=>`${e}${o}?${A}=${encodeURIComponent(t)}`),[e,o])}var L=o(42605),S=o(61500),I=o(33609),R=o(4779),j=o(86409);function F(e){const{mdxAdmonitionTitle:t,rest:o}=function(e){const t=i.Children.toArray(e),o=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=i.createElement(i.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o?.props.children,rest:r}}(e.children),r=e.title??t;return{...e,...r&&{title:r},children:o}}var O=o(51515),N=o(12303)},73071:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(o(67294)),a=r(o(93162));t.default=function(e){let{url:t,proxy:o}=e;return n.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},n.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),n.default.createElement("ul",{className:"export-dropdown dropdown__menu"},n.default.createElement("li",null,n.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},79518:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(o(67294)),a=o(1807),s=r(o(79524)),i=r(o(7909));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:r}=e,l=()=>"dark"===t?r?.altText??o?.altText:o?.altText,u=(0,s.default)(o?.url),c=(0,s.default)(r?.url);return o&&r?n.default.createElement(i.default,{alt:l(),sources:{light:u,dark:c},className:"openapi__logo"}):o||r?n.default.createElement(i.default,{alt:l(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},62293:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));o(79518),o(65254),o(18679),o(73071);const a={id:"harvester-apis",title:"Harvester APIs",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},s=void 0,i={unversionedId:"api/harvester-apis",id:"version-v1.2/api/harvester-apis",title:"Harvester APIs",description:"",source:"@site/versioned_docs/version-v1.2/api/harvester-apis.info.mdx",sourceDirName:"api",slug:"/api/harvester-apis",permalink:"/zh/v1.2/api/harvester-apis",draft:!1,editUrl:null,tags:[],version:"v1.2",sidebarPosition:0,frontMatter:{id:"harvester-apis",title:"Harvester APIs",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"api",previous:{title:"API",permalink:"/zh/v1.2/category/api"},next:{title:"List Persistent Volume Claims",permalink:"/zh/v1.2/api/list-namespaced-persistent-volume-claim"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: v1beta1"),(0,n.kt)("h1",{className:"openapi__heading"},"Harvester APIs"),(0,n.kt)("p",null,"This section introduces the APIs of the Harvester server. You can find out more about Harvester's API definitions ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/tree/master/pkg/apis/harvesterhci.io"},"here"),"."))}p.isMDXComponent=!0},93162:function(e,t,o){var r,n,a,s=o(25108);n=[],void 0===(a="function"==typeof(r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,o){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){u(r.response,t,o)},r.onerror=function(){s.error("could not download file")},r.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):n(l.href)?r(e,t,o):a(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,s){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),o);else if(n(e))r(e,o,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,o);var a="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&s||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=u.saveAs=u,e.exports=u})?r.apply(t,n):r)||(e.exports=a)}}]);