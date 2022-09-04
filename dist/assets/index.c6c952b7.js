(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ur(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ua="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fa=Ur(ua);function bi(t){return!!t||t===""}function Fr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ee(r)?pa(r):Fr(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ee(t))return t;if(Y(t))return t}}const da=/;(?![^(]*\))/g,ha=/:(.+)/;function pa(t){const e={};return t.split(da).forEach(n=>{if(n){const r=n.split(ha);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Br(t){let e="";if(ee(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const r=Br(t[n]);r&&(e+=r+" ")}else if(Y(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mr=t=>ee(t)?t:t==null?"":k(t)||Y(t)&&(t.toString===wi||!P(t.toString))?JSON.stringify(t,vi,2):String(t),vi=(t,e)=>e&&e.__v_isRef?vi(t,e.value):Et(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:yi(e)?{[`Set(${e.size})`]:[...e.values()]}:Y(e)&&!k(e)&&!Ei(e)?String(e):e,W={},wt=[],ve=()=>{},ga=()=>!1,ma=/^on[^a-z]/,Dn=t=>ma.test(t),Hr=t=>t.startsWith("onUpdate:"),re=Object.assign,$r=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_a=Object.prototype.hasOwnProperty,L=(t,e)=>_a.call(t,e),k=Array.isArray,Et=t=>Mn(t)==="[object Map]",yi=t=>Mn(t)==="[object Set]",P=t=>typeof t=="function",ee=t=>typeof t=="string",jr=t=>typeof t=="symbol",Y=t=>t!==null&&typeof t=="object",Ii=t=>Y(t)&&P(t.then)&&P(t.catch),wi=Object.prototype.toString,Mn=t=>wi.call(t),ba=t=>Mn(t).slice(8,-1),Ei=t=>Mn(t)==="[object Object]",Wr=t=>ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},va=/-(\w)/g,kt=xn(t=>t.replace(va,(e,n)=>n?n.toUpperCase():"")),ya=/\B([A-Z])/g,xt=xn(t=>t.replace(ya,"-$1").toLowerCase()),Ti=xn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zn=xn(t=>t?`on${Ti(t)}`:""),zt=(t,e)=>!Object.is(t,e),er=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},In=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ys;const wa=()=>ys||(ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Se;class Ea{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Se&&(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Ta(t,e=Se){e&&e.active&&e.effects.push(t)}const Vr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ci=t=>(t.w&Ze)>0,Si=t=>(t.n&Ze)>0,Ca=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ze},Sa=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ci(s)&&!Si(s)?s.delete(t):e[n++]=s,s.w&=~Ze,s.n&=~Ze}e.length=n}},_r=new WeakMap;let $t=0,Ze=1;const br=30;let _e;const ut=Symbol(""),vr=Symbol("");class zr{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ta(this,r)}run(){if(!this.active)return this.fn();let e=_e,n=Ye;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_e,_e=this,Ye=!0,Ze=1<<++$t,$t<=br?Ca(this):Is(this),this.fn()}finally{$t<=br&&Sa(this),Ze=1<<--$t,_e=this.parent,Ye=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Is(this),this.onStop&&this.onStop(),this.active=!1)}}function Is(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ye=!0;const Ai=[];function Lt(){Ai.push(Ye),Ye=!1}function Ut(){const t=Ai.pop();Ye=t===void 0?!0:t}function fe(t,e,n){if(Ye&&_e){let r=_r.get(t);r||_r.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Vr()),Oi(s)}}function Oi(t,e){let n=!1;$t<=br?Si(t)||(t.n|=Ze,n=!Ci(t)):n=!t.has(_e),n&&(t.add(_e),_e.deps.push(t))}function He(t,e,n,r,s,i){const o=_r.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&k(t))o.forEach((c,f)=>{(f==="length"||f>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":k(t)?Wr(n)&&a.push(o.get("length")):(a.push(o.get(ut)),Et(t)&&a.push(o.get(vr)));break;case"delete":k(t)||(a.push(o.get(ut)),Et(t)&&a.push(o.get(vr)));break;case"set":Et(t)&&a.push(o.get(ut));break}if(a.length===1)a[0]&&yr(a[0]);else{const c=[];for(const f of a)f&&c.push(...f);yr(Vr(c))}}function yr(t,e){const n=k(t)?t:[...t];for(const r of n)r.computed&&ws(r);for(const r of n)r.computed||ws(r)}function ws(t,e){(t!==_e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Aa=Ur("__proto__,__v_isRef,__isVue"),Ri=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jr)),Oa=Kr(),Ra=Kr(!1,!0),ka=Kr(!0),Es=Pa();function Pa(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=F(this);for(let i=0,o=this.length;i<o;i++)fe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(F)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lt();const r=F(this)[e].apply(this,n);return Ut(),r}}),t}function Kr(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?qa:Mi:e?Di:Ni).get(r))return r;const o=k(r);if(!t&&o&&L(Es,s))return Reflect.get(Es,s,i);const a=Reflect.get(r,s,i);return(jr(s)?Ri.has(s):Aa(s))||(t||fe(r,"get",s),e)?a:ne(a)?o&&Wr(s)?a:a.value:Y(a)?t?xi(a):Gr(a):a}}const Na=ki(),Da=ki(!0);function ki(t=!1){return function(n,r,s,i){let o=n[r];if(Pt(o)&&ne(o)&&!ne(s))return!1;if(!t&&(!wn(s)&&!Pt(s)&&(o=F(o),s=F(s)),!k(n)&&ne(o)&&!ne(s)))return o.value=s,!0;const a=k(n)&&Wr(r)?Number(r)<n.length:L(n,r),c=Reflect.set(n,r,s,i);return n===F(i)&&(a?zt(s,o)&&He(n,"set",r,s):He(n,"add",r,s)),c}}function Ma(t,e){const n=L(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&He(t,"delete",e,void 0),r}function xa(t,e){const n=Reflect.has(t,e);return(!jr(e)||!Ri.has(e))&&fe(t,"has",e),n}function La(t){return fe(t,"iterate",k(t)?"length":ut),Reflect.ownKeys(t)}const Pi={get:Oa,set:Na,deleteProperty:Ma,has:xa,ownKeys:La},Ua={get:ka,set(t,e){return!0},deleteProperty(t,e){return!0}},Fa=re({},Pi,{get:Ra,set:Da}),qr=t=>t,Ln=t=>Reflect.getPrototypeOf(t);function cn(t,e,n=!1,r=!1){t=t.__v_raw;const s=F(t),i=F(e);n||(e!==i&&fe(s,"get",e),fe(s,"get",i));const{has:o}=Ln(s),a=r?qr:n?Xr:Kt;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ln(t,e=!1){const n=this.__v_raw,r=F(n),s=F(t);return e||(t!==s&&fe(r,"has",t),fe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function un(t,e=!1){return t=t.__v_raw,!e&&fe(F(t),"iterate",ut),Reflect.get(t,"size",t)}function Ts(t){t=F(t);const e=F(this);return Ln(e).has.call(e,t)||(e.add(t),He(e,"add",t,t)),this}function Cs(t,e){e=F(e);const n=F(this),{has:r,get:s}=Ln(n);let i=r.call(n,t);i||(t=F(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?zt(e,o)&&He(n,"set",t,e):He(n,"add",t,e),this}function Ss(t){const e=F(this),{has:n,get:r}=Ln(e);let s=n.call(e,t);s||(t=F(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&He(e,"delete",t,void 0),i}function As(){const t=F(this),e=t.size!==0,n=t.clear();return e&&He(t,"clear",void 0,void 0),n}function fn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=F(o),c=e?qr:t?Xr:Kt;return!t&&fe(a,"iterate",ut),o.forEach((f,h)=>r.call(s,c(f),c(h),i))}}function dn(t,e,n){return function(...r){const s=this.__v_raw,i=F(s),o=Et(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,f=s[t](...r),h=n?qr:e?Xr:Kt;return!e&&fe(i,"iterate",c?vr:ut),{next(){const{value:_,done:v}=f.next();return v?{value:_,done:v}:{value:a?[h(_[0]),h(_[1])]:h(_),done:v}},[Symbol.iterator](){return this}}}}function Ve(t){return function(...e){return t==="delete"?!1:this}}function Ba(){const t={get(i){return cn(this,i)},get size(){return un(this)},has:ln,add:Ts,set:Cs,delete:Ss,clear:As,forEach:fn(!1,!1)},e={get(i){return cn(this,i,!1,!0)},get size(){return un(this)},has:ln,add:Ts,set:Cs,delete:Ss,clear:As,forEach:fn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return un(this,!0)},has(i){return ln.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:fn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return ln.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),e[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[t,n,e,r]}const[Ha,$a,ja,Wa]=Ba();function Jr(t,e){const n=e?t?Wa:ja:t?$a:Ha;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(L(n,s)&&s in r?n:r,s,i)}const Va={get:Jr(!1,!1)},za={get:Jr(!1,!0)},Ka={get:Jr(!0,!1)},Ni=new WeakMap,Di=new WeakMap,Mi=new WeakMap,qa=new WeakMap;function Ja(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ga(t){return t.__v_skip||!Object.isExtensible(t)?0:Ja(ba(t))}function Gr(t){return Pt(t)?t:Yr(t,!1,Pi,Va,Ni)}function Ya(t){return Yr(t,!1,Fa,za,Di)}function xi(t){return Yr(t,!0,Ua,Ka,Mi)}function Yr(t,e,n,r,s){if(!Y(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ga(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Tt(t){return Pt(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function Pt(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function Li(t){return Tt(t)||Pt(t)}function F(t){const e=t&&t.__v_raw;return e?F(e):t}function Ui(t){return In(t,"__v_skip",!0),t}const Kt=t=>Y(t)?Gr(t):t,Xr=t=>Y(t)?xi(t):t;function Fi(t){Ye&&_e&&(t=F(t),Oi(t.dep||(t.dep=Vr())))}function Bi(t,e){t=F(t),t.dep&&yr(t.dep)}function ne(t){return!!(t&&t.__v_isRef===!0)}function Hi(t){return Xa(t,!1)}function Xa(t,e){return ne(t)?t:new Qa(t,e)}class Qa{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:F(e),this._value=n?e:Kt(e)}get value(){return Fi(this),this._value}set value(e){const n=this.__v_isShallow||wn(e)||Pt(e);e=n?e:F(e),zt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Kt(e),Bi(this))}}function yt(t){return ne(t)?t.value:t}const Za={get:(t,e,n)=>yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ne(s)&&!ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $i(t){return Tt(t)?t:new Proxy(t,Za)}var ji;class ec{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ji]=!1,this._dirty=!0,this.effect=new zr(e,()=>{this._dirty||(this._dirty=!0,Bi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=F(this);return Fi(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ji="__v_isReadonly";function tc(t,e,n=!1){let r,s;const i=P(t);return i?(r=t,s=ve):(r=t.get,s=t.set),new ec(r,s,i||!s,n)}function Xe(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Un(i,e,n)}return s}function pe(t,e,n,r){if(P(t)){const i=Xe(t,e,n,r);return i&&Ii(i)&&i.catch(o=>{Un(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(pe(t[i],e,n,r));return s}function Un(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const f=i.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Xe(c,null,10,[t,o,a]);return}}nc(t,n,s,r)}function nc(t,e,n,r=!0){console.error(t)}let En=!1,Ir=!1;const te=[];let Oe=0;const Ct=[];let Le=null,ot=0;const Wi=Promise.resolve();let Qr=null;function rc(t){const e=Qr||Wi;return t?e.then(this?t.bind(this):t):e}function sc(t){let e=Oe+1,n=te.length;for(;e<n;){const r=e+n>>>1;qt(te[r])<t?e=r+1:n=r}return e}function Zr(t){(!te.length||!te.includes(t,En&&t.allowRecurse?Oe+1:Oe))&&(t.id==null?te.push(t):te.splice(sc(t.id),0,t),Vi())}function Vi(){!En&&!Ir&&(Ir=!0,Qr=Wi.then(Ki))}function ic(t){const e=te.indexOf(t);e>Oe&&te.splice(e,1)}function oc(t){k(t)?Ct.push(...t):(!Le||!Le.includes(t,t.allowRecurse?ot+1:ot))&&Ct.push(t),Vi()}function Os(t,e=Oe){for(;e<te.length;e++){const n=te[e];n&&n.pre&&(te.splice(e,1),e--,n())}}function zi(t){if(Ct.length){const e=[...new Set(Ct)];if(Ct.length=0,Le){Le.push(...e);return}for(Le=e,Le.sort((n,r)=>qt(n)-qt(r)),ot=0;ot<Le.length;ot++)Le[ot]();Le=null,ot=0}}const qt=t=>t.id==null?1/0:t.id,ac=(t,e)=>{const n=qt(t)-qt(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ki(t){Ir=!1,En=!0,te.sort(ac);const e=ve;try{for(Oe=0;Oe<te.length;Oe++){const n=te[Oe];n&&n.active!==!1&&Xe(n,null,14)}}finally{Oe=0,te.length=0,zi(),En=!1,Qr=null,(te.length||Ct.length)&&Ki()}}function cc(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||W;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:_,trim:v}=r[h]||W;v&&(s=n.map(T=>T.trim())),_&&(s=n.map(Ia))}let a,c=r[a=Zn(e)]||r[a=Zn(kt(e))];!c&&i&&(c=r[a=Zn(xt(e))]),c&&pe(c,t,6,s);const f=r[a+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pe(f,t,6,s)}}function qi(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!P(t)){const c=f=>{const h=qi(f,e,!0);h&&(a=!0,re(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Y(t)&&r.set(t,null),null):(k(i)?i.forEach(c=>o[c]=null):re(o,i),Y(t)&&r.set(t,o),o)}function Fn(t,e){return!t||!Dn(e)?!1:(e=e.slice(2).replace(/Once$/,""),L(t,e[0].toLowerCase()+e.slice(1))||L(t,xt(e))||L(t,e))}let Re=null,Bn=null;function Tn(t){const e=Re;return Re=t,Bn=t&&t.type.__scopeId||null,e}function Ji(t){Bn=t}function Gi(){Bn=null}function lc(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fs(-1);const i=Tn(e),o=t(...s);return Tn(i),r._d&&Fs(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function tr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:f,render:h,renderCache:_,data:v,setupState:T,ctx:N,inheritAttrs:M}=t;let R,D;const ie=Tn(t);try{if(n.shapeFlag&4){const q=s||r;R=Ae(h.call(q,q,_,i,T,v,N)),D=c}else{const q=e;R=Ae(q.length>1?q(i,{attrs:c,slots:a,emit:f}):q(i,null)),D=e.props?c:uc(c)}}catch(q){jt.length=0,Un(q,t,1),R=Ie(ye)}let K=R;if(D&&M!==!1){const q=Object.keys(D),{shapeFlag:Q}=K;q.length&&Q&7&&(o&&q.some(Hr)&&(D=fc(D,o)),K=et(K,D))}return n.dirs&&(K=et(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),R=K,Tn(ie),R}const uc=t=>{let e;for(const n in t)(n==="class"||n==="style"||Dn(n))&&((e||(e={}))[n]=t[n]);return e},fc=(t,e)=>{const n={};for(const r in t)(!Hr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dc(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Rs(r,o,f):!!o;if(c&8){const h=e.dynamicProps;for(let _=0;_<h.length;_++){const v=h[_];if(o[v]!==r[v]&&!Fn(f,v))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Rs(r,o,f):!0:!!o;return!1}function Rs(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fn(n,i))return!0}return!1}function hc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pc=t=>t.__isSuspense;function gc(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):oc(t)}function mc(t,e){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[t]=e}}function nr(t,e,n=!1){const r=Z||Re;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&P(e)?e.call(r.proxy):e}}const ks={};function rr(t,e,n){return Yi(t,e,n)}function Yi(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=W){const a=Z;let c,f=!1,h=!1;if(ne(t)?(c=()=>t.value,f=wn(t)):Tt(t)?(c=()=>t,r=!0):k(t)?(h=!0,f=t.some(D=>Tt(D)||wn(D)),c=()=>t.map(D=>{if(ne(D))return D.value;if(Tt(D))return It(D);if(P(D))return Xe(D,a,2)})):P(t)?e?c=()=>Xe(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return _&&_(),pe(t,a,3,[v])}:c=ve,e&&r){const D=c;c=()=>It(D())}let _,v=D=>{_=R.onStop=()=>{Xe(D,a,4)}};if(Gt)return v=ve,e?n&&pe(e,a,3,[c(),h?[]:void 0,v]):c(),ve;let T=h?[]:ks;const N=()=>{if(!!R.active)if(e){const D=R.run();(r||f||(h?D.some((ie,K)=>zt(ie,T[K])):zt(D,T)))&&(_&&_(),pe(e,a,3,[D,T===ks?void 0:T,v]),T=D)}else R.run()};N.allowRecurse=!!e;let M;s==="sync"?M=N:s==="post"?M=()=>le(N,a&&a.suspense):(N.pre=!0,a&&(N.id=a.uid),M=()=>Zr(N));const R=new zr(c,M);return e?n?N():T=R.run():s==="post"?le(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&$r(a.scope.effects,R)}}function _c(t,e,n){const r=this.proxy,s=ee(t)?t.includes(".")?Xi(r,t):()=>r[t]:t.bind(r,r);let i;P(e)?i=e:(i=e.handler,n=e);const o=Z;Nt(this);const a=Yi(s,i.bind(r),n);return o?Nt(o):ft(),a}function Xi(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function It(t,e){if(!Y(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ne(t))It(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)It(t[n],e);else if(yi(t)||Et(t))t.forEach(n=>{It(n,e)});else if(Ei(t))for(const n in t)It(t[n],e);return t}function bc(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return to(()=>{t.isMounted=!0}),no(()=>{t.isUnmounting=!0}),t}const de=[Function,Array],vc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},setup(t,{slots:e}){const n=sl(),r=bc();let s;return()=>{const i=e.default&&Zi(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const M of i)if(M.type!==ye){o=M;break}}const a=F(t),{mode:c}=a;if(r.isLeaving)return sr(o);const f=Ps(o);if(!f)return sr(o);const h=wr(f,a,r,n);Er(f,h);const _=n.subTree,v=_&&Ps(_);let T=!1;const{getTransitionKey:N}=f.type;if(N){const M=N();s===void 0?s=M:M!==s&&(s=M,T=!0)}if(v&&v.type!==ye&&(!at(f,v)||T)){const M=wr(v,a,r,n);if(Er(v,M),c==="out-in")return r.isLeaving=!0,M.afterLeave=()=>{r.isLeaving=!1,n.update()},sr(o);c==="in-out"&&f.type!==ye&&(M.delayLeave=(R,D,ie)=>{const K=Qi(r,v);K[String(v.key)]=v,R._leaveCb=()=>{D(),R._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=ie})}return o}}},yc=vc;function Qi(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function wr(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:_,onLeave:v,onAfterLeave:T,onLeaveCancelled:N,onBeforeAppear:M,onAppear:R,onAfterAppear:D,onAppearCancelled:ie}=e,K=String(t.key),q=Qi(n,t),Q=(x,$)=>{x&&pe(x,r,9,$)},we=(x,$)=>{const J=$[1];Q(x,$),k(x)?x.every(ae=>ae.length<=1)&&J():x.length<=1&&J()},Ee={mode:i,persisted:o,beforeEnter(x){let $=a;if(!n.isMounted)if(s)$=M||a;else return;x._leaveCb&&x._leaveCb(!0);const J=q[K];J&&at(t,J)&&J.el._leaveCb&&J.el._leaveCb(),Q($,[x])},enter(x){let $=c,J=f,ae=h;if(!n.isMounted)if(s)$=R||c,J=D||f,ae=ie||h;else return;let ge=!1;const De=x._enterCb=on=>{ge||(ge=!0,on?Q(ae,[x]):Q(J,[x]),Ee.delayedLeave&&Ee.delayedLeave(),x._enterCb=void 0)};$?we($,[x,De]):De()},leave(x,$){const J=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return $();Q(_,[x]);let ae=!1;const ge=x._leaveCb=De=>{ae||(ae=!0,$(),De?Q(N,[x]):Q(T,[x]),x._leaveCb=void 0,q[J]===t&&delete q[J])};q[J]=t,v?we(v,[x,ge]):ge()},clone(x){return wr(x,e,n,r)}};return Ee}function sr(t){if(Hn(t))return t=et(t),t.children=null,t}function Ps(t){return Hn(t)?t.children?t.children[0]:void 0:t}function Er(t,e){t.shapeFlag&6&&t.component?Er(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zi(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===he?(o.patchFlag&128&&s++,r=r.concat(Zi(o.children,e,a))):(e||o.type!==ye)&&r.push(a!=null?et(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function es(t){return P(t)?{setup:t,name:t.name}:t}const gn=t=>!!t.type.__asyncLoader,Hn=t=>t.type.__isKeepAlive;function Ic(t,e){eo(t,"a",e)}function wc(t,e){eo(t,"da",e)}function eo(t,e,n=Z){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($n(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Hn(s.parent.vnode)&&Ec(r,e,n,s),s=s.parent}}function Ec(t,e,n,r){const s=$n(e,t,r,!0);ro(()=>{$r(r[e],s)},n)}function $n(t,e,n=Z,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Lt(),Nt(n);const a=pe(e,n,t,o);return ft(),Ut(),a});return r?s.unshift(i):s.push(i),i}}const je=t=>(e,n=Z)=>(!Gt||t==="sp")&&$n(t,e,n),Tc=je("bm"),to=je("m"),Cc=je("bu"),Sc=je("u"),no=je("bum"),ro=je("um"),Ac=je("sp"),Oc=je("rtg"),Rc=je("rtc");function kc(t,e=Z){$n("ec",t,e)}function nt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Lt(),pe(c,n,8,[t.el,a,t,e]),Ut())}}const Pc=Symbol(),Tr=t=>t?mo(t)?ss(t)||t.proxy:Tr(t.parent):null,Cn=re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tr(t.parent),$root:t=>Tr(t.root),$emit:t=>t.emit,$options:t=>io(t),$forceUpdate:t=>t.f||(t.f=()=>Zr(t.update)),$nextTick:t=>t.n||(t.n=rc.bind(t.proxy)),$watch:t=>_c.bind(t)}),Nc={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let f;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==W&&L(r,e))return o[e]=1,r[e];if(s!==W&&L(s,e))return o[e]=2,s[e];if((f=t.propsOptions[0])&&L(f,e))return o[e]=3,i[e];if(n!==W&&L(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const h=Cn[e];let _,v;if(h)return e==="$attrs"&&fe(t,"get",e),h(t);if((_=a.__cssModules)&&(_=_[e]))return _;if(n!==W&&L(n,e))return o[e]=4,n[e];if(v=c.config.globalProperties,L(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==W&&L(s,e)?(s[e]=n,!0):r!==W&&L(r,e)?(r[e]=n,!0):L(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==W&&L(t,o)||e!==W&&L(e,o)||(a=i[0])&&L(a,o)||L(r,o)||L(Cn,o)||L(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:L(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Cr=!0;function Dc(t){const e=io(t),n=t.proxy,r=t.ctx;Cr=!1,e.beforeCreate&&Ns(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:f,created:h,beforeMount:_,mounted:v,beforeUpdate:T,updated:N,activated:M,deactivated:R,beforeDestroy:D,beforeUnmount:ie,destroyed:K,unmounted:q,render:Q,renderTracked:we,renderTriggered:Ee,errorCaptured:x,serverPrefetch:$,expose:J,inheritAttrs:ae,components:ge,directives:De,filters:on}=e;if(f&&Mc(f,r,null,t.appContext.config.unwrapInjectedRef),o)for(const G in o){const V=o[G];P(V)&&(r[G]=V.bind(n))}if(s){const G=s.call(n,n);Y(G)&&(t.data=Gr(G))}if(Cr=!0,i)for(const G in i){const V=i[G],Me=P(V)?V.bind(n,n):P(V.get)?V.get.bind(n,n):ve,Yn=!P(V)&&P(V.set)?V.set.bind(n):ve,Bt=ul({get:Me,set:Yn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:_t=>Bt.value=_t})}if(a)for(const G in a)so(a[G],r,n,G);if(c){const G=P(c)?c.call(n):c;Reflect.ownKeys(G).forEach(V=>{mc(V,G[V])})}h&&Ns(h,t,"c");function ce(G,V){k(V)?V.forEach(Me=>G(Me.bind(n))):V&&G(V.bind(n))}if(ce(Tc,_),ce(to,v),ce(Cc,T),ce(Sc,N),ce(Ic,M),ce(wc,R),ce(kc,x),ce(Rc,we),ce(Oc,Ee),ce(no,ie),ce(ro,q),ce(Ac,$),k(J))if(J.length){const G=t.exposed||(t.exposed={});J.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:Me=>n[V]=Me})})}else t.exposed||(t.exposed={});Q&&t.render===ve&&(t.render=Q),ae!=null&&(t.inheritAttrs=ae),ge&&(t.components=ge),De&&(t.directives=De)}function Mc(t,e,n=ve,r=!1){k(t)&&(t=Sr(t));for(const s in t){const i=t[s];let o;Y(i)?"default"in i?o=nr(i.from||s,i.default,!0):o=nr(i.from||s):o=nr(i),ne(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ns(t,e,n){pe(k(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function so(t,e,n,r){const s=r.includes(".")?Xi(n,r):()=>n[r];if(ee(t)){const i=e[t];P(i)&&rr(s,i)}else if(P(t))rr(s,t.bind(n));else if(Y(t))if(k(t))t.forEach(i=>so(i,e,n,r));else{const i=P(t.handler)?t.handler.bind(n):e[t.handler];P(i)&&rr(s,i,t)}}function io(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>Sn(c,f,o,!0)),Sn(c,e,o)),Y(e)&&i.set(e,c),c}function Sn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Sn(t,i,n,!0),s&&s.forEach(o=>Sn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xc={data:Ds,props:st,emits:st,methods:st,computed:st,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:st,directives:st,watch:Uc,provide:Ds,inject:Lc};function Ds(t,e){return e?t?function(){return re(P(t)?t.call(this,this):t,P(e)?e.call(this,this):e)}:e:t}function Lc(t,e){return st(Sr(t),Sr(e))}function Sr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function oe(t,e){return t?[...new Set([].concat(t,e))]:e}function st(t,e){return t?re(re(Object.create(null),t),e):e}function Uc(t,e){if(!t)return e;if(!e)return t;const n=re(Object.create(null),t);for(const r in e)n[r]=oe(t[r],e[r]);return n}function Fc(t,e,n,r=!1){const s={},i={};In(i,jn,1),t.propsDefaults=Object.create(null),oo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ya(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Bc(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=F(s),[c]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let _=0;_<h.length;_++){let v=h[_];if(Fn(t.emitsOptions,v))continue;const T=e[v];if(c)if(L(i,v))T!==i[v]&&(i[v]=T,f=!0);else{const N=kt(v);s[N]=Ar(c,a,N,T,t,!1)}else T!==i[v]&&(i[v]=T,f=!0)}}}else{oo(t,e,s,i)&&(f=!0);let h;for(const _ in a)(!e||!L(e,_)&&((h=xt(_))===_||!L(e,h)))&&(c?n&&(n[_]!==void 0||n[h]!==void 0)&&(s[_]=Ar(c,a,_,void 0,t,!0)):delete s[_]);if(i!==a)for(const _ in i)(!e||!L(e,_)&&!0)&&(delete i[_],f=!0)}f&&He(t,"set","$attrs")}function oo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pn(c))continue;const f=e[c];let h;s&&L(s,h=kt(c))?!i||!i.includes(h)?n[h]=f:(a||(a={}))[h]=f:Fn(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(i){const c=F(n),f=a||W;for(let h=0;h<i.length;h++){const _=i[h];n[_]=Ar(s,c,_,f[_],t,!L(f,_))}}return o}function Ar(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=L(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&P(c)){const{propsDefaults:f}=s;n in f?r=f[n]:(Nt(s),r=f[n]=c.call(null,e),ft())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===xt(n))&&(r=!0))}return r}function ao(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!P(t)){const h=_=>{c=!0;const[v,T]=ao(_,e,!0);re(o,v),T&&a.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Y(t)&&r.set(t,wt),wt;if(k(i))for(let h=0;h<i.length;h++){const _=kt(i[h]);Ms(_)&&(o[_]=W)}else if(i)for(const h in i){const _=kt(h);if(Ms(_)){const v=i[h],T=o[_]=k(v)||P(v)?{type:v}:v;if(T){const N=Us(Boolean,T.type),M=Us(String,T.type);T[0]=N>-1,T[1]=M<0||N<M,(N>-1||L(T,"default"))&&a.push(_)}}}const f=[o,a];return Y(t)&&r.set(t,f),f}function Ms(t){return t[0]!=="$"}function xs(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ls(t,e){return xs(t)===xs(e)}function Us(t,e){return k(e)?e.findIndex(n=>Ls(n,t)):P(e)&&Ls(e,t)?0:-1}const co=t=>t[0]==="_"||t==="$stable",ts=t=>k(t)?t.map(Ae):[Ae(t)],Hc=(t,e,n)=>{if(e._n)return e;const r=lc((...s)=>ts(e(...s)),n);return r._c=!1,r},lo=(t,e,n)=>{const r=t._ctx;for(const s in t){if(co(s))continue;const i=t[s];if(P(i))e[s]=Hc(s,i,r);else if(i!=null){const o=ts(i);e[s]=()=>o}}},uo=(t,e)=>{const n=ts(e);t.slots.default=()=>n},$c=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=F(e),In(e,"_",n)):lo(e,t.slots={})}else t.slots={},e&&uo(t,e);In(t.slots,jn,1)},jc=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=W;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(re(s,e),!n&&a===1&&delete s._):(i=!e.$stable,lo(e,s)),o=e}else e&&(uo(t,e),o={default:1});if(i)for(const a in s)!co(a)&&!(a in o)&&delete s[a]};function fo(){return{app:null,config:{isNativeTag:ga,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wc=0;function Vc(t,e){return function(r,s=null){P(r)||(r=Object.assign({},r)),s!=null&&!Y(s)&&(s=null);const i=fo(),o=new Set;let a=!1;const c=i.app={_uid:Wc++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fl,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&P(f.install)?(o.add(f),f.install(c,...h)):P(f)&&(o.add(f),f(c,...h))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,h){return h?(i.components[f]=h,c):i.components[f]},directive(f,h){return h?(i.directives[f]=h,c):i.directives[f]},mount(f,h,_){if(!a){const v=Ie(r,s);return v.appContext=i,h&&e?e(v,f):t(v,f,_),a=!0,c._container=f,f.__vue_app__=c,ss(v.component)||v.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(f,h){return i.provides[f]=h,c}};return c}}function Or(t,e,n,r,s=!1){if(k(t)){t.forEach((v,T)=>Or(v,e&&(k(e)?e[T]:e),n,r,s));return}if(gn(r)&&!s)return;const i=r.shapeFlag&4?ss(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,f=e&&e.r,h=a.refs===W?a.refs={}:a.refs,_=a.setupState;if(f!=null&&f!==c&&(ee(f)?(h[f]=null,L(_,f)&&(_[f]=null)):ne(f)&&(f.value=null)),P(c))Xe(c,a,12,[o,h]);else{const v=ee(c),T=ne(c);if(v||T){const N=()=>{if(t.f){const M=v?h[c]:c.value;s?k(M)&&$r(M,i):k(M)?M.includes(i)||M.push(i):v?(h[c]=[i],L(_,c)&&(_[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else v?(h[c]=o,L(_,c)&&(_[c]=o)):T&&(c.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,le(N,n)):N()}}}const le=gc;function zc(t){return Kc(t)}function Kc(t,e){const n=wa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:f,setElementText:h,parentNode:_,nextSibling:v,setScopeId:T=ve,cloneNode:N,insertStaticContent:M}=t,R=(l,u,d,g=null,p=null,y=null,w=!1,b=null,I=!!u.dynamicChildren)=>{if(l===u)return;l&&!at(l,u)&&(g=an(l),We(l,p,y,!0),l=null),u.patchFlag===-2&&(I=!1,u.dynamicChildren=null);const{type:m,ref:C,shapeFlag:E}=u;switch(m){case ns:D(l,u,d,g);break;case ye:ie(l,u,d,g);break;case ir:l==null&&K(u,d,g,w);break;case he:De(l,u,d,g,p,y,w,b,I);break;default:E&1?we(l,u,d,g,p,y,w,b,I):E&6?on(l,u,d,g,p,y,w,b,I):(E&64||E&128)&&m.process(l,u,d,g,p,y,w,b,I,bt)}C!=null&&p&&Or(C,l&&l.ref,y,u||l,!u)},D=(l,u,d,g)=>{if(l==null)r(u.el=a(u.children),d,g);else{const p=u.el=l.el;u.children!==l.children&&f(p,u.children)}},ie=(l,u,d,g)=>{l==null?r(u.el=c(u.children||""),d,g):u.el=l.el},K=(l,u,d,g)=>{[l.el,l.anchor]=M(l.children,u,d,g,l.el,l.anchor)},q=({el:l,anchor:u},d,g)=>{let p;for(;l&&l!==u;)p=v(l),r(l,d,g),l=p;r(u,d,g)},Q=({el:l,anchor:u})=>{let d;for(;l&&l!==u;)d=v(l),s(l),l=d;s(u)},we=(l,u,d,g,p,y,w,b,I)=>{w=w||u.type==="svg",l==null?Ee(u,d,g,p,y,w,b,I):J(l,u,p,y,w,b,I)},Ee=(l,u,d,g,p,y,w,b)=>{let I,m;const{type:C,props:E,shapeFlag:S,transition:A,patchFlag:U,dirs:B}=l;if(l.el&&N!==void 0&&U===-1)I=l.el=N(l.el);else{if(I=l.el=o(l.type,y,E&&E.is,E),S&8?h(I,l.children):S&16&&$(l.children,I,null,g,p,y&&C!=="foreignObject",w,b),B&&nt(l,null,g,"created"),E){for(const z in E)z!=="value"&&!pn(z)&&i(I,z,null,E[z],y,l.children,g,p,xe);"value"in E&&i(I,"value",null,E.value),(m=E.onVnodeBeforeMount)&&Ce(m,g,l)}x(I,l,l.scopeId,w,g)}B&&nt(l,null,g,"beforeMount");const H=(!p||p&&!p.pendingBranch)&&A&&!A.persisted;H&&A.beforeEnter(I),r(I,u,d),((m=E&&E.onVnodeMounted)||H||B)&&le(()=>{m&&Ce(m,g,l),H&&A.enter(I),B&&nt(l,null,g,"mounted")},p)},x=(l,u,d,g,p)=>{if(d&&T(l,d),g)for(let y=0;y<g.length;y++)T(l,g[y]);if(p){let y=p.subTree;if(u===y){const w=p.vnode;x(l,w,w.scopeId,w.slotScopeIds,p.parent)}}},$=(l,u,d,g,p,y,w,b,I=0)=>{for(let m=I;m<l.length;m++){const C=l[m]=b?Ke(l[m]):Ae(l[m]);R(null,C,u,d,g,p,y,w,b)}},J=(l,u,d,g,p,y,w)=>{const b=u.el=l.el;let{patchFlag:I,dynamicChildren:m,dirs:C}=u;I|=l.patchFlag&16;const E=l.props||W,S=u.props||W;let A;d&&rt(d,!1),(A=S.onVnodeBeforeUpdate)&&Ce(A,d,u,l),C&&nt(u,l,d,"beforeUpdate"),d&&rt(d,!0);const U=p&&u.type!=="foreignObject";if(m?ae(l.dynamicChildren,m,b,d,g,U,y):w||Me(l,u,b,null,d,g,U,y,!1),I>0){if(I&16)ge(b,u,E,S,d,g,p);else if(I&2&&E.class!==S.class&&i(b,"class",null,S.class,p),I&4&&i(b,"style",E.style,S.style,p),I&8){const B=u.dynamicProps;for(let H=0;H<B.length;H++){const z=B[H],me=E[z],vt=S[z];(vt!==me||z==="value")&&i(b,z,me,vt,p,l.children,d,g,xe)}}I&1&&l.children!==u.children&&h(b,u.children)}else!w&&m==null&&ge(b,u,E,S,d,g,p);((A=S.onVnodeUpdated)||C)&&le(()=>{A&&Ce(A,d,u,l),C&&nt(u,l,d,"updated")},g)},ae=(l,u,d,g,p,y,w)=>{for(let b=0;b<u.length;b++){const I=l[b],m=u[b],C=I.el&&(I.type===he||!at(I,m)||I.shapeFlag&70)?_(I.el):d;R(I,m,C,null,g,p,y,w,!0)}},ge=(l,u,d,g,p,y,w)=>{if(d!==g){for(const b in g){if(pn(b))continue;const I=g[b],m=d[b];I!==m&&b!=="value"&&i(l,b,m,I,w,u.children,p,y,xe)}if(d!==W)for(const b in d)!pn(b)&&!(b in g)&&i(l,b,d[b],null,w,u.children,p,y,xe);"value"in g&&i(l,"value",d.value,g.value)}},De=(l,u,d,g,p,y,w,b,I)=>{const m=u.el=l?l.el:a(""),C=u.anchor=l?l.anchor:a("");let{patchFlag:E,dynamicChildren:S,slotScopeIds:A}=u;A&&(b=b?b.concat(A):A),l==null?(r(m,d,g),r(C,d,g),$(u.children,d,C,p,y,w,b,I)):E>0&&E&64&&S&&l.dynamicChildren?(ae(l.dynamicChildren,S,d,p,y,w,b),(u.key!=null||p&&u===p.subTree)&&ho(l,u,!0)):Me(l,u,d,C,p,y,w,b,I)},on=(l,u,d,g,p,y,w,b,I)=>{u.slotScopeIds=b,l==null?u.shapeFlag&512?p.ctx.activate(u,d,g,w,I):Gn(u,d,g,p,y,w,I):ce(l,u,I)},Gn=(l,u,d,g,p,y,w)=>{const b=l.component=rl(l,g,p);if(Hn(l)&&(b.ctx.renderer=bt),il(b),b.asyncDep){if(p&&p.registerDep(b,G),!l.el){const I=b.subTree=Ie(ye);ie(null,I,u,d)}return}G(b,l,u,d,p,y,w)},ce=(l,u,d)=>{const g=u.component=l.component;if(dc(l,u,d))if(g.asyncDep&&!g.asyncResolved){V(g,u,d);return}else g.next=u,ic(g.update),g.update();else u.el=l.el,g.vnode=u},G=(l,u,d,g,p,y,w)=>{const b=()=>{if(l.isMounted){let{next:C,bu:E,u:S,parent:A,vnode:U}=l,B=C,H;rt(l,!1),C?(C.el=U.el,V(l,C,w)):C=U,E&&er(E),(H=C.props&&C.props.onVnodeBeforeUpdate)&&Ce(H,A,C,U),rt(l,!0);const z=tr(l),me=l.subTree;l.subTree=z,R(me,z,_(me.el),an(me),l,p,y),C.el=z.el,B===null&&hc(l,z.el),S&&le(S,p),(H=C.props&&C.props.onVnodeUpdated)&&le(()=>Ce(H,A,C,U),p)}else{let C;const{el:E,props:S}=u,{bm:A,m:U,parent:B}=l,H=gn(u);if(rt(l,!1),A&&er(A),!H&&(C=S&&S.onVnodeBeforeMount)&&Ce(C,B,u),rt(l,!0),E&&Qn){const z=()=>{l.subTree=tr(l),Qn(E,l.subTree,l,p,null)};H?u.type.__asyncLoader().then(()=>!l.isUnmounted&&z()):z()}else{const z=l.subTree=tr(l);R(null,z,d,g,l,p,y),u.el=z.el}if(U&&le(U,p),!H&&(C=S&&S.onVnodeMounted)){const z=u;le(()=>Ce(C,B,z),p)}(u.shapeFlag&256||B&&gn(B.vnode)&&B.vnode.shapeFlag&256)&&l.a&&le(l.a,p),l.isMounted=!0,u=d=g=null}},I=l.effect=new zr(b,()=>Zr(m),l.scope),m=l.update=()=>I.run();m.id=l.uid,rt(l,!0),m()},V=(l,u,d)=>{u.component=l;const g=l.vnode.props;l.vnode=u,l.next=null,Bc(l,u.props,g,d),jc(l,u.children,d),Lt(),Os(),Ut()},Me=(l,u,d,g,p,y,w,b,I=!1)=>{const m=l&&l.children,C=l?l.shapeFlag:0,E=u.children,{patchFlag:S,shapeFlag:A}=u;if(S>0){if(S&128){Bt(m,E,d,g,p,y,w,b,I);return}else if(S&256){Yn(m,E,d,g,p,y,w,b,I);return}}A&8?(C&16&&xe(m,p,y),E!==m&&h(d,E)):C&16?A&16?Bt(m,E,d,g,p,y,w,b,I):xe(m,p,y,!0):(C&8&&h(d,""),A&16&&$(E,d,g,p,y,w,b,I))},Yn=(l,u,d,g,p,y,w,b,I)=>{l=l||wt,u=u||wt;const m=l.length,C=u.length,E=Math.min(m,C);let S;for(S=0;S<E;S++){const A=u[S]=I?Ke(u[S]):Ae(u[S]);R(l[S],A,d,null,p,y,w,b,I)}m>C?xe(l,p,y,!0,!1,E):$(u,d,g,p,y,w,b,I,E)},Bt=(l,u,d,g,p,y,w,b,I)=>{let m=0;const C=u.length;let E=l.length-1,S=C-1;for(;m<=E&&m<=S;){const A=l[m],U=u[m]=I?Ke(u[m]):Ae(u[m]);if(at(A,U))R(A,U,d,null,p,y,w,b,I);else break;m++}for(;m<=E&&m<=S;){const A=l[E],U=u[S]=I?Ke(u[S]):Ae(u[S]);if(at(A,U))R(A,U,d,null,p,y,w,b,I);else break;E--,S--}if(m>E){if(m<=S){const A=S+1,U=A<C?u[A].el:g;for(;m<=S;)R(null,u[m]=I?Ke(u[m]):Ae(u[m]),d,U,p,y,w,b,I),m++}}else if(m>S)for(;m<=E;)We(l[m],p,y,!0),m++;else{const A=m,U=m,B=new Map;for(m=U;m<=S;m++){const ue=u[m]=I?Ke(u[m]):Ae(u[m]);ue.key!=null&&B.set(ue.key,m)}let H,z=0;const me=S-U+1;let vt=!1,_s=0;const Ht=new Array(me);for(m=0;m<me;m++)Ht[m]=0;for(m=A;m<=E;m++){const ue=l[m];if(z>=me){We(ue,p,y,!0);continue}let Te;if(ue.key!=null)Te=B.get(ue.key);else for(H=U;H<=S;H++)if(Ht[H-U]===0&&at(ue,u[H])){Te=H;break}Te===void 0?We(ue,p,y,!0):(Ht[Te-U]=m+1,Te>=_s?_s=Te:vt=!0,R(ue,u[Te],d,null,p,y,w,b,I),z++)}const bs=vt?qc(Ht):wt;for(H=bs.length-1,m=me-1;m>=0;m--){const ue=U+m,Te=u[ue],vs=ue+1<C?u[ue+1].el:g;Ht[m]===0?R(null,Te,d,vs,p,y,w,b,I):vt&&(H<0||m!==bs[H]?_t(Te,d,vs,2):H--)}}},_t=(l,u,d,g,p=null)=>{const{el:y,type:w,transition:b,children:I,shapeFlag:m}=l;if(m&6){_t(l.component.subTree,u,d,g);return}if(m&128){l.suspense.move(u,d,g);return}if(m&64){w.move(l,u,d,bt);return}if(w===he){r(y,u,d);for(let E=0;E<I.length;E++)_t(I[E],u,d,g);r(l.anchor,u,d);return}if(w===ir){q(l,u,d);return}if(g!==2&&m&1&&b)if(g===0)b.beforeEnter(y),r(y,u,d),le(()=>b.enter(y),p);else{const{leave:E,delayLeave:S,afterLeave:A}=b,U=()=>r(y,u,d),B=()=>{E(y,()=>{U(),A&&A()})};S?S(y,U,B):B()}else r(y,u,d)},We=(l,u,d,g=!1,p=!1)=>{const{type:y,props:w,ref:b,children:I,dynamicChildren:m,shapeFlag:C,patchFlag:E,dirs:S}=l;if(b!=null&&Or(b,null,d,l,!0),C&256){u.ctx.deactivate(l);return}const A=C&1&&S,U=!gn(l);let B;if(U&&(B=w&&w.onVnodeBeforeUnmount)&&Ce(B,u,l),C&6)la(l.component,d,g);else{if(C&128){l.suspense.unmount(d,g);return}A&&nt(l,null,u,"beforeUnmount"),C&64?l.type.remove(l,u,d,p,bt,g):m&&(y!==he||E>0&&E&64)?xe(m,u,d,!1,!0):(y===he&&E&384||!p&&C&16)&&xe(I,u,d),g&&gs(l)}(U&&(B=w&&w.onVnodeUnmounted)||A)&&le(()=>{B&&Ce(B,u,l),A&&nt(l,null,u,"unmounted")},d)},gs=l=>{const{type:u,el:d,anchor:g,transition:p}=l;if(u===he){ca(d,g);return}if(u===ir){Q(l);return}const y=()=>{s(d),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:w,delayLeave:b}=p,I=()=>w(d,y);b?b(l.el,y,I):I()}else y()},ca=(l,u)=>{let d;for(;l!==u;)d=v(l),s(l),l=d;s(u)},la=(l,u,d)=>{const{bum:g,scope:p,update:y,subTree:w,um:b}=l;g&&er(g),p.stop(),y&&(y.active=!1,We(w,l,u,d)),b&&le(b,u),le(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},xe=(l,u,d,g=!1,p=!1,y=0)=>{for(let w=y;w<l.length;w++)We(l[w],u,d,g,p)},an=l=>l.shapeFlag&6?an(l.component.subTree):l.shapeFlag&128?l.suspense.next():v(l.anchor||l.el),ms=(l,u,d)=>{l==null?u._vnode&&We(u._vnode,null,null,!0):R(u._vnode||null,l,u,null,null,null,d),Os(),zi(),u._vnode=l},bt={p:R,um:We,m:_t,r:gs,mt:Gn,mc:$,pc:Me,pbc:ae,n:an,o:t};let Xn,Qn;return e&&([Xn,Qn]=e(bt)),{render:ms,hydrate:Xn,createApp:Vc(ms,Xn)}}function rt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ho(t,e,n=!1){const r=t.children,s=e.children;if(k(r)&&k(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ke(s[i]),a.el=o.el),n||ho(o,a))}}function qc(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<f?i=a+1:o=a;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Jc=t=>t.__isTeleport,he=Symbol(void 0),ns=Symbol(void 0),ye=Symbol(void 0),ir=Symbol(void 0),jt=[];let be=null;function St(t=!1){jt.push(be=t?null:[])}function Gc(){jt.pop(),be=jt[jt.length-1]||null}let Jt=1;function Fs(t){Jt+=t}function po(t){return t.dynamicChildren=Jt>0?be||wt:null,Gc(),Jt>0&&be&&be.push(t),t}function Wt(t,e,n,r,s,i){return po(X(t,e,n,r,s,i,!0))}function Yc(t,e,n,r,s){return po(Ie(t,e,n,r,s,!0))}function Xc(t){return t?t.__v_isVNode===!0:!1}function at(t,e){return t.type===e.type&&t.key===e.key}const jn="__vInternal",go=({key:t})=>t!=null?t:null,mn=({ref:t,ref_key:e,ref_for:n})=>t!=null?ee(t)||ne(t)||P(t)?{i:Re,r:t,k:e,f:!!n}:t:null;function X(t,e=null,n=null,r=0,s=null,i=t===he?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&go(e),ref:e&&mn(e),scopeId:Bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(rs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ee(n)?8:16),Jt>0&&!o&&be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&be.push(c),c}const Ie=Qc;function Qc(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Pc)&&(t=ye),Xc(t)){const a=et(t,e,!0);return n&&rs(a,n),Jt>0&&!i&&be&&(a.shapeFlag&6?be[be.indexOf(t)]=a:be.push(a)),a.patchFlag|=-2,a}if(ll(t)&&(t=t.__vccOpts),e){e=Zc(e);let{class:a,style:c}=e;a&&!ee(a)&&(e.class=Br(a)),Y(c)&&(Li(c)&&!k(c)&&(c=re({},c)),e.style=Fr(c))}const o=ee(t)?1:pc(t)?128:Jc(t)?64:Y(t)?4:P(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function Zc(t){return t?Li(t)||jn in t?re({},t):t:null}function et(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?el(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&go(a),ref:e&&e.ref?n&&s?k(s)?s.concat(mn(e)):[s,mn(e)]:mn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==he?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&et(t.ssContent),ssFallback:t.ssFallback&&et(t.ssFallback),el:t.el,anchor:t.anchor}}function ht(t=" ",e=0){return Ie(ns,null,t,e)}function Bs(t="",e=!1){return e?(St(),Yc(ye,null,t)):Ie(ye,null,t)}function Ae(t){return t==null||typeof t=="boolean"?Ie(ye):k(t)?Ie(he,null,t.slice()):typeof t=="object"?Ke(t):Ie(ns,null,String(t))}function Ke(t){return t.el===null||t.memo?t:et(t)}function rs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),rs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(jn in e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else P(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[ht(e)]):n=8);t.children=e,t.shapeFlag|=n}function el(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Br([e.class,r.class]));else if(s==="style")e.style=Fr([e.style,r.style]);else if(Dn(s)){const i=e[s],o=r[s];o&&i!==o&&!(k(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ce(t,e,n,r=null){pe(t,e,7,[n,r])}const tl=fo();let nl=0;function rl(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||tl,i={uid:nl++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ea(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ao(r,s),emitsOptions:qi(r,s),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cc.bind(null,i),t.ce&&t.ce(i),i}let Z=null;const sl=()=>Z||Re,Nt=t=>{Z=t,t.scope.on()},ft=()=>{Z&&Z.scope.off(),Z=null};function mo(t){return t.vnode.shapeFlag&4}let Gt=!1;function il(t,e=!1){Gt=e;const{props:n,children:r}=t.vnode,s=mo(t);Fc(t,n,s,e),$c(t,r);const i=s?ol(t,e):void 0;return Gt=!1,i}function ol(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ui(new Proxy(t.ctx,Nc));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?cl(t):null;Nt(t),Lt();const i=Xe(r,t,0,[t.props,s]);if(Ut(),ft(),Ii(i)){if(i.then(ft,ft),e)return i.then(o=>{Hs(t,o,e)}).catch(o=>{Un(o,t,0)});t.asyncDep=i}else Hs(t,i,e)}else _o(t,e)}function Hs(t,e,n){P(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Y(e)&&(t.setupState=$i(e)),_o(t,n)}let $s;function _o(t,e,n){const r=t.type;if(!t.render){if(!e&&$s&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,f=re(re({isCustomElement:i,delimiters:a},o),c);r.render=$s(s,f)}}t.render=r.render||ve}Nt(t),Lt(),Dc(t),Ut(),ft()}function al(t){return new Proxy(t.attrs,{get(e,n){return fe(t,"get","$attrs"),e[n]}})}function cl(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=al(t))},slots:t.slots,emit:t.emit,expose:e}}function ss(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($i(Ui(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cn)return Cn[n](t)}}))}function ll(t){return P(t)&&"__vccOpts"in t}const ul=(t,e)=>tc(t,e,Gt),fl="3.2.38",dl="http://www.w3.org/2000/svg",ct=typeof document<"u"?document:null,js=ct&&ct.createElement("template"),hl={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ct.createElementNS(dl,t):ct.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ct.createTextNode(t),createComment:t=>ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{js.innerHTML=r?`<svg>${t}</svg>`:t;const a=js.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pl(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function gl(t,e,n){const r=t.style,s=ee(n);if(n&&!s){for(const i in n)Rr(r,i,n[i]);if(e&&!ee(e))for(const i in e)n[i]==null&&Rr(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ws=/\s*!important$/;function Rr(t,e,n){if(k(n))n.forEach(r=>Rr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ml(t,e);Ws.test(n)?t.setProperty(xt(r),n.replace(Ws,""),"important"):t[r]=n}}const Vs=["Webkit","Moz","ms"],or={};function ml(t,e){const n=or[e];if(n)return n;let r=kt(e);if(r!=="filter"&&r in t)return or[e]=r;r=Ti(r);for(let s=0;s<Vs.length;s++){const i=Vs[s]+r;if(i in t)return or[e]=i}return e}const zs="http://www.w3.org/1999/xlink";function _l(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zs,e.slice(6,e.length)):t.setAttributeNS(zs,e,n);else{const i=fa(e);n==null||i&&!bi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function bl(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bi(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[bo,vl]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let kr=0;const yl=Promise.resolve(),Il=()=>{kr=0},wl=()=>kr||(yl.then(Il),kr=bo());function El(t,e,n,r){t.addEventListener(e,n,r)}function Tl(t,e,n,r){t.removeEventListener(e,n,r)}function Cl(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Sl(e);if(r){const f=i[e]=Al(r,s);El(t,a,f,c)}else o&&(Tl(t,a,o,c),i[e]=void 0)}}const Ks=/(?:Once|Passive|Capture)$/;function Sl(t){let e;if(Ks.test(t)){e={};let r;for(;r=t.match(Ks);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xt(t.slice(2)),e]}function Al(t,e){const n=r=>{const s=r.timeStamp||bo();(vl||s>=n.attached-1)&&pe(Ol(r,n.value),e,5,[r])};return n.value=t,n.attached=wl(),n}function Ol(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qs=/^on[a-z]/,Rl=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?pl(t,r,s):e==="style"?gl(t,n,r):Dn(e)?Hr(e)||Cl(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kl(t,e,r,s))?bl(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_l(t,e,r,s))};function kl(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&qs.test(e)&&P(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qs.test(e)&&ee(n)?!1:e in t}const Pl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yc.props;const Nl=re({patchProp:Rl},hl);let Js;function Dl(){return Js||(Js=zc(Nl))}const Ml=(...t)=>{const e=Dl().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xl(r);if(!s)return;const i=e._component;!P(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xl(t){return ee(t)?document.querySelector(t):t}const Ll="/vite.svg",Ul="/assets/vue.5532db34.svg",Fl={id:"user-container"},Bl={key:0},Hl={key:1},$l=es({__name:"Header",props:{user:null},emits:["sign-in-user","sign-out-user"],setup(t,{emit:e}){const n=t,r=()=>e("sign-in-user"),s=()=>e("sign-out-user");return(i,o)=>(St(),Wt("div",Fl,[n.user?Bs("",!0):(St(),Wt("div",Bl,[X("button",{onClick:r}," Sign In ")])),n.user?(St(),Wt("div",Hl,[X("div",null,mr(n.user.displayName),1),X("button",{onClick:s}," Sign Out ")])):Bs("",!0)]))}}),Wn=t=>(Ji("data-v-e93ce6da"),t=t(),Gi(),t),jl={class:"card"},Wl=Wn(()=>X("p",null,[ht(" Edit "),X("code",null,"components/HelloWorld.vue"),ht(" to test HMR ")],-1)),Vl=Wn(()=>X("p",null,[ht(" Check out "),X("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),ht(", the official Vue + Vite starter ")],-1)),zl=Wn(()=>X("p",null,[ht(" Install "),X("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),ht(" in your IDE for a better DX ")],-1)),Kl=Wn(()=>X("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),ql=es({__name:"HelloWorld",props:{msg:null,count:null},emits:["increment"],setup(t,{emit:e}){return(n,r)=>(St(),Wt(he,null,[X("h1",null,mr(t.msg),1),X("div",jl,[X("button",{type:"button",onClick:r[0]||(r[0]=s=>e("increment"))},"count is "+mr(t.count),1),Wl]),Vl,zl,Kl],64))}});const vo=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Jl=vo(ql,[["__scopeId","data-v-e93ce6da"]]);function Gl(t){const e=Hi(t);return{count:e,increment:()=>e.value++}}/**
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
 */const yo=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yl=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,h=i>>2,_=(i&3)<<4|a>>4;let v=(a&15)<<2|f>>6,T=f&63;c||(T=64,o||(v=64)),r.push(n[h],n[_],n[v],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||f==null||_==null)throw Error();const v=i<<2|a>>4;if(r.push(v),f!==64){const T=a<<4&240|f>>2;if(r.push(T),_!==64){const N=f<<6&192|_;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Xl=function(t){const e=yo(t);return Io.encodeByteArray(e,!0)},wo=function(t){return Xl(t).replace(/\./g,"")},Ql=function(t){try{return Io.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Zl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function tu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ru(){const t=se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function su(){return typeof indexedDB=="object"}function iu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ou="FirebaseError";class tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ou,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,en.prototype.create)}}class en{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?au(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tt(s,a,r)}}function au(t,e){return t.replace(cu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cu=/\{\$([^}]+)}/g;function lu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function An(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gs(i)&&Gs(o)){if(!An(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gs(t){return t!==null&&typeof t=="object"}/**
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
 */function tn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uu(t,e){const n=new fu(t,e);return n.subscribe.bind(n)}class fu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");du(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ar),s.error===void 0&&(s.error=ar),s.complete===void 0&&(s.complete=ar);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function du(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ar(){}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const it="[DEFAULT]";/**
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
 */class hu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gu(e))try{this.getOrInitializeService({instanceIdentifier:it})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=it){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=it){return this.instances.has(e)}getOptions(e=it){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=it){return this.component?this.component.multipleInstances?e:it:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pu(t){return t===it?void 0:t}function gu(t){return t.instantiationMode==="EAGER"}/**
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
 */class mu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const _u={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},bu=j.INFO,vu={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},yu=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vu[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eo{constructor(e){this.name=e,this._logLevel=bu,this._logHandler=yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_u[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Iu=(t,e)=>e.some(n=>t instanceof n);let Ys,Xs;function wu(){return Ys||(Ys=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eu(){return Xs||(Xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const To=new WeakMap,Pr=new WeakMap,Co=new WeakMap,cr=new WeakMap,is=new WeakMap;function Tu(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qe(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&To.set(n,t)}).catch(()=>{}),is.set(e,t),e}function Cu(t){if(Pr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pr.set(t,e)}let Nr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Co.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Su(t){Nr=t(Nr)}function Au(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lr(this),e,...n);return Co.set(r,e.sort?e.sort():[e]),Qe(r)}:Eu().includes(t)?function(...e){return t.apply(lr(this),e),Qe(To.get(this))}:function(...e){return Qe(t.apply(lr(this),e))}}function Ou(t){return typeof t=="function"?Au(t):(t instanceof IDBTransaction&&Cu(t),Iu(t,wu())?new Proxy(t,Nr):t)}function Qe(t){if(t instanceof IDBRequest)return Tu(t);if(cr.has(t))return cr.get(t);const e=Ou(t);return e!==t&&(cr.set(t,e),is.set(e,t)),e}const lr=t=>is.get(t);function Ru(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Qe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qe(o.result),c.oldVersion,c.newVersion,Qe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ku=["get","getKey","getAll","getAllKeys","count"],Pu=["put","add","delete","clear"],ur=new Map;function Qs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ur.get(e))return ur.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Pu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ku.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return ur.set(e,i),i}Su(t=>({...t,get:(e,n,r)=>Qs(e,n)||t.get(e,n,r),has:(e,n)=>!!Qs(e,n)||t.has(e,n)}));/**
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
 */class Nu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Du(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Du(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dr="@firebase/app",Zs="0.7.32";/**
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
 */const pt=new Eo("@firebase/app"),Mu="@firebase/app-compat",xu="@firebase/analytics-compat",Lu="@firebase/analytics",Uu="@firebase/app-check-compat",Fu="@firebase/app-check",Bu="@firebase/auth",Hu="@firebase/auth-compat",$u="@firebase/database",ju="@firebase/database-compat",Wu="@firebase/functions",Vu="@firebase/functions-compat",zu="@firebase/installations",Ku="@firebase/installations-compat",qu="@firebase/messaging",Ju="@firebase/messaging-compat",Gu="@firebase/performance",Yu="@firebase/performance-compat",Xu="@firebase/remote-config",Qu="@firebase/remote-config-compat",Zu="@firebase/storage",ef="@firebase/storage-compat",tf="@firebase/firestore",nf="@firebase/firestore-compat",rf="firebase",sf="9.9.4";/**
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
 */const So="[DEFAULT]",of={[Dr]:"fire-core",[Mu]:"fire-core-compat",[Lu]:"fire-analytics",[xu]:"fire-analytics-compat",[Fu]:"fire-app-check",[Uu]:"fire-app-check-compat",[Bu]:"fire-auth",[Hu]:"fire-auth-compat",[$u]:"fire-rtdb",[ju]:"fire-rtdb-compat",[Wu]:"fire-fn",[Vu]:"fire-fn-compat",[zu]:"fire-iid",[Ku]:"fire-iid-compat",[qu]:"fire-fcm",[Ju]:"fire-fcm-compat",[Gu]:"fire-perf",[Yu]:"fire-perf-compat",[Xu]:"fire-rc",[Qu]:"fire-rc-compat",[Zu]:"fire-gcs",[ef]:"fire-gcs-compat",[tf]:"fire-fst",[nf]:"fire-fst-compat","fire-js":"fire-js",[rf]:"fire-js-all"};/**
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
 */const On=new Map,Mr=new Map;function af(t,e){try{t.container.addComponent(e)}catch(n){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(Mr.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;Mr.set(e,t);for(const n of On.values())af(n,t);return!0}function Ao(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new en("app","Firebase",cf);/**
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
 */class lf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Vn=sf;function Oo(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:So,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw gt.create("bad-app-name",{appName:String(r)});const s=On.get(r);if(s){if(An(t,s.options)&&An(n,s.config))return s;throw gt.create("duplicate-app",{appName:r})}const i=new mu(r);for(const a of Mr.values())i.addComponent(a);const o=new lf(t,n,i);return On.set(r,o),o}function uf(t=So){const e=On.get(t);if(!e)throw gt.create("no-app",{appName:t});return e}function At(t,e,n){var r;let s=(r=of[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(a.join(" "));return}Yt(new Dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ff="firebase-heartbeat-database",df=1,Xt="firebase-heartbeat-store";let fr=null;function Ro(){return fr||(fr=Ru(ff,df,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xt)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),fr}async function hf(t){var e;try{return(await Ro()).transaction(Xt).objectStore(Xt).get(ko(t))}catch(n){if(n instanceof tt)pt.warn(n.message);else{const r=gt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});pt.warn(r.message)}}}async function ei(t,e){var n;try{const s=(await Ro()).transaction(Xt,"readwrite");return await s.objectStore(Xt).put(e,ko(t)),s.done}catch(r){if(r instanceof tt)pt.warn(r.message);else{const s=gt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});pt.warn(s.message)}}}function ko(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pf=1024,gf=30*24*60*60*1e3;class mf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ti();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=gf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ti(),{heartbeatsToSend:n,unsentEntries:r}=_f(this._heartbeatsCache.heartbeats),s=wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ti(){return new Date().toISOString().substring(0,10)}function _f(t,e=pf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ni(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ni(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return su()?iu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ei(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ei(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ni(t){return wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vf(t){Yt(new Dt("platform-logger",e=>new Nu(e),"PRIVATE")),Yt(new Dt("heartbeat",e=>new mf(e),"PRIVATE")),At(Dr,Zs,t),At(Dr,Zs,"esm2017"),At("fire-js","")}vf("");var yf="firebase",If="9.9.4";/**
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
 */At(yf,If,"app");const dr={apiKey:"AIzaSyCsLrBhQ_av_rext-ob38nZQhEhZASE6fE",authDomain:"planning-6317a.firebaseapp.com",projectId:"planning-6317a",storageBucket:"planning-6317a.appspot.com",messagingSenderId:"883064645820",appId:"1:883064645820:web:5bf2507629120159a548b9",measurementId:"G-6YDFBF3WXE"};function Po(){if(!dr||!dr.apiKey)throw new Error(`No Firebase configuration object provided.
Add your web app's configuration object to firebase-config.js`);return dr}function os(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function No(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wf=No,Do=new en("auth","Firebase",No());/**
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
 */const ri=new Eo("@firebase/auth");function _n(t,...e){ri.logLevel<=j.ERROR&&ri.error(`Auth (${Vn}): ${t}`,...e)}/**
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
 */function Ne(t,...e){throw as(t,...e)}function ke(t,...e){return as(t,...e)}function Mo(t,e,n){const r=Object.assign(Object.assign({},wf()),{[e]:n});return new en("auth","Firebase",r).create(e,{appName:t.name})}function Ef(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ne(t,"argument-error"),Mo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function as(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Do.create(t,...e)}function O(t,e,...n){if(!t)throw as(e,...n)}function Fe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _n(e),new Error(e)}function $e(t,e){t||Fe(e)}/**
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
 */const si=new Map;function Be(t){$e(t instanceof Function,"Expected a class definition");let e=si.get(t);return e?($e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,si.set(t,e),e)}/**
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
 */function Tf(t,e){const n=Ao(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(An(i,e!=null?e:{}))return s;Ne(s,"already-initialized")}return n.initialize({options:e})}function Cf(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Be);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function xr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sf(){return ii()==="http:"||ii()==="https:"}function ii(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Af(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sf()||tu()||"connection"in navigator)?navigator.onLine:!0}function Of(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class nn{constructor(e,n){this.shortDelay=e,this.longDelay=n,$e(n>e,"Short delay should be less than long delay!"),this.isMobile=eu()||nu()}get(){return Af()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cs(t,e){$e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xo{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const kf=new nn(3e4,6e4);function Pf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zn(t,e,n,r,s={}){return Lo(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=tn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),xo.fetch()(Uo(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Lo(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rf),e);try{const s=new Df(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,f]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hn(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Mo(t,h,f);Ne(t,h)}}catch(s){if(s instanceof tt)throw s;Ne(t,"network-request-failed")}}async function Nf(t,e,n,r,s={}){const i=await zn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ne(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Uo(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?cs(t.config,s):`${t.config.apiScheme}://${s}`}class Df{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ke(this.auth,"network-request-failed")),kf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ke(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Mf(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function xf(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lf(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=ls(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vt(hr(s.auth_time)),issuedAtTime:Vt(hr(s.iat)),expirationTime:Vt(hr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hr(t){return Number(t)*1e3}function ls(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return _n("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ql(r);return i?JSON.parse(i):(_n("Failed to decode base64 JWT payload"),null)}catch(i){return _n("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Uf(t){const e=ls(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tt&&Ff(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ff({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Bf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vt(this.lastLoginAt),this.creationTime=Vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Qt(t,xf(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jf(i.providerUserInfo):[],a=$f(t.providerData,o),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?f:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fo(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,_)}async function Hf(t){const e=Ft(t);await Rn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $f(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jf(t){return t.map(e=>{var{providerId:n}=e,r=os(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Wf(t,e){const n=await Lo(t,{},async()=>{const r=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Uo(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xo.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Wf(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zt;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zt,this.toJSON())}_performRefresh(){return Fe("not implemented")}}/**
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
 */function ze(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=os(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lf(this,e)}reload(){return Hf(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qt(this,Mf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,f,h;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(f=n.createdAt)!==null&&f!==void 0?f:void 0,ie=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:K,emailVerified:q,isAnonymous:Q,providerData:we,stsTokenManager:Ee}=n;O(K&&Ee,e,"internal-error");const x=Zt.fromJSON(this.name,Ee);O(typeof K=="string",e,"internal-error"),ze(_,e.name),ze(v,e.name),O(typeof q=="boolean",e,"internal-error"),O(typeof Q=="boolean",e,"internal-error"),ze(T,e.name),ze(N,e.name),ze(M,e.name),ze(R,e.name),ze(D,e.name),ze(ie,e.name);const $=new dt({uid:K,auth:e,email:v,emailVerified:q,displayName:_,isAnonymous:Q,photoURL:N,phoneNumber:T,tenantId:M,stsTokenManager:x,createdAt:D,lastLoginAt:ie});return we&&Array.isArray(we)&&($.providerData=we.map(J=>Object.assign({},J))),R&&($._redirectEventId=R),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zt;s.updateFromServerResponse(n);const i=new dt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Rn(i),i}}/**
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
 */class Bo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bo.type="NONE";const oi=Bo;/**
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
 */function bn(t,e,n){return`firebase:${t}:${e}:${n}`}class Ot{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bn(this.userKey,s.apiKey,i),this.fullPersistenceKey=bn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ot(Be(oi),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||Be(oi);const o=bn(r,e.config.apiKey,e.name);let a=null;for(const f of n)try{const h=await f._get(o);if(h){const _=dt._fromJSON(e,h);f!==i&&(a=_),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ot(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new Ot(i,e,r))}}/**
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
 */function ai(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ho(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vo(e))return"Blackberry";if(zo(e))return"Webos";if(us(e))return"Safari";if((e.includes("chrome/")||$o(e))&&!e.includes("edge/"))return"Chrome";if(Wo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ho(t=se()){return/firefox\//i.test(t)}function us(t=se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $o(t=se()){return/crios\//i.test(t)}function jo(t=se()){return/iemobile/i.test(t)}function Wo(t=se()){return/android/i.test(t)}function Vo(t=se()){return/blackberry/i.test(t)}function zo(t=se()){return/webos/i.test(t)}function Kn(t=se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vf(t=se()){var e;return Kn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zf(){return ru()&&document.documentMode===10}function Ko(t=se()){return Kn(t)||Wo(t)||zo(t)||Vo(t)||/windows phone/i.test(t)||jo(t)}function Kf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qo(t,e=[]){let n;switch(t){case"Browser":n=ai(se());break;case"Worker":n=`${ai(se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vn}/${r}`}/**
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
 */class qf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Jf{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ci(this),this.idTokenSubscription=new ci(this),this.beforeStateQueue=new qf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Do,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Be(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ot.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Rn(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Of()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ft(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Be(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new en("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Be(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Ot.create(this,[Be(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function fs(t){return Ft(t)}class ci{constructor(e){this.auth=e,this.observer=null,this.addObserver=uu(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Jo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fe("not implemented")}_getIdTokenResponse(e){return Fe("not implemented")}_linkToIdToken(e,n){return Fe("not implemented")}_getReauthenticationResolver(e){return Fe("not implemented")}}/**
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
 */async function Rt(t,e){return Nf(t,"POST","/v1/accounts:signInWithIdp",Pf(t,e))}/**
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
 */const Gf="http://localhost";class mt extends Jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ne("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=os(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new mt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rt(e,n)}buildRequest(){const e={requestUri:Gf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tn(n)}return e}}/**
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
 */class ds{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rn extends ds{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qe extends rn{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.FACEBOOK_SIGN_IN_METHOD="facebook.com";qe.PROVIDER_ID="facebook.com";/**
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
 */class Ue extends rn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ue.credential(n,r)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com";Ue.PROVIDER_ID="google.com";/**
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
 */class Je extends rn{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com";Je.PROVIDER_ID="github.com";/**
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
 */class Ge extends rn{constructor(){super("twitter.com")}static credential(e,n){return mt._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ge.credential(n,r)}catch{return null}}}Ge.TWITTER_SIGN_IN_METHOD="twitter.com";Ge.PROVIDER_ID="twitter.com";/**
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
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await dt._fromIdTokenResponse(e,r,s),o=li(r);return new Mt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=li(r);return new Mt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function li(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class kn extends tt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,kn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new kn(e,n,r,s)}}function Go(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?kn._fromErrorAndOperation(t,i,e,r):i})}async function Yf(t,e,n=!1){const r=await Qt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",r)}/**
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
 */async function Xf(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Qt(t,Go(s,i,e,t),n);O(o.idToken,s,"internal-error");const a=ls(o.idToken);O(a,s,"internal-error");const{sub:c}=a;return O(t.uid===c,s,"user-mismatch"),Mt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ne(s,"user-mismatch"),o}}/**
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
 */async function Qf(t,e,n=!1){const r="signIn",s=await Go(t,r,e),i=await Mt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Zf(t,e,n,r){return Ft(t).onAuthStateChanged(e,n,r)}function ed(t){return Ft(t).signOut()}const Pn="__sak";/**
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
 */class Yo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pn,"1"),this.storage.removeItem(Pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function td(){const t=se();return us(t)||Kn(t)}const nd=1e3,rd=10;class Xo extends Yo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=td()&&Kf(),this.fallbackToPolling=Ko(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zf()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rd):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xo.type="LOCAL";const sd=Xo;/**
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
 */class Qo extends Yo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qo.type="SESSION";const Zo=Qo;/**
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
 */function id(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async f=>f(n.origin,i)),c=await id(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qn.receivers=[];/**
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
 */function hs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class od{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const f=hs("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(_){const v=_;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(v.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pe(){return window}function ad(t){Pe().location.href=t}/**
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
 */function ea(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function cd(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ld(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ud(){return ea()?self:null}/**
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
 */const ta="firebaseLocalStorageDb",fd=1,Nn="firebaseLocalStorage",na="fbase_key";class sn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jn(t,e){return t.transaction([Nn],e?"readwrite":"readonly").objectStore(Nn)}function dd(){const t=indexedDB.deleteDatabase(ta);return new sn(t).toPromise()}function Lr(){const t=indexedDB.open(ta,fd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nn,{keyPath:na})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nn)?e(r):(r.close(),await dd(),e(await Lr()))})})}async function ui(t,e,n){const r=Jn(t,!0).put({[na]:e,value:n});return new sn(r).toPromise()}async function hd(t,e){const n=Jn(t,!1).get(e),r=await new sn(n).toPromise();return r===void 0?null:r.value}function fi(t,e){const n=Jn(t,!0).delete(e);return new sn(n).toPromise()}const pd=800,gd=3;class ra{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gd)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ea()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qn._getInstance(ud()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cd(),!this.activeServiceWorker)return;this.sender=new od(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ld()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lr();return await ui(e,Pn,"1"),await fi(e,Pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ui(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hd(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fi(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jn(s,!1).getAll();return new sn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ra.type="LOCAL";const md=ra;/**
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
 */function _d(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_d().appendChild(r)})}function vd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new nn(3e4,6e4);/**
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
 */function sa(t,e){return e?Be(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ps extends Jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yd(t){return Qf(t.auth,new ps(t),t.bypassAuthState)}function Id(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Xf(n,new ps(t),t.bypassAuthState)}async function wd(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Yf(n,new ps(t),t.bypassAuthState)}/**
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
 */class ia{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yd;case"linkViaPopup":case"linkViaRedirect":return wd;case"reauthViaPopup":case"reauthViaRedirect":return Id;default:Ne(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ed=new nn(2e3,1e4);async function Td(t,e,n){const r=fs(t);Ef(t,e,ds);const s=sa(r,n);return new lt(r,"signInViaPopup",e,s).executeNotNull()}class lt extends ia{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ed.get())};e()}}lt.currentPopupAction=null;/**
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
 */const Cd="pendingRedirect",vn=new Map;class Sd extends ia{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const r=await Ad(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ad(t,e){const n=kd(e),r=Rd(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Od(t,e){vn.set(t._key(),e)}function Rd(t){return Be(t._redirectPersistence)}function kd(t){return bn(Cd,t.config.apiKey,t.name)}async function Pd(t,e,n=!1){const r=fs(t),s=sa(r,e),o=await new Sd(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Nd=10*60*1e3;class Dd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Md(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oa(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nd&&this.cachedEventUids.clear(),this.cachedEventUids.has(di(e))}saveEventToCache(e){this.cachedEventUids.add(di(e)),this.lastProcessedEventTime=Date.now()}}function di(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oa({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Md(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oa(t);default:return!1}}/**
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
 */async function xd(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
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
 */const Ld=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ud=/^https?/;async function Fd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xd(t);for(const n of e)try{if(Bd(n))return}catch{}Ne(t,"unauthorized-domain")}function Bd(t){const e=xr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ud.test(n))return!1;if(Ld.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Hd=new nn(3e4,6e4);function hi(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $d(t){return new Promise((e,n)=>{var r,s,i;function o(){hi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hi(),n(ke(t,"network-request-failed"))},timeout:Hd.get()})}if(!((s=(r=Pe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Pe().gapi)===null||i===void 0)&&i.load)o();else{const a=vd("iframefcb");return Pe()[a]=()=>{gapi.load?o():n(ke(t,"network-request-failed"))},bd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yn=null,e})}let yn=null;function jd(t){return yn=yn||$d(t),yn}/**
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
 */const Wd=new nn(5e3,15e3),Vd="__/auth/iframe",zd="emulator/auth/iframe",Kd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jd(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cs(e,zd):`https://${t.config.authDomain}/${Vd}`,r={apiKey:e.apiKey,appName:t.name,v:Vn},s=qd.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tn(r).slice(1)}`}async function Gd(t){const e=await jd(t),n=Pe().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Jd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kd,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ke(t,"network-request-failed"),a=Pe().setTimeout(()=>{i(o)},Wd.get());function c(){Pe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Yd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xd=500,Qd=600,Zd="_blank",eh="http://localhost";class pi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function th(t,e,n,r=Xd,s=Qd){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yd),{width:r.toString(),height:s.toString(),top:i,left:o}),f=se().toLowerCase();n&&(a=$o(f)?Zd:n),Ho(f)&&(e=e||eh,c.scrollbars="yes");const h=Object.entries(c).reduce((v,[T,N])=>`${v}${T}=${N},`,"");if(Vf(f)&&a!=="_self")return nh(e||"",a),new pi(null);const _=window.open(e||"",a,h);O(_,t,"popup-blocked");try{_.focus()}catch{}return new pi(_)}function nh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rh="__/auth/handler",sh="emulator/auth/handler";function gi(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vn,eventId:s};if(e instanceof ds){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(i||{}))o[c]=f}if(e instanceof rn){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ih(t)}?${tn(a).slice(1)}`}function ih({config:t}){return t.emulator?cs(t,sh):`https://${t.authDomain}/${rh}`}/**
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
 */const pr="webStorageSupport";class oh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zo,this._completeRedirectFn=Pd,this._overrideRedirectResult=Od}async _openPopup(e,n,r,s){var i;$e((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=gi(e,n,r,xr(),s);return th(e,o,hs())}async _openRedirect(e,n,r,s){return await this._originValidation(e),ad(gi(e,n,r,xr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($e(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Gd(e),r=new Dd(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pr,{type:pr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[pr];o!==void 0&&n(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ko()||us()||Kn()}}const ah=oh;var mi="@firebase/auth",_i="0.20.6";/**
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
 */class ch{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uh(t){Yt(new Dt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{O(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const f={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qo(t)},h=new Jf(a,c,f);return Cf(h,n),h})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yt(new Dt("auth-internal",e=>{const n=fs(e.getProvider("auth").getImmediate());return(r=>new ch(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(mi,_i,lh(t)),At(mi,_i,"esm2017")}/**
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
 */function gr(t=uf()){const e=Ao(t,"auth");return e.isInitialized()?e.getImmediate():Tf(t,{popupRedirectResolver:ah,persistence:[md,sd,Zo]})}uh("Browser");Oo(Po());function fh(){const t=Hi(null),e=async()=>await Td(gr(),new Ue),n=()=>ed(gr());return Zf(gr(),r=>t.value=r),{user:t,signInUser:e,signOutUser:n}}const aa=t=>(Ji("data-v-78d8d619"),t=t(),Gi(),t),dh=aa(()=>X("a",{href:"https://vitejs.dev",target:"_blank"},[X("img",{src:Ll,class:"logo",alt:"Vite logo"})],-1)),hh=aa(()=>X("a",{href:"https://vuejs.org/",target:"_blank"},[X("img",{src:Ul,class:"logo vue",alt:"Vue logo"})],-1)),ph=es({__name:"App",setup(t){Oo(Po());const e=fh(),n=Gl(0);return(r,s)=>(St(),Wt(he,null,[X("div",null,[Ie($l,{user:yt(e).user.value,onSignInUser:yt(e).signInUser,onSignOutUser:yt(e).signOutUser},null,8,["user","onSignInUser","onSignOutUser"]),dh,hh]),Ie(Jl,{msg:"Vite + Vue",count:yt(n).count.value,onIncrement:yt(n).increment},null,8,["count","onIncrement"])],64))}});const gh=vo(ph,[["__scopeId","data-v-78d8d619"]]);Ml(gh).mount("#app");
