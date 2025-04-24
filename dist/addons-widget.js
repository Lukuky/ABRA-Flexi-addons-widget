/*! For license information please see addons-widget.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(i,t,s)},n=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,_=g.trustedTypes,f=_?_.emptyScript:"",$=g.reactiveElementPolyfillSupport,m=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!h(t,e),A={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...c(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=r.fromAttribute(e,t.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??y)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,$?.({ReactiveElement:b}),(g.reactiveElementVersions??=[]).push("2.1.0");const w=globalThis,P=w.trustedTypes,E=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+x,k=`<${C}>`,U=document,T=()=>U.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,R=t=>N(t)||"function"==typeof t?.[Symbol.iterator],M="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,B=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,q=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),F=q(1),V=(q(2),q(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),J=new WeakMap,K=U.createTreeWalker(U,129);function Z(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Q=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,d=0;for(;d<s.length&&(n.lastIndex=d,h=n.exec(s),null!==h);)d=n.lastIndex,n===H?"!--"===h[1]?n=j:void 0!==h[1]?n=z:void 0!==h[2]?(I.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=B):void 0!==h[3]&&(n=B):n===B?">"===h[0]?(n=r??H,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?B:'"'===h[3]?L:D):n===L||n===D?n=B:n===j||n===z?n=H:(n=B,r=void 0);const c=n===B&&t[e+1].startsWith("/>")?" ":"";o+=n===H?s+k:l>=0?(i.push(a),s.slice(0,l)+S+s.slice(l)+x+c):s+x+(-2===l?e:c)}return[Z(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class G{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,l]=Q(t,e);if(this.el=G.createElement(h,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=l[o++],s=i.getAttribute(t).split(x),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?rt:et}),i.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=P?P.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),K.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===V)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=O(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);K.currentNode=i;let r=K.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=K.nextNode(),o++)}return K.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):R(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new tt(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,i[s+n],e,n),a===V&&(a=this._$AH[n]),o||=!O(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class rt extends et{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??W)===V)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt={M:S,P:x,A:C,C:1,L:Q,R:Y,D:R,V:X,I:tt,H:et,N:it,U:rt,B:st,F:ot},at=w.litHtmlPolyfillSupport;at?.(G,tt),(w.litHtmlVersions??=[]).push("3.3.0");const ht=globalThis;class lt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new tt(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}lt._$litElement$=!0,lt.finalized=!0,ht.litElementHydrateSupport?.({LitElement:lt});const dt=ht.litElementPolyfillSupport;dt?.({LitElement:lt}),(ht.litElementVersions??=[]).push("4.2.0");const ct=Symbol();class ut{get taskComplete(){return this.t||(1===this.i?this.t=new Promise(((t,e)=>{this.o=t,this.h=e})):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,s){this.p=0,this.i=0,(this._=t).addController(this);const i="object"==typeof e?e:{task:e,args:s};this.v=i.task,this.j=i.args,this.m=i.argsEqual??pt,this.k=i.onComplete,this.A=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.u=i.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||void 0===t||void 0!==e&&this.m(e,t)||await this.run(t)}async run(t){let e,s;t??=this.T(),this.O=t,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this._.requestUpdate())):this._.requestUpdate();const i=++this.p;this.q=new AbortController;let r=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(t){r=!0,s=t}if(this.p===i){if(e===ct)this.i=0;else{if(!1===r){try{this.k?.(e)}catch{}this.i=2,this.o?.(e)}else{try{this.A?.(s)}catch{}this.i=3,this.h?.(s)}this.u=e,this.l=s}this._.requestUpdate()}}abort(t){1===this.i&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}}const pt=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!y(t,e[s]))),gt=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},_t={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ft=(t=_t,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function $t(t){return(e,s)=>"object"==typeof s?ft(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function mt(t){return $t({...t,state:!0,attribute:!1})}class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:yt}=nt,At=()=>document.createComment(""),bt=(t,e,s)=>{const i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(At(),r),o=i.insertBefore(At(),r);s=new yt(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,n=o!==t;if(n){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||n){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,r),t=e}}}return s},wt=(t,e,s=t)=>(t._$AI(e,s),t),Pt={},Et=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},St=(t,e,s)=>{const i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},xt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends vt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const r=[],o=[];let n=0;for(const e of t)r[n]=i?i(e,n):n,o[n]=s(e,n),n++;return{values:o,keys:r}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const r=(t=>t._$AH)(t),{values:o,keys:n}=this.dt(e,s,i);if(!Array.isArray(r))return this.ut=n,o;const a=this.ut??=[],h=[];let l,d,c=0,u=r.length-1,p=0,g=o.length-1;for(;c<=u&&p<=g;)if(null===r[c])c++;else if(null===r[u])u--;else if(a[c]===n[p])h[p]=wt(r[c],o[p]),c++,p++;else if(a[u]===n[g])h[g]=wt(r[u],o[g]),u--,g--;else if(a[c]===n[g])h[g]=wt(r[c],o[g]),bt(t,h[g+1],r[c]),c++,g--;else if(a[u]===n[p])h[p]=wt(r[u],o[p]),bt(t,r[c],r[u]),u--,p++;else if(void 0===l&&(l=St(n,p,g),d=St(a,c,u)),l.has(a[c]))if(l.has(a[u])){const e=d.get(n[p]),s=void 0!==e?r[e]:null;if(null===s){const e=bt(t,r[c]);wt(e,o[p]),h[p]=e}else h[p]=wt(s,o[p]),bt(t,r[c],s),r[e]=null;p++}else Et(r[u]),u--;else Et(r[c]),c++;for(;p<=g;){const e=bt(t,h[g+1]);wt(e,o[p]),h[p++]=e}for(;c<=u;){const t=r[c++];null!==t&&Et(t)}return this.ut=n,((t,e=Pt)=>{t._$AH=e})(t,h),V}});var Ct=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};let kt=class extends lt{constructor(){super(...arguments),this.size=6}render(){return F`
        <div class="loader"></div>
        `}};kt.styles=o`
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
    `,Ct([$t({type:Number})],kt.prototype,"size",void 0),kt=Ct([gt("addons-loader")],kt);var Ut,Tt=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},Ot=function(t,e,s,i){return new(s||(s=Promise))((function(r,o){function n(t){try{h(i.next(t))}catch(t){o(t)}}function a(t){try{h(i.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,a)}h((i=i.apply(t,e||[])).next())}))};let Nt=Ut=class extends lt{constructor(){super(),this._categories=[],this._currentAddons=[],this._addonsPageNum=0,this._addonsTotalPages=0,this._firstPage=!0,this._lastPage=!1,this._widgetState="overview",this._selectedAddon=null,this._language=Ut.languages[0],this._selectedCategory=null,this._searchPhrase="",this.addonsPerPage=8,this._TaskCategories=new ut(this,{task:(t,e)=>Ot(this,[t,e],void 0,(function*([],{signal:t}){let e=new URL("https://support.flexibee.eu/api/categories");const s=new Request(e),i=yield fetch(s,{signal:t});if(!i.ok)throw new Error(i.status.toString());const r=yield i.json();return console.log(r),r})),args:()=>[this._addonsPageNum,this.addonsPerPage]}),this._addons=new ut(this,{task:(t,e)=>Ot(this,[t,e],void 0,(function*([t,e,s,i,r],{signal:o}){let n=new URL("https://support.flexibee.eu/api/addons/search");e&&n.searchParams.append("categoryId",e.toString()),n.searchParams.append("page",s.toString()),n.searchParams.append("size",i.toString()),r&&n.searchParams.append("search",r);const a=new Request(n),h=yield fetch(a,{signal:o});if(!h.ok)throw new Error(h.status.toString());const l=yield h.json();return console.log(l),this._firstPage=l.first,this._lastPage=l.last,this._addonsTotalPages=l.totalPages,this._currentAddons=l.content,l})),args:()=>[this._language,this._selectedCategory,this._addonsPageNum,this.addonsPerPage,this._searchPhrase]}),this._TaskCategories.run(),this._TaskCategories.taskComplete.then((t=>{this._categories=t||[]})).catch((t=>{console.error("Failed to fetch categories:",t),this._categories=[]}))}_goBack(){this._widgetState="overview"}_goToDetail(t){this._selectedAddon=t,this._widgetState="detail"}_updateCategory(t){this._addonsPageNum=0,this._selectedCategory=parseInt(t.target.value)}_clear(){this._addonsPageNum=0,this.shadowRoot.getElementById("search").value="",this._searchPhrase=""}_search(){this._addonsPageNum=0,this._searchPhrase=this.shadowRoot.getElementById("search").value,console.log(this._searchPhrase)}_renderHeader(){return F`
            <header class="panel">
                ${"detail"==this._widgetState?F`
                <button id="buttonBack" @click="${this._goBack}">Back</button>
                <h1 class='centered'>Název doplňku</h1>
                `:F`
                <h1 class='centered'>Doplňky ABRA Flexi</h1>
                <div id='searchFilters'>
                    <label for='selectCategory'>Category
                        <select id='selectCategory' @change="${this._updateCategory}">
                            <option value="">--All--</option>
                            ${this._categories.map((t=>{let e;switch(this._language){case"cz":e=t.nameCs;break;case"sk":e=t.nameSk;break;case"en":e=t.nameEn;break;case"de":e=t.nameDe;break;default:throw"Intern language incobatibility"}return F`
                            <option value="${t.id}" ?selected="${t.id===this._selectedCategory}">${e}</option>
                        `}))}
                        </select>
                    </label>
                    <div>
                        <input type="text" id="search" value="${this._searchPhrase}"/>
                        <button @click="${this._clear}">Clear</button>
                        <button @click="${this._search}">Search</button>
                    </div>
                </div>
                `}
                <select id="selectLanguage">
                    ${Ut.languages.map((t=>F`
                        <option value="${t}">${t}</option>
                    `))}
                </select>
            </header>
        `}_renderPreview(){return F`
        <div id='content' class='cards'>
            ${Array.from({length:this.addonsPerPage},((t,e)=>F`
                <article class='addon loading'>
                    <addons-loader></addons-loader>
                    <h2>Doplněk ABRA Flexi</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </article>
            `))}
        </div>`}_removeStyles(t){Array.from(t.getElementsByTagName("style")).forEach((t=>{var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),Array.from(t.getElementsByTagName("*")).forEach((t=>{t.removeAttribute("style"),t.removeAttribute("color")}))}_retrievePerex(t){const e=document.createElement("p");return e.innerHTML=t.perex,this._removeStyles(e),e}_renderOverview(){return F`
        <div id='content' class='cards'>
        ${xt(this._currentAddons,(t=>t.id),(t=>F`
                <article class='addon' @click="${()=>this._goToDetail(t)}">
                    <image src='${t.photo.toString()}'></image>
                    <h2>Název doplňku</h2>
                    ${this._retrievePerex(t)}
                </article>
            `))}
        </div>`}_renderDetail(){const t=document.createElement("div");return t.id="content",t.classList.add("detail"),t.innerHTML=this._selectedAddon.description,this._removeStyles(t),t}_renderFooter(){return F`
        <footer class="panel">
                ${"detail"==this._widgetState?F`
                <button class="centered" @click="${()=>{}}">Instalovat</button>
                `:F`
                <div class="panel centered">
                    ${0==this._addonsPageNum?"":F`<button @click="${()=>this._addonsPageNum--}"> < </button>`}
                    <div class="centered">
                        ${this._addonsPageNum+1}/${this._addonsTotalPages+1}
                    </div>
                    ${this._addonsPageNum<this._addonsTotalPages?F`<button @click="${()=>this._addonsPageNum++}"> > </button>`:""}
                </div>
                `}
        </footer>`}render(){return F`
        <div id='container'>
            ${this._renderHeader()}
            ${"overview"==this._widgetState?this._addons.render({initial:()=>F`<p>Waiting to start task</p>`,pending:()=>this._renderPreview(),complete:()=>this._renderOverview(),error:t=>F`<p>Oops, something went wrong: ${t}</p>`}):this._renderDetail()}
            ${this._renderFooter()}
        <slot></slot>
        </div>`}};Nt.styles=o`
        :host {
            font-family: var(--font-family, Arial, sans-serif);
            font-size: 0.9rem;
            --card-height: 15rem;
            --card-gap: 1rem;
            --border-main: solid #ccc 0.2em;
        }

        * {
            /* border: solid black 0.01em; */
            padding: 0;
            margin: 0;
        }

        button, select, input {
            font-size: 1.1rem;
            border: var(--border-main);
            background-color: var(--bg-color-primary, #eee);
            max-width: 100%;
            padding: 0.2em;
        }
        
        #container {
            display: flex;
            flex-flow: column nowrap;
            align-items: stretch;
            border: var(--border-main);
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
            color: #666;
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
    `,Nt.languages=["cz","sk","en","de"],Tt([mt()],Nt.prototype,"_categories",void 0),Tt([mt()],Nt.prototype,"_currentAddons",void 0),Tt([mt()],Nt.prototype,"_addonsPageNum",void 0),Tt([mt()],Nt.prototype,"_addonsTotalPages",void 0),Tt([mt()],Nt.prototype,"_firstPage",void 0),Tt([mt()],Nt.prototype,"_lastPage",void 0),Tt([mt()],Nt.prototype,"_widgetState",void 0),Tt([mt()],Nt.prototype,"_selectedAddon",void 0),Tt([mt()],Nt.prototype,"_language",void 0),Tt([mt()],Nt.prototype,"_selectedCategory",void 0),Tt([mt()],Nt.prototype,"_searchPhrase",void 0),Tt([$t({type:Number})],Nt.prototype,"addonsPerPage",void 0),Nt=Ut=Tt([gt("addons-widget")],Nt)})();