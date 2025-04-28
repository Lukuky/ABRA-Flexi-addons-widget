/*! For license information please see addons-widget.js.LICENSE.txt */
(()=>{var t={485:t=>{function e(t){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=485,t.exports=e}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=r.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(s,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,i)},a=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},h=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:_}=Object,g=globalThis,$=g.trustedTypes,f=$?$.emptyScript:"",m=g.reactiveElementPolyfillSupport,v=(t,e)=>t,A={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:A,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:A).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:A;this._$Em=i,this[i]=r.fromAttribute(e,t.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??y)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,m?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.1.0");const E=globalThis,S=E.trustedTypes,x=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+C,T=`<${N}>`,H=document,k=()=>H.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,O=t=>M(t)||"function"==typeof t?.[Symbol.iterator],R="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,B=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,W=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=(W(1),W(2),W(3),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),Z=new WeakMap,J=H.createTreeWalker(H,129);function K(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const Q=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=L;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,d=0;for(;d<s.length&&(n.lastIndex=d,h=n.exec(s),null!==h);)d=n.lastIndex,n===L?"!--"===h[1]?n=j:void 0!==h[1]?n=z:void 0!==h[2]?(q.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=B):void 0!==h[3]&&(n=B):n===B?">"===h[0]?(n=r??L,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?B:'"'===h[3]?I:D):n===I||n===D?n=B:n===j||n===z?n=L:(n=B,r=void 0);const c=n===B&&t[e+1].startsWith("/>")?" ":"";o+=n===L?s+T:l>=0?(i.push(a),s.slice(0,l)+P+s.slice(l)+C+c):s+C+(-2===l?e:c)}return[K(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class G{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,l]=Q(t,e);if(this.el=G.createElement(h,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(P)){const e=l[o++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?rt:et}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(q.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],k()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],k())}}}else if(8===i.nodeType)if(i.data===N)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=H.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===V)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??H).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=J.nextNode(),o++)}return J.currentNode=H,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),U(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):O(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new G(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new tt(this.O(k()),this.O(k()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,i[s+n],e,n),a===V&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===F?t=F:t!==F&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class rt extends et{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??F)===V)return;const s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt={M:P,P:C,A:N,C:1,L:Q,R:Y,D:O,V:X,I:tt,H:et,N:it,U:rt,B:st,F:ot},at=E.litHtmlPolyfillSupport;at?.(G,tt),(E.litHtmlVersions??=[]).push("3.3.0");const ht=globalThis,lt=ht.trustedTypes,dt=lt?lt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ct="$lit$",ut=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+ut,_t=`<${pt}>`,gt=document,$t=()=>gt.createComment(""),ft=t=>null===t||"object"!=typeof t&&"function"!=typeof t,mt=Array.isArray,vt="[ \t\n\f\r]",At=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,bt=/>/g,wt=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Et=/'/g,St=/"/g,xt=/^(?:script|style|textarea|title)$/i,Pt=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),Ct=Pt(1),Nt=(Pt(2),Pt(3),Symbol.for("lit-noChange")),Tt=Symbol.for("lit-nothing"),Ht=new WeakMap,kt=gt.createTreeWalker(gt,129);function Ut(t,e){if(!mt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==dt?dt.createHTML(e):e}class Mt{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,l]=((t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=At;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,d=0;for(;d<s.length&&(n.lastIndex=d,h=n.exec(s),null!==h);)d=n.lastIndex,n===At?"!--"===h[1]?n=yt:void 0!==h[1]?n=bt:void 0!==h[2]?(xt.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=wt):void 0!==h[3]&&(n=wt):n===wt?">"===h[0]?(n=r??At,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?wt:'"'===h[3]?St:Et):n===St||n===Et?n=wt:n===yt||n===bt?n=At:(n=wt,r=void 0);const c=n===wt&&t[e+1].startsWith("/>")?" ":"";o+=n===At?s+_t:l>=0?(i.push(a),s.slice(0,l)+ct+s.slice(l)+ut+c):s+ut+(-2===l?e:c)}return[Ut(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=Mt.createElement(h,s),kt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=kt.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(ct)){const e=l[o++],s=i.getAttribute(t).split(ut),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?zt:"?"===n[1]?Bt:"@"===n[1]?Dt:jt}),i.removeAttribute(t)}else t.startsWith(ut)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(xt.test(i.tagName)){const t=i.textContent.split(ut),e=t.length-1;if(e>0){i.textContent=lt?lt.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],$t()),kt.nextNode(),a.push({type:2,index:++r});i.append(t[e],$t())}}}else if(8===i.nodeType)if(i.data===pt)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(ut,t+1));)a.push({type:7,index:r}),t+=ut.length-1}r++}}static createElement(t,e){const s=gt.createElement("template");return s.innerHTML=t,s}}function Ot(t,e,s=t,i){if(e===Nt)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=ft(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Ot(t,r._$AS(t,e.values),r,i)),e}class Rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??gt).importNode(e,!0);kt.currentNode=i;let r=kt.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Lt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new It(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=kt.nextNode(),o++)}return kt.currentNode=gt,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Lt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=Tt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ot(this,t,e),ft(t)?t===Tt||null==t||""===t?(this._$AH!==Tt&&this._$AR(),this._$AH=Tt):t!==this._$AH&&t!==Nt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>mt(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Tt&&ft(this._$AH)?this._$AA.nextSibling.data=t:this.T(gt.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Mt.createElement(Ut(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Rt(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=Ht.get(t.strings);return void 0===e&&Ht.set(t.strings,e=new Mt(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Lt(this.O($t()),this.O($t()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class jt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=Tt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Tt}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=Ot(this,t,e,0),o=!ft(t)||t!==this._$AH&&t!==Nt,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Ot(this,i[s+n],e,n),a===Nt&&(a=this._$AH[n]),o||=!ft(a)||a!==this._$AH[n],a===Tt?t=Tt:t!==Tt&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===Tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zt extends jt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Tt?void 0:t}}class Bt extends jt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Tt)}}class Dt extends jt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Ot(this,t,e,0)??Tt)===Nt)return;const s=this._$AH,i=t===Tt&&s!==Tt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==Tt&&(s===Tt||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Ot(this,t)}}const qt=ht.litHtmlPolyfillSupport;qt?.(Mt,Lt),(ht.litHtmlVersions??=[]).push("3.3.0");const Wt=globalThis;class Vt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Lt(e.insertBefore($t(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Nt}}Vt._$litElement$=!0,Vt.finalized=!0,Wt.litElementHydrateSupport?.({LitElement:Vt});const Ft=Wt.litElementPolyfillSupport;Ft?.({LitElement:Vt}),(Wt.litElementVersions??=[]).push("4.2.0");const Zt=Symbol();class Jt{get taskComplete(){return this.t||(1===this.i?this.t=new Promise(((t,e)=>{this.o=t,this.h=e})):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,s){this.p=0,this.i=0,(this._=t).addController(this);const i="object"==typeof e?e:{task:e,args:s};this.v=i.task,this.j=i.args,this.m=i.argsEqual??Kt,this.k=i.onComplete,this.A=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.u=i.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||void 0===t||void 0!==e&&this.m(e,t)||await this.run(t)}async run(t){let e,s;t??=this.T(),this.O=t,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this._.requestUpdate())):this._.requestUpdate();const i=++this.p;this.q=new AbortController;let r=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(t){r=!0,s=t}if(this.p===i){if(e===Zt)this.i=0;else{if(!1===r){try{this.k?.(e)}catch{}this.i=2,this.o?.(e)}else{try{this.A?.(s)}catch{}this.i=3,this.h?.(s)}this.u=e,this.l=s}this._.requestUpdate()}}abort(t){1===this.i&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}}const Kt=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!y(t,e[s]))),Qt=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},Gt={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:y},Xt=(t=Gt,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function Yt(t){return(e,s)=>"object"==typeof s?Xt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function te(t){return Yt({...t,state:!0,attribute:!1})}class ee{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:se}=nt,ie=()=>document.createComment(""),re=(t,e,s)=>{const i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(ie(),r),o=i.insertBefore(ie(),r);s=new se(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,n=o!==t;if(n){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||n){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,r),t=e}}}return s},oe=(t,e,s=t)=>(t._$AI(e,s),t),ne={},ae=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},he=(t,e,s)=>{const i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},le=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ee{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const r=[],o=[];let n=0;for(const e of t)r[n]=i?i(e,n):n,o[n]=s(e,n),n++;return{values:o,keys:r}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const r=(t=>t._$AH)(t),{values:o,keys:n}=this.dt(e,s,i);if(!Array.isArray(r))return this.ut=n,o;const a=this.ut??=[],h=[];let l,d,c=0,u=r.length-1,p=0,_=o.length-1;for(;c<=u&&p<=_;)if(null===r[c])c++;else if(null===r[u])u--;else if(a[c]===n[p])h[p]=oe(r[c],o[p]),c++,p++;else if(a[u]===n[_])h[_]=oe(r[u],o[_]),u--,_--;else if(a[c]===n[_])h[_]=oe(r[c],o[_]),re(t,h[_+1],r[c]),c++,_--;else if(a[u]===n[p])h[p]=oe(r[u],o[p]),re(t,r[c],r[u]),u--,p++;else if(void 0===l&&(l=he(n,p,_),d=he(a,c,u)),l.has(a[c]))if(l.has(a[u])){const e=d.get(n[p]),s=void 0!==e?r[e]:null;if(null===s){const e=re(t,r[c]);oe(e,o[p]),h[p]=e}else h[p]=oe(s,o[p]),re(t,r[c],s),r[e]=null;p++}else ae(r[u]),u--;else ae(r[c]),c++;for(;p<=_;){const e=re(t,h[_+1]);oe(e,o[p]),h[p++]=e}for(;c<=u;){const t=r[c++];null!==t&&ae(t)}return this.ut=n,((t,e=ne)=>{t._$AH=e})(t,h),V}}),de=(t,e,s)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[s?s[r-1]:r-1],i+=t[r];return i},ce=t=>{return"string"!=typeof(e=t)&&"strTag"in e?de(t.strings,t.values):t;var e};let ue=ce,pe=!1;const _e="lit-localize-status";class ge{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(_e,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(_e,this.__litLocalizeEventHandler)}}const $e=t=>t.addController(new ge(t));class fe{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}const me=[];for(let t=0;t<256;t++)me[t]=(t>>4&15).toString(16)+(15&t).toString(16);const ve=new WeakMap,Ae=new Map;function ye(t,e,s){if(t){const i=s?.id??function(t){const e="string"==typeof t?t:t.strings;let s=Ae.get(e);return void 0===s&&(s=function(t,e){return(e?"h":"s")+function(t){let e=0,s=8997,i=0,r=33826,o=0,n=40164,a=0,h=52210;for(let l=0;l<t.length;l++)s^=t.charCodeAt(l),e=435*s,i=435*r,o=435*n,a=435*h,o+=s<<8,a+=r<<8,i+=e>>>16,s=65535&e,o+=i>>>16,r=65535&i,h=a+(o>>>16)&65535,n=65535&o;return me[h>>8]+me[255&h]+me[n>>8]+me[255&n]+me[r>>8]+me[255&r]+me[s>>8]+me[255&s]}("string"==typeof t?t:t.join(""))}(e,"string"!=typeof t&&!("strTag"in t)),Ae.set(e,s)),s}(e),r=t[i];if(r){if("string"==typeof r)return r;if("strTag"in r)return de(r.strings,e.values,r.values);{let t=ve.get(r);return void 0===t&&(t=r.values,ve.set(r,t)),{...r,values:t.map((t=>e.values[t]))}}}}return ce(e)}function be(t){window.dispatchEvent(new CustomEvent(_e,{detail:t}))}let we,Ee,Se,xe,Pe,Ce="",Ne=new fe;Ne.resolve();let Te=0;const He=["de","en","sk"],ke=["cs","de","en","sk"];var Ue=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};let Me=class extends Vt{constructor(){super(...arguments),this.size=6}render(){return Ct`
        <div class="loader"></div>
        `}};Me.styles=n`
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
    `,Ue([Yt({type:Number})],Me.prototype,"size",void 0),Me=Ue([Qt("addons-loader")],Me);var Oe=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},Re=function(t,e,s,i){return new(s||(s=Promise))((function(r,o){function n(t){try{h(i.next(t))}catch(t){o(t)}}function a(t){try{h(i.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,a)}h((i=i.apply(t,e||[])).next())}))};const Le=new Map(He.map((t=>[t,s(485)(`./${t}.js`)]))),{getLocale:je,setLocale:ze}=(Be={sourceLocale:"cs",targetLocales:He,loadLocale:t=>Re(void 0,void 0,void 0,(function*(){return Le.get(t)}))},function(){if(pe)throw new Error("lit-localize can only be configured once");ue=(t,e)=>ye(Pe,t,e),pe=!0}(),Ce=Ee=Be.sourceLocale,Se=new Set(Be.targetLocales),Se.add(Be.sourceLocale),xe=Be.loadLocale,{getLocale:()=>Ce,setLocale:t=>{if(t===(we??Ce))return Ne.promise;if(!Se||!xe)throw new Error("Internal error");if(!Se.has(t))throw new Error("Invalid locale code");Te++;const e=Te;return we=t,Ne.settled&&(Ne=new fe),be({status:"loading",loadingLocale:t}),(t===Ee?Promise.resolve({templates:void 0}):xe(t)).then((s=>{Te===e&&(Ce=t,we=void 0,Pe=s.templates,be({status:"ready",readyLocale:t}),Ne.resolve())}),(s=>{Te===e&&(be({status:"error",errorLocale:t,errorMessage:s.toString()}),Ne.reject(s))})),Ne.promise}});var Be;let De=class extends Vt{constructor(){super(),this._categories=[],this._currentAddons=[],this._addonsPageNum=0,this._addonsTotalPages=0,this._widgetState="overview",this._selectedAddon=null,this._selectedCategory=null,this._searchPhrase="",this.addonsPerPage=8,this._TaskCategories=new Jt(this,{task:(t,e)=>Re(this,[t,e],void 0,(function*([],{signal:t}){let e=new URL("https://support.flexibee.eu/api/categories");const s=new Request(e),i=yield fetch(s,{signal:t});if(!i.ok)throw new Error(i.status.toString());const r=yield i.json();return console.log(r),r})),args:()=>[this._addonsPageNum,this.addonsPerPage]}),this._addons=new Jt(this,{task:(t,e)=>Re(this,[t,e],void 0,(function*([t,e,s,i],{signal:r}){let o=new URL("https://support.flexibee.eu/api/addons/search");t&&o.searchParams.append("categoryId",t.toString()),o.searchParams.append("page",e.toString()),o.searchParams.append("size",s.toString()),i&&o.searchParams.append("search",i);const n=new Request(o),a=yield fetch(n,{signal:r});if(!a.ok)throw new Error(a.status.toString());const h=yield a.json();return console.log(h),this._addonsTotalPages=h.totalPages,this._currentAddons=h.content,h})),args:()=>[this._selectedCategory,this._addonsPageNum,this.addonsPerPage,this._searchPhrase]}),this._TaskCategories.run(),this._TaskCategories.taskComplete.then((t=>{this._categories=t||[]})).catch((t=>{console.error("Failed to fetch categories:",t),this._categories=[]}))}_goBack(){this._widgetState="overview"}_goToDetail(t){this._selectedAddon=t,this._widgetState="detail"}_updateCategory(t){this._addonsPageNum=0,this._selectedCategory=parseInt(t.target.value)}_clear(){this._addonsPageNum=0,this.shadowRoot.getElementById("search").value="",this._searchPhrase=""}_search(){this._addonsPageNum=0,this._searchPhrase=this.shadowRoot.getElementById("search").value}_removeStyles(t){Array.from(t.getElementsByTagName("style")).forEach((t=>{var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),Array.from(t.getElementsByTagName("*")).forEach((t=>{t.removeAttribute("style"),t.removeAttribute("color")}))}_retrievePerex(t){const e=document.createElement("p");return e.innerHTML=t.perex,this._removeStyles(e),e}_localeChanged(t){const e=t.target.value,s=new URL(window.location.href);s.searchParams.get("locale")!==e&&(s.searchParams.set("locale",e),window.location.assign(s.href))}_renderHeader(){return Ct`
            <header class="panel">
                ${"detail"==this._widgetState?Ct`
                <button id="buttonBack" @click="${this._goBack}">Back</button>
                <h1 class='centered'>Název doplňku</h1>
                `:Ct`
                <h1 class='centered'>${ue("Doplňky ABRA Flexi",{id:"title"})}</h1>
                <div id='searchFilters'>
                    <label for='selectCategory'>Category
                        <select id='selectCategory' @change="${this._updateCategory}">
                            <option value="">--All--</option>
                            ${this._categories.map((t=>{let e;switch(je.toString()){case"cs":e=t.nameCs;break;case"sk":e=t.nameSk;break;case"en":e=t.nameEn;break;case"de":e=t.nameDe;break;default:throw"Intern language incobatibility"}return Ct`
                            <option value="${t.id}" ?selected="${t.id===this._selectedCategory}">${e}</option>
                        `}))}
                        </select>
                    </label>
                    <div>
                        <label>Search
                            <input type="text" id="search" value="${this._searchPhrase}"/>
                        </label>
                        <button @click="${this._clear}">Clear</button>
                        <button @click="${this._search}">Search</button>
                    </div>
                </div>
                `}
                <label>Language
                    <select @change=${this._localeChanged}>
                        ${ke.map((t=>Ct`
                            <option .value=${t} ?selected=${t===je()}>
                                ${t}
                            </option>`))}
                    </select>
                </label>
            </header>
        `}_renderPreview(){return Ct`
        <div id='content' class='cards' tabindex='0'>
            ${Array.from({length:this.addonsPerPage},((t,e)=>Ct`
                <article class='addon loading'>
                    <addons-loader></addons-loader>
                    <h2>Doplněk ABRA Flexi</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </article>
            `))}
        </div>`}_renderOverview(){return Ct`
        <div id='content' class='cards' tabindex='0'>
        ${le(this._currentAddons,(t=>t.id),(t=>Ct`
            <a class='addon' tabindex='0' @click="${()=>this._goToDetail(t)}">
                <article>
                    <image src='${t.photo.toString()}'></image>
                    <h2>Název doplňku</h2>
                    ${this._retrievePerex(t)}
                </article>
            </a>
            `))}
        </div>`}_renderDetail(){const t=document.createElement("div");return t.id="content",t.classList.add("detail"),t.innerHTML=this._selectedAddon.description,this._removeStyles(t),t}_renderFooter(){return Ct`
        <footer class="panel">
                ${"detail"==this._widgetState?Ct`
                <button class="centered" @click="${()=>{}}">Instalovat</button>
                `:Ct`
                <div class="panel centered">
                    ${0==this._addonsPageNum?"":Ct`<button @click="${()=>this._addonsPageNum--}"> < </button>`}
                    <div class="centered">
                        ${this._addonsPageNum+1}/${this._addonsTotalPages}
                    </div>
                    ${this._addonsPageNum+1<this._addonsTotalPages?Ct`<button @click="${()=>this._addonsPageNum++}"> > </button>`:""}
                </div>
                `}
        </footer>`}render(){return Ct`
        <div id='container'>
            ${this._renderHeader()}
            ${"overview"==this._widgetState?this._addons.render({initial:()=>Ct`<p>Waiting to start task</p>`,pending:()=>this._renderPreview(),complete:()=>this._renderOverview(),error:t=>Ct`<p>Oops, something went wrong: ${t}</p>`}):this._renderDetail()}
            ${this._renderFooter()}
        <slot></slot>
        </div>`}};De.styles=n`
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

        #selectLanguage {
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
    `,Oe([te()],De.prototype,"_categories",void 0),Oe([te()],De.prototype,"_currentAddons",void 0),Oe([te()],De.prototype,"_addonsPageNum",void 0),Oe([te()],De.prototype,"_addonsTotalPages",void 0),Oe([te()],De.prototype,"_widgetState",void 0),Oe([te()],De.prototype,"_selectedAddon",void 0),Oe([te()],De.prototype,"_selectedCategory",void 0),Oe([te()],De.prototype,"_searchPhrase",void 0),Oe([Yt({type:Number})],De.prototype,"addonsPerPage",void 0),De=Oe([(t,e)=>(t.addInitializer($e),t),Qt("addons-widget")],De)})()})();