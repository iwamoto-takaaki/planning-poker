(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function xa(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const sg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rg=xa(sg);function sh(t){return!!t||t===""}function Pa(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ne(s)?ag(s):Pa(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ne(t))return t;if(de(t))return t}}const ig=/;(?![^(]*\))/g,og=/:(.+)/;function ag(t){const e={};return t.split(ig).forEach(n=>{if(n){const s=n.split(og);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ma(t){let e="";if(Ne(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=Ma(t[n]);s&&(e+=s+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qo=t=>Ne(t)?t:t==null?"":j(t)||de(t)&&(t.toString===ah||!H(t.toString))?JSON.stringify(t,rh,2):String(t),rh=(t,e)=>e&&e.__v_isRef?rh(t,e.value):Hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ih(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!j(e)&&!ch(e)?String(e):e,ie={},jn=[],ct=()=>{},cg=()=>!1,ug=/^on[^a-z]/,Ii=t=>ug.test(t),La=t=>t.startsWith("onUpdate:"),Ue=Object.assign,Ua=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lg=Object.prototype.hasOwnProperty,G=(t,e)=>lg.call(t,e),j=Array.isArray,Hn=t=>Ti(t)==="[object Map]",ih=t=>Ti(t)==="[object Set]",H=t=>typeof t=="function",Ne=t=>typeof t=="string",Fa=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",oh=t=>de(t)&&H(t.then)&&H(t.catch),ah=Object.prototype.toString,Ti=t=>ah.call(t),hg=t=>Ti(t).slice(8,-1),ch=t=>Ti(t)==="[object Object]",Va=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ur=xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fg=/-(\w)/g,Xn=bi(t=>t.replace(fg,(e,n)=>n?n.toUpperCase():"")),dg=/\B([A-Z])/g,us=bi(t=>t.replace(dg,"-$1").toLowerCase()),uh=bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),mo=bi(t=>t?`on${uh(t)}`:""),Ms=(t,e)=>!Object.is(t,e),yo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Gr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hu;const gg=()=>hu||(hu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dt;class mg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&dt&&(this.parent=dt,this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function yg(t,e=dt){e&&e.active&&e.effects.push(t)}const Ba=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lh=t=>(t.w&Xt)>0,hh=t=>(t.n&Xt)>0,vg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xt},wg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];lh(r)&&!hh(r)?r.delete(t):e[n++]=r,r.w&=~Xt,r.n&=~Xt}e.length=n}},Ko=new WeakMap;let Es=0,Xt=1;const zo=30;let ot;const mn=Symbol(""),Wo=Symbol("");class $a{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yg(this,s)}run(){if(!this.active)return this.fn();let e=ot,n=Wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ot,ot=this,Wt=!0,Xt=1<<++Es,Es<=zo?vg(this):fu(this),this.fn()}finally{Es<=zo&&wg(this),Xt=1<<--Es,ot=this.parent,Wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(fu(this),this.onStop&&this.onStop(),this.active=!1)}}function fu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Wt=!0;const fh=[];function ls(){fh.push(Wt),Wt=!1}function hs(){const t=fh.pop();Wt=t===void 0?!0:t}function Xe(t,e,n){if(Wt&&ot){let s=Ko.get(t);s||Ko.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ba()),dh(r)}}function dh(t,e){let n=!1;Es<=zo?hh(t)||(t.n|=Xt,n=!lh(t)):n=!t.has(ot),n&&(t.add(ot),ot.deps.push(t))}function Ot(t,e,n,s,r,i){const o=Ko.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?Va(n)&&a.push(o.get("length")):(a.push(o.get(mn)),Hn(t)&&a.push(o.get(Wo)));break;case"delete":j(t)||(a.push(o.get(mn)),Hn(t)&&a.push(o.get(Wo)));break;case"set":Hn(t)&&a.push(o.get(mn));break}if(a.length===1)a[0]&&Go(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Go(Ba(c))}}function Go(t,e){const n=j(t)?t:[...t];for(const s of n)s.computed&&du(s);for(const s of n)s.computed||du(s)}function du(t,e){(t!==ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const _g=xa("__proto__,__v_isRef,__isVue"),ph=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fa)),Eg=ja(),Ig=ja(!1,!0),Tg=ja(!0),pu=bg();function bg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let i=0,o=this.length;i<o;i++)Xe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(X)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ls();const s=X(this)[e].apply(this,n);return hs(),s}}),t}function ja(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Bg:wh:e?vh:yh).get(s))return s;const o=j(s);if(!t&&o&&G(pu,r))return Reflect.get(pu,r,i);const a=Reflect.get(s,r,i);return(Fa(r)?ph.has(r):_g(r))||(t||Xe(s,"get",r),e)?a:Me(a)?o&&Va(r)?a:a.value:de(a)?t?_h(a):Ka(a):a}}const Cg=gh(),Sg=gh(!0);function gh(t=!1){return function(n,s,r,i){let o=n[s];if(Jn(o)&&Me(o)&&!Me(r))return!1;if(!t&&(!Qr(r)&&!Jn(r)&&(o=X(o),r=X(r)),!j(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=j(n)&&Va(s)?Number(s)<n.length:G(n,s),c=Reflect.set(n,s,r,i);return n===X(i)&&(a?Ms(r,o)&&Ot(n,"set",s,r):Ot(n,"add",s,r)),c}}function Ag(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ot(t,"delete",e,void 0),s}function kg(t,e){const n=Reflect.has(t,e);return(!Fa(e)||!ph.has(e))&&Xe(t,"has",e),n}function Dg(t){return Xe(t,"iterate",j(t)?"length":mn),Reflect.ownKeys(t)}const mh={get:Eg,set:Cg,deleteProperty:Ag,has:kg,ownKeys:Dg},Ng={get:Tg,set(t,e){return!0},deleteProperty(t,e){return!0}},Rg=Ue({},mh,{get:Ig,set:Sg}),Ha=t=>t,Ci=t=>Reflect.getPrototypeOf(t);function Cr(t,e,n=!1,s=!1){t=t.__v_raw;const r=X(t),i=X(e);n||(e!==i&&Xe(r,"get",e),Xe(r,"get",i));const{has:o}=Ci(r),a=s?Ha:n?Wa:Ls;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Sr(t,e=!1){const n=this.__v_raw,s=X(n),r=X(t);return e||(t!==r&&Xe(s,"has",t),Xe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ar(t,e=!1){return t=t.__v_raw,!e&&Xe(X(t),"iterate",mn),Reflect.get(t,"size",t)}function gu(t){t=X(t);const e=X(this);return Ci(e).has.call(e,t)||(e.add(t),Ot(e,"add",t,t)),this}function mu(t,e){e=X(e);const n=X(this),{has:s,get:r}=Ci(n);let i=s.call(n,t);i||(t=X(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ms(e,o)&&Ot(n,"set",t,e):Ot(n,"add",t,e),this}function yu(t){const e=X(this),{has:n,get:s}=Ci(e);let r=n.call(e,t);r||(t=X(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Ot(e,"delete",t,void 0),i}function vu(){const t=X(this),e=t.size!==0,n=t.clear();return e&&Ot(t,"clear",void 0,void 0),n}function kr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=X(o),c=e?Ha:t?Wa:Ls;return!t&&Xe(a,"iterate",mn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Dr(t,e,n){return function(...s){const r=this.__v_raw,i=X(r),o=Hn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Ha:e?Wa:Ls;return!e&&Xe(i,"iterate",c?Wo:mn),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[l(f[0]),l(f[1])]:l(f),done:p}},[Symbol.iterator](){return this}}}}function $t(t){return function(...e){return t==="delete"?!1:this}}function Og(){const t={get(i){return Cr(this,i)},get size(){return Ar(this)},has:Sr,add:gu,set:mu,delete:yu,clear:vu,forEach:kr(!1,!1)},e={get(i){return Cr(this,i,!1,!0)},get size(){return Ar(this)},has:Sr,add:gu,set:mu,delete:yu,clear:vu,forEach:kr(!1,!0)},n={get(i){return Cr(this,i,!0)},get size(){return Ar(this,!0)},has(i){return Sr.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:kr(!0,!1)},s={get(i){return Cr(this,i,!0,!0)},get size(){return Ar(this,!0)},has(i){return Sr.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:kr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Dr(i,!1,!1),n[i]=Dr(i,!0,!1),e[i]=Dr(i,!1,!0),s[i]=Dr(i,!0,!0)}),[t,n,e,s]}const[xg,Pg,Mg,Lg]=Og();function qa(t,e){const n=e?t?Lg:Mg:t?Pg:xg;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(G(n,r)&&r in s?n:s,r,i)}const Ug={get:qa(!1,!1)},Fg={get:qa(!1,!0)},Vg={get:qa(!0,!1)},yh=new WeakMap,vh=new WeakMap,wh=new WeakMap,Bg=new WeakMap;function $g(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jg(t){return t.__v_skip||!Object.isExtensible(t)?0:$g(hg(t))}function Ka(t){return Jn(t)?t:za(t,!1,mh,Ug,yh)}function Hg(t){return za(t,!1,Rg,Fg,vh)}function _h(t){return za(t,!0,Ng,Vg,wh)}function za(t,e,n,s,r){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=jg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function qn(t){return Jn(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jn(t){return!!(t&&t.__v_isReadonly)}function Qr(t){return!!(t&&t.__v_isShallow)}function Eh(t){return qn(t)||Jn(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Ih(t){return Gr(t,"__v_skip",!0),t}const Ls=t=>de(t)?Ka(t):t,Wa=t=>de(t)?_h(t):t;function Th(t){Wt&&ot&&(t=X(t),dh(t.dep||(t.dep=Ba())))}function bh(t,e){t=X(t),t.dep&&Go(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Ch(t){return qg(t,!1)}function qg(t,e){return Me(t)?t:new Kg(t,e)}class Kg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Ls(e)}get value(){return Th(this),this._value}set value(e){const n=this.__v_isShallow||Qr(e)||Jn(e);e=n?e:X(e),Ms(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ls(e),bh(this))}}function Fn(t){return Me(t)?t.value:t}const zg={get:(t,e,n)=>Fn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Sh(t){return qn(t)?t:new Proxy(t,zg)}var Ah;class Wg{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ah]=!1,this._dirty=!0,this.effect=new $a(e,()=>{this._dirty||(this._dirty=!0,bh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=X(this);return Th(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ah="__v_isReadonly";function Gg(t,e,n=!1){let s,r;const i=H(t);return i?(s=t,r=ct):(s=t.get,r=t.set),new Wg(s,r,i||!r,n)}function Gt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Si(i,e,n)}return r}function nt(t,e,n,s){if(H(t)){const i=Gt(t,e,n,s);return i&&oh(i)&&i.catch(o=>{Si(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(nt(t[i],e,n,s));return r}function Si(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Gt(c,null,10,[t,o,a]);return}}Qg(t,n,r,s)}function Qg(t,e,n,s=!0){console.error(t)}let Yr=!1,Qo=!1;const xe=[];let gt=0;const Kn=[];let Ct=null,un=0;const kh=Promise.resolve();let Ga=null;function Yg(t){const e=Ga||kh;return t?e.then(this?t.bind(this):t):e}function Xg(t){let e=gt+1,n=xe.length;for(;e<n;){const s=e+n>>>1;Us(xe[s])<t?e=s+1:n=s}return e}function Qa(t){(!xe.length||!xe.includes(t,Yr&&t.allowRecurse?gt+1:gt))&&(t.id==null?xe.push(t):xe.splice(Xg(t.id),0,t),Dh())}function Dh(){!Yr&&!Qo&&(Qo=!0,Ga=kh.then(Rh))}function Jg(t){const e=xe.indexOf(t);e>gt&&xe.splice(e,1)}function Zg(t){j(t)?Kn.push(...t):(!Ct||!Ct.includes(t,t.allowRecurse?un+1:un))&&Kn.push(t),Dh()}function wu(t,e=gt){for(;e<xe.length;e++){const n=xe[e];n&&n.pre&&(xe.splice(e,1),e--,n())}}function Nh(t){if(Kn.length){const e=[...new Set(Kn)];if(Kn.length=0,Ct){Ct.push(...e);return}for(Ct=e,Ct.sort((n,s)=>Us(n)-Us(s)),un=0;un<Ct.length;un++)Ct[un]();Ct=null,un=0}}const Us=t=>t.id==null?1/0:t.id,em=(t,e)=>{const n=Us(t)-Us(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Rh(t){Qo=!1,Yr=!0,xe.sort(em);const e=ct;try{for(gt=0;gt<xe.length;gt++){const n=xe[gt];n&&n.active!==!1&&Gt(n,null,14)}}finally{gt=0,xe.length=0,Nh(),Yr=!1,Ga=null,(xe.length||Kn.length)&&Rh()}}function tm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[l]||ie;p&&(r=n.map(g=>g.trim())),f&&(r=n.map(pg))}let a,c=s[a=mo(e)]||s[a=mo(Xn(e))];!c&&i&&(c=s[a=mo(us(e))]),c&&nt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nt(u,t,6,r)}}function Oh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const l=Oh(u,e,!0);l&&(a=!0,Ue(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(de(t)&&s.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):Ue(o,i),de(t)&&s.set(t,o),o)}function Ai(t,e){return!t||!Ii(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,us(e))||G(t,e))}let mt=null,ki=null;function Xr(t){const e=mt;return mt=t,ki=t&&t.type.__scopeId||null,e}function xh(t){ki=t}function Ph(){ki=null}function nm(t,e=mt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Du(-1);const i=Xr(e),o=t(...r);return Xr(i),s._d&&Du(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function vo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:f,data:p,setupState:g,ctx:E,inheritAttrs:k}=t;let S,P;const Z=Xr(t);try{if(n.shapeFlag&4){const te=r||s;S=pt(l.call(te,te,f,i,g,p,E)),P=c}else{const te=e;S=pt(te.length>1?te(i,{attrs:c,slots:a,emit:u}):te(i,null)),P=e.props?c:sm(c)}}catch(te){Cs.length=0,Si(te,t,1),S=lt(ut)}let ee=S;if(P&&k!==!1){const te=Object.keys(P),{shapeFlag:pe}=ee;te.length&&pe&7&&(o&&te.some(La)&&(P=rm(P,o)),ee=Jt(ee,P))}return n.dirs&&(ee=Jt(ee),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&(ee.transition=n.transition),S=ee,Xr(Z),S}const sm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ii(n))&&((e||(e={}))[n]=t[n]);return e},rm=(t,e)=>{const n={};for(const s in t)(!La(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function im(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?_u(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let f=0;f<l.length;f++){const p=l[f];if(o[p]!==s[p]&&!Ai(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?_u(s,o,u):!0:!!o;return!1}function _u(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ai(n,i))return!0}return!1}function om({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const am=t=>t.__isSuspense;function cm(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Zg(t)}function um(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function wo(t,e,n=!1){const s=Ae||mt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const Eu={};function _o(t,e,n){return Mh(t,e,n)}function Mh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ie){const a=Ae;let c,u=!1,l=!1;if(Me(t)?(c=()=>t.value,u=Qr(t)):qn(t)?(c=()=>t,s=!0):j(t)?(l=!0,u=t.some(P=>qn(P)||Qr(P)),c=()=>t.map(P=>{if(Me(P))return P.value;if(qn(P))return Vn(P);if(H(P))return Gt(P,a,2)})):H(t)?e?c=()=>Gt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),nt(t,a,3,[p])}:c=ct,e&&s){const P=c;c=()=>Vn(P())}let f,p=P=>{f=S.onStop=()=>{Gt(P,a,4)}};if(Vs)return p=ct,e?n&&nt(e,a,3,[c(),l?[]:void 0,p]):c(),ct;let g=l?[]:Eu;const E=()=>{if(!!S.active)if(e){const P=S.run();(s||u||(l?P.some((Z,ee)=>Ms(Z,g[ee])):Ms(P,g)))&&(f&&f(),nt(e,a,3,[P,g===Eu?void 0:g,p]),g=P)}else S.run()};E.allowRecurse=!!e;let k;r==="sync"?k=E:r==="post"?k=()=>qe(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),k=()=>Qa(E));const S=new $a(c,k);return e?n?E():g=S.run():r==="post"?qe(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Ua(a.scope.effects,S)}}function lm(t,e,n){const s=this.proxy,r=Ne(t)?t.includes(".")?Lh(s,t):()=>s[t]:t.bind(s,s);let i;H(e)?i=e:(i=e.handler,n=e);const o=Ae;Zn(this);const a=Mh(r,i.bind(s),n);return o?Zn(o):yn(),a}function Lh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Vn(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))Vn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Vn(t[n],e);else if(ih(t)||Hn(t))t.forEach(n=>{Vn(n,e)});else if(ch(t))for(const n in t)Vn(t[n],e);return t}function hm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bh(()=>{t.isMounted=!0}),$h(()=>{t.isUnmounting=!0}),t}const et=[Function,Array],fm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},setup(t,{slots:e}){const n=Xm(),s=hm();let r;return()=>{const i=e.default&&Fh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const k of i)if(k.type!==ut){o=k;break}}const a=X(t),{mode:c}=a;if(s.isLeaving)return Eo(o);const u=Iu(o);if(!u)return Eo(o);const l=Yo(u,a,s,n);Xo(u,l);const f=n.subTree,p=f&&Iu(f);let g=!1;const{getTransitionKey:E}=u.type;if(E){const k=E();r===void 0?r=k:k!==r&&(r=k,g=!0)}if(p&&p.type!==ut&&(!ln(u,p)||g)){const k=Yo(p,a,s,n);if(Xo(p,k),c==="out-in")return s.isLeaving=!0,k.afterLeave=()=>{s.isLeaving=!1,n.update()},Eo(o);c==="in-out"&&u.type!==ut&&(k.delayLeave=(S,P,Z)=>{const ee=Uh(s,p);ee[String(p.key)]=p,S._leaveCb=()=>{P(),S._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=Z})}return o}}},dm=fm;function Uh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Yo(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:k,onAppear:S,onAfterAppear:P,onAppearCancelled:Z}=e,ee=String(t.key),te=Uh(n,t),pe=(z,re)=>{z&&nt(z,s,9,re)},Ze=(z,re)=>{const le=re[1];pe(z,re),j(z)?z.every(je=>je.length<=1)&&le():z.length<=1&&le()},Ge={mode:i,persisted:o,beforeEnter(z){let re=a;if(!n.isMounted)if(r)re=k||a;else return;z._leaveCb&&z._leaveCb(!0);const le=te[ee];le&&ln(t,le)&&le.el._leaveCb&&le.el._leaveCb(),pe(re,[z])},enter(z){let re=c,le=u,je=l;if(!n.isMounted)if(r)re=S||c,le=P||u,je=Z||l;else return;let rt=!1;const It=z._enterCb=Tr=>{rt||(rt=!0,Tr?pe(je,[z]):pe(le,[z]),Ge.delayedLeave&&Ge.delayedLeave(),z._enterCb=void 0)};re?Ze(re,[z,It]):It()},leave(z,re){const le=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return re();pe(f,[z]);let je=!1;const rt=z._leaveCb=It=>{je||(je=!0,re(),It?pe(E,[z]):pe(g,[z]),z._leaveCb=void 0,te[le]===t&&delete te[le])};te[le]=t,p?Ze(p,[z,rt]):rt()},clone(z){return Yo(z,e,n,s)}};return Ge}function Eo(t){if(Di(t))return t=Jt(t),t.children=null,t}function Iu(t){return Di(t)?t.children?t.children[0]:void 0:t}function Xo(t,e){t.shapeFlag&6&&t.component?Xo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===tt?(o.patchFlag&128&&r++,s=s.concat(Fh(o.children,e,a))):(e||o.type!==ut)&&s.push(a!=null?Jt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Ya(t){return H(t)?{setup:t,name:t.name}:t}const Fr=t=>!!t.type.__asyncLoader,Di=t=>t.type.__isKeepAlive;function pm(t,e){Vh(t,"a",e)}function gm(t,e){Vh(t,"da",e)}function Vh(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ni(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Di(r.parent.vnode)&&mm(s,e,n,r),r=r.parent}}function mm(t,e,n,s){const r=Ni(e,t,s,!0);jh(()=>{Ua(s[e],r)},n)}function Ni(t,e,n=Ae,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ls(),Zn(n);const a=nt(e,n,t,o);return yn(),hs(),a});return s?r.unshift(i):r.push(i),i}}const Ft=t=>(e,n=Ae)=>(!Vs||t==="sp")&&Ni(t,e,n),ym=Ft("bm"),Bh=Ft("m"),vm=Ft("bu"),wm=Ft("u"),$h=Ft("bum"),jh=Ft("um"),_m=Ft("sp"),Em=Ft("rtg"),Im=Ft("rtc");function Tm(t,e=Ae){Ni("ec",t,e)}function rn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ls(),nt(c,n,8,[t.el,a,t,e]),hs())}}const bm=Symbol(),Jo=t=>t?ef(t)?ec(t)||t.proxy:Jo(t.parent):null,Jr=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jo(t.parent),$root:t=>Jo(t.root),$emit:t=>t.emit,$options:t=>qh(t),$forceUpdate:t=>t.f||(t.f=()=>Qa(t.update)),$nextTick:t=>t.n||(t.n=Yg.bind(t.proxy)),$watch:t=>lm.bind(t)}),Cm={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ie&&G(s,e))return o[e]=1,s[e];if(r!==ie&&G(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&G(u,e))return o[e]=3,i[e];if(n!==ie&&G(n,e))return o[e]=4,n[e];Zo&&(o[e]=0)}}const l=Jr[e];let f,p;if(l)return e==="$attrs"&&Xe(t,"get",e),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&G(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ie&&G(r,e)?(r[e]=n,!0):s!==ie&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&G(t,o)||e!==ie&&G(e,o)||(a=i[0])&&G(a,o)||G(s,o)||G(Jr,o)||G(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Zo=!0;function Sm(t){const e=qh(t),n=t.proxy,s=t.ctx;Zo=!1,e.beforeCreate&&Tu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:p,beforeUpdate:g,updated:E,activated:k,deactivated:S,beforeDestroy:P,beforeUnmount:Z,destroyed:ee,unmounted:te,render:pe,renderTracked:Ze,renderTriggered:Ge,errorCaptured:z,serverPrefetch:re,expose:le,inheritAttrs:je,components:rt,directives:It,filters:Tr}=e;if(u&&Am(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ae=o[he];H(ae)&&(s[he]=ae.bind(n))}if(r){const he=r.call(n,n);de(he)&&(t.data=Ka(he))}if(Zo=!0,i)for(const he in i){const ae=i[he],Tt=H(ae)?ae.bind(n,n):H(ae.get)?ae.get.bind(n,n):ct,fo=!H(ae)&&H(ae.set)?ae.set.bind(n):ct,vs=sy({get:Tt,set:fo});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>vs.value,set:Pn=>vs.value=Pn})}if(a)for(const he in a)Hh(a[he],s,n,he);if(c){const he=H(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ae=>{um(ae,he[ae])})}l&&Tu(l,t,"c");function He(he,ae){j(ae)?ae.forEach(Tt=>he(Tt.bind(n))):ae&&he(ae.bind(n))}if(He(ym,f),He(Bh,p),He(vm,g),He(wm,E),He(pm,k),He(gm,S),He(Tm,z),He(Im,Ze),He(Em,Ge),He($h,Z),He(jh,te),He(_m,re),j(le))if(le.length){const he=t.exposed||(t.exposed={});le.forEach(ae=>{Object.defineProperty(he,ae,{get:()=>n[ae],set:Tt=>n[ae]=Tt})})}else t.exposed||(t.exposed={});pe&&t.render===ct&&(t.render=pe),je!=null&&(t.inheritAttrs=je),rt&&(t.components=rt),It&&(t.directives=It)}function Am(t,e,n=ct,s=!1){j(t)&&(t=ea(t));for(const r in t){const i=t[r];let o;de(i)?"default"in i?o=wo(i.from||r,i.default,!0):o=wo(i.from||r):o=wo(i),Me(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Tu(t,e,n){nt(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hh(t,e,n,s){const r=s.includes(".")?Lh(n,s):()=>n[s];if(Ne(t)){const i=e[t];H(i)&&_o(r,i)}else if(H(t))_o(r,t.bind(n));else if(de(t))if(j(t))t.forEach(i=>Hh(i,e,n,s));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&_o(r,i,t)}}function qh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Zr(c,u,o,!0)),Zr(c,e,o)),de(e)&&i.set(e,c),c}function Zr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Zr(t,i,n,!0),r&&r.forEach(o=>Zr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=km[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const km={data:bu,props:an,emits:an,methods:an,computed:an,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:an,directives:an,watch:Nm,provide:bu,inject:Dm};function bu(t,e){return e?t?function(){return Ue(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Dm(t,e){return an(ea(t),ea(e))}function ea(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?Ue(Ue(Object.create(null),t),e):e}function Nm(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const s in e)n[s]=Fe(t[s],e[s]);return n}function Rm(t,e,n,s=!1){const r={},i={};Gr(i,Ri,1),t.propsDefaults=Object.create(null),Kh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Hg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Om(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=X(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let f=0;f<l.length;f++){let p=l[f];if(Ai(t.emitsOptions,p))continue;const g=e[p];if(c)if(G(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const E=Xn(p);r[E]=ta(c,a,E,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Kh(t,e,r,i)&&(u=!0);let l;for(const f in a)(!e||!G(e,f)&&((l=us(f))===f||!G(e,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(r[f]=ta(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!G(e,f)&&!0)&&(delete i[f],u=!0)}u&&Ot(t,"set","$attrs")}function Kh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ur(c))continue;const u=e[c];let l;r&&G(r,l=Xn(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Ai(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=X(n),u=a||ie;for(let l=0;l<i.length;l++){const f=i[l];n[f]=ta(r,c,f,u[f],t,!G(u,f))}}return o}function ta(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Zn(r),s=u[n]=c.call(null,e),yn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===us(n))&&(s=!0))}return s}function zh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const l=f=>{c=!0;const[p,g]=zh(f,e,!0);Ue(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return de(t)&&s.set(t,jn),jn;if(j(i))for(let l=0;l<i.length;l++){const f=Xn(i[l]);Cu(f)&&(o[f]=ie)}else if(i)for(const l in i){const f=Xn(l);if(Cu(f)){const p=i[l],g=o[f]=j(p)||H(p)?{type:p}:p;if(g){const E=ku(Boolean,g.type),k=ku(String,g.type);g[0]=E>-1,g[1]=k<0||E<k,(E>-1||G(g,"default"))&&a.push(f)}}}const u=[o,a];return de(t)&&s.set(t,u),u}function Cu(t){return t[0]!=="$"}function Su(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Au(t,e){return Su(t)===Su(e)}function ku(t,e){return j(e)?e.findIndex(n=>Au(n,t)):H(e)&&Au(e,t)?0:-1}const Wh=t=>t[0]==="_"||t==="$stable",Xa=t=>j(t)?t.map(pt):[pt(t)],xm=(t,e,n)=>{if(e._n)return e;const s=nm((...r)=>Xa(e(...r)),n);return s._c=!1,s},Gh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Wh(r))continue;const i=t[r];if(H(i))e[r]=xm(r,i,s);else if(i!=null){const o=Xa(i);e[r]=()=>o}}},Qh=(t,e)=>{const n=Xa(e);t.slots.default=()=>n},Pm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Gr(e,"_",n)):Gh(e,t.slots={})}else t.slots={},e&&Qh(t,e);Gr(t.slots,Ri,1)},Mm=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ue(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Gh(e,r)),o=e}else e&&(Qh(t,e),o={default:1});if(i)for(const a in r)!Wh(a)&&!(a in o)&&delete r[a]};function Yh(){return{app:null,config:{isNativeTag:cg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lm=0;function Um(t,e){return function(s,r=null){H(s)||(s=Object.assign({},s)),r!=null&&!de(r)&&(r=null);const i=Yh(),o=new Set;let a=!1;const c=i.app={_uid:Lm++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ry,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...l)):H(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,f){if(!a){const p=lt(s,r);return p.appContext=i,l&&e?e(p,u):t(p,u,f),a=!0,c._container=u,u.__vue_app__=c,ec(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function na(t,e,n,s,r=!1){if(j(t)){t.forEach((p,g)=>na(p,e&&(j(e)?e[g]:e),n,s,r));return}if(Fr(s)&&!r)return;const i=s.shapeFlag&4?ec(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(Ne(u)?(l[u]=null,G(f,u)&&(f[u]=null)):Me(u)&&(u.value=null)),H(c))Gt(c,a,12,[o,l]);else{const p=Ne(c),g=Me(c);if(p||g){const E=()=>{if(t.f){const k=p?l[c]:c.value;r?j(k)&&Ua(k,i):j(k)?k.includes(i)||k.push(i):p?(l[c]=[i],G(f,c)&&(f[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else p?(l[c]=o,G(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(E.id=-1,qe(E,n)):E()}}}const qe=cm;function Fm(t){return Vm(t)}function Vm(t,e){const n=gg();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:p,setScopeId:g=ct,cloneNode:E,insertStaticContent:k}=t,S=(h,d,m,v=null,y=null,b=null,A=!1,T=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!ln(h,d)&&(v=br(h),Bt(h,y,b,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:w,ref:O,shapeFlag:N}=d;switch(w){case Ja:P(h,d,m,v);break;case ut:Z(h,d,m,v);break;case Io:h==null&&ee(d,m,v,A);break;case tt:It(h,d,m,v,y,b,A,T,C);break;default:N&1?Ze(h,d,m,v,y,b,A,T,C):N&6?Tr(h,d,m,v,y,b,A,T,C):(N&64||N&128)&&w.process(h,d,m,v,y,b,A,T,C,Mn)}O!=null&&y&&na(O,h&&h.ref,b,d||h,!d)},P=(h,d,m,v)=>{if(h==null)s(d.el=a(d.children),m,v);else{const y=d.el=h.el;d.children!==h.children&&u(y,d.children)}},Z=(h,d,m,v)=>{h==null?s(d.el=c(d.children||""),m,v):d.el=h.el},ee=(h,d,m,v)=>{[h.el,h.anchor]=k(h.children,d,m,v,h.el,h.anchor)},te=({el:h,anchor:d},m,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,m,v),h=y;s(d,m,v)},pe=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},Ze=(h,d,m,v,y,b,A,T,C)=>{A=A||d.type==="svg",h==null?Ge(d,m,v,y,b,A,T,C):le(h,d,y,b,A,T,C)},Ge=(h,d,m,v,y,b,A,T)=>{let C,w;const{type:O,props:N,shapeFlag:x,transition:F,patchFlag:Q,dirs:ne}=h;if(h.el&&E!==void 0&&Q===-1)C=h.el=E(h.el);else{if(C=h.el=o(h.type,b,N&&N.is,N),x&8?l(C,h.children):x&16&&re(h.children,C,null,v,y,b&&O!=="foreignObject",A,T),ne&&rn(h,null,v,"created"),N){for(const ce in N)ce!=="value"&&!Ur(ce)&&i(C,ce,null,N[ce],b,h.children,v,y,bt);"value"in N&&i(C,"value",null,N.value),(w=N.onVnodeBeforeMount)&&ft(w,v,h)}z(C,h,h.scopeId,A,v)}ne&&rn(h,null,v,"beforeMount");const se=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;se&&F.beforeEnter(C),s(C,d,m),((w=N&&N.onVnodeMounted)||se||ne)&&qe(()=>{w&&ft(w,v,h),se&&F.enter(C),ne&&rn(h,null,v,"mounted")},y)},z=(h,d,m,v,y)=>{if(m&&g(h,m),v)for(let b=0;b<v.length;b++)g(h,v[b]);if(y){let b=y.subTree;if(d===b){const A=y.vnode;z(h,A,A.scopeId,A.slotScopeIds,y.parent)}}},re=(h,d,m,v,y,b,A,T,C=0)=>{for(let w=C;w<h.length;w++){const O=h[w]=T?Ht(h[w]):pt(h[w]);S(null,O,d,m,v,y,b,A,T)}},le=(h,d,m,v,y,b,A)=>{const T=d.el=h.el;let{patchFlag:C,dynamicChildren:w,dirs:O}=d;C|=h.patchFlag&16;const N=h.props||ie,x=d.props||ie;let F;m&&on(m,!1),(F=x.onVnodeBeforeUpdate)&&ft(F,m,d,h),O&&rn(d,h,m,"beforeUpdate"),m&&on(m,!0);const Q=y&&d.type!=="foreignObject";if(w?je(h.dynamicChildren,w,T,m,v,Q,b):A||Tt(h,d,T,null,m,v,Q,b,!1),C>0){if(C&16)rt(T,d,N,x,m,v,y);else if(C&2&&N.class!==x.class&&i(T,"class",null,x.class,y),C&4&&i(T,"style",N.style,x.style,y),C&8){const ne=d.dynamicProps;for(let se=0;se<ne.length;se++){const ce=ne[se],it=N[ce],Ln=x[ce];(Ln!==it||ce==="value")&&i(T,ce,it,Ln,y,h.children,m,v,bt)}}C&1&&h.children!==d.children&&l(T,d.children)}else!A&&w==null&&rt(T,d,N,x,m,v,y);((F=x.onVnodeUpdated)||O)&&qe(()=>{F&&ft(F,m,d,h),O&&rn(d,h,m,"updated")},v)},je=(h,d,m,v,y,b,A)=>{for(let T=0;T<d.length;T++){const C=h[T],w=d[T],O=C.el&&(C.type===tt||!ln(C,w)||C.shapeFlag&70)?f(C.el):m;S(C,w,O,null,v,y,b,A,!0)}},rt=(h,d,m,v,y,b,A)=>{if(m!==v){for(const T in v){if(Ur(T))continue;const C=v[T],w=m[T];C!==w&&T!=="value"&&i(h,T,w,C,A,d.children,y,b,bt)}if(m!==ie)for(const T in m)!Ur(T)&&!(T in v)&&i(h,T,m[T],null,A,d.children,y,b,bt);"value"in v&&i(h,"value",m.value,v.value)}},It=(h,d,m,v,y,b,A,T,C)=>{const w=d.el=h?h.el:a(""),O=d.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:x,slotScopeIds:F}=d;F&&(T=T?T.concat(F):F),h==null?(s(w,m,v),s(O,m,v),re(d.children,m,O,y,b,A,T,C)):N>0&&N&64&&x&&h.dynamicChildren?(je(h.dynamicChildren,x,m,y,b,A,T),(d.key!=null||y&&d===y.subTree)&&Xh(h,d,!0)):Tt(h,d,m,O,y,b,A,T,C)},Tr=(h,d,m,v,y,b,A,T,C)=>{d.slotScopeIds=T,h==null?d.shapeFlag&512?y.ctx.activate(d,m,v,A,C):ho(d,m,v,y,b,A,C):He(h,d,C)},ho=(h,d,m,v,y,b,A)=>{const T=h.component=Ym(h,v,y);if(Di(h)&&(T.ctx.renderer=Mn),Jm(T),T.asyncDep){if(y&&y.registerDep(T,he),!h.el){const C=T.subTree=lt(ut);Z(null,C,d,m)}return}he(T,h,d,m,y,b,A)},He=(h,d,m)=>{const v=d.component=h.component;if(im(h,d,m))if(v.asyncDep&&!v.asyncResolved){ae(v,d,m);return}else v.next=d,Jg(v.update),v.update();else d.el=h.el,v.vnode=d},he=(h,d,m,v,y,b,A)=>{const T=()=>{if(h.isMounted){let{next:O,bu:N,u:x,parent:F,vnode:Q}=h,ne=O,se;on(h,!1),O?(O.el=Q.el,ae(h,O,A)):O=Q,N&&yo(N),(se=O.props&&O.props.onVnodeBeforeUpdate)&&ft(se,F,O,Q),on(h,!0);const ce=vo(h),it=h.subTree;h.subTree=ce,S(it,ce,f(it.el),br(it),h,y,b),O.el=ce.el,ne===null&&om(h,ce.el),x&&qe(x,y),(se=O.props&&O.props.onVnodeUpdated)&&qe(()=>ft(se,F,O,Q),y)}else{let O;const{el:N,props:x}=d,{bm:F,m:Q,parent:ne}=h,se=Fr(d);if(on(h,!1),F&&yo(F),!se&&(O=x&&x.onVnodeBeforeMount)&&ft(O,ne,d),on(h,!0),N&&go){const ce=()=>{h.subTree=vo(h),go(N,h.subTree,h,y,null)};se?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ce()):ce()}else{const ce=h.subTree=vo(h);S(null,ce,m,v,h,y,b),d.el=ce.el}if(Q&&qe(Q,y),!se&&(O=x&&x.onVnodeMounted)){const ce=d;qe(()=>ft(O,ne,ce),y)}(d.shapeFlag&256||ne&&Fr(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&qe(h.a,y),h.isMounted=!0,d=m=v=null}},C=h.effect=new $a(T,()=>Qa(w),h.scope),w=h.update=()=>C.run();w.id=h.uid,on(h,!0),w()},ae=(h,d,m)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,Om(h,d.props,v,m),Mm(h,d.children,m),ls(),wu(),hs()},Tt=(h,d,m,v,y,b,A,T,C=!1)=>{const w=h&&h.children,O=h?h.shapeFlag:0,N=d.children,{patchFlag:x,shapeFlag:F}=d;if(x>0){if(x&128){vs(w,N,m,v,y,b,A,T,C);return}else if(x&256){fo(w,N,m,v,y,b,A,T,C);return}}F&8?(O&16&&bt(w,y,b),N!==w&&l(m,N)):O&16?F&16?vs(w,N,m,v,y,b,A,T,C):bt(w,y,b,!0):(O&8&&l(m,""),F&16&&re(N,m,v,y,b,A,T,C))},fo=(h,d,m,v,y,b,A,T,C)=>{h=h||jn,d=d||jn;const w=h.length,O=d.length,N=Math.min(w,O);let x;for(x=0;x<N;x++){const F=d[x]=C?Ht(d[x]):pt(d[x]);S(h[x],F,m,null,y,b,A,T,C)}w>O?bt(h,y,b,!0,!1,N):re(d,m,v,y,b,A,T,C,N)},vs=(h,d,m,v,y,b,A,T,C)=>{let w=0;const O=d.length;let N=h.length-1,x=O-1;for(;w<=N&&w<=x;){const F=h[w],Q=d[w]=C?Ht(d[w]):pt(d[w]);if(ln(F,Q))S(F,Q,m,null,y,b,A,T,C);else break;w++}for(;w<=N&&w<=x;){const F=h[N],Q=d[x]=C?Ht(d[x]):pt(d[x]);if(ln(F,Q))S(F,Q,m,null,y,b,A,T,C);else break;N--,x--}if(w>N){if(w<=x){const F=x+1,Q=F<O?d[F].el:v;for(;w<=x;)S(null,d[w]=C?Ht(d[w]):pt(d[w]),m,Q,y,b,A,T,C),w++}}else if(w>x)for(;w<=N;)Bt(h[w],y,b,!0),w++;else{const F=w,Q=w,ne=new Map;for(w=Q;w<=x;w++){const Qe=d[w]=C?Ht(d[w]):pt(d[w]);Qe.key!=null&&ne.set(Qe.key,w)}let se,ce=0;const it=x-Q+1;let Ln=!1,cu=0;const ws=new Array(it);for(w=0;w<it;w++)ws[w]=0;for(w=F;w<=N;w++){const Qe=h[w];if(ce>=it){Bt(Qe,y,b,!0);continue}let ht;if(Qe.key!=null)ht=ne.get(Qe.key);else for(se=Q;se<=x;se++)if(ws[se-Q]===0&&ln(Qe,d[se])){ht=se;break}ht===void 0?Bt(Qe,y,b,!0):(ws[ht-Q]=w+1,ht>=cu?cu=ht:Ln=!0,S(Qe,d[ht],m,null,y,b,A,T,C),ce++)}const uu=Ln?Bm(ws):jn;for(se=uu.length-1,w=it-1;w>=0;w--){const Qe=Q+w,ht=d[Qe],lu=Qe+1<O?d[Qe+1].el:v;ws[w]===0?S(null,ht,m,lu,y,b,A,T,C):Ln&&(se<0||w!==uu[se]?Pn(ht,m,lu,2):se--)}}},Pn=(h,d,m,v,y=null)=>{const{el:b,type:A,transition:T,children:C,shapeFlag:w}=h;if(w&6){Pn(h.component.subTree,d,m,v);return}if(w&128){h.suspense.move(d,m,v);return}if(w&64){A.move(h,d,m,Mn);return}if(A===tt){s(b,d,m);for(let N=0;N<C.length;N++)Pn(C[N],d,m,v);s(h.anchor,d,m);return}if(A===Io){te(h,d,m);return}if(v!==2&&w&1&&T)if(v===0)T.beforeEnter(b),s(b,d,m),qe(()=>T.enter(b),y);else{const{leave:N,delayLeave:x,afterLeave:F}=T,Q=()=>s(b,d,m),ne=()=>{N(b,()=>{Q(),F&&F()})};x?x(b,Q,ne):ne()}else s(b,d,m)},Bt=(h,d,m,v=!1,y=!1)=>{const{type:b,props:A,ref:T,children:C,dynamicChildren:w,shapeFlag:O,patchFlag:N,dirs:x}=h;if(T!=null&&na(T,null,m,h,!0),O&256){d.ctx.deactivate(h);return}const F=O&1&&x,Q=!Fr(h);let ne;if(Q&&(ne=A&&A.onVnodeBeforeUnmount)&&ft(ne,d,h),O&6)ng(h.component,m,v);else{if(O&128){h.suspense.unmount(m,v);return}F&&rn(h,null,d,"beforeUnmount"),O&64?h.type.remove(h,d,m,y,Mn,v):w&&(b!==tt||N>0&&N&64)?bt(w,d,m,!1,!0):(b===tt&&N&384||!y&&O&16)&&bt(C,d,m),v&&ou(h)}(Q&&(ne=A&&A.onVnodeUnmounted)||F)&&qe(()=>{ne&&ft(ne,d,h),F&&rn(h,null,d,"unmounted")},m)},ou=h=>{const{type:d,el:m,anchor:v,transition:y}=h;if(d===tt){tg(m,v);return}if(d===Io){pe(h);return}const b=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:T}=y,C=()=>A(m,b);T?T(h.el,b,C):C()}else b()},tg=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},ng=(h,d,m)=>{const{bum:v,scope:y,update:b,subTree:A,um:T}=h;v&&yo(v),y.stop(),b&&(b.active=!1,Bt(A,h,d,m)),T&&qe(T,d),qe(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},bt=(h,d,m,v=!1,y=!1,b=0)=>{for(let A=b;A<h.length;A++)Bt(h[A],d,m,v,y)},br=h=>h.shapeFlag&6?br(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),au=(h,d,m)=>{h==null?d._vnode&&Bt(d._vnode,null,null,!0):S(d._vnode||null,h,d,null,null,null,m),wu(),Nh(),d._vnode=h},Mn={p:S,um:Bt,m:Pn,r:ou,mt:ho,mc:re,pc:Tt,pbc:je,n:br,o:t};let po,go;return e&&([po,go]=e(Mn)),{render:au,hydrate:po,createApp:Um(au,po)}}function on({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Xh(t,e,n=!1){const s=t.children,r=e.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ht(r[i]),a.el=o.el),n||Xh(o,a))}}function Bm(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $m=t=>t.__isTeleport,tt=Symbol(void 0),Ja=Symbol(void 0),ut=Symbol(void 0),Io=Symbol(void 0),Cs=[];let at=null;function zn(t=!1){Cs.push(at=t?null:[])}function jm(){Cs.pop(),at=Cs[Cs.length-1]||null}let Fs=1;function Du(t){Fs+=t}function Jh(t){return t.dynamicChildren=Fs>0?at||jn:null,jm(),Fs>0&&at&&at.push(t),t}function Ss(t,e,n,s,r,i){return Jh(ye(t,e,n,s,r,i,!0))}function Hm(t,e,n,s,r){return Jh(lt(t,e,n,s,r,!0))}function qm(t){return t?t.__v_isVNode===!0:!1}function ln(t,e){return t.type===e.type&&t.key===e.key}const Ri="__vInternal",Zh=({key:t})=>t!=null?t:null,Vr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ne(t)||Me(t)||H(t)?{i:mt,r:t,k:e,f:!!n}:t:null;function ye(t,e=null,n=null,s=0,r=null,i=t===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zh(e),ref:e&&Vr(e),scopeId:ki,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Za(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Fs>0&&!o&&at&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&at.push(c),c}const lt=Km;function Km(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===bm)&&(t=ut),qm(t)){const a=Jt(t,e,!0);return n&&Za(a,n),Fs>0&&!i&&at&&(a.shapeFlag&6?at[at.indexOf(t)]=a:at.push(a)),a.patchFlag|=-2,a}if(ny(t)&&(t=t.__vccOpts),e){e=zm(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=Ma(a)),de(c)&&(Eh(c)&&!j(c)&&(c=Ue({},c)),e.style=Pa(c))}const o=Ne(t)?1:am(t)?128:$m(t)?64:de(t)?4:H(t)?2:0;return ye(t,e,n,s,r,o,i,!0)}function zm(t){return t?Eh(t)||Ri in t?Ue({},t):t:null}function Jt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Wm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Zh(a),ref:e&&e.ref?n&&r?j(r)?r.concat(Vr(e)):[r,Vr(e)]:Vr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jt(t.ssContent),ssFallback:t.ssFallback&&Jt(t.ssFallback),el:t.el,anchor:t.anchor}}function En(t=" ",e=0){return lt(Ja,null,t,e)}function Nu(t="",e=!1){return e?(zn(),Hm(ut,null,t)):lt(ut,null,t)}function pt(t){return t==null||typeof t=="boolean"?lt(ut):j(t)?lt(tt,null,t.slice()):typeof t=="object"?Ht(t):lt(Ja,null,String(t))}function Ht(t){return t.el===null||t.memo?t:Jt(t)}function Za(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Za(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ri in e)?e._ctx=mt:r===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),s&64?(n=16,e=[En(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ma([e.class,s.class]));else if(r==="style")e.style=Pa([e.style,s.style]);else if(Ii(r)){const i=e[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function ft(t,e,n,s=null){nt(t,e,7,[n,s])}const Gm=Yh();let Qm=0;function Ym(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Gm,i={uid:Qm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zh(s,r),emitsOptions:Oh(s,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tm.bind(null,i),t.ce&&t.ce(i),i}let Ae=null;const Xm=()=>Ae||mt,Zn=t=>{Ae=t,t.scope.on()},yn=()=>{Ae&&Ae.scope.off(),Ae=null};function ef(t){return t.vnode.shapeFlag&4}let Vs=!1;function Jm(t,e=!1){Vs=e;const{props:n,children:s}=t.vnode,r=ef(t);Rm(t,n,r,e),Pm(t,s);const i=r?Zm(t,e):void 0;return Vs=!1,i}function Zm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ih(new Proxy(t.ctx,Cm));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?ty(t):null;Zn(t),ls();const i=Gt(s,t,0,[t.props,r]);if(hs(),yn(),oh(i)){if(i.then(yn,yn),e)return i.then(o=>{Ru(t,o,e)}).catch(o=>{Si(o,t,0)});t.asyncDep=i}else Ru(t,i,e)}else tf(t,e)}function Ru(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=Sh(e)),tf(t,n)}let Ou;function tf(t,e,n){const s=t.type;if(!t.render){if(!e&&Ou&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Ue(Ue({isCustomElement:i,delimiters:a},o),c);s.render=Ou(r,u)}}t.render=s.render||ct}Zn(t),ls(),Sm(t),hs(),yn()}function ey(t){return new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}})}function ty(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ey(t))},slots:t.slots,emit:t.emit,expose:e}}function ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sh(Ih(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Jr)return Jr[n](t)}}))}function ny(t){return H(t)&&"__vccOpts"in t}const sy=(t,e)=>Gg(t,e,Vs),ry="3.2.38",iy="http://www.w3.org/2000/svg",hn=typeof document<"u"?document:null,xu=hn&&hn.createElement("template"),oy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?hn.createElementNS(iy,t):hn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{xu.innerHTML=s?`<svg>${t}</svg>`:t;const a=xu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ay(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cy(t,e,n){const s=t.style,r=Ne(n);if(n&&!r){for(const i in n)sa(s,i,n[i]);if(e&&!Ne(e))for(const i in e)n[i]==null&&sa(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Pu=/\s*!important$/;function sa(t,e,n){if(j(n))n.forEach(s=>sa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=uy(t,e);Pu.test(n)?t.setProperty(us(s),n.replace(Pu,""),"important"):t[s]=n}}const Mu=["Webkit","Moz","ms"],To={};function uy(t,e){const n=To[e];if(n)return n;let s=Xn(e);if(s!=="filter"&&s in t)return To[e]=s;s=uh(s);for(let r=0;r<Mu.length;r++){const i=Mu[r]+s;if(i in t)return To[e]=i}return e}const Lu="http://www.w3.org/1999/xlink";function ly(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lu,e.slice(6,e.length)):t.setAttributeNS(Lu,e,n);else{const i=rg(e);n==null||i&&!sh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hy(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=sh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[nf,fy]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ra=0;const dy=Promise.resolve(),py=()=>{ra=0},gy=()=>ra||(dy.then(py),ra=nf());function my(t,e,n,s){t.addEventListener(e,n,s)}function yy(t,e,n,s){t.removeEventListener(e,n,s)}function vy(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=wy(e);if(s){const u=i[e]=_y(s,r);my(t,a,u,c)}else o&&(yy(t,a,o,c),i[e]=void 0)}}const Uu=/(?:Once|Passive|Capture)$/;function wy(t){let e;if(Uu.test(t)){e={};let s;for(;s=t.match(Uu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):us(t.slice(2)),e]}function _y(t,e){const n=s=>{const r=s.timeStamp||nf();(fy||r>=n.attached-1)&&nt(Ey(s,n.value),e,5,[s])};return n.value=t,n.attached=gy(),n}function Ey(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Fu=/^on[a-z]/,Iy=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?ay(t,s,r):e==="style"?cy(t,n,s):Ii(e)?La(e)||vy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ty(t,e,s,r))?hy(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ly(t,e,s,r))};function Ty(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Fu.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Fu.test(e)&&Ne(n)?!1:e in t}const by={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dm.props;const Cy=Ue({patchProp:Iy},oy);let Vu;function Sy(){return Vu||(Vu=Fm(Cy))}const Ay=(...t)=>{const e=Sy().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ky(s);if(!r)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ky(t){return Ne(t)?document.querySelector(t):t}const Dy="/vite.svg",Ny="/assets/vue.5532db34.svg",Ry={id:"user-container"},Oy={key:0},xy={key:1},Py=Ya({__name:"Header",props:{user:null},emits:["sign-in-user","sign-out-user"],setup(t,{emit:e}){const n=t,s=()=>e("sign-in-user"),r=()=>e("sign-out-user");return(i,o)=>(zn(),Ss("div",Ry,[n.user?Nu("",!0):(zn(),Ss("div",Oy,[ye("button",{onClick:s}," Sign In ")])),n.user?(zn(),Ss("div",xy,[ye("div",null,qo(n.user.displayName),1),ye("button",{onClick:r}," Sign Out ")])):Nu("",!0)]))}}),Oi=t=>(xh("data-v-e93ce6da"),t=t(),Ph(),t),My={class:"card"},Ly=Oi(()=>ye("p",null,[En(" Edit "),ye("code",null,"components/HelloWorld.vue"),En(" to test HMR ")],-1)),Uy=Oi(()=>ye("p",null,[En(" Check out "),ye("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),En(", the official Vue + Vite starter ")],-1)),Fy=Oi(()=>ye("p",null,[En(" Install "),ye("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),En(" in your IDE for a better DX ")],-1)),Vy=Oi(()=>ye("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),By=Ya({__name:"HelloWorld",props:{msg:null,count:null},emits:["increment"],setup(t,{emit:e}){return(n,s)=>(zn(),Ss(tt,null,[ye("h1",null,qo(t.msg),1),ye("div",My,[ye("button",{type:"button",onClick:s[0]||(s[0]=r=>e("increment"))},"count is "+qo(t.count),1),Ly]),Uy,Fy,Vy],64))}});const sf=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},$y=sf(By,[["__scopeId","data-v-e93ce6da"]]);/**
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
 */const rf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),s.push(n[l],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),u!==64){const g=a<<4&240|u>>2;if(s.push(g),f!==64){const E=u<<6&192|f;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Hy=function(t){const e=rf(t);return of.encodeByteArray(e,!0)},af=function(t){return Hy(t).replace(/\./g,"")},qy=function(t){try{return of.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Ky{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function uf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zy(){return Te().indexOf("Electron/")>=0}function hf(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wy(){return Te().indexOf("MSAppHost/")>=0}function Gy(){return typeof indexedDB=="object"}function Qy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Yy="FirebaseError";class Vt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Yy,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Xy(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Vt(r,a,s)}}function Xy(t,e){return t.replace(Jy,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Jy=/\{\$([^}]+)}/g;function Zy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Bu(i)&&Bu(o)){if(!ei(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Bu(t){return t!==null&&typeof t=="object"}/**
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
 */function rr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ev(t,e){const n=new tv(t,e);return n.subscribe.bind(n)}class tv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");nv(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=bo),r.error===void 0&&(r.error=bo),r.complete===void 0&&(r.complete=bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bo(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cn="[DEFAULT]";/**
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
 */class sv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ky;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iv(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rv(t){return t===cn?void 0:t}function iv(t){return t.instantiationMode==="EAGER"}/**
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
 */class ov{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const av={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},cv=Y.INFO,uv={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},lv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=uv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=cv,this._logHandler=lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?av[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const hv=(t,e)=>e.some(n=>t instanceof n);let $u,ju;function fv(){return $u||($u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dv(){return ju||(ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ff=new WeakMap,ia=new WeakMap,df=new WeakMap,Co=new WeakMap,nc=new WeakMap;function pv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ff.set(n,t)}).catch(()=>{}),nc.set(e,t),e}function gv(t){if(ia.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ia.set(t,e)}let oa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||df.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mv(t){oa=t(oa)}function yv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(So(this),e,...n);return df.set(s,e.sort?e.sort():[e]),Qt(s)}:dv().includes(t)?function(...e){return t.apply(So(this),e),Qt(ff.get(this))}:function(...e){return Qt(t.apply(So(this),e))}}function vv(t){return typeof t=="function"?yv(t):(t instanceof IDBTransaction&&gv(t),hv(t,fv())?new Proxy(t,oa):t)}function Qt(t){if(t instanceof IDBRequest)return pv(t);if(Co.has(t))return Co.get(t);const e=vv(t);return e!==t&&(Co.set(t,e),nc.set(e,t)),e}const So=t=>nc.get(t);function wv(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Qt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Qt(o.result),c.oldVersion,c.newVersion,Qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const _v=["get","getKey","getAll","getAllKeys","count"],Ev=["put","add","delete","clear"],Ao=new Map;function Hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ev.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_v.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ao.set(e,i),i}mv(t=>({...t,get:(e,n,s)=>Hu(e,n)||t.get(e,n,s),has:(e,n)=>!!Hu(e,n)||t.has(e,n)}));/**
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
 */class Iv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const aa="@firebase/app",qu="0.7.32";/**
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
 */const Tn=new tc("@firebase/app"),bv="@firebase/app-compat",Cv="@firebase/analytics-compat",Sv="@firebase/analytics",Av="@firebase/app-check-compat",kv="@firebase/app-check",Dv="@firebase/auth",Nv="@firebase/auth-compat",Rv="@firebase/database",Ov="@firebase/database-compat",xv="@firebase/functions",Pv="@firebase/functions-compat",Mv="@firebase/installations",Lv="@firebase/installations-compat",Uv="@firebase/messaging",Fv="@firebase/messaging-compat",Vv="@firebase/performance",Bv="@firebase/performance-compat",$v="@firebase/remote-config",jv="@firebase/remote-config-compat",Hv="@firebase/storage",qv="@firebase/storage-compat",Kv="@firebase/firestore",zv="@firebase/firestore-compat",Wv="firebase",Gv="9.9.4";/**
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
 */const pf="[DEFAULT]",Qv={[aa]:"fire-core",[bv]:"fire-core-compat",[Sv]:"fire-analytics",[Cv]:"fire-analytics-compat",[kv]:"fire-app-check",[Av]:"fire-app-check-compat",[Dv]:"fire-auth",[Nv]:"fire-auth-compat",[Rv]:"fire-rtdb",[Ov]:"fire-rtdb-compat",[xv]:"fire-fn",[Pv]:"fire-fn-compat",[Mv]:"fire-iid",[Lv]:"fire-iid-compat",[Uv]:"fire-fcm",[Fv]:"fire-fcm-compat",[Vv]:"fire-perf",[Bv]:"fire-perf-compat",[$v]:"fire-rc",[jv]:"fire-rc-compat",[Hv]:"fire-gcs",[qv]:"fire-gcs-compat",[Kv]:"fire-fst",[zv]:"fire-fst-compat","fire-js":"fire-js",[Wv]:"fire-js-all"};/**
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
 */const ti=new Map,ca=new Map;function Yv(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(ca.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;ca.set(e,t);for(const n of ti.values())Yv(n,t);return!0}function sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Xv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new sr("app","Firebase",Xv);/**
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
 */class Jv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const ir=Gv;function gf(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:pf,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});const r=ti.get(s);if(r){if(ei(t,r.options)&&ei(n,r.config))return r;throw bn.create("duplicate-app",{appName:s})}const i=new ov(s);for(const a of ca.values())i.addComponent(a);const o=new Jv(t,n,i);return ti.set(s,o),o}function mf(t=pf){const e=ti.get(t);if(!e)throw bn.create("no-app",{appName:t});return e}function Yt(t,e,n){var s;let r=(s=Qv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}es(new In(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Zv="firebase-heartbeat-database",ew=1,Bs="firebase-heartbeat-store";let ko=null;function yf(){return ko||(ko=wv(Zv,ew,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bs)}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),ko}async function tw(t){var e;try{return(await yf()).transaction(Bs).objectStore(Bs).get(vf(t))}catch(n){if(n instanceof Vt)Tn.warn(n.message);else{const s=bn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Tn.warn(s.message)}}}async function Ku(t,e){var n;try{const r=(await yf()).transaction(Bs,"readwrite");return await r.objectStore(Bs).put(e,vf(t)),r.done}catch(s){if(s instanceof Vt)Tn.warn(s.message);else{const r=bn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Tn.warn(r.message)}}}function vf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nw=1024,sw=30*24*60*60*1e3;class rw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ow(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=sw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zu(),{heartbeatsToSend:n,unsentEntries:s}=iw(this._heartbeatsCache.heartbeats),r=af(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function zu(){return new Date().toISOString().substring(0,10)}function iw(t,e=nw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Wu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Wu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ow{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gy()?Qy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wu(t){return af(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aw(t){es(new In("platform-logger",e=>new Iv(e),"PRIVATE")),es(new In("heartbeat",e=>new rw(e),"PRIVATE")),Yt(aa,qu,t),Yt(aa,qu,"esm2017"),Yt("fire-js","")}aw("");var cw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,rc=rc||{},U=cw||self;function ni(){}function ua(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function or(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uw(t){return Object.prototype.hasOwnProperty.call(t,Do)&&t[Do]||(t[Do]=++lw)}var Do="closure_uid_"+(1e9*Math.random()>>>0),lw=0;function hw(t,e,n){return t.call.apply(t.bind,arguments)}function fw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=hw:ke=fw,ke.apply(null,arguments)}function Nr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function nn(){this.s=this.s,this.o=this.o}var dw=0;nn.prototype.s=!1;nn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),dw!=0)&&uw(this)};nn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_f=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function pw(t){e:{var e=i_;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Gu(t){return Array.prototype.concat.apply([],arguments)}function ic(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function si(t){return/^[\s\xa0]*$/.test(t)}var Qu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ve(t,e){return t.indexOf(e)!=-1}function No(t,e){return t<e?-1:t>e?1:0}var Be;e:{var Yu=U.navigator;if(Yu){var Xu=Yu.userAgent;if(Xu){Be=Xu;break e}}Be=""}function oc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ef(t){const e={};for(const n in t)e[n]=t[n];return e}var Ju="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function If(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ju.length;i++)n=Ju[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ac(t){return ac[" "](t),t}ac[" "]=ni;function gw(t){var e=vw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var mw=Ve(Be,"Opera"),ts=Ve(Be,"Trident")||Ve(Be,"MSIE"),Tf=Ve(Be,"Edge"),la=Tf||ts,bf=Ve(Be,"Gecko")&&!(Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge"))&&!(Ve(Be,"Trident")||Ve(Be,"MSIE"))&&!Ve(Be,"Edge"),yw=Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge");function Cf(){var t=U.document;return t?t.documentMode:void 0}var ri;e:{var Ro="",Oo=function(){var t=Be;if(bf)return/rv:([^\);]+)(\)|;)/.exec(t);if(Tf)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yw)return/WebKit\/(\S+)/.exec(t);if(mw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Oo&&(Ro=Oo?Oo[1]:""),ts){var xo=Cf();if(xo!=null&&xo>parseFloat(Ro)){ri=String(xo);break e}}ri=Ro}var vw={};function ww(){return gw(function(){let t=0;const e=Qu(String(ri)).split("."),n=Qu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=No(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||No(r[2].length==0,i[2].length==0)||No(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ha;if(U.document&&ts){var Zu=Cf();ha=Zu||parseInt(ri,10)||void 0}else ha=void 0;var _w=ha,Ew=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",ni,e),U.removeEventListener("test",ni,e)}catch{}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};function $s(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bf){e:{try{ac(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Iw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$s.Z.h.call(this)}}Oe($s,Le);var Iw={2:"touch",3:"pen",4:"mouse"};$s.prototype.h=function(){$s.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ar="closure_listenable_"+(1e6*Math.random()|0),Tw=0;function bw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++Tw,this.ca=this.fa=!1}function xi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Pi(t){this.src=t,this.g={},this.h=0}Pi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=da(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new bw(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function fa(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=wf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(xi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function da(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var cc="closure_lm_"+(1e6*Math.random()|0),Po={};function Sf(t,e,n,s,r){if(s&&s.once)return kf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sf(t,e[i],n,s,r);return null}return n=hc(n),t&&t[ar]?t.N(e,n,or(s)?!!s.capture:!!s,r):Af(t,e,n,!1,s,r)}function Af(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=or(r)?!!r.capture:!!r,a=lc(t);if(a||(t[cc]=a=new Pi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Cw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ew||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Nf(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Cw(){function t(n){return e.call(t.src,t.listener,n)}var e=Sw;return t}function kf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)kf(t,e[i],n,s,r);return null}return n=hc(n),t&&t[ar]?t.O(e,n,or(s)?!!s.capture:!!s,r):Af(t,e,n,!0,s,r)}function Df(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Df(t,e[i],n,s,r);else s=or(s)?!!s.capture:!!s,n=hc(n),t&&t[ar]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=da(i,n,s,r),-1<n&&(xi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=lc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=da(e,n,s,r)),(n=-1<t?e[t]:null)&&uc(n))}function uc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ar])fa(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Nf(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=lc(e))?(fa(n,t),n.h==0&&(n.src=null,e[cc]=null)):xi(t)}}}function Nf(t){return t in Po?Po[t]:Po[t]="on"+t}function Sw(t,e){if(t.ca)t=!0;else{e=new $s(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&uc(t),t=n.call(s,e)}return t}function lc(t){return t=t[cc],t instanceof Pi?t:null}var Mo="__closure_events_fn_"+(1e9*Math.random()>>>0);function hc(t){return typeof t=="function"?t:(t[Mo]||(t[Mo]=function(e){return t.handleEvent(e)}),t[Mo])}function be(){nn.call(this),this.i=new Pi(this),this.P=this,this.I=null}Oe(be,nn);be.prototype[ar]=!0;be.prototype.removeEventListener=function(t,e,n,s){Df(this,t,e,n,s)};function De(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var r=e;e=new Le(s,t),If(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Rr(o,s,!0,e)&&r}if(o=e.g=t,r=Rr(o,s,!0,e)&&r,r=Rr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Rr(o,s,!1,e)&&r}be.prototype.M=function(){if(be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)xi(n[s]);delete t.g[e],t.h--}}this.I=null};be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Rr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&fa(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var fc=U.JSON.stringify;function Aw(){var t=Of;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kw{constructor(){this.h=this.g=null}add(e,n){const s=Rf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Rf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dw,t=>t.reset());class Dw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Nw(t){U.setTimeout(()=>{throw t},0)}function dc(t,e){pa||Rw(),ga||(pa(),ga=!0),Of.add(t,e)}var pa;function Rw(){var t=U.Promise.resolve(void 0);pa=function(){t.then(Ow)}}var ga=!1,Of=new kw;function Ow(){for(var t;t=Aw();){try{t.h.call(t.g)}catch(n){Nw(n)}var e=Rf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ga=!1}function Mi(t,e){be.call(this),this.h=t||1,this.g=e||U,this.j=ke(this.kb,this),this.l=Date.now()}Oe(Mi,be);D=Mi.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),De(this,"tick"),this.da&&(pc(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){Mi.Z.M.call(this),pc(this),delete this.g};function gc(t,e,n){if(typeof t=="function")n&&(t=ke(t,n));else if(t&&typeof t.handleEvent=="function")t=ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function xf(t){t.g=gc(()=>{t.g=null,t.i&&(t.i=!1,xf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xw extends nn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xf(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(t){nn.call(this),this.h=t,this.g={}}Oe(js,nn);var el=[];function Pf(t,e,n,s){Array.isArray(n)||(n&&(el[0]=n.toString()),n=el);for(var r=0;r<n.length;r++){var i=Sf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Mf(t){oc(t.g,function(e,n){this.g.hasOwnProperty(n)&&uc(e)},t),t.g={}}js.prototype.M=function(){js.Z.M.call(this),Mf(this)};js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Li(){this.g=!0}Li.prototype.Aa=function(){this.g=!1};function Pw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var f=l.split("_");o=2<=f.length&&f[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Mw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Bn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Uw(t,n)+(s?" "+s:"")})}function Lw(t,e){t.info(function(){return"TIMEOUT: "+e})}Li.prototype.info=function(){};function Uw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return fc(n)}catch{return e}}var Nn={},tl=null;function Ui(){return tl=tl||new be}Nn.Ma="serverreachability";function Lf(t){Le.call(this,Nn.Ma,t)}Oe(Lf,Le);function Hs(t){const e=Ui();De(e,new Lf(e))}Nn.STAT_EVENT="statevent";function Uf(t,e){Le.call(this,Nn.STAT_EVENT,t),this.stat=e}Oe(Uf,Le);function $e(t){const e=Ui();De(e,new Uf(e,t))}Nn.Na="timingevent";function Ff(t,e){Le.call(this,Nn.Na,t),this.size=e}Oe(Ff,Le);function cr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Fi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Vf={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function mc(){}mc.prototype.h=null;function nl(t){return t.h||(t.h=t.i())}function Bf(){}var ur={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function yc(){Le.call(this,"d")}Oe(yc,Le);function vc(){Le.call(this,"c")}Oe(vc,Le);var ma;function Vi(){}Oe(Vi,mc);Vi.prototype.g=function(){return new XMLHttpRequest};Vi.prototype.i=function(){return{}};ma=new Vi;function lr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new js(this),this.P=Fw,t=la?125:void 0,this.W=new Mi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new $f}function $f(){this.i=null,this.g="",this.h=!1}var Fw=45e3,ya={},ii={};D=lr.prototype;D.setTimeout=function(t){this.P=t};function va(t,e,n){t.K=1,t.v=$i(xt(e)),t.s=n,t.U=!0,jf(t,null)}function jf(t,e){t.F=Date.now(),hr(t),t.A=xt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Qf(n.h,"t",s),t.C=0,n=t.l.H,t.h=new $f,t.g=gd(t.l,n?e:null,!t.s),0<t.O&&(t.L=new xw(ke(t.Ia,t,t.g),t.O)),Pf(t.V,t.g,"readystatechange",t.gb),e=t.H?Ef(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Hs(),Pw(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&At(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const l=At(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(l!=3||la||this.g&&(this.h.h||this.g.ga()||ol(this.g)))){this.I||l!=4||e==7||(e==8||0>=f?Hs(3):Hs(2)),Bi(this);var n=this.g.ba();this.N=n;t:if(Hf(this)){var s=ol(this.g);t="";var r=s.length,i=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),As(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Mw(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!si(a)){var u=a;break t}}u=null}if(n=u)Bn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wa(this,n);else{this.i=!1,this.o=3,$e(12),fn(this),As(this);break e}}this.U?(qf(this,l,o),la&&this.i&&l==3&&(Pf(this.V,this.W,"tick",this.fb),this.W.start())):(Bn(this.j,this.m,o,null),wa(this,o)),l==4&&fn(this),this.i&&!this.I&&(l==4?hd(this.l,this):(this.i=!1,hr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),fn(this),As(this)}}}catch{}finally{}};function Hf(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function qf(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Vw(t,n),r==ii){e==4&&(t.o=4,$e(14),s=!1),Bn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ya){t.o=4,$e(15),Bn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Bn(t.j,t.m,r,null),wa(t,r);Hf(t)&&r!=ii&&r!=ya&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$e(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ac(e),e.L=!0,$e(11))):(Bn(t.j,t.m,n,"[Invalid Chunked Response]"),fn(t),As(t))}D.fb=function(){if(this.g){var t=At(this.g),e=this.g.ga();this.C<e.length&&(Bi(this),qf(this,t,e),this.i&&t!=4&&hr(this))}};function Vw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ii:(n=Number(e.substring(n,s)),isNaN(n)?ya:(s+=1,s+n>e.length?ii:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,fn(this)};function hr(t){t.Y=Date.now()+t.P,Kf(t,t.P)}function Kf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=cr(ke(t.eb,t),e)}function Bi(t){t.B&&(U.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Lw(this.j,this.A),this.K!=2&&(Hs(),$e(17)),fn(this),this.o=2,As(this)):Kf(this,this.Y-t)};function As(t){t.l.G==0||t.I||hd(t.l,t)}function fn(t){Bi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,pc(t.W),Mf(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_a(n.i,t))){if(n.I=t.N,!t.J&&_a(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ui(n),qi(n);else break e;Sc(n),$e(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=cr(ke(n.ab,n),6e3));if(1>=Jf(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else dn(n,11)}else if((t.J||n.g==t)&&ui(n),!si(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const f=u[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.i;!i.g&&(Ve(E,"spdy")||Ve(E,"quic")||Ve(E,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ec(i,i.h),i.h=null))}if(s.D){const k=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.sa=k,ue(s.F,s.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=pd(s,s.H?s.la:null,s.W),o.J){Zf(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Bi(a),hr(a)),s.g=o}else ud(s);0<n.l.length&&Ki(n)}else u[0]!="stop"&&u[0]!="close"||dn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?dn(n,7):Cc(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Hs(4)}catch{}}function Bw(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ua(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function wc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ua(t)||typeof t=="string")_f(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ua(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Bw(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function fs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof fs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}D=fs.prototype;D.R=function(){_c(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return _c(this),this.g.concat()};function _c(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Cn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Cn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}D.get=function(t,e){return Cn(this.h,t)?this.h[t]:e};D.set=function(t,e){Cn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var zf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $w(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Sn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Sn){this.g=e!==void 0?e:t.g,oi(this,t.j),this.s=t.s,ai(this,t.i),ci(this,t.m),this.l=t.l,e=t.h;var n=new qs;n.i=e.i,e.g&&(n.g=new fs(e.g),n.h=e.h),sl(this,n),this.o=t.o}else t&&(n=String(t).match(zf))?(this.g=!!e,oi(this,n[1]||"",!0),this.s=ks(n[2]||""),ai(this,n[3]||"",!0),ci(this,n[4]),this.l=ks(n[5]||"",!0),sl(this,n[6]||"",!0),this.o=ks(n[7]||"")):(this.g=!!e,this.h=new qs(null,this.g))}Sn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Is(e,rl,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Is(e,rl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Is(n,n.charAt(0)=="/"?zw:Kw,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Is(n,Gw)),t.join("")};function xt(t){return new Sn(t)}function oi(t,e,n){t.j=n?ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ai(t,e,n){t.i=n?ks(e,!0):e}function ci(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sl(t,e,n){e instanceof qs?(t.h=e,Qw(t.h,t.g)):(n||(e=Is(e,Ww)),t.h=new qs(e,t.g))}function ue(t,e,n){t.h.set(e,n)}function $i(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jw(t){return t instanceof Sn?xt(t):new Sn(t,void 0)}function Hw(t,e,n,s){var r=new Sn(null,void 0);return t&&oi(r,t),e&&ai(r,e),n&&ci(r,n),s&&(r.l=s),r}function ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Is(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rl=/[#\/\?@]/g,Kw=/[#\?:]/g,zw=/[#\?]/g,Ww=/[#\?@]/g,Gw=/#/g;function qs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new fs,t.h=0,t.i&&$w(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=qs.prototype;D.add=function(t,e){sn(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wf(t,e){sn(t),e=ds(t,e),Cn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Cn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&_c(t)))}function Gf(t,e){return sn(t),e=ds(t,e),Cn(t.g.h,e)}D.forEach=function(t,e){sn(this),this.g.forEach(function(n,s){_f(n,function(r){t.call(e,r,s,this)},this)},this)};D.T=function(){sn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};D.R=function(t){sn(this);var e=[];if(typeof t=="string")Gf(this,t)&&(e=Gu(e,this.g.get(ds(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Gu(e,t[n])}return e};D.set=function(t,e){return sn(this),this.i=null,t=ds(this,t),Gf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Qf(t,e,n){Wf(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),ic(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Qw(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wf(this,s),Qf(this,r,n))},t)),t.j=e}var Yw=class{constructor(t,e){this.h=t,this.g=e}};function Yf(t){this.l=t||Xw,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ea&&U.g.Ea()&&U.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xw=10;function Xf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jf(t){return t.h?1:t.g?t.g.size:0}function _a(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ec(t,e){t.g?t.g.add(e):t.h=e}function Zf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yf.prototype.cancel=function(){if(this.i=ed(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ed(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ic(t.i)}function Ic(){}Ic.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};Ic.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function Jw(){this.g=new Ic}function Zw(t,e,n){const s=n||"";try{wc(t,function(r,i){let o=r;or(r)&&(o=fc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function e_(t,e){const n=new Li;if(U.Image){const s=new Image;s.onload=Nr(Or,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Nr(Or,n,s,"TestLoadImage: error",!1,e),s.onabort=Nr(Or,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Nr(Or,n,s,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Or(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function fr(t){this.l=t.$b||null,this.j=t.ib||!1}Oe(fr,mc);fr.prototype.g=function(){return new ji(this.l,this.j)};fr.prototype.i=function(t){return function(){return t}}({});function ji(t,e){be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Tc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(ji,be);var Tc=0;D=ji.prototype;D.open=function(t,e){if(this.readyState!=Tc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ks(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dr(this)),this.readyState=Tc};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;td(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function td(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?dr(this):Ks(this),this.readyState==3&&td(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,dr(this))};D.Ta=function(t){this.g&&(this.response=t,dr(this))};D.ha=function(){this.g&&dr(this)};function dr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ks(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ks(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var t_=U.JSON.parse;function ve(t){be.call(this),this.headers=new fs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nd,this.K=this.L=!1}Oe(ve,be);var nd="",n_=/^https?$/i,s_=["POST","PUT"];D=ve.prototype;D.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ma.g(),this.C=this.u?nl(this.u):nl(ma),this.g.onreadystatechange=ke(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){il(this,i);return}t=n||"";const r=new fs(this.headers);s&&wc(s,function(i,o){r.set(o,i)}),s=pw(r.T()),n=U.FormData&&t instanceof U.FormData,!(0<=wf(s_,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{id(this),0<this.B&&((this.K=r_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.pa,this)):this.A=gc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){il(this,i)}};function r_(t){return ts&&ww()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function i_(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof rc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function il(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sd(t),Hi(t)}function sd(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Hi(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hi(this,!0)),ve.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?rd(this):this.cb())};D.cb=function(){rd(this)};function rd(t){if(t.h&&typeof rc<"u"&&(!t.C[1]||At(t)!=4||t.ba()!=2)){if(t.v&&At(t)==4)gc(t.Fa,0,t);else if(De(t,"readystatechange"),At(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(zf)[1]||null;if(!r&&U.self&&U.self.location){var i=U.self.location.protocol;r=i.substr(0,i.length-1)}s=!n_.test(r?r.toLowerCase():"")}n=s}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<At(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",sd(t)}}finally{Hi(t)}}}}function Hi(t,e){if(t.g){id(t);const n=t.g,s=t.C[0]?ni:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=s}catch{}}}function id(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function At(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),t_(e)}};function ol(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function o_(t){let e="";return oc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function bc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=o_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function _s(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function od(t){this.za=0,this.l=[],this.h=new Li,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=_s("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=_s("baseRetryDelayMs",5e3,t),this.$a=_s("retryDelaySeedMs",1e4,t),this.Ya=_s("forwardChannelMaxRetries",2,t),this.ra=_s("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Yf(t&&t.concurrentRequestLimit),this.Ca=new Jw,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=od.prototype;D.ma=8;D.G=1;function Cc(t){if(ad(t),t.G==3){var e=t.V++,n=xt(t.F);ue(n,"SID",t.J),ue(n,"RID",e),ue(n,"TYPE","terminate"),pr(t,n),e=new lr(t,t.h,e,void 0),e.K=2,e.v=$i(xt(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=gd(e.l,null),e.g.ea(e.v)),e.F=Date.now(),hr(e)}dd(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function qi(t){t.g&&(Ac(t),t.g.cancel(),t.g=null)}function ad(t){qi(t),t.u&&(U.clearTimeout(t.u),t.u=null),ui(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function Lo(t,e){t.l.push(new Yw(t.Za++,e)),t.G==3&&Ki(t)}function Ki(t){Xf(t.i)||t.m||(t.m=!0,dc(t.Ha,t),t.C=0)}function a_(t,e){return Jf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=cr(ke(t.Ha,t,e),fd(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new lr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Ef(i),If(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cd(this,r,e),n=xt(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),pr(this,n),this.o&&i&&bc(n,this.o,i),Ec(this.i,r),this.Ra&&ue(n,"TYPE","init"),this.ja?(ue(n,"$req",e),ue(n,"SID","null"),r.$=!0,va(r,n,null)):va(r,n,e),this.G=2}}else this.G==3&&(t?al(this,t):this.l.length==0||Xf(this.i)||al(this))};function al(t,e){var n;e?n=e.m:n=t.V++;const s=xt(t.F);ue(s,"SID",t.J),ue(s,"RID",n),ue(s,"AID",t.U),pr(t,s),t.o&&t.s&&bc(s,t.o,t.s),n=new lr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cd(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ec(t.i,n),va(n,s,e)}function pr(t,e){t.j&&wc({},function(n,s){ue(e,s,n)})}function cd(t,e,n){n=Math.min(t.l.length,n);var s=t.j?ke(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Zw(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function ud(t){t.g||t.u||(t.Y=1,dc(t.Ga,t),t.A=0)}function Sc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=cr(ke(t.Ga,t),fd(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,ld(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=cr(ke(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,$e(10),qi(this),ld(this))};function Ac(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function ld(t){t.g=new lr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=xt(t.oa);ue(e,"RID","rpc"),ue(e,"SID",t.J),ue(e,"CI",t.N?"0":"1"),ue(e,"AID",t.U),pr(t,e),ue(e,"TYPE","xmlhttp"),t.o&&t.s&&bc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=$i(xt(e)),n.s=null,n.U=!0,jf(n,t)}D.ab=function(){this.v!=null&&(this.v=null,qi(this),Sc(this),$e(19))};function ui(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function hd(t,e){var n=null;if(t.g==e){ui(t),Ac(t),t.g=null;var s=2}else if(_a(t.i,e))n=e.D,Zf(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ui(),De(s,new Ff(s,n)),Ki(t)}else ud(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&a_(t,e)||s==2&&Sc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:dn(t,5);break;case 4:dn(t,10);break;case 3:dn(t,6);break;default:dn(t,2)}}}function fd(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function dn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=ke(t.jb,t);n||(n=new Sn("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||oi(n,"https"),$i(n)),e_(n.toString(),s)}else $e(2);t.G=0,t.j&&t.j.va(e),dd(t),ad(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),$e(2)):(this.h.info("Failed to ping google.com"),$e(1))};function dd(t){t.G=0,t.I=-1,t.j&&((ed(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ic(t.l),t.l.length=0),t.j.ua())}function pd(t,e,n){let s=jw(n);if(s.i!="")e&&ai(s,e+"."+s.i),ci(s,s.m);else{const r=U.location;s=Hw(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&oc(t.aa,function(r,i){ue(s,i,r)}),e=t.D,n=t.sa,e&&n&&ue(s,e,n),ue(s,"VER",t.ma),pr(t,s),s}function gd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ve(new fr({ib:!0})):new ve(t.qa),e.L=t.H,e}function md(){}D=md.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function li(){if(ts&&!(10<=Number(_w)))throw Error("Environmental error: no available transport.")}li.prototype.g=function(t,e){return new Je(t,e)};function Je(t,e){be.call(this),this.g=new od(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!si(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!si(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}Oe(Je,be);Je.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),dc(ke(t.hb,t,e))),$e(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=pd(t,null,t.W),Ki(t)};Je.prototype.close=function(){Cc(this.g)};Je.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Lo(this.g,e)}else this.v?(e={},e.__data__=fc(t),Lo(this.g,e)):Lo(this.g,t)};Je.prototype.M=function(){this.g.j=null,delete this.j,Cc(this.g),delete this.g,Je.Z.M.call(this)};function yd(t){yc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(yd,yc);function vd(){vc.call(this),this.status=1}Oe(vd,vc);function ps(t){this.g=t}Oe(ps,md);ps.prototype.xa=function(){De(this.g,"a")};ps.prototype.wa=function(t){De(this.g,new yd(t))};ps.prototype.va=function(t){De(this.g,new vd)};ps.prototype.ua=function(){De(this.g,"b")};li.prototype.createWebChannel=li.prototype.g;Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;Fi.NO_ERROR=0;Fi.TIMEOUT=8;Fi.HTTP_ERROR=6;Vf.COMPLETE="complete";Bf.EventType=ur;ur.OPEN="a";ur.CLOSE="b";ur.ERROR="c";ur.MESSAGE="d";be.prototype.listen=be.prototype.N;ve.prototype.listenOnce=ve.prototype.O;ve.prototype.getLastError=ve.prototype.La;ve.prototype.getLastErrorCode=ve.prototype.Da;ve.prototype.getStatus=ve.prototype.ba;ve.prototype.getResponseJson=ve.prototype.Qa;ve.prototype.getResponseText=ve.prototype.ga;ve.prototype.send=ve.prototype.ea;var c_=function(){return new li},u_=function(){return Ui()},Uo=Fi,l_=Vf,h_=Nn,cl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},f_=fr,xr=Bf,d_=ve;const ul="@firebase/firestore";/**
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
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let gs="9.9.4";/**
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
 */const An=new tc("@firebase/firestore");function ll(){return An.logLevel}function R(t,...e){if(An.logLevel<=Y.DEBUG){const n=e.map(kc);An.debug(`Firestore (${gs}): ${t}`,...n)}}function Pt(t,...e){if(An.logLevel<=Y.ERROR){const n=e.map(kc);An.error(`Firestore (${gs}): ${t}`,...n)}}function hl(t,...e){if(An.logLevel<=Y.WARN){const n=e.map(kc);An.warn(`Firestore (${gs}): ${t}`,...n)}}function kc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Pt(e),new Error(e)}function oe(t,e){t||B()}function $(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class p_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class g_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class m_{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oe(typeof s.accessToken=="string"),new p_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Ke(e)}}class y_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class v_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new y_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class w_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class __{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.A=n.token,new w_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function E_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class wd{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=E_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new we(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new we(0,0))}static max(){return new q(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zs{constructor(e,n,s){n===void 0?n=0:n>e.length&&B(),s===void 0?s=e.length-n:s>e.length-n&&B(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends zs{construct(e,n,s){return new fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const I_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends zs{construct(e,n,s){return new Pe(e,n,s)}static isValidIdentifier(e){return I_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(fe.fromString(e))}static fromName(e){return new M(fe.fromString(e).popFirst(5))}static empty(){return new M(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new fe(e.slice()))}}function T_(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=q.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new Zt(r,M.empty(),e)}function b_(t){return new Zt(t.readTime,t.key,-1)}class Zt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Zt(q.min(),M.empty(),-1)}static max(){return new Zt(q.max(),M.empty(),-1)}}function C_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
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
 */const S_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==S_)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,s)=>{n(e)})}static reject(e){return new _((n,s)=>{s(e)})}static waitFor(e){return new _((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=_.resolve(!1);for(const s of e)n=n.next(r=>r?_.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new _((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new _((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function mr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function fl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Dc.at=-1;class Ee{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pr(this.root,e,this.comparator,!0)}}class Pr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ce.RED,this.left=r!=null?r:Ce.EMPTY,this.right=i!=null?i:Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ce(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ce.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dl(this.data.getIterator())}getIteratorFrom(e){return new dl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class dl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yt{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new yt([])}unionWith(e){let n=new _e(Pe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Re(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const k_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(t){if(oe(!!t),typeof t=="string"){let e=0;const n=k_.exec(t);if(oe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
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
 */function Ed(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Id(t){const e=t.mapValue.fields.__previous_value__;return Ed(e)?Id(e):e}function Ws(t){const e=en(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class D_{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Gs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gs&&e.projectId===this.projectId&&e.database===this.database}}function zi(t){return t==null}function hi(t){return t===0&&1/t==-1/0}function N_(t){return typeof t=="number"&&Number.isInteger(t)&&!hi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Mr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ed(t)?4:R_(t)?9007199254740991:10:B()}function _t(t,e){if(t===e)return!0;const n=kn(t);if(n!==kn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ws(t).isEqual(Ws(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=en(s.timestampValue),o=en(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ss(s.bytesValue).isEqual(ss(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=me(s.doubleValue),o=me(r.doubleValue);return i===o?hi(i)===hi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(fl(i)!==fl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!_t(i[a],o[a])))return!1;return!0}(t,e);default:return B()}}function Qs(t,e){return(t.values||[]).find(n=>_t(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=kn(t),s=kn(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=me(r.integerValue||r.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return pl(t.timestampValue,e.timestampValue);case 4:return pl(Ws(t),Ws(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ss(r),a=ss(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=J(o[c],a[c]);if(u!==0)return u}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=J(me(r.latitude),me(i.latitude));return o!==0?o:J(me(r.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=rs(o[c],a[c]);if(u)return u}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Mr.mapValue&&i===Mr.mapValue)return 0;if(r===Mr.mapValue)return 1;if(i===Mr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const f=J(a[l],u[l]);if(f!==0)return f;const p=rs(o[a[l]],c[u[l]]);if(p!==0)return p}return J(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function pl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=en(t),s=en(e),r=J(n.seconds,s.seconds);return r!==0?r:J(n.nanos,s.nanos)}function Wn(t){return Ea(t)}function Ea(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=en(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ea(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ea(s.fields[a])}`;return i+"}"}(t.mapValue):B();var e,n}function Ia(t){return!!t&&"integerValue"in t}function Nc(t){return!!t&&"arrayValue"in t}function gl(t){return!!t&&"nullValue"in t}function ml(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Br(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ds(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function R_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Br(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=Pe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ds(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Br(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Br(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Rn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ye(Ds(this.value))}}function Td(t){const e=[];return Rn(t.fields,(n,s)=>{const r=new Pe([n]);if(Br(s)){const i=Td(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new yt(e)}/**
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
 */class Se{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Se(e,0,q.min(),q.min(),Ye.empty(),0)}static newFoundDocument(e,n,s){return new Se(e,1,n,q.min(),s,0)}static newNoDocument(e,n){return new Se(e,2,n,q.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new Se(e,3,n,q.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class O_{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function yl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new O_(t,e,n,s,r,i,o)}function Rc(t){const e=$(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Wn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),zi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Wn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Wn(s)).join(",")),e.ht=n}return e.ht}function x_(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Wn(s.value)}`;var s}).join(", ")}]`),zi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Wn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Wn(n)).join(",")),`Target(${e})`}function Oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!$_(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!_t(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wl(t.startAt,e.startAt)&&wl(t.endAt,e.endAt)}function Ta(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ze extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new P_(e,n,s):n==="array-contains"?new U_(e,s):n==="in"?new F_(e,s):n==="not-in"?new V_(e,s):n==="array-contains-any"?new B_(e,s):new ze(e,n,s)}static lt(e,n,s){return n==="in"?new M_(e,s):new L_(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(rs(n,this.value)):n!==null&&kn(this.value)===kn(n)&&this.ft(rs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class P_ extends ze{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.ft(n)}}class M_ extends ze{constructor(e,n){super(e,"in",n),this.keys=bd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class L_ extends ze{constructor(e,n){super(e,"not-in",n),this.keys=bd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class U_ extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nc(n)&&Qs(n.arrayValue,this.value)}}class F_ extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qs(this.value.arrayValue,n)}}class V_ extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qs(this.value.arrayValue,n)}}class B_ extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Qs(this.value.arrayValue,s))}}class fi{constructor(e,n){this.position=e,this.inclusive=n}}class Ns{constructor(e,n="asc"){this.field=e,this.dir=n}}function $_(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function vl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=rs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function wl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function j_(t,e,n,s,r,i,o,a){return new Wi(t,e,n,s,r,i,o,a)}function xc(t){return new Wi(t)}function _l(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function H_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function q_(t){for(const e of t.filters)if(e.dt())return e.field;return null}function K_(t){return t.collectionGroup!==null}function Ys(t){const e=$(t);if(e._t===null){e._t=[];const n=q_(e),s=H_(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Ns(n)),e._t.push(new Ns(Pe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ns(Pe.keyField(),i))}}}return e._t}function Mt(t){const e=$(t);if(!e.wt)if(e.limitType==="F")e.wt=yl(e.path,e.collectionGroup,Ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ys(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ns(i.field,o))}const s=e.endAt?new fi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new fi(e.startAt.position,e.startAt.inclusive):null;e.wt=yl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function ba(t,e,n){return new Wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gi(t,e){return Oc(Mt(t),Mt(e))&&t.limitType===e.limitType}function Cd(t){return`${Rc(Mt(t))}|lt:${t.limitType}`}function Ca(t){return`Query(target=${x_(Mt(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=vl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ys(n),s)||n.endAt&&!function(r,i,o){const a=vl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ys(n),s))}(t,e)}function z_(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sd(t){return(e,n)=>{let s=!1;for(const r of Ys(t)){const i=W_(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function W_(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?rs(a,c):B()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return B()}}/**
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
 */function Ad(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hi(e)?"-0":e}}function kd(t){return{integerValue:""+t}}function Dd(t,e){return N_(e)?kd(e):Ad(t,e)}/**
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
 */class Qi{constructor(){this._=void 0}}function G_(t,e,n){return t instanceof di?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Xs?Rd(t,e):t instanceof Js?Od(t,e):function(s,r){const i=Nd(s,r),o=El(i)+El(s.yt);return Ia(i)&&Ia(s.yt)?kd(o):Ad(s.It,o)}(t,e)}function Q_(t,e,n){return t instanceof Xs?Rd(t,e):t instanceof Js?Od(t,e):n}function Nd(t,e){return t instanceof Zs?Ia(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class di extends Qi{}class Xs extends Qi{constructor(e){super(),this.elements=e}}function Rd(t,e){const n=xd(e);for(const s of t.elements)n.some(r=>_t(r,s))||n.push(s);return{arrayValue:{values:n}}}class Js extends Qi{constructor(e){super(),this.elements=e}}function Od(t,e){let n=xd(e);for(const s of t.elements)n=n.filter(r=>!_t(r,s));return{arrayValue:{values:n}}}class Zs extends Qi{constructor(e,n){super(),this.It=e,this.yt=n}}function El(t){return me(t.integerValue||t.doubleValue)}function xd(t){return Nc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Y_{constructor(e,n){this.field=e,this.transform=n}}function X_(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Xs&&s instanceof Xs||n instanceof Js&&s instanceof Js?ns(n.elements,s.elements,_t):n instanceof Zs&&s instanceof Zs?_t(n.yt,s.yt):n instanceof di&&s instanceof di}(t.transform,e.transform)}class J_{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $r(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yi{}function Pd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ld(t.key,Nt.none()):new Xi(t.key,t.data,Nt.none());{const n=t.data,s=Ye.empty();let r=new _e(Pe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new On(t.key,s,new yt(r.toArray()),Nt.none())}}function Z_(t,e,n){t instanceof Xi?function(s,r,i){const o=s.value.clone(),a=Tl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof On?function(s,r,i){if(!$r(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Tl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Md(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Rs(t,e,n,s){return t instanceof Xi?function(r,i,o,a){if(!$r(r.precondition,i))return o;const c=r.value.clone(),u=bl(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof On?function(r,i,o,a){if(!$r(r.precondition,i))return o;const c=bl(r.fieldTransforms,a,i),u=i.data;return u.setAll(Md(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return $r(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function eE(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Nd(s.transform,r||null);i!=null&&(n===null&&(n=Ye.empty()),n.set(s.field,i))}return n||null}function Il(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ns(n,s,(r,i)=>X_(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xi extends Yi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class On extends Yi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Md(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Tl(t,e,n){const s=new Map;oe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Q_(o,a,n[r]))}return s}function bl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,G_(i,o,e))}return s}class Ld extends Yi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tE extends Yi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nE{constructor(e){this.count=e}}/**
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
 */var ge,W;function sE(t){switch(t){default:return B();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Ud(t){if(t===void 0)return Pt("GRPC error has no .code"),I.UNKNOWN;switch(t){case ge.OK:return I.OK;case ge.CANCELLED:return I.CANCELLED;case ge.UNKNOWN:return I.UNKNOWN;case ge.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ge.INTERNAL:return I.INTERNAL;case ge.UNAVAILABLE:return I.UNAVAILABLE;case ge.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ge.NOT_FOUND:return I.NOT_FOUND;case ge.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ge.ABORTED:return I.ABORTED;case ge.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ge.DATA_LOSS:return I.DATA_LOSS;default:return B()}}(W=ge||(ge={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Rn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _d(this.inner)}size(){return this.innerSize}}/**
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
 */const rE=new Ee(M.comparator);function Lt(){return rE}const Fd=new Ee(M.comparator);function Ts(...t){let e=Fd;for(const n of t)e=e.insert(n.key,n);return e}function Vd(t){let e=Fd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function pn(){return Os()}function Bd(){return Os()}function Os(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const iE=new Ee(M.comparator),oE=new _e(M.comparator);function K(...t){let e=oE;for(const n of t)e=e.add(n);return e}const aE=new _e(J);function $d(){return aE}/**
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
 */class Ji{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,yr.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ji(q.min(),s,$d(),Lt(),K())}}class yr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new yr(Re.EMPTY_BYTE_STRING,n,K(),K(),K())}}/**
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
 */class jr{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class jd{constructor(e,n){this.targetId=e,this.At=n}}class Hd{constructor(e,n,s=Re.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Cl{constructor(){this.Rt=0,this.bt=Al(),this.Pt=Re.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=K(),n=K(),s=K();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:B()}}),new yr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Al()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class cE{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Lt(),this.qt=Sl(),this.Kt=new _e(J)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(Ta(i))if(s===0){const o=new M(i.path);this.jt(n,o,Se.newNoDocument(o,q.min()))}else oe(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Ta(a.target)){const c=new M(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Se.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=K();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ji(e,n,this.Kt,this.Ut,s);return this.Ut=Lt(),this.qt=Sl(),this.Kt=new _e(J),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Cl,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new _e(J),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Cl),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Sl(){return new Ee(M.comparator)}function Al(){return new Ee(M.comparator)}/**
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
 */const uE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class hE{constructor(e,n){this.databaseId=e,this.gt=n}}function pi(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qd(t,e){return t.gt?e.toBase64():e.toUint8Array()}function fE(t,e){return pi(t,e.toTimestamp())}function Rt(t){return oe(!!t),q.fromTimestamp(function(e){const n=en(e);return new we(n.seconds,n.nanos)}(t))}function Mc(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Kd(t){const e=fe.fromString(t);return oe(Gd(e)),e}function Sa(t,e){return Mc(t.databaseId,e.path)}function Fo(t,e){const n=Kd(e);if(n.get(1)!==t.databaseId.projectId)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(zd(n))}function Aa(t,e){return Mc(t.databaseId,e)}function dE(t){const e=Kd(t);return e.length===4?fe.emptyPath():zd(e)}function ka(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zd(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kl(t,e,n){return{name:Sa(t,e),fields:n.value.mapValue.fields}}function pE(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.gt?(oe(u===void 0||typeof u=="string"),Re.fromBase64String(u||"")):(oe(u===void 0||u instanceof Uint8Array),Re.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:Ud(c.code);return new L(u,c.message||"")}(o);n=new Hd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Fo(t,s.document.name),i=Rt(s.document.updateTime),o=new Ye({mapValue:{fields:s.document.fields}}),a=Se.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new jr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Fo(t,s.document),i=s.readTime?Rt(s.readTime):q.min(),o=Se.newNoDocument(r,i),a=s.removedTargetIds||[];n=new jr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Fo(t,s.document),i=s.removedTargetIds||[];n=new jr([],i,r,null)}else{if(!("filter"in e))return B();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new nE(r),o=s.targetId;n=new jd(o,i)}}return n}function gE(t,e){let n;if(e instanceof Xi)n={update:kl(t,e.key,e.value)};else if(e instanceof Ld)n={delete:Sa(t,e.key)};else if(e instanceof On)n={update:kl(t,e.key,e.data),updateMask:CE(e.fieldMask)};else{if(!(e instanceof tE))return B();n={verify:Sa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof di)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Js)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zs)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw B()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:fE(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:B()}(t,e.precondition)),n}function mE(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Rt(s.updateTime):Rt(r);return i.isEqual(q.min())&&(i=Rt(r)),new J_(i,s.transformResults||[])}(n,e))):[]}function yE(t,e){return{documents:[Aa(t,e.path)]}}function vE(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Aa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Aa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(f){if(f.op==="=="){if(ml(f.value))return{unaryFilter:{field:Un(f.field),op:"IS_NAN"}};if(gl(f.value))return{unaryFilter:{field:Un(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(ml(f.value))return{unaryFilter:{field:Un(f.field),op:"IS_NOT_NAN"}};if(gl(f.value))return{unaryFilter:{field:Un(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(f.field),op:IE(f.op),value:f.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Un(l.field),direction:EE(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||zi(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function wE(t){let e=dE(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){oe(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Wd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(f){return new Ns($n(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(l)));let a=null;n.limit&&(a=function(l){let f;return f=typeof l=="object"?l.value:l,zi(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(l){const f=!!l.before,p=l.values||[];return new fi(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const f=!l.before,p=l.values||[];return new fi(p,f)}(n.endAt)),j_(e,r,o,i,a,"F",c,u)}function _E(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wd(t){return t?t.unaryFilter!==void 0?[bE(t)]:t.fieldFilter!==void 0?[TE(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Wd(e)).reduce((e,n)=>e.concat(n)):B():[]}function EE(t){return uE[t]}function IE(t){return lE[t]}function Un(t){return{fieldPath:t.canonicalString()}}function $n(t){return Pe.fromServerFormat(t.fieldPath)}function TE(t){return ze.create($n(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}function bE(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$n(t.unaryFilter.field);return ze.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$n(t.unaryFilter.field);return ze.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$n(t.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$n(t.unaryFilter.field);return ze.create(r,"!=",{nullValue:"NULL_VALUE"});default:return B()}}function CE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class SE{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Z_(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Rs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Rs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Bd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Pd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,s)=>Il(n,s))&&ns(this.baseMutations,e.baseMutations,(n,s)=>Il(n,s))}}class Lc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){oe(e.mutations.length===s.length);let r=iE;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Lc(e,n,s,r)}}/**
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
 */class AE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wn{constructor(e,n,s,r,i=q.min(),o=q.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class kE{constructor(e){this.re=e}}function DE(t){const e=wE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ba(e,e.limit,"L"):e}/**
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
 */class NE{constructor(){this.Ye=new RE}addToCollectionParentIndex(e,n){return this.Ye.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Zt.min())}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class RE{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _e(fe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(fe.comparator)).toArray()}}/**
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
 */class is{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new is(0)}static vn(){return new is(-1)}}/**
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
 */class OE{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xE{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PE{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Rs(s.mutation,r,yt.empty(),we.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,K()).next(()=>s))}getLocalViewOfDocuments(e,n,s=K()){const r=pn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ts();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=pn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,K()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Lt();const o=Os(),a=Os();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof On)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Rs(l.mutation,u,l.mutation.getFieldMask(),we.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var f;return a.set(u,new xE(l,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Os();let r=new Ee((o,a)=>o-a),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||yt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const f=(r.get(a.batchId)||K()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,f=Bd();l.forEach(p=>{if(!i.has(p)){const g=Pd(n.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):K_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):_.resolve(pn());let a=-1,c=i;return o.next(u=>_.forEach(u,(l,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(l)?_.resolve():this.getBaseDocument(e,l,f).next(p=>{c=c.insert(l,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,K())).next(l=>({batchId:a,changes:Vd(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=Ts();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ts();return this.indexManager.getCollectionParents(e,r).next(o=>_.forEach(o,a=>{const c=function(u,l){return new Wi(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,f)=>{i=i.insert(l,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Se.newInvalidDocument(u)))});let o=Ts();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Rs(u.mutation,c,yt.empty(),we.now()),Pc(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(Se.newInvalidDocument(n))}}/**
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
 */class ME{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return _.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Rt(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:DE(s.bundledQuery),readTime:Rt(s.readTime)}}(n)),_.resolve()}}/**
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
 */class LE{constructor(){this.overlays=new Ee(M.comparator),this.es=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const s=pn();return _.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const r=pn(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return _.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ee((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=pn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=pn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return _.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new AE(n,s));let i=this.es.get(n);i===void 0&&(i=K(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Uc{constructor(){this.ns=new _e(Ie.ss),this.rs=new _e(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new M(new fe([])),s=new Ie(n,e),r=new Ie(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new fe([])),s=new Ie(n,e),r=new Ie(n,e+1);let i=K();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ie(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||J(e._s,n._s)}static os(e,n){return J(e._s,n._s)||M.comparator(e.key,n.key)}}/**
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
 */class UE{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new _e(Ie.ss)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SE(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),r=new Ie(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(J);return n.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),_.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new M(i),0);let a=new _e(J);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),_.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return _.forEach(n.mutations,r=>{const i=new Ie(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ie(n,0),r=this.gs.firstAfterOrEqual(s);return _.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FE{constructor(e){this.Es=e,this.docs=new Ee(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():Se.newInvalidDocument(n))}getEntries(e,n){let s=Lt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Se.newInvalidDocument(r))}),_.resolve(s)}getAllFromCollection(e,n,s){let r=Lt();const i=new M(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||C_(b_(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return _.resolve(r)}getAllFromCollectionGroup(e,n,s,r){B()}As(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new VE(this)}getSize(e){return _.resolve(this.size)}}class VE extends OE{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class BE{constructor(e){this.persistence=e,this.Rs=new ms(n=>Rc(n),Oc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Uc,this.targetCount=0,this.vs=is.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),_.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new is(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Dn(n),_.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),_.waitFor(i).next(()=>r)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.Ps.containsKey(n))}}/**
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
 */class $E{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Dc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new BE(this),this.indexManager=new NE,this.remoteDocumentCache=function(s){return new FE(s)}(s=>this.referenceDelegate.xs(s)),this.It=new kE(n),this.Ns=new ME(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new UE(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){R("MemoryPersistence","Starting transaction:",e);const r=new jE(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return _.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class jE extends A_{constructor(e){super(),this.currentSequenceNumber=e}}class Fc{constructor(e){this.persistence=e,this.Fs=new Uc,this.$s=null}static Bs(e){return new Fc(e)}get Ls(){if(this.$s)return this.$s;throw B()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),_.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ls,s=>{const r=M.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return _.or([()=>_.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Vc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=K(),r=K();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vc(e,n.fromCache,s,r)}}/**
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
 */class HE{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(_l(n))return _.resolve(null);let s=Mt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ba(n,null,"F"),s=Mt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=K(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,ba(n,null,"F")):this.Bi(e,u,n,c)}))})))}Mi(e,n,s,r){return _l(n)||r.isEqual(q.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(ll()<=Y.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ca(n)),this.Bi(e,o,n,T_(r,-1)))})}Fi(e,n){let s=new _e(Sd(e));return n.forEach((r,i)=>{Pc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return ll()<=Y.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Ca(n)),this.Ni.getDocumentsMatchingQuery(e,n,Zt.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class qE{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Ee(J),this.qi=new ms(i=>Rc(i),Oc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PE(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function KE(t,e,n,s){return new qE(t,e,n,s)}async function Qd(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=K();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function zE(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,f=l.keys();let p=_.resolve();return f.forEach(g=>{p=p.next(()=>u.getEntry(a,g)).next(E=>{const k=c.docVersions.get(g);oe(k!==null),E.version.compareTo(k)<0&&(l.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=K();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Yd(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function WE(t,e){const n=$(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((l,f)=>{const p=r.get(f);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(Re.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(f,g),function(E,k,S){return E.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=Lt(),u=K();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(GE(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(q.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(f=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=r,i))}function GE(t,e,n){let s=K(),r=K();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Lt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function QE(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function YE(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,_.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new wn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Da(t,e,n){const s=$(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!mr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Dl(t,e,n){const s=$(t);let r=q.min(),i=K();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=$(a),f=l.qi.get(u);return f!==void 0?_.resolve(l.Ui.get(f)):l.Cs.getTargetData(c,u)}(s,o,Mt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:q.min(),n?i:K())).next(a=>(XE(s,z_(e),a),{documents:a,Hi:i})))}function XE(t,e,n){let s=q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Nl{constructor(){this.activeTargetIds=$d()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JE{constructor(){this.Lr=new Nl,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Nl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZE{qr(e){}shutdown(){}}/**
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
 */class Rl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const eI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class tI{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class nI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);R("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(R("RestConnection","Received: ",c),c),c=>{throw hl("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+gs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=eI[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new d_;a.listenOnce(l_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Uo.NO_ERROR:const u=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Uo.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new L(I.DEADLINE_EXCEEDED,"Request time out"));break;case Uo.HTTP_ERROR:const l=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const p=function(g){const E=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(E)>=0?E:I.UNKNOWN}(f.status);o(new L(p,f.message))}else o(new L(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(I.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=c_(),o=u_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new f_({})),this.ho(a.initMessageHeaders,n,s),cf()||lf()||zy()||hf()||Wy()||uf()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");R("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,f=!1;const p=new tI({Hr:E=>{f?R("Connection","Not sending because WebChannel is closed:",E):(l||(R("Connection","Opening WebChannel transport."),u.open(),l=!0),R("Connection","WebChannel sending:",E),u.send(E))},Jr:()=>u.close()}),g=(E,k,S)=>{E.listen(k,P=>{try{S(P)}catch(Z){setTimeout(()=>{throw Z},0)}})};return g(u,xr.EventType.OPEN,()=>{f||R("Connection","WebChannel transport opened.")}),g(u,xr.EventType.CLOSE,()=>{f||(f=!0,R("Connection","WebChannel transport closed"),p.io())}),g(u,xr.EventType.ERROR,E=>{f||(f=!0,hl("Connection","WebChannel transport errored:",E),p.io(new L(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,xr.EventType.MESSAGE,E=>{var k;if(!f){const S=E.data[0];oe(!!S);const P=S,Z=P.error||((k=P[0])===null||k===void 0?void 0:k.error);if(Z){R("Connection","WebChannel received error:",Z);const ee=Z.status;let te=function(Ze){const Ge=ge[Ze];if(Ge!==void 0)return Ud(Ge)}(ee),pe=Z.message;te===void 0&&(te=I.INTERNAL,pe="Unknown error status: "+ee+" with message "+Z.message),f=!0,p.io(new L(te,pe)),u.close()}else R("Connection","WebChannel received:",S),p.ro(S)}}),g(o,h_.STAT_EVENT,E=>{E.stat===cl.PROXY?R("Connection","Detected buffering proxy"):E.stat===cl.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function Vo(){return typeof document<"u"?document:null}/**
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
 */function Zi(t){return new hE(t,!0)}class Xd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&R("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Jd{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Xd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Pt(n.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new L(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sI extends Jd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=pE(this.It,e),s=function(r){if(!("targetChange"in r))return q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?q.min():i.readTime?Rt(i.readTime):q.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=ka(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Ta(a)?{documents:yE(r,a)}:{query:vE(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=qd(r,i.resumeToken):i.snapshotVersion.compareTo(q.min())>0&&(o.readTime=pi(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=_E(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=ka(this.It),n.removeTarget=e,this.Bo(n)}}class rI extends Jd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=mE(e.writeResults,e.commitTime),s=Rt(e.commitTime);return this.listener.Zo(s,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ka(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>gE(this.It,s))};this.Bo(n)}}/**
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
 */class iI extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(I.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(I.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class oI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Pt(n),this.ou=!1):R("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class aI{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{xn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=$(a);c._u.add(4),await vr(c),c.gu.set("Unknown"),c._u.delete(4),await eo(c)}(this))})}),this.gu=new oI(s,r)}}async function eo(t){if(xn(t))for(const e of t.wu)await e(!0)}async function vr(t){for(const e of t.wu)await e(!1)}function Zd(t,e){const n=$(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),jc(n)?$c(n):ys(n).ko()&&Bc(n,e))}function ep(t,e){const n=$(t),s=ys(n);n.du.delete(e),s.ko()&&tp(n,e),n.du.size===0&&(s.ko()?s.Fo():xn(n)&&n.gu.set("Unknown"))}function Bc(t,e){t.yu.Ot(e.targetId),ys(t).zo(e)}function tp(t,e){t.yu.Ot(e),ys(t).Ho(e)}function $c(t){t.yu=new cE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ys(t).start(),t.gu.uu()}function jc(t){return xn(t)&&!ys(t).No()&&t.du.size>0}function xn(t){return $(t)._u.size===0}function np(t){t.yu=void 0}async function cI(t){t.du.forEach((e,n)=>{Bc(t,e)})}async function uI(t,e){np(t),jc(t)?(t.gu.hu(e),$c(t)):t.gu.set("Unknown")}async function lI(t,e,n){if(t.gu.set("Online"),e instanceof Hd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await gi(t,s)}else if(e instanceof jr?t.yu.Gt(e):e instanceof jd?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(q.min()))try{const s=await Yd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Re.EMPTY_BYTE_STRING,c.snapshotVersion)),tp(r,a);const u=new wn(c.target,a,1,c.sequenceNumber);Bc(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){R("RemoteStore","Failed to raise snapshot:",s),await gi(t,s)}}async function gi(t,e,n){if(!mr(e))throw e;t._u.add(1),await vr(t),t.gu.set("Offline"),n||(n=()=>Yd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await eo(t)})}function sp(t,e){return e().catch(n=>gi(t,n,e))}async function to(t){const e=$(t),n=tn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;hI(e);)try{const r=await QE(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,fI(e,r)}catch(r){await gi(e,r)}rp(e)&&ip(e)}function hI(t){return xn(t)&&t.fu.length<10}function fI(t,e){t.fu.push(e);const n=tn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function rp(t){return xn(t)&&!tn(t).No()&&t.fu.length>0}function ip(t){tn(t).start()}async function dI(t){tn(t).eu()}async function pI(t){const e=tn(t);for(const n of t.fu)e.Xo(n.mutations)}async function gI(t,e,n){const s=t.fu.shift(),r=Lc.from(s,e,n);await sp(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await to(t)}async function mI(t,e){e&&tn(t).Yo&&await async function(n,s){if(r=s.code,sE(r)&&r!==I.ABORTED){const i=n.fu.shift();tn(n).Oo(),await sp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await to(n)}var r}(t,e),rp(t)&&ip(t)}async function Ol(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const s=xn(n);n._u.add(3),await vr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await eo(n)}async function yI(t,e){const n=$(t);e?(n._u.delete(2),await eo(n)):e||(n._u.add(2),await vr(n),n.gu.set("Unknown"))}function ys(t){return t.pu||(t.pu=function(e,n,s){const r=$(e);return r.su(),new sI(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:cI.bind(null,t),Zr:uI.bind(null,t),Wo:lI.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),jc(t)?$c(t):t.gu.set("Unknown")):(await t.pu.stop(),np(t))})),t.pu}function tn(t){return t.Iu||(t.Iu=function(e,n,s){const r=$(e);return r.su(),new rI(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:dI.bind(null,t),Zr:mI.bind(null,t),tu:pI.bind(null,t),Zo:gI.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await to(t)):(await t.Iu.stop(),t.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Hc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Hc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(t,e){if(Pt("AsyncQueue",`${e}: ${t}`),mr(t))return new L(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=Ts(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Gn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class xl{constructor(){this.Tu=new Ee(M.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):B():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class os{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new os(e,n,Gn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class vI{constructor(){this.Au=void 0,this.listeners=[]}}class wI{constructor(){this.queries=new ms(e=>Cd(e),Gi),this.onlineState="Unknown",this.Ru=new Set}}async function _I(t,e){const n=$(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new vI),r)try{i.Au=await n.onListen(s)}catch(o){const a=qc(o,`Initialization of query '${Ca(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Kc(n)}async function EI(t,e){const n=$(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function II(t,e){const n=$(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Kc(n)}function TI(t,e,n){const s=$(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Kc(t){t.Ru.forEach(e=>{e.next()})}class bI{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new os(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class op{constructor(e){this.key=e}}class ap{constructor(e){this.key=e}}class CI{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=K(),this.mutatedKeys=K(),this.Ku=Sd(e),this.Gu=new Gn(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new xl,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,f)=>{const p=r.get(l),g=Pc(this.query,f)?f:null,E=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;p&&g?p.data.isEqual(g.data)?E!==k&&(s.track({type:3,doc:g}),S=!0):this.zu(p,g)||(s.track({type:2,doc:g}),S=!0,(c&&this.Ku(g,c)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),S=!0):p&&!g&&(s.track({type:1,doc:p}),S=!0,(c||u)&&(a=!0)),S&&(g?(o=o.add(g),i=k?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((u,l)=>function(f,p){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return g(f)-g(p)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new os(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new xl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=K(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new ap(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new op(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=K();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return os.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class SI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class AI{constructor(e){this.key=e,this.ec=!1}}class kI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ms(a=>Cd(a),Gi),this.ic=new Map,this.rc=new Set,this.oc=new Ee(M.comparator),this.uc=new Map,this.cc=new Uc,this.ac={},this.hc=new Map,this.lc=is.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function DI(t,e){const n=VI(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await YE(n.localStore,Mt(e));n.isPrimaryClient&&Zd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await NI(n,e,s,a==="current")}return r}async function NI(t,e,n,s){t.dc=(l,f,p)=>async function(g,E,k,S){let P=E.view.ju(k);P.$i&&(P=await Dl(g.localStore,E.query,!1).then(({documents:te})=>E.view.ju(te,P)));const Z=S&&S.targetChanges.get(E.targetId),ee=E.view.applyChanges(P,g.isPrimaryClient,Z);return Ml(g,E.targetId,ee.Yu),ee.snapshot}(t,l,f,p);const r=await Dl(t.localStore,e,!0),i=new CI(e,r.Hi),o=i.ju(r.documents),a=yr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Ml(t,n,c.Yu);const u=new SI(e,n,i);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function RI(t,e){const n=$(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Gi(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Da(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ep(n.remoteStore,s.targetId),Na(n,s.targetId)}).catch(gr)):(Na(n,s.targetId),await Da(n.localStore,s.targetId,!0))}async function OI(t,e,n){const s=BI(t);try{const r=await function(i,o){const a=$(i),c=we.now(),u=o.reduce((p,g)=>p.add(g.key),K());let l,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Lt(),E=K();return a.Gi.getEntries(p,u).next(k=>{g=k,g.forEach((S,P)=>{P.isValidDocument()||(E=E.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(k=>{l=k;const S=[];for(const P of o){const Z=eE(P,l.get(P.key).overlayedDocument);Z!=null&&S.push(new On(P.key,Z,Td(Z.value.mapValue),Nt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,S,o)}).next(k=>{f=k;const S=k.applyToLocalDocumentSet(l,E);return a.documentOverlayCache.saveOverlays(p,k.batchId,S)})}).then(()=>({batchId:f.batchId,changes:Vd(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Ee(J)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await wr(s,r.changes),await to(s.remoteStore)}catch(r){const i=qc(r,"Failed to persist write");n.reject(i)}}async function cp(t,e){const n=$(t);try{const s=await WE(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?oe(o.ec):r.removedDocuments.size>0&&(oe(o.ec),o.ec=!1))}),await wr(n,s,e)}catch(s){await gr(s)}}function Pl(t,e,n){const s=$(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=$(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const f of l.listeners)f.bu(o)&&(c=!0)}),c&&Kc(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xI(t,e,n){const s=$(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Ee(M.comparator);o=o.insert(i,Se.newNoDocument(i,q.min()));const a=K().add(i),c=new Ji(q.min(),new Map,new _e(J),o,a);await cp(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),zc(s)}else await Da(s.localStore,e,!1).then(()=>Na(s,e,n)).catch(gr)}async function PI(t,e){const n=$(t),s=e.batch.batchId;try{const r=await zE(n.localStore,e);lp(n,s,null),up(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await wr(n,r)}catch(r){await gr(r)}}async function MI(t,e,n){const s=$(t);try{const r=await function(i,o){const a=$(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(oe(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);lp(s,e,n),up(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await wr(s,r)}catch(r){await gr(r)}}function up(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function lp(t,e,n){const s=$(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Na(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||hp(t,s)})}function hp(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(ep(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),zc(t))}function Ml(t,e,n){for(const s of n)s instanceof op?(t.cc.addReference(s.key,e),LI(t,s)):s instanceof ap?(R("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||hp(t,s.key)):B()}function LI(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(R("SyncEngine","New document in limbo: "+n),t.rc.add(s),zc(t))}function zc(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new M(fe.fromString(e)),s=t.lc.next();t.uc.set(s,new AI(n)),t.oc=t.oc.insert(n,s),Zd(t.remoteStore,new wn(Mt(xc(n.path)),s,2,Dc.at))}}async function wr(t,e,n){const s=$(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=Vc.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const u=$(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>_.forEach(c,f=>_.forEach(f.Si,p=>u.persistence.referenceDelegate.addReference(l,f.targetId,p)).next(()=>_.forEach(f.Di,p=>u.persistence.referenceDelegate.removeReference(l,f.targetId,p)))))}catch(l){if(!mr(l))throw l;R("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const f=l.targetId;if(!l.fromCache){const p=u.Ui.get(f),g=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(f,E)}}}(s.localStore,i))}async function UI(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const s=await Qd(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new L(I.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await wr(n,s.ji)}}function FI(t,e){const n=$(t),s=n.uc.get(e);if(s&&s.ec)return K().add(s.key);{let r=K();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function VI(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xI.bind(null,e),e.nc.Wo=II.bind(null,e.eventManager),e.nc._c=TI.bind(null,e.eventManager),e}function BI(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MI.bind(null,e),e}class $I{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Zi(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return KE(this.persistence,new HE,e.initialUser,this.It)}gc(e){return new $E(Fc.Bs,this.It)}mc(e){return new JE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=UI.bind(null,this.syncEngine),await yI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wI}createDatastore(e){const n=Zi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new nI(r));var r;return function(i,o,a,c){return new iI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Pl(this.syncEngine,a,0),o=Rl.C()?new Rl:new ZE,new aI(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new kI(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$(e);R("RemoteStore","RemoteStore shutting down."),n._u.add(5),await vr(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */class HI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Pt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ke.UNAUTHENTICATED,this.clientId=wd.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=qc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function KI(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Qd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function zI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WI(t);R("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ol(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ol(e.remoteStore,i)),t.onlineComponents=e}async function WI(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await KI(t,new $I)),t.offlineComponents}async function fp(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await zI(t,new jI)),t.onlineComponents}function GI(t){return fp(t).then(e=>e.syncEngine)}async function Ll(t){const e=await fp(t),n=e.eventManager;return n.onListen=DI.bind(null,e.syncEngine),n.onUnlisten=RI.bind(null,e.syncEngine),n}const Ul=new Map;/**
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
 */function QI(t,e,n){if(!n)throw new L(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YI(t,e,n,s){if(e===!0&&s===!0)throw new L(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fl(t){if(!M.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function xs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new L(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Vl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class dp{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new g_;switch(n.type){case"gapi":const s=n.client;return new v_(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ul.get(e);n&&(R("ComponentProvider","Removing Datastore"),Ul.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class st{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class no{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new no(this.firestore,e,this._query)}}class er extends no{constructor(e,n,s){super(e,n,xc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new M(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function XI(t,e,...n){if(t=We(t),arguments.length===1&&(e=wd.R()),QI("doc","path",e),t instanceof dp){const s=fe.fromString(e,...n);return Fl(s),new st(t,null,new M(s))}{if(!(t instanceof st||t instanceof er))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return Fl(s),new st(t.firestore,t instanceof er?t.converter:null,new M(s))}}/**
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
 */class JI{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Xd(this,"async_queue_retry"),this.jc=()=>{const n=Vo();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Vo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Vo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new vn;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!mr(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Pt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=Hc.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&B()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Bl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class mi extends dp{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new JI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gp(this),this._firestoreClient.terminate()}}function ZI(t,e){const n=typeof t=="object"?t:mf(),s=typeof t=="string"?t:e||"(default)";return sc(n,"firestore").getImmediate({identifier:s})}function pp(t){return t._firestoreClient||gp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gp(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new D_(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new qI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class so{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(Re.fromBase64String(e))}catch(n){throw new L(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ro{constructor(e){this._methodName=e}}/**
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
 */class Gc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const e0=/^__.*__$/;class mp{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new On(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Qc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Qc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return yi(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(yp(this.na)&&e0.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class t0{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Zi(e)}fa(e,n,s,r=!1){return new Qc({na:e,methodName:n,la:s,path:Pe.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function n0(t){const e=t._freezeSettings(),n=Zi(t._databaseId);return new t0(t._databaseId,!!e.ignoreUndefinedProperties,n)}class io extends ro{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof io}}class s0 extends ro{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=new Zs(e.It,Dd(e.It,this._a));return new Y_(e.path,n)}isEqual(e){return this===e}}function r0(t,e,n,s){const r=t.fa(1,e,n);wp("Data must be an object, but it was:",r,s);const i=[],o=Ye.empty();Rn(s,(c,u)=>{const l=Yc(e,c,n);u=We(u);const f=r.ua(l);if(u instanceof io)i.push(l);else{const p=oo(u,f);p!=null&&(i.push(l),o.set(l,p))}});const a=new yt(i);return new mp(o,a,r.fieldTransforms)}function i0(t,e,n,s,r,i){const o=t.fa(1,e,n),a=[$l(e,s,n)],c=[r];if(i.length%2!=0)throw new L(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push($l(e,i[p])),c.push(i[p+1]);const u=[],l=Ye.empty();for(let p=a.length-1;p>=0;--p)if(!c0(u,a[p])){const g=a[p];let E=c[p];E=We(E);const k=o.ua(g);if(E instanceof io)u.push(g);else{const S=oo(E,k);S!=null&&(u.push(g),l.set(g,S))}}const f=new yt(u);return new mp(l,f,o.fieldTransforms)}function oo(t,e){if(vp(t=We(t)))return wp("Unsupported field value:",e,t),o0(t,e);if(t instanceof ro)return function(n,s){if(!yp(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=oo(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=We(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Dd(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=we.fromDate(n);return{timestampValue:pi(s.It,r)}}if(n instanceof we){const r=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pi(s.It,r)}}if(n instanceof Gc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof as)return{bytesValue:qd(s.It,n._byteString)};if(n instanceof st){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Mc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${Wc(n)}`)}(t,e)}function o0(t,e){const n={};return _d(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rn(t,(s,r)=>{const i=oo(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function vp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Gc||t instanceof as||t instanceof st||t instanceof ro)}function wp(t,e,n){if(!vp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Wc(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function $l(t,e,n){if((e=We(e))instanceof so)return e._internalPath;if(typeof e=="string")return Yc(t,e);throw yi("Field path arguments must be of type string or ",t,!1,void 0,n)}const a0=new RegExp("[~\\*/\\[\\]]");function Yc(t,e,n){if(e.search(a0)>=0)throw yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new so(...e.split("."))._internalPath}catch{throw yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(I.INVALID_ARGUMENT,a+t+c)}function c0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _p{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class u0 extends _p{data(){return super.data()}}function Ep(t,e){return typeof e=="string"?Yc(t,e):e instanceof so?e._internalPath:e._delegate._internalPath}/**
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
 */class bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ip extends _p{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ep("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Hr extends Ip{data(e={}){return super.data(e)}}class l0{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new bs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Hr(this._firestore,this._userDataWriter,s.key,s,new bs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Hr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Hr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:h0(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function h0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
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
 */function f0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class d0{convertValue(e,n="none"){switch(kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const s={};return Rn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Gc(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Id(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ws(e));default:return null}}convertTimestamp(e){const n=en(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=fe.fromString(e);oe(Gd(s));const r=new Gs(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||Pt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class Tp extends d0{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function p0(t,e,n,...s){t=xs(t,st);const r=xs(t.firestore,mi),i=n0(r);let o;return o=typeof(e=We(e))=="string"||e instanceof so?i0(i,"updateDoc",t._key,e,n,s):r0(i,"updateDoc",t._key,e),m0(r,[o.toMutation(t._key,Nt.exists(!0))])}function g0(t,...e){var n,s,r;t=We(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Bl(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,l;if(t instanceof st)u=xs(t.firestore,mi),l=xc(t._key.path),c={next:f=>{e[o]&&e[o](y0(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=xs(t,no);u=xs(f.firestore,mi),l=f._query;const p=new Tp(u);c={next:g=>{e[o]&&e[o](new l0(u,p,f,g))},error:e[o+1],complete:e[o+2]},f0(t._query)}return function(f,p,g,E){const k=new HI(E),S=new bI(p,k,g);return f.asyncQueue.enqueueAndForget(async()=>_I(await Ll(f),S)),()=>{k.Rc(),f.asyncQueue.enqueueAndForget(async()=>EI(await Ll(f),S))}}(pp(u),l,a,c)}function m0(t,e){return function(n,s){const r=new vn;return n.asyncQueue.enqueueAndForget(async()=>OI(await GI(n),s,r)),r.promise}(pp(t),e)}function y0(t,e,n){const s=n.docs.get(e._key),r=new Tp(t);return new Ip(t,r,e._key,s,new bs(n.hasPendingWrites,n.fromCache),e.converter)}function v0(t){return new s0("increment",t)}(function(t,e=!0){(function(n){gs=n})(ir),es(new In("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new mi(new m_(n.getProvider("auth-internal")),new __(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Yt(ul,"3.4.15",t),Yt(ul,"3.4.15","esm2017")})();function w0(){const t=Ch(0),e=XI(ZI(),"counter","JPk5xNLIe0yww0g9VejV");return g0(e,function(s){const r=s.data();t.value=r.value}),{count:t,increment:async()=>{await p0(e,{value:v0(1)})}}}var _0="firebase",E0="9.9.4";/**
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
 */Yt(_0,E0,"app");const Bo={apiKey:"AIzaSyCsLrBhQ_av_rext-ob38nZQhEhZASE6fE",authDomain:"planning-6317a.firebaseapp.com",projectId:"planning-6317a",storageBucket:"planning-6317a.appspot.com",messagingSenderId:"883064645820",appId:"1:883064645820:web:5bf2507629120159a548b9",measurementId:"G-6YDFBF3WXE"};function bp(){if(!Bo||!Bo.apiKey)throw new Error(`No Firebase configuration object provided.
Add your web app's configuration object to firebase-config.js`);return Bo}function Xc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Cp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I0=Cp,Sp=new sr("auth","Firebase",Cp());/**
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
 */const jl=new tc("@firebase/auth");function qr(t,...e){jl.logLevel<=Y.ERROR&&jl.error(`Auth (${ir}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw Jc(t,...e)}function vt(t,...e){return Jc(t,...e)}function Ap(t,e,n){const s=Object.assign(Object.assign({},I0()),{[e]:n});return new sr("auth","Firebase",s).create(e,{appName:t.name})}function T0(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Et(t,"argument-error"),Ap(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sp.create(t,...e)}function V(t,e,...n){if(!t)throw Jc(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qr(e),new Error(e)}function Ut(t,e){t||kt(e)}/**
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
 */const Hl=new Map;function Dt(t){Ut(t instanceof Function,"Expected a class definition");let e=Hl.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hl.set(t,e),e)}/**
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
 */function b0(t,e){const n=sc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ei(i,e!=null?e:{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function C0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function S0(){return ql()==="http:"||ql()==="https:"}function ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function A0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S0()||uf()||"connection"in navigator)?navigator.onLine:!0}function k0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _r{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=cf()||lf()}get(){return A0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zc(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const D0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const N0=new _r(3e4,6e4);function R0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ao(t,e,n,s,r={}){return Dp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=rr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kp.fetch()(Np(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Dp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},D0),e);try{const r=new x0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Lr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Lr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Lr(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ap(t,l,u);Et(t,l)}}catch(r){if(r instanceof Vt)throw r;Et(t,"network-request-failed")}}async function O0(t,e,n,s,r={}){const i=await ao(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Np(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Zc(t.config,r):`${t.config.apiScheme}://${r}`}class x0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(vt(this.auth,"network-request-failed")),N0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=vt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function P0(t,e){return ao(t,"POST","/v1/accounts:delete",e)}async function M0(t,e){return ao(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ps(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L0(t,e=!1){const n=We(t),s=await n.getIdToken(e),r=eu(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ps($o(r.auth_time)),issuedAtTime:Ps($o(r.iat)),expirationTime:Ps($o(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $o(t){return Number(t)*1e3}function eu(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return qr("JWT malformed, contained fewer than 3 sections"),null;try{const i=qy(s);return i?JSON.parse(i):(qr("Failed to decode base64 JWT payload"),null)}catch(i){return qr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function U0(t){const e=eu(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vt&&F0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function F0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class V0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await tr(t,M0(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?j0(i.providerUserInfo):[],a=$0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function B0(t){const e=We(t);await vi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function j0(t){return t.map(e=>{var{providerId:n}=e,s=Xc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function H0(t,e){const n=await Dp(t,{},async()=>{const s=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Np(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):U0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await H0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new nr;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function jt(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return L0(this,e)}reload(){return B0(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await vi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tr(this,P0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,Z=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:ee,emailVerified:te,isAnonymous:pe,providerData:Ze,stsTokenManager:Ge}=n;V(ee&&Ge,e,"internal-error");const z=nr.fromJSON(this.name,Ge);V(typeof ee=="string",e,"internal-error"),jt(f,e.name),jt(p,e.name),V(typeof te=="boolean",e,"internal-error"),V(typeof pe=="boolean",e,"internal-error"),jt(g,e.name),jt(E,e.name),jt(k,e.name),jt(S,e.name),jt(P,e.name),jt(Z,e.name);const re=new _n({uid:ee,auth:e,email:p,emailVerified:te,displayName:f,isAnonymous:pe,photoURL:E,phoneNumber:g,tenantId:k,stsTokenManager:z,createdAt:P,lastLoginAt:Z});return Ze&&Array.isArray(Ze)&&(re.providerData=Ze.map(le=>Object.assign({},le))),S&&(re._redirectEventId=S),re}static async _fromIdTokenResponse(e,n,s=!1){const r=new nr;r.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await vi(i),i}}/**
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
 */class Op{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Op.type="NONE";const Kl=Op;/**
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
 */function Kr(t,e,n){return`firebase:${t}:${e}:${n}`}class Qn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Kr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Kr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Qn(Dt(Kl),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Dt(Kl);const o=Kr(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=_n._fromJSON(e,l);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Qn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Qn(i,e,s))}}/**
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
 */function zl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Up(e))return"Blackberry";if(Fp(e))return"Webos";if(tu(e))return"Safari";if((e.includes("chrome/")||Pp(e))&&!e.includes("edge/"))return"Chrome";if(Lp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xp(t=Te()){return/firefox\//i.test(t)}function tu(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pp(t=Te()){return/crios\//i.test(t)}function Mp(t=Te()){return/iemobile/i.test(t)}function Lp(t=Te()){return/android/i.test(t)}function Up(t=Te()){return/blackberry/i.test(t)}function Fp(t=Te()){return/webos/i.test(t)}function co(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function q0(t=Te()){var e;return co(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function K0(){return hf()&&document.documentMode===10}function Vp(t=Te()){return co(t)||Lp(t)||Fp(t)||Up(t)||/windows phone/i.test(t)||Mp(t)}function z0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Bp(t,e=[]){let n;switch(t){case"Browser":n=zl(Te());break;case"Worker":n=`${zl(Te())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${s}`}/**
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
 */class W0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class G0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wl(this),this.idTokenSubscription=new Wl(this),this.beforeStateQueue=new W0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await vi(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function nu(t){return We(t)}class Wl{constructor(e){this.auth=e,this.observer=null,this.addObserver=ev(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class $p{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
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
 */async function Yn(t,e){return O0(t,"POST","/v1/accounts:signInWithIdp",R0(t,e))}/**
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
 */const Q0="http://localhost";class Dn extends $p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Xc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Dn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Yn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}buildRequest(){const e={requestUri:Q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rr(n)}return e}}/**
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
 */class su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Er extends su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qt extends Er{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
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
 */class St extends Er{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return St.credential(n,s)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
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
 */class Kt extends Er{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
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
 */class zt extends Er{constructor(){super("twitter.com")}static credential(e,n){return Dn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return zt.credential(n,s)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
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
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await _n._fromIdTokenResponse(e,s,r),o=Gl(s);return new cs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Gl(s);return new cs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Gl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wi extends Vt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,wi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new wi(e,n,s,r)}}function jp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wi._fromErrorAndOperation(t,i,e,s):i})}async function Y0(t,e,n=!1){const s=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",s)}/**
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
 */async function X0(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await tr(t,jp(r,i,e,t),n);V(o.idToken,r,"internal-error");const a=eu(o.idToken);V(a,r,"internal-error");const{sub:c}=a;return V(t.uid===c,r,"user-mismatch"),cs._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),o}}/**
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
 */async function J0(t,e,n=!1){const s="signIn",r=await jp(t,s,e),i=await cs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Z0(t,e,n,s){return We(t).onAuthStateChanged(e,n,s)}function eT(t){return We(t).signOut()}const _i="__sak";/**
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
 */class Hp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_i,"1"),this.storage.removeItem(_i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tT(){const t=Te();return tu(t)||co(t)}const nT=1e3,sT=10;class qp extends Hp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tT()&&z0(),this.fallbackToPolling=Vp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);K0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,sT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qp.type="LOCAL";const rT=qp;/**
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
 */class Kp extends Hp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kp.type="SESSION";const zp=Kp;/**
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
 */function iT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new uo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await iT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uo.receivers=[];/**
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
 */function ru(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class oT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ru("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wt(){return window}function aT(t){wt().location.href=t}/**
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
 */function Wp(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function cT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lT(){return Wp()?self:null}/**
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
 */const Gp="firebaseLocalStorageDb",hT=1,Ei="firebaseLocalStorage",Qp="fbase_key";class Ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lo(t,e){return t.transaction([Ei],e?"readwrite":"readonly").objectStore(Ei)}function fT(){const t=indexedDB.deleteDatabase(Gp);return new Ir(t).toPromise()}function Oa(){const t=indexedDB.open(Gp,hT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ei,{keyPath:Qp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ei)?e(s):(s.close(),await fT(),e(await Oa()))})})}async function Ql(t,e,n){const s=lo(t,!0).put({[Qp]:e,value:n});return new Ir(s).toPromise()}async function dT(t,e){const n=lo(t,!1).get(e),s=await new Ir(n).toPromise();return s===void 0?null:s.value}function Yl(t,e){const n=lo(t,!0).delete(e);return new Ir(n).toPromise()}const pT=800,gT=3;class Yp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>gT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uo._getInstance(lT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cT(),!this.activeServiceWorker)return;this.sender=new oT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oa();return await Ql(e,_i,"1"),await Yl(e,_i),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ql(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>dT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=lo(r,!1).getAll();return new Ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yp.type="LOCAL";const mT=Yp;/**
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
 */function yT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vT(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=vt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",yT().appendChild(s)})}function wT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new _r(3e4,6e4);/**
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
 */function Xp(t,e){return e?Dt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class iu extends $p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _T(t){return J0(t.auth,new iu(t),t.bypassAuthState)}function ET(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),X0(n,new iu(t),t.bypassAuthState)}async function IT(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Y0(n,new iu(t),t.bypassAuthState)}/**
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
 */class Jp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _T;case"linkViaPopup":case"linkViaRedirect":return IT;case"reauthViaPopup":case"reauthViaRedirect":return ET;default:Et(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TT=new _r(2e3,1e4);async function bT(t,e,n){const s=nu(t);T0(t,e,su);const r=Xp(s,n);return new gn(s,"signInViaPopup",e,r).executeNotNull()}class gn extends Jp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,TT.get())};e()}}gn.currentPopupAction=null;/**
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
 */const CT="pendingRedirect",zr=new Map;class ST extends Jp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=zr.get(this.auth._key());if(!e){try{const s=await AT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}zr.set(this.auth._key(),e)}return this.bypassAuthState||zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AT(t,e){const n=NT(e),s=DT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function kT(t,e){zr.set(t._key(),e)}function DT(t){return Dt(t._redirectPersistence)}function NT(t){return Kr(CT,t.config.apiKey,t.name)}async function RT(t,e,n=!1){const s=nu(t),r=Xp(s,e),o=await new ST(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const OT=10*60*1e3;class xT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Zp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}}function Xl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zp(t);default:return!1}}/**
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
 */async function MT(t,e={}){return ao(t,"GET","/v1/projects",e)}/**
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
 */const LT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UT=/^https?/;async function FT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MT(t);for(const n of e)try{if(VT(n))return}catch{}Et(t,"unauthorized-domain")}function VT(t){const e=Ra(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!UT.test(n))return!1;if(LT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const BT=new _r(3e4,6e4);function Jl(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $T(t){return new Promise((e,n)=>{var s,r,i;function o(){Jl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jl(),n(vt(t,"network-request-failed"))},timeout:BT.get()})}if(!((r=(s=wt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=wt().gapi)===null||i===void 0)&&i.load)o();else{const a=wT("iframefcb");return wt()[a]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},vT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function jT(t){return Wr=Wr||$T(t),Wr}/**
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
 */const HT=new _r(5e3,15e3),qT="__/auth/iframe",KT="emulator/auth/iframe",zT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GT(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zc(e,KT):`https://${t.config.authDomain}/${qT}`,s={apiKey:e.apiKey,appName:t.name,v:ir},r=WT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${rr(s).slice(1)}`}async function QT(t){const e=await jT(t),n=wt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:GT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),a=wt().setTimeout(()=>{i(o)},HT.get());function c(){wt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const YT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XT=500,JT=600,ZT="_blank",eb="http://localhost";class Zl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tb(t,e,n,s=XT,r=JT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},YT),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Te().toLowerCase();n&&(a=Pp(u)?ZT:n),xp(u)&&(e=e||eb,c.scrollbars="yes");const l=Object.entries(c).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(q0(u)&&a!=="_self")return nb(e||"",a),new Zl(null);const f=window.open(e||"",a,l);V(f,t,"popup-blocked");try{f.focus()}catch{}return new Zl(f)}function nb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const sb="__/auth/handler",rb="emulator/auth/handler";function eh(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ir,eventId:r};if(e instanceof su){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Er){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ib(t)}?${rr(a).slice(1)}`}function ib({config:t}){return t.emulator?Zc(t,rb):`https://${t.authDomain}/${sb}`}/**
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
 */const jo="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zp,this._completeRedirectFn=RT,this._overrideRedirectResult=kT}async _openPopup(e,n,s,r){var i;Ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=eh(e,n,s,Ra(),r);return tb(e,o,ru())}async _openRedirect(e,n,s,r){return await this._originValidation(e),aT(eh(e,n,s,Ra(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Ut(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await QT(e),s=new xT(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jo,{type:jo},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[jo];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vp()||tu()||co()}}const ab=ob;var th="@firebase/auth",nh="0.20.6";/**
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
 */class cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ub(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lb(t){es(new In("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{V(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bp(t)},l=new G0(a,c,u);return C0(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),es(new In("auth-internal",e=>{const n=nu(e.getProvider("auth").getImmediate());return(s=>new cb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(th,nh,ub(t)),Yt(th,nh,"esm2017")}/**
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
 */function Ho(t=mf()){const e=sc(t,"auth");return e.isInitialized()?e.getImmediate():b0(t,{popupRedirectResolver:ab,persistence:[mT,rT,zp]})}lb("Browser");gf(bp());function hb(){const t=Ch(null),e=async()=>await bT(Ho(),new St),n=()=>eT(Ho());return Z0(Ho(),s=>t.value=s),{user:t,signInUser:e,signOutUser:n}}const eg=t=>(xh("data-v-76663ba3"),t=t(),Ph(),t),fb=eg(()=>ye("a",{href:"https://vitejs.dev",target:"_blank"},[ye("img",{src:Dy,class:"logo",alt:"Vite logo"})],-1)),db=eg(()=>ye("a",{href:"https://vuejs.org/",target:"_blank"},[ye("img",{src:Ny,class:"logo vue",alt:"Vue logo"})],-1)),pb=Ya({__name:"App",setup(t){gf(bp());const e=hb(),n=w0();return(s,r)=>(zn(),Ss(tt,null,[ye("div",null,[lt(Py,{user:Fn(e).user.value,onSignInUser:Fn(e).signInUser,onSignOutUser:Fn(e).signOutUser},null,8,["user","onSignInUser","onSignOutUser"]),fb,db]),lt($y,{msg:"Vite + Vue",count:Fn(n).count.value,onIncrement:Fn(n).increment},null,8,["count","onIncrement"])],64))}});const gb=sf(pb,[["__scopeId","data-v-76663ba3"]]);Ay(gb).mount("#app");
