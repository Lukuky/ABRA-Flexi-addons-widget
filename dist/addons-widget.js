/*! For license information please see addons-widget.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,_=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,$=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i,this[i]=r.fromAttribute(e,t.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??v)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,f?.({ReactiveElement:A}),(u.reactiveElementVersions??=[]).push("2.1.0");const b=globalThis,w=b.trustedTypes,E=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+P,x=`<${C}>`,U=document,k=()=>U.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,N=t=>O(t)||"function"==typeof t?.[Symbol.iterator],M="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,j=/>/g,B=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,z=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),q=z(1),V=(z(2),z(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),F=new WeakMap,J=U.createTreeWalker(U,129);function K(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=R;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,c=0;for(;c<s.length&&(n.lastIndex=c,h=n.exec(s),null!==h);)c=n.lastIndex,n===R?"!--"===h[1]?n=H:void 0!==h[1]?n=j:void 0!==h[2]?(I.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=B):void 0!==h[3]&&(n=B):n===B?">"===h[0]?(n=r??R,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?B:'"'===h[3]?L:D):n===L||n===D?n=B:n===H||n===j?n=R:(n=B,r=void 0);const d=n===B&&t[e+1].startsWith("/>")?" ":"";o+=n===R?s+x:l>=0?(i.push(a),s.slice(0,l)+S+s.slice(l)+P+d):s+P+(-2===l?e:d)}return[K(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,l]=Z(t,e);if(this.el=Q.createElement(h,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=l[o++],s=i.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?et:"?"===n[1]?st:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],k()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],k())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){if(e===V)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=T(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=J.nextNode(),o++)}return J.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),T(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):N(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Q(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Y(this.O(k()),this.O(k()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=G(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=G(this,i[s+n],e,n),a===V&&(a=this._$AH[n]),o||=!T(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends tt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??W)===V)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot={M:S,P,A:C,C:1,L:Z,R:X,D:N,V:G,I:Y,H:tt,N:st,U:it,B:et,F:rt},nt=b.litHtmlPolyfillSupport;nt?.(Q,Y),(b.litHtmlVersions??=[]).push("3.3.0");const at=globalThis;class ht extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Y(e.insertBefore(k(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ht._$litElement$=!0,ht.finalized=!0,at.litElementHydrateSupport?.({LitElement:ht});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ht}),(at.litElementVersions??=[]).push("4.2.0");const ct=Symbol();class dt{get taskComplete(){return this.t||(1===this.i?this.t=new Promise(((t,e)=>{this.o=t,this.h=e})):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,s){this.p=0,this.i=0,(this._=t).addController(this);const i="object"==typeof e?e:{task:e,args:s};this.v=i.task,this.j=i.args,this.m=i.argsEqual??pt,this.k=i.onComplete,this.A=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.u=i.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||void 0===t||void 0!==e&&this.m(e,t)||await this.run(t)}async run(t){let e,s;t??=this.T(),this.O=t,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this._.requestUpdate())):this._.requestUpdate();const i=++this.p;this.q=new AbortController;let r=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(t){r=!0,s=t}if(this.p===i){if(e===ct)this.i=0;else{if(!1===r){try{this.k?.(e)}catch{}this.i=2,this.o?.(e)}else{try{this.A?.(s)}catch{}this.i=3,this.h?.(s)}this.u=e,this.l=s}this._.requestUpdate()}}abort(t){1===this.i&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}}const pt=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!v(t,e[s]))),ut={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v},gt=(t=ut,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function _t(t){return(e,s)=>"object"==typeof s?gt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function ft(t){return _t({...t,state:!0,attribute:!1})}class $t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:mt}=ot,vt=()=>document.createComment(""),yt=(t,e,s)=>{const i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(vt(),r),o=i.insertBefore(vt(),r);s=new mt(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,n=o!==t;if(n){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||n){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,r),t=e}}}return s},At=(t,e,s=t)=>(t._$AI(e,s),t),bt={},wt=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},Et=(t,e,s)=>{const i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},St=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends $t{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const r=[],o=[];let n=0;for(const e of t)r[n]=i?i(e,n):n,o[n]=s(e,n),n++;return{values:o,keys:r}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const r=(t=>t._$AH)(t),{values:o,keys:n}=this.dt(e,s,i);if(!Array.isArray(r))return this.ut=n,o;const a=this.ut??=[],h=[];let l,c,d=0,p=r.length-1,u=0,g=o.length-1;for(;d<=p&&u<=g;)if(null===r[d])d++;else if(null===r[p])p--;else if(a[d]===n[u])h[u]=At(r[d],o[u]),d++,u++;else if(a[p]===n[g])h[g]=At(r[p],o[g]),p--,g--;else if(a[d]===n[g])h[g]=At(r[d],o[g]),yt(t,h[g+1],r[d]),d++,g--;else if(a[p]===n[u])h[u]=At(r[p],o[u]),yt(t,r[d],r[p]),p--,u++;else if(void 0===l&&(l=Et(n,u,g),c=Et(a,d,p)),l.has(a[d]))if(l.has(a[p])){const e=c.get(n[u]),s=void 0!==e?r[e]:null;if(null===s){const e=yt(t,r[d]);At(e,o[u]),h[u]=e}else h[u]=At(s,o[u]),yt(t,r[d],s),r[e]=null;u++}else wt(r[p]),p--;else wt(r[d]),d++;for(;u<=g;){const e=yt(t,h[g+1]);At(e,o[u]),h[u++]=e}for(;d<=p;){const t=r[d++];null!==t&&wt(t)}return this.ut=n,((t,e=bt)=>{t._$AH=e})(t,h),V}});var Pt,Ct=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},xt=function(t,e,s,i){return new(s||(s=Promise))((function(r,o){function n(t){try{h(i.next(t))}catch(t){o(t)}}function a(t){try{h(i.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,a)}h((i=i.apply(t,e||[])).next())}))};let Ut=Pt=class extends ht{constructor(){super(),this._categories=[],this._currentAddons=[],this._addonsPageNum=0,this._addonsTotalPages=0,this._firstPage=!0,this._lastPage=!1,this._widgetState="overview",this._selectedAddon=null,this._language=Pt.languages[0],this._selectedCategory=null,this.addonsPerPage=6,this._TaskCategories=new dt(this,{task:(t,e)=>xt(this,[t,e],void 0,(function*([],{signal:t}){let e=new URL("https://support.flexibee.eu/api/categories");const s=new Request(e),i=yield fetch(s,{signal:t});if(!i.ok)throw new Error(i.status.toString());const r=yield i.json();return console.log(r),r})),args:()=>[this._addonsPageNum,this.addonsPerPage]}),this._addons=new dt(this,{task:(t,e)=>xt(this,[t,e],void 0,(function*([t,e,s,i],{signal:r}){let o=new URL("https://support.flexibee.eu/api/addons/search");e&&o.searchParams.append("categoryId",e.toString()),o.searchParams.append("page",s.toString()),o.searchParams.append("size",i.toString());const n=new Request(o),a=yield fetch(n,{signal:r});if(!a.ok)throw new Error(a.status.toString());const h=yield a.json();console.log(h),this._firstPage=h.first,this._lastPage=h.last,this._addonsTotalPages=h.totalPages,this._currentAddons=h.content})),args:()=>[this._language,this._selectedCategory,this._addonsPageNum,this.addonsPerPage]}),this._TaskCategories.run(),this._TaskCategories.taskComplete.then((t=>{this._categories=t||[]})).catch((t=>{console.error("Failed to fetch categories:",t),this._categories=[]}))}_goBack(){this._widgetState="overview"}_goToDetail(t){this._selectedAddon=t,this._widgetState="detail"}_search(){this._addonsPageNum=0,this._selectedCategory=parseInt(this.shadowRoot.getElementById("selectCategory").value)}_renderHeader(){return q`
            <header class="panel">
                ${"detail"==this._widgetState?q`
                <button @click="${this._goBack}">Back</button>
                <h1 class='centered'>${this._selectedAddon.perex}</h1>
                `:q`
                <h1 class='centered'>Doplňky ABRA Flexi</h1>
                <div id='searchFilters'>
                    <label for='selectCategory'>Category</label>
                    <select id='selectCategory'>
                        ${this._categories.map((t=>{let e;switch(this._language){case"cz":e=t.nameCs;break;case"sk":e=t.nameSk;break;case"en":e=t.nameEn;break;case"de":e=t.nameDe;break;default:throw"Intern language incobatibility"}return q`
                        <option value="${t.id}">${e}</option>
                    `}))}
                        <option value="">--All--</option>
                    </select>
                    <button @click="${this._search}">Search</button>
                </div>
                `}
                <select>
                    ${Pt.languages.map((t=>q`
                        <option value="${t}">${t}</option>
                    `))}
                </select>
            </header>
        `}_renderPreview(){return q`
        <div id='content' class='cards'>
            ${Array.from({length:this.addonsPerPage},((t,e)=>q`<article class='addon'>Loading...</article>`))}
        </div>`}_retrievePerex(t){const e=document.createElement("p");return e.innerHTML=t.perex,Array.from(e.getElementsByTagName("style")).forEach((t=>e.removeChild(t))),Array.from(e.getElementsByTagName("font")).forEach((t=>e.removeChild(t))),Array.from(e.getElementsByTagName("*")).forEach((t=>t.removeAttribute("style"))),e}_renderOverview(){return q`
        <div id='content' class='cards'>
        ${St(this._currentAddons,(t=>t.id),(t=>q`
                <article class='addon' @click="${()=>this._goToDetail(t)}">
                    <image src='${t.photo.toString()}'></image>
                    <h2>Název doplňku</h2>
                    ${this._retrievePerex(t)}
                </article>
            `))}
        </div>`}_renderDetail(){const t=document.createElement("div");return t.id="content",t.classList.add("detail"),t.innerHTML=this._selectedAddon.description,Array.from(t.getElementsByTagName("style")).forEach((e=>t.removeChild(e))),t}_renderFooter(){return q`
        <footer class="panel">
                ${"detail"==this._widgetState?q`
                <image src='${this._selectedAddon.photo.toString()}'></image>
                <button @click="${()=>{}}">Instalovat</button>
                `:q`
                <div class="panel centered">
                    ${this._firstPage?"":q`<button @click="${()=>this._addonsPageNum--}"> < </button>`}
                    <div class="centered">
                        ${this._addonsPageNum+1}/${this._addonsTotalPages}
                    </div>
                    ${this._lastPage?"":q`<button @click="${()=>this._addonsPageNum++}"> > </button>`}
                </div>
                `}
        </footer>`}render(){return q`
        <div id='container'>
            ${this._renderHeader()}
            ${"overview"==this._widgetState?this._addons.render({initial:()=>q`<p>Waiting to start task</p>`,pending:()=>this._renderPreview(),complete:()=>this._renderOverview(),error:t=>q`<p>Oops, something went wrong: ${t}</p>`}):this._renderDetail()}
            ${this._renderFooter()}
        <slot></slot>
        </div>`}};Ut.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(i,t,s)})`
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
        }

        .cards {
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
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
            object-fit: cover;
            max-width: 100%;
            height: 4em;
        }
        
        .addon p {
            overflow-y: hidden;
        }

        #pager {
            grid-column-start: 2;
        }
    `,Ut.languages=["cz","sk","en","de"],Ct([ft()],Ut.prototype,"_categories",void 0),Ct([ft()],Ut.prototype,"_currentAddons",void 0),Ct([ft()],Ut.prototype,"_addonsPageNum",void 0),Ct([ft()],Ut.prototype,"_addonsTotalPages",void 0),Ct([ft()],Ut.prototype,"_firstPage",void 0),Ct([ft()],Ut.prototype,"_lastPage",void 0),Ct([ft()],Ut.prototype,"_widgetState",void 0),Ct([ft()],Ut.prototype,"_selectedAddon",void 0),Ct([ft()],Ut.prototype,"_language",void 0),Ct([ft()],Ut.prototype,"_selectedCategory",void 0),Ct([_t({type:Number})],Ut.prototype,"addonsPerPage",void 0),Ut=Pt=Ct([(t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("addons-widget")],Ut)})();