import{r as h,c as fe,j as k,L as be}from"./index-CKFi-Cqu.js";import{P as ge}from"./PageNav-CDLDYpMp.js";import"./Logo-BJaTa4Vi.js";function T(){return T=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},T.apply(this,arguments)}function me(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function he(...e){return r=>e.forEach(t=>me(t,r))}const se=h.forwardRef((e,r)=>{const{children:t,...o}=e,i=h.Children.toArray(t),n=i.find(xe);if(n){const s=n.props.children,l=i.map(u=>u===n?h.Children.count(s)>1?h.Children.only(null):h.isValidElement(s)?s.props.children:null:u);return h.createElement(U,T({},o,{ref:r}),h.isValidElement(s)?h.cloneElement(s,void 0,l):null)}return h.createElement(U,T({},o,{ref:r}),t)});se.displayName="Slot";const U=h.forwardRef((e,r)=>{const{children:t,...o}=e;return h.isValidElement(t)?h.cloneElement(t,{...ve(o,t.props),ref:r?he(r,t.ref):t.ref}):h.Children.count(t)>1?h.Children.only(null):null});U.displayName="SlotClone";const ye=({children:e})=>h.createElement(h.Fragment,null,e);function xe(e){return h.isValidElement(e)&&e.type===ye}function ve(e,r){const t={...r};for(const o in r){const i=e[o],n=r[o];/^on[A-Z]/.test(o)?i&&n?t[o]=(...l)=>{n(...l),i(...l)}:i&&(t[o]=i):o==="style"?t[o]={...i,...n}:o==="className"&&(t[o]=[i,n].filter(Boolean).join(" "))}return{...e,...t}}function ie(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=ie(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function we(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=ie(e))&&(o&&(o+=" "),o+=r);return o}const re=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,te=we,ke=(e,r)=>t=>{var o;if((r==null?void 0:r.variants)==null)return te(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:n}=r,s=Object.keys(i).map(c=>{const d=t==null?void 0:t[c],b=n==null?void 0:n[c];if(d===null)return null;const y=re(d)||re(b);return i[c][y]}),l=t&&Object.entries(t).reduce((c,d)=>{let[b,y]=d;return y===void 0||(c[b]=y),c},{}),u=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,d)=>{let{class:b,className:y,...x}=d;return Object.entries(x).every(C=>{let[g,m]=C;return Array.isArray(m)?m.includes({...n,...l}[g]):{...n,...l}[g]===m})?[...c,b,y]:c},[]);return te(e,s,u,t==null?void 0:t.class,t==null?void 0:t.className)},H="-";function Ce(e){const r=Se(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function i(s){const l=s.split(H);return l[0]===""&&l.length!==1&&l.shift(),le(l,r)||ze(s)}function n(s,l){const u=t[s]||[];return l&&o[s]?[...u,...o[s]]:u}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function le(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?le(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const n=e.join(H);return(s=r.validators.find(({validator:l})=>l(n)))==null?void 0:s.classGroupId}const oe=/^\[(.+)\]$/;function ze(e){if(oe.test(e)){const r=oe.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function Se(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return je(Object.entries(e.classGroups),t).forEach(([n,s])=>{F(s,o,n,r)}),o}function F(e,r,t,o){e.forEach(i=>{if(typeof i=="string"){const n=i===""?r:ne(r,i);n.classGroupId=t;return}if(typeof i=="function"){if(Ae(i)){F(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([n,s])=>{F(s,ne(r,n),t,o)})})}function ne(e,r){let t=e;return r.split(H).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function Ae(e){return e.isThemeGetter}function je(e,r){return r?e.map(([t,o])=>{const i=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[r+s,l])):n);return[t,i]}):e}function Me(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function i(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return i(n,s),s},set(n,s){t.has(n)?t.set(n,s):i(n,s)}}}const ae="!";function Ee(e){const r=e.separator,t=r.length===1,o=r[0],i=r.length;return function(s){const l=[];let u=0,c=0,d;for(let g=0;g<s.length;g++){let m=s[g];if(u===0){if(m===o&&(t||s.slice(g,g+i)===r)){l.push(s.slice(c,g)),c=g+i;continue}if(m==="/"){d=g;continue}}m==="["?u++:m==="]"&&u--}const b=l.length===0?s:s.substring(c),y=b.startsWith(ae),x=y?b.substring(1):b,C=d&&d>c?d-c:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:C}}}function Pe(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function $e(e){return{cache:Me(e.cacheSize),splitModifiers:Ee(e),...Ce(e)}}const Re=/\s+/;function Ge(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,n=new Set;return e.trim().split(Re).map(s=>{const{modifiers:l,hasImportantModifier:u,baseClassName:c,maybePostfixModifierPosition:d}=t(s);let b=o(d?c.substring(0,d):c),y=!!d;if(!b){if(!d)return{isTailwindClass:!1,originalClassName:s};if(b=o(c),!b)return{isTailwindClass:!1,originalClassName:s};y=!1}const x=Pe(l).join(":");return{isTailwindClass:!0,modifierId:u?x+ae:x,classGroupId:b,originalClassName:s,hasPostfixModifier:y}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:l,classGroupId:u,hasPostfixModifier:c}=s,d=l+u;return n.has(d)?!1:(n.add(d),i(u,c).forEach(b=>n.add(l+b)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Ie(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ce(r))&&(o&&(o+=" "),o+=t);return o}function ce(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ce(e[o]))&&(t&&(t+=" "),t+=r);return t}function Ne(e,...r){let t,o,i,n=s;function s(u){const c=r.reduce((d,b)=>b(d),e());return t=$e(c),o=t.cache.get,i=t.cache.set,n=l,l(u)}function l(u){const c=o(u);if(c)return c;const d=Ge(u,t);return i(u,d),d}return function(){return n(Ie.apply(null,arguments))}}function p(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const de=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ve=/^\d+\/\d+$/,Te=new Set(["px","full","screen"]),Oe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Le=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,We=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,_e=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Be=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function w(e){return j(e)||Te.has(e)||Ve.test(e)}function S(e){return M(e,"length",Xe)}function j(e){return!!e&&!Number.isNaN(Number(e))}function V(e){return M(e,"number",j)}function $(e){return!!e&&Number.isInteger(Number(e))}function Ue(e){return e.endsWith("%")&&j(e.slice(0,-1))}function a(e){return de.test(e)}function A(e){return Oe.test(e)}const Fe=new Set(["length","size","percentage"]);function He(e){return M(e,Fe,ue)}function qe(e){return M(e,"position",ue)}const Ze=new Set(["image","url"]);function Je(e){return M(e,Ze,Ye)}function Ke(e){return M(e,"",Qe)}function R(){return!0}function M(e,r,t){const o=de.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Xe(e){return Le.test(e)&&!We.test(e)}function ue(){return!1}function Qe(e){return _e.test(e)}function Ye(e){return Be.test(e)}function De(){const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),i=p("borderColor"),n=p("borderRadius"),s=p("borderSpacing"),l=p("borderWidth"),u=p("contrast"),c=p("grayscale"),d=p("hueRotate"),b=p("invert"),y=p("gap"),x=p("gradientColorStops"),C=p("gradientColorStopPositions"),g=p("inset"),m=p("margin"),z=p("opacity"),v=p("padding"),q=p("saturate"),O=p("scale"),Z=p("sepia"),J=p("skew"),K=p("space"),X=p("translate"),L=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto",a,r],f=()=>[a,r],Q=()=>["",w,S],G=()=>["auto",j,a],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],I=()=>["solid","dashed","dotted","double","none"],D=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",a],ee=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>[j,V],N=()=>[j,a];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[w,S],blur:["none","",A,a],brightness:P(),borderColor:[e],borderRadius:["none","","full",A,a],borderSpacing:f(),borderWidth:Q(),contrast:P(),grayscale:E(),hueRotate:N(),invert:E(),gap:f(),gradientColorStops:[e],gradientColorStopPositions:[Ue,S],inset:_(),margin:_(),opacity:P(),padding:f(),saturate:P(),scale:P(),sepia:E(),skew:N(),space:f(),translate:f()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":ee()}],"break-before":[{"break-before":ee()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),a]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",$,a]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",$,a]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",$,a]},a]}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[$,a]},a]}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",A,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",V]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",j,V]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",w,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[z]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[z]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...I(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",w,S]}],"underline-offset":[{"underline-offset":["auto",w,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[z]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),qe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",He]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Je]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[z]}],"border-style":[{border:[...I(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[z]}],"divide-style":[{divide:I()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...I()]}],"outline-offset":[{"outline-offset":[w,a]}],"outline-w":[{outline:[w,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[z]}],"ring-offset-w":[{"ring-offset":[w,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,Ke]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[z]}],"mix-blend":[{"mix-blend":[...D(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",A,a]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[b]}],saturate:[{saturate:[q]}],sepia:[{sepia:[Z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[z]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[$,a]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[w,S,V]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const er=Ne(De);function rr(...e){return er(fe(e))}const tr=ke("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),pe=h.forwardRef(({className:e,variant:r,size:t,asChild:o=!1,...i},n)=>{const s=o?se:"button";return k.jsx(s,{className:rr(tr({variant:r,size:t,className:e})),ref:n,...i})});pe.displayName="Button";const or="_homepage_wr715_1",nr={homepage:or};function ar(){return k.jsxs("main",{className:nr.homepage,children:[k.jsx(ge,{}),k.jsxs("section",{children:[k.jsxs("h1",{children:["Discover new horizons.",k.jsx("br",{}),"Preserve your wanderlust-filled escapades."]}),k.jsx("h2",{children:"Explore the world on our digital map, tracing your path through countless cities. Invite friends to relive your global adventures together."}),k.jsx(be,{to:"/login",children:k.jsx(pe,{className:"cta bg-[#7f5539] hover:bg-[#7f5539] font-semibold h-[30px] hover:bg-opacity-60 text-3xl py-4",children:"Get started tracking."})})]})]})}export{ar as default};