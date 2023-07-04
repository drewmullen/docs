(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4865],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(95999),c=n(86668),s=n(39960);const i="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return a.createElement(t,(0,r.Z)({},m,{id:void 0}));const p=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return a.createElement(t,(0,r.Z)({},m,{className:(0,o.Z)("anchor",d?u:i,m.className),id:n}),m.children,a.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},52195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>he});var r=n(87462),a=n(67294),o=n(35742);var l=n(72389),c=n(86010),s=n(92949),i=n(86668);function u(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var m=n(35281),d=n(87594),p=n.n(d);const f=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,v={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:r}=v[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&h.test(o)){const e=o.match(h).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(v),t)}}(r,a),c=n.split("\n"),s=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:u[t]?s[u[t]].start=p:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const d={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const y="codeBlockContainer_Ckt0";function E(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,a]=e;const o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(u());return a.createElement(t,(0,r.Z)({},n,{style:o,className:(0,c.Z)(n.className,y,m.k.common.codeBlock)}))}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return a.createElement(E,{as:"pre",tabIndex:0,className:(0,c.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:k.codeBlockLines},t))}var C=n(902);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{var t;r(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=L);const r=(0,C.zX)(t),o=(0,C.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var x={Prism:n(87410).Z,theme:T};function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}var O=/\r\n|\r|\n/,_=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},j=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},S=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=B({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=B({},n,{backgroundColor:null}),a};function H(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const I=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),Z(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?S(e.theme,e.language):void 0;return t.themeDict=n})),Z(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=B({},H(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?B({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),Z(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),Z(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=B({},H(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?B({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),Z(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=r[l]++)<a[l];){var i=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],i=m):(u=j(u,m.type),m.alias&&(u=j(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(O),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)_(c),s.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(i),r.push(0),a.push(i.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return _(c),s}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),A="codeLine_lJS_",V="codeLineNumber_Tfdd",P="codeLineContent_feaV";function z(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:l,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=l({line:t,className:(0,c.Z)(n,o&&A)}),u=t.map(((e,t)=>a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:V}),a.createElement("span",{className:P},u)):u,a.createElement("br",null))}var M=n(95999);const D={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[r,o]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),s=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":r?(0,M.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,D.copyButton,r&&D.copyButtonCopied),onClick:s},a.createElement("span",{className:D.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:D.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:D.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const $="wordWrapButtonIcon_Bwma",q="wordWrapButtonEnabled_EoeP";function W(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,M.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,r&&q),"aria-label":o,title:o},a.createElement("svg",{className:$,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function U(e){let{children:t,className:n="",metastring:o,title:l,showLineNumbers:s,language:m}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,i.L)(),h=m??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??d,v=u(),g=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return w(o,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),y=function(e){var t;return(null==e||null==(t=e.match(f))?void 0:t.groups.title)??""}(o)||l,{lineClassNames:N,code:C}=b(t,{metastring:o,language:h,magicComments:p}),L=s??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return a.createElement(E,{as:"div",className:(0,c.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},y&&a.createElement("div",{className:k.codeBlockTitle},y),a.createElement("div",{className:k.codeBlockContent},a.createElement(I,(0,r.Z)({},x,{theme:v,code:C,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,c.Z)(t,k.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,c.Z)(k.codeBlockLines,L&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(z,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:N[t],showLineNumbers:L})))))})),a.createElement("div",{className:k.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&a.createElement(W,{className:k.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),a.createElement(R,{className:k.codeButton,code:C}))))}function F(e){let{children:t,...n}=e;const o=(0,l.Z)(),c=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?U:N;return a.createElement(s,(0,r.Z)({key:String(o)},n),c)}var Y=n(39960);var G=n(86043);const X="details_lb9f",J="isBrowser_bmU9",K="collapsibleContent_i85q";function Q(e){return!!e&&("SUMMARY"===e.tagName||Q(e.parentElement))}function ee(e,t){return!!e&&(e===t||ee(e.parentElement,t))}function te(e){let{summary:t,children:n,...o}=e;const s=(0,l.Z)(),i=(0,a.useRef)(null),{collapsed:u,setCollapsed:m}=(0,G.u)({initialState:!o.open}),[d,p]=(0,a.useState)(o.open);return a.createElement("details",(0,r.Z)({},o,{ref:i,open:d,"data-collapsed":u,className:(0,c.Z)(X,s&&J,o.className),onMouseDown:e=>{Q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Q(t)&&ee(t,i.current)&&(e.preventDefault(),u?(m(!1),p(!0)):m(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(G.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},a.createElement("div",{className:K},n)))}const ne="details_b_Ee";function re(e){let{...t}=e;return a.createElement(te,(0,r.Z)({},t,{className:(0,c.Z)("alert alert--info",ne,t.className)}))}var ae=n(92503);function oe(e){return a.createElement(ae.Z,e)}const le="containsTaskList_mC6p";const ce="img_ev3q";const se="admonition_LlT9",ie="admonitionHeading_tbUL",ue="admonitionIcon_kALy",me="admonitionContent_S0QG";const de={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(M.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(M.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(M.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(M.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(M.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},pe={secondary:"note",important:"info",success:"tip",warning:"danger"};function fe(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const he={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(o.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(F,e)},a:function(e){return a.createElement(Y.Z,e)},pre:function(e){var t;return a.createElement(F,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(re,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&le))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,ce))}));var t},h1:e=>a.createElement(oe,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(oe,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(oe,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(oe,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(oe,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(oe,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:o}=fe(e),l=function(e){const t=pe[e]??e;return de[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),de.info)}(n),s=r??l.label,{iconComponent:i}=l,u=o??a.createElement(i,null);return a.createElement("div",{className:(0,c.Z)(m.k.common.admonition,m.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,se)},a.createElement("div",{className:ie},a.createElement("span",{className:ue},u),s),a.createElement("div",{className:me},t))},mermaid:()=>null}},45042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(3905),o=n(31769);function l(e){let{children:t}=e;return r.createElement(a.Zo,{components:o.Z},t)}},39407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(87462),a=n(67294),o=n(86010),l=n(93743);const c="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar",t)},a.createElement(l.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),o=n(86668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,a.useRef)(void 0),n=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=i(c,{anchorTopOffset:n.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:r,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const p=a.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:d,...f}=e;const h=(0,o.L)(),v=u??h.tableOfContents.minHeadingLevel,g=d??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return m((0,a.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:v,maxHeadingLevel:g}}),[s,i,v,g])),a.createElement(p,(0,r.Z)({toc:b,className:n,linkClassName:s},f))}},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),c=n(76775),s=n(91980),i=n(67392),u=n(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,i]=f({queryString:n,groupId:r}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var v=n(72389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==c&&(m(t),s(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":c===t})}),n??t)})))}function E(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(E,(0,r.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);