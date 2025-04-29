(()=>{var t,e,s={485:(t,e,s)=>{var r={"./de.js":[988,988],"./en.js":[884,884],"./sk.js":[925,925]};function i(t){if(!s.o(r,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return s.e(e[1]).then((()=>s(i)))}i.keys=()=>Object.keys(r),i.id=485,t.exports=i}},r={};function i(t){var e=r[t];if(void 0!==e)return e.exports;var o=r[t]={exports:{}};return s[t](o,o.exports,i),o.exports}i.m=s,i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,s)=>(i.f[s](t,e),e)),[])),i.u=t=>t+".addons-widget.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="abra-flexi-addons-widget:",i.l=(s,r,o,n)=>{if(t[s])t[s].push(r);else{var a,l;if(void 0!==o)for(var h=document.getElementsByTagName("script"),d=0;d<h.length;d++){var c=h[d];if(c.getAttribute("src")==s||c.getAttribute("data-webpack")==e+o){a=c;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",e+o),a.src=s),t[s]=[r];var u=(e,r)=>{a.onerror=a.onload=null,clearTimeout(p);var i=t[s];if(delete t[s],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((t=>t(r))),e)return e(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var r=s.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=s[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{var t={792:0};i.f.j=(e,s)=>{var r=i.o(t,e)?t[e]:void 0;if(0!==r)if(r)s.push(r[2]);else{var o=new Promise(((s,i)=>r=t[e]=[s,i]));s.push(r[2]=o);var n=i.p+i.u(e),a=new Error;i.l(n,(s=>{if(i.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var o=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",a.name="ChunkLoadError",a.type=o,a.request=n,r[1](a)}}),"chunk-"+e,e)}};var e=(e,s)=>{var r,o,[n,a,l]=s,h=0;if(n.some((e=>0!==t[e]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(l)l(i)}for(e&&e(s);h<n.length;h++)o=n[h],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0},s=self.webpackChunkabra_flexi_addons_widget=self.webpackChunkabra_flexi_addons_widget||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),(()=>{"use strict";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class o{constructor(t,e,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=r.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(s,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return new o(r,t,s)},a=(s,r)=>{if(e)s.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of r){const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:h,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,f=globalThis,_=f.trustedTypes,m=_?_.emptyScript:"",v=f.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,e)=>!h(t,e),A={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const o=r?.call(this);i?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){const i=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=s.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=r,this[r]=i.fromAttribute(e,t.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const r=this.constructor,i=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??b)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==i||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,s,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[$("elementProperties")]=new Map,w[$("finalized")]=new Map,v?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=globalThis,S=E.trustedTypes,P=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+x,T=`<${k}>`,O=document,U=()=>O.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,j=t=>L(t)||"function"==typeof t?.[Symbol.iterator],R="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,z=/>/g,B=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,V=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),F=V(1),W=(V(2),V(3),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),K=new WeakMap,Z=O.createTreeWalker(O,129);function Q(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,r=[];let i,o=2===e?"<svg>":3===e?"<math>":"",n=M;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===M?"!--"===l[1]?n=H:void 0!==l[1]?n=z:void 0!==l[2]?(q.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=B):void 0!==l[3]&&(n=B):n===B?">"===l[0]?(n=i??M,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?B:'"'===l[3]?I:D):n===I||n===D?n=B:n===H||n===z?n=M:(n=B,i=void 0);const c=n===B&&t[e+1].startsWith("/>")?" ":"";o+=n===M?s+T:h>=0?(r.push(a),s.slice(0,h)+C+s.slice(h)+x+c):s+x+(-2===h?e:c)}return[Q(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class X{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0;const n=t.length-1,a=this.parts,[l,h]=G(t,e);if(this.el=X.createElement(l,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Z.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(C)){const e=h[o++],s=r.getAttribute(t).split(x),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:n[2],strings:s,ctor:"."===n[1]?rt:"?"===n[1]?it:"@"===n[1]?ot:st}),r.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:i}),r.removeAttribute(t));if(q.test(r.tagName)){const t=r.textContent.split(x),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],U()),Z.nextNode(),a.push({type:2,index:++i});r.append(t[e],U())}}}else if(8===r.nodeType)if(r.data===k)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(x,t+1));)a.push({type:7,index:i}),t+=x.length-1}i++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,r){if(e===W)return e;let i=void 0!==r?s._$Co?.[r]:s._$Cl;const o=N(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,s,r)),void 0!==r?(s._$Co??=[])[r]=i:s._$Cl=i),void 0!==i&&(e=Y(t,i._$AS(t,e.values),i,r)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??O).importNode(e,!0);Z.currentNode=r;let i=Z.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new nt(i,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(i=Z.nextNode(),o++)}return Z.currentNode=O,r}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):j(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(Q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new X(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new et(this.O(U()),this.O(U()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}_$AI(t,e=this,s,r){const i=this.strings;let o=!1;if(void 0===i)t=Y(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const r=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=Y(this,r[s+n],e,n),a===W&&(a=this._$AH[n]),o||=!N(a)||a!==this._$AH[n],a===J?t=J:t!==J&&(t+=(a??"")+i[n+1]),this._$AH[n]=a}o&&!r&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class it extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class ot extends st{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??J)===W)return;const s=this._$AH,r=t===J&&s!==J||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==J&&(s===J||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at={M:C,P:x,A:k,C:1,L:G,R:tt,D:j,V:Y,I:et,H:st,N:it,U:ot,B:rt,F:nt},lt=E.litHtmlPolyfillSupport;lt?.(X,et),(E.litHtmlVersions??=[]).push("3.3.0");const ht=globalThis;class dt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const r=s?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=s?.renderBefore??null;r._$litPart$=i=new et(e.insertBefore(U(),t),t,void 0,s??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}dt._$litElement$=!0,dt.finalized=!0,ht.litElementHydrateSupport?.({LitElement:dt});const ct=ht.litElementPolyfillSupport;ct?.({LitElement:dt});(ht.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut=Symbol();class pt{get taskComplete(){return this.t||(1===this.i?this.t=new Promise(((t,e)=>{this.o=t,this.h=e})):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,s){this.p=0,this.i=0,(this._=t).addController(this);const r="object"==typeof e?e:{task:e,args:s};this.v=r.task,this.j=r.args,this.m=r.argsEqual??gt,this.k=r.onComplete,this.A=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.u=r.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||void 0===t||void 0!==e&&this.m(e,t)||await this.run(t)}async run(t){let e,s;t??=this.T(),this.O=t,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this._.requestUpdate())):this._.requestUpdate();const r=++this.p;this.q=new AbortController;let i=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(t){i=!0,s=t}if(this.p===r){if(e===ut)this.i=0;else{if(!1===i){try{this.k?.(e)}catch{}this.i=2,this.o?.(e)}else{try{this.A?.(s)}catch{}this.i=3,this.h?.(s)}this.u=e,this.l=s}this._.requestUpdate()}}abort(t){1===this.i&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}}const gt=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!b(t,e[s]))),ft=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},_t={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},mt=(t=_t,e,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===r){const{name:r}=s;return{set(s){const i=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];e.call(this,s),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)};function vt(t){return(e,s)=>"object"==typeof s?mt(t,e,s):((t,e,s)=>{const r=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function $t(t){return vt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt=2;class bt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:At}=at,wt=()=>document.createComment(""),Et=(t,e,s)=>{const r=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=r.insertBefore(wt(),i),o=r.insertBefore(wt(),i);s=new At(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,n=o!==t;if(n){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==i||n){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,i),t=e}}}return s},St=(t,e,s=t)=>(t._$AI(e,s),t),Pt={},Ct=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},xt=(t,e,s)=>{const r=new Map;for(let i=e;i<=s;i++)r.set(t[i],i);return r},kt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends bt{constructor(t){if(super(t),t.type!==yt)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let r;void 0===s?s=e:void 0!==e&&(r=e);const i=[],o=[];let n=0;for(const e of t)i[n]=r?r(e,n):n,o[n]=s(e,n),n++;return{values:o,keys:i}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,r]){const i=(t=>t._$AH)(t),{values:o,keys:n}=this.dt(e,s,r);if(!Array.isArray(i))return this.ut=n,o;const a=this.ut??=[],l=[];let h,d,c=0,u=i.length-1,p=0,g=o.length-1;for(;c<=u&&p<=g;)if(null===i[c])c++;else if(null===i[u])u--;else if(a[c]===n[p])l[p]=St(i[c],o[p]),c++,p++;else if(a[u]===n[g])l[g]=St(i[u],o[g]),u--,g--;else if(a[c]===n[g])l[g]=St(i[c],o[g]),Et(t,l[g+1],i[c]),c++,g--;else if(a[u]===n[p])l[p]=St(i[u],o[p]),Et(t,i[c],i[u]),u--,p++;else if(void 0===h&&(h=xt(n,p,g),d=xt(a,c,u)),h.has(a[c]))if(h.has(a[u])){const e=d.get(n[p]),s=void 0!==e?i[e]:null;if(null===s){const e=Et(t,i[c]);St(e,o[p]),l[p]=e}else l[p]=St(s,o[p]),Et(t,i[c],s),i[e]=null;p++}else Ct(i[u]),u--;else Ct(i[c]),c++;for(;p<=g;){const e=Et(t,l[g+1]);St(e,o[p]),l[p++]=e}for(;c<=u;){const t=i[c++];null!==t&&Ct(t)}return this.ut=n,((t,e=Pt)=>{t._$AH=e})(t,l),W}}),Tt=(t,e,s)=>{let r=t[0];for(let i=1;i<t.length;i++)r+=e[s?s[i-1]:i-1],r+=t[i];return r},Ot=t=>{return"string"!=typeof(e=t)&&"strTag"in e?Tt(t.strings,t.values):t;var e};let Ut=Ot,Nt=!1;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lt="lit-localize-status";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class jt{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Lt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Lt,this.__litLocalizeEventHandler)}}const Rt=t=>t.addController(new jt(t));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Mt{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */
const Ht=[];for(let t=0;t<256;t++)Ht[t]=(t>>4&15).toString(16)+(15&t).toString(16);function zt(t,e){return(e?"h":"s")+function(t){let e=0,s=8997,r=0,i=33826,o=0,n=40164,a=0,l=52210;for(let h=0;h<t.length;h++)s^=t.charCodeAt(h),e=435*s,r=435*i,o=435*n,a=435*l,o+=s<<8,a+=i<<8,r+=e>>>16,s=65535&e,o+=r>>>16,i=65535&r,l=a+(o>>>16)&65535,n=65535&o;return Ht[l>>8]+Ht[255&l]+Ht[n>>8]+Ht[255&n]+Ht[i>>8]+Ht[255&i]+Ht[s>>8]+Ht[255&s]}("string"==typeof t?t:t.join(""))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bt=new WeakMap,Dt=new Map;function It(t,e,s){if(t){const r=s?.id??function(t){const e="string"==typeof t?t:t.strings;let s=Dt.get(e);void 0===s&&(s=zt(e,"string"!=typeof t&&!("strTag"in t)),Dt.set(e,s));return s}(e),i=t[r];if(i){if("string"==typeof i)return i;if("strTag"in i)return Tt(i.strings,e.values,i.values);{let t=Bt.get(i);return void 0===t&&(t=i.values,Bt.set(i,t)),{...i,values:t.map((t=>e.values[t]))}}}}return Ot(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function qt(t){window.dispatchEvent(new CustomEvent(Lt,{detail:t}))}let Vt,Ft,Wt,Jt,Kt,Zt="",Qt=new Mt;Qt.resolve();let Gt=0;const Xt=()=>Zt,Yt=t=>{if(t===(Vt??Zt))return Qt.promise;if(!Wt||!Jt)throw new Error("Internal error");if(!Wt.has(t))throw new Error("Invalid locale code");Gt++;const e=Gt;Vt=t,Qt.settled&&(Qt=new Mt),qt({status:"loading",loadingLocale:t});return(t===Ft?Promise.resolve({templates:void 0}):Jt(t)).then((s=>{Gt===e&&(Zt=t,Vt=void 0,Kt=s.templates,qt({status:"ready",readyLocale:t}),Qt.resolve())}),(s=>{Gt===e&&(qt({status:"error",errorLocale:t,errorMessage:s.toString()}),Qt.reject(s))})),Qt.promise},te=["de","en","sk"],ee=["cs","de","en","sk"];var se=function(t,e,s,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(o<3?i(n):o>3?i(e,s,n):i(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};let re=class extends dt{constructor(){super(...arguments),this.size=6}render(){return F`
        <div class="loader"></div>
        `}};re.styles=n`
        :host {
            font-family: var(--font-family, Arial, sans-serif);
            font-size: 0.9rem;
            --width-height: var(--size, 2em);
            --border-size: 0.3em;
        }

        .loader {
            width: var(--width-height);
            height: var(--width-height);
            border: var(--border-size) solid var(--background-color, #eee); 
            border-top: var(--border-size) solid var(--main-color, #fb4);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }
    `,se([vt({type:Number})],re.prototype,"size",void 0),re=se([ft("addons-loader")],re);var ie=function(t,e,s,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(o<3?i(n):o>3?i(e,s,n):i(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},oe=function(t,e,s,r){return new(s||(s=Promise))((function(i,o){function n(t){try{l(r.next(t))}catch(t){o(t)}}function a(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,a)}l((r=r.apply(t,e||[])).next())}))};const ne=new Map(te.map((t=>[t,i(485)(`./${t}.js`)]))),{getLocale:ae,setLocale:le}=(he={sourceLocale:"cs",targetLocales:te,loadLocale:t=>oe(void 0,void 0,void 0,(function*(){return ne.get(t)}))},function(t){if(Nt)throw new Error("lit-localize can only be configured once");Ut=t,Nt=!0}(((t,e)=>It(Kt,t,e))),Zt=Ft=he.sourceLocale,Wt=new Set(he.targetLocales),Wt.add(he.sourceLocale),Jt=he.loadLocale,{getLocale:Xt,setLocale:Yt});var he;let de=class extends dt{constructor(){super(),this._categories=[],this._currentAddons=[],this._addonsPageNum=0,this._addonsTotalPages=0,this._widgetState="overview",this._selectedAddon=null,this._selectedCategory=null,this._searchPhrase="",this._selectedLocale=ae(),this.addonsPerPage=8,this._TaskLocales=new pt(this,{task:t=>oe(this,[t],void 0,(function*([t]){t!==ae()&&ee.forEach((e=>oe(this,void 0,void 0,(function*(){if(t===e)return yield le(t),void this.requestUpdate()}))))})),args:()=>[this._selectedLocale]}),this._TaskCategories=new pt(this,{task:(t,e)=>oe(this,[t,e],void 0,(function*([],{signal:t}){const e=new URL("https://support.flexibee.eu/api/categories"),s=new Request(e),r=yield fetch(s,{signal:t});if(!r.ok)throw new Error(r.status.toString());const i=yield r.json();return console.log(i),i})),args:()=>[]}),this._addons=new pt(this,{task:(t,e)=>oe(this,[t,e],void 0,(function*([t,e,s,r,i],{signal:o}){let n=new URL("https://support.flexibee.eu/api/addons/search");n.searchParams.append("langOpt",t),e&&n.searchParams.append("categoryId",e.toString()),n.searchParams.append("page",s.toString()),n.searchParams.append("size",r.toString()),i&&n.searchParams.append("search",i);const a=new Request(n),l=yield fetch(a,{signal:o});if(!l.ok)throw new Error(l.status.toString());const h=yield l.json();return console.log(h),this._addonsTotalPages=h.totalPages,this._currentAddons=h.content,h})),args:()=>[this._selectedLocale,this._selectedCategory,this._addonsPageNum,this.addonsPerPage,this._searchPhrase]}),this._TaskCategories.run(),this._TaskCategories.taskComplete.then((t=>{this._categories=t||[]})).catch((t=>{console.error("Failed to fetch categories:",t),this._categories=[]}))}_goBack(){this._widgetState="overview"}_goToDetail(t){this._selectedAddon=t,this._widgetState="detail"}_updateCategory(t){this._addonsPageNum=0,this._selectedCategory=parseInt(t.target.value)}_resetSearch(){this._addonsPageNum=0,this.shadowRoot.getElementById("search").value="",this._searchPhrase=""}_search(){this._addonsPageNum=0,this._searchPhrase=this.shadowRoot.getElementById("search").value}_removeStyles(t){Array.from(t.getElementsByTagName("style")).forEach((t=>{var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),Array.from(t.getElementsByTagName("*")).forEach((t=>{t.removeAttribute("style"),t.removeAttribute("color")}))}_retrievePerex(t){const e=document.createElement("p");return e.innerHTML=t.perex,this._removeStyles(e),e}_localeChanged(t){this._selectedLocale=t.target.value}_localeCategoryName(t){switch(this._selectedLocale){case"cs":default:return t.nameCs;case"sk":return t.nameSk;case"en":return t.nameEn;case"de":return t.nameDe}}_searchOnEnter(t){"Enter"===t.key&&this._search()}_renderHeader(){return F`
            <header class="panel">
                ${"detail"==this._widgetState?F`
                <button id="buttonBack" @click="${this._goBack}">${Ut("Zpět",{id:"buttonBack"})}</button>
                <h1 class='centered'>Název doplňku</h1>
                `:F`
                <h1 class='centered'>${Ut("Doplňky ABRA Flexi",{id:"title"})}</h1>
                <div id='searchFilters'>
                    <label for='selectCategory'>${Ut("Kategorie",{id:"labelCategory"})}
                        <select id='selectCategory' @change="${this._updateCategory}">
                            <option value="">--${Ut("Všechny",{id:"optionAll"})}--</option>
                    ${this._categories.map((t=>F`
                        <option value="${t.id}" ?selected="${t.id===this._selectedCategory}">${this._localeCategoryName(t)}</option>
                    `))}
                        </select>
                    </label>
                    <div>
                        <label>${Ut("Vyhledat",{id:"labelSearch"})}
                            <input type="text" id="search" value="${this._searchPhrase}" @keydown="${this._searchOnEnter}"/>
                        </label>
                        <button @click="${this._resetSearch}">${Ut("Reset",{id:"buttonResetSearch"})}</button>
                        <button @click="${this._search}">${Ut("Vyhledat",{id:"buttonSearch"})}</button>
                    </div>
                </div>
                `}
                <label id="selectLocale">${Ut("Jazyk",{id:"labelLanguage"})}
                    <select @change=${this._localeChanged}>
                        ${ee.map((t=>F`
                            <option .value=${t} ?selected=${t===this._selectedLocale}>
                                ${t}
                            </option>`))}
                    </select>
                </label>
            </header>
        `}_renderPreview(){return F`
        <div id='content' class='cards' tabindex='0'>
            ${Array.from({length:this.addonsPerPage},((t,e)=>F`
                <article class='addon loading'>
                    <addons-loader></addons-loader>
                    <h2>Doplněk ABRA Flexi</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </article>
            `))}
        </div>`}_renderOverview(){return F`
        <div id='content' class='cards' tabindex='0'>
        ${kt(this._currentAddons,(t=>t.id),(t=>F`
            <a class='addon' tabindex='0' @click="${()=>this._goToDetail(t)}">
                <article>
                    <image src='${t.photo.toString()}'></image>
                    <h2>Název doplňku</h2>
                    ${this._retrievePerex(t)}
                </article>
            </a>
            `))}
        </div>`}_renderDetail(){const t=document.createElement("div");return t.id="content",t.classList.add("detail"),t.innerHTML=this._selectedAddon.description,this._removeStyles(t),t}_renderFooter(){return F`
        <footer class="panel">
                ${"detail"==this._widgetState?F`
                <button class="centered" @click="${()=>{}}">${Ut("Instalovat",{id:"install"})}</button>
                `:F`
                <div class="panel centered">
                    ${0==this._addonsPageNum?"":F`<button @click="${()=>this._addonsPageNum--}"> < </button>`}
                    <div class="centered">
                        ${this._addonsPageNum+1}/${this._addonsTotalPages}
                    </div>
                    ${this._addonsPageNum+1<this._addonsTotalPages?F`<button @click="${()=>this._addonsPageNum++}"> > </button>`:""}
                </div>
                `}
        </footer>`}render(){return F`
        <div id='container'>
            ${this._renderHeader()}
            ${"overview"==this._widgetState?this._addons.render({initial:()=>F`<p>Waiting to start task</p>`,pending:()=>this._renderPreview(),complete:()=>this._renderOverview(),error:t=>F`<p>Oops, something went wrong: ${t}</p>`}):this._renderDetail()}
            ${this._renderFooter()}
        <slot></slot>
        </div>`}};de.styles=n`
        :host {
            font-family: var(--font-family, Arial, sans-serif);
            font-size: 0.9rem;
            --card-height: 15rem;
            --card-gap: 1rem;
            --main-border: solid #ccc 0.2rem;
            --main-border-radius: 0.5rem;
            --input-border: solid #666 0.1rem;
            --input-border-radius: 0.3rem;
        }

        * {
            padding: 0;
            margin: 0;
        }

        button, select, input {
            font-size: 1.1rem;
            border: var(--input-border);
            border-radius: var(--input-border-radius);
            background-color: var(--bg-color-primary, #eee);
            max-width: 100%;
            padding: 0.2em;
        }

        label {
            color: black;
        }
        
        #container {
            display: flex;
            flex-flow: column nowrap;
            align-items: stretch;
            border: var(--main-border);
            border-radius: var(--main-border-radius);
            background-color: var(--bg-color-primary, #ddd);
            padding: 0.5em;
        }

        .panel {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr auto 1fr;
            gap: 1em;
        }

        .panel .centered {
            grid-column-start: 2;
            text-align: center;
        }

        header, footer {
            padding: 0.3em;
        }

        #buttonBack {
            justify-self: left;
        }

        #selectLocale {
            justify-self: end;
        }

        #content {
            height: calc(var(--min-rows, 2) * (var(--card-height) + var(--card-gap)) + var(--card-gap));
            padding: var(--card-gap);
            overflow-y: scroll;
            border: var(--border-main);
            background-color: var(--bg-color-main, #eee);
        }

        #content.extended {
            height: var(--max-rows, 4);
        }

        #searchFilters {
            grid-column-start: 1;
            grid-column-end: 4;
            order: 2;
            /* position: relative; */
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            gap: 1em;
        }

        .cards {
            display: flex;
            flex-flow: row wrap;
            overflow-y: scroll;
            gap: var(--card-gap);
        }

        .addon {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            flex-grow: 1;
            text-align: center;
            gap: var(--card-gap);
            width: 13em;
            height: var(--card-height);
            padding: 1em;
            background-color: #fff;
            box-shadow: none;
            transition: box-shadow 0.2s ease-in;
            cursor: pointer;
        }

        .addon:hover {
            box-shadow: 0 0 1em #bbb;
        }

        .addon img {
            object-fit: contain;
            max-width: 80%;
            height: 4em;
        }
        .addon p {
            overflow-y: hidden;
        }

        .loading {
            h1, h2, h3, p {
                filter: blur(0.5em);
            }
        }

        .loading:hover {
            box-shadow: none;
            cursor: progress;
        }

        .addon addons-loader {
            --size: 3em;
            margin: 0.5em;
        }

        .detail h2 {
            padding: 1em 0 0.5em 0;
        }

        .detail li {
            margin-left: 1em;
        }

        .detail img {
            max-width: 100%;
            margin: 0.5em;
        }
    `,ie([$t()],de.prototype,"_categories",void 0),ie([$t()],de.prototype,"_currentAddons",void 0),ie([$t()],de.prototype,"_addonsPageNum",void 0),ie([$t()],de.prototype,"_addonsTotalPages",void 0),ie([$t()],de.prototype,"_widgetState",void 0),ie([$t()],de.prototype,"_selectedAddon",void 0),ie([$t()],de.prototype,"_selectedCategory",void 0),ie([$t()],de.prototype,"_searchPhrase",void 0),ie([$t()],de.prototype,"_selectedLocale",void 0),ie([vt({type:Number})],de.prototype,"addonsPerPage",void 0),de=ie([(t,e)=>(t.addInitializer(Rt),t),ft("addons-widget")],de)})()})();