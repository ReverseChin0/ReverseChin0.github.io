function e1(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function $_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var q_={exports:{}},uu={},K_={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),t1=Symbol.for("react.portal"),n1=Symbol.for("react.fragment"),i1=Symbol.for("react.strict_mode"),r1=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),a1=Symbol.for("react.context"),o1=Symbol.for("react.forward_ref"),l1=Symbol.for("react.suspense"),c1=Symbol.for("react.memo"),u1=Symbol.for("react.lazy"),vm=Symbol.iterator;function f1(n){return n===null||typeof n!="object"?null:(n=vm&&n[vm]||n["@@iterator"],typeof n=="function"?n:null)}var Z_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,J_={};function La(n,e,t){this.props=n,this.context=e,this.refs=J_,this.updater=t||Z_}La.prototype.isReactComponent={};La.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};La.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function e0(){}e0.prototype=La.prototype;function Oh(n,e,t){this.props=n,this.context=e,this.refs=J_,this.updater=t||Z_}var kh=Oh.prototype=new e0;kh.constructor=Oh;Q_(kh,La.prototype);kh.isPureReactComponent=!0;var _m=Array.isArray,t0=Object.prototype.hasOwnProperty,Fh={current:null},n0={key:!0,ref:!0,__self:!0,__source:!0};function i0(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)t0.call(e,i)&&!n0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Qo,type:n,key:s,ref:a,props:r,_owner:Fh.current}}function d1(n,e){return{$$typeof:Qo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Bh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qo}function h1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ym=/\/+/g;function Hu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?h1(""+n.key):e.toString(36)}function dc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Qo:case t1:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Hu(a,0):i,_m(r)?(t="",n!=null&&(t=n.replace(ym,"$&/")+"/"),dc(r,e,t,"",function(c){return c})):r!=null&&(Bh(r)&&(r=d1(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ym,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_m(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Hu(s,o);a+=dc(s,e,t,l,r)}else if(l=f1(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Hu(s,o++),a+=dc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function dl(n,e,t){if(n==null)return n;var i=[],r=0;return dc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function p1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var on={current:null},hc={transition:null},m1={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:hc,ReactCurrentOwner:Fh};je.Children={map:dl,forEach:function(n,e,t){dl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return dl(n,function(){e++}),e},toArray:function(n){return dl(n,function(e){return e})||[]},only:function(n){if(!Bh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};je.Component=La;je.Fragment=n1;je.Profiler=r1;je.PureComponent=Oh;je.StrictMode=i1;je.Suspense=l1;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Q_({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Fh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)t0.call(e,l)&&!n0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Qo,type:n.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(n){return n={$$typeof:a1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:s1,_context:n},n.Consumer=n};je.createElement=i0;je.createFactory=function(n){var e=i0.bind(null,n);return e.type=n,e};je.createRef=function(){return{current:null}};je.forwardRef=function(n){return{$$typeof:o1,render:n}};je.isValidElement=Bh;je.lazy=function(n){return{$$typeof:u1,_payload:{_status:-1,_result:n},_init:p1}};je.memo=function(n,e){return{$$typeof:c1,type:n,compare:e===void 0?null:e}};je.startTransition=function(n){var e=hc.transition;hc.transition={};try{n()}finally{hc.transition=e}};je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};je.useCallback=function(n,e){return on.current.useCallback(n,e)};je.useContext=function(n){return on.current.useContext(n)};je.useDebugValue=function(){};je.useDeferredValue=function(n){return on.current.useDeferredValue(n)};je.useEffect=function(n,e){return on.current.useEffect(n,e)};je.useId=function(){return on.current.useId()};je.useImperativeHandle=function(n,e,t){return on.current.useImperativeHandle(n,e,t)};je.useInsertionEffect=function(n,e){return on.current.useInsertionEffect(n,e)};je.useLayoutEffect=function(n,e){return on.current.useLayoutEffect(n,e)};je.useMemo=function(n,e){return on.current.useMemo(n,e)};je.useReducer=function(n,e,t){return on.current.useReducer(n,e,t)};je.useRef=function(n){return on.current.useRef(n)};je.useState=function(n){return on.current.useState(n)};je.useSyncExternalStore=function(n,e,t){return on.current.useSyncExternalStore(n,e,t)};je.useTransition=function(){return on.current.useTransition()};je.version="18.2.0";K_.exports=je;var oe=K_.exports;const zh=$_(oe),g1=e1({__proto__:null,default:zh},[oe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=oe,_1=Symbol.for("react.element"),y1=Symbol.for("react.fragment"),x1=Object.prototype.hasOwnProperty,S1=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M1={key:!0,ref:!0,__self:!0,__source:!0};function r0(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)x1.call(e,i)&&!M1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_1,type:n,key:s,ref:a,props:r,_owner:S1.current}}uu.Fragment=y1;uu.jsx=r0;uu.jsxs=r0;q_.exports=uu;var C=q_.exports;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Eo.apply(this,arguments)}var ar;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(ar||(ar={}));const xm="popstate";function E1(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return fd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Rc(r)}return T1(e,t,null,n)}function Tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Hh(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function w1(){return Math.random().toString(36).substr(2,8)}function Sm(n,e){return{usr:n.state,key:n.key,idx:e}}function fd(n,e,t,i){return t===void 0&&(t=null),Eo({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ia(e):e,{state:t,key:e&&e.key||i||w1()})}function Rc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ia(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function T1(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=ar.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Eo({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){o=ar.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:h})}function d(m,h){o=ar.Push;let v=fd(y.location,m,h);t&&t(v,m),c=u()+1;let _=Sm(v,c),x=y.createHref(v);try{a.pushState(_,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(x)}s&&l&&l({action:o,location:y.location,delta:1})}function p(m,h){o=ar.Replace;let v=fd(y.location,m,h);t&&t(v,m),c=u();let _=Sm(v,c),x=y.createHref(v);a.replaceState(_,"",x),s&&l&&l({action:o,location:y.location,delta:0})}function g(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Rc(m);return Tt(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let y={get action(){return o},get location(){return n(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(xm,f),l=m,()=>{r.removeEventListener(xm,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return a.go(m)}};return y}var Mm;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Mm||(Mm={}));function A1(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?Ia(e):e,r=Vh(i.pathname||"/",t);if(r==null)return null;let s=s0(n);b1(s);let a=null;for(let o=0;a==null&&o<s.length;++o)a=O1(s[o],B1(r));return a}function s0(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Tt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=fr([i,l.relativePath]),u=t.concat(l);s.children&&s.children.length>0&&(Tt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),s0(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:D1(c,s.index),routesMeta:u})};return n.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of a0(s.path))r(s,a,l)}),e}function a0(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=a0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>n.startsWith("/")&&l===""?"/":l)}function b1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:U1(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const R1=/^:\w+$/,C1=3,P1=2,L1=1,I1=10,N1=-2,Em=n=>n==="*";function D1(n,e){let t=n.split("/"),i=t.length;return t.some(Em)&&(i+=N1),e&&(i+=P1),t.filter(r=>!Em(r)).reduce((r,s)=>r+(R1.test(s)?C1:s===""?L1:I1),i)}function U1(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function O1(n,e){let{routesMeta:t}=n,i={},r="/",s=[];for(let a=0;a<t.length;++a){let o=t[a],l=a===t.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=k1({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let f=o.route;s.push({params:i,pathname:fr([r,u.pathname]),pathnameBase:G1(fr([r,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(r=fr([r,u.pathnameBase]))}return s}function k1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=F1(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,u,f)=>{if(u==="*"){let d=o[f]||"";a=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return c[u]=z1(o[f]||"",u),c},{}),pathname:s,pathnameBase:a,pattern:n}}function F1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Hh(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,o)=>(i.push(o),"/([^\\/]+)"));return n.endsWith("*")?(i.push("*"),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function B1(n){try{return decodeURI(n)}catch(e){return Hh(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function z1(n,e){try{return decodeURIComponent(n)}catch(t){return Hh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function Vh(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function H1(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Ia(n):n;return{pathname:t?t.startsWith("/")?t:V1(t,e):e,search:W1(i),hash:j1(r)}}function V1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Vu(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o0(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function l0(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=Ia(n):(r=Eo({},n),Tt(!r.pathname||!r.pathname.includes("?"),Vu("?","pathname","search",r)),Tt(!r.pathname||!r.pathname.includes("#"),Vu("#","pathname","hash",r)),Tt(!r.search||!r.search.includes("#"),Vu("#","search","hash",r)));let s=n===""||r.pathname==="",a=s?"/":r.pathname,o;if(i||a==null)o=t;else{let f=e.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}o=f>=0?e[f]:"/"}let l=H1(r,o),c=a&&a!=="/"&&a.endsWith("/"),u=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const fr=n=>n.join("/").replace(/\/\/+/g,"/"),G1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),W1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,j1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function X1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const c0=["post","put","patch","delete"];new Set(c0);const Y1=["get",...c0];new Set(Y1);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cc(){return Cc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Cc.apply(this,arguments)}const Gh=oe.createContext(null),u0=oe.createContext(null),ps=oe.createContext(null),fu=oe.createContext(null),ms=oe.createContext({outlet:null,matches:[],isDataRoute:!1}),f0=oe.createContext(null);function $1(n,e){let{relative:t}=e===void 0?{}:e;Jo()||Tt(!1);let{basename:i,navigator:r}=oe.useContext(ps),{hash:s,pathname:a,search:o}=Wh(n,{relative:t}),l=a;return i!=="/"&&(l=a==="/"?i:fr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Jo(){return oe.useContext(fu)!=null}function el(){return Jo()||Tt(!1),oe.useContext(fu).location}function d0(n){oe.useContext(ps).static||oe.useLayoutEffect(n)}function q1(){let{isDataRoute:n}=oe.useContext(ms);return n?lM():K1()}function K1(){Jo()||Tt(!1);let n=oe.useContext(Gh),{basename:e,navigator:t}=oe.useContext(ps),{matches:i}=oe.useContext(ms),{pathname:r}=el(),s=JSON.stringify(o0(i).map(l=>l.pathnameBase)),a=oe.useRef(!1);return d0(()=>{a.current=!0}),oe.useCallback(function(l,c){if(c===void 0&&(c={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let u=l0(l,JSON.parse(s),r,c.relative==="path");n==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:fr([e,u.pathname])),(c.replace?t.replace:t.push)(u,c.state,c)},[e,t,s,r,n])}function Wh(n,e){let{relative:t}=e===void 0?{}:e,{matches:i}=oe.useContext(ms),{pathname:r}=el(),s=JSON.stringify(o0(i).map(a=>a.pathnameBase));return oe.useMemo(()=>l0(n,JSON.parse(s),r,t==="path"),[n,s,r,t])}function Z1(n,e){return Q1(n,e)}function Q1(n,e,t){Jo()||Tt(!1);let{navigator:i}=oe.useContext(ps),{matches:r}=oe.useContext(ms),s=r[r.length-1],a=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let l=el(),c;if(e){var u;let y=typeof e=="string"?Ia(e):e;o==="/"||(u=y.pathname)!=null&&u.startsWith(o)||Tt(!1),c=y}else c=l;let f=c.pathname||"/",d=o==="/"?f:f.slice(o.length)||"/",p=A1(n,{pathname:d}),g=iM(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:fr([o,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?o:fr([o,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),r,t);return e&&g?oe.createElement(fu.Provider,{value:{location:Cc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ar.Pop}},g):g}function J1(){let n=oM(),e=X1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),t?oe.createElement("pre",{style:r},t):null,s)}const eM=oe.createElement(J1,null);class tM extends oe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?oe.createElement(ms.Provider,{value:this.props.routeContext},oe.createElement(f0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nM(n){let{routeContext:e,match:t,children:i}=n,r=oe.useContext(Gh);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),oe.createElement(ms.Provider,{value:e},i)}function iM(n,e,t){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n==null){var r;if((r=t)!=null&&r.errors)n=t.matches;else return null}let s=n,a=(i=t)==null?void 0:i.errors;if(a!=null){let o=s.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));o>=0||Tt(!1),s=s.slice(0,Math.min(s.length,o+1))}return s.reduceRight((o,l,c)=>{let u=l.route.id?a==null?void 0:a[l.route.id]:null,f=null;t&&(f=l.route.errorElement||eM);let d=e.concat(s.slice(0,c+1)),p=()=>{let g;return u?g=f:l.route.Component?g=oe.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=o,oe.createElement(nM,{match:l,routeContext:{outlet:o,matches:d,isDataRoute:t!=null},children:g})};return t&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?oe.createElement(tM,{location:t.location,revalidation:t.revalidation,component:f,error:u,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var dd;(function(n){n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate"})(dd||(dd={}));var wo;(function(n){n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId"})(wo||(wo={}));function rM(n){let e=oe.useContext(Gh);return e||Tt(!1),e}function sM(n){let e=oe.useContext(u0);return e||Tt(!1),e}function aM(n){let e=oe.useContext(ms);return e||Tt(!1),e}function h0(n){let e=aM(),t=e.matches[e.matches.length-1];return t.route.id||Tt(!1),t.route.id}function oM(){var n;let e=oe.useContext(f0),t=sM(wo.UseRouteError),i=h0(wo.UseRouteError);return e||((n=t.errors)==null?void 0:n[i])}function lM(){let{router:n}=rM(dd.UseNavigateStable),e=h0(wo.UseNavigateStable),t=oe.useRef(!1);return d0(()=>{t.current=!0}),oe.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,Cc({fromRouteId:e},s)))},[n,e])}function hd(n){Tt(!1)}function cM(n){let{basename:e="/",children:t=null,location:i,navigationType:r=ar.Pop,navigator:s,static:a=!1}=n;Jo()&&Tt(!1);let o=e.replace(/^\/*/,"/"),l=oe.useMemo(()=>({basename:o,navigator:s,static:a}),[o,s,a]);typeof i=="string"&&(i=Ia(i));let{pathname:c="/",search:u="",hash:f="",state:d=null,key:p="default"}=i,g=oe.useMemo(()=>{let y=Vh(c,o);return y==null?null:{location:{pathname:y,search:u,hash:f,state:d,key:p},navigationType:r}},[o,c,u,f,d,p,r]);return g==null?null:oe.createElement(ps.Provider,{value:l},oe.createElement(fu.Provider,{children:t,value:g}))}function uM(n){let{children:e,location:t}=n;return Z1(pd(e),t)}var wm;(function(n){n[n.pending=0]="pending",n[n.success=1]="success",n[n.error=2]="error"})(wm||(wm={}));new Promise(()=>{});function pd(n,e){e===void 0&&(e=[]);let t=[];return oe.Children.forEach(n,(i,r)=>{if(!oe.isValidElement(i))return;let s=[...e,r];if(i.type===oe.Fragment){t.push.apply(t,pd(i.props.children,s));return}i.type!==hd&&Tt(!1),!i.props.index||!i.props.children||Tt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=pd(i.props.children,s)),t.push(a)}),t}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pc(){return Pc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Pc.apply(this,arguments)}function p0(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function fM(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function dM(n,e){return n.button===0&&(!e||e==="_self")&&!fM(n)}const hM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],pM=["aria-current","caseSensitive","className","end","style","to","children"],mM="startTransition",Tm=g1[mM];function gM(n){let{basename:e,children:t,future:i,window:r}=n,s=oe.useRef();s.current==null&&(s.current=E1({window:r,v5Compat:!0}));let a=s.current,[o,l]=oe.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},u=oe.useCallback(f=>{c&&Tm?Tm(()=>l(f)):l(f)},[l,c]);return oe.useLayoutEffect(()=>a.listen(u),[a,u]),oe.createElement(cM,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a})}const vM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_M=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yM=oe.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:u}=e,f=p0(e,hM),{basename:d}=oe.useContext(ps),p,g=!1;if(typeof c=="string"&&_M.test(c)&&(p=c,vM))try{let v=new URL(window.location.href),_=c.startsWith("//")?new URL(v.protocol+c):new URL(c),x=Vh(_.pathname,d);_.origin===v.origin&&x!=null?c=x+_.search+_.hash:g=!0}catch{}let y=$1(c,{relative:r}),m=SM(c,{replace:a,state:o,target:l,preventScrollReset:u,relative:r});function h(v){i&&i(v),v.defaultPrevented||m(v)}return oe.createElement("a",Pc({},f,{href:p||y,onClick:g||s?i:h,ref:t,target:l}))}),xM=oe.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,children:c}=e,u=p0(e,pM),f=Wh(l,{relative:u.relative}),d=el(),p=oe.useContext(u0),{navigator:g}=oe.useContext(ps),y=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,m=d.pathname,h=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;r||(m=m.toLowerCase(),h=h?h.toLowerCase():null,y=y.toLowerCase());let v=m===y||!a&&m.startsWith(y)&&m.charAt(y.length)==="/",_=h!=null&&(h===y||!a&&h.startsWith(y)&&h.charAt(y.length)==="/"),x=v?i:void 0,S;typeof s=="function"?S=s({isActive:v,isPending:_}):S=[s,v?"active":null,_?"pending":null].filter(Boolean).join(" ");let b=typeof o=="function"?o({isActive:v,isPending:_}):o;return oe.createElement(yM,Pc({},u,{"aria-current":x,className:S,ref:t,style:b,to:l}),typeof c=="function"?c({isActive:v,isPending:_}):c)});var Am;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher"})(Am||(Am={}));var bm;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(bm||(bm={}));function SM(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:a}=e===void 0?{}:e,o=q1(),l=el(),c=Wh(n,{relative:a});return oe.useCallback(u=>{if(dM(u,t)){u.preventDefault();let f=i!==void 0?i:Rc(l)===Rc(c);o(n,{replace:f,state:r,preventScrollReset:s,relative:a})}},[l,o,c,i,r,t,n,s,a])}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="154",MM=0,Rm=1,EM=2,m0=1,wM=2,Ei=3,Di=0,hn=1,li=2,dr=0,ra=1,Cm=2,Pm=3,Lm=4,TM=5,Bs=100,AM=101,bM=102,Im=103,Nm=104,RM=200,CM=201,PM=202,LM=203,g0=204,v0=205,IM=206,NM=207,DM=208,UM=209,OM=210,kM=0,FM=1,BM=2,md=3,zM=4,HM=5,VM=6,GM=7,Xh=0,WM=1,jM=2,Li=0,XM=1,YM=2,$M=3,_0=4,qM=5,y0=300,pa=301,ma=302,gd=303,vd=304,du=306,ga=1e3,In=1001,Lc=1002,Ut=1003,_d=1004,pc=1005,un=1006,x0=1007,is=1008,hr=1009,KM=1010,ZM=1011,Yh=1012,S0=1013,or=1014,Ai=1015,To=1016,M0=1017,E0=1018,Zr=1020,QM=1021,Nn=1023,JM=1024,eE=1025,Qr=1026,va=1027,tE=1028,w0=1029,nE=1030,T0=1031,A0=1033,Gu=33776,Wu=33777,ju=33778,Xu=33779,Dm=35840,Um=35841,Om=35842,km=35843,iE=36196,Fm=37492,Bm=37496,zm=37808,Hm=37809,Vm=37810,Gm=37811,Wm=37812,jm=37813,Xm=37814,Ym=37815,$m=37816,qm=37817,Km=37818,Zm=37819,Qm=37820,Jm=37821,Yu=36492,rE=36283,eg=36284,tg=36285,ng=36286,b0=2200,sE=2201,aE=2202,Ao=2300,_a=2301,$u=2302,zs=2400,Hs=2401,Ic=2402,$h=2500,oE=2501,lE=0,R0=1,yd=2,C0=3e3,Jr=3001,cE=3200,uE=3201,qh=0,fE=1,es="",Te="srgb",ei="srgb-linear",P0="display-p3",qu=7680,dE=519,hE=512,pE=513,mE=514,gE=515,vE=516,_E=517,yE=518,xE=519,xd=35044,ig="300 es",Sd=1035,bi=2e3,Nc=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rg=1234567;const lo=Math.PI/180,ya=180/Math.PI;function qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function Kh(n,e){return(n%e+e)%e}function SE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ME(n,e,t){return n!==e?(t-n)/(e-n):0}function co(n,e,t){return(1-t)*n+t*e}function EE(n,e,t,i){return co(n,e,1-Math.exp(-t*i))}function wE(n,e=1){return e-Math.abs(Kh(n,e*2)-e)}function TE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function AE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function RE(n,e){return n+Math.random()*(e-n)}function CE(n){return n*(.5-Math.random())}function PE(n){n!==void 0&&(rg=n);let e=rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LE(n){return n*lo}function IE(n){return n*ya}function Md(n){return(n&n-1)===0&&n!==0}function L0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function NE(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const DE={DEG2RAD:lo,RAD2DEG:ya,generateUUID:qn,clamp:Kt,euclideanModulo:Kh,mapLinear:SE,inverseLerp:ME,lerp:co,damp:EE,pingpong:wE,smoothstep:TE,smootherstep:AE,randInt:bE,randFloat:RE,randFloatSpread:CE,seededRandom:PE,degToRad:LE,radToDeg:IE,isPowerOfTwo:Md,ceilPowerOfTwo:L0,floorPowerOfTwo:Dc,setQuaternionFromProperEuler:NE,normalize:tt,denormalize:Ri};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,i,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],v=r[1],_=r[4],x=r[7],S=r[2],b=r[5],T=r[8];return s[0]=a*y+o*v+l*S,s[3]=a*m+o*_+l*b,s[6]=a*h+o*x+l*T,s[1]=c*y+u*v+f*S,s[4]=c*m+u*_+f*b,s[7]=c*h+u*x+f*T,s[2]=d*y+p*v+g*S,s[5]=d*m+p*_+g*b,s[8]=d*h+p*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new Fe;function I0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const sg={};function uo(n){n in sg||(sg[n]=!0,console.warn(n))}function sa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const UE=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),OE=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function kE(n){return n.convertSRGBToLinear().applyMatrix3(OE)}function FE(n){return n.applyMatrix3(UE).convertLinearToSRGB()}const BE={[ei]:n=>n,[Te]:n=>n.convertSRGBToLinear(),[P0]:kE},zE={[ei]:n=>n,[Te]:n=>n.convertLinearToSRGB(),[P0]:FE},Bn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return ei},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=BE[e],r=zE[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let xs;class N0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=bo("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=sa(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sa(t[i]/255)*255):t[i]=sa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class D0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qu(r[a].image)):s.push(Qu(r[a]))}else s=Qu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?N0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VE=0;class zt extends gs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=In,r=In,s=un,a=is,o=Nn,l=hr,c=zt.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=qn(),this.name="",this.source=new D0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Jr?Te:es),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ga:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ga:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Jr:C0}set encoding(e){uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jr?Te:es}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=y0;zt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,S=(h+1)/2,b=(u+d)/4,T=(f+y)/4,L=(g+m)/4;return _>x&&_>S?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=T/i):x>S?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=L/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=T/s,r=L/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rs extends gs{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Jr?Te:es),this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:un,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new D0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class U0 extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GE extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(f!==y||l!==d||c!==p||u!==g){let m=1-o;const h=l*d+c*p+u*g+f*y,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const S=Math.sqrt(_),b=Math.atan2(S,h*v);m=Math.sin(m*b)/S,o=Math.sin(o*b)/S}const x=o*v;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,f=f*m+y*x,m===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-o*p,e[t+2]=c*g+u*p+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ag.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new N,ag=new Kn;class Vi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox),Ss.applyMatrix4(e.matrixWorld),this.union(Ss);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)vi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else r.boundingBox===null&&r.computeBoundingBox(),Ss.copy(r.boundingBox),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),hl.subVectors(this.max,za),Ms.subVectors(e.a,za),Es.subVectors(e.b,za),ws.subVectors(e.c,za),ji.subVectors(Es,Ms),Xi.subVectors(ws,Es),Nr.subVectors(Ms,ws);let t=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-Nr.z,Nr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,Nr.z,0,-Nr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-Nr.y,Nr.x,0];return!ef(t,Ms,Es,ws,hl)||(t=[1,0,0,0,1,0,0,0,1],!ef(t,Ms,Es,ws,hl))?!1:(pl.crossVectors(ji,Xi),t=[pl.x,pl.y,pl.z],ef(t,Ms,Es,ws,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new N,new N,new N,new N,new N,new N,new N,new N],vi=new N,Ss=new Vi,Ms=new N,Es=new N,ws=new N,ji=new N,Xi=new N,Nr=new N,za=new N,hl=new N,pl=new N,Dr=new N;function ef(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Dr.fromArray(n,s);const o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),u=i.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const WE=new Vi,Ha=new N,tf=new N;class hi{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):WE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(tf)),this.expandByPoint(Ha.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new N,nf=new N,ml=new N,Yi=new N,rf=new N,gl=new N,sf=new N;class hu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nf.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(nf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ml),o=Yi.dot(this.direction),l=-Yi.dot(ml),c=Yi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const y=1/u;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nf).addScaledVector(ml,d),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,s){rf.subVectors(t,e),gl.subVectors(i,e),sf.crossVectors(rf,gl);let a=this.direction.dot(sf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const l=o*this.direction.dot(gl.crossVectors(Yi,gl));if(l<0)return null;const c=o*this.direction.dot(rf.cross(Yi));if(c<0||l+c>a)return null;const u=-o*Yi.dot(sf);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,i,r,s,a,o,l,c,u,f,d,p,g,y,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,p,g,y,m)}set(e,t,i,r,s,a,o,l,c,u,f,d,p,g,y,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,g=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,y=c*f;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,y=c*f;t[0]=d-y*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,g=o*u,y=o*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*f,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-y*f}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+y,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jE,e,XE)}lookAt(e,t,i){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),$i.crossVectors(i,_n),$i.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),$i.crossVectors(i,_n)),$i.normalize(),vl.crossVectors(_n,$i),r[0]=$i.x,r[4]=vl.x,r[8]=_n.x,r[1]=$i.y,r[5]=vl.y,r[9]=_n.y,r[2]=$i.z,r[6]=vl.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],v=i[3],_=i[7],x=i[11],S=i[15],b=r[0],T=r[4],L=r[8],M=r[12],A=r[1],Z=r[5],J=r[9],B=r[13],W=r[2],O=r[6],Q=r[10],Y=r[14],I=r[3],G=r[7],H=r[11],U=r[15];return s[0]=a*b+o*A+l*W+c*I,s[4]=a*T+o*Z+l*O+c*G,s[8]=a*L+o*J+l*Q+c*H,s[12]=a*M+o*B+l*Y+c*U,s[1]=u*b+f*A+d*W+p*I,s[5]=u*T+f*Z+d*O+p*G,s[9]=u*L+f*J+d*Q+p*H,s[13]=u*M+f*B+d*Y+p*U,s[2]=g*b+y*A+m*W+h*I,s[6]=g*T+y*Z+m*O+h*G,s[10]=g*L+y*J+m*Q+h*H,s[14]=g*M+y*B+m*Y+h*U,s[3]=v*b+_*A+x*W+S*I,s[7]=v*T+_*Z+x*O+S*G,s[11]=v*L+_*J+x*Q+S*H,s[15]=v*M+_*B+x*Y+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+y*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],v=f*m*c-y*d*c+y*l*p-o*m*p-f*l*h+o*d*h,_=g*d*c-u*m*c-g*l*p+a*m*p+u*l*h-a*d*h,x=u*y*c-g*f*c+g*o*p-a*y*p-u*o*h+a*f*h,S=g*f*l-u*y*l-g*o*d+a*y*d+u*o*m-a*f*m,b=t*v+i*_+r*x+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*T,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*h+i*l*h)*T,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*T,e[4]=_*T,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*T,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*h-t*l*h)*T,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*T,e[8]=x*T,e[9]=(g*f*s-u*y*s-g*i*p+t*y*p+u*i*h-t*f*h)*T,e[10]=(a*y*s-g*o*s+g*i*c-t*y*c-a*i*h+t*o*h)*T,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*T,e[12]=S*T,e[13]=(u*y*r-g*f*r+g*i*d-t*y*d-u*i*m+t*f*m)*T,e[14]=(g*o*r-a*y*r-g*i*l+t*y*l+a*i*m-t*o*m)*T,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,g=s*f,y=a*u,m=a*f,h=o*f,v=l*c,_=l*u,x=l*f,S=i.x,b=i.y,T=i.z;return r[0]=(1-(y+h))*S,r[1]=(p+x)*S,r[2]=(g-_)*S,r[3]=0,r[4]=(p-x)*b,r[5]=(1-(d+h))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(g+_)*T,r[9]=(m-v)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ts.set(r[0],r[1],r[2]).length();const a=Ts.set(r[4],r[5],r[6]).length(),o=Ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,u=1/a,f=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,t.setFromRotationMatrix(zn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=bi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(o===bi)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Nc)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=bi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,p=(i+r)*u;let g,y;if(o===bi)g=(a+s)*f,y=-2*f;else if(o===Nc)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ts=new N,zn=new Be,jE=new N(0,0,0),XE=new N(1,1,1),$i=new N,vl=new N,_n=new N,og=new Be,lg=new Kn;class pu{constructor(e=0,t=0,i=0,r=pu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pu.DEFAULT_ORDER="XYZ";let O0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},YE=0;const cg=new N,As=new Kn,yi=new Be,_l=new N,Va=new N,$E=new N,qE=new Kn,ug=new N(1,0,0),fg=new N(0,1,0),dg=new N(0,0,1),KE={type:"added"},hg={type:"removed"};class ht extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new N,t=new pu,i=new Kn,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new Fe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new O0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,t){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_l.copy(e):_l.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Va,_l,this.up):yi.lookAt(_l,Va,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),As.setFromRotationMatrix(yi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(KE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,$E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,qE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DEFAULT_UP=new N(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new N,xi=new N,af=new N,Si=new N,bs=new N,Rs=new N,pg=new N,of=new N,lf=new N,cf=new N;let yl=!1;class Xn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Hn.subVectors(e,t),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Hn.subVectors(r,t),xi.subVectors(i,t),af.subVectors(e,t);const a=Hn.dot(Hn),o=Hn.dot(xi),l=Hn.dot(af),c=xi.dot(xi),u=xi.dot(af),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si),Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,i,r,s,a,o,l){return yl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yl=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Si),l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l}static isFrontFacing(e,t,i,r){return Hn.subVectors(i,t),xi.subVectors(e,t),Hn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Hn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return yl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yl=!0),Xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;bs.subVectors(r,i),Rs.subVectors(s,i),of.subVectors(e,i);const l=bs.dot(of),c=Rs.dot(of);if(l<=0&&c<=0)return t.copy(i);lf.subVectors(e,r);const u=bs.dot(lf),f=Rs.dot(lf);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(bs,a);cf.subVectors(e,s);const p=bs.dot(cf),g=Rs.dot(cf);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Rs,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return pg.subVectors(s,r),o=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(pg,o);const h=1/(m+y+d);return a=y*h,o=d*h,t.copy(i).addScaledVector(bs,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ZE=0;class Zn extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=ra,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=g0,this.blendDst=v0,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=md,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qu,this.stencilZFail=qu,this.stencilZPass=qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},xl={h:0,s:0,l:0};function uf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Te){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Bn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Bn.workingColorSpace){if(e=Kh(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=uf(a,s,e+1/3),this.g=uf(a,s,e),this.b=uf(a,s,e-1/3)}return Bn.toWorkingColorSpace(this,r),this}setStyle(e,t=Te){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Te){const i=k0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Zu(e.r),this.g=Zu(e.g),this.b=Zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Te){return Bn.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Kt(Yt.r*255,0,255))*65536+Math.round(Kt(Yt.g*255,0,255))*256+Math.round(Kt(Yt.b*255,0,255))}getHexString(e=Te){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bn.workingColorSpace){Bn.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Bn.workingColorSpace){return Bn.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Te){Bn.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Te?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),Vn.h+=e,Vn.s+=t,Vn.l+=i,this.setHSL(Vn.h,Vn.s,Vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(xl);const i=co(Vn.h,xl.h,t),r=co(Vn.s,xl.s,t),s=co(Vn.l,xl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Re;Re.NAMES=k0;class Gr extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,Sl=new We;class Ht{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xd,this.updateRange={offset:0,count:-1},this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class F0 extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class B0 extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ii extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}}let QE=0;const Rn=new Be,ff=new ht,Cs=new N,yn=new Vi,Ga=new Vi,Nt=new N;class ni extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?B0:F0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(yn.min,Ga.min),yn.expandByPoint(Nt),Nt.addVectors(yn.max,Ga.max),yn.expandByPoint(Nt)):(yn.expandByPoint(Ga.min),yn.expandByPoint(Ga.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Nt.add(Cs)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new N,u[A]=new N;const f=new N,d=new N,p=new N,g=new We,y=new We,m=new We,h=new N,v=new N;function _(A,Z,J){f.fromArray(r,A*3),d.fromArray(r,Z*3),p.fromArray(r,J*3),g.fromArray(a,A*2),y.fromArray(a,Z*2),m.fromArray(a,J*2),d.sub(f),p.sub(f),y.sub(g),m.sub(g);const B=1/(y.x*m.y-m.x*y.y);isFinite(B)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(B),v.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(B),c[A].add(h),c[Z].add(h),c[J].add(h),u[A].add(v),u[Z].add(v),u[J].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let A=0,Z=x.length;A<Z;++A){const J=x[A],B=J.start,W=J.count;for(let O=B,Q=B+W;O<Q;O+=3)_(i[O+0],i[O+1],i[O+2])}const S=new N,b=new N,T=new N,L=new N;function M(A){T.fromArray(s,A*3),L.copy(T);const Z=c[A];S.copy(Z),S.sub(T.multiplyScalar(T.dot(Z))).normalize(),b.crossVectors(L,Z);const B=b.dot(u[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=B}for(let A=0,Z=x.length;A<Z;++A){const J=x[A],B=J.start,W=J.count;for(let O=B,Q=B+W;O<Q;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Ht(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mg=new Be,Ur=new hu,Ml=new hi,gg=new N,Ps=new N,Ls=new N,Is=new N,df=new N,El=new N,wl=new We,Tl=new We,Al=new We,vg=new N,_g=new N,yg=new N,bl=new N,Rl=new N;class Sn extends ht{constructor(e=new ni,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){El.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(df.fromBufferAttribute(f,e),a?El.addScaledVector(df,u):El.addScaledVector(df.sub(t),u))}t.add(El)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(Ml.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Ml,gg)===null||Ur.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(mg),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,S=_;x<S;x+=3){const b=o.getX(x),T=o.getX(x+1),L=o.getX(x+2);r=Cl(this,h,e,i,c,u,f,b,T,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);r=Cl(this,a,e,i,c,u,f,v,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,S=_;x<S;x+=3){const b=x,T=x+1,L=x+2;r=Cl(this,h,e,i,c,u,f,b,T,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=m,_=m+1,x=m+2;r=Cl(this,a,e,i,c,u,f,v,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function JE(n,e,t,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Di,o),l===null)return null;Rl.copy(o),Rl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Rl);return c<t.near||c>t.far?null:{distance:c,point:Rl.clone(),object:n}}function Cl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ps),n.getVertexPosition(l,Ls),n.getVertexPosition(c,Is);const u=JE(n,e,t,i,Ps,Ls,Is,bl);if(u){r&&(wl.fromBufferAttribute(r,o),Tl.fromBufferAttribute(r,l),Al.fromBufferAttribute(r,c),u.uv=Xn.getInterpolation(bl,Ps,Ls,Is,wl,Tl,Al,new We)),s&&(wl.fromBufferAttribute(s,o),Tl.fromBufferAttribute(s,l),Al.fromBufferAttribute(s,c),u.uv1=Xn.getInterpolation(bl,Ps,Ls,Is,wl,Tl,Al,new We),u.uv2=u.uv1),a&&(vg.fromBufferAttribute(a,o),_g.fromBufferAttribute(a,l),yg.fromBufferAttribute(a,c),u.normal=Xn.getInterpolation(bl,Ps,Ls,Is,vg,_g,yg,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Xn.getNormal(Ps,Ls,Is,f.normal),u.face=f}return u}class tl extends ni{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(f,2));function g(y,m,h,v,_,x,S,b,T,L,M){const A=x/T,Z=S/L,J=x/2,B=S/2,W=b/2,O=T+1,Q=L+1;let Y=0,I=0;const G=new N;for(let H=0;H<Q;H++){const U=H*Z-B;for(let z=0;z<O;z++){const ae=z*A-J;G[y]=ae*v,G[m]=U*_,G[h]=W,c.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[h]=b>0?1:-1,u.push(G.x,G.y,G.z),f.push(z/T),f.push(1-H/L),Y+=1}}for(let H=0;H<L;H++)for(let U=0;U<T;U++){const z=d+U+O*H,ae=d+U+O*(H+1),re=d+(U+1)+O*(H+1),de=d+(U+1)+O*H;l.push(z,ae,de),l.push(ae,re,de),I+=6}o.addGroup(p,I,M),p+=I,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=xa(n[t]);for(const r in i)e[r]=i[r]}return e}function ew(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function z0(n){return n.getRenderTarget()===null?n.outputColorSpace:ei}const tw={clone:xa,merge:nn};var nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nw,this.fragmentShader=iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=ew(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class H0 extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends H0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Ds=1;class rw extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new sn(Ns,Ds,e,t);r.layers=this.layers,this.add(r);const s=new sn(Ns,Ds,e,t);s.layers=this.layers,this.add(s);const a=new sn(Ns,Ds,e,t);a.layers=this.layers,this.add(a);const o=new sn(Ns,Ds,e,t);o.layers=this.layers,this.add(o);const l=new sn(Ns,Ds,e,t);l.layers=this.layers,this.add(l);const c=new sn(Ns,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Li,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class V0 extends zt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pa,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sw extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jr?Te:es),this.texture=new V0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tl(5,5,5),s=new ss({name:"CubemapFromEquirect",uniforms:xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:dr});s.uniforms.tEquirect.value=t;const a=new Sn(r,s),o=t.minFilter;return t.minFilter===is&&(t.minFilter=un),new rw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const hf=new N,aw=new N,ow=new Fe;class Fr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=hf.subVectors(i,t).cross(aw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ow.getNormalMatrix(e),r=this.coplanarPoint(hf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new hi,Pl=new N;class Zh{constructor(e=new Fr,t=new Fr,i=new Fr,r=new Fr,s=new Fr,a=new Fr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],h=r[12],v=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-h).normalize(),i[1].setComponents(l+s,d+c,m+p,x+h).normalize(),i[2].setComponents(l+a,d+u,m+g,x+v).normalize(),i[3].setComponents(l-a,d-u,m-g,x-v).normalize(),i[4].setComponents(l-o,d-f,m-y,x-_).normalize(),t===bi)i[5].setComponents(l+o,d+f,m+y,x+_).normalize();else if(t===Nc)i[5].setComponents(o,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Pl.x=r.normal.x>0?e.max.x:e.min.x,Pl.y=r.normal.y>0?e.max.y:e.min.y,Pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function lw(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class mu extends ni{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,p=[],g=[],y=[],m=[];for(let h=0;h<u;h++){const v=h*d-a;for(let _=0;_<c;_++){const x=_*f-s;g.push(x,-v,0),y.push(0,0,1),m.push(_/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const _=v+c*h,x=v+c*(h+1),S=v+1+c*(h+1),b=v+1+c*h;p.push(_,x,b),p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new Ii(g,3)),this.setAttribute("normal",new Ii(y,3)),this.setAttribute("uv",new Ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var cw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uw=`#ifdef USE_ALPHAHASH
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
#endif`,fw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_w=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xw=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Sw=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pw=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Lw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Iw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ow=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hw=`#ifdef USE_ENVMAP
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
#endif`,Vw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gw=`#ifdef USE_ENVMAP
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
#endif`,Ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$w=`#ifdef USE_GRADIENTMAP
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
}`,qw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,eT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,tT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,aT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vT=`#if defined( USE_POINTS_UV )
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
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,MT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ET=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,TT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,jT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,KT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tA=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,hA=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,mA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xA=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,SA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,MA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,EA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,TA=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,AA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,CA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,PA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,LA=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,NA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,DA=`uniform float size;
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
}`,UA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,OA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,kA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,FA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,BA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:cw,alphahash_pars_fragment:uw,alphamap_fragment:fw,alphamap_pars_fragment:dw,alphatest_fragment:hw,alphatest_pars_fragment:pw,aomap_fragment:mw,aomap_pars_fragment:gw,begin_vertex:vw,beginnormal_vertex:_w,bsdfs:yw,iridescence_fragment:xw,bumpmap_pars_fragment:Sw,clipping_planes_fragment:Mw,clipping_planes_pars_fragment:Ew,clipping_planes_pars_vertex:ww,clipping_planes_vertex:Tw,color_fragment:Aw,color_pars_fragment:bw,color_pars_vertex:Rw,color_vertex:Cw,common:Pw,cube_uv_reflection_fragment:Lw,defaultnormal_vertex:Iw,displacementmap_pars_vertex:Nw,displacementmap_vertex:Dw,emissivemap_fragment:Uw,emissivemap_pars_fragment:Ow,colorspace_fragment:kw,colorspace_pars_fragment:Fw,envmap_fragment:Bw,envmap_common_pars_fragment:zw,envmap_pars_fragment:Hw,envmap_pars_vertex:Vw,envmap_physical_pars_fragment:eT,envmap_vertex:Gw,fog_vertex:Ww,fog_pars_vertex:jw,fog_fragment:Xw,fog_pars_fragment:Yw,gradientmap_pars_fragment:$w,lightmap_fragment:qw,lightmap_pars_fragment:Kw,lights_lambert_fragment:Zw,lights_lambert_pars_fragment:Qw,lights_pars_begin:Jw,lights_toon_fragment:tT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:aT,lights_fragment_begin:oT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:dT,logdepthbuf_vertex:hT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:vT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:yT,morphcolor_vertex:xT,morphnormal_vertex:ST,morphtarget_pars_vertex:MT,morphtarget_vertex:ET,normal_fragment_begin:wT,normal_fragment_maps:TT,normal_pars_fragment:AT,normal_pars_vertex:bT,normal_vertex:RT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:NT,opaque_fragment:DT,packing:UT,premultiplied_alpha_fragment:OT,project_vertex:kT,dithering_fragment:FT,dithering_pars_fragment:BT,roughnessmap_fragment:zT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:VT,shadowmap_pars_vertex:GT,shadowmap_vertex:WT,shadowmask_pars_fragment:jT,skinbase_vertex:XT,skinning_pars_vertex:YT,skinning_vertex:$T,skinnormal_vertex:qT,specularmap_fragment:KT,specularmap_pars_fragment:ZT,tonemapping_fragment:QT,tonemapping_pars_fragment:JT,transmission_fragment:eA,transmission_pars_fragment:tA,uv_pars_fragment:nA,uv_pars_vertex:iA,uv_vertex:rA,worldpos_vertex:sA,background_vert:aA,background_frag:oA,backgroundCube_vert:lA,backgroundCube_frag:cA,cube_vert:uA,cube_frag:fA,depth_vert:dA,depth_frag:hA,distanceRGBA_vert:pA,distanceRGBA_frag:mA,equirect_vert:gA,equirect_frag:vA,linedashed_vert:_A,linedashed_frag:yA,meshbasic_vert:xA,meshbasic_frag:SA,meshlambert_vert:MA,meshlambert_frag:EA,meshmatcap_vert:wA,meshmatcap_frag:TA,meshnormal_vert:AA,meshnormal_frag:bA,meshphong_vert:RA,meshphong_frag:CA,meshphysical_vert:PA,meshphysical_frag:LA,meshtoon_vert:IA,meshtoon_frag:NA,points_vert:DA,points_frag:UA,shadow_vert:OA,shadow_frag:kA,sprite_vert:FA,sprite_frag:BA},se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},oi={basic:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:nn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:nn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:nn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:nn([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:nn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:nn([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:nn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:nn([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:nn([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:nn([se.lights,se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};oi.physical={uniforms:nn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ll={r:0,b:0,g:0};function zA(n,e,t,i,r,s,a){const o=new Re(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(m,h){let v=!1,_=h.isScene===!0?h.background:null;switch(_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?y(o,l):_&&_.isColor&&(y(_,1),v=!0),n.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),v=!0;break}(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===du)?(u===void 0&&(u=new Sn(new tl(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:xa(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=_.colorSpace!==Te,(f!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Sn(new mu(2,2),new ss({name:"BackgroundMaterial",uniforms:xa(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=_.colorSpace!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,h){m.getRGB(Ll,z0(n)),i.buffers.color.setClear(Ll.r,Ll.g,Ll.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:g}}function HA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(W,O,Q,Y,I){let G=!1;if(a){const H=y(Y,Q,O);c!==H&&(c=H,p(c.object)),G=h(W,Y,Q,I),G&&v(W,Y,Q,I)}else{const H=O.wireframe===!0;(c.geometry!==Y.id||c.program!==Q.id||c.wireframe!==H)&&(c.geometry=Y.id,c.program=Q.id,c.wireframe=H,G=!0)}I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,L(W,O,Q,Y),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(W){return i.isWebGL2?n.bindVertexArray(W):s.bindVertexArrayOES(W)}function g(W){return i.isWebGL2?n.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function y(W,O,Q){const Y=Q.wireframe===!0;let I=o[W.id];I===void 0&&(I={},o[W.id]=I);let G=I[O.id];G===void 0&&(G={},I[O.id]=G);let H=G[Y];return H===void 0&&(H=m(d()),G[Y]=H),H}function m(W){const O=[],Q=[],Y=[];for(let I=0;I<r;I++)O[I]=0,Q[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Q,attributeDivisors:Y,object:W,attributes:{},index:null}}function h(W,O,Q,Y){const I=c.attributes,G=O.attributes;let H=0;const U=Q.getAttributes();for(const z in U)if(U[z].location>=0){const re=I[z];let de=G[z];if(de===void 0&&(z==="instanceMatrix"&&W.instanceMatrix&&(de=W.instanceMatrix),z==="instanceColor"&&W.instanceColor&&(de=W.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;H++}return c.attributesNum!==H||c.index!==Y}function v(W,O,Q,Y){const I={},G=O.attributes;let H=0;const U=Q.getAttributes();for(const z in U)if(U[z].location>=0){let re=G[z];re===void 0&&(z==="instanceMatrix"&&W.instanceMatrix&&(re=W.instanceMatrix),z==="instanceColor"&&W.instanceColor&&(re=W.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),I[z]=de,H++}c.attributes=I,c.attributesNum=H,c.index=Y}function _(){const W=c.newAttributes;for(let O=0,Q=W.length;O<Q;O++)W[O]=0}function x(W){S(W,0)}function S(W,O){const Q=c.newAttributes,Y=c.enabledAttributes,I=c.attributeDivisors;Q[W]=1,Y[W]===0&&(n.enableVertexAttribArray(W),Y[W]=1),I[W]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,O),I[W]=O)}function b(){const W=c.newAttributes,O=c.enabledAttributes;for(let Q=0,Y=O.length;Q<Y;Q++)O[Q]!==W[Q]&&(n.disableVertexAttribArray(Q),O[Q]=0)}function T(W,O,Q,Y,I,G,H){H===!0?n.vertexAttribIPointer(W,O,Q,I,G):n.vertexAttribPointer(W,O,Q,Y,I,G)}function L(W,O,Q,Y){if(i.isWebGL2===!1&&(W.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=Y.attributes,G=Q.getAttributes(),H=O.defaultAttributeValues;for(const U in G){const z=G[U];if(z.location>=0){let ae=I[U];if(ae===void 0&&(U==="instanceMatrix"&&W.instanceMatrix&&(ae=W.instanceMatrix),U==="instanceColor"&&W.instanceColor&&(ae=W.instanceColor)),ae!==void 0){const re=ae.normalized,de=ae.itemSize,ye=t.get(ae);if(ye===void 0)continue;const Ce=ye.buffer,Ae=ye.type,Qe=ye.bytesPerElement,cn=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||ae.gpuType===S0);if(ae.isInterleavedBufferAttribute){const Ge=ae.data,k=Ge.stride,Wt=ae.offset;if(Ge.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)S(z.location+be,Ge.meshPerAttribute);W.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let be=0;be<z.locationSize;be++)x(z.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let be=0;be<z.locationSize;be++)T(z.location+be,de/z.locationSize,Ae,re,k*Qe,(Wt+de/z.locationSize*be)*Qe,cn)}else{if(ae.isInstancedBufferAttribute){for(let Ge=0;Ge<z.locationSize;Ge++)S(z.location+Ge,ae.meshPerAttribute);W.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ge=0;Ge<z.locationSize;Ge++)x(z.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ge=0;Ge<z.locationSize;Ge++)T(z.location+Ge,de/z.locationSize,Ae,re,de*Qe,de/z.locationSize*Ge*Qe,cn)}}else if(H!==void 0){const re=H[U];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(z.location,re);break;case 3:n.vertexAttrib3fv(z.location,re);break;case 4:n.vertexAttrib4fv(z.location,re);break;default:n.vertexAttrib1fv(z.location,re)}}}}b()}function M(){J();for(const W in o){const O=o[W];for(const Q in O){const Y=O[Q];for(const I in Y)g(Y[I].object),delete Y[I];delete O[Q]}delete o[W]}}function A(W){if(o[W.id]===void 0)return;const O=o[W.id];for(const Q in O){const Y=O[Q];for(const I in Y)g(Y[I].object),delete Y[I];delete O[Q]}delete o[W.id]}function Z(W){for(const O in o){const Q=o[O];if(Q[W.id]===void 0)continue;const Y=Q[W.id];for(const I in Y)g(Y[I].object),delete Y[I];delete Q[W.id]}}function J(){B(),u=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:x,disableUnusedAttributes:b}}function VA(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function GA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,x=a||e.has("OES_texture_float"),S=_&&x,b=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:b}}function WA(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Fr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let x=h.clippingState||null;l.value=x,x=u(g,d,_,p);for(let S=0;S!==_;++S)x[S]=t[S];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const h=p+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,x=p;_!==y;++_,x+=4)a.copy(f[_]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function jA(n){let e=new WeakMap;function t(a,o){return o===gd?a.mapping=pa:o===vd&&(a.mapping=ma),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===gd||o===vd)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sw(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qh extends H0{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vs=4,xg=[.125,.215,.35,.446,.526,.582],Vr=20,pf=new Qh,Sg=new Re;let mf=null;const Br=(1+Math.sqrt(5))/2,Us=1/Br,Mg=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Br,Us),new N(0,Br,-Us),new N(Us,0,Br),new N(-Us,0,Br),new N(Br,Us,0),new N(-Br,Us,0)];class Eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){mf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf),e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pa||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:To,format:Nn,colorSpace:ei,depthBuffer:!1},r=wg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XA(s)),this._blurMaterial=YA(s,e,t)}return r}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,pf)}_sceneToCubeUV(e,t,i,r){const o=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Sg),u.toneMapping=Li,u.autoClear=!1;const p=new Gr({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Sn(new tl,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Sg),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const _=this._cubeSize;Il(r,v*_,h>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pa||e.mapping===ma;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Il(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,pf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mg[(r-1)%Mg.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Sn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const h=[];let v=0;for(let T=0;T<Vr;++T){const L=T/y,M=Math.exp(-L*L/2);h.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const x=this._sizeLods[r],S=3*x*(r>_-Vs?r-_+Vs:0),b=4*(this._cubeSize-x);Il(t,S,b,3*x,2*x),l.setRenderTarget(t),l.render(f,pf)}}function XA(n){const e=[],t=[],i=[];let r=n;const s=n-Vs+1+xg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Vs?l=xg[a-n+Vs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,y=3,m=2,h=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,L=b>2?0:-1,M=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(M,y*g*b),_.set(d,m*g*b);const A=[b,b,b,b,b,b];x.set(A,h*g*b)}const S=new ni;S.setAttribute("position",new Ht(v,y)),S.setAttribute("uv",new Ht(_,m)),S.setAttribute("faceIndex",new Ht(x,h)),e.push(S),r>Vs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wg(n,e,t){const i=new rs(n,e,t);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Il(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function YA(n,e,t){const i=new Float32Array(Vr),r=new N(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Tg(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Ag(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function $A(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gd||l===vd,u=l===pa||l===ma;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Eg(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Eg(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function qA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function KA(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,h=y.length;m<h;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,x=v.length;_<x;_+=3){const S=v[_+0],b=v[_+1],T=v[_+2];d.push(S,b,b,T,T,S)}}else{const v=g.array;y=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const S=_+0,b=_+1,T=_+2;d.push(S,b,b,T,T,S)}}const m=new(I0(d)?B0:F0)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ZA(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(s,p,o,d*l),t.update(p,s,1)}function f(d,p,g){if(g===0)return;let y,m;if(r)y=n,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](s,p,o,d*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function QA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function JA(n,e){return n[0]-e[0]}function eb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function tb(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let O=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),S===!0&&(M=3);let A=u.attributes.position.count*M,Z=1;A>e.maxTextureSize&&(Z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const J=new Float32Array(A*Z*4*y),B=new U0(J,A,Z,y);B.type=Ai,B.needsUpdate=!0;const W=M*4;for(let Q=0;Q<y;Q++){const Y=b[Q],I=T[Q],G=L[Q],H=A*Z*4*Q;for(let U=0;U<Y.count;U++){const z=U*W;_===!0&&(a.fromBufferAttribute(Y,U),J[H+z+0]=a.x,J[H+z+1]=a.y,J[H+z+2]=a.z,J[H+z+3]=0),x===!0&&(a.fromBufferAttribute(I,U),J[H+z+4]=a.x,J[H+z+5]=a.y,J[H+z+6]=a.z,J[H+z+7]=0),S===!0&&(a.fromBufferAttribute(G,U),J[H+z+8]=a.x,J[H+z+9]=a.y,J[H+z+10]=a.z,J[H+z+11]=G.itemSize===4?a.w:1)}}m={count:y,texture:B,size:new We(A,Z)},s.set(u,m),u.addEventListener("dispose",O)}let h=0;for(let _=0;_<d.length;_++)h+=d[_];const v=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let y=i[u.id];if(y===void 0||y.length!==g){y=[];for(let x=0;x<g;x++)y[x]=[x,0];i[u.id]=y}for(let x=0;x<g;x++){const S=y[x];S[0]=x,S[1]=d[x]}y.sort(eb);for(let x=0;x<8;x++)x<g&&y[x][1]?(o[x][0]=y[x][0],o[x][1]=y[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(JA);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const S=o[x],b=S[0],T=S[1];b!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+x)!==m[b]&&u.setAttribute("morphTarget"+x,m[b]),h&&u.getAttribute("morphNormal"+x)!==h[b]&&u.setAttribute("morphNormal"+x,h[b]),r[x]=T,v+=T):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),h&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const _=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function nb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const W0=new zt,j0=new U0,X0=new GE,Y0=new V0,bg=[],Rg=[],Cg=new Float32Array(16),Pg=new Float32Array(9),Lg=new Float32Array(4);function Na(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bg[r];if(s===void 0&&(s=new Float32Array(r),bg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gu(n,e){let t=Rg[e];t===void 0&&(t=new Int32Array(e),Rg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ib(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function ob(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Lg.set(i),n.uniformMatrix2fv(this.addr,!1,Lg),Ct(t,i)}}function lb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Pg.set(i),n.uniformMatrix3fv(this.addr,!1,Pg),Ct(t,i)}}function cb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Cg.set(i),n.uniformMatrix4fv(this.addr,!1,Cg),Ct(t,i)}}function ub(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function pb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function _b(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||W0,r)}function yb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||X0,r)}function xb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Y0,r)}function Sb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||j0,r)}function Mb(n){switch(n){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ab;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return fb;case 35668:case 35672:return db;case 35669:case 35673:return hb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return Sb}}function Eb(n,e){n.uniform1fv(this.addr,e)}function wb(n,e){const t=Na(e,this.size,2);n.uniform2fv(this.addr,t)}function Tb(n,e){const t=Na(e,this.size,3);n.uniform3fv(this.addr,t)}function Ab(n,e){const t=Na(e,this.size,4);n.uniform4fv(this.addr,t)}function bb(n,e){const t=Na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rb(n,e){const t=Na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cb(n,e){const t=Na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pb(n,e){n.uniform1iv(this.addr,e)}function Lb(n,e){n.uniform2iv(this.addr,e)}function Ib(n,e){n.uniform3iv(this.addr,e)}function Nb(n,e){n.uniform4iv(this.addr,e)}function Db(n,e){n.uniform1uiv(this.addr,e)}function Ub(n,e){n.uniform2uiv(this.addr,e)}function Ob(n,e){n.uniform3uiv(this.addr,e)}function kb(n,e){n.uniform4uiv(this.addr,e)}function Fb(n,e,t){const i=this.cache,r=e.length,s=gu(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||W0,s[a])}function Bb(n,e,t){const i=this.cache,r=e.length,s=gu(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||X0,s[a])}function zb(n,e,t){const i=this.cache,r=e.length,s=gu(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Y0,s[a])}function Hb(n,e,t){const i=this.cache,r=e.length,s=gu(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||j0,s[a])}function Vb(n){switch(n){case 5126:return Eb;case 35664:return wb;case 35665:return Tb;case 35666:return Ab;case 35674:return bb;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return Pb;case 35667:case 35671:return Lb;case 35668:case 35672:return Ib;case 35669:case 35673:return Nb;case 5125:return Db;case 36294:return Ub;case 36295:return Ob;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Gb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Mb(t.type)}}class Wb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Vb(t.type)}}class jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function Ig(n,e){n.seq.push(e),n.map[e.id]=e}function Xb(n,e,t){const i=n.name,r=i.length;for(gf.lastIndex=0;;){const s=gf.exec(i),a=gf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ig(t,c===void 0?new Gb(o,n,e):new Wb(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new jb(o),Ig(t,f)),t=f}}}class mc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Xb(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ng(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Yb=0;function $b(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function qb(n){switch(n){case ei:return["Linear","( value )"];case Te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Dg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$b(n.getShaderSource(e),a)}else return r}function Kb(n,e){const t=qb(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Zb(n,e){let t;switch(e){case XM:t="Linear";break;case YM:t="Reinhard";break;case $M:t="OptimizedCineon";break;case _0:t="ACESFilmic";break;case qM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(no).join(`
`)}function Jb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function e2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function no(n){return n!==""}function Ug(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(n){return n.replace(t2,i2)}const n2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function i2(n,e){let t=Oe[e];if(t===void 0){const i=n2.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ed(t)}const r2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(n){return n.replace(r2,s2)}function s2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function o2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pa:case ma:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ma:e="ENVMAP_MODE_REFRACTION";break}return e}function c2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case WM:e="ENVMAP_BLENDING_MIX";break;case jM:e="ENVMAP_BLENDING_ADD";break}return e}function u2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function f2(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=a2(t),c=o2(t),u=l2(t),f=c2(t),d=u2(t),p=t.isWebGL2?"":Qb(t),g=Jb(s),y=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),h.length>0&&(h+=`
`)):(m=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),h=[p,Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Li?Zb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Kb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),a=Ed(a),a=Ug(a,t),a=Og(a,t),o=Ed(o),o=Ug(o,t),o=Og(o,t),a=kg(a),o=kg(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+m+a,x=v+h+o,S=Ng(r,r.VERTEX_SHADER,_),b=Ng(r,r.FRAGMENT_SHADER,x);if(r.attachShader(y,S),r.attachShader(y,b),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(y).trim(),A=r.getShaderInfoLog(S).trim(),Z=r.getShaderInfoLog(b).trim();let J=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,S,b);else{const W=Dg(r,S,"vertex"),O=Dg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+W+`
`+O)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||Z==="")&&(B=!1);B&&(this.diagnostics={runnable:J,programLog:M,vertexShader:{log:A,prefix:m},fragmentShader:{log:Z,prefix:h}})}r.deleteShader(S),r.deleteShader(b);let T;this.getUniforms=function(){return T===void 0&&(T=new mc(r,y)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=e2(r,y)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=b,this}let d2=0;class h2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new p2(e),t.set(e,i)),i}}class p2{constructor(e){this.id=d2++,this.code=e,this.usedTimes=0}}function m2(n,e,t,i,r,s,a){const o=new O0,l=new h2,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,A,Z,J,B){const W=J.fog,O=B.geometry,Q=M.isMeshStandardMaterial?J.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),I=Y&&Y.mapping===du?Y.image.height:null,G=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const H=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,U=H!==void 0?H.length:0;let z=0;O.morphAttributes.position!==void 0&&(z=1),O.morphAttributes.normal!==void 0&&(z=2),O.morphAttributes.color!==void 0&&(z=3);let ae,re,de,ye;if(G){const ii=oi[G];ae=ii.vertexShader,re=ii.fragmentShader}else ae=M.vertexShader,re=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const Ce=n.getRenderTarget(),Ae=B.isInstancedMesh===!0,Qe=!!M.map,cn=!!M.matcap,Ge=!!Y,k=!!M.aoMap,Wt=!!M.lightMap,be=!!M.bumpMap,De=!!M.normalMap,Ie=!!M.displacementMap,ut=!!M.emissiveMap,Xe=!!M.metalnessMap,ke=!!M.roughnessMap,et=M.anisotropy>0,Ft=M.clearcoat>0,jt=M.iridescence>0,R=M.sheen>0,E=M.transmission>0,X=et&&!!M.anisotropyMap,te=Ft&&!!M.clearcoatMap,ne=Ft&&!!M.clearcoatNormalMap,ce=Ft&&!!M.clearcoatRoughnessMap,xe=jt&&!!M.iridescenceMap,ue=jt&&!!M.iridescenceThicknessMap,q=R&&!!M.sheenColorMap,Se=R&&!!M.sheenRoughnessMap,Me=!!M.specularMap,we=!!M.specularColorMap,ge=!!M.specularIntensityMap,ve=E&&!!M.transmissionMap,ze=E&&!!M.thicknessMap,it=!!M.gradientMap,P=!!M.alphaMap,le=M.alphaTest>0,V=!!M.alphaHash,ie=!!M.extensions,fe=!!O.attributes.uv1,Ke=!!O.attributes.uv2,ft=!!O.attributes.uv3;return{isWebGL2:u,shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:re,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:ei,map:Qe,matcap:cn,envMap:Ge,envMapMode:Ge&&Y.mapping,envMapCubeUVHeight:I,aoMap:k,lightMap:Wt,bumpMap:be,normalMap:De,displacementMap:d&&Ie,emissiveMap:ut,normalMapObjectSpace:De&&M.normalMapType===fE,normalMapTangentSpace:De&&M.normalMapType===qh,metalnessMap:Xe,roughnessMap:ke,anisotropy:et,anisotropyMap:X,clearcoat:Ft,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,iridescence:jt,iridescenceMap:xe,iridescenceThicknessMap:ue,sheen:R,sheenColorMap:q,sheenRoughnessMap:Se,specularMap:Me,specularColorMap:we,specularIntensityMap:ge,transmission:E,transmissionMap:ve,thicknessMap:ze,gradientMap:it,opaque:M.transparent===!1&&M.blending===ra,alphaMap:P,alphaTest:le,alphaHash:V,combine:M.combine,mapUv:Qe&&y(M.map.channel),aoMapUv:k&&y(M.aoMap.channel),lightMapUv:Wt&&y(M.lightMap.channel),bumpMapUv:be&&y(M.bumpMap.channel),normalMapUv:De&&y(M.normalMap.channel),displacementMapUv:Ie&&y(M.displacementMap.channel),emissiveMapUv:ut&&y(M.emissiveMap.channel),metalnessMapUv:Xe&&y(M.metalnessMap.channel),roughnessMapUv:ke&&y(M.roughnessMap.channel),anisotropyMapUv:X&&y(M.anisotropyMap.channel),clearcoatMapUv:te&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:q&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(M.sheenRoughnessMap.channel),specularMapUv:Me&&y(M.specularMap.channel),specularColorMapUv:we&&y(M.specularColorMap.channel),specularIntensityMapUv:ge&&y(M.specularIntensityMap.channel),transmissionMapUv:ve&&y(M.transmissionMap.channel),thicknessMapUv:ze&&y(M.thicknessMap.channel),alphaMapUv:P&&y(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(De||et),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:Ke,vertexUv3s:ft,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Qe||P),fog:!!W,useFog:M.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Li,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===li,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ie&&M.extensions.derivatives===!0,extensionFragDepth:ie&&M.extensions.fragDepth===!0,extensionDrawBuffers:ie&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Z in M.defines)A.push(Z),A.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(v(A,M),_(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function _(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),M.push(o.mask)}function x(M){const A=g[M.type];let Z;if(A){const J=oi[A];Z=tw.clone(J.uniforms)}else Z=M.uniforms;return Z}function S(M,A){let Z;for(let J=0,B=c.length;J<B;J++){const W=c[J];if(W.cacheKey===A){Z=W,++Z.usedTimes;break}}return Z===void 0&&(Z=new f2(n,A,M,s),c.push(Z)),Z}function b(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function g2(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function v2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,g,y,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function o(f,d,p,g,y,m){const h=a(f,d,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,y,m){const h=a(f,d,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||v2),i.length>1&&i.sort(d||Bg),r.length>1&&r.sort(d||Bg)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function _2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new zg,n.set(i,[a])):r>=s.length?(a=new zg,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function y2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Re};break;case"SpotLight":t={position:new N,direction:new N,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function x2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let S2=0;function M2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function E2(n,e){const t=new y2,i=x2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,a=new Be,o=new Be;function l(u,f){let d=0,p=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let y=0,m=0,h=0,v=0,_=0,x=0,S=0,b=0,T=0,L=0;u.sort(M2);const M=f===!0?Math.PI:1;for(let Z=0,J=u.length;Z<J;Z++){const B=u[Z],W=B.color,O=B.intensity,Q=B.distance,Y=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=W.r*O*M,p+=W.g*O*M,g+=W.b*O*M;else if(B.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(B.sh.coefficients[I],O);else if(B.isDirectionalLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity*M),B.castShadow){const G=B.shadow,H=i.get(B);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,r.directionalShadow[y]=H,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=B.shadow.matrix,x++}r.directional[y]=I,y++}else if(B.isSpotLight){const I=t.get(B);I.position.setFromMatrixPosition(B.matrixWorld),I.color.copy(W).multiplyScalar(O*M),I.distance=Q,I.coneCos=Math.cos(B.angle),I.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),I.decay=B.decay,r.spot[h]=I;const G=B.shadow;if(B.map&&(r.spotLightMap[T]=B.map,T++,G.updateMatrices(B),B.castShadow&&L++),r.spotLightMatrix[h]=G.matrix,B.castShadow){const H=i.get(B);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,r.spotShadow[h]=H,r.spotShadowMap[h]=Y,b++}h++}else if(B.isRectAreaLight){const I=t.get(B);I.color.copy(W).multiplyScalar(O),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=I,v++}else if(B.isPointLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity*M),I.distance=B.distance,I.decay=B.decay,B.castShadow){const G=B.shadow,H=i.get(B);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,r.pointShadow[m]=H,r.pointShadowMap[m]=Y,r.pointShadowMatrix[m]=B.shadow.matrix,S++}r.point[m]=I,m++}else if(B.isHemisphereLight){const I=t.get(B);I.skyColor.copy(B.color).multiplyScalar(O*M),I.groundColor.copy(B.groundColor).multiplyScalar(O*M),r.hemi[_]=I,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==y||A.pointLength!==m||A.spotLength!==h||A.rectAreaLength!==v||A.hemiLength!==_||A.numDirectionalShadows!==x||A.numPointShadows!==S||A.numSpotShadows!==b||A.numSpotMaps!==T)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=b+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,A.directionalLength=y,A.pointLength=m,A.spotLength=h,A.rectAreaLength=v,A.hemiLength=_,A.numDirectionalShadows=x,A.numPointShadows=S,A.numSpotShadows=b,A.numSpotMaps=T,r.version=S2++)}function c(u,f){let d=0,p=0,g=0,y=0,m=0;const h=f.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const x=u[v];if(x.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),d++}else if(x.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),g++}else if(x.isRectAreaLight){const S=r.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),o.identity(),a.copy(x.matrixWorld),a.premultiply(h),o.extractRotation(a),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Hg(n,e){const t=new E2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function w2(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Hg(n,e),t.set(s,[l])):a>=o.length?(l=new Hg(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class T2 extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A2 extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C2(n,e,t){let i=new Zh;const r=new We,s=new We,a=new nt,o=new T2({depthPacking:uE}),l=new A2,c={},u=t.maxTextureSize,f={[Di]:hn,[hn]:Di,[li]:li},d=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:b2,fragmentShader:R2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ni;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Sn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m0;let h=this.type;this.render=function(S,b,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(dr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const J=h!==Ei&&this.type===Ei,B=h===Ei&&this.type!==Ei;for(let W=0,O=S.length;W<O;W++){const Q=S[W],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const I=Y.getFrameExtents();if(r.multiply(I),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/I.x),r.x=s.x*I.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/I.y),r.y=s.y*I.y,Y.mapSize.y=s.y)),Y.map===null||J===!0||B===!0){const H=this.type!==Ei?{minFilter:Ut,magFilter:Ut}:{};Y.map!==null&&Y.map.dispose(),Y.map=new rs(r.x,r.y,H),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const G=Y.getViewportCount();for(let H=0;H<G;H++){const U=Y.getViewport(H);a.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),Z.viewport(a),Y.updateMatrices(Q,H),i=Y.getFrustum(),x(b,T,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Ei&&v(Y,T),Y.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(L,M,A)};function v(S,b){const T=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new rs(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(b,null,T,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(b,null,T,p,y,null)}function _(S,b,T,L){let M=null;const A=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)M=A;else if(M=T.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Z=M.uuid,J=b.uuid;let B=c[Z];B===void 0&&(B={},c[Z]=B);let W=B[J];W===void 0&&(W=M.clone(),B[J]=W),M=W}if(M.visible=b.visible,M.wireframe=b.wireframe,L===Ei?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=n.properties.get(M);Z.light=T}return M}function x(S,b,T,L,M){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ei)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const J=e.update(S),B=S.material;if(Array.isArray(B)){const W=J.groups;for(let O=0,Q=W.length;O<Q;O++){const Y=W[O],I=B[Y.materialIndex];if(I&&I.visible){const G=_(S,I,L,M);n.renderBufferDirect(T,null,J,G,S,Y)}}}else if(B.visible){const W=_(S,B,L,M);n.renderBufferDirect(T,null,J,W,S,null)}}const Z=S.children;for(let J=0,B=Z.length;J<B;J++)x(Z[J],b,T,L,M)}}function P2(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const le=new nt;let V=null;const ie=new nt(0,0,0,0);return{setMask:function(fe){V!==fe&&!P&&(n.colorMask(fe,fe,fe,fe),V=fe)},setLocked:function(fe){P=fe},setClear:function(fe,Ke,ft,Lt,ii){ii===!0&&(fe*=Lt,Ke*=Lt,ft*=Lt),le.set(fe,Ke,ft,Lt),ie.equals(le)===!1&&(n.clearColor(fe,Ke,ft,Lt),ie.copy(le))},reset:function(){P=!1,V=null,ie.set(-1,0,0,0)}}}function s(){let P=!1,le=null,V=null,ie=null;return{setTest:function(fe){fe?Ce(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(fe){le!==fe&&!P&&(n.depthMask(fe),le=fe)},setFunc:function(fe){if(V!==fe){switch(fe){case kM:n.depthFunc(n.NEVER);break;case FM:n.depthFunc(n.ALWAYS);break;case BM:n.depthFunc(n.LESS);break;case md:n.depthFunc(n.LEQUAL);break;case zM:n.depthFunc(n.EQUAL);break;case HM:n.depthFunc(n.GEQUAL);break;case VM:n.depthFunc(n.GREATER);break;case GM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ie!==fe&&(n.clearDepth(fe),ie=fe)},reset:function(){P=!1,le=null,V=null,ie=null}}}function a(){let P=!1,le=null,V=null,ie=null,fe=null,Ke=null,ft=null,Lt=null,ii=null;return{setTest:function(gt){P||(gt?Ce(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(gt){le!==gt&&!P&&(n.stencilMask(gt),le=gt)},setFunc:function(gt,ri,Jt){(V!==gt||ie!==ri||fe!==Jt)&&(n.stencilFunc(gt,ri,Jt),V=gt,ie=ri,fe=Jt)},setOp:function(gt,ri,Jt){(Ke!==gt||ft!==ri||Lt!==Jt)&&(n.stencilOp(gt,ri,Jt),Ke=gt,ft=ri,Lt=Jt)},setLocked:function(gt){P=gt},setClear:function(gt){ii!==gt&&(n.clearStencil(gt),ii=gt)},reset:function(){P=!1,le=null,V=null,ie=null,fe=null,Ke=null,ft=null,Lt=null,ii=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,y=[],m=null,h=!1,v=null,_=null,x=null,S=null,b=null,T=null,L=null,M=!1,A=null,Z=null,J=null,B=null,W=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(I)[1]),Q=Y>=1):I.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Q=Y>=2);let G=null,H={};const U=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),ae=new nt().fromArray(U),re=new nt().fromArray(z);function de(P,le,V,ie){const fe=new Uint8Array(4),Ke=n.createTexture();n.bindTexture(P,Ke),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<V;ft++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(le+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return Ke}const ye={};ye[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(md),Ie(!1),ut(Rm),Ce(n.CULL_FACE),be(dr);function Ce(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function Ae(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Qe(P,le){return p[P]!==le?(n.bindFramebuffer(P,le),p[P]=le,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function cn(P,le){let V=y,ie=!1;if(P)if(V=g.get(le),V===void 0&&(V=[],g.set(le,V)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(V.length!==fe.length||V[0]!==n.COLOR_ATTACHMENT0){for(let Ke=0,ft=fe.length;Ke<ft;Ke++)V[Ke]=n.COLOR_ATTACHMENT0+Ke;V.length=fe.length,ie=!0}}else V[0]!==n.COLOR_ATTACHMENT0&&(V[0]=n.COLOR_ATTACHMENT0,ie=!0);else V[0]!==n.BACK&&(V[0]=n.BACK,ie=!0);ie&&(t.isWebGL2?n.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Ge(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const k={[Bs]:n.FUNC_ADD,[AM]:n.FUNC_SUBTRACT,[bM]:n.FUNC_REVERSE_SUBTRACT};if(i)k[Im]=n.MIN,k[Nm]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(k[Im]=P.MIN_EXT,k[Nm]=P.MAX_EXT)}const Wt={[RM]:n.ZERO,[CM]:n.ONE,[PM]:n.SRC_COLOR,[g0]:n.SRC_ALPHA,[OM]:n.SRC_ALPHA_SATURATE,[DM]:n.DST_COLOR,[IM]:n.DST_ALPHA,[LM]:n.ONE_MINUS_SRC_COLOR,[v0]:n.ONE_MINUS_SRC_ALPHA,[UM]:n.ONE_MINUS_DST_COLOR,[NM]:n.ONE_MINUS_DST_ALPHA};function be(P,le,V,ie,fe,Ke,ft,Lt){if(P===dr){h===!0&&(Ae(n.BLEND),h=!1);return}if(h===!1&&(Ce(n.BLEND),h=!0),P!==TM){if(P!==v||Lt!==M){if((_!==Bs||b!==Bs)&&(n.blendEquation(n.FUNC_ADD),_=Bs,b=Bs),Lt)switch(P){case ra:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cm:n.blendFunc(n.ONE,n.ONE);break;case Pm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,S=null,T=null,L=null,v=P,M=Lt}return}fe=fe||le,Ke=Ke||V,ft=ft||ie,(le!==_||fe!==b)&&(n.blendEquationSeparate(k[le],k[fe]),_=le,b=fe),(V!==x||ie!==S||Ke!==T||ft!==L)&&(n.blendFuncSeparate(Wt[V],Wt[ie],Wt[Ke],Wt[ft]),x=V,S=ie,T=Ke,L=ft),v=P,M=!1}function De(P,le){P.side===li?Ae(n.CULL_FACE):Ce(n.CULL_FACE);let V=P.side===hn;le&&(V=!V),Ie(V),P.blending===ra&&P.transparent===!1?be(dr):be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ie=P.stencilWrite;c.setTest(ie),ie&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){A!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),A=P)}function ut(P){P!==MM?(Ce(n.CULL_FACE),P!==Z&&(P===Rm?n.cullFace(n.BACK):P===EM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),Z=P}function Xe(P){P!==J&&(Q&&n.lineWidth(P),J=P)}function ke(P,le,V){P?(Ce(n.POLYGON_OFFSET_FILL),(B!==le||W!==V)&&(n.polygonOffset(le,V),B=le,W=V)):Ae(n.POLYGON_OFFSET_FILL)}function et(P){P?Ce(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function Ft(P){P===void 0&&(P=n.TEXTURE0+O-1),G!==P&&(n.activeTexture(P),G=P)}function jt(P,le,V){V===void 0&&(G===null?V=n.TEXTURE0+O-1:V=G);let ie=H[V];ie===void 0&&(ie={type:void 0,texture:void 0},H[V]=ie),(ie.type!==P||ie.texture!==le)&&(G!==V&&(n.activeTexture(V),G=V),n.bindTexture(P,le||ye[P]),ie.type=P,ie.texture=le)}function R(){const P=H[G];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){ae.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ae.copy(P))}function ge(P){re.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function ve(P,le){let V=f.get(le);V===void 0&&(V=new WeakMap,f.set(le,V));let ie=V.get(P);ie===void 0&&(ie=n.getUniformBlockIndex(le,P.name),V.set(P,ie))}function ze(P,le){const ie=f.get(le).get(P);u.get(le)!==ie&&(n.uniformBlockBinding(le,ie,P.__bindingPointIndex),u.set(le,ie))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},G=null,H={},p={},g=new WeakMap,y=[],m=null,h=!1,v=null,_=null,x=null,S=null,b=null,T=null,L=null,M=!1,A=null,Z=null,J=null,B=null,W=null,ae.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:Ae,bindFramebuffer:Qe,drawBuffers:cn,useProgram:Ge,setBlending:be,setMaterial:De,setFlipSided:Ie,setCullFace:ut,setLineWidth:Xe,setPolygonOffset:ke,setScissorTest:et,activeTexture:Ft,bindTexture:jt,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:Se,texImage3D:Me,updateUBOMapping:ve,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:q,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:ce,compressedTexSubImage3D:xe,scissor:we,viewport:ge,reset:it}}function L2(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return h?new OffscreenCanvas(R,E):bo("canvas")}function _(R,E,X,te){let ne=1;if((R.width>te||R.height>te)&&(ne=te/Math.max(R.width,R.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=E?Dc:Math.floor,xe=ce(ne*R.width),ue=ce(ne*R.height);y===void 0&&(y=v(xe,ue));const q=X?v(xe,ue):y;return q.width=xe,q.height=ue,q.getContext("2d").drawImage(R,0,0,xe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+ue+")."),q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return Md(R.width)&&Md(R.height)}function S(R){return o?!1:R.wrapS!==In||R.wrapT!==In||R.minFilter!==Ut&&R.minFilter!==un}function b(R,E){return R.generateMipmaps&&E&&R.minFilter!==Ut&&R.minFilter!==un}function T(R){n.generateMipmap(R)}function L(R,E,X,te,ne=!1){if(o===!1)return E;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=E;return E===n.RED&&(X===n.FLOAT&&(ce=n.R32F),X===n.HALF_FLOAT&&(ce=n.R16F),X===n.UNSIGNED_BYTE&&(ce=n.R8)),E===n.RG&&(X===n.FLOAT&&(ce=n.RG32F),X===n.HALF_FLOAT&&(ce=n.RG16F),X===n.UNSIGNED_BYTE&&(ce=n.RG8)),E===n.RGBA&&(X===n.FLOAT&&(ce=n.RGBA32F),X===n.HALF_FLOAT&&(ce=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ce=te===Te&&ne===!1?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)),(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(R,E,X){return b(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==un?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){return R===Ut||R===_d||R===pc?n.NEAREST:n.LINEAR}function Z(R){const E=R.target;E.removeEventListener("dispose",Z),B(E),E.isVideoTexture&&g.delete(E)}function J(R){const E=R.target;E.removeEventListener("dispose",J),O(E)}function B(R){const E=i.get(R);if(E.__webglInit===void 0)return;const X=R.source,te=m.get(X);if(te){const ne=te[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&W(R),Object.keys(te).length===0&&m.delete(X)}i.remove(R)}function W(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const X=R.source,te=m.get(X);delete te[E.__cacheKey],a.memory.textures--}function O(R){const E=R.texture,X=i.get(R),te=i.get(E);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,ce=E.length;ne<ce;ne++){const xe=i.get(E[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(E[ne])}i.remove(E),i.remove(R)}let Q=0;function Y(){Q=0}function I(){const R=Q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Q+=1,R}function G(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){const X=i.get(R);if(R.isVideoTexture&&Ft(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(X,R,E);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function U(R,E){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Qe(X,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function z(R,E){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Qe(X,R,E);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function ae(R,E){const X=i.get(R);if(R.version>0&&X.__version!==R.version){cn(X,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}const re={[ga]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[Lc]:n.MIRRORED_REPEAT},de={[Ut]:n.NEAREST,[_d]:n.NEAREST_MIPMAP_NEAREST,[pc]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[x0]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},ye={[hE]:n.NEVER,[xE]:n.ALWAYS,[pE]:n.LESS,[gE]:n.LEQUAL,[mE]:n.EQUAL,[yE]:n.GEQUAL,[vE]:n.GREATER,[_E]:n.NOTEQUAL};function Ce(R,E,X){if(X?(n.texParameteri(R,n.TEXTURE_WRAP_S,re[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,re[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,re[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,de[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,de[E.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==In||E.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,A(E.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Ut&&E.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ut||E.minFilter!==pc&&E.minFilter!==is||E.type===Ai&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===To&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Ae(R,E){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",Z));const te=E.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const ce=G(E);if(ce!==R.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[ce].usedTimes++;const xe=ne[R.__cacheKey];xe!==void 0&&(ne[R.__cacheKey].usedTimes--,xe.usedTimes===0&&W(E)),R.__cacheKey=ce,R.__webglTexture=ne[ce].texture}return X}function Qe(R,E,X){let te=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=n.TEXTURE_3D);const ne=Ae(R,E),ce=E.source;t.bindTexture(te,R.__webglTexture,n.TEXTURE0+X);const xe=i.get(ce);if(ce.version!==xe.__version||ne===!0){t.activeTexture(n.TEXTURE0+X),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ue=S(E)&&x(E.image)===!1;let q=_(E.image,ue,!1,u);q=jt(E,q);const Se=x(q)||o,Me=s.convert(E.format,E.colorSpace);let we=s.convert(E.type),ge=L(E.internalFormat,Me,we,E.colorSpace);Ce(te,E,Se);let ve;const ze=E.mipmaps,it=o&&E.isVideoTexture!==!0,P=xe.__version===void 0||ne===!0,le=M(E,q,Se);if(E.isDepthTexture)ge=n.DEPTH_COMPONENT,o?E.type===Ai?ge=n.DEPTH_COMPONENT32F:E.type===or?ge=n.DEPTH_COMPONENT24:E.type===Zr?ge=n.DEPTH24_STENCIL8:ge=n.DEPTH_COMPONENT16:E.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Qr&&ge===n.DEPTH_COMPONENT&&E.type!==Yh&&E.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=or,we=s.convert(E.type)),E.format===va&&ge===n.DEPTH_COMPONENT&&(ge=n.DEPTH_STENCIL,E.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Zr,we=s.convert(E.type))),P&&(it?t.texStorage2D(n.TEXTURE_2D,1,ge,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,ge,q.width,q.height,0,Me,we,null));else if(E.isDataTexture)if(ze.length>0&&Se){it&&P&&t.texStorage2D(n.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let V=0,ie=ze.length;V<ie;V++)ve=ze[V],it?t.texSubImage2D(n.TEXTURE_2D,V,0,0,ve.width,ve.height,Me,we,ve.data):t.texImage2D(n.TEXTURE_2D,V,ge,ve.width,ve.height,0,Me,we,ve.data);E.generateMipmaps=!1}else it?(P&&t.texStorage2D(n.TEXTURE_2D,le,ge,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,Me,we,q.data)):t.texImage2D(n.TEXTURE_2D,0,ge,q.width,q.height,0,Me,we,q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&P&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ge,ze[0].width,ze[0].height,q.depth);for(let V=0,ie=ze.length;V<ie;V++)ve=ze[V],E.format!==Nn?Me!==null?it?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,q.depth,Me,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,ge,ve.width,ve.height,q.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,q.depth,Me,we,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,ge,ve.width,ve.height,q.depth,0,Me,we,ve.data)}else{it&&P&&t.texStorage2D(n.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let V=0,ie=ze.length;V<ie;V++)ve=ze[V],E.format!==Nn?Me!==null?it?t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,V,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(n.TEXTURE_2D,V,0,0,ve.width,ve.height,Me,we,ve.data):t.texImage2D(n.TEXTURE_2D,V,ge,ve.width,ve.height,0,Me,we,ve.data)}else if(E.isDataArrayTexture)it?(P&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ge,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Me,we,q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,q.width,q.height,q.depth,0,Me,we,q.data);else if(E.isData3DTexture)it?(P&&t.texStorage3D(n.TEXTURE_3D,le,ge,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Me,we,q.data)):t.texImage3D(n.TEXTURE_3D,0,ge,q.width,q.height,q.depth,0,Me,we,q.data);else if(E.isFramebufferTexture){if(P)if(it)t.texStorage2D(n.TEXTURE_2D,le,ge,q.width,q.height);else{let V=q.width,ie=q.height;for(let fe=0;fe<le;fe++)t.texImage2D(n.TEXTURE_2D,fe,ge,V,ie,0,Me,we,null),V>>=1,ie>>=1}}else if(ze.length>0&&Se){it&&P&&t.texStorage2D(n.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let V=0,ie=ze.length;V<ie;V++)ve=ze[V],it?t.texSubImage2D(n.TEXTURE_2D,V,0,0,Me,we,ve):t.texImage2D(n.TEXTURE_2D,V,ge,Me,we,ve);E.generateMipmaps=!1}else it?(P&&t.texStorage2D(n.TEXTURE_2D,le,ge,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,we,q)):t.texImage2D(n.TEXTURE_2D,0,ge,Me,we,q);b(E,Se)&&T(te),xe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function cn(R,E,X){if(E.image.length!==6)return;const te=Ae(R,E),ne=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);const ce=i.get(ne);if(ne.version!==ce.__version||te===!0){t.activeTexture(n.TEXTURE0+X),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,q=[];for(let V=0;V<6;V++)!xe&&!ue?q[V]=_(E.image[V],!1,!0,c):q[V]=ue?E.image[V].image:E.image[V],q[V]=jt(E,q[V]);const Se=q[0],Me=x(Se)||o,we=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),ve=L(E.internalFormat,we,ge,E.colorSpace),ze=o&&E.isVideoTexture!==!0,it=ce.__version===void 0||te===!0;let P=M(E,Se,Me);Ce(n.TEXTURE_CUBE_MAP,E,Me);let le;if(xe){ze&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,P,ve,Se.width,Se.height);for(let V=0;V<6;V++){le=q[V].mipmaps;for(let ie=0;ie<le.length;ie++){const fe=le[ie];E.format!==Nn?we!==null?ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie,0,0,fe.width,fe.height,we,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie,0,0,fe.width,fe.height,we,ge,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie,ve,fe.width,fe.height,0,we,ge,fe.data)}}}else{le=E.mipmaps,ze&&it&&(le.length>0&&P++,t.texStorage2D(n.TEXTURE_CUBE_MAP,P,ve,q[0].width,q[0].height));for(let V=0;V<6;V++)if(ue){ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,q[V].width,q[V].height,we,ge,q[V].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ve,q[V].width,q[V].height,0,we,ge,q[V].data);for(let ie=0;ie<le.length;ie++){const Ke=le[ie].image[V].image;ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie+1,0,0,Ke.width,Ke.height,we,ge,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie+1,ve,Ke.width,Ke.height,0,we,ge,Ke.data)}}else{ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,we,ge,q[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ve,we,ge,q[V]);for(let ie=0;ie<le.length;ie++){const fe=le[ie];ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie+1,0,0,we,ge,fe.image[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie+1,ve,we,ge,fe.image[V])}}}b(E,Me)&&T(n.TEXTURE_CUBE_MAP),ce.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ge(R,E,X,te,ne){const ce=s.convert(X.format,X.colorSpace),xe=s.convert(X.type),ue=L(X.internalFormat,ce,xe,X.colorSpace);i.get(E).__hasExternalTextures||(ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,ue,E.width,E.height,E.depth,0,ce,xe,null):t.texImage2D(ne,0,ue,E.width,E.height,0,ce,xe,null)),t.bindFramebuffer(n.FRAMEBUFFER,R),et(E)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0,ke(E)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(R,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let te=n.DEPTH_COMPONENT16;if(X||et(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ai?te=n.DEPTH_COMPONENT32F:ne.type===or&&(te=n.DEPTH_COMPONENT24));const ce=ke(E);et(E)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,te,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,te,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const te=ke(E);X&&et(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,E.width,E.height):et(E)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<te.length;ne++){const ce=te[ne],xe=s.convert(ce.format,ce.colorSpace),ue=s.convert(ce.type),q=L(ce.internalFormat,xe,ue,ce.colorSpace),Se=ke(E);X&&et(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,q,E.width,E.height):et(E)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,q,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,ne=ke(E);if(E.depthTexture.format===Qr)et(E)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(E.depthTexture.format===va)et(E)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(R){const E=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Wt(E.__webglFramebuffer,R)}else if(X){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=n.createRenderbuffer(),k(E.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),k(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(R,E,X){const te=i.get(R);E!==void 0&&Ge(te.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),X!==void 0&&be(R)}function Ie(R){const E=R.texture,X=i.get(R),te=i.get(E);R.addEventListener("dispose",J),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=E.version,a.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,xe=x(R)||o;if(ne){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)X.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(X.__webglFramebuffer=n.createFramebuffer(),ce)if(r.drawBuffers){const ue=R.texture;for(let q=0,Se=ue.length;q<Se;q++){const Me=i.get(ue[q]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&et(R)===!1){const ue=ce?E:[E];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<ue.length;q++){const Se=ue[q];X.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[q]);const Me=s.convert(Se.format,Se.colorSpace),we=s.convert(Se.type),ge=L(Se.internalFormat,Me,we,Se.colorSpace,R.isXRRenderTarget===!0),ve=ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ge,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,X.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),k(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,E,xe);for(let ue=0;ue<6;ue++)Ge(X.__webglFramebuffer[ue],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue);b(E,xe)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ue=R.texture;for(let q=0,Se=ue.length;q<Se;q++){const Me=ue[q],we=i.get(Me);t.bindTexture(n.TEXTURE_2D,we.__webglTexture),Ce(n.TEXTURE_2D,Me,xe),Ge(X.__webglFramebuffer,R,Me,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D),b(Me,xe)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,te.__webglTexture),Ce(ue,E,xe),Ge(X.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,ue),b(E,xe)&&T(ue),t.unbindTexture()}R.depthBuffer&&be(R)}function ut(R){const E=x(R)||o,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,ne=X.length;te<ne;te++){const ce=X[te];if(b(ce,E)){const xe=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(ce).__webglTexture;t.bindTexture(xe,ue),T(xe),t.unbindTexture()}}}function Xe(R){if(o&&R.samples>0&&et(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,te=R.height;let ne=n.COLOR_BUFFER_BIT;const ce=[],xe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(R),q=R.isWebGLMultipleRenderTargets===!0;if(q)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){ce.push(n.COLOR_ATTACHMENT0+Se),R.depthBuffer&&ce.push(xe);const Me=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Me===!1&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),q&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]),Me===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),q){const we=i.get(E[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ne,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]);const Me=i.get(E[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function ke(R){return Math.min(f,R.samples)}function et(R){const E=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ft(R){const E=a.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function jt(R,E){const X=R.colorSpace,te=R.format,ne=R.type;return R.isCompressedTexture===!0||R.format===Sd||X!==ei&&X!==es&&(X===Te?o===!1?e.has("EXT_sRGB")===!0&&te===Nn?(R.format=Sd,R.minFilter=un,R.generateMipmaps=!1):E=N0.sRGBToLinear(E):(te!==Nn||ne!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=I,this.resetTextureUnits=Y,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=ae,this.rebindTextures=De,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=et}function I2(n,e,t){const i=t.isWebGL2;function r(s,a=es){let o;if(s===hr)return n.UNSIGNED_BYTE;if(s===M0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===E0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===KM)return n.BYTE;if(s===ZM)return n.SHORT;if(s===Yh)return n.UNSIGNED_SHORT;if(s===S0)return n.INT;if(s===or)return n.UNSIGNED_INT;if(s===Ai)return n.FLOAT;if(s===To)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===QM)return n.ALPHA;if(s===Nn)return n.RGBA;if(s===JM)return n.LUMINANCE;if(s===eE)return n.LUMINANCE_ALPHA;if(s===Qr)return n.DEPTH_COMPONENT;if(s===va)return n.DEPTH_STENCIL;if(s===Sd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===tE)return n.RED;if(s===w0)return n.RED_INTEGER;if(s===nE)return n.RG;if(s===T0)return n.RG_INTEGER;if(s===A0)return n.RGBA_INTEGER;if(s===Gu||s===Wu||s===ju||s===Xu)if(a===Te)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Gu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ju)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Gu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ju)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dm||s===Um||s===Om||s===km)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Dm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Um)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Om)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===km)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===iE)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fm||s===Bm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Fm)return a===Te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Bm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zm||s===Hm||s===Vm||s===Gm||s===Wm||s===jm||s===Xm||s===Ym||s===$m||s===qm||s===Km||s===Zm||s===Qm||s===Jm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===zm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ym)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$m)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Km)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jm)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Yu)return a===Te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===rE||s===eg||s===tg||s===ng)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Yu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===eg)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tg)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ng)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class N2 extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wr extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D2={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class U2 extends zt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Qr,u!==Qr&&u!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qr&&(i=or),i===void 0&&u===va&&(i=Zr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class O2 extends gs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const y=t.getContextAttributes();let m=null,h=null;const v=[],_=[],x=new sn;x.layers.enable(1),x.viewport=new nt;const S=new sn;S.layers.enable(2),S.viewport=new nt;const b=[x,S],T=new N2;T.layers.enable(1),T.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let z=v[U];return z===void 0&&(z=new vf,v[U]=z),z.getTargetRaySpace()},this.getControllerGrip=function(U){let z=v[U];return z===void 0&&(z=new vf,v[U]=z),z.getGripSpace()},this.getHand=function(U){let z=v[U];return z===void 0&&(z=new vf,v[U]=z),z.getHandSpace()};function A(U){const z=_.indexOf(U.inputSource);if(z===-1)return;const ae=v[z];ae!==void 0&&(ae.update(U.inputSource,U.frame,c||a),ae.dispatchEvent({type:U.type,data:U.inputSource}))}function Z(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",J);for(let U=0;U<v.length;U++){const z=_[U];z!==null&&(_[U]=null,v[U].disconnect(z))}L=null,M=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:p}),h=new rs(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let z=null,ae=null,re=null;y.depth&&(re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=y.stencil?va:Qr,ae=y.stencil?Zr:or);const de={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(de),r.updateRenderState({layers:[d]}),h=new rs(d.textureWidth,d.textureHeight,{format:Nn,type:hr,depthTexture:new U2(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(U){for(let z=0;z<U.removed.length;z++){const ae=U.removed[z],re=_.indexOf(ae);re>=0&&(_[re]=null,v[re].disconnect(ae))}for(let z=0;z<U.added.length;z++){const ae=U.added[z];let re=_.indexOf(ae);if(re===-1){for(let ye=0;ye<v.length;ye++)if(ye>=_.length){_.push(ae),re=ye;break}else if(_[ye]===null){_[ye]=ae,re=ye;break}if(re===-1)break}const de=v[re];de&&de.connect(ae)}}const B=new N,W=new N;function O(U,z,ae){B.setFromMatrixPosition(z.matrixWorld),W.setFromMatrixPosition(ae.matrixWorld);const re=B.distanceTo(W),de=z.projectionMatrix.elements,ye=ae.projectionMatrix.elements,Ce=de[14]/(de[10]-1),Ae=de[14]/(de[10]+1),Qe=(de[9]+1)/de[5],cn=(de[9]-1)/de[5],Ge=(de[8]-1)/de[0],k=(ye[8]+1)/ye[0],Wt=Ce*Ge,be=Ce*k,De=re/(-Ge+k),Ie=De*-Ge;z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ie),U.translateZ(De),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const ut=Ce+De,Xe=Ae+De,ke=Wt-Ie,et=be+(re-Ie),Ft=Qe*Ae/Xe*ut,jt=cn*Ae/Xe*ut;U.projectionMatrix.makePerspective(ke,et,Ft,jt,ut,Xe),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Q(U,z){z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;T.near=S.near=x.near=U.near,T.far=S.far=x.far=U.far,(L!==T.near||M!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,M=T.far);const z=U.parent,ae=T.cameras;Q(T,z);for(let re=0;re<ae.length;re++)Q(ae[re],z);ae.length===2?O(T,x,S):T.projectionMatrix.copy(x.projectionMatrix),Y(U,T,z)};function Y(U,z,ae){ae===null?U.matrix.copy(z.matrixWorld):(U.matrix.copy(ae.matrixWorld),U.matrix.invert(),U.matrix.multiply(z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const re=U.children;for(let de=0,ye=re.length;de<ye;de++)re[de].updateMatrixWorld(!0);U.projectionMatrix.copy(z.projectionMatrix),U.projectionMatrixInverse.copy(z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ya*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)};let I=null;function G(U,z){if(u=z.getViewerPose(c||a),g=z,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let re=!1;ae.length!==T.cameras.length&&(T.cameras.length=0,re=!0);for(let de=0;de<ae.length;de++){const ye=ae[de];let Ce=null;if(p!==null)Ce=p.getViewport(ye);else{const Qe=f.getViewSubImage(d,ye);Ce=Qe.viewport,de===0&&(e.setRenderTargetTextures(h,Qe.colorTexture,d.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(h))}let Ae=b[de];Ae===void 0&&(Ae=new sn,Ae.layers.enable(de),Ae.viewport=new nt,b[de]=Ae),Ae.matrix.fromArray(ye.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ye.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),de===0&&(T.matrix.copy(Ae.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),re===!0&&T.cameras.push(Ae)}}for(let ae=0;ae<v.length;ae++){const re=_[ae],de=v[ae];re!==null&&de!==void 0&&de.update(re,z,c||a)}I&&I(U,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),g=null}const H=new G0;H.setAnimationLoop(G),this.setAnimationLoop=function(U){I=U},this.dispose=function(){}}}function k2(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,z0(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===hn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===hn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function F2(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function c(v,_){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const S=_.program;i.updateUBOMapping(v,S);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function u(v){const _=f();v.__bindingPointIndex=_;const x=n.createBuffer(),S=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,S,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],x=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let b=0,T=x.length;b<T;b++){const L=x[b];if(p(L,b,S)===!0){const M=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let J=0;J<A.length;J++){const B=A[J],W=y(B);typeof B=="number"?(L.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,M+Z,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=B.elements[0],L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=B.elements[0],L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=B.elements[0]):(B.toArray(L.__data,Z),Z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,x){const S=v.value;if(x[_]===void 0){if(typeof S=="number")x[_]=S;else{const b=Array.isArray(S)?S:[S],T=[];for(let L=0;L<b.length;L++)T.push(b[L].clone());x[_]=T}return!0}else if(typeof S=="number"){if(x[_]!==S)return x[_]=S,!0}else{const b=Array.isArray(x[_])?x[_]:[x[_]],T=Array.isArray(S)?S:[S];for(let L=0;L<b.length;L++){const M=b[L];if(M.equals(T[L])===!1)return M.copy(T[L]),!0}}return!1}function g(v){const _=v.uniforms;let x=0;const S=16;let b=0;for(let T=0,L=_.length;T<L;T++){const M=_[T],A={boundary:0,storage:0},Z=Array.isArray(M.value)?M.value:[M.value];for(let J=0,B=Z.length;J<B;J++){const W=Z[J],O=y(W);A.boundary+=O.boundary,A.storage+=O.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,T>0){b=x%S;const J=S-b;b!==0&&J-A.boundary<0&&(x+=S-b,M.__offset=x)}x+=A.storage}return b=x%S,b>0&&(x+=S-b),v.__size=x,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}function B2(){const n=bo("canvas");return n.style.display="block",n}class $0{constructor(e={}){const{canvas:t=B2(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Te,this.useLegacyLights=!0,this.toneMapping=Li,this.toneMappingExposure=1;const _=this;let x=!1,S=0,b=0,T=null,L=-1,M=null;const A=new nt,Z=new nt;let J=null;const B=new Re(0);let W=0,O=t.width,Q=t.height,Y=1,I=null,G=null;const H=new nt(0,0,O,Q),U=new nt(0,0,O,Q);let z=!1;const ae=new Zh;let re=!1,de=!1,ye=null;const Ce=new Be,Ae=new We,Qe=new N,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return T===null?Y:1}let k=i;function Wt(w,F){for(let j=0;j<w.length;j++){const D=w[j],$=t.getContext(D,F);if($!==null)return $}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",ie,!1),k===null){const F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),k=Wt(F,w),k===null)throw Wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,De,Ie,ut,Xe,ke,et,Ft,jt,R,E,X,te,ne,ce,xe,ue,q,Se,Me,we,ge,ve,ze;function it(){be=new qA(k),De=new GA(k,be,e),be.init(De),ge=new I2(k,be,De),Ie=new P2(k,be,De),ut=new QA(k),Xe=new g2,ke=new L2(k,be,Ie,Xe,De,ge,ut),et=new jA(_),Ft=new $A(_),jt=new lw(k,De),ve=new HA(k,be,jt,De),R=new KA(k,jt,ut,ve),E=new nb(k,R,jt,ut),Se=new tb(k,De,ke),xe=new WA(Xe),X=new m2(_,et,Ft,be,De,ve,xe),te=new k2(_,Xe),ne=new _2,ce=new w2(be,De),q=new zA(_,et,Ft,Ie,E,d,l),ue=new C2(_,E,De),ze=new F2(k,ut,De,Ie),Me=new VA(k,be,ut,De),we=new ZA(k,be,ut,De),ut.programs=X.programs,_.capabilities=De,_.extensions=be,_.properties=Xe,_.renderLists=ne,_.shadowMap=ue,_.state=Ie,_.info=ut}it();const P=new O2(_,k);this.xr=P,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(O,Q,!1))},this.getSize=function(w){return w.set(O,Q)},this.setSize=function(w,F,j=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,Q=F,t.width=Math.floor(w*Y),t.height=Math.floor(F*Y),j===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(O*Y,Q*Y).floor()},this.setDrawingBufferSize=function(w,F,j){O=w,Q=F,Y=j,t.width=Math.floor(w*j),t.height=Math.floor(F*j),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,F,j,D){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,F,j,D),Ie.viewport(A.copy(H).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(U)},this.setScissor=function(w,F,j,D){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,F,j,D),Ie.scissor(Z.copy(U).multiplyScalar(Y).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){Ie.setScissorTest(z=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(w=!0,F=!0,j=!0){let D=0;if(w){let $=!1;if(T!==null){const me=T.texture.format;$=me===A0||me===T0||me===w0}if($){const me=T.texture.type,Ee=me===hr||me===or||me===Yh||me===Zr||me===M0||me===E0,Pe=q.getClearColor(),Le=q.getClearAlpha(),He=Pe.r,Ne=Pe.g,Ue=Pe.b;Ee?(p[0]=He,p[1]=Ne,p[2]=Ue,p[3]=Le,k.clearBufferuiv(k.COLOR,0,p)):(g[0]=He,g[1]=Ne,g[2]=Ue,g[3]=Le,k.clearBufferiv(k.COLOR,0,g))}else D|=k.COLOR_BUFFER_BIT}F&&(D|=k.DEPTH_BUFFER_BIT),j&&(D|=k.STENCIL_BUFFER_BIT),k.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ne.dispose(),ce.dispose(),Xe.dispose(),et.dispose(),Ft.dispose(),E.dispose(),ve.dispose(),ze.dispose(),X.dispose(),P.dispose(),P.removeEventListener("sessionstart",gt),P.removeEventListener("sessionend",ri),ye&&(ye.dispose(),ye=null),Jt.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=ut.autoReset,F=ue.enabled,j=ue.autoUpdate,D=ue.needsUpdate,$=ue.type;it(),ut.autoReset=w,ue.enabled=F,ue.autoUpdate=j,ue.needsUpdate=D,ue.type=$}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){const F=w.target;F.removeEventListener("dispose",fe),Ke(F)}function Ke(w){ft(w),Xe.remove(w)}function ft(w){const F=Xe.get(w).programs;F!==void 0&&(F.forEach(function(j){X.releaseProgram(j)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,j,D,$,me){F===null&&(F=cn);const Ee=$.isMesh&&$.matrixWorld.determinant()<0,Pe=KS(w,F,j,D,$);Ie.setMaterial(D,Ee);let Le=j.index,He=1;D.wireframe===!0&&(Le=R.getWireframeAttribute(j),He=2);const Ne=j.drawRange,Ue=j.attributes.position;let vt=Ne.start*He,xt=(Ne.start+Ne.count)*He;me!==null&&(vt=Math.max(vt,me.start*He),xt=Math.min(xt,(me.start+me.count)*He)),Le!==null?(vt=Math.max(vt,0),xt=Math.min(xt,Le.count)):Ue!=null&&(vt=Math.max(vt,0),xt=Math.min(xt,Ue.count));const Fn=xt-vt;if(Fn<0||Fn===1/0)return;ve.setup($,D,Pe,j,Le);let mi,Mt=Me;if(Le!==null&&(mi=jt.get(Le),Mt=we,Mt.setIndex(mi)),$.isMesh)D.wireframe===!0?(Ie.setLineWidth(D.wireframeLinewidth*Ge()),Mt.setMode(k.LINES)):Mt.setMode(k.TRIANGLES);else if($.isLine){let $e=D.linewidth;$e===void 0&&($e=1),Ie.setLineWidth($e*Ge()),$.isLineSegments?Mt.setMode(k.LINES):$.isLineLoop?Mt.setMode(k.LINE_LOOP):Mt.setMode(k.LINE_STRIP)}else $.isPoints?Mt.setMode(k.POINTS):$.isSprite&&Mt.setMode(k.TRIANGLES);if($.isInstancedMesh)Mt.renderInstances(vt,Fn,$.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ku=Math.min(j.instanceCount,$e);Mt.renderInstances(vt,Fn,ku)}else Mt.render(vt,Fn)},this.compile=function(w,F){function j(D,$,me){D.transparent===!0&&D.side===li&&D.forceSinglePass===!1?(D.side=hn,D.needsUpdate=!0,fl(D,$,me),D.side=Di,D.needsUpdate=!0,fl(D,$,me),D.side=li):fl(D,$,me)}m=ce.get(w),m.init(),v.push(m),w.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(_.useLegacyLights),w.traverse(function(D){const $=D.material;if($)if(Array.isArray($))for(let me=0;me<$.length;me++){const Ee=$[me];j(Ee,w,D)}else j($,w,D)}),v.pop(),m=null};let Lt=null;function ii(w){Lt&&Lt(w)}function gt(){Jt.stop()}function ri(){Jt.start()}const Jt=new G0;Jt.setAnimationLoop(ii),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(w){Lt=w,P.setAnimationLoop(w),w===null?Jt.stop():Jt.start()},P.addEventListener("sessionstart",gt),P.addEventListener("sessionend",ri),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(F),F=P.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,F,T),m=ce.get(w,v.length),m.init(),v.push(m),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ae.setFromProjectionMatrix(Ce),de=this.localClippingEnabled,re=xe.init(this.clippingPlanes,de),y=ne.get(w,h.length),y.init(),h.push(y),fm(w,F,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(I,G),this.info.render.frame++,re===!0&&xe.beginShadows();const j=m.state.shadowsArray;if(ue.render(j,w,F),re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(y,w),m.setupLights(_.useLegacyLights),F.isArrayCamera){const D=F.cameras;for(let $=0,me=D.length;$<me;$++){const Ee=D[$];dm(y,w,Ee,Ee.viewport)}}else dm(y,w,F);T!==null&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,F),ve.resetDefaultState(),L=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function fm(w,F,j,D){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ae.intersectsSprite(w)){D&&Qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);const Ee=E.update(w),Pe=w.material;Pe.visible&&y.push(w,Ee,Pe,j,Qe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ae.intersectsObject(w))){const Ee=E.update(w),Pe=w.material;if(D&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qe.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Qe.copy(Ee.boundingSphere.center)),Qe.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(Pe)){const Le=Ee.groups;for(let He=0,Ne=Le.length;He<Ne;He++){const Ue=Le[He],vt=Pe[Ue.materialIndex];vt&&vt.visible&&y.push(w,Ee,vt,j,Qe.z,Ue)}}else Pe.visible&&y.push(w,Ee,Pe,j,Qe.z,null)}}const me=w.children;for(let Ee=0,Pe=me.length;Ee<Pe;Ee++)fm(me[Ee],F,j,D)}function dm(w,F,j,D){const $=w.opaque,me=w.transmissive,Ee=w.transparent;m.setupLightsView(j),re===!0&&xe.setGlobalState(_.clippingPlanes,j),me.length>0&&qS($,me,F,j),D&&Ie.viewport(A.copy(D)),$.length>0&&ul($,F,j),me.length>0&&ul(me,F,j),Ee.length>0&&ul(Ee,F,j),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function qS(w,F,j,D){const $=De.isWebGL2;ye===null&&(ye=new rs(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?To:hr,minFilter:is,samples:$?4:0})),_.getDrawingBufferSize(Ae),$?ye.setSize(Ae.x,Ae.y):ye.setSize(Dc(Ae.x),Dc(Ae.y));const me=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(B),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear();const Ee=_.toneMapping;_.toneMapping=Li,ul(w,j,D),ke.updateMultisampleRenderTarget(ye),ke.updateRenderTargetMipmap(ye);let Pe=!1;for(let Le=0,He=F.length;Le<He;Le++){const Ne=F[Le],Ue=Ne.object,vt=Ne.geometry,xt=Ne.material,Fn=Ne.group;if(xt.side===li&&Ue.layers.test(D.layers)){const mi=xt.side;xt.side=hn,xt.needsUpdate=!0,hm(Ue,j,D,vt,xt,Fn),xt.side=mi,xt.needsUpdate=!0,Pe=!0}}Pe===!0&&(ke.updateMultisampleRenderTarget(ye),ke.updateRenderTargetMipmap(ye)),_.setRenderTarget(me),_.setClearColor(B,W),_.toneMapping=Ee}function ul(w,F,j){const D=F.isScene===!0?F.overrideMaterial:null;for(let $=0,me=w.length;$<me;$++){const Ee=w[$],Pe=Ee.object,Le=Ee.geometry,He=D===null?Ee.material:D,Ne=Ee.group;Pe.layers.test(j.layers)&&hm(Pe,F,j,Le,He,Ne)}}function hm(w,F,j,D,$,me){w.onBeforeRender(_,F,j,D,$,me),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(_,F,j,D,w,me),$.transparent===!0&&$.side===li&&$.forceSinglePass===!1?($.side=hn,$.needsUpdate=!0,_.renderBufferDirect(j,F,D,$,w,me),$.side=Di,$.needsUpdate=!0,_.renderBufferDirect(j,F,D,$,w,me),$.side=li):_.renderBufferDirect(j,F,D,$,w,me),w.onAfterRender(_,F,j,D,$,me)}function fl(w,F,j){F.isScene!==!0&&(F=cn);const D=Xe.get(w),$=m.state.lights,me=m.state.shadowsArray,Ee=$.state.version,Pe=X.getParameters(w,$.state,me,F,j),Le=X.getProgramCacheKey(Pe);let He=D.programs;D.environment=w.isMeshStandardMaterial?F.environment:null,D.fog=F.fog,D.envMap=(w.isMeshStandardMaterial?Ft:et).get(w.envMap||D.environment),He===void 0&&(w.addEventListener("dispose",fe),He=new Map,D.programs=He);let Ne=He.get(Le);if(Ne!==void 0){if(D.currentProgram===Ne&&D.lightsStateVersion===Ee)return pm(w,Pe),Ne}else Pe.uniforms=X.getUniforms(w),w.onBuild(j,Pe,_),w.onBeforeCompile(Pe,_),Ne=X.acquireProgram(Pe,Le),He.set(Le,Ne),D.uniforms=Pe.uniforms;const Ue=D.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=xe.uniform),pm(w,Pe),D.needsLights=QS(w),D.lightsStateVersion=Ee,D.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.directionalShadowMap.value=$.state.directionalShadowMap,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotShadowMap.value=$.state.spotShadowMap,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMap.value=$.state.pointShadowMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix);const vt=Ne.getUniforms(),xt=mc.seqWithValue(vt.seq,Ue);return D.currentProgram=Ne,D.uniformsList=xt,Ne}function pm(w,F){const j=Xe.get(w);j.outputColorSpace=F.outputColorSpace,j.instancing=F.instancing,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function KS(w,F,j,D,$){F.isScene!==!0&&(F=cn),ke.resetTextureUnits();const me=F.fog,Ee=D.isMeshStandardMaterial?F.environment:null,Pe=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ei,Le=(D.isMeshStandardMaterial?Ft:et).get(D.envMap||Ee),He=D.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Ue=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,xt=!!j.morphAttributes.color,Fn=D.toneMapped?_.toneMapping:Li,mi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mt=mi!==void 0?mi.length:0,$e=Xe.get(D),ku=m.state.lights;if(re===!0&&(de===!0||w!==M)){const vn=w===M&&D.id===L;xe.setState(D,w,vn)}let It=!1;D.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ku.state.version||$e.outputColorSpace!==Pe||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Le||D.fog===!0&&$e.fog!==me||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==xe.numPlanes||$e.numIntersection!==xe.numIntersection)||$e.vertexAlphas!==He||$e.vertexTangents!==Ne||$e.morphTargets!==Ue||$e.morphNormals!==vt||$e.morphColors!==xt||$e.toneMapping!==Fn||De.isWebGL2===!0&&$e.morphTargetsCount!==Mt)&&(It=!0):(It=!0,$e.__version=D.version);let Lr=$e.currentProgram;It===!0&&(Lr=fl(D,F,$));let mm=!1,Ba=!1,Fu=!1;const en=Lr.getUniforms(),Ir=$e.uniforms;if(Ie.useProgram(Lr.program)&&(mm=!0,Ba=!0,Fu=!0),D.id!==L&&(L=D.id,Ba=!0),mm||M!==w){if(en.setValue(k,"projectionMatrix",w.projectionMatrix),De.logarithmicDepthBuffer&&en.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,Ba=!0,Fu=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const vn=en.map.cameraPosition;vn!==void 0&&vn.setValue(k,Qe.setFromMatrixPosition(w.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&en.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||$.isSkinnedMesh)&&en.setValue(k,"viewMatrix",w.matrixWorldInverse)}if($.isSkinnedMesh){en.setOptional(k,$,"bindMatrix"),en.setOptional(k,$,"bindMatrixInverse");const vn=$.skeleton;vn&&(De.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),en.setValue(k,"boneTexture",vn.boneTexture,ke),en.setValue(k,"boneTextureSize",vn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bu=j.morphAttributes;if((Bu.position!==void 0||Bu.normal!==void 0||Bu.color!==void 0&&De.isWebGL2===!0)&&Se.update($,j,Lr),(Ba||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,en.setValue(k,"receiveShadow",$.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Ir.envMap.value=Le,Ir.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ba&&(en.setValue(k,"toneMappingExposure",_.toneMappingExposure),$e.needsLights&&ZS(Ir,Fu),me&&D.fog===!0&&te.refreshFogUniforms(Ir,me),te.refreshMaterialUniforms(Ir,D,Y,Q,ye),mc.upload(k,$e.uniformsList,Ir,ke)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(mc.upload(k,$e.uniformsList,Ir,ke),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&en.setValue(k,"center",$.center),en.setValue(k,"modelViewMatrix",$.modelViewMatrix),en.setValue(k,"normalMatrix",$.normalMatrix),en.setValue(k,"modelMatrix",$.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const vn=D.uniformsGroups;for(let zu=0,JS=vn.length;zu<JS;zu++)if(De.isWebGL2){const gm=vn[zu];ze.update(gm,Lr),ze.bind(gm,Lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lr}function ZS(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function QS(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,j){Xe.get(w.texture).__webglTexture=F,Xe.get(w.depthTexture).__webglTexture=j;const D=Xe.get(w);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=j===void 0,D.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const j=Xe.get(w);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,j=0){T=w,S=F,b=j;let D=!0,$=null,me=!1,Ee=!1;if(w){const Le=Xe.get(w);Le.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(k.FRAMEBUFFER,null),D=!1):Le.__webglFramebuffer===void 0?ke.setupRenderTarget(w):Le.__hasExternalTextures&&ke.rebindTextures(w,Xe.get(w.texture).__webglTexture,Xe.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ee=!0);const Ne=Xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?($=Ne[F],me=!0):De.isWebGL2&&w.samples>0&&ke.useMultisampledRTT(w)===!1?$=Xe.get(w).__webglMultisampledFramebuffer:$=Ne,A.copy(w.viewport),Z.copy(w.scissor),J=w.scissorTest}else A.copy(H).multiplyScalar(Y).floor(),Z.copy(U).multiplyScalar(Y).floor(),J=z;if(Ie.bindFramebuffer(k.FRAMEBUFFER,$)&&De.drawBuffers&&D&&Ie.drawBuffers(w,$),Ie.viewport(A),Ie.scissor(Z),Ie.setScissorTest(J),me){const Le=Xe.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Le.__webglTexture,j)}else if(Ee){const Le=Xe.get(w.texture),He=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Le.__webglTexture,j||0,He)}L=-1},this.readRenderTargetPixels=function(w,F,j,D,$,me,Ee){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){Ie.bindFramebuffer(k.FRAMEBUFFER,Pe);try{const Le=w.texture,He=Le.format,Ne=Le.type;if(He!==Nn&&ge.convert(He)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===To&&(be.has("EXT_color_buffer_half_float")||De.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ne!==hr&&ge.convert(Ne)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Ai&&(De.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-D&&j>=0&&j<=w.height-$&&k.readPixels(F,j,D,$,ge.convert(He),ge.convert(Ne),me)}finally{const Le=T!==null?Xe.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(w,F,j=0){const D=Math.pow(2,-j),$=Math.floor(F.image.width*D),me=Math.floor(F.image.height*D);ke.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,w.x,w.y,$,me),Ie.unbindTexture()},this.copyTextureToTexture=function(w,F,j,D=0){const $=F.image.width,me=F.image.height,Ee=ge.convert(j.format),Pe=ge.convert(j.type);ke.setTexture2D(j,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,D,w.x,w.y,$,me,Ee,Pe,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,D,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,Ee,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,D,w.x,w.y,Ee,Pe,F.image),D===0&&j.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,F,j,D,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=w.max.x-w.min.x+1,Ee=w.max.y-w.min.y+1,Pe=w.max.z-w.min.z+1,Le=ge.convert(D.format),He=ge.convert(D.type);let Ne;if(D.isData3DTexture)ke.setTexture3D(D,0),Ne=k.TEXTURE_3D;else if(D.isDataArrayTexture)ke.setTexture2DArray(D,0),Ne=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,D.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,D.unpackAlignment);const Ue=k.getParameter(k.UNPACK_ROW_LENGTH),vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xt=k.getParameter(k.UNPACK_SKIP_PIXELS),Fn=k.getParameter(k.UNPACK_SKIP_ROWS),mi=k.getParameter(k.UNPACK_SKIP_IMAGES),Mt=j.isCompressedTexture?j.mipmaps[0]:j.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?k.texSubImage3D(Ne,$,F.x,F.y,F.z,me,Ee,Pe,Le,He,Mt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ne,$,F.x,F.y,F.z,me,Ee,Pe,Le,Mt.data)):k.texSubImage3D(Ne,$,F.x,F.y,F.z,me,Ee,Pe,Le,He,Mt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ue),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Fn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,mi),$===0&&D.generateMipmaps&&k.generateMipmap(Ne),Ie.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){S=0,b=0,T=null,Ie.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Jr:C0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jr?Te:ei}}class z2 extends $0{}z2.prototype.isWebGL1Renderer=!0;class ep{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new ep(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class H2 extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class V2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new N;class tp{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vg=new N,Gg=new nt,Wg=new nt,G2=new N,jg=new Be,Os=new N,_f=new hi,Xg=new Be,yf=new hu;class W2 extends Sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)Os.fromBufferAttribute(t,i),this.applyBoneTransform(i,Os),this.boundingBox.expandByPoint(Os)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)Os.fromBufferAttribute(t,i),this.applyBoneTransform(i,Os),this.boundingSphere.expandByPoint(Os)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_f.copy(this.boundingSphere),_f.applyMatrix4(r),e.ray.intersectsSphere(_f)!==!1&&(Xg.copy(r).invert(),yf.copy(e.ray).applyMatrix4(Xg),!(this.boundingBox!==null&&yf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Gg.fromBufferAttribute(r.attributes.skinIndex,e),Wg.fromBufferAttribute(r.attributes.skinWeight,e),Vg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Wg.getComponent(s);if(a!==0){const o=Gg.getComponent(s);jg.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(G2.copy(Vg).applyMatrix4(jg),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class q0 extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class j2 extends zt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ut,u=Ut,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yg=new Be,X2=new Be;class np{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:X2;Yg.multiplyMatrices(o,t[s]),Yg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new np(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=L0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new j2(t,e,e,Nn,Ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new q0),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class $g extends Ht{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ks=new Be,qg=new Be,Nl=[],Kg=new Vi,Y2=new Be,Wa=new Sn,ja=new hi;class $2 extends Sn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $g(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Y2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Kg.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(Kg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),ja.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(ja)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(i),e.ray.intersectsSphere(ja)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ks),qg.multiplyMatrices(i,ks),Wa.matrixWorld=qg,Wa.raycast(e,Nl);for(let a=0,o=Nl.length;a<o;a++){const l=Nl[a];l.instanceId=s,l.object=this,t.push(l)}Nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $g(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class K0 extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zg=new N,Qg=new N,Jg=new Be,xf=new hu,Dl=new hi;class ip extends ht{constructor(e=new ni,t=new K0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Zg.fromBufferAttribute(t,r-1),Qg.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Zg.distanceTo(Qg);e.setAttribute("lineDistance",new Ii(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;Jg.copy(r).invert(),xf.copy(e.ray).applyMatrix4(Jg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,f=new N,d=new N,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const h=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let _=h,x=v-1;_<x;_+=p){const S=g.getX(_),b=g.getX(_+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,b),xf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=h,x=v-1;_<x;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),xf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ev=new N,tv=new N;class q2 extends ip{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ev.fromBufferAttribute(t,r),tv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ev.distanceTo(tv);e.setAttribute("lineDistance",new Ii(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class K2 extends ip{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Z0 extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nv=new Be,wd=new hu,Ul=new hi,Ol=new N;class Z2 extends ht{constructor(e=new ni,t=new Z0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),Ul.radius+=s,e.ray.intersectsSphere(Ul)===!1)return;nv.copy(r).invert(),wd.copy(e.ray).applyMatrix4(nv);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,y=p;g<y;g++){const m=c.getX(g);Ol.fromBufferAttribute(f,m),iv(Ol,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,y=p;g<y;g++)Ol.fromBufferAttribute(f,g),iv(Ol,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function iv(n,e,t,i,r,s,a){const o=wd.distanceSqToPoint(n);if(o<t){const l=new N;wd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class rp extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class br extends rp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Q2 extends Zn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function qi(n,e,t){return Q0(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function kl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Q0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function J2(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function rv(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function J0(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class nl{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class eR extends nl{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zs,endingEnd:zs}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hs:s=e,o=2*t-i;break;case Ic:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hs:a=e,l=2*i-t;break;case Ic:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,h=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*y+.5*g,x=p*m-p*y;for(let S=0;S!==o;++S)s[S]=h*a[u+S]+v*a[c+S]+_*a[l+S]+x*a[f+S];return s}}class ey extends nl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*u;return s}}class tR extends nl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class pi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kl(t,this.TimeBufferType),this.values=kl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kl(e.times,Array),values:kl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ey(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case _a:t=this.InterpolantFactoryMethodLinear;break;case $u:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return $u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=qi(i,s,a),this.values=qi(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Q0(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=qi(this.times),t=qi(this.values),i=this.getValueSize(),r=this.getInterpolation()===$u,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const f=o*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){const y=t[f+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=qi(e,0,a),this.values=qi(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=qi(this.times,0),t=qi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=_a;class Da extends pi{}Da.prototype.ValueTypeName="bool";Da.prototype.ValueBufferType=Array;Da.prototype.DefaultInterpolation=Ao;Da.prototype.InterpolantFactoryMethodLinear=void 0;Da.prototype.InterpolantFactoryMethodSmooth=void 0;class ty extends pi{}ty.prototype.ValueTypeName="color";class Sa extends pi{}Sa.prototype.ValueTypeName="number";class nR extends nl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Kn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class as extends pi{InterpolantFactoryMethodLinear(e){return new nR(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.DefaultInterpolation=_a;as.prototype.InterpolantFactoryMethodSmooth=void 0;class Ua extends pi{}Ua.prototype.ValueTypeName="string";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=Ao;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends pi{}Ro.prototype.ValueTypeName="vector";class Co{constructor(e,t=-1,i,r=$h){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(rR(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(pi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=J2(l);l=rv(l,1,u),c=rv(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Sa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,g,y){if(p.length!==0){const m=[],h=[];J0(p,m,h,g),m.length!==0&&y.push(new f(d,m,h))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)p[d[g].morphTargets[y]]=-1;for(const y in p){const m=[],h=[];for(let v=0;v!==d[g].morphTargets.length;++v){const _=d[g];m.push(_.time),h.push(_.morphTarget===y?1:0)}r.push(new Sa(".morphTargetInfluence["+y+"]",m,h))}l=p.length*a}else{const p=".bones["+t[f].name+"]";i(Ro,p+".position",d,"pos",r),i(as,p+".quaternion",d,"rot",r),i(Ro,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function iR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sa;case"vector":case"vector2":case"vector3":case"vector4":return Ro;case"color":return ty;case"quaternion":return as;case"bool":case"boolean":return Da;case"string":return Ua}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function rR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iR(n.type);if(n.times===void 0){const t=[],i=[];J0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ma={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sR{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const aR=new sR;class vs{constructor(e){this.manager=e!==void 0?e:aR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class oR extends Error{constructor(e,t){super(e),this.response=t}}class Uc extends vs{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ma.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:r});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let y=0;const m=new ReadableStream({start(h){v();function v(){f.read().then(({done:_,value:x})=>{if(_)h.close();else{y+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let b=0,T=u.length;b<T;b++){const L=u[b];L.onProgress&&L.onProgress(S)}h.enqueue(x),v()}})}}});return new Response(m)}else throw new oR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ma.add(e,c);const u=Mi[e];delete Mi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lR extends vs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ma.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=bo("img");function l(){u(),Ma.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class cR extends vs{constructor(e){super(e)}load(e,t,i,r){const s=new zt,a=new lR(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class vu extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sf=new Be,sv=new N,av=new N;class sp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sv.setFromMatrixPosition(e.matrixWorld),t.position.copy(sv),av.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(av),t.updateMatrixWorld(),Sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uR extends sp{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ya*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ny extends vu{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new uR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ov=new Be,Xa=new N,Mf=new N;class fR extends sp{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Xa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xa),Mf.copy(i.position),Mf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mf),i.updateMatrixWorld(),r.makeTranslation(-Xa.x,-Xa.y,-Xa.z),ov.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ov)}}class dR extends vu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hR extends sp{constructor(){super(new Qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pR extends vu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new hR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mR extends vu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Td{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gR extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ma.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ma.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class vR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lv(){return(typeof performance>"u"?Date:performance).now()}class _R{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)i[s+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,a=r;s!==a;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,r){Kn.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const a=this._workIndex*s;Kn.multiplyQuaternionsFlat(e,a,e,t,e,i),Kn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,i,r,s){const a=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*r}}_lerpAdditive(e,t,i,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[i+a]*r}}}const ap="\\[\\]\\.:\\/",yR=new RegExp("["+ap+"]","g"),op="[^"+ap+"]",xR="[^"+ap.replace("\\.","")+"]",SR=/((?:WC+[\/:])*)/.source.replace("WC",op),MR=/(WCOD+)?/.source.replace("WCOD",xR),ER=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",op),wR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",op),TR=new RegExp("^"+SR+MR+ER+wR+"$"),AR=["material","materials","bones","map"];class bR{constructor(e,t,i){const r=i||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ze{constructor(e,t,i){this.path=t,this.parsedPath=i||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,i):new Ze(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yR,"")}static parseTrackName(e){const t=TR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);AR.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=bR;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class RR{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:zs,endingEnd:zs};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sE,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case oE:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case $h:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(a),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const a=i===aE;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(i===b0){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Hs,r.endingEnd=Hs):(e?r.endingStart=this.zeroSlopeAtStart?Hs:zs:r.endingStart=Ic,t?r.endingEnd=this.zeroSlopeAtEnd?Hs:zs:r.endingEnd=Ic)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const CR=new Float32Array(1);class PR extends gs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==s;++f){const d=r[f],p=d.name;let g=u[p];if(g!==void 0)++g.referenceCount,a[f]=g;else{if(g=a[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const y=t&&t._propertyBindings[f].binding.parsedPath;g=new _R(Ze.create(i,p,y),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[f]=g}o[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new ey(new Float32Array(2),new Float32Array(2),1,CR),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Co.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=$h),l!==void 0){const f=l.actionByRoot[s];if(f!==void 0&&f.blendMode===i)return f;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new RR(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?Co.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);function cv(n,e){if(e===lE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===yd||e===R0){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===yd)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class LR extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new OR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new jR(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new $R(t)})}load(e,t,i,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Td.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Uc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===iy){try{a[Ye.KHR_BINARY_GLTF]=new qR(e)}catch(f){r&&r(f);return}s=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case Ye.KHR_MATERIALS_UNLIT:a[f]=new DR;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[f]=new KR(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[f]=new ZR;break;case Ye.KHR_MESH_QUANTIZATION:a[f]=new QR;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function IR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class NR{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Re(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pR(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new dR(u),c.distance=f;break;case"spot":c=new ny(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,tr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class DR{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Gr}extendParams(e,t,i){const r=[];e.color=new Re(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Te))}return Promise.all(r)}}class UR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class OR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:br}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(o,o)}return Promise.all(s)}}class kR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:br}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class FR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:br}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Te)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class BR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:br}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class zR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:br}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Re(o[0],o[1],o[2]),Promise.all(s)}}class HR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:br}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class VR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:br}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Re(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Te)),Promise.all(s)}}class GR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:br}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class WR{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class jR{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XR{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YR{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(p),u,f,d,r.mode,r.filter),p})})}else return null}}class $R{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Cn.TRIANGLES&&c.mode!==Cn.TRIANGLE_STRIP&&c.mode!==Cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of f){const y=new Be,m=new N,h=new Kn,v=new N(1,1,1),_=new $2(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,y.compose(m,h,v));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const iy="glTF",Ya=12,uv={JSON:1313821514,BIN:5130562};class qR{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ya),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==iy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ya,s=new DataView(e,Ya);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===uv.JSON){const c=new Uint8Array(e,Ya+a,o);this.content=i.decode(c)}else if(l===uv.BIN){const c=Ya+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class KR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=Ad[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=Ad[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],p=aa[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],y=l[p];y!==void 0&&(g.normalized=y)}f(d)},o,c)})})}}class ZR{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QR{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class ry extends nl{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,f=(i-t)/u,d=f*f,p=d*f,g=e*c,y=g-c,m=-2*p+3*d,h=p-d,v=1-m,_=h-d+f;for(let x=0;x!==o;x++){const S=a[y+x+o],b=a[y+x+l]*u,T=a[g+x+o],L=a[g+x]*u;s[x]=v*S+_*b+m*T+h*L}return s}}const JR=new Kn;class eC extends ry{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return JR.fromArray(s).normalize().toArray(s),s}}const Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},aa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fv={9728:Ut,9729:un,9984:_d,9985:x0,9986:pc,9987:is},dv={33071:In,33648:Lc,10497:ga},Ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ad={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tC={CUBICSPLINE:void 0,LINEAR:_a,STEP:Ao},wf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new rp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),n.DefaultMaterial}function kr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function tr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iC(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;o.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function rC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sC(n){let e;const t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tf(t.attributes):e=n.indices+":"+Tf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Tf(n.targets[i]);return e}function Tf(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function bd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const oC=new Be;class lC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new cR(this.options.manager):this.textureLoader=new gR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};kr(s,o,r),tr(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(Td.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Ef[r.type],o=aa[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Ht(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Ef[r.type],c=aa[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let y,m;if(p&&p!==f){const h=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let _=t.cache.get(v);_||(y=new c(o,h*p,r.count*p/u),_=new V2(y,p/u),t.cache.add(v,_)),m=new tp(_,l,d%p/u,g)}else o===null?y=new c(r.count*l):y=new c(o,d,r.count*l),m=new Ht(y,l,g);if(r.sparse!==void 0){const h=Ef.SCALAR,v=aa[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new v(a[1],_,r.sparse.count*h),b=new c(a[2],x,r.sparse.count*l);o!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized));for(let T=0,L=S.length;T<L;T++){const M=S[T];if(m.setX(M,b[T*l]),l>=2&&m.setY(M,b[T*l+1]),l>=3&&m.setZ(M,b[T*l+2]),l>=4&&m.setW(M,b[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=fv[d.magFilter]||un,u.minFilter=fv[d.minFilter]||is,u.wrapS=dv[d.wrapS]||ga,u.wrapT=dv[d.wrapT]||ga,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){const m=new zt(y);m.needsUpdate=!0,d(m)}),t.load(Td.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),f.userData.mimeType=a.mimeType||aC(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Z0,Zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new K0,Zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return rp}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const f=r[Ye.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,Te)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=li);const u=s.alphaMode||wf.OPAQUE;if(u===wf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===wf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Gr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new We(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&a!==Gr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Gr&&(o.emissive=new Re().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==Gr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Te)),Promise.all(c).then(function(){const f=new a(o);return s.name&&(f.name=s.name),tr(f,s),t.associations.set(f,{materials:e}),s.extensions&&kr(r,f,s),f})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hv(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=sC(c),f=r[u];if(f)a.push(f.promise);else{let d;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=hv(new ni,c,t),r[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?nC(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const y=u[p],m=a[p];let h;const v=c[p];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new W2(y,v):new Sn(y,v),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Cn.TRIANGLE_STRIP?h.geometry=cv(h.geometry,R0):m.mode===Cn.TRIANGLE_FAN&&(h.geometry=cv(h.geometry,yd));else if(m.mode===Cn.LINES)h=new q2(y,v);else if(m.mode===Cn.LINE_STRIP)h=new ip(y,v);else if(m.mode===Cn.LINE_LOOP)h=new K2(y,v);else if(m.mode===Cn.POINTS)h=new Z2(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&rC(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),tr(h,s),m.extensions&&kr(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&kr(r,f[0],s),f[0];const d=new Wr;s.extensions&&kr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new sn(DE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Qh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),tr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f){o.push(f);const d=new Be;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new np(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],g=r.samplers[p.sampler],y=p.target,m=y.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,v=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],p=f[1],g=f[2],y=f[3],m=f[4],h=[];for(let v=0,_=d.length;v<_;v++){const x=d[v],S=p[v],b=g[v],T=y[v],L=m[v];if(x===void 0)continue;x.updateMatrix&&(x.updateMatrix(),x.matrixAutoUpdate=!0);const M=i._createAnimationTracks(x,S,b,T,L);if(M)for(let A=0;A<M.length;A++)h.push(M[A])}return new Co(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,oC)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new q0:c.length>1?u=new Wr:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=a),tr(u,s),s.extensions&&kr(i,u,s),s.matrix!==void 0){const f=new Be;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Wr;i.name&&(s.name=r.createUniqueName(i.name)),tr(s,i),i.extensions&&kr(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof Zn||d instanceof zt)&&f.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];Ki[s.path]===Ki.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ki[s.path]){case Ki.weights:c=Sa;break;case Ki.rotation:c=as;break;case Ki.position:case Ki.scale:default:switch(i.itemSize){case 1:c=Sa;break;case 2:case 3:c=Ro;break}break}const u=r.interpolation!==void 0?tC[r.interpolation]:_a,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Ki[s.path],t.array,f,u);u==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=bd(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof as?eC:ry;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cC(n,e,t){const i=e.attributes,r=new Vi;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const u=bd(aa[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const y=bd(aa[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new hi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function hv(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Ad[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return tr(n,e),cC(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?iC(n,e.targets,t):n})}const Af=new WeakMap;class uC extends vs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const s=new Uc(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,r)},i,r)}parse(e,t,i){this.decodeDracoFile(e,t,null,null,Te).catch(i)}decodeDracoFile(e,t,i,r,s=ei){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Af.has(e)){const l=Af.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),Af.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new ni;e.index&&t.setIndex(new Ht(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const r=e.attributes[i],s=r.name,a=r.array,o=r.itemSize,l=new Ht(a,o);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Te)return;const i=new Re;for(let r=0,s=e.count;r<s;r++)i.fromBufferAttribute(e,r).convertSRGBToLinear(),e.setXYZ(r,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Uc(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((r,s)=>{i.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=fC.toString(),a=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const a=s.data;switch(a.type){case"decode":r._callbacks[a.id].resolve(a);break;case"error":r._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function fC(){let n,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(f){u({draco:f})},DracoDecoderModule(n)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const f=u.draco,d=new f.Decoder;try{const p=t(f,d,new Int8Array(l),c),g=p.attributes.map(y=>y.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{f.destroy(d)}});break}};function t(a,o,l,c){const u=c.attributeIDs,f=c.attributeTypes;let d,p;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,p=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,p=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const y={index:null,attributes:[]};for(const m in u){const h=self[f[m]];let v,_;if(c.useUniqueIDs)_=u[m],v=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,a[u[m]]),_===-1)continue;v=o.GetAttribute(d,_)}const x=r(a,o,d,m,h,v);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),y.attributes.push(x)}return g===a.TRIANGULAR_MESH&&(y.index=i(a,o,d)),a.destroy(d),y}function i(a,o,l){const u=l.num_faces()*3,f=u*4,d=a._malloc(f);o.GetTrianglesUInt32Array(l,f,d);const p=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:p,itemSize:1}}function r(a,o,l,c,u,f){const d=f.num_components(),g=l.num_points()*d,y=g*u.BYTES_PER_ELEMENT,m=s(a,u),h=a._malloc(y);o.GetAttributeDataArrayForAllPoints(l,f,m,y,h);const v=new u(a.HEAPF32.buffer,h,g).slice();return a._free(h),{name:c,array:v,itemSize:d}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const Fl=new Re(.9,.95,1),dC=new N(0,-2.5,0);let er=0;const jr=[];function hC(){const n=["Standup","Idle","backflip","HipHop","Pose1","Pose2","TPose"];let e=[!1,!0,!0,!0,!0,!0,!0],t,i,r,s,a=[],o=0,l=1;const c=new H2,u=new sn(75,window.innerWidth/window.innerHeight,.1,1e3);c.background=Fl;const f=new ny(Fl);c.add(f),f.position.set(-10,30,0),f.castShadow=!0,f.angle=Math.PI/4,c.fog=new ep(Fl,10,19);const d=new mR(Fl,.1);c.add(d);const p=new $0;p.toneMapping=_0,p.outputColorSpace=Te,p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.shadowMap.enabled=!0,document.body.appendChild(p.domElement);const g=new mu(50,50,2,2),y=new Q2({color:16777215}),m=new Sn(g,y);m.receiveShadow=!0,m.rotateX(-90*(Math.PI/180)),m.position.set(0,-3,0),c.add(m);const h=new LR;let v;const _=new uC;_.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),h.setDRACOLoader(_),setTimeout(()=>{h.load("models/webchar/webchar.gltf",O=>{O.parser.getDependencies("material").then(I=>{v=I[0],v.emissiveIntensity=.5}),a=O.animations,r=O.scene,r.children.map(I=>{I.castShadow=!0}),r.position.copy(dC),c.add(r),s=new PR(r),s.addEventListener("finished",function(I){I.action._clip.name===n[0]?(I.action.reset(),l=1,o=l,J(n[o],.05)):(o=l,I.action.reset(),J(n[o],.05)),jr.shift()});const Q=Co.findByName(a,n[o]);i=s.clipAction(Q),i.loop=b0,J(n[o],0)},function(O){console.log(O.loaded/O.total*100+"% loaded")},function(O){console.log("An error happened",O)})},500),setTimeout(()=>{r==null||r.traverse(O=>{O.isMesh&&(O.material=v)})},2500);const x=new N(0,-2,0),S=new N(0,-2,0),b=new N(0,0,5),T=new We(0,0);window.addEventListener("mousemove",O=>{T.x=O.clientX/window.innerWidth*2-1,T.y=-(O.clientY/window.innerHeight)*2+1,T.x*=.5,T.y*=.5});const L=new vR;let M=0;function A(){M=L.getDelta(),x.lerp(S,.05),u.lookAt(x),u.position.lerp(b,.05),v&&(v.emissiveIntensity=(Math.sin(L.elapsedTime*2)+1)*.5),r&&s!=null&&(s.update(M),B(),W()),p.render(c,u)}window.addEventListener("resize",Z,!1);function Z(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)}function J(O,Q){const Y=Co.findByName(a,O),I=s.clipAction(Y);t=i,i=I,t!==i&&t.fadeOut(Q),i.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(Q).play()}function B(){if(jr.length>0)if(e[o]==!0){const O=jr.shift();O==0&&(l=Math.floor(Math.random()*2+1)),O==1&&(l=1),O==2&&(l=3),O==4&&(l=4),(O==6||O>6)&&(l=5),O==8&&(l=3),l!=o&&(o=l,J(n[o],.1))}else{const O=jr[0];(O==1||O==0)&&(l=1),O==2&&(l=3),O==4&&(l=4),(O==6||O>6)&&(l=5),O==8&&(l=3)}}function W(){(er==0||er==1)&&(S.set(0,-2,0),b.set(0,0,5)),er==2&&(S.set(0,-1.5,0),b.set(0,0,3)),er==4&&(S.set(1,-1.5,0),b.set(1.5,-1,2)),er>=6&&er<=7&&(S.set(-1,-1.5,0),b.set(-1.5,-1,2)),er==8&&(S.set(0,-1.5,0),b.set(0,-1.5,2))}p.setAnimationLoop(A)}const pC=oe.forwardRef((n,e)=>(oe.useImperativeHandle(e,()=>({childFunction(t){er=t,jr.push(t),jr.length>3&&jr.shift()}})),C.jsx(C.Fragment,{children:hC()})));const mC=({activeSection:n=0,scrollHandler:e})=>C.jsx("header",{children:C.jsx("nav",{className:"sticky",children:C.jsxs("div",{className:"nav-inner",children:[C.jsx("span",{onClick:()=>e("¡Hi!"),className:"logo",children:"CHINO"}),C.jsx("li",{onClick:()=>e("¡Welcome!"),className:n>=0&&n<2?"activeNav":"",children:"Home"}),C.jsx("li",{onClick:()=>e("Web Developments"),className:n==2?"activeNav":"",children:"WebDev"}),C.jsx("li",{onClick:()=>e("Assertive Soccer"),className:n>=3&&n<5?"activeNav":"",children:"Games"}),C.jsx("li",{onClick:()=>e("Shaders"),className:n>=5?"activeNav":"",children:"Gallery"})]})})});var Rd=new Map,Bl=new WeakMap,pv=0,gC=void 0;function vC(n){return n?(Bl.has(n)||(pv+=1,Bl.set(n,pv.toString())),Bl.get(n)):"0"}function _C(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?vC(n.root):n[e]}`).toString()}function yC(n){let e=_C(n),t=Rd.get(e);if(!t){const i=new Map;let r;const s=new IntersectionObserver(a=>{a.forEach(o=>{var l;const c=o.isIntersecting&&r.some(u=>o.intersectionRatio>=u);n.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=i.get(o.target))==null||l.forEach(u=>{u(c,o)})})},n);r=s.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:s,elements:i},Rd.set(e,t)}return t}function xC(n,e,t={},i=gC){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=n.getBoundingClientRect();return e(i,{isIntersecting:i,target:n,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:a}=yC(t);let o=a.get(n)||[];return a.has(n)||a.set(n,o),o.push(e),s.observe(n),function(){o.splice(o.indexOf(e),1),o.length===0&&(a.delete(n),s.unobserve(n)),a.size===0&&(s.disconnect(),Rd.delete(r))}}function sy({threshold:n,delay:e,trackVisibility:t,rootMargin:i,root:r,triggerOnce:s,skip:a,initialInView:o,fallbackInView:l,onChange:c}={}){var u;const[f,d]=oe.useState(null),p=oe.useRef(),[g,y]=oe.useState({inView:!!o,entry:void 0});p.current=c,oe.useEffect(()=>{if(a||!f)return;let _;return _=xC(f,(x,S)=>{y({inView:x,entry:S}),p.current&&p.current(x,S),S.isIntersecting&&s&&_&&(_(),_=void 0)},{root:r,rootMargin:i,threshold:n,trackVisibility:t,delay:e},l),()=>{_&&_()}},[Array.isArray(n)?n.toString():n,f,r,i,s,a,t,l,e]);const m=(u=g.entry)==null?void 0:u.target,h=oe.useRef();!f&&m&&!s&&!a&&h.current!==m&&(h.current=m,y({inView:!!o,entry:void 0}));const v=[d,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}function mv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function he(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mv(Object(t),!0).forEach(function(i){Pt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):mv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Oc(n){"@babel/helpers - typeof";return Oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oc(n)}function SC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function gv(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function MC(n,e,t){return e&&gv(n.prototype,e),t&&gv(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Pt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function lp(n,e){return wC(n)||AC(n,e)||ay(n,e)||RC()}function il(n){return EC(n)||TC(n)||ay(n)||bC()}function EC(n){if(Array.isArray(n))return Cd(n)}function wC(n){if(Array.isArray(n))return n}function TC(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function AC(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,a,o;try{for(t=t.call(n);!(r=(a=t.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw o}}return i}}function ay(n,e){if(n){if(typeof n=="string")return Cd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Cd(n,e)}}function Cd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function bC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vv=function(){},cp={},oy={},ly=null,cy={mark:vv,measure:vv};try{typeof window<"u"&&(cp=window),typeof document<"u"&&(oy=document),typeof MutationObserver<"u"&&(ly=MutationObserver),typeof performance<"u"&&(cy=performance)}catch{}var CC=cp.navigator||{},_v=CC.userAgent,yv=_v===void 0?"":_v,Mr=cp,ot=oy,xv=ly,zl=cy;Mr.document;var Gi=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",uy=~yv.indexOf("MSIE")||~yv.indexOf("Trident/"),Hl,Vl,Gl,Wl,jl,Ui="___FONT_AWESOME___",Pd=16,fy="fa",dy="svg-inline--fa",os="data-fa-i2svg",Ld="data-fa-pseudo-element",PC="data-fa-pseudo-element-pending",up="data-prefix",fp="data-icon",Sv="fontawesome-i2svg",LC="async",IC=["HTML","HEAD","STYLE","SCRIPT"],hy=function(){try{return!0}catch{return!1}}(),at="classic",yt="sharp",dp=[at,yt];function rl(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[at]}})}var Po=rl((Hl={},Pt(Hl,at,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Pt(Hl,yt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Hl)),Lo=rl((Vl={},Pt(Vl,at,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Pt(Vl,yt,{solid:"fass",regular:"fasr",light:"fasl"}),Vl)),Io=rl((Gl={},Pt(Gl,at,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Pt(Gl,yt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Gl)),NC=rl((Wl={},Pt(Wl,at,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Pt(Wl,yt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Wl)),DC=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,py="fa-layers-text",UC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,OC=rl((jl={},Pt(jl,at,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Pt(jl,yt,{900:"fass",400:"fasr",300:"fasl"}),jl)),my=[1,2,3,4,5,6,7,8,9,10],kC=my.concat([11,12,13,14,15,16,17,18,19,20]),FC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},No=new Set;Object.keys(Lo[at]).map(No.add.bind(No));Object.keys(Lo[yt]).map(No.add.bind(No));var BC=[].concat(dp,il(No),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Xr.GROUP,Xr.SWAP_OPACITY,Xr.PRIMARY,Xr.SECONDARY]).concat(my.map(function(n){return"".concat(n,"x")})).concat(kC.map(function(n){return"w-".concat(n)})),fo=Mr.FontAwesomeConfig||{};function zC(n){var e=ot.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function HC(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(ot&&typeof ot.querySelector=="function"){var VC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];VC.forEach(function(n){var e=lp(n,2),t=e[0],i=e[1],r=HC(zC(t));r!=null&&(fo[i]=r)})}var gy={styleDefault:"solid",familyDefault:"classic",cssPrefix:fy,replacementClass:dy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fo.familyPrefix&&(fo.cssPrefix=fo.familyPrefix);var Ea=he(he({},gy),fo);Ea.autoReplaceSvg||(Ea.observeMutations=!1);var _e={};Object.keys(gy).forEach(function(n){Object.defineProperty(_e,n,{enumerable:!0,set:function(t){Ea[n]=t,ho.forEach(function(i){return i(_e)})},get:function(){return Ea[n]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(e){Ea.cssPrefix=e,ho.forEach(function(t){return t(_e)})},get:function(){return Ea.cssPrefix}});Mr.FontAwesomeConfig=_e;var ho=[];function GC(n){return ho.push(n),function(){ho.splice(ho.indexOf(n),1)}}var Zi=Pd,ui={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WC(n){if(!(!n||!Gi)){var e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=ot.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return ot.head.insertBefore(e,i),n}}var jC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Do(){for(var n=12,e="";n-- >0;)e+=jC[Math.random()*62|0];return e}function Oa(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function hp(n){return n.classList?Oa(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function vy(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function XC(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(vy(n[t]),'" ')},"").trim()}function _u(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function pp(n){return n.size!==ui.size||n.x!==ui.x||n.y!==ui.y||n.rotate!==ui.rotate||n.flipX||n.flipY}function YC(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function $C(n){var e=n.transform,t=n.width,i=t===void 0?Pd:t,r=n.height,s=r===void 0?Pd:r,a=n.startCentered,o=a===void 0?!1:a,l="";return o&&uy?l+="translate(".concat(e.x/Zi-i/2,"em, ").concat(e.y/Zi-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Zi,"em), calc(-50% + ").concat(e.y/Zi,"em)) "):l+="translate(".concat(e.x/Zi,"em, ").concat(e.y/Zi,"em) "),l+="scale(".concat(e.size/Zi*(e.flipX?-1:1),", ").concat(e.size/Zi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var qC=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _y(){var n=fy,e=dy,t=_e.cssPrefix,i=_e.replacementClass,r=qC;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),a=new RegExp("\\--".concat(n,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(i))}return r}var Mv=!1;function bf(){_e.autoAddCss&&!Mv&&(WC(_y()),Mv=!0)}var KC={mixout:function(){return{dom:{css:_y,insertCss:bf}}},hooks:function(){return{beforeDOMElementCreation:function(){bf()},beforeI2svg:function(){bf()}}}},Oi=Mr||{};Oi[Ui]||(Oi[Ui]={});Oi[Ui].styles||(Oi[Ui].styles={});Oi[Ui].hooks||(Oi[Ui].hooks={});Oi[Ui].shims||(Oi[Ui].shims=[]);var $n=Oi[Ui],yy=[],ZC=function n(){ot.removeEventListener("DOMContentLoaded",n),kc=1,yy.map(function(e){return e()})},kc=!1;Gi&&(kc=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),kc||ot.addEventListener("DOMContentLoaded",ZC));function QC(n){Gi&&(kc?setTimeout(n,0):yy.push(n))}function sl(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?vy(n):"<".concat(e," ").concat(XC(i),">").concat(s.map(sl).join(""),"</").concat(e,">")}function Ev(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var JC=function(e,t){return function(i,r,s,a){return e.call(t,i,r,s,a)}},Rf=function(e,t,i,r){var s=Object.keys(e),a=s.length,o=r!==void 0?JC(t,r):t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function eP(n){for(var e=[],t=0,i=n.length;t<i;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){var s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Id(n){var e=eP(n);return e.length===1?e[0].toString(16):null}function tP(n,e){var t=n.length,i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function wv(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function Nd(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=wv(e);typeof $n.hooks.addPack=="function"&&!r?$n.hooks.addPack(n,wv(e)):$n.styles[n]=he(he({},$n.styles[n]||{}),s),n==="fas"&&Nd("fa",e)}var Xl,Yl,$l,Gs=$n.styles,nP=$n.shims,iP=(Xl={},Pt(Xl,at,Object.values(Io[at])),Pt(Xl,yt,Object.values(Io[yt])),Xl),mp=null,xy={},Sy={},My={},Ey={},wy={},rP=(Yl={},Pt(Yl,at,Object.keys(Po[at])),Pt(Yl,yt,Object.keys(Po[yt])),Yl);function sP(n){return~BC.indexOf(n)}function aP(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!sP(r)?r:null}var Ty=function(){var e=function(s){return Rf(Gs,function(a,o,l){return a[l]=Rf(o,s,{}),a},{})};xy=e(function(r,s,a){if(s[3]&&(r[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=a})}return r}),Sy=e(function(r,s,a){if(r[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=a})}return r}),wy=e(function(r,s,a){var o=s[2];return r[a]=a,o.forEach(function(l){r[l]=a}),r});var t="far"in Gs||_e.autoFetchSvg,i=Rf(nP,function(r,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});My=i.names,Ey=i.unicodes,mp=yu(_e.styleDefault,{family:_e.familyDefault})};GC(function(n){mp=yu(n.styleDefault,{family:_e.familyDefault})});Ty();function gp(n,e){return(xy[n]||{})[e]}function oP(n,e){return(Sy[n]||{})[e]}function Yr(n,e){return(wy[n]||{})[e]}function Ay(n){return My[n]||{prefix:null,iconName:null}}function lP(n){var e=Ey[n],t=gp("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Er(){return mp}var vp=function(){return{prefix:null,iconName:null,rest:[]}};function yu(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?at:t,r=Po[i][n],s=Lo[i][n]||Lo[i][r],a=n in $n.styles?n:null;return s||a||null}var Tv=($l={},Pt($l,at,Object.keys(Io[at])),Pt($l,yt,Object.keys(Io[yt])),$l);function xu(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.skipLookups,r=i===void 0?!1:i,s=(e={},Pt(e,at,"".concat(_e.cssPrefix,"-").concat(at)),Pt(e,yt,"".concat(_e.cssPrefix,"-").concat(yt)),e),a=null,o=at;(n.includes(s[at])||n.some(function(c){return Tv[at].includes(c)}))&&(o=at),(n.includes(s[yt])||n.some(function(c){return Tv[yt].includes(c)}))&&(o=yt);var l=n.reduce(function(c,u){var f=aP(_e.cssPrefix,u);if(Gs[u]?(u=iP[o].includes(u)?NC[o][u]:u,a=u,c.prefix=u):rP[o].indexOf(u)>-1?(a=u,c.prefix=yu(u,{family:o})):f?c.iconName=f:u!==_e.replacementClass&&u!==s[at]&&u!==s[yt]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=a==="fa"?Ay(c.iconName):{},p=Yr(c.prefix,c.iconName);d.prefix&&(a=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Gs.far&&Gs.fas&&!_e.autoFetchSvg&&(c.prefix="fas")}return c},vp());return(n.includes("fa-brands")||n.includes("fab"))&&(l.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===yt&&(Gs.fass||_e.autoFetchSvg)&&(l.prefix="fass",l.iconName=Yr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Er()||"fas"),l}var cP=function(){function n(){SC(this,n),this.definitions={}}return MC(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=he(he({},t.definitions[o]||{}),a[o]),Nd(o,a[o]);var l=Io[at][o];l&&Nd(l,a[o]),Ty()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];t[o]||(t[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(t[o][f]=c)}),t[o][l]=c}),t}}]),n}(),Av=[],Ws={},oa={},uP=Object.keys(oa);function fP(n,e){var t=e.mixoutsTo;return Av=n,Ws={},Object.keys(oa).forEach(function(i){uP.indexOf(i)===-1&&delete oa[i]}),Av.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(t[a]=r[a]),Oc(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){t[a]||(t[a]={}),t[a][o]=r[a][o]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(a){Ws[a]||(Ws[a]=[]),Ws[a].push(s[a])})}i.provides&&i.provides(oa)}),t}function Dd(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var s=Ws[n]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(i))}),e}function ls(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=Ws[n]||[];r.forEach(function(s){s.apply(null,t)})}function ki(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return oa[n]?oa[n].apply(null,e):void 0}function Ud(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||Er();if(e)return e=Yr(t,e)||e,Ev(by.definitions,t,e)||Ev($n.styles,t,e)}var by=new cP,dP=function(){_e.autoReplaceSvg=!1,_e.observeMutations=!1,ls("noAuto")},hP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gi?(ls("beforeI2svg",e),ki("pseudoElements2svg",e),ki("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,QC(function(){mP({autoReplaceSvgRoot:t}),ls("watch",e)})}},pP={icon:function(e){if(e===null)return null;if(Oc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Yr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=yu(e[0]);return{prefix:i,iconName:Yr(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(_e.cssPrefix,"-"))>-1||e.match(DC))){var r=xu(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Er(),iconName:Yr(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Er();return{prefix:s,iconName:Yr(s,e)||e}}}},Tn={noAuto:dP,config:_e,dom:hP,parse:pP,library:by,findIconDefinition:Ud,toHtml:sl},mP=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?ot:t;(Object.keys($n.styles).length>0||_e.autoFetchSvg)&&Gi&&_e.autoReplaceSvg&&Tn.dom.i2svg({node:i})};function Su(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return sl(i)})}}),Object.defineProperty(n,"node",{get:function(){if(Gi){var i=ot.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function gP(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,a=n.transform;if(pp(a)&&t.found&&!i.found){var o=t.width,l=t.height,c={x:o/l/2,y:.5};r.style=_u(he(he({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function vP(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,a=s===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:he(he({},r),{},{id:a}),children:i}]}]}function _p(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,a=n.transform,o=n.symbol,l=n.title,c=n.maskId,u=n.titleId,f=n.extra,d=n.watchable,p=d===void 0?!1:d,g=i.found?i:t,y=g.width,m=g.height,h=r==="fak",v=[_e.replacementClass,s?"".concat(_e.cssPrefix,"-").concat(s):""].filter(function(M){return f.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(f.classes).join(" "),_={children:[],attributes:he(he({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(m)})},x=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/m*16*.0625,"em")}:{};p&&(_.attributes[os]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||Do())},children:[l]}),delete _.attributes.title);var S=he(he({},_),{},{prefix:r,iconName:s,main:t,mask:i,maskId:c,transform:a,symbol:o,styles:he(he({},x),f.styles)}),b=i.found&&t.found?ki("generateAbstractMask",S)||{children:[],attributes:{}}:ki("generateAbstractIcon",S)||{children:[],attributes:{}},T=b.children,L=b.attributes;return S.children=T,S.attributes=L,o?vP(S):gP(S)}function bv(n){var e=n.content,t=n.width,i=n.height,r=n.transform,s=n.title,a=n.extra,o=n.watchable,l=o===void 0?!1:o,c=he(he(he({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(c[os]="");var u=he({},a.styles);pp(r)&&(u.transform=$C({transform:r,startCentered:!0,width:t,height:i}),u["-webkit-transform"]=u.transform);var f=_u(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function _P(n){var e=n.content,t=n.title,i=n.extra,r=he(he(he({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),s=_u(i.styles);s.length>0&&(r.style=s);var a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}var Cf=$n.styles;function Od(n){var e=n[0],t=n[1],i=n.slice(4),r=lp(i,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Xr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Xr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Xr.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:a}}var yP={found:!1,width:512,height:512};function xP(n,e){!hy&&!_e.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function kd(n,e){var t=e;return e==="fa"&&_e.styleDefault!==null&&(e=Er()),new Promise(function(i,r){if(ki("missingIconAbstract"),t==="fa"){var s=Ay(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&Cf[e]&&Cf[e][n]){var a=Cf[e][n];return i(Od(a))}xP(n,e),i(he(he({},yP),{},{icon:_e.showMissingIcons&&n?ki("missingIconAbstract")||{}:{}}))})}var Rv=function(){},Fd=_e.measurePerformance&&zl&&zl.mark&&zl.measure?zl:{mark:Rv,measure:Rv},io='FA "6.4.0"',SP=function(e){return Fd.mark("".concat(io," ").concat(e," begins")),function(){return Ry(e)}},Ry=function(e){Fd.mark("".concat(io," ").concat(e," ends")),Fd.measure("".concat(io," ").concat(e),"".concat(io," ").concat(e," begins"),"".concat(io," ").concat(e," ends"))},yp={begin:SP,end:Ry},gc=function(){};function Cv(n){var e=n.getAttribute?n.getAttribute(os):null;return typeof e=="string"}function MP(n){var e=n.getAttribute?n.getAttribute(up):null,t=n.getAttribute?n.getAttribute(fp):null;return e&&t}function EP(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(_e.replacementClass)}function wP(){if(_e.autoReplaceSvg===!0)return vc.replace;var n=vc[_e.autoReplaceSvg];return n||vc.replace}function TP(n){return ot.createElementNS("http://www.w3.org/2000/svg",n)}function AP(n){return ot.createElement(n)}function Cy(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?TP:AP:t;if(typeof n=="string")return ot.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(a){r.setAttribute(a,n.attributes[a])});var s=n.children||[];return s.forEach(function(a){r.appendChild(Cy(a,{ceFn:i}))}),r}function bP(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var vc={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(Cy(r),t)}),t.getAttribute(os)===null&&_e.keepOriginalSource){var i=ot.createComment(bP(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~hp(t).indexOf(_e.replacementClass))return vc.replace(e);var r=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(o,l){return l===_e.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var a=i.map(function(o){return sl(o)}).join(`
`);t.setAttribute(os,""),t.innerHTML=a}};function Pv(n){n()}function Py(n,e){var t=typeof e=="function"?e:gc;if(n.length===0)t();else{var i=Pv;_e.mutateApproach===LC&&(i=Mr.requestAnimationFrame||Pv),i(function(){var r=wP(),s=yp.begin("mutate");n.map(r),s(),t()})}}var xp=!1;function Ly(){xp=!0}function Bd(){xp=!1}var Fc=null;function Lv(n){if(xv&&_e.observeMutations){var e=n.treeCallback,t=e===void 0?gc:e,i=n.nodeCallback,r=i===void 0?gc:i,s=n.pseudoElementsCallback,a=s===void 0?gc:s,o=n.observeMutationsRoot,l=o===void 0?ot:o;Fc=new xv(function(c){if(!xp){var u=Er();Oa(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Cv(f.addedNodes[0])&&(_e.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&_e.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Cv(f.target)&&~FC.indexOf(f.attributeName))if(f.attributeName==="class"&&MP(f.target)){var d=xu(hp(f.target)),p=d.prefix,g=d.iconName;f.target.setAttribute(up,p||u),g&&f.target.setAttribute(fp,g)}else EP(f.target)&&r(f.target)})}}),Gi&&Fc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function RP(){Fc&&Fc.disconnect()}function CP(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),t}function PP(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=xu(hp(n));return r.prefix||(r.prefix=Er()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=oP(r.prefix,n.innerText)||gp(r.prefix,Id(n.innerText))),!r.iconName&&_e.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function LP(n){var e=Oa(n.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return _e.autoA11y&&(t?e["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(i||Do()):(e["aria-hidden"]="true",e.focusable="false")),e}function IP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ui,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Iv(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=PP(n),i=t.iconName,r=t.prefix,s=t.rest,a=LP(n),o=Dd("parseNodeAttributes",{},n),l=e.styleParser?CP(n):[];return he({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:ui,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var NP=$n.styles;function Iy(n){var e=_e.autoReplaceSvg==="nest"?Iv(n,{styleParser:!1}):Iv(n);return~e.extra.classes.indexOf(py)?ki("generateLayersText",n,e):ki("generateSvgReplacementMutation",n,e)}var wr=new Set;dp.map(function(n){wr.add("fa-".concat(n))});Object.keys(Po[at]).map(wr.add.bind(wr));Object.keys(Po[yt]).map(wr.add.bind(wr));wr=il(wr);function Nv(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gi)return Promise.resolve();var t=ot.documentElement.classList,i=function(f){return t.add("".concat(Sv,"-").concat(f))},r=function(f){return t.remove("".concat(Sv,"-").concat(f))},s=_e.autoFetchSvg?wr:dp.map(function(u){return"fa-".concat(u)}).concat(Object.keys(NP));s.includes("fa")||s.push("fa");var a=[".".concat(py,":not([").concat(os,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(os,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Oa(n.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();var l=yp.begin("onTree"),c=o.reduce(function(u,f){try{var d=Iy(f);d&&u.push(d)}catch(p){hy||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){Py(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function DP(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Iy(n).then(function(t){t&&Py([t],e)})}function UP(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Ud(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Ud(r||{})),n(i,he(he({},t),{},{mask:r}))}}var OP=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?ui:i,s=t.symbol,a=s===void 0?!1:s,o=t.mask,l=o===void 0?null:o,c=t.maskId,u=c===void 0?null:c,f=t.title,d=f===void 0?null:f,p=t.titleId,g=p===void 0?null:p,y=t.classes,m=y===void 0?[]:y,h=t.attributes,v=h===void 0?{}:h,_=t.styles,x=_===void 0?{}:_;if(e){var S=e.prefix,b=e.iconName,T=e.icon;return Su(he({type:"icon"},e),function(){return ls("beforeDOMElementCreation",{iconDefinition:e,params:t}),_e.autoA11y&&(d?v["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(g||Do()):(v["aria-hidden"]="true",v.focusable="false")),_p({icons:{main:Od(T),mask:l?Od(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:b,transform:he(he({},ui),r),symbol:a,title:d,maskId:u,titleId:g,extra:{attributes:v,styles:x,classes:m}})})}},kP={mixout:function(){return{icon:UP(OP)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Nv,t.nodeCallback=DP,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?ot:i,s=t.callback,a=s===void 0?function(){}:s;return Nv(r,a)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,s=i.title,a=i.titleId,o=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,g){Promise.all([kd(r,o),u.iconName?kd(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var m=lp(y,2),h=m[0],v=m[1];p([t,_p({icons:{main:h,mask:v},prefix:o,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:a,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.transform,o=t.styles,l=_u(o);l.length>0&&(r.style=l);var c;return pp(a)&&(c=ki("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},FP={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Su({type:"layer"},function(){ls("beforeDOMElementCreation",{assembler:t,params:i});var a=[];return t(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers")].concat(il(s)).join(" ")},children:a}]})}}}},BP={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,a=i.classes,o=a===void 0?[]:a,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Su({type:"counter",content:t},function(){return ls("beforeDOMElementCreation",{content:t,params:i}),_P({content:t.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(_e.cssPrefix,"-layers-counter")].concat(il(o))}})})}}}},zP={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?ui:r,a=i.title,o=a===void 0?null:a,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return Su({type:"text",content:t},function(){return ls("beforeDOMElementCreation",{content:t,params:i}),bv({content:t,transform:he(he({},ui),s),title:o,extra:{attributes:f,styles:p,classes:["".concat(_e.cssPrefix,"-layers-text")].concat(il(c))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.title,s=i.transform,a=i.extra,o=null,l=null;if(uy){var c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/c,l=u.height/c}return _e.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,bv({content:t.innerHTML,width:o,height:l,transform:s,title:r,extra:a,watchable:!0})])}}},HP=new RegExp('"',"ug"),Dv=[1105920,1112319];function VP(n){var e=n.replace(HP,""),t=tP(e,0),i=t>=Dv[0]&&t<=Dv[1],r=e.length===2?e[0]===e[1]:!1;return{value:Id(r?e[0]:e),isSecondary:i||r}}function Uv(n,e){var t="".concat(PC).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var s=Oa(n.children),a=s.filter(function(T){return T.getAttribute(Ld)===e})[0],o=Mr.getComputedStyle(n,e),l=o.getPropertyValue("font-family").match(UC),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!l)return n.removeChild(a),i();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?yt:at,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Lo[d][l[2].toLowerCase()]:OC[d][c],g=VP(f),y=g.value,m=g.isSecondary,h=l[0].startsWith("FontAwesome"),v=gp(p,y),_=v;if(h){var x=lP(y);x.iconName&&x.prefix&&(v=x.iconName,p=x.prefix)}if(v&&!m&&(!a||a.getAttribute(up)!==p||a.getAttribute(fp)!==_)){n.setAttribute(t,_),a&&n.removeChild(a);var S=IP(),b=S.extra;b.attributes[Ld]=e,kd(v,p).then(function(T){var L=_p(he(he({},S),{},{icons:{main:T,mask:vp()},prefix:p,iconName:_,extra:b,watchable:!0})),M=ot.createElement("svg");e==="::before"?n.insertBefore(M,n.firstChild):n.appendChild(M),M.outerHTML=L.map(function(A){return sl(A)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function GP(n){return Promise.all([Uv(n,"::before"),Uv(n,"::after")])}function WP(n){return n.parentNode!==document.head&&!~IC.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Ld)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Ov(n){if(Gi)return new Promise(function(e,t){var i=Oa(n.querySelectorAll("*")).filter(WP).map(GP),r=yp.begin("searchPseudoElements");Ly(),Promise.all(i).then(function(){r(),Bd(),e()}).catch(function(){r(),Bd(),t()})})}var jP={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ov,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?ot:i;_e.searchPseudoElements&&Ov(r)}}},kv=!1,XP={mixout:function(){return{dom:{unwatch:function(){Ly(),kv=!0}}}},hooks:function(){return{bootstrap:function(){Lv(Dd("mutationObserverCallbacks",{}))},noAuto:function(){RP()},watch:function(t){var i=t.observeMutationsRoot;kv?Bd():Lv(Dd("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Fv=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return i.flipX=!0,i;if(a&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(a){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},t)},YP={mixout:function(){return{parse:{transform:function(t){return Fv(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=Fv(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,s=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(a/2*-1," -256)")},p={outer:o,inner:f,path:d};return{tag:"g",attributes:he({},p.outer),children:[{tag:"g",attributes:he({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:he(he({},i.icon.attributes),p.path)}]}]}}}},Pf={x:0,y:0,width:"100%",height:"100%"};function Bv(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function $P(n){return n.tag==="g"?n.children:[n]}var qP={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),s=r?xu(r.split(" ").map(function(a){return a.trim()})):vp();return s.prefix||(s.prefix=Er()),t.mask=s,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.mask,o=t.maskId,l=t.transform,c=s.width,u=s.icon,f=a.width,d=a.icon,p=YC({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:he(he({},Pf),{},{fill:"white"})},y=u.children?{children:u.children.map(Bv)}:{},m={tag:"g",attributes:he({},p.inner),children:[Bv(he({tag:u.tag,attributes:he(he({},u.attributes),p.path)},y))]},h={tag:"g",attributes:he({},p.outer),children:[m]},v="mask-".concat(o||Do()),_="clip-".concat(o||Do()),x={tag:"mask",attributes:he(he({},Pf),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,h]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:$P(d)},x]};return i.push(S,{tag:"rect",attributes:he({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(v,")")},Pf)}),{children:i,attributes:r}}}},KP={provides:function(e){var t=!1;Mr.matchMedia&&(t=Mr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:he(he({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=he(he({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:he(he({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:he(he({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:he(he({},a),{},{values:"1;0;1;1;0;1;"})}),i.push(o),i.push({tag:"path",attributes:he(he({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:he(he({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:he(he({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:he(he({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},ZP={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},QP=[KC,kP,FP,BP,zP,jP,XP,YP,qP,KP,ZP];fP(QP,{mixoutsTo:Tn});Tn.noAuto;Tn.config;Tn.library;Tn.dom;var zd=Tn.parse;Tn.findIconDefinition;Tn.toHtml;var JP=Tn.icon;Tn.layer;Tn.text;Tn.counter;var Ny={exports:{}},eL="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tL=eL,nL=tL;function Dy(){}function Uy(){}Uy.resetWarningCache=Dy;var iL=function(){function n(i,r,s,a,o,l){if(l!==nL){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Uy,resetWarningCache:Dy};return t.PropTypes=t,t};Ny.exports=iL();var rL=Ny.exports;const Ve=$_(rL);function zv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function lr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zv(Object(t),!0).forEach(function(i){js(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):zv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Bc(n){"@babel/helpers - typeof";return Bc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bc(n)}function js(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function sL(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function aL(n,e){if(n==null)return{};var t=sL(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Hd(n){return oL(n)||lL(n)||cL(n)||uL()}function oL(n){if(Array.isArray(n))return Vd(n)}function lL(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function cL(n,e){if(n){if(typeof n=="string")return Vd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Vd(n,e)}}function Vd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function uL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fL(n){var e,t=n.beat,i=n.fade,r=n.beatFade,s=n.bounce,a=n.shake,o=n.flash,l=n.spin,c=n.spinPulse,u=n.spinReverse,f=n.pulse,d=n.fixedWidth,p=n.inverse,g=n.border,y=n.listItem,m=n.flip,h=n.size,v=n.rotation,_=n.pull,x=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":a,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":g,"fa-li":y,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},js(e,"fa-".concat(h),typeof h<"u"&&h!==null),js(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),js(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),js(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(x).map(function(S){return x[S]?S:null}).filter(function(S){return S})}function dL(n){return n=n-0,n===n}function Oy(n){return dL(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var hL=["style"];function pL(n){return n.charAt(0).toUpperCase()+n.slice(1)}function mL(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=Oy(t.slice(0,i)),s=t.slice(i+1).trim();return r.startsWith("webkit")?e[pL(r)]=s:e[r]=s,e},{})}function ky(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return ky(n,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=mL(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Oy(c)]=u}return l},{attrs:{}}),s=t.style,a=s===void 0?{}:s,o=aL(t,hL);return r.attrs.style=lr(lr({},r.attrs.style),a),n.apply(void 0,[e.tag,lr(lr({},r.attrs),o)].concat(Hd(i)))}var Fy=!1;try{Fy=!0}catch{}function gL(){if(!Fy&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Hv(n){if(n&&Bc(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(zd.icon)return zd.icon(n);if(n===null)return null;if(n&&Bc(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Lf(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?js({},n,e):{}}var Ot=zh.forwardRef(function(n,e){var t=n.icon,i=n.mask,r=n.symbol,s=n.className,a=n.title,o=n.titleId,l=n.maskId,c=Hv(t),u=Lf("classes",[].concat(Hd(fL(n)),Hd(s.split(" ")))),f=Lf("transform",typeof n.transform=="string"?zd.transform(n.transform):n.transform),d=Lf("mask",Hv(i)),p=JP(c,lr(lr(lr(lr({},u),f),d),{},{symbol:r,title:a,titleId:o,maskId:l}));if(!p)return gL("Could not find icon",c),null;var g=p.abstract,y={ref:e};return Object.keys(n).forEach(function(m){Ot.defaultProps.hasOwnProperty(m)||(y[m]=n[m])}),vL(g[0],y)});Ot.displayName="FontAwesomeIcon";Ot.propTypes={beat:Ve.bool,border:Ve.bool,beatFade:Ve.bool,bounce:Ve.bool,className:Ve.string,fade:Ve.bool,flash:Ve.bool,mask:Ve.oneOfType([Ve.object,Ve.array,Ve.string]),maskId:Ve.string,fixedWidth:Ve.bool,inverse:Ve.bool,flip:Ve.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ve.oneOfType([Ve.object,Ve.array,Ve.string]),listItem:Ve.bool,pull:Ve.oneOf(["right","left"]),pulse:Ve.bool,rotation:Ve.oneOf([0,90,180,270]),shake:Ve.bool,size:Ve.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ve.bool,spinPulse:Ve.bool,spinReverse:Ve.bool,symbol:Ve.oneOfType([Ve.bool,Ve.string]),title:Ve.string,titleId:Ve.string,transform:Ve.oneOfType([Ve.string,Ve.object]),swapOpacity:Ve.bool};Ot.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var vL=ky.bind(null,zh.createElement),By={prefix:"fab",iconName:"github-alt",icon:[480,512,[],"f113","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},zy={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Hy={prefix:"fab",iconName:"itch-io",icon:[512,512,[],"f83a","M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"]},Vy={prefix:"fab",iconName:"google-play",icon:[512,512,[],"f3ab","M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"]},Gy={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},Wy={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},jy={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};function _L(n){window.open(n)}function yL(n){if(n==null||n==null)return;const e=n==null?void 0:n.map((t,i)=>C.jsx("div",{style:{backgroundImage:`url(${t.image_sm})`},children:C.jsx("img",{loading:"lazy",onClick:()=>_L(t.image),src:t.image,alt:"no image found"})},i));return C.jsx("div",{className:"gallery",children:e})}function xL(n){switch(n||(n=""),n){case"faLinkedinIn":return C.jsx(Ot,{icon:zy,bounce:!0});case"faGooglePlay":return C.jsx(Ot,{icon:Vy,bounce:!0});case"faGithubAlt":return C.jsx(Ot,{icon:By,bounce:!0});case"faEnvelope":return C.jsx(Ot,{icon:jy,bounce:!0});case"faYoutube":return C.jsx(Ot,{icon:Gy,bounce:!0});case"faItchIo":return C.jsx(Ot,{icon:Hy,bounce:!0});default:return C.jsx(Ot,{icon:Wy,bounce:!0})}}const Qi=({title:n,contents:e,links:t,images:i,alignType:r="full",setSection:s,idsection:a=0})=>{const o=d=>{d&&(s==null||s(a))},{ref:l,inView:c}=sy({onChange:o}),u=r=="left"?"alignLeft":r=="right"?"alignRight":"full",f=yL(i);return C.jsx(C.Fragment,{children:C.jsx("section",{id:n,ref:l,className:`gridsection ${c?"inView":""}`,children:C.jsxs("div",{className:`contentCard ${u}`,children:[C.jsx("h1",{children:n}),e==null?void 0:e.map((d,p)=>C.jsx("p",{children:d},p)),C.jsx("div",{className:"linkflex",children:t==null?void 0:t.map((d,p)=>C.jsxs("a",{href:d.link,target:"_blank",children:[xL(d.icon)," ",d.title]},p))}),f]})})})},K="/images/",If={title:"¡Welcome!",contents:["Feel free to browse the site and find something that interests you. ✌🏽"],links:[],images:[]},ql={title:"¡Hi!",contents:["My name is Francisco Emmanuel Castañeda López but my friends call me CHINO 😅","🤓 I am a programmer who aspires to be a technical artist ","🎮 I studied programming focused on videogames at UNIAT.","🕹 I have experience working in Unity with C# and Unreal Engine mostly with its Blueprints system.","⚛ I took a course on React, Javascript, MongoDB and authentication in Firebase.","💻 I am very interested in shaders and how computer graphics work.","💃🕺 Finally and completely unrelated I like dancing, martial arts, eating and rock climbing :D","I invite you, if you are interested in what you see here, to take a look at my previous work"],links:[{title:"frank.castaneda.g@gmail.com",link:"frank.castaneda.g@gmail.com",icon:"faEnvelope"},{title:"LinkedIn",link:"https://www.linkedin.com/in/francisco-emmanuel-castañeda-lópez-550b07251",icon:"faLinkedinIn"},{title:"CHI-NO",link:"https://www.youtube.com/@ReverseChin0",icon:"faYoutube"},{title:"Github",link:"https://github.com/ReverseChin0",icon:"faGithubAlt"},{title:"Itch.io",link:"https://reversechin0.itch.io/",icon:"faItchIo"}],images:[{image:K+"about/CV_2023_Francisco.jpg",image_sm:K+"about/CV_2023_Francisco_sm.jpg"},{image:K+"about/FotoChida_opt.jpg",image_sm:K+"about/FotoChida_opt_sm.jpg"},{image:K+"about/ReactCertificate.jpg",image_sm:K+"about/BlenderCertificate_sm.jpg"},{image:K+"about/BlenderCertificate.jpg",image_sm:K+"about/BlenderCertificate_sm.jpg"}]},Nf={title:"Character customization",contents:["This is a project I am doing for my degree, the objective was to achieve a high level of customization"],images:[{image:K+"experiments/boxing_1.jpg",image_sm:K+"experiments/boxing_1_sm.jpg"},{image:K+"experiments/boxing_2.jpg",image_sm:K+"experiments/boxing_2_sm.jpg"},{image:K+"experiments/boxing_3.jpg",image_sm:K+"experiments/boxing_3_sm.jpg"}]},Df={title:"Assertive Soccer",contents:["A small game made for Familia Incluyente A.C. modeled and programmed by me."],images:[{image:K+"futbol/futbol-1.jpg",image_sm:K+"futbol/futbol-1_sm.jpg"},{image:K+"futbol/futbol-2.jpg",image_sm:K+"futbol/futbol-2_sm.jpg"},{image:K+"futbol/futbol-3.jpg",image_sm:K+"futbol/futbol-3_sm.jpg"}]},Uf={title:"Substance Designer",contents:["Materials made in substance designer, here I learned how PBR materials work in the metallic-roughness and specular-glossines workflow."],images:[{image:K+"shaderVariety/subDesignMats_1.jpg",image_sm:K+"shaderVariety/subDesignMats_1_sm.jpg"},{image:K+"shaderVariety/subDesignMats_2.jpg",image_sm:K+"shaderVariety/subDesignMats_2_sm.jpg"}]},Of={title:"Shaders",contents:["Some Shaders that I have made at school and in my spare time ヾ(•ω•`)o"],images:[{image:K+"shaderVariety/ditherShader_0.jpg",image_sm:K+"shaderVariety/ditherShader_0_sm.jpg"},{image:K+"shaderVariety/shadervariety_1.jpg",image_sm:K+"shaderVariety/shadervariety_1_sm.jpg"},{image:K+"shaderVariety/shadervariety_2.jpg",image_sm:K+"shaderVariety/shadervariety_2_sm.jpg"},{image:K+"shaderVariety/shadervariety_3.jpg",image_sm:K+"shaderVariety/shadervariety_3_sm.jpg"}]},kf={title:"A Few Experiments",contents:["Experiments with shaders, meshes, inverse kinematics, etcetera"],images:[{image:K+"experiments/spider.gif",image_sm:K+"experiments/matrixProjection_sm.jpg"},{image:K+"experiments/matrixProjection.jpg",image_sm:K+"experiments/matrixProjection_sm.jpg"},{image:K+"experiments/mesh-Deform.jpg",image_sm:K+"experiments/mesh-Deform_sm.jpg"},{image:K+"experiments/customLighting.jpg",image_sm:K+"experiments/customLighting_sm.jpg"}]},Ff={title:"3D Modeling",contents:["Models I have made"],images:[{image:K+"models/BattleAxe.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/rifleShaded.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Boss.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Charm.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Chunky.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Cozy.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Dance.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Ethereal.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/World.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Gate_Kurisu3.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Grave.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Harvest_skin.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Illusion.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Leap.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/magic.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Mask.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Porthole.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/pretend.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Blend1.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/rifleHiPoly.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Shy.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Shy2.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Soft.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Soft2.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/spirit.jpg",image_sm:K+"models/World_sm.jpg"},{image:K+"models/Gate_Kurisu1.jpg",image_sm:K+"models/World_sm.jpg"}]},Bf={title:"Web Developments",introduction:"The following websites were made while I was still learning react",contentGroups:[{contentTitle:"Gifexpert",content:"A React application that searches Gifs（⊙ｏ⊙）",linkTitle:"Gifexpert",link:"https://reversechin0.github.io/react-gifexpert",images:[{image:K+"webpages/gifexpert1.jpg",image_sm:K+"webpages/gifexpert1_sm.jpg"}]},{contentTitle:"MERN-Calendar",content:"Backend application that saves events in a calendar, uses Redux, Express and MongoDB and you need to authenticate User (⓿_⓿)",linkTitle:"MERN-Calendar (may take a while to load)",link:"https://mern-calendar-chino.herokuapp.com/auth/login",images:[{image:K+"webpages/mern1.jpg",image_sm:K+"webpages/mern1_sm.jpg"},{image:K+"webpages/mern2.jpg",image_sm:K+"webpages/mern2_sm.jpg"},{image:K+"webpages/mern3.jpg",image_sm:K+"webpages/mern3_sm.jpg"}]},{contentTitle:"SPA_Heroes",content:"Application with simple authentication showing a repertoire of super heroes (✿◡‿◡)",linkTitle:"SPA_Heroes",link:"https://reversechin0.github.io/spa_heroes",images:[{image:K+"webpages/HeroesSPA1.jpg",image_sm:K+"webpages/HeroesSPA1_sm.jpg"}]},{contentTitle:"Previous Portfolio",content:"My previous home page 😅",linkTitle:"I don't have it anymore, but here is my Github repository",link:"https://reversechin0.github.io/",images:[{image:K+"webpages/legacy1.jpg",image_sm:K+"webpages/legacy1_sm.jpg"},{image:K+"webpages/legacy2.jpg",image_sm:K+"webpages/legacy2_sm.jpg"},{image:K+"webpages/legacy3.jpg",image_sm:K+"webpages/legacy3_sm.jpg"}]}]};function SL(n){window.open(n)}function ML(n){if(n==null||n==null)return;const e=n==null?void 0:n.map((t,i)=>C.jsx("div",{style:{backgroundImage:`url(${t.image_sm})`},children:C.jsx("img",{loading:"lazy",onClick:()=>SL(t.image),src:t.image,alt:"no image found"})},i));return C.jsx("div",{className:"gallerySmall",children:e})}function EL(n){switch(n||(n=""),n){case"faLinkedinIn":return C.jsx(Ot,{icon:zy,bounce:!0});case"faGooglePlay":return C.jsx(Ot,{icon:Vy,bounce:!0});case"faGithubAlt":return C.jsx(Ot,{icon:By,bounce:!0});case"faEnvelope":return C.jsx(Ot,{icon:jy,bounce:!0});case"faYoutube":return C.jsx(Ot,{icon:Gy,bounce:!0});case"faItchIo":return C.jsx(Ot,{icon:Hy,bounce:!0});default:return C.jsx(Ot,{icon:Wy,bounce:!0})}}const wL=({title:n,introduction:e,contentGroups:t,setSection:i,idsection:r=0})=>{const s=l=>{l&&(i==null||i(r))},{ref:a,inView:o}=sy({onChange:s});return C.jsx(C.Fragment,{children:C.jsx("section",{id:n,ref:a,className:`gridsection ${o?"inView":""}`,children:C.jsxs("div",{className:"contentCard full",children:[C.jsx("h1",{children:n}),C.jsx("p",{children:e}),t==null?void 0:t.map((l,c)=>{const u=ML(l.images);return C.jsxs("div",{children:[C.jsx("hr",{}),C.jsx("br",{}),u,C.jsx("h3",{children:l.contentTitle}),C.jsx("p",{children:l.content}),C.jsx("div",{className:"linkflex",children:C.jsxs("a",{href:l.link,target:"_blank",children:[EL(l.icon)," ",l.linkTitle]})}),C.jsx("div",{className:"spacer"})]},`${l.contentTitle}${c}`)})]})})})},TL=({currentSect:n})=>{const[e,t]=oe.useState(0),i=s=>{t(s),n(s)},r=s=>{const a=document.getElementById(s);a&&a.scrollIntoView({behavior:"smooth"})};return C.jsx(C.Fragment,{children:C.jsxs("main",{children:[C.jsx(mC,{activeSection:e,scrollHandler:r}),C.jsx("div",{className:"spacer"}),C.jsx(Qi,{title:If.title,contents:If.contents,links:If.links,alignType:"full",idsection:0,setSection:i}),C.jsx(Qi,{title:ql.title,contents:ql.contents,links:ql.links,images:ql.images,alignType:"full",idsection:1,setSection:i}),C.jsx(wL,{title:Bf.title,introduction:Bf.introduction,contentGroups:Bf.contentGroups,idsection:2,setSection:i}),C.jsx(Qi,{title:Df.title,contents:Df.contents,images:Df.images,alignType:"right",idsection:3,setSection:i}),C.jsx(Qi,{title:Nf.title,contents:Nf.contents,images:Nf.images,alignType:"right",idsection:4,setSection:i}),C.jsx(Qi,{title:Of.title,contents:Of.contents,images:Of.images,alignType:"full",idsection:5,setSection:i}),C.jsx(Qi,{title:Ff.title,contents:Ff.contents,images:Ff.images,alignType:"left",idsection:6,setSection:i}),C.jsx(Qi,{title:Uf.title,contents:Uf.contents,images:Uf.images,alignType:"left",idsection:7,setSection:i}),C.jsx(Qi,{title:kf.title,contents:kf.contents,images:kf.images,alignType:"full",idsection:8,setSection:i}),C.jsx("div",{className:"lg-spacer"}),C.jsx(xM,{to:"/privacyfutbol",children:"Privacy"})]})})};function AL(){const n=oe.useRef(null),e=t=>{var i;(i=n.current)==null||i.childFunction(t)};return C.jsxs(C.Fragment,{children:[C.jsx(pC,{ref:n}),C.jsx(TL,{currentSect:e})]})}const bL=()=>C.jsx("main",{children:C.jsx("section",{className:"gridsection inView",children:C.jsxs("div",{className:"contentCard Privacy",children:[C.jsx("h1",{children:"Privacy Policy"}),C.jsx("p",{children:"Last updated: July 24, 2023"}),C.jsx("p",{children:"This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."}),C.jsxs("p",{children:["We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the ",C.jsx("a",{href:"https://www.freeprivacypolicy.com/free-privacy-policy-generator/",target:"_blank",children:"Free Privacy Policy Generator"}),"."]}),C.jsx("h1",{children:"Interpretation and Definitions"}),C.jsx("h2",{children:"Interpretation"}),C.jsx("p",{children:"The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."}),C.jsx("h2",{children:"Definitions"}),C.jsx("p",{children:"For the purposes of this Privacy Policy:"}),C.jsxs("ul",{children:[C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Account"})," means a unique account created for You to access our Service or parts of our Service."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Affiliate"}),' means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.']})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Application"})," refers to Futbol Asertivo, the software program provided by the Company."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Company"}),' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Futbol Asertivo.']})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Country"})," refers to:  Mexico"]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Device"})," means any device that can access the Service such as a computer, a cellphone or a digital tablet."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Personal Data"})," is any information that relates to an identified or identifiable individual."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Service"})," refers to the Application."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Service Provider"})," means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"Usage Data"})," refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"You"})," means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."]})})]}),C.jsx("h1",{children:"Collecting and Using Your Personal Data"}),C.jsx("h2",{children:"Types of Data Collected"}),C.jsx("h3",{children:"Personal Data"}),C.jsx("p",{children:"While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:"}),C.jsx("ul",{children:C.jsx("li",{children:"Usage Data"})}),C.jsx("h3",{children:"Usage Data"}),C.jsx("p",{children:"Usage Data is collected automatically when using the Service."}),C.jsx("p",{children:"Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data."}),C.jsx("p",{children:"When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data."}),C.jsx("p",{children:"We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."}),C.jsx("h2",{children:"Use of Your Personal Data"}),C.jsx("p",{children:"The Company may use Personal Data for the following purposes:"}),C.jsxs("ul",{children:[C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"To provide and maintain our Service"}),", including to monitor the usage of our Service."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"To manage Your Account:"})," to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"For the performance of a contract:"})," the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"To contact You:"})," To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"To provide You"})," with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"To manage Your requests:"})," To attend and manage Your requests to Us."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"For business transfers:"})," We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred."]})}),C.jsx("li",{children:C.jsxs("p",{children:[C.jsx("strong",{children:"For other purposes"}),": We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience."]})})]}),C.jsx("p",{children:"We may share Your personal information in the following situations:"}),C.jsxs("ul",{children:[C.jsxs("li",{children:[C.jsx("strong",{children:"With Service Providers:"})," We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You."]}),C.jsxs("li",{children:[C.jsx("strong",{children:"For business transfers:"})," We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company."]}),C.jsxs("li",{children:[C.jsx("strong",{children:"With Affiliates:"})," We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us."]}),C.jsxs("li",{children:[C.jsx("strong",{children:"With business partners:"})," We may share Your information with Our business partners to offer You certain products, services or promotions."]}),C.jsxs("li",{children:[C.jsx("strong",{children:"With other users:"})," when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside."]}),C.jsxs("li",{children:[C.jsx("strong",{children:"With Your consent"}),": We may disclose Your personal information for any other purpose with Your consent."]})]}),C.jsx("h2",{children:"Retention of Your Personal Data"}),C.jsx("p",{children:"The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."}),C.jsx("p",{children:"The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods."}),C.jsx("h2",{children:"Transfer of Your Personal Data"}),C.jsx("p",{children:"Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction."}),C.jsx("p",{children:"Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."}),C.jsx("p",{children:"The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."}),C.jsx("h2",{children:"Delete Your Personal Data"}),C.jsx("p",{children:"You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You."}),C.jsx("p",{children:"Our Service may give You the ability to delete certain information about You from within the Service."}),C.jsx("p",{children:"You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us."}),C.jsx("p",{children:"Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so."}),C.jsx("h2",{children:"Disclosure of Your Personal Data"}),C.jsx("h3",{children:"Business Transactions"}),C.jsx("p",{children:"If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."}),C.jsx("h3",{children:"Law enforcement"}),C.jsx("p",{children:"Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."}),C.jsx("h3",{children:"Other legal requirements"}),C.jsx("p",{children:"The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:"}),C.jsxs("ul",{children:[C.jsx("li",{children:"Comply with a legal obligation"}),C.jsx("li",{children:"Protect and defend the rights or property of the Company"}),C.jsx("li",{children:"Prevent or investigate possible wrongdoing in connection with the Service"}),C.jsx("li",{children:"Protect the personal safety of Users of the Service or the public"}),C.jsx("li",{children:"Protect against legal liability"})]}),C.jsx("h2",{children:"Security of Your Personal Data"}),C.jsx("p",{children:"The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."}),C.jsx("h1",{children:"Children's Privacy"}),C.jsx("p",{children:"Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers."}),C.jsx("p",{children:"If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information."}),C.jsx("h1",{children:"Links to Other Websites"}),C.jsx("p",{children:"Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit."}),C.jsx("p",{children:"We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."}),C.jsx("h1",{children:"Changes to this Privacy Policy"}),C.jsx("p",{children:"We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page."}),C.jsx("p",{children:'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.'}),C.jsx("p",{children:"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."}),C.jsx("h1",{children:"Contact Us"}),C.jsx("p",{children:"If you have any questions about this Privacy Policy, You can contact us:"}),C.jsx("ul",{children:C.jsx("li",{children:"By email: revrschino@gmail.com"})})]})})}),RL=()=>C.jsxs(uM,{children:[C.jsx(hd,{path:"/*",element:C.jsx(AL,{})}),C.jsx(hd,{path:"/privacyfutbol",element:C.jsx(bL,{})})]});var Gd={},Xy={exports:{}},An={},Yy={exports:{}},$y={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,G){var H=I.length;I.push(G);e:for(;0<H;){var U=H-1>>>1,z=I[U];if(0<r(z,G))I[U]=G,I[H]=z,H=U;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],H=I.pop();if(H!==G){I[0]=H;e:for(var U=0,z=I.length,ae=z>>>1;U<ae;){var re=2*(U+1)-1,de=I[re],ye=re+1,Ce=I[ye];if(0>r(de,H))ye<z&&0>r(Ce,de)?(I[U]=Ce,I[ye]=H,U=ye):(I[U]=de,I[re]=H,U=re);else if(ye<z&&0>r(Ce,H))I[U]=Ce,I[ye]=H,U=ye;else break e}}return G}function r(I,G){var H=I.sortIndex-G.sortIndex;return H!==0?H:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var G=t(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=I)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(c)}}function x(I){if(y=!1,_(I),!g)if(t(l)!==null)g=!0,Q(S);else{var G=t(c);G!==null&&Y(x,G.startTime-I)}}function S(I,G){g=!1,y&&(y=!1,h(L),L=-1),p=!0;var H=d;try{for(_(G),f=t(l);f!==null&&(!(f.expirationTime>G)||I&&!Z());){var U=f.callback;if(typeof U=="function"){f.callback=null,d=f.priorityLevel;var z=U(f.expirationTime<=G);G=n.unstable_now(),typeof z=="function"?f.callback=z:f===t(l)&&i(l),_(G)}else i(l);f=t(l)}if(f!==null)var ae=!0;else{var re=t(c);re!==null&&Y(x,re.startTime-G),ae=!1}return ae}finally{f=null,d=H,p=!1}}var b=!1,T=null,L=-1,M=5,A=-1;function Z(){return!(n.unstable_now()-A<M)}function J(){if(T!==null){var I=n.unstable_now();A=I;var G=!0;try{G=T(!0,I)}finally{G?B():(b=!1,T=null)}}else b=!1}var B;if(typeof v=="function")B=function(){v(J)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,O=W.port2;W.port1.onmessage=J,B=function(){O.postMessage(null)}}else B=function(){m(J,0)};function Q(I){T=I,b||(b=!0,B())}function Y(I,G){L=m(function(){I(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,Q(S))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var H=d;d=G;try{return I()}finally{d=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=d;d=I;try{return G()}finally{d=H}},n.unstable_scheduleCallback=function(I,G,H){var U=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?U+H:U):H=U,I){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=H+z,I={id:u++,callback:G,priorityLevel:I,startTime:H,expirationTime:z,sortIndex:-1},H>U?(I.sortIndex=H,e(c,I),t(l)===null&&I===t(c)&&(y?(h(L),L=-1):y=!0,Y(x,H-U))):(I.sortIndex=z,e(l,I),g||p||(g=!0,Q(S))),I},n.unstable_shouldYield=Z,n.unstable_wrapCallback=function(I){var G=d;return function(){var H=d;d=G;try{return I.apply(this,arguments)}finally{d=H}}}})($y);Yy.exports=$y;var CL=Yy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=oe,wn=CL;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ky=new Set,Uo={};function _s(n,e){wa(n,e),wa(n+"Capture",e)}function wa(n,e){for(Uo[n]=e,n=0;n<e.length;n++)Ky.add(e[n])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wd=Object.prototype.hasOwnProperty,PL=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vv={},Gv={};function LL(n){return Wd.call(Gv,n)?!0:Wd.call(Vv,n)?!1:PL.test(n)?Gv[n]=!0:(Vv[n]=!0,!1)}function IL(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function NL(n,e,t,i){if(e===null||typeof e>"u"||IL(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Gt[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Gt[e]=new ln(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Gt[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Gt[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Gt[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Gt[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Gt[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Gt[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Gt[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var Sp=/[\-:]([a-z])/g;function Mp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Sp,Mp);Gt[e]=new ln(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Sp,Mp);Gt[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Sp,Mp);Gt[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Gt[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Gt[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ep(n,e,t,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NL(e,t,r,i)&&(t=null),i||r===null?LL(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Wi=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kl=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),Zy=Symbol.for("react.provider"),Qy=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Ap=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Jy=Symbol.for("react.offscreen"),Wv=Symbol.iterator;function $a(n){return n===null||typeof n!="object"?null:(n=Wv&&n[Wv]||n["@@iterator"],typeof n=="function"?n:null)}var mt=Object.assign,zf;function ro(n){if(zf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);zf=e&&e[1]||""}return`
`+zf+n}var Hf=!1;function Vf(n,e){if(!n||Hf)return"";Hf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Hf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ro(n):""}function DL(n){switch(n.tag){case 5:return ro(n.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return n=Vf(n.type,!1),n;case 11:return n=Vf(n.type.render,!1),n;case 1:return n=Vf(n.type,!0),n;default:return""}}function $d(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ys:return"Fragment";case Xs:return"Portal";case jd:return"Profiler";case wp:return"StrictMode";case Xd:return"Suspense";case Yd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Qy:return(n.displayName||"Context")+".Consumer";case Zy:return(n._context.displayName||"Context")+".Provider";case Tp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ap:return e=n.displayName||null,e!==null?e:$d(n.type)||"Memo";case nr:e=n._payload,n=n._init;try{return $d(n(e))}catch{}}return null}function UL(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ex(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OL(n){var e=ex(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Zl(n){n._valueTracker||(n._valueTracker=OL(n))}function tx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ex(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function zc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function qd(n,e){var t=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function jv(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Tr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nx(n,e){e=e.checked,e!=null&&Ep(n,"checked",e,!1)}function Kd(n,e){nx(n,e);var t=Tr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Zd(n,e.type,t):e.hasOwnProperty("defaultValue")&&Zd(n,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Xv(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Zd(n,e,t){(e!=="number"||zc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var so=Array.isArray;function la(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Tr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Qd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Yv(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(so(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Tr(t)}}function ix(n,e){var t=Tr(e.value),i=Tr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function $v(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function rx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?rx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ql,sx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ql=Ql||document.createElement("div"),Ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ql.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Oo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kL=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(n){kL.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),po[e]=po[n]})});function ax(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||po.hasOwnProperty(n)&&po[n]?(""+e).trim():e+"px"}function ox(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=ax(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var FL=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(n,e){if(e){if(FL[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function th(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function bp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ih=null,ca=null,ua=null;function qv(n){if(n=ll(n)){if(typeof ih!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Au(e),ih(n.stateNode,n.type,e))}}function lx(n){ca?ua?ua.push(n):ua=[n]:ca=n}function cx(){if(ca){var n=ca,e=ua;if(ua=ca=null,qv(n),e)for(n=0;n<e.length;n++)qv(e[n])}}function ux(n,e){return n(e)}function fx(){}var Gf=!1;function dx(n,e,t){if(Gf)return n(e,t);Gf=!0;try{return ux(n,e,t)}finally{Gf=!1,(ca!==null||ua!==null)&&(fx(),cx())}}function ko(n,e){var t=n.stateNode;if(t===null)return null;var i=Au(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var rh=!1;if(Fi)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){rh=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{rh=!1}function BL(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var mo=!1,Hc=null,Vc=!1,sh=null,zL={onError:function(n){mo=!0,Hc=n}};function HL(n,e,t,i,r,s,a,o,l){mo=!1,Hc=null,BL.apply(zL,arguments)}function VL(n,e,t,i,r,s,a,o,l){if(HL.apply(this,arguments),mo){if(mo){var c=Hc;mo=!1,Hc=null}else throw Error(ee(198));Vc||(Vc=!0,sh=c)}}function ys(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function hx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Kv(n){if(ys(n)!==n)throw Error(ee(188))}function GL(n){var e=n.alternate;if(!e){if(e=ys(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Kv(r),n;if(s===i)return Kv(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function px(n){return n=GL(n),n!==null?mx(n):null}function mx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=mx(n);if(e!==null)return e;n=n.sibling}return null}var gx=wn.unstable_scheduleCallback,Zv=wn.unstable_cancelCallback,WL=wn.unstable_shouldYield,jL=wn.unstable_requestPaint,St=wn.unstable_now,XL=wn.unstable_getCurrentPriorityLevel,Rp=wn.unstable_ImmediatePriority,vx=wn.unstable_UserBlockingPriority,Gc=wn.unstable_NormalPriority,YL=wn.unstable_LowPriority,_x=wn.unstable_IdlePriority,Mu=null,fi=null;function $L(n){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(Mu,n,void 0,(n.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:ZL,qL=Math.log,KL=Math.LN2;function ZL(n){return n>>>=0,n===0?32:31-(qL(n)/KL|0)|0}var Jl=64,ec=4194304;function ao(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=ao(o):(s&=a,s!==0&&(i=ao(s)))}else a=t&~r,a!==0?i=ao(a):s!==0&&(i=ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Qn(e),r=1<<t,i|=n[t],e&=~r;return i}function QL(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JL(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Qn(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=QL(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function ah(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yx(){var n=Jl;return Jl<<=1,!(Jl&4194240)&&(Jl=64),n}function Wf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function al(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Qn(e),n[e]=t}function eI(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Qn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Cp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Qn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Je=0;function xx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Sx,Pp,Mx,Ex,wx,oh=!1,tc=[],pr=null,mr=null,gr=null,Fo=new Map,Bo=new Map,rr=[],tI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qv(n,e){switch(n){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function Ka(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ll(e),e!==null&&Pp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function nI(n,e,t,i,r){switch(e){case"focusin":return pr=Ka(pr,n,e,t,i,r),!0;case"dragenter":return mr=Ka(mr,n,e,t,i,r),!0;case"mouseover":return gr=Ka(gr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,Ka(Fo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,Ka(Bo.get(s)||null,n,e,t,i,r)),!0}return!1}function Tx(n){var e=$r(n.target);if(e!==null){var t=ys(e);if(t!==null){if(e=t.tag,e===13){if(e=hx(t),e!==null){n.blockedOn=e,wx(n.priority,function(){Mx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _c(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=lh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);nh=i,t.target.dispatchEvent(i),nh=null}else return e=ll(t),e!==null&&Pp(e),n.blockedOn=t,!1;e.shift()}return!0}function Jv(n,e,t){_c(n)&&t.delete(e)}function iI(){oh=!1,pr!==null&&_c(pr)&&(pr=null),mr!==null&&_c(mr)&&(mr=null),gr!==null&&_c(gr)&&(gr=null),Fo.forEach(Jv),Bo.forEach(Jv)}function Za(n,e){n.blockedOn===e&&(n.blockedOn=null,oh||(oh=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,iI)))}function zo(n){function e(r){return Za(r,n)}if(0<tc.length){Za(tc[0],n);for(var t=1;t<tc.length;t++){var i=tc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(pr!==null&&Za(pr,n),mr!==null&&Za(mr,n),gr!==null&&Za(gr,n),Fo.forEach(e),Bo.forEach(e),t=0;t<rr.length;t++)i=rr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<rr.length&&(t=rr[0],t.blockedOn===null);)Tx(t),t.blockedOn===null&&rr.shift()}var fa=Wi.ReactCurrentBatchConfig,jc=!0;function rI(n,e,t,i){var r=Je,s=fa.transition;fa.transition=null;try{Je=1,Lp(n,e,t,i)}finally{Je=r,fa.transition=s}}function sI(n,e,t,i){var r=Je,s=fa.transition;fa.transition=null;try{Je=4,Lp(n,e,t,i)}finally{Je=r,fa.transition=s}}function Lp(n,e,t,i){if(jc){var r=lh(n,e,t,i);if(r===null)ed(n,e,i,Xc,t),Qv(n,i);else if(nI(r,n,e,t,i))i.stopPropagation();else if(Qv(n,i),e&4&&-1<tI.indexOf(n)){for(;r!==null;){var s=ll(r);if(s!==null&&Sx(s),s=lh(n,e,t,i),s===null&&ed(n,e,i,Xc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ed(n,e,i,null,t)}}var Xc=null;function lh(n,e,t,i){if(Xc=null,n=bp(i),n=$r(n),n!==null)if(e=ys(n),e===null)n=null;else if(t=e.tag,t===13){if(n=hx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Xc=n,null}function Ax(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XL()){case Rp:return 1;case vx:return 4;case Gc:case YL:return 16;case _x:return 536870912;default:return 16}default:return 16}}var cr=null,Ip=null,yc=null;function bx(){if(yc)return yc;var n,e=Ip,t=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return yc=r.slice(n,1<i?1-i:void 0)}function xc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function nc(){return!0}function e_(){return!1}function bn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nc:e_,this.isPropagationStopped=e_,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),e}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Np=bn(ka),ol=mt({},ka,{view:0,detail:0}),aI=bn(ol),jf,Xf,Qa,Eu=mt({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qa&&(Qa&&n.type==="mousemove"?(jf=n.screenX-Qa.screenX,Xf=n.screenY-Qa.screenY):Xf=jf=0,Qa=n),jf)},movementY:function(n){return"movementY"in n?n.movementY:Xf}}),t_=bn(Eu),oI=mt({},Eu,{dataTransfer:0}),lI=bn(oI),cI=mt({},ol,{relatedTarget:0}),Yf=bn(cI),uI=mt({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),fI=bn(uI),dI=mt({},ka,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hI=bn(dI),pI=mt({},ka,{data:0}),n_=bn(pI),mI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _I(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=vI[n])?!!e[n]:!1}function Dp(){return _I}var yI=mt({},ol,{key:function(n){if(n.key){var e=mI[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=xc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gI[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dp,charCode:function(n){return n.type==="keypress"?xc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xI=bn(yI),SI=mt({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),i_=bn(SI),MI=mt({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dp}),EI=bn(MI),wI=mt({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),TI=bn(wI),AI=mt({},Eu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bI=bn(AI),RI=[9,13,27,32],Up=Fi&&"CompositionEvent"in window,go=null;Fi&&"documentMode"in document&&(go=document.documentMode);var CI=Fi&&"TextEvent"in window&&!go,Rx=Fi&&(!Up||go&&8<go&&11>=go),r_=String.fromCharCode(32),s_=!1;function Cx(n,e){switch(n){case"keyup":return RI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Px(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function PI(n,e){switch(n){case"compositionend":return Px(e);case"keypress":return e.which!==32?null:(s_=!0,r_);case"textInput":return n=e.data,n===r_&&s_?null:n;default:return null}}function LI(n,e){if($s)return n==="compositionend"||!Up&&Cx(n,e)?(n=bx(),yc=Ip=cr=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rx&&e.locale!=="ko"?null:e.data;default:return null}}var II={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function a_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!II[n.type]:e==="textarea"}function Lx(n,e,t,i){lx(i),e=Yc(e,"onChange"),0<e.length&&(t=new Np("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var vo=null,Ho=null;function NI(n){Vx(n,0)}function wu(n){var e=Zs(n);if(tx(e))return n}function DI(n,e){if(n==="change")return e}var Ix=!1;if(Fi){var $f;if(Fi){var qf="oninput"in document;if(!qf){var o_=document.createElement("div");o_.setAttribute("oninput","return;"),qf=typeof o_.oninput=="function"}$f=qf}else $f=!1;Ix=$f&&(!document.documentMode||9<document.documentMode)}function l_(){vo&&(vo.detachEvent("onpropertychange",Nx),Ho=vo=null)}function Nx(n){if(n.propertyName==="value"&&wu(Ho)){var e=[];Lx(e,Ho,n,bp(n)),dx(NI,e)}}function UI(n,e,t){n==="focusin"?(l_(),vo=e,Ho=t,vo.attachEvent("onpropertychange",Nx)):n==="focusout"&&l_()}function OI(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wu(Ho)}function kI(n,e){if(n==="click")return wu(e)}function FI(n,e){if(n==="input"||n==="change")return wu(e)}function BI(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ti=typeof Object.is=="function"?Object.is:BI;function Vo(n,e){if(ti(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Wd.call(e,r)||!ti(n[r],e[r]))return!1}return!0}function c_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function u_(n,e){var t=c_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=c_(t)}}function Dx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Dx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ux(){for(var n=window,e=zc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=zc(n.document)}return e}function Op(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function zI(n){var e=Ux(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Dx(t.ownerDocument.documentElement,t)){if(i!==null&&Op(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=u_(t,s);var a=u_(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var HI=Fi&&"documentMode"in document&&11>=document.documentMode,qs=null,ch=null,_o=null,uh=!1;function f_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;uh||qs==null||qs!==zc(i)||(i=qs,"selectionStart"in i&&Op(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_o&&Vo(_o,i)||(_o=i,i=Yc(ch,"onSelect"),0<i.length&&(e=new Np("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=qs)))}function ic(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ks={animationend:ic("Animation","AnimationEnd"),animationiteration:ic("Animation","AnimationIteration"),animationstart:ic("Animation","AnimationStart"),transitionend:ic("Transition","TransitionEnd")},Kf={},Ox={};Fi&&(Ox=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Tu(n){if(Kf[n])return Kf[n];if(!Ks[n])return n;var e=Ks[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ox)return Kf[n]=e[t];return n}var kx=Tu("animationend"),Fx=Tu("animationiteration"),Bx=Tu("animationstart"),zx=Tu("transitionend"),Hx=new Map,d_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,e){Hx.set(n,e),_s(e,[n])}for(var Zf=0;Zf<d_.length;Zf++){var Qf=d_[Zf],VI=Qf.toLowerCase(),GI=Qf[0].toUpperCase()+Qf.slice(1);Rr(VI,"on"+GI)}Rr(kx,"onAnimationEnd");Rr(Fx,"onAnimationIteration");Rr(Bx,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(zx,"onTransitionEnd");wa("onMouseEnter",["mouseout","mouseover"]);wa("onMouseLeave",["mouseout","mouseover"]);wa("onPointerEnter",["pointerout","pointerover"]);wa("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WI=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function h_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,VL(i,e,void 0,n),n.currentTarget=null}function Vx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;h_(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;h_(r,o,c),s=l}}}if(Vc)throw n=sh,Vc=!1,sh=null,n}function st(n,e){var t=e[mh];t===void 0&&(t=e[mh]=new Set);var i=n+"__bubble";t.has(i)||(Gx(e,n,2,!1),t.add(i))}function Jf(n,e,t){var i=0;e&&(i|=4),Gx(t,n,i,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[rc]){n[rc]=!0,Ky.forEach(function(t){t!=="selectionchange"&&(WI.has(t)||Jf(t,!1,n),Jf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[rc]||(e[rc]=!0,Jf("selectionchange",!1,e))}}function Gx(n,e,t,i){switch(Ax(e)){case 1:var r=rI;break;case 4:r=sI;break;default:r=Lp}t=r.bind(null,e,t,n),r=void 0,!rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ed(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=$r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}dx(function(){var c=s,u=bp(t),f=[];e:{var d=Hx.get(n);if(d!==void 0){var p=Np,g=n;switch(n){case"keypress":if(xc(t)===0)break e;case"keydown":case"keyup":p=xI;break;case"focusin":g="focus",p=Yf;break;case"focusout":g="blur",p=Yf;break;case"beforeblur":case"afterblur":p=Yf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=t_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=EI;break;case kx:case Fx:case Bx:p=fI;break;case zx:p=TI;break;case"scroll":p=aI;break;case"wheel":p=bI;break;case"copy":case"cut":case"paste":p=hI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=i_}var y=(e&4)!==0,m=!y&&n==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,h!==null&&(x=ko(v,h),x!=null&&y.push(Wo(v,x,_)))),m)break;v=v.return}0<y.length&&(d=new p(d,g,null,t,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==nh&&(g=t.relatedTarget||t.fromElement)&&($r(g)||g[Bi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?$r(g):null,g!==null&&(m=ys(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=t_,x="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=i_,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:Zs(p),_=g==null?d:Zs(g),d=new y(x,v+"leave",p,t,u),d.target=m,d.relatedTarget=_,x=null,$r(u)===c&&(y=new y(h,v+"enter",g,t,u),y.target=_,y.relatedTarget=m,x=y),m=x,p&&g)t:{for(y=p,h=g,v=0,_=y;_;_=Fs(_))v++;for(_=0,x=h;x;x=Fs(x))_++;for(;0<v-_;)y=Fs(y),v--;for(;0<_-v;)h=Fs(h),_--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=Fs(y),h=Fs(h)}y=null}else y=null;p!==null&&p_(f,d,p,y,!1),g!==null&&m!==null&&p_(f,m,g,y,!0)}}e:{if(d=c?Zs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=DI;else if(a_(d))if(Ix)S=FI;else{S=OI;var b=UI}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=kI);if(S&&(S=S(n,c))){Lx(f,S,t,u);break e}b&&b(n,d,c),n==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Zd(d,"number",d.value)}switch(b=c?Zs(c):window,n){case"focusin":(a_(b)||b.contentEditable==="true")&&(qs=b,ch=c,_o=null);break;case"focusout":_o=ch=qs=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,f_(f,t,u);break;case"selectionchange":if(HI)break;case"keydown":case"keyup":f_(f,t,u)}var T;if(Up)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else $s?Cx(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Rx&&t.locale!=="ko"&&($s||L!=="onCompositionStart"?L==="onCompositionEnd"&&$s&&(T=bx()):(cr=u,Ip="value"in cr?cr.value:cr.textContent,$s=!0)),b=Yc(c,L),0<b.length&&(L=new n_(L,n,null,t,u),f.push({event:L,listeners:b}),T?L.data=T:(T=Px(t),T!==null&&(L.data=T)))),(T=CI?PI(n,t):LI(n,t))&&(c=Yc(c,"onBeforeInput"),0<c.length&&(u=new n_("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=T))}Vx(f,e)})}function Wo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Yc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ko(n,t),s!=null&&i.unshift(Wo(n,s,r)),s=ko(n,e),s!=null&&i.push(Wo(n,s,r))),n=n.return}return i}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function p_(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ko(t,s),l!=null&&a.unshift(Wo(t,l,o))):r||(l=ko(t,s),l!=null&&a.push(Wo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var jI=/\r\n?/g,XI=/\u0000|\uFFFD/g;function m_(n){return(typeof n=="string"?n:""+n).replace(jI,`
`).replace(XI,"")}function sc(n,e,t){if(e=m_(e),m_(n)!==e&&t)throw Error(ee(425))}function $c(){}var fh=null,dh=null;function hh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,YI=typeof clearTimeout=="function"?clearTimeout:void 0,g_=typeof Promise=="function"?Promise:void 0,$I=typeof queueMicrotask=="function"?queueMicrotask:typeof g_<"u"?function(n){return g_.resolve(null).then(n).catch(qI)}:ph;function qI(n){setTimeout(function(){throw n})}function td(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),zo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);zo(e)}function vr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function v_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Fa=Math.random().toString(36).slice(2),ci="__reactFiber$"+Fa,jo="__reactProps$"+Fa,Bi="__reactContainer$"+Fa,mh="__reactEvents$"+Fa,KI="__reactListeners$"+Fa,ZI="__reactHandles$"+Fa;function $r(n){var e=n[ci];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Bi]||t[ci]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=v_(n);n!==null;){if(t=n[ci])return t;n=v_(n)}return e}n=t,t=n.parentNode}return null}function ll(n){return n=n[ci]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Au(n){return n[jo]||null}var gh=[],Qs=-1;function Cr(n){return{current:n}}function lt(n){0>Qs||(n.current=gh[Qs],gh[Qs]=null,Qs--)}function rt(n,e){Qs++,gh[Qs]=n.current,n.current=e}var Ar={},Qt=Cr(Ar),pn=Cr(!1),cs=Ar;function Ta(n,e){var t=n.type.contextTypes;if(!t)return Ar;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function qc(){lt(pn),lt(Qt)}function __(n,e,t){if(Qt.current!==Ar)throw Error(ee(168));rt(Qt,e),rt(pn,t)}function Wx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,UL(n)||"Unknown",r));return mt({},t,i)}function Kc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ar,cs=Qt.current,rt(Qt,n),rt(pn,pn.current),!0}function y_(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=Wx(n,e,cs),i.__reactInternalMemoizedMergedChildContext=n,lt(pn),lt(Qt),rt(Qt,n)):lt(pn),rt(pn,t)}var Ti=null,bu=!1,nd=!1;function jx(n){Ti===null?Ti=[n]:Ti.push(n)}function QI(n){bu=!0,jx(n)}function Pr(){if(!nd&&Ti!==null){nd=!0;var n=0,e=Je;try{var t=Ti;for(Je=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ti=null,bu=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(n+1)),gx(Rp,Pr),r}finally{Je=e,nd=!1}}return null}var Js=[],ea=0,Zc=null,Qc=0,Pn=[],Ln=0,us=null,Ci=1,Pi="";function zr(n,e){Js[ea++]=Qc,Js[ea++]=Zc,Zc=n,Qc=e}function Xx(n,e,t){Pn[Ln++]=Ci,Pn[Ln++]=Pi,Pn[Ln++]=us,us=n;var i=Ci;n=Pi;var r=32-Qn(i)-1;i&=~(1<<r),t+=1;var s=32-Qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-Qn(e)+r|t<<r|i,Pi=s+n}else Ci=1<<s|t<<r|i,Pi=n}function kp(n){n.return!==null&&(zr(n,1),Xx(n,1,0))}function Fp(n){for(;n===Zc;)Zc=Js[--ea],Js[ea]=null,Qc=Js[--ea],Js[ea]=null;for(;n===us;)us=Pn[--Ln],Pn[Ln]=null,Pi=Pn[--Ln],Pn[Ln]=null,Ci=Pn[--Ln],Pn[Ln]=null}var En=null,Mn=null,ct=!1,Yn=null;function Yx(n,e){var t=Dn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function x_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,En=n,Mn=vr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,En=n,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=us!==null?{id:Ci,overflow:Pi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Dn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,En=n,Mn=null,!0):!1;default:return!1}}function vh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _h(n){if(ct){var e=Mn;if(e){var t=e;if(!x_(n,e)){if(vh(n))throw Error(ee(418));e=vr(t.nextSibling);var i=En;e&&x_(n,e)?Yx(i,t):(n.flags=n.flags&-4097|2,ct=!1,En=n)}}else{if(vh(n))throw Error(ee(418));n.flags=n.flags&-4097|2,ct=!1,En=n}}}function S_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;En=n}function ac(n){if(n!==En)return!1;if(!ct)return S_(n),ct=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!hh(n.type,n.memoizedProps)),e&&(e=Mn)){if(vh(n))throw $x(),Error(ee(418));for(;e;)Yx(n,e),e=vr(e.nextSibling)}if(S_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Mn=vr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Mn=null}}else Mn=En?vr(n.stateNode.nextSibling):null;return!0}function $x(){for(var n=Mn;n;)n=vr(n.nextSibling)}function Aa(){Mn=En=null,ct=!1}function Bp(n){Yn===null?Yn=[n]:Yn.push(n)}var JI=Wi.ReactCurrentBatchConfig;function Wn(n,e){if(n&&n.defaultProps){e=mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Jc=Cr(null),eu=null,ta=null,zp=null;function Hp(){zp=ta=eu=null}function Vp(n){var e=Jc.current;lt(Jc),n._currentValue=e}function yh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function da(n,e){eu=n,zp=ta=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(dn=!0),n.firstContext=null)}function On(n){var e=n._currentValue;if(zp!==n)if(n={context:n,memoizedValue:e,next:null},ta===null){if(eu===null)throw Error(ee(308));ta=n,eu.dependencies={lanes:0,firstContext:n}}else ta=ta.next=n;return e}var qr=null;function Gp(n){qr===null?qr=[n]:qr.push(n)}function qx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Gp(e)):(t.next=r.next,r.next=t),e.interleaved=t,zi(n,i)}function zi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ir=!1;function Wp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(n,t)}return r=i.interleaved,r===null?(e.next=e,Gp(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(n,t)}function Sc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Cp(n,t)}}function M_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function tu(n,e,t,i){var r=n.updateQueue;ir=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=n,y=o;switch(d=e,p=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=mt({},f,d);break e;case 2:ir=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ds|=a,n.lanes=a,n.memoizedState=f}}function E_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Zx=new qy.Component().refs;function xh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ru={isMounted:function(n){return(n=n._reactInternals)?ys(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=an(),r=xr(n),s=Ni(i,r);s.payload=e,t!=null&&(s.callback=t),e=_r(n,s,r),e!==null&&(Jn(e,n,r,i),Sc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=an(),r=xr(n),s=Ni(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=_r(n,s,r),e!==null&&(Jn(e,n,r,i),Sc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=an(),i=xr(n),r=Ni(t,i);r.tag=2,e!=null&&(r.callback=e),e=_r(n,r,i),e!==null&&(Jn(e,n,i,t),Sc(e,n,i))}};function w_(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Vo(t,i)||!Vo(r,s):!0}function Qx(n,e,t){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=mn(e)?cs:Qt.current,i=e.contextTypes,s=(i=i!=null)?Ta(n,r):Ar),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ru,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function T_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ru.enqueueReplaceState(e,e.state,null)}function Sh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Zx,Wp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=mn(e)?cs:Qt.current,r.context=Ta(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ru.enqueueReplaceState(r,r.state,null),tu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ja(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;o===Zx&&(o=r.refs={}),a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function oc(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function A_(n){var e=n._init;return e(n._payload)}function Jx(n){function e(h,v){if(n){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Sr(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,n?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,v,_,x){return v===null||v.tag!==6?(v=cd(_,h.mode,x),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,x){var S=_.type;return S===Ys?u(h,v,_.props.children,x,_.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nr&&A_(S)===v.type)?(x=r(v,_.props),x.ref=Ja(h,v,_),x.return=h,x):(x=bc(_.type,_.key,_.props,null,h.mode,x),x.ref=Ja(h,v,_),x.return=h,x)}function c(h,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=ud(_,h.mode,x),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function u(h,v,_,x,S){return v===null||v.tag!==7?(v=ns(_,h.mode,x,S),v.return=h,v):(v=r(v,_),v.return=h,v)}function f(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=cd(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Kl:return _=bc(v.type,v.key,v.props,null,h.mode,_),_.ref=Ja(h,null,v),_.return=h,_;case Xs:return v=ud(v,h.mode,_),v.return=h,v;case nr:var x=v._init;return f(h,x(v._payload),_)}if(so(v)||$a(v))return v=ns(v,h.mode,_,null),v.return=h,v;oc(h,v)}return null}function d(h,v,_,x){var S=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:o(h,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Kl:return _.key===S?l(h,v,_,x):null;case Xs:return _.key===S?c(h,v,_,x):null;case nr:return S=_._init,d(h,v,S(_._payload),x)}if(so(_)||$a(_))return S!==null?null:u(h,v,_,x,null);oc(h,_)}return null}function p(h,v,_,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(_)||null,o(v,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Kl:return h=h.get(x.key===null?_:x.key)||null,l(v,h,x,S);case Xs:return h=h.get(x.key===null?_:x.key)||null,c(v,h,x,S);case nr:var b=x._init;return p(h,v,_,b(x._payload),S)}if(so(x)||$a(x))return h=h.get(_)||null,u(v,h,x,S,null);oc(v,x)}return null}function g(h,v,_,x){for(var S=null,b=null,T=v,L=v=0,M=null;T!==null&&L<_.length;L++){T.index>L?(M=T,T=null):M=T.sibling;var A=d(h,T,_[L],x);if(A===null){T===null&&(T=M);break}n&&T&&A.alternate===null&&e(h,T),v=s(A,v,L),b===null?S=A:b.sibling=A,b=A,T=M}if(L===_.length)return t(h,T),ct&&zr(h,L),S;if(T===null){for(;L<_.length;L++)T=f(h,_[L],x),T!==null&&(v=s(T,v,L),b===null?S=T:b.sibling=T,b=T);return ct&&zr(h,L),S}for(T=i(h,T);L<_.length;L++)M=p(T,h,L,_[L],x),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?L:M.key),v=s(M,v,L),b===null?S=M:b.sibling=M,b=M);return n&&T.forEach(function(Z){return e(h,Z)}),ct&&zr(h,L),S}function y(h,v,_,x){var S=$a(_);if(typeof S!="function")throw Error(ee(150));if(_=S.call(_),_==null)throw Error(ee(151));for(var b=S=null,T=v,L=v=0,M=null,A=_.next();T!==null&&!A.done;L++,A=_.next()){T.index>L?(M=T,T=null):M=T.sibling;var Z=d(h,T,A.value,x);if(Z===null){T===null&&(T=M);break}n&&T&&Z.alternate===null&&e(h,T),v=s(Z,v,L),b===null?S=Z:b.sibling=Z,b=Z,T=M}if(A.done)return t(h,T),ct&&zr(h,L),S;if(T===null){for(;!A.done;L++,A=_.next())A=f(h,A.value,x),A!==null&&(v=s(A,v,L),b===null?S=A:b.sibling=A,b=A);return ct&&zr(h,L),S}for(T=i(h,T);!A.done;L++,A=_.next())A=p(T,h,L,A.value,x),A!==null&&(n&&A.alternate!==null&&T.delete(A.key===null?L:A.key),v=s(A,v,L),b===null?S=A:b.sibling=A,b=A);return n&&T.forEach(function(J){return e(h,J)}),ct&&zr(h,L),S}function m(h,v,_,x){if(typeof _=="object"&&_!==null&&_.type===Ys&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Kl:e:{for(var S=_.key,b=v;b!==null;){if(b.key===S){if(S=_.type,S===Ys){if(b.tag===7){t(h,b.sibling),v=r(b,_.props.children),v.return=h,h=v;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nr&&A_(S)===b.type){t(h,b.sibling),v=r(b,_.props),v.ref=Ja(h,b,_),v.return=h,h=v;break e}t(h,b);break}else e(h,b);b=b.sibling}_.type===Ys?(v=ns(_.props.children,h.mode,x,_.key),v.return=h,h=v):(x=bc(_.type,_.key,_.props,null,h.mode,x),x.ref=Ja(h,v,_),x.return=h,h=x)}return a(h);case Xs:e:{for(b=_.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=ud(_,h.mode,x),v.return=h,h=v}return a(h);case nr:return b=_._init,m(h,v,b(_._payload),x)}if(so(_))return g(h,v,_,x);if($a(_))return y(h,v,_,x);oc(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,_),v.return=h,h=v):(t(h,v),v=cd(_,h.mode,x),v.return=h,h=v),a(h)):t(h,v)}return m}var ba=Jx(!0),eS=Jx(!1),cl={},di=Cr(cl),Xo=Cr(cl),Yo=Cr(cl);function Kr(n){if(n===cl)throw Error(ee(174));return n}function jp(n,e){switch(rt(Yo,e),rt(Xo,n),rt(di,cl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Jd(e,n)}lt(di),rt(di,e)}function Ra(){lt(di),lt(Xo),lt(Yo)}function tS(n){Kr(Yo.current);var e=Kr(di.current),t=Jd(e,n.type);e!==t&&(rt(Xo,n),rt(di,t))}function Xp(n){Xo.current===n&&(lt(di),lt(Xo))}var dt=Cr(0);function nu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var id=[];function Yp(){for(var n=0;n<id.length;n++)id[n]._workInProgressVersionPrimary=null;id.length=0}var Mc=Wi.ReactCurrentDispatcher,rd=Wi.ReactCurrentBatchConfig,fs=0,pt=null,At=null,Dt=null,iu=!1,yo=!1,$o=0,e3=0;function $t(){throw Error(ee(321))}function $p(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ti(n[t],e[t]))return!1;return!0}function qp(n,e,t,i,r,s){if(fs=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mc.current=n===null||n.memoizedState===null?r3:s3,n=t(i,r),yo){s=0;do{if(yo=!1,$o=0,25<=s)throw Error(ee(301));s+=1,Dt=At=null,e.updateQueue=null,Mc.current=a3,n=t(i,r)}while(yo)}if(Mc.current=ru,e=At!==null&&At.next!==null,fs=0,Dt=At=pt=null,iu=!1,e)throw Error(ee(300));return n}function Kp(){var n=$o!==0;return $o=0,n}function ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?pt.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function kn(){if(At===null){var n=pt.alternate;n=n!==null?n.memoizedState:null}else n=At.next;var e=Dt===null?pt.memoizedState:Dt.next;if(e!==null)Dt=e,At=n;else{if(n===null)throw Error(ee(310));At=n,n={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?pt.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}function qo(n,e){return typeof e=="function"?e(n):e}function sd(n){var e=kn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=At,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((fs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,pt.lanes|=u,ds|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ti(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,pt.lanes|=s,ds|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ad(n){var e=kn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function nS(){}function iS(n,e){var t=pt,i=kn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Zp(aS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(t.flags|=2048,Ko(9,sS.bind(null,t,i,r,e),void 0,null),kt===null)throw Error(ee(349));fs&30||rS(t,e,r)}return r}function rS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function sS(n,e,t,i){e.value=t,e.getSnapshot=i,oS(e)&&lS(n)}function aS(n,e,t){return t(function(){oS(e)&&lS(n)})}function oS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ti(n,t)}catch{return!0}}function lS(n){var e=zi(n,1);e!==null&&Jn(e,n,1,-1)}function b_(n){var e=ai();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},e.queue=n,n=n.dispatch=i3.bind(null,pt,n),[e.memoizedState,n]}function Ko(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function cS(){return kn().memoizedState}function Ec(n,e,t,i){var r=ai();pt.flags|=n,r.memoizedState=Ko(1|e,t,void 0,i===void 0?null:i)}function Cu(n,e,t,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&$p(i,a.deps)){r.memoizedState=Ko(e,t,s,i);return}}pt.flags|=n,r.memoizedState=Ko(1|e,t,s,i)}function R_(n,e){return Ec(8390656,8,n,e)}function Zp(n,e){return Cu(2048,8,n,e)}function uS(n,e){return Cu(4,2,n,e)}function fS(n,e){return Cu(4,4,n,e)}function dS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function hS(n,e,t){return t=t!=null?t.concat([n]):null,Cu(4,4,dS.bind(null,e,n),t)}function Qp(){}function pS(n,e){var t=kn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&$p(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function mS(n,e){var t=kn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&$p(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function gS(n,e,t){return fs&21?(ti(t,e)||(t=yx(),pt.lanes|=t,ds|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,dn=!0),n.memoizedState=t)}function t3(n,e){var t=Je;Je=t!==0&&4>t?t:4,n(!0);var i=rd.transition;rd.transition={};try{n(!1),e()}finally{Je=t,rd.transition=i}}function vS(){return kn().memoizedState}function n3(n,e,t){var i=xr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},_S(n))yS(e,t);else if(t=qx(n,e,t,i),t!==null){var r=an();Jn(t,n,i,r),xS(t,e,i)}}function i3(n,e,t){var i=xr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(_S(n))yS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,ti(o,a)){var l=e.interleaved;l===null?(r.next=r,Gp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=qx(n,e,r,i),t!==null&&(r=an(),Jn(t,n,i,r),xS(t,e,i))}}function _S(n){var e=n.alternate;return n===pt||e!==null&&e===pt}function yS(n,e){yo=iu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function xS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Cp(n,t)}}var ru={readContext:On,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},r3={readContext:On,useCallback:function(n,e){return ai().memoizedState=[n,e===void 0?null:e],n},useContext:On,useEffect:R_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ec(4194308,4,dS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ec(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ec(4,2,n,e)},useMemo:function(n,e){var t=ai();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ai();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=n3.bind(null,pt,n),[i.memoizedState,n]},useRef:function(n){var e=ai();return n={current:n},e.memoizedState=n},useState:b_,useDebugValue:Qp,useDeferredValue:function(n){return ai().memoizedState=n},useTransition:function(){var n=b_(!1),e=n[0];return n=t3.bind(null,n[1]),ai().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=pt,r=ai();if(ct){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),kt===null)throw Error(ee(349));fs&30||rS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,R_(aS.bind(null,i,s,n),[n]),i.flags|=2048,Ko(9,sS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ai(),e=kt.identifierPrefix;if(ct){var t=Pi,i=Ci;t=(i&~(1<<32-Qn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=$o++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=e3++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},s3={readContext:On,useCallback:pS,useContext:On,useEffect:Zp,useImperativeHandle:hS,useInsertionEffect:uS,useLayoutEffect:fS,useMemo:mS,useReducer:sd,useRef:cS,useState:function(){return sd(qo)},useDebugValue:Qp,useDeferredValue:function(n){var e=kn();return gS(e,At.memoizedState,n)},useTransition:function(){var n=sd(qo)[0],e=kn().memoizedState;return[n,e]},useMutableSource:nS,useSyncExternalStore:iS,useId:vS,unstable_isNewReconciler:!1},a3={readContext:On,useCallback:pS,useContext:On,useEffect:Zp,useImperativeHandle:hS,useInsertionEffect:uS,useLayoutEffect:fS,useMemo:mS,useReducer:ad,useRef:cS,useState:function(){return ad(qo)},useDebugValue:Qp,useDeferredValue:function(n){var e=kn();return At===null?e.memoizedState=n:gS(e,At.memoizedState,n)},useTransition:function(){var n=ad(qo)[0],e=kn().memoizedState;return[n,e]},useMutableSource:nS,useSyncExternalStore:iS,useId:vS,unstable_isNewReconciler:!1};function Ca(n,e){try{var t="",i=e;do t+=DL(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function od(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Mh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var o3=typeof WeakMap=="function"?WeakMap:Map;function SS(n,e,t){t=Ni(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){au||(au=!0,Ih=i),Mh(n,e)},t}function MS(n,e,t){t=Ni(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Mh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Mh(n,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function C_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new o3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=S3.bind(null,n,e,t),e.then(n,n))}function P_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function L_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ni(-1,1),e.tag=2,_r(t,e,1))),t.lanes|=1),n)}var l3=Wi.ReactCurrentOwner,dn=!1;function rn(n,e,t,i){e.child=n===null?eS(e,null,t,i):ba(e,n.child,t,i)}function I_(n,e,t,i,r){t=t.render;var s=e.ref;return da(e,r),i=qp(n,e,t,i,s,r),t=Kp(),n!==null&&!dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Hi(n,e,r)):(ct&&t&&kp(e),e.flags|=1,rn(n,e,i,r),e.child)}function N_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!am(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,ES(n,e,s,i,r)):(n=bc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Vo,t(a,i)&&n.ref===e.ref)return Hi(n,e,r)}return e.flags|=1,n=Sr(s,i),n.ref=e.ref,n.return=e,e.child=n}function ES(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Vo(s,i)&&n.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(dn=!0);else return e.lanes=n.lanes,Hi(n,e,r)}return Eh(n,e,t,i,r)}function wS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ia,xn),xn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,rt(ia,xn),xn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,rt(ia,xn),xn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,rt(ia,xn),xn|=i;return rn(n,e,r,t),e.child}function TS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Eh(n,e,t,i,r){var s=mn(t)?cs:Qt.current;return s=Ta(e,s),da(e,r),t=qp(n,e,t,i,s,r),i=Kp(),n!==null&&!dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Hi(n,e,r)):(ct&&i&&kp(e),e.flags|=1,rn(n,e,t,r),e.child)}function D_(n,e,t,i,r){if(mn(t)){var s=!0;Kc(e)}else s=!1;if(da(e,r),e.stateNode===null)wc(n,e),Qx(e,t,i),Sh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=On(c):(c=mn(t)?cs:Qt.current,c=Ta(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&T_(e,a,i,c),ir=!1;var d=e.memoizedState;a.state=d,tu(e,i,a,r),l=e.memoizedState,o!==i||d!==l||pn.current||ir?(typeof u=="function"&&(xh(e,t,u,i),l=e.memoizedState),(o=ir||w_(e,t,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Kx(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Wn(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=On(l):(l=mn(t)?cs:Qt.current,l=Ta(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&T_(e,a,i,l),ir=!1,d=e.memoizedState,a.state=d,tu(e,i,a,r);var g=e.memoizedState;o!==f||d!==g||pn.current||ir?(typeof p=="function"&&(xh(e,t,p,i),g=e.memoizedState),(c=ir||w_(e,t,c,i,d,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return wh(n,e,t,i,s,r)}function wh(n,e,t,i,r,s){TS(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&y_(e,t,!1),Hi(n,e,s);i=e.stateNode,l3.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=ba(e,n.child,null,s),e.child=ba(e,null,o,s)):rn(n,e,o,s),e.memoizedState=i.state,r&&y_(e,t,!0),e.child}function AS(n){var e=n.stateNode;e.pendingContext?__(n,e.pendingContext,e.pendingContext!==e.context):e.context&&__(n,e.context,!1),jp(n,e.containerInfo)}function U_(n,e,t,i,r){return Aa(),Bp(r),e.flags|=256,rn(n,e,t,i),e.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Ah(n){return{baseLanes:n,cachePool:null,transitions:null}}function bS(n,e,t){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),rt(dt,r&1),n===null)return _h(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Iu(a,i,0,null),n=ns(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ah(t),e.memoizedState=Th,n):Jp(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return c3(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Sr(o,s):(s=ns(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Ah(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Th,i}return s=n.child,n=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Jp(n,e){return e=Iu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function lc(n,e,t,i){return i!==null&&Bp(i),ba(e,n.child,null,t),n=Jp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function c3(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=od(Error(ee(422))),lc(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Iu({mode:"visible",children:i.children},r,0,null),s=ns(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ba(e,n.child,null,a),e.child.memoizedState=Ah(a),e.memoizedState=Th,s);if(!(e.mode&1))return lc(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=od(s,i,void 0),lc(n,e,a,i)}if(o=(a&n.childLanes)!==0,dn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(n,r),Jn(i,n,r,-1))}return sm(),i=od(Error(ee(421))),lc(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=M3.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Mn=vr(r.nextSibling),En=e,ct=!0,Yn=null,n!==null&&(Pn[Ln++]=Ci,Pn[Ln++]=Pi,Pn[Ln++]=us,Ci=n.id,Pi=n.overflow,us=e),e=Jp(e,i.children),e.flags|=4096,e)}function O_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),yh(n.return,e,t)}function ld(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function RS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(n,e,i.children,t),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&O_(n,t,e);else if(n.tag===19)O_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&nu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ld(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&nu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ld(e,!0,t,null,s);break;case"together":ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Hi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ds|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=Sr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Sr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function u3(n,e,t){switch(e.tag){case 3:AS(e),Aa();break;case 5:tS(e);break;case 1:mn(e.type)&&Kc(e);break;case 4:jp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):t&e.child.childLanes?bS(n,e,t):(rt(dt,dt.current&1),n=Hi(n,e,t),n!==null?n.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return RS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,wS(n,e,t)}return Hi(n,e,t)}var CS,bh,PS,LS;CS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};bh=function(){};PS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Kr(di.current);var s=null;switch(t){case"input":r=qd(n,r),i=qd(n,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Qd(n,r),i=Qd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=$c)}eh(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};LS=function(n,e,t,i){t!==i&&(e.flags|=4)};function eo(n,e){if(!ct)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function f3(n,e,t){var i=e.pendingProps;switch(Fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return mn(e.type)&&qc(),qt(e),null;case 3:return i=e.stateNode,Ra(),lt(pn),lt(Qt),Yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ac(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Uh(Yn),Yn=null))),bh(n,e),qt(e),null;case 5:Xp(e);var r=Kr(Yo.current);if(t=e.type,n!==null&&e.stateNode!=null)PS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return qt(e),null}if(n=Kr(di.current),ac(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[jo]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)st(oo[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":jv(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Yv(i,s),st("invalid",i)}eh(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&sc(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&sc(i.textContent,o,n),r=["children",""+o]):Uo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(t){case"input":Zl(i),Xv(i,s,!0);break;case"textarea":Zl(i),$v(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$c)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=rx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[ci]=e,n[jo]=i,CS(n,e,!1,!1),e.stateNode=n;e:{switch(a=th(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)st(oo[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":jv(n,i),r=qd(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),st("invalid",n);break;case"textarea":Yv(n,i),r=Qd(n,i),st("invalid",n);break;default:r=i}eh(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ox(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Oo(n,l):typeof l=="number"&&Oo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&Ep(n,s,l,a))}switch(t){case"input":Zl(n),Xv(n,i,!1);break;case"textarea":Zl(n),$v(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Tr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?la(n,!!i.multiple,s,!1):i.defaultValue!=null&&la(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=$c)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(n&&e.stateNode!=null)LS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Kr(Yo.current),Kr(di.current),ac(e)){if(i=e.stateNode,t=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==t)&&(n=En,n!==null))switch(n.tag){case 3:sc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return qt(e),null;case 13:if(lt(dt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ct&&Mn!==null&&e.mode&1&&!(e.flags&128))$x(),Aa(),e.flags|=98560,s=!1;else if(s=ac(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ci]=e}else Aa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Yn!==null&&(Uh(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||dt.current&1?bt===0&&(bt=3):sm())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Ra(),bh(n,e),n===null&&Go(e.stateNode.containerInfo),qt(e),null;case 10:return Vp(e.type._context),qt(e),null;case 17:return mn(e.type)&&qc(),qt(e),null;case 19:if(lt(dt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)eo(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=nu(n),a!==null){for(e.flags|=128,eo(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return rt(dt,dt.current&1|2),e.child}n=n.sibling}s.tail!==null&&St()>Pa&&(e.flags|=128,i=!0,eo(s,!1),e.lanes=4194304)}else{if(!i)if(n=nu(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return qt(e),null}else 2*St()-s.renderingStartTime>Pa&&t!==1073741824&&(e.flags|=128,i=!0,eo(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,t=dt.current,rt(dt,i?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return rm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function d3(n,e){switch(Fp(e),e.tag){case 1:return mn(e.type)&&qc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ra(),lt(pn),lt(Qt),Yp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Xp(e),null;case 13:if(lt(dt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Aa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return lt(dt),null;case 4:return Ra(),null;case 10:return Vp(e.type._context),null;case 22:case 23:return rm(),null;case 24:return null;default:return null}}var cc=!1,Zt=!1,h3=typeof WeakSet=="function"?WeakSet:Set,pe=null;function na(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){_t(n,e,i)}else t.current=null}function Rh(n,e,t){try{t()}catch(i){_t(n,e,i)}}var k_=!1;function p3(n,e){if(fh=jc,n=Ux(),Op(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(dh={focusedElem:n,selectionRange:t},jc=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){_t(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return g=k_,k_=!1,g}function xo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rh(e,t,s)}r=r.next}while(r!==i)}}function Pu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ch(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function IS(n){var e=n.alternate;e!==null&&(n.alternate=null,IS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ci],delete e[jo],delete e[mh],delete e[KI],delete e[ZI])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function NS(n){return n.tag===5||n.tag===3||n.tag===4}function F_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||NS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=$c));else if(i!==4&&(n=n.child,n!==null))for(Ph(n,e,t),n=n.sibling;n!==null;)Ph(n,e,t),n=n.sibling}function Lh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Lh(n,e,t),n=n.sibling;n!==null;)Lh(n,e,t),n=n.sibling}var Bt=null,jn=!1;function Ji(n,e,t){for(t=t.child;t!==null;)DS(n,e,t),t=t.sibling}function DS(n,e,t){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(Mu,t)}catch{}switch(t.tag){case 5:Zt||na(t,e);case 6:var i=Bt,r=jn;Bt=null,Ji(n,e,t),Bt=i,jn=r,Bt!==null&&(jn?(n=Bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Bt.removeChild(t.stateNode));break;case 18:Bt!==null&&(jn?(n=Bt,t=t.stateNode,n.nodeType===8?td(n.parentNode,t):n.nodeType===1&&td(n,t),zo(n)):td(Bt,t.stateNode));break;case 4:i=Bt,r=jn,Bt=t.stateNode.containerInfo,jn=!0,Ji(n,e,t),Bt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Rh(t,e,a),r=r.next}while(r!==i)}Ji(n,e,t);break;case 1:if(!Zt&&(na(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){_t(t,e,o)}Ji(n,e,t);break;case 21:Ji(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,Ji(n,e,t),Zt=i):Ji(n,e,t);break;default:Ji(n,e,t)}}function B_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new h3),e.forEach(function(i){var r=E3.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Gn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,jn=!1;break e;case 3:Bt=o.stateNode.containerInfo,jn=!0;break e;case 4:Bt=o.stateNode.containerInfo,jn=!0;break e}o=o.return}if(Bt===null)throw Error(ee(160));DS(s,a,r),Bt=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)US(e,n),e=e.sibling}function US(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gn(e,n),si(n),i&4){try{xo(3,n,n.return),Pu(3,n)}catch(y){_t(n,n.return,y)}try{xo(5,n,n.return)}catch(y){_t(n,n.return,y)}}break;case 1:Gn(e,n),si(n),i&512&&t!==null&&na(t,t.return);break;case 5:if(Gn(e,n),si(n),i&512&&t!==null&&na(t,t.return),n.flags&32){var r=n.stateNode;try{Oo(r,"")}catch(y){_t(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&nx(r,s),th(o,a);var c=th(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?ox(r,f):u==="dangerouslySetInnerHTML"?sx(r,f):u==="children"?Oo(r,f):Ep(r,u,f,c)}switch(o){case"input":Kd(r,s);break;case"textarea":ix(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?la(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?la(r,!!s.multiple,s.defaultValue,!0):la(r,!!s.multiple,s.multiple?[]:"",!1))}r[jo]=s}catch(y){_t(n,n.return,y)}}break;case 6:if(Gn(e,n),si(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){_t(n,n.return,y)}}break;case 3:if(Gn(e,n),si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(y){_t(n,n.return,y)}break;case 4:Gn(e,n),si(n);break;case 13:Gn(e,n),si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(nm=St())),i&4&&B_(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(c=Zt)||u,Gn(e,n),Zt=c):Gn(e,n),si(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(pe=n,u=n.child;u!==null;){for(f=pe=u;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:xo(4,d,d.return);break;case 1:na(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){_t(i,t,y)}}break;case 5:na(d,d.return);break;case 22:if(d.memoizedState!==null){H_(f);continue}}p!==null?(p.return=d,pe=p):H_(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ax("display",a))}catch(y){_t(n,n.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){_t(n,n.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,n),si(n),i&4&&B_(n);break;case 21:break;default:Gn(e,n),si(n)}}function si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(NS(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oo(r,""),i.flags&=-33);var s=F_(n);Lh(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=F_(n);Ph(n,o,a);break;default:throw Error(ee(161))}}catch(l){_t(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function m3(n,e,t){pe=n,OS(n)}function OS(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||cc;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=cc;var c=Zt;if(cc=a,(Zt=l)&&!c)for(pe=r;pe!==null;)a=pe,l=a.child,a.tag===22&&a.memoizedState!==null?V_(r):l!==null?(l.return=a,pe=l):V_(r);for(;s!==null;)pe=s,OS(s),s=s.sibling;pe=r,cc=o,Zt=c}z_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):z_(n)}}function z_(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Pu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Wn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&E_(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}E_(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&zo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Zt||e.flags&512&&Ch(e)}catch(d){_t(e,e.return,d)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function H_(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function V_(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Pu(4,e)}catch(l){_t(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Ch(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{Ch(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===n){pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,pe=o;break}pe=e.return}}var g3=Math.ceil,su=Wi.ReactCurrentDispatcher,em=Wi.ReactCurrentOwner,Un=Wi.ReactCurrentBatchConfig,qe=0,kt=null,wt=null,Vt=0,xn=0,ia=Cr(0),bt=0,Zo=null,ds=0,Lu=0,tm=0,So=null,fn=null,nm=0,Pa=1/0,wi=null,au=!1,Ih=null,yr=null,uc=!1,ur=null,ou=0,Mo=0,Nh=null,Tc=-1,Ac=0;function an(){return qe&6?St():Tc!==-1?Tc:Tc=St()}function xr(n){return n.mode&1?qe&2&&Vt!==0?Vt&-Vt:JI.transition!==null?(Ac===0&&(Ac=yx()),Ac):(n=Je,n!==0||(n=window.event,n=n===void 0?16:Ax(n.type)),n):1}function Jn(n,e,t,i){if(50<Mo)throw Mo=0,Nh=null,Error(ee(185));al(n,t,i),(!(qe&2)||n!==kt)&&(n===kt&&(!(qe&2)&&(Lu|=t),bt===4&&sr(n,Vt)),gn(n,i),t===1&&qe===0&&!(e.mode&1)&&(Pa=St()+500,bu&&Pr()))}function gn(n,e){var t=n.callbackNode;JL(n,e);var i=Wc(n,n===kt?Vt:0);if(i===0)t!==null&&Zv(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Zv(t),e===1)n.tag===0?QI(G_.bind(null,n)):jx(G_.bind(null,n)),$I(function(){!(qe&6)&&Pr()}),t=null;else{switch(xx(i)){case 1:t=Rp;break;case 4:t=vx;break;case 16:t=Gc;break;case 536870912:t=_x;break;default:t=Gc}t=WS(t,kS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function kS(n,e){if(Tc=-1,Ac=0,qe&6)throw Error(ee(327));var t=n.callbackNode;if(ha()&&n.callbackNode!==t)return null;var i=Wc(n,n===kt?Vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=lu(n,i);else{e=i;var r=qe;qe|=2;var s=BS();(kt!==n||Vt!==e)&&(wi=null,Pa=St()+500,ts(n,e));do try{y3();break}catch(o){FS(n,o)}while(1);Hp(),su.current=s,qe=r,wt!==null?e=0:(kt=null,Vt=0,e=bt)}if(e!==0){if(e===2&&(r=ah(n),r!==0&&(i=r,e=Dh(n,r))),e===1)throw t=Zo,ts(n,0),sr(n,i),gn(n,St()),t;if(e===6)sr(n,i);else{if(r=n.current.alternate,!(i&30)&&!v3(r)&&(e=lu(n,i),e===2&&(s=ah(n),s!==0&&(i=s,e=Dh(n,s))),e===1))throw t=Zo,ts(n,0),sr(n,i),gn(n,St()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Hr(n,fn,wi);break;case 3:if(sr(n,i),(i&130023424)===i&&(e=nm+500-St(),10<e)){if(Wc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){an(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ph(Hr.bind(null,n,fn,wi),e);break}Hr(n,fn,wi);break;case 4:if(sr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-Qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*g3(i/1960))-i,10<i){n.timeoutHandle=ph(Hr.bind(null,n,fn,wi),i);break}Hr(n,fn,wi);break;case 5:Hr(n,fn,wi);break;default:throw Error(ee(329))}}}return gn(n,St()),n.callbackNode===t?kS.bind(null,n):null}function Dh(n,e){var t=So;return n.current.memoizedState.isDehydrated&&(ts(n,e).flags|=256),n=lu(n,e),n!==2&&(e=fn,fn=t,e!==null&&Uh(e)),n}function Uh(n){fn===null?fn=n:fn.push.apply(fn,n)}function v3(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(n,e){for(e&=~tm,e&=~Lu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Qn(e),i=1<<t;n[t]=-1,e&=~i}}function G_(n){if(qe&6)throw Error(ee(327));ha();var e=Wc(n,0);if(!(e&1))return gn(n,St()),null;var t=lu(n,e);if(n.tag!==0&&t===2){var i=ah(n);i!==0&&(e=i,t=Dh(n,i))}if(t===1)throw t=Zo,ts(n,0),sr(n,e),gn(n,St()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Hr(n,fn,wi),gn(n,St()),null}function im(n,e){var t=qe;qe|=1;try{return n(e)}finally{qe=t,qe===0&&(Pa=St()+500,bu&&Pr())}}function hs(n){ur!==null&&ur.tag===0&&!(qe&6)&&ha();var e=qe;qe|=1;var t=Un.transition,i=Je;try{if(Un.transition=null,Je=1,n)return n()}finally{Je=i,Un.transition=t,qe=e,!(qe&6)&&Pr()}}function rm(){xn=ia.current,lt(ia)}function ts(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,YI(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(Fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&qc();break;case 3:Ra(),lt(pn),lt(Qt),Yp();break;case 5:Xp(i);break;case 4:Ra();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:Vp(i.type._context);break;case 22:case 23:rm()}t=t.return}if(kt=n,wt=n=Sr(n.current,null),Vt=xn=e,bt=0,Zo=null,tm=Lu=ds=0,fn=So=null,qr!==null){for(e=0;e<qr.length;e++)if(t=qr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}qr=null}return n}function FS(n,e){do{var t=wt;try{if(Hp(),Mc.current=ru,iu){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}iu=!1}if(fs=0,Dt=At=pt=null,yo=!1,$o=0,em.current=null,t===null||t.return===null){bt=1,Zo=e,wt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=P_(a);if(p!==null){p.flags&=-257,L_(p,a,o,s,e),p.mode&1&&C_(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){C_(s,c,e),sm();break e}l=Error(ee(426))}}else if(ct&&o.mode&1){var m=P_(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),L_(m,a,o,s,e),Bp(Ca(l,o));break e}}s=l=Ca(l,o),bt!==4&&(bt=2),So===null?So=[s]:So.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=SS(s,l,e);M_(s,h);break e;case 1:o=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(yr===null||!yr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=MS(s,o,e);M_(s,x);break e}}s=s.return}while(s!==null)}HS(t)}catch(S){e=S,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(1)}function BS(){var n=su.current;return su.current=ru,n===null?ru:n}function sm(){(bt===0||bt===3||bt===2)&&(bt=4),kt===null||!(ds&268435455)&&!(Lu&268435455)||sr(kt,Vt)}function lu(n,e){var t=qe;qe|=2;var i=BS();(kt!==n||Vt!==e)&&(wi=null,ts(n,e));do try{_3();break}catch(r){FS(n,r)}while(1);if(Hp(),qe=t,su.current=i,wt!==null)throw Error(ee(261));return kt=null,Vt=0,bt}function _3(){for(;wt!==null;)zS(wt)}function y3(){for(;wt!==null&&!WL();)zS(wt)}function zS(n){var e=GS(n.alternate,n,xn);n.memoizedProps=n.pendingProps,e===null?HS(n):wt=e,em.current=null}function HS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=d3(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,wt=null;return}}else if(t=f3(t,e,xn),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);bt===0&&(bt=5)}function Hr(n,e,t){var i=Je,r=Un.transition;try{Un.transition=null,Je=1,x3(n,e,t,i)}finally{Un.transition=r,Je=i}return null}function x3(n,e,t,i){do ha();while(ur!==null);if(qe&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(eI(n,s),n===kt&&(wt=kt=null,Vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||uc||(uc=!0,WS(Gc,function(){return ha(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=Je;Je=1;var o=qe;qe|=4,em.current=null,p3(n,t),US(t,n),zI(dh),jc=!!fh,dh=fh=null,n.current=t,m3(t),jL(),qe=o,Je=a,Un.transition=s}else n.current=t;if(uc&&(uc=!1,ur=n,ou=r),s=n.pendingLanes,s===0&&(yr=null),$L(t.stateNode),gn(n,St()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(au)throw au=!1,n=Ih,Ih=null,n;return ou&1&&n.tag!==0&&ha(),s=n.pendingLanes,s&1?n===Nh?Mo++:(Mo=0,Nh=n):Mo=0,Pr(),null}function ha(){if(ur!==null){var n=xx(ou),e=Un.transition,t=Je;try{if(Un.transition=null,Je=16>n?16:n,ur===null)var i=!1;else{if(n=ur,ur=null,ou=0,qe&6)throw Error(ee(331));var r=qe;for(qe|=4,pe=n.current;pe!==null;){var s=pe,a=s.child;if(pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:xo(8,u,s)}var f=u.child;if(f!==null)f.return=u,pe=f;else for(;pe!==null;){u=pe;var d=u.sibling,p=u.return;if(IS(u),u===c){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,pe=a;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var v=n.current;for(pe=v;pe!==null;){a=pe;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,pe=_;else e:for(a=v;pe!==null;){if(o=pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Pu(9,o)}}catch(S){_t(o,o.return,S)}if(o===a){pe=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,pe=x;break e}pe=o.return}}if(qe=r,Pr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(Mu,n)}catch{}i=!0}return i}finally{Je=t,Un.transition=e}}return!1}function W_(n,e,t){e=Ca(t,e),e=SS(n,e,1),n=_r(n,e,1),e=an(),n!==null&&(al(n,1,e),gn(n,e))}function _t(n,e,t){if(n.tag===3)W_(n,n,t);else for(;e!==null;){if(e.tag===3){W_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yr===null||!yr.has(i))){n=Ca(t,n),n=MS(e,n,1),e=_r(e,n,1),n=an(),e!==null&&(al(e,1,n),gn(e,n));break}}e=e.return}}function S3(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=an(),n.pingedLanes|=n.suspendedLanes&t,kt===n&&(Vt&t)===t&&(bt===4||bt===3&&(Vt&130023424)===Vt&&500>St()-nm?ts(n,0):tm|=t),gn(n,e)}function VS(n,e){e===0&&(n.mode&1?(e=ec,ec<<=1,!(ec&130023424)&&(ec=4194304)):e=1);var t=an();n=zi(n,e),n!==null&&(al(n,e,t),gn(n,t))}function M3(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),VS(n,t)}function E3(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),VS(n,t)}var GS;GS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)dn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return dn=!1,u3(n,e,t);dn=!!(n.flags&131072)}else dn=!1,ct&&e.flags&1048576&&Xx(e,Qc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wc(n,e),n=e.pendingProps;var r=Ta(e,Qt.current);da(e,t),r=qp(null,e,i,n,r,t);var s=Kp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Kc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wp(e),r.updater=Ru,e.stateNode=r,r._reactInternals=e,Sh(e,i,n,t),e=wh(null,e,i,!0,s,t)):(e.tag=0,ct&&s&&kp(e),rn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(wc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=T3(i),n=Wn(i,n),r){case 0:e=Eh(null,e,i,n,t);break e;case 1:e=D_(null,e,i,n,t);break e;case 11:e=I_(null,e,i,n,t);break e;case 14:e=N_(null,e,i,Wn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Eh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),D_(n,e,i,r,t);case 3:e:{if(AS(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kx(n,e),tu(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ca(Error(ee(423)),e),e=U_(n,e,i,t,r);break e}else if(i!==r){r=Ca(Error(ee(424)),e),e=U_(n,e,i,t,r);break e}else for(Mn=vr(e.stateNode.containerInfo.firstChild),En=e,ct=!0,Yn=null,t=eS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Aa(),i===r){e=Hi(n,e,t);break e}rn(n,e,i,t)}e=e.child}return e;case 5:return tS(e),n===null&&_h(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,hh(i,r)?a=null:s!==null&&hh(i,s)&&(e.flags|=32),TS(n,e),rn(n,e,a,t),e.child;case 6:return n===null&&_h(e),null;case 13:return bS(n,e,t);case 4:return jp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ba(e,null,i,t):rn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),I_(n,e,i,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(Jc,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!pn.current){e=Hi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),yh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),yh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,da(e,t),r=On(r),i=i(r),e.flags|=1,rn(n,e,i,t),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),N_(n,e,i,r,t);case 15:return ES(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),wc(n,e),e.tag=1,mn(i)?(n=!0,Kc(e)):n=!1,da(e,t),Qx(e,i,r),Sh(e,i,r,t),wh(null,e,i,!0,n,t);case 19:return RS(n,e,t);case 22:return wS(n,e,t)}throw Error(ee(156,e.tag))};function WS(n,e){return gx(n,e)}function w3(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(n,e,t,i){return new w3(n,e,t,i)}function am(n){return n=n.prototype,!(!n||!n.isReactComponent)}function T3(n){if(typeof n=="function")return am(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Tp)return 11;if(n===Ap)return 14}return 2}function Sr(n,e){var t=n.alternate;return t===null?(t=Dn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function bc(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")am(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Ys:return ns(t.children,r,s,e);case wp:a=8,r|=8;break;case jd:return n=Dn(12,t,e,r|2),n.elementType=jd,n.lanes=s,n;case Xd:return n=Dn(13,t,e,r),n.elementType=Xd,n.lanes=s,n;case Yd:return n=Dn(19,t,e,r),n.elementType=Yd,n.lanes=s,n;case Jy:return Iu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Zy:a=10;break e;case Qy:a=9;break e;case Tp:a=11;break e;case Ap:a=14;break e;case nr:a=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=Dn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ns(n,e,t,i){return n=Dn(7,n,i,e),n.lanes=t,n}function Iu(n,e,t,i){return n=Dn(22,n,i,e),n.elementType=Jy,n.lanes=t,n.stateNode={isHidden:!1},n}function cd(n,e,t){return n=Dn(6,n,null,e),n.lanes=t,n}function ud(n,e,t){return e=Dn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function A3(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wf(0),this.expirationTimes=Wf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function om(n,e,t,i,r,s,a,o,l){return n=new A3(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wp(s),n}function b3(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function jS(n){if(!n)return Ar;n=n._reactInternals;e:{if(ys(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(mn(t))return Wx(n,t,e)}return e}function XS(n,e,t,i,r,s,a,o,l){return n=om(t,i,!0,n,r,s,a,o,l),n.context=jS(null),t=n.current,i=an(),r=xr(t),s=Ni(i,r),s.callback=e??null,_r(t,s,r),n.current.lanes=r,al(n,r,i),gn(n,i),n}function Nu(n,e,t,i){var r=e.current,s=an(),a=xr(r);return t=jS(t),e.context===null?e.context=t:e.pendingContext=t,e=Ni(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=_r(r,e,a),n!==null&&(Jn(n,r,a,s),Sc(n,r,a)),a}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function j_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function lm(n,e){j_(n,e),(n=n.alternate)&&j_(n,e)}function R3(){return null}var YS=typeof reportError=="function"?reportError:function(n){console.error(n)};function cm(n){this._internalRoot=n}Du.prototype.render=cm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));Nu(n,e,null,null)};Du.prototype.unmount=cm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;hs(function(){Nu(null,n,null,null)}),e[Bi]=null}};function Du(n){this._internalRoot=n}Du.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ex();n={blockedOn:null,target:n,priority:e};for(var t=0;t<rr.length&&e!==0&&e<rr[t].priority;t++);rr.splice(t,0,n),t===0&&Tx(n)}};function um(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function X_(){}function C3(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cu(a);s.call(c)}}var a=XS(e,i,n,0,null,!1,!1,"",X_);return n._reactRootContainer=a,n[Bi]=a.current,Go(n.nodeType===8?n.parentNode:n),hs(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=cu(l);o.call(c)}}var l=om(n,0,!1,null,null,!1,!1,"",X_);return n._reactRootContainer=l,n[Bi]=l.current,Go(n.nodeType===8?n.parentNode:n),hs(function(){Nu(e,l,t,i)}),l}function Ou(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=cu(a);o.call(l)}}Nu(e,a,n,r)}else a=C3(t,e,n,r,i);return cu(a)}Sx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ao(e.pendingLanes);t!==0&&(Cp(e,t|1),gn(e,St()),!(qe&6)&&(Pa=St()+500,Pr()))}break;case 13:hs(function(){var i=zi(n,1);if(i!==null){var r=an();Jn(i,n,1,r)}}),lm(n,1)}};Pp=function(n){if(n.tag===13){var e=zi(n,134217728);if(e!==null){var t=an();Jn(e,n,134217728,t)}lm(n,134217728)}};Mx=function(n){if(n.tag===13){var e=xr(n),t=zi(n,e);if(t!==null){var i=an();Jn(t,n,e,i)}lm(n,e)}};Ex=function(){return Je};wx=function(n,e){var t=Je;try{return Je=n,e()}finally{Je=t}};ih=function(n,e,t){switch(e){case"input":if(Kd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Au(i);if(!r)throw Error(ee(90));tx(i),Kd(i,r)}}}break;case"textarea":ix(n,t);break;case"select":e=t.value,e!=null&&la(n,!!t.multiple,e,!1)}};ux=im;fx=hs;var P3={usingClientEntryPoint:!1,Events:[ll,Zs,Au,lx,cx,im]},to={findFiberByHostInstance:$r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},L3={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=px(n),n===null?null:n.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||R3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{Mu=fc.inject(L3),fi=fc}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P3;An.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!um(e))throw Error(ee(200));return b3(n,e,null,t)};An.createRoot=function(n,e){if(!um(n))throw Error(ee(299));var t=!1,i="",r=YS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=om(n,1,!1,null,null,t,!1,i,r),n[Bi]=e.current,Go(n.nodeType===8?n.parentNode:n),new cm(e)};An.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=px(e),n=n===null?null:n.stateNode,n};An.flushSync=function(n){return hs(n)};An.hydrate=function(n,e,t){if(!Uu(e))throw Error(ee(200));return Ou(null,n,e,!0,t)};An.hydrateRoot=function(n,e,t){if(!um(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=YS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=XS(e,null,n,1,t??null,r,!1,s,a),n[Bi]=e.current,Go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Du(e)};An.render=function(n,e,t){if(!Uu(e))throw Error(ee(200));return Ou(null,n,e,!1,t)};An.unmountComponentAtNode=function(n){if(!Uu(n))throw Error(ee(40));return n._reactRootContainer?(hs(function(){Ou(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1};An.unstable_batchedUpdates=im;An.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Uu(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return Ou(n,e,t,!1,i)};An.version="18.2.0-next-9e3b772b8-20220608";function $S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($S)}catch(n){console.error(n)}}$S(),Xy.exports=An;var I3=Xy.exports,Y_=I3;Gd.createRoot=Y_.createRoot,Gd.hydrateRoot=Y_.hydrateRoot;Gd.createRoot(document.getElementById("root")).render(C.jsx(gM,{children:C.jsx(RL,{})}));
