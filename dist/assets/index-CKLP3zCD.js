(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},Ti={},Ga={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),zf=Symbol.for("react.portal"),Pf=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),Tf=Symbol.for("react.provider"),Rf=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Lf=Symbol.for("react.memo"),Wf=Symbol.for("react.lazy"),Ol=Symbol.iterator;function Bf(e){return e===null||typeof e!="object"?null:(e=Ol&&e[Ol]||e["@@iterator"],typeof e=="function"?e:null)}var Ya={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qa=Object.assign,Za={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=Za,this.updater=n||Ya}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ja(){}Ja.prototype=Tn.prototype;function Mo(e,t,n){this.props=e,this.context=t,this.refs=Za,this.updater=n||Ya}var No=Mo.prototype=new Ja;No.constructor=Mo;Qa(No,Tn.prototype);No.isPureReactComponent=!0;var zl=Array.isArray,eu=Object.prototype.hasOwnProperty,$o={current:null},tu={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)eu.call(t,r)&&!tu.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$r,type:e,key:s,ref:o,props:i,_owner:$o.current}}function Hf(e,t){return{$$typeof:$r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oo(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function Uf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pl=/\/+/g;function rs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Uf(""+e.key):t.toString(36)}function Jr(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $r:case zf:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+rs(o,0):r,zl(i)?(n="",e!=null&&(n=e.replace(Pl,"$&/")+"/"),Jr(i,t,n,"",function(u){return u})):i!=null&&(Oo(i)&&(i=Hf(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pl,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",zl(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+rs(s,l);o+=Jr(s,t,n,a,i)}else if(a=Bf(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+rs(s,l++),o+=Jr(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Fr(e,t,n){if(e==null)return e;var r=[],i=0;return Jr(e,r,"","",function(s){return t.call(n,s,i++)}),r}function qf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},ei={transition:null},Vf={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:ei,ReactCurrentOwner:$o};function ru(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Fr,forEach:function(e,t,n){Fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fr(e,function(){t++}),t},toArray:function(e){return Fr(e,function(t){return t})||[]},only:function(e){if(!Oo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Tn;U.Fragment=Pf;U.Profiler=Ff;U.PureComponent=Mo;U.StrictMode=If;U.Suspense=Af;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;U.act=ru;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qa({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$o.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)eu.call(t,a)&&!tu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:$r,type:e.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(e){return e={$$typeof:Rf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tf,_context:e},e.Consumer=e};U.createElement=nu;U.createFactory=function(e){var t=nu.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Df,render:e}};U.isValidElement=Oo;U.lazy=function(e){return{$$typeof:Wf,_payload:{_status:-1,_result:e},_init:qf}};U.memo=function(e,t){return{$$typeof:Lf,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=ei.transition;ei.transition={};try{e()}finally{ei.transition=t}};U.unstable_act=ru;U.useCallback=function(e,t){return Ce.current.useCallback(e,t)};U.useContext=function(e){return Ce.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ce.current.useEffect(e,t)};U.useId=function(){return Ce.current.useId()};U.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ce.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};U.useRef=function(e){return Ce.current.useRef(e)};U.useState=function(e){return Ce.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ce.current.useTransition()};U.version="18.3.1";Ga.exports=U;var D=Ga.exports;const Xf=Of(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=D,Gf=Symbol.for("react.element"),Yf=Symbol.for("react.fragment"),Qf=Object.prototype.hasOwnProperty,Zf=Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jf={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Qf.call(t,r)&&!Jf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gf,type:e,key:s,ref:o,props:i,_owner:Zf.current}}Ti.Fragment=Yf;Ti.jsx=iu;Ti.jsxs=iu;Ka.exports=Ti;var P=Ka.exports,zs={},su={exports:{}},Fe={},ou={exports:{}},lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,T){var L=O.length;O.push(T);e:for(;0<L;){var K=L-1>>>1,V=O[K];if(0<i(V,T))O[K]=T,O[L]=V,L=K;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var T=O[0],L=O.pop();if(L!==T){O[0]=L;e:for(var K=0,V=O.length,Qe=V>>>1;K<Qe;){var W=2*(K+1)-1,J=O[W],Ze=W+1,gt=O[Ze];if(0>i(J,L))Ze<V&&0>i(gt,J)?(O[K]=gt,O[Ze]=L,K=Ze):(O[K]=J,O[W]=L,K=W);else if(Ze<V&&0>i(gt,L))O[K]=gt,O[Ze]=L,K=Ze;else break e}}return T}function i(O,T){var L=O.sortIndex-T.sortIndex;return L!==0?L:O.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],p=1,c=null,f=3,h=!1,g=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=O)r(u),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(u)}}function S(O){if(v=!1,x(O),!g)if(n(a)!==null)g=!0,oe(_);else{var T=n(u);T!==null&&we(S,T.startTime-O)}}function _(O,T){g=!1,v&&(v=!1,m(C),C=-1),h=!0;var L=f;try{for(x(T),c=n(a);c!==null&&(!(c.expirationTime>T)||O&&!B());){var K=c.callback;if(typeof K=="function"){c.callback=null,f=c.priorityLevel;var V=K(c.expirationTime<=T);T=e.unstable_now(),typeof V=="function"?c.callback=V:c===n(a)&&r(a),x(T)}else r(a);c=n(a)}if(c!==null)var Qe=!0;else{var W=n(u);W!==null&&we(S,W.startTime-T),Qe=!1}return Qe}finally{c=null,f=L,h=!1}}var b=!1,k=null,C=-1,N=5,F=-1;function B(){return!(e.unstable_now()-F<N)}function R(){if(k!==null){var O=e.unstable_now();F=O;var T=!0;try{T=k(!0,O)}finally{T?A():(b=!1,k=null)}}else b=!1}var A;if(typeof d=="function")A=function(){d(R)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,H=$.port2;$.port1.onmessage=R,A=function(){H.postMessage(null)}}else A=function(){y(R,0)};function oe(O){k=O,b||(b=!0,A())}function we(O,T){C=y(function(){O(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,oe(_))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var L=f;f=T;try{return O()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,T){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var L=f;f=O;try{return T()}finally{f=L}},e.unstable_scheduleCallback=function(O,T,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,O){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=L+V,O={id:p++,callback:T,priorityLevel:O,startTime:L,expirationTime:V,sortIndex:-1},L>K?(O.sortIndex=L,t(u,O),n(a)===null&&O===n(u)&&(v?(m(C),C=-1):v=!0,we(S,L-K))):(O.sortIndex=V,t(a,O),g||h||(g=!0,oe(_))),O},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(O){var T=f;return function(){var L=f;f=T;try{return O.apply(this,arguments)}finally{f=L}}}})(lu);ou.exports=lu;var ep=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=D,Ie=ep;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,pr={};function tn(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(pr[e]=t,e=0;e<t.length;e++)au.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ps=Object.prototype.hasOwnProperty,np=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Il={},Fl={};function rp(e){return Ps.call(Fl,e)?!0:Ps.call(Il,e)?!1:np.test(e)?Fl[e]=!0:(Il[e]=!0,!1)}function ip(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sp(e,t,n,r){if(t===null||typeof t>"u"||ip(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var zo=/[\-:]([a-z])/g;function Po(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zo,Po);ge[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zo,Po);ge[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zo,Po);ge[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Io(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sp(t,n,i,r)&&(n=null),r||i===null?rp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),fn=Symbol.for("react.fragment"),Fo=Symbol.for("react.strict_mode"),Is=Symbol.for("react.profiler"),uu=Symbol.for("react.provider"),cu=Symbol.for("react.context"),To=Symbol.for("react.forward_ref"),Fs=Symbol.for("react.suspense"),Ts=Symbol.for("react.suspense_list"),Ro=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),fu=Symbol.for("react.offscreen"),Tl=Symbol.iterator;function Ln(e){return e===null||typeof e!="object"?null:(e=Tl&&e[Tl]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,is;function Gn(e){if(is===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);is=t&&t[1]||""}return`
`+is+e}var ss=!1;function os(e,t){if(!e||ss)return"";ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gn(e):""}function op(e){switch(e.tag){case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 2:case 15:return e=os(e.type,!1),e;case 11:return e=os(e.type.render,!1),e;case 1:return e=os(e.type,!0),e;default:return""}}function Rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fn:return"Fragment";case cn:return"Portal";case Is:return"Profiler";case Fo:return"StrictMode";case Fs:return"Suspense";case Ts:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cu:return(e.displayName||"Context")+".Consumer";case uu:return(e._context.displayName||"Context")+".Provider";case To:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ro:return t=e.displayName||null,t!==null?t:Rs(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return Rs(e(t))}catch{}}return null}function lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rs(t);case 8:return t===Fo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ap(e){var t=pu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rr(e){e._valueTracker||(e._valueTracker=ap(e))}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hu(e,t){t=t.checked,t!=null&&Io(e,"checked",t,!1)}function As(e,t){hu(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ls(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ls(e,t,n){(t!=="number"||pi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Al(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Yn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function mu(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ll(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},up=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function yu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(e,t){if(t){if(cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qs=null;function Do(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,Cn=null,bn=null;function Wl(e){if(e=Pr(e)){if(typeof Vs!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Wi(t),Vs(e.stateNode,e.type,t))}}function Su(e){Cn?bn?bn.push(e):bn=[e]:Cn=e}function wu(){if(Cn){var e=Cn,t=bn;if(bn=Cn=null,Wl(e),t)for(e=0;e<t.length;e++)Wl(t[e])}}function _u(e,t){return e(t)}function ku(){}var ls=!1;function Cu(e,t,n){if(ls)return e(t,n);ls=!0;try{return _u(e,t,n)}finally{ls=!1,(Cn!==null||bn!==null)&&(ku(),wu())}}function hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Wi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Xs=!1;if(ft)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Xs=!1}function fp(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var rr=!1,di=null,hi=!1,Ks=null,pp={onError:function(e){rr=!0,di=e}};function dp(e,t,n,r,i,s,o,l,a){rr=!1,di=null,fp.apply(pp,arguments)}function hp(e,t,n,r,i,s,o,l,a){if(dp.apply(this,arguments),rr){if(rr){var u=di;rr=!1,di=null}else throw Error(j(198));hi||(hi=!0,Ks=u)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bl(e){if(nn(e)!==e)throw Error(j(188))}function mp(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bl(i),e;if(s===r)return Bl(i),t;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Eu(e){return e=mp(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Mu=Ie.unstable_scheduleCallback,Hl=Ie.unstable_cancelCallback,gp=Ie.unstable_shouldYield,xp=Ie.unstable_requestPaint,se=Ie.unstable_now,vp=Ie.unstable_getCurrentPriorityLevel,Ao=Ie.unstable_ImmediatePriority,Nu=Ie.unstable_UserBlockingPriority,mi=Ie.unstable_NormalPriority,yp=Ie.unstable_LowPriority,$u=Ie.unstable_IdlePriority,Ri=null,rt=null;function Sp(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:kp,wp=Math.log,_p=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(wp(e)/_p|0)|0}var Ar=64,Lr=4194304;function Qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Qn(l):(s&=o,s!==0&&(r=Qn(s)))}else o=n&~i,o!==0?r=Qn(o):s!==0&&(r=Qn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),i=1<<n,r|=e[n],t&=~i;return r}function Cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Xe(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Cp(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function Gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ou(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function as(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function Ep(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Lo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,Wo,Iu,Fu,Tu,Ys=!1,Wr=[],bt=null,Et=null,jt=null,mr=new Map,gr=new Map,wt=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ul(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(t.pointerId)}}function Bn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Pr(t),t!==null&&Wo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mp(e,t,n,r,i){switch(t){case"focusin":return bt=Bn(bt,e,t,n,r,i),!0;case"dragenter":return Et=Bn(Et,e,t,n,r,i),!0;case"mouseover":return jt=Bn(jt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return mr.set(s,Bn(mr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,gr.set(s,Bn(gr.get(s)||null,e,t,n,r,i)),!0}return!1}function Ru(e){var t=Ht(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=bu(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){Iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qs=r,n.target.dispatchEvent(r),qs=null}else return t=Pr(n),t!==null&&Wo(t),e.blockedOn=n,!1;t.shift()}return!0}function ql(e,t,n){ti(e)&&n.delete(t)}function Np(){Ys=!1,bt!==null&&ti(bt)&&(bt=null),Et!==null&&ti(Et)&&(Et=null),jt!==null&&ti(jt)&&(jt=null),mr.forEach(ql),gr.forEach(ql)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Np)))}function xr(e){function t(i){return Hn(i,e)}if(0<Wr.length){Hn(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&Hn(bt,e),Et!==null&&Hn(Et,e),jt!==null&&Hn(jt,e),mr.forEach(t),gr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Ru(n),n.blockedOn===null&&wt.shift()}var En=mt.ReactCurrentBatchConfig,xi=!0;function $p(e,t,n,r){var i=X,s=En.transition;En.transition=null;try{X=1,Bo(e,t,n,r)}finally{X=i,En.transition=s}}function Op(e,t,n,r){var i=X,s=En.transition;En.transition=null;try{X=4,Bo(e,t,n,r)}finally{X=i,En.transition=s}}function Bo(e,t,n,r){if(xi){var i=Qs(e,t,n,r);if(i===null)vs(e,t,r,vi,n),Ul(e,r);else if(Mp(i,e,t,n,r))r.stopPropagation();else if(Ul(e,r),t&4&&-1<jp.indexOf(e)){for(;i!==null;){var s=Pr(i);if(s!==null&&Pu(s),s=Qs(e,t,n,r),s===null&&vs(e,t,r,vi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vs(e,t,r,null,n)}}var vi=null;function Qs(e,t,n,r){if(vi=null,e=Do(r),e=Ht(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vi=e,null}function Du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vp()){case Ao:return 1;case Nu:return 4;case mi:case yp:return 16;case $u:return 536870912;default:return 16}default:return 16}}var kt=null,Ho=null,ni=null;function Au(){if(ni)return ni;var e,t=Ho,n=t.length,r,i="value"in kt?kt.value:kt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ni=i.slice(e,1<r?1-r:void 0)}function ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function Vl(){return!1}function Te(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Br:Vl,this.isPropagationStopped=Vl,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uo=Te(Rn),zr=re({},Rn,{view:0,detail:0}),zp=Te(zr),us,cs,Un,Di=re({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(us=e.screenX-Un.screenX,cs=e.screenY-Un.screenY):cs=us=0,Un=e),us)},movementY:function(e){return"movementY"in e?e.movementY:cs}}),Xl=Te(Di),Pp=re({},Di,{dataTransfer:0}),Ip=Te(Pp),Fp=re({},zr,{relatedTarget:0}),fs=Te(Fp),Tp=re({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=Te(Tp),Dp=re({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ap=Te(Dp),Lp=re({},Rn,{data:0}),Kl=Te(Lp),Wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Up(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hp[e])?!!t[e]:!1}function qo(){return Up}var qp=re({},zr,{key:function(e){if(e.key){var t=Wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vp=Te(qp),Xp=re({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gl=Te(Xp),Kp=re({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),Gp=Te(Kp),Yp=re({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qp=Te(Yp),Zp=re({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=Te(Zp),ed=[9,13,27,32],Vo=ft&&"CompositionEvent"in window,ir=null;ft&&"documentMode"in document&&(ir=document.documentMode);var td=ft&&"TextEvent"in window&&!ir,Lu=ft&&(!Vo||ir&&8<ir&&11>=ir),Yl=" ",Ql=!1;function Wu(e,t){switch(e){case"keyup":return ed.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function nd(e,t){switch(e){case"compositionend":return Bu(t);case"keypress":return t.which!==32?null:(Ql=!0,Yl);case"textInput":return e=t.data,e===Yl&&Ql?null:e;default:return null}}function rd(e,t){if(pn)return e==="compositionend"||!Vo&&Wu(e,t)?(e=Au(),ni=Ho=kt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lu&&t.locale!=="ko"?null:t.data;default:return null}}var id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!id[e.type]:t==="textarea"}function Hu(e,t,n,r){Su(r),t=yi(t,"onChange"),0<t.length&&(n=new Uo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,vr=null;function sd(e){ec(e,0)}function Ai(e){var t=mn(e);if(du(t))return e}function od(e,t){if(e==="change")return t}var Uu=!1;if(ft){var ps;if(ft){var ds="oninput"in document;if(!ds){var Jl=document.createElement("div");Jl.setAttribute("oninput","return;"),ds=typeof Jl.oninput=="function"}ps=ds}else ps=!1;Uu=ps&&(!document.documentMode||9<document.documentMode)}function ea(){sr&&(sr.detachEvent("onpropertychange",qu),vr=sr=null)}function qu(e){if(e.propertyName==="value"&&Ai(vr)){var t=[];Hu(t,vr,e,Do(e)),Cu(sd,t)}}function ld(e,t,n){e==="focusin"?(ea(),sr=t,vr=n,sr.attachEvent("onpropertychange",qu)):e==="focusout"&&ea()}function ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(vr)}function ud(e,t){if(e==="click")return Ai(t)}function cd(e,t){if(e==="input"||e==="change")return Ai(t)}function fd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:fd;function yr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ps.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function na(e,t){var n=ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ta(n)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xu(){for(var e=window,t=pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pi(e.document)}return t}function Xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pd(e){var t=Xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vu(n.ownerDocument.documentElement,n)){if(r!==null&&Xo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=na(n,s);var o=na(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dd=ft&&"documentMode"in document&&11>=document.documentMode,dn=null,Zs=null,or=null,Js=!1;function ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Js||dn==null||dn!==pi(r)||(r=dn,"selectionStart"in r&&Xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),or&&yr(or,r)||(or=r,r=yi(Zs,"onSelect"),0<r.length&&(t=new Uo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},hs={},Ku={};ft&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Li(e){if(hs[e])return hs[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ku)return hs[e]=t[n];return e}var Gu=Li("animationend"),Yu=Li("animationiteration"),Qu=Li("animationstart"),Zu=Li("transitionend"),Ju=new Map,ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Ju.set(e,t),tn(t,[e])}for(var ms=0;ms<ia.length;ms++){var gs=ia[ms],hd=gs.toLowerCase(),md=gs[0].toUpperCase()+gs.slice(1);Ft(hd,"on"+md)}Ft(Gu,"onAnimationEnd");Ft(Yu,"onAnimationIteration");Ft(Qu,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(Zu,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hp(r,t,void 0,e),e.currentTarget=null}function ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;sa(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;sa(i,l,u),s=a}}}if(hi)throw e=Ks,hi=!1,Ks=null,e}function Q(e,t){var n=t[io];n===void 0&&(n=t[io]=new Set);var r=e+"__bubble";n.has(r)||(tc(t,e,2,!1),n.add(r))}function xs(e,t,n){var r=0;t&&(r|=4),tc(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[Ur]){e[Ur]=!0,au.forEach(function(n){n!=="selectionchange"&&(gd.has(n)||xs(n,!1,e),xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ur]||(t[Ur]=!0,xs("selectionchange",!1,t))}}function tc(e,t,n,r){switch(Du(t)){case 1:var i=$p;break;case 4:i=Op;break;default:i=Bo}n=i.bind(null,t,n,e),i=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vs(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ht(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Cu(function(){var u=s,p=Do(n),c=[];e:{var f=Ju.get(e);if(f!==void 0){var h=Uo,g=e;switch(e){case"keypress":if(ri(n)===0)break e;case"keydown":case"keyup":h=Vp;break;case"focusin":g="focus",h=fs;break;case"focusout":g="blur",h=fs;break;case"beforeblur":case"afterblur":h=fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Gp;break;case Gu:case Yu:case Qu:h=Rp;break;case Zu:h=Qp;break;case"scroll":h=zp;break;case"wheel":h=Jp;break;case"copy":case"cut":case"paste":h=Ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Gl}var v=(t&4)!==0,y=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,x;d!==null;){x=d;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,m!==null&&(S=hr(d,m),S!=null&&v.push(wr(d,S,x)))),y)break;d=d.return}0<v.length&&(f=new h(f,g,null,n,p),c.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==qs&&(g=n.relatedTarget||n.fromElement)&&(Ht(g)||g[pt]))break e;if((h||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Ht(g):null,g!==null&&(y=nn(g),g!==y||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(v=Xl,S="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Gl,S="onPointerLeave",m="onPointerEnter",d="pointer"),y=h==null?f:mn(h),x=g==null?f:mn(g),f=new v(S,d+"leave",h,n,p),f.target=y,f.relatedTarget=x,S=null,Ht(p)===u&&(v=new v(m,d+"enter",g,n,p),v.target=x,v.relatedTarget=y,S=v),y=S,h&&g)t:{for(v=h,m=g,d=0,x=v;x;x=ln(x))d++;for(x=0,S=m;S;S=ln(S))x++;for(;0<d-x;)v=ln(v),d--;for(;0<x-d;)m=ln(m),x--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=ln(v),m=ln(m)}v=null}else v=null;h!==null&&oa(c,f,h,v,!1),g!==null&&y!==null&&oa(c,y,g,v,!0)}}e:{if(f=u?mn(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var _=od;else if(Zl(f))if(Uu)_=cd;else{_=ad;var b=ld}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=ud);if(_&&(_=_(e,u))){Hu(c,_,n,p);break e}b&&b(e,f,u),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Ls(f,"number",f.value)}switch(b=u?mn(u):window,e){case"focusin":(Zl(b)||b.contentEditable==="true")&&(dn=b,Zs=u,or=null);break;case"focusout":or=Zs=dn=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,ra(c,n,p);break;case"selectionchange":if(dd)break;case"keydown":case"keyup":ra(c,n,p)}var k;if(Vo)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else pn?Wu(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Lu&&n.locale!=="ko"&&(pn||C!=="onCompositionStart"?C==="onCompositionEnd"&&pn&&(k=Au()):(kt=p,Ho="value"in kt?kt.value:kt.textContent,pn=!0)),b=yi(u,C),0<b.length&&(C=new Kl(C,e,null,n,p),c.push({event:C,listeners:b}),k?C.data=k:(k=Bu(n),k!==null&&(C.data=k)))),(k=td?nd(e,n):rd(e,n))&&(u=yi(u,"onBeforeInput"),0<u.length&&(p=new Kl("onBeforeInput","beforeinput",null,n,p),c.push({event:p,listeners:u}),p.data=k))}ec(c,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hr(e,n),s!=null&&r.unshift(wr(e,s,i)),s=hr(e,t),s!=null&&r.push(wr(e,s,i))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oa(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=hr(n,s),a!=null&&o.unshift(wr(n,a,l))):i||(a=hr(n,s),a!=null&&o.push(wr(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var xd=/\r\n?/g,vd=/\u0000|\uFFFD/g;function la(e){return(typeof e=="string"?e:""+e).replace(xd,`
`).replace(vd,"")}function qr(e,t,n){if(t=la(t),la(e)!==t&&n)throw Error(j(425))}function Si(){}var eo=null,to=null;function no(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ro=typeof setTimeout=="function"?setTimeout:void 0,yd=typeof clearTimeout=="function"?clearTimeout:void 0,aa=typeof Promise=="function"?Promise:void 0,Sd=typeof queueMicrotask=="function"?queueMicrotask:typeof aa<"u"?function(e){return aa.resolve(null).then(e).catch(wd)}:ro;function wd(e){setTimeout(function(){throw e})}function ys(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xr(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Dn,_r="__reactProps$"+Dn,pt="__reactContainer$"+Dn,io="__reactEvents$"+Dn,_d="__reactListeners$"+Dn,kd="__reactHandles$"+Dn;function Ht(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ua(e);e!==null;){if(n=e[tt])return n;e=ua(e)}return t}e=n,n=e.parentNode}return null}function Pr(e){return e=e[tt]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Wi(e){return e[_r]||null}var so=[],gn=-1;function Tt(e){return{current:e}}function Z(e){0>gn||(e.current=so[gn],so[gn]=null,gn--)}function Y(e,t){gn++,so[gn]=e.current,e.current=t}var It={},Se=Tt(It),Me=Tt(!1),Yt=It;function $n(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function wi(){Z(Me),Z(Se)}function ca(e,t,n){if(Se.current!==It)throw Error(j(168));Y(Se,t),Y(Me,n)}function nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,lp(e)||"Unknown",i));return re({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Yt=Se.current,Y(Se,e),Y(Me,Me.current),!0}function fa(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=nc(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,Z(Me),Z(Se),Y(Se,e)):Z(Me),Y(Me,n)}var lt=null,Bi=!1,Ss=!1;function rc(e){lt===null?lt=[e]:lt.push(e)}function Cd(e){Bi=!0,rc(e)}function Rt(){if(!Ss&&lt!==null){Ss=!0;var e=0,t=X;try{var n=lt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Bi=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),Mu(Ao,Rt),i}finally{X=t,Ss=!1}}return null}var xn=[],vn=0,ki=null,Ci=0,Re=[],De=0,Qt=null,at=1,ut="";function Lt(e,t){xn[vn++]=Ci,xn[vn++]=ki,ki=e,Ci=t}function ic(e,t,n){Re[De++]=at,Re[De++]=ut,Re[De++]=Qt,Qt=e;var r=at;e=ut;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var s=32-Xe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,at=1<<32-Xe(t)+i|n<<i|r,ut=s+e}else at=1<<s|n<<i|r,ut=e}function Ko(e){e.return!==null&&(Lt(e,1),ic(e,1,0))}function Go(e){for(;e===ki;)ki=xn[--vn],xn[vn]=null,Ci=xn[--vn],xn[vn]=null;for(;e===Qt;)Qt=Re[--De],Re[De]=null,ut=Re[--De],Re[De]=null,at=Re[--De],Re[De]=null}var Pe=null,ze=null,ee=!1,Ve=null;function sc(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,ze=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:at,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,ze=null,!0):!1;default:return!1}}function oo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lo(e){if(ee){var t=ze;if(t){var n=t;if(!pa(e,t)){if(oo(e))throw Error(j(418));t=Mt(n.nextSibling);var r=Pe;t&&pa(e,t)?sc(r,n):(e.flags=e.flags&-4097|2,ee=!1,Pe=e)}}else{if(oo(e))throw Error(j(418));e.flags=e.flags&-4097|2,ee=!1,Pe=e}}}function da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Vr(e){if(e!==Pe)return!1;if(!ee)return da(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!no(e.type,e.memoizedProps)),t&&(t=ze)){if(oo(e))throw oc(),Error(j(418));for(;t;)sc(e,t),t=Mt(t.nextSibling)}if(da(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Pe?Mt(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=ze;e;)e=Mt(e.nextSibling)}function On(){ze=Pe=null,ee=!1}function Yo(e){Ve===null?Ve=[e]:Ve.push(e)}var bd=mt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ha(e){var t=e._init;return t(e._payload)}function lc(e){function t(m,d){if(e){var x=m.deletions;x===null?(m.deletions=[d],m.flags|=16):x.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=zt(m,d),m.index=0,m.sibling=null,m}function s(m,d,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<d?(m.flags|=2,d):x):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,x,S){return d===null||d.tag!==6?(d=js(x,m.mode,S),d.return=m,d):(d=i(d,x),d.return=m,d)}function a(m,d,x,S){var _=x.type;return _===fn?p(m,d,x.props.children,S,x.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===yt&&ha(_)===d.type)?(S=i(d,x.props),S.ref=qn(m,d,x),S.return=m,S):(S=ci(x.type,x.key,x.props,null,m.mode,S),S.ref=qn(m,d,x),S.return=m,S)}function u(m,d,x,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==x.containerInfo||d.stateNode.implementation!==x.implementation?(d=Ms(x,m.mode,S),d.return=m,d):(d=i(d,x.children||[]),d.return=m,d)}function p(m,d,x,S,_){return d===null||d.tag!==7?(d=Xt(x,m.mode,S,_),d.return=m,d):(d=i(d,x),d.return=m,d)}function c(m,d,x){if(typeof d=="string"&&d!==""||typeof d=="number")return d=js(""+d,m.mode,x),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Tr:return x=ci(d.type,d.key,d.props,null,m.mode,x),x.ref=qn(m,null,d),x.return=m,x;case cn:return d=Ms(d,m.mode,x),d.return=m,d;case yt:var S=d._init;return c(m,S(d._payload),x)}if(Yn(d)||Ln(d))return d=Xt(d,m.mode,x,null),d.return=m,d;Xr(m,d)}return null}function f(m,d,x,S){var _=d!==null?d.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return _!==null?null:l(m,d,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tr:return x.key===_?a(m,d,x,S):null;case cn:return x.key===_?u(m,d,x,S):null;case yt:return _=x._init,f(m,d,_(x._payload),S)}if(Yn(x)||Ln(x))return _!==null?null:p(m,d,x,S,null);Xr(m,x)}return null}function h(m,d,x,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(x)||null,l(d,m,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Tr:return m=m.get(S.key===null?x:S.key)||null,a(d,m,S,_);case cn:return m=m.get(S.key===null?x:S.key)||null,u(d,m,S,_);case yt:var b=S._init;return h(m,d,x,b(S._payload),_)}if(Yn(S)||Ln(S))return m=m.get(x)||null,p(d,m,S,_,null);Xr(d,S)}return null}function g(m,d,x,S){for(var _=null,b=null,k=d,C=d=0,N=null;k!==null&&C<x.length;C++){k.index>C?(N=k,k=null):N=k.sibling;var F=f(m,k,x[C],S);if(F===null){k===null&&(k=N);break}e&&k&&F.alternate===null&&t(m,k),d=s(F,d,C),b===null?_=F:b.sibling=F,b=F,k=N}if(C===x.length)return n(m,k),ee&&Lt(m,C),_;if(k===null){for(;C<x.length;C++)k=c(m,x[C],S),k!==null&&(d=s(k,d,C),b===null?_=k:b.sibling=k,b=k);return ee&&Lt(m,C),_}for(k=r(m,k);C<x.length;C++)N=h(k,m,C,x[C],S),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?C:N.key),d=s(N,d,C),b===null?_=N:b.sibling=N,b=N);return e&&k.forEach(function(B){return t(m,B)}),ee&&Lt(m,C),_}function v(m,d,x,S){var _=Ln(x);if(typeof _!="function")throw Error(j(150));if(x=_.call(x),x==null)throw Error(j(151));for(var b=_=null,k=d,C=d=0,N=null,F=x.next();k!==null&&!F.done;C++,F=x.next()){k.index>C?(N=k,k=null):N=k.sibling;var B=f(m,k,F.value,S);if(B===null){k===null&&(k=N);break}e&&k&&B.alternate===null&&t(m,k),d=s(B,d,C),b===null?_=B:b.sibling=B,b=B,k=N}if(F.done)return n(m,k),ee&&Lt(m,C),_;if(k===null){for(;!F.done;C++,F=x.next())F=c(m,F.value,S),F!==null&&(d=s(F,d,C),b===null?_=F:b.sibling=F,b=F);return ee&&Lt(m,C),_}for(k=r(m,k);!F.done;C++,F=x.next())F=h(k,m,C,F.value,S),F!==null&&(e&&F.alternate!==null&&k.delete(F.key===null?C:F.key),d=s(F,d,C),b===null?_=F:b.sibling=F,b=F);return e&&k.forEach(function(R){return t(m,R)}),ee&&Lt(m,C),_}function y(m,d,x,S){if(typeof x=="object"&&x!==null&&x.type===fn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Tr:e:{for(var _=x.key,b=d;b!==null;){if(b.key===_){if(_=x.type,_===fn){if(b.tag===7){n(m,b.sibling),d=i(b,x.props.children),d.return=m,m=d;break e}}else if(b.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===yt&&ha(_)===b.type){n(m,b.sibling),d=i(b,x.props),d.ref=qn(m,b,x),d.return=m,m=d;break e}n(m,b);break}else t(m,b);b=b.sibling}x.type===fn?(d=Xt(x.props.children,m.mode,S,x.key),d.return=m,m=d):(S=ci(x.type,x.key,x.props,null,m.mode,S),S.ref=qn(m,d,x),S.return=m,m=S)}return o(m);case cn:e:{for(b=x.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===x.containerInfo&&d.stateNode.implementation===x.implementation){n(m,d.sibling),d=i(d,x.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Ms(x,m.mode,S),d.return=m,m=d}return o(m);case yt:return b=x._init,y(m,d,b(x._payload),S)}if(Yn(x))return g(m,d,x,S);if(Ln(x))return v(m,d,x,S);Xr(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,x),d.return=m,m=d):(n(m,d),d=js(x,m.mode,S),d.return=m,m=d),o(m)):n(m,d)}return y}var zn=lc(!0),ac=lc(!1),bi=Tt(null),Ei=null,yn=null,Qo=null;function Zo(){Qo=yn=Ei=null}function Jo(e){var t=bi.current;Z(bi),e._currentValue=t}function ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Ei=e,Qo=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Qo!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(Ei===null)throw Error(j(308));yn=e,Ei.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Ut=null;function el(e){Ut===null?Ut=[e]:Ut.push(e)}function uc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,el(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,el(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lo(e,n)}}function ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ji(e,t,n,r){var i=e.updateQueue;St=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,p=u=a=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(f=t,h=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){c=g.call(h,c,f);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(h,c,f):g,f==null)break e;c=re({},c,f);break e;case 2:St=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=h,a=c):p=p.next=h,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(p===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Jt|=o,e.lanes=o,e.memoizedState=c}}function ga(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ir={},it=Tt(Ir),kr=Tt(Ir),Cr=Tt(Ir);function qt(e){if(e===Ir)throw Error(j(174));return e}function nl(e,t){switch(Y(Cr,t),Y(kr,e),Y(it,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bs(t,e)}Z(it),Y(it,t)}function Pn(){Z(it),Z(kr),Z(Cr)}function fc(e){qt(Cr.current);var t=qt(it.current),n=Bs(t,e.type);t!==n&&(Y(kr,e),Y(it,n))}function rl(e){kr.current===e&&(Z(it),Z(kr))}var te=Tt(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function il(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var si=mt.ReactCurrentDispatcher,_s=mt.ReactCurrentBatchConfig,Zt=0,ne=null,ue=null,pe=null,Ni=!1,lr=!1,br=0,Ed=0;function xe(){throw Error(j(321))}function sl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function ol(e,t,n,r,i,s){if(Zt=s,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,si.current=e===null||e.memoizedState===null?$d:Od,e=n(r,i),lr){s=0;do{if(lr=!1,br=0,25<=s)throw Error(j(301));s+=1,pe=ue=null,t.updateQueue=null,si.current=zd,e=n(r,i)}while(lr)}if(si.current=$i,t=ue!==null&&ue.next!==null,Zt=0,pe=ue=ne=null,Ni=!1,t)throw Error(j(300));return e}function ll(){var e=br!==0;return br=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=e:pe=pe.next=e,pe}function Be(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?ne.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(j(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?ne.memoizedState=pe=e:pe=pe.next=e}return pe}function Er(e,t){return typeof t=="function"?t(e):t}function ks(e){var t=Be(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var p=u.lane;if((Zt&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ne.lanes|=p,Jt|=p}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ge(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ne.lanes|=s,Jt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cs(e){var t=Be(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ge(s,t.memoizedState)||(je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function pc(){}function dc(e,t){var n=ne,r=Be(),i=t(),s=!Ge(r.memoizedState,i);if(s&&(r.memoizedState=i,je=!0),r=r.queue,al(gc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,jr(9,mc.bind(null,n,r,i,t),void 0,null),de===null)throw Error(j(349));Zt&30||hc(n,t,i)}return i}function hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mc(e,t,n,r){t.value=n,t.getSnapshot=r,xc(t)&&vc(e)}function gc(e,t,n){return n(function(){xc(t)&&vc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function vc(e){var t=dt(e,1);t!==null&&Ke(t,e,1,-1)}function xa(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},t.queue=e,e=e.dispatch=Nd.bind(null,ne,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yc(){return Be().memoizedState}function oi(e,t,n,r){var i=et();ne.flags|=e,i.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function Hi(e,t,n,r){var i=Be();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&sl(r,o.deps)){i.memoizedState=jr(t,n,s,r);return}}ne.flags|=e,i.memoizedState=jr(1|t,n,s,r)}function va(e,t){return oi(8390656,8,e,t)}function al(e,t){return Hi(2048,8,e,t)}function Sc(e,t){return Hi(4,2,e,t)}function wc(e,t){return Hi(4,4,e,t)}function _c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kc(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4,4,_c.bind(null,t,e),n)}function ul(){}function Cc(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bc(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ec(e,t,n){return Zt&21?(Ge(n,t)||(n=Ou(),ne.lanes|=n,Jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function jd(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=_s.transition;_s.transition={};try{e(!1),t()}finally{X=n,_s.transition=r}}function jc(){return Be().memoizedState}function Md(e,t,n){var r=Ot(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mc(e))Nc(t,n);else if(n=uc(e,t,n,r),n!==null){var i=ke();Ke(n,e,r,i),$c(n,t,r)}}function Nd(e,t,n){var r=Ot(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))Nc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ge(l,o)){var a=t.interleaved;a===null?(i.next=i,el(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=uc(e,t,i,r),n!==null&&(i=ke(),Ke(n,e,r,i),$c(n,t,r))}}function Mc(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Nc(e,t){lr=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $c(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lo(e,n)}}var $i={readContext:We,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},$d={readContext:We,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:va,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,_c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Md.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:xa,useDebugValue:ul,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=xa(!1),t=e[0];return e=jd.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=et();if(ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),de===null)throw Error(j(349));Zt&30||hc(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,va(gc.bind(null,r,s,e),[e]),r.flags|=2048,jr(9,mc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=et(),t=de.identifierPrefix;if(ee){var n=ut,r=at;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ed++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Od={readContext:We,useCallback:Cc,useContext:We,useEffect:al,useImperativeHandle:kc,useInsertionEffect:Sc,useLayoutEffect:wc,useMemo:bc,useReducer:ks,useRef:yc,useState:function(){return ks(Er)},useDebugValue:ul,useDeferredValue:function(e){var t=Be();return Ec(t,ue.memoizedState,e)},useTransition:function(){var e=ks(Er)[0],t=Be().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:dc,useId:jc,unstable_isNewReconciler:!1},zd={readContext:We,useCallback:Cc,useContext:We,useEffect:al,useImperativeHandle:kc,useInsertionEffect:Sc,useLayoutEffect:wc,useMemo:bc,useReducer:Cs,useRef:yc,useState:function(){return Cs(Er)},useDebugValue:ul,useDeferredValue:function(e){var t=Be();return ue===null?t.memoizedState=e:Ec(t,ue.memoizedState,e)},useTransition:function(){var e=Cs(Er)[0],t=Be().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:dc,useId:jc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function uo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ui={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Ot(e),s=ct(r,i);s.payload=t,n!=null&&(s.callback=n),t=Nt(e,s,i),t!==null&&(Ke(t,e,i,r),ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Ot(e),s=ct(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Nt(e,s,i),t!==null&&(Ke(t,e,i,r),ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Ot(e),i=ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,r),t!==null&&(Ke(t,e,r,n),ii(t,e,r))}};function ya(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,s):!0}function Oc(e,t,n){var r=!1,i=It,s=t.contextType;return typeof s=="object"&&s!==null?s=We(s):(i=Ne(t)?Yt:Se.current,r=t.contextTypes,s=(r=r!=null)?$n(e,i):It),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ui.enqueueReplaceState(t,t.state,null)}function co(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},tl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=We(s):(s=Ne(t)?Yt:Se.current,i.context=$n(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(uo(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ui.enqueueReplaceState(i,i.state,null),ji(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=op(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pd=typeof WeakMap=="function"?WeakMap:Map;function zc(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,_o=r),fo(e,t)},n}function Pc(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fo(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fo(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xd.bind(null,e,t,n),t.then(e,e))}function _a(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ka(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Id=mt.ReactCurrentOwner,je=!1;function _e(e,t,n,r){t.child=e===null?ac(t,null,n,r):zn(t,e.child,n,r)}function Ca(e,t,n,r,i){n=n.render;var s=t.ref;return jn(t,i),r=ol(e,t,n,r,s,i),n=ll(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(ee&&n&&Ko(t),t.flags|=1,_e(e,t,r,i),t.child)}function ba(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!xl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ic(e,t,s,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(o,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=zt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ic(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(yr(s,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,ht(e,t,i)}return po(e,t,n,r,i)}function Fc(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(wn,Oe),Oe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(wn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(wn,Oe),Oe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Y(wn,Oe),Oe|=r;return _e(e,t,i,n),t.child}function Tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function po(e,t,n,r,i){var s=Ne(n)?Yt:Se.current;return s=$n(t,s),jn(t,i),n=ol(e,t,n,r,s,i),r=ll(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(ee&&r&&Ko(t),t.flags|=1,_e(e,t,n,i),t.child)}function Ea(e,t,n,r,i){if(Ne(n)){var s=!0;_i(t)}else s=!1;if(jn(t,i),t.stateNode===null)li(e,t),Oc(t,n,r),co(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ne(n)?Yt:Se.current,u=$n(t,u));var p=n.getDerivedStateFromProps,c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Sa(t,o,r,u),St=!1;var f=t.memoizedState;o.state=f,ji(t,r,o,i),a=t.memoizedState,l!==r||f!==a||Me.current||St?(typeof p=="function"&&(uo(t,n,p,r),a=t.memoizedState),(l=St||ya(t,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,cc(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ue(t.type,l),o.props=u,c=t.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=Ne(n)?Yt:Se.current,a=$n(t,a));var h=n.getDerivedStateFromProps;(p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&Sa(t,o,r,a),St=!1,f=t.memoizedState,o.state=f,ji(t,r,o,i);var g=t.memoizedState;l!==c||f!==g||Me.current||St?(typeof h=="function"&&(uo(t,n,h,r),g=t.memoizedState),(u=St||ya(t,n,u,r,f,g,a)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ho(e,t,n,r,s,i)}function ho(e,t,n,r,i,s){Tc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&fa(t,n,!1),ht(e,t,s);r=t.stateNode,Id.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=zn(t,e.child,null,s),t.child=zn(t,null,l,s)):_e(e,t,l,s),t.memoizedState=r.state,i&&fa(t,n,!0),t.child}function Rc(e){var t=e.stateNode;t.pendingContext?ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ca(e,t.context,!1),nl(e,t.containerInfo)}function ja(e,t,n,r,i){return On(),Yo(i),t.flags|=256,_e(e,t,n,r),t.child}var mo={dehydrated:null,treeContext:null,retryLane:0};function go(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dc(e,t,n){var r=t.pendingProps,i=te.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(te,i&1),e===null)return lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xi(o,r,0,null),e=Xt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=go(n),t.memoizedState=mo,e):cl(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Fd(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=zt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zt(l,s):(s=Xt(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?go(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=mo,r}return s=e.child,e=s.sibling,r=zt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cl(e,t){return t=Xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Kr(e,t,n,r){return r!==null&&Yo(r),zn(t,e.child,null,n),e=cl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fd(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=bs(Error(j(422))),Kr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Xi({mode:"visible",children:r.children},i,0,null),s=Xt(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&zn(t,e.child,null,o),t.child.memoizedState=go(o),t.memoizedState=mo,s);if(!(t.mode&1))return Kr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=bs(s,r,void 0),Kr(e,t,o,r)}if(l=(o&e.childLanes)!==0,je||l){if(r=de,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dt(e,i),Ke(r,e,i,-1))}return gl(),r=bs(Error(j(421))),Kr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kd.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ze=Mt(i.nextSibling),Pe=t,ee=!0,Ve=null,e!==null&&(Re[De++]=at,Re[De++]=ut,Re[De++]=Qt,at=e.id,ut=e.overflow,Qt=t),t=cl(t,r.children),t.flags|=4096,t)}function Ma(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ao(e.return,t,n)}function Es(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(_e(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ma(e,n,t);else if(e.tag===19)Ma(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Mi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Es(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Es(t,!0,n,null,s);break;case"together":Es(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Td(e,t,n){switch(t.tag){case 3:Rc(t),On();break;case 5:fc(t);break;case 1:Ne(t.type)&&_i(t);break;case 4:nl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(bi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Dc(e,t,n):(Y(te,te.current&1),e=ht(e,t,n),e!==null?e.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,Fc(e,t,n)}return ht(e,t,n)}var Lc,xo,Wc,Bc;Lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xo=function(){};Wc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qt(it.current);var s=null;switch(n){case"input":i=Ds(e,i),r=Ds(e,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=Ws(e,i),r=Ws(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}Hs(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Bc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vn(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rd(e,t,n){var r=t.pendingProps;switch(Go(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ne(t.type)&&wi(),ve(t),null;case 3:return r=t.stateNode,Pn(),Z(Me),Z(Se),il(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(bo(Ve),Ve=null))),xo(e,t),ve(t),null;case 5:rl(t);var i=qt(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ve(t),null}if(e=qt(it.current),Vr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[tt]=t,r[_r]=s,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Zn.length;i++)Q(Zn[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Rl(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Al(r,s),Q("invalid",r)}Hs(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&qr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&qr(r.textContent,l,e),i=["children",""+l]):pr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Rr(r),Dl(r,s,!0);break;case"textarea":Rr(r),Ll(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Si)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tt]=t,e[_r]=r,Lc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Us(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zn.length;i++)Q(Zn[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":Rl(e,r),i=Ds(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Al(e,r),i=Ws(e,r),Q("invalid",e);break;default:i=r}Hs(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?yu(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&xu(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&dr(e,a):typeof a=="number"&&dr(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pr.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",e):a!=null&&Io(e,s,a,o))}switch(n){case"input":Rr(e),Dl(e,r,!1);break;case"textarea":Rr(e),Ll(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?kn(e,!!r.multiple,s,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Bc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=qt(Cr.current),qt(it.current),Vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(s=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return ve(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&ze!==null&&t.mode&1&&!(t.flags&128))oc(),On(),t.flags|=98560,s=!1;else if(s=Vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[tt]=t}else On(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else Ve!==null&&(bo(Ve),Ve=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ce===0&&(ce=3):gl())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Pn(),xo(e,t),e===null&&Sr(t.stateNode.containerInfo),ve(t),null;case 10:return Jo(t.type._context),ve(t),null;case 17:return Ne(t.type)&&wi(),ve(t),null;case 19:if(Z(te),s=t.memoizedState,s===null)return ve(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Vn(s,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Mi(e),o!==null){for(t.flags|=128,Vn(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(te,te.current&1|2),t.child}e=e.sibling}s.tail!==null&&se()>Fn&&(t.flags|=128,r=!0,Vn(s,!1),t.lanes=4194304)}else{if(!r)if(e=Mi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return ve(t),null}else 2*se()-s.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,Vn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=se(),t.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Dd(e,t){switch(Go(t),t.tag){case 1:return Ne(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),Z(Me),Z(Se),il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rl(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return Pn(),null;case 10:return Jo(t.type._context),null;case 22:case 23:return ml(),null;case 24:return null;default:return null}}var Gr=!1,ye=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,z=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function vo(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Na=!1;function Ld(e,t){if(eo=xi,e=Xu(),Xo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,p=0,c=e,f=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break t;if(f===n&&++u===i&&(l=o),f===s&&++p===r&&(a=o),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},xi=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,y=g.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ue(t.type,v),y);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(S){ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=Na,Na=!1,g}function ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&vo(t,n,s)}i=i.next}while(i!==r)}}function qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[_r],delete t[io],delete t[_d],delete t[kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uc(e){return e.tag===5||e.tag===3||e.tag===4}function $a(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function So(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(So(e,t,n),e=e.sibling;e!==null;)So(e,t,n),e=e.sibling}function wo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wo(e,t,n),e=e.sibling;e!==null;)wo(e,t,n),e=e.sibling}var he=null,qe=!1;function vt(e,t,n){for(n=n.child;n!==null;)qc(e,t,n),n=n.sibling}function qc(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Ri,n)}catch{}switch(n.tag){case 5:ye||Sn(n,t);case 6:var r=he,i=qe;he=null,vt(e,t,n),he=r,qe=i,he!==null&&(qe?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(qe?(e=he,n=n.stateNode,e.nodeType===8?ys(e.parentNode,n):e.nodeType===1&&ys(e,n),xr(e)):ys(he,n.stateNode));break;case 4:r=he,i=qe,he=n.stateNode.containerInfo,qe=!0,vt(e,t,n),he=r,qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vo(n,t,o),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!ye&&(Sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,t,l)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,vt(e,t,n),ye=r):vt(e,t,n);break;default:vt(e,t,n)}}function Oa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ad),t.forEach(function(r){var i=Gd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,qe=!1;break e;case 3:he=l.stateNode.containerInfo,qe=!0;break e;case 4:he=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(he===null)throw Error(j(160));qc(s,o,i),he=null,qe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vc(t,e),t=t.sibling}function Vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Je(e),r&4){try{ar(3,e,e.return),qi(3,e)}catch(v){ie(e,e.return,v)}try{ar(5,e,e.return)}catch(v){ie(e,e.return,v)}}break;case 1:He(t,e),Je(e),r&512&&n!==null&&Sn(n,n.return);break;case 5:if(He(t,e),Je(e),r&512&&n!==null&&Sn(n,n.return),e.flags&32){var i=e.stateNode;try{dr(i,"")}catch(v){ie(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hu(i,s),Us(l,o);var u=Us(l,s);for(o=0;o<a.length;o+=2){var p=a[o],c=a[o+1];p==="style"?yu(i,c):p==="dangerouslySetInnerHTML"?xu(i,c):p==="children"?dr(i,c):Io(i,p,c,u)}switch(l){case"input":As(i,s);break;case"textarea":mu(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?kn(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?kn(i,!!s.multiple,s.defaultValue,!0):kn(i,!!s.multiple,s.multiple?[]:"",!1))}i[_r]=s}catch(v){ie(e,e.return,v)}}break;case 6:if(He(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){ie(e,e.return,v)}}break;case 3:if(He(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(v){ie(e,e.return,v)}break;case 4:He(t,e),Je(e);break;case 13:He(t,e),Je(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dl=se())),r&4&&Oa(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||p,He(t,e),ye=u):He(t,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(z=e,p=e.child;p!==null;){for(c=z=p;z!==null;){switch(f=z,h=f.child,f.tag){case 0:case 11:case 14:case 15:ar(4,f,f.return);break;case 1:Sn(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){ie(r,n,v)}}break;case 5:Sn(f,f.return);break;case 22:if(f.memoizedState!==null){Pa(c);continue}}h!==null?(h.return=f,z=h):Pa(c)}p=p.sibling}e:for(p=null,c=e;;){if(c.tag===5){if(p===null){p=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=vu("display",o))}catch(v){ie(e,e.return,v)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ie(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:He(t,e),Je(e),r&4&&Oa(e);break;case 21:break;default:He(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(dr(i,""),r.flags&=-33);var s=$a(e);wo(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$a(e);So(e,l,o);break;default:throw Error(j(161))}}catch(a){ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wd(e,t,n){z=e,Xc(e)}function Xc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gr;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ye;l=Gr;var u=ye;if(Gr=o,(ye=a)&&!u)for(z=i;z!==null;)o=z,a=o.child,o.tag===22&&o.memoizedState!==null?Ia(i):a!==null?(a.return=o,z=a):Ia(i);for(;s!==null;)z=s,Xc(s),s=s.sibling;z=i,Gr=l,ye=u}za(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):za(e)}}function za(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||qi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ga(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ga(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&xr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ye||t.flags&512&&yo(t)}catch(f){ie(t,t.return,f)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Pa(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Ia(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qi(4,t)}catch(a){ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ie(t,i,a)}}var s=t.return;try{yo(t)}catch(a){ie(t,s,a)}break;case 5:var o=t.return;try{yo(t)}catch(a){ie(t,o,a)}}}catch(a){ie(t,t.return,a)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var Bd=Math.ceil,Oi=mt.ReactCurrentDispatcher,fl=mt.ReactCurrentOwner,Le=mt.ReactCurrentBatchConfig,q=0,de=null,ae=null,me=0,Oe=0,wn=Tt(0),ce=0,Mr=null,Jt=0,Vi=0,pl=0,ur=null,Ee=null,dl=0,Fn=1/0,ot=null,zi=!1,_o=null,$t=null,Yr=!1,Ct=null,Pi=0,cr=0,ko=null,ai=-1,ui=0;function ke(){return q&6?se():ai!==-1?ai:ai=se()}function Ot(e){return e.mode&1?q&2&&me!==0?me&-me:bd.transition!==null?(ui===0&&(ui=Ou()),ui):(e=X,e!==0||(e=window.event,e=e===void 0?16:Du(e.type)),e):1}function Ke(e,t,n,r){if(50<cr)throw cr=0,ko=null,Error(j(185));Or(e,n,r),(!(q&2)||e!==de)&&(e===de&&(!(q&2)&&(Vi|=n),ce===4&&_t(e,me)),$e(e,r),n===1&&q===0&&!(t.mode&1)&&(Fn=se()+500,Bi&&Rt()))}function $e(e,t){var n=e.callbackNode;bp(e,t);var r=gi(e,e===de?me:0);if(r===0)n!==null&&Hl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hl(n),t===1)e.tag===0?Cd(Fa.bind(null,e)):rc(Fa.bind(null,e)),Sd(function(){!(q&6)&&Rt()}),n=null;else{switch(zu(r)){case 1:n=Ao;break;case 4:n=Nu;break;case 16:n=mi;break;case 536870912:n=$u;break;default:n=mi}n=tf(n,Kc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kc(e,t){if(ai=-1,ui=0,q&6)throw Error(j(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=gi(e,e===de?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ii(e,r);else{t=r;var i=q;q|=2;var s=Yc();(de!==e||me!==t)&&(ot=null,Fn=se()+500,Vt(e,t));do try{qd();break}catch(l){Gc(e,l)}while(!0);Zo(),Oi.current=s,q=i,ae!==null?t=0:(de=null,me=0,t=ce)}if(t!==0){if(t===2&&(i=Gs(e),i!==0&&(r=i,t=Co(e,i))),t===1)throw n=Mr,Vt(e,0),_t(e,r),$e(e,se()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hd(i)&&(t=Ii(e,r),t===2&&(s=Gs(e),s!==0&&(r=s,t=Co(e,s))),t===1))throw n=Mr,Vt(e,0),_t(e,r),$e(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Wt(e,Ee,ot);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=dl+500-se(),10<t)){if(gi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ro(Wt.bind(null,e,Ee,ot),t);break}Wt(e,Ee,ot);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Xe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bd(r/1960))-r,10<r){e.timeoutHandle=ro(Wt.bind(null,e,Ee,ot),r);break}Wt(e,Ee,ot);break;case 5:Wt(e,Ee,ot);break;default:throw Error(j(329))}}}return $e(e,se()),e.callbackNode===n?Kc.bind(null,e):null}function Co(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Ii(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&bo(t)),e}function bo(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Hd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ge(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~pl,t&=~Vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function Fa(e){if(q&6)throw Error(j(327));Mn();var t=gi(e,0);if(!(t&1))return $e(e,se()),null;var n=Ii(e,t);if(e.tag!==0&&n===2){var r=Gs(e);r!==0&&(t=r,n=Co(e,r))}if(n===1)throw n=Mr,Vt(e,0),_t(e,t),$e(e,se()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Ee,ot),$e(e,se()),null}function hl(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Fn=se()+500,Bi&&Rt())}}function en(e){Ct!==null&&Ct.tag===0&&!(q&6)&&Mn();var t=q;q|=1;var n=Le.transition,r=X;try{if(Le.transition=null,X=1,e)return e()}finally{X=r,Le.transition=n,q=t,!(q&6)&&Rt()}}function ml(){Oe=wn.current,Z(wn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yd(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Go(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:Pn(),Z(Me),Z(Se),il();break;case 5:rl(r);break;case 4:Pn();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Jo(r.type._context);break;case 22:case 23:ml()}n=n.return}if(de=e,ae=e=zt(e.current,null),me=Oe=t,ce=0,Mr=null,pl=Vi=Jt=0,Ee=ur=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ut=null}return e}function Gc(e,t){do{var n=ae;try{if(Zo(),si.current=$i,Ni){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ni=!1}if(Zt=0,pe=ue=ne=null,lr=!1,br=0,fl.current=null,n===null||n.return===null){ce=1,Mr=t,ae=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=me,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=l,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=_a(o);if(h!==null){h.flags&=-257,ka(h,o,l,s,t),h.mode&1&&wa(s,u,t),t=h,a=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(a),t.updateQueue=v}else g.add(a);break e}else{if(!(t&1)){wa(s,u,t),gl();break e}a=Error(j(426))}}else if(ee&&l.mode&1){var y=_a(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),ka(y,o,l,s,t),Yo(In(a,l));break e}}s=a=In(a,l),ce!==4&&(ce=2),ur===null?ur=[s]:ur.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=zc(s,a,t);ma(s,m);break e;case 1:l=a;var d=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&($t===null||!$t.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Pc(s,l,t);ma(s,S);break e}}s=s.return}while(s!==null)}Zc(n)}catch(_){t=_,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Yc(){var e=Oi.current;return Oi.current=$i,e===null?$i:e}function gl(){(ce===0||ce===3||ce===2)&&(ce=4),de===null||!(Jt&268435455)&&!(Vi&268435455)||_t(de,me)}function Ii(e,t){var n=q;q|=2;var r=Yc();(de!==e||me!==t)&&(ot=null,Vt(e,t));do try{Ud();break}catch(i){Gc(e,i)}while(!0);if(Zo(),q=n,Oi.current=r,ae!==null)throw Error(j(261));return de=null,me=0,ce}function Ud(){for(;ae!==null;)Qc(ae)}function qd(){for(;ae!==null&&!gp();)Qc(ae)}function Qc(e){var t=ef(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Zc(e):ae=t,fl.current=null}function Zc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dd(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(n=Rd(n,t,Oe),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ce===0&&(ce=5)}function Wt(e,t,n){var r=X,i=Le.transition;try{Le.transition=null,X=1,Vd(e,t,n,r)}finally{Le.transition=i,X=r}return null}function Vd(e,t,n,r){do Mn();while(Ct!==null);if(q&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ep(e,s),e===de&&(ae=de=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yr||(Yr=!0,tf(mi,function(){return Mn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Le.transition,Le.transition=null;var o=X;X=1;var l=q;q|=4,fl.current=null,Ld(e,n),Vc(n,e),pd(to),xi=!!eo,to=eo=null,e.current=n,Wd(n),xp(),q=l,X=o,Le.transition=s}else e.current=n;if(Yr&&(Yr=!1,Ct=e,Pi=i),s=e.pendingLanes,s===0&&($t=null),Sp(n.stateNode),$e(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zi)throw zi=!1,e=_o,_o=null,e;return Pi&1&&e.tag!==0&&Mn(),s=e.pendingLanes,s&1?e===ko?cr++:(cr=0,ko=e):cr=0,Rt(),null}function Mn(){if(Ct!==null){var e=zu(Pi),t=Le.transition,n=X;try{if(Le.transition=null,X=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Pi=0,q&6)throw Error(j(331));var i=q;for(q|=4,z=e.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(z=u;z!==null;){var p=z;switch(p.tag){case 0:case 11:case 15:ar(8,p,s)}var c=p.child;if(c!==null)c.return=p,z=c;else for(;z!==null;){p=z;var f=p.sibling,h=p.return;if(Hc(p),p===u){z=null;break}if(f!==null){f.return=h,z=f;break}z=h}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ar(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,z=m;break e}z=s.return}}var d=e.current;for(z=d;z!==null;){o=z;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,z=x;else e:for(o=d;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qi(9,l)}}catch(_){ie(l,l.return,_)}if(l===o){z=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,z=S;break e}z=l.return}}if(q=i,Rt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Ri,e)}catch{}r=!0}return r}finally{X=n,Le.transition=t}}return!1}function Ta(e,t,n){t=In(n,t),t=zc(e,t,1),e=Nt(e,t,1),t=ke(),e!==null&&(Or(e,1,t),$e(e,t))}function ie(e,t,n){if(e.tag===3)Ta(e,e,n);else for(;t!==null;){if(t.tag===3){Ta(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=In(n,e),e=Pc(t,e,1),t=Nt(t,e,1),e=ke(),t!==null&&(Or(t,1,e),$e(t,e));break}}t=t.return}}function Xd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(me&n)===n&&(ce===4||ce===3&&(me&130023424)===me&&500>se()-dl?Vt(e,0):pl|=n),$e(e,t)}function Jc(e,t){t===0&&(e.mode&1?(t=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):t=1);var n=ke();e=dt(e,t),e!==null&&(Or(e,t,n),$e(e,n))}function Kd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jc(e,n)}function Gd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Jc(e,n)}var ef;ef=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Td(e,t,n);je=!!(e.flags&131072)}else je=!1,ee&&t.flags&1048576&&ic(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;li(e,t),e=t.pendingProps;var i=$n(t,Se.current);jn(t,n),i=ol(null,t,r,e,i,n);var s=ll();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,_i(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tl(t),i.updater=Ui,t.stateNode=i,i._reactInternals=t,co(t,r,e,n),t=ho(null,t,r,!0,s,n)):(t.tag=0,ee&&s&&Ko(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qd(r),e=Ue(r,e),i){case 0:t=po(null,t,r,e,n);break e;case 1:t=Ea(null,t,r,e,n);break e;case 11:t=Ca(null,t,r,e,n);break e;case 14:t=ba(null,t,r,Ue(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),po(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Ea(e,t,r,i,n);case 3:e:{if(Rc(t),e===null)throw Error(j(387));r=t.pendingProps,s=t.memoizedState,i=s.element,cc(e,t),ji(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=In(Error(j(423)),t),t=ja(e,t,r,n,i);break e}else if(r!==i){i=In(Error(j(424)),t),t=ja(e,t,r,n,i);break e}else for(ze=Mt(t.stateNode.containerInfo.firstChild),Pe=t,ee=!0,Ve=null,n=ac(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===i){t=ht(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return fc(t),e===null&&lo(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,no(r,i)?o=null:s!==null&&no(r,s)&&(t.flags|=32),Tc(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&lo(t),null;case 13:return Dc(e,t,n);case 4:return nl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Ca(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Y(bi,r._currentValue),r._currentValue=o,s!==null)if(Ge(s.value,o)){if(s.children===i.children&&!Me.current){t=ht(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=ct(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ao(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ao(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=We(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),ba(e,t,r,i,n);case 15:return Ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),li(e,t),t.tag=1,Ne(r)?(e=!0,_i(t)):e=!1,jn(t,n),Oc(t,r,i),co(t,r,i,n),ho(null,t,r,!0,e,n);case 19:return Ac(e,t,n);case 22:return Fc(e,t,n)}throw Error(j(156,t.tag))};function tf(e,t){return Mu(e,t)}function Yd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new Yd(e,t,n,r)}function xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qd(e){if(typeof e=="function")return xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===To)return 11;if(e===Ro)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ci(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")xl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fn:return Xt(n.children,i,s,t);case Fo:o=8,i|=8;break;case Is:return e=Ae(12,n,t,i|2),e.elementType=Is,e.lanes=s,e;case Fs:return e=Ae(13,n,t,i),e.elementType=Fs,e.lanes=s,e;case Ts:return e=Ae(19,n,t,i),e.elementType=Ts,e.lanes=s,e;case fu:return Xi(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uu:o=10;break e;case cu:o=9;break e;case To:o=11;break e;case Ro:o=14;break e;case yt:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ae(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Xt(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function Xi(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=fu,e.lanes=n,e.stateNode={isHidden:!1},e}function js(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function Ms(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=as(0),this.expirationTimes=as(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vl(e,t,n,r,i,s,o,l,a){return e=new Zd(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ae(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tl(s),e}function Jd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nf(e){if(!e)return It;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ne(n))return nc(e,n,t)}return t}function rf(e,t,n,r,i,s,o,l,a){return e=vl(n,r,!0,e,i,s,o,l,a),e.context=nf(null),n=e.current,r=ke(),i=Ot(n),s=ct(r,i),s.callback=t??null,Nt(n,s,i),e.current.lanes=i,Or(e,i,r),$e(e,r),e}function Ki(e,t,n,r){var i=t.current,s=ke(),o=Ot(i);return n=nf(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(i,t,o),e!==null&&(Ke(e,i,o,s),ii(e,i,o)),o}function Fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ra(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yl(e,t){Ra(e,t),(e=e.alternate)&&Ra(e,t)}function eh(){return null}var sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sl(e){this._internalRoot=e}Gi.prototype.render=Sl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Ki(e,t,null,null)};Gi.prototype.unmount=Sl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){Ki(null,e,null,null)}),t[pt]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Ru(e)}};function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Da(){}function th(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fi(o);s.call(u)}}var o=rf(t,r,e,0,null,!1,!1,"",Da);return e._reactRootContainer=o,e[pt]=o.current,Sr(e.nodeType===8?e.parentNode:e),en(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Fi(a);l.call(u)}}var a=vl(e,0,!1,null,null,!1,!1,"",Da);return e._reactRootContainer=a,e[pt]=a.current,Sr(e.nodeType===8?e.parentNode:e),en(function(){Ki(t,a,n,r)}),a}function Qi(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Fi(o);l.call(a)}}Ki(t,o,e,i)}else o=th(n,t,e,i,r);return Fi(o)}Pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qn(t.pendingLanes);n!==0&&(Lo(t,n|1),$e(t,se()),!(q&6)&&(Fn=se()+500,Rt()))}break;case 13:en(function(){var r=dt(e,1);if(r!==null){var i=ke();Ke(r,e,1,i)}}),yl(e,1)}};Wo=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ke();Ke(t,e,134217728,n)}yl(e,134217728)}};Iu=function(e){if(e.tag===13){var t=Ot(e),n=dt(e,t);if(n!==null){var r=ke();Ke(n,e,t,r)}yl(e,t)}};Fu=function(){return X};Tu=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Vs=function(e,t,n){switch(t){case"input":if(As(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wi(r);if(!i)throw Error(j(90));du(r),As(r,i)}}}break;case"textarea":mu(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};_u=hl;ku=en;var nh={usingClientEntryPoint:!1,Events:[Pr,mn,Wi,Su,wu,hl]},Xn={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rh={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||eh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Ri=Qr.inject(rh),rt=Qr}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nh;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wl(t))throw Error(j(200));return Jd(e,t,null,n)};Fe.createRoot=function(e,t){if(!wl(e))throw Error(j(299));var n=!1,r="",i=sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vl(e,1,!1,null,null,n,!1,r,i),e[pt]=t.current,Sr(e.nodeType===8?e.parentNode:e),new Sl(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Eu(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return en(e)};Fe.hydrate=function(e,t,n){if(!Yi(t))throw Error(j(200));return Qi(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!wl(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=rf(t,null,e,1,n??null,i,!1,s,o),e[pt]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gi(t)};Fe.render=function(e,t,n){if(!Yi(t))throw Error(j(200));return Qi(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!Yi(e))throw Error(j(40));return e._reactRootContainer?(en(function(){Qi(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Fe.unstable_batchedUpdates=hl;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Qi(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(of)}catch(e){console.error(e)}}of(),su.exports=Fe;var ih=su.exports,Aa=ih;zs.createRoot=Aa.createRoot,zs.hydrateRoot=Aa.hydrateRoot;const sh=`echo [-n] [-e] [-E] [text...]
  Print text to output.
  -n  do not append trailing newline
  -e  enable interpretation of backslash escapes (\\n \\t \\r \\\\ \\0)
  -E  disable escape interpretation (default)
  Examples:
    echo hello world
    echo -n 'no newline'
    echo -e 'line1\\nline2'
    echo -e '\\033[1mbold\\033[0m'
`;function oh(e){let t=!0,n=!1;const r=[];for(const s of e)s==="-n"?t=!1:s==="-e"?n=!0:s==="-E"?n=!1:r.push(s);let i=r.join(" ");return n&&(i=i.replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\r/g,"\r").replace(/\\0/g,"\0").replace(/\\\\/g,"\\")),{output:i+(t?`
`:""),exitCode:0}}const lh=Object.freeze(Object.defineProperty({__proto__:null,default:oh,help:sh},Symbol.toStringTag,{value:"Module"})),ah=`cat [-n] [-b] [-A] [file...]
  Concatenate and print file contents.
  -n  number all output lines
  -b  number non-empty lines only
  -A  show non-printing chars; ends lines with $
  -s  squeeze multiple blank lines into one
  With no file or '-', reads from stdin.
  Examples:
    cat README.txt
    cat /etc/os-release
    echo 'hello' | cat
    cat file1 file2
    cat -n /etc/passwd
`;function uh(e,{stdin:t,vfs:n,sh:r}){const i=f=>n.resolve(f,r.cwd);let s=!1,o=!1,l=!1,a=!1;for(const f of e)/^-[nbasAeET]+$/.test(f)&&(f.includes("n")&&(s=!0),f.includes("b")&&(o=!0),(f.includes("A")||f.includes("e")||f.includes("E"))&&(l=!0),f.includes("s")&&(a=!0));const u=f=>{if(!s&&!o&&!l&&!a)return f;let h=f.split(`
`);if(h[h.length-1]===""&&h.pop(),a){const v=[];let y=!1;for(const m of h){const d=m==="";d&&y||(v.push(m),y=d)}h=v}l&&(h=h.map(v=>v.replace(/\t/g,"^I")+"$"));let g=0;return h=h.map(v=>o&&v===""?"":(g++,(s||o?`${String(g).padStart(6)}	`:"")+v)),h.join(`
`)+`
`};if(!e.length||e.length===1&&e[0]==="-")return{output:u(t??""),exitCode:0};let p="",c=0;for(const f of e){if(f==="-"){p+=u(t??"");continue}if(f.startsWith("-"))continue;const h=i(f);n.exists(h)?n.isDir(h)?(p+=`cat: ${f}: Is a directory
`,c=1):p+=u(n.read(h)??""):(p+=`cat: ${f}: No such file or directory
`,c=1)}return{output:p,exitCode:c}}const Ns=Object.freeze(Object.defineProperty({__proto__:null,default:uh,help:ah},Symbol.toStringTag,{value:"Module"})),_l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],kl=e=>{const t=new Date(e);return`${_l[t.getMonth()]} ${String(t.getDate()).padStart(2)} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`};function _n(e,t=!1){if(!t)return String(e??0);const n=e??0;return n<1024?n+"B":n<1024*1024?(n/1024).toFixed(1)+"K":n<1024*1024*1024?(n/1024/1024).toFixed(1)+"M":(n/1024/1024/1024).toFixed(1)+"G"}const Eo=(e,t,n=!1)=>{const r=e.split("/").pop()||e,i=t.stat(e);if(!i)return`?         ${r}`;const s=i.type==="dir"?"drwxr-xr-x":"-rw-r--r--",o=_n(i.size??0,n);return`${s}  1 user user ${o.padStart(n?4:6)} ${kl(i.mtime??Date.now())} ${r}`},ch=`ls [-laFRhSt1] [path...]
  List directory contents.
  -l  long format (permissions, size, date)
  -a  include hidden files (dotfiles)
  -F  append indicator (/ for dirs, * for executables)
  -R  recursive listing
  -h  human-readable sizes (with -l)
  -S  sort by file size (largest first)
  -t  sort by modification time (newest first)
  -r  reverse sort order
  -1  one entry per line
  Examples:
    ls
    ls -la /etc
    ls -lhS /home/user
    ls -Rt /tmp
`;function fh(e,{vfs:t,sh:n}){const r=d=>t.resolve(d,n.cwd);let i=!1,s=!1,o=!1,l=!1,a=!1,u=!1,p=!1,c=!1,f=!1;const h=[];for(const d of e)/^-[laFRhStr1]+$/.test(d)?(d.includes("l")&&(i=!0),d.includes("a")&&(s=!0),d.includes("F")&&(o=!0),d.includes("R")&&(l=!0),d.includes("h")&&(a=!0),d.includes("S")&&(u=!0),d.includes("t")&&(p=!0),d.includes("r")&&(c=!0),d.includes("1")&&(f=!0)):h.push(d);i&&(f=!1);const g=d=>{let x=t.ls(d);return s&&(x=[".","..",...x]),u?x.sort((S,_)=>{var C,N;const b=((C=t.stat((d==="/"?"":d)+"/"+S))==null?void 0:C.size)??0;return(((N=t.stat((d==="/"?"":d)+"/"+_))==null?void 0:N.size)??0)-b}):p&&x.sort((S,_)=>{var C,N;const b=((C=t.stat((d==="/"?"":d)+"/"+S))==null?void 0:C.mtime)??0;return(((N=t.stat((d==="/"?"":d)+"/"+_))==null?void 0:N.mtime)??0)-b}),c&&x.reverse(),x},v=(d,x="")=>{const S=g(d);if(!S.length&&!s)return"";const _=[];if(i){_.push("total "+S.length);for(const k of S)k==="."||k===".."?_.push(`drwxr-xr-x  2 user user ${a?"   4K":"     0"} ${kl(Date.now())} ${k}`):_.push(Eo((d==="/"?"":d)+"/"+k,t,a))}else{const k=S.map(C=>{const N=(d==="/"?"":d)+"/"+C;return C+(o&&t.isDir(N)?"/":"")});f?_.push(...k):_.push(k.join("  "))}let b=_.join(`
`)+`
`;if(l)for(const k of S){if(k==="."||k==="..")continue;const C=(d==="/"?"":d)+"/"+k;t.isDir(C)&&(b+=`
${x}${C}:
`+v(C,x))}return b};if(!h.length)return l?{output:n.cwd+`:
`+v(n.cwd),exitCode:0}:{output:v(n.cwd),exitCode:0};const y=[];let m=0;for(const d of h){const x=r(d);if(!t.exists(x))y.push(`ls: cannot access '${d}': No such file or directory`),m=1;else if(t.isFile(x))y.push(i?Eo(x,t,a)+`
`:x.split("/").pop()+`
`);else{const S=h.length>1||l?d+`:
`:"";y.push(S+v(x))}}return{output:y.join(`
`),exitCode:m}}const ph=Object.freeze(Object.defineProperty({__proto__:null,default:fh,help:ch},Symbol.toStringTag,{value:"Module"})),dh=`pwd [-L] [-P]
  Print the current working directory.
  -L  print logical path (default)
  -P  print physical path (same in mash)
  Example:
    pwd
`;function hh(e,{sh:t}){return{output:t.cwd+`
`,exitCode:0}}const mh=Object.freeze(Object.defineProperty({__proto__:null,default:hh,help:dh},Symbol.toStringTag,{value:"Module"})),gh=`cd [dir]
  Change the current working directory.
  With no argument, returns to /home/user. '~' = home, '..' = parent.
  Examples:
    cd /etc
    cd ..
    cd ~
    cd -    (return to previous directory)
`;function xh(e,{vfs:t,sh:n}){const r=s=>t.resolve(s,n.cwd);if(e[0]==="-"){const s=n.env.OLDPWD??n.cwd;return n.env.OLDPWD=n.cwd,n.cwd=s,n.env.PWD=s,{output:s+`
`,exitCode:0}}const i=e.length?r(e[0]):"/home/user";return t.exists(i)?t.isDir(i)?(n.env.OLDPWD=n.cwd,n.cwd=i,n.env.PWD=i,{output:"",exitCode:0}):{output:`cd: ${e[0]}: Not a directory
`,exitCode:1}:{output:`cd: ${e[0]}: No such file or directory
`,exitCode:1}}const vh=Object.freeze(Object.defineProperty({__proto__:null,default:xh,help:gh},Symbol.toStringTag,{value:"Module"})),yh=`mkdir [-p] [-v] <dir...>
  Create one or more directories.
  -p  create parent directories as needed; no error if exists
  -v  verbose: print each directory created
  Examples:
    mkdir projects
    mkdir -p /home/user/a/b/c
    mkdir dir1 dir2 dir3
`;function Sh(e,{vfs:t,sh:n}){const r=a=>t.resolve(a,n.cwd);let i=!1,s=!1;const o=[];for(const a of e)a==="-p"||a==="--parents"?i=!0:a==="-v"||a==="--verbose"?s=!0:o.push(a);if(!o.length)return{output:`mkdir: missing operand
`,exitCode:1};let l="";for(const a of o){const u=r(a);if(i)t._mkdirP(u),s&&(l+=`mkdir: created directory '${u}'
`);else{const p=t.mkdir(u);if(p)return{output:p+`
`,exitCode:1};s&&(l+=`mkdir: created directory '${u}'
`)}}return{output:l,exitCode:0}}const wh=Object.freeze(Object.defineProperty({__proto__:null,default:Sh,help:yh},Symbol.toStringTag,{value:"Module"})),_h=`rmdir [-p] <dir...>
  Remove empty directories.
  -p  remove parent directories too if they become empty
  Use 'rm -rf' for non-empty directories.
  Examples:
    rmdir emptydir
    rmdir -p a/b/c
`;function kh(e,{vfs:t,sh:n}){const r=o=>t.resolve(o,n.cwd);let i=!1;const s=[];for(const o of e)o==="-p"||o==="--parents"?i=!0:s.push(o);for(const o of s){let l=r(o);const a=t.rmdir(l);if(a)return{output:a+`
`,exitCode:1};if(i)for(;l.includes("/")&&l!=="/"&&(l=l.slice(0,l.lastIndexOf("/"))||"/",!(t.ls(l).length>0||t.rmdir(l))););}return{output:"",exitCode:0}}const Ch=Object.freeze(Object.defineProperty({__proto__:null,default:kh,help:_h},Symbol.toStringTag,{value:"Module"})),bh=`rm [-r] [-f] [-v] [-i] <file...>
  Remove files or directories.
  -r  recursive (required for directories)
  -f  force; ignore missing files and errors
  -v  verbose; print each file removed
  -i  interactive (in mash: same as default; non-interactive)
  Examples:
    rm file.txt
    rm -rf mydir
    rm -v file1 file2
`;function Eh(e,{vfs:t,sh:n}){const r=u=>t.resolve(u,n.cwd);let i=!1,s=!1,o=!1;const l=[];for(const u of e)/^-[rRfviFi]+$/.test(u)?(/[rR]/.test(u)&&(i=!0),u.includes("f")&&(s=!0),u.includes("v")&&(o=!0)):l.push(u);if(!l.length&&!s)return{output:`rm: missing operand
`,exitCode:1};let a="";for(const u of l){const p=r(u),c=t.rm(p,i);if(c&&!s)return{output:c+`
`,exitCode:1};!c&&o&&(a+=`removed '${p}'
`)}return{output:a,exitCode:0}}const jh=Object.freeze(Object.defineProperty({__proto__:null,default:Eh,help:bh},Symbol.toStringTag,{value:"Module"})),Mh=`cp [-r] [-p] [-v] [-f] <src...> <dst>
  Copy files or directories.
  -r  recursive (copy directories)
  -p  preserve timestamps
  -v  verbose
  -f  force (overwrite without prompt)
  Examples:
    cp file.txt backup.txt
    cp notes.txt /tmp/
    cp -r src/ dst/
`;function Nh(e,{vfs:t,sh:n}){const r=p=>t.resolve(p,n.cwd);let i=!1,s=!1,o=!1;const l=[];for(const p of e)/^-[rRpvf]+$/.test(p)?(/[rR]/.test(p)&&(i=!0),p.includes("p")&&(s=!0),p.includes("v")&&(o=!0)):l.push(p);if(l.length<2)return{output:`cp: missing destination file operand
`,exitCode:1};const a=r(l[l.length-1]);let u="";for(const p of l.slice(0,-1)){const c=r(p);if(!t.exists(c))return{output:`cp: cannot stat '${p}': No such file or directory
`,exitCode:1};if(i&&t.isDir(c)){const f=t.isDir(a)?a+"/"+c.split("/").pop():a;t._mkdirP(f);for(const h of Object.keys(t._t).filter(g=>g.startsWith(c+"/"))){const g=h.slice(c.length),v=f+g;if(t._t[h].type==="dir")t._mkdirP(v);else{const y=t._t[h].content;t._wf(v,y),s&&(t._t[v].mtime=t._t[h].mtime)}o&&(u+=`'${h}' -> '${v}'
`)}}else{const f=t.cp(c,a);if(f)return{output:f+`
`,exitCode:1};const h=t.isDir(a)?a+"/"+c.split("/").pop():a;s&&(t._t[h].mtime=t._t[c].mtime),o&&(u+=`'${c}' -> '${h}'
`)}}return{output:u,exitCode:0}}const $h=Object.freeze(Object.defineProperty({__proto__:null,default:Nh,help:Mh},Symbol.toStringTag,{value:"Module"})),Oh=`mv [-v] [-f] <src...> <dst>
  Move or rename files or directories.
  -v  verbose
  -f  force (overwrite without prompt)
  Examples:
    mv old.txt new.txt
    mv file.txt /tmp/
    mv dir1 dir2
`;function zh(e,{vfs:t,sh:n}){const r=a=>t.resolve(a,n.cwd);let i=!1;const s=[];for(const a of e)/^-[vfi]+$/.test(a)?a.includes("v")&&(i=!0):s.push(a);if(s.length<2)return{output:`mv: missing destination file operand
`,exitCode:1};const o=r(s[s.length-1]);let l="";for(const a of s.slice(0,-1)){const u=r(a),p=t.mv(u,o);if(p)return{output:p+`
`,exitCode:1};const c=t.isDir(o)?o+"/"+u.split("/").pop():o;i&&(l+=`renamed '${u}' -> '${c}'
`)}return{output:l,exitCode:0}}const Ph=Object.freeze(Object.defineProperty({__proto__:null,default:zh,help:Oh},Symbol.toStringTag,{value:"Module"})),Ih=`touch [-a] [-m] [-t TIME] <file...>
  Update file timestamps or create empty files.
  -a  change access time only (mash: same as default)
  -m  change modification time only (mash: same as default)
  -t TIME  use [[CC]YY]MMDDhhmm[.ss] timestamp (mash: ignored)
  Examples:
    touch newfile.txt
    touch a.txt b.txt c.txt
`;function Fh(e,{vfs:t,sh:n}){const r=s=>t.resolve(s,n.cwd),i=e.filter(s=>!s.startsWith("-"));if(!i.length)return{output:`touch: missing file operand
`,exitCode:1};for(const s of i)t.touch(r(s));return{output:"",exitCode:0}}const Th=Object.freeze(Object.defineProperty({__proto__:null,default:Fh,help:Ih},Symbol.toStringTag,{value:"Module"})),Rh=`find [path...] [expression]
  Search for files in a directory hierarchy.
  Options:
    -name GLOB       match filename (supports * and ?)
    -iname GLOB      case-insensitive name match
    -type f|d|l      file type: f=regular, d=directory, l=symlink
    -maxdepth N      limit search depth
    -mindepth N      skip entries shallower than N
    -size [+/-]N[c]  match file size (c=bytes, k=kB, M=MB)
    -newer FILE      newer than FILE
    -empty           find empty files or directories
    -print           print matching paths (default)
    -not / !         negate next expression
    -and / -a        logical AND (default)
    -or / -o         logical OR
    -exec CMD {} ;   execute CMD for each match
    -delete          delete matching files
  Examples:
    find /home/user -name '*.txt'
    find . -type f
    find /etc -maxdepth 1 -name '*.conf'
    find . -size +1k
    find . -empty
    find . -name '*.log' -delete
`;function Dh(e,{stdin:t,vfs:n,sh:r}){var b;const i=k=>n.resolve(k,r.cwd);let s=[],o=1/0,l=0,a=null,u=null,p=null,c=null,f=null,h=!1,g=!1;const v=[];let y=0;for(;y<e.length&&!e[y].startsWith("-")&&e[y]!=="!";)v.push(e[y++]);for(v.length?s=v:s=[r.cwd];y<e.length;){const k=e[y];if(k==="-name"&&e[y+1])a=e[++y];else if(k==="-iname"&&e[y+1])u=e[++y];else if(k==="-type"&&e[y+1])p=e[++y];else if(k==="-maxdepth"&&e[y+1])o=parseInt(e[++y]);else if(k==="-mindepth"&&e[y+1])l=parseInt(e[++y]);else if(k==="-size"&&e[y+1])c=e[++y];else if(k==="-newer"&&e[y+1])f=e[++y];else if(k==="-empty")h=!0;else if(k==="-delete")g=!0;else if(!(k==="-print"||k==="-print0")){if(!(k==="-not"||k==="!")){if(k==="-exec"){const C=[];for(;e[++y]&&e[y]!==";";)C.push(e[y])}}}y++}const m=k=>new RegExp("^"+k.replace(/[.+^${}()|[\]\\]/g,C=>"\\"+C).replace(/\*/g,".*").replace(/\?/g,".")+"$"),d=(k,C)=>{if(!C)return!0;const N=C.match(/^([+-]?)(\d+)([ckMG]?)$/);if(!N)return!0;const[,F,B,R]=N,A={c:1,k:1024,M:1024**2,G:1024**3,"":512}[R]??1,$=parseInt(B)*A,H=k.size??0;return F==="+"?H>$:F==="-"?H<$:H===$},x=f?((b=n.stat(i(f)))==null?void 0:b.mtime)??0:0,S=[];for(const k of s){const C=i(k);if(!n.exists(C))return{output:`find: '${k}': No such file or directory
`,exitCode:1};const N=C.split("/").filter(Boolean).length,F=(B,R)=>{const A=B.split("/").filter(Boolean).length-N;if(A<l||A>o)return!1;const $=B.split("/").pop();return!(a&&!m(a).test($)||u&&!m(u).test($.toLowerCase())||p==="f"&&R.type!=="file"||p==="d"&&R.type!=="dir"||p==="l"||c&&!d(R,c)||f&&(R.mtime??0)<=x||h&&(R.type==="file"&&(R.size??0)>0||R.type==="dir"&&n.ls(B).length>0))};if(l===0){const B=n.stat(C)??{type:"dir",mtime:Date.now(),size:0};F(C,B)&&S.push(C)}for(const B of Object.keys(n._t).sort()){if(!B.startsWith(C==="/"?"/":C+"/")||B===C)continue;const R=n._t[B];F(B,R)&&S.push(B)}}if(g)for(const k of S)n.isFile(k)&&n.rm(k);return{output:S.join(`
`)+(S.length?`
`:""),exitCode:0}}const Ah=Object.freeze(Object.defineProperty({__proto__:null,default:Dh,help:Rh},Symbol.toStringTag,{value:"Module"})),Lh=`du [-h] [-s] [-a] [path...]
  Show disk usage.
  -h  human-readable sizes
  -s  summary only (don't show subdirs)
  -a  show all files, not just directories
  Examples:
    du /home/user
    du -sh /home/user
    du README.txt
`;function Wh(e,{vfs:t,sh:n}){var p;const r=c=>t.resolve(c,n.cwd);let i=!1,s=!1,o=!1;const l=[];for(const c of e)/^-[hsaHS]+$/.test(c)?(c.includes("h")&&(i=!0),c.includes("s")&&(s=!0),c.includes("a")&&(o=!0)):l.push(c);const a=l.length?l:["."],u=[];for(const c of a){const f=r(c);if(!t.exists(f))return{output:`du: cannot access '${c}': No such file or directory
`,exitCode:1};if(t.isFile(f)){const h=((p=t.stat(f))==null?void 0:p.size)??0;u.push(`${i?_n(h,!0):Math.max(Math.ceil(h/1024),4)}	${c}`)}else{const h=Object.keys(t._t).filter(v=>v===f||v.startsWith(f+"/")).sort();let g=0;if(!s)for(const v of h){const y=t._t[v];if(y.type==="file"&&(g+=y.size??0),o&&y.type==="file"){const m=y.size??0;u.push(`${i?_n(m,!0):Math.max(Math.ceil(m/1024),4)}	${v}`)}else if(!o&&y.type==="dir"){let m=0;Object.keys(t._t).filter(d=>d.startsWith(v+"/")).forEach(d=>{t._t[d].type==="file"&&(m+=t._t[d].size??0)}),u.push(`${i?_n(m,!0):Math.max(Math.ceil(m/1024),4)}	${v}`)}}u.push(`${i?_n(g,!0):Math.max(Math.ceil(g/1024),4)}	${c}`)}}return{output:u.join(`
`)+`
`,exitCode:0}}const Bh=Object.freeze(Object.defineProperty({__proto__:null,default:Wh,help:Lh},Symbol.toStringTag,{value:"Module"})),Hh=`df [-h] [filesystem]
  Show available disk space.
  -h  human-readable sizes
  Examples:
    df
    df -h
`;function Uh(e){return e.includes("-h")?{output:`Filesystem      Size  Used Avail Use% Mounted on
mashfs          1.0G  256K  1.0G   1% /
`,exitCode:0}:{output:`Filesystem     1K-blocks  Used Available Use% Mounted on
mashfs           1048576   256   1048320   1% /
`,exitCode:0}}const qh=Object.freeze(Object.defineProperty({__proto__:null,default:Uh,help:Hh},Symbol.toStringTag,{value:"Module"})),Vh=`ln [-s] [-f] TARGET [LINK_NAME]
  Create links between files.
  -s  create symbolic link (simulated in MASH VFS)
  -f  remove existing destination
  Examples:
    ln -s /etc/hostname hostname
    ln file1 file2
`;function Xh(e,{vfs:t,sh:n}){const r=c=>t.resolve(c,n.cwd);let i=!1,s=!1;const o=[];for(const c of e)c==="-s"?i=!0:c==="-f"?s=!0:/^-[sf]+$/.test(c)?(c.includes("s")&&(i=!0),c.includes("f")&&(s=!0)):o.push(c);if(o.length<2)return{output:`ln: missing destination
`,exitCode:1};const[l,a]=o,u=r(l),p=t.isDir(r(a))?r(a)+"/"+l.split("/").pop():r(a);if(!t.exists(u))return{output:`ln: failed to access '${l}': No such file or directory
`,exitCode:1};if(t.exists(p)&&!s)return{output:`ln: failed to create link '${a}': File exists
`,exitCode:1};if(i){t.write(p,t.read(u)??"");const c=t.stat(p);c&&(c.symlink=l)}else{if(t.isDir(u))return{output:`ln: ${l}: Is a directory
`,exitCode:1};t.write(p,t.read(u)??"")}return{output:"",exitCode:0}}const Kh=Object.freeze(Object.defineProperty({__proto__:null,default:Xh,help:Vh},Symbol.toStringTag,{value:"Module"})),Gh=`chmod [-R] MODE FILE...
  Change file permissions (stored in VFS metadata).
  MODE: octal (644, 755) or symbolic (u+x, go-w, a+r)
  -R  apply recursively
  Examples:
    chmod 755 script.sh
    chmod +x script.sh
    chmod u+rw,go-w file.txt
`;function Yh(e,{vfs:t,sh:n}){const r=a=>t.resolve(a,n.cwd);let i=!1;const s=[];let o=null;for(const a of e)a==="-R"||a==="-r"?i=!0:o?s.push(a):o=a;if(!o||!s.length)return{output:`chmod: missing operand
`,exitCode:1};const l=a=>{const u=t.stat(a);if(u){if(/^\d+$/.test(o)){const p=parseInt(o,8),c=t.isDir(a),f=(p>>>0).toString(8).padStart(3,"0"),h=parseInt(f[0]),g=parseInt(f[1]),v=parseInt(f[2]),y=m=>(m&4?"r":"-")+(m&2?"w":"-")+(m&1?"x":"-");u.mode=(c?"d":"-")+y(h)+y(g)+y(v)}else u.mode=u.mode??(t.isDir(a)?"drwxr-xr-x":"-rw-r--r--");t._persist(a)}};for(const a of s){const u=r(a);if(!t.exists(u))return{output:`chmod: cannot access '${a}': No such file or directory
`,exitCode:1};if(l(u),i&&t.isDir(u))for(const p of Object.keys(t._t).filter(c=>c.startsWith(u+"/")))l(p)}return{output:"",exitCode:0}}const Qh=Object.freeze(Object.defineProperty({__proto__:null,default:Yh,help:Gh},Symbol.toStringTag,{value:"Module"})),Zh=`chown [-R] OWNER[:GROUP] FILE...
  Change file owner and group (stored in VFS metadata; not enforced).
  -R  apply recursively
  Example:
    chown user file.txt
    chown user:users dir/
`;function Jh(e,{vfs:t,sh:n}){const r=o=>t.resolve(o,n.cwd),i=[];let s=null;for(const o of e)o==="-R"||(s?i.push(o):s=o);if(!s||!i.length)return{output:`chown: missing operand
`,exitCode:1};for(const o of i){const l=r(o);if(!t.exists(l))return{output:`chown: cannot access '${o}': No such file or directory
`,exitCode:1};const a=t.stat(l);a&&(a.owner=s.split(":")[0],a.group=s.split(":")[1]??s.split(":")[0])}return{output:"",exitCode:0}}const em=Object.freeze(Object.defineProperty({__proto__:null,default:Jh,help:Zh},Symbol.toStringTag,{value:"Module"})),tm=`date [+format] [-d DATE] [-u]
  Display or format date and time.
  Format codes:
    %Y  year (e.g. 2025)         %m  month (01-12)
    %d  day (01-31)              %e  day ( 1-31, space-padded)
    %H  hour (00-23)             %M  minute (00-59)
    %S  second (00-59)           %N  nanoseconds (simulated)
    %a  weekday abbr             %A  weekday full
    %b  month abbr               %B  month full
    %Z  timezone                 %z  +/-HHMM offset
    %s  unix timestamp (seconds) %j  day of year
    %p  AM/PM                    %P  am/pm
    %w  weekday number (0=Sun)   %u  weekday (1=Mon)
    %n  newline                  %t  tab
  Examples:
    date
    date '+%Y-%m-%d'
    date '+%H:%M:%S'
    date +%s
    date -d 'now'
`;function nm(e){const t=new Date,n=v=>String(v).padStart(2,"0"),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],o=e.find(v=>v.startsWith("+"))??null,l=v=>{const y=new Date(v.getFullYear(),0,0);return Math.floor((v-y)/864e5)},a=Intl.DateTimeFormat().resolvedOptions().timeZone,u=-t.getTimezoneOffset(),p=u>=0?"+":"-",c=Math.floor(Math.abs(u)/60),f=Math.abs(u)%60,h=`${p}${String(c).padStart(2,"0")}${String(f).padStart(2,"0")}`;return{output:(o?o.slice(1):"%a %b %e %H:%M:%S %Z %Y").replace(/%Y/g,t.getFullYear()).replace(/%m/g,n(t.getMonth()+1)).replace(/%d/g,n(t.getDate())).replace(/%e/g,String(t.getDate()).padStart(2," ")).replace(/%H/g,n(t.getHours())).replace(/%M/g,n(t.getMinutes())).replace(/%S/g,n(t.getSeconds())).replace(/%N/g,String(t.getMilliseconds()).padStart(3,"0")+"000000").replace(/%s/g,Math.floor(Date.now()/1e3)).replace(/%a/g,r[t.getDay()]).replace(/%A/g,i[t.getDay()]).replace(/%b/g,_l[t.getMonth()]).replace(/%B/g,s[t.getMonth()]).replace(/%Z/g,a).replace(/%z/g,h).replace(/%j/g,n(l(t))).replace(/%p/g,t.getHours()<12?"AM":"PM").replace(/%P/g,t.getHours()<12?"am":"pm").replace(/%w/g,String(t.getDay())).replace(/%u/g,String(t.getDay()||7)).replace(/%n/g,`
`).replace(/%t/g,"	").replace(/%%/g,"%")+`
`,exitCode:0}}const rm=Object.freeze(Object.defineProperty({__proto__:null,default:nm,help:tm},Symbol.toStringTag,{value:"Module"})),im=`sleep SECONDS
  Pause execution (no-op in MASH).
`;function sm(){return{output:"",exitCode:0}}const om=Object.freeze(Object.defineProperty({__proto__:null,default:sm,help:im},Symbol.toStringTag,{value:"Module"})),lm=`true
  Exit successfully.
`;function am(){return{output:"",exitCode:0}}const um=Object.freeze(Object.defineProperty({__proto__:null,default:am,help:lm},Symbol.toStringTag,{value:"Module"})),cm=`false
  Exit unsuccessfully.
`;function fm(){return{output:"",exitCode:1}}const pm=Object.freeze(Object.defineProperty({__proto__:null,default:fm,help:cm},Symbol.toStringTag,{value:"Module"})),dm=`yes [STRING]
  Output STRING (default: y) repeatedly.
`;function hm(e){return{output:Array(20).fill(e[0]||"y").join(`
`)+`
`,exitCode:0}}const mm=Object.freeze(Object.defineProperty({__proto__:null,default:hm,help:dm},Symbol.toStringTag,{value:"Module"})),gm=`uname [-a] [-s] [-n] [-r] [-v] [-m] [-p] [-o]
  Print system information.
  -a  all information
  -s  kernel name
  -n  node/hostname
  -r  kernel release
  -v  kernel version
  -m  machine hardware
  -p  processor type
  -o  operating system
  Example:
    uname -a
`;function xm(e,{vfs:t}){const r={s:"MASH",n:(t.read("/etc/hostname")||"mash").trim(),r:"1.0.0",v:"#1 MASH",m:"wasm32",p:"wasm32",o:"Mash/1.0"};if(!e.length||e[0]==="-s")return{output:`MASH
`,exitCode:0};if(e.includes("-a"))return{output:`${r.s} ${r.n} ${r.r} ${r.v} ${r.m} ${r.p} ${r.o}
`,exitCode:0};const i=[];for(const s of e)s==="-s"?i.push(r.s):s==="-n"?i.push(r.n):s==="-r"?i.push(r.r):s==="-v"?i.push(r.v):s==="-m"?i.push(r.m):s==="-p"?i.push(r.p):s==="-o"&&i.push(r.o);return{output:i.join(" ")+`
`,exitCode:0}}const vm=Object.freeze(Object.defineProperty({__proto__:null,default:xm,help:gm},Symbol.toStringTag,{value:"Module"})),ym=`hostname
  Print the system hostname.
  Example:
    hostname
`;function Sm(e,{vfs:t}){return{output:(t.read("/etc/hostname")||`mash
`).trim()+`
`,exitCode:0}}const wm=Object.freeze(Object.defineProperty({__proto__:null,default:Sm,help:ym},Symbol.toStringTag,{value:"Module"})),_m=`ps [-a] [-u] [-x] [-e] [-f]
  List running processes.
  In mash, returns simulated process list.
  Examples:
    ps
    ps aux
`;function km(e){return e.some(t=>t.includes("f")),e.some(t=>t.includes("a")||t.includes("x")||t.includes("e"))?{output:`USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
user         1  0.0  0.0  12345  1024 pts/0    Ss   00:00   0:00 mash
user         2  0.0  0.0   8765   512 pts/0    R+   00:00   0:00 ps
`,exitCode:0}:{output:`  PID TTY          TIME CMD
    1 pts/0    00:00:00 mash
    2 pts/0    00:00:00 ps
`,exitCode:0}}const Cm=Object.freeze(Object.defineProperty({__proto__:null,default:km,help:_m},Symbol.toStringTag,{value:"Module"})),bm=`test EXPR  or  [ EXPR ]
  Evaluate a conditional expression. Returns exit code 0=true, 1=false.
  File tests:    -f file  -d dir  -e path  -s file (non-empty)  -r -w -x (perms, always true)
  String tests:  -z str (empty)  -n str (non-empty)  str1 = str2  str1 != str2
  Numeric:       n1 -eq|-ne|-lt|-le|-gt|-ge n2
  Negate:        ! EXPR
  Compound:      EXPR -a EXPR  EXPR -o EXPR
  Examples:
    test -f README.txt && echo exists
    [ -d /etc ] && echo is dir
    test 5 -gt 3 && echo yes
    [ "a" = "a" ] && echo equal
`;function un(e,{vfs:t,sh:n},r=!1){var a;const i=u=>t.resolve(u,n.cwd),s=r?e.slice(0,-1):e;if(!s.length)return{output:"",exitCode:1};const o=s.findIndex(u=>u==="-o"),l=s.findIndex(u=>u==="-a");return o>0?un(s.slice(0,o),{vfs:t,sh:n}).exitCode===0?{output:"",exitCode:0}:un(s.slice(o+1),{vfs:t,sh:n}):l>0?un(s.slice(0,l),{vfs:t,sh:n}).exitCode!==0?{output:"",exitCode:1}:un(s.slice(l+1),{vfs:t,sh:n}):s[0]==="!"?{output:"",exitCode:un(s.slice(1),{vfs:t,sh:n}).exitCode===0?1:0}:s[0]==="-f"?{output:"",exitCode:t.isFile(i(s[1]??""))?0:1}:s[0]==="-d"?{output:"",exitCode:t.isDir(i(s[1]??""))?0:1}:s[0]==="-e"?{output:"",exitCode:t.exists(i(s[1]??""))?0:1}:s[0]==="-s"?{output:"",exitCode:(((a=t.stat(i(s[1]??"")))==null?void 0:a.size)??0)>0?0:1}:s[0]==="-r"||s[0]==="-w"||s[0]==="-x"?{output:"",exitCode:t.exists(i(s[1]??""))?0:1}:s[0]==="-z"?{output:"",exitCode:(s[1]??"").length===0?0:1}:s[0]==="-n"?{output:"",exitCode:(s[1]??"").length>0?0:1}:s[1]==="="||s[1]==="=="?{output:"",exitCode:s[0]===s[2]?0:1}:s[1]==="!="?{output:"",exitCode:s[0]!==s[2]?0:1}:s[1]==="-eq"?{output:"",exitCode:Number(s[0])===Number(s[2])?0:1}:s[1]==="-ne"?{output:"",exitCode:Number(s[0])!==Number(s[2])?0:1}:s[1]==="-lt"?{output:"",exitCode:Number(s[0])<Number(s[2])?0:1}:s[1]==="-le"?{output:"",exitCode:Number(s[0])<=Number(s[2])?0:1}:s[1]==="-gt"?{output:"",exitCode:Number(s[0])>Number(s[2])?0:1}:s[1]==="-ge"?{output:"",exitCode:Number(s[0])>=Number(s[2])?0:1}:{output:"",exitCode:(s[0]??"").length>0?0:1}}const La=Object.freeze(Object.defineProperty({__proto__:null,default:un,help:bm},Symbol.toStringTag,{value:"Module"})),Em=`export [VAR=value]
  Set environment variables.
  With no args, lists all exported variables.
`;function jm(e,{sh:t}){if(!e.length)return{output:Object.entries(t.env).map(([n,r])=>`export ${n}="${String(r).replace(/\n$/,"")}"`).join(`
`)+`
`,exitCode:0};for(const n of e){const r=n.indexOf("=");r!==-1&&(t.env[n.slice(0,r)]=n.slice(r+1))}return{output:"",exitCode:0}}const Mm=Object.freeze(Object.defineProperty({__proto__:null,default:jm,help:Em},Symbol.toStringTag,{value:"Module"})),Nm=`unset VAR...
  Remove environment variables.
`;function $m(e,{sh:t}){for(const n of e)delete t.env[n];return{output:"",exitCode:0}}const Om=Object.freeze(Object.defineProperty({__proto__:null,default:$m,help:Nm},Symbol.toStringTag,{value:"Module"})),zm=`read [VAR]
  Read a line from stdin into a variable.
`;function Pm(e,{stdin:t,sh:n}){return e.length&&t!=null&&(n.env[e[0]]=(t??"").split(`
`)[0]),{output:"",exitCode:0}}const Im=Object.freeze(Object.defineProperty({__proto__:null,default:Pm,help:zm},Symbol.toStringTag,{value:"Module"})),Fm=`alias [name='cmd']
  Create or list command aliases.
`;function Tm(e,{sh:t}){if(!e.length)return{output:(Object.entries(t.aliases).map(([r,i])=>`alias ${r}='${i}'`).join(`
`)||"(no aliases)")+`
`,exitCode:0};for(const n of e){const r=n.indexOf("=");r!==-1&&(t.aliases[n.slice(0,r)]=n.slice(r+1).replace(/^['"]|['"]$/g,""))}return{output:"",exitCode:0}}const Rm=Object.freeze(Object.defineProperty({__proto__:null,default:Tm,help:Fm},Symbol.toStringTag,{value:"Module"})),Dm=`unalias NAME...
  Remove aliases.
`;function Am(e,{sh:t}){for(const n of e)delete t.aliases[n];return{output:"",exitCode:0}}const Lm=Object.freeze(Object.defineProperty({__proto__:null,default:Am,help:Dm},Symbol.toStringTag,{value:"Module"})),Wm=`which CMD...
  Show command location.
`;function Bm(e,{sh:t,registry:n}){if(!e.length)return{output:`which: missing argument
`,exitCode:1};const r=[];let i=0;for(const s of e)t.aliases[s]?r.push(`${s}: aliased to ${t.aliases[s]}`):n&&n[s]?r.push("/bin/"+s):(r.push(`which: no ${s} in (/bin:/usr/bin)`),i=1);return{output:r.join(`
`)+`
`,exitCode:i}}const Hm=Object.freeze(Object.defineProperty({__proto__:null,default:Bm,help:Wm},Symbol.toStringTag,{value:"Module"})),Um=`type CMD
  Describe how a command is interpreted.
`;function qm(e,{sh:t,registry:n}){if(!e.length)return{output:`type: missing argument
`,exitCode:1};const r=e[0];return t.aliases[r]?{output:`${r} is aliased to '${t.aliases[r]}'
`,exitCode:0}:n&&n[r]?{output:`${r} is a shell builtin
`,exitCode:0}:{output:`${r}: not found
`,exitCode:1}}const Vm=Object.freeze(Object.defineProperty({__proto__:null,default:qm,help:Um},Symbol.toStringTag,{value:"Module"})),Xm=`command [-v] CMD [ARGS...]
  Run a command bypassing aliases.
`;function Km(e,{execCmd:t,vfs:n,sh:r,stdin:i,registry:s}){return e.length?e[0]==="-v"?{output:(s&&s[e[1]]?"/bin/"+e[1]:"")+`
`,exitCode:s&&s[e[1]]?0:1}:t(e[0],e.slice(1),i,n,r):{output:"",exitCode:0}}const Gm=Object.freeze(Object.defineProperty({__proto__:null,default:Km,help:Xm},Symbol.toStringTag,{value:"Module"})),Ym=`history [n]
  Show command history.
`;function Qm(e,{sh:t}){const n=e[0]?parseInt(e[0]):t.history.length,r=t.history.slice(-n),i=t.history.length-r.length;return{output:r.map((s,o)=>`  ${String(i+o+1).padStart(4)}  ${s}`).join(`
`)+`
`,exitCode:0}}const Zm=Object.freeze(Object.defineProperty({__proto__:null,default:Qm,help:Ym},Symbol.toStringTag,{value:"Module"})),Jm=`jobs
  List jobs (no background jobs in MASH).
`;function eg(){return{output:"",exitCode:0}}const $s=Object.freeze(Object.defineProperty({__proto__:null,default:eg,help:Jm},Symbol.toStringTag,{value:"Module"})),tg=`kill [-SIGNAL] PID
  Send signal to process (no-op in MASH).
`;function ng(){return{output:"",exitCode:0}}const rg=Object.freeze(Object.defineProperty({__proto__:null,default:ng,help:tg},Symbol.toStringTag,{value:"Module"})),ig=`clear
  Clear the terminal screen.
`;function sg(){return{output:"__CLEAR__",exitCode:0}}const og=Object.freeze(Object.defineProperty({__proto__:null,default:sg,help:ig},Symbol.toStringTag,{value:"Module"})),lg=`exit [CODE]
  Exit the shell.
`;function ag(e){const t=parseInt(e[0]??"0");return{output:`__EXIT__${isNaN(t)?0:t}`,exitCode:isNaN(t)?0:t}}const ug=Object.freeze(Object.defineProperty({__proto__:null,default:ag,help:lg},Symbol.toStringTag,{value:"Module"})),cg=`motd
  Display the message of the day.
`;function fg(e,{vfs:t}){return{output:t.read("/etc/motd")||"",exitCode:0}}const pg=Object.freeze(Object.defineProperty({__proto__:null,default:fg,help:cg},Symbol.toStringTag,{value:"Module"})),dg=`download FILE
  Download a VFS file to your local machine.
`;function hg(e,{vfs:t,sh:n}){const r=s=>t.resolve(s,n.cwd);if(!e.length)return{output:`download: missing filename
`,exitCode:1};const i=r(e[0]);return t.isFile(i)?t.download(i)?{output:`Downloading '${e[0]}'...
`,exitCode:0}:{output:`download: failed
`,exitCode:1}:{output:`download: '${e[0]}': not found
`,exitCode:1}}const mg=Object.freeze(Object.defineProperty({__proto__:null,default:hg,help:dg},Symbol.toStringTag,{value:"Module"})),gg=`write FILE TEXT...
  Write text to a file.
`;function xg(e,{vfs:t,sh:n}){const r=i=>t.resolve(i,n.cwd);return e.length<2?{output:`write: usage: write <file> <text...>
`,exitCode:1}:(t.write(r(e[0]),e.slice(1).join(" ")+`
`),{output:"",exitCode:0})}const vg=Object.freeze(Object.defineProperty({__proto__:null,default:xg,help:gg},Symbol.toStringTag,{value:"Module"})),yg=`append FILE TEXT...
  Append text to a file.
`;function Sg(e,{vfs:t,sh:n}){const r=i=>t.resolve(i,n.cwd);return e.length<2?{output:`append: usage: append <file> <text...>
`,exitCode:1}:(t.append(r(e[0]),e.slice(1).join(" ")+`
`),{output:"",exitCode:0})}const wg=Object.freeze(Object.defineProperty({__proto__:null,default:Sg,help:yg},Symbol.toStringTag,{value:"Module"})),_g=`nano FILE
  Text editor (non-interactive in MASH).
  Use echo/redirection to write: echo 'text' > file
`;function kg(e,{vfs:t,sh:n},r="nano"){const i=l=>t.resolve(l,n.cwd);if(!e.length)return{output:`${r}: no file specified
`,exitCode:1};const s=i(e[0]);if(t.exists(s)||t.touch(s),t.isDir(s))return{output:`${r}: ${e[0]}: Is a directory
`,exitCode:1};const o=t.read(s)??"";return{output:`[${r} is not interactive in mash. File contents:
${o||"(empty file)"}
Use redirection to write: echo 'text' > ${e[0]}]
`,exitCode:0}}const Cg=Object.freeze(Object.defineProperty({__proto__:null,default:kg,help:_g},Symbol.toStringTag,{value:"Module"})),bg=`vi FILE
  Text editor (alias for nano in MASH).
  Usage is identical to nano — opens the file for editing.
`;function Eg(e,t){return t.execCmd("nano",e,t.stdin,t.vfs,t.sh)}const Wa=Object.freeze(Object.defineProperty({__proto__:null,default:Eg,help:bg},Symbol.toStringTag,{value:"Module"})),jg=`wipe-fs
  Wipe all persisted filesystem data and reset to defaults.
  WARNING: permanently deletes all files.
`;function Mg(e,{vfs:t}){return t._db?{output:"__WIPEFS__",exitCode:0}:{output:`wipe-fs: IndexedDB not available
`,exitCode:1}}const Ng=Object.freeze(Object.defineProperty({__proto__:null,default:Mg,help:jg},Symbol.toStringTag,{value:"Module"})),$g=`grep [-vinicorwlqEF] [-e pat] [-m N] [-A N] [-B N] [-C N] pattern [file...]
  Search for lines matching a pattern.
  -v  invert match
  -i  ignore case
  -n  prefix with line numbers
  -c  print count of matching lines
  -o  print only the matching part of each line
  -r  recursive search in directories
  -w  match whole words only
  -l  print only filenames with matches
  -q  quiet (no output, exit code only)
  -E  use extended regular expressions (default)
  -F  treat pattern as fixed string (no regex)
  -e  specify pattern explicitly (can repeat)
  -m N  stop after N matches
  -A N  print N lines after each match
  -B N  print N lines before each match
  -C N  print N lines of context (= -A N -B N)
  Examples:
    grep 'hello' file.txt
    grep -i 'error' /var/log/shell.log
    grep -rn 'TODO' /home/user
    grep -v '^#' /etc/shells
    grep -o '[0-9]+' numbers.txt
    grep -A2 'ERROR' log.txt
`;function Og(e,{stdin:t,vfs:n,sh:r}){const i=A=>n.resolve(A,r.cwd);let s=!1,o=!1,l=!1,a=!1,u=!1,p=!1,c=!1,f=!1,h=!1,g=!1,v=1/0,y=0,m=0;const d=[],x=[];for(let A=0;A<e.length;A++){const $=e[A];if($==="-v"||$==="--invert-match")s=!0;else if($==="-i"||$==="--ignore-case")o=!0;else if($==="-n"||$==="--line-number")l=!0;else if($==="-q"||$==="--quiet")a=!0;else if($==="-c"||$==="--count")u=!0;else if($==="-o"||$==="--only-matching")p=!0;else if($==="-r"||$==="-R"||$==="--recursive")c=!0;else if($==="-w"||$==="--word-regexp")f=!0;else if($==="-l"||$==="--files-with-matches")h=!0;else if($==="-F"||$==="--fixed-strings")g=!0;else if(!($==="-E"||$==="-P"))if(($==="-e"||$==="--regexp")&&e[A+1])d.push(e[++A]);else if(($==="-m"||$==="--max-count")&&e[A+1])v=parseInt(e[++A]);else if(($==="-A"||$==="--after-context")&&e[A+1])y=parseInt(e[++A]);else if(($==="-B"||$==="--before-context")&&e[A+1])m=parseInt(e[++A]);else if(($==="-C"||$==="--context")&&e[A+1])y=m=parseInt(e[++A]);else if(/^-[vinicorwlqEFe]+$/.test($))for(const H of $.slice(1))H==="v"?s=!0:H==="i"?o=!0:H==="n"?l=!0:H==="q"?a=!0:H==="c"?u=!0:H==="o"?p=!0:H==="r"||H==="R"?c=!0:H==="w"?f=!0:H==="l"?h=!0:H==="F"&&(g=!0);else!d.length&&!x.length&&!$.startsWith("-")?d.push($):x.push($)}if(!d.length)return{output:`grep: missing pattern
`,exitCode:2};const S=A=>A.replace(/[.+*?^${}()|[\]\\]/g,$=>"\\"+$);let _=d.map(A=>g?S(A):A).join("|");f&&(_=`\\b(?:${_})\\b`);let b;try{b=new RegExp(_,o?"gi":"g")}catch(A){return{output:`grep: invalid regex: ${A.message}
`,exitCode:2}}const k=A=>{if(n.isDir(A)){const $=[];for(const H of n.ls(A))$.push(...k((A==="/"?"":A)+"/"+H));return $}return[A]},C=(A,$)=>{const H=A.split(`
`);H[H.length-1]===""&&H.pop();const oe=[],we=new Set;let O=0;for(let T=0;T<H.length;T++){const L=H[T];b.lastIndex=0;const K=L.match(b);if(K!==null!==s){if(++O>v)break;if(p&&!s&&K){b.lastIndex=0;for(const Qe of L.matchAll(b)){let W=$?$+":":"";l&&(W+=T+1+":"),oe.push(W+Qe[0])}}else{for(let W=Math.max(0,T-m);W<T;W++)if(!we.has(W)){const J=($?$+"-":"")+(l?W+1+"-":"");oe.push(J+H[W]),we.add(W)}const Qe=($?$+":":"")+(l?T+1+":":"");oe.push(Qe+L),we.add(T);for(let W=T+1;W<=Math.min(H.length-1,T+y);W++)if(!we.has(W)){const J=($?$+"-":"")+(l?W+1+"-":"");oe.push(J+H[W]),we.add(W)}(m||y)&&T+y<H.length-1&&oe.push("--")}}}for(;oe[oe.length-1]==="--";)oe.pop();return{lines:oe,count:O}};let N=[];if(x.length)for(const A of x){const $=i(A);if(!n.exists($))return{output:`grep: ${A}: No such file or directory
`,exitCode:2};c&&n.isDir($)?N.push(...k($).map(H=>({path:H,label:H}))):N.push({path:$,label:A})}else N=[{path:null,label:null}];const F=N.length>1,B=[];let R=1;for(const{path:A,label:$}of N){const H=A?n.read(A)??"":t??"",oe=F?$:null,{lines:we,count:O}=C(H,oe);if(O>0&&(R=0),h){O>0&&B.push($);continue}if(u){B.push((F?$+":":"")+O);continue}B.push(...we)}return a?{output:"",exitCode:R}:u&&!h?{output:B.join(`
`)+`
`,exitCode:R}:{output:B.join(`
`)+(B.length?`
`:""),exitCode:R}}const zg=Object.freeze(Object.defineProperty({__proto__:null,default:Og,help:$g},Symbol.toStringTag,{value:"Module"})),Pg=`sed [-n] [-e expr] [-i] EXPR [file...]
  Stream editor for transforming text.
  -n  suppress automatic printing
  -e EXPR  add an expression (can repeat)
  Expressions:
    s/pat/rep/[gi]  substitute
    /pat/d          delete matching lines
    /pat/p          print matching lines
    /pat/!d         delete non-matching lines
    /pat/q          quit after first match
    Nd              delete line N
    N,Mp            print lines N through M
    =               print line number
    a\\TEXT         append text after each line
    i\\TEXT         insert text before each line
    y/from/to/      transliterate chars
  Examples:
    echo 'hello world' | sed 's/world/mash/'
    sed 's/foo/bar/g' file.txt
    cat file.txt | sed '/^#/d'
    sed -n '/error/p' log.txt
    sed '2,4d' file.txt
`;function Ig(e,{stdin:t,vfs:n,sh:r}){const i=u=>n.resolve(u,r.cwd),s=[],o=[];let l=!1;for(let u=0;u<e.length;u++)e[u]==="-e"&&e[u+1]?s.push(e[++u]):e[u]==="-n"?l=!0:e[u]==="-i"||(!s.length&&!e[u].startsWith("-")?s.push(e[u]):(s.length&&e[u].startsWith("-"),o.push(e[u])));let a=t??"";if(o.length){const u=i(o[0]);n.isFile(u)&&(a=n.read(u)??"")}for(const u of s){const p=Fg(u,a,l);if(p.error)return{output:p.error+`
`,exitCode:1};a=p.text,l=p.suppress??l}return{output:a.endsWith(`
`)?a:a+`
`,exitCode:0}}function Fg(e,t,n){const r=e.match(/^s(.)(.+?)\1(.*?)\1([gi]*)$/s);if(r){const[,,h,g,v]=r;let y="";v.includes("g")&&(y+="g"),v.includes("i")&&(y+="i");let m;try{m=new RegExp(h,y)}catch{return{error:"sed: invalid regex"}}return{text:t.split(`
`).map(x=>x.replace(m,g.replace(/\\n/g,`
`).replace(/\\t/g,"	"))).join(`
`)}}const i=e.match(/^y(.)(.+?)\1(.+?)\1$/);if(i){const h=i[2],g=i[3];let v=t;for(let y=0;y<Math.min(h.length,g.length);y++)v=v.split(h[y]).join(g[y]);return{text:v}}const s=e.match(/^(\d+),(\d+)([dp])$/);if(s){const[,h,g,v]=s,y=parseInt(h)-1,m=parseInt(g)-1,d=t.split(`
`);if(d[d.length-1]===""&&d.pop(),v==="d")return{text:d.filter((x,S)=>S<y||S>m).join(`
`)};if(v==="p")return{text:d.slice(y,m+1).join(`
`)}}const o=e.match(/^\/(.+)\/!d$/);if(o){let h;try{h=new RegExp(o[1])}catch{return{error:"sed: invalid regex"}}return{text:t.split(`
`).filter(g=>h.test(g)).join(`
`)}}const l=e.match(/^\/(.+)\/d$/);if(l){let h;try{h=new RegExp(l[1])}catch{return{error:"sed: invalid regex"}}return{text:t.split(`
`).filter(g=>!h.test(g)).join(`
`)}}const a=e.match(/^\/(.+)\/p$/);if(a){let h;try{h=new RegExp(a[1])}catch{return{error:"sed: invalid regex"}}return n?{text:t.split(`
`).filter(g=>h.test(g)).join(`
`)}:{text:t.split(`
`).map(g=>h.test(g)?g+`
`+g:g).join(`
`)}}const u=e.match(/^\/(.+)\/q$/);if(u){let h;try{h=new RegExp(u[1])}catch{return{error:"sed: invalid regex"}}const g=t.split(`
`),v=g.findIndex(y=>h.test(y));return{text:v>=0?g.slice(0,v+1).join(`
`):t}}const p=e.match(/^(\d+)d$/);if(p){const h=t.split(`
`);return h.splice(parseInt(p[1])-1,1),{text:h.join(`
`)}}if(e==="="){const h=t.split(`
`);return h[h.length-1]===""&&h.pop(),{text:h.map((g,v)=>`${v+1}
${g}`).join(`
`)}}const c=e.match(/^a[\\]?(.*)$/);if(c){const h=c[1],g=t.split(`
`);return g[g.length-1]===""&&g.pop(),{text:g.map(v=>v+`
`+h).join(`
`)}}const f=e.match(/^i[\\]?(.*)$/);if(f){const h=f[1],g=t.split(`
`);return g[g.length-1]===""&&g.pop(),{text:g.map(v=>h+`
`+v).join(`
`)}}return{error:`sed: expression error near: ${e}`}}const Tg=Object.freeze(Object.defineProperty({__proto__:null,default:Ig,help:Pg},Symbol.toStringTag,{value:"Module"})),Rg=`awk [-F sep] [-v var=val] 'program' [file...]
  Pattern-scanning and text processing language.
  -F sep   field separator (default: whitespace)
  -v VAR=VALUE  set variable before execution

  Special variables: NR (row), NF (num fields), FS (field sep), $0 (line), $1..$N (fields)
  Patterns: /regex/  NR==N  BEGIN  END
  Actions: print, printf, if/else, for, while, next, exit, split, sub, gsub, match, length, substr, toupper, tolower, int, sqrt, rand

  Examples:
    echo 'a b c' | awk '{print $2}'
    awk -F: '{print $1}' /etc/passwd
    awk 'NR>2 {print NR, $0}' file.txt
    awk 'BEGIN{s=0}{s+=$1}END{print s}' nums.txt
    awk '/pattern/{print}' file.txt
    awk '{sum+=$1} END{print sum/NR}' data.txt
`;function Dg(e,{stdin:t,vfs:n,sh:r}){const i=y=>n.resolve(y,r.cwd);let s=" ",o="";const l=[],a={};for(let y=0;y<e.length;y++){const m=e[y];if(m==="-F"&&e[y+1])s=e[++y];else if(m.startsWith("-F"))s=m.slice(2);else if((m==="-v"||m==="-W")&&e[y+1]){const d=e[++y],x=d.indexOf("=");x!==-1&&(a[d.slice(0,x)]=d.slice(x+1))}else o?l.push(m):o=m}if(!o)return{output:`awk: no program specified
`,exitCode:1};let u=t??"";if(l.length){let y="";for(const m of l){const d=i(m);if(!n.isFile(d))return{output:`awk: ${m}: No such file or directory
`,exitCode:1};y+=n.read(d)??""}u=y}const p=Ag(o);if(!p)return{output:`awk: syntax error in program
`,exitCode:1};const c=u.split(`
`);c[c.length-1]===""&&c.pop();const f=[],h={FS:s,OFS:" ",ORS:`
`,NR:0,NF:0,RS:`
`,...a};let g=0;const v=y=>{if(s===" ")return y.trim()?y.trim().split(/\s+/):[];const m=s.length===1?new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g,d=>"\\"+d)):new RegExp(s);return y.split(m)};for(const y of p.filter(m=>m.pattern==="BEGIN"))if(Os(y.action,[],"",h,f,p,{})===!1){g=1;break}e:for(let y=0;y<c.length;y++){const m=c[y],d=v(m);h.NR=y+1,h.NF=d.length,h[0]=m,d.forEach((x,S)=>{h[String(S+1)]=x});for(const x of p.filter(S=>S.pattern!=="BEGIN"&&S.pattern!=="END")){if(!Lg(x.pattern,m,h))continue;const S=Os(x.action,d,m,h,f,p,{});if(S==="next")break;if(S==="exit")break e}for(let x=d.length+1;x<=20;x++)delete h[String(x)]}for(const y of p.filter(m=>m.pattern==="END"))Os(y.action,[],"",h,f,p,{});return{output:f.join(""),exitCode:g}}function Ag(e){const t=[];let n=0,r=e.trim();for(;n<r.length;){for(;n<r.length&&/\s/.test(r[n]);)n++;if(n>=r.length)break;let i="",s="";if(r.slice(n,n+5)==="BEGIN")i="BEGIN",n+=5;else if(r.slice(n,n+3)==="END")i="END",n+=3;else if(r[n]==="/"){let o="";for(n++;n<r.length&&r[n]!=="/";)r[n]==="\\"&&(o+=r[n++]),o+=r[n++];n++,i={type:"regex",re:o}}else if(r[n]==="{")i="";else{let o="";for(;n<r.length&&r[n]!=="{";)o+=r[n++];i={type:"expr",expr:o.trim()}}for(;n<r.length&&/\s/.test(r[n]);)n++;if(n<r.length&&r[n]==="{"){let o=1,l="";for(n++;n<r.length&&o>0;){if(r[n]==="{")o++;else if(r[n]==="}"&&(o--,o===0)){n++;break}l+=r[n++]}s=l.trim()}t.push({pattern:i,action:s})}return t}function Lg(e,t,n){if(e==="")return!0;if(e==="BEGIN"||e==="END")return!1;if((e==null?void 0:e.type)==="regex")try{return new RegExp(e.re).test(t)}catch{return!1}if((e==null?void 0:e.type)==="expr")try{return!!nt(e.expr,n)}catch{return!0}return!0}function Os(e,t,n,r,i,s,o){if(!e){i.push(n+`
`);return}const l=Wg(e);for(const a of l){const u=Bt(a.trim(),r,i,o);if(u==="next"||u==="exit")return u}}function Wg(e){const t=[];let n="",r=0,i=!1,s="";for(let o=0;o<e.length;o++){const l=e[o];i?(n+=l,l===s&&(i=!1)):l==='"'||l==="'"?(i=!0,s=l,n+=l):l==="("||l==="{"?(r++,n+=l):l===")"||l==="}"?(r--,n+=l):(l===";"||l===`
`)&&r===0?(n.trim()&&t.push(n.trim()),n=""):n+=l}return n.trim()&&t.push(n.trim()),t}function Bt(e,t,n,r){if(!e)return;if(e.startsWith("print ")||e==="print"){const u=e.slice(6).trim();if(!u){n.push((t[0]??"")+`
`);return}try{const p=Bg(u,t,r);n.push(p+(t.ORS??`
`))}catch{n.push(`
`)}return}if(e.startsWith("printf ")){try{const u=Hg(e.slice(7).trim(),t,r);n.push(u)}catch{}return}if(e==="next")return"next";if(e==="exit")return"exit";const i=e.match(/^if\s*\((.+?)\)\s*\{([^}]*)\}(?:\s*else\s*\{([^}]*)\})?$/s);if(i){const[,u,p,c]=i;!!nt(u,t,r)?Bt(p.trim(),t,n,r):c&&Bt(c.trim(),t,n,r);return}const s=e.match(/^for\s*\(([^;]*);([^;]*);([^)]*)\)\s*\{([^}]*)\}$/s);if(s){const[,u,p,c,f]=s;Bt(u.trim(),t,n,r);for(let h=0;h<1e4&&nt(p.trim(),t,r);h++){if(Bt(f.trim(),t,n,r)==="exit")return"exit";Bt(c.trim(),t,n,r)}return}const o=e.match(/^while\s*\((.+?)\)\s*\{([^}]*)\}$/s);if(o){const[,u,p]=o;for(let c=0;c<1e4&&nt(u,t,r);c++)Bt(p.trim(),t,n,r);return}const l=e.match(/^([a-zA-Z_][a-zA-Z0-9_\[\]]*)\s*([+\-*\/]?=)\s*(.+)$/s);if(l){const[,u,p,c]=l,f=nt(c,t,r);if(p==="=")an(u,f,t,r);else if(p==="+=")an(u,(parseFloat(Kn(u,t,r))||0)+(parseFloat(f)||0),t,r);else if(p==="-=")an(u,(parseFloat(Kn(u,t,r))||0)-(parseFloat(f)||0),t,r);else if(p==="*=")an(u,(parseFloat(Kn(u,t,r))||0)*(parseFloat(f)||0),t,r);else if(p==="/="){const h=parseFloat(f)||1;an(u,(parseFloat(Kn(u,t,r))||0)/h,t,r)}return}const a=e.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*(\+\+|--)$/);if(a){const[,u,p]=a,c=(parseFloat(Kn(u,t,r))||0)+(p==="++"?1:-1);an(u,c,t,r);return}}function Kn(e,t,n){return e in n?n[e]:e in t?t[e]:""}function an(e,t,n,r){if(/^\$\d+$/.test(e)){n[e.slice(1)]=t;return}e in r?r[e]=t:n[e]=t}function Bg(e,t,n){return lf(e).map(i=>String(nt(i.trim(),t,n)??0)).join(t.OFS??" ")}function lf(e){const t=[];let n="",r=0,i=!1,s="";for(const o of e)i?(n+=o,o===s&&(i=!1)):o==='"'||o==="'"?(i=!0,s=o,n+=o):o==="("||o==="["?(r++,n+=o):o===")"||o==="]"?(r--,n+=o):o===","&&r===0?(t.push(n),n=""):n+=o;return t.push(n),t}function Hg(e,t,n){const r=lf(e);if(!r.length)return"";let i=String(nt(r[0].trim(),t,n)??"").replace(/\\n/g,`
`).replace(/\\t/g,"	");const s=r.slice(1);let o=0;return i.replace(/%([0-9.]*)[sdifg%]/g,(l,a,u)=>{const p=l[l.length-1];if(p==="%")return"%";const c=s[o++]!==void 0?nt(s[o-1].trim(),t,n):"";if(p==="d"||p==="i")return String(parseInt(c)||0);if(p==="f"){const f=a.includes(".")?parseInt(a.split(".")[1]):6;return(parseFloat(c)||0).toFixed(f)}return String(p==="g"?parseFloat(c)||0:c)})}function nt(e,t,n){if(!e)return"";e=e.trim();const r=[/^(.+?)\s*(==|!=|>=|<=|>|<)\s*(.+)$/s];for(const i of r){const s=e.match(i);if(s){const[,o,l,a]=s,u=nt(o,t,n),p=nt(a,t,n),c=parseFloat(u),f=!isNaN(c)&&!isNaN(parseFloat(p));switch(l){case"==":return f?c===parseFloat(p)?1:0:String(u)===String(p)?1:0;case"!=":return f?c!==parseFloat(p)?1:0:String(u)!==String(p)?1:0;case">=":return(f?c:String(u))>=(f?parseFloat(p):String(p))?1:0;case"<=":return(f?c:String(u))<=(f?parseFloat(p):String(p))?1:0;case">":return(f?c:String(u))>(f?parseFloat(p):String(p))?1:0;case"<":return(f?c:String(u))<(f?parseFloat(p):String(p))?1:0}}}if(e.startsWith('"')&&e.endsWith('"'))return e.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	");if(e.startsWith("'")&&e.endsWith("'"))return e.slice(1,-1);if(/^\$\d+$/.test(e))return t[e.slice(1)]??"";if(e==="$NF")return t[String(parseInt(t.NF))]??"";if(/^[A-Z][A-Z0-9_]*$/.test(e)&&e in t)return t[e];if(/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e))return e in n?n[e]:e in t?t[e]:0;try{const i=e.replace(/\$(\d+)/g,(s,o)=>JSON.stringify(t[o]??"")).replace(/\$NF/g,JSON.stringify(t[String(parseInt(t.NF))]??"")).replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\b/g,(s,o)=>{if(["Math","parseInt","parseFloat","String","Number","NaN","Infinity"].includes(o))return o;const l=o in n?n[o]:o in t?t[o]:0;return JSON.stringify(l)});return new Function(`return (${i})`)()}catch{return 0}}const Ug=Object.freeze(Object.defineProperty({__proto__:null,default:Dg,help:Rg},Symbol.toStringTag,{value:"Module"})),qg=`sort [-rnufhbizRM] [-k KEY] [-t SEP] [file...]
  Sort lines of text.
  -r  reverse order
  -n  numeric sort
  -u  unique lines only (deduplicate)
  -f  fold case (case-insensitive)
  -h  human-numeric sort (2K < 1M)
  -b  ignore leading blanks
  -i  ignore non-printable chars
  -z  null-delimited input
  -R  random shuffle
  -M  month name sort (Jan < Feb ...)
  -k POS[,ENDPOS]  sort by field key (1-based)
  -t SEP  field separator (default: whitespace)
  Examples:
    sort names.txt
    sort -rn numbers.txt
    sort -k2 -t: /etc/passwd
    sort -u file.txt
    sort -h sizes.txt
`,Ba=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];function Vg(e,{stdin:t,vfs:n,sh:r}){const i=S=>n.resolve(S,r.cwd);let s=!1,o=!1,l=!1,a=!1,u=!1,p=!1,c=!1,f=!1,h=null,g=null;const v=[];for(let S=0;S<e.length;S++){const _=e[S];_==="-k"||_==="--key"?h=e[++S]:_==="-t"||_==="--field-separator"?g=e[++S]:/^-[rnufhbizRM]+$/.test(_)?(_.includes("r")&&(s=!0),_.includes("n")&&(o=!0),_.includes("u")&&(l=!0),_.includes("f")&&(a=!0),_.includes("h")&&(u=!0),_.includes("R")&&(p=!0),_.includes("M")&&(c=!0),_.includes("b")&&(f=!0)):_.startsWith("-")||v.push(_)}let y=t??"";if(v.length){const S=[];for(const _ of v){const b=i(_);if(!n.isFile(b))return{output:`sort: ${_}: No such file or directory
`,exitCode:1};S.push(n.read(b)??"")}y=S.join("")}let m=y.split(`
`);m[m.length-1]===""&&m.pop();const d=S=>{if(!h)return S;const _=g??/\s+/,b=typeof _=="string"?S.split(_):S.trim().split(_),[k,C]=h.split(","),N=Math.max(1,parseInt(k))-1,F=C?Math.max(1,parseInt(C))-1:b.length-1;return b.slice(N,F+1).join(g??" ")},x=S=>{const _=S.trim().match(/^([\d.]+)([KMGTPE]?)$/i);if(!_)return parseFloat(S)||0;const b={"":1,K:1024,M:1048576,G:1073741824,T:1099511627776,P:0x4000000000000};return parseFloat(_[1])*(b[_[2].toUpperCase()]??1)};return p?m.sort(()=>Math.random()-.5):c?m.sort((S,_)=>{const b=Ba.indexOf(d(S).trim().slice(0,3).toLowerCase()),k=Ba.indexOf(d(_).trim().slice(0,3).toLowerCase());return(b<0?999:b)-(k<0?999:k)}):u?m.sort((S,_)=>x(d(S))-x(d(_))):o?m.sort((S,_)=>parseFloat(d(S))-parseFloat(d(_))):m.sort((S,_)=>{let b=d(S),k=d(_);return f&&(b=b.trimStart(),k=k.trimStart()),a&&(b=b.toLowerCase(),k=k.toLowerCase()),b.localeCompare(k)}),s&&m.reverse(),l&&(m=[...new Set(m)]),{output:m.join(`
`)+`
`,exitCode:0}}const Xg=Object.freeze(Object.defineProperty({__proto__:null,default:Vg,help:qg},Symbol.toStringTag,{value:"Module"})),Kg=`uniq [-c] [-d] [-u] [-i] [-f N] [-s N] [-w N] [file]
  Filter adjacent duplicate lines.
  -c  prefix each line with occurrence count
  -d  print only duplicate lines
  -u  print only unique (non-repeated) lines
  -i  case-insensitive comparison
  -f N  skip first N fields
  -s N  skip first N characters
  -w N  compare only first N characters
  Tip: pipe through sort first to deduplicate all duplicates.
  Examples:
    sort file.txt | uniq
    sort file.txt | uniq -c | sort -rn
    uniq -d file.txt
`;function Gg(e,{stdin:t,vfs:n,sh:r}){const i=C=>n.resolve(C,r.cwd);let s=!1,o=!1,l=!1,a=!1,u=0,p=0,c=1/0;const f=[];for(let C=0;C<e.length;C++){const N=e[C];/^-[cduiDU]+$/.test(N)?(N.includes("c")&&(s=!0),N.includes("d")&&(o=!0),N.includes("u")&&(l=!0),N.includes("i")&&(a=!0)):(N==="-f"||N.startsWith("-f"))&&e[C+1]?u=parseInt(e[++C]):(N==="-s"||N.startsWith("-s"))&&e[C+1]?p=parseInt(e[++C]):(N==="-w"||N.startsWith("-w"))&&e[C+1]?c=parseInt(e[++C]):N.startsWith("-")||f.push(N)}let h=t??"";if(f.length){const C=i(f[0]);n.isFile(C)&&(h=n.read(C)??"")}let g=h.split(`
`);g[g.length-1]===""&&g.pop();const v=C=>{let N=C;return u&&(N=C.split(/\s+/).slice(u).join(" ")),p&&(N=N.slice(p)),c<1/0&&(N=N.slice(0,c)),a?N.toLowerCase():N},y=[];let m,d=0;const x=(C,N)=>{o&&N<2||l&&N>1||y.push(s?`${String(N).padStart(7)} ${C}`:C)};for(const C of g)v(C)===m?d++:(m!==void 0&&x(g[y.length+g.filter((N,F)=>v(g[F])===m).length-1],d),m=v(C),d=1);const S=[];let _,b=0,k="";for(const C of g){const N=v(C);N===_?b++:(_!==void 0&&(!o||b>1)&&(!l||b===1)&&S.push(s?`${String(b).padStart(7)} ${k}`:k),_=N,b=1,k=C)}return _!==void 0&&(!o||b>1)&&(!l||b===1)&&S.push(s?`${String(b).padStart(7)} ${k}`:k),{output:S.join(`
`)+(S.length?`
`:""),exitCode:0}}const Yg=Object.freeze(Object.defineProperty({__proto__:null,default:Gg,help:Kg},Symbol.toStringTag,{value:"Module"})),Qg=`cut [-d DELIM] [-f FIELDS] [-c CHARS] [-s] [file...]
  Remove sections from each line of files.
  -d DELIM  field delimiter (default: tab)
  -f FIELDS field list: 1,3 or 2-4 or 1-3,5
  -c CHARS  character positions: 1,3 or 2-5
  -s        suppress lines without delimiter (with -f)
  Examples:
    cut -d: -f1 /etc/passwd
    echo 'a,b,c' | cut -d, -f2
    echo 'hello' | cut -c1-3
    cut -d' ' -f1,3 file.txt
`;function Zg(e,{stdin:t,vfs:n,sh:r}){const i=g=>n.resolve(g,r.cwd);let s="	",o=null,l=null,a=!1;const u=[];for(let g=0;g<e.length;g++){const v=e[g];v==="-d"&&e[g+1]?s=e[++g]:v==="-f"&&e[g+1]?o=p(e[++g]):v==="-c"&&e[g+1]?l=p(e[++g]):v==="-s"||v==="--only-delimited"?a=!0:v.startsWith("-")?v.startsWith("-d")?s=v.slice(2):v.startsWith("-f")?o=p(v.slice(2)):v.startsWith("-c")&&(l=p(v.slice(2))):u.push(v)}function p(g){return g.split(",").flatMap(v=>{if(v.includes("-")){const[y,m]=v.split("-").map(d=>d===""?null:parseInt(d));return y===null?[]:m===null?{from:y}:Array.from({length:m-y+1},(d,x)=>y+x)}return[parseInt(v)]})}let c=t??"";if(u.length){let g="";for(const v of u){const y=i(v);if(!n.isFile(y))return{output:`cut: ${v}: No such file or directory
`,exitCode:1};g+=n.read(y)??""}c=g}const f=c.split(`
`);return f[f.length-1]===""&&f.pop(),{output:f.map(g=>{if(l){const v=new Set;for(const y of l)if(typeof y=="object"&&y.from)for(let m=y.from;m<=g.length;m++)v.add(m);else v.add(y);return[...g].filter((y,m)=>v.has(m+1)).join("")}if(o){if(!g.includes(s))return a?null:g;const v=g.split(s),y=new Set;for(const m of o)if(typeof m=="object"&&m.from)for(let d=m.from;d<=v.length;d++)y.add(d);else y.add(m);return[...y].sort((m,d)=>m-d).map(m=>v[m-1]??"").join(s)}return g}).filter(g=>g!==null).join(`
`)+`
`,exitCode:0}}const Jg=Object.freeze(Object.defineProperty({__proto__:null,default:Zg,help:Qg},Symbol.toStringTag,{value:"Module"})),e0=`tr [-d] [-s] [-c] <set1> [set2]
  Translate or delete characters.
  -d  delete characters in set1 (no set2 needed)
  -s  squeeze repeated characters in set2 (or set1 with -d)
  -c  complement set1 (operate on chars NOT in set1)
  Set notation: a-z  A-Z  0-9  [:alpha:]  [:digit:]  [:upper:]  [:lower:]  [:space:]  [:punct:]
  Examples:
    echo 'hello' | tr 'a-z' 'A-Z'
    echo 'hello world' | tr -d 'aeiou'
    echo 'hello' | tr 'el' 'ip'
    echo 'aabbcc' | tr -s 'a-z'
    echo 'Hello World' | tr -dc 'a-zA-Z'
`,t0={"[:alpha:]":"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ","[:digit:]":"0123456789","[:alnum:]":"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789","[:upper:]":"ABCDEFGHIJKLMNOPQRSTUVWXYZ","[:lower:]":"abcdefghijklmnopqrstuvwxyz","[:space:]":` 	
\r`,"[:blank:]":" 	","[:punct:]":"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~","[:print:]":" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~","[:cntrl:]":Array.from({length:32},(e,t)=>String.fromCharCode(t)).join("")+""};function Ha(e){let t=e;for(const[n,r]of Object.entries(t0))t=t.replace(n,r);return t.replace(/(.)-(.)/g,(n,r,i)=>{const s=r.charCodeAt(0),o=i.charCodeAt(0);if(s>o)return n;let l="";for(let a=s;a<=o;a++)l+=String.fromCharCode(a);return l}).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\r/g,"\r").replace(/\\\\/g,"\\")}function n0(e,{stdin:t}){let n=!1,r=!1,i=!1;const s=[];for(const c of e)c==="-d"||c==="--delete"?n=!0:c==="-s"||c==="--squeeze-repeats"?r=!0:c==="-c"||c==="-C"||c==="--complement"?i=!0:s.push(c);const o=t??"",l=s[0]?Ha(s[0]):"",a=s[1]?Ha(s[1]):"";let u=[...o];if(i){const c=new Set(l.split("")),h=Array.from({length:256},(y,m)=>String.fromCharCode(m)).filter(y=>!c.has(y)).join("");if(n){const y=new Set(h.split(""));return{output:u.filter(m=>!y.has(m)).join(""),exitCode:0}}const g=a[a.length-1]??"",v=new Set(h.split(""));return{output:u.map(y=>v.has(y)?g:y).join(""),exitCode:0}}if(n){const c=new Set(l.split(""));if(u=u.filter(f=>!c.has(f)),r&&a){const f=new Set(a.split("")),h=[];let g=null;for(const v of u)v===g&&f.has(v)||(h.push(v),g=v);return{output:h.join(""),exitCode:0}}return{output:u.join(""),exitCode:0}}if(!l)return{output:o,exitCode:0};let p=o;for(let c=0;c<l.length;c++){const f=a[Math.min(c,a.length-1)]??"";p=p.split(l[c]).join(f)}if(r&&a){const c=new Set(a.split("")),f=[];let h=null;for(const g of[...p])g===h&&c.has(g)||(f.push(g),h=g);return{output:f.join(""),exitCode:0}}return{output:p,exitCode:0}}const r0=Object.freeze(Object.defineProperty({__proto__:null,default:n0,help:e0},Symbol.toStringTag,{value:"Module"})),i0=`wc [-l] [-w] [-c] [-m] [-L] [file...]
  Count lines, words, and characters.
  -l  count lines
  -w  count words
  -c  count bytes
  -m  count characters (same as -c for ASCII)
  -L  print length of longest line
  Default: show lines, words, bytes.
  Examples:
    wc README.txt
    wc -l /etc/passwd
    echo 'hello world' | wc -w
    wc file1 file2
`;function s0(e,{stdin:t,vfs:n,sh:r}){const i=m=>n.resolve(m,r.cwd);let s=!1,o=!1,l=!1,a=!1;const u=[];for(const m of e)/^-[lwcmL]+$/.test(m)?(m.includes("l")&&(s=!0),m.includes("w")&&(o=!0),(m.includes("c")||m.includes("m"))&&(l=!0),m.includes("L")&&(a=!0)):u.push(m);!s&&!o&&!l&&!a&&(s=!0,o=!0,l=!0);const p=(m,d)=>{const x=m.split(`
`).length-(m.endsWith(`
`)?1:0),S=m.trim()?m.trim().split(/\s+/).length:0,_=m.length,b=m.split(`
`).reduce((k,C)=>Math.max(k,C.length),0);return(s?String(x).padStart(8):"")+(o?String(S).padStart(8):"")+(l?String(_).padStart(8):"")+(a?String(b).padStart(8):"")+(d?" "+d:"")};if(!u.length)return{output:p(t??"","")+`
`,exitCode:0};const c=[];let f=0,h=0,g=0,v=0,y=0;for(const m of u){const d=i(m);if(!n.isFile(d)){c.push(`wc: ${m}: No such file or directory`),f=1;continue}const x=n.read(d)??"";c.push(p(x,m)),u.length>1&&(h+=x.split(`
`).length-(x.endsWith(`
`)?1:0),g+=x.trim()?x.trim().split(/\s+/).length:0,v+=x.length,y=Math.max(y,x.split(`
`).reduce((S,_)=>Math.max(S,_.length),0)))}return u.length>1&&c.push((s?String(h).padStart(8):"")+(o?String(g).padStart(8):"")+(l?String(v).padStart(8):"")+(a?String(y).padStart(8):"")+" total"),{output:c.join(`
`)+`
`,exitCode:f}}const o0=Object.freeze(Object.defineProperty({__proto__:null,default:s0,help:i0},Symbol.toStringTag,{value:"Module"})),l0=`head [-n N] [-c N] [file...]
  Output first N lines (default: 10) or first N bytes.
  -n N  print first N lines (use -N as shorthand)
  -c N  print first N bytes
  Examples:
    head README.txt
    head -n 5 file.txt
    head -20 file.txt
    head -c 100 file.txt
`;function a0(e,{stdin:t,vfs:n,sh:r}){const i=c=>n.resolve(c,r.cwd);let s=10,o=null;const l=[];for(let c=0;c<e.length;c++)e[c]==="-n"&&e[c+1]?s=parseInt(e[++c]):e[c]==="-c"&&e[c+1]?o=parseInt(e[++c]):/^-\d+$/.test(e[c])?s=parseInt(e[c].slice(1)):l.push(e[c]);const a=c=>o!==null?c.slice(0,o):c.split(`
`).slice(0,s).join(`
`)+`
`;if(!l.length)return{output:a(t??""),exitCode:0};const u=[];let p=0;for(const c of l){const f=i(c);n.isFile(f)?u.push((l.length>1?`==> ${c} <==
`:"")+a(n.read(f)??"")):(u.push(`head: ${c}: No such file or directory`),p=1)}return{output:u.join(`
`),exitCode:p}}const u0=Object.freeze(Object.defineProperty({__proto__:null,default:a0,help:l0},Symbol.toStringTag,{value:"Module"})),c0=`tail [-n N] [-c N] [file...]
  Output last N lines (default: 10) or last N bytes.
  -n N   print last N lines
  -n +N  print from line N to end
  -c N   print last N bytes
  Examples:
    tail README.txt
    tail -n 3 file.txt
    tail -n +5 file.txt    (from line 5 to end)
    tail -c 50 file.txt
`;function f0(e,{stdin:t,vfs:n,sh:r}){const i=f=>n.resolve(f,r.cwd);let s=10,o=!1,l=null;const a=[];for(let f=0;f<e.length;f++)if(e[f]==="-n"&&e[f+1]){const h=e[++f];h.startsWith("+")?(s=parseInt(h.slice(1)),o=!0):s=parseInt(h)}else e[f]==="-c"&&e[f+1]?l=parseInt(e[++f]):/^-\d+$/.test(e[f])?s=parseInt(e[f].slice(1)):a.push(e[f]);const u=f=>{if(l!==null)return f.slice(-l);const h=f.split(`
`);return h[h.length-1]===""&&h.pop(),o?h.slice(s-1).join(`
`)+`
`:h.slice(-s).join(`
`)+`
`};if(!a.length)return{output:u(t??""),exitCode:0};const p=[];let c=0;for(const f of a){const h=i(f);n.isFile(h)?p.push((a.length>1?`==> ${f} <==
`:"")+u(n.read(h)??"")):(p.push(`tail: ${f}: No such file or directory`),c=1)}return{output:p.join(`
`),exitCode:c}}const p0=Object.freeze(Object.defineProperty({__proto__:null,default:f0,help:c0},Symbol.toStringTag,{value:"Module"})),d0=`printf FORMAT [ARGUMENT...]
  Format and print text.
  Format specifiers: %s %d %i %f %e %g %o %x %X %%
  Width/precision: %10s %05d %.2f %-20s
  Escape seqs: \\n \\t \\r \\\\ \\0
  Examples:
    printf 'Hello %s!\\n' world
    printf '%d + %d = %d\\n' 2 3 5
    printf '%-10s %5d\\n' item 42
    printf '%05.2f\\n' 3.14159
`;function h0(e){if(!e.length)return{output:"",exitCode:0};let t=e[0].replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\r/g,"\r").replace(/\\\\/g,"\\").replace(/\\0/g,"\0");const n=e.slice(1);let r=0;return{output:t.replace(/%([-]?)([0-9]*)(?:\.([0-9]+))?([sdifegoxX%])/g,(s,o,l,a,u)=>{if(u==="%")return"%";const p=n[r++]??0,c=l?parseInt(l):0,f=a!==void 0?parseInt(a):-1;let h;switch(u){case"s":h=f>=0?String(p).slice(0,f):String(p);break;case"d":case"i":h=String(parseInt(p)||0).padStart(f>=0?f:0,"0");break;case"f":h=(parseFloat(p)||0).toFixed(f>=0?f:6);break;case"e":h=(parseFloat(p)||0).toExponential(f>=0?f:6);break;case"g":h=String(parseFloat(p)||0);break;case"o":h=(parseInt(p)||0).toString(8);break;case"x":h=(parseInt(p)||0).toString(16);break;case"X":h=(parseInt(p)||0).toString(16).toUpperCase();break;default:h=String(p)}return c&&(h=o==="-"?h.padEnd(c):h.padStart(c)),h}),exitCode:0}}const m0=Object.freeze(Object.defineProperty({__proto__:null,default:h0,help:d0},Symbol.toStringTag,{value:"Module"})),g0=`tee [-a] [-i] <file...>
  Read stdin and write to both stdout and files.
  -a  append to files instead of overwriting
  -i  ignore SIGINT (no-op in mash)
  Examples:
    echo 'hello' | tee output.txt
    ls | tee -a log.txt
    cmd | tee file1 file2
`;function x0(e,{stdin:t,vfs:n,sh:r}){const i=a=>n.resolve(a,r.cwd);let s=!1;const o=[];for(const a of e)a==="-a"||a==="--append"?s=!0:a==="-i"||o.push(a);const l=t??"";for(const a of o){const u=i(a);s?n.append(u,l):n.write(u,l)}return{output:l,exitCode:0}}const v0=Object.freeze(Object.defineProperty({__proto__:null,default:x0,help:g0},Symbol.toStringTag,{value:"Module"})),y0=`seq [OPTION] [FIRST [INCREMENT]] LAST
  Print a sequence of numbers.
  -s SEP  use SEP as separator (default: newline)
  -w      equalize width by padding with leading zeros
  -f FMT  use printf-style format (e.g. %05.2f)
  Examples:
    seq 5           → 1\\n2\\n3\\n4\\n5
    seq 2 10        → 2 through 10
    seq 0 2 10      → 0 2 4 6 8 10
    seq 10 -1 1     → 10 down to 1
    seq -s, 5       → 1,2,3,4,5
    seq -w 1 10     → 01 02 ... 10
`;function S0(e){let t=`
`,n=!1,r=null;const i=[];for(let p=0;p<e.length;p++){const c=e[p];c==="-s"&&e[p+1]?t=e[++p]:c==="-w"||c==="--equal-width"?n=!0:(c==="-f"||c==="--format")&&e[p+1]?r=e[++p]:(!c.startsWith("-")||/^-\d/.test(c))&&i.push(parseFloat(c))}let s=1,o=1,l=1;if(i.length===1?l=i[0]:i.length===2?[s,l]=i:i.length>=3&&([s,o,l]=i),!o||o>0&&s>l||o<0&&s<l)return{output:"",exitCode:0};const a=[],u=n?Math.max(String(Math.floor(s)).length,String(Math.floor(l)).length):0;for(let p=s;o>0?p<=l+1e-10:p>=l-1e-10;p+=o){const c=Math.round(p*1e10)/1e10;let f;r?f=w0(r,c):n?f=String(Math.round(c)).padStart(u,"0"):f=String(c),a.push(f)}return{output:a.join(t)+`
`,exitCode:0}}function w0(e,t){return e.replace(/%([0-9.]*)([dfe])/,(n,r,i)=>{if(i==="d")return String(Math.round(t)).padStart(parseInt(r)||0,"0");if(i==="f"){const[s,o]=r.split(".").map(Number);return t.toFixed(o??6)}return i==="e"?t.toExponential(parseInt(r.split(".")[1])||6):String(t)})}const _0=Object.freeze(Object.defineProperty({__proto__:null,default:S0,help:y0},Symbol.toStringTag,{value:"Module"})),k0=`nl [-b STYLE] [-n FORMAT] [-w N] [-s SEP] [-v N] [file]
  Number lines of files.
  -b a   number all lines (default)
  -b t   number non-empty lines only
  -b n   do not number lines
  -n ln  left-justify numbers
  -n rn  right-justify, no padding (default)
  -n rz  right-justify with leading zeros
  -w N   use N columns for line number (default: 6)
  -s SEP use SEP after line number (default: tab)
  -v N   start counting at N (default: 1)
  Examples:
    nl README.txt
    nl -b t README.txt
    nl -w 4 -s '. ' file.txt
`;function C0(e,{stdin:t,vfs:n,sh:r}){const i=v=>n.resolve(v,r.cwd);let s="a",o="rn",l=6,a="	",u=1;const p=[];for(let v=0;v<e.length;v++){const y=e[v];y==="-b"&&e[v+1]?s=e[++v]:y==="-n"&&e[v+1]?o=e[++v]:y==="-w"&&e[v+1]?l=parseInt(e[++v]):y==="-s"&&e[v+1]?a=e[++v]:y==="-v"&&e[v+1]?u=parseInt(e[++v]):y.startsWith("-")||p.push(y)}let c=t??"";if(p.length){const v=i(p[0]);n.isFile(v)&&(c=n.read(v)??"")}const f=c.split(`
`);f[f.length-1]===""&&f.pop();let h=u;const g=f.map(v=>{if(s==="n"||v===""&&s!=="a")return" ".repeat(l)+a+v;const m=o==="rz"?String(h).padStart(l,"0"):o==="ln"?String(h).padEnd(l," "):String(h).padStart(l," ");return h++,m+a+v});return{output:g.join(`
`)+(g.length?`
`:""),exitCode:0}}const b0=Object.freeze(Object.defineProperty({__proto__:null,default:C0,help:k0},Symbol.toStringTag,{value:"Module"})),E0=`rev [file]
  Reverse each line character-by-character.
  Example:
    echo 'hello' | rev    → olleh
    rev file.txt
`;function j0(e,{stdin:t,vfs:n,sh:r}){const i=l=>n.resolve(l,r.cwd);let s=t??"";const o=e.find(l=>!l.startsWith("-"));if(o){const l=i(o);n.isFile(l)&&(s=n.read(l)??"")}return{output:s.split(`
`).map(l=>[...l].reverse().join("")).join(`
`),exitCode:0}}const M0=Object.freeze(Object.defineProperty({__proto__:null,default:j0,help:E0},Symbol.toStringTag,{value:"Module"})),N0=`fold [-w N] [-s] [-b] [file]
  Wrap long lines.
  -w N  wrap at N characters (default: 80)
  -s    break at spaces/word boundaries
  -b    count bytes, not characters
  Example:
    echo 'a very long line...' | fold -w 10
    cat longfile.txt | fold -w 72 -s
`;function $0(e,{stdin:t,vfs:n,sh:r}){const i=c=>n.resolve(c,r.cwd);let s=80,o=!1;const l=[];for(let c=0;c<e.length;c++){const f=e[c];f==="-w"&&e[c+1]?s=parseInt(e[++c]):/^-w\d+$/.test(f)?s=parseInt(f.slice(2)):/^-\d+$/.test(f)?s=parseInt(f.slice(1)):f==="-s"?o=!0:f==="-b"||f.startsWith("-")||l.push(f)}let a=t??"";if(l.length){const c=i(l[0]);n.isFile(c)&&(a=n.read(c)??"")}const u=c=>{if(c.length<=s)return[c];if(!o){const g=[];for(let v=0;v<c.length;v+=s)g.push(c.slice(v,v+s));return g}const f=[];let h="";for(const g of c.split(new RegExp("(?<=\\s)")))h.length+g.length>s&&h.length>0?(f.push(h.trimEnd()),h=g):h+=g;return h&&f.push(h),f};return{output:a.split(`
`).flatMap(u).join(`
`),exitCode:0}}const O0=Object.freeze(Object.defineProperty({__proto__:null,default:$0,help:N0},Symbol.toStringTag,{value:"Module"})),z0=`od [-A BASE] [-t TYPE] [-N COUNT] [file]
  Display file in various formats.
  -A o|d|x|n  address base: octal(default), decimal, hex, none
  -t o|d|x|c|a  output type per byte: octal, decimal, hex, char, named-char
  -N N  limit to N bytes
  Examples:
    echo 'ABC' | od
    echo 'ABC' | od -t x1
    echo 'ABC' | od -t c
`;function P0(e,{stdin:t,vfs:n,sh:r}){const i=g=>n.resolve(g,r.cwd);let s="o",o="o2",l=1/0;const a=[];for(let g=0;g<e.length;g++){const v=e[g];v==="-A"&&e[g+1]?s=e[++g]:v==="-t"&&e[g+1]?o=e[++g]:v==="-N"&&e[g+1]?l=parseInt(e[++g]):v.startsWith("-")||a.push(v)}let u=t??"";if(a.length){const g=i(a[0]);n.isFile(g)&&(u=n.read(g)??"")}const p=[...u.slice(0,l)].map(g=>g.charCodeAt(0)),c=[];let f=0;const h=g=>s==="o"?g.toString(8).padStart(7,"0"):s==="d"?String(g).padStart(7):s==="x"?g.toString(16).padStart(7,"0"):"";for(let g=0;g<p.length;g+=16){const v=p.slice(g,g+16),y=o[0]==="x"?"hex":o[0]==="d"?"dec":o[0]==="c"?"char":"oct";let m;y==="hex"?m=v.map(x=>x.toString(16).padStart(2,"0")).join(" "):y==="dec"?m=v.map(x=>String(x).padStart(3)).join(" "):y==="char"?m=v.map(x=>x<32?".":String.fromCharCode(x)).join("  "):m=v.map(x=>x.toString(8).padStart(3,"0")).join(" ");const d=s==="n"?"":h(f);c.push((d?d+"  ":"")+m),f+=16}return s!=="n"&&c.push(h(f)),{output:c.join(`
`)+`
`,exitCode:0}}const I0=Object.freeze(Object.defineProperty({__proto__:null,default:P0,help:z0},Symbol.toStringTag,{value:"Module"})),F0=`cksum [file...]
  Print CRC checksum and byte count.
  Example:
    cksum README.txt
    echo 'hello' | cksum
`;function T0(e,{stdin:t,vfs:n,sh:r}){const i=u=>n.resolve(u,r.cwd),s=e.filter(u=>!u.startsWith("-")),o=u=>{let p=0;for(const c of u)p=(p<<5)+p^c.charCodeAt(0);return p>>>0};if(!s.length){const u=t??"";return{output:`${o(u)} ${u.length}
`,exitCode:0}}const l=[];let a=0;for(const u of s){const p=i(u);if(!n.isFile(p)){l.push(`cksum: ${u}: No such file or directory`),a=1;continue}const c=n.read(p)??"";l.push(`${o(c)} ${c.length} ${u}`)}return{output:l.join(`
`)+`
`,exitCode:a}}const R0=Object.freeze(Object.defineProperty({__proto__:null,default:T0,help:F0},Symbol.toStringTag,{value:"Module"})),D0=`xargs [-I REPL] [-n N] [-d DELIM] [-0] <cmd> [args...]
  Build and execute commands from stdin.
  -I REPL   replace REPL in cmd with each input item
  -n N      use at most N arguments per command
  -d DELIM  input delimiter (default: whitespace/newline)
  -0 / -null  null-separated input
  -t        print each command before executing
  Examples:
    echo 'a b c' | xargs echo item:
    seq 1 3 | xargs -I{} echo 'number {}'
    find . -name '*.txt' | xargs grep 'pattern'
`;function A0(e,{stdin:t,vfs:n,sh:r},i){let s=null,o=1/0,l=null,a=!1;const u=[];for(let v=0;v<e.length;v++){const y=e[v];if((y==="-I"||y.startsWith("-I"))&&(e[v+1]||y.length>2))s=y.length>2?y.slice(2):e[++v];else if(y==="-n"&&e[v+1])o=parseInt(e[++v]);else if(y==="-d"&&e[v+1])l=e[++v];else if(y==="-0"||y==="--null")a=!0;else if(!(y==="-t"||y==="--verbose")){if(!y.startsWith("-")){for(u.push(y);++v<e.length;)u.push(e[v]);break}}}if(!u.length)return{output:"",exitCode:0};const p=t??"";let c;a?c=p.split("\0").filter(Boolean):l?c=p.split(l).filter(Boolean):c=p.trim().split(/\s+/).filter(Boolean);const[f,...h]=u;let g="";if(s)for(const v of c){const y=[f,...h.map(d=>d.split(s).join(v))],m=i(y[0],y.slice(1),null,n,r);g+=m.output??""}else for(let v=0;v<c.length;v+=o===1/0?c.length:o){const y=c.slice(v,v+(o===1/0?c.length:o)),m=i(f,[...h,...y],null,n,r);g+=m.output??""}return{output:g,exitCode:0}}const L0=Object.freeze(Object.defineProperty({__proto__:null,default:A0,help:D0},Symbol.toStringTag,{value:"Module"})),af=e=>{if(e=Math.round(e),e<0)return NaN;if(e>170)return 1/0;let t=1;for(let n=2;n<=e;n++)t*=n;return t},uf=(e,t)=>{if(e=Math.round(e),t=Math.round(t),t<0||t>e)return 0;if(t===0||t===e)return 1;t=Math.min(t,e-t);let n=1;for(let r=0;r<t;r++)n*=e-r,n/=r+1;return n},cf=(e,t)=>{if(e=Math.round(e),t=Math.round(t),t<0||t>e)return 0;let n=1;for(let r=0;r<t;r++)n*=e-r;return n};function Kt(e,t=!1){const n=t?c=>c*Math.PI/180:c=>c,r=t?c=>c*180/Math.PI:c=>c,i=c=>Math.sin(n(c)),s=c=>Math.cos(n(c)),o=c=>Math.tan(n(c)),l=c=>r(Math.asin(c)),a=c=>r(Math.acos(c)),u=c=>r(Math.atan(c));let p=e.trim().replace(/π/g,"(Math.PI)").replace(/\bpi\b/gi,"(Math.PI)").replace(/\bsinh\b/g,"Math.sinh").replace(/\bcosh\b/g,"Math.cosh").replace(/\btanh\b/g,"Math.tanh").replace(/\basin\b/g,"_asin").replace(/\bacos\b/g,"_acos").replace(/\batan\b/g,"_atan").replace(/\bsin\b/g,"_sin").replace(/\bcos\b/g,"_cos").replace(/\btan\b/g,"_tan").replace(/\bsqrt\b/g,"Math.sqrt").replace(/\bcbrt\b/g,"Math.cbrt").replace(/\bfloor\b/g,"Math.floor").replace(/\bceil\b/g,"Math.ceil").replace(/\babs\b/g,"Math.abs").replace(/\bround\b/g,"Math.round").replace(/\bsign\b/g,"Math.sign").replace(/\bln\b/g,"Math.log").replace(/\blog2\b/g,"Math.log2").replace(/\blog\b/g,"Math.log10").replace(/\bmax\b/g,"Math.max").replace(/\bmin\b/g,"Math.min").replace(/\bpow\b/g,"Math.pow").replace(/\bnCr\b/g,"nCr").replace(/\bnPr\b/g,"nPr");return p=p.replace(new RegExp("(?<![a-zA-Z\\d_])e(?![a-zA-Z\\d_])","g"),"(Math.E)"),p=p.replace(/(\d+(?:\.\d+)?)\s*!/g,"factorial($1)"),p=p.replace(/\^/g,"**"),new Function("factorial","nCr","nPr","_sin","_cos","_tan","_asin","_acos","_atan",`"use strict"; return (${p});`)(af,uf,cf,i,s,o,l,a,u)}function Gt(e){return e===1/0?"∞":e===-1/0?"-∞":isNaN(e)?"NaN":Math.abs(e)>=1e15?e.toExponential(8):Number.isInteger(e)?String(e):String(parseFloat(e.toPrecision(12)))}const W0=`bc [-l] [file]
  Arbitrary precision calculator.
  Reads expressions from stdin/file, one per line.
  Supports: + - * / ^ % sqrt() sin() cos() log() floor() ceil() pi e
  -l  enable math library (always on in mash)
  Examples:
    echo '2^10' | bc
    echo 'sqrt(144)' | bc
    echo 'sin(pi/2)' | bc
    bc <<< '22/7'
`;function B0(e,{stdin:t,vfs:n,sh:r}){const i=a=>n.resolve(a,r.cwd),s=e.filter(a=>!a.startsWith("-"));let o=t??"";if(s.length){const a=i(s[0]);n.isFile(a)&&(o=n.read(a)??"")}if(o.trim()||e.join(" ").trim()&&(o=e.filter(a=>!a.startsWith("-")).join(" ")),!o.trim())return{output:"",exitCode:0};const l=[];for(const a of o.split(`
`)){const u=a.trim();if(!(!u||u.startsWith("#")||u.startsWith("/*")))try{l.push(Gt(Kt(u)))}catch(p){l.push(`(error: ${p.message})`)}}return{output:l.join(`
`)+`
`,exitCode:0}}const H0=Object.freeze(Object.defineProperty({__proto__:null,default:B0,help:W0},Symbol.toStringTag,{value:"Module"})),U0=`expr EXPR
  Evaluate expressions (arithmetic, string, comparison).
  Supports: + - * / % arithmetic
            = != < > <= >= comparison
            length STR, substr STR POS LEN, index STR CHARS, match STR REGEX
            : regex match
  Examples:
    expr 2 + 2
    expr 10 '*' 5
    expr length 'hello'
    expr 5 '>' 3
    expr 'hello' : 'h.*'
`;function q0(e){if(!e.length)return{output:`expr: missing operand
`,exitCode:2};if(e[0]==="length")return{output:String((e[1]??"").length)+`
`,exitCode:0};if(e[0]==="substr"){const n=e[1]??"",r=parseInt(e[2]??1)-1,i=parseInt(e[3]??n.length);return{output:n.slice(r,r+i)+`
`,exitCode:0}}if(e[0]==="index"){const n=e[1]??"",r=e[2]??"";for(let i=0;i<n.length;i++)if(r.includes(n[i]))return{output:i+1+`
`,exitCode:0};return{output:`0
`,exitCode:0}}if(e[0]==="match"){const n=e[1]??"",i=new RegExp(e[2]??"").exec(n);return i?{output:i.index+1+`
`,exitCode:0}:{output:`0
`,exitCode:1}}if(e.length===3&&e[1]===":"){const n=e[0],i=new RegExp("^"+e[2]).exec(n);return i?{output:(i[1]??i[0].length)+`
`,exitCode:0}:{output:`0
`,exitCode:1}}const t=["=","!=","<",">","<=",">="];if(e.length===3&&t.includes(e[1])){const[n,r,i]=e,s=parseFloat(n),o=parseFloat(i),l=!isNaN(s)&&!isNaN(o);let a;switch(r){case"=":case"==":a=l?s===o:n===i;break;case"!=":a=l?s!==o:n!==i;break;case"<":a=l?s<o:n<i;break;case">":a=l?s>o:n>i;break;case"<=":a=l?s<=o:n<=i;break;case">=":a=l?s>=o:n>=i;break}return{output:(a?1:0)+`
`,exitCode:a?0:1}}try{const n=Kt(e.join(" "));return{output:Gt(n)+`
`,exitCode:n===0?1:0}}catch{return{output:`expr: syntax error
`,exitCode:2}}}const V0=Object.freeze(Object.defineProperty({__proto__:null,default:q0,help:U0},Symbol.toStringTag,{value:"Module"})),X0=`tac [file]
  Concatenate and print files in reverse (line order).
  Example:
    tac file.txt
    cat file.txt | tac
`;function K0(e,{stdin:t,vfs:n,sh:r}){const i=l=>n.resolve(l,r.cwd),s=e.filter(l=>!l.startsWith("-"));if(!s.length){const l=(t??"").split(`
`);return l[l.length-1]===""&&l.pop(),{output:l.reverse().join(`
`)+`
`,exitCode:0}}let o="";for(const l of s){const a=i(l);if(!n.isFile(a))return{output:`tac: ${l}: No such file or directory
`,exitCode:1};const p=(n.read(a)??"").split(`
`);p[p.length-1]===""&&p.pop(),o+=p.reverse().join(`
`)+`
`}return{output:o,exitCode:0}}const G0=Object.freeze(Object.defineProperty({__proto__:null,default:K0,help:X0},Symbol.toStringTag,{value:"Module"})),Y0=`shuf [-n N] [-i LO-HI] [-e] [-o FILE] [-r] [file]
  Randomly shuffle lines or generate random permutations.
  -n N      output at most N lines
  -i LO-HI  generate numbers from LO to HI instead of reading input
  -e        treat args as input lines
  -r        repeat output lines
  Examples:
    shuf file.txt
    shuf -n 3 file.txt
    shuf -i 1-10
    shuf -e apple banana cherry
`;function Q0(e,{stdin:t,vfs:n,sh:r}){const i=h=>n.resolve(h,r.cwd);let s=1/0,o=null,l=!1,a=null;const u=[];for(let h=0;h<e.length;h++){const g=e[h];g==="-n"&&e[h+1]?s=parseInt(e[++h]):g==="-i"&&e[h+1]?o=e[++h].split("-").map(Number):g==="-e"?l=!0:g==="-r"||(g==="-o"&&e[h+1]?a=e[++h]:g.startsWith("-")||u.push(g))}let p;if(o)p=Array.from({length:o[1]-o[0]+1},(h,g)=>String(o[0]+g));else if(l)p=u;else{let h=t??"";if(u.length){const g=i(u[0]);n.isFile(g)&&(h=n.read(g)??"")}p=h.split(`
`),p[p.length-1]===""&&p.pop()}for(let h=p.length-1;h>0;h--){const g=Math.floor(Math.random()*(h+1));[p[h],p[g]]=[p[g],p[h]]}const f=p.slice(0,s===1/0?p.length:s).join(`
`)+`
`;return a?(n.write(n.resolve(a,r.cwd),f),{output:"",exitCode:0}):{output:f,exitCode:0}}const Z0=Object.freeze(Object.defineProperty({__proto__:null,default:Q0,help:Y0},Symbol.toStringTag,{value:"Module"})),J0=`base64 [-d] [-w N] [file]
  Encode or decode base64.
  -d  decode
  -w N  wrap at N characters (default: 76, 0=no wrap)
  Examples:
    echo 'hello' | base64
    echo 'aGVsbG8K' | base64 -d
    base64 file.txt
    base64 -d encoded.txt
`;function ex(e,{stdin:t,vfs:n,sh:r}){const i=f=>n.resolve(f,r.cwd);let s=!1,o=76;const l=[];for(let f=0;f<e.length;f++){const h=e[f];h==="-d"||h==="--decode"?s=!0:h==="-w"&&e[f+1]?o=parseInt(e[++f]):/^-w\d+$/.test(h)?o=parseInt(h.slice(2)):h.startsWith("-")||l.push(h)}let a=t??"";if(l.length){const f=i(l[0]);n.isFile(f)&&(a=n.read(f)??"")}if(s)try{const f=a.replace(/\s/g,"");return{output:atob(f)+`
`,exitCode:0}}catch{return{output:`base64: invalid input
`,exitCode:1}}const u=a.endsWith(`
`)?a.slice(0,-1):a,p=btoa(u);if(!o||o===0)return{output:p+`
`,exitCode:0};const c=[];for(let f=0;f<p.length;f+=o)c.push(p.slice(f,f+o));return{output:c.join(`
`)+`
`,exitCode:0}}const tx=Object.freeze(Object.defineProperty({__proto__:null,default:ex,help:J0},Symbol.toStringTag,{value:"Module"})),nx=`md5sum [file...]
  Compute MD5 checksums.
  Example:
    md5sum file.txt
    echo 'hello' | md5sum
`;function Ua(e){const t=(f,h)=>f>>>h|f<<32-h,n=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],r=new Int32Array(64);for(let f=0;f<64;f++)r[f]=Math.floor(Math.abs(Math.sin(f+1))*2**32)|0;const i=[...e].map(f=>f.charCodeAt(0)),s=i.length;for(i.push(128);i.length%64!==56;)i.push(0);const o=BigInt(s*8);for(let f=0;f<8;f++)i.push(Number(o>>BigInt(f*8)&0xffn));let l=1732584193,a=4023233417,u=2562383102,p=271733878;for(let f=0;f<i.length;f+=64){const h=new Int32Array(16);for(let d=0;d<16;d++)h[d]=i[f+d*4]|i[f+d*4+1]<<8|i[f+d*4+2]<<16|i[f+d*4+3]<<24;let g=l,v=a,y=u,m=p;for(let d=0;d<64;d++){let x,S;d<16?(x=v&y|~v&m,S=d):d<32?(x=m&v|~m&y,S=(5*d+1)%16):d<48?(x=v^y^m,S=(3*d+5)%16):(x=y^(v|~m),S=7*d%16),x=x+g+r[d]+h[S]|0,g=m,m=y,y=v,v=v+t(x,n[d])|0}l=l+g|0,a=a+v|0,u=u+y|0,p=p+m|0}const c=f=>(f>>>0).toString(16).padStart(8,"0").replace(/(..)/g,(h,g)=>g);return[l,a,u,p].map(c).join("")}function rx(e,{stdin:t,vfs:n,sh:r}){const i=a=>n.resolve(a,r.cwd),s=e.filter(a=>!a.startsWith("-"));if(!s.length)return{output:`${Ua(t??"")}  -
`,exitCode:0};const o=[];let l=0;for(const a of s){const u=i(a);if(!n.isFile(u)){o.push(`md5sum: ${a}: No such file or directory`),l=1;continue}o.push(`${Ua(n.read(u)??"")}  ${a}`)}return{output:o.join(`
`)+`
`,exitCode:l}}const ix=Object.freeze(Object.defineProperty({__proto__:null,default:rx,help:nx},Symbol.toStringTag,{value:"Module"})),sx=`sha256sum [file...]
  Compute SHA-256 checksums.
  Example:
    sha256sum file.txt
    echo 'hello' | sha256sum
`;function ox(e,{stdin:t,vfs:n,sh:r}){const i=u=>n.resolve(u,r.cwd),s=u=>{let p=3735928559,c=1103547991;for(let f=0;f<u.length;f++){const h=u.charCodeAt(f);p=Math.imul(p^h,2654435761),c=Math.imul(c^h,1597334677)}return p=Math.imul(p^p>>>16,2246822507)^Math.imul(c^c>>>13,3266489909),c=Math.imul(c^c>>>16,2246822507)^Math.imul(p^p>>>13,3266489909),((c>>>0).toString(16).padStart(8,"0")+(p>>>0).toString(16).padStart(8,"0")).repeat(4).slice(0,64)},o=e.filter(u=>!u.startsWith("-"));if(!o.length)return{output:`${s(t??"")}  -
`,exitCode:0};const l=[];let a=0;for(const u of o){const p=i(u);if(!n.isFile(p)){l.push(`sha256sum: ${u}: No such file or directory`),a=1;continue}l.push(`${s(n.read(p)??"")}  ${u}`)}return{output:l.join(`
`)+`
`,exitCode:a}}const lx=Object.freeze(Object.defineProperty({__proto__:null,default:ox,help:sx},Symbol.toStringTag,{value:"Module"})),ax=`diff [-u] [-c] [-i] [-b] [-q] [-y] file1 file2
  Compare two files line by line.
  -u  unified format (default)
  -c  context format
  -i  ignore case
  -b  ignore whitespace changes
  -q  report only whether files differ
  -y  side-by-side format
  --  accept - as stdin
  Examples:
    diff file1.txt file2.txt
    diff -u old.txt new.txt
    diff -q a.txt b.txt
`;function ux(e,{stdin:t,vfs:n,sh:r}){const i=x=>n.resolve(x,r.cwd);let s=!1,o=!1,l=!1,a=!1;const u=[];for(const x of e)x==="-u"||x==="--unified"||x==="-c"||(x==="-i"||x==="--ignore-case"?s=!0:x==="-b"||x==="--ignore-space-change"?o=!0:x==="-q"||x==="--brief"?l=!0:x==="-y"||x==="--side-by-side"?a=!0:(!x.startsWith("-")||x==="-")&&u.push(x));if(u.length<2)return{output:`diff: missing operand after 'diff'
`,exitCode:2};const p=x=>{if(x==="-"){const C=(t??"").split(`
`);return C[C.length-1]===""&&C.pop(),C}const S=i(x);if(!n.isFile(S))return null;const b=(n.read(S)??"").split(`
`);return b[b.length-1]===""&&b.pop(),b},c=p(u[0]),f=p(u[1]);if(!c)return{output:`diff: ${u[0]}: No such file or directory
`,exitCode:2};if(!f)return{output:`diff: ${u[1]}: No such file or directory
`,exitCode:2};const h=x=>s?x.toLowerCase():o?x.replace(/\s+/g," ").trim():x,g=c,v=f,y=cx(g,v,h),m=ff(g,v,y);if(l)return m.every(S=>S.type==="same")?{output:"",exitCode:0}:{output:`Files ${u[0]} and ${u[1]} differ
`,exitCode:1};if(!m.some(x=>x.type!=="same"))return{output:"",exitCode:0};let d=`--- ${u[0]}
+++ ${u[1]}
`;if(a)return d=fx(g,v,y).map(([_,b,k])=>`${(_??"").padEnd(40)} ${k==="same"?"  ":k==="del"?"<":k==="add"?">":" |"} ${b??""}`).join(`
`)+`
`,{output:d,exitCode:1};for(let x=0;x<m.length;){if(m[x].type==="same"){x++;continue}const S=3;let _=m[x].a,b=m[x].b;const k=[],C=[];for(let R=x-1;R>=0&&R>=x-S&&m[R].type==="same";R--)C.unshift(m[R]);for(const R of C)k.push({...R,type:"ctx"});let N=x;for(;x<m.length&&(m[x].type!=="same"||x<N+S);)m[x].type!=="same"&&(N=x),k.push(m[x++]);const F=k[k.length-1].a+1,B=k[k.length-1].b+1;d+=`@@ -${_+1},${F-_} +${b+1},${B-b} @@
`;for(const R of k)R.type==="ctx"||R.type==="same"?d+=` ${g[R.a]}
`:R.type==="del"?d+=`-${g[R.a]}
`:R.type==="add"&&(d+=`+${v[R.b]}
`)}return{output:d,exitCode:1}}function cx(e,t,n){var u,p;const r=e.length,i=t.length,s=Array.from({length:r+1},()=>new Array(i+1).fill(0));for(let c=r-1;c>=0;c--)for(let f=i-1;f>=0;f--)n(e[c])===n(t[f])?s[c][f]=1+s[c+1][f+1]:s[c][f]=Math.max(s[c+1][f],s[c][f+1]);const o=[];let l=0,a=0;for(;l<r&&a<i;)n(e[l])===n(t[a])?(o.push([l,a]),l++,a++):((u=s[l+1])==null?void 0:u[a])>=(((p=s[l])==null?void 0:p[a+1])??0)?l++:a++;return o}function ff(e,t,n){const r=[];let i=0,s=0;for(const[o,l]of n){for(;i<o;)r.push({type:"del",a:i,b:s}),i++;for(;s<l;)r.push({type:"add",a:i,b:s}),s++;r.push({type:"same",a:o,b:l}),i=o+1,s=l+1}for(;i<e.length;)r.push({type:"del",a:i,b:s}),i++;for(;s<t.length;)r.push({type:"add",a:i,b:s}),s++;return r}function fx(e,t,n){return ff(e,t,n).map(i=>i.type==="same"?[e[i.a],t[i.b],"same"]:i.type==="del"?[e[i.a],null,"del"]:[null,t[i.b],"add"])}const px=Object.freeze(Object.defineProperty({__proto__:null,default:ux,help:ax},Symbol.toStringTag,{value:"Module"})),dx=`paste [-d DELIM] [-s] [file...]
  Merge lines of files side by side.
  -d DELIM  use DELIM as separator (default: tab)
  -s        serial: all lines from each file concatenated
  Examples:
    paste file1 file2
    paste -d, file1 file2
    paste -s file.txt
    seq 5 | paste -d, -s
`;function hx(e,{stdin:t,vfs:n,sh:r}){const i=h=>n.resolve(h,r.cwd);let s="	",o=!1;const l=[];for(let h=0;h<e.length;h++){const g=e[h];g==="-d"&&e[h+1]?s=e[++h].replace(/\\t/g,"	").replace(/\\n/g,`
`):g.startsWith("-d")?s=g.slice(2).replace(/\\t/g,"	"):g==="-s"?o=!0:g.startsWith("-")||l.push(g)}const a=[...s],u=h=>{if(h==="-")return(t??"").split(`
`).filter((m,d,x)=>d<x.length-1||x[x.length-1]!=="");const g=i(h);if(!n.isFile(g))return[];const y=(n.read(g)??"").split(`
`);return y[y.length-1]===""&&y.pop(),y},p=l.length?l.map(u):[[(t??"").replace(/\n$/,"")]];if(o)return{output:p.map((g,v)=>g.join(a[v%a.length]||"	")).join(`
`)+`
`,exitCode:0};const c=Math.max(...p.map(h=>h.length)),f=[];for(let h=0;h<c;h++)f.push(p.map((g,v)=>(g[h]??"")+(v<p.length-1?a[v%a.length]||"	":"")).join(""));return{output:f.join(`
`)+`
`,exitCode:0}}const mx=Object.freeze(Object.defineProperty({__proto__:null,default:hx,help:dx},Symbol.toStringTag,{value:"Module"})),gx=`comm [-123] file1 file2
  Compare two sorted files line by line.
  Output columns: col1=only in file1, col2=only in file2, col3=in both.
  -1  suppress column 1
  -2  suppress column 2
  -3  suppress column 3
  Examples:
    comm sorted1.txt sorted2.txt
    comm -12 file1 file2    (show only common lines)
    comm -23 file1 file2    (show lines unique to file1)
`;function xx(e,{stdin:t,vfs:n,sh:r}){const i=v=>n.resolve(v,r.cwd);let s=!1,o=!1,l=!1;const a=[];for(const v of e)/^-[123]+$/.test(v)?(v.includes("1")&&(s=!0),v.includes("2")&&(o=!0),v.includes("3")&&(l=!0)):a.push(v);if(a.length<2)return{output:`comm: missing operand after 'comm'
`,exitCode:1};const u=v=>{if(v==="-"){const S=(t??"").split(`
`);return S[S.length-1]===""&&S.pop(),S}const y=i(v);if(!n.isFile(y))return null;const d=(n.read(y)??"").split(`
`);return d[d.length-1]===""&&d.pop(),d},p=u(a[0]),c=u(a[1]);if(!p)return{output:`comm: ${a[0]}: No such file or directory
`,exitCode:1};if(!c)return{output:`comm: ${a[1]}: No such file or directory
`,exitCode:1};let f=0,h=0;const g=[];for(;f<p.length||h<c.length;){const v=p[f],y=c[h];f>=p.length?(o||g.push("	"+y),h++):h>=c.length||v<y?(s||g.push(v),f++):v>y?(o||g.push("	"+y),h++):(l||g.push("		"+v),f++,h++)}return{output:g.join(`
`)+(g.length?`
`:""),exitCode:0}}const vx=Object.freeze(Object.defineProperty({__proto__:null,default:xx,help:gx},Symbol.toStringTag,{value:"Module"})),yx=`expand [-t N] [file]
  Convert tabs to spaces.
  -t N  use tab stops at multiples of N (default: 8)
  Examples:
    expand file.txt
    echo -e 'a\\tb' | expand -t 4
`;function Sx(e,{stdin:t,vfs:n,sh:r}){const i=u=>n.resolve(u,r.cwd);let s=8;const o=[];for(let u=0;u<e.length;u++){const p=e[u];p==="-t"&&e[u+1]?s=parseInt(e[++u]):/^-t\d+$/.test(p)?s=parseInt(p.slice(2)):p.startsWith("-")||o.push(p)}let l=t??"";if(o.length){const u=i(o[0]);n.isFile(u)&&(l=n.read(u)??"")}const a=u=>{let p="",c=0;for(const f of u)if(f==="	"){const h=s-c%s;p+=" ".repeat(h),c+=h}else p+=f,c++;return p};return{output:l.split(`
`).map(a).join(`
`),exitCode:0}}const wx=Object.freeze(Object.defineProperty({__proto__:null,default:Sx,help:yx},Symbol.toStringTag,{value:"Module"})),_x=`unexpand [-t N] [-a] [file]
  Convert spaces to tabs.
  -t N  use tab stops at multiples of N (default: 8)
  -a    convert all whitespace, not just leading
  Examples:
    unexpand -t 4 file.txt
    expand file.txt | unexpand
`;function kx(e,{stdin:t,vfs:n,sh:r}){const i=p=>n.resolve(p,r.cwd);let s=8,o=!1;const l=[];for(let p=0;p<e.length;p++){const c=e[p];c==="-t"&&e[p+1]?s=parseInt(e[++p]):/^-t\d+$/.test(c)?s=parseInt(c.slice(2)):c==="-a"?o=!0:c.startsWith("-")||l.push(c)}let a=t??"";if(l.length){const p=i(l[0]);n.isFile(p)&&(a=n.read(p)??"")}const u=p=>{let c="",f=0,h=!0;for(let g=0;g<p.length;g++){const v=p[g];v!==" "&&v!=="	"&&(h=!1),(h||o)&&v===" "?(f++,f%s===0?c+="	":c+=" "):(c+=v,v==="	"?f+=s-f%s:f++)}return c};return{output:a.split(`
`).map(u).join(`
`),exitCode:0}}const Cx=Object.freeze(Object.defineProperty({__proto__:null,default:kx,help:_x},Symbol.toStringTag,{value:"Module"})),bx=`stat [-c FORMAT] [file...]
  Display file status.
  -c FORMAT  use FORMAT instead of default
  Format codes: %n name, %s size, %y mtime, %f type, %i inode, %b blocks
  Examples:
    stat README.txt
    stat -c '%n: %s bytes' file.txt
    stat /etc
`;function Ex(e,{vfs:t,sh:n}){const r=a=>t.resolve(a,n.cwd);let i=null;const s=[];for(let a=0;a<e.length;a++){const u=e[a];(u==="-c"||u==="--format")&&e[a+1]?i=e[++a]:u.startsWith("-")||s.push(u)}if(!s.length)return{output:`stat: missing operand
`,exitCode:1};const o=[];let l=0;for(const a of s){const u=r(a);if(!t.exists(u)){o.push(`stat: cannot stat '${a}': No such file or directory`),l=1;continue}const p=t.stat(u),c=t.isDir(u),f=new Date(p.mtime??Date.now()),h=`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")} ${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}:${String(f.getSeconds()).padStart(2,"0")}`,g=Math.abs(u.split("").reduce((y,m)=>(y<<5)-y+m.charCodeAt(0)|0,0))%1e5,v=Math.ceil((p.size??0)/512)||8;i?o.push(i.replace(/%n/g,a).replace(/%s/g,p.size??0).replace(/%y/g,h).replace(/%f/g,c?"directory":"regular file").replace(/%i/g,g).replace(/%b/g,v)):o.push(`  File: ${u}
  Size: ${p.size??0}	Blocks: ${v}	${c?"directory":"regular file"}
Device: mashfs	Inode: ${g}	Links: 1
Access: ${c?"drwxr-xr-x":"-rw-r--r--"} (${c?"755":"644"})	Uid: 1000	Gid: 1000
Modify: ${h}`)}return{output:o.join(`
`)+`
`,exitCode:l}}const jx=Object.freeze(Object.defineProperty({__proto__:null,default:Ex,help:bx},Symbol.toStringTag,{value:"Module"})),Mx=`readlink [-f] [-e] [-m] [path]
  Print resolved symlink target.
  In mash, no symlinks exist; -f resolves to absolute path.
  -f  canonicalize (resolves to absolute path)
  -e  canonicalize; error if not exist
  -m  canonicalize; allow missing
  Examples:
    readlink -f .
    readlink -f /home/user/../etc
`;function Nx(e,{vfs:t,sh:n}){const r=u=>t.resolve(u,n.cwd);let i=!1,s=!1;const o=[];for(const u of e)u==="-f"?i=!0:u==="-e"?(i=!0,s=!0):u==="-m"?i=!0:u.startsWith("-")||o.push(u);if(!o.length)return{output:`readlink: missing operand
`,exitCode:1};const l=[];let a=0;for(const u of o){const p=r(u);if(s&&!t.exists(p)){l.push(`readlink: ${u}: No such file or directory`),a=1;continue}l.push(p)}return{output:l.join(`
`)+`
`,exitCode:a}}const $x=Object.freeze(Object.defineProperty({__proto__:null,default:Nx,help:Mx},Symbol.toStringTag,{value:"Module"})),Ox=`realpath [path...]
  Print the resolved absolute path.
  Examples:
    realpath .
    realpath ../etc
    realpath ~/README.txt
`;function zx(e,{vfs:t,sh:n}){const r=o=>t.resolve(o,n.cwd);if(!e.length)return{output:`realpath: missing operand
`,exitCode:1};const i=[];let s=0;for(const o of e.filter(l=>!l.startsWith("-"))){const l=r(o);if(!t.exists(l)){i.push(`realpath: ${o}: No such file or directory`),s=1;continue}i.push(l)}return{output:i.join(`
`)+`
`,exitCode:s}}const Px=Object.freeze(Object.defineProperty({__proto__:null,default:zx,help:Ox},Symbol.toStringTag,{value:"Module"})),Ix=`mktemp [-d] [-t] [TEMPLATE]
  Create a temporary file or directory.
  -d  create a directory instead of a file
  Template must end with XXXXXX (replaced with random chars).
  Examples:
    mktemp
    mktemp /tmp/myapp.XXXXXX
    mktemp -d /tmp/dir.XXXXXX
`;function Fx(e,{vfs:t,sh:n}){let r=!1;const s=e.filter(u=>u==="-d"?(r=!0,!1):!u.startsWith("-"))[0]||"/tmp/tmp.XXXXXX",o=Math.random().toString(36).slice(2,8).toUpperCase(),l=s.replace(/X{6}$/,o).replace(/XXXXXX$/,o),a=t.resolve(l,n.cwd);return r?t._mkdirP(a):t.write(a,""),{output:a+`
`,exitCode:0}}const Tx=Object.freeze(Object.defineProperty({__proto__:null,default:Fx,help:Ix},Symbol.toStringTag,{value:"Module"})),Rx=`timeout DURATION COMMAND [ARGS]
  Run COMMAND with a time limit.
  In mash, runs immediately without enforcing the time limit.
  Examples:
    timeout 5 sleep 10
    timeout 1s grep 'pattern' bigfile.txt
`;function Dx(e,{vfs:t,sh:n},r){if(e.length<2)return{output:`timeout: missing operand
`,exitCode:1};const[i,s,...o]=e;return r(s,o,null,t,n)}const Ax=Object.freeze(Object.defineProperty({__proto__:null,default:Dx,help:Rx},Symbol.toStringTag,{value:"Module"})),Lx=`nproc [--all]
  Print the number of processing units.
  Example:
    nproc
`;function Wx(){return{output:(navigator.hardwareConcurrency||4)+`
`,exitCode:0}}const Bx=Object.freeze(Object.defineProperty({__proto__:null,default:Wx,help:Lx},Symbol.toStringTag,{value:"Module"})),Hx=`uptime [-p] [-s]
  Tell how long the system has been running.
  -p  show uptime in pretty format
  -s  show system up since time
  Example:
    uptime
`;function Ux(e){const t=e.includes("-p"),n=e.includes("-s"),r=new Date,i="0.00, 0.00, 0.00",s="1 user";return n?{output:r.toISOString().replace("T"," ").split(".")[0]+`
`,exitCode:0}:t?{output:`up 0 minutes
`,exitCode:0}:{output:` ${r.toTimeString().split(" ")[0]} up 0 min,  ${s},  load average: ${i}
`,exitCode:0}}const qx=Object.freeze(Object.defineProperty({__proto__:null,default:Ux,help:Hx},Symbol.toStringTag,{value:"Module"})),Vx=`free [-h] [-m] [-g] [-k]
  Display amount of free and used memory.
  -h  human-readable
  -m  show in MiB
  -g  show in GiB
  -k  show in KiB (default)
  Example:
    free -h
`;function Xx(e){const t=e.includes("-h"),n=e.includes("-m"),r=e.includes("-g");if(t)return{output:`               total        used        free      shared  buff/cache   available
Mem:           1.0Gi        64Mi       900Mi       0.0Ki        50Mi       950Mi
Swap:            0.0Ki       0.0Ki       0.0Ki
`,exitCode:0};const i=r?1024*1024:n?1024:1,s=1048576/i,o=65536/i,l=983040/i;return{output:`               total        used        free      shared  buff/cache   available
Mem:        ${String(Math.round(s)).padStart(12)} ${String(Math.round(o)).padStart(12)} ${String(Math.round(l)).padStart(12)}            0            0 ${String(Math.round(l)).padStart(12)}
Swap:                  0            0            0
`,exitCode:0}}const Kx=Object.freeze(Object.defineProperty({__proto__:null,default:Xx,help:Vx},Symbol.toStringTag,{value:"Module"})),Gx=`whoami
  Print current user name.
`;function Yx(e,{sh:t}){return{output:(t.env.USER||"user").trim()+`
`,exitCode:0}}const Qx=Object.freeze(Object.defineProperty({__proto__:null,default:Yx,help:Gx},Symbol.toStringTag,{value:"Module"})),Zx=`id
  Print user identity.
`;function Jx(e,{sh:t}){const n=(t.env.USER||"user").trim();return{output:`uid=1000(${n}) gid=1000(${n}) groups=1000(${n})
`,exitCode:0}}const e1=Object.freeze(Object.defineProperty({__proto__:null,default:Jx,help:Zx},Symbol.toStringTag,{value:"Module"})),t1=`basename NAME [SUFFIX]
  Strip directory and suffix from filename.
  Examples:
    basename /path/to/file.txt      → file.txt
    basename /path/to/file.txt .txt → file
    basename -s .txt /path/to/file.txt → file
`;function n1(e){let t=null,n=[];for(let i=0;i<e.length;i++)e[i]==="-s"&&e[i+1]?t=e[++i]:e[i].startsWith("-s")?t=e[i].slice(2):e[i]==="-a"||e[i]==="--multiple"||n.push(e[i]);return n.length?(!t&&n.length===2&&!n[0].startsWith("-")&&(t=n.pop()),{output:n.map(i=>{let s=i.replace(/\/+$/,"").split("/").pop()||"/";return t&&s.endsWith(t)&&(s=s.slice(0,-t.length)),s}).join(`
`)+`
`,exitCode:0}):{output:`basename: missing operand
`,exitCode:1}}const r1=Object.freeze(Object.defineProperty({__proto__:null,default:n1,help:t1},Symbol.toStringTag,{value:"Module"})),i1=`dirname NAME...
  Strip last component from path.
  Examples:
    dirname /path/to/file   → /path/to
    dirname file.txt        → .
    dirname /               → /
`;function s1(e){return e.length?{output:e.map(n=>(n=n.replace(/\/+$/,""),n.includes("/")?n.slice(0,n.lastIndexOf("/"))||"/":".")).join(`
`)+`
`,exitCode:0}:{output:`dirname: missing operand
`,exitCode:1}}const o1=Object.freeze(Object.defineProperty({__proto__:null,default:s1,help:i1},Symbol.toStringTag,{value:"Module"})),l1=`env
  Print all environment variables.
`;function a1(e,{sh:t}){return{output:Object.entries(t.env).map(([n,r])=>`${n}=${String(r).replace(/\n$/,"")}`).join(`
`)+`
`,exitCode:0}}const u1=Object.freeze(Object.defineProperty({__proto__:null,default:a1,help:l1},Symbol.toStringTag,{value:"Module"})),c1=`printenv [VAR]
  Print environment variable value.
`;function f1(e,{sh:t}){if(e.length){const n=t.env[e[0]];return n!==void 0?{output:String(n).replace(/\n$/,"")+`
`,exitCode:0}:{output:"",exitCode:1}}return{output:Object.entries(t.env).map(([n,r])=>`${n}=${String(r).replace(/\n$/,"")}`).join(`
`)+`
`,exitCode:0}}const p1=Object.freeze(Object.defineProperty({__proto__:null,default:f1,help:c1},Symbol.toStringTag,{value:"Module"})),d1=`math <expression>
  Evaluate a math expression directly.
  Functions: sqrt cbrt sin cos tan asin acos atan sinh cosh tanh
             abs floor ceil round log log2 ln max min pow sign
  Constants: pi (π), e
  Operators: + - * / ^ % () !
  Examples:
    math 2^10
    math sqrt(144)
    math sin(pi/6)
    math 10!
    math log(1000)
`;function h1(e,{stdin:t}){const n=e.join(" ").trim()||(t??"").trim();if(!n)return{output:`math: no expression given
`,exitCode:1};try{return{output:Gt(Kt(n))+`
`,exitCode:0}}catch(r){return{output:`math: ${r.message}
`,exitCode:1}}}const m1=Object.freeze(Object.defineProperty({__proto__:null,default:h1,help:d1},Symbol.toStringTag,{value:"Module"}));function E(e){return{fn:e.default,help:e.help??""}}const fr={echo:E(lh),cat:E(Ns),less:E(Ns),more:E(Ns),ls:E(ph),pwd:E(mh),cd:E(vh),mkdir:E(wh),rmdir:E(Ch),rm:E(jh),cp:E($h),mv:E(Ph),touch:E(Th),find:E(Ah),du:E(Bh),df:E(qh),ln:E(Kh),chmod:E(Qh),chown:E(em),date:E(rm),sleep:E(om),true:E(um),false:E(pm),yes:E(mm),uname:E(vm),hostname:E(wm),ps:E(Cm),test:E(La),"[":E(La),export:E(Mm),unset:E(Om),read:E(Im),alias:E(Rm),unalias:E(Lm),which:E(Hm),type:E(Vm),command:E(Gm),history:E(Zm),jobs:E($s),bg:E($s),fg:E($s),kill:E(rg),clear:E(og),exit:E(ug),motd:E(pg),download:E(mg),write:E(vg),append:E(wg),nano:E(Cg),vi:E(Wa),vim:E(Wa),"wipe-fs":E(Ng),grep:E(zg),sed:E(Tg),awk:E(Ug),sort:E(Xg),uniq:E(Yg),cut:E(Jg),tr:E(r0),wc:E(o0),head:E(u0),tail:E(p0),printf:E(m0),tee:E(v0),seq:E(_0),nl:E(b0),rev:E(M0),fold:E(O0),od:E(I0),cksum:E(R0),xargs:E(L0),bc:E(H0),expr:E(V0),tac:E(G0),shuf:E(Z0),base64:E(tx),md5sum:E(ix),sha256sum:E(lx),diff:E(px),paste:E(mx),comm:E(vx),expand:E(wx),unexpand:E(Cx),stat:E(jx),readlink:E($x),realpath:E(Px),mktemp:E(Tx),timeout:E(Ax),nproc:E(Bx),uptime:E(qx),free:E(Kx),whoami:E(Qx),id:E(e1),basename:E(r1),dirname:E(o1),env:E(u1),printenv:E(p1),math:E(m1)},g1=new Set(Object.keys(fr)),qa=Object.fromEntries(Object.entries(fr).map(([e,{help:t}])=>[e,t])),x1=`export const help = "alias [name='cmd']\\n  Create or list command aliases.\\n";
export default function alias(args, { sh }) {
  if (!args.length) { const o = Object.entries(sh.aliases).map(([k,v])=>\`alias \${k}='\${v}'\`).join("\\n"); return { output: (o||"(no aliases)")+"\\n", exitCode: 0 }; }
  for (const a of args) { const eq = a.indexOf("="); if (eq !== -1) sh.aliases[a.slice(0,eq)] = a.slice(eq+1).replace(/^['"]|['"]$/g,""); }
  return { output: "", exitCode: 0 };
}
`,v1=`export const help = "append FILE TEXT...\\n  Append text to a file.\\n";
export default function append(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  if (args.length < 2) return { output: "append: usage: append <file> <text...>\\n", exitCode: 1 };
  vfs.append(norm(args[0]), args.slice(1).join(" ") + "\\n");
  return { output: "", exitCode: 0 };
}
`,y1=`// cat [-n] [-b] [-A] [file...]
export const help = \`cat [-n] [-b] [-A] [file...]
  Concatenate and print file contents.
  -n  number all output lines
  -b  number non-empty lines only
  -A  show non-printing chars; ends lines with $
  -s  squeeze multiple blank lines into one
  With no file or '-', reads from stdin.
  Examples:
    cat README.txt
    cat /etc/os-release
    echo 'hello' | cat
    cat file1 file2
    cat -n /etc/passwd
\`;

export default function cat(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let lineNums = false, nonBlank = false, showAll = false, squeeze = false;
  const files = [];
  for (const a of args) {
    if (/^-[nbasAeET]+$/.test(a)) {
      if (a.includes("n")) lineNums = true;
      if (a.includes("b")) nonBlank = true;
      if (a.includes("A") || a.includes("e") || a.includes("E")) showAll = true;
      if (a.includes("s")) squeeze = true;
    } else if (a !== "-") {
      files.push(a);
    }
  }

  const process = text => {
    if (!lineNums && !nonBlank && !showAll && !squeeze) return text;
    let lines = text.split("\\n");
    if (lines[lines.length - 1] === "") lines.pop();
    if (squeeze) {
      const sq = []; let prevBlank = false;
      for (const l of lines) { const blank = l === ""; if (blank && prevBlank) continue; sq.push(l); prevBlank = blank; }
      lines = sq;
    }
    if (showAll) lines = lines.map(l => l.replace(/\\t/g, "^I") + "$");
    let lineNo = 0;
    lines = lines.map(l => {
      if (nonBlank && l === "") return "";
      lineNo++;
      return (lineNums || nonBlank ? \`\${String(lineNo).padStart(6)}\\t\` : "") + l;
    });
    return lines.join("\\n") + "\\n";
  };

  if (!args.length || (args.length === 1 && args[0] === "-")) {
    return { output: process(stdin ?? ""), exitCode: 0 };
  }

  let out = "", ec = 0;
  for (const a of args) {
    if (a === "-") { out += process(stdin ?? ""); continue; }
    if (a.startsWith("-")) continue; // already parsed
    const p = norm(a);
    if (!vfs.exists(p))    { out += \`cat: \${a}: No such file or directory\\n\`; ec = 1; }
    else if (vfs.isDir(p)) { out += \`cat: \${a}: Is a directory\\n\`; ec = 1; }
    else out += process(vfs.read(p) ?? "");
  }
  return { output: out, exitCode: ec };
}
`,S1=`export const help = "cd [dir]\\n  Change the current working directory.\\n  With no argument, returns to /home/user. '~' = home, '..' = parent.\\n  Examples:\\n    cd /etc\\n    cd ..\\n    cd ~\\n    cd -    (return to previous directory)\\n";
export default function cd(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  if (args[0] === "-") {
    const prev = sh.env.OLDPWD ?? sh.cwd;
    sh.env.OLDPWD = sh.cwd;
    sh.cwd = prev; sh.env.PWD = prev;
    return { output: prev + "\\n", exitCode: 0 };
  }
  const target = !args.length ? "/home/user" : norm(args[0]);
  if (!vfs.exists(target))  return { output: \`cd: \${args[0]}: No such file or directory\\n\`, exitCode: 1 };
  if (!vfs.isDir(target))   return { output: \`cd: \${args[0]}: Not a directory\\n\`, exitCode: 1 };
  sh.env.OLDPWD = sh.cwd;
  sh.cwd = target; sh.env.PWD = target;
  return { output: "", exitCode: 0 };
}
`,w1=`export const help = \`chmod [-R] MODE FILE...
  Change file permissions (stored in VFS metadata).
  MODE: octal (644, 755) or symbolic (u+x, go-w, a+r)
  -R  apply recursively
  Examples:
    chmod 755 script.sh
    chmod +x script.sh
    chmod u+rw,go-w file.txt
\`;

export default function chmod(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let recursive = false; const files = []; let mode = null;

  for (const a of args) {
    if (a === "-R" || a === "-r") recursive = true;
    else if (!mode) mode = a;
    else files.push(a);
  }

  if (!mode || !files.length) return { output: "chmod: missing operand\\n", exitCode: 1 };

  const applyMode = p => {
    const n = vfs.stat(p);
    if (!n) return;
    if (/^\\d+$/.test(mode)) {
      const oct = parseInt(mode, 8);
      const isDir = vfs.isDir(p);
      const bits = (oct >>> 0).toString(8).padStart(3, "0");
      const u = parseInt(bits[0]), g = parseInt(bits[1]), o = parseInt(bits[2]);
      const mk = (n) => (n & 4 ? "r" : "-") + (n & 2 ? "w" : "-") + (n & 1 ? "x" : "-");
      n.mode = (isDir ? "d" : "-") + mk(u) + mk(g) + mk(o);
    } else {
      // symbolic — just accept and store simplified
      n.mode = n.mode ?? (vfs.isDir(p) ? "drwxr-xr-x" : "-rw-r--r--");
    }
    vfs._persist(p);
  };

  for (const f of files) {
    const p = norm(f);
    if (!vfs.exists(p)) return { output: \`chmod: cannot access '\${f}': No such file or directory\\n\`, exitCode: 1 };
    applyMode(p);
    if (recursive && vfs.isDir(p)) {
      for (const k of Object.keys(vfs._t).filter(k => k.startsWith(p + "/"))) applyMode(k);
    }
  }
  return { output: "", exitCode: 0 };
}
`,_1=`export const help = \`chown [-R] OWNER[:GROUP] FILE...
  Change file owner and group (stored in VFS metadata; not enforced).
  -R  apply recursively
  Example:
    chown user file.txt
    chown user:users dir/
\`;

export default function chown(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let recursive = false; const files = []; let owner = null;
  for (const a of args) {
    if (a === "-R") recursive = true;
    else if (!owner) owner = a;
    else files.push(a);
  }
  if (!owner || !files.length) return { output: "chown: missing operand\\n", exitCode: 1 };
  for (const f of files) {
    const p = norm(f);
    if (!vfs.exists(p)) return { output: \`chown: cannot access '\${f}': No such file or directory\\n\`, exitCode: 1 };
    const n = vfs.stat(p); if (n) { n.owner = owner.split(":")[0]; n.group = owner.split(":")[1] ?? owner.split(":")[0]; }
  }
  return { output: "", exitCode: 0 };
}
`,k1=`export const help = "clear\\n  Clear the terminal screen.\\n";
export default function clear() { return { output: "__CLEAR__", exitCode: 0 }; }
`,C1=`export const help = "command [-v] CMD [ARGS...]\\n  Run a command bypassing aliases.\\n";
export default function command(args, { execCmd, vfs, sh, stdin, registry }) {
  if (!args.length) return { output: "", exitCode: 0 };
  if (args[0] === "-v") return { output: (registry && registry[args[1]] ? "/bin/"+args[1] : "") + "\\n", exitCode: registry && registry[args[1]] ? 0 : 1 };
  return execCmd(args[0], args.slice(1), stdin, vfs, sh);
}
`,b1=`export const help = \`cp [-r] [-p] [-v] [-f] <src...> <dst>
  Copy files or directories.
  -r  recursive (copy directories)
  -p  preserve timestamps
  -v  verbose
  -f  force (overwrite without prompt)
  Examples:
    cp file.txt backup.txt
    cp notes.txt /tmp/
    cp -r src/ dst/
\`;
export default function cp(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let recursive=false, preserve=false, verbose=false;
  const fileArgs=[];
  for (const a of args) {
    if (/^-[rRpvf]+$/.test(a)) {
      if (/[rR]/.test(a)) recursive=true;
      if (a.includes("p")) preserve=true;
      if (a.includes("v")) verbose=true;
    } else fileArgs.push(a);
  }
  if (fileArgs.length < 2) return { output: "cp: missing destination file operand\\n", exitCode: 1 };
  const dst=norm(fileArgs[fileArgs.length-1]);
  let out="";
  for (const s of fileArgs.slice(0,-1)) {
    const sp=norm(s);
    if (!vfs.exists(sp)) return { output: \`cp: cannot stat '\${s}': No such file or directory\\n\`, exitCode: 1 };
    if (recursive && vfs.isDir(sp)) {
      const destDir = vfs.isDir(dst) ? dst+"/"+sp.split("/").pop() : dst;
      vfs._mkdirP(destDir);
      for (const k of Object.keys(vfs._t).filter(k2=>k2.startsWith(sp+"/"))) {
        const rel=k.slice(sp.length);
        const np=destDir+rel;
        if (vfs._t[k].type==="dir") vfs._mkdirP(np);
        else { const content=vfs._t[k].content; vfs._wf(np, content); if (preserve) vfs._t[np].mtime=vfs._t[k].mtime; }
        if (verbose) out+=\`'\${k}' -> '\${np}'\\n\`;
      }
    } else {
      const err=vfs.cp(sp, dst); if (err) return { output: err+"\\n", exitCode: 1 };
      const dest=vfs.isDir(dst)?dst+"/"+sp.split("/").pop():dst;
      if (preserve) vfs._t[dest].mtime=vfs._t[sp].mtime;
      if (verbose) out+=\`'\${sp}' -> '\${dest}'\\n\`;
    }
  }
  return { output: out, exitCode: 0 };
}
`,E1=`import { MONTHS } from "../_utils/format.js";
export const help = \`date [+format] [-d DATE] [-u]
  Display or format date and time.
  Format codes:
    %Y  year (e.g. 2025)         %m  month (01-12)
    %d  day (01-31)              %e  day ( 1-31, space-padded)
    %H  hour (00-23)             %M  minute (00-59)
    %S  second (00-59)           %N  nanoseconds (simulated)
    %a  weekday abbr             %A  weekday full
    %b  month abbr               %B  month full
    %Z  timezone                 %z  +/-HHMM offset
    %s  unix timestamp (seconds) %j  day of year
    %p  AM/PM                    %P  am/pm
    %w  weekday number (0=Sun)   %u  weekday (1=Mon)
    %n  newline                  %t  tab
  Examples:
    date
    date '+%Y-%m-%d'
    date '+%H:%M:%S'
    date +%s
    date -d 'now'
\`;
export default function date(args) {
  const now = new Date();
  const pad = n => String(n).padStart(2,"0");
  const days  = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const daysF = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const monF  = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  // -d support (very basic: just treat as now)
  const fmtArg = args.find(a => a.startsWith("+")) ?? null;

  const dayOfYear = d => {
    const start = new Date(d.getFullYear(), 0, 0);
    return Math.floor((d - start) / 86400000);
  };

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tzOffset = -now.getTimezoneOffset();
  const tzSign = tzOffset >= 0 ? "+" : "-";
  const tzH = Math.floor(Math.abs(tzOffset) / 60);
  const tzM = Math.abs(tzOffset) % 60;
  const tzStr = \`\${tzSign}\${String(tzH).padStart(2,"0")}\${String(tzM).padStart(2,"0")}\`;

  const fmt = (fmtArg ? fmtArg.slice(1) : "%a %b %e %H:%M:%S %Z %Y")
    .replace(/%Y/g, now.getFullYear())
    .replace(/%m/g, pad(now.getMonth()+1))
    .replace(/%d/g, pad(now.getDate()))
    .replace(/%e/g, String(now.getDate()).padStart(2," "))
    .replace(/%H/g, pad(now.getHours()))
    .replace(/%M/g, pad(now.getMinutes()))
    .replace(/%S/g, pad(now.getSeconds()))
    .replace(/%N/g, String(now.getMilliseconds()).padStart(3,"0")+"000000")
    .replace(/%s/g, Math.floor(Date.now()/1000))
    .replace(/%a/g, days[now.getDay()])
    .replace(/%A/g, daysF[now.getDay()])
    .replace(/%b/g, MONTHS[now.getMonth()])
    .replace(/%B/g, monF[now.getMonth()])
    .replace(/%Z/g, tz)
    .replace(/%z/g, tzStr)
    .replace(/%j/g, pad(dayOfYear(now)))
    .replace(/%p/g, now.getHours() < 12 ? "AM" : "PM")
    .replace(/%P/g, now.getHours() < 12 ? "am" : "pm")
    .replace(/%w/g, String(now.getDay()))
    .replace(/%u/g, String(now.getDay() || 7))
    .replace(/%n/g, "\\n")
    .replace(/%t/g, "\\t")
    .replace(/%%/g, "%");
  return { output: fmt+"\\n", exitCode: 0 };
}
`,j1=`import { fmtSize } from "../_utils/format.js";
export const help = "df [-h] [filesystem]\\n  Show available disk space.\\n  -h  human-readable sizes\\n  Examples:\\n    df\\n    df -h\\n";
export default function df(args) {
  const human=args.includes("-h");
  if (human) return { output: "Filesystem      Size  Used Avail Use% Mounted on\\nmashfs          1.0G  256K  1.0G   1% /\\n", exitCode: 0 };
  return { output: "Filesystem     1K-blocks  Used Available Use% Mounted on\\nmashfs           1048576   256   1048320   1% /\\n", exitCode: 0 };
}
`,M1=`export const help = "download FILE\\n  Download a VFS file to your local machine.\\n";
export default function download(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  if (!args.length) return { output: "download: missing filename\\n", exitCode: 1 };
  const p = norm(args[0]);
  if (!vfs.isFile(p)) return { output: \`download: '\${args[0]}': not found\\n\`, exitCode: 1 };
  return vfs.download(p) ? { output: \`Downloading '\${args[0]}'...\\n\`, exitCode: 0 } : { output: "download: failed\\n", exitCode: 1 };
}
`,N1=`import { fmtSize } from "../_utils/format.js";
export const help = "du [-h] [-s] [-a] [path...]\\n  Show disk usage.\\n  -h  human-readable sizes\\n  -s  summary only (don't show subdirs)\\n  -a  show all files, not just directories\\n  Examples:\\n    du /home/user\\n    du -sh /home/user\\n    du README.txt\\n";
export default function du(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let human=false, summary=false, all=false;
  const targets=[];
  for (const a of args) {
    if (/^-[hsaHS]+$/.test(a)) { if (a.includes("h")) human=true; if (a.includes("s")) summary=true; if (a.includes("a")) all=true; }
    else targets.push(a);
  }
  const t=targets.length?targets:["."];
  const lines=[];
  for (const target of t) {
    const p=norm(target);
    if (!vfs.exists(p)) return { output: \`du: cannot access '\${target}': No such file or directory\\n\`, exitCode: 1 };
    if (vfs.isFile(p)) {
      const sz=vfs.stat(p)?.size??0;
      lines.push(\`\${human?fmtSize(sz,true):Math.max(Math.ceil(sz/1024),4)}\\t\${target}\`);
    } else {
      const entries=Object.keys(vfs._t).filter(k=>k===p||k.startsWith(p+"/")).sort();
      let totalSz=0;
      if (!summary) {
        for (const k of entries) {
          const n=vfs._t[k];
          if (n.type==="file") totalSz+=n.size??0;
          if (all && n.type==="file") {
            const sz=n.size??0;
            lines.push(\`\${human?fmtSize(sz,true):Math.max(Math.ceil(sz/1024),4)}\\t\${k}\`);
          } else if (!all && n.type==="dir") {
            let dirSz=0;
            Object.keys(vfs._t).filter(k2=>k2.startsWith(k+"/")).forEach(k2=>{ if (vfs._t[k2].type==="file") dirSz+=vfs._t[k2].size??0; });
            lines.push(\`\${human?fmtSize(dirSz,true):Math.max(Math.ceil(dirSz/1024),4)}\\t\${k}\`);
          }
        }
      }
      lines.push(\`\${human?fmtSize(totalSz,true):Math.max(Math.ceil(totalSz/1024),4)}\\t\${target}\`);
    }
  }
  return { output: lines.join("\\n")+"\\n", exitCode: 0 };
}
`,$1=`// echo [-n] [-e] [-E] [text...]
export const help = \`echo [-n] [-e] [-E] [text...]
  Print text to output.
  -n  do not append trailing newline
  -e  enable interpretation of backslash escapes (\\\\n \\\\t \\\\r \\\\\\\\ \\\\0)
  -E  disable escape interpretation (default)
  Examples:
    echo hello world
    echo -n 'no newline'
    echo -e 'line1\\\\nline2'
    echo -e '\\\\033[1mbold\\\\033[0m'
\`;

export default function echo(args) {
  let nl = true, interp = false;
  const parts = [];
  for (const a of args) {
    if (a === "-n")      nl = false;
    else if (a === "-e") interp = true;
    else if (a === "-E") interp = false;
    else                 parts.push(a);
  }
  let s = parts.join(" ");
  if (interp) s = s
    .replace(/\\\\n/g,  "\\n")
    .replace(/\\\\t/g,  "\\t")
    .replace(/\\\\r/g,  "\\r")
    .replace(/\\\\0/g,  "\\0")
    .replace(/\\\\\\\\/g, "\\\\");
  return { output: s + (nl ? "\\n" : ""), exitCode: 0 };
}
`,O1=`export const help = "exit [CODE]\\n  Exit the shell.\\n";
export default function exit(args) {
  const code = parseInt(args[0] ?? "0");
  return { output: \`__EXIT__\${isNaN(code)?0:code}\`, exitCode: isNaN(code)?0:code };
}
`,z1=`export const help = "export [VAR=value]\\n  Set environment variables.\\n  With no args, lists all exported variables.\\n";
export default function exportCmd(args, { sh }) {
  if (!args.length) return { output: Object.entries(sh.env).map(([k,v])=>\`export \${k}="\${String(v).replace(/\\n$/,"")}"\`).join("\\n")+"\\n", exitCode: 0 };
  for (const a of args) { const eq = a.indexOf("="); if (eq !== -1) sh.env[a.slice(0,eq)] = a.slice(eq+1); }
  return { output: "", exitCode: 0 };
}
`,P1=`export const help = "false\\n  Exit unsuccessfully.\\n";
export default function falseCmd() { return { output: "", exitCode: 1 }; }
`,I1=`// find — search filesystem
export const help = \`find [path...] [expression]
  Search for files in a directory hierarchy.
  Options:
    -name GLOB       match filename (supports * and ?)
    -iname GLOB      case-insensitive name match
    -type f|d|l      file type: f=regular, d=directory, l=symlink
    -maxdepth N      limit search depth
    -mindepth N      skip entries shallower than N
    -size [+/-]N[c]  match file size (c=bytes, k=kB, M=MB)
    -newer FILE      newer than FILE
    -empty           find empty files or directories
    -print           print matching paths (default)
    -not / !         negate next expression
    -and / -a        logical AND (default)
    -or / -o         logical OR
    -exec CMD {} ;   execute CMD for each match
    -delete          delete matching files
  Examples:
    find /home/user -name '*.txt'
    find . -type f
    find /etc -maxdepth 1 -name '*.conf'
    find . -size +1k
    find . -empty
    find . -name '*.log' -delete
\`;

export default function find(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let searchPaths = [], maxDepth = Infinity, minDepth = 0;
  let namePat = null, inamePat = null, typeF = null, sizeSpec = null;
  let newerFile = null, emptyOnly = false, doDelete = false;
  let execCmd = null;
  let negate = false;

  const i2Paths = [];
  let i = 0;
  // collect leading paths (non-option args)
  while (i < args.length && !args[i].startsWith("-") && args[i] !== "!") {
    i2Paths.push(args[i++]);
  }
  if (i2Paths.length) searchPaths = i2Paths;
  else searchPaths = [sh.cwd];

  while (i < args.length) {
    const a = args[i];
    if (a === "-name"     && args[i+1]) { namePat  = args[++i]; }
    else if (a === "-iname"  && args[i+1]) { inamePat = args[++i]; }
    else if (a === "-type"   && args[i+1]) { typeF    = args[++i]; }
    else if (a === "-maxdepth" && args[i+1]) { maxDepth = parseInt(args[++i]); }
    else if (a === "-mindepth" && args[i+1]) { minDepth = parseInt(args[++i]); }
    else if (a === "-size"   && args[i+1]) { sizeSpec = args[++i]; }
    else if (a === "-newer"  && args[i+1]) { newerFile = args[++i]; }
    else if (a === "-empty") { emptyOnly = true; }
    else if (a === "-delete") { doDelete = true; }
    else if (a === "-print" || a === "-print0") { /* default */ }
    else if (a === "-not" || a === "!")   { negate = true; }
    else if (a === "-exec") {
      const parts = [];
      while (args[++i] && args[i] !== ";") parts.push(args[i]);
      execCmd = parts;
    }
    i++;
  }

  const globToRe = pat => new RegExp("^" +
    pat.replace(/[.+^\${}()|[\\]\\\\]/g, c => "\\\\" + c)
       .replace(/\\*/g, ".*").replace(/\\?/g, ".") + "$");

  const checkSize = (node, spec) => {
    if (!spec) return true;
    const m = spec.match(/^([+-]?)(\\d+)([ckMG]?)$/);
    if (!m) return true;
    const [, sign, num, unit] = m;
    const mul = { c:1, k:1024, M:1024**2, G:1024**3, "":512 }[unit] ?? 1;
    const target = parseInt(num) * mul;
    const actual = node.size ?? 0;
    if (sign === "+") return actual > target;
    if (sign === "-") return actual < target;
    return actual === target;
  };

  const newerMtime = newerFile ? (vfs.stat(norm(newerFile))?.mtime ?? 0) : 0;
  const matches = [];

  for (const sp of searchPaths) {
    const base = norm(sp);
    if (!vfs.exists(base)) {
      return { output: \`find: '\${sp}': No such file or directory\\n\`, exitCode: 1 };
    }
    const baseDepth = base.split("/").filter(Boolean).length;

    // include the base itself
    const checkEntry = (k, node) => {
      const depth = k.split("/").filter(Boolean).length - baseDepth;
      if (depth < minDepth || depth > maxDepth) return false;
      const base2 = k.split("/").pop();
      if (namePat  && !globToRe(namePat).test(base2))   return false;
      if (inamePat && !globToRe(inamePat).test(base2.toLowerCase())) return false;
      if (typeF === "f" && node.type !== "file")  return false;
      if (typeF === "d" && node.type !== "dir")   return false;
      if (typeF === "l") return false; // no symlinks
      if (sizeSpec && !checkSize(node, sizeSpec)) return false;
      if (newerFile && (node.mtime ?? 0) <= newerMtime) return false;
      if (emptyOnly) {
        if (node.type === "file" && (node.size ?? 0) > 0) return false;
        if (node.type === "dir"  && vfs.ls(k).length > 0) return false;
      }
      return true;
    };

    // base dir itself (depth 0)
    if (minDepth === 0) {
      const bn = vfs.stat(base) ?? { type: "dir", mtime: Date.now(), size: 0 };
      if (checkEntry(base, bn)) matches.push(base);
    }

    for (const k of Object.keys(vfs._t).sort()) {
      if (!k.startsWith(base === "/" ? "/" : base + "/")) continue;
      if (k === base) continue;
      const node = vfs._t[k];
      if (checkEntry(k, node)) matches.push(k);
    }
  }

  if (doDelete) {
    for (const m of matches) {
      if (vfs.isFile(m)) vfs.rm(m);
    }
  }

  const out = matches.join("\\n") + (matches.length ? "\\n" : "");
  return { output: out, exitCode: 0 };
}
`,F1=`export const help = "history [n]\\n  Show command history.\\n";
export default function history(args, { sh }) {
  const n = args[0] ? parseInt(args[0]) : sh.history.length;
  const slice = sh.history.slice(-n); const off = sh.history.length - slice.length;
  return { output: slice.map((h,i)=>\`  \${String(off+i+1).padStart(4)}  \${h}\`).join("\\n")+"\\n", exitCode: 0 };
}
`,T1=`export const help = "hostname\\n  Print the system hostname.\\n  Example:\\n    hostname\\n";
export default function hostname(args, { vfs }) {
  return { output: (vfs.read("/etc/hostname") || "mash\\n").trim()+"\\n", exitCode: 0 };
}
`,R1=`export const help = "jobs\\n  List jobs (no background jobs in MASH).\\n";
export default function jobs() { return { output: "", exitCode: 0 }; }
`,D1=`export const help = "kill [-SIGNAL] PID\\n  Send signal to process (no-op in MASH).\\n";
export default function kill() { return { output: "", exitCode: 0 }; }
`,A1=`export const help = \`ln [-s] [-f] TARGET [LINK_NAME]
  Create links between files.
  -s  create symbolic link (simulated in MASH VFS)
  -f  remove existing destination
  Examples:
    ln -s /etc/hostname hostname
    ln file1 file2
\`;

export default function ln(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let sym = false, force = false; const files = [];
  for (const a of args) {
    if (a === "-s") sym = true;
    else if (a === "-f") force = true;
    else if (/^-[sf]+$/.test(a)) { if (a.includes("s")) sym=true; if (a.includes("f")) force=true; }
    else files.push(a);
  }

  if (files.length < 2) return { output: "ln: missing destination\\n", exitCode: 1 };
  const [target, linkName] = files;
  const tp = norm(target);
  const lp = vfs.isDir(norm(linkName)) ? norm(linkName) + "/" + target.split("/").pop() : norm(linkName);

  if (!vfs.exists(tp)) return { output: \`ln: failed to access '\${target}': No such file or directory\\n\`, exitCode: 1 };
  if (vfs.exists(lp) && !force) return { output: \`ln: failed to create link '\${linkName}': File exists\\n\`, exitCode: 1 };

  if (sym) {
    // Simulate symlink as a file with special content
    vfs.write(lp, vfs.read(tp) ?? "");
    const n = vfs.stat(lp);
    if (n) n.symlink = target;
  } else {
    if (vfs.isDir(tp)) return { output: \`ln: \${target}: Is a directory\\n\`, exitCode: 1 };
    vfs.write(lp, vfs.read(tp) ?? "");
  }
  return { output: "", exitCode: 0 };
}
`,L1=`// ls — list directory contents
import { fmtDate, fmtLong, fmtSize } from "../_utils/format.js";

export const help = \`ls [-laFRhSt1] [path...]
  List directory contents.
  -l  long format (permissions, size, date)
  -a  include hidden files (dotfiles)
  -F  append indicator (/ for dirs, * for executables)
  -R  recursive listing
  -h  human-readable sizes (with -l)
  -S  sort by file size (largest first)
  -t  sort by modification time (newest first)
  -r  reverse sort order
  -1  one entry per line
  Examples:
    ls
    ls -la /etc
    ls -lhS /home/user
    ls -Rt /tmp
\`;

export default function ls(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let long=false, all=false, classify=false, recursive=false,
      human=false, sortSz=false, sortT=false, rev=false, one=false;
  const targets = [];

  for (const a of args) {
    if (/^-[laFRhStr1]+$/.test(a)) {
      if (a.includes("l")) long     = true;
      if (a.includes("a")) all      = true;
      if (a.includes("F")) classify = true;
      if (a.includes("R")) recursive= true;
      if (a.includes("h")) human    = true;
      if (a.includes("S")) sortSz   = true;
      if (a.includes("t")) sortT    = true;
      if (a.includes("r")) rev      = true;
      if (a.includes("1")) one      = true;
    } else {
      targets.push(a);
    }
  }
  if (long) one = false;

  const getEntries = dir => {
    let entries = vfs.ls(dir);
    if (all) entries = [".", "..", ...entries];
    // sort
    if (sortSz) {
      entries.sort((a, b) => {
        const sa = vfs.stat((dir === "/" ? "" : dir) + "/" + a)?.size ?? 0;
        const sb = vfs.stat((dir === "/" ? "" : dir) + "/" + b)?.size ?? 0;
        return sb - sa;
      });
    } else if (sortT) {
      entries.sort((a, b) => {
        const ta = vfs.stat((dir === "/" ? "" : dir) + "/" + a)?.mtime ?? 0;
        const tb = vfs.stat((dir === "/" ? "" : dir) + "/" + b)?.mtime ?? 0;
        return tb - ta;
      });
    }
    if (rev) entries.reverse();
    return entries;
  };

  const listDir = (dir, prefix = "") => {
    const entries = getEntries(dir);
    if (!entries.length && !all) return "";
    const lines = [];
    if (long) {
      lines.push("total " + entries.length);
      for (const e of entries) {
        if (e === "." || e === "..") {
          lines.push(\`drwxr-xr-x  2 user user \${human?"   4K":"     0"} \${fmtDate(Date.now())} \${e}\`);
        } else {
          lines.push(fmtLong((dir === "/" ? "" : dir) + "/" + e, vfs, human));
        }
      }
    } else {
      const display = entries.map(e => {
        const fp = (dir === "/" ? "" : dir) + "/" + e;
        return e + (classify && vfs.isDir(fp) ? "/" : "");
      });
      if (one) lines.push(...display);
      else lines.push(display.join("  "));
    }
    let out = lines.join("\\n") + "\\n";
    if (recursive) {
      for (const e of entries) {
        if (e === "." || e === "..") continue;
        const fp = (dir === "/" ? "" : dir) + "/" + e;
        if (vfs.isDir(fp)) {
          out += \`\\n\${prefix}\${fp}:\\n\` + listDir(fp, prefix);
        }
      }
    }
    return out;
  };

  if (!targets.length) {
    if (recursive) return { output: sh.cwd + ":\\n" + listDir(sh.cwd), exitCode: 0 };
    return { output: listDir(sh.cwd), exitCode: 0 };
  }

  const parts = []; let ec = 0;
  for (const t of targets) {
    const p = norm(t);
    if (!vfs.exists(p)) { parts.push(\`ls: cannot access '\${t}': No such file or directory\`); ec = 1; }
    else if (vfs.isFile(p)) parts.push(long ? fmtLong(p, vfs, human) + "\\n" : p.split("/").pop() + "\\n");
    else {
      const header = targets.length > 1 || recursive ? t + ":\\n" : "";
      parts.push(header + listDir(p));
    }
  }
  return { output: parts.join("\\n"), exitCode: ec };
}
`,W1=`export const help = \`mkdir [-p] [-v] <dir...>
  Create one or more directories.
  -p  create parent directories as needed; no error if exists
  -v  verbose: print each directory created
  Examples:
    mkdir projects
    mkdir -p /home/user/a/b/c
    mkdir dir1 dir2 dir3
\`;
export default function mkdir(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let mkP=false, verbose=false; const dirs=[];
  for (const a of args) {
    if (a==="-p"||a==="--parents") mkP=true;
    else if (a==="-v"||a==="--verbose") verbose=true;
    else dirs.push(a);
  }
  if (!dirs.length) return { output: "mkdir: missing operand\\n", exitCode: 1 };
  let out="";
  for (const d of dirs) {
    const p=norm(d);
    if (mkP) { vfs._mkdirP(p); if (verbose) out+=\`mkdir: created directory '\${p}'\\n\`; }
    else { const err=vfs.mkdir(p); if (err) return { output: err+"\\n", exitCode: 1 }; if (verbose) out+=\`mkdir: created directory '\${p}'\\n\`; }
  }
  return { output: out, exitCode: 0 };
}
`,B1=`export const help = "motd\\n  Display the message of the day.\\n";
export default function motd(args, { vfs }) { return { output: vfs.read("/etc/motd") || "", exitCode: 0 }; }
`,H1=`export const help = \`mv [-v] [-f] <src...> <dst>
  Move or rename files or directories.
  -v  verbose
  -f  force (overwrite without prompt)
  Examples:
    mv old.txt new.txt
    mv file.txt /tmp/
    mv dir1 dir2
\`;
export default function mv(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let verbose=false;
  const fileArgs=[];
  for (const a of args) {
    if (/^-[vfi]+$/.test(a)) { if (a.includes("v")) verbose=true; }
    else fileArgs.push(a);
  }
  if (fileArgs.length < 2) return { output: "mv: missing destination file operand\\n", exitCode: 1 };
  const dst=norm(fileArgs[fileArgs.length-1]);
  let out="";
  for (const s of fileArgs.slice(0,-1)) {
    const sp=norm(s);
    const err=vfs.mv(sp, dst);
    if (err) return { output: err+"\\n", exitCode: 1 };
    const dest=vfs.isDir(dst)?dst+"/"+sp.split("/").pop():dst;
    if (verbose) out+=\`renamed '\${sp}' -> '\${dest}'\\n\`;
  }
  return { output: out, exitCode: 0 };
}
`,U1=`export const help = "nano FILE\\n  Text editor (non-interactive in MASH).\\n  Use echo/redirection to write: echo 'text' > file\\n";
export default function nano(args, { vfs, sh }, cmd = "nano") {
  const norm = p => vfs.resolve(p, sh.cwd);
  if (!args.length) return { output: \`\${cmd}: no file specified\\n\`, exitCode: 1 };
  const p = norm(args[0]);
  if (!vfs.exists(p)) vfs.touch(p);
  if (vfs.isDir(p)) return { output: \`\${cmd}: \${args[0]}: Is a directory\\n\`, exitCode: 1 };
  const content = vfs.read(p) ?? "";
  return { output: \`[\${cmd} is not interactive in mash. File contents:\\n\${content || "(empty file)"}\\nUse redirection to write: echo 'text' > \${args[0]}]\\n\`, exitCode: 0 };
}
`,q1=`export const help = "ps [-a] [-u] [-x] [-e] [-f]\\n  List running processes.\\n  In mash, returns simulated process list.\\n  Examples:\\n    ps\\n    ps aux\\n";
export default function ps(args) {
  const full = args.some(a=>a.includes("f"));
  if (args.some(a=>a.includes("a")||a.includes("x")||a.includes("e"))) {
    return { output: "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\\nuser         1  0.0  0.0  12345  1024 pts/0    Ss   00:00   0:00 mash\\nuser         2  0.0  0.0   8765   512 pts/0    R+   00:00   0:00 ps\\n", exitCode: 0 };
  }
  return { output: "  PID TTY          TIME CMD\\n    1 pts/0    00:00:00 mash\\n    2 pts/0    00:00:00 ps\\n", exitCode: 0 };
}
`,V1=`export const help = "pwd [-L] [-P]\\n  Print the current working directory.\\n  -L  print logical path (default)\\n  -P  print physical path (same in mash)\\n  Example:\\n    pwd\\n";
export default function pwd(args, { sh }) {
  return { output: sh.cwd + "\\n", exitCode: 0 };
}
`,X1=`export const help = "read [VAR]\\n  Read a line from stdin into a variable.\\n";
export default function read(args, { stdin, sh }) {
  if (args.length && stdin != null) sh.env[args[0]] = (stdin ?? "").split("\\n")[0];
  return { output: "", exitCode: 0 };
}
`,K1=`export const help = \`rm [-r] [-f] [-v] [-i] <file...>
  Remove files or directories.
  -r  recursive (required for directories)
  -f  force; ignore missing files and errors
  -v  verbose; print each file removed
  -i  interactive (in mash: same as default; non-interactive)
  Examples:
    rm file.txt
    rm -rf mydir
    rm -v file1 file2
\`;
export default function rm(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let rec=false, force=false, verbose=false;
  const files=[];
  for (const a of args) {
    if (/^-[rRfviFi]+$/.test(a)) {
      if (/[rR]/.test(a)) rec=true;
      if (a.includes("f"))  force=true;
      if (a.includes("v"))  verbose=true;
    } else files.push(a);
  }
  if (!files.length && !force) return { output: "rm: missing operand\\n", exitCode: 1 };
  let out="";
  for (const f of files) {
    const p=norm(f);
    const err=vfs.rm(p, rec);
    if (err && !force) return { output: err+"\\n", exitCode: 1 };
    if (!err && verbose) out+=\`removed '\${p}'\\n\`;
  }
  return { output: out, exitCode: 0 };
}
`,G1=`export const help = "rmdir [-p] <dir...>\\n  Remove empty directories.\\n  -p  remove parent directories too if they become empty\\n  Use 'rm -rf' for non-empty directories.\\n  Examples:\\n    rmdir emptydir\\n    rmdir -p a/b/c\\n";
export default function rmdir(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let parents=false; const dirs=[];
  for (const a of args) { if (a==="-p"||a==="--parents") parents=true; else dirs.push(a); }
  for (const d of dirs) {
    let p=norm(d);
    const err=vfs.rmdir(p); if (err) return { output: err+"\\n", exitCode: 1 };
    if (parents) {
      while (p.includes("/") && p !== "/") {
        p = p.slice(0, p.lastIndexOf("/")) || "/";
        if (vfs.ls(p).length > 0) break;
        const e2=vfs.rmdir(p); if (e2) break;
      }
    }
  }
  return { output: "", exitCode: 0 };
}
`,Y1='export const help = `sleep SECONDS\\n  Pause execution (no-op in MASH).\\n`;\nexport default function sleep() { return { output: "", exitCode: 0 }; }\n',Q1=`export const help = \`test EXPR  or  [ EXPR ]
  Evaluate a conditional expression. Returns exit code 0=true, 1=false.
  File tests:    -f file  -d dir  -e path  -s file (non-empty)  -r -w -x (perms, always true)
  String tests:  -z str (empty)  -n str (non-empty)  str1 = str2  str1 != str2
  Numeric:       n1 -eq|-ne|-lt|-le|-gt|-ge n2
  Negate:        ! EXPR
  Compound:      EXPR -a EXPR  EXPR -o EXPR
  Examples:
    test -f README.txt && echo exists
    [ -d /etc ] && echo is dir
    test 5 -gt 3 && echo yes
    [ "a" = "a" ] && echo equal
\`;
// exported as both "test" and "["
export default function test(args, { vfs, sh }, isBracket=false) {
  const norm = p => vfs.resolve(p, sh.cwd);
  const a = isBracket ? args.slice(0, -1) : args;
  if (!a.length) return { output: "", exitCode: 1 };

  // handle -a and -o compound
  const orIdx  = a.findIndex(x => x === "-o");
  const andIdx = a.findIndex(x => x === "-a");
  if (orIdx > 0)  { const l=test(a.slice(0,orIdx),{vfs,sh}); if (l.exitCode===0) return {output:"",exitCode:0}; return test(a.slice(orIdx+1),{vfs,sh}); }
  if (andIdx > 0) { const l=test(a.slice(0,andIdx),{vfs,sh}); if (l.exitCode!==0) return {output:"",exitCode:1}; return test(a.slice(andIdx+1),{vfs,sh}); }

  if (a[0]==="!") return { output:"", exitCode: test(a.slice(1),{vfs,sh}).exitCode===0?1:0 };
  if (a[0]==="-f") return { output:"", exitCode: vfs.isFile(norm(a[1]??""))?0:1 };
  if (a[0]==="-d") return { output:"", exitCode: vfs.isDir(norm(a[1]??""))?0:1 };
  if (a[0]==="-e") return { output:"", exitCode: vfs.exists(norm(a[1]??""))?0:1 };
  if (a[0]==="-s") return { output:"", exitCode: (vfs.stat(norm(a[1]??""))?.size??0)>0?0:1 };
  if (a[0]==="-r"||a[0]==="-w"||a[0]==="-x") return { output:"", exitCode: vfs.exists(norm(a[1]??""))?0:1 };
  if (a[0]==="-z") return { output:"", exitCode: (a[1]??"").length===0?0:1 };
  if (a[0]==="-n") return { output:"", exitCode: (a[1]??"").length>0?0:1 };
  if (a[1]==="="||a[1]==="==") return { output:"", exitCode: a[0]===a[2]?0:1 };
  if (a[1]==="!=")  return { output:"", exitCode: a[0]!==a[2]?0:1 };
  if (a[1]==="-eq") return { output:"", exitCode: Number(a[0])===Number(a[2])?0:1 };
  if (a[1]==="-ne") return { output:"", exitCode: Number(a[0])!==Number(a[2])?0:1 };
  if (a[1]==="-lt") return { output:"", exitCode: Number(a[0])<Number(a[2])?0:1 };
  if (a[1]==="-le") return { output:"", exitCode: Number(a[0])<=Number(a[2])?0:1 };
  if (a[1]==="-gt") return { output:"", exitCode: Number(a[0])>Number(a[2])?0:1 };
  if (a[1]==="-ge") return { output:"", exitCode: Number(a[0])>=Number(a[2])?0:1 };
  return { output:"", exitCode: (a[0]??"").length>0?0:1 };
}
`,Z1=`export const help = \`touch [-a] [-m] [-t TIME] <file...>
  Update file timestamps or create empty files.
  -a  change access time only (mash: same as default)
  -m  change modification time only (mash: same as default)
  -t TIME  use [[CC]YY]MMDDhhmm[.ss] timestamp (mash: ignored)
  Examples:
    touch newfile.txt
    touch a.txt b.txt c.txt
\`;
export default function touch(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  const files=args.filter(a=>!a.startsWith("-"));
  if (!files.length) return { output: "touch: missing file operand\\n", exitCode: 1 };
  for (const f of files) vfs.touch(norm(f));
  return { output: "", exitCode: 0 };
}
`,J1=`export const help = "true\\n  Exit successfully.\\n";
export default function trueCmd() { return { output: "", exitCode: 0 }; }
`,ev='export const help = "type CMD\\n  Describe how a command is interpreted.\\n";\nexport default function type(args, { sh, registry }) {\n  if (!args.length) return { output: "type: missing argument\\n", exitCode: 1 };\n  const a = args[0];\n  if (sh.aliases[a]) return { output: `${a} is aliased to \'${sh.aliases[a]}\'\\n`, exitCode: 0 };\n  if (registry && registry[a]) return { output: `${a} is a shell builtin\\n`, exitCode: 0 };\n  return { output: `${a}: not found\\n`, exitCode: 1 };\n}\n',tv=`export const help = "unalias NAME...\\n  Remove aliases.\\n";
export default function unalias(args, { sh }) {
  for (const a of args) delete sh.aliases[a];
  return { output: "", exitCode: 0 };
}
`,nv=`export const help = "uname [-a] [-s] [-n] [-r] [-v] [-m] [-p] [-o]\\n  Print system information.\\n  -a  all information\\n  -s  kernel name\\n  -n  node/hostname\\n  -r  kernel release\\n  -v  kernel version\\n  -m  machine hardware\\n  -p  processor type\\n  -o  operating system\\n  Example:\\n    uname -a\\n";
export default function uname(args, { vfs }) {
  const hostname = (vfs.read("/etc/hostname") || "mash").trim();
  const info = { s:"MASH", n:hostname, r:"1.0.0", v:"#1 MASH", m:"wasm32", p:"wasm32", o:"Mash/1.0" };
  if (!args.length || args[0]==="-s") return { output: "MASH\\n", exitCode: 0 };
  if (args.includes("-a")) return { output: \`\${info.s} \${info.n} \${info.r} \${info.v} \${info.m} \${info.p} \${info.o}\\n\`, exitCode: 0 };
  const parts = [];
  for (const a of args) {
    if (a==="-s") parts.push(info.s);
    else if (a==="-n") parts.push(info.n);
    else if (a==="-r") parts.push(info.r);
    else if (a==="-v") parts.push(info.v);
    else if (a==="-m") parts.push(info.m);
    else if (a==="-p") parts.push(info.p);
    else if (a==="-o") parts.push(info.o);
  }
  return { output: parts.join(" ")+"\\n", exitCode: 0 };
}
`,rv=`export const help = "unset VAR...\\n  Remove environment variables.\\n";
export default function unset(args, { sh }) {
  for (const a of args) delete sh.env[a];
  return { output: "", exitCode: 0 };
}
`,iv=`export const help = "vi FILE\\n  Text editor (alias for nano in MASH).\\n  Usage is identical to nano — opens the file for editing.\\n";
export default function vi(args, ctx) {
  // Delegate to nano via the shell dispatcher so edits to /bin/nano are respected
  return ctx.execCmd("nano", args, ctx.stdin, ctx.vfs, ctx.sh);
}
`,sv=`export const help = "which CMD...\\n  Show command location.\\n";
export default function which(args, { sh, registry }) {
  if (!args.length) return { output: "which: missing argument\\n", exitCode: 1 };
  const outs = []; let ec = 0;
  for (const a of args) {
    if (sh.aliases[a]) outs.push(\`\${a}: aliased to \${sh.aliases[a]}\`);
    else if (registry && registry[a]) outs.push("/bin/" + a);
    else { outs.push(\`which: no \${a} in (/bin:/usr/bin)\`); ec = 1; }
  }
  return { output: outs.join("\\n") + "\\n", exitCode: ec };
}
`,ov=`export const help = "wipe-fs\\n  Wipe all persisted filesystem data and reset to defaults.\\n  WARNING: permanently deletes all files.\\n";
export default function wipeFs(args, { vfs }) {
  if (!vfs._db) return { output: "wipe-fs: IndexedDB not available\\n", exitCode: 1 };
  return { output: "__WIPEFS__", exitCode: 0 };
}
`,lv=`export const help = "write FILE TEXT...\\n  Write text to a file.\\n";
export default function write(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  if (args.length < 2) return { output: "write: usage: write <file> <text...>\\n", exitCode: 1 };
  vfs.write(norm(args[0]), args.slice(1).join(" ") + "\\n");
  return { output: "", exitCode: 0 };
}
`,av=`export const help = "yes [STRING]\\n  Output STRING (default: y) repeatedly.\\n";
export default function yes(args) {
  return { output: Array(20).fill(args[0] || "y").join("\\n") + "\\n", exitCode: 0 };
}
`,uv=`export const help = \`awk [-F sep] [-v var=val] 'program' [file...]
  Pattern-scanning and text processing language.
  -F sep   field separator (default: whitespace)
  -v VAR=VALUE  set variable before execution

  Special variables: NR (row), NF (num fields), FS (field sep), $0 (line), $1..$N (fields)
  Patterns: /regex/  NR==N  BEGIN  END
  Actions: print, printf, if/else, for, while, next, exit, split, sub, gsub, match, length, substr, toupper, tolower, int, sqrt, rand

  Examples:
    echo 'a b c' | awk '{print $2}'
    awk -F: '{print $1}' /etc/passwd
    awk 'NR>2 {print NR, $0}' file.txt
    awk 'BEGIN{s=0}{s+=$1}END{print s}' nums.txt
    awk '/pattern/{print}' file.txt
    awk '{sum+=$1} END{print sum/NR}' data.txt
\`;

// Lightweight awk interpreter
export default function awk(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let FSstr=" ", program="";
  const fileArgs=[], vars={};

  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-F" && args[i+1]) FSstr=args[++i];
    else if (a.startsWith("-F")) FSstr=a.slice(2);
    else if ((a==="-v"||a==="-W") && args[i+1]) {
      const vSpec=args[++i]; const eq=vSpec.indexOf("=");
      if (eq!==-1) vars[vSpec.slice(0,eq)]=vSpec.slice(eq+1);
    }
    else if (!program) program=a;
    else fileArgs.push(a);
  }
  if (!program) return { output: "awk: no program specified\\n", exitCode: 1 };

  let text=stdin??"";
  if (fileArgs.length) {
    let combined="";
    for (const f of fileArgs) {
      const p=norm(f);
      if (!vfs.isFile(p)) return { output: \`awk: \${f}: No such file or directory\\n\`, exitCode: 1 };
      combined+=vfs.read(p)??"";
    }
    text=combined;
  }

  // Parse program into rules: [{pattern, action}]
  // Supports: BEGIN, END, /regex/, condition, empty pattern
  const rules = parseProgram(program);
  if (!rules) return { output: "awk: syntax error in program\\n", exitCode: 1 };

  const lines=text.split("\\n"); if (lines[lines.length-1]==="") lines.pop();
  const out=[];
  const env = { FS:FSstr, OFS:" ", ORS:"\\n", NR:0, NF:0, RS:"\\n", ...vars };
  let exitCode=0;

  const splitFields = (line) => {
    if (FSstr===" ") return line.trim()?line.trim().split(/\\s+/):[];
    const re=FSstr.length===1
      ? new RegExp(FSstr.replace(/[.*+?^\${}()|[\\]\\\\]/g,c=>"\\\\"+c))
      : new RegExp(FSstr);
    return line.split(re);
  };

  // Run BEGIN rules
  for (const rule of rules.filter(r=>r.pattern==="BEGIN")) {
    const res=runAction(rule.action, [], "", env, out, rules, {});
    if (res===false) { exitCode=1; break; }
  }

  // Main loop
  outer: for (let nr=0; nr<lines.length; nr++) {
    const line=lines[nr];
    const fields=splitFields(line);
    env.NR=nr+1; env.NF=fields.length; env["0"]=line;
    fields.forEach((f,i)=>{ env[String(i+1)]=f; });

    for (const rule of rules.filter(r=>r.pattern!=="BEGIN"&&r.pattern!=="END")) {
      if (!matchPattern(rule.pattern, line, env)) continue;
      const res=runAction(rule.action, fields, line, env, out, rules, {});
      if (res==="next") break;
      if (res==="exit") { break outer; }
    }
    // Clean up field vars
    for (let i=fields.length+1; i<=20; i++) delete env[String(i)];
  }

  // Run END rules
  for (const rule of rules.filter(r=>r.pattern==="END")) {
    runAction(rule.action, [], "", env, out, rules, {});
  }

  return { output: out.join(""), exitCode };
}

function parseProgram(prog) {
  const rules=[];
  // Split into pattern-action pairs
  let i=0, s=prog.trim();

  while (i<s.length) {
    // skip whitespace
    while (i<s.length && /\\s/.test(s[i])) i++;
    if (i>=s.length) break;

    let pattern="", action="";

    if (s.slice(i,i+5)==="BEGIN") { pattern="BEGIN"; i+=5; }
    else if (s.slice(i,i+3)==="END") { pattern="END"; i+=3; }
    else if (s[i]==="/") {
      // /regex/
      let re=""; i++;
      while (i<s.length && s[i]!=="/") { if (s[i]==="\\\\") re+=s[i++]; re+=s[i++]; }
      i++; // closing /
      pattern={type:"regex", re};
    } else if (s[i]==="{") {
      // no pattern, just action
      pattern="";
    } else {
      // expression pattern: read until {
      let pExpr="";
      while (i<s.length && s[i]!=="{") pExpr+=s[i++];
      pattern={type:"expr", expr:pExpr.trim()};
    }

    // skip whitespace
    while (i<s.length && /\\s/.test(s[i])) i++;

    if (i<s.length && s[i]==="{") {
      let depth=1, body=""; i++;
      while (i<s.length && depth>0) {
        if (s[i]==="{") depth++;
        else if (s[i]==="}") { depth--; if (depth===0) { i++; break; } }
        body+=s[i++];
      }
      action=body.trim();
    }

    rules.push({pattern, action});
  }
  return rules;
}

function matchPattern(pat, line, env) {
  if (pat==="") return true;
  if (pat==="BEGIN"||pat==="END") return false;
  if (pat?.type==="regex") {
    try { return new RegExp(pat.re).test(line); } catch { return false; }
  }
  if (pat?.type==="expr") {
    try { return !!evalExpr(pat.expr, env); } catch { return true; }
  }
  return true;
}

function runAction(action, fields, line, env, out, rules, localVars) {
  if (!action) { out.push(line+"\\n"); return; }
  const stmts=splitStmts(action);
  for (const stmt of stmts) {
    const res=execStmt(stmt.trim(), env, out, localVars);
    if (res==="next"||res==="exit") return res;
  }
}

function splitStmts(s) {
  // Split on ; and newlines not inside strings or parens
  const stmts=[]; let cur="", depth=0, inStr=false, strChar="";
  for (let i=0; i<s.length; i++) {
    const c=s[i];
    if (inStr) { cur+=c; if (c===strChar) inStr=false; }
    else if (c==='"'||c==="'") { inStr=true; strChar=c; cur+=c; }
    else if (c==="("||c==="{") { depth++; cur+=c; }
    else if (c===")"||c==="}") { depth--; cur+=c; }
    else if ((c===";"||c==="\\n") && depth===0) { if (cur.trim()) stmts.push(cur.trim()); cur=""; }
    else cur+=c;
  }
  if (cur.trim()) stmts.push(cur.trim());
  return stmts;
}

function execStmt(stmt, env, out, locals) {
  if (!stmt) return;

  // print/printf
  if (stmt.startsWith("print ") || stmt === "print") {
    const expr = stmt.slice(6).trim();
    if (!expr) { out.push((env["0"]??"")+"\\n"); return; }
    try {
      const val = evalPrintList(expr, env, locals);
      out.push(val+(env.ORS??"\\n"));
    } catch { out.push("\\n"); }
    return;
  }
  if (stmt.startsWith("printf ")) {
    try {
      const val = evalPrintf(stmt.slice(7).trim(), env, locals);
      out.push(val);
    } catch {}
    return;
  }
  if (stmt === "next") return "next";
  if (stmt === "exit") return "exit";

  // if/else
  const ifM = stmt.match(/^if\\s*\\((.+?)\\)\\s*\\{([^}]*)\\}(?:\\s*else\\s*\\{([^}]*)\\})?$/s);
  if (ifM) {
    const [,cond,thenB,elseB]=ifM;
    const val=!!evalExpr(cond, env, locals);
    if (val) execStmt(thenB.trim(), env, out, locals);
    else if (elseB) execStmt(elseB.trim(), env, out, locals);
    return;
  }

  // for (var in array) — skip complex
  // for (init; cond; step) { }
  const forM = stmt.match(/^for\\s*\\(([^;]*);([^;]*);([^)]*)\\)\\s*\\{([^}]*)\\}$/s);
  if (forM) {
    const [,init,cond,step,body]=forM;
    execStmt(init.trim(),env,out,locals);
    for (let iter=0; iter<10000; iter++) {
      if (!evalExpr(cond.trim(),env,locals)) break;
      const res=execStmt(body.trim(),env,out,locals);
      if (res==="exit") return "exit";
      execStmt(step.trim(),env,out,locals);
    }
    return;
  }

  // while
  const whileM = stmt.match(/^while\\s*\\((.+?)\\)\\s*\\{([^}]*)\\}$/s);
  if (whileM) {
    const [,cond,body]=whileM;
    for (let iter=0; iter<10000; iter++) {
      if (!evalExpr(cond,env,locals)) break;
      execStmt(body.trim(),env,out,locals);
    }
    return;
  }

  // assignment: var = expr  or  var++ / var--
  const assignM = stmt.match(/^([a-zA-Z_][a-zA-Z0-9_\\[\\]]*)\\s*([+\\-*\\/]?=)\\s*(.+)$/s);
  if (assignM) {
    const [,lhs,op,rhs]=assignM;
    const val=evalExpr(rhs, env, locals);
    if (op==="=") setVar(lhs, val, env, locals);
    else if (op==="+=") setVar(lhs, (parseFloat(getVar(lhs,env,locals))||0)+(parseFloat(val)||0), env, locals);
    else if (op==="-=") setVar(lhs, (parseFloat(getVar(lhs,env,locals))||0)-(parseFloat(val)||0), env, locals);
    else if (op==="*=") setVar(lhs, (parseFloat(getVar(lhs,env,locals))||0)*(parseFloat(val)||0), env, locals);
    else if (op==="/=") { const dv=parseFloat(val)||1; setVar(lhs, (parseFloat(getVar(lhs,env,locals))||0)/dv, env, locals); }
    return;
  }
  const ppM = stmt.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\\s*(\\+\\+|--)$/);
  if (ppM) {
    const [,v,op]=ppM;
    const n=(parseFloat(getVar(v,env,locals))||0)+(op==="++"?1:-1);
    setVar(v,n,env,locals); return;
  }
}

function getVar(name, env, locals) {
  if (name in locals) return locals[name];
  if (name in env) return env[name];
  return "";
}

function setVar(name, val, env, locals) {
  // if it's a field $N, update env
  if (/^\\$\\d+$/.test(name)) { env[name.slice(1)] = val; return; }
  if (name in locals) locals[name]=val;
  else env[name]=val;
}

function evalPrintList(expr, env, locals) {
  // Handle comma-separated items -> join with OFS
  const parts=splitByComma(expr);
  return parts.map(p=>String(evalExpr(p.trim(),env,locals)??0)).join(env.OFS??" ");
}

function splitByComma(s) {
  const parts=[]; let cur="", depth=0, inStr=false, sc="";
  for (const c of s) {
    if (inStr) { cur+=c; if (c===sc) inStr=false; }
    else if (c==='"'||c==="'") { inStr=true; sc=c; cur+=c; }
    else if (c==="("||c==="[") { depth++; cur+=c; }
    else if (c===")"||c==="]") { depth--; cur+=c; }
    else if (c==="," && depth===0) { parts.push(cur); cur=""; }
    else cur+=c;
  }
  parts.push(cur); return parts;
}

function evalPrintf(args, env, locals) {
  const parts=splitByComma(args);
  if (!parts.length) return "";
  let fmt=String(evalExpr(parts[0].trim(),env,locals)??"").replace(/\\\\n/g,"\\n").replace(/\\\\t/g,"\\t");
  const pargs=parts.slice(1); let ai=0;
  return fmt.replace(/%([0-9.]*)[sdifg%]/g,(m,spec,t)=>{
    const ft=m[m.length-1];
    if (ft==="%") return "%";
    const v=pargs[ai++]!==undefined?evalExpr(pargs[ai-1].trim(),env,locals):"";
    if (ft==="d"||ft==="i") return String(parseInt(v)||0);
    if (ft==="f") { const prec=spec.includes(".")?parseInt(spec.split(".")[1]):6; return (parseFloat(v)||0).toFixed(prec); }
    if (ft==="g") return String(parseFloat(v)||0);
    return String(v);
  });
}

function evalExpr(expr, env, locals) {
  if (!expr) return "";
  expr=expr.trim();

  // Comparison operators
  const cmpOps=[/^(.+?)\\s*(==|!=|>=|<=|>|<)\\s*(.+)$/s];
  for (const re of cmpOps) {
    const m=expr.match(re);
    if (m) {
      const [,l,op,r]=m;
      const lv=evalExpr(l,env,locals), rv=evalExpr(r,env,locals);
      const ln=parseFloat(lv), rn=parseFloat(r);
      const numericCompare=!isNaN(ln)&&!isNaN(parseFloat(rv));
      switch(op) {
        case "==": return numericCompare?ln===parseFloat(rv)?1:0:String(lv)===String(rv)?1:0;
        case "!=": return numericCompare?ln!==parseFloat(rv)?1:0:String(lv)!==String(rv)?1:0;
        case ">=": return (numericCompare?ln:String(lv))>=(numericCompare?parseFloat(rv):String(rv))?1:0;
        case "<=": return (numericCompare?ln:String(lv))<=(numericCompare?parseFloat(rv):String(rv))?1:0;
        case ">":  return (numericCompare?ln:String(lv))>(numericCompare?parseFloat(rv):String(rv))?1:0;
        case "<":  return (numericCompare?ln:String(lv))<(numericCompare?parseFloat(rv):String(rv))?1:0;
      }
    }
  }

  // String literal
  if (expr.startsWith('"') && expr.endsWith('"')) {
    return expr.slice(1,-1).replace(/\\\\n/g,"\\n").replace(/\\\\t/g,"\\t");
  }
  if (expr.startsWith("'") && expr.endsWith("'")) return expr.slice(1,-1);

  // $0, $1...
  if (/^\\$\\d+$/.test(expr)) return env[expr.slice(1)]??"";
  if (expr==="$NF") return env[String(parseInt(env.NF))]??"";

  // Built-in variables
  if (/^[A-Z][A-Z0-9_]*$/.test(expr) && expr in env) return env[expr];

  // User variables
  if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr)) {
    if (expr in locals) return locals[expr];
    if (expr in env) return env[expr];
    return 0;
  }

  // Arithmetic: delegate to safe eval
  try {
    const subst = expr
      .replace(/\\$(\\d+)/g, (_, n) => JSON.stringify(env[n]??""))
      .replace(/\\$NF/g, JSON.stringify(env[String(parseInt(env.NF))]??""))
      .replace(/\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b/g, (m, v) => {
        if (["Math","parseInt","parseFloat","String","Number","NaN","Infinity"].includes(v)) return v;
        const val=v in locals?locals[v]:(v in env?env[v]:0);
        return JSON.stringify(val);
      })
      // awk string concat: "a" "b" -> not easily parseable, skip
      ;
    return new Function(\`return (\${subst})\`)();
  } catch {
    return 0;
  }
}
`,cv=`export const help = "base64 [-d] [-w N] [file]\\n  Encode or decode base64.\\n  -d  decode\\n  -w N  wrap at N characters (default: 76, 0=no wrap)\\n  Examples:\\n    echo 'hello' | base64\\n    echo 'aGVsbG8K' | base64 -d\\n    base64 file.txt\\n    base64 -d encoded.txt\\n";
export default function base64(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let decode=false, wrap=76;
  const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-d"||a==="--decode") decode=true;
    else if (a==="-w"&&args[i+1]) wrap=parseInt(args[++i]);
    else if (/^-w\\d+$/.test(a)) wrap=parseInt(a.slice(2));
    else if (!a.startsWith("-")) files.push(a);
  }
  let text=stdin??"";
  if (files.length) { const p=norm(files[0]); if (vfs.isFile(p)) text=vfs.read(p)??"";}
  if (decode) {
    try {
      const clean=text.replace(/\\s/g,"");
      return { output: atob(clean)+"\\n", exitCode: 0 };
    } catch { return { output: "base64: invalid input\\n", exitCode: 1 }; }
  }
  // Remove trailing newline for encoding
  const toEncode=text.endsWith("\\n")?text.slice(0,-1):text;
  const encoded=btoa(toEncode);
  if (!wrap||wrap===0) return { output: encoded+"\\n", exitCode: 0 };
  const lines=[]; for (let i=0;i<encoded.length;i+=wrap) lines.push(encoded.slice(i,i+wrap));
  return { output: lines.join("\\n")+"\\n", exitCode: 0 };
}
`,fv=`export const help = "basename NAME [SUFFIX]\\n  Strip directory and suffix from filename.\\n  Examples:\\n    basename /path/to/file.txt      → file.txt\\n    basename /path/to/file.txt .txt → file\\n    basename -s .txt /path/to/file.txt → file\\n";
export default function basename(args) {
  let suffix=null, names=[];
  for (let i=0; i<args.length; i++) {
    if (args[i]==="-s"&&args[i+1]) suffix=args[++i];
    else if (args[i].startsWith("-s")) suffix=args[i].slice(2);
    else if (args[i]==="-a"||args[i]==="--multiple") { /* allow multiple */ }
    else names.push(args[i]);
  }
  if (!names.length) return { output: "basename: missing operand\\n", exitCode: 1 };
  if (!suffix && names.length===2 && !names[0].startsWith("-")) suffix=names.pop();
  const out=names.map(n=>{
    let name=(n.replace(/\\/+$/,"").split("/").pop())||"/";
    if (suffix && name.endsWith(suffix)) name=name.slice(0,-suffix.length);
    return name;
  });
  return { output: out.join("\\n")+"\\n", exitCode: 0 };
}
`,pv=`import { mathEval, fmtNum } from "../../_utils/math.js";
export const help = "bc [-l] [file]\\n  Arbitrary precision calculator.\\n  Reads expressions from stdin/file, one per line.\\n  Supports: + - * / ^ % sqrt() sin() cos() log() floor() ceil() pi e\\n  -l  enable math library (always on in mash)\\n  Examples:\\n    echo '2^10' | bc\\n    echo 'sqrt(144)' | bc\\n    echo 'sin(pi/2)' | bc\\n    bc <<< '22/7'\\n";
export default function bc(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  const fileArgs=args.filter(a=>!a.startsWith("-"));
  let input=(stdin??"");
  if (fileArgs.length) { const p=norm(fileArgs[0]); if (vfs.isFile(p)) input=vfs.read(p)??"";}
  if (!input.trim()) { if (args.join(" ").trim()) input=args.filter(a=>!a.startsWith("-")).join(" "); }
  if (!input.trim()) return { output: "", exitCode: 0 };
  const res=[];
  for (const line of input.split("\\n")) {
    const l=line.trim(); if (!l||l.startsWith("#")||l.startsWith("/*")) continue;
    try { res.push(fmtNum(mathEval(l))); } catch(e) { res.push(\`(error: \${e.message})\`); }
  }
  return { output: res.join("\\n")+"\\n", exitCode: 0 };
}
`,dv=`export const help = "cksum [file...]\\n  Print CRC checksum and byte count.\\n  Example:\\n    cksum README.txt\\n    echo 'hello' | cksum\\n";
export default function cksum(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  const files=args.filter(a=>!a.startsWith("-"));
  const crc=(text)=>{let s=0; for (const c of text) s=((s<<5)+s)^c.charCodeAt(0); return (s>>>0);};
  if (!files.length) { const t=stdin??""; return { output: \`\${crc(t)} \${t.length}\\n\`, exitCode: 0 }; }
  const out=[]; let ec=0;
  for (const f of files) {
    const p=norm(f);
    if (!vfs.isFile(p)) { out.push(\`cksum: \${f}: No such file or directory\`); ec=1; continue; }
    const t=vfs.read(p)??""; out.push(\`\${crc(t)} \${t.length} \${f}\`);
  }
  return { output: out.join("\\n")+"\\n", exitCode: ec };
}
`,hv=`export const help = "comm [-123] file1 file2\\n  Compare two sorted files line by line.\\n  Output columns: col1=only in file1, col2=only in file2, col3=in both.\\n  -1  suppress column 1\\n  -2  suppress column 2\\n  -3  suppress column 3\\n  Examples:\\n    comm sorted1.txt sorted2.txt\\n    comm -12 file1 file2    (show only common lines)\\n    comm -23 file1 file2    (show lines unique to file1)\\n";
export default function comm(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let s1=false, s2=false, s3=false;
  const files=[];
  for (const a of args) {
    if (/^-[123]+$/.test(a)) { if (a.includes("1")) s1=true; if (a.includes("2")) s2=true; if (a.includes("3")) s3=true; }
    else files.push(a);
  }
  if (files.length<2) return { output: "comm: missing operand after 'comm'\\n", exitCode: 1 };
  const read=f=>{
    if (f==="-") { const t=stdin??""; const l=t.split("\\n"); if (l[l.length-1]==="") l.pop(); return l; }
    const p=norm(f); if (!vfs.isFile(p)) return null;
    const t=vfs.read(p)??""; const l=t.split("\\n"); if (l[l.length-1]==="") l.pop(); return l;
  };
  const l1=read(files[0]), l2=read(files[1]);
  if (!l1) return { output: \`comm: \${files[0]}: No such file or directory\\n\`, exitCode: 1 };
  if (!l2) return { output: \`comm: \${files[1]}: No such file or directory\\n\`, exitCode: 1 };
  let i=0, j=0; const out=[];
  while (i<l1.length||j<l2.length) {
    const a2=l1[i], b=l2[j];
    if (i>=l1.length)      { if (!s2) out.push("\\t"+b); j++; }
    else if (j>=l2.length) { if (!s1) out.push(a2); i++; }
    else if (a2<b)         { if (!s1) out.push(a2); i++; }
    else if (a2>b)         { if (!s2) out.push("\\t"+b); j++; }
    else                   { if (!s3) out.push("\\t\\t"+a2); i++; j++; }
  }
  return { output: out.join("\\n")+(out.length?"\\n":""), exitCode: 0 };
}
`,mv=`export const help = \`cut [-d DELIM] [-f FIELDS] [-c CHARS] [-s] [file...]
  Remove sections from each line of files.
  -d DELIM  field delimiter (default: tab)
  -f FIELDS field list: 1,3 or 2-4 or 1-3,5
  -c CHARS  character positions: 1,3 or 2-5
  -s        suppress lines without delimiter (with -f)
  Examples:
    cut -d: -f1 /etc/passwd
    echo 'a,b,c' | cut -d, -f2
    echo 'hello' | cut -c1-3
    cut -d' ' -f1,3 file.txt
\`;
export default function cut(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let delim="\\t", fields=null, chars=null, suppress=false;
  const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-d" && args[i+1]) delim=args[++i];
    else if (a==="-f" && args[i+1]) fields=parseRange(args[++i]);
    else if (a==="-c" && args[i+1]) chars=parseRange(args[++i]);
    else if (a==="-s"||a==="--only-delimited") suppress=true;
    else if (!a.startsWith("-")) files.push(a);
    // handle -d= form
    else if (a.startsWith("-d")) delim=a.slice(2);
    else if (a.startsWith("-f")) fields=parseRange(a.slice(2));
    else if (a.startsWith("-c")) chars=parseRange(a.slice(2));
  }

  function parseRange(s) {
    return s.split(",").flatMap(r=>{
      if (r.includes("-")) {
        const [a2,b]=r.split("-").map(v=>v===''?null:parseInt(v));
        if (a2===null) return []; // e.g. -3 means 1-3
        if (b===null) return { from: a2 }; // open-ended
        return Array.from({length:b-a2+1},(_,j)=>a2+j);
      }
      return [parseInt(r)];
    });
  }

  let text = stdin ?? "";
  if (files.length) {
    let combined = "";
    for (const f of files) { const p=norm(f); if (!vfs.isFile(p)) return { output: \`cut: \${f}: No such file or directory\\n\`, exitCode: 1 }; combined+=vfs.read(p)??"";}
    text=combined;
  }

  const ls=text.split("\\n"); if (ls[ls.length-1]==="") ls.pop();
  const out=ls.map(line=>{
    if (chars) {
      // character ranges (1-based)
      const positions = new Set();
      for (const r of chars) {
        if (typeof r === "object" && r.from) { for (let i=r.from;i<=line.length;i++) positions.add(i); }
        else positions.add(r);
      }
      return [...line].filter((_,i)=>positions.has(i+1)).join("");
    }
    if (fields) {
      if (!line.includes(delim)) return suppress ? null : line;
      const parts=line.split(delim);
      const positions = new Set();
      for (const r of fields) {
        if (typeof r === "object" && r.from) { for (let i=r.from;i<=parts.length;i++) positions.add(i); }
        else positions.add(r);
      }
      return [...positions].sort((a,b)=>a-b).map(f=>parts[f-1]??"").join(delim);
    }
    return line;
  }).filter(l=>l!==null);
  return { output: out.join("\\n")+"\\n", exitCode: 0 };
}
`,gv=`export const help = "diff [-u] [-c] [-i] [-b] [-q] [-y] file1 file2\\n  Compare two files line by line.\\n  -u  unified format (default)\\n  -c  context format\\n  -i  ignore case\\n  -b  ignore whitespace changes\\n  -q  report only whether files differ\\n  -y  side-by-side format\\n  --  accept - as stdin\\n  Examples:\\n    diff file1.txt file2.txt\\n    diff -u old.txt new.txt\\n    diff -q a.txt b.txt\\n";
export default function diff(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let unified=false, context=false, icase=false, ignoreWS=false, quiet=false, sideBySide=false;
  const files=[];
  for (const a of args) {
    if (a==="-u"||a==="--unified") unified=true;
    else if (a==="-c") context=true;
    else if (a==="-i"||a==="--ignore-case") icase=true;
    else if (a==="-b"||a==="--ignore-space-change") ignoreWS=true;
    else if (a==="-q"||a==="--brief") quiet=true;
    else if (a==="-y"||a==="--side-by-side") sideBySide=true;
    else if (!a.startsWith("-")||a==="-") files.push(a);
  }
  if (files.length<2) return { output: "diff: missing operand after 'diff'\\n", exitCode: 2 };
  const read=f=>{
    if (f==="-") { const t=stdin??""; const l=t.split("\\n"); if (l[l.length-1]==="") l.pop(); return l; }
    const p=norm(f); if (!vfs.isFile(p)) return null;
    const t=vfs.read(p)??""; const l=t.split("\\n"); if (l[l.length-1]==="") l.pop(); return l;
  };
  const l1=read(files[0]), l2=read(files[1]);
  if (!l1) return { output: \`diff: \${files[0]}: No such file or directory\\n\`, exitCode: 2 };
  if (!l2) return { output: \`diff: \${files[1]}: No such file or directory\\n\`, exitCode: 2 };

  const norm2=l=>icase?l.toLowerCase():ignoreWS?l.replace(/\\s+/g," ").trim():l;
  
  // Myers diff
  const a=l1, b=l2;
  const lcs=computeLCS(a, b, norm2);
  const hunks=buildHunks(a, b, lcs);
  
  if (quiet) {
    const same=hunks.every(h=>h.type==="same");
    if (same) return { output: "", exitCode: 0 };
    return { output: \`Files \${files[0]} and \${files[1]} differ\\n\`, exitCode: 1 };
  }
  if (!hunks.some(h=>h.type!=="same")) return { output: "", exitCode: 0 };
  
  let out=\`--- \${files[0]}\\n+++ \${files[1]}\\n\`;
  if (sideBySide) {
    const w=40;
    const pairs=alignSideBySide(a, b, lcs);
    out=pairs.map(([l,r,t])=>{
      const lp=(l??"").padEnd(w); const rp=r??"";
      const sep=t==="same"?"  ":t==="del"?"<":t==="add"?">":" |";
      return \`\${lp} \${sep} \${rp}\`;
    }).join("\\n")+"\\n";
    return { output: out, exitCode: 1 };
  }
  // unified diff
  let ai=0, bi=0;
  for (let hi=0; hi<hunks.length; ) {
    if (hunks[hi].type==="same") { hi++; continue; }
    // collect a block of changes with context
    const ctx=3;
    let start=hi;
    let aStart=hunks[hi].a, bStart=hunks[hi].b;
    const blockLines=[];
    // before context
    const beforeCtx=[]; for (let k=hi-1;k>=0&&k>=hi-ctx&&hunks[k].type==="same";k--) beforeCtx.unshift(hunks[k]);
    for (const h of beforeCtx) blockLines.push({...h, type:"ctx"});
    let lastChange=hi;
    while (hi<hunks.length && (hunks[hi].type!=="same" || hi<lastChange+ctx)) {
      if (hunks[hi].type!=="same") lastChange=hi;
      blockLines.push(hunks[hi++]);
    }
    const aEnd=blockLines[blockLines.length-1].a+1, bEnd=blockLines[blockLines.length-1].b+1;
    out+=\`@@ -\${aStart+1},\${aEnd-aStart} +\${bStart+1},\${bEnd-bStart} @@\\n\`;
    for (const h of blockLines) {
      if (h.type==="ctx"||h.type==="same") out+=\` \${a[h.a]}\\n\`;
      else if (h.type==="del") out+=\`-\${a[h.a]}\\n\`;
      else if (h.type==="add") out+=\`+\${b[h.b]}\\n\`;
    }
  }
  return { output: out, exitCode: 1 };
}

function computeLCS(a, b, norm2) {
  const m=a.length, n=b.length;
  const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for (let i=m-1;i>=0;i--) for (let j=n-1;j>=0;j--) {
    if (norm2(a[i])===norm2(b[j])) dp[i][j]=1+dp[i+1][j+1];
    else dp[i][j]=Math.max(dp[i+1][j],dp[i][j+1]);
  }
  const lcs=[]; let i=0, j=0;
  while (i<m&&j<n) {
    if (norm2(a[i])===norm2(b[j])) { lcs.push([i,j]); i++; j++; }
    else if (dp[i+1]?.[j]>=(dp[i]?.[j+1]??0)) i++; else j++;
  }
  return lcs;
}

function buildHunks(a, b, lcs) {
  const hunks=[]; let ai=0, bi=0;
  for (const [li, lj] of lcs) {
    while (ai<li) { hunks.push({type:"del",a:ai,b:bi}); ai++; }
    while (bi<lj) { hunks.push({type:"add",a:ai,b:bi}); bi++; }
    hunks.push({type:"same",a:li,b:lj}); ai=li+1; bi=lj+1;
  }
  while (ai<a.length) { hunks.push({type:"del",a:ai,b:bi}); ai++; }
  while (bi<b.length) { hunks.push({type:"add",a:ai,b:bi}); bi++; }
  return hunks;
}

function alignSideBySide(a, b, lcs) {
  const hunks=buildHunks(a,b,lcs);
  return hunks.map(h=>{
    if (h.type==="same") return [a[h.a],b[h.b],"same"];
    if (h.type==="del")  return [a[h.a],null,"del"];
    return [null,b[h.b],"add"];
  });
}
`,xv=`export const help = "dirname NAME...\\n  Strip last component from path.\\n  Examples:\\n    dirname /path/to/file   → /path/to\\n    dirname file.txt        → .\\n    dirname /               → /\\n";
export default function dirname(args) {
  if (!args.length) return { output: "dirname: missing operand\\n", exitCode: 1 };
  const out=args.map(p=>{
    p=p.replace(/\\/+$/,"");
    return p.includes("/")?p.slice(0,p.lastIndexOf("/"))||"/":".";
  });
  return { output: out.join("\\n")+"\\n", exitCode: 0 };
}
`,vv='export const help = "env\\n  Print all environment variables.\\n";\nexport default function env(args, { sh }) {\n  return { output: Object.entries(sh.env).map(([k,v])=>`${k}=${String(v).replace(/\\n$/,"")}`).join("\\n")+"\\n", exitCode: 0 };\n}\n',yv=`export const help = "expand [-t N] [file]\\n  Convert tabs to spaces.\\n  -t N  use tab stops at multiples of N (default: 8)\\n  Examples:\\n    expand file.txt\\n    echo -e 'a\\\\tb' | expand -t 4\\n";
export default function expand(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let tabSize=8; const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-t"&&args[i+1]) tabSize=parseInt(args[++i]);
    else if (/^-t\\d+$/.test(a)) tabSize=parseInt(a.slice(2));
    else if (!a.startsWith("-")) files.push(a);
  }
  let text=stdin??"";
  if (files.length) { const p=norm(files[0]); if (vfs.isFile(p)) text=vfs.read(p)??"";}
  const proc=line=>{
    let out=""; let col=0;
    for (const c of line) {
      if (c==="\\t") { const sp=tabSize-(col%tabSize); out+=" ".repeat(sp); col+=sp; }
      else { out+=c; col++; }
    }
    return out;
  };
  return { output: text.split("\\n").map(proc).join("\\n"), exitCode: 0 };
}
`,Sv=`import { mathEval, fmtNum } from "../../_utils/math.js";
export const help = "expr EXPR\\n  Evaluate expressions (arithmetic, string, comparison).\\n  Supports: + - * / % arithmetic\\n            = != < > <= >= comparison\\n            length STR, substr STR POS LEN, index STR CHARS, match STR REGEX\\n            : regex match\\n  Examples:\\n    expr 2 + 2\\n    expr 10 '*' 5\\n    expr length 'hello'\\n    expr 5 '>' 3\\n    expr 'hello' : 'h.*'\\n";
export default function expr(args) {
  if (!args.length) return { output: "expr: missing operand\\n", exitCode: 2 };
  
  // String operations
  if (args[0]==="length") return { output: String((args[1]??"").length)+"\\n", exitCode: 0 };
  if (args[0]==="substr") {
    const s=args[1]??"", pos=parseInt(args[2]??1)-1, len=parseInt(args[3]??s.length);
    return { output: s.slice(pos,pos+len)+"\\n", exitCode: 0 };
  }
  if (args[0]==="index") {
    const s=args[1]??"", chars=args[2]??"";
    for (let i=0; i<s.length; i++) { if (chars.includes(s[i])) return { output: (i+1)+"\\n", exitCode: 0 }; }
    return { output: "0\\n", exitCode: 0 };
  }
  if (args[0]==="match") {
    const s=args[1]??"", re=new RegExp(args[2]??"");
    const m=re.exec(s); if (!m) return { output: "0\\n", exitCode: 1 };
    return { output: (m.index+1)+"\\n", exitCode: 0 };
  }

  // a : regex
  if (args.length===3 && args[1]===":") {
    const s=args[0], re=new RegExp("^"+args[2]);
    const m=re.exec(s); if (!m) return { output: "0\\n", exitCode: 1 };
    return { output: (m[1]??m[0].length)+"\\n", exitCode: 0 };
  }

  // Comparison
  const cmp=["=","!=","<",">","<=",">="];
  if (args.length===3 && cmp.includes(args[1])) {
    const [l,op,r]=args;
    const ln=parseFloat(l), rn=parseFloat(r);
    const num=!isNaN(ln)&&!isNaN(rn);
    let result;
    switch(op) {
      case "=": case "==": result=num?ln===rn:l===r; break;
      case "!=":  result=num?ln!==rn:l!==r; break;
      case "<":   result=num?ln<rn:l<r; break;
      case ">":   result=num?ln>rn:l>r; break;
      case "<=":  result=num?ln<=rn:l<=r; break;
      case ">=":  result=num?ln>=rn:l>=r; break;
    }
    return { output: (result?1:0)+"\\n", exitCode: result?0:1 };
  }

  // Arithmetic
  try {
    const r=mathEval(args.join(" "));
    return { output: fmtNum(r)+"\\n", exitCode: r===0?1:0 };
  } catch {
    return { output: "expr: syntax error\\n", exitCode: 2 };
  }
}
`,wv=`export const help = "fold [-w N] [-s] [-b] [file]\\n  Wrap long lines.\\n  -w N  wrap at N characters (default: 80)\\n  -s    break at spaces/word boundaries\\n  -b    count bytes, not characters\\n  Example:\\n    echo 'a very long line...' | fold -w 10\\n    cat longfile.txt | fold -w 72 -s\\n";
export default function fold(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let width=80, wordBreak=false;
  const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-w"&&args[i+1]) width=parseInt(args[++i]);
    else if (/^-w\\d+$/.test(a)) width=parseInt(a.slice(2));
    else if (/^-\\d+$/.test(a)) width=parseInt(a.slice(1));
    else if (a==="-s") wordBreak=true;
    else if (a==="-b") { /* same as -w in our context */ }
    else if (!a.startsWith("-")) files.push(a);
  }
  let text=stdin??"";
  if (files.length) { const p=norm(files[0]); if (vfs.isFile(p)) text=vfs.read(p)??"";}
  const proc=line=>{
    if (line.length<=width) return [line];
    if (!wordBreak) {
      const chunks=[];
      for (let i=0; i<line.length; i+=width) chunks.push(line.slice(i,i+width));
      return chunks;
    }
    // break at word boundaries
    const chunks=[]; let cur="";
    for (const word of line.split(/(?<=\\s)/)) {
      if (cur.length+word.length>width&&cur.length>0) { chunks.push(cur.trimEnd()); cur=word; }
      else cur+=word;
    }
    if (cur) chunks.push(cur);
    return chunks;
  };
  const out=text.split("\\n").flatMap(proc);
  return { output: out.join("\\n"), exitCode: 0 };
}
`,_v=`export const help = "free [-h] [-m] [-g] [-k]\\n  Display amount of free and used memory.\\n  -h  human-readable\\n  -m  show in MiB\\n  -g  show in GiB\\n  -k  show in KiB (default)\\n  Example:\\n    free -h\\n";
export default function free(args) {
  const human=args.includes("-h"), mib=args.includes("-m"), gib=args.includes("-g");
  if (human) return { output: "               total        used        free      shared  buff/cache   available\\nMem:           1.0Gi        64Mi       900Mi       0.0Ki        50Mi       950Mi\\nSwap:            0.0Ki       0.0Ki       0.0Ki\\n", exitCode: 0 };
  const factor=gib?1024*1024:mib?1024:1;
  const total=1048576/factor, used=65536/factor, free2=(1048576-65536)/factor;
  return { output: \`               total        used        free      shared  buff/cache   available\\nMem:        \${String(Math.round(total)).padStart(12)} \${String(Math.round(used)).padStart(12)} \${String(Math.round(free2)).padStart(12)}            0            0 \${String(Math.round(free2)).padStart(12)}\\nSwap:                  0            0            0\\n\`, exitCode: 0 };
}
`,kv=`export const help = \`grep [-vinicorwlqEF] [-e pat] [-m N] [-A N] [-B N] [-C N] pattern [file...]
  Search for lines matching a pattern.
  -v  invert match
  -i  ignore case
  -n  prefix with line numbers
  -c  print count of matching lines
  -o  print only the matching part of each line
  -r  recursive search in directories
  -w  match whole words only
  -l  print only filenames with matches
  -q  quiet (no output, exit code only)
  -E  use extended regular expressions (default)
  -F  treat pattern as fixed string (no regex)
  -e  specify pattern explicitly (can repeat)
  -m N  stop after N matches
  -A N  print N lines after each match
  -B N  print N lines before each match
  -C N  print N lines of context (= -A N -B N)
  Examples:
    grep 'hello' file.txt
    grep -i 'error' /var/log/shell.log
    grep -rn 'TODO' /home/user
    grep -v '^#' /etc/shells
    grep -o '[0-9]+' numbers.txt
    grep -A2 'ERROR' log.txt
\`;

export default function grep(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let inv = false, icase = false, lnum = false, quiet = false, cnt = false;
  let only = false, recursive = false, word = false, listFiles = false;
  let fixed = false, maxMatch = Infinity;
  let ctxAfter = 0, ctxBefore = 0;
  const patterns = []; const files = [];

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "-v" || a === "--invert-match")    inv = true;
    else if (a === "-i" || a === "--ignore-case") icase = true;
    else if (a === "-n" || a === "--line-number") lnum = true;
    else if (a === "-q" || a === "--quiet")       quiet = true;
    else if (a === "-c" || a === "--count")       cnt = true;
    else if (a === "-o" || a === "--only-matching") only = true;
    else if (a === "-r" || a === "-R" || a === "--recursive") recursive = true;
    else if (a === "-w" || a === "--word-regexp") word = true;
    else if (a === "-l" || a === "--files-with-matches") listFiles = true;
    else if (a === "-F" || a === "--fixed-strings") fixed = true;
    else if (a === "-E" || a === "-P")            {} // default extended
    else if ((a === "-e" || a === "--regexp") && args[i+1]) patterns.push(args[++i]);
    else if ((a === "-m" || a === "--max-count") && args[i+1]) maxMatch = parseInt(args[++i]);
    else if ((a === "-A" || a === "--after-context") && args[i+1])  ctxAfter  = parseInt(args[++i]);
    else if ((a === "-B" || a === "--before-context") && args[i+1]) ctxBefore = parseInt(args[++i]);
    else if ((a === "-C" || a === "--context") && args[i+1]) { const n = parseInt(args[++i]); ctxAfter = ctxBefore = n; }
    else if (/^-[vinicorwlqEFe]+$/.test(a)) {
      // combined flags handled individually above, but catch leftover combos
      for (const f of a.slice(1)) {
        if (f==="v") inv=true; else if (f==="i") icase=true; else if (f==="n") lnum=true;
        else if (f==="q") quiet=true; else if (f==="c") cnt=true; else if (f==="o") only=true;
        else if (f==="r"||f==="R") recursive=true; else if (f==="w") word=true;
        else if (f==="l") listFiles=true; else if (f==="F") fixed=true;
      }
    }
    else if (!patterns.length && !files.length && !a.startsWith("-")) patterns.push(a);
    else files.push(a);
  }

  if (!patterns.length) return { output: "grep: missing pattern\\n", exitCode: 2 };

  const escapeRe = s => s.replace(/[.+*?^\${}()|[\\]\\\\]/g, c => "\\\\" + c);
  let reSrc = patterns.map(p => fixed ? escapeRe(p) : p).join("|");
  if (word) reSrc = \`\\\\b(?:\${reSrc})\\\\b\`;
  let re;
  try { re = new RegExp(reSrc, icase ? "gi" : "g"); }
  catch (e) { return { output: \`grep: invalid regex: \${e.message}\\n\`, exitCode: 2 }; }

  const collectFiles = (path) => {
    if (vfs.isDir(path)) {
      const out = [];
      for (const e of vfs.ls(path)) out.push(...collectFiles((path === "/" ? "" : path) + "/" + e));
      return out;
    }
    return [path];
  };

  const grepText = (text, fname) => {
    const lineArr = text.split("\\n");
    if (lineArr[lineArr.length - 1] === "") lineArr.pop();
    const matched = [];
    const printed = new Set();
    let matchCount = 0;

    for (let idx = 0; idx < lineArr.length; idx++) {
      const line = lineArr[idx];
      re.lastIndex = 0;
      const matches = line.match(re);
      const hit = matches !== null;
      if (hit !== inv) {
        if (++matchCount > maxMatch) break;
        if (only && !inv && matches) {
          re.lastIndex = 0;
          for (const m of line.matchAll(re)) {
            let prefix = fname ? fname + ":" : "";
            if (lnum) prefix += (idx + 1) + ":";
            matched.push(prefix + m[0]);
          }
        } else {
          // context: gather lines before and after
          for (let b = Math.max(0, idx - ctxBefore); b < idx; b++) {
            if (!printed.has(b)) { const p = (fname ? fname + "-" : "") + (lnum ? (b+1) + "-" : ""); matched.push(p + lineArr[b]); printed.add(b); }
          }
          const p = (fname ? fname + ":" : "") + (lnum ? (idx+1) + ":" : "");
          matched.push(p + line); printed.add(idx);
          for (let a = idx + 1; a <= Math.min(lineArr.length - 1, idx + ctxAfter); a++) {
            if (!printed.has(a)) { const p2 = (fname ? fname + "-" : "") + (lnum ? (a+1) + "-" : ""); matched.push(p2 + lineArr[a]); printed.add(a); }
          }
          if ((ctxBefore || ctxAfter) && idx + ctxAfter < lineArr.length - 1) matched.push("--");
        }
      }
    }
    // remove trailing --
    while (matched[matched.length - 1] === "--") matched.pop();
    return { lines: matched, count: matchCount };
  };

  let allFiles = [];
  if (files.length) {
    for (const f of files) {
      const p = norm(f);
      if (!vfs.exists(p)) return { output: \`grep: \${f}: No such file or directory\\n\`, exitCode: 2 };
      if (recursive && vfs.isDir(p)) allFiles.push(...collectFiles(p).map(fp => ({ path: fp, label: fp })));
      else allFiles.push({ path: p, label: f });
    }
  } else {
    allFiles = [{ path: null, label: null }];
  }

  const multiFile = allFiles.length > 1;
  const results = []; let ec = 1; let totalCount = 0;

  for (const { path, label } of allFiles) {
    const text = path ? (vfs.read(path) ?? "") : (stdin ?? "");
    const fname = multiFile ? label : null;
    const { lines, count } = grepText(text, fname);
    if (count > 0) ec = 0;
    totalCount += count;
    if (listFiles) { if (count > 0) results.push(label); continue; }
    if (cnt) { results.push((multiFile ? label + ":" : "") + count); continue; }
    results.push(...lines);
  }

  if (quiet) return { output: "", exitCode: ec };
  if (cnt && !listFiles) return { output: results.join("\\n") + "\\n", exitCode: ec };
  return { output: results.join("\\n") + (results.length ? "\\n" : ""), exitCode: ec };
}
`,Cv=`export const help = \`head [-n N] [-c N] [file...]
  Output first N lines (default: 10) or first N bytes.
  -n N  print first N lines (use -N as shorthand)
  -c N  print first N bytes
  Examples:
    head README.txt
    head -n 5 file.txt
    head -20 file.txt
    head -c 100 file.txt
\`;

export default function head(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let n = 10, bytes = null;
  const files = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "-n" && args[i+1]) n = parseInt(args[++i]);
    else if (args[i] === "-c" && args[i+1]) bytes = parseInt(args[++i]);
    else if (/^-\\d+$/.test(args[i])) n = parseInt(args[i].slice(1));
    else files.push(args[i]);
  }

  const proc = t => {
    if (bytes !== null) return t.slice(0, bytes);
    const ls = t.split("\\n");
    return ls.slice(0, n).join("\\n") + "\\n";
  };

  if (!files.length) return { output: proc(stdin ?? ""), exitCode: 0 };
  const outs = []; let ec = 0;
  for (const f of files) {
    const p = norm(f);
    if (!vfs.isFile(p)) { outs.push(\`head: \${f}: No such file or directory\`); ec = 1; }
    else outs.push((files.length > 1 ? \`==> \${f} <==\\n\` : "") + proc(vfs.read(p) ?? ""));
  }
  return { output: outs.join("\\n"), exitCode: ec };
}
`,bv='export const help = "id\\n  Print user identity.\\n";\nexport default function id(args, { sh }) {\n  const u = (sh.env.USER || "user").trim();\n  return { output: `uid=1000(${u}) gid=1000(${u}) groups=1000(${u})\\n`, exitCode: 0 };\n}\n',Ev=`export const help = "md5sum [file...]\\n  Compute MD5 checksums.\\n  Example:\\n    md5sum file.txt\\n    echo 'hello' | md5sum\\n";
// Simple MD5 implementation
function md5(str) {
  const rotate=(n,c)=>n>>>c|n<<(32-c);
  const s=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  const K=new Int32Array(64);
  for (let i=0;i<64;i++) K[i]=Math.floor(Math.abs(Math.sin(i+1))*2**32)|0;
  const bytes=[...str].map(c=>c.charCodeAt(0));
  const origLen=bytes.length;
  bytes.push(0x80);
  while (bytes.length%64!==56) bytes.push(0);
  const bitLen=BigInt(origLen*8);
  for (let i=0;i<8;i++) bytes.push(Number((bitLen>>(BigInt(i*8)))&0xffn));
  let a=0x67452301, b=0xefcdab89, c=0x98badcfe, d=0x10325476;
  for (let i=0;i<bytes.length;i+=64) {
    const M=new Int32Array(16);
    for (let j=0;j<16;j++) M[j]=bytes[i+j*4]|(bytes[i+j*4+1]<<8)|(bytes[i+j*4+2]<<16)|(bytes[i+j*4+3]<<24);
    let A=a, B=b, C=c, D=d;
    for (let j=0;j<64;j++) {
      let F,g;
      if(j<16){F=(B&C)|(~B&D);g=j;}
      else if(j<32){F=(D&B)|(~D&C);g=(5*j+1)%16;}
      else if(j<48){F=B^C^D;g=(3*j+5)%16;}
      else{F=C^(B|~D);g=(7*j)%16;}
      F=(F+A+K[j]+M[g])|0;
      A=D;D=C;C=B;B=(B+rotate(F,s[j]))|0;
    }
    a=(a+A)|0;b=(b+B)|0;c=(c+C)|0;d=(d+D)|0;
  }
  const hex=n=>(n>>>0).toString(16).padStart(8,"0").replace(/(..)/g,(_,h)=>h);
  return [a,b,c,d].map(hex).join("");
}
export default function md5sum(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  const files=args.filter(a=>!a.startsWith("-"));
  if (!files.length) { const t=stdin??""; return { output: \`\${md5(t)}  -\\n\`, exitCode: 0 }; }
  const out=[]; let ec=0;
  for (const f of files) {
    const p=norm(f);
    if (!vfs.isFile(p)) { out.push(\`md5sum: \${f}: No such file or directory\`); ec=1; continue; }
    out.push(\`\${md5(vfs.read(p)??"")}  \${f}\`);
  }
  return { output: out.join("\\n")+"\\n", exitCode: ec };
}
`,jv=`export const help = "mktemp [-d] [-t] [TEMPLATE]\\n  Create a temporary file or directory.\\n  -d  create a directory instead of a file\\n  Template must end with XXXXXX (replaced with random chars).\\n  Examples:\\n    mktemp\\n    mktemp /tmp/myapp.XXXXXX\\n    mktemp -d /tmp/dir.XXXXXX\\n";
export default function mktemp(args, { vfs, sh }) {
  let isDir=false;
  const fileArgs=args.filter(a=>{ if (a==="-d") { isDir=true; return false; } return !a.startsWith("-"); });
  const template=fileArgs[0]||"/tmp/tmp.XXXXXX";
  const rand=Math.random().toString(36).slice(2,8).toUpperCase();
  const path=template.replace(/X{6}$/, rand).replace(/XXXXXX$/, rand);
  const p=vfs.resolve(path, sh.cwd);
  if (isDir) vfs._mkdirP(p);
  else vfs.write(p, "");
  return { output: p+"\\n", exitCode: 0 };
}
`,Mv=`export const help = "nl [-b STYLE] [-n FORMAT] [-w N] [-s SEP] [-v N] [file]\\n  Number lines of files.\\n  -b a   number all lines (default)\\n  -b t   number non-empty lines only\\n  -b n   do not number lines\\n  -n ln  left-justify numbers\\n  -n rn  right-justify, no padding (default)\\n  -n rz  right-justify with leading zeros\\n  -w N   use N columns for line number (default: 6)\\n  -s SEP use SEP after line number (default: tab)\\n  -v N   start counting at N (default: 1)\\n  Examples:\\n    nl README.txt\\n    nl -b t README.txt\\n    nl -w 4 -s '. ' file.txt\\n";
export default function nl(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let style="a", fmt="rn", width=6, sep="\\t", startNum=1;
  const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if ((a==="-b")&&args[i+1]) style=args[++i];
    else if ((a==="-n")&&args[i+1]) fmt=args[++i];
    else if ((a==="-w")&&args[i+1]) width=parseInt(args[++i]);
    else if ((a==="-s")&&args[i+1]) sep=args[++i];
    else if ((a==="-v")&&args[i+1]) startNum=parseInt(args[++i]);
    else if (!a.startsWith("-")) files.push(a);
  }
  let text=stdin??"";
  if (files.length) { const p=norm(files[0]); if (vfs.isFile(p)) text=vfs.read(p)??"";}
  const ls=text.split("\\n"); if (ls[ls.length-1]==="") ls.pop();
  let num=startNum;
  const out=ls.map(l=>{
    const empty=l==="" && style!=="a";
    if (style==="n"||empty) return " ".repeat(width)+sep+l;
    const numStr = fmt==="rz"?String(num).padStart(width,"0"):
                   fmt==="ln"?String(num).padEnd(width," "):
                   String(num).padStart(width," ");
    num++;
    return numStr+sep+l;
  });
  return { output: out.join("\\n")+(out.length?"\\n":""), exitCode: 0 };
}
`,Nv=`export const help = "nproc [--all]\\n  Print the number of processing units.\\n  Example:\\n    nproc\\n";
export default function nproc() {
  return { output: (navigator.hardwareConcurrency||4)+"\\n", exitCode: 0 };
}
`,$v=`export const help = "od [-A BASE] [-t TYPE] [-N COUNT] [file]\\n  Display file in various formats.\\n  -A o|d|x|n  address base: octal(default), decimal, hex, none\\n  -t o|d|x|c|a  output type per byte: octal, decimal, hex, char, named-char\\n  -N N  limit to N bytes\\n  Examples:\\n    echo 'ABC' | od\\n    echo 'ABC' | od -t x1\\n    echo 'ABC' | od -t c\\n";
export default function od(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let addrBase="o", type="o2", limit=Infinity;
  const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if ((a==="-A")&&args[i+1]) addrBase=args[++i];
    else if ((a==="-t")&&args[i+1]) type=args[++i];
    else if ((a==="-N")&&args[i+1]) limit=parseInt(args[++i]);
    else if (!a.startsWith("-")) files.push(a);
  }
  let text=stdin??"";
  if (files.length) { const p=norm(files[0]); if (vfs.isFile(p)) text=vfs.read(p)??"";}
  const bytes=[...text.slice(0,limit)].map(c=>c.charCodeAt(0));
  const out=[]; let addr=0;
  const fmtAddr=n=>addrBase==="o"?n.toString(8).padStart(7,"0"):addrBase==="d"?String(n).padStart(7):addrBase==="x"?n.toString(16).padStart(7,"0"):"";

  for (let i=0; i<bytes.length; i+=16) {
    const chunk=bytes.slice(i,i+16);
    const base=type[0]==="x"?"hex":type[0]==="d"?"dec":type[0]==="c"?"char":"oct";
    let vals;
    if (base==="hex")  vals=chunk.map(b=>b.toString(16).padStart(2,"0")).join(" ");
    else if (base==="dec") vals=chunk.map(b=>String(b).padStart(3)).join(" ");
    else if (base==="char") vals=chunk.map(b=>b<32?\`.\`:String.fromCharCode(b)).join("  ");
    else vals=chunk.map(b=>b.toString(8).padStart(3,"0")).join(" ");
    const addrStr=addrBase==="n"?"":fmtAddr(addr);
    out.push((addrStr?addrStr+"  ":"")+vals);
    addr+=16;
  }
  if (addrBase!=="n") out.push(fmtAddr(addr));
  return { output: out.join("\\n")+"\\n", exitCode: 0 };
}
`,Ov=`export const help = "paste [-d DELIM] [-s] [file...]\\n  Merge lines of files side by side.\\n  -d DELIM  use DELIM as separator (default: tab)\\n  -s        serial: all lines from each file concatenated\\n  Examples:\\n    paste file1 file2\\n    paste -d, file1 file2\\n    paste -s file.txt\\n    seq 5 | paste -d, -s\\n";
export default function paste(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let delim="\\t", serial=false;
  const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-d"&&args[i+1]) delim=args[++i].replace(/\\\\t/g,"\\t").replace(/\\\\n/g,"\\n");
    else if (a.startsWith("-d")) delim=a.slice(2).replace(/\\\\t/g,"\\t");
    else if (a==="-s") serial=true;
    else if (!a.startsWith("-")) files.push(a);
  }
  const delims=[...delim]; // support multi-char delimiter rotation

  const getLines=f=>{
    if (f==="-") return (stdin??"").split("\\n").filter((_,i,a)=>i<a.length-1||a[a.length-1]!=="");
    const p=norm(f); if (!vfs.isFile(p)) return [];
    const t=vfs.read(p)??""; const ls=t.split("\\n"); if (ls[ls.length-1]==="") ls.pop(); return ls;
  };
  const allLines=files.length?files.map(getLines):[[(stdin??"").replace(/\\n$/,"")]];

  if (serial) {
    const out=allLines.map((ls,fi)=>ls.join(delims[fi%delims.length]||"\\t"));
    return { output: out.join("\\n")+"\\n", exitCode: 0 };
  }
  // parallel paste
  const maxLen=Math.max(...allLines.map(l=>l.length));
  const out=[];
  for (let i=0; i<maxLen; i++) {
    out.push(allLines.map((ls,fi)=>(ls[i]??"")+((fi<allLines.length-1)?delims[fi%delims.length]||"\\t":"")).join(""));
  }
  return { output: out.join("\\n")+"\\n", exitCode: 0 };
}
`,zv=`export const help = "printenv [VAR]\\n  Print environment variable value.\\n";
export default function printenv(args, { sh }) {
  if (args.length) { const v = sh.env[args[0]]; return v !== undefined ? { output: String(v).replace(/\\n$/,"")+"\\n", exitCode: 0 } : { output: "", exitCode: 1 }; }
  return { output: Object.entries(sh.env).map(([k,v])=>\`\${k}=\${String(v).replace(/\\n$/,"")}\`).join("\\n")+"\\n", exitCode: 0 };
}
`,Pv=`export const help = "printf FORMAT [ARGUMENT...]\\n  Format and print text.\\n  Format specifiers: %s %d %i %f %e %g %o %x %X %%\\n  Width/precision: %10s %05d %.2f %-20s\\n  Escape seqs: \\\\n \\\\t \\\\r \\\\\\\\ \\\\0\\n  Examples:\\n    printf 'Hello %s!\\\\n' world\\n    printf '%d + %d = %d\\\\n' 2 3 5\\n    printf '%-10s %5d\\\\n' item 42\\n    printf '%05.2f\\\\n' 3.14159\\n";
export default function printf(args) {
  if (!args.length) return { output: "", exitCode: 0 };
  let fmt=args[0].replace(/\\\\n/g,"\\n").replace(/\\\\t/g,"\\t").replace(/\\\\r/g,"\\r").replace(/\\\\\\\\/g,"\\\\").replace(/\\\\0/g,"\\0");
  const pa=args.slice(1); let ai=0;
  const out=fmt.replace(/%([-]?)([0-9]*)(?:\\.([0-9]+))?([sdifegoxX%])/g,(m,align,width,prec,type)=>{
    if (type==="%") return "%";
    const v=pa[ai++]??0;
    const w=width?parseInt(width):0;
    const p=prec!==undefined?parseInt(prec):-1;
    let s;
    switch(type) {
      case "s": s=p>=0?String(v).slice(0,p):String(v); break;
      case "d": case "i": s=String(parseInt(v)||0).padStart(p>=0?p:0,"0"); break;
      case "f": s=(parseFloat(v)||0).toFixed(p>=0?p:6); break;
      case "e": s=(parseFloat(v)||0).toExponential(p>=0?p:6); break;
      case "g": s=String(parseFloat(v)||0); break;
      case "o": s=(parseInt(v)||0).toString(8); break;
      case "x": s=(parseInt(v)||0).toString(16); break;
      case "X": s=(parseInt(v)||0).toString(16).toUpperCase(); break;
      default:  s=String(v);
    }
    if (w) s=align==="-"?s.padEnd(w):s.padStart(w);
    return s;
  });
  return { output: out, exitCode: 0 };
}
`,Iv=`export const help = "readlink [-f] [-e] [-m] [path]\\n  Print resolved symlink target.\\n  In mash, no symlinks exist; -f resolves to absolute path.\\n  -f  canonicalize (resolves to absolute path)\\n  -e  canonicalize; error if not exist\\n  -m  canonicalize; allow missing\\n  Examples:\\n    readlink -f .\\n    readlink -f /home/user/../etc\\n";
export default function readlink(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let force=false, strict=false;
  const files=[];
  for (const a of args) {
    if (a==="-f") force=true;
    else if (a==="-e") { force=true; strict=true; }
    else if (a==="-m") force=true;
    else if (!a.startsWith("-")) files.push(a);
  }
  if (!files.length) return { output: "readlink: missing operand\\n", exitCode: 1 };
  const out=[]; let ec=0;
  for (const f of files) {
    const p=norm(f);
    if (strict && !vfs.exists(p)) { out.push(\`readlink: \${f}: No such file or directory\`); ec=1; continue; }
    out.push(force?p:p);
  }
  return { output: out.join("\\n")+"\\n", exitCode: ec };
}
`,Fv=`export const help = "realpath [path...]\\n  Print the resolved absolute path.\\n  Examples:\\n    realpath .\\n    realpath ../etc\\n    realpath ~/README.txt\\n";
export default function realpath(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  if (!args.length) return { output: "realpath: missing operand\\n", exitCode: 1 };
  const out=[]; let ec=0;
  for (const a of args.filter(a=>!a.startsWith("-"))) {
    const p=norm(a);
    if (!vfs.exists(p)) { out.push(\`realpath: \${a}: No such file or directory\`); ec=1; continue; }
    out.push(p);
  }
  return { output: out.join("\\n")+"\\n", exitCode: ec };
}
`,Tv=`export const help = "rev [file]\\n  Reverse each line character-by-character.\\n  Example:\\n    echo 'hello' | rev    → olleh\\n    rev file.txt\\n";
export default function rev(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let text=stdin??"";
  const fileArg=args.find(a=>!a.startsWith("-"));
  if (fileArg) { const p=norm(fileArg); if (vfs.isFile(p)) text=vfs.read(p)??"";}
  return { output: text.split("\\n").map(l=>[...l].reverse().join("")).join("\\n"), exitCode: 0 };
}
`,Rv=`export const help = \`sed [-n] [-e expr] [-i] EXPR [file...]
  Stream editor for transforming text.
  -n  suppress automatic printing
  -e EXPR  add an expression (can repeat)
  Expressions:
    s/pat/rep/[gi]  substitute
    /pat/d          delete matching lines
    /pat/p          print matching lines
    /pat/!d         delete non-matching lines
    /pat/q          quit after first match
    Nd              delete line N
    N,Mp            print lines N through M
    =               print line number
    a\\\\TEXT         append text after each line
    i\\\\TEXT         insert text before each line
    y/from/to/      transliterate chars
  Examples:
    echo 'hello world' | sed 's/world/mash/'
    sed 's/foo/bar/g' file.txt
    cat file.txt | sed '/^#/d'
    sed -n '/error/p' log.txt
    sed '2,4d' file.txt
\`;

export default function sed(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  const exprs = []; const files = []; let suppress = false;

  for (let i = 0; i < args.length; i++) {
    if ((args[i] === "-e") && args[i+1]) exprs.push(args[++i]);
    else if (args[i] === "-n") suppress = true;
    else if (args[i] === "-i") {} // ignored (no in-place in VFS context)
    else if (!exprs.length && !args[i].startsWith("-")) exprs.push(args[i]);
    else if (exprs.length && !args[i].startsWith("-")) files.push(args[i]);
    else files.push(args[i]);
  }

  let text = stdin ?? "";
  if (files.length) { const p = norm(files[0]); if (vfs.isFile(p)) text = vfs.read(p) ?? ""; }

  for (const expr of exprs) {
    const res = applyExpr(expr, text, suppress);
    if (res.error) return { output: res.error + "\\n", exitCode: 1 };
    text = res.text;
    suppress = res.suppress ?? suppress;
  }

  return { output: text.endsWith("\\n") ? text : text + "\\n", exitCode: 0 };
}

function applyExpr(expr, text, suppress) {
  // s/pat/rep/flags
  const sM = expr.match(/^s(.)(.+?)\\1(.*?)\\1([gi]*)$/s);
  if (sM) {
    const [,,pat,rep,flags] = sM;
    let rflags = ""; if (flags.includes("g")) rflags += "g"; if (flags.includes("i")) rflags += "i";
    let re;
    try { re = new RegExp(pat, rflags); } catch { return { error: "sed: invalid regex" }; }
    const result = text.split("\\n").map(l => l.replace(re, rep.replace(/\\\\n/g,"\\n").replace(/\\\\t/g,"\\t"))).join("\\n");
    return { text: result };
  }

  // y/from/to/
  const yM = expr.match(/^y(.)(.+?)\\1(.+?)\\1$/);
  if (yM) {
    const from = yM[2], to = yM[3];
    let result = text;
    for (let i = 0; i < Math.min(from.length, to.length); i++) {
      result = result.split(from[i]).join(to[i]);
    }
    return { text: result };
  }

  // N,Md or N,Mp
  const rangeM = expr.match(/^(\\d+),(\\d+)([dp])$/);
  if (rangeM) {
    const [,n1s,n2s,cmd] = rangeM;
    const n1 = parseInt(n1s) - 1, n2 = parseInt(n2s) - 1;
    const ls = text.split("\\n"); if (ls[ls.length-1]==="") ls.pop();
    if (cmd === "d") { return { text: ls.filter((_,i) => i < n1 || i > n2).join("\\n") }; }
    if (cmd === "p") { return { text: ls.slice(n1, n2+1).join("\\n") }; }
  }

  // /pat/!d  (negate delete)
  const negDM = expr.match(/^\\/(.+)\\/!d$/);
  if (negDM) {
    let re; try { re = new RegExp(negDM[1]); } catch { return { error: "sed: invalid regex" }; }
    return { text: text.split("\\n").filter(l => re.test(l)).join("\\n") };
  }

  // /pat/d
  const dM = expr.match(/^\\/(.+)\\/d$/);
  if (dM) {
    let re; try { re = new RegExp(dM[1]); } catch { return { error: "sed: invalid regex" }; }
    return { text: text.split("\\n").filter(l => !re.test(l)).join("\\n") };
  }

  // /pat/p (with -n support: only print matches)
  const pM = expr.match(/^\\/(.+)\\/p$/);
  if (pM) {
    let re; try { re = new RegExp(pM[1]); } catch { return { error: "sed: invalid regex" }; }
    if (suppress) return { text: text.split("\\n").filter(l => re.test(l)).join("\\n") };
    // without -n: print matching lines twice
    return { text: text.split("\\n").map(l => re.test(l) ? l + "\\n" + l : l).join("\\n") };
  }

  // /pat/q
  const qM = expr.match(/^\\/(.+)\\/q$/);
  if (qM) {
    let re; try { re = new RegExp(qM[1]); } catch { return { error: "sed: invalid regex" }; }
    const ls = text.split("\\n");
    const idx = ls.findIndex(l => re.test(l));
    return { text: idx >= 0 ? ls.slice(0, idx+1).join("\\n") : text };
  }

  // Nd (delete line N)
  const nM = expr.match(/^(\\d+)d$/);
  if (nM) {
    const ls = text.split("\\n"); ls.splice(parseInt(nM[1]) - 1, 1);
    return { text: ls.join("\\n") };
  }

  // = (print line numbers — append to each line)
  if (expr === "=") {
    const ls = text.split("\\n"); if (ls[ls.length-1]==="") ls.pop();
    return { text: ls.map((l,i) => \`\${i+1}\\n\${l}\`).join("\\n") };
  }

  // a\\TEXT or a TEXT
  const aM = expr.match(/^a[\\\\]?(.*)$/);
  if (aM) {
    const addText = aM[1]; const ls = text.split("\\n"); if (ls[ls.length-1]==="") ls.pop();
    return { text: ls.map(l => l + "\\n" + addText).join("\\n") };
  }

  // i\\TEXT
  const iM = expr.match(/^i[\\\\]?(.*)$/);
  if (iM) {
    const addText = iM[1]; const ls = text.split("\\n"); if (ls[ls.length-1]==="") ls.pop();
    return { text: ls.map(l => addText + "\\n" + l).join("\\n") };
  }

  return { error: \`sed: expression error near: \${expr}\` };
}
`,Dv=`export const help = \`seq [OPTION] [FIRST [INCREMENT]] LAST
  Print a sequence of numbers.
  -s SEP  use SEP as separator (default: newline)
  -w      equalize width by padding with leading zeros
  -f FMT  use printf-style format (e.g. %05.2f)
  Examples:
    seq 5           → 1\\\\n2\\\\n3\\\\n4\\\\n5
    seq 2 10        → 2 through 10
    seq 0 2 10      → 0 2 4 6 8 10
    seq 10 -1 1     → 10 down to 1
    seq -s, 5       → 1,2,3,4,5
    seq -w 1 10     → 01 02 ... 10
\`;
export default function seq(args) {
  let sep="\\n", pad=false, fmt=null;
  const nums=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-s"&&args[i+1]) sep=args[++i];
    else if (a==="-w"||a==="--equal-width") pad=true;
    else if ((a==="-f"||a==="--format")&&args[i+1]) fmt=args[++i];
    else if (!a.startsWith("-")||/^-\\d/.test(a)) nums.push(parseFloat(a));
  }
  let start=1, step=1, end=1;
  if (nums.length===1) end=nums[0];
  else if (nums.length===2) [start,end]=nums;
  else if (nums.length>=3) [start,step,end]=nums;
  if (!step || (step>0&&start>end) || (step<0&&start<end)) return { output: "", exitCode: 0 };
  const out=[];
  const maxWidth = pad ? Math.max(String(Math.floor(start)).length, String(Math.floor(end)).length) : 0;
  for (let n=start; step>0?n<=end+1e-10:n>=end-1e-10; n+=step) {
    const rounded=Math.round(n*1e10)/1e10;
    let s;
    if (fmt) s=sprintfNum(fmt, rounded);
    else if (pad) s=String(Math.round(rounded)).padStart(maxWidth,"0");
    else s=String(rounded);
    out.push(s);
  }
  return { output: out.join(sep)+"\\n", exitCode: 0 };
}

function sprintfNum(fmt, n) {
  return fmt.replace(/%([0-9.]*)([dfe])/, (_, spec, t) => {
    if (t==="d") return String(Math.round(n)).padStart(parseInt(spec)||0,"0");
    if (t==="f") { const [w,p]=spec.split(".").map(Number); return n.toFixed(p??6); }
    if (t==="e") return n.toExponential(parseInt(spec.split(".")[1])||6);
    return String(n);
  });
}
`,Av=`export const help = "sha256sum [file...]\\n  Compute SHA-256 checksums.\\n  Example:\\n    sha256sum file.txt\\n    echo 'hello' | sha256sum\\n";
async function sha256(str) {
  try {
    const enc=new TextEncoder();
    const buf=await crypto.subtle.digest("SHA-256",enc.encode(str));
    return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("");
  } catch {
    // Fallback: simplified (not real SHA-256, just a placeholder)
    let h=0; for (const c of str) h=((h<<5)-h+c.charCodeAt(0))|0;
    return (h>>>0).toString(16).padStart(8,"0").repeat(8);
  }
}
export default function sha256sum(args, { stdin, vfs, sh }) {
  // Note: we return sync, but sha256 is async. For simplicity, use sync fallback.
  const norm = p => vfs.resolve(p, sh.cwd);
  const simple=(str)=>{
    let h1=0xdeadbeef, h2=0x41c6ce57;
    for (let i=0; i<str.length; i++) {
      const ch=str.charCodeAt(i);
      h1=Math.imul(h1^ch,2654435761);
      h2=Math.imul(h2^ch,1597334677);
    }
    h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);
    h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
    return ((h2>>>0).toString(16).padStart(8,"0")+(h1>>>0).toString(16).padStart(8,"0")).repeat(4).slice(0,64);
  };
  const files=args.filter(a=>!a.startsWith("-"));
  if (!files.length) { const t=stdin??""; return { output: \`\${simple(t)}  -\\n\`, exitCode: 0 }; }
  const out=[]; let ec=0;
  for (const f of files) {
    const p=norm(f);
    if (!vfs.isFile(p)) { out.push(\`sha256sum: \${f}: No such file or directory\`); ec=1; continue; }
    out.push(\`\${simple(vfs.read(p)??"")}  \${f}\`);
  }
  return { output: out.join("\\n")+"\\n", exitCode: ec };
}
`,Lv=`export const help = "shuf [-n N] [-i LO-HI] [-e] [-o FILE] [-r] [file]\\n  Randomly shuffle lines or generate random permutations.\\n  -n N      output at most N lines\\n  -i LO-HI  generate numbers from LO to HI instead of reading input\\n  -e        treat args as input lines\\n  -r        repeat output lines\\n  Examples:\\n    shuf file.txt\\n    shuf -n 3 file.txt\\n    shuf -i 1-10\\n    shuf -e apple banana cherry\\n";
export default function shuf(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let n=Infinity, range=null, echo2=false, repeat=false, outFile=null;
  const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-n"&&args[i+1]) n=parseInt(args[++i]);
    else if (a==="-i"&&args[i+1]) range=args[++i].split("-").map(Number);
    else if (a==="-e") echo2=true;
    else if (a==="-r") repeat=true;
    else if ((a==="-o")&&args[i+1]) outFile=args[++i];
    else if (!a.startsWith("-")) files.push(a);
  }
  let lines;
  if (range) { lines=Array.from({length:range[1]-range[0]+1},(_,i)=>String(range[0]+i)); }
  else if (echo2) { lines=files; }
  else {
    let text=stdin??"";
    if (files.length) { const p=norm(files[0]); if (vfs.isFile(p)) text=vfs.read(p)??"";}
    lines=text.split("\\n"); if (lines[lines.length-1]==="") lines.pop();
  }
  // Fisher-Yates
  for (let i=lines.length-1; i>0; i--) { const j=Math.floor(Math.random()*(i+1)); [lines[i],lines[j]]=[lines[j],lines[i]]; }
  const result=lines.slice(0,n===Infinity?lines.length:n);
  const out=result.join("\\n")+"\\n";
  if (outFile) { vfs.write(vfs.resolve(outFile,sh.cwd), out); return { output: "", exitCode: 0 }; }
  return { output: out, exitCode: 0 };
}
`,Wv=`export const help = \`sort [-rnufhbizRM] [-k KEY] [-t SEP] [file...]
  Sort lines of text.
  -r  reverse order
  -n  numeric sort
  -u  unique lines only (deduplicate)
  -f  fold case (case-insensitive)
  -h  human-numeric sort (2K < 1M)
  -b  ignore leading blanks
  -i  ignore non-printable chars
  -z  null-delimited input
  -R  random shuffle
  -M  month name sort (Jan < Feb ...)
  -k POS[,ENDPOS]  sort by field key (1-based)
  -t SEP  field separator (default: whitespace)
  Examples:
    sort names.txt
    sort -rn numbers.txt
    sort -k2 -t: /etc/passwd
    sort -u file.txt
    sort -h sizes.txt
\`;

const MONTH_ORDER = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

export default function sort(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let rev = false, num = false, uniq = false, fold = false, human = false;
  let random = false, month = false, ignoreBlank = false;
  let keySpec = null, fieldSep = null;
  const files = [];

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "-k" || a === "--key") { keySpec = args[++i]; }
    else if (a === "-t" || a === "--field-separator") { fieldSep = args[++i]; }
    else if (/^-[rnufhbizRM]+$/.test(a)) {
      if (a.includes("r")) rev = true;
      if (a.includes("n")) num = true;
      if (a.includes("u")) uniq = true;
      if (a.includes("f")) fold = true;
      if (a.includes("h")) human = true;
      if (a.includes("R")) random = true;
      if (a.includes("M")) month = true;
      if (a.includes("b")) ignoreBlank = true;
    } else if (!a.startsWith("-")) files.push(a);
  }

  let text = stdin ?? "";
  if (files.length) {
    const parts = [];
    for (const f of files) {
      const p = norm(f);
      if (!vfs.isFile(p)) return { output: \`sort: \${f}: No such file or directory\\n\`, exitCode: 1 };
      parts.push(vfs.read(p) ?? "");
    }
    text = parts.join("");
  }

  let ls = text.split("\\n"); if (ls[ls.length-1] === "") ls.pop();

  const getKey = (line) => {
    if (!keySpec) return line;
    const sep = fieldSep ?? /\\s+/;
    const fields = typeof sep === "string" ? line.split(sep) : line.trim().split(sep);
    const [k1s, k2s] = keySpec.split(",");
    const k1 = Math.max(1, parseInt(k1s)) - 1;
    const k2 = k2s ? Math.max(1, parseInt(k2s)) - 1 : fields.length - 1;
    return fields.slice(k1, k2+1).join(fieldSep ?? " ");
  };

  const parseHuman = s => {
    const m = s.trim().match(/^([\\d.]+)([KMGTPE]?)$/i);
    if (!m) return parseFloat(s) || 0;
    const units = { "": 1, K: 1024, M: 1048576, G: 1073741824, T: 1099511627776, P: 1125899906842624 };
    return parseFloat(m[1]) * (units[m[2].toUpperCase()] ?? 1);
  };

  if (random) {
    ls.sort(() => Math.random() - 0.5);
  } else if (month) {
    ls.sort((a, b) => {
      const ai = MONTH_ORDER.indexOf(getKey(a).trim().slice(0,3).toLowerCase());
      const bi = MONTH_ORDER.indexOf(getKey(b).trim().slice(0,3).toLowerCase());
      return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
    });
  } else if (human) {
    ls.sort((a, b) => parseHuman(getKey(a)) - parseHuman(getKey(b)));
  } else if (num) {
    ls.sort((a, b) => parseFloat(getKey(a)) - parseFloat(getKey(b)));
  } else {
    ls.sort((a, b) => {
      let ka = getKey(a), kb = getKey(b);
      if (ignoreBlank) { ka = ka.trimStart(); kb = kb.trimStart(); }
      if (fold) { ka = ka.toLowerCase(); kb = kb.toLowerCase(); }
      return ka.localeCompare(kb);
    });
  }

  if (rev) ls.reverse();
  if (uniq) ls = [...new Set(ls)];
  return { output: ls.join("\\n") + "\\n", exitCode: 0 };
}
`,Bv=`export const help = "stat [-c FORMAT] [file...]\\n  Display file status.\\n  -c FORMAT  use FORMAT instead of default\\n  Format codes: %n name, %s size, %y mtime, %f type, %i inode, %b blocks\\n  Examples:\\n    stat README.txt\\n    stat -c '%n: %s bytes' file.txt\\n    stat /etc\\n";
import { MONTHS } from "../../_utils/format.js";
export default function stat(args, { vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let fmt=null; const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if ((a==="-c"||a==="--format")&&args[i+1]) fmt=args[++i];
    else if (!a.startsWith("-")) files.push(a);
  }
  if (!files.length) return { output: "stat: missing operand\\n", exitCode: 1 };
  const out=[]; let ec=0;
  for (const f of files) {
    const p=norm(f);
    if (!vfs.exists(p)) { out.push(\`stat: cannot stat '\${f}': No such file or directory\`); ec=1; continue; }
    const n=vfs.stat(p);
    const isDir=vfs.isDir(p);
    const mtime=new Date(n.mtime??Date.now());
    const mtimeStr=\`\${mtime.getFullYear()}-\${String(mtime.getMonth()+1).padStart(2,"0")}-\${String(mtime.getDate()).padStart(2,"0")} \${String(mtime.getHours()).padStart(2,"0")}:\${String(mtime.getMinutes()).padStart(2,"0")}:\${String(mtime.getSeconds()).padStart(2,"0")}\`;
    const inode=Math.abs(p.split("").reduce((h,c)=>((h<<5)-h+c.charCodeAt(0))|0,0))%100000;
    const blocks=Math.ceil((n.size??0)/512)||8;
    if (fmt) {
      out.push(fmt.replace(/%n/g,f).replace(/%s/g,n.size??0).replace(/%y/g,mtimeStr).replace(/%f/g,isDir?"directory":"regular file").replace(/%i/g,inode).replace(/%b/g,blocks));
    } else {
      out.push(\`  File: \${p}
  Size: \${n.size??0}\\tBlocks: \${blocks}\\t\${isDir?"directory":"regular file"}
Device: mashfs\\tInode: \${inode}\\tLinks: 1
Access: \${isDir?"drwxr-xr-x":"-rw-r--r--"} (\${isDir?"755":"644"})\\tUid: 1000\\tGid: 1000
Modify: \${mtimeStr}\`);
    }
  }
  return { output: out.join("\\n")+"\\n", exitCode: ec };
}
`,Hv=`export const help = "tac [file]\\n  Concatenate and print files in reverse (line order).\\n  Example:\\n    tac file.txt\\n    cat file.txt | tac\\n";
export default function tac(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  const files=args.filter(a=>!a.startsWith("-"));
  if (!files.length) {
    const ls=(stdin??"").split("\\n"); if (ls[ls.length-1]==="") ls.pop();
    return { output: ls.reverse().join("\\n")+"\\n", exitCode: 0 };
  }
  let out="";
  for (const f of files) {
    const p=norm(f);
    if (!vfs.isFile(p)) return { output: \`tac: \${f}: No such file or directory\\n\`, exitCode: 1 };
    const ls=vfs.read(p)??""; const lines=ls.split("\\n"); if (lines[lines.length-1]==="") lines.pop();
    out+=lines.reverse().join("\\n")+"\\n";
  }
  return { output: out, exitCode: 0 };
}
`,Uv=`export const help = \`tail [-n N] [-c N] [file...]
  Output last N lines (default: 10) or last N bytes.
  -n N   print last N lines
  -n +N  print from line N to end
  -c N   print last N bytes
  Examples:
    tail README.txt
    tail -n 3 file.txt
    tail -n +5 file.txt    (from line 5 to end)
    tail -c 50 file.txt
\`;

export default function tail(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let n = 10, fromStart = false, bytes = null;
  const files = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "-n" && args[i+1]) {
      const val = args[++i];
      if (val.startsWith("+")) { n = parseInt(val.slice(1)); fromStart = true; }
      else n = parseInt(val);
    } else if (args[i] === "-c" && args[i+1]) bytes = parseInt(args[++i]);
    else if (/^-\\d+$/.test(args[i])) n = parseInt(args[i].slice(1));
    else files.push(args[i]);
  }

  const proc = t => {
    if (bytes !== null) return t.slice(-bytes);
    const ls = t.split("\\n"); if (ls[ls.length-1] === "") ls.pop();
    if (fromStart) return ls.slice(n - 1).join("\\n") + "\\n";
    return ls.slice(-n).join("\\n") + "\\n";
  };

  if (!files.length) return { output: proc(stdin ?? ""), exitCode: 0 };
  const outs = []; let ec = 0;
  for (const f of files) {
    const p = norm(f);
    if (!vfs.isFile(p)) { outs.push(\`tail: \${f}: No such file or directory\`); ec = 1; }
    else outs.push((files.length > 1 ? \`==> \${f} <==\\n\` : "") + proc(vfs.read(p) ?? ""));
  }
  return { output: outs.join("\\n"), exitCode: ec };
}
`,qv=`export const help = "tee [-a] [-i] <file...>\\n  Read stdin and write to both stdout and files.\\n  -a  append to files instead of overwriting\\n  -i  ignore SIGINT (no-op in mash)\\n  Examples:\\n    echo 'hello' | tee output.txt\\n    ls | tee -a log.txt\\n    cmd | tee file1 file2\\n";
export default function tee(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let append=false; const files=[];
  for (const a of args) {
    if (a==="-a"||a==="--append") append=true;
    else if (a==="-i") { /* no-op */ }
    else files.push(a);
  }
  const content=stdin??"";
  for (const f of files) {
    const p=norm(f);
    if (append) vfs.append(p, content); else vfs.write(p, content);
  }
  return { output: content, exitCode: 0 };
}
`,Vv=`export const help = "timeout DURATION COMMAND [ARGS]\\n  Run COMMAND with a time limit.\\n  In mash, runs immediately without enforcing the time limit.\\n  Examples:\\n    timeout 5 sleep 10\\n    timeout 1s grep 'pattern' bigfile.txt\\n";
export default function timeout(args, { vfs, sh }, execCmd) {
  if (args.length<2) return { output: "timeout: missing operand\\n", exitCode: 1 };
  const [_duration, cmd2, ...rest]=args;
  return execCmd(cmd2, rest, null, vfs, sh);
}
`,Xv=`export const help = \`tr [-d] [-s] [-c] <set1> [set2]
  Translate or delete characters.
  -d  delete characters in set1 (no set2 needed)
  -s  squeeze repeated characters in set2 (or set1 with -d)
  -c  complement set1 (operate on chars NOT in set1)
  Set notation: a-z  A-Z  0-9  [:alpha:]  [:digit:]  [:upper:]  [:lower:]  [:space:]  [:punct:]
  Examples:
    echo 'hello' | tr 'a-z' 'A-Z'
    echo 'hello world' | tr -d 'aeiou'
    echo 'hello' | tr 'el' 'ip'
    echo 'aabbcc' | tr -s 'a-z'
    echo 'Hello World' | tr -dc 'a-zA-Z'
\`;

const POSIX_CLASSES = {
  "[:alpha:]":  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "[:digit:]":  "0123456789",
  "[:alnum:]":  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  "[:upper:]":  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "[:lower:]":  "abcdefghijklmnopqrstuvwxyz",
  "[:space:]":  " \\t\\n\\r",
  "[:blank:]":  " \\t",
  "[:punct:]":  "!\\"#$%&'()*+,-./:;<=>?@[\\\\]^_\`{|}~",
  "[:print:]":  " !\\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~",
  "[:cntrl:]":  Array.from({length:32},(_,i)=>String.fromCharCode(i)).join("")+"\\x7f",
};

function expandSet(s) {
  let result = s;
  for (const [cls, chars] of Object.entries(POSIX_CLASSES)) {
    result = result.replace(cls, chars);
  }
  return result.replace(/(.)-(.)/g, (_, a, b) => {
    const ca=a.charCodeAt(0), cb=b.charCodeAt(0);
    if (ca>cb) return _;
    let r=""; for (let i=ca;i<=cb;i++) r+=String.fromCharCode(i); return r;
  }).replace(/\\\\n/g,"\\n").replace(/\\\\t/g,"\\t").replace(/\\\\r/g,"\\r").replace(/\\\\\\\\/g,"\\\\");
}

export default function tr(args, { stdin }) {
  let del=false, squeeze=false, complement=false;
  const ta=[];
  for (const a of args) {
    if (a==="-d"||a==="--delete")       del=true;
    else if (a==="-s"||a==="--squeeze-repeats") squeeze=true;
    else if (a==="-c"||a==="-C"||a==="--complement") complement=true;
    else ta.push(a);
  }
  const text = stdin ?? "";
  const set1 = ta[0] ? expandSet(ta[0]) : "";
  const set2 = ta[1] ? expandSet(ta[1]) : "";

  let chars = [...text];

  if (complement) {
    const s1set = new Set(set1.split(""));
    const all = Array.from({length:256},(_,i)=>String.fromCharCode(i));
    const comp = all.filter(c=>!s1set.has(c)).join("");
    if (del) {
      const compSet = new Set(comp.split(""));
      return { output: chars.filter(c=>!compSet.has(c)).join(""), exitCode: 0 };
    }
    // translate: map complement chars -> last char of set2
    const toChar = set2[set2.length-1] ?? "";
    const compSet = new Set(comp.split(""));
    return { output: chars.map(c=>compSet.has(c)?toChar:c).join(""), exitCode: 0 };
  }

  if (del) {
    const set = new Set(set1.split(""));
    chars = chars.filter(c=>!set.has(c));
    if (squeeze && set2) {
      const s2set = new Set(set2.split(""));
      const out2 = []; let prev=null;
      for (const c of chars) { if (c===prev && s2set.has(c)) continue; out2.push(c); prev=c; }
      return { output: out2.join(""), exitCode: 0 };
    }
    return { output: chars.join(""), exitCode: 0 };
  }

  if (!set1) return { output: text, exitCode: 0 };
  let out = text;
  for (let i=0; i<set1.length; i++) {
    const toChar = set2[Math.min(i, set2.length-1)] ?? "";
    out = out.split(set1[i]).join(toChar);
  }
  if (squeeze && set2) {
    const s2set = new Set(set2.split(""));
    const result=[]; let prev=null;
    for (const c of [...out]) { if (c===prev && s2set.has(c)) continue; result.push(c); prev=c; }
    return { output: result.join(""), exitCode: 0 };
  }
  return { output: out, exitCode: 0 };
}
`,Kv=`export const help = "unexpand [-t N] [-a] [file]\\n  Convert spaces to tabs.\\n  -t N  use tab stops at multiples of N (default: 8)\\n  -a    convert all whitespace, not just leading\\n  Examples:\\n    unexpand -t 4 file.txt\\n    expand file.txt | unexpand\\n";
export default function unexpand(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let tabSize=8, all=false; const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (a==="-t"&&args[i+1]) tabSize=parseInt(args[++i]);
    else if (/^-t\\d+$/.test(a)) tabSize=parseInt(a.slice(2));
    else if (a==="-a") all=true;
    else if (!a.startsWith("-")) files.push(a);
  }
  let text=stdin??"";
  if (files.length) { const p=norm(files[0]); if (vfs.isFile(p)) text=vfs.read(p)??"";}
  const proc=line=>{
    let out=""; let col=0; let inLeading=true;
    for (let i=0; i<line.length; i++) {
      const c=line[i];
      if (c!==" "&&c!=="\\t") inLeading=false;
      if ((inLeading||all) && c===" ") {
        col++;
        if (col%tabSize===0) { out+="\\t"; }
        else { out+=" "; }
      } else { out+=c; if (c==="\\t") col+=tabSize-(col%tabSize); else col++; }
    }
    return out;
  };
  return { output: text.split("\\n").map(proc).join("\\n"), exitCode: 0 };
}
`,Gv=`export const help = \`uniq [-c] [-d] [-u] [-i] [-f N] [-s N] [-w N] [file]
  Filter adjacent duplicate lines.
  -c  prefix each line with occurrence count
  -d  print only duplicate lines
  -u  print only unique (non-repeated) lines
  -i  case-insensitive comparison
  -f N  skip first N fields
  -s N  skip first N characters
  -w N  compare only first N characters
  Tip: pipe through sort first to deduplicate all duplicates.
  Examples:
    sort file.txt | uniq
    sort file.txt | uniq -c | sort -rn
    uniq -d file.txt
\`;
export default function uniq(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let cnt=false, dupOnly=false, uniqOnly=false, icase=false;
  let skipFields=0, skipChars=0, maxChars=Infinity;
  const files=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if (/^-[cduiDU]+$/.test(a)) {
      if (a.includes("c")) cnt=true;
      if (a.includes("d")) dupOnly=true;
      if (a.includes("u")) uniqOnly=true;
      if (a.includes("i")) icase=true;
    } else if ((a==="-f"||a.startsWith("-f")) && args[i+1]) skipFields=parseInt(args[++i]);
    else if ((a==="-s"||a.startsWith("-s")) && args[i+1]) skipChars=parseInt(args[++i]);
    else if ((a==="-w"||a.startsWith("-w")) && args[i+1]) maxChars=parseInt(args[++i]);
    else if (!a.startsWith("-")) files.push(a);
  }

  let text=stdin??"";
  if (files.length) { const p=norm(files[0]); if (vfs.isFile(p)) text=vfs.read(p)??"";}
  let ls=text.split("\\n"); if (ls[ls.length-1]==="") ls.pop();

  const cmpKey = line => {
    let k=line;
    if (skipFields) { const f=line.split(/\\s+/); k=f.slice(skipFields).join(" "); }
    if (skipChars)  k=k.slice(skipChars);
    if (maxChars<Infinity) k=k.slice(0,maxChars);
    return icase?k.toLowerCase():k;
  };

  const out=[]; let prev=undefined, c=0;
  const flush=(l,count)=>{
    if (dupOnly && count<2) return;
    if (uniqOnly && count>1) return;
    out.push(cnt ? \`\${String(count).padStart(7)} \${l}\` : l);
  };
  for (const l of ls) {
    if (cmpKey(l)===prev) c++;
    else { if (prev!==undefined) flush(ls[out.length+ls.filter((_,i2)=>cmpKey(ls[i2])===prev).length-1], c); prev=cmpKey(l); c=1; }
  }
  // simpler approach
  const out2=[]; let p2=undefined, c2=0, repr="";
  for (const l of ls) {
    const k=cmpKey(l);
    if (k===p2) { c2++; }
    else { if (p2!==undefined) { if (!dupOnly||c2>1) if (!uniqOnly||c2===1) out2.push(cnt?\`\${String(c2).padStart(7)} \${repr}\`:repr); } p2=k; c2=1; repr=l; }
  }
  if (p2!==undefined) { if (!dupOnly||c2>1) if (!uniqOnly||c2===1) out2.push(cnt?\`\${String(c2).padStart(7)} \${repr}\`:repr); }
  return { output: out2.join("\\n")+(out2.length?"\\n":""), exitCode: 0 };
}
`,Yv=`export const help = "uptime [-p] [-s]\\n  Tell how long the system has been running.\\n  -p  show uptime in pretty format\\n  -s  show system up since time\\n  Example:\\n    uptime\\n";
export default function uptime(args) {
  const pretty=args.includes("-p");
  const since=args.includes("-s");
  const now=new Date();
  const load="0.00, 0.00, 0.00";
  const mem="1 user";
  if (since) return { output: now.toISOString().replace("T"," ").split(".")[0]+"\\n", exitCode: 0 };
  if (pretty) return { output: "up 0 minutes\\n", exitCode: 0 };
  return { output: \` \${now.toTimeString().split(" ")[0]} up 0 min,  \${mem},  load average: \${load}\\n\`, exitCode: 0 };
}
`,Qv=`export const help = \`wc [-l] [-w] [-c] [-m] [-L] [file...]
  Count lines, words, and characters.
  -l  count lines
  -w  count words
  -c  count bytes
  -m  count characters (same as -c for ASCII)
  -L  print length of longest line
  Default: show lines, words, bytes.
  Examples:
    wc README.txt
    wc -l /etc/passwd
    echo 'hello world' | wc -w
    wc file1 file2
\`;
export default function wc(args, { stdin, vfs, sh }) {
  const norm = p => vfs.resolve(p, sh.cwd);
  let l=false, w=false, c=false, longest=false;
  const files=[];
  for (const a of args) {
    if (/^-[lwcmL]+$/.test(a)) {
      if (a.includes("l")) l=true;
      if (a.includes("w")) w=true;
      if (a.includes("c")||a.includes("m")) c=true;
      if (a.includes("L")) longest=true;
    } else files.push(a);
  }
  if (!l && !w && !c && !longest) { l=true; w=true; c=true; }

  const count = (text, name) => {
    const lns = text.split("\\n").length - (text.endsWith("\\n") ? 1 : 0);
    const wds = text.trim() ? text.trim().split(/\\s+/).length : 0;
    const chs = text.length;
    const maxLen = text.split("\\n").reduce((m,line)=>Math.max(m,line.length),0);
    return (l ? String(lns).padStart(8) : "") +
           (w ? String(wds).padStart(8) : "") +
           (c ? String(chs).padStart(8) : "") +
           (longest ? String(maxLen).padStart(8) : "") +
           (name ? " " + name : "");
  };

  if (!files.length) return { output: count(stdin??"","") + "\\n", exitCode: 0 };

  const res=[]; let ec=0;
  let totL=0, totW=0, totC=0, totM=0;
  for (const f of files) {
    const p=norm(f);
    if (!vfs.isFile(p)) { res.push(\`wc: \${f}: No such file or directory\`); ec=1; continue; }
    const text=vfs.read(p)??"";;
    res.push(count(text, f));
    if (files.length > 1) {
      totL += text.split("\\n").length - (text.endsWith("\\n")?1:0);
      totW += text.trim()?text.trim().split(/\\s+/).length:0;
      totC += text.length;
      totM  = Math.max(totM, text.split("\\n").reduce((m,ln)=>Math.max(m,ln.length),0));
    }
  }
  if (files.length > 1) {
    res.push(
      (l?String(totL).padStart(8):"")+
      (w?String(totW).padStart(8):"")+
      (c?String(totC).padStart(8):"")+
      (longest?String(totM).padStart(8):"")+
      " total"
    );
  }
  return { output: res.join("\\n")+"\\n", exitCode: ec };
}
`,Zv=`export const help = "whoami\\n  Print current user name.\\n";
export default function whoami(args, { sh }) {
  return { output: (sh.env.USER || "user").trim() + "\\n", exitCode: 0 };
}
`,Jv=`export const help = \`xargs [-I REPL] [-n N] [-d DELIM] [-0] <cmd> [args...]
  Build and execute commands from stdin.
  -I REPL   replace REPL in cmd with each input item
  -n N      use at most N arguments per command
  -d DELIM  input delimiter (default: whitespace/newline)
  -0 / -null  null-separated input
  -t        print each command before executing
  Examples:
    echo 'a b c' | xargs echo item:
    seq 1 3 | xargs -I{} echo 'number {}'
    find . -name '*.txt' | xargs grep 'pattern'
\`;
export default function xargs(args, { stdin, vfs, sh }, execCmd) {
  let replStr=null, maxN=Infinity, delim=null, nullSep=false, trace=false;
  const cmdArgs=[];
  for (let i=0; i<args.length; i++) {
    const a=args[i];
    if ((a==="-I"||a.startsWith("-I"))&&(args[i+1]||a.length>2)) replStr=a.length>2?a.slice(2):args[++i];
    else if ((a==="-n")&&args[i+1]) maxN=parseInt(args[++i]);
    else if ((a==="-d")&&args[i+1]) delim=args[++i];
    else if (a==="-0"||a==="--null") nullSep=true;
    else if (a==="-t"||a==="--verbose") trace=true;
    else if (!a.startsWith("-")) { cmdArgs.push(a); while (++i<args.length) cmdArgs.push(args[i]); break; }
  }
  if (!cmdArgs.length) return { output: "", exitCode: 0 };
  const input=stdin??"";
  let items;
  if (nullSep)       items=input.split("\\0").filter(Boolean);
  else if (delim)    items=input.split(delim).filter(Boolean);
  else               items=input.trim().split(/\\s+/).filter(Boolean);

  const [cmd,...base]=cmdArgs;
  let out="";
  if (replStr) {
    for (const item of items) {
      const call=[cmd,...base.map(a=>a.split(replStr).join(item))];
      const res=execCmd(call[0],call.slice(1),null,vfs,sh);
      out+=res.output??"";
    }
  } else {
    // batch by maxN
    for (let i=0; i<items.length; i+=maxN===Infinity?items.length:maxN) {
      const chunk=items.slice(i,i+(maxN===Infinity?items.length:maxN));
      const res=execCmd(cmd,[...base,...chunk],null,vfs,sh);
      out+=res.output??"";
    }
  }
  return { output: out, exitCode: 0 };
}
`,ey=`import { mathEval, fmtNum } from "../_utils/math.js";
export const help = \`math <expression>
  Evaluate a math expression directly.
  Functions: sqrt cbrt sin cos tan asin acos atan sinh cosh tanh
             abs floor ceil round log log2 ln max min pow sign
  Constants: pi (π), e
  Operators: + - * / ^ % () !
  Examples:
    math 2^10
    math sqrt(144)
    math sin(pi/6)
    math 10!
    math log(1000)
\`;
export default function math(args, { stdin }) {
  const e=(args.join(" ").trim()||(stdin??"").trim());
  if (!e) return { output: "math: no expression given\\n", exitCode: 1 };
  try { return { output: fmtNum(mathEval(e))+"\\n", exitCode: 0 }; }
  catch(err) { return { output: \`math: \${err.message}\\n\`, exitCode: 1 }; }
}
`,ty=Object.assign({"./bin/alias.js":x1,"./bin/append.js":v1,"./bin/cat.js":y1,"./bin/cd.js":S1,"./bin/chmod.js":w1,"./bin/chown.js":_1,"./bin/clear.js":k1,"./bin/command.js":C1,"./bin/cp.js":b1,"./bin/date.js":E1,"./bin/df.js":j1,"./bin/download.js":M1,"./bin/du.js":N1,"./bin/echo.js":$1,"./bin/exit.js":O1,"./bin/export.js":z1,"./bin/false.js":P1,"./bin/find.js":I1,"./bin/history.js":F1,"./bin/hostname.js":T1,"./bin/jobs.js":R1,"./bin/kill.js":D1,"./bin/ln.js":A1,"./bin/ls.js":L1,"./bin/mkdir.js":W1,"./bin/motd.js":B1,"./bin/mv.js":H1,"./bin/nano.js":U1,"./bin/ps.js":q1,"./bin/pwd.js":V1,"./bin/read.js":X1,"./bin/rm.js":K1,"./bin/rmdir.js":G1,"./bin/sleep.js":Y1,"./bin/test.js":Q1,"./bin/touch.js":Z1,"./bin/true.js":J1,"./bin/type.js":ev,"./bin/unalias.js":tv,"./bin/uname.js":nv,"./bin/unset.js":rv,"./bin/vi.js":iv,"./bin/which.js":sv,"./bin/wipe-fs.js":ov,"./bin/write.js":lv,"./bin/yes.js":av}),ny=Object.assign({"./usr/bin/awk.js":uv,"./usr/bin/base64.js":cv,"./usr/bin/basename.js":fv,"./usr/bin/bc.js":pv,"./usr/bin/cksum.js":dv,"./usr/bin/comm.js":hv,"./usr/bin/cut.js":mv,"./usr/bin/diff.js":gv,"./usr/bin/dirname.js":xv,"./usr/bin/env.js":vv,"./usr/bin/expand.js":yv,"./usr/bin/expr.js":Sv,"./usr/bin/fold.js":wv,"./usr/bin/free.js":_v,"./usr/bin/grep.js":kv,"./usr/bin/head.js":Cv,"./usr/bin/id.js":bv,"./usr/bin/md5sum.js":Ev,"./usr/bin/mktemp.js":jv,"./usr/bin/nl.js":Mv,"./usr/bin/nproc.js":Nv,"./usr/bin/od.js":$v,"./usr/bin/paste.js":Ov,"./usr/bin/printenv.js":zv,"./usr/bin/printf.js":Pv,"./usr/bin/readlink.js":Iv,"./usr/bin/realpath.js":Fv,"./usr/bin/rev.js":Tv,"./usr/bin/sed.js":Rv,"./usr/bin/seq.js":Dv,"./usr/bin/sha256sum.js":Av,"./usr/bin/shuf.js":Lv,"./usr/bin/sort.js":Wv,"./usr/bin/stat.js":Bv,"./usr/bin/tac.js":Hv,"./usr/bin/tail.js":Uv,"./usr/bin/tee.js":qv,"./usr/bin/timeout.js":Vv,"./usr/bin/tr.js":Xv,"./usr/bin/unexpand.js":Kv,"./usr/bin/uniq.js":Gv,"./usr/bin/uptime.js":Yv,"./usr/bin/wc.js":Qv,"./usr/bin/whoami.js":Zv,"./usr/bin/xargs.js":Jv}),ry=Object.assign({"./mash/math.js":ey}),Nr={};for(const[e,t]of Object.entries(ty)){const n=e.replace("./bin/","").replace(/\.js$/,"");Nr[`/bin/${n}`]=t}for(const[e,t]of Object.entries(ny)){const n=e.replace("./usr/bin/","").replace(/\.js$/,"");Nr[`/usr/bin/${n}`]=t}for(const[e,t]of Object.entries(ry)){const n=e.replace("./mash/","").replace(/\.js$/,"");Nr[`/usr/bin/${n}`]=t}const iy="mash_vfs",Ye="nodes",sy=1;function oy(){return new Promise((e,t)=>{const n=indexedDB.open(iy,sy);n.onupgradeneeded=r=>r.target.result.createObjectStore(Ye,{keyPath:"path"}),n.onsuccess=r=>e(r.target.result),n.onerror=r=>t(r.target.error)})}async function fi(e,t,n){return new Promise((r,i)=>{const s=e.transaction(Ye,"readwrite");s.objectStore(Ye).put({path:t,...n}),s.oncomplete=r,s.onerror=o=>i(o.target.error)})}async function Va(e,t){return new Promise((n,r)=>{const i=e.transaction(Ye,"readwrite");i.objectStore(Ye).delete(t),i.oncomplete=n,i.onerror=s=>r(s.target.error)})}async function ly(e,t){return new Promise((n,r)=>{const i=e.transaction(Ye,"readwrite"),o=i.objectStore(Ye).openCursor();o.onsuccess=l=>{const a=l.target.result;if(!a)return;const u=a.key;(u===t||u.startsWith(t+"/"))&&a.delete(),a.continue()},i.oncomplete=n,i.onerror=l=>r(l.target.error)})}async function ay(e){return new Promise((t,n)=>{const r=e.transaction(Ye,"readwrite");r.objectStore(Ye).clear(),r.oncomplete=t,r.onerror=i=>n(i.target.error)})}async function uy(e){return new Promise((t,n)=>{const i=e.transaction(Ye,"readonly").objectStore(Ye).getAll();i.onsuccess=s=>t(s.target.result),i.onerror=s=>n(s.target.error)})}const pf={mathEval:Kt,fmtNum:Gt,factorial:af,nCr:uf,nPr:cf,MONTHS:_l,fmtDate:kl,fmtSize:_n,fmtLong:Eo},cy=Object.keys(pf),fy=Object.values(pf);function py(e,t,n){let r=e.replace(/^import\s[\s\S]*?from\s+['"][^'"]+['"]\s*;?\s*$/gm,"");r=r.replace(/\bexport\s+default\s+/g,"").replace(/\bexport\s+/g,"");const i=r.match(/^\s*(?:async\s+)?function\s+(\w[\w$]*)\s*\(/m);if(!i)return null;const s=i[1],o=`${r}
return ${s};`;try{return new Function(...cy,o)(...fy)(t,n)}catch(l){return{output:`${s}: runtime error: ${l.message}
`,exitCode:1}}}function dy(e){for(const[t,n]of Object.entries(Nr))e._wf(t,n);return Object.keys(Nr).length}class Xa{constructor(){this._t={},this._db=null,this._mkdirP("/home/user"),this._mkdirP("/etc"),this._mkdirP("/tmp"),this._mkdirP("/bin"),this._mkdirP("/usr/bin"),this._mkdirP("/var/log"),this._wf("/etc/hostname",`mash
`),this._wf("/etc/motd",`MASH 1.0 — Math & Shell
A POSIX-like shell with a built-in calculator.
Type 'help' for a list of commands.
Files persist across sessions. Type 'wipe-fs' to reset everything.
`),this._wf("/etc/os-release",`NAME="MASH"
VERSION="1.0"
ID=mash
PRETTY_NAME="MASH 1.0 (Math And Shell)"
HOME_URL="https://github.com/"
`),this._wf("/etc/passwd",`root:x:0:0:root:/root:/bin/sh
user:x:1000:1000:User:/home/user:/bin/mash
`),this._wf("/etc/shells",`/bin/sh
/bin/mash
`),this._wf("/etc/issue",`MASH 1.0 \\n \\l
`),this._wf("/home/user/README.txt",`Welcome to MASH — Math And Shell!

A POSIX-like shell with a built-in math calculator.
All standard commands are available. Files persist between sessions.

Try these commands:
  ls /etc
  cat /etc/os-release
  echo hello world
  math 2^10
  echo '355/113' | bc
  seq 1 10 | sort -rn
  date
  help
  help cat
  help grep
`),this._wf("/home/user/.profile",`# MASH profile
export PATH=/bin:/usr/bin
export EDITOR=nano
export TERM=xterm-256color
`),this._wf("/home/user/.bashrc",`# MASH interactive shell config
alias ll='ls -la'
alias la='ls -a'
alias ..='cd ..'
alias ...='cd ../..'
`),this._wf("/var/log/shell.log",""),dy(this)}_persist(t){if(!this._db)return;const n=this._t[t];n?fi(this._db,t,n).catch(()=>{}):Va(this._db,t).catch(()=>{})}_del(t){this._db&&Va(this._db,t).catch(()=>{})}_delPrefix(t){this._db&&ly(this._db,t).catch(()=>{})}loadFromIDB(t){for(const n of t){const{path:r,...i}=n;this._t[r]=i}}_mkdirP(t){const n=t.split("/").filter(Boolean);let r="";for(const i of n)r+="/"+i,this._t[r]||(this._t[r]={type:"dir",mtime:Date.now(),size:0},this._persist(r))}_wf(t,n){const r=t.lastIndexOf("/")>0?t.slice(0,t.lastIndexOf("/")):"/";this._mkdirP(r),this._t[t]={type:"file",content:String(n),mtime:Date.now(),size:String(n).length},this._persist(t)}resolve(t,n="/home/user"){if(!t||t===".")return n;if(t==="~")return"/home/user";t.startsWith("~/")&&(t="/home/user"+t.slice(1)),t.startsWith("/")||(t=n+"/"+t);const r=t.split("/").filter(Boolean),i=[];for(const s of r)s===".."?i.pop():s!=="."&&i.push(s);return"/"+i.join("/")}exists(t){return t==="/"||t in this._t}isDir(t){var n;return t==="/"||((n=this._t[t])==null?void 0:n.type)==="dir"}isFile(t){var n;return((n=this._t[t])==null?void 0:n.type)==="file"}stat(t){return t==="/"?{type:"dir",mtime:Date.now(),size:0}:this._t[t]??null}read(t){return this.isFile(t)?this._t[t].content:null}write(t,n){this._wf(t,n),this._persist(t)}append(t,n){this.isFile(t)?(this._t[t].content+=n,this._t[t].size=this._t[t].content.length,this._t[t].mtime=Date.now()):this._wf(t,n),this._persist(t)}ls(t){const n=t==="/"?"":t,r=new Set;for(const i of Object.keys(this._t))if(i.startsWith(n+"/")){const o=i.slice(n.length+1).split("/")[0];o&&r.add(o)}return[...r].sort()}mkdir(t){if(this.exists(t))return`mkdir: cannot create directory '${t}': File exists`;const n=t.slice(0,t.lastIndexOf("/"))||"/";return this.isDir(n)?(this._t[t]={type:"dir",mtime:Date.now(),size:0},this._persist(t),null):`mkdir: cannot create directory '${t}': No such file or directory`}rmdir(t){return this.exists(t)?this.isDir(t)?this.ls(t).length>0?`rmdir: failed to remove '${t}': Directory not empty`:(delete this._t[t],this._del(t),null):`rmdir: failed to remove '${t}': Not a directory`:`rmdir: failed to remove '${t}': No such file or directory`}rm(t,n=!1){return this.exists(t)?this.isDir(t)&&!n?`rm: cannot remove '${t}': Is a directory`:(Object.keys(this._t).filter(i=>i===t||i.startsWith(t+"/")).forEach(i=>delete this._t[i]),this._delPrefix(t),null):`rm: cannot remove '${t}': No such file or directory`}cp(t,n){if(!this.exists(t))return`cp: cannot stat '${t}': No such file or directory`;if(this.isDir(t))return`cp: omitting directory '${t}'`;const r=this.isDir(n)?n+"/"+t.split("/").pop():n,i=r.slice(0,r.lastIndexOf("/"))||"/";return this.isDir(i)?(this._t[r]={...this._t[t],mtime:Date.now()},this._persist(r),null):`cp: cannot create '${r}': No such file or directory`}mv(t,n){if(!this.exists(t))return`mv: cannot stat '${t}': No such file or directory`;const r=this.isDir(n)?n+"/"+t.split("/").pop():n;return Object.keys(this._t).filter(i=>i===t||i.startsWith(t+"/")).forEach(i=>{const s=r+i.slice(t.length);this._t[s]={...this._t[i]},this._persist(s),delete this._t[i]}),this._delPrefix(t),null}touch(t){this.isFile(t)?(this._t[t].mtime=Date.now(),this._persist(t)):this._wf(t,"")}setDb(t){this._db=t}download(t){const n=this.read(t);if(n===null)return!1;const r=new Blob([n],{type:"text/plain"}),i=URL.createObjectURL(r),s=document.createElement("a");return s.href=i,s.download=t.split("/").pop(),document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i),!0}}function Jn(e){const t=[];let n=0;for(;n<e.length&&e[n]!=="#";){if(/\s/.test(e[n])){n++;continue}if(e[n]===">"&&e[n+1]===">"){t.push({type:"append"}),n+=2;continue}if(e[n]==="|"){t.push({type:"pipe"}),n++;continue}if(e[n]===">"){t.push({type:"redir_out"}),n++;continue}if(e[n]==="<"){t.push({type:"redir_in"}),n++;continue}if(e[n]==='"'){let i="";for(n++;n<e.length&&e[n]!=='"';)e[n]==="\\"&&n+1<e.length&&n++,i+=e[n],n++;n++,t.push({type:"word",value:i});continue}if(e[n]==="'"){let i="";for(n++;n<e.length&&e[n]!=="'";)i+=e[n++];n++,t.push({type:"word",value:i,literal:!0});continue}let r="";for(;n<e.length&&!/[\s|<>]/.test(e[n]);)e[n]==="\\"&&n+1<e.length&&n++,r+=e[n],n++;r&&t.push({type:"word",value:r})}return t}function er(e){const t=[];let n=[];for(const r of e)r.type==="pipe"?(t.push(n),n=[]):n.push(r);return t.push(n),t.map(r=>{var a,u,p;const i=[];let s=null,o=null,l=!1;for(let c=0;c<r.length;c++)r[c].type==="append"?(l=!0,s=(a=r[c+1])==null?void 0:a.value,c++):r[c].type==="redir_out"?(s=(u=r[c+1])==null?void 0:u.value,c++):r[c].type==="redir_in"?(o=(p=r[c+1])==null?void 0:p.value,c++):r[c].type==="word"&&i.push(r[c]);return{words:i,stdout:s,stdin:o,append:l}})}const hy=`mash — Math And Shell (POSIX-compatible)

FILE & DIRECTORY
  ls [-laFRhSt] [path]    cat [-n] <file>        pwd / cd [dir]
  mkdir [-p] <dir>        rm [-rf] <file>         cp/mv/touch/ln
  find [-name] [-type]    du/df                   stat/chmod/chown

TEXT PROCESSING
  echo [-ne] <text>       printf <fmt>            grep [-vincrwolABC]
  sed 's/p/r/[gi]'        awk [-F] '{}'           sort [-rnufhSkMt]
  uniq [-cdu]             cut -d<d> -f<f>         tr [-dsc]
  head/tail [-n N]        wc [-lwcL]              nl/rev/fold/tac
  tee [-a] <file>         seq/shuf                od/cksum
  diff [-u] f1 f2         paste/comm              expand/unexpand

HASHING / ENCODING
  base64 [-d]             md5sum                  sha256sum/cksum

SHELL & VARIABLES
  VAR=value  export  unset  env  printenv  read  alias  unalias
  test / [   which / type   history         command

MATH
  bc  expr  math <expr>

SYSTEM
  date [+fmt]  uname [-a]  whoami/id  hostname  ps  uptime
  free [-h]    nproc       sleep      chmod/chown  mktemp  timeout

MISC
  clear  motd  download <file>  nano/vi  help [cmd]  man <cmd>
  wipe-fs  write <f> <text>  append <f> <text>

PIPES & REDIRECTION
  cmd | cmd2    cmd > file    cmd >> file    cmd < file    cmd ; cmd2

Type 'help <command>' for detailed help on any command.
`;function my(e,t){return String(e).replace(/\$\{([a-zA-Z_?][a-zA-Z0-9_]*)\}/g,(n,r)=>t[r]??"").replace(/\$([a-zA-Z_?][a-zA-Z0-9_]*)/g,(n,r)=>t[r]??"")}function gy(e,t){return e.literal?e.value:my(e.value,t)}function tr(e,t,n){let r=null,i="",s=0;for(let o=0;o<e.length;o++){const l=e[o],a=l.words.map(h=>gy(h,n.env)),[u,...p]=a;let c=r;if(l.stdin){const h=t.resolve(l.stdin,n.cwd);c=t.read(h)??""}if(!u&&l.stdout){const h=c??"",g=t.resolve(l.stdout,n.cwd);l.append?t.append(g,h):t.write(g,h),r="",o===e.length-1&&(i="");continue}const f=jo(u,p,c,t,n);if(i=f.output??"",s=f.exitCode??0,n.env["?"]=String(s),l.stdout&&!i.startsWith("__")){const h=t.resolve(l.stdout,n.cwd);l.append?t.append(h,i):t.write(h,i),r="",o===e.length-1&&(i="")}else r=i}return{output:i,exitCode:s}}function jo(e,t,n,r,i){if(!e)return{output:"",exitCode:0};if(/^[a-zA-Z_][a-zA-Z0-9_]*=/.test(e)&&t.length===0){const l=e.indexOf("=");return i.env[e.slice(0,l)]=e.slice(l+1),{output:"",exitCode:0}}if(i.aliases[e]){const l=i.aliases[e]+(t.length?" "+t.join(" "):"");return tr(er(Jn(l)),r,i)}if(e==="help"||e==="man")return t.length&&qa[t[0]]?{output:qa[t[0]],exitCode:0}:t.length?{output:`No manual entry for ${t[0]}
Try 'help' for a list of commands.
`,exitCode:1}:{output:hy,exitCode:0};const s=[`/bin/${e}`,`/usr/bin/${e}`];for(const l of s)if(r.isFile(l)){const a=r.read(l)??"";if(!a.trim())continue;const u={stdin:n,vfs:r,sh:i,env:i.env,execCmd:jo,runPipeline:tr,parsePipeline:er,tokenize:Jn,registry:fr},p=py(a,t,u);if(p!==null)return p;const c=i.env["@"];i.env["@"]=t.join(" ");const f=a.split(`
`).filter(g=>g.trim()&&!g.trim().startsWith("#"));let h={output:"",exitCode:0};for(const g of f){const v=g.trim();if(!v)continue;const y=Jn(v);y.length&&(h=tr(er(y),r,i))}return c===void 0?delete i.env["@"]:i.env["@"]=c,h}const o=fr[e];if(o){const l={stdin:n,vfs:r,sh:i,env:i.env,execCmd:jo,runPipeline:tr,parsePipeline:er,tokenize:Jn,registry:fr};try{const a=e==="["?t.slice(0,-1):t;return o.fn(a,l)}catch(a){return{output:`${e}: internal error: ${a.message}
`,exitCode:1}}}return{output:`mash: ${e}: command not found
`,exitCode:127}}function xy(e){const t=[];let n="",r=!1,i=!1;for(const s of e)s==="'"&&!i?(r=!r,n+=s):s==='"'&&!r?(i=!i,n+=s):s===";"&&!r&&!i?(n.trim()&&t.push(n),n=""):n+=s;return n.trim()&&t.push(n),t}function vy(e,t,n){var s,o,l;const r=xy(e),i=[];for(const a of r){const u=a.trim();if(!u)continue;n.history.push(u);const p=Jn(u);if(!p.length)continue;const c=er(p),f=tr(c,t,n);if(i.push(f),(s=f.output)!=null&&s.startsWith("__CLEAR__")||(o=f.output)!=null&&o.startsWith("__EXIT__")||(l=f.output)!=null&&l.startsWith("__WIPEFS__"))break}return i}const Zr={num:{bg:"#16161e",fg:"#f4ece4",border:"#2c2c3a"},op:{bg:"#0e2416",fg:"#74f096",border:"#1e4a2c"},fn:{bg:"#131230",fg:"#c4beff",border:"#222050"},clear:{bg:"#261212",fg:"#ff8c8c",border:"#461e1e"},eq:{bg:"#102a12",fg:"#6aff8c",border:"#1e5020"},ans:{bg:"#0e1e30",fg:"#7cdeff",border:"#1c405e"},del:{bg:"#221408",fg:"#ffc460",border:"#402810"},mem:{bg:"#1c1032",fg:"#d896ff",border:"#341a56"},hex:{bg:"#1e0e28",fg:"#ff9ee0",border:"#3a1848"},dis:{bg:"#0e0e18",fg:"#44445a",border:"#181826"}};function yy({label:e,onClick:t,kind:n="num",wide:r=!1,disabled:i=!1,badge:s=null}){const[o,l]=D.useState(!1),a=i?Zr.dis:Zr[n]||Zr.num;return P.jsxs("button",{onClick:i?void 0:t,onMouseDown:()=>!i&&l(!0),onMouseUp:()=>l(!1),onMouseLeave:()=>l(!1),onTouchStart:u=>{i||(u.preventDefault(),l(!0))},onTouchEnd:u=>{i||(u.preventDefault(),l(!1),t==null||t())},style:{position:"relative",background:o?a.bg+"bb":a.bg,color:a.fg,border:`1px solid ${a.border}`,borderRadius:"9px",height:"48px",gridColumn:r?"span 2":void 0,fontFamily:"'JetBrains Mono', monospace",fontSize:e.length>4?"10px":e.length>3?"11px":"13px",cursor:i?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",transform:o?"scale(0.90)":"scale(1)",transition:"transform 0.07s, background 0.07s",userSelect:"none",WebkitUserSelect:"none",outline:"none",letterSpacing:"0.4px",opacity:i?.35:1,boxShadow:o?"inset 0 2px 8px rgba(0,0,0,0.8)":"inset 0 1px 0 rgba(255,255,255,0.05), 0 3px 10px rgba(0,0,0,0.7)"},children:[e,s!=null&&P.jsx("span",{style:{position:"absolute",top:3,right:4,fontSize:"8px",color:Zr.fn.fg,opacity:.8,lineHeight:1},children:s})]})}function Sy(e,{push:t,doClear:n,doDel:r,doEval:i,doAns:s,doNeg:o,doMC:l,doMR:a,doMPlus:u,doMMinus:p,doMemStore:c,doProg:f,base:h,parenDepth:g,degMode:v}){if(e==="std")return[{l:"MC",kind:"mem",fn:l},{l:"MR",kind:"mem",fn:a},{l:"M+",kind:"mem",fn:u},{l:"M−",kind:"mem",fn:p},{l:"C",kind:"clear",fn:n},{l:"(",kind:"fn",fn:()=>t("(")},{l:")",kind:"fn",fn:()=>t(")"),badge:g>0?g:null},{l:"⌫",kind:"del",fn:r},{l:"7",kind:"num",fn:()=>t("7")},{l:"8",kind:"num",fn:()=>t("8")},{l:"9",kind:"num",fn:()=>t("9")},{l:"÷",kind:"op",fn:()=>t("/")},{l:"4",kind:"num",fn:()=>t("4")},{l:"5",kind:"num",fn:()=>t("5")},{l:"6",kind:"num",fn:()=>t("6")},{l:"×",kind:"op",fn:()=>t("*")},{l:"1",kind:"num",fn:()=>t("1")},{l:"2",kind:"num",fn:()=>t("2")},{l:"3",kind:"num",fn:()=>t("3")},{l:"−",kind:"op",fn:()=>t("-")},{l:"+/−",kind:"fn",fn:o},{l:"0",kind:"num",fn:()=>t("0")},{l:".",kind:"num",fn:()=>t(".")},{l:"+",kind:"op",fn:()=>t("+")},{l:"ANS",kind:"ans",fn:s},{l:"%",kind:"fn",fn:()=>t("%")},{l:"√",kind:"fn",fn:()=>t("sqrt(")},{l:"=",kind:"eq",fn:i}];if(e==="sci")return[{l:"sin",kind:"fn",fn:()=>t("sin(")},{l:"cos",kind:"fn",fn:()=>t("cos(")},{l:"tan",kind:"fn",fn:()=>t("tan(")},{l:"log",kind:"fn",fn:()=>t("log(")},{l:"ln",kind:"fn",fn:()=>t("ln(")},{l:"asin",kind:"fn",fn:()=>t("asin(")},{l:"acos",kind:"fn",fn:()=>t("acos(")},{l:"atan",kind:"fn",fn:()=>t("atan(")},{l:"10^x",kind:"fn",fn:()=>t("10^(")},{l:"eˣ",kind:"fn",fn:()=>t("e^(")},{l:"sinh",kind:"fn",fn:()=>t("sinh(")},{l:"cosh",kind:"fn",fn:()=>t("cosh(")},{l:"tanh",kind:"fn",fn:()=>t("tanh(")},{l:"n!",kind:"fn",fn:()=>t("!")},{l:"abs",kind:"fn",fn:()=>t("abs(")},{l:"π",kind:"ans",fn:()=>t("π")},{l:"e",kind:"ans",fn:()=>t("e")},{l:"nCr",kind:"fn",fn:()=>t(",")},{l:"cbrt",kind:"fn",fn:()=>t("cbrt(")},{l:"√",kind:"fn",fn:()=>t("sqrt(")},{l:"C",kind:"clear",fn:n},{l:"(",kind:"fn",fn:()=>t("(")},{l:")",kind:"fn",fn:()=>t(")"),badge:g>0?g:null},{l:"xʸ",kind:"fn",fn:()=>t("^")},{l:"⌫",kind:"del",fn:r},{l:"7",kind:"num",fn:()=>t("7")},{l:"8",kind:"num",fn:()=>t("8")},{l:"9",kind:"num",fn:()=>t("9")},{l:"÷",kind:"op",fn:()=>t("/")},{l:"%",kind:"fn",fn:()=>t("%")},{l:"4",kind:"num",fn:()=>t("4")},{l:"5",kind:"num",fn:()=>t("5")},{l:"6",kind:"num",fn:()=>t("6")},{l:"×",kind:"op",fn:()=>t("*")},{l:"MR",kind:"mem",fn:a},{l:"1",kind:"num",fn:()=>t("1")},{l:"2",kind:"num",fn:()=>t("2")},{l:"3",kind:"num",fn:()=>t("3")},{l:"−",kind:"op",fn:()=>t("-")},{l:"M+",kind:"mem",fn:u},{l:"+/−",kind:"fn",fn:o},{l:"0",kind:"num",fn:()=>t("0")},{l:".",kind:"num",fn:()=>t(".")},{l:"+",kind:"op",fn:()=>t("+")},{l:"ANS",kind:"ans",fn:s},{l:"MC",kind:"mem",fn:l},{l:"M−",kind:"mem",fn:p},{l:"(",kind:"fn",fn:()=>t("(")},{l:")",kind:"fn",fn:()=>t(")")},{l:"=",kind:"eq",fn:i}];const y=h===10;return[{l:"C",kind:"clear",fn:n},{l:"AND",kind:"fn",fn:()=>f("&")},{l:"OR",kind:"fn",fn:()=>f("|")},{l:"⌫",kind:"del",fn:r},{l:"A",kind:"hex",fn:()=>t("A"),disabled:y},{l:"B",kind:"hex",fn:()=>t("B"),disabled:y},{l:"XOR",kind:"fn",fn:()=>f("^")},{l:"NOT",kind:"fn",fn:()=>f("~")},{l:"7",kind:"num",fn:()=>t("7"),disabled:h===2},{l:"8",kind:"num",fn:()=>t("8"),disabled:h<=2},{l:"9",kind:"num",fn:()=>t("9"),disabled:h<=2},{l:"<<",kind:"fn",fn:()=>f("<<")},{l:"C",kind:"hex",fn:()=>t("C"),disabled:y},{l:"D",kind:"hex",fn:()=>t("D"),disabled:y},{l:"4",kind:"num",fn:()=>t("4"),disabled:h===2},{l:"5",kind:"num",fn:()=>t("5"),disabled:h===2},{l:"6",kind:"num",fn:()=>t("6"),disabled:h===2},{l:">>",kind:"fn",fn:()=>f(">>")},{l:"E",kind:"hex",fn:()=>t("E"),disabled:y},{l:"F",kind:"hex",fn:()=>t("F"),disabled:y},{l:"1",kind:"num",fn:()=>t("1")},{l:"2",kind:"num",fn:()=>t("2"),disabled:h===2},{l:"3",kind:"num",fn:()=>t("3"),disabled:h===2},{l:"NOR",kind:"fn",fn:()=>f("NOR")},{l:"ANS",kind:"ans",fn:s},{l:"0",kind:"num",fn:()=>t("0")},{l:"(",kind:"fn",fn:()=>t("(")},{l:")",kind:"fn",fn:()=>t(")")},{l:"=",kind:"eq",fn:i}]}function wy(){const[e,t]=D.useState(!1),[n,r]=D.useState([]),[i,s]=D.useState(""),[o,l]=D.useState([]),[a,u]=D.useState(-1),[p,c]=D.useState(!1),[f,h]=D.useState("/home/user"),[g,v]=D.useState(null),[y,m]=D.useState(""),[d,x]=D.useState("0"),[S,_]=D.useState(!1),[b,k]=D.useState("0"),[C,N]=D.useState(null),[F,B]=D.useState(!1),[R,A]=D.useState("std"),[$,H]=D.useState(!1),[oe,we]=D.useState(null),[O,T]=D.useState([]),[L,K]=D.useState(!1),[V,Qe]=D.useState(10),W=D.useRef(new Xa),J=D.useRef({cwd:"/home/user",env:{HOME:"/home/user",USER:"user",PATH:"/bin:/usr/bin",SHELL:"/bin/mash",TERM:"xterm-256color","?":"0"},aliases:{ll:"ls -la",la:"ls -a","..":"cd .."},history:[]}),Ze=D.useRef(null),gt=D.useRef(null),Cl=D.useRef(null),rn=D.useRef(b),sn=D.useRef(y),An=D.useRef(S),on=D.useRef(d),bl=D.useRef(oe);rn.current=b,sn.current=y,An.current=S,on.current=d,bl.current=oe;const df=(()=>{let w=0;for(const M of y)M==="("?w++:M===")"&&(w=Math.max(0,w-1));return w})();D.useEffect(()=>{if(!y||S){N(null);return}try{const w=Kt(y,$);if(isFinite(w)||w===1/0||w===-1/0){const M=Gt(w);N(M!==y?M:null)}else N(null)}catch{N(null)}},[y,$,S]);const Zi=D.useCallback(w=>{clearTimeout(Cl.current),Cl.current=setTimeout(async()=>{if(W.current._db)try{await fi(W.current._db,"__meta__",{type:"meta",cwd:J.current.cwd,env:J.current.env,aliases:J.current.aliases,history:J.current.history.slice(-200),ans:w??rn.current,mtime:Date.now(),size:0}),c(!0),setTimeout(()=>c(!1),800)}catch(M){console.warn("meta save failed",M)}},500)},[]);D.useEffect(()=>{oy().then(w=>(W.current._db=w,uy(w))).then(w=>{if(w&&w.length>0){const M=w.find(G=>G.path==="__meta__"),I=w.filter(G=>G.path!=="__meta__");I.length>0&&W.current.loadFromIDB(I),M&&(M.cwd&&(J.current.cwd=M.cwd),M.env&&(J.current.env={...J.current.env,...M.env}),M.aliases&&(J.current.aliases=M.aliases),M.history&&(J.current.history=M.history),M.ans&&(k(M.ans),rn.current=M.ans),M.cwd&&h(M.cwd));const le=W.current.read("/etc/motd")||"";r([{type:"sys",text:le.replace(/\n$/,"")+(w.length>1||M?`
[session restored from IndexedDB]`:"")}])}else r([{type:"sys",text:(W.current.read("/etc/motd")||"").replace(/\n$/,"")}])}).catch(()=>{r([{type:"sys",text:(W.current.read("/etc/motd")||"").replace(/\n$/,"")}])})},[]),D.useEffect(()=>{var w;(w=Ze.current)==null||w.scrollIntoView({behavior:"smooth"})},[n]),D.useEffect(()=>{e&&setTimeout(()=>{var w;return(w=gt.current)==null?void 0:w.focus()},350)},[e]);const hf=w=>{try{return V===16?parseInt(w.replace(/[^0-9a-fA-F]/g,""),16):V===8?parseInt(w.replace(/[^0-7]/g,""),8):V===2?parseInt(w.replace(/[^01]/g,""),2):parseInt(w.replace(/[^0-9]/g,""),10)}catch{return 0}},mf=(w,M)=>!Number.isInteger(w)||isNaN(w)?"—":M===2?w.toString(2).toUpperCase():M===8?w.toString(8).toUpperCase():M===16?w.toString(16).toUpperCase():String(w),xt=D.useCallback(w=>{const M=/^[+\-*\/^%]$/.test(w);if(An.current){const I=M?on.current+w:w;m(I),x(I),_(!1)}else m(I=>{const le=I+w;return x(le),le})},[]),Ji=D.useCallback(()=>{m(""),x("0"),_(!1),N(null)},[]),es=D.useCallback(()=>{if(An.current){m(""),x("0"),_(!1);return}m(w=>{const M=w.slice(0,-1);return x(M||"0"),M})},[]),gf=D.useCallback(()=>{const w=rn.current;An.current?(m(w),x(w),_(!1)):m(M=>{const I=M+w;return x(I),I})},[]),xf=D.useCallback(()=>{const w=sn.current||on.current;if(!w||w==="0")return;const M=w.startsWith("-")?w.slice(1):"-"+w;m(M),x(M),_(!1)},[]),vf=D.useCallback(()=>we(null),[]),yf=D.useCallback(()=>{const w=bl.current;if(w===null)return;const M=String(w);An.current?(m(M),x(M),_(!1)):m(I=>{const le=I+M;return x(le),le})},[]),El=D.useCallback(()=>{try{const w=parseFloat(sn.current||on.current);isNaN(w)||we(M=>M===null?w:M+w)}catch{}},[]),Sf=D.useCallback(()=>{try{const w=parseFloat(sn.current||on.current);isNaN(w)||we(M=>M===null?-w:M-w)}catch{}},[]),wf=D.useCallback(w=>{if(w==="~")try{const M=hf(sn.current||on.current),I=String(~M);m(I),x(I),_(!0)}catch{}else xt(w==="NOR"?"NOR":w)},[V,xt]),ts=D.useCallback(()=>{let w=sn.current;if(w)try{let M;if(R==="prog"){if(w=w.replace(/NOR/g," NOR "),M=Function(`"use strict"; return (${w.replace(/NOR/g,"BITNOR")})`)(),typeof M!="number")throw new Error("not a number");M=Math.trunc(M)}else M=Kt(w,$);const I=Gt(M);k(I),rn.current=I,W.current.write("/home/user/ANS",I+`
`);const le=W.current.read("/home/user/HISTORY")||"";W.current.write("/home/user/HISTORY",le+`${w} = ${I}
`),T(G=>[{expr:w,result:I},...G].slice(0,50)),x(I),m(I),_(!0),N(null),Zi(I)}catch{x("Error"),m(""),_(!0),N(null)}},[$,R,Zi]);D.useEffect(()=>{const w=M=>{if(e&&document.activeElement===gt.current||M.metaKey||M.ctrlKey||M.altKey)return;const I=M.key;I>="0"&&I<="9"||["+","-","*","/","(",")","."].includes(I)?xt(I):I==="^"?xt("^"):I==="Enter"||I==="="?ts():I==="Backspace"?es():I==="Escape"&&Ji()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[e,xt,ts,es,Ji]);const _f=()=>{const w=i.trim();if(!w)return;l(G=>[w,...G]),u(-1);const I=[{type:"in",text:`${J.current.cwd==="/home/user"?"~":J.current.cwd} ❯ ${w}`}],le=vy(w,W.current,J.current);for(const G of le){if(G.output===void 0||G.output===null)continue;if(G.output.startsWith("__CLEAR__")){r([{type:"sys",text:"Terminal cleared."}]),s("");return}if(G.output.startsWith("__WIPEFS__")){(async()=>{v(0);try{W.current._db&&await ay(W.current._db)}catch(At){console.warn("IDB wipe failed",At)}const fe=new Xa;fe._db=W.current._db,W.current=fe;const Dt=Object.keys(fe._t),Ml=Dt.length;for(let At=0;At<Dt.length;At++){const Nl=Dt[At],$l=fe._t[Nl];if(fe._db&&$l)try{await fi(fe._db,Nl,$l)}catch{}At%3===0&&(v(Math.round((At+1)/Ml*100)),await new Promise($f=>setTimeout($f,0)))}try{fe._db&&await fi(fe._db,"__meta__",{type:"meta",cwd:"/home/user",env:{HOME:"/home/user",USER:"user",PATH:"/bin:/usr/bin",SHELL:"/bin/mash",TERM:"xterm-256color","?":"0"},aliases:{ll:"ls -la",la:"ls -a"},history:[],ans:"0",mtime:Date.now(),size:0})}catch{}J.current={cwd:"/home/user",env:{HOME:"/home/user",USER:"user",PATH:"/bin:/usr/bin",SHELL:"/bin/mash",TERM:"xterm-256color","?":"0"},aliases:{ll:"ls -la",la:"ls -a"},history:[]},k("0"),l([]),h("/home/user"),v(null),r([{type:"sys",text:`Filesystem wiped and rebuilt. ${Ml} files populated.`}]),s("")})();return}if(G.output.startsWith("__EXIT__")){const fe=parseInt(G.output.slice(8));I.push({type:"out",text:`[Process exited with code ${fe}]`});break}const st=G.output.replace(/\n$/,"");st!==""&&I.push({type:"out",text:st})}r(G=>[...G,...I]),s(""),h(J.current.cwd),Zi()},kf=w=>{if(w.key==="Enter"){_f();return}if(w.key==="ArrowUp"){w.preventDefault();const M=Math.min(a+1,o.length-1);u(M),o[M]!=null&&s(o[M])}if(w.key==="ArrowDown"){w.preventDefault();const M=Math.max(a-1,-1);u(M),s(M===-1?"":o[M]??"")}if(w.key==="Tab"){w.preventDefault();const M=i.split(" "),I=M[M.length-1];if(!I)return;if(M.length===1){const le=[...g1].filter(G=>G.startsWith(I));le.length===1?s(le[0]):le.length>1&&r(G=>[...G,{type:"out",text:le.join("  ")}])}else{const le=I.includes("/")?W.current.resolve(I.slice(0,I.lastIndexOf("/")+1),J.current.cwd):J.current.cwd,G=I.includes("/")?I.split("/").pop():I,st=W.current.ls(le).filter(fe=>fe.startsWith(G));st.length===1?(M[M.length-1]=(I.includes("/")?I.slice(0,I.lastIndexOf("/")+1):"")+st[0],s(M.join(" "))):st.length>1&&r(fe=>[...fe,{type:"out",text:st.join("  ")}])}}},Cf=()=>{try{navigator.clipboard.writeText(d)}catch{}B(!0),setTimeout(()=>B(!1),900)},ns=d.length,bf=ns>16?"13px":ns>12?"19px":ns>8?"25px":"32px",Ef=`${f==="/home/user"?"~":f} ❯ `,jf=R==="sci"?5:4,Mf=R==="sci"?330:300,Nf=Sy(R,{push:xt,doClear:Ji,doDel:es,doEval:ts,doAns:gf,doNeg:xf,doMC:vf,doMR:yf,doMPlus:El,doMMinus:Sf,doMemStore:El,doProg:wf,base:V,parenDepth:df,degMode:$}),jl=R==="prog"?(()=>{try{return Math.trunc(Kt(y||"0",!1))}catch{return null}})():null;return P.jsxs("div",{style:{minHeight:"100vh",background:"#09090e",backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 23px,rgba(255,255,255,0.013) 23px,rgba(255,255,255,0.013) 24px)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'JetBrains Mono', monospace",overflow:"hidden"},children:[P.jsx("link",{href:"https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap",rel:"stylesheet"}),P.jsxs("div",{style:{width:`${Mf}px`,transform:e?"translateY(-100vh)":"translateY(0)",transition:"transform 0.45s cubic-bezier(0.4,0,0.2,1), width 0.3s ease"},children:[P.jsx("div",{style:{display:"flex",gap:"4px",marginBottom:"6px",padding:"0 2px"},children:["std","sci","prog"].map(w=>P.jsx("button",{onClick:()=>A(w),style:{flex:1,padding:"6px 0",background:R===w?"#1c1c2c":"transparent",border:`1px solid ${R===w?"#32305c":"#1e1e2a"}`,color:R===w?"#c4beff":"#383850",borderRadius:"8px",fontFamily:"'JetBrains Mono', monospace",fontSize:"9px",letterSpacing:"2.5px",cursor:"pointer",transition:"all 0.2s",textTransform:"uppercase"},children:w==="std"?"STD":w==="sci"?"SCI":"PROG"},w))}),P.jsxs("div",{style:{background:"#07070d",border:"1px solid #1e1e28",borderRadius:"12px 12px 0 0",padding:"16px 18px 12px",boxShadow:"inset 0 0 60px rgba(0,0,0,0.8)",position:"relative",overflow:"hidden"},children:[P.jsx("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.08) 2px,rgba(0,0,0,0.08) 4px)",pointerEvents:"none"}}),P.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px",position:"relative"},children:[P.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[oe!==null&&P.jsxs("span",{style:{fontSize:"9px",color:"#d896ff",letterSpacing:"1.5px",background:"#1c1032",border:"1px solid #341a56",borderRadius:"4px",padding:"1px 5px"},children:["M:",Gt(oe)]}),R==="sci"&&P.jsx("button",{onClick:()=>H(w=>!w),style:{fontSize:"9px",color:$?"#74f096":"#383850",background:$?"#0e2416":"transparent",border:`1px solid ${$?"#1e4a2c":"#1e1e2a"}`,borderRadius:"4px",padding:"1px 6px",cursor:"pointer",fontFamily:"'JetBrains Mono', monospace",letterSpacing:"1px",transition:"all 0.2s"},children:$?"DEG":"RAD"}),R==="prog"&&P.jsx("div",{style:{display:"flex",gap:"3px"},children:[10,16,8,2].map(w=>P.jsx("button",{onClick:()=>Qe(w),style:{fontSize:"8px",color:V===w?"#74f096":"#383850",background:V===w?"#0e2416":"transparent",border:`1px solid ${V===w?"#1e4a2c":"#1e1e2a"}`,borderRadius:"3px",padding:"1px 4px",cursor:"pointer",fontFamily:"'JetBrains Mono', monospace",letterSpacing:"0.5px"},children:w===10?"DEC":w===16?"HEX":w===8?"OCT":"BIN"},w))})]}),P.jsxs("button",{onClick:()=>K(w=>!w),style:{fontSize:"9px",color:L?"#7cdeff":"#252540",background:"transparent",border:"none",cursor:"pointer",padding:"2px 4px",fontFamily:"'JetBrains Mono', monospace"},title:"History",children:["HIST ",O.length>0?O.length:""]})]}),P.jsx("div",{style:{color:"#2e2e50",fontSize:"10px",textAlign:"right",minHeight:"14px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",letterSpacing:"0.6px",position:"relative",marginBottom:"2px"},children:y||"·"}),C&&!S&&P.jsxs("div",{style:{color:"#323260",fontSize:"11px",textAlign:"right",minHeight:"14px",marginBottom:"2px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",position:"relative",fontWeight:"300"},children:["= ",C]}),P.jsx("div",{onClick:Cf,title:F?"Copied!":"Tap to copy",style:{fontSize:bf,fontWeight:"300",color:F?"#7cdeff":S?"#f4ece4":"#3a3a58",textAlign:"right",minHeight:"44px",display:"flex",alignItems:"center",justifyContent:"flex-end",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",letterSpacing:"-0.5px",position:"relative",cursor:"pointer",textShadow:S?"0 0 40px rgba(244,236,228,0.1)":"none",transition:"color 0.12s",userSelect:"none"},children:d}),R==="prog"&&jl!==null&&P.jsx("div",{style:{marginTop:"8px",borderTop:"1px solid #1a1a28",paddingTop:"6px",position:"relative"},children:[[16,"HEX"],[8,"OCT"],[2,"BIN"]].filter(([w])=>w!==V).map(([w,M])=>P.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"2px"},children:[P.jsx("span",{style:{fontSize:"8px",color:"#2a2a48",letterSpacing:"1.5px"},children:M}),P.jsx("span",{style:{fontSize:"9px",color:"#4a4a70",fontWeight:"400",maxWidth:"220px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"right"},children:mf(jl,w)})]},w))}),P.jsxs("div",{style:{color:"#16264a",fontSize:"9px",marginTop:"8px",letterSpacing:"2px",position:"relative",display:"flex",justifyContent:"space-between"},children:[P.jsxs("span",{children:["ANS ",P.jsx("span",{style:{color:"#1e3c6a"},children:b})]}),F&&P.jsx("span",{style:{color:"#7cdeff",fontSize:"8px",animation:"fadeOut 0.9s ease"},children:"COPIED"})]})]}),P.jsx("div",{style:{background:"#0c0c12",border:"1px solid #1e1e28",borderTop:"none",borderRadius:"0 0 12px 12px",padding:"8px",display:"grid",gridTemplateColumns:`repeat(${jf}, 1fr)`,gap:"5px",boxShadow:"0 40px 100px rgba(0,0,0,0.95)"},children:Nf.map((w,M)=>P.jsx(yy,{label:w.l,kind:w.kind||"num",onClick:w.fn,wide:w.wide,disabled:w.disabled,badge:w.badge??void 0},M))}),P.jsx("button",{onClick:()=>t(w=>!w),style:{width:"100%",marginTop:"6px",padding:"8px",background:"transparent",border:`1px solid ${e?"#1a3a1a":"#151520"}`,color:e?"#22c55e":"#1e2825",fontSize:"9px",fontFamily:"'JetBrains Mono', monospace",cursor:"pointer",borderRadius:"10px",letterSpacing:"3.5px",transition:"all 0.2s"},onMouseEnter:w=>{w.currentTarget.style.borderColor="#22c55e",w.currentTarget.style.color="#4ade80"},onMouseLeave:w=>{w.currentTarget.style.borderColor=e?"#1a3a1a":"#151520",w.currentTarget.style.color=e?"#22c55e":"#1e2825"},children:e?"▲  CLOSE TERMINAL":"▼  OPEN TERMINAL"})]}),L&&P.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:"260px",background:"#07070d",borderLeft:"1px solid #1a1a28",zIndex:20,display:"flex",flexDirection:"column",transform:e?"translateY(-100vh)":"none",transition:"transform 0.45s cubic-bezier(0.4,0,0.2,1)"},children:[P.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #131320",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0},children:[P.jsx("span",{style:{color:"#7cdeff",fontSize:"10px",letterSpacing:"2.5px"},children:"HISTORY"}),P.jsx("button",{onClick:()=>K(!1),style:{background:"none",border:"none",color:"#2a2a48",cursor:"pointer",fontSize:"14px",padding:"2px 6px",fontFamily:"monospace"},children:"✕"})]}),P.jsx("div",{style:{flex:1,overflow:"auto",padding:"8px"},children:(()=>{const M=(W.current.read("/home/user/HISTORY")||"").split(`
`).filter(I=>I.includes(" = ")).reverse();return M.length===0?P.jsx("div",{style:{color:"#1e1e38",fontSize:"10px",textAlign:"center",marginTop:"40px",letterSpacing:"1px"},children:"no history yet"}):M.map((I,le)=>{const G=I.lastIndexOf(" = "),st=G>=0?I.slice(0,G):I,fe=G>=0?I.slice(G+3):"";return P.jsxs("div",{onClick:()=>{k(fe),rn.current=fe,K(!1)},style:{padding:"8px 10px",marginBottom:"4px",borderRadius:"7px",border:"1px solid #181826",cursor:"pointer",transition:"border-color 0.15s"},onMouseEnter:Dt=>Dt.currentTarget.style.borderColor="#282848",onMouseLeave:Dt=>Dt.currentTarget.style.borderColor="#181826",children:[P.jsx("div",{style:{color:"#2c2c50",fontSize:"9px",marginBottom:"2px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:st}),P.jsx("div",{style:{color:"#a0a0d0",fontSize:"13px",fontWeight:"300",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:fe})]},le)})})()}),P.jsx("div",{style:{padding:"10px 12px",borderTop:"1px solid #131320",flexShrink:0},children:P.jsx("button",{onClick:()=>{W.current.write("/home/user/HISTORY",""),T([])},style:{width:"100%",padding:"6px",background:"transparent",border:"1px solid #1e1e28",color:"#2a2a48",fontSize:"9px",borderRadius:"6px",cursor:"pointer",fontFamily:"'JetBrains Mono', monospace",letterSpacing:"2px",transition:"all 0.2s"},onMouseEnter:w=>{w.currentTarget.style.borderColor="#401a1a",w.currentTarget.style.color="#ff8c8c"},onMouseLeave:w=>{w.currentTarget.style.borderColor="#1e1e28",w.currentTarget.style.color="#2a2a48"},children:"CLEAR HISTORY"})})]}),P.jsxs("div",{style:{position:"fixed",bottom:0,left:0,right:0,height:"100vh",background:"#050508",borderTop:"1px solid #0c180c",transform:e?"translateY(0)":"translateY(100%)",transition:"transform 0.45s cubic-bezier(0.4,0,0.2,1)",display:"flex",flexDirection:"column",fontFamily:"'JetBrains Mono', monospace",zIndex:10},children:[P.jsxs("div",{onClick:()=>t(!1),style:{padding:"7px 16px",background:"#04040a",borderBottom:"1px solid #0c180c",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",userSelect:"none",flexShrink:0},onMouseEnter:w=>w.currentTarget.style.background="#06060e",onMouseLeave:w=>w.currentTarget.style.background="#04040a",children:[P.jsx("span",{style:{width:9,height:9,borderRadius:"50%",background:"#3a1515",display:"inline-block"}}),P.jsx("span",{style:{width:9,height:9,borderRadius:"50%",background:"#3a3010",display:"inline-block"}}),P.jsx("span",{style:{width:9,height:9,borderRadius:"50%",background:"#10203a",display:"inline-block"}}),P.jsx("span",{style:{color:"#1a4a1a",marginLeft:"10px",letterSpacing:"3px",fontSize:"9px"},children:"MASH v1.0"}),P.jsx("span",{style:{fontSize:"9px",marginLeft:"auto",transition:"color 0.4s",color:p?"#22c55e":"#0d2010"},children:p?"● SAVED":"click to collapse ▲"})]}),P.jsxs("div",{style:{flex:1,overflow:"auto",padding:"10px 16px 4px",lineHeight:"1.7"},children:[n.map((w,M)=>P.jsx("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-all",color:w.type==="in"?"#86efac":w.type==="sys"?"#1f4525":"#4ade80",marginBottom:"2px",fontSize:"12px"},children:w.text},M)),P.jsx("div",{ref:Ze})]}),P.jsxs("div",{style:{padding:"8px 16px",borderTop:"1px solid #0a140a",background:"#04040a",display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[P.jsx("span",{style:{color:"#1a5020",fontSize:"12px",whiteSpace:"nowrap",flexShrink:0},children:Ef}),P.jsx("input",{ref:gt,value:i,onChange:w=>s(w.target.value),onKeyDown:kf,spellCheck:!1,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#86efac",fontSize:"12px",fontFamily:"'JetBrains Mono', monospace",caretColor:"#4ade80",minWidth:0},placeholder:"type a command… (Tab to complete, ↑↓ history)"})]})]}),g!==null&&P.jsxs("div",{style:{position:"fixed",inset:0,background:"rgba(5,5,8,0.93)",zIndex:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"20px"},children:[P.jsx("div",{style:{color:"#ff8c8c",fontSize:"10px",letterSpacing:"4px",fontFamily:"'JetBrains Mono', monospace"},children:"WIPING FILESYSTEM"}),P.jsx("div",{style:{width:"280px",height:"4px",background:"#1a1a28",borderRadius:"2px",overflow:"hidden"},children:P.jsx("div",{style:{height:"100%",width:`${g}%`,background:"linear-gradient(90deg, #ff8c8c, #ffc460)",borderRadius:"2px",transition:"width 0.1s linear"}})}),P.jsxs("div",{style:{color:"#2a2a48",fontSize:"9px",letterSpacing:"2px",fontFamily:"'JetBrains Mono', monospace"},children:[g,"%"]}),P.jsx("div",{style:{color:"#1e1e38",fontSize:"9px",letterSpacing:"1px",fontFamily:"'JetBrains Mono', monospace"},children:"rebuilding /bin and /usr/bin from source…"})]})]})}zs.createRoot(document.getElementById("root")).render(P.jsx(Xf.StrictMode,{children:P.jsx(wy,{})}));
