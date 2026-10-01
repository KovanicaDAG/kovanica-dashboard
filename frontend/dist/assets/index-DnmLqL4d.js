var mh=Object.defineProperty;var gh=(e,t,n)=>t in e?mh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>gh(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function yh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tu={exports:{}},cl={},nu={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),xh=Symbol.for("react.portal"),vh=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),jh=Symbol.for("react.provider"),Sh=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),bh=Symbol.for("react.memo"),Ch=Symbol.for("react.lazy"),pa=Symbol.iterator;function _h(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,lu={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||ru}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function iu(){}iu.prototype=Yn.prototype;function lo(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||ru}var io=lo.prototype=new iu;io.constructor=lo;su(io,Yn.prototype);io.isPureReactComponent=!0;var ma=Array.isArray,ou=Object.prototype.hasOwnProperty,oo={current:null},au={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,n){var r,s={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)ou.call(t,r)&&!au.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Hr,type:e,key:l,ref:o,props:s,_owner:oo.current}}function Th(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ao(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function Ph(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ga=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ph(""+e.key):t.toString(36)}function xs(e,t,n,r,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Hr:case xh:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Pl(o,0):r,ma(s)?(n="",e!=null&&(n=e.replace(ga,"$&/")+"/"),xs(s,t,n,"",function(u){return u})):s!=null&&(ao(s)&&(s=Th(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ga,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",ma(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+Pl(l,a);o+=xs(l,t,n,c,s)}else if(c=_h(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+Pl(l,a++),o+=xs(l,t,n,c,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Gr(e,t,n){if(e==null)return e;var r=[],s=0;return xs(e,r,"","",function(l){return t.call(n,l,s++)}),r}function Lh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},vs={transition:null},zh={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:vs,ReactCurrentOwner:oo};function uu(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Gr,forEach:function(e,t,n){Gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gr(e,function(){t++}),t},toArray:function(e){return Gr(e,function(t){return t})||[]},only:function(e){if(!ao(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Yn;V.Fragment=vh;V.Profiler=kh;V.PureComponent=lo;V.StrictMode=wh;V.Suspense=Eh;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zh;V.act=uu;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=su({},e.props),s=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=oo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)ou.call(t,c)&&!au.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hr,type:e.type,key:s,ref:l,props:r,_owner:o}};V.createContext=function(e){return e={$$typeof:Sh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jh,_context:e},e.Consumer=e};V.createElement=cu;V.createFactory=function(e){var t=cu.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Nh,render:e}};V.isValidElement=ao;V.lazy=function(e){return{$$typeof:Ch,_payload:{_status:-1,_result:e},_init:Lh}};V.memo=function(e,t){return{$$typeof:bh,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=vs.transition;vs.transition={};try{e()}finally{vs.transition=t}};V.unstable_act=uu;V.useCallback=function(e,t){return _e.current.useCallback(e,t)};V.useContext=function(e){return _e.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};V.useEffect=function(e,t){return _e.current.useEffect(e,t)};V.useId=function(){return _e.current.useId()};V.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return _e.current.useMemo(e,t)};V.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};V.useRef=function(e){return _e.current.useRef(e)};V.useState=function(e){return _e.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return _e.current.useTransition()};V.version="18.3.1";nu.exports=V;var k=nu.exports;const Rh=yh(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh=k,Mh=Symbol.for("react.element"),Ah=Symbol.for("react.fragment"),Bh=Object.prototype.hasOwnProperty,Dh=Oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ih={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,n){var r,s={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Bh.call(t,r)&&!Ih.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Mh,type:e,key:l,ref:o,props:s,_owner:Dh.current}}cl.Fragment=Ah;cl.jsx=du;cl.jsxs=du;tu.exports=cl;var i=tu.exports,ii={},fu={exports:{}},Ie={},hu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,M){var I=_.length;_.push(M);e:for(;0<I;){var G=I-1>>>1,J=_[G];if(0<s(J,M))_[G]=M,_[I]=J,I=G;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var M=_[0],I=_.pop();if(I!==M){_[0]=I;e:for(var G=0,J=_.length,Ge=J>>>1;G<Ge;){var Ee=2*(G+1)-1,Ct=_[Ee],nt=Ee+1,gn=_[nt];if(0>s(Ct,I))nt<J&&0>s(gn,Ct)?(_[G]=gn,_[nt]=I,G=nt):(_[G]=Ct,_[Ee]=I,G=Ee);else if(nt<J&&0>s(gn,I))_[G]=gn,_[nt]=I,G=nt;else break e}}return M}function s(_,M){var I=_.sortIndex-M.sortIndex;return I!==0?I:_.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var c=[],u=[],d=1,g=null,m=3,y=!1,w=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=_)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function x(_){if(v=!1,f(_),!w)if(n(c)!==null)w=!0,$(S);else{var M=n(u);M!==null&&R(x,M.startTime-_)}}function S(_,M){w=!1,v&&(v=!1,p(L),L=-1),y=!0;var I=m;try{for(f(M),g=n(c);g!==null&&(!(g.expirationTime>M)||_&&!U());){var G=g.callback;if(typeof G=="function"){g.callback=null,m=g.priorityLevel;var J=G(g.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(c)&&r(c),f(M)}else r(c);g=n(c)}if(g!==null)var Ge=!0;else{var Ee=n(u);Ee!==null&&R(x,Ee.startTime-M),Ge=!1}return Ge}finally{g=null,m=I,y=!1}}var N=!1,b=null,L=-1,O=5,z=-1;function U(){return!(e.unstable_now()-z<O)}function E(){if(b!==null){var _=e.unstable_now();z=_;var M=!0;try{M=b(!0,_)}finally{M?P():(N=!1,b=null)}}else N=!1}var P;if(typeof h=="function")P=function(){h(E)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,D=C.port2;C.port1.onmessage=E,P=function(){D.postMessage(null)}}else P=function(){j(E,0)};function $(_){b=_,N||(N=!0,P())}function R(_,M){L=j(function(){_(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,$(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var I=m;m=M;try{return _()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,M){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=m;m=_;try{return M()}finally{m=I}},e.unstable_scheduleCallback=function(_,M,I){var G=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?G+I:G):I=G,_){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=I+J,_={id:d++,callback:M,priorityLevel:_,startTime:I,expirationTime:J,sortIndex:-1},I>G?(_.sortIndex=I,t(u,_),n(c)===null&&_===n(u)&&(v?(p(L),L=-1):v=!0,R(x,I-G))):(_.sortIndex=J,t(c,_),w||y||(w=!0,$(S))),_},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(_){var M=m;return function(){var I=m;m=M;try{return _.apply(this,arguments)}finally{m=I}}}})(pu);hu.exports=pu;var Fh=hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=k,De=Fh;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mu=new Set,jr={};function hn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(jr[e]=t,e=0;e<t.length;e++)mu.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,Uh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ya={},xa={};function Hh(e){return oi.call(xa,e)?!0:oi.call(ya,e)?!1:Uh.test(e)?xa[e]=!0:(ya[e]=!0,!1)}function Vh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wh(e,t,n,r){if(t===null||typeof t>"u"||Vh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,s,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var co=/[\-:]([a-z])/g;function uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(co,uo);we[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(co,uo);we[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(co,uo);we[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function fo(e,t,n,r){var s=we.hasOwnProperty(t)?we[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wh(t,n,s,r)&&(n=null),r||s===null?Hh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=$h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),kn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),ho=Symbol.for("react.strict_mode"),ai=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),yu=Symbol.for("react.context"),po=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),ui=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),xu=Symbol.for("react.offscreen"),va=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=va&&e[va]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ll;function or(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var zl=!1;function Rl(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),l=r.stack.split(`
`),o=s.length-1,a=l.length-1;1<=o&&0<=a&&s[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==l[a]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Kh(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case kn:return"Portal";case ai:return"Profiler";case ho:return"StrictMode";case ci:return"Suspense";case ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yu:return(e.displayName||"Context")+".Consumer";case gu:return(e._context.displayName||"Context")+".Provider";case po:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mo:return t=e.displayName||null,t!==null?t:di(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return di(e(t))}catch{}}return null}function qh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return di(t);case 8:return t===ho?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gh(e){var t=vu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Gh(e))}function wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fi(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ku(e,t){t=t.checked,t!=null&&fo(e,"checked",t,!1)}function hi(e,t){ku(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&pi(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pi(e,t,n){(t!=="number"||Ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function Rn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ja(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(ar(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function ju(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Su(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xh=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){Xh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fr[t]=fr[e]})});function Eu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fr.hasOwnProperty(e)&&fr[e]?(""+t).trim():t+"px"}function bu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Eu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Yh=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yi(e,t){if(t){if(Yh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,On=null,Mn=null;function Na(e){if(e=Kr(e)){if(typeof wi!="function")throw Error(T(280));var t=e.stateNode;t&&(t=pl(t),wi(e.stateNode,e.type,t))}}function Cu(e){On?Mn?Mn.push(e):Mn=[e]:On=e}function _u(){if(On){var e=On,t=Mn;if(Mn=On=null,Na(e),t)for(e=0;e<t.length;e++)Na(t[e])}}function Tu(e,t){return e(t)}function Pu(){}var Ol=!1;function Lu(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Tu(e,t,n)}finally{Ol=!1,(On!==null||Mn!==null)&&(Pu(),_u())}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var ki=!1;if(wt)try{var er={};Object.defineProperty(er,"passive",{get:function(){ki=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{ki=!1}function Qh(e,t,n,r,s,l,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var hr=!1,zs=null,Rs=!1,ji=null,Zh={onError:function(e){hr=!0,zs=e}};function Jh(e,t,n,r,s,l,o,a,c){hr=!1,zs=null,Qh.apply(Zh,arguments)}function ep(e,t,n,r,s,l,o,a,c){if(Jh.apply(this,arguments),hr){if(hr){var u=zs;hr=!1,zs=null}else throw Error(T(198));Rs||(Rs=!0,ji=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ea(e){if(pn(e)!==e)throw Error(T(188))}function tp(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return Ea(s),e;if(l===r)return Ea(s),t;l=l.sibling}throw Error(T(188))}if(n.return!==r.return)n=s,r=l;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=l;break}if(a===r){o=!0,r=s,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=s;break}if(a===r){o=!0,r=l,n=s;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Ru(e){return e=tp(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Mu=De.unstable_scheduleCallback,ba=De.unstable_cancelCallback,np=De.unstable_shouldYield,rp=De.unstable_requestPaint,ce=De.unstable_now,sp=De.unstable_getCurrentPriorityLevel,yo=De.unstable_ImmediatePriority,Au=De.unstable_UserBlockingPriority,Os=De.unstable_NormalPriority,lp=De.unstable_LowPriority,Bu=De.unstable_IdlePriority,ul=null,at=null;function ip(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:cp,op=Math.log,ap=Math.LN2;function cp(e){return e>>>=0,e===0?32:31-(op(e)/ap|0)|0}var Zr=64,Jr=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=cr(a):(l&=o,l!==0&&(r=cr(l)))}else o=n&~s,o!==0?r=cr(o):l!==0&&(r=cr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),s=1<<n,r|=e[n],t&=~s;return r}function up(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Je(l),a=1<<o,c=s[o];c===-1?(!(a&n)||a&r)&&(s[o]=up(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Du(){var e=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function fp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Je(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var X=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,vo,$u,Uu,Hu,Ni=!1,es=[],Dt=null,It=null,Ft=null,Er=new Map,br=new Map,Ot=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function tr(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=Kr(t),t!==null&&vo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function pp(e,t,n,r,s){switch(t){case"focusin":return Dt=tr(Dt,e,t,n,r,s),!0;case"dragenter":return It=tr(It,e,t,n,r,s),!0;case"mouseover":return Ft=tr(Ft,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return Er.set(l,tr(Er.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,br.set(l,tr(br.get(l)||null,e,t,n,r,s)),!0}return!1}function Vu(e){var t=Jt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=zu(n),t!==null){e.blockedOn=t,Hu(e.priority,function(){$u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vi=r,n.target.dispatchEvent(r),vi=null}else return t=Kr(n),t!==null&&vo(t),e.blockedOn=n,!1;t.shift()}return!0}function _a(e,t,n){ws(e)&&n.delete(t)}function mp(){Ni=!1,Dt!==null&&ws(Dt)&&(Dt=null),It!==null&&ws(It)&&(It=null),Ft!==null&&ws(Ft)&&(Ft=null),Er.forEach(_a),br.forEach(_a)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ni||(Ni=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,mp)))}function Cr(e){function t(s){return nr(s,e)}if(0<es.length){nr(es[0],e);for(var n=1;n<es.length;n++){var r=es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&nr(Dt,e),It!==null&&nr(It,e),Ft!==null&&nr(Ft,e),Er.forEach(t),br.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Vu(n),n.blockedOn===null&&Ot.shift()}var An=Et.ReactCurrentBatchConfig,As=!0;function gp(e,t,n,r){var s=X,l=An.transition;An.transition=null;try{X=1,wo(e,t,n,r)}finally{X=s,An.transition=l}}function yp(e,t,n,r){var s=X,l=An.transition;An.transition=null;try{X=4,wo(e,t,n,r)}finally{X=s,An.transition=l}}function wo(e,t,n,r){if(As){var s=Ei(e,t,n,r);if(s===null)Wl(e,t,r,Bs,n),Ca(e,r);else if(pp(s,e,t,n,r))r.stopPropagation();else if(Ca(e,r),t&4&&-1<hp.indexOf(e)){for(;s!==null;){var l=Kr(s);if(l!==null&&Fu(l),l=Ei(e,t,n,r),l===null&&Wl(e,t,r,Bs,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else Wl(e,t,r,null,n)}}var Bs=null;function Ei(e,t,n,r){if(Bs=null,e=go(r),e=Jt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bs=e,null}function Wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sp()){case yo:return 1;case Au:return 4;case Os:case lp:return 16;case Bu:return 536870912;default:return 16}default:return 16}}var At=null,ko=null,ks=null;function Ku(){if(ks)return ks;var e,t=ko,n=t.length,r,s="value"in At?At.value:At.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[l-r];r++);return ks=s.slice(e,1<r?1-r:void 0)}function js(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function Ta(){return!1}function Fe(e){function t(n,r,s,l,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ts:Ta,this.isPropagationStopped=Ta,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Fe(Qn),Wr=oe({},Qn,{view:0,detail:0}),xp=Fe(Wr),Al,Bl,rr,dl=oe({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Al=e.screenX-rr.screenX,Bl=e.screenY-rr.screenY):Bl=Al=0,rr=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),Pa=Fe(dl),vp=oe({},dl,{dataTransfer:0}),wp=Fe(vp),kp=oe({},Wr,{relatedTarget:0}),Dl=Fe(kp),jp=oe({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sp=Fe(jp),Np=oe({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ep=Fe(Np),bp=oe({},Qn,{data:0}),La=Fe(bp),Cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tp[e])?!!t[e]:!1}function So(){return Pp}var Lp=oe({},Wr,{key:function(e){if(e.key){var t=Cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=Fe(Lp),Rp=oe({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),za=Fe(Rp),Op=oe({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),Mp=Fe(Op),Ap=oe({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=Fe(Ap),Dp=oe({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=Fe(Dp),Fp=[9,13,27,32],No=wt&&"CompositionEvent"in window,pr=null;wt&&"documentMode"in document&&(pr=document.documentMode);var $p=wt&&"TextEvent"in window&&!pr,qu=wt&&(!No||pr&&8<pr&&11>=pr),Ra=" ",Oa=!1;function Gu(e,t){switch(e){case"keyup":return Fp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Up(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(Oa=!0,Ra);case"textInput":return e=t.data,e===Ra&&Oa?null:e;default:return null}}function Hp(e,t){if(Sn)return e==="compositionend"||!No&&Gu(e,t)?(e=Ku(),ks=ko=At=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var Vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vp[e.type]:t==="textarea"}function Yu(e,t,n,r){Cu(r),t=Ds(t,"onChange"),0<t.length&&(n=new jo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,_r=null;function Wp(e){od(e,0)}function fl(e){var t=bn(e);if(wu(t))return e}function Kp(e,t){if(e==="change")return t}var Qu=!1;if(wt){var Il;if(wt){var Fl="oninput"in document;if(!Fl){var Aa=document.createElement("div");Aa.setAttribute("oninput","return;"),Fl=typeof Aa.oninput=="function"}Il=Fl}else Il=!1;Qu=Il&&(!document.documentMode||9<document.documentMode)}function Ba(){mr&&(mr.detachEvent("onpropertychange",Zu),_r=mr=null)}function Zu(e){if(e.propertyName==="value"&&fl(_r)){var t=[];Yu(t,_r,e,go(e)),Lu(Wp,t)}}function qp(e,t,n){e==="focusin"?(Ba(),mr=t,_r=n,mr.attachEvent("onpropertychange",Zu)):e==="focusout"&&Ba()}function Gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(_r)}function Xp(e,t){if(e==="click")return fl(t)}function Yp(e,t){if(e==="input"||e==="change")return fl(t)}function Qp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Qp;function Tr(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!oi.call(t,s)||!tt(e[s],t[s]))return!1}return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,t){var n=Da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Da(n)}}function Ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ed(){for(var e=window,t=Ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ls(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zp(e){var t=ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ju(n.ownerDocument.documentElement,n)){if(r!==null&&Eo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=Ia(n,l);var o=Ia(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jp=wt&&"documentMode"in document&&11>=document.documentMode,Nn=null,bi=null,gr=null,Ci=!1;function Fa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ci||Nn==null||Nn!==Ls(r)||(r=Nn,"selectionStart"in r&&Eo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&Tr(gr,r)||(gr=r,r=Ds(bi,"onSelect"),0<r.length&&(t=new jo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},$l={},td={};wt&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function hl(e){if($l[e])return $l[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return $l[e]=t[n];return e}var nd=hl("animationend"),rd=hl("animationiteration"),sd=hl("animationstart"),ld=hl("transitionend"),id=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){id.set(e,t),hn(t,[e])}for(var Ul=0;Ul<$a.length;Ul++){var Hl=$a[Ul],em=Hl.toLowerCase(),tm=Hl[0].toUpperCase()+Hl.slice(1);Gt(em,"on"+tm)}Gt(nd,"onAnimationEnd");Gt(rd,"onAnimationIteration");Gt(sd,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(ld,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Ua(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ep(r,t,void 0,e),e.currentTarget=null}function od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==l&&s.isPropagationStopped())break e;Ua(s,a,u),l=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==l&&s.isPropagationStopped())break e;Ua(s,a,u),l=c}}}if(Rs)throw e=ji,Rs=!1,ji=null,e}function ee(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+"__bubble";n.has(r)||(ad(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),ad(n,e,r,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[rs]){e[rs]=!0,mu.forEach(function(n){n!=="selectionchange"&&(nm.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,Vl("selectionchange",!1,t))}}function ad(e,t,n,r){switch(Wu(t)){case 1:var s=gp;break;case 4:s=yp;break;default:s=wo}n=s.bind(null,t,n,e),s=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Wl(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Jt(a),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Lu(function(){var u=l,d=go(n),g=[];e:{var m=id.get(e);if(m!==void 0){var y=jo,w=e;switch(e){case"keypress":if(js(n)===0)break e;case"keydown":case"keyup":y=zp;break;case"focusin":w="focus",y=Dl;break;case"focusout":w="blur",y=Dl;break;case"beforeblur":case"afterblur":y=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Mp;break;case nd:case rd:case sd:y=Sp;break;case ld:y=Bp;break;case"scroll":y=xp;break;case"wheel":y=Ip;break;case"copy":case"cut":case"paste":y=Ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=za}var v=(t&4)!==0,j=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var h=u,f;h!==null;){f=h;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Nr(h,p),x!=null&&v.push(Lr(h,x,f)))),j)break;h=h.return}0<v.length&&(m=new y(m,w,null,n,d),g.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==vi&&(w=n.relatedTarget||n.fromElement)&&(Jt(w)||w[kt]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Jt(w):null,w!==null&&(j=pn(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=Pa,x="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=za,x="onPointerLeave",p="onPointerEnter",h="pointer"),j=y==null?m:bn(y),f=w==null?m:bn(w),m=new v(x,h+"leave",y,n,d),m.target=j,m.relatedTarget=f,x=null,Jt(d)===u&&(v=new v(p,h+"enter",w,n,d),v.target=f,v.relatedTarget=j,x=v),j=x,y&&w)t:{for(v=y,p=w,h=0,f=v;f;f=yn(f))h++;for(f=0,x=p;x;x=yn(x))f++;for(;0<h-f;)v=yn(v),h--;for(;0<f-h;)p=yn(p),f--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=yn(v),p=yn(p)}v=null}else v=null;y!==null&&Ha(g,m,y,v,!1),w!==null&&j!==null&&Ha(g,j,w,v,!0)}}e:{if(m=u?bn(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=Kp;else if(Ma(m))if(Qu)S=Yp;else{S=Gp;var N=qp}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Xp);if(S&&(S=S(e,u))){Yu(g,S,n,d);break e}N&&N(e,m,u),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&pi(m,"number",m.value)}switch(N=u?bn(u):window,e){case"focusin":(Ma(N)||N.contentEditable==="true")&&(Nn=N,bi=u,gr=null);break;case"focusout":gr=bi=Nn=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,Fa(g,n,d);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":Fa(g,n,d)}var b;if(No)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Sn?Gu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(qu&&n.locale!=="ko"&&(Sn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Sn&&(b=Ku()):(At=d,ko="value"in At?At.value:At.textContent,Sn=!0)),N=Ds(u,L),0<N.length&&(L=new La(L,e,null,n,d),g.push({event:L,listeners:N}),b?L.data=b:(b=Xu(n),b!==null&&(L.data=b)))),(b=$p?Up(e,n):Hp(e,n))&&(u=Ds(u,"onBeforeInput"),0<u.length&&(d=new La("onBeforeInput","beforeinput",null,n,d),g.push({event:d,listeners:u}),d.data=b))}od(g,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Nr(e,n),l!=null&&r.unshift(Lr(e,l,s)),l=Nr(e,t),l!=null&&r.push(Lr(e,l,s))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ha(e,t,n,r,s){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,s?(c=Nr(n,l),c!=null&&o.unshift(Lr(n,c,a))):s||(c=Nr(n,l),c!=null&&o.push(Lr(n,c,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var rm=/\r\n?/g,sm=/\u0000|\uFFFD/g;function Va(e){return(typeof e=="string"?e:""+e).replace(rm,`
`).replace(sm,"")}function ss(e,t,n){if(t=Va(t),Va(e)!==t&&n)throw Error(T(425))}function Is(){}var _i=null,Ti=null;function Pi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(om)}:Li;function om(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Cr(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Zn,zr="__reactProps$"+Zn,kt="__reactContainer$"+Zn,zi="__reactEvents$"+Zn,am="__reactListeners$"+Zn,cm="__reactHandles$"+Zn;function Jt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ka(e);e!==null;){if(n=e[ot])return n;e=Ka(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[ot]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function pl(e){return e[zr]||null}var Ri=[],Cn=-1;function Xt(e){return{current:e}}function te(e){0>Cn||(e.current=Ri[Cn],Ri[Cn]=null,Cn--)}function Q(e,t){Cn++,Ri[Cn]=e.current,e.current=t}var qt={},Ne=Xt(qt),ze=Xt(!1),an=qt;function Un(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Re(e){return e=e.childContextTypes,e!=null}function Fs(){te(ze),te(Ne)}function qa(e,t,n){if(Ne.current!==qt)throw Error(T(168));Q(Ne,t),Q(ze,n)}function cd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(T(108,qh(e)||"Unknown",s));return oe({},n,r)}function $s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,an=Ne.current,Q(Ne,e),Q(ze,ze.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=cd(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,te(ze),te(Ne),Q(Ne,e)):te(ze),Q(ze,n)}var gt=null,ml=!1,ql=!1;function ud(e){gt===null?gt=[e]:gt.push(e)}function um(e){ml=!0,ud(e)}function Yt(){if(!ql&&gt!==null){ql=!0;var e=0,t=X;try{var n=gt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,ml=!1}catch(s){throw gt!==null&&(gt=gt.slice(e+1)),Mu(yo,Yt),s}finally{X=t,ql=!1}}return null}var _n=[],Tn=0,Us=null,Hs=0,Ue=[],He=0,cn=null,yt=1,xt="";function Qt(e,t){_n[Tn++]=Hs,_n[Tn++]=Us,Us=e,Hs=t}function dd(e,t,n){Ue[He++]=yt,Ue[He++]=xt,Ue[He++]=cn,cn=e;var r=yt;e=xt;var s=32-Je(r)-1;r&=~(1<<s),n+=1;var l=32-Je(t)+s;if(30<l){var o=s-s%5;l=(r&(1<<o)-1).toString(32),r>>=o,s-=o,yt=1<<32-Je(t)+s|n<<s|r,xt=l+e}else yt=1<<l|n<<s|r,xt=e}function bo(e){e.return!==null&&(Qt(e,1),dd(e,1,0))}function Co(e){for(;e===Us;)Us=_n[--Tn],_n[Tn]=null,Hs=_n[--Tn],_n[Tn]=null;for(;e===cn;)cn=Ue[--He],Ue[He]=null,xt=Ue[--He],Ue[He]=null,yt=Ue[--He],Ue[He]=null}var Be=null,Ae=null,re=!1,Ze=null;function fd(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Ae=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:yt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Ae=null,!0):!1;default:return!1}}function Oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(re){var t=Ae;if(t){var n=t;if(!Xa(e,t)){if(Oi(e))throw Error(T(418));t=$t(n.nextSibling);var r=Be;t&&Xa(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,re=!1,Be=e)}}else{if(Oi(e))throw Error(T(418));e.flags=e.flags&-4097|2,re=!1,Be=e}}}function Ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function ls(e){if(e!==Be)return!1;if(!re)return Ya(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pi(e.type,e.memoizedProps)),t&&(t=Ae)){if(Oi(e))throw hd(),Error(T(418));for(;t;)fd(e,t),t=$t(t.nextSibling)}if(Ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Be?$t(e.stateNode.nextSibling):null;return!0}function hd(){for(var e=Ae;e;)e=$t(e.nextSibling)}function Hn(){Ae=Be=null,re=!1}function _o(e){Ze===null?Ze=[e]:Ze.push(e)}var dm=Et.ReactCurrentBatchConfig;function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=s.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function is(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qa(e){var t=e._init;return t(e._payload)}function pd(e){function t(p,h){if(e){var f=p.deletions;f===null?(p.deletions=[h],p.flags|=16):f.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function s(p,h){return p=Wt(p,h),p.index=0,p.sibling=null,p}function l(p,h,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<h?(p.flags|=2,h):f):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,f,x){return h===null||h.tag!==6?(h=ei(f,p.mode,x),h.return=p,h):(h=s(h,f),h.return=p,h)}function c(p,h,f,x){var S=f.type;return S===jn?d(p,h,f.props.children,x,f.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zt&&Qa(S)===h.type)?(x=s(h,f.props),x.ref=sr(p,h,f),x.return=p,x):(x=Ts(f.type,f.key,f.props,null,p.mode,x),x.ref=sr(p,h,f),x.return=p,x)}function u(p,h,f,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=ti(f,p.mode,x),h.return=p,h):(h=s(h,f.children||[]),h.return=p,h)}function d(p,h,f,x,S){return h===null||h.tag!==7?(h=sn(f,p.mode,x,S),h.return=p,h):(h=s(h,f),h.return=p,h)}function g(p,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ei(""+h,p.mode,f),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Xr:return f=Ts(h.type,h.key,h.props,null,p.mode,f),f.ref=sr(p,null,h),f.return=p,f;case kn:return h=ti(h,p.mode,f),h.return=p,h;case zt:var x=h._init;return g(p,x(h._payload),f)}if(ar(h)||Jn(h))return h=sn(h,p.mode,f,null),h.return=p,h;is(p,h)}return null}function m(p,h,f,x){var S=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(p,h,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xr:return f.key===S?c(p,h,f,x):null;case kn:return f.key===S?u(p,h,f,x):null;case zt:return S=f._init,m(p,h,S(f._payload),x)}if(ar(f)||Jn(f))return S!==null?null:d(p,h,f,x,null);is(p,f)}return null}function y(p,h,f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,a(h,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xr:return p=p.get(x.key===null?f:x.key)||null,c(h,p,x,S);case kn:return p=p.get(x.key===null?f:x.key)||null,u(h,p,x,S);case zt:var N=x._init;return y(p,h,f,N(x._payload),S)}if(ar(x)||Jn(x))return p=p.get(f)||null,d(h,p,x,S,null);is(h,x)}return null}function w(p,h,f,x){for(var S=null,N=null,b=h,L=h=0,O=null;b!==null&&L<f.length;L++){b.index>L?(O=b,b=null):O=b.sibling;var z=m(p,b,f[L],x);if(z===null){b===null&&(b=O);break}e&&b&&z.alternate===null&&t(p,b),h=l(z,h,L),N===null?S=z:N.sibling=z,N=z,b=O}if(L===f.length)return n(p,b),re&&Qt(p,L),S;if(b===null){for(;L<f.length;L++)b=g(p,f[L],x),b!==null&&(h=l(b,h,L),N===null?S=b:N.sibling=b,N=b);return re&&Qt(p,L),S}for(b=r(p,b);L<f.length;L++)O=y(b,p,L,f[L],x),O!==null&&(e&&O.alternate!==null&&b.delete(O.key===null?L:O.key),h=l(O,h,L),N===null?S=O:N.sibling=O,N=O);return e&&b.forEach(function(U){return t(p,U)}),re&&Qt(p,L),S}function v(p,h,f,x){var S=Jn(f);if(typeof S!="function")throw Error(T(150));if(f=S.call(f),f==null)throw Error(T(151));for(var N=S=null,b=h,L=h=0,O=null,z=f.next();b!==null&&!z.done;L++,z=f.next()){b.index>L?(O=b,b=null):O=b.sibling;var U=m(p,b,z.value,x);if(U===null){b===null&&(b=O);break}e&&b&&U.alternate===null&&t(p,b),h=l(U,h,L),N===null?S=U:N.sibling=U,N=U,b=O}if(z.done)return n(p,b),re&&Qt(p,L),S;if(b===null){for(;!z.done;L++,z=f.next())z=g(p,z.value,x),z!==null&&(h=l(z,h,L),N===null?S=z:N.sibling=z,N=z);return re&&Qt(p,L),S}for(b=r(p,b);!z.done;L++,z=f.next())z=y(b,p,L,z.value,x),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?L:z.key),h=l(z,h,L),N===null?S=z:N.sibling=z,N=z);return e&&b.forEach(function(E){return t(p,E)}),re&&Qt(p,L),S}function j(p,h,f,x){if(typeof f=="object"&&f!==null&&f.type===jn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Xr:e:{for(var S=f.key,N=h;N!==null;){if(N.key===S){if(S=f.type,S===jn){if(N.tag===7){n(p,N.sibling),h=s(N,f.props.children),h.return=p,p=h;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zt&&Qa(S)===N.type){n(p,N.sibling),h=s(N,f.props),h.ref=sr(p,N,f),h.return=p,p=h;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===jn?(h=sn(f.props.children,p.mode,x,f.key),h.return=p,p=h):(x=Ts(f.type,f.key,f.props,null,p.mode,x),x.ref=sr(p,h,f),x.return=p,p=x)}return o(p);case kn:e:{for(N=f.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(p,h.sibling),h=s(h,f.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=ti(f,p.mode,x),h.return=p,p=h}return o(p);case zt:return N=f._init,j(p,h,N(f._payload),x)}if(ar(f))return w(p,h,f,x);if(Jn(f))return v(p,h,f,x);is(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(p,h.sibling),h=s(h,f),h.return=p,p=h):(n(p,h),h=ei(f,p.mode,x),h.return=p,p=h),o(p)):n(p,h)}return j}var Vn=pd(!0),md=pd(!1),Vs=Xt(null),Ws=null,Pn=null,To=null;function Po(){To=Pn=Ws=null}function Lo(e){var t=Vs.current;te(Vs),e._currentValue=t}function Ai(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){Ws=e,To=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(To!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Ws===null)throw Error(T(308));Pn=e,Ws.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var en=null;function zo(e){en===null?en=[e]:en.push(e)}function gd(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,zo(t)):(n.next=s.next,s.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,jt(e,n)}return s=r.interleaved,s===null?(t.next=t,zo(r)):(t.next=s.next,s.next=t),r.interleaved=t,jt(e,n)}function Ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xo(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ks(e,t,n,r){var s=e.updateQueue;Rt=!1;var l=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?l=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(l!==null){var g=s.baseState;o=0,d=u=c=null,a=l;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(m=t,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){g=w.call(y,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(y,g,m):w,m==null)break e;g=oe({},g,m);break e;case 2:Rt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,c=g):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(d===null&&(c=g),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);dn|=o,e.lanes=o,e.memoizedState=g}}function Ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(T(191,s));s.call(r)}}}var qr={},ct=Xt(qr),Rr=Xt(qr),Or=Xt(qr);function tn(e){if(e===qr)throw Error(T(174));return e}function Oo(e,t){switch(Q(Or,t),Q(Rr,e),Q(ct,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}te(ct),Q(ct,t)}function Wn(){te(ct),te(Rr),te(Or)}function xd(e){tn(Or.current);var t=tn(ct.current),n=gi(t,e.type);t!==n&&(Q(Rr,e),Q(ct,n))}function Mo(e){Rr.current===e&&(te(ct),te(Rr))}var se=Xt(0);function qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function Ao(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var Ns=Et.ReactCurrentDispatcher,Xl=Et.ReactCurrentBatchConfig,un=0,ie=null,de=null,pe=null,Gs=!1,yr=!1,Mr=0,fm=0;function ke(){throw Error(T(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,s,l){if(un=l,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ns.current=e===null||e.memoizedState===null?gm:ym,e=n(r,s),yr){l=0;do{if(yr=!1,Mr=0,25<=l)throw Error(T(301));l+=1,pe=de=null,t.updateQueue=null,Ns.current=xm,e=n(r,s)}while(yr)}if(Ns.current=Xs,t=de!==null&&de.next!==null,un=0,pe=de=ie=null,Gs=!1,t)throw Error(T(300));return e}function Io(){var e=Mr!==0;return Mr=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ie.memoizedState=pe=e:pe=pe.next=e,pe}function qe(){if(de===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=pe===null?ie.memoizedState:pe.next;if(t!==null)pe=t,de=e;else{if(e===null)throw Error(T(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},pe===null?ie.memoizedState=pe=e:pe=pe.next=e}return pe}function Ar(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=qe(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=de,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var o=s.next;s.next=l.next,l.next=o}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var a=o=null,c=null,u=l;do{var d=u.lane;if((un&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=g,o=r):c=c.next=g,ie.lanes|=d,dn|=d}u=u.next}while(u!==null&&u!==l);c===null?o=r:c.next=a,tt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,ie.lanes|=l,dn|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=qe(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do l=e(l,o.action),o=o.next;while(o!==s);tt(l,t.memoizedState)||(Le=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function vd(){}function wd(e,t){var n=ie,r=qe(),s=t(),l=!tt(r.memoizedState,s);if(l&&(r.memoizedState=s,Le=!0),r=r.queue,Fo(Sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Br(9,jd.bind(null,n,r,s,t),void 0,null),ye===null)throw Error(T(349));un&30||kd(n,t,s)}return s}function kd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jd(e,t,n,r){t.value=n,t.getSnapshot=r,Nd(t)&&Ed(e)}function Sd(e,t,n){return n(function(){Nd(t)&&Ed(e)})}function Nd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Ed(e){var t=jt(e,1);t!==null&&et(t,e,1,-1)}function ec(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t.queue=e,e=e.dispatch=mm.bind(null,ie,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bd(){return qe().memoizedState}function Es(e,t,n,r){var s=it();ie.flags|=e,s.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function gl(e,t,n,r){var s=qe();r=r===void 0?null:r;var l=void 0;if(de!==null){var o=de.memoizedState;if(l=o.destroy,r!==null&&Bo(r,o.deps)){s.memoizedState=Br(t,n,l,r);return}}ie.flags|=e,s.memoizedState=Br(1|t,n,l,r)}function tc(e,t){return Es(8390656,8,e,t)}function Fo(e,t){return gl(2048,8,e,t)}function Cd(e,t){return gl(4,2,e,t)}function _d(e,t){return gl(4,4,e,t)}function Td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pd(e,t,n){return n=n!=null?n.concat([e]):null,gl(4,4,Td.bind(null,t,e),n)}function $o(){}function Ld(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rd(e,t,n){return un&21?(tt(n,t)||(n=Du(),ie.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function hm(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{X=n,Xl.transition=r}}function Od(){return qe().memoizedState}function pm(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Md(e))Ad(t,n);else if(n=gd(e,t,n,r),n!==null){var s=Ce();et(n,e,r,s),Bd(n,t,r)}}function mm(e,t,n){var r=Vt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Md(e))Ad(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(s.hasEagerState=!0,s.eagerState=a,tt(a,o)){var c=t.interleaved;c===null?(s.next=s,zo(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=gd(e,t,s,r),n!==null&&(s=Ce(),et(n,e,r,s),Bd(n,t,r))}}function Md(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ad(e,t){yr=Gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xo(e,n)}}var Xs={readContext:Ke,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},gm={readContext:Ke,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Es(4194308,4,Td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){return Es(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pm.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:ec,useDebugValue:$o,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=ec(!1),t=e[0];return e=hm.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,s=it();if(re){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ye===null)throw Error(T(349));un&30||kd(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,tc(Sd.bind(null,r,l,e),[e]),r.flags|=2048,Br(9,jd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=it(),t=ye.identifierPrefix;if(re){var n=xt,r=yt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ym={readContext:Ke,useCallback:Ld,useContext:Ke,useEffect:Fo,useImperativeHandle:Pd,useInsertionEffect:Cd,useLayoutEffect:_d,useMemo:zd,useReducer:Yl,useRef:bd,useState:function(){return Yl(Ar)},useDebugValue:$o,useDeferredValue:function(e){var t=qe();return Rd(t,de.memoizedState,e)},useTransition:function(){var e=Yl(Ar)[0],t=qe().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:wd,useId:Od,unstable_isNewReconciler:!1},xm={readContext:Ke,useCallback:Ld,useContext:Ke,useEffect:Fo,useImperativeHandle:Pd,useInsertionEffect:Cd,useLayoutEffect:_d,useMemo:zd,useReducer:Ql,useRef:bd,useState:function(){return Ql(Ar)},useDebugValue:$o,useDeferredValue:function(e){var t=qe();return de===null?t.memoizedState=e:Rd(t,de.memoizedState,e)},useTransition:function(){var e=Ql(Ar)[0],t=qe().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:wd,useId:Od,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yl={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),s=Vt(e),l=vt(r,s);l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,s),t!==null&&(et(t,e,s,r),Ss(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),s=Vt(e),l=vt(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,s),t!==null&&(et(t,e,s,r),Ss(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Vt(e),s=vt(n,r);s.tag=2,t!=null&&(s.callback=t),t=Ut(e,s,r),t!==null&&(et(t,e,r,n),Ss(t,e,r))}};function nc(e,t,n,r,s,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(s,l):!0}function Dd(e,t,n){var r=!1,s=qt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ke(l):(s=Re(t)?an:Ne.current,r=t.contextTypes,l=(r=r!=null)?Un(e,s):qt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ro(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=Ke(l):(l=Re(t)?an:Ne.current,s.context=Un(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Bi(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&yl.enqueueReplaceState(s,s.state,null),Ks(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=Kh(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ii(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vm=typeof WeakMap=="function"?WeakMap:Map;function Id(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qs||(Qs=!0,Xi=r),Ii(e,t)},n}function Fd(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Ii(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ii(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Rm.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ic(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var wm=Et.ReactCurrentOwner,Le=!1;function be(e,t,n,r){t.child=e===null?md(t,null,n,r):Vn(t,e.child,n,r)}function oc(e,t,n,r,s){n=n.render;var l=t.ref;return Bn(t,s),r=Do(e,t,n,r,l,s),n=Io(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,St(e,t,s)):(re&&n&&bo(t),t.flags|=1,be(e,t,r,s),t.child)}function ac(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!Xo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$d(e,t,l,r,s)):(e=Ts(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(o,r)&&e.ref===t.ref)return St(e,t,s)}return t.flags|=1,e=Wt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(Tr(l,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,St(e,t,s)}return Fi(e,t,n,r,s)}function Ud(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(zn,Me),Me|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(zn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Q(zn,Me),Me|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Q(zn,Me),Me|=r;return be(e,t,s,n),t.child}function Hd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fi(e,t,n,r,s){var l=Re(n)?an:Ne.current;return l=Un(t,l),Bn(t,s),n=Do(e,t,n,r,l,s),r=Io(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,St(e,t,s)):(re&&r&&bo(t),t.flags|=1,be(e,t,n,s),t.child)}function cc(e,t,n,r,s){if(Re(n)){var l=!0;$s(t)}else l=!1;if(Bn(t,s),t.stateNode===null)bs(e,t),Dd(t,n,r),Di(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Re(n)?an:Ne.current,u=Un(t,u));var d=n.getDerivedStateFromProps,g=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&rc(t,o,r,u),Rt=!1;var m=t.memoizedState;o.state=m,Ks(t,r,o,s),c=t.memoizedState,a!==r||m!==c||ze.current||Rt?(typeof d=="function"&&(Bi(t,n,d,r),c=t.memoizedState),(a=Rt||nc(t,n,a,r,m,c,u))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,yd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ye(t.type,a),o.props=u,g=t.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ke(c):(c=Re(n)?an:Ne.current,c=Un(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||m!==c)&&rc(t,o,r,c),Rt=!1,m=t.memoizedState,o.state=m,Ks(t,r,o,s);var w=t.memoizedState;a!==g||m!==w||ze.current||Rt?(typeof y=="function"&&(Bi(t,n,y,r),w=t.memoizedState),(u=Rt||nc(t,n,u,r,m,w,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,l,s)}function $i(e,t,n,r,s,l){Hd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&Ga(t,n,!1),St(e,t,l);r=t.stateNode,wm.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Vn(t,e.child,null,l),t.child=Vn(t,null,a,l)):be(e,t,a,l),t.memoizedState=r.state,s&&Ga(t,n,!0),t.child}function Vd(e){var t=e.stateNode;t.pendingContext?qa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qa(e,t.context,!1),Oo(e,t.containerInfo)}function uc(e,t,n,r,s){return Hn(),_o(s),t.flags|=256,be(e,t,n,r),t.child}var Ui={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wd(e,t,n){var r=t.pendingProps,s=se.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Q(se,s&1),e===null)return Mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=wl(o,r,0,null),e=sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Hi(n),t.memoizedState=Ui,e):Uo(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return km(e,t,o,r,a,s,n);if(l){l=r.fallback,o=t.mode,s=e.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Wt(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?l=Wt(a,l):(l=sn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Hi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Ui,r}return l=e.child,e=l.sibling,r=Wt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uo(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function os(e,t,n,r){return r!==null&&_o(r),Vn(t,e.child,null,n),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function km(e,t,n,r,s,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(T(422))),os(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=wl({mode:"visible",children:r.children},s,0,null),l=sn(l,s,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Vn(t,e.child,null,o),t.child.memoizedState=Hi(o),t.memoizedState=Ui,l);if(!(t.mode&1))return os(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(T(419)),r=Zl(l,r,void 0),os(e,t,o,r)}if(a=(o&e.childLanes)!==0,Le||a){if(r=ye,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,jt(e,s),et(r,e,s,-1))}return Go(),r=Zl(Error(T(421))),os(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,Ae=$t(s.nextSibling),Be=t,re=!0,Ze=null,e!==null&&(Ue[He++]=yt,Ue[He++]=xt,Ue[He++]=cn,yt=e.id,xt=e.overflow,cn=t),t=Uo(t,r.children),t.flags|=4096,t)}function dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ai(e.return,t,n)}function Jl(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function Kd(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(be(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dc(e,n,t);else if(e.tag===19)dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(se,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&qs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Jl(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&qs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Jl(t,!0,n,null,l);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jm(e,t,n){switch(t.tag){case 3:Vd(t),Hn();break;case 5:xd(t);break;case 1:Re(t.type)&&$s(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Q(Vs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Wd(e,t,n):(Q(se,se.current&1),e=St(e,t,n),e!==null?e.sibling:null);Q(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kd(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Ud(e,t,n)}return St(e,t,n)}var qd,Vi,Gd,Xd;qd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};Gd=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,tn(ct.current);var l=null;switch(n){case"input":s=fi(e,s),r=fi(e,r),l=[];break;case"select":s=oe({},s,{value:void 0}),r=oe({},r,{value:void 0}),l=[];break;case"textarea":s=mi(e,s),r=mi(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Is)}yi(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var c=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ee("scroll",e),l||a===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Xd=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sm(e,t,n){var r=t.pendingProps;switch(Co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Re(t.type)&&Fs(),je(t),null;case 3:return r=t.stateNode,Wn(),te(ze),te(Ne),Ao(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ls(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Zi(Ze),Ze=null))),Vi(e,t),je(t),null;case 5:Mo(t);var s=tn(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)Gd(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return je(t),null}if(e=tn(ct.current),ls(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ot]=t,r[zr]=l,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(s=0;s<ur.length;s++)ee(ur[s],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":wa(r,l),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ee("invalid",r);break;case"textarea":ja(r,l),ee("invalid",r)}yi(n,l),s=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&ss(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&ss(r.textContent,a,e),s=["children",""+a]):jr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":Yr(r),ka(r,l,!0);break;case"textarea":Yr(r),Sa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Is)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Su(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ot]=t,e[zr]=r,qd(e,t,!1,!1),t.stateNode=e;e:{switch(o=xi(n,r),n){case"dialog":ee("cancel",e),ee("close",e),s=r;break;case"iframe":case"object":case"embed":ee("load",e),s=r;break;case"video":case"audio":for(s=0;s<ur.length;s++)ee(ur[s],e);s=r;break;case"source":ee("error",e),s=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),s=r;break;case"details":ee("toggle",e),s=r;break;case"input":wa(e,r),s=fi(e,r),ee("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=oe({},r,{value:void 0}),ee("invalid",e);break;case"textarea":ja(e,r),s=mi(e,r),ee("invalid",e);break;default:s=r}yi(n,s),a=s;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?bu(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Nu(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Sr(e,c):typeof c=="number"&&Sr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(jr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&ee("scroll",e):c!=null&&fo(e,l,c,o))}switch(n){case"input":Yr(e),ka(e,r,!1);break;case"textarea":Yr(e),Sa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Rn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Xd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=tn(Or.current),tn(ct.current),ls(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(l=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:ss(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ss(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return je(t),null;case 13:if(te(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ae!==null&&t.mode&1&&!(t.flags&128))hd(),Hn(),t.flags|=98560,l=!1;else if(l=ls(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(T(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));l[ot]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),l=!1}else Ze!==null&&(Zi(Ze),Ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?he===0&&(he=3):Go())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Wn(),Vi(e,t),e===null&&Pr(t.stateNode.containerInfo),je(t),null;case 10:return Lo(t.type._context),je(t),null;case 17:return Re(t.type)&&Fs(),je(t),null;case 19:if(te(se),l=t.memoizedState,l===null)return je(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)lr(l,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=qs(e),o!==null){for(t.flags|=128,lr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(se,se.current&1|2),t.child}e=e.sibling}l.tail!==null&&ce()>qn&&(t.flags|=128,r=!0,lr(l,!1),t.lanes=4194304)}else{if(!r)if(e=qs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!re)return je(t),null}else 2*ce()-l.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,lr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ce(),t.sibling=null,n=se.current,Q(se,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return qo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Nm(e,t){switch(Co(t),t.tag){case 1:return Re(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),te(ze),te(Ne),Ao(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mo(t),null;case 13:if(te(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(se),null;case 4:return Wn(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return qo(),null;case 24:return null;default:return null}}var as=!1,Se=!1,Em=typeof WeakSet=="function"?WeakSet:Set,B=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Wi(e,t,n){try{n()}catch(r){ae(e,t,r)}}var fc=!1;function bm(e,t){if(_i=As,e=ed(),Eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,d=0,g=e,m=null;t:for(;;){for(var y;g!==n||s!==0&&g.nodeType!==3||(a=o+s),g!==l||r!==0&&g.nodeType!==3||(c=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(y=g.firstChild)!==null;)m=g,g=y;for(;;){if(g===e)break t;if(m===n&&++u===s&&(a=o),m===l&&++d===r&&(c=o),(y=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},As=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,j=w.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ye(t.type,v),j);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(x){ae(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return w=fc,fc=!1,w}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&Wi(t,n,l)}s=s.next}while(s!==r)}}function xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yd(e){var t=e.alternate;t!==null&&(e.alternate=null,Yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[zr],delete t[zi],delete t[am],delete t[cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qd(e){return e.tag===5||e.tag===3||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Is));else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}var xe=null,Qe=!1;function _t(e,t,n){for(n=n.child;n!==null;)Zd(e,t,n),n=n.sibling}function Zd(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Se||Ln(n,t);case 6:var r=xe,s=Qe;xe=null,_t(e,t,n),xe=r,Qe=s,xe!==null&&(Qe?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(Qe?(e=xe,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),Cr(e)):Kl(xe,n.stateNode));break;case 4:r=xe,s=Qe,xe=n.stateNode.containerInfo,Qe=!0,_t(e,t,n),xe=r,Qe=s;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Wi(n,t,o),s=s.next}while(s!==r)}_t(e,t,n);break;case 1:if(!Se&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,_t(e,t,n),Se=r):_t(e,t,n);break;default:_t(e,t,n)}}function pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Em),t.forEach(function(r){var s=Mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,Qe=!1;break e;case 3:xe=a.stateNode.containerInfo,Qe=!0;break e;case 4:xe=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(xe===null)throw Error(T(160));Zd(l,o,s),xe=null,Qe=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ae(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jd(t,e),t=t.sibling}function Jd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),rt(e),r&4){try{xr(3,e,e.return),xl(3,e)}catch(v){ae(e,e.return,v)}try{xr(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:Xe(t,e),rt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(Xe(t,e),rt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var s=e.stateNode;try{Sr(s,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&ku(s,l),xi(a,o);var u=xi(a,l);for(o=0;o<c.length;o+=2){var d=c[o],g=c[o+1];d==="style"?bu(s,g):d==="dangerouslySetInnerHTML"?Nu(s,g):d==="children"?Sr(s,g):fo(s,d,g,u)}switch(a){case"input":hi(s,l);break;case"textarea":ju(s,l);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Rn(s,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?Rn(s,!!l.multiple,l.defaultValue,!0):Rn(s,!!l.multiple,l.multiple?[]:"",!1))}s[zr]=l}catch(v){ae(e,e.return,v)}}break;case 6:if(Xe(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(T(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(v){ae(e,e.return,v)}}break;case 3:if(Xe(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:Xe(t,e),rt(e);break;case 13:Xe(t,e),rt(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(Wo=ce())),r&4&&pc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||d,Xe(t,e),Se=u):Xe(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(g=B=d;B!==null;){switch(m=B,y=m.child,m.tag){case 0:case 11:case 14:case 15:xr(4,m,m.return);break;case 1:Ln(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Ln(m,m.return);break;case 22:if(m.memoizedState!==null){gc(g);continue}}y!==null?(y.return=m,B=y):gc(g)}d=d.sibling}e:for(d=null,g=e;;){if(g.tag===5){if(d===null){d=g;try{s=g.stateNode,u?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,c=g.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Eu("display",o))}catch(v){ae(e,e.return,v)}}}else if(g.tag===6){if(d===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(v){ae(e,e.return,v)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;d===g&&(d=null),g=g.return}d===g&&(d=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Xe(t,e),rt(e),r&4&&pc(e);break;case 21:break;default:Xe(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qd(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Sr(s,""),r.flags&=-33);var l=hc(e);Gi(e,l,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=hc(e);qi(e,a,o);break;default:throw Error(T(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cm(e,t,n){B=e,ef(e)}function ef(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var s=B,l=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||as;if(!o){var a=s.alternate,c=a!==null&&a.memoizedState!==null||Se;a=as;var u=Se;if(as=o,(Se=c)&&!u)for(B=s;B!==null;)o=B,c=o.child,o.tag===22&&o.memoizedState!==null?yc(s):c!==null?(c.return=o,B=c):yc(s);for(;l!==null;)B=l,ef(l),l=l.sibling;B=s,as=a,Se=u}mc(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,B=l):mc(e)}}function mc(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ja(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ja(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var g=d.dehydrated;g!==null&&Cr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Se||t.flags&512&&Ki(t)}catch(m){ae(t,t.return,m)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function gc(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function yc(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xl(4,t)}catch(c){ae(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){ae(t,s,c)}}var l=t.return;try{Ki(t)}catch(c){ae(t,l,c)}break;case 5:var o=t.return;try{Ki(t)}catch(c){ae(t,o,c)}}}catch(c){ae(t,t.return,c)}if(t===e){B=null;break}var a=t.sibling;if(a!==null){a.return=t.return,B=a;break}B=t.return}}var _m=Math.ceil,Ys=Et.ReactCurrentDispatcher,Ho=Et.ReactCurrentOwner,We=Et.ReactCurrentBatchConfig,q=0,ye=null,ue=null,ve=0,Me=0,zn=Xt(0),he=0,Dr=null,dn=0,vl=0,Vo=0,vr=null,Pe=null,Wo=0,qn=1/0,mt=null,Qs=!1,Xi=null,Ht=null,cs=!1,Bt=null,Zs=0,wr=0,Yi=null,Cs=-1,_s=0;function Ce(){return q&6?ce():Cs!==-1?Cs:Cs=ce()}function Vt(e){return e.mode&1?q&2&&ve!==0?ve&-ve:dm.transition!==null?(_s===0&&(_s=Du()),_s):(e=X,e!==0||(e=window.event,e=e===void 0?16:Wu(e.type)),e):1}function et(e,t,n,r){if(50<wr)throw wr=0,Yi=null,Error(T(185));Vr(e,n,r),(!(q&2)||e!==ye)&&(e===ye&&(!(q&2)&&(vl|=n),he===4&&Mt(e,ve)),Oe(e,r),n===1&&q===0&&!(t.mode&1)&&(qn=ce()+500,ml&&Yt()))}function Oe(e,t){var n=e.callbackNode;dp(e,t);var r=Ms(e,e===ye?ve:0);if(r===0)n!==null&&ba(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ba(n),t===1)e.tag===0?um(xc.bind(null,e)):ud(xc.bind(null,e)),im(function(){!(q&6)&&Yt()}),n=null;else{switch(Iu(r)){case 1:n=yo;break;case 4:n=Au;break;case 16:n=Os;break;case 536870912:n=Bu;break;default:n=Os}n=cf(n,tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tf(e,t){if(Cs=-1,_s=0,q&6)throw Error(T(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Ms(e,e===ye?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Js(e,r);else{t=r;var s=q;q|=2;var l=rf();(ye!==e||ve!==t)&&(mt=null,qn=ce()+500,rn(e,t));do try{Lm();break}catch(a){nf(e,a)}while(!0);Po(),Ys.current=l,q=s,ue!==null?t=0:(ye=null,ve=0,t=he)}if(t!==0){if(t===2&&(s=Si(e),s!==0&&(r=s,t=Qi(e,s))),t===1)throw n=Dr,rn(e,0),Mt(e,r),Oe(e,ce()),n;if(t===6)Mt(e,r);else{if(s=e.current.alternate,!(r&30)&&!Tm(s)&&(t=Js(e,r),t===2&&(l=Si(e),l!==0&&(r=l,t=Qi(e,l))),t===1))throw n=Dr,rn(e,0),Mt(e,r),Oe(e,ce()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Zt(e,Pe,mt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Wo+500-ce(),10<t)){if(Ms(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Li(Zt.bind(null,e,Pe,mt),t);break}Zt(e,Pe,mt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-Je(r);l=1<<o,o=t[o],o>s&&(s=o),r&=~l}if(r=s,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_m(r/1960))-r,10<r){e.timeoutHandle=Li(Zt.bind(null,e,Pe,mt),r);break}Zt(e,Pe,mt);break;case 5:Zt(e,Pe,mt);break;default:throw Error(T(329))}}}return Oe(e,ce()),e.callbackNode===n?tf.bind(null,e):null}function Qi(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=Js(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Zi(t)),e}function Zi(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Tm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!tt(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Vo,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function xc(e){if(q&6)throw Error(T(327));Dn();var t=Ms(e,0);if(!(t&1))return Oe(e,ce()),null;var n=Js(e,t);if(e.tag!==0&&n===2){var r=Si(e);r!==0&&(t=r,n=Qi(e,r))}if(n===1)throw n=Dr,rn(e,0),Mt(e,t),Oe(e,ce()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Pe,mt),Oe(e,ce()),null}function Ko(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(qn=ce()+500,ml&&Yt())}}function fn(e){Bt!==null&&Bt.tag===0&&!(q&6)&&Dn();var t=q;q|=1;var n=We.transition,r=X;try{if(We.transition=null,X=1,e)return e()}finally{X=r,We.transition=n,q=t,!(q&6)&&Yt()}}function qo(){Me=zn.current,te(zn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lm(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fs();break;case 3:Wn(),te(ze),te(Ne),Ao();break;case 5:Mo(r);break;case 4:Wn();break;case 13:te(se);break;case 19:te(se);break;case 10:Lo(r.type._context);break;case 22:case 23:qo()}n=n.return}if(ye=e,ue=e=Wt(e.current,null),ve=Me=t,he=0,Dr=null,Vo=vl=dn=0,Pe=vr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=s,r.next=o}n.pending=r}en=null}return e}function nf(e,t){do{var n=ue;try{if(Po(),Ns.current=Xs,Gs){for(var r=ie.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Gs=!1}if(un=0,pe=de=ie=null,yr=!1,Mr=0,Ho.current=null,n===null||n.return===null){he=1,Dr=t,ue=null;break}e:{var l=e,o=n.return,a=n,c=t;if(t=ve,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,g=d.tag;if(!(d.mode&1)&&(g===0||g===11||g===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=lc(o);if(y!==null){y.flags&=-257,ic(y,o,a,l,t),y.mode&1&&sc(l,u,t),t=y,c=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(c),t.updateQueue=v}else w.add(c);break e}else{if(!(t&1)){sc(l,u,t),Go();break e}c=Error(T(426))}}else if(re&&a.mode&1){var j=lc(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ic(j,o,a,l,t),_o(Kn(c,a));break e}}l=c=Kn(c,a),he!==4&&(he=2),vr===null?vr=[l]:vr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Id(l,c,t);Za(l,p);break e;case 1:a=c;var h=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ht===null||!Ht.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=Fd(l,a,t);Za(l,x);break e}}l=l.return}while(l!==null)}lf(n)}catch(S){t=S,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function rf(){var e=Ys.current;return Ys.current=Xs,e===null?Xs:e}function Go(){(he===0||he===3||he===2)&&(he=4),ye===null||!(dn&268435455)&&!(vl&268435455)||Mt(ye,ve)}function Js(e,t){var n=q;q|=2;var r=rf();(ye!==e||ve!==t)&&(mt=null,rn(e,t));do try{Pm();break}catch(s){nf(e,s)}while(!0);if(Po(),q=n,Ys.current=r,ue!==null)throw Error(T(261));return ye=null,ve=0,he}function Pm(){for(;ue!==null;)sf(ue)}function Lm(){for(;ue!==null&&!np();)sf(ue)}function sf(e){var t=af(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?lf(e):ue=t,Ho.current=null}function lf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nm(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,ue=null;return}}else if(n=Sm(n,t,Me),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);he===0&&(he=5)}function Zt(e,t,n){var r=X,s=We.transition;try{We.transition=null,X=1,zm(e,t,n,r)}finally{We.transition=s,X=r}return null}function zm(e,t,n,r){do Dn();while(Bt!==null);if(q&6)throw Error(T(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(fp(e,l),e===ye&&(ue=ye=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cs||(cs=!0,cf(Os,function(){return Dn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=We.transition,We.transition=null;var o=X;X=1;var a=q;q|=4,Ho.current=null,bm(e,n),Jd(n,e),Zp(Ti),As=!!_i,Ti=_i=null,e.current=n,Cm(n),rp(),q=a,X=o,We.transition=l}else e.current=n;if(cs&&(cs=!1,Bt=e,Zs=s),l=e.pendingLanes,l===0&&(Ht=null),ip(n.stateNode),Oe(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Qs)throw Qs=!1,e=Xi,Xi=null,e;return Zs&1&&e.tag!==0&&Dn(),l=e.pendingLanes,l&1?e===Yi?wr++:(wr=0,Yi=e):wr=0,Yt(),null}function Dn(){if(Bt!==null){var e=Iu(Zs),t=We.transition,n=X;try{if(We.transition=null,X=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,Zs=0,q&6)throw Error(T(331));var s=q;for(q|=4,B=e.current;B!==null;){var l=B,o=l.child;if(B.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:xr(8,d,l)}var g=d.child;if(g!==null)g.return=d,B=g;else for(;B!==null;){d=B;var m=d.sibling,y=d.return;if(Yd(d),d===u){B=null;break}if(m!==null){m.return=y,B=m;break}B=y}}}var w=l.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}B=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,B=o;else e:for(;B!==null;){if(l=B,l.flags&2048)switch(l.tag){case 0:case 11:case 15:xr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,B=p;break e}B=l.return}}var h=e.current;for(B=h;B!==null;){o=B;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,B=f;else e:for(o=h;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xl(9,a)}}catch(S){ae(a,a.return,S)}if(a===o){B=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,B=x;break e}B=a.return}}if(q=s,Yt(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(ul,e)}catch{}r=!0}return r}finally{X=n,We.transition=t}}return!1}function vc(e,t,n){t=Kn(n,t),t=Id(e,t,1),e=Ut(e,t,1),t=Ce(),e!==null&&(Vr(e,1,t),Oe(e,t))}function ae(e,t,n){if(e.tag===3)vc(e,e,n);else for(;t!==null;){if(t.tag===3){vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Kn(n,e),e=Fd(t,e,1),t=Ut(t,e,1),e=Ce(),t!==null&&(Vr(t,1,e),Oe(t,e));break}}t=t.return}}function Rm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(ve&n)===n&&(he===4||he===3&&(ve&130023424)===ve&&500>ce()-Wo?rn(e,0):Vo|=n),Oe(e,t)}function of(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=Ce();e=jt(e,t),e!==null&&(Vr(e,t,n),Oe(e,n))}function Om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),of(e,n)}function Mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),of(e,n)}var af;af=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,jm(e,t,n);Le=!!(e.flags&131072)}else Le=!1,re&&t.flags&1048576&&dd(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bs(e,t),e=t.pendingProps;var s=Un(t,Ne.current);Bn(t,n),s=Do(null,t,r,e,s,n);var l=Io();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(l=!0,$s(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ro(t),s.updater=yl,t.stateNode=s,s._reactInternals=t,Di(t,r,e,n),t=$i(null,t,r,!0,l,n)):(t.tag=0,re&&l&&bo(t),be(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Bm(r),e=Ye(r,e),s){case 0:t=Fi(null,t,r,e,n);break e;case 1:t=cc(null,t,r,e,n);break e;case 11:t=oc(null,t,r,e,n);break e;case 14:t=ac(null,t,r,Ye(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ye(r,s),Fi(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ye(r,s),cc(e,t,r,s,n);case 3:e:{if(Vd(t),e===null)throw Error(T(387));r=t.pendingProps,l=t.memoizedState,s=l.element,yd(e,t),Ks(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=Kn(Error(T(423)),t),t=uc(e,t,r,n,s);break e}else if(r!==s){s=Kn(Error(T(424)),t),t=uc(e,t,r,n,s);break e}else for(Ae=$t(t.stateNode.containerInfo.firstChild),Be=t,re=!0,Ze=null,n=md(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===s){t=St(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return xd(t),e===null&&Mi(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,o=s.children,Pi(r,s)?o=null:l!==null&&Pi(r,l)&&(t.flags|=32),Hd(e,t),be(e,t,o,n),t.child;case 6:return e===null&&Mi(t),null;case 13:return Wd(e,t,n);case 4:return Oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ye(r,s),oc(e,t,r,s,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,o=s.value,Q(Vs,r._currentValue),r._currentValue=o,l!==null)if(tt(l.value,o)){if(l.children===s.children&&!ze.current){t=St(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=vt(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ai(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ai(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}be(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Bn(t,n),s=Ke(s),r=r(s),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,s=Ye(r,t.pendingProps),s=Ye(r.type,s),ac(e,t,r,s,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ye(r,s),bs(e,t),t.tag=1,Re(r)?(e=!0,$s(t)):e=!1,Bn(t,n),Dd(t,r,s),Di(t,r,s,n),$i(null,t,r,!0,e,n);case 19:return Kd(e,t,n);case 22:return Ud(e,t,n)}throw Error(T(156,t.tag))};function cf(e,t){return Mu(e,t)}function Am(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new Am(e,t,n,r)}function Xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bm(e){if(typeof e=="function")return Xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===po)return 11;if(e===mo)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,r,s,l){var o=2;if(r=e,typeof e=="function")Xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case jn:return sn(n.children,s,l,t);case ho:o=8,s|=8;break;case ai:return e=Ve(12,n,t,s|2),e.elementType=ai,e.lanes=l,e;case ci:return e=Ve(13,n,t,s),e.elementType=ci,e.lanes=l,e;case ui:return e=Ve(19,n,t,s),e.elementType=ui,e.lanes=l,e;case xu:return wl(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gu:o=10;break e;case yu:o=9;break e;case po:o=11;break e;case mo:o=14;break e;case zt:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ve(o,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=xu,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Yo(e,t,n,r,s,l,o,a,c){return e=new Dm(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ve(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(l),e}function Im(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uf(e){if(!e)return qt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Re(n))return cd(e,n,t)}return t}function df(e,t,n,r,s,l,o,a,c){return e=Yo(n,r,!0,e,s,l,o,a,c),e.context=uf(null),n=e.current,r=Ce(),s=Vt(n),l=vt(r,s),l.callback=t??null,Ut(n,l,s),e.current.lanes=s,Vr(e,s,r),Oe(e,r),e}function kl(e,t,n,r){var s=t.current,l=Ce(),o=Vt(s);return n=uf(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(s,t,o),e!==null&&(et(e,s,o,l),Ss(e,s,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qo(e,t){wc(e,t),(e=e.alternate)&&wc(e,t)}function Fm(){return null}var ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zo(e){this._internalRoot=e}jl.prototype.render=Zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));kl(e,t,null,null)};jl.prototype.unmount=Zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){kl(null,e,null,null)}),t[kt]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Vu(e)}};function Jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kc(){}function $m(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var u=el(o);l.call(u)}}var o=df(t,r,e,0,null,!1,!1,"",kc);return e._reactRootContainer=o,e[kt]=o.current,Pr(e.nodeType===8?e.parentNode:e),fn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=el(c);a.call(u)}}var c=Yo(e,0,!1,null,null,!1,!1,"",kc);return e._reactRootContainer=c,e[kt]=c.current,Pr(e.nodeType===8?e.parentNode:e),fn(function(){kl(t,c,n,r)}),c}function Nl(e,t,n,r,s){var l=n._reactRootContainer;if(l){var o=l;if(typeof s=="function"){var a=s;s=function(){var c=el(o);a.call(c)}}kl(t,o,e,s)}else o=$m(n,t,e,s,r);return el(o)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(xo(t,n|1),Oe(t,ce()),!(q&6)&&(qn=ce()+500,Yt()))}break;case 13:fn(function(){var r=jt(e,1);if(r!==null){var s=Ce();et(r,e,1,s)}}),Qo(e,1)}};vo=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ce();et(t,e,134217728,n)}Qo(e,134217728)}};$u=function(e){if(e.tag===13){var t=Vt(e),n=jt(e,t);if(n!==null){var r=Ce();et(n,e,t,r)}Qo(e,t)}};Uu=function(){return X};Hu=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};wi=function(e,t,n){switch(t){case"input":if(hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=pl(r);if(!s)throw Error(T(90));wu(r),hi(r,s)}}}break;case"textarea":ju(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}};Tu=Ko;Pu=fn;var Um={usingClientEntryPoint:!1,Events:[Kr,bn,pl,Cu,_u,Ko]},ir={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hm={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ru(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||Fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{ul=us.inject(Hm),at=us}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jo(t))throw Error(T(200));return Im(e,t,null,n)};Ie.createRoot=function(e,t){if(!Jo(e))throw Error(T(299));var n=!1,r="",s=ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Yo(e,1,!1,null,null,n,!1,r,s),e[kt]=t.current,Pr(e.nodeType===8?e.parentNode:e),new Zo(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Ru(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return fn(e)};Ie.hydrate=function(e,t,n){if(!Sl(t))throw Error(T(200));return Nl(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Jo(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",o=ff;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=df(t,null,e,1,n??null,s,!1,l,o),e[kt]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new jl(t)};Ie.render=function(e,t,n){if(!Sl(t))throw Error(T(200));return Nl(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Sl(e))throw Error(T(40));return e._reactRootContainer?(fn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Ie.unstable_batchedUpdates=Ko;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Nl(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function hf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf)}catch(e){console.error(e)}}hf(),fu.exports=Ie;var Vm=fu.exports,jc=Vm;ii.createRoot=jc.createRoot,ii.hydrateRoot=jc.hydrateRoot;/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pf=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Km={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=k.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:l,iconNode:o,...a},c)=>k.createElement("svg",{ref:c,...Km,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:pf("lucide",s),...a},[...o.map(([u,d])=>k.createElement(u,d)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(e,t)=>{const n=k.forwardRef(({className:r,...s},l)=>k.createElement(qm,{ref:l,iconNode:t,className:pf(`lucide-${Wm(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=F("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=F("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=F("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=F("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=F("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=F("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=F("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=F("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=F("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=F("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=F("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=F("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=F("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=F("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=F("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=F("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=F("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=F("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=F("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=F("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=F("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=F("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=F("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=F("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=F("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=F("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=F("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=F("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=F("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=F("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=F("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=F("Pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=F("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=F("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=F("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=F("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=F("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=F("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=F("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=F("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=F("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=F("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=F("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=F("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=F("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=F("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=F("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=F("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=F("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=F("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),w0={connected:"text-ok",connecting:"text-gold",reconnecting:"text-gold",disconnected:"text-danger"},Cc={connected:"WebSocket connected",connecting:"WebSocket connecting",reconnecting:"WebSocket reconnecting",disconnected:"WebSocket disconnected"};function k0({title:e,subtitle:t,network:n,wsState:r,head:s,fmtKvnc:l,lastBlock:o,txCount:a,onMenuClick:c,sidebarOpen:u,menuButtonRef:d}){var w,v,j;const g=n.toLowerCase().includes("mainnet"),m=g?"text-net-mainnet":"text-net-testnet",y=g?"bg-net-mainnet/10":"bg-net-testnet/10";return i.jsxs("header",{className:"h-14 shrink-0 bg-surface border-b border-border flex items-center justify-between gap-2 px-3 sm:px-4",children:[i.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 min-w-0",children:[i.jsx("button",{type:"button",ref:d,onClick:c,className:"btn-secondary p-2 min-h-[44px] min-w-[44px] shrink-0 lg:hidden","aria-label":u?"Close navigation":"Open navigation","aria-expanded":u,"aria-controls":"dashboard-sidebar",children:i.jsx(o0,{size:20})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h1",{className:"font-display text-lg sm:text-xl font-medium text-fg truncate max-w-[50vw] sm:max-w-none",children:e}),i.jsx("p",{className:"hidden sm:block text-xs text-muted truncate",children:t})]})]}),i.jsxs("div",{className:"flex items-center gap-2 sm:gap-4 shrink-0",children:[n&&i.jsxs("div",{className:`flex items-center gap-2 px-2 py-1 rounded ${y} ${m}`,children:[i.jsx(Nc,{className:"w-2 h-2"}),i.jsx("span",{className:"text-xs font-medium truncate max-w-[10rem]",children:n})]}),i.jsxs("div",{className:"flex items-center gap-1",title:Cc[r],"aria-label":Cc[r],role:"status","aria-live":"polite",children:[i.jsx(Nc,{className:`w-2 h-2 ${w0[r]}`}),i.jsx("span",{className:"hidden sm:inline text-xs text-muted",children:"WS"})]}),s&&i.jsxs("div",{className:"hidden md:flex items-center gap-4 text-xs text-muted",children:[i.jsxs("span",{children:["Tip: ",i.jsxs("code",{className:"font-mono",children:[(w=s.tip)==null?void 0:w.slice(0,12),"…"]})]}),i.jsxs("span",{children:["Blocks: ",(v=s.blocks)==null?void 0:v.toLocaleString()]}),i.jsxs("span",{children:["Blue: ",(j=s.blue_score)==null?void 0:j.toLocaleString()]}),o&&i.jsxs("span",{className:"text-ok",children:["New: ",o.slice(0,8)]}),a>0&&i.jsxs("span",{className:"text-blue",children:["TXs: ",a]})]})]})]})}const _c={home:e=>i.jsx(s0,{...e}),"git-branch":e=>i.jsx(n0,{...e}),database:e=>i.jsx(yf,{...e}),activity:e=>i.jsx(tl,{...e}),users:e=>i.jsx(ra,{...e}),clock:e=>i.jsx(nl,{...e}),globe:e=>i.jsx(vf,{...e}),shield:e=>i.jsx(bl,{...e}),coins:e=>i.jsx(ta,{...e}),wallet:e=>i.jsx(eo,{...e}),layers:e=>i.jsx(i0,{...e}),swap:e=>i.jsx(Ji,{...e}),"arrow-right-left":e=>i.jsx(Ji,{...e}),"users-round":e=>i.jsx(g0,{...e}),droplet:e=>i.jsx(Zm,{...e}),pickaxe:e=>i.jsx(jf,{...e}),terminal:e=>i.jsx(p0,{...e}),"bar-chart-2":e=>i.jsx(dr,{...e}),settings:e=>i.jsx(u0,{...e})};function j0(e,t){return t&&t.length>0?t:[{label:"",panels:e}]}function S0({panel:e,isActive:t,onSelect:n}){const r=_c[e.icon]||_c.home;return i.jsxs("button",{type:"button",onClick:()=>n(e.id),className:`nav-item ${t?"bg-accent/10 text-accent border-l-2 border-accent":"text-muted hover:text-fg hover:bg-surface-2"}`,"aria-current":t?"page":void 0,children:[i.jsx(r,{size:16}),i.jsx("span",{className:"truncate",children:e.label})]})}function Tc({panels:e,groups:t,activePanel:n,onPanelChange:r,onClose:s,compact:l=!1,head:o,bootstrap:a}){var u,d,g;const c=j0(e,t);return i.jsxs("aside",{className:"w-full h-full bg-surface border-r border-border flex flex-col",children:[i.jsxs("div",{className:"p-4 border-b border-border flex items-center justify-between gap-2",children:[i.jsx("h2",{className:"font-display text-lg font-medium text-fg truncate",children:"Navigation"}),s&&i.jsx("button",{type:"button",onClick:s,className:"btn-secondary p-2 min-h-[44px] min-w-[44px] shrink-0","aria-label":"Close navigation",children:i.jsx(ea,{size:20})})]}),i.jsx("nav",{className:"flex-1 overflow-y-auto p-2 space-y-4 scrollbar-thin","aria-label":"Dashboard panels",children:c.map(m=>i.jsxs("div",{className:"space-y-1",children:[m.label&&i.jsx("h3",{className:"px-3 pt-2 text-[11px] font-semibold uppercase tracking-wider text-subtle",children:m.label}),m.panels.map(y=>i.jsx(S0,{panel:y,isActive:n===y.id,onSelect:r},y.id))]},m.label||"panels"))}),!l&&i.jsx("div",{className:"p-4 border-t border-border space-y-3",children:o&&a&&i.jsxs("div",{className:"space-y-2 text-xs",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-muted",children:"Supply"}),i.jsxs("span",{className:"font-mono text-fg",children:[(a.native_circulating||0)/1e8>1e6?((a.native_circulating||0)/1e14).toFixed(2)+"M":((a.native_circulating||0)/1e8).toFixed(0)," KVNC"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-muted",children:"Height"}),i.jsx("span",{className:"font-mono text-fg",children:(u=o.blocks)==null?void 0:u.toLocaleString()})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-muted",children:"Blue Score"}),i.jsx("span",{className:"font-mono text-fg",children:(d=o.blue_score)==null?void 0:d.toLocaleString()})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-muted",children:"Peers"}),i.jsx("span",{className:"font-mono text-fg",children:((g=a.peers)==null?void 0:g.length)||0})]})]})})]})}function N0({children:e}){return i.jsx("main",{className:"flex-1 overflow-auto p-4 lg:p-6",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:e})})}const E0="(min-width: 1024px)";function ni(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(E0).matches}function b0(e,t,n,r){const s=k.useRef(e);k.useEffect(()=>{var o,a;const l=s.current;return s.current=e,e&&!ni()?(document.body.style.overflow="hidden",(o=n.current)==null||o.focus()):(document.body.style.overflow="",l&&!ni()&&((a=r.current)==null||a.focus())),()=>{document.body.style.overflow=""}},[e,n,r]),k.useEffect(()=>{if(!e||ni())return;const l=o=>{o.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e,t])}function C0({children:e,sidebarOpen:t,onSidebarToggle:n,panels:r,panelGroups:s,activePanel:l,onPanelChange:o,title:a,subtitle:c,network:u,wsState:d,head:g,bootstrap:m,fmtKvnc:y,lastBlock:w,txCount:v}){const j=k.useRef(null),p=k.useRef(null);b0(t,n,j,p);const h={panels:r,groups:s,activePanel:l,onPanelChange:o,head:g,bootstrap:m};return i.jsxs("div",{className:"flex h-screen bg-bg overflow-hidden",children:[i.jsxs("div",{id:"dashboard-sidebar",className:`fixed inset-0 z-40 lg:hidden ${t?"":"pointer-events-none"}`,"aria-hidden":t?void 0:!0,...t?{}:{inert:""},children:[i.jsx("div",{onClick:n,className:`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ease-in-out motion-reduce:transition-none ${t?"opacity-100":"opacity-0 pointer-events-none"}`}),i.jsx("div",{ref:j,tabIndex:-1,className:`relative h-full w-72 max-w-[85vw] bg-surface border-r border-border flex flex-col transform transition-transform duration-200 ease-in-out motion-reduce:transition-none outline-none ${t?"translate-x-0":"-translate-x-full"}`,children:i.jsx(Tc,{...h,compact:!0,onClose:n})})]}),i.jsx("div",{className:"hidden lg:flex lg:shrink-0 w-72",children:i.jsx(Tc,{...h})}),i.jsxs("div",{className:"flex-1 min-w-0 flex flex-col overflow-hidden",children:[i.jsx(k0,{onMenuClick:n,menuButtonRef:p,sidebarOpen:t,title:a,subtitle:c,network:u,wsState:d,head:g,fmtKvnc:y,lastBlock:w,txCount:v}),i.jsx(N0,{children:e})]})]})}function bt({tabs:e,activeTab:t,onTabChange:n}){return i.jsx("div",{className:"flex border-b border-border mb-4",children:e.map(r=>i.jsx("button",{onClick:()=>n(r.id),className:`tab ${t===r.id?"tab-active":""}`,children:r.label},r.id))})}function ge({label:e,value:t,trend:n,trendUp:r,icon:s,className:l=""}){return i.jsx("div",{className:`stat-card ${l}`,children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"stat-label",children:e}),i.jsx("p",{className:"stat-value font-mono",children:t}),n&&i.jsxs("p",{className:`text-xs mt-1 ${r?"text-ok":"text-danger"}`,children:[r?"▲":"▼"," ",n]})]}),s&&i.jsx("div",{className:"text-muted",children:s})]})})}function Z({children:e,variant:t="info",className:n=""}){return i.jsx("span",{className:`badge badge-${t} ${n}`,children:e})}function Pc(e){return typeof e=="number"?e.toLocaleString():e}function le({headers:e,rows:t,keyField:n=0,className:r="",emptyMessage:s="No data",responsive:l=!0}){return t.length===0?i.jsx("div",{className:"table-container",children:i.jsx("p",{className:"text-muted text-center py-8",children:s})}):i.jsxs(i.Fragment,{children:[l&&i.jsx("div",{className:`sm:hidden space-y-2 ${r}`,children:t.map((o,a)=>i.jsx("div",{className:"card-list-item",children:o.map((c,u)=>i.jsxs("div",{className:"card-list-row",children:[i.jsx("span",{className:"card-list-label",children:e[u]??`Column ${u+1}`}),i.jsx("span",{className:"card-list-value",title:typeof c=="number"?String(c):c,children:Pc(c)})]},u))},o[n]))}),i.jsx("div",{className:`${l?"hidden sm:block":""} table-container table-scroll scrollbar-thin ${r}`,children:i.jsxs("table",{className:"w-full min-w-[640px] md:min-w-[880px]",children:[i.jsx("thead",{children:i.jsx("tr",{children:e.map((o,a)=>i.jsx("th",{children:o},a))})}),i.jsx("tbody",{children:t.map((o,a)=>i.jsx("tr",{children:o.map((c,u)=>i.jsx("td",{children:i.jsx("code",{className:"font-mono",children:Pc(c)})},u))},o[n]))})]})})]})}function K({children:e,variant:t="primary",size:n="md",loading:r=!1,leftIcon:s,rightIcon:l,className:o="",disabled:a,...c}){const u="btn inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",d={primary:"btn-primary",secondary:"btn-secondary",danger:"btn-danger",ghost:"bg-transparent hover:bg-surface-2"},g={sm:"px-2 py-1 text-xs",md:"px-3 py-1.5 text-sm",lg:"px-4 py-2 text-base"};return i.jsx("button",{className:`${u} ${d[t]} ${g[n]} ${o}`,disabled:a||r,...c,children:r?i.jsxs("svg",{className:"animate-spin h-4 w-4",viewBox:"0 0 24 24",children:[i.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),i.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):i.jsxs(i.Fragment,{children:[s&&i.jsx("span",{children:s}),e,l&&i.jsx("span",{children:l})]})})}function H({label:e,error:t,leftIcon:n,rightIcon:r,className:s="",id:l,...o}){const a=l||(e==null?void 0:e.toLowerCase().replace(/\s+/g,"-"));return i.jsxs("div",{className:"w-full",children:[e&&i.jsx("label",{htmlFor:a,className:"block text-xs font-medium text-muted mb-1",children:e}),i.jsxs("div",{className:"relative",children:[n&&i.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted",children:n}),i.jsx("input",{id:a,className:`input ${n?"pl-10":""} ${r?"pr-10":""} ${t?"border-danger":""} ${s}`,...o}),r&&i.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted",children:r})]}),t&&i.jsx("p",{className:"text-xs text-danger mt-1",children:t})]})}function Nf({label:e,error:t,options:n,className:r="",id:s,...l}){const o=s||(e==null?void 0:e.toLowerCase().replace(/\s+/g,"-"));return i.jsxs("div",{className:"w-full",children:[e&&i.jsx("label",{htmlFor:o,className:"block text-xs font-medium text-muted mb-1",children:e}),i.jsx("select",{id:o,className:`select ${t?"border-danger":""} ${r}`,...l,children:n.map(a=>i.jsx("option",{value:a.value,children:a.label},a.value))}),t&&i.jsx("p",{className:"text-xs text-danger mt-1",children:t})]})}const Ef="/api",_0="/ws";function ds(...e){for(const t of e)if(typeof t=="number"&&Number.isFinite(t))return t}function bf(e){if(!e)return e;const t=e,n=ds(t.native_circulating,t.circulating),r=ds(t.native_burned,t.burned),s=ds(t.native_max_supply,t.max_supply),l=ds(t.native_minted,t.total,t.minted);return{...t,...n!==void 0?{native_circulating:n}:{},...r!==void 0?{native_burned:r}:{},...s!==void 0?{native_max_supply:s}:{},...l!==void 0?{native_minted:l}:{}}}async function mn(e){try{const t=await fetch(`${Ef}${e}`,{headers:{Accept:"application/json"}});return t.ok?await t.json():null}catch{return null}}function T0(e=5e3){const[t,n]=k.useState(null),[r,s]=k.useState(!0);return k.useEffect(()=>{let l=!0;async function o(){const c=await mn("/head");l&&(n(c),s(!1))}o();const a=setInterval(o,e);return()=>{l=!1,clearInterval(a)}},[e]),{data:t,loading:r}}function P0(e=5e3){const[t,n]=k.useState(null),[r,s]=k.useState(!0);return k.useEffect(()=>{let l=!0;async function o(){const c=await mn("/bootstrap");l&&(n(c&&bf(c)),s(!1))}o();const a=setInterval(o,e);return()=>{l=!1,clearInterval(a)}},[e]),{data:t,loading:r}}function L0(e=5e3){const[t,n]=k.useState(null),[r,s]=k.useState(!0);return k.useEffect(()=>{let l=!0;async function o(){const c=await mn("/state");l&&(n(c&&bf(c)),s(!1))}o();const a=setInterval(o,e);return()=>{l=!1,clearInterval(a)}},[e]),{data:t,loading:r}}function z0(e=4e3){const[t,n]=k.useState(null),[r,s]=k.useState(!0);return k.useEffect(()=>{let l=!0;async function o(){const c=await mn("/network");l&&(n(c),s(!1))}o();const a=setInterval(o,e);return()=>{l=!1,clearInterval(a)}},[e]),{data:t,loading:r}}function R0(e,t=1e4){const[n,r]=k.useState(null),[s,l]=k.useState(!0);return k.useEffect(()=>{if(!e)return;let o=!0;async function a(){const u=await mn(`/utxos?address=${encodeURIComponent(e)}`);o&&(r(u),l(!1))}a();const c=setInterval(a,t);return()=>{o=!1,clearInterval(c)}},[e,t]),{data:n,loading:s}}function O0(e,t=1e4){const[n,r]=k.useState(null),[s,l]=k.useState(!0);return k.useEffect(()=>{if(!e)return;let o=!0;async function a(){const u=await mn(`/history?address=${encodeURIComponent(e)}`);o&&(r(u),l(!1))}a();const c=setInterval(a,t);return()=>{o=!1,clearInterval(c)}},[e,t]),{data:n,loading:s}}function Cf(){const[e,t]=k.useState(null),[n,r]=k.useState(!0);return k.useEffect(()=>{let s=!0;async function l(){const a=await mn("/dex/tokens");s&&(t((a==null?void 0:a.tokens)??[]),r(!1))}l();const o=setInterval(l,1e4);return()=>{s=!1,clearInterval(o)}},[]),{data:e,loading:n}}function M0(e){const t=k.useRef(null),n=k.useRef(),r=k.useRef(),[s,l]=k.useState("connecting");return k.useEffect(()=>{let a=!0;function c(g){a&&l(g)}function u(){r.current&&(clearInterval(r.current),r.current=void 0)}function d(){if(!a)return;c("connecting");const g=new WebSocket(_0);t.current=g,g.onopen=()=>{a&&(console.log("[WS] Connected"),c("connected"),u(),r.current=window.setInterval(()=>{g.readyState===WebSocket.OPEN&&g.send(JSON.stringify({type:"ping"}))},3e4))},g.onmessage=m=>{try{const y=JSON.parse(m.data);e(y)}catch(y){console.error("[WS] Parse error",y)}},g.onerror=m=>{console.error("[WS] Error",m)},g.onclose=()=>{u(),a&&(console.log("[WS] Disconnected, reconnecting in 5s..."),c("reconnecting"),n.current=window.setTimeout(d,5e3))}}return d(),()=>{var g;a=!1,u(),n.current&&clearTimeout(n.current),(g=t.current)==null||g.close(),l("disconnected")}},[e]),{send:k.useCallback(a=>{var c;(c=t.current)==null||c.send(JSON.stringify(a))},[]),state:s}}async function ut(e,t){try{const n=await fetch(`${Ef}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return n.ok?await n.json():null}catch{return null}}function Y(e){const t=e/1e8;return t>=1e9?(t/1e9).toFixed(2)+"B KVNC":t>=1e6?(t/1e6).toFixed(2)+"M KVNC":t>=1e3?(t/1e3).toFixed(2)+"K KVNC":t.toFixed(8)+" KVNC"}function W(e){return e.toLocaleString()}function xn(e){return(e*100).toFixed(2)+"%"}function Lc({head:e,bootstrap:t,state:n,loading:r}){var v,j,p,h,f,x,S,N,b,L,O,z,U,E,P,C,D;const s=(t==null?void 0:t.native_minted)||0,l=(t==null?void 0:t.native_total)||0,o=(t==null?void 0:t.native_circulating)||0,a=(t==null?void 0:t.native_burned)||0,c=(t==null?void 0:t.native_max_supply)||902e13,u=(t==null?void 0:t.subsidy)||(e==null?void 0:e.subsidy)||1e9,d=Math.floor(((e==null?void 0:e.blocks)||0)/205e4),g=c>0?o/c*100:0,m=[{label:"Circulating Supply",value:Y(o),trend:`${xn(g)} of max`,trendUp:!0,icon:i.jsx(ta,{size:24,className:"text-gold"})},{label:"Total Minted",value:Y(s),trend:Y(c-s)+" remaining",trendUp:s<c,icon:i.jsx(m0,{size:24,className:"text-ok"})},{label:"Burned (75% fees)",value:Y(a),trend:"Deflationary pressure",trendUp:!0,icon:i.jsx(xf,{size:24,className:"text-danger"})},{label:"Current Subsidy",value:Y(u),trend:`Era ${d} (${205e4*d}–${205e4*(d+1)-1})`,trendUp:!1,icon:i.jsx(Sc,{size:24,className:"text-blue"})},{label:"Block Height",value:W((e==null?void 0:e.blocks)||0),trend:`Blue score: ${W((e==null?void 0:e.blue_score)||0)}`,trendUp:!0,icon:i.jsx(Sc,{size:24,className:"text-blue"})},{label:"Network",value:(e==null?void 0:e.network)||"unknown",trend:`${((v=t==null?void 0:t.peers)==null?void 0:v.length)||0} peers`,trendUp:(((j=t==null?void 0:t.peers)==null?void 0:j.length)||0)>0,icon:i.jsx(kf,{size:24,className:"text-blue"})},{label:"Mempool",value:W(((p=n==null?void 0:n.node)==null?void 0:p.mempool)||0),trend:`${W(((h=n==null?void 0:n.node)==null?void 0:h.tx_count)||0)} total TXs`,trendUp:!1,icon:i.jsx(tl,{size:24,className:"text-gold"})},{label:"Consensus",value:`k=${(e==null?void 0:e.k)||3} GHOSTDAG`,trend:`PoA ${((f=n==null?void 0:n.node)==null?void 0:f.miner)||"—"}`,trendUp:!0,icon:i.jsx(bl,{size:24,className:"text-ok"})}],y=[["Minted",Y(s),xn(s/c)],["Total (minted - burned)",Y(l),xn(l/c)],["Circulating",Y(o),xn(o/c)],["Burned (75% fees)",Y(a),xn(a/c)],["Max Supply (hard cap)",Y(c),"100%"],["Remaining",Y(c-o),xn((c-o)/c)]],w=t?[["Network ID",t.network],["Genesis",((x=t.genesis)==null?void 0:x.slice(0,16))+"…"],["Tip",((S=t.tip)==null?void 0:S.slice(0,16))+"…"],["Listen",t.listen],["Peers",((b=(N=t.peers)==null?void 0:N.length)==null?void 0:b.toString())||"0"],["Token",t.token],["k",((L=t.k)==null?void 0:L.toString())||"3"],["Subsidy",Y(t.subsidy)],["Founder Amount",Y(t.founder_amount)],["Finality Depth",((O=t.finality_depth)==null?void 0:O.toString())||"—"],["Pruning Depth",((z=t.payload_pruning_depth)==null?void 0:z.toString())||"—"]]:[];return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Overview"}),i.jsx("div",{className:"flex items-center gap-2",children:i.jsx(Z,{variant:r?"warn":"ok",children:r?"Loading…":"Live"})})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4",children:m.map(($,R)=>i.jsx(ge,{...$},R))}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsxs("div",{className:"panel",children:[i.jsxs("div",{className:"panel-header",children:[i.jsx("h3",{className:"panel-title",children:"RFC-006 Supply Accounting"}),i.jsx(Z,{variant:"info",children:"Hard cap: 90.2M KVNC"})]}),i.jsx(le,{headers:["Metric","Value","% of Max"],rows:y}),i.jsx("div",{className:"mt-4 h-4 bg-surface-2 rounded-full overflow-hidden",children:i.jsx("div",{className:"h-full bg-gradient-to-r from-gold via-gold/50 to-ok",style:{width:`${Math.min(g,100)}%`}})}),i.jsxs("p",{className:"text-xs text-muted mt-1",children:[g.toFixed(4),"% of max supply circulating"]})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Network Bootstrap"})}),w.length>0?i.jsx(le,{headers:["Parameter","Value"],rows:w}):i.jsx("p",{className:"text-muted text-center py-8",children:"Loading bootstrap data…"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[i.jsxs("div",{className:"panel lg:col-span-2",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Chain State"})}),(n==null?void 0:n.node)&&i.jsx(le,{headers:["Metric","Value"],rows:[["Selected Tip",((U=n.node.selected_tip)==null?void 0:U.slice(0,16))+"…"],["Tips Count",((P=(E=n.node.tips)==null?void 0:E.length)==null?void 0:P.toString())||"0"],["Blue Work",W(n.node.blue_work||0)],["Chain Length",W(n.node.chain_len||0)],["UTXO Count",W(n.node.utxos||0)],["Total TXs",W(n.node.tx_count||0)],["Min Fee",Y(n.node.min_fee||0)+"/byte"],["Issuance",Y(n.node.issuance||0)],["Halving Era",((C=n.node.halving_era)==null?void 0:C.toString())||"0"],["Miner",((D=n.node.miner)==null?void 0:D.slice(0,16))+"…"]]})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Fee Floor"})}),i.jsx(le,{headers:["Parameter","Value"],rows:[["Subsidy",Y(u)],["Divisor","500,000"],["Fee Floor",Y(Math.max(1,Math.floor(u/5e5)))+"/byte"],["Burn Rate","75%"],["Producer Share","25%"]]})]})]})]})}function A0({state:e,loading:t}){var O,z,U;const n=k.useRef(null),[r,s]=k.useState({x:0,y:0,scale:1}),[l,o]=k.useState("graph"),a=E=>o(E),[c,u]=k.useState(null),[d,g]=k.useState("all"),m=((O=e==null?void 0:e.node)==null?void 0:O.dag)||[],y=((z=e==null?void 0:e.node)==null?void 0:z.tips)||[],w=((U=e==null?void 0:e.node)==null?void 0:U.selected_tip)||"",v=(E,P)=>{const C=Math.floor(P/20),D=P%20;return{x:50+C*120,y:50+D*60}},j=m.filter(E=>d==="blue"?E.colour==="blue":d==="red"?E.colour==="red":d==="tips"?y.includes(E.id):!0),p=E=>{E.preventDefault(),s(P=>({...P,scale:Math.max(.1,Math.min(5,P.scale-E.deltaY*.001))}))},h=E=>{if(E.button!==1&&!(E.button===0&&E.shiftKey))return;const P=E.clientX-r.x,C=E.clientY-r.y,D=R=>{s(_=>({..._,x:R.clientX-P,y:R.clientY-C}))},$=()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",$)};window.addEventListener("mousemove",D),window.addEventListener("mouseup",$)},f=k.useRef(null),x=E=>{const P={startX:r.x,startY:r.y,startScale:r.scale};if(E.touches.length===2){const[C,D]=[E.touches[0],E.touches[1]];f.current={...P,dist:Math.hypot(C.clientX-D.clientX,C.clientY-D.clientY),startCx:(C.clientX+D.clientX)/2,startCy:(C.clientY+D.clientY)/2}}else E.touches.length===1&&(f.current={...P,dist:0,startCx:E.touches[0].clientX,startCy:E.touches[0].clientY})},S=E=>{const P=f.current;if(P){if(E.preventDefault(),E.touches.length===2&&P.dist>0){const[C,D]=[E.touches[0],E.touches[1]],$=Math.hypot(C.clientX-D.clientX,C.clientY-D.clientY),R=(C.clientX+D.clientX)/2,_=(C.clientY+D.clientY)/2,M=Math.max(.1,Math.min(5,P.startScale*($/P.dist))),I=M/P.startScale;s({scale:M,x:R-(P.startCx-P.startX)*I,y:_-(P.startCy-P.startY)*I})}else if(E.touches.length===1){const C=E.touches[0].clientX-P.startCx,D=E.touches[0].clientY-P.startCy;s({scale:P.startScale,x:P.startX+C,y:P.startY+D})}}},N=()=>{f.current=null},b=()=>{s({x:0,y:0,scale:1})},L=()=>{if(c&&n.current){const E=v(c,m.indexOf(c)),P=n.current.getBoundingClientRect();s({x:P.width/2-E.x*r.scale,y:P.height/2-E.y*r.scale,scale:r.scale})}};return i.jsxs("div",{className:"h-[calc(100vh-200px)] flex flex-col",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-4 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"BlockDAG Explorer"}),i.jsx(Z,{variant:t?"warn":"ok",children:t?"Loading…":`${m.length} blocks`})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Nf,{value:d,onChange:E=>g(E.target.value),options:[{value:"all",label:"All Blocks"},{value:"blue",label:"Blue Only"},{value:"red",label:"Red Only"},{value:"tips",label:"Tips Only"}],className:"w-40"}),i.jsx(K,{variant:"ghost",size:"sm",onClick:()=>s(E=>({...E,scale:E.scale*1.2})),children:i.jsx(x0,{size:16})}),i.jsx(K,{variant:"ghost",size:"sm",onClick:()=>s(E=>({...E,scale:E.scale/1.2})),children:i.jsx(v0,{size:16})}),i.jsx(K,{variant:"ghost",size:"sm",onClick:b,children:i.jsx(c0,{size:16})}),i.jsx(K,{variant:"ghost",size:"sm",onClick:L,disabled:!c,children:i.jsx(h0,{size:16})})]})]}),i.jsx(bt,{tabs:[{id:"graph",label:"Graph View"},{id:"list",label:"List View"}],activeTab:l,onTabChange:a}),i.jsxs("div",{className:"flex-1 overflow-hidden relative",children:[l==="graph"?i.jsx("div",{className:"w-full h-full bg-surface border border-border rounded-lg touch-none",onWheel:p,onMouseDown:h,onTouchStart:x,onTouchMove:S,onTouchEnd:N,onTouchCancel:N,style:{cursor:"grab"},children:i.jsxs("svg",{ref:n,className:"w-full h-full",style:{transform:`translate(${r.x}px, ${r.y}px) scale(${r.scale})`,transformOrigin:"0 0"},children:[i.jsx("defs",{children:i.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"8",refY:"3",orient:"auto",markerUnits:"strokeWidth",children:i.jsx("path",{d:"M0,0 L0,6 L9,3 z",fill:"#6b6b74"})})}),j.map(E=>{const P=v(E,m.indexOf(E));return E.parents.map(C=>{const D=m.find(R=>R.id===C);if(!D)return null;const $=v(D,m.indexOf(D));return i.jsx("line",{x1:P.x+20,y1:P.y+20,x2:$.x+20,y2:$.y+20,stroke:"#2a2a30",strokeWidth:1.5/r.scale,markerEnd:"url(#arrow)",opacity:.5},`${E.id}-${C}`)})}),j.map((E,P)=>{const C=v(E,P),D=y.includes(E.id),$=E.id===w,R=(c==null?void 0:c.id)===E.id,_=R?"#d8d4cc":$?"#F2A900":D?"#7d9a7a":E.colour==="blue"?"#2fbaa4":"#b08980";return i.jsxs("g",{onClick:()=>u(E),style:{cursor:"pointer"},transform:`translate(${C.x}, ${C.y})`,children:[i.jsx("rect",{x:0,y:0,width:40,height:40,rx:4,ry:4,fill:_,stroke:R?"#d8d4cc":"#2a2a30",strokeWidth:R?3/r.scale:1.5/r.scale,filter:R?"drop-shadow(0 0 4px #d8d4cc)":"none"}),i.jsx("text",{x:20,y:26,textAnchor:"middle",fontSize:10/r.scale,fill:R?"#0a0a0b":"#f2f1ee",fontFamily:"monospace",pointerEvents:"none",children:P+1}),i.jsx("text",{x:20,y:38,textAnchor:"middle",fontSize:7/r.scale,fill:R?"#0a0a0b":"#9a9aa3",fontFamily:"monospace",pointerEvents:"none",children:E.id.slice(0,4)})]},E.id)})]})}):i.jsx("div",{className:"w-full h-full bg-surface border border-border rounded-lg overflow-auto",children:i.jsxs("table",{className:"w-full min-w-[640px] md:min-w-[880px] text-sm",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b border-border",children:[i.jsx("th",{className:"text-left p-2",children:"Height"}),i.jsx("th",{className:"text-left p-2",children:"ID"}),i.jsx("th",{className:"text-left p-2",children:"Blue"}),i.jsx("th",{className:"text-left p-2",children:"Parents"}),i.jsx("th",{className:"text-left p-2",children:"TXs"}),i.jsx("th",{className:"text-left p-2",children:"Miner"}),i.jsx("th",{className:"text-left p-2",children:"Time"})]})}),i.jsx("tbody",{children:j.slice().reverse().map((E,P)=>i.jsxs("tr",{onClick:()=>u(E),className:`hover:bg-surface-2 cursor-pointer ${(c==null?void 0:c.id)===E.id?"bg-accent/10":""}`,children:[i.jsx("td",{className:"p-2 font-mono",children:j.length-P}),i.jsxs("td",{className:"p-2 font-mono",children:[E.id.slice(0,16),"…"]}),i.jsx("td",{className:"p-2",children:i.jsx(Z,{variant:E.colour==="blue"?"ok":"danger",children:E.colour==="genesis"?"Genesis":E.colour==="blue"?"Blue":"Red"})}),i.jsx("td",{className:"p-2 font-mono text-xs",children:E.parents.length}),i.jsx("td",{className:"p-2",children:E.txs.length}),i.jsx("td",{className:"p-2 font-mono text-xs",children:E.work}),i.jsx("td",{className:"p-2 text-muted",children:new Date(E.timestamp_ms).toLocaleTimeString()})]},E.id))})]})}),c&&i.jsxs("div",{className:"absolute right-4 top-4 bottom-4 w-80 max-w-[calc(100%-2rem)] bg-surface border border-border rounded-lg shadow-xl p-4 overflow-auto",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-4 min-w-0",children:[i.jsx("h3",{className:"font-display font-medium",children:"Block Details"}),i.jsx("button",{onClick:()=>u(null),className:"text-muted hover:text-fg",children:"×"})]}),i.jsxs("div",{className:"space-y-3 text-sm",children:[i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"ID:"})," ",i.jsx("code",{className:"font-mono block break-all",children:c.id})]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"Blue Score:"})," ",i.jsx("code",{className:"font-mono",children:c.blue_score})]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"Status:"})," ",i.jsx(Z,{variant:c.colour==="blue"?"ok":"danger",children:c.colour==="genesis"?"Genesis":c.colour==="blue"?"Blue":"Red"})]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"Parents:"})," ",i.jsx("div",{className:"text-xs text-muted",children:c.parents.map(E=>E.slice(0,12)+"…").join(", ")})]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"Selected Parent:"})," ",i.jsx("code",{className:"font-mono text-xs",children:c.selected_parent?c.selected_parent.slice(0,12)+"…":"none (genesis)"})]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"TXs:"})," ",c.txs.length]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"Work:"})," ",i.jsx("code",{className:"font-mono text-xs",children:c.work})]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"Nonce:"})," ",i.jsx("code",{className:"font-mono text-xs",children:c.nonce})]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-muted",children:"Timestamp:"})," ",new Date(c.timestamp_ms).toLocaleString()]})]})]})]})]})}function B0({state:e,loading:t}){var v;const[n,r]=k.useState(1),[s]=k.useState(20),[l,o]=k.useState(""),[a,c]=k.useState("pos"),[u,d]=k.useState("desc"),g=k.useMemo(()=>{var j;return(((j=e==null?void 0:e.node)==null?void 0:j.dag)||[]).map((p,h)=>({...p,pos:h+1}))},[(v=e==null?void 0:e.node)==null?void 0:v.dag]),m=k.useMemo(()=>{let j=[...g];if(l){const p=l.toLowerCase();j=j.filter(h=>h.id.toLowerCase().includes(p)||h.pos.toString().includes(p))}return j.sort((p,h)=>{const f=(N,b)=>{switch(b){case"pos":return N.pos;case"blue_score":return N.blue_score;case"timestamp":return N.timestamp_ms;case"txs":return N.txs.length;default:return""}},x=f(p,a),S=f(h,a);if(typeof x=="string"&&typeof S=="string"){const N=x.toLowerCase(),b=S.toLowerCase();return N<b?u==="asc"?-1:1:N>b?u==="asc"?1:-1:0}return x<S?u==="asc"?-1:1:x>S?u==="asc"?1:-1:0}),j},[g,l,a,u]),y=Math.ceil(m.length/s),w=m.slice((n-1)*s,n*s);return i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Blocks"}),i.jsxs(Z,{variant:t?"warn":"ok",children:[g.length," blocks"]})]}),i.jsx("div",{className:"flex items-center gap-2",children:i.jsxs("div",{className:"relative",children:[i.jsx(El,{className:"absolute left-2 top-1/2 -translate-y-1/2 text-muted",size:16}),i.jsx("input",{type:"text",placeholder:"Search blocks…",value:l,onChange:j=>{o(j.target.value),r(1)},className:"input pl-8 w-full sm:w-64 max-w-full"})]})})]}),i.jsx(bt,{tabs:[{id:"all",label:"All"},{id:"blue",label:"Blue"},{id:"red",label:"Red"},{id:"tips",label:"Tips"}],activeTab:"all",onTabChange:()=>{}}),i.jsx("div",{className:"panel",children:i.jsx(le,{headers:["Pos","ID","Colour","Parents","TXs","Timestamp","Blue Score","Work"],rows:w.map(j=>[W(j.pos),j.id.slice(0,16)+"…",j.colour,j.parents.length,j.txs.length,new Date(j.timestamp_ms).toLocaleString(),W(j.blue_score),W(j.work)])})}),y>1&&i.jsxs("div",{className:"flex items-center justify-center gap-2",children:[i.jsx(K,{variant:"secondary",size:"sm",onClick:()=>r(j=>Math.max(1,j-1)),disabled:n===1,children:i.jsx(ea,{size:16})}),i.jsxs("span",{className:"text-sm text-muted",children:["Page ",n," of ",y]}),i.jsx(K,{variant:"secondary",size:"sm",onClick:()=>r(j=>Math.min(y,j+1)),disabled:n===y,children:i.jsx(mf,{size:16})})]})]})}function D0({state:e,loading:t}){var v;const[n,r]=k.useState(1),[s]=k.useState(20),[l,o]=k.useState(""),[a,c]=k.useState("pos"),[u,d]=k.useState("desc"),g=k.useMemo(()=>{var p;const j=[];return(((p=e==null?void 0:e.node)==null?void 0:p.dag)||[]).forEach((h,f)=>{h.txs.forEach(x=>{const S=x.outputs||[];j.push({...x,blockPos:f+1,blockId:h.id,timestamp:h.timestamp_ms,totalOutput:S.reduce((N,b)=>N+(b.value||0),0),outputCount:S.length})})}),j},[(v=e==null?void 0:e.node)==null?void 0:v.dag]),m=k.useMemo(()=>{let j=[...g];if(l){const p=l.toLowerCase();j=j.filter(h=>h.id.toLowerCase().includes(p)||h.blockPos.toString().includes(p)||h.blockId.toLowerCase().includes(p))}return j.sort((p,h)=>{const f=(N,b)=>{switch(b){case"timestamp":return N.timestamp;case"output":return N.totalOutput;case"pos":return N.blockPos;default:return""}},x=f(p,a),S=f(h,a);if(typeof x=="string"&&typeof S=="string"){const N=x.toLowerCase(),b=S.toLowerCase();return N<b?u==="asc"?-1:1:N>b?u==="asc"?1:-1:0}return x<S?u==="asc"?-1:1:x>S?u==="asc"?1:-1:0}),j},[g,l,a,u]),y=Math.ceil(m.length/s),w=m.slice((n-1)*s,n*s);return i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Transactions"}),i.jsxs(Z,{variant:t?"warn":"ok",children:[g.length," transactions"]})]}),i.jsx("div",{className:"flex items-center gap-2",children:i.jsxs("div",{className:"relative",children:[i.jsx(El,{className:"absolute left-2 top-1/2 -translate-y-1/2 text-muted",size:16}),i.jsx("input",{type:"text",placeholder:"Search transactions…",value:l,onChange:j=>{o(j.target.value),r(1)},className:"input pl-8 w-full sm:w-64 max-w-full"})]})})]}),i.jsx("div",{className:"panel",children:i.jsx(le,{headers:["Block","TX ID","Type","In","Out","Total Output","Time"],rows:w.map(j=>[W(j.blockPos),j.id.slice(0,16)+"…",j.coinbase?"Coinbase":"Transfer",j.inputs,j.outputCount,Y(j.totalOutput),new Date(j.timestamp).toLocaleString()])})}),y>1&&i.jsxs("div",{className:"flex items-center justify-center gap-2",children:[i.jsx(K,{variant:"secondary",size:"sm",onClick:()=>r(j=>Math.max(1,j-1)),disabled:n===1,children:i.jsx(ea,{size:16})}),i.jsxs("span",{className:"text-sm text-muted",children:["Page ",n," of ",y]}),i.jsx(K,{variant:"secondary",size:"sm",onClick:()=>r(j=>Math.min(y,j+1)),disabled:n===y,children:i.jsx(mf,{size:16})})]})]})}function I0({state:e,loading:t}){const[n,r]=k.useState(""),[s,l]=k.useState(null),o=(e==null?void 0:e.wallets)||[],a=o.filter(c=>c.address.toLowerCase().includes(n.toLowerCase()));return i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Addresses"}),i.jsxs(Z,{variant:t?"warn":"ok",children:[o.length," wallets"]})]}),i.jsx("div",{className:"flex items-center gap-2",children:i.jsxs("div",{className:"relative",children:[i.jsx(El,{className:"absolute left-2 top-1/2 -translate-y-1/2 text-muted",size:16}),i.jsx("input",{type:"text",placeholder:"Search addresses…",value:n,onChange:c=>r(c.target.value),className:"input pl-8 w-full sm:w-64 max-w-full"})]})})]}),i.jsx(bt,{tabs:[{id:"wallets",label:"Wallets"},{id:"utxos",label:"UTXO Set"}],activeTab:"wallets",onTabChange:()=>{}}),i.jsx("div",{className:"panel",children:i.jsx(le,{headers:["Address","Seed","Balance","Actions"],rows:a.map(c=>[c.address.slice(0,16)+"…",c.seed.toString(),Y(c.balance),""])})}),s&&i.jsxs("div",{className:"panel",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-4 min-w-0",children:[i.jsxs("h3",{className:"font-display font-medium",children:["UTXOs for ",s.slice(0,16),"…"]}),i.jsx(K,{variant:"ghost",size:"sm",onClick:()=>l(null),children:"Close"})]}),i.jsx("p",{className:"text-muted",children:"UTXO detail view - connect to /api/utxos endpoint for full data"})]})]})}function F0({state:e,loading:t}){var s,l;const n=((s=e==null?void 0:e.node)==null?void 0:s.mempool)||0,r=((l=e==null?void 0:e.node)==null?void 0:l.tx_count)||0;return i.jsxs("div",{className:"space-y-6",children:[i.jsx("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Mempool"}),i.jsx(Z,{variant:t?"warn":"ok",children:"Live"})]})}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[i.jsx(ge,{label:"Pending TXs",value:W(n),icon:i.jsx(tl,{size:24,className:"text-gold"})}),i.jsx(ge,{label:"Total TXs (chain)",value:W(r),icon:i.jsx(nl,{size:24,className:"text-blue"})}),i.jsx(ge,{label:"Mempool Size",value:`~${W(n*500)} bytes`,trend:"Estimated",icon:i.jsx(Xm,{size:24,className:"text-muted"})}),i.jsx(ge,{label:"Fee Estimate",value:"Check Fee Estimate panel",icon:i.jsx(tl,{size:24,className:"text-gold"})})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Mempool Status"})}),i.jsx(le,{headers:["Metric","Value"],rows:[["Pending Transactions",W(n)],["Estimated Size","~"+W(n*500)+" bytes"],["Total Chain TXs",W(r)],["Orphan TXs","N/A (not exposed)"],["Max Mempool Size","N/A (not exposed)"]]})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Recent Mempool Activity"})}),i.jsxs("p",{className:"text-muted text-center py-8",children:["Connect WebSocket to receive real-time 'tx' messages for live mempool monitoring. Use the API Console to call ",i.jsx("code",{className:"font-mono bg-surface-2 px-1 rounded",children:"/api/state"})," for current mempool count."]})]})]})}function $0({bootstrap:e,state:t,loading:n}){var o,a,c,u,d,g,m;const r=(e==null?void 0:e.peers)||[],s=((o=t==null?void 0:t.mesh)==null?void 0:o.nodes)||[],l=((a=t==null?void 0:t.mesh)==null?void 0:a.events)||[];return i.jsxs("div",{className:"space-y-6",children:[i.jsx("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Network / P2P"}),i.jsxs(Z,{variant:n?"warn":"ok",children:[r.length," peers"]})]})}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[i.jsx(ge,{label:"Connected Peers",value:r.length,icon:i.jsx(ra,{size:24,className:"text-blue"})}),i.jsx(ge,{label:"Mesh Nodes",value:s.length,icon:i.jsx(kf,{size:24,className:"text-teal"})}),i.jsx(ge,{label:"Listen Address",value:(e==null?void 0:e.listen)||"—",trend:"P2P port 9000",icon:i.jsx(vf,{size:24,className:"text-blue"})}),i.jsx(ge,{label:"Network ID",value:(e==null?void 0:e.network)||"—",icon:i.jsx(bl,{size:24,className:"text-ok"})})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Bootstrap Peers"})}),r.length>0?i.jsx(le,{headers:["Peer Address"],rows:r.map(y=>[y])}):i.jsx("p",{className:"text-muted text-center py-8",children:"No peers configured"})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Mesh Nodes"})}),s.length>0?i.jsx(le,{headers:["Name","Blocks","Tip","Peers","Mempool"],rows:s.map(y=>[y.name,W(y.blocks),y.tip.slice(0,12)+"…",W(y.peers),W(y.mempool)])}):i.jsx("p",{className:"text-muted text-center py-8",children:"No mesh data"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Recent Mesh Events"})}),l.length>0?i.jsx(le,{headers:["Time","From","To","Kind"],rows:l.slice(-20).reverse().map(y=>[new Date(y.at).toLocaleTimeString(),y.from,y.to,y.kind])}):i.jsx("p",{className:"text-muted text-center py-8",children:"No mesh events"})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Network Config"})}),i.jsx(le,{headers:["Parameter","Value"],rows:[["Network",(e==null?void 0:e.network)||"—"],["Genesis",((c=e==null?void 0:e.genesis)==null?void 0:c.slice(0,16))+"…"||"—"],["Tip",((u=e==null?void 0:e.tip)==null?void 0:u.slice(0,16))+"…"||"—"],["Listen",(e==null?void 0:e.listen)||"—"],["Token",(e==null?void 0:e.token)||"—"],["k",((d=e==null?void 0:e.k)==null?void 0:d.toString())||"3"],["Subsidy",Y((e==null?void 0:e.subsidy)||0)],["Finality Depth",((g=e==null?void 0:e.finality_depth)==null?void 0:g.toString())||"—"],["Pruning Depth",((m=e==null?void 0:e.payload_pruning_depth)==null?void 0:m.toString())||"—"]]})]})]})]})}function U0({network:e,state:t,loading:n}){var g,m,y,w;const r=(e==null?void 0:e.authority_set)??null,s=(r==null?void 0:r.authorities)??[],l=(r==null?void 0:r.threshold)??0,o=(e==null?void 0:e.slot_duration_ms)??0,a=(e==null?void 0:e.current_slot)??0,u=s.map((v,j)=>{const p=(j-a%s.length+s.length)%s.length;return{pubKey:v,index:j,nextSlot:a+p,offset:p,isNow:p===0}}).sort((v,j)=>v.nextSlot-j.nextSlot).slice(0,12),d=[{label:"Authorities",value:r?`${r.count}`:"—",trend:`threshold ${l} of ${(r==null?void 0:r.count)??0}`,icon:i.jsx(ra,{size:24,className:"text-blue"})},{label:"Slot Duration",value:o?`${W(o)} ms`:"—",trend:"fixed, no gap-fill",icon:i.jsx(nl,{size:24,className:"text-gold"})},{label:"Current Slot",value:W(a),trend:e?`${W(e.time_to_next_slot_ms)} ms to next`:"waiting for node",icon:i.jsx(nl,{size:24,className:"text-gold"})},{label:"Blue Score",value:W((e==null?void 0:e.blue_score)??0),trend:`chain ${W(((g=t==null?void 0:t.node)==null?void 0:g.chain_len)??0)}`,icon:i.jsx(r0,{size:24,className:"text-blue"})}];return i.jsxs("div",{className:"space-y-6",children:[i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",children:d.map(v=>i.jsx(ge,{label:v.label,value:v.value,trend:v.trend,icon:v.icon},v.label))}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsxs("section",{className:"panel",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0 mb-4",children:[i.jsxs("h2",{className:"text-lg font-display flex items-center gap-2",children:[i.jsx(bl,{size:18,className:"text-gold"}),"Authority Set"]}),r&&i.jsx(Z,{variant:"ok",children:"PoA active"})]}),r?i.jsxs(i.Fragment,{children:[i.jsx(le,{headers:["#","Authority Public Key","Next Slot"],rows:u.map(v=>[String(v.index),v.pubKey,v.isNow?`${W(v.nextSlot)} (now)`:W(v.nextSlot)])}),i.jsxs("dl",{className:"mt-4 space-y-2 text-xs",children:[i.jsxs("div",{className:"flex justify-between gap-4",children:[i.jsx("dt",{className:"text-muted",children:"Threshold"}),i.jsxs("dd",{className:"font-mono",children:[l," of ",r.count]})]}),i.jsxs("div",{className:"flex justify-between gap-4 min-w-0",children:[i.jsx("dt",{className:"text-muted shrink-0",children:"Set hash"}),i.jsx("dd",{className:"font-mono truncate",children:r.hash})]}),i.jsxs("div",{className:"flex justify-between gap-4",children:[i.jsx("dt",{className:"text-muted",children:"Schedule rule"}),i.jsxs("dd",{className:"font-mono text-right",children:["authorities[slot % ",r.count,"]"]})]})]})]}):i.jsx("p",{className:"text-sm text-muted",children:n?"Loading authority set…":"This node reports no authority set."})]}),i.jsxs("section",{className:"panel",children:[i.jsx("h2",{className:"text-lg font-display mb-4",children:"Consensus Parameters"}),i.jsx(le,{headers:["Parameter","Value"],rows:[["Consensus","Proof of Authority"],["Authorities",r?String(r.count):"—"],["Threshold",r?`${l} of ${r.count}`:"—"],["Slot duration",o?`${W(o)} ms`:"—"],["Current slot",W(a)],["Next slot at",e?new Date(e.next_slot_timestamp_ms).toISOString():"—"],["Blue score",W((e==null?void 0:e.blue_score)??0)],["Chain length",W(((m=t==null?void 0:t.node)==null?void 0:m.chain_len)??0)],["GHOSTDAG k",String(((y=t==null?void 0:t.node)==null?void 0:y.k)??3)],["Selected tip",(((w=t==null?void 0:t.node)==null?void 0:w.selected_tip)||"—").slice(0,16)]]})]})]}),i.jsx("section",{className:"panel border-l-2 border-l-gold",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx(wf,{size:18,className:"text-gold shrink-0 mt-0.5"}),i.jsxs("div",{className:"space-y-2 text-sm",children:[i.jsx("h3",{className:"font-display",children:"This view is read-only, and that is by design"}),i.jsxs("p",{className:"text-muted",children:["Block production is PoA: an authority signs a 64-byte signature over the block hash, and the node admits it only if the signer is the one scheduled for that slot. Those signing keys are held in mode-0600 ",i.jsx("code",{children:"EnvironmentFile"}),"s on the seed hosts and are never sent to a browser, so this dashboard cannot act as a validator and deliberately offers no way to enter a key."]}),i.jsx("p",{className:"text-muted",children:`The schedule above is computed forward from the current slot with the consensus rule. Historical "slots owned" per authority is not shown because the explorer's block payload carries no producer field — it is not knowable from the API, and it is not estimated here.`})]})]})})]})}function H0({state:e,loading:t}){const[n,r]=k.useState("dex"),[s,l]=k.useState(""),{data:o,loading:a}=Cf(),[c,u]=k.useState(""),[d,g]=k.useState(""),[m,y]=k.useState(""),w=v=>r(v);return i.jsxs("div",{className:"space-y-6",children:[i.jsx("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Tokens & Assets"}),i.jsx(Z,{variant:t?"warn":"ok",children:"KVP-102/106"})]})}),i.jsx(bt,{tabs:[{id:"dex",label:"DEX Tokens"},{id:"tokens",label:"Tokens (KVP-102)"},{id:"nfts",label:"NFTs (KVP-106)"},{id:"collections",label:"Collections"}],activeTab:n,onTabChange:w}),n==="dex"&&i.jsxs("div",{className:"space-y-4",children:[i.jsx("div",{className:"flex items-center gap-2",children:i.jsxs("div",{className:"relative",children:[i.jsx(El,{className:"absolute left-2 top-1/2 -translate-y-1/2 text-muted",size:16}),i.jsx("input",{type:"text",placeholder:"Search DEX tokens…",value:s,onChange:v=>l(v.target.value),className:"input pl-8 w-full sm:w-64 max-w-full"})]})}),i.jsx("div",{className:"panel overflow-auto",children:a?i.jsx("p",{className:"text-muted text-center py-8",children:"Loading DEX tokens…"}):o&&o.length>0?i.jsx(le,{headers:["Asset ID","Symbol","Name","Decimals","KVNC Reserve","Asset Reserve","Price (KVNC)","24h Volume"],rows:o.filter(v=>v.symbol.toLowerCase().includes(s.toLowerCase())||v.name.toLowerCase().includes(s.toLowerCase())).map(v=>[v.asset_id.slice(0,16)+"…",v.symbol,v.name,v.decimals,Y(v.reserve_kvnc),W(v.reserve_asset),v.price_kvnc.toFixed(8),W(v.volume_24h)])}):i.jsx("p",{className:"text-muted text-center py-8",children:"No DEX tokens found"})})]}),n==="tokens"&&i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(H,{label:"Token ID",value:c,onChange:v=>u(v.target.value),placeholder:"Enter token asset ID",className:"input w-full sm:w-96 max-w-full"}),i.jsx(K,{onClick:()=>c&&window.open(`/api/token/${c}`,"_blank"),children:"View Token"})]}),i.jsx("p",{className:"text-muted",children:"Use the API Console to query /api/token/{id} for full token details."})]}),n==="nfts"&&i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(H,{label:"NFT ID",value:d,onChange:v=>g(v.target.value),placeholder:"Enter NFT asset ID",className:"input w-full sm:w-96 max-w-full"}),i.jsx(K,{onClick:()=>d&&window.open(`/api/nft/${d}`,"_blank"),children:"View NFT"})]}),i.jsx("p",{className:"text-muted",children:"Use the API Console to query /api/nft/{id} for full NFT details."})]}),n==="collections"&&i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(H,{label:"Collection ID",value:m,onChange:v=>y(v.target.value),placeholder:"Enter collection ID",className:"input w-full sm:w-96 max-w-full"}),i.jsx(K,{onClick:()=>m&&window.open(`/api/collection/${m}`,"_blank"),children:"View Collection"})]}),i.jsx("p",{className:"text-muted",children:"Use the API Console to query /api/collection/{id} for full collection details."})]})]})}function V0({}){const[e,t]=k.useState("prepare"),n=d=>t(d),[r,s]=k.useState({sender:"",receiver:"",amount:"",fee:"",hashlock:"",timelock:"",asset_id:""}),[l,o]=k.useState(null),[a,c]=k.useState(!1),u=async d=>{c(!0);try{const g=await ut(`/htlc/${d}/prepare`,r);o(g)}catch(g){o({error:String(g)})}c(!1)};return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"HTLC Atomic Swaps (KVP-104)"}),i.jsx(Z,{variant:"info",children:"HTLC"})]}),i.jsx(bt,{tabs:[{id:"prepare",label:"Prepare HTLC"},{id:"redeem",label:"Redeem"},{id:"refund",label:"Refund"}],activeTab:e,onTabChange:n}),i.jsx("div",{className:"panel",children:i.jsxs("form",{onSubmit:d=>{d.preventDefault(),u(e)},children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[i.jsx(H,{label:"Sender Address",value:r.sender,onChange:d=>s({...r,sender:d.target.value}),placeholder:"kvnc..."}),i.jsx(H,{label:"Receiver Address",value:r.receiver,onChange:d=>s({...r,receiver:d.target.value}),placeholder:"kvnc..."}),i.jsx(H,{label:"Amount (KVNC)",type:"number",value:r.amount,onChange:d=>s({...r,amount:d.target.value}),placeholder:"100000000"}),i.jsx(H,{label:"Fee (atoms)",type:"number",value:r.fee,onChange:d=>s({...r,fee:d.target.value}),placeholder:"1000"}),i.jsx(H,{label:"Hashlock (hex)",value:r.hashlock,onChange:d=>s({...r,hashlock:d.target.value}),placeholder:"sha256(preimage)"}),i.jsx(H,{label:"Timelock (blocks)",type:"number",value:r.timelock,onChange:d=>s({...r,timelock:d.target.value}),placeholder:"100"}),i.jsx(H,{label:"Asset ID (optional)",value:r.asset_id,onChange:d=>s({...r,asset_id:d.target.value}),placeholder:"KVNC or asset ID"})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsx(K,{type:"submit",loading:a,variant:e==="redeem"?"primary":e==="refund"?"danger":"primary",children:e==="prepare"?"Prepare HTLC":e==="redeem"?"Redeem":"Refund"}),i.jsx(K,{type:"button",variant:"secondary",onClick:()=>o(null),children:"Clear"})]}),l&&i.jsxs("div",{className:"mt-4 p-4 bg-surface-2 border border-border rounded-lg",children:[i.jsx("h4",{className:"font-medium mb-2",children:"Result"}),i.jsx("pre",{className:"text-xs text-fg overflow-auto max-h-64 font-mono",children:JSON.stringify(l,null,2)})]})]})}),i.jsxs("div",{className:"panel",children:[i.jsx("h3",{className:"panel-title",children:"HTLC Flow"}),i.jsxs("ol",{className:"space-y-2 text-sm text-muted list-decimal list-inside",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Prepare:"})," Sender creates HTLC output with hashlock + timelock"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Fund:"})," Sender broadcasts and confirms the prepare transaction"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Redeem:"})," Receiver reveals preimage, claims funds before timelock"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Refund:"})," If timelock expires, sender can reclaim funds"]})]})]})]})}function W0({}){const[e,t]=k.useState("create"),n=d=>t(d),[r,s]=k.useState({m:2,n:3,pubkeys:["","",""],script:"",amount:"",fee:"",receiver:"",signatures:["","",""]}),[l,o]=k.useState(null),[a,c]=k.useState(!1),u=async d=>{c(!0);try{const g=await ut(`/multisig/${d}`,r);o(g)}catch(g){o({error:String(g)})}c(!1)};return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Multisig (KVP-101)"}),i.jsx(Z,{variant:"info",children:"M-of-N P2SH"})]}),i.jsx(bt,{tabs:[{id:"create",label:"Create"},{id:"build",label:"Build Tx"},{id:"sign",label:"Sign"},{id:"combine",label:"Combine"},{id:"submit",label:"Submit"}],activeTab:e,onTabChange:n}),i.jsx("div",{className:"panel",children:i.jsxs("form",{onSubmit:d=>{d.preventDefault(),u(e)},children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e==="create"&&i.jsxs(i.Fragment,{children:[i.jsx(H,{label:"M (required signatures)",type:"number",value:r.m,onChange:d=>s({...r,m:parseInt(d.target.value)})}),i.jsx(H,{label:"N (total parties)",type:"number",value:r.n,onChange:d=>s({...r,n:parseInt(d.target.value)})}),[...Array(Math.max(3,r.n))].map((d,g)=>i.jsx(H,{label:`PubKey ${g+1}`,value:r.pubkeys[g]||"",onChange:m=>{const y=[...r.pubkeys];y[g]=m.target.value,s({...r,pubkeys:y})},placeholder:"Ed25519 pubkey hex"},g))]}),e==="build"&&i.jsxs(i.Fragment,{children:[i.jsx(H,{label:"Redeem Script (hex)",value:r.script,onChange:d=>s({...r,script:d.target.value}),placeholder:"Multisig redeem script"}),i.jsx(H,{label:"Amount (atoms)",type:"number",value:r.amount,onChange:d=>s({...r,amount:d.target.value})}),i.jsx(H,{label:"Fee (atoms)",type:"number",value:r.fee,onChange:d=>s({...r,fee:d.target.value})}),i.jsx(H,{label:"Receiver",value:r.receiver,onChange:d=>s({...r,receiver:d.target.value}),placeholder:"kvnc..."})]}),e==="sign"&&i.jsxs("div",{className:"md:col-span-2 rounded-lg border border-gold/40 bg-gold/5 p-4 space-y-2",children:[i.jsxs("div",{className:"flex items-center gap-2 text-gold",children:[i.jsx(d0,{size:18,"aria-hidden":!0}),i.jsx("h4",{className:"font-medium text-fg",children:"Co-signing is node-side custody"})]}),i.jsx("p",{className:"text-sm text-muted",children:"KVP-101 partial signatures are produced by a node that already holds the co-signing key. This dashboard deliberately does not accept a private key: pasting one here would ship it to the backend and the node, and any browser holding a cosigner key for a P2SH spend is a standing liability."}),i.jsxs("p",{className:"text-sm text-muted",children:["To produce a partial signature, run the co-signer against the unsigned transaction hex on the machine that custodies that key, then paste the returned ",i.jsx("code",{className:"font-mono text-fg",children:"partial_sig_hex"})," into the Combine step."]})]}),e==="combine"&&i.jsxs(i.Fragment,{children:[i.jsx(H,{label:"Transaction (hex)",value:r.script,onChange:d=>s({...r,script:d.target.value}),placeholder:"Partially signed tx"}),[...Array(Math.max(3,r.n))].map((d,g)=>i.jsx(H,{label:`Signature ${g+1} (hex)`,value:r.signatures[g]||"",onChange:m=>{const y=[...r.signatures];y[g]=m.target.value,s({...r,signatures:y})},placeholder:"Ed25519 signature"},g))]}),e==="submit"&&i.jsx(i.Fragment,{children:i.jsx(H,{label:"Signed Transaction (hex)",value:r.script,onChange:d=>s({...r,script:d.target.value}),placeholder:"Fully signed tx hex"})})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsx(K,{type:"submit",loading:a,variant:"primary",disabled:e==="sign",title:e==="sign"?"Co-signing runs on the key-custoding node":void 0,children:e==="create"?"Create Multisig":e==="build"?"Build Tx":e==="sign"?"Sign":e==="combine"?"Combine":"Submit"}),i.jsx(K,{type:"button",variant:"secondary",onClick:()=>o(null),children:"Clear"})]}),l&&i.jsxs("div",{className:"mt-4 p-4 bg-surface-2 border border-border rounded-lg",children:[i.jsx("h4",{className:"font-medium mb-2",children:"Result"}),i.jsx("pre",{className:"text-xs text-fg overflow-auto max-h-64 font-mono",children:JSON.stringify(l,null,2)})]})]})}),i.jsxs("div",{className:"panel",children:[i.jsx("h3",{className:"panel-title",children:"Multisig Flow"}),i.jsxs("ol",{className:"space-y-2 text-sm text-muted list-decimal list-inside",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Create:"})," Generate M-of-N redeem script from N pubkeys"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Build:"})," Create unsigned transaction spending to multisig address"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Sign:"})," Node-side — each co-signing key produces a partial signature on the host that custodies it"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Combine:"})," Aggregate signatures into final witness"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Submit:"})," Broadcast fully signed transaction"]})]})]})]})}function K0({state:e,loading:t}){const[n,r]=k.useState(""),[s,l]=k.useState(null),[o,a]=k.useState(!1),c=async()=>{if(n){a(!0);try{const d=await ut("/faucet",{address:n});l(d)}catch(d){l({error:String(d)})}a(!1)}},u=(e==null?void 0:e.faucet)||!1;return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Faucet (Testnet Only)"}),i.jsx(Z,{variant:u?"ok":"danger",children:u?"Enabled":"Disabled"})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Request Testnet KVNC"})}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(H,{label:"Address",value:n,onChange:d=>r(d.target.value),placeholder:"kvnc1... or kvnc...",className:"input w-full sm:w-96 max-w-full"}),i.jsx(K,{onClick:c,loading:o,disabled:!u||!n,children:"Request 5 KVNC"})]}),s&&i.jsxs("div",{className:`p-4 rounded-lg ${s.ok?"bg-ok/10 border border-ok":"bg-danger/10 border border-danger"}`,children:[i.jsx("h4",{className:"font-medium mb-2",children:s.ok?"Success":"Error"}),i.jsx("pre",{className:"text-xs font-mono",children:JSON.stringify(s,null,2)})]}),!u&&i.jsx("p",{className:"text-danger text-sm",children:"Faucet is disabled on this node. Enable with KOVANICA_FAUCET=1 (testnet only)."})]})]}),i.jsxs("div",{className:"panel",children:[i.jsx("h3",{className:"panel-title mb-4",children:"Faucet Rules"}),i.jsxs("ul",{className:"space-y-2 text-sm text-muted list-disc list-inside",children:[i.jsx("li",{children:"Testnet only — disabled on mainnet"}),i.jsx("li",{children:"5 KVNC per address (500,000,000 atoms)"}),i.jsx("li",{children:"Rate limited per IP"}),i.jsx("li",{children:"Requires KOVANICA_FAUCET=1 and KOVANICA_NETWORK=kovanica-testnet"})]})]})]})}function q0({state:e,loading:t}){var w,v,j,p,h;const[n,r]=k.useState("mine"),s=f=>r(f),[l,o]=k.useState({block:"",nonce:""}),[a,c]=k.useState(null),[u,d]=k.useState(!1),g=(e==null?void 0:e.mining)||!1,m=(e==null?void 0:e.operator)||!1,y=async()=>{d(!0);try{let f;n==="mine"?f=await ut("/mine",{}):n==="produce"?f=await ut("/produce",{}):n==="submit"&&(f=await ut("/mine/submit",l)),c(f)}catch(f){c({error:String(f)})}d(!1)};return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Mining & Block Production"}),i.jsx(Z,{variant:g?"ok":"warn",children:g?"Mining Active":"Mining Disabled"})]}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[i.jsx(ge,{label:"Mining",value:g?"Active":"Inactive",icon:i.jsx(jf,{size:24,className:"text-gold"})}),i.jsx(ge,{label:"Operator Mode",value:m?"Enabled":"Disabled",icon:i.jsx(y0,{size:24,className:"text-blue"})}),i.jsx(ge,{label:"Producing",value:((w=e==null?void 0:e.node)==null?void 0:w.miner)||"—",icon:i.jsx(Ym,{size:24,className:"text-teal"})}),i.jsx(ge,{label:"Chain Height",value:W(((v=e==null?void 0:e.node)==null?void 0:v.blocks)||0),icon:i.jsx(yf,{size:24,className:"text-blue"})})]}),i.jsx(bt,{tabs:[{id:"mine",label:"Mine Block"},{id:"produce",label:"Produce (PoA)"},{id:"submit",label:"Submit Block"}],activeTab:n,onTabChange:s}),i.jsx("div",{className:"panel",children:i.jsxs("form",{onSubmit:f=>{f.preventDefault(),y()},children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[n==="submit"&&i.jsxs(i.Fragment,{children:[i.jsx(H,{label:"Block Hex",value:l.block,onChange:f=>o({...l,block:f.target.value}),placeholder:"Serialized block hex",className:"md:col-span-2"}),i.jsx(H,{label:"Nonce",value:l.nonce,onChange:f=>o({...l,nonce:f.target.value}),placeholder:"Nonce value"})]}),(n==="mine"||n==="produce")&&i.jsxs("p",{className:"text-muted col-span-2",children:["Click the button to trigger block ",n==="mine"?"mining":"production",". Requires KOVANICA_MINE=1 or KOVANICA_PRODUCE=1 and operator privileges."]})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsx(K,{type:"submit",loading:u,variant:"primary",disabled:!m&&(n==="mine"||n==="produce"),children:n==="mine"?"Start Mining":n==="produce"?"Produce Block":"Submit Block"}),i.jsx(K,{type:"button",variant:"secondary",onClick:()=>c(null),children:"Clear"})]}),a&&i.jsxs("div",{className:"mt-4 p-4 bg-surface-2 border border-border rounded-lg",children:[i.jsx("h4",{className:"font-medium mb-2",children:"Result"}),i.jsx("pre",{className:"text-xs text-fg overflow-auto max-h-64 font-mono",children:JSON.stringify(a,null,2)})]}),!m&&(n==="mine"||n==="produce")&&i.jsx("p",{className:"text-danger text-sm mt-2",children:"Operator mode required. Set KOVANICA_OPERATOR=1 and restart node."})]})}),i.jsxs("div",{className:"panel",children:[i.jsx("h3",{className:"panel-title",children:"Mining Info"}),i.jsx(le,{headers:["Parameter","Value"],rows:[["KOVANICA_MINE",g?"1":"0"],["KOVANICA_PRODUCE",m?"1":"0"],["Current Miner",((j=e==null?void 0:e.node)==null?void 0:j.miner)||"—"],["Subsidy",Y(((p=e==null?void 0:e.node)==null?void 0:p.subsidy)||0)],["Min Fee",Y(((h=e==null?void 0:e.node)==null?void 0:h.min_fee)||0)+"/byte"],["Difficulty","PoA (no PoW difficulty)"]]})]})]})}const zc=[{method:"GET",path:"/head",note:"Chain tip & supply",read:!0},{method:"GET",path:"/bootstrap",note:"Full bootstrap info",read:!0},{method:"GET",path:"/state",note:"Full node state (dag, mesh, wallets)",read:!0},{method:"GET",path:"/network",note:"Network config",read:!0},{method:"GET",path:"/p2p",note:"P2P peer info",read:!0},{method:"GET",path:"/origins",note:"Pulse origins",read:!0},{method:"GET",path:"/blocks",note:"Block dump (octet-stream)",read:!0},{method:"GET",path:"/light_sync",note:"Light sync data",read:!0},{method:"GET",path:"/light_proof",note:"Light proof",read:!0},{method:"GET",path:"/history",note:"Address history",read:!0,params:"?address=&limit=100&offset=0"},{method:"GET",path:"/utxos",note:"Address UTXOs",read:!0,params:"?address=&limit=100&offset=0"},{method:"GET",path:"/block/{id}",note:"Block by ID",read:!0},{method:"GET",path:"/tx/{id}",note:"Transaction by ID",read:!0},{method:"GET",path:"/address/{addr}",note:"Address info",read:!0,params:"?page=1&per_page=20"},{method:"GET",path:"/nft/{id}",note:"NFT by ID",read:!0},{method:"GET",path:"/rwa/{id}",note:"RWA by ID",read:!0},{method:"GET",path:"/collection/{id}",note:"Collection by ID",read:!0},{method:"GET",path:"/dex/tokens",note:"DEX token list",read:!0},{method:"GET",path:"/token/{id}",note:"Token by ID",read:!0},{method:"GET",path:"/fee_estimate",note:"Fee estimates",read:!0},{method:"POST",path:"/prepare",note:"Prepare transaction",read:!1,body:'{"address":"","amount":100000000,"fee":1000}'},{method:"POST",path:"/submit",note:"Submit signed tx",read:!1,body:'{"tx":"..."}'},{method:"POST",path:"/mine/submit",note:"Submit mined block",read:!1,body:'{"block":"...","nonce":0}'},{method:"POST",path:"/multisig/create",note:"Create multisig",read:!1,body:'{"m":2,"n":3,"pubkeys":[]}'},{method:"POST",path:"/multisig/build",note:"Build multisig tx",read:!1,body:'{"script":"","amount":0,"fee":0,"receiver":""}'},{method:"POST",path:"/multisig/sign",note:"Sign multisig",read:!1,body:'{"tx":"...","key":"..."}'},{method:"POST",path:"/multisig/combine",note:"Combine signatures",read:!1,body:'{"tx":"...","signatures":[]}'},{method:"POST",path:"/multisig/submit",note:"Submit multisig",read:!1,body:'{"tx":"..."}'},{method:"POST",path:"/htlc/prepare",note:"Prepare HTLC",read:!1,body:'{"sender":"","receiver":"","amount":0,"fee":0,"hashlock":"","timelock":0}'},{method:"POST",path:"/htlc/submit",note:"Submit HTLC",read:!1,body:'{"tx":"..."}'},{method:"POST",path:"/htlc/redeem/prepare",note:"Prepare HTLC redeem",read:!1,body:'{"tx":"...","preimage":"..."}'},{method:"POST",path:"/htlc/redeem/submit",note:"Submit HTLC redeem",read:!1,body:'{"tx":"..."}'},{method:"POST",path:"/htlc/refund/prepare",note:"Prepare HTLC refund",read:!1,body:'{"tx":"..."}'},{method:"POST",path:"/htlc/refund/submit",note:"Submit HTLC refund",read:!1,body:'{"tx":"..."}'},{method:"POST",path:"/faucet",note:"Request faucet (testnet)",read:!1,body:'{"address":""}'},{method:"POST",path:"/mine",note:"Trigger mining",read:!1,body:"{}"},{method:"POST",path:"/produce",note:"Trigger PoA produce",read:!1,body:"{}"},{method:"POST",path:"/coinjoin_prepare",note:"Prepare coinjoin",read:!1,body:"{}"},{method:"POST",path:"/coinjoin_submit",note:"Submit coinjoin",read:!1,body:"{}"},{method:"POST",path:"/rwa/derive",note:"Derive RWA",read:!1,body:"{}"},{method:"POST",path:"/airdrop/prepare-claim",note:"Prepare airdrop claim",read:!1,body:"{}"},{method:"POST",path:"/airdrop/finalize-claim",note:"Finalize airdrop claim",read:!1,body:"{}"}];function G0(){const[e,t]=k.useState(zc[0]),[n,r]=k.useState(""),[s,l]=k.useState(""),[o,a]=k.useState(""),[c,u]=k.useState(null),[d,g]=k.useState(!1),[m,y]=k.useState([]),w=k.useMemo(()=>{if(!e)return"";let f=e.path;return f.includes("{")&&n&&(f=f.replace(/\{[^}]+\}/g,n)),s&&(f+=(f.includes("?")?"&":"?")+s),f},[e,n,s]),v=async()=>{if(e){g(!0);try{let f;if(e.method==="POST"&&o)try{f=JSON.parse(o)}catch{f=o}let x;if(e.method==="GET"){const S=`/api${w}`,N=await fetch(S,{headers:{Accept:"application/json"}});x=N.ok?await N.json():{error:`HTTP ${N.status}`,text:await N.text()}}else x=await ut(w,f||{});u(x),y(S=>[{endpoint:w,method:e.method,request:f,response:x,time:new Date},...S].slice(0,50))}catch(f){u({error:String(f)})}g(!1)}},j=f=>{navigator.clipboard.writeText(f)},p=()=>{u(null)},h=()=>{if(!c)return;const f=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),x=URL.createObjectURL(f),S=document.createElement("a");S.href=x,S.download=`response-${Date.now()}.json`,S.click(),URL.revokeObjectURL(x)};return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"API Console"}),i.jsx(Z,{variant:"info",children:"Live Proxy"})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[i.jsxs("div",{className:"lg:col-span-1 panel",children:[i.jsx("h3",{className:"panel-title mb-4",children:"Endpoints"}),i.jsx("div",{className:"space-y-1 max-h-[60vh] overflow-y-auto",children:zc.map(f=>i.jsxs("button",{onClick:()=>{t(f),r(""),l(""),a(f.body||"")},className:`w-full text-left p-2 rounded text-sm transition-colors ${(e==null?void 0:e.path)===f.path&&(e==null?void 0:e.method)===f.method?"bg-accent/10 text-accent border-l-2 border-accent":"text-muted hover:text-fg hover:bg-surface-2"}`,children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Z,{variant:f.method==="GET"?"ok":"warn",className:"text-xs",children:f.method}),i.jsx("code",{className:"font-mono text-xs",children:f.path})]}),i.jsx("p",{className:"text-xs text-muted mt-0.5",children:f.note})]},`${f.method}-${f.path}`))})]}),i.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[e&&i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-4 min-w-0",children:i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Z,{variant:e.method==="GET"?"ok":"warn",children:e.method}),i.jsxs("code",{className:"font-mono text-sm",children:["/api",w]})]}),i.jsx("p",{className:"text-xs text-muted mt-1",children:e.note})]})}),e.path.includes("{")&&i.jsx(H,{label:"Path Params (comma-separated for multiple)",value:n,onChange:f=>r(f.target.value),placeholder:"e.g. block-id or addr1,addr2"}),e.read&&e.params&&i.jsx(H,{label:"Query Params",value:s,onChange:f=>l(f.target.value),placeholder:e.params}),!e.read&&i.jsxs("div",{className:"space-y-2",children:[i.jsx("label",{className:"block text-xs font-medium text-muted",children:"Request Body (JSON)"}),i.jsx("textarea",{value:o,onChange:f=>a(f.target.value),className:"input w-full h-32 font-mono text-xs resize-y",placeholder:e.body||"{}"})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsxs(K,{onClick:v,loading:d,variant:"primary",children:[i.jsx(a0,{size:16})," Execute"]}),i.jsxs(K,{onClick:p,variant:"secondary",children:[i.jsx(na,{size:16})," Clear"]}),c&&i.jsxs(i.Fragment,{children:[i.jsxs(K,{onClick:()=>j(JSON.stringify(c,null,2)),variant:"ghost",children:[i.jsx(gf,{size:16})," Copy"]}),i.jsxs(K,{onClick:h,variant:"ghost",children:[i.jsx(Qm,{size:16})," Download"]})]})]}),c&&i.jsxs("div",{className:"mt-4",children:[i.jsx("h4",{className:"font-medium mb-2",children:"Response"}),i.jsx("div",{className:"bg-surface-2 border border-border rounded-lg p-4 max-h-96 overflow-auto",children:i.jsx("pre",{className:"text-xs text-fg font-mono",children:JSON.stringify(c,null,2)})})]})]}),i.jsxs("div",{className:"panel",children:[i.jsx("h3",{className:"panel-title mb-4",children:"Request History"}),m.length===0?i.jsx("p",{className:"text-muted text-center py-8",children:"No requests yet"}):i.jsx(le,{headers:["Time","Method","Endpoint","Status"],rows:m.map(f=>{var x,S;return[f.time.toLocaleTimeString(),f.method,f.endpoint,(x=f.response)!=null&&x.ok?"OK":((S=f.response)==null?void 0:S.error)||"Error"]})})]})]})]})]})}function X0({}){const[e,t]=k.useState({}),[n,r]=k.useState(!1),[s,l]=k.useState("kovanica"),o=async()=>{r(!0);try{const u=await fetch("/metrics");if(u.ok){const d=await u.text(),g={};d.split(`
`).forEach(m=>{if(m&&!m.startsWith("#")){const y=m.indexOf(" ");y>0&&(g[m.slice(0,y)]=m.slice(y+1))}}),t(g)}}catch(u){console.error("Failed to fetch metrics",u)}r(!1)};k.useEffect(()=>{o();const u=setInterval(o,1e4);return()=>clearInterval(u)},[]);const a=Object.entries(e).filter(([u])=>u.startsWith("kovanica_")).sort(([u],[d])=>u.localeCompare(d)),c=Object.entries(e).filter(([u])=>!u.startsWith("kovanica_")).sort(([u],[d])=>u.localeCompare(d));return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Prometheus Metrics"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Z,{variant:n?"warn":"ok",children:n?"Loading…":"Live"}),i.jsx(K,{variant:"ghost",size:"sm",onClick:o,loading:n,children:i.jsx(Sf,{size:16})}),i.jsxs("a",{href:"http://145.223.116.178:19080",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",children:[i.jsx(Jm,{size:16})," Grafana"]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[i.jsx(ge,{label:"kovanica_block_height",value:e.kovanica_block_height||"—",icon:i.jsx(dr,{size:24,className:"text-blue"})}),i.jsx(ge,{label:"kovanica_dag_blue_score",value:e.kovanica_dag_blue_score||"—",icon:i.jsx(dr,{size:24,className:"text-gold"})}),i.jsx(ge,{label:"kovanica_peer_count",value:e.kovanica_peer_count||"—",icon:i.jsx(dr,{size:24,className:"text-teal"})}),i.jsx(ge,{label:"kovanica_mempool_tx_count",value:e.kovanica_mempool_tx_count||"—",icon:i.jsx(dr,{size:24,className:"text-gold"})})]}),i.jsx(bt,{tabs:[{id:"kovanica",label:"Kovanica Metrics"},{id:"all",label:"All Metrics"}],activeTab:s,onTabChange:l}),i.jsx("div",{className:"panel overflow-auto max-h-[60vh]",children:i.jsx(le,{headers:["Metric","Value"],rows:s==="kovanica"?a:c})}),i.jsxs("div",{className:"panel",children:[i.jsx("h3",{className:"panel-title mb-4",children:"Key Metrics Reference"}),i.jsx(le,{headers:["Metric","Description"],rows:[["kovanica_block_height","Current chain height"],["kovanica_dag_blue_score","GHOSTDAG blue score"],["kovanica_peer_count","Connected P2P peers"],["kovanica_mempool_tx_count","Pending transactions"],["kovanica_mempool_bytes","Mempool size in bytes"],["kovanica_mempool_orphan_count","Orphan transactions"],["kovanica_supply_minted","Total native minted (atoms)"],["kovanica_supply_total","Total supply (minted - burned)"],["kovanica_supply_circulating","Circulating supply"],["kovanica_supply_burned","Total burned (75% fees)"],["kovanica_supply_max","Hard cap (90.2M KVNC)"],["kovanica_supply_subsidy","Current block subsidy"],["kovanica_block_rate_5m","Blocks per 5 minutes"],["kovanica_block_rejection_rate_5m","Rejected blocks per 5 min"],["kovanica_block_production_duration_seconds","Block production latency"],["kovanica_block_validation_duration_seconds","Block validation latency"],["kovanica_tx_validation_duration_seconds","TX validation latency"],["kovanica_explorer_http_requests_total","Explorer HTTP requests"],["kovanica_explorer_ws_clients","WebSocket clients"]]})]})]})}function Y0({}){const[e,t]=k.useState(""),[n,r]=k.useState(!1),[s,l]=k.useState("restart"),o=p=>l(p),[a,c]=k.useState("seed1"),[u,d]=k.useState(null),[g,m]=k.useState(!1),[y,w]=k.useState([]),v=[{id:"seed1",name:"Seed 1 (Local)",host:"127.0.0.1",service:"kovanica-explorer"},{id:"seed2",name:"Seed 2",host:"76.13.250.65",service:"kovanica-seed2"},{id:"seed3",name:"Seed 3",host:"187.7.27.139",service:"kovanica-seed3"}],j=async()=>{if(!e){d({error:"Ops token required"});return}m(!0);try{let p;s==="restart"?p=await ut("/ops",{action:"restart",seed:a,token:e}):s==="diagnostics"?p=await ut("/ops",{action:"diagnostics",seed:a,token:e}):s==="logs"&&(p=await ut("/ops",{action:"logs",seed:a,token:e})),d(p),w(h=>[{action:s,seed:a,time:new Date,result:p},...h].slice(0,100))}catch(p){d({error:String(p)})}m(!1)};return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Operations (Token-Gated)"}),i.jsx(Z,{variant:n?"ok":"danger",children:n?"Enabled":"Disabled"})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Authentication"})}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx(H,{label:"Ops Token",type:"password",value:e,onChange:p=>t(p.target.value),placeholder:"DASHBOARD_OPS_TOKEN",className:"input w-full sm:w-96 max-w-full"}),i.jsx(K,{onClick:()=>r(!n),variant:n?"danger":"primary",children:n?"Disable":"Enable"})]}),!n&&i.jsx("p",{className:"text-muted text-sm mt-2",children:"Set DASHBOARD_OPS_TOKEN environment variable on the backend to enable operations."})]}),n&&i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Actions"})}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[i.jsx(bt,{tabs:[{id:"restart",label:"Restart Service"},{id:"diagnostics",label:"Diagnostics"},{id:"logs",label:"Fetch Logs"}],activeTab:s,onTabChange:o}),i.jsx(Nf,{label:"Target Seed",value:a,onChange:p=>c(p.target.value),options:v.map(p=>({value:p.id,label:p.name})),className:"w-48"})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsx(K,{onClick:j,loading:g,variant:s==="restart"?"danger":"primary",children:s==="restart"?"Restart Service":s==="diagnostics"?"Run Diagnostics":"Fetch Logs"}),i.jsxs(K,{variant:"secondary",onClick:()=>d(null),children:[i.jsx(na,{size:16})," Clear"]})]}),u&&i.jsxs("div",{className:"mt-4 p-4 bg-surface-2 border border-border rounded-lg",children:[i.jsx("h4",{className:"font-medium mb-2",children:"Result"}),i.jsx("pre",{className:"text-xs text-fg overflow-auto max-h-96 font-mono",children:JSON.stringify(u,null,2)})]})]}),i.jsxs("div",{className:"panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{className:"panel-title",children:"Audit Log"})}),y.length===0?i.jsx("p",{className:"text-muted text-center py-8",children:"No operations performed yet"}):i.jsx(le,{headers:["Time","Action","Seed","Status"],rows:y.map(p=>{var h,f;return[p.time.toLocaleTimeString(),p.action,p.seed,(h=p.result)!=null&&h.ok?"OK":((f=p.result)==null?void 0:f.error)||"Error"]})})]}),i.jsxs("div",{className:"panel",children:[i.jsx("h3",{className:"panel-title mb-4",children:"Ops Configuration"}),i.jsx(le,{headers:["Setting","Value"],rows:[["Ops Token",n?"***configured***":"Not set"],["Allowed Actions","restart, diagnostics, logs"],["Audit Log Path","/var/lib/kovanica-ops/ops-audit.jsonl"],["Seed 1 Data Dir","/root/kovanica-data"],["Seed 2 Data Dir","/var/lib/kovanica-seed2"],["Seed 3 Data Dir","/var/lib/kovanica-seed3"]]})]})]})}const fs=BigInt(2**32-1),Rc=BigInt(32);function Q0(e,t=!1){return t?{h:Number(e&fs),l:Number(e>>Rc&fs)}:{h:Number(e>>Rc&fs)|0,l:Number(e&fs)|0}}function Z0(e,t=!1){const n=e.length;let r=new Uint32Array(n),s=new Uint32Array(n);for(let l=0;l<n;l++){const{h:o,l:a}=Q0(e[l],t);[r[l],s[l]]=[o,a]}return[r,s]}const J0=e=>e/2**32|0,eg=e=>e>>>0;function tg(e,t,n,r){const s=J0(n),l=eg(n);e.setUint32(t,r?l:s,r),e.setUint32(t+4,r?s:l,r)}const Oc=(e,t,n)=>e>>>n,Mc=(e,t,n)=>e<<32-n|t>>>n,vn=(e,t,n)=>e>>>n|t<<32-n,wn=(e,t,n)=>e<<32-n|t>>>n,hs=(e,t,n)=>e<<64-n|t>>>n-32,ps=(e,t,n)=>e>>>n-32|t<<64-n;function pt(e,t,n,r){const s=(t>>>0)+(r>>>0);return{h:e+n+(s/2**32|0)|0,l:s|0}}const ng=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),rg=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,sg=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),lg=(e,t,n,r,s)=>t+n+r+s+(e/2**32|0)|0,ig=(e,t,n,r,s)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(s>>>0),og=(e,t,n,r,s,l)=>t+n+r+s+l+(e/2**32|0)|0;function to(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in e&&e.BYTES_PER_ELEMENT===1}const no=e=>e?`"${e}" `:"";function dt(e,t=""){if(typeof e!="number")throw new TypeError(no(t)+"expected number, got "+typeof e);if(!Number.isSafeInteger(e)||e<0)throw new RangeError(no(t)+"expected integer >= 0, got "+e);return e}function ht(e,t,n=""){if(to(e)&&(t===void 0||e.length===t))return e;t!==void 0&&dt(t,"length");const r=to(e),s=t!==void 0?` of length ${t}`:"",l=r?`length=${e.length}`:`type=${typeof e}`,o=no(n)+"expected Uint8Array"+s+", got "+l;throw r?new RangeError(o):new TypeError(o)}function _f(e){if(typeof e!="function"||typeof e.create!="function")throw new TypeError("expected hash wrapped by utils.createHasher");if(dt(e.outputLen),dt(e.blockLen),e.outputLen<1||e.blockLen<1)throw new Error("hash blockLen / outputLen must be >= 1")}const ag=(e,t)=>{if(e===null||typeof e!="object"||Array.isArray(e))throw new TypeError((t==="object"?"":`"${t}" `)+"expected object, got type="+typeof e)},Ac=(e,t)=>{ag(e,t);const n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw new TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,"__proto__"))throw new TypeError(`"${t}.__proto__" is not allowed`)};function rl(e,t=!0){if(e.destroyed)throw new Error("hash was destroyed");if(t&&e.finished)throw new Error("digest() was already called")}function Tf(e,t){ht(e,void 0,"output");const n=t.outputLen;if(!(e.length>=n))throw new RangeError('"output" expected length >= '+n)}function Nt(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function Ps(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function st(e,t){return e<<32-t|e>>>t}const Pf=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",cg=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ft(e){if(ht(e),Pf)return e.toHex();let t="";for(let n=0;n<e.length;n++)t+=cg[e[n]];return t}function Bc(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function ln(e){if(typeof e!="string")throw new TypeError("hex string expected, got "+typeof e);if(Pf)try{return Uint8Array.fromHex(e)}catch(s){throw s instanceof SyntaxError?new RangeError(s.message):s}const t=e.length,n=t/2;if(t%2)throw new RangeError("hex string expected, got unpadded hex of length "+t);const r=new Uint8Array(n);for(let s=0,l=0;s<n;s++,l+=2){const o=Bc(e.charCodeAt(l)),a=Bc(e.charCodeAt(l+1));if(o===void 0||a===void 0){const c=e[l]+e[l+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+l)}r[s]=o*16+a}return r}function Ir(e){if(typeof e!="string")throw new TypeError("string expected");const t=new TextEncoder().encode(e);try{return new Uint8Array(t)}finally{Nt(t)}}function Dc(e,t=""){return typeof e=="string"?Ir(e):ht(e,void 0,t)}function ug(...e){let t=0;for(let r=0;r<e.length;r++){const s=e[r];ht(s),t+=s.length}const n=new Uint8Array(t);for(let r=0,s=0;r<e.length;r++){const l=e[r];n.set(l,s),s+=l.length}return n}function Lf(e,t,n="opts"){return Ac(e,"defaults"),t!==void 0&&Ac(t,n),Object.assign(Object.create(null),e,t)}function zf(e,t={}){if(typeof e!="function")throw new TypeError('"hashCons" expected function, got type='+typeof e);t=Lf({},t,"info");const n=(s,l)=>e(l).update(s).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=s=>e(s),Object.assign(n,t),Object.freeze(n)}function Rf(e=32){dt(e,"bytesLength");const t=typeof globalThis=="object"?globalThis.crypto:null;if(typeof(t==null?void 0:t.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined");if(e>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}const Of=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});function dg(e,t,n){return e&t^~e&n}function fg(e,t,n){return e&t^e&n^t&n}class Mf{constructor(t,n,r,s){A(this,"blockLen");A(this,"outputLen");A(this,"canXOF",!1);A(this,"padOffset");A(this,"isLE");A(this,"buffer");A(this,"view");A(this,"finished",!1);A(this,"length",0);A(this,"pos",0);A(this,"destroyed",!1);this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=s,this.buffer=new Uint8Array(t),this.view=Ps(this.buffer)}update(t){rl(this),ht(t);const{view:n,buffer:r,blockLen:s}=this,l=t.length;let o=!1;for(let a=0;a<l;){const c=Math.min(s-this.pos,l-a);if(c===s){const u=Ps(t);for(;s<=l-a;a+=s)this.process(u,a);o=!0;continue}r.set(a===0&&c===l?t:t.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===s&&(this.process(n,0),this.pos=0,o=!0)}return this.length+=t.length,o&&this.roundClean(),this}digestInto(t){rl(this),Tf(t,this),this.finished=!0;const{buffer:n,view:r,blockLen:s,isLE:l}=this;let{pos:o}=this;n[o++]=128,n.fill(0,o),this.padOffset>s-o&&(this.process(r,0),n.fill(0)),tg(r,s-8,this.length*8,l),this.process(r,0),this.roundClean();const a=t===n?r:Ps(t),c=this.outputLen,u=c/4,d=this.get();if(c%4||u>d.length)throw new Error("invalid outputLen");for(let g=0;g<u;g++)a.setUint32(4*g,d[g],l)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneIntoMeta(t){const{buffer:n,length:r,finished:s,destroyed:l,pos:o}=this;return t.destroyed=l,t.finished=s,t.length=r,t.pos=o,o&&t.buffer.set(n),t}clone(){return this._cloneInto()}}const hg=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),pg=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),mg=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Tt=new Uint32Array(64);class gg extends Mf{constructor(n,r){super(64,n,8,!1);A(this,"A",0);A(this,"B",0);A(this,"C",0);A(this,"D",0);A(this,"E",0);A(this,"F",0);A(this,"G",0);A(this,"H",0);this.A=r[0]|0,this.B=r[1]|0,this.C=r[2]|0,this.D=r[3]|0,this.E=r[4]|0,this.F=r[5]|0,this.G=r[6]|0,this.H=r[7]|0}get(){const{A:n,B:r,C:s,D:l,E:o,F:a,G:c,H:u}=this;return[n,r,s,l,o,a,c,u]}set(n,r,s,l,o,a,c,u){this.A=n|0,this.B=r|0,this.C=s|0,this.D=l|0,this.E=o|0,this.F=a|0,this.G=c|0,this.H=u|0}_cloneInto(n){return(n||(n=new this.constructor)).set(...this.get()),this._cloneIntoMeta(n)}process(n,r){for(let m=0;m<16;m++,r+=4)Tt[m]=n.getUint32(r,!1);for(let m=16;m<64;m++){const y=Tt[m-15],w=Tt[m-2],v=st(y,7)^st(y,18)^y>>>3,j=st(w,17)^st(w,19)^w>>>10;Tt[m]=j+Tt[m-7]+v+Tt[m-16]|0}let{A:s,B:l,C:o,D:a,E:c,F:u,G:d,H:g}=this;for(let m=0;m<64;m++){const y=st(c,6)^st(c,11)^st(c,25),w=g+y+dg(c,u,d)+mg[m]+Tt[m]|0,j=(st(s,2)^st(s,13)^st(s,22))+fg(s,l,o)|0;g=d,d=u,u=c,c=a+w|0,a=o,o=l,l=s,s=w+j|0}s=s+this.A|0,l=l+this.B|0,o=o+this.C|0,a=a+this.D|0,c=c+this.E|0,u=u+this.F|0,d=d+this.G|0,g=g+this.H|0,this.set(s,l,o,a,c,u,d,g)}roundClean(){Nt(Tt)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),Nt(this.buffer)}}class yg extends gg{constructor(){super(32,hg)}}const Af=Z0(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),xg=Af[0],vg=Af[1],Pt=new Uint32Array(80),Lt=new Uint32Array(80);class wg extends Mf{constructor(n,r){super(128,n,16,!1);A(this,"Ah",0);A(this,"Al",0);A(this,"Bh",0);A(this,"Bl",0);A(this,"Ch",0);A(this,"Cl",0);A(this,"Dh",0);A(this,"Dl",0);A(this,"Eh",0);A(this,"El",0);A(this,"Fh",0);A(this,"Fl",0);A(this,"Gh",0);A(this,"Gl",0);A(this,"Hh",0);A(this,"Hl",0);this.Ah=r[0]|0,this.Al=r[1]|0,this.Bh=r[2]|0,this.Bl=r[3]|0,this.Ch=r[4]|0,this.Cl=r[5]|0,this.Dh=r[6]|0,this.Dl=r[7]|0,this.Eh=r[8]|0,this.El=r[9]|0,this.Fh=r[10]|0,this.Fl=r[11]|0,this.Gh=r[12]|0,this.Gl=r[13]|0,this.Hh=r[14]|0,this.Hl=r[15]|0}get(){const{Ah:n,Al:r,Bh:s,Bl:l,Ch:o,Cl:a,Dh:c,Dl:u,Eh:d,El:g,Fh:m,Fl:y,Gh:w,Gl:v,Hh:j,Hl:p}=this;return[n,r,s,l,o,a,c,u,d,g,m,y,w,v,j,p]}set(n,r,s,l,o,a,c,u,d,g,m,y,w,v,j,p){this.Ah=n|0,this.Al=r|0,this.Bh=s|0,this.Bl=l|0,this.Ch=o|0,this.Cl=a|0,this.Dh=c|0,this.Dl=u|0,this.Eh=d|0,this.El=g|0,this.Fh=m|0,this.Fl=y|0,this.Gh=w|0,this.Gl=v|0,this.Hh=j|0,this.Hl=p|0}_cloneInto(n){return(n||(n=new this.constructor)).set(...this.get()),this._cloneIntoMeta(n)}process(n,r){for(let x=0;x<16;x++,r+=4)Pt[x]=n.getUint32(r),Lt[x]=n.getUint32(r+=4);for(let x=16;x<80;x++){const S=Pt[x-15]|0,N=Lt[x-15]|0,b=vn(S,N,1)^vn(S,N,8)^Oc(S,N,7),L=wn(S,N,1)^wn(S,N,8)^Mc(S,N,7),O=Pt[x-2]|0,z=Lt[x-2]|0,U=vn(O,z,19)^hs(O,z,61)^Oc(O,z,6),E=wn(O,z,19)^ps(O,z,61)^Mc(O,z,6),P=sg(L,E,Lt[x-7],Lt[x-16]),C=lg(P,b,U,Pt[x-7],Pt[x-16]);Pt[x]=C|0,Lt[x]=P|0}let{Ah:s,Al:l,Bh:o,Bl:a,Ch:c,Cl:u,Dh:d,Dl:g,Eh:m,El:y,Fh:w,Fl:v,Gh:j,Gl:p,Hh:h,Hl:f}=this;for(let x=0;x<80;x++){const S=vn(m,y,14)^vn(m,y,18)^hs(m,y,41),N=wn(m,y,14)^wn(m,y,18)^ps(m,y,41),b=m&w^~m&j,L=y&v^~y&p,O=ig(f,N,L,vg[x],Lt[x]),z=og(O,h,S,b,xg[x],Pt[x]),U=O|0,E=vn(s,l,28)^hs(s,l,34)^hs(s,l,39),P=wn(s,l,28)^ps(s,l,34)^ps(s,l,39),C=s&o^s&c^o&c,D=l&a^l&u^a&u;h=j|0,f=p|0,j=w|0,p=v|0,w=m|0,v=y|0,{h:m,l:y}=pt(d|0,g|0,z|0,U|0),d=c|0,g=u|0,c=o|0,u=a|0,o=s|0,a=l|0;const $=ng(U,P,D);s=rg($,z,E,C),l=$|0}({h:s,l}=pt(this.Ah|0,this.Al|0,s|0,l|0)),{h:o,l:a}=pt(this.Bh|0,this.Bl|0,o|0,a|0),{h:c,l:u}=pt(this.Ch|0,this.Cl|0,c|0,u|0),{h:d,l:g}=pt(this.Dh|0,this.Dl|0,d|0,g|0),{h:m,l:y}=pt(this.Eh|0,this.El|0,m|0,y|0),{h:w,l:v}=pt(this.Fh|0,this.Fl|0,w|0,v|0),{h:j,l:p}=pt(this.Gh|0,this.Gl|0,j|0,p|0),{h,l:f}=pt(this.Hh|0,this.Hl|0,h|0,f|0),this.set(s,l,o,a,c,u,d,g,m,y,w,v,j,p,h,f)}roundClean(){Nt(Pt,Lt)}destroy(){this.destroyed=!0,Nt(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class kg extends wg{constructor(){super(64,pg)}}const Bf=zf(()=>new yg,Of(1)),Cl=zf(()=>new kg,Of(3));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Df(e,t,n=()=>{}){if(!Array.isArray(e))throw new TypeError(`"${t}" expected array, got type=${typeof e}`);for(let r=0;r<e.length;r++)n(e[r],`${t}[${r}]`);return e}const $e=(e,t,n)=>ht(e,t,n),If=dt;function In(e,t="object"){if(e===null||typeof e!="object"||Array.isArray(e))throw new TypeError(t==="object"?"expected valid options object":`"${t}" expected object, got type=${typeof e}`);return e}function kr(e,t){if(typeof e!="function")throw new TypeError(`"${t}" is invalid: expected function, got ${typeof e}`);return e}const jg=ft,Ic=(...e)=>ug(...e),Sg=e=>ln(e),sa=to,Ff=e=>Rf(e),sl=BigInt(0),Fc=BigInt(1),Ng=e=>e?`"${e}" `:"";function Gn(e,t=""){if(typeof e!="boolean")throw new TypeError(Ng(t)+"expected boolean, got type="+typeof e);return e}function Eg(e){if(typeof e=="bigint"){if(!on(e))throw new RangeError("positive bigint expected, got "+e)}else If(e);return e}function ll(e,t=""){if(typeof e!="number"){const n=t&&`"${t}" `;throw new TypeError(n+"expected number, got type="+typeof e)}if(!Number.isSafeInteger(e)){const n=t&&`"${t}" `;throw new RangeError(n+"expected safe integer, got "+e)}}function $f(e){if(typeof e!="string")throw new TypeError("hex string expected, got "+typeof e);return e===""?sl:BigInt("0x"+e)}function Uf(e){return $f(ft(e))}function il(e){return $f(ft(ol(ht(e)).reverse()))}function Hf(e,t){if(dt(t),t===0)throw new Error("zero output length is invalid");e=Eg(e);const n=t*2,r=e.toString(16);if(r.length>n)throw new RangeError("number is too large");return ln(r.padStart(n,"0"))}function bg(e,t){return Hf(e,t).reverse()}function ol(e){return Uint8Array.from($e(e))}function on(e){return typeof e=="bigint"&&sl<=e}function Vf(e,t,n){return on(e)&&on(t)&&on(n)&&t<=e&&e<n}function $c(e,t,n,r){if(!Vf(t,n,r))throw new RangeError("expected valid "+e+": "+n+" <= n < "+r+", got "+t)}function Cg(e){if(e<sl)throw new Error("expected non-negative bigint, got "+e);return e===sl?0:e.toString(2).length}const _g=e=>(ll(e,"n"),(Fc<<BigInt(e))-Fc);function Fn(e,t={},n={},r="object"){In(e,r),In(t,"fields"),In(n,"optFields");function s(o,a,c){const u=r==="object"?`param "${String(o)}"`:`"${r}.${String(o)}"`,d=e[o];if(!Object.hasOwn(e,o)&&(c?d!==void 0:a!=="function"))throw new TypeError(`${u} is invalid: expected own property`);if(c&&d===void 0)return;const g=typeof d;if(g!==a||d===null)throw new TypeError(`${u} is invalid: expected ${a}, got ${g}`)}const l=(o,a)=>Object.entries(o).forEach(([c,u])=>s(c,u,a));l(t,!1),l(n,!0)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const me=BigInt(0),ne=BigInt(1),nn=BigInt(2),Wf=BigInt(3),la=BigInt(4),Kf=BigInt(5),Tg=BigInt(7),qf=BigInt(8),Pg=BigInt(9),Lg=BigInt(15),Gf=BigInt(16),zg=BigInt("0x10000000000000000");function fe(e,t){if(t<=me)throw new Error("mod: expected positive modulus, got "+t);const n=e%t;return n>=me?n:t+n}function Rg(e,t,n){if(n<=ne)throw new Error("pow: expected modulus > 1, got "+n);if(typeof t!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof t);if(t<me)throw new Error("invalid exponent, negatives unsupported");if(t===me)return ne;if(t===ne)return e;let r=e%n;if(r<me&&(r+=n),t<zg){let a=ne;for(;t>me;)t&ne&&(a=a*r%n),r=r*r%n,t>>=ne;return a}const s=[];for(;t>me;)s.push(Number(t&Lg)),t>>=la;const l=new Array(16);l[0]=ne,l[1]=r;for(let a=2;a<16;a++)l[a]=l[a-1]*r%n;let o=l[s[s.length-1]];for(let a=s.length-2;a>=0;a--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;const c=s[a];c!==0&&(o=o*l[c]%n)}return o}function lt(e,t,n){if(n<=ne)throw new Error("pow2: expected modulus > 1, got "+n);if(t<me)throw new Error("pow2: expected non-negative exponent, got "+t);let r=e;for(;t-- >me;)r*=r,r%=n;return r}function Uc(e,t){if(e===me)throw new Error("invert: expected non-zero number");if(t<=ne)throw new Error("invert: expected modulus > 1, got "+t);let n=fe(e,t),r=t,s=me,l=ne;for(;n!==me;){const a=r/n,c=r-n*a,u=s-l*a;r=n,n=c,s=l,l=u}if(r!==ne)throw new Error("invert: does not exist");return fe(s,t)}function ia(e,t,n){const r=e;if(!r.eql(r.sqr(t),n))throw new Error("Cannot find square root")}function oa(e,t){if((e&ne)===me)throw new Error(t+": expected odd modulus, got "+e)}function Xf(e,t){const n=e,r=(n.ORDER+ne)/la,s=n.pow(t,r);return ia(n,s,t),s}function Og(e,t){const n=e,r=(n.ORDER-Kf)/qf,s=n.mul(t,nn),l=n.pow(s,r),o=n.mul(t,l),a=n.mul(n.mul(o,nn),l),c=n.mul(o,n.sub(a,n.ONE));return ia(n,c,t),c}function Mg(e){const t=aa(e),n=Yf(e),r=n(t,t.neg(t.ONE)),s=n(t,r),l=n(t,t.neg(r)),o=(e+Tg)/Gf;return(a,c)=>{const u=a;let d=u.pow(c,o),g=u.mul(d,r);const m=u.mul(d,s),y=u.mul(d,l),w=u.eql(u.sqr(g),c),v=u.eql(u.sqr(m),c);d=u.cmov(d,g,w),g=u.cmov(y,m,v);const j=u.eql(u.sqr(g),c),p=u.cmov(d,g,j);return ia(u,p,c),p}}function Yf(e){if(e<Wf)throw new Error("sqrt is not defined for small field");oa(e,"tonelliShanks");let t=e-ne,n=0;for(;t%nn===me;)t/=nn,n++;let r=nn;const s=aa(e);for(;al(s,r)===1;)if(r++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return Xf;let l=s.pow(r,t);const o=(t+ne)/nn;return function(c,u){const d=c;if(d.is0(u))return u;if(al(d,u)!==1)throw new Error("Cannot find square root");let g=n,m=d.mul(d.ONE,l),y=d.pow(u,t),w=d.pow(u,o);for(;!d.eql(y,d.ONE);){if(d.is0(y))throw new Error("Cannot find square root: probably non-prime P");let v=1,j=d.sqr(y);for(;!d.eql(j,d.ONE);)if(v++,j=d.sqr(j),v===g)throw new Error("Cannot find square root");const p=ne<<BigInt(g-v-1),h=d.pow(m,p);g=v,m=d.sqr(h),y=d.mul(y,m),w=d.mul(w,h)}return w}}function Ag(e){return oa(e,"Fp.sqrt"),e%la===Wf?Xf:e%qf===Kf?Og:e%Gf===Pg?Mg(e):Yf(e)}const Bg=(e,t)=>(fe(e,t)&ne)===ne,Dg=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Fr(e){if(In(e,"field"),typeof e.ORDER!="bigint")throw new TypeError('param "ORDER" is invalid: expected bigint, got '+typeof e.ORDER);ll(e.BYTES,"BYTES"),ll(e.BITS,"BITS");for(const t of Dg)kr(e[t],"field."+t);if(e.BYTES<1||e.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(e.ORDER<=ne)throw new Error("invalid field: expected ORDER > 1, got "+e.ORDER);return e}function Qf(e,t,n=!1){Fr(e),Df(t,"nums"),Gn(n,"passZero");const r=e,s=new Array(t.length).fill(n?r.ZERO:void 0),l=t.reduce((a,c,u)=>r.is0(c)?a:(s[u]=a,r.mul(a,c)),r.ONE),o=r.inv(l);return t.reduceRight((a,c,u)=>r.is0(c)?a:(s[u]=r.mul(a,s[u]),r.mul(a,c)),o),s}function al(e,t){Fr(e);const n=e;oa(n.ORDER,"FpLegendre");const r=(n.ORDER-ne)/nn,s=n.pow(t,r),l=n.eql(s,n.ONE),o=n.eql(s,n.ZERO),a=n.eql(s,n.neg(n.ONE));if(!l&&!o&&!a)throw new Error("invalid Legendre symbol result");return l?1:o?0:-1}function Ig(e,t){if(t!==void 0&&If(t),e<=me)throw new Error("invalid n length: expected positive n, got "+e);if(t!==void 0&&t<1)throw new Error("invalid n length: expected positive bit length, got "+t);const n=Cg(e);if(t!==void 0&&t<n)throw new Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${n})`);const r=t!==void 0?t:n,s=Math.ceil(r/8);return{nBitLength:r,nByteLength:s}}const Hc=new WeakMap;class Vc{constructor(t,n={}){A(this,"ORDER");A(this,"BITS");A(this,"BYTES");A(this,"isLE");A(this,"ZERO",me);A(this,"ONE",ne);A(this,"_lengths");A(this,"_mod");if(t<=ne)throw new Error("invalid field: expected ORDER > 1, got "+t);let r;this.isLE=!1,n!=null&&typeof n=="object"&&(typeof n.BITS=="number"&&(r=n.BITS),typeof n.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:n.sqrt,enumerable:!0}),typeof n.isLE=="boolean"&&(this.isLE=n.isLE),n.allowedLengths&&(this._lengths=Object.freeze(n.allowedLengths.slice())),typeof n.modFromBytes=="boolean"&&(this._mod=n.modFromBytes));const{nBitLength:s,nByteLength:l}=Ig(t,r);if(l>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=t,this.BITS=s,this.BYTES=l,Object.freeze(this)}create(t){return fe(t,this.ORDER)}isValid(t){if(typeof t!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof t);return me<=t&&t<this.ORDER}is0(t){return t===me}isValidNot0(t){return!this.is0(t)&&this.isValid(t)}isOdd(t){return(t&ne)===ne}neg(t){return fe(-t,this.ORDER)}eql(t,n){return t===n}sqr(t){return fe(t*t,this.ORDER)}add(t,n){return fe(t+n,this.ORDER)}sub(t,n){return fe(t-n,this.ORDER)}mul(t,n){return fe(t*n,this.ORDER)}pow(t,n){return Rg(t,n,this.ORDER)}div(t,n){return fe(t*Uc(n,this.ORDER),this.ORDER)}sqrN(t){return t*t}addN(t,n){return t+n}subN(t,n){return t-n}mulN(t,n){return t*n}inv(t){return Uc(t,this.ORDER)}sqrt(t){let n=Hc.get(this);return n||Hc.set(this,n=Ag(this.ORDER)),n(this,t)}toBytes(t){return this.isLE?bg(t,this.BYTES):Hf(t,this.BYTES)}fromBytes(t,n=!1){$e(t);const{_lengths:r,BYTES:s,isLE:l,ORDER:o,_mod:a}=this;if(r){if(t.length<1||!r.includes(t.length)||t.length>s)throw new Error("Field.fromBytes: expected "+r+" bytes, got "+t.length);const u=new Uint8Array(s);u.set(t,l?0:u.length-t.length),t=u}if(t.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+t.length);let c=l?il(t):Uf(t);if(a&&(c=fe(c,o)),!n&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(t){return Qf(this,t,!0)}cmov(t,n,r){return Gn(r,"condition"),r?n:t}}function aa(e,t={}){return Object.freeze(Vc.prototype),new Vc(e,t)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ca=BigInt(0),$r=BigInt(1),Fg=BigInt(4),ri=16,Wc=128,$g=5,Kc=2**31;function _l(e){const t=e;if(typeof t!="function")throw new TypeError('"Point" expected constructor, got type='+typeof e);kr(t.fromAffine,"Point.fromAffine"),kr(t.fromBytes,"Point.fromBytes"),kr(t.fromHex,"Point.fromHex"),In(t.BASE,"Point.BASE"),In(t.ZERO,"Point.ZERO"),Fr(t.Fp),Fr(t.Fn)}function Ug(e,t){_l(e),Zf(t,e);const n=Qf(e.Fp,t.map(r=>r.Z));return t.map((r,s)=>e.fromAffine(r.toAffine(n[s])))}function Hg(e,t,n=1){if(!Number.isSafeInteger(e)||e<n||e>t)throw new Error("invalid window size, expected ["+n+".."+t+"], got W="+e)}function Vg(e,t){const n=e*(4*t+128);if(n>Kc)throw new Error("invalid window size: table would need ~"+Math.ceil(n/2**20)+" MiB, max "+Kc/2**20+" MiB")}function Wg(e,t){if(e!==void 0){kr(e,"randomBytes");try{const n=e(t);if(!sa(n)||n.length!==t)return}catch{return}return e}}function Zf(e,t){Df(e,"points"),e.forEach((n,r)=>{if(!(n instanceof t))throw new Error("invalid point at index "+r)})}function Kg(e,t,n){if(!Array.isArray(e))throw new Error("array of scalars expected");e.forEach((r,s)=>{if(!(n===void 0?t.isValid(r):on(r)&&r<n))throw new Error("invalid scalar at index "+s)})}const Jf=new WeakMap;function si(e){return Jf.get(e)||1}function qg(e,t){const n=e.double(),r=[e];for(let s=1;s<t;s++)r.push(r[s-1].add(n));return r}function Gg(e,t){const n=2**t,r=n/2,s=BigInt(n-1),l=[];for(;e>ca;){let o=0;e&$r&&(o=Number(e&s),o>=r&&(o-=n),e-=BigInt(o)),l.push(o),e>>=$r}return l}function Xg(e,t,n){const r=2**t,s=r/2,l=BigInt(r-1),o=BigInt(t),a=[];for(let c=0;c<n;c++){let u=Number(e&l);e>>=o,u>s&&(u-=r,e+=$r),a.push(u)}if(e!==ca)throw new Error("invalid wnaf");return a}function Yg(e,t,n){let r=0;for(const l of n)r=Math.max(r,l.length);let s=e;for(let l=r-1;l>=0;l--){l!==r-1&&(s=s.double());for(let o=0;o<n.length;o++){const a=n[o][l];if(a){const c=t[o][Math.abs(a)-1>>1];s=s.add(a<0?c.negate():c)}}}return s}class Qg{constructor(t,n){A(this,"Point");A(this,"BASE");A(this,"ZERO");A(this,"randomBytes");A(this,"wnafPrecomputes",new WeakMap);A(this,"baseCanBeBlinded");A(this,"bits");_l(t),this.randomBytes=Wg(n,ri),this.Point=t,this.BASE=t.BASE,this.ZERO=t.ZERO,this.bits=t.Fn.BITS}buildWnafTable(t,n,r){const s=Math.ceil(r/n)+1,l=2**(n-1),o=[];let a=t;for(let c=0;c<s;c++){let u=a;for(let d=0;d<l;d++)o.push(u),u=u.add(a);a=o[o.length-1].double()}return{W:n,bits:r,windows:s,comp:o}}wnafCachedCT(t,n){const{W:r,windows:s,comp:l}=t,o=2**(r-1),a=Xg(n,r,s);let c=this.ZERO,u=this.BASE;for(let d=0;d<s;d++){const g=a[d],m=d*o,y=Math.abs(g)-1;let w=l[m];for(let j=1;j<o;j++)w=j===y?l[m+j]:w;const v=w.negate();g===0?u=u.add(l[m]):c=c.add(g<0?v:w)}return{p:c,f:u}}getWnafPrecomputes(t,n,r,s){let l=this.wnafPrecomputes.get(n),o=l==null?void 0:l.find(a=>a.W===t&&a.bits===r);return o||(o=this.buildWnafTable(n,t,r),typeof s=="function"&&(o={...o,comp:s(o.comp)}),l||(l=[],this.wnafPrecomputes.set(n,l)),l.push(o)),o}assertPoint(t){if(!(t instanceof this.Point))throw new TypeError('"point" expected Point instance, got type='+typeof t)}validateMulInput(t,n){if(this.assertPoint(t),!Vf(n,$r,this.Point.Fn.ORDER))throw new Error("invalid scalar")}runCT(t,n,r,s){const l=si(t);return l===1?this.fixedWindowCT(t,n,r):this.wnafCachedCT(this.getWnafPrecomputes(l,t,r,s),n)}mulCT(t,n,r){return this.validateMulInput(t,n),this.runCT(t,n,this.bits,r)}mulCTBlinded(t,n,r){if(this.validateMulInput(t,n),this.randomBytes===void 0)throw new Error("randomBytes is required for scalar blinding");const s=this.Point.Fn.BITS+Wc,l=this.randomBytes(ri);if(!sa(l)||l.length!==ri)throw new Error("randomBytes returned invalid byte array");l[0]=l[0]&63|128;const o=n+Uf(l)*this.Point.Fn.ORDER;return this.runCT(t,o,s,r)}fixedWindowCT(t,n,r){const s=$g,l=1<<s,o=_g(s),a=new Array(l);a[0]=this.ZERO;for(let d=1;d<l;d++)a[d]=a[d-1].add(t);const c=Math.ceil(r/s);let u=this.ZERO;for(let d=c-1;d>=0;d--){if(d!==c-1)for(let y=0;y<s;y++)u=u.double();const g=Number(n>>BigInt(d*s)&o);let m=a[0];for(let y=1;y<l;y++)m=y===g?a[y]:m;u=u.add(m)}return{p:u,f:u}}shouldBlind(t,n){return this.randomBytes===void 0?!1:n===$r?!0:t!==this.BASE?!1:(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(t,n,r,s){return this.shouldBlind(t,r)?this.mulCTBlinded(t,n,s):this.mulCT(t,n,s)}mulUnsafe(t,n,r){if(this.assertPoint(t),!on(n))throw new Error("invalid scalar");const s=si(t);if(s===1||n>=this.Point.Fn.ORDER)return Zg(this.Point,[t],[n],!0);const l=this.getWnafPrecomputes(s,t,this.bits,r);return this.wnafCachedCT(l,n).p}setWindowSize(t,n){this.assertPoint(t),Hg(n,this.bits);const r=Math.ceil((this.bits+Wc)/n)+1;Vg(r*2**(n-1),this.Point.Fp.BYTES),Jf.set(t,n),this.wnafPrecomputes.delete(t)}hasWindowSize(t){return si(t)!==1}}function Zg(e,t,n,r=!1){if(_l(e),Zf(t,e),Gn(r,"allowOversized"),Kg(n,e.Fn,r?e.Fn.ORDER**Fg:void 0),t.length!==n.length)throw new Error("arrays of points and scalars must have equal length");const s=t.map(o=>qg(o,4)),l=n.map(o=>Gg(o,4));return Yg(e.ZERO,s,l)}function qc(e,t,n){if(t){if(t.ORDER!==e)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return Fr(t),t}else return aa(e,{isLE:n})}function Jg(e,t,n={},r){if(r===void 0&&(r=e==="edwards"),!t||typeof t!="object")throw new Error(`expected valid ${e} CURVE object`);Fn(n);for(const c of["p","n","h"]){const u=t[c];if(!(on(u)&&u!==ca))throw new Error(`CURVE.${c} must be positive bigint`)}const s=qc(t.p,n.Fp,r),l=qc(t.n,n.Fn,r),a=["Gx","Gy","a","d"];for(const c of a)if(!s.isValid(t[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:s,Fn:l}}function ey(e,t){return function(r){const s=e(r);return{secretKey:s,publicKey:t(s)}}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ms=BigInt(0),gs=BigInt(1),ys=BigInt(2),ty=BigInt(4),Gc=BigInt(8);function ny(e,t,n,r){const s=e.sqr(n),l=e.sqr(r),o=e.add(e.mul(t.a,s),l),a=e.add(e.ONE,e.mul(t.d,e.mul(s,l)));return e.eql(o,a)}function ry(e,t={}){Fn(t,{},{},"extraOpts");const n=t,r=Jg("edwards",e,n,n.FpFnLE),{Fp:s,Fn:l}=r;let o=r.CURVE;const{h:a}=o;if(al(s,o.a)!==1)throw new Error("edwards: CURVE.a must be a square in Fp for complete addition formulas");if(al(s,o.d)!==-1)throw new Error("edwards: CURVE.d must be a non-square in Fp for complete addition formulas");Fn(n,{},{uvRatio:"function",randomBytes:"function"});const c=n.randomBytes===void 0?Ff:n.randomBytes,u=ys<<BigInt(s.BYTES*8)-gs;function d(f){if(!s.isOdd)throw new Error("Field does not have .isOdd()");return s.isOdd(f)}const g=n.uvRatio===void 0?(f,x)=>{try{return{isValid:!0,value:s.sqrt(s.div(f,x))}}catch{return{isValid:!1,value:ms}}}:n.uvRatio;if(!ny(s,o,o.Gx,o.Gy))throw new Error("bad curve params: generator point");const m=s.eql(o.a,s.neg(s.ONE))?f=>s.neg(f):s.eql(o.a,s.ONE)?f=>f:f=>s.mul(o.a,f);function y(f,x,S=!1){const N=S?gs:ms;return $c("coordinate "+f,x,N,u),x}function w(f){if(!(f instanceof v))throw new Error("EdwardsPoint expected")}const h=class h{constructor(x,S,N,b){A(this,"X");A(this,"Y");A(this,"Z");A(this,"T");this.X=y("x",x),this.Y=y("y",S),this.Z=y("z",N,!0),this.T=y("t",b),Object.freeze(this)}static CURVE(){return o}static fromAffine(x){if(x instanceof h)throw new Error("extended point not allowed");const{x:S,y:N}=x||{};return y("x",S),y("y",N),new h(S,N,s.ONE,s.mul(S,N))}static fromBytes(x,S=!1){const N=s.BYTES,{a:b,d:L}=o;x=ol($e(x,N,"point")),Gn(S,"zip215");const O=ol(x),z=x[N-1];O[N-1]=z&-129;const U=il(O),E=S?u:s.ORDER;$c("point.y",U,ms,E);const P=s.sqr(U),C=s.sub(P,s.ONE),D=s.sub(s.mulN(L,P),b);let{isValid:$,value:R}=g(C,D);if(!$)throw new Error("bad point: invalid y coordinate");const _=d(R),M=(z&128)!==0;if(!S&&s.is0(R)&&M)throw new Error("bad point: x=0 and x_0=1");return M!==_&&(R=s.neg(R)),h.fromAffine({x:R,y:U})}static fromHex(x,S=!1){return h.fromBytes(Sg(x),S)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(x=6,S=!0){return p.setWindowSize(this,x),S||this.multiply(ys),this}assertValidity(){const x=this,{a:S,d:N}=o;if(x.is0())throw new Error("bad point: ZERO");const{X:b,Y:L,Z:O,T:z}=x,U=s.sqr(b),E=s.sqr(L),P=s.sqr(O),C=s.sqr(P),D=s.mul(U,S),$=s.mul(s.add(D,E),P),R=s.add(C,s.mul(N,s.mul(U,E)));if(!s.eql($,R))throw new Error("bad point: equation left != right (1)");const _=s.mul(b,L),M=s.mul(O,z);if(!s.eql(_,M))throw new Error("bad point: equation left != right (2)")}equals(x){w(x);const{X:S,Y:N,Z:b}=this,{X:L,Y:O,Z:z}=x,U=s.mul(S,z),E=s.mul(L,b),P=s.mul(N,z),C=s.mul(O,b);return s.eql(U,E)&&s.eql(P,C)}is0(){return this.equals(h.ZERO)}negate(){return new h(s.neg(this.X),this.Y,this.Z,s.neg(this.T))}double(){const{X:x,Y:S,Z:N}=this,b=s.sqr(x),L=s.sqr(S),O=s.mul(s.sqr(N),ys),z=m(b),U=s.addN(x,S),E=s.sub(s.subN(s.sqr(U),b),L),P=s.addN(z,L),C=s.subN(P,O),D=s.subN(z,L),$=s.mul(E,C),R=s.mul(P,D),_=s.mul(E,D),M=s.mul(C,P);return new h($,R,M,_)}add(x){w(x);const{d:S}=o,{X:N,Y:b,Z:L,T:O}=this,{X:z,Y:U,Z:E,T:P}=x,C=s.mul(N,z),D=s.mul(b,U),$=s.mul(s.mulN(O,S),P),R=s.mul(L,E),_=s.sub(s.subN(s.mulN(s.addN(N,b),s.addN(z,U)),C),D),M=s.subN(R,$),I=s.addN(R,$),G=s.sub(D,m(C)),J=s.mul(_,M),Ge=s.mul(I,G),Ee=s.mul(_,G),Ct=s.mul(M,I);return new h(J,Ge,Ct,Ee)}subtract(x){return w(x),this.add(x.negate())}multiply(x){if(!l.isValidNot0(x))throw new RangeError("invalid scalar: expected 1 <= sc < curve.n");const{p:S,f:N}=p.mulSecret(this,x,a,j);return j([S,N])[0]}multiplyUnsafe(x){if(!l.isValid(x))throw new RangeError("invalid scalar: expected 0 <= sc < curve.n");return x===ms?h.ZERO:this.is0()||x===gs?this:p.mulUnsafe(this,x,j)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return p.mulUnsafe(this,o.n).is0()}toAffine(x){const S=this;let N=x;if(N!=null&&typeof N!="bigint")throw new TypeError('"invertedZ" expected bigint, got type='+typeof N);const{X:b,Y:L,Z:O}=S,z=S.is0();N==null&&(N=z?s.create(Gc):s.inv(O));const U=s.mul(b,N),E=s.mul(L,N),P=s.mul(O,N);if(z)return{x:s.ZERO,y:s.ONE};if(!s.eql(P,s.ONE))throw new Error("invZ was invalid");return{x:U,y:E}}clearCofactor(){return a===gs?this:a===ys?this.double():a===ty?this.double().double():a===Gc?this.double().double().double():this.multiplyUnsafe(a)}toBytes(){const{x,y:S}=this.toAffine(),N=s.toBytes(S);return N[N.length-1]|=d(x)?128:0,N}toHex(){return jg(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}};A(h,"BASE",new h(o.Gx,o.Gy,s.ONE,s.mul(o.Gx,o.Gy))),A(h,"ZERO",new h(s.ZERO,s.ONE,s.ONE,s.ZERO)),A(h,"Fp",s),A(h,"Fn",l);let v=h;const j=f=>Ug(v,f),p=new Qg(v,c);return p.bits>=6&&v.BASE.precompute(6),Object.freeze(v.prototype),Object.freeze(v),v}function sy(e,t,n={}){if(_l(e),typeof t!="function")throw new Error('"hash" function param is required');const r=t,s=n;Fn(s,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",zip215:"boolean",mapToCurve:"function",toMontgomery:"function",toMontgomerySecret:"function"});const{prehash:l}=s,{BASE:o,Fp:a,Fn:c}=e,u=r.outputLen,d=2*a.BYTES;if(u!==void 0&&(ll(u,"hash.outputLen"),u!==d))throw new Error(`hash.outputLen must be ${d}, got ${u}`);const g=s.randomBytes===void 0?Ff:s.randomBytes,m=s.toMontgomery,y=s.toMontgomerySecret,w=s.adjustScalarBytes===void 0?C=>C:s.adjustScalarBytes,v=s.domain===void 0?(C,D,$)=>{if(Gn($,"phflag"),D.length||$)throw new Error("Contexts/pre-hash are not supported");return C}:s.domain;function j(C){return c.create(il(C))}function p(C){const D=O.secretKey;$e(C,O.secretKey,"secretKey");const $=$e(r(C),2*D,"hashedSecretKey"),R=w($.slice(0,D)),_=$.slice(D,2*D),M=j(R);return{head:R,prefix:_,scalar:M}}function h(C){const{head:D,prefix:$,scalar:R}=p(C),_=o.multiply(R),M=_.toBytes();return{head:D,prefix:$,scalar:R,point:_,pointBytes:M}}function f(C){return h(C).pointBytes}function x(C=Uint8Array.of(),...D){const $=Ic(...D);return j(r(v($,$e(C,void 0,"context"),!!l)))}function S(C,D,$={}){Fn($,{},{},"options"),C=ol($e(C,void 0,"message")),l&&(C=l(C));const{prefix:R,scalar:_,pointBytes:M}=h(D),I=x($.context,R,C),G=o.multiply(I).toBytes(),J=x($.context,G,M,C),Ge=c.create(I+J*_);if(!c.isValid(Ge))throw new Error("sign failed: invalid s");const Ee=Ic(G,c.toBytes(Ge));return $e(Ee,O.signature,"result")}const N={zip215:s.zip215};function b(C,D,$,R=N){Fn(R);const{context:_}=R,M=R.zip215===void 0?!!N.zip215:R.zip215,I=O.signature;C=$e(C,I,"signature"),D=$e(D,void 0,"message"),$=$e($,O.publicKey,"publicKey"),M!==void 0&&Gn(M,"zip215"),l&&(D=l(D));const G=I/2,J=C.subarray(0,G),Ge=il(C.subarray(G,I));let Ee,Ct,nt;try{Ee=e.fromBytes($,M),Ct=e.fromBytes(J,M),nt=o.multiplyUnsafe(Ge)}catch{return!1}if(!M&&Ee.isSmallOrder())return!1;const gn=x(_,J,$,D);return Ct.add(Ee.multiplyUnsafe(gn)).subtract(nt).clearCofactor().is0()}const L=a.BYTES,O={secretKey:L,publicKey:L,signature:2*L,seed:L};function z(C){return C=C===void 0?g(O.seed):C,$e(C,O.seed,"seed")}function U(C){return sa(C)&&C.length===O.secretKey}function E(C,D){try{return!!e.fromBytes(C,D===void 0?N.zip215:D)}catch{return!1}}const P={getExtendedPublicKey:h,randomSecretKey:z,isValidSecretKey:U,isValidPublicKey:E,toMontgomery(C){if(m===void 0)throw new Error("Montgomery conversion is not supported for this curve");return m(e.fromBytes(C))},toMontgomerySecret(C){if(y===void 0)throw new Error("Montgomery conversion is not supported for this curve");return y(C)}};return Object.freeze(O),Object.freeze(P),Object.freeze({keygen:ey(z,f),getPublicKey:f,sign:S,verify:b,utils:P,Point:e,lengths:O})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ro=BigInt(1),Xc=BigInt(2),ly=BigInt(5),iy=BigInt(8),ua=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),oy={p:ua,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:iy,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function ay(e){const t=BigInt(10),n=BigInt(20),r=BigInt(40),s=BigInt(80),l=ua,a=e*e%l*e%l,c=lt(a,Xc,l)*a%l,u=lt(c,ro,l)*e%l,d=lt(u,ly,l)*u%l,g=lt(d,t,l)*d%l,m=lt(g,n,l)*g%l,y=lt(m,r,l)*m%l,w=lt(y,s,l)*y%l,v=lt(w,s,l)*y%l,j=lt(v,t,l)*d%l;return{pow_p_5_8:lt(j,Xc,l)*e%l,b2:a}}function eh(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}const Yc=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function cy(e,t){const n=ua,r=fe(t*t*t,n),s=fe(r*r*t,n),l=ay(e*s).pow_p_5_8;let o=fe(e*r*l,n);const a=fe(t*o*o,n),c=o,u=fe(o*Yc,n),d=a===e,g=a===fe(-e,n),m=a===fe(-e*Yc,n);return d&&(o=c),(g||m)&&(o=u),Bg(o,n)&&(o=fe(-o,n)),{isValid:d||g,value:o}}const da=ry(oy,{uvRatio:cy}),Qc=da.Fp;function uy(e){const{y:t}=e;return Qc.toBytes(Qc.div(ro+t,ro-t))}function dy(e){const t=da.Fp.BYTES;return ht(e,t),eh(Cl(e.subarray(0,t))).subarray(0,t)}function fy(e){return sy(da,Cl,Object.assign({adjustScalarBytes:eh,toMontgomery:uy,toMontgomerySecret:dy,zip215:!0},e))}const fa=fy({});class Zc{constructor(t,n){A(this,"oHash");A(this,"iHash");A(this,"blockLen");A(this,"outputLen");A(this,"canXOF",!1);A(this,"finished",!1);A(this,"destroyed",!1);if(_f(t),ht(n,void 0,"key"),this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("expected Hash instance");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,s=new Uint8Array(r);s.set(n.length>r?t.create().update(n).digest():n);for(let l=0;l<s.length;l++)s[l]^=54;this.iHash.update(s),this.oHash=t.create();for(let l=0;l<s.length;l++)s[l]^=106;this.oHash.update(s),Nt(s)}update(t){return rl(this),this.iHash.update(t),this}digestInto(t){rl(this),Tf(t,this),this.finished=!0;const n=t.subarray(0,this.outputLen);this.iHash.digestInto(n),this.oHash.update(n),this.oHash.digestInto(n),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:s,destroyed:l,blockLen:o,outputLen:a,canXOF:c}=this;return t=t,t.finished=s,t.destroyed=l,t.blockLen=o,t.outputLen=a,t.canXOF=c,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const th=(()=>{const e=(t,n,r)=>new Zc(t,n).update(r).digest();return e.create=(t,n)=>new Zc(t,n),e})(),nh=Object.freeze(`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`));function hy(e,t,n,r){_f(e);const s=Lf({dkLen:32,asyncTick:10},r),{c:l,dkLen:o,asyncTick:a}=s;if(dt(l,"c"),dt(o,"dkLen"),dt(a,"asyncTick"),l<1)throw new Error('"c" (iterations) must be >= 1');if(o<1)throw new Error('"dkLen" must be >= 1');if(o>(2**32-1)*e.outputLen)throw new Error("derived key too long");const c=Dc(t,"password");try{const u=Dc(n,"salt");try{const d=new Uint8Array(o),{iHash:g,oHash:m,outputLen:y}=th.create(e,c),w=new Uint8Array(y),v=py(g,m,u,w);return{c:l,dkLen:o,asyncTick:a,DK:d,outputLen:y,eng:v}}finally{typeof n=="string"&&Nt(u)}}finally{typeof t=="string"&&Nt(c)}}function py(e,t,n,r){const s=new Uint8Array(4),l=Ps(s),o=e._cloneInto().update(n),a=t._cloneInto(),c=e._cloneInto,u=t._cloneInto;return{u1:(d,g)=>{l.setInt32(0,d,!1),o._cloneInto(a).update(s).digestInto(r),t._cloneInto(a).update(r).digestInto(r),g.set(r.subarray(0,g.length))},rounds:(d,g)=>{for(let m=1;m<d;m++){c.call(e,a).update(r).digestInto(r),u.call(t,a).update(r).digestInto(r);for(let y=0;y<g.length;y++)g[y]^=r[y]}},output:d=>(e.destroy(),t.destroy(),o.destroy(),a.destroy(),Nt(r),d)}}function my(e,t,n,r){const{c:s,dkLen:l,DK:o,outputLen:a,eng:c}=hy(e,t,n,r);for(let u=1,d=0;d<l;u++,d+=a){const g=o.subarray(d,d+a);c.u1(u,g),c.rounds(s,g)}return c.output(o)}/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const gy=e=>e[0]==="あいこくしん";function rh(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=55296&&n<=56319){if(t+1>=e.length)return!1;const r=e.charCodeAt(++t);if(r<56320||r>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function sh(e){if(typeof e!="string")throw new TypeError("invalid mnemonic type: "+typeof e);if(!rh(e))throw new TypeError("expected well-formed Unicode string");return e.normalize("NFKD")}function lh(e){const t=sh(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function ih(e){if(ht(e),![16,20,24,28,32].includes(e.length))throw new RangeError("invalid entropy length")}function yy(e,t=128){if(dt(t),t%32!==0||t>256)throw new RangeError("Invalid entropy");return ky(Rf(t/8),e)}const oh=e=>{const t=8-e.length/4;return Bf(e)[0]>>t<<t};function ah(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new TypeError("Wordlist: expected array of 2048 strings");e.forEach(t=>{if(typeof t!="string")throw new TypeError("wordlist: non-string element: "+t);if(!rh(t))throw new TypeError("wordlist: expected well-formed Unicode string")})}function xy(e,t){ah(t);const n=new Uint8Array(e.length+1);n.set(e),n[e.length]=oh(e);const r=[];let s=0,l=0;for(const o of n)s=s<<8|o,l+=8,l>=11&&(l-=11,r.push(t[s>>>l&2047]),s&=(1<<l)-1);return r}function vy(e,t){ah(t);const n=e.length/3*4,r=new Uint8Array(n+1);let s=0,l=0,o=0;for(const c of e){const u=t.indexOf(c);if(u===-1)throw new Error("Unknown word: "+c);for(s=s<<11|u,l+=11;l>=8;)l-=8,r[o++]=s>>>l&255;s&=(1<<l)-1}l>0&&(r[o]=s<<8-l);const a=r.subarray(0,n);if(r[n]!==oh(a))throw new Error("Invalid checksum");return Uint8Array.from(a)}function wy(e,t){const{words:n}=lh(e),r=vy(n,t);return ih(r),r}function ky(e,t){return ih(e),xy(e,t).join(gy(t)?"　":" ")}function jy(e,t){try{wy(e,t)}catch{return!1}return!0}const Sy=e=>{if(typeof e!="string")throw new TypeError("invalid passphrase type: "+typeof e);return sh("mnemonic"+e)};function Ny(e,t=""){return my(Cl,lh(e).nfkd,Sy(t),{c:2048,dkLen:64})}var eu;const Ur=(eu=globalThis.crypto)==null?void 0:eu.subtle;if(!Ur)throw new Error("WebCrypto unavailable — this surface requires a secure context (HTTPS or localhost).");const Ey=3007,by=2147483648,Cy=21e4;function Jc(e,t){return th(Cl,e,t)}function _y(e,t){let n=Jc(Ir("ed25519 seed"),e),r=n.slice(0,32),s=n.slice(32,64);for(const l of t){const o=(l|by)>>>0,a=new Uint8Array(37);a[0]=0,a.set(r,1),new DataView(a.buffer).setUint32(33,o,!1),n=Jc(s,a),r=n.slice(0,32),s=n.slice(32,64)}return r}function ch(e,t){if(e.kind==="raw"){if(t!==0)throw new Error("raw-seed wallets only support index 0");return e.seed}return _y(e.seed,[44,Ey,0,0,t])}const Ty="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";function Py(e){let t=0;for(;t<e.length&&e[t]===0;)t++;const n=[];for(let s=t;s<e.length;s++){let l=e[s];for(let o=0;o<n.length;o++)l+=n[o]<<8,n[o]=l%58,l=l/58|0;for(;l>0;)n.push(l%58),l=l/58|0}let r="1".repeat(t);for(let s=n.length-1;s>=0;s--)r+=Ty[n[s]];return r}function Ly(e){const t=new Uint8Array(33);return t[0]=0,t.set(e,1),`kvnc${Py(t)}dag`}function ha(e,t,n){const r={seed:e,publicKey:new Uint8Array(32),address:"",kind:t},s=ch(r,n),l=fa.getPublicKey(s);return r.publicKey=l,r.address=Ly(l),r}function zy(e,t=0){if(!jy(e,nh))throw new Error("invalid BIP-39 mnemonic (checksum or wordlist mismatch)");return ha(Ny(e),"mnemonic",t)}function Ry(e=128){return yy(nh,e)}function Oy(e){const t=ln(e.trim());if(t.length!==32)throw new Error("raw seed must be exactly 32 bytes (64 hex chars)");return ha(t,"raw",0)}function uh(e,t=0){return ch(e,t)}function My(e,t,n=0){return ft(fa.sign(ln(t.trim()),uh(e,n)))}const Tl="kovanica.vault.v1";function Xn(e){const t=new Uint8Array(e.length);return t.set(e),t}async function dh(e,t){const n=await Ur.importKey("raw",Xn(Ir(e)),"PBKDF2",!1,["deriveKey"]);return Ur.deriveKey({name:"PBKDF2",salt:Xn(t),iterations:Cy,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function Ay(e,t,n=0){if(t.length<10)throw new Error("passphrase must be at least 10 characters");const r=crypto.getRandomValues(new Uint8Array(16)),s=crypto.getRandomValues(new Uint8Array(12)),l=await dh(t,r),o=new Uint8Array(await Ur.encrypt({name:"AES-GCM",iv:Xn(s)},l,Xn(e.seed))),a={v:1,kind:e.kind,salt:ft(r),iv:ft(s),data:ft(o),index:n,address:e.address};localStorage.setItem(`${Tl}.${n}`,JSON.stringify(a))}function By(e=0){return localStorage.getItem(`${Tl}.${e}`)!==null}async function Dy(e,t=0){const n=localStorage.getItem(`${Tl}.${t}`);if(!n)throw new Error("no stored vault for this index");let r;try{r=JSON.parse(n)}catch{throw new Error("stored vault is corrupt")}if(r.v!==1)throw new Error(`unsupported vault version ${r.v}`);const s=await dh(e,ln(r.salt));let l;try{l=new Uint8Array(await Ur.decrypt({name:"AES-GCM",iv:Xn(ln(r.iv))},s,Xn(ln(r.data))))}catch{throw new Error("could not unlock vault — wrong passphrase or corrupted data")}const o=ha(l,r.kind??"mnemonic",r.index);if(o.address!==r.address)throw new Error("decrypted seed does not match stored address");return o}function Iy(e=0){localStorage.removeItem(`${Tl}.${e}`)}function fh(){const e=k.useRef(null),[t,n]=k.useState(!1),[r,s]=k.useState(()=>By()),[l,o]=k.useState(null),a=k.useCallback(()=>o(null),[]),c=k.useCallback(p=>{e.current=p,n(!0),o(null)},[]),u=k.useCallback(()=>{const p=e.current;p&&p.seed.fill(0),e.current=null,n(!1)},[]),d=k.useCallback((p=128)=>{try{return Ry(p)}catch(h){return o(h instanceof Error?h.message:String(h)),""}},[]),g=k.useCallback((p,h=0)=>{try{c(zy(p,h))}catch(f){o(f instanceof Error?f.message:String(f))}},[c]),m=k.useCallback(p=>{try{c(Oy(p))}catch(h){o(h instanceof Error?h.message:String(h))}},[c]),y=k.useCallback(async(p,h=0)=>{try{c(await Dy(p,h))}catch(f){o(f instanceof Error?f.message:String(f))}},[c]),w=k.useCallback(async(p,h=0)=>{const f=e.current;if(!f){o("unlock a wallet before saving it");return}try{await Ay(f,p,h),s(!0)}catch(x){o(x instanceof Error?x.message:String(x))}},[]),v=k.useCallback((p=0)=>{Iy(p),s(!1)},[]);k.useEffect(()=>u,[u]);const j=k.useCallback((p,h=0)=>{const f=e.current;if(!f)throw new Error("wallet is locked");return My(f,p,h)},[]);return{vault:t?e.current:null,unlocked:t,hasStored:r,newSeedPhrase:d,importPhrase:g,importRawSeed:m,unlock:y,remember:w,forget:v,lock:u,sign:j,error:l,clearError:a}}function hh({value:e}){const[t,n]=k.useState(!1);return i.jsx("button",{type:"button",className:"ml-2 align-middle text-muted hover:text-fg",title:"Copy","aria-label":"Copy to clipboard",onClick:()=>{var r;(r=navigator.clipboard)==null||r.writeText(e),n(!0),setTimeout(()=>n(!1),1500)},children:t?i.jsx(Gm,{size:14,className:"text-ok"}):i.jsx(gf,{size:14})})}function li({label:e,value:t,secret:n}){const[r,s]=k.useState(!n),l=r?t:"•".repeat(Math.min(t.length,24));return i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 py-1.5",children:[i.jsx("span",{className:"text-xs text-muted",children:e}),i.jsxs("span",{className:"flex items-center gap-1 min-w-0",children:[i.jsx("code",{className:"font-mono text-xs text-fg break-all",children:l}),t&&i.jsx(hh,{value:t}),n&&i.jsx("button",{type:"button",className:"text-muted hover:text-fg",onClick:()=>s(o=>!o),"aria-label":r?"Hide":"Reveal",title:r?"Hide":"Reveal",children:r?i.jsx(e0,{size:14}):i.jsx(t0,{size:14})})]})]})}function Fy(){const e=fh(),[t,n]=k.useState("locked"),[r,s]=k.useState(""),[l,o]=k.useState(""),[a,c]=k.useState("0"),[u,d]=k.useState(""),[g,m]=k.useState(""),[y,w]=k.useState(!1),[v,j]=k.useState(!1),[p,h]=k.useState(null),f=e.vault,x=(f==null?void 0:f.address)??"",{data:S,loading:N}=R0(x,1e4),{data:b,loading:L}=O0(x,1e4),O=Number.isFinite(Number(a))&&Number(a)>=0?Number(a):0,z=f?ft(f.publicKey):"",U=f?ft(fa.getPublicKey(uh(f,O))):"";function E(){s(""),o(""),d(""),m(""),w(!1),e.clearError()}function P(R){if(y){if(R.length<10){h('Passphrase must be at least 10 characters, or turn off "remember this device".');return}if(R!==g){h("Passphrases do not match.");return}j(!0),e.remember(R,O).then(()=>h("Encrypted backup stored on this device.")).catch(_=>h((_==null?void 0:_.message)??String(_))).finally(()=>j(!1))}}function C(){try{const R=e.newSeedPhrase(128);s(R),e.importPhrase(R,O),h("New wallet created. Write the recovery phrase down before doing anything else."),P(u)}catch(R){h(R instanceof Error?R.message:String(R))}}function D(){try{const R=t==="import"&&l.trim()?null:r;R===null?e.importRawSeed(l.trim()):e.importPhrase(R,O),h("Wallet unlocked in this tab only."),P(u)}catch(R){h(R instanceof Error?R.message:String(R))}}function $(){j(!0),e.unlock(u,O).then(()=>h("Vault unlocked for this tab.")).catch(R=>h((R==null?void 0:R.message)??String(R))).finally(()=>j(!1))}return e.unlocked?i.jsxs("div",{className:"panel space-y-5",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[i.jsxs("h2",{className:"text-lg font-medium text-fg flex items-center gap-2",children:[i.jsx(eo,{size:20,className:"text-gold"})," Wallet"]}),i.jsx("div",{className:"flex gap-2",children:i.jsxs(K,{variant:"secondary",onClick:()=>e.lock(),children:[i.jsx(bc,{size:16})," Lock"]})})]}),i.jsxs("div",{className:"flex items-center gap-2 text-xs text-ok",children:[i.jsx(f0,{size:14})," Key held in this tab only — it disappears when the tab closes."]}),p&&i.jsx("div",{className:"text-sm text-gold",children:p}),i.jsxs("div",{className:"bg-surface-2 border border-border rounded p-3 divide-y divide-border",children:[i.jsx(li,{label:"Address",value:x}),i.jsx(li,{label:"Public key",value:z}),i.jsx(li,{label:`Signing key (index ${O})`,value:U})]}),i.jsx(Uy,{utxos:S,utxosLoading:N,history:b,historyLoading:L,onIndexChange:c,index:a})]}):i.jsxs("div",{className:"panel space-y-5",children:[i.jsxs("div",{children:[i.jsxs("h2",{className:"text-lg font-medium text-fg flex items-center gap-2",children:[i.jsx(eo,{size:20,className:"text-gold"})," Wallet"]}),i.jsx("p",{className:"text-sm text-muted mt-1",children:"Keys are generated and used in this browser tab. They are never sent to the dashboard server or a node."})]}),p&&i.jsx("div",{className:"text-sm text-gold",children:p}),e.error&&i.jsx("div",{className:"text-sm text-danger",children:e.error}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx(K,{variant:t==="create"?"primary":"secondary",onClick:()=>{n("create"),E()},children:"Create new"}),i.jsx(K,{variant:t==="import"?"primary":"secondary",onClick:()=>{n("import"),E()},children:"Import existing"})]}),t==="create"&&i.jsxs("div",{className:"space-y-3",children:[i.jsxs(K,{onClick:C,children:[i.jsx(l0,{size:16})," Generate recovery phrase"]}),r&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"bg-surface-2 border border-gold/40 rounded p-3 space-y-2",children:[i.jsx("p",{className:"text-xs text-gold",children:"Recovery phrase — the only way to restore this wallet."}),i.jsx("code",{className:"font-mono text-sm text-fg break-words",children:r}),i.jsx(hh,{value:r})]}),i.jsx("p",{className:"text-xs text-muted",children:"A vault is open in this tab. Nothing has been written to disk."})]})]}),t==="import"&&i.jsxs("div",{className:"space-y-3",children:[i.jsx(H,{label:"Recovery phrase (12 or 24 words)",value:r,onChange:R=>s(R.target.value),placeholder:"word1 word2 ...",autoComplete:"off"}),i.jsxs("details",{className:"text-xs text-muted",children:[i.jsx("summary",{className:"cursor-pointer",children:"Use a raw 32-byte seed instead"}),i.jsx("div",{className:"mt-2",children:i.jsx(H,{label:"Raw seed (64 hex chars)",value:l,onChange:R=>o(R.target.value),autoComplete:"off"})})]}),i.jsxs(K,{onClick:D,children:[i.jsx(Ec,{size:16})," Unlock in this tab"]})]}),e.hasStored&&i.jsxs("div",{className:"border-t border-border pt-4 space-y-3",children:[i.jsxs("p",{className:"text-sm text-fg flex items-center gap-2",children:[i.jsx(bc,{size:16,className:"text-gold"})," Encrypted wallet on this device"]}),i.jsx(H,{label:"Passphrase",type:"password",value:u,onChange:R=>d(R.target.value),autoComplete:"current-password"}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsxs(K,{onClick:$,loading:v,children:[i.jsx(Ec,{size:16})," Unlock"]}),i.jsxs(K,{variant:"danger",onClick:()=>{e.forget(O),h("Stored vault removed from this device.")},children:[i.jsx(na,{size:16})," Forget"]})]})]}),t==="create"||t==="import"?i.jsx($y,{passphrase:u,setPassphrase:d,passphrase2:g,setPassphrase2:m,remember:y,setRemember:w}):null]})}function $y(e){return i.jsxs("details",{className:"border-t border-border pt-4",children:[i.jsx("summary",{className:"cursor-pointer text-sm text-fg",children:"Remember on this device (optional)"}),i.jsxs("div",{className:"mt-3 space-y-3",children:[i.jsxs("label",{className:"flex items-center gap-2 text-sm text-fg",children:[i.jsx("input",{type:"checkbox",checked:e.remember,onChange:t=>e.setRemember(t.target.checked)}),"Encrypt the seed with a passphrase and store it locally"]}),e.remember&&i.jsxs(i.Fragment,{children:[i.jsx(H,{label:"Passphrase (min 10 chars)",type:"password",value:e.passphrase,onChange:t=>e.setPassphrase(t.target.value),autoComplete:"new-password"}),i.jsx(H,{label:"Confirm passphrase",type:"password",value:e.passphrase2,onChange:t=>e.setPassphrase2(t.target.value),autoComplete:"new-password"})]}),i.jsx("p",{className:"text-xs text-muted",children:"Off by default. When on, the seed is stored AES-GCM encrypted, keyed by a PBKDF2 hash of this passphrase."})]})]})}function Uy(e){const{utxos:t,utxosLoading:n,history:r,historyLoading:s,index:l,onIndexChange:o}=e;return i.jsxs("div",{className:"space-y-5",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[i.jsxs(Z,{variant:"ok",children:["Native balance ",Y((t==null?void 0:t.balance)??0)," KVNC"]}),i.jsxs("span",{className:"text-xs text-muted",children:[W((t==null?void 0:t.total)??0)," UTXOs"]}),i.jsx("div",{className:"ml-auto w-24",children:i.jsx(H,{label:"Address index",value:l,onChange:a=>o(a.target.value)})})]}),t&&Object.keys(t.balances??{}).length>1&&i.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(t.balances??{}).map(([a,c])=>i.jsxs(Z,{variant:"info",children:[a,": ",Y(c)]},a))}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-sm font-medium text-fg mb-2",children:"Recent history"}),s?i.jsx("p",{className:"text-sm text-muted",children:"Loading…"}):!r||r.txs.length===0?i.jsx("p",{className:"text-sm text-muted",children:"No history for this address yet."}):i.jsx(le,{headers:["Block","Type","Asset","Delta"],rows:r.txs.slice(0,25).map(a=>[String(a.block).slice(0,12),a.kind,a.asset_id??"KVNC",`${a.delta>=0?"+":""}${Y(a.delta)}`])})]})]})}const Hy="KVNC";function Vy(){const e=fh(),{data:t}=Cf(),[n,r]=k.useState(""),[s,l]=k.useState(""),[o,a]=k.useState("8"),[c,u]=k.useState(""),[d,g]=k.useState(""),[m,y]=k.useState(""),[w,v]=k.useState(!1),j=k.useMemo(()=>{const f=n.trim();if(!f)return null;const x=Ir("kovanica-dashboard/asset-id"),S=Ir(f.toLowerCase());return ft(Bf(Wy(x,S)))},[n]),p=/^[0-9a-fA-F]{64}$/.test(c.trim()),h=k.useMemo(()=>(t??[]).map(x=>({id:x.asset_id,symbol:x.symbol||"—",name:x.name||"—"})),[t]);return i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"font-display text-2xl font-medium text-fg",children:"Multi-Asset"}),i.jsx(Z,{variant:"info",children:"KVP-102"})]}),i.jsx(Z,{variant:"warn",children:"Minting is coinbase-only"})]}),i.jsxs("div",{className:"flex items-start gap-3 rounded-md border border-gold/40 bg-gold/5 p-4",children:[i.jsx(wf,{size:18,className:"mt-0.5 shrink-0 text-gold"}),i.jsxs("div",{className:"space-y-2 text-sm text-muted",children:[i.jsx("p",{className:"text-fg",children:"This dashboard cannot create an asset, and that is by design."}),i.jsx("p",{children:"RFC-002 §5 restricts minting to coinbase transactions, and the ledger rejects any regular transaction that produces an asset output it did not consume. An asset first exists when it is minted in a coinbase by a block producer."}),i.jsx("p",{children:"What you can do here is prepare an asset identifier and its metadata, then transfer or burn assets that already exist."})]})]}),i.jsxs("section",{className:"panel space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(ta,{size:18,className:"text-blue"}),i.jsx("h3",{className:"font-display text-lg font-medium text-fg",children:"Asset identifier"})]}),i.jsx("p",{className:"text-sm text-muted",children:"An asset id is a 32-byte value chosen by the issuer. The protocol does not derive it from a definition, so any 32 bytes are valid — the ledger only requires that the value is consistent between a spend and its outputs."}),i.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[i.jsx(H,{label:"Symbol",placeholder:"MYTKN",value:n,onChange:f=>r(f.target.value)}),i.jsx(H,{label:"Name",placeholder:"My Token",value:s,onChange:f=>l(f.target.value)})]}),j&&i.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[i.jsx("span",{className:"text-muted",children:"Suggested from symbol (your choice, not a protocol hash):"}),i.jsx("code",{className:"break-all font-mono text-fg",children:j}),i.jsx(K,{size:"sm",variant:"secondary",onClick:()=>u(j),children:"Use"})]}),i.jsx(H,{label:"Asset id (64 hex characters)",placeholder:j??"32-byte hex identifier",value:c,onChange:f=>u(f.target.value),error:c&&!p?"Must be exactly 64 hex characters.":void 0}),i.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[i.jsx(H,{label:"Decimals (display only)",value:o,onChange:f=>a(f.target.value)}),i.jsx("div",{className:"flex items-end",children:i.jsx("p",{className:"text-xs text-muted",children:"Metadata is a local note. The ledger stores the id and the amount, not this record."})})]})]}),i.jsxs("section",{className:"panel space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Ji,{size:18,className:"text-ok"}),i.jsx("h3",{className:"font-display text-lg font-medium text-fg",children:"Transfer or burn"})]}),e.unlocked?i.jsxs("div",{className:"space-y-3",children:[i.jsx(H,{label:"Recipient address",placeholder:"kvnc…dag",value:d,onChange:f=>g(f.target.value)}),i.jsx(H,{label:"Amount (atoms)",placeholder:"1000000",value:w?"all":m,onChange:f=>y(f.target.value),disabled:w}),i.jsxs("label",{className:"flex items-center gap-2 text-sm text-muted",children:[i.jsx("input",{type:"checkbox",checked:w,onChange:f=>v(f.target.checked)}),i.jsx(xf,{size:14,className:"text-danger"}),"Burn instead of transfer"]}),i.jsxs(K,{variant:"primary",disabled:!0,children:[w?"Burn transaction":"Transfer transaction"," — signing flow not wired yet"]}),i.jsx("p",{className:"text-xs text-muted",children:"The browser can build and sign a plain native transfer, but multi-asset spends also need the asset-carrying sighash from the node. That endpoint has not been verified as usable, so this action stays disabled rather than failing at submit time."})]}):i.jsx("p",{className:"text-sm text-muted",children:"Unlock a wallet to sign a transfer. Keys never leave this tab."})]}),i.jsxs("section",{className:"panel space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between gap-2",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Sf,{size:18,className:"text-blue"}),i.jsx("h3",{className:"font-display text-lg font-medium text-fg",children:"Assets on this network"})]}),i.jsx(Z,{variant:h.length?"ok":"info",children:h.length?`${h.length} listed`:"none listed"})]}),h.length===0?i.jsxs("p",{className:"text-sm text-muted",children:["No assets are currently listed on ",i.jsx("code",{className:"font-mono",children:Hy}),"'s DEX index. The first asset appears when a block producer mints one in a coinbase."]}):i.jsx(le,{headers:["Asset id","Symbol","Name"],rows:h.map(f=>[f.id.slice(0,20)+"…",f.symbol,f.name])})]})]})}function Wy(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n}function Ky(e,t){const n=k.useCallback(o=>{if(!o)return t;const a=o.replace(/^#/,"");return e.includes(a)?a:t},[e,t]),[r,s]=k.useState(()=>{if(typeof window>"u")return t;const o=window.location.hash;return(o?o.slice(1):null)?n(o):t}),l=k.useCallback(o=>{const a=n(o);if(s(a),typeof window<"u"){const c=`#${a}`;window.location.hash!==c&&(window.location.hash=c)}},[n]);return k.useEffect(()=>{const o=()=>{const a=window.location.hash;s(n(a))};return window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[n]),[r,l]}const so=[{id:"overview",label:"Overview",icon:"home"},{id:"blockdag",label:"BlockDAG",icon:"git-branch"},{id:"blocks",label:"Blocks",icon:"database"},{id:"txs",label:"Transactions",icon:"activity"},{id:"mempool",label:"Mempool",icon:"clock"},{id:"wallet",label:"Wallet",icon:"wallet"},{id:"addresses",label:"Addresses",icon:"users"},{id:"tokens",label:"Tokens",icon:"coins"},{id:"assets",label:"Multi-Asset",icon:"layers"},{id:"network",label:"Network",icon:"globe"},{id:"consensus",label:"Consensus",icon:"shield"},{id:"htlc",label:"HTLC",icon:"swap"},{id:"multisig",label:"Multisig",icon:"users-round"},{id:"faucet",label:"Faucet",icon:"droplet"},{id:"mining",label:"Mining",icon:"pickaxe"},{id:"api",label:"API Console",icon:"terminal"},{id:"metrics",label:"Metrics",icon:"bar-chart-2"},{id:"ops",label:"Ops",icon:"settings"}],qy=[{label:"Chain",panels:[{id:"overview",label:"Overview",icon:"home"},{id:"blockdag",label:"BlockDAG",icon:"git-branch"},{id:"blocks",label:"Blocks",icon:"database"},{id:"txs",label:"Transactions",icon:"activity"},{id:"mempool",label:"Mempool",icon:"clock"}]},{label:"Data & Identity",panels:[{id:"wallet",label:"Wallet",icon:"wallet"},{id:"addresses",label:"Addresses",icon:"users"},{id:"tokens",label:"Tokens",icon:"coins"},{id:"assets",label:"Multi-Asset",icon:"layers"}]},{label:"Network & Consensus",panels:[{id:"network",label:"Network",icon:"globe"},{id:"consensus",label:"Consensus",icon:"shield"}]},{label:"DeFi & Interop",panels:[{id:"htlc",label:"HTLC",icon:"swap"},{id:"multisig",label:"Multisig",icon:"users-round"}]},{label:"Tools & Dev",panels:[{id:"api",label:"API Console",icon:"terminal"},{id:"metrics",label:"Metrics",icon:"bar-chart-2"},{id:"faucet",label:"Faucet",icon:"droplet"},{id:"mining",label:"Mining",icon:"pickaxe"}]},{label:"Ops",panels:[{id:"ops",label:"Ops",icon:"settings"}]}],Gy=so.map(e=>e.id),ph="(min-width: 1024px)";function Xy(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(ph).matches}function Yy(e,t){const n=[e==null?void 0:e.network,e==null?void 0:e.net,t==null?void 0:t.network,t==null?void 0:t.net,t==null?void 0:t.network_id,t==null?void 0:t.chain_id];for(const s of n)if(typeof s=="string"&&s.trim().length>0)return s.trim();const r=(t==null?void 0:t.genesis)||(e==null?void 0:e.genesis);return typeof r=="string"&&r.includes("mainnet")?"kovanica-mainnet":typeof r=="string"&&r.includes("testnet")?"kovanica-testnet":"unknown"}function Qy(){var U,E;const[e,t]=Ky(Gy,"overview"),[n,r]=k.useState(!1);k.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const P=window.matchMedia(ph);r(P.matches);const C=D=>r(D.matches);return P.addEventListener("change",C),()=>P.removeEventListener("change",C)},[]);const{data:s,loading:l}=T0(5e3),{data:o,loading:a}=P0(5e3),{data:c,loading:u}=L0(5e3),{data:d,loading:g}=z0(4e3),m=l||a||u||g,y=k.useMemo(()=>{var C;if(!s)return null;if(typeof s.blue_score=="number")return s;const P=(C=c==null?void 0:c.node)==null?void 0:C.blue_score;return typeof P=="number"?{...s,blue_score:P}:s},[s,c]),[w,v]=k.useState(null),[j,p]=k.useState(0),h=k.useCallback(P=>{switch(P.type){case"block":v(P.id);break;case"tx":p(C=>C+1);break}},[]),{state:f}=M0(h),x=k.useCallback(P=>{t(P),Xy()||r(!1)},[t]),S=k.useCallback(()=>r(P=>!P),[]),N=Yy(y,o),b=((U=so.find(P=>P.id===e))==null?void 0:U.label)??"Overview",L=(y==null?void 0:y.blocks)??((E=c==null?void 0:c.node)==null?void 0:E.blocks)??0,O=`${N}${L>0?` • ${L.toLocaleString()} blocks`:""}`,z=()=>{switch(e){case"overview":return i.jsx(Lc,{head:y,bootstrap:o,state:c,loading:m});case"blockdag":return i.jsx(A0,{state:c,loading:m});case"blocks":return i.jsx(B0,{state:c,loading:m});case"txs":return i.jsx(D0,{state:c,loading:m});case"addresses":return i.jsx(I0,{state:c,loading:m});case"wallet":return i.jsx(Fy,{});case"assets":return i.jsx(Vy,{});case"mempool":return i.jsx(F0,{state:c,loading:m});case"network":return i.jsx($0,{bootstrap:o,state:c,loading:m});case"consensus":return i.jsx(U0,{network:d,state:c,loading:m});case"tokens":return i.jsx(H0,{state:c,loading:m});case"htlc":return i.jsx(V0,{});case"multisig":return i.jsx(W0,{});case"faucet":return i.jsx(K0,{state:c,loading:m});case"mining":return i.jsx(q0,{state:c,loading:m});case"api":return i.jsx(G0,{});case"metrics":return i.jsx(X0,{});case"ops":return i.jsx(Y0,{});default:return i.jsx(Lc,{head:y,bootstrap:o,state:c,loading:m})}};return i.jsx(C0,{sidebarOpen:n,onSidebarToggle:S,panels:so,panelGroups:qy,activePanel:e,onPanelChange:x,title:b,subtitle:O,network:N,wsState:f,head:y,bootstrap:o,fmtKvnc:Y,lastBlock:w,txCount:j,children:z()})}ii.createRoot(document.getElementById("root")).render(i.jsx(Rh.StrictMode,{children:i.jsx(Qy,{})}));
//# sourceMappingURL=index-DnmLqL4d.js.map
