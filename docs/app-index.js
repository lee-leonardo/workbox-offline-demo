/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${n}`);class o{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],a=document.createTreeWalker(t.content,133,null,!1);let l=0,p=-1,h=0;const{strings:u,values:{length:m}}=e;for(;h<m;){const e=a.nextNode();if(null!==e){if(p++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)s(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=u[h],i=d.exec(t)[2],n=i.toLowerCase()+"$lit$",o=e.getAttribute(n);e.removeAttribute(n);const s=o.split(r);this.parts.push({type:"attribute",index:p,name:i,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,o=t.split(r),a=o.length-1;for(let t=0;t<a;t++){let n,r=o[t];if(""===r)n=c();else{const e=d.exec(r);null!==e&&s(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(r)}i.insertBefore(n,e),this.parts.push({type:"node",index:++p})}""===o[a]?(i.insertBefore(c(),e),n.push(e)):e.data=o[a],h+=a}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&p!==l||(p++,t.insertBefore(c(),e)),l=p,this.parts.push({type:"node",index:p}),null===e.nextSibling?e.data="":(n.push(e),p--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),h++}}else a.currentNode=o.pop()}for(const e of n)e.parentNode.removeChild(e)}}const s=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},a=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(e,t){const{element:{content:i},parts:n}=e,r=document.createTreeWalker(i,133,null,!1);let o=h(n),s=n[o],a=-1,c=0;const d=[];let l=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(d.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==s&&s.index===a;)s.index=null!==l?-1:s.index-c,o=h(n,o),s=n[o]}d.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},h=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(a(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,m=e=>(...t)=>{const i=e(...t);return u.set(i,!0),i},f=e=>"function"==typeof e&&u.has(e),g={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,s=0,c=0,d=r.nextNode();for(;s<n.length;)if(o=n[s],a(o)){for(;c<o.index;)c++,"TEMPLATE"===d.nodeName&&(i.push(d),r.currentNode=d.content),null===(d=r.nextNode())&&(r.currentNode=i.pop(),d=r.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),y=` ${i} `;class x{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let o=0;o<e;o++){const e=this.strings[o],s=e.lastIndexOf("\x3c!--");r=(s>-1||r)&&-1===e.indexOf("--\x3e",s+1);const a=d.exec(e);t+=null===a?e+(r?y:n):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==v&&(t=v.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new E(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!k(e))return e}let n="";for(let r=0;r<t;r++){n+=e[r];const t=i[r];if(void 0!==t){const e=t.value;if(w(e)||!k(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||w(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===b?(this.value=b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const i=new _(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const r of e)i=t[n],void 0===i&&(i=new C(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(r),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class T extends S{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends E{}let R=!1;(()=>{try{const e={get capture(){return R=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class O{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=P(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const P=e=>e&&(R?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function F(e){let t=N.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},N.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i);return n=t.keyString.get(r),void 0===n&&(n=new o(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const N=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const B=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,n){const r=t[0];if("."===r){return new T(e,t.slice(1),i).parts}if("@"===r)return[new O(e,t.slice(1),n.eventContext)];if("?"===r)return[new A(e,t.slice(1),i)];return new S(e,t,i).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const L=(e,...t)=>new x(e,t,"html",B)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,D=(e,t)=>`${e}--${t}`;let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const z=e=>t=>{const n=D(t.type,e);let r=N.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},N.set(n,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const a=t.strings.join(i);if(s=r.keyString.get(a),void 0===s){const i=t.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(i,e),s=new o(t,i),r.keyString.set(a,s)}return r.stringsArray.set(t.strings,s),s},H=["html","svg"],U=new Set,j=(e,t,i)=>{U.add(e);const n=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=r[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{H.forEach(t=>{const i=N.get(D(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),l(e,i)})})})(e);const a=n.content;i?function(e,t,i=null){const{element:{content:n},parts:r}=e;if(null==i)return void n.appendChild(t);const o=document.createTreeWalker(n,133,null,!1);let s=h(r),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===i&&(a=p(t),i.parentNode.insertBefore(t,i));-1!==s&&r[s].index===c;){if(a>0){for(;-1!==s;)r[s].index+=a,s=h(r,s);return}s=h(r,s)}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),l(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const V={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},q=(e,t)=>t!==e&&(t==t||e==e),G={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:q};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=G){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdateInternal(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||G}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=q){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||V,r="function"==typeof n?n:n.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||V.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=G){const n=this.constructor,r=n._attributeNameForProperty(e,i);if(void 0!==r){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let n=!0;if(void 0!==e){const r=this.constructor;i=i||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const X=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),K=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function J(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):K(e,t)}function Y(e){return J({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function Q(e,t){return(i,n)=>{const r={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;r.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(e)),this[t]}}return void 0!==n?ee(r,i,n):te(r,i)}}function Z(e){return(t,i)=>{const n={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?ee(n,t,i):te(n,t)}}const ee=(e,t,i)=>{Object.defineProperty(t,i,e)},te=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ie(e){return(t,i)=>void 0!==i?((e,t,i)=>{Object.assign(t[i],e)})(e,t,i):((e,t)=>Object.assign(Object.assign({},t),{finisher(i){Object.assign(i.prototype[t.key],e)}}))(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ne=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol();class oe{constructor(e,t){if(t!==re)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ne?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const se=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof oe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new oe(i,re)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ae={};class ce extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),n=[];i.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!ne){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new oe(String(t),re)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ne?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ae&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ae}}ce.finalized=!0,ce.render=(e,i,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=M.has(i),s=$&&11===i.nodeType&&!!i.host,a=s&&!U.has(r),c=a?document.createDocumentFragment():i;if(((e,i,n)=>{let r=M.get(i);void 0===r&&(t(i,i.firstChild),M.set(i,r=new C(Object.assign({templateFactory:F},n))),r.appendInto(i)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:z(r)},n)),a){const e=M.get(c);M.delete(c);const n=e.value instanceof _?e.value.template:void 0;j(r,c,n),t(i,i.firstChild),i.appendChild(c),M.set(i,e)}!o&&s&&window.ShadyCSS.styleElement(i.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const de="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,le=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},pe=`{{lit-${String(Math.random()).slice(2)}}}`,he=`\x3c!--${pe}--\x3e`,ue=new RegExp(`${pe}|${he}`);class me{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,s=-1,a=0;const{strings:c,values:{length:d}}=e;for(;a<d;){const e=r.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)fe(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=c[a],i=_e.exec(t)[2],n=i.toLowerCase()+"$lit$",r=e.getAttribute(n);e.removeAttribute(n);const o=r.split(ue);this.parts.push({type:"attribute",index:s,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(pe)>=0){const n=e.parentNode,r=t.split(ue),o=r.length-1;for(let t=0;t<o;t++){let i,o=r[t];if(""===o)i=be();else{const e=_e.exec(o);null!==e&&fe(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}n.insertBefore(i,e),this.parts.push({type:"node",index:++s})}""===r[o]?(n.insertBefore(be(),e),i.push(e)):e.data=r[o],a+=o}}else if(8===e.nodeType)if(e.data===pe){const t=e.parentNode;null!==e.previousSibling&&s!==o||(s++,t.insertBefore(be(),e)),o=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(i.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(pe,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const fe=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},ge=e=>-1!==e.index,be=()=>document.createComment(""),_e=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ve(e,t){const{element:{content:i},parts:n}=e,r=document.createTreeWalker(i,133,null,!1);let o=xe(n),s=n[o],a=-1,c=0;const d=[];let l=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(d.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==s&&s.index===a;)s.index=null!==l?-1:s.index-c,o=xe(n,o),s=n[o]}d.forEach(e=>e.parentNode.removeChild(e))}const ye=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},xe=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(ge(t))return i}return-1},we=new WeakMap,ke=e=>"function"==typeof e&&we.has(e),Se={},Ee={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ce{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=de?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,o=0,s=0,a=n.nextNode();for(;o<i.length;)if(r=i[o],ge(r)){for(;s<r.index;)s++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return de&&(document.adoptNode(e),customElements.upgrade(e)),e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const Ae=` ${pe} `;class Te{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const o=_e.exec(e);t+=null===o?e+(i?Ae:he):e.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+pe}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const Ie=e=>null===e||!("object"==typeof e||"function"==typeof e),Re=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Oe{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Pe(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let n=0;n<t;n++){i+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(Ie(e)||!Re(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Pe{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Se||Ie(e)&&e===this.value||(this.value=e,ke(e)||(this.committer.dirty=!0))}commit(){for(;ke(this.value);){const e=this.value;this.value=Se,e(this)}this.value!==Se&&this.committer.commit()}}class Fe{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(be()),this.endNode=e.appendChild(be())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=be()),e.__insert(this.endNode=be())}insertAfterPart(e){e.__insert(this.startNode=be()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;ke(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Se,e(this)}const e=this.__pendingValue;e!==Se&&(Ie(e)?e!==this.value&&this.__commitText(e):e instanceof Te?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Re(e)?this.__commitIterable(e):e===Ee?(this.value=Ee,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ce&&this.value.template===t)this.value.update(e.values);else{const i=new Ce(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const r of e)i=t[n],void 0===i&&(i=new Fe(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(r),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){le(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ne{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;ke(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Se,e(this)}if(this.__pendingValue===Se)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Se}}class Me extends Oe{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new Be(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Be extends Pe{}let Le=!1;(()=>{try{const e={get capture(){return Le=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class De{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;ke(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Se,e(this)}if(this.__pendingValue===Se)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=$e(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Se}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const $e=e=>e&&(Le?{capture:e.capture,passive:e.passive,once:e.once}:e.capture
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */);function ze(e){let t=He.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},He.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(pe);return i=t.keyString.get(n),void 0===i&&(i=new me(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const He=new Map,Ue=new WeakMap,je=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,n){const r=t[0];return"."===r?new Me(e,t.slice(1),i).parts:"@"===r?[new De(e,t.slice(1),n.eventContext)]:"?"===r?[new Ne(e,t.slice(1),i)]:new Oe(e,t,i).parts}handleTextExpression(e){return new Fe(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Ve=(e,...t)=>new Te(e,t,"html",je)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,qe=(e,t)=>`${e}--${t}`;let Ge=!0;void 0===window.ShadyCSS?Ge=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ge=!1);const We=e=>t=>{const i=qe(t.type,e);let n=He.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},He.set(i,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const o=t.strings.join(pe);if(r=n.keyString.get(o),void 0===r){const i=t.getTemplateElement();Ge&&window.ShadyCSS.prepareTemplateDom(i,e),r=new me(t,i),n.keyString.set(o,r)}return n.stringsArray.set(t.strings,r),r},Xe=["html","svg"],Ke=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const Je={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Ye=(e,t)=>t!==e&&(t==t||e==e),Qe={attribute:!0,type:String,converter:Je,reflect:!1,hasChanged:Ye};class Ze extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Qe){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this._requestUpdate(e,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Qe}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Ye){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||Je,r="function"==typeof n?n:n.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||Je.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=Qe){const n=this.constructor,r=n._attributeNameForProperty(e,i);if(void 0!==r){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const n=this.constructor,r=n.getPropertyOptions(e);n._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Ze.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const et=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function tt(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):et(e,t)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/}const it="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol();class rt{constructor(e,t){if(t!==nt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(it?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ot=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof rt)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new rt(i,nt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const st={};class at extends Ze{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),n=[];i.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?it?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==st&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return st}}at.finalized=!0,at.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=Ue.has(t),o=Ge&&11===t.nodeType&&!!t.host,s=o&&!Ke.has(n),a=s?document.createDocumentFragment():t;if(((e,t,i)=>{let n=Ue.get(t);void 0===n&&(le(t,t.firstChild),Ue.set(t,n=new Fe(Object.assign({templateFactory:ze},i))),n.appendInto(t)),n.setValue(e),n.commit()})(e,a,Object.assign({templateFactory:We(n)},i)),s){const e=Ue.get(a);Ue.delete(a);((e,t,i)=>{Ke.add(e);const n=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=r[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{Xe.forEach(t=>{const i=He.get(qe(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),ve(e,i)})})})(e);const a=n.content;i?function(e,t,i=null){const{element:{content:n},parts:r}=e;if(null==i)return void n.appendChild(t);const o=document.createTreeWalker(n,133,null,!1);let s=xe(r),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===i&&(a=ye(t),i.parentNode.insertBefore(t,i));-1!==s&&r[s].index===c;){if(a>0){for(;-1!==s;)r[s].index+=a,s=xe(r,s);return}s=xe(r,s)}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),ve(i,e)}})(n,a,e.value instanceof Ce?e.value.template:void 0),le(t,t.firstChild),t.appendChild(a),Ue.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};var ct=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let dt=class extends at{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{"Escape"===e.key&&this.cancel()})}static get styles(){return ot`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch(e){console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch(e){return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),"accepted"===(await this.deferredprompt.userChoice).outcome){await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!0}{await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let i=new CustomEvent("hide");this.dispatchEvent(i),e()})}render(){return Ve`${"standalone"in navigator&&!1===navigator.standalone||!0!==this.usecustom&&this.shouldShowInstall()&&!1===this.installed?Ve`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${!0===this.openmodal?Ve`<div id="installModalWrapper">${this.openmodal?Ve`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?Ve`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>Ve`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?Ve`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>Ve`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?Ve`<p id="iosText">${this.iosinstallinfotext}</p>`:Ve`<div id="buttonsContainer">${this.deferredprompt?Ve`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:Ve`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function lt(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */}ct([tt({type:String})],dt.prototype,"manifestpath",void 0),ct([tt({type:String})],dt.prototype,"iconpath",void 0),ct([tt({type:Object})],dt.prototype,"manifestdata",void 0),ct([tt({type:Boolean})],dt.prototype,"openmodal",void 0),ct([tt({type:Boolean})],dt.prototype,"showopen",void 0),ct([tt({type:Boolean})],dt.prototype,"isSupportingBrowser",void 0),ct([tt({type:Boolean})],dt.prototype,"isIOS",void 0),ct([tt({type:Boolean})],dt.prototype,"installed",void 0),ct([tt({type:Boolean})],dt.prototype,"hasprompt",void 0),ct([tt({type:Boolean})],dt.prototype,"usecustom",void 0),ct([tt({type:Array})],dt.prototype,"relatedApps",void 0),ct([tt({type:String})],dt.prototype,"explainer",void 0),ct([tt({type:String})],dt.prototype,"featuresheader",void 0),ct([tt({type:String})],dt.prototype,"descriptionheader",void 0),ct([tt({type:String})],dt.prototype,"installbuttontext",void 0),ct([tt({type:String})],dt.prototype,"cancelbuttontext",void 0),ct([tt({type:String})],dt.prototype,"iosinstallinfotext",void 0),ct([tt()],dt.prototype,"deferredprompt",void 0),dt=ct([("pwa-install",e=>"function"==typeof e?((e,t)=>(window.customElements.define("pwa-install",t),t))(0,e):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(e){window.customElements.define("pwa-install",e)}}})(0,e))],dt);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const pt=se`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let ht=class extends ce{render(){return L`<slot></slot>`}};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ut(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */}function mt(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ht.styles=pt,ht=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}([X("mwc-icon")],ht);const ft=e=>e.nodeType===Node.ELEMENT_NODE;const gt=()=>{},bt={get passive(){return!1}};document.addEventListener("x",gt,bt),document.removeEventListener("x",gt);const _t=(e=window.document)=>{let t=e.activeElement;const i=[];if(!t)return i;for(;t&&(i.push(t),t.shadowRoot);)t=t.shadowRoot.activeElement;return i},vt=e=>{const t=_t();if(!t.length)return!1;const i=t[t.length-1],n=new Event("check-if-focused",{bubbles:!0,composed:!0});let r=[];const o=e=>{r=e.composedPath()};return document.body.addEventListener("check-if-focused",o),i.dispatchEvent(n),document.body.removeEventListener("check-if-focused",o),-1!==r.indexOf(e)};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class yt extends ce{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xt=function(e,t){return(xt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function wt(e,t){function i(){this.constructor=e}xt(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}var kt=function(){return(kt=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var St=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),Et={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ct={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},At={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Tt=["touchstart","pointerdown","mousedown","keydown"],It=["touchend","pointerup","mouseup","contextmenu"],Rt=[],Ot=function(e){function t(i){var n=e.call(this,kt(kt({},t.defaultAdapter),i))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(e){return n.activate_(e)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return wt(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Et},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ct},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return At},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var n=t.cssClasses,r=n.ROOT,o=n.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(r),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal_())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var i=t.cssClasses,n=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(n),e.adapter.removeClass(r),e.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},t.prototype.activate=function(e){this.activate_(e)},t.prototype.deactivate=function(){this.deactivate_()},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},t.prototype.setUnbounded=function(e){var i=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers_=function(e){var t=this;e&&(Tt.forEach((function(e){t.adapter.registerInteractionHandler(e,t.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},t.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):It.forEach((function(e){t.adapter.registerDocumentInteractionHandler(e,t.deactivateHandler_)}))},t.prototype.deregisterRootHandlers_=function(){var e=this;Tt.forEach((function(t){e.adapter.deregisterInteractionHandler(t,e.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},t.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),It.forEach((function(t){e.adapter.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))},t.prototype.removeCssVars_=function(){var e=this,i=t.strings;Object.keys(i).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter.updateCssVariable(i[t],null)}))},t.prototype.activate_=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var n=this.previousActivationEvent_;if(!(n&&void 0!==e&&n.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&Rt.length>0&&Rt.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState_():(void 0!==e&&(Rt.push(e.target),this.registerDeactivationHandlers_(e)),i.wasElementMadeActive=this.checkElementMadeActive_(e),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){Rt=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive_(e),i.wasElementMadeActive&&t.animateActivation_()),i.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())})))}}},t.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},t.prototype.animateActivation_=function(){var e=this,i=t.strings,n=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,o=t.cssClasses,s=o.FG_DEACTIVATION,a=o.FG_ACTIVATION,c=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var d="",l="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates_(),h=p.startPoint,u=p.endPoint;d=h.x+"px, "+h.y+"px",l=u.x+"px, "+u.y+"px"}this.adapter.updateCssVariable(n,d),this.adapter.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(a),this.activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),c)},t.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,i=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var n,r,o=t.x,s=t.y,a=o+i.left,c=s+i.top;if("touchstart"===e.type){var d=e;n=d.changedTouches[0].pageX-a,r=d.changedTouches[0].pageY-c}else{var l=e;n=l.pageX-a,r=l.pageY-c}return{x:n,y:r}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},t.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,i=t.cssClasses.FG_DEACTIVATION,n=this.activationState_,r=n.hasDeactivationUXRun,o=n.isActivated;(r||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter.removeClass(i)}),At.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses_=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return e.previousActivationEvent_=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var i=kt({},t);t.isProgrammatic?(requestAnimationFrame((function(){return e.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(i),e.resetActivationState_()})))}},t.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady_()},t.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?i:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING;var n=Math.floor(i*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!=0?this.initialSize_=n-1:this.initialSize_=n,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},t.prototype.updateLayoutCssVars_=function(){var e=t.strings,i=e.VAR_FG_SIZE,n=e.VAR_LEFT,r=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize_+"px"),this.adapter.updateCssVariable(o,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords_.top+"px"))},t}(St);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Pt{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const Ft=new WeakMap,Nt=m(e=>t=>{if(!(t instanceof E)||t instanceof I||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:n}=i;let r=Ft.get(t);void 0===r&&(n.setAttribute("class",i.strings.join(" ")),Ft.set(t,r=new Set));const o=n.classList||new Pt(n);r.forEach(t=>{t in e||(o.remove(t),r.delete(t))});for(const t in e){const i=e[t];i!=r.has(t)&&(i?(o.add(t),r.add(t)):(o.remove(t),r.delete(t)))}"function"==typeof o.commit&&o.commit()}),Mt=new WeakMap,Bt=m(e=>t=>{if(!(t instanceof E)||t instanceof I||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:n}=i.element;let r=Mt.get(t);void 0===r&&(n.cssText=i.strings.join(" "),Mt.set(t,r=new Set)),r.forEach(t=>{t in e||(r.delete(t),-1===t.indexOf("-")?n[t]=null:n.removeProperty(t))});for(const t in e)r.add(t),-1===t.indexOf("-")?n[t]=e[t]:n.setProperty(t,e[t])});class Lt extends yt{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=Ot}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation(()=>{this.mdcFoundation.activate(e)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded};return L`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Nt(i)}"
          style="${Bt({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}ut([Q(".mdc-ripple-surface")],Lt.prototype,"mdcRoot",void 0),ut([J({type:Boolean})],Lt.prototype,"primary",void 0),ut([J({type:Boolean})],Lt.prototype,"accent",void 0),ut([J({type:Boolean})],Lt.prototype,"unbounded",void 0),ut([J({type:Boolean})],Lt.prototype,"disabled",void 0),ut([J({type:Boolean})],Lt.prototype,"activated",void 0),ut([J({type:Boolean})],Lt.prototype,"selected",void 0),ut([Y()],Lt.prototype,"hovering",void 0),ut([Y()],Lt.prototype,"bgFocused",void 0),ut([Y()],Lt.prototype,"fgActivation",void 0),ut([Y()],Lt.prototype,"fgDeactivation",void 0),ut([Y()],Lt.prototype,"fgScale",void 0),ut([Y()],Lt.prototype,"fgSize",void 0),ut([Y()],Lt.prototype,"translateStart",void 0),ut([Y()],Lt.prototype,"translateEnd",void 0),ut([Y()],Lt.prototype,"leftPos",void 0),ut([Y()],Lt.prototype,"topPos",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Dt=se`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;let $t=class extends Lt{};$t.styles=Dt,$t=ut([X("mwc-ripple")],$t);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class zt{constructor(e){this.startPress=t=>{e().then(e=>{e&&e.startPress(t)})},this.endPress=()=>{e().then(e=>{e&&e.endPress()})},this.startFocus=()=>{e().then(e=>{e&&e.startFocus()})},this.endFocus=()=>{e().then(e=>{e&&e.endFocus()})},this.startHover=()=>{e().then(e=>{e&&e.startHover()})},this.endHover=()=>{e().then(e=>{e&&e.endHover()})}}}class Ht extends ce{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new zt(()=>(this.shouldRenderRipple=!0,this.ripple))}renderOverlay(){return L``}renderRipple(){const e=this.raised||this.unelevated;return this.shouldRenderRipple?L`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}getRenderClasses(){return Nt({"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense})}render(){return L`
      <button
          id="button"
          class="mdc-button ${this.getRenderClasses()}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${Nt({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return L`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}lt([J({type:Boolean,reflect:!0})],Ht.prototype,"raised",void 0),lt([J({type:Boolean,reflect:!0})],Ht.prototype,"unelevated",void 0),lt([J({type:Boolean,reflect:!0})],Ht.prototype,"outlined",void 0),lt([J({type:Boolean})],Ht.prototype,"dense",void 0),lt([J({type:Boolean,reflect:!0})],Ht.prototype,"disabled",void 0),lt([J({type:Boolean,attribute:"trailingicon"})],Ht.prototype,"trailingIcon",void 0),lt([J({type:Boolean,reflect:!0})],Ht.prototype,"fullwidth",void 0),lt([J({type:String})],Ht.prototype,"icon",void 0),lt([J({type:String})],Ht.prototype,"label",void 0),lt([J({type:Boolean})],Ht.prototype,"expandContent",void 0),lt([Q("#button")],Ht.prototype,"buttonElement",void 0),lt([Z("mwc-ripple")],Ht.prototype,"ripple",void 0),lt([Y()],Ht.prototype,"shouldRenderRipple",void 0),lt([ie({passive:!0})],Ht.prototype,"handleRippleActivate",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ut=se`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color: #fff;--mdc-ripple-focus-opacity: 0.24;--mdc-ripple-hover-opacity: 0.08;--mdc-ripple-press-opacity: 0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;let jt=class extends Ht{};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Vt(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */}function qt(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/jt.styles=Ut,jt=lt([X("mwc-button")],jt);const Gt=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach((e,i)=>t.constructor._observers.set(i,e))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)})}}t.constructor._observers.set(i,e)}
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */;class Wt extends ce{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new zt(()=>(this.shouldRenderRipple=!0,this.ripple)),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:e=>{const t=e.type;this.onDown("mousedown"===t?"mouseup":"touchend",e)}}]}get text(){const e=this.textContent;return e?e.trim():""}render(){const e=this.renderText(),t=this.graphic?this.renderGraphic():L``,i=this.hasMeta?this.renderMeta():L``;return L`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`}renderRipple(){return this.shouldRenderRipple?L`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?L`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const e={multi:this.multipleGraphics};return L`
      <span class="mdc-list-item__graphic material-icons ${Nt(e)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return L`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const e=this.twoline?this.renderTwoline():this.renderSingleLine();return L`
      <span class="mdc-list-item__text">
        ${e}
      </span>`}renderSingleLine(){return L`<slot></slot>`}renderTwoline(){return L`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(e,t){const i=()=>{window.removeEventListener(e,i),this.rippleHandlers.endPress()};window.addEventListener(e,i),this.rippleHandlers.startPress(t)}fireRequestSelected(e,t){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:t,selected:e}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const e of this.listeners)for(const t of e.eventNames)e.target.addEventListener(t,e.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)for(const t of e.eventNames)e.target.removeEventListener(t,e.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const e=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}qt([Q("slot")],Wt.prototype,"slotElement",void 0),qt([Z("mwc-ripple")],Wt.prototype,"ripple",void 0),qt([J({type:String})],Wt.prototype,"value",void 0),qt([J({type:String,reflect:!0})],Wt.prototype,"group",void 0),qt([J({type:Number,reflect:!0})],Wt.prototype,"tabindex",void 0),qt([J({type:Boolean,reflect:!0}),Gt((function(e){e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],Wt.prototype,"disabled",void 0),qt([J({type:Boolean,reflect:!0})],Wt.prototype,"twoline",void 0),qt([J({type:Boolean,reflect:!0})],Wt.prototype,"activated",void 0),qt([J({type:String,reflect:!0})],Wt.prototype,"graphic",void 0),qt([J({type:Boolean})],Wt.prototype,"multipleGraphics",void 0),qt([J({type:Boolean})],Wt.prototype,"hasMeta",void 0),qt([J({type:Boolean,reflect:!0}),Gt((function(e){e?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],Wt.prototype,"noninteractive",void 0),qt([J({type:Boolean,reflect:!0}),Gt((function(e){const t=this.getAttribute("role"),i="gridcell"===t||"option"===t||"row"===t||"tab"===t;i&&e?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(e,"property")}))],Wt.prototype,"selected",void 0),qt([Y()],Wt.prototype,"shouldRenderRipple",void 0),qt([Y()],Wt.prototype,"_managingList",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Xt=se`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta.multi{width:auto}.mdc-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic.multi,:host([graphic=large]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Kt=class extends Wt{};Kt.styles=Xt,Kt=qt([X("mwc-list-item")],Kt);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Jt=new WeakMap,Yt=m(e=>t=>{const i=Jt.get(t);if(void 0===e&&t instanceof E){if(void 0!==i||!Jt.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==i&&t.setValue(e);Jt.set(t,e)});
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Qt="Unknown",Zt="Backspace",ei="Enter",ti="Spacebar",ii="PageUp",ni="PageDown",ri="End",oi="Home",si="ArrowLeft",ai="ArrowUp",ci="ArrowRight",di="ArrowDown",li="Delete",pi="Escape",hi=new Set;hi.add(Zt),hi.add(ei),hi.add(ti),hi.add(ii),hi.add(ni),hi.add(ri),hi.add(oi),hi.add(si),hi.add(ai),hi.add(ci),hi.add(di),hi.add(li),hi.add(pi);var ui=8,mi=13,fi=32,gi=33,bi=34,_i=35,vi=36,yi=37,xi=38,wi=39,ki=40,Si=46,Ei=27,Ci=new Map;Ci.set(ui,Zt),Ci.set(mi,ei),Ci.set(fi,ti),Ci.set(gi,ii),Ci.set(bi,ni),Ci.set(_i,ri),Ci.set(vi,oi),Ci.set(yi,si),Ci.set(xi,ai),Ci.set(wi,ci),Ci.set(ki,di),Ci.set(Si,li),Ci.set(Ei,pi);var Ai=new Set;function Ti(e){var t=e.key;if(hi.has(t))return t;var i=Ci.get(e.keyCode);return i||Qt}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */Ai.add(ii),Ai.add(ni),Ai.add(ri),Ai.add(oi),Ai.add(si),Ai.add(ai),Ai.add(ci),Ai.add(di);var Ii="mdc-list-item",Ri="mdc-list-item--disabled",Oi={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+Ii+" button:not(:disabled),\n    ."+Ii+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+Ii+" button:not(:disabled),\n    ."+Ii+" a,\n    ."+Ii+' input[type="radio"]:not(:disabled),\n    .'+Ii+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},Pi={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
const Fi=["input","button","textarea","select"];function Ni(e){return e instanceof Set}const Mi=e=>{const t=e===Pi.UNSET_INDEX?new Set:e;return Ni(t)?new Set(t):new Set([t])};class Bi extends St{constructor(e){super(Object.assign(Object.assign({},Bi.defaultAdapter),e)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=Pi.UNSET_INDEX,this.focusedItemIndex_=Pi.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return Oi}static get numbers(){return Pi}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(e){this.wrapFocus_=e}setMulti(e){this.isMulti_=e;const t=this.selectedIndex_;if(e){if(!Ni(t)){const e=t===Pi.UNSET_INDEX;this.selectedIndex_=e?new Set:new Set([t])}}else if(Ni(t))if(t.size){const e=Array.from(t).sort();this.selectedIndex_=e[0]}else this.selectedIndex_=Pi.UNSET_INDEX}setVerticalOrientation(e){this.isVertical_=e}setUseActivatedClass(e){this.useActivatedClass_=e}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(e){this.isIndexValid_(e)&&(this.isMulti_?this.setMultiSelectionAtIndex_(Mi(e)):this.setSingleSelectionAtIndex_(e))}handleFocusIn(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,0)}handleFocusOut(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,-1),setTimeout(()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(e,t,i){const n="ArrowLeft"===Ti(e),r="ArrowUp"===Ti(e),o="ArrowRight"===Ti(e),s="ArrowDown"===Ti(e),a="Home"===Ti(e),c="End"===Ti(e),d="Enter"===Ti(e),l="Spacebar"===Ti(e);if(this.adapter.isRootFocused())return void(r||c?(e.preventDefault(),this.focusLastElement()):(s||a)&&(e.preventDefault(),this.focusFirstElement()));let p,h=this.adapter.getFocusedElementIndex();if(!(-1===h&&(h=i,h<0))){if(this.isVertical_&&s||!this.isVertical_&&o)this.preventDefaultEvent(e),p=this.focusNextElement(h);else if(this.isVertical_&&r||!this.isVertical_&&n)this.preventDefaultEvent(e),p=this.focusPrevElement(h);else if(a)this.preventDefaultEvent(e),p=this.focusFirstElement();else if(c)this.preventDefaultEvent(e),p=this.focusLastElement();else if((d||l)&&t){const t=e.target;if(t&&"A"===t.tagName&&d)return;this.preventDefaultEvent(e),this.setSelectedIndexOnAction_(h,!0)}this.focusedItemIndex_=h,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}handleSingleSelection(e,t,i){e!==Pi.UNSET_INDEX&&(this.setSelectedIndexOnAction_(e,t,i),this.setTabindexAtIndex_(e),this.focusedItemIndex_=e)}focusNextElement(e){let t=e+1;if(t>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return e;t=0}return this.adapter.focusItemAtIndex(t),t}focusPrevElement(e){let t=e-1;if(t<0){if(!this.wrapFocus_)return e;t=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(t),t}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const e=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(e),e}setEnabled(e,t){this.isIndexValid_(e)&&this.adapter.setDisabledStateForElementIndex(e,!t)}preventDefaultEvent(e){const t=(""+e.target.tagName).toLowerCase();-1===Fi.indexOf(t)&&e.preventDefault()}setSingleSelectionAtIndex_(e,t=!0){this.selectedIndex_!==e&&(this.selectedIndex_!==Pi.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0),this.setAriaForSingleSelectionAtIndex_(e),this.selectedIndex_=e,this.adapter.notifySelected(e))}setMultiSelectionAtIndex_(e,t=!0){const i=((e,t)=>{const i=Array.from(e),n=Array.from(t),r={added:[],removed:[]},o=i.sort(),s=n.sort();let a=0,c=0;for(;a<o.length||c<s.length;){const e=o[a],t=s[c];e!==t?void 0!==e&&(void 0===t||e<t)?(r.removed.push(e),a++):void 0!==t&&(void 0===e||t<e)&&(r.added.push(t),c++):(a++,c++)}return r})(Mi(this.selectedIndex_),e);if(i.removed.length||i.added.length){for(const e of i.removed)t&&this.adapter.setSelectedStateForElementIndex(e,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!1);for(const e of i.added)t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0);this.selectedIndex_=e,this.adapter.notifySelected(e,i)}}setAriaForSingleSelectionAtIndex_(e){this.selectedIndex_===Pi.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(e,Oi.ARIA_CURRENT));const t=null!==this.ariaCurrentAttrValue_,i=t?Oi.ARIA_CURRENT:Oi.ARIA_SELECTED;this.selectedIndex_!==Pi.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false");const n=t?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(e,i,n)}setTabindexAtIndex_(e){this.focusedItemIndex_===Pi.UNSET_INDEX&&0!==e?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==e&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(e,0)}setTabindexToFirstSelectedItem_(){let e=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==Pi.UNSET_INDEX?e=this.selectedIndex_:Ni(this.selectedIndex_)&&this.selectedIndex_.size>0&&(e=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(e)}isIndexValid_(e){if(e instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===e.size)return!0;{let t=!1;for(const i of e)if(t=this.isIndexInRange_(i),t)break;return t}}if("number"==typeof e){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return e===Pi.UNSET_INDEX||this.isIndexInRange_(e)}return!1}isIndexInRange_(e){const t=this.adapter.getListItemCount();return e>=0&&e<t}setSelectedIndexOnAction_(e,t,i){if(this.adapter.getDisabledStateForElementIndex(e))return;let n=e;if(this.isMulti_&&(n=new Set([e])),this.isIndexValid_(n)){if(this.isMulti_)this.toggleMultiAtIndex(e,i,t);else if(t||i)this.setSingleSelectionAtIndex_(e,t);else{this.selectedIndex_===e&&this.setSingleSelectionAtIndex_(Pi.UNSET_INDEX)}t&&this.adapter.notifyAction(e)}}toggleMultiAtIndex(e,t,i=!0){let n=!1;n=void 0===t?!this.adapter.getSelectedStateForElementIndex(e):t;const r=Mi(this.selectedIndex_);n?r.add(e):r.delete(e),this.setMultiSelectionAtIndex_(r,i)}}const Li=e=>e.hasAttribute("mwc-list-item");function Di(){const e=this.itemsReadyResolver;this.itemsReady=new Promise(e=>this.itemsReadyResolver=e),e()}class $i extends yt{constructor(){super(),this.mdcAdapter=null,this.mdcFoundationClass=Bi,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.itemsReadyResolver=()=>{},this.itemsReady=Promise.resolve([]),this.items_=[];const e=function(e,t=50){let i;return function(n=!0){clearTimeout(i),i=setTimeout(()=>{e(n)},t)}}(this.layout.bind(this));this.debouncedLayout=(t=!0)=>{Di.call(this),e(t)}}async _getUpdateComplete(){await super._getUpdateComplete(),await this.itemsReady}get assignedElements(){const e=this.slotElement;return e?e.assignedNodes({flatten:!0}).filter(ft):[]}get items(){return this.items_}updateItems(){const e=this.assignedElements,t=[];for(const i of e)Li(i)&&(t.push(i),i._managingList=this),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=t;const i=new Set;if(this.items_.forEach((e,t)=>{this.itemRoles?e.setAttribute("role",this.itemRoles):e.removeAttribute("role"),e.selected&&i.add(t)}),this.multi)this.select(i);else{const e=i.size?i.entries().next().value[1]:-1;this.select(e)}const n=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(n)}get selected(){const e=this.index;if(!Ni(e))return-1===e?null:this.items[e];const t=[];for(const i of e)t.push(this.items[i]);return t}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const e=null===this.innerRole?void 0:this.innerRole,t=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return L`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Yt(e)}"
          aria-label="${Yt(t)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `}renderPlaceholder(){return void 0!==this.emptyMessage&&0===this.assignedElements.length?L`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `:null}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusIn(e,t)}}onFocusOut(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusOut(e,t)}}onKeydown(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e),i=e.target,n=Li(i);this.mdcFoundation.handleKeydown(e,n,t)}}onRequestSelected(e){if(this.mdcFoundation){let t=this.getIndexOfTarget(e);if(-1===t&&(this.layout(),t=this.getIndexOfTarget(e),-1===t))return;if(this.items[t].disabled)return;const i=e.detail.selected,n=e.detail.source;this.mdcFoundation.handleSingleSelection(t,"interaction"===n,i),e.stopPropagation()}}getIndexOfTarget(e){const t=this.items,i=e.composedPath();for(const e of i){let i=-1;if(ft(e)&&Li(e)&&(i=t.indexOf(e)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(e,t)=>{if(!this.mdcRoot)return"";const i=this.items[e];return i?i.getAttribute(t):""},setAttributeForElementIndex:(e,t,i)=>{if(!this.mdcRoot)return;const n=this.items[e];n&&n.setAttribute(t,i)},focusItemAtIndex:e=>{const t=this.items[e];t&&t.focus()},setTabIndexForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.tabindex=t)},notifyAction:e=>{const t={bubbles:!0,composed:!0};t.detail={index:e};const i=new CustomEvent("action",t);this.dispatchEvent(i)},notifySelected:(e,t)=>{const i={bubbles:!0,composed:!0};i.detail={index:e,diff:t};const n=new CustomEvent("selected",i);this.dispatchEvent(n)},isFocusInsideList:()=>vt(this),isRootFocused:()=>{const e=this.mdcRoot;return e.getRootNode().activeElement===e},setDisabledStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.disabled=t)},getDisabledStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.disabled},setSelectedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.selected=t)},getSelectedStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.selected},setActivatedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.activated=t)}},this.mdcAdapter}selectUi(e,t=!1){const i=this.items[e];i&&(i.selected=!0,i.activated=t)}deselectUi(e){const t=this.items[e];t&&(t.selected=!1,t.activated=!1)}select(e){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(e)}toggle(e,t){this.multi&&this.mdcFoundation.toggleMultiAtIndex(e,t)}onListItemConnected(e){const t=e.target;this.layout(-1===this.items.indexOf(t))}layout(e=!0){e&&this.updateItems();const t=this.items[0];for(const e of this.items)e.tabindex=-1;t&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=t):t.tabindex=0),this.itemsReadyResolver()}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const e=_t();if(!e.length)return-1;for(let t=e.length-1;t>=0;t--){const i=e[t];if(Li(i))return this.items.indexOf(i)}return-1}focusItemAtIndex(e){for(const e of this.items)if(0===e.tabindex){e.tabindex=-1;break}this.items[e].tabindex=0,this.items[e].focus()}focus(){const e=this.mdcRoot;e&&e.focus()}blur(){const e=this.mdcRoot;e&&e.blur()}}qt([J({type:String})],$i.prototype,"emptyMessage",void 0),qt([Q(".mdc-list")],$i.prototype,"mdcRoot",void 0),qt([Q("slot")],$i.prototype,"slotElement",void 0),qt([J({type:Boolean}),Gt((function(e){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(e)}))],$i.prototype,"activatable",void 0),qt([J({type:Boolean}),Gt((function(e,t){this.mdcFoundation&&this.mdcFoundation.setMulti(e),void 0!==t&&this.layout()}))],$i.prototype,"multi",void 0),qt([J({type:Boolean}),Gt((function(e){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(e)}))],$i.prototype,"wrapFocus",void 0),qt([J({type:String}),Gt((function(e,t){void 0!==t&&this.updateItems()}))],$i.prototype,"itemRoles",void 0),qt([J({type:String})],$i.prototype,"innerRole",void 0),qt([J({type:String})],$i.prototype,"innerAriaLabel",void 0),qt([J({type:Boolean})],$i.prototype,"rootTabbable",void 0),qt([J({type:Boolean,reflect:!0}),Gt((function(e){const t=this.slotElement;if(e&&t){const e=function(e,t){for(const i of e.assignedNodes({flatten:!0}))if(ft(i)){const e=i;if(mt(e,t))return e}return null}(t,'[tabindex="0"]');this.previousTabindex=e,e&&e.setAttribute("tabindex","-1")}else!e&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],$i.prototype,"noninteractive",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const zi=se`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Hi=class extends $i{};Hi.styles=zi,Hi=qt([X("mwc-list")],Hi);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ui,ji,Vi={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},qi={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Gi={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(e){e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER",e[e.RIGHT=4]="RIGHT",e[e.FLIP_RTL=8]="FLIP_RTL"}(Ui||(Ui={})),function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=4]="TOP_RIGHT",e[e.BOTTOM_LEFT=1]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",e[e.TOP_START=8]="TOP_START",e[e.TOP_END=12]="TOP_END",e[e.BOTTOM_START=9]="BOTTOM_START",e[e.BOTTOM_END=13]="BOTTOM_END"}(ji||(ji={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wi=function(e){function t(i){var n=e.call(this,kt(kt({},t.defaultAdapter),i))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=ji.TOP_START,n.originCorner=ji.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return wt(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Vi},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return qi},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Gi},enumerable:!0,configurable:!0}),Object.defineProperty(t,"Corner",{get:function(){return ji},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=t.cssClasses,i=e.ROOT,n=e.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(n)&&(this.isSurfaceOpen=!0)},t.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},t.prototype.setAnchorCorner=function(e){this.anchorCorner=e},t.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^Ui.RIGHT},t.prototype.setAnchorMargin=function(e){this.anchorMargin.top=e.top||0,this.anchorMargin.right=e.right||0,this.anchorMargin.bottom=e.bottom||0,this.anchorMargin.left=e.left||0},t.prototype.setIsHoisted=function(e){this.isHoistedElement=e},t.prototype.setFixedPosition=function(e){this.isFixedPosition=e},t.prototype.setAbsolutePosition=function(e,t){this.position.x=this.isFinite(e)?e:0,this.position.y=this.isFinite(t)?t:0},t.prototype.setQuickOpen=function(e){this.isQuickOpen=e},t.prototype.isOpen=function(){return this.isSurfaceOpen},t.prototype.open=function(){var e=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(t.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(t.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){e.adapter.addClass(t.cssClasses.OPEN),e.dimensions=e.adapter.getInnerDimensions(),e.autoposition(),e.openAnimationEndTimerId=setTimeout((function(){e.openAnimationEndTimerId=0,e.adapter.removeClass(t.cssClasses.ANIMATING_OPEN),e.adapter.notifyOpen()}),Gi.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},t.prototype.close=function(e){var i=this;void 0===e&&(e=!1),this.isSurfaceOpen&&(this.isQuickOpen?(this.isSurfaceOpen=!1,e||this.maybeRestoreFocus(),this.adapter.removeClass(t.cssClasses.OPEN),this.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose()):(this.adapter.addClass(t.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter.removeClass(t.cssClasses.OPEN),i.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout((function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(t.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()}),Gi.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,e||this.maybeRestoreFocus()))},t.prototype.handleBodyClick=function(e){var t=e.target;this.adapter.isElementInContainer(t)||this.close()},t.prototype.handleKeydown=function(e){var t=e.keyCode;("Escape"===e.key||27===t)&&this.close()},t.prototype.autoposition=function(){var e;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),n=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,Ui.BOTTOM)?"bottom":"top",o=this.hasBit(i,Ui.RIGHT)?"right":"left",s=this.getHorizontalOriginOffset(i),a=this.getVerticalOriginOffset(i),c=this.measurements,d=c.anchorSize,l=c.surfaceSize,p=((e={})[o]=s,e[r]=a,e);d.width/l.width>Gi.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(p),this.adapter.setTransformOrigin(o+" "+r),this.adapter.setPosition(p),this.adapter.setMaxHeight(n?n+"px":""),this.hasBit(i,Ui.BOTTOM)||this.adapter.addClass(t.cssClasses.IS_OPEN_BELOW)},t.prototype.getAutoLayoutmeasurements=function(){var e=this.adapter.getAnchorDimensions(),t=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),n=this.adapter.getWindowScroll();return e||(e={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:e,bodySize:t,surfaceSize:this.dimensions,viewportDistance:{top:e.top,right:i.width-e.right,bottom:i.height-e.bottom,left:e.left},viewportSize:i,windowScroll:n}},t.prototype.getoriginCorner=function(){var e,i,n=this.originCorner,r=this.measurements,o=r.viewportDistance,s=r.anchorSize,a=r.surfaceSize,c=t.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,Ui.BOTTOM)?(e=o.top-c+s.height+this.anchorMargin.bottom,i=o.bottom-c-this.anchorMargin.bottom):(e=o.top-c+this.anchorMargin.top,i=o.bottom-c+s.height-this.anchorMargin.top),!(i-a.height>0)&&e>=i&&(n=this.setBit(n,Ui.BOTTOM));var d,l,p=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,Ui.FLIP_RTL),u=this.hasBit(this.anchorCorner,Ui.RIGHT)||this.hasBit(n,Ui.RIGHT),m=!1;(m=p&&h?!u:u)?(d=o.left+s.width+this.anchorMargin.right,l=o.right-this.anchorMargin.right):(d=o.left+this.anchorMargin.left,l=o.right+s.width-this.anchorMargin.left);var f=d-a.width>0,g=l-a.width>0,b=this.hasBit(n,Ui.FLIP_RTL)&&this.hasBit(n,Ui.RIGHT);return g&&b&&p||!f&&b?n=this.unsetBit(n,Ui.RIGHT):(f&&m&&p||f&&!m&&u||!g&&d>=l)&&(n=this.setBit(n,Ui.RIGHT)),n},t.prototype.getMenuSurfaceMaxHeight=function(e){var i=this.measurements.viewportDistance,n=0,r=this.hasBit(e,Ui.BOTTOM),o=this.hasBit(this.anchorCorner,Ui.BOTTOM),s=t.numbers.MARGIN_TO_EDGE;return r?(n=i.top+this.anchorMargin.top-s,o||(n+=this.measurements.anchorSize.height)):(n=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-s,o&&(n-=this.measurements.anchorSize.height)),n},t.prototype.getHorizontalOriginOffset=function(e){var t=this.measurements.anchorSize,i=this.hasBit(e,Ui.RIGHT),n=this.hasBit(this.anchorCorner,Ui.RIGHT);if(i){var r=n?t.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?r-(this.measurements.viewportSize.width-this.measurements.bodySize.width):r}return n?t.width-this.anchorMargin.right:this.anchorMargin.left},t.prototype.getVerticalOriginOffset=function(e){var t=this.measurements.anchorSize,i=this.hasBit(e,Ui.BOTTOM),n=this.hasBit(this.anchorCorner,Ui.BOTTOM);return i?n?t.height-this.anchorMargin.top:-this.anchorMargin.bottom:n?t.height+this.anchorMargin.bottom:this.anchorMargin.top},t.prototype.adjustPositionForHoistedElement=function(e){var t,i,n=this.measurements,r=n.windowScroll,o=n.viewportDistance,s=Object.keys(e);try{for(var a=function(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],n=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(s),c=a.next();!c.done;c=a.next()){var d=c.value,l=e[d]||0;l+=o[d],this.isFixedPosition||("top"===d?l+=r.y:"bottom"===d?l-=r.y:"left"===d?l+=r.x:l-=r.x),e[d]=l}}catch(e){t={error:e}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}},t.prototype.maybeRestoreFocus=function(){var e=this.adapter.isFocused(),t=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(e||t)&&this.adapter.restoreFocus()},t.prototype.hasBit=function(e,t){return Boolean(e&t)},t.prototype.setBit=function(e,t){return e|t},t.prototype.unsetBit=function(e,t){return e^t},t.prototype.isFinite=function(e){return"number"==typeof e&&isFinite(e)},t}(St);const Xi={TOP_LEFT:ji.TOP_LEFT,TOP_RIGHT:ji.TOP_RIGHT,BOTTOM_LEFT:ji.BOTTOM_LEFT,BOTTOM_RIGHT:ji.BOTTOM_RIGHT,TOP_START:ji.TOP_START,TOP_END:ji.TOP_END,BOTTOM_START:ji.BOTTOM_START,BOTTOM_END:ji.BOTTOM_END};class Ki extends yt{constructor(){super(...arguments),this.mdcFoundationClass=Wi,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.bitwiseCorner=ji.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.styleTop="",this.styleLeft="",this.styleRight="",this.styleBottom="",this.styleMaxHeight="",this.styleTransformOrigin="",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const e={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth},t={top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin};return L`
      <div
          class="mdc-menu-surface ${Nt(e)}"
          style="${Bt(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},(e=this.mdcRoot,{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)})),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const e=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(e)},notifyOpen:()=>{const e=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(e)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:e=>{this.mdcRoot&&(this.styleTransformOrigin=e)},isFocused:()=>vt(this),saveFocus:()=>{const e=_t(),t=e.length;t||(this.previouslyFocused=null),this.previouslyFocused=e[t-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const e=this.mdcRoot;return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const e=this.anchor;return e?e.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:e=>{this.mdcRoot&&(this.styleLeft="left"in e?e.left+"px":"",this.styleRight="right"in e?e.right+"px":"",this.styleTop="top"in e?e.top+"px":"",this.styleBottom="bottom"in e?e.bottom+"px":"")},setMaxHeight:async e=>{this.mdcRoot&&(this.styleMaxHeight=e,await this.updateComplete,this.styleMaxHeight=`var(--mdc-menu-max-height, ${e})`)}});var e}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onBodyClick(e){-1===e.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}close(){this.open=!1}show(){this.open=!0}}Vt([Q(".mdc-menu-surface")],Ki.prototype,"mdcRoot",void 0),Vt([Q("slot")],Ki.prototype,"slotElement",void 0),Vt([J({type:Boolean}),Gt((function(e){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(e)}))],Ki.prototype,"absolute",void 0),Vt([J({type:Boolean})],Ki.prototype,"fullwidth",void 0),Vt([J({type:Boolean}),Gt((function(e){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setIsHoisted(e)}))],Ki.prototype,"fixed",void 0),Vt([J({type:Number}),Gt((function(e){this.mdcFoundation&&null!==this.y&&null!==e&&(this.mdcFoundation.setAbsolutePosition(e,this.y),this.mdcFoundation.setAnchorMargin({left:e,top:this.y,right:-e,bottom:this.y}))}))],Ki.prototype,"x",void 0),Vt([J({type:Number}),Gt((function(e){this.mdcFoundation&&null!==this.x&&null!==e&&(this.mdcFoundation.setAbsolutePosition(this.x,e),this.mdcFoundation.setAnchorMargin({left:this.x,top:e,right:-this.x,bottom:e}))}))],Ki.prototype,"y",void 0),Vt([J({type:Boolean}),Gt((function(e){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(e)}))],Ki.prototype,"quick",void 0),Vt([J({type:Boolean,reflect:!0}),Gt((function(e,t){this.mdcFoundation&&(e?this.mdcFoundation.open():void 0!==t&&this.mdcFoundation.close())}))],Ki.prototype,"open",void 0),Vt([Y(),Gt((function(e){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(e)}))],Ki.prototype,"bitwiseCorner",void 0),Vt([J({type:String}),Gt((function(e){if(this.mdcFoundation){const t="START"===e||"END"===e,i=null===this.previousMenuCorner,n=!i&&e!==this.previousMenuCorner,r=i&&"END"===e;t&&(n||r)&&(this.bitwiseCorner=this.bitwiseCorner^Ui.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=e)}}))],Ki.prototype,"menuCorner",void 0),Vt([J({type:String}),Gt((function(e){if(this.mdcFoundation&&e){let t=Xi[e];"END"===this.menuCorner&&(t^=Ui.RIGHT),this.bitwiseCorner=t}}))],Ki.prototype,"corner",void 0),Vt([Y()],Ki.prototype,"styleTop",void 0),Vt([Y()],Ki.prototype,"styleLeft",void 0),Vt([Y()],Ki.prototype,"styleRight",void 0),Vt([Y()],Ki.prototype,"styleBottom",void 0),Vt([Y()],Ki.prototype,"styleMaxHeight",void 0),Vt([Y()],Ki.prototype,"styleTransformOrigin",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ji=se`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px))}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Yi=class extends Ki{};Yi.styles=Ji,Yi=Vt([X("mwc-menu-surface")],Yi);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Qi,Zi={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},en={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},tn={FOCUS_ROOT_INDEX:-1};!function(e){e[e.NONE=0]="NONE",e[e.LIST_ROOT=1]="LIST_ROOT",e[e.FIRST_ITEM=2]="FIRST_ITEM",e[e.LAST_ITEM=3]="LAST_ITEM"}(Qi||(Qi={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var nn=function(e){function t(i){var n=e.call(this,kt(kt({},t.defaultAdapter),i))||this;return n.closeAnimationEndTimerId_=0,n.defaultFocusState_=Qi.LIST_ROOT,n}return wt(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Zi},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return en},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return tn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter.closeSurface()},t.prototype.handleKeydown=function(e){var t=e.key,i=e.keyCode;("Tab"===t||9===i)&&this.adapter.closeSurface(!0)},t.prototype.handleItemAction=function(e){var t=this,i=this.adapter.getElementIndex(e);i<0||(this.adapter.notifySelected({index:i}),this.adapter.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=t.adapter.getElementIndex(e);i>=0&&t.adapter.isSelectableItemAtIndex(i)&&t.setSelectedIndex(i)}),Wi.numbers.TRANSITION_CLOSE_DURATION))},t.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case Qi.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Qi.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Qi.NONE:break;default:this.adapter.focusListRoot()}},t.prototype.setDefaultFocusState=function(e){this.defaultFocusState_=e},t.prototype.setSelectedIndex=function(e){if(this.validatedIndex_(e),!this.adapter.isSelectableItemAtIndex(e))throw new Error("MDCMenuFoundation: No selection group at specified index.");var t=this.adapter.getSelectedSiblingOfItemAtIndex(e);t>=0&&(this.adapter.removeAttributeFromElementAtIndex(t,en.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(t,Zi.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(e,Zi.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(e,en.ARIA_CHECKED_ATTR,"true")},t.prototype.setEnabled=function(e,t){this.validatedIndex_(e),t?(this.adapter.removeClassFromElementAtIndex(e,Ri),this.adapter.addAttributeToElementAtIndex(e,en.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(e,Ri),this.adapter.addAttributeToElementAtIndex(e,en.ARIA_DISABLED_ATTR,"true"))},t.prototype.validatedIndex_=function(e){var t=this.adapter.getMenuItemCount();if(!(e>=0&&e<t))throw new Error("MDCMenuFoundation: No list item at specified index.")},t}(St);class rn extends yt{constructor(){super(...arguments),this.mdcFoundationClass=nn,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.menuCorner="START",this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const e=this.listElement;return e?e.items:[]}get index(){const e=this.listElement;return e?e.index:-1}get selected(){const e=this.listElement;return e?e.selected:null}render(){const e="menu"===this.innerRole?"menuitem":"option";return L`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-list"
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&("mdc-menu-item--selected"===t?this.forceGroupSelection&&!n.selected&&i.toggle(e,!0):n.classList.add(t))},removeClassFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&("mdc-menu-item--selected"===t?n.selected&&i.toggle(e,!1):n.classList.remove(t))},addAttributeToElementAtIndex:(e,t,i)=>{const n=this.listElement;if(!n)return;const r=n.items[e];r&&r.setAttribute(t,i)},removeAttributeFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&n.removeAttribute(t)},elementContainsClass:(e,t)=>e.classList.contains(t),closeSurface:()=>{this.open=!1},getElementIndex:e=>{const t=this.listElement;return t?t.items.indexOf(e):-1},notifySelected:()=>{},getMenuItemCount:()=>{const e=this.listElement;return e?e.items.length:0},focusItemAtIndex:e=>{const t=this.listElement;if(!t)return;const i=t.items[e];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:e=>{const t=this.listElement;if(!t)return-1;const i=t.items[e];if(!i||!i.group)return-1;for(let n=0;n<t.items.length;n++){if(n===e)continue;const r=t.items[n];if(r.selected&&r.group===i.group)return n}return-1},isSelectableItemAtIndex:e=>{const t=this.listElement;if(!t)return!1;const i=t.items[e];return!!i&&i.hasAttribute("group")}}}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onAction(e){const t=this.listElement;if(this.mdcFoundation&&t){const i=e.detail.index,n=t.items[i];n&&this.mdcFoundation.handleItemAction(n)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async _getUpdateComplete(){await this._listUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){super.firstUpdated();const e=this.listElement;e&&(this._listUpdateComplete=e.updateComplete,await this._listUpdateComplete)}select(e){const t=this.listElement;t&&t.select(e)}close(){this.open=!1}show(){this.open=!0}getFocusedItemIndex(){const e=this.listElement;return e?e.getFocusedItemIndex():-1}focusItemAtIndex(e){const t=this.listElement;t&&t.focusItemAtIndex(e)}layout(e=!0){const t=this.listElement;t&&t.layout(e)}}Vt([Q(".mdc-menu")],rn.prototype,"mdcRoot",void 0),Vt([Q("slot")],rn.prototype,"slotElement",void 0),Vt([J({type:Object})],rn.prototype,"anchor",void 0),Vt([J({type:Boolean,reflect:!0})],rn.prototype,"open",void 0),Vt([J({type:Boolean})],rn.prototype,"quick",void 0),Vt([J({type:Boolean})],rn.prototype,"wrapFocus",void 0),Vt([J({type:String})],rn.prototype,"innerRole",void 0),Vt([J({type:String})],rn.prototype,"corner",void 0),Vt([J({type:Number})],rn.prototype,"x",void 0),Vt([J({type:Number})],rn.prototype,"y",void 0),Vt([J({type:Boolean})],rn.prototype,"absolute",void 0),Vt([J({type:Boolean})],rn.prototype,"multi",void 0),Vt([J({type:Boolean})],rn.prototype,"activatable",void 0),Vt([J({type:Boolean})],rn.prototype,"fixed",void 0),Vt([J({type:Boolean})],rn.prototype,"forceGroupSelection",void 0),Vt([J({type:Boolean})],rn.prototype,"fullwidth",void 0),Vt([J({type:String})],rn.prototype,"menuCorner",void 0),Vt([J({type:String}),Gt((function(e){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(Qi[e])}))],rn.prototype,"defaultFocus",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const on=se`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let sn=class extends rn{};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function an(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/}sn.styles=on,sn=Vt([X("mwc-menu")],sn);class cn extends yt{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}class dn extends cn{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="",this.reducedTouchTarget=!1,this.animationClass="",this.shouldRenderRipple=!1,this.focused=!1,this.mdcFoundationClass=void 0,this.mdcFoundation=void 0,this.rippleElement=null,this.rippleHandlers=new zt(()=>(this.shouldRenderRipple=!0,this.ripple.then(e=>this.rippleElement=e),this.ripple))}createAdapter(){return{}}update(e){const t=e.get("indeterminate"),i=e.get("checked"),n=e.get("disabled");if(void 0!==t||void 0!==i||void 0!==n){const e=this.calculateAnimationStateName(!!i,!!t,!!n),r=this.calculateAnimationStateName(this.checked,this.indeterminate,this.disabled);this.animationClass=`${e}-${r}`}super.update(e)}calculateAnimationStateName(e,t,i){return i?"disabled":t?"indeterminate":e?"checked":"unchecked"}renderRipple(){const e=this.indeterminate||this.checked;return this.shouldRenderRipple?L`
        <mwc-ripple
          .accent="${e}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}render(){const e=this.indeterminate||this.checked,t={"mdc-checkbox--disabled":this.disabled,"mdc-checkbox--selected":e,"mdc-checkbox--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-checkbox--anim-checked-indeterminate":"checked-indeterminate"==this.animationClass,"mdc-checkbox--anim-checked-unchecked":"checked-unchecked"==this.animationClass,"mdc-checkbox--anim-indeterminate-checked":"indeterminate-checked"==this.animationClass,"mdc-checkbox--anim-indeterminate-unchecked":"indeterminate-unchecked"==this.animationClass,"mdc-checkbox--anim-unchecked-checked":"unchecked-checked"==this.animationClass,"mdc-checkbox--anim-unchecked-indeterminate":"unchecked-indeterminate"==this.animationClass},i=this.indeterminate?"mixed":void 0;return L`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Nt(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              aria-checked="${Yt(i)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this._changeHandler}"
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`}_handleFocus(){this.focused=!0,this.handleRippleFocus()}_handleBlur(){this.focused=!1,this.handleRippleBlur()}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}_changeHandler(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate}resetAnimationClass(){this.animationClass=""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}}an([Q(".mdc-checkbox")],dn.prototype,"mdcRoot",void 0),an([Q("input")],dn.prototype,"formElement",void 0),an([J({type:Boolean,reflect:!0})],dn.prototype,"checked",void 0),an([J({type:Boolean})],dn.prototype,"indeterminate",void 0),an([J({type:Boolean,reflect:!0})],dn.prototype,"disabled",void 0),an([J({type:String})],dn.prototype,"value",void 0),an([J({type:Boolean})],dn.prototype,"reducedTouchTarget",void 0),an([Y()],dn.prototype,"animationClass",void 0),an([Y()],dn.prototype,"shouldRenderRipple",void 0),an([Y()],dn.prototype,"focused",void 0),an([Z("mwc-ripple")],dn.prototype,"ripple",void 0),an([ie({passive:!0})],dn.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ln=se`.mdc-checkbox{padding:11px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;let pn=class extends dn{};pn.styles=ln,pn=an([X("mwc-checkbox")],pn);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
class hn extends Wt{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-list-item__graphic":this.left,"mdc-list-item__meta":!this.left},t=this.renderText(),i=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():L``,n=this.hasMeta&&this.left?this.renderMeta():L``,r=this.renderRipple();return L`
      ${r}
      ${i}
      ${this.left?"":t}
      <span class=${Nt(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left?t:""}
      ${n}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}qt([Q("slot")],hn.prototype,"slotElement",void 0),qt([Q("mwc-checkbox")],hn.prototype,"checkboxElement",void 0),qt([J({type:Boolean})],hn.prototype,"left",void 0),qt([J({type:String,reflect:!0})],hn.prototype,"graphic",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const un=se`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-list-item__meta{height:40px;width:40px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let mn=class extends hn{};mn.styles=[Xt,un],mn=qt([X("mwc-check-list-item")],mn);const fn=["book","chapter","character"],gn=fn.map(e=>e.charAt(0).toLocaleUpperCase()+e.substr(1));var bn=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let _n=class extends ce{constructor(){super(...arguments),this.searchString="",this.selectedMenuOptionIndex=0,this.apiItems=gn,this.searchDisabled=!1}static get styles(){return se`
    #search-bar {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 12px;
    }

    #search-bar > * {
      padding-right: 8px
    }
    `}firstUpdated(e){return this.menu.anchor=this.menuButton,super.firstUpdated(e)}clickButton(){this.menu.open=!0}menuChange(e){this.selectedMenuOptionIndex=e.detail.index}checkSearch(){var e,t;const i=this.selectedMenuOptionIndex>0;this.apiKey=null!==(t=null===(e=this.apiTextField)||void 0===e?void 0:e.value)&&void 0!==t?t:this.apiKey;const n=""===this.apiKey;this.searchButton.disabled=!!i&&n,this.requestUpdate()}async search(){let e;try{const t=fn[this.selectedMenuOptionIndex],i=new Headers;this.apiKey&&i.set("Authorization","Bearer "+this.apiKey);const n=await fetch("https://the-one-api.dev/v2/"+t,{headers:i}),r=await n.json();e=new CustomEvent("search-complete",{bubbles:!0,composed:!0,detail:{mode:t,response:r,success:!0}})}catch(t){console.log(t),e=new CustomEvent("search-complete",{bubbles:!0,composed:!0,detail:{success:!1}})}this.dispatchEvent(e)}render(){var e;return L`
      <section id="search-bar" @change=${this.checkSearch} @selected=${this.checkSearch}>
        <mwc-button
          id="menu-button"
          label="${this.apiItems[this.selectedMenuOptionIndex]}"
          raised
          @click=${this.clickButton}
          >
        </mwc-button>
        <mwc-menu id="menu" fixed raised activatable @selected=${this.menuChange}>
          ${this.apiItems.map(e=>L`
              <mwc-list-item group="search">${e}</mwc-list-item>
            `)}
        </mwc-menu>
        ${this.selectedMenuOptionIndex>0?L`
            <fast-text-field
              id="apiText"
              @change=${this.checkSearch}
              value=${null!==(e=this.apiKey)&&void 0!==e?e:""}
              placeholder="API Key"

            ></fast-text-field>
          `:void 0}
        <fast-text-field
          id="searchText"
          placeholder="Search..."
        ></fast-text-field>
        <fast-button
          id="searchButton"
          disabled=${this.searchDisabled}
          @click="${this.search}">Search</fast-button>
      </section>
    `}};bn([J({type:String})],_n.prototype,"searchString",void 0),bn([J({type:Number})],_n.prototype,"selectedMenuOptionIndex",void 0),bn([J({type:String})],_n.prototype,"apiKey",void 0),bn([Q("#menu-button")],_n.prototype,"menuButton",void 0),bn([Q("#menu")],_n.prototype,"menu",void 0),bn([Q("#apiText")],_n.prototype,"apiTextField",void 0),bn([Q("#searchText")],_n.prototype,"searchTextField",void 0),bn([Q("#searchButton")],_n.prototype,"searchButton",void 0),_n=bn([X("app-search")],_n);var vn=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let yn=class extends ce{constructor(){super()}static get styles(){return se`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fast-card {
        margin-bottom: 12px;
      }

      #welcomeCard, .infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      @media(min-width: 1200px) {
        #welcomeCard, .infoCard {
          width: 40%;
        }
      }

      @media(screen-spanning: single-fold-vertical) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}handleSearch(e){this.response=e.detail,this.requestUpdate()}render(){return L`
      <div @search-complete=${this.handleSearch}>
        <app-search></app-search>

        <div id="welcomeBar">
          ${this.response?this.renderResultsList():this.renderWelcomeCard()}
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `}renderWelcomeCard(){return L`
      <fast-card id="welcomeCard">

        <h2>The One Api Working Demo</h2>

        <p>This demo utilizes the one api demo, which has a <a href="https://github.com/gitfrosh/lotr-api">github page</a> as well as a <a href="https://the-one-api.dev/">documentation here.</a></p>

      </fast-card>
    `}renderResultsList(){var e,t,i;const n=null===(e=this.response)||void 0===e?void 0:e.mode;let r;if("book"===n)r=e=>{const t=e;return L`
          <fast-card id=${t._id}>
            <h2>${t.name}</h2>
          </fast-card>
        `};else if("chapter"===n)r=e=>{const t=e;return L`
          <fast-card id=${t._id}>
            <h2>${t.chapterName}</h2>
          </fast-card>
        `};else{if("character"!==n)return L`
        <fast-card id="error">
          <h2>Oops something happened</h2>
          <p>Either the api calls limit has been exceeded or that the service is down.</p>
        </fast-card>
      `;r=e=>{const t=e;return L`
          <fast-card id=${t._id}>
            <h2>${t.name}</h2>
          </fast-card>
        `}}return(null===(i=null===(t=this.response)||void 0===t?void 0:t.response)||void 0===i?void 0:i.docs).map(r)}};function xn(e){return e=e||[],Array.isArray(e)?e:[e]}function wn(e){return"[Vaadin.Router] "+e}vn([J({type:Object})],yn.prototype,"response",void 0),yn=vn([X("app-home")],yn);const kn=["module","nomodule"];function Sn(e){if(!e.match(/.+\.[m]?js$/))throw new Error(wn(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function En(e){if(!e||!On(e.path))throw new Error(wn('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,i=["component","redirect","bundle"];if(!(Rn(e.action)||Array.isArray(e.children)||Rn(e.children)||In(t)||i.some(t=>On(e[t]))))throw new Error(wn(`Expected route config "${e.path}" to include either "${i.join('", "')}" or "action" function but none found.`));if(t)if(On(t))Sn(t);else{if(!kn.some(e=>e in t))throw new Error(wn('Expected route bundle to include either "nomodule" or "module" keys, or both'));kn.forEach(e=>e in t&&Sn(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(wn(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Cn(e){xn(e).forEach(e=>En(e))}function An(e,t){let i=document.head.querySelector('script[src="'+e+'"][async]');return i||(i=document.createElement("script"),i.setAttribute("src",e),"module"===t?i.setAttribute("type","module"):"nomodule"===t&&i.setAttribute("nomodule",""),i.async=!0),new Promise((e,t)=>{i.onreadystatechange=i.onload=t=>{i.__dynamicImportLoaded=!0,e(t)},i.onerror=e=>{i.parentNode&&i.parentNode.removeChild(i),t(e)},null===i.parentNode?document.head.appendChild(i):i.__dynamicImportLoaded&&e()})}function Tn(e,t){return!window.dispatchEvent(new CustomEvent("vaadin-router-"+e,{cancelable:"go"===e,detail:t}))}function In(e){return"object"==typeof e&&!!e}function Rn(e){return"function"==typeof e}function On(e){return"string"==typeof e}function Pn(e){const t=new Error(wn(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const Fn=new class{};function Nn(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const i=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<i.length;e++){const n=i[e];if(n.nodeName&&"a"===n.nodeName.toLowerCase()){t=n;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,i=e.protocol;return`${i}//${"http:"===i&&"80"===t||"https:"===i&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:n,search:r,hash:o}=t;Tn("go",{pathname:n,search:r,hash:o})&&e.preventDefault()}const Mn={activate(){window.document.addEventListener("click",Nn)},inactivate(){window.document.removeEventListener("click",Nn)}};function Bn(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:i,hash:n}=window.location;Tn("go",{pathname:t,search:i,hash:n})}/Trident/.test(navigator.userAgent)&&!Rn(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var i=document.createEvent("Event");return i.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),i.state=t.state||null,i},window.PopStateEvent.prototype=window.Event.prototype);const Ln={activate(){window.addEventListener("popstate",Bn)},inactivate(){window.removeEventListener("popstate",Bn)}};var Dn=Jn,$n=Vn,zn=function(e,t){return qn(Vn(e,t))},Hn=qn,Un=Kn,jn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Vn(e,t){for(var i,n=[],r=0,o=0,s="",a=t&&t.delimiter||"/",c=t&&t.delimiters||"./",d=!1;null!==(i=jn.exec(e));){var l=i[0],p=i[1],h=i.index;if(s+=e.slice(o,h),o=h+l.length,p)s+=p[1],d=!0;else{var u="",m=e[o],f=i[2],g=i[3],b=i[4],_=i[5];if(!d&&s.length){var v=s.length-1;c.indexOf(s[v])>-1&&(u=s[v],s=s.slice(0,v))}s&&(n.push(s),s="",d=!1);var y=""!==u&&void 0!==m&&m!==u,x="+"===_||"*"===_,w="?"===_||"*"===_,k=u||a,S=g||b;n.push({name:f||r++,prefix:u,delimiter:k,optional:w,repeat:x,partial:y,pattern:S?Wn(S):"[^"+Gn(k)+"]+?"})}}return(s||o<e.length)&&n.push(s+e.substr(o)),n}function qn(e){for(var t=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(i,n){for(var r="",o=n&&n.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,d=i?i[a.name]:void 0;if(Array.isArray(d)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===d.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var l=0;l<d.length;l++){if(c=o(d[l],a),!t[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(0===l?a.prefix:a.delimiter)+c}}else if("string"!=typeof d&&"number"!=typeof d&&"boolean"!=typeof d){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(r+=a.prefix)}else{if(c=o(String(d),a),!t[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');r+=a.prefix+c}}else r+=a}return r}}function Gn(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Wn(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Xn(e){return e&&e.sensitive?"":"i"}function Kn(e,t,i){for(var n=(i=i||{}).strict,r=!1!==i.start,o=!1!==i.end,s=Gn(i.delimiter||"/"),a=i.delimiters||"./",c=[].concat(i.endsWith||[]).map(Gn).concat("$").join("|"),d=r?"^":"",l=0===e.length,p=0;p<e.length;p++){var h=e[p];if("string"==typeof h)d+=Gn(h),l=p===e.length-1&&a.indexOf(h[h.length-1])>-1;else{var u=h.repeat?"(?:"+h.pattern+")(?:"+Gn(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?d+=Gn(h.prefix)+"("+u+")?":d+="(?:"+Gn(h.prefix)+"("+u+"))?":d+=Gn(h.prefix)+"("+u+")"}}return o?(n||(d+="(?:"+s+")?"),d+="$"===c?"$":"(?="+c+")"):(n||(d+="(?:"+s+"(?="+c+"))?"),l||(d+="(?="+s+"|"+c+")")),new RegExp(d,Xn(i))}function Jn(e,t,i){return e instanceof RegExp?function(e,t){if(!t)return e;var i=e.source.match(/\((?!\?)/g);if(i)for(var n=0;n<i.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,i){for(var n=[],r=0;r<e.length;r++)n.push(Jn(e[r],t,i).source);return new RegExp("(?:"+n.join("|")+")",Xn(i))}(e,t,i):function(e,t,i){return Kn(Vn(e,i),t,i)}(e,t,i)}Dn.parse=$n,Dn.compile=zn,Dn.tokensToFunction=Hn,Dn.tokensToRegExp=Un;const{hasOwnProperty:Yn}=Object.prototype,Qn=new Map;function Zn(e){try{return decodeURIComponent(e)}catch(t){return e}}function er(e,t,i,n,r){let o,s,a=0,c=e.path||"";return"/"===c.charAt(0)&&(i&&(c=c.substr(1)),i=!0),{next(d){if(e===d)return{done:!0};const l=e.__children=e.__children||e.children;if(!o&&(o=function(e,t,i,n,r){const o=`${e}|${i=!!i}`;let s=Qn.get(o);if(!s){const t=[];s={keys:t,pattern:Dn(e,t,{end:i,strict:""===e})},Qn.set(o,s)}const a=s.pattern.exec(t);if(!a)return null;const c=Object.assign({},r);for(let e=1;e<a.length;e++){const t=s.keys[e-1],i=t.name,n=a[e];void 0===n&&Yn.call(c,i)||(t.repeat?c[i]=n?n.split(t.delimiter).map(Zn):[]:c[i]=n?Zn(n):n)}return{path:a[0],keys:(n||[]).concat(s.keys),params:c}}(c,t,!l,n,r),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&l)for(;a<l.length;){if(!s){const n=l[a];n.parent=e;let r=o.path.length;r>0&&"/"===t.charAt(r)&&(r+=1),s=er(n,t.substr(r),i,o.keys,o.params)}const n=s.next(d);if(!n.done)return{done:!1,value:n.value};s=null,a++}return{done:!0}}}}function tr(e){if(Rn(e.route.action))return e.route.action(e)}Qn.set("|false",{keys:[],pattern:/(?:)/});class ir{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||tr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Cn(e);const t=[...xn(e)];this.root.__children=t}addRoutes(e){return Cn(e),this.root.__children.push(...xn(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,On(e)?{pathname:e}:e),i=er(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let r=null,o=null,s=t;function a(e,c=r.value.route,d){const l=null===d&&r.value.route;return r=o||i.next(l),o=null,e||!r.done&&function(e,t){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(c,r.value.route)?r.done?Promise.reject(Pn(t)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},t,r.value),function(e,t){const{route:i,path:n}=t;if(i&&!i.__synthetic){const t={path:n,route:i};if(e.chain){if(i.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==i.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(s,r.value),Promise.resolve(n(s)).then(t=>null!=t&&t!==Fn?(s.result=t.result||t,s):a(e,c,t))):(o=r,Promise.resolve(Fn))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const i=(e.route||{}).path;return i&&(t+=` Resolution had failed on route: '${i}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;return i.slice(0,t.length)===t?i.slice(t.length):void 0}}ir.pathToRegexp=Dn;const{pathToRegexp:nr}=ir,rr=new Map;function or(e,t){const i=e.get(t);if(i&&i.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return i&&i[0]}function sr(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function ar(e,t={}){if(!(e instanceof ir))throw new TypeError("An instance of Resolver is expected");const i=new Map;return(n,r)=>{let o=or(i,n);if(!o&&(i.clear(),function e(t,i,n){const r=i.name||i.component;if(r&&(t.has(r)?t.get(r).push(i):t.set(r,[i])),Array.isArray(n))for(let r=0;r<n.length;r++){const o=n[r];o.parent=i,e(t,o,o.__children||o.children)}}(i,e.root,e.root.__children),o=or(i,n),!o))throw new Error(`Route "${n}" not found`);let s=rr.get(o.fullPath);if(!s){let e=sr(o),t=o.parent;for(;t;){const i=sr(t);i&&(e=i.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const i=nr.parse(e),n=nr.tokensToFunction(i),r=Object.create(null);for(let e=0;e<i.length;e++)On(i[e])||(r[i[e].name]=!0);s={toPath:n,keys:r},rr.set(e,s),o.fullPath=e}let a=s.toPath(r,t)||"/";if(t.stringifyQueryParams&&r){const e={},i=Object.keys(r);for(let t=0;t<i.length;t++){const n=i[t];s.keys[n]||(e[n]=r[n])}const n=t.stringifyQueryParams(e);n&&(a+="?"===n.charAt(0)?n:"?"+n)}return a}}let cr=[];function dr(e){cr.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),cr=e}function lr(e,t){return e.classList.add(t),new Promise(i=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const n=e.getBoundingClientRect(),r=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;e.setAttribute("style","position: absolute; "+r),((e,t)=>{const i=()=>{e.removeEventListener("animationend",i),t()};e.addEventListener("animationend",i)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),i()})}else e.classList.remove(t),i()})}function pr(e){return null!=e}function hr({pathname:e="",search:t="",hash:i="",chain:n=[],params:r={},redirectFrom:o,resolver:s},a){const c=n.map(e=>e.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:i,routes:c,route:a||c.length&&c[c.length-1]||null,params:r,redirectFrom:o,getUrl:(e={})=>br(vr.pathToRegexp.compile(_r(c))(Object.assign({},r,e)),s)}}function ur(e,t){const i=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:i}}}function mr(e,t,i){if(Rn(e))return e.apply(i,t)}function fr(e,t,i){return n=>n&&(n.cancel||n.redirect)?n:i?mr(i[e],t,i):void 0}function gr(e){if(e&&e.length){const t=e[0].parentNode;for(let i=0;i<e.length;i++)t.removeChild(e[i])}}function br(e,t){const i=t.__effectiveBaseUrl;return i?t.constructor.__createUrl(e.replace(/^\//,""),i).pathname:e}function _r(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class vr extends ir{constructor(e,t){const i=document.head.querySelector("base"),n=i&&i.getAttribute("href");super([],Object.assign({baseUrl:n&&ir.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const r=vr.NavigationTrigger;vr.setTriggers.apply(vr,Object.keys(r).map(e=>r[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=hr({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();Rn(t.children)&&(i=i.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{pr(e)||Rn(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!In(e))throw new Error(wn(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const i=xn(e);for(let e=0;e<i.length;e++)En(i[e]),t.__children.push(i[e])}(e,t)}));const n={redirect:t=>ur(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return i.then(()=>{if(this.__isLatestRender(e))return mr(t.action,[e,n],t)}).then(e=>{return pr(e)&&(e instanceof HTMLElement||e.redirect||e===Fn)?e:On(t.redirect)?n.redirect(t.redirect):t.bundle?(i=t.bundle,On(i)?An(i):Promise.race(kn.filter(e=>e in i).map(e=>An(i[e],e)))).then(()=>{},()=>{throw new Error(wn(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0;var i}).then(e=>pr(e)?e:On(t.component)?n.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},On(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(n).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const n=this.__previousContext;if(e===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=hr(e),t&&this.__updateBrowserHistory(e,1===i),Tn("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,n),this.__previousContext=e,this.location;this.__addAppearingContent(e,n);const r=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,n),r.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),gr(this.__outlet&&this.__outlet.children),this.location=hr(Object.assign(n,{resolver:this})),Tn("error",Object.assign({router:this,error:e},n)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const n=i!==t?i:e,r=br(_r(i.chain),i.resolver)===i.pathname,o=(e,t=e.route,i)=>e.next(void 0,t,i).then(i=>null===i||i===Fn?r?e:null!==t.parent?o(e,t.parent,i):i:i);return o(i).then(e=>{if(null===e||e===Fn)throw Pn(n);return e&&e!==Fn&&e!==i?this.__fullyResolveChain(n,e):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=hr(e);const i=e.chain.map(e=>e.route).indexOf(e.route);e.chain[i].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(wn(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],n=e.chain;let r=Promise.resolve();const o=()=>({cancel:!0}),s=t=>ur(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let t=0;t<Math.min(i.length,n.length)&&(i[t].route===n[t].route&&(i[t].path===n[t].path||i[t].element===n[t].element)&&this.__isReusableElement(i[t].element,n[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=n.length===i.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=n.length-1;t>=0;t--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:o},i[t]);for(let t=0;t<n.length;t++)r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:o,redirect:s},n[t]),i[t].element.location=hr(e,i[t].route)}else for(let t=i.length-1;t>=e.__divergedChainIndex;t--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:o},i[t])}if(!e.__skipAttach)for(let t=0;t<n.length;t++)t<e.__divergedChainIndex?t<i.length&&i[t].element&&(i[t].element.location=hr(e,i[t].route)):(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:o,redirect:s},n[t]),n[t].element&&(n[t].element.location=hr(e,n[t].route)));return r.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,n){const r=hr(t);return e.then(e=>{if(this.__isLatestRender(t)){return fr("onBeforeLeave",[r,i,this],n.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,i,n){const r=hr(t,n.route);return e.then(e=>{if(this.__isLatestRender(t)){return fr("onBeforeEnter",[r,i,this],n.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>256)throw new Error(wn("Too many redirects when rendering "+e.from));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(wn(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const r=n?"replaceState":"pushState";window.history[r](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const r=t&&t.chain[n].element;if(r){if(r.parentNode!==i)break;e.chain[n].element=r,i=r}}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let n=i;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const r=e.chain[t].element;r&&(n.appendChild(r),this.__addedByRouter.set(r,!0),n===i&&this.__appearingContent.push(r),n=r)}}__removeDisappearingContent(){this.__disappearingContent&&gr(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(gr(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const n=t.chain[i].element;if(n)try{const i=hr(e);mr(n.onAfterLeave,[i,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&gr(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},n=hr(e,e.chain[t].route);mr(i.onAfterEnter,[n,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],n=[],r=e.chain;let o;for(let e=r.length;e>0;e--)if(r[e-1].route.animate){o=r[e-1].route.animate;break}if(t&&i&&o){const e=In(o)&&o.leave||"leaving",r=In(o)&&o.enter||"entering";n.push(lr(t,e)),n.push(lr(i,r))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:n}=e?e.detail:window.location;On(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:n},!0))}static setTriggers(...e){dr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=ar(this)),br(this.__urlForName(e,t),this)}urlForPath(e,t){return br(vr.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:n}=On(e)?this.__createUrl(e,"http://a"):e;return Tn("go",{pathname:t,search:i,hash:n})}}const yr=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,xr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function wr(e,t){if("function"!=typeof e)return;const i=yr.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const kr=function(e,t){if(window.Vaadin.developmentMode)return wr(e,t)};function Sr(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(xr?!(xr&&Object.keys(xr).map(e=>xr[e]).filter(e=>e.productionMode).length>0):!wr((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.2"}),kr(Sr),vr.NavigationTrigger={POPSTATE:Ln,CLICK:Mn};var Er=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let Cr=class extends ce{constructor(){super(),this.title="Offline Workbox Demo"}static get styles(){return se`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav {
        width: 9em;
        display: flex;
        justify-content: space-between;
      }

      nav fast-anchor {
        margin-left: 10px;
      }
    `}render(){return L`
      <header>
        <h1>${this.title}</h1>

        <nav>
          <fast-anchor href="./" appearance="button">Home</fast-anchor>
          <fast-anchor href="./about" appearance="button">About</fast-anchor>
        </nav>
      </header>
    `}};Er([J({type:String})],Cr.prototype,"title",void 0),Cr=Er([X("app-header")],Cr);var Ar=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let Tr=class extends ce{static get styles(){return se`
      main {
        padding: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var e;new vr(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#routerOutlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"}]}])}render(){return L`
      <div>
        <app-header></app-header>

        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};Tr=Ar([X("app-index")],Tr);export{Tr as AppIndex};
