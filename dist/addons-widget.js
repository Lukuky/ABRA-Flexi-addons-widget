/*! For license information please see addons-widget.js.LICENSE.txt */
(()=>{var t={485:t=>{function e(t){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=485,t.exports=e}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=r.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(s,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,i)},a=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:h,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,f=globalThis,_=f.trustedTypes,m=_?_.emptyScript:"",v=f.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},A=(t,e)=>!h(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=r.fromAttribute(e,t.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??A)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[$("elementProperties")]=new Map,w[$("finalized")]=new Map,v?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.0");const E=globalThis,P=E.trustedTypes,S=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,U=`<${k}>`,O=document,T=()=>O.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,M=t=>R(t)||"function"==typeof t?.[Symbol.iterator],L="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,D=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,F=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=F(1),W=(F(2),F(3),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),K=new WeakMap,Z=O.createTreeWalker(O,129);function Q(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===H?"!--"===l[1]?n=j:void 0!==l[1]?n=z:void 0!==l[2]?(q.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=r??H,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?I:B):n===I||n===B?n=D:n===j||n===z?n=H:(n=D,r=void 0);const c=n===D&&t[e+1].startsWith("/>")?" ":"";o+=n===H?s+U:h>=0?(i.push(a),s.slice(0,h)+x+s.slice(h)+C+c):s+C+(-2===h?e:c)}return[Q(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=G(t,e);if(this.el=X.createElement(l,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(x)){const e=h[o++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?it:"?"===n[1]?rt:"@"===n[1]?ot:st}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(q.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=P?P.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),Z.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===W)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=N(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);Z.currentNode=i;let r=Z.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=Z.nextNode(),o++)}return Z.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):M(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(Q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new X(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new et(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=Y(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,i[s+n],e,n),a===W&&(a=this._$AH[n]),o||=!N(a)||a!==this._$AH[n],a===J?t=J:t!==J&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class rt extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class ot extends st{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??J)===W)return;const s=this._$AH,i=t===J&&s!==J||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==J&&(s===J||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at={M:x,P:C,A:k,C:1,L:G,R:tt,D:M,V:Y,I:et,H:st,N:rt,U:ot,B:it,F:nt},lt=E.litHtmlPolyfillSupport;lt?.(X,et),(E.litHtmlVersions??=[]).push("3.3.0");const ht=globalThis;class dt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new et(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}dt._$litElement$=!0,dt.finalized=!0,ht.litElementHydrateSupport?.({LitElement:dt});const ct=ht.litElementPolyfillSupport;ct?.({LitElement:dt}),(ht.litElementVersions??=[]).push("4.2.0");const ut=Symbol();class pt{get taskComplete(){return this.t||(1===this.i?this.t=new Promise(((t,e)=>{this.o=t,this.h=e})):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,s){this.p=0,this.i=0,(this._=t).addController(this);const i="object"==typeof e?e:{task:e,args:s};this.v=i.task,this.j=i.args,this.m=i.argsEqual??gt,this.k=i.onComplete,this.A=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.u=i.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||void 0===t||void 0!==e&&this.m(e,t)||await this.run(t)}async run(t){let e,s;t??=this.T(),this.O=t,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this._.requestUpdate())):this._.requestUpdate();const i=++this.p;this.q=new AbortController;let r=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(t){r=!0,s=t}if(this.p===i){if(e===ut)this.i=0;else{if(!1===r){try{this.k?.(e)}catch{}this.i=2,this.o?.(e)}else{try{this.A?.(s)}catch{}this.i=3,this.h?.(s)}this.u=e,this.l=s}this._.requestUpdate()}}abort(t){1===this.i&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}}const gt=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!A(t,e[s]))),ft=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},_t={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:A},mt=(t=_t,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function vt(t){return(e,s)=>"object"==typeof s?mt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function $t(t){return vt({...t,state:!0,attribute:!1})}class yt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:At}=at,bt=()=>document.createComment(""),wt=(t,e,s)=>{const i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(bt(),r),o=i.insertBefore(bt(),r);s=new At(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,n=o!==t;if(n){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||n){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,r),t=e}}}return s},Et=(t,e,s=t)=>(t._$AI(e,s),t),Pt={},St=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},xt=(t,e,s)=>{const i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},Ct=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends yt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const r=[],o=[];let n=0;for(const e of t)r[n]=i?i(e,n):n,o[n]=s(e,n),n++;return{values:o,keys:r}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const r=(t=>t._$AH)(t),{values:o,keys:n}=this.dt(e,s,i);if(!Array.isArray(r))return this.ut=n,o;const a=this.ut??=[],l=[];let h,d,c=0,u=r.length-1,p=0,g=o.length-1;for(;c<=u&&p<=g;)if(null===r[c])c++;else if(null===r[u])u--;else if(a[c]===n[p])l[p]=Et(r[c],o[p]),c++,p++;else if(a[u]===n[g])l[g]=Et(r[u],o[g]),u--,g--;else if(a[c]===n[g])l[g]=Et(r[c],o[g]),wt(t,l[g+1],r[c]),c++,g--;else if(a[u]===n[p])l[p]=Et(r[u],o[p]),wt(t,r[c],r[u]),u--,p++;else if(void 0===h&&(h=xt(n,p,g),d=xt(a,c,u)),h.has(a[c]))if(h.has(a[u])){const e=d.get(n[p]),s=void 0!==e?r[e]:null;if(null===s){const e=wt(t,r[c]);Et(e,o[p]),l[p]=e}else l[p]=Et(s,o[p]),wt(t,r[c],s),r[e]=null;p++}else St(r[u]),u--;else St(r[c]),c++;for(;p<=g;){const e=wt(t,l[g+1]);Et(e,o[p]),l[p++]=e}for(;c<=u;){const t=r[c++];null!==t&&St(t)}return this.ut=n,((t,e=Pt)=>{t._$AH=e})(t,l),W}}),kt=(t,e,s)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[s?s[r-1]:r-1],i+=t[r];return i},Ut=t=>{return"string"!=typeof(e=t)&&"strTag"in e?kt(t.strings,t.values):t;var e};let Ot=Ut,Tt=!1;const Nt="lit-localize-status";class Rt{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Nt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Nt,this.__litLocalizeEventHandler)}}const Mt=t=>t.addController(new Rt(t));class Lt{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}const Ht=[];for(let t=0;t<256;t++)Ht[t]=(t>>4&15).toString(16)+(15&t).toString(16);const jt=new WeakMap,zt=new Map;function Dt(t,e,s){if(t){const i=s?.id??function(t){const e="string"==typeof t?t:t.strings;let s=zt.get(e);return void 0===s&&(s=function(t,e){return(e?"h":"s")+function(t){let e=0,s=8997,i=0,r=33826,o=0,n=40164,a=0,l=52210;for(let h=0;h<t.length;h++)s^=t.charCodeAt(h),e=435*s,i=435*r,o=435*n,a=435*l,o+=s<<8,a+=r<<8,i+=e>>>16,s=65535&e,o+=i>>>16,r=65535&i,l=a+(o>>>16)&65535,n=65535&o;return Ht[l>>8]+Ht[255&l]+Ht[n>>8]+Ht[255&n]+Ht[r>>8]+Ht[255&r]+Ht[s>>8]+Ht[255&s]}("string"==typeof t?t:t.join(""))}(e,"string"!=typeof t&&!("strTag"in t)),zt.set(e,s)),s}(e),r=t[i];if(r){if("string"==typeof r)return r;if("strTag"in r)return kt(r.strings,e.values,r.values);{let t=jt.get(r);return void 0===t&&(t=r.values,jt.set(r,t)),{...r,values:t.map((t=>e.values[t]))}}}}return Ut(e)}function Bt(t){window.dispatchEvent(new CustomEvent(Nt,{detail:t}))}let It,qt,Ft,Vt,Wt,Jt="",Kt=new Lt;Kt.resolve();let Zt=0;var Qt=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};let Gt=class extends dt{constructor(){super(...arguments),this.size=6}render(){return V`
        <div class="loader"></div>
        `}};Gt.styles=n`
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
    `,Qt([vt({type:Number})],Gt.prototype,"size",void 0),Gt=Qt([ft("addons-loader")],Gt);const Xt=["de","en","sk"],Yt=["cs","de","en","sk"];var te,ee=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},se=function(t,e,s,i){return new(s||(s=Promise))((function(r,o){function n(t){try{l(i.next(t))}catch(t){o(t)}}function a(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,a)}l((i=i.apply(t,e||[])).next())}))};const ie=new Map(Xt.map((t=>[t,s(485)(`./${t}.js`)]))),{getLocale:re,setLocale:oe}=(ne={sourceLocale:"cs",targetLocales:Xt,loadLocale:t=>se(void 0,void 0,void 0,(function*(){return ie.get(t)}))},function(){if(Tt)throw new Error("lit-localize can only be configured once");Ot=(t,e)=>Dt(Wt,t,e),Tt=!0}(),Jt=qt=ne.sourceLocale,Ft=new Set(ne.targetLocales),Ft.add(ne.sourceLocale),Vt=ne.loadLocale,{getLocale:()=>Jt,setLocale:t=>{if(t===(It??Jt))return Kt.promise;if(!Ft||!Vt)throw new Error("Internal error");if(!Ft.has(t))throw new Error("Invalid locale code");Zt++;const e=Zt;return It=t,Kt.settled&&(Kt=new Lt),Bt({status:"loading",loadingLocale:t}),(t===qt?Promise.resolve({templates:void 0}):Vt(t)).then((s=>{Zt===e&&(Jt=t,It=void 0,Wt=s.templates,Bt({status:"ready",readyLocale:t}),Kt.resolve())}),(s=>{Zt===e&&(Bt({status:"error",errorLocale:t,errorMessage:s.toString()}),Kt.reject(s))})),Kt.promise}});var ne;let ae=te=class extends dt{constructor(){super(),this._categories=[],this._currentAddons=[],this._addonsPageNum=0,this._addonsTotalPages=0,this._widgetState="overview",this._selectedAddon=null,this._language=te.languages[0],this._selectedCategory=null,this._searchPhrase="",this.addonsPerPage=8,this._TaskCategories=new pt(this,{task:(t,e)=>se(this,[t,e],void 0,(function*([],{signal:t}){let e=new URL("https://support.flexibee.eu/api/categories");const s=new Request(e),i=yield fetch(s,{signal:t});if(!i.ok)throw new Error(i.status.toString());const r=yield i.json();return console.log(r),r})),args:()=>[this._addonsPageNum,this.addonsPerPage]}),this._addons=new pt(this,{task:(t,e)=>se(this,[t,e],void 0,(function*([t,e,s,i,r],{signal:o}){let n=new URL("https://support.flexibee.eu/api/addons/search");e&&n.searchParams.append("categoryId",e.toString()),n.searchParams.append("page",s.toString()),n.searchParams.append("size",i.toString()),r&&n.searchParams.append("search",r);const a=new Request(n),l=yield fetch(a,{signal:o});if(!l.ok)throw new Error(l.status.toString());const h=yield l.json();return console.log(h),this._addonsTotalPages=h.totalPages,this._currentAddons=h.content,h})),args:()=>[this._language,this._selectedCategory,this._addonsPageNum,this.addonsPerPage,this._searchPhrase]}),this._TaskCategories.run(),this._TaskCategories.taskComplete.then((t=>{this._categories=t||[]})).catch((t=>{console.error("Failed to fetch categories:",t),this._categories=[]}))}_goBack(){this._widgetState="overview"}_goToDetail(t){this._selectedAddon=t,this._widgetState="detail"}_updateCategory(t){this._addonsPageNum=0,this._selectedCategory=parseInt(t.target.value)}_clear(){this._addonsPageNum=0,this.shadowRoot.getElementById("search").value="",this._searchPhrase=""}_search(){this._addonsPageNum=0,this._searchPhrase=this.shadowRoot.getElementById("search").value,console.log(this._searchPhrase)}_localeChanged(t){const e=t.target.value,s=new URL(window.location.href);s.searchParams.get("locale")!==e&&(s.searchParams.set("locale",e),window.location.assign(s.href))}_renderHeader(){return V`
            <header class="panel">
                ${"detail"==this._widgetState?V`
                <button id="buttonBack" @click="${this._goBack}">Back</button>
                <h1 class='centered'>Název doplňku</h1>
                `:V`
                <h1 class='centered'>${Ot("Doplňky ABRA Flexi",{id:"title"})}</h1>
                <div id='searchFilters'>
                    <label for='selectCategory'>Category
                        <select id='selectCategory' @change="${this._updateCategory}">
                            <option value="">--All--</option>
                            ${this._categories.map((t=>{let e;switch(this._language){case"cz":e=t.nameCs;break;case"sk":e=t.nameSk;break;case"en":e=t.nameEn;break;case"de":e=t.nameDe;break;default:throw"Intern language incobatibility"}return V`
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
                        ${Yt.map((t=>V`
                            <option .value=${t} ?selected=${t===re()}>
                                ${t}
                            </option>`))}
                    </select>
                </label>
            </header>
        `}_renderPreview(){return V`
        <div id='content' class='cards' tabindex='0'>
            ${Array.from({length:this.addonsPerPage},((t,e)=>V`
                <article class='addon loading'>
                    <addons-loader></addons-loader>
                    <h2>Doplněk ABRA Flexi</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </article>
            `))}
        </div>`}_removeStyles(t){Array.from(t.getElementsByTagName("style")).forEach((t=>{var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),Array.from(t.getElementsByTagName("*")).forEach((t=>{t.removeAttribute("style"),t.removeAttribute("color")}))}_retrievePerex(t){const e=document.createElement("p");return e.innerHTML=t.perex,this._removeStyles(e),e}_renderOverview(){return V`
        <div id='content' class='cards' tabindex='0'>
        ${Ct(this._currentAddons,(t=>t.id),(t=>V`
            <a class='addon' tabindex='0' @click="${()=>this._goToDetail(t)}">
                <article>
                    <image src='${t.photo.toString()}'></image>
                    <h2>Název doplňku</h2>
                    ${this._retrievePerex(t)}
                </article>
            </a>
            `))}
        </div>`}_renderDetail(){const t=document.createElement("div");return t.id="content",t.classList.add("detail"),t.innerHTML=this._selectedAddon.description,this._removeStyles(t),t}_renderFooter(){return V`
        <footer class="panel">
                ${"detail"==this._widgetState?V`
                <button class="centered" @click="${()=>{}}">Instalovat</button>
                `:V`
                <div class="panel centered">
                    ${0==this._addonsPageNum?"":V`<button @click="${()=>this._addonsPageNum--}"> < </button>`}
                    <div class="centered">
                        ${this._addonsPageNum+1}/${this._addonsTotalPages}
                    </div>
                    ${this._addonsPageNum+1<this._addonsTotalPages?V`<button @click="${()=>this._addonsPageNum++}"> > </button>`:""}
                </div>
                `}
        </footer>`}render(){return V`
        <div id='container'>
            ${this._renderHeader()}
            ${"overview"==this._widgetState?this._addons.render({initial:()=>V`<p>Waiting to start task</p>`,pending:()=>this._renderPreview(),complete:()=>this._renderOverview(),error:t=>V`<p>Oops, something went wrong: ${t}</p>`}):this._renderDetail()}
            ${this._renderFooter()}
        <slot></slot>
        </div>`}};ae.styles=n`
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
            /* border: solid black 0.01em; */
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

        /* #searchFilters label {
            position: absolute;
            top: -1em;
        } */

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
    `,ae.languages=["cz","sk","en","de"],ee([$t()],ae.prototype,"_categories",void 0),ee([$t()],ae.prototype,"_currentAddons",void 0),ee([$t()],ae.prototype,"_addonsPageNum",void 0),ee([$t()],ae.prototype,"_addonsTotalPages",void 0),ee([$t()],ae.prototype,"_widgetState",void 0),ee([$t()],ae.prototype,"_selectedAddon",void 0),ee([$t()],ae.prototype,"_language",void 0),ee([$t()],ae.prototype,"_selectedCategory",void 0),ee([$t()],ae.prototype,"_searchPhrase",void 0),ee([vt({type:Number})],ae.prototype,"addonsPerPage",void 0),ae=te=ee([(t,e)=>(t.addInitializer(Mt),t),ft("addons-widget")],ae)})()})();