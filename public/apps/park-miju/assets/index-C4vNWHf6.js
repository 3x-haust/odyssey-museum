(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();var _p={exports:{}},su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx;function rb(){if(Hx)return su;Hx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:c,ref:r!==void 0?r:null,props:l}}return su.Fragment=t,su.jsx=n,su.jsxs=n,su}var Gx;function ob(){return Gx||(Gx=1,_p.exports=rb()),_p.exports}var Qo=ob(),gp={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx;function lb(){if(Vx)return me;Vx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function y(B,Q,vt){this.props=B,this.context=Q,this.refs=x,this.updater=vt||T}y.prototype.isReactComponent={},y.prototype.setState=function(B,Q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Q,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function A(){}A.prototype=y.prototype;function C(B,Q,vt){this.props=B,this.context=Q,this.refs=x,this.updater=vt||T}var w=C.prototype=new A;w.constructor=C,M(w,y.prototype),w.isPureReactComponent=!0;var P=Array.isArray;function N(){}var O={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function U(B,Q,vt){var At=vt.ref;return{$$typeof:o,type:B,key:Q,ref:At!==void 0?At:null,props:vt}}function G(B,Q){return U(B.type,Q,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function W(B){var Q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(vt){return Q[vt]})}var nt=/\/+/g;function ot(B,Q){return typeof B=="object"&&B!==null&&B.key!=null?W(""+B.key):Q.toString(36)}function X(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(N,N):(B.status="pending",B.then(function(Q){B.status==="pending"&&(B.status="fulfilled",B.value=Q)},function(Q){B.status==="pending"&&(B.status="rejected",B.reason=Q)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function I(B,Q,vt,At,Ut){var at=typeof B;(at==="undefined"||at==="boolean")&&(B=null);var yt=!1;if(B===null)yt=!0;else switch(at){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(B.$$typeof){case o:case t:yt=!0;break;case _:return yt=B._init,I(yt(B._payload),Q,vt,At,Ut)}}if(yt)return Ut=Ut(B),yt=At===""?"."+ot(B,0):At,P(Ut)?(vt="",yt!=null&&(vt=yt.replace(nt,"$&/")+"/"),I(Ut,Q,vt,"",function(ie){return ie})):Ut!=null&&(H(Ut)&&(Ut=G(Ut,vt+(Ut.key==null||B&&B.key===Ut.key?"":(""+Ut.key).replace(nt,"$&/")+"/")+yt)),Q.push(Ut)),1;yt=0;var Tt=At===""?".":At+":";if(P(B))for(var kt=0;kt<B.length;kt++)At=B[kt],at=Tt+ot(At,kt),yt+=I(At,Q,vt,at,Ut);else if(kt=S(B),typeof kt=="function")for(B=kt.call(B),kt=0;!(At=B.next()).done;)At=At.value,at=Tt+ot(At,kt++),yt+=I(At,Q,vt,at,Ut);else if(at==="object"){if(typeof B.then=="function")return I(X(B),Q,vt,At,Ut);throw Q=String(B),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return yt}function F(B,Q,vt){if(B==null)return B;var At=[],Ut=0;return I(B,At,"","",function(at){return Q.call(vt,at,Ut++)}),At}function it(B){if(B._status===-1){var Q=B._result;Q=Q(),Q.then(function(vt){(B._status===0||B._status===-1)&&(B._status=1,B._result=vt)},function(vt){(B._status===0||B._status===-1)&&(B._status=2,B._result=vt)}),B._status===-1&&(B._status=0,B._result=Q)}if(B._status===1)return B._result.default;throw B._result}var pt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},St={map:F,forEach:function(B,Q,vt){F(B,function(){Q.apply(this,arguments)},vt)},count:function(B){var Q=0;return F(B,function(){Q++}),Q},toArray:function(B){return F(B,function(Q){return Q})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return me.Activity=v,me.Children=St,me.Component=y,me.Fragment=n,me.Profiler=r,me.PureComponent=C,me.StrictMode=a,me.Suspense=p,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,me.__COMPILER_RUNTIME={__proto__:null,c:function(B){return O.H.useMemoCache(B)}},me.cache=function(B){return function(){return B.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(B,Q,vt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var At=M({},B.props),Ut=B.key;if(Q!=null)for(at in Q.key!==void 0&&(Ut=""+Q.key),Q)!E.call(Q,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Q.ref===void 0||(At[at]=Q[at]);var at=arguments.length-2;if(at===1)At.children=vt;else if(1<at){for(var yt=Array(at),Tt=0;Tt<at;Tt++)yt[Tt]=arguments[Tt+2];At.children=yt}return U(B.type,Ut,At)},me.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},me.createElement=function(B,Q,vt){var At,Ut={},at=null;if(Q!=null)for(At in Q.key!==void 0&&(at=""+Q.key),Q)E.call(Q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ut[At]=Q[At]);var yt=arguments.length-2;if(yt===1)Ut.children=vt;else if(1<yt){for(var Tt=Array(yt),kt=0;kt<yt;kt++)Tt[kt]=arguments[kt+2];Ut.children=Tt}if(B&&B.defaultProps)for(At in yt=B.defaultProps,yt)Ut[At]===void 0&&(Ut[At]=yt[At]);return U(B,at,Ut)},me.createRef=function(){return{current:null}},me.forwardRef=function(B){return{$$typeof:f,render:B}},me.isValidElement=H,me.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:it}},me.memo=function(B,Q){return{$$typeof:d,type:B,compare:Q===void 0?null:Q}},me.startTransition=function(B){var Q=O.T,vt={};O.T=vt;try{var At=B(),Ut=O.S;Ut!==null&&Ut(vt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(N,pt)}catch(at){pt(at)}finally{Q!==null&&vt.types!==null&&(Q.types=vt.types),O.T=Q}},me.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},me.use=function(B){return O.H.use(B)},me.useActionState=function(B,Q,vt){return O.H.useActionState(B,Q,vt)},me.useCallback=function(B,Q){return O.H.useCallback(B,Q)},me.useContext=function(B){return O.H.useContext(B)},me.useDebugValue=function(){},me.useDeferredValue=function(B,Q){return O.H.useDeferredValue(B,Q)},me.useEffect=function(B,Q){return O.H.useEffect(B,Q)},me.useEffectEvent=function(B){return O.H.useEffectEvent(B)},me.useId=function(){return O.H.useId()},me.useImperativeHandle=function(B,Q,vt){return O.H.useImperativeHandle(B,Q,vt)},me.useInsertionEffect=function(B,Q){return O.H.useInsertionEffect(B,Q)},me.useLayoutEffect=function(B,Q){return O.H.useLayoutEffect(B,Q)},me.useMemo=function(B,Q){return O.H.useMemo(B,Q)},me.useOptimistic=function(B,Q){return O.H.useOptimistic(B,Q)},me.useReducer=function(B,Q,vt){return O.H.useReducer(B,Q,vt)},me.useRef=function(B){return O.H.useRef(B)},me.useState=function(B){return O.H.useState(B)},me.useSyncExternalStore=function(B,Q,vt){return O.H.useSyncExternalStore(B,Q,vt)},me.useTransition=function(){return O.H.useTransition()},me.version="19.2.6",me}var kx;function S0(){return kx||(kx=1,gp.exports=lb()),gp.exports}var fm=S0(),vp={exports:{}},ru={},xp={exports:{}},Sp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx;function ub(){return Xx||(Xx=1,(function(o){function t(I,F){var it=I.length;I.push(F);t:for(;0<it;){var pt=it-1>>>1,St=I[pt];if(0<r(St,F))I[pt]=F,I[it]=St,it=pt;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var F=I[0],it=I.pop();if(it!==F){I[0]=it;t:for(var pt=0,St=I.length,B=St>>>1;pt<B;){var Q=2*(pt+1)-1,vt=I[Q],At=Q+1,Ut=I[At];if(0>r(vt,it))At<St&&0>r(Ut,vt)?(I[pt]=Ut,I[At]=it,pt=At):(I[pt]=vt,I[Q]=it,pt=Q);else if(At<St&&0>r(Ut,it))I[pt]=Ut,I[At]=it,pt=At;else break t}}return F}function r(I,F){var it=I.sortIndex-F.sortIndex;return it!==0?it:I.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,v=null,g=3,S=!1,T=!1,M=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var F=n(d);F!==null;){if(F.callback===null)a(d);else if(F.startTime<=I)a(d),F.sortIndex=F.expirationTime,t(p,F);else break;F=n(d)}}function P(I){if(M=!1,w(I),!T)if(n(p)!==null)T=!0,N||(N=!0,W());else{var F=n(d);F!==null&&X(P,F.startTime-I)}}var N=!1,O=-1,E=5,U=-1;function G(){return x?!0:!(o.unstable_now()-U<E)}function H(){if(x=!1,N){var I=o.unstable_now();U=I;var F=!0;try{t:{T=!1,M&&(M=!1,A(O),O=-1),S=!0;var it=g;try{e:{for(w(I),v=n(p);v!==null&&!(v.expirationTime>I&&G());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,g=v.priorityLevel;var St=pt(v.expirationTime<=I);if(I=o.unstable_now(),typeof St=="function"){v.callback=St,w(I),F=!0;break e}v===n(p)&&a(p),w(I)}else a(p);v=n(p)}if(v!==null)F=!0;else{var B=n(d);B!==null&&X(P,B.startTime-I),F=!1}}break t}finally{v=null,g=it,S=!1}F=void 0}}finally{F?W():N=!1}}}var W;if(typeof C=="function")W=function(){C(H)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ot=nt.port2;nt.port1.onmessage=H,W=function(){ot.postMessage(null)}}else W=function(){y(H,0)};function X(I,F){O=y(function(){I(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(I){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var it=g;g=F;try{return I()}finally{g=it}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var it=g;g=I;try{return F()}finally{g=it}},o.unstable_scheduleCallback=function(I,F,it){var pt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?pt+it:pt):it=pt,I){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=it+St,I={id:_++,callback:F,priorityLevel:I,startTime:it,expirationTime:St,sortIndex:-1},it>pt?(I.sortIndex=it,t(d,I),n(p)===null&&I===n(d)&&(M?(A(O),O=-1):M=!0,X(P,it-pt))):(I.sortIndex=St,t(p,I),T||S||(T=!0,N||(N=!0,W()))),I},o.unstable_shouldYield=G,o.unstable_wrapCallback=function(I){var F=g;return function(){var it=g;g=F;try{return I.apply(this,arguments)}finally{g=it}}}})(Sp)),Sp}var Wx;function cb(){return Wx||(Wx=1,xp.exports=ub()),xp.exports}var yp={exports:{}},ni={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx;function fb(){if(qx)return ni;qx=1;var o=S0();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:v==null?null:""+v,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ni.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ni.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},ni.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},ni.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},ni.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},ni.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ni.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},ni.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ni.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},ni.requestFormReset=function(p){a.d.r(p)},ni.unstable_batchedUpdates=function(p,d){return p(d)},ni.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},ni.useFormStatus=function(){return c.H.useHostTransitionStatus()},ni.version="19.2.6",ni}var Yx;function hb(){if(Yx)return yp.exports;Yx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),yp.exports=fb(),yp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx;function db(){if(jx)return ru;jx=1;var o=cb(),t=S0(),n=hb();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,u=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),e;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==u.return)s=h,u=m;else{for(var b=!1,L=h.child;L;){if(L===s){b=!0,s=h,u=m;break}if(L===u){b=!0,u=h,s=m;break}L=L.sibling}if(!b){for(L=m.child;L;){if(L===s){b=!0,s=m,u=h;break}if(L===u){b=!0,u=m,s=h;break}L=L.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),C=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case P:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case C:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ot(e.type)||"Memo";case E:i=e._payload,e=e._init;try{return ot(e(i))}catch{}}return null}var X=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},pt=[],St=-1;function B(e){return{current:e}}function Q(e){0>St||(e.current=pt[St],pt[St]=null,St--)}function vt(e,i){St++,pt[St]=e.current,e.current=i}var At=B(null),Ut=B(null),at=B(null),yt=B(null);function Tt(e,i){switch(vt(at,i),vt(Ut,e),vt(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?ux(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=ux(i),e=cx(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(At),vt(At,e)}function kt(){Q(At),Q(Ut),Q(at)}function ie(e){e.memoizedState!==null&&vt(yt,e);var i=At.current,s=cx(i,e.type);i!==s&&(vt(Ut,e),vt(At,s))}function te(e){Ut.current===e&&(Q(At),Q(Ut)),yt.current===e&&(Q(yt),eu._currentValue=it)}var Be,ge;function ve(e){if(Be===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Be=i&&i[1]||"",ge=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+e+ge}var Pe=!1;function ae(e,i){if(!e||Pe)return"";Pe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ut){var lt=ut}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ut){lt=ut}e.call(gt.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],L=m[1];if(b&&L){var V=b.split(`
`),rt=L.split(`
`);for(h=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;h<rt.length&&!rt[h].includes("DetermineComponentFrameRoot");)h++;if(u===V.length||h===rt.length)for(u=V.length-1,h=rt.length-1;1<=u&&0<=h&&V[u]!==rt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(V[u]!==rt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||V[u]!==rt[h]){var mt=`
`+V[u].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=u&&0<=h);break}}}finally{Pe=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ve(s):""}function qe(e,i){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==i&&i!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return ae(e.type,!1);case 11:return ae(e.type.render,!1);case 1:return ae(e.type,!0);case 31:return ve("Activity");default:return""}}function Ge(e){try{var i="",s=null;do i+=qe(e,s),s=e,e=e.return;while(e);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var De=Object.prototype.hasOwnProperty,j=o.unstable_scheduleCallback,sn=o.unstable_cancelCallback,xe=o.unstable_shouldYield,ze=o.unstable_requestPaint,Ct=o.unstable_now,Fe=o.unstable_getCurrentPriorityLevel,z=o.unstable_ImmediatePriority,R=o.unstable_UserBlockingPriority,K=o.unstable_NormalPriority,dt=o.unstable_LowPriority,xt=o.unstable_IdlePriority,Dt=o.log,Mt=o.unstable_setDisableYieldValue,ct=null,ht=null;function Bt(e){if(typeof Dt=="function"&&Mt(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ct,e)}catch{}}var Nt=Math.clz32?Math.clz32:he,It=Math.log,Ot=Math.LN2;function he(e){return e>>>=0,e===0?32:31-(It(e)/Ot|0)|0}var ue=256,se=262144,k=4194304;function Rt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,i,s){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var L=u&134217727;return L!==0?(u=L&~m,u!==0?h=Rt(u):(b&=L,b!==0?h=Rt(b):s||(s=L&~e,s!==0&&(h=Rt(s))))):(L=u&~m,L!==0?h=Rt(L):b!==0?h=Rt(b):s||(s=u&~e,s!==0&&(h=Rt(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Xt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Pt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function Zt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function ce(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pn(e,i,s,u,h,m){var b=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var L=e.entanglements,V=e.expirationTimes,rt=e.hiddenUpdates;for(s=b&~s;0<s;){var mt=31-Nt(s),gt=1<<mt;L[mt]=0,V[mt]=-1;var lt=rt[mt];if(lt!==null)for(rt[mt]=null,mt=0;mt<lt.length;mt++){var ut=lt[mt];ut!==null&&(ut.lane&=-536870913)}s&=~gt}u!==0&&He(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function He(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Nt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|s&261930}function di(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var u=31-Nt(s),h=1<<u;h&i|e[u]&i&&(e[u]|=i),s&=~h}}function ui(e,i){var s=i&-i;return s=(s&42)!==0?1:ka(s),(s&(e.suspendedLanes|i))!==0?0:s}function ka(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ys(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Nx(e.type))}function pr(e,i){var s=F.p;try{return F.p=e,i()}finally{F.p=s}}var Ln=Math.random().toString(36).slice(2),rn="__reactFiber$"+Ln,yn="__reactProps$"+Ln,da="__reactContainer$"+Ln,pa="__reactEvents$"+Ln,mr="__reactListeners$"+Ln,Xa="__reactHandles$"+Ln,Ft="__reactResources$"+Ln,Lt="__reactMarker$"+Ln;function Qt(e){delete e[rn],delete e[yn],delete e[pa],delete e[mr],delete e[Xa]}function oe(e){var i=e[rn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[da]||s[rn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=gx(e);e!==null;){if(s=e[rn])return s;e=gx(e)}return i}e=s,s=e.parentNode}return null}function Yt(e){if(e=e[rn]||e[da]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Et(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function be(e){var i=e[Ft];return i||(i=e[Ft]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ne(e){e[Lt]=!0}var tn=new Set,D={};function q(e,i){et(e,i),et(e+"Capture",i)}function et(e,i){for(D[e]=i,e=0;e<i.length;e++)tn.add(i[e])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},zt={};function Gt(e){return De.call(zt,e)?!0:De.call(tt,e)?!1:$.test(e)?zt[e]=!0:(tt[e]=!0,!1)}function wt(e,i,s){if(Gt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Wt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Ht(e,i,s,u){if(u===null)e.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+u)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Jt(e,i,s){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){s=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:u.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ve(e){if(!e._valueTracker){var i=de(e)?"checked":"value";e._valueTracker=Jt(e,i,""+e[i])}}function gn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return e&&(u=de(e)?e.checked?"true":"false":e.value),e=u,e!==s?(i.setValue(e),!0):!1}function on(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var je=/[\n"\\]/g;function Ze(e){return e.replace(je,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function jt(e,i,s,u,h,m,b,L){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ee(i)):e.value!==""+ee(i)&&(e.value=""+ee(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?Ee(e,b,ee(i)):s!=null?Ee(e,b,ee(s)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?e.name=""+ee(L):e.removeAttribute("name")}function ei(e,i,s,u,h,m,b,L){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ve(e);return}s=s!=null?""+ee(s):"",i=i!=null?""+ee(i):s,L||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=L?e.checked:!!u,e.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Ve(e)}function Ee(e,i,s){i==="number"&&on(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Hn(e,i,s,u){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&u&&(e[s].defaultSelected=!0)}else{for(s=""+ee(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Di(e,i,s){if(i!=null&&(i=""+ee(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ee(s):""}function ma(e,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(X(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=ee(i),e.defaultValue=s,u=e.textContent,u===s&&u!==""&&u!==null&&(e.value=u),Ve(e)}function Ui(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Ke=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vn(e,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,s):typeof s!="number"||s===0||Ke.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function _a(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&s[h]!==u&&vn(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&vn(e,m,i[m])}function Ye(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ms=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _r(e){return Ms.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wa(){}var dh=null;function ph(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var no=null,io=null;function l_(e){var i=Yt(e);if(i&&(e=i.stateNode)){var s=e[yn]||null;t:switch(e=i.stateNode,i.type){case"input":if(jt(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ze(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==e&&u.form===e.form){var h=u[yn]||null;if(!h)throw Error(a(90));jt(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===e.form&&gn(u)}break t;case"textarea":Di(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Hn(e,!!s.multiple,i,!1)}}}var mh=!1;function u_(e,i,s){if(mh)return e(i,s);mh=!0;try{var u=e(i);return u}finally{if(mh=!1,(no!==null||io!==null)&&(wc(),no&&(i=no,e=io,io=no=null,l_(i),e)))for(i=0;i<e.length;i++)l_(e[i])}}function vl(e,i){var s=e.stateNode;if(s===null)return null;var u=s[yn]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=!1;if(qa)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){_h=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{_h=!1}var Ts=null,gh=null,Vu=null;function c_(){if(Vu)return Vu;var e,i=gh,s=i.length,u,h="value"in Ts?Ts.value:Ts.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var b=s-e;for(u=1;u<=b&&i[s-u]===h[m-u];u++);return Vu=h.slice(e,1<u?1-u:void 0)}function ku(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Xu(){return!0}function f_(){return!1}function pi(e){function i(s,u,h,m,b){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(s=e[L],this[L]=s?s(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xu:f_,this.isPropagationStopped=f_,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),i}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=pi(gr),Sl=v({},gr,{view:0,detail:0}),a1=pi(Sl),vh,xh,yl,qu=v({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yl&&(yl&&e.type==="mousemove"?(vh=e.screenX-yl.screenX,xh=e.screenY-yl.screenY):xh=vh=0,yl=e),vh)},movementY:function(e){return"movementY"in e?e.movementY:xh}}),h_=pi(qu),s1=v({},qu,{dataTransfer:0}),r1=pi(s1),o1=v({},Sl,{relatedTarget:0}),Sh=pi(o1),l1=v({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),u1=pi(l1),c1=v({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),f1=pi(c1),h1=v({},gr,{data:0}),d_=pi(h1),d1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=m1[e])?!!i[e]:!1}function yh(){return _1}var g1=v({},Sl,{key:function(e){if(e.key){var i=d1[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ku(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(e){return e.type==="keypress"?ku(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ku(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v1=pi(g1),x1=v({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),p_=pi(x1),S1=v({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),y1=pi(S1),M1=v({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),T1=pi(M1),b1=v({},qu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E1=pi(b1),A1=v({},gr,{newState:0,oldState:0}),R1=pi(A1),w1=[9,13,27,32],Mh=qa&&"CompositionEvent"in window,Ml=null;qa&&"documentMode"in document&&(Ml=document.documentMode);var C1=qa&&"TextEvent"in window&&!Ml,m_=qa&&(!Mh||Ml&&8<Ml&&11>=Ml),__=" ",g_=!1;function v_(e,i){switch(e){case"keyup":return w1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function D1(e,i){switch(e){case"compositionend":return x_(i);case"keypress":return i.which!==32?null:(g_=!0,__);case"textInput":return e=i.data,e===__&&g_?null:e;default:return null}}function U1(e,i){if(ao)return e==="compositionend"||!Mh&&v_(e,i)?(e=c_(),Vu=gh=Ts=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return m_&&i.locale!=="ko"?null:i.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!L1[e.type]:i==="textarea"}function y_(e,i,s,u){no?io?io.push(u):io=[u]:no=u,i=Pc(i,"onChange"),0<i.length&&(s=new Wu("onChange","change",null,s,u),e.push({event:s,listeners:i}))}var Tl=null,bl=null;function N1(e){ix(e,0)}function Yu(e){var i=Et(e);if(gn(i))return e}function M_(e,i){if(e==="change")return i}var T_=!1;if(qa){var Th;if(qa){var bh="oninput"in document;if(!bh){var b_=document.createElement("div");b_.setAttribute("oninput","return;"),bh=typeof b_.oninput=="function"}Th=bh}else Th=!1;T_=Th&&(!document.documentMode||9<document.documentMode)}function E_(){Tl&&(Tl.detachEvent("onpropertychange",A_),bl=Tl=null)}function A_(e){if(e.propertyName==="value"&&Yu(bl)){var i=[];y_(i,bl,e,ph(e)),u_(N1,i)}}function O1(e,i,s){e==="focusin"?(E_(),Tl=i,bl=s,Tl.attachEvent("onpropertychange",A_)):e==="focusout"&&E_()}function P1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yu(bl)}function z1(e,i){if(e==="click")return Yu(i)}function I1(e,i){if(e==="input"||e==="change")return Yu(i)}function B1(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Li=typeof Object.is=="function"?Object.is:B1;function El(e,i){if(Li(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!De.call(i,h)||!Li(e[h],i[h]))return!1}return!0}function R_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function w_(e,i){var s=R_(e);e=0;for(var u;s;){if(s.nodeType===3){if(u=e+s.textContent.length,e<=i&&u>=i)return{node:s,offset:i-e};e=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=R_(s)}}function C_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?C_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function D_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=on(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=on(e.document)}return i}function Eh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var F1=qa&&"documentMode"in document&&11>=document.documentMode,so=null,Ah=null,Al=null,Rh=!1;function U_(e,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Rh||so==null||so!==on(u)||(u=so,"selectionStart"in u&&Eh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Al&&El(Al,u)||(Al=u,u=Pc(Ah,"onSelect"),0<u.length&&(i=new Wu("onSelect","select",null,i,s),e.push({event:i,listeners:u}),i.target=so)))}function vr(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ro={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},wh={},L_={};qa&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function xr(e){if(wh[e])return wh[e];if(!ro[e])return e;var i=ro[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in L_)return wh[e]=i[s];return e}var N_=xr("animationend"),O_=xr("animationiteration"),P_=xr("animationstart"),H1=xr("transitionrun"),G1=xr("transitionstart"),V1=xr("transitioncancel"),z_=xr("transitionend"),I_=new Map,Ch="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ch.push("scrollEnd");function ga(e,i){I_.set(e,i),q(i,[e])}var ju=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ji=[],oo=0,Dh=0;function Zu(){for(var e=oo,i=Dh=oo=0;i<e;){var s=Ji[i];Ji[i++]=null;var u=Ji[i];Ji[i++]=null;var h=Ji[i];Ji[i++]=null;var m=Ji[i];if(Ji[i++]=null,u!==null&&h!==null){var b=u.pending;b===null?h.next=h:(h.next=b.next,b.next=h),u.pending=h}m!==0&&B_(s,h,m)}}function Ku(e,i,s,u){Ji[oo++]=e,Ji[oo++]=i,Ji[oo++]=s,Ji[oo++]=u,Dh|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function Uh(e,i,s,u){return Ku(e,i,s,u),Qu(e)}function Sr(e,i){return Ku(e,null,null,i),Qu(e)}function B_(e,i,s){e.lanes|=s;var u=e.alternate;u!==null&&(u.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Nt(s),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=s|536870912),m):null}function Qu(e){if(50<jl)throw jl=0,Hd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var lo={};function k1(e,i,s,u){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(e,i,s,u){return new k1(e,i,s,u)}function Lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ya(e,i){var s=e.alternate;return s===null?(s=Ni(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function F_(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ju(e,i,s,u,h,m){var b=0;if(u=e,typeof e=="function")Lh(e)&&(b=1);else if(typeof e=="string")b=jT(e,s,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Ni(31,s,i,h),e.elementType=U,e.lanes=m,e;case M:return yr(s.children,h,m,i);case x:b=8,h|=24;break;case y:return e=Ni(12,s,i,h|2),e.elementType=y,e.lanes=m,e;case P:return e=Ni(13,s,i,h),e.elementType=P,e.lanes=m,e;case N:return e=Ni(19,s,i,h),e.elementType=N,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:b=10;break t;case A:b=9;break t;case w:b=11;break t;case O:b=14;break t;case E:b=16,u=null;break t}b=29,s=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=Ni(b,s,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function yr(e,i,s,u){return e=Ni(7,e,u,i),e.lanes=s,e}function Nh(e,i,s){return e=Ni(6,e,null,i),e.lanes=s,e}function H_(e){var i=Ni(18,null,null,0);return i.stateNode=e,i}function Oh(e,i,s){return i=Ni(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var G_=new WeakMap;function $i(e,i){if(typeof e=="object"&&e!==null){var s=G_.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Ge(i)},G_.set(e,i),i)}return{value:e,source:i,stack:Ge(i)}}var uo=[],co=0,$u=null,Rl=0,ta=[],ea=0,bs=null,Aa=1,Ra="";function ja(e,i){uo[co++]=Rl,uo[co++]=$u,$u=e,Rl=i}function V_(e,i,s){ta[ea++]=Aa,ta[ea++]=Ra,ta[ea++]=bs,bs=e;var u=Aa;e=Ra;var h=32-Nt(u)-1;u&=~(1<<h),s+=1;var m=32-Nt(i)+h;if(30<m){var b=h-h%5;m=(u&(1<<b)-1).toString(32),u>>=b,h-=b,Aa=1<<32-Nt(i)+h|s<<h|u,Ra=m+e}else Aa=1<<m|s<<h|u,Ra=e}function Ph(e){e.return!==null&&(ja(e,1),V_(e,1,0))}function zh(e){for(;e===$u;)$u=uo[--co],uo[co]=null,Rl=uo[--co],uo[co]=null;for(;e===bs;)bs=ta[--ea],ta[ea]=null,Ra=ta[--ea],ta[ea]=null,Aa=ta[--ea],ta[ea]=null}function k_(e,i){ta[ea++]=Aa,ta[ea++]=Ra,ta[ea++]=bs,Aa=i.id,Ra=i.overflow,bs=e}var jn=null,mn=null,Ue=!1,Es=null,na=!1,Ih=Error(a(519));function As(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl($i(i,e)),Ih}function X_(e){var i=e.stateNode,s=e.type,u=e.memoizedProps;switch(i[rn]=e,i[yn]=u,s){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(s=0;s<Kl.length;s++)Re(Kl[s],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Re("invalid",i),ei(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Re("invalid",i);break;case"textarea":Re("invalid",i),ma(i,u.value,u.defaultValue,u.children)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||ox(i.textContent,s)?(u.popover!=null&&(Re("beforetoggle",i),Re("toggle",i)),u.onScroll!=null&&Re("scroll",i),u.onScrollEnd!=null&&Re("scrollend",i),u.onClick!=null&&(i.onclick=Wa),i=!0):i=!1,i||As(e,!0)}function W_(e){for(jn=e.return;jn;)switch(jn.tag){case 5:case 31:case 13:na=!1;return;case 27:case 3:na=!0;return;default:jn=jn.return}}function fo(e){if(e!==jn)return!1;if(!Ue)return W_(e),Ue=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ep(e.type,e.memoizedProps)),s=!s),s&&mn&&As(e),W_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));mn=_x(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));mn=_x(e)}else i===27?(i=mn,Hs(e.type)?(e=rp,rp=null,mn=e):mn=i):mn=jn?aa(e.stateNode.nextSibling):null;return!0}function Mr(){mn=jn=null,Ue=!1}function Bh(){var e=Es;return e!==null&&(vi===null?vi=e:vi.push.apply(vi,e),Es=null),e}function wl(e){Es===null?Es=[e]:Es.push(e)}var Fh=B(null),Tr=null,Za=null;function Rs(e,i,s){vt(Fh,i._currentValue),i._currentValue=s}function Ka(e){e._currentValue=Fh.current,Q(Fh)}function Hh(e,i,s){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===s)break;e=e.return}}function Gh(e,i,s,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var L=m;m=h;for(var V=0;V<i.length;V++)if(L.context===i[V]){m.lanes|=s,L=m.alternate,L!==null&&(L.lanes|=s),Hh(m.return,s,e),u||(b=null);break t}m=L.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),Hh(b,s,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function ho(e,i,s,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var L=h.type;Li(h.pendingProps.value,b.value)||(e!==null?e.push(L):e=[L])}}else if(h===yt.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(eu):e=[eu])}h=h.return}e!==null&&Gh(i,e,s,u),i.flags|=262144}function tc(e){for(e=e.firstContext;e!==null;){if(!Li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function br(e){Tr=e,Za=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zn(e){return q_(Tr,e)}function ec(e,i){return Tr===null&&br(e),q_(e,i)}function q_(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Za===null){if(e===null)throw Error(a(308));Za=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Za=Za.next=i;return s}var X1=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},W1=o.unstable_scheduleCallback,q1=o.unstable_NormalPriority,Nn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vh(){return{controller:new X1,data:new Map,refCount:0}}function Cl(e){e.refCount--,e.refCount===0&&W1(q1,function(){e.controller.abort()})}var Dl=null,kh=0,po=0,mo=null;function Y1(e,i){if(Dl===null){var s=Dl=[];kh=0,po=qd(),mo={status:"pending",value:void 0,then:function(u){s.push(u)}}}return kh++,i.then(Y_,Y_),i}function Y_(){if(--kh===0&&Dl!==null){mo!==null&&(mo.status="fulfilled");var e=Dl;Dl=null,po=0,mo=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function j1(e,i){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var j_=I.S;I.S=function(e,i){Uv=Ct(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Y1(e,i),j_!==null&&j_(e,i)};var Er=B(null);function Xh(){var e=Er.current;return e!==null?e:ln.pooledCache}function nc(e,i){i===null?vt(Er,Er.current):vt(Er,i.pool)}function Z_(){var e=Xh();return e===null?null:{parent:Nn._currentValue,pool:e}}var _o=Error(a(460)),Wh=Error(a(474)),ic=Error(a(542)),ac={then:function(){}};function K_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Q_(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Wa,Wa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$_(e),e;default:if(typeof i.status=="string")i.then(Wa,Wa);else{if(e=ln,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$_(e),e}throw Rr=i,_o}}function Ar(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Rr=s,_o):s}}var Rr=null;function J_(){if(Rr===null)throw Error(a(459));var e=Rr;return Rr=null,e}function $_(e){if(e===_o||e===ic)throw Error(a(483))}var go=null,Ul=0;function sc(e){var i=Ul;return Ul+=1,go===null&&(go=[]),Q_(go,e,i)}function Ll(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function rc(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function tg(e){function i(J,Y){if(e){var st=J.deletions;st===null?(J.deletions=[Y],J.flags|=16):st.push(Y)}}function s(J,Y){if(!e)return null;for(;Y!==null;)i(J,Y),Y=Y.sibling;return null}function u(J){for(var Y=new Map;J!==null;)J.key!==null?Y.set(J.key,J):Y.set(J.index,J),J=J.sibling;return Y}function h(J,Y){return J=Ya(J,Y),J.index=0,J.sibling=null,J}function m(J,Y,st){return J.index=st,e?(st=J.alternate,st!==null?(st=st.index,st<Y?(J.flags|=67108866,Y):st):(J.flags|=67108866,Y)):(J.flags|=1048576,Y)}function b(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function L(J,Y,st,_t){return Y===null||Y.tag!==6?(Y=Nh(st,J.mode,_t),Y.return=J,Y):(Y=h(Y,st),Y.return=J,Y)}function V(J,Y,st,_t){var re=st.type;return re===M?mt(J,Y,st.props.children,_t,st.key):Y!==null&&(Y.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&Ar(re)===Y.type)?(Y=h(Y,st.props),Ll(Y,st),Y.return=J,Y):(Y=Ju(st.type,st.key,st.props,null,J.mode,_t),Ll(Y,st),Y.return=J,Y)}function rt(J,Y,st,_t){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==st.containerInfo||Y.stateNode.implementation!==st.implementation?(Y=Oh(st,J.mode,_t),Y.return=J,Y):(Y=h(Y,st.children||[]),Y.return=J,Y)}function mt(J,Y,st,_t,re){return Y===null||Y.tag!==7?(Y=yr(st,J.mode,_t,re),Y.return=J,Y):(Y=h(Y,st),Y.return=J,Y)}function gt(J,Y,st){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Nh(""+Y,J.mode,st),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return st=Ju(Y.type,Y.key,Y.props,null,J.mode,st),Ll(st,Y),st.return=J,st;case T:return Y=Oh(Y,J.mode,st),Y.return=J,Y;case E:return Y=Ar(Y),gt(J,Y,st)}if(X(Y)||W(Y))return Y=yr(Y,J.mode,st,null),Y.return=J,Y;if(typeof Y.then=="function")return gt(J,sc(Y),st);if(Y.$$typeof===C)return gt(J,ec(J,Y),st);rc(J,Y)}return null}function lt(J,Y,st,_t){var re=Y!==null?Y.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return re!==null?null:L(J,Y,""+st,_t);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case S:return st.key===re?V(J,Y,st,_t):null;case T:return st.key===re?rt(J,Y,st,_t):null;case E:return st=Ar(st),lt(J,Y,st,_t)}if(X(st)||W(st))return re!==null?null:mt(J,Y,st,_t,null);if(typeof st.then=="function")return lt(J,Y,sc(st),_t);if(st.$$typeof===C)return lt(J,Y,ec(J,st),_t);rc(J,st)}return null}function ut(J,Y,st,_t,re){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(st)||null,L(Y,J,""+_t,re);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case S:return J=J.get(_t.key===null?st:_t.key)||null,V(Y,J,_t,re);case T:return J=J.get(_t.key===null?st:_t.key)||null,rt(Y,J,_t,re);case E:return _t=Ar(_t),ut(J,Y,st,_t,re)}if(X(_t)||W(_t))return J=J.get(st)||null,mt(Y,J,_t,re,null);if(typeof _t.then=="function")return ut(J,Y,st,sc(_t),re);if(_t.$$typeof===C)return ut(J,Y,st,ec(Y,_t),re);rc(Y,_t)}return null}function Kt(J,Y,st,_t){for(var re=null,ke=null,$t=Y,Me=Y=0,Ce=null;$t!==null&&Me<st.length;Me++){$t.index>Me?(Ce=$t,$t=null):Ce=$t.sibling;var Xe=lt(J,$t,st[Me],_t);if(Xe===null){$t===null&&($t=Ce);break}e&&$t&&Xe.alternate===null&&i(J,$t),Y=m(Xe,Y,Me),ke===null?re=Xe:ke.sibling=Xe,ke=Xe,$t=Ce}if(Me===st.length)return s(J,$t),Ue&&ja(J,Me),re;if($t===null){for(;Me<st.length;Me++)$t=gt(J,st[Me],_t),$t!==null&&(Y=m($t,Y,Me),ke===null?re=$t:ke.sibling=$t,ke=$t);return Ue&&ja(J,Me),re}for($t=u($t);Me<st.length;Me++)Ce=ut($t,J,Me,st[Me],_t),Ce!==null&&(e&&Ce.alternate!==null&&$t.delete(Ce.key===null?Me:Ce.key),Y=m(Ce,Y,Me),ke===null?re=Ce:ke.sibling=Ce,ke=Ce);return e&&$t.forEach(function(Ws){return i(J,Ws)}),Ue&&ja(J,Me),re}function le(J,Y,st,_t){if(st==null)throw Error(a(151));for(var re=null,ke=null,$t=Y,Me=Y=0,Ce=null,Xe=st.next();$t!==null&&!Xe.done;Me++,Xe=st.next()){$t.index>Me?(Ce=$t,$t=null):Ce=$t.sibling;var Ws=lt(J,$t,Xe.value,_t);if(Ws===null){$t===null&&($t=Ce);break}e&&$t&&Ws.alternate===null&&i(J,$t),Y=m(Ws,Y,Me),ke===null?re=Ws:ke.sibling=Ws,ke=Ws,$t=Ce}if(Xe.done)return s(J,$t),Ue&&ja(J,Me),re;if($t===null){for(;!Xe.done;Me++,Xe=st.next())Xe=gt(J,Xe.value,_t),Xe!==null&&(Y=m(Xe,Y,Me),ke===null?re=Xe:ke.sibling=Xe,ke=Xe);return Ue&&ja(J,Me),re}for($t=u($t);!Xe.done;Me++,Xe=st.next())Xe=ut($t,J,Me,Xe.value,_t),Xe!==null&&(e&&Xe.alternate!==null&&$t.delete(Xe.key===null?Me:Xe.key),Y=m(Xe,Y,Me),ke===null?re=Xe:ke.sibling=Xe,ke=Xe);return e&&$t.forEach(function(sb){return i(J,sb)}),Ue&&ja(J,Me),re}function an(J,Y,st,_t){if(typeof st=="object"&&st!==null&&st.type===M&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case S:t:{for(var re=st.key;Y!==null;){if(Y.key===re){if(re=st.type,re===M){if(Y.tag===7){s(J,Y.sibling),_t=h(Y,st.props.children),_t.return=J,J=_t;break t}}else if(Y.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&Ar(re)===Y.type){s(J,Y.sibling),_t=h(Y,st.props),Ll(_t,st),_t.return=J,J=_t;break t}s(J,Y);break}else i(J,Y);Y=Y.sibling}st.type===M?(_t=yr(st.props.children,J.mode,_t,st.key),_t.return=J,J=_t):(_t=Ju(st.type,st.key,st.props,null,J.mode,_t),Ll(_t,st),_t.return=J,J=_t)}return b(J);case T:t:{for(re=st.key;Y!==null;){if(Y.key===re)if(Y.tag===4&&Y.stateNode.containerInfo===st.containerInfo&&Y.stateNode.implementation===st.implementation){s(J,Y.sibling),_t=h(Y,st.children||[]),_t.return=J,J=_t;break t}else{s(J,Y);break}else i(J,Y);Y=Y.sibling}_t=Oh(st,J.mode,_t),_t.return=J,J=_t}return b(J);case E:return st=Ar(st),an(J,Y,st,_t)}if(X(st))return Kt(J,Y,st,_t);if(W(st)){if(re=W(st),typeof re!="function")throw Error(a(150));return st=re.call(st),le(J,Y,st,_t)}if(typeof st.then=="function")return an(J,Y,sc(st),_t);if(st.$$typeof===C)return an(J,Y,ec(J,st),_t);rc(J,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,Y!==null&&Y.tag===6?(s(J,Y.sibling),_t=h(Y,st),_t.return=J,J=_t):(s(J,Y),_t=Nh(st,J.mode,_t),_t.return=J,J=_t),b(J)):s(J,Y)}return function(J,Y,st,_t){try{Ul=0;var re=an(J,Y,st,_t);return go=null,re}catch($t){if($t===_o||$t===ic)throw $t;var ke=Ni(29,$t,null,J.mode);return ke.lanes=_t,ke.return=J,ke}finally{}}}var wr=tg(!0),eg=tg(!1),ws=!1;function qh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ds(e,i,s){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(We&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Qu(e),B_(e,null,s),i}return Ku(e,u,i,s),Qu(e)}function Nl(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,di(e,s)}}function jh(e,i){var s=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Zh=!1;function Ol(){if(Zh){var e=mo;if(e!==null)throw e}}function Pl(e,i,s,u){Zh=!1;var h=e.updateQueue;ws=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var V=L,rt=V.next;V.next=null,b===null?m=rt:b.next=rt,b=V;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,L=mt.lastBaseUpdate,L!==b&&(L===null?mt.firstBaseUpdate=rt:L.next=rt,mt.lastBaseUpdate=V))}if(m!==null){var gt=h.baseState;b=0,mt=rt=V=null,L=m;do{var lt=L.lane&-536870913,ut=lt!==L.lane;if(ut?(we&lt)===lt:(u&lt)===lt){lt!==0&&lt===po&&(Zh=!0),mt!==null&&(mt=mt.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var Kt=e,le=L;lt=i;var an=s;switch(le.tag){case 1:if(Kt=le.payload,typeof Kt=="function"){gt=Kt.call(an,gt,lt);break t}gt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=le.payload,lt=typeof Kt=="function"?Kt.call(an,gt,lt):Kt,lt==null)break t;gt=v({},gt,lt);break t;case 2:ws=!0}}lt=L.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:L.tag,payload:L.payload,callback:L.callback,next:null},mt===null?(rt=mt=ut,V=gt):mt=mt.next=ut,b|=lt;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;ut=L,L=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);mt===null&&(V=gt),h.baseState=V,h.firstBaseUpdate=rt,h.lastBaseUpdate=mt,m===null&&(h.shared.lanes=0),Ps|=b,e.lanes=b,e.memoizedState=gt}}function ng(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function ig(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)ng(s[e],i)}var vo=B(null),oc=B(0);function ag(e,i){e=ss,vt(oc,e),vt(vo,i),ss=e|i.baseLanes}function Kh(){vt(oc,ss),vt(vo,vo.current)}function Qh(){ss=oc.current,Q(vo),Q(oc)}var Oi=B(null),ia=null;function Us(e){var i=e.alternate;vt(Cn,Cn.current&1),vt(Oi,e),ia===null&&(i===null||vo.current!==null||i.memoizedState!==null)&&(ia=e)}function Jh(e){vt(Cn,Cn.current),vt(Oi,e),ia===null&&(ia=e)}function sg(e){e.tag===22?(vt(Cn,Cn.current),vt(Oi,e),ia===null&&(ia=e)):Ls()}function Ls(){vt(Cn,Cn.current),vt(Oi,Oi.current)}function Pi(e){Q(Oi),ia===e&&(ia=null),Q(Cn)}var Cn=B(0);function lc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||ap(s)||sp(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qa=0,Se=null,en=null,On=null,uc=!1,xo=!1,Cr=!1,cc=0,zl=0,So=null,Z1=0;function En(){throw Error(a(321))}function $h(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Li(e[s],i[s]))return!1;return!0}function td(e,i,s,u,h,m){return Qa=m,Se=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Vg:md,Cr=!1,m=s(u,h),Cr=!1,xo&&(m=og(i,s,u,h)),rg(e),m}function rg(e){I.H=Fl;var i=en!==null&&en.next!==null;if(Qa=0,On=en=Se=null,uc=!1,zl=0,So=null,i)throw Error(a(300));e===null||Pn||(e=e.dependencies,e!==null&&tc(e)&&(Pn=!0))}function og(e,i,s,u){Se=e;var h=0;do{if(xo&&(So=null),zl=0,xo=!1,25<=h)throw Error(a(301));if(h+=1,On=en=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=kg,m=i(s,u)}while(xo);return m}function K1(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?Il(i):i,e=e.useState()[0],(en!==null?en.memoizedState:null)!==e&&(Se.flags|=1024),i}function ed(){var e=cc!==0;return cc=0,e}function nd(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function id(e){if(uc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}uc=!1}Qa=0,On=en=Se=null,xo=!1,zl=cc=0,So=null}function ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return On===null?Se.memoizedState=On=e:On=On.next=e,On}function Dn(){if(en===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=en.next;var i=On===null?Se.memoizedState:On.next;if(i!==null)On=i,en=e;else{if(e===null)throw Se.alternate===null?Error(a(467)):Error(a(310));en=e,e={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},On===null?Se.memoizedState=On=e:On=On.next=e}return On}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Il(e){var i=zl;return zl+=1,So===null&&(So=[]),e=Q_(So,e,i),i=Se,(On===null?i.memoizedState:On.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Vg:md),e}function hc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Il(e);if(e.$$typeof===C)return Zn(e)}throw Error(a(438,String(e)))}function ad(e){var i=null,s=Se.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=Se.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=fc(),Se.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),u=0;u<e;u++)s[u]=G;return i.index++,s}function Ja(e,i){return typeof i=="function"?i(e):i}function dc(e){var i=Dn();return sd(i,en,e)}function sd(e,i,s){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var L=b=null,V=null,rt=i,mt=!1;do{var gt=rt.lane&-536870913;if(gt!==rt.lane?(we&gt)===gt:(Qa&gt)===gt){var lt=rt.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),gt===po&&(mt=!0);else if((Qa&lt)===lt){rt=rt.next,lt===po&&(mt=!0);continue}else gt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},V===null?(L=V=gt,b=m):V=V.next=gt,Se.lanes|=lt,Ps|=lt;gt=rt.action,Cr&&s(m,gt),m=rt.hasEagerState?rt.eagerState:s(m,gt)}else lt={lane:gt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},V===null?(L=V=lt,b=m):V=V.next=lt,Se.lanes|=gt,Ps|=gt;rt=rt.next}while(rt!==null&&rt!==i);if(V===null?b=m:V.next=L,!Li(m,e.memoizedState)&&(Pn=!0,mt&&(s=mo,s!==null)))throw s;e.memoizedState=m,e.baseState=b,e.baseQueue=V,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function rd(e){var i=Dn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var u=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do m=e(m,b.action),b=b.next;while(b!==h);Li(m,i.memoizedState)||(Pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function lg(e,i,s){var u=Se,h=Dn(),m=Ue;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!Li((en||h).memoizedState,s);if(b&&(h.memoizedState=s,Pn=!0),h=h.queue,ud(fg.bind(null,u,h,e),[e]),h.getSnapshot!==i||b||On!==null&&On.memoizedState.tag&1){if(u.flags|=2048,yo(9,{destroy:void 0},cg.bind(null,u,h,s,i),null),ln===null)throw Error(a(349));m||(Qa&127)!==0||ug(u,i,s)}return s}function ug(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Se.updateQueue,i===null?(i=fc(),Se.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function cg(e,i,s,u){i.value=s,i.getSnapshot=u,hg(i)&&dg(e)}function fg(e,i,s){return s(function(){hg(i)&&dg(e)})}function hg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Li(e,s)}catch{return!0}}function dg(e){var i=Sr(e,2);i!==null&&xi(i,e,2)}function od(e){var i=ci();if(typeof e=="function"){var s=e;if(e=s(),Cr){Bt(!0);try{s()}finally{Bt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:e},i}function pg(e,i,s,u){return e.baseState=s,sd(e,en,typeof u=="function"?u:Ja)}function Q1(e,i,s,u,h){if(_c(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};I.T!==null?s(!0):m.isTransition=!1,u(m),s=i.pending,s===null?(m.next=i.pending=m,mg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function mg(e,i){var s=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=I.T,b={};I.T=b;try{var L=s(h,u),V=I.S;V!==null&&V(b,L),_g(e,i,L)}catch(rt){ld(e,i,rt)}finally{m!==null&&b.types!==null&&(m.types=b.types),I.T=m}}else try{m=s(h,u),_g(e,i,m)}catch(rt){ld(e,i,rt)}}function _g(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){gg(e,i,u)},function(u){return ld(e,i,u)}):gg(e,i,s)}function gg(e,i,s){i.status="fulfilled",i.value=s,vg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,mg(e,s)))}function ld(e,i,s){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,vg(i),i=i.next;while(i!==u)}e.action=null}function vg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function xg(e,i){return i}function Sg(e,i){if(Ue){var s=ln.formState;if(s!==null){t:{var u=Se;if(Ue){if(mn){e:{for(var h=mn,m=na;h.nodeType!==8;){if(!m){h=null;break e}if(h=aa(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){mn=aa(h.nextSibling),u=h.data==="F!";break t}}As(u)}u=!1}u&&(i=s[0])}}return s=ci(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:i},s.queue=u,s=Fg.bind(null,Se,u),u.dispatch=s,u=od(!1),m=pd.bind(null,Se,!1,u.queue),u=ci(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,s=Q1.bind(null,Se,h,m,s),h.dispatch=s,u.memoizedState=e,[i,s,!1]}function yg(e){var i=Dn();return Mg(i,en,e)}function Mg(e,i,s){if(i=sd(e,i,xg)[0],e=dc(Ja)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Il(i)}catch(b){throw b===_o?ic:b}else u=i;i=Dn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(Se.flags|=2048,yo(9,{destroy:void 0},J1.bind(null,h,s),null)),[u,m,e]}function J1(e,i){e.action=i}function Tg(e){var i=Dn(),s=en;if(s!==null)return Mg(i,s,e);Dn(),i=i.memoizedState,s=Dn();var u=s.queue.dispatch;return s.memoizedState=e,[i,u,!1]}function yo(e,i,s,u){return e={tag:e,create:s,deps:u,inst:i,next:null},i=Se.updateQueue,i===null&&(i=fc(),Se.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(u=s.next,s.next=e,e.next=u,i.lastEffect=e),e}function bg(){return Dn().memoizedState}function pc(e,i,s,u){var h=ci();Se.flags|=e,h.memoizedState=yo(1|i,{destroy:void 0},s,u===void 0?null:u)}function mc(e,i,s,u){var h=Dn();u=u===void 0?null:u;var m=h.memoizedState.inst;en!==null&&u!==null&&$h(u,en.memoizedState.deps)?h.memoizedState=yo(i,m,s,u):(Se.flags|=e,h.memoizedState=yo(1|i,m,s,u))}function Eg(e,i){pc(8390656,8,e,i)}function ud(e,i){mc(2048,8,e,i)}function $1(e){Se.flags|=4;var i=Se.updateQueue;if(i===null)i=fc(),Se.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function Ag(e){var i=Dn().memoizedState;return $1({ref:i,nextImpl:e}),function(){if((We&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Rg(e,i){return mc(4,2,e,i)}function wg(e,i){return mc(4,4,e,i)}function Cg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Dg(e,i,s){s=s!=null?s.concat([e]):null,mc(4,4,Cg.bind(null,i,e),s)}function cd(){}function Ug(e,i){var s=Dn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&$h(i,u[1])?u[0]:(s.memoizedState=[e,i],e)}function Lg(e,i){var s=Dn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&$h(i,u[1]))return u[0];if(u=e(),Cr){Bt(!0);try{e()}finally{Bt(!1)}}return s.memoizedState=[u,i],u}function fd(e,i,s){return s===void 0||(Qa&1073741824)!==0&&(we&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=Nv(),Se.lanes|=e,Ps|=e,s)}function Ng(e,i,s,u){return Li(s,i)?s:vo.current!==null?(e=fd(e,s,u),Li(e,i)||(Pn=!0),e):(Qa&42)===0||(Qa&1073741824)!==0&&(we&261930)===0?(Pn=!0,e.memoizedState=s):(e=Nv(),Se.lanes|=e,Ps|=e,i)}function Og(e,i,s,u,h){var m=F.p;F.p=m!==0&&8>m?m:8;var b=I.T,L={};I.T=L,pd(e,!1,i,s);try{var V=h(),rt=I.S;if(rt!==null&&rt(L,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=j1(V,u);Bl(e,i,mt,Bi(e))}else Bl(e,i,u,Bi(e))}catch(gt){Bl(e,i,{then:function(){},status:"rejected",reason:gt},Bi())}finally{F.p=m,b!==null&&L.types!==null&&(b.types=L.types),I.T=b}}function tT(){}function hd(e,i,s,u){if(e.tag!==5)throw Error(a(476));var h=Pg(e).queue;Og(e,h,i,it,s===null?tT:function(){return zg(e),s(u)})}function Pg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:it},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function zg(e){var i=Pg(e);i.next===null&&(i=e.alternate.memoizedState),Bl(e,i.next.queue,{},Bi())}function dd(){return Zn(eu)}function Ig(){return Dn().memoizedState}function Bg(){return Dn().memoizedState}function eT(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Bi();e=Cs(s);var u=Ds(i,e,s);u!==null&&(xi(u,i,s),Nl(u,i,s)),i={cache:Vh()},e.payload=i;return}i=i.return}}function nT(e,i,s){var u=Bi();s={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_c(e)?Hg(i,s):(s=Uh(e,i,s,u),s!==null&&(xi(s,e,u),Gg(s,i,u)))}function Fg(e,i,s){var u=Bi();Bl(e,i,s,u)}function Bl(e,i,s,u){var h={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(_c(e))Hg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,L=m(b,s);if(h.hasEagerState=!0,h.eagerState=L,Li(L,b))return Ku(e,i,h,0),ln===null&&Zu(),!1}catch{}finally{}if(s=Uh(e,i,h,u),s!==null)return xi(s,e,u),Gg(s,i,u),!0}return!1}function pd(e,i,s,u){if(u={lane:2,revertLane:qd(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},_c(e)){if(i)throw Error(a(479))}else i=Uh(e,s,u,2),i!==null&&xi(i,e,2)}function _c(e){var i=e.alternate;return e===Se||i!==null&&i===Se}function Hg(e,i){xo=uc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Gg(e,i,s){if((s&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,di(e,s)}}var Fl={readContext:Zn,use:hc,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En};Fl.useEffectEvent=En;var Vg={readContext:Zn,use:hc,useCallback:function(e,i){return ci().memoizedState=[e,i===void 0?null:i],e},useContext:Zn,useEffect:Eg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,pc(4194308,4,Cg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return pc(4194308,4,e,i)},useInsertionEffect:function(e,i){pc(4,2,e,i)},useMemo:function(e,i){var s=ci();i=i===void 0?null:i;var u=e();if(Cr){Bt(!0);try{e()}finally{Bt(!1)}}return s.memoizedState=[u,i],u},useReducer:function(e,i,s){var u=ci();if(s!==void 0){var h=s(i);if(Cr){Bt(!0);try{s(i)}finally{Bt(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=nT.bind(null,Se,e),[u.memoizedState,e]},useRef:function(e){var i=ci();return e={current:e},i.memoizedState=e},useState:function(e){e=od(e);var i=e.queue,s=Fg.bind(null,Se,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:cd,useDeferredValue:function(e,i){var s=ci();return fd(s,e,i)},useTransition:function(){var e=od(!1);return e=Og.bind(null,Se,e.queue,!0,!1),ci().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var u=Se,h=ci();if(Ue){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),ln===null)throw Error(a(349));(we&127)!==0||ug(u,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,Eg(fg.bind(null,u,m,e),[e]),u.flags|=2048,yo(9,{destroy:void 0},cg.bind(null,u,m,s,i),null),s},useId:function(){var e=ci(),i=ln.identifierPrefix;if(Ue){var s=Ra,u=Aa;s=(u&~(1<<32-Nt(u)-1)).toString(32)+s,i="_"+i+"R_"+s,s=cc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Z1++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:dd,useFormState:Sg,useActionState:Sg,useOptimistic:function(e){var i=ci();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=pd.bind(null,Se,!0,s),s.dispatch=i,[e,i]},useMemoCache:ad,useCacheRefresh:function(){return ci().memoizedState=eT.bind(null,Se)},useEffectEvent:function(e){var i=ci(),s={impl:e};return i.memoizedState=s,function(){if((We&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},md={readContext:Zn,use:hc,useCallback:Ug,useContext:Zn,useEffect:ud,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:wg,useMemo:Lg,useReducer:dc,useRef:bg,useState:function(){return dc(Ja)},useDebugValue:cd,useDeferredValue:function(e,i){var s=Dn();return Ng(s,en.memoizedState,e,i)},useTransition:function(){var e=dc(Ja)[0],i=Dn().memoizedState;return[typeof e=="boolean"?e:Il(e),i]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:dd,useFormState:yg,useActionState:yg,useOptimistic:function(e,i){var s=Dn();return pg(s,en,e,i)},useMemoCache:ad,useCacheRefresh:Bg};md.useEffectEvent=Ag;var kg={readContext:Zn,use:hc,useCallback:Ug,useContext:Zn,useEffect:ud,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:wg,useMemo:Lg,useReducer:rd,useRef:bg,useState:function(){return rd(Ja)},useDebugValue:cd,useDeferredValue:function(e,i){var s=Dn();return en===null?fd(s,e,i):Ng(s,en.memoizedState,e,i)},useTransition:function(){var e=rd(Ja)[0],i=Dn().memoizedState;return[typeof e=="boolean"?e:Il(e),i]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:dd,useFormState:Tg,useActionState:Tg,useOptimistic:function(e,i){var s=Dn();return en!==null?pg(s,en,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:ad,useCacheRefresh:Bg};kg.useEffectEvent=Ag;function _d(e,i,s,u){i=e.memoizedState,s=s(u,i),s=s==null?i:v({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var gd={enqueueSetState:function(e,i,s){e=e._reactInternals;var u=Bi(),h=Cs(u);h.payload=i,s!=null&&(h.callback=s),i=Ds(e,h,u),i!==null&&(xi(i,e,u),Nl(i,e,u))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var u=Bi(),h=Cs(u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Ds(e,h,u),i!==null&&(xi(i,e,u),Nl(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Bi(),u=Cs(s);u.tag=2,i!=null&&(u.callback=i),i=Ds(e,u,s),i!==null&&(xi(i,e,s),Nl(i,e,s))}};function Xg(e,i,s,u,h,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,b):i.prototype&&i.prototype.isPureReactComponent?!El(s,u)||!El(h,m):!0}function Wg(e,i,s,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==e&&gd.enqueueReplaceState(i,i.state,null)}function Dr(e,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(e=e.defaultProps){s===i&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function qg(e){ju(e)}function Yg(e){console.error(e)}function jg(e){ju(e)}function gc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Zg(e,i,s){try{var u=e.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function vd(e,i,s){return s=Cs(s),s.tag=3,s.payload={element:null},s.callback=function(){gc(e,i)},s}function Kg(e){return e=Cs(e),e.tag=3,e}function Qg(e,i,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){Zg(i,s,u)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Zg(i,s,u),typeof h!="function"&&(zs===null?zs=new Set([this]):zs.add(this));var L=u.stack;this.componentDidCatch(u.value,{componentStack:L!==null?L:""})})}function iT(e,i,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&ho(i,s,h,!0),s=Oi.current,s!==null){switch(s.tag){case 31:case 13:return ia===null?Cc():s.alternate===null&&An===0&&(An=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===ac?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),kd(e,u,h)),!1;case 22:return s.flags|=65536,u===ac?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),kd(e,u,h)),!1}throw Error(a(435,s.tag))}return kd(e,u,h),Cc(),!1}if(Ue)return i=Oi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==Ih&&(e=Error(a(422),{cause:u}),wl($i(e,s)))):(u!==Ih&&(i=Error(a(423),{cause:u}),wl($i(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=$i(u,s),h=vd(e.stateNode,u,h),jh(e,h),An!==4&&(An=2)),!1;var m=Error(a(520),{cause:u});if(m=$i(m,s),Yl===null?Yl=[m]:Yl.push(m),An!==4&&(An=2),i===null)return!0;u=$i(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=vd(s.stateNode,u,e),jh(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zs===null||!zs.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Kg(h),Qg(h,e,s,u),jh(s,h),!1}s=s.return}while(s!==null);return!1}var xd=Error(a(461)),Pn=!1;function Kn(e,i,s,u){i.child=e===null?eg(i,null,s,u):wr(i,e.child,s,u)}function Jg(e,i,s,u,h){s=s.render;var m=i.ref;if("ref"in u){var b={};for(var L in u)L!=="ref"&&(b[L]=u[L])}else b=u;return br(i),u=td(e,i,s,b,m,h),L=ed(),e!==null&&!Pn?(nd(e,i,h),$a(e,i,h)):(Ue&&L&&Ph(i),i.flags|=1,Kn(e,i,u,h),i.child)}function $g(e,i,s,u,h){if(e===null){var m=s.type;return typeof m=="function"&&!Lh(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,tv(e,i,m,u,h)):(e=Ju(s.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Rd(e,h)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:El,s(b,u)&&e.ref===i.ref)return $a(e,i,h)}return i.flags|=1,e=Ya(m,u),e.ref=i.ref,e.return=i,i.child=e}function tv(e,i,s,u,h){if(e!==null){var m=e.memoizedProps;if(El(m,u)&&e.ref===i.ref)if(Pn=!1,i.pendingProps=u=m,Rd(e,h))(e.flags&131072)!==0&&(Pn=!0);else return i.lanes=e.lanes,$a(e,i,h)}return Sd(e,i,s,u,h)}function ev(e,i,s,u){var h=u.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(u=i.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return nv(e,i,m,s,u)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&nc(i,m!==null?m.cachePool:null),m!==null?ag(i,m):Kh(),sg(i);else return u=i.lanes=536870912,nv(e,i,m!==null?m.baseLanes|s:s,s,u)}else m!==null?(nc(i,m.cachePool),ag(i,m),Ls(),i.memoizedState=null):(e!==null&&nc(i,null),Kh(),Ls());return Kn(e,i,h,s),i.child}function Hl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function nv(e,i,s,u,h){var m=Xh();return m=m===null?null:{parent:Nn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&nc(i,null),Kh(),sg(i),e!==null&&ho(e,i,u,!0),i.childLanes=h,null}function vc(e,i){return i=Sc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function iv(e,i,s){return wr(i,e.child,null,s),e=vc(i,i.pendingProps),e.flags|=2,Pi(i),i.memoizedState=null,e}function aT(e,i,s){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ue){if(u.mode==="hidden")return e=vc(i,u),i.lanes=536870912,Hl(null,e);if(Jh(i),(e=mn)?(e=mx(e,na),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:bs!==null?{id:Aa,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},s=H_(e),s.return=i,i.child=s,jn=i,mn=null)):e=null,e===null)throw As(i);return i.lanes=536870912,null}return vc(i,u)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(Jh(i),h)if(i.flags&256)i.flags&=-257,i=iv(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Pn||ho(e,i,s,!1),h=(s&e.childLanes)!==0,Pn||h){if(u=ln,u!==null&&(b=ui(u,s),b!==0&&b!==m.retryLane))throw m.retryLane=b,Sr(e,b),xi(u,e,b),xd;Cc(),i=iv(e,i,s)}else e=m.treeContext,mn=aa(b.nextSibling),jn=i,Ue=!0,Es=null,na=!1,e!==null&&k_(i,e),i=vc(i,u),i.flags|=4096;return i}return e=Ya(e.child,{mode:u.mode,children:u.children}),e.ref=i.ref,i.child=e,e.return=i,e}function xc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Sd(e,i,s,u,h){return br(i),s=td(e,i,s,u,void 0,h),u=ed(),e!==null&&!Pn?(nd(e,i,h),$a(e,i,h)):(Ue&&u&&Ph(i),i.flags|=1,Kn(e,i,s,h),i.child)}function av(e,i,s,u,h,m){return br(i),i.updateQueue=null,s=og(i,u,s,h),rg(e),u=ed(),e!==null&&!Pn?(nd(e,i,m),$a(e,i,m)):(Ue&&u&&Ph(i),i.flags|=1,Kn(e,i,s,m),i.child)}function sv(e,i,s,u,h){if(br(i),i.stateNode===null){var m=lo,b=s.contextType;typeof b=="object"&&b!==null&&(m=Zn(b)),m=new s(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=gd,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},qh(i),b=s.contextType,m.context=typeof b=="object"&&b!==null?Zn(b):lo,m.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(_d(i,s,b,u),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&gd.enqueueReplaceState(m,m.state,null),Pl(i,u,m,h),Ol(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var L=i.memoizedProps,V=Dr(s,L);m.props=V;var rt=m.context,mt=s.contextType;b=lo,typeof mt=="object"&&mt!==null&&(b=Zn(mt));var gt=s.getDerivedStateFromProps;mt=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L||rt!==b)&&Wg(i,m,u,b),ws=!1;var lt=i.memoizedState;m.state=lt,Pl(i,u,m,h),Ol(),rt=i.memoizedState,L||lt!==rt||ws?(typeof gt=="function"&&(_d(i,s,gt,u),rt=i.memoizedState),(V=ws||Xg(i,s,V,u,lt,rt,b))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=rt),m.props=u,m.state=rt,m.context=b,u=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,Yh(e,i),b=i.memoizedProps,mt=Dr(s,b),m.props=mt,gt=i.pendingProps,lt=m.context,rt=s.contextType,V=lo,typeof rt=="object"&&rt!==null&&(V=Zn(rt)),L=s.getDerivedStateFromProps,(rt=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==gt||lt!==V)&&Wg(i,m,u,V),ws=!1,lt=i.memoizedState,m.state=lt,Pl(i,u,m,h),Ol();var ut=i.memoizedState;b!==gt||lt!==ut||ws||e!==null&&e.dependencies!==null&&tc(e.dependencies)?(typeof L=="function"&&(_d(i,s,L,u),ut=i.memoizedState),(mt=ws||Xg(i,s,mt,u,lt,ut,V)||e!==null&&e.dependencies!==null&&tc(e.dependencies))?(rt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ut,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ut,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ut),m.props=u,m.state=ut,m.context=V,u=mt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,xc(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=wr(i,e.child,null,h),i.child=wr(i,null,s,h)):Kn(e,i,s,h),i.memoizedState=m.state,e=i.child):e=$a(e,i,h),e}function rv(e,i,s,u){return Mr(),i.flags|=256,Kn(e,i,s,u),i.child}var yd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Md(e){return{baseLanes:e,cachePool:Z_()}}function Td(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=Ii),e}function ov(e,i,s){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(h?Us(i):Ls(),(e=mn)?(e=mx(e,na),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:bs!==null?{id:Aa,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},s=H_(e),s.return=i,i.child=s,jn=i,mn=null)):e=null,e===null)throw As(i);return sp(e)?i.lanes=32:i.lanes=536870912,null}var L=u.children;return u=u.fallback,h?(Ls(),h=i.mode,L=Sc({mode:"hidden",children:L},h),u=yr(u,h,s,null),L.return=i,u.return=i,L.sibling=u,i.child=L,u=i.child,u.memoizedState=Md(s),u.childLanes=Td(e,b,s),i.memoizedState=yd,Hl(null,u)):(Us(i),bd(i,L))}var V=e.memoizedState;if(V!==null&&(L=V.dehydrated,L!==null)){if(m)i.flags&256?(Us(i),i.flags&=-257,i=Ed(e,i,s)):i.memoizedState!==null?(Ls(),i.child=e.child,i.flags|=128,i=null):(Ls(),L=u.fallback,h=i.mode,u=Sc({mode:"visible",children:u.children},h),L=yr(L,h,s,null),L.flags|=2,u.return=i,L.return=i,u.sibling=L,i.child=u,wr(i,e.child,null,s),u=i.child,u.memoizedState=Md(s),u.childLanes=Td(e,b,s),i.memoizedState=yd,i=Hl(null,u));else if(Us(i),sp(L)){if(b=L.nextSibling&&L.nextSibling.dataset,b)var rt=b.dgst;b=rt,u=Error(a(419)),u.stack="",u.digest=b,wl({value:u,source:null,stack:null}),i=Ed(e,i,s)}else if(Pn||ho(e,i,s,!1),b=(s&e.childLanes)!==0,Pn||b){if(b=ln,b!==null&&(u=ui(b,s),u!==0&&u!==V.retryLane))throw V.retryLane=u,Sr(e,u),xi(b,e,u),xd;ap(L)||Cc(),i=Ed(e,i,s)}else ap(L)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,mn=aa(L.nextSibling),jn=i,Ue=!0,Es=null,na=!1,e!==null&&k_(i,e),i=bd(i,u.children),i.flags|=4096);return i}return h?(Ls(),L=u.fallback,h=i.mode,V=e.child,rt=V.sibling,u=Ya(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,rt!==null?L=Ya(rt,L):(L=yr(L,h,s,null),L.flags|=2),L.return=i,u.return=i,u.sibling=L,i.child=u,Hl(null,u),u=i.child,L=e.child.memoizedState,L===null?L=Md(s):(h=L.cachePool,h!==null?(V=Nn._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=Z_(),L={baseLanes:L.baseLanes|s,cachePool:h}),u.memoizedState=L,u.childLanes=Td(e,b,s),i.memoizedState=yd,Hl(e.child,u)):(Us(i),s=e.child,e=s.sibling,s=Ya(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=s,i.memoizedState=null,s)}function bd(e,i){return i=Sc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Sc(e,i){return e=Ni(22,e,null,i),e.lanes=0,e}function Ed(e,i,s){return wr(i,e.child,null,s),e=bd(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function lv(e,i,s){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),Hh(e.return,i,s)}function Ad(e,i,s,u,h,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=u,b.tail=s,b.tailMode=h,b.treeForkCount=m)}function uv(e,i,s){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var b=Cn.current,L=(b&2)!==0;if(L?(b=b&1|2,i.flags|=128):b&=1,vt(Cn,b),Kn(e,i,u,s),u=Ue?Rl:0,!L&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lv(e,s,i);else if(e.tag===19)lv(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&lc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Ad(i,!1,h,s,m,u);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&lc(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}Ad(i,!0,s,null,m,u);break;case"together":Ad(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function $a(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ps|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(ho(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ya(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ya(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Rd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&tc(e)))}function sT(e,i,s){switch(i.tag){case 3:Tt(i,i.stateNode.containerInfo),Rs(i,Nn,e.memoizedState.cache),Mr();break;case 27:case 5:ie(i);break;case 4:Tt(i,i.stateNode.containerInfo);break;case 10:Rs(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Jh(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(Us(i),i.flags|=128,null):(s&i.child.childLanes)!==0?ov(e,i,s):(Us(i),e=$a(e,i,s),e!==null?e.sibling:null);Us(i);break;case 19:var h=(e.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(ho(e,i,s,!1),u=(s&i.childLanes)!==0),h){if(u)return uv(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),vt(Cn,Cn.current),u)break;return null;case 22:return i.lanes=0,ev(e,i,s,i.pendingProps);case 24:Rs(i,Nn,e.memoizedState.cache)}return $a(e,i,s)}function cv(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Pn=!0;else{if(!Rd(e,s)&&(i.flags&128)===0)return Pn=!1,sT(e,i,s);Pn=(e.flags&131072)!==0}else Pn=!1,Ue&&(i.flags&1048576)!==0&&V_(i,Rl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var u=i.pendingProps;if(e=Ar(i.elementType),i.type=e,typeof e=="function")Lh(e)?(u=Dr(e,u),i.tag=1,i=sv(null,i,e,u,s)):(i.tag=0,i=Sd(null,i,e,u,s));else{if(e!=null){var h=e.$$typeof;if(h===w){i.tag=11,i=Jg(null,i,e,u,s);break t}else if(h===O){i.tag=14,i=$g(null,i,e,u,s);break t}}throw i=ot(e)||e,Error(a(306,i,""))}}return i;case 0:return Sd(e,i,i.type,i.pendingProps,s);case 1:return u=i.type,h=Dr(u,i.pendingProps),sv(e,i,u,h,s);case 3:t:{if(Tt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,Yh(e,i),Pl(i,u,null,s);var b=i.memoizedState;if(u=b.cache,Rs(i,Nn,u),u!==m.cache&&Gh(i,[Nn],s,!0),Ol(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=rv(e,i,u,s);break t}else if(u!==h){h=$i(Error(a(424)),i),wl(h),i=rv(e,i,u,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(mn=aa(e.firstChild),jn=i,Ue=!0,Es=null,na=!0,s=eg(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Mr(),u===h){i=$a(e,i,s);break t}Kn(e,i,u,s)}i=i.child}return i;case 26:return xc(e,i),e===null?(s=yx(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,e=i.pendingProps,u=zc(at.current).createElement(s),u[rn]=i,u[yn]=e,Qn(u,s,e),ne(u),i.stateNode=u):i.memoizedState=yx(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ie(i),e===null&&Ue&&(u=i.stateNode=vx(i.type,i.pendingProps,at.current),jn=i,na=!0,h=mn,Hs(i.type)?(rp=h,mn=aa(u.firstChild)):mn=h),Kn(e,i,i.pendingProps.children,s),xc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((h=u=mn)&&(u=PT(u,i.type,i.pendingProps,na),u!==null?(i.stateNode=u,jn=i,mn=aa(u.firstChild),na=!1,h=!0):h=!1),h||As(i)),ie(i),h=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,u=m.children,ep(h,m)?u=null:b!==null&&ep(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=td(e,i,K1,null,null,s),eu._currentValue=h),xc(e,i),Kn(e,i,u,s),i.child;case 6:return e===null&&Ue&&((e=s=mn)&&(s=zT(s,i.pendingProps,na),s!==null?(i.stateNode=s,jn=i,mn=null,e=!0):e=!1),e||As(i)),null;case 13:return ov(e,i,s);case 4:return Tt(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=wr(i,null,u,s):Kn(e,i,u,s),i.child;case 11:return Jg(e,i,i.type,i.pendingProps,s);case 7:return Kn(e,i,i.pendingProps,s),i.child;case 8:return Kn(e,i,i.pendingProps.children,s),i.child;case 12:return Kn(e,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,Rs(i,i.type,u.value),Kn(e,i,u.children,s),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,br(i),h=Zn(h),u=u(h),i.flags|=1,Kn(e,i,u,s),i.child;case 14:return $g(e,i,i.type,i.pendingProps,s);case 15:return tv(e,i,i.type,i.pendingProps,s);case 19:return uv(e,i,s);case 31:return aT(e,i,s);case 22:return ev(e,i,s,i.pendingProps);case 24:return br(i),u=Zn(Nn),e===null?(h=Xh(),h===null&&(h=ln,m=Vh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:u,cache:h},qh(i),Rs(i,Nn,h)):((e.lanes&s)!==0&&(Yh(e,i),Pl(i,null,null,s),Ol()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Rs(i,Nn,u)):(u=m.cache,Rs(i,Nn,u),u!==h.cache&&Gh(i,[Nn],s,!0))),Kn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ts(e){e.flags|=4}function wd(e,i,s,u,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Iv())e.flags|=8192;else throw Rr=ac,Wh}else e.flags&=-16777217}function fv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ax(i))if(Iv())e.flags|=8192;else throw Rr=ac,Wh}function yc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,Eo|=i)}function Gl(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function _n(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,u=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=s,i}function rT(e,i,s){var u=i.pendingProps;switch(zh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return _n(i),null;case 3:return s=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Ka(Nn),kt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(fo(i)?ts(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bh())),_n(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(ts(i),m!==null?(_n(i),fv(i,m)):(_n(i),wd(i,h,null,u,s))):m?m!==e.memoizedState?(ts(i),_n(i),fv(i,m)):(_n(i),i.flags&=-16777217):(e=e.memoizedProps,e!==u&&ts(i),_n(i),wd(i,h,e,u,s)),null;case 27:if(te(i),s=at.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&ts(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return _n(i),null}e=At.current,fo(i)?X_(i):(e=vx(h,u,s),i.stateNode=e,ts(i))}return _n(i),null;case 5:if(te(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&ts(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return _n(i),null}if(m=At.current,fo(i))X_(i);else{var b=zc(at.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?b.createElement("select",{is:u.is}):b.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?b.createElement(h,{is:u.is}):b.createElement(h)}}m[rn]=i,m[yn]=u;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(Qn(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&ts(i)}}return _n(i),wd(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&ts(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=at.current,fo(i)){if(e=i.stateNode,s=i.memoizedProps,u=null,h=jn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[rn]=i,e=!!(e.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||ox(e.nodeValue,s)),e||As(i,!0)}else e=zc(e).createTextNode(u),e[rn]=i,i.stateNode=e}return _n(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(u=fo(i),s!==null){if(e===null){if(!u)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[rn]=i}else Mr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),e=!1}else s=Bh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(Pi(i),i):(Pi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return _n(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=fo(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[rn]=i}else Mr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),h=!1}else h=Bh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Pi(i),i):(Pi(i),null)}return Pi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=u!==null,e=e!==null&&e.memoizedState!==null,s&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),yc(i,i.updateQueue),_n(i),null);case 4:return kt(),e===null&&Kd(i.stateNode.containerInfo),_n(i),null;case 10:return Ka(i.type),_n(i),null;case 19:if(Q(Cn),u=i.memoizedState,u===null)return _n(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)Gl(u,!1);else{if(An!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=lc(e),m!==null){for(i.flags|=128,Gl(u,!1),e=m.updateQueue,i.updateQueue=e,yc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)F_(s,e),s=s.sibling;return vt(Cn,Cn.current&1|2),Ue&&ja(i,u.treeForkCount),i.child}e=e.sibling}u.tail!==null&&Ct()>Ac&&(i.flags|=128,h=!0,Gl(u,!1),i.lanes=4194304)}else{if(!h)if(e=lc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,yc(i,e),Gl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Ue)return _n(i),null}else 2*Ct()-u.renderingStartTime>Ac&&s!==536870912&&(i.flags|=128,h=!0,Gl(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Ct(),e.sibling=null,s=Cn.current,vt(Cn,h?s&1|2:s&1),Ue&&ja(i,u.treeForkCount),e):(_n(i),null);case 22:case 23:return Pi(i),Qh(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),s=i.updateQueue,s!==null&&yc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),e!==null&&Q(Er),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ka(Nn),_n(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function oT(e,i){switch(zh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ka(Nn),kt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return te(i),null;case 31:if(i.memoizedState!==null){if(Pi(i),i.alternate===null)throw Error(a(340));Mr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Pi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Mr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Q(Cn),null;case 4:return kt(),null;case 10:return Ka(i.type),null;case 22:case 23:return Pi(i),Qh(),e!==null&&Q(Er),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ka(Nn),null;case 25:return null;default:return null}}function hv(e,i){switch(zh(i),i.tag){case 3:Ka(Nn),kt();break;case 26:case 27:case 5:te(i);break;case 4:kt();break;case 31:i.memoizedState!==null&&Pi(i);break;case 13:Pi(i);break;case 19:Q(Cn);break;case 10:Ka(i.type);break;case 22:case 23:Pi(i),Qh(),e!==null&&Q(Er);break;case 24:Ka(Nn)}}function Vl(e,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&e)===e){u=void 0;var m=s.create,b=s.inst;u=m(),b.destroy=u}s=s.next}while(s!==h)}}catch(L){Je(i,i.return,L)}}function Ns(e,i,s){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var b=u.inst,L=b.destroy;if(L!==void 0){b.destroy=void 0,h=i;var V=s,rt=L;try{rt()}catch(mt){Je(h,V,mt)}}}u=u.next}while(u!==m)}}catch(mt){Je(i,i.return,mt)}}function dv(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{ig(i,s)}catch(u){Je(e,e.return,u)}}}function pv(e,i,s){s.props=Dr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(u){Je(e,i,u)}}function kl(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(h){Je(e,i,h)}}function wa(e,i){var s=e.ref,u=e.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){Je(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Je(e,i,h)}else s.current=null}function mv(e){var i=e.type,s=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){Je(e,e.return,h)}}function Cd(e,i,s){try{var u=e.stateNode;CT(u,e.type,s,i),u[yn]=i}catch(h){Je(e,e.return,h)}}function _v(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Hs(e.type)||e.tag===4}function Dd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_v(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Hs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ud(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Wa));else if(u!==4&&(u===27&&Hs(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Ud(e,i,s),e=e.sibling;e!==null;)Ud(e,i,s),e=e.sibling}function Mc(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(u!==4&&(u===27&&Hs(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Mc(e,i,s),e=e.sibling;e!==null;)Mc(e,i,s),e=e.sibling}function gv(e){var i=e.stateNode,s=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Qn(i,u,s),i[rn]=e,i[yn]=s}catch(m){Je(e,e.return,m)}}var es=!1,zn=!1,Ld=!1,vv=typeof WeakSet=="function"?WeakSet:Set,Wn=null;function lT(e,i){if(e=e.containerInfo,$d=kc,e=D_(e),Eh(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var b=0,L=-1,V=-1,rt=0,mt=0,gt=e,lt=null;e:for(;;){for(var ut;gt!==s||h!==0&&gt.nodeType!==3||(L=b+h),gt!==m||u!==0&&gt.nodeType!==3||(V=b+u),gt.nodeType===3&&(b+=gt.nodeValue.length),(ut=gt.firstChild)!==null;)lt=gt,gt=ut;for(;;){if(gt===e)break e;if(lt===s&&++rt===h&&(L=b),lt===m&&++mt===u&&(V=b),(ut=gt.nextSibling)!==null)break;gt=lt,lt=gt.parentNode}gt=ut}s=L===-1||V===-1?null:{start:L,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(tp={focusedElem:e,selectionRange:s},kc=!1,Wn=i;Wn!==null;)if(i=Wn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Wn=e;else for(;Wn!==null;){switch(i=Wn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var Kt=Dr(s.type,h);e=u.getSnapshotBeforeUpdate(Kt,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(le){Je(s,s.return,le)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)ip(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ip(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Wn=e;break}Wn=i.return}}function xv(e,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:is(e,s),u&4&&Vl(5,s);break;case 1:if(is(e,s),u&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(b){Je(s,s.return,b)}else{var h=Dr(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Je(s,s.return,b)}}u&64&&dv(s),u&512&&kl(s,s.return);break;case 3:if(is(e,s),u&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ig(e,i)}catch(b){Je(s,s.return,b)}}break;case 27:i===null&&u&4&&gv(s);case 26:case 5:is(e,s),i===null&&u&4&&mv(s),u&512&&kl(s,s.return);break;case 12:is(e,s);break;case 31:is(e,s),u&4&&Mv(e,s);break;case 13:is(e,s),u&4&&Tv(e,s),u&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=gT.bind(null,s),IT(e,s))));break;case 22:if(u=s.memoizedState!==null||es,!u){i=i!==null&&i.memoizedState!==null||zn,h=es;var m=zn;es=u,(zn=i)&&!m?as(e,s,(s.subtreeFlags&8772)!==0):is(e,s),es=h,zn=m}break;case 30:break;default:is(e,s)}}function Sv(e){var i=e.alternate;i!==null&&(e.alternate=null,Sv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Qt(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xn=null,mi=!1;function ns(e,i,s){for(s=s.child;s!==null;)yv(e,i,s),s=s.sibling}function yv(e,i,s){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ct,s)}catch{}switch(s.tag){case 26:zn||wa(s,i),ns(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:zn||wa(s,i);var u=xn,h=mi;Hs(s.type)&&(xn=s.stateNode,mi=!1),ns(e,i,s),Jl(s.stateNode),xn=u,mi=h;break;case 5:zn||wa(s,i);case 6:if(u=xn,h=mi,xn=null,ns(e,i,s),xn=u,mi=h,xn!==null)if(mi)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(s.stateNode)}catch(m){Je(s,i,m)}else try{xn.removeChild(s.stateNode)}catch(m){Je(s,i,m)}break;case 18:xn!==null&&(mi?(e=xn,dx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),No(e)):dx(xn,s.stateNode));break;case 4:u=xn,h=mi,xn=s.stateNode.containerInfo,mi=!0,ns(e,i,s),xn=u,mi=h;break;case 0:case 11:case 14:case 15:Ns(2,s,i),zn||Ns(4,s,i),ns(e,i,s);break;case 1:zn||(wa(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&pv(s,i,u)),ns(e,i,s);break;case 21:ns(e,i,s);break;case 22:zn=(u=zn)||s.memoizedState!==null,ns(e,i,s),zn=u;break;default:ns(e,i,s)}}function Mv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{No(e)}catch(s){Je(i,i.return,s)}}}function Tv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(s){Je(i,i.return,s)}}function uT(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new vv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new vv),i;default:throw Error(a(435,e.tag))}}function Tc(e,i){var s=uT(e);i.forEach(function(u){if(!s.has(u)){s.add(u);var h=vT.bind(null,e,u);u.then(h,h)}})}function _i(e,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],m=e,b=i,L=b;t:for(;L!==null;){switch(L.tag){case 27:if(Hs(L.type)){xn=L.stateNode,mi=!1;break t}break;case 5:xn=L.stateNode,mi=!1;break t;case 3:case 4:xn=L.stateNode.containerInfo,mi=!0;break t}L=L.return}if(xn===null)throw Error(a(160));yv(m,b,h),xn=null,mi=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)bv(i,e),i=i.sibling}var va=null;function bv(e,i){var s=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_i(i,e),gi(e),u&4&&(Ns(3,e,e.return),Vl(3,e),Ns(5,e,e.return));break;case 1:_i(i,e),gi(e),u&512&&(zn||s===null||wa(s,s.return)),u&64&&es&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=va;if(_i(i,e),gi(e),u&512&&(zn||s===null||wa(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=e.memoizedState,s===null)if(u===null)if(e.stateNode===null){t:{u=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Lt]||m[rn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Qn(m,u,s),m[rn]=e,ne(m),u=m;break t;case"link":var b=bx("link","href",h).get(u+(s.href||""));if(b){for(var L=0;L<b.length;L++)if(m=b[L],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(L,1);break e}}m=h.createElement(u),Qn(m,u,s),h.head.appendChild(m);break;case"meta":if(b=bx("meta","content",h).get(u+(s.content||""))){for(L=0;L<b.length;L++)if(m=b[L],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(L,1);break e}}m=h.createElement(u),Qn(m,u,s),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[rn]=e,ne(m),u=m}e.stateNode=u}else Ex(h,e.type,e.stateNode);else e.stateNode=Tx(h,u,e.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?Ex(h,e.type,e.stateNode):Tx(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&Cd(e,e.memoizedProps,s.memoizedProps)}break;case 27:_i(i,e),gi(e),u&512&&(zn||s===null||wa(s,s.return)),s!==null&&u&4&&Cd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(_i(i,e),gi(e),u&512&&(zn||s===null||wa(s,s.return)),e.flags&32){h=e.stateNode;try{Ui(h,"")}catch(Kt){Je(e,e.return,Kt)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,Cd(e,h,s!==null?s.memoizedProps:h)),u&1024&&(Ld=!0);break;case 6:if(_i(i,e),gi(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,s=e.stateNode;try{s.nodeValue=u}catch(Kt){Je(e,e.return,Kt)}}break;case 3:if(Fc=null,h=va,va=Ic(i.containerInfo),_i(i,e),va=h,gi(e),u&4&&s!==null&&s.memoizedState.isDehydrated)try{No(i.containerInfo)}catch(Kt){Je(e,e.return,Kt)}Ld&&(Ld=!1,Ev(e));break;case 4:u=va,va=Ic(e.stateNode.containerInfo),_i(i,e),gi(e),va=u;break;case 12:_i(i,e),gi(e);break;case 31:_i(i,e),gi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Tc(e,u)));break;case 13:_i(i,e),gi(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ec=Ct()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Tc(e,u)));break;case 22:h=e.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,rt=es,mt=zn;if(es=rt||h,zn=mt||V,_i(i,e),zn=mt,es=rt,gi(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||V||es||zn||Ur(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(m=V.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{L=V.stateNode;var gt=V.memoizedProps.style,lt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;L.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Kt){Je(V,V.return,Kt)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(Kt){Je(V,V.return,Kt)}}}else if(i.tag===18){if(s===null){V=i;try{var ut=V.stateNode;h?px(ut,!0):px(V.stateNode,!1)}catch(Kt){Je(V,V.return,Kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Tc(e,s))));break;case 19:_i(i,e),gi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Tc(e,u)));break;case 30:break;case 21:break;default:_i(i,e),gi(e)}}function gi(e){var i=e.flags;if(i&2){try{for(var s,u=e.return;u!==null;){if(_v(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=Dd(e);Mc(e,m,h);break;case 5:var b=s.stateNode;s.flags&32&&(Ui(b,""),s.flags&=-33);var L=Dd(e);Mc(e,L,b);break;case 3:case 4:var V=s.stateNode.containerInfo,rt=Dd(e);Ud(e,rt,V);break;default:throw Error(a(161))}}catch(mt){Je(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ev(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ev(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function is(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)xv(e,i.alternate,i),i=i.sibling}function Ur(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ns(4,i,i.return),Ur(i);break;case 1:wa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&pv(i,i.return,s),Ur(i);break;case 27:Jl(i.stateNode);case 26:case 5:wa(i,i.return),Ur(i);break;case 22:i.memoizedState===null&&Ur(i);break;case 30:Ur(i);break;default:Ur(i)}e=e.sibling}}function as(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:as(h,m,s),Vl(4,m);break;case 1:if(as(h,m,s),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(rt){Je(u,u.return,rt)}if(u=m,h=u.updateQueue,h!==null){var L=u.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)ng(V[h],L)}catch(rt){Je(u,u.return,rt)}}s&&b&64&&dv(m),kl(m,m.return);break;case 27:gv(m);case 26:case 5:as(h,m,s),s&&u===null&&b&4&&mv(m),kl(m,m.return);break;case 12:as(h,m,s);break;case 31:as(h,m,s),s&&b&4&&Mv(h,m);break;case 13:as(h,m,s),s&&b&4&&Tv(h,m);break;case 22:m.memoizedState===null&&as(h,m,s),kl(m,m.return);break;case 30:break;default:as(h,m,s)}i=i.sibling}}function Nd(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Cl(s))}function Od(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Cl(e))}function xa(e,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Av(e,i,s,u),i=i.sibling}function Av(e,i,s,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:xa(e,i,s,u),h&2048&&Vl(9,i);break;case 1:xa(e,i,s,u);break;case 3:xa(e,i,s,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Cl(e)));break;case 12:if(h&2048){xa(e,i,s,u),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,L=m.onPostCommit;typeof L=="function"&&L(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Je(i,i.return,V)}}else xa(e,i,s,u);break;case 31:xa(e,i,s,u);break;case 13:xa(e,i,s,u);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?xa(e,i,s,u):Xl(e,i):m._visibility&2?xa(e,i,s,u):(m._visibility|=2,Mo(e,i,s,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Nd(b,i);break;case 24:xa(e,i,s,u),h&2048&&Od(i.alternate,i);break;default:xa(e,i,s,u)}}function Mo(e,i,s,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,L=s,V=u,rt=b.flags;switch(b.tag){case 0:case 11:case 15:Mo(m,b,L,V,h),Vl(8,b);break;case 23:break;case 22:var mt=b.stateNode;b.memoizedState!==null?mt._visibility&2?Mo(m,b,L,V,h):Xl(m,b):(mt._visibility|=2,Mo(m,b,L,V,h)),h&&rt&2048&&Nd(b.alternate,b);break;case 24:Mo(m,b,L,V,h),h&&rt&2048&&Od(b.alternate,b);break;default:Mo(m,b,L,V,h)}i=i.sibling}}function Xl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,u=i,h=u.flags;switch(u.tag){case 22:Xl(s,u),h&2048&&Nd(u.alternate,u);break;case 24:Xl(s,u),h&2048&&Od(u.alternate,u);break;default:Xl(s,u)}i=i.sibling}}var Wl=8192;function To(e,i,s){if(e.subtreeFlags&Wl)for(e=e.child;e!==null;)Rv(e,i,s),e=e.sibling}function Rv(e,i,s){switch(e.tag){case 26:To(e,i,s),e.flags&Wl&&e.memoizedState!==null&&ZT(s,va,e.memoizedState,e.memoizedProps);break;case 5:To(e,i,s);break;case 3:case 4:var u=va;va=Ic(e.stateNode.containerInfo),To(e,i,s),va=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=Wl,Wl=16777216,To(e,i,s),Wl=u):To(e,i,s));break;default:To(e,i,s)}}function wv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ql(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];Wn=u,Dv(u,e)}wv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cv(e),e=e.sibling}function Cv(e){switch(e.tag){case 0:case 11:case 15:ql(e),e.flags&2048&&Ns(9,e,e.return);break;case 3:ql(e);break;case 12:ql(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,bc(e)):ql(e);break;default:ql(e)}}function bc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];Wn=u,Dv(u,e)}wv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ns(8,i,i.return),bc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,bc(i));break;default:bc(i)}e=e.sibling}}function Dv(e,i){for(;Wn!==null;){var s=Wn;switch(s.tag){case 0:case 11:case 15:Ns(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Cl(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,Wn=u;else t:for(s=e;Wn!==null;){u=Wn;var h=u.sibling,m=u.return;if(Sv(u),u===s){Wn=null;break t}if(h!==null){h.return=m,Wn=h;break t}Wn=m}}}var cT={getCacheForType:function(e){var i=Zn(Nn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Zn(Nn).controller.signal}},fT=typeof WeakMap=="function"?WeakMap:Map,We=0,ln=null,Ae=null,we=0,Qe=0,zi=null,Os=!1,bo=!1,Pd=!1,ss=0,An=0,Ps=0,Lr=0,zd=0,Ii=0,Eo=0,Yl=null,vi=null,Id=!1,Ec=0,Uv=0,Ac=1/0,Rc=null,zs=null,Gn=0,Is=null,Ao=null,rs=0,Bd=0,Fd=null,Lv=null,jl=0,Hd=null;function Bi(){return(We&2)!==0&&we!==0?we&-we:I.T!==null?qd():ys()}function Nv(){if(Ii===0)if((we&536870912)===0||Ue){var e=se;se<<=1,(se&3932160)===0&&(se=262144),Ii=e}else Ii=536870912;return e=Oi.current,e!==null&&(e.flags|=32),Ii}function xi(e,i,s){(e===ln&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Ro(e,0),Bs(e,we,Ii,!1)),ce(e,s),((We&2)===0||e!==ln)&&(e===ln&&((We&2)===0&&(Lr|=s),An===4&&Bs(e,we,Ii,!1)),Ca(e))}function Ov(e,i,s){if((We&6)!==0)throw Error(a(327));var u=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Xt(e,i),h=u?pT(e,i):Vd(e,i,!0),m=u;do{if(h===0){bo&&!u&&Bs(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!hT(s)){h=Vd(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var L=e;h=Yl;var V=L.current.memoizedState.isDehydrated;if(V&&(Ro(L,b).flags|=256),b=Vd(L,b,!1),b!==2){if(Pd&&!V){L.errorRecoveryDisabledLanes|=m,Lr|=m,h=4;break t}m=vi,vi=h,m!==null&&(vi===null?vi=m:vi.push.apply(vi,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){Ro(e,0),Bs(e,i,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Bs(u,i,Ii,!Os);break t;case 2:vi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Ec+300-Ct(),10<h)){if(Bs(u,i,Ii,!Os),ft(u,0,!0)!==0)break t;rs=i,u.timeoutHandle=fx(Pv.bind(null,u,s,vi,Rc,Id,i,Ii,Lr,Eo,Os,m,"Throttled",-0,0),h);break t}Pv(u,s,vi,Rc,Id,i,Ii,Lr,Eo,Os,m,null,-0,0)}}break}while(!0);Ca(e)}function Pv(e,i,s,u,h,m,b,L,V,rt,mt,gt,lt,ut){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wa},Rv(i,m,gt);var Kt=(m&62914560)===m?Ec-Ct():(m&4194048)===m?Uv-Ct():0;if(Kt=KT(gt,Kt),Kt!==null){rs=m,e.cancelPendingCommit=Kt(kv.bind(null,e,i,m,s,u,h,b,L,V,mt,gt,null,lt,ut)),Bs(e,m,b,!rt);return}}kv(e,i,m,s,u,h,b,L,V)}function hT(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],m=h.getSnapshot;h=h.value;try{if(!Li(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bs(e,i,s,u){i&=~zd,i&=~Lr,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-Nt(h),b=1<<m;u[m]=-1,h&=~b}s!==0&&He(e,s,i)}function wc(){return(We&6)===0?(Zl(0),!1):!0}function Gd(){if(Ae!==null){if(Qe===0)var e=Ae.return;else e=Ae,Za=Tr=null,id(e),go=null,Ul=0,e=Ae;for(;e!==null;)hv(e.alternate,e),e=e.return;Ae=null}}function Ro(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,LT(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),rs=0,Gd(),ln=e,Ae=s=Ya(e.current,null),we=i,Qe=0,zi=null,Os=!1,bo=Xt(e,i),Pd=!1,Eo=Ii=zd=Lr=Ps=An=0,vi=Yl=null,Id=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Nt(u),m=1<<h;i|=e[h],u&=~m}return ss=i,Zu(),s}function zv(e,i){Se=null,I.H=Fl,i===_o||i===ic?(i=J_(),Qe=3):i===Wh?(i=J_(),Qe=4):Qe=i===xd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,zi=i,Ae===null&&(An=1,gc(e,$i(i,e.current)))}function Iv(){var e=Oi.current;return e===null?!0:(we&4194048)===we?ia===null:(we&62914560)===we||(we&536870912)!==0?e===ia:!1}function Bv(){var e=I.H;return I.H=Fl,e===null?Fl:e}function Fv(){var e=I.A;return I.A=cT,e}function Cc(){An=4,Os||(we&4194048)!==we&&Oi.current!==null||(bo=!0),(Ps&134217727)===0&&(Lr&134217727)===0||ln===null||Bs(ln,we,Ii,!1)}function Vd(e,i,s){var u=We;We|=2;var h=Bv(),m=Fv();(ln!==e||we!==i)&&(Rc=null,Ro(e,i)),i=!1;var b=An;t:do try{if(Qe!==0&&Ae!==null){var L=Ae,V=zi;switch(Qe){case 8:Gd(),b=6;break t;case 3:case 2:case 9:case 6:Oi.current===null&&(i=!0);var rt=Qe;if(Qe=0,zi=null,wo(e,L,V,rt),s&&bo){b=0;break t}break;default:rt=Qe,Qe=0,zi=null,wo(e,L,V,rt)}}dT(),b=An;break}catch(mt){zv(e,mt)}while(!0);return i&&e.shellSuspendCounter++,Za=Tr=null,We=u,I.H=h,I.A=m,Ae===null&&(ln=null,we=0,Zu()),b}function dT(){for(;Ae!==null;)Hv(Ae)}function pT(e,i){var s=We;We|=2;var u=Bv(),h=Fv();ln!==e||we!==i?(Rc=null,Ac=Ct()+500,Ro(e,i)):bo=Xt(e,i);t:do try{if(Qe!==0&&Ae!==null){i=Ae;var m=zi;e:switch(Qe){case 1:Qe=0,zi=null,wo(e,i,m,1);break;case 2:case 9:if(K_(m)){Qe=0,zi=null,Gv(i);break}i=function(){Qe!==2&&Qe!==9||ln!==e||(Qe=7),Ca(e)},m.then(i,i);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:K_(m)?(Qe=0,zi=null,Gv(i)):(Qe=0,zi=null,wo(e,i,m,7));break;case 5:var b=null;switch(Ae.tag){case 26:b=Ae.memoizedState;case 5:case 27:var L=Ae;if(b?Ax(b):L.stateNode.complete){Qe=0,zi=null;var V=L.sibling;if(V!==null)Ae=V;else{var rt=L.return;rt!==null?(Ae=rt,Dc(rt)):Ae=null}break e}}Qe=0,zi=null,wo(e,i,m,5);break;case 6:Qe=0,zi=null,wo(e,i,m,6);break;case 8:Gd(),An=6;break t;default:throw Error(a(462))}}mT();break}catch(mt){zv(e,mt)}while(!0);return Za=Tr=null,I.H=u,I.A=h,We=s,Ae!==null?0:(ln=null,we=0,Zu(),An)}function mT(){for(;Ae!==null&&!xe();)Hv(Ae)}function Hv(e){var i=cv(e.alternate,e,ss);e.memoizedProps=e.pendingProps,i===null?Dc(e):Ae=i}function Gv(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=av(s,i,i.pendingProps,i.type,void 0,we);break;case 11:i=av(s,i,i.pendingProps,i.type.render,i.ref,we);break;case 5:id(i);default:hv(s,i),i=Ae=F_(i,ss),i=cv(s,i,ss)}e.memoizedProps=e.pendingProps,i===null?Dc(e):Ae=i}function wo(e,i,s,u){Za=Tr=null,id(i),go=null,Ul=0;var h=i.return;try{if(iT(e,h,i,s,we)){An=1,gc(e,$i(s,e.current)),Ae=null;return}}catch(m){if(h!==null)throw Ae=h,m;An=1,gc(e,$i(s,e.current)),Ae=null;return}i.flags&32768?(Ue||u===1?e=!0:bo||(we&536870912)!==0?e=!1:(Os=e=!0,(u===2||u===9||u===3||u===6)&&(u=Oi.current,u!==null&&u.tag===13&&(u.flags|=16384))),Vv(i,e)):Dc(i)}function Dc(e){var i=e;do{if((i.flags&32768)!==0){Vv(i,Os);return}e=i.return;var s=rT(i.alternate,i,ss);if(s!==null){Ae=s;return}if(i=i.sibling,i!==null){Ae=i;return}Ae=i=e}while(i!==null);An===0&&(An=5)}function Vv(e,i){do{var s=oT(e.alternate,e);if(s!==null){s.flags&=32767,Ae=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=s}while(e!==null);An=6,Ae=null}function kv(e,i,s,u,h,m,b,L,V){e.cancelPendingCommit=null;do Uc();while(Gn!==0);if((We&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Dh,pn(e,s,m,b,L,V),e===ln&&(Ae=ln=null,we=0),Ao=i,Is=e,rs=s,Bd=m,Fd=h,Lv=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xT(K,function(){return jv(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,h=F.p,F.p=2,b=We,We|=4;try{lT(e,i,s)}finally{We=b,F.p=h,I.T=u}}Gn=1,Xv(),Wv(),qv()}}function Xv(){if(Gn===1){Gn=0;var e=Is,i=Ao,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var u=F.p;F.p=2;var h=We;We|=4;try{bv(i,e);var m=tp,b=D_(e.containerInfo),L=m.focusedElem,V=m.selectionRange;if(b!==L&&L&&L.ownerDocument&&C_(L.ownerDocument.documentElement,L)){if(V!==null&&Eh(L)){var rt=V.start,mt=V.end;if(mt===void 0&&(mt=rt),"selectionStart"in L)L.selectionStart=rt,L.selectionEnd=Math.min(mt,L.value.length);else{var gt=L.ownerDocument||document,lt=gt&&gt.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),Kt=L.textContent.length,le=Math.min(V.start,Kt),an=V.end===void 0?le:Math.min(V.end,Kt);!ut.extend&&le>an&&(b=an,an=le,le=b);var J=w_(L,le),Y=w_(L,an);if(J&&Y&&(ut.rangeCount!==1||ut.anchorNode!==J.node||ut.anchorOffset!==J.offset||ut.focusNode!==Y.node||ut.focusOffset!==Y.offset)){var st=gt.createRange();st.setStart(J.node,J.offset),ut.removeAllRanges(),le>an?(ut.addRange(st),ut.extend(Y.node,Y.offset)):(st.setEnd(Y.node,Y.offset),ut.addRange(st))}}}}for(gt=[],ut=L;ut=ut.parentNode;)ut.nodeType===1&&gt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<gt.length;L++){var _t=gt[L];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}kc=!!$d,tp=$d=null}finally{We=h,F.p=u,I.T=s}}e.current=i,Gn=2}}function Wv(){if(Gn===2){Gn=0;var e=Is,i=Ao,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var u=F.p;F.p=2;var h=We;We|=4;try{xv(e,i.alternate,i)}finally{We=h,F.p=u,I.T=s}}Gn=3}}function qv(){if(Gn===4||Gn===3){Gn=0,ze();var e=Is,i=Ao,s=rs,u=Lv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Gn=5:(Gn=0,Ao=Is=null,Yv(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(zs=null),dr(s),i=i.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ct,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=I.T,h=F.p,F.p=2,I.T=null;try{for(var m=e.onRecoverableError,b=0;b<u.length;b++){var L=u[b];m(L.value,{componentStack:L.stack})}}finally{I.T=i,F.p=h}}(rs&3)!==0&&Uc(),Ca(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===Hd?jl++:(jl=0,Hd=e):jl=0,Zl(0)}}function Yv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Cl(i)))}function Uc(){return Xv(),Wv(),qv(),jv()}function jv(){if(Gn!==5)return!1;var e=Is,i=Bd;Bd=0;var s=dr(rs),u=I.T,h=F.p;try{F.p=32>s?32:s,I.T=null,s=Fd,Fd=null;var m=Is,b=rs;if(Gn=0,Ao=Is=null,rs=0,(We&6)!==0)throw Error(a(331));var L=We;if(We|=4,Cv(m.current),Av(m,m.current,b,s),We=L,Zl(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ct,m)}catch{}return!0}finally{F.p=h,I.T=u,Yv(e,i)}}function Zv(e,i,s){i=$i(s,i),i=vd(e.stateNode,i,2),e=Ds(e,i,2),e!==null&&(ce(e,2),Ca(e))}function Je(e,i,s){if(e.tag===3)Zv(e,e,s);else for(;i!==null;){if(i.tag===3){Zv(i,e,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(zs===null||!zs.has(u))){e=$i(s,e),s=Kg(2),u=Ds(i,s,2),u!==null&&(Qg(s,u,i,e),ce(u,2),Ca(u));break}}i=i.return}}function kd(e,i,s){var u=e.pingCache;if(u===null){u=e.pingCache=new fT;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(s)||(Pd=!0,h.add(s),e=_T.bind(null,e,i,s),i.then(e,e))}function _T(e,i,s){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,ln===e&&(we&s)===s&&(An===4||An===3&&(we&62914560)===we&&300>Ct()-Ec?(We&2)===0&&Ro(e,0):zd|=s,Eo===we&&(Eo=0)),Ca(e)}function Kv(e,i){i===0&&(i=bt()),e=Sr(e,i),e!==null&&(ce(e,i),Ca(e))}function gT(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Kv(e,s)}function vT(e,i){var s=0;switch(e.tag){case 31:case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),Kv(e,s)}function xT(e,i){return j(e,i)}var Lc=null,Co=null,Xd=!1,Nc=!1,Wd=!1,Fs=0;function Ca(e){e!==Co&&e.next===null&&(Co===null?Lc=Co=e:Co=Co.next=e),Nc=!0,Xd||(Xd=!0,yT())}function Zl(e,i){if(!Wd&&Nc){Wd=!0;do for(var s=!1,u=Lc;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var b=u.suspendedLanes,L=u.pingedLanes;m=(1<<31-Nt(42|e)+1)-1,m&=h&~(b&~L),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,tx(u,m))}else m=we,m=ft(u,u===ln?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Xt(u,m)||(s=!0,tx(u,m));u=u.next}while(s);Wd=!1}}function ST(){Qv()}function Qv(){Nc=Xd=!1;var e=0;Fs!==0&&UT()&&(e=Fs);for(var i=Ct(),s=null,u=Lc;u!==null;){var h=u.next,m=Jv(u,i);m===0?(u.next=null,s===null?Lc=h:s.next=h,h===null&&(Co=s)):(s=u,(e!==0||(m&3)!==0)&&(Nc=!0)),u=h}Gn!==0&&Gn!==5||Zl(e),Fs!==0&&(Fs=0)}function Jv(e,i){for(var s=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-Nt(m),L=1<<b,V=h[b];V===-1?((L&s)===0||(L&u)!==0)&&(h[b]=Pt(L,i)):V<=i&&(e.expiredLanes|=L),m&=~L}if(i=ln,s=we,s=ft(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,s===0||e===i&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&sn(u),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Xt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(u!==null&&sn(u),dr(s)){case 2:case 8:s=R;break;case 32:s=K;break;case 268435456:s=xt;break;default:s=K}return u=$v.bind(null,e),s=j(s,u),e.callbackPriority=i,e.callbackNode=s,i}return u!==null&&u!==null&&sn(u),e.callbackPriority=2,e.callbackNode=null,2}function $v(e,i){if(Gn!==0&&Gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Uc()&&e.callbackNode!==s)return null;var u=we;return u=ft(e,e===ln?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(Ov(e,u,i),Jv(e,Ct()),e.callbackNode!=null&&e.callbackNode===s?$v.bind(null,e):null)}function tx(e,i){if(Uc())return null;Ov(e,i,!0)}function yT(){NT(function(){(We&6)!==0?j(z,ST):Qv()})}function qd(){if(Fs===0){var e=po;e===0&&(e=ue,ue<<=1,(ue&261888)===0&&(ue=256)),Fs=e}return Fs}function ex(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_r(""+e)}function nx(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function MT(e,i,s,u,h){if(i==="submit"&&s&&s.stateNode===h){var m=ex((h[yn]||null).action),b=u.submitter;b&&(i=(i=b[yn]||null)?ex(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var L=new Wu("action","action",null,u,h);e.push({event:L,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Fs!==0){var V=b?nx(h,b):new FormData(h);hd(s,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(L.preventDefault(),V=b?nx(h,b):new FormData(h),hd(s,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var Yd=0;Yd<Ch.length;Yd++){var jd=Ch[Yd],TT=jd.toLowerCase(),bT=jd[0].toUpperCase()+jd.slice(1);ga(TT,"on"+bT)}ga(N_,"onAnimationEnd"),ga(O_,"onAnimationIteration"),ga(P_,"onAnimationStart"),ga("dblclick","onDoubleClick"),ga("focusin","onFocus"),ga("focusout","onBlur"),ga(H1,"onTransitionRun"),ga(G1,"onTransitionStart"),ga(V1,"onTransitionCancel"),ga(z_,"onTransitionEnd"),et("onMouseEnter",["mouseout","mouseover"]),et("onMouseLeave",["mouseout","mouseover"]),et("onPointerEnter",["pointerout","pointerover"]),et("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ET=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl));function ix(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var u=e[s],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var b=u.length-1;0<=b;b--){var L=u[b],V=L.instance,rt=L.currentTarget;if(L=L.listener,V!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=rt;try{m(h)}catch(mt){ju(mt)}h.currentTarget=null,m=V}else for(b=0;b<u.length;b++){if(L=u[b],V=L.instance,rt=L.currentTarget,L=L.listener,V!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=rt;try{m(h)}catch(mt){ju(mt)}h.currentTarget=null,m=V}}}}function Re(e,i){var s=i[pa];s===void 0&&(s=i[pa]=new Set);var u=e+"__bubble";s.has(u)||(ax(i,e,2,!1),s.add(u))}function Zd(e,i,s){var u=0;i&&(u|=4),ax(s,e,u,i)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Kd(e){if(!e[Oc]){e[Oc]=!0,tn.forEach(function(s){s!=="selectionchange"&&(ET.has(s)||Zd(s,!1,e),Zd(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Oc]||(i[Oc]=!0,Zd("selectionchange",!1,i))}}function ax(e,i,s,u){switch(Nx(i)){case 2:var h=$T;break;case 8:h=tb;break;default:h=fp}s=h.bind(null,i,s,e),h=void 0,!_h||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function Qd(e,i,s,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var L=u.stateNode.containerInfo;if(L===h)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;L!==null;){if(b=oe(L),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){u=m=b;continue t}L=L.parentNode}}u=u.return}u_(function(){var rt=m,mt=ph(s),gt=[];t:{var lt=I_.get(e);if(lt!==void 0){var ut=Wu,Kt=e;switch(e){case"keypress":if(ku(s)===0)break t;case"keydown":case"keyup":ut=v1;break;case"focusin":Kt="focus",ut=Sh;break;case"focusout":Kt="blur",ut=Sh;break;case"beforeblur":case"afterblur":ut=Sh;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=h_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=y1;break;case N_:case O_:case P_:ut=u1;break;case z_:ut=T1;break;case"scroll":case"scrollend":ut=a1;break;case"wheel":ut=E1;break;case"copy":case"cut":case"paste":ut=f1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=p_;break;case"toggle":case"beforetoggle":ut=R1}var le=(i&4)!==0,an=!le&&(e==="scroll"||e==="scrollend"),J=le?lt!==null?lt+"Capture":null:lt;le=[];for(var Y=rt,st;Y!==null;){var _t=Y;if(st=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||st===null||J===null||(_t=vl(Y,J),_t!=null&&le.push(Ql(Y,_t,st))),an)break;Y=Y.return}0<le.length&&(lt=new ut(lt,Kt,null,s,mt),gt.push({event:lt,listeners:le}))}}if((i&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&s!==dh&&(Kt=s.relatedTarget||s.fromElement)&&(oe(Kt)||Kt[da]))break t;if((ut||lt)&&(lt=mt.window===mt?mt:(lt=mt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(Kt=s.relatedTarget||s.toElement,ut=rt,Kt=Kt?oe(Kt):null,Kt!==null&&(an=l(Kt),le=Kt.tag,Kt!==an||le!==5&&le!==27&&le!==6)&&(Kt=null)):(ut=null,Kt=rt),ut!==Kt)){if(le=h_,_t="onMouseLeave",J="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(le=p_,_t="onPointerLeave",J="onPointerEnter",Y="pointer"),an=ut==null?lt:Et(ut),st=Kt==null?lt:Et(Kt),lt=new le(_t,Y+"leave",ut,s,mt),lt.target=an,lt.relatedTarget=st,_t=null,oe(mt)===rt&&(le=new le(J,Y+"enter",Kt,s,mt),le.target=st,le.relatedTarget=an,_t=le),an=_t,ut&&Kt)e:{for(le=AT,J=ut,Y=Kt,st=0,_t=J;_t;_t=le(_t))st++;_t=0;for(var re=Y;re;re=le(re))_t++;for(;0<st-_t;)J=le(J),st--;for(;0<_t-st;)Y=le(Y),_t--;for(;st--;){if(J===Y||Y!==null&&J===Y.alternate){le=J;break e}J=le(J),Y=le(Y)}le=null}else le=null;ut!==null&&sx(gt,lt,ut,le,!1),Kt!==null&&an!==null&&sx(gt,an,Kt,le,!0)}}t:{if(lt=rt?Et(rt):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var ke=M_;else if(S_(lt))if(T_)ke=I1;else{ke=P1;var $t=O1}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?rt&&Ye(rt.elementType)&&(ke=M_):ke=z1;if(ke&&(ke=ke(e,rt))){y_(gt,ke,s,mt);break t}$t&&$t(e,lt,rt),e==="focusout"&&rt&&lt.type==="number"&&rt.memoizedProps.value!=null&&Ee(lt,"number",lt.value)}switch($t=rt?Et(rt):window,e){case"focusin":(S_($t)||$t.contentEditable==="true")&&(so=$t,Ah=rt,Al=null);break;case"focusout":Al=Ah=so=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,U_(gt,s,mt);break;case"selectionchange":if(F1)break;case"keydown":case"keyup":U_(gt,s,mt)}var Me;if(Mh)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else ao?v_(e,s)&&(Ce="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ce="onCompositionStart");Ce&&(m_&&s.locale!=="ko"&&(ao||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&ao&&(Me=c_()):(Ts=mt,gh="value"in Ts?Ts.value:Ts.textContent,ao=!0)),$t=Pc(rt,Ce),0<$t.length&&(Ce=new d_(Ce,e,null,s,mt),gt.push({event:Ce,listeners:$t}),Me?Ce.data=Me:(Me=x_(s),Me!==null&&(Ce.data=Me)))),(Me=C1?D1(e,s):U1(e,s))&&(Ce=Pc(rt,"onBeforeInput"),0<Ce.length&&($t=new d_("onBeforeInput","beforeinput",null,s,mt),gt.push({event:$t,listeners:Ce}),$t.data=Me)),MT(gt,e,rt,s,mt)}ix(gt,i)})}function Ql(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Pc(e,i){for(var s=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=vl(e,s),h!=null&&u.unshift(Ql(e,h,m)),h=vl(e,i),h!=null&&u.push(Ql(e,h,m))),e.tag===3)return u;e=e.return}return[]}function AT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sx(e,i,s,u,h){for(var m=i._reactName,b=[];s!==null&&s!==u;){var L=s,V=L.alternate,rt=L.stateNode;if(L=L.tag,V!==null&&V===u)break;L!==5&&L!==26&&L!==27||rt===null||(V=rt,h?(rt=vl(s,m),rt!=null&&b.unshift(Ql(s,rt,V))):h||(rt=vl(s,m),rt!=null&&b.push(Ql(s,rt,V)))),s=s.return}b.length!==0&&e.push({event:i,listeners:b})}var RT=/\r\n?/g,wT=/\u0000|\uFFFD/g;function rx(e){return(typeof e=="string"?e:""+e).replace(RT,`
`).replace(wT,"")}function ox(e,i){return i=rx(i),rx(e)===i}function nn(e,i,s,u,h,m){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Ui(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Ui(e,""+u);break;case"className":Wt(e,"class",u);break;case"tabIndex":Wt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Wt(e,s,u);break;case"style":_a(e,u,m);break;case"data":if(i!=="object"){Wt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=_r(""+u),e.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&nn(e,i,"name",h.name,h,null),nn(e,i,"formEncType",h.formEncType,h,null),nn(e,i,"formMethod",h.formMethod,h,null),nn(e,i,"formTarget",h.formTarget,h,null)):(nn(e,i,"encType",h.encType,h,null),nn(e,i,"method",h.method,h,null),nn(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=_r(""+u),e.setAttribute(s,u);break;case"onClick":u!=null&&(e.onclick=Wa);break;case"onScroll":u!=null&&Re("scroll",e);break;case"onScrollEnd":u!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}s=_r(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""+u):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":u===!0?e.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,u):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(s,u):e.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(s):e.setAttribute(s,u);break;case"popover":Re("beforetoggle",e),Re("toggle",e),wt(e,"popover",u);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":wt(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ea.get(s)||s,wt(e,s,u))}}function Jd(e,i,s,u,h,m){switch(s){case"style":_a(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof u=="string"?Ui(e,u):(typeof u=="number"||typeof u=="bigint")&&Ui(e,""+u);break;case"onScroll":u!=null&&Re("scroll",e);break;case"onScrollEnd":u!=null&&Re("scrollend",e);break;case"onClick":u!=null&&(e.onclick=Wa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!D.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[yn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,u,h);break t}s in e?e[s]=u:u===!0?e.setAttribute(s,""):wt(e,s,u)}}}function Qn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var u=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:nn(e,i,m,b,s,null)}}h&&nn(e,i,"srcSet",s.srcSet,s,null),u&&nn(e,i,"src",s.src,s,null);return;case"input":Re("invalid",e);var L=m=b=h=null,V=null,rt=null;for(u in s)if(s.hasOwnProperty(u)){var mt=s[u];if(mt!=null)switch(u){case"name":h=mt;break;case"type":b=mt;break;case"checked":V=mt;break;case"defaultChecked":rt=mt;break;case"value":m=mt;break;case"defaultValue":L=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:nn(e,i,u,mt,s,null)}}ei(e,m,L,V,rt,b,h,!1);return;case"select":Re("invalid",e),u=b=m=null;for(h in s)if(s.hasOwnProperty(h)&&(L=s[h],L!=null))switch(h){case"value":m=L;break;case"defaultValue":b=L;break;case"multiple":u=L;default:nn(e,i,h,L,s,null)}i=m,s=b,e.multiple=!!u,i!=null?Hn(e,!!u,i,!1):s!=null&&Hn(e,!!u,s,!0);return;case"textarea":Re("invalid",e),m=h=u=null;for(b in s)if(s.hasOwnProperty(b)&&(L=s[b],L!=null))switch(b){case"value":u=L;break;case"defaultValue":h=L;break;case"children":m=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:nn(e,i,b,L,s,null)}ma(e,u,h,m);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(u=s[V],u!=null))switch(V){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nn(e,i,V,u,s,null)}return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(u=0;u<Kl.length;u++)Re(Kl[u],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in s)if(s.hasOwnProperty(rt)&&(u=s[rt],u!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:nn(e,i,rt,u,s,null)}return;default:if(Ye(i)){for(mt in s)s.hasOwnProperty(mt)&&(u=s[mt],u!==void 0&&Jd(e,i,mt,u,s,void 0));return}}for(L in s)s.hasOwnProperty(L)&&(u=s[L],u!=null&&nn(e,i,L,u,s,null))}function CT(e,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,L=null,V=null,rt=null,mt=null;for(ut in s){var gt=s[ut];if(s.hasOwnProperty(ut)&&gt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=gt;default:u.hasOwnProperty(ut)||nn(e,i,ut,null,u,gt)}}for(var lt in u){var ut=u[lt];if(gt=s[lt],u.hasOwnProperty(lt)&&(ut!=null||gt!=null))switch(lt){case"type":m=ut;break;case"name":h=ut;break;case"checked":rt=ut;break;case"defaultChecked":mt=ut;break;case"value":b=ut;break;case"defaultValue":L=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==gt&&nn(e,i,lt,ut,u,gt)}}jt(e,b,L,V,rt,mt,m,h);return;case"select":ut=b=L=lt=null;for(m in s)if(V=s[m],s.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":ut=V;default:u.hasOwnProperty(m)||nn(e,i,m,null,u,V)}for(h in u)if(m=u[h],V=s[h],u.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":lt=m;break;case"defaultValue":L=m;break;case"multiple":b=m;default:m!==V&&nn(e,i,h,m,u,V)}i=L,s=b,u=ut,lt!=null?Hn(e,!!s,lt,!1):!!u!=!!s&&(i!=null?Hn(e,!!s,i,!0):Hn(e,!!s,s?[]:"",!1));return;case"textarea":ut=lt=null;for(L in s)if(h=s[L],s.hasOwnProperty(L)&&h!=null&&!u.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:nn(e,i,L,null,u,h)}for(b in u)if(h=u[b],m=s[b],u.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":lt=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&nn(e,i,b,h,u,m)}Di(e,lt,ut);return;case"option":for(var Kt in s)if(lt=s[Kt],s.hasOwnProperty(Kt)&&lt!=null&&!u.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:nn(e,i,Kt,null,u,lt)}for(V in u)if(lt=u[V],ut=s[V],u.hasOwnProperty(V)&&lt!==ut&&(lt!=null||ut!=null))switch(V){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:nn(e,i,V,lt,u,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in s)lt=s[le],s.hasOwnProperty(le)&&lt!=null&&!u.hasOwnProperty(le)&&nn(e,i,le,null,u,lt);for(rt in u)if(lt=u[rt],ut=s[rt],u.hasOwnProperty(rt)&&lt!==ut&&(lt!=null||ut!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:nn(e,i,rt,lt,u,ut)}return;default:if(Ye(i)){for(var an in s)lt=s[an],s.hasOwnProperty(an)&&lt!==void 0&&!u.hasOwnProperty(an)&&Jd(e,i,an,void 0,u,lt);for(mt in u)lt=u[mt],ut=s[mt],!u.hasOwnProperty(mt)||lt===ut||lt===void 0&&ut===void 0||Jd(e,i,mt,lt,u,ut);return}}for(var J in s)lt=s[J],s.hasOwnProperty(J)&&lt!=null&&!u.hasOwnProperty(J)&&nn(e,i,J,null,u,lt);for(gt in u)lt=u[gt],ut=s[gt],!u.hasOwnProperty(gt)||lt===ut||lt==null&&ut==null||nn(e,i,gt,lt,u,ut)}function lx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),u=0;u<s.length;u++){var h=s[u],m=h.transferSize,b=h.initiatorType,L=h.duration;if(m&&L&&lx(b)){for(b=0,L=h.responseEnd,u+=1;u<s.length;u++){var V=s[u],rt=V.startTime;if(rt>L)break;var mt=V.transferSize,gt=V.initiatorType;mt&&lx(gt)&&(V=V.responseEnd,b+=mt*(V<L?1:(L-rt)/(V-rt)))}if(--u,i+=8*(m+b)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $d=null,tp=null;function zc(e){return e.nodeType===9?e:e.ownerDocument}function ux(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cx(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ep(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var np=null;function UT(){var e=window.event;return e&&e.type==="popstate"?e===np?!1:(np=e,!0):(np=null,!1)}var fx=typeof setTimeout=="function"?setTimeout:void 0,LT=typeof clearTimeout=="function"?clearTimeout:void 0,hx=typeof Promise=="function"?Promise:void 0,NT=typeof queueMicrotask=="function"?queueMicrotask:typeof hx<"u"?function(e){return hx.resolve(null).then(e).catch(OT)}:fx;function OT(e){setTimeout(function(){throw e})}function Hs(e){return e==="head"}function dx(e,i){var s=i,u=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(u===0){e.removeChild(h),No(i);return}u--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")u++;else if(s==="html")Jl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Jl(s);for(var m=s.firstChild;m;){var b=m.nextSibling,L=m.nodeName;m[Lt]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=b}}else s==="body"&&Jl(e.ownerDocument.body);s=h}while(s);No(i)}function px(e,i){var s=e;e=0;do{var u=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=u}while(s)}function ip(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ip(s),Qt(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function PT(e,i,s,u){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Lt])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=aa(e.nextSibling),e===null)break}return null}function zT(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=aa(e.nextSibling),e===null))return null;return e}function mx(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=aa(e.nextSibling),e===null))return null;return e}function ap(e){return e.data==="$?"||e.data==="$~"}function sp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function IT(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function aa(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var rp=null;function _x(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return aa(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function gx(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function vx(e,i,s){switch(i=zc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Jl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Qt(e)}var sa=new Map,xx=new Set;function Ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var os=F.d;F.d={f:BT,r:FT,D:HT,C:GT,L:VT,m:kT,X:WT,S:XT,M:qT};function BT(){var e=os.f(),i=wc();return e||i}function FT(e){var i=Yt(e);i!==null&&i.tag===5&&i.type==="form"?zg(i):os.r(e)}var Do=typeof document>"u"?null:document;function Sx(e,i,s){var u=Do;if(u&&typeof i=="string"&&i){var h=Ze(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),xx.has(h)||(xx.add(h),e={rel:e,crossOrigin:s,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Qn(i,"link",e),ne(i),u.head.appendChild(i)))}}function HT(e){os.D(e),Sx("dns-prefetch",e,null)}function GT(e,i){os.C(e,i),Sx("preconnect",e,i)}function VT(e,i,s){os.L(e,i,s);var u=Do;if(u&&e&&i){var h='link[rel="preload"][as="'+Ze(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Ze(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Ze(s.imageSizes)+'"]')):h+='[href="'+Ze(e)+'"]';var m=h;switch(i){case"style":m=Uo(e);break;case"script":m=Lo(e)}sa.has(m)||(e=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),sa.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector($l(m))||i==="script"&&u.querySelector(tu(m))||(i=u.createElement("link"),Qn(i,"link",e),ne(i),u.head.appendChild(i)))}}function kT(e,i){os.m(e,i);var s=Do;if(s&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Ze(u)+'"][href="'+Ze(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Lo(e)}if(!sa.has(m)&&(e=v({rel:"modulepreload",href:e},i),sa.set(m,e),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(tu(m)))return}u=s.createElement("link"),Qn(u,"link",e),ne(u),s.head.appendChild(u)}}}function XT(e,i,s){os.S(e,i,s);var u=Do;if(u&&e){var h=be(u).hoistableStyles,m=Uo(e);i=i||"default";var b=h.get(m);if(!b){var L={loading:0,preload:null};if(b=u.querySelector($l(m)))L.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},s),(s=sa.get(m))&&op(e,s);var V=b=u.createElement("link");ne(V),Qn(V,"link",e),V._p=new Promise(function(rt,mt){V.onload=rt,V.onerror=mt}),V.addEventListener("load",function(){L.loading|=1}),V.addEventListener("error",function(){L.loading|=2}),L.loading|=4,Bc(b,i,u)}b={type:"stylesheet",instance:b,count:1,state:L},h.set(m,b)}}}function WT(e,i){os.X(e,i);var s=Do;if(s&&e){var u=be(s).hoistableScripts,h=Lo(e),m=u.get(h);m||(m=s.querySelector(tu(h)),m||(e=v({src:e,async:!0},i),(i=sa.get(h))&&lp(e,i),m=s.createElement("script"),ne(m),Qn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function qT(e,i){os.M(e,i);var s=Do;if(s&&e){var u=be(s).hoistableScripts,h=Lo(e),m=u.get(h);m||(m=s.querySelector(tu(h)),m||(e=v({src:e,async:!0,type:"module"},i),(i=sa.get(h))&&lp(e,i),m=s.createElement("script"),ne(m),Qn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function yx(e,i,s,u){var h=(h=at.current)?Ic(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Uo(s.href),s=be(h).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Uo(s.href);var m=be(h).hoistableStyles,b=m.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=h.querySelector($l(e)))&&!m._p&&(b.instance=m,b.state.loading=5),sa.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},sa.set(e,s),m||YT(h,e,s,b.state))),i&&u===null)throw Error(a(528,""));return b}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Lo(s),s=be(h).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Uo(e){return'href="'+Ze(e)+'"'}function $l(e){return'link[rel="stylesheet"]['+e+"]"}function Mx(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function YT(e,i,s,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Qn(i,"link",s),ne(i),e.head.appendChild(i))}function Lo(e){return'[src="'+Ze(e)+'"]'}function tu(e){return"script[async]"+e}function Tx(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+Ze(s.href)+'"]');if(u)return i.instance=u,ne(u),u;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),ne(u),Qn(u,"style",h),Bc(u,s.precedence,e),i.instance=u;case"stylesheet":h=Uo(s.href);var m=e.querySelector($l(h));if(m)return i.state.loading|=4,i.instance=m,ne(m),m;u=Mx(s),(h=sa.get(h))&&op(u,h),m=(e.ownerDocument||e).createElement("link"),ne(m);var b=m;return b._p=new Promise(function(L,V){b.onload=L,b.onerror=V}),Qn(m,"link",u),i.state.loading|=4,Bc(m,s.precedence,e),i.instance=m;case"script":return m=Lo(s.src),(h=e.querySelector(tu(m)))?(i.instance=h,ne(h),h):(u=s,(h=sa.get(m))&&(u=v({},s),lp(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),ne(h),Qn(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Bc(u,s.precedence,e));return i.instance}function Bc(e,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,b=0;b<u.length;b++){var L=u[b];if(L.dataset.precedence===i)m=L;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function op(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function lp(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Fc=null;function bx(e,i,s){if(Fc===null){var u=new Map,h=Fc=new Map;h.set(s,u)}else h=Fc,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(e))return u;for(u.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[Lt]||m[rn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var L=u.get(b);L?L.push(m):u.set(b,[m])}}return u}function Ex(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function jT(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Ax(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ZT(e,i,s,u){if(s.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Uo(u.href),m=i.querySelector($l(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Hc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,ne(m);return}m=i.ownerDocument||i,u=Mx(u),(h=sa.get(h))&&op(u,h),m=m.createElement("link"),ne(m);var b=m;b._p=new Promise(function(L,V){b.onload=L,b.onerror=V}),Qn(m,"link",u),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Hc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var up=0;function KT(e,i){return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var u=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&up===0&&(up=62500*DT());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>up?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function Hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gc=null;function Vc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gc=new Map,i.forEach(QT,e),Gc=null,Hc.call(e))}function QT(e,i){if(!(i.state.loading&4)){var s=Gc.get(e);if(s)var u=s.get(null);else{s=new Map,Gc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),u=b)}u&&s.set(null,u)}h=i.instance,b=h.getAttribute("data-precedence"),m=s.get(b)||u,m===u&&s.set(null,h),s.set(b,h),this.count++,u=Hc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var eu={$$typeof:C,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function JT(e,i,s,u,h,m,b,L,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.hiddenUpdates=Zt(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Rx(e,i,s,u,h,m,b,L,V,rt,mt,gt){return e=new JT(e,i,s,b,V,rt,mt,gt,L),i=1,m===!0&&(i|=24),m=Ni(3,null,null,i),e.current=m,m.stateNode=e,i=Vh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:i},qh(m),e}function wx(e){return e?(e=lo,e):lo}function Cx(e,i,s,u,h,m){h=wx(h),u.context===null?u.context=h:u.pendingContext=h,u=Cs(i),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=Ds(e,u,i),s!==null&&(xi(s,e,i),Nl(s,e,i))}function Dx(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function cp(e,i){Dx(e,i),(e=e.alternate)&&Dx(e,i)}function Ux(e){if(e.tag===13||e.tag===31){var i=Sr(e,67108864);i!==null&&xi(i,e,67108864),cp(e,67108864)}}function Lx(e){if(e.tag===13||e.tag===31){var i=Bi();i=ka(i);var s=Sr(e,i);s!==null&&xi(s,e,i),cp(e,i)}}var kc=!0;function $T(e,i,s,u){var h=I.T;I.T=null;var m=F.p;try{F.p=2,fp(e,i,s,u)}finally{F.p=m,I.T=h}}function tb(e,i,s,u){var h=I.T;I.T=null;var m=F.p;try{F.p=8,fp(e,i,s,u)}finally{F.p=m,I.T=h}}function fp(e,i,s,u){if(kc){var h=hp(u);if(h===null)Qd(e,i,u,Xc,s),Ox(e,u);else if(nb(h,e,i,s,u))u.stopPropagation();else if(Ox(e,u),i&4&&-1<eb.indexOf(e)){for(;h!==null;){var m=Yt(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Rt(m.pendingLanes);if(b!==0){var L=m;for(L.pendingLanes|=2,L.entangledLanes|=2;b;){var V=1<<31-Nt(b);L.entanglements[1]|=V,b&=~V}Ca(m),(We&6)===0&&(Ac=Ct()+500,Zl(0))}}break;case 31:case 13:L=Sr(m,2),L!==null&&xi(L,m,2),wc(),cp(m,2)}if(m=hp(u),m===null&&Qd(e,i,u,Xc,s),m===h)break;h=m}h!==null&&u.stopPropagation()}else Qd(e,i,u,null,s)}}function hp(e){return e=ph(e),dp(e)}var Xc=null;function dp(e){if(Xc=null,e=oe(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=c(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Xc=e,null}function Nx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fe()){case z:return 2;case R:return 8;case K:case dt:return 32;case xt:return 268435456;default:return 32}default:return 32}}var pp=!1,Gs=null,Vs=null,ks=null,nu=new Map,iu=new Map,Xs=[],eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ox(e,i){switch(e){case"focusin":case"focusout":Gs=null;break;case"dragenter":case"dragleave":Vs=null;break;case"mouseover":case"mouseout":ks=null;break;case"pointerover":case"pointerout":nu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":iu.delete(i.pointerId)}}function au(e,i,s,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Yt(i),i!==null&&Ux(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function nb(e,i,s,u,h){switch(i){case"focusin":return Gs=au(Gs,e,i,s,u,h),!0;case"dragenter":return Vs=au(Vs,e,i,s,u,h),!0;case"mouseover":return ks=au(ks,e,i,s,u,h),!0;case"pointerover":var m=h.pointerId;return nu.set(m,au(nu.get(m)||null,e,i,s,u,h)),!0;case"gotpointercapture":return m=h.pointerId,iu.set(m,au(iu.get(m)||null,e,i,s,u,h)),!0}return!1}function Px(e){var i=oe(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){e.blockedOn=i,pr(e.priority,function(){Lx(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,pr(e.priority,function(){Lx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=hp(e.nativeEvent);if(s===null){s=e.nativeEvent;var u=new s.constructor(s.type,s);dh=u,s.target.dispatchEvent(u),dh=null}else return i=Yt(s),i!==null&&Ux(i),e.blockedOn=s,!1;i.shift()}return!0}function zx(e,i,s){Wc(e)&&s.delete(i)}function ib(){pp=!1,Gs!==null&&Wc(Gs)&&(Gs=null),Vs!==null&&Wc(Vs)&&(Vs=null),ks!==null&&Wc(ks)&&(ks=null),nu.forEach(zx),iu.forEach(zx)}function qc(e,i){e.blockedOn===i&&(e.blockedOn=null,pp||(pp=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ib)))}var Yc=null;function Ix(e){Yc!==e&&(Yc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yc===e&&(Yc=null);for(var i=0;i<e.length;i+=3){var s=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(dp(u||s)===null)continue;break}var m=Yt(s);m!==null&&(e.splice(i,3),i-=3,hd(m,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function No(e){function i(V){return qc(V,e)}Gs!==null&&qc(Gs,e),Vs!==null&&qc(Vs,e),ks!==null&&qc(ks,e),nu.forEach(i),iu.forEach(i);for(var s=0;s<Xs.length;s++){var u=Xs[s];u.blockedOn===e&&(u.blockedOn=null)}for(;0<Xs.length&&(s=Xs[0],s.blockedOn===null);)Px(s),s.blockedOn===null&&Xs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],m=s[u+1],b=h[yn]||null;if(typeof m=="function")b||Ix(s);else if(b){var L=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[yn]||null)L=b.formAction;else if(dp(h)!==null)continue}else L=b.action;typeof L=="function"?s[u+1]=L:(s.splice(u,3),u-=3),Ix(s)}}}function Bx(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(s,20)}function s(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function mp(e){this._internalRoot=e}jc.prototype.render=mp.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=Bi();Cx(s,u,e,i,null,null)},jc.prototype.unmount=mp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Cx(e.current,2,null,e,null,null),wc(),i[da]=null}};function jc(e){this._internalRoot=e}jc.prototype.unstable_scheduleHydration=function(e){if(e){var i=ys();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Xs.length&&i!==0&&i<Xs[s].priority;s++);Xs.splice(s,0,e),s===0&&Px(e)}};var Fx=t.version;if(Fx!=="19.2.6")throw Error(a(527,Fx,"19.2.6"));F.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var ab={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{ct=Zc.inject(ab),ht=Zc}catch{}}return ru.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,u="",h=qg,m=Yg,b=jg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Rx(e,1,!1,null,null,s,u,null,h,m,b,Bx),e[da]=i.current,Kd(e),new mp(i)},ru.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var u=!1,h="",m=qg,b=Yg,L=jg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(L=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=Rx(e,1,!0,i,s??null,u,h,V,m,b,L,Bx),i.context=wx(null),s=i.current,u=Bi(),u=ka(u),h=Cs(u),h.callback=null,Ds(s,h,u),s=u,i.current.lanes=s,ce(i,s),Ca(i),e[da]=i.current,Kd(e),new jc(i)},ru.version="19.2.6",ru}var Zx;function pb(){if(Zx)return vp.exports;Zx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),vp.exports=db(),vp.exports}var mb=pb();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const y0="184",_b=0,Kx=1,gb=2,Df=1,vb=2,vu=3,lr=0,Ti=1,yi=2,Fa=0,tl=1,el=2,Qx=3,Jx=4,xb=5,Hr=100,Sb=101,yb=102,Mb=103,Tb=104,bb=200,Eb=201,Ab=202,Rb=203,hm=204,dm=205,wb=206,Cb=207,Db=208,Ub=209,Lb=210,Nb=211,Ob=212,Pb=213,zb=214,pm=0,mm=1,_m=2,rl=3,gm=4,vm=5,xm=6,Sm=7,Ay=0,Ib=1,Bb=2,Ha=0,Ry=1,wy=2,Cy=3,M0=4,Dy=5,Uy=6,Ly=7,Ny=300,Zr=301,ol=302,Mp=303,Tp=304,ih=306,ym=1e3,ms=1001,Mm=1002,Jn=1003,Fb=1004,Kc=1005,oi=1006,bp=1007,Vr=1008,ki=1009,Oy=1010,Py=1011,wu=1012,T0=1013,Ga=1014,Ta=1015,Yi=1016,b0=1017,E0=1018,Cu=1020,zy=35902,Iy=35899,By=1021,Fy=1022,ba=1023,gs=1026,kr=1027,A0=1028,R0=1029,Kr=1030,w0=1031,C0=1033,Uf=33776,Lf=33777,Nf=33778,Of=33779,Tm=35840,bm=35841,Em=35842,Am=35843,Rm=36196,wm=37492,Cm=37496,Dm=37488,Um=37489,Gf=37490,Lm=37491,Nm=37808,Om=37809,Pm=37810,zm=37811,Im=37812,Bm=37813,Fm=37814,Hm=37815,Gm=37816,Vm=37817,km=37818,Xm=37819,Wm=37820,qm=37821,Ym=36492,jm=36494,Zm=36495,Km=36283,Qm=36284,Vf=36285,Jm=36286,Hb=3200,$m=0,Gb=1,tr="",ua="srgb",kf="srgb-linear",Xf="linear",$e="srgb",Oo=7680,$x=519,Vb=512,kb=513,Xb=514,D0=515,Wb=516,qb=517,U0=518,Yb=519,tS=35044,eS="300 es",Ia=2e3,Du=2001;function jb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Wf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zb(){const o=Wf("canvas");return o.style.display="block",o}const nS={};function iS(...o){const t="THREE."+o.shift();console.log(t,...o)}function Hy(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function fe(...o){o=Hy(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...o)}}function Ie(...o){o=Hy(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...o)}}function t0(...o){const t=o.join(" ");t in nS||(nS[t]=!0,fe(...o))}function Kb(o,t,n){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const Qb={[pm]:mm,[_m]:xm,[gm]:Sm,[rl]:vm,[mm]:pm,[xm]:_m,[Sm]:gm,[vm]:rl};class Qr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,t);t.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pf=Math.PI/180,e0=180/Math.PI;function Fu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ii[o&255]+ii[o>>8&255]+ii[o>>16&255]+ii[o>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[n&63|128]+ii[n>>8&255]+"-"+ii[n>>16&255]+ii[n>>24&255]+ii[a&255]+ii[a>>8&255]+ii[a>>16&255]+ii[a>>24&255]).toLowerCase()}function Ne(o,t,n){return Math.max(t,Math.min(n,o))}function Jb(o,t){return(o%t+t)%t}function Ep(o,t,n){return(1-n)*o+n*t}function ou(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Si(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const i_=class i_{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ne(this.x,t.x,n.x),this.y=Ne(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ne(this.x,t,n),this.y=Ne(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ne(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ne(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*r+t.x,this.y=l*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};i_.prototype.isVector2=!0;let pe=i_;class _l{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,l,c,f){let p=a[r+0],d=a[r+1],_=a[r+2],v=a[r+3],g=l[c+0],S=l[c+1],T=l[c+2],M=l[c+3];if(v!==M||p!==g||d!==S||_!==T){let x=p*g+d*S+_*T+v*M;x<0&&(g=-g,S=-S,T=-T,M=-M,x=-x);let y=1-f;if(x<.9995){const A=Math.acos(x),C=Math.sin(A);y=Math.sin(y*A)/C,f=Math.sin(f*A)/C,p=p*y+g*f,d=d*y+S*f,_=_*y+T*f,v=v*y+M*f}else{p=p*y+g*f,d=d*y+S*f,_=_*y+T*f,v=v*y+M*f;const A=1/Math.sqrt(p*p+d*d+_*_+v*v);p*=A,d*=A,_*=A,v*=A}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,r,l,c){const f=a[r],p=a[r+1],d=a[r+2],_=a[r+3],v=l[c],g=l[c+1],S=l[c+2],T=l[c+3];return t[n]=f*T+_*v+p*S-d*g,t[n+1]=p*T+_*g+d*v-f*S,t[n+2]=d*T+_*S+f*g-p*v,t[n+3]=_*T-f*v-p*g-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(r/2),v=f(l/2),g=p(a/2),S=p(r/2),T=p(l/2);switch(c){case"XYZ":this._x=g*_*v+d*S*T,this._y=d*S*v-g*_*T,this._z=d*_*T+g*S*v,this._w=d*_*v-g*S*T;break;case"YXZ":this._x=g*_*v+d*S*T,this._y=d*S*v-g*_*T,this._z=d*_*T-g*S*v,this._w=d*_*v+g*S*T;break;case"ZXY":this._x=g*_*v-d*S*T,this._y=d*S*v+g*_*T,this._z=d*_*T+g*S*v,this._w=d*_*v-g*S*T;break;case"ZYX":this._x=g*_*v-d*S*T,this._y=d*S*v+g*_*T,this._z=d*_*T-g*S*v,this._w=d*_*v+g*S*T;break;case"YZX":this._x=g*_*v+d*S*T,this._y=d*S*v+g*_*T,this._z=d*_*T-g*S*v,this._w=d*_*v-g*S*T;break;case"XZY":this._x=g*_*v-d*S*T,this._y=d*S*v-g*_*T,this._z=d*_*T+g*S*v,this._w=d*_*v+g*S*T;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],v=n[10],g=a+f+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-p)*S,this._y=(l-d)*S,this._z=(c-r)*S}else if(a>f&&a>v){const S=2*Math.sqrt(1+a-f-v);this._w=(_-p)/S,this._x=.25*S,this._y=(r+c)/S,this._z=(l+d)/S}else if(f>v){const S=2*Math.sqrt(1+f-a-v);this._w=(l-d)/S,this._x=(r+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-a-f);this._w=(c-r)/S,this._x=(l+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+r*d-l*p,this._y=r*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-r*f,this._w=c*_-a*f-r*p-l*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,r=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,l=-l,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const a_=class a_{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(aS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(aS.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*r-f*a),_=2*(f*n-l*r),v=2*(l*a-c*n);return this.x=n+p*d+c*v-f*_,this.y=a+p*_+f*d-l*v,this.z=r+p*v+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ne(this.x,t.x,n.x),this.y=Ne(this.y,t.y,n.y),this.z=Ne(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ne(this.x,t,n),this.y=Ne(this.y,t,n),this.z=Ne(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ne(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=r*p-l*f,this.y=l*c-a*p,this.z=a*f-r*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ap.copy(this).projectOnVector(t),this.sub(Ap)}reflect(t){return this.sub(Ap.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ne(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};a_.prototype.isVector3=!0;let Z=a_;const Ap=new Z,aS=new _l,s_=class s_{constructor(t,n,a,r,l,c,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,c,f,p,d)}set(t,n,a,r,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=r,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],v=a[7],g=a[2],S=a[5],T=a[8],M=r[0],x=r[3],y=r[6],A=r[1],C=r[4],w=r[7],P=r[2],N=r[5],O=r[8];return l[0]=c*M+f*A+p*P,l[3]=c*x+f*C+p*N,l[6]=c*y+f*w+p*O,l[1]=d*M+_*A+v*P,l[4]=d*x+_*C+v*N,l[7]=d*y+_*w+v*O,l[2]=g*M+S*A+T*P,l[5]=g*x+S*C+T*N,l[8]=g*y+S*w+T*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*l*_+a*f*p+r*l*d-r*c*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=_*c-f*d,g=f*p-_*l,S=d*l-c*p,T=n*v+a*g+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=v*M,t[1]=(r*d-_*a)*M,t[2]=(f*a-r*c)*M,t[3]=g*M,t[4]=(_*n-r*p)*M,t[5]=(r*l-f*n)*M,t[6]=S*M,t[7]=(a*p-d*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-r*d,r*p,-r*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Rp.makeScale(t,n)),this}rotate(t){return this.premultiply(Rp.makeRotation(-t)),this}translate(t,n){return this.premultiply(Rp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};s_.prototype.isMatrix3=!0;let _e=s_;const Rp=new _e,sS=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rS=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $b(){const o={enabled:!0,workingColorSpace:kf,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===$e&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===$e&&(r.r=nl(r.r),r.g=nl(r.g),r.b=nl(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?Xf:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return t0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return t0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[kf]:{primaries:t,whitePoint:a,transfer:Xf,toXYZ:sS,fromXYZ:rS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ua},outputColorSpaceConfig:{drawingBufferColorSpace:ua}},[ua]:{primaries:t,whitePoint:a,transfer:$e,toXYZ:sS,fromXYZ:rS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ua}}}),o}const Le=$b();function _s(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function nl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Po;class tE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Po===void 0&&(Po=Wf("canvas")),Po.width=t.width,Po.height=t.height;const r=Po.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Po}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Wf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=_s(l[c]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(_s(n[a]/255)*255):n[a]=_s(n[a]);return{data:n,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eE=0;class L0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Fu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(wp(r[c].image)):l.push(wp(r[c]))}else l=wp(r);a.url=l}return n||(t.images[this.uuid]=a),a}}function wp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let nE=0;const Cp=new Z;class hi extends Qr{constructor(t=hi.DEFAULT_IMAGE,n=hi.DEFAULT_MAPPING,a=ms,r=ms,l=oi,c=Vr,f=ba,p=ki,d=hi.DEFAULT_ANISOTROPY,_=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Fu(),this.name="",this.source=new L0(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cp).x}get height(){return this.source.getSize(Cp).y}get depth(){return this.source.getSize(Cp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){fe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ny)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ym:t.x=t.x-Math.floor(t.x);break;case ms:t.x=t.x<0?0:1;break;case Mm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ym:t.y=t.y-Math.floor(t.y);break;case ms:t.y=t.y<0?0:1;break;case Mm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Ny;hi.DEFAULT_ANISOTROPY=1;const r_=class r_{constructor(t=0,n=0,a=0,r=1){this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*r+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*r+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*r+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*r+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,l;const p=t.elements,d=p[0],_=p[4],v=p[8],g=p[1],S=p[5],T=p[9],M=p[2],x=p[6],y=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-M)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+M)<.1&&Math.abs(T+x)<.1&&Math.abs(d+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(d+1)/2,w=(S+1)/2,P=(y+1)/2,N=(_+g)/4,O=(v+M)/4,E=(T+x)/4;return C>w&&C>P?C<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(C),r=N/a,l=O/a):w>P?w<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(w),a=N/r,l=E/r):P<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(P),a=O/l,r=E/l),this.set(a,r,l,n),this}let A=Math.sqrt((x-T)*(x-T)+(v-M)*(v-M)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(x-T)/A,this.y=(v-M)/A,this.z=(g-_)/A,this.w=Math.acos((d+S+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ne(this.x,t.x,n.x),this.y=Ne(this.y,t.y,n.y),this.z=Ne(this.z,t.z,n.z),this.w=Ne(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ne(this.x,t,n),this.y=Ne(this.y,t,n),this.z=Ne(this.z,t,n),this.w=Ne(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ne(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};r_.prototype.isVector4=!0;let Rn=r_;class iE extends Qr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Rn(0,0,t,n),this.scissorTest=!1,this.viewport=new Rn(0,0,t,n),this.textures=[];const r={width:t,height:n,depth:a.depth},l=new hi(r),c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new L0(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends iE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Gy extends hi{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends hi{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=class nh{constructor(t,n,a,r,l,c,f,p,d,_,v,g,S,T,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,c,f,p,d,_,v,g,S,T,M,x)}set(t,n,a,r,l,c,f,p,d,_,v,g,S,T,M,x){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=r,y[1]=l,y[5]=c,y[9]=f,y[13]=p,y[2]=d,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=T,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nh().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/zo.setFromMatrixColumn(t,0).length(),l=1/zo.setFromMatrixColumn(t,1).length(),c=1/zo.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(r),d=Math.sin(r),_=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const g=c*_,S=c*v,T=f*_,M=f*v;n[0]=p*_,n[4]=-p*v,n[8]=d,n[1]=S+T*d,n[5]=g-M*d,n[9]=-f*p,n[2]=M-g*d,n[6]=T+S*d,n[10]=c*p}else if(t.order==="YXZ"){const g=p*_,S=p*v,T=d*_,M=d*v;n[0]=g+M*f,n[4]=T*f-S,n[8]=c*d,n[1]=c*v,n[5]=c*_,n[9]=-f,n[2]=S*f-T,n[6]=M+g*f,n[10]=c*p}else if(t.order==="ZXY"){const g=p*_,S=p*v,T=d*_,M=d*v;n[0]=g-M*f,n[4]=-c*v,n[8]=T+S*f,n[1]=S+T*f,n[5]=c*_,n[9]=M-g*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const g=c*_,S=c*v,T=f*_,M=f*v;n[0]=p*_,n[4]=T*d-S,n[8]=g*d+M,n[1]=p*v,n[5]=M*d+g,n[9]=S*d-T,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const g=c*p,S=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=M-g*v,n[8]=T*v+S,n[1]=v,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*v+T,n[10]=g-M*v}else if(t.order==="XZY"){const g=c*p,S=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=-v,n[8]=d*_,n[1]=g*v+M,n[5]=c*_,n[9]=S*v-T,n[2]=T*v-S,n[6]=f*_,n[10]=M*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sE,t,rE)}lookAt(t,n,a){const r=this.elements;return Fi.subVectors(t,n),Fi.lengthSq()===0&&(Fi.z=1),Fi.normalize(),qs.crossVectors(a,Fi),qs.lengthSq()===0&&(Math.abs(a.z)===1?Fi.x+=1e-4:Fi.z+=1e-4,Fi.normalize(),qs.crossVectors(a,Fi)),qs.normalize(),Qc.crossVectors(Fi,qs),r[0]=qs.x,r[4]=Qc.x,r[8]=Fi.x,r[1]=qs.y,r[5]=Qc.y,r[9]=Fi.y,r[2]=qs.z,r[6]=Qc.z,r[10]=Fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],v=a[5],g=a[9],S=a[13],T=a[2],M=a[6],x=a[10],y=a[14],A=a[3],C=a[7],w=a[11],P=a[15],N=r[0],O=r[4],E=r[8],U=r[12],G=r[1],H=r[5],W=r[9],nt=r[13],ot=r[2],X=r[6],I=r[10],F=r[14],it=r[3],pt=r[7],St=r[11],B=r[15];return l[0]=c*N+f*G+p*ot+d*it,l[4]=c*O+f*H+p*X+d*pt,l[8]=c*E+f*W+p*I+d*St,l[12]=c*U+f*nt+p*F+d*B,l[1]=_*N+v*G+g*ot+S*it,l[5]=_*O+v*H+g*X+S*pt,l[9]=_*E+v*W+g*I+S*St,l[13]=_*U+v*nt+g*F+S*B,l[2]=T*N+M*G+x*ot+y*it,l[6]=T*O+M*H+x*X+y*pt,l[10]=T*E+M*W+x*I+y*St,l[14]=T*U+M*nt+x*F+y*B,l[3]=A*N+C*G+w*ot+P*it,l[7]=A*O+C*H+w*X+P*pt,l[11]=A*E+C*W+w*I+P*St,l[15]=A*U+C*nt+w*F+P*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],v=t[6],g=t[10],S=t[14],T=t[3],M=t[7],x=t[11],y=t[15],A=p*S-d*g,C=f*S-d*v,w=f*g-p*v,P=c*S-d*_,N=c*g-p*_,O=c*v-f*_;return n*(M*A-x*C+y*w)-a*(T*A-x*P+y*N)+r*(T*C-M*P+y*O)-l*(T*w-M*N+x*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=t[9],g=t[10],S=t[11],T=t[12],M=t[13],x=t[14],y=t[15],A=n*f-a*c,C=n*p-r*c,w=n*d-l*c,P=a*p-r*f,N=a*d-l*f,O=r*d-l*p,E=_*M-v*T,U=_*x-g*T,G=_*y-S*T,H=v*x-g*M,W=v*y-S*M,nt=g*y-S*x,ot=A*nt-C*W+w*H+P*G-N*U+O*E;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ot;return t[0]=(f*nt-p*W+d*H)*X,t[1]=(r*W-a*nt-l*H)*X,t[2]=(M*O-x*N+y*P)*X,t[3]=(g*N-v*O-S*P)*X,t[4]=(p*G-c*nt-d*U)*X,t[5]=(n*nt-r*G+l*U)*X,t[6]=(x*w-T*O-y*C)*X,t[7]=(_*O-g*w+S*C)*X,t[8]=(c*W-f*G+d*E)*X,t[9]=(a*G-n*W-l*E)*X,t[10]=(T*N-M*w+y*A)*X,t[11]=(v*w-_*N-S*A)*X,t[12]=(f*U-c*H-p*E)*X,t[13]=(n*H-a*U+r*E)*X,t[14]=(M*C-T*P-x*A)*X,t[15]=(_*P-v*C+g*A)*X,this}scale(t){const n=this.elements,a=t.x,r=t.y,l=t.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-r*p,d*p+r*f,0,d*f+r*p,_*f+a,_*p-r*c,0,d*p-r*f,_*p+r*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,l,c){return this.set(1,a,l,0,t,1,c,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,v=f+f,g=l*d,S=l*_,T=l*v,M=c*_,x=c*v,y=f*v,A=p*d,C=p*_,w=p*v,P=a.x,N=a.y,O=a.z;return r[0]=(1-(M+y))*P,r[1]=(S+w)*P,r[2]=(T-C)*P,r[3]=0,r[4]=(S-w)*N,r[5]=(1-(g+y))*N,r[6]=(x+A)*N,r[7]=0,r[8]=(T+C)*O,r[9]=(x-A)*O,r[10]=(1-(g+M))*O,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const l=this.determinant();if(l===0)return a.set(1,1,1),n.identity(),this;let c=zo.set(r[0],r[1],r[2]).length();const f=zo.set(r[4],r[5],r[6]).length(),p=zo.set(r[8],r[9],r[10]).length();l<0&&(c=-c),Sa.copy(this);const d=1/c,_=1/f,v=1/p;return Sa.elements[0]*=d,Sa.elements[1]*=d,Sa.elements[2]*=d,Sa.elements[4]*=_,Sa.elements[5]*=_,Sa.elements[6]*=_,Sa.elements[8]*=v,Sa.elements[9]*=v,Sa.elements[10]*=v,n.setFromRotationMatrix(Sa),a.x=c,a.y=f,a.z=p,this}makePerspective(t,n,a,r,l,c,f=Ia,p=!1){const d=this.elements,_=2*l/(n-t),v=2*l/(a-r),g=(n+t)/(n-t),S=(a+r)/(a-r);let T,M;if(p)T=l/(c-l),M=c*l/(c-l);else if(f===Ia)T=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Du)T=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,r,l,c,f=Ia,p=!1){const d=this.elements,_=2/(n-t),v=2/(a-r),g=-(n+t)/(n-t),S=-(a+r)/(a-r);let T,M;if(p)T=1/(c-l),M=c/(c-l);else if(f===Ia)T=-2/(c-l),M=-(c+l)/(c-l);else if(f===Du)T=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};nh.prototype.isMatrix4=!0;let hn=nh;const zo=new Z,Sa=new hn,sE=new Z(0,0,0),rE=new Z(1,1,1),qs=new Z,Qc=new Z,Fi=new Z,oS=new hn,lS=new _l;class vs{constructor(t=0,n=0,a=0,r=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,l=r[0],c=r[4],f=r[8],p=r[1],d=r[5],_=r[9],v=r[2],g=r[6],S=r[10];switch(n){case"XYZ":this._y=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ne(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return oS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oS,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return lS.setFromEuler(this),this.setFromQuaternion(lS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oE=0;const uS=new Z,Io=new _l,ls=new hn,Jc=new Z,lu=new Z,lE=new Z,uE=new _l,cS=new Z(1,0,0),fS=new Z(0,1,0),hS=new Z(0,0,1),dS={type:"added"},cE={type:"removed"},Bo={type:"childadded",child:null},Dp={type:"childremoved",child:null};class Vn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Fu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const t=new Z,n=new vs,a=new _l,r=new Z(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new hn},normalMatrix:{value:new _e}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Io.setFromAxisAngle(t,n),this.quaternion.multiply(Io),this}rotateOnWorldAxis(t,n){return Io.setFromAxisAngle(t,n),this.quaternion.premultiply(Io),this}rotateX(t){return this.rotateOnAxis(cS,t)}rotateY(t){return this.rotateOnAxis(fS,t)}rotateZ(t){return this.rotateOnAxis(hS,t)}translateOnAxis(t,n){return uS.copy(t).applyQuaternion(this.quaternion),this.position.add(uS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(cS,t)}translateY(t){return this.translateOnAxis(fS,t)}translateZ(t){return this.translateOnAxis(hS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Jc.copy(t):Jc.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),lu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(lu,Jc,this.up):ls.lookAt(Jc,lu,this.up),this.quaternion.setFromRotationMatrix(ls),r&&(ls.extractRotation(r.matrixWorld),Io.setFromRotationMatrix(ls),this.quaternion.premultiply(Io.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dS),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(cE),Dp.child=t,this.dispatchEvent(Dp),Dp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dS),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lu,t,lE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lu,uE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,r=t.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*r,l[13]+=a-l[1]*n-l[5]*a-l[9]*r,l[14]+=r-l[2]*n-l[6]*a-l[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const v=p[d];l(t.shapes,v)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),v=c(t.shapes),g=c(t.skeletons),S=c(t.animations),T=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),T.length>0&&(a.nodes=T)}return a.object=r,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}Vn.DEFAULT_UP=new Z(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oa extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fE={type:"move"};class Up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const M of t.hand.values()){const x=n.getJointPose(M,a),y=this._getHandJoint(d,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,T=.005;d.inputState.pinching&&g>S+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=S-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(fE)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Oa;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Vy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},$c={h:0,s:0,l:0};function Lp(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class ye{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ua){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Le.workingColorSpace){return this.r=t,this.g=n,this.b=a,Le.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Le.workingColorSpace){if(t=Jb(t,1),n=Ne(n,0,1),a=Ne(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Lp(c,l,t+1/3),this.g=Lp(c,l,t),this.b=Lp(c,l,t-1/3)}return Le.colorSpaceToWorking(this,r),this}setStyle(t,n=ua){function a(l){l!==void 0&&parseFloat(l)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:fe("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ua){const a=Vy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=nl(t.r),this.g=nl(t.g),this.b=nl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ua){return Le.workingToColorSpace(ai.copy(this),t),Math.round(Ne(ai.r*255,0,255))*65536+Math.round(Ne(ai.g*255,0,255))*256+Math.round(Ne(ai.b*255,0,255))}getHexString(t=ua){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Le.workingColorSpace){Le.workingToColorSpace(ai.copy(this),n);const a=ai.r,r=ai.g,l=ai.b,c=Math.max(a,r,l),f=Math.min(a,r,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const v=c-f;switch(d=_<=.5?v/(c+f):v/(2-c-f),c){case a:p=(r-l)/v+(r<l?6:0);break;case r:p=(l-a)/v+2;break;case l:p=(a-r)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Le.workingColorSpace){return Le.workingToColorSpace(ai.copy(this),n),t.r=ai.r,t.g=ai.g,t.b=ai.b,t}getStyle(t=ua){Le.workingToColorSpace(ai.copy(this),t);const n=ai.r,a=ai.g,r=ai.b;return t!==ua?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(Ys),this.setHSL(Ys.h+t,Ys.s+n,Ys.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ys),t.getHSL($c);const a=Ep(Ys.h,$c.h,n),r=Ep(Ys.s,$c.s,n),l=Ep(Ys.l,$c.l,n);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ai=new ye;ye.NAMES=Vy;class Mu{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=n}clone(){return new Mu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hE extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ya=new Z,us=new Z,Np=new Z,cs=new Z,Fo=new Z,Ho=new Z,pS=new Z,Op=new Z,Pp=new Z,zp=new Z,Ip=new Rn,Bp=new Rn,Fp=new Rn;class ca{constructor(t=new Z,n=new Z,a=new Z){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),ya.subVectors(t,n),r.cross(ya);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,n,a,r,l){ya.subVectors(r,n),us.subVectors(a,n),Np.subVectors(t,n);const c=ya.dot(ya),f=ya.dot(us),p=ya.dot(Np),d=us.dot(us),_=us.dot(Np),v=c*d-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,S=(d*p-f*_)*g,T=(c*_-f*p)*g;return l.set(1-S-T,T,S)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(t,n,a,r,l,c,f,p){return this.getBarycoord(t,n,a,r,cs)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,cs.x),p.addScaledVector(c,cs.y),p.addScaledVector(f,cs.z),p)}static getInterpolatedAttribute(t,n,a,r,l,c){return Ip.setScalar(0),Bp.setScalar(0),Fp.setScalar(0),Ip.fromBufferAttribute(t,n),Bp.fromBufferAttribute(t,a),Fp.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(Ip,l.x),c.addScaledVector(Bp,l.y),c.addScaledVector(Fp,l.z),c}static isFrontFacing(t,n,a,r){return ya.subVectors(a,n),us.subVectors(t,n),ya.cross(us).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ya.subVectors(this.c,this.b),us.subVectors(this.a,this.b),ya.cross(us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ca.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ca.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,l){return ca.getInterpolation(t,this.a,this.b,this.c,n,a,r,l)}containsPoint(t){return ca.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ca.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,l=this.c;let c,f;Fo.subVectors(r,a),Ho.subVectors(l,a),Op.subVectors(t,a);const p=Fo.dot(Op),d=Ho.dot(Op);if(p<=0&&d<=0)return n.copy(a);Pp.subVectors(t,r);const _=Fo.dot(Pp),v=Ho.dot(Pp);if(_>=0&&v<=_)return n.copy(r);const g=p*v-_*d;if(g<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(Fo,c);zp.subVectors(t,l);const S=Fo.dot(zp),T=Ho.dot(zp);if(T>=0&&S<=T)return n.copy(l);const M=S*d-p*T;if(M<=0&&d>=0&&T<=0)return f=d/(d-T),n.copy(a).addScaledVector(Ho,f);const x=_*T-S*v;if(x<=0&&v-_>=0&&S-T>=0)return pS.subVectors(l,r),f=(v-_)/(v-_+(S-T)),n.copy(r).addScaledVector(pS,f);const y=1/(x+M+g);return c=M*y,f=g*y,n.copy(a).addScaledVector(Fo,c).addScaledVector(Ho,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Jr{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ma.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ma.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ma.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Ma):Ma.fromBufferAttribute(l,c),Ma.applyMatrix4(t.matrixWorld),this.expandByPoint(Ma);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tf.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),tf.copy(a.boundingBox)),tf.applyMatrix4(t.matrixWorld),this.union(tf)}const r=t.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ma),Ma.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uu),ef.subVectors(this.max,uu),Go.subVectors(t.a,uu),Vo.subVectors(t.b,uu),ko.subVectors(t.c,uu),js.subVectors(Vo,Go),Zs.subVectors(ko,Vo),Nr.subVectors(Go,ko);let n=[0,-js.z,js.y,0,-Zs.z,Zs.y,0,-Nr.z,Nr.y,js.z,0,-js.x,Zs.z,0,-Zs.x,Nr.z,0,-Nr.x,-js.y,js.x,0,-Zs.y,Zs.x,0,-Nr.y,Nr.x,0];return!Hp(n,Go,Vo,ko,ef)||(n=[1,0,0,0,1,0,0,0,1],!Hp(n,Go,Vo,ko,ef))?!1:(nf.crossVectors(js,Zs),n=[nf.x,nf.y,nf.z],Hp(n,Go,Vo,ko,ef))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ma).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ma).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fs=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ma=new Z,tf=new Jr,Go=new Z,Vo=new Z,ko=new Z,js=new Z,Zs=new Z,Nr=new Z,uu=new Z,ef=new Z,nf=new Z,Or=new Z;function Hp(o,t,n,a,r){for(let l=0,c=o.length-3;l<=c;l+=3){Or.fromArray(o,l);const f=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),p=t.dot(Or),d=n.dot(Or),_=a.dot(Or);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const In=new Z,af=new pe;let dE=0;class ji extends Qr{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=tS,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)af.fromBufferAttribute(this,n),af.applyMatrix3(t),this.setXY(n,af.x,af.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyMatrix3(t),this.setXYZ(n,In.x,In.y,In.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyMatrix4(t),this.setXYZ(n,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyNormalMatrix(t),this.setXYZ(n,In.x,In.y,In.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.transformDirection(t),this.setXYZ(n,In.x,In.y,In.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=ou(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Si(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ou(n,this.array)),n}setX(t,n){return this.normalized&&(n=Si(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ou(n,this.array)),n}setY(t,n){return this.normalized&&(n=Si(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ou(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Si(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ou(n,this.array)),n}setW(t,n){return this.normalized&&(n=Si(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Si(n,this.array),a=Si(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Si(n,this.array),a=Si(a,this.array),r=Si(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,l){return t*=this.itemSize,this.normalized&&(n=Si(n,this.array),a=Si(a,this.array),r=Si(r,this.array),l=Si(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tS&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class ky extends ji{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Xy extends ji{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class dn extends ji{constructor(t,n,a){super(new Float32Array(t),n,a)}}const pE=new Jr,cu=new Z,Gp=new Z;class $r{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):pE.setFromPoints(t).getCenter(a);let r=0;for(let l=0,c=t.length;l<c;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cu.subVectors(t,this.center);const n=cu.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(cu,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cu.copy(t.center).add(Gp)),this.expandByPoint(cu.copy(t.center).sub(Gp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mE=0;const ra=new hn,Vp=new Vn,Xo=new Z,Hi=new Jr,fu=new Jr,qn=new Z;class Fn extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Fu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jb(t)?Xy:ky)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new _e().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ra.makeRotationFromQuaternion(t),this.applyMatrix4(ra),this}rotateX(t){return ra.makeRotationX(t),this.applyMatrix4(ra),this}rotateY(t){return ra.makeRotationY(t),this.applyMatrix4(ra),this}rotateZ(t){return ra.makeRotationZ(t),this.applyMatrix4(ra),this}translate(t,n,a){return ra.makeTranslation(t,n,a),this.applyMatrix4(ra),this}scale(t,n,a){return ra.makeScale(t,n,a),this.applyMatrix4(ra),this}lookAt(t){return Vp.lookAt(t),Vp.updateMatrix(),this.applyMatrix4(Vp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xo).negate(),this.translate(Xo.x,Xo.y,Xo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new dn(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const l=t[r];n.setXYZ(r,l.x,l.y,l.z||0)}t.length>n.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];Hi.setFromBufferAttribute(l),this.morphTargetsRelative?(qn.addVectors(this.boundingBox.min,Hi.min),this.boundingBox.expandByPoint(qn),qn.addVectors(this.boundingBox.max,Hi.max),this.boundingBox.expandByPoint(qn)):(this.boundingBox.expandByPoint(Hi.min),this.boundingBox.expandByPoint(Hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const a=this.boundingSphere.center;if(Hi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];fu.setFromBufferAttribute(f),this.morphTargetsRelative?(qn.addVectors(Hi.min,fu.min),Hi.expandByPoint(qn),qn.addVectors(Hi.max,fu.max),Hi.expandByPoint(qn)):(Hi.expandByPoint(fu.min),Hi.expandByPoint(fu.max))}Hi.getCenter(a);let r=0;for(let l=0,c=t.count;l<c;l++)qn.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(qn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)qn.fromBufferAttribute(f,d),p&&(Xo.fromBufferAttribute(t,d),qn.add(Xo)),r=Math.max(r,a.distanceToSquared(qn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let E=0;E<a.count;E++)f[E]=new Z,p[E]=new Z;const d=new Z,_=new Z,v=new Z,g=new pe,S=new pe,T=new pe,M=new Z,x=new Z;function y(E,U,G){d.fromBufferAttribute(a,E),_.fromBufferAttribute(a,U),v.fromBufferAttribute(a,G),g.fromBufferAttribute(l,E),S.fromBufferAttribute(l,U),T.fromBufferAttribute(l,G),_.sub(d),v.sub(d),S.sub(g),T.sub(g);const H=1/(S.x*T.y-T.x*S.y);isFinite(H)&&(M.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(H),x.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(H),f[E].add(M),f[U].add(M),f[G].add(M),p[E].add(x),p[U].add(x),p[G].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,U=A.length;E<U;++E){const G=A[E],H=G.start,W=G.count;for(let nt=H,ot=H+W;nt<ot;nt+=3)y(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const C=new Z,w=new Z,P=new Z,N=new Z;function O(E){P.fromBufferAttribute(r,E),N.copy(P);const U=f[E];C.copy(U),C.sub(P.multiplyScalar(P.dot(U))).normalize(),w.crossVectors(N,U);const H=w.dot(p[E])<0?-1:1;c.setXYZW(E,C.x,C.y,C.z,H)}for(let E=0,U=A.length;E<U;++E){const G=A[E],H=G.start,W=G.count;for(let nt=H,ot=H+W;nt<ot;nt+=3)O(t.getX(nt+0)),O(t.getX(nt+1)),O(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ji(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const r=new Z,l=new Z,c=new Z,f=new Z,p=new Z,d=new Z,_=new Z,v=new Z;if(t)for(let g=0,S=t.count;g<S;g+=3){const T=t.getX(g+0),M=t.getX(g+1),x=t.getX(g+2);r.fromBufferAttribute(n,T),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),_.subVectors(c,l),v.subVectors(r,l),_.cross(v),f.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,x),f.add(_),p.add(_),d.add(_),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,S=n.count;g<S;g+=3)r.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),_.subVectors(c,l),v.subVectors(r,l),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)qn.fromBufferAttribute(t,n),qn.normalize(),t.setXYZ(n,qn.x,qn.y,qn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,v=f.normalized,g=new d.constructor(p.length*_);let S=0,T=0;for(let M=0,x=p.length;M<x;M++){f.isInterleavedBufferAttribute?S=p[M]*f.data.stride+f.offset:S=p[M]*_;for(let y=0;y<_;y++)g[T++]=d[S++]}return new ji(g,_,v)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,v=d.length;_<v;_++){const g=d[_],S=t(g,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let v=0,g=d.length;v<g;v++){const S=d[v];_.push(S.toJSON(t.data))}_.length>0&&(r[p]=_,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const d in r){const _=r[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],v=l[d];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _E=0;class to extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Fu(),this.name="",this.type="Material",this.blending=tl,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hm,this.blendDst=dm,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$x,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){fe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){fe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==tl&&(a.blending=this.blending),this.side!==lr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==hm&&(a.blendSrc=this.blendSrc),this.blendDst!==dm&&(a.blendDst=this.blendDst),this.blendEquation!==Hr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$x&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Oo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Oo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=r(t.textures),c=r(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const hs=new Z,kp=new Z,sf=new Z,Ks=new Z,Xp=new Z,rf=new Z,Wp=new Z;class ah{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=hs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(hs.copy(this.origin).addScaledVector(this.direction,n),hs.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){kp.copy(t).add(n).multiplyScalar(.5),sf.copy(n).sub(t).normalize(),Ks.copy(this.origin).sub(kp);const l=t.distanceTo(n)*.5,c=-this.direction.dot(sf),f=Ks.dot(this.direction),p=-Ks.dot(sf),d=Ks.lengthSq(),_=Math.abs(1-c*c);let v,g,S,T;if(_>0)if(v=c*p-f,g=c*f-p,T=l*_,v>=0)if(g>=-T)if(g<=T){const M=1/_;v*=M,g*=M,S=v*(v+c*g+2*f)+g*(c*v+g+2*p)+d}else g=l,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;else g=-l,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;else g<=-T?(v=Math.max(0,-(-c*l+f)),g=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+g*(g+2*p)+d):g<=T?(v=0,g=Math.min(Math.max(-l,-p),l),S=g*(g+2*p)+d):(v=Math.max(0,-(c*l+f)),g=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+g*(g+2*p)+d);else g=c>0?-l:l,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(kp).addScaledVector(sf,g),S}intersectSphere(t,n){hs.subVectors(t.center,this.origin);const a=hs.dot(this.direction),r=hs.dot(hs)-a*a,l=t.radius*t.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(a=(t.min.x-g.x)*d,r=(t.max.x-g.x)*d):(a=(t.max.x-g.x)*d,r=(t.min.x-g.x)*d),_>=0?(l=(t.min.y-g.y)*_,c=(t.max.y-g.y)*_):(l=(t.max.y-g.y)*_,c=(t.min.y-g.y)*_),a>c||l>r||((l>a||isNaN(a))&&(a=l),(c<r||isNaN(r))&&(r=c),v>=0?(f=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(f=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,hs)!==null}intersectTriangle(t,n,a,r,l){Xp.subVectors(n,t),rf.subVectors(a,t),Wp.crossVectors(Xp,rf);let c=this.direction.dot(Wp),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Ks.subVectors(this.origin,t);const p=f*this.direction.dot(rf.crossVectors(Ks,rf));if(p<0)return null;const d=f*this.direction.dot(Xp.cross(Ks));if(d<0||p+d>c)return null;const _=-f*Ks.dot(Wp);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class la extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=Ay,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mS=new hn,Pr=new ah,of=new $r,_S=new Z,lf=new Z,uf=new Z,cf=new Z,qp=new Z,ff=new Z,gS=new Z,hf=new Z;class cn extends Vn{constructor(t=new Fn,n=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){ff.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],v=l[p];_!==0&&(qp.fromBufferAttribute(v,t),c?ff.addScaledVector(qp,_):ff.addScaledVector(qp.sub(n),_))}n.add(ff)}return n}raycast(t,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),of.copy(a.boundingSphere),of.applyMatrix4(l),Pr.copy(t.ray).recast(t.near),!(of.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(of,_S)===null||Pr.origin.distanceToSquared(_S)>(t.far-t.near)**2))&&(mS.copy(l).invert(),Pr.copy(t.ray).applyMatrix4(mS),!(a.boundingBox!==null&&Pr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Pr)))}_computeIntersections(t,n,a){let r;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,M=g.length;T<M;T++){const x=g[T],y=c[x.materialIndex],A=Math.max(x.start,S.start),C=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let w=A,P=C;w<P;w+=3){const N=f.getX(w),O=f.getX(w+1),E=f.getX(w+2);r=df(this,y,t,a,d,_,v,N,O,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const T=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let x=T,y=M;x<y;x+=3){const A=f.getX(x),C=f.getX(x+1),w=f.getX(x+2);r=df(this,c,t,a,d,_,v,A,C,w),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,M=g.length;T<M;T++){const x=g[T],y=c[x.materialIndex],A=Math.max(x.start,S.start),C=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let w=A,P=C;w<P;w+=3){const N=w,O=w+1,E=w+2;r=df(this,y,t,a,d,_,v,N,O,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const T=Math.max(0,S.start),M=Math.min(p.count,S.start+S.count);for(let x=T,y=M;x<y;x+=3){const A=x,C=x+1,w=x+2;r=df(this,c,t,a,d,_,v,A,C,w),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function gE(o,t,n,a,r,l,c,f){let p;if(t.side===Ti?p=a.intersectTriangle(c,l,r,!0,f):p=a.intersectTriangle(r,l,c,t.side===lr,f),p===null)return null;hf.copy(f),hf.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(hf);return d<n.near||d>n.far?null:{distance:d,point:hf.clone(),object:o}}function df(o,t,n,a,r,l,c,f,p,d){o.getVertexPosition(f,lf),o.getVertexPosition(p,uf),o.getVertexPosition(d,cf);const _=gE(o,t,n,a,lf,uf,cf,gS);if(_){const v=new Z;ca.getBarycoord(gS,lf,uf,cf,v),r&&(_.uv=ca.getInterpolatedAttribute(r,f,p,d,v,new pe)),l&&(_.uv1=ca.getInterpolatedAttribute(l,f,p,d,v,new pe)),c&&(_.normal=ca.getInterpolatedAttribute(c,f,p,d,v,new Z),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new Z,materialIndex:0};ca.getNormal(lf,uf,cf,g.normal),_.face=g,_.barycoord=v}return _}class Wy extends hi{constructor(t=null,n=1,a=1,r,l,c,f,p,d=Jn,_=Jn,v,g){super(null,c,f,p,d,_,r,l,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vS extends ji{constructor(t,n,a,r=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wo=new hn,xS=new hn,pf=[],SS=new Jr,vE=new hn,hu=new cn,du=new $r;class yS extends cn{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new vS(new Float32Array(a*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,vE)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Jr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Wo),SS.copy(t.boundingBox).applyMatrix4(Wo),this.boundingBox.union(SS)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new $r),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Wo),du.copy(t.boundingSphere).applyMatrix4(Wo),this.boundingSphere.union(du)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,l=a.length+1,c=t*l+1;for(let f=0;f<a.length;f++)a[f]=r[c+f]}raycast(t,n){const a=this.matrixWorld,r=this.count;if(hu.geometry=this.geometry,hu.material=this.material,hu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),du.copy(this.boundingSphere),du.applyMatrix4(a),t.ray.intersectsSphere(du)!==!1))for(let l=0;l<r;l++){this.getMatrixAt(l,Wo),xS.multiplyMatrices(a,Wo),hu.matrixWorld=xS,hu.raycast(t,pf);for(let c=0,f=pf.length;c<f;c++){const p=pf[c];p.instanceId=l,p.object=this,n.push(p)}pf.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new vS(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new Wy(new Float32Array(r*this.count),r,this.count,A0,Ta));const l=this.morphTexture.source.data.data;let c=0;for(let d=0;d<a.length;d++)c+=a[d];const f=this.geometry.morphTargetsRelative?1:1-c,p=r*t;return l[p]=f,l.set(a,p+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yp=new Z,xE=new Z,SE=new _e;class $s{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=Yp.subVectors(a,n).cross(xE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const r=t.delta(Yp),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return a===!0&&(c<0||c>1)?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||SE.getNormalMatrix(t),r=this.coplanarPoint(Yp).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new $r,yE=new pe(.5,.5),mf=new Z;class O0{constructor(t=new $s,n=new $s,a=new $s,r=new $s,l=new $s,c=new $s){this.planes=[t,n,a,r,l,c]}set(t,n,a,r,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ia,a=!1){const r=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],v=l[5],g=l[6],S=l[7],T=l[8],M=l[9],x=l[10],y=l[11],A=l[12],C=l[13],w=l[14],P=l[15];if(r[0].setComponents(d-c,S-_,y-T,P-A).normalize(),r[1].setComponents(d+c,S+_,y+T,P+A).normalize(),r[2].setComponents(d+f,S+v,y+M,P+C).normalize(),r[3].setComponents(d-f,S-v,y-M,P-C).normalize(),a)r[4].setComponents(p,g,x,w).normalize(),r[5].setComponents(d-p,S-g,y-x,P-w).normalize();else if(r[4].setComponents(d-p,S-g,y-x,P-w).normalize(),n===Ia)r[5].setComponents(d+p,S+g,y+x,P+w).normalize();else if(n===Du)r[5].setComponents(p,g,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(t){zr.center.set(0,0,0);const n=yE.distanceTo(t.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(t.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(mf.x=r.normal.x>0?t.max.x:t.min.x,mf.y=r.normal.y>0?t.max.y:t.min.y,mf.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(mf)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ko extends to{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qf=new Z,Yf=new Z,MS=new hn,pu=new ah,_f=new $r,jp=new Z,TS=new Z;class qy extends Vn{constructor(t=new Fn,n=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let r=1,l=n.count;r<l;r++)qf.fromBufferAttribute(n,r-1),Yf.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=qf.distanceTo(Yf);t.setAttribute("lineDistance",new dn(a,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,r=this.matrixWorld,l=t.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),_f.copy(a.boundingSphere),_f.applyMatrix4(r),_f.radius+=l,t.ray.intersectsSphere(_f)===!1)return;MS.copy(r).invert(),pu.copy(t.ray).applyMatrix4(MS);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const S=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let M=S,x=T-1;M<x;M+=d){const y=_.getX(M),A=_.getX(M+1),C=gf(this,t,pu,p,y,A,M);C&&n.push(C)}if(this.isLineLoop){const M=_.getX(T-1),x=_.getX(S),y=gf(this,t,pu,p,M,x,T-1);y&&n.push(y)}}else{const S=Math.max(0,c.start),T=Math.min(g.count,c.start+c.count);for(let M=S,x=T-1;M<x;M+=d){const y=gf(this,t,pu,p,M,M+1,M);y&&n.push(y)}if(this.isLineLoop){const M=gf(this,t,pu,p,T-1,S,T-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function gf(o,t,n,a,r,l,c){const f=o.geometry.attributes.position;if(qf.fromBufferAttribute(f,r),Yf.fromBufferAttribute(f,l),n.distanceSqToSegment(qf,Yf,jp,TS)>a)return;jp.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(jp);if(!(d<t.near||d>t.far))return{distance:d,point:TS.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const bS=new Z,ES=new Z;class vf extends qy{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let r=0,l=n.count;r<l;r+=2)bS.fromBufferAttribute(n,r),ES.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+bS.distanceTo(ES);t.setAttribute("lineDistance",new dn(a,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yy extends to{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const AS=new hn,n0=new ah,xf=new $r,Sf=new Z;class RS extends Vn{constructor(t=new Fn,n=new Yy){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,r=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),xf.copy(a.boundingSphere),xf.applyMatrix4(r),xf.radius+=l,t.ray.intersectsSphere(xf)===!1)return;AS.copy(r).invert(),n0.copy(t.ray).applyMatrix4(AS);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,v=a.attributes.position;if(d!==null){const g=Math.max(0,c.start),S=Math.min(d.count,c.start+c.count);for(let T=g,M=S;T<M;T++){const x=d.getX(T);Sf.fromBufferAttribute(v,x),wS(Sf,x,p,r,t,n,this)}}else{const g=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let T=g,M=S;T<M;T++)Sf.fromBufferAttribute(v,T),wS(Sf,T,p,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function wS(o,t,n,a,r,l,c){const f=n0.distanceSqToPoint(o);if(f<n){const p=new Z;n0.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class jy extends hi{constructor(t=[],n=Zr,a,r,l,c,f,p,d,_){super(t,n,a,r,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ll extends hi{constructor(t,n,a=Ga,r,l,c,f=Jn,p=Jn,d,_=gs,v=1){if(_!==gs&&_!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,r,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new L0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ME extends ll{constructor(t,n=Ga,a=Zr,r,l,c=Jn,f=Jn,p,d=gs){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,a,r,l,c,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Zy extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class si extends Fn{constructor(t=1,n=1,a=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,a,n,t,c,l,0),T("z","y","x",1,-1,a,n,-t,c,l,1),T("x","z","y",1,1,t,a,n,r,c,2),T("x","z","y",1,-1,t,a,-n,r,c,3),T("x","y","z",1,-1,t,n,a,r,l,4),T("x","y","z",-1,-1,t,n,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new dn(d,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(v,2));function T(M,x,y,A,C,w,P,N,O,E,U){const G=w/O,H=P/E,W=w/2,nt=P/2,ot=N/2,X=O+1,I=E+1;let F=0,it=0;const pt=new Z;for(let St=0;St<I;St++){const B=St*H-nt;for(let Q=0;Q<X;Q++){const vt=Q*G-W;pt[M]=vt*A,pt[x]=B*C,pt[y]=ot,d.push(pt.x,pt.y,pt.z),pt[M]=0,pt[x]=0,pt[y]=N>0?1:-1,_.push(pt.x,pt.y,pt.z),v.push(Q/O),v.push(1-St/E),F+=1}}for(let St=0;St<E;St++)for(let B=0;B<O;B++){const Q=g+B+X*St,vt=g+B+X*(St+1),At=g+(B+1)+X*(St+1),Ut=g+(B+1)+X*St;p.push(Q,vt,Ut),p.push(vt,At,Ut),it+=6}f.addGroup(S,it,U),S+=it,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class er extends Fn{constructor(t=1,n=1,a=1,r=32,l=1,c=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:p};const d=this;r=Math.floor(r),l=Math.floor(l);const _=[],v=[],g=[],S=[];let T=0;const M=[],x=a/2;let y=0;A(),c===!1&&(t>0&&C(!0),n>0&&C(!1)),this.setIndex(_),this.setAttribute("position",new dn(v,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(S,2));function A(){const w=new Z,P=new Z;let N=0;const O=(n-t)/a;for(let E=0;E<=l;E++){const U=[],G=E/l,H=G*(n-t)+t;for(let W=0;W<=r;W++){const nt=W/r,ot=nt*p+f,X=Math.sin(ot),I=Math.cos(ot);P.x=H*X,P.y=-G*a+x,P.z=H*I,v.push(P.x,P.y,P.z),w.set(X,O,I).normalize(),g.push(w.x,w.y,w.z),S.push(nt,1-G),U.push(T++)}M.push(U)}for(let E=0;E<r;E++)for(let U=0;U<l;U++){const G=M[U][E],H=M[U+1][E],W=M[U+1][E+1],nt=M[U][E+1];(t>0||U!==0)&&(_.push(G,H,nt),N+=3),(n>0||U!==l-1)&&(_.push(H,W,nt),N+=3)}d.addGroup(y,N,0),y+=N}function C(w){const P=T,N=new pe,O=new Z;let E=0;const U=w===!0?t:n,G=w===!0?1:-1;for(let W=1;W<=r;W++)v.push(0,x*G,0),g.push(0,G,0),S.push(.5,.5),T++;const H=T;for(let W=0;W<=r;W++){const ot=W/r*p+f,X=Math.cos(ot),I=Math.sin(ot);O.x=U*I,O.y=x*G,O.z=U*X,v.push(O.x,O.y,O.z),g.push(0,G,0),N.x=X*.5+.5,N.y=I*.5*G+.5,S.push(N.x,N.y),T++}for(let W=0;W<r;W++){const nt=P+W,ot=H+W;w===!0?_.push(ot,ot+1,nt):_.push(ot+1,ot,nt),E+=3}d.addGroup(y,E,w===!0?1:2),y+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class P0 extends er{constructor(t=1,n=1,a=32,r=1,l=!1,c=0,f=Math.PI*2){super(0,t,n,a,r,l,c,f),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:r,openEnded:l,thetaStart:c,thetaLength:f}}static fromJSON(t){return new P0(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sh extends Fn{constructor(t=[],n=[],a=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:r};const l=[],c=[];f(r),d(a),_(),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(l.slice(),3)),this.setAttribute("uv",new dn(c,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function f(A){const C=new Z,w=new Z,P=new Z;for(let N=0;N<n.length;N+=3)S(n[N+0],C),S(n[N+1],w),S(n[N+2],P),p(C,w,P,A)}function p(A,C,w,P){const N=P+1,O=[];for(let E=0;E<=N;E++){O[E]=[];const U=A.clone().lerp(w,E/N),G=C.clone().lerp(w,E/N),H=N-E;for(let W=0;W<=H;W++)W===0&&E===N?O[E][W]=U:O[E][W]=U.clone().lerp(G,W/H)}for(let E=0;E<N;E++)for(let U=0;U<2*(N-E)-1;U++){const G=Math.floor(U/2);U%2===0?(g(O[E][G+1]),g(O[E+1][G]),g(O[E][G])):(g(O[E][G+1]),g(O[E+1][G+1]),g(O[E+1][G]))}}function d(A){const C=new Z;for(let w=0;w<l.length;w+=3)C.x=l[w+0],C.y=l[w+1],C.z=l[w+2],C.normalize().multiplyScalar(A),l[w+0]=C.x,l[w+1]=C.y,l[w+2]=C.z}function _(){const A=new Z;for(let C=0;C<l.length;C+=3){A.x=l[C+0],A.y=l[C+1],A.z=l[C+2];const w=x(A)/2/Math.PI+.5,P=y(A)/Math.PI+.5;c.push(w,1-P)}T(),v()}function v(){for(let A=0;A<c.length;A+=6){const C=c[A+0],w=c[A+2],P=c[A+4],N=Math.max(C,w,P),O=Math.min(C,w,P);N>.9&&O<.1&&(C<.2&&(c[A+0]+=1),w<.2&&(c[A+2]+=1),P<.2&&(c[A+4]+=1))}}function g(A){l.push(A.x,A.y,A.z)}function S(A,C){const w=A*3;C.x=t[w+0],C.y=t[w+1],C.z=t[w+2]}function T(){const A=new Z,C=new Z,w=new Z,P=new Z,N=new pe,O=new pe,E=new pe;for(let U=0,G=0;U<l.length;U+=9,G+=6){A.set(l[U+0],l[U+1],l[U+2]),C.set(l[U+3],l[U+4],l[U+5]),w.set(l[U+6],l[U+7],l[U+8]),N.set(c[G+0],c[G+1]),O.set(c[G+2],c[G+3]),E.set(c[G+4],c[G+5]),P.copy(A).add(C).add(w).divideScalar(3);const H=x(P);M(N,G+0,A,H),M(O,G+2,C,H),M(E,G+4,w,H)}}function M(A,C,w,P){P<0&&A.x===1&&(c[C]=A.x-1),w.x===0&&w.z===0&&(c[C]=P/2/Math.PI+.5)}function x(A){return Math.atan2(A.z,-A.x)}function y(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sh(t.vertices,t.indices,t.radius,t.detail)}}const yf=new Z,Mf=new Z,Zp=new Z,Tf=new ca;class bf extends Fn{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){const r=Math.pow(10,4),l=Math.cos(Pf*n),c=t.getIndex(),f=t.getAttribute("position"),p=c?c.count:f.count,d=[0,0,0],_=["a","b","c"],v=new Array(3),g={},S=[];for(let T=0;T<p;T+=3){c?(d[0]=c.getX(T),d[1]=c.getX(T+1),d[2]=c.getX(T+2)):(d[0]=T,d[1]=T+1,d[2]=T+2);const{a:M,b:x,c:y}=Tf;if(M.fromBufferAttribute(f,d[0]),x.fromBufferAttribute(f,d[1]),y.fromBufferAttribute(f,d[2]),Tf.getNormal(Zp),v[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,v[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,v[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let A=0;A<3;A++){const C=(A+1)%3,w=v[A],P=v[C],N=Tf[_[A]],O=Tf[_[C]],E=`${w}_${P}`,U=`${P}_${w}`;U in g&&g[U]?(Zp.dot(g[U].normal)<=l&&(S.push(N.x,N.y,N.z),S.push(O.x,O.y,O.z)),g[U]=null):E in g||(g[E]={index0:d[A],index1:d[C],normal:Zp.clone()})}}for(const T in g)if(g[T]){const{index0:M,index1:x}=g[T];yf.fromBufferAttribute(f,M),Mf.fromBufferAttribute(f,x),S.push(yf.x,yf.y,yf.z),S.push(Mf.x,Mf.y,Mf.z)}this.setAttribute("position",new dn(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class z0 extends sh{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,r=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,l,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new z0(t.radius,t.detail)}}class I0 extends sh{constructor(t=1,n=0){const a=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(a,r,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new I0(t.radius,t.detail)}}class rh extends Fn{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(r),d=f+1,_=p+1,v=t/f,g=n/p,S=[],T=[],M=[],x=[];for(let y=0;y<_;y++){const A=y*g-c;for(let C=0;C<d;C++){const w=C*v-l;T.push(w,-A,0),M.push(0,0,1),x.push(C/f),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let A=0;A<f;A++){const C=A+d*y,w=A+d*(y+1),P=A+1+d*(y+1),N=A+1+d*y;S.push(C,w,N),S.push(w,P,N)}this.setIndex(S),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(M,3)),this.setAttribute("uv",new dn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tu extends Fn{constructor(t=.5,n=1,a=32,r=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:a,phiSegments:r,thetaStart:l,thetaLength:c},a=Math.max(3,a),r=Math.max(1,r);const f=[],p=[],d=[],_=[];let v=t;const g=(n-t)/r,S=new Z,T=new pe;for(let M=0;M<=r;M++){for(let x=0;x<=a;x++){const y=l+x/a*c;S.x=v*Math.cos(y),S.y=v*Math.sin(y),p.push(S.x,S.y,S.z),d.push(0,0,1),T.x=(S.x/n+1)/2,T.y=(S.y/n+1)/2,_.push(T.x,T.y)}v+=g}for(let M=0;M<r;M++){const x=M*(a+1);for(let y=0;y<a;y++){const A=y+x,C=A,w=A+a+1,P=A+a+2,N=A+1;f.push(C,w,N),f.push(w,P,N)}}this.setIndex(f),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bu extends Fn{constructor(t=1,n=.4,a=12,r=48,l=Math.PI*2,c=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:r,arc:l,thetaStart:c,thetaLength:f},a=Math.floor(a),r=Math.floor(r);const p=[],d=[],_=[],v=[],g=new Z,S=new Z,T=new Z;for(let M=0;M<=a;M++){const x=c+M/a*f;for(let y=0;y<=r;y++){const A=y/r*l;S.x=(t+n*Math.cos(x))*Math.cos(A),S.y=(t+n*Math.cos(x))*Math.sin(A),S.z=n*Math.sin(x),d.push(S.x,S.y,S.z),g.x=t*Math.cos(A),g.y=t*Math.sin(A),T.subVectors(S,g).normalize(),_.push(T.x,T.y,T.z),v.push(y/r),v.push(M/a)}}for(let M=1;M<=a;M++)for(let x=1;x<=r;x++){const y=(r+1)*M+x-1,A=(r+1)*(M-1)+x-1,C=(r+1)*(M-1)+x,w=(r+1)*M+x;p.push(y,A,w),p.push(A,C,w)}this.setIndex(p),this.setAttribute("position",new dn(d,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ul(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const r=o[n][a];if(CS(r))r.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone();else if(Array.isArray(r))if(CS(r[0])){const l=[];for(let c=0,f=r.length;c<f;c++)l[c]=r[c].clone();t[n][a]=l}else t[n][a]=r.slice();else t[n][a]=r}}return t}function fi(o){const t={};for(let n=0;n<o.length;n++){const a=ul(o[n]);for(const r in a)t[r]=a[r]}return t}function CS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function TE(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function Ky(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const jf={clone:ul,merge:fi};var bE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bE,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ul(t.uniforms),this.uniformsGroups=TE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?n.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[r]={type:"m4",value:c.toArray()}:n.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class AE extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Da extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$m,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class RE extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wE extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class B0 extends Vn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Kp=new hn,DS=new Z,US=new Z;class Qy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new O0,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;DS.setFromMatrixPosition(t.matrixWorld),n.position.copy(DS),US.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(US),n.updateMatrixWorld(),Kp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kp,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Du||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Kp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ef=new Z,Af=new _l,Ua=new Z;class Jy extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ef,Af,Ua),Ua.x===1&&Ua.y===1&&Ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ef,Af,Ua.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Ef,Af,Ua),Ua.x===1&&Ua.y===1&&Ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ef,Af,Ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qs=new Z,LS=new pe,NS=new pe;class Vi extends Jy{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=e0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return e0*2*Math.atan(Math.tan(Pf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qs.x,Qs.y).multiplyScalar(-t/Qs.z),Qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Qs.x,Qs.y).multiplyScalar(-t/Qs.z)}getViewSize(t,n){return this.getViewBounds(t,LS,NS),n.subVectors(NS,LS)}setViewOffset(t,n,a,r,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Pf*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*r/p,n-=c.offsetY*a/d,r*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class CE extends Qy{constructor(){super(new Vi(90,1,.5,500)),this.isPointLightShadow=!0}}class Js extends B0{constructor(t,n,a=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new CE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class oh extends Jy{constructor(t=-1,n=1,a=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DE extends Qy{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class UE extends B0{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new DE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class LE extends B0{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const qo=-90,Yo=1;class NE extends Vn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vi(qo,Yo,t,n);r.layers=this.layers,this.add(r);const l=new Vi(qo,Yo,t,n);l.layers=this.layers,this.add(l);const c=new Vi(qo,Yo,t,n);c.layers=this.layers,this.add(c);const f=new Vi(qo,Yo,t,n);f.layers=this.layers,this.add(f);const p=new Vi(qo,Yo,t,n);p.layers=this.layers,this.add(p);const d=new Vi(qo,Yo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===Ia)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Du)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(a,0,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(a,1,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,2,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,S),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class OE extends Vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class PE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=zE.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function zE(){this._document.hidden===!1&&this.reset()}const OS=new hn;class IE{constructor(t,n,a=0,r=1/0){this.ray=new ah(t,n),this.near=a,this.far=r,this.camera=null,this.layers=new N0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ie("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return OS.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(OS),this}intersectObject(t,n=!0,a=[]){return i0(t,this,a,n),a.sort(PS),a}intersectObjects(t,n=!0,a=[]){for(let r=0,l=t.length;r<l;r++)i0(t[r],this,a,n);return a.sort(PS),a}}function PS(o,t){return o.distance-t.distance}function i0(o,t,n,a){let r=!0;if(o.layers.test(t.layers)&&o.raycast(t,n)===!1&&(r=!1),r===!0&&a===!0){const l=o.children;for(let c=0,f=l.length;c<f;c++)i0(l[c],t,n,!0)}}class BE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const o_=class o_{constructor(t,n,a,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,r){const l=this.elements;return l[0]=t,l[2]=n,l[1]=a,l[3]=r,this}};o_.prototype.isMatrix2=!0;let zS=o_;function IS(o,t,n,a){const r=FE(a);switch(n){case By:return o*t;case A0:return o*t/r.components*r.byteLength;case R0:return o*t/r.components*r.byteLength;case Kr:return o*t*2/r.components*r.byteLength;case w0:return o*t*2/r.components*r.byteLength;case Fy:return o*t*3/r.components*r.byteLength;case ba:return o*t*4/r.components*r.byteLength;case C0:return o*t*4/r.components*r.byteLength;case Uf:case Lf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nf:case Of:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bm:case Am:return Math.max(o,16)*Math.max(t,8)/4;case Tm:case Em:return Math.max(o,8)*Math.max(t,8)/2;case Rm:case wm:case Dm:case Um:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Cm:case Gf:case Lm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Om:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Pm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case zm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Im:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Bm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Fm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Hm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Gm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Vm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case km:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Xm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Wm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case qm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ym:case jm:case Zm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Km:case Qm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vf:case Jm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FE(o){switch(o){case ki:case Oy:return{byteLength:1,components:1};case wu:case Py:case Yi:return{byteLength:2,components:1};case b0:case E0:return{byteLength:2,components:4};case Ga:case T0:case Ta:return{byteLength:4,components:1};case zy:case Iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:y0}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=y0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $y(){let o=null,t=!1,n=null,a=null;function r(l,c){n(l,c),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&o!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function HE(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,v=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=o.SHORT;else if(d instanceof Uint32Array)S=o.UNSIGNED_INT;else if(d instanceof Int32Array)S=o.INT;else if(d instanceof Int8Array)S=o.BYTE;else if(d instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,p,d){const _=p.array,v=p.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,_);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],M=v[S];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++g,v[g]=M)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const M=v[S];o.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:r,remove:l,update:c}}var GE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,KE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$E=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gA="gl_FragColor = linearToOutputTexel( gl_FragColor );",vA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,SA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,NA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,XA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_R=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Te={alphahash_fragment:GE,alphahash_pars_fragment:VE,alphamap_fragment:kE,alphamap_pars_fragment:XE,alphatest_fragment:WE,alphatest_pars_fragment:qE,aomap_fragment:YE,aomap_pars_fragment:jE,batching_pars_vertex:ZE,batching_vertex:KE,begin_vertex:QE,beginnormal_vertex:JE,bsdfs:$E,iridescence_fragment:tA,bumpmap_pars_fragment:eA,clipping_planes_fragment:nA,clipping_planes_pars_fragment:iA,clipping_planes_pars_vertex:aA,clipping_planes_vertex:sA,color_fragment:rA,color_pars_fragment:oA,color_pars_vertex:lA,color_vertex:uA,common:cA,cube_uv_reflection_fragment:fA,defaultnormal_vertex:hA,displacementmap_pars_vertex:dA,displacementmap_vertex:pA,emissivemap_fragment:mA,emissivemap_pars_fragment:_A,colorspace_fragment:gA,colorspace_pars_fragment:vA,envmap_fragment:xA,envmap_common_pars_fragment:SA,envmap_pars_fragment:yA,envmap_pars_vertex:MA,envmap_physical_pars_fragment:NA,envmap_vertex:TA,fog_vertex:bA,fog_pars_vertex:EA,fog_fragment:AA,fog_pars_fragment:RA,gradientmap_pars_fragment:wA,lightmap_pars_fragment:CA,lights_lambert_fragment:DA,lights_lambert_pars_fragment:UA,lights_pars_begin:LA,lights_toon_fragment:OA,lights_toon_pars_fragment:PA,lights_phong_fragment:zA,lights_phong_pars_fragment:IA,lights_physical_fragment:BA,lights_physical_pars_fragment:FA,lights_fragment_begin:HA,lights_fragment_maps:GA,lights_fragment_end:VA,lightprobes_pars_fragment:kA,logdepthbuf_fragment:XA,logdepthbuf_pars_fragment:WA,logdepthbuf_pars_vertex:qA,logdepthbuf_vertex:YA,map_fragment:jA,map_pars_fragment:ZA,map_particle_fragment:KA,map_particle_pars_fragment:QA,metalnessmap_fragment:JA,metalnessmap_pars_fragment:$A,morphinstance_vertex:t2,morphcolor_vertex:e2,morphnormal_vertex:n2,morphtarget_pars_vertex:i2,morphtarget_vertex:a2,normal_fragment_begin:s2,normal_fragment_maps:r2,normal_pars_fragment:o2,normal_pars_vertex:l2,normal_vertex:u2,normalmap_pars_fragment:c2,clearcoat_normal_fragment_begin:f2,clearcoat_normal_fragment_maps:h2,clearcoat_pars_fragment:d2,iridescence_pars_fragment:p2,opaque_fragment:m2,packing:_2,premultiplied_alpha_fragment:g2,project_vertex:v2,dithering_fragment:x2,dithering_pars_fragment:S2,roughnessmap_fragment:y2,roughnessmap_pars_fragment:M2,shadowmap_pars_fragment:T2,shadowmap_pars_vertex:b2,shadowmap_vertex:E2,shadowmask_pars_fragment:A2,skinbase_vertex:R2,skinning_pars_vertex:w2,skinning_vertex:C2,skinnormal_vertex:D2,specularmap_fragment:U2,specularmap_pars_fragment:L2,tonemapping_fragment:N2,tonemapping_pars_fragment:O2,transmission_fragment:P2,transmission_pars_fragment:z2,uv_pars_fragment:I2,uv_pars_vertex:B2,uv_vertex:F2,worldpos_vertex:H2,background_vert:G2,background_frag:V2,backgroundCube_vert:k2,backgroundCube_frag:X2,cube_vert:W2,cube_frag:q2,depth_vert:Y2,depth_frag:j2,distance_vert:Z2,distance_frag:K2,equirect_vert:Q2,equirect_frag:J2,linedashed_vert:$2,linedashed_frag:tR,meshbasic_vert:eR,meshbasic_frag:nR,meshlambert_vert:iR,meshlambert_frag:aR,meshmatcap_vert:sR,meshmatcap_frag:rR,meshnormal_vert:oR,meshnormal_frag:lR,meshphong_vert:uR,meshphong_frag:cR,meshphysical_vert:fR,meshphysical_frag:hR,meshtoon_vert:dR,meshtoon_frag:pR,points_vert:mR,points_frag:_R,shadow_vert:gR,shadow_frag:vR,sprite_vert:xR,sprite_frag:SR},qt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Pa={basic:{uniforms:fi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:fi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:fi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:fi([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:fi([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:fi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:fi([qt.points,qt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:fi([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:fi([qt.common,qt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:fi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:fi([qt.sprite,qt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:fi([qt.common,qt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:fi([qt.lights,qt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Pa.physical={uniforms:fi([Pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Rf={r:0,b:0,g:0},yR=new hn,tM=new _e;tM.set(-1,0,0,0,1,0,0,0,1);function MR(o,t,n,a,r,l){const c=new ye(0);let f=r===!0?0:1,p,d,_=null,v=0,g=null;function S(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const w=A.backgroundBlurriness>0;C=t.get(C,w)}return C}function T(A){let C=!1;const w=S(A);w===null?x(c,f):w&&w.isColor&&(x(w,1),C=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(o.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(A,C){const w=S(C);w&&(w.isCubeTexture||w.mapping===ih)?(d===void 0&&(d=new cn(new si(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ul(Pa.backgroundCube.uniforms),vertexShader:Pa.backgroundCube.vertexShader,fragmentShader:Pa.backgroundCube.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(yR.makeRotationFromEuler(C.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(tM),d.material.toneMapped=Le.getTransfer(w.colorSpace)!==$e,(_!==w||v!==w.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=w,v=w.version,g=o.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new cn(new rh(2,2),new $n({name:"BackgroundMaterial",uniforms:ul(Pa.background.uniforms),vertexShader:Pa.background.vertexShader,fragmentShader:Pa.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Le.getTransfer(w.colorSpace)!==$e,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=w,v=w.version,g=o.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function x(A,C){A.getRGB(Rf,Ky(o)),n.buffers.color.setClear(Rf.r,Rf.g,Rf.b,C,l)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,C=1){c.set(A),f=C,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,x(c,f)},render:T,addToRenderList:M,dispose:y}}function TR(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=g(null);let l=r,c=!1;function f(H,W,nt,ot,X){let I=!1;const F=v(H,ot,nt,W);l!==F&&(l=F,d(l.object)),I=S(H,ot,nt,X),I&&T(H,ot,nt,X),X!==null&&t.update(X,o.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,w(H,W,nt,ot),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function _(H){return o.deleteVertexArray(H)}function v(H,W,nt,ot){const X=ot.wireframe===!0;let I=a[W.id];I===void 0&&(I={},a[W.id]=I);const F=H.isInstancedMesh===!0?H.id:0;let it=I[F];it===void 0&&(it={},I[F]=it);let pt=it[nt.id];pt===void 0&&(pt={},it[nt.id]=pt);let St=pt[X];return St===void 0&&(St=g(p()),pt[X]=St),St}function g(H){const W=[],nt=[],ot=[];for(let X=0;X<n;X++)W[X]=0,nt[X]=0,ot[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:nt,attributeDivisors:ot,object:H,attributes:{},index:null}}function S(H,W,nt,ot){const X=l.attributes,I=W.attributes;let F=0;const it=nt.getAttributes();for(const pt in it)if(it[pt].location>=0){const B=X[pt];let Q=I[pt];if(Q===void 0&&(pt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),pt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;F++}return l.attributesNum!==F||l.index!==ot}function T(H,W,nt,ot){const X={},I=W.attributes;let F=0;const it=nt.getAttributes();for(const pt in it)if(it[pt].location>=0){let B=I[pt];B===void 0&&(pt==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),pt==="instanceColor"&&H.instanceColor&&(B=H.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),X[pt]=Q,F++}l.attributes=X,l.attributesNum=F,l.index=ot}function M(){const H=l.newAttributes;for(let W=0,nt=H.length;W<nt;W++)H[W]=0}function x(H){y(H,0)}function y(H,W){const nt=l.newAttributes,ot=l.enabledAttributes,X=l.attributeDivisors;nt[H]=1,ot[H]===0&&(o.enableVertexAttribArray(H),ot[H]=1),X[H]!==W&&(o.vertexAttribDivisor(H,W),X[H]=W)}function A(){const H=l.newAttributes,W=l.enabledAttributes;for(let nt=0,ot=W.length;nt<ot;nt++)W[nt]!==H[nt]&&(o.disableVertexAttribArray(nt),W[nt]=0)}function C(H,W,nt,ot,X,I,F){F===!0?o.vertexAttribIPointer(H,W,nt,X,I):o.vertexAttribPointer(H,W,nt,ot,X,I)}function w(H,W,nt,ot){M();const X=ot.attributes,I=nt.getAttributes(),F=W.defaultAttributeValues;for(const it in I){const pt=I[it];if(pt.location>=0){let St=X[it];if(St===void 0&&(it==="instanceMatrix"&&H.instanceMatrix&&(St=H.instanceMatrix),it==="instanceColor"&&H.instanceColor&&(St=H.instanceColor)),St!==void 0){const B=St.normalized,Q=St.itemSize,vt=t.get(St);if(vt===void 0)continue;const At=vt.buffer,Ut=vt.type,at=vt.bytesPerElement,yt=Ut===o.INT||Ut===o.UNSIGNED_INT||St.gpuType===T0;if(St.isInterleavedBufferAttribute){const Tt=St.data,kt=Tt.stride,ie=St.offset;if(Tt.isInstancedInterleavedBuffer){for(let te=0;te<pt.locationSize;te++)y(pt.location+te,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let te=0;te<pt.locationSize;te++)x(pt.location+te);o.bindBuffer(o.ARRAY_BUFFER,At);for(let te=0;te<pt.locationSize;te++)C(pt.location+te,Q/pt.locationSize,Ut,B,kt*at,(ie+Q/pt.locationSize*te)*at,yt)}else{if(St.isInstancedBufferAttribute){for(let Tt=0;Tt<pt.locationSize;Tt++)y(pt.location+Tt,St.meshPerAttribute);H.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Tt=0;Tt<pt.locationSize;Tt++)x(pt.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<pt.locationSize;Tt++)C(pt.location+Tt,Q/pt.locationSize,Ut,B,Q*at,Q/pt.locationSize*Tt*at,yt)}}else if(F!==void 0){const B=F[it];if(B!==void 0)switch(B.length){case 2:o.vertexAttrib2fv(pt.location,B);break;case 3:o.vertexAttrib3fv(pt.location,B);break;case 4:o.vertexAttrib4fv(pt.location,B);break;default:o.vertexAttrib1fv(pt.location,B)}}}}A()}function P(){U();for(const H in a){const W=a[H];for(const nt in W){const ot=W[nt];for(const X in ot){const I=ot[X];for(const F in I)_(I[F].object),delete I[F];delete ot[X]}}delete a[H]}}function N(H){if(a[H.id]===void 0)return;const W=a[H.id];for(const nt in W){const ot=W[nt];for(const X in ot){const I=ot[X];for(const F in I)_(I[F].object),delete I[F];delete ot[X]}}delete a[H.id]}function O(H){for(const W in a){const nt=a[W];for(const ot in nt){const X=nt[ot];if(X[H.id]===void 0)continue;const I=X[H.id];for(const F in I)_(I[F].object),delete I[F];delete X[H.id]}}}function E(H){for(const W in a){const nt=a[W],ot=H.isInstancedMesh===!0?H.id:0,X=nt[ot];if(X!==void 0){for(const I in X){const F=X[I];for(const it in F)_(F[it].object),delete F[it];delete X[I]}delete nt[ot],Object.keys(nt).length===0&&delete a[W]}}}function U(){G(),c=!0,l!==r&&(l=r,d(l.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:U,resetDefaultState:G,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:x,disableUnusedAttributes:A}}function bR(o,t,n){let a;function r(p){a=p}function l(p,d){o.drawArrays(a,p,d),n.update(d,a,1)}function c(p,d,_){_!==0&&(o.drawArraysInstanced(a,p,d,_),n.update(d,a,_))}function f(p,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,_);let g=0;for(let S=0;S<_;S++)g+=d[S];n.update(g,a,1)}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function ER(o,t,n,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(O){return!(O!==ba&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==ki&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ta&&!E)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(fe("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:w,maxSamples:P,samples:N}}function AR(o){const t=this;let n=null,a=0,r=!1,l=!1;const c=new $s,f=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||r;return r=g,a=v.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,M=v.clipIntersection,x=v.clipShadows,y=o.get(v);if(!r||T===null||T.length===0||l&&!x)l?_(null):d();else{const A=l?0:a,C=A*4;let w=y.clippingState||null;p.value=w,w=_(T,g,C,S);for(let P=0;P!==C;++P)w[P]=n[P];y.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(v,g,S,T){const M=v!==null?v.length:0;let x=null;if(M!==0){if(x=p.value,T!==!0||x===null){const y=S+M*4,A=g.matrixWorldInverse;f.getNormalMatrix(A),(x===null||x.length<y)&&(x=new Float32Array(y));for(let C=0,w=S;C!==M;++C,w+=4)c.copy(v[C]).applyMatrix4(A,f),c.normal.toArray(x,w),x[w+3]=c.constant}p.value=x,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}const nr=4,BS=[.125,.215,.35,.446,.526,.582],Gr=20,RR=256,mu=new oh,FS=new ye;let Qp=null,Jp=0,$p=0,tm=!1;const wR=new Z;class HS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,l={}){const{size:c=256,position:f=wR}=l;Qp=this._renderer.getRenderTarget(),Jp=this._renderer.getActiveCubeFace(),$p=this._renderer.getActiveMipmapLevel(),tm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=VS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qp,Jp,$p),this._renderer.xr.enabled=tm,t.scissorTest=!1,jo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Zr||t.mapping===ol?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qp=this._renderer.getRenderTarget(),Jp=this._renderer.getActiveCubeFace(),$p=this._renderer.getActiveMipmapLevel(),tm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Yi,format:ba,colorSpace:kf,depthBuffer:!1},r=GS(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=GS(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CR(l)),this._blurMaterial=UR(l,t,n),this._ggxMaterial=DR(l,t,n)}return r}_compileMaterial(t){const n=new cn(new Fn,t);this._renderer.compile(n,mu)}_sceneToCubeUV(t,n,a,r,l){const p=new Vi(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(FS),v.toneMapping=Ha,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new si,new la({name:"PMREM.Background",side:Ti,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let y=!1;const A=t.background;A?A.isColor&&(x.color.copy(A),t.background=null,y=!0):(x.color.copy(FS),y=!0);for(let C=0;C<6;C++){const w=C%3;w===0?(p.up.set(0,d[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[C],l.y,l.z)):w===1?(p.up.set(0,0,d[C]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[C],l.z)):(p.up.set(0,d[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[C]));const P=this._cubeSize;jo(r,w*P,C>2?P:0,P,P),v.setRenderTarget(r),y&&v.render(M,p),v.render(t,p)}v.toneMapping=S,v.autoClear=g,t.background=A}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Zr||t.mapping===ol;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=VS());const l=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;jo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,mu)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,S=v*g,{_lodMax:T}=this,M=this._sizeLods[a],x=3*M*(a>T-nr?a-T+nr:0),y=4*(this._cubeSize-M);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=T-n,jo(l,x,y,3*M,2*M),r.setRenderTarget(l),r.render(f,mu),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-a,jo(t,x,y,3*M,2*M),r.setRenderTarget(t),r.render(f,mu)}_blur(t,n,a,r,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,r,"latitudinal",l),this._halfBlur(c,t,a,a,r,"longitudinal",l)}_halfBlur(t,n,a,r,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ie("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[r];v.material=d;const g=d.uniforms,S=this._sizeLods[a]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),M=l/T,x=isFinite(l)?1+Math.floor(_*M):Gr;x>Gr&&fe(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Gr}`);const y=[];let A=0;for(let O=0;O<Gr;++O){const E=O/M,U=Math.exp(-E*E/2);y.push(U),O===0?A+=U:O<x&&(A+=2*U)}for(let O=0;O<y.length;O++)y[O]=y[O]/A;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:C}=this;g.dTheta.value=T,g.mipInt.value=C-a;const w=this._sizeLods[r],P=3*w*(r>C-nr?r-C+nr:0),N=4*(this._cubeSize-w);jo(n,P,N,3*w,2*w),p.setRenderTarget(n),p.render(v,mu)}}function CR(o){const t=[],n=[],a=[];let r=o;const l=o-nr+1+BS.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);t.push(f);let p=1/f;c>o-nr?p=BS[c-o+nr-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,M=3,x=2,y=1,A=new Float32Array(M*T*S),C=new Float32Array(x*T*S),w=new Float32Array(y*T*S);for(let N=0;N<S;N++){const O=N%3*2/3-1,E=N>2?0:-1,U=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];A.set(U,M*T*N),C.set(g,x*T*N);const G=[N,N,N,N,N,N];w.set(G,y*T*N)}const P=new Fn;P.setAttribute("position",new ji(A,M)),P.setAttribute("uv",new ji(C,x)),P.setAttribute("faceIndex",new ji(w,y)),a.push(new cn(P,null)),r>nr&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function GS(o,t,n){const a=new bi(o,t,n);return a.texture.mapping=ih,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function jo(o,t,n,a,r){o.viewport.set(t,n,a,r),o.scissor.set(t,n,a,r)}function DR(o,t,n){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function UR(o,t,n){const a=new Float32Array(Gr),r=new Z(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function VS(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function kS(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class eM extends bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new jy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new si(5,5,5),l=new $n({name:"CubemapFromEquirect",uniforms:ul(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Ti,blending:Fa});l.uniforms.tEquirect.value=n;const c=new cn(r,l),f=n.minFilter;return n.minFilter===Vr&&(n.minFilter=oi),new NE(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,r);t.setRenderTarget(l)}}function LR(o){let t=new WeakMap,n=new WeakMap,a=null;function r(g,S=!1){return g==null?null:S?c(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Mp||S===Tp)if(t.has(g)){const T=t.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const M=new eM(T.height);return M.fromEquirectangularTexture(o,g),t.set(g,M),g.addEventListener("dispose",d),f(M.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,T=S===Mp||S===Tp,M=S===Zr||S===ol;if(T||M){let x=n.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new HS(o)),x=T?a.fromEquirectangular(g,x):a.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),x.texture;if(x!==void 0)return x.texture;{const A=g.image;return T&&A&&A.height>0||M&&A&&p(A)?(a===null&&(a=new HS(o)),x=T?a.fromEquirectangular(g):a.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function f(g,S){return S===Mp?g.mapping=Zr:S===Tp&&(g.mapping=ol),g}function p(g){let S=0;const T=6;for(let M=0;M<T;M++)g[M]!==void 0&&S++;return S===T}function d(g){const S=g.target;S.removeEventListener("dispose",d);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const T=n.get(S);T!==void 0&&(n.delete(S),T.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:r,dispose:v}}function NR(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=o.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&t0("WebGLRenderer: "+a+" extension not supported."),r}}}function OR(o,t,n,a){const r={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",c),delete r[g.id];const S=l.get(g);S&&(t.remove(S),l.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(v,g){return r[g.id]===!0||(g.addEventListener("dispose",c),r[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const S in g)t.update(g[S],o.ARRAY_BUFFER)}function d(v){const g=[],S=v.index,T=v.attributes.position;let M=0;if(T===void 0)return;if(S!==null){const A=S.array;M=S.version;for(let C=0,w=A.length;C<w;C+=3){const P=A[C+0],N=A[C+1],O=A[C+2];g.push(P,N,N,O,O,P)}}else{const A=T.array;M=T.version;for(let C=0,w=A.length/3-1;C<w;C+=3){const P=C+0,N=C+1,O=C+2;g.push(P,N,N,O,O,P)}}const x=new(T.count>=65535?Xy:ky)(g,1);x.version=M;const y=l.get(v);y&&t.remove(y),l.set(v,x)}function _(v){const g=l.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function PR(o,t,n){let a;function r(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,g){o.drawElements(a,g,l,v*c),n.update(g,a,1)}function d(v,g,S){S!==0&&(o.drawElementsInstanced(a,g,l,v*c,S),n.update(g,a,S))}function _(v,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,l,v,0,S);let M=0;for(let x=0;x<S;x++)M+=g[x];n.update(M,a,1)}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function zR(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:Ie("WebGLInfo: Unknown draw mode:",c);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function IR(o,t,n){const a=new WeakMap,r=new Rn;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(f);if(g===void 0||g.count!==v){let G=function(){E.dispose(),a.delete(f),f.removeEventListener("dispose",G)};var S=G;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let w=0;T===!0&&(w=1),M===!0&&(w=2),x===!0&&(w=3);let P=f.attributes.position.count*w,N=1;P>t.maxTextureSize&&(N=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*N*4*v),E=new Gy(O,P,N,v);E.type=Ta,E.needsUpdate=!0;const U=w*4;for(let H=0;H<v;H++){const W=y[H],nt=A[H],ot=C[H],X=P*N*4*H;for(let I=0;I<W.count;I++){const F=I*U;T===!0&&(r.fromBufferAttribute(W,I),O[X+F+0]=r.x,O[X+F+1]=r.y,O[X+F+2]=r.z,O[X+F+3]=0),M===!0&&(r.fromBufferAttribute(nt,I),O[X+F+4]=r.x,O[X+F+5]=r.y,O[X+F+6]=r.z,O[X+F+7]=0),x===!0&&(r.fromBufferAttribute(ot,I),O[X+F+8]=r.x,O[X+F+9]=r.y,O[X+F+10]=r.z,O[X+F+11]=ot.itemSize===4?r.w:1)}}g={count:v,texture:E,size:new pe(P,N)},a.set(f,g),f.addEventListener("dispose",G)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let T=0;for(let x=0;x<d.length;x++)T+=d[x];const M=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:l}}function BR(o,t,n,a,r){let l=new WeakMap;function c(d){const _=r.render.frame,v=d.geometry,g=t.get(d,v);if(l.get(g)!==_&&(t.update(g),l.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==_&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,_))),d.isSkinnedMesh){const S=d.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return g}function f(){l=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:c,dispose:f}}const FR={[Ry]:"LINEAR_TONE_MAPPING",[wy]:"REINHARD_TONE_MAPPING",[Cy]:"CINEON_TONE_MAPPING",[M0]:"ACES_FILMIC_TONE_MAPPING",[Uy]:"AGX_TONE_MAPPING",[Ly]:"NEUTRAL_TONE_MAPPING",[Dy]:"CUSTOM_TONE_MAPPING"};function HR(o,t,n,a,r){const l=new bi(t,n,{type:o,depthBuffer:a,stencilBuffer:r,depthTexture:a?new ll(t,n):void 0}),c=new bi(t,n,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),f=new Fn;f.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new dn([0,2,0,0,2,0],2));const p=new AE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new cn(f,p),_=new oh(-1,1,1,-1,0,1);let v=null,g=null,S=!1,T,M=null,x=[],y=!1;this.setSize=function(A,C){l.setSize(A,C),c.setSize(A,C);for(let w=0;w<x.length;w++){const P=x[w];P.setSize&&P.setSize(A,C)}},this.setEffects=function(A){x=A,y=x.length>0&&x[0].isRenderPass===!0;const C=l.width,w=l.height;for(let P=0;P<x.length;P++){const N=x[P];N.setSize&&N.setSize(C,w)}},this.begin=function(A,C){if(S||A.toneMapping===Ha&&x.length===0)return!1;if(M=C,C!==null){const w=C.width,P=C.height;(l.width!==w||l.height!==P)&&this.setSize(w,P)}return y===!1&&A.setRenderTarget(l),T=A.toneMapping,A.toneMapping=Ha,!0},this.hasRenderPass=function(){return y},this.end=function(A,C){A.toneMapping=T,S=!0;let w=l,P=c;for(let N=0;N<x.length;N++){const O=x[N];if(O.enabled!==!1&&(O.render(A,P,w,C),O.needsSwap!==!1)){const E=w;w=P,P=E}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,p.defines={},Le.getTransfer(v)===$e&&(p.defines.SRGB_TRANSFER="");const N=FR[g];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(M),A.render(d,_),M=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const nM=new hi,a0=new ll(1,1),iM=new Gy,aM=new aE,sM=new jy,XS=[],WS=[],qS=new Float32Array(16),YS=new Float32Array(9),jS=new Float32Array(4);function gl(o,t,n){const a=o[0];if(a<=0||a>0)return o;const r=t*n;let l=XS[r];if(l===void 0&&(l=new Float32Array(r),XS[r]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function kn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Xn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function uh(o,t){let n=WS[t];n===void 0&&(n=new Int32Array(t),WS[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function GR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function VR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kn(n,t))return;o.uniform2fv(this.addr,t),Xn(n,t)}}function kR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(kn(n,t))return;o.uniform3fv(this.addr,t),Xn(n,t)}}function XR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kn(n,t))return;o.uniform4fv(this.addr,t),Xn(n,t)}}function WR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(kn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Xn(n,t)}else{if(kn(n,a))return;jS.set(a),o.uniformMatrix2fv(this.addr,!1,jS),Xn(n,a)}}function qR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(kn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Xn(n,t)}else{if(kn(n,a))return;YS.set(a),o.uniformMatrix3fv(this.addr,!1,YS),Xn(n,a)}}function YR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(kn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Xn(n,t)}else{if(kn(n,a))return;qS.set(a),o.uniformMatrix4fv(this.addr,!1,qS),Xn(n,a)}}function jR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function ZR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kn(n,t))return;o.uniform2iv(this.addr,t),Xn(n,t)}}function KR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(kn(n,t))return;o.uniform3iv(this.addr,t),Xn(n,t)}}function QR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kn(n,t))return;o.uniform4iv(this.addr,t),Xn(n,t)}}function JR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function $R(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kn(n,t))return;o.uniform2uiv(this.addr,t),Xn(n,t)}}function tw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(kn(n,t))return;o.uniform3uiv(this.addr,t),Xn(n,t)}}function ew(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kn(n,t))return;o.uniform4uiv(this.addr,t),Xn(n,t)}}function nw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(a0.compareFunction=n.isReversedDepthBuffer()?U0:D0,l=a0):l=nM,n.setTexture2D(t||l,r)}function iw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||aM,r)}function aw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||sM,r)}function sw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||iM,r)}function rw(o){switch(o){case 5126:return GR;case 35664:return VR;case 35665:return kR;case 35666:return XR;case 35674:return WR;case 35675:return qR;case 35676:return YR;case 5124:case 35670:return jR;case 35667:case 35671:return ZR;case 35668:case 35672:return KR;case 35669:case 35673:return QR;case 5125:return JR;case 36294:return $R;case 36295:return tw;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return sw}}function ow(o,t){o.uniform1fv(this.addr,t)}function lw(o,t){const n=gl(t,this.size,2);o.uniform2fv(this.addr,n)}function uw(o,t){const n=gl(t,this.size,3);o.uniform3fv(this.addr,n)}function cw(o,t){const n=gl(t,this.size,4);o.uniform4fv(this.addr,n)}function fw(o,t){const n=gl(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function hw(o,t){const n=gl(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function dw(o,t){const n=gl(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function pw(o,t){o.uniform1iv(this.addr,t)}function mw(o,t){o.uniform2iv(this.addr,t)}function _w(o,t){o.uniform3iv(this.addr,t)}function gw(o,t){o.uniform4iv(this.addr,t)}function vw(o,t){o.uniform1uiv(this.addr,t)}function xw(o,t){o.uniform2uiv(this.addr,t)}function Sw(o,t){o.uniform3uiv(this.addr,t)}function yw(o,t){o.uniform4uiv(this.addr,t)}function Mw(o,t,n){const a=this.cache,r=t.length,l=uh(n,r);kn(a,l)||(o.uniform1iv(this.addr,l),Xn(a,l));let c;this.type===o.SAMPLER_2D_SHADOW?c=a0:c=nM;for(let f=0;f!==r;++f)n.setTexture2D(t[f]||c,l[f])}function Tw(o,t,n){const a=this.cache,r=t.length,l=uh(n,r);kn(a,l)||(o.uniform1iv(this.addr,l),Xn(a,l));for(let c=0;c!==r;++c)n.setTexture3D(t[c]||aM,l[c])}function bw(o,t,n){const a=this.cache,r=t.length,l=uh(n,r);kn(a,l)||(o.uniform1iv(this.addr,l),Xn(a,l));for(let c=0;c!==r;++c)n.setTextureCube(t[c]||sM,l[c])}function Ew(o,t,n){const a=this.cache,r=t.length,l=uh(n,r);kn(a,l)||(o.uniform1iv(this.addr,l),Xn(a,l));for(let c=0;c!==r;++c)n.setTexture2DArray(t[c]||iM,l[c])}function Aw(o){switch(o){case 5126:return ow;case 35664:return lw;case 35665:return uw;case 35666:return cw;case 35674:return fw;case 35675:return hw;case 35676:return dw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return _w;case 35669:case 35673:return gw;case 5125:return vw;case 36294:return xw;case 36295:return Sw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Ew}}class Rw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=rw(n.type)}}class ww{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Aw(n.type)}}class Cw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(t,n[f.id],a)}}}const em=/(\w+)(\])?(\[|\.)?/g;function ZS(o,t){o.seq.push(t),o.map[t.id]=t}function Dw(o,t,n){const a=o.name,r=a.length;for(em.lastIndex=0;;){const l=em.exec(a),c=em.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===r){ZS(n,d===void 0?new Rw(f,o,t):new ww(f,o,t));break}else{let v=n.map[f];v===void 0&&(v=new Cw(f),ZS(n,v)),n=v}}}class zf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),p=t.getUniformLocation(n,f.name);Dw(f,p,this)}const r=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(c):l.push(c);r.length>0&&(this.seq=r.concat(l))}setValue(t,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,l=t.length;r!==l;++r){const c=t[r];c.id in n&&a.push(c)}return a}}function KS(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const Uw=37297;let Lw=0;function Nw(o,t){const n=o.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=r;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const QS=new _e;function Ow(o){Le._getMatrix(QS,Le.workingColorSpace,o);const t=`mat3( ${QS.elements.map(n=>n.toFixed(4))} )`;switch(Le.getTransfer(o)){case Xf:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function JS(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+Nw(o.getShaderSource(t),f)}else return l}function Pw(o,t){const n=Ow(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const zw={[Ry]:"Linear",[wy]:"Reinhard",[Cy]:"Cineon",[M0]:"ACESFilmic",[Uy]:"AgX",[Ly]:"Neutral",[Dy]:"Custom"};function Iw(o,t){const n=zw[t];return n===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wf=new Z;function Bw(){Le.getLuminanceCoefficients(wf);const o=wf.x.toFixed(4),t=wf.y.toFixed(4),n=wf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xu).join(`
`)}function Hw(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Gw(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(t,r),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function xu(o){return o!==""}function $S(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ty(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function s0(o){return o.replace(Vw,Xw)}const kw=new Map;function Xw(o,t){let n=Te[t];if(n===void 0){const a=kw.get(t);if(a!==void 0)n=Te[a],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return s0(n)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ey(o){return o.replace(Ww,qw)}function qw(o,t,n,a){let r="";for(let l=parseInt(t);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function ny(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Yw={[Df]:"SHADOWMAP_TYPE_PCF",[vu]:"SHADOWMAP_TYPE_VSM"};function jw(o){return Yw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zw={[Zr]:"ENVMAP_TYPE_CUBE",[ol]:"ENVMAP_TYPE_CUBE",[ih]:"ENVMAP_TYPE_CUBE_UV"};function Kw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Zw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qw={[ol]:"ENVMAP_MODE_REFRACTION"};function Jw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Qw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $w={[Ay]:"ENVMAP_BLENDING_MULTIPLY",[Ib]:"ENVMAP_BLENDING_MIX",[Bb]:"ENVMAP_BLENDING_ADD"};function tC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":$w[o.combine]||"ENVMAP_BLENDING_NONE"}function eC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function nC(o,t,n,a){const r=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=jw(n),d=Kw(n),_=Jw(n),v=tC(n),g=eC(n),S=Fw(n),T=Hw(l),M=r.createProgram();let x,y,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(xu).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(xu).join(`
`),y.length>0&&(y+=`
`)):(x=[ny(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xu).join(`
`),y=[ny(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ha?"#define TONE_MAPPING":"",n.toneMapping!==Ha?Te.tonemapping_pars_fragment:"",n.toneMapping!==Ha?Iw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,Pw("linearToOutputTexel",n.outputColorSpace),Bw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xu).join(`
`)),c=s0(c),c=$S(c,n),c=ty(c,n),f=s0(f),f=$S(f,n),f=ty(f,n),c=ey(c),f=ey(f),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===eS?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===eS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=A+x+c,w=A+y+f,P=KS(r,r.VERTEX_SHADER,C),N=KS(r,r.FRAGMENT_SHADER,w);r.attachShader(M,P),r.attachShader(M,N),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function O(H){if(o.debug.checkShaderErrors){const W=r.getProgramInfoLog(M)||"",nt=r.getShaderInfoLog(P)||"",ot=r.getShaderInfoLog(N)||"",X=W.trim(),I=nt.trim(),F=ot.trim();let it=!0,pt=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,P,N);else{const St=JS(r,P,"vertex"),B=JS(r,N,"fragment");Ie("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+St+`
`+B)}else X!==""?fe("WebGLProgram: Program Info Log:",X):(I===""||F==="")&&(pt=!1);pt&&(H.diagnostics={runnable:it,programLog:X,vertexShader:{log:I,prefix:x},fragmentShader:{log:F,prefix:y}})}r.deleteShader(P),r.deleteShader(N),E=new zf(r,M),U=Gw(r,M)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(M,Uw)),G},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Lw++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=N,this}let iC=0;class aC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new sC(t),n.set(t,a)),a}}class sC{constructor(t){this.id=iC++,this.code=t,this.usedTimes=0}}function rC(o){return o===Kr||o===Gf||o===Vf}function oC(o,t,n,a,r,l){const c=new N0,f=new aC,p=new Set,d=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return p.add(E),E===0?"uv":`uv${E}`}function M(E,U,G,H,W,nt){const ot=H.fog,X=W.geometry,I=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,F=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,it=t.get(E.envMap||I,F),pt=it&&it.mapping===ih?it.image.height:null,St=S[E.type];E.precision!==null&&(g=a.getMaxPrecision(E.precision),g!==E.precision&&fe("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const B=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=B!==void 0?B.length:0;let vt=0;X.morphAttributes.position!==void 0&&(vt=1),X.morphAttributes.normal!==void 0&&(vt=2),X.morphAttributes.color!==void 0&&(vt=3);let At,Ut,at,yt;if(St){const ce=Pa[St];At=ce.vertexShader,Ut=ce.fragmentShader}else At=E.vertexShader,Ut=E.fragmentShader,f.update(E),at=f.getVertexShaderID(E),yt=f.getFragmentShaderID(E);const Tt=o.getRenderTarget(),kt=o.state.buffers.depth.getReversed(),ie=W.isInstancedMesh===!0,te=W.isBatchedMesh===!0,Be=!!E.map,ge=!!E.matcap,ve=!!it,Pe=!!E.aoMap,ae=!!E.lightMap,qe=!!E.bumpMap,Ge=!!E.normalMap,De=!!E.displacementMap,j=!!E.emissiveMap,sn=!!E.metalnessMap,xe=!!E.roughnessMap,ze=E.anisotropy>0,Ct=E.clearcoat>0,Fe=E.dispersion>0,z=E.iridescence>0,R=E.sheen>0,K=E.transmission>0,dt=ze&&!!E.anisotropyMap,xt=Ct&&!!E.clearcoatMap,Dt=Ct&&!!E.clearcoatNormalMap,Mt=Ct&&!!E.clearcoatRoughnessMap,ct=z&&!!E.iridescenceMap,ht=z&&!!E.iridescenceThicknessMap,Bt=R&&!!E.sheenColorMap,Nt=R&&!!E.sheenRoughnessMap,It=!!E.specularMap,Ot=!!E.specularColorMap,he=!!E.specularIntensityMap,ue=K&&!!E.transmissionMap,se=K&&!!E.thicknessMap,k=!!E.gradientMap,Rt=!!E.alphaMap,ft=E.alphaTest>0,Xt=!!E.alphaHash,Pt=!!E.extensions;let bt=Ha;E.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(bt=o.toneMapping);const Zt={shaderID:St,shaderType:E.type,shaderName:E.name,vertexShader:At,fragmentShader:Ut,defines:E.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:te,batchingColor:te&&W._colorsTexture!==null,instancing:ie,instancingColor:ie&&W.instanceColor!==null,instancingMorph:ie&&W.morphTexture!==null,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:ge,envMap:ve,envMapMode:ve&&it.mapping,envMapCubeUVHeight:pt,aoMap:Pe,lightMap:ae,bumpMap:qe,normalMap:Ge,displacementMap:De,emissiveMap:j,normalMapObjectSpace:Ge&&E.normalMapType===Gb,normalMapTangentSpace:Ge&&E.normalMapType===$m,packedNormalMap:Ge&&E.normalMapType===$m&&rC(E.normalMap.format),metalnessMap:sn,roughnessMap:xe,anisotropy:ze,anisotropyMap:dt,clearcoat:Ct,clearcoatMap:xt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Mt,dispersion:Fe,iridescence:z,iridescenceMap:ct,iridescenceThicknessMap:ht,sheen:R,sheenColorMap:Bt,sheenRoughnessMap:Nt,specularMap:It,specularColorMap:Ot,specularIntensityMap:he,transmission:K,transmissionMap:ue,thicknessMap:se,gradientMap:k,opaque:E.transparent===!1&&E.blending===tl&&E.alphaToCoverage===!1,alphaMap:Rt,alphaTest:ft,alphaHash:Xt,combine:E.combine,mapUv:Be&&T(E.map.channel),aoMapUv:Pe&&T(E.aoMap.channel),lightMapUv:ae&&T(E.lightMap.channel),bumpMapUv:qe&&T(E.bumpMap.channel),normalMapUv:Ge&&T(E.normalMap.channel),displacementMapUv:De&&T(E.displacementMap.channel),emissiveMapUv:j&&T(E.emissiveMap.channel),metalnessMapUv:sn&&T(E.metalnessMap.channel),roughnessMapUv:xe&&T(E.roughnessMap.channel),anisotropyMapUv:dt&&T(E.anisotropyMap.channel),clearcoatMapUv:xt&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(E.sheenRoughnessMap.channel),specularMapUv:It&&T(E.specularMap.channel),specularColorMapUv:Ot&&T(E.specularColorMap.channel),specularIntensityMapUv:he&&T(E.specularIntensityMap.channel),transmissionMapUv:ue&&T(E.transmissionMap.channel),thicknessMapUv:se&&T(E.thicknessMap.channel),alphaMapUv:Rt&&T(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ge||ze),vertexNormals:!!X.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!X.attributes.uv&&(Be||Rt),fog:!!ot,useFog:E.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||X.attributes.normal===void 0&&Ge===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:kt,skinning:W.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:vt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:bt,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===$e,decodeVideoTextureEmissive:j&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===$e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yi,flipSided:E.side===Ti,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&E.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Zt.vertexUv1s=p.has(1),Zt.vertexUv2s=p.has(2),Zt.vertexUv3s=p.has(3),p.clear(),Zt}function x(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)U.push(G),U.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(y(U,E),A(U,E),U.push(o.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function y(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function A(E,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function C(E){const U=S[E.type];let G;if(U){const H=Pa[U];G=jf.clone(H.uniforms)}else G=E.uniforms;return G}function w(E,U){let G=_.get(U);return G!==void 0?++G.usedTimes:(G=new nC(o,U,E,r),d.push(G),_.set(U,G)),G}function P(E){if(--E.usedTimes===0){const U=d.indexOf(E);d[U]=d[d.length-1],d.pop(),_.delete(E.cacheKey),E.destroy()}}function N(E){f.remove(E)}function O(){f.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:w,releaseProgram:P,releaseShaderCache:N,programs:d,dispose:O}}function lC(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function r(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:l}}function uC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function iy(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ay(){const o=[];let t=0;const n=[],a=[],r=[];function l(){t=0,n.length=0,a.length=0,r.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,T,M,x,y){let A=o[t];return A===void 0?(A={id:g.id,object:g,geometry:S,material:T,materialVariant:c(g),groupOrder:M,renderOrder:g.renderOrder,z:x,group:y},o[t]=A):(A.id=g.id,A.object=g,A.geometry=S,A.material=T,A.materialVariant=c(g),A.groupOrder=M,A.renderOrder=g.renderOrder,A.z=x,A.group=y),t++,A}function p(g,S,T,M,x,y){const A=f(g,S,T,M,x,y);T.transmission>0?a.push(A):T.transparent===!0?r.push(A):n.push(A)}function d(g,S,T,M,x,y){const A=f(g,S,T,M,x,y);T.transmission>0?a.unshift(A):T.transparent===!0?r.unshift(A):n.unshift(A)}function _(g,S){n.length>1&&n.sort(g||uC),a.length>1&&a.sort(S||iy),r.length>1&&r.sort(S||iy)}function v(){for(let g=t,S=o.length;g<S;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:p,unshift:d,finish:v,sort:_}}function cC(){let o=new WeakMap;function t(a,r){const l=o.get(a);let c;return l===void 0?(c=new ay,o.set(a,[c])):r>=l.length?(c=new ay,l.push(c)):c=l[r],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function fC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Z,color:new ye};break;case"SpotLight":n={position:new Z,direction:new Z,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":n={color:new ye,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[t.id]=n,n}}}function hC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let dC=0;function pC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function mC(o){const t=new fC,n=hC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Z);const r=new Z,l=new hn,c=new hn;function f(d){let _=0,v=0,g=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let S=0,T=0,M=0,x=0,y=0,A=0,C=0,w=0,P=0,N=0,O=0;d.sort(pC);for(let U=0,G=d.length;U<G;U++){const H=d[U],W=H.color,nt=H.intensity,ot=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Kr?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=W.r*nt,v+=W.g*nt,g+=W.b*nt;else if(H.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(H.sh.coefficients[I],nt);O++}else if(H.isDirectionalLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,it=n.get(H);it.shadowIntensity=F.intensity,it.shadowBias=F.bias,it.shadowNormalBias=F.normalBias,it.shadowRadius=F.radius,it.shadowMapSize=F.mapSize,a.directionalShadow[S]=it,a.directionalShadowMap[S]=X,a.directionalShadowMatrix[S]=H.shadow.matrix,A++}a.directional[S]=I,S++}else if(H.isSpotLight){const I=t.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(W).multiplyScalar(nt),I.distance=ot,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,a.spot[M]=I;const F=H.shadow;if(H.map&&(a.spotLightMap[P]=H.map,P++,F.updateMatrices(H),H.castShadow&&N++),a.spotLightMatrix[M]=F.matrix,H.castShadow){const it=n.get(H);it.shadowIntensity=F.intensity,it.shadowBias=F.bias,it.shadowNormalBias=F.normalBias,it.shadowRadius=F.radius,it.shadowMapSize=F.mapSize,a.spotShadow[M]=it,a.spotShadowMap[M]=X,w++}M++}else if(H.isRectAreaLight){const I=t.get(H);I.color.copy(W).multiplyScalar(nt),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),a.rectArea[x]=I,x++}else if(H.isPointLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const F=H.shadow,it=n.get(H);it.shadowIntensity=F.intensity,it.shadowBias=F.bias,it.shadowNormalBias=F.normalBias,it.shadowRadius=F.radius,it.shadowMapSize=F.mapSize,it.shadowCameraNear=F.camera.near,it.shadowCameraFar=F.camera.far,a.pointShadow[T]=it,a.pointShadowMap[T]=X,a.pointShadowMatrix[T]=H.shadow.matrix,C++}a.point[T]=I,T++}else if(H.isHemisphereLight){const I=t.get(H);I.skyColor.copy(H.color).multiplyScalar(nt),I.groundColor.copy(H.groundColor).multiplyScalar(nt),a.hemi[y]=I,y++}}x>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=qt.LTC_FLOAT_1,a.rectAreaLTC2=qt.LTC_FLOAT_2):(a.rectAreaLTC1=qt.LTC_HALF_1,a.rectAreaLTC2=qt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const E=a.hash;(E.directionalLength!==S||E.pointLength!==T||E.spotLength!==M||E.rectAreaLength!==x||E.hemiLength!==y||E.numDirectionalShadows!==A||E.numPointShadows!==C||E.numSpotShadows!==w||E.numSpotMaps!==P||E.numLightProbes!==O)&&(a.directional.length=S,a.spot.length=M,a.rectArea.length=x,a.point.length=T,a.hemi.length=y,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=w+P-N,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=O,E.directionalLength=S,E.pointLength=T,E.spotLength=M,E.rectAreaLength=x,E.hemiLength=y,E.numDirectionalShadows=A,E.numPointShadows=C,E.numSpotShadows=w,E.numSpotMaps=P,E.numLightProbes=O,a.version=dC++)}function p(d,_){let v=0,g=0,S=0,T=0,M=0;const x=_.matrixWorldInverse;for(let y=0,A=d.length;y<A;y++){const C=d[y];if(C.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),v++}else if(C.isSpotLight){const w=a.spot[S];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),S++}else if(C.isRectAreaLight){const w=a.rectArea[T];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(x),c.identity(),l.copy(C.matrixWorld),l.premultiply(x),c.extractRotation(l),w.halfWidth.set(C.width*.5,0,0),w.halfHeight.set(0,C.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),T++}else if(C.isPointLight){const w=a.point[g];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(x),g++}else if(C.isHemisphereLight){const w=a.hemi[M];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(x),M++}}}return{setup:f,setupView:p,state:a}}function sy(o){const t=new mC(o),n=[],a=[],r=[];function l(g){v.camera=g,n.length=0,a.length=0,r.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function p(g){r.push(g)}function d(){t.setup(n)}function _(g){t.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:d,setupLightsView:_,pushLight:c,pushShadow:f,pushLightProbeGrid:p}}function _C(o){let t=new WeakMap;function n(r,l=0){const c=t.get(r);let f;return c===void 0?(f=new sy(o),t.set(r,[f])):l>=c.length?(f=new sy(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const gC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xC=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],SC=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],ry=new hn,_u=new Z,nm=new Z;function yC(o,t,n){let a=new O0;const r=new pe,l=new pe,c=new Rn,f=new RE,p=new wE,d={},_=n.maxTextureSize,v={[lr]:Ti,[Ti]:lr,[yi]:yi},g=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:gC,fragmentShader:vC}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new Fn;T.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new cn(T,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Df;let y=this.type;this.render=function(N,O,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;this.type===vb&&(fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Df);const U=o.getRenderTarget(),G=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Fa),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const nt=y!==this.type;nt&&O.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(X=>X.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,X=N.length;ot<X;ot++){const I=N[ot],F=I.shadow;if(F===void 0){fe("WebGLShadowMap:",I,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const it=F.getFrameExtents();r.multiply(it),l.copy(F.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(l.x=Math.floor(_/it.x),r.x=l.x*it.x,F.mapSize.x=l.x),r.y>_&&(l.y=Math.floor(_/it.y),r.y=l.y*it.y,F.mapSize.y=l.y));const pt=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=pt,F.map===null||nt===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===vu){if(I.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new bi(r.x,r.y,{format:Kr,type:Yi,minFilter:oi,magFilter:oi,generateMipmaps:!1}),F.map.texture.name=I.name+".shadowMap",F.map.depthTexture=new ll(r.x,r.y,Ta),F.map.depthTexture.name=I.name+".shadowMapDepth",F.map.depthTexture.format=gs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Jn,F.map.depthTexture.magFilter=Jn}else I.isPointLight?(F.map=new eM(r.x),F.map.depthTexture=new ME(r.x,Ga)):(F.map=new bi(r.x,r.y),F.map.depthTexture=new ll(r.x,r.y,Ga)),F.map.depthTexture.name=I.name+".shadowMap",F.map.depthTexture.format=gs,this.type===Df?(F.map.depthTexture.compareFunction=pt?U0:D0,F.map.depthTexture.minFilter=oi,F.map.depthTexture.magFilter=oi):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Jn,F.map.depthTexture.magFilter=Jn);F.camera.updateProjectionMatrix()}const St=F.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<St;B++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,B),o.clear();else{B===0&&(o.setRenderTarget(F.map),o.clear());const Q=F.getViewport(B);c.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),W.viewport(c)}if(I.isPointLight){const Q=F.camera,vt=F.matrix,At=I.distance||Q.far;At!==Q.far&&(Q.far=At,Q.updateProjectionMatrix()),_u.setFromMatrixPosition(I.matrixWorld),Q.position.copy(_u),nm.copy(Q.position),nm.add(xC[B]),Q.up.copy(SC[B]),Q.lookAt(nm),Q.updateMatrixWorld(),vt.makeTranslation(-_u.x,-_u.y,-_u.z),ry.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ry,Q.coordinateSystem,Q.reversedDepth)}else F.updateMatrices(I);a=F.getFrustum(),w(O,E,F.camera,I,this.type)}F.isPointLightShadow!==!0&&this.type===vu&&A(F,E),F.needsUpdate=!1}y=this.type,x.needsUpdate=!1,o.setRenderTarget(U,G,H)};function A(N,O){const E=t.update(M);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new bi(r.x,r.y,{format:Kr,type:Yi})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(O,null,E,g,M,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(O,null,E,S,M,null)}function C(N,O,E,U){let G=null;const H=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)G=H;else if(G=E.isPointLight===!0?p:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=G.uuid,nt=O.uuid;let ot=d[W];ot===void 0&&(ot={},d[W]=ot);let X=ot[nt];X===void 0&&(X=G.clone(),ot[nt]=X,O.addEventListener("dispose",P)),G=X}if(G.visible=O.visible,G.wireframe=O.wireframe,U===vu?G.side=O.shadowSide!==null?O.shadowSide:O.side:G.side=O.shadowSide!==null?O.shadowSide:v[O.side],G.alphaMap=O.alphaMap,G.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,G.map=O.map,G.clipShadows=O.clipShadows,G.clippingPlanes=O.clippingPlanes,G.clipIntersection=O.clipIntersection,G.displacementMap=O.displacementMap,G.displacementScale=O.displacementScale,G.displacementBias=O.displacementBias,G.wireframeLinewidth=O.wireframeLinewidth,G.linewidth=O.linewidth,E.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const W=o.properties.get(G);W.light=E}return G}function w(N,O,E,U,G){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&G===vu)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const nt=t.update(N),ot=N.material;if(Array.isArray(ot)){const X=nt.groups;for(let I=0,F=X.length;I<F;I++){const it=X[I],pt=ot[it.materialIndex];if(pt&&pt.visible){const St=C(N,pt,U,G);N.onBeforeShadow(o,N,O,E,nt,St,it),o.renderBufferDirect(E,null,nt,St,N,it),N.onAfterShadow(o,N,O,E,nt,St,it)}}}else if(ot.visible){const X=C(N,ot,U,G);N.onBeforeShadow(o,N,O,E,nt,X,null),o.renderBufferDirect(E,null,nt,X,N,null),N.onAfterShadow(o,N,O,E,nt,X,null)}}const W=N.children;for(let nt=0,ot=W.length;nt<ot;nt++)w(W[nt],O,E,U,G)}function P(N){N.target.removeEventListener("dispose",P);for(const E in d){const U=d[E],G=N.target.uuid;G in U&&(U[G].dispose(),delete U[G])}}}function MC(o,t){function n(){let k=!1;const Rt=new Rn;let ft=null;const Xt=new Rn(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!k&&(o.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){k=Pt},setClear:function(Pt,bt,Zt,ce,pn){pn===!0&&(Pt*=ce,bt*=ce,Zt*=ce),Rt.set(Pt,bt,Zt,ce),Xt.equals(Rt)===!1&&(o.clearColor(Pt,bt,Zt,ce),Xt.copy(Rt))},reset:function(){k=!1,ft=null,Xt.set(-1,0,0,0)}}}function a(){let k=!1,Rt=!1,ft=null,Xt=null,Pt=null;return{setReversed:function(bt){if(Rt!==bt){const Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Rt=bt;const ce=Pt;Pt=null,this.setClear(ce)}},getReversed:function(){return Rt},setTest:function(bt){bt?Tt(o.DEPTH_TEST):kt(o.DEPTH_TEST)},setMask:function(bt){ft!==bt&&!k&&(o.depthMask(bt),ft=bt)},setFunc:function(bt){if(Rt&&(bt=Qb[bt]),Xt!==bt){switch(bt){case pm:o.depthFunc(o.NEVER);break;case mm:o.depthFunc(o.ALWAYS);break;case _m:o.depthFunc(o.LESS);break;case rl:o.depthFunc(o.LEQUAL);break;case gm:o.depthFunc(o.EQUAL);break;case vm:o.depthFunc(o.GEQUAL);break;case xm:o.depthFunc(o.GREATER);break;case Sm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=bt}},setLocked:function(bt){k=bt},setClear:function(bt){Pt!==bt&&(Pt=bt,Rt&&(bt=1-bt),o.clearDepth(bt))},reset:function(){k=!1,ft=null,Xt=null,Pt=null,Rt=!1}}}function r(){let k=!1,Rt=null,ft=null,Xt=null,Pt=null,bt=null,Zt=null,ce=null,pn=null;return{setTest:function(He){k||(He?Tt(o.STENCIL_TEST):kt(o.STENCIL_TEST))},setMask:function(He){Rt!==He&&!k&&(o.stencilMask(He),Rt=He)},setFunc:function(He,di,ui){(ft!==He||Xt!==di||Pt!==ui)&&(o.stencilFunc(He,di,ui),ft=He,Xt=di,Pt=ui)},setOp:function(He,di,ui){(bt!==He||Zt!==di||ce!==ui)&&(o.stencilOp(He,di,ui),bt=He,Zt=di,ce=ui)},setLocked:function(He){k=He},setClear:function(He){pn!==He&&(o.clearStencil(He),pn=He)},reset:function(){k=!1,Rt=null,ft=null,Xt=null,Pt=null,bt=null,Zt=null,ce=null,pn=null}}}const l=new n,c=new a,f=new r,p=new WeakMap,d=new WeakMap;let _={},v={},g={},S=new WeakMap,T=[],M=null,x=!1,y=null,A=null,C=null,w=null,P=null,N=null,O=null,E=new ye(0,0,0),U=0,G=!1,H=null,W=null,nt=null,ot=null,X=null;const I=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,it=0;const pt=o.getParameter(o.VERSION);pt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(pt)[1]),F=it>=1):pt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),F=it>=2);let St=null,B={};const Q=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),At=new Rn().fromArray(Q),Ut=new Rn().fromArray(vt);function at(k,Rt,ft,Xt){const Pt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(k,bt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<ft;Zt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Rt+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return bt}const yt={};yt[o.TEXTURE_2D]=at(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=at(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=at(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=at(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Tt(o.DEPTH_TEST),c.setFunc(rl),qe(!1),Ge(Kx),Tt(o.CULL_FACE),Pe(Fa);function Tt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function kt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function ie(k,Rt){return g[k]!==Rt?(o.bindFramebuffer(k,Rt),g[k]=Rt,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Rt),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function te(k,Rt){let ft=T,Xt=!1;if(k){ft=S.get(Rt),ft===void 0&&(ft=[],S.set(Rt,ft));const Pt=k.textures;if(ft.length!==Pt.length||ft[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Zt=Pt.length;bt<Zt;bt++)ft[bt]=o.COLOR_ATTACHMENT0+bt;ft.length=Pt.length,Xt=!0}}else ft[0]!==o.BACK&&(ft[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(ft)}function Be(k){return M!==k?(o.useProgram(k),M=k,!0):!1}const ge={[Hr]:o.FUNC_ADD,[Sb]:o.FUNC_SUBTRACT,[yb]:o.FUNC_REVERSE_SUBTRACT};ge[Mb]=o.MIN,ge[Tb]=o.MAX;const ve={[bb]:o.ZERO,[Eb]:o.ONE,[Ab]:o.SRC_COLOR,[hm]:o.SRC_ALPHA,[Lb]:o.SRC_ALPHA_SATURATE,[Db]:o.DST_COLOR,[wb]:o.DST_ALPHA,[Rb]:o.ONE_MINUS_SRC_COLOR,[dm]:o.ONE_MINUS_SRC_ALPHA,[Ub]:o.ONE_MINUS_DST_COLOR,[Cb]:o.ONE_MINUS_DST_ALPHA,[Nb]:o.CONSTANT_COLOR,[Ob]:o.ONE_MINUS_CONSTANT_COLOR,[Pb]:o.CONSTANT_ALPHA,[zb]:o.ONE_MINUS_CONSTANT_ALPHA};function Pe(k,Rt,ft,Xt,Pt,bt,Zt,ce,pn,He){if(k===Fa){x===!0&&(kt(o.BLEND),x=!1);return}if(x===!1&&(Tt(o.BLEND),x=!0),k!==xb){if(k!==y||He!==G){if((A!==Hr||P!==Hr)&&(o.blendEquation(o.FUNC_ADD),A=Hr,P=Hr),He)switch(k){case tl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case el:o.blendFunc(o.ONE,o.ONE);break;case Qx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ie("WebGLState: Invalid blending: ",k);break}else switch(k){case tl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case el:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Qx:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jx:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",k);break}C=null,w=null,N=null,O=null,E.set(0,0,0),U=0,y=k,G=He}return}Pt=Pt||Rt,bt=bt||ft,Zt=Zt||Xt,(Rt!==A||Pt!==P)&&(o.blendEquationSeparate(ge[Rt],ge[Pt]),A=Rt,P=Pt),(ft!==C||Xt!==w||bt!==N||Zt!==O)&&(o.blendFuncSeparate(ve[ft],ve[Xt],ve[bt],ve[Zt]),C=ft,w=Xt,N=bt,O=Zt),(ce.equals(E)===!1||pn!==U)&&(o.blendColor(ce.r,ce.g,ce.b,pn),E.copy(ce),U=pn),y=k,G=!1}function ae(k,Rt){k.side===yi?kt(o.CULL_FACE):Tt(o.CULL_FACE);let ft=k.side===Ti;Rt&&(ft=!ft),qe(ft),k.blending===tl&&k.transparent===!1?Pe(Fa):Pe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),l.setMask(k.colorWrite);const Xt=k.stencilWrite;f.setTest(Xt),Xt&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),j(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):kt(o.SAMPLE_ALPHA_TO_COVERAGE)}function qe(k){H!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),H=k)}function Ge(k){k!==_b?(Tt(o.CULL_FACE),k!==W&&(k===Kx?o.cullFace(o.BACK):k===gb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):kt(o.CULL_FACE),W=k}function De(k){k!==nt&&(F&&o.lineWidth(k),nt=k)}function j(k,Rt,ft){k?(Tt(o.POLYGON_OFFSET_FILL),(ot!==Rt||X!==ft)&&(ot=Rt,X=ft,c.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,ft))):kt(o.POLYGON_OFFSET_FILL)}function sn(k){k?Tt(o.SCISSOR_TEST):kt(o.SCISSOR_TEST)}function xe(k){k===void 0&&(k=o.TEXTURE0+I-1),St!==k&&(o.activeTexture(k),St=k)}function ze(k,Rt,ft){ft===void 0&&(St===null?ft=o.TEXTURE0+I-1:ft=St);let Xt=B[ft];Xt===void 0&&(Xt={type:void 0,texture:void 0},B[ft]=Xt),(Xt.type!==k||Xt.texture!==Rt)&&(St!==ft&&(o.activeTexture(ft),St=ft),o.bindTexture(k,Rt||yt[k]),Xt.type=k,Xt.texture=Rt)}function Ct(){const k=B[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Fe(){try{o.compressedTexImage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function R(){try{o.texSubImage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function K(){try{o.texSubImage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function xt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function Dt(){try{o.texStorage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function Mt(){try{o.texStorage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function ct(){try{o.texImage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function ht(){try{o.texImage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function Bt(k){return v[k]!==void 0?v[k]:o.getParameter(k)}function Nt(k,Rt){v[k]!==Rt&&(o.pixelStorei(k,Rt),v[k]=Rt)}function It(k){At.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function Ot(k){Ut.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Ut.copy(k))}function he(k,Rt){let ft=d.get(Rt);ft===void 0&&(ft=new WeakMap,d.set(Rt,ft));let Xt=ft.get(k);Xt===void 0&&(Xt=o.getUniformBlockIndex(Rt,k.name),ft.set(k,Xt))}function ue(k,Rt){const Xt=d.get(Rt).get(k);p.get(Rt)!==Xt&&(o.uniformBlockBinding(Rt,Xt,k.__bindingPointIndex),p.set(Rt,Xt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},St=null,B={},g={},S=new WeakMap,T=[],M=null,x=!1,y=null,A=null,C=null,w=null,P=null,N=null,O=null,E=new ye(0,0,0),U=0,G=!1,H=null,W=null,nt=null,ot=null,X=null,At.set(0,0,o.canvas.width,o.canvas.height),Ut.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Tt,disable:kt,bindFramebuffer:ie,drawBuffers:te,useProgram:Be,setBlending:Pe,setMaterial:ae,setFlipSided:qe,setCullFace:Ge,setLineWidth:De,setPolygonOffset:j,setScissorTest:sn,activeTexture:xe,bindTexture:ze,unbindTexture:Ct,compressedTexImage2D:Fe,compressedTexImage3D:z,texImage2D:ct,texImage3D:ht,pixelStorei:Nt,getParameter:Bt,updateUBOMapping:he,uniformBlockBinding:ue,texStorage2D:Dt,texStorage3D:Mt,texSubImage2D:R,texSubImage3D:K,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:It,viewport:Ot,reset:se}}function TC(o,t,n,a,r,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new pe,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,R){return T?new OffscreenCanvas(z,R):Wf("canvas")}function x(z,R,K){let dt=1;const xt=Fe(z);if((xt.width>K||xt.height>K)&&(dt=K/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Dt=Math.floor(dt*xt.width),Mt=Math.floor(dt*xt.height);g===void 0&&(g=M(Dt,Mt));const ct=R?M(Dt,Mt):g;return ct.width=Dt,ct.height=Mt,ct.getContext("2d").drawImage(z,0,0,Dt,Mt),fe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+Dt+"x"+Mt+")."),ct}else return"data"in z&&fe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),z;return z}function y(z){return z.generateMipmaps}function A(z){o.generateMipmap(z)}function C(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(z,R,K,dt,xt,Dt=!1){if(z!==null){if(o[z]!==void 0)return o[z];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Mt;dt&&(Mt=t.get("EXT_texture_norm16"),Mt||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=R;if(R===o.RED&&(K===o.FLOAT&&(ct=o.R32F),K===o.HALF_FLOAT&&(ct=o.R16F),K===o.UNSIGNED_BYTE&&(ct=o.R8),K===o.UNSIGNED_SHORT&&Mt&&(ct=Mt.R16_EXT),K===o.SHORT&&Mt&&(ct=Mt.R16_SNORM_EXT)),R===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ct=o.R8UI),K===o.UNSIGNED_SHORT&&(ct=o.R16UI),K===o.UNSIGNED_INT&&(ct=o.R32UI),K===o.BYTE&&(ct=o.R8I),K===o.SHORT&&(ct=o.R16I),K===o.INT&&(ct=o.R32I)),R===o.RG&&(K===o.FLOAT&&(ct=o.RG32F),K===o.HALF_FLOAT&&(ct=o.RG16F),K===o.UNSIGNED_BYTE&&(ct=o.RG8),K===o.UNSIGNED_SHORT&&Mt&&(ct=Mt.RG16_EXT),K===o.SHORT&&Mt&&(ct=Mt.RG16_SNORM_EXT)),R===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ct=o.RG8UI),K===o.UNSIGNED_SHORT&&(ct=o.RG16UI),K===o.UNSIGNED_INT&&(ct=o.RG32UI),K===o.BYTE&&(ct=o.RG8I),K===o.SHORT&&(ct=o.RG16I),K===o.INT&&(ct=o.RG32I)),R===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),K===o.UNSIGNED_INT&&(ct=o.RGB32UI),K===o.BYTE&&(ct=o.RGB8I),K===o.SHORT&&(ct=o.RGB16I),K===o.INT&&(ct=o.RGB32I)),R===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),K===o.UNSIGNED_INT&&(ct=o.RGBA32UI),K===o.BYTE&&(ct=o.RGBA8I),K===o.SHORT&&(ct=o.RGBA16I),K===o.INT&&(ct=o.RGBA32I)),R===o.RGB&&(K===o.UNSIGNED_SHORT&&Mt&&(ct=Mt.RGB16_EXT),K===o.SHORT&&Mt&&(ct=Mt.RGB16_SNORM_EXT),K===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),R===o.RGBA){const ht=Dt?Xf:Le.getTransfer(xt);K===o.FLOAT&&(ct=o.RGBA32F),K===o.HALF_FLOAT&&(ct=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ct=ht===$e?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT&&Mt&&(ct=Mt.RGBA16_EXT),K===o.SHORT&&Mt&&(ct=Mt.RGBA16_SNORM_EXT),K===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function P(z,R){let K;return z?R===null||R===Ga||R===Cu?K=o.DEPTH24_STENCIL8:R===Ta?K=o.DEPTH32F_STENCIL8:R===wu&&(K=o.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ga||R===Cu?K=o.DEPTH_COMPONENT24:R===Ta?K=o.DEPTH_COMPONENT32F:R===wu&&(K=o.DEPTH_COMPONENT16),K}function N(z,R){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Jn&&z.minFilter!==oi?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function O(z){const R=z.target;R.removeEventListener("dispose",O),U(R),R.isVideoTexture&&_.delete(R),R.isHTMLTexture&&v.delete(R)}function E(z){const R=z.target;R.removeEventListener("dispose",E),H(R)}function U(z){const R=a.get(z);if(R.__webglInit===void 0)return;const K=z.source,dt=S.get(K);if(dt){const xt=dt[R.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&G(z),Object.keys(dt).length===0&&S.delete(K)}a.remove(z)}function G(z){const R=a.get(z);o.deleteTexture(R.__webglTexture);const K=z.source,dt=S.get(K);delete dt[R.__cacheKey],c.memory.textures--}function H(z){const R=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(R.__webglFramebuffer[dt]))for(let xt=0;xt<R.__webglFramebuffer[dt].length;xt++)o.deleteFramebuffer(R.__webglFramebuffer[dt][xt]);else o.deleteFramebuffer(R.__webglFramebuffer[dt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[dt])}else{if(Array.isArray(R.__webglFramebuffer))for(let dt=0;dt<R.__webglFramebuffer.length;dt++)o.deleteFramebuffer(R.__webglFramebuffer[dt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let dt=0;dt<R.__webglColorRenderbuffer.length;dt++)R.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[dt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const K=z.textures;for(let dt=0,xt=K.length;dt<xt;dt++){const Dt=a.get(K[dt]);Dt.__webglTexture&&(o.deleteTexture(Dt.__webglTexture),c.memory.textures--),a.remove(K[dt])}a.remove(z)}let W=0;function nt(){W=0}function ot(){return W}function X(z){W=z}function I(){const z=W;return z>=r.maxTextures&&fe("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+r.maxTextures),W+=1,z}function F(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function it(z,R){const K=a.get(z);if(z.isVideoTexture&&ze(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&K.__version!==z.version){const dt=z.image;if(dt===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(K,z,R);return}}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+R)}function pt(z,R){const K=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){kt(K,z,R);return}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+R)}function St(z,R){const K=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){kt(K,z,R);return}n.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+R)}function B(z,R){const K=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&K.__version!==z.version){ie(K,z,R);return}n.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+R)}const Q={[ym]:o.REPEAT,[ms]:o.CLAMP_TO_EDGE,[Mm]:o.MIRRORED_REPEAT},vt={[Jn]:o.NEAREST,[Fb]:o.NEAREST_MIPMAP_NEAREST,[Kc]:o.NEAREST_MIPMAP_LINEAR,[oi]:o.LINEAR,[bp]:o.LINEAR_MIPMAP_NEAREST,[Vr]:o.LINEAR_MIPMAP_LINEAR},At={[Vb]:o.NEVER,[Yb]:o.ALWAYS,[kb]:o.LESS,[D0]:o.LEQUAL,[Xb]:o.EQUAL,[U0]:o.GEQUAL,[Wb]:o.GREATER,[qb]:o.NOTEQUAL};function Ut(z,R){if(R.type===Ta&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===oi||R.magFilter===bp||R.magFilter===Kc||R.magFilter===Vr||R.minFilter===oi||R.minFilter===bp||R.minFilter===Kc||R.minFilter===Vr)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,Q[R.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,Q[R.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,Q[R.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,vt[R.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,vt[R.minFilter]),R.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,At[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Jn||R.minFilter!==Kc&&R.minFilter!==Vr||R.type===Ta&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function at(z,R){let K=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",O));const dt=R.source;let xt=S.get(dt);xt===void 0&&(xt={},S.set(dt,xt));const Dt=F(R);if(Dt!==z.__cacheKey){xt[Dt]===void 0&&(xt[Dt]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,K=!0),xt[Dt].usedTimes++;const Mt=xt[z.__cacheKey];Mt!==void 0&&(xt[z.__cacheKey].usedTimes--,Mt.usedTimes===0&&G(R)),z.__cacheKey=Dt,z.__webglTexture=xt[Dt].texture}return K}function yt(z,R,K){return Math.floor(Math.floor(z/K)/R)}function Tt(z,R,K,dt){const Dt=z.updateRanges;if(Dt.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,K,dt,R.data);else{Dt.sort((Nt,It)=>Nt.start-It.start);let Mt=0;for(let Nt=1;Nt<Dt.length;Nt++){const It=Dt[Mt],Ot=Dt[Nt],he=It.start+It.count,ue=yt(Ot.start,R.width,4),se=yt(It.start,R.width,4);Ot.start<=he+1&&ue===se&&yt(Ot.start+Ot.count-1,R.width,4)===ue?It.count=Math.max(It.count,Ot.start+Ot.count-It.start):(++Mt,Dt[Mt]=Ot)}Dt.length=Mt+1;const ct=n.getParameter(o.UNPACK_ROW_LENGTH),ht=n.getParameter(o.UNPACK_SKIP_PIXELS),Bt=n.getParameter(o.UNPACK_SKIP_ROWS);n.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Nt=0,It=Dt.length;Nt<It;Nt++){const Ot=Dt[Nt],he=Math.floor(Ot.start/4),ue=Math.ceil(Ot.count/4),se=he%R.width,k=Math.floor(he/R.width),Rt=ue,ft=1;n.pixelStorei(o.UNPACK_SKIP_PIXELS,se),n.pixelStorei(o.UNPACK_SKIP_ROWS,k),n.texSubImage2D(o.TEXTURE_2D,0,se,k,Rt,ft,K,dt,R.data)}z.clearUpdateRanges(),n.pixelStorei(o.UNPACK_ROW_LENGTH,ct),n.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),n.pixelStorei(o.UNPACK_SKIP_ROWS,Bt)}}function kt(z,R,K){let dt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(dt=o.TEXTURE_3D);const xt=at(z,R),Dt=R.source;n.bindTexture(dt,z.__webglTexture,o.TEXTURE0+K);const Mt=a.get(Dt);if(Dt.version!==Mt.__version||xt===!0){if(n.activeTexture(o.TEXTURE0+K),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const ft=Le.getPrimaries(Le.workingColorSpace),Xt=R.colorSpace===tr?null:Le.getPrimaries(R.colorSpace),Pt=R.colorSpace===tr||ft===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}n.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment);let ht=x(R.image,!1,r.maxTextureSize);ht=Ct(R,ht);const Bt=l.convert(R.format,R.colorSpace),Nt=l.convert(R.type);let It=w(R.internalFormat,Bt,Nt,R.normalized,R.colorSpace,R.isVideoTexture);Ut(dt,R);let Ot;const he=R.mipmaps,ue=R.isVideoTexture!==!0,se=Mt.__version===void 0||xt===!0,k=Dt.dataReady,Rt=N(R,ht);if(R.isDepthTexture)It=P(R.format===kr,R.type),se&&(ue?n.texStorage2D(o.TEXTURE_2D,1,It,ht.width,ht.height):n.texImage2D(o.TEXTURE_2D,0,It,ht.width,ht.height,0,Bt,Nt,null));else if(R.isDataTexture)if(he.length>0){ue&&se&&n.texStorage2D(o.TEXTURE_2D,Rt,It,he[0].width,he[0].height);for(let ft=0,Xt=he.length;ft<Xt;ft++)Ot=he[ft],ue?k&&n.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Bt,Nt,Ot.data):n.texImage2D(o.TEXTURE_2D,ft,It,Ot.width,Ot.height,0,Bt,Nt,Ot.data);R.generateMipmaps=!1}else ue?(se&&n.texStorage2D(o.TEXTURE_2D,Rt,It,ht.width,ht.height),k&&Tt(R,ht,Bt,Nt)):n.texImage2D(o.TEXTURE_2D,0,It,ht.width,ht.height,0,Bt,Nt,ht.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ue&&se&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,It,he[0].width,he[0].height,ht.depth);for(let ft=0,Xt=he.length;ft<Xt;ft++)if(Ot=he[ft],R.format!==ba)if(Bt!==null)if(ue){if(k)if(R.layerUpdates.size>0){const Pt=IS(Ot.width,Ot.height,R.format,R.type);for(const bt of R.layerUpdates){const Zt=Ot.data.subarray(bt*Pt/Ot.data.BYTES_PER_ELEMENT,(bt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,bt,Ot.width,Ot.height,1,Bt,Zt)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Ot.width,Ot.height,ht.depth,Bt,Ot.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,It,Ot.width,Ot.height,ht.depth,0,Ot.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?k&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Ot.width,Ot.height,ht.depth,Bt,Nt,Ot.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ft,It,Ot.width,Ot.height,ht.depth,0,Bt,Nt,Ot.data)}else{ue&&se&&n.texStorage2D(o.TEXTURE_2D,Rt,It,he[0].width,he[0].height);for(let ft=0,Xt=he.length;ft<Xt;ft++)Ot=he[ft],R.format!==ba?Bt!==null?ue?k&&n.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Bt,Ot.data):n.compressedTexImage2D(o.TEXTURE_2D,ft,It,Ot.width,Ot.height,0,Ot.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?k&&n.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Bt,Nt,Ot.data):n.texImage2D(o.TEXTURE_2D,ft,It,Ot.width,Ot.height,0,Bt,Nt,Ot.data)}else if(R.isDataArrayTexture)if(ue){if(se&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,It,ht.width,ht.height,ht.depth),k)if(R.layerUpdates.size>0){const ft=IS(ht.width,ht.height,R.format,R.type);for(const Xt of R.layerUpdates){const Pt=ht.data.subarray(Xt*ft/ht.data.BYTES_PER_ELEMENT,(Xt+1)*ft/ht.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Xt,ht.width,ht.height,1,Bt,Nt,Pt)}R.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Nt,ht.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,It,ht.width,ht.height,ht.depth,0,Bt,Nt,ht.data);else if(R.isData3DTexture)ue?(se&&n.texStorage3D(o.TEXTURE_3D,Rt,It,ht.width,ht.height,ht.depth),k&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Nt,ht.data)):n.texImage3D(o.TEXTURE_3D,0,It,ht.width,ht.height,ht.depth,0,Bt,Nt,ht.data);else if(R.isFramebufferTexture){if(se)if(ue)n.texStorage2D(o.TEXTURE_2D,Rt,It,ht.width,ht.height);else{let ft=ht.width,Xt=ht.height;for(let Pt=0;Pt<Rt;Pt++)n.texImage2D(o.TEXTURE_2D,Pt,It,ft,Xt,0,Bt,Nt,null),ft>>=1,Xt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in o){const ft=o.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),ht.parentNode!==ft){ft.appendChild(ht),v.add(R),ft.onpaint=ce=>{const pn=ce.changedElements;for(const He of v)pn.includes(He.image)&&(He.needsUpdate=!0)},ft.requestPaint();return}const Xt=0,Pt=o.RGBA,bt=o.RGBA,Zt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Xt,Pt,bt,Zt,ht),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(he.length>0){if(ue&&se){const ft=Fe(he[0]);n.texStorage2D(o.TEXTURE_2D,Rt,It,ft.width,ft.height)}for(let ft=0,Xt=he.length;ft<Xt;ft++)Ot=he[ft],ue?k&&n.texSubImage2D(o.TEXTURE_2D,ft,0,0,Bt,Nt,Ot):n.texImage2D(o.TEXTURE_2D,ft,It,Bt,Nt,Ot);R.generateMipmaps=!1}else if(ue){if(se){const ft=Fe(ht);n.texStorage2D(o.TEXTURE_2D,Rt,It,ft.width,ft.height)}k&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Nt,ht)}else n.texImage2D(o.TEXTURE_2D,0,It,Bt,Nt,ht);y(R)&&A(dt),Mt.__version=Dt.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function ie(z,R,K){if(R.image.length!==6)return;const dt=at(z,R),xt=R.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+K);const Dt=a.get(xt);if(xt.version!==Dt.__version||dt===!0){n.activeTexture(o.TEXTURE0+K);const Mt=Le.getPrimaries(Le.workingColorSpace),ct=R.colorSpace===tr?null:Le.getPrimaries(R.colorSpace),ht=R.colorSpace===tr||Mt===ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Bt=R.isCompressedTexture||R.image[0].isCompressedTexture,Nt=R.image[0]&&R.image[0].isDataTexture,It=[];for(let bt=0;bt<6;bt++)!Bt&&!Nt?It[bt]=x(R.image[bt],!0,r.maxCubemapSize):It[bt]=Nt?R.image[bt].image:R.image[bt],It[bt]=Ct(R,It[bt]);const Ot=It[0],he=l.convert(R.format,R.colorSpace),ue=l.convert(R.type),se=w(R.internalFormat,he,ue,R.normalized,R.colorSpace),k=R.isVideoTexture!==!0,Rt=Dt.__version===void 0||dt===!0,ft=xt.dataReady;let Xt=N(R,Ot);Ut(o.TEXTURE_CUBE_MAP,R);let Pt;if(Bt){k&&Rt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,se,Ot.width,Ot.height);for(let bt=0;bt<6;bt++){Pt=It[bt].mipmaps;for(let Zt=0;Zt<Pt.length;Zt++){const ce=Pt[Zt];R.format!==ba?he!==null?k?ft&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,ce.width,ce.height,he,ce.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,se,ce.width,ce.height,0,ce.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ft&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,ce.width,ce.height,he,ue,ce.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,se,ce.width,ce.height,0,he,ue,ce.data)}}}else{if(Pt=R.mipmaps,k&&Rt){Pt.length>0&&Xt++;const bt=Fe(It[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,se,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Nt){k?ft&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,It[bt].width,It[bt].height,he,ue,It[bt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,se,It[bt].width,It[bt].height,0,he,ue,It[bt].data);for(let Zt=0;Zt<Pt.length;Zt++){const pn=Pt[Zt].image[bt].image;k?ft&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,pn.width,pn.height,he,ue,pn.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,se,pn.width,pn.height,0,he,ue,pn.data)}}else{k?ft&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,he,ue,It[bt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,se,he,ue,It[bt]);for(let Zt=0;Zt<Pt.length;Zt++){const ce=Pt[Zt];k?ft&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,he,ue,ce.image[bt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,se,he,ue,ce.image[bt])}}}y(R)&&A(o.TEXTURE_CUBE_MAP),Dt.__version=xt.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function te(z,R,K,dt,xt,Dt){const Mt=l.convert(K.format,K.colorSpace),ct=l.convert(K.type),ht=w(K.internalFormat,Mt,ct,K.normalized,K.colorSpace),Bt=a.get(R),Nt=a.get(K);if(Nt.__renderTarget=R,!Bt.__hasExternalTextures){const It=Math.max(1,R.width>>Dt),Ot=Math.max(1,R.height>>Dt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?n.texImage3D(xt,Dt,ht,It,Ot,R.depth,0,Mt,ct,null):n.texImage2D(xt,Dt,ht,It,Ot,0,Mt,ct,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),xe(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,xt,Nt.__webglTexture,0,sn(R)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,xt,Nt.__webglTexture,Dt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(z,R,K){if(o.bindRenderbuffer(o.RENDERBUFFER,z),R.depthBuffer){const dt=R.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,Dt=P(R.stencilBuffer,xt),Mt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;xe(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,sn(R),Dt,R.width,R.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,sn(R),Dt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,z)}else{const dt=R.textures;for(let xt=0;xt<dt.length;xt++){const Dt=dt[xt],Mt=l.convert(Dt.format,Dt.colorSpace),ct=l.convert(Dt.type),ht=w(Dt.internalFormat,Mt,ct,Dt.normalized,Dt.colorSpace);xe(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,sn(R),ht,R.width,R.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,sn(R),ht,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ht,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ge(z,R,K){const dt=R.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=a.get(R.depthTexture);if(xt.__renderTarget=R,(!xt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),dt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,R.depthTexture.addEventListener("dispose",O)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Ut(o.TEXTURE_CUBE_MAP,R.depthTexture);const Bt=l.convert(R.depthTexture.format),Nt=l.convert(R.depthTexture.type);let It;R.depthTexture.format===gs?It=o.DEPTH_COMPONENT24:R.depthTexture.format===kr&&(It=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,It,R.width,R.height,0,Bt,Nt,null)}}else it(R.depthTexture,0);const Dt=xt.__webglTexture,Mt=sn(R),ct=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+K:o.TEXTURE_2D,ht=R.depthTexture.format===kr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(R.depthTexture.format===gs)xe(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,ct,Dt,0,Mt):o.framebufferTexture2D(o.FRAMEBUFFER,ht,ct,Dt,0);else if(R.depthTexture.format===kr)xe(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,ct,Dt,0,Mt):o.framebufferTexture2D(o.FRAMEBUFFER,ht,ct,Dt,0);else throw new Error("Unknown depthTexture format")}function ve(z){const R=a.get(z),K=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){const dt=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),dt){const xt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),R.__depthDisposeCallback=xt}R.__boundDepthTexture=dt}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(K)for(let dt=0;dt<6;dt++)ge(R.__webglFramebuffer[dt],z,dt);else{const dt=z.texture.mipmaps;dt&&dt.length>0?ge(R.__webglFramebuffer[0],z,0):ge(R.__webglFramebuffer,z,0)}else if(K){R.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[dt]),R.__webglDepthbuffer[dt]===void 0)R.__webglDepthbuffer[dt]=o.createRenderbuffer(),Be(R.__webglDepthbuffer[dt],z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=R.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,Dt)}}else{const dt=z.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Be(R.__webglDepthbuffer,z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,Dt)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Pe(z,R,K){const dt=a.get(z);R!==void 0&&te(dt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&ve(z)}function ae(z){const R=z.texture,K=a.get(z),dt=a.get(R);z.addEventListener("dispose",E);const xt=z.textures,Dt=z.isWebGLCubeRenderTarget===!0,Mt=xt.length>1;if(Mt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=R.version,c.memory.textures++),Dt){K.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[ct]=[];for(let ht=0;ht<R.mipmaps.length;ht++)K.__webglFramebuffer[ct][ht]=o.createFramebuffer()}else K.__webglFramebuffer[ct]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let ct=0;ct<R.mipmaps.length;ct++)K.__webglFramebuffer[ct]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Mt)for(let ct=0,ht=xt.length;ct<ht;ct++){const Bt=a.get(xt[ct]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&xe(z)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ct=0;ct<xt.length;ct++){const ht=xt[ct];K.__webglColorRenderbuffer[ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[ct]);const Bt=l.convert(ht.format,ht.colorSpace),Nt=l.convert(ht.type),It=w(ht.internalFormat,Bt,Nt,ht.normalized,ht.colorSpace,z.isXRRenderTarget===!0),Ot=sn(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,It,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ct,o.RENDERBUFFER,K.__webglColorRenderbuffer[ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Be(K.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Dt){n.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),Ut(o.TEXTURE_CUBE_MAP,R);for(let ct=0;ct<6;ct++)if(R.mipmaps&&R.mipmaps.length>0)for(let ht=0;ht<R.mipmaps.length;ht++)te(K.__webglFramebuffer[ct][ht],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else te(K.__webglFramebuffer[ct],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(R)&&A(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let ct=0,ht=xt.length;ct<ht;ct++){const Bt=xt[ct],Nt=a.get(Bt);let It=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(It=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(It,Nt.__webglTexture),Ut(It,Bt),te(K.__webglFramebuffer,z,Bt,o.COLOR_ATTACHMENT0+ct,It,0),y(Bt)&&A(It)}n.unbindTexture()}else{let ct=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ct=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ct,dt.__webglTexture),Ut(ct,R),R.mipmaps&&R.mipmaps.length>0)for(let ht=0;ht<R.mipmaps.length;ht++)te(K.__webglFramebuffer[ht],z,R,o.COLOR_ATTACHMENT0,ct,ht);else te(K.__webglFramebuffer,z,R,o.COLOR_ATTACHMENT0,ct,0);y(R)&&A(ct),n.unbindTexture()}z.depthBuffer&&ve(z)}function qe(z){const R=z.textures;for(let K=0,dt=R.length;K<dt;K++){const xt=R[K];if(y(xt)){const Dt=C(z),Mt=a.get(xt).__webglTexture;n.bindTexture(Dt,Mt),A(Dt),n.unbindTexture()}}}const Ge=[],De=[];function j(z){if(z.samples>0){if(xe(z)===!1){const R=z.textures,K=z.width,dt=z.height;let xt=o.COLOR_BUFFER_BIT;const Dt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=a.get(z),ct=R.length>1;if(ct)for(let Bt=0;Bt<R.length;Bt++)n.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const ht=z.texture.mipmaps;ht&&ht.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Bt=0;Bt<R.length;Bt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[Bt]);const Nt=a.get(R[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Nt,0)}o.blitFramebuffer(0,0,K,dt,0,0,K,dt,xt,o.NEAREST),p===!0&&(Ge.length=0,De.length=0,Ge.push(o.COLOR_ATTACHMENT0+Bt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ge.push(Dt),De.push(Dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,De)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ct)for(let Bt=0;Bt<R.length;Bt++){n.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[Bt]);const Nt=a.get(R[Bt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,Nt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const R=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function sn(z){return Math.min(r.maxSamples,z.samples)}function xe(z){const R=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ze(z){const R=c.render.frame;_.get(z)!==R&&(_.set(z,R),z.update())}function Ct(z,R){const K=z.colorSpace,dt=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||K!==kf&&K!==tr&&(Le.getTransfer(K)===$e?(dt!==ba||xt!==ki)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",K)),R}function Fe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=I,this.resetTextureUnits=nt,this.getTextureUnits=ot,this.setTextureUnits=X,this.setTexture2D=it,this.setTexture2DArray=pt,this.setTexture3D=St,this.setTextureCube=B,this.rebindTextures=Pe,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=te,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bC(o,t){function n(a,r=tr){let l;const c=Le.getTransfer(r);if(a===ki)return o.UNSIGNED_BYTE;if(a===b0)return o.UNSIGNED_SHORT_4_4_4_4;if(a===E0)return o.UNSIGNED_SHORT_5_5_5_1;if(a===zy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Iy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Oy)return o.BYTE;if(a===Py)return o.SHORT;if(a===wu)return o.UNSIGNED_SHORT;if(a===T0)return o.INT;if(a===Ga)return o.UNSIGNED_INT;if(a===Ta)return o.FLOAT;if(a===Yi)return o.HALF_FLOAT;if(a===By)return o.ALPHA;if(a===Fy)return o.RGB;if(a===ba)return o.RGBA;if(a===gs)return o.DEPTH_COMPONENT;if(a===kr)return o.DEPTH_STENCIL;if(a===A0)return o.RED;if(a===R0)return o.RED_INTEGER;if(a===Kr)return o.RG;if(a===w0)return o.RG_INTEGER;if(a===C0)return o.RGBA_INTEGER;if(a===Uf||a===Lf||a===Nf||a===Of)if(c===$e)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Uf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Lf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Nf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Of)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Uf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Lf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Nf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Of)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Tm||a===bm||a===Em||a===Am)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Tm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===bm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Em)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Am)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Rm||a===wm||a===Cm||a===Dm||a===Um||a===Gf||a===Lm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Rm||a===wm)return c===$e?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Cm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Dm)return l.COMPRESSED_R11_EAC;if(a===Um)return l.COMPRESSED_SIGNED_R11_EAC;if(a===Gf)return l.COMPRESSED_RG11_EAC;if(a===Lm)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Nm||a===Om||a===Pm||a===zm||a===Im||a===Bm||a===Fm||a===Hm||a===Gm||a===Vm||a===km||a===Xm||a===Wm||a===qm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Nm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Om)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Pm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Im)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Bm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Fm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Hm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Gm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Vm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===km)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Xm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Wm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===qm)return c===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ym||a===jm||a===Zm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Ym)return c===$e?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===jm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Zm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Km||a===Qm||a===Vf||a===Jm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===Km)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Qm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Vf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Jm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Cu?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const EC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Zy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new $n({vertexShader:EC,fragmentShader:AC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cn(new rh(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wC extends Qr{constructor(t,n){super();const a=this;let r=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,v=null,g=null,S=null,T=null;const M=typeof XRWebGLBinding<"u",x=new RC,y={},A=n.getContextAttributes();let C=null,w=null;const P=[],N=[],O=new pe;let E=null;const U=new Vi;U.viewport=new Rn;const G=new Vi;G.viewport=new Rn;const H=[U,G],W=new OE;let nt=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let yt=P[at];return yt===void 0&&(yt=new Up,P[at]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(at){let yt=P[at];return yt===void 0&&(yt=new Up,P[at]=yt),yt.getGripSpace()},this.getHand=function(at){let yt=P[at];return yt===void 0&&(yt=new Up,P[at]=yt),yt.getHandSpace()};function X(at){const yt=N.indexOf(at.inputSource);if(yt===-1)return;const Tt=P[yt];Tt!==void 0&&(Tt.update(at.inputSource,at.frame,d||c),Tt.dispatchEvent({type:at.type,data:at.inputSource}))}function I(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",F);for(let at=0;at<P.length;at++){const yt=N[at];yt!==null&&(N[at]=null,P[at].disconnect(yt))}nt=null,ot=null,x.reset();for(const at in y)delete y[at];t.setRenderTarget(C),S=null,g=null,v=null,r=null,w=null,Ut.stop(),a.isPresenting=!1,t.setPixelRatio(E),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){l=at,a.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){f=at,a.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&M&&(v=new XRWebGLBinding(r,n)),v},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(at){if(r=at,r!==null){if(C=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",I),r.addEventListener("inputsourceschange",F),A.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(O),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,kt=null,ie=null;A.depth&&(ie=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=A.stencil?kr:gs,kt=A.stencil?Cu:Ga);const te={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(te),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),w=new bi(g.textureWidth,g.textureHeight,{format:ba,type:ki,depthTexture:new ll(g.textureWidth,g.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(r,n,Tt),r.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new bi(S.framebufferWidth,S.framebufferHeight,{format:ba,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await r.requestReferenceSpace(f),Ut.setContext(r),Ut.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(at){for(let yt=0;yt<at.removed.length;yt++){const Tt=at.removed[yt],kt=N.indexOf(Tt);kt>=0&&(N[kt]=null,P[kt].disconnect(Tt))}for(let yt=0;yt<at.added.length;yt++){const Tt=at.added[yt];let kt=N.indexOf(Tt);if(kt===-1){for(let te=0;te<P.length;te++)if(te>=N.length){N.push(Tt),kt=te;break}else if(N[te]===null){N[te]=Tt,kt=te;break}if(kt===-1)break}const ie=P[kt];ie&&ie.connect(Tt)}}const it=new Z,pt=new Z;function St(at,yt,Tt){it.setFromMatrixPosition(yt.matrixWorld),pt.setFromMatrixPosition(Tt.matrixWorld);const kt=it.distanceTo(pt),ie=yt.projectionMatrix.elements,te=Tt.projectionMatrix.elements,Be=ie[14]/(ie[10]-1),ge=ie[14]/(ie[10]+1),ve=(ie[9]+1)/ie[5],Pe=(ie[9]-1)/ie[5],ae=(ie[8]-1)/ie[0],qe=(te[8]+1)/te[0],Ge=Be*ae,De=Be*qe,j=kt/(-ae+qe),sn=j*-ae;if(yt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(sn),at.translateZ(j),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),ie[10]===-1)at.projectionMatrix.copy(yt.projectionMatrix),at.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const xe=Be+j,ze=ge+j,Ct=Ge-sn,Fe=De+(kt-sn),z=ve*ge/ze*xe,R=Pe*ge/ze*xe;at.projectionMatrix.makePerspective(Ct,Fe,z,R,xe,ze),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function B(at,yt){yt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(yt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(r===null)return;let yt=at.near,Tt=at.far;x.texture!==null&&(x.depthNear>0&&(yt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),W.near=G.near=U.near=yt,W.far=G.far=U.far=Tt,(nt!==W.near||ot!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),nt=W.near,ot=W.far),W.layers.mask=at.layers.mask|6,U.layers.mask=W.layers.mask&-5,G.layers.mask=W.layers.mask&-3;const kt=at.parent,ie=W.cameras;B(W,kt);for(let te=0;te<ie.length;te++)B(ie[te],kt);ie.length===2?St(W,U,G):W.projectionMatrix.copy(U.projectionMatrix),Q(at,W,kt)};function Q(at,yt,Tt){Tt===null?at.matrix.copy(yt.matrixWorld):(at.matrix.copy(Tt.matrixWorld),at.matrix.invert(),at.matrix.multiply(yt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(yt.projectionMatrix),at.projectionMatrixInverse.copy(yt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=e0*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(at){p=at,g!==null&&(g.fixedFoveation=at),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=at)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(at){return y[at]};let vt=null;function At(at,yt){if(_=yt.getViewerPose(d||c),T=yt,_!==null){const Tt=_.views;S!==null&&(t.setRenderTargetFramebuffer(w,S.framebuffer),t.setRenderTarget(w));let kt=!1;Tt.length!==W.cameras.length&&(W.cameras.length=0,kt=!0);for(let ge=0;ge<Tt.length;ge++){const ve=Tt[ge];let Pe=null;if(S!==null)Pe=S.getViewport(ve);else{const qe=v.getViewSubImage(g,ve);Pe=qe.viewport,ge===0&&(t.setRenderTargetTextures(w,qe.colorTexture,qe.depthStencilTexture),t.setRenderTarget(w))}let ae=H[ge];ae===void 0&&(ae=new Vi,ae.layers.enable(ge),ae.viewport=new Rn,H[ge]=ae),ae.matrix.fromArray(ve.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ge===0&&(W.matrix.copy(ae.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),kt===!0&&W.cameras.push(ae)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){v=a.getBinding();const ge=v.getDepthInformation(Tt[0]);ge&&ge.isValid&&ge.texture&&x.init(ge,r.renderState)}if(ie&&ie.includes("camera-access")&&M){t.state.unbindTexture(),v=a.getBinding();for(let ge=0;ge<Tt.length;ge++){const ve=Tt[ge].camera;if(ve){let Pe=y[ve];Pe||(Pe=new Zy,y[ve]=Pe);const ae=v.getCameraImage(ve);Pe.sourceTexture=ae}}}}for(let Tt=0;Tt<P.length;Tt++){const kt=N[Tt],ie=P[Tt];kt!==null&&ie!==void 0&&ie.update(kt,yt,d||c)}vt&&vt(at,yt),yt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:yt}),T=null}const Ut=new $y;Ut.setAnimationLoop(At),this.setAnimationLoop=function(at){vt=at},this.dispose=function(){}}}const CC=new hn,rM=new _e;rM.set(-1,0,0,0,1,0,0,0,1);function DC(o,t){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function a(x,y){y.color.getRGB(x.fogColor.value,Ky(o)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,A,C,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(x,y):y.isMeshLambertMaterial?(l(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(x,y),v(x,y)):y.isMeshPhongMaterial?(l(x,y),_(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(x,y),g(x,y),y.isMeshPhysicalMaterial&&S(x,y,w)):y.isMeshMatcapMaterial?(l(x,y),T(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),M(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?p(x,y,A,C):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Ti&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Ti&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const A=t.get(y),C=A.envMap,w=A.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(CC.makeRotationFromEuler(w)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(rM),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,A,C){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*A,x.scale.value=C*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function _(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,A){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ti&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const A=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function UC(o,t,n,a){let r={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,C){const w=C.program;a.uniformBlockBinding(A,w)}function d(A,C){let w=r[A.id];w===void 0&&(T(A),w=_(A),r[A.id]=w,A.addEventListener("dispose",x));const P=C.program;a.updateUBOMapping(A,P);const N=t.render.frame;l[A.id]!==N&&(g(A),l[A.id]=N)}function _(A){const C=v();A.__bindingPointIndex=C;const w=o.createBuffer(),P=A.__size,N=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,P,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,w),w}function v(){for(let A=0;A<f;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const C=r[A.id],w=A.uniforms,P=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let N=0,O=w.length;N<O;N++){const E=Array.isArray(w[N])?w[N]:[w[N]];for(let U=0,G=E.length;U<G;U++){const H=E[U];if(S(H,N,U,P)===!0){const W=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value];let ot=0;for(let X=0;X<nt.length;X++){const I=nt[X],F=M(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,W+ot,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):ArrayBuffer.isView(I)?H.__data.set(new I.constructor(I.buffer,I.byteOffset,H.__data.length)):(I.toArray(H.__data,ot),ot+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(A,C,w,P){const N=A.value,O=C+"_"+w;if(P[O]===void 0)return typeof N=="number"||typeof N=="boolean"?P[O]=N:ArrayBuffer.isView(N)?P[O]=N.slice():P[O]=N.clone(),!0;{const E=P[O];if(typeof N=="number"||typeof N=="boolean"){if(E!==N)return P[O]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(E.equals(N)===!1)return E.copy(N),!0}}return!1}function T(A){const C=A.uniforms;let w=0;const P=16;for(let O=0,E=C.length;O<E;O++){const U=Array.isArray(C[O])?C[O]:[C[O]];for(let G=0,H=U.length;G<H;G++){const W=U[G],nt=Array.isArray(W.value)?W.value:[W.value];for(let ot=0,X=nt.length;ot<X;ot++){const I=nt[ot],F=M(I),it=w%P,pt=it%F.boundary,St=it+pt;w+=pt,St!==0&&P-St<F.storage&&(w+=P-St),W.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=F.storage}}}const N=w%P;return N>0&&(w+=P-N),A.__size=w,A.__cache={},this}function M(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(C.boundary=16,C.storage=A.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",A),C}function x(A){const C=A.target;C.removeEventListener("dispose",x);const w=c.indexOf(C.__bindingPointIndex);c.splice(w,1),o.deleteBuffer(r[C.id]),delete r[C.id],delete l[C.id]}function y(){for(const A in r)o.deleteBuffer(r[A]);c=[],r={},l={}}return{bind:p,update:d,dispose:y}}const LC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let La=null;function NC(){return La===null&&(La=new Wy(LC,16,16,Kr,Yi),La.name="DFG_LUT",La.minFilter=oi,La.magFilter=oi,La.wrapS=ms,La.wrapT=ms,La.generateMipmaps=!1,La.needsUpdate=!0),La}class OC{constructor(t={}){const{canvas:n=Zb(),context:a=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ki}=t;this.isWebGLRenderer=!0;let T;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=a.getContextAttributes().alpha}else T=c;const M=S,x=new Set([C0,w0,R0]),y=new Set([ki,Ga,wu,Cu,b0,E0]),A=new Uint32Array(4),C=new Int32Array(4),w=new Z;let P=null,N=null;const O=[],E=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let H=!1,W=null;this._outputColorSpace=ua;let nt=0,ot=0,X=null,I=-1,F=null;const it=new Rn,pt=new Rn;let St=null;const B=new ye(0);let Q=0,vt=n.width,At=n.height,Ut=1,at=null,yt=null;const Tt=new Rn(0,0,vt,At),kt=new Rn(0,0,vt,At);let ie=!1;const te=new O0;let Be=!1,ge=!1;const ve=new hn,Pe=new Z,ae=new Rn,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function De(){return X===null?Ut:1}let j=a;function sn(D,q){return n.getContext(D,q)}try{const D={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${y0}`),n.addEventListener("webglcontextlost",bt,!1),n.addEventListener("webglcontextrestored",Zt,!1),n.addEventListener("webglcontextcreationerror",ce,!1),j===null){const q="webgl2";if(j=sn(q,D),j===null)throw sn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Ie("WebGLRenderer: "+D.message),D}let xe,ze,Ct,Fe,z,R,K,dt,xt,Dt,Mt,ct,ht,Bt,Nt,It,Ot,he,ue,se,k,Rt,ft;function Xt(){xe=new NR(j),xe.init(),k=new bC(j,xe),ze=new ER(j,xe,t,k),Ct=new MC(j,xe),ze.reversedDepthBuffer&&g&&Ct.buffers.depth.setReversed(!0),Fe=new zR(j),z=new lC,R=new TC(j,xe,Ct,z,ze,k,Fe),K=new LR(G),dt=new HE(j),Rt=new TR(j,dt),xt=new OR(j,dt,Fe,Rt),Dt=new BR(j,xt,dt,Rt,Fe),he=new IR(j,ze,R),Nt=new AR(z),Mt=new oC(G,K,xe,ze,Rt,Nt),ct=new DC(G,z),ht=new cC,Bt=new _C(xe),Ot=new MR(G,K,Ct,Dt,T,p),It=new yC(G,Dt,ze),ft=new UC(j,Fe,ze,Ct),ue=new bR(j,xe,Fe),se=new PR(j,xe,Fe),Fe.programs=Mt.programs,G.capabilities=ze,G.extensions=xe,G.properties=z,G.renderLists=ht,G.shadowMap=It,G.state=Ct,G.info=Fe}Xt(),M!==ki&&(U=new HR(M,n.width,n.height,r,l));const Pt=new wC(G,j);this.xr=Pt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const D=xe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=xe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(D){D!==void 0&&(Ut=D,this.setSize(vt,At,!1))},this.getSize=function(D){return D.set(vt,At)},this.setSize=function(D,q,et=!0){if(Pt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=D,At=q,n.width=Math.floor(D*Ut),n.height=Math.floor(q*Ut),et===!0&&(n.style.width=D+"px",n.style.height=q+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(vt*Ut,At*Ut).floor()},this.setDrawingBufferSize=function(D,q,et){vt=D,At=q,Ut=et,n.width=Math.floor(D*et),n.height=Math.floor(q*et),this.setViewport(0,0,D,q)},this.setEffects=function(D){if(M===ki){Ie("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let q=0;q<D.length;q++)if(D[q].isOutputPass===!0){fe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(it)},this.getViewport=function(D){return D.copy(Tt)},this.setViewport=function(D,q,et,$){D.isVector4?Tt.set(D.x,D.y,D.z,D.w):Tt.set(D,q,et,$),Ct.viewport(it.copy(Tt).multiplyScalar(Ut).round())},this.getScissor=function(D){return D.copy(kt)},this.setScissor=function(D,q,et,$){D.isVector4?kt.set(D.x,D.y,D.z,D.w):kt.set(D,q,et,$),Ct.scissor(pt.copy(kt).multiplyScalar(Ut).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(D){Ct.setScissorTest(ie=D)},this.setOpaqueSort=function(D){at=D},this.setTransparentSort=function(D){yt=D},this.getClearColor=function(D){return D.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,et=!0){let $=0;if(D){let tt=!1;if(X!==null){const zt=X.texture.format;tt=x.has(zt)}if(tt){const zt=X.texture.type,Gt=y.has(zt),wt=Ot.getClearColor(),Wt=Ot.getClearAlpha(),Ht=wt.r,ee=wt.g,de=wt.b;Gt?(A[0]=Ht,A[1]=ee,A[2]=de,A[3]=Wt,j.clearBufferuiv(j.COLOR,0,A)):(C[0]=Ht,C[1]=ee,C[2]=de,C[3]=Wt,j.clearBufferiv(j.COLOR,0,C))}else $|=j.COLOR_BUFFER_BIT}q&&($|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&($|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&j.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),W=D},this.dispose=function(){n.removeEventListener("webglcontextlost",bt,!1),n.removeEventListener("webglcontextrestored",Zt,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Ot.dispose(),ht.dispose(),Bt.dispose(),z.dispose(),K.dispose(),Dt.dispose(),Rt.dispose(),ft.dispose(),Mt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",ys),Pt.removeEventListener("sessionend",pr),Ln.stop()};function bt(D){D.preventDefault(),iS("WebGLRenderer: Context Lost."),H=!0}function Zt(){iS("WebGLRenderer: Context Restored."),H=!1;const D=Fe.autoReset,q=It.enabled,et=It.autoUpdate,$=It.needsUpdate,tt=It.type;Xt(),Fe.autoReset=D,It.enabled=q,It.autoUpdate=et,It.needsUpdate=$,It.type=tt}function ce(D){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function pn(D){const q=D.target;q.removeEventListener("dispose",pn),He(q)}function He(D){di(D),z.remove(D)}function di(D){const q=z.get(D).programs;q!==void 0&&(q.forEach(function(et){Mt.releaseProgram(et)}),D.isShaderMaterial&&Mt.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,et,$,tt,zt){q===null&&(q=qe);const Gt=tt.isMesh&&tt.matrixWorld.determinant()<0,wt=oe(D,q,et,$,tt);Ct.setMaterial($,Gt);let Wt=et.index,Ht=1;if($.wireframe===!0){if(Wt=xt.getWireframeAttribute(et),Wt===void 0)return;Ht=2}const ee=et.drawRange,de=et.attributes.position;let Jt=ee.start*Ht,Ve=(ee.start+ee.count)*Ht;zt!==null&&(Jt=Math.max(Jt,zt.start*Ht),Ve=Math.min(Ve,(zt.start+zt.count)*Ht)),Wt!==null?(Jt=Math.max(Jt,0),Ve=Math.min(Ve,Wt.count)):de!=null&&(Jt=Math.max(Jt,0),Ve=Math.min(Ve,de.count));const gn=Ve-Jt;if(gn<0||gn===1/0)return;Rt.setup(tt,$,wt,et,Wt);let on,je=ue;if(Wt!==null&&(on=dt.get(Wt),je=se,je.setIndex(on)),tt.isMesh)$.wireframe===!0?(Ct.setLineWidth($.wireframeLinewidth*De()),je.setMode(j.LINES)):je.setMode(j.TRIANGLES);else if(tt.isLine){let Ze=$.linewidth;Ze===void 0&&(Ze=1),Ct.setLineWidth(Ze*De()),tt.isLineSegments?je.setMode(j.LINES):tt.isLineLoop?je.setMode(j.LINE_LOOP):je.setMode(j.LINE_STRIP)}else tt.isPoints?je.setMode(j.POINTS):tt.isSprite&&je.setMode(j.TRIANGLES);if(tt.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))je.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Ze=tt._multiDrawStarts,jt=tt._multiDrawCounts,ei=tt._multiDrawCount,Ee=Wt?dt.get(Wt).bytesPerElement:1,Hn=z.get($).currentProgram.getUniforms();for(let Di=0;Di<ei;Di++)Hn.setValue(j,"_gl_DrawID",Di),je.render(Ze[Di]/Ee,jt[Di])}else if(tt.isInstancedMesh)je.renderInstances(Jt,gn,tt.count);else if(et.isInstancedBufferGeometry){const Ze=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,jt=Math.min(et.instanceCount,Ze);je.renderInstances(Jt,gn,jt)}else je.render(Jt,gn)};function ui(D,q,et){D.transparent===!0&&D.side===yi&&D.forceSinglePass===!1?(D.side=Ti,D.needsUpdate=!0,Xa(D,q,et),D.side=lr,D.needsUpdate=!0,Xa(D,q,et),D.side=yi):Xa(D,q,et)}this.compile=function(D,q,et=null){et===null&&(et=D),N=Bt.get(et),N.init(q),E.push(N),et.traverseVisible(function(tt){tt.isLight&&tt.layers.test(q.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),D!==et&&D.traverseVisible(function(tt){tt.isLight&&tt.layers.test(q.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),N.setupLights();const $=new Set;return D.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const zt=tt.material;if(zt)if(Array.isArray(zt))for(let Gt=0;Gt<zt.length;Gt++){const wt=zt[Gt];ui(wt,et,tt),$.add(wt)}else ui(zt,et,tt),$.add(zt)}),N=E.pop(),$},this.compileAsync=function(D,q,et=null){const $=this.compile(D,q,et);return new Promise(tt=>{function zt(){if($.forEach(function(Gt){z.get(Gt).currentProgram.isReady()&&$.delete(Gt)}),$.size===0){tt(D);return}setTimeout(zt,10)}xe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let ka=null;function dr(D){ka&&ka(D)}function ys(){Ln.stop()}function pr(){Ln.start()}const Ln=new $y;Ln.setAnimationLoop(dr),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(D){ka=D,Pt.setAnimationLoop(D),D===null?Ln.stop():Ln.start()},Pt.addEventListener("sessionstart",ys),Pt.addEventListener("sessionend",pr),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;W!==null&&W.renderStart(D,q);const et=Pt.enabled===!0&&Pt.isPresenting===!0,$=U!==null&&(X===null||et)&&U.begin(G,X);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(q),q=Pt.getCamera()),D.isScene===!0&&D.onBeforeRender(G,D,q,X),N=Bt.get(D,E.length),N.init(q),N.state.textureUnits=R.getTextureUnits(),E.push(N),ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(ve,Ia,q.reversedDepth),ge=this.localClippingEnabled,Be=Nt.init(this.clippingPlanes,ge),P=ht.get(D,O.length),P.init(),O.push(P),Pt.enabled===!0&&Pt.isPresenting===!0){const Gt=G.xr.getDepthSensingMesh();Gt!==null&&rn(Gt,q,-1/0,G.sortObjects)}rn(D,q,0,G.sortObjects),P.finish(),G.sortObjects===!0&&P.sort(at,yt),Ge=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Ge&&Ot.addToRenderList(P,D),this.info.render.frame++,Be===!0&&Nt.beginShadows();const tt=N.state.shadowsArray;if(It.render(tt,D,q),Be===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&U.hasRenderPass())===!1){const Gt=P.opaque,wt=P.transmissive;if(N.setupLights(),q.isArrayCamera){const Wt=q.cameras;if(wt.length>0)for(let Ht=0,ee=Wt.length;Ht<ee;Ht++){const de=Wt[Ht];da(Gt,wt,D,de)}Ge&&Ot.render(D);for(let Ht=0,ee=Wt.length;Ht<ee;Ht++){const de=Wt[Ht];yn(P,D,de,de.viewport)}}else wt.length>0&&da(Gt,wt,D,q),Ge&&Ot.render(D),yn(P,D,q)}X!==null&&ot===0&&(R.updateMultisampleRenderTarget(X),R.updateRenderTargetMipmap(X)),$&&U.end(G),D.isScene===!0&&D.onAfterRender(G,D,q),Rt.resetDefaultState(),I=-1,F=null,E.pop(),E.length>0?(N=E[E.length-1],R.setTextureUnits(N.state.textureUnits),Be===!0&&Nt.setGlobalState(G.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,W!==null&&W.renderEnd()};function rn(D,q,et,$){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)et=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLightProbeGrid)N.pushLightProbeGrid(D);else if(D.isLight)N.pushLight(D),D.castShadow&&N.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||te.intersectsSprite(D)){$&&ae.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ve);const Gt=Dt.update(D),wt=D.material;wt.visible&&P.push(D,Gt,wt,et,ae.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||te.intersectsObject(D))){const Gt=Dt.update(D),wt=D.material;if($&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ae.copy(D.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ae.copy(Gt.boundingSphere.center)),ae.applyMatrix4(D.matrixWorld).applyMatrix4(ve)),Array.isArray(wt)){const Wt=Gt.groups;for(let Ht=0,ee=Wt.length;Ht<ee;Ht++){const de=Wt[Ht],Jt=wt[de.materialIndex];Jt&&Jt.visible&&P.push(D,Gt,Jt,et,ae.z,de)}}else wt.visible&&P.push(D,Gt,wt,et,ae.z,null)}}const zt=D.children;for(let Gt=0,wt=zt.length;Gt<wt;Gt++)rn(zt[Gt],q,et,$)}function yn(D,q,et,$){const{opaque:tt,transmissive:zt,transparent:Gt}=D;N.setupLightsView(et),Be===!0&&Nt.setGlobalState(G.clippingPlanes,et),$&&Ct.viewport(it.copy($)),tt.length>0&&pa(tt,q,et),zt.length>0&&pa(zt,q,et),Gt.length>0&&pa(Gt,q,et),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function da(D,q,et,$){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[$.id]===void 0){const Jt=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[$.id]=new bi(1,1,{generateMipmaps:!0,type:Jt?Yi:ki,minFilter:Vr,samples:Math.max(4,ze.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const zt=N.state.transmissionRenderTarget[$.id],Gt=$.viewport||it;zt.setSize(Gt.z*G.transmissionResolutionScale,Gt.w*G.transmissionResolutionScale);const wt=G.getRenderTarget(),Wt=G.getActiveCubeFace(),Ht=G.getActiveMipmapLevel();G.setRenderTarget(zt),G.getClearColor(B),Q=G.getClearAlpha(),Q<1&&G.setClearColor(16777215,.5),G.clear(),Ge&&Ot.render(et);const ee=G.toneMapping;G.toneMapping=Ha;const de=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),N.setupLightsView($),Be===!0&&Nt.setGlobalState(G.clippingPlanes,$),pa(D,et,$),R.updateMultisampleRenderTarget(zt),R.updateRenderTargetMipmap(zt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ve=0,gn=q.length;Ve<gn;Ve++){const on=q[Ve],{object:je,geometry:Ze,material:jt,group:ei}=on;if(jt.side===yi&&je.layers.test($.layers)){const Ee=jt.side;jt.side=Ti,jt.needsUpdate=!0,mr(je,et,$,Ze,jt,ei),jt.side=Ee,jt.needsUpdate=!0,Jt=!0}}Jt===!0&&(R.updateMultisampleRenderTarget(zt),R.updateRenderTargetMipmap(zt))}G.setRenderTarget(wt,Wt,Ht),G.setClearColor(B,Q),de!==void 0&&($.viewport=de),G.toneMapping=ee}function pa(D,q,et){const $=q.isScene===!0?q.overrideMaterial:null;for(let tt=0,zt=D.length;tt<zt;tt++){const Gt=D[tt],{object:wt,geometry:Wt,group:Ht}=Gt;let ee=Gt.material;ee.allowOverride===!0&&$!==null&&(ee=$),wt.layers.test(et.layers)&&mr(wt,q,et,Wt,ee,Ht)}}function mr(D,q,et,$,tt,zt){D.onBeforeRender(G,q,et,$,tt,zt),D.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),tt.onBeforeRender(G,q,et,$,D,zt),tt.transparent===!0&&tt.side===yi&&tt.forceSinglePass===!1?(tt.side=Ti,tt.needsUpdate=!0,G.renderBufferDirect(et,q,$,tt,D,zt),tt.side=lr,tt.needsUpdate=!0,G.renderBufferDirect(et,q,$,tt,D,zt),tt.side=yi):G.renderBufferDirect(et,q,$,tt,D,zt),D.onAfterRender(G,q,et,$,tt,zt)}function Xa(D,q,et){q.isScene!==!0&&(q=qe);const $=z.get(D),tt=N.state.lights,zt=N.state.shadowsArray,Gt=tt.state.version,wt=Mt.getParameters(D,tt.state,zt,q,et,N.state.lightProbeGridArray),Wt=Mt.getProgramCacheKey(wt);let Ht=$.programs;$.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?q.environment:null,$.fog=q.fog;const ee=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;$.envMap=K.get(D.envMap||$.environment,ee),$.envMapRotation=$.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,Ht===void 0&&(D.addEventListener("dispose",pn),Ht=new Map,$.programs=Ht);let de=Ht.get(Wt);if(de!==void 0){if($.currentProgram===de&&$.lightsStateVersion===Gt)return Lt(D,wt),de}else wt.uniforms=Mt.getUniforms(D),W!==null&&D.isNodeMaterial&&W.build(D,et,wt),D.onBeforeCompile(wt,G),de=Mt.acquireProgram(wt,Wt),Ht.set(Wt,de),$.uniforms=wt.uniforms;const Jt=$.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Jt.clippingPlanes=Nt.uniform),Lt(D,wt),$.needsLights=Et(D),$.lightsStateVersion=Gt,$.needsLights&&(Jt.ambientLightColor.value=tt.state.ambient,Jt.lightProbe.value=tt.state.probe,Jt.directionalLights.value=tt.state.directional,Jt.directionalLightShadows.value=tt.state.directionalShadow,Jt.spotLights.value=tt.state.spot,Jt.spotLightShadows.value=tt.state.spotShadow,Jt.rectAreaLights.value=tt.state.rectArea,Jt.ltc_1.value=tt.state.rectAreaLTC1,Jt.ltc_2.value=tt.state.rectAreaLTC2,Jt.pointLights.value=tt.state.point,Jt.pointLightShadows.value=tt.state.pointShadow,Jt.hemisphereLights.value=tt.state.hemi,Jt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=tt.state.spotLightMatrix,Jt.spotLightMap.value=tt.state.spotLightMap,Jt.pointShadowMatrix.value=tt.state.pointShadowMatrix),$.lightProbeGrid=N.state.lightProbeGridArray.length>0,$.currentProgram=de,$.uniformsList=null,de}function Ft(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=zf.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function Lt(D,q){const et=z.get(D);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.batchingColor=q.batchingColor,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.instancingMorph=q.instancingMorph,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function Qt(D,q){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let et=0,$=D.length;et<$;et++){const tt=D[et];if(tt.texture!==null&&tt.boundingBox.containsPoint(w))return tt}return null}function oe(D,q,et,$,tt){q.isScene!==!0&&(q=qe),R.resetTextureUnits();const zt=q.fog,Gt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?q.environment:null,wt=X===null?G.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Le.workingColorSpace,Wt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ht=K.get($.envMap||Gt,Wt),ee=$.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,de=!!et.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Jt=!!et.morphAttributes.position,Ve=!!et.morphAttributes.normal,gn=!!et.morphAttributes.color;let on=Ha;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(on=G.toneMapping);const je=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ze=je!==void 0?je.length:0,jt=z.get($),ei=N.state.lights;if(Be===!0&&(ge===!0||D!==F)){const Ye=D===F&&$.id===I;Nt.setState($,D,Ye)}let Ee=!1;$.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==ei.state.version||jt.outputColorSpace!==wt||tt.isBatchedMesh&&jt.batching===!1||!tt.isBatchedMesh&&jt.batching===!0||tt.isBatchedMesh&&jt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&jt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&jt.instancing===!1||!tt.isInstancedMesh&&jt.instancing===!0||tt.isSkinnedMesh&&jt.skinning===!1||!tt.isSkinnedMesh&&jt.skinning===!0||tt.isInstancedMesh&&jt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&jt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&jt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&jt.instancingMorph===!1&&tt.morphTexture!==null||jt.envMap!==Ht||$.fog===!0&&jt.fog!==zt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Nt.numPlanes||jt.numIntersection!==Nt.numIntersection)||jt.vertexAlphas!==ee||jt.vertexTangents!==de||jt.morphTargets!==Jt||jt.morphNormals!==Ve||jt.morphColors!==gn||jt.toneMapping!==on||jt.morphTargetsCount!==Ze||!!jt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,jt.__version=$.version);let Hn=jt.currentProgram;Ee===!0&&(Hn=Xa($,q,tt),W&&$.isNodeMaterial&&W.onUpdateProgram($,Hn,jt));let Di=!1,ma=!1,Ui=!1;const Ke=Hn.getUniforms(),vn=jt.uniforms;if(Ct.useProgram(Hn.program)&&(Di=!0,ma=!0,Ui=!0),$.id!==I&&(I=$.id,ma=!0),jt.needsLights){const Ye=Qt(N.state.lightProbeGridArray,tt);jt.lightProbeGrid!==Ye&&(jt.lightProbeGrid=Ye,ma=!0)}if(Di||F!==D){Ct.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ke.setValue(j,"projectionMatrix",D.projectionMatrix),Ke.setValue(j,"viewMatrix",D.matrixWorldInverse);const Ea=Ke.map.cameraPosition;Ea!==void 0&&Ea.setValue(j,Pe.setFromMatrixPosition(D.matrixWorld)),ze.logarithmicDepthBuffer&&Ke.setValue(j,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ke.setValue(j,"isOrthographic",D.isOrthographicCamera===!0),F!==D&&(F=D,ma=!0,Ui=!0)}if(jt.needsLights&&(ei.state.directionalShadowMap.length>0&&Ke.setValue(j,"directionalShadowMap",ei.state.directionalShadowMap,R),ei.state.spotShadowMap.length>0&&Ke.setValue(j,"spotShadowMap",ei.state.spotShadowMap,R),ei.state.pointShadowMap.length>0&&Ke.setValue(j,"pointShadowMap",ei.state.pointShadowMap,R)),tt.isSkinnedMesh){Ke.setOptional(j,tt,"bindMatrix"),Ke.setOptional(j,tt,"bindMatrixInverse");const Ye=tt.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Ke.setValue(j,"boneTexture",Ye.boneTexture,R))}tt.isBatchedMesh&&(Ke.setOptional(j,tt,"batchingTexture"),Ke.setValue(j,"batchingTexture",tt._matricesTexture,R),Ke.setOptional(j,tt,"batchingIdTexture"),Ke.setValue(j,"batchingIdTexture",tt._indirectTexture,R),Ke.setOptional(j,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ke.setValue(j,"batchingColorTexture",tt._colorsTexture,R));const _a=et.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&he.update(tt,et,Hn),(ma||jt.receiveShadow!==tt.receiveShadow)&&(jt.receiveShadow=tt.receiveShadow,Ke.setValue(j,"receiveShadow",tt.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&q.environment!==null&&(vn.envMapIntensity.value=q.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=NC()),ma){if(Ke.setValue(j,"toneMappingExposure",G.toneMappingExposure),jt.needsLights&&Yt(vn,Ui),zt&&$.fog===!0&&ct.refreshFogUniforms(vn,zt),ct.refreshMaterialUniforms(vn,$,Ut,At,N.state.transmissionRenderTarget[D.id]),jt.needsLights&&jt.lightProbeGrid){const Ye=jt.lightProbeGrid;vn.probesSH.value=Ye.texture,vn.probesMin.value.copy(Ye.boundingBox.min),vn.probesMax.value.copy(Ye.boundingBox.max),vn.probesResolution.value.copy(Ye.resolution)}zf.upload(j,Ft(jt),vn,R)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zf.upload(j,Ft(jt),vn,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ke.setValue(j,"center",tt.center),Ke.setValue(j,"modelViewMatrix",tt.modelViewMatrix),Ke.setValue(j,"normalMatrix",tt.normalMatrix),Ke.setValue(j,"modelMatrix",tt.matrixWorld),$.uniformsGroups!==void 0){const Ye=$.uniformsGroups;for(let Ea=0,Ms=Ye.length;Ea<Ms;Ea++){const _r=Ye[Ea];ft.update(_r,Hn),ft.bind(_r,Hn)}}return Hn}function Yt(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function Et(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return ot},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(D,q,et){const $=z.get(D);$.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),z.get(D.texture).__webglTexture=q,z.get(D.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:et,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){const et=z.get(D);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0};const be=j.createFramebuffer();this.setRenderTarget=function(D,q=0,et=0){X=D,nt=q,ot=et;let $=null,tt=!1,zt=!1;if(D){const wt=z.get(D);if(wt.__useDefaultFramebuffer!==void 0){Ct.bindFramebuffer(j.FRAMEBUFFER,wt.__webglFramebuffer),it.copy(D.viewport),pt.copy(D.scissor),St=D.scissorTest,Ct.viewport(it),Ct.scissor(pt),Ct.setScissorTest(St),I=-1;return}else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(D);else if(wt.__hasExternalTextures)R.rebindTextures(D,z.get(D.texture).__webglTexture,z.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ee=D.depthTexture;if(wt.__boundDepthTexture!==ee){if(ee!==null&&z.has(ee)&&(D.width!==ee.image.width||D.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(D)}}const Wt=D.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(zt=!0);const Ht=z.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ht[q])?$=Ht[q][et]:$=Ht[q],tt=!0):D.samples>0&&R.useMultisampledRTT(D)===!1?$=z.get(D).__webglMultisampledFramebuffer:Array.isArray(Ht)?$=Ht[et]:$=Ht,it.copy(D.viewport),pt.copy(D.scissor),St=D.scissorTest}else it.copy(Tt).multiplyScalar(Ut).floor(),pt.copy(kt).multiplyScalar(Ut).floor(),St=ie;if(et!==0&&($=be),Ct.bindFramebuffer(j.FRAMEBUFFER,$)&&Ct.drawBuffers(D,$),Ct.viewport(it),Ct.scissor(pt),Ct.setScissorTest(St),tt){const wt=z.get(D.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt.__webglTexture,et)}else if(zt){const wt=q;for(let Wt=0;Wt<D.textures.length;Wt++){const Ht=z.get(D.textures[Wt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Wt,Ht.__webglTexture,et,wt)}}else if(D!==null&&et!==0){const wt=z.get(D.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,wt.__webglTexture,et)}I=-1},this.readRenderTargetPixels=function(D,q,et,$,tt,zt,Gt,wt=0){if(!(D&&D.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=z.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt){Ct.bindFramebuffer(j.FRAMEBUFFER,Wt);try{const Ht=D.textures[wt],ee=Ht.format,de=Ht.type;if(D.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+wt),!ze.textureFormatReadable(ee)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(de)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-$&&et>=0&&et<=D.height-tt&&j.readPixels(q,et,$,tt,k.convert(ee),k.convert(de),zt)}finally{const Ht=X!==null?z.get(X).__webglFramebuffer:null;Ct.bindFramebuffer(j.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(D,q,et,$,tt,zt,Gt,wt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=z.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt)if(q>=0&&q<=D.width-$&&et>=0&&et<=D.height-tt){Ct.bindFramebuffer(j.FRAMEBUFFER,Wt);const Ht=D.textures[wt],ee=Ht.format,de=Ht.type;if(D.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+wt),!ze.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Jt),j.bufferData(j.PIXEL_PACK_BUFFER,zt.byteLength,j.STREAM_READ),j.readPixels(q,et,$,tt,k.convert(ee),k.convert(de),0);const Ve=X!==null?z.get(X).__webglFramebuffer:null;Ct.bindFramebuffer(j.FRAMEBUFFER,Ve);const gn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Kb(j,gn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Jt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,zt),j.deleteBuffer(Jt),j.deleteSync(gn),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,et=0){const $=Math.pow(2,-et),tt=Math.floor(D.image.width*$),zt=Math.floor(D.image.height*$),Gt=q!==null?q.x:0,wt=q!==null?q.y:0;R.setTexture2D(D,0),j.copyTexSubImage2D(j.TEXTURE_2D,et,0,0,Gt,wt,tt,zt),Ct.unbindTexture()};const ne=j.createFramebuffer(),tn=j.createFramebuffer();this.copyTextureToTexture=function(D,q,et=null,$=null,tt=0,zt=0){let Gt,wt,Wt,Ht,ee,de,Jt,Ve,gn;const on=D.isCompressedTexture?D.mipmaps[zt]:D.image;if(et!==null)Gt=et.max.x-et.min.x,wt=et.max.y-et.min.y,Wt=et.isBox3?et.max.z-et.min.z:1,Ht=et.min.x,ee=et.min.y,de=et.isBox3?et.min.z:0;else{const vn=Math.pow(2,-tt);Gt=Math.floor(on.width*vn),wt=Math.floor(on.height*vn),D.isDataArrayTexture?Wt=on.depth:D.isData3DTexture?Wt=Math.floor(on.depth*vn):Wt=1,Ht=0,ee=0,de=0}$!==null?(Jt=$.x,Ve=$.y,gn=$.z):(Jt=0,Ve=0,gn=0);const je=k.convert(q.format),Ze=k.convert(q.type);let jt;q.isData3DTexture?(R.setTexture3D(q,0),jt=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(R.setTexture2DArray(q,0),jt=j.TEXTURE_2D_ARRAY):(R.setTexture2D(q,0),jt=j.TEXTURE_2D),Ct.activeTexture(j.TEXTURE0),Ct.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),Ct.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ct.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const ei=Ct.getParameter(j.UNPACK_ROW_LENGTH),Ee=Ct.getParameter(j.UNPACK_IMAGE_HEIGHT),Hn=Ct.getParameter(j.UNPACK_SKIP_PIXELS),Di=Ct.getParameter(j.UNPACK_SKIP_ROWS),ma=Ct.getParameter(j.UNPACK_SKIP_IMAGES);Ct.pixelStorei(j.UNPACK_ROW_LENGTH,on.width),Ct.pixelStorei(j.UNPACK_IMAGE_HEIGHT,on.height),Ct.pixelStorei(j.UNPACK_SKIP_PIXELS,Ht),Ct.pixelStorei(j.UNPACK_SKIP_ROWS,ee),Ct.pixelStorei(j.UNPACK_SKIP_IMAGES,de);const Ui=D.isDataArrayTexture||D.isData3DTexture,Ke=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){const vn=z.get(D),_a=z.get(q),Ye=z.get(vn.__renderTarget),Ea=z.get(_a.__renderTarget);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let Ms=0;Ms<Wt;Ms++)Ui&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,z.get(D).__webglTexture,tt,de+Ms),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,z.get(q).__webglTexture,zt,gn+Ms)),j.blitFramebuffer(Ht,ee,Gt,wt,Jt,Ve,Gt,wt,j.DEPTH_BUFFER_BIT,j.NEAREST);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(tt!==0||D.isRenderTargetTexture||z.has(D)){const vn=z.get(D),_a=z.get(q);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,ne),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,tn);for(let Ye=0;Ye<Wt;Ye++)Ui?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,vn.__webglTexture,tt,de+Ye):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,vn.__webglTexture,tt),Ke?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,_a.__webglTexture,zt,gn+Ye):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,_a.__webglTexture,zt),tt!==0?j.blitFramebuffer(Ht,ee,Gt,wt,Jt,Ve,Gt,wt,j.COLOR_BUFFER_BIT,j.NEAREST):Ke?j.copyTexSubImage3D(jt,zt,Jt,Ve,gn+Ye,Ht,ee,Gt,wt):j.copyTexSubImage2D(jt,zt,Jt,Ve,Ht,ee,Gt,wt);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ke?D.isDataTexture||D.isData3DTexture?j.texSubImage3D(jt,zt,Jt,Ve,gn,Gt,wt,Wt,je,Ze,on.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(jt,zt,Jt,Ve,gn,Gt,wt,Wt,je,on.data):j.texSubImage3D(jt,zt,Jt,Ve,gn,Gt,wt,Wt,je,Ze,on):D.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,zt,Jt,Ve,Gt,wt,je,Ze,on.data):D.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,zt,Jt,Ve,on.width,on.height,je,on.data):j.texSubImage2D(j.TEXTURE_2D,zt,Jt,Ve,Gt,wt,je,Ze,on);Ct.pixelStorei(j.UNPACK_ROW_LENGTH,ei),Ct.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ee),Ct.pixelStorei(j.UNPACK_SKIP_PIXELS,Hn),Ct.pixelStorei(j.UNPACK_SKIP_ROWS,Di),Ct.pixelStorei(j.UNPACK_SKIP_IMAGES,ma),zt===0&&q.generateMipmaps&&j.generateMipmap(jt),Ct.unbindTexture()},this.initRenderTarget=function(D){z.get(D).__webglFramebuffer===void 0&&R.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?R.setTextureCube(D,0):D.isData3DTexture?R.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?R.setTexture2DArray(D,0):R.setTexture2D(D,0),Ct.unbindTexture()},this.resetState=function(){nt=0,ot=0,X=null,Ct.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),n.unpackColorSpace=Le._getUnpackColorSpace()}}function ds(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function oM(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uu={duration:.5,overwrite:!1,delay:0},F0,ti,Sn,fa=1e8,fn=1/fa,r0=Math.PI*2,PC=r0/4,zC=0,lM=Math.sqrt,IC=Math.cos,BC=Math.sin,Yn=function(t){return typeof t=="string"},wn=function(t){return typeof t=="function"},xs=function(t){return typeof t=="number"},H0=function(t){return typeof t>"u"},Va=function(t){return typeof t=="object"},Ei=function(t){return t!==!1},G0=function(){return typeof window<"u"},Cf=function(t){return wn(t)||Yn(t)},uM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},li=Array.isArray,FC=/random\([^)]+\)/g,HC=/,\s*/g,oy=/(?:-?\.?\d|\.)+/gi,cM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Jo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,im=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fM=/[+-]=-?[.\d]+/,GC=/[^,'"\[\]\s]+/gi,VC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tn,Na,o0,V0,Ki={},Zf={},hM,dM=function(t){return(Zf=cl(t,Ki))&&Ci},k0=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Lu=function(t,n){return!n&&console.warn(t)},pM=function(t,n){return t&&(Ki[t]=n)&&Zf&&(Zf[t]=n)||Ki},Nu=function(){return 0},kC={suppressEvents:!0,isStart:!0,kill:!1},If={suppressEvents:!0,kill:!1},XC={suppressEvents:!0},X0={},rr=[],l0={},mM,Gi={},am={},ly=30,Bf=[],W0="",q0=function(t){var n=t[0],a,r;if(Va(n)||wn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(r=Bf.length;r--&&!Bf[r].targetTest(n););a=Bf[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new IM(t[r],a)))||t.splice(r,1);return t},Wr=function(t){return t._gsap||q0(ha(t))[0]._gsap},_M=function(t,n,a){return(a=t[n])&&wn(a)?t[n]():H0(a)&&t.getAttribute&&t.getAttribute(n)||a},Ai=function(t,n){return(t=t.split(",")).forEach(n)||t},Un=function(t){return Math.round(t*1e5)/1e5||0},Mn=function(t){return Math.round(t*1e7)/1e7||0},il=function(t,n){var a=n.charAt(0),r=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+r:a==="-"?t-r:a==="*"?t*r:t/r},WC=function(t,n){for(var a=n.length,r=0;t.indexOf(n[r])<0&&++r<a;);return r<a},Kf=function(){var t=rr.length,n=rr.slice(0),a,r;for(l0={},rr.length=0,a=0;a<t;a++)r=n[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Y0=function(t){return!!(t._initted||t._startAt||t.add)},gM=function(t,n,a,r){rr.length&&!ti&&Kf(),t.render(n,a,!!(ti&&n<0&&Y0(t))),rr.length&&!ti&&Kf()},vM=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(GC).length<2?n:Yn(t)?t.trim():t},xM=function(t){return t},Qi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},qC=function(t){return function(n,a){for(var r in a)r in n||r==="duration"&&t||r==="ease"||(n[r]=a[r])}},cl=function(t,n){for(var a in n)t[a]=n[a];return t},uy=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Va(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},Qf=function(t,n){var a={},r;for(r in t)r in n||(a[r]=t[r]);return a},Eu=function(t){var n=t.parent||Tn,a=t.keyframes?qC(li(t.keyframes)):Qi;if(Ei(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},YC=function(t,n){for(var a=t.length,r=a===n.length;r&&a--&&t[a]===n[a];);return a<0},SM=function(t,n,a,r,l){var c=t[r],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[r]=n,n._prev=c,n.parent=n._dp=t,n},ch=function(t,n,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[r]===n&&(t[r]=l),n._next=n._prev=n.parent=null},ur=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},qr=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},jC=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},u0=function(t,n,a,r){return t._startAt&&(ti?t._startAt.revert(If):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,r))},ZC=function o(t){return!t||t._ts&&o(t.parent)},cy=function(t){return t._repeat?fl(t._tTime,t=t.duration()+t._rDelay)*t:0},fl=function(t,n){var a=Math.floor(t=Mn(t/n));return t&&a===t?a-1:a},Jf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},fh=function(t){return t._end=Mn(t._start+(t._tDur/Math.abs(t._ts||t._rts||fn)||0))},hh=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=Mn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),fh(t),a._dirty||qr(a,t)),t},yM=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=Jf(t.rawTime(),n),(!n._dur||Hu(0,n.totalDuration(),a)-n._tTime>fn)&&n.render(a,!0)),qr(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-fn}},za=function(t,n,a,r){return n.parent&&ur(n),n._start=Mn((xs(a)?a:a||t!==Tn?oa(t,a,n):t._time)+n._delay),n._end=Mn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),SM(t,n,"_first","_last",t._sort?"_start":0),c0(n)||(t._recent=n),r||yM(t,n),t._ts<0&&hh(t,t._tTime),t},MM=function(t,n){return(Ki.ScrollTrigger||k0("scrollTrigger",n))&&Ki.ScrollTrigger.create(n,t)},TM=function(t,n,a,r,l){if(Z0(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!ti&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&mM!==Xi.frame)return rr.push(t),t._lazy=[l,r],1},KC=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},c0=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},QC=function(t,n,a,r){var l=t.ratio,c=n<0||!n&&(!t._start&&KC(t)&&!(!t._initted&&c0(t))||(t._ts<0||t._dp._ts<0)&&!c0(t))?0:1,f=t._rDelay,p=0,d,_,v;if(f&&t._repeat&&(p=Hu(0,t._tDur,n),_=fl(p,f),t._yoyo&&_&1&&(c=1-c),_!==fl(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||ti||r||t._zTime===fn||!n&&t._zTime){if(!t._initted&&TM(t,n,r,a,p))return;for(v=t._zTime,t._zTime=n||(a?fn:0),a||(a=n&&!v),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&u0(t,n,a,!0),t._onUpdate&&!a&&Wi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Wi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&ur(t,1),!a&&!ti&&(Wi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},JC=function(t,n,a){var r;if(a>n)for(r=t._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=t._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},hl=function(t,n,a,r){var l=t._repeat,c=Mn(n)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:Mn(c*(l+1)+t._rDelay*l):c,f>0&&!r&&hh(t,t._tTime=t._tDur*f),t.parent&&fh(t),a||qr(t.parent,t),t},fy=function(t){return t instanceof Mi?qr(t):hl(t,t._dur)},$C={_start:0,endTime:Nu,totalDuration:Nu},oa=function o(t,n,a){var r=t.labels,l=t._recent||$C,c=t.duration()>=fa?l.endTime(!1):t._dur,f,p,d;return Yn(n)&&(isNaN(n)||n in r)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in r||(r[n]=c),r[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(li(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},Au=function(t,n,a){var r=xs(n[1]),l=(r?2:1)+(t<2?0:1),c=n[l],f,p;if(r&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=Ei(p.vars.inherit)&&p.parent;c.immediateRender=Ei(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new Bn(n[0],c,n[l+1])},hr=function(t,n){return t||t===0?n(t):n},Hu=function(t,n,a){return a<t?t:a>n?n:a},ri=function(t,n){return!Yn(t)||!(n=VC.exec(t))?"":n[1]},t3=function(t,n,a){return hr(a,function(r){return Hu(t,n,r)})},f0=[].slice,bM=function(t,n){return t&&Va(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Va(t[0]))&&!t.nodeType&&t!==Na},e3=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(r){var l;return Yn(r)&&!n||bM(r,1)?(l=a).push.apply(l,ha(r)):a.push(r)})||a},ha=function(t,n,a){return Sn&&!n&&Sn.selector?Sn.selector(t):Yn(t)&&!a&&(o0||!dl())?f0.call((n||V0).querySelectorAll(t),0):li(t)?e3(t,a):bM(t)?f0.call(t,0):t?[t]:[]},h0=function(t){return t=ha(t)[0]||Lu("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return ha(n,a.querySelectorAll?a:a===t?Lu("Invalid scope")||V0.createElement("div"):t)}},EM=function(t){return t.sort(function(){return .5-Math.random()})},AM=function(t){if(wn(t))return t;var n=Va(t)?t:{each:t},a=Yr(n.ease),r=n.from||0,l=parseFloat(n.base)||0,c={},f=r>0&&r<1,p=isNaN(r)||f,d=n.axis,_=r,v=r;return Yn(r)?_=v={center:.5,edges:.5,end:1}[r]||0:!f&&p&&(_=r[0],v=r[1]),function(g,S,T){var M=(T||n).length,x=c[M],y,A,C,w,P,N,O,E,U;if(!x){if(U=n.grid==="auto"?0:(n.grid||[1,fa])[1],!U){for(O=-fa;O<(O=T[U++].getBoundingClientRect().left)&&U<M;);U<M&&U--}for(x=c[M]=[],y=p?Math.min(U,M)*_-.5:r%U,A=U===fa?0:p?M*v/U-.5:r/U|0,O=0,E=fa,N=0;N<M;N++)C=N%U-y,w=A-(N/U|0),x[N]=P=d?Math.abs(d==="y"?w:C):lM(C*C+w*w),P>O&&(O=P),P<E&&(E=P);r==="random"&&EM(x),x.max=O-E,x.min=E,x.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(U>M?M-1:d?d==="y"?M/U:U:Math.max(U,M/U))||0)*(r==="edges"?-1:1),x.b=M<0?l-M:l,x.u=ri(n.amount||n.each)||0,a=a&&M<0?p3(a):a}return M=(x[g]-x.min)/x.max||0,Mn(x.b+(a?a(M):M)*x.v)+x.u}},d0=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var r=Mn(Math.round(parseFloat(a)/t)*t*n);return(r-r%1)/n+(xs(a)?0:ri(a))}},RM=function(t,n){var a=li(t),r,l;return!a&&Va(t)&&(r=a=t.radius||fa,t.values?(t=ha(t.values),(l=!xs(t[0]))&&(r*=r)):t=d0(t.increment)),hr(n,a?wn(t)?function(c){return l=t(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=fa,_=0,v=t.length,g,S;v--;)l?(g=t[v].x-f,S=t[v].y-p,g=g*g+S*S):g=Math.abs(t[v]-f),g<d&&(d=g,_=v);return _=!r||d<=r?t[_]:c,l||_===c||xs(c)?_:_+ri(c)}:d0(t))},wM=function(t,n,a,r){return hr(li(t)?!n:a===!0?!!(a=0):!r,function(){return li(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*r)/r})},n3=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(r){return n.reduce(function(l,c){return c(l)},r)}},i3=function(t,n){return function(a){return t(parseFloat(a))+(n||ri(a))}},a3=function(t,n,a){return DM(t,n,0,1,a)},CM=function(t,n,a){return hr(a,function(r){return t[~~n(r)]})},s3=function o(t,n,a){var r=n-t;return li(t)?CM(t,o(0,t.length),n):hr(a,function(l){return(r+(l-t)%r)%r+t})},r3=function o(t,n,a){var r=n-t,l=r*2;return li(t)?CM(t,o(0,t.length-1),n):hr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>r?l-c:c)})},Ou=function(t){return t.replace(FC,function(n){var a=n.indexOf("[")+1,r=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(HC);return wM(a?r:+r[0],a?0:+r[1],+r[2]||1e-5)})},DM=function(t,n,a,r,l){var c=n-t,f=r-a;return hr(l,function(p){return a+((p-t)/c*f||0)})},o3=function o(t,n,a,r){var l=isNaN(t+n)?0:function(S){return(1-S)*t+S*n};if(!l){var c=Yn(t),f={},p,d,_,v,g;if(a===!0&&(r=1)&&(a=null),c)t={p:t},n={p:n};else if(li(t)&&!li(n)){for(_=[],v=t.length,g=v-2,d=1;d<v;d++)_.push(o(t[d-1],t[d]));v--,l=function(T){T*=v;var M=Math.min(g,~~T);return _[M](T-M)},a=n}else r||(t=cl(li(t)?[]:{},t));if(!_){for(p in n)j0.call(f,t,p,"get",n[p]);l=function(T){return J0(T,f)||(c?t.p:t)}}}return hr(a,l)},hy=function(t,n,a){var r=t.labels,l=fa,c,f,p;for(c in r)f=r[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},Wi=function(t,n,a){var r=t.vars,l=r[n],c=Sn,f=t._ctx,p,d,_;if(l)return p=r[n+"Params"],d=r.callbackScope||t,a&&rr.length&&Kf(),f&&(Sn=f),_=p?l.apply(d,p):l.call(d),Sn=c,_},Su=function(t){return ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ti),t.progress()<1&&Wi(t,"onInterrupt"),t},$o,UM=[],LM=function(t){if(t)if(t=!t.name&&t.default||t,G0()||t.headless){var n=t.name,a=wn(t),r=n&&!a&&t.init?function(){this._props=[]}:t,l={init:Nu,render:J0,add:j0,kill:b3,modifier:T3,rawVars:0},c={targetTest:0,get:0,getSetter:Q0,aliases:{},register:0};if(dl(),t!==r){if(Gi[n])return;Qi(r,Qi(Qf(t,l),c)),cl(r.prototype,cl(l,Qf(t,c))),Gi[r.prop=n]=r,t.targetTest&&(Bf.push(r),X0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}pM(n,r),t.register&&t.register(Ci,r,Ri)}else UM.push(t)},un=255,yu={aqua:[0,un,un],lime:[0,un,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,un],navy:[0,0,128],white:[un,un,un],olive:[128,128,0],yellow:[un,un,0],orange:[un,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[un,0,0],pink:[un,192,203],cyan:[0,un,un],transparent:[un,un,un,0]},sm=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*un+.5|0},NM=function(t,n,a){var r=t?xs(t)?[t>>16,t>>8&un,t&un]:0:yu.black,l,c,f,p,d,_,v,g,S,T;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),yu[t])r=yu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&un,r&un,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&un,t&un]}else if(t.substr(0,3)==="hsl"){if(r=T=t.match(oy),!n)p=+r[0]%360/360,d=+r[1]/100,_=+r[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,r.length>3&&(r[3]*=1),r[0]=sm(p+1/3,l,c),r[1]=sm(p,l,c),r[2]=sm(p-1/3,l,c);else if(~t.indexOf("="))return r=t.match(cM),a&&r.length<4&&(r[3]=1),r}else r=t.match(oy)||yu.transparent;r=r.map(Number)}return n&&!T&&(l=r[0]/un,c=r[1]/un,f=r[2]/un,v=Math.max(l,c,f),g=Math.min(l,c,f),_=(v+g)/2,v===g?p=d=0:(S=v-g,d=_>.5?S/(2-v-g):S/(v+g),p=v===l?(c-f)/S+(c<f?6:0):v===c?(f-l)/S+2:(l-c)/S+4,p*=60),r[0]=~~(p+.5),r[1]=~~(d*100+.5),r[2]=~~(_*100+.5)),a&&r.length<4&&(r[3]=1),r},OM=function(t){var n=[],a=[],r=-1;return t.split(or).forEach(function(l){var c=l.match(Jo)||[];n.push.apply(n,c),a.push(r+=c.length+1)}),n.c=a,n},dy=function(t,n,a){var r="",l=(t+r).match(or),c=n?"hsla(":"rgba(",f=0,p,d,_,v;if(!l)return t;if(l=l.map(function(g){return(g=NM(g,n,1))&&c+(n?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),a&&(_=OM(t),p=a.c,p.join(r)!==_.c.join(r)))for(d=t.replace(or,"1").split(Jo),v=d.length-1;f<v;f++)r+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(or),v=d.length-1;f<v;f++)r+=d[f]+l[f];return r+d[v]},or=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in yu)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),l3=/hsl[a]?\(/,PM=function(t){var n=t.join(" "),a;if(or.lastIndex=0,or.test(n))return a=l3.test(n),t[1]=dy(t[1],a),t[0]=dy(t[0],a,OM(t[1])),!0},Pu,Xi=(function(){var o=Date.now,t=500,n=33,a=o(),r=a,l=1e3/240,c=l,f=[],p,d,_,v,g,S,T=function M(x){var y=o()-r,A=x===!0,C,w,P,N;if((y>t||y<0)&&(a+=y-n),r+=y,P=r-a,C=P-c,(C>0||A)&&(N=++v.frame,g=P-v.time*1e3,v.time=P=P/1e3,c+=C+(C>=l?4:l-C),w=1),A||(p=d(M)),w)for(S=0;S<f.length;S++)f[S](P,g,N,x)};return v={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(x){return g/(1e3/(x||60))},wake:function(){hM&&(!o0&&G0()&&(Na=o0=window,V0=Na.document||{},Ki.gsap=Ci,(Na.gsapVersions||(Na.gsapVersions=[])).push(Ci.version),dM(Zf||Na.GreenSockGlobals||!Na.gsap&&Na||{}),UM.forEach(LM)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&v.sleep(),d=_||function(x){return setTimeout(x,c-v.time*1e3+1|0)},Pu=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Pu=0,d=Nu},lagSmoothing:function(x,y){t=x||1/0,n=Math.min(y||33,t)},fps:function(x){l=1e3/(x||240),c=v.time*1e3+l},add:function(x,y,A){var C=y?function(w,P,N,O){x(w,P,N,O),v.remove(C)}:x;return v.remove(x),f[A?"unshift":"push"](C),dl(),C},remove:function(x,y){~(y=f.indexOf(x))&&f.splice(y,1)&&S>=y&&S--},_listeners:f},v})(),dl=function(){return!Pu&&Xi.wake()},Oe={},u3=/^[\d.\-M][\d.\-,\s]/,c3=/["']/g,f3=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),r=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[r]=isNaN(d)?d.replace(c3,"").trim():+d,r=p.substr(f+1).trim();return n},h3=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),r=t.indexOf("(",n);return t.substring(n,~r&&r<a?t.indexOf(")",a+1):a)},d3=function(t){var n=(t+"").split("("),a=Oe[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[f3(n[1])]:h3(t).split(",").map(vM)):Oe._CE&&u3.test(t)?Oe._CE("",t):a},p3=function(t){return function(n){return 1-t(1-n)}},Yr=function(t,n){return t&&(wn(t)?t:Oe[t]||d3(t))||n},eo=function(t,n,a,r){a===void 0&&(a=function(p){return 1-n(1-p)}),r===void 0&&(r=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:r},c;return Ai(t,function(f){Oe[f]=Ki[f]=l,Oe[c=f.toLowerCase()]=a;for(var p in l)Oe[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Oe[f+"."+p]=l[p]}),l},zM=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},rm=function o(t,n,a){var r=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/r0*(Math.asin(1/r)||0),f=function(_){return _===1?1:r*Math.pow(2,-10*_)*BC((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:zM(f);return l=r0/l,p.config=function(d,_){return o(t,d,_)},p},om=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},r=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:zM(a);return r.config=function(l){return o(t,l)},r};Ai("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;eo(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;eo("Elastic",rm("in"),rm("out"),rm());(function(o,t){var n=1/t,a=2*n,r=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<r?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};eo("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);eo("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});eo("Circ",function(o){return-(lM(1-o*o)-1)});eo("Sine",function(o){return o===1?1:-IC(o*PC)+1});eo("Back",om("in"),om("out"),om());Oe.SteppedEase=Oe.steps=Ki.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,r=t+(n?0:1),l=n?1:0,c=1-fn;return function(f){return((r*Hu(0,c,f)|0)+l)*a}}};Uu.ease=Oe["quad.out"];Ai("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return W0+=o+","+o+"Params,"});var IM=function(t,n){this.id=zC++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:_M,this.set=n?n.getSetter:Q0},zu=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,hl(this,+n.duration,1,1),this.data=n.data,Sn&&(this._ctx=Sn,Sn.data.push(this)),Pu||Xi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,hl(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,r){if(dl(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(hh(this,a),!l._dp||l.parent||yM(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&za(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===fn||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),gM(this,a,r)),this},t.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+cy(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},t.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+cy(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,r):this._repeat?fl(this._tTime,l)+1:1},t.timeScale=function(a,r){if(!arguments.length)return this._rts===-fn?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?Jf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-fn?0:this._rts,this.totalTime(Hu(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),fh(this),jC(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(dl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fn&&(this._tTime-=fn)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=Mn(a);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&za(r,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(Ei(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jf(r.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=XC);var r=ti;return ti=a,Y0(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),ti=r,this},t.globalTime=function(a){for(var r=this,l=arguments.length?a:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,fy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,fy(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,r){return this.totalTime(oa(this,a),Ei(r))},t.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,Ei(r)),this._dur||(this._zTime=-fn),this},t.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},t.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-fn:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-fn,this},t.isActive=function(){var a=this.parent||this._dp,r=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=r&&l<this.endTime(!0)-fn)},t.eventCallback=function(a,r,l){var c=this.vars;return arguments.length>1?(r?(c[a]=r,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},t.then=function(a){var r=this,l=r._prom;return new Promise(function(c){var f=wn(a)?a:xM,p=function(){var _=r.then;r.then=null,l&&l(),wn(f)&&(f=f(r))&&(f.then||f===r)&&(r.then=_),c(f),r.then=_};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?p():r._prom=p})},t.kill=function(){Su(this)},o})();Qi(zu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fn,_prom:0,_ps:!1,_rts:1});var Mi=(function(o){oM(t,o);function t(a,r){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=Ei(a.sortChildren),Tn&&za(a.parent||Tn,ds(l),r),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&MM(ds(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(r,l,c){return Au(0,arguments,this),this},n.from=function(r,l,c){return Au(1,arguments,this),this},n.fromTo=function(r,l,c,f){return Au(2,arguments,this),this},n.set=function(r,l,c){return l.duration=0,l.parent=this,Eu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Bn(r,l,oa(this,c),1),this},n.call=function(r,l,c){return za(this,Bn.delayedCall(0,r,l),c)},n.staggerTo=function(r,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new Bn(r,c,oa(this,p)),this},n.staggerFrom=function(r,l,c,f,p,d,_){return c.runBackwards=1,Eu(c).immediateRender=Ei(c.immediateRender),this.staggerTo(r,l,c,f,p,d,_)},n.staggerFromTo=function(r,l,c,f,p,d,_,v){return f.startAt=c,Eu(f).immediateRender=Ei(f.immediateRender),this.staggerTo(r,l,f,p,d,_,v)},n.render=function(r,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=r<=0?0:Mn(r),v=this._zTime<0!=r<0&&(this._initted||!d),g,S,T,M,x,y,A,C,w,P,N,O;if(this!==Tn&&_>p&&r>=0&&(_=p),_!==this._tTime||c||v){if(f!==this._time&&d&&(_+=this._time-f,r+=this._time-f),g=_,w=this._start,C=this._ts,y=!C,v&&(d||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(N=this._yoyo,x=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,l,c);if(g=Mn(_%x),_===p?(M=this._repeat,g=d):(P=Mn(_/x),M=~~P,M&&M===P&&(g=d,M--),g>d&&(g=d)),P=fl(this._tTime,x),!f&&this._tTime&&P!==M&&this._tTime-P*x-this._dur<=0&&(P=M),N&&M&1&&(g=d-g,O=1),M!==P&&!this._lock){var E=N&&P&1,U=E===(N&&M&1);if(M<P&&(E=!E),f=E?0:_%d?d:_,this._lock=1,this.render(f||(O?0:Mn(M*x)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&Wi(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,P=M),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,U&&(this._lock=2,f=E?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=JC(this,Mn(f),Mn(g)),A&&(_-=g-(g=A._start))),this._tTime=_,this._time=g,this._act=!!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&_&&d&&!l&&!P&&(Wi(this,"onStart"),this._tTime!==_))return this;if(g>=f&&r>=0)for(S=this._first;S;){if(T=S._next,(S._act||g>=S._start)&&S._ts&&A!==S){if(S.parent!==this)return this.render(r,l,c);if(S.render(S._ts>0?(g-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(g-S._start)*S._ts,l,c),g!==this._time||!this._ts&&!y){A=0,T&&(_+=this._zTime=-fn);break}}S=T}else{S=this._last;for(var G=r<0?r:g;S;){if(T=S._prev,(S._act||G<=S._end)&&S._ts&&A!==S){if(S.parent!==this)return this.render(r,l,c);if(S.render(S._ts>0?(G-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(G-S._start)*S._ts,l,c||ti&&Y0(S)),g!==this._time||!this._ts&&!y){A=0,T&&(_+=this._zTime=G?-fn:fn);break}}S=T}}if(A&&!l&&(this.pause(),A.render(g>=f?0:-fn)._zTime=g>=f?1:-1,this._ts))return this._start=w,fh(this),this.render(r,l,c);this._onUpdate&&!l&&Wi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(w===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&ur(this,1),!l&&!(r<0&&!f)&&(_||f||!p)&&(Wi(this,_===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,l){var c=this;if(xs(l)||(l=oa(this,l,r)),!(r instanceof zu)){if(li(r))return r.forEach(function(f){return c.add(f,l)}),this;if(Yn(r))return this.addLabel(r,l);if(wn(r))r=Bn.delayedCall(0,r);else return this}return this!==r?za(this,r,l):this},n.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-fa);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Bn?l&&p.push(d):(c&&p.push(d),r&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},n.remove=function(r){return Yn(r)?this.removeLabel(r):wn(r)?this.killTweensOf(r):(r.parent===this&&ch(this,r),r===this._recent&&(this._recent=this._last),qr(this))},n.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mn(Xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},n.addLabel=function(r,l){return this.labels[r]=oa(this,l),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,l,c){var f=Bn.delayedCall(0,l||Nu,c);return f.data="isPause",this._hasPause=1,za(this,f,oa(this,r))},n.removePause=function(r){var l=this._first;for(r=oa(this,r);l;)l._start===r&&l.data==="isPause"&&ur(l),l=l._next},n.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),p=f.length;p--;)ir!==f[p]&&f[p].kill(r,l);return this},n.getTweensOf=function(r,l){for(var c=[],f=ha(r),p=this._first,d=xs(l),_;p;)p instanceof Bn?WC(p._targets,f)&&(d?(!ir||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(r,l){l=l||{};var c=this,f=oa(c,r),p=l,d=p.startAt,_=p.onStart,v=p.onStartParams,g=p.immediateRender,S,T=Bn.to(c,Qi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||fn,onStart:function(){if(c.pause(),!S){var x=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());T._dur!==x&&hl(T,x,0,1).render(T._time,!0,!0),S=1}_&&_.apply(T,v||[])}},l));return g?T.render(0):T},n.tweenFromTo=function(r,l,c){return this.tweenTo(l,Qi({startAt:{time:oa(this,r)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),hy(this,oa(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),hy(this,oa(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+fn)},n.shiftChildren=function(r,l,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(r=Mn(r);f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=r);return qr(this)},n.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),qr(this)},n.totalDuration=function(r){var l=0,c=this,f=c._last,p=fa,d,_,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(v=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,za(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=Mn(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;hl(c,c===Tn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(r){if(Tn._ts&&(gM(Tn,Jf(r,Tn)),mM=Xi.frame),Xi.frame>=ly){ly+=Zi.autoSleep||120;var l=Tn._first;if((!l||!l._ts)&&Zi.autoSleep&&Xi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Xi.sleep()}}},t})(zu);Qi(Mi.prototype,{_lock:0,_hasPause:0,_forcing:0});var m3=function(t,n,a,r,l,c,f){var p=new Ri(this._pt,t,n,0,1,kM,null,l),d=0,_=0,v,g,S,T,M,x,y,A;for(p.b=a,p.e=r,a+="",r+="",(y=~r.indexOf("random("))&&(r=Ou(r)),c&&(A=[a,r],c(A,t,n),a=A[0],r=A[1]),g=a.match(im)||[];v=im.exec(r);)T=v[0],M=r.substring(d,v.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),T!==g[_++]&&(x=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:M||_===1?M:",",s:x,c:T.charAt(1)==="="?il(x,T)-x:parseFloat(T)-x,m:S&&S<4?Math.round:0},d=im.lastIndex);return p.c=d<r.length?r.substring(d,r.length):"",p.fp=f,(fM.test(r)||y)&&(p.e=0),this._pt=p,p},j0=function(t,n,a,r,l,c,f,p,d,_){wn(r)&&(r=r(l||0,t,c));var v=t[n],g=a!=="get"?a:wn(v)?d?t[n.indexOf("set")||!wn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():v,S=wn(v)?d?S3:GM:K0,T;if(Yn(r)&&(~r.indexOf("random(")&&(r=Ou(r)),r.charAt(1)==="="&&(T=il(g,r)+(ri(g)||0),(T||T===0)&&(r=T))),!_||g!==r||p0)return!isNaN(g*r)&&r!==""?(T=new Ri(this._pt,t,n,+g||0,r-(g||0),typeof v=="boolean"?M3:VM,0,S),d&&(T.fp=d),f&&T.modifier(f,this,t),this._pt=T):(!v&&!(n in t)&&k0(n,r),m3.call(this,t,n,g,r,S,p||Zi.stringFilter,d))},_3=function(t,n,a,r,l){if(wn(t)&&(t=Ru(t,l,n,a,r)),!Va(t)||t.style&&t.nodeType||li(t)||uM(t))return Yn(t)?Ru(t,l,n,a,r):t;var c={},f;for(f in t)c[f]=Ru(t[f],l,n,a,r);return c},BM=function(t,n,a,r,l,c){var f,p,d,_;if(Gi[t]&&(f=new Gi[t]).init(l,f.rawVars?n[t]:_3(n[t],r,l,c,a),a,r,c)!==!1&&(a._pt=p=new Ri(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==$o))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},ir,p0,Z0=function o(t,n,a){var r=t.vars,l=r.ease,c=r.startAt,f=r.immediateRender,p=r.lazy,d=r.onUpdate,_=r.runBackwards,v=r.yoyoEase,g=r.keyframes,S=r.autoRevert,T=t._dur,M=t._startAt,x=t._targets,y=t.parent,A=y&&y.data==="nested"?y.vars.targets:x,C=t._overwrite==="auto"&&!F0,w=t.timeline,P=r.easeReverse||v,N,O,E,U,G,H,W,nt,ot,X,I,F,it;if(w&&(!g||!l)&&(l="none"),t._ease=Yr(l,Uu.ease),t._rEase=P&&(Yr(P)||t._ease),t._from=!w&&!!r.runBackwards,t._from&&(t.ratio=1),!w||g&&!r.stagger){if(nt=x[0]?Wr(x[0]).harness:0,F=nt&&r[nt.prop],N=Qf(r,X0),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!S?M.render(-1,!0):M.revert(_&&T?If:kC),M._lazy=0),c){if(ur(t._startAt=Bn.set(x,Qi({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&Ei(p),startAt:null,delay:0,onUpdate:d&&function(){return Wi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ti||!f&&!S)&&t._startAt.revert(If),f&&T&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&T&&!M){if(n&&(f=!1),E=Qi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&Ei(p),immediateRender:f,stagger:0,parent:y},N),F&&(E[nt.prop]=F),ur(t._startAt=Bn.set(x,E)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ti?t._startAt.revert(If):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,fn,fn);else if(!n)return}for(t._pt=t._ptCache=0,p=T&&Ei(p)||p&&!T,O=0;O<x.length;O++){if(G=x[O],W=G._gsap||q0(x)[O]._gsap,t._ptLookup[O]=X={},l0[W.id]&&rr.length&&Kf(),I=A===x?O:A.indexOf(G),nt&&(ot=new nt).init(G,F||N,t,I,A)!==!1&&(t._pt=U=new Ri(t._pt,G,ot.name,0,1,ot.render,ot,0,ot.priority),ot._props.forEach(function(pt){X[pt]=U}),ot.priority&&(H=1)),!nt||F)for(E in N)Gi[E]&&(ot=BM(E,N,t,I,G,A))?ot.priority&&(H=1):X[E]=U=j0.call(t,G,E,"get",N[E],I,A,0,r.stringFilter);t._op&&t._op[O]&&t.kill(G,t._op[O]),C&&t._pt&&(ir=t,Tn.killTweensOf(G,X,t.globalTime(n)),it=!t.parent,ir=0),t._pt&&p&&(l0[W.id]=1)}H&&XM(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!it,g&&n<=0&&w.render(fa,!0,!0)},g3=function(t,n,a,r,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,v,g,S;if(!d)for(d=t._ptCache[n]=[],g=t._ptLookup,S=t._targets.length;S--;){if(_=g[S][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return p0=1,t.vars[n]="+=0",Z0(t,f),p0=0,p?Lu(n+" not eligible for reset. Try splitting into individual properties"):1;d.push(_)}for(S=d.length;S--;)v=d[S],_=v._pt||v,_.s=(r||r===0)&&!l?r:_.s+(r||0)+c*_.c,_.c=a-_.s,v.e&&(v.e=Un(a)+ri(v.e)),v.b&&(v.b=_.s+ri(v.b))},v3=function(t,n){var a=t[0]?Wr(t[0]).harness:0,r=a&&a.aliases,l,c,f,p;if(!r)return n;l=cl({},n);for(c in r)if(c in l)for(p=r[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},x3=function(t,n,a,r){var l=n.ease||r||"power1.inOut",c,f;if(li(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},Ru=function(t,n,a,r,l){return wn(t)?t.call(n,a,r,l):Yn(t)&&~t.indexOf("random(")?Ou(t):t},FM=W0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",HM={};Ai(FM+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return HM[o]=1});var Bn=(function(o){oM(t,o);function t(a,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,c?r:Eu(r))||this;var p=f.vars,d=p.duration,_=p.delay,v=p.immediateRender,g=p.stagger,S=p.overwrite,T=p.keyframes,M=p.defaults,x=p.scrollTrigger,y=r.parent||Tn,A=(li(a)||uM(a)?xs(a[0]):"length"in r)?[a]:ha(a),C,w,P,N,O,E,U,G;if(f._targets=A.length?q0(A):Lu("GSAP target "+a+" not found. https://gsap.com",!Zi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,T||g||Cf(d)||Cf(_)){r=f.vars;var H=r.easeReverse||r.yoyoEase;if(C=f.timeline=new Mi({data:"nested",defaults:M||{},targets:y&&y.data==="nested"?y.vars.targets:A}),C.kill(),C.parent=C._dp=ds(f),C._start=0,g||Cf(d)||Cf(_)){if(N=A.length,U=g&&AM(g),Va(g))for(O in g)~FM.indexOf(O)&&(G||(G={}),G[O]=g[O]);for(w=0;w<N;w++)P=Qf(r,HM),P.stagger=0,H&&(P.easeReverse=H),G&&cl(P,G),E=A[w],P.duration=+Ru(d,ds(f),w,E,A),P.delay=(+Ru(_,ds(f),w,E,A)||0)-f._delay,!g&&N===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),C.to(E,P,U?U(w,E,A):0),C._ease=Oe.none;C.duration()?d=_=0:f.timeline=0}else if(T){Eu(Qi(C.vars.defaults,{ease:"none"})),C._ease=Yr(T.ease||r.ease||"none");var W=0,nt,ot,X;if(li(T))T.forEach(function(I){return C.to(A,I,">")}),C.duration();else{P={};for(O in T)O==="ease"||O==="easeEach"||x3(O,T[O],P,T.easeEach);for(O in P)for(nt=P[O].sort(function(I,F){return I.t-F.t}),W=0,w=0;w<nt.length;w++)ot=nt[w],X={ease:ot.e,duration:(ot.t-(w?nt[w-1].t:0))/100*d},X[O]=ot.v,C.to(A,X,W),W+=X.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||f.duration(d=C.duration())}else f.timeline=0;return S===!0&&!F0&&(ir=ds(f),Tn.killTweensOf(A),ir=0),za(y,ds(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(v||!d&&!T&&f._start===Mn(y._time)&&Ei(v)&&ZC(ds(f))&&y.data!=="nested")&&(f._tTime=-fn,f.render(Math.max(0,-_)||0)),x&&MM(ds(f),x),f}var n=t.prototype;return n.render=function(r,l,c){var f=this._time,p=this._tDur,d=this._dur,_=r<0,v=r>p-fn&&!_?p:r<fn?0:r,g,S,T,M,x,y,A,C;if(!d)QC(this,r,l,c);else if(v!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=v,C=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+r,l,c);if(g=Mn(v%M),v===p?(T=this._repeat,g=d):(x=Mn(v/M),T=~~x,T&&T===x?(g=d,T--):g>d&&(g=d)),y=this._yoyo&&T&1,y&&(g=d-g),x=fl(this._tTime,M),g===f&&!c&&this._initted&&T===x)return this._tTime=v,this;T!==x&&this.vars.repeatRefresh&&!y&&!this._lock&&g!==M&&this._initted&&(this._lock=c=1,this.render(Mn(M*T),!0).invalidate()._lock=0)}if(!this._initted){if(TM(this,_?r:g,c,l,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==x))return this;if(d!==this._dur)return this.render(r,l,c)}if(this._rEase){var w=g<f;if(w!==this._inv){var P=w?f:d-f;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=P?(w?-1:1)/P:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(g/d);if(this._from&&(this.ratio=A=1-A),this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&v&&!l&&!x&&(Wi(this,"onStart"),this._tTime!==v))return this;for(S=this._pt;S;)S.r(A,S.d),S=S._next;C&&C.render(r<0?r:C._dur*C._ease(g/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(_&&u0(this,r,l,c),Wi(this,"onUpdate")),this._repeat&&T!==x&&this.vars.onRepeat&&!l&&this.parent&&Wi(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(_&&!this._onUpdate&&u0(this,r,!0,!0),(r||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&ur(this,1),!l&&!(_&&!f)&&(v||f||y)&&(Wi(this,v===p?"onComplete":"onReverseComplete",!0),this._prom&&!(v<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},n.resetTo=function(r,l,c,f,p){Pu||Xi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Z0(this,d),_=this._ease(d/this._dur),g3(this,r,l,c,f,_,d,p)?this.resetTo(r,l,c,f,1):(hh(this,0),this.parent||SM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Su(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ti),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,ir&&ir.vars.overwrite!==!0)._first||Su(this),this.parent&&c!==this.timeline.totalDuration()&&hl(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=r?ha(r):f,d=this._ptLookup,_=this._pt,v,g,S,T,M,x,y;if((!l||l==="all")&&YC(f,p))return l==="all"&&(this._pt=0),Su(this);for(v=this._op=this._op||[],l!=="all"&&(Yn(l)&&(M={},Ai(l,function(A){return M[A]=1}),l=M),l=v3(f,l)),y=f.length;y--;)if(~p.indexOf(f[y])){g=d[y],l==="all"?(v[y]=l,T=g,S={}):(S=v[y]=v[y]||{},T=l);for(M in T)x=g&&g[M],x&&((!("kill"in x.d)||x.d.kill(M)===!0)&&ch(this,x,"_pt"),delete g[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&_&&Su(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return Au(1,arguments)},t.delayedCall=function(r,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(r,l,c){return Au(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,c){return Tn.killTweensOf(r,l,c)},t})(zu);Qi(Bn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ai("staggerTo,staggerFrom,staggerFromTo",function(o){Bn[o]=function(){var t=new Mi,n=f0.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var K0=function(t,n,a){return t[n]=a},GM=function(t,n,a){return t[n](a)},S3=function(t,n,a,r){return t[n](r.fp,a)},y3=function(t,n,a){return t.setAttribute(n,a)},Q0=function(t,n){return wn(t[n])?GM:H0(t[n])&&t.setAttribute?y3:K0},VM=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},M3=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},kM=function(t,n){var a=n._pt,r="";if(!t&&n.b)r=n.b;else if(t===1&&n.e)r=n.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+r,a=a._next;r+=n.c}n.set(n.t,n.p,r,n)},J0=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},T3=function(t,n,a,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(t,n,a),l=c},b3=function(t){for(var n=this._pt,a,r;n;)r=n._next,n.p===t&&!n.op||n.op===t?ch(this,n,"_pt"):n.dep||(a=1),n=r;return!a},E3=function(t,n,a,r){r.mSet(t,n,r.m.call(r.tween,a,r.mt),r)},XM=function(t){for(var n=t._pt,a,r,l,c;n;){for(a=n._next,r=l;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:c)?n._prev._next=n:l=n,(n._next=r)?r._prev=n:c=n,n=a}t._pt=l},Ri=(function(){function o(n,a,r,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=r,this.r=f||VM,this.d=p||this,this.set=d||K0,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,r,l){this.mSet=this.mSet||this.set,this.set=E3,this.m=a,this.mt=l,this.tween=r},o})();Ai(W0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return X0[o]=1});Ki.TweenMax=Ki.TweenLite=Bn;Ki.TimelineLite=Ki.TimelineMax=Mi;Tn=new Mi({sortChildren:!1,defaults:Uu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zi.stringFilter=PM;var jr=[],Ff={},A3=[],py=0,R3=0,lm=function(t){return(Ff[t]||A3).map(function(n){return n()})},m0=function(){var t=Date.now(),n=[];t-py>2&&(lm("matchMediaInit"),jr.forEach(function(a){var r=a.queries,l=a.conditions,c,f,p,d;for(f in r)c=Na.matchMedia(r[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),lm("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),py=t,lm("matchMedia"))},WM=(function(){function o(n,a){this.selector=a&&h0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=R3++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,r,l){wn(a)&&(l=r,r=a,a=wn);var c=this,f=function(){var d=Sn,_=c.selector,v;return d&&d!==c&&d.data.push(c),l&&(c.selector=h0(l)),Sn=c,v=r.apply(c,arguments),wn(v)&&c._r.push(v),Sn=d,c.selector=_,c.isReverted=!1,v};return c.last=f,a===wn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var r=Sn;Sn=null,a(this),Sn=r},t.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof o?a.push.apply(a,r.getTweens()):r instanceof Bn&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,r){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,v){return v.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof Mi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Bn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=jr.length;c--;)jr[c].id===this.id&&jr.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),w3=(function(){function o(n){this.contexts=[],this.scope=n,Sn&&Sn.data.push(this)}var t=o.prototype;return t.add=function(a,r,l){Va(a)||(a={matches:a});var c=new WM(0,l||this.scope),f=c.conditions={},p,d,_;Sn&&!c.selector&&(c.selector=Sn.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(d in a)d==="all"?_=1:(p=Na.matchMedia(a[d]),p&&(jr.indexOf(c)<0&&jr.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(m0):p.addEventListener("change",m0)));return _&&r(c,function(v){return c.add(null,v)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},o})(),$f={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(r){return LM(r)})},timeline:function(t){return new Mi(t)},getTweensOf:function(t,n){return Tn.getTweensOf(t,n)},getProperty:function(t,n,a,r){Yn(t)&&(t=ha(t)[0]);var l=Wr(t||{}).get,c=a?xM:vM;return a==="native"&&(a=""),t&&(n?c((Gi[n]&&Gi[n].get||l)(t,n,a,r)):function(f,p,d){return c((Gi[f]&&Gi[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=ha(t),t.length>1){var r=t.map(function(_){return Ci.quickSetter(_,n,a)}),l=r.length;return function(_){for(var v=l;v--;)r[v](_)}}t=t[0]||{};var c=Gi[n],f=Wr(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var v=new c;$o._pt=0,v.init(t,a?_+a:_,$o,0,[t]),v.render(1,v),$o._pt&&J0(1,$o)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var r,l=Ci.to(t,Qi((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(t){return Tn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Yr(t.ease,Uu.ease)),uy(Uu,t||{})},config:function(t){return uy(Zi,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,r=t.plugins,l=t.defaults,c=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!Gi[f]&&!Ki[f]&&Lu(n+" effect requires "+f+" plugin.")}),am[n]=function(f,p,d){return a(ha(f),Qi(p||{},l),d)},c&&(Mi.prototype[n]=function(f,p,d){return this.add(am[n](f,Va(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Oe[t]=Yr(n)},parseEase:function(t,n){return arguments.length?Yr(t,n):Oe},getById:function(t){return Tn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Mi(t),r,l;for(a.smoothChildTiming=Ei(t.smoothChildTiming),Tn.remove(a),a._dp=0,a._time=a._tTime=Tn._time,r=Tn._first;r;)l=r._next,(n||!(!r._dur&&r instanceof Bn&&r.vars.onComplete===r._targets[0]))&&za(a,r,r._start-r._delay),r=l;return za(Tn,a,0),a},context:function(t,n){return t?new WM(t,n):Sn},matchMedia:function(t){return new w3(t)},matchMediaRefresh:function(){return jr.forEach(function(t){var n=t.conditions,a,r;for(r in n)n[r]&&(n[r]=!1,a=1);a&&t.revert()})||m0()},addEventListener:function(t,n){var a=Ff[t]||(Ff[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Ff[t],r=a&&a.indexOf(n);r>=0&&a.splice(r,1)},utils:{wrap:s3,wrapYoyo:r3,distribute:AM,random:wM,snap:RM,normalize:a3,getUnit:ri,clamp:t3,splitColor:NM,toArray:ha,selector:h0,mapRange:DM,pipe:n3,unitize:i3,interpolate:o3,shuffle:EM},install:dM,effects:am,ticker:Xi,updateRoot:Mi.updateRoot,plugins:Gi,globalTimeline:Tn,core:{PropTween:Ri,globals:pM,Tween:Bn,Timeline:Mi,Animation:zu,getCache:Wr,_removeLinkedListItem:ch,reverting:function(){return ti},context:function(t){return t&&Sn&&(Sn.data.push(t),t._ctx=Sn),Sn},suppressOverwrites:function(t){return F0=t}}};Ai("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return $f[o]=Bn[o]});Xi.add(Mi.updateRoot);$o=$f.to({},{duration:0});var C3=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},D3=function(t,n){var a=t._targets,r,l,c;for(r in n)for(l=a.length;l--;)c=t._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=C3(c,r)),c&&c.modifier&&c.modifier(n[r],t,a[l],r))},um=function(t,n){return{name:t,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var p,d;if(Yn(l)&&(p={},Ai(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}D3(f,l)}}}},Ci=$f.registerPlugin({name:"attr",init:function(t,n,a,r,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],r,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)ti?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},um("roundProps",d0),um("modifiers"),um("snap",RM))||$f;Bn.version=Mi.version=Ci.version="3.15.0";hM=1;G0()&&dl();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var my,ar,al,$0,Xr,_y,t_,U3=function(){return typeof window<"u"},Ss={},Fr=180/Math.PI,sl=Math.PI/180,Zo=Math.atan2,gy=1e8,e_=/([A-Z])/g,L3=/(left|right|width|margin|padding|x)/i,N3=/[\s,\(]\S/,Ba={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_0=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},O3=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},P3=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},z3=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},I3=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},qM=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},YM=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},B3=function(t,n,a){return t.style[n]=a},F3=function(t,n,a){return t.style.setProperty(n,a)},H3=function(t,n,a){return t._gsap[n]=a},G3=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},V3=function(t,n,a,r,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},k3=function(t,n,a,r,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},bn="transform",wi=bn+"Origin",X3=function o(t,n){var a=this,r=this.target,l=r.style,c=r._gsap;if(t in Ss&&l){if(this.tfm=this.tfm||{},t!=="transform")t=Ba[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=ps(r,f)}):this.tfm[t]=c.x?c[t]:ps(r,t),t===wi&&(this.tfm.zOrigin=c.zOrigin);else return Ba.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(bn)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(wi,n,"")),t=bn}(l||n)&&this.props.push(t,n,l[t])},jM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},W3=function(){var t=this.props,n=this.target,a=n.style,r=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(e_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=t_(),(!l||!l.isStart)&&!a[bn]&&(jM(a),r.zOrigin&&a[wi]&&(a[wi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ZM=function(t,n){var a={target:t,props:[],revert:W3,save:X3};return t._gsap||Ci.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(r){return a.save(r)}),a},KM,g0=function(t,n){var a=ar.createElementNS?ar.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ar.createElement(t);return a&&a.style?a:ar.createElement(t)},qi=function o(t,n,a){var r=getComputedStyle(t);return r[n]||r.getPropertyValue(n.replace(e_,"-$1").toLowerCase())||r.getPropertyValue(n)||!a&&o(t,pl(n)||n,1)||""},vy="O,Moz,ms,Ms,Webkit".split(","),pl=function(t,n,a){var r=n||Xr,l=r.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(vy[c]+t in l););return c<0?null:(c===3?"ms":c>=0?vy[c]:"")+t},v0=function(){U3()&&window.document&&(my=window,ar=my.document,al=ar.documentElement,Xr=g0("div")||{style:{}},g0("div"),bn=pl(bn),wi=bn+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",KM=!!pl("perspective"),t_=Ci.core.reverting,$0=1)},xy=function(t){var n=t.ownerSVGElement,a=g0("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",a.appendChild(r),al.appendChild(a);try{l=r.getBBox()}catch{}return a.removeChild(r),al.removeChild(a),l},Sy=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},QM=function(t){var n,a;try{n=t.getBBox()}catch{n=xy(t),a=1}return n&&(n.width||n.height)||a||(n=xy(t)),n&&!n.width&&!n.x&&!n.y?{x:+Sy(t,["x","cx","x1"])||0,y:+Sy(t,["y","cy","y1"])||0,width:0,height:0}:n},JM=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&QM(t))},cr=function(t,n){if(n){var a=t.style,r;n in Ss&&n!==wi&&(n=bn),a.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(r==="--"?n:n.replace(e_,"-$1").toLowerCase())):a.removeAttribute(n)}},sr=function(t,n,a,r,l,c){var f=new Ri(t._pt,n,a,0,1,c?YM:qM);return t._pt=f,f.b=r,f.e=l,t._props.push(a),f},yy={deg:1,rad:1,turn:1},q3={grid:1,flex:1},fr=function o(t,n,a,r){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Xr.style,p=L3.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),v=100,g=r==="px",S=r==="%",T,M,x,y;if(r===c||!l||yy[r]||yy[c])return l;if(c!=="px"&&!g&&(l=o(t,n,a,"px")),y=t.getCTM&&JM(t),(S||c==="%")&&(Ss[n]||~n.indexOf("adius")))return T=y?t.getBBox()[p?"width":"height"]:t[_],Un(S?l/T*v:l/100*T);if(f[p?"width":"height"]=v+(g?c:r),M=r!=="rem"&&~n.indexOf("adius")||r==="em"&&t.appendChild&&!d?t:t.parentNode,y&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===ar||!M.appendChild)&&(M=ar.body),x=M._gsap,x&&S&&x.width&&p&&x.time===Xi.time&&!x.uncache)return Un(l/x.width*v);if(S&&(n==="height"||n==="width")){var A=t.style[n];t.style[n]=v+r,T=t[_],A?t.style[n]=A:cr(t,n)}else(S||c==="%")&&!q3[qi(M,"display")]&&(f.position=qi(t,"position")),M===t&&(f.position="static"),M.appendChild(Xr),T=Xr[_],M.removeChild(Xr),f.position="absolute";return p&&S&&(x=Wr(M),x.time=Xi.time,x.width=M[_]),Un(g?T*l/v:T&&l?v/T*l:0)},ps=function(t,n,a,r){var l;return $0||v0(),n in Ba&&n!=="transform"&&(n=Ba[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ss[n]&&n!=="transform"?(l=Bu(t,r),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:eh(qi(t,wi))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=th[n]&&th[n](t,n,a)||qi(t,n)||_M(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?fr(t,n,l,a)+a:l},Y3=function(t,n,a,r){if(!a||a==="none"){var l=pl(n,t,1),c=l&&qi(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=qi(t,"borderTopColor"))}var f=new Ri(this._pt,t.style,n,0,1,kM),p=0,d=0,_,v,g,S,T,M,x,y,A,C,w,P;if(f.b=a,f.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=qi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=t.style[n],t.style[n]=r,r=qi(t,n)||r,M?t.style[n]=M:cr(t,n)),_=[a,r],PM(_),a=_[0],r=_[1],g=a.match(Jo)||[],P=r.match(Jo)||[],P.length){for(;v=Jo.exec(r);)x=v[0],A=r.substring(p,v.index),T?T=(T+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(T=1),x!==(M=g[d++]||"")&&(S=parseFloat(M)||0,w=M.substr((S+"").length),x.charAt(1)==="="&&(x=il(S,x)+w),y=parseFloat(x),C=x.substr((y+"").length),p=Jo.lastIndex-C.length,C||(C=C||Zi.units[n]||w,p===r.length&&(r+=C,f.e+=C)),w!==C&&(S=fr(t,n,M,C)||0),f._pt={_next:f._pt,p:A||d===1?A:",",s:S,c:y-S,m:T&&T<4||n==="zIndex"?Math.round:0});f.c=p<r.length?r.substring(p,r.length):""}else f.r=n==="display"&&r==="none"?YM:qM;return fM.test(r)&&(f.e=0),this._pt=f,f},My={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},j3=function(t){var n=t.split(" "),a=n[0],r=n[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(t=a,a=r,r=t),n[0]=My[a]||a,n[1]=My[r]||r,n.join(" ")},Z3=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,r=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)r.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],Ss[f]&&(p=1,f=f==="transformOrigin"?wi:bn),cr(a,f);p&&(cr(a,bn),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Bu(a,1),c.uncache=1,jM(r)))}},th={clearProps:function(t,n,a,r,l){if(l.data!=="isFromStart"){var c=t._pt=new Ri(t._pt,n,a,0,0,Z3);return c.u=r,c.pr=-10,c.tween=l,t._props.push(a),1}}},Iu=[1,0,0,1,0,0],$M={},t1=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ty=function(t){var n=qi(t,bn);return t1(n)?Iu:n.substr(7).match(cM).map(Un)},n_=function(t,n){var a=t._gsap||Wr(t),r=t.style,l=Ty(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?Iu:l):(l===Iu&&!t.offsetParent&&t!==al&&!a.svg&&(p=r.display,r.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,al.appendChild(t)),l=Ty(t),p?r.display=p:cr(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):al.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},x0=function(t,n,a,r,l,c){var f=t._gsap,p=l||n_(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,v=f.xOffset||0,g=f.yOffset||0,S=p[0],T=p[1],M=p[2],x=p[3],y=p[4],A=p[5],C=n.split(" "),w=parseFloat(C[0])||0,P=parseFloat(C[1])||0,N,O,E,U;a?p!==Iu&&(O=S*x-T*M)&&(E=w*(x/O)+P*(-M/O)+(M*A-x*y)/O,U=w*(-T/O)+P*(S/O)-(S*A-T*y)/O,w=E,P=U):(N=QM(t),w=N.x+(~C[0].indexOf("%")?w/100*N.width:w),P=N.y+(~(C[1]||C[0]).indexOf("%")?P/100*N.height:P)),r||r!==!1&&f.smooth?(y=w-d,A=P-_,f.xOffset=v+(y*S+A*M)-y,f.yOffset=g+(y*T+A*x)-A):f.xOffset=f.yOffset=0,f.xOrigin=w,f.yOrigin=P,f.smooth=!!r,f.origin=n,f.originIsAbsolute=!!a,t.style[wi]="0px 0px",c&&(sr(c,f,"xOrigin",d,w),sr(c,f,"yOrigin",_,P),sr(c,f,"xOffset",v,f.xOffset),sr(c,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",w+" "+P)},Bu=function(t,n){var a=t._gsap||new IM(t);if("x"in a&&!n&&!a.uncache)return a;var r=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=qi(t,wi)||"0",_,v,g,S,T,M,x,y,A,C,w,P,N,O,E,U,G,H,W,nt,ot,X,I,F,it,pt,St,B,Q,vt,At,Ut;return _=v=g=M=x=y=A=C=w=0,S=T=1,a.svg=!!(t.getCTM&&JM(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(r[bn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[bn]!=="none"?p[bn]:"")),r.scale=r.rotate=r.translate="none"),O=n_(t,a.svg),a.svg&&(a.uncache?(it=t.getBBox(),d=a.xOrigin-it.x+"px "+(a.yOrigin-it.y)+"px",F=""):F=!n&&t.getAttribute("data-svg-origin"),x0(t,F||d,!!F||a.originIsAbsolute,a.smooth!==!1,O)),P=a.xOrigin||0,N=a.yOrigin||0,O!==Iu&&(H=O[0],W=O[1],nt=O[2],ot=O[3],_=X=O[4],v=I=O[5],O.length===6?(S=Math.sqrt(H*H+W*W),T=Math.sqrt(ot*ot+nt*nt),M=H||W?Zo(W,H)*Fr:0,A=nt||ot?Zo(nt,ot)*Fr+M:0,A&&(T*=Math.abs(Math.cos(A*sl))),a.svg&&(_-=P-(P*H+N*nt),v-=N-(P*W+N*ot))):(Ut=O[6],vt=O[7],St=O[8],B=O[9],Q=O[10],At=O[11],_=O[12],v=O[13],g=O[14],E=Zo(Ut,Q),x=E*Fr,E&&(U=Math.cos(-E),G=Math.sin(-E),F=X*U+St*G,it=I*U+B*G,pt=Ut*U+Q*G,St=X*-G+St*U,B=I*-G+B*U,Q=Ut*-G+Q*U,At=vt*-G+At*U,X=F,I=it,Ut=pt),E=Zo(-nt,Q),y=E*Fr,E&&(U=Math.cos(-E),G=Math.sin(-E),F=H*U-St*G,it=W*U-B*G,pt=nt*U-Q*G,At=ot*G+At*U,H=F,W=it,nt=pt),E=Zo(W,H),M=E*Fr,E&&(U=Math.cos(E),G=Math.sin(E),F=H*U+W*G,it=X*U+I*G,W=W*U-H*G,I=I*U-X*G,H=F,X=it),x&&Math.abs(x)+Math.abs(M)>359.9&&(x=M=0,y=180-y),S=Un(Math.sqrt(H*H+W*W+nt*nt)),T=Un(Math.sqrt(I*I+Ut*Ut)),E=Zo(X,I),A=Math.abs(E)>2e-4?E*Fr:0,w=At?1/(At<0?-At:At):0),a.svg&&(F=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!t1(qi(t,bn)),F&&t.setAttribute("transform",F))),Math.abs(A)>90&&Math.abs(A)<270&&(l?(S*=-1,A+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,A+=A<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=v-((a.yPercent=v&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=g+c,a.scaleX=Un(S),a.scaleY=Un(T),a.rotation=Un(M)+f,a.rotationX=Un(x)+f,a.rotationY=Un(y)+f,a.skewX=A+f,a.skewY=C+f,a.transformPerspective=w+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(r[wi]=eh(d)),a.xOffset=a.yOffset=0,a.force3D=Zi.force3D,a.renderTransform=a.svg?Q3:KM?e1:K3,a.uncache=0,a},eh=function(t){return(t=t.split(" "))[0]+" "+t[1]},cm=function(t,n,a){var r=ri(n);return Un(parseFloat(n)+parseFloat(fr(t,"x",a+"px",r)))+r},K3=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,e1(t,n)},Ir="0deg",gu="0px",Br=") ",e1=function(t,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,v=a.rotationX,g=a.skewX,S=a.skewY,T=a.scaleX,M=a.scaleY,x=a.transformPerspective,y=a.force3D,A=a.target,C=a.zOrigin,w="",P=y==="auto"&&t&&t!==1||y===!0;if(C&&(v!==Ir||_!==Ir)){var N=parseFloat(_)*sl,O=Math.sin(N),E=Math.cos(N),U;N=parseFloat(v)*sl,U=Math.cos(N),c=cm(A,c,O*U*-C),f=cm(A,f,-Math.sin(N)*-C),p=cm(A,p,E*U*-C+C)}x!==gu&&(w+="perspective("+x+Br),(r||l)&&(w+="translate("+r+"%, "+l+"%) "),(P||c!==gu||f!==gu||p!==gu)&&(w+=p!==gu||P?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+Br),d!==Ir&&(w+="rotate("+d+Br),_!==Ir&&(w+="rotateY("+_+Br),v!==Ir&&(w+="rotateX("+v+Br),(g!==Ir||S!==Ir)&&(w+="skew("+g+", "+S+Br),(T!==1||M!==1)&&(w+="scale("+T+", "+M+Br),A.style[bn]=w||"translate(0, 0)"},Q3=function(t,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,v=a.scaleX,g=a.scaleY,S=a.target,T=a.xOrigin,M=a.yOrigin,x=a.xOffset,y=a.yOffset,A=a.forceCSS,C=parseFloat(c),w=parseFloat(f),P,N,O,E,U;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=sl,d*=sl,P=Math.cos(p)*v,N=Math.sin(p)*v,O=Math.sin(p-d)*-g,E=Math.cos(p-d)*g,d&&(_*=sl,U=Math.tan(d-_),U=Math.sqrt(1+U*U),O*=U,E*=U,_&&(U=Math.tan(_),U=Math.sqrt(1+U*U),P*=U,N*=U)),P=Un(P),N=Un(N),O=Un(O),E=Un(E)):(P=v,E=g,N=O=0),(C&&!~(c+"").indexOf("px")||w&&!~(f+"").indexOf("px"))&&(C=fr(S,"x",c,"px"),w=fr(S,"y",f,"px")),(T||M||x||y)&&(C=Un(C+T-(T*P+M*O)+x),w=Un(w+M-(T*N+M*E)+y)),(r||l)&&(U=S.getBBox(),C=Un(C+r/100*U.width),w=Un(w+l/100*U.height)),U="matrix("+P+","+N+","+O+","+E+","+C+","+w+")",S.setAttribute("transform",U),A&&(S.style[bn]=U)},J3=function(t,n,a,r,l){var c=360,f=Yn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?Fr:1),d=p-r,_=r+d+"deg",v,g;return f&&(v=l.split("_")[1],v==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),v==="cw"&&d<0?d=(d+c*gy)%c-~~(d/c)*c:v==="ccw"&&d>0&&(d=(d-c*gy)%c-~~(d/c)*c)),t._pt=g=new Ri(t._pt,n,a,r,d,O3),g.e=_,g.u="deg",t._props.push(a),g},by=function(t,n){for(var a in n)t[a]=n[a];return t},$3=function(t,n,a){var r=by({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,v,g,S,T;r.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[bn]=n,f=Bu(a,1),cr(a,bn),a.setAttribute("transform",d)):(d=getComputedStyle(a)[bn],c[bn]=n,f=Bu(a,1),c[bn]=d);for(p in Ss)d=r[p],_=f[p],d!==_&&l.indexOf(p)<0&&(S=ri(d),T=ri(_),v=S!==T?fr(a,p,d,T):parseFloat(d),g=parseFloat(_),t._pt=new Ri(t._pt,f,p,v,g-v,_0),t._pt.u=T||0,t._props.push(p));by(f,r)};Ai("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",r="Bottom",l="Left",c=(t<3?[n,a,r,l]:[n+l,n+a,r+a,r+l]).map(function(f){return t<2?o+f:"border"+f+o});th[t>1?"border"+o:o]=function(f,p,d,_,v){var g,S;if(arguments.length<4)return g=c.map(function(T){return ps(f,T,d)}),S=g.join(" "),S.split(g[0]).length===5?g[0]:S;g=(_+"").split(" "),S={},c.forEach(function(T,M){return S[T]=g[M]=g[M]||g[(M-1)/2|0]}),f.init(p,S,v)}});var n1={name:"css",register:v0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,r,l){var c=this._props,f=t.style,p=a.vars.startAt,d,_,v,g,S,T,M,x,y,A,C,w,P,N,O,E,U;$0||v0(),this.styles=this.styles||ZM(t),E=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(Gi[M]&&BM(M,n,a,r,t,l)))){if(S=typeof _,T=th[M],S==="function"&&(_=_.call(a,r,t,l),S=typeof _),S==="string"&&~_.indexOf("random(")&&(_=Ou(_)),T)T(this,t,M,_,a)&&(O=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",or.lastIndex=0,or.test(d)||(x=ri(d),y=ri(_),y?x!==y&&(d=fr(t,M,d,y)+y):x&&(_+=x)),this.add(f,"setProperty",d,_,r,l,0,0,M),c.push(M),E.push(M,0,f[M]);else if(S!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(a,r,t,l):p[M],Yn(d)&&~d.indexOf("random(")&&(d=Ou(d)),ri(d+"")||d==="auto"||(d+=Zi.units[M]||ri(ps(t,M))||""),(d+"").charAt(1)==="="&&(d=ps(t,M))):d=ps(t,M),g=parseFloat(d),A=S==="string"&&_.charAt(1)==="="&&_.substr(0,2),A&&(_=_.substr(2)),v=parseFloat(_),M in Ba&&(M==="autoAlpha"&&(g===1&&ps(t,"visibility")==="hidden"&&v&&(g=0),E.push("visibility",0,f.visibility),sr(this,f,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),M!=="scale"&&M!=="transform"&&(M=Ba[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in Ss,C){if(this.styles.save(M),U=_,S==="string"&&_.substring(0,6)==="var(--"){if(_=qi(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var G=t.style.perspective;t.style.perspective=_,_=qi(t,"perspective"),G?t.style.perspective=G:cr(t,"perspective")}v=parseFloat(_)}if(w||(P=t._gsap,P.renderTransform&&!n.parseTransform||Bu(t,n.parseTransform),N=n.smoothOrigin!==!1&&P.smooth,w=this._pt=new Ri(this._pt,f,bn,0,1,P.renderTransform,P,0,-1),w.dep=1),M==="scale")this._pt=new Ri(this._pt,P,"scaleY",P.scaleY,(A?il(P.scaleY,A+v):v)-P.scaleY||0,_0),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){E.push(wi,0,f[wi]),_=j3(_),P.svg?x0(t,_,0,N,0,this):(y=parseFloat(_.split(" ")[2])||0,y!==P.zOrigin&&sr(this,P,"zOrigin",P.zOrigin,y),sr(this,f,M,eh(d),eh(_)));continue}else if(M==="svgOrigin"){x0(t,_,1,N,0,this);continue}else if(M in $M){J3(this,P,M,g,A?il(g,A+_):_);continue}else if(M==="smoothOrigin"){sr(this,P,"smooth",P.smooth,_);continue}else if(M==="force3D"){P[M]=_;continue}else if(M==="transform"){$3(this,_,t);continue}}else M in f||(M=pl(M)||M);if(C||(v||v===0)&&(g||g===0)&&!N3.test(_)&&M in f)x=(d+"").substr((g+"").length),v||(v=0),y=ri(_)||(M in Zi.units?Zi.units[M]:x),x!==y&&(g=fr(t,M,d,y)),this._pt=new Ri(this._pt,C?P:f,M,g,(A?il(g,A+v):v)-g,!C&&(y==="px"||M==="zIndex")&&n.autoRound!==!1?I3:_0),this._pt.u=y||0,C&&U!==_?(this._pt.b=d,this._pt.e=U,this._pt.r=z3):x!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=P3);else if(M in f)Y3.call(this,t,M,d,A?A+_:_);else if(M in t)this.add(t,M,d||t[M],A?A+_:_,r,l);else if(M!=="parseTransform"){k0(M,_);continue}C||(M in f?E.push(M,0,f[M]):typeof t[M]=="function"?E.push(M,2,t[M]()):E.push(M,1,d||t[M])),c.push(M)}}O&&XM(this)},render:function(t,n){if(n.tween._time||!t_())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:ps,aliases:Ba,getSetter:function(t,n,a){var r=Ba[n];return r&&r.indexOf(",")<0&&(n=r),n in Ss&&n!==wi&&(t._gsap.x||ps(t,"x"))?a&&_y===a?n==="scale"?G3:H3:(_y=a||{})&&(n==="scale"?V3:k3):t.style&&!H0(t.style[n])?B3:~n.indexOf("-")?F3:Q0(t,n)},core:{_removeProperty:cr,_getMatrix:n_}};Ci.utils.checkPrefix=pl;Ci.core.getStyleSaver=ZM;(function(o,t,n,a){var r=Ai(o+","+t+","+n,function(l){Ss[l]=1});Ai(t,function(l){Zi.units[l]="deg",$M[l]=1}),Ba[r[13]]=o+","+t,Ai(a,function(l){var c=l.split(":");Ba[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ai("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Zi.units[o]="px"});Ci.registerPlugin(n1);var Vt=Ci.registerPlugin(n1)||Ci;Vt.core.Tween;const Hf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gu{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tD=new oh(-1,1,1,-1,0,1);class eD extends Fn{constructor(){super(),this.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dn([0,2,0,0,2,0],2))}}const nD=new eD;class i1{constructor(t){this._mesh=new cn(nD,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,tD)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class iD extends Gu{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof $n?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=jf.clone(t.uniforms),this.material=new $n({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new i1(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ey extends Gu{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const r=t.getContext(),l=t.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,f;this.inverse?(c=0,f=1):(c=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),l.buffers.stencil.setFunc(r.ALWAYS,c,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(r.EQUAL,1,4294967295),l.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),l.buffers.stencil.setLocked(!0)}}class aD extends Gu{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class sD{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new pe);this._width=a.width,this._height=a.height,n=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new iD(Hf),this.copyPass.material.blending=Fa,this.timer=new PE}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let r=0,l=this.passes.length;r<l;r++){const c=this.passes[r];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),c.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),c.needsSwap){if(a){const f=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Ey!==void 0&&(c instanceof Ey?a=!0:c instanceof aD&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(a,r),this.renderTarget2.setSize(a,r);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(a,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rD extends Gu{constructor(t,n,a=null,r=null,l=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=r,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ye}render(t,n,a){const r=t.autoClear;t.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(l=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),t.autoClear=r}}const oD={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ml extends Gu{constructor(t,n=1,a,r){super(),this.strength=n,this.radius=a,this.threshold=r,this.resolution=t!==void 0?new pe(t.x,t.y):new pe(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new bi(l,c,{type:Yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new bi(l,c,{type:Yi});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new bi(l,c,{type:Yi});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),l=Math.round(l/2),c=Math.round(c/2)}const f=oD;this.highPassUniforms=jf.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $n({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new pe(1/l,1/c),l=Math.round(l/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=jf.clone(Hf.uniforms),this.blendMaterial=new $n({uniforms:this.copyUniforms,vertexShader:Hf.vertexShader,fragmentShader:Hf.fragmentShader,premultipliedAlpha:!0,blending:el,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new la,this._fsQuad=new i1(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),r=Math.round(n/2);this.renderTargetBright.setSize(a,r);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(a,r),this.renderTargetsVertical[l].setSize(a,r),this.separableBlurMaterials[l].uniforms.invSize.value=new pe(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2)}render(t,n,a,r,l){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const c=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),l&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[p].uniforms.direction.value=ml.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=ml.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=c}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let r=0;r<t;r++)n.push(.39894*Math.exp(-.5*r*r/(a*a))/a);return new $n({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new $n({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ml.BlurDirectionX=new pe(1,0);ml.BlurDirectionY=new pe(0,1);function lD(o){const t=new hE;t.background=null,t.fog=new Mu(0,.015);const n=new Vi(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=10;const a=new OC({antialias:!0,alpha:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.toneMapping=M0,a.toneMappingExposure=1,o.appendChild(a.domElement);const r=new rD(t,n),l=new ml(new pe(window.innerWidth,window.innerHeight),1.2,.5,.1),c=new sD(a);c.addPass(r),c.addPass(l);const f=new LE(16777215,.2);t.add(f);const p=new Js(65535,2,50);n.add(p),t.add(n);const d=new Oa;t.add(d);const _=new si(1,1,1),v=new Da({color:1118481,roughness:.1,metalness:.9,emissive:8738,emissiveIntensity:.2}),g=800,S=new yS(_,v,g);d.add(S);const T=new la({color:65535,wireframe:!0,transparent:!0,opacity:.15}),M=new yS(_,T,g);d.add(M);const x=new Vn;let y=0;const A=800,C=60;for(let Ft=0;Ft<C;Ft++){const Lt=-Ft*(A/C);for(let Qt=-4;Qt<=4;Qt++)for(let oe=-4;oe<=4;oe++){if(Math.abs(Qt)<2&&Math.abs(oe)<2||Math.random()>.4)continue;if(y>=g)break;const Yt=Math.random(),Et=Yt>.7?4:Yt>.4?1:9,be=Math.random()>.5?4:1,ne=9+Math.random()*30;x.position.set(Qt*8,oe*8,Lt),x.scale.set(Et,be,ne),x.updateMatrix(),S.setMatrixAt(y,x.matrix),M.setMatrixAt(y,x.matrix),y++}}S.count=y,M.count=y;const w=-150,P=new Oa;t.add(P),new Da({color:15658734,roughness:.1,metalness:.3,emissive:8738,emissiveIntensity:.2});const N=[],O=3,E=12,U=4,G=3.2,H=12.2;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([Ft,Lt])=>{const Qt=new Da({color:15658734,roughness:.2,metalness:.3,emissive:17476,emissiveIntensity:.2,side:yi}),oe=new si(O,E,U),Yt=new cn(oe,Qt),Et=new bf(oe),be=new Ko({color:65535,transparent:!0,opacity:.8}),ne=new vf(Et,be);Yt.add(ne);const tn=new Js(65535,4,30);tn.position.set(0,0,0),Yt.add(tn);const D=new si(O+4,E+4,U+4),q=new la({visible:!0,transparent:!0,opacity:0,depthWrite:!1,side:yi}),et=new cn(D,q);et.userData={parentPiece:Yt},Yt.add(et);const $=Ft*(G/2),tt=Lt*(H/2),zt=w;Yt.userData={isPuzzlePiece:!0,targetPos:new Z($,tt,zt),targetRot:new vs(0,0,0),snapped:!1,id:N.length,pieceLight:tn};const Gt=(Math.random()-.5)*30,wt=(Math.random()-.5)*30,Wt=w+(Math.random()*10-5);Yt.position.set(Gt,wt,Wt),Yt.rotation.set(Math.random()*Math.PI*.5,Math.random()*Math.PI*.5,Math.random()*Math.PI*.5),P.add(Yt),N.push(Yt)});const nt=new Js(65535,0,50);nt.position.set(0,0,w),t.add(nt);const ot=3e3,X=new Fn,I=new Float32Array(ot*3);for(let Ft=0;Ft<ot;Ft++)I[Ft*3+0]=(Math.random()-.5)*100,I[Ft*3+1]=(Math.random()-.5)*100,I[Ft*3+2]=20-Math.random()*200;X.setAttribute("position",new ji(I,3));const F=new $n({uniforms:{uTime:{value:0},uMousePos:{value:new Z(0,0,0)},uColor:{value:new ye(43690)}},vertexShader:`
      uniform float uTime;
      uniform vec3 uMousePos;
      varying float vGlow;
      void main() {
        vec3 pos = position;
        
        // Flowing space dust
        pos.x += sin(uTime + pos.z * 0.05) * 0.5;
        pos.y += cos(uTime + pos.z * 0.05) * 0.5;

        // Repel from mouse
        float dist = distance(pos.xy, uMousePos.xy);
        float zDist = abs(pos.z - uMousePos.z);
        float force = 0.0;
        if (dist < 10.0 && zDist < 20.0) {
           force = (10.0 - dist) / 10.0;
           vec2 dir = normalize(pos.xy - uMousePos.xy);
           pos.x += dir.x * force * 5.0;
           pos.y += dir.y * force * 5.0;
        }
        
        vGlow = force;
        vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPos;
        gl_PointSize = (100.0 / -mvPos.z) * (1.0 + force * 2.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vGlow;
      void main() {
        // Soft circle
        float dist = distance(gl_PointCoord, vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = smoothstep(0.5, 0.1, dist);
        
        vec3 finalColor = mix(uColor, vec3(0.0, 1.0, 1.0), vGlow * 1.5);
        gl_FragColor = vec4(finalColor, alpha * (0.3 + vGlow * 0.7));
      }
    `,transparent:!0,depthWrite:!1,blending:el}),it=new RS(X,F);t.add(it);const pt=new bu(.1,.015,8,32),St=new la({color:65535,wireframe:!0,transparent:!0,opacity:.8,depthTest:!1,depthWrite:!1}),B=new cn(pt,St);B.renderOrder=999,t.add(B);const Q=new Oa;t.add(Q);const vt=-180,At=1500,Ut=80;for(let Ft=0;Ft<Ut;Ft++){const Qt=Ft%2===0?new si(40,40,4):new er(25,25,4,8),oe=new bf(Qt),Yt=new Ko({color:65535,transparent:!0,opacity:.15}),Et=new vf(oe,Yt);Et.position.z=vt-Ft*(At/Ut),Et.rotation.z=Math.random()*Math.PI,Et.userData={baseZ:Et.position.z,rotSpeed:(Math.random()-.5)*.02},Q.add(Et)}const at=new IE,yt=new pe;let Tt=10,kt=10,ie=!1,te=!1,Be=!1,ge=!1,ve=!1,Pe=!1,ae=0,qe=!1;const Ge=[];let De=null,j=null,sn={value:0},xe={speed:.05},ze=!1,Ct=!1,Fe=0,z=!1,R=null,K=null,dt=null,xt=null,Dt=null;const Mt=document.createElement("div");Mt.style.position="fixed",Mt.style.top="0",Mt.style.left="0",Mt.style.width="100vw",Mt.style.height="100vh",Mt.style.backgroundColor="#ffffff",Mt.style.pointerEvents="none",Mt.style.opacity="0",Mt.style.transition="opacity 3s ease",Mt.style.zIndex="9999",document.body.appendChild(Mt);const ct=-1200,ht=new si(6.2,24.2,4),Bt=new Da({color:15658734,roughness:.2,metalness:.3,emissive:65535,emissiveIntensity:.5}),Nt=new cn(ht,Bt);Nt.scale.set(4,4,4),Nt.position.set(0,0,ct),t.add(Nt);const It=new bf(ht),Ot=new Ko({color:65535,transparent:!0,opacity:.8}),he=new vf(It,Ot);Nt.add(he);const ue=new Js(65535,0,500);ue.position.set(0,0,ct+100),t.add(ue);let se=null,k=null;const Rt=new $s,ft=new Z,Xt=Ft=>{if(ie||Be)return;const Lt=Ft.deltaY*.05;Tt-=Lt,Tt>10&&(Tt=10),Tt<w+15&&(Tt=w+15)};window.addEventListener("wheel",Xt);const Pt=Ft=>{if(yt.x=Ft.clientX/window.innerWidth*2-1,yt.y=-(Ft.clientY/window.innerHeight)*2+1,at.setFromCamera(yt,n),at.ray.at(3,B.position),B.lookAt(n.position),at.ray.at(15,F.uniforms.uMousePos.value),ze&&Ct&&!qe){dt&&(at.intersectObject(dt).length>0?Vt.to(B.scale,{x:2.5,y:2.5,z:2.5,duration:.2}):Vt.to(B.scale,{x:1,y:1,z:1,duration:.2}));return}if(ve&&Pe&&!qe){De&&(at.intersectObject(De).length>0?Vt.to(B.scale,{x:2,y:2,z:2,duration:.2}):Vt.to(B.scale,{x:1,y:1,z:1,duration:.2}));return}if(!k&&te){const Lt=at.intersectObjects(N,!0);let Qt=null;for(let oe=0;oe<Lt.length;oe++){let Yt=Lt[oe].object,Et=Yt.userData.parentPiece||(Yt.userData.isPuzzlePiece?Yt:null);if(Et&&!Et.userData.snapped){Qt=Et;break}}Qt?se!==Qt&&(se&&(Vt.killTweensOf(se.material),Vt.killTweensOf(se.userData.pieceLight),Vt.killTweensOf(B.scale),Vt.to(se.material,{emissiveIntensity:.2,duration:.3}),Vt.to(se.userData.pieceLight,{intensity:4,duration:.3})),se=Qt,Vt.killTweensOf(se.material),Vt.killTweensOf(se.userData.pieceLight),Vt.killTweensOf(B.scale),Vt.to(se.material,{emissiveIntensity:1,duration:.3}),Vt.to(se.userData.pieceLight,{intensity:8,duration:.3}),Vt.to(B.scale,{x:2,y:2,z:2,duration:.3,ease:"back.out"})):se&&(Vt.killTweensOf(se.material),Vt.killTweensOf(se.userData.pieceLight),Vt.killTweensOf(B.scale),Vt.to(se.material,{emissiveIntensity:.2,duration:.3}),Vt.to(se.userData.pieceLight,{intensity:4,duration:.3}),se=null,Vt.to(B.scale,{x:1,y:1,z:1,duration:.3}))}k&&at.ray.intersectPlane(Rt,ft)&&Vt.to(k.position,{x:ft.x,y:ft.y,duration:.1,ease:"power2.out"})};window.addEventListener("pointermove",Pt);const bt=Ft=>{if(yt.x=Ft.clientX/window.innerWidth*2-1,yt.y=-(Ft.clientY/window.innerHeight)*2+1,at.setFromCamera(yt,n),ze&&Ct&&!qe){dt&&at.intersectObject(dt).length>0&&ui();return}if(ve&&Pe&&!qe){De&&at.intersectObject(De).length>0&&dr();return}if(te&&!k){const Lt=at.intersectObjects(N,!0);let Qt=null;for(let oe=0;oe<Lt.length;oe++){let Yt=Lt[oe].object,Et=Yt.userData.parentPiece||(Yt.userData.isPuzzlePiece?Yt:null);if(Et&&!Et.userData.snapped){Qt=Et;break}}Qt&&(k=Qt)}k&&(Rt.setFromNormalAndCoplanarPoint(n.getWorldDirection(new Z),k.position),Vt.killTweensOf(k.position),Vt.killTweensOf(k.material),Vt.killTweensOf(k.rotation),Vt.killTweensOf(k.userData.pieceLight),Vt.to(k.material,{emissiveIntensity:1.5,duration:.2}),Vt.to(k.userData.pieceLight,{intensity:10,duration:.2}),Vt.to(k.rotation,{x:0,y:0,duration:.5}),at.ray.intersectPlane(Rt,ft)&&Vt.to(k.position,{x:ft.x,y:ft.y,duration:.1,ease:"power2.out"}))};window.addEventListener("pointerdown",bt);const Zt=Ft=>{if(!ve&&k){const Lt=k;k=null;const Qt=Lt.userData.targetPos;if(Math.hypot(Lt.position.x-Qt.x,Lt.position.y-Qt.y)<10){Lt.userData.snapped=!0;let Yt=Lt.children.find(Et=>Et.userData&&Et.userData.parentPiece===Lt);Yt&&Lt.remove(Yt),Vt.killTweensOf(Lt.position),Vt.killTweensOf(Lt.rotation),Vt.killTweensOf(Lt.material),Vt.killTweensOf(Lt.userData.pieceLight),Vt.to(Lt.position,{x:Qt.x,y:Qt.y,z:Qt.z,duration:1,ease:"back.out(1.2)"}),Vt.to(Lt.rotation,{x:Lt.userData.targetRot.x,y:Lt.userData.targetRot.y,z:Lt.userData.targetRot.z,duration:1,ease:"power3.inOut"}),Vt.to(Lt.material.color,{r:1,g:1,b:1,duration:1}),Vt.to(Lt.material,{emissiveIntensity:.8,duration:1}),Vt.to(Lt.userData.pieceLight,{intensity:2,duration:1}),ce()}else Vt.killTweensOf(Lt.material),Vt.killTweensOf(Lt.userData.pieceLight),Vt.to(Lt.material,{emissiveIntensity:.2,duration:.5}),Vt.to(Lt.userData.pieceLight,{intensity:4,duration:.5})}};window.addEventListener("pointerup",Zt);const ce=()=>{N.every(Lt=>Lt.userData.snapped)&&!ie&&(ie=!0,te=!1,Vt.timeline().to(l,{strength:4,threshold:0,duration:1,ease:"power2.in"}).to(nt,{intensity:10,duration:.5},"<").to(B.material,{opacity:0,duration:1},"<").to(P.rotation,{z:Math.PI*2,x:Math.PI*.5,duration:5,ease:"power2.inOut"},"-=0.5").to(l,{strength:1.5,threshold:.1,duration:2},"+=0.2").to(xe,{speed:8,duration:10,ease:"power2.in"},"-=1.0").to(n.position,{z:ct+60,duration:12,ease:"expo.in",onUpdate:()=>{kt=n.position.z,Tt=n.position.z}},"-=10.0"))},pn=(Ft,Lt,Qt,oe,Yt)=>{const Et=new Oa,be=new la({color:Yt,transparent:!0,opacity:1,fog:!1,toneMapped:!1}),ne=(et,$,tt,zt,Gt,wt)=>{const Wt=new er(oe,oe,et,8),Ht=new cn(Wt,be);Ht.rotation.x=$,Ht.rotation.z=tt,Ht.position.set(zt,Gt,wt),Et.add(Ht)},tn=Ft/2+.08,D=Lt/2+.08,q=Qt/2+.08;return ne(Lt+.16,0,0,tn,0,q),ne(Lt+.16,0,0,-tn,0,q),ne(Lt+.16,0,0,tn,0,-q),ne(Lt+.16,0,0,-tn,0,-q),ne(Ft+.16,0,Math.PI/2,0,D,q),ne(Ft+.16,0,Math.PI/2,0,-D,q),ne(Ft+.16,0,Math.PI/2,0,D,-q),ne(Ft+.16,0,Math.PI/2,0,-D,-q),ne(Qt+.16,Math.PI/2,0,tn,D,0),ne(Qt+.16,Math.PI/2,0,-tn,D,0),ne(Qt+.16,Math.PI/2,0,tn,-D,0),ne(Qt+.16,Math.PI/2,0,-tn,-D,0),Et},He=()=>{z=!0,R=new Oa,t.add(R);const Ft=new Js(16758528,5,150);Ft.position.set(0,0,n.position.z-30),R.add(Ft);const Lt=new Js(16771584,3,150);Lt.position.set(0,0,n.position.z-150),R.add(Lt);const Qt=[new bu(2.5,.15,8,32),new si(2.2,2.2,2.2),new I0(2.5,0),new z0(2.3,0),new P0(1.6,3.2,5),new Tu(2,2.3,16),new er(1.4,1.4,4,6)],oe=new la({color:16759552,transparent:!0,opacity:.9,wireframe:!0,toneMapped:!1,side:yi}),Yt=new Da({color:16750848,emissive:16755200,emissiveIntensity:3.5,roughness:.15,metalness:.9,transparent:!0,opacity:.95}),Et=n.position.z;for(let ne=0;ne<80;ne++){const tn=Math.floor(Math.random()*Qt.length),D=Qt[tn],et=Math.random()>.45?oe:Yt.clone(),$=new cn(D,et),tt=Math.random()*Math.PI*2,zt=6+Math.random()*24,Gt=Math.cos(tt)*zt,wt=Math.sin(tt)*zt,Wt=Et-Math.random()*400;$.position.set(Gt,wt,Wt),$.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const Ht=.5+Math.random()*1.5;$.scale.set(Ht,Ht,Ht),$.userData={rotSpeedX:(Math.random()-.5)*1.8,rotSpeedY:(Math.random()-.5)*1.8,rotSpeedZ:(Math.random()-.5)*1.8,speedZ:4.5+Math.random()*4.5},R.add($)}const be=new Ko({color:16768256,toneMapped:!1});for(let ne=0;ne<35;ne++){const tn=18+Math.random()*25,D=[new Z(0,0,0),new Z(0,0,tn)],q=new Fn().setFromPoints(D),et=new qy(q,be),$=Math.random()*Math.PI*2,tt=4.5+Math.random()*16,zt=Math.cos($)*tt,Gt=Math.sin($)*tt,wt=Et-Math.random()*400;et.position.set(zt,Gt,wt),et.userData={speedZ:9+Math.random()*7,rotSpeedX:0,rotSpeedY:0,rotSpeedZ:0},R.add(et)}},di=()=>{ze=!0,Fe=0,document.body.style.backgroundColor="#000000";const Ft=document.getElementById("app-bg-gradient");Ft&&(Ft.style.opacity="1",Ft.style.display="block");const Lt=document.getElementById("app-vignette");Lt&&(Lt.style.opacity="1",Lt.style.display="block"),t.background=new ye(0),t.fog=new Mu(0,.015),d.visible=!1,P.visible=!1,it.visible=!1,Q.visible=!1,Nt.visible=!1,n.position.set(0,0,18),kt=18,Tt=18,p.color.setHex(16755200),p.intensity=3,p.distance=150,K=new Oa,t.add(K);const Qt=14;for(let wt=0;wt<Qt;wt++){const Wt=8+wt*4,Ht=new si(Wt,Wt,2),ee=new bf(Ht),de=new Ko({color:16763904,transparent:!0,opacity:.12+wt*.02}),Jt=new vf(ee,de);Jt.position.z=-wt*12,K.add(Jt)}const oe=new er(3.5,3.8,.8,32),Yt=new Da({color:1579012,roughness:.4,metalness:.8,emissive:2232576,emissiveIntensity:.5}),Et=new cn(oe,Yt);Et.rotation.x=Math.PI/2,Et.position.set(0,0,0),K.add(Et);const be=new Tu(4.5,4.7,32),ne=new la({color:16759552,transparent:!0,opacity:.8,side:yi});xt=new cn(be,ne),xt.position.set(0,0,.1),K.add(xt);const tn=new Tu(5.2,5.3,6),D=new la({color:16755200,transparent:!0,opacity:.6,side:yi});Dt=new cn(tn,D),Dt.position.set(0,0,.15),K.add(Dt);for(let wt=0;wt<12;wt++){const Wt=wt/12*Math.PI*2,Ht=new si(.12,1.2,.08),ee=new Da({color:16759552,emissive:16746496,emissiveIntensity:1}),de=new cn(Ht,ee);de.position.set(Math.cos(Wt)*6.2,Math.sin(Wt)*6.2,0),de.rotation.z=Wt,K.add(de)}const q=new er(2.5,2.5,.5,32),et=new Da({color:16755200,emissive:16759552,emissiveIntensity:2,roughness:.08,metalness:.9,transparent:!0,opacity:.95});dt=new cn(q,et),dt.rotation.x=Math.PI/2,dt.position.set(0,0,.4),K.add(dt);const $=new Js(16755200,3.5,35);$.position.set(0,0,1),K.add($);const tt=new bu(2.6,.12,16,64),zt=new la({color:16770560,toneMapped:!1}),Gt=new cn(tt,zt);Gt.position.set(0,0,.6),K.add(Gt),Vt.killTweensOf(l),Vt.to(l,{strength:1.8,threshold:.05,duration:2.5,ease:"power2.out"}),B.material.color.setHex(16763904),Vt.to(B.material,{opacity:.9,duration:1}),setTimeout(()=>{Mt&&(Mt.style.opacity="0"),Ct=!0},300)},ui=()=>{if(!dt||!Ct)return;Ct=!1,Fe++;const Ft=.15+Fe*.05;Vt.fromTo(dt.position,{z:Ft},{z:.4,duration:.2,ease:"back.out(2)"});const Lt=dt.material,Qt=10+Fe*6,oe=4+Fe*3.5;Vt.to(Lt,{emissiveIntensity:Qt,duration:.1,yoyo:!0,repeat:1}),Vt.to(l,{strength:oe,duration:.1,yoyo:!0,repeat:1}),xt&&Dt&&(Vt.to(xt.rotation,{z:xt.rotation.z+1.5,duration:.3}),Vt.to(Dt.rotation,{z:Dt.rotation.z-2,duration:.3})),Vt.fromTo(B.scale,{x:3.5,y:3.5,z:3.5},{x:1,y:1,z:1,duration:.4,ease:"back.out"});const Yt=2+Fe*2;ys(new Z(0,0,1.2),Yt,16755200);const Et=.1+Fe*.15;Vt.fromTo(n.position,{x:(Math.random()-.5)*Et,y:(Math.random()-.5)*Et},{x:0,y:0,duration:.2,ease:"rough"}),Fe<5?setTimeout(()=>{Ct=!0},250):setTimeout(()=>{Vt.to(K.rotation,{z:Math.PI*18,duration:3,ease:"power3.in"}),Vt.to(K.scale,{x:.001,y:.001,z:.1,duration:2.8,ease:"power3.in"}),He(),Vt.to(l,{strength:12,threshold:0,duration:2}),setTimeout(()=>{Mt&&(Mt.style.display="block",Mt.style.transition="opacity 5.5s cubic-bezier(0.25, 1, 0.5, 1)",Mt.style.opacity="1"),Vt.to(l,{strength:45,threshold:0,duration:5.5,ease:"power2.in"})},2e3),setTimeout(()=>{z=!1,R&&(t.remove(R),R=null),ze=!1,K&&(K.visible=!1),ka()},7500)},500)},ka=()=>{ve=!0,Mt&&(Mt.style.transition="opacity 3s ease"),document.body.style.backgroundColor="#ffffff";const Ft=document.getElementById("app-bg-gradient");Ft&&(Ft.style.opacity="0",setTimeout(()=>{Ft.style.display="none"},2e3));const Lt=document.getElementById("app-vignette");Lt&&(Lt.style.opacity="0",Lt.style.display="none"),t.background=new ye(16777215),t.fog=new Mu(16777215,.005),d.visible=!1,P.visible=!1,it.visible=!1,Q.visible=!1,Nt.visible=!1,n.position.set(0,0,45),kt=45,Tt=45,p.color.setHex(16777215),p.intensity=1.5,p.distance=250;const Qt=new UE(16777215,1.2);Qt.position.set(20,40,30),t.add(Qt);const oe=new si(6.5,25,4.2),Yt=new Da({color:328967,roughness:.05,metalness:.95,emissive:8755,emissiveIntensity:.5,transparent:!0,opacity:1});De=new cn(oe,Yt),De.position.set(0,45,0),t.add(De);const Et=new Js(65535,4,40);Et.position.set(0,0,0),De.add(Et);const be=pn(6.5,25,4.2,.2,65535);De.add(be),B.material.color.setHex(65535),Vt.to(B.scale,{x:1,y:1,z:1,duration:.5}),Vt.to(B.material,{opacity:.9,duration:1}),Vt.killTweensOf(l),Vt.to(l,{strength:1.8,threshold:.05,duration:2.5,ease:"power2.out"}),Vt.to(De.position,{y:1,duration:3.2,ease:"bounce.out",onComplete:()=>{Pe=!0}}),setTimeout(()=>{Mt&&(Mt.style.opacity="0",setTimeout(()=>{Mt.style.display="none"},3e3))},300)},dr=()=>{ae++,Vt.killTweensOf(De.position);const Ft=1,Lt=.5+ae*.4;Vt.fromTo(De.position,{x:(Math.random()-.5)*Lt,y:Ft+(Math.random()-.5)*Lt,z:(Math.random()-.5)*Lt},{x:0,y:Ft,z:0,duration:.05,repeat:6,yoyo:!0});const Qt=De.material,oe=new ye;ae===1?oe.setHex(65484):ae===2?oe.setHex(3407616):ae===3?oe.setHex(16755200):ae===4?oe.setHex(16724736):oe.setHex(16777215),Vt.to(Qt.color,{r:1,g:1-ae*.15,b:1-ae*.2,duration:.2}),Vt.to(Qt,{emissiveIntensity:2+ae*6,duration:.1,yoyo:!0,repeat:1}),Qt.emissive&&Qt.emissive.set(oe),Vt.to(l,{strength:4+ae*6,duration:.1,yoyo:!0,repeat:1}),Vt.fromTo(B.scale,{x:3.5,y:3.5,z:3.5},{x:1,y:1,z:1,duration:.35,ease:"back.out"}),ys(new Z(0,1,3),ae),ae>=5&&pr()},ys=(Ft,Lt,Qt)=>{const oe=30+Lt*15,Yt=new si(.5,.5,.5),Et=[65535,65450,16755200,16724736,16777215],be=Qt!==void 0?Qt:Et[Math.min(Math.max(0,ae-1),Et.length-1)];for(let ne=0;ne<oe;ne++){const tn=new la({color:be,transparent:!0,opacity:1,blending:el}),D=new cn(Yt,tn),q=.4+Math.random()*1.6;D.scale.set(q,q,q),D.position.copy(Ft).add(new Z((Math.random()-.5)*6,(Math.random()-.5)*16,(Math.random()-.5)*3));const et=new Z((Math.random()-.5)*38,(Math.random()-.5)*38,(Math.random()-.5)*18),$=new Z(Math.random()*8,Math.random()*8,Math.random()*8);t.add(D),Ge.push({mesh:D,vel:et,rotSpeed:$,age:0,maxAge:.8+Math.random()*.9})}},pr=()=>{qe=!0,Pe=!1,De.visible=!1,Vt.to(l,{strength:45,threshold:0,duration:.4,ease:"power4.out"}),Vt.to(l,{strength:1.5,threshold:.1,duration:3.5,delay:.4}),Vt.to(B.material,{opacity:0,duration:.4});const Ft=new si(2,2,2),Lt=160;for(let Qt=0;Qt<Lt;Qt++){const oe=new Da({color:14540253,emissive:Math.random()>.5?65535:16742144,emissiveIntensity:5,roughness:.1,metalness:.8,transparent:!0,opacity:1}),Yt=new cn(Ft,oe);Yt.position.set((Math.random()-.5)*7.5,(Math.random()-.5)*25.5+1,(Math.random()-.5)*4.8);const Et=.4+Math.random()*2.2;Yt.scale.set(Et,Et,Et);const be=Yt.position.clone().add(new Z(0,-1,0)).normalize(),ne=20+Math.random()*60,tn=be.multiplyScalar(ne);tn.y+=12+Math.random()*22;const D=new Z((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12);t.add(Yt),Ge.push({mesh:Yt,vel:tn,rotSpeed:D,age:0,maxAge:3.2+Math.random()*1.8})}da(),Vt.to(sn,{value:110,duration:3.5,ease:"power3.in"}),Vt.to(sn,{value:12,duration:4.5,delay:4,ease:"power2.out"})},Ln=1500;let rn=null,yn;const da=()=>{rn=new Fn,yn=new Float32Array(Ln*3);for(let Lt=0;Lt<Ln;Lt++){const Qt=6+Math.random()*75,oe=Math.random()*Math.PI*2;yn[Lt*3+0]=Math.cos(oe)*Qt,yn[Lt*3+1]=Math.sin(oe)*Qt,yn[Lt*3+2]=-Math.random()*1e3}rn.setAttribute("position",new ji(yn,3));const Ft=new Yy({color:65535,size:3.5,sizeAttenuation:!0,transparent:!0,opacity:.9,blending:el,depthWrite:!1});j=new RS(rn,Ft),t.add(j)},pa=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",pa);const mr=new BE,Xa=()=>{requestAnimationFrame(Xa);const Ft=mr.getDelta(),Lt=mr.getElapsedTime();F.uniforms.uTime.value=Lt,ie||(kt+=(Tt-kt)*.05,n.position.z=kt),!Be&&n.position.z<-600&&(Be=!0,ue.intensity=10,Vt.to(Nt.rotation,{y:Math.PI*2,duration:8,ease:"power2.inOut"}),Vt.to(Nt.material,{emissiveIntensity:5,duration:6,ease:"power2.in"})),Be&&n.position.z<ct+75&&!ge&&(ge=!0,Vt.to(l,{strength:30,threshold:0,duration:1.5}),Vt.to(Nt.material,{emissiveIntensity:100,color:16777215,duration:1.2}),setTimeout(()=>{Mt&&(Mt.style.opacity="1",setTimeout(()=>{di()},3e3))},300)),!ie&&n.position.z<w+100?te=!0:te=!1,N.forEach(Yt=>{!Yt.userData.snapped&&Yt!==k&&te&&(Yt.position.y+=Math.sin(Lt*2+Yt.userData.id)*.005,Yt.rotation.x+=.002,Yt.rotation.y+=.003)}),d.rotation.z=Lt*.05;const Qt=xe.speed,oe=xe.speed>1;Q.children.forEach(Yt=>{const Et=Yt;Et.rotation.z+=Et.userData.rotSpeed,Et.position.z+=Qt;const be=n.position.z-Et.position.z;if(be>0&&be<80){const ne=1+(80-be)*.04;Et.scale.set(ne,ne,1),Et.material.opacity=.15+(80-be)*.01}else Et.scale.set(1,1,1),Et.material.opacity=oe?.2:.05;Et.position.z>n.position.z+20&&(Be&&n.position.z<-700?Et.visible=!1:Et.position.z-=At)}),B.rotation.z+=Ft*2,ze&&K&&!qe&&(xt&&(xt.rotation.z+=Ft*.4),Dt&&(Dt.rotation.z-=Ft*.2),K.position.y=Math.sin(Lt*1.5)*.15),z&&R&&(R.children.forEach(Yt=>{const Et=Yt;Et.position.z+=Et.userData.speedZ!==void 0?Et.userData.speedZ*2.2:9.5,Et.rotation.x+=Et.userData.rotSpeedX!==void 0?Et.userData.rotSpeedX*Ft:0,Et.rotation.y+=Et.userData.rotSpeedY!==void 0?Et.userData.rotSpeedY*Ft:0,Et.rotation.z+=Et.userData.rotSpeedZ!==void 0?Et.userData.rotSpeedZ*Ft:0,Et.position.z>n.position.z+15&&(Et.position.z-=400,Et.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI))}),n.position.z-=Ft*15),ve&&De&&!qe&&(De.position.y=1+Math.sin(Lt*1.5)*.4,De.rotation.y+=Ft*.15);for(let Yt=Ge.length-1;Yt>=0;Yt--){const Et=Ge[Yt];Et.age+=Ft,qe&&Et.maxAge>1.5&&(Et.vel.y-=25*Ft),Et.mesh.position.addScaledVector(Et.vel,Ft),Et.mesh.rotation.x+=Et.rotSpeed.x*Ft,Et.mesh.rotation.y+=Et.rotSpeed.y*Ft,Et.mesh.rotation.z+=Et.rotSpeed.z*Ft;const be=Et.age/Et.maxAge;if(be>=1)t.remove(Et.mesh),Et.mesh.geometry&&Et.mesh.geometry.dispose(),Array.isArray(Et.mesh.material)?Et.mesh.material.forEach(ne=>ne.dispose()):Et.mesh.material&&Et.mesh.material.dispose(),Ge.splice(Yt,1);else if(Et.mesh.material){const ne=Et.mesh.material;ne.opacity=1-be}}if(j&&rn){const Yt=rn.getAttribute("position"),Et=Yt.array;for(let be=0;be<Ln;be++)Et[be*3+2]+=sn.value*Ft*15,Et[be*3+2]>n.position.z+50&&(Et[be*3+2]=-1e3+Math.random()*150);Yt.needsUpdate=!0,j.rotation.z+=Ft*.05}c.render()};return Xa(),()=>{window.removeEventListener("wheel",Xt),window.removeEventListener("pointermove",Pt),window.removeEventListener("pointerdown",bt),window.removeEventListener("pointerup",Zt),window.removeEventListener("resize",pa),t.clear(),a.dispose(),c.dispose(),o.removeChild(a.domElement),document.body.contains(Mt)&&document.body.removeChild(Mt);const Ft=document.getElementById("future-overlay");Ft&&document.body.contains(Ft)&&document.body.removeChild(Ft)}}function uD(){const o=fm.useRef(null);return fm.useEffect(()=>{if(!o.current)return;const t=lD(o.current);return()=>{t()}},[]),Qo.jsxs("div",{className:"relative w-full h-full overflow-hidden block",children:[Qo.jsx("div",{id:"app-bg-gradient",className:"absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a0f_0%,#000000_70%)] transition-opacity duration-[2000ms]"}),Qo.jsx("div",{ref:o,className:"absolute inset-0 z-10",style:{touchAction:"none"}}),Qo.jsx("div",{id:"app-vignette",className:"absolute inset-0 z-50 pointer-events-none bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_100%)] transition-opacity duration-[2000ms]"})]})}mb.createRoot(document.getElementById("root")).render(Qo.jsx(fm.StrictMode,{children:Qo.jsx(uD,{})}));
