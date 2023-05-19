function WA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function aC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function HA(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var lC={exports:{}},vd={},uC={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jl=Symbol.for("react.element"),qA=Symbol.for("react.portal"),KA=Symbol.for("react.fragment"),GA=Symbol.for("react.strict_mode"),QA=Symbol.for("react.profiler"),YA=Symbol.for("react.provider"),XA=Symbol.for("react.context"),JA=Symbol.for("react.forward_ref"),ZA=Symbol.for("react.suspense"),eP=Symbol.for("react.memo"),tP=Symbol.for("react.lazy"),D0=Symbol.iterator;function nP(t){return t===null||typeof t!="object"?null:(t=D0&&t[D0]||t["@@iterator"],typeof t=="function"?t:null)}var cC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hC=Object.assign,dC={};function Fo(t,e,n){this.props=t,this.context=e,this.refs=dC,this.updater=n||cC}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fC(){}fC.prototype=Fo.prototype;function gy(t,e,n){this.props=t,this.context=e,this.refs=dC,this.updater=n||cC}var yy=gy.prototype=new fC;yy.constructor=gy;hC(yy,Fo.prototype);yy.isPureReactComponent=!0;var L0=Array.isArray,pC=Object.prototype.hasOwnProperty,vy={current:null},mC={key:!0,ref:!0,__self:!0,__source:!0};function gC(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pC.call(e,r)&&!mC.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jl,type:t,key:s,ref:o,props:i,_owner:vy.current}}function rP(t,e){return{$$typeof:Jl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _y(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jl}function iP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var M0=/\/+/g;function Bf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iP(""+t.key):e.toString(36)}function wc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Jl:case qA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bf(o,0):r,L0(i)?(n="",t!=null&&(n=t.replace(M0,"$&/")+"/"),wc(i,e,n,"",function(u){return u})):i!=null&&(_y(i)&&(i=rP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(M0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",L0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Bf(s,a);o+=wc(s,e,n,l,i)}else if(l=nP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Bf(s,a++),o+=wc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Uu(t,e,n){if(t==null)return t;var r=[],i=0;return wc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},Ec={transition:null},oP={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:Ec,ReactCurrentOwner:vy};Z.Children={map:Uu,forEach:function(t,e,n){Uu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uu(t,function(){e++}),e},toArray:function(t){return Uu(t,function(e){return e})||[]},only:function(t){if(!_y(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Fo;Z.Fragment=KA;Z.Profiler=QA;Z.PureComponent=gy;Z.StrictMode=GA;Z.Suspense=ZA;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oP;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hC({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vy.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pC.call(e,l)&&!mC.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Jl,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:XA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:YA,_context:t},t.Consumer=t};Z.createElement=gC;Z.createFactory=function(t){var e=gC.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:JA,render:t}};Z.isValidElement=_y;Z.lazy=function(t){return{$$typeof:tP,_payload:{_status:-1,_result:t},_init:sP}};Z.memo=function(t,e){return{$$typeof:eP,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ec.transition;Ec.transition={};try{t()}finally{Ec.transition=e}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(t,e){return Dt.current.useCallback(t,e)};Z.useContext=function(t){return Dt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return Dt.current.useEffect(t,e)};Z.useId=function(){return Dt.current.useId()};Z.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return Dt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};Z.useRef=function(t){return Dt.current.useRef(t)};Z.useState=function(t){return Dt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return Dt.current.useTransition()};Z.version="18.2.0";uC.exports=Z;var C=uC.exports;const ue=aC(C),om=WA({__proto__:null,default:ue},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aP=C,lP=Symbol.for("react.element"),uP=Symbol.for("react.fragment"),cP=Object.prototype.hasOwnProperty,hP=aP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dP={key:!0,ref:!0,__self:!0,__source:!0};function yC(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)cP.call(e,r)&&!dP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lP,type:t,key:s,ref:o,props:i,_owner:hP.current}}vd.Fragment=uP;vd.jsx=yC;vd.jsxs=yC;lC.exports=vd;var _=lC.exports,am={},vC={exports:{}},tn={},_C={exports:{}},wC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,V){var q=A.length;A.push(V);e:for(;0<q;){var me=q-1>>>1,be=A[me];if(0<i(be,V))A[me]=V,A[q]=be,q=me;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],q=A.pop();if(q!==V){A[0]=q;e:for(var me=0,be=A.length,er=be>>>1;me<er;){var tr=2*(me+1)-1,aa=A[tr],On=tr+1,Fe=A[On];if(0>i(aa,q))On<be&&0>i(Fe,aa)?(A[me]=Fe,A[On]=q,me=On):(A[me]=aa,A[tr]=q,me=tr);else if(On<be&&0>i(Fe,q))A[me]=Fe,A[On]=q,me=On;else break e}}return V}function i(A,V){var q=A.sortIndex-V.sortIndex;return q!==0?q:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=A)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(A){if(m=!1,v(A),!p)if(n(l)!==null)p=!0,$e(T);else{var V=n(u);V!==null&&oa(E,V.startTime-A)}}function T(A,V){p=!1,m&&(m=!1,y(O),O=-1),f=!0;var q=d;try{for(v(V),h=n(l);h!==null&&(!(h.expirationTime>V)||A&&!Re());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var be=me(h.expirationTime<=V);V=t.unstable_now(),typeof be=="function"?h.callback=be:h===n(l)&&r(l),v(V)}else r(l);h=n(l)}if(h!==null)var er=!0;else{var tr=n(u);tr!==null&&oa(E,tr.startTime-V),er=!1}return er}finally{h=null,d=q,f=!1}}var x=!1,k=null,O=-1,K=5,M=-1;function Re(){return!(t.unstable_now()-M<K)}function Pn(){if(k!==null){var A=t.unstable_now();M=A;var V=!0;try{V=k(!0,A)}finally{V?rn():(x=!1,k=null)}}else x=!1}var rn;if(typeof g=="function")rn=function(){g(Pn)};else if(typeof MessageChannel<"u"){var _s=new MessageChannel,Lr=_s.port2;_s.port1.onmessage=Pn,rn=function(){Lr.postMessage(null)}}else rn=function(){w(Pn,0)};function $e(A){k=A,x||(x=!0,rn())}function oa(A,V){O=w(function(){A(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,$e(T))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var q=d;d=V;try{return A()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var q=d;d=A;try{return V()}finally{d=q}},t.unstable_scheduleCallback=function(A,V,q){var me=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?me+q:me):q=me,A){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=q+be,A={id:c++,callback:V,priorityLevel:A,startTime:q,expirationTime:be,sortIndex:-1},q>me?(A.sortIndex=q,e(u,A),n(l)===null&&A===n(u)&&(m?(y(O),O=-1):m=!0,oa(E,q-me))):(A.sortIndex=be,e(l,A),p||f||(p=!0,$e(T))),A},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(A){var V=d;return function(){var q=d;d=V;try{return A.apply(this,arguments)}finally{d=q}}}})(wC);_C.exports=wC;var fP=_C.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EC=C,Jt=fP;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var SC=new Set,nl={};function cs(t,e){po(t,e),po(t+"Capture",e)}function po(t,e){for(nl[t]=e,t=0;t<e.length;t++)SC.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lm=Object.prototype.hasOwnProperty,pP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$0={},F0={};function mP(t){return lm.call(F0,t)?!0:lm.call($0,t)?!1:pP.test(t)?F0[t]=!0:($0[t]=!0,!1)}function gP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yP(t,e,n,r){if(e===null||typeof e>"u"||gP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wy=/[\-:]([a-z])/g;function Ey(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wy,Ey);ft[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wy,Ey);ft[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wy,Ey);ft[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sy(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yP(e,n,i,r)&&(n=null),r||i===null?mP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var br=EC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ju=Symbol.for("react.element"),Os=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Cy=Symbol.for("react.strict_mode"),um=Symbol.for("react.profiler"),CC=Symbol.for("react.provider"),TC=Symbol.for("react.context"),Ty=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),hm=Symbol.for("react.suspense_list"),Iy=Symbol.for("react.memo"),Ur=Symbol.for("react.lazy"),IC=Symbol.for("react.offscreen"),U0=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=U0&&t[U0]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Vf;function ka(t){if(Vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vf=e&&e[1]||""}return`
`+Vf+t}var zf=!1;function Wf(t,e){if(!t||zf)return"";zf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function vP(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=Wf(t.type,!1),t;case 11:return t=Wf(t.type.render,!1),t;case 1:return t=Wf(t.type,!0),t;default:return""}}function dm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Os:return"Portal";case um:return"Profiler";case Cy:return"StrictMode";case cm:return"Suspense";case hm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case TC:return(t.displayName||"Context")+".Consumer";case CC:return(t._context.displayName||"Context")+".Provider";case Ty:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Iy:return e=t.displayName||null,e!==null?e:dm(t.type)||"Memo";case Ur:e=t._payload,t=t._init;try{return dm(t(e))}catch{}}return null}function _P(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dm(e);case 8:return e===Cy?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wP(t){var e=kC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bu(t){t._valueTracker||(t._valueTracker=wP(t))}function xC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=kC(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fm(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function j0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function RC(t,e){e=e.checked,e!=null&&Sy(t,"checked",e,!1)}function pm(t,e){RC(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mm(t,e.type,n):e.hasOwnProperty("defaultValue")&&mm(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function B0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mm(t,e,n){(e!=="number"||Jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function Ys(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function V0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(xa(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function bC(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function z0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function NC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ym(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?NC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vu,AC=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vu=Vu||document.createElement("div"),Vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EP=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(t){EP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ma[e]=Ma[t]})});function PC(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ma.hasOwnProperty(t)&&Ma[t]?(""+e).trim():e+"px"}function OC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=PC(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var SP=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vm(t,e){if(e){if(SP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function _m(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wm=null;function ky(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Em=null,Xs=null,Js=null;function W0(t){if(t=tu(t)){if(typeof Em!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Cd(e),Em(t.stateNode,t.type,e))}}function DC(t){Xs?Js?Js.push(t):Js=[t]:Xs=t}function LC(){if(Xs){var t=Xs,e=Js;if(Js=Xs=null,W0(t),e)for(t=0;t<e.length;t++)W0(e[t])}}function MC(t,e){return t(e)}function $C(){}var Hf=!1;function FC(t,e,n){if(Hf)return t(e,n);Hf=!0;try{return MC(t,e,n)}finally{Hf=!1,(Xs!==null||Js!==null)&&($C(),LC())}}function il(t,e){var n=t.stateNode;if(n===null)return null;var r=Cd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Sm=!1;if(vr)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){Sm=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{Sm=!1}function CP(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var $a=!1,Zc=null,eh=!1,Cm=null,TP={onError:function(t){$a=!0,Zc=t}};function IP(t,e,n,r,i,s,o,a,l){$a=!1,Zc=null,CP.apply(TP,arguments)}function kP(t,e,n,r,i,s,o,a,l){if(IP.apply(this,arguments),$a){if($a){var u=Zc;$a=!1,Zc=null}else throw Error(R(198));eh||(eh=!0,Cm=u)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function UC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function H0(t){if(hs(t)!==t)throw Error(R(188))}function xP(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return H0(i),t;if(s===r)return H0(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function jC(t){return t=xP(t),t!==null?BC(t):null}function BC(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=BC(t);if(e!==null)return e;t=t.sibling}return null}var VC=Jt.unstable_scheduleCallback,q0=Jt.unstable_cancelCallback,RP=Jt.unstable_shouldYield,bP=Jt.unstable_requestPaint,Me=Jt.unstable_now,NP=Jt.unstable_getCurrentPriorityLevel,xy=Jt.unstable_ImmediatePriority,zC=Jt.unstable_UserBlockingPriority,th=Jt.unstable_NormalPriority,AP=Jt.unstable_LowPriority,WC=Jt.unstable_IdlePriority,_d=null,zn=null;function PP(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(_d,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:LP,OP=Math.log,DP=Math.LN2;function LP(t){return t>>>=0,t===0?32:31-(OP(t)/DP|0)|0}var zu=64,Wu=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ra(a):(s&=o,s!==0&&(r=Ra(s)))}else o=n&~i,o!==0?r=Ra(o):s!==0&&(r=Ra(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-In(e),i=1<<n,r|=t[n],e&=~i;return r}function MP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $P(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=MP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function HC(){var t=zu;return zu<<=1,!(zu&4194240)&&(zu=64),t}function qf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function FP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-In(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ry(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-In(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function qC(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var KC,by,GC,QC,YC,Im=!1,Hu=[],Xr=null,Jr=null,Zr=null,sl=new Map,ol=new Map,Br=[],UP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function K0(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(e.pointerId)}}function ca(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=tu(e),e!==null&&by(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jP(t,e,n,r,i){switch(e){case"focusin":return Xr=ca(Xr,t,e,n,r,i),!0;case"dragenter":return Jr=ca(Jr,t,e,n,r,i),!0;case"mouseover":return Zr=ca(Zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return sl.set(s,ca(sl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ol.set(s,ca(ol.get(s)||null,t,e,n,r,i)),!0}return!1}function XC(t){var e=Oi(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=UC(n),e!==null){t.blockedOn=e,YC(t.priority,function(){GC(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=km(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wm=r,n.target.dispatchEvent(r),wm=null}else return e=tu(n),e!==null&&by(e),t.blockedOn=n,!1;e.shift()}return!0}function G0(t,e,n){Sc(t)&&n.delete(e)}function BP(){Im=!1,Xr!==null&&Sc(Xr)&&(Xr=null),Jr!==null&&Sc(Jr)&&(Jr=null),Zr!==null&&Sc(Zr)&&(Zr=null),sl.forEach(G0),ol.forEach(G0)}function ha(t,e){t.blockedOn===e&&(t.blockedOn=null,Im||(Im=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,BP)))}function al(t){function e(i){return ha(i,t)}if(0<Hu.length){ha(Hu[0],t);for(var n=1;n<Hu.length;n++){var r=Hu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&ha(Xr,t),Jr!==null&&ha(Jr,t),Zr!==null&&ha(Zr,t),sl.forEach(e),ol.forEach(e),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)XC(n),n.blockedOn===null&&Br.shift()}var Zs=br.ReactCurrentBatchConfig,rh=!0;function VP(t,e,n,r){var i=ce,s=Zs.transition;Zs.transition=null;try{ce=1,Ny(t,e,n,r)}finally{ce=i,Zs.transition=s}}function zP(t,e,n,r){var i=ce,s=Zs.transition;Zs.transition=null;try{ce=4,Ny(t,e,n,r)}finally{ce=i,Zs.transition=s}}function Ny(t,e,n,r){if(rh){var i=km(t,e,n,r);if(i===null)np(t,e,r,ih,n),K0(t,r);else if(jP(i,t,e,n,r))r.stopPropagation();else if(K0(t,r),e&4&&-1<UP.indexOf(t)){for(;i!==null;){var s=tu(i);if(s!==null&&KC(s),s=km(t,e,n,r),s===null&&np(t,e,r,ih,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else np(t,e,r,null,n)}}var ih=null;function km(t,e,n,r){if(ih=null,t=ky(r),t=Oi(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=UC(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ih=t,null}function JC(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NP()){case xy:return 1;case zC:return 4;case th:case AP:return 16;case WC:return 536870912;default:return 16}default:return 16}}var Kr=null,Ay=null,Cc=null;function ZC(){if(Cc)return Cc;var t,e=Ay,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Cc=i.slice(t,1<r?1-r:void 0)}function Tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qu(){return!0}function Q0(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qu:Q0,this.isPropagationStopped=Q0,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Py=nn(Uo),eu=ke({},Uo,{view:0,detail:0}),WP=nn(eu),Kf,Gf,da,wd=ke({},eu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(Kf=t.screenX-da.screenX,Gf=t.screenY-da.screenY):Gf=Kf=0,da=t),Kf)},movementY:function(t){return"movementY"in t?t.movementY:Gf}}),Y0=nn(wd),HP=ke({},wd,{dataTransfer:0}),qP=nn(HP),KP=ke({},eu,{relatedTarget:0}),Qf=nn(KP),GP=ke({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),QP=nn(GP),YP=ke({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XP=nn(YP),JP=ke({},Uo,{data:0}),X0=nn(JP),ZP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tO[t])?!!e[t]:!1}function Oy(){return nO}var rO=ke({},eu,{key:function(t){if(t.key){var e=ZP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oy,charCode:function(t){return t.type==="keypress"?Tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iO=nn(rO),sO=ke({},wd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J0=nn(sO),oO=ke({},eu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oy}),aO=nn(oO),lO=ke({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),uO=nn(lO),cO=ke({},wd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hO=nn(cO),dO=[9,13,27,32],Dy=vr&&"CompositionEvent"in window,Fa=null;vr&&"documentMode"in document&&(Fa=document.documentMode);var fO=vr&&"TextEvent"in window&&!Fa,eT=vr&&(!Dy||Fa&&8<Fa&&11>=Fa),Z0=String.fromCharCode(32),ew=!1;function tT(t,e){switch(t){case"keyup":return dO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function pO(t,e){switch(t){case"compositionend":return nT(e);case"keypress":return e.which!==32?null:(ew=!0,Z0);case"textInput":return t=e.data,t===Z0&&ew?null:t;default:return null}}function mO(t,e){if(Ls)return t==="compositionend"||!Dy&&tT(t,e)?(t=ZC(),Cc=Ay=Kr=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eT&&e.locale!=="ko"?null:e.data;default:return null}}var gO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gO[t.type]:e==="textarea"}function rT(t,e,n,r){DC(r),e=sh(e,"onChange"),0<e.length&&(n=new Py("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ua=null,ll=null;function yO(t){pT(t,0)}function Ed(t){var e=Fs(t);if(xC(e))return t}function vO(t,e){if(t==="change")return e}var iT=!1;if(vr){var Yf;if(vr){var Xf="oninput"in document;if(!Xf){var nw=document.createElement("div");nw.setAttribute("oninput","return;"),Xf=typeof nw.oninput=="function"}Yf=Xf}else Yf=!1;iT=Yf&&(!document.documentMode||9<document.documentMode)}function rw(){Ua&&(Ua.detachEvent("onpropertychange",sT),ll=Ua=null)}function sT(t){if(t.propertyName==="value"&&Ed(ll)){var e=[];rT(e,ll,t,ky(t)),FC(yO,e)}}function _O(t,e,n){t==="focusin"?(rw(),Ua=e,ll=n,Ua.attachEvent("onpropertychange",sT)):t==="focusout"&&rw()}function wO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ed(ll)}function EO(t,e){if(t==="click")return Ed(e)}function SO(t,e){if(t==="input"||t==="change")return Ed(e)}function CO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:CO;function ul(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lm.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function iw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sw(t,e){var n=iw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iw(n)}}function oT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?oT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function aT(){for(var t=window,e=Jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jc(t.document)}return e}function Ly(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TO(t){var e=aT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&oT(n.ownerDocument.documentElement,n)){if(r!==null&&Ly(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sw(n,s);var o=sw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IO=vr&&"documentMode"in document&&11>=document.documentMode,Ms=null,xm=null,ja=null,Rm=!1;function ow(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rm||Ms==null||Ms!==Jc(r)||(r=Ms,"selectionStart"in r&&Ly(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ja&&ul(ja,r)||(ja=r,r=sh(xm,"onSelect"),0<r.length&&(e=new Py("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ms)))}function Ku(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:Ku("Animation","AnimationEnd"),animationiteration:Ku("Animation","AnimationIteration"),animationstart:Ku("Animation","AnimationStart"),transitionend:Ku("Transition","TransitionEnd")},Jf={},lT={};vr&&(lT=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Sd(t){if(Jf[t])return Jf[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lT)return Jf[t]=e[n];return t}var uT=Sd("animationend"),cT=Sd("animationiteration"),hT=Sd("animationstart"),dT=Sd("transitionend"),fT=new Map,aw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _i(t,e){fT.set(t,e),cs(e,[t])}for(var Zf=0;Zf<aw.length;Zf++){var ep=aw[Zf],kO=ep.toLowerCase(),xO=ep[0].toUpperCase()+ep.slice(1);_i(kO,"on"+xO)}_i(uT,"onAnimationEnd");_i(cT,"onAnimationIteration");_i(hT,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(dT,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RO=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function lw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kP(r,e,void 0,t),t.currentTarget=null}function pT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;lw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;lw(i,a,u),s=l}}}if(eh)throw t=Cm,eh=!1,Cm=null,t}function ge(t,e){var n=e[Om];n===void 0&&(n=e[Om]=new Set);var r=t+"__bubble";n.has(r)||(mT(e,t,2,!1),n.add(r))}function tp(t,e,n){var r=0;e&&(r|=4),mT(n,t,r,e)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function cl(t){if(!t[Gu]){t[Gu]=!0,SC.forEach(function(n){n!=="selectionchange"&&(RO.has(n)||tp(n,!1,t),tp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gu]||(e[Gu]=!0,tp("selectionchange",!1,e))}}function mT(t,e,n,r){switch(JC(e)){case 1:var i=VP;break;case 4:i=zP;break;default:i=Ny}n=i.bind(null,e,n,t),i=void 0,!Sm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function np(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Oi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}FC(function(){var u=s,c=ky(n),h=[];e:{var d=fT.get(t);if(d!==void 0){var f=Py,p=t;switch(t){case"keypress":if(Tc(n)===0)break e;case"keydown":case"keyup":f=iO;break;case"focusin":p="focus",f=Qf;break;case"focusout":p="blur",f=Qf;break;case"beforeblur":case"afterblur":f=Qf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Y0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=qP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=aO;break;case uT:case cT:case hT:f=QP;break;case dT:f=uO;break;case"scroll":f=WP;break;case"wheel":f=hO;break;case"copy":case"cut":case"paste":f=XP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=J0}var m=(e&4)!==0,w=!m&&t==="scroll",y=m?d!==null?d+"Capture":null:d;m=[];for(var g=u,v;g!==null;){v=g;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,y!==null&&(E=il(g,y),E!=null&&m.push(hl(g,E,v)))),w)break;g=g.return}0<m.length&&(d=new f(d,p,null,n,c),h.push({event:d,listeners:m}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==wm&&(p=n.relatedTarget||n.fromElement)&&(Oi(p)||p[_r]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=u,p=p?Oi(p):null,p!==null&&(w=hs(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=u),f!==p)){if(m=Y0,E="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(m=J0,E="onPointerLeave",y="onPointerEnter",g="pointer"),w=f==null?d:Fs(f),v=p==null?d:Fs(p),d=new m(E,g+"leave",f,n,c),d.target=w,d.relatedTarget=v,E=null,Oi(c)===u&&(m=new m(y,g+"enter",p,n,c),m.target=v,m.relatedTarget=w,E=m),w=E,f&&p)t:{for(m=f,y=p,g=0,v=m;v;v=ws(v))g++;for(v=0,E=y;E;E=ws(E))v++;for(;0<g-v;)m=ws(m),g--;for(;0<v-g;)y=ws(y),v--;for(;g--;){if(m===y||y!==null&&m===y.alternate)break t;m=ws(m),y=ws(y)}m=null}else m=null;f!==null&&uw(h,d,f,m,!1),p!==null&&w!==null&&uw(h,w,p,m,!0)}}e:{if(d=u?Fs(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var T=vO;else if(tw(d))if(iT)T=SO;else{T=wO;var x=_O}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=EO);if(T&&(T=T(t,u))){rT(h,T,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&mm(d,"number",d.value)}switch(x=u?Fs(u):window,t){case"focusin":(tw(x)||x.contentEditable==="true")&&(Ms=x,xm=u,ja=null);break;case"focusout":ja=xm=Ms=null;break;case"mousedown":Rm=!0;break;case"contextmenu":case"mouseup":case"dragend":Rm=!1,ow(h,n,c);break;case"selectionchange":if(IO)break;case"keydown":case"keyup":ow(h,n,c)}var k;if(Dy)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ls?tT(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(eT&&n.locale!=="ko"&&(Ls||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ls&&(k=ZC()):(Kr=c,Ay="value"in Kr?Kr.value:Kr.textContent,Ls=!0)),x=sh(u,O),0<x.length&&(O=new X0(O,t,null,n,c),h.push({event:O,listeners:x}),k?O.data=k:(k=nT(n),k!==null&&(O.data=k)))),(k=fO?pO(t,n):mO(t,n))&&(u=sh(u,"onBeforeInput"),0<u.length&&(c=new X0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}pT(h,e)})}function hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=il(t,n),s!=null&&r.unshift(hl(t,s,i)),s=il(t,e),s!=null&&r.push(hl(t,s,i))),t=t.return}return r}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=il(n,s),l!=null&&o.unshift(hl(n,l,a))):i||(l=il(n,s),l!=null&&o.push(hl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bO=/\r\n?/g,NO=/\u0000|\uFFFD/g;function cw(t){return(typeof t=="string"?t:""+t).replace(bO,`
`).replace(NO,"")}function Qu(t,e,n){if(e=cw(e),cw(t)!==e&&n)throw Error(R(425))}function oh(){}var bm=null,Nm=null;function Am(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pm=typeof setTimeout=="function"?setTimeout:void 0,AO=typeof clearTimeout=="function"?clearTimeout:void 0,hw=typeof Promise=="function"?Promise:void 0,PO=typeof queueMicrotask=="function"?queueMicrotask:typeof hw<"u"?function(t){return hw.resolve(null).then(t).catch(OO)}:Pm;function OO(t){setTimeout(function(){throw t})}function rp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);al(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),Fn="__reactFiber$"+jo,dl="__reactProps$"+jo,_r="__reactContainer$"+jo,Om="__reactEvents$"+jo,DO="__reactListeners$"+jo,LO="__reactHandles$"+jo;function Oi(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dw(t);t!==null;){if(n=t[Fn])return n;t=dw(t)}return e}t=n,n=t.parentNode}return null}function tu(t){return t=t[Fn]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Cd(t){return t[dl]||null}var Dm=[],Us=-1;function wi(t){return{current:t}}function _e(t){0>Us||(t.current=Dm[Us],Dm[Us]=null,Us--)}function pe(t,e){Us++,Dm[Us]=t.current,t.current=e}var fi={},xt=wi(fi),Bt=wi(!1),qi=fi;function mo(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function ah(){_e(Bt),_e(xt)}function fw(t,e,n){if(xt.current!==fi)throw Error(R(168));pe(xt,e),pe(Bt,n)}function gT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,_P(t)||"Unknown",i));return ke({},n,r)}function lh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,qi=xt.current,pe(xt,t),pe(Bt,Bt.current),!0}function pw(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=gT(t,e,qi),r.__reactInternalMemoizedMergedChildContext=t,_e(Bt),_e(xt),pe(xt,t)):_e(Bt),pe(Bt,n)}var rr=null,Td=!1,ip=!1;function yT(t){rr===null?rr=[t]:rr.push(t)}function MO(t){Td=!0,yT(t)}function Ei(){if(!ip&&rr!==null){ip=!0;var t=0,e=ce;try{var n=rr;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rr=null,Td=!1}catch(i){throw rr!==null&&(rr=rr.slice(t+1)),VC(xy,Ei),i}finally{ce=e,ip=!1}}return null}var js=[],Bs=0,uh=null,ch=0,sn=[],on=0,Ki=null,sr=1,or="";function ki(t,e){js[Bs++]=ch,js[Bs++]=uh,uh=t,ch=e}function vT(t,e,n){sn[on++]=sr,sn[on++]=or,sn[on++]=Ki,Ki=t;var r=sr;t=or;var i=32-In(r)-1;r&=~(1<<i),n+=1;var s=32-In(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sr=1<<32-In(e)+i|n<<i|r,or=s+t}else sr=1<<s|n<<i|r,or=t}function My(t){t.return!==null&&(ki(t,1),vT(t,1,0))}function $y(t){for(;t===uh;)uh=js[--Bs],js[Bs]=null,ch=js[--Bs],js[Bs]=null;for(;t===Ki;)Ki=sn[--on],sn[on]=null,or=sn[--on],sn[on]=null,sr=sn[--on],sn[on]=null}var Qt=null,Gt=null,Se=!1,_n=null;function _T(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qt=t,Gt=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qt=t,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ki!==null?{id:sr,overflow:or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qt=t,Gt=null,!0):!1;default:return!1}}function Lm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mm(t){if(Se){var e=Gt;if(e){var n=e;if(!mw(t,e)){if(Lm(t))throw Error(R(418));e=ei(n.nextSibling);var r=Qt;e&&mw(t,e)?_T(r,n):(t.flags=t.flags&-4097|2,Se=!1,Qt=t)}}else{if(Lm(t))throw Error(R(418));t.flags=t.flags&-4097|2,Se=!1,Qt=t}}}function gw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function Yu(t){if(t!==Qt)return!1;if(!Se)return gw(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Am(t.type,t.memoizedProps)),e&&(e=Gt)){if(Lm(t))throw wT(),Error(R(418));for(;e;)_T(t,e),e=ei(e.nextSibling)}if(gw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gt=ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gt=null}}else Gt=Qt?ei(t.stateNode.nextSibling):null;return!0}function wT(){for(var t=Gt;t;)t=ei(t.nextSibling)}function go(){Gt=Qt=null,Se=!1}function Fy(t){_n===null?_n=[t]:_n.push(t)}var $O=br.ReactCurrentBatchConfig;function yn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var hh=wi(null),dh=null,Vs=null,Uy=null;function jy(){Uy=Vs=dh=null}function By(t){var e=hh.current;_e(hh),t._currentValue=e}function $m(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){dh=t,Uy=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function dn(t){var e=t._currentValue;if(Uy!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(dh===null)throw Error(R(308));Vs=t,dh.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Di=null;function Vy(t){Di===null?Di=[t]:Di.push(t)}function ET(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Vy(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function zy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ST(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,Vy(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function Ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ry(t,n)}}function yw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fh(t,e,n,r){var i=t.updateQueue;jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,m=a;switch(d=e,f=n,m.tag){case 1:if(p=m.payload,typeof p=="function"){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=m.payload,d=typeof p=="function"?p.call(f,h,d):p,d==null)break e;h=ke({},h,d);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qi|=o,t.lanes=o,t.memoizedState=h}}function vw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var CT=new EC.Component().refs;function Fm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Id={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ri(t),s=dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&(kn(e,t,i,r),Ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ri(t),s=dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&(kn(e,t,i,r),Ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=ri(t),i=dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ti(t,i,r),e!==null&&(kn(e,t,r,n),Ic(e,t,r))}};function _w(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ul(n,r)||!ul(i,s):!0}function TT(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(i=Vt(e)?qi:xt.current,r=e.contextTypes,s=(r=r!=null)?mo(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Id,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ww(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Id.enqueueReplaceState(e,e.state,null)}function Um(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=CT,zy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dn(s):(s=Vt(e)?qi:xt.current,i.context=mo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Id.enqueueReplaceState(i,i.state,null),fh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===CT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Xu(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ew(t){var e=t._init;return e(t._payload)}function IT(t){function e(y,g){if(t){var v=y.deletions;v===null?(y.deletions=[g],y.flags|=16):v.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=ii(y,g),y.index=0,y.sibling=null,y}function s(y,g,v){return y.index=v,t?(v=y.alternate,v!==null?(v=v.index,v<g?(y.flags|=2,g):v):(y.flags|=2,g)):(y.flags|=1048576,g)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,v,E){return g===null||g.tag!==6?(g=hp(v,y.mode,E),g.return=y,g):(g=i(g,v),g.return=y,g)}function l(y,g,v,E){var T=v.type;return T===Ds?c(y,g,v.props.children,E,v.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ur&&Ew(T)===g.type)?(E=i(g,v.props),E.ref=fa(y,g,v),E.return=y,E):(E=Ac(v.type,v.key,v.props,null,y.mode,E),E.ref=fa(y,g,v),E.return=y,E)}function u(y,g,v,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=dp(v,y.mode,E),g.return=y,g):(g=i(g,v.children||[]),g.return=y,g)}function c(y,g,v,E,T){return g===null||g.tag!==7?(g=Vi(v,y.mode,E,T),g.return=y,g):(g=i(g,v),g.return=y,g)}function h(y,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hp(""+g,y.mode,v),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ju:return v=Ac(g.type,g.key,g.props,null,y.mode,v),v.ref=fa(y,null,g),v.return=y,v;case Os:return g=dp(g,y.mode,v),g.return=y,g;case Ur:var E=g._init;return h(y,E(g._payload),v)}if(xa(g)||la(g))return g=Vi(g,y.mode,v,null),g.return=y,g;Xu(y,g)}return null}function d(y,g,v,E){var T=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(y,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ju:return v.key===T?l(y,g,v,E):null;case Os:return v.key===T?u(y,g,v,E):null;case Ur:return T=v._init,d(y,g,T(v._payload),E)}if(xa(v)||la(v))return T!==null?null:c(y,g,v,E,null);Xu(y,v)}return null}function f(y,g,v,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(v)||null,a(g,y,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ju:return y=y.get(E.key===null?v:E.key)||null,l(g,y,E,T);case Os:return y=y.get(E.key===null?v:E.key)||null,u(g,y,E,T);case Ur:var x=E._init;return f(y,g,v,x(E._payload),T)}if(xa(E)||la(E))return y=y.get(v)||null,c(g,y,E,T,null);Xu(g,E)}return null}function p(y,g,v,E){for(var T=null,x=null,k=g,O=g=0,K=null;k!==null&&O<v.length;O++){k.index>O?(K=k,k=null):K=k.sibling;var M=d(y,k,v[O],E);if(M===null){k===null&&(k=K);break}t&&k&&M.alternate===null&&e(y,k),g=s(M,g,O),x===null?T=M:x.sibling=M,x=M,k=K}if(O===v.length)return n(y,k),Se&&ki(y,O),T;if(k===null){for(;O<v.length;O++)k=h(y,v[O],E),k!==null&&(g=s(k,g,O),x===null?T=k:x.sibling=k,x=k);return Se&&ki(y,O),T}for(k=r(y,k);O<v.length;O++)K=f(k,y,O,v[O],E),K!==null&&(t&&K.alternate!==null&&k.delete(K.key===null?O:K.key),g=s(K,g,O),x===null?T=K:x.sibling=K,x=K);return t&&k.forEach(function(Re){return e(y,Re)}),Se&&ki(y,O),T}function m(y,g,v,E){var T=la(v);if(typeof T!="function")throw Error(R(150));if(v=T.call(v),v==null)throw Error(R(151));for(var x=T=null,k=g,O=g=0,K=null,M=v.next();k!==null&&!M.done;O++,M=v.next()){k.index>O?(K=k,k=null):K=k.sibling;var Re=d(y,k,M.value,E);if(Re===null){k===null&&(k=K);break}t&&k&&Re.alternate===null&&e(y,k),g=s(Re,g,O),x===null?T=Re:x.sibling=Re,x=Re,k=K}if(M.done)return n(y,k),Se&&ki(y,O),T;if(k===null){for(;!M.done;O++,M=v.next())M=h(y,M.value,E),M!==null&&(g=s(M,g,O),x===null?T=M:x.sibling=M,x=M);return Se&&ki(y,O),T}for(k=r(y,k);!M.done;O++,M=v.next())M=f(k,y,O,M.value,E),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?O:M.key),g=s(M,g,O),x===null?T=M:x.sibling=M,x=M);return t&&k.forEach(function(Pn){return e(y,Pn)}),Se&&ki(y,O),T}function w(y,g,v,E){if(typeof v=="object"&&v!==null&&v.type===Ds&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ju:e:{for(var T=v.key,x=g;x!==null;){if(x.key===T){if(T=v.type,T===Ds){if(x.tag===7){n(y,x.sibling),g=i(x,v.props.children),g.return=y,y=g;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ur&&Ew(T)===x.type){n(y,x.sibling),g=i(x,v.props),g.ref=fa(y,x,v),g.return=y,y=g;break e}n(y,x);break}else e(y,x);x=x.sibling}v.type===Ds?(g=Vi(v.props.children,y.mode,E,v.key),g.return=y,y=g):(E=Ac(v.type,v.key,v.props,null,y.mode,E),E.ref=fa(y,g,v),E.return=y,y=E)}return o(y);case Os:e:{for(x=v.key;g!==null;){if(g.key===x)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(y,g.sibling),g=i(g,v.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=dp(v,y.mode,E),g.return=y,y=g}return o(y);case Ur:return x=v._init,w(y,g,x(v._payload),E)}if(xa(v))return p(y,g,v,E);if(la(v))return m(y,g,v,E);Xu(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,v),g.return=y,y=g):(n(y,g),g=hp(v,y.mode,E),g.return=y,y=g),o(y)):n(y,g)}return w}var yo=IT(!0),kT=IT(!1),nu={},Wn=wi(nu),fl=wi(nu),pl=wi(nu);function Li(t){if(t===nu)throw Error(R(174));return t}function Wy(t,e){switch(pe(pl,e),pe(fl,t),pe(Wn,nu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ym(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ym(e,t)}_e(Wn),pe(Wn,e)}function vo(){_e(Wn),_e(fl),_e(pl)}function xT(t){Li(pl.current);var e=Li(Wn.current),n=ym(e,t.type);e!==n&&(pe(fl,t),pe(Wn,n))}function Hy(t){fl.current===t&&(_e(Wn),_e(fl))}var Te=wi(0);function ph(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sp=[];function qy(){for(var t=0;t<sp.length;t++)sp[t]._workInProgressVersionPrimary=null;sp.length=0}var kc=br.ReactCurrentDispatcher,op=br.ReactCurrentBatchConfig,Gi=0,Ie=null,Ge=null,tt=null,mh=!1,Ba=!1,ml=0,FO=0;function mt(){throw Error(R(321))}function Ky(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Gy(t,e,n,r,i,s){if(Gi=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kc.current=t===null||t.memoizedState===null?VO:zO,t=n(r,i),Ba){s=0;do{if(Ba=!1,ml=0,25<=s)throw Error(R(301));s+=1,tt=Ge=null,e.updateQueue=null,kc.current=WO,t=n(r,i)}while(Ba)}if(kc.current=gh,e=Ge!==null&&Ge.next!==null,Gi=0,tt=Ge=Ie=null,mh=!1,e)throw Error(R(300));return t}function Qy(){var t=ml!==0;return ml=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ie.memoizedState=tt=t:tt=tt.next=t,tt}function fn(){if(Ge===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=tt===null?Ie.memoizedState:tt.next;if(e!==null)tt=e,Ge=t;else{if(t===null)throw Error(R(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},tt===null?Ie.memoizedState=tt=t:tt=tt.next=t}return tt}function gl(t,e){return typeof e=="function"?e(t):e}function ap(t){var e=fn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Gi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ie.lanes|=c,Qi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Qi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lp(t){var e=fn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function RT(){}function bT(t,e){var n=Ie,r=fn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,Yy(PT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,yl(9,AT.bind(null,n,r,i,e),void 0,null),it===null)throw Error(R(349));Gi&30||NT(n,e,i)}return i}function NT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function AT(t,e,n,r){e.value=n,e.getSnapshot=r,OT(e)&&DT(t)}function PT(t,e,n){return n(function(){OT(e)&&DT(t)})}function OT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function DT(t){var e=wr(t,1);e!==null&&kn(e,t,1,-1)}function Sw(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:t},e.queue=t,t=t.dispatch=BO.bind(null,Ie,t),[e.memoizedState,t]}function yl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function LT(){return fn().memoizedState}function xc(t,e,n,r){var i=Ln();Ie.flags|=t,i.memoizedState=yl(1|e,n,void 0,r===void 0?null:r)}function kd(t,e,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&Ky(r,o.deps)){i.memoizedState=yl(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=yl(1|e,n,s,r)}function Cw(t,e){return xc(8390656,8,t,e)}function Yy(t,e){return kd(2048,8,t,e)}function MT(t,e){return kd(4,2,t,e)}function $T(t,e){return kd(4,4,t,e)}function FT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function UT(t,e,n){return n=n!=null?n.concat([t]):null,kd(4,4,FT.bind(null,e,t),n)}function Xy(){}function jT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ky(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function BT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ky(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function VT(t,e,n){return Gi&21?(Rn(n,e)||(n=HC(),Ie.lanes|=n,Qi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function UO(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=op.transition;op.transition={};try{t(!1),e()}finally{ce=n,op.transition=r}}function zT(){return fn().memoizedState}function jO(t,e,n){var r=ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},WT(t))HT(e,n);else if(n=ET(t,e,n,r),n!==null){var i=Ot();kn(n,t,r,i),qT(n,e,r)}}function BO(t,e,n){var r=ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(WT(t))HT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(i.next=i,Vy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ET(t,e,i,r),n!==null&&(i=Ot(),kn(n,t,r,i),qT(n,e,r))}}function WT(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function HT(t,e){Ba=mh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ry(t,n)}}var gh={readContext:dn,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},VO={readContext:dn,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:dn,useEffect:Cw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xc(4194308,4,FT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xc(4194308,4,t,e)},useInsertionEffect:function(t,e){return xc(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jO.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:Sw,useDebugValue:Xy,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=Sw(!1),e=t[0];return t=UO.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=Ln();if(Se){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),it===null)throw Error(R(349));Gi&30||NT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cw(PT.bind(null,r,s,t),[t]),r.flags|=2048,yl(9,AT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ln(),e=it.identifierPrefix;if(Se){var n=or,r=sr;n=(r&~(1<<32-In(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ml++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zO={readContext:dn,useCallback:jT,useContext:dn,useEffect:Yy,useImperativeHandle:UT,useInsertionEffect:MT,useLayoutEffect:$T,useMemo:BT,useReducer:ap,useRef:LT,useState:function(){return ap(gl)},useDebugValue:Xy,useDeferredValue:function(t){var e=fn();return VT(e,Ge.memoizedState,t)},useTransition:function(){var t=ap(gl)[0],e=fn().memoizedState;return[t,e]},useMutableSource:RT,useSyncExternalStore:bT,useId:zT,unstable_isNewReconciler:!1},WO={readContext:dn,useCallback:jT,useContext:dn,useEffect:Yy,useImperativeHandle:UT,useInsertionEffect:MT,useLayoutEffect:$T,useMemo:BT,useReducer:lp,useRef:LT,useState:function(){return lp(gl)},useDebugValue:Xy,useDeferredValue:function(t){var e=fn();return Ge===null?e.memoizedState=t:VT(e,Ge.memoizedState,t)},useTransition:function(){var t=lp(gl)[0],e=fn().memoizedState;return[t,e]},useMutableSource:RT,useSyncExternalStore:bT,useId:zT,unstable_isNewReconciler:!1};function _o(t,e){try{var n="",r=e;do n+=vP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function up(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HO=typeof WeakMap=="function"?WeakMap:Map;function KT(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vh||(vh=!0,Ym=r),jm(t,e)},n}function GT(t,e,n){n=dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jm(t,e),typeof r!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=s2.bind(null,t,e,n),e.then(t,t))}function Iw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,ti(n,e,1))),n.lanes|=1),t)}var qO=br.ReactCurrentOwner,Ft=!1;function At(t,e,n,r){e.child=t===null?kT(e,null,n,r):yo(e,t.child,n,r)}function xw(t,e,n,r,i){n=n.render;var s=e.ref;return eo(e,i),r=Gy(t,e,n,r,s,i),n=Qy(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Se&&n&&My(e),e.flags|=1,At(t,e,r,i),e.child)}function Rw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,QT(t,e,s,r,i)):(t=Ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ul,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=ii(s,r),t.ref=e.ref,t.return=e,e.child=t}function QT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ul(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,Er(t,e,i)}return Bm(t,e,n,r,i)}function YT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ws,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Ws,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Ws,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Ws,qt),qt|=r;return At(t,e,i,n),e.child}function XT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bm(t,e,n,r,i){var s=Vt(n)?qi:xt.current;return s=mo(e,s),eo(e,i),n=Gy(t,e,n,r,s,i),r=Qy(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Se&&r&&My(e),e.flags|=1,At(t,e,n,i),e.child)}function bw(t,e,n,r,i){if(Vt(n)){var s=!0;lh(e)}else s=!1;if(eo(e,i),e.stateNode===null)Rc(t,e),TT(e,n,r),Um(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dn(u):(u=Vt(n)?qi:xt.current,u=mo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ww(e,o,r,u),jr=!1;var d=e.memoizedState;o.state=d,fh(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Bt.current||jr?(typeof c=="function"&&(Fm(e,n,c,r),l=e.memoizedState),(a=jr||_w(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ST(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dn(l):(l=Vt(n)?qi:xt.current,l=mo(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&ww(e,o,r,l),jr=!1,d=e.memoizedState,o.state=d,fh(e,r,o,i);var p=e.memoizedState;a!==h||d!==p||Bt.current||jr?(typeof f=="function"&&(Fm(e,n,f,r),p=e.memoizedState),(u=jr||_w(e,n,u,r,d,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vm(t,e,n,r,s,i)}function Vm(t,e,n,r,i,s){XT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pw(e,n,!1),Er(t,e,s);r=e.stateNode,qO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,s),e.child=yo(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&pw(e,n,!0),e.child}function JT(t){var e=t.stateNode;e.pendingContext?fw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fw(t,e.context,!1),Wy(t,e.containerInfo)}function Nw(t,e,n,r,i){return go(),Fy(i),e.flags|=256,At(t,e,n,r),e.child}var zm={dehydrated:null,treeContext:null,retryLane:0};function Wm(t){return{baseLanes:t,cachePool:null,transitions:null}}function ZT(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Te,i&1),t===null)return Mm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bd(o,r,0,null),t=Vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wm(n),e.memoizedState=zm,t):Jy(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return KO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ii(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ii(a,s):(s=Vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Wm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zm,r}return s=t.child,t=s.sibling,r=ii(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jy(t,e){return e=bd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ju(t,e,n,r){return r!==null&&Fy(r),yo(e,t.child,null,n),t=Jy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=up(Error(R(422))),Ju(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bd({mode:"visible",children:r.children},i,0,null),s=Vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=Wm(o),e.memoizedState=zm,s);if(!(e.mode&1))return Ju(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=up(s,r,void 0),Ju(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wr(t,i),kn(r,t,i,-1))}return iv(),r=up(Error(R(421))),Ju(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=o2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Gt=ei(i.nextSibling),Qt=e,Se=!0,_n=null,t!==null&&(sn[on++]=sr,sn[on++]=or,sn[on++]=Ki,sr=t.id,or=t.overflow,Ki=e),e=Jy(e,r.children),e.flags|=4096,e)}function Aw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$m(t.return,e,n)}function cp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function eI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Aw(t,n,e);else if(t.tag===19)Aw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ph(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ph(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cp(e,!0,n,null,s);break;case"together":cp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GO(t,e,n){switch(e.tag){case 3:JT(e),go();break;case 5:xT(e);break;case 1:Vt(e.type)&&lh(e);break;case 4:Wy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(hh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?ZT(t,e,n):(pe(Te,Te.current&1),t=Er(t,e,n),t!==null?t.sibling:null);pe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return eI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,YT(t,e,n)}return Er(t,e,n)}var tI,Hm,nI,rI;tI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hm=function(){};nI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(Wn.current);var s=null;switch(n){case"input":i=fm(t,i),r=fm(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=gm(t,i),r=gm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=oh)}vm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(nl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(nl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rI=function(t,e,n,r){n!==r&&(e.flags|=4)};function pa(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QO(t,e,n){var r=e.pendingProps;switch($y(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return Vt(e.type)&&ah(),gt(e),null;case 3:return r=e.stateNode,vo(),_e(Bt),_e(xt),qy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_n!==null&&(Zm(_n),_n=null))),Hm(t,e),gt(e),null;case 5:Hy(e);var i=Li(pl.current);if(n=e.type,t!==null&&e.stateNode!=null)nI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return gt(e),null}if(t=Li(Wn.current),Yu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Fn]=e,r[dl]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ba.length;i++)ge(ba[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":j0(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":V0(r,s),ge("invalid",r)}vm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qu(r.textContent,a,t),i=["children",""+a]):nl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Bu(r),B0(r,s,!0);break;case"textarea":Bu(r),z0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=oh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=NC(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Fn]=e,t[dl]=r,tI(t,e,!1,!1),e.stateNode=t;e:{switch(o=_m(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<ba.length;i++)ge(ba[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":j0(t,r),i=fm(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ge("invalid",t);break;case"textarea":V0(t,r),i=gm(t,r),ge("invalid",t);break;default:i=r}vm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?OC(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AC(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&rl(t,l):typeof l=="number"&&rl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(nl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&Sy(t,s,l,o))}switch(n){case"input":Bu(t),B0(t,r,!1);break;case"textarea":Bu(t),z0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ys(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ys(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=oh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)rI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Li(pl.current),Li(Wn.current),Yu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,(s=r.nodeValue!==n)&&(t=Qt,t!==null))switch(t.tag){case 3:Qu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r}return gt(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Gt!==null&&e.mode&1&&!(e.flags&128))wT(),go(),e.flags|=98560,s=!1;else if(s=Yu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Fn]=e}else go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),s=!1}else _n!==null&&(Zm(_n),_n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Ye===0&&(Ye=3):iv())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return vo(),Hm(t,e),t===null&&cl(e.stateNode.containerInfo),gt(e),null;case 10:return By(e.type._context),gt(e),null;case 17:return Vt(e.type)&&ah(),gt(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return gt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pa(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ph(t),o!==null){for(e.flags|=128,pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>wo&&(e.flags|=128,r=!0,pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=ph(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return gt(e),null}else 2*Me()-s.renderingStartTime>wo&&n!==1073741824&&(e.flags|=128,r=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=Te.current,pe(Te,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return rv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function YO(t,e){switch($y(e),e.tag){case 1:return Vt(e.type)&&ah(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vo(),_e(Bt),_e(xt),qy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hy(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return vo(),null;case 10:return By(e.type._context),null;case 22:case 23:return rv(),null;case 24:return null;default:return null}}var Zu=!1,wt=!1,XO=typeof WeakSet=="function"?WeakSet:Set,D=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function qm(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Pw=!1;function JO(t,e){if(bm=rh,t=aT(),Ly(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nm={focusedElem:t,selectionRange:n},rh=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var m=p.memoizedProps,w=p.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?m:yn(e.type,m),w);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(E){Pe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return p=Pw,Pw=!1,p}function Va(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qm(e,n,s)}i=i.next}while(i!==r)}}function xd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Km(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iI(t){var e=t.alternate;e!==null&&(t.alternate=null,iI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[dl],delete e[Om],delete e[DO],delete e[LO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sI(t){return t.tag===5||t.tag===3||t.tag===4}function Ow(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oh));else if(r!==4&&(t=t.child,t!==null))for(Gm(t,e,n),t=t.sibling;t!==null;)Gm(t,e,n),t=t.sibling}function Qm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qm(t,e,n),t=t.sibling;t!==null;)Qm(t,e,n),t=t.sibling}var at=null,vn=!1;function Mr(t,e,n){for(n=n.child;n!==null;)oI(t,e,n),n=n.sibling}function oI(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(_d,n)}catch{}switch(n.tag){case 5:wt||zs(n,e);case 6:var r=at,i=vn;at=null,Mr(t,e,n),at=r,vn=i,at!==null&&(vn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(vn?(t=at,n=n.stateNode,t.nodeType===8?rp(t.parentNode,n):t.nodeType===1&&rp(t,n),al(t)):rp(at,n.stateNode));break;case 4:r=at,i=vn,at=n.stateNode.containerInfo,vn=!0,Mr(t,e,n),at=r,vn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qm(n,e,o),i=i.next}while(i!==r)}Mr(t,e,n);break;case 1:if(!wt&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,e,a)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Mr(t,e,n),wt=r):Mr(t,e,n);break;default:Mr(t,e,n)}}function Dw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XO),e.forEach(function(r){var i=a2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,vn=!1;break e;case 3:at=a.stateNode.containerInfo,vn=!0;break e;case 4:at=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(at===null)throw Error(R(160));oI(s,o,i),at=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aI(e,t),e=e.sibling}function aI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),Dn(t),r&4){try{Va(3,t,t.return),xd(3,t)}catch(m){Pe(t,t.return,m)}try{Va(5,t,t.return)}catch(m){Pe(t,t.return,m)}}break;case 1:gn(e,t),Dn(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(gn(e,t),Dn(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var i=t.stateNode;try{rl(i,"")}catch(m){Pe(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&RC(i,s),_m(a,o);var u=_m(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?OC(i,h):c==="dangerouslySetInnerHTML"?AC(i,h):c==="children"?rl(i,h):Sy(i,c,h,u)}switch(a){case"input":pm(i,s);break;case"textarea":bC(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ys(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ys(i,!!s.multiple,s.defaultValue,!0):Ys(i,!!s.multiple,s.multiple?[]:"",!1))}i[dl]=s}catch(m){Pe(t,t.return,m)}}break;case 6:if(gn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(m){Pe(t,t.return,m)}}break;case 3:if(gn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{al(e.containerInfo)}catch(m){Pe(t,t.return,m)}break;case 4:gn(e,t),Dn(t);break;case 13:gn(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tv=Me())),r&4&&Dw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,gn(e,t),wt=u):gn(e,t),Dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(h=D=c;D!==null;){switch(d=D,f=d.child,d.tag){case 0:case 11:case 14:case 15:Va(4,d,d.return);break;case 1:zs(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(m){Pe(r,n,m)}}break;case 5:zs(d,d.return);break;case 22:if(d.memoizedState!==null){Mw(h);continue}}f!==null?(f.return=d,D=f):Mw(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=PC("display",o))}catch(m){Pe(t,t.return,m)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){Pe(t,t.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gn(e,t),Dn(t),r&4&&Dw(t);break;case 21:break;default:gn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sI(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rl(i,""),r.flags&=-33);var s=Ow(t);Qm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ow(t);Gm(t,a,o);break;default:throw Error(R(161))}}catch(l){Pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZO(t,e,n){D=t,lI(t)}function lI(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Zu;var u=wt;if(Zu=o,(wt=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?$w(i):l!==null?(l.return=o,D=l):$w(i);for(;s!==null;)D=s,lI(s),s=s.sibling;D=i,Zu=a,wt=u}Lw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Lw(t)}}function Lw(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||xd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&al(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}wt||e.flags&512&&Km(e)}catch(d){Pe(e,e.return,d)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Mw(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function $w(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xd(4,e)}catch(l){Pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Pe(e,i,l)}}var s=e.return;try{Km(e)}catch(l){Pe(e,s,l)}break;case 5:var o=e.return;try{Km(e)}catch(l){Pe(e,o,l)}}}catch(l){Pe(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var e2=Math.ceil,yh=br.ReactCurrentDispatcher,Zy=br.ReactCurrentOwner,un=br.ReactCurrentBatchConfig,re=0,it=null,Ve=null,ht=0,qt=0,Ws=wi(0),Ye=0,vl=null,Qi=0,Rd=0,ev=0,za=null,Mt=null,tv=0,wo=1/0,nr=null,vh=!1,Ym=null,ni=null,ec=!1,Gr=null,_h=0,Wa=0,Xm=null,bc=-1,Nc=0;function Ot(){return re&6?Me():bc!==-1?bc:bc=Me()}function ri(t){return t.mode&1?re&2&&ht!==0?ht&-ht:$O.transition!==null?(Nc===0&&(Nc=HC()),Nc):(t=ce,t!==0||(t=window.event,t=t===void 0?16:JC(t.type)),t):1}function kn(t,e,n,r){if(50<Wa)throw Wa=0,Xm=null,Error(R(185));Zl(t,n,r),(!(re&2)||t!==it)&&(t===it&&(!(re&2)&&(Rd|=n),Ye===4&&Vr(t,ht)),zt(t,r),n===1&&re===0&&!(e.mode&1)&&(wo=Me()+500,Td&&Ei()))}function zt(t,e){var n=t.callbackNode;$P(t,e);var r=nh(t,t===it?ht:0);if(r===0)n!==null&&q0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&q0(n),e===1)t.tag===0?MO(Fw.bind(null,t)):yT(Fw.bind(null,t)),PO(function(){!(re&6)&&Ei()}),n=null;else{switch(qC(r)){case 1:n=xy;break;case 4:n=zC;break;case 16:n=th;break;case 536870912:n=WC;break;default:n=th}n=gI(n,uI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uI(t,e){if(bc=-1,Nc=0,re&6)throw Error(R(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var r=nh(t,t===it?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wh(t,r);else{e=r;var i=re;re|=2;var s=hI();(it!==t||ht!==e)&&(nr=null,wo=Me()+500,Bi(t,e));do try{r2();break}catch(a){cI(t,a)}while(1);jy(),yh.current=s,re=i,Ve!==null?e=0:(it=null,ht=0,e=Ye)}if(e!==0){if(e===2&&(i=Tm(t),i!==0&&(r=i,e=Jm(t,i))),e===1)throw n=vl,Bi(t,0),Vr(t,r),zt(t,Me()),n;if(e===6)Vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!t2(i)&&(e=wh(t,r),e===2&&(s=Tm(t),s!==0&&(r=s,e=Jm(t,s))),e===1))throw n=vl,Bi(t,0),Vr(t,r),zt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:xi(t,Mt,nr);break;case 3:if(Vr(t,r),(r&130023424)===r&&(e=tv+500-Me(),10<e)){if(nh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pm(xi.bind(null,t,Mt,nr),e);break}xi(t,Mt,nr);break;case 4:if(Vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-In(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e2(r/1960))-r,10<r){t.timeoutHandle=Pm(xi.bind(null,t,Mt,nr),r);break}xi(t,Mt,nr);break;case 5:xi(t,Mt,nr);break;default:throw Error(R(329))}}}return zt(t,Me()),t.callbackNode===n?uI.bind(null,t):null}function Jm(t,e){var n=za;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=wh(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Zm(e)),t}function Zm(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function t2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~ev,e&=~Rd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),r=1<<n;t[n]=-1,e&=~r}}function Fw(t){if(re&6)throw Error(R(327));to();var e=nh(t,0);if(!(e&1))return zt(t,Me()),null;var n=wh(t,e);if(t.tag!==0&&n===2){var r=Tm(t);r!==0&&(e=r,n=Jm(t,r))}if(n===1)throw n=vl,Bi(t,0),Vr(t,e),zt(t,Me()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xi(t,Mt,nr),zt(t,Me()),null}function nv(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(wo=Me()+500,Td&&Ei())}}function Yi(t){Gr!==null&&Gr.tag===0&&!(re&6)&&to();var e=re;re|=1;var n=un.transition,r=ce;try{if(un.transition=null,ce=1,t)return t()}finally{ce=r,un.transition=n,re=e,!(re&6)&&Ei()}}function rv(){qt=Ws.current,_e(Ws)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AO(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch($y(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ah();break;case 3:vo(),_e(Bt),_e(xt),qy();break;case 5:Hy(r);break;case 4:vo();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:By(r.type._context);break;case 22:case 23:rv()}n=n.return}if(it=t,Ve=t=ii(t.current,null),ht=qt=e,Ye=0,vl=null,ev=Rd=Qi=0,Mt=za=null,Di!==null){for(e=0;e<Di.length;e++)if(n=Di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Di=null}return t}function cI(t,e){do{var n=Ve;try{if(jy(),kc.current=gh,mh){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mh=!1}if(Gi=0,tt=Ge=Ie=null,Ba=!1,ml=0,Zy.current=null,n===null||n.return===null){Ye=1,vl=e,Ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Iw(o);if(f!==null){f.flags&=-257,kw(f,o,a,s,e),f.mode&1&&Tw(s,u,e),e=f,l=u;var p=e.updateQueue;if(p===null){var m=new Set;m.add(l),e.updateQueue=m}else p.add(l);break e}else{if(!(e&1)){Tw(s,u,e),iv();break e}l=Error(R(426))}}else if(Se&&a.mode&1){var w=Iw(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),kw(w,o,a,s,e),Fy(_o(l,a));break e}}s=l=_o(l,a),Ye!==4&&(Ye=2),za===null?za=[s]:za.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=KT(s,l,e);yw(s,y);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ni===null||!ni.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=GT(s,a,e);yw(s,E);break e}}s=s.return}while(s!==null)}fI(n)}catch(T){e=T,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function hI(){var t=yh.current;return yh.current=gh,t===null?gh:t}function iv(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),it===null||!(Qi&268435455)&&!(Rd&268435455)||Vr(it,ht)}function wh(t,e){var n=re;re|=2;var r=hI();(it!==t||ht!==e)&&(nr=null,Bi(t,e));do try{n2();break}catch(i){cI(t,i)}while(1);if(jy(),re=n,yh.current=r,Ve!==null)throw Error(R(261));return it=null,ht=0,Ye}function n2(){for(;Ve!==null;)dI(Ve)}function r2(){for(;Ve!==null&&!RP();)dI(Ve)}function dI(t){var e=mI(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?fI(t):Ve=e,Zy.current=null}function fI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YO(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Ve=null;return}}else if(n=QO(n,e,qt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Ye===0&&(Ye=5)}function xi(t,e,n){var r=ce,i=un.transition;try{un.transition=null,ce=1,i2(t,e,n,r)}finally{un.transition=i,ce=r}return null}function i2(t,e,n,r){do to();while(Gr!==null);if(re&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FP(t,s),t===it&&(Ve=it=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ec||(ec=!0,gI(th,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=un.transition,un.transition=null;var o=ce;ce=1;var a=re;re|=4,Zy.current=null,JO(t,n),aI(n,t),TO(Nm),rh=!!bm,Nm=bm=null,t.current=n,ZO(n),bP(),re=a,ce=o,un.transition=s}else t.current=n;if(ec&&(ec=!1,Gr=t,_h=i),s=t.pendingLanes,s===0&&(ni=null),PP(n.stateNode),zt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vh)throw vh=!1,t=Ym,Ym=null,t;return _h&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===Xm?Wa++:(Wa=0,Xm=t):Wa=0,Ei(),null}function to(){if(Gr!==null){var t=qC(_h),e=un.transition,n=ce;try{if(un.transition=null,ce=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,_h=0,re&6)throw Error(R(331));var i=re;for(re|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Va(8,c,s)}var h=c.child;if(h!==null)h.return=c,D=h;else for(;D!==null;){c=D;var d=c.sibling,f=c.return;if(iI(c),c===u){D=null;break}if(d!==null){d.return=f,D=d;break}D=f}}}var p=s.alternate;if(p!==null){var m=p.child;if(m!==null){p.child=null;do{var w=m.sibling;m.sibling=null,m=w}while(m!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Va(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,D=y;break e}D=s.return}}var g=t.current;for(D=g;D!==null;){o=D;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,D=v;else e:for(o=g;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xd(9,a)}}catch(T){Pe(a,a.return,T)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(re=i,Ei(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(_d,t)}catch{}r=!0}return r}finally{ce=n,un.transition=e}}return!1}function Uw(t,e,n){e=_o(n,e),e=KT(t,e,1),t=ti(t,e,1),e=Ot(),t!==null&&(Zl(t,1,e),zt(t,e))}function Pe(t,e,n){if(t.tag===3)Uw(t,t,n);else for(;e!==null;){if(e.tag===3){Uw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ni===null||!ni.has(r))){t=_o(n,t),t=GT(e,t,1),e=ti(e,t,1),t=Ot(),e!==null&&(Zl(e,1,t),zt(e,t));break}}e=e.return}}function s2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ht&n)===n&&(Ye===4||Ye===3&&(ht&130023424)===ht&&500>Me()-tv?Bi(t,0):ev|=n),zt(t,e)}function pI(t,e){e===0&&(t.mode&1?(e=Wu,Wu<<=1,!(Wu&130023424)&&(Wu=4194304)):e=1);var n=Ot();t=wr(t,e),t!==null&&(Zl(t,e,n),zt(t,n))}function o2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pI(t,n)}function a2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),pI(t,n)}var mI;mI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,GO(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,Se&&e.flags&1048576&&vT(e,ch,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rc(t,e),t=e.pendingProps;var i=mo(e,xt.current);eo(e,n),i=Gy(null,e,r,t,i,n);var s=Qy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,lh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zy(e),i.updater=Id,e.stateNode=i,i._reactInternals=e,Um(e,r,t,n),e=Vm(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&My(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=u2(r),t=yn(r,t),i){case 0:e=Bm(null,e,r,t,n);break e;case 1:e=bw(null,e,r,t,n);break e;case 11:e=xw(null,e,r,t,n);break e;case 14:e=Rw(null,e,r,yn(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Bm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),bw(t,e,r,i,n);case 3:e:{if(JT(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ST(t,e),fh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_o(Error(R(423)),e),e=Nw(t,e,r,n,i);break e}else if(r!==i){i=_o(Error(R(424)),e),e=Nw(t,e,r,n,i);break e}else for(Gt=ei(e.stateNode.containerInfo.firstChild),Qt=e,Se=!0,_n=null,n=kT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(go(),r===i){e=Er(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return xT(e),t===null&&Mm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Am(r,i)?o=null:s!==null&&Am(r,s)&&(e.flags|=32),XT(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Mm(e),null;case 13:return ZT(t,e,n);case 4:return Wy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yo(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),xw(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(hh,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Bt.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=dr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$m(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$m(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,eo(e,n),i=dn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=yn(r,e.pendingProps),i=yn(r.type,i),Rw(t,e,r,i,n);case 15:return QT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Rc(t,e),e.tag=1,Vt(r)?(t=!0,lh(e)):t=!1,eo(e,n),TT(e,r,i),Um(e,r,i,n),Vm(null,e,r,!0,t,n);case 19:return eI(t,e,n);case 22:return YT(t,e,n)}throw Error(R(156,e.tag))};function gI(t,e){return VC(t,e)}function l2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new l2(t,e,n,r)}function sv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function u2(t){if(typeof t=="function")return sv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ty)return 11;if(t===Iy)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ac(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Vi(n.children,i,s,e);case Cy:o=8,i|=8;break;case um:return t=ln(12,n,e,i|2),t.elementType=um,t.lanes=s,t;case cm:return t=ln(13,n,e,i),t.elementType=cm,t.lanes=s,t;case hm:return t=ln(19,n,e,i),t.elementType=hm,t.lanes=s,t;case IC:return bd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case CC:o=10;break e;case TC:o=9;break e;case Ty:o=11;break e;case Iy:o=14;break e;case Ur:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vi(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function bd(t,e,n,r){return t=ln(22,t,r,e),t.elementType=IC,t.lanes=n,t.stateNode={isHidden:!1},t}function hp(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function dp(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function c2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qf(0),this.expirationTimes=qf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ov(t,e,n,r,i,s,o,a,l){return t=new c2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zy(s),t}function h2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yI(t){if(!t)return fi;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Vt(n))return gT(t,n,e)}return e}function vI(t,e,n,r,i,s,o,a,l){return t=ov(n,r,!0,t,i,s,o,a,l),t.context=yI(null),n=t.current,r=Ot(),i=ri(n),s=dr(r,i),s.callback=e??null,ti(n,s,i),t.current.lanes=i,Zl(t,i,r),zt(t,r),t}function Nd(t,e,n,r){var i=e.current,s=Ot(),o=ri(i);return n=yI(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ti(i,e,o),t!==null&&(kn(t,i,o,s),Ic(t,i,o)),o}function Eh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function av(t,e){jw(t,e),(t=t.alternate)&&jw(t,e)}function d2(){return null}var _I=typeof reportError=="function"?reportError:function(t){console.error(t)};function lv(t){this._internalRoot=t}Ad.prototype.render=lv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Nd(t,e,null,null)};Ad.prototype.unmount=lv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yi(function(){Nd(null,t,null,null)}),e[_r]=null}};function Ad(t){this._internalRoot=t}Ad.prototype.unstable_scheduleHydration=function(t){if(t){var e=QC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&XC(t)}};function uv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bw(){}function f2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Eh(o);s.call(u)}}var o=vI(e,r,t,0,null,!1,!1,"",Bw);return t._reactRootContainer=o,t[_r]=o.current,cl(t.nodeType===8?t.parentNode:t),Yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Eh(l);a.call(u)}}var l=ov(t,0,!1,null,null,!1,!1,"",Bw);return t._reactRootContainer=l,t[_r]=l.current,cl(t.nodeType===8?t.parentNode:t),Yi(function(){Nd(e,l,n,r)}),l}function Od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Eh(o);a.call(l)}}Nd(e,o,t,i)}else o=f2(n,e,t,i,r);return Eh(o)}KC=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(Ry(e,n|1),zt(e,Me()),!(re&6)&&(wo=Me()+500,Ei()))}break;case 13:Yi(function(){var r=wr(t,1);if(r!==null){var i=Ot();kn(r,t,1,i)}}),av(t,1)}};by=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Ot();kn(e,t,134217728,n)}av(t,134217728)}};GC=function(t){if(t.tag===13){var e=ri(t),n=wr(t,e);if(n!==null){var r=Ot();kn(n,t,e,r)}av(t,e)}};QC=function(){return ce};YC=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Em=function(t,e,n){switch(e){case"input":if(pm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cd(r);if(!i)throw Error(R(90));xC(r),pm(r,i)}}}break;case"textarea":bC(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};MC=nv;$C=Yi;var p2={usingClientEntryPoint:!1,Events:[tu,Fs,Cd,DC,LC,nv]},ma={findFiberByHostInstance:Oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},m2={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jC(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||d2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{_d=tc.inject(m2),zn=tc}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p2;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uv(e))throw Error(R(200));return h2(t,e,null,n)};tn.createRoot=function(t,e){if(!uv(t))throw Error(R(299));var n=!1,r="",i=_I;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ov(t,1,!1,null,null,n,!1,r,i),t[_r]=e.current,cl(t.nodeType===8?t.parentNode:t),new lv(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=jC(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return Yi(t)};tn.hydrate=function(t,e,n){if(!Pd(e))throw Error(R(200));return Od(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!uv(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_I;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vI(e,null,t,1,n??null,i,!1,s,o),t[_r]=e.current,cl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ad(e)};tn.render=function(t,e,n){if(!Pd(e))throw Error(R(200));return Od(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!Pd(t))throw Error(R(40));return t._reactRootContainer?(Yi(function(){Od(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};tn.unstable_batchedUpdates=nv;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pd(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Od(t,e,n,!1,r)};tn.version="18.2.0-next-9e3b772b8-20220608";function wI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wI)}catch(t){console.error(t)}}wI(),vC.exports=tn;var g2=vC.exports,Vw=g2;am.createRoot=Vw.createRoot,am.hydrateRoot=Vw.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_l.apply(this,arguments)}var Qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qr||(Qr={}));const zw="popstate";function y2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return eg("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sh(i)}return _2(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function v2(){return Math.random().toString(36).substr(2,8)}function Ww(t,e){return{usr:t.state,key:t.key,idx:e}}function eg(t,e,n,r){return n===void 0&&(n=null),_l({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bo(e):e,{state:n,key:e&&e.key||r||v2()})}function Sh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(_l({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Qr.Pop;let w=c(),y=w==null?null:w-u;u=w,l&&l({action:a,location:m.location,delta:y})}function d(w,y){a=Qr.Push;let g=eg(m.location,w,y);n&&n(g,w),u=c()+1;let v=Ww(g,u),E=m.createHref(g);try{o.pushState(v,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:m.location,delta:1})}function f(w,y){a=Qr.Replace;let g=eg(m.location,w,y);n&&n(g,w),u=c();let v=Ww(g,u),E=m.createHref(g);o.replaceState(v,"",E),s&&l&&l({action:a,location:m.location,delta:0})}function p(w){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:Sh(w);return We(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let m={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zw,h),l=w,()=>{i.removeEventListener(zw,h),l=null}},createHref(w){return e(i,w)},createURL:p,encodeLocation(w){let y=p(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:d,replace:f,go(w){return o.go(w)}};return m}var Hw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hw||(Hw={}));function w2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Bo(e):e,i=hv(r.pathname||"/",n);if(i==null)return null;let s=EI(t);E2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=N2(s[a],O2(i));return o}function EI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(We(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=si([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(We(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),EI(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:R2(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of SI(s.path))i(s,o,l)}),e}function SI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=SI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function E2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:b2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S2=/^:\w+$/,C2=3,T2=2,I2=1,k2=10,x2=-2,qw=t=>t==="*";function R2(t,e){let n=t.split("/"),r=n.length;return n.some(qw)&&(r+=x2),e&&(r+=T2),n.filter(i=>!qw(i)).reduce((i,s)=>i+(S2.test(s)?C2:s===""?I2:k2),r)}function b2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function N2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=A2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:si([i,c.pathname]),pathnameBase:$2(si([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=si([i,c.pathnameBase]))}return s}function A2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=P2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=D2(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function P2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function O2(t){try{return decodeURI(t)}catch(e){return cv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function D2(t,e){try{return decodeURIComponent(t)}catch(n){return cv(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function hv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function L2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bo(t):t;return{pathname:n?n.startsWith("/")?n:M2(n,e):e,search:F2(r),hash:U2(i)}}function M2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function TI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bo(t):(i=_l({},t),We(!i.pathname||!i.pathname.includes("?"),fp("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),fp("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),fp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=L2(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const si=t=>t.join("/").replace(/\/\/+/g,"/"),$2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),F2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,U2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function j2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const II=["post","put","patch","delete"];new Set(II);const B2=["get",...II];new Set(B2);/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ch(){return Ch=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ch.apply(this,arguments)}const kI=C.createContext(null),V2=C.createContext(null),Vo=C.createContext(null),Dd=C.createContext(null),ds=C.createContext({outlet:null,matches:[],isDataRoute:!1}),xI=C.createContext(null);function z2(t,e){let{relative:n}=e===void 0?{}:e;ru()||We(!1);let{basename:r,navigator:i}=C.useContext(Vo),{hash:s,pathname:o,search:a}=bI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:si([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ru(){return C.useContext(Dd)!=null}function Ld(){return ru()||We(!1),C.useContext(Dd).location}function RI(t){C.useContext(Vo).static||C.useLayoutEffect(t)}function Md(){let{isDataRoute:t}=C.useContext(ds);return t?nD():W2()}function W2(){ru()||We(!1);let{basename:t,navigator:e}=C.useContext(Vo),{matches:n}=C.useContext(ds),{pathname:r}=Ld(),i=JSON.stringify(CI(n).map(a=>a.pathnameBase)),s=C.useRef(!1);return RI(()=>{s.current=!0}),C.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=TI(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:si([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function bI(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(ds),{pathname:i}=Ld(),s=JSON.stringify(CI(r).map(o=>o.pathnameBase));return C.useMemo(()=>TI(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function H2(t,e){return q2(t,e)}function q2(t,e,n){ru()||We(!1);let{navigator:r}=C.useContext(Vo),{matches:i}=C.useContext(ds),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ld(),u;if(e){var c;let m=typeof e=="string"?Bo(e):e;a==="/"||(c=m.pathname)!=null&&c.startsWith(a)||We(!1),u=m}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=w2(t,{pathname:d}),p=X2(f&&f.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:si([a,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?a:si([a,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n);return e&&p?C.createElement(Dd.Provider,{value:{location:Ch({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qr.Pop}},p):p}function K2(){let t=tD(),e=j2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const G2=C.createElement(K2,null);class Q2 extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(ds.Provider,{value:this.props.routeContext},C.createElement(xI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y2(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(kI);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(ds.Provider,{value:e},r)}function X2(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||We(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||G2);let d=e.concat(s.slice(0,u+1)),f=()=>{let p;return c?p=h:l.route.Component?p=C.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=a,C.createElement(Y2,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(Q2,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var tg;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(tg||(tg={}));var wl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(wl||(wl={}));function J2(t){let e=C.useContext(kI);return e||We(!1),e}function Z2(t){let e=C.useContext(V2);return e||We(!1),e}function eD(t){let e=C.useContext(ds);return e||We(!1),e}function NI(t){let e=eD(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function tD(){var t;let e=C.useContext(xI),n=Z2(wl.UseRouteError),r=NI(wl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function nD(){let{router:t}=J2(tg.UseNavigateStable),e=NI(wl.UseNavigateStable),n=C.useRef(!1);return RI(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ch({fromRouteId:e},s)))},[t,e])}function bs(t){We(!1)}function rD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:s,static:o=!1}=t;ru()&&We(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Bo(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,p=C.useMemo(()=>{let m=hv(u,a);return m==null?null:{location:{pathname:m,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return p==null?null:C.createElement(Vo.Provider,{value:l},C.createElement(Dd.Provider,{children:n,value:p}))}function iD(t){let{children:e,location:n}=t;return H2(ng(e),n)}var Kw;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Kw||(Kw={}));new Promise(()=>{});function ng(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,ng(r.props.children,s));return}r.type!==bs&&We(!1),!r.props.index||!r.props.children||We(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ng(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rg(){return rg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rg.apply(this,arguments)}function sD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function oD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aD(t,e){return t.button===0&&(!e||e==="_self")&&!oD(t)}const lD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function uD(t){let{basename:e,children:n,window:r}=t,i=C.useRef();i.current==null&&(i.current=y2({window:r,v5Compat:!0}));let s=i.current,[o,a]=C.useState({action:s.action,location:s.location});return C.useLayoutEffect(()=>s.listen(a),[s]),C.createElement(rD,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const cD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hs=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=sD(e,lD),{basename:d}=C.useContext(Vo),f,p=!1;if(typeof u=="string"&&hD.test(u)&&(f=u,cD))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),E=hv(v.pathname,d);v.origin===g.origin&&E!=null?u=E+v.search+v.hash:p=!0}catch{}let m=z2(u,{relative:i}),w=dD(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(g){r&&r(g),g.defaultPrevented||w(g)}return C.createElement("a",rg({},h,{href:f||m,onClick:p||s?r:y,ref:n,target:l}))});var Gw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Gw||(Gw={}));var Qw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qw||(Qw={}));function dD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Md(),l=Ld(),u=bI(t,{relative:o});return C.useCallback(c=>{if(aD(c,n)){c.preventDefault();let h=r!==void 0?r:Sh(l)===Sh(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw zo(e)},zo=function(t){return new Error("Firebase Database ("+AI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new pD;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OI=function(t){const e=PI(t);return dv.encodeByteArray(e,!0)},Th=function(t){return OI(t).replace(/\./g,"")},Ih=function(t){try{return dv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){return DI(void 0,t)}function DI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gD(n)||(t[n]=DI(t[n],e[n]));return t}function gD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=()=>yD().__FIREBASE_DEFAULTS__,_D=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ih(t[1]);return e&&JSON.parse(e)},fv=()=>{try{return vD()||_D()||wD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},LI=t=>{var e,n;return(n=(e=fv())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ED=t=>{const e=LI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},MI=()=>{var t;return(t=fv())===null||t===void 0?void 0:t.config},$I=t=>{var e;return(e=fv())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Th(JSON.stringify(n)),Th(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function CD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TD(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UI(){return AI.NODE_ADMIN===!0}function jI(){try{return typeof indexedDB=="object"}catch{return!1}}function ID(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kD,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mn(i,a,r)}}function xD(t,e){return t.replace(RD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const RD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=El(Ih(s[0])||""),n=El(Ih(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},bD=function(t){const e=BI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ND=function(t){const e=BI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Eo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ig(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function xh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yw(s)&&Yw(o)){if(!xh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Na(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Aa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function PD(t,e){const n=new OD(t,e);return n.subscribe.bind(n)}class OD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pp),i.error===void 0&&(i.error=pp),i.complete===void 0&&(i.complete=pp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pp(){}function VI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$d=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=1e3,$D=2,FD=4*60*60*1e3,UD=.5;function jD(t,e=MD,n=$D){const r=e*Math.pow(n,t),i=Math.round(UD*r*(Math.random()-.5)*2);return Math.min(FD,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zD(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VD(t){return t===Ri?void 0:t}function zD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const HD={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},qD=te.INFO,KD={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},GD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=KD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class iu{constructor(e){this.name=e,this._logLevel=qD,this._logHandler=GD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const QD=(t,e)=>e.some(n=>t instanceof n);let Xw,Jw;function YD(){return Xw||(Xw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XD(){return Jw||(Jw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zI=new WeakMap,sg=new WeakMap,WI=new WeakMap,mp=new WeakMap,gv=new WeakMap;function JD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(oi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zI.set(n,t)}).catch(()=>{}),gv.set(e,t),e}function ZD(t){if(sg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sg.set(t,e)}let og={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||WI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eL(t){og=t(og)}function tL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gp(this),e,...n);return WI.set(r,e.sort?e.sort():[e]),oi(r)}:XD().includes(t)?function(...e){return t.apply(gp(this),e),oi(zI.get(this))}:function(...e){return oi(t.apply(gp(this),e))}}function nL(t){return typeof t=="function"?tL(t):(t instanceof IDBTransaction&&ZD(t),QD(t,YD())?new Proxy(t,og):t)}function oi(t){if(t instanceof IDBRequest)return JD(t);if(mp.has(t))return mp.get(t);const e=nL(t);return e!==t&&(mp.set(t,e),gv.set(e,t)),e}const gp=t=>gv.get(t);function rL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=oi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(oi(o.result),l.oldVersion,l.newVersion,oi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const iL=["get","getKey","getAll","getAllKeys","count"],sL=["put","add","delete","clear"],yp=new Map;function Zw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yp.get(e))return yp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return yp.set(e,s),s}eL(t=>({...t,get:(e,n,r)=>Zw(e,n)||t.get(e,n,r),has:(e,n)=>!!Zw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ag="@firebase/app",e1="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new iu("@firebase/app"),lL="@firebase/app-compat",uL="@firebase/analytics-compat",cL="@firebase/analytics",hL="@firebase/app-check-compat",dL="@firebase/app-check",fL="@firebase/auth",pL="@firebase/auth-compat",mL="@firebase/database",gL="@firebase/database-compat",yL="@firebase/functions",vL="@firebase/functions-compat",_L="@firebase/installations",wL="@firebase/installations-compat",EL="@firebase/messaging",SL="@firebase/messaging-compat",CL="@firebase/performance",TL="@firebase/performance-compat",IL="@firebase/remote-config",kL="@firebase/remote-config-compat",xL="@firebase/storage",RL="@firebase/storage-compat",bL="@firebase/firestore",NL="@firebase/firestore-compat",AL="firebase",PL="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="[DEFAULT]",OL={[ag]:"fire-core",[lL]:"fire-core-compat",[cL]:"fire-analytics",[uL]:"fire-analytics-compat",[dL]:"fire-app-check",[hL]:"fire-app-check-compat",[fL]:"fire-auth",[pL]:"fire-auth-compat",[mL]:"fire-rtdb",[gL]:"fire-rtdb-compat",[yL]:"fire-fn",[vL]:"fire-fn-compat",[_L]:"fire-iid",[wL]:"fire-iid-compat",[EL]:"fire-fcm",[SL]:"fire-fcm-compat",[CL]:"fire-perf",[TL]:"fire-perf-compat",[IL]:"fire-rc",[kL]:"fire-rc-compat",[xL]:"fire-gcs",[RL]:"fire-gcs-compat",[bL]:"fire-fst",[NL]:"fire-fst-compat","fire-js":"fire-js",[AL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map,ug=new Map;function DL(t,e){try{t.container.addComponent(e)}catch(n){Xi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(ug.has(e))return Xi.debug(`There were multiple attempts to register component ${e}.`),!1;ug.set(e,t);for(const n of Sl.values())DL(n,t);return!0}function su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ai=new fs("app","Firebase",LL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=PL;function Fd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ai.create("bad-app-name",{appName:String(i)});if(n||(n=MI()),!n)throw ai.create("no-options");const s=Sl.get(i);if(s){if(xh(n,s.options)&&xh(r,s.config))return s;throw ai.create("duplicate-app",{appName:i})}const o=new WD(i);for(const l of ug.values())o.addComponent(l);const a=new ML(n,r,o);return Sl.set(i,a),a}function HI(t=lg){const e=Sl.get(t);if(!e&&t===lg&&MI())return Fd();if(!e)throw ai.create("no-app",{appName:t});return e}function $L(){return Array.from(Sl.values())}function He(t,e,n){var r;let i=(r=OL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xi.warn(a.join(" "));return}pn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL="firebase-heartbeat-database",UL=1,Cl="firebase-heartbeat-store";let vp=null;function qI(){return vp||(vp=rL(FL,UL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cl)}}}).catch(t=>{throw ai.create("idb-open",{originalErrorMessage:t.message})})),vp}async function jL(t){try{return await(await qI()).transaction(Cl).objectStore(Cl).get(KI(t))}catch(e){if(e instanceof mn)Xi.warn(e.message);else{const n=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xi.warn(n.message)}}}async function t1(t,e){try{const r=(await qI()).transaction(Cl,"readwrite");await r.objectStore(Cl).put(e,KI(t)),await r.done}catch(n){if(n instanceof mn)Xi.warn(n.message);else{const r=ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xi.warn(r.message)}}}function KI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL=1024,VL=30*24*60*60*1e3;class zL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=n1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=VL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=n1(),{heartbeatsToSend:n,unsentEntries:r}=WL(this._heartbeatsCache.heartbeats),i=Th(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function n1(){return new Date().toISOString().substring(0,10)}function WL(t,e=BL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),r1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),r1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jI()?ID().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jL(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return t1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return t1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function r1(t){return Th(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t){pn(new Zt("platform-logger",e=>new oL(e),"PRIVATE")),pn(new Zt("heartbeat",e=>new zL(e),"PRIVATE")),He(ag,e1,t),He(ag,e1,"esm2017"),He("fire-js","")}qL("");function yv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function GI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KL=GI,QI=new fs("auth","Firebase",GI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new iu("@firebase/auth");function GL(t,...e){Rh.logLevel<=te.WARN&&Rh.warn(`Auth (${Ar}): ${t}`,...e)}function Pc(t,...e){Rh.logLevel<=te.ERROR&&Rh.error(`Auth (${Ar}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw vv(t,...e)}function Hn(t,...e){return vv(t,...e)}function QL(t,e,n){const r=Object.assign(Object.assign({},KL()),{[e]:n});return new fs("auth","Firebase",r).create(e,{appName:t.name})}function vv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return QI.create(t,...e)}function j(t,e,...n){if(!t)throw vv(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pc(e),new Error(e)}function Sr(t,e){t||ar(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YL(){return i1()==="http:"||i1()==="https:"}function i1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YL()||CD()||"connection"in navigator)?navigator.onLine:!0}function JL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=mv()||FI()}get(){return XL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=new ou(3e4,6e4);function Ho(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qo(t,e,n,r,i={}){return XI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),YI.fetch()(JI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function XI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZL),e);try{const i=new tM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nc(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw QL(t,c,u);bn(t,c)}}catch(i){if(i instanceof mn)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function au(t,e,n,r,i={}){const s=await qo(t,e,n,r,i);return"mfaPendingCredential"in s&&bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function JI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_v(t.config,i):`${t.config.apiScheme}://${i}`}class tM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),eM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Hn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(t,e){return qo(t,"POST","/v1/accounts:delete",e)}async function rM(t,e){return qo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iM(t,e=!1){const n=pt(t),r=await n.getIdToken(e),i=wv(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ha(_p(i.auth_time)),issuedAtTime:Ha(_p(i.iat)),expirationTime:Ha(_p(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _p(t){return Number(t)*1e3}function wv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ih(n);return i?JSON.parse(i):(Pc("Failed to decode base64 JWT payload"),null)}catch(i){return Pc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sM(t){const e=wv(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&oM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ha(this.lastLoginAt),this.creationTime=Ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Tl(t,rM(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cM(s.providerUserInfo):[],a=uM(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ZI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function lM(t){const e=pt(t);await bh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cM(t){return t.map(e=>{var{providerId:n}=e,r=yv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM(t,e){const n=await XI(t,{},async()=>{const r=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=JI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",YI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Il;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Il,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ZI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Tl(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iM(this,e)}reload(){return lM(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tl(this,nM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:T,providerData:x,stsTokenManager:k}=n;j(v&&k,e,"internal-error");const O=Il.fromJSON(this.name,k);j(typeof v=="string",e,"internal-error"),$r(h,e.name),$r(d,e.name),j(typeof E=="boolean",e,"internal-error"),j(typeof T=="boolean",e,"internal-error"),$r(f,e.name),$r(p,e.name),$r(m,e.name),$r(w,e.name),$r(y,e.name),$r(g,e.name);const K=new zi({uid:v,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:O,createdAt:y,lastLoginAt:g});return x&&Array.isArray(x)&&(K.providerData=x.map(M=>Object.assign({},M))),w&&(K._redirectEventId=w),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new Il;i.updateFromServerResponse(n);const s=new zi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bh(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=new Map;function lr(t){Sr(t instanceof Function,"Expected a class definition");let e=s1.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,s1.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ek.type="NONE";const o1=ek;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(lr(o1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||lr(o1);const o=Oc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=zi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new no(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new no(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sk(e))return"Blackberry";if(ok(e))return"Webos";if(Ev(e))return"Safari";if((e.includes("chrome/")||nk(e))&&!e.includes("edge/"))return"Chrome";if(ik(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tk(t=Rt()){return/firefox\//i.test(t)}function Ev(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nk(t=Rt()){return/crios\//i.test(t)}function rk(t=Rt()){return/iemobile/i.test(t)}function ik(t=Rt()){return/android/i.test(t)}function sk(t=Rt()){return/blackberry/i.test(t)}function ok(t=Rt()){return/webos/i.test(t)}function Ud(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dM(t=Rt()){var e;return Ud(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fM(){return TD()&&document.documentMode===10}function ak(t=Rt()){return Ud(t)||ik(t)||ok(t)||sk(t)||/windows phone/i.test(t)||rk(t)}function pM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t,e=[]){let n;switch(t){case"Browser":n=a1(Rt());break;case"Worker":n=`${a1(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${r}`}async function uk(t,e){return qo(t,"GET","/v2/recaptchaConfig",Ho(t,e))}function l1(t){return t!==void 0&&t.enterprise!==void 0}class ck{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mM().appendChild(r)})}function gM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yM="https://www.google.com/recaptcha/enterprise.js?render=",vM="recaptcha-enterprise",_M="NO_RECAPTCHA";class dk{constructor(e){this.type=vM,this.auth=Ko(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{uk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ck(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;l1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(_M)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&l1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hk(yM+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Nh(t,e,n,r=!1){const i=new dk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new u1(this),this.idTokenSubscription=new u1(this),this.beforeStateQueue=new wM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lr(e))})}async initializeRecaptchaConfig(){const e=await uk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ck(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new dk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lr(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ko(t){return pt(t)}class u1{constructor(e){this.auth=e,this.observer=null,this.addObserver=PD(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t,e){const n=su(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xh(s,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function CM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TM(t,e,n){const r=Ko(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fk(e),{host:o,port:a}=IM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kM()}function fk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IM(t){const e=fk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:c1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:c1(o)}}}function c1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,n){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}async function xM(t,e){return qo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t,e){return au(t,"POST","/v1/accounts:signInWithPassword",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RM(t,e){return au(t,"POST","/v1/accounts:signInWithEmailLink",Ho(t,e))}async function bM(t,e){return au(t,"POST","/v1/accounts:signInWithEmailLink",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends Sv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new kl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new kl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Nh(e,r,"signInWithPassword");return wp(e,i)}else return wp(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Nh(e,r,"signInWithPassword");return wp(e,s)}else return Promise.reject(i)});case"emailLink":return RM(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return xM(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bM(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e){return au(t,"POST","/v1/accounts:signInWithIdp",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM="http://localhost";class Ji extends Sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:NM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PM(t){const e=Na(Aa(t)).link,n=e?Na(Aa(e)).deep_link_id:null,r=Na(Aa(t)).deep_link_id;return(r?Na(Aa(r)).link:null)||r||n||e||t}class Cv{constructor(e){var n,r,i,s,o,a;const l=Na(Aa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=AM((i=l.mode)!==null&&i!==void 0?i:null);j(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PM(e);try{return new Cv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.providerId=Go.PROVIDER_ID}static credential(e,n){return kl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cv.parseLink(n);return j(r,"argument-error"),kl._fromEmailAndCode(e,r.code,r.tenantId)}}Go.PROVIDER_ID="password";Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends pk{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends lu{constructor(){super("facebook.com")}static credential(e){return Ji._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends lu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ji._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.GOOGLE_SIGN_IN_METHOD="google.com";Wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends lu{constructor(){super("github.com")}static credential(e){return Ji._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends lu{constructor(){super("twitter.com")}static credential(e,n){return Ji._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(t,e){return au(t,"POST","/v1/accounts:signUp",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zi._fromIdTokenResponse(e,r,i),o=h1(r);return new Zi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=h1(r);return new Zi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function h1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ah.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ah(e,n,r,i)}}function mk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ah._fromErrorAndOperation(t,s,e,r):s})}async function OM(t,e,n=!1){const r=await Tl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Tl(t,mk(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=wv(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Zi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e,n=!1){const r="signIn",i=await mk(t,r,e),s=await Zi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function LM(t,e){return gk(Ko(t),e)}async function MM(t,e,n){var r;const i=Ko(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Nh(i,s,"signUpPassword");o=Ep(i,u)}else o=Ep(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Nh(i,s,"signUpPassword");return Ep(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Zi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function $M(t,e,n){return LM(pt(t),Go.credential(e,n))}function FM(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function UM(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function jM(t,e,n,r){return pt(t).onAuthStateChanged(e,n,r)}const Ph="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ph,"1"),this.storage.removeItem(Ph),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(){const t=Rt();return Ev(t)||Ud(t)}const VM=1e3,zM=10;class vk extends yk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BM()&&pM(),this.fallbackToPolling=ak(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vk.type="LOCAL";const WM=vk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k extends yk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_k.type="SESSION";const wk=_k;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await HM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Tv("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function KM(t){qn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function GM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YM(){return Ek()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="firebaseLocalStorageDb",XM=1,Oh="firebaseLocalStorage",Ck="fbase_key";class uu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bd(t,e){return t.transaction([Oh],e?"readwrite":"readonly").objectStore(Oh)}function JM(){const t=indexedDB.deleteDatabase(Sk);return new uu(t).toPromise()}function hg(){const t=indexedDB.open(Sk,XM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oh,{keyPath:Ck})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oh)?e(r):(r.close(),await JM(),e(await hg()))})})}async function d1(t,e,n){const r=Bd(t,!0).put({[Ck]:e,value:n});return new uu(r).toPromise()}async function ZM(t,e){const n=Bd(t,!1).get(e),r=await new uu(n).toPromise();return r===void 0?null:r.value}function f1(t,e){const n=Bd(t,!0).delete(e);return new uu(n).toPromise()}const e$=800,t$=3;class Tk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>t$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ek()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jd._getInstance(YM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GM(),!this.activeServiceWorker)return;this.sender=new qM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hg();return await d1(e,Ph,"1"),await f1(e,Ph),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>d1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>f1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bd(i,!1).getAll();return new uu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tk.type="LOCAL";const n$=Tk;new ou(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r$(t,e){return e?lr(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv extends Sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i$(t){return gk(t.auth,new Iv(t),t.bypassAuthState)}function s$(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),DM(n,new Iv(t),t.bypassAuthState)}async function o$(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),OM(n,new Iv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i$;case"linkViaPopup":case"linkViaRedirect":return o$;case"reauthViaPopup":case"reauthViaRedirect":return s$;default:bn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a$=new ou(2e3,1e4);class qs extends Ik{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Tv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,a$.get())};e()}}qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l$="pendingRedirect",Dc=new Map;class u$ extends Ik{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dc.get(this.auth._key());if(!e){try{const r=await c$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dc.set(this.auth._key(),e)}return this.bypassAuthState||Dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c$(t,e){const n=f$(e),r=d$(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function h$(t,e){Dc.set(t._key(),e)}function d$(t){return lr(t._redirectPersistence)}function f$(t){return Oc(l$,t.config.apiKey,t.name)}async function p$(t,e,n=!1){const r=Ko(t),i=r$(r,e),o=await new u$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m$=10*60*1e3;class g${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m$&&this.cachedEventUids.clear(),this.cachedEventUids.has(p1(e))}saveEventToCache(e){this.cachedEventUids.add(p1(e)),this.lastProcessedEventTime=Date.now()}}function p1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v$(t,e={}){return qo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w$=/^https?/;async function E$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await v$(t);for(const n of e)try{if(S$(n))return}catch{}bn(t,"unauthorized-domain")}function S$(t){const e=cg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!w$.test(n))return!1;if(_$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$=new ou(3e4,6e4);function m1(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function T$(t){return new Promise((e,n)=>{var r,i,s;function o(){m1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{m1(),n(Hn(t,"network-request-failed"))},timeout:C$.get()})}if(!((i=(r=qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qn().gapi)===null||s===void 0)&&s.load)o();else{const a=gM("iframefcb");return qn()[a]=()=>{gapi.load?o():n(Hn(t,"network-request-failed"))},hk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Lc=null,e})}let Lc=null;function I$(t){return Lc=Lc||T$(t),Lc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k$=new ou(5e3,15e3),x$="__/auth/iframe",R$="emulator/auth/iframe",b$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A$(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_v(e,R$):`https://${t.config.authDomain}/${x$}`,r={apiKey:e.apiKey,appName:t.name,v:Ar},i=N$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wo(r).slice(1)}`}async function P$(t){const e=await I$(t),n=qn().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:A$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),a=qn().setTimeout(()=>{s(o)},k$.get());function l(){qn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D$=500,L$=600,M$="_blank",$$="http://localhost";class g1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F$(t,e,n,r=D$,i=L$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},O$),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Rt().toLowerCase();n&&(a=nk(u)?M$:n),tk(u)&&(e=e||$$,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(dM(u)&&a!=="_self")return U$(e||"",a),new g1(null);const h=window.open(e||"",a,c);j(h,t,"popup-blocked");try{h.focus()}catch{}return new g1(h)}function U$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j$="__/auth/handler",B$="emulator/auth/handler",V$=encodeURIComponent("fac");async function y1(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ar,eventId:i};if(e instanceof pk){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ig(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof lu){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${V$}=${encodeURIComponent(l)}`:"";return`${z$(t)}?${Wo(a).slice(1)}${u}`}function z$({config:t}){return t.emulator?_v(t,B$):`https://${t.authDomain}/${j$}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="webStorageSupport";class W${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wk,this._completeRedirectFn=p$,this._overrideRedirectResult=h$}async _openPopup(e,n,r,i){var s;Sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await y1(e,n,r,cg(),i);return F$(e,o,Tv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await y1(e,n,r,cg(),i);return KM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P$(e),r=new g$(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sp,{type:Sp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sp];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=E$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ak()||Ev()||Ud()}}const H$=W$;var v1="@firebase/auth",_1="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G$(t){pn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lk(t)},u=new EM(r,i,s,l);return CM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Zt("auth-internal",e=>{const n=Ko(e.getProvider("auth").getImmediate());return(r=>new q$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(v1,_1,K$(t)),He(v1,_1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q$=5*60,Y$=$I("authIdTokenMaxAge")||Q$;let w1=null;const X$=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Y$)return;const i=n==null?void 0:n.token;w1!==i&&(w1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kv(t=HI()){const e=su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SM(t,{popupRedirectResolver:H$,persistence:[n$,WM,wk]}),r=$I("authTokenSyncURL");if(r){const s=X$(r);UM(n,s,()=>s(n.currentUser)),FM(n,o=>s(o))}const i=LI("auth");return i&&TM(n,`http://${i}`),n}G$("Browser");var xk="https://js.stripe.com/v3",J$=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,E1="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Z$=function(){for(var e=document.querySelectorAll('script[src^="'.concat(xk,'"]')),n=0;n<e.length;n++){var r=e[n];if(J$.test(r.src))return r}return null},eF=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(xk).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},tF=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.52.1",startTime:n})},rc=null,nF=function(e){return rc!==null||(rc=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(E1),window.Stripe){n(window.Stripe);return}try{var i=Z$();i&&e?console.warn(E1):i||(i=eF(e)),i.addEventListener("load",function(){window.Stripe?n(window.Stripe):r(new Error("Stripe.js not available"))}),i.addEventListener("error",function(){r(new Error("Failed to load Stripe.js"))})}catch(s){r(s);return}})),rc},rF=function(e,n,r){if(e===null)return null;var i=e.apply(void 0,n);return tF(i,r),i},Rk=Promise.resolve().then(function(){return nF(null)}),bk=!1;Rk.catch(function(t){bk||console.warn(t)});var iF=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];bk=!0;var i=Date.now();return Rk.then(function(s){return rF(s,n,i)})},Nk={exports:{}},sF="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",oF=sF,aF=oF;function Ak(){}function Pk(){}Pk.resetWarningCache=Ak;var lF=function(){function t(r,i,s,o,a,l){if(l!==aF){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Pk,resetWarningCache:Ak};return n.PropTypes=n,n};Nk.exports=lF();var uF=Nk.exports;const Le=aC(uF);function S1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function C1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?S1(Object(n),!0).forEach(function(r){Ok(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mc(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Mc=function(e){return typeof e}:Mc=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mc(t)}function Ok(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $c(t,e){return cF(t)||hF(t,e)||dF(t,e)||fF()}function cF(t){if(Array.isArray(t))return t}function hF(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function dF(t,e){if(t){if(typeof t=="string")return T1(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T1(t,e)}}function T1(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dg=function(e){var n=ue.useRef(e);return ue.useEffect(function(){n.current=e},[e]),n.current},So=function(e){return e!==null&&Mc(e)==="object"},pF=function(e){return So(e)&&typeof e.then=="function"},mF=function(e){return So(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},I1="[object Object]",gF=function t(e,n){if(!So(e)||!So(n))return e===n;var r=Array.isArray(e),i=Array.isArray(n);if(r!==i)return!1;var s=Object.prototype.toString.call(e)===I1,o=Object.prototype.toString.call(n)===I1;if(s!==o)return!1;if(!s&&!r)return e===n;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(var u={},c=0;c<a.length;c+=1)u[a[c]]=!0;for(var h=0;h<l.length;h+=1)u[l[h]]=!0;var d=Object.keys(u);if(d.length!==a.length)return!1;var f=e,p=n,m=function(y){return t(f[y],p[y])};return d.every(m)},Dk=function(e,n,r){return So(e)?Object.keys(e).reduce(function(i,s){var o=!So(n)||!gF(e[s],n[s]);return r.includes(s)?(o&&console.warn("Unsupported prop change: options.".concat(s," is not a mutable property.")),i):o?C1(C1({},i||{}),{},Ok({},s,e[s])):i},null):null},yF="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",k1=function(e){if(e===null||mF(e))return e;throw new Error(yF)},vF=function(e){if(pF(e))return{tag:"async",stripePromise:Promise.resolve(e).then(k1)};var n=k1(e);return n===null?{tag:"empty"}:{tag:"sync",stripe:n}},xv=ue.createContext(null);xv.displayName="ElementsContext";var _F=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},Rv=ue.createContext(null);Rv.displayName="CartElementContext";var wF=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},Lk=function(e){var n=e.stripe,r=e.options,i=e.children,s=ue.useMemo(function(){return vF(n)},[n]),o=ue.useState(null),a=$c(o,2),l=a[0],u=a[1],c=ue.useState(null),h=$c(c,2),d=h[0],f=h[1],p=ue.useState(function(){return{stripe:s.tag==="sync"?s.stripe:null,elements:s.tag==="sync"?s.stripe.elements(r):null}}),m=$c(p,2),w=m[0],y=m[1];ue.useEffect(function(){var E=!0,T=function(k){y(function(O){return O.stripe?O:{stripe:k,elements:k.elements(r)}})};return s.tag==="async"&&!w.stripe?s.stripePromise.then(function(x){x&&E&&T(x)}):s.tag==="sync"&&!w.stripe&&T(s.stripe),function(){E=!1}},[s,w,r]);var g=dg(n);ue.useEffect(function(){g!==null&&g!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[g,n]);var v=dg(r);return ue.useEffect(function(){if(w.elements){var E=Dk(r,v,["clientSecret","fonts"]);E&&w.elements.update(E)}},[r,v,w.elements]),ue.useEffect(function(){var E=w.stripe;!E||!E._registerWrapper||!E.registerAppInfo||(E._registerWrapper({name:"react-stripe-js",version:"2.1.0"}),E.registerAppInfo({name:"react-stripe-js",version:"2.1.0",url:"https://stripe.com/docs/stripe-js/react"}))},[w.stripe]),ue.createElement(xv.Provider,{value:w},ue.createElement(Rv.Provider,{value:{cart:l,setCart:u,cartState:d,setCartState:f}},i))};Lk.propTypes={stripe:Le.any,options:Le.object};var Dh=function(e){var n=ue.useContext(xv);return _F(n,e)},x1=function(e){var n=ue.useContext(Rv);return wF(n,e)},EF=function(){var e=Dh("calls useElements()"),n=e.elements;return n},SF=function(){var e=Dh("calls useStripe()"),n=e.stripe;return n};Le.func.isRequired;var Nt=function(e,n,r){var i=!!r,s=ue.useRef(r);ue.useEffect(function(){s.current=r},[r]),ue.useEffect(function(){if(!i||!e)return function(){};var o=function(){s.current&&s.current.apply(s,arguments)};return e.on(n,o),function(){e.off(n,o)}},[i,n,e,s])},CF=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},qe=function(e,n){var r="".concat(CF(e),"Element"),i=function(l){var u=l.id,c=l.className,h=l.options,d=h===void 0?{}:h,f=l.onBlur,p=l.onFocus,m=l.onReady,w=l.onChange,y=l.onEscape,g=l.onClick,v=l.onLoadError,E=l.onLoaderStart,T=l.onNetworksChange,x=l.onCheckout,k=l.onLineItemClick,O=l.onConfirm,K=l.onCancel,M=l.onShippingAddressChange,Re=l.onShippingRateChange,Pn=Dh("mounts <".concat(r,">")),rn=Pn.elements,_s=ue.useState(null),Lr=$c(_s,2),$e=Lr[0],oa=Lr[1],A=ue.useRef(null),V=ue.useRef(null),q=x1("mounts <".concat(r,">")),me=q.setCart,be=q.setCartState;Nt($e,"blur",f),Nt($e,"focus",p),Nt($e,"escape",y),Nt($e,"click",g),Nt($e,"loaderror",v),Nt($e,"loaderstart",E),Nt($e,"networkschange",T),Nt($e,"lineitemclick",k),Nt($e,"confirm",O),Nt($e,"cancel",K),Nt($e,"shippingaddresschange",M),Nt($e,"shippingratechange",Re);var er;e==="cart"?er=function(O0){be(O0),m&&m(O0)}:m&&(e==="expressCheckout"?er=m:er=function(){m($e)}),Nt($e,"ready",er);var tr=e==="cart"?function(Fe){be(Fe),w&&w(Fe)}:w;Nt($e,"change",tr);var aa=e==="cart"?function(Fe){be(Fe),x&&x(Fe)}:x;Nt($e,"checkout",aa),ue.useLayoutEffect(function(){if(A.current===null&&rn&&V.current!==null){var Fe=rn.create(e,d);e==="cart"&&me&&me(Fe),A.current=Fe,oa(Fe),Fe.mount(V.current)}},[rn,d,me]);var On=dg(d);return ue.useEffect(function(){if(A.current){var Fe=Dk(d,On,["paymentRequest"]);Fe&&A.current.update(Fe)}},[d,On]),ue.useLayoutEffect(function(){return function(){A.current&&(A.current.destroy(),A.current=null)}},[]),ue.createElement("div",{id:u,className:c,ref:V})},s=function(l){Dh("mounts <".concat(r,">")),x1("mounts <".concat(r,">"));var u=l.id,c=l.className;return ue.createElement("div",{id:u,className:c})},o=n?s:i;return o.propTypes={id:Le.string,className:Le.string,onChange:Le.func,onBlur:Le.func,onFocus:Le.func,onReady:Le.func,onEscape:Le.func,onClick:Le.func,onLoadError:Le.func,onLoaderStart:Le.func,onNetworksChange:Le.func,onCheckout:Le.func,onLineItemClick:Le.func,onConfirm:Le.func,onCancel:Le.func,onShippingAddressChange:Le.func,onShippingRateChange:Le.func,options:Le.object},o.displayName=r,o.__elementType=e,o},Ke=typeof window>"u";qe("auBankAccount",Ke);var R1=qe("card",Ke);qe("cardNumber",Ke);qe("cardExpiry",Ke);qe("cardCvc",Ke);qe("fpxBank",Ke);qe("iban",Ke);qe("idealBank",Ke);qe("p24Bank",Ke);qe("epsBank",Ke);qe("payment",Ke);qe("expressCheckout",Ke);qe("paymentRequestButton",Ke);qe("linkAuthentication",Ke);qe("address",Ke);qe("shippingAddress",Ke);qe("cart",Ke);qe("paymentMethodMessaging",Ke);qe("affirmMessage",Ke);qe("afterpayClearpayMessage",Ke);const b1="@firebase/database",N1="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mk="";function TF(t){Mk=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:El(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IF(e)}}catch{}return new kF},Mi=$k("localStorage"),fg=$k("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new iu("@firebase/database"),xF=function(){let t=1;return function(){return t++}}(),Fk=function(t){const e=LD(t),n=new AD;n.update(e);const r=n.digest();return dv.encodeByteArray(r)},cu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=cu.apply(null,r):typeof r=="object"?e+=rt(r):e+=r,e+=" "}return e};let Wi=null,A1=!0;const RF=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(io.logLevel=te.VERBOSE,Wi=io.log.bind(io),e&&fg.set("logging_enabled",!0)):typeof t=="function"?Wi=t:(Wi=null,fg.remove("logging_enabled"))},Et=function(...t){if(A1===!0&&(A1=!1,Wi===null&&fg.get("logging_enabled")===!0&&RF(!0)),Wi){const e=cu.apply(null,t);Wi(e)}},hu=function(t){return function(...e){Et(t,...e)}},pg=function(...t){const e="FIREBASE INTERNAL ERROR: "+cu(...t);io.error(e)},es=function(...t){const e=`FIREBASE FATAL ERROR: ${cu(...t)}`;throw io.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+cu(...t);io.warn(e)},bF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uk=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},NF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Co="[MIN_NAME]",ts="[MAX_NAME]",Qo=function(t,e){if(t===e)return 0;if(t===Co||e===ts)return-1;if(e===Co||t===ts)return 1;{const n=P1(t),r=P1(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},AF=function(t,e){return t===e?0:t<e?-1:1},ga=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},bv=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=rt(e[r]),n+=":",n+=bv(t[e[r]]);return n+="}",n},jk=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bk=function(t){N(!Uk(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},PF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const LF=new RegExp("^-?(0*)\\d{1,10}$"),MF=-2147483648,$F=2147483647,P1=function(t){if(LF.test(t)){const e=Number(t);if(e>=MF&&e<=$F)return e}return null},du=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},FF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}class mg{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mg.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="5",Vk="v",zk="s",Wk="r",Hk="f",qk=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Kk="ls",Gk="p",gg="ac",Qk="websocket",Yk="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function VF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xk(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===Qk)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Yk)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VF(t)&&(n.ns=t.namespace);const i=[];return Wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(){this.counters_={}}incrementCounter(e,n=1){Nr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mD(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={},Tp={};function Av(t){const e=t.toString();return Cp[e]||(Cp[e]=new zF),Cp[e]}function WF(t,e){const n=t.toString();return Tp[n]||(Tp[n]=e()),Tp[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&du(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="start",qF="close",KF="pLPCommand",GF="pRTLPCB",Jk="id",Zk="pw",ex="ser",QF="cb",YF="seg",XF="ts",JF="d",ZF="dframe",tx=1870,nx=30,e4=tx-nx,t4=25e3,n4=3e4;class Ks{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hu(e),this.stats_=Av(n),this.urlFn=l=>(this.appCheckToken&&(l[gg]=this.appCheckToken),Xk(n,Yk,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(n4)),NF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pv((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===O1)this.id=a,this.password=l;else if(o===qF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[O1]="t",r[ex]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[QF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Vk]=Nv,this.transportSessionId&&(r[zk]=this.transportSessionId),this.lastSessionId&&(r[Kk]=this.lastSessionId),this.applicationId&&(r[Gk]=this.applicationId),this.appCheckToken&&(r[gg]=this.appCheckToken),typeof location<"u"&&location.hostname&&qk.test(location.hostname)&&(r[Wk]=Hk);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ks.forceAllow_=!0}static forceDisallow(){Ks.forceDisallow_=!0}static isAvailable(){return Ks.forceAllow_?!0:!Ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PF()&&!OF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OI(n),i=jk(r,e4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[ZF]="t",r[Jk]=e,r[Zk]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pv{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xF(),window[KF+this.uniqueCallbackIdentifier]=e,window[GF+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pv.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jk]=this.myID,e[Zk]=this.myPW,e[ex]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nx+r.length<=tx;){const o=this.pendingSegs.shift();r=r+"&"+YF+i+"="+o.seg+"&"+XF+i+"="+o.ts+"&"+JF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(t4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=16384,i4=45e3;let Lh=null;typeof MozWebSocket<"u"?Lh=MozWebSocket:typeof WebSocket<"u"&&(Lh=WebSocket);class wn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hu(this.connId),this.stats_=Av(n),this.connURL=wn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Vk]=Nv,typeof location<"u"&&location.hostname&&qk.test(location.hostname)&&(o[Wk]=Hk),n&&(o[zk]=n),r&&(o[Kk]=r),i&&(o[gg]=i),s&&(o[Gk]=s),Xk(e,Qk,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mi.set("previous_websocket_failure",!0);try{let r;UI(),this.mySock=new Lh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Lh!==null&&!wn.forceDisallow_}static previouslyFailed(){return Mi.isInMemoryStorage||Mi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=El(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jk(n,r4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(i4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wn.responsesRequiredToBeHealthy=2;wn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ks,wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wn&&wn.isAvailable();let r=n&&!wn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wn];else{const i=this.transports_=[];for(const s of xl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=6e4,o4=5e3,a4=10*1024,l4=100*1024,Ip="t",D1="d",u4="s",L1="r",c4="e",M1="o",$1="a",F1="n",U1="p",h4="h";class d4{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hu("c:"+this.id+":"),this.transportManager_=new xl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>l4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>a4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ip in e){const n=e[Ip];n===$1?this.upgradeIfSecondaryHealthy_():n===L1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===M1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ga("t",e),r=ga("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:U1,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:F1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ga("t",e),r=ga("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ga(Ip,e);if(D1 in e){const r=e[D1];if(n===h4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===F1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===u4?this.onConnectionShutdown_(r):n===L1?this.onReset_(r):n===c4?pg("Server Error: "+r):n===M1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pg("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nv!==r&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(s4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(o4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:U1,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends ix{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mh}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=32,B1=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new de("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pi(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function sx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function f4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ox(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ax(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function Ut(t,e){const n=Q(t),r=Q(e);if(n===null)return e;if(n===r)return Ut(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ov(t,e){if(pi(t)!==pi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function En(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pi(t)>pi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class p4{constructor(e,n){this.errorPrefix_=n,this.parts_=ox(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=$d(this.parts_[r]);lx(this)}}function m4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$d(e),lx(t)}function g4(t){const e=t.parts_.pop();t.byteLength_-=$d(e),t.parts_.length>0&&(t.byteLength_-=1)}function lx(t){if(t.byteLength_>B1)throw new Error(t.errorPrefix_+"has a key path longer than "+B1+" bytes ("+t.byteLength_+").");if(t.parts_.length>j1)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+j1+") or object contains a cycle "+bi(t))}function bi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv extends ix{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Dv}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=1e3,y4=60*5*1e3,V1=30*1e3,v4=1.3,_4=3e4,w4="server_kill",z1=3;class fr extends rx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=fr.nextPersistentConnectionId_++,this.log_=hu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ya,this.maxReconnectDelay_=y4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!UI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(rt(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new pv,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;fr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nr(e,"w")){const r=Eo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ND(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=V1)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pg("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ya,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ya,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_4&&(this.reconnectDelay_=ya),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*v4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+fr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new d4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Yt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(w4)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Yt(h),l())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ig(this.interruptReasons_)&&(this.reconnectDelay_=ya,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>bv(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=z1&&(this.reconnectDelay_=V1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=z1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mk.replace(/\./g,"-")]=1,mv()?e["framework.cordova"]=1:FI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mh.getInstance().currentlyOnline();return ig(this.interruptReasons_)&&e}}fr.nextPersistentConnectionId_=0;fr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new G(Co,e),i=new G(Co,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;class ux extends Vd{static get __EMPTY_NODE(){return ic}static set __EMPTY_NODE(e){ic=e}compare(e,n){return Qo(e.name,n.name)}isDefinedOn(e){throw zo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(ts,ic)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,ic)}toString(){return".key"}}const so=new ux;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??nt.RED,this.left=i??jt.EMPTY_NODE,this.right=s??jt.EMPTY_NODE}copy(e,n,r,i,s){return new nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return jt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class E4{copy(e,n,r,i,s){return this}insert(e,n,r){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class jt{constructor(e,n=jt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new jt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sc(this.root_,null,this.comparator_,!0,e)}}jt.EMPTY_NODE=new E4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(t,e){return Qo(t.name,e.name)}function Lv(t,e){return Qo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yg;function C4(t){yg=t}const cx=function(t){return typeof t=="number"?"number:"+Bk(t):"string:"+t},hx=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nr(e,".sv"),"Priority must be a string or number.")}else N(t===yg||t.isEmpty(),"priority of unexpected type.");N(t===yg||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W1;class Ze{constructor(e,n=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hx(this.priorityNode_)}static set __childrenNodeConstructor(e){W1=e}static get __childrenNodeConstructor(){return W1}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Q(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||pi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bk(this.value_):e+=this.value_,this.lazyHash_=Fk(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ze.VALUE_TYPE_ORDER.indexOf(n),s=Ze.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dx,fx;function T4(t){dx=t}function I4(t){fx=t}class k4 extends Vd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Qo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(ts,new Ze("[PRIORITY-POST]",fx))}makePost(e,n){const r=dx(e);return new G(n,new Ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const Oe=new k4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=Math.log(2);class R4{constructor(e){const n=s=>parseInt(Math.log(s)/x4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $h=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new nt(d,h.node,nt.BLACK,null,null);{const f=parseInt(c/2,10)+l,p=i(l,f),m=i(f+1,u);return h=t[f],d=n?n(h):h,new nt(d,h.node,nt.BLACK,p,m)}},s=function(l){let u=null,c=null,h=t.length;const d=function(p,m){const w=h-p,y=h;h-=p;const g=i(w+1,y),v=t[w],E=n?n(v):v;f(new nt(E,v.node,m,null,g))},f=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),w=Math.pow(2,l.count-(p+1));m?d(w,nt.BLACK):(d(w,nt.BLACK),d(w,nt.RED))}return c},o=new R4(t.length),a=s(o);return new jt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kp;const Es={};class ur{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Es&&Oe,"ChildrenNode.ts has not been loaded"),kp=kp||new ur({".priority":Es},{".priority":Oe}),kp}get(e){const n=Eo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof jt?n:null}hasIndex(e){return Nr(this.indexSet_,e.toString())}addIndex(e,n){N(e!==so,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=$h(r,e.getCompare()):a=Es;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new ur(c,u)}addToIndexes(e,n){const r=kh(this.indexes_,(i,s)=>{const o=Eo(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===Es)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),$h(a,o.getCompare())}else return Es;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new ur(r,this.indexSet_)}removeFromIndexes(e,n){const r=kh(this.indexes_,i=>{if(i===Es)return i;{const s=n.get(e.name);return s?i.remove(new G(e.name,s)):i}});return new ur(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;class U{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&hx(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return va||(va=new U(new jt(Lv),null,ur.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||va}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?va:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new G(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?va:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=Q(e);if(r===null)return n;{N(Q(e)!==".priority"||pi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(fe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cx(this.getPriority().val())+":"),this.forEachChild(Oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fk(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fu?-1:0}withIndex(e){if(e===so||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===so||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Oe),i=n.getIterator(Oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===so?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class b4 extends U{constructor(){super(new jt(Lv),U.EMPTY_NODE,ur.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const fu=new b4;Object.defineProperties(G,{MIN:{value:new G(Co,U.EMPTY_NODE)},MAX:{value:new G(ts,fu)}});ux.__EMPTY_NODE=U.EMPTY_NODE;Ze.__childrenNodeConstructor=U;C4(fu);I4(fu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=!0;function St(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ze(n,St(e))}if(!(t instanceof Array)&&N4){const n=[];let r=!1;if(Wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=St(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=$h(n,S4,o=>o.name,Lv);if(r){const o=$h(n,Oe.getCompare());return new U(s,St(e),new ur({".priority":o},{".priority":Oe}))}else return new U(s,St(e),ur.Default)}else{let n=U.EMPTY_NODE;return Wt(t,(r,i)=>{if(Nr(t,r)&&r.substring(0,1)!=="."){const s=St(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(St(e))}}T4(St);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4 extends Vd{constructor(e){super(),this.indexPath_=e,N(!Y(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Qo(e.name,n.name):s}makePost(e,n){const r=St(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,fu);return new G(ts,e)}toString(){return ox(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4 extends Vd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Qo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const r=St(e);return new G(n,r)}toString(){return".value"}}const O4=new P4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t){return{type:"value",snapshotNode:t}}function To(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function D4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Rl(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(To(n,r)):o.trackChildChange(bl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Rl(i,s))}),n.isLeafNode()||n.forEachChild(Oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(bl(i,s,o))}else r.trackChildChange(To(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.indexedFilter_=new Mv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nl.getStartPost_(e),this.endPost_=Nl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new G(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(Oe,(o,a)=>{s.matches(new G(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Nl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new G(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new G(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(bl(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Rl(n,h));const m=a.updateImmediateChild(n,U.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(To(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Rl(u.name,u.node)),s.trackChildChange(To(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Co}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new $v;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function M4(t){return t.loadsAllData()?new Mv(t.getIndex()):t.hasLimit()?new L4(t):new Nl(t)}function H1(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===O4?n="$value":t.index_===so?n="$key":(N(t.index_ instanceof A4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function q1(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends rx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=hu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fh.getListenId_(e,r),a={};this.listens_[o]=a;const l=H1(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),Eo(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Fh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=H1(e._queryParams),r=e._path.toString(),i=new pv;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=El(a.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return{value:null,children:new Map}}function mx(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Q(e);t.children.has(r)||t.children.set(r,Uh());const i=t.children.get(r);e=fe(e),mx(i,e,n)}}function vg(t,e,n){t.value!==null?n(e,t.value):F4(t,(r,i)=>{const s=new de(e.toString()+"/"+r);vg(i,s,n)})}function F4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=10*1e3,j4=30*1e3,B4=5*60*1e3;class V4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new U4(e);const r=K1+(j4-K1)*Math.random();qa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Wt(e,(i,s)=>{s>0&&Nr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),qa(this.reportStats_.bind(this),Math.floor(Math.random()*2*B4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Sn||(Sn={}));function gx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Uv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Sn.ACK_USER_WRITE,this.source=gx()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new jh(ae(),n,this.revert)}}else return N(Q(this.path)===e,"operationForChild called for unrelated child."),new jh(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.source=e,this.path=n,this.type=Sn.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Al(this.source,ae()):new Al(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Sn.OVERWRITE}operationForChild(e){return Y(this.path)?new ns(this.source,ae(),this.snap.getImmediateChild(e)):new ns(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Sn.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new ns(this.source,ae(),n.value):new Pl(this.source,ae(),n)}else return N(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pl(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function W4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(D4(o.childName,o.snapshotNode))}),_a(t,i,"child_removed",e,r,n),_a(t,i,"child_added",e,r,n),_a(t,i,"child_moved",s,r,n),_a(t,i,"child_changed",e,r,n),_a(t,i,"value",e,r,n),i}function _a(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>q4(t,a,l)),o.forEach(a=>{const l=H4(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function H4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function q4(t,e,n){if(e.childName==null||n.childName==null)throw zo("Should only compare child_ events.");const r=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e){return{eventCache:t,serverCache:e}}function Ka(t,e,n,r){return zd(new rs(e,n,r),t.serverCache)}function yx(t,e,n,r){return zd(t.eventCache,new rs(e,n,r))}function _g(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function is(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xp;const K4=()=>(xp||(xp=new jt(AF)),xp);class ye{constructor(e,n=K4()){this.value=e,this.children=n}static fromObject(e){let n=new ye(null);return Wt(e,(r,i)=>{n=n.set(new de(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(Y(e))return null;{const r=Q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(fe(e),n);return s!=null?{path:Qe(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=Q(e),r=this.children.get(n);return r!==null?r.subtree(fe(e)):new ye(null)}}set(e,n){if(Y(e))return new ye(n,this.children);{const r=Q(e),s=(this.children.get(r)||new ye(null)).set(fe(e),n),o=this.children.insert(r,s);return new ye(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=Q(e),r=this.children.get(n);if(r){const i=r.remove(fe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ye(null):new ye(this.value,s)}else return this}}get(e){if(Y(e))return this.value;{const n=Q(e),r=this.children.get(n);return r?r.get(fe(e)):null}}setTree(e,n){if(Y(e))return n;{const r=Q(e),s=(this.children.get(r)||new ye(null)).setTree(fe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ye(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Qe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(fe(e),Qe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,r){if(Y(e))return this;{this.value&&r(n,this.value);const i=Q(e),s=this.children.get(i);return s?s.foreachOnPath_(fe(e),Qe(n,i),r):new ye(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new ye(null))}}function Ga(t,e,n){if(Y(e))return new xn(new ye(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ut(i,e);return s=s.updateChild(o,n),new xn(t.writeTree_.set(i,s))}else{const i=new ye(n),s=t.writeTree_.setTree(e,i);return new xn(s)}}}function G1(t,e,n){let r=t;return Wt(n,(i,s)=>{r=Ga(r,Qe(e,i),s)}),r}function Q1(t,e){if(Y(e))return xn.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new xn(n)}}function wg(t,e){return ps(t,e)!=null}function ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ut(n.path,e)):null}function Y1(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(r,i)=>{e.push(new G(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new G(r,i.value))}),e}function li(t,e){if(Y(e))return t;{const n=ps(t,e);return n!=null?new xn(new ye(n)):new xn(t.writeTree_.subtree(e))}}function Eg(t){return t.writeTree_.isEmpty()}function Io(t,e){return vx(ae(),t.writeTree_,e)}function vx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vx(Qe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Qe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e){return Sx(e,t)}function G4(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ga(t.visibleWrites,e,n)),t.lastWriteId=r}function Q4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Y4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&X4(a,r.path)?i=!1:En(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return J4(t),!0;if(r.snap)t.visibleWrites=Q1(t.visibleWrites,r.path);else{const a=r.children;Wt(a,l=>{t.visibleWrites=Q1(t.visibleWrites,Qe(r.path,l))})}return!0}else return!1}function X4(t,e){if(t.snap)return En(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&En(Qe(t.path,n),e))return!0;return!1}function J4(t){t.visibleWrites=_x(t.allWrites,Z4,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Z4(t){return t.visible}function _x(t,e,n){let r=xn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)En(n,o)?(a=Ut(n,o),r=Ga(r,a,s.snap)):En(o,n)&&(a=Ut(o,n),r=Ga(r,ae(),s.snap.getChild(a)));else if(s.children){if(En(n,o))a=Ut(n,o),r=G1(r,a,s.children);else if(En(o,n))if(a=Ut(o,n),Y(a))r=G1(r,ae(),s.children);else{const l=Eo(s.children,Q(a));if(l){const u=l.getChild(fe(a));r=Ga(r,ae(),u)}}}else throw zo("WriteRecord should have .snap or .children")}}return r}function wx(t,e,n,r,i){if(!r&&!i){const s=ps(t.visibleWrites,e);if(s!=null)return s;{const o=li(t.visibleWrites,e);if(Eg(o))return n;if(n==null&&!wg(o,ae()))return null;{const a=n||U.EMPTY_NODE;return Io(o,a)}}}else{const s=li(t.visibleWrites,e);if(!i&&Eg(s))return n;if(!i&&n==null&&!wg(s,ae()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(En(u.path,e)||En(e,u.path))},a=_x(t.allWrites,o,e),l=n||U.EMPTY_NODE;return Io(a,l)}}}function eU(t,e,n){let r=U.EMPTY_NODE;const i=ps(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=li(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const l=Io(li(s,new de(o)),a);r=r.updateImmediateChild(o,l)}),Y1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=li(t.visibleWrites,e);return Y1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tU(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Qe(e,n);if(wg(t.visibleWrites,s))return null;{const o=li(t.visibleWrites,s);return Eg(o)?i.getChild(n):Io(o,i.getChild(n))}}function nU(t,e,n,r){const i=Qe(e,n),s=ps(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=li(t.visibleWrites,i);return Io(o,r.getNode().getImmediateChild(n))}else return null}function rU(t,e){return ps(t.visibleWrites,e)}function iU(t,e,n,r,i,s,o){let a;const l=li(t.visibleWrites,e),u=ps(l,ae());if(u!=null)a=u;else if(n!=null)a=Io(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function sU(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function Bh(t,e,n,r){return wx(t.writeTree,t.treePath,e,n,r)}function Bv(t,e){return eU(t.writeTree,t.treePath,e)}function X1(t,e,n,r){return tU(t.writeTree,t.treePath,e,n,r)}function Vh(t,e){return rU(t.writeTree,Qe(t.treePath,e))}function oU(t,e,n,r,i,s){return iU(t.writeTree,t.treePath,e,n,r,i,s)}function Vv(t,e,n){return nU(t.writeTree,t.treePath,e,n)}function Ex(t,e){return Sx(Qe(t.treePath,e),t.writeTree)}function Sx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,bl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Rl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,To(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,bl(r,e.snapshotNode,i.oldSnap));else throw zo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Cx=new lU;class zv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new rs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:is(this.viewCache_),s=oU(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uU(t){return{filter:t}}function cU(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hU(t,e,n,r,i){const s=new aU;let o,a;if(n.type===Sn.OVERWRITE){const u=n;u.source.fromUser?o=Sg(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Y(u.path),o=zh(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Sn.MERGE){const u=n;u.source.fromUser?o=fU(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Cg(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Sn.ACK_USER_WRITE){const u=n;u.revert?o=gU(t,e,u.path,r,i,s):o=pU(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Sn.LISTEN_COMPLETE)o=mU(t,e,n.path,r,s);else throw zo("Unknown operation type: "+n.type);const l=s.getChanges();return dU(e,o,l),{viewCache:o,changes:l}}function dU(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=_g(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(px(_g(e)))}}function Tx(t,e,n,r,i,s){const o=e.eventCache;if(Vh(r,n)!=null)return e;{let a,l;if(Y(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=is(e),c=u instanceof U?u:U.EMPTY_NODE,h=Bv(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Bh(r,is(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Q(n);if(u===".priority"){N(pi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=X1(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=fe(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=X1(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Vv(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Ka(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function zh(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(Y(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=Q(n);if(!l.isCompleteForPath(n)&&pi(n)>1)return e;const p=fe(n),w=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),f,w,p,Cx,null)}const h=yx(e,u,l.isFullyInitialized()||Y(n),c.filtersNodes()),d=new zv(i,h,s);return Tx(t,h,n,i,d,a)}function Sg(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new zv(i,e,s);if(Y(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ka(e,u,!0,t.filter.filtersNodes());else{const h=Q(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ka(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=fe(n),f=a.getNode().getImmediateChild(h);let p;if(Y(d))p=r;else{const m=c.getCompleteChild(h);m!=null?sx(d)===".priority"&&m.getChild(ax(d)).isEmpty()?p=m:p=m.updateChild(d,r):p=U.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,d,c,o);l=Ka(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function J1(t,e){return t.eventCache.isCompleteForChild(e)}function fU(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Qe(n,l);J1(e,Q(c))&&(a=Sg(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Qe(n,l);J1(e,Q(c))||(a=Sg(t,a,c,u,i,s,o))}),a}function Z1(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Cg(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Y(n)?u=r:u=new ye(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Z1(t,f,d);l=zh(t,l,new de(h),p,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=Z1(t,p,d);l=zh(t,l,new de(h),m,i,s,o,a)}}),l}function pU(t,e,n,r,i,s,o){if(Vh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return zh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Y(n)){let u=new ye(null);return l.getNode().forEachChild(so,(c,h)=>{u=u.set(new de(c),h)}),Cg(t,e,n,u,i,s,a,o)}else return e}else{let u=new ye(null);return r.foreach((c,h)=>{const d=Qe(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Cg(t,e,n,u,i,s,a,o)}}function mU(t,e,n,r,i){const s=e.serverCache,o=yx(e,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return Tx(t,o,n,r,Cx,i)}function gU(t,e,n,r,i,s){let o;if(Vh(r,n)!=null)return e;{const a=new zv(r,e,i),l=e.eventCache.getNode();let u;if(Y(n)||Q(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Bh(r,is(e));else{const h=e.serverCache.getNode();N(h instanceof U,"serverChildren would be complete if leaf node"),c=Bv(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=Q(n);let h=Vv(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,fe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,U.EMPTY_NODE,fe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bh(r,is(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Vh(r,ae())!=null,Ka(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yU{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Mv(r.getIndex()),s=M4(r);this.processor_=uU(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),c=new rs(l,o.isFullyInitialized(),i.filtersNodes()),h=new rs(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zd(h,c),this.eventGenerator_=new z4(this.query_)}get query(){return this.query_}}function vU(t){return t.viewCache_.serverCache.getNode()}function _U(t,e){const n=is(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function eE(t){return t.eventRegistrations_.length===0}function wU(t,e){t.eventRegistrations_.push(e)}function tE(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function nE(t,e,n,r){e.type===Sn.MERGE&&e.source.queryId!==null&&(N(is(t.viewCache_),"We should always have a full cache before handling merges"),N(_g(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=hU(t.processor_,i,e,n,r);return cU(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ix(t,s.changes,s.viewCache.eventCache.getNode(),null)}function EU(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(s,o)=>{r.push(To(s,o))}),n.isFullyInitialized()&&r.push(px(n.getNode())),Ix(t,r,n.getNode(),e)}function Ix(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return W4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh;class SU{constructor(){this.views=new Map}}function CU(t){N(!Wh,"__referenceConstructor has already been defined"),Wh=t}function TU(){return N(Wh,"Reference.ts has not been loaded"),Wh}function IU(t){return t.views.size===0}function Wv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),nE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(nE(o,e,n,r));return s}}function kU(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Bh(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=Bv(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const u=zd(new rs(a,l,!1),new rs(r,i,!1));return new yU(e,u)}return o}function xU(t,e,n,r,i,s){const o=kU(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wU(o,n),EU(o,n)}function RU(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=mi(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(tE(u,n,r)),eE(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(tE(l,n,r)),eE(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!mi(t)&&s.push(new(TU())(e._repo,e._path)),{removed:s,events:o}}function kx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function oo(t,e){let n=null;for(const r of t.views.values())n=n||_U(r,e);return n}function xx(t,e){if(e._queryParams.loadsAllData())return Wd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Rx(t,e){return xx(t,e)!=null}function mi(t){return Wd(t)!=null}function Wd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;function bU(t){N(!Hh,"__referenceConstructor has already been defined"),Hh=t}function NU(){return N(Hh,"Reference.ts has not been loaded"),Hh}let AU=1;class rE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=sU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function PU(t,e,n,r,i){return G4(t.pendingWriteTree_,e,n,r,i),i?pu(t,new ns(gx(),e,n)):[]}function Gs(t,e,n=!1){const r=Q4(t.pendingWriteTree_,e);if(Y4(t.pendingWriteTree_,e)){let s=new ye(null);return r.snap!=null?s=s.set(ae(),!0):Wt(r.children,o=>{s=s.set(new de(o),!0)}),pu(t,new jh(r.path,s,n))}else return[]}function Hd(t,e,n){return pu(t,new ns(Fv(),e,n))}function OU(t,e,n){const r=ye.fromObject(n);return pu(t,new Pl(Fv(),e,r))}function DU(t,e){return pu(t,new Al(Fv(),e))}function LU(t,e,n){const r=Hv(t,n);if(r){const i=qv(r),s=i.path,o=i.queryId,a=Ut(s,e),l=new Al(Uv(o),a);return Kv(t,s,l)}else return[]}function Tg(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Rx(o,e))){const l=RU(o,e,n,r);IU(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>mi(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=FU(d);for(let p=0;p<f.length;++p){const m=f[p],w=m.query,y=Px(t,m);t.listenProvider_.startListening(Qa(w),qh(t,w),y.hashFn,y.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Qa(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(qd(d));t.listenProvider_.stopListening(Qa(d),f)}))}UU(t,u)}return a}function MU(t,e,n,r){const i=Hv(t,r);if(i!=null){const s=qv(i),o=s.path,a=s.queryId,l=Ut(o,e),u=new ns(Uv(a),l,n);return Kv(t,o,u)}else return[]}function $U(t,e,n,r){const i=Hv(t,r);if(i){const s=qv(i),o=s.path,a=s.queryId,l=Ut(o,e),u=ye.fromObject(n),c=new Pl(Uv(a),l,u);return Kv(t,o,c)}else return[]}function iE(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=Ut(d,i);s=s||oo(f,p),o=o||mi(f)});let a=t.syncPointTree_.get(i);a?(o=o||mi(a),s=s||oo(a,ae())):(a=new SU,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const m=oo(p,ae());m&&(s=s.updateImmediateChild(f,m))}));const u=Rx(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=qd(e);N(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=jU();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=jv(t.pendingWriteTree_,i);let h=xU(a,e,n,c,s,l);if(!u&&!o&&!r){const d=xx(a,e);h=h.concat(BU(t,e,d))}return h}function bx(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ut(o,e),u=oo(a,l);if(u)return u});return wx(i,e,s,n,!0)}function pu(t,e){return Nx(e,t.syncPointTree_,null,jv(t.pendingWriteTree_,ae()))}function Nx(t,e,n,r){if(Y(t.path))return Ax(t,e,n,r);{const i=e.get(ae());n==null&&i!=null&&(n=oo(i,ae()));let s=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Ex(r,o);s=s.concat(Nx(a,l,u,c))}return i&&(s=s.concat(Wv(i,t,r,n))),s}}function Ax(t,e,n,r){const i=e.get(ae());n==null&&i!=null&&(n=oo(i,ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Ex(r,o),c=t.operationForChild(o);c&&(s=s.concat(Ax(c,a,l,u)))}),i&&(s=s.concat(Wv(i,t,r,n))),s}function Px(t,e){const n=e.query,r=qh(t,n);return{hashFn:()=>(vU(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?LU(t,n._path,r):DU(t,n._path);{const s=DF(i,n);return Tg(t,n,null,s)}}}}function qh(t,e){const n=qd(e);return t.queryToTagMap.get(n)}function qd(t){return t._path.toString()+"$"+t._queryIdentifier}function Hv(t,e){return t.tagToQueryMap.get(e)}function qv(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function Kv(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=jv(t.pendingWriteTree_,e);return Wv(r,n,i,null)}function FU(t){return t.fold((e,n,r)=>{if(n&&mi(n))return[Wd(n)];{let i=[];return n&&(i=kx(n)),Wt(r,(s,o)=>{i=i.concat(o)}),i}})}function Qa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(NU())(t._repo,t._path):t}function UU(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=qd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function jU(){return AU++}function BU(t,e,n){const r=e._path,i=qh(t,e),s=Px(t,n),o=t.listenProvider_.startListening(Qa(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!mi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!Y(u)&&c&&mi(c))return[Wd(c).query];{let d=[];return c&&(d=d.concat(kx(c).map(f=>f.query))),Wt(h,(f,p)=>{d=d.concat(p)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Qa(c),qh(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gv(n)}node(){return this.node_}}class Qv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new Qv(this.syncTree_,n)}node(){return bx(this.syncTree_,this.path_)}}const VU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sE=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return zU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WU(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},zU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},WU=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},HU=function(t,e,n,r){return Yv(e,new Qv(n,t),r)},qU=function(t,e,n){return Yv(t,new Gv(e),n)};function Yv(t,e,n){const r=t.getPriority().val(),i=sE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=sE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ze(a,St(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ze(i))),o.forEachChild(Oe,(a,l)=>{const u=Yv(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Jv(t,e){let n=e instanceof de?e:new de(e),r=t,i=Q(n);for(;i!==null;){const s=Eo(r.node.children,i)||{children:{},childCount:0};r=new Xv(i,r,s),n=fe(n),i=Q(n)}return r}function Yo(t){return t.node.value}function Ox(t,e){t.node.value=e,Ig(t)}function Dx(t){return t.node.childCount>0}function KU(t){return Yo(t)===void 0&&!Dx(t)}function Kd(t,e){Wt(t.node.children,(n,r)=>{e(new Xv(n,t,r))})}function Lx(t,e,n,r){n&&!r&&e(t),Kd(t,i=>{Lx(i,e,!0,r)}),n&&r&&e(t)}function GU(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function mu(t){return new de(t.parent===null?t.name:mu(t.parent)+"/"+t.name)}function Ig(t){t.parent!==null&&QU(t.parent,t.name,t)}function QU(t,e,n){const r=KU(n),i=Nr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ig(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ig(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YU=/[\[\].#$\/\u0000-\u001F\u007F]/,XU=/[\[\].#$\u0000-\u001F\u007F]/,Rp=10*1024*1024,Mx=function(t){return typeof t=="string"&&t.length!==0&&!YU.test(t)},$x=function(t){return typeof t=="string"&&t.length!==0&&!XU.test(t)},JU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$x(t)},Fx=function(t,e,n){const r=n instanceof de?new p4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bi(r));if(typeof e=="function")throw new Error(t+"contains a function "+bi(r)+" with contents = "+e.toString());if(Uk(e))throw new Error(t+"contains "+e.toString()+" "+bi(r));if(typeof e=="string"&&e.length>Rp/3&&$d(e)>Rp)throw new Error(t+"contains a string greater than "+Rp+" utf8 bytes "+bi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Wt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Mx(o)))throw new Error(t+" contains an invalid key ("+o+") "+bi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);m4(r,o),Fx(t,a,r),g4(r)}),i&&s)throw new Error(t+' contains ".value" child '+bi(r)+" in addition to actual children.")}},Ux=function(t,e,n,r){if(!(r&&n===void 0)&&!$x(n))throw new Error(VI(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZU=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ux(t,e,n,r)},ej=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Mx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JU(n))throw new Error(VI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jx(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ov(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Bx(t,e,n){jx(t,n),Vx(t,r=>Ov(r,e))}function ms(t,e,n){jx(t,n),Vx(t,r=>En(r,e)||En(e,r))}function Vx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(nj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Wi&&Et("event: "+n.toString()),du(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rj="repo_interrupt",ij=25;class sj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uh(),this.transactionQueueTree_=new Xv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oj(t,e,n){if(t.stats_=Av(t.repoInfo_),t.forceRestClient_||FF())t.server_=new Fh(t.repoInfo_,(r,i,s,o)=>{oE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>aE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new fr(t.repoInfo_,e,(r,i,s,o)=>{oE(t,r,i,s,o)},r=>{aE(t,r)},r=>{lj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=WF(t.repoInfo_,()=>new V4(t.stats_,t.server_)),t.infoData_=new $4,t.infoSyncTree_=new rE({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Hd(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zv(t,"connected",!1),t.serverSyncTree_=new rE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);ms(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function aj(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zx(t){return VU({timestamp:aj(t)})}function oE(t,e,n,r,i){t.dataUpdateCount++;const s=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=kh(n,u=>St(u));o=$U(t.serverSyncTree_,s,l,i)}else{const l=St(n);o=MU(t.serverSyncTree_,s,l,i)}else if(r){const l=kh(n,u=>St(u));o=OU(t.serverSyncTree_,s,l)}else{const l=St(n);o=Hd(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=t_(t,s)),ms(t.eventQueue_,a,o)}function aE(t,e){Zv(t,"connected",e),e===!1&&cj(t)}function lj(t,e){Wt(e,(n,r)=>{Zv(t,n,r)})}function Zv(t,e,n){const r=new de("/.info/"+e),i=St(n);t.infoData_.updateSnapshot(r,i);const s=Hd(t.infoSyncTree_,r,i);ms(t.eventQueue_,r,s)}function uj(t){return t.nextWriteId_++}function cj(t){Wx(t,"onDisconnectEvents");const e=zx(t),n=Uh();vg(t.onDisconnect_,ae(),(i,s)=>{const o=HU(i,s,t.serverSyncTree_,e);mx(n,i,o)});let r=[];vg(n,ae(),(i,s)=>{r=r.concat(Hd(t.serverSyncTree_,i,s));const o=mj(t,i);t_(t,o)}),t.onDisconnect_=Uh(),ms(t.eventQueue_,ae(),r)}function hj(t,e,n){let r;Q(e._path)===".info"?r=iE(t.infoSyncTree_,e,n):r=iE(t.serverSyncTree_,e,n),Bx(t.eventQueue_,e._path,r)}function lE(t,e,n){let r;Q(e._path)===".info"?r=Tg(t.infoSyncTree_,e,n):r=Tg(t.serverSyncTree_,e,n),Bx(t.eventQueue_,e._path,r)}function dj(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rj)}function Wx(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Et(n,...e)}function Hx(t,e,n){return bx(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function e_(t,e=t.transactionQueueTree_){if(e||Gd(t,e),Yo(e)){const n=Kx(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&fj(t,mu(e),n)}else Dx(e)&&Kd(e,n=>{e_(t,n)})}function fj(t,e,n){const r=n.map(u=>u.currentWriteId),i=Hx(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Ut(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Wx(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Gs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Gd(t,Jv(t.transactionQueueTree_,e)),e_(t,t.transactionQueueTree_),ms(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)du(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Yt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}t_(t,e)}},o)}function t_(t,e){const n=qx(t,e),r=mu(n),i=Kx(t,n);return pj(t,i,r),r}function pj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ut(n,l.path);let c=!1,h;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ij)c=!0,h="maxretry",i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Hx(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Fx("transaction failed: Data returned ",f,l.path);let p=St(f);typeof f=="object"&&f!=null&&Nr(f,".priority")||(p=p.updatePriority(d.getPriority()));const w=l.currentWriteId,y=zx(t),g=qU(p,d,y);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=uj(t),o.splice(o.indexOf(w),1),i=i.concat(PU(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Gs(t.serverSyncTree_,w,!0))}else c=!0,h="nodata",i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0))}ms(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Gd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)du(r[a]);e_(t,t.transactionQueueTree_)}function qx(t,e){let n,r=t.transactionQueueTree_;for(n=Q(e);n!==null&&Yo(r)===void 0;)r=Jv(r,n),e=fe(e),n=Q(e);return r}function Kx(t,e){const n=[];return Gx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Gx(t,e,n){const r=Yo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kd(e,i=>{Gx(t,i,n)})}function Gd(t,e){const n=Yo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ox(e,n.length>0?n:void 0)}Kd(e,r=>{Gd(t,r)})}function mj(t,e){const n=mu(qx(t,e)),r=Jv(t.transactionQueueTree_,e);return GU(r,i=>{bp(t,i)}),bp(t,r),Lx(r,i=>{bp(t,i)}),n}function bp(t,e){const n=Yo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ox(e,void 0):n.length=s+1,ms(t.eventQueue_,mu(e),i);for(let o=0;o<r.length;o++)du(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const uE=function(t,e){const n=vj(t),r=n.namespace;n.domain==="firebase.com"&&es(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bF();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new BF(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new de(n.pathString)}},vj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=gj(t.substring(c,h)));const d=yj(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class Yx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _j{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:sx(this._path)}get ref(){return new Pr(this._repo,this._path)}get _queryIdentifier(){const e=q1(this._queryParams),n=bv(e);return n==="{}"?"default":n}get _queryObject(){return q1(this._queryParams)}isEqual(e){if(e=pt(e),!(e instanceof n_))return!1;const n=this._repo===e._repo,r=Ov(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+f4(this._path)}}class Pr extends n_{constructor(e,n){super(e,n,new $v,!1)}get parent(){const e=ax(this._path);return e===null?null:new Pr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ol{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=kg(this.ref,e);return new Ol(this._node.getChild(n),r,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ol(i,kg(this.ref,r),Oe)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kg(t,e){return t=pt(t),Q(t._path)===null?ZU("child","path",e,!1):Ux("child","path",e,!1),new Pr(t._repo,Qe(t._path,e))}class r_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Qx("value",this,new Ol(e.snapshotNode,new Pr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Yx(this,e,n):null}matches(e){return e instanceof r_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class i_{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Yx(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=kg(new Pr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Qx(e.type,this,new Ol(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof i_?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function gu(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{lE(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new _j(n,s||void 0),a=e==="value"?new r_(o):new i_(e,o);return hj(t._repo,t,a),()=>lE(t._repo,t,a)}function wj(t,e,n,r){return gu(t,"value",e,n,r)}function Ej(t,e,n,r){return gu(t,"child_added",e,n,r)}function Sj(t,e,n,r){return gu(t,"child_changed",e,n,r)}function Cj(t,e,n,r){return gu(t,"child_moved",e,n,r)}function Tj(t,e,n,r){return gu(t,"child_removed",e,n,r)}CU(Pr);bU(Pr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ij="FIREBASE_DATABASE_EMULATOR_HOST",xg={};let kj=!1;function xj(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=uE(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[Ij]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=uE(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new mg(mg.OWNER):new jF(t.name,t.options,e);ej("Invalid Firebase Database URL",o),Y(o.path)||es("Database URL must point to the root of a Firebase Database (not including a child path).");const h=bj(a,t,c,new UF(t.name,n));return new Nj(h,t)}function Rj(t,e){const n=xg[e];(!n||n[t.key]!==t)&&es(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dj(t),delete n[t.key]}function bj(t,e,n,r){let i=xg[e.name];i||(i={},xg[e.name]=i);let s=i[t.toURLString()];return s&&es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sj(t,kj,n,r),i[t.toURLString()]=s,s}class Nj{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pr(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Rj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&es("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aj(t){TF(Ar),pn(new Zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xj(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),He(b1,N1,t),He(b1,N1,"esm2017")}fr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};fr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Aj();var Pj="firebase",Oj="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(Pj,Oj,"app");var Dj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,s_=s_||{},z=Dj||self;function Kh(){}function Qd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Lj(t){return Object.prototype.hasOwnProperty.call(t,Np)&&t[Np]||(t[Np]=++Mj)}var Np="closure_uid_"+(1e9*Math.random()>>>0),Mj=0;function $j(t,e,n){return t.call.apply(t.bind,arguments)}function Fj(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=$j:Tt=Fj,Tt.apply(null,arguments)}function oc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Si(){this.s=this.s,this.o=this.o}var Uj=0;Si.prototype.s=!1;Si.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Uj!=0)&&Lj(this)};Si.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xx=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function o_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function cE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Qd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var jj=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Kh,e),z.removeEventListener("test",Kh,e)}catch{}return t}();function Gh(t){return/^[\s\xa0]*$/.test(t)}var hE=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ap(t,e){return t<e?-1:t>e?1:0}function Yd(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Un(t){return Yd().indexOf(t)!=-1}function a_(t){return a_[" "](t),t}a_[" "]=Kh;function Jx(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var Bj=Un("Opera"),ko=Un("Trident")||Un("MSIE"),Zx=Un("Edge"),Rg=Zx||ko,eR=Un("Gecko")&&!(Yd().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge"))&&!(Un("Trident")||Un("MSIE"))&&!Un("Edge"),Vj=Yd().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge");function tR(){var t=z.document;return t?t.documentMode:void 0}var Qh;e:{var Pp="",Op=function(){var t=Yd();if(eR)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zx)return/Edge\/([\d\.]+)/.exec(t);if(ko)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Vj)return/WebKit\/(\S+)/.exec(t);if(Bj)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Op&&(Pp=Op?Op[1]:""),ko){var Dp=tR();if(Dp!=null&&Dp>parseFloat(Pp)){Qh=String(Dp);break e}}Qh=Pp}var zj={};function Wj(){return Jx(zj,9,function(){let t=0;const e=hE(String(Qh)).split("."),n=hE("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ap(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ap(i[2].length==0,s[2].length==0)||Ap(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var bg;if(z.document&&ko){var dE=tR();bg=dE||parseInt(Qh,10)||void 0}else bg=void 0;var Hj=bg;function Dl(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eR){e:{try{a_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qj[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Dl.$.h.call(this)}}ot(Dl,It);var qj={2:"touch",3:"pen",4:"mouse"};Dl.prototype.h=function(){Dl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vu="closure_listenable_"+(1e6*Math.random()|0),Kj=0;function Gj(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Kj,this.fa=this.ia=!1}function Xd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function l_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nR(t){const e={};for(const n in t)e[n]=t[n];return e}const fE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rR(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fE.length;s++)n=fE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Jd(t){this.src=t,this.g={},this.h=0}Jd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ag(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Gj(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ng(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Xx(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ag(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var u_="closure_lm_"+(1e6*Math.random()|0),Lp={};function iR(t,e,n,r,i){if(r&&r.once)return oR(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)iR(t,e[s],n,r,i);return null}return n=d_(n),t&&t[vu]?t.O(e,n,yu(r)?!!r.capture:!!r,i):sR(t,e,n,!1,r,i)}function sR(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=yu(i)?!!i.capture:!!i,a=h_(t);if(a||(t[u_]=a=new Jd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Qj(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)jj||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(lR(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qj(){function t(n){return e.call(t.src,t.listener,n)}const e=Yj;return t}function oR(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)oR(t,e[s],n,r,i);return null}return n=d_(n),t&&t[vu]?t.P(e,n,yu(r)?!!r.capture:!!r,i):sR(t,e,n,!0,r,i)}function aR(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)aR(t,e[s],n,r,i);else r=yu(r)?!!r.capture:!!r,n=d_(n),t&&t[vu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ag(s,n,r,i),-1<n&&(Xd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=h_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ag(e,n,r,i)),(n=-1<t?e[t]:null)&&c_(n))}function c_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[vu])Ng(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(lR(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=h_(e))?(Ng(n,t),n.h==0&&(n.src=null,e[u_]=null)):Xd(t)}}}function lR(t){return t in Lp?Lp[t]:Lp[t]="on"+t}function Yj(t,e){if(t.fa)t=!0;else{e=new Dl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&c_(t),t=n.call(r,e)}return t}function h_(t){return t=t[u_],t instanceof Jd?t:null}var Mp="__closure_events_fn_"+(1e9*Math.random()>>>0);function d_(t){return typeof t=="function"?t:(t[Mp]||(t[Mp]=function(e){return t.handleEvent(e)}),t[Mp])}function st(){Si.call(this),this.i=new Jd(this),this.S=this,this.J=null}ot(st,Si);st.prototype[vu]=!0;st.prototype.removeEventListener=function(t,e,n,r){aR(this,t,e,n,r)};function dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),rR(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ac(o,r,!0,e)&&i}if(o=e.g=t,i=ac(o,r,!0,e)&&i,i=ac(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ac(o,r,!1,e)&&i}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xd(n[r]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};st.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ac(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ng(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var f_=z.JSON.stringify;function Xj(){var t=hR;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Jj{constructor(){this.h=this.g=null}add(e,n){const r=uR.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var uR=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Zj,t=>t.reset());class Zj{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function e5(t){z.setTimeout(()=>{throw t},0)}function cR(t,e){Pg||t5(),Og||(Pg(),Og=!0),hR.add(t,e)}var Pg;function t5(){var t=z.Promise.resolve(void 0);Pg=function(){t.then(n5)}}var Og=!1,hR=new Jj;function n5(){for(var t;t=Xj();){try{t.h.call(t.g)}catch(n){e5(n)}var e=uR;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Og=!1}function Zd(t,e){st.call(this),this.h=t||1,this.g=e||z,this.j=Tt(this.qb,this),this.l=Date.now()}ot(Zd,st);P=Zd.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(p_(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function p_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Zd.$.N.call(this),p_(this),delete this.g};function m_(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function dR(t){t.g=m_(()=>{t.g=null,t.i&&(t.i=!1,dR(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class r5 extends Si{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dR(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ll(t){Si.call(this),this.h=t,this.g={}}ot(Ll,Si);var pE=[];function fR(t,e,n,r){Array.isArray(n)||(n&&(pE[0]=n.toString()),n=pE);for(var i=0;i<n.length;i++){var s=iR(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function pR(t){l_(t.g,function(e,n){this.g.hasOwnProperty(n)&&c_(e)},t),t.g={}}Ll.prototype.N=function(){Ll.$.N.call(this),pR(this)};Ll.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ef(){this.g=!0}ef.prototype.Ea=function(){this.g=!1};function i5(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function s5(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+a5(t,n)+(r?" "+r:"")})}function o5(t,e){t.info(function(){return"TIMEOUT: "+e})}ef.prototype.info=function(){};function a5(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return f_(n)}catch{return e}}var gs={},mE=null;function tf(){return mE=mE||new st}gs.Ta="serverreachability";function mR(t){It.call(this,gs.Ta,t)}ot(mR,It);function Ml(t){const e=tf();dt(e,new mR(e))}gs.STAT_EVENT="statevent";function gR(t,e){It.call(this,gs.STAT_EVENT,t),this.stat=e}ot(gR,It);function Pt(t){const e=tf();dt(e,new gR(e,t))}gs.Ua="timingevent";function yR(t,e){It.call(this,gs.Ua,t),this.size=e}ot(yR,It);function _u(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var nf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function g_(){}g_.prototype.h=null;function gE(t){return t.h||(t.h=t.i())}function _R(){}var wu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function y_(){It.call(this,"d")}ot(y_,It);function v_(){It.call(this,"c")}ot(v_,It);var Dg;function rf(){}ot(rf,g_);rf.prototype.g=function(){return new XMLHttpRequest};rf.prototype.i=function(){return{}};Dg=new rf;function Eu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ll(this),this.P=l5,t=Rg?125:void 0,this.V=new Zd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new wR}function wR(){this.i=null,this.g="",this.h=!1}var l5=45e3,Lg={},Yh={};P=Eu.prototype;P.setTimeout=function(t){this.P=t};function Mg(t,e,n){t.L=1,t.v=of(Cr(e)),t.s=n,t.S=!0,ER(t,null)}function ER(t,e){t.G=Date.now(),Su(t),t.A=Cr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),bR(n.i,"t",r),t.C=0,n=t.l.I,t.h=new wR,t.g=YR(t.l,n?e:null,!t.s),0<t.O&&(t.M=new r5(Tt(t.Pa,t,t.g),t.O)),fR(t.U,t.g,"readystatechange",t.nb),e=t.I?nR(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ml(),i5(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&cr(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=cr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Rg||this.g&&(this.h.h||this.g.ja()||wE(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ml(3):Ml(2)),sf(this);var n=this.g.da();this.aa=n;t:if(SR(this)){var r=wE(this.g);t="";var i=r.length,s=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$i(this),Ya(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,s5(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gh(a)){var u=a;break t}}u=null}if(n=u)Qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$g(this,n);else{this.i=!1,this.o=3,Pt(12),$i(this),Ya(this);break e}}this.S?(CR(this,c,o),Rg&&this.i&&c==3&&(fR(this.U,this.V,"tick",this.mb),this.V.start())):(Qs(this.j,this.m,o,null),$g(this,o)),c==4&&$i(this),this.i&&!this.J&&(c==4?qR(this.l,this):(this.i=!1,Su(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),$i(this),Ya(this)}}}catch{}finally{}};function SR(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function CR(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=u5(t,n),i==Yh){e==4&&(t.o=4,Pt(14),r=!1),Qs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Lg){t.o=4,Pt(15),Qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Qs(t.j,t.m,i,null),$g(t,i);SR(t)&&i!=Yh&&i!=Lg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),I_(e),e.L=!0,Pt(11))):(Qs(t.j,t.m,n,"[Invalid Chunked Response]"),$i(t),Ya(t))}P.mb=function(){if(this.g){var t=cr(this.g),e=this.g.ja();this.C<e.length&&(sf(this),CR(this,t,e),this.i&&t!=4&&Su(this))}};function u5(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Yh:(n=Number(e.substring(n,r)),isNaN(n)?Lg:(r+=1,r+n>e.length?Yh:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,$i(this)};function Su(t){t.Y=Date.now()+t.P,TR(t,t.P)}function TR(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_u(Tt(t.lb,t),e)}function sf(t){t.B&&(z.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(o5(this.j,this.A),this.L!=2&&(Ml(),Pt(17)),$i(this),this.o=2,Ya(this)):TR(this,this.Y-t)};function Ya(t){t.l.H==0||t.J||qR(t.l,t)}function $i(t){sf(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,p_(t.V),pR(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function $g(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Fg(n.h,t))){if(!t.K&&Fg(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Zh(n),uf(n);else break e;T_(n),Pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=_u(Tt(n.ib,n),6e3));if(1>=PR(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Fi(n,11)}else if((t.K||n.g==t)&&Zh(n),!Gh(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(__(s,s.h),s.h=null))}if(r.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,Ce(r.G,r.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=QR(r,r.I?r.oa:null,r.Y),o.K){OR(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(sf(a),Su(a)),r.g=o}else WR(r);0<n.i.length&&cf(n)}else u[0]!="stop"&&u[0]!="close"||Fi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fi(n,7):C_(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Ml(4)}catch{}}function c5(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Qd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function h5(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Qd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function IR(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Qd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=h5(t),r=c5(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var kR=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d5(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hi){this.h=e!==void 0?e:t.h,Xh(this,t.j),this.s=t.s,this.g=t.g,Jh(this,t.m),this.l=t.l,e=t.i;var n=new $l;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yE(this,n),this.o=t.o}else t&&(n=String(t).match(kR))?(this.h=!!e,Xh(this,n[1]||"",!0),this.s=Pa(n[2]||""),this.g=Pa(n[3]||"",!0),Jh(this,n[4]),this.l=Pa(n[5]||"",!0),yE(this,n[6]||"",!0),this.o=Pa(n[7]||"")):(this.h=!!e,this.i=new $l(null,this.h))}Hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Oa(e,vE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Oa(e,vE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Oa(n,n.charAt(0)=="/"?m5:p5,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Oa(n,y5)),t.join("")};function Cr(t){return new Hi(t)}function Xh(t,e,n){t.j=n?Pa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yE(t,e,n){e instanceof $l?(t.i=e,v5(t.i,t.h)):(n||(e=Oa(e,g5)),t.i=new $l(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function of(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,f5),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function f5(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vE=/[#\/\?@]/g,p5=/[#\?:]/g,m5=/[#\?]/g,g5=/[#\?@]/g,y5=/#/g;function $l(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ci(t){t.g||(t.g=new Map,t.h=0,t.i&&d5(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=$l.prototype;P.add=function(t,e){Ci(this),this.i=null,t=Xo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xR(t,e){Ci(t),e=Xo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function RR(t,e){return Ci(t),e=Xo(t,e),t.g.has(e)}P.forEach=function(t,e){Ci(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.sa=function(){Ci(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Ci(this);let e=[];if(typeof t=="string")RR(this,t)&&(e=e.concat(this.g.get(Xo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Ci(this),this.i=null,t=Xo(this,t),RR(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function bR(t,e,n){xR(t,e),0<n.length&&(t.i=null,t.g.set(Xo(t,e),o_(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Xo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function v5(t,e){e&&!t.j&&(Ci(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(xR(this,r),bR(this,i,n))},t)),t.j=e}var _5=class{constructor(t,e){this.h=t,this.g=e}};function NR(t){this.l=t||w5,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var w5=10;function AR(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function PR(t){return t.h?1:t.g?t.g.size:0}function Fg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function __(t,e){t.g?t.g.add(e):t.h=e}function OR(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}NR.prototype.cancel=function(){if(this.i=DR(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function DR(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return o_(t.i)}function w_(){}w_.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};w_.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function E5(){this.g=new w_}function S5(t,e,n){const r=n||"";try{IR(t,function(i,s){let o=i;yu(i)&&(o=f_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function C5(t,e){const n=new ef;if(z.Image){const r=new Image;r.onload=oc(lc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=oc(lc,n,r,"TestLoadImage: error",!1,e),r.onabort=oc(lc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=oc(lc,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function lc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Cu(t){this.l=t.fc||null,this.j=t.ob||!1}ot(Cu,g_);Cu.prototype.g=function(){return new af(this.l,this.j)};Cu.prototype.i=function(t){return function(){return t}}({});function af(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=E_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(af,st);var E_=0;P=af.prototype;P.open=function(t,e){if(this.readyState!=E_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fl(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tu(this)),this.readyState=E_};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fl(this)),this.g&&(this.readyState=3,Fl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;LR(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function LR(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Tu(this):Fl(this),this.readyState==3&&LR(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Tu(this))};P.Ya=function(t){this.g&&(this.response=t,Tu(this))};P.ka=function(){this.g&&Tu(this)};function Tu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fl(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(af.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var T5=z.JSON.parse;function De(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=MR,this.L=this.M=!1}ot(De,st);var MR="",I5=/^https?$/i,k5=["POST","PUT"];P=De.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Dg.g(),this.C=this.u?gE(this.u):gE(Dg),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){_E(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=Xx(k5,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{UR(this),0<this.B&&((this.L=x5(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=m_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){_E(this,s)}};function x5(t){return ko&&Wj()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof s_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function _E(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$R(t),lf(t)}function $R(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),lf(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lf(this,!0)),De.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?FR(this):this.kb())};P.kb=function(){FR(this)};function FR(t){if(t.h&&typeof s_<"u"&&(!t.C[1]||cr(t)!=4||t.da()!=2)){if(t.v&&cr(t)==4)m_(t.La,0,t);else if(dt(t,"readystatechange"),cr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(kR)[1]||null;if(!i&&z.self&&z.self.location){var s=z.self.location.protocol;i=s.substr(0,s.length-1)}r=!I5.test(i?i.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var o=2<cr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",$R(t)}}finally{lf(t)}}}}function lf(t,e){if(t.g){UR(t);const n=t.g,r=t.C[0]?Kh:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function UR(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function cr(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),T5(e)}};function wE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case MR:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jR(t){let e="";return l_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function S_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jR(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function wa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function BR(t){this.Ga=0,this.i=[],this.j=new ef,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=wa("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=wa("baseRetryDelayMs",5e3,t),this.hb=wa("retryDelaySeedMs",1e4,t),this.eb=wa("forwardChannelMaxRetries",2,t),this.xa=wa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new NR(t&&t.concurrentRequestLimit),this.Ja=new E5,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=BR.prototype;P.qa=8;P.H=1;function C_(t){if(VR(t),t.H==3){var e=t.W++,n=Cr(t.G);Ce(n,"SID",t.J),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Iu(t,n),e=new Eu(t,t.j,e,void 0),e.L=2,e.v=of(Cr(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=YR(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Su(e)}GR(t)}function uf(t){t.g&&(I_(t),t.g.cancel(),t.g=null)}function VR(t){uf(t),t.u&&(z.clearTimeout(t.u),t.u=null),Zh(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function cf(t){AR(t.h)||t.m||(t.m=!0,cR(t.Na,t),t.C=0)}function R5(t,e){return PR(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_u(Tt(t.Na,t,e),KR(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Eu(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=nR(s),rR(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zR(this,i,e),n=Cr(this.G),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),Iu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(jR(s)))+"&"+e:this.o&&S_(n,this.o,s)),__(this.h,i),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),i.ba=!0,Mg(i,n,null)):Mg(i,n,e),this.H=2}}else this.H==3&&(t?EE(this,t):this.i.length==0||AR(this.h)||EE(this))};function EE(t,e){var n;e?n=e.m:n=t.W++;const r=Cr(t.G);Ce(r,"SID",t.J),Ce(r,"RID",n),Ce(r,"AID",t.V),Iu(t,r),t.o&&t.s&&S_(r,t.o,t.s),n=new Eu(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=zR(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),__(t.h,n),Mg(n,r,e)}function Iu(t,e){t.ma&&l_(t.ma,function(n,r){Ce(e,r,n)}),t.l&&IR({},function(n,r){Ce(e,r,n)})}function zR(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Tt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{S5(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function WR(t){t.g||t.u||(t.ba=1,cR(t.Ma,t),t.A=0)}function T_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_u(Tt(t.Ma,t),KR(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,HR(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=_u(Tt(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Pt(10),uf(this),HR(this))};function I_(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function HR(t){t.g=new Eu(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Cr(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.J),Ce(e,"CI",t.M?"0":"1"),Ce(e,"AID",t.V),Ce(e,"TYPE","xmlhttp"),Iu(t,e),t.o&&t.s&&S_(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=of(Cr(e)),n.s=null,n.S=!0,ER(n,t)}P.ib=function(){this.v!=null&&(this.v=null,uf(this),T_(this),Pt(19))};function Zh(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function qR(t,e){var n=null;if(t.g==e){Zh(t),I_(t),t.g=null;var r=2}else if(Fg(t.h,e))n=e.F,OR(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=tf(),dt(r,new yR(r,n)),cf(t)}else WR(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&R5(t,e)||r==2&&T_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Fi(t,5);break;case 4:Fi(t,10);break;case 3:Fi(t,6);break;default:Fi(t,2)}}}function KR(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Fi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Tt(t.pb,t);n||(n=new Hi("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Xh(n,"https"),of(n)),C5(n.toString(),r)}else Pt(2);t.H=0,t.l&&t.l.za(e),GR(t),VR(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function GR(t){if(t.H=0,t.pa=[],t.l){const e=DR(t.h);(e.length!=0||t.i.length!=0)&&(cE(t.pa,e),cE(t.pa,t.i),t.h.i.length=0,o_(t.i),t.i.length=0),t.l.ya()}}function QR(t,e,n){var r=n instanceof Hi?Cr(n):new Hi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Jh(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hi(null,void 0);r&&Xh(s,r),e&&(s.g=e),i&&Jh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.qa),Iu(t,r),r}function YR(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new De(new Cu({ob:!0})):new De(t.va),e.Oa(t.I),e}function XR(){}P=XR.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function ed(){if(ko&&!(10<=Number(Hj)))throw Error("Environmental error: no available transport.")}ed.prototype.g=function(t,e){return new en(t,e)};function en(t,e){st.call(this),this.g=new BR(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Gh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gh(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Jo(this)}ot(en,st);en.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=QR(t,null,t.Y),cf(t)};en.prototype.close=function(){C_(this.g)};en.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=f_(t),t=n);e.i.push(new _5(e.fb++,t)),e.H==3&&cf(e)};en.prototype.N=function(){this.g.l=null,delete this.j,C_(this.g),delete this.g,en.$.N.call(this)};function JR(t){y_.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(JR,y_);function ZR(){v_.call(this),this.status=1}ot(ZR,v_);function Jo(t){this.g=t}ot(Jo,XR);Jo.prototype.Ba=function(){dt(this.g,"a")};Jo.prototype.Aa=function(t){dt(this.g,new JR(t))};Jo.prototype.za=function(t){dt(this.g,new ZR)};Jo.prototype.ya=function(){dt(this.g,"b")};function b5(){this.blockSize=-1}function Nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(Nn,b5);Nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $p(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)$p(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){$p(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){$p(this,r),i=0;break}}this.h=i,this.i+=e};Nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function he(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var N5={};function k_(t){return-128<=t&&128>t?Jx(N5,t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function Bn(t){if(isNaN(t)||!isFinite(t))return ao;if(0>t)return ct(Bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ug;return new he(e,0)}function eb(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ct(eb(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bn(Math.pow(e,8)),r=ao,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Bn(Math.pow(e,s)),r=r.R(s).add(Bn(o))):(r=r.R(n),r=r.add(Bn(o)))}return r}var Ug=4294967296,ao=k_(0),jg=k_(1),SE=k_(16777216);P=he.prototype;P.ea=function(){if(an(this))return-ct(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ug+r)*e,e*=Ug}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(hr(this))return"0";if(an(this))return"-"+ct(this).toString(t);for(var e=Bn(Math.pow(t,6)),n=this,r="";;){var i=nd(n,e).g;n=td(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,hr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function hr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function an(t){return t.h==-1}P.X=function(t){return t=td(this,t),an(t)?-1:hr(t)?0:1};function ct(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new he(n,~t.h).add(jg)}P.abs=function(){return an(this)?ct(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new he(n,n[n.length-1]&-2147483648?-1:0)};function td(t,e){return t.add(ct(e))}P.R=function(t){if(hr(this)||hr(t))return ao;if(an(this))return an(t)?ct(this).R(ct(t)):ct(ct(this).R(t));if(an(t))return ct(this.R(ct(t)));if(0>this.X(SE)&&0>t.X(SE))return Bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,uc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,uc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,uc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,uc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new he(n,0)};function uc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ea(t,e){this.g=t,this.h=e}function nd(t,e){if(hr(e))throw Error("division by zero");if(hr(t))return new Ea(ao,ao);if(an(t))return e=nd(ct(t),e),new Ea(ct(e.g),ct(e.h));if(an(e))return e=nd(t,ct(e)),new Ea(ct(e.g),e.h);if(30<t.g.length){if(an(t)||an(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jg,r=e;0>=r.X(t);)n=CE(n),r=CE(r);var i=Ss(n,1),s=Ss(r,1);for(r=Ss(r,2),n=Ss(n,2);!hr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ss(r,1),n=Ss(n,1)}return e=td(t,i.R(e)),new Ea(i,e)}for(i=ao;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Bn(n),o=s.R(e);an(o)||0<o.X(t);)n-=r,s=Bn(n),o=s.R(e);hr(s)&&(s=jg),i=i.add(s),t=td(t,o)}return new Ea(i,t)}P.gb=function(t){return nd(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new he(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new he(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new he(n,this.h^t.h)};function CE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new he(n,t.h)}function Ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new he(i,t.h)}ed.prototype.createWebChannel=ed.prototype.g;en.prototype.send=en.prototype.u;en.prototype.open=en.prototype.m;en.prototype.close=en.prototype.close;nf.NO_ERROR=0;nf.TIMEOUT=8;nf.HTTP_ERROR=6;vR.COMPLETE="complete";_R.EventType=wu;wu.OPEN="a";wu.CLOSE="b";wu.ERROR="c";wu.MESSAGE="d";st.prototype.listen=st.prototype.O;De.prototype.listenOnce=De.prototype.P;De.prototype.getLastError=De.prototype.Sa;De.prototype.getLastErrorCode=De.prototype.Ia;De.prototype.getStatus=De.prototype.da;De.prototype.getResponseJson=De.prototype.Wa;De.prototype.getResponseText=De.prototype.ja;De.prototype.send=De.prototype.ha;De.prototype.setWithCredentials=De.prototype.Oa;Nn.prototype.digest=Nn.prototype.l;Nn.prototype.reset=Nn.prototype.reset;Nn.prototype.update=Nn.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=Bn;he.fromString=eb;var A5=function(){return new ed},P5=function(){return tf()},Fp=nf,O5=vR,D5=gs,TE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},L5=Cu,cc=_R,M5=De,$5=Nn,lo=he;const IE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _t=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new iu("@firebase/firestore");function kE(){return ss.logLevel}function $(t,...e){if(ss.logLevel<=te.DEBUG){const n=e.map(x_);ss.debug(`Firestore (${Zo}): ${t}`,...n)}}function Tr(t,...e){if(ss.logLevel<=te.ERROR){const n=e.map(x_);ss.error(`Firestore (${Zo}): ${t}`,...n)}}function xo(t,...e){if(ss.logLevel<=te.WARN){const n=e.map(x_);ss.warn(`Firestore (${Zo}): ${t}`,...n)}}function x_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Zo}) INTERNAL ASSERTION FAILED: `+t;throw Tr(e),new Error(e)}function we(t,e){t||B()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class F5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class U5{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let j5=class{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ui,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ui)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new tb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new _t(e)}},B5=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};class V5{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new B5(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let z5=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class W5{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.T=n.token,new z5(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H5(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=H5(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Ro(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Xe(0,0))}static max(){return new W(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ul.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ul?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Ul{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const q5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Ul{construct(e,n,r){return new Ct(e,n,r)}static isValidIdentifier(e){return q5.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ve.fromString(e))}static fromName(e){return new F(ve.fromString(e).popFirst(5))}static empty(){return new F(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ve(e.slice()))}}function K5(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new gi(i,F.empty(),e)}function G5(t){return new gi(t.readTime,t.key,-1)}class gi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gi(W.min(),F.empty(),-1)}static max(){return new gi(W.max(),F.empty(),-1)}}function Q5(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y5="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Y5)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function xu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}R_.ct=-1;function hf(t){return t==null}function rd(t){return t===0&&1/t==-1/0}function J5(t){return typeof t=="number"&&Number.isInteger(t)&&!rd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ea(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hc(this.root,e,this.comparator,!0)}}let hc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}};class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,i){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new RE(this.data.getIterator())}getIteratorFrom(e){return new RE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class RE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new kt(Ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ib("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Z5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(t){if(we(!!t),typeof t=="string"){let e=0;const n=Z5.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function N_(t){const e=t.mapValue.fields.__previous_value__;return b_(e)?N_(e):e}function jl(t){const e=yi(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Bl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?b_(t)?4:t3(t)?9007199254740991:10:B()}function Yn(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jl(t).isEqual(jl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=yi(r.timestampValue),o=yi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return os(r.bytesValue).isEqual(os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return je(r.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(r.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return je(r.integerValue)===je(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=je(r.doubleValue),o=je(i.doubleValue);return s===o?rd(s)===rd(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ro(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(xE(s)!==xE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Yn(s[a],o[a])))return!1;return!0}(t,e);default:return B()}}function Vl(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function bo(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=je(i.integerValue||i.doubleValue),a=je(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bE(t.timestampValue,e.timestampValue);case 4:return bE(jl(t),jl(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=os(i),a=os(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=oe(o[l],a[l]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=oe(je(i.latitude),je(s.latitude));return o!==0?o:oe(je(i.longitude),je(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=bo(o[l],a[l]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===dc.mapValue&&s===dc.mapValue)return 0;if(i===dc.mapValue)return 1;if(s===dc.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=oe(a[c],u[c]);if(h!==0)return h;const d=bo(o[a[c]],l[u[c]]);if(d!==0)return d}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function bE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=yi(t),r=yi(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function No(t){return Bg(t)}function Bg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=yi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Bg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Bg(r.fields[a])}`;return s+"}"}(t.mapValue):B();var e,n}function NE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vg(t){return!!t&&"integerValue"in t}function A_(t){return!!t&&"arrayValue"in t}function AE(t){return!!t&&"nullValue"in t}function PE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fc(t){return!!t&&"mapValue"in t}function Xa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ea(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function t3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir=class zg{constructor(e){this.value=e}static empty(){return new zg({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(n)}setAll(e){let n=Ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ea(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zg(Xa(this.value))}};function sb(t){const e=[];return ea(t.fields,(n,r)=>{const i=new Ct([n]);if(Fc(r)){const s=sb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir=class Ni{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ni(e,0,W.min(),W.min(),W.min(),ir.empty(),0)}static newFoundDocument(e,n,r,i){return new Ni(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new Ni(e,2,n,W.min(),W.min(),ir.empty(),0)}static newUnknownDocument(e,n){return new Ni(e,3,n,W.min(),W.min(),ir.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ir.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ir.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ni&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ni(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id=class{constructor(e,n){this.position=e,this.inclusive=n}};function OE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=bo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function DE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function n3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{}class ze extends ob{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new i3(e,n,r):n==="array-contains"?new a3(e,r):n==="in"?new l3(e,r):n==="not-in"?new u3(e,r):n==="array-contains-any"?new c3(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new s3(e,r):new o3(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bo(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(bo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class An extends ob{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new An(e,n)}matches(e){return ab(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ab(t){return t.op==="and"}function lb(t){return r3(t)&&ab(t)}function r3(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function Wg(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+No(t.value);if(lb(t))return t.filters.map(e=>Wg(e)).join(",");{const e=t.filters.map(n=>Wg(n)).join(",");return`${t.op}(${e})`}}function ub(t,e){return t instanceof ze?function(n,r){return r instanceof ze&&n.op===r.op&&n.field.isEqual(r.field)&&Yn(n.value,r.value)}(t,e):t instanceof An?function(n,r){return r instanceof An&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&ub(s,r.filters[o]),!0):!1}(t,e):void B()}function cb(t){return t instanceof ze?function(e){return`${e.field.canonicalString()} ${e.op} ${No(e.value)}`}(t):t instanceof An?function(e){return e.op.toString()+" {"+e.getFilters().map(cb).join(" ,")+"}"}(t):"Filter"}class i3 extends ze{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class s3 extends ze{constructor(e,n){super(e,"in",n),this.keys=hb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class o3 extends ze{constructor(e,n){super(e,"not-in",n),this.keys=hb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class a3 extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return A_(n)&&Vl(n.arrayValue,this.value)}}class l3 extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vl(this.value.arrayValue,n)}}class u3 extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vl(this.value.arrayValue,n)}}class c3 extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!A_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function LE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new h3(t,e,n,r,i,s,o)}function P_(t){const e=H(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>No(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>No(r)).join(",")),e.dt=n}return e.dt}function O_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!n3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ub(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!DE(t.startAt,e.startAt)&&DE(t.endAt,e.endAt)}function Hg(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function d3(t,e,n,r,i,s,o,a){return new Ru(t,e,n,r,i,s,o,a)}function db(t){return new Ru(t)}function ME(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function D_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function pb(t){return t.collectionGroup!==null}function uo(t){const e=H(t);if(e.wt===null){e.wt=[];const n=D_(e),r=fb(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ja(n)),e.wt.push(new Ja(Ct.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ja(Ct.keyField(),s))}}}return e.wt}function kr(t){const e=H(t);if(!e._t)if(e.limitType==="F")e._t=LE(e.path,e.collectionGroup,uo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of uo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ja(s.field,o))}const r=e.endAt?new id(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new id(e.startAt.position,e.startAt.inclusive):null;e._t=LE(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function qg(t,e){e.getFirstInequalityField(),D_(t);const n=t.filters.concat([e]);return new Ru(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kg(t,e,n){return new Ru(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function df(t,e){return O_(kr(t),kr(e))&&t.limitType===e.limitType}function mb(t){return`${P_(kr(t))}|lt:${t.limitType}`}function Gg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>cb(r)).join(", ")}]`),hf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>No(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>No(r)).join(",")),`Target(${n})`}(kr(t))}; limitType=${t.limitType})`}function ff(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of uo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=OE(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,uo(n),r)||n.endAt&&!function(i,s,o){const a=OE(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,uo(n),r))}(t,e)}function f3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gb(t){return(e,n)=>{let r=!1;for(const i of uo(t)){const s=p3(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function p3(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?bo(a,l):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ea(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m3=new xe(F.comparator);function xr(){return m3}const yb=new xe(F.comparator);function Da(...t){let e=yb;for(const n of t)e=e.insert(n.key,n);return e}function vb(t){let e=yb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ui(){return Za()}function _b(){return Za()}function Za(){return new ta(t=>t.toString(),(t,e)=>t.isEqual(e))}const g3=new xe(F.comparator),y3=new kt(F.comparator);function J(...t){let e=y3;for(const n of t)e=e.add(n);return e}const v3=new kt(oe);function _3(){return v3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rd(e)?"-0":e}}function Eb(t){return{integerValue:""+t}}function w3(t,e){return J5(e)?Eb(e):wb(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this._=void 0}}function E3(t,e,n){return t instanceof sd?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&b_(i)&&(i=N_(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof zl?Cb(t,e):t instanceof Wl?Tb(t,e):function(r,i){const s=Sb(r,i),o=$E(s)+$E(r.gt);return Vg(s)&&Vg(r.gt)?Eb(o):wb(r.serializer,o)}(t,e)}function S3(t,e,n){return t instanceof zl?Cb(t,e):t instanceof Wl?Tb(t,e):n}function Sb(t,e){return t instanceof od?Vg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class sd extends pf{}class zl extends pf{constructor(e){super(),this.elements=e}}function Cb(t,e){const n=Ib(e);for(const r of t.elements)n.some(i=>Yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wl extends pf{constructor(e){super(),this.elements=e}}function Tb(t,e){let n=Ib(e);for(const r of t.elements)n=n.filter(i=>!Yn(i,r));return{arrayValue:{values:n}}}class od extends pf{constructor(e,n){super(),this.serializer=e,this.gt=n}}function $E(t){return je(t.integerValue||t.doubleValue)}function Ib(t){return A_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function C3(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof zl&&r instanceof zl||n instanceof Wl&&r instanceof Wl?Ro(n.elements,r.elements,Yn):n instanceof od&&r instanceof od?Yn(n.gt,r.gt):n instanceof sd&&r instanceof sd}(t.transform,e.transform)}class T3{constructor(e,n){this.version=e,this.transformResults=n}}class pr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pr}static exists(e){return new pr(void 0,e)}static updateTime(e){return new pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mf{}function kb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rb(t.key,pr.none()):new bu(t.key,t.data,pr.none());{const n=t.data,r=ir.empty();let i=new kt(Ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ys(t.key,r,new Cn(i.toArray()),pr.none())}}function I3(t,e,n){t instanceof bu?function(r,i,s){const o=r.value.clone(),a=UE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ys?function(r,i,s){if(!Uc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=UE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(xb(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function el(t,e,n,r){return t instanceof bu?function(i,s,o,a){if(!Uc(i.precondition,s))return o;const l=i.value.clone(),u=jE(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ys?function(i,s,o,a){if(!Uc(i.precondition,s))return o;const l=jE(i.fieldTransforms,a,s),u=s.data;return u.setAll(xb(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Uc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function k3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Sb(r.transform,i||null);s!=null&&(n===null&&(n=ir.empty()),n.set(r.field,s))}return n||null}function FE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ro(n,r,(i,s)=>C3(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bu extends mf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ys extends mf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function UE(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,S3(o,a,n[i]))}return r}function jE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,E3(s,o,e))}return r}class Rb extends mf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x3 extends mf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&I3(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=el(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=el(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_b();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=kb(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(n,r)=>FE(n,r))&&Ro(this.baseMutations,e.baseMutations,(n,r)=>FE(n,r))}}class L_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length);let i=g3;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new L_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ee;function A3(t){switch(t){default:return B();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function bb(t){if(t===void 0)return Tr("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ue.OK:return I.OK;case Ue.CANCELLED:return I.CANCELLED;case Ue.UNKNOWN:return I.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return I.INTERNAL;case Ue.UNAVAILABLE:return I.UNAVAILABLE;case Ue.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ue.NOT_FOUND:return I.NOT_FOUND;case Ue.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ue.ABORTED:return I.ABORTED;case Ue.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ue.DATA_LOSS:return I.DATA_LOSS;default:return B()}}(ee=Ue||(Ue={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fc}static getOrCreateInstance(){return fc===null&&(fc=new M_),fc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let fc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O3=new lo([4294967295,4294967295],0);function BE(t){const e=P3().encode(t),n=new $5;return n.update(e),new Uint8Array(n.digest())}function VE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new lo([n,r],0),new lo([i,s],0)]}class $_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new La(`Invalid padding: ${n}`);if(r<0)throw new La(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new La(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=lo.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(lo.fromNumber(r)));return i.compare(O3)===1&&(i=new lo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=BE(e),[r,i]=VE(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new $_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=BE(e),[r,i]=VE(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gf(W.min(),i,new xe(oe),xr(),J())}}class Nu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nu(r,n,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class Nb{constructor(e,n){this.targetId=e,this.Vt=n}}class Ab{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zE{constructor(){this.St=0,this.Dt=HE(),this.Ct=bt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=J(),n=J(),r=J();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Nu(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=HE()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class D3{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=xr(),this.zt=WE(),this.Wt=new xe(oe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Hg(o))if(i===0){const a=new F(o.path);this.Yt(r,a,Ir.newNoDocument(a,W.min()))}else we(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=M_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,f,p,m,w,y;const g={localCacheCount:c,existenceFilterCount:h.count},v=h.unchangedNames;return v&&(g.bloomFilter={applied:u===0,hashCount:(d=v==null?void 0:v.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(m=(p=(f=v==null?void 0:v.bits)===null||f===void 0?void 0:f.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(y=(w=v==null?void 0:v.bits)===null||w===void 0?void 0:w.padding)!==null&&y!==void 0?y:0}),g}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=os(s).toUint8Array()}catch(c){if(c instanceof ib)return xo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new $_(l,o,a)}catch(c){return xo(c instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Hg(a.target)){const l=new F(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ir.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=J();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new gf(e,n,this.Wt,this.jt,r);return this.jt=xr(),this.zt=WE(),this.Wt=new xe(oe),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new zE,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new kt(oe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new zE),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function WE(){return new xe(F.comparator)}function HE(){return new xe(F.comparator)}const L3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),M3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$3=(()=>({and:"AND",or:"OR"}))();class F3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qg(t,e){return t.useProto3Json||hf(e)?e:{value:e}}function ad(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function U3(t,e){return ad(t,e.toTimestamp())}function Kn(t){return we(!!t),W.fromTimestamp(function(e){const n=yi(e);return new Xe(n.seconds,n.nanos)}(t))}function F_(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ob(t){const e=ve.fromString(t);return we($b(e)),e}function Yg(t,e){return F_(t.databaseId,e.path)}function Up(t,e){const n=Ob(e);if(n.get(1)!==t.databaseId.projectId)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(Db(n))}function Xg(t,e){return F_(t.databaseId,e)}function j3(t){const e=Ob(t);return e.length===4?ve.emptyPath():Db(e)}function Jg(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Db(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qE(t,e,n){return{name:Yg(t,e),fields:n.value.mapValue.fields}}function B3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(we(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(we(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:bb(l.code);return new L(u,l.message||"")}(o);n=new Ab(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Up(t,r.document.name),s=Kn(r.document.updateTime),o=r.document.createTime?Kn(r.document.createTime):W.min(),a=new ir({mapValue:{fields:r.document.fields}}),l=Ir.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new jc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Up(t,r.document),s=r.readTime?Kn(r.readTime):W.min(),o=Ir.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Up(t,r.document),s=r.removedTargetIds||[];n=new jc([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new N3(i,s),a=r.targetId;n=new Nb(a,o)}}return n}function V3(t,e){let n;if(e instanceof bu)n={update:qE(t,e.key,e.value)};else if(e instanceof Rb)n={delete:Yg(t,e.key)};else if(e instanceof ys)n={update:qE(t,e.key,e.data),updateMask:X3(e.fieldMask)};else{if(!(e instanceof x3))return B();n={verify:Yg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof sd)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Wl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof od)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:U3(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(t,e.precondition)),n}function z3(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Kn(r.updateTime):Kn(i);return s.isEqual(W.min())&&(s=Kn(i)),new T3(s,r.transformResults||[])}(n,e))):[]}function W3(t,e){return{documents:[Xg(t,e.path)]}}function H3(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Mb(An.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ns(c.field),direction:G3(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Qg(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function q3(t){let e=j3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Lb(c);return h instanceof An&&lb(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ja(As(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,hf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new id(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new id(d,h)}(n.endAt)),d3(e,i,o,s,a,"F",l,u)}function K3(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=As(e.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=As(e.unaryFilter.field);return ze.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(e.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=As(e.unaryFilter.field);return ze.create(s,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return ze.create(As(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return An.create(e.compositeFilter.filters.map(n=>Lb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function G3(t){return L3[t]}function Q3(t){return M3[t]}function Y3(t){return $3[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function As(t){return Ct.fromServerFormat(t.fieldPath)}function Mb(t){return t instanceof ze?function(e){if(e.op==="=="){if(PE(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NAN"}};if(AE(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(PE(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NAN"}};if(AE(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(e.field),op:Q3(e.op),value:e.value}}}(t):t instanceof An?function(e){const n=e.getFilters().map(r=>Mb(r));return n.length===1?n[0]:{compositeFilter:{op:Y3(e.op),filters:n}}}(t):B()}function X3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $b(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r,i,s=W.min(),o=W.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(e){this.fe=e}}function Z3(t){const e=q3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(){this.rn=new t9}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(gi.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class t9{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new kt(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new kt(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ao(0)}static Mn(){return new Ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(){this.changes=new ta(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ir.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&el(r.mutation,i,Cn.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=Ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Da();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=xr();const o=Za(),a=Za();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ys)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),el(c.mutation,u,c.mutation.getFieldMask(),Xe.now())):o.set(u.key,Cn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new r9(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Za();let i=new xe((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Cn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=_b();c.forEach(d=>{if(!s.has(d)){const f=kb(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Ui());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?b.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,J())).next(c=>({batchId:a,changes:vb(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=Da();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Da();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(u,c){return new Ru(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ir.newInvalidDocument(u)))});let o=Da();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&el(u.mutation,l,Cn.empty(),Xe.now()),ff(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Kn(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Z3(r.bundledQuery),readTime:Kn(r.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(){this.overlays=new xe(F.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ui();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Ui(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ui(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ui(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new b3(n,r));let s=this.ls.get(n);s===void 0&&(s=J(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.fs=new kt(et.ds),this.ws=new kt(et._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new et(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new et(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new F(new ve([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new F(new ve([])),r=new et(n,e),i=new et(n,e+1);let s=J();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return F.comparator(e.key,n.key)||oe(e.As,n.As)}static _s(e,n){return oe(e.As,n.As)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new kt(et.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new R3(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(oe);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),b.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new et(new F(s),0);let a=new kt(oe);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return b.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new et(n,0),i=this.Rs.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l9{constructor(e){this.Ds=e,this.docs=new xe(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Ir.newInvalidDocument(n))}getEntries(e,n){let r=xr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ir.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xr();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Q5(G5(c),r)<=0||(i.has(c.key)||ff(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}Cs(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new u9(this)}getSize(e){return b.resolve(this.size)}}class u9 extends n9{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c9{constructor(e){this.persistence=e,this.xs=new ta(n=>P_(n),O_),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Ns=0,this.ks=new U_,this.targetCount=0,this.Ms=Ao.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ao(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(e,n){this.$s={},this.overlays={},this.Os=new R_(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new c9(this),this.indexManager=new e9,this.remoteDocumentCache=function(r){return new l9(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new J3(n),this.qs=new s9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new a9(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new d9(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return b.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class d9 extends X5{constructor(e){super(),this.currentSequenceNumber=e}}class j_{constructor(e){this.persistence=e,this.Qs=new U_,this.js=null}static zs(e){return new j_(e)}get Ws(){if(this.js)return this.js;throw B()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,r=>{const i=F.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new B_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f9{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(ME(n))return b.resolve(null);let r=kr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kg(n,null,"F"),r=kr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Kg(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return ME(n)||i.isEqual(W.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(kE()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gg(n)),this.Wi(e,o,n,K5(i,-1)))})}ji(e,n){let r=new kt(gb(e));return n.forEach((i,s)=>{ff(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return kE()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Gg(n)),this.Ui.getDocumentsMatchingQuery(e,n,gi.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new xe(oe),this.Yi=new ta(s=>P_(s),O_),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i9(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function m9(t,e,n,r){return new p9(t,e,n,r)}async function Fb(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function g9(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const m=l.docVersions.get(f);we(m!==null),p.version.compareTo(m)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=J();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ub(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function y9(t,e){const n=H(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(bt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(p,m,w){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,c)&&a.push(n.Bs.updateTargetData(s,f))});let l=xr(),u=J();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(v9(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(W.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function v9(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function _9(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function w9(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Zg(t,e,n){const r=H(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xu(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function KE(t,e,n){const r=H(t);let i=W.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=H(a),h=c.Yi.get(u);return h!==void 0?b.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,kr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:J())).next(a=>(E9(r,f3(e),a),{documents:a,ir:s})))}function E9(t,e,n){let r=t.Xi.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class GE{constructor(){this.activeTargetIds=_3()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class S9{constructor(){this.Hr=new GE,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new GE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C9{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc=null;function jp(){return pc===null?pc=268435456+Math.round(2147483648*Math.random()):pc++,"0x"+pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I9{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class k9 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=jp(),a=this.To(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>($("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw xo("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=T9[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=jp();return new Promise((o,a)=>{const l=new M5;l.setWithCredentials(!0),l.listenOnce(O5.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Fp.NO_ERROR:const c=l.getResponseJson();$(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Fp.TIMEOUT:$(yt,`RPC '${e}' ${s} timed out`),a(new L(I.DEADLINE_EXCEEDED,"Request time out"));break;case Fp.HTTP_ERROR:const h=l.getStatus();if($(yt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(w)>=0?w:I.UNKNOWN}(f.status);a(new L(p,f.message))}else a(new L(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(I.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{$(yt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);$(yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=jp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=A5(),a=P5(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new L5({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");$(yt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const p=new I9({ro:w=>{f?$(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||($(yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),$(yt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),m=(w,y,g)=>{w.listen(y,v=>{try{g(v)}catch(E){setTimeout(()=>{throw E},0)}})};return m(h,cc.EventType.OPEN,()=>{f||$(yt,`RPC '${e}' stream ${i} transport opened.`)}),m(h,cc.EventType.CLOSE,()=>{f||(f=!0,$(yt,`RPC '${e}' stream ${i} transport closed`),p.wo())}),m(h,cc.EventType.ERROR,w=>{f||(f=!0,xo(yt,`RPC '${e}' stream ${i} transport errored:`,w),p.wo(new L(I.UNAVAILABLE,"The operation could not be completed")))}),m(h,cc.EventType.MESSAGE,w=>{var y;if(!f){const g=w.data[0];we(!!g);const v=g,E=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(E){$(yt,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let x=function(O){const K=Ue[O];if(K!==void 0)return bb(K)}(T),k=E.message;x===void 0&&(x=I.INTERNAL,k="Unknown error status: "+T+" with message "+E.message),f=!0,p.wo(new L(x,k)),h.close()}else $(yt,`RPC '${e}' stream ${i} received:`,g),p._o(g)}}),m(a,D5.STAT_EVENT,w=>{w.stat===TE.PROXY?$(yt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===TE.NOPROXY&&$(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function Bp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t){return new F3(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new jb(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new L(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x9 extends Bb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=B3(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?Kn(s.readTime):W.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Jg(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Hg(a)?{documents:W3(i,a)}:{query:H3(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Pb(i,s.resumeToken);const l=Qg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(W.min())>0){o.readTime=ad(i,s.snapshotVersion.toTimestamp());const l=Qg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=K3(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Jg(this.serializer),n.removeTarget=e,this.Wo(n)}}class R9 extends Bb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=z3(e.writeResults,e.commitTime),r=Kn(e.commitTime);return this.listener.cu(r,n)}return we(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Jg(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>V3(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(I.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(I.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class N9{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Tr(n),this.mu=!1):$("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A9{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{vs(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=H(a);l.vu.add(4),await Au(l),l.bu.set("Unknown"),l.vu.delete(4),await vf(l)}(this))})}),this.bu=new N9(r,i)}}async function vf(t){if(vs(t))for(const e of t.Ru)await e(!0)}async function Au(t){for(const e of t.Ru)await e(!1)}function Vb(t,e){const n=H(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),W_(n)?z_(n):na(n).Ko()&&V_(n,e))}function zb(t,e){const n=H(t),r=na(n);n.Au.delete(e),r.Ko()&&Wb(n,e),n.Au.size===0&&(r.Ko()?r.jo():vs(n)&&n.bu.set("Unknown"))}function V_(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}na(t).su(e)}function Wb(t,e){t.Vu.qt(e),na(t).iu(e)}function z_(t){t.Vu=new D3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),na(t).start(),t.bu.gu()}function W_(t){return vs(t)&&!na(t).Uo()&&t.Au.size>0}function vs(t){return H(t).vu.size===0}function Hb(t){t.Vu=void 0}async function P9(t){t.Au.forEach((e,n)=>{V_(t,e)})}async function O9(t,e){Hb(t),W_(t)?(t.bu.Iu(e),z_(t)):t.bu.set("Unknown")}async function D9(t,e,n){if(t.bu.set("Online"),e instanceof Ab&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ld(t,r)}else if(e instanceof jc?t.Vu.Ht(e):e instanceof Nb?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(W.min()))try{const r=await Ub(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(bt.EMPTY_BYTE_STRING,u.snapshotVersion)),Wb(i,a);const c=new Yr(u.target,a,l,u.sequenceNumber);V_(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ld(t,r)}}async function ld(t,e,n){if(!xu(e))throw e;t.vu.add(1),await Au(t),t.bu.set("Offline"),n||(n=()=>Ub(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await vf(t)})}function qb(t,e){return e().catch(n=>ld(t,n,e))}async function _f(t){const e=H(t),n=vi(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;L9(e);)try{const i=await _9(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,M9(e,i)}catch(i){await ld(e,i)}Kb(e)&&Gb(e)}function L9(t){return vs(t)&&t.Eu.length<10}function M9(t,e){t.Eu.push(e);const n=vi(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Kb(t){return vs(t)&&!vi(t).Uo()&&t.Eu.length>0}function Gb(t){vi(t).start()}async function $9(t){vi(t).hu()}async function F9(t){const e=vi(t);for(const n of t.Eu)e.uu(n.mutations)}async function U9(t,e,n){const r=t.Eu.shift(),i=L_.from(r,e,n);await qb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _f(t)}async function j9(t,e){e&&vi(t).ou&&await async function(n,r){if(i=r.code,A3(i)&&i!==I.ABORTED){const s=n.Eu.shift();vi(n).Qo(),await qb(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await _f(n)}var i}(t,e),Kb(t)&&Gb(t)}async function YE(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=vs(n);n.vu.add(3),await Au(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await vf(n)}async function B9(t,e){const n=H(t);e?(n.vu.delete(2),await vf(n)):e||(n.vu.add(2),await Au(n),n.bu.set("Unknown"))}function na(t){return t.Su||(t.Su=function(e,n,r){const i=H(e);return i.fu(),new x9(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:P9.bind(null,t),ao:O9.bind(null,t),nu:D9.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),W_(t)?z_(t):t.bu.set("Unknown")):(await t.Su.stop(),Hb(t))})),t.Su}function vi(t){return t.Du||(t.Du=function(e,n,r){const i=H(e);return i.fu(),new R9(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:$9.bind(null,t),ao:j9.bind(null,t),au:F9.bind(null,t),cu:U9.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await _f(t)):(await t.Du.stop(),t.Eu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new H_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function q_(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),xu(t))return new L(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=Da(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new co(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new co;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.Cu=new xe(F.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):B():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Po{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Po(e,n,co.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&df(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V9{constructor(){this.Nu=void 0,this.listeners=[]}}class z9{constructor(){this.queries=new ta(e=>mb(e),df),this.onlineState="Unknown",this.ku=new Set}}async function W9(t,e){const n=H(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new V9),i)try{s.Nu=await n.onListen(r)}catch(o){const a=q_(o,`Initialization of query '${Gg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&K_(n)}async function H9(t,e){const n=H(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function q9(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&K_(n)}function K9(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function K_(t){t.ku.forEach(e=>{e.next()})}class G9{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.key=e}}class Yb{constructor(e){this.key=e}}class Q9{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=J(),this.mutatedKeys=J(),this.tc=gb(e),this.ec=new co(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new XE,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=ff(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(r.track({type:3,doc:f}),w=!0):this.rc(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.tc(f,l)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=m?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return f(h)-f(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Po(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new XE,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=J(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new Yb(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new Qb(r))}),n}hc(e){this.Yu=e.ir,this.Zu=J();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Po.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Y9{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class X9{constructor(e){this.key=e,this.fc=!1}}class J9{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ta(a=>mb(a),df),this._c=new Map,this.mc=new Set,this.gc=new xe(F.comparator),this.yc=new Map,this.Ic=new U_,this.Tc={},this.Ec=new Map,this.Ac=Ao.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Z9(t,e){const n=uB(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await w9(n.localStore,kr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await eB(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Vb(n.remoteStore,o)}return i}async function eB(t,e,n,r,i){t.Rc=(h,d,f)=>async function(p,m,w,y){let g=m.view.sc(w);g.zi&&(g=await KE(p.localStore,m.query,!1).then(({documents:T})=>m.view.sc(T,g)));const v=y&&y.targetChanges.get(m.targetId),E=m.view.applyChanges(g,p.isPrimaryClient,v);return ZE(p,m.targetId,E.cc),E.snapshot}(t,h,d,f);const s=await KE(t.localStore,e,!0),o=new Q9(e,s.ir),a=o.sc(s.documents),l=Nu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ZE(t,n,u.cc);const c=new Y9(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function tB(t,e){const n=H(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!df(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zb(n.remoteStore,r.targetId),ey(n,r.targetId)}).catch(ku)):(ey(n,r.targetId),await Zg(n.localStore,r.targetId,!0))}async function nB(t,e,n){const r=cB(t);try{const i=await function(s,o){const a=H(s),l=Xe.now(),u=o.reduce((d,f)=>d.add(f.key),J());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=xr(),p=J();return a.Zi.getEntries(d,u).next(m=>{f=m,f.forEach((w,y)=>{y.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{c=m;const w=[];for(const y of o){const g=k3(y,c.get(y.key).overlayedDocument);g!=null&&w.push(new ys(y.key,g,sb(g.value.mapValue),pr.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(m=>{h=m;const w=m.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,m.batchId,w)})}).then(()=>({batchId:h.batchId,changes:vb(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new xe(oe)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Pu(r,i.changes),await _f(r.remoteStore)}catch(i){const s=q_(i,"Failed to persist write");n.reject(s)}}async function Xb(t,e){const n=H(t);try{const r=await y9(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?we(o.fc):i.removedDocuments.size>0&&(we(o.fc),o.fc=!1))}),await Pu(n,r,e)}catch(r){await ku(r)}}function JE(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=H(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&K_(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rB(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new xe(F.comparator);o=o.insert(s,Ir.newNoDocument(s,W.min()));const a=J().add(s),l=new gf(W.min(),new Map,new xe(oe),o,a);await Xb(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),G_(r)}else await Zg(r.localStore,e,!1).then(()=>ey(r,e,n)).catch(ku)}async function iB(t,e){const n=H(t),r=e.batch.batchId;try{const i=await g9(n.localStore,e);Zb(n,r,null),Jb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pu(n,i)}catch(i){await ku(i)}}async function sB(t,e,n){const r=H(t);try{const i=await function(s,o){const a=H(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(we(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Zb(r,e,n),Jb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pu(r,i)}catch(i){await ku(i)}}function Jb(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Zb(t,e,n){const r=H(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function ey(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||eN(t,r)})}function eN(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(zb(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),G_(t))}function ZE(t,e,n){for(const r of n)r instanceof Qb?(t.Ic.addReference(r.key,e),oB(t,r)):r instanceof Yb?($("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||eN(t,r.key)):B()}function oB(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||($("SyncEngine","New document in limbo: "+n),t.mc.add(r),G_(t))}function G_(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new F(ve.fromString(e)),r=t.Ac.next();t.yc.set(r,new X9(n)),t.gc=t.gc.insert(n,r),Vb(t.remoteStore,new Yr(kr(db(n.path)),r,"TargetPurposeLimboResolution",R_.ct))}}async function Pu(t,e,n){const r=H(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=B_.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=H(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>b.forEach(l,h=>b.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>b.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!xu(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,p)}}}(r.localStore,s))}async function aB(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Fb(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(I.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pu(n,r.er)}}function lB(t,e){const n=H(t),r=n.yc.get(e);if(r&&r.fc)return J().add(r.key);{let i=J();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function uB(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rB.bind(null,e),e.dc.nu=q9.bind(null,e.eventManager),e.dc.Pc=K9.bind(null,e.eventManager),e}function cB(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sB.bind(null,e),e}class eS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return m9(this.persistence,new f9,e.initialUser,this.serializer)}createPersistence(e){return new h9(j_.zs,this.serializer)}createSharedClientState(e){return new S9}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hB{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>JE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aB.bind(null,this.syncEngine),await B9(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new z9}createDatastore(e){const n=yf(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new k9(i));var i;return function(s,o,a,l){return new b9(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>JE(this.syncEngine,a,0),o=QE.D()?new QE:new C9,new A9(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new J9(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);$("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Au(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=nb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=q_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vp(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Fb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mB(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>YE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>YE(e.remoteStore,s)),t._onlineComponents=e}function pB(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mB(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!pB(n))throw n;xo("Error using user provided cache. Falling back to memory cache: "+n),await Vp(t,new eS)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Vp(t,new eS);return t._offlineComponents}async function tN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await tS(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await tS(t,new hB))),t._onlineComponents}function gB(t){return tN(t).then(e=>e.syncEngine)}async function yB(t){const e=await tN(t),n=e.eventManager;return n.onListen=Z9.bind(null,e.syncEngine),n.onUnlisten=tB.bind(null,e.syncEngine),n}function vB(t,e,n={}){const r=new ui;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new dB({next:h=>{s.enqueueAndForget(()=>H9(i,c)),h.fromCache&&a.source==="server"?l.reject(new L(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new G9(o,u,{includeMetadataChanges:!0,Ku:!0});return W9(i,c)}(await yB(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t,e,n){if(!n)throw new L(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _B(t,e,n,r){if(e===!0&&r===!0)throw new L(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rS(t){if(!F.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iS(t){if(F.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function ud(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wf(t);throw new L(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_B("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nN((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Ef{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sS(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new F5;switch(n.type){case"firstParty":return new V5(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nS.get(e);n&&($("ComponentProvider","Removing Datastore"),nS.delete(e),n.terminate())}(this),Promise.resolve()}}function wB(t,e,n,r={}){var i;const s=(t=ud(t,Ef))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&xo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=_t.MOCK_USER;else{o=SD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new _t(l)}t._authCredentials=new U5(new tb(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cn(this.firestore,e,this._key)}}class ra{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ra(this.firestore,e,this._query)}}class ci extends ra{constructor(e,n,r){super(e,n,db(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cn(this.firestore,null,new F(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function iN(t,e,...n){if(t=pt(t),rN("collection","path",e),t instanceof Ef){const r=ve.fromString(e,...n);return iS(r),new ci(t,null,r)}{if(!(t instanceof cn||t instanceof ci))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return iS(r),new ci(t.firestore,null,r)}}function EB(t,e,...n){if(t=pt(t),arguments.length===1&&(e=nb.A()),rN("doc","path",e),t instanceof Ef){const r=ve.fromString(e,...n);return rS(r),new cn(t,null,new F(r))}{if(!(t instanceof cn||t instanceof ci))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return rS(r),new cn(t.firestore,t instanceof ci?t.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SB{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new jb(this,"async_queue_retry"),this.Xc=()=>{const n=Bp();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Bp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Bp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ui;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!xu(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=H_.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&B()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Q_ extends Ef{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new SB,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aN(this),this._firestoreClient.terminate()}}function sN(t,e){const n=typeof t=="object"?t:HI(),r=typeof t=="string"?t:e||"(default)",i=su(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ED("firestore");s&&wB(i,...s)}return i}function oN(t){return t._firestoreClient||aN(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aN(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new e3(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,nN(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new fB(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oo(bt.fromBase64String(e))}catch(n){throw new L(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oo(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CB=/^__.*__$/;class TB{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new bu(e,this.data,n,this.fieldTransforms)}}function uN(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class J_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new J_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return cd(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(uN(this.ca)&&CB.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class IB{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yf(e)}ya(e,n,r,i=!1){return new J_({ca:e,methodName:n,ga:r,path:Ct.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cN(t){const e=t._freezeSettings(),n=yf(t._databaseId);return new IB(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kB(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);fN("Data must be an object, but it was:",o,r);const a=hN(r,o);let l,u;if(s.merge)l=new Cn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=RB(e,h,n);if(!o.contains(d))throw new L(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);NB(c,d)||c.push(d)}l=new Cn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new TB(new ir(a),l,u)}function xB(t,e,n,r=!1){return Z_(n,t.ya(r?4:3,e))}function Z_(t,e){if(dN(t=pt(t)))return fN("Unsupported field value:",e,t),hN(t,e);if(t instanceof lN)return function(n,r){if(!uN(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Z_(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return w3(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Xe.fromDate(n);return{timestampValue:ad(r.serializer,i)}}if(n instanceof Xe){const i=new Xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ad(r.serializer,i)}}if(n instanceof X_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Oo)return{bytesValue:Pb(r.serializer,n._byteString)};if(n instanceof cn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:F_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${wf(n)}`)}(t,e)}function hN(t,e){const n={};return rb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ea(t,(r,i)=>{const s=Z_(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dN(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof X_||t instanceof Oo||t instanceof cn||t instanceof lN)}function fN(t,e,n){if(!dN(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=wf(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function RB(t,e,n){if((e=pt(e))instanceof Y_)return e._internalPath;if(typeof e=="string")return pN(t,e);throw cd("Field path arguments must be of type string or ",t,!1,void 0,n)}const bB=new RegExp("[~\\*/\\[\\]]");function pN(t,e,n){if(e.search(bB)>=0)throw cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Y_(...e.split("."))._internalPath}catch{throw cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(I.INVALID_ARGUMENT,a+t+l)}function NB(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(e0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AB extends mN{data(){return super.data()}}function e0(t,e){return typeof e=="string"?pN(t,e):e instanceof Y_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PB(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class t0{}class OB extends t0{}function DB(t,e,...n){let r=[];e instanceof t0&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof n0).length,o=i.filter(a=>a instanceof Sf).length;if(s>1||s>0&&o>0)throw new L(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sf extends OB{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sf(e,n,r)}_apply(e){const n=this._parse(e);return gN(e._query,n),new ra(e.firestore,e.converter,qg(e._query,n))}_parse(e){const n=cN(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){aS(c,u);const d=[];for(const f of c)d.push(oS(a,i,f));h={arrayValue:{values:d}}}else h=oS(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||aS(c,u),h=xB(o,s,c,u==="in"||u==="not-in");return ze.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LB(t,e,n){const r=e,i=e0("where",t);return Sf._create(i,r,n)}class n0 extends t0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new n0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:An.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)gN(s,a),s=qg(s,a)}(e._query,n),new ra(e.firestore,e.converter,qg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function oS(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new L(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pb(e)&&n.indexOf("/")!==-1)throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!F.isDocumentKey(r))throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return NE(t,new F(r))}if(n instanceof cn)return NE(t,n._key);throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wf(n)}.`)}function aS(t,e){if(!Array.isArray(t)||t.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gN(t,e){if(e.isInequality()){const r=D_(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new L(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=fb(t);s!==null&&MB(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function MB(t,e,n){if(!n.isEqual(e))throw new L(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class $B{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ea(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new X_(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=N_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jl(e));default:return null}}convertTimestamp(e){const n=yi(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);we($b(r));const i=new Bl(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||Tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FB(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UB extends mN{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(e0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bc extends UB{data(e={}){return super.data(e)}}class jB{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mc(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bc(this._firestore,this._userDataWriter,r.key,r,new mc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Bc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new mc(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new mc(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:BB(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BB(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class VB extends $B{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new cn(this.firestore,null,n)}}function zB(t){t=ud(t,ra);const e=ud(t.firestore,Q_),n=oN(e),r=new VB(e);return PB(t._query),vB(n,t._query).then(i=>new jB(e,r,t,i))}function WB(t,e){const n=ud(t.firestore,Q_),r=EB(t),i=FB(t.converter,e);return HB(n,[kB(cN(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,pr.exists(!1))]).then(()=>r)}function HB(t,e){return function(n,r){const i=new ui;return n.asyncQueue.enqueueAndForget(async()=>nB(await gB(n),r,i)),i.promise}(oN(t),e)}(function(t,e=!0){(function(n){Zo=n})(Ar),pn(new Zt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Q_(new j5(n.getProvider("auth-internal")),new W5(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),He(IE,"3.12.0",t),He(IE,"3.12.0","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qB="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KB{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="us-central1";class GB{constructor(e,n,r,i,s=lS,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new KB(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=lS}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const uS="@firebase/functions",cS="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QB="auth-internal",YB="app-check-internal",XB="messaging-internal";function JB(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(QB),a=r.getProvider(XB),l=r.getProvider(YB);return new GB(s,o,a,l,i,t)};pn(new Zt(qB,n,"PUBLIC").setMultipleInstances(!0)),He(uS,cS,e),He(uS,cS,"esm2017")}JB(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="firebasestorage.googleapis.com",ZB="storageBucket",e6=2*60*1e3,t6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends mn{constructor(e,n,r=0){super(zp(e),`Firebase Storage: ${n} (${zp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xn||(Xn={}));function zp(t){return"storage/"+t}function n6(){const t="An unknown error occurred, please check the error payload for server response.";return new Jn(Xn.UNKNOWN,t)}function r6(){return new Jn(Xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function i6(){return new Jn(Xn.CANCELED,"User canceled the upload/download.")}function s6(t){return new Jn(Xn.INVALID_URL,"Invalid URL '"+t+"'.")}function o6(t){return new Jn(Xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hS(t){return new Jn(Xn.INVALID_ARGUMENT,t)}function vN(){return new Jn(Xn.APP_DELETED,"The Firebase app was deleted.")}function a6(t){return new Jn(Xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tn.makeFromUrl(e,n)}catch{return new Tn(e,"")}if(r.path==="")return r;throw o6(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=n===yN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",y=new RegExp(`^https?://${m}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const T=v[E],x=T.regex.exec(e);if(x){const k=x[T.indices.bucket];let O=x[T.indices.path];O||(O=""),r=new Tn(k,O),T.postModify(r);break}}if(r==null)throw s6(e);return r}}class l6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u6(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){s&&clearTimeout(s)}function f(w,...y){if(u){d();return}if(w){d(),c.call(null,w,...y);return}if(l()||o){d(),c.call(null,w,...y);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let p=!1;function m(w){p||(p=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function c6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h6(t){return t!==void 0}function dS(t,e,n,r){if(r<e)throw hS(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hS(`Invalid value for '${t}'. Expected ${n} or less.`)}function d6(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hd||(hd={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f6(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===hd.NO_ERROR,l=s.getStatus();if(!a||f6(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===hd.ABORT;r(!1,new gc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new gc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());h6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=n6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?vN():i6();o(l)}else{const l=r6();o(l)}};this.canceled_?n(!1,new gc(!1,null,!0)):this.backoffId_=u6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&c6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function m6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function g6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function y6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function v6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _6(t,e,n,r,i,s,o=!0){const a=d6(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return y6(u,e),m6(u,n),g6(u,s),v6(u,r),new p6(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function E6(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this._service=e,n instanceof Tn?this._location=n:this._location=Tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new dd(e,n)}get root(){const e=new Tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return E6(this._location.path)}get storage(){return this._service}get parent(){const e=w6(this._location.path);if(e===null)return null;const n=new Tn(this._location.bucket,e);return new dd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw a6(e)}}function fS(t,e){const n=e==null?void 0:e[ZB];return n==null?null:Tn.makeFromBucketSpec(n,t)}class S6{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=yN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=e6,this._maxUploadRetryTime=t6,this._requests=new Set,i!=null?this._bucket=Tn.makeFromBucketSpec(i,this._host):this._bucket=fS(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tn.makeFromBucketSpec(this._url,e):this._bucket=fS(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dS("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dS("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dd(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new l6(vN());{const o=_6(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const pS="@firebase/storage",mS="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C6="storage";function T6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new S6(n,r,i,e,Ar)}function I6(){pn(new Zt(C6,T6,"PUBLIC").setMultipleInstances(!0)),He(pS,mS,""),He(pS,mS,"esm2017")}I6();const k6=(t,e)=>e.some(n=>t instanceof n);let gS,yS;function x6(){return gS||(gS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R6(){return yS||(yS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _N=new WeakMap,ty=new WeakMap,wN=new WeakMap,Wp=new WeakMap,r0=new WeakMap;function b6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_N.set(n,t)}).catch(()=>{}),r0.set(e,t),e}function N6(t){if(ty.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ty.set(t,e)}let ny={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ty.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wN.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function A6(t){ny=t(ny)}function P6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hp(this),e,...n);return wN.set(r,e.sort?e.sort():[e]),hi(r)}:R6().includes(t)?function(...e){return t.apply(Hp(this),e),hi(_N.get(this))}:function(...e){return hi(t.apply(Hp(this),e))}}function O6(t){return typeof t=="function"?P6(t):(t instanceof IDBTransaction&&N6(t),k6(t,x6())?new Proxy(t,ny):t)}function hi(t){if(t instanceof IDBRequest)return b6(t);if(Wp.has(t))return Wp.get(t);const e=O6(t);return e!==t&&(Wp.set(t,e),r0.set(e,t)),e}const Hp=t=>r0.get(t);function D6(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hi(o.result),l.oldVersion,l.newVersion,hi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const L6=["get","getKey","getAll","getAllKeys","count"],M6=["put","add","delete","clear"],qp=new Map;function vS(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qp.get(e))return qp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=M6.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||L6.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qp.set(e,s),s}A6(t=>({...t,get:(e,n,r)=>vS(e,n)||t.get(e,n,r),has:(e,n)=>!!vS(e,n)||t.has(e,n)}));const EN="@firebase/installations",i0="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=1e4,CN=`w:${i0}`,TN="FIS_v2",$6="https://firebaseinstallations.googleapis.com/v1",F6=60*60*1e3,U6="installations",j6="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B6={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ls=new fs(U6,j6,B6);function IN(t){return t instanceof mn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN({projectId:t}){return`${$6}/projects/${t}/installations`}function xN(t){return{token:t.token,requestStatus:2,expiresIn:z6(t.expiresIn),creationTime:Date.now()}}async function RN(t,e){const r=(await e.json()).error;return ls.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function bN({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function V6(t,{refreshToken:e}){const n=bN(t);return n.append("Authorization",W6(e)),n}async function NN(t){const e=await t();return e.status>=500&&e.status<600?t():e}function z6(t){return Number(t.replace("s","000"))}function W6(t){return`${TN} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H6({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=kN(t),i=bN(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:TN,appId:t.appId,sdkVersion:CN},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await NN(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:xN(u.authToken)}}else throw await RN("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q6(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K6=/^[cdef][\w-]{21}$/,ry="";function G6(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Q6(t);return K6.test(n)?n:ry}catch{return ry}}function Q6(t){return q6(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=new Map;function ON(t,e){const n=Cf(t);DN(n,e),Y6(n,e)}function DN(t,e){const n=PN.get(t);if(n)for(const r of n)r(e)}function Y6(t,e){const n=X6();n&&n.postMessage({key:t,fid:e}),J6()}let ji=null;function X6(){return!ji&&"BroadcastChannel"in self&&(ji=new BroadcastChannel("[Firebase] FID Change"),ji.onmessage=t=>{DN(t.data.key,t.data.fid)}),ji}function J6(){PN.size===0&&ji&&(ji.close(),ji=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z6="firebase-installations-database",eV=1,us="firebase-installations-store";let Kp=null;function s0(){return Kp||(Kp=D6(Z6,eV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(us)}}})),Kp}async function fd(t,e){const n=Cf(t),i=(await s0()).transaction(us,"readwrite"),s=i.objectStore(us),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ON(t,e.fid),e}async function LN(t){const e=Cf(t),r=(await s0()).transaction(us,"readwrite");await r.objectStore(us).delete(e),await r.done}async function Tf(t,e){const n=Cf(t),i=(await s0()).transaction(us,"readwrite"),s=i.objectStore(us),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ON(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t){let e;const n=await Tf(t.appConfig,r=>{const i=tV(r),s=nV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ry?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tV(t){const e=t||{fid:G6(),registrationStatus:0};return MN(e)}function nV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ls.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iV(t)}:{installationEntry:e}}async function rV(t,e){try{const n=await H6(t,e);return fd(t.appConfig,n)}catch(n){throw IN(n)&&n.customData.serverCode===409?await LN(t.appConfig):await fd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iV(t){let e=await _S(t.appConfig);for(;e.registrationStatus===1;)await AN(100),e=await _S(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await o0(t);return r||n}return e}function _S(t){return Tf(t,e=>{if(!e)throw ls.create("installation-not-found");return MN(e)})}function MN(t){return sV(t)?{fid:t.fid,registrationStatus:0}:t}function sV(t){return t.registrationStatus===1&&t.registrationTime+SN<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oV({appConfig:t,heartbeatServiceProvider:e},n){const r=aV(t,n),i=V6(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:CN,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await NN(()=>fetch(r,a));if(l.ok){const u=await l.json();return xN(u)}else throw await RN("Generate Auth Token",l)}function aV(t,{fid:e}){return`${kN(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e=!1){let n;const r=await Tf(t.appConfig,s=>{if(!$N(s))throw ls.create("not-registered");const o=s.authToken;if(!e&&cV(o))return s;if(o.requestStatus===1)return n=lV(t,e),s;{if(!navigator.onLine)throw ls.create("app-offline");const a=dV(s);return n=uV(t,a),a}});return n?await n:r.authToken}async function lV(t,e){let n=await wS(t.appConfig);for(;n.authToken.requestStatus===1;)await AN(100),n=await wS(t.appConfig);const r=n.authToken;return r.requestStatus===0?a0(t,e):r}function wS(t){return Tf(t,e=>{if(!$N(e))throw ls.create("not-registered");const n=e.authToken;return fV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uV(t,e){try{const n=await oV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await fd(t.appConfig,r),n}catch(n){if(IN(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await LN(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fd(t.appConfig,r)}throw n}}function $N(t){return t!==void 0&&t.registrationStatus===2}function cV(t){return t.requestStatus===2&&!hV(t)}function hV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+F6}function dV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function fV(t){return t.requestStatus===1&&t.requestTime+SN<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pV(t){const e=t,{installationEntry:n,registrationPromise:r}=await o0(e);return r?r.catch(console.error):a0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mV(t,e=!1){const n=t;return await gV(n),(await a0(n,e)).token}async function gV(t){const{registrationPromise:e}=await o0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t){if(!t||!t.options)throw Gp("App Configuration");if(!t.name)throw Gp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Gp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Gp(t){return ls.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN="installations",vV="installations-internal",_V=t=>{const e=t.getProvider("app").getImmediate(),n=yV(e),r=su(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wV=t=>{const e=t.getProvider("app").getImmediate(),n=su(e,FN).getImmediate();return{getId:()=>pV(n),getToken:i=>mV(n,i)}};function EV(){pn(new Zt(FN,_V,"PUBLIC")),pn(new Zt(vV,wV,"PRIVATE"))}EV();He(EN,i0);He(EN,i0,"esm2017");const Qp="@firebase/remote-config",ES="0.4.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV="remote-config";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},$t=new fs("remoteconfig","Remote Config",CV);function TV(t){const e=pt(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(t=navigator){return t.languages&&t.languages[0]||t.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:kV()},l={method:"POST",headers:o,body:JSON.stringify(a)},u=fetch(s,l),c=new Promise((w,y)=>{e.signal.addEventListener(()=>{const g=new Error("The operation was aborted.");g.name="AbortError",y(g)})});let h;try{await Promise.race([u,c]),h=await u}catch(w){let y="fetch-client-network";throw(w==null?void 0:w.name)==="AbortError"&&(y="fetch-timeout"),$t.create(y,{originalErrorMessage:w==null?void 0:w.message})}let d=h.status;const f=h.headers.get("ETag")||void 0;let p,m;if(h.status===200){let w;try{w=await h.json()}catch(y){throw $t.create("fetch-client-parse",{originalErrorMessage:y==null?void 0:y.message})}p=w.entries,m=w.state}if(m==="INSTANCE_STATE_UNSPECIFIED"?d=500:m==="NO_CHANGE"?d=304:(m==="NO_TEMPLATE"||m==="EMPTY_CONFIG")&&(p={}),d!==304&&d!==200)throw $t.create("fetch-status",{httpStatus:d});return{status:d,eTag:f,config:p}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bV(t){if(!(t instanceof mn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class NV{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await RV(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!bV(i))throw i;const s={throttleEndTimeMillis:Date.now()+jD(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV=60*1e3,PV=12*60*60*1e3;class OV{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:AV,minimumFetchIntervalMillis:PV},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t,e){const n=t.target.error||void 0;return $t.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const Ai="app_namespace_store",DV="firebase_remote_config",LV=1;function MV(){return new Promise((t,e)=>{try{const n=indexedDB.open(DV,LV);n.onerror=r=>{e(Vc(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Ai,{keyPath:"compositeKey"})}}}catch(n){e($t.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class $V{constructor(e,n,r,i=MV()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Ai],"readonly").objectStore(Ai),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=u=>{i(Vc(u,"storage-get"))},l.onsuccess=u=>{const c=u.target.result;r(c?c.value:void 0)}}catch(l){i($t.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([Ai],"readwrite").objectStore(Ai),l=this.createCompositeKey(e);try{const u=a.put({compositeKey:l,value:n});u.onerror=c=>{s(Vc(c,"storage-set"))},u.onsuccess=()=>{i()}}catch(u){s($t.create("storage-set",{originalErrorMessage:u==null?void 0:u.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Ai],"readwrite").objectStore(Ai),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=u=>{i(Vc(u,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i($t.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(){pn(new Zt(SV,t,"PUBLIC").setMultipleInstances(!0)),He(Qp,ES),He(Qp,ES,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw $t.create("registration-window");if(!jI())throw $t.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw $t.create("registration-project-id");if(!o)throw $t.create("registration-api-key");if(!a)throw $t.create("registration-app-id");n=n||"firebase";const l=new $V(a,r.name,n),u=new FV(l),c=new iu(Qp);c.logLevel=te.ERROR;const h=new xV(i,Ar,n,s,o,a),d=new NV(h,l),f=new IV(d,l,u,c),p=new OV(r,f,u,l,c);return TV(p),p}}UV();var iy=function(t,e){return iy=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},iy(t,e)};function Or(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");iy(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function sy(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Hl(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function ql(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function mr(t){return typeof t=="function"}function l0(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Yp=l0(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function pd(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ou=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=sy(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(m){e={error:m}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(mr(c))try{c()}catch(m){s=m instanceof Yp?m.errors:[m]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=sy(h),f=d.next();!f.done;f=d.next()){var p=f.value;try{SS(p)}catch(m){s=s??[],m instanceof Yp?s=ql(ql([],Hl(s)),Hl(m.errors)):s.push(m)}}}catch(m){r={error:m}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new Yp(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)SS(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&pd(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&pd(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),UN=Ou.EMPTY;function jN(t){return t instanceof Ou||t&&"closed"in t&&mr(t.remove)&&mr(t.add)&&mr(t.unsubscribe)}function SS(t){mr(t)?t():t.unsubscribe()}var BN={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},jV={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,ql([t,e],Hl(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function BV(t){jV.setTimeout(function(){throw t})}function CS(){}function zc(t){t()}var u0=function(t){Or(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,jN(n)&&n.add(r)):r.destination=HV,r}return e.create=function(n,r,i){return new oy(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ou),VV=Function.prototype.bind;function Xp(t,e){return VV.call(t,e)}var zV=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){yc(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){yc(r)}else yc(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){yc(n)}},t}(),oy=function(t){Or(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(mr(n)||!n)o={next:n??void 0,error:r??void 0,complete:i??void 0};else{var a;s&&BN.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&Xp(n.next,a),error:n.error&&Xp(n.error,a),complete:n.complete&&Xp(n.complete,a)}):o=n}return s.destination=new zV(o),s}return e}(u0);function yc(t){BV(t)}function WV(t){throw t}var HV={closed:!0,next:CS,error:WV,complete:CS},qV=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function KV(t){return t}function GV(t){return t.length===0?KV:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var TS=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=YV(e)?e:new oy(e,n,r);return zc(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=IS(n),new n(function(i,s){var o=new oy({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[qV]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return GV(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=IS(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function IS(t){var e;return(e=t??BN.Promise)!==null&&e!==void 0?e:Promise}function QV(t){return t&&mr(t.next)&&mr(t.error)&&mr(t.complete)}function YV(t){return t&&t instanceof u0||QV(t)&&jN(t)}(function(t){Or(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(u0);var XV=l0(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),VN=function(t){Or(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new kS(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new XV},e.prototype.next=function(n){var r=this;zc(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=sy(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;zc(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;zc(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?UN:(this.currentObservers=null,a.push(n),new Ou(function(){r.currentObservers=null,pd(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new TS;return n.source=this,n},e.create=function(n,r){return new kS(n,r)},e}(TS),kS=function(t){Or(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:UN},e}(VN),c0={now:function(){return(c0.delegate||Date).now()},delegate:void 0};(function(t){Or(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=c0);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e})(VN);var JV=function(t){Or(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Ou),ay={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=ay.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,ql([t,e],Hl(n))):setInterval.apply(void 0,ql([t,e],Hl(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},ZV=function(t){Or(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),ay.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;ay.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,pd(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(JV),xS=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=c0.now,t}(),ez=function(t){Or(e,t);function e(n,r){r===void 0&&(r=xS.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(xS);new ez(ZV);l0(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});const tz="[DEFAULT]",zN=C.createContext(void 0),nz=C.createContext(!1),rz="4.2.2",iz=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function sz(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=C.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=$L().find(o=>o.name===(n||tz));if(s){if(e&&iz(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=C.version||"unknown";return He("react",o),He("reactfire",rz),Fd(e,n)}},[t.firebaseApp,e,n]);return C.createElement(zN.Provider,{value:i},C.createElement(nz.Provider,Object.assign({value:r??!1},t)))}function oz(){const t=C.useContext(zN);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii,Pi;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Pi||(Pi={}));Object.freeze((Ii={},Ii[Pi.added]=Ej,Ii[Pi.removed]=Tj,Ii[Pi.changed]=Sj,Ii[Pi.moved]=Cj,Ii[Pi.value]=wj,Ii));const az=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=az);const lz=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=lz);const uz=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=uz);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);const WN={apiKey:"AIzaSyAwJ1U8as9NX4-waHAIVwOSm1gJuJJtpSM",authDomain:"full-stack-68510.firebaseapp.com",projectId:"full-stack-68510",storageBucket:"full-stack-68510.appspot.com",messagingSenderId:"293714926876",appId:"1:293714926876:web:745e2e38a9d8e4ec15aed9"},cz=Fd(WN);sN(cz);const HN=C.createContext(),hz=({reducer:t,initialState:e,children:n})=>_.jsx(HN.Provider,{value:C.useReducer(t,e),children:n}),Ti=()=>C.useContext(HN);var h0={},qN={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(qN);var d0=qN.exports,Jp={};function X(){return X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},X.apply(this,arguments)}function Ps(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function KN(t){if(!Ps(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=KN(t[n])}),e}function gr(t,e,n={clone:!0}){const r=n.clone?X({},t):t;return Ps(t)&&Ps(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(Ps(e[i])&&i in t&&Ps(t[i])?r[i]=gr(t[i],e[i],n):n.clone?r[i]=Ps(e[i])?KN(e[i]):e[i]:r[i]=e[i])}),r}function Do(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function Gn(t){if(typeof t!="string")throw new Error(Do(7));return t.charAt(0).toUpperCase()+t.slice(1)}function dz(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function fz(t,e=166){let n;function r(...i){const s=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(s,e)}return r.clear=()=>{clearTimeout(n)},r}function pz(t,e){return()=>null}function mz(t,e){return C.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function GN(t){return t&&t.ownerDocument||document}function gz(t){return GN(t).defaultView||window}function yz(t,e){return()=>null}function QN(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const vz=typeof window<"u"?C.useLayoutEffect:C.useEffect,YN=vz;let RS=0;function _z(t){const[e,n]=C.useState(t),r=t||e;return C.useEffect(()=>{e==null&&(RS+=1,n(`mui-${RS}`))},[e]),r}const bS=om["useId"];function wz(t){if(bS!==void 0){const e=bS();return t??e}return _z(t)}function Ez(t,e,n,r,i){return null}function Sz({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=C.useRef(t!==void 0),[s,o]=C.useState(e),a=i?t:s,l=C.useCallback(u=>{i||o(u)},[]);return[a,l]}function Cz(t){const e=C.useRef(t);return YN(()=>{e.current=t}),C.useCallback((...n)=>(0,e.current)(...n),[])}function Tz(...t){return C.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{QN(n,e)})},t)}let If=!0,ly=!1,NS;const Iz={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function kz(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&Iz[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function xz(t){t.metaKey||t.altKey||t.ctrlKey||(If=!0)}function Zp(){If=!1}function Rz(){this.visibilityState==="hidden"&&ly&&(If=!0)}function bz(t){t.addEventListener("keydown",xz,!0),t.addEventListener("mousedown",Zp,!0),t.addEventListener("pointerdown",Zp,!0),t.addEventListener("touchstart",Zp,!0),t.addEventListener("visibilitychange",Rz,!0)}function Nz(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return If||kz(e)}function Az(){const t=C.useCallback(i=>{i!=null&&bz(i.ownerDocument)},[]),e=C.useRef(!1);function n(){return e.current?(ly=!0,window.clearTimeout(NS),NS=window.setTimeout(()=>{ly=!1},100),e.current=!1,!0):!1}function r(i){return Nz(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function XN(t,e){const n=X({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=X({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},s=e[r];n[r]={},!s||!Object.keys(s)?n[r]=i:!i||!Object.keys(i)?n[r]=s:(n[r]=X({},s),Object.keys(i).forEach(o=>{n[r][o]=XN(i[o],s[o])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function Pz(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>{if(o){const a=e(o);a!==""&&s.push(a),n&&n[o]&&s.push(n[o])}return s},[]).join(" ")}),r}const AS=t=>t,Oz=()=>{let t=AS;return{configure(e){t=e},generate(e){return t(e)},reset(){t=AS}}},Dz=Oz(),JN=Dz,Lz={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function ZN(t,e,n="Mui"){const r=Lz[e];return r?`${n}-${r}`:`${JN.generate(t)}-${e}`}function Mz(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=ZN(t,i,n)}),r}function Dr(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eA(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=eA(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function $z(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=eA(t))&&(r&&(r+=" "),r+=e);return r}function tA(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Fz=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Uz=tA(function(t){return Fz.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function jz(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Bz(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Vz=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Bz(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=jz(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),vt="-ms-",md="-moz-",ie="-webkit-",nA="comm",f0="rule",p0="decl",zz="@import",rA="@keyframes",Wz="@layer",Hz=Math.abs,kf=String.fromCharCode,qz=Object.assign;function Kz(t,e){return ut(t,0)^45?(((e<<2^ut(t,0))<<2^ut(t,1))<<2^ut(t,2))<<2^ut(t,3):0}function iA(t){return t.trim()}function Gz(t,e){return(t=e.exec(t))?t[0]:t}function se(t,e,n){return t.replace(e,n)}function uy(t,e){return t.indexOf(e)}function ut(t,e){return t.charCodeAt(e)|0}function Kl(t,e,n){return t.slice(e,n)}function Mn(t){return t.length}function m0(t){return t.length}function vc(t,e){return e.push(t),t}function Qz(t,e){return t.map(e).join("")}var xf=1,Lo=1,sA=0,Ht=0,Be=0,ia="";function Rf(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:xf,column:Lo,length:o,return:""}}function Sa(t,e){return qz(Rf("",null,null,"",null,null,0),t,{length:-t.length},e)}function Yz(){return Be}function Xz(){return Be=Ht>0?ut(ia,--Ht):0,Lo--,Be===10&&(Lo=1,xf--),Be}function Xt(){return Be=Ht<sA?ut(ia,Ht++):0,Lo++,Be===10&&(Lo=1,xf++),Be}function Qn(){return ut(ia,Ht)}function Wc(){return Ht}function Du(t,e){return Kl(ia,t,e)}function Gl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oA(t){return xf=Lo=1,sA=Mn(ia=t),Ht=0,[]}function aA(t){return ia="",t}function Hc(t){return iA(Du(Ht-1,cy(t===91?t+2:t===40?t+1:t)))}function Jz(t){for(;(Be=Qn())&&Be<33;)Xt();return Gl(t)>2||Gl(Be)>3?"":" "}function Zz(t,e){for(;--e&&Xt()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Du(t,Wc()+(e<6&&Qn()==32&&Xt()==32))}function cy(t){for(;Xt();)switch(Be){case t:return Ht;case 34:case 39:t!==34&&t!==39&&cy(Be);break;case 40:t===41&&cy(t);break;case 92:Xt();break}return Ht}function eW(t,e){for(;Xt()&&t+Be!==47+10;)if(t+Be===42+42&&Qn()===47)break;return"/*"+Du(e,Ht-1)+"*"+kf(t===47?t:Xt())}function tW(t){for(;!Gl(Qn());)Xt();return Du(t,Ht)}function nW(t){return aA(qc("",null,null,null,[""],t=oA(t),0,[0],t))}function qc(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,f=0,p=0,m=1,w=1,y=1,g=0,v="",E=i,T=s,x=r,k=v;w;)switch(p=g,g=Xt()){case 40:if(p!=108&&ut(k,h-1)==58){uy(k+=se(Hc(g),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:k+=Hc(g);break;case 9:case 10:case 13:case 32:k+=Jz(p);break;case 92:k+=Zz(Wc()-1,7);continue;case 47:switch(Qn()){case 42:case 47:vc(rW(eW(Xt(),Wc()),e,n),l);break;default:k+="/"}break;case 123*m:a[u++]=Mn(k)*y;case 125*m:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+c:y==-1&&(k=se(k,/\f/g,"")),f>0&&Mn(k)-h&&vc(f>32?OS(k+";",r,n,h-1):OS(se(k," ","")+";",r,n,h-2),l);break;case 59:k+=";";default:if(vc(x=PS(k,e,n,u,c,i,a,v,E=[],T=[],h),s),g===123)if(c===0)qc(k,e,x,x,E,s,h,a,T);else switch(d===99&&ut(k,3)===110?100:d){case 100:case 108:case 109:case 115:qc(t,x,x,r&&vc(PS(t,x,x,0,0,i,a,v,i,E=[],h),T),i,T,h,a,r?E:T);break;default:qc(k,x,x,x,[""],T,0,a,T)}}u=c=f=0,m=y=1,v=k="",h=o;break;case 58:h=1+Mn(k),f=p;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&Xz()==125)continue}switch(k+=kf(g),g*m){case 38:y=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(Mn(k)-1)*y,y=1;break;case 64:Qn()===45&&(k+=Hc(Xt())),d=Qn(),c=h=Mn(v=k+=tW(Wc())),g++;break;case 45:p===45&&Mn(k)==2&&(m=0)}}return s}function PS(t,e,n,r,i,s,o,a,l,u,c){for(var h=i-1,d=i===0?s:[""],f=m0(d),p=0,m=0,w=0;p<r;++p)for(var y=0,g=Kl(t,h+1,h=Hz(m=o[p])),v=t;y<f;++y)(v=iA(m>0?d[y]+" "+g:se(g,/&\f/g,d[y])))&&(l[w++]=v);return Rf(t,e,n,i===0?f0:a,l,u,c)}function rW(t,e,n){return Rf(t,e,n,nA,kf(Yz()),Kl(t,2,-2),0)}function OS(t,e,n,r){return Rf(t,e,n,p0,Kl(t,0,r),Kl(t,r+1,-1),r)}function ho(t,e){for(var n="",r=m0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function iW(t,e,n,r){switch(t.type){case Wz:if(t.children.length)break;case zz:case p0:return t.return=t.return||t.value;case nA:return"";case rA:return t.return=t.value+"{"+ho(t.children,r)+"}";case f0:t.value=t.props.join(",")}return Mn(n=ho(t.children,r))?t.return=t.value+"{"+n+"}":""}function sW(t){var e=m0(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function oW(t){return function(e){e.root||(e=e.return)&&t(e)}}var aW=function(e,n,r){for(var i=0,s=0;i=s,s=Qn(),i===38&&s===12&&(n[r]=1),!Gl(s);)Xt();return Du(e,Ht)},lW=function(e,n){var r=-1,i=44;do switch(Gl(i)){case 0:i===38&&Qn()===12&&(n[r]=1),e[r]+=aW(Ht-1,n,r);break;case 2:e[r]+=Hc(i);break;case 4:if(i===44){e[++r]=Qn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=kf(i)}while(i=Xt());return e},uW=function(e,n){return aA(lW(oA(e),n))},DS=new WeakMap,cW=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!DS.get(r))&&!i){DS.set(e,!0);for(var s=[],o=uW(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},hW=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function lA(t,e){switch(Kz(t,e)){case 5103:return ie+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+t+md+t+vt+t+t;case 6828:case 4268:return ie+t+vt+t+t;case 6165:return ie+t+vt+"flex-"+t+t;case 5187:return ie+t+se(t,/(\w+).+(:[^]+)/,ie+"box-$1$2"+vt+"flex-$1$2")+t;case 5443:return ie+t+vt+"flex-item-"+se(t,/flex-|-self/,"")+t;case 4675:return ie+t+vt+"flex-line-pack"+se(t,/align-content|flex-|-self/,"")+t;case 5548:return ie+t+vt+se(t,"shrink","negative")+t;case 5292:return ie+t+vt+se(t,"basis","preferred-size")+t;case 6060:return ie+"box-"+se(t,"-grow","")+ie+t+vt+se(t,"grow","positive")+t;case 4554:return ie+se(t,/([^-])(transform)/g,"$1"+ie+"$2")+t;case 6187:return se(se(se(t,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),t,"")+t;case 5495:case 3959:return se(t,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return se(se(t,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+t+t;case 4095:case 3583:case 4068:case 2532:return se(t,/(.+)-inline(.+)/,ie+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mn(t)-1-e>6)switch(ut(t,e+1)){case 109:if(ut(t,e+4)!==45)break;case 102:return se(t,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+md+(ut(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~uy(t,"stretch")?lA(se(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ut(t,e+1)!==115)break;case 6444:switch(ut(t,Mn(t)-3-(~uy(t,"!important")&&10))){case 107:return se(t,":",":"+ie)+t;case 101:return se(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ie+(ut(t,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+vt+"$2box$3")+t}break;case 5936:switch(ut(t,e+11)){case 114:return ie+t+vt+se(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ie+t+vt+se(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ie+t+vt+se(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ie+t+vt+t+t}return t}var dW=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case p0:e.return=lA(e.value,e.length);break;case rA:return ho([Sa(e,{value:se(e.value,"@","@"+ie)})],i);case f0:if(e.length)return Qz(e.props,function(s){switch(Gz(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ho([Sa(e,{props:[se(s,/:(read-\w+)/,":"+md+"$1")]})],i);case"::placeholder":return ho([Sa(e,{props:[se(s,/:(plac\w+)/,":"+ie+"input-$1")]}),Sa(e,{props:[se(s,/:(plac\w+)/,":"+md+"$1")]}),Sa(e,{props:[se(s,/:(plac\w+)/,vt+"input-$1")]})],i)}return""})}},fW=[dW],pW=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var w=m.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||fW,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var w=m.getAttribute("data-emotion").split(" "),y=1;y<w.length;y++)s[w[y]]=!0;a.push(m)});var l,u=[cW,hW];{var c,h=[iW,oW(function(m){c.insert(m)})],d=sW(u.concat(i,h)),f=function(w){return ho(nW(w),d)};l=function(w,y,g,v){c=g,f(w?w+"{"+y.styles+"}":y.styles),v&&(p.inserted[y.name]=!0)}}var p={key:n,sheet:new Vz({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return p.sheet.hydrate(a),p},mW=!0;function gW(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var uA=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||mW===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},yW=function(e,n,r){uA(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function vW(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var _W={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wW=/[A-Z]|^ms/g,EW=/_EMO_([^_]+?)_([^]*?)_EMO_/g,cA=function(e){return e.charCodeAt(1)===45},LS=function(e){return e!=null&&typeof e!="boolean"},em=tA(function(t){return cA(t)?t:t.replace(wW,"-$&").toLowerCase()}),MS=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(EW,function(r,i,s){return $n={name:i,styles:s,next:$n},i})}return _W[e]!==1&&!cA(e)&&typeof n=="number"&&n!==0?n+"px":n};function Ql(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return $n={name:n.name,styles:n.styles,next:$n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)$n={name:r.name,styles:r.styles,next:$n},r=r.next;var i=n.styles+";";return i}return SW(t,e,n)}case"function":{if(t!==void 0){var s=$n,o=n(t);return $n=s,Ql(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function SW(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ql(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":LS(o)&&(r+=em(s)+":"+MS(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)LS(o[a])&&(r+=em(s)+":"+MS(s,o[a])+";");else{var l=Ql(t,e,o);switch(s){case"animation":case"animationName":{r+=em(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var $S=/label:\s*([^\s;\n{]+)\s*(;|$)/g,$n,CW=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";$n=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Ql(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Ql(r,n,e[a]),i&&(s+=o[a]);$S.lastIndex=0;for(var l="",u;(u=$S.exec(s))!==null;)l+="-"+u[1];var c=vW(s)+l;return{name:c,styles:s,next:$n}},TW=function(e){return e()},IW=om["useInsertionEffect"]?om["useInsertionEffect"]:!1,kW=IW||TW,hA=C.createContext(typeof HTMLElement<"u"?pW({key:"css"}):null);hA.Provider;var xW=function(e){return C.forwardRef(function(n,r){var i=C.useContext(hA);return e(n,i,r)})},dA=C.createContext({}),RW=Uz,bW=function(e){return e!=="theme"},FS=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?RW:bW},US=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},NW=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return uA(n,r,i),kW(function(){return yW(n,r,i)}),null},AW=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=US(e,n,r),l=a||FS(i),u=!l("as");return function(){var c=arguments,h=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)h.push.apply(h,c);else{h.push(c[0][0]);for(var d=c.length,f=1;f<d;f++)h.push(c[f],c[0][f])}var p=xW(function(m,w,y){var g=u&&m.as||i,v="",E=[],T=m;if(m.theme==null){T={};for(var x in m)T[x]=m[x];T.theme=C.useContext(dA)}typeof m.className=="string"?v=gW(w.registered,E,m.className):m.className!=null&&(v=m.className+" ");var k=CW(h.concat(E),w.registered,T);v+=w.key+"-"+k.name,o!==void 0&&(v+=" "+o);var O=u&&a===void 0?FS(g):l,K={};for(var M in m)u&&M==="as"||O(M)&&(K[M]=m[M]);return K.className=v,K.ref=y,C.createElement(C.Fragment,null,C.createElement(NW,{cache:w,serialized:k,isStringTag:typeof g=="string"}),C.createElement(g,K))});return p.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=e.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=h,p.__emotion_forwardProp=a,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(m,w){return t(m,X({},n,w,{shouldForwardProp:US(p,w,!0)})).apply(void 0,h)},p}},PW=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],hy=AW.bind();PW.forEach(function(t){hy[t]=hy(t)});/**
 * @mui/styled-engine v5.12.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function OW(t,e){return hy(t,e)}const DW=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},LW=["values","unit","step"],MW=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>X({},n,{[r.key]:r.val}),{})};function $W(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Dr(t,LW),s=MW(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function u(d,f){const p=o.indexOf(f);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(p!==-1&&typeof e[o[p]]=="number"?e[o[p]]:f)-r/100}${n})`}function c(d){return o.indexOf(d)+1<o.length?u(d,o[o.indexOf(d)+1]):a(d)}function h(d){const f=o.indexOf(d);return f===0?a(o[1]):f===o.length-1?l(o[f]):u(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return X({keys:o,values:s,up:a,down:l,between:u,only:c,not:h,unit:n},i)}const FW={borderRadius:4},UW=FW;function tl(t,e){return e?gr(t,e,{clone:!1}):t}const g0={xs:0,sm:600,md:900,lg:1200,xl:1536},jS={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${g0[t]}px)`};function Rr(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||jS;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=n(e[l]),o),{})}if(typeof e=="object"){const s=r.breakpoints||jS;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||g0).indexOf(a)!==-1){const l=s.up(a);o[l]=n(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return n(e)}function jW(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function BW(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function bf(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function gd(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=bf(t,n)||r,e&&(i=e(i,r,t)),i}function le(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,u=bf(l,r)||{};return Rr(o,a,h=>{let d=gd(u,i,h);return h===d&&typeof h=="string"&&(d=gd(u,i,`${e}${h==="default"?"":Gn(h)}`,h)),n===!1?d:{[n]:d}})};return s.propTypes={},s.filterProps=[e],s}function VW(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const zW={m:"margin",p:"padding"},WW={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},BS={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},HW=VW(t=>{if(t.length>2)if(BS[t])t=BS[t];else return[t];const[e,n]=t.split(""),r=zW[e],i=WW[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),y0=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],v0=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...y0,...v0];function Lu(t,e,n,r){var i;const s=(i=bf(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function fA(t){return Lu(t,"spacing",8)}function Mu(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function qW(t,e){return n=>t.reduce((r,i)=>(r[i]=Mu(e,n),r),{})}function KW(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=HW(n),s=qW(i,r),o=t[n];return Rr(t,o,s)}function pA(t,e){const n=fA(t.theme);return Object.keys(t).map(r=>KW(t,e,r,n)).reduce(tl,{})}function Ne(t){return pA(t,y0)}Ne.propTypes={};Ne.filterProps=y0;function Ae(t){return pA(t,v0)}Ae.propTypes={};Ae.filterProps=v0;function GW(t=8){if(t.mui)return t;const e=fA({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function Nf(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?tl(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function jn(t){return typeof t!="number"?t:`${t}px solid`}const QW=le({prop:"border",themeKey:"borders",transform:jn}),YW=le({prop:"borderTop",themeKey:"borders",transform:jn}),XW=le({prop:"borderRight",themeKey:"borders",transform:jn}),JW=le({prop:"borderBottom",themeKey:"borders",transform:jn}),ZW=le({prop:"borderLeft",themeKey:"borders",transform:jn}),eH=le({prop:"borderColor",themeKey:"palette"}),tH=le({prop:"borderTopColor",themeKey:"palette"}),nH=le({prop:"borderRightColor",themeKey:"palette"}),rH=le({prop:"borderBottomColor",themeKey:"palette"}),iH=le({prop:"borderLeftColor",themeKey:"palette"}),Af=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Lu(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Mu(e,r)});return Rr(t,t.borderRadius,n)}return null};Af.propTypes={};Af.filterProps=["borderRadius"];Nf(QW,YW,XW,JW,ZW,eH,tH,nH,rH,iH,Af);const Pf=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Lu(t.theme,"spacing",8),n=r=>({gap:Mu(e,r)});return Rr(t,t.gap,n)}return null};Pf.propTypes={};Pf.filterProps=["gap"];const Of=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Lu(t.theme,"spacing",8),n=r=>({columnGap:Mu(e,r)});return Rr(t,t.columnGap,n)}return null};Of.propTypes={};Of.filterProps=["columnGap"];const Df=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Lu(t.theme,"spacing",8),n=r=>({rowGap:Mu(e,r)});return Rr(t,t.rowGap,n)}return null};Df.propTypes={};Df.filterProps=["rowGap"];const sH=le({prop:"gridColumn"}),oH=le({prop:"gridRow"}),aH=le({prop:"gridAutoFlow"}),lH=le({prop:"gridAutoColumns"}),uH=le({prop:"gridAutoRows"}),cH=le({prop:"gridTemplateColumns"}),hH=le({prop:"gridTemplateRows"}),dH=le({prop:"gridTemplateAreas"}),fH=le({prop:"gridArea"});Nf(Pf,Of,Df,sH,oH,aH,lH,uH,cH,hH,dH,fH);function fo(t,e){return e==="grey"?e:t}const pH=le({prop:"color",themeKey:"palette",transform:fo}),mH=le({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:fo}),gH=le({prop:"backgroundColor",themeKey:"palette",transform:fo});Nf(pH,mH,gH);function Kt(t){return t<=1&&t!==0?`${t*100}%`:t}const yH=le({prop:"width",transform:Kt}),_0=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,s;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(s=i.values)==null?void 0:s[n])||g0[n]||Kt(n)}};return Rr(t,t.maxWidth,e)}return null};_0.filterProps=["maxWidth"];const vH=le({prop:"minWidth",transform:Kt}),_H=le({prop:"height",transform:Kt}),wH=le({prop:"maxHeight",transform:Kt}),EH=le({prop:"minHeight",transform:Kt});le({prop:"size",cssProperty:"width",transform:Kt});le({prop:"size",cssProperty:"height",transform:Kt});const SH=le({prop:"boxSizing"});Nf(yH,_0,vH,_H,wH,EH,SH);const CH={border:{themeKey:"borders",transform:jn},borderTop:{themeKey:"borders",transform:jn},borderRight:{themeKey:"borders",transform:jn},borderBottom:{themeKey:"borders",transform:jn},borderLeft:{themeKey:"borders",transform:jn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Af},color:{themeKey:"palette",transform:fo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:fo},backgroundColor:{themeKey:"palette",transform:fo},p:{style:Ae},pt:{style:Ae},pr:{style:Ae},pb:{style:Ae},pl:{style:Ae},px:{style:Ae},py:{style:Ae},padding:{style:Ae},paddingTop:{style:Ae},paddingRight:{style:Ae},paddingBottom:{style:Ae},paddingLeft:{style:Ae},paddingX:{style:Ae},paddingY:{style:Ae},paddingInline:{style:Ae},paddingInlineStart:{style:Ae},paddingInlineEnd:{style:Ae},paddingBlock:{style:Ae},paddingBlockStart:{style:Ae},paddingBlockEnd:{style:Ae},m:{style:Ne},mt:{style:Ne},mr:{style:Ne},mb:{style:Ne},ml:{style:Ne},mx:{style:Ne},my:{style:Ne},margin:{style:Ne},marginTop:{style:Ne},marginRight:{style:Ne},marginBottom:{style:Ne},marginLeft:{style:Ne},marginX:{style:Ne},marginY:{style:Ne},marginInline:{style:Ne},marginInlineStart:{style:Ne},marginInlineEnd:{style:Ne},marginBlock:{style:Ne},marginBlockStart:{style:Ne},marginBlockEnd:{style:Ne},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Pf},rowGap:{style:Df},columnGap:{style:Of},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Kt},maxWidth:{style:_0},minWidth:{transform:Kt},height:{transform:Kt},maxHeight:{transform:Kt},minHeight:{transform:Kt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},w0=CH;function TH(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function IH(t,e){return typeof t=="function"?t(e):t}function kH(){function t(n,r,i,s){const o={[n]:r,theme:i},a=s[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:c,style:h}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const d=bf(i,u)||{};return h?h(o):Rr(o,r,p=>{let m=gd(d,c,p);return p===m&&typeof p=="string"&&(m=gd(d,c,`${n}${p==="default"?"":Gn(p)}`,p)),l===!1?m:{[l]:m}})}function e(n){var r;const{sx:i,theme:s={}}=n||{};if(!i)return null;const o=(r=s.unstable_sxConfig)!=null?r:w0;function a(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const c=jW(s.breakpoints),h=Object.keys(c);let d=c;return Object.keys(u).forEach(f=>{const p=IH(u[f],s);if(p!=null)if(typeof p=="object")if(o[f])d=tl(d,t(f,p,s,o));else{const m=Rr({theme:s},p,w=>({[f]:w}));TH(m,p)?d[f]=e({sx:p,theme:s}):d=tl(d,m)}else d=tl(d,t(f,p,s,o))}),BW(h,d)}return Array.isArray(i)?i.map(a):a(i)}return e}const mA=kH();mA.filterProps=["sx"];const E0=mA,xH=["breakpoints","palette","spacing","shape"];function S0(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=Dr(t,xH),a=$W(n),l=GW(i);let u=gr({breakpoints:a,direction:"ltr",components:{},palette:X({mode:"light"},r),spacing:l,shape:X({},UW,s)},o);return u=e.reduce((c,h)=>gr(c,h),u),u.unstable_sxConfig=X({},w0,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(h){return E0({sx:h,theme:this})},u}function RH(t){return Object.keys(t).length===0}function bH(t=null){const e=C.useContext(dA);return!e||RH(e)?t:e}const NH=S0();function AH(t=NH){return bH(t)}const PH=["variant"];function VS(t){return t.length===0}function gA(t){const{variant:e}=t,n=Dr(t,PH);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=VS(r)?t[i]:Gn(t[i]):r+=`${VS(r)?i:Gn(i)}${Gn(t[i].toString())}`}),r}const OH=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function DH(t){return Object.keys(t).length===0}function LH(t){return typeof t=="string"&&t.charCodeAt(0)>96}const MH=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,$H=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const s=gA(i.props);r[s]=i.style}),r},FH=(t,e,n,r)=>{var i,s;const{ownerState:o={}}=t,a=[],l=n==null||(i=n.components)==null||(s=i[r])==null?void 0:s.variants;return l&&l.forEach(u=>{let c=!0;Object.keys(u.props).forEach(h=>{o[h]!==u.props[h]&&t[h]!==u.props[h]&&(c=!1)}),c&&a.push(e[gA(u.props)])}),a};function Kc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const UH=S0();function Ca({defaultTheme:t,theme:e,themeId:n}){return DH(e)?t:e[n]||e}function jH(t={}){const{themeId:e,defaultTheme:n=UH,rootShouldForwardProp:r=Kc,slotShouldForwardProp:i=Kc}=t,s=o=>E0(X({},o,{theme:Ca(X({},o,{defaultTheme:n,themeId:e}))}));return s.__mui_systemSx=!0,(o,a={})=>{DW(o,E=>E.filter(T=>!(T!=null&&T.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:h,overridesResolver:d}=a,f=Dr(a,OH),p=c!==void 0?c:u&&u!=="Root"||!1,m=h||!1;let w,y=Kc;u==="Root"?y=r:u?y=i:LH(o)&&(y=void 0);const g=OW(o,X({shouldForwardProp:y,label:w},f)),v=(E,...T)=>{const x=T?T.map(M=>typeof M=="function"&&M.__emotion_real!==M?Re=>M(X({},Re,{theme:Ca(X({},Re,{defaultTheme:n,themeId:e}))})):M):[];let k=E;l&&d&&x.push(M=>{const Re=Ca(X({},M,{defaultTheme:n,themeId:e})),Pn=MH(l,Re);if(Pn){const rn={};return Object.entries(Pn).forEach(([_s,Lr])=>{rn[_s]=typeof Lr=="function"?Lr(X({},M,{theme:Re})):Lr}),d(M,rn)}return null}),l&&!p&&x.push(M=>{const Re=Ca(X({},M,{defaultTheme:n,themeId:e}));return FH(M,$H(l,Re),Re,l)}),m||x.push(s);const O=x.length-T.length;if(Array.isArray(E)&&O>0){const M=new Array(O).fill("");k=[...E,...M],k.raw=[...E.raw,...M]}else typeof E=="function"&&E.__emotion_real!==E&&(k=M=>E(X({},M,{theme:Ca(X({},M,{defaultTheme:n,themeId:e}))})));const K=g(k,...x);return o.muiName&&(K.muiName=o.muiName),K};return g.withConfig&&(v.withConfig=g.withConfig),v}}function BH(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:XN(e.components[n].defaultProps,r)}function VH({props:t,name:e,defaultTheme:n,themeId:r}){let i=AH(n);return r&&(i=i[r]||i),BH({theme:i,name:e,props:t})}function yA(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function zH(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Mo(t){if(t.type)return t;if(t.charAt(0)==="#")return Mo(zH(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Do(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Do(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}function C0(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function WH(t){t=Mo(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(u,c=(u+n/30)%12)=>i-s*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),C0({type:a,values:l})}function zS(t){t=Mo(t);let e=t.type==="hsl"||t.type==="hsla"?Mo(WH(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function HH(t,e){const n=zS(t),r=zS(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function qH(t,e){if(t=Mo(t),e=yA(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return C0(t)}function KH(t,e){if(t=Mo(t),e=yA(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return C0(t)}function GH(t,e){return X({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const QH={black:"#000",white:"#fff"},Yl=QH,YH={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},XH=YH,JH={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Cs=JH,ZH={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ts=ZH,e8={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ta=e8,t8={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Is=t8,n8={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ks=n8,r8={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},xs=r8,i8=["mode","contrastThreshold","tonalOffset"],WS={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Yl.white,default:Yl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},tm={text:{primary:Yl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Yl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function HS(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=KH(t.main,i):e==="dark"&&(t.dark=qH(t.main,s)))}function s8(t="light"){return t==="dark"?{main:Is[200],light:Is[50],dark:Is[400]}:{main:Is[700],light:Is[400],dark:Is[800]}}function o8(t="light"){return t==="dark"?{main:Cs[200],light:Cs[50],dark:Cs[400]}:{main:Cs[500],light:Cs[300],dark:Cs[700]}}function a8(t="light"){return t==="dark"?{main:Ts[500],light:Ts[300],dark:Ts[700]}:{main:Ts[700],light:Ts[400],dark:Ts[800]}}function l8(t="light"){return t==="dark"?{main:ks[400],light:ks[300],dark:ks[700]}:{main:ks[700],light:ks[500],dark:ks[900]}}function u8(t="light"){return t==="dark"?{main:xs[400],light:xs[300],dark:xs[700]}:{main:xs[800],light:xs[500],dark:xs[900]}}function c8(t="light"){return t==="dark"?{main:Ta[400],light:Ta[300],dark:Ta[700]}:{main:"#ed6c02",light:Ta[500],dark:Ta[900]}}function h8(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Dr(t,i8),s=t.primary||s8(e),o=t.secondary||o8(e),a=t.error||a8(e),l=t.info||l8(e),u=t.success||u8(e),c=t.warning||c8(e);function h(m){return HH(m,tm.text.primary)>=n?tm.text.primary:WS.text.primary}const d=({color:m,name:w,mainShade:y=500,lightShade:g=300,darkShade:v=700})=>{if(m=X({},m),!m.main&&m[y]&&(m.main=m[y]),!m.hasOwnProperty("main"))throw new Error(Do(11,w?` (${w})`:"",y));if(typeof m.main!="string")throw new Error(Do(12,w?` (${w})`:"",JSON.stringify(m.main)));return HS(m,"light",g,r),HS(m,"dark",v,r),m.contrastText||(m.contrastText=h(m.main)),m},f={dark:tm,light:WS};return gr(X({common:X({},Yl),mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:XH,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:r},f[e]),i)}const d8=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function f8(t){return Math.round(t*1e5)/1e5}const qS={textTransform:"uppercase"},KS='"Roboto", "Helvetica", "Arial", sans-serif';function p8(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=KS,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:h}=n,d=Dr(n,d8),f=i/14,p=h||(y=>`${y/u*f}rem`),m=(y,g,v,E,T)=>X({fontFamily:r,fontWeight:y,fontSize:p(g),lineHeight:v},r===KS?{letterSpacing:`${f8(E/g)}em`}:{},T,c),w={h1:m(s,96,1.167,-1.5),h2:m(s,60,1.2,-.5),h3:m(o,48,1.167,0),h4:m(o,34,1.235,.25),h5:m(o,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(o,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(o,16,1.5,.15),body2:m(o,14,1.43,.15),button:m(a,14,1.75,.4,qS),caption:m(o,12,1.66,.4),overline:m(o,12,2.66,1,qS),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return gr(X({htmlFontSize:u,pxToRem:p,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:l},w),d,{clone:!1})}const m8=.2,g8=.14,y8=.12;function Ee(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${m8})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${g8})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${y8})`].join(",")}const v8=["none",Ee(0,2,1,-1,0,1,1,0,0,1,3,0),Ee(0,3,1,-2,0,2,2,0,0,1,5,0),Ee(0,3,3,-2,0,3,4,0,0,1,8,0),Ee(0,2,4,-1,0,4,5,0,0,1,10,0),Ee(0,3,5,-1,0,5,8,0,0,1,14,0),Ee(0,3,5,-1,0,6,10,0,0,1,18,0),Ee(0,4,5,-2,0,7,10,1,0,2,16,1),Ee(0,5,5,-3,0,8,10,1,0,3,14,2),Ee(0,5,6,-3,0,9,12,1,0,3,16,2),Ee(0,6,6,-3,0,10,14,1,0,4,18,3),Ee(0,6,7,-4,0,11,15,1,0,4,20,3),Ee(0,7,8,-4,0,12,17,2,0,5,22,4),Ee(0,7,8,-4,0,13,19,2,0,5,24,4),Ee(0,7,9,-4,0,14,21,2,0,5,26,4),Ee(0,8,9,-5,0,15,22,2,0,6,28,5),Ee(0,8,10,-5,0,16,24,2,0,6,30,5),Ee(0,8,11,-5,0,17,26,2,0,6,32,5),Ee(0,9,11,-5,0,18,28,2,0,7,34,6),Ee(0,9,12,-6,0,19,29,2,0,7,36,6),Ee(0,10,13,-6,0,20,31,3,0,8,38,7),Ee(0,10,13,-6,0,21,33,3,0,8,40,7),Ee(0,10,14,-6,0,22,35,3,0,8,42,7),Ee(0,11,14,-7,0,23,36,3,0,9,44,8),Ee(0,11,15,-7,0,24,38,3,0,9,46,8)],_8=v8,w8=["duration","easing","delay"],E8={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},S8={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function GS(t){return`${Math.round(t)}ms`}function C8(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function T8(t){const e=X({},E8,t.easing),n=X({},S8,t.duration);return X({getAutoHeightDuration:C8,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:l=0}=s;return Dr(s,w8),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof o=="string"?o:GS(o)} ${a} ${typeof l=="string"?l:GS(l)}`).join(",")}},t,{easing:e,duration:n})}const I8={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},k8=I8,x8=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function R8(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=Dr(t,x8);if(t.vars)throw new Error(Do(18));const a=h8(r),l=S0(t);let u=gr(l,{mixins:GH(l.breakpoints,n),palette:a,shadows:_8.slice(),typography:p8(a,s),transitions:T8(i),zIndex:X({},k8)});return u=gr(u,o),u=e.reduce((c,h)=>gr(c,h),u),u.unstable_sxConfig=X({},w0,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(h){return E0({sx:h,theme:this})},u}const b8=R8(),vA=b8,_A="$$material";function N8({props:t,name:e}){return VH({props:t,name:e,defaultTheme:vA,themeId:_A})}const A8=t=>Kc(t)&&t!=="classes",P8=jH({themeId:_A,defaultTheme:vA,rootShouldForwardProp:A8}),O8=P8;function D8(t){return ZN("MuiSvgIcon",t)}Mz("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const L8=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],M8=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${Gn(e)}`,`fontSize${Gn(n)}`]};return Pz(i,D8,r)},$8=O8("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${Gn(n.color)}`],e[`fontSize${Gn(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,o,a,l,u,c,h,d,f,p,m,w,y,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(s=i.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((c=t.typography)==null||(h=c.pxToRem)==null?void 0:h.call(c,35))||"2.1875rem"}[e.fontSize],color:(d=(f=(t.vars||t).palette)==null||(p=f[e.color])==null?void 0:p.main)!=null?d:{action:(m=(t.vars||t).palette)==null||(w=m.action)==null?void 0:w.active,disabled:(y=(t.vars||t).palette)==null||(g=y.action)==null?void 0:g.disabled,inherit:void 0}[e.color]}}),wA=C.forwardRef(function(e,n){const r=N8({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:h,viewBox:d="0 0 24 24"}=r,f=Dr(r,L8),p=X({},r,{color:o,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:d}),m={};c||(m.viewBox=d);const w=M8(p);return _.jsxs($8,X({as:a,className:$z(w.root,s),focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},m,f,{ownerState:p,children:[i,h?_.jsx("title",{children:h}):null]}))});wA.muiName="SvgIcon";const QS=wA;function F8(t,e){function n(r,i){return _.jsx(QS,X({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=QS.muiName,C.memo(C.forwardRef(n))}const U8={configure:t=>{JN.configure(t)}},j8=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Gn,createChainedFunction:dz,createSvgIcon:F8,debounce:fz,deprecatedPropType:pz,isMuiElement:mz,ownerDocument:GN,ownerWindow:gz,requirePropFactory:yz,setRef:QN,unstable_ClassNameGenerator:U8,unstable_useEnhancedEffect:YN,unstable_useId:wz,unsupportedProp:Ez,useControlled:Sz,useEventCallback:Cz,useForkRef:Tz,useIsFocusVisible:Az},Symbol.toStringTag,{value:"Module"})),B8=HA(j8);var YS;function T0(){return YS||(YS=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=B8}(Jp)),Jp}var V8=d0;Object.defineProperty(h0,"__esModule",{value:!0});var EA=h0.default=void 0,z8=V8(T0()),W8=_,H8=(0,z8.default)((0,W8.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");EA=h0.default=H8;var I0={},q8=d0;Object.defineProperty(I0,"__esModule",{value:!0});var SA=I0.default=void 0,K8=q8(T0()),G8=_,Q8=(0,K8.default)((0,G8.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");SA=I0.default=Q8;var k0={},Y8=d0;Object.defineProperty(k0,"__esModule",{value:!0});var CA=k0.default=void 0,X8=Y8(T0()),J8=_,Z8=(0,X8.default)((0,J8.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59L12 2z"}),"ShoppingCartCheckout");CA=k0.default=Z8;function _c(){const[{basket:t,user:e},n]=Ti(),r=()=>{e&&kv().signOut()};return _.jsxs("div",{className:"header",children:[_.jsx(Hs,{to:"/",children:_.jsx("img",{className:"header__logo",src:"/assets/AMZN_BIG.D-8fb0be81.png",alt:""})}),_.jsxs("div",{className:"header__deliveryLocation",children:[_.jsx(SA,{}),_.jsxs("div",{className:"header__option",children:[_.jsx("span",{className:"header__optionLineOne",children:"Deliver to"}),_.jsx("span",{className:"header__optionLineTwo",children:e==null?void 0:e.email})]})]}),_.jsxs("div",{className:"header__search",children:[_.jsx("input",{className:"header__searchInput",type:"text",name:"",id:""}),_.jsx(EA,{className:"header__serachIcon"})]}),_.jsxs("div",{className:"header__nav",children:[_.jsx(Hs,{to:!e&&"/login",children:_.jsxs("div",{className:"header__option",onClick:r,children:[_.jsxs("span",{className:"header__optionLineOne",children:["Hello ",e?e==null?void 0:e.email:"Guest"]}),_.jsx("span",{className:"header__optionLineTwo",children:e?"Sign Out":"Sign In"})]})}),_.jsx(Hs,{to:"/orders",children:_.jsxs("div",{className:"header__option",children:[_.jsx("span",{className:"header__optionLineOne",children:"Returns"}),_.jsx("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),_.jsxs("div",{className:"header__option",children:[_.jsx("span",{className:"header__optionLineOne",children:"Your"}),_.jsx("span",{className:"header__optionLineTwo",children:"Prime"})]}),_.jsx(Hs,{to:"/checkout",children:_.jsxs("div",{className:"header__optionBasket",children:[_.jsx(CA,{}),_.jsx("span",{className:"header__optionLineTwo header__basketCount",children:t==null?void 0:t.length})]})})]})]})}function Rs({id:t,title:e,price:n,rating:r,image:i}){const[{basket:s},o]=Ti(),a=()=>{o({type:"ADD_TO_BASKET",item:{id:t,title:e,image:i,price:n,rating:r}})};return _.jsxs("div",{className:"product",children:[_.jsxs("div",{className:"product__info",children:[_.jsx("p",{children:e}),_.jsxs("p",{className:"product__price",children:[_.jsx("small",{children:"$"}),_.jsx("strong",{children:n})]}),_.jsx("div",{className:"product__rating",children:Array(r).fill().map((l,u)=>_.jsx("p",{children:"⭐"},u))})]}),_.jsx("img",{src:i,alt:""}),_.jsx("button",{onClick:a,children:"Add to Basket"})]})}function e7(){let t=1617,e="boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69 HD Display with 550 NITS & 70% Color Gamut, 150+ Watch Faces, Multi-Sport Modes,HR,SpO2, IP68(Active Black)",n=99,r=2,i="https://m.media-amazon.com/images/I/61H5PEqBBAL._AC_UL320_.jpg";return _.jsx("div",{className:"Home",children:_.jsxs("div",{className:"home__conatiner",children:[_.jsx("img",{className:"home__image",src:"/assets/banner/1.png",alt:""}),_.jsxs("div",{className:"home__row",children:[_.jsx(Rs,{id:t,title:e,price:n,rating:r,image:i}),_.jsx(Rs,{id:"1234",title:"Sure From Aquaguard Delight NXT RO+UV+Taste Adjuster(MTDS) 6L storage Water Purifier,7 stages purification,suitable for borewell,tanker,municipal water(Black) from Eureka Forbes",price:"199",rating:"4",image:"https://m.media-amazon.com/images/I/41s8QuuF6GL._SY355_.jpg"})]}),_.jsxs("div",{className:"home__row",children:[_.jsx(Rs,{id:"5678",title:"AO Smith Z9 Hot+ normal RO |Baby-Safe Water |Hot Water |10 L Storage|8-Stage Purification |100%RO+SCMT (Silver Charged Membrane Tech.)|Wall mount Water Purifier",price:"25299",rating:"3",image:"https://m.media-amazon.com/images/I/513dMV3+hUL._SY355_.jpg"}),_.jsx(Rs,{id:"91011",title:"Tecno Spark 10 5G (Meta Blue, 8GB RAM,256GB Storage)|16GB Expandable RAM | Ultra Clear 50MP Superior Rear Camera| Dimensity 6020 7nm Powerful 5G Processor",price:"14999",rating:"0",image:"https://m.media-amazon.com/images/I/61Xxll9moyL._SX679_.jpg"}),_.jsx(Rs,{id:"1213",title:"cer One 14 Business Laptop AMD Ryzen 3 3250U Processor (8GB RAM/256GB SSD/AMD Radeon Graphics/Windows 11 Home/MS Office Home and Student) Z2-493 with 35.56 cm (14.0) HD Display",price:"28990",rating:"4",image:"https://m.media-amazon.com/images/I/7192azUcPgL._SY450_.jpg"})]}),_.jsx("div",{className:"home__row",children:_.jsx(Rs,{id:"1415",title:e,price:n,rating:r,image:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/30ffa82b-ba15-41ea-ad31-ea479a9bcc35.__CR10,0,4307,1765_PT0_SX1464_V1___.jpg"})})]})})}function t7(){const t=Md(),[{basket:e},n]=Ti();let r=0;return e.map(i=>r=r+parseFloat(typeof i.price=="string"?i.price.replace(",",""):i.price)),_.jsxs("div",{className:"subtotal",children:[_.jsxs(_.Fragment,{children:[_.jsxs("p",{children:["Subtotal (",e.length," items):",_.jsx("small",{children:"$"})," ",_.jsx("strong",{children:r})]}),_.jsxs("small",{className:"subtotal__gift",children:[_.jsx("input",{type:"checkbox"})," This order contains a gift"]})]}),_.jsx("button",{onClick:i=>{t("/payment")},children:"Proceed to Checkout"})]})}function x0({id:t,image:e,title:n,price:r,rating:i}){const[{basket:s},o]=Ti(),a=l=>{o({type:"REMOVE_FROM_BASKET",payload:l})};return _.jsxs("div",{className:"basketItem",children:[_.jsx("img",{src:e,alt:""}),_.jsxs("div",{className:"item__details",children:[_.jsx("p",{className:"item_title",children:n}),_.jsxs("div",{className:"item__price",children:[_.jsx("small",{children:"$"}),_.jsx("strong",{children:r})]}),_.jsx("div",{className:"item__rating",children:Array(i).fill().map((l,u)=>_.jsx("p",{children:"⭐"},u))}),_.jsx("button",{onClick:()=>a(t),children:"Remove from basket"})]})]})}function n7(){const[{basket:t,user:e},n]=Ti(),r=t.map(i=>_.jsx(x0,{id:i.id,title:i.title,price:i.price,rating:i.rating,image:i.image}));return _.jsxs("div",{className:"checkout",children:[_.jsxs("div",{className:"checkout__left",children:[_.jsxs("h3",{children:["Hello ",e==null?void 0:e.email,"!"]}),_.jsx("h2",{className:"checkout__title",children:"Shopping Cart"}),r]}),_.jsx("div",{className:"checkout__right",children:_.jsx(t7,{})})]})}function r7(){const t=Md(),[e,n]=C.useState(""),[r,i]=C.useState(""),s=oz(),o=kv(s),a=u=>{u.preventDefault(),MM(o,e,r).then(c=>{const h=c.user;console.log("User registered:",h),o&&t("/")}).catch(c=>{const h=c.code,d=c.message;console.error("Error registering user:",h,d)})},l=async u=>{u.preventDefault();try{await $M(o,e,r),console.log("Login successful"),o&&t("/")}catch(c){console.error(c)}};return _.jsxs("div",{className:"login",children:[_.jsx(Hs,{to:"/",children:_.jsx("img",{className:"login__logo",src:"\\assets\\login\\isolated-white-background-amazon-logo-159029074-removebg-preview.png",alt:""})}),_.jsxs("div",{className:"login__form",children:[_.jsx("h1",{children:"Sign in"}),_.jsx("label",{htmlFor:"email",children:"E-mail"}),_.jsx("input",{type:"email",name:"email",id:"",value:e,onChange:u=>n(u.target.value)}),_.jsx("label",{htmlFor:"password",children:"Password"}),_.jsx("input",{type:"password",name:"password",id:"",value:r,onChange:u=>i(u.target.value)}),_.jsx("button",{type:"submit",className:"sign__in",onClick:l,children:"Sign in"}),_.jsx("p",{className:"login__terms",children:"By signing-in you agree to Amazon's conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-BAsed Ads Notice."}),_.jsx("button",{className:"create__account",onClick:a,children:"Create Your Amazon Account"})]})]})}const i7={basket:[],user:null},s7=(t,e)=>{switch(e.type){case"ADD_TO_BASKET":return{...t,basket:[...t.basket,e.item]};case"REMOVE_FROM_BASKET":const n=t.basket.filter(r=>r.id!==e.payload);return{...t,basket:n};case"SET_USER":return{...t,user:e.user};case"EMPTY_BASKET":return{...t,basket:[]};default:return t}};function TA(t,e){return function(){return t.apply(e,arguments)}}const{toString:o7}=Object.prototype,{getPrototypeOf:R0}=Object,Lf=(t=>e=>{const n=o7.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Zn=t=>(t=t.toLowerCase(),e=>Lf(e)===t),Mf=t=>e=>typeof e===t,{isArray:sa}=Array,Xl=Mf("undefined");function a7(t){return t!==null&&!Xl(t)&&t.constructor!==null&&!Xl(t.constructor)&&hn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const IA=Zn("ArrayBuffer");function l7(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&IA(t.buffer),e}const u7=Mf("string"),hn=Mf("function"),kA=Mf("number"),$f=t=>t!==null&&typeof t=="object",c7=t=>t===!0||t===!1,Gc=t=>{if(Lf(t)!=="object")return!1;const e=R0(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},h7=Zn("Date"),d7=Zn("File"),f7=Zn("Blob"),p7=Zn("FileList"),m7=t=>$f(t)&&hn(t.pipe),g7=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||hn(t.append)&&((e=Lf(t))==="formdata"||e==="object"&&hn(t.toString)&&t.toString()==="[object FormData]"))},y7=Zn("URLSearchParams"),v7=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $u(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),sa(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function xA(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const RA=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),bA=t=>!Xl(t)&&t!==RA;function dy(){const{caseless:t}=bA(this)&&this||{},e={},n=(r,i)=>{const s=t&&xA(e,i)||i;Gc(e[s])&&Gc(r)?e[s]=dy(e[s],r):Gc(r)?e[s]=dy({},r):sa(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&$u(arguments[r],n);return e}const _7=(t,e,n,{allOwnKeys:r}={})=>($u(e,(i,s)=>{n&&hn(i)?t[s]=TA(i,n):t[s]=i},{allOwnKeys:r}),t),w7=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),E7=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},S7=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&R0(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},C7=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},T7=t=>{if(!t)return null;if(sa(t))return t;let e=t.length;if(!kA(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},I7=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&R0(Uint8Array)),k7=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},x7=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},R7=Zn("HTMLFormElement"),b7=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),XS=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),N7=Zn("RegExp"),NA=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};$u(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},A7=t=>{NA(t,(e,n)=>{if(hn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(hn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},P7=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return sa(t)?r(t):r(String(t).split(e)),n},O7=()=>{},D7=(t,e)=>(t=+t,Number.isFinite(t)?t:e),nm="abcdefghijklmnopqrstuvwxyz",JS="0123456789",AA={DIGIT:JS,ALPHA:nm,ALPHA_DIGIT:nm+nm.toUpperCase()+JS},L7=(t=16,e=AA.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function M7(t){return!!(t&&hn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const $7=t=>{const e=new Array(10),n=(r,i)=>{if($f(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=sa(r)?[]:{};return $u(r,(o,a)=>{const l=n(o,i+1);!Xl(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},F7=Zn("AsyncFunction"),U7=t=>t&&($f(t)||hn(t))&&hn(t.then)&&hn(t.catch),S={isArray:sa,isArrayBuffer:IA,isBuffer:a7,isFormData:g7,isArrayBufferView:l7,isString:u7,isNumber:kA,isBoolean:c7,isObject:$f,isPlainObject:Gc,isUndefined:Xl,isDate:h7,isFile:d7,isBlob:f7,isRegExp:N7,isFunction:hn,isStream:m7,isURLSearchParams:y7,isTypedArray:I7,isFileList:p7,forEach:$u,merge:dy,extend:_7,trim:v7,stripBOM:w7,inherits:E7,toFlatObject:S7,kindOf:Lf,kindOfTest:Zn,endsWith:C7,toArray:T7,forEachEntry:k7,matchAll:x7,isHTMLForm:R7,hasOwnProperty:XS,hasOwnProp:XS,reduceDescriptors:NA,freezeMethods:A7,toObjectSet:P7,toCamelCase:b7,noop:O7,toFiniteNumber:D7,findKey:xA,global:RA,isContextDefined:bA,ALPHABET:AA,generateString:L7,isSpecCompliantForm:M7,toJSONObject:$7,isAsyncFn:F7,isThenable:U7};function ne(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const PA=ne.prototype,OA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{OA[t]={value:t}});Object.defineProperties(ne,OA);Object.defineProperty(PA,"isAxiosError",{value:!0});ne.from=(t,e,n,r,i,s)=>{const o=Object.create(PA);return S.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ne.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const j7=null;function fy(t){return S.isPlainObject(t)||S.isArray(t)}function DA(t){return S.endsWith(t,"[]")?t.slice(0,-2):t}function ZS(t,e,n){return t?t.concat(e).map(function(i,s){return i=DA(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function B7(t){return S.isArray(t)&&!t.some(fy)}const V7=S.toFlatObject(S,{},null,function(e){return/^is[A-Z]/.test(e)});function Ff(t,e,n){if(!S.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,w){return!S.isUndefined(w[m])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(e);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(S.isDate(p))return p.toISOString();if(!l&&S.isBlob(p))throw new ne("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(p)||S.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,m,w){let y=p;if(p&&!w&&typeof p=="object"){if(S.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(S.isArray(p)&&B7(p)||(S.isFileList(p)||S.endsWith(m,"[]"))&&(y=S.toArray(p)))return m=DA(m),y.forEach(function(v,E){!(S.isUndefined(v)||v===null)&&e.append(o===!0?ZS([m],E,s):o===null?m:m+"[]",u(v))}),!1}return fy(p)?!0:(e.append(ZS(w,m,s),u(p)),!1)}const h=[],d=Object.assign(V7,{defaultVisitor:c,convertValue:u,isVisitable:fy});function f(p,m){if(!S.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(p),S.forEach(p,function(y,g){(!(S.isUndefined(y)||y===null)&&i.call(e,y,S.isString(g)?g.trim():g,m,d))===!0&&f(y,m?m.concat(g):[g])}),h.pop()}}if(!S.isObject(t))throw new TypeError("data must be an object");return f(t),e}function eC(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function b0(t,e){this._pairs=[],t&&Ff(t,this,e)}const LA=b0.prototype;LA.append=function(e,n){this._pairs.push([e,n])};LA.toString=function(e){const n=e?function(r){return e.call(this,r,eC)}:eC;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function z7(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function MA(t,e,n){if(!e)return t;const r=n&&n.encode||z7,i=n&&n.serialize;let s;if(i?s=i(e,n):s=S.isURLSearchParams(e)?e.toString():new b0(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class W7{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){S.forEach(this.handlers,function(r){r!==null&&e(r)})}}const tC=W7,$A={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},H7=typeof URLSearchParams<"u"?URLSearchParams:b0,q7=typeof FormData<"u"?FormData:null,K7=typeof Blob<"u"?Blob:null,G7=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Q7=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vn={isBrowser:!0,classes:{URLSearchParams:H7,FormData:q7,Blob:K7},isStandardBrowserEnv:G7,isStandardBrowserWebWorkerEnv:Q7,protocols:["http","https","file","blob","url","data"]};function Y7(t,e){return Ff(t,new Vn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Vn.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function X7(t){return S.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function J7(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function FA(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&S.isArray(i)?i.length:o,l?(S.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!S.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&S.isArray(i[o])&&(i[o]=J7(i[o])),!a)}if(S.isFormData(t)&&S.isFunction(t.entries)){const n={};return S.forEachEntry(t,(r,i)=>{e(X7(r),i,n,0)}),n}return null}const Z7={"Content-Type":void 0};function eq(t,e,n){if(S.isString(t))try{return(e||JSON.parse)(t),S.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Uf={transitional:$A,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=S.isObject(e);if(s&&S.isHTMLForm(e)&&(e=new FormData(e)),S.isFormData(e))return i&&i?JSON.stringify(FA(e)):e;if(S.isArrayBuffer(e)||S.isBuffer(e)||S.isStream(e)||S.isFile(e)||S.isBlob(e))return e;if(S.isArrayBufferView(e))return e.buffer;if(S.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Y7(e,this.formSerializer).toString();if((a=S.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ff(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),eq(e)):e}],transformResponse:[function(e){const n=this.transitional||Uf.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&S.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ne.from(a,ne.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vn.classes.FormData,Blob:Vn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.forEach(["delete","get","head"],function(e){Uf.headers[e]={}});S.forEach(["post","put","patch"],function(e){Uf.headers[e]=S.merge(Z7)});const N0=Uf,tq=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nq=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&tq[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},nC=Symbol("internals");function Ia(t){return t&&String(t).trim().toLowerCase()}function Qc(t){return t===!1||t==null?t:S.isArray(t)?t.map(Qc):String(t)}function rq(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const iq=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function rm(t,e,n,r,i){if(S.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!S.isString(e)){if(S.isString(r))return e.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(e)}}function sq(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function oq(t,e){const n=S.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class jf{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=Ia(l);if(!c)throw new Error("header name must be a non-empty string");const h=S.findKey(i,c);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||l]=Qc(a))}const o=(a,l)=>S.forEach(a,(u,c)=>s(u,c,l));return S.isPlainObject(e)||e instanceof this.constructor?o(e,n):S.isString(e)&&(e=e.trim())&&!iq(e)?o(nq(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Ia(e),e){const r=S.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return rq(i);if(S.isFunction(n))return n.call(this,i,r);if(S.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ia(e),e){const r=S.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||rm(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Ia(o),o){const a=S.findKey(r,o);a&&(!n||rm(r,r[a],a,n))&&(delete r[a],i=!0)}}return S.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||rm(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return S.forEach(this,(i,s)=>{const o=S.findKey(r,s);if(o){n[o]=Qc(i),delete n[s];return}const a=e?sq(s):String(s).trim();a!==s&&delete n[s],n[a]=Qc(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return S.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[nC]=this[nC]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Ia(o);r[a]||(oq(i,o),r[a]=!0)}return S.isArray(e)?e.forEach(s):s(e),this}}jf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.freezeMethods(jf.prototype);S.freezeMethods(jf);const yr=jf;function im(t,e){const n=this||N0,r=e||n,i=yr.from(r.headers);let s=r.data;return S.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function UA(t){return!!(t&&t.__CANCEL__)}function Fu(t,e,n){ne.call(this,t??"canceled",ne.ERR_CANCELED,e,n),this.name="CanceledError"}S.inherits(Fu,ne,{__CANCEL__:!0});function aq(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const lq=Vn.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(r)),S.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),S.isString(s)&&l.push("path="+s),S.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function uq(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function cq(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function jA(t,e){return t&&!uq(e)?cq(t,e):e}const hq=Vn.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=S.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function dq(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function fq(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const f=c&&u-c;return f?Math.round(d*1e3/f):void 0}}function rC(t,e){let n=0;const r=fq(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const pq=typeof XMLHttpRequest<"u",mq=pq&&function(t){return new Promise(function(n,r){let i=t.data;const s=yr.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}S.isFormData(i)&&(Vn.isStandardBrowserEnv||Vn.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const f=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+p))}const c=jA(t.baseURL,t.url);u.open(t.method.toUpperCase(),MA(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function h(){if(!u)return;const f=yr.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:f,config:t,request:u};aq(function(y){n(y),l()},function(y){r(y),l()},m),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new ne("Request aborted",ne.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new ne("Network Error",ne.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const m=t.transitional||$A;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),r(new ne(p,m.clarifyTimeoutError?ne.ETIMEDOUT:ne.ECONNABORTED,t,u)),u=null},Vn.isStandardBrowserEnv){const f=(t.withCredentials||hq(c))&&t.xsrfCookieName&&lq.read(t.xsrfCookieName);f&&s.set(t.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&S.forEach(s.toJSON(),function(p,m){u.setRequestHeader(m,p)}),S.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",rC(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",rC(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=f=>{u&&(r(!f||f.type?new Fu(null,t,u):f),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=dq(c);if(d&&Vn.protocols.indexOf(d)===-1){r(new ne("Unsupported protocol "+d+":",ne.ERR_BAD_REQUEST,t));return}u.send(i||null)})},Yc={http:j7,xhr:mq};S.forEach(Yc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const gq={getAdapter:t=>{t=S.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=S.isString(n)?Yc[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ne(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(S.hasOwnProp(Yc,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!S.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Yc};function sm(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Fu(null,t)}function iC(t){return sm(t),t.headers=yr.from(t.headers),t.data=im.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),gq.getAdapter(t.adapter||N0.adapter)(t).then(function(r){return sm(t),r.data=im.call(t,t.transformResponse,r),r.headers=yr.from(r.headers),r},function(r){return UA(r)||(sm(t),r&&r.response&&(r.response.data=im.call(t,t.transformResponse,r.response),r.response.headers=yr.from(r.response.headers))),Promise.reject(r)})}const sC=t=>t instanceof yr?t.toJSON():t;function $o(t,e){e=e||{};const n={};function r(u,c,h){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge.call({caseless:h},u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function i(u,c,h){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function s(u,c){if(!S.isUndefined(c))return r(void 0,c)}function o(u,c){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,h){if(h in e)return r(u,c);if(h in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(sC(u),sC(c),!0)};return S.forEach(Object.keys(Object.assign({},t,e)),function(c){const h=l[c]||i,d=h(t[c],e[c],c);S.isUndefined(d)&&h!==a||(n[c]=d)}),n}const BA="1.4.0",A0={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{A0[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const oC={};A0.transitional=function(e,n,r){function i(s,o){return"[Axios v"+BA+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ne(i(o," has been removed"+(n?" in "+n:"")),ne.ERR_DEPRECATED);return n&&!oC[o]&&(oC[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function yq(t,e,n){if(typeof t!="object")throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ne("option "+s+" must be "+l,ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ne("Unknown option "+s,ne.ERR_BAD_OPTION)}}const py={assertOptions:yq,validators:A0},Fr=py.validators;class yd{constructor(e){this.defaults=e,this.interceptors={request:new tC,response:new tC}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=$o(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&py.assertOptions(r,{silentJSONParsing:Fr.transitional(Fr.boolean),forcedJSONParsing:Fr.transitional(Fr.boolean),clarifyTimeoutError:Fr.transitional(Fr.boolean)},!1),i!=null&&(S.isFunction(i)?n.paramsSerializer={serialize:i}:py.assertOptions(i,{encode:Fr.function,serialize:Fr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&S.merge(s.common,s[n.method]),o&&S.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=yr.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let c,h=0,d;if(!l){const p=[iC.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,u),d=p.length,c=Promise.resolve(n);h<d;)c=c.then(p[h++],p[h++]);return c}d=a.length;let f=n;for(h=0;h<d;){const p=a[h++],m=a[h++];try{f=p(f)}catch(w){m.call(this,w);break}}try{c=iC.call(this,f)}catch(p){return Promise.reject(p)}for(h=0,d=u.length;h<d;)c=c.then(u[h++],u[h++]);return c}getUri(e){e=$o(this.defaults,e);const n=jA(e.baseURL,e.url);return MA(n,e.params,e.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(e){yd.prototype[e]=function(n,r){return this.request($o(r||{},{method:e,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request($o(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}yd.prototype[e]=n(),yd.prototype[e+"Form"]=n(!0)});const Xc=yd;class P0{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Fu(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new P0(function(i){e=i}),cancel:e}}}const vq=P0;function _q(t){return function(n){return t.apply(null,n)}}function wq(t){return S.isObject(t)&&t.isAxiosError===!0}const my={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(my).forEach(([t,e])=>{my[e]=t});const Eq=my;function VA(t){const e=new Xc(t),n=TA(Xc.prototype.request,e);return S.extend(n,Xc.prototype,e,{allOwnKeys:!0}),S.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return VA($o(t,i))},n}const Je=VA(N0);Je.Axios=Xc;Je.CanceledError=Fu;Je.CancelToken=vq;Je.isCancel=UA;Je.VERSION=BA;Je.toFormData=Ff;Je.AxiosError=ne;Je.Cancel=Je.CanceledError;Je.all=function(e){return Promise.all(e)};Je.spread=_q;Je.isAxiosError=wq;Je.mergeConfig=$o;Je.AxiosHeaders=yr;Je.formToJSON=t=>FA(S.isHTMLForm(t)?new FormData(t):t);Je.HttpStatusCode=Eq;Je.default=Je;const Sq=Je,Cq=Sq.create({baseURL:"https://us-central1-full-stack-68510.cloudfunctions.net/api"}),Tq={apiKey:"AIzaSyAwJ1U8as9NX4-waHAIVwOSm1gJuJJtpSM",authDomain:"full-stack-68510.firebaseapp.com",projectId:"full-stack-68510",storageBucket:"full-stack-68510.appspot.com",messagingSenderId:"293714926876",appId:"1:293714926876:web:745e2e38a9d8e4ec15aed9"},Iq=Fd(Tq),zA=sN(Iq);function kq(){const[{basket:t,user:e},n]=Ti();let r=0;t.map(v=>r=r+parseFloat(typeof v.price=="string"?v.price.replace(",",""):v.price));const i=Md(),s=SF(),o=EF(),[a,l]=C.useState(!1),[u,c]=C.useState(""),[h,d]=C.useState(null),[f,p]=C.useState(!0),[m,w]=C.useState(!0);C.useEffect(()=>{(async()=>{const E=await Cq({method:"post",url:`/payments/create?total=${r*100}`});w(E.data.clientSecret)})()},[t]),console.log("clientSecret",m);const y=async v=>{v.preventDefault(),c(!0),await s.confirmCardPayment(m,{payment_method:{card:o.getElement(R1)}}).then(({paymentIntent:E})=>{const T=iN(zA,"orders");WB(T,{userId:e==null?void 0:e.uid,basket:t,amount:E.amount,created:E.created}).then(x=>{console.log(x);const k=x.docs;console.log(k)}).catch(x=>console.log(x)),l(!0),d(null),c(!1),n({type:"EMPTY_BASKET"}),i("/orders")})},g=v=>{p(v.empty),d(v.error?v.error.message:"")};return _.jsx("div",{className:"payment",children:_.jsxs("div",{className:"payment__container",children:[_.jsxs("h1",{children:["Checkout (",_.jsxs(Hs,{to:"/checkout",children:[t==null?void 0:t.length," items"]}),")"]}),_.jsxs("div",{className:"payment__section",children:[_.jsx("div",{className:"payment__title",children:_.jsx("h3",{children:"Delivery Address"})}),_.jsxs("div",{className:"payment__address",children:[_.jsx("p",{children:e==null?void 0:e.email}),_.jsx("p",{children:"Vildandsvägen 18D, LGH 1201"}),_.jsx("p",{children:"Lund 22734"})]})]}),_.jsxs("div",{className:"payment__section",children:[_.jsx("div",{className:"payment__title",children:_.jsx("h3",{children:"Review Items & Delivery"})}),_.jsx("div",{className:"payment__items",children:t.map(v=>_.jsx(x0,{id:v.id,title:v.title,image:v.image,price:v.price,rating:v.rating}))})]}),_.jsxs("div",{className:"payment__section",children:[_.jsx("div",{className:"payment__title",children:_.jsx("h3",{children:"Payment Method"})}),_.jsx("div",{className:"payment__details",children:_.jsxs("form",{onSubmit:y,children:[_.jsx(R1,{onChange:g}),_.jsxs("div",{className:"payment__priceConatainer",children:["Order Total: ",_.jsx("small",{children:" $"})," ",_.jsx("strong",{children:r})]}),_.jsx("button",{disabled:f||u||a,children:_.jsx("span",{children:u?_.jsx("p",{children:"Processing"}):"Buy Now"})}),h&&_.jsxs("div",{children:[h," "]})]})})]})]})})}function xq({order:t}){console.log("order in Order component:",t);const e=t.created,r=new Date(e*1e3).toISOString(),i=t.basket.map(s=>_.jsx(x0,{id:s.id,title:s.title,price:s.price,rating:s.rating,image:s.image}));return _.jsxs("div",{children:[_.jsxs("p",{children:["Order Placed: ",r]}),_.jsxs("p",{children:["Total: $",t.amount/100]}),i]})}function Rq(){const[{basket:t,user:e},n]=Ti(),[r,i]=C.useState([]),s=async()=>{if(e)try{const o=iN(zA,"orders"),a=DB(o,LB("userId","==",e==null?void 0:e.uid)),l=await zB(a);i(l.docs.map(u=>u.data()))}catch(o){console.error("Error getting documents:",o)}else i([])};return C.useEffect(()=>{s()},[]),_.jsxs("div",{className:"orders",children:[_.jsx("h1",{children:"Your Orders"}),r==null?void 0:r.map(o=>_.jsx(xq,{order:o}))]})}function bq(){return _.jsxs("div",{className:"footer",children:[_.jsx("div",{className:"footer__backToTop",children:"Back to top"}),_.jsx("div",{className:"footer__primaryInfo",children:_.jsxs("div",{className:"footer__content",children:[_.jsxs("div",{className:"col",children:[_.jsx("h4",{children:"Get to Know Us"}),_.jsx("a",{target:"_blank",href:"https://www.aboutamazon.eu/",children:"Corporate Information"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.jobs/en/",children:"Careers"}),_.jsx("a",{target:"_blank",href:"https://www.aboutamazon.eu/press-release/",children:"Press Releases"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.science/",children:"Amazon Science"})]}),_.jsxs("div",{className:"col",children:[_.jsx("h4",{children:"Connect"}),_.jsx("a",{target:"_blank",href:"https://www.facebook.com/amazon.sweden/",children:"Facebook"})]}),_.jsxs("div",{className:"col",children:[_.jsx("h4",{children:"Make Money with Us"}),_.jsx("a",{target:"_blank",href:"https://brandservices.amazon.se/?ref=AOSEABRLGNRFOOT&ld=AOSEABRLGNRFOOT",children:"Protect and build your brand"}),_.jsx("a",{target:"_blank",href:"https://sell.amazon.se/?ld=AZSESOAFooter",children:"Sell on Amazon"}),_.jsx("a",{target:"_blank",href:"https://affiliate-program.amazon.se/",children:"Associates Programme"}),_.jsx("a",{target:"_blank",href:"https://sell.amazon.se/fulfilment-by-amazon/",children:"Fulfilment by Amazon"}),_.jsx("a",{target:"_blank",href:"https://advertising.amazon.com/?ref=footer_advtsing_se",children:"Advertise Your Products"})]}),_.jsxs("div",{className:"col",children:[_.jsx("h4",{children:"Let Us Help You"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.se/-/en/gp/css/order-history?ref_=footer_hp_ss_comp_tmp",children:"Track Packages or View Orders"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.se/-/en/gp/help/customer/display.html?nodeId=201910060&ref_=footer_shiprates",children:"Delivery Rates & Policies"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.se/-/en/spr/returns?ref_=footer_returns",children:"Returns & Replacements"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.se/-/en/gp/browse.html?node=22380270031&ref_=footer_disposal",children:"Recycling"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.se/-/en/gp/browse.html?node=21827652031&ref_=footer_mobapp",children:"Amazon Mobile App"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.se/hz/contact-us/foresight/hubgateway",children:"Customer Service"}),_.jsx("a",{target:"_blank",href:"https://www.amazon.se/-/en/gp/help/customer/display.html?nodeId=GUUVBZ8WGVFP8R8X&ref_=nav_foot_accessibility",children:"Accessibility"})]})]})}),_.jsxs("div",{className:"footer__franchiseInfo",children:[_.jsx("img",{className:"header__logo",src:"/assets/AMZN_BIG.D-8fb0be81.png",alt:""}),_.jsxs("ul",{className:"footer__franchiseInfoNav",children:[_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.com.au/ref=footer_au",className:"nav_a",children:"Australia"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.com.br/ref=footer_br",className:"nav_a",children:"Brazil"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.ca/ref=footer_ca",className:"nav_a",children:"Canada"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.cn/ref=footer_cn",className:"nav_a",children:"China"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.de",className:"nav_a",children:"Germany"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.es/ref=footer_es",className:"nav_a",children:"Spain"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.fr/ref=footer_fr",className:"nav_a",children:"France"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.in",className:"nav_a",children:"India"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.it/ref=footer_it",className:"nav_a",children:"Italy"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.co.jp/ref=footer_jp",className:"nav_a",children:"Japan"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.com.mx/ref=footer_mx",className:"nav_a",children:"Mexico"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.nl/ref=footer_nl",className:"nav_a",children:"Netherlands"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.pl/ref=footer_pl",className:"nav_a",children:"Poland"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.sa",className:"nav_a",children:"Saudi Arabia"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.sg/ref=footer_sg",className:"nav_a",children:"Singapore"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.com.tr/ref=footer_tr",className:"nav_a",children:"Turkey"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.ae/ref=footer_ae",className:"nav_a",children:"United Arab Emirates"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.co.uk/ref=footer_uk",className:"nav_a",children:"United Kingdom"})}),_.jsx("li",{children:_.jsx("a",{target:"_blank",href:"https://www.amazon.com/ref=footer_us",className:"nav_a",children:"United States"})})]})]}),_.jsxs("div",{className:"footer__secondaryInfo",children:[_.jsxs("ul",{children:[_.jsx("li",{className:"nav_first",children:_.jsx("a",{href:"/-/en/gp/help/customer/display.html?nodeId=201909000&ref_=footer_cou",children:"Conditions of Use & Sale"})}),_.jsx("li",{children:_.jsx("a",{href:"/-/en/gp/help/customer/display.html?nodeId=201909010&ref_=footer_privacy",children:"Privacy Notice"})}),_.jsx("li",{children:_.jsx("a",{href:"/-/en/gp/help/customer/display.html?nodeId=202024860&ref_=footer_impressum",children:"Legal Notice"})}),_.jsx("li",{children:_.jsx("a",{href:"/-/en/gp/help/customer/display.html?nodeId=201890250&ref_=footer_cookies_notice",children:"Cookies Notice"})}),_.jsx("li",{className:"nav_last",children:_.jsx("a",{href:"/-/en/gp/help/customer/display.html?nodeId=201909150&ref_=footer_Interest_Based_Ads_Notice",children:"Interest-Based Ads Notice"})})]}),_.jsx("span",{children:"© 1996-2023, Amazon.com, Inc. or its affiliates"})]})]})}const Nq="pk_test_51N7vHaCN6CQfSvOSdOUUSqzBSi7S9pe0czsvyWLsK162OQ35WAwxb6NfFmPWmnEJNR0826vGtUAglc3UUZWKLFLv00ljuJy1zl",Aq=iF(Nq);function Pq(){const[{},t]=Ti();C.useEffect(()=>{console.log("running useEffect");const n=kv(),r=jM(n,e);return()=>r()},[]);const e=n=>{n?(console.log("User is signed in:",n),t({type:"SET_USER",user:n})):(console.log("User is signed out"),t({type:"SET_USER",user:null}))};return _.jsx(sz,{firebaseConfig:WN,children:_.jsx(uD,{children:_.jsxs("div",{className:"app",children:[_.jsx("div",{className:"content",children:_.jsxs(iD,{children:[_.jsx(bs,{path:"/login",element:_.jsx(r7,{})}),_.jsx(bs,{path:"/payment",element:_.jsxs(_.Fragment,{children:[_.jsx(_c,{}),_.jsx(Lk,{stripe:Aq,children:_.jsx(kq,{})})]})}),_.jsx(bs,{path:"/checkout",element:_.jsxs(_.Fragment,{children:[_.jsx(_c,{}),_.jsx(n7,{})]})}),_.jsx(bs,{path:"/orders",element:_.jsxs(_.Fragment,{children:[_.jsx(_c,{}),_.jsx(Rq,{})]})}),_.jsx(bs,{path:"/",element:_.jsxs(_.Fragment,{children:[_.jsx(_c,{}),_.jsx(e7,{})]})})]})}),_.jsx(bq,{className:"footer"})]})})})}am.createRoot(document.getElementById("root")).render(_.jsx(ue.StrictMode,{children:_.jsx(hz,{initialState:i7,reducer:s7,children:_.jsx(Pq,{})})}));
