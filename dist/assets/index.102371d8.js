(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fi(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lc=fi(Dc);function lo(t){return!!t||t===""}function di(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=te(r)?Fc(r):di(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(te(t))return t;if(X(t))return t}}const xc=/;(?![^(]*\))/g,Uc=/:(.+)/;function Fc(t){const e={};return t.split(xc).forEach(n=>{if(n){const r=n.split(Uc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hi(t){let e="";if(te(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const r=hi(t[n]);r&&(e+=r+" ")}else if(X(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jr=t=>te(t)?t:t==null?"":k(t)||X(t)&&(t.toString===po||!N(t.toString))?JSON.stringify(t,uo,2):String(t),uo=(t,e)=>e&&e.__v_isRef?uo(t,e.value):Ut(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:fo(e)?{[`Set(${e.size})`]:[...e.values()]}:X(e)&&!k(e)&&!go(e)?String(e):e,V={},xt=[],Te=()=>{},Bc=()=>!1,$c=/^on[^a-z]/,qn=t=>$c.test(t),pi=t=>t.startsWith("onUpdate:"),se=Object.assign,gi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jc=Object.prototype.hasOwnProperty,x=(t,e)=>jc.call(t,e),k=Array.isArray,Ut=t=>Gn(t)==="[object Map]",fo=t=>Gn(t)==="[object Set]",N=t=>typeof t=="function",te=t=>typeof t=="string",mi=t=>typeof t=="symbol",X=t=>t!==null&&typeof t=="object",ho=t=>X(t)&&N(t.then)&&N(t.catch),po=Object.prototype.toString,Gn=t=>po.call(t),Hc=t=>Gn(t).slice(8,-1),go=t=>Gn(t)==="[object Object]",_i=t=>te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Sn=fi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vc=/-(\w)/g,Vt=Jn(t=>t.replace(Vc,(e,n)=>n?n.toUpperCase():"")),Wc=/\B([A-Z])/g,qt=Jn(t=>t.replace(Wc,"-$1").toLowerCase()),mo=Jn(t=>t.charAt(0).toUpperCase()+t.slice(1)),_r=Jn(t=>t?`on${mo(t)}`:""),nn=(t,e)=>!Object.is(t,e),br=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let es;const Kc=()=>es||(es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Oe;class qc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Oe&&(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Gc(t,e=Oe){e&&e.active&&e.effects.push(t)}const bi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_o=t=>(t.w&ct)>0,bo=t=>(t.n&ct)>0,Jc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ct},Xc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];_o(i)&&!bo(i)?i.delete(t):e[n++]=i,i.w&=~ct,i.n&=~ct}e.length=n}},Hr=new WeakMap;let Qt=0,ct=1;const Vr=30;let ye;const vt=Symbol(""),Wr=Symbol("");class Ii{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Gc(this,r)}run(){if(!this.active)return this.fn();let e=ye,n=it;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ye,ye=this,it=!0,ct=1<<++Qt,Qt<=Vr?Jc(this):ts(this),this.fn()}finally{Qt<=Vr&&Xc(this),ct=1<<--Qt,ye=this.parent,it=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(ts(this),this.onStop&&this.onStop(),this.active=!1)}}function ts(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let it=!0;const Io=[];function Gt(){Io.push(it),it=!1}function Jt(){const t=Io.pop();it=t===void 0?!0:t}function pe(t,e,n){if(it&&ye){let r=Hr.get(t);r||Hr.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=bi()),vo(i)}}function vo(t,e){let n=!1;Qt<=Vr?bo(t)||(t.n|=ct,n=!_o(t)):n=!t.has(ye),n&&(t.add(ye),ye.deps.push(t))}function Ke(t,e,n,r,i,s){const o=Hr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&k(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":k(t)?_i(n)&&a.push(o.get("length")):(a.push(o.get(vt)),Ut(t)&&a.push(o.get(Wr)));break;case"delete":k(t)||(a.push(o.get(vt)),Ut(t)&&a.push(o.get(Wr)));break;case"set":Ut(t)&&a.push(o.get(vt));break}if(a.length===1)a[0]&&zr(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);zr(bi(c))}}function zr(t,e){const n=k(t)?t:[...t];for(const r of n)r.computed&&ns(r);for(const r of n)r.computed||ns(r)}function ns(t,e){(t!==ye||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Yc=fi("__proto__,__v_isRef,__isVue"),yo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mi)),Qc=vi(),Zc=vi(!1,!0),el=vi(!0),rs=tl();function tl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=F(this);for(let s=0,o=this.length;s<o;s++)pe(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(F)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gt();const r=F(this)[e].apply(this,n);return Jt(),r}}),t}function vi(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?_l:Ao:e?So:wo).get(r))return r;const o=k(r);if(!t&&o&&x(rs,i))return Reflect.get(rs,i,s);const a=Reflect.get(r,i,s);return(mi(i)?yo.has(i):Yc(i))||(t||pe(r,"get",i),e)?a:ie(a)?o&&_i(i)?a:a.value:X(a)?t?Co(a):Yn(a):a}}const nl=Eo(),rl=Eo(!0);function Eo(t=!1){return function(n,r,i,s){let o=n[r];if(Wt(o)&&ie(o)&&!ie(i))return!1;if(!t&&(!Dn(i)&&!Wt(i)&&(o=F(o),i=F(i)),!k(n)&&ie(o)&&!ie(i)))return o.value=i,!0;const a=k(n)&&_i(r)?Number(r)<n.length:x(n,r),c=Reflect.set(n,r,i,s);return n===F(s)&&(a?nn(i,o)&&Ke(n,"set",r,i):Ke(n,"add",r,i)),c}}function il(t,e){const n=x(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ke(t,"delete",e,void 0),r}function sl(t,e){const n=Reflect.has(t,e);return(!mi(e)||!yo.has(e))&&pe(t,"has",e),n}function ol(t){return pe(t,"iterate",k(t)?"length":vt),Reflect.ownKeys(t)}const To={get:Qc,set:nl,deleteProperty:il,has:sl,ownKeys:ol},al={get:el,set(t,e){return!0},deleteProperty(t,e){return!0}},cl=se({},To,{get:Zc,set:rl}),yi=t=>t,Xn=t=>Reflect.getPrototypeOf(t);function bn(t,e,n=!1,r=!1){t=t.__v_raw;const i=F(t),s=F(e);n||(e!==s&&pe(i,"get",e),pe(i,"get",s));const{has:o}=Xn(i),a=r?yi:n?wi:rn;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function In(t,e=!1){const n=this.__v_raw,r=F(n),i=F(t);return e||(t!==i&&pe(r,"has",t),pe(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function vn(t,e=!1){return t=t.__v_raw,!e&&pe(F(t),"iterate",vt),Reflect.get(t,"size",t)}function is(t){t=F(t);const e=F(this);return Xn(e).has.call(e,t)||(e.add(t),Ke(e,"add",t,t)),this}function ss(t,e){e=F(e);const n=F(this),{has:r,get:i}=Xn(n);let s=r.call(n,t);s||(t=F(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?nn(e,o)&&Ke(n,"set",t,e):Ke(n,"add",t,e),this}function os(t){const e=F(this),{has:n,get:r}=Xn(e);let i=n.call(e,t);i||(t=F(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Ke(e,"delete",t,void 0),s}function as(){const t=F(this),e=t.size!==0,n=t.clear();return e&&Ke(t,"clear",void 0,void 0),n}function yn(t,e){return function(r,i){const s=this,o=s.__v_raw,a=F(o),c=e?yi:t?wi:rn;return!t&&pe(a,"iterate",vt),o.forEach((u,d)=>r.call(i,c(u),c(d),s))}}function En(t,e,n){return function(...r){const i=this.__v_raw,s=F(i),o=Ut(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),d=n?yi:e?wi:rn;return!e&&pe(s,"iterate",c?Wr:vt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:a?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Qe(t){return function(...e){return t==="delete"?!1:this}}function ll(){const t={get(s){return bn(this,s)},get size(){return vn(this)},has:In,add:is,set:ss,delete:os,clear:as,forEach:yn(!1,!1)},e={get(s){return bn(this,s,!1,!0)},get size(){return vn(this)},has:In,add:is,set:ss,delete:os,clear:as,forEach:yn(!1,!0)},n={get(s){return bn(this,s,!0)},get size(){return vn(this,!0)},has(s){return In.call(this,s,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:yn(!0,!1)},r={get(s){return bn(this,s,!0,!0)},get size(){return vn(this,!0)},has(s){return In.call(this,s,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=En(s,!1,!1),n[s]=En(s,!0,!1),e[s]=En(s,!1,!0),r[s]=En(s,!0,!0)}),[t,n,e,r]}const[ul,fl,dl,hl]=ll();function Ei(t,e){const n=e?t?hl:dl:t?fl:ul;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(x(n,i)&&i in r?n:r,i,s)}const pl={get:Ei(!1,!1)},gl={get:Ei(!1,!0)},ml={get:Ei(!0,!1)},wo=new WeakMap,So=new WeakMap,Ao=new WeakMap,_l=new WeakMap;function bl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Il(t){return t.__v_skip||!Object.isExtensible(t)?0:bl(Hc(t))}function Yn(t){return Wt(t)?t:Ti(t,!1,To,pl,wo)}function vl(t){return Ti(t,!1,cl,gl,So)}function Co(t){return Ti(t,!0,al,ml,Ao)}function Ti(t,e,n,r,i){if(!X(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Il(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Ft(t){return Wt(t)?Ft(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function Dn(t){return!!(t&&t.__v_isShallow)}function Ro(t){return Ft(t)||Wt(t)}function F(t){const e=t&&t.__v_raw;return e?F(e):t}function Oo(t){return Mn(t,"__v_skip",!0),t}const rn=t=>X(t)?Yn(t):t,wi=t=>X(t)?Co(t):t;function ko(t){it&&ye&&(t=F(t),vo(t.dep||(t.dep=bi())))}function No(t,e){t=F(t),t.dep&&zr(t.dep)}function ie(t){return!!(t&&t.__v_isRef===!0)}function yl(t){return El(t,!1)}function El(t,e){return ie(t)?t:new Tl(t,e)}class Tl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:F(e),this._value=n?e:rn(e)}get value(){return ko(this),this._value}set value(e){const n=this.__v_isShallow||Dn(e)||Wt(e);e=n?e:F(e),nn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:rn(e),No(this))}}function wl(t){return ie(t)?t.value:t}const Sl={get:(t,e,n)=>wl(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ie(i)&&!ie(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Po(t){return Ft(t)?t:new Proxy(t,Sl)}var Mo;class Al{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Mo]=!1,this._dirty=!0,this.effect=new Ii(e,()=>{this._dirty||(this._dirty=!0,No(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=F(this);return ko(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Mo="__v_isReadonly";function Cl(t,e,n=!1){let r,i;const s=N(t);return s?(r=t,i=Te):(r=t.get,i=t.set),new Al(r,i,s||!i,n)}function st(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Qn(s,e,n)}return i}function _e(t,e,n,r){if(N(t)){const s=st(t,e,n,r);return s&&ho(s)&&s.catch(o=>{Qn(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(_e(t[s],e,n,r));return i}function Qn(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){st(c,null,10,[t,o,a]);return}}Rl(t,n,i,r)}function Rl(t,e,n,r=!0){console.error(t)}let Ln=!1,Kr=!1;const re=[];let Ne=0;const Bt=[];let He=null,gt=0;const Do=Promise.resolve();let Si=null;function Ol(t){const e=Si||Do;return t?e.then(this?t.bind(this):t):e}function kl(t){let e=Ne+1,n=re.length;for(;e<n;){const r=e+n>>>1;sn(re[r])<t?e=r+1:n=r}return e}function Ai(t){(!re.length||!re.includes(t,Ln&&t.allowRecurse?Ne+1:Ne))&&(t.id==null?re.push(t):re.splice(kl(t.id),0,t),Lo())}function Lo(){!Ln&&!Kr&&(Kr=!0,Si=Do.then(Uo))}function Nl(t){const e=re.indexOf(t);e>Ne&&re.splice(e,1)}function Pl(t){k(t)?Bt.push(...t):(!He||!He.includes(t,t.allowRecurse?gt+1:gt))&&Bt.push(t),Lo()}function cs(t,e=Ne){for(;e<re.length;e++){const n=re[e];n&&n.pre&&(re.splice(e,1),e--,n())}}function xo(t){if(Bt.length){const e=[...new Set(Bt)];if(Bt.length=0,He){He.push(...e);return}for(He=e,He.sort((n,r)=>sn(n)-sn(r)),gt=0;gt<He.length;gt++)He[gt]();He=null,gt=0}}const sn=t=>t.id==null?1/0:t.id,Ml=(t,e)=>{const n=sn(t)-sn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Uo(t){Kr=!1,Ln=!0,re.sort(Ml);const e=Te;try{for(Ne=0;Ne<re.length;Ne++){const n=re[Ne];n&&n.active!==!1&&st(n,null,14)}}finally{Ne=0,re.length=0,xo(),Ln=!1,Si=null,(re.length||Bt.length)&&Uo()}}function Dl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||V;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||V;b&&(i=n.map(w=>w.trim())),m&&(i=n.map(zc))}let a,c=r[a=_r(e)]||r[a=_r(Vt(e))];!c&&s&&(c=r[a=_r(qt(e))]),c&&_e(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_e(u,t,6,i)}}function Fo(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!N(t)){const c=u=>{const d=Fo(u,e,!0);d&&(a=!0,se(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(X(t)&&r.set(t,null),null):(k(s)?s.forEach(c=>o[c]=null):se(o,s),X(t)&&r.set(t,o),o)}function Zn(t,e){return!t||!qn(e)?!1:(e=e.slice(2).replace(/Once$/,""),x(t,e[0].toLowerCase()+e.slice(1))||x(t,qt(e))||x(t,e))}let Pe=null,er=null;function xn(t){const e=Pe;return Pe=t,er=t&&t.type.__scopeId||null,e}function Bo(t){er=t}function $o(){er=null}function Ll(t,e=Pe,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&bs(-1);const s=xn(e),o=t(...i);return xn(s),r._d&&bs(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:d,renderCache:m,data:b,setupState:w,ctx:P,inheritAttrs:D}=t;let O,M;const ae=xn(t);try{if(n.shapeFlag&4){const q=i||r;O=ke(d.call(q,q,m,s,w,b,P)),M=c}else{const q=e;O=ke(q.length>1?q(s,{attrs:c,slots:a,emit:u}):q(s,null)),M=e.props?c:xl(c)}}catch(q){Zt.length=0,Qn(q,t,1),O=Me(we)}let K=O;if(M&&D!==!1){const q=Object.keys(M),{shapeFlag:Z}=K;q.length&&Z&7&&(o&&q.some(pi)&&(M=Ul(M,o)),K=lt(K,M))}return n.dirs&&(K=lt(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),O=K,xn(ae),O}const xl=t=>{let e;for(const n in t)(n==="class"||n==="style"||qn(n))&&((e||(e={}))[n]=t[n]);return e},Ul=(t,e)=>{const n={};for(const r in t)(!pi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fl(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ls(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Zn(u,b))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ls(r,o,u):!0:!!o;return!1}function ls(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Zn(n,s))return!0}return!1}function Bl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $l=t=>t.__isSuspense;function jl(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):Pl(t)}function Hl(t,e){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[t]=e}}function vr(t,e,n=!1){const r=ee||Pe;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&N(e)?e.call(r.proxy):e}}const us={};function yr(t,e,n){return jo(t,e,n)}function jo(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=V){const a=ee;let c,u=!1,d=!1;if(ie(t)?(c=()=>t.value,u=Dn(t)):Ft(t)?(c=()=>t,r=!0):k(t)?(d=!0,u=t.some(M=>Ft(M)||Dn(M)),c=()=>t.map(M=>{if(ie(M))return M.value;if(Ft(M))return Lt(M);if(N(M))return st(M,a,2)})):N(t)?e?c=()=>st(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return m&&m(),_e(t,a,3,[b])}:c=Te,e&&r){const M=c;c=()=>Lt(M())}let m,b=M=>{m=O.onStop=()=>{st(M,a,4)}};if(an)return b=Te,e?n&&_e(e,a,3,[c(),d?[]:void 0,b]):c(),Te;let w=d?[]:us;const P=()=>{if(!!O.active)if(e){const M=O.run();(r||u||(d?M.some((ae,K)=>nn(ae,w[K])):nn(M,w)))&&(m&&m(),_e(e,a,3,[M,w===us?void 0:w,b]),w=M)}else O.run()};P.allowRecurse=!!e;let D;i==="sync"?D=P:i==="post"?D=()=>fe(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),D=()=>Ai(P));const O=new Ii(c,D);return e?n?P():w=O.run():i==="post"?fe(O.run.bind(O),a&&a.suspense):O.run(),()=>{O.stop(),a&&a.scope&&gi(a.scope.effects,O)}}function Vl(t,e,n){const r=this.proxy,i=te(t)?t.includes(".")?Ho(r,t):()=>r[t]:t.bind(r,r);let s;N(e)?s=e:(s=e.handler,n=e);const o=ee;zt(this);const a=jo(i,s.bind(r),n);return o?zt(o):yt(),a}function Ho(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Lt(t,e){if(!X(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ie(t))Lt(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)Lt(t[n],e);else if(fo(t)||Ut(t))t.forEach(n=>{Lt(n,e)});else if(go(t))for(const n in t)Lt(t[n],e);return t}function Wl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ko(()=>{t.isMounted=!0}),qo(()=>{t.isUnmounting=!0}),t}const ge=[Function,Array],zl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ge,onEnter:ge,onAfterEnter:ge,onEnterCancelled:ge,onBeforeLeave:ge,onLeave:ge,onAfterLeave:ge,onLeaveCancelled:ge,onBeforeAppear:ge,onAppear:ge,onAfterAppear:ge,onAppearCancelled:ge},setup(t,{slots:e}){const n=Nu(),r=Wl();let i;return()=>{const s=e.default&&Wo(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const D of s)if(D.type!==we){o=D;break}}const a=F(t),{mode:c}=a;if(r.isLeaving)return Er(o);const u=fs(o);if(!u)return Er(o);const d=qr(u,a,r,n);Gr(u,d);const m=n.subTree,b=m&&fs(m);let w=!1;const{getTransitionKey:P}=u.type;if(P){const D=P();i===void 0?i=D:D!==i&&(i=D,w=!0)}if(b&&b.type!==we&&(!mt(u,b)||w)){const D=qr(b,a,r,n);if(Gr(b,D),c==="out-in")return r.isLeaving=!0,D.afterLeave=()=>{r.isLeaving=!1,n.update()},Er(o);c==="in-out"&&u.type!==we&&(D.delayLeave=(O,M,ae)=>{const K=Vo(r,b);K[String(b.key)]=b,O._leaveCb=()=>{M(),O._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=ae})}return o}}},Kl=zl;function Vo(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function qr(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:b,onAfterLeave:w,onLeaveCancelled:P,onBeforeAppear:D,onAppear:O,onAfterAppear:M,onAppearCancelled:ae}=e,K=String(t.key),q=Vo(n,t),Z=(L,H)=>{L&&_e(L,r,9,H)},Se=(L,H)=>{const G=H[1];Z(L,H),k(L)?L.every(le=>le.length<=1)&&G():L.length<=1&&G()},Ae={mode:s,persisted:o,beforeEnter(L){let H=a;if(!n.isMounted)if(i)H=D||a;else return;L._leaveCb&&L._leaveCb(!0);const G=q[K];G&&mt(t,G)&&G.el._leaveCb&&G.el._leaveCb(),Z(H,[L])},enter(L){let H=c,G=u,le=d;if(!n.isMounted)if(i)H=O||c,G=M||u,le=ae||d;else return;let be=!1;const Be=L._enterCb=mn=>{be||(be=!0,mn?Z(le,[L]):Z(G,[L]),Ae.delayedLeave&&Ae.delayedLeave(),L._enterCb=void 0)};H?Se(H,[L,Be]):Be()},leave(L,H){const G=String(t.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return H();Z(m,[L]);let le=!1;const be=L._leaveCb=Be=>{le||(le=!0,H(),Be?Z(P,[L]):Z(w,[L]),L._leaveCb=void 0,q[G]===t&&delete q[G])};q[G]=t,b?Se(b,[L,be]):be()},clone(L){return qr(L,e,n,r)}};return Ae}function Er(t){if(tr(t))return t=lt(t),t.children=null,t}function fs(t){return tr(t)?t.children?t.children[0]:void 0:t}function Gr(t,e){t.shapeFlag&6&&t.component?Gr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wo(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===me?(o.patchFlag&128&&i++,r=r.concat(Wo(o.children,e,a))):(e||o.type!==we)&&r.push(a!=null?lt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ql(t){return N(t)?{setup:t,name:t.name}:t}const An=t=>!!t.type.__asyncLoader,tr=t=>t.type.__isKeepAlive;function Gl(t,e){zo(t,"a",e)}function Jl(t,e){zo(t,"da",e)}function zo(t,e,n=ee){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(nr(e,r,n),n){let i=n.parent;for(;i&&i.parent;)tr(i.parent.vnode)&&Xl(r,e,n,i),i=i.parent}}function Xl(t,e,n,r){const i=nr(e,t,r,!0);Go(()=>{gi(r[e],i)},n)}function nr(t,e,n=ee,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gt(),zt(n);const a=_e(e,n,t,o);return yt(),Jt(),a});return r?i.unshift(s):i.push(s),s}}const Je=t=>(e,n=ee)=>(!an||t==="sp")&&nr(t,e,n),Yl=Je("bm"),Ko=Je("m"),Ql=Je("bu"),Zl=Je("u"),qo=Je("bum"),Go=Je("um"),eu=Je("sp"),tu=Je("rtg"),nu=Je("rtc");function ru(t,e=ee){nr("ec",t,e)}function ft(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Gt(),_e(c,n,8,[t.el,a,t,e]),Jt())}}const iu=Symbol(),Jr=t=>t?oa(t)?ki(t)||t.proxy:Jr(t.parent):null,Un=se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jr(t.parent),$root:t=>Jr(t.root),$emit:t=>t.emit,$options:t=>Xo(t),$forceUpdate:t=>t.f||(t.f=()=>Ai(t.update)),$nextTick:t=>t.n||(t.n=Ol.bind(t.proxy)),$watch:t=>Vl.bind(t)}),su={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==V&&x(r,e))return o[e]=1,r[e];if(i!==V&&x(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&x(u,e))return o[e]=3,s[e];if(n!==V&&x(n,e))return o[e]=4,n[e];Xr&&(o[e]=0)}}const d=Un[e];let m,b;if(d)return e==="$attrs"&&pe(t,"get",e),d(t);if((m=a.__cssModules)&&(m=m[e]))return m;if(n!==V&&x(n,e))return o[e]=4,n[e];if(b=c.config.globalProperties,x(b,e))return b[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==V&&x(i,e)?(i[e]=n,!0):r!==V&&x(r,e)?(r[e]=n,!0):x(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==V&&x(t,o)||e!==V&&x(e,o)||(a=s[0])&&x(a,o)||x(r,o)||x(Un,o)||x(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:x(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Xr=!0;function ou(t){const e=Xo(t),n=t.proxy,r=t.ctx;Xr=!1,e.beforeCreate&&ds(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:w,updated:P,activated:D,deactivated:O,beforeDestroy:M,beforeUnmount:ae,destroyed:K,unmounted:q,render:Z,renderTracked:Se,renderTriggered:Ae,errorCaptured:L,serverPrefetch:H,expose:G,inheritAttrs:le,components:be,directives:Be,filters:mn}=e;if(u&&au(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const J in o){const W=o[J];N(W)&&(r[J]=W.bind(n))}if(i){const J=i.call(n,n);X(J)&&(t.data=Yn(J))}if(Xr=!0,s)for(const J in s){const W=s[J],$e=N(W)?W.bind(n,n):N(W.get)?W.get.bind(n,n):Te,pr=!N(W)&&N(W.set)?W.set.bind(n):Te,Xt=Uu({get:$e,set:pr});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Pt=>Xt.value=Pt})}if(a)for(const J in a)Jo(a[J],r,n,J);if(c){const J=N(c)?c.call(n):c;Reflect.ownKeys(J).forEach(W=>{Hl(W,J[W])})}d&&ds(d,t,"c");function ue(J,W){k(W)?W.forEach($e=>J($e.bind(n))):W&&J(W.bind(n))}if(ue(Yl,m),ue(Ko,b),ue(Ql,w),ue(Zl,P),ue(Gl,D),ue(Jl,O),ue(ru,L),ue(nu,Se),ue(tu,Ae),ue(qo,ae),ue(Go,q),ue(eu,H),k(G))if(G.length){const J=t.exposed||(t.exposed={});G.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:$e=>n[W]=$e})})}else t.exposed||(t.exposed={});Z&&t.render===Te&&(t.render=Z),le!=null&&(t.inheritAttrs=le),be&&(t.components=be),Be&&(t.directives=Be)}function au(t,e,n=Te,r=!1){k(t)&&(t=Yr(t));for(const i in t){const s=t[i];let o;X(s)?"default"in s?o=vr(s.from||i,s.default,!0):o=vr(s.from||i):o=vr(s),ie(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ds(t,e,n){_e(k(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jo(t,e,n,r){const i=r.includes(".")?Ho(n,r):()=>n[r];if(te(t)){const s=e[t];N(s)&&yr(i,s)}else if(N(t))yr(i,t.bind(n));else if(X(t))if(k(t))t.forEach(s=>Jo(s,e,n,r));else{const s=N(t.handler)?t.handler.bind(n):e[t.handler];N(s)&&yr(i,s,t)}}function Xo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Fn(c,u,o,!0)),Fn(c,e,o)),X(e)&&s.set(e,c),c}function Fn(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Fn(t,s,n,!0),i&&i.forEach(o=>Fn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=cu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cu={data:hs,props:ht,emits:ht,methods:ht,computed:ht,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:ht,directives:ht,watch:uu,provide:hs,inject:lu};function hs(t,e){return e?t?function(){return se(N(t)?t.call(this,this):t,N(e)?e.call(this,this):e)}:e:t}function lu(t,e){return ht(Yr(t),Yr(e))}function Yr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ce(t,e){return t?[...new Set([].concat(t,e))]:e}function ht(t,e){return t?se(se(Object.create(null),t),e):e}function uu(t,e){if(!t)return e;if(!e)return t;const n=se(Object.create(null),t);for(const r in e)n[r]=ce(t[r],e[r]);return n}function fu(t,e,n,r=!1){const i={},s={};Mn(s,rr,1),t.propsDefaults=Object.create(null),Yo(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:vl(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function du(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=F(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Zn(t.emitsOptions,b))continue;const w=e[b];if(c)if(x(s,b))w!==s[b]&&(s[b]=w,u=!0);else{const P=Vt(b);i[P]=Qr(c,a,P,w,t,!1)}else w!==s[b]&&(s[b]=w,u=!0)}}}else{Yo(t,e,i,s)&&(u=!0);let d;for(const m in a)(!e||!x(e,m)&&((d=qt(m))===m||!x(e,d)))&&(c?n&&(n[m]!==void 0||n[d]!==void 0)&&(i[m]=Qr(c,a,m,void 0,t,!0)):delete i[m]);if(s!==a)for(const m in s)(!e||!x(e,m)&&!0)&&(delete s[m],u=!0)}u&&Ke(t,"set","$attrs")}function Yo(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Sn(c))continue;const u=e[c];let d;i&&x(i,d=Vt(c))?!s||!s.includes(d)?n[d]=u:(a||(a={}))[d]=u:Zn(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=F(n),u=a||V;for(let d=0;d<s.length;d++){const m=s[d];n[m]=Qr(i,c,m,u[m],t,!x(u,m))}}return o}function Qr(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=x(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&N(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(zt(i),r=u[n]=c.call(null,e),yt())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===qt(n))&&(r=!0))}return r}function Qo(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!N(t)){const d=m=>{c=!0;const[b,w]=Qo(m,e,!0);se(o,b),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!c)return X(t)&&r.set(t,xt),xt;if(k(s))for(let d=0;d<s.length;d++){const m=Vt(s[d]);ps(m)&&(o[m]=V)}else if(s)for(const d in s){const m=Vt(d);if(ps(m)){const b=s[d],w=o[m]=k(b)||N(b)?{type:b}:b;if(w){const P=_s(Boolean,w.type),D=_s(String,w.type);w[0]=P>-1,w[1]=D<0||P<D,(P>-1||x(w,"default"))&&a.push(m)}}}const u=[o,a];return X(t)&&r.set(t,u),u}function ps(t){return t[0]!=="$"}function gs(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ms(t,e){return gs(t)===gs(e)}function _s(t,e){return k(e)?e.findIndex(n=>ms(n,t)):N(e)&&ms(e,t)?0:-1}const Zo=t=>t[0]==="_"||t==="$stable",Ci=t=>k(t)?t.map(ke):[ke(t)],hu=(t,e,n)=>{if(e._n)return e;const r=Ll((...i)=>Ci(e(...i)),n);return r._c=!1,r},ea=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Zo(i))continue;const s=t[i];if(N(s))e[i]=hu(i,s,r);else if(s!=null){const o=Ci(s);e[i]=()=>o}}},ta=(t,e)=>{const n=Ci(e);t.slots.default=()=>n},pu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=F(e),Mn(e,"_",n)):ea(e,t.slots={})}else t.slots={},e&&ta(t,e);Mn(t.slots,rr,1)},gu=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=V;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(se(i,e),!n&&a===1&&delete i._):(s=!e.$stable,ea(e,i)),o=e}else e&&(ta(t,e),o={default:1});if(s)for(const a in i)!Zo(a)&&!(a in o)&&delete i[a]};function na(){return{app:null,config:{isNativeTag:Bc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mu=0;function _u(t,e){return function(r,i=null){N(r)||(r=Object.assign({},r)),i!=null&&!X(i)&&(i=null);const s=na(),o=new Set;let a=!1;const c=s.app={_uid:mu++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Fu,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&N(u.install)?(o.add(u),u.install(c,...d)):N(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,m){if(!a){const b=Me(r,i);return b.appContext=s,d&&e?e(b,u):t(b,u,m),a=!0,c._container=u,u.__vue_app__=c,ki(b.component)||b.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c}};return c}}function Zr(t,e,n,r,i=!1){if(k(t)){t.forEach((b,w)=>Zr(b,e&&(k(e)?e[w]:e),n,r,i));return}if(An(r)&&!i)return;const s=r.shapeFlag&4?ki(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,d=a.refs===V?a.refs={}:a.refs,m=a.setupState;if(u!=null&&u!==c&&(te(u)?(d[u]=null,x(m,u)&&(m[u]=null)):ie(u)&&(u.value=null)),N(c))st(c,a,12,[o,d]);else{const b=te(c),w=ie(c);if(b||w){const P=()=>{if(t.f){const D=b?d[c]:c.value;i?k(D)&&gi(D,s):k(D)?D.includes(s)||D.push(s):b?(d[c]=[s],x(m,c)&&(m[c]=d[c])):(c.value=[s],t.k&&(d[t.k]=c.value))}else b?(d[c]=o,x(m,c)&&(m[c]=o)):w&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,fe(P,n)):P()}}}const fe=jl;function bu(t){return Iu(t)}function Iu(t,e){const n=Kc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:w=Te,cloneNode:P,insertStaticContent:D}=t,O=(l,f,h,g=null,p=null,v=null,E=!1,I=null,y=!!f.dynamicChildren)=>{if(l===f)return;l&&!mt(l,f)&&(g=_n(l),Ye(l,p,v,!0),l=null),f.patchFlag===-2&&(y=!1,f.dynamicChildren=null);const{type:_,ref:S,shapeFlag:T}=f;switch(_){case Ri:M(l,f,h,g);break;case we:ae(l,f,h,g);break;case Tr:l==null&&K(f,h,g,E);break;case me:Be(l,f,h,g,p,v,E,I,y);break;default:T&1?Se(l,f,h,g,p,v,E,I,y):T&6?mn(l,f,h,g,p,v,E,I,y):(T&64||T&128)&&_.process(l,f,h,g,p,v,E,I,y,Mt)}S!=null&&p&&Zr(S,l&&l.ref,v,f||l,!f)},M=(l,f,h,g)=>{if(l==null)r(f.el=a(f.children),h,g);else{const p=f.el=l.el;f.children!==l.children&&u(p,f.children)}},ae=(l,f,h,g)=>{l==null?r(f.el=c(f.children||""),h,g):f.el=l.el},K=(l,f,h,g)=>{[l.el,l.anchor]=D(l.children,f,h,g,l.el,l.anchor)},q=({el:l,anchor:f},h,g)=>{let p;for(;l&&l!==f;)p=b(l),r(l,h,g),l=p;r(f,h,g)},Z=({el:l,anchor:f})=>{let h;for(;l&&l!==f;)h=b(l),i(l),l=h;i(f)},Se=(l,f,h,g,p,v,E,I,y)=>{E=E||f.type==="svg",l==null?Ae(f,h,g,p,v,E,I,y):G(l,f,p,v,E,I,y)},Ae=(l,f,h,g,p,v,E,I)=>{let y,_;const{type:S,props:T,shapeFlag:A,transition:C,patchFlag:U,dirs:B}=l;if(l.el&&P!==void 0&&U===-1)y=l.el=P(l.el);else{if(y=l.el=o(l.type,v,T&&T.is,T),A&8?d(y,l.children):A&16&&H(l.children,y,null,g,p,v&&S!=="foreignObject",E,I),B&&ft(l,null,g,"created"),T){for(const z in T)z!=="value"&&!Sn(z)&&s(y,z,null,T[z],v,l.children,g,p,je);"value"in T&&s(y,"value",null,T.value),(_=T.onVnodeBeforeMount)&&Re(_,g,l)}L(y,l,l.scopeId,E,g)}B&&ft(l,null,g,"beforeMount");const $=(!p||p&&!p.pendingBranch)&&C&&!C.persisted;$&&C.beforeEnter(y),r(y,f,h),((_=T&&T.onVnodeMounted)||$||B)&&fe(()=>{_&&Re(_,g,l),$&&C.enter(y),B&&ft(l,null,g,"mounted")},p)},L=(l,f,h,g,p)=>{if(h&&w(l,h),g)for(let v=0;v<g.length;v++)w(l,g[v]);if(p){let v=p.subTree;if(f===v){const E=p.vnode;L(l,E,E.scopeId,E.slotScopeIds,p.parent)}}},H=(l,f,h,g,p,v,E,I,y=0)=>{for(let _=y;_<l.length;_++){const S=l[_]=I?et(l[_]):ke(l[_]);O(null,S,f,h,g,p,v,E,I)}},G=(l,f,h,g,p,v,E)=>{const I=f.el=l.el;let{patchFlag:y,dynamicChildren:_,dirs:S}=f;y|=l.patchFlag&16;const T=l.props||V,A=f.props||V;let C;h&&dt(h,!1),(C=A.onVnodeBeforeUpdate)&&Re(C,h,f,l),S&&ft(f,l,h,"beforeUpdate"),h&&dt(h,!0);const U=p&&f.type!=="foreignObject";if(_?le(l.dynamicChildren,_,I,h,g,U,v):E||$e(l,f,I,null,h,g,U,v,!1),y>0){if(y&16)be(I,f,T,A,h,g,p);else if(y&2&&T.class!==A.class&&s(I,"class",null,A.class,p),y&4&&s(I,"style",T.style,A.style,p),y&8){const B=f.dynamicProps;for(let $=0;$<B.length;$++){const z=B[$],Ie=T[z],Dt=A[z];(Dt!==Ie||z==="value")&&s(I,z,Ie,Dt,p,l.children,h,g,je)}}y&1&&l.children!==f.children&&d(I,f.children)}else!E&&_==null&&be(I,f,T,A,h,g,p);((C=A.onVnodeUpdated)||S)&&fe(()=>{C&&Re(C,h,f,l),S&&ft(f,l,h,"updated")},g)},le=(l,f,h,g,p,v,E)=>{for(let I=0;I<f.length;I++){const y=l[I],_=f[I],S=y.el&&(y.type===me||!mt(y,_)||y.shapeFlag&70)?m(y.el):h;O(y,_,S,null,g,p,v,E,!0)}},be=(l,f,h,g,p,v,E)=>{if(h!==g){for(const I in g){if(Sn(I))continue;const y=g[I],_=h[I];y!==_&&I!=="value"&&s(l,I,_,y,E,f.children,p,v,je)}if(h!==V)for(const I in h)!Sn(I)&&!(I in g)&&s(l,I,h[I],null,E,f.children,p,v,je);"value"in g&&s(l,"value",h.value,g.value)}},Be=(l,f,h,g,p,v,E,I,y)=>{const _=f.el=l?l.el:a(""),S=f.anchor=l?l.anchor:a("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:C}=f;C&&(I=I?I.concat(C):C),l==null?(r(_,h,g),r(S,h,g),H(f.children,h,S,p,v,E,I,y)):T>0&&T&64&&A&&l.dynamicChildren?(le(l.dynamicChildren,A,h,p,v,E,I),(f.key!=null||p&&f===p.subTree)&&ra(l,f,!0)):$e(l,f,h,S,p,v,E,I,y)},mn=(l,f,h,g,p,v,E,I,y)=>{f.slotScopeIds=I,l==null?f.shapeFlag&512?p.ctx.activate(f,h,g,E,y):hr(f,h,g,p,v,E,y):ue(l,f,y)},hr=(l,f,h,g,p,v,E)=>{const I=l.component=ku(l,g,p);if(tr(l)&&(I.ctx.renderer=Mt),Pu(I),I.asyncDep){if(p&&p.registerDep(I,J),!l.el){const y=I.subTree=Me(we);ae(null,y,f,h)}return}J(I,l,f,h,p,v,E)},ue=(l,f,h)=>{const g=f.component=l.component;if(Fl(l,f,h))if(g.asyncDep&&!g.asyncResolved){W(g,f,h);return}else g.next=f,Nl(g.update),g.update();else f.el=l.el,g.vnode=f},J=(l,f,h,g,p,v,E)=>{const I=()=>{if(l.isMounted){let{next:S,bu:T,u:A,parent:C,vnode:U}=l,B=S,$;dt(l,!1),S?(S.el=U.el,W(l,S,E)):S=U,T&&br(T),($=S.props&&S.props.onVnodeBeforeUpdate)&&Re($,C,S,U),dt(l,!0);const z=Ir(l),Ie=l.subTree;l.subTree=z,O(Ie,z,m(Ie.el),_n(Ie),l,p,v),S.el=z.el,B===null&&Bl(l,z.el),A&&fe(A,p),($=S.props&&S.props.onVnodeUpdated)&&fe(()=>Re($,C,S,U),p)}else{let S;const{el:T,props:A}=f,{bm:C,m:U,parent:B}=l,$=An(f);if(dt(l,!1),C&&br(C),!$&&(S=A&&A.onVnodeBeforeMount)&&Re(S,B,f),dt(l,!0),T&&mr){const z=()=>{l.subTree=Ir(l),mr(T,l.subTree,l,p,null)};$?f.type.__asyncLoader().then(()=>!l.isUnmounted&&z()):z()}else{const z=l.subTree=Ir(l);O(null,z,h,g,l,p,v),f.el=z.el}if(U&&fe(U,p),!$&&(S=A&&A.onVnodeMounted)){const z=f;fe(()=>Re(S,B,z),p)}(f.shapeFlag&256||B&&An(B.vnode)&&B.vnode.shapeFlag&256)&&l.a&&fe(l.a,p),l.isMounted=!0,f=h=g=null}},y=l.effect=new Ii(I,()=>Ai(_),l.scope),_=l.update=()=>y.run();_.id=l.uid,dt(l,!0),_()},W=(l,f,h)=>{f.component=l;const g=l.vnode.props;l.vnode=f,l.next=null,du(l,f.props,g,h),gu(l,f.children,h),Gt(),cs(),Jt()},$e=(l,f,h,g,p,v,E,I,y=!1)=>{const _=l&&l.children,S=l?l.shapeFlag:0,T=f.children,{patchFlag:A,shapeFlag:C}=f;if(A>0){if(A&128){Xt(_,T,h,g,p,v,E,I,y);return}else if(A&256){pr(_,T,h,g,p,v,E,I,y);return}}C&8?(S&16&&je(_,p,v),T!==_&&d(h,T)):S&16?C&16?Xt(_,T,h,g,p,v,E,I,y):je(_,p,v,!0):(S&8&&d(h,""),C&16&&H(T,h,g,p,v,E,I,y))},pr=(l,f,h,g,p,v,E,I,y)=>{l=l||xt,f=f||xt;const _=l.length,S=f.length,T=Math.min(_,S);let A;for(A=0;A<T;A++){const C=f[A]=y?et(f[A]):ke(f[A]);O(l[A],C,h,null,p,v,E,I,y)}_>S?je(l,p,v,!0,!1,T):H(f,h,g,p,v,E,I,y,T)},Xt=(l,f,h,g,p,v,E,I,y)=>{let _=0;const S=f.length;let T=l.length-1,A=S-1;for(;_<=T&&_<=A;){const C=l[_],U=f[_]=y?et(f[_]):ke(f[_]);if(mt(C,U))O(C,U,h,null,p,v,E,I,y);else break;_++}for(;_<=T&&_<=A;){const C=l[T],U=f[A]=y?et(f[A]):ke(f[A]);if(mt(C,U))O(C,U,h,null,p,v,E,I,y);else break;T--,A--}if(_>T){if(_<=A){const C=A+1,U=C<S?f[C].el:g;for(;_<=A;)O(null,f[_]=y?et(f[_]):ke(f[_]),h,U,p,v,E,I,y),_++}}else if(_>A)for(;_<=T;)Ye(l[_],p,v,!0),_++;else{const C=_,U=_,B=new Map;for(_=U;_<=A;_++){const de=f[_]=y?et(f[_]):ke(f[_]);de.key!=null&&B.set(de.key,_)}let $,z=0;const Ie=A-U+1;let Dt=!1,Yi=0;const Yt=new Array(Ie);for(_=0;_<Ie;_++)Yt[_]=0;for(_=C;_<=T;_++){const de=l[_];if(z>=Ie){Ye(de,p,v,!0);continue}let Ce;if(de.key!=null)Ce=B.get(de.key);else for($=U;$<=A;$++)if(Yt[$-U]===0&&mt(de,f[$])){Ce=$;break}Ce===void 0?Ye(de,p,v,!0):(Yt[Ce-U]=_+1,Ce>=Yi?Yi=Ce:Dt=!0,O(de,f[Ce],h,null,p,v,E,I,y),z++)}const Qi=Dt?vu(Yt):xt;for($=Qi.length-1,_=Ie-1;_>=0;_--){const de=U+_,Ce=f[de],Zi=de+1<S?f[de+1].el:g;Yt[_]===0?O(null,Ce,h,Zi,p,v,E,I,y):Dt&&($<0||_!==Qi[$]?Pt(Ce,h,Zi,2):$--)}}},Pt=(l,f,h,g,p=null)=>{const{el:v,type:E,transition:I,children:y,shapeFlag:_}=l;if(_&6){Pt(l.component.subTree,f,h,g);return}if(_&128){l.suspense.move(f,h,g);return}if(_&64){E.move(l,f,h,Mt);return}if(E===me){r(v,f,h);for(let T=0;T<y.length;T++)Pt(y[T],f,h,g);r(l.anchor,f,h);return}if(E===Tr){q(l,f,h);return}if(g!==2&&_&1&&I)if(g===0)I.beforeEnter(v),r(v,f,h),fe(()=>I.enter(v),p);else{const{leave:T,delayLeave:A,afterLeave:C}=I,U=()=>r(v,f,h),B=()=>{T(v,()=>{U(),C&&C()})};A?A(v,U,B):B()}else r(v,f,h)},Ye=(l,f,h,g=!1,p=!1)=>{const{type:v,props:E,ref:I,children:y,dynamicChildren:_,shapeFlag:S,patchFlag:T,dirs:A}=l;if(I!=null&&Zr(I,null,h,l,!0),S&256){f.ctx.deactivate(l);return}const C=S&1&&A,U=!An(l);let B;if(U&&(B=E&&E.onVnodeBeforeUnmount)&&Re(B,f,l),S&6)Mc(l.component,h,g);else{if(S&128){l.suspense.unmount(h,g);return}C&&ft(l,null,f,"beforeUnmount"),S&64?l.type.remove(l,f,h,p,Mt,g):_&&(v!==me||T>0&&T&64)?je(_,f,h,!1,!0):(v===me&&T&384||!p&&S&16)&&je(y,f,h),g&&Ji(l)}(U&&(B=E&&E.onVnodeUnmounted)||C)&&fe(()=>{B&&Re(B,f,l),C&&ft(l,null,f,"unmounted")},h)},Ji=l=>{const{type:f,el:h,anchor:g,transition:p}=l;if(f===me){Pc(h,g);return}if(f===Tr){Z(l);return}const v=()=>{i(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:E,delayLeave:I}=p,y=()=>E(h,v);I?I(l.el,v,y):y()}else v()},Pc=(l,f)=>{let h;for(;l!==f;)h=b(l),i(l),l=h;i(f)},Mc=(l,f,h)=>{const{bum:g,scope:p,update:v,subTree:E,um:I}=l;g&&br(g),p.stop(),v&&(v.active=!1,Ye(E,l,f,h)),I&&fe(I,f),fe(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},je=(l,f,h,g=!1,p=!1,v=0)=>{for(let E=v;E<l.length;E++)Ye(l[E],f,h,g,p)},_n=l=>l.shapeFlag&6?_n(l.component.subTree):l.shapeFlag&128?l.suspense.next():b(l.anchor||l.el),Xi=(l,f,h)=>{l==null?f._vnode&&Ye(f._vnode,null,null,!0):O(f._vnode||null,l,f,null,null,null,h),cs(),xo(),f._vnode=l},Mt={p:O,um:Ye,m:Pt,r:Ji,mt:hr,mc:H,pc:$e,pbc:le,n:_n,o:t};let gr,mr;return e&&([gr,mr]=e(Mt)),{render:Xi,hydrate:gr,createApp:_u(Xi,gr)}}function dt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ra(t,e,n=!1){const r=t.children,i=e.children;if(k(r)&&k(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=et(i[s]),a.el=o.el),n||ra(o,a))}}function vu(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const yu=t=>t.__isTeleport,me=Symbol(void 0),Ri=Symbol(void 0),we=Symbol(void 0),Tr=Symbol(void 0),Zt=[];let Ee=null;function en(t=!1){Zt.push(Ee=t?null:[])}function Eu(){Zt.pop(),Ee=Zt[Zt.length-1]||null}let on=1;function bs(t){on+=t}function ia(t){return t.dynamicChildren=on>0?Ee||xt:null,Eu(),on>0&&Ee&&Ee.push(t),t}function Cn(t,e,n,r,i,s){return ia(Y(t,e,n,r,i,s,!0))}function Tu(t,e,n,r,i){return ia(Me(t,e,n,r,i,!0))}function wu(t){return t?t.__v_isVNode===!0:!1}function mt(t,e){return t.type===e.type&&t.key===e.key}const rr="__vInternal",sa=({key:t})=>t!=null?t:null,Rn=({ref:t,ref_key:e,ref_for:n})=>t!=null?te(t)||ie(t)||N(t)?{i:Pe,r:t,k:e,f:!!n}:t:null;function Y(t,e=null,n=null,r=0,i=null,s=t===me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sa(e),ref:e&&Rn(e),scopeId:er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Oi(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=te(n)?8:16),on>0&&!o&&Ee&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ee.push(c),c}const Me=Su;function Su(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===iu)&&(t=we),wu(t)){const a=lt(t,e,!0);return n&&Oi(a,n),on>0&&!s&&Ee&&(a.shapeFlag&6?Ee[Ee.indexOf(t)]=a:Ee.push(a)),a.patchFlag|=-2,a}if(xu(t)&&(t=t.__vccOpts),e){e=Au(e);let{class:a,style:c}=e;a&&!te(a)&&(e.class=hi(a)),X(c)&&(Ro(c)&&!k(c)&&(c=se({},c)),e.style=di(c))}const o=te(t)?1:$l(t)?128:yu(t)?64:X(t)?4:N(t)?2:0;return Y(t,e,n,r,i,o,s,!0)}function Au(t){return t?Ro(t)||rr in t?se({},t):t:null}function lt(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Cu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sa(a),ref:e&&e.ref?n&&i?k(i)?i.concat(Rn(e)):[i,Rn(e)]:Rn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==me?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lt(t.ssContent),ssFallback:t.ssFallback&&lt(t.ssFallback),el:t.el,anchor:t.anchor}}function wt(t=" ",e=0){return Me(Ri,null,t,e)}function Is(t="",e=!1){return e?(en(),Tu(we,null,t)):Me(we,null,t)}function ke(t){return t==null||typeof t=="boolean"?Me(we):k(t)?Me(me,null,t.slice()):typeof t=="object"?et(t):Me(Ri,null,String(t))}function et(t){return t.el===null||t.memo?t:lt(t)}function Oi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Oi(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(rr in e)?e._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else N(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),r&64?(n=16,e=[wt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=hi([e.class,r.class]));else if(i==="style")e.style=di([e.style,r.style]);else if(qn(i)){const s=e[i],o=r[i];o&&s!==o&&!(k(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Re(t,e,n,r=null){_e(t,e,7,[n,r])}const Ru=na();let Ou=0;function ku(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Ru,s={uid:Ou++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qo(r,i),emitsOptions:Fo(r,i),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dl.bind(null,s),t.ce&&t.ce(s),s}let ee=null;const Nu=()=>ee||Pe,zt=t=>{ee=t,t.scope.on()},yt=()=>{ee&&ee.scope.off(),ee=null};function oa(t){return t.vnode.shapeFlag&4}let an=!1;function Pu(t,e=!1){an=e;const{props:n,children:r}=t.vnode,i=oa(t);fu(t,n,i,e),pu(t,r);const s=i?Mu(t,e):void 0;return an=!1,s}function Mu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Oo(new Proxy(t.ctx,su));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Lu(t):null;zt(t),Gt();const s=st(r,t,0,[t.props,i]);if(Jt(),yt(),ho(s)){if(s.then(yt,yt),e)return s.then(o=>{vs(t,o,e)}).catch(o=>{Qn(o,t,0)});t.asyncDep=s}else vs(t,s,e)}else aa(t,e)}function vs(t,e,n){N(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:X(e)&&(t.setupState=Po(e)),aa(t,n)}let ys;function aa(t,e,n){const r=t.type;if(!t.render){if(!e&&ys&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=se(se({isCustomElement:s,delimiters:a},o),c);r.render=ys(i,u)}}t.render=r.render||Te}zt(t),Gt(),ou(t),Jt(),yt()}function Du(t){return new Proxy(t.attrs,{get(e,n){return pe(t,"get","$attrs"),e[n]}})}function Lu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Du(t))},slots:t.slots,emit:t.emit,expose:e}}function ki(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Po(Oo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Un)return Un[n](t)}}))}function xu(t){return N(t)&&"__vccOpts"in t}const Uu=(t,e)=>Cl(t,e,an),Fu="3.2.38",Bu="http://www.w3.org/2000/svg",_t=typeof document<"u"?document:null,Es=_t&&_t.createElement("template"),$u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?_t.createElementNS(Bu,t):_t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>_t.createTextNode(t),createComment:t=>_t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Es.innerHTML=r?`<svg>${t}</svg>`:t;const a=Es.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ju(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Hu(t,e,n){const r=t.style,i=te(n);if(n&&!i){for(const s in n)ei(r,s,n[s]);if(e&&!te(e))for(const s in e)n[s]==null&&ei(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Ts=/\s*!important$/;function ei(t,e,n){if(k(n))n.forEach(r=>ei(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Vu(t,e);Ts.test(n)?t.setProperty(qt(r),n.replace(Ts,""),"important"):t[r]=n}}const ws=["Webkit","Moz","ms"],wr={};function Vu(t,e){const n=wr[e];if(n)return n;let r=Vt(e);if(r!=="filter"&&r in t)return wr[e]=r;r=mo(r);for(let i=0;i<ws.length;i++){const s=ws[i]+r;if(s in t)return wr[e]=s}return e}const Ss="http://www.w3.org/1999/xlink";function Wu(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ss,e.slice(6,e.length)):t.setAttributeNS(Ss,e,n);else{const s=Lc(e);n==null||s&&!lo(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function zu(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=lo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ca,Ku]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ti=0;const qu=Promise.resolve(),Gu=()=>{ti=0},Ju=()=>ti||(qu.then(Gu),ti=ca());function Xu(t,e,n,r){t.addEventListener(e,n,r)}function Yu(t,e,n,r){t.removeEventListener(e,n,r)}function Qu(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=Zu(e);if(r){const u=s[e]=ef(r,i);Xu(t,a,u,c)}else o&&(Yu(t,a,o,c),s[e]=void 0)}}const As=/(?:Once|Passive|Capture)$/;function Zu(t){let e;if(As.test(t)){e={};let r;for(;r=t.match(As);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qt(t.slice(2)),e]}function ef(t,e){const n=r=>{const i=r.timeStamp||ca();(Ku||i>=n.attached-1)&&_e(tf(r,n.value),e,5,[r])};return n.value=t,n.attached=Ju(),n}function tf(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Cs=/^on[a-z]/,nf=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?ju(t,r,i):e==="style"?Hu(t,n,r):qn(e)?pi(e)||Qu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rf(t,e,r,i))?zu(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wu(t,e,r,i))};function rf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Cs.test(e)&&N(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Cs.test(e)&&te(n)?!1:e in t}const sf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Kl.props;const of=se({patchProp:nf},$u);let Rs;function af(){return Rs||(Rs=bu(of))}const cf=(...t)=>{const e=af().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=lf(r);if(!i)return;const s=e._component;!N(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function lf(t){return te(t)?document.querySelector(t):t}const uf="/vite.svg",ff="/assets/vue.5532db34.svg";const la=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},ir=t=>(Bo("data-v-a1de4649"),t=t(),$o(),t),df={class:"card"},hf=ir(()=>Y("p",null,[wt(" Edit "),Y("code",null,"components/HelloWorld.vue"),wt(" to test HMR ")],-1)),pf=ir(()=>Y("p",null,[wt(" Check out "),Y("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),wt(", the official Vue + Vite starter ")],-1)),gf=ir(()=>Y("p",null,[wt(" Install "),Y("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),wt(" in your IDE for a better DX ")],-1)),mf=ir(()=>Y("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),_f={__name:"HelloWorld",props:{msg:String},setup(t){const e=yl(0);return(n,r)=>(en(),Cn(me,null,[Y("h1",null,jr(t.msg),1),Y("div",df,[Y("button",{type:"button",onClick:r[0]||(r[0]=i=>e.value++)},"count is "+jr(e.value),1),hf]),pf,gf,mf],64))}},bf=la(_f,[["__scopeId","data-v-a1de4649"]]);/**
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
 */const ua=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},If=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=s>>2,m=(s&3)<<4|a>>4;let b=(a&15)<<2|u>>6,w=u&63;c||(w=64,o||(b=64)),r.push(n[d],n[m],n[b],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ua(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):If(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw Error();const b=s<<2|a>>4;if(r.push(b),u!==64){const w=a<<4&240|u>>2;if(r.push(w),m!==64){const P=u<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vf=function(t){const e=ua(t);return fa.encodeByteArray(e,!0)},da=function(t){return vf(t).replace(/\./g,"")},yf=function(t){try{return fa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Ef{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function wf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Af(){const t=oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ha(){return typeof indexedDB=="object"}function pa(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Cf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Rf="FirebaseError";class Xe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rf,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Of(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xe(i,a,r)}}function Of(t,e){return t.replace(kf,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kf=/\{\$([^}]+)}/g;function Nf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Os(s)&&Os(o)){if(!Bn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Os(t){return t!==null&&typeof t=="object"}/**
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
 */function fn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pf(t,e){const n=new Mf(t,e);return n.subscribe.bind(n)}class Mf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Df(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sr),i.error===void 0&&(i.error=Sr),i.complete===void 0&&(i.complete=Sr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Df(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sr(){}/**
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class qe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pt="[DEFAULT]";/**
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
 */class Lf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ef;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uf(e))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pt){return this.instances.has(e)}getOptions(e=pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pt){return this.component?this.component.multipleInstances?e:pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xf(t){return t===pt?void 0:t}function Uf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ff{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const Bf={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},$f=j.INFO,jf={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Hf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jf[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ni{constructor(e){this.name=e,this._logLevel=$f,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Vf=(t,e)=>e.some(n=>t instanceof n);let ks,Ns;function Wf(){return ks||(ks=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zf(){return Ns||(Ns=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ga=new WeakMap,ni=new WeakMap,ma=new WeakMap,Ar=new WeakMap,Pi=new WeakMap;function Kf(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ot(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ga.set(n,t)}).catch(()=>{}),Pi.set(e,t),e}function qf(t){if(ni.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ni.set(t,e)}let ri={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ma.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gf(t){ri=t(ri)}function Jf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cr(this),e,...n);return ma.set(r,e.sort?e.sort():[e]),ot(r)}:zf().includes(t)?function(...e){return t.apply(Cr(this),e),ot(ga.get(this))}:function(...e){return ot(t.apply(Cr(this),e))}}function Xf(t){return typeof t=="function"?Jf(t):(t instanceof IDBTransaction&&qf(t),Vf(t,Wf())?new Proxy(t,ri):t)}function ot(t){if(t instanceof IDBRequest)return Kf(t);if(Ar.has(t))return Ar.get(t);const e=Xf(t);return e!==t&&(Ar.set(t,e),Pi.set(e,t)),e}const Cr=t=>Pi.get(t);function _a(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ot(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ot(o.result),c.oldVersion,c.newVersion,ot(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Yf=["get","getKey","getAll","getAllKeys","count"],Qf=["put","add","delete","clear"],Rr=new Map;function Ps(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rr.get(e))return Rr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Qf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yf.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Rr.set(e,s),s}Gf(t=>({...t,get:(e,n,r)=>Ps(e,n)||t.get(e,n,r),has:(e,n)=>!!Ps(e,n)||t.has(e,n)}));/**
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
 */class Zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ed(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ed(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ii="@firebase/app",Ms="0.7.32";/**
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
 */const St=new Ni("@firebase/app"),td="@firebase/app-compat",nd="@firebase/analytics-compat",rd="@firebase/analytics",id="@firebase/app-check-compat",sd="@firebase/app-check",od="@firebase/auth",ad="@firebase/auth-compat",cd="@firebase/database",ld="@firebase/database-compat",ud="@firebase/functions",fd="@firebase/functions-compat",dd="@firebase/installations",hd="@firebase/installations-compat",pd="@firebase/messaging",gd="@firebase/messaging-compat",md="@firebase/performance",_d="@firebase/performance-compat",bd="@firebase/remote-config",Id="@firebase/remote-config-compat",vd="@firebase/storage",yd="@firebase/storage-compat",Ed="@firebase/firestore",Td="@firebase/firestore-compat",wd="firebase",Sd="9.9.4";/**
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
 */const ba="[DEFAULT]",Ad={[ii]:"fire-core",[td]:"fire-core-compat",[rd]:"fire-analytics",[nd]:"fire-analytics-compat",[sd]:"fire-app-check",[id]:"fire-app-check-compat",[od]:"fire-auth",[ad]:"fire-auth-compat",[cd]:"fire-rtdb",[ld]:"fire-rtdb-compat",[ud]:"fire-fn",[fd]:"fire-fn-compat",[dd]:"fire-iid",[hd]:"fire-iid-compat",[pd]:"fire-fcm",[gd]:"fire-fcm-compat",[md]:"fire-perf",[_d]:"fire-perf-compat",[bd]:"fire-rc",[Id]:"fire-rc-compat",[vd]:"fire-gcs",[yd]:"fire-gcs-compat",[Ed]:"fire-fst",[Td]:"fire-fst-compat","fire-js":"fire-js",[wd]:"fire-js-all"};/**
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
 */const $n=new Map,si=new Map;function Cd(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(si.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;si.set(e,t);for(const n of $n.values())Cd(n,t);return!0}function dn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Rd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new kt("app","Firebase",Rd);/**
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
 */class Od{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=Sd;function kd(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ba,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw At.create("bad-app-name",{appName:String(r)});const i=$n.get(r);if(i){if(Bn(t,i.options)&&Bn(n,i.config))return i;throw At.create("duplicate-app",{appName:r})}const s=new Ff(r);for(const a of si.values())s.addComponent(a);const o=new Od(t,n,s);return $n.set(r,o),o}function Ia(t=ba){const e=$n.get(t);if(!e)throw At.create("no-app",{appName:t});return e}function De(t,e,n){var r;let i=(r=Ad[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}ut(new qe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Nd="firebase-heartbeat-database",Pd=1,cn="firebase-heartbeat-store";let Or=null;function va(){return Or||(Or=_a(Nd,Pd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cn)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Or}async function Md(t){var e;try{return(await va()).transaction(cn).objectStore(cn).get(ya(t))}catch(n){if(n instanceof Xe)St.warn(n.message);else{const r=At.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});St.warn(r.message)}}}async function Ds(t,e){var n;try{const i=(await va()).transaction(cn,"readwrite");return await i.objectStore(cn).put(e,ya(t)),i.done}catch(r){if(r instanceof Xe)St.warn(r.message);else{const i=At.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});St.warn(i.message)}}}function ya(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Dd=1024,Ld=30*24*60*60*1e3;class xd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ls();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ld}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ls(),{heartbeatsToSend:n,unsentEntries:r}=Ud(this._heartbeatsCache.heartbeats),i=da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ls(){return new Date().toISOString().substring(0,10)}function Ud(t,e=Dd){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xs(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xs(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ha()?pa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Md(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ds(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ds(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xs(t){return da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bd(t){ut(new qe("platform-logger",e=>new Zf(e),"PRIVATE")),ut(new qe("heartbeat",e=>new xd(e),"PRIVATE")),De(ii,Ms,t),De(ii,Ms,"esm2017"),De("fire-js","")}Bd("");var $d="firebase",jd="9.9.4";/**
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
 */De($d,jd,"app");const kr={apiKey:"AIzaSyCsLrBhQ_av_rext-ob38nZQhEhZASE6fE",authDomain:"planning-6317a.firebaseapp.com",projectId:"planning-6317a",storageBucket:"planning-6317a.appspot.com",messagingSenderId:"883064645820",appId:"1:883064645820:web:5bf2507629120159a548b9",measurementId:"G-6YDFBF3WXE"};function Hd(){if(!kr||!kr.apiKey)throw new Error(`No Firebase configuration object provided.
Add your web app's configuration object to firebase-config.js`);return kr}const Ea="@firebase/installations",Mi="0.5.12";/**
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
 */const Ta=1e4,wa=`w:${Mi}`,Sa="FIS_v2",Vd="https://firebaseinstallations.googleapis.com/v1",Wd=60*60*1e3,zd="installations",Kd="Installations";/**
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
 */const qd={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ct=new kt(zd,Kd,qd);function Aa(t){return t instanceof Xe&&t.code.includes("request-failed")}/**
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
 */function Ca({projectId:t}){return`${Vd}/projects/${t}/installations`}function Ra(t){return{token:t.token,requestStatus:2,expiresIn:Jd(t.expiresIn),creationTime:Date.now()}}async function Oa(t,e){const r=(await e.json()).error;return Ct.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ka({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Gd(t,{refreshToken:e}){const n=ka(t);return n.append("Authorization",Xd(e)),n}async function Na(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Jd(t){return Number(t.replace("s","000"))}function Xd(t){return`${Sa} ${t}`}/**
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
 */async function Yd({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ca(t),i=ka(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Sa,appId:t.appId,sdkVersion:wa},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Na(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ra(u.authToken)}}else throw await Oa("Create Installation",c)}/**
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
 */function Pa(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Qd(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Zd=/^[cdef][\w-]{21}$/,oi="";function eh(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=th(t);return Zd.test(n)?n:oi}catch{return oi}}function th(t){return Qd(t).substr(0,22)}/**
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
 */function or(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ma=new Map;function Da(t,e){const n=or(t);La(n,e),nh(n,e)}function La(t,e){const n=Ma.get(t);if(!!n)for(const r of n)r(e)}function nh(t,e){const n=rh();n&&n.postMessage({key:t,fid:e}),ih()}let bt=null;function rh(){return!bt&&"BroadcastChannel"in self&&(bt=new BroadcastChannel("[Firebase] FID Change"),bt.onmessage=t=>{La(t.data.key,t.data.fid)}),bt}function ih(){Ma.size===0&&bt&&(bt.close(),bt=null)}/**
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
 */const sh="firebase-installations-database",oh=1,Rt="firebase-installations-store";let Nr=null;function Di(){return Nr||(Nr=_a(sh,oh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rt)}}})),Nr}async function jn(t,e){const n=or(t),i=(await Di()).transaction(Rt,"readwrite"),s=i.objectStore(Rt),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Da(t,e.fid),e}async function xa(t){const e=or(t),r=(await Di()).transaction(Rt,"readwrite");await r.objectStore(Rt).delete(e),await r.done}async function ar(t,e){const n=or(t),i=(await Di()).transaction(Rt,"readwrite"),s=i.objectStore(Rt),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Da(t,a.fid),a}/**
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
 */async function Li(t){let e;const n=await ar(t.appConfig,r=>{const i=ah(r),s=ch(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===oi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ah(t){const e=t||{fid:eh(),registrationStatus:0};return Ua(e)}function ch(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ct.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=lh(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uh(t)}:{installationEntry:e}}async function lh(t,e){try{const n=await Yd(t,e);return jn(t.appConfig,n)}catch(n){throw Aa(n)&&n.customData.serverCode===409?await xa(t.appConfig):await jn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uh(t){let e=await Us(t.appConfig);for(;e.registrationStatus===1;)await Pa(100),e=await Us(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Li(t);return r||n}return e}function Us(t){return ar(t,e=>{if(!e)throw Ct.create("installation-not-found");return Ua(e)})}function Ua(t){return fh(t)?{fid:t.fid,registrationStatus:0}:t}function fh(t){return t.registrationStatus===1&&t.registrationTime+Ta<Date.now()}/**
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
 */async function dh({appConfig:t,heartbeatServiceProvider:e},n){const r=hh(t,n),i=Gd(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:wa,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Na(()=>fetch(r,a));if(c.ok){const u=await c.json();return Ra(u)}else throw await Oa("Generate Auth Token",c)}function hh(t,{fid:e}){return`${Ca(t)}/${e}/authTokens:generate`}/**
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
 */async function xi(t,e=!1){let n;const r=await ar(t.appConfig,s=>{if(!Fa(s))throw Ct.create("not-registered");const o=s.authToken;if(!e&&mh(o))return s;if(o.requestStatus===1)return n=ph(t,e),s;{if(!navigator.onLine)throw Ct.create("app-offline");const a=bh(s);return n=gh(t,a),a}});return n?await n:r.authToken}async function ph(t,e){let n=await Fs(t.appConfig);for(;n.authToken.requestStatus===1;)await Pa(100),n=await Fs(t.appConfig);const r=n.authToken;return r.requestStatus===0?xi(t,e):r}function Fs(t){return ar(t,e=>{if(!Fa(e))throw Ct.create("not-registered");const n=e.authToken;return Ih(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gh(t,e){try{const n=await dh(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await jn(t.appConfig,r),n}catch(n){if(Aa(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xa(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await jn(t.appConfig,r)}throw n}}function Fa(t){return t!==void 0&&t.registrationStatus===2}function mh(t){return t.requestStatus===2&&!_h(t)}function _h(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Wd}function bh(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ih(t){return t.requestStatus===1&&t.requestTime+Ta<Date.now()}/**
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
 */async function vh(t){const e=t,{installationEntry:n,registrationPromise:r}=await Li(e);return r?r.catch(console.error):xi(e).catch(console.error),n.fid}/**
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
 */async function yh(t,e=!1){const n=t;return await Eh(n),(await xi(n,e)).token}async function Eh(t){const{registrationPromise:e}=await Li(t);e&&await e}/**
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
 */function Th(t){if(!t||!t.options)throw Pr("App Configuration");if(!t.name)throw Pr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Pr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Pr(t){return Ct.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ba="installations",wh="installations-internal",Sh=t=>{const e=t.getProvider("app").getImmediate(),n=Th(e),r=dn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ah=t=>{const e=t.getProvider("app").getImmediate(),n=dn(e,Ba).getImmediate();return{getId:()=>vh(n),getToken:i=>yh(n,i)}};function Ch(){ut(new qe(Ba,Sh,"PUBLIC")),ut(new qe(wh,Ah,"PRIVATE"))}Ch();De(Ea,Mi);De(Ea,Mi,"esm2017");const Bs="@firebase/performance",ai="0.5.12";/**
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
 */const $a=ai,Rh="FB-PERF-TRACE-START",Oh="FB-PERF-TRACE-STOP",ci="FB-PERF-TRACE-MEASURE",ja="_wt_",Ha="_fp",Va="_fcp",Wa="_fid",za="@firebase/performance/config",Ka="@firebase/performance/configexpire",kh="performance",qa="Performance";/**
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
 */const Nh={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},ne=new kt(kh,qa,Nh);/**
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
 */const Ue=new Ni(qa);Ue.logLevel=j.INFO;/**
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
 */let Mr,Ga;class Q{constructor(e){if(this.window=e,!e)throw ne.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,n,r){!this.performance||!this.performance.measure||this.performance.measure(e,n,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!Cf()?(Ue.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):ha()?!0:(Ue.info("IndexedDB is not supported by current browswer"),!1)}setupObserver(e,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const s of i.getEntries())n(s)}).observe({entryTypes:[e]})}static getInstance(){return Mr===void 0&&(Mr=new Q(Ga)),Mr}}function Ph(t){Ga=t}/**
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
 */let Ja;function Mh(t){const e=t.getId();return e.then(n=>{Ja=n}),e}function Ui(){return Ja}function Dh(t){const e=t.getToken();return e.then(n=>{}),e}/**
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
 */function $s(t,e){const n=t.length-e.length;if(n<0||n>1)throw ne.create("invalid String merger input");const r=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}/**
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
 */let Dr;class he{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=$s("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=$s("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return Dr===void 0&&(Dr=new he),Dr}}/**
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
 */var $t;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"})($t||($t={}));const Lh=["firebase_","google_","ga_"],xh=new RegExp("^[a-zA-Z]\\w*$"),Uh=40,Fh=100;function Bh(){const t=Q.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function Xa(){switch(Q.getInstance().document.visibilityState){case"visible":return $t.VISIBLE;case"hidden":return $t.HIDDEN;default:return $t.UNKNOWN}}function $h(){const e=Q.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function jh(t){return t.length===0||t.length>Uh?!1:!Lh.some(n=>t.startsWith(n))&&!!t.match(xh)}function Hh(t){return t.length!==0&&t.length<=Fh}/**
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
 */function Ya(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.appId;if(!n)throw ne.create("no app id");return n}function Vh(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.projectId;if(!n)throw ne.create("no project id");return n}function Wh(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.apiKey;if(!n)throw ne.create("no api key");return n}/**
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
 */const zh="0.0.1",ve={loggingEnabled:!0},Kh="FIREBASE_INSTALLATIONS_AUTH";function qh(t,e){const n=Gh();return n?(js(n),Promise.resolve()):Yh(t,e).then(js).then(r=>Jh(r),()=>{})}function Gh(){const t=Q.getInstance().localStorage;if(!t)return;const e=t.getItem(Ka);if(!e||!Qh(e))return;const n=t.getItem(za);if(!!n)try{return JSON.parse(n)}catch{return}}function Jh(t){const e=Q.getInstance().localStorage;!t||!e||(e.setItem(za,JSON.stringify(t)),e.setItem(Ka,String(Date.now()+he.getInstance().configTimeToLive*60*60*1e3)))}const Xh="Could not fetch config, will use default configs";function Yh(t,e){return Dh(t.installations).then(n=>{const r=Vh(t.app),i=Wh(t.app),s=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,o=new Request(s,{method:"POST",headers:{Authorization:`${Kh} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:Ya(t.app),app_version:$a,sdk_version:zh})});return fetch(o).then(a=>{if(a.ok)return a.json();throw ne.create("RC response not ok")})}).catch(()=>{Ue.info(Xh)})}function js(t){if(!t)return t;const e=he.getInstance(),n=t.entries||{};return n.fpr_enabled!==void 0?e.loggingEnabled=String(n.fpr_enabled)==="true":e.loggingEnabled=ve.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):ve.logSource&&(e.logSource=ve.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:ve.logEndPointUrl&&(e.logEndPointUrl=ve.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:ve.transportKey&&(e.transportKey=ve.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):ve.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=ve.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):ve.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=ve.tracesSamplingRate),e.logTraceAfterSampling=Hs(e.tracesSamplingRate),e.logNetworkAfterSampling=Hs(e.networkRequestsSamplingRate),t}function Qh(t){return Number(t)>Date.now()}function Hs(t){return Math.random()<=t}/**
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
 */let Fi=1,Lr;function Qa(t){return Fi=2,Lr=Lr||ep(t),Lr}function Zh(){return Fi===3}function ep(t){return tp().then(()=>Mh(t.installations)).then(e=>qh(t,e)).then(()=>Vs(),()=>Vs())}function tp(){const t=Q.getInstance().document;return new Promise(e=>{if(t&&t.readyState!=="complete"){const n=()=>{t.readyState==="complete"&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function Vs(){Fi=3}/**
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
 */const Bi=10*1e3,np=5.5*1e3,Za=3,rp=1e3;let Hn=Za,at=[],Ws=!1;function ip(){Ws||(cr(np),Ws=!0)}function cr(t){setTimeout(()=>{if(Hn!==0){if(!at.length)return cr(Bi);sp()}},t)}function sp(){const t=at.splice(0,rp),e=t.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:he.getInstance().logSource,log_event:e};op(n,t).catch(()=>{at=[...t,...at],Hn--,Ue.info(`Tries left: ${Hn}.`),cr(Bi)})}function op(t,e){return ap(t).then(n=>(n.ok||Ue.info("Call to Firebase backend failed."),n.json())).then(n=>{const r=Number(n.nextRequestWaitMillis);let i=Bi;isNaN(r)||(i=Math.max(r,i));const s=n.logResponseDetails;Array.isArray(s)&&s.length>0&&s[0].responseAction==="RETRY_REQUEST_LATER"&&(at=[...e,...at],Ue.info("Retry transport request later.")),Hn=Za,cr(i)})}function ap(t){const e=he.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}function cp(t){if(!t.eventTime||!t.message)throw ne.create("invalid cc log");at=[...at,t]}function lp(t){return(...e)=>{const n=t(...e);cp({message:n,eventTime:Date.now()})}}/**
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
 */let xr;function ec(t,e){xr||(xr=lp(fp)),xr(t,e)}function Tn(t){const e=he.getInstance();!e.instrumentationEnabled&&t.isAuto||!e.dataCollectionEnabled&&!t.isAuto||!Q.getInstance().requiredApisAvailable()||t.isAuto&&Xa()!==$t.VISIBLE||(Zh()?Ur(t):Qa(t.performanceController).then(()=>Ur(t),()=>Ur(t)))}function Ur(t){if(!Ui())return;const e=he.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||setTimeout(()=>ec(t,1),0)}function up(t){const e=he.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n===r||n===i||!e.loggingEnabled||!e.logNetworkAfterSampling||setTimeout(()=>ec(t,0),0)}function fp(t,e){return e===0?dp(t):hp(t)}function dp(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:tc(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function hp(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};Object.keys(t.counters).length!==0&&(e.counters=t.counters);const n=t.getAttributes();Object.keys(n).length!==0&&(e.custom_attributes=n);const r={application_info:tc(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}function tc(t){return{google_app_id:Ya(t),app_instance_id:Ui(),web_app_info:{sdk_version:$a,page_url:Q.getInstance().getUrl(),service_worker_status:Bh(),visibility_state:Xa(),effective_connection_type:$h()},application_process_state:0}}/**
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
 */const pp=100,gp="_",mp=[Ha,Va,Wa];function _p(t,e){return t.length===0||t.length>pp?!1:e&&e.startsWith(ja)&&mp.indexOf(t)>-1||!t.startsWith(gp)}function bp(t){const e=Math.floor(t);return e<t&&Ue.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class Et{constructor(e,n,r=!1,i){this.performanceController=e,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=Q.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${Rh}-${this.randomId}-${this.name}`,this.traceStopMark=`${Oh}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${ci}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw ne.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw ne.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Tn(this)}record(e,n,r){if(e<=0)throw ne.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw ne.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));Tn(this)}incrementMetric(e,n=1){this.counters[e]===void 0?this.putMetric(e,n):this.putMetric(e,this.counters[e]+n)}putMetric(e,n){if(_p(e,this.name))this.counters[e]=bp(n!=null?n:0);else throw ne.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,n){const r=jh(e),i=Hh(n);if(r&&i){this.customAttributes[e]=n;return}if(!r)throw ne.create("invalid attribute name",{attributeName:e});if(!i)throw ne.create("invalid attribute value",{attributeValue:n})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),n=e&&e[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,n,r,i){const s=Q.getInstance().getUrl();if(!s)return;const o=new Et(e,ja+s,!0),a=Math.floor(Q.getInstance().getTimeOrigin()*1e3);o.setStartTime(a),n&&n[0]&&(o.setDuration(Math.floor(n[0].duration*1e3)),o.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),o.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),o.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const c="first-paint",u="first-contentful-paint";if(r){const d=r.find(b=>b.name===c);d&&d.startTime&&o.putMetric(Ha,Math.floor(d.startTime*1e3));const m=r.find(b=>b.name===u);m&&m.startTime&&o.putMetric(Va,Math.floor(m.startTime*1e3)),i&&o.putMetric(Wa,Math.floor(i*1e3))}Tn(o)}static createUserTimingTrace(e,n){const r=new Et(e,n,!1,n);Tn(r)}}/**
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
 */function zs(t,e){const n=e;if(!n||n.responseStart===void 0)return;const r=Q.getInstance().getTimeOrigin(),i=Math.floor((n.startTime+r)*1e3),s=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,o=Math.floor((n.responseEnd-n.startTime)*1e3),a=n.name&&n.name.split("?")[0],c={performanceController:t,url:a,responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:s,timeToResponseCompletedUs:o};up(c)}/**
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
 */const Ip=5e3;function Ks(t){!Ui()||(setTimeout(()=>yp(t),0),setTimeout(()=>vp(t),0),setTimeout(()=>Ep(t),0))}function vp(t){const e=Q.getInstance(),n=e.getEntriesByType("resource");for(const r of n)zs(t,r);e.setupObserver("resource",r=>zs(t,r))}function yp(t){const e=Q.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");if(e.onFirstInputDelay){let i=setTimeout(()=>{Et.createOobTrace(t,n,r),i=void 0},Ip);e.onFirstInputDelay(s=>{i&&(clearTimeout(i),Et.createOobTrace(t,n,r,s))})}else Et.createOobTrace(t,n,r)}function Ep(t){const e=Q.getInstance(),n=e.getEntriesByType("measure");for(const r of n)qs(t,r);e.setupObserver("measure",r=>qs(t,r))}function qs(t,e){const n=e.name;n.substring(0,ci.length)!==ci&&Et.createUserTimingTrace(t,n)}/**
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
 */class Tp{constructor(e,n){this.app=e,this.installations=n,this.initialized=!1}_init(e){this.initialized||((e==null?void 0:e.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),(e==null?void 0:e.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),Q.getInstance().requiredApisAvailable()?pa().then(n=>{n&&(ip(),Qa(this).then(()=>Ks(this),()=>Ks(this)),this.initialized=!0)}).catch(n=>{Ue.info(`Environment doesn't support IndexedDB: ${n}`)}):Ue.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){he.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return he.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){he.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return he.getInstance().dataCollectionEnabled}}const wp="[DEFAULT]";function Sp(t=Ia()){return t=Nt(t),dn(t,"performance").getImmediate()}const Ap=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if(n.name!==wp)throw ne.create("FB not default");if(typeof window>"u")throw ne.create("no window");Ph(window);const i=new Tp(n,r);return i._init(e),i};function Cp(){ut(new qe("performance",Ap,"PUBLIC")),De(Bs,ai),De(Bs,ai,"esm2017")}Cp();function $i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rp=nc,rc=new kt("auth","Firebase",nc());/**
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
 */const Gs=new Ni("@firebase/auth");function On(t,...e){Gs.logLevel<=j.ERROR&&Gs.error(`Auth (${sr}): ${t}`,...e)}/**
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
 */function Fe(t,...e){throw ji(t,...e)}function Le(t,...e){return ji(t,...e)}function ic(t,e,n){const r=Object.assign(Object.assign({},Rp()),{[e]:n});return new kt("auth","Firebase",r).create(e,{appName:t.name})}function Op(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Fe(t,"argument-error"),ic(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ji(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rc.create(t,...e)}function R(t,e,...n){if(!t)throw ji(e,...n)}function We(t){const e="INTERNAL ASSERTION FAILED: "+t;throw On(e),new Error(e)}function Ge(t,e){t||We(e)}/**
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
 */const Js=new Map;function ze(t){Ge(t instanceof Function,"Expected a class definition");let e=Js.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Js.set(t,e),e)}/**
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
 */function kp(t,e){const n=dn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bn(s,e!=null?e:{}))return i;Fe(i,"already-initialized")}return n.initialize({options:e})}function Np(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function li(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pp(){return Xs()==="http:"||Xs()==="https:"}function Xs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Mp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pp()||wf()||"connection"in navigator)?navigator.onLine:!0}function Dp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class hn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=Tf()||Sf()}get(){return Mp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hi(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;We("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;We("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;We("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const xp=new hn(3e4,6e4);function Up(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lr(t,e,n,r,i={}){return oc(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=fn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),sc.fetch()(ac(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function oc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lp),e);try{const i=new Bp(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wn(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ic(t,d,u);Fe(t,d)}}catch(i){if(i instanceof Xe)throw i;Fe(t,"network-request-failed")}}async function Fp(t,e,n,r,i={}){const s=await lr(t,e,n,r,i);return"mfaPendingCredential"in s&&Fe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ac(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hi(t.config,i):`${t.config.apiScheme}://${i}`}class Bp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Le(this.auth,"network-request-failed")),xp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Le(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function $p(t,e){return lr(t,"POST","/v1/accounts:delete",e)}async function jp(t,e){return lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function tn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hp(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),i=Vi(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tn(Fr(i.auth_time)),issuedAtTime:tn(Fr(i.iat)),expirationTime:tn(Fr(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fr(t){return Number(t)*1e3}function Vi(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return On("JWT malformed, contained fewer than 3 sections"),null;try{const s=yf(r);return s?JSON.parse(s):(On("Failed to decode base64 JWT payload"),null)}catch(s){return On("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Vp(t){const e=Vi(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xe&&Wp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tn(this.lastLoginAt),this.creationTime=tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ln(t,jp(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gp(s.providerUserInfo):[],a=qp(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function Kp(t){const e=Nt(t);await Vn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qp(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Gp(t){return t.map(e=>{var{providerId:n}=e,r=$i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Jp(t,e){const n=await oc(t,{},async()=>{const r=fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ac(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Jp(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new un;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new un,this.toJSON())}_performRefresh(){return We("not implemented")}}/**
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
 */function Ze(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ln(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hp(this,e)}reload(){return Kp(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ln(this,$p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(u=n.createdAt)!==null&&u!==void 0?u:void 0,ae=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:K,emailVerified:q,isAnonymous:Z,providerData:Se,stsTokenManager:Ae}=n;R(K&&Ae,e,"internal-error");const L=un.fromJSON(this.name,Ae);R(typeof K=="string",e,"internal-error"),Ze(m,e.name),Ze(b,e.name),R(typeof q=="boolean",e,"internal-error"),R(typeof Z=="boolean",e,"internal-error"),Ze(w,e.name),Ze(P,e.name),Ze(D,e.name),Ze(O,e.name),Ze(M,e.name),Ze(ae,e.name);const H=new Tt({uid:K,auth:e,email:b,emailVerified:q,displayName:m,isAnonymous:Z,photoURL:P,phoneNumber:w,tenantId:D,stsTokenManager:L,createdAt:M,lastLoginAt:ae});return Se&&Array.isArray(Se)&&(H.providerData=Se.map(G=>Object.assign({},G))),O&&(H._redirectEventId=O),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new un;i.updateFromServerResponse(n);const s=new Tt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vn(s),s}}/**
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
 */class lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lc.type="NONE";const Ys=lc;/**
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
 */function kn(t,e,n){return`firebase:${t}:${e}:${n}`}class jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=kn(this.userKey,i.apiKey,s),this.fullPersistenceKey=kn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jt(ze(Ys),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ze(Ys);const o=kn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const m=Tt._fromJSON(e,d);u!==s&&(a=m),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new jt(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jt(s,e,r))}}/**
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
 */function Qs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pc(e))return"Blackberry";if(gc(e))return"Webos";if(Wi(e))return"Safari";if((e.includes("chrome/")||fc(e))&&!e.includes("edge/"))return"Chrome";if(hc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uc(t=oe()){return/firefox\//i.test(t)}function Wi(t=oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fc(t=oe()){return/crios\//i.test(t)}function dc(t=oe()){return/iemobile/i.test(t)}function hc(t=oe()){return/android/i.test(t)}function pc(t=oe()){return/blackberry/i.test(t)}function gc(t=oe()){return/webos/i.test(t)}function ur(t=oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xp(t=oe()){var e;return ur(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yp(){return Af()&&document.documentMode===10}function mc(t=oe()){return ur(t)||hc(t)||gc(t)||pc(t)||/windows phone/i.test(t)||dc(t)}function Qp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _c(t,e=[]){let n;switch(t){case"Browser":n=Qs(oe());break;case"Worker":n=`${Qs(oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${sr}/${r}`}/**
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
 */class Zp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class eg{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zs(this),this.idTokenSubscription=new Zs(this),this.beforeStateQueue=new Zp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Vn(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nt(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await jt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function zi(t){return Nt(t)}class Zs{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pf(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class bc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return We("not implemented")}_getIdTokenResponse(e){return We("not implemented")}_linkToIdToken(e,n){return We("not implemented")}_getReauthenticationResolver(e){return We("not implemented")}}/**
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
 */async function Ht(t,e){return Fp(t,"POST","/v1/accounts:signInWithIdp",Up(t,e))}/**
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
 */const tg="http://localhost";class Ot extends bc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$i(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ot(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ht(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ht(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ht(e,n)}buildRequest(){const e={requestUri:tg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fn(n)}return e}}/**
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
 */class Ki{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pn extends Ki{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tt extends pn{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
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
 */class Ve extends pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ot._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ve.credential(n,r)}catch{return null}}}Ve.GOOGLE_SIGN_IN_METHOD="google.com";Ve.PROVIDER_ID="google.com";/**
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
 */class nt extends pn{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com";nt.PROVIDER_ID="github.com";/**
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
 */class rt extends pn{constructor(){super("twitter.com")}static credential(e,n){return Ot._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com";rt.PROVIDER_ID="twitter.com";/**
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
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tt._fromIdTokenResponse(e,r,i),o=eo(r);return new Kt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=eo(r);return new Kt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function eo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wn extends Xe{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wn(e,n,r,i)}}function Ic(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wn._fromErrorAndOperation(t,s,e,r):s})}async function ng(t,e,n=!1){const r=await ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}/**
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
 */async function rg(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await ln(t,Ic(i,s,e,t),n);R(o.idToken,i,"internal-error");const a=Vi(o.idToken);R(a,i,"internal-error");const{sub:c}=a;return R(t.uid===c,i,"user-mismatch"),Kt._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Fe(i,"user-mismatch"),o}}/**
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
 */async function ig(t,e,n=!1){const r="signIn",i=await Ic(t,r,e),s=await Kt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function sg(t,e,n,r){return Nt(t).onAuthStateChanged(e,n,r)}function og(t){return Nt(t).signOut()}const zn="__sak";/**
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
 */class vc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zn,"1"),this.storage.removeItem(zn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ag(){const t=oe();return Wi(t)||ur(t)}const cg=1e3,lg=10;class yc extends vc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ag()&&Qp(),this.fallbackToPolling=mc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Yp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lg):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yc.type="LOCAL";const ug=yc;/**
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
 */class Ec extends vc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ec.type="SESSION";const Tc=Ec;/**
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
 */function fg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await fg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fr.receivers=[];/**
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
 */function qi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=qi("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const b=m;if(b.data.eventId===u)switch(b.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(b.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xe(){return window}function hg(t){xe().location.href=t}/**
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
 */function wc(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function pg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mg(){return wc()?self:null}/**
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
 */const Sc="firebaseLocalStorageDb",_g=1,Kn="firebaseLocalStorage",Ac="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dr(t,e){return t.transaction([Kn],e?"readwrite":"readonly").objectStore(Kn)}function bg(){const t=indexedDB.deleteDatabase(Sc);return new gn(t).toPromise()}function ui(){const t=indexedDB.open(Sc,_g);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kn,{keyPath:Ac})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kn)?e(r):(r.close(),await bg(),e(await ui()))})})}async function to(t,e,n){const r=dr(t,!0).put({[Ac]:e,value:n});return new gn(r).toPromise()}async function Ig(t,e){const n=dr(t,!1).get(e),r=await new gn(n).toPromise();return r===void 0?null:r.value}function no(t,e){const n=dr(t,!0).delete(e);return new gn(n).toPromise()}const vg=800,yg=3;class Cc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ui(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fr._getInstance(mg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pg(),!this.activeServiceWorker)return;this.sender=new dg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ui();return await to(e,zn,"1"),await no(e,zn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>to(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ig(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>no(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dr(i,!1).getAll();return new gn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cc.type="LOCAL";const Eg=Cc;/**
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
 */function Tg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Le("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Tg().appendChild(r)})}function Sg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new hn(3e4,6e4);/**
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
 */function Rc(t,e){return e?ze(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gi extends bc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ht(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ht(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ag(t){return ig(t.auth,new Gi(t),t.bypassAuthState)}function Cg(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),rg(n,new Gi(t),t.bypassAuthState)}async function Rg(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),ng(n,new Gi(t),t.bypassAuthState)}/**
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
 */class Oc{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ag;case"linkViaPopup":case"linkViaRedirect":return Rg;case"reauthViaPopup":case"reauthViaRedirect":return Cg;default:Fe(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Og=new hn(2e3,1e4);async function kg(t,e,n){const r=zi(t);Op(t,e,Ki);const i=Rc(r,n);return new It(r,"signInViaPopup",e,i).executeNotNull()}class It extends Oc{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,It.currentPopupAction&&It.currentPopupAction.cancel(),It.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,It.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Og.get())};e()}}It.currentPopupAction=null;/**
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
 */const Ng="pendingRedirect",Nn=new Map;class Pg extends Oc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nn.get(this.auth._key());if(!e){try{const r=await Mg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nn.set(this.auth._key(),e)}return this.bypassAuthState||Nn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mg(t,e){const n=xg(e),r=Lg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Dg(t,e){Nn.set(t._key(),e)}function Lg(t){return ze(t._redirectPersistence)}function xg(t){return kn(Ng,t.config.apiKey,t.name)}async function Ug(t,e,n=!1){const r=zi(t),i=Rc(r,e),o=await new Pg(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Fg=10*60*1e3;class Bg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$g(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Le(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ro(e))}saveEventToCache(e){this.cachedEventUids.add(ro(e)),this.lastProcessedEventTime=Date.now()}}function ro(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $g(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kc(t);default:return!1}}/**
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
 */async function jg(t,e={}){return lr(t,"GET","/v1/projects",e)}/**
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
 */const Hg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vg=/^https?/;async function Wg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jg(t);for(const n of e)try{if(zg(n))return}catch{}Fe(t,"unauthorized-domain")}function zg(t){const e=li(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vg.test(n))return!1;if(Hg.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Kg=new hn(3e4,6e4);function io(){const t=xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qg(t){return new Promise((e,n)=>{var r,i,s;function o(){io(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{io(),n(Le(t,"network-request-failed"))},timeout:Kg.get()})}if(!((i=(r=xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xe().gapi)===null||s===void 0)&&s.load)o();else{const a=Sg("iframefcb");return xe()[a]=()=>{gapi.load?o():n(Le(t,"network-request-failed"))},wg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Pn=null,e})}let Pn=null;function Gg(t){return Pn=Pn||qg(t),Pn}/**
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
 */const Jg=new hn(5e3,15e3),Xg="__/auth/iframe",Yg="emulator/auth/iframe",Qg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function em(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hi(e,Yg):`https://${t.config.authDomain}/${Xg}`,r={apiKey:e.apiKey,appName:t.name,v:sr},i=Zg.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fn(r).slice(1)}`}async function tm(t){const e=await Gg(t),n=xe().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:em(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Le(t,"network-request-failed"),a=xe().setTimeout(()=>{s(o)},Jg.get());function c(){xe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const nm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rm=500,im=600,sm="_blank",om="http://localhost";class so{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function am(t,e,n,r=rm,i=im){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nm),{width:r.toString(),height:i.toString(),top:s,left:o}),u=oe().toLowerCase();n&&(a=fc(u)?sm:n),uc(u)&&(e=e||om,c.scrollbars="yes");const d=Object.entries(c).reduce((b,[w,P])=>`${b}${w}=${P},`,"");if(Xp(u)&&a!=="_self")return cm(e||"",a),new so(null);const m=window.open(e||"",a,d);R(m,t,"popup-blocked");try{m.focus()}catch{}return new so(m)}function cm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lm="__/auth/handler",um="emulator/auth/handler";function oo(t,e,n,r,i,s){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:sr,eventId:i};if(e instanceof Ki){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof pn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${fm(t)}?${fn(a).slice(1)}`}function fm({config:t}){return t.emulator?Hi(t,um):`https://${t.authDomain}/${lm}`}/**
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
 */const Br="webStorageSupport";class dm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tc,this._completeRedirectFn=Ug,this._overrideRedirectResult=Dg}async _openPopup(e,n,r,i){var s;Ge((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=oo(e,n,r,li(),i);return am(e,o,qi())}async _openRedirect(e,n,r,i){return await this._originValidation(e),hg(oo(e,n,r,li(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ge(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tm(e),r=new Bg(e);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Br,{type:Br},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Br];o!==void 0&&n(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mc()||Wi()||ur()}}const hm=dm;var ao="@firebase/auth",co="0.20.6";/**
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
 */class pm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mm(t){ut(new qe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{R(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_c(t)},d=new eg(a,c,u);return Np(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ut(new qe("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(r=>new pm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(ao,co,gm(t)),De(ao,co,"esm2017")}/**
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
 */function $r(t=Ia()){const e=dn(t,"auth");return e.isInitialized()?e.getImmediate():kp(t,{popupRedirectResolver:hm,persistence:[Eg,ug,Tc]})}mm("Browser");const Nc=t=>(Bo("data-v-0ae0776d"),t=t(),$o(),t),_m={id:"user-container"},bm={key:0},Im={key:1},vm=Nc(()=>Y("a",{href:"https://vitejs.dev",target:"_blank"},[Y("img",{src:uf,class:"logo",alt:"Vite logo"})],-1)),ym=Nc(()=>Y("a",{href:"https://vuejs.org/",target:"_blank"},[Y("img",{src:ff,class:"logo vue",alt:"Vue logo"})],-1)),Em=ql({__name:"App",setup(t){kd(Hd()),Sp();const e=Yn({user:null}),n=async()=>await kg($r(),new Ve),r=()=>og($r());return sg($r(),i=>e.user=i),(i,s)=>(en(),Cn(me,null,[Y("div",null,[Y("div",_m,[e.user?(en(),Cn("div",bm,[Y("div",null,jr(e.user.displayName),1),Y("button",{onClick:r}," Sign Out ")])):Is("",!0),e.user?Is("",!0):(en(),Cn("div",Im,[Y("button",{onClick:n}," Sign In ")]))]),vm,ym]),Me(bf,{msg:"Vite + Vue"})],64))}});const Tm=la(Em,[["__scopeId","data-v-0ae0776d"]]);cf(Tm).mount("#app");
