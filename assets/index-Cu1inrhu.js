var Hd=Object.defineProperty;var kd=(r,e,t)=>e in r?Hd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var N=(r,e,t)=>kd(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gs="184",Vd=0,Vl=1,Gd=2,fo=1,Wd=2,is=3,rn=0,qt=1,an=2,Tn=0,yr=1,Gl=2,Wl=3,Xl=4,Xd=5,Ni=100,jd=101,Kd=102,qd=103,Yd=104,$d=200,Zd=201,Jd=202,Qd=203,Ka=204,qa=205,ef=206,tf=207,nf=208,rf=209,sf=210,of=211,af=212,cf=213,lf=214,Ya=0,$a=1,Za=2,Tr=3,Ja=4,Qa=5,ec=6,tc=7,Fh=0,uf=1,hf=2,On=0,Bh=1,Oh=2,zh=3,Hh=4,kh=5,Vh=6,Gh=7,jl="attached",df="detached",Wh=300,Oi=301,wr=302,jo=303,Ko=304,No=306,yi=1e3,Un=1001,Mo=1002,ct=1003,Xh=1004,rs=1005,lt=1006,po=1007,Fn=1008,tn=1009,To=1010,nl=1011,Er=1012,br=1013,nn=1014,kt=1015,kn=1016,il=1017,rl=1018,us=1020,jh=35902,Kh=35899,qh=1021,Yh=1022,At=1023,ni=1026,Fi=1027,Uo=1028,Fo=1029,bi=1030,vs=1031,Ar=1033,mo=33776,go=33777,vo=33778,xo=33779,nc=35840,ic=35841,rc=35842,sc=35843,oc=36196,ac=37492,cc=37496,lc=37488,uc=37489,wo=37490,hc=37491,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,vc=37813,xc=37814,_c=37815,yc=37816,bc=37817,Sc=37818,Mc=37819,Tc=37820,wc=37821,Ec=36492,Ac=36494,Cc=36495,Rc=36283,Pc=36284,Eo=36285,Dc=36286,hs=2300,ds=2301,qo=2302,Kl=2303,ql=2400,Yl=2401,$l=2402,ff=2500,pf=0,$h=1,Ic=2,mf=3200,Lc=0,gf=1,Qn="",Ht="srgb",dn="srgb-linear",Ao="linear",Ze="srgb",Ki=7680,Zl=519,vf=512,xf=513,_f=514,sl=515,yf=516,bf=517,ol=518,Sf=519,Nc=35044,Jl="300 es",Bn=2e3,fs=2001;function Mf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ps(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wf(){const r=ps("canvas");return r.style.display="block",r}const Ql={};function Co(...r){const e="THREE."+r.shift();console.log(e,...r)}function Zh(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Se(...r){r=Zh(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Re(...r){r=Zh(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Uc(...r){const e=r.join(" ");e in Ql||(Ql[e]=!0,Se(...r))}function Ef(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Af={[Ya]:$a,[Za]:ec,[Ja]:tc,[Tr]:Qa,[$a]:Ya,[ec]:Za,[tc]:Ja,[Qa]:Tr};class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const os=Math.PI/180,Cr=180/Math.PI;function wn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[r&255]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Fe(r,e,t){return Math.max(e,Math.min(t,r))}function al(r,e){return(r%e+e)%e}function Cf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Rf(r,e,t){return r!==e?(t-r)/(e-r):0}function as(r,e,t){return(1-t)*r+t*e}function Pf(r,e,t,n){return as(r,e,1-Math.exp(-t*n))}function Df(r,e=1){return e-Math.abs(al(r,e*2)-e)}function If(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Lf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Nf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Uf(r,e){return r+Math.random()*(e-r)}function Ff(r){return r*(.5-Math.random())}function Bf(r){r!==void 0&&(eu=r);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Of(r){return r*os}function zf(r){return r*Cr}function Hf(r){return(r&r-1)===0&&r!==0}function kf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Gf(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*d,a*l);break;case"YZY":r.set(c*d,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*d,a*u,a*l);break;case"XZX":r.set(a*u,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*u,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*u,a*l);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xt={DEG2RAD:os,RAD2DEG:Cr,generateUUID:wn,clamp:Fe,euclideanModulo:al,mapLinear:Cf,inverseLerp:Rf,lerp:as,damp:Pf,pingpong:Df,smoothstep:If,smootherstep:Lf,randInt:Nf,randFloat:Uf,randFloatSpread:Ff,seededRandom:Bf,degToRad:Of,radToDeg:zf,isPowerOfTwo:Hf,ceilPowerOfTwo:kf,floorPowerOfTwo:Vf,setQuaternionFromProperEuler:Gf,normalize:Je,denormalize:Mn},Rl=class Rl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rl.prototype.isVector2=!0;let De=Rl;class xn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(h!==x||c!==d||l!==f||u!==g){let m=c*d+l*f+u*g+h*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),_=Math.sin(v);p=Math.sin(p*v)/_,a=Math.sin(a*v)/_,c=c*p+d*a,l=l*p+f*a,u=u*p+g*a,h=h*p+x*a}else{c=c*p+d*a,l=l*p+f*a,u=u*p+g*a,h=h*p+x*a;const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pl=class Pl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pl.prototype.isVector3=!0;let C=Pl;const Yo=new C,tu=new xn,Dl=class Dl{constructor(e,t,n,i,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],_=i[4],y=i[7],S=i[2],T=i[5],E=i[8];return s[0]=o*x+a*v+c*S,s[3]=o*m+a*_+c*T,s[6]=o*p+a*y+c*E,s[1]=l*x+u*v+h*S,s[4]=l*m+u*_+h*T,s[7]=l*p+u*y+h*E,s[2]=d*x+f*v+g*S,s[5]=d*m+f*_+g*T,s[8]=d*p+f*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dl.prototype.isMatrix3=!0;let Ue=Dl;const $o=new Ue,nu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){const r={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ze&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(i.r=Sr(i.r),i.g=Sr(i.g),i.b=Sr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Ao:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Uc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Uc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[dn]:{primaries:e,whitePoint:n,transfer:Ao,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),r}const We=Wf();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qi;class Xf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=ps("canvas")),qi.width=e.width,qi.height=e.height;const i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jf=0;class cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Zo(i[o].image)):s.push(Zo(i[o]))}else s=Zo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}let Kf=0;const Jo=new C;class Gt extends zi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Un,i=Un,s=lt,o=Fn,a=At,c=tn,l=Gt.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=wn(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Se(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Se(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Wh;Gt.DEFAULT_ANISOTROPY=1;const Il=class Il{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(f+1)/2,S=(p+1)/2,T=(u+d)/4,E=(h+x)/4,b=(g+m)/4;return _>y&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=E/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=b/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=b/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Il.prototype.isVector4=!0;let at=Il;class qf extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Gt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new cl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jt extends qf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jh extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yf extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lo=class Lo{constructor(e,t,n,i,s,o,a,c,l,u,h,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,d,f,g,x,m)}set(e,t,n,i,s,o,a,c,l,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($f,e,Zf)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ci.crossVectors(n,un),ci.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ci.crossVectors(n,un)),ci.normalize(),bs.crossVectors(un,ci),i[0]=ci.x,i[4]=bs.x,i[8]=un.x,i[1]=ci.y,i[5]=bs.y,i[9]=un.y,i[2]=ci.z,i[6]=bs.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],S=n[15],T=i[0],E=i[4],b=i[8],A=i[12],D=i[1],R=i[5],I=i[9],U=i[13],O=i[2],L=i[6],H=i[10],k=i[14],J=i[3],ee=i[7],ce=i[11],_e=i[15];return s[0]=o*T+a*D+c*O+l*J,s[4]=o*E+a*R+c*L+l*ee,s[8]=o*b+a*I+c*H+l*ce,s[12]=o*A+a*U+c*k+l*_e,s[1]=u*T+h*D+d*O+f*J,s[5]=u*E+h*R+d*L+f*ee,s[9]=u*b+h*I+d*H+f*ce,s[13]=u*A+h*U+d*k+f*_e,s[2]=g*T+x*D+m*O+p*J,s[6]=g*E+x*R+m*L+p*ee,s[10]=g*b+x*I+m*H+p*ce,s[14]=g*A+x*U+m*k+p*_e,s[3]=v*T+_*D+y*O+S*J,s[7]=v*E+_*R+y*L+S*ee,s[11]=v*b+_*I+y*H+S*ce,s[15]=v*A+_*U+y*k+S*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],v=c*f-l*d,_=a*f-l*h,y=a*d-c*h,S=o*f-l*u,T=o*d-c*u,E=o*h-a*u;return t*(x*v-m*_+p*y)-n*(g*v-m*S+p*T)+i*(g*_-x*S+p*E)-s*(g*y-x*T+m*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=t*a-n*o,_=t*c-i*o,y=t*l-s*o,S=n*c-i*a,T=n*l-s*a,E=i*l-s*c,b=u*x-h*g,A=u*m-d*g,D=u*p-f*g,R=h*m-d*x,I=h*p-f*x,U=d*p-f*m,O=v*U-_*I+y*R+S*D-T*A+E*b;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=(a*U-c*I+l*R)*L,e[1]=(i*I-n*U-s*R)*L,e[2]=(x*E-m*T+p*S)*L,e[3]=(d*T-h*E-f*S)*L,e[4]=(c*D-o*U-l*A)*L,e[5]=(t*U-i*D+s*A)*L,e[6]=(m*y-g*E-p*_)*L,e[7]=(u*E-d*y+f*_)*L,e[8]=(o*I-a*D+l*b)*L,e[9]=(n*D-t*I-s*b)*L,e[10]=(g*T-x*y+p*v)*L,e[11]=(h*y-u*T-f*v)*L,e[12]=(a*A-o*R-c*b)*L,e[13]=(t*R-n*A+i*b)*L,e[14]=(x*_-g*S-m*v)*L,e[15]=(u*S-h*_+d*v)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,x=o*u,m=o*h,p=a*h,v=c*l,_=c*u,y=c*h,S=n.x,T=n.y,E=n.z;return i[0]=(1-(x+p))*S,i[1]=(f+y)*S,i[2]=(g-_)*S,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+_)*E,i[9]=(m-v)*E,i[10]=(1-(d+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Yi.set(i[0],i[1],i[2]).length();const a=Yi.set(i[4],i[5],i[6]).length(),c=Yi.set(i[8],i[9],i[10]).length();s<0&&(o=-o),_n.copy(this);const l=1/o,u=1/a,h=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,o,a=Bn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Bn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===fs)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Bn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Bn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===fs)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Lo.prototype.isMatrix4=!0;let Te=Lo;const Yi=new C,_n=new Te,$f=new C(0,0,0),Zf=new C(1,1,1),ci=new C,bs=new C,un=new C,ru=new Te,su=new xn;class Si{constructor(e=0,t=0,n=0,i=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jf=0;const ou=new C,$i=new xn,Wn=new Te,Ss=new C,zr=new C,Qf=new C,ep=new xn,au=new C(1,0,0),cu=new C(0,1,0),lu=new C(0,0,1),uu={type:"added"},tp={type:"removed"},Zi={type:"childadded",child:null},Qo={type:"childremoved",child:null};class mt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new C,t=new Si,n=new xn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ue}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(zr,Ss,this.up):Wn.lookAt(Ss,zr,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Wn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tp),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new C(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const np={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(np)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=al(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ta(o,s,e+1/3),this.g=ta(o,s,e),this.b=ta(o,s,e-1/3)}return We.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&Se("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Se("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return We.workingToColorSpace(Zt.copy(this),e),Math.round(Fe(Zt.r*255,0,255))*65536+Math.round(Fe(Zt.g*255,0,255))*256+Math.round(Fe(Zt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,s=Zt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ht){We.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Ms);const n=as(li.h,Ms.h,t),i=as(li.s,Ms.s,t),s=as(li.l,Ms.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ie;Ie.NAMES=Qh;class ul extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yn=new C,Xn=new C,na=new C,jn=new C,Ji=new C,Qi=new C,hu=new C,ia=new C,ra=new C,sa=new C,oa=new at,aa=new at,ca=new at;class Xt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yn.subVectors(i,t),Xn.subVectors(n,t),na.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Xn),c=yn.dot(na),l=Xn.dot(Xn),u=Xn.dot(na),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return oa.setScalar(0),aa.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),ca.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(oa,s.x),o.addScaledVector(aa,s.y),o.addScaledVector(ca,s.z),o}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Xn.subVectors(e,t),yn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),yn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ji.subVectors(i,n),Qi.subVectors(s,n),ia.subVectors(e,n);const c=Ji.dot(ia),l=Qi.dot(ia);if(c<=0&&l<=0)return t.copy(n);ra.subVectors(e,i);const u=Ji.dot(ra),h=Qi.dot(ra);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ji,o);sa.subVectors(e,s);const f=Ji.dot(sa),g=Qi.dot(sa);if(g>=0&&f<=g)return t.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return hu.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(hu,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),ws.subVectors(this.max,Hr),er.subVectors(e.a,Hr),tr.subVectors(e.b,Hr),nr.subVectors(e.c,Hr),ui.subVectors(tr,er),hi.subVectors(nr,tr),Ei.subVectors(er,nr);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Ei.z,Ei.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Ei.z,0,-Ei.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Ei.y,Ei.x,0];return!la(t,er,tr,nr,ws)||(t=[1,0,0,0,1,0,0,0,1],!la(t,er,tr,nr,ws))?!1:(Es.crossVectors(ui,hi),t=[Es.x,Es.y,Es.z],la(t,er,tr,nr,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new C,new C,new C,new C,new C,new C,new C,new C],bn=new C,Ts=new bt,er=new C,tr=new C,nr=new C,ui=new C,hi=new C,Ei=new C,Hr=new C,ws=new C,Es=new C,Ai=new C;function la(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ai.fromArray(r,s);const a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),u=n.dot(Ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Et=new C,As=new De;let ip=0;class Wt extends zi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ed extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class td extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const rp=new bt,kr=new C,ua=new C;class An{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(ua)),this.expandByPoint(kr.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sp=0;const pn=new Te,ha=new mt,ir=new C,hn=new bt,Vr=new bt,zt=new C;class sn extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?td:ed)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(hn.min,Vr.min),hn.expandByPoint(zt),zt.addVectors(hn.max,Vr.max),hn.expandByPoint(zt)):(hn.expandByPoint(Vr.min),hn.expandByPoint(Vr.max))}hn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zt.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),zt.add(ir)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new C,c[b]=new C;const l=new C,u=new C,h=new C,d=new De,f=new De,g=new De,x=new C,m=new C;function p(b,A,D){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,D),d.fromBufferAttribute(s,b),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,D),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[b].add(x),a[A].add(x),a[D].add(x),c[b].add(m),c[A].add(m),c[D].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,A=v.length;b<A;++b){const D=v[b],R=D.start,I=D.count;for(let U=R,O=R+I;U<O;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new C,y=new C,S=new C,T=new C;function E(b){S.fromBufferAttribute(i,b),T.copy(S);const A=a[b];_.copy(A),_.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(T,A);const R=y.dot(c[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,R)}for(let b=0,A=v.length;b<A;++b){const D=v[b],R=D.start,I=D.count;for(let U=R,O=R+I;U<O;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Wt(d,u,h)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class op{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new C;class hl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ap=0;class zn extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=yr,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=qa,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Se(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Se(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qn=new C,da=new C,Cs=new C,di=new C,fa=new C,Rs=new C,pa=new C;class Hi{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){da.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),di.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Cs),a=di.dot(this.direction),c=-di.dot(Cs),l=di.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(da).addScaledVector(Cs,d),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),i=qn.dot(qn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,i,s){fa.subVectors(t,e),Rs.subVectors(n,e),pa.crossVectors(fa,Rs);let o=this.direction.dot(pa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const c=a*this.direction.dot(Rs.crossVectors(di,Rs));if(c<0)return null;const l=a*this.direction.dot(fa.cross(di));if(l<0||c+l>o)return null;const u=-a*di.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bi extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const du=new Te,Ci=new Hi,Ps=new An,fu=new C,Ds=new C,Is=new C,Ls=new C,ma=new C,Ns=new C,pu=new C,Us=new C;class Rt extends mt{constructor(e=new sn,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(ma.fromBufferAttribute(h,e),o?Ns.addScaledVector(ma,u):Ns.addScaledVector(ma.sub(t),u))}t.add(Ns)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(Ps.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Ps,fu)===null||Ci.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(du.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(du),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,S=_;y<S;y+=3){const T=a.getX(y),E=a.getX(y+1),b=a.getX(y+2);i=Fs(this,p,e,n,l,u,h,T,E,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=Fs(this,o,e,n,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,S=_;y<S;y+=3){const T=y,E=y+1,b=y+2;i=Fs(this,p,e,n,l,u,h,T,E,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=m,_=m+1,y=m+2;i=Fs(this,o,e,n,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function cp(r,e,t,n,i,s,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===rn,a),c===null)return null;Us.copy(a),Us.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Us);return l<t.near||l>t.far?null:{distance:l,point:Us.clone(),object:r}}function Fs(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Ds),r.getVertexPosition(c,Is),r.getVertexPosition(l,Ls);const u=cp(r,e,t,n,Ds,Is,Ls,pu);if(u){const h=new C;Xt.getBarycoord(pu,Ds,Is,Ls,h),i&&(u.uv=Xt.getInterpolatedAttribute(i,a,c,l,h,new De)),s&&(u.uv1=Xt.getInterpolatedAttribute(s,a,c,l,h,new De)),o&&(u.normal=Xt.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};Xt.getNormal(Ds,Is,Ls,d.normal),u.face=d,u.barycoord=h}return u}const Gr=new at,mu=new at,gu=new at,lp=new at,vu=new Te,Bs=new C,ga=new An,xu=new Te,va=new Hi;class up extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new Te,this.bindMatrixInverse=new Te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bs),this.boundingBox.expandByPoint(Bs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bs),this.boundingSphere.expandByPoint(Bs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(i),e.ray.intersectsSphere(ga)!==!1&&(xu.copy(i).invert(),va.copy(e.ray).applyMatrix4(xu),!(this.boundingBox!==null&&va.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,va)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===df?this.bindMatrixInverse.copy(this.bindMatrix).invert():Se("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mu.fromBufferAttribute(i.attributes.skinIndex,e),gu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Gr.copy(t),t.set(0,0,0,0)):(Gr.set(...t,1),t.set(0,0,0)),Gr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=gu.getComponent(s);if(o!==0){const a=mu.getComponent(s);vu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(lp.copy(Gr).applyMatrix4(vu),o)}}return t.isVector4&&(t.w=Gr.w),t.applyMatrix4(this.bindMatrixInverse)}}class nd extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rr extends Gt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=ct,u=ct,h,d){super(null,o,a,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=new Te,hp=new Te;class dl{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Se("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Te;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hp;_u.multiplyMatrices(a,t[s]),_u.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rr(t,e,e,At,kt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Se("Skeleton: No bone found with UUID:",s),o=new nd),this.bones.push(o),this.boneInverses.push(new Te().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Fc extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rr=new Te,yu=new Te,Os=[],bu=new bt,dp=new Te,Wr=new Rt,Xr=new An;class xs extends Rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),bu.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Xr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),e.ray.intersectsSphere(Xr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,rr),yu.multiplyMatrices(n,rr),Wr.matrixWorld=yu,Wr.raycast(e,Os);for(let o=0,a=Os.length;o<a;o++){const c=Os[o];c.instanceId=s,c.object=this,t.push(c)}Os.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rr(new Float32Array(i*this.count),i,this.count,Uo,kt));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return s[c]=a,s.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xa=new C,fp=new C,pp=new Ue;class Zn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xa.subVectors(n,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(xa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pp.getNormalMatrix(e),i=this.coplanarPoint(xa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new An,mp=new De(.5,.5),zs=new C;class fl{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,s=new Zn,o=new Zn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],v=s[12],_=s[13],y=s[14],S=s[15];if(i[0].setComponents(l-o,f-u,p-g,S-v).normalize(),i[1].setComponents(l+o,f+u,p+g,S+v).normalize(),i[2].setComponents(l+a,f+h,p+x,S+_).normalize(),i[3].setComponents(l-a,f-h,p-x,S-_).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(l-c,f-d,p-m,S-y).normalize();else if(i[4].setComponents(l-c,f-d,p-m,S-y).normalize(),t===Bn)i[5].setComponents(l+c,f+d,p+m,S+y).normalize();else if(t===fs)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=mp.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zs.x=i.normal.x>0?e.max.x:e.min.x,zs.y=i.normal.y>0?e.max.y:e.min.y,zs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class id extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new C,Po=new C,Su=new Te,jr=new Hi,Hs=new An,_a=new C,Mu=new C;class pl extends mt{constructor(e=new sn,t=new id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ro.fromBufferAttribute(t,i-1),Po.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ro.distanceTo(Po);e.setAttribute("lineDistance",new Ft(n,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;Su.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Su);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=u.getX(x),v=u.getX(x+1),_=ks(this,e,jr,c,p,v,x);_&&t.push(_)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=ks(this,e,jr,c,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=ks(this,e,jr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=ks(this,e,jr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ks(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ro.fromBufferAttribute(a,i),Po.fromBufferAttribute(a,s),t.distanceSqToSegment(Ro,Po,_a,Mu)>n)return;_a.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(_a);if(!(l<e.near||l>e.far))return{distance:l,point:Mu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Tu=new C,wu=new C;class gp extends pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Tu.fromBufferAttribute(t,i),wu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tu.distanceTo(wu);e.setAttribute("lineDistance",new Ft(n,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vp extends pl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rd extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eu=new Te,Bc=new Hi,Vs=new An,Gs=new C;class xp extends mt{constructor(e=new sn,t=new rd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;Eu.copy(i).invert(),Bc.copy(e.ray).applyMatrix4(Eu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=l.getX(g);Gs.fromBufferAttribute(h,m),Au(Gs,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Gs.fromBufferAttribute(h,g),Au(Gs,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Au(r,e,t,n,i,s,o){const a=Bc.distanceSqToPoint(r);if(a<t){const c=new C;Bc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ml extends Gt{constructor(e=[],t=Oi,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pr extends Gt{constructor(e,t,n=nn,i,s,o,a=ct,c=ct,l,u=ni,h=1){if(u!==ni&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _p extends Pr{constructor(e,t=nn,n=Oi,i,s,o=ct,a=ct,c,l=ni){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sd extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ki extends sn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(h,2));function g(x,m,p,v,_,y,S,T,E,b,A){const D=y/E,R=S/b,I=y/2,U=S/2,O=T/2,L=E+1,H=b+1;let k=0,J=0;const ee=new C;for(let ce=0;ce<H;ce++){const _e=ce*R-U;for(let ye=0;ye<L;ye++){const Xe=ye*D-I;ee[x]=Xe*v,ee[m]=_e*_,ee[p]=O,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[p]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(ye/E),h.push(1-ce/b),k+=1}}for(let ce=0;ce<b;ce++)for(let _e=0;_e<E;_e++){const ye=d+_e+L*ce,Xe=d+_e+L*(ce+1),$e=d+(_e+1)+L*(ce+1),Pe=d+(_e+1)+L*ce;c.push(ye,Xe,Pe),c.push(Xe,$e,Pe),J+=6}a.addGroup(f,J,A),f+=J,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vi extends sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let _=0;_<l;_++){const y=_*h-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const _=v+l*p,y=v+l*(p+1),S=v+1+l*(p+1),T=v+1+l*p;f.push(_,y,T),f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class gl extends sn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const T=S/t;h.x=-e*Math.cos(i+T*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+T*s)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-_),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const _=u[p][v+1],y=u[p][v],S=u[p+1][v],T=u[p+1][v+1];(p!==0||o>0)&&f.push(_,y,T),(p!==n-1||c<Math.PI)&&f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vl extends sn{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new C,d=new C,f=new C,g=new C,x=new C,m=new C,p=new C;for(let _=0;_<=n;++_){const y=_/n*s*Math.PI*2;v(y,s,o,e,f),v(y+.01,s,o,e,g),m.subVectors(g,f),p.addVectors(g,f),x.crossVectors(m,p),p.crossVectors(x,m),x.normalize(),p.normalize();for(let S=0;S<=i;++S){const T=S/i*Math.PI*2,E=-t*Math.cos(T),b=t*Math.sin(T);h.x=f.x+(E*p.x+b*x.x),h.y=f.y+(E*p.y+b*x.y),h.z=f.z+(E*p.z+b*x.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(_/n),u.push(S/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){const S=(i+1)*(_-1)+(y-1),T=(i+1)*_+(y-1),E=(i+1)*_+y,b=(i+1)*(_-1)+y;a.push(S,T,b),a.push(T,E,b)}this.setIndex(a),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(u,2));function v(_,y,S,T,E){const b=Math.cos(_),A=Math.sin(_),D=S/y*_,R=Math.cos(D);E.x=T*(2+R)*.5*b,E.y=T*(2+R)*A*.5,E.z=T*Math.sin(D)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Dr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Cu(i))i.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Cu(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function en(r){const e={};for(let t=0;t<r.length;t++){const n=Dr(r[t]);for(const i in n)e[i]=n[i]}return e}function Cu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function yp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function od(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const bp={clone:Dr,merge:en};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ot extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tp extends ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xl extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vn extends xl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wp extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ep extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ws(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ap(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ru(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function ad(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ur{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cp extends Ur{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yl:s=e,a=2*t-n;break;case $l:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yl:o=e,c=2*n-t;break;case $l:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+v*o[l+S]+_*o[c+S]+y*o[h+S];return s}}class Rp extends Ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}}class Pp extends Ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dp extends Ur{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const x=(n-t)/(i-t),m=1-x;for(let p=0;p!==a;++p)s[p]=o[l+p]*m+o[c+p]*x;return s}const f=a*2,g=e-1;for(let x=0;x!==a;++x){const m=o[l+x],p=o[c+x],v=g*f+x*2,_=d[v],y=d[v+1],S=e*f+x*2,T=h[S],E=h[S+1];let b=(n-t)/(i-t),A,D,R,I,U;for(let O=0;O<8;O++){A=b*b,D=A*b,R=1-b,I=R*R,U=I*R;const H=U*t+3*I*b*_+3*R*A*T+D*i-n;if(Math.abs(H)<1e-10)break;const k=3*I*(_-t)+6*R*b*(T-_)+3*A*(i-T);if(Math.abs(k)<1e-10)break;b=b-H/k,b=Math.max(0,Math.min(1,b))}s[x]=U*m+3*I*b*y+3*R*A*E+D*p}return s}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Dp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break;case Kl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Se("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return qo;case this.InterpolantFactoryMethodBezier:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){Re("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Re("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Tf(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){Re("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ds;class Fr extends Cn{constructor(e,t,n){super(e,t,n)}}Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=hs;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class cd extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}cd.prototype.ValueTypeName="color";class Ir extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}Ir.prototype.ValueTypeName="number";class Ip extends Ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)xn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Lr extends Cn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ip(this.times,this.values,this.getValueSize(),e)}}Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends Cn{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=hs;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}Nr.prototype.ValueTypeName="vector";class Lp{constructor(e="",t=-1,n=[],i=ff){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Up(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Cn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Ap(c);c=Ru(c,1,u),l=Ru(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ir(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Se("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Re("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const m=[],p=[];ad(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new Ir(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Nr,f+".position",d,"pos",i),n(Lr,f+".quaternion",d,"rot",i),n(Nr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Np(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ir;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return cd;case"quaternion":return Lr;case"bool":case"boolean":return Fr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Up(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Np(r.type);if(r.times===void 0){const t=[],n=[];ad(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ei={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Pu(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Pu(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Pu(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Fp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Bp=new Fp;class Gi{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class Op extends Error{constructor(e,t){super(e),this.response=t}}class ld extends Gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ei.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Se("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Yn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,E=u.length;T<E;T++){const b=u[T];b.onProgress&&b.onProgress(S)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Op(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ei.add(`file:${e}`,l);const u=Yn[e];delete Yn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Yn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const sr=new WeakMap;class ud extends Gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ei.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=sr.get(o);h===void 0&&(h=[],sr.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=ps("img");function c(){u(),t&&t(this);const h=sr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}sr.delete(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),ei.remove(`image:${e}`);const d=sr.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}sr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ei.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class zp extends Gi{constructor(e){super(e)}load(e,t,n,i){const s=new ml;s.colorSpace=Ht;const o=new ud(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class _l extends Gi{constructor(e){super(e)}load(e,t,n,i){const s=new Gt,o=new ud(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class yl extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ya=new Te,Du=new C,Iu=new C;class bl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xs=new C,js=new xn,Dn=new C;class hd extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xs,js,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,js,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xs,js,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,js,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new C,Lu=new De,Nu=new De;class Jt extends hd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Lu,Nu),t.subVectors(Nu,Lu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hp extends bl{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kp extends yl{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Hp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Vp extends bl{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Gp extends yl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wi extends hd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wp extends bl{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xp extends yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Wp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ba=new WeakMap;class jp extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Se("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Se("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ei.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{ba.has(o)===!0?(i&&i(ba.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ei.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),ba.set(c,l),ei.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ei.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const or=-90,ar=1;class Kp extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(or,ar,e,t);i.layers=this.layers,this.add(i);const s=new Jt(or,ar,e,t);s.layers=this.layers,this.add(s);const o=new Jt(or,ar,e,t);o.layers=this.layers,this.add(o);const a=new Jt(or,ar,e,t);a.layers=this.layers,this.add(a);const c=new Jt(or,ar,e,t);c.layers=this.layers,this.add(c);const l=new Jt(or,ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qp extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sl="\\[\\]\\.:\\/",Yp=new RegExp("["+Sl+"]","g"),Ml="[^"+Sl+"]",$p="[^"+Sl.replace("\\.","")+"]",Zp=/((?:WC+[\/:])*)/.source.replace("WC",Ml),Jp=/(WCOD+)?/.source.replace("WCOD",$p),Qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),em=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),tm=new RegExp("^"+Zp+Jp+Qp+em+"$"),nm=["material","materials","bones","map"];class im{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yp,"")}static parseTrackName(e){const t=tm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);nm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=im;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Uu=new Te;class dd{constructor(e,t,n=0,i=1/0){this.ray=new Hi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Re("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uu),this}intersectObject(e,t=!0,n=[]){return Oc(e,this,n,t),n.sort(Fu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Oc(e[i],this,n,t);return n.sort(Fu),n}}function Fu(r,e){return r.distance-e.distance}function Oc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Oc(s[o],e,t,!0)}}const Ll=class Ll{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Ll.prototype.isMatrix2=!0;let Bu=Ll;const Ou=new C,Ks=new C,cr=new C,lr=new C,Sa=new C,rm=new C,sm=new C;class ii{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ou.subVectors(e,this.start),Ks.subVectors(this.end,this.start);const n=Ks.dot(Ks);if(n===0)return 0;let s=Ks.dot(Ou)/n;return t&&(s=Fe(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=rm,n=sm){const i=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,u=e.end;cr.subVectors(l,a),lr.subVectors(u,c),Sa.subVectors(a,c);const h=cr.dot(cr),d=lr.dot(lr),f=lr.dot(Sa);if(h<=i&&d<=i)return t.copy(a),n.copy(c),t.sub(n),t.dot(t);if(h<=i)s=0,o=f/d,o=Fe(o,0,1);else{const g=cr.dot(Sa);if(d<=i)o=0,s=Fe(-g/h,0,1);else{const x=cr.dot(lr),m=h*d-x*x;m!==0?s=Fe((x*f-g*d)/m,0,1):s=0,o=(x*s+f)/d,o<0?(o=0,s=Fe(-g/h,0,1)):o>1&&(o=1,s=Fe((x-g)/h,0,1))}}return t.copy(a).addScaledVector(cr,s),n.copy(c).addScaledVector(lr,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function zu(r,e,t,n){const i=om(n);switch(t){case qh:return r*e;case Uo:return r*e/i.components*i.byteLength;case Fo:return r*e/i.components*i.byteLength;case bi:return r*e*2/i.components*i.byteLength;case vs:return r*e*2/i.components*i.byteLength;case Yh:return r*e*3/i.components*i.byteLength;case At:return r*e*4/i.components*i.byteLength;case Ar:return r*e*4/i.components*i.byteLength;case mo:case go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ic:case sc:return Math.max(r,16)*Math.max(e,8)/4;case nc:case rc:return Math.max(r,8)*Math.max(e,8)/2;case oc:case ac:case lc:case uc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cc:case wo:case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Ac:case Cc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Rc:case Pc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Eo:case Dc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(r){switch(r){case tn:case To:return{byteLength:1,components:1};case Er:case nl:case kn:return{byteLength:2,components:1};case il:case rl:return{byteLength:2,components:4};case nn:case br:case kt:return{byteLength:4,components:1};case jh:case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gs}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gs);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function am(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,a),h.length===0)r.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];r.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dm=`#define PI 3.141592653589793
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
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,og=`uniform sampler2D dfgLUT;
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
}`,ag=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kg=`float getShadowMask() {
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
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
}`,b0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,M0=`uniform vec3 diffuse;
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
}`,T0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,U0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,H0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:cm,alphahash_pars_fragment:lm,alphamap_fragment:um,alphamap_pars_fragment:hm,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:vm,begin_vertex:xm,beginnormal_vertex:_m,bsdfs:ym,iridescence_fragment:bm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:wm,clipping_planes_vertex:Em,color_fragment:Am,color_pars_fragment:Cm,color_pars_vertex:Rm,color_vertex:Pm,common:Dm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:Fm,emissivemap_pars_fragment:Bm,colorspace_fragment:Om,colorspace_pars_fragment:zm,envmap_fragment:Hm,envmap_common_pars_fragment:km,envmap_pars_fragment:Vm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:jm,fog_fragment:Km,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:$m,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Jm,lights_pars_begin:Qm,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:rg,lights_physical_fragment:sg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,lightprobes_pars_fragment:ug,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:vg,map_particle_pars_fragment:xg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:yg,morphinstance_vertex:bg,morphcolor_vertex:Sg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Tg,morphtarget_vertex:wg,normal_fragment_begin:Eg,normal_fragment_maps:Ag,normal_pars_fragment:Cg,normal_pars_vertex:Rg,normal_vertex:Pg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Bg,premultiplied_alpha_fragment:Og,project_vertex:zg,dithering_fragment:Hg,dithering_pars_fragment:kg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:jg,shadowmask_pars_fragment:Kg,skinbase_vertex:qg,skinning_pars_vertex:Yg,skinning_vertex:$g,skinnormal_vertex:Zg,specularmap_fragment:Jg,specularmap_pars_fragment:Qg,tonemapping_fragment:e0,tonemapping_pars_fragment:t0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:r0,uv_pars_vertex:s0,uv_vertex:o0,worldpos_vertex:a0,background_vert:c0,background_frag:l0,backgroundCube_vert:u0,backgroundCube_frag:h0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distance_vert:g0,distance_frag:v0,equirect_vert:x0,equirect_frag:_0,linedashed_vert:y0,linedashed_frag:b0,meshbasic_vert:S0,meshbasic_frag:M0,meshlambert_vert:T0,meshlambert_frag:w0,meshmatcap_vert:E0,meshmatcap_frag:A0,meshnormal_vert:C0,meshnormal_frag:R0,meshphong_vert:P0,meshphong_frag:D0,meshphysical_vert:I0,meshphysical_frag:L0,meshtoon_vert:N0,meshtoon_frag:U0,points_vert:F0,points_frag:B0,shadow_vert:O0,shadow_frag:z0,sprite_vert:H0,sprite_frag:k0},ue={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Nn={basic:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:en([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:en([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:en([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:en([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:en([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:en([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:en([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:en([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:en([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:en([ue.lights,ue.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Nn.physical={uniforms:en([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const qs={r:0,b:0,g:0},V0=new Te,pd=new Ue;pd.set(-1,0,0,0,1,0,0,0,1);function G0(r,e,t,n,i,s){const o=new Ie(0);let a=i===!0?0:1,c,l,u=null,h=0,d=null;function f(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){const y=v.backgroundBlurriness>0;_=e.get(_,y)}return _}function g(v){let _=!1;const y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),_=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,_){const y=f(_);y&&(y.isCubeTexture||y.mapping===No)?(l===void 0&&(l=new Rt(new ki(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:Dr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pd),l.material.toneMapped=We.getTransfer(y.colorSpace)!==Ze,(u!==y||h!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rt(new Vi(2,2),new ot({name:"BackgroundMaterial",uniforms:Dr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=We.getTransfer(y.colorSpace)!==Ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,_){v.getRGB(qs,od(r)),t.buffers.color.setClear(qs.r,qs.g,qs.b,_,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function W0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(R,I,U,O,L){let H=!1;const k=h(R,O,U,I);s!==k&&(s=k,l(s.object)),H=f(R,O,U,L),H&&g(R,O,U,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(R,I,U,O),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return r.createVertexArray()}function l(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function h(R,I,U,O){const L=O.wireframe===!0;let H=n[I.id];H===void 0&&(H={},n[I.id]=H);const k=R.isInstancedMesh===!0?R.id:0;let J=H[k];J===void 0&&(J={},H[k]=J);let ee=J[U.id];ee===void 0&&(ee={},J[U.id]=ee);let ce=ee[L];return ce===void 0&&(ce=d(c()),ee[L]=ce),ce}function d(R){const I=[],U=[],O=[];for(let L=0;L<t;L++)I[L]=0,U[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:O,object:R,attributes:{},index:null}}function f(R,I,U,O){const L=s.attributes,H=I.attributes;let k=0;const J=U.getAttributes();for(const ee in J)if(J[ee].location>=0){const _e=L[ee];let ye=H[ee];if(ye===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(ye=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(ye=R.instanceColor)),_e===void 0||_e.attribute!==ye||ye&&_e.data!==ye.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function g(R,I,U,O){const L={},H=I.attributes;let k=0;const J=U.getAttributes();for(const ee in J)if(J[ee].location>=0){let _e=H[ee];_e===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor));const ye={};ye.attribute=_e,_e&&_e.data&&(ye.data=_e.data),L[ee]=ye,k++}s.attributes=L,s.attributesNum=k,s.index=O}function x(){const R=s.newAttributes;for(let I=0,U=R.length;I<U;I++)R[I]=0}function m(R){p(R,0)}function p(R,I){const U=s.newAttributes,O=s.enabledAttributes,L=s.attributeDivisors;U[R]=1,O[R]===0&&(r.enableVertexAttribArray(R),O[R]=1),L[R]!==I&&(r.vertexAttribDivisor(R,I),L[R]=I)}function v(){const R=s.newAttributes,I=s.enabledAttributes;for(let U=0,O=I.length;U<O;U++)I[U]!==R[U]&&(r.disableVertexAttribArray(U),I[U]=0)}function _(R,I,U,O,L,H,k){k===!0?r.vertexAttribIPointer(R,I,U,L,H):r.vertexAttribPointer(R,I,U,O,L,H)}function y(R,I,U,O){x();const L=O.attributes,H=U.getAttributes(),k=I.defaultAttributeValues;for(const J in H){const ee=H[J];if(ee.location>=0){let ce=L[J];if(ce===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const _e=ce.normalized,ye=ce.itemSize,Xe=e.get(ce);if(Xe===void 0)continue;const $e=Xe.buffer,Pe=Xe.type,$=Xe.bytesPerElement,he=Pe===r.INT||Pe===r.UNSIGNED_INT||ce.gpuType===br;if(ce.isInterleavedBufferAttribute){const re=ce.data,Ae=re.stride,Le=ce.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ee.locationSize;Ce++)p(ee.location+Ce,re.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<ee.locationSize;Ce++)m(ee.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let Ce=0;Ce<ee.locationSize;Ce++)_(ee.location+Ce,ye/ee.locationSize,Pe,_e,Ae*$,(Le+ye/ee.locationSize*Ce)*$,he)}else{if(ce.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)p(ee.location+re,ce.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<ee.locationSize;re++)m(ee.location+re);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let re=0;re<ee.locationSize;re++)_(ee.location+re,ye/ee.locationSize,Pe,_e,ye*$,ye/ee.locationSize*re*$,he)}}else if(k!==void 0){const _e=k[J];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(ee.location,_e);break;case 3:r.vertexAttrib3fv(ee.location,_e);break;case 4:r.vertexAttrib4fv(ee.location,_e);break;default:r.vertexAttrib1fv(ee.location,_e)}}}}v()}function S(){A();for(const R in n){const I=n[R];for(const U in I){const O=I[U];for(const L in O){const H=O[L];for(const k in H)u(H[k].object),delete H[k];delete O[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const I=n[R.id];for(const U in I){const O=I[U];for(const L in O){const H=O[L];for(const k in H)u(H[k].object),delete H[k];delete O[L]}}delete n[R.id]}function E(R){for(const I in n){const U=n[I];for(const O in U){const L=U[O];if(L[R.id]===void 0)continue;const H=L[R.id];for(const k in H)u(H[k].object),delete H[k];delete L[R.id]}}}function b(R){for(const I in n){const U=n[I],O=R.isInstancedMesh===!0?R.id:0,L=U[O];if(L!==void 0){for(const H in L){const k=L[H];for(const J in k)u(k[J].object),delete k[J];delete L[H]}delete U[O],Object.keys(U).length===0&&delete n[I]}}}function A(){D(),o=!0,s!==i&&(s=i,l(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function X0(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function j0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==At&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==tn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==kt&&!b)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Se("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,maxSamples:S,samples:T}}function K0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Zn,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,_=v*4;let y=p.clippingState||null;c.value=y,y=u(g,d,_,f);for(let S=0;S!==_;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const xi=4,Hu=[.125,.215,.35,.446,.526,.582],Ui=20,q0=256,Kr=new Wi,ku=new Ie;let Ma=null,Ta=0,wa=0,Ea=!1;const Y0=new C;class Vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Y0}=s;Ma=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,Ta,wa),this._renderer.xr.enabled=Ea,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:lt,minFilter:lt,generateMipmaps:!1,type:kn,format:At,colorSpace:dn,depthBuffer:!1},i=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$0(s)),this._blurMaterial=J0(s,e,t),this._ggxMaterial=Z0(s,e,t)}return i}_compileMaterial(e){const t=new Rt(new sn,e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,n,i,s){const c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ku),h.toneMapping=On,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new ki,new Bi({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(ku),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[_],s.y,s.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[_]));const S=this._cubeSize;ur(i,y*S,_>2?S:0,S,S),h.setRenderTarget(i),p&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ur(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-xi?n-g+xi:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ur(s,m,p,3*x,2*x),i.setRenderTarget(s),i.render(a,Kr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ur(e,m,p,3*x,2*x),i.setRenderTarget(e),i.render(a,Kr)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ui;m>Ui&&Se(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let v=0;for(let E=0;E<Ui;++E){const b=E/x,A=Math.exp(-b*b/2);p.push(A),E===0?v+=A:E<m&&(v+=2*A)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const y=this._sizeLods[i],S=3*y*(i>_-xi?i-_+xi:0),T=4*(this._cubeSize-y);ur(t,S,T,3*y,2*y),c.setRenderTarget(t),c.render(h,Kr)}}function $0(r){const e=[],t=[],n=[];let i=r;const s=r-xi+1+Hu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-xi?c=Hu[o-r+xi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,b=T>2?0:-1,A=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];v.set(A,x*g*T),_.set(d,m*g*T);const D=[T,T,T,T,T,T];y.set(D,p*g*T)}const S=new sn;S.setAttribute("position",new Wt(v,x)),S.setAttribute("uv",new Wt(_,m)),S.setAttribute("faceIndex",new Wt(y,p)),n.push(new Rt(S,null)),i>xi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Gu(r,e,t){const n=new jt(r,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Z0(r,e,t){return new ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function J0(r,e,t){const n=new Float32Array(Ui),i=new C(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Wu(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Xu(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Bo(){return`

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
	`}class md extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ml(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ki(5,5,5),s=new ot({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Tn});s.uniforms.tEquirect.value=t;const o=new Rt(i,s),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=lt),new Kp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function Q0(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===jo||f===Ko)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new md(g.height);return x.fromEquirectangularTexture(r,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,g=f===jo||f===Ko,x=f===Oi||f===wr;if(g||x){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Vu(r)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Vu(r)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===jo?d.mapping=Oi:f===Ko&&(d.mapping=wr),d}function c(d){let f=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function ev(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Uc("WebGLRenderer: "+n+" extension not supported."),i}}}function tv(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){const S=v[_+0],T=v[_+1],E=v[_+2];d.push(S,T,T,E,E,S)}}else{const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const S=_+0,T=_+1,E=_+2;d.push(S,T,T,E,E,S)}}const m=new(g.count>=65535?td:ed)(d,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function nv(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function l(h,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function iv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Re("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rv(r,e,t){const n=new WeakMap,i=new at;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let D=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",D)};var f=D;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let S=a.attributes.position.count*y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*T*4*h),b=new Jh(E,S,T,h);b.type=kt,b.needsUpdate=!0;const A=y*4;for(let R=0;R<h;R++){const I=p[R],U=v[R],O=_[R],L=S*T*4*R;for(let H=0;H<I.count;H++){const k=H*A;g===!0&&(i.fromBufferAttribute(I,H),E[L+k+0]=i.x,E[L+k+1]=i.y,E[L+k+2]=i.z,E[L+k+3]=0),x===!0&&(i.fromBufferAttribute(U,H),E[L+k+4]=i.x,E[L+k+5]=i.y,E[L+k+6]=i.z,E[L+k+7]=0),m===!0&&(i.fromBufferAttribute(O,H),E[L+k+8]=i.x,E[L+k+9]=i.y,E[L+k+10]=i.z,E[L+k+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:b,size:new De(S,T)},n.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function sv(r,e,t,n,i){let s=new WeakMap;function o(l){const u=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const ov={[Bh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[Vh]:"AGX_TONE_MAPPING",[Gh]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};function av(r,e,t,n,i){const s=new jt(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Pr(e,t):void 0}),o=new jt(e,t,{type:kn,depthBuffer:!1,stencilBuffer:!1}),a=new sn;a.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const c=new Tp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Rt(a,c),u=new Wi(-1,1,1,-1,0,1);let h=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(v,_){s.setSize(v,_),o.setSize(v,_);for(let y=0;y<m.length;y++){const S=m[y];S.setSize&&S.setSize(v,_)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const _=s.width,y=s.height;for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(_,y)}},this.begin=function(v,_){if(f||v.toneMapping===On&&m.length===0)return!1;if(x=_,_!==null){const y=_.width,S=_.height;(s.width!==y||s.height!==S)&&this.setSize(y,S)}return p===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=On,!0},this.hasRenderPass=function(){return p},this.end=function(v,_){v.toneMapping=g,f=!0;let y=s,S=o;for(let T=0;T<m.length;T++){const E=m[T];if(E.enabled!==!1&&(E.render(v,S,y,_),E.needsSwap!==!1)){const b=y;y=S,S=b}}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,c.defines={},We.getTransfer(h)===Ze&&(c.defines.SRGB_TRANSFER="");const T=ov[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(x),v.render(l,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const gd=new Gt,zc=new Pr(1,1),vd=new Jh,xd=new Yf,_d=new ml,ju=[],Ku=[],qu=new Float32Array(16),Yu=new Float32Array(9),$u=new Float32Array(4);function Or(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ju[i];if(s===void 0&&(s=new Float32Array(i),ju[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ot(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Oo(r,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2fv(this.addr,e),Ot(t,e)}}function uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;r.uniform3fv(this.addr,e),Ot(t,e)}}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4fv(this.addr,e),Ot(t,e)}}function dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Bt(t,n))return;$u.set(n),r.uniformMatrix2fv(this.addr,!1,$u),Ot(t,n)}}function fv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Bt(t,n))return;Yu.set(n),r.uniformMatrix3fv(this.addr,!1,Yu),Ot(t,n)}}function pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Bt(t,n))return;qu.set(n),r.uniformMatrix4fv(this.addr,!1,qu),Ot(t,n)}}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2iv(this.addr,e),Ot(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3iv(this.addr,e),Ot(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4iv(this.addr,e),Ot(t,e)}}function _v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2uiv(this.addr,e),Ot(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3uiv(this.addr,e),Ot(t,e)}}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4uiv(this.addr,e),Ot(t,e)}}function Mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(zc.compareFunction=t.isReversedDepthBuffer()?ol:sl,s=zc):s=gd,t.setTexture2D(e||s,i)}function Tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xd,i)}function wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_d,i)}function Ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vd,i)}function Av(r){switch(r){case 5126:return cv;case 35664:return lv;case 35665:return uv;case 35666:return hv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return xv;case 5125:return _v;case 36294:return yv;case 36295:return bv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Cv(r,e){r.uniform1fv(this.addr,e)}function Rv(r,e){const t=Or(e,this.size,2);r.uniform2fv(this.addr,t)}function Pv(r,e){const t=Or(e,this.size,3);r.uniform3fv(this.addr,t)}function Dv(r,e){const t=Or(e,this.size,4);r.uniform4fv(this.addr,t)}function Iv(r,e){const t=Or(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Lv(r,e){const t=Or(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nv(r,e){const t=Or(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Uv(r,e){r.uniform1iv(this.addr,e)}function Fv(r,e){r.uniform2iv(this.addr,e)}function Bv(r,e){r.uniform3iv(this.addr,e)}function Ov(r,e){r.uniform4iv(this.addr,e)}function zv(r,e){r.uniform1uiv(this.addr,e)}function Hv(r,e){r.uniform2uiv(this.addr,e)}function kv(r,e){r.uniform3uiv(this.addr,e)}function Vv(r,e){r.uniform4uiv(this.addr,e)}function Gv(r,e,t){const n=this.cache,i=e.length,s=Oo(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=zc:o=gd;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Wv(r,e,t){const n=this.cache,i=e.length,s=Oo(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||xd,s[o])}function Xv(r,e,t){const n=this.cache,i=e.length,s=Oo(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_d,s[o])}function jv(r,e,t){const n=this.cache,i=e.length,s=Oo(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||vd,s[o])}function Kv(r){switch(r){case 5126:return Cv;case 35664:return Rv;case 35665:return Pv;case 35666:return Dv;case 35674:return Iv;case 35675:return Lv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return Fv;case 35668:case 35672:return Bv;case 35669:case 35673:return Ov;case 5125:return zv;case 36294:return Hv;case 36295:return kv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return jv}}class qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Av(t.type)}}class Yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}}class $v{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Zu(r,e){r.seq.push(e),r.map[e.id]=e}function Zv(r,e,t){const n=r.name,i=n.length;for(Aa.lastIndex=0;;){const s=Aa.exec(n),o=Aa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Zu(t,l===void 0?new qv(a,r,e):new Yv(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new $v(a),Zu(t,h)),t=h}}}class _o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Zv(a,c,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ju(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Jv=37297;let Qv=0;function ex(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Qu=new Ue;function tx(r){We._getMatrix(Qu,We.workingColorSpace,r);const e=`mat3( ${Qu.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case Ao:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function eh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ex(r.getShaderSource(e),a)}else return s}function nx(r,e){const t=tx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ix={[Bh]:"Linear",[Oh]:"Reinhard",[zh]:"Cineon",[Hh]:"ACESFilmic",[Vh]:"AgX",[Gh]:"Neutral",[kh]:"Custom"};function rx(r,e){const t=ix[e];return t===void 0?(Se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ys=new C;function sx(){We.getLuminanceCoefficients(Ys);const r=Ys.x.toFixed(4),e=Ys.y.toFixed(4),t=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function ax(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ss(r){return r!==""}function th(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(r){return r.replace(lx,hx)}const ux=new Map;function hx(r,e){let t=He[e];if(t===void 0){const n=ux.get(e);if(n!==void 0)t=He[n],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hc(t)}const dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(r){return r.replace(dx,fx)}function fx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const px={[fo]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function mx(r){return px[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gx={[Oi]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function vx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":gx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xx={[wr]:"ENVMAP_MODE_REFRACTION"};function _x(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yx={[Fh]:"ENVMAP_BLENDING_MULTIPLY",[uf]:"ENVMAP_BLENDING_MIX",[hf]:"ENVMAP_BLENDING_ADD"};function bx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yx[r.combine]||"ENVMAP_BLENDING_NONE"}function Sx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=mx(t),l=vx(t),u=_x(t),h=bx(t),d=Sx(t),f=ox(t),g=ax(s),x=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?He.tonemapping_pars_fragment:"",t.toneMapping!==On?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,nx("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=Hc(o),o=th(o,t),o=nh(o,t),a=Hc(a),a=th(a,t),a=nh(a,t),o=ih(o),a=ih(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+m+o,y=v+p+a,S=Ju(i,i.VERTEX_SHADER,_),T=Ju(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(R){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(x)||"",U=i.getShaderInfoLog(S)||"",O=i.getShaderInfoLog(T)||"",L=I.trim(),H=U.trim(),k=O.trim();let J=!0,ee=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,S,T);else{const ce=eh(i,S,"vertex"),_e=eh(i,T,"fragment");Re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+ce+`
`+_e)}else L!==""?Se("WebGLProgram: Program Info Log:",L):(H===""||k==="")&&(ee=!1);ee&&(R.diagnostics={runnable:J,programLog:L,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(S),i.deleteShader(T),b=new _o(i,x),A=cx(i,x)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(x,Jv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=T,this}let Tx=0;class wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ex(e),t.set(e,n)),n}}class Ex{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}}function Ax(r){return r===bi||r===wo||r===Eo}function Cx(r,e,t,n,i,s){const o=new ll,a=new wx,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,A,D,R,I,U){const O=R.fog,L=I.geometry,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?R.environment:null,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,J=e.get(b.envMap||H,k),ee=J&&J.mapping===No?J.image.height:null,ce=f[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&Se("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const _e=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ye=_e!==void 0?_e.length:0;let Xe=0;L.morphAttributes.position!==void 0&&(Xe=1),L.morphAttributes.normal!==void 0&&(Xe=2),L.morphAttributes.color!==void 0&&(Xe=3);let $e,Pe,$,he;if(ce){const Be=Nn[ce];$e=Be.vertexShader,Pe=Be.fragmentShader}else $e=b.vertexShader,Pe=b.fragmentShader,a.update(b),$=a.getVertexShaderID(b),he=a.getFragmentShaderID(b);const re=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,it=!!b.map,je=!!b.matcap,et=!!J,dt=!!b.aoMap,Ge=!!b.lightMap,Pt=!!b.bumpMap,pt=!!b.normalMap,cn=!!b.displacementMap,B=!!b.emissiveMap,Dt=!!b.metalnessMap,Ke=!!b.roughnessMap,ut=b.anisotropy>0,le=b.clearcoat>0,gt=b.dispersion>0,P=b.iridescence>0,M=b.sheen>0,V=b.transmission>0,q=ut&&!!b.anisotropyMap,Q=le&&!!b.clearcoatMap,te=le&&!!b.clearcoatNormalMap,ae=le&&!!b.clearcoatRoughnessMap,j=P&&!!b.iridescenceMap,Y=P&&!!b.iridescenceThicknessMap,pe=M&&!!b.sheenColorMap,ve=M&&!!b.sheenRoughnessMap,se=!!b.specularMap,ne=!!b.specularColorMap,Ne=!!b.specularIntensityMap,ze=V&&!!b.transmissionMap,Ye=V&&!!b.thicknessMap,F=!!b.gradientMap,ie=!!b.alphaMap,K=b.alphaTest>0,me=!!b.alphaHash,oe=!!b.extensions;let Z=On;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Z=r.toneMapping);const Me={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:$e,fragmentShader:Pe,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:je,envMap:et,envMapMode:et&&J.mapping,envMapCubeUVHeight:ee,aoMap:dt,lightMap:Ge,bumpMap:Pt,normalMap:pt,displacementMap:cn,emissiveMap:B,normalMapObjectSpace:pt&&b.normalMapType===gf,normalMapTangentSpace:pt&&b.normalMapType===Lc,packedNormalMap:pt&&b.normalMapType===Lc&&Ax(b.normalMap.format),metalnessMap:Dt,roughnessMap:Ke,anisotropy:ut,anisotropyMap:q,clearcoat:le,clearcoatMap:Q,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,dispersion:gt,iridescence:P,iridescenceMap:j,iridescenceThicknessMap:Y,sheen:M,sheenColorMap:pe,sheenRoughnessMap:ve,specularMap:se,specularColorMap:ne,specularIntensityMap:Ne,transmission:V,transmissionMap:ze,thicknessMap:Ye,gradientMap:F,opaque:b.transparent===!1&&b.blending===yr&&b.alphaToCoverage===!1,alphaMap:ie,alphaTest:K,alphaHash:me,combine:b.combine,mapUv:it&&g(b.map.channel),aoMapUv:dt&&g(b.aoMap.channel),lightMapUv:Ge&&g(b.lightMap.channel),bumpMapUv:Pt&&g(b.bumpMap.channel),normalMapUv:pt&&g(b.normalMap.channel),displacementMapUv:cn&&g(b.displacementMap.channel),emissiveMapUv:B&&g(b.emissiveMap.channel),metalnessMapUv:Dt&&g(b.metalnessMap.channel),roughnessMapUv:Ke&&g(b.roughnessMap.channel),anisotropyMapUv:q&&g(b.anisotropyMap.channel),clearcoatMapUv:Q&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(b.sheenRoughnessMap.channel),specularMapUv:se&&g(b.specularMap.channel),specularColorMapUv:ne&&g(b.specularColorMap.channel),specularIntensityMapUv:Ne&&g(b.specularIntensityMap.channel),transmissionMapUv:ze&&g(b.transmissionMap.channel),thicknessMapUv:Ye&&g(b.thicknessMap.channel),alphaMapUv:ie&&g(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pt||ut),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(it||ie),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&pt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ae,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Z,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&We.getTransfer(b.map.colorSpace)===Ze,decodeVideoTextureEmissive:B&&b.emissiveMap.isVideoTexture===!0&&We.getTransfer(b.emissiveMap.colorSpace)===Ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===an,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:oe&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&b.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)A.push(D),A.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(p(A,b),v(A,b),A.push(r.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function p(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function v(b,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),b.push(o.mask)}function _(b){const A=f[b.type];let D;if(A){const R=Nn[A];D=bp.clone(R.uniforms)}else D=b.uniforms;return D}function y(b,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new Mx(r,A,b,i),l.push(D),u.set(A,D)),D}function S(b){if(--b.usedTimes===0){const A=l.indexOf(b);l[A]=l[l.length-1],l.pop(),u.delete(b.cacheKey),b.destroy()}}function T(b){a.remove(b)}function E(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:_,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:E}}function Rx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Px(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function sh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function oh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,m,p){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},r[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function c(d,f,g,x,m,p){const v=a(d,f,g,x,m,p);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):t.push(v)}function l(d,f,g,x,m,p){const v=a(d,f,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||Px),n.length>1&&n.sort(f||sh),i.length>1&&i.sort(f||sh)}function h(){for(let d=e,f=r.length;d<f;d++){const g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:h,sort:u}}function Dx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new oh,r.set(n,[o])):i>=s.length?(o=new oh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ix(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Lx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Nx=0;function Ux(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fx(r){const e=new Ix,t=Lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,s=new Te,o=new Te;function a(l){let u=0,h=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,_=0,y=0,S=0,T=0,E=0;l.sort(Ux);for(let A=0,D=l.length;A<D;A++){const R=l[A],I=R.color,U=R.intensity,O=R.distance;let L=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===bi?L=R.shadow.map.texture:L=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*U,h+=I.g*U,d+=I.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],U);E++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,J=t.get(R);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=H,f++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(I).multiplyScalar(U),H.distance=O,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;const k=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,k.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[x]=k.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=L,y++}x++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(I).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const k=R.shadow,J=t.get(R);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==f||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==v||b.numPointShadows!==_||b.numSpotShadows!==y||b.numSpotMaps!==S||b.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,b.directionalLength=f,b.pointLength=g,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=v,b.numPointShadows=_,b.numSpotShadows=y,b.numSpotMaps=S,b.numLightProbes=E,n.version=Nx++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const _=l[p];if(_.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(_.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function ah(r){const e=new Fx(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Bx(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new ah(r),e.set(i,[a])):s>=o.length?(a=new ah(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
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
}`,Hx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],kx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],ch=new Te,qr=new C,Ca=new C;function Vx(r,e,t){let n=new fl;const i=new De,s=new De,o=new at,a=new wp,c=new Ep,l={},u=t.maxTextureSize,h={[rn]:qt,[qt]:rn,[an]:an},d=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Ox,fragmentShader:zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let p=this.type;this.render=function(T,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Wd&&(Se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fo);const A=r.getRenderTarget(),D=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Tn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==this.type;U&&E.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=T.length;O<L;O++){const H=T[O],k=H.shadow;if(k===void 0){Se("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const J=k.getFrameExtents();i.multiply(J),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,k.mapSize.y=s.y));const ee=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=ee,k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===is){if(H.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new jt(i.x,i.y,{format:bi,type:kn,minFilter:lt,magFilter:lt,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Pr(i.x,i.y,kt),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ni,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ct,k.map.depthTexture.magFilter=ct}else H.isPointLight?(k.map=new md(i.x),k.map.depthTexture=new _p(i.x,nn)):(k.map=new jt(i.x,i.y),k.map.depthTexture=new Pr(i.x,i.y,nn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ni,this.type===fo?(k.map.depthTexture.compareFunction=ee?ol:sl,k.map.depthTexture.minFilter=lt,k.map.depthTexture.magFilter=lt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ct,k.map.depthTexture.magFilter=ct);k.camera.updateProjectionMatrix()}const ce=k.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<ce;_e++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,_e),r.clear();else{_e===0&&(r.setRenderTarget(k.map),r.clear());const ye=k.getViewport(_e);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),I.viewport(o)}if(H.isPointLight){const ye=k.camera,Xe=k.matrix,$e=H.distance||ye.far;$e!==ye.far&&(ye.far=$e,ye.updateProjectionMatrix()),qr.setFromMatrixPosition(H.matrixWorld),ye.position.copy(qr),Ca.copy(ye.position),Ca.add(Hx[_e]),ye.up.copy(kx[_e]),ye.lookAt(Ca),ye.updateMatrixWorld(),Xe.makeTranslation(-qr.x,-qr.y,-qr.z),ch.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ch,ye.coordinateSystem,ye.reversedDepth)}else k.updateMatrices(H);n=k.getFrustum(),y(E,b,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===is&&v(k,b),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(A,D,R)};function v(T,E){const b=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jt(i.x,i.y,{format:bi,type:kn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,b,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,b,f,x,null)}function _(T,E,b,A){let D=null;const R=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)D=R;else if(D=b.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=D.uuid,U=E.uuid;let O=l[I];O===void 0&&(O={},l[I]=O);let L=O[U];L===void 0&&(L=D.clone(),O[U]=L,E.addEventListener("dispose",S)),D=L}if(D.visible=E.visible,D.wireframe=E.wireframe,A===is?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:h[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=r.properties.get(D);I.light=b}return D}function y(T,E,b,A,D){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===is)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const U=e.update(T),O=T.material;if(Array.isArray(O)){const L=U.groups;for(let H=0,k=L.length;H<k;H++){const J=L[H],ee=O[J.materialIndex];if(ee&&ee.visible){const ce=_(T,ee,A,D);T.onBeforeShadow(r,T,E,b,U,ce,J),r.renderBufferDirect(b,null,U,ce,T,J),T.onAfterShadow(r,T,E,b,U,ce,J)}}}else if(O.visible){const L=_(T,O,A,D);T.onBeforeShadow(r,T,E,b,U,L,null),r.renderBufferDirect(b,null,U,L,T,null),T.onAfterShadow(r,T,E,b,U,L,null)}}const I=T.children;for(let U=0,O=I.length;U<O;U++)y(I[U],E,b,A,D)}function S(T){T.target.removeEventListener("dispose",S);for(const b in l){const A=l[b],D=T.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function Gx(r,e){function t(){let F=!1;const ie=new at;let K=null;const me=new at(0,0,0,0);return{setMask:function(oe){K!==oe&&!F&&(r.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){F=oe},setClear:function(oe,Z,Me,Be,St){St===!0&&(oe*=Be,Z*=Be,Me*=Be),ie.set(oe,Z,Me,Be),me.equals(ie)===!1&&(r.clearColor(oe,Z,Me,Be),me.copy(ie))},reset:function(){F=!1,K=null,me.set(-1,0,0,0)}}}function n(){let F=!1,ie=!1,K=null,me=null,oe=null;return{setReversed:function(Z){if(ie!==Z){const Me=e.get("EXT_clip_control");Z?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const Be=oe;oe=null,this.setClear(Be)}},getReversed:function(){return ie},setTest:function(Z){Z?re(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Z){K!==Z&&!F&&(r.depthMask(Z),K=Z)},setFunc:function(Z){if(ie&&(Z=Af[Z]),me!==Z){switch(Z){case Ya:r.depthFunc(r.NEVER);break;case $a:r.depthFunc(r.ALWAYS);break;case Za:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case Ja:r.depthFunc(r.EQUAL);break;case Qa:r.depthFunc(r.GEQUAL);break;case ec:r.depthFunc(r.GREATER);break;case tc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Z}},setLocked:function(Z){F=Z},setClear:function(Z){oe!==Z&&(oe=Z,ie&&(Z=1-Z),r.clearDepth(Z))},reset:function(){F=!1,K=null,me=null,oe=null,ie=!1}}}function i(){let F=!1,ie=null,K=null,me=null,oe=null,Z=null,Me=null,Be=null,St=null;return{setTest:function(tt){F||(tt?re(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(tt){ie!==tt&&!F&&(r.stencilMask(tt),ie=tt)},setFunc:function(tt,Gn,Rn){(K!==tt||me!==Gn||oe!==Rn)&&(r.stencilFunc(tt,Gn,Rn),K=tt,me=Gn,oe=Rn)},setOp:function(tt,Gn,Rn){(Z!==tt||Me!==Gn||Be!==Rn)&&(r.stencilOp(tt,Gn,Rn),Z=tt,Me=Gn,Be=Rn)},setLocked:function(tt){F=tt},setClear:function(tt){St!==tt&&(r.clearStencil(tt),St=tt)},reset:function(){F=!1,ie=null,K=null,me=null,oe=null,Z=null,Me=null,Be=null,St=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,_=null,y=null,S=null,T=null,E=null,b=new Ie(0,0,0),A=0,D=!1,R=null,I=null,U=null,O=null,L=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,J=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=J>=1):ee.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=J>=2);let ce=null,_e={};const ye=r.getParameter(r.SCISSOR_BOX),Xe=r.getParameter(r.VIEWPORT),$e=new at().fromArray(ye),Pe=new at().fromArray(Xe);function $(F,ie,K,me){const oe=new Uint8Array(4),Z=r.createTexture();r.bindTexture(F,Z),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Me=0;Me<K;Me++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(ie+Me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return Z}const he={};he[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(Tr),Pt(!1),pt(Vl),re(r.CULL_FACE),dt(Tn);function re(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function Ae(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Le(F,ie){return d[F]!==ie?(r.bindFramebuffer(F,ie),d[F]=ie,F===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ie),F===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ce(F,ie){let K=g,me=!1;if(F){K=f.get(ie),K===void 0&&(K=[],f.set(ie,K));const oe=F.textures;if(K.length!==oe.length||K[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Me=oe.length;Z<Me;Z++)K[Z]=r.COLOR_ATTACHMENT0+Z;K.length=oe.length,me=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,me=!0);me&&r.drawBuffers(K)}function it(F){return x!==F?(r.useProgram(F),x=F,!0):!1}const je={[Ni]:r.FUNC_ADD,[jd]:r.FUNC_SUBTRACT,[Kd]:r.FUNC_REVERSE_SUBTRACT};je[qd]=r.MIN,je[Yd]=r.MAX;const et={[$d]:r.ZERO,[Zd]:r.ONE,[Jd]:r.SRC_COLOR,[Ka]:r.SRC_ALPHA,[sf]:r.SRC_ALPHA_SATURATE,[nf]:r.DST_COLOR,[ef]:r.DST_ALPHA,[Qd]:r.ONE_MINUS_SRC_COLOR,[qa]:r.ONE_MINUS_SRC_ALPHA,[rf]:r.ONE_MINUS_DST_COLOR,[tf]:r.ONE_MINUS_DST_ALPHA,[of]:r.CONSTANT_COLOR,[af]:r.ONE_MINUS_CONSTANT_COLOR,[cf]:r.CONSTANT_ALPHA,[lf]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(F,ie,K,me,oe,Z,Me,Be,St,tt){if(F===Tn){m===!0&&(Ae(r.BLEND),m=!1);return}if(m===!1&&(re(r.BLEND),m=!0),F!==Xd){if(F!==p||tt!==D){if((v!==Ni||S!==Ni)&&(r.blendEquation(r.FUNC_ADD),v=Ni,S=Ni),tt)switch(F){case yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gl:r.blendFunc(r.ONE,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",F);break}else switch(F){case yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wl:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",F);break}_=null,y=null,T=null,E=null,b.set(0,0,0),A=0,p=F,D=tt}return}oe=oe||ie,Z=Z||K,Me=Me||me,(ie!==v||oe!==S)&&(r.blendEquationSeparate(je[ie],je[oe]),v=ie,S=oe),(K!==_||me!==y||Z!==T||Me!==E)&&(r.blendFuncSeparate(et[K],et[me],et[Z],et[Me]),_=K,y=me,T=Z,E=Me),(Be.equals(b)===!1||St!==A)&&(r.blendColor(Be.r,Be.g,Be.b,St),b.copy(Be),A=St),p=F,D=!1}function Ge(F,ie){F.side===an?Ae(r.CULL_FACE):re(r.CULL_FACE);let K=F.side===qt;ie&&(K=!K),Pt(K),F.blending===yr&&F.transparent===!1?dt(Tn):dt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const me=F.stencilWrite;a.setTest(me),me&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),B(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(F){R!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),R=F)}function pt(F){F!==Vd?(re(r.CULL_FACE),F!==I&&(F===Vl?r.cullFace(r.BACK):F===Gd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),I=F}function cn(F){F!==U&&(k&&r.lineWidth(F),U=F)}function B(F,ie,K){F?(re(r.POLYGON_OFFSET_FILL),(O!==ie||L!==K)&&(O=ie,L=K,o.getReversed()&&(ie=-ie),r.polygonOffset(ie,K))):Ae(r.POLYGON_OFFSET_FILL)}function Dt(F){F?re(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function Ke(F){F===void 0&&(F=r.TEXTURE0+H-1),ce!==F&&(r.activeTexture(F),ce=F)}function ut(F,ie,K){K===void 0&&(ce===null?K=r.TEXTURE0+H-1:K=ce);let me=_e[K];me===void 0&&(me={type:void 0,texture:void 0},_e[K]=me),(me.type!==F||me.texture!==ie)&&(ce!==K&&(r.activeTexture(K),ce=K),r.bindTexture(F,ie||he[F]),me.type=F,me.texture=ie)}function le(){const F=_e[ce];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function gt(){try{r.compressedTexImage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function M(){try{r.texSubImage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function V(){try{r.texSubImage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function Q(){try{r.compressedTexSubImage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function te(){try{r.texStorage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function ae(){try{r.texStorage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function j(){try{r.texImage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function Y(){try{r.texImage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function pe(F){return h[F]!==void 0?h[F]:r.getParameter(F)}function ve(F,ie){h[F]!==ie&&(r.pixelStorei(F,ie),h[F]=ie)}function se(F){$e.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),$e.copy(F))}function ne(F){Pe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function Ne(F,ie){let K=l.get(ie);K===void 0&&(K=new WeakMap,l.set(ie,K));let me=K.get(F);me===void 0&&(me=r.getUniformBlockIndex(ie,F.name),K.set(F,me))}function ze(F,ie){const me=l.get(ie).get(F);c.get(ie)!==me&&(r.uniformBlockBinding(ie,me,F.__bindingPointIndex),c.set(ie,me))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},ce=null,_e={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,_=null,y=null,S=null,T=null,E=null,b=new Ie(0,0,0),A=0,D=!1,R=null,I=null,U=null,O=null,L=null,$e.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ae,bindFramebuffer:Le,drawBuffers:Ce,useProgram:it,setBlending:dt,setMaterial:Ge,setFlipSided:Pt,setCullFace:pt,setLineWidth:cn,setPolygonOffset:B,setScissorTest:Dt,activeTexture:Ke,bindTexture:ut,unbindTexture:le,compressedTexImage2D:gt,compressedTexImage3D:P,texImage2D:j,texImage3D:Y,pixelStorei:ve,getParameter:pe,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:te,texStorage3D:ae,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:se,viewport:ne,reset:Ye}}function Wx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return g?new OffscreenCanvas(P,M):ps("canvas")}function m(P,M,V){let q=1;const Q=gt(P);if((Q.width>V||Q.height>V)&&(q=V/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(q*Q.width),ae=Math.floor(q*Q.height);d===void 0&&(d=x(te,ae));const j=M?x(te,ae):d;return j.width=te,j.height=ae,j.getContext("2d").drawImage(P,0,0,te,ae),Se("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+te+"x"+ae+")."),j}else return"data"in P&&Se("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,M,V,q,Q,te=!1){if(P!==null){if(r[P]!==void 0)return r[P];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;q&&(ae=e.get("EXT_texture_norm16"),ae||Se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===r.RED&&(V===r.FLOAT&&(j=r.R32F),V===r.HALF_FLOAT&&(j=r.R16F),V===r.UNSIGNED_BYTE&&(j=r.R8),V===r.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),V===r.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),M===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.R8UI),V===r.UNSIGNED_SHORT&&(j=r.R16UI),V===r.UNSIGNED_INT&&(j=r.R32UI),V===r.BYTE&&(j=r.R8I),V===r.SHORT&&(j=r.R16I),V===r.INT&&(j=r.R32I)),M===r.RG&&(V===r.FLOAT&&(j=r.RG32F),V===r.HALF_FLOAT&&(j=r.RG16F),V===r.UNSIGNED_BYTE&&(j=r.RG8),V===r.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),V===r.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RG8UI),V===r.UNSIGNED_SHORT&&(j=r.RG16UI),V===r.UNSIGNED_INT&&(j=r.RG32UI),V===r.BYTE&&(j=r.RG8I),V===r.SHORT&&(j=r.RG16I),V===r.INT&&(j=r.RG32I)),M===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGB8UI),V===r.UNSIGNED_SHORT&&(j=r.RGB16UI),V===r.UNSIGNED_INT&&(j=r.RGB32UI),V===r.BYTE&&(j=r.RGB8I),V===r.SHORT&&(j=r.RGB16I),V===r.INT&&(j=r.RGB32I)),M===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),V===r.UNSIGNED_INT&&(j=r.RGBA32UI),V===r.BYTE&&(j=r.RGBA8I),V===r.SHORT&&(j=r.RGBA16I),V===r.INT&&(j=r.RGBA32I)),M===r.RGB&&(V===r.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),V===r.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),M===r.RGBA){const Y=te?Ao:We.getTransfer(Q);V===r.FLOAT&&(j=r.RGBA32F),V===r.HALF_FLOAT&&(j=r.RGBA16F),V===r.UNSIGNED_BYTE&&(j=Y===Ze?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),V===r.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,M){let V;return P?M===null||M===nn||M===us?V=r.DEPTH24_STENCIL8:M===kt?V=r.DEPTH32F_STENCIL8:M===Er&&(V=r.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===nn||M===us?V=r.DEPTH_COMPONENT24:M===kt?V=r.DEPTH_COMPONENT32F:M===Er&&(V=r.DEPTH_COMPONENT16),V}function T(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==ct&&P.minFilter!==lt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function E(P){const M=P.target;M.removeEventListener("dispose",E),A(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&h.delete(M)}function b(P){const M=P.target;M.removeEventListener("dispose",b),R(M)}function A(P){const M=n.get(P);if(M.__webglInit===void 0)return;const V=P.source,q=f.get(V);if(q){const Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(P),Object.keys(q).length===0&&f.delete(V)}n.remove(P)}function D(P){const M=n.get(P);r.deleteTexture(M.__webglTexture);const V=P.source,q=f.get(V);delete q[M.__cacheKey],o.memory.textures--}function R(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)r.deleteFramebuffer(M.__webglFramebuffer[q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=P.textures;for(let q=0,Q=V.length;q<Q;q++){const te=n.get(V[q]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(V[q])}n.remove(P)}let I=0;function U(){I=0}function O(){return I}function L(P){I=P}function H(){const P=I;return P>=i.maxTextures&&Se("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function J(P,M){const V=n.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const q=P.image;if(q===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(V,P,M);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+M)}function ee(P,M){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Ae(V,P,M);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+M)}function ce(P,M){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Ae(V,P,M);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+M)}function _e(P,M){const V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){Le(V,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+M)}const ye={[yi]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[Mo]:r.MIRRORED_REPEAT},Xe={[ct]:r.NEAREST,[Xh]:r.NEAREST_MIPMAP_NEAREST,[rs]:r.NEAREST_MIPMAP_LINEAR,[lt]:r.LINEAR,[po]:r.LINEAR_MIPMAP_NEAREST,[Fn]:r.LINEAR_MIPMAP_LINEAR},$e={[vf]:r.NEVER,[Sf]:r.ALWAYS,[xf]:r.LESS,[sl]:r.LEQUAL,[_f]:r.EQUAL,[ol]:r.GEQUAL,[yf]:r.GREATER,[bf]:r.NOTEQUAL};function Pe(P,M){if(M.type===kt&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===lt||M.magFilter===po||M.magFilter===rs||M.magFilter===Fn||M.minFilter===lt||M.minFilter===po||M.minFilter===rs||M.minFilter===Fn)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ye[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ye[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ye[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Xe[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Xe[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,$e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ct||M.minFilter!==rs&&M.minFilter!==Fn||M.type===kt&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $(P,M){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",E));const q=M.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const te=k(M);if(te!==P.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[te].usedTimes++;const ae=Q[P.__cacheKey];ae!==void 0&&(Q[P.__cacheKey].usedTimes--,ae.usedTimes===0&&D(M)),P.__cacheKey=te,P.__webglTexture=Q[te].texture}return V}function he(P,M,V){return Math.floor(Math.floor(P/V)/M)}function re(P,M,V,q){const te=P.updateRanges;if(te.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,V,q,M.data);else{te.sort((ve,se)=>ve.start-se.start);let ae=0;for(let ve=1;ve<te.length;ve++){const se=te[ae],ne=te[ve],Ne=se.start+se.count,ze=he(ne.start,M.width,4),Ye=he(se.start,M.width,4);ne.start<=Ne+1&&ze===Ye&&he(ne.start+ne.count-1,M.width,4)===ze?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++ae,te[ae]=ne)}te.length=ae+1;const j=t.getParameter(r.UNPACK_ROW_LENGTH),Y=t.getParameter(r.UNPACK_SKIP_PIXELS),pe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let ve=0,se=te.length;ve<se;ve++){const ne=te[ve],Ne=Math.floor(ne.start/4),ze=Math.ceil(ne.count/4),Ye=Ne%M.width,F=Math.floor(Ne/M.width),ie=ze,K=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,Ye,F,ie,K,V,q,M.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function Ae(P,M,V){let q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=r.TEXTURE_3D);const Q=$(P,M),te=M.source;t.bindTexture(q,P.__webglTexture,r.TEXTURE0+V);const ae=n.get(te);if(te.version!==ae.__version||Q===!0){if(t.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const K=We.getPrimaries(We.workingColorSpace),me=M.colorSpace===Qn?null:We.getPrimaries(M.colorSpace),oe=M.colorSpace===Qn||K===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let Y=m(M.image,!1,i.maxTextureSize);Y=le(M,Y);const pe=s.convert(M.format,M.colorSpace),ve=s.convert(M.type);let se=y(M.internalFormat,pe,ve,M.normalized,M.colorSpace,M.isVideoTexture);Pe(q,M);let ne;const Ne=M.mipmaps,ze=M.isVideoTexture!==!0,Ye=ae.__version===void 0||Q===!0,F=te.dataReady,ie=T(M,Y);if(M.isDepthTexture)se=S(M.format===Fi,M.type),Ye&&(ze?t.texStorage2D(r.TEXTURE_2D,1,se,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,se,Y.width,Y.height,0,pe,ve,null));else if(M.isDataTexture)if(Ne.length>0){ze&&Ye&&t.texStorage2D(r.TEXTURE_2D,ie,se,Ne[0].width,Ne[0].height);for(let K=0,me=Ne.length;K<me;K++)ne=Ne[K],ze?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ne.width,ne.height,pe,ve,ne.data):t.texImage2D(r.TEXTURE_2D,K,se,ne.width,ne.height,0,pe,ve,ne.data);M.generateMipmaps=!1}else ze?(Ye&&t.texStorage2D(r.TEXTURE_2D,ie,se,Y.width,Y.height),F&&re(M,Y,pe,ve)):t.texImage2D(r.TEXTURE_2D,0,se,Y.width,Y.height,0,pe,ve,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,se,Ne[0].width,Ne[0].height,Y.depth);for(let K=0,me=Ne.length;K<me;K++)if(ne=Ne[K],M.format!==At)if(pe!==null)if(ze){if(F)if(M.layerUpdates.size>0){const oe=zu(ne.width,ne.height,M.format,M.type);for(const Z of M.layerUpdates){const Me=ne.data.subarray(Z*oe/ne.data.BYTES_PER_ELEMENT,(Z+1)*oe/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,Z,ne.width,ne.height,1,pe,Me)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,Y.depth,pe,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,se,ne.width,ne.height,Y.depth,0,ne.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,Y.depth,pe,ve,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,se,ne.width,ne.height,Y.depth,0,pe,ve,ne.data)}else{ze&&Ye&&t.texStorage2D(r.TEXTURE_2D,ie,se,Ne[0].width,Ne[0].height);for(let K=0,me=Ne.length;K<me;K++)ne=Ne[K],M.format!==At?pe!==null?ze?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,ne.width,ne.height,pe,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,K,se,ne.width,ne.height,0,ne.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ne.width,ne.height,pe,ve,ne.data):t.texImage2D(r.TEXTURE_2D,K,se,ne.width,ne.height,0,pe,ve,ne.data)}else if(M.isDataArrayTexture)if(ze){if(Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,se,Y.width,Y.height,Y.depth),F)if(M.layerUpdates.size>0){const K=zu(Y.width,Y.height,M.format,M.type);for(const me of M.layerUpdates){const oe=Y.data.subarray(me*K/Y.data.BYTES_PER_ELEMENT,(me+1)*K/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Y.width,Y.height,1,pe,ve,oe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,pe,ve,Y.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,Y.width,Y.height,Y.depth,0,pe,ve,Y.data);else if(M.isData3DTexture)ze?(Ye&&t.texStorage3D(r.TEXTURE_3D,ie,se,Y.width,Y.height,Y.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,pe,ve,Y.data)):t.texImage3D(r.TEXTURE_3D,0,se,Y.width,Y.height,Y.depth,0,pe,ve,Y.data);else if(M.isFramebufferTexture){if(Ye)if(ze)t.texStorage2D(r.TEXTURE_2D,ie,se,Y.width,Y.height);else{let K=Y.width,me=Y.height;for(let oe=0;oe<ie;oe++)t.texImage2D(r.TEXTURE_2D,oe,se,K,me,0,pe,ve,null),K>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const K=r.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Y.parentNode!==K){K.appendChild(Y),h.add(M),K.onpaint=Be=>{const St=Be.changedElements;for(const tt of h)St.includes(tt.image)&&(tt.needsUpdate=!0)},K.requestPaint();return}const me=0,oe=r.RGBA,Z=r.RGBA,Me=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,me,oe,Z,Me,Y),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ze&&Ye){const K=gt(Ne[0]);t.texStorage2D(r.TEXTURE_2D,ie,se,K.width,K.height)}for(let K=0,me=Ne.length;K<me;K++)ne=Ne[K],ze?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,pe,ve,ne):t.texImage2D(r.TEXTURE_2D,K,se,pe,ve,ne);M.generateMipmaps=!1}else if(ze){if(Ye){const K=gt(Y);t.texStorage2D(r.TEXTURE_2D,ie,se,K.width,K.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,ve,Y)}else t.texImage2D(r.TEXTURE_2D,0,se,pe,ve,Y);p(M)&&v(q),ae.__version=te.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Le(P,M,V){if(M.image.length!==6)return;const q=$(P,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const te=n.get(Q);if(Q.version!==te.__version||q===!0){t.activeTexture(r.TEXTURE0+V);const ae=We.getPrimaries(We.workingColorSpace),j=M.colorSpace===Qn?null:We.getPrimaries(M.colorSpace),Y=M.colorSpace===Qn||ae===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const pe=M.isCompressedTexture||M.image[0].isCompressedTexture,ve=M.image[0]&&M.image[0].isDataTexture,se=[];for(let Z=0;Z<6;Z++)!pe&&!ve?se[Z]=m(M.image[Z],!0,i.maxCubemapSize):se[Z]=ve?M.image[Z].image:M.image[Z],se[Z]=le(M,se[Z]);const ne=se[0],Ne=s.convert(M.format,M.colorSpace),ze=s.convert(M.type),Ye=y(M.internalFormat,Ne,ze,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,ie=te.__version===void 0||q===!0,K=Q.dataReady;let me=T(M,ne);Pe(r.TEXTURE_CUBE_MAP,M);let oe;if(pe){F&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ye,ne.width,ne.height);for(let Z=0;Z<6;Z++){oe=se[Z].mipmaps;for(let Me=0;Me<oe.length;Me++){const Be=oe[Me];M.format!==At?Ne!==null?F?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,Be.width,Be.height,Ne,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,Ye,Be.width,Be.height,0,Be.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,Be.width,Be.height,Ne,ze,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,Ye,Be.width,Be.height,0,Ne,ze,Be.data)}}}else{if(oe=M.mipmaps,F&&ie){oe.length>0&&me++;const Z=gt(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ve){F?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,se[Z].width,se[Z].height,Ne,ze,se[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,se[Z].width,se[Z].height,0,Ne,ze,se[Z].data);for(let Me=0;Me<oe.length;Me++){const St=oe[Me].image[Z].image;F?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,St.width,St.height,Ne,ze,St.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,Ye,St.width,St.height,0,Ne,ze,St.data)}}else{F?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,ze,se[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Ne,ze,se[Z]);for(let Me=0;Me<oe.length;Me++){const Be=oe[Me];F?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,Ne,ze,Be.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,Ye,Ne,ze,Be.image[Z])}}}p(M)&&v(r.TEXTURE_CUBE_MAP),te.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ce(P,M,V,q,Q,te){const ae=s.convert(V.format,V.colorSpace),j=s.convert(V.type),Y=y(V.internalFormat,ae,j,V.normalized,V.colorSpace),pe=n.get(M),ve=n.get(V);if(ve.__renderTarget=M,!pe.__hasExternalTextures){const se=Math.max(1,M.width>>te),ne=Math.max(1,M.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,Y,se,ne,M.depth,0,ae,j,null):t.texImage2D(Q,te,Y,se,ne,0,ae,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Ke(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,Q,ve.__webglTexture,0,Dt(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,Q,ve.__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(P,M,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,te=S(M.stencilBuffer,Q),ae=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ke(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt(M),te,M.width,M.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt(M),te,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,te,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,P)}else{const q=M.textures;for(let Q=0;Q<q.length;Q++){const te=q[Q],ae=s.convert(te.format,te.colorSpace),j=s.convert(te.type),Y=y(te.internalFormat,ae,j,te.normalized,te.colorSpace);Ke(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt(M),Y,M.width,M.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt(M),Y,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Y,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function je(P,M,V){const q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,M.depthTexture);const pe=s.convert(M.depthTexture.format),ve=s.convert(M.depthTexture.type);let se;M.depthTexture.format===ni?se=r.DEPTH_COMPONENT24:M.depthTexture.format===Fi&&(se=r.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,M.width,M.height,0,pe,ve,null)}}else J(M.depthTexture,0);const te=Q.__webglTexture,ae=Dt(M),j=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,Y=M.depthTexture.format===Fi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ni)Ke(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,j,te,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,Y,j,te,0);else if(M.depthTexture.format===Fi)Ke(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,j,te,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,Y,j,te,0);else throw new Error("Unknown depthTexture format")}function et(P){const M=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)je(M.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?je(M.__webglFramebuffer[0],P,0):je(M.__webglFramebuffer,P,0)}else if(V){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=r.createRenderbuffer(),it(M.__webglDepthbuffer[q],P,!1);else{const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,te)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),it(M.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,te)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(P,M,V){const q=n.get(P);M!==void 0&&Ce(q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&et(P)}function Ge(P){const M=P.texture,V=n.get(P),q=n.get(M);P.addEventListener("dispose",b);const Q=P.textures,te=P.isWebGLCubeRenderTarget===!0,ae=Q.length>1;if(ae||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=M.version,o.memory.textures++),te){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let Y=0;Y<M.mipmaps.length;Y++)V.__webglFramebuffer[j][Y]=r.createFramebuffer()}else V.__webglFramebuffer[j]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)V.__webglFramebuffer[j]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ae)for(let j=0,Y=Q.length;j<Y;j++){const pe=n.get(Q[j]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&Ke(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const Y=Q[j];V.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[j]);const pe=s.convert(Y.format,Y.colorSpace),ve=s.convert(Y.type),se=y(Y.internalFormat,pe,ve,Y.normalized,Y.colorSpace,P.isXRRenderTarget===!0),ne=Dt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,se,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,V.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),it(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)Ce(V.__webglFramebuffer[j][Y],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y);else Ce(V.__webglFramebuffer[j],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(M)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,Y=Q.length;j<Y;j++){const pe=Q[j],ve=n.get(pe);let se=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ve.__webglTexture),Pe(se,pe),Ce(V.__webglFramebuffer,P,pe,r.COLOR_ATTACHMENT0+j,se,0),p(pe)&&v(se)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Pe(j,M),M.mipmaps&&M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)Ce(V.__webglFramebuffer[Y],P,M,r.COLOR_ATTACHMENT0,j,Y);else Ce(V.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,j,0);p(M)&&v(j),t.unbindTexture()}P.depthBuffer&&et(P)}function Pt(P){const M=P.textures;for(let V=0,q=M.length;V<q;V++){const Q=M[V];if(p(Q)){const te=_(P),ae=n.get(Q).__webglTexture;t.bindTexture(te,ae),v(te),t.unbindTexture()}}}const pt=[],cn=[];function B(P){if(P.samples>0){if(Ke(P)===!1){const M=P.textures,V=P.width,q=P.height;let Q=r.COLOR_BUFFER_BIT;const te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(P),j=M.length>1;if(j)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Y=P.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[pe]);const ve=n.get(M[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,V,q,0,0,V,q,Q,r.NEAREST),c===!0&&(pt.length=0,cn.length=0,pt.push(r.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pt.push(te),cn.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,cn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[pe]);const ve=n.get(M[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Dt(P){return Math.min(i.maxSamples,P.samples)}function Ke(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function le(P,M){const V=P.colorSpace,q=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==dn&&V!==Qn&&(We.getTransfer(V)===Ze?(q!==At||Q!==tn)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",V)),M}function gt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.getTextureUnits=O,this.setTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=_e,this.rebindTextures=dt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xx(r,e){function t(n,i=Qn){let s;const o=We.getTransfer(i);if(n===tn)return r.UNSIGNED_BYTE;if(n===il)return r.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===To)return r.BYTE;if(n===nl)return r.SHORT;if(n===Er)return r.UNSIGNED_SHORT;if(n===br)return r.INT;if(n===nn)return r.UNSIGNED_INT;if(n===kt)return r.FLOAT;if(n===kn)return r.HALF_FLOAT;if(n===qh)return r.ALPHA;if(n===Yh)return r.RGB;if(n===At)return r.RGBA;if(n===ni)return r.DEPTH_COMPONENT;if(n===Fi)return r.DEPTH_STENCIL;if(n===Uo)return r.RED;if(n===Fo)return r.RED_INTEGER;if(n===bi)return r.RG;if(n===vs)return r.RG_INTEGER;if(n===Ar)return r.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===xo)if(o===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===rc||n===sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===cc||n===lc||n===uc||n===wo||n===hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oc||n===ac)return o===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===lc)return s.COMPRESSED_R11_EAC;if(n===uc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return s.COMPRESSED_RG11_EAC;if(n===hc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===vc||n===xc||n===_c||n===yc||n===bc||n===Sc||n===Mc||n===Tc||n===wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===Ac||n===Cc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ec)return o===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Pc||n===Eo||n===Dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
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

}`;class qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new sd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ot({vertexShader:jx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yx extends zi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new qx,p={},v=t.getContextAttributes();let _=null,y=null;const S=[],T=[],E=new De;let b=null;const A=new Jt;A.viewport=new at;const D=new Jt;D.viewport=new at;const R=[A,D],I=new qp;let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=S[$];return he===void 0&&(he=new ea,S[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=S[$];return he===void 0&&(he=new ea,S[$]=he),he.getGripSpace()},this.getHand=function($){let he=S[$];return he===void 0&&(he=new ea,S[$]=he),he.getHandSpace()};function L($){const he=T.indexOf($.inputSource);if(he===-1)return;const re=S[he];re!==void 0&&(re.update($.inputSource,$.frame,l||o),re.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",k);for(let $=0;$<S.length;$++){const he=T[$];he!==null&&(T[$]=null,S[$].disconnect(he))}U=null,O=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(_),f=null,d=null,h=null,i=null,y=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",H),i.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ae=null,Le=null;v.depth&&(Le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?Fi:ni,Ae=v.stencil?us:nn);const Ce={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new jt(d.textureWidth,d.textureHeight,{format:At,type:tn,depthTexture:new Pr(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new jt(f.framebufferWidth,f.framebufferHeight,{format:At,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k($){for(let he=0;he<$.removed.length;he++){const re=$.removed[he],Ae=T.indexOf(re);Ae>=0&&(T[Ae]=null,S[Ae].disconnect(re))}for(let he=0;he<$.added.length;he++){const re=$.added[he];let Ae=T.indexOf(re);if(Ae===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=T.length){T.push(re),Ae=Ce;break}else if(T[Ce]===null){T[Ce]=re,Ae=Ce;break}if(Ae===-1)break}const Le=S[Ae];Le&&Le.connect(re)}}const J=new C,ee=new C;function ce($,he,re){J.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);const Ae=J.distanceTo(ee),Le=he.projectionMatrix.elements,Ce=re.projectionMatrix.elements,it=Le[14]/(Le[10]-1),je=Le[14]/(Le[10]+1),et=(Le[9]+1)/Le[5],dt=(Le[9]-1)/Le[5],Ge=(Le[8]-1)/Le[0],Pt=(Ce[8]+1)/Ce[0],pt=it*Ge,cn=it*Pt,B=Ae/(-Ge+Pt),Dt=B*-Ge;if(he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Dt),$.translateZ(B),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Le[10]===-1)$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ke=it+B,ut=je+B,le=pt-Dt,gt=cn+(Ae-Dt),P=et*je/ut*Ke,M=dt*je/ut*Ke;$.projectionMatrix.makePerspective(le,gt,P,M,Ke,ut),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _e($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let he=$.near,re=$.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(re=m.depthFar)),I.near=D.near=A.near=he,I.far=D.far=A.far=re,(U!==I.near||O!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,O=I.far),I.layers.mask=$.layers.mask|6,A.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;const Ae=$.parent,Le=I.cameras;_e(I,Ae);for(let Ce=0;Ce<Le.length;Ce++)_e(Le[Ce],Ae);Le.length===2?ce(I,A,D):I.projectionMatrix.copy(A.projectionMatrix),ye($,I,Ae)};function ye($,he,re){re===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return p[$]};let Xe=null;function $e($,he){if(u=he.getViewerPose(l||o),g=he,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ae=!1;re.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let je=0;je<re.length;je++){const et=re[je];let dt=null;if(f!==null)dt=f.getViewport(et);else{const Pt=h.getViewSubImage(d,et);dt=Pt.viewport,je===0&&(e.setRenderTargetTextures(y,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(y))}let Ge=R[je];Ge===void 0&&(Ge=new Jt,Ge.layers.enable(je),Ge.viewport=new at,R[je]=Ge),Ge.matrix.fromArray(et.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(et.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(dt.x,dt.y,dt.width,dt.height),je===0&&(I.matrix.copy(Ge.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(Ge)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const je=h.getDepthInformation(re[0]);je&&je.isValid&&je.texture&&m.init(je,i.renderState)}if(Le&&Le.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let je=0;je<re.length;je++){const et=re[je].camera;if(et){let dt=p[et];dt||(dt=new sd,p[et]=dt);const Ge=h.getCameraImage(et);dt.sourceTexture=Ge}}}}for(let re=0;re<S.length;re++){const Ae=T[re],Le=S[re];Ae!==null&&Le!==void 0&&Le.update(Ae,he,l||o)}Xe&&Xe($,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const Pe=new fd;Pe.setAnimationLoop($e),this.setAnimationLoop=function($){Xe=$},this.dispose=function(){}}}const $x=new Te,yd=new Ue;yd.set(-1,0,0,0,1,0,0,0,1);function Zx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,od(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(v,S);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const _=h();v.__bindingPointIndex=_;const y=r.createBuffer(),S=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],y=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,E=y.length;T<E;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let A=0,D=b.length;A<D;A++){const R=b[A];if(f(R,T,A,S)===!0){const I=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let L=0;L<U.length;L++){const H=U[L],k=x(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,I+O,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):ArrayBuffer.isView(H)?R.__data.set(new H.constructor(H.buffer,H.byteOffset,R.__data.length)):(H.toArray(R.__data,O),O+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,_,y,S){const T=v.value,E=_+"_"+y;if(S[E]===void 0)return typeof T=="number"||typeof T=="boolean"?S[E]=T:ArrayBuffer.isView(T)?S[E]=T.slice():S[E]=T.clone(),!0;{const b=S[E];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return S[E]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(b.equals(T)===!1)return b.copy(T),!0}}return!1}function g(v){const _=v.uniforms;let y=0;const S=16;for(let E=0,b=_.length;E<b;E++){const A=Array.isArray(_[E])?_[E]:[_[E]];for(let D=0,R=A.length;D<R;D++){const I=A[D],U=Array.isArray(I.value)?I.value:[I.value];for(let O=0,L=U.length;O<L;O++){const H=U[O],k=x(H),J=y%S,ee=J%k.boundary,ce=J+ee;y+=ee,ce!==0&&S-ce<k.storage&&(y+=S-ce),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=k.storage}}}const T=y%S;return T>0&&(y+=S-T),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Se("WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}const Qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function e_(){return In===null&&(In=new Rr(Qx,16,16,bi,kn),In.name="DFG_LUT",In.minFilter=lt,In.magFilter=lt,In.wrapS=Un,In.wrapT=Un,In.generateMipmaps=!1,In.needsUpdate=!0),In}class t_{constructor(e={}){const{canvas:t=wf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=f,m=new Set([Ar,vs,Fo]),p=new Set([tn,nn,Er,us,il,rl]),v=new Uint32Array(4),_=new Int32Array(4),y=new C;let S=null,T=null;const E=[],b=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let R=!1,I=null;this._outputColorSpace=Ht;let U=0,O=0,L=null,H=-1,k=null;const J=new at,ee=new at;let ce=null;const _e=new Ie(0);let ye=0,Xe=t.width,$e=t.height,Pe=1,$=null,he=null;const re=new at(0,0,Xe,$e),Ae=new at(0,0,Xe,$e);let Le=!1;const Ce=new fl;let it=!1,je=!1;const et=new Te,dt=new C,Ge=new at,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function cn(){return L===null?Pe:1}let B=n;function Dt(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gs}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Be,!1),B===null){const z="webgl2";if(B=Dt(z,w),B===null)throw Dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Re("WebGLRenderer: "+w.message),w}let Ke,ut,le,gt,P,M,V,q,Q,te,ae,j,Y,pe,ve,se,ne,Ne,ze,Ye,F,ie,K;function me(){Ke=new ev(B),Ke.init(),F=new Xx(B,Ke),ut=new j0(B,Ke,e,F),le=new Gx(B,Ke),ut.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),gt=new iv(B),P=new Rx,M=new Wx(B,Ke,le,P,ut,F,gt),V=new Q0(D),q=new am(B),ie=new W0(B,q),Q=new tv(B,q,gt,ie),te=new sv(B,Q,q,ie,gt),Ne=new rv(B,ut,M),ve=new K0(P),ae=new Cx(D,V,Ke,ut,ie,ve),j=new Zx(D,P),Y=new Dx,pe=new Bx(Ke),ne=new G0(D,V,le,te,g,c),se=new Vx(D,te,ut),K=new Jx(B,gt,ut,le),ze=new X0(B,Ke,gt),Ye=new nv(B,Ke,gt),gt.programs=ae.programs,D.capabilities=ut,D.extensions=Ke,D.properties=P,D.renderLists=Y,D.shadowMap=se,D.state=le,D.info=gt}me(),x!==tn&&(A=new av(x,t.width,t.height,i,s));const oe=new Yx(D,B);this.xr=oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(w){w!==void 0&&(Pe=w,this.setSize(Xe,$e,!1))},this.getSize=function(w){return w.set(Xe,$e)},this.setSize=function(w,z,X=!0){if(oe.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=w,$e=z,t.width=Math.floor(w*Pe),t.height=Math.floor(z*Pe),X===!0&&(t.style.width=w+"px",t.style.height=z+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(Xe*Pe,$e*Pe).floor()},this.setDrawingBufferSize=function(w,z,X){Xe=w,$e=z,Pe=X,t.width=Math.floor(w*X),t.height=Math.floor(z*X),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(x===tn){Re("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){Se("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,z,X,G){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,z,X,G),le.viewport(J.copy(re).multiplyScalar(Pe).round())},this.getScissor=function(w){return w.copy(Ae)},this.setScissor=function(w,z,X,G){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,z,X,G),le.scissor(ee.copy(Ae).multiplyScalar(Pe).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){le.setScissorTest(Le=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,X=!0){let G=0;if(w){let W=!1;if(L!==null){const fe=L.texture.format;W=m.has(fe)}if(W){const fe=L.texture.type,xe=p.has(fe),de=ne.getClearColor(),be=ne.getClearAlpha(),we=de.r,Oe=de.g,ke=de.b;xe?(v[0]=we,v[1]=Oe,v[2]=ke,v[3]=be,B.clearBufferuiv(B.COLOR,0,v)):(_[0]=we,_[1]=Oe,_[2]=ke,_[3]=be,B.clearBufferiv(B.COLOR,0,_))}else G|=B.COLOR_BUFFER_BIT}z&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ne.dispose(),Y.dispose(),pe.dispose(),P.dispose(),V.dispose(),te.dispose(),ie.dispose(),K.dispose(),ae.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Nl),oe.removeEventListener("sessionend",Ul),wi.stop()};function Z(w){w.preventDefault(),Co("WebGLRenderer: Context Lost."),R=!0}function Me(){Co("WebGLRenderer: Context Restored."),R=!1;const w=gt.autoReset,z=se.enabled,X=se.autoUpdate,G=se.needsUpdate,W=se.type;me(),gt.autoReset=w,se.enabled=z,se.autoUpdate=X,se.needsUpdate=G,se.type=W}function Be(w){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function St(w){const z=w.target;z.removeEventListener("dispose",St),tt(z)}function tt(w){Gn(w),P.remove(w)}function Gn(w){const z=P.get(w).programs;z!==void 0&&(z.forEach(function(X){ae.releaseProgram(X)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,X,G,W,fe){z===null&&(z=Pt);const xe=W.isMesh&&W.matrixWorld.determinant()<0,de=Nd(w,z,X,G,W);le.setMaterial(G,xe);let be=X.index,we=1;if(G.wireframe===!0){if(be=Q.getWireframeAttribute(X),be===void 0)return;we=2}const Oe=X.drawRange,ke=X.attributes.position;let Ee=Oe.start*we,nt=(Oe.start+Oe.count)*we;fe!==null&&(Ee=Math.max(Ee,fe.start*we),nt=Math.min(nt,(fe.start+fe.count)*we)),be!==null?(Ee=Math.max(Ee,0),nt=Math.min(nt,be.count)):ke!=null&&(Ee=Math.max(Ee,0),nt=Math.min(nt,ke.count));const Mt=nt-Ee;if(Mt<0||Mt===1/0)return;ie.setup(W,G,de,X,be);let vt,rt=ze;if(be!==null&&(vt=q.get(be),rt=Ye,rt.setIndex(vt)),W.isMesh)G.wireframe===!0?(le.setLineWidth(G.wireframeLinewidth*cn()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(W.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),le.setLineWidth(Yt*cn()),W.isLineSegments?rt.setMode(B.LINES):W.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else W.isPoints?rt.setMode(B.POINTS):W.isSprite&&rt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Yt=W._multiDrawStarts,ge=W._multiDrawCounts,ln=W._multiDrawCount,qe=be?q.get(be).bytesPerElement:1,fn=P.get(G).currentProgram.getUniforms();for(let Pn=0;Pn<ln;Pn++)fn.setValue(B,"_gl_DrawID",Pn),rt.render(Yt[Pn]/qe,ge[Pn])}else if(W.isInstancedMesh)rt.renderInstances(Ee,Mt,W.count);else if(X.isInstancedBufferGeometry){const Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ge=Math.min(X.instanceCount,Yt);rt.renderInstances(Ee,Mt,ge)}else rt.render(Ee,Mt)};function Rn(w,z,X){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=qt,w.needsUpdate=!0,ys(w,z,X),w.side=rn,w.needsUpdate=!0,ys(w,z,X),w.side=an):ys(w,z,X)}this.compile=function(w,z,X=null){X===null&&(X=w),T=pe.get(X),T.init(z),b.push(T),X.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),w!==X&&w.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const G=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const fe=W.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const de=fe[xe];Rn(de,X,W),G.add(de)}else Rn(fe,X,W),G.add(fe)}),T=b.pop(),G},this.compileAsync=function(w,z,X=null){const G=this.compile(w,z,X);return new Promise(W=>{function fe(){if(G.forEach(function(xe){P.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){W(w);return}setTimeout(fe,10)}Ke.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Wo=null;function Id(w){Wo&&Wo(w)}function Nl(){wi.stop()}function Ul(){wi.start()}const wi=new fd;wi.setAnimationLoop(Id),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){Wo=w,oe.setAnimationLoop(w),w===null?wi.stop():wi.start()},oe.addEventListener("sessionstart",Nl),oe.addEventListener("sessionend",Ul),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(w,z);const X=oe.enabled===!0&&oe.isPresenting===!0,G=A!==null&&(L===null||X)&&A.begin(D,L);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(z),z=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,z,L),T=pe.get(w,b.length),T.init(z),T.state.textureUnits=M.getTextureUnits(),b.push(T),et.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ce.setFromProjectionMatrix(et,Bn,z.reversedDepth),je=this.localClippingEnabled,it=ve.init(this.clippingPlanes,je),S=Y.get(w,E.length),S.init(),E.push(S),oe.enabled===!0&&oe.isPresenting===!0){const xe=D.xr.getDepthSensingMesh();xe!==null&&Xo(xe,z,-1/0,D.sortObjects)}Xo(w,z,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort($,he),pt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,pt&&ne.addToRenderList(S,w),this.info.render.frame++,it===!0&&ve.beginShadows();const W=T.state.shadowsArray;if(se.render(W,w,z),it===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){const xe=S.opaque,de=S.transmissive;if(T.setupLights(),z.isArrayCamera){const be=z.cameras;if(de.length>0)for(let we=0,Oe=be.length;we<Oe;we++){const ke=be[we];Bl(xe,de,w,ke)}pt&&ne.render(w);for(let we=0,Oe=be.length;we<Oe;we++){const ke=be[we];Fl(S,w,ke,ke.viewport)}}else de.length>0&&Bl(xe,de,w,z),pt&&ne.render(w),Fl(S,w,z)}L!==null&&O===0&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),G&&A.end(D),w.isScene===!0&&w.onAfterRender(D,w,z),ie.resetDefaultState(),H=-1,k=null,b.pop(),b.length>0?(T=b[b.length-1],M.setTextureUnits(T.state.textureUnits),it===!0&&ve.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,I!==null&&I.renderEnd()};function Xo(w,z,X,G){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ce.intersectsSprite(w)){G&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const xe=te.update(w),de=w.material;de.visible&&S.push(w,xe,de,X,Ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ce.intersectsObject(w))){const xe=te.update(w),de=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ge.copy(xe.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(de)){const be=xe.groups;for(let we=0,Oe=be.length;we<Oe;we++){const ke=be[we],Ee=de[ke.materialIndex];Ee&&Ee.visible&&S.push(w,xe,Ee,X,Ge.z,ke)}}else de.visible&&S.push(w,xe,de,X,Ge.z,null)}}const fe=w.children;for(let xe=0,de=fe.length;xe<de;xe++)Xo(fe[xe],z,X,G)}function Fl(w,z,X,G){const{opaque:W,transmissive:fe,transparent:xe}=w;T.setupLightsView(X),it===!0&&ve.setGlobalState(D.clippingPlanes,X),G&&le.viewport(J.copy(G)),W.length>0&&_s(W,z,X),fe.length>0&&_s(fe,z,X),xe.length>0&&_s(xe,z,X),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Bl(w,z,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ee=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new jt(1,1,{generateMipmaps:!0,type:Ee?kn:tn,minFilter:Fn,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const fe=T.state.transmissionRenderTarget[G.id],xe=G.viewport||J;fe.setSize(xe.z*D.transmissionResolutionScale,xe.w*D.transmissionResolutionScale);const de=D.getRenderTarget(),be=D.getActiveCubeFace(),we=D.getActiveMipmapLevel();D.setRenderTarget(fe),D.getClearColor(_e),ye=D.getClearAlpha(),ye<1&&D.setClearColor(16777215,.5),D.clear(),pt&&ne.render(X);const Oe=D.toneMapping;D.toneMapping=On;const ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),it===!0&&ve.setGlobalState(D.clippingPlanes,G),_s(w,X,G),M.updateMultisampleRenderTarget(fe),M.updateRenderTargetMipmap(fe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let nt=0,Mt=z.length;nt<Mt;nt++){const vt=z[nt],{object:rt,geometry:Yt,material:ge,group:ln}=vt;if(ge.side===an&&rt.layers.test(G.layers)){const qe=ge.side;ge.side=qt,ge.needsUpdate=!0,Ol(rt,X,G,Yt,ge,ln),ge.side=qe,ge.needsUpdate=!0,Ee=!0}}Ee===!0&&(M.updateMultisampleRenderTarget(fe),M.updateRenderTargetMipmap(fe))}D.setRenderTarget(de,be,we),D.setClearColor(_e,ye),ke!==void 0&&(G.viewport=ke),D.toneMapping=Oe}function _s(w,z,X){const G=z.isScene===!0?z.overrideMaterial:null;for(let W=0,fe=w.length;W<fe;W++){const xe=w[W],{object:de,geometry:be,group:we}=xe;let Oe=xe.material;Oe.allowOverride===!0&&G!==null&&(Oe=G),de.layers.test(X.layers)&&Ol(de,z,X,be,Oe,we)}}function Ol(w,z,X,G,W,fe){w.onBeforeRender(D,z,X,G,W,fe),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(D,z,X,G,w,fe),W.transparent===!0&&W.side===an&&W.forceSinglePass===!1?(W.side=qt,W.needsUpdate=!0,D.renderBufferDirect(X,z,G,W,w,fe),W.side=rn,W.needsUpdate=!0,D.renderBufferDirect(X,z,G,W,w,fe),W.side=an):D.renderBufferDirect(X,z,G,W,w,fe),w.onAfterRender(D,z,X,G,W,fe)}function ys(w,z,X){z.isScene!==!0&&(z=Pt);const G=P.get(w),W=T.state.lights,fe=T.state.shadowsArray,xe=W.state.version,de=ae.getParameters(w,W.state,fe,z,X,T.state.lightProbeGridArray),be=ae.getProgramCacheKey(de);let we=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,G.fog=z.fog;const Oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=V.get(w.envMap||G.environment,Oe),G.envMapRotation=G.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,we===void 0&&(w.addEventListener("dispose",St),we=new Map,G.programs=we);let ke=we.get(be);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===xe)return Hl(w,de),ke}else de.uniforms=ae.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,X,de),w.onBeforeCompile(de,D),ke=ae.acquireProgram(de,be),we.set(be,ke),G.uniforms=de.uniforms;const Ee=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=ve.uniform),Hl(w,de),G.needsLights=Fd(w),G.lightsStateVersion=xe,G.needsLights&&(Ee.ambientLightColor.value=W.state.ambient,Ee.lightProbe.value=W.state.probe,Ee.directionalLights.value=W.state.directional,Ee.directionalLightShadows.value=W.state.directionalShadow,Ee.spotLights.value=W.state.spot,Ee.spotLightShadows.value=W.state.spotShadow,Ee.rectAreaLights.value=W.state.rectArea,Ee.ltc_1.value=W.state.rectAreaLTC1,Ee.ltc_2.value=W.state.rectAreaLTC2,Ee.pointLights.value=W.state.point,Ee.pointLightShadows.value=W.state.pointShadow,Ee.hemisphereLights.value=W.state.hemi,Ee.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ee.spotLightMatrix.value=W.state.spotLightMatrix,Ee.spotLightMap.value=W.state.spotLightMap,Ee.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=ke,G.uniformsList=null,ke}function zl(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=_o.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Hl(w,z){const X=P.get(w);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Ld(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let X=0,G=w.length;X<G;X++){const W=w[X];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Nd(w,z,X,G,W){z.isScene!==!0&&(z=Pt),M.resetTextureUnits();const fe=z.fog,xe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?z.environment:null,de=L===null?D.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:We.workingColorSpace,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,we=V.get(G.envMap||xe,be),Oe=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let vt=On;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(vt=D.toneMapping);const rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Yt=rt!==void 0?rt.length:0,ge=P.get(G),ln=T.state.lights;if(it===!0&&(je===!0||w!==k)){const ht=w===k&&G.id===H;ve.setState(G,w,ht)}let qe=!1;G.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==ln.state.version||ge.outputColorSpace!==de||W.isBatchedMesh&&ge.batching===!1||!W.isBatchedMesh&&ge.batching===!0||W.isBatchedMesh&&ge.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ge.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ge.instancing===!1||!W.isInstancedMesh&&ge.instancing===!0||W.isSkinnedMesh&&ge.skinning===!1||!W.isSkinnedMesh&&ge.skinning===!0||W.isInstancedMesh&&ge.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ge.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ge.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ge.instancingMorph===!1&&W.morphTexture!==null||ge.envMap!==we||G.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==ve.numPlanes||ge.numIntersection!==ve.numIntersection)||ge.vertexAlphas!==Oe||ge.vertexTangents!==ke||ge.morphTargets!==Ee||ge.morphNormals!==nt||ge.morphColors!==Mt||ge.toneMapping!==vt||ge.morphTargetsCount!==Yt||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,ge.__version=G.version);let fn=ge.currentProgram;qe===!0&&(fn=ys(G,z,W),I&&G.isNodeMaterial&&I.onUpdateProgram(G,fn,ge));let Pn=!1,si=!1,Xi=!1;const st=fn.getUniforms(),Tt=ge.uniforms;if(le.useProgram(fn.program)&&(Pn=!0,si=!0,Xi=!0),G.id!==H&&(H=G.id,si=!0),ge.needsLights){const ht=Ld(T.state.lightProbeGridArray,W);ge.lightProbeGrid!==ht&&(ge.lightProbeGrid=ht,si=!0)}if(Pn||k!==w){le.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),st.setValue(B,"projectionMatrix",w.projectionMatrix),st.setValue(B,"viewMatrix",w.matrixWorldInverse);const ai=st.map.cameraPosition;ai!==void 0&&ai.setValue(B,dt.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&st.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&st.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,si=!0,Xi=!0)}if(ge.needsLights&&(ln.state.directionalShadowMap.length>0&&st.setValue(B,"directionalShadowMap",ln.state.directionalShadowMap,M),ln.state.spotShadowMap.length>0&&st.setValue(B,"spotShadowMap",ln.state.spotShadowMap,M),ln.state.pointShadowMap.length>0&&st.setValue(B,"pointShadowMap",ln.state.pointShadowMap,M)),W.isSkinnedMesh){st.setOptional(B,W,"bindMatrix"),st.setOptional(B,W,"bindMatrixInverse");const ht=W.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),st.setValue(B,"boneTexture",ht.boneTexture,M))}W.isBatchedMesh&&(st.setOptional(B,W,"batchingTexture"),st.setValue(B,"batchingTexture",W._matricesTexture,M),st.setOptional(B,W,"batchingIdTexture"),st.setValue(B,"batchingIdTexture",W._indirectTexture,M),st.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&st.setValue(B,"batchingColorTexture",W._colorsTexture,M));const oi=X.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&Ne.update(W,X,fn),(si||ge.receiveShadow!==W.receiveShadow)&&(ge.receiveShadow=W.receiveShadow,st.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&z.environment!==null&&(Tt.envMapIntensity.value=z.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=e_()),si){if(st.setValue(B,"toneMappingExposure",D.toneMappingExposure),ge.needsLights&&Ud(Tt,Xi),fe&&G.fog===!0&&j.refreshFogUniforms(Tt,fe),j.refreshMaterialUniforms(Tt,G,Pe,$e,T.state.transmissionRenderTarget[w.id]),ge.needsLights&&ge.lightProbeGrid){const ht=ge.lightProbeGrid;Tt.probesSH.value=ht.texture,Tt.probesMin.value.copy(ht.boundingBox.min),Tt.probesMax.value.copy(ht.boundingBox.max),Tt.probesResolution.value.copy(ht.resolution)}_o.upload(B,zl(ge),Tt,M)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_o.upload(B,zl(ge),Tt,M),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&st.setValue(B,"center",W.center),st.setValue(B,"modelViewMatrix",W.modelViewMatrix),st.setValue(B,"normalMatrix",W.normalMatrix),st.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const ht=G.uniformsGroups;for(let ai=0,ji=ht.length;ai<ji;ai++){const kl=ht[ai];K.update(kl,fn),K.bind(kl,fn)}}return fn}function Ud(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Fd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,z,X){const G=P.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),P.get(w.texture).__webglTexture=z,P.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const X=P.get(w);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0};const Bd=B.createFramebuffer();this.setRenderTarget=function(w,z=0,X=0){L=w,U=z,O=X;let G=null,W=!1,fe=!1;if(w){const de=P.get(w);if(de.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(B.FRAMEBUFFER,de.__webglFramebuffer),J.copy(w.viewport),ee.copy(w.scissor),ce=w.scissorTest,le.viewport(J),le.scissor(ee),le.setScissorTest(ce),H=-1;return}else if(de.__webglFramebuffer===void 0)M.setupRenderTarget(w);else if(de.__hasExternalTextures)M.rebindTextures(w,P.get(w.texture).__webglTexture,P.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(de.__boundDepthTexture!==Oe){if(Oe!==null&&P.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(w)}}const be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(fe=!0);const we=P.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(we[z])?G=we[z][X]:G=we[z],W=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?G=P.get(w).__webglMultisampledFramebuffer:Array.isArray(we)?G=we[X]:G=we,J.copy(w.viewport),ee.copy(w.scissor),ce=w.scissorTest}else J.copy(re).multiplyScalar(Pe).floor(),ee.copy(Ae).multiplyScalar(Pe).floor(),ce=Le;if(X!==0&&(G=Bd),le.bindFramebuffer(B.FRAMEBUFFER,G)&&le.drawBuffers(w,G),le.viewport(J),le.scissor(ee),le.setScissorTest(ce),W){const de=P.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,de.__webglTexture,X)}else if(fe){const de=z;for(let be=0;be<w.textures.length;be++){const we=P.get(w.textures[be]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+be,we.__webglTexture,X,de)}}else if(w!==null&&X!==0){const de=P.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,de.__webglTexture,X)}H=-1},this.readRenderTargetPixels=function(w,z,X,G,W,fe,xe,de=0){if(!(w&&w.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){le.bindFramebuffer(B.FRAMEBUFFER,be);try{const we=w.textures[de],Oe=we.format,ke=we.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de),!ut.textureFormatReadable(Oe)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(ke)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-G&&X>=0&&X<=w.height-W&&B.readPixels(z,X,G,W,F.convert(Oe),F.convert(ke),fe)}finally{const we=L!==null?P.get(L).__webglFramebuffer:null;le.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,z,X,G,W,fe,xe,de=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(z>=0&&z<=w.width-G&&X>=0&&X<=w.height-W){le.bindFramebuffer(B.FRAMEBUFFER,be);const we=w.textures[de],Oe=we.format,ke=we.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de),!ut.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,fe.byteLength,B.STREAM_READ),B.readPixels(z,X,G,W,F.convert(Oe),F.convert(ke),0);const nt=L!==null?P.get(L).__webglFramebuffer:null;le.bindFramebuffer(B.FRAMEBUFFER,nt);const Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ef(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,fe),B.deleteBuffer(Ee),B.deleteSync(Mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,X=0){const G=Math.pow(2,-X),W=Math.floor(w.image.width*G),fe=Math.floor(w.image.height*G),xe=z!==null?z.x:0,de=z!==null?z.y:0;M.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,xe,de,W,fe),le.unbindTexture()};const Od=B.createFramebuffer(),zd=B.createFramebuffer();this.copyTextureToTexture=function(w,z,X=null,G=null,W=0,fe=0){let xe,de,be,we,Oe,ke,Ee,nt,Mt;const vt=w.isCompressedTexture?w.mipmaps[fe]:w.image;if(X!==null)xe=X.max.x-X.min.x,de=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Oe=X.min.y,ke=X.isBox3?X.min.z:0;else{const Tt=Math.pow(2,-W);xe=Math.floor(vt.width*Tt),de=Math.floor(vt.height*Tt),w.isDataArrayTexture?be=vt.depth:w.isData3DTexture?be=Math.floor(vt.depth*Tt):be=1,we=0,Oe=0,ke=0}G!==null?(Ee=G.x,nt=G.y,Mt=G.z):(Ee=0,nt=0,Mt=0);const rt=F.convert(z.format),Yt=F.convert(z.type);let ge;z.isData3DTexture?(M.setTexture3D(z,0),ge=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(M.setTexture2DArray(z,0),ge=B.TEXTURE_2D_ARRAY):(M.setTexture2D(z,0),ge=B.TEXTURE_2D),le.activeTexture(B.TEXTURE0),le.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),le.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),le.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const ln=le.getParameter(B.UNPACK_ROW_LENGTH),qe=le.getParameter(B.UNPACK_IMAGE_HEIGHT),fn=le.getParameter(B.UNPACK_SKIP_PIXELS),Pn=le.getParameter(B.UNPACK_SKIP_ROWS),si=le.getParameter(B.UNPACK_SKIP_IMAGES);le.pixelStorei(B.UNPACK_ROW_LENGTH,vt.width),le.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt.height),le.pixelStorei(B.UNPACK_SKIP_PIXELS,we),le.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),le.pixelStorei(B.UNPACK_SKIP_IMAGES,ke);const Xi=w.isDataArrayTexture||w.isData3DTexture,st=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const Tt=P.get(w),oi=P.get(z),ht=P.get(Tt.__renderTarget),ai=P.get(oi.__renderTarget);le.bindFramebuffer(B.READ_FRAMEBUFFER,ht.__webglFramebuffer),le.bindFramebuffer(B.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let ji=0;ji<be;ji++)Xi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(w).__webglTexture,W,ke+ji),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(z).__webglTexture,fe,Mt+ji)),B.blitFramebuffer(we,Oe,xe,de,Ee,nt,xe,de,B.DEPTH_BUFFER_BIT,B.NEAREST);le.bindFramebuffer(B.READ_FRAMEBUFFER,null),le.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||P.has(w)){const Tt=P.get(w),oi=P.get(z);le.bindFramebuffer(B.READ_FRAMEBUFFER,Od),le.bindFramebuffer(B.DRAW_FRAMEBUFFER,zd);for(let ht=0;ht<be;ht++)Xi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.__webglTexture,W,ke+ht):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,W),st?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oi.__webglTexture,fe,Mt+ht):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,oi.__webglTexture,fe),W!==0?B.blitFramebuffer(we,Oe,xe,de,Ee,nt,xe,de,B.COLOR_BUFFER_BIT,B.NEAREST):st?B.copyTexSubImage3D(ge,fe,Ee,nt,Mt+ht,we,Oe,xe,de):B.copyTexSubImage2D(ge,fe,Ee,nt,we,Oe,xe,de);le.bindFramebuffer(B.READ_FRAMEBUFFER,null),le.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else st?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(ge,fe,Ee,nt,Mt,xe,de,be,rt,Yt,vt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(ge,fe,Ee,nt,Mt,xe,de,be,rt,vt.data):B.texSubImage3D(ge,fe,Ee,nt,Mt,xe,de,be,rt,Yt,vt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,fe,Ee,nt,xe,de,rt,Yt,vt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,fe,Ee,nt,vt.width,vt.height,rt,vt.data):B.texSubImage2D(B.TEXTURE_2D,fe,Ee,nt,xe,de,rt,Yt,vt);le.pixelStorei(B.UNPACK_ROW_LENGTH,ln),le.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qe),le.pixelStorei(B.UNPACK_SKIP_PIXELS,fn),le.pixelStorei(B.UNPACK_SKIP_ROWS,Pn),le.pixelStorei(B.UNPACK_SKIP_IMAGES,si),fe===0&&z.generateMipmaps&&B.generateMipmap(ge),le.unbindTexture()},this.initRenderTarget=function(w){P.get(w).__webglFramebuffer===void 0&&M.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){U=0,O=0,L=null,le.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const n_=.5,i_=10,$s=1080,Ra=-89.999,Pa=89.999;class r_{constructor(){N(this,"target",new C(0,-.5,0));N(this,"angleX",-25);N(this,"angleY",-200.5);N(this,"distance",4);N(this,"velocityX",0);N(this,"velocityY",0);N(this,"lastX",0);N(this,"lastY",0);N(this,"lastTime",0);N(this,"orbiting",!1)}beginOrbit(e,t,n){this.lastX=e,this.lastY=t,this.lastTime=n,this.velocityX=0,this.velocityY=0,this.orbiting=!0}orbitTo(e,t,n){if(!this.orbiting)return;const i=e-this.lastX,s=t-this.lastY,o=Math.max((n-this.lastTime)/1e3,1/240);this.angleY-=i,this.angleX=xt.clamp(this.angleX-s,Ra,Pa),this.velocityY=xt.clamp(-i/o,-$s,$s),this.velocityX=xt.clamp(-s/o,-$s,$s),this.lastX=e,this.lastY=t,this.lastTime=n}endOrbit(e){if(!this.orbiting)return;const t=Math.exp(-6*Math.max(0,(e-this.lastTime)/1e3));this.velocityX*=t,this.velocityY*=t,this.orbiting=!1}stopInertia(){this.velocityX=0,this.velocityY=0,this.orbiting=!1}update(e){if(this.orbiting)return;this.angleY+=this.velocityY*e;const t=xt.clamp(this.angleX+this.velocityX*e,Ra,Pa);(t===Ra||t===Pa)&&(this.velocityX=0),this.angleX=t;const n=Math.exp(-6*e);this.velocityX*=n,this.velocityY*=n,Math.abs(this.velocityX)<.01&&(this.velocityX=0),Math.abs(this.velocityY)<.01&&(this.velocityY=0)}zoomByWheel(e){this.zoomByScale(Math.exp(e*.001))}zoomByScale(e){this.distance=xt.clamp(this.distance*e,n_,i_)}apply(e){const t=new C(0,0,this.distance);t.applyAxisAngle(new C(1,0,0),xt.degToRad(this.angleX)),t.applyAxisAngle(new C(0,1,0),xt.degToRad(this.angleY)),e.position.copy(this.target).add(t),e.up.set(0,1,0),e.lookAt(this.target)}getLightDirection(e){const t=xt.degToRad(90-this.angleY),n=xt.degToRad(-this.angleX);return e.set(Math.cos(t)*Math.cos(n),Math.sin(n),Math.sin(t)*Math.cos(n)).normalize()}}var s_=`const float IOR_AIR = 1.0; 
const float IOR_WATER = 1.333; 
const float poolHeight = 1.0; 

uniform vec3 light; 
uniform sampler2D water; 

varying vec3 oldPos; 
varying vec3 newPos; 
varying vec3 ray; 

/**
 * Computes ray intersection with a bounding cube (representing the pool bounds)
 * using the Kay-Kajiya slab method.
 * Returns vec2(tNear, tFar) representing entry and exit parameters.
 */
vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / r;
  vec3 tMax = (cubeMax - origin) / r;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

/**
 * Projects a point from the water surface onto the pool floor/walls.
 *
 * This handles two types of light paths:
 * 1. Direct path: Ray goes straight to the floor
 * 2. Wall bounce path: Ray hits a side wall first, then continues to floor
 *
 * The two-step process ensures we properly handle rays that exit through
 * the sides of the pool before reaching the bottom.
 *
 * @param origin Starting point (on water surface)
 * @param r Initial ray direction (may hit wall first)
 * @param refractedLight Final ray direction for floor projection
 * @return Final position on pool floor
 */
vec3 project(vec3 origin, vec3 r, vec3 refractedLight) {
  
  
  vec2 tcube = intersectCube(origin, r, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));

  
  origin += r * tcube.y;

  
  
  
  float tplane = (-origin.y - 1.0) / refractedLight.y;
  return origin + refractedLight * tplane;
}

void main() {
  /**
 * * CAUSTICS VERTEX TRANSFORMATION
 *    *
 *    * Each vertex in the water grid represents one "column" of light entering the water.
 *    * We compute where this light column hits the pool floor, both for flat water
 *    * (reference) and for the actual wavy surface (distorted).
 */

  
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  info.ba *= 0.5; 

  /**
 * * Step 2: Reconstruct surface normal from stored derivatives.
 *    *
 *    * The water texture stores ∂h/∂x in B and ∂h/∂z in A (height partial derivatives).
 *    * The normal vector N = normalize(-∂h/∂x, 1, -∂h/∂z)
 *    *
 *    * We use the identity: for unit normal, Ny = sqrt(1 - Nx² - Nz²)
 *    * where Nx and Nz are the (scaled) stored derivatives.
 */
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  /**
 * * Step 3: Compute refracted light directions using Snell's Law.
 *    *
 *    * refractedLight: Direction if water were perfectly flat (uniform refraction)
 *    * ray: Direction through the actual wavy surface (varies per vertex)
 *    *
 *    * GLSL refract(I, N, eta) computes the refracted direction where:
 *    *   I = incident direction (normalized)
 *    *   N = surface normal (normalized)
 *    *   eta = n1/n2 (ratio of indices of refraction)
 */
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);

  /**
 * * Step 4: Project light rays to pool floor.
 *    *
 *    * oldPos: Where light would hit if water were flat (reference grid)
 *    * newPos: Where light actually hits through wavy surface (distorted grid)
 *    *
 *    * Note: position.xzy swizzle converts from XY grid to XZ world (Y is up in world space)
 */
  oldPos = project(position.xzy, refractedLight, refractedLight);
  newPos = project(position.xzy + vec3(0.0, info.r, 0.0), ray, refractedLight);

  /**
 * * Step 5: Position vertex for rasterization.
 *    *
 *    * We render directly to the caustics texture, so gl_Position maps to texture UV.
 *    * The 0.75 scale factor matches the pool floor's coverage in the texture.
 *    *
 *    * The offset (refractedLight.xz / refractedLight.y) accounts for the slant of
 *    * the light - without this, caustics would be misaligned with the pool floor rendering.
 */
  gl_Position = vec4(0.75 * (newPos.xz + refractedLight.xz / refractedLight.y), 0.0, 1.0);
}`,o_=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const float poolHeight = 1.0;

uniform vec3 light; 
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled; 
#define MAX_CUBES 10
uniform vec3 cubeCenters[MAX_CUBES];
uniform vec3 cubeHalfSizes[MAX_CUBES];
uniform int cubeCount;
uniform bool cubeEnabled; 
uniform vec3 torusKnotCenter; 
uniform bool torusKnotEnabled; 
uniform vec3 meshCenter; 
uniform float meshBoundingRadius; 
uniform bool meshEnabled; 
uniform sampler2D objectShadowTex; 

varying vec3 oldPos; 
varying vec3 newPos; 
varying vec3 ray; 

/**
 * Ray-AABB (Axis-Aligned Bounding Box) intersection using the slab method.
 *
 * The slab method treats each axis as a pair of parallel planes (slabs).
 * For each axis, we compute where the ray enters and exits that slab.
 * The ray intersects the box where ALL slabs overlap simultaneously.
 *
 * Math: For each axis i, solve:  origin.i + t * direction.i = plane.i
 *       Therefore: t = (plane.i - origin.i) / direction.i
 *
 * @param origin Ray starting point
 * @param r Ray direction (does not need to be normalized)
 * @param cubeMin Minimum corner of the AABB
 * @param cubeMax Maximum corner of the AABB
 * @return vec2(tNear, tFar) - parametric distances to entry and exit points
 *         If tNear > tFar, the ray misses the box entirely
 */
vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {
  
  vec3 tMin = (cubeMin - origin) / r;
  vec3 tMax = (cubeMax - origin) / r;

  
  vec3 t1 = min(tMin, tMax); 
  vec3 t2 = max(tMin, tMax); 

  
  float tNear = max(max(t1.x, t1.y), t1.z);
  
  float tFar = min(min(t2.x, t2.y), t2.z);

  return vec2(tNear, tFar);
}

/**
 * Returns 1.0 if the ray intersects the cube object, otherwise 0.0.
 */
float cubeOcclusion(vec3 origin, vec3 direction, vec3 center, vec3 halfSize) {
  vec2 hit = intersectCube(origin, direction, center - halfSize, center + halfSize);
  return step(0.0, hit.y) * step(hit.x, hit.y);
}

/**
 * Analytical ray-sphere intersection using the quadratic formula.
 *
 * A sphere is defined as all points P where |P - C|² = r².
 * A ray is defined as P(t) = O + t*D where O is origin, D is direction.
 *
 * Substituting the ray into the sphere equation:
 *   |O + t*D - C|² = r²
 *   |(O - C) + t*D|² = r²
 *
 * Let L = O - C (vector from sphere center to ray origin):
 *   |L + t*D|² = r²
 *   (L + t*D)·(L + t*D) = r²
 *   L·L + 2*t*(L·D) + t²*(D·D) = r²
 *
 * Rearranging into standard quadratic form at² + bt + c = 0:
 *   a = D·D           (always positive for non-zero direction)
 *   b = 2 * L·D       (projection of L onto ray direction)
 *   c = L·L - r²      (distance² from origin to center, minus radius²)
 *
 * discriminant = b² - 4ac determines number of intersections:
 *   < 0: ray misses sphere (no real solutions)
 *   = 0: ray tangent to sphere (one solution)
 *   > 0: ray pierces sphere (two solutions)
 *
 * @return Parametric t of nearest intersection, or 1.0e6 if no hit
 */
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center; 
  float a = dot(ray, ray); 
  float b = 2.0 * dot(toSphere, ray); 
  float c = dot(toSphere, toSphere) - radius * radius; 
  float discriminant = b * b - 4.0 * a * c;

  if (discriminant > 0.0) {
    
    float t = (-b - sqrt(discriminant)) / (2.0 * a);
    if (t > 0.0) return t; 
  }
  return 1.0e6; 
}

/**
 * Returns near entry intersection distance with sphere bounds.
 */
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float root = sqrt(discriminant);
    float near = (-b - root) / (2.0 * a);
    float far = (-b + root) / (2.0 * a);
    if (near > 0.0) return near;
    if (far > 0.0) return 0.0;
  }
  return 1.0e6;
}

/**
 * Signed Distance Function (SDF) for a (p, q) Torus Knot.
 *
 * A torus knot is a curve that winds around a torus surface, going through
 * the hole p times while circling the torus q times. Here we use (2, 3) = trefoil knot.
 *
 * PARAMETRIC EQUATIONS for a (p, q) torus knot:
 *   r(θ) = R * (2 + cos(q*θ)) / 2    -- varying radius from center
 *   x(θ) = r(θ) * cos(p*θ)           -- horizontal position
 *   y(θ) = R * sin(q*θ) / 2          -- vertical oscillation
 *   z(θ) = r(θ) * sin(p*θ)           -- depth position
 *
 * where θ ∈ [0, 2π], R is the major radius, and the curve is then inflated
 * by 'tube' radius to create the solid shape.
 *
 * SDF COMPUTATION:
 * We discretize the curve into 64 line segments and find the minimum distance
 * from point p to any segment. This uses the point-to-line-segment formula:
 *   For segment from A to B, and point P:
 *   h = clamp((PA · AB) / (AB · AB), 0, 1)  -- projection parameter
 *   distance = |PA - AB * h|                 -- perpendicular distance
 *
 * @param p Query point in world space
 * @param center Center of the torus knot
 * @return Signed distance (negative inside, positive outside)
 */
float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;

  
  
  
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }

  float minDist = 1.0e6;
  const int segments = 64; 
  const float radius = 0.17; 
  const float tube = 0.045; 
  const float p_knot = 2.0; 
  const float q_knot = 3.0; 

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    
    float theta = float(i) / float(segments) * 6.283185307179586; 

    
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5; 
    vec3 pt = vec3(
      rad * cos(p_knot * theta), 
      -radius * sin(q_knot * theta) * 0.5, 
      rad * sin(p_knot * theta) 
    );

    if (i > 0) {
      
      vec3 ba = pt - prevPt; 
      vec3 pa = pos - prevPt; 
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); 
      float d = length(pa - ba * h); 
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }

  
  return minDist - tube;
}

/**
 * Sphere-tracing (raymarching) to find ray intersection with the torus knot.
 *
 * SPHERE TRACING ALGORITHM:
 * Unlike analytical intersections (spheres, planes), complex SDFs require
 * iterative raymarching. The key insight is that the SDF gives us a safe
 * distance to step - if SDF(p) = d, we know there's no surface within d
 * units of p, so we can safely advance the ray by d.
 *
 * Algorithm:
 *   1. Start at ray entry into bounding sphere
 *   2. Evaluate SDF at current point
 *   3. If SDF < ε, we've hit the surface
 *   4. Otherwise, advance ray by SDF distance (guaranteed safe)
 *   5. Repeat until hit or max iterations/distance exceeded
 *
 * This converges quickly near surfaces (small steps) and efficiently
 * skips empty space (large steps).
 *
 * @param origin Ray starting point
 * @param ray Ray direction
 * @param center Torus knot center position
 * @return Parametric t of intersection, or 1.0e6 if no hit
 */
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {
  
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);
  if (t_bound > 1.0e5) return 1.0e6; 

  float t = t_bound; 
  for (int i = 0; i < 30; i++) {
    vec3 p = origin + ray * t;
    float d = sdTorusKnot(p, center);

    if (d < 0.001) {
      return t; 
    }

    t += d; 

    
    if (t > t_bound + 0.5) break;
  }
  return 1.0e6; 
}

/**
 * Returns 1.0 if the ray intersects the torus knot, otherwise 0.0.
 */
float torusKnotOcclusion(vec3 origin, vec3 direction) {
  float hit = intersectTorusKnot(origin, direction, torusKnotCenter);
  return hit < 1.0e5
    ? 1.0
    : 0.0;
}

void main() {
  /**
 * * CAUSTICS INTENSITY CALCULATION via Differential Area Comparison
 *    *
 *    * The physical basis: energy conservation. Light energy in a beam is constant,
 *    * but when the beam's cross-sectional area changes (due to refraction), the
 *    * intensity (energy per unit area) must change inversely.
 *    *
 *    * MATHEMATICAL APPROACH:
 *    * We use GPU screen-space derivatives (dFdx, dFdy) to measure how positions
 *    * change across neighboring pixels. For a grid of parallel rays:
 *    *
 *    *   oldPos: Where rays hit if water were flat (regular grid)
 *    *   newPos: Where rays hit after refracting through waves (distorted grid)
 *    *
 *    * The derivative gives us the Jacobian of this mapping:
 *    *   J = | ∂newPos/∂x  ∂newPos/∂y |
 *    *       | ∂newPos/∂x  ∂newPos/∂y |
 *    *
 *    * Area ratio ≈ |det(J_old)| / |det(J_new)|
 *    * For simplicity, we approximate this as (length of sides).
 *    *
 *    * When waves FOCUS light (convex lens effect):
 *    *   - newArea shrinks as rays converge
 *    *   - oldArea / newArea becomes large → bright caustic
 *    *
 *    * When waves SPREAD light (concave lens effect):
 *    *   - newArea expands as rays diverge
 *    *   - oldArea / newArea becomes small → dim area
 */
  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));
  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));

  
  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);

  
  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  /**
 * * SHADOW/OCCLUSION CALCULATION
 *    *
 *    * Objects in the water block light rays, creating shadows on the pool floor.
 *    * We store the shadow factor in the Green channel (1.0 = fully lit, 0.0 = full shadow).
 *    *
 *    * Different techniques are used based on object type:
 *    * - Sphere: Analytical soft shadow using cross-product area calculation
 *    * - Cube: Multi-sample ray-box intersection tests
 *    * - Complex meshes: Pre-rendered shadow map with PCF filtering
 */
  if (sphereEnabled) {
    /**
     * * ANALYTICAL SPHERE SOFT SHADOW
     *      *
     *      * This technique computes a soft shadow penumbra analytically, avoiding
     *      * multi-sample noise while still producing smooth shadow edges.
     */
    float shadowAccum = 1.0;
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      vec3 dir = (sphereCenters[i] - newPos) / sphereRadii[i]; 
      vec3 area = cross(dir, refractedLight); 
      float shadow = dot(area, area); 

      
      float dist = dot(dir, -refractedLight);

      
      shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);

      
      shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);

      
      shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
      shadowAccum *= shadow;
    }
    gl_FragColor.g = shadowAccum;

  } else if (cubeEnabled) {
    /**
     * * MULTI-SAMPLE CUBE SOFT SHADOW (3x3 = 9 samples)
     *      *
     *      * For boxes, we can't easily compute analytical soft shadows due to the
     *      * sharp corners. Instead, we use stochastic sampling:
     *      *
     *      * 1. Create an orthonormal basis perpendicular to the light direction
     *      * 2. Sample 9 points in a grid pattern around the surface point
     *      * 3. Test each sample ray against the cube
     *      * 4. Average results for soft shadow approximation
     *      *
     *      * This is essentially a simple form of Percentage Closer Soft Shadows (PCSS).
     */
    vec3 shadowRay = -refractedLight; 

    
    vec3 right = normalize(cross(shadowRay, vec3(0.0, 1.0, 0.0)));
    vec3 up = normalize(cross(right, shadowRay));

    float shadowAccum = 1.0;
    const float spread = 0.025; 

    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      float occlusion = 0.0;
      
      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          vec3 sampleOrigin = newPos + right * float(x) * spread + up * float(y) * spread;
          occlusion += cubeOcclusion(sampleOrigin, shadowRay, cubeCenters[i], cubeHalfSizes[i]);
        }
      }
      shadowAccum *= (1.0 - occlusion / 9.0);
    }
    gl_FragColor.g = shadowAccum;

  } else if (torusKnotEnabled || meshEnabled) {
    /**
 * * SHADOW MAP LOOKUP WITH PCF (Percentage-Closer Filtering)
 *      *
 *      * Complex geometry uses a pre-rendered shadow map. PCF samples the
 *      * shadow map at multiple offsets and averages, creating soft edges.
 *      *
 *      * Shadow UV calculation:
 *      *   Project the 3D point onto the shadow map plane using the light direction.
 *      *   UV = (point.xz - point.y * light.xz/light.y) -- projection formula
 *      *
 *      * The 0.75 scaling and 0.5+0.5 offset map world [-1,1] to texture [0,1].
 */
    vec2 shadowUV =
      0.75 * (newPos.xz - newPos.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
    const float d = 4.0 / 1024.0; 

    
    float occlusion = texture2D(objectShadowTex, shadowUV).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, 0.0)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, 0.0)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, -d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, -d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, -d)).r;
    gl_FragColor.g = 1.0 - 0.8 * occlusion / 9.0; 

  } else {
    gl_FragColor.g = 1.0; 
  }

  /**
 * * EDGE FADEOUT (Anti-Aliasing at Pool Boundaries)
 *    *
 *    * Caustics should fade smoothly near the water surface line to avoid
 *    * hard seams where the underwater tiles meet the air. This uses a
 *    * sigmoid function to create a smooth transition zone.
 *    *
 *    * The calculation:
 *    * 1. Trace a ray from the surface point toward the light
 *    * 2. Find where this ray exits the pool bounds
 *    * 3. If the exit point is near the water surface (Y ≈ 0), fade out
 *    *
 *    * The sigmoid 1/(1 + e^(-x)) maps the distance to a smooth [0,1] range.
 *    * The constants (200.0, 10.0, 2.0/12.0) are tuned for visual appearance.
 */
  vec2 t = intersectCube(
    newPos,
    -refractedLight,
    vec3(-1.0, -poolHeight, -1.0),
    vec3(1.0, 2.0, 1.0)
  );
  gl_FragColor.r *=
    1.0 /
    (1.0 +
      exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
}`,a_=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

uniform vec3 light;

uniform sampler2D water;

uniform float cornerRadius;
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

varying vec3 oldPos; 
varying vec3 newPos; 
varying vec3 ray; 

/**
 * Solves 2D intersections of a ray with a rounded rectangle layout on the horizontal XZ plane.
 * Used to find coordinates where refracted light hits the pool perimeter walls.
 */
vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {
  float tNear = 1e6;
  float tFar = -1e6;
  bool found = false;

  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {
    float t = (poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.x) > 1.0e-7) {
    float t = (-poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (-poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }

  
  if (R > 0.0) {
    vec2 centers[4];
    centers[0] = vec2(r_sub_x, r_sub_z);
    centers[1] = vec2(-r_sub_x, r_sub_z);
    centers[2] = vec2(-r_sub_x, -r_sub_z);
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {
      vec2 center = centers[i];
      vec2 toCenter = origin - center;
      float a = dot(ray, ray);
      float b = 2.0 * dot(toCenter, ray);
      float c = dot(toCenter, toCenter) - R * R;
      float disc = b * b - 4.0 * a * c;
      if (disc >= 0.0) {
        float sqrtDisc = sqrt(disc);
        float tA = (-b - sqrtDisc) / (2.0 * a);
        float tB = (-b + sqrtDisc) / (2.0 * a);

        
        vec2 ptA = origin + tA * ray;
        bool validA = false;
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;
        if (validA) {
          tNear = min(tNear, tA);
          tFar = max(tFar, tA);
          found = true;
        }

        
        vec2 ptB = origin + tB * ray;
        bool validB = false;
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;
        if (validB) {
          tNear = min(tNear, tB);
          tFar = max(tFar, tB);
          found = true;
        }
      }
    }
  }

  if (!found) {
    return vec2(-1e6, 1e6);
  }

  return vec2(tNear, tFar);
}

/**
 * Calculates 3D intersection parameters of a ray with the rounded pool box boundaries.
 */
vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {
  float tYNear = -1.0e6;
  float tYFar = 1.0e6;
  if (abs(ray.y) > 1.0e-7) {
    float tYMin = (-poolHeight - origin.y) / ray.y;
    float tYMax = (2.0 - origin.y) / ray.y;
    tYNear = min(tYMin, tYMax);
    tYFar = max(tYMin, tYMax);
  }
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);
  float tNear = max(tYNear, tXZ.x);
  float tFar = min(tYFar, tXZ.y);
  return vec2(tNear, tFar);
}

/**
 * Projects a ray from the surface down to the pool walls/floor boundary.
 */
vec3 project(vec3 origin, vec3 r, vec3 refractedLight) {
  
  vec2 tcube = intersectRoundedBox(origin, r, cornerRadius);
  origin += r * tcube.y;

  
  float tplane = (-origin.y - poolHeight) / refractedLight.y;
  return origin + refractedLight * tplane;
}

void main() {
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  info.ba *= 0.5;

  
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  
  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);

  
  oldPos = project(
    vec3(position.x * poolWidth, 0.0, position.y * poolLength),
    refractedLight,
    refractedLight
  );
  newPos = project(
    vec3(position.x * poolWidth, info.r, position.y * poolLength),
    ray,
    refractedLight
  );

  
  gl_Position.x = 0.75 * (newPos.x - newPos.y * refractedLight.x / refractedLight.y) / poolWidth;
  gl_Position.y = 0.75 * (newPos.z - newPos.y * refractedLight.z / refractedLight.y) / poolLength;
  gl_Position.z = 0.0;
  gl_Position.w = 1.0;
}`,c_=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

uniform vec3 light;
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled;
#define MAX_CUBES 10
uniform vec3 cubeCenters[MAX_CUBES];
uniform vec3 cubeHalfSizes[MAX_CUBES];
uniform int cubeCount;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter;
uniform bool torusKnotEnabled;
uniform vec3 meshCenter;
uniform float meshBoundingRadius;
uniform bool meshEnabled;

uniform sampler2D objectShadowTex;

uniform float cornerRadius;
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

varying vec3 oldPos; 
varying vec3 newPos; 
varying vec3 ray; 

/**
 * Solves 2D intersections of a ray with a rounded rectangle layout on the horizontal XZ plane.
 */
vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {
  float tNear = 1e6;
  float tFar = -1e6;
  bool found = false;

  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {
    float t = (poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.x) > 1.0e-7) {
    float t = (-poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (-poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }

  
  if (R > 0.0) {
    vec2 centers[4];
    centers[0] = vec2(r_sub_x, r_sub_z);
    centers[1] = vec2(-r_sub_x, r_sub_z);
    centers[2] = vec2(-r_sub_x, -r_sub_z);
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {
      vec2 center = centers[i];
      vec2 toCenter = origin - center;
      float a = dot(ray, ray);
      float b = 2.0 * dot(toCenter, ray);
      float c = dot(toCenter, toCenter) - R * R;
      float disc = b * b - 4.0 * a * c;
      if (disc >= 0.0) {
        float sqrtDisc = sqrt(disc);
        float tA = (-b - sqrtDisc) / (2.0 * a);
        float tB = (-b + sqrtDisc) / (2.0 * a);

        vec2 ptA = origin + tA * ray;
        bool validA = false;
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;
        if (validA) {
          tNear = min(tNear, tA);
          tFar = max(tFar, tA);
          found = true;
        }

        vec2 ptB = origin + tB * ray;
        bool validB = false;
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;
        if (validB) {
          tNear = min(tNear, tB);
          tFar = max(tFar, tB);
          found = true;
        }
      }
    }
  }

  if (!found) {
    return vec2(-1e6, 1e6);
  }

  return vec2(tNear, tFar);
}

/**
 * Calculates 3D intersection parameters of a ray with the rounded pool box.
 */
vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {
  float tYNear = -1.0e6;
  float tYFar = 1.0e6;
  if (abs(ray.y) > 1.0e-7) {
    float tYMin = (-poolHeight - origin.y) / ray.y;
    float tYMax = (2.0 - origin.y) / ray.y;
    tYNear = min(tYMin, tYMax);
    tYFar = max(tYMin, tYMax);
  }
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);
  float tNear = max(tYNear, tXZ.x);
  float tFar = min(tYFar, tXZ.y);
  return vec2(tNear, tFar);
}

/**
 * Solves standard ray-box intersection.
 * Used for fast shadow occlusion slab tests against the active cube obstacle.
 */
vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / r;
  vec3 tMax = (cubeMax - origin) / r;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

/**
 * Checks if a shadow ray intersects the cube obstacle.
 */
float cubeOcclusion(vec3 origin, vec3 direction, vec3 center, vec3 halfSize) {
  vec2 hit = intersectCube(origin, direction, center - halfSize, center + halfSize);
  return step(0.0, hit.y) * step(hit.x, hit.y);
}

/**
 * Checks intersection against a sphere.
 */
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float t = (-b - sqrt(discriminant)) / (2.0 * a);
    if (t > 0.0) return t;
  }
  return 1.0e6;
}

/**
 * Checks entry/exit bounds on a sphere obstacle.
 */
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float root = sqrt(discriminant);
    float near = (-b - root) / (2.0 * a);
    float far = (-b + root) / (2.0 * a);
    if (near > 0.0) return near;
    if (far > 0.0) return 0.0;
  }
  return 1.0e6;
}

/**
 * Evaluates the Signed Distance Function (SDF) of the Torus Knot.
 */
float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }
  float minDist = 1.0e6;
  const int segments = 64;
  const float radius = 0.17;
  const float tube = 0.045;
  const float p_knot = 2.0;
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    float theta = float(i) / float(segments) * 6.283185307179586;
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;
    vec3 pt = vec3(
      rad * cos(p_knot * theta),
      -radius * sin(q_knot * theta) * 0.5,
      rad * sin(p_knot * theta)
    );
    if (i > 0) {
      vec3 ba = pt - prevPt;
      vec3 pa = pos - prevPt;
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
      float d = length(pa - ba * h);
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }
  return minDist - tube;
}

/**
 * Traces a ray to find intersections with the Torus Knot obstacle.
 */
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;
  for (int i = 0; i < 30; i++) {
    vec3 p = origin + ray * t;
    float d = sdTorusKnot(p, center);
    if (d < 0.001) {
      return t;
    }
    t += d;
    if (t > t_bound + 0.5) break;
  }
  return 1.0e6;
}

/**
 * Checks if a shadow ray hits the Torus Knot.
 */
float torusKnotOcclusion(vec3 origin, vec3 direction) {
  float hit = intersectTorusKnot(origin, direction, torusKnotCenter);
  return hit < 1.0e5
    ? 1.0
    : 0.0;
}

void main() {
  
  
  
  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));
  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));

  
  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);

  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  if (sphereEnabled) {
    
    float shadowAccum = 1.0;
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      vec3 dir = (sphereCenters[i] - newPos) / sphereRadii[i];
      vec3 area = cross(dir, refractedLight);
      float shadow = dot(area, area);
      float dist = dot(dir, -refractedLight);
      shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
      shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);
      shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
      shadowAccum *= shadow;
    }
    gl_FragColor.g = shadowAccum;
  } else if (cubeEnabled) {
    
    vec3 shadowRay = -refractedLight;
    vec3 right = normalize(cross(shadowRay, vec3(0.0, 1.0, 0.0)));
    vec3 up = normalize(cross(right, shadowRay));

    float shadowAccum = 1.0;
    const float spread = 0.025;

    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      float occlusion = 0.0;
      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          vec3 sampleOrigin = newPos + right * float(x) * spread + up * float(y) * spread;
          occlusion += cubeOcclusion(sampleOrigin, shadowRay, cubeCenters[i], cubeHalfSizes[i]);
        }
      }
      shadowAccum *= (1.0 - occlusion / 9.0);
    }
    gl_FragColor.g = shadowAccum;
  } else if (torusKnotEnabled || meshEnabled) {
    
    vec2 shadowUV =
      0.75 *
        (newPos.xz - newPos.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
      0.5;
    const float d = 4.0 / 1024.0;
    float occlusion = texture2D(objectShadowTex, shadowUV).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, 0.0)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, 0.0)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, -d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, -d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, -d)).r;
    gl_FragColor.g = 1.0 - 0.8 * occlusion / 9.0;
  } else {
    gl_FragColor.g = 1.0;
  }

  
  vec2 t = intersectRoundedBox(newPos, -refractedLight, cornerRadius);
  gl_FragColor.r *=
    1.0 /
    (1.0 +
      exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
}`;class l_{constructor(e,t,n){N(this,"texture");N(this,"target");N(this,"scene",new ul);N(this,"camera",new Wi(-1,1,1,-1,0,1));N(this,"mesh");N(this,"boxMaterial");N(this,"roundedBoxMaterial",null);this.renderer=e,this.state=t,this.objectShadowTexture=n,this.target=new jt(1024,1024,{minFilter:lt,magFilter:lt,format:At}),this.texture=this.target.texture,this.boxMaterial=new ot({vertexShader:s_,fragmentShader:o_,uniforms:{light:{value:t.lightDirection.clone()},water:{value:null},objectShadowTex:{value:n},...t.createUniforms()},blending:Tn,side:an,depthTest:!1,depthWrite:!1}),this.mesh=new Rt(new Vi(2,2,200,200),this.boxMaterial),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}setPoolShape(e,t,n,i,s){e==="Box"?(this.camera.left=-1,this.camera.right=1,this.camera.top=1,this.camera.bottom=-1,this.camera.updateProjectionMatrix(),this.mesh.material=this.boxMaterial):(this.camera.left=-n,this.camera.right=n,this.camera.top=s,this.camera.bottom=-s,this.camera.updateProjectionMatrix(),this.roundedBoxMaterial?(this.roundedBoxMaterial.uniforms.cornerRadius.value=t,this.roundedBoxMaterial.uniforms.poolWidth.value=n,this.roundedBoxMaterial.uniforms.poolHeight.value=i,this.roundedBoxMaterial.uniforms.poolLength.value=s):this.roundedBoxMaterial=new ot({vertexShader:a_,fragmentShader:c_,uniforms:{light:{value:this.state.lightDirection.clone()},water:{value:null},objectShadowTex:{value:this.objectShadowTexture},...this.state.createUniforms(),cornerRadius:{value:t},poolWidth:{value:n},poolHeight:{value:i},poolLength:{value:s}},blending:Tn,side:an,depthTest:!1,depthWrite:!1}),this.mesh.material=this.roundedBoxMaterial)}update(e){const t=this.mesh.material;t.uniforms.water.value=e.textureA.texture,t.uniforms.light.value.copy(this.state.lightDirection),this.state.syncUniforms(t),t.uniformsNeedUpdate=!0,this.renderer.setRenderTarget(this.target),this.renderer.setClearColor(0,1),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}const u_=`
precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

uniform vec3 light;
uniform float poolWidth;
uniform float poolLength;

void main() {
  #ifdef USE_INSTANCING
    vec3 worldPosition = (instanceMatrix * vec4(position, 1.0)).xyz;
  #else
    vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  #endif
  vec3 refractedLight = refract(-normalize(light), vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec2 projected = 0.75 * (worldPosition.xz - worldPosition.y * refractedLight.xz / refractedLight.y);
  gl_Position = vec4(projected.x / poolWidth, projected.y / poolLength, 0.0, 1.0);
}
`,h_=`
precision highp float;

void main() {
  gl_FragColor = vec4(1.0);
}
`;class d_{constructor(e,t){N(this,"reflectionTarget");N(this,"clippedReflectionTarget");N(this,"refractionTarget");N(this,"shadowTarget");N(this,"reflectionViewProjectionMatrix",new Te);N(this,"viewProjectionMatrix",new Te);N(this,"reflectionCamera",new Jt);N(this,"shadowCamera",new Wi(-1,1,1,-1,0,1));N(this,"shadowMaterial");N(this,"clearColor",new Ie);N(this,"previousClearColor",new Ie);this.renderer=e,this.lightDirection=t;const n={minFilter:lt,magFilter:lt,format:At,depthBuffer:!0,stencilBuffer:!1};this.reflectionTarget=new jt(512,512,n),this.clippedReflectionTarget=new jt(512,512,n),this.refractionTarget=new jt(512,512,n),this.shadowTarget=new jt(1024,1024,{minFilter:lt,magFilter:lt,format:At,depthBuffer:!1,stencilBuffer:!1}),this.shadowMaterial=new ot({vertexShader:u_,fragmentShader:h_,uniforms:{light:{value:t.clone()},poolWidth:{value:1},poolLength:{value:1}},depthTest:!1,depthWrite:!1,side:an})}setPoolBounds(e,t){this.shadowMaterial.uniforms.poolWidth.value=e,this.shadowMaterial.uniforms.poolLength.value=t}setSize(e,t){const n=Math.min(1,1024/Math.max(e,t));this.reflectionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n))),this.clippedReflectionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n))),this.refractionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n)))}update(e,t,n,i=!0){var o,a,c;if(this.updateViewProjection(t),!n){this.withTransparentClear(()=>{this.clearTarget(this.reflectionTarget),this.clearTarget(this.clippedReflectionTarget),this.clearTarget(this.refractionTarget),this.clearTarget(this.shadowTarget)});return}const s=this.collectMaterials(n);for(const l of s)(o=l.uniforms)!=null&&o.isTexturePass&&(l.uniforms.isTexturePass.value=!0);this.withOnlyObjectVisible(e,n,()=>{this.withTransparentClear(()=>{i&&(this.renderRefraction(e,t,s),this.renderReflection(e,t,s),this.renderClippedReflection(e,s)),this.renderShadow(e)})});for(const l of s)(a=l.uniforms)!=null&&a.isTexturePass&&(l.uniforms.isTexturePass.value=!1),(c=l.uniforms)!=null&&c.texturePassMode&&(l.uniforms.texturePassMode.value=0)}updateViewProjection(e){e.updateMatrixWorld(),this.viewProjectionMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)}renderRefraction(e,t,n){this.setTexturePassMode(n,1),this.renderer.setRenderTarget(this.refractionTarget),this.renderer.clear(),this.renderer.render(e,t)}renderReflection(e,t,n){const i=new C,s=new C,o=new C;t.getWorldPosition(i),t.getWorldDirection(s),o.copy(i).add(s),this.reflectionCamera.copy(t),this.reflectionCamera.position.set(i.x,-i.y,i.z),this.reflectionCamera.up.set(t.up.x,-t.up.y,t.up.z),this.reflectionCamera.lookAt(o.x,-o.y,o.z),this.reflectionCamera.updateMatrixWorld(),this.reflectionViewProjectionMatrix.multiplyMatrices(this.reflectionCamera.projectionMatrix,this.reflectionCamera.matrixWorldInverse),this.setTexturePassMode(n,1),this.renderer.setRenderTarget(this.reflectionTarget),this.renderer.clear(),this.renderer.render(e,this.reflectionCamera)}renderClippedReflection(e,t){this.setTexturePassMode(t,2),this.renderer.setRenderTarget(this.clippedReflectionTarget),this.renderer.clear(),this.renderer.render(e,this.reflectionCamera)}renderShadow(e){this.shadowMaterial.uniforms.light.value.copy(this.lightDirection),this.shadowMaterial.uniformsNeedUpdate=!0;const t=e.overrideMaterial;e.overrideMaterial=this.shadowMaterial,this.renderer.setRenderTarget(this.shadowTarget),this.renderer.clear(),this.renderer.render(e,this.shadowCamera),e.overrideMaterial=t}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.clear()}withTransparentClear(e){const t=this.renderer.getRenderTarget();this.renderer.getClearColor(this.previousClearColor);const n=this.renderer.getClearAlpha();this.renderer.setClearColor(this.clearColor,0),e(),this.renderer.setRenderTarget(t),this.renderer.setClearColor(this.previousClearColor,n)}withOnlyObjectVisible(e,t,n){const i=[];e.traverse(s=>{s!==e&&!this.isObjectOrDescendant(s,t)&&(i.push([s,s.visible]),s.visible=!1)}),n();for(const[s,o]of i)s.visible=o}isObjectOrDescendant(e,t){for(let n=e;n;n=n.parent)if(n===t)return!0;return!1}setTexturePassMode(e,t){var n;for(const i of e)(n=i.uniforms)!=null&&n.texturePassMode&&(i.uniforms.texturePassMode.value=t,i.uniformsNeedUpdate=!0)}collectMaterials(e){const t=[];return e.traverse(n=>{n instanceof Rt&&n.material instanceof ot&&t.push(n.material)}),t}}var f_=`const float poolHeight = 1.0; 

varying vec3 vPosition; 

void main() {
  vPosition = position.xyz;

  /**
 * * VERTICAL COORDINATE REMAPPING
 *    *
 *    * Transform from standard box coords to pool coords:
 *    *   Input:  Y ∈ [-1, 1]  (standard box)
 *    *   Output: Y ∈ [-poolHeight, rim]
 *    *
 *    * Formula breakdown:
 *    *   (1.0 - Y) maps [-1,1] → [2,0]  (flip and shift)
 *    *   * (7/12)  scales to pool proportions
 *    *   - 1.0     shifts so water surface is at Y=0
 *    *   * poolHeight  scales to actual pool depth
 */
  vPosition.y = ((1.0 - vPosition.y) * (7.0 / 12.0) - 1.0) * poolHeight;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`,p_=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float poolHeight = 1.0;
const float torusKnotShadowRadius = 0.13;

uniform vec3 light; 
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled;
uniform vec3 cubeCenter; 
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
#define MAX_TORUS_KNOTS 10
uniform vec3 torusKnotCenters[MAX_TORUS_KNOTS];
uniform int torusKnotCount;
uniform bool torusKnotEnabled;
#define MAX_MESHES 10
uniform vec3 meshCenters[MAX_MESHES];
uniform int meshCount;
uniform float meshBoundingRadius;
uniform float meshShadowRadius;
uniform bool meshEnabled;
uniform sampler2D tiles; 
uniform sampler2D causticTex; 
uniform sampler2D water; 

varying vec3 vPosition; 

/**
 * Ray-AABB intersection for shadow edge calculations.
 * Returns parametric distances (tNear, tFar) along the ray.
 */
vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

/**
 * Computes the final color for a point on the pool walls or floor.
 *
 * RENDERING FEATURES:
 * 1. Triplanar texture mapping - tiles projected based on surface orientation
 * 2. Proximity-based ambient occlusion from scene objects
 * 3. Diffuse lighting from refracted sunlight
 * 4. Caustic patterns for underwater surfaces
 * 5. Edge fadeout for above-water portions
 */
vec3 getWallColor(vec3 point) {
  float scale = 0.5; 
  vec3 wallColor;
  vec3 normal;

  /**
 * * TRIPLANAR TEXTURE MAPPING
 *    *
 *    * Instead of traditional UV unwrapping, we project the tile texture
 *    * from each axis direction. The dominant axis determines which
 *    * projection to use, ensuring seamless tiling on all pool surfaces.
 */
  if (abs(point.x) > 0.999) {
    
    
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0); 
  } else if (abs(point.z) > 0.999) {
    
    
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z); 
  } else {
    
    
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0); 
  }

  /**
 * * DISTANCE-BASED ATTENUATION
 *    *
 *    * Surfaces farther from the center receive less ambient light,
 *    * simulating the natural falloff of indirect illumination.
 */
  scale /= length(point);

  /**
 * * OBJECT PROXIMITY SHADOWS (Soft Ambient Occlusion)
 *    *
 *    * Objects in the pool cast soft shadows on nearby surfaces.
 *    * Uses inverse power falloff: 1 - 0.9 / d^4
 *    *
 *    * Close to object (d ≈ 1): shadow ≈ 0.1 (dark)
 *    * Far from object (d >> 1): shadow → 1 (full brightness)
 */
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenters[i]) / sphereRadii[i], 1.0), 4.0);
    }
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float knotDistance = length(point - torusKnotCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
    }
  } else if (meshEnabled) {
    for (int i = 0; i < MAX_MESHES; i++) {
      if (i >= meshCount) break;
      float meshDistance = length(point - meshCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
    }
  }

  
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal)); 

  
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);

  if (point.y < info.r) {
    /**
 * * UNDERWATER CAUSTIC LIGHTING
 *      *
 *      * Sample the caustic texture at the projected position.
 *      * The projection accounts for the light's slant angle through water.
 *      *
 *      * caustic.r = intensity (brightness)
 *      * caustic.g = shadow factor (object occlusion)
 */
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    /**
 * * ABOVE-WATER LIGHTING (Pool Rim)
 *      *
 *      * For the portion above the waterline, we fade the lighting
 *      * smoothly to avoid hard edges where water meets the rim.
 *      * Uses a sigmoid function for smooth transition.
 */
    vec2 t = intersectCube(
      point,
      refractedLight,
      vec3(-1.0, -poolHeight, -1.0),
      vec3(1.0, 2.0, 1.0)
    );
    diffuse *=
      1.0 /
      (1.0 +
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }

  return wallColor * scale;
}

void main() {
  gl_FragColor = vec4(getWallColor(vPosition), 1.0);

  
  vec4 info = texture2D(water, vPosition.xz * 0.5 + 0.5);
  if (vPosition.y < info.r) {
    gl_FragColor.rgb *= underwaterColor * 1.2;
  }
}`,m_=`varying vec3 vPosition; 

void main() {
  
  vPosition = position.xyz;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,g_=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled;
#define MAX_CUBES 10
uniform vec3 cubeCenters[MAX_CUBES];
uniform vec3 cubeHalfSizes[MAX_CUBES];
uniform int cubeCount;
uniform bool cubeEnabled;
#define MAX_TORUS_KNOTS 10
uniform vec3 torusKnotCenters[MAX_TORUS_KNOTS];
uniform int torusKnotCount;
uniform bool torusKnotEnabled;
#define MAX_MESHES 10
uniform vec3 meshCenters[MAX_MESHES];
uniform int meshCount;
uniform float meshBoundingRadius;
uniform float meshShadowRadius;
uniform bool meshEnabled;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D water;

uniform float cornerRadius; 
uniform float poolWidth; 
uniform float poolHeight; 
uniform float poolLength; 

varying vec3 vPosition;

/**
 * Ray-Rounded-Rectangle intersection in 2D (XZ plane).
 *
 * A rounded rectangle consists of:
 * - 4 straight edge segments (top, bottom, left, right)
 * - 4 quarter-circle arcs at the corners
 *
 * GEOMETRY:
 *   +---( arc )---+
 *   |             |
 *  (arc)       (arc)
 *   |             |
 *   +---( arc )---+
 *
 * The straight edges span from -r_sub to +r_sub, where r_sub = dimension - R.
 * The arcs connect the ends of adjacent edges.
 *
 * ALGORITHM:
 * 1. Test ray against each of the 4 straight edge lines
 * 2. Test ray against each of the 4 corner circles (quadratic formula)
 * 3. Validate that hits fall within the correct segment/quadrant
 * 4. Return the overall entry (tNear) and exit (tFar) parameters
 *
 * @param origin Ray starting point in XZ space
 * @param ray Ray direction in XZ space
 * @param R Corner radius
 * @return vec2(tNear, tFar) parametric intersection distances
 */
vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {
  float tNear = 1e6;
  float tFar = -1e6;
  bool found = false;

  
  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {
    float t = (poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.x) > 1.0e-7) {
    float t = (-poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (-poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }

  
  
  if (R > 0.0) {
    vec2 centers[4];
    centers[0] = vec2(r_sub_x, r_sub_z);
    centers[1] = vec2(-r_sub_x, r_sub_z);
    centers[2] = vec2(-r_sub_x, -r_sub_z);
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {
      vec2 center = centers[i];
      vec2 toCenter = origin - center;
      float a = dot(ray, ray);
      float b = 2.0 * dot(toCenter, ray);
      float c = dot(toCenter, toCenter) - R * R;
      float disc = b * b - 4.0 * a * c;
      if (disc >= 0.0) {
        float sqrtDisc = sqrt(disc);
        float tA = (-b - sqrtDisc) / (2.0 * a);
        float tB = (-b + sqrtDisc) / (2.0 * a);

        
        vec2 ptA = origin + tA * ray;
        bool validA = false;
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;
        if (validA) {
          tNear = min(tNear, tA);
          tFar = max(tFar, tA);
          found = true;
        }

        
        vec2 ptB = origin + tB * ray;
        bool validB = false;
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;
        if (validB) {
          tNear = min(tNear, tB);
          tFar = max(tFar, tB);
          found = true;
        }
      }
    }
  }

  if (!found) {
    return vec2(-1e6, 1e6);
  }

  return vec2(tNear, tFar);
}

/**
 * Calculates 3D intersection parameters of a ray with the rounded pool box.
 * Combines vertical height checks (Y) with horizontal 2D shape boundaries (XZ).
 */
vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {
  float tYNear = -1.0e6;
  float tYFar = 1.0e6;

  
  if (abs(ray.y) > 1.0e-7) {
    float tYMin = (-poolHeight - origin.y) / ray.y;
    float tYMax = (2.0 - origin.y) / ray.y;
    tYNear = min(tYMin, tYMax);
    tYFar = max(tYMin, tYMax);
  }

  
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);

  
  float tNear = max(tYNear, tXZ.x);
  float tFar = min(tYFar, tXZ.y);
  return vec2(tNear, tFar);
}

/**
 * Computes surface normal and UV coordinates for a point on the rounded pool.
 *
 * NORMAL CALCULATION:
 * - Floor: Always (0, 1, 0) pointing up
 * - Flat walls: Perpendicular to the wall (-X, 0, 0) or (0, 0, -Z)
 * - Curved corners: Radial direction from corner center
 *
 * UV CALCULATION (Perimeter Parameterization):
 * The U coordinate uses the Y position (height).
 * The V coordinate uses the perimeter distance 's' around the pool.
 *
 * To achieve seamless tiling around corners, we compute 's' as the
 * arc-length distance along the perimeter, starting from the +X, -Z corner
 * and wrapping counterclockwise:
 *
 *   s = 0: Start at (+width, -length)
 *   s increases along +Z wall, through corner arc, along +X side, etc.
 *   s = perimeter: Back to start
 *
 * This ensures continuous texture coordinates even across curved sections.
 *
 * @param point Surface point position
 * @param R Corner radius
 * @param normal Output: surface normal
 * @param uv Output: texture coordinates
 */
void getRoundedBoxNormalAndUV(vec3 point, float R, out vec3 normal, out vec2 uv) {
  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;

  
  if (point.y < -poolHeight + 0.001) {
    normal = vec3(0.0, 1.0, 0.0);
    uv = point.xz * 0.5 + 0.5;
    return;
  }

  vec2 absP = abs(point.xz);

  
  if (absP.x > r_sub_x && absP.y > r_sub_z && R > 0.0) {
    
    vec2 center = sign(point.xz) * vec2(r_sub_x, r_sub_z);
    vec2 d = point.xz - center;
    normal = vec3(-normalize(d).x, 0.0, -normalize(d).y);

    
    float s = 0.0;
    if (point.x >= r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {
      s = point.z + r_sub_z;
    } else if (point.x >= r_sub_x && point.z > r_sub_z) {
      vec2 cd = point.xz - vec2(r_sub_x, r_sub_z);
      s = 2.0 * r_sub_z + R * atan(cd.y, cd.x);
    } else if (point.z >= r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {
      s = 2.0 * r_sub_z + R * 1.570796326 + (r_sub_x - point.x);
    } else if (point.z >= r_sub_z && point.x < -r_sub_x) {
      vec2 cd = point.xz - vec2(-r_sub_x, r_sub_z);
      s = 2.0 * r_sub_z + R * 1.570796326 + 2.0 * r_sub_x + R * (atan(cd.y, cd.x) - 1.570796326);
    } else if (point.x <= -r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {
      s = 2.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + (r_sub_z - point.z);
    } else if (point.x <= -r_sub_x && point.z < -r_sub_z) {
      vec2 cd = point.xz - vec2(-r_sub_x, -r_sub_z);
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + R * (atan(cd.y, cd.x) + 3.14159265);
    } else if (point.z <= -r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 4.71238898 + (point.x + r_sub_x);
    } else {
      vec2 cd = point.xz - vec2(r_sub_x, -r_sub_z);
      s = 4.0 * r_sub_z + 4.0 * r_sub_x + R * 4.71238898 + R * (atan(cd.y, cd.x) + 1.570796326);
    }
    uv = vec2(point.y, s) * 0.5 + vec2(1.0, 0.5);
  } else {
    
    vec2 normP = absP / vec2(poolWidth, poolLength);
    if (normP.x > normP.y) {
      normal = vec3(-sign(point.x), 0.0, 0.0);
      uv = point.yz * 0.5 + vec2(1.0, 0.5);
    } else {
      normal = vec3(0.0, 0.0, -sign(point.z));
      uv = point.yx * 0.5 + vec2(1.0, 0.5);
    }
  }
}

/**
 * Calculates shading color for pool boundary walls.
 * Approximates ambient occlusion from obstacles, projects refracted shadows,
 * and overlays underwater caustics.
 */
vec3 getWallColor(vec3 point) {
  float scale = 0.5;
  vec3 wallColor;
  vec3 normal;
  vec2 uv;

  
  getRoundedBoxNormalAndUV(point, cornerRadius, normal, uv);
  wallColor = texture2D(tiles, uv).rgb;

  
  scale /= length(point);
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenters[i]) / sphereRadii[i], 1.0), 4.0);
    }
  } else if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      float cubeDistance = length((point - cubeCenters[i]) / cubeHalfSizes[i]);
      scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
    }
  } else if (torusKnotEnabled) {
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float knotDistance = length(point - torusKnotCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
    }
  } else if (meshEnabled) {
    for (int i = 0; i < MAX_MESHES; i++) {
      if (i >= meshCount) break;
      float meshDistance = length(point - meshCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
    }
  }

  
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));

  
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  if (point.y < info.r) {
    
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    
    vec2 t = intersectRoundedBox(point, refractedLight, cornerRadius);
    diffuse *=
      1.0 /
      (1.0 +
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

void main() {
  gl_FragColor = vec4(getWallColor(vPosition), 1.0);

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (vPosition.y < info.r) {
    gl_FragColor.rgb *= underwaterColor * 1.2;
  }
}`;const v_=0;function x_(r,e,t,n){const i=new sn,s=Math.min(r,Math.max(0,Math.min(e,n)-v_)),o=[],a=[],c=[],l=-t,u=2/12,h=e-s,d=n-s,f=16,g=4*f,x=[];for(let v=0;v<4;v++){let _=0,y=0,S=0;v===0?(_=h,y=d,S=0):v===1?(_=-h,y=d,S=Math.PI/2):v===2?(_=-h,y=-d,S=Math.PI):(_=h,y=-d,S=1.5*Math.PI);for(let T=0;T<f;T++){const E=S+T/f*(Math.PI/2),b=_+s*Math.cos(E),A=y+s*Math.sin(E);x.push(new C(b,l,A))}}o.push(0,l,0),a.push(0,1,0);for(let v=0;v<g;v++){const _=x[v];o.push(_.x,_.y,_.z),a.push(0,1,0)}for(let v=0;v<g;v++){const _=(v+1)%g;c.push(0,_+1,v+1)}const m=[];for(let v=0;v<g;v++){const _=x[v],y=new C;if(s>0){const S=Math.sign(_.x)*h,T=Math.sign(_.z)*d;y.set(_.x-S,0,_.z-T).normalize().negate()}else Math.abs(_.x)>=e-.001?y.set(-Math.sign(_.x),0,0):y.set(0,0,-Math.sign(_.z));m.push(y)}const p=o.length/3;for(let v=0;v<g;v++){const _=x[v],y=m[v];o.push(_.x,l,_.z),a.push(y.x,y.y,y.z),o.push(_.x,u,_.z),a.push(y.x,y.y,y.z)}for(let v=0;v<g;v++){const _=(v+1)%g,y=p+2*v,S=p+2*v+1,T=p+2*_,E=p+2*_+1;c.push(y,T,E),c.push(y,E,S)}return i.setAttribute("position",new Ft(o,3)),i.setAttribute("normal",new Ft(a,3)),i.setIndex(c),i}class __{constructor(e,t,n){N(this,"mesh");N(this,"boxGeometry");N(this,"boxMaterial");N(this,"roundedBoxGeometry",null);N(this,"roundedBoxMaterial",null);this.tileTexture=e,this.causticTexture=t,this.state=n,this.boxMaterial=new ot({vertexShader:f_,fragmentShader:p_,uniforms:{light:{value:n.lightDirection.clone()},...n.createUniforms(),tiles:{value:e},causticTex:{value:t},water:{value:null}},side:rn,depthTest:!0,depthWrite:!0}),this.boxGeometry=this.createGeometry(),this.mesh=new Rt(this.boxGeometry,this.boxMaterial),this.mesh.frustumCulled=!1}setPoolShape(e,t,n,i,s){e==="Box"?(this.mesh.geometry=this.boxGeometry,this.mesh.material=this.boxMaterial):(this.roundedBoxGeometry&&this.roundedBoxGeometry.dispose(),this.roundedBoxGeometry=x_(t,n,i,s),this.roundedBoxMaterial?(this.roundedBoxMaterial.uniforms.cornerRadius.value=t,this.roundedBoxMaterial.uniforms.poolWidth.value=n,this.roundedBoxMaterial.uniforms.poolHeight.value=i,this.roundedBoxMaterial.uniforms.poolLength.value=s):this.roundedBoxMaterial=new ot({vertexShader:m_,fragmentShader:g_,uniforms:{light:{value:this.state.lightDirection.clone()},...this.state.createUniforms(),tiles:{value:this.tileTexture},causticTex:{value:this.causticTexture},water:{value:null},cornerRadius:{value:t},poolWidth:{value:n},poolHeight:{value:i},poolLength:{value:s}},side:rn,depthTest:!0,depthWrite:!0}),this.mesh.geometry=this.roundedBoxGeometry,this.mesh.material=this.roundedBoxMaterial)}prepare(e){const t=this.mesh.material;t.uniforms.water.value=e.textureA.texture,t.uniforms.light.value.copy(this.state.lightDirection),this.state.syncUniforms(t),t.uniformsNeedUpdate=!0}createGeometry(){const e=new ki(2,2,2),t=e.attributes.position,n=e.index,i=[];for(let s=0;s<n.count;s+=3){const o=n.getX(s),a=n.getX(s+1),c=n.getX(s+2);t.getY(o)<0&&t.getY(a)<0&&t.getY(c)<0||i.push(o,a,c)}return e.setIndex(i),e}}const bd=0,y_=1,Sd=2,lh=2,Da=1.25,uh=1,Vt=32,It=Vt/4,Tl=65535,b_=Tl<<16,yo=Math.pow(2,-24),wl=Symbol("SKIP_GENERATION"),Md={strategy:bd,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[wl]:!1};function _t(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function kc(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function hh(r,e){e.set(r)}function dh(r,e,t){let n,i;for(let s=0;s<3;s++){const o=s+3;n=r[s],i=e[s],t[s]=n<i?n:i,n=r[o],i=e[o],t[o]=n>i?n:i}}function Zs(r,e,t){for(let n=0;n<3;n++){const i=e[r+2*n],s=e[r+2*n+1],o=i-s,a=i+s;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Yr(r){const e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}function yt(r,e){return e[r+15]===Tl}function Lt(r,e){return e[r+6]}function Kt(r,e){return e[r+14]}function Nt(r){return r+It}function Ut(r,e){const t=e[r+6];return r+t*It}function zo(r,e){return e[r+7]}function Ia(r,e,t,n,i){let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,d=1/0,f=1/0,g=-1/0,x=-1/0,m=-1/0;const p=r.offset||0;for(let v=(e-p)*6,_=(e+t-p)*6;v<_;v+=6){const y=r[v+0],S=r[v+1],T=y-S,E=y+S;T<s&&(s=T),E>c&&(c=E),y<h&&(h=y),y>g&&(g=y);const b=r[v+2],A=r[v+3],D=b-A,R=b+A;D<o&&(o=D),R>l&&(l=R),b<d&&(d=b),b>x&&(x=b);const I=r[v+4],U=r[v+5],O=I-U,L=I+U;O<a&&(a=O),L>u&&(u=L),I<f&&(f=I),I>m&&(m=I)}n[0]=s,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=d,i[2]=f,i[3]=g,i[4]=x,i[5]=m}const $n=32,S_=(r,e)=>r.candidate-e.candidate,pi=new Array($n).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Js=new Float32Array(6);function M_(r,e,t,n,i,s){let o=-1,a=0;if(s===bd)o=kc(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===y_)o=kc(r),o!==-1&&(a=T_(t,n,i,o));else if(s===Sd){const c=Yr(r);let l=Da*i;const u=t.offset||0,h=(n-u)*6,d=(n+i-u)*6;for(let f=0;f<3;f++){const g=e[f],p=(e[f+3]-g)/$n;if(i<$n/4){const v=[...pi];v.length=i;let _=0;for(let S=h;S<d;S+=6,_++){const T=v[_];T.candidate=t[S+2*f],T.count=0;const{bounds:E,leftCacheBounds:b,rightCacheBounds:A}=T;for(let D=0;D<3;D++)A[D]=1/0,A[D+3]=-1/0,b[D]=1/0,b[D+3]=-1/0,E[D]=1/0,E[D+3]=-1/0;Zs(S,t,E)}v.sort(S_);let y=i;for(let S=0;S<y;S++){const T=v[S];for(;S+1<y&&v[S+1].candidate===T.candidate;)v.splice(S+1,1),y--}for(let S=h;S<d;S+=6){const T=t[S+2*f];for(let E=0;E<y;E++){const b=v[E];T>=b.candidate?Zs(S,t,b.rightCacheBounds):(Zs(S,t,b.leftCacheBounds),b.count++)}}for(let S=0;S<y;S++){const T=v[S],E=T.count,b=i-T.count,A=T.leftCacheBounds,D=T.rightCacheBounds;let R=0;E!==0&&(R=Yr(A)/c);let I=0;b!==0&&(I=Yr(D)/c);const U=uh+Da*(R*E+I*b);U<l&&(o=f,l=U,a=T.candidate)}}else{for(let y=0;y<$n;y++){const S=pi[y];S.count=0,S.candidate=g+p+y*p;const T=S.bounds;for(let E=0;E<3;E++)T[E]=1/0,T[E+3]=-1/0}for(let y=h;y<d;y+=6){let E=~~((t[y+2*f]-g)/p);E>=$n&&(E=$n-1);const b=pi[E];b.count++,Zs(y,t,b.bounds)}const v=pi[$n-1];hh(v.bounds,v.rightCacheBounds);for(let y=$n-2;y>=0;y--){const S=pi[y],T=pi[y+1];dh(S.bounds,T.rightCacheBounds,S.rightCacheBounds)}let _=0;for(let y=0;y<$n-1;y++){const S=pi[y],T=S.count,E=S.bounds,A=pi[y+1].rightCacheBounds;T!==0&&(_===0?hh(E,Js):dh(E,Js,Js)),_+=T;let D=0,R=0;_!==0&&(D=Yr(Js)/c);const I=i-_;I!==0&&(R=Yr(A)/c);const U=uh+Da*(D*_+R*I);U<l&&(o=f,l=U,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function T_(r,e,t,n){let i=0;const s=r.offset;for(let o=e,a=e+t;o<a;o++)i+=r[(o-s)*6+n*2];return i/t}class La{constructor(){this.boundingData=new Float32Array(6)}}function w_(r,e,t,n,i,s){let o=n,a=n+i-1;const c=s.pos,l=s.axis*2,u=t.offset||0;for(;;){for(;o<=a&&t[(o-u)*6+l]<c;)o++;for(;o<=a&&t[(a-u)*6+l]>=c;)a--;if(o<a){for(let h=0;h<e;h++){let d=r[o*e+h];r[o*e+h]=r[a*e+h],r[a*e+h]=d}for(let h=0;h<6;h++){const d=o-u,f=a-u,g=t[d*6+h];t[d*6+h]=t[f*6+h],t[f*6+h]=g}o++,a--}else return o}}let Td,bo,Vc,wd;const E_=Math.pow(2,32);function Gc(r){return"count"in r?1:1+Gc(r.left)+Gc(r.right)}function A_(r,e,t){return Td=new Float32Array(t),bo=new Uint32Array(t),Vc=new Uint16Array(t),wd=new Uint8Array(t),Wc(r,e)}function Wc(r,e){const t=r/4,n=r/2,i="count"in e,s=e.boundingData;for(let o=0;o<6;o++)Td[t+o]=s[o];if(i)return e.buffer?(wd.set(new Uint8Array(e.buffer),r),r+e.buffer.byteLength):(bo[t+6]=e.offset,Vc[n+14]=e.count,Vc[n+15]=Tl,r+Vt);{const{left:o,right:a,splitAxis:c}=e,l=r+Vt;let u=Wc(l,o);const h=r/Vt,f=u/Vt-h;if(f>E_)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return bo[t+6]=f,bo[t+7]=c,Wc(u,a)}}function C_(r,e,t,n,i,s){const{maxDepth:o,verbose:a,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:h}=i,d=r.primitiveBuffer,f=r.primitiveBufferStride,g=new Float32Array(6);let x=!1;const m=new La;return Ia(e,t,n,m.boundingData,g),v(m,t,n,g),m;function p(_){h&&h((_-s.offset)/s.count)}function v(_,y,S,T=null,E=0){!x&&E>=o&&(x=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const b=S>l;if(S<=c&&!b||E>=o)return p(y+S),_.offset=y,_.count=S,_;const A=M_(_.boundingData,T,e,y,S,u);let D=A.axis===-1?-1:w_(d,f,e,y,S,A);if(A.axis===-1||D===y||D===y+S){if(!b)return p(y+S),_.offset=y,_.count=S,_;A.axis=Math.max(0,kc(_.boundingData)),D=y+Math.max(1,Math.floor(S/2))}_.splitAxis=A.axis;const R=new La,I=y,U=D-y;_.left=R,Ia(e,I,U,R.boundingData,g),v(R,I,U,g,E+1);const O=new La,L=D,H=S-U;return _.right=O,Ia(e,L,H,O.boundingData,g),v(O,L,H,g,E+1),_}}function R_(r,e){const t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=r.getRootRanges(e.range),i=n[0],s=n[n.length-1],o={offset:i.offset,count:s.offset+s.count-i.offset},a=new Float32Array(6*o.count);a.offset=o.offset,r.computePrimitiveBounds(o.offset,o.count,a),r._roots=n.map(c=>{const l=C_(r,a,c.offset,c.count,e,o),u=Gc(l),h=new t(Vt*u);return A_(0,l,h),h})}class El{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class P_{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ft=new P_;let _i,_r;const hr=[],Qs=new El(()=>new bt);function D_(r,e,t,n,i,s){_i=Qs.getPrimitive(),_r=Qs.getPrimitive(),hr.push(_i,_r),ft.setBuffer(r._roots[e]);const o=Xc(0,r.geometry,t,n,i,s);ft.clearBuffer(),Qs.releasePrimitive(_i),Qs.releasePrimitive(_r),hr.pop(),hr.pop();const a=hr.length;return a>0&&(_r=hr[a-1],_i=hr[a-2]),o}function Xc(r,e,t,n,i=null,s=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=ft;let u=r*2;if(yt(u,c)){const g=Lt(r,l),x=Kt(u,c);return _t(r,a,_i),n(g,x,!1,o,s+r/It,_i)}else{let I=function(O){const{uint16Array:L,uint32Array:H}=ft;let k=O*2;for(;!yt(k,L);)O=Nt(O),k=O*2;return Lt(O,H)},U=function(O){const{uint16Array:L,uint32Array:H}=ft;let k=O*2;for(;!yt(k,L);)O=Ut(O,H),k=O*2;return Lt(O,H)+Kt(k,L)};var d=I,f=U;const g=Nt(r),x=Ut(r,l);let m=g,p=x,v,_,y,S;if(i&&(y=_i,S=_r,_t(m,a,y),_t(p,a,S),v=i(y),_=i(S),_<v)){m=x,p=g;const O=v;v=_,_=O,y=S}y||(y=_i,_t(m,a,y));const T=yt(m*2,c),E=t(y,T,v,o+1,s+m/It);let b;if(E===lh){const O=I(m),H=U(m)-O;b=n(O,H,!0,o+1,s+m/It,y)}else b=E&&Xc(m,e,t,n,i,s,o+1);if(b)return!0;S=_r,_t(p,a,S);const A=yt(p*2,c),D=t(S,A,_,o+1,s+p/It);let R;if(D===lh){const O=I(p),H=U(p)-O;R=n(O,H,!0,o+1,s+p/It,S)}else R=D&&Xc(p,e,t,n,i,s,o+1);return!!R}}const ls=new ft.constructor,Do=new ft.constructor,gi=new El(()=>new bt),dr=new bt,fr=new bt,Na=new bt,Ua=new bt;let Fa=!1;function I_(r,e,t,n){if(Fa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Fa=!0;const i=r._roots,s=e._roots;let o,a=0,c=0;const l=new Te().copy(t).invert();for(let u=0,h=i.length;u<h;u++){ls.setBuffer(i[u]),c=0;const d=gi.getPrimitive();_t(0,ls.float32Array,d),d.applyMatrix4(l);for(let f=0,g=s.length;f<g&&(Do.setBuffer(s[f]),o=Sn(0,0,t,l,n,a,c,0,0,d),Do.clearBuffer(),c+=s[f].byteLength/Vt,!o);f++);if(gi.releasePrimitive(d),ls.clearBuffer(),a+=i[u].byteLength/Vt,o)break}return Fa=!1,o}function Sn(r,e,t,n,i,s=0,o=0,a=0,c=0,l=null,u=!1){let h,d;u?(h=Do,d=ls):(h=ls,d=Do);const f=h.float32Array,g=h.uint32Array,x=h.uint16Array,m=d.float32Array,p=d.uint32Array,v=d.uint16Array,_=r*2,y=e*2,S=yt(_,x),T=yt(y,v);let E=!1;if(T&&S)u?E=i(Lt(e,p),Kt(e*2,v),Lt(r,g),Kt(r*2,x),c,o+e/It,a,s+r/It):E=i(Lt(r,g),Kt(r*2,x),Lt(e,p),Kt(e*2,v),a,s+r/It,c,o+e/It);else if(T){const b=gi.getPrimitive();_t(e,m,b),b.applyMatrix4(t);const A=Nt(r),D=Ut(r,g);_t(A,f,dr),_t(D,f,fr);const R=b.intersectsBox(dr),I=b.intersectsBox(fr);E=R&&Sn(e,A,n,t,i,o,s,c,a+1,b,!u)||I&&Sn(e,D,n,t,i,o,s,c,a+1,b,!u),gi.releasePrimitive(b)}else{const b=Nt(e),A=Ut(e,p);_t(b,m,Na),_t(A,m,Ua);const D=l.intersectsBox(Na),R=l.intersectsBox(Ua);if(D&&R)E=Sn(r,b,t,n,i,s,o,a,c+1,l,u)||Sn(r,A,t,n,i,s,o,a,c+1,l,u);else if(D)if(S)E=Sn(r,b,t,n,i,s,o,a,c+1,l,u);else{const I=gi.getPrimitive();I.copy(Na).applyMatrix4(t);const U=Nt(r),O=Ut(r,g);_t(U,f,dr),_t(O,f,fr);const L=I.intersectsBox(dr),H=I.intersectsBox(fr);E=L&&Sn(b,U,n,t,i,o,s,c,a+1,I,!u)||H&&Sn(b,O,n,t,i,o,s,c,a+1,I,!u),gi.releasePrimitive(I)}else if(R)if(S)E=Sn(r,A,t,n,i,s,o,a,c+1,l,u);else{const I=gi.getPrimitive();I.copy(Ua).applyMatrix4(t);const U=Nt(r),O=Ut(r,g);_t(U,f,dr),_t(O,f,fr);const L=I.intersectsBox(dr),H=I.intersectsBox(fr);E=L&&Sn(A,U,n,t,i,o,s,c,a+1,I,!u)||H&&Sn(A,O,n,t,i,o,s,c,a+1,I,!u),gi.releasePrimitive(I)}}return E}const Ba=new class{constructor(){let r=null,e=null,t=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=r=s._roots[o],this.uint16Array=t=new Uint16Array(r),this.uint32Array=e=new Uint32Array(r)},this.reset=()=>{this.root=null,this.buffer=r=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=s=>{let o=s*2;for(;!yt(o,t);)s=Nt(s),o=s*2;return Lt(s,e)},this.getRangeEnd=s=>{let o=s*2;for(;!yt(o,t);)s=Ut(s,e),o=s*2;return Lt(s,e)+Kt(o,t)};const i=(s,o,a)=>{const c=o*2,l=yt(c,t);if(!s(a,l,o)&&!l){const h=Nt(o),d=Ut(o,e);i(s,h,a+1),i(s,d,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,c)=>{if(a){const l=c*2,u=e[c+6],h=t[l+14];return s(o,a,new Float32Array(r,c*4,6),u,h)}else{const l=zo(c,e);return s(o,a,new Float32Array(r,c*4,6),l)}})}}},fh=new bt,pr=new Float32Array(6);class L_{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Md,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),R_(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,i){let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let h=e,d=e+t;h<d;h++){this.writePrimitiveBounds(h,pr,0);const[f,g,x,m,p,v]=pr;f<s&&(s=f),m>c&&(c=m),g<o&&(o=g),p>l&&(l=p),x<a&&(a=x),v>u&&(u=v)}return n[i+0]=s,n[i+1]=o,n[i+2]=a,n[i+3]=c,n[i+4]=l,n[i+5]=u,n}computePrimitiveBounds(e,t,n){const i=n.offset||0;for(let s=e,o=e+t;s<o;s++){this.writePrimitiveBounds(s,pr,0);const[a,c,l,u,h,d]=pr,f=(a+u)/2,g=(c+h)/2,x=(l+d)/2,m=(u-a)/2,p=(h-c)/2,v=(d-l)/2,_=(s-i)*6;n[_+0]=f,n[_+1]=m+(Math.abs(f)+m)*yo,n[_+2]=g,n[_+3]=p+(Math.abs(g)+p)*yo,n[_+4]=x,n[_+5]=v+(Math.abs(x)+v)*yo}return n}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let n=0,i=t.length;n<i;n++)t[n]+=e;else{const n=this._roots;for(let i=0;i<n.length;i++){const s=n[i],o=new Uint32Array(s),a=new Uint16Array(s),c=s.byteLength/Vt;for(let l=0;l<c;l++){const u=It*l,h=2*u;yt(h,a)&&(o[u+6]+=e)}}}}traverse(e,t=0){Ba.setBVH(this,t),Ba.traverse(e),Ba.reset()}refit(){const e=this._roots;for(let t=0,n=e.length;t<n;t++){const i=e[t],s=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),c=i.byteLength/Vt;for(let l=c-1;l>=0;l--){const u=l*It,h=u*2;if(yt(h,o)){const f=Lt(u,s),g=Kt(h,o);this.writePrimitiveRangeBounds(f,g,pr,0),a.set(pr,u)}else{const f=Nt(u),g=Ut(u,s);for(let x=0;x<3;x++){const m=a[f+x],p=a[f+x+3],v=a[g+x],_=a[g+x+3];a[u+x]=m<v?m:v,a[u+x+3]=p>_?p:_}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{_t(0,new Float32Array(n),fh),e.union(fh)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=e;if(i&&s){const h=i;i=(d,f,g,x,m)=>h(d,f,g,x,m)?!0:a(d,f,this,s,g,x,o)}else i||(s?i=(h,d,f,g)=>a(h,d,this,s,f,g,o):i=(h,d,f)=>f);let c=!1,l=0;const u=this._roots;for(let h=0,d=u.length;h<d;h++){const f=u[h];if(c=D_(this,h,n,i,t,l),c)break;l+=f.byteLength/Vt}return c}bvhcast(e,t,n){let{intersectsRanges:i}=n;return I_(this,e,t,i)}}function N_(){return typeof SharedArrayBuffer<"u"}function Ho(r){return r.index?r.index.count:r.attributes.position.count}function ko(r){return Ho(r)/3}function Ed(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function U_(r,e){if(!r.index){const t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Ed(t,n);r.setIndex(new Wt(i,1));for(let s=0;s<t;s++)i[s]=s}}function F_(r,e,t){const n=Ho(r)/t,i=e||r.drawRange,s=i.start/t,o=(i.start+i.count)/t,a=Math.max(0,s),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function B_(r,e){return r.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function ph(r,e,t){const n=F_(r,e,t),i=B_(r,t);if(!i.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,c=Ho(r)/t,l=[];for(const d of i){const{offset:f,count:g}=d,x=f,m=isFinite(g)?g:c-f,p=f+m;x<a&&p>o&&(l.push({pos:Math.max(o,x),isStart:!0}),l.push({pos:Math.min(a,p),isStart:!1}))}l.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let u=0,h=null;for(const d of l){const f=d.pos;u!==0&&f!==h&&s.push({offset:h,count:f-h}),u+=d.isStart?1:-1,h=f}return s}function O_(r,e){const t=r[r.length-1],n=t.offset+t.count>2**16,i=r.reduce((l,u)=>l+u.count,0),s=n?4:2,o=e?new SharedArrayBuffer(i*s):new ArrayBuffer(i*s),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let l=0;l<r.length;l++){const{offset:u,count:h}=r[l];for(let d=0;d<h;d++)a[c+d]=u+d;c+=h}return a}class z_ extends L_{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!N_())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Md,...t},t[wl]||this.init(t)}init(e){const{geometry:t,primitiveStride:n}=this;if(e.indirect){const i=ph(t,e.range,n),s=O_(i,e.useSharedArrayBuffer);this._indirectBuffer=s}else U_(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new bt))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:ph(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class ri{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){const c=e[s][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],c=e.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}ri.prototype.setFromBox=(function(){const r=new C;return function(t,n){const i=n.min,s=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){r.x=i.x*c+s.x*(1-c),r.y=i.y*l+s.y*(1-l),r.z=i.z*u+s.z*(1-u);const h=t.dot(r);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const H_=(function(){const r=new C,e=new C,t=new C;return function(i,s,o){const a=i.start,c=r,l=s.start,u=e;t.subVectors(a,l),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const h=t.dot(u),d=u.dot(c),f=u.dot(u),g=t.dot(c),m=c.dot(c)*f-d*d;let p,v;m!==0?p=(h*d-g*f)/m:p=0,v=(h+p*d)/f,o.x=p,o.y=v}})(),Al=(function(){const r=new De,e=new C,t=new C;return function(i,s,o,a){H_(i,s,r);let c=r.x,l=r.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),s.at(l,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=s.start:h=s.end;const d=e,f=t;if(i.closestPointToPoint(h,!0,e),s.closestPointToPoint(u,!0,t),d.distanceToSquared(h)<=f.distanceToSquared(u)){o.copy(d),a.copy(h);return}else{o.copy(u),a.copy(f);return}}}})(),k_=(function(){const r=new C,e=new C,t=new Zn,n=new ii;return function(s,o){const{radius:a,center:c}=s,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a))return!0;const x=o.getPlane(t);if(Math.abs(x.distanceToPoint(c))<=a){const p=x.projectPoint(c,e);if(o.containsPoint(p))return!0}return!1}})(),V_=["x","y","z"],Jn=1e-15,mh=Jn*Jn;function mn(r){return Math.abs(r)<Jn}class En extends Xt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new C),this.satBounds=new Array(4).fill().map(()=>new ri),this.points=[this.a,this.b,this.c],this.plane=new Zn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ii,this.needsUpdate=!0}intersectsSphere(e){return k_(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);const l=s[1],u=o[1];l.subVectors(e,t),u.setFromPoints(l,i);const h=s[2],d=o[2];h.subVectors(t,n),d.setFromPoints(h,i);const f=s[3],g=o[3];f.subVectors(n,e),g.setFromPoints(f,i);const x=l.length(),m=h.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<Jn?m<Jn||p<Jn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<Jn?p<Jn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<Jn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}En.prototype.closestPointToSegment=(function(){const r=new C,e=new C,t=new ii;return function(i,s=null,o=null){const{start:a,end:c}=i,l=this.points;let u,h=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;t.start.copy(l[d]),t.end.copy(l[f]),Al(t,i,r,e),u=r.distanceToSquared(e),u<h&&(h=u,s&&s.copy(r),o&&o.copy(e))}return this.closestPointToPoint(a,r),u=a.distanceToSquared(r),u<h&&(h=u,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(c,r),u=c.distanceToSquared(r),u<h&&(h=u,s&&s.copy(r),o&&o.copy(c)),Math.sqrt(h)}})();En.prototype.intersectsTriangle=(function(){const r=new En,e=new ri,t=new ri,n=new C,i=new C,s=new C,o=new C,a=new ii,c=new ii,l=new C,u=new De,h=new De;function d(_,y,S,T){const E=n;!_.isDegenerateIntoPoint&&!_.isDegenerateIntoSegment?E.copy(_.plane.normal):E.copy(y.plane.normal);const b=_.satBounds,A=_.satAxes;for(let I=1;I<4;I++){const U=b[I],O=A[I];if(e.setFromPoints(O,y.points),U.isSeparated(e)||(o.copy(E).cross(O),e.setFromPoints(o,_.points),t.setFromPoints(o,y.points),e.isSeparated(t)))return!1}const D=y.satBounds,R=y.satAxes;for(let I=1;I<4;I++){const U=D[I],O=R[I];if(e.setFromPoints(O,_.points),U.isSeparated(e)||(o.crossVectors(E,O),e.setFromPoints(o,_.points),t.setFromPoints(o,y.points),e.isSeparated(t)))return!1}return S&&(T||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function f(_,y,S,T,E,b,A,D,R,I,U){let O=A/(A-D);I.x=T+(E-T)*O,U.start.subVectors(y,_).multiplyScalar(O).add(_),O=A/(A-R),I.y=T+(b-T)*O,U.end.subVectors(S,_).multiplyScalar(O).add(_)}function g(_,y,S,T,E,b,A,D,R,I,U){if(E>0)f(_.c,_.a,_.b,T,y,S,R,A,D,I,U);else if(b>0)f(_.b,_.a,_.c,S,y,T,D,A,R,I,U);else if(D*R>0||A!=0)f(_.a,_.b,_.c,y,S,T,A,D,R,I,U);else if(D!=0)f(_.b,_.a,_.c,S,y,T,D,A,R,I,U);else if(R!=0)f(_.c,_.a,_.b,T,y,S,R,A,D,I,U);else return!0;return!1}function x(_,y,S,T){const E=y.degenerateSegment,b=_.plane.distanceToPoint(E.start),A=_.plane.distanceToPoint(E.end);return mn(b)?mn(A)?d(_,y,S,T):(S&&(S.start.copy(E.start),S.end.copy(E.start)),_.containsPoint(E.start)):mn(A)?(S&&(S.start.copy(E.end),S.end.copy(E.end)),_.containsPoint(E.end)):_.plane.intersectLine(E,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),_.containsPoint(n)):!1}function m(_,y,S){const T=y.a;return mn(_.plane.distanceToPoint(T))&&_.containsPoint(T)?(S&&(S.start.copy(T),S.end.copy(T)),!0):!1}function p(_,y,S){const T=_.degenerateSegment,E=y.a;return T.closestPointToPoint(E,!0,n),E.distanceToSquared(n)<mh?(S&&(S.start.copy(E),S.end.copy(E)),!0):!1}function v(_,y,S,T){if(_.isDegenerateIntoSegment)if(y.isDegenerateIntoSegment){const E=_.degenerateSegment,b=y.degenerateSegment,A=i,D=s;E.delta(A),b.delta(D);const R=n.subVectors(b.start,E.start),I=A.x*D.y-A.y*D.x;if(mn(I))return!1;const U=(R.x*D.y-R.y*D.x)/I,O=-(A.x*R.y-A.y*R.x)/I;if(U<0||U>1||O<0||O>1)return!1;const L=E.start.z+A.z*U,H=b.start.z+D.z*O;return mn(L-H)?(S&&(S.start.copy(E.start).addScaledVector(A,U),S.end.copy(E.start).addScaledVector(A,U)),!0):!1}else return y.isDegenerateIntoPoint?p(_,y,S):x(y,_,S,T);else{if(_.isDegenerateIntoPoint)return y.isDegenerateIntoPoint?y.a.distanceToSquared(_.a)<mh?(S&&(S.start.copy(_.a),S.end.copy(_.a)),!0):!1:y.isDegenerateIntoSegment?p(y,_,S):m(y,_,S);if(y.isDegenerateIntoPoint)return m(_,y,S);if(y.isDegenerateIntoSegment)return x(_,y,S,T)}}return function(y,S=null,T=!1){this.needsUpdate&&this.update(),y.isExtendedTriangle?y.needsUpdate&&y.update():(r.copy(y),r.update(),y=r);const E=v(this,y,S,T);if(E!==void 0)return E;const b=this.plane,A=y.plane;let D=A.distanceToPoint(this.a),R=A.distanceToPoint(this.b),I=A.distanceToPoint(this.c);mn(D)&&(D=0),mn(R)&&(R=0),mn(I)&&(I=0);const U=D*R,O=D*I;if(U>0&&O>0)return!1;let L=b.distanceToPoint(y.a),H=b.distanceToPoint(y.b),k=b.distanceToPoint(y.c);mn(L)&&(L=0),mn(H)&&(H=0),mn(k)&&(k=0);const J=L*H,ee=L*k;if(J>0&&ee>0)return!1;i.copy(b.normal),s.copy(A.normal);const ce=i.cross(s);let _e=0,ye=Math.abs(ce.x);const Xe=Math.abs(ce.y);Xe>ye&&(ye=Xe,_e=1),Math.abs(ce.z)>ye&&(_e=2);const Pe=V_[_e],$=this.a[Pe],he=this.b[Pe],re=this.c[Pe],Ae=y.a[Pe],Le=y.b[Pe],Ce=y.c[Pe];if(g(this,$,he,re,U,O,D,R,I,u,a))return d(this,y,S,T);if(g(y,Ae,Le,Ce,J,ee,L,H,k,h,c))return d(this,y,S,T);if(u.y<u.x){const it=u.y;u.y=u.x,u.x=it,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(h.y<h.x){const it=h.y;h.y=h.x,h.x=it,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<h.x||h.y<u.x?!1:(S&&(h.x>u.x?S.start.copy(c.start):S.start.copy(a.start),h.y<u.y?S.end.copy(c.end):S.end.copy(a.end)),!0)}})();En.prototype.distanceToPoint=(function(){const r=new C;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();En.prototype.distanceToTriangle=(function(){const r=new C,e=new C,t=["a","b","c"],n=new ii,i=new ii;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l,!0))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let d;const f=t[h],g=o[f];this.closestPointToPoint(g,r),d=g.distanceToSquared(r),d<u&&(u=d,a&&a.copy(r),c&&c.copy(g));const x=this[f];o.closestPointToPoint(x,r),d=x.distanceToSquared(r),d<u&&(u=d,a&&a.copy(x),c&&c.copy(r))}for(let h=0;h<3;h++){const d=t[h],f=t[(h+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const x=t[g],m=t[(g+1)%3];i.set(o[x],o[m]),Al(n,i,r,e);const p=r.distanceToSquared(e);p<u&&(u=p,a&&a.copy(r),c&&c.copy(e))}}return Math.sqrt(u)}})();class on{constructor(e,t,n){this.isOrientedBox=!0,this.min=new C,this.max=new C,this.matrix=new Te,this.invMatrix=new Te,this.points=new Array(8).fill().map(()=>new C),this.satAxes=new Array(3).fill().map(()=>new C),this.satBounds=new Array(3).fill().map(()=>new ri),this.alignedSatBounds=new Array(3).fill().map(()=>new ri),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}on.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=1*l|2*u|4*h,f=i[d];f.x=l?n.x:t.x,f.y=u?n.y:t.y,f.z=h?n.z:t.z,f.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){const u=o[l],h=s[l],d=1<<l,f=i[d];u.subVectors(a,f),h.setFromPoints(u,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();on.prototype.intersectsBox=(function(){const r=new ri;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let c=0;c<3;c++){const l=o[c],u=s[c];if(r.setFromBox(l,t),u.isSeparated(r))return!1}return!0}})();on.prototype.intersectsTriangle=(function(){const r=new En,e=new Array(3),t=new ri,n=new ri,i=new C;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=c[d];if(t.setFromPoints(g,e),f.isSeparated(t))return!1}const l=o.satBounds,u=o.satAxes,h=this.points;for(let d=0;d<3;d++){const f=l[d],g=u[d];if(t.setFromPoints(g,h),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=c[d];for(let g=0;g<4;g++){const x=u[g];if(i.crossVectors(f,x),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}})();on.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();on.prototype.distanceToPoint=(function(){const r=new C;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();on.prototype.distanceToBox=(function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new ii),t=new Array(12).fill().map(()=>new ii),n=new C,i=new C;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const u=a*a,h=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];i.copy(p).clamp(h,d);const v=p.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(p),l&&l.copy(i),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const _=(m+1)%3,y=(m+2)%3,S=p<<_|v<<y,T=1<<m|p<<_|v<<y,E=f[S],b=f[T];e[x].set(E,b);const D=r[m],R=r[_],I=r[y],U=t[x],O=U.start,L=U.end;O[D]=h[D],O[R]=p?h[R]:d[R],O[I]=v?h[I]:d[R],L[D]=d[D],L[R]=p?h[R]:d[R],L[I]=v?h[I]:d[R],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){i.x=m?d.x:h.x,i.y=p?d.y:h.y,i.z=v?d.z:h.z,this.closestPointToPoint(i,n);const _=i.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(i),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=e[m];for(let v=0;v<12;v++){const _=t[v];Al(p,_,n,i);const y=n.distanceToSquared(i);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(i),y<u))return Math.sqrt(y)}}return Math.sqrt(g)}})();class G_ extends El{constructor(){super(()=>new En)}}const vn=new G_,$r=new C,Oa=new C;function W_(r,e,t={},n=0,i=1/0){const s=n*n,o=i*i;let a=1/0,c=null;if(r.shapecast({boundsTraverseOrder:u=>($r.copy(e).clamp(u.min,u.max),$r.distanceToSquared(e)),intersectsBounds:(u,h,d)=>d<a&&d<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,$r);const d=e.distanceToSquared($r);return d<a&&(Oa.copy($r),a=d,c=h),d<s}}),a===1/0)return null;const l=Math.sqrt(a);return t.point?t.point.copy(Oa):t.point=Oa.clone(),t.distance=l,t.faceIndex=c,t}const eo=parseInt(gs)>=169,X_=parseInt(gs)<=161,Pi=new C,Di=new C,Ii=new C,to=new De,no=new De,io=new De,gh=new C,vh=new C,xh=new C,Zr=new C;function j_(r,e,t,n,i,s,o,a){let c;if(s===qt?c=r.intersectTriangle(n,t,e,!0,i):c=r.intersectTriangle(e,t,n,s!==an,i),c===null)return null;const l=r.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function _h(r,e,t,n,i,s,o,a,c,l,u){Pi.fromBufferAttribute(e,s),Di.fromBufferAttribute(e,o),Ii.fromBufferAttribute(e,a);const h=j_(r,Pi,Di,Ii,Zr,c,l,u);if(h){if(n){to.fromBufferAttribute(n,s),no.fromBufferAttribute(n,o),io.fromBufferAttribute(n,a),h.uv=new De;const f=Xt.getInterpolation(Zr,Pi,Di,Ii,to,no,io,h.uv);eo||(h.uv=f)}if(i){to.fromBufferAttribute(i,s),no.fromBufferAttribute(i,o),io.fromBufferAttribute(i,a),h.uv1=new De;const f=Xt.getInterpolation(Zr,Pi,Di,Ii,to,no,io,h.uv1);eo||(h.uv1=f),X_&&(h.uv2=h.uv1)}if(t){gh.fromBufferAttribute(t,s),vh.fromBufferAttribute(t,o),xh.fromBufferAttribute(t,a),h.normal=new C;const f=Xt.getInterpolation(Zr,Pi,Di,Ii,gh,vh,xh,h.normal);h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1),eo||(h.normal=f)}const d={a:s,b:o,c:a,normal:new C,materialIndex:0};if(Xt.getNormal(Pi,Di,Ii,d.normal),h.face=d,h.faceIndex=s,eo){const f=new C;Xt.getBarycoord(Zr,Pi,Di,Ii,f),h.barycoord=f}}return h}function yh(r){return r&&r.isMaterial?r.side:r}function Vo(r,e,t,n,i,s,o){const a=n*3;let c=a+0,l=a+1,u=a+2;const{index:h,groups:d}=r;r.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:f,normal:g,uv:x,uv1:m}=r.attributes;if(Array.isArray(e)){const p=n*3;for(let v=0,_=d.length;v<_;v++){const{start:y,count:S,materialIndex:T}=d[v];if(p>=y&&p<y+S){const E=yh(e[T]),b=_h(t,f,g,x,m,c,l,u,E,s,o);if(b)if(b.faceIndex=n,b.face.materialIndex=T,i)i.push(b);else return b}}}else{const p=yh(e),v=_h(t,f,g,x,m,c,l,u,p,s,o);if(v)if(v.faceIndex=n,v.face.materialIndex=0,i)i.push(v);else return v}return null}function Ct(r,e,t,n){const i=r.a,s=r.b,o=r.c;let a=e,c=e+1,l=e+2;t&&(a=t.getX(a),c=t.getX(c),l=t.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function K_(r,e,t,n,i,s,o,a){const{geometry:c,_indirectBuffer:l}=r;for(let u=n,h=n+i;u<h;u++)Vo(c,e,t,u,s,o,a)}function q_(r,e,t,n,i,s,o){const{geometry:a,_indirectBuffer:c}=r;let l=1/0,u=null;for(let h=n,d=n+i;h<d;h++){let f;f=Vo(a,e,t,h,null,s,o),f&&f.distance<l&&(u=f,l=f.distance)}return u}function Y_(r,e,t,n,i,s,o){const{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let u=r,h=e+r;u<h;u++){let d;if(d=u,Ct(o,d*3,c,l),o.needsUpdate=!0,n(o,d,i,s))return!0}return!1}function $_(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,c,l=0;const u=r._roots;for(let d=0,f=u.length;d<f;d++)s=u[d],o=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),h(0,l),l+=s.byteLength;function h(d,f,g=!1){const x=d*2;if(yt(x,a)){const m=Lt(d,o),p=Kt(x,a);let v=1/0,_=1/0,y=1/0,S=-1/0,T=-1/0,E=-1/0;for(let b=3*m,A=3*(m+p);b<A;b++){let D=n[b];const R=i.getX(D),I=i.getY(D),U=i.getZ(D);R<v&&(v=R),R>S&&(S=R),I<_&&(_=I),I>T&&(T=I),U<y&&(y=U),U>E&&(E=U)}return c[d+0]!==v||c[d+1]!==_||c[d+2]!==y||c[d+3]!==S||c[d+4]!==T||c[d+5]!==E?(c[d+0]=v,c[d+1]=_,c[d+2]=y,c[d+3]=S,c[d+4]=T,c[d+5]=E,!0):!1}else{const m=Nt(d),p=Ut(d,o);let v=g,_=!1,y=!1;if(e){if(!v){const D=m/It+f/Vt,R=p/It+f/Vt;_=e.has(D),y=e.has(R),v=!_&&!y}}else _=!0,y=!0;const S=v||_,T=v||y;let E=!1;S&&(E=h(m,f,v));let b=!1;T&&(b=h(p,f,v));const A=E||b;if(A)for(let D=0;D<3;D++){const R=m+D,I=p+D,U=c[R],O=c[R+3],L=c[I],H=c[I+3];c[d+D]=U<L?U:L,c[d+D+3]=O>H?O:H}return A}}}function Mi(r,e,t,n,i){let s,o,a,c,l,u;const h=1/t.direction.x,d=1/t.direction.y,f=1/t.direction.z,g=t.origin.x,x=t.origin.y,m=t.origin.z;let p=e[r],v=e[r+3],_=e[r+1],y=e[r+3+1],S=e[r+2],T=e[r+3+2];return h>=0?(s=(p-g)*h,o=(v-g)*h):(s=(v-g)*h,o=(p-g)*h),d>=0?(a=(_-x)*d,c=(y-x)*d):(a=(y-x)*d,c=(_-x)*d),s>c||a>o||((a>s||isNaN(s))&&(s=a),(c<o||isNaN(o))&&(o=c),f>=0?(l=(S-m)*f,u=(T-m)*f):(l=(T-m)*f,u=(S-m)*f),s>u||l>o)?!1:((l>s||s!==s)&&(s=l),(u<o||o!==o)&&(o=u),s<=i&&o>=n)}function Z_(r,e,t,n,i,s,o,a){const{geometry:c,_indirectBuffer:l}=r;for(let u=n,h=n+i;u<h;u++){let d=l?l[u]:u;Vo(c,e,t,d,s,o,a)}}function J_(r,e,t,n,i,s,o){const{geometry:a,_indirectBuffer:c}=r;let l=1/0,u=null;for(let h=n,d=n+i;h<d;h++){let f;f=Vo(a,e,t,c?c[h]:h,null,s,o),f&&f.distance<l&&(u=f,l=f.distance)}return u}function Q_(r,e,t,n,i,s,o){const{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let u=r,h=e+r;u<h;u++){let d;if(d=t.resolveTriangleIndex(u),Ct(o,d*3,c,l),o.needsUpdate=!0,n(o,d,i,s))return!0}return!1}function ey(r,e,t,n,i,s,o){ft.setBuffer(r._roots[e]),jc(0,r,t,n,i,s,o),ft.clearBuffer()}function jc(r,e,t,n,i,s,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ft,u=r*2;if(yt(u,c)){const d=Lt(r,l),f=Kt(u,c);K_(e,t,n,d,f,i,s,o)}else{const d=Nt(r);Mi(d,a,n,s,o)&&jc(d,e,t,n,i,s,o);const f=Ut(r,l);Mi(f,a,n,s,o)&&jc(f,e,t,n,i,s,o)}}const ty=["x","y","z"];function ny(r,e,t,n,i,s){ft.setBuffer(r._roots[e]);const o=Kc(0,r,t,n,i,s);return ft.clearBuffer(),o}function Kc(r,e,t,n,i,s){const{float32Array:o,uint16Array:a,uint32Array:c}=ft;let l=r*2;if(yt(l,a)){const h=Lt(r,c),d=Kt(l,a);return q_(e,t,n,h,d,i,s)}else{const h=zo(r,c),d=ty[h],g=n.direction[d]>=0;let x,m;g?(x=Nt(r),m=Ut(r,c)):(x=Ut(r,c),m=Nt(r));const v=Mi(x,o,n,i,s)?Kc(x,e,t,n,i,s):null;if(v){const S=v.point[d];if(g?S<=o[m+h]:S>=o[m+h+3])return v}const y=Mi(m,o,n,i,s)?Kc(m,e,t,n,i,s):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const ro=new bt,mr=new En,gr=new En,Jr=new Te,bh=new on,so=new on;function iy(r,e,t,n){ft.setBuffer(r._roots[e]);const i=qc(0,r,t,n);return ft.clearBuffer(),i}function qc(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ft;let c=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),bh.set(t.boundingBox.min,t.boundingBox.max,n),i=bh),yt(c,o)){const u=e.geometry,h=u.index,d=u.attributes.position,f=t.index,g=t.attributes.position,x=Lt(r,a),m=Kt(c,o);if(Jr.copy(n).invert(),t.boundsTree)return _t(r,s,so),so.matrix.copy(Jr),so.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>so.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x*3,y=(m+x)*3;_<y;_+=3)if(Ct(gr,_,h,d),gr.needsUpdate=!0,v.intersectsTriangle(gr))return!0;return!1}});{const p=ko(t);for(let v=x*3,_=(m+x)*3;v<_;v+=3){Ct(mr,v,h,d),mr.a.applyMatrix4(Jr),mr.b.applyMatrix4(Jr),mr.c.applyMatrix4(Jr),mr.needsUpdate=!0;for(let y=0,S=p*3;y<S;y+=3)if(Ct(gr,y,f,g),gr.needsUpdate=!0,mr.intersectsTriangle(gr))return!0}}}else{const u=Nt(r),h=Ut(r,a);return _t(u,s,ro),!!(i.intersectsBox(ro)&&qc(u,e,t,n,i)||(_t(h,s,ro),i.intersectsBox(ro)&&qc(h,e,t,n,i)))}}const oo=new Te,za=new on,Qr=new on,ry=new C,sy=new C,oy=new C,ay=new C;function cy(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),za.set(e.boundingBox.min,e.boundingBox.max,t),za.needsUpdate=!0;const a=r.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,h=e.index,d=vn.getPrimitive(),f=vn.getPrimitive();let g=ry,x=sy,m=null,p=null;i&&(m=oy,p=ay);let v=1/0,_=null,y=null;return oo.copy(t).invert(),Qr.matrix.copy(oo),r.shapecast({boundsTraverseOrder:S=>za.distanceToBox(S),intersectsBounds:(S,T,E)=>E<v&&E<o?(T&&(Qr.min.copy(S.min),Qr.max.copy(S.max),Qr.needsUpdate=!0),!0):!1,intersectsRange:(S,T)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:b=>Qr.distanceToBox(b),intersectsBounds:(b,A,D)=>D<v&&D<o,intersectsRange:(b,A)=>{for(let D=b,R=b+A;D<R;D++){Ct(f,3*D,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let I=S,U=S+T;I<U;I++){Ct(d,3*I,l,c),d.needsUpdate=!0;const O=d.distanceToTriangle(f,g,m);if(O<v&&(x.copy(g),p&&p.copy(m),v=O,_=I,y=D),O<s)return!0}}}});{const E=ko(e);for(let b=0,A=E;b<A;b++){Ct(f,3*b,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let D=S,R=S+T;D<R;D++){Ct(d,3*D,l,c),d.needsUpdate=!0;const I=d.distanceToTriangle(f,g,m);if(I<v&&(x.copy(g),p&&p.copy(m),v=I,_=D,y=b),I<s)return!0}}}}}),vn.releasePrimitive(d),vn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(oo),x.applyMatrix4(oo),i.distance=x.sub(i.point).length(),i.faceIndex=y),n)}function ly(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,c,l=0;const u=r._roots;for(let d=0,f=u.length;d<f;d++)s=u[d],o=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),h(0,l),l+=s.byteLength;function h(d,f,g=!1){const x=d*2;if(yt(x,a)){const m=Lt(d,o),p=Kt(x,a);let v=1/0,_=1/0,y=1/0,S=-1/0,T=-1/0,E=-1/0;for(let b=m,A=m+p;b<A;b++){const D=3*r.resolveTriangleIndex(b);for(let R=0;R<3;R++){let I=D+R;I=n?n[I]:I;const U=i.getX(I),O=i.getY(I),L=i.getZ(I);U<v&&(v=U),U>S&&(S=U),O<_&&(_=O),O>T&&(T=O),L<y&&(y=L),L>E&&(E=L)}}return c[d+0]!==v||c[d+1]!==_||c[d+2]!==y||c[d+3]!==S||c[d+4]!==T||c[d+5]!==E?(c[d+0]=v,c[d+1]=_,c[d+2]=y,c[d+3]=S,c[d+4]=T,c[d+5]=E,!0):!1}else{const m=Nt(d),p=Ut(d,o);let v=g,_=!1,y=!1;if(e){if(!v){const D=m/It+f/Vt,R=p/It+f/Vt;_=e.has(D),y=e.has(R),v=!_&&!y}}else _=!0,y=!0;const S=v||_,T=v||y;let E=!1;S&&(E=h(m,f,v));let b=!1;T&&(b=h(p,f,v));const A=E||b;if(A)for(let D=0;D<3;D++){const R=m+D,I=p+D,U=c[R],O=c[R+3],L=c[I],H=c[I+3];c[d+D]=U<L?U:L,c[d+D+3]=O>H?O:H}return A}}}function uy(r,e,t,n,i,s,o){ft.setBuffer(r._roots[e]),Yc(0,r,t,n,i,s,o),ft.clearBuffer()}function Yc(r,e,t,n,i,s,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ft,u=r*2;if(yt(u,c)){const d=Lt(r,l),f=Kt(u,c);Z_(e,t,n,d,f,i,s,o)}else{const d=Nt(r);Mi(d,a,n,s,o)&&Yc(d,e,t,n,i,s,o);const f=Ut(r,l);Mi(f,a,n,s,o)&&Yc(f,e,t,n,i,s,o)}}const hy=["x","y","z"];function dy(r,e,t,n,i,s){ft.setBuffer(r._roots[e]);const o=$c(0,r,t,n,i,s);return ft.clearBuffer(),o}function $c(r,e,t,n,i,s){const{float32Array:o,uint16Array:a,uint32Array:c}=ft;let l=r*2;if(yt(l,a)){const h=Lt(r,c),d=Kt(l,a);return J_(e,t,n,h,d,i,s)}else{const h=zo(r,c),d=hy[h],g=n.direction[d]>=0;let x,m;g?(x=Nt(r),m=Ut(r,c)):(x=Ut(r,c),m=Nt(r));const v=Mi(x,o,n,i,s)?$c(x,e,t,n,i,s):null;if(v){const S=v.point[d];if(g?S<=o[m+h]:S>=o[m+h+3])return v}const y=Mi(m,o,n,i,s)?$c(m,e,t,n,i,s):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const ao=new bt,vr=new En,xr=new En,es=new Te,Sh=new on,co=new on;function fy(r,e,t,n){ft.setBuffer(r._roots[e]);const i=Zc(0,r,t,n);return ft.clearBuffer(),i}function Zc(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ft;let c=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Sh.set(t.boundingBox.min,t.boundingBox.max,n),i=Sh),yt(c,o)){const u=e.geometry,h=u.index,d=u.attributes.position,f=t.index,g=t.attributes.position,x=Lt(r,a),m=Kt(c,o);if(es.copy(n).invert(),t.boundsTree)return _t(r,s,co),co.matrix.copy(es),co.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>co.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x,y=m+x;_<y;_++)if(Ct(xr,3*e.resolveTriangleIndex(_),h,d),xr.needsUpdate=!0,v.intersectsTriangle(xr))return!0;return!1}});{const p=ko(t);for(let v=x,_=m+x;v<_;v++){const y=e.resolveTriangleIndex(v);Ct(vr,3*y,h,d),vr.a.applyMatrix4(es),vr.b.applyMatrix4(es),vr.c.applyMatrix4(es),vr.needsUpdate=!0;for(let S=0,T=p*3;S<T;S+=3)if(Ct(xr,S,f,g),xr.needsUpdate=!0,vr.intersectsTriangle(xr))return!0}}}else{const u=Nt(r),h=Ut(r,a);return _t(u,s,ao),!!(i.intersectsBox(ao)&&Zc(u,e,t,n,i)||(_t(h,s,ao),i.intersectsBox(ao)&&Zc(h,e,t,n,i)))}}const lo=new Te,Ha=new on,ts=new on,py=new C,my=new C,gy=new C,vy=new C;function xy(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Ha.set(e.boundingBox.min,e.boundingBox.max,t),Ha.needsUpdate=!0;const a=r.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,h=e.index,d=vn.getPrimitive(),f=vn.getPrimitive();let g=py,x=my,m=null,p=null;i&&(m=gy,p=vy);let v=1/0,_=null,y=null;return lo.copy(t).invert(),ts.matrix.copy(lo),r.shapecast({boundsTraverseOrder:S=>Ha.distanceToBox(S),intersectsBounds:(S,T,E)=>E<v&&E<o?(T&&(ts.min.copy(S.min),ts.max.copy(S.max),ts.needsUpdate=!0),!0):!1,intersectsRange:(S,T)=>{if(e.boundsTree){const E=e.boundsTree;return E.shapecast({boundsTraverseOrder:b=>ts.distanceToBox(b),intersectsBounds:(b,A,D)=>D<v&&D<o,intersectsRange:(b,A)=>{for(let D=b,R=b+A;D<R;D++){const I=E.resolveTriangleIndex(D);Ct(f,3*I,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let U=S,O=S+T;U<O;U++){const L=r.resolveTriangleIndex(U);Ct(d,3*L,l,c),d.needsUpdate=!0;const H=d.distanceToTriangle(f,g,m);if(H<v&&(x.copy(g),p&&p.copy(m),v=H,_=U,y=D),H<s)return!0}}}})}else{const E=ko(e);for(let b=0,A=E;b<A;b++){Ct(f,3*b,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let D=S,R=S+T;D<R;D++){const I=r.resolveTriangleIndex(D);Ct(d,3*I,l,c),d.needsUpdate=!0;const U=d.distanceToTriangle(f,g,m);if(U<v&&(x.copy(g),p&&p.copy(m),v=U,_=D,y=b),U<s)return!0}}}}}),vn.releasePrimitive(d),vn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(lo),x.applyMatrix4(lo),i.distance=x.sub(i.point).length(),i.faceIndex=y),n)}function Mh(r,e,t){return r===null?null:(r.point.applyMatrix4(e.matrixWorld),r.distance=r.point.distanceTo(t.ray.origin),r.object=e,r)}const uo=new on,ho=new Hi,Th=new C,wh=new Te,Eh=new C,ka=["getX","getY","getZ"];class Io extends z_{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:o}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(s));const a=new Io(t,{...n,[wl]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const u=new Wt(e.index,1,!1);t.setIndex(u)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a;function c(l){for(let u=0;u<l.length;u++){const h=l[u],d=new Uint32Array(h),f=new Uint16Array(h);for(let g=0,x=h.byteLength/Vt;g<x;g++){const m=It*g,p=2*m;yt(p,f)||(d[m+6]=d[m+6]/It-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){const i=this.geometry,s=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,l=(s?s[e]:e)*3;let u=l+0,h=l+1,d=l+2;a&&(u=a[u],h=a[h],d=a[d]);for(let f=0;f<3;f++){const g=o[ka[f]](u),x=o[ka[f]](h),m=o[ka[f]](d);let p=g;x<p&&(p=x),m<p&&(p=m);let v=g;x>v&&(v=x),m>v&&(v=m),t[n+f]=p,t[n+f+3]=v}return t}computePrimitiveBounds(e,t,n){const i=this.geometry,s=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=o.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=o.array,u=o.offset||0;let h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);const d=["getX","getY","getZ"],f=n.offset;for(let g=e,x=e+t;g<x;g++){const p=(s?s[g]:g)*3,v=(g-f)*6;let _=p+0,y=p+1,S=p+2;a&&(_=a[_],y=a[y],S=a[S]),c||(_=_*h+u,y=y*h+u,S=S*h+u);for(let T=0;T<3;T++){let E,b,A;c?(E=o[d[T]](_),b=o[d[T]](y),A=o[d[T]](S)):(E=l[_+T],b=l[y+T],A=l[S+T]);let D=E;b<D&&(D=b),A<D&&(D=A);let R=E;b>R&&(R=b),A>R&&(R=A);const I=(R-D)/2,U=T*2;n[v+U+0]=D+I,n[v+U+1]=I+(Math.abs(D)+I)*yo}}return n}raycastObject3D(e,t,n=[]){const{material:i}=e;if(i===void 0)return;wh.copy(e.matrixWorld).invert(),ho.copy(t.ray).applyMatrix4(wh),Eh.setFromMatrixScale(e.matrixWorld),Th.copy(ho.direction).multiply(Eh);const s=Th.length(),o=t.near/s,a=t.far/s;if(t.firstHitOnly===!0){let c=this.raycastFirst(ho,i,o,a);c=Mh(c,e,t),c&&n.push(c)}else{const c=this.raycast(ho,i,o,a);for(let l=0,u=c.length;l<u;l++){const h=Mh(c[l],e,t);h&&n.push(h)}}return n}refit(e=null){return(this.indirect?ly:$_)(this,e)}raycast(e,t=rn,n=0,i=1/0){const s=this._roots,o=[],a=this.indirect?uy:ey;for(let c=0,l=s.length;c<l;c++)a(this,c,t,e,o,n,i);return o}raycastFirst(e,t=rn,n=0,i=1/0){const s=this._roots;let o=null;const a=this.indirect?dy:ny;for(let c=0,l=s.length;c<l;c++){const u=a(this,c,t,e,n,i);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?fy:iy;for(let o=0,a=i.length;o<a&&(n=s(this,o,e,t),!n);o++);return n}shapecast(e){const t=vn.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?Q_:Y_});return vn.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const o=vn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Ct(o,x*3,a,c)}:g=>{Ct(o,g*3,a,c)},u=vn.getPrimitive(),h=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?g=>{const x=e.resolveTriangleIndex(g);Ct(u,x*3,h,d)}:g=>{Ct(u,g*3,h,d)};if(s){if(!(e instanceof Io))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(x,m,p,v,_,y,S,T)=>{for(let E=p,b=p+v;E<b;E++){f(E),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let A=x,D=x+m;A<D;A++)if(l(A),o.needsUpdate=!0,s(o,u,A,E,_,y,S,T))return!0}return!1};if(i){const x=i;i=function(m,p,v,_,y,S,T,E){return x(m,p,v,_,y,S,T,E)?!0:g(m,p,v,_,y,S,T,E)}}else i=g}return super.bvhcast(e,t,{intersectsRanges:i})}intersectsBox(e,t){return uo.set(e.min,e.max,t),uo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>uo.intersectsBox(n),intersectsTriangle:n=>uo.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,o=1/0){return(this.indirect?xy:cy)(this,e,t,n,i,s,o)}closestPointToPoint(e,t={},n=0,i=1/0){return W_(this,e,t,n,i)}}function _y(r){switch(r){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function yy(r){switch(r){case 1:return Uo;case 2:return bi;case 3:return At;case 4:return At}}function Ah(r){switch(r){case 1:return Fo;case 2:return vs;case 3:return Ar;case 4:return Ar}}class Ad extends Rr{constructor(){super(),this.minFilter=ct,this.magFilter=ct,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const s=e.itemSize,o=e.count,a=e.normalized,c=e.array.constructor,l=c.BYTES_PER_ELEMENT;let u=this._forcedType,h=s;if(u===null)switch(c){case Float32Array:u=kt;break;case Uint8Array:case Uint16Array:case Uint32Array:u=nn;break;case Int8Array:case Int16Array:case Int32Array:u=br;break}let d,f,g,x,m=_y(s);switch(u){case kt:g=1,f=yy(s),a&&l===1?(x=c,m+="8",c===Uint8Array?d=tn:(d=To,m+="_SNORM")):(x=Float32Array,m+="32F",d=kt);break;case br:m+=l*8+"I",g=a?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,f=Ah(s),l===1?(x=Int8Array,d=To):l===2?(x=Int16Array,d=nl):(x=Int32Array,d=br);break;case nn:m+=l*8+"UI",g=a?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,f=Ah(s),l===1?(x=Uint8Array,d=tn):l===2?(x=Uint16Array,d=Er):(x=Uint32Array,d=nn);break}h===3&&(f===At||f===Ar)&&(h=4);const p=Math.ceil(Math.sqrt(o))||1,v=h*p*p,_=new x(v),y=e.normalized;e.normalized=!1;for(let S=0;S<o;S++){const T=h*S;_[T]=e.getX(S)/g,s>=2&&(_[T+1]=e.getY(S)/g),s>=3&&(_[T+2]=e.getZ(S)/g,h===4&&(_[T+3]=1)),s>=4&&(_[T+3]=e.getW(S)/g)}e.normalized=y,this.internalFormat=m,this.format=f,this.type=d,this.image.width=p,this.image.height=p,this.image.data=_,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class by extends Ad{constructor(){super(),this._forcedType=nn}}class Jc extends Ad{constructor(){super(),this._forcedType=kt}}class Sy{constructor(){this.index=new by,this.position=new Jc,this.bvhBounds=new Rr,this.bvhContents=new Rr,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(Ty(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=Ed(Ho(t));this._cachedIndexAttr=new Wt(i,1,!1)}My(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function My(r,e,t){const n=t.array,i=r.index?r.index.array:null;for(let s=0,o=e.length;s<o;s++){const a=3*s,c=3*e[s];for(let l=0;l<3;l++)n[a+l]=i?i[c+l]:c+l}}function Ty(r,e,t){const n=r._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],s=new Uint16Array(i),o=new Uint32Array(i),a=new Float32Array(i),c=i.byteLength/Vt,l=2*Math.ceil(Math.sqrt(c/2)),u=new Float32Array(4*l*l),h=Math.ceil(Math.sqrt(c)),d=new Uint32Array(2*h*h);for(let f=0;f<c;f++){const g=f*Vt/4,x=g*2,m=g;for(let p=0;p<3;p++)u[8*f+0+p]=a[m+0+p],u[8*f+4+p]=a[m+3+p];if(yt(x,s)){const p=Kt(x,s),v=Lt(g,o),_=b_|p;d[f*2+0]=_,d[f*2+1]=v}else{const p=o[g+6],v=zo(g,o);d[f*2+0]=v,d[f*2+1]=p}}e.image.data=u,e.image.width=l,e.image.height=l,e.format=At,e.type=kt,e.internalFormat="RGBA32F",e.minFilter=ct,e.magFilter=ct,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=d,t.image.width=h,t.image.height=h,t.format=vs,t.type=nn,t.internalFormat="RG32UI",t.minFilter=ct,t.magFilter=ct,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const wy=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Ey=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`,Ay=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;var Cy=`uniform sampler2D water;

varying vec3 vPosition;

void main() {
  
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  
  
  vPosition = position.xzy;

  
  vPosition.y += info.r;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`,Ry=`precision highp float;

const float IOR_AIR = 1.0; 
const float IOR_WATER = 1.333; 

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25); 
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0); 

const float poolHeight = 1.0; 
const float torusKnotShadowRadius = 0.13; 

uniform vec3 light;
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled;
#define MAX_CUBES 10
uniform vec3 cubeCenters[MAX_CUBES];
uniform vec3 cubeHalfSizes[MAX_CUBES];
uniform int cubeCount;
uniform bool cubeEnabled;
#define MAX_TORUS_KNOTS 10
uniform vec3 torusKnotCenters[MAX_TORUS_KNOTS];
uniform int torusKnotCount;
uniform bool torusKnotEnabled;
#define MAX_MESHES 10
uniform vec3 meshCenters[MAX_MESHES];
uniform int meshCount;
uniform float meshBoundingRadius;
uniform float meshShadowRadius;
uniform bool meshEnabled;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D objectReflectionTex;
uniform sampler2D objectClippedReflectionTex;
uniform sampler2D objectRefractionTex;
uniform sampler2D water;
uniform samplerCube sky;
uniform vec3 eye;
uniform mat4 viewProjectionMatrix;
uniform mat4 reflectionViewProjectionMatrix;

varying vec3 vPosition;

const float poolWidth = 1.0;
const float poolLength = 1.0;
#if USE_MESH_RAY_TRACING
#define MESH_BVH_IMPLEMENTATION

uniform BVH meshBVH;
uniform sampler2D meshNormalAttribute;
uniform sampler2D meshUvAttribute;

uniform sampler2D modelTexture;

vec3 getDuckColor(vec3 position, vec3 normal, vec2 uv) {
  vec3 baseColor = texture2D(modelTexture, uv).rgb;
  vec3 n = normalize(normal);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float litFactor = max(0.0, dot(n, -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(position.x)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(position.z)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((position.y + poolHeight + 0.25) / 0.25, 3.0);

  float diffuse = litFactor * 0.6;
  vec4 info = texture2D(water, position.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (position.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (position.xz - position.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
    );
    diffuse *= caustic.r * 4.0;
  }

  vec3 color = baseColor * (0.4 + diffuse);
  if (position.y < info.r) color *= underwaterColor * 1.2;
  return color;
}

bool intersectMeshInstances(vec3 origin, vec3 ray, out float distance, out vec3 normal, out vec2 uv) {
  distance = 1.0e6;
  if (!meshEnabled || dot(ray, ray) < 0.0001) return false;

  uvec4 nearestIndices = uvec4(0u);
  vec3 nearestBarycoord = vec3(0.0);
  bool found = false;
  for (int i = 0; i < MAX_MESHES; i++) {
    if (i >= meshCount) break;
    uvec4 indices = uvec4(0u);
    vec3 faceNormal = vec3(0.0);
    vec3 barycoord = vec3(0.0);
    float side = 1.0;
    float hitDistance = 1.0e6;
    
    bool hit = bvhIntersectFirstHit(
      meshBVH, origin - meshCenters[i], ray,
      indices, faceNormal, barycoord, side, hitDistance
    );
    if (hit && hitDistance > 0.00001 && hitDistance < distance) {
      distance = hitDistance;
      nearestIndices = indices;
      nearestBarycoord = barycoord;
      found = true;
    }
  }
  if (found) {
    normal = normalize(textureSampleBarycoord(meshNormalAttribute, nearestBarycoord, nearestIndices.xyz).xyz);
    uv = textureSampleBarycoord(meshUvAttribute, nearestBarycoord, nearestIndices.xyz).xy;
  }
  return found;
}
#endif

/**
 * Calculates intersections of a ray with the pool bounding box limits.
 */
vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

/**
 * Ray-Sphere intersection using the quadratic formula.
 *
 * Geometric setup:
 *   - Sphere: all points P where |P - C|² = r²
 *   - Ray: P(t) = O + t*D (origin O, direction D, parameter t ≥ 0)
 *
 * Substituting ray into sphere equation yields quadratic:
 *   at² + bt + c = 0
 *
 * Where:
 *   a = D·D (always > 0)
 *   b = 2(O-C)·D
 *   c = (O-C)·(O-C) - r²
 *
 * Solutions: t = (-b ± √(b²-4ac)) / 2a
 * We use -b - √... to get the nearest intersection (smallest positive t).
 */
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center; 
  float a = dot(ray, ray); 
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;

  if (discriminant > 0.0) {
    float t = (-b - sqrt(discriminant)) / (2.0 * a); 
    if (t > 0.0) return t; 
  }
  return 1.0e6; 
}

/**
 * Calculates exit/entry bounds on a sphere obstacle.
 */
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float root = sqrt(discriminant);
    float near = (-b - root) / (2.0 * a);
    float far = (-b + root) / (2.0 * a);
    if (near > 0.0) return near;
    if (far > 0.0) return 0.0;
  }
  return 1.0e6;
}

/**
 * Signed Distance Function (SDF) for a (2,3) Torus Knot (Trefoil Knot).
 *
 * A (p,q) torus knot winds p times through the hole and q times around
 * the torus. This creates a continuous closed curve in 3D space.
 *
 * The SDF is computed by discretizing the knot curve into line segments
 * and finding the minimum distance from the query point to any segment.
 * This distance is then offset by the tube radius to create a solid shape.
 *
 * For raymarching, the SDF's key property is: at any point, the SDF value
 * is a safe distance to step without overshooting the surface.
 */
float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;

  
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }

  float minDist = 1.0e6;
  const int segments = 48; 
  const float radius = 0.17; 
  const float tube = 0.045; 
  const float p_knot = 2.0; 
  const float q_knot = 3.0; 

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    
    float theta = float(i) / float(segments) * 6.283185307179586;

    
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;
    vec3 pt = vec3(
      rad * cos(p_knot * theta),
      -radius * sin(q_knot * theta) * 0.5,
      rad * sin(p_knot * theta)
    );

    if (i > 0) {
      
      vec3 ba = pt - prevPt; 
      vec3 pa = pos - prevPt; 
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); 
      float d = length(pa - ba * h); 
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }
  return minDist - tube; 
}

/**
 * Traces a ray to intersect the Torus Knot SDF.
 */
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;
  for (int i = 0; i < 20; i++) {
    vec3 p = origin + ray * t;
    float d = sdTorusKnot(p, center);
    if (d < 0.001) {
      return t;
    }
    t += d;
    if (t > t_bound + 0.5) break;
  }
  return 1.0e6;
}

/**
 * Computes surface normal of the Torus Knot using gradient estimation.
 *
 * For an SDF, the gradient ∇d points away from the surface (outward normal).
 * We estimate the gradient using central finite differences:
 *
 *   ∂d/∂x ≈ (d(x+ε) - d(x-ε)) / (2ε)
 *
 * This works because the SDF's gradient direction is the surface normal,
 * and the gradient magnitude is 1 (for a proper distance field).
 *
 * @param p Query point on the surface
 * @param center Torus knot center position
 * @return Normalized outward-facing surface normal
 */
vec3 getTorusKnotNormal(vec3 p, vec3 center) {
  const float eps = 0.001; 

  
  
  vec3 n = vec3(
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)
  );
  return normalize(n);
}

/**
 * Computes shading color for a point on the sphere surface.
 *
 * Uses a combination of:
 * 1. Proximity-based ambient occlusion (darkening near walls/floor)
 * 2. Diffuse lighting from the underwater sun direction
 * 3. Caustic light patterns when underwater
 */
vec3 getSphereColor(vec3 point, vec3 center, float radius) {
  vec3 color = vec3(0.5); 

  /**
   * * PROXIMITY AMBIENT OCCLUSION
   *    *
   *    * Darkens the sphere near pool walls and floor to simulate soft shadows
   *    * and reduced ambient light in corners. Uses an inverse power falloff:
   *    *
   *    *   occlusion = 1 - 0.9 / (distance/radius)³
   *    *
   *    * When distance ≈ radius: occlusion ≈ 1 - 0.9 = 0.1 (very dark)
   *    * When distance >> radius: occlusion → 1 (full brightness)
   *    *
   *    * Distances measured from walls (X=±1), back wall (Z=±1), and floor (Y=-poolHeight)
   */
  color *= 1.0 - 0.6 / pow((1.0 + radius - abs(point.x)) / radius, 3.0); 
  color *= 1.0 - 0.6 / pow((1.0 + radius - abs(point.z)) / radius, 3.0); 
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + radius) / radius, 3.0); 

  
  vec3 sphereNormal = (point - center) / radius;

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

  
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    
    
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse *= caustic.r * 4.0; 
  }

  color += diffuse;
  return color;
}

/**
 * Computes cube shading.
 */
vec3 getCubeColor(vec3 point, vec3 center, vec3 halfSize) {
  vec3 local = (point - center) / halfSize;
  vec3 axis = abs(local);
  vec3 cubeNormal;
  if (axis.x > axis.y && axis.x > axis.z) {
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);
  } else if (axis.y > axis.z) {
    cubeNormal = vec3(0.0, sign(local.y), 0.0);
  } else {
    cubeNormal = vec3(0.0, 0.0, sign(local.z));
  }

  vec3 color = vec3(0.5);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

/**
 * Computes Torus Knot shading.
 */
vec3 getTorusKnotColor(vec3 point, vec3 center) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, center);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

/**
 * Computes pool wall shading.
 */
vec3 getWallColor(vec3 point) {
  float scale = 0.5;
  vec3 wallColor;
  vec3 normal;
  if (abs(point.x) > 0.999) {
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0);
  } else if (abs(point.z) > 0.999) {
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z);
  } else {
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0);
  }

  scale /= length(point);
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenters[i]) / sphereRadii[i], 1.0), 4.0);
    }
  } else if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      float cubeDistance = length((point - cubeCenters[i]) / cubeHalfSizes[i]);
      scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
    }
  } else if (torusKnotEnabled) {
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float knotDistance = length(point - torusKnotCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
    }
  } else if (meshEnabled) {
    for (int i = 0; i < MAX_MESHES; i++) {
      if (i >= meshCount) break;
      float meshDistance = length(point - meshCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
    }
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    vec2 t = intersectCube(
      point,
      refractedLight,
      vec3(-1.0, -poolHeight, -1.0),
      vec3(1.0, 2.0, 1.0)
    );
    diffuse *=
      1.0 /
      (1.0 +
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

/**
 * Samples a texture projected from camera matrices.
 */
vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {
  vec4 clip = matrix * vec4(point, 1.0);
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);
  vec2 uv = ndc.xy * 0.5 + 0.5;
  float inBounds =
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;
}

/**
 * Samples refracted objects inside water.
 */
vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);
}

/**
 * Samples reflected objects inside water.
 */
vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(
    objectReflectionTex,
    reflectionViewProjectionMatrix,
    origin + ray * hit
  );
}

/**
 * Ray-traces a single ray to determine the color seen in that direction.
 *
 * This is a simple ray tracer that handles:
 * 1. Intersection with scene objects (sphere, cube, torus knot)
 * 2. Intersection with pool walls and floor
 * 3. Escape to sky (cubemap environment)
 * 4. Water color absorption (Beer's Law)
 *
 * The ray can be either a reflected ray (bouncing off water surface toward sky)
 * or a refracted ray (entering water toward pool floor).
 *
 * @param origin Starting point of the ray (on water surface)
 * @param ray Normalized direction of the ray
 * @param waterColor Tinting color for underwater light absorption
 * @return Final color for this ray
 */
vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
  vec3 color;

  
  int hitSphereIndex = -1;
  float sphereDistance = 1.0e6;
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      float d = intersectSphere(origin, ray, sphereCenters[i], sphereRadii[i]);
      if (d < sphereDistance) {
        sphereDistance = d;
        hitSphereIndex = i;
      }
    }
  }

  int hitCubeIndex = -1;
  float cubeDistance = 1.0e6;
  if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      vec2 cubeIntersection = intersectCube(
        origin,
        ray,
        cubeCenters[i] - cubeHalfSizes[i],
        cubeCenters[i] + cubeHalfSizes[i]
      );
      bool cubeHit = cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
      float d = cubeHit
        ? cubeIntersection.x > 0.0
          ? cubeIntersection.x
          : cubeIntersection.y > 0.0
            ? cubeIntersection.y
            : 1.0e6
        : 1.0e6;
      if (d < cubeDistance) {
        cubeDistance = d;
        hitCubeIndex = i;
      }
    }
  }

  
  
  float torusKnotDistance = 1.0e6;
  int hitTorusKnotIndex = -1;
  if (torusKnotEnabled) {
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float dist = intersectTorusKnot(origin, ray, torusKnotCenters[i]);
      if (dist < torusKnotDistance) {
        torusKnotDistance = dist;
        hitTorusKnotIndex = i;
      }
    }
  }

  
  float meshDistance = 1.0e6;
#if USE_MESH_RAY_TRACING
  vec3 meshNormal = vec3(0.0);
  vec2 meshUv = vec2(0.0);
  intersectMeshInstances(origin, ray, meshDistance, meshNormal, meshUv);
#endif
  float objectDistance = min(meshDistance, min(min(sphereDistance, cubeDistance), torusKnotDistance));

  if (objectDistance < 1.0e6) {
    
    vec3 hit = origin + ray * objectDistance;
#if USE_MESH_RAY_TRACING
    if (objectDistance == meshDistance) {
      color = getDuckColor(hit, meshNormal, meshUv);
    } else
#endif
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit, sphereCenters[hitSphereIndex], sphereRadii[hitSphereIndex]);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit, cubeCenters[hitCubeIndex], cubeHalfSizes[hitCubeIndex]);
    } else {
      color = getTorusKnotColor(hit, torusKnotCenters[hitTorusKnotIndex]);
    }

  } else if (ray.y < 0.0) {
    
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    color = getWallColor(origin + ray * t.y);

  } else {
    
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    vec3 hit = origin + ray * t.y;

    if (hit.y < 2.0 / 12.0) {
      
      color = getWallColor(hit);
    } else {
      
      color = textureCube(sky, ray).rgb;

      /**
 * * SUN SPOT (Specular Highlight)
 *        *
 *        * Add a bright spot where the ray direction aligns with the sun.
 *        * Uses a high-power falloff (5000) for a small, intense highlight.
 *        *
 *        * Color (10, 8, 6) gives a warm yellow-white sun appearance.
 */
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
    }
  }

  /**
 * * WATER COLOR ABSORPTION (Beer-Lambert Law Approximation)
 *    *
 *    * Light traveling through water is absorbed, with longer wavelengths
 *    * (red) absorbed more than shorter ones (blue). This is why deep
 *    * water appears blue-green.
 *    *
 *    * We simplify this by multiplying by a tint color for downward rays
 *    * (longer path through water = more absorption).
 */
  if (ray.y < 0.0) color *= waterColor;

  return color;
}

void main() {
  /**
 * * STEP 1: COORDINATE MAPPING
 *    * Convert world XZ position to UV texture coordinates [0,1]
 *    * World space: X,Z ∈ [-1, 1] → UV: [0, 1]
 */
  vec2 coord = vPosition.xz * 0.5 + 0.5;
  vec4 info = texture2D(water, coord);

  /**
 * * STEP 2: PARALLAX DISPLACEMENT (Iterative Refinement)
 *    *
 *    * Problem: The water surface is displaced vertically, but we're sampling
 *    * from a fixed horizontal grid. A naive lookup would misalign the surface
 *    * features with their actual 3D positions.
 *    *
 *    * Solution: Iteratively offset the UV lookup in the direction of the
 *    * surface gradient (stored in BA channels). This approximates ray-heightmap
 *    * intersection without expensive per-pixel raymarching.
 *    *
 *    * The gradient (info.ba) points toward higher water; we step along it
 *    * to converge toward the correct sampling point.
 */
  for (int i = 0; i < 5; i++) {
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0); 
    info = texture2D(water, coord); 
  }

  /**
 * * STEP 3: NORMAL RECONSTRUCTION
 *    *
 *    * The water texture stores surface slope components:
 *    *   info.b = ∂height/∂x (x-component of gradient)
 *    *   info.a = ∂height/∂z (z-component of gradient)
 *    *
 *    * For a heightfield, the normal is N = normalize(-∂h/∂x, 1, -∂h/∂z)
 *    * The y-component is computed from the unit normal constraint:
 *    *   |N| = 1  →  Nx² + Ny² + Nz² = 1  →  Ny = sqrt(1 - Nx² - Nz²)
 */
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  
  vec3 incomingRay = normalize(vPosition - eye);

  /**
 * * STEP 5: REFLECTION AND REFRACTION RAYS
 *    *
 *    * reflect(I, N): R = I - 2*(I·N)*N
 *    *   Mirrors the incident ray about the normal
 *    *
 *    * refract(I, N, eta): Snell's Law implementation
 *    *   n₁ sin(θ₁) = n₂ sin(θ₂)
 *    *   eta = n₁/n₂ = IOR_AIR/IOR_WATER ≈ 0.75
 *    *   Returns the transmitted ray direction
 */
  vec3 reflectedRay = reflect(incomingRay, normal);
  vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);

  /**
 * * STEP 6: FRESNEL REFLECTANCE (Schlick's Approximation)
 *    *
 *    * The Fresnel equations describe how much light reflects vs. refracts
 *    * at an interface, depending on the incident angle and polarization.
 *    *
 *    * Schlick's approximation: F(θ) = F₀ + (1 - F₀)(1 - cos(θ))⁵
 *    *
 *    * Where:
 *    *   F₀ = ((n₁ - n₂)/(n₁ + n₂))² ≈ 0.02 for air-water at normal incidence
 *    *   θ = angle between view ray and surface normal
 *    *
 *    * Physical behavior:
 *    *   - Looking straight down (θ ≈ 0°): mostly see refracted (underwater) image
 *    *   - Looking at grazing angle (θ → 90°): mostly see reflected (sky) image
 *    *
 *    * We use a modified version with F₀ = 0.25 and power = 3 for artistic control.
 */
  float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  
  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, abovewaterColor);
  vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, abovewaterColor);

  
  
  
  if (torusKnotEnabled) {
    
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      vec4 knotWaterInfo = texture2D(water, torusKnotCenters[i].xz * 0.5 + 0.5);
      
      if (torusKnotCenters[i].y > knotWaterInfo.r) {
        float hit = intersectSphereBounds(vPosition, refractedRay, torusKnotCenters[i], 0.31);
        if (hit < 1.0e6) {
          vec4 refractedObject = sampleProjectedTexture(
            objectRefractionTex,
            viewProjectionMatrix,
            vPosition + refractedRay * hit
          );
          refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
        }
        hit = intersectSphereBounds(vPosition, reflectedRay, torusKnotCenters[i], 0.31);
        if (hit < 1.0e6) {
          vec4 reflectedObject = sampleProjectedTexture(
            objectClippedReflectionTex,
            reflectionViewProjectionMatrix,
            vPosition + reflectedRay * hit
          );
          reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
        }
      }
    }
  }

  
  gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
}`,Py=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25); 
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0); 
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled;
#define MAX_CUBES 10
uniform vec3 cubeCenters[MAX_CUBES];
uniform vec3 cubeHalfSizes[MAX_CUBES];
uniform int cubeCount;
uniform bool cubeEnabled;
#define MAX_TORUS_KNOTS 10
uniform vec3 torusKnotCenters[MAX_TORUS_KNOTS];
uniform int torusKnotCount;
uniform bool torusKnotEnabled;
#define MAX_MESHES 10
uniform vec3 meshCenters[MAX_MESHES];
uniform int meshCount;
uniform float meshBoundingRadius;
uniform float meshShadowRadius;
uniform bool meshEnabled;

uniform sampler2D tiles; 
uniform sampler2D causticTex; 
uniform sampler2D objectReflectionTex; 
uniform sampler2D objectClippedReflectionTex; 
uniform sampler2D objectRefractionTex; 
uniform sampler2D water; 
uniform samplerCube sky; 

uniform vec3 eye;
uniform mat4 viewProjectionMatrix;
uniform mat4 reflectionViewProjectionMatrix;

uniform float cornerRadius;
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

varying vec3 vPosition;

#if USE_MESH_RAY_TRACING
#define MESH_BVH_IMPLEMENTATION

uniform BVH meshBVH;
uniform sampler2D meshNormalAttribute;
uniform sampler2D meshUvAttribute;

uniform sampler2D modelTexture;

vec3 getDuckColor(vec3 position, vec3 normal, vec2 uv) {
  vec3 baseColor = texture2D(modelTexture, uv).rgb;
  vec3 n = normalize(normal);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float litFactor = max(0.0, dot(n, -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(position.x)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(position.z)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((position.y + poolHeight + 0.25) / 0.25, 3.0);

  float diffuse = litFactor * 0.6;
  vec4 info = texture2D(water, position.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (position.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (position.xz - position.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
    );
    diffuse *= caustic.r * 4.0;
  }

  vec3 color = baseColor * (0.4 + diffuse);
  if (position.y < info.r) color *= underwaterColor * 1.2;
  return color;
}

bool intersectMeshInstances(vec3 origin, vec3 ray, out float distance, out vec3 normal, out vec2 uv) {
  distance = 1.0e6;
  if (!meshEnabled || dot(ray, ray) < 0.0001) return false;

  uvec4 nearestIndices = uvec4(0u);
  vec3 nearestBarycoord = vec3(0.0);
  bool found = false;
  for (int i = 0; i < MAX_MESHES; i++) {
    if (i >= meshCount) break;
    uvec4 indices = uvec4(0u);
    vec3 faceNormal = vec3(0.0);
    vec3 barycoord = vec3(0.0);
    float side = 1.0;
    float hitDistance = 1.0e6;
    
    bool hit = bvhIntersectFirstHit(
      meshBVH, origin - meshCenters[i], ray,
      indices, faceNormal, barycoord, side, hitDistance
    );
    if (hit && hitDistance > 0.00001 && hitDistance < distance) {
      distance = hitDistance;
      nearestIndices = indices;
      nearestBarycoord = barycoord;
      found = true;
    }
  }
  if (found) {
    normal = normalize(textureSampleBarycoord(meshNormalAttribute, nearestBarycoord, nearestIndices.xyz).xyz);
    uv = textureSampleBarycoord(meshUvAttribute, nearestBarycoord, nearestIndices.xyz).xy;
  }
  return found;
}
#endif

vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {
  float tNear = 1e6;
  float tFar = -1e6;
  bool found = false;

  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {
    float t = (poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.x) > 1.0e-7) {
    float t = (-poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (-poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }

  
  if (R > 0.0) {
    vec2 centers[4];
    centers[0] = vec2(r_sub_x, r_sub_z);
    centers[1] = vec2(-r_sub_x, r_sub_z);
    centers[2] = vec2(-r_sub_x, -r_sub_z);
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {
      vec2 center = centers[i];
      vec2 toCenter = origin - center;
      float a = dot(ray, ray);
      float b = 2.0 * dot(toCenter, ray);
      float c = dot(toCenter, toCenter) - R * R;
      float disc = b * b - 4.0 * a * c;
      if (disc >= 0.0) {
        float sqrtDisc = sqrt(disc);
        float tA = (-b - sqrtDisc) / (2.0 * a);
        float tB = (-b + sqrtDisc) / (2.0 * a);

        
        vec2 ptA = origin + tA * ray;
        bool validA = false;
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;
        if (validA) {
          tNear = min(tNear, tA);
          tFar = max(tFar, tA);
          found = true;
        }

        
        vec2 ptB = origin + tB * ray;
        bool validB = false;
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;
        if (validB) {
          tNear = min(tNear, tB);
          tFar = max(tFar, tB);
          found = true;
        }
      }
    }
  }

  if (!found) {
    return vec2(-1e6, 1e6);
  }

  return vec2(tNear, tFar);
}

vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {
  float tYNear = -1.0e6;
  float tYFar = 1.0e6;
  if (abs(ray.y) > 1.0e-7) {
    float tYMin = (-poolHeight - origin.y) / ray.y;
    float tYMax = (2.0 - origin.y) / ray.y;
    tYNear = min(tYMin, tYMax);
    tYFar = max(tYMin, tYMax);
  }
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);
  float tNear = max(tYNear, tXZ.x);
  float tFar = min(tYFar, tXZ.y);
  return vec2(tNear, tFar);
}

void getRoundedBoxNormalAndUV(vec3 point, float R, out vec3 normal, out vec2 uv) {
  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;

  if (point.y < -poolHeight + 0.001) {
    normal = vec3(0.0, 1.0, 0.0);
    uv = point.xz * 0.5 + 0.5;
    return;
  }

  vec2 absP = abs(point.xz);
  if (absP.x > r_sub_x && absP.y > r_sub_z && R > 0.0) {
    vec2 center = sign(point.xz) * vec2(r_sub_x, r_sub_z);
    vec2 d = point.xz - center;
    normal = vec3(-normalize(d).x, 0.0, -normalize(d).y);

    float s = 0.0;
    if (point.x >= r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {
      s = point.z + r_sub_z;
    } else if (point.x >= r_sub_x && point.z > r_sub_z) {
      vec2 cd = point.xz - vec2(r_sub_x, r_sub_z);
      s = 2.0 * r_sub_z + R * atan(cd.y, cd.x);
    } else if (point.z >= r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {
      s = 2.0 * r_sub_z + R * 1.570796326 + (r_sub_x - point.x);
    } else if (point.z >= r_sub_z && point.x < -r_sub_x) {
      vec2 cd = point.xz - vec2(-r_sub_x, r_sub_z);
      s = 2.0 * r_sub_z + R * 1.570796326 + 2.0 * r_sub_x + R * (atan(cd.y, cd.x) - 1.570796326);
    } else if (point.x <= -r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {
      s = 2.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + (r_sub_z - point.z);
    } else if (point.x <= -r_sub_x && point.z < -r_sub_z) {
      vec2 cd = point.xz - vec2(-r_sub_x, -r_sub_z);
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + R * (atan(cd.y, cd.x) + 3.14159265);
    } else if (point.z <= -r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 4.71238898 + (point.x + r_sub_x);
    } else {
      vec2 cd = point.xz - vec2(r_sub_x, -r_sub_z);
      s = 4.0 * r_sub_z + 4.0 * r_sub_x + R * 4.71238898 + R * (atan(cd.y, cd.x) + 1.570796326);
    }
    uv = vec2(point.y, s) * 0.5 + vec2(1.0, 0.5);
  } else {
    vec2 normP = absP / vec2(poolWidth, poolLength);
    if (normP.x > normP.y) {
      normal = vec3(-sign(point.x), 0.0, 0.0);
      uv = point.yz * 0.5 + vec2(1.0, 0.5);
    } else {
      normal = vec3(0.0, 0.0, -sign(point.z));
      uv = point.yx * 0.5 + vec2(1.0, 0.5);
    }
  }
}

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float t = (-b - sqrt(discriminant)) / (2.0 * a);
    if (t > 0.0) return t;
  }
  return 1.0e6;
}

float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float root = sqrt(discriminant);
    float near = (-b - root) / (2.0 * a);
    float far = (-b + root) / (2.0 * a);
    if (near > 0.0) return near;
    if (far > 0.0) return 0.0;
  }
  return 1.0e6;
}

float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }
  float minDist = 1.0e6;
  const int segments = 48;
  const float radius = 0.17;
  const float tube = 0.045;
  const float p_knot = 2.0;
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    float theta = float(i) / float(segments) * 6.283185307179586;
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;
    vec3 pt = vec3(
      rad * cos(p_knot * theta),
      -radius * sin(q_knot * theta) * 0.5,
      rad * sin(p_knot * theta)
    );
    if (i > 0) {
      vec3 ba = pt - prevPt;
      vec3 pa = pos - prevPt;
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
      float d = length(pa - ba * h);
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }
  return minDist - tube;
}

float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;
  for (int i = 0; i < 20; i++) {
    vec3 p = origin + ray * t;
    float d = sdTorusKnot(p, center);
    if (d < 0.001) {
      return t;
    }
    t += d;
    if (t > t_bound + 0.5) break;
  }
  return 1.0e6;
}

vec3 getTorusKnotNormal(vec3 p, vec3 center) {
  const float eps = 0.001;
  vec3 n = vec3(
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)
  );
  return normalize(n);
}

vec3 getSphereColor(vec3 point, vec3 center, float radius) {
  vec3 color = vec3(0.5);
  color *= 1.0 - 0.6 / pow((poolWidth + radius - abs(point.x)) / radius, 3.0);
  color *= 1.0 - 0.6 / pow((poolLength + radius - abs(point.z)) / radius, 3.0);
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + radius) / radius, 3.0);

  vec3 sphereNormal = (point - center) / radius;
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse *= caustic.r * 4.0;
  }
  color += diffuse;
  return color;
}

vec3 getCubeColor(vec3 point, vec3 center, vec3 halfSize) {
  vec3 local = (point - center) / halfSize;
  vec3 axis = abs(local);
  vec3 cubeNormal;
  if (axis.x > axis.y && axis.x > axis.z) {
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);
  } else if (axis.y > axis.z) {
    cubeNormal = vec3(0.0, sign(local.y), 0.0);
  } else {
    cubeNormal = vec3(0.0, 0.0, sign(local.z));
  }

  vec3 color = vec3(0.5);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

vec3 getTorusKnotColor(vec3 point, vec3 center) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, center);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  color += diffuse;
  return color;
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;
  vec3 wallColor;
  vec3 normal;
  vec2 uv;
  getRoundedBoxNormalAndUV(point, cornerRadius, normal, uv);
  wallColor = texture2D(tiles, uv).rgb;

  scale /= max(length(point), 1.0);
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenters[i]) / sphereRadii[i], 1.0), 2.0);
    }
  } else if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      float cubeDistance = length((point - cubeCenters[i]) / cubeHalfSizes[i]);
      scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 2.0);
    }
  } else if (torusKnotEnabled) {
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float knotDistance = length(point - torusKnotCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
    }
  } else if (meshEnabled) {
    for (int i = 0; i < MAX_MESHES; i++) {
      if (i >= meshCount) break;
      float meshDistance = length(point - meshCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 2.0);
    }
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    vec2 t = intersectRoundedBox(point, refractedLight, cornerRadius);
    diffuse *=
      1.0 /
      (1.0 +
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {
  vec4 clip = matrix * vec4(point, 1.0);
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);
  vec2 uv = ndc.xy * 0.5 + 0.5;
  float inBounds =
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;
}

vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);
}

vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(
    objectReflectionTex,
    reflectionViewProjectionMatrix,
    origin + ray * hit
  );
}

vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
  vec3 color;

  
  int hitSphereIndex = -1;
  float sphereDistance = 1.0e6;
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      float d = intersectSphere(origin, ray, sphereCenters[i], sphereRadii[i]);
      if (d < sphereDistance) {
        sphereDistance = d;
        hitSphereIndex = i;
      }
    }
  }
  int hitCubeIndex = -1;
  float cubeDistance = 1.0e6;
  if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      vec2 cubeIntersection = intersectCube(
        origin,
        ray,
        cubeCenters[i] - cubeHalfSizes[i],
        cubeCenters[i] + cubeHalfSizes[i]
      );
      bool cubeHit = cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
      float d = cubeHit
        ? cubeIntersection.x > 0.0
          ? cubeIntersection.x
          : cubeIntersection.y > 0.0
            ? cubeIntersection.y
            : 1.0e6
        : 1.0e6;
      if (d < cubeDistance) {
        cubeDistance = d;
        hitCubeIndex = i;
      }
    }
  }
  
  
  float torusKnotDistance = 1.0e6;
  int hitTorusKnotIndex = -1;
  if (torusKnotEnabled) {
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float dist = intersectTorusKnot(origin, ray, torusKnotCenters[i]);
      if (dist < torusKnotDistance) {
        torusKnotDistance = dist;
        hitTorusKnotIndex = i;
      }
    }
  }

  
  float meshDistance = 1.0e6;
#if USE_MESH_RAY_TRACING
  vec3 meshNormal = vec3(0.0);
  vec2 meshUv = vec2(0.0);
  intersectMeshInstances(origin, ray, meshDistance, meshNormal, meshUv);
#endif
  float objectDistance = min(meshDistance, min(min(sphereDistance, cubeDistance), torusKnotDistance));
  if (objectDistance < 1.0e6) {
    vec3 hit = origin + ray * objectDistance;
#if USE_MESH_RAY_TRACING
    if (objectDistance == meshDistance) {
      color = getDuckColor(hit, meshNormal, meshUv);
    } else
#endif
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit, sphereCenters[hitSphereIndex], sphereRadii[hitSphereIndex]);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit, cubeCenters[hitCubeIndex], cubeHalfSizes[hitCubeIndex]);
    } else {
      color = getTorusKnotColor(hit, torusKnotCenters[hitTorusKnotIndex]);
    }
  } else 
  if (ray.y < 0.0) {
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);
    color = getWallColor(origin + ray * t.y);
  } else 
  {
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);
    vec3 hit = origin + ray * t.y;
    
    if (hit.y < 2.0 / 12.0) {
      color = getWallColor(hit);
    } else 
    {
      color = textureCube(sky, ray).rgb;
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0); 
    }
  }

  
  if (ray.y < 0.0) color *= waterColor;
  return color;
}

void main() {
  
  vec2 absP = abs(vPosition.xz);
  float r_sub_x = poolWidth - cornerRadius;
  float r_sub_z = poolLength - cornerRadius;
  if (absP.x > r_sub_x && absP.y > r_sub_z) {
    if (length(absP - vec2(r_sub_x, r_sub_z)) > cornerRadius) {
      discard;
    }
  }

  
  vec2 coord = vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5;
  vec4 info = texture2D(water, coord);

  
  for (int i = 0; i < 5; i++) {
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0);
    info = texture2D(water, coord);
  }

  
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));
  vec3 incomingRay = normalize(vPosition - eye);

  
  vec3 reflectedRay = reflect(incomingRay, normal);
  vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);

  
  float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  
  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, abovewaterColor);
  vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, abovewaterColor);

  
  
  
  if (torusKnotEnabled) {
    
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      vec4 knotWaterInfo = texture2D(water, torusKnotCenters[i].xz * 0.5 + 0.5);
      
      if (torusKnotCenters[i].y > knotWaterInfo.r) {
        float hit = intersectSphereBounds(vPosition, refractedRay, torusKnotCenters[i], 0.31);
        if (hit < 1.0e6) {
          vec4 refractedObject = sampleProjectedTexture(
            objectRefractionTex,
            viewProjectionMatrix,
            vPosition + refractedRay * hit
          );
          refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
        }
        hit = intersectSphereBounds(vPosition, reflectedRay, torusKnotCenters[i], 0.31);
        if (hit < 1.0e6) {
          vec4 reflectedObject = sampleProjectedTexture(
            objectClippedReflectionTex,
            reflectionViewProjectionMatrix,
            vPosition + reflectedRay * hit
          );
          reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
        }
      }
    }
  }

  
  gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
}`,Dy=`uniform sampler2D water;

varying vec3 vPosition;

void main() {
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  
  vPosition = position.xzy;

  
  vPosition.y += info.r;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`,Iy=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float poolHeight = 1.0;
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled;
#define MAX_CUBES 10
uniform vec3 cubeCenters[MAX_CUBES];
uniform vec3 cubeHalfSizes[MAX_CUBES];
uniform int cubeCount;
uniform bool cubeEnabled;
#define MAX_TORUS_KNOTS 10
uniform vec3 torusKnotCenters[MAX_TORUS_KNOTS];
uniform int torusKnotCount;
uniform bool torusKnotEnabled;
#define MAX_MESHES 10
uniform vec3 meshCenters[MAX_MESHES];
uniform int meshCount;
uniform float meshBoundingRadius;
uniform float meshShadowRadius;
uniform bool meshEnabled;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D objectReflectionTex;
uniform sampler2D objectRefractionTex;
uniform sampler2D water;
uniform samplerCube sky;
uniform vec3 eye;
uniform mat4 viewProjectionMatrix;
uniform mat4 reflectionViewProjectionMatrix;

varying vec3 vPosition;

const float poolWidth = 1.0;
const float poolLength = 1.0;
#if USE_MESH_RAY_TRACING
#define MESH_BVH_IMPLEMENTATION

uniform BVH meshBVH;
uniform sampler2D meshNormalAttribute;
uniform sampler2D meshUvAttribute;

uniform sampler2D modelTexture;

vec3 getDuckColor(vec3 position, vec3 normal, vec2 uv) {
  vec3 baseColor = texture2D(modelTexture, uv).rgb;
  vec3 n = normalize(normal);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float litFactor = max(0.0, dot(n, -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(position.x)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(position.z)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((position.y + poolHeight + 0.25) / 0.25, 3.0);

  float diffuse = litFactor * 0.6;
  vec4 info = texture2D(water, position.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (position.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (position.xz - position.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
    );
    diffuse *= caustic.r * 4.0;
  }

  vec3 color = baseColor * (0.4 + diffuse);
  if (position.y < info.r) color *= underwaterColor * 1.2;
  return color;
}

bool intersectMeshInstances(vec3 origin, vec3 ray, out float distance, out vec3 normal, out vec2 uv) {
  distance = 1.0e6;
  if (!meshEnabled || dot(ray, ray) < 0.0001) return false;

  uvec4 nearestIndices = uvec4(0u);
  vec3 nearestBarycoord = vec3(0.0);
  bool found = false;
  for (int i = 0; i < MAX_MESHES; i++) {
    if (i >= meshCount) break;
    uvec4 indices = uvec4(0u);
    vec3 faceNormal = vec3(0.0);
    vec3 barycoord = vec3(0.0);
    float side = 1.0;
    float hitDistance = 1.0e6;
    
    bool hit = bvhIntersectFirstHit(
      meshBVH, origin - meshCenters[i], ray,
      indices, faceNormal, barycoord, side, hitDistance
    );
    if (hit && hitDistance > 0.00001 && hitDistance < distance) {
      distance = hitDistance;
      nearestIndices = indices;
      nearestBarycoord = barycoord;
      found = true;
    }
  }
  if (found) {
    normal = normalize(textureSampleBarycoord(meshNormalAttribute, nearestBarycoord, nearestIndices.xyz).xyz);
    uv = textureSampleBarycoord(meshUvAttribute, nearestBarycoord, nearestIndices.xyz).xy;
  }
  return found;
}
#endif

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

/**
 * Computes ray-sphere intersection.
 */
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float t = (-b - sqrt(discriminant)) / (2.0 * a);
    if (t > 0.0) return t;
  }
  return 1.0e6;
}

/**
 * Checks entry/exit bounds on a sphere obstacle.
 */
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float root = sqrt(discriminant);
    float near = (-b - root) / (2.0 * a);
    float far = (-b + root) / (2.0 * a);
    if (near > 0.0) return near;
    if (far > 0.0) return 0.0;
  }
  return 1.0e6;
}

/**
 * Torus Knot signed distance function (SDF).
 */
float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }
  float minDist = 1.0e6;
  const int segments = 32;
  const float radius = 0.17;
  const float tube = 0.045;
  const float p_knot = 2.0;
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    float theta = float(i) / float(segments) * 6.283185307179586;
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;
    vec3 pt = vec3(
      rad * cos(p_knot * theta),
      -radius * sin(q_knot * theta) * 0.5,
      rad * sin(p_knot * theta)
    );
    if (i > 0) {
      vec3 ba = pt - prevPt;
      vec3 pa = pos - prevPt;
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
      float d = length(pa - ba * h);
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }
  return minDist - tube;
}

/**
 * Traces a ray to intersect the Torus Knot SDF.
 */
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;
  for (int i = 0; i < 18; i++) {
    vec3 p = origin + ray * t;
    float d = sdTorusKnot(p, center);
    if (d < 0.001) {
      return t;
    }
    t += d;
    if (t > t_bound + 0.5) break;
  }
  return 1.0e6;
}

/**
 * Computes normal on Torus Knot surface.
 */
vec3 getTorusKnotNormal(vec3 p, vec3 center) {
  const float eps = 0.001;
  vec3 n = vec3(
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)
  );
  return normalize(n);
}

/**
 * Calculates shading color on the sphere.
 */
vec3 getSphereColor(vec3 point, vec3 center, float radius) {
  vec3 color = vec3(0.5);
  color *= 1.0 - 0.6 / pow((1.0 + radius - abs(point.x)) / radius, 3.0);
  color *= 1.0 - 0.6 / pow((1.0 + radius - abs(point.z)) / radius, 3.0);
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + radius) / radius, 3.0);

  vec3 sphereNormal = (point - center) / radius;
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse *= caustic.r * 4.0;
  }
  color += diffuse;
  return color;
}

/**
 * Calculates shading color on the cube.
 */
vec3 getCubeColor(vec3 point, vec3 center, vec3 halfSize) {
  vec3 local = (point - center) / halfSize;
  vec3 axis = abs(local);
  vec3 cubeNormal;
  if (axis.x > axis.y && axis.x > axis.z) {
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);
  } else if (axis.y > axis.z) {
    cubeNormal = vec3(0.0, sign(local.y), 0.0);
  } else {
    cubeNormal = vec3(0.0, 0.0, sign(local.z));
  }

  vec3 color = vec3(0.5);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

/**
 * Calculates shading color on the Torus Knot.
 */
vec3 getTorusKnotColor(vec3 point, vec3 center) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, center);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

/**
 * Calculates wall/floor tiles color.
 */
vec3 getWallColor(vec3 point) {
  float scale = 0.5;
  vec3 wallColor;
  vec3 normal;
  if (abs(point.x) > 0.999) {
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0);
  } else if (abs(point.z) > 0.999) {
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z);
  } else {
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0);
  }

  scale /= length(point);
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenters[i]) / sphereRadii[i], 1.0), 4.0);
    }
  } else if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      float cubeDistance = length((point - cubeCenters[i]) / cubeHalfSizes[i]);
      scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
    }
  } else if (torusKnotEnabled) {
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float knotDistance = length(point - torusKnotCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
    }
  } else if (meshEnabled) {
    for (int i = 0; i < MAX_MESHES; i++) {
      if (i >= meshCount) break;
      float meshDistance = length(point - meshCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
    }
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    vec2 t = intersectCube(
      point,
      refractedLight,
      vec3(-1.0, -poolHeight, -1.0),
      vec3(1.0, 2.0, 1.0)
    );
    diffuse *=
      1.0 /
      (1.0 +
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

/**
 * Samples a texture projected from the camera's view-projection matrix coordinates.
 */
vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {
  vec4 clip = matrix * vec4(point, 1.0);
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);
  vec2 uv = ndc.xy * 0.5 + 0.5;
  float inBounds =
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;
}

/**
 * Samples refraction texture mapped to a sphere boundary approximation.
 */
vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);
}

/**
 * Samples reflection texture mapped to a sphere boundary approximation.
 */
vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(
    objectReflectionTex,
    reflectionViewProjectionMatrix,
    origin + ray * hit
  );
}

/**
 * Ray-traces primary refraction/reflection rays to find colors of background wall tiles,
 * objects, or sky dome exits.
 */
vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
  vec3 color;
  int hitSphereIndex = -1;
  float sphereDistance = 1.0e6;
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      float d = intersectSphere(origin, ray, sphereCenters[i], sphereRadii[i]);
      if (d < sphereDistance) {
        sphereDistance = d;
        hitSphereIndex = i;
      }
    }
  }
  int hitCubeIndex = -1;
  float cubeDistance = 1.0e6;
  if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      vec2 cubeIntersection = intersectCube(
        origin,
        ray,
        cubeCenters[i] - cubeHalfSizes[i],
        cubeCenters[i] + cubeHalfSizes[i]
      );
      bool cubeHit = cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
      float d = cubeHit
        ? cubeIntersection.x > 0.0
          ? cubeIntersection.x
          : cubeIntersection.y > 0.0
            ? cubeIntersection.y
            : 1.0e6
        : 1.0e6;
      if (d < cubeDistance) {
        cubeDistance = d;
        hitCubeIndex = i;
      }
    }
  }
  float torusKnotDistance = 1.0e6;
  int hitTorusKnotIndex = -1;
  if (torusKnotEnabled && ray.y > 0.0) {
    float nearestBoundDist = 1.0e6;
    int nearestBoundIndex = -1;
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float t_bound = intersectSphereBounds(origin, ray, torusKnotCenters[i], 0.31);
      if (t_bound < nearestBoundDist) {
        nearestBoundDist = t_bound;
        nearestBoundIndex = i;
      }
    }
    if (nearestBoundIndex != -1) {
      torusKnotDistance = intersectTorusKnot(origin, ray, torusKnotCenters[nearestBoundIndex]);
      hitTorusKnotIndex = nearestBoundIndex;
    }
  }

  float meshDistance = 1.0e6;
#if USE_MESH_RAY_TRACING
  vec3 meshNormal = vec3(0.0);
  vec2 meshUv = vec2(0.0);
  intersectMeshInstances(origin, ray, meshDistance, meshNormal, meshUv);
#endif
  float objectDistance = min(meshDistance, min(min(sphereDistance, cubeDistance), torusKnotDistance));
  if (objectDistance < 1.0e6) {
    vec3 hit = origin + ray * objectDistance;
#if USE_MESH_RAY_TRACING
    if (objectDistance == meshDistance) {
      color = getDuckColor(hit, meshNormal, meshUv);
    } else
#endif
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit, sphereCenters[hitSphereIndex], sphereRadii[hitSphereIndex]);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit, cubeCenters[hitCubeIndex], cubeHalfSizes[hitCubeIndex]);
    } else {
      color = getTorusKnotColor(hit, torusKnotCenters[hitTorusKnotIndex]);
    }
  } else if (ray.y < 0.0) {
    
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    color = getWallColor(origin + ray * t.y);
  } else {
    
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    vec3 hit = origin + ray * t.y;
    if (hit.y < 2.0 / 12.0) {
      color = getWallColor(hit);
    } else {
      color = textureCube(sky, ray).rgb;
      
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
    }
  }

  
  if (ray.y < 0.0) color *= waterColor;
  return color;
}

void main() {
  
  vec2 coord = vPosition.xz * 0.5 + 0.5;
  vec4 info = texture2D(water, coord);

  
  
  for (int i = 0; i < 5; i++) {
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0);
    info = texture2D(water, coord);
  }

  
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));
  normal = -normal;

  
  vec3 incomingRay = normalize(vPosition - eye);

  
  vec3 reflectedRay = reflect(incomingRay, normal);
  vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);

  
  float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  
  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, underwaterColor);
  vec3 refractedColor =
    getSurfaceRayColor(vPosition, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);

  
  if (torusKnotEnabled) {
    vec4 reflectedObject = sampleProjectedTexture(
      objectReflectionTex,
      reflectionViewProjectionMatrix,
      vPosition
    );
    vec4 refractedObject = sampleProjectedTexture(
      objectRefractionTex,
      viewProjectionMatrix,
      vPosition
    );

    float nearestHit = 1.0e6;
    int nearestIndex = -1;
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float hit = intersectSphereBounds(vPosition, refractedRay, torusKnotCenters[i], 0.31);
      if (hit < nearestHit) {
        nearestHit = hit;
        nearestIndex = i;
      }
    }
    if (nearestIndex != -1) {
      refractedObject = max(
        refractedObject,
        sampleProjectedTexture(
          objectRefractionTex,
          viewProjectionMatrix,
          vPosition + refractedRay * nearestHit
        )
      );
    }
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
  }

  
  gl_FragColor = vec4(
    mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)),
    1.0
  );
}`,Ly=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled;
#define MAX_CUBES 10
uniform vec3 cubeCenters[MAX_CUBES];
uniform vec3 cubeHalfSizes[MAX_CUBES];
uniform int cubeCount;
uniform bool cubeEnabled;
#define MAX_TORUS_KNOTS 10
uniform vec3 torusKnotCenters[MAX_TORUS_KNOTS];
uniform int torusKnotCount;
uniform bool torusKnotEnabled;
#define MAX_MESHES 10
uniform vec3 meshCenters[MAX_MESHES];
uniform int meshCount;
uniform float meshBoundingRadius;
uniform float meshShadowRadius;
uniform bool meshEnabled;

uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D objectReflectionTex;
uniform sampler2D objectRefractionTex;
uniform sampler2D water;
uniform samplerCube sky;

uniform vec3 eye;
uniform mat4 viewProjectionMatrix;
uniform mat4 reflectionViewProjectionMatrix;

uniform float cornerRadius;
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

varying vec3 vPosition;

#if USE_MESH_RAY_TRACING
#define MESH_BVH_IMPLEMENTATION

uniform BVH meshBVH;
uniform sampler2D meshNormalAttribute;
uniform sampler2D meshUvAttribute;

uniform sampler2D modelTexture;

vec3 getDuckColor(vec3 position, vec3 normal, vec2 uv) {
  vec3 baseColor = texture2D(modelTexture, uv).rgb;
  vec3 n = normalize(normal);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float litFactor = max(0.0, dot(n, -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(position.x)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(position.z)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((position.y + poolHeight + 0.25) / 0.25, 3.0);

  float diffuse = litFactor * 0.6;
  vec4 info = texture2D(water, position.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (position.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (position.xz - position.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
    );
    diffuse *= caustic.r * 4.0;
  }

  vec3 color = baseColor * (0.4 + diffuse);
  if (position.y < info.r) color *= underwaterColor * 1.2;
  return color;
}

bool intersectMeshInstances(vec3 origin, vec3 ray, out float distance, out vec3 normal, out vec2 uv) {
  distance = 1.0e6;
  if (!meshEnabled || dot(ray, ray) < 0.0001) return false;

  uvec4 nearestIndices = uvec4(0u);
  vec3 nearestBarycoord = vec3(0.0);
  bool found = false;
  for (int i = 0; i < MAX_MESHES; i++) {
    if (i >= meshCount) break;
    uvec4 indices = uvec4(0u);
    vec3 faceNormal = vec3(0.0);
    vec3 barycoord = vec3(0.0);
    float side = 1.0;
    float hitDistance = 1.0e6;
    
    bool hit = bvhIntersectFirstHit(
      meshBVH, origin - meshCenters[i], ray,
      indices, faceNormal, barycoord, side, hitDistance
    );
    if (hit && hitDistance > 0.00001 && hitDistance < distance) {
      distance = hitDistance;
      nearestIndices = indices;
      nearestBarycoord = barycoord;
      found = true;
    }
  }
  if (found) {
    normal = normalize(textureSampleBarycoord(meshNormalAttribute, nearestBarycoord, nearestIndices.xyz).xyz);
    uv = textureSampleBarycoord(meshUvAttribute, nearestBarycoord, nearestIndices.xyz).xy;
  }
  return found;
}
#endif

vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {
  float tNear = 1e6;
  float tFar = -1e6;
  bool found = false;

  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {
    float t = (poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.x) > 1.0e-7) {
    float t = (-poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  
  if (abs(ray.y) > 1.0e-7) {
    float t = (-poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }

  
  if (R > 0.0) {
    vec2 centers[4];
    centers[0] = vec2(r_sub_x, r_sub_z);
    centers[1] = vec2(-r_sub_x, r_sub_z);
    centers[2] = vec2(-r_sub_x, -r_sub_z);
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {
      vec2 center = centers[i];
      vec2 toCenter = origin - center;
      float a = dot(ray, ray);
      float b = 2.0 * dot(toCenter, ray);
      float c = dot(toCenter, toCenter) - R * R;
      float disc = b * b - 4.0 * a * c;
      if (disc >= 0.0) {
        float sqrtDisc = sqrt(disc);
        float tA = (-b - sqrtDisc) / (2.0 * a);
        float tB = (-b + sqrtDisc) / (2.0 * a);

        
        vec2 ptA = origin + tA * ray;
        bool validA = false;
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;
        if (validA) {
          tNear = min(tNear, tA);
          tFar = max(tFar, tA);
          found = true;
        }

        
        vec2 ptB = origin + tB * ray;
        bool validB = false;
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;
        if (validB) {
          tNear = min(tNear, tB);
          tFar = max(tFar, tB);
          found = true;
        }
      }
    }
  }

  if (!found) {
    return vec2(-1e6, 1e6);
  }

  return vec2(tNear, tFar);
}

vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {
  float tYNear = -1.0e6;
  float tYFar = 1.0e6;
  if (abs(ray.y) > 1.0e-7) {
    float tYMin = (-poolHeight - origin.y) / ray.y;
    float tYMax = (2.0 - origin.y) / ray.y;
    tYNear = min(tYMin, tYMax);
    tYFar = max(tYMin, tYMax);
  }
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);
  float tNear = max(tYNear, tXZ.x);
  float tFar = min(tYFar, tXZ.y);
  return vec2(tNear, tFar);
}

void getRoundedBoxNormalAndUV(vec3 point, float R, out vec3 normal, out vec2 uv) {
  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;

  if (point.y < -poolHeight + 0.001) {
    normal = vec3(0.0, 1.0, 0.0);
    uv = point.xz * 0.5 + 0.5;
    return;
  }

  vec2 absP = abs(point.xz);
  if (absP.x > r_sub_x && absP.y > r_sub_z && R > 0.0) {
    vec2 center = sign(point.xz) * vec2(r_sub_x, r_sub_z);
    vec2 d = point.xz - center;
    normal = vec3(-normalize(d).x, 0.0, -normalize(d).y);

    float s = 0.0;
    if (point.x >= r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {
      s = point.z + r_sub_z;
    } else if (point.x >= r_sub_x && point.z > r_sub_z) {
      vec2 cd = point.xz - vec2(r_sub_x, r_sub_z);
      s = 2.0 * r_sub_z + R * atan(cd.y, cd.x);
    } else if (point.z >= r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {
      s = 2.0 * r_sub_z + R * 1.570796326 + (r_sub_x - point.x);
    } else if (point.z >= r_sub_z && point.x < -r_sub_x) {
      vec2 cd = point.xz - vec2(-r_sub_x, r_sub_z);
      s = 2.0 * r_sub_z + R * 1.570796326 + 2.0 * r_sub_x + R * (atan(cd.y, cd.x) - 1.570796326);
    } else if (point.x <= -r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {
      s = 2.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + (r_sub_z - point.z);
    } else if (point.x <= -r_sub_x && point.z < -r_sub_z) {
      vec2 cd = point.xz - vec2(-r_sub_x, -r_sub_z);
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + R * (atan(cd.y, cd.x) + 3.14159265);
    } else if (point.z <= -r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 4.71238898 + (point.x + r_sub_x);
    } else {
      vec2 cd = point.xz - vec2(r_sub_x, -r_sub_z);
      s = 4.0 * r_sub_z + 4.0 * r_sub_x + R * 4.71238898 + R * (atan(cd.y, cd.x) + 1.570796326);
    }
    uv = vec2(point.y, s) * 0.5 + vec2(1.0, 0.5);
  } else {
    vec2 normP = absP / vec2(poolWidth, poolLength);
    if (normP.x > normP.y) {
      normal = vec3(-sign(point.x), 0.0, 0.0);
      uv = point.yz * 0.5 + vec2(1.0, 0.5);
    } else {
      normal = vec3(0.0, 0.0, -sign(point.z));
      uv = point.yx * 0.5 + vec2(1.0, 0.5);
    }
  }
}

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float t = (-b - sqrt(discriminant)) / (2.0 * a);
    if (t > 0.0) return t;
  }
  return 1.0e6;
}

float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float root = sqrt(discriminant);
    float near = (-b - root) / (2.0 * a);
    float far = (-b + root) / (2.0 * a);
    if (near > 0.0) return near;
    if (far > 0.0) return 0.0;
  }
  return 1.0e6;
}

float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }
  float minDist = 1.0e6;
  const int segments = 32;
  const float radius = 0.17;
  const float tube = 0.045;
  const float p_knot = 2.0;
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    float theta = float(i) / float(segments) * 6.283185307179586;
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;
    vec3 pt = vec3(
      rad * cos(p_knot * theta),
      -radius * sin(q_knot * theta) * 0.5,
      rad * sin(p_knot * theta)
    );
    if (i > 0) {
      vec3 ba = pt - prevPt;
      vec3 pa = pos - prevPt;
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
      float d = length(pa - ba * h);
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }
  return minDist - tube;
}

float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;
  for (int i = 0; i < 18; i++) {
    vec3 p = origin + ray * t;
    float d = sdTorusKnot(p, center);
    if (d < 0.001) {
      return t;
    }
    t += d;
    if (t > t_bound + 0.5) break;
  }
  return 1.0e6;
}

vec3 getTorusKnotNormal(vec3 p, vec3 center) {
  const float eps = 0.001;
  vec3 n = vec3(
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)
  );
  return normalize(n);
}

vec3 getSphereColor(vec3 point, vec3 center, float radius) {
  vec3 color = vec3(0.5);
  color *= 1.0 - 0.6 / pow((poolWidth + radius - abs(point.x)) / radius, 3.0);
  color *= 1.0 - 0.6 / pow((poolLength + radius - abs(point.z)) / radius, 3.0);
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + radius) / radius, 3.0);

  vec3 sphereNormal = (point - center) / radius;
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse *= caustic.r * 4.0;
  }
  color += diffuse;
  return color;
}

vec3 getCubeColor(vec3 point, vec3 center, vec3 halfSize) {
  vec3 local = (point - center) / halfSize;
  vec3 axis = abs(local);
  vec3 cubeNormal;
  if (axis.x > axis.y && axis.x > axis.z) {
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);
  } else if (axis.y > axis.z) {
    cubeNormal = vec3(0.0, sign(local.y), 0.0);
  } else {
    cubeNormal = vec3(0.0, 0.0, sign(local.z));
  }

  vec3 color = vec3(0.5);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

vec3 getTorusKnotColor(vec3 point, vec3 center) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, center);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;
  vec3 wallColor;
  vec3 normal;
  vec2 uv;
  getRoundedBoxNormalAndUV(point, cornerRadius, normal, uv);
  wallColor = texture2D(tiles, uv).rgb;

  scale /= length(point);
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenters[i]) / sphereRadii[i], 1.0), 4.0);
    }
  } else if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      float cubeDistance = length((point - cubeCenters[i]) / cubeHalfSizes[i]);
      scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
    }
  } else if (torusKnotEnabled) {
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float knotDistance = length(point - torusKnotCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
    }
  } else if (meshEnabled) {
    for (int i = 0; i < MAX_MESHES; i++) {
      if (i >= meshCount) break;
      float meshDistance = length(point - meshCenters[i]);
      scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
    }
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    vec2 t = intersectRoundedBox(point, refractedLight, cornerRadius);
    diffuse *=
      1.0 /
      (1.0 +
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {
  vec4 clip = matrix * vec4(point, 1.0);
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);
  vec2 uv = ndc.xy * 0.5 + 0.5;
  float inBounds =
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;
}

vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);
}

vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(
    objectReflectionTex,
    reflectionViewProjectionMatrix,
    origin + ray * hit
  );
}

vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
  vec3 color;
  int hitSphereIndex = -1;
  float sphereDistance = 1.0e6;
  if (sphereEnabled) {
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      float d = intersectSphere(origin, ray, sphereCenters[i], sphereRadii[i]);
      if (d < sphereDistance) {
        sphereDistance = d;
        hitSphereIndex = i;
      }
    }
  }
  int hitCubeIndex = -1;
  float cubeDistance = 1.0e6;
  if (cubeEnabled) {
    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      vec2 cubeIntersection = intersectCube(
        origin,
        ray,
        cubeCenters[i] - cubeHalfSizes[i],
        cubeCenters[i] + cubeHalfSizes[i]
      );
      bool cubeHit = cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
      float d = cubeHit
        ? cubeIntersection.x > 0.0
          ? cubeIntersection.x
          : cubeIntersection.y > 0.0
            ? cubeIntersection.y
            : 1.0e6
        : 1.0e6;
      if (d < cubeDistance) {
        cubeDistance = d;
        hitCubeIndex = i;
      }
    }
  }
  float torusKnotDistance = 1.0e6;
  int hitTorusKnotIndex = -1;
  if (torusKnotEnabled && ray.y > 0.0) {
    float nearestBoundDist = 1.0e6;
    int nearestBoundIndex = -1;
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float t_bound = intersectSphereBounds(origin, ray, torusKnotCenters[i], 0.31);
      if (t_bound < nearestBoundDist) {
        nearestBoundDist = t_bound;
        nearestBoundIndex = i;
      }
    }
    if (nearestBoundIndex != -1) {
      torusKnotDistance = intersectTorusKnot(origin, ray, torusKnotCenters[nearestBoundIndex]);
      hitTorusKnotIndex = nearestBoundIndex;
    }
  }

  float meshDistance = 1.0e6;
#if USE_MESH_RAY_TRACING
  vec3 meshNormal = vec3(0.0);
  vec2 meshUv = vec2(0.0);
  intersectMeshInstances(origin, ray, meshDistance, meshNormal, meshUv);
#endif
  float objectDistance = min(meshDistance, min(min(sphereDistance, cubeDistance), torusKnotDistance));
  if (objectDistance < 1.0e6) {
    vec3 hit = origin + ray * objectDistance;
#if USE_MESH_RAY_TRACING
    if (objectDistance == meshDistance) {
      color = getDuckColor(hit, meshNormal, meshUv);
    } else
#endif
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit, sphereCenters[hitSphereIndex], sphereRadii[hitSphereIndex]);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit, cubeCenters[hitCubeIndex], cubeHalfSizes[hitCubeIndex]);
    } else {
      color = getTorusKnotColor(hit, torusKnotCenters[hitTorusKnotIndex]);
    }
  } else if (ray.y < 0.0) {
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);
    color = getWallColor(origin + ray * t.y);
  } else {
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);
    vec3 hit = origin + ray * t.y;
    if (hit.y < 2.0 / 12.0) {
      color = getWallColor(hit);
    } else {
      color = textureCube(sky, ray).rgb;
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
    }
  }
  if (ray.y < 0.0) color *= waterColor;
  return color;
}

void main() {
  
  vec2 absP = abs(vPosition.xz);
  float r_sub_x = poolWidth - cornerRadius;
  float r_sub_z = poolLength - cornerRadius;
  if (absP.x > r_sub_x && absP.y > r_sub_z) {
    if (length(absP - vec2(r_sub_x, r_sub_z)) > cornerRadius) {
      discard;
    }
  }

  vec2 coord = vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5;
  vec4 info = texture2D(water, coord);

  for (int i = 0; i < 5; i++) {
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0);
    info = texture2D(water, coord);
  }

  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));
  normal = -normal;
  vec3 incomingRay = normalize(vPosition - eye);

  vec3 reflectedRay = reflect(incomingRay, normal);
  vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
  float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, underwaterColor);
  vec3 refractedColor =
    getSurfaceRayColor(vPosition, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);

  if (torusKnotEnabled) {
    vec4 reflectedObject = sampleProjectedTexture(
      objectReflectionTex,
      reflectionViewProjectionMatrix,
      vPosition
    );
    vec4 refractedObject = sampleProjectedTexture(
      objectRefractionTex,
      viewProjectionMatrix,
      vPosition
    );

    float nearestHit = 1.0e6;
    int nearestIndex = -1;
    for (int i = 0; i < MAX_TORUS_KNOTS; i++) {
      if (i >= torusKnotCount) break;
      float hit = intersectSphereBounds(vPosition, refractedRay, torusKnotCenters[i], 0.31);
      if (hit < nearestHit) {
        nearestHit = hit;
        nearestIndex = i;
      }
    }
    if (nearestIndex != -1) {
      refractedObject = max(
        refractedObject,
        sampleProjectedTexture(
          objectRefractionTex,
          viewProjectionMatrix,
          vPosition + refractedRay * nearestHit
        )
      );
    }
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
  }

  gl_FragColor = vec4(
    mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)),
    1.0
  );
}`,Ch=`uniform sampler2D water;

uniform float poolWidth; 
uniform float poolLength; 

varying vec3 vPosition; 

void main() {
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  
  vPosition = position.xzy;

  
  
  vPosition.x *= poolWidth;
  vPosition.z *= poolLength;

  
  vPosition.y += info.r;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`;class Ny{constructor(e,t,n,i,s,o,a){N(this,"aboveMesh");N(this,"belowMesh");N(this,"aboveMaterial");N(this,"belowMaterial");N(this,"roundedBoxAboveMaterial",null);N(this,"roundedBoxBelowMaterial",null);this.tileTexture=e,this.cubemap=t,this.causticTexture=n,this.objectReflectionTexture=i,this.objectClippedReflectionTexture=s,this.objectRefractionTexture=o,this.state=a,this.aboveMaterial=this.createMaterial(Cy,Ry,qt,e,t,n,i,s,o),this.belowMaterial=this.createMaterial(Dy,Iy,rn,e,t,n,i,s,o);const c=new Vi(2,2,200,200);this.aboveMesh=new Rt(c,this.aboveMaterial),this.belowMesh=new Rt(c.clone(),this.belowMaterial),this.aboveMesh.frustumCulled=!1,this.belowMesh.frustumCulled=!1}setPoolShape(e,t,n,i,s){e==="Box"?(this.aboveMesh.material=this.aboveMaterial,this.belowMesh.material=this.belowMaterial):(this.roundedBoxAboveMaterial?(this.roundedBoxAboveMaterial.uniforms.cornerRadius.value=t,this.roundedBoxAboveMaterial.uniforms.poolWidth.value=n,this.roundedBoxAboveMaterial.uniforms.poolHeight.value=i,this.roundedBoxAboveMaterial.uniforms.poolLength.value=s,this.roundedBoxBelowMaterial.uniforms.cornerRadius.value=t,this.roundedBoxBelowMaterial.uniforms.poolWidth.value=n,this.roundedBoxBelowMaterial.uniforms.poolHeight.value=i,this.roundedBoxBelowMaterial.uniforms.poolLength.value=s):(this.roundedBoxAboveMaterial=this.createMaterial(Ch,Py,qt,this.tileTexture,this.cubemap,this.causticTexture,this.objectReflectionTexture,this.objectClippedReflectionTexture,this.objectRefractionTexture),this.roundedBoxAboveMaterial.uniforms.cornerRadius={value:t},this.roundedBoxAboveMaterial.uniforms.poolWidth={value:n},this.roundedBoxAboveMaterial.uniforms.poolHeight={value:i},this.roundedBoxAboveMaterial.uniforms.poolLength={value:s},this.roundedBoxBelowMaterial=this.createMaterial(Ch,Ly,rn,this.tileTexture,this.cubemap,this.causticTexture,this.objectReflectionTexture,this.objectClippedReflectionTexture,this.objectRefractionTexture),this.roundedBoxBelowMaterial.uniforms.cornerRadius={value:t},this.roundedBoxBelowMaterial.uniforms.poolWidth={value:n},this.roundedBoxBelowMaterial.uniforms.poolHeight={value:i},this.roundedBoxBelowMaterial.uniforms.poolLength={value:s}),this.aboveMesh.material=this.roundedBoxAboveMaterial,this.belowMesh.material=this.roundedBoxBelowMaterial)}prepare(e,t,n){const i=new C;t.getWorldPosition(i),this.prepareMaterial(this.aboveMesh.material,e,i,n),this.prepareMaterial(this.belowMesh.material,e,i,n)}createMaterial(e,t,n,i,s,o,a,c,l){return new ot({vertexShader:e,fragmentShader:t.replace("#define MESH_BVH_IMPLEMENTATION",[Ay,wy,Ey].join(`
`)),defines:{USE_MESH_RAY_TRACING:0},uniforms:{meshBVH:{value:null},meshNormalAttribute:{value:null},meshUvAttribute:{value:null},modelTexture:{value:null},light:{value:this.state.lightDirection.clone()},...this.state.createUniforms(),tiles:{value:i},causticTex:{value:o},objectReflectionTex:{value:a},objectClippedReflectionTex:{value:c},objectRefractionTex:{value:l},viewProjectionMatrix:{value:new Te},reflectionViewProjectionMatrix:{value:new Te},water:{value:null},sky:{value:s},eye:{value:new C}},side:n,depthTest:!0,depthWrite:!0})}prepareMaterial(e,t,n,i){const s=this.state.meshRayTracing,o=s?1:0;e.defines.USE_MESH_RAY_TRACING!==o&&(e.defines.USE_MESH_RAY_TRACING=o,e.needsUpdate=!0),s&&(e.uniforms.meshBVH.value=s.bvh,e.uniforms.meshNormalAttribute.value=s.normals,e.uniforms.meshUvAttribute.value=s.uvs,e.uniforms.modelTexture.value=s.texture),e.uniforms.water.value=t.textureA.texture,e.uniforms.eye.value.copy(n),e.uniforms.light.value.copy(this.state.lightDirection),e.uniforms.viewProjectionMatrix.value.copy(i.viewProjectionMatrix),e.uniforms.reflectionViewProjectionMatrix.value.copy(i.reflectionViewProjectionMatrix),this.state.syncUniforms(e),e.uniformsNeedUpdate=!0}}class Uy{constructor(){N(this,"lightDirection",new C(2,2,-1).normalize());N(this,"sphereCenter",new C);N(this,"sphereRadius",.25);N(this,"sphereCenters",Array.from({length:10},()=>new C));N(this,"sphereRadii",Array(10).fill(.25));N(this,"sphereCount",0);N(this,"sphereEnabled",!1);N(this,"cubeCenter",new C);N(this,"cubeHalfSize",new C(.25,.25,.25));N(this,"cubeCenters",Array.from({length:10},()=>new C));N(this,"cubeHalfSizes",Array.from({length:10},()=>new C(.25,.25,.25)));N(this,"cubeCount",0);N(this,"cubeEnabled",!1);N(this,"torusKnotCenter",new C);N(this,"torusKnotCenters",Array.from({length:10},()=>new C));N(this,"torusKnotCount",0);N(this,"torusKnotEnabled",!1);N(this,"meshCenter",new C);N(this,"meshCenters",Array.from({length:10},()=>new C));N(this,"meshCount",0);N(this,"meshBoundingRadius",.25);N(this,"meshShadowRadius",.25);N(this,"meshEnabled",!1);N(this,"meshRayTracing",null)}apply(e){if(this.sphereEnabled=!1,this.cubeEnabled=!1,this.torusKnotEnabled=!1,this.meshEnabled=!1,this.meshRayTracing=null,e.kind==="sphere"){this.sphereCount=e.count;for(let t=0;t<e.count;t++)this.sphereCenters[t].copy(e.centers[t]),this.sphereRadii[t]=e.radii[t];e.count>0&&(this.sphereCenter.copy(e.centers[0]),this.sphereRadius=e.radii[0]),this.sphereEnabled=!0}else if(e.kind==="box"){this.cubeCount=e.count;for(let t=0;t<e.count;t++)this.cubeCenters[t].copy(e.centers[t]),this.cubeHalfSizes[t].copy(e.halfSizes[t]);e.count>0&&(this.cubeCenter.copy(e.centers[0]),this.cubeHalfSize.copy(e.halfSizes[0])),this.cubeEnabled=!0}else if(e.kind==="torusknot"){this.torusKnotCount=e.count;for(let t=0;t<e.count;t++)this.torusKnotCenters[t].copy(e.centers[t]);e.count>0&&this.torusKnotCenter.copy(e.centers[0]),this.torusKnotEnabled=!0}else if(e.kind==="mesh"){this.meshRayTracing=e.rayTracing,this.meshCount=e.count;for(let t=0;t<e.count;t++)this.meshCenters[t].copy(e.centers[t]);e.count>0&&this.meshCenter.copy(e.centers[0]),this.meshBoundingRadius=e.boundingRadius,this.meshShadowRadius=e.shadowRadius??e.boundingRadius,this.meshEnabled=!0}}createUniforms(){return{sphereCenter:{value:this.sphereCenter.clone()},sphereRadius:{value:this.sphereRadius},sphereCenters:{value:this.sphereCenters.map(e=>e.clone())},sphereRadii:{value:[...this.sphereRadii]},sphereCount:{value:this.sphereCount},sphereEnabled:{value:this.sphereEnabled},cubeCenter:{value:this.cubeCenter.clone()},cubeHalfSize:{value:this.cubeHalfSize.clone()},cubeCenters:{value:this.cubeCenters.map(e=>e.clone())},cubeHalfSizes:{value:this.cubeHalfSizes.map(e=>e.clone())},cubeCount:{value:this.cubeCount},cubeEnabled:{value:this.cubeEnabled},torusKnotCenter:{value:this.torusKnotCenter.clone()},torusKnotCenters:{value:this.torusKnotCenters.map(e=>e.clone())},torusKnotCount:{value:this.torusKnotCount},torusKnotEnabled:{value:this.torusKnotEnabled},meshCenter:{value:this.meshCenter.clone()},meshCenters:{value:this.meshCenters.map(e=>e.clone())},meshCount:{value:this.meshCount},meshBoundingRadius:{value:this.meshBoundingRadius},meshShadowRadius:{value:this.meshShadowRadius},meshEnabled:{value:this.meshEnabled}}}syncUniforms(e){if(e.uniforms.sphereCenter&&e.uniforms.sphereCenter.value.copy(this.sphereCenter),e.uniforms.sphereRadius&&(e.uniforms.sphereRadius.value=this.sphereRadius),e.uniforms.sphereCenters){for(let t=0;t<this.sphereCount;t++)e.uniforms.sphereCenters.value[t].copy(this.sphereCenters[t]);e.uniforms.sphereRadii.value=[...this.sphereRadii],e.uniforms.sphereCount.value=this.sphereCount}if(e.uniforms.sphereEnabled&&(e.uniforms.sphereEnabled.value=this.sphereEnabled),e.uniforms.cubeCenter&&e.uniforms.cubeCenter.value.copy(this.cubeCenter),e.uniforms.cubeHalfSize&&e.uniforms.cubeHalfSize.value.copy(this.cubeHalfSize),e.uniforms.cubeCenters){for(let t=0;t<this.cubeCount;t++)e.uniforms.cubeCenters.value[t].copy(this.cubeCenters[t]),e.uniforms.cubeHalfSizes.value[t].copy(this.cubeHalfSizes[t]);e.uniforms.cubeCount.value=this.cubeCount}if(e.uniforms.cubeEnabled&&(e.uniforms.cubeEnabled.value=this.cubeEnabled),e.uniforms.torusKnotCenter&&e.uniforms.torusKnotCenter.value.copy(this.torusKnotCenter),e.uniforms.torusKnotCenters){for(let t=0;t<this.torusKnotCount;t++)e.uniforms.torusKnotCenters.value[t].copy(this.torusKnotCenters[t]);e.uniforms.torusKnotCount.value=this.torusKnotCount}if(e.uniforms.torusKnotEnabled&&(e.uniforms.torusKnotEnabled.value=this.torusKnotEnabled),e.uniforms.meshCenter&&e.uniforms.meshCenter.value.copy(this.meshCenter),e.uniforms.meshCenters){for(let t=0;t<this.meshCount;t++)e.uniforms.meshCenters.value[t].copy(this.meshCenters[t]);e.uniforms.meshCount.value=this.meshCount}e.uniforms.meshBoundingRadius&&(e.uniforms.meshBoundingRadius.value=this.meshBoundingRadius),e.uniforms.meshShadowRadius&&(e.uniforms.meshShadowRadius.value=this.meshShadowRadius),e.uniforms.meshEnabled&&(e.uniforms.meshEnabled.value=this.meshEnabled)}}const Fy=0;class By{constructor(e,t,n){N(this,"lightDir");N(this,"objectRenderResources");N(this,"opticsState");N(this,"objectTextures");N(this,"caustics");N(this,"pool");N(this,"waterSurface");this.opticsState=new Uy,this.lightDir=this.opticsState.lightDirection,this.objectTextures=new d_(e,this.lightDir),this.caustics=new l_(e,this.opticsState,this.objectTextures.shadowTarget.texture),this.objectRenderResources={lightDirection:this.lightDir,causticTexture:this.caustics.texture},this.pool=new __(t,this.caustics.texture,this.opticsState),this.waterSurface=new Ny(t,n,this.caustics.texture,this.objectTextures.reflectionTarget.texture,this.objectTextures.clippedReflectionTarget.texture,this.objectTextures.refractionTarget.texture,this.opticsState)}setSize(e,t){this.objectTextures.setSize(e,t)}updateCaustics(e){this.caustics.update(e)}updateObjectTextures(e,t,n){const i=this.opticsState.torusKnotEnabled||this.opticsState.meshEnabled;this.objectTextures.update(e,t,i?n:null,this.opticsState.torusKnotEnabled)}renderPool(e){this.pool.prepare(e)}renderWater(e,t){this.waterSurface.prepare(e,t,{viewProjectionMatrix:this.objectTextures.viewProjectionMatrix,reflectionViewProjectionMatrix:this.objectTextures.reflectionViewProjectionMatrix})}setWaterOptics(e){this.opticsState.apply(e)}setPoolShape(e,t,n,i,s){const o=Math.max(0,Math.min(n,s)-Fy),a=e==="Box"?t:Math.min(t,o);this.pool.setPoolShape(e,a,n,i,s),this.caustics.setPoolShape(e,a,n,i,s),this.waterSurface.setPoolShape(e,a,n,i,s),this.objectTextures.setPoolBounds(n,s)}getPoolMesh(){return this.pool.mesh}getWaterMesh(){return this.waterSurface.aboveMesh}getWaterMeshBack(){return this.waterSurface.belowMesh}markWaterOpticsHidden(){this.pool.mesh.userData.waterOpticsHidden=!0,this.waterSurface.aboveMesh.userData.waterOpticsHidden=!0,this.waterSurface.belowMesh.userData.waterOpticsHidden=!0}}const Oy={kind:"none"},So="None";class zy{constructor(e){N(this,"objects",new Map);N(this,"activeObject",null);N(this,"sharedPosition",new C);N(this,"sharedPositions",Array.from({length:10},()=>new C));this.scene=e}register(e,t=!1){if(this.objects.has(e.name))throw new Error(`Simulation object "${e.name}" is already registered`);if(this.objects.set(e.name,e),this.scene.add(e.mesh),t){this.activeObject=e,this.sharedPosition.copy(e.position);for(let n=0;n<e.positions.length;n++)this.sharedPositions[n].copy(e.positions[n])}return this}get options(){return[So,...this.objects.keys()]}get active(){return this.activeObject}get optics(){var e;return((e=this.activeObject)==null?void 0:e.optics)??Oy}select(e,t,n,i=1,s=1,o=1){const a=e===So?null:this.objects.get(e);if(e!==So&&!a)throw new Error(`Unknown simulation object "${e}"`);if(a!==this.activeObject){if(this.activeObject){this.sharedPosition.copy(this.activeObject.position);for(let c=0;c<this.activeObject.positions.length;c++)this.sharedPositions[c].copy(this.activeObject.positions[c]);this.activeObject.setEnabled(!1,t)}if(this.activeObject=a??null,this.activeObject){this.activeObject.instanceCount=n;for(let c=0;c<this.activeObject.positions.length;c++)this.activeObject.positions[c].copy(this.sharedPositions[c]);this.activeObject.position.copy(this.sharedPosition);for(let c=0;c<this.activeObject.positions.length;c++)this.activeObject.positions[c].y=Math.max(this.activeObject.positions[c].y,this.activeObject.floorY(s));this.activeObject.moveBy(new C(0,0,0),i,s,o),this.activeObject.setEnabled(!0,t)}}}update(e,t,n){var i;(i=this.activeObject)==null||i.update(e,t,n)}prepareRender(e,t,n,i){var s;(s=this.activeObject)==null||s.prepareRender(e,t,n,i)}}var Hy=`varying vec3 vPosition; 
varying vec3 vNormal; 
varying vec3 vCubeCenter;
varying vec3 vCubeHalfSize;

void main() {
  vec4 centerWorld = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vCubeCenter = centerWorld.xyz;

  
  vCubeHalfSize = vec3(
    length(vec3(instanceMatrix[0][0], instanceMatrix[0][1], instanceMatrix[0][2])),
    length(vec3(instanceMatrix[1][0], instanceMatrix[1][1], instanceMatrix[1][2])),
    length(vec3(instanceMatrix[2][0], instanceMatrix[2][1], instanceMatrix[2][2]))
  ) * 0.5;

  vNormal = normal;

  vec4 worldPos = instanceMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}`,ky=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

uniform float poolWidth;
uniform float poolLength;
uniform float poolHeight;

varying vec3 vCubeCenter;
varying vec3 vCubeHalfSize;

uniform sampler2D water; 
uniform sampler2D causticTex; 

varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {
  
  vec3 color = vec3(0.5);

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  
  float litFactor = max(0.0, dot(normalize(vNormal), -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  color *= 1.0 - aoStrength / pow((poolWidth + vCubeHalfSize.x - abs(vPosition.x)) / vCubeHalfSize.x, 3.0);
  
  color *= 1.0 - aoStrength / pow((poolLength + vCubeHalfSize.z - abs(vPosition.z)) / vCubeHalfSize.z, 3.0);
  
  color *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + vCubeHalfSize.y) / vCubeHalfSize.y, 3.0);

  
  float diffuse = max(0.0, dot(-refractedLight, normalize(vNormal))) * 0.5;

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  
  if (vPosition.y < info.r) {
    
    
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }

  color += diffuse;

  
  if (vPosition.y < info.r) {
    color *= underwaterColor * 1.2;
  }

  gl_FragColor = vec4(color, 1.0);
}`;class Vy{constructor(e){this.radius=e}move(e,t,n,i=1,s=1){e.moveSphere(t,n,this.radius,1,i,s)}}class Gy{constructor(e){this.halfSize=e}move(e,t,n,i=1,s=1){e.moveCube(t,n,this.halfSize,i,s)}}class Cd{constructor(e,t=1){N(this,"previousCenter",new C);N(this,"center",new C);this.spheres=e,this.displacementScale=t}moveBatch(e,t,n,i,s=1,o=1){const a=[],c=[],l=[];let u=!1;for(let h=0;h<Math.min(i,t.length,n.length);h++){t[h].distanceToSquared(n[h])>1e-10&&(u=!0);for(const d of this.spheres)a.push(this.previousCenter.copy(t[h]).add(d.offset).clone()),c.push(this.center.copy(n[h]).add(d.offset).clone()),l.push(d.radius)}u&&a.length>0&&e.moveSpheres(a,c,l,this.displacementScale,s,o)}move(e,t,n,i=1,s=1){for(const o of this.spheres)this.previousCenter.copy(t).add(o.offset),this.center.copy(n).add(o.offset),e.moveSphere(this.previousCenter,this.center,o.radius,this.displacementScale,i,s)}}function Go(r,e,t,n,i,s){if(n.dragging){t.set(0,0,0);return}if(!n.physicsEnabled)return;const o=n.densityEnabled?1/n.density:1.1,a=xt.clamp((i-e.y)/(2*i),0,1);t.addScaledVector(n.gravity,r-o*r*a);const c=t.lengthSq();c>0&&t.addScaledVector(t.clone().normalize(),-a*r*c),e.addScaledVector(t,r);const l=s-n.poolHeight;e.y<l&&(e.y=l,t.y=Math.abs(t.y)*.7)}function Ti(r,e,t,n,i,s,o,a){const c=t-s,l=i-o;r.add(e),r.x=xt.clamp(r.x,-c,c),r.y=xt.clamp(r.y,a-n,10),r.z=xt.clamp(r.z,-l,l)}class Wy{constructor(e){N(this,"name","Cube");N(this,"halfSize",new C(.25,.25,.25));N(this,"position",new C(-.4,this.halfSize.y-1,.2));N(this,"velocity",new C);N(this,"instanceCount",1);N(this,"maxCubes",5);N(this,"positions");N(this,"velocities");N(this,"previousPositions");N(this,"draggedInstanceIndex",null);N(this,"displacement",new Gy(this.halfSize));N(this,"mesh");N(this,"enabled",!1);N(this,"bounds",new bt);N(this,"material");this.resources=e,this.positions=Array.from({length:this.maxCubes},(t,n)=>n===0?this.position:this.position.clone()),this.velocities=Array.from({length:this.maxCubes},(t,n)=>n===0?this.velocity:this.velocity.clone()),this.previousPositions=this.positions.map(t=>t.clone()),this.material=new ot({vertexShader:Hy,fragmentShader:ky,uniforms:{light:{value:e.lightDirection.clone()},cubeCenter:{value:this.position.clone()},cubeHalfSize:{value:this.halfSize.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture}},depthTest:!0,depthWrite:!0}),this.mesh=new xs(new ki(1,1,1),this.material,this.maxCubes),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.count=this.instanceCount}floorY(e){return this.halfSize.y-e}get optics(){return{kind:"box",center:this.position,halfSize:this.halfSize,centers:this.positions,halfSizes:Array(this.maxCubes).fill(this.halfSize),count:this.instanceCount}}setEnabled(e,t){if(!e){if(this.enabled){for(let i=0;i<this.maxCubes;i++){const s=this.getInactivePosition(i);this.displacement.move(t,this.positions[i],s),this.positions[i].copy(s),this.velocities[i].set(0,0,0)}this.draggedInstanceIndex=null,this.enabled=!1,this.mesh.visible=!1,this.syncPreviousPosition()}return}const n=[new C(0,0,0),new C(.4,0,.4),new C(-.4,0,-.4),new C(.4,0,-.4),new C(-.4,0,.4)];for(let i=0;i<this.maxCubes;i++){const s=this.getInactivePosition(i);i<this.instanceCount?(this.positions[i].y>=5&&this.positions[i].copy(this.position).add(n[i]),this.positions[i].x=xt.clamp(this.positions[i].x,-.7,.7),this.positions[i].y=Math.max(this.positions[i].y,this.floorY(1)),this.positions[i].z=xt.clamp(this.positions[i].z,-.7,.7),this.velocities[i].set(0,0,0),this.displacement.move(t,s,this.positions[i]),this.previousPositions[i].copy(this.positions[i])):(this.displacement.move(t,this.positions[i],s),this.positions[i].copy(s),this.velocities[i].set(0,0,0),this.previousPositions[i].copy(s))}this.mesh.count=this.instanceCount,this.mesh.visible=this.instanceCount>0,this.enabled=!0,this.syncPreviousPosition()}syncPreviousPosition(){for(let e=0;e<this.maxCubes;e++)this.previousPositions[e].copy(this.positions[e])}update(e,t,n){if(this.enabled)for(let i=0;i<this.instanceCount;i++){const s=i===this.draggedInstanceIndex&&t.dragging,o={...t,dragging:s};Go(e,this.positions[i],this.velocities[i],o,this.halfSize.y,this.halfSize.y),this.displacement.move(n,this.previousPositions[i],this.positions[i],t.poolWidth,t.poolLength),this.previousPositions[i].copy(this.positions[i])}}hitTest(e,t){if(!this.enabled)return null;let n=1e6,i=null;this.draggedInstanceIndex=null;const s=new Hi(e,t),o=new C;for(let a=0;a<this.instanceCount;a++){this.bounds.set(this.positions[a].clone().sub(this.halfSize),this.positions[a].clone().add(this.halfSize));const c=s.intersectBox(this.bounds,o);if(c){const l=e.distanceTo(c);l<n&&(n=l,i=c.clone(),this.draggedInstanceIndex=a)}}return i}moveBy(e,t=1,n=1,i=1){if(this.draggedInstanceIndex!==null)Ti(this.positions[this.draggedInstanceIndex],e,t,n,i,this.halfSize.x,this.halfSize.z,this.halfSize.y);else for(let s=0;s<this.instanceCount;s++)Ti(this.positions[s],e,t,n,i,this.halfSize.x,this.halfSize.z,this.halfSize.y)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.cubeCenter.value.copy(this.position),this.material.uniforms.cubeHalfSize.value.copy(this.halfSize),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0;const s=new Te,o=new C(this.halfSize.x*2,this.halfSize.y*2,this.halfSize.z*2),a=new xn;for(let c=0;c<this.instanceCount;c++)s.compose(this.positions[c],a,o),this.mesh.setMatrixAt(c,s);this.mesh.instanceMatrix.needsUpdate=!0}getInactivePosition(e){return new C(this.positions[e].x,10+e*2,this.positions[e].z)}}function Rh(r,e){if(e===pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ic||e===$h){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ic)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Xy(r){const e=new Map,t=new Map,n=r.clone();return Rd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Rd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Rd(r.children[n],e.children[n],t)}class jy extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Ph(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ph(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ub(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=cs.extractUrlBase(e);o=cs.resolveURL(l,this.path)}else o=cs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ld(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Pd){try{o[Ve.KHR_BINARY_GLTF]=new hb(e)}catch(h){i&&i(h);return}s=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Tb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:o[h]=new Yy;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[h]=new db(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[h]=new fb;break;case Ve.KHR_MESH_QUANTIZATION:o[h]=new pb;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Ky(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function wt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qy{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ie(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],dn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Xp(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Gp(u),l.distance=h;break;case"spot":l=new kp(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ln(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Yy{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Bi}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ht))}return Promise.all(i)}}class $y{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Zy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(s,s)}return Promise.all(i)}}class Jy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class eb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ht)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class tb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class nb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(s[0],s[1],s[2],dn),Promise.all(i)}}class ib{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class rb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(s[0],s[1],s[2],dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ht)),Promise.all(i)}}class sb{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class ob{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class ab{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class cb{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class lb{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Ph{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class ub{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const x=new Te,m=new C,p=new xn,v=new C(1,1,1),_=new xs(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,x.compose(m,p,v));for(const y in c)if(y==="_COLOR_0"){const S=c[y];_.instanceColor=new Fc(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);mt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Pd="glTF",ns=12,Dh={JSON:1313821514,BIN:5130562};class hb{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ns,s=new DataView(e,ns);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Dh.JSON){const l=new Uint8Array(e,ns+o,a);this.content=n.decode(l)}else if(c===Dh.BIN){const l=ns+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class db{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Qc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Qc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Mr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(f)},a,l,dn,d)})})}}class fb{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pb{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class Dd extends Ur{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,v=1-m,_=p-d+h;for(let y=0;y!==a;y++){const S=o[x+y+a],T=o[x+y+c]*u,E=o[g+y+a],b=o[g+y]*u;s[y]=v*S+_*T+m*E+p*b}return s}}const mb=new xn;class gb extends Dd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return mb.fromArray(s).normalize().toArray(s),s}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ih={9728:ct,9729:lt,9984:Xh,9985:po,9986:rs,9987:Fn},Lh={33071:Un,33648:Mo,10497:yi},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vb={CUBICSPLINE:void 0,LINEAR:ds,STEP:hs},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rn})),r.DefaultMaterial}function Li(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ln(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _b(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function yb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bb(r){let e;const t=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wa(t.attributes):e=r.indices+":"+Wa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Wa(r.targets[n]);return e}function Wa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function el(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Mb=new Te;class Tb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new _l(this.options.manager):this.textureLoader=new jp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ld(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Li(s,a,i),Ln(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(cs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Va[i.type],a=Mr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Wt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Va[i.type],l=Mr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(v);_||(x=new l(a,p*f,i.count*f/u),_=new op(x,f/u),t.cache.add(v,_)),m=new hl(_,c,d%f/u,g)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),m=new Wt(x,c,g);if(i.sparse!==void 0){const p=Va.SCALAR,v=Mr[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new v(o[1],_,i.sparse.count*p),T=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,b=S.length;E<b;E++){const A=S[E];if(m.setX(A,T[E*c]),c>=2&&m.setY(A,T[E*c+1]),c>=3&&m.setZ(A,T[E*c+2]),c>=4&&m.setW(A,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ih[d.magFilter]||lt,u.minFilter=Ih[d.minFilter]||Fn,u.wrapS=Lh[d.wrapS]||yi,u.wrapT=Lh[d.wrapT]||yi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ct&&u.minFilter!==lt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Gt(x);m.needsUpdate=!0,d(m)}),t.load(cs.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Ln(h,o),h.userData.mimeType=o.mimeType||Sb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new rd,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new id,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ve.KHR_MATERIALS_UNLIT]){const h=i[Ve.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],dn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=an);const u=s.alphaMode||Ga.OPAQUE;if(u===Ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ga.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Bi&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Bi&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Bi){const h=s.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],dn)}return s.emissiveTexture!==void 0&&o!==Bi&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ht)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Ln(h,s),t.associations.set(h,{materials:e}),s.extensions&&Li(i,h,s),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Nh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=bb(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Nh(new sn,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?xb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],m=o[f];let p;const v=l[f];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new up(x,v):new Rt(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=Rh(p.geometry,$h):m.mode===gn.TRIANGLE_FAN&&(p.geometry=Rh(p.geometry,Ic));else if(m.mode===gn.LINES)p=new gp(x,v);else if(m.mode===gn.LINE_STRIP)p=new pl(x,v);else if(m.mode===gn.LINE_LOOP)p=new vp(x,v);else if(m.mode===gn.POINTS)p=new xp(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&yb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ln(p,s),m.extensions&&Li(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Li(i,h[0],s),h[0];const d=new vi;s.extensions&&Li(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(xt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ln(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Te;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new dl(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let _=0,y=d.length;_<y;_++){const S=d[_],T=f[_],E=g[_],b=x[_],A=m[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const D=n._createAnimationTracks(S,T,E,b,A);if(D)for(let R=0;R<D.length;R++)p.push(D[R])}const v=new Lp(s,void 0,p);return Ln(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Mb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,g=h[0];u.pivot=new C().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new nd:l.length>1?u=new vi:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ln(u,s),s.extensions&&Li(n,u,s),s.matrix!==void 0){const h=new Te;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new vi;n.name&&(s.name=i.createUniqueName(n.name)),Ln(s,n),n.extensions&&Li(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){const d=c[u];d.parent!==null?s.add(Xy(d)):s.add(d)}const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof zn||d instanceof Gt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}mi[s.path]===mi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(mi[s.path]){case mi.weights:u=Ir;break;case mi.rotation:u=Lr;break;case mi.translation:case mi.scale:u=Nr;break;default:switch(n.itemSize){case 1:u=Ir;break;case 2:case 3:default:u=Nr;break}break}const h=i.interpolation!==void 0?vb[i.interpolation]:ds,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const x=new u(c[f]+"."+mi[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=el(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Lr?gb:Dd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wb(r,e,t){const n=e.attributes,i=new bt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const u=el(Mr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,c=new C;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=el(Mr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new An;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Nh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Qc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return We.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Ln(r,e),wb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_b(r,e.targets,t):r})}var Eb=`varying vec3 vPosition; 
varying vec3 vNormal; 
varying vec2 vUv; 
varying vec3 vMeshCenter;

void main() {
  vec4 centerWorld = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vMeshCenter = centerWorld.xyz;

  vNormal = normalize((instanceMatrix * vec4(normal, 0.0)).xyz);
  vUv = uv;

  vec4 worldPos = instanceMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}`,Ab=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

uniform float poolWidth;
uniform float poolLength;
uniform float poolHeight;

varying vec3 vMeshCenter;

uniform sampler2D water; 
uniform sampler2D causticTex; 

uniform int texturePassMode;

varying vec3 vPosition; 
varying vec3 vNormal; 
varying vec2 vUv; 

uniform sampler2D modelTexture;

vec3 getDuckColor(vec3 position, vec3 normal, vec2 uv) {
  vec3 baseColor = texture2D(modelTexture, uv).rgb;
  vec3 n = normalize(normal);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float litFactor = max(0.0, dot(n, -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(position.x)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(position.z)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((position.y + poolHeight + 0.25) / 0.25, 3.0);

  float diffuse = litFactor * 0.6;
  vec4 info = texture2D(water, position.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (position.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (position.xz - position.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
    );
    diffuse *= caustic.r * 4.0;
  }

  vec3 color = baseColor * (0.4 + diffuse);
  if (position.y < info.r) color *= underwaterColor * 1.2;
  return color;
}

void main() {
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (texturePassMode == 2 && vPosition.y < info.r) discard;
  gl_FragColor = vec4(getDuckColor(vPosition, vNormal, vUv), 1.0);
}`;class Cb{constructor(e,t){N(this,"bvh",new Sy);N(this,"normals",new Jc);N(this,"uvs",new Jc);this.texture=t;const n=new Io(e,{strategy:Sd,maxDepth:30});this.bvh.updateFrom(n),this.normals.updateFrom(e.getAttribute("normal")),this.uvs.updateFrom(e.getAttribute("uv"))}}class Rb{constructor(e){N(this,"name","Rubber Duck");N(this,"boundingRadius",.25);N(this,"floorClearance",.265);N(this,"position",new C(.4,this.floorClearance-1,-.2));N(this,"velocity",new C);N(this,"instanceCount",1);N(this,"maxDucks",5);N(this,"positions");N(this,"velocities");N(this,"previousPositions");N(this,"draggedInstanceIndex",null);N(this,"displacement");N(this,"mesh");N(this,"instancedMesh",null);N(this,"enabled",!1);N(this,"material",null);N(this,"loaded",!1);N(this,"baseMatrix",new Te);N(this,"rayTracing",null);this.resources=e,this.mesh=new vi,this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.positions=Array.from({length:this.maxDucks},(t,n)=>n===0?this.position:this.position.clone()),this.velocities=Array.from({length:this.maxDucks},(t,n)=>n===0?this.velocity:this.velocity.clone()),this.previousPositions=this.positions.map(t=>t.clone()),this.displacement=new Cd(this.generateDisplacementSpheres(),.15),this.loadModel()}floorY(e){return this.floorClearance-e}get optics(){return{kind:"mesh",center:this.position,boundingRadius:this.boundingRadius,centers:this.positions,count:this.instanceCount,rayTracing:this.rayTracing}}generateDisplacementSpheres(){const e=[];return e.push({offset:new C(0,0,0),radius:.15}),e.push({offset:new C(0,.1,.1),radius:.08}),e.push({offset:new C(0,-.08,-.05),radius:.1}),e}async loadModel(){const e="/threejs-water/",t=new jy;try{const i=(await t.loadAsync(`${e}models/duck/Duck.gltf`)).scene,o=await new _l().loadAsync(`${e}models/duck/DuckCM.png`);o.flipY=!1,this.material=new ot({vertexShader:Eb,fragmentShader:Ab,uniforms:{light:{value:this.resources.lightDirection.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},meshCenter:{value:this.position.clone()},water:{value:null},causticTex:{value:this.resources.causticTexture},modelTexture:{value:o},texturePassMode:{value:0}},depthTest:!0,depthWrite:!0}),i.updateMatrixWorld(!0);let a=null,c=new Te;if(i.traverse(p=>{p instanceof Rt&&(a=p.geometry,c.copy(p.matrixWorld))}),!a)throw new Error("No mesh found in Duck glTF model");const l=new bt().setFromObject(i),u=l.getSize(new C),h=l.getCenter(new C),d=Math.max(u.x,u.y,u.z),g=this.boundingRadius*2/d;this.baseMatrix.makeScale(g,g,g);const x=new C().copy(h).multiplyScalar(-g);x.y-=l.min.y*g,this.baseMatrix.setPosition(x),this.baseMatrix.multiply(c);const m=a.clone();m.applyMatrix4(this.baseMatrix),m.clearGroups(),this.rayTracing=new Cb(m,o),m.dispose(),this.instancedMesh=new xs(a,this.material,this.maxDucks),this.instancedMesh.frustumCulled=!1,this.instancedMesh.count=this.instanceCount,this.mesh.add(this.instancedMesh),this.loaded=!0,this.mesh.visible=this.enabled&&this.instanceCount>0}catch(n){console.error("Failed to load duck model:",n)}}setEnabled(e,t){if(!e){if(this.enabled){for(let i=0;i<this.maxDucks;i++){const s=this.getInactivePosition(i);this.displacement.move(t,this.positions[i],s),this.positions[i].copy(s),this.velocities[i].set(0,0,0)}this.draggedInstanceIndex=null,this.enabled=!1,this.mesh.visible=!1,this.syncPreviousPosition()}return}const n=[new C(0,0,0),new C(.4,0,.4),new C(-.4,0,-.4),new C(.4,0,-.4),new C(-.4,0,.4)];for(let i=0;i<this.maxDucks;i++){const s=this.getInactivePosition(i);i<this.instanceCount?(this.positions[i].y>=5&&this.positions[i].copy(this.position).add(n[i]),this.positions[i].x=xt.clamp(this.positions[i].x,-.7,.7),this.positions[i].y=Math.max(this.positions[i].y,this.floorY(1)),this.positions[i].z=xt.clamp(this.positions[i].z,-.7,.7),this.velocities[i].set(0,0,0),this.displacement.move(t,s,this.positions[i]),this.previousPositions[i].copy(this.positions[i])):(this.displacement.move(t,this.positions[i],s),this.positions[i].copy(s),this.velocities[i].set(0,0,0),this.previousPositions[i].copy(s))}this.instancedMesh&&(this.instancedMesh.count=this.instanceCount),this.mesh.visible=this.loaded&&this.instanceCount>0,this.enabled=!0,this.syncPreviousPosition()}syncPreviousPosition(){for(let e=0;e<this.maxDucks;e++)this.previousPositions[e].copy(this.positions[e])}update(e,t,n){if(this.enabled){!this.mesh.visible&&this.loaded&&this.instanceCount>0&&(this.mesh.visible=!0);for(let i=0;i<this.instanceCount;i++){const s=i===this.draggedInstanceIndex&&t.dragging,o={...t,dragging:s};Go(e,this.positions[i],this.velocities[i],o,this.boundingRadius,this.floorClearance),this.displacement.move(n,this.previousPositions[i],this.positions[i],t.poolWidth,t.poolLength),this.previousPositions[i].copy(this.positions[i])}}}hitTest(e,t){if(!this.enabled||!this.loaded)return null;let n=1e6,i=null;this.draggedInstanceIndex=null;for(let s=0;s<this.instanceCount;s++){const o=e.clone().sub(this.positions[s]),a=t.lengthSq(),c=2*o.dot(t),l=o.lengthSq()-this.boundingRadius*this.boundingRadius,u=c*c-4*a*l;if(u>0){const h=(-c-Math.sqrt(u))/(2*a);h>0&&h<n&&(n=h,i=e.clone().addScaledVector(t,h),this.draggedInstanceIndex=s)}}return i}moveBy(e,t=1,n=1,i=1){if(this.draggedInstanceIndex!==null)Ti(this.positions[this.draggedInstanceIndex],e,t,n,i,this.boundingRadius,this.boundingRadius,this.floorClearance);else for(let s=0;s<this.instanceCount;s++)Ti(this.positions[s],e,t,n,i,this.boundingRadius,this.boundingRadius,this.floorClearance)}prepareRender(e,t=1,n=1,i=1){if(!this.material||!this.instancedMesh)return;this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniforms.meshCenter.value.copy(this.position),this.material.uniformsNeedUpdate=!0,this.instancedMesh&&(this.instancedMesh.count=this.instanceCount);const s=new Te;for(let o=0;o<this.instanceCount;o++)s.makeTranslation(this.positions[o].x,this.positions[o].y,this.positions[o].z).multiply(this.baseMatrix),this.instancedMesh.setMatrixAt(o,s);this.instancedMesh.instanceMatrix.needsUpdate=!0}getInactivePosition(e){return new C(this.positions[e].x,10+e*2,this.positions[e].z)}}var Pb=`varying vec3 vPosition;
varying vec3 vSphereCenter;
varying float vSphereRadius;

void main() {
  vec4 centerWorld = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vSphereCenter = centerWorld.xyz;
  vSphereRadius = length(vec3(instanceMatrix[0][0], instanceMatrix[0][1], instanceMatrix[0][2]));

  vec4 worldPos = instanceMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}`,Db=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

varying vec3 vSphereCenter;
varying float vSphereRadius;

uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

uniform sampler2D water; 
uniform sampler2D causticTex; 

varying vec3 vPosition; 

/**
 * Calculates shading and illumination for the sphere obstacle.
 * Models synthetic ambient occlusion based on proximity to the pool walls and floor.
 */
vec3 getSphereColor(vec3 point) {
  
  vec3 color = vec3(0.5);

  
  vec3 sphereNormal = (point - vSphereCenter) / vSphereRadius;

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec3 targetRefracted = refractedLight;

  
  
  float litFactor = max(0.0, dot(sphereNormal, -targetRefracted));
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  color *= 1.0 - aoStrength / pow((poolWidth + vSphereRadius - abs(point.x)) / vSphereRadius, 3.0);
  
  color *= 1.0 - aoStrength / pow((poolLength + vSphereRadius - abs(point.z)) / vSphereRadius, 3.0);
  
  color *= 1.0 - aoStrength / pow((point.y + poolHeight + vSphereRadius) / vSphereRadius, 3.0);

  
  float diffuse = max(0.0, dot(-targetRefracted, sphereNormal)) * 0.5;

  
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  
  if (point.y < info.r) {
    
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * targetRefracted.xz / targetRefracted.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    
    diffuse *= caustic.r * 4.0;
  }

  color += diffuse;
  return color;
}

void main() {
  
  gl_FragColor = vec4(getSphereColor(vPosition), 1.0);

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (vPosition.y < info.r) {
    gl_FragColor.rgb *= underwaterColor * 1.2;
  }
}`;class Ib{constructor(e){N(this,"name","Sphere");N(this,"position",new C(-.4,-.75,.2));N(this,"velocity",new C);N(this,"interactionRadius",.25);N(this,"instanceCount",1);N(this,"maxSpheres",5);N(this,"positions");N(this,"velocities");N(this,"previousPositions");N(this,"draggedInstanceIndex",null);N(this,"displacement",new Vy(this.interactionRadius));N(this,"mesh");N(this,"enabled",!0);N(this,"material");this.resources=e,this.positions=Array.from({length:this.maxSpheres},(t,n)=>n===0?this.position:this.position.clone()),this.velocities=Array.from({length:this.maxSpheres},(t,n)=>n===0?this.velocity:this.velocity.clone()),this.previousPositions=this.positions.map(t=>t.clone()),this.material=new ot({vertexShader:Pb,fragmentShader:Db,uniforms:{light:{value:e.lightDirection.clone()},sphereCenter:{value:this.position.clone()},sphereRadius:{value:this.interactionRadius},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture}},depthTest:!0,depthWrite:!0}),this.mesh=new xs(new gl(1,32,32),this.material,this.maxSpheres),this.mesh.frustumCulled=!1,this.mesh.count=this.instanceCount}floorY(e){return this.interactionRadius-e}get optics(){return{kind:"sphere",center:this.position,radius:this.interactionRadius,centers:this.positions,radii:Array(this.maxSpheres).fill(this.interactionRadius),count:this.instanceCount}}setEnabled(e,t){if(!e){if(this.enabled){for(let i=0;i<this.maxSpheres;i++){const s=this.getInactivePosition(i);this.displacement.move(t,this.positions[i],s),this.positions[i].copy(s),this.velocities[i].set(0,0,0)}this.draggedInstanceIndex=null,this.enabled=!1,this.mesh.visible=!1,this.syncPreviousPosition()}return}const n=[new C(0,0,0),new C(.4,0,.4),new C(-.4,0,-.4),new C(.4,0,-.4),new C(-.4,0,.4)];for(let i=0;i<this.maxSpheres;i++){const s=this.getInactivePosition(i);i<this.instanceCount?(this.positions[i].y>=5&&this.positions[i].copy(this.position).add(n[i]),this.positions[i].x=xt.clamp(this.positions[i].x,-.7,.7),this.positions[i].y=Math.max(this.positions[i].y,this.floorY(1)),this.positions[i].z=xt.clamp(this.positions[i].z,-.7,.7),this.velocities[i].set(0,0,0),this.displacement.move(t,s,this.positions[i]),this.previousPositions[i].copy(this.positions[i])):(this.displacement.move(t,this.positions[i],s),this.positions[i].copy(s),this.velocities[i].set(0,0,0),this.previousPositions[i].copy(s))}this.mesh.count=this.instanceCount,this.mesh.visible=this.instanceCount>0,this.enabled=!0,this.syncPreviousPosition()}syncPreviousPosition(){for(let e=0;e<this.maxSpheres;e++)this.previousPositions[e].copy(this.positions[e])}update(e,t,n){if(this.enabled)for(let i=0;i<this.instanceCount;i++){const s=i===this.draggedInstanceIndex&&t.dragging,o={...t,dragging:s};Go(e,this.positions[i],this.velocities[i],o,this.interactionRadius,this.interactionRadius),this.displacement.move(n,this.previousPositions[i],this.positions[i],t.poolWidth,t.poolLength),this.previousPositions[i].copy(this.positions[i])}}hitTest(e,t){if(!this.enabled)return null;let n=1e6,i=null;this.draggedInstanceIndex=null;for(let s=0;s<this.instanceCount;s++){const o=e.clone().sub(this.positions[s]),a=t.lengthSq(),c=2*o.dot(t),l=o.lengthSq()-this.interactionRadius*this.interactionRadius,u=c*c-4*a*l;if(u>0){const h=(-c-Math.sqrt(u))/(2*a);h>0&&h<n&&(n=h,i=e.clone().addScaledVector(t,h),this.draggedInstanceIndex=s)}}return i}moveBy(e,t=1,n=1,i=1){if(this.draggedInstanceIndex!==null)Ti(this.positions[this.draggedInstanceIndex],e,t,n,i,this.interactionRadius,this.interactionRadius,this.interactionRadius);else for(let s=0;s<this.instanceCount;s++)Ti(this.positions[s],e,t,n,i,this.interactionRadius,this.interactionRadius,this.interactionRadius)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.sphereCenter.value.copy(this.position),this.material.uniforms.sphereRadius.value=this.interactionRadius,this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0;const s=new Te,o=new C(this.interactionRadius,this.interactionRadius,this.interactionRadius),a=new xn;for(let c=0;c<this.instanceCount;c++)s.compose(this.positions[c],a,o),this.mesh.setMatrixAt(c,s);this.mesh.instanceMatrix.needsUpdate=!0}getInactivePosition(e){return new C(this.positions[e].x,10+e*2,this.positions[e].z)}}var Lb=`varying vec3 vPosition; 
varying vec3 vNormal; 
varying vec3 vTorusKnotCenter;

void main() {
  vec4 centerWorld = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vTorusKnotCenter = centerWorld.xyz;

  vNormal = normal;

  vec4 worldPos = instanceMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}`,Nb=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;

varying vec3 vTorusKnotCenter;

uniform float poolWidth;
uniform float poolLength;
uniform float poolHeight;

uniform sampler2D water; 
uniform sampler2D causticTex; 

uniform int texturePassMode;

varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {
  
  vec3 color = vec3(0.5);

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  
  float litFactor = max(0.0, dot(normalize(vNormal), -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  color *= 1.0 - aoStrength / pow((poolWidth + torusKnotShadowRadius - abs(vPosition.x)) / torusKnotShadowRadius, 3.0);
  
  color *= 1.0 - aoStrength / pow((poolLength + torusKnotShadowRadius - abs(vPosition.z)) / torusKnotShadowRadius, 3.0);
  
  color *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + torusKnotShadowRadius) / torusKnotShadowRadius, 3.0);

  
  float diffuse = max(0.0, dot(-refractedLight, normalize(vNormal))) * 0.5;

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  
  if (texturePassMode == 2 && vPosition.y < info.r) {
    discard;
  }

  
  if (vPosition.y < info.r) {
    
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }

  color += diffuse;

  
  if (vPosition.y < info.r) {
    color *= underwaterColor * 1.2;
  }

  gl_FragColor = vec4(color, 1.0);
}`;class Ub{constructor(e){N(this,"name","TorusKnot");N(this,"boundingRadius",.31);N(this,"floorClearance",.13);N(this,"position",new C(-.4,this.floorClearance-1,.2));N(this,"velocity",new C);N(this,"instanceCount",1);N(this,"maxTorusKnots",5);N(this,"positions");N(this,"velocities");N(this,"previousPositions");N(this,"draggedInstanceIndex",null);N(this,"displacement");N(this,"mesh");N(this,"enabled",!1);N(this,"material");N(this,"raycaster",new dd);this.resources=e,this.positions=Array.from({length:this.maxTorusKnots},(l,u)=>u===0?this.position:this.position.clone()),this.velocities=Array.from({length:this.maxTorusKnots},(l,u)=>u===0?this.velocity:this.velocity.clone()),this.previousPositions=this.positions.map(l=>l.clone()),this.material=new ot({vertexShader:Lb,fragmentShader:Nb,uniforms:{light:{value:e.lightDirection.clone()},torusKnotCenter:{value:this.position.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture},texturePassMode:{value:0}},depthTest:!0,depthWrite:!0});const t=new vl(.17,.045,64,8);t.rotateX(Math.PI/2),t.boundingBox=new bt(new C(-2,-2,-2),new C(2,2,2)),t.boundingSphere=new An(new C(0,0,0),4),this.mesh=new xs(t,this.material,this.maxTorusKnots),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.count=this.instanceCount;const n=[],i=24,s=.17,o=.045,a=2,c=3;for(let l=0;l<i;l++){const u=l/i*Math.PI*2,h=s*(2+Math.cos(c*u))*.5,d=h*Math.cos(a*u),f=h*Math.sin(a*u),g=-s*Math.sin(c*u)*.5;n.push({offset:new C(d,g,f),radius:o*2})}this.displacement=new Cd(n,.15)}floorY(e){return this.floorClearance-e}get optics(){return{kind:"torusknot",center:this.position,centers:this.positions,count:this.instanceCount}}setEnabled(e,t){if(!e){if(this.enabled){const s=this.positions.map(o=>o.clone());for(let o=0;o<this.maxTorusKnots;o++){const a=this.getInactivePosition(o);this.positions[o].copy(a),this.velocities[o].set(0,0,0)}this.displacement.moveBatch(t,s,this.positions,this.maxTorusKnots),this.draggedInstanceIndex=null,this.enabled=!1,this.mesh.visible=!1,this.syncPreviousPosition()}return}const n=[new C(0,0,0),new C(.45,0,.45),new C(-.45,0,-.45),new C(.45,0,-.45),new C(-.45,0,.45)],i=this.positions.map(s=>s.clone());for(let s=0;s<this.maxTorusKnots;s++){const o=this.getInactivePosition(s);s<this.instanceCount?(this.positions[s].y>=5&&this.positions[s].copy(this.position).add(n[s]),this.positions[s].x=xt.clamp(this.positions[s].x,-.7,.7),this.positions[s].y=Math.max(this.positions[s].y,this.floorY(1)),this.positions[s].z=xt.clamp(this.positions[s].z,-.7,.7),this.velocities[s].set(0,0,0),this.previousPositions[s].copy(this.positions[s])):(this.positions[s].copy(o),this.velocities[s].set(0,0,0),this.previousPositions[s].copy(o))}this.displacement.moveBatch(t,i,this.positions,this.maxTorusKnots),this.mesh.count=this.instanceCount,this.mesh.visible=this.instanceCount>0,this.enabled=!0,this.syncPreviousPosition()}syncPreviousPosition(){for(let e=0;e<this.maxTorusKnots;e++)this.previousPositions[e].copy(this.positions[e])}update(e,t,n){if(this.enabled){for(let i=0;i<this.instanceCount;i++){const s=i===this.draggedInstanceIndex&&t.dragging,o={...t,dragging:s};Go(e,this.positions[i],this.velocities[i],o,this.boundingRadius,this.floorClearance)}this.displacement.moveBatch(n,this.previousPositions,this.positions,this.instanceCount,t.poolWidth,t.poolLength);for(let i=0;i<this.instanceCount;i++)this.previousPositions[i].copy(this.positions[i])}}hitTest(e,t){if(!this.enabled)return null;this.mesh.updateMatrixWorld(!0),this.raycaster.set(e,t);const n=this.raycaster.intersectObject(this.mesh);if(n.length>0){for(const i of n)if(i.instanceId!==void 0&&i.instanceId<this.instanceCount)return this.draggedInstanceIndex=i.instanceId,i.point}return null}moveBy(e,t=1,n=1,i=1){if(this.draggedInstanceIndex!==null)Ti(this.positions[this.draggedInstanceIndex],e,t,n,i,this.boundingRadius,this.boundingRadius,this.floorClearance);else for(let s=0;s<this.instanceCount;s++)Ti(this.positions[s],e,t,n,i,this.boundingRadius,this.boundingRadius,this.floorClearance)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.torusKnotCenter.value.copy(this.position),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0;const s=new Te,o=new C(1,1,1),a=new xn;for(let c=0;c<this.instanceCount;c++)s.compose(this.positions[c],a,o),this.mesh.setMatrixAt(c,s);this.mesh.instanceMatrix.needsUpdate=!0}getInactivePosition(e){return new C(this.positions[e].x,10+e*2,this.positions[e].z)}}function Fb(r,e){return new zy(r).register(new Ib(e),!0).register(new Wy(e)).register(new Ub(e)).register(new Rb(e))}var Bb=`varying vec2 coord;

void main() {
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);
}`,Ob=`precision highp float;

const float PI = 3.141592653589793;

uniform sampler2D tInput;

uniform vec2 center;

uniform float radius;

uniform float strength;

uniform float poolWidth;
uniform float poolLength;

varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  /**
   * DROP PROFILE CALCULATION
   *
   * Step 1: Coordinate transformation
   *   NDC center [-1, 1] → UV space [0, 1]
   *   Formula: UV = NDC * 0.5 + 0.5
   *
   * Step 2: Distance calculation
   *   Compute physical distance from pixel to drop center
   *
   * Step 3: Invert and clamp to [0, 1]
   *   drop = max(0, 1 - d)
   *   Result: 1 at center, 0 at/beyond radius edge
   */
  vec2 physicalDiff = (coord - (center * 0.5 + 0.5)) * 2.0 * vec2(poolWidth, poolLength);
  
  
  
  
  
  float physRadius = radius * 2.0 * poolLength;
  float drop = max(0.0, 1.0 - length(physicalDiff) / physRadius);

  /**
 * * SMOOTH COSINE PROFILE
 *    *
 *    * A simple linear falloff would create waves with sharp edges, causing
 *    * high-frequency artifacts. Instead, we use a raised cosine profile:
 *    *
 *    *   f(x) = 0.5 - 0.5 * cos(x * π)
 *    *
 *    * This is the "Hann window" function, which has these properties:
 *    *   - f(0) = 0       (zero at the edge)
 *    *   - f(1) = 1       (maximum at the center)
 *    *   - f'(0) = 0      (zero slope at edge - smooth transition)
 *    *   - f'(1) = 0      (zero slope at center - smooth peak)
 *    *
 *    * The smooth derivatives ensure no discontinuities in the wave shape,
 *    * producing clean, natural-looking circular ripples.
 */
  drop = 0.5 - cos(drop * PI) * 0.5;

  
  
  
  info.r += drop * strength;

  gl_FragColor = info;
}`,zb=`varying vec2 coord;

void main() {
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);
}`,Hb=`precision highp float;

uniform sampler2D tInput;

uniform vec2 delta;

uniform float poolWidth;
uniform float poolLength;

varying vec2 coord;

void main() {
  
  vec4 info = texture2D(tInput, coord);

  
  vec2 dx = vec2(delta.x, 0.0);  
  vec2 dy = vec2(0.0, delta.y);  

  /**
   * DISCRETE LAPLACIAN COMPUTATION IN PHYSICAL COORDINATES
   *
   * The continuous Laplacian ∇²h = ∂²h/∂x² + ∂²h/∂z² measures surface curvature.
   * On a non-uniform grid where cells have physical dimensions (2*poolWidth*delta.x)
   * in X and (2*poolLength*delta.y) in Z, the second derivatives are:
   *
   *   ∂²h/∂x² ≈ (H_E - 2*H_C + H_W) / Δx²
   *   ∂²h/∂z² ≈ (H_N - 2*H_C + H_S) / Δz²
   *
   * By scaling the delta grid spacing by poolWidth and poolLength, we make the
   * wave propagation speed c isotropic in physical space.
   */
  float d2h_dx2 = texture2D(tInput, coord + dx).r + texture2D(tInput, coord - dx).r - 2.0 * info.r;
  float d2h_dz2 = texture2D(tInput, coord + dy).r + texture2D(tInput, coord - dy).r - 2.0 * info.r;

  /**
   * VELOCITY UPDATE (Semi-implicit Euler)
   *
   * From physics: acceleration = c² * ∇²h
   *
   * When poolWidth = poolLength = 1.0, this simplifies exactly to:
   *   info.g += 2.0 * (average - info.r)
   * which matches the original isotropic simulation rate.
   */
  float stabilityScale = min(1.0, min(poolWidth * poolWidth, poolLength * poolLength));
  info.g += 0.5 * stabilityScale * (d2h_dx2 / (poolWidth * poolWidth) + d2h_dz2 / (poolLength * poolLength));

  /**
   * DAMPING (Energy Dissipation)
   *
   * Real water loses energy to friction, viscosity, and air resistance.
   * We model this with exponential decay: v(t+dt) = v(t) * damping
   *
   * damping = 0.995 per frame:
   *   - After 60 frames (1 sec @ 60fps): velocity reduced to 0.995^60 ≈ 74%
   *   - After 300 frames (5 sec): velocity reduced to 0.995^300 ≈ 22%
   *
   * This provides gradual settling without abrupt stopping.
   */
  info.g *= 0.995;

  /**
   * HEIGHT UPDATE (Euler Integration)
   *
   * height += velocity * dt
   *
   * Since dt is absorbed into our coefficients, we simply add velocity.
   */
  info.r += info.g;

  gl_FragColor = info;
}`,kb=`varying vec2 coord;

void main() {
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);
}`,Vb=`precision highp float;

uniform sampler2D tInput;

uniform float poolWidth;
uniform float poolLength;
uniform vec2 delta;

varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  /**
   * TANGENT VECTOR COMPUTATION
   *
   * We compute tangent vectors using finite differences:
   *
   *   T_x ≈ S(x + Δx) - S(x) = (Δx, h(x+Δx) - h(x), 0)
   *   T_z ≈ S(z + Δz) - S(z) = (0, h(z+Δz) - h(z), Δz)
   *
   * These approximate the partial derivative directions on the surface.
   */

  
  
  vec3 dx = vec3(
    delta.x * 2.0 * poolWidth, 
    texture2D(tInput, vec2(coord.x + delta.x, coord.y)).r - info.r, 
    0.0 
  );

  
  
  vec3 dy = vec3(
    0.0, 
    texture2D(tInput, vec2(coord.x, coord.y + delta.y)).r - info.r, 
    delta.y * 2.0 * poolLength 
  );

  /**
 * * CROSS PRODUCT FOR NORMAL
 *    *
 *    * N = T_z × T_x = dy × dx
 *    *
 *    * Cross product formula:
 *    *   (a × b).x = a.y * b.z - a.z * b.y
 *    *   (a × b).y = a.z * b.x - a.x * b.z
 *    *   (a × b).z = a.x * b.y - a.y * b.x
 *    *
 *    * With our vectors:
 *    *   dy = (0, Δh_z, Δz)
 *    *   dx = (Δx, Δh_x, 0)
 *    *
 *    *   N.x = Δh_z * 0 - Δz * Δh_x = -Δz * Δh_x
 *    *   N.y = Δz * Δx - 0 * 0 = Δz * Δx  (positive, pointing up)
 *    *   N.z = 0 * Δh_x - Δh_z * Δx = -Δh_z * Δx
 *    *
 *    * The result points upward (N.y > 0) for a surface viewed from above.
 *    *
 *    * STORAGE OPTIMIZATION:
 *    * We only store N.x and N.z in the BA channels. N.y can be reconstructed:
 *    *   |N| = 1  →  N.y = sqrt(1 - N.x² - N.z²)
 */
  info.ba = normalize(cross(dy, dx)).xz;

  gl_FragColor = info;
}`,Xa=`varying vec2 coord; 

void main() {
  
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);
}`,Gb=`precision highp float;

uniform sampler2D tInput; 
uniform vec3 oldCenter; 
uniform vec3 newCenter; 
uniform float radius; 
uniform float displacementScale; 
uniform float poolWidth;
uniform float poolLength;
varying vec2 coord; 

/**
 * Computes an approximation of the submerged "column volume" of the sphere
 * at the current texture coordinate position.
 *
 * APPROACH:
 * For each (X, Z) position on the water grid, we estimate how much of the
 * vertical column is occupied by the sphere below the water surface (Y ≤ 0).
 *
 * Instead of computing exact sphere-plane intersection (which involves
 * sqrt and is discontinuous at the boundary), we use a smooth exponential
 * falloff that approximates the sphere profile while avoiding sharp edges
 * that would cause high-frequency ripples.
 *
 * MATHEMATICAL MODEL:
 *   t = horizontal distance from sphere center / radius (normalized)
 *   dy = exp(-(1.5*t)^6)  -- Super-Gaussian falloff (flatter than Gaussian near center)
 *
 * This dy represents the "thickness" of the sphere at distance t.
 * A true sphere has dy = sqrt(1 - t²) for t < 1, but the exponential
 * version is smoother at the boundary and avoids sqrt discontinuities.
 *
 * @param center Sphere center position in world coordinates
 * @return Approximate submerged column height (water displacement amount)
 */
float volumeInSphere(vec3 center) {
  
  
  vec3 pointPhys = vec3(
    (coord.x * 2.0 - 1.0) * poolWidth,
    0.0,
    (coord.y * 2.0 - 1.0) * poolLength
  );

  
  vec3 toCenter = pointPhys - center;

  
  float t = length(toCenter) / radius;

  
  
  float dy = exp(-pow(t * 1.5, 6.0));

  
  
  
  float ymin = min(0.0, center.y - dy);
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);

  
  return (ymax - ymin) * 0.1 * displacementScale;
}

void main() {
  vec4 info = texture2D(tInput, coord);

  
  info.r += volumeInSphere(oldCenter);
  
  info.r -= volumeInSphere(newCenter);

  gl_FragColor = info;
}`,Wb=`precision highp float;

uniform sampler2D tInput;

uniform vec3 oldCenter;

uniform vec3 newCenter;

uniform vec3 halfSize;

uniform float poolWidth;
uniform float poolLength;

varying vec2 coord;

/**
 * Computes an approximation of the submerged "column volume" of the box
 * at the current texture coordinate position.
 *
 * SIGNED DISTANCE FUNCTION (SDF) APPROACH:
 *
 * An SDF returns the shortest distance from a point to a surface:
 *   - Negative inside the shape
 *   - Zero on the surface
 *   - Positive outside the shape
 *
 * For an axis-aligned box centered at origin with half-extents h:
 *   d = max(|p| - h, 0) + min(max(|p| - h components), 0)
 *
 * The first term handles points outside (Euclidean distance to nearest face).
 * The second term handles points inside (negative distance to nearest face).
 *
 * @param center Box center position in world coordinates
 * @return Approximate submerged column height (water displacement amount)
 */
float volumeInCube(vec3 center) {
  
  
  vec3 point = vec3(
    (coord.x * 2.0 - 1.0) * poolWidth,
    0.0,
    (coord.y * 2.0 - 1.0) * poolLength
  );

  /**
   * BOX SDF COMPUTATION
   *
   * Vector from box surface to query point:
   *   q = |p - center| - halfSize
   *
   * For each axis:
   *   q.i > 0: point is outside box in this dimension (distance = q.i)
   *   q.i < 0: point is inside box in this dimension (penetration = -q.i)
   *   q.i = 0: point is exactly on the box face
   */
  vec3 distanceToBox = abs(point - center) - halfSize;

  /**
   * SIGNED DISTANCE CALCULATION
   *
   * Case 1: Point outside box (at least one q.i > 0)
   *   Distance = Euclidean distance to nearest corner/edge/face
   *   = length(max(q, 0))
   *
   * Case 2: Point inside box (all q.i < 0)
   *   Distance = negative of smallest penetration (closest face)
   *   = min(max(q.x, q.y, q.z), 0)  [returns negative value]
   *
   * Combined formula covers both cases:
   */
  float signedDistance =
    length(max(distanceToBox, 0.0)) + 
    min(max(distanceToBox.x, max(distanceToBox.y, distanceToBox.z)), 0.0); 

  
  float scale = max(max(halfSize.x, halfSize.y), halfSize.z);

  
  float t = max(signedDistance, 0.0) / scale;

  /**
   * SMOOTH FALLOFF PROFILE
   *
   * Like the sphere shader, we use a super-Gaussian falloff to create
   * smooth wave profiles without sharp discontinuities at box edges.
   *
   * exp(-(1.5*t)^6) is nearly 1 inside and on the box surface (t ≈ 0),
   * and drops quickly to 0 as we move away from the box.
   */
  float dy = exp(-pow(t * 1.5, 6.0));

  
  float ymin = min(0.0, center.y - dy);
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);

  
  return (ymax - ymin) * 0.1;
}

void main() {
  vec4 info = texture2D(tInput, coord);

  
  info.r += volumeInCube(oldCenter);

  
  info.r -= volumeInCube(newCenter);

  gl_FragColor = info;
}`,Xb=`precision highp float;

uniform sampler2D tInput;
uniform vec3 oldCenters[120];
uniform vec3 newCenters[120];
uniform float radii[120];
uniform int sphereCount;
uniform float displacementScale;
uniform float poolWidth;
uniform float poolLength;
varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);
  vec3 point = vec3(
    (coord.x * 2.0 - 1.0) * poolWidth,
    0.0,
    (coord.y * 2.0 - 1.0) * poolLength
  );
  float displacement = 0.0;
  for (int i = 0; i < 120; i++) {
    if (i >= sphereCount) break;
    float radius = radii[i];
    vec3 oldDelta = point - oldCenters[i];
    vec3 newDelta = point - newCenters[i];
    float oldDy = exp(-pow(length(oldDelta) / radius * 1.5, 6.0));
    float newDy = exp(-pow(length(newDelta) / radius * 1.5, 6.0));
    float oldMin = min(0.0, oldCenters[i].y - oldDy);
    float oldMax = min(max(0.0, oldCenters[i].y + oldDy), oldMin + 2.0 * oldDy);
    float newMin = min(0.0, newCenters[i].y - newDy);
    float newMax = min(max(0.0, newCenters[i].y + newDy), newMin + 2.0 * newDy);
    displacement += (oldMax - oldMin) - (newMax - newMin);
  }
  gl_FragColor = vec4(info.r + displacement * 0.1 * displacementScale, info.gba);
}`;class jb{constructor(e){N(this,"textureA");N(this,"textureB");N(this,"renderer");N(this,"plane");N(this,"camera");N(this,"scene");N(this,"dropMaterial");N(this,"updateMaterial");N(this,"normalMaterial");N(this,"sphereMaterial");N(this,"moveCubeMaterial");N(this,"compoundSphereMaterial");this.renderer=e;const t=256,i={type:this.getSimulationTextureType(),minFilter:ct,magFilter:ct,format:At,stencilBuffer:!1,depthBuffer:!1};this.textureA=new jt(t,t,i),this.textureB=new jt(t,t,i),this.camera=new Wi(-1,1,1,-1,0,1),this.scene=new ul;const s=new Vi(2,2);this.dropMaterial=new ot({vertexShader:Bb,fragmentShader:Ob,uniforms:{tInput:{value:null},center:{value:new De},radius:{value:0},strength:{value:0},poolWidth:{value:1},poolLength:{value:1}}}),this.updateMaterial=new ot({vertexShader:zb,fragmentShader:Hb,uniforms:{tInput:{value:null},delta:{value:new De(1/t,1/t)},poolWidth:{value:1},poolLength:{value:1}}}),this.normalMaterial=new ot({vertexShader:kb,fragmentShader:Vb,uniforms:{tInput:{value:null},delta:{value:new De(1/t,1/t)},poolWidth:{value:1},poolLength:{value:1}}}),this.sphereMaterial=new ot({vertexShader:Xa,fragmentShader:Gb,uniforms:{tInput:{value:null},oldCenter:{value:new C},newCenter:{value:new C},radius:{value:0},displacementScale:{value:1},poolWidth:{value:1},poolLength:{value:1}}}),this.moveCubeMaterial=new ot({vertexShader:Xa,fragmentShader:Wb,uniforms:{tInput:{value:null},oldCenter:{value:new C},newCenter:{value:new C},halfSize:{value:new C},poolWidth:{value:1},poolLength:{value:1}}}),this.compoundSphereMaterial=new ot({vertexShader:Xa,fragmentShader:Xb,uniforms:{tInput:{value:null},oldCenters:{value:Array.from({length:120},()=>new C)},newCenters:{value:Array.from({length:120},()=>new C)},radii:{value:Array(120).fill(0)},sphereCount:{value:0},displacementScale:{value:1},poolWidth:{value:1},poolLength:{value:1}}}),this.plane=new Rt(s,this.dropMaterial),this.scene.add(this.plane),this.clearTextures()}moveSpheres(e,t,n,i=1,s=1,o=1){const a=Math.min(e.length,t.length,n.length,120);this.plane.material=this.compoundSphereMaterial;const c=this.compoundSphereMaterial.uniforms;c.tInput.value=this.textureA.texture,c.sphereCount.value=a,c.displacementScale.value=i,c.poolWidth.value=s,c.poolLength.value=o;for(let l=0;l<a;l++)c.oldCenters.value[l].copy(e[l]),c.newCenters.value[l].copy(t[l]),c.radii.value[l]=n[l];this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}getSimulationTextureType(){return this.renderer.capabilities.isWebGL2&&this.renderer.extensions.has("EXT_color_buffer_float")&&this.renderer.extensions.has("OES_texture_float_linear")?kt:kn}clearTextures(){const e=this.renderer.getRenderTarget(),t=new Ie;this.renderer.getClearColor(t);const n=this.renderer.getClearAlpha();this.renderer.setClearColor(0,0),this.renderer.setRenderTarget(this.textureA),this.renderer.clear(),this.renderer.setRenderTarget(this.textureB),this.renderer.clear(),this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,n)}swapTextures(){const e=this.textureA;this.textureA=this.textureB,this.textureB=e}addDrop(e,t,n,i,s=1,o=1){this.plane.material=this.dropMaterial,this.dropMaterial.uniforms.tInput.value=this.textureA.texture,this.dropMaterial.uniforms.center.value.set(e,t),this.dropMaterial.uniforms.radius.value=n,this.dropMaterial.uniforms.strength.value=i,this.dropMaterial.uniforms.poolWidth.value=s,this.dropMaterial.uniforms.poolLength.value=o,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}moveSphere(e,t,n,i=1,s=1,o=1){this.plane.material=this.sphereMaterial,this.sphereMaterial.uniforms.tInput.value=this.textureA.texture,this.sphereMaterial.uniforms.oldCenter.value.copy(e),this.sphereMaterial.uniforms.newCenter.value.copy(t),this.sphereMaterial.uniforms.radius.value=n,this.sphereMaterial.uniforms.displacementScale.value=i,this.sphereMaterial.uniforms.poolWidth.value=s,this.sphereMaterial.uniforms.poolLength.value=o,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}moveCube(e,t,n,i=1,s=1){this.plane.material=this.moveCubeMaterial,this.moveCubeMaterial.uniforms.tInput.value=this.textureA.texture,this.moveCubeMaterial.uniforms.oldCenter.value.copy(e),this.moveCubeMaterial.uniforms.newCenter.value.copy(t),this.moveCubeMaterial.uniforms.halfSize.value.copy(n),this.moveCubeMaterial.uniforms.poolWidth.value=i,this.moveCubeMaterial.uniforms.poolLength.value=s,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}stepSimulation(e=1,t=1){this.plane.material=this.updateMaterial,this.updateMaterial.uniforms.tInput.value=this.textureA.texture,this.updateMaterial.uniforms.poolWidth.value=e,this.updateMaterial.uniforms.poolLength.value=t,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}updateNormals(e=1,t=1){this.plane.material=this.normalMaterial,this.normalMaterial.uniforms.tInput.value=this.textureA.texture,this.normalMaterial.uniforms.poolWidth.value=e,this.normalMaterial.uniforms.poolLength.value=t,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}}class Kb{constructor(e){N(this,"mode",0);N(this,"previousHit",null);N(this,"dragPlaneNormal",null);N(this,"activePointerId",null);N(this,"touchPointers",new Map);N(this,"pinchDistance",null);N(this,"pinching",!1);N(this,"pendingMove",null);N(this,"moveFrame",0);N(this,"settingLightDirection",!1);N(this,"onPointerDown",e=>{if(!(e.pointerType==="mouse"&&e.button!==0)&&!(e.pointerType!=="touch"&&(this.activePointerId!==null||!e.isPrimary))&&!(e.pointerType==="touch"&&this.touchPointers.size>=2)){if(e.preventDefault(),this.dependencies.canvas.setPointerCapture(e.pointerId),e.pointerType==="touch"){if(this.touchPointers.set(e.pointerId,new De(e.clientX,e.clientY)),this.touchPointers.size===2){this.pinching=!0,this.pinchDistance=this.getPinchDistance(),this.activePointerId=null,this.dependencies.cameraController.stopInertia(),this.stopDrag();return}if(this.pinching||this.touchPointers.size>1)return}else if(this.activePointerId!==null)return;this.activePointerId=e.pointerId,this.startDrag(e.clientX,e.clientY,e.timeStamp)}});N(this,"onPointerMove",e=>{if(e.pointerType==="touch"&&this.touchPointers.has(e.pointerId)&&(this.touchPointers.get(e.pointerId).set(e.clientX,e.clientY),this.pinching&&this.pinchDistance!==null&&this.touchPointers.size>=2)){e.preventDefault();const t=this.getPinchDistance();t>0&&(this.dependencies.cameraController.zoomByScale(this.pinchDistance/t),this.pinchDistance=t,this.dependencies.controls.paused&&this.dependencies.draw());return}if(e.pointerId===this.activePointerId){if(e.preventDefault(),this.mode===2){this.pendingMove={x:e.clientX,y:e.clientY,time:e.timeStamp},this.moveFrame===0&&(this.moveFrame=requestAnimationFrame(()=>{this.moveFrame=0;const t=this.pendingMove;this.pendingMove=null,t&&this.activePointerId!==null&&this.mode===2&&this.duringDrag(t.x,t.y,t.time)}));return}this.duringDrag(e.clientX,e.clientY,e.timeStamp)}});N(this,"onPointerEnd",e=>this.finishPointer(e,!0));N(this,"onLostPointerCapture",e=>this.finishPointer(e,!1));N(this,"onWheel",e=>{e.preventDefault(),this.dependencies.cameraController.zoomByWheel(e.deltaY),this.dependencies.controls.paused&&this.dependencies.draw()});N(this,"onKeyDown",e=>{const{cameraController:t,renderer:n,water:i,controls:s,draw:o}=this.dependencies;e.code==="KeyL"?(this.settingLightDirection=!0,t.getLightDirection(n.lightDir),s.paused?o():n.updateCaustics(i)):e.code==="Space"&&!e.repeat?s.togglePaused():e.code==="KeyG"&&!e.repeat&&s.togglePhysics()});N(this,"onKeyUp",e=>{e.code==="KeyL"&&(this.settingLightDirection=!1)});this.dependencies=e}get draggingObject(){return this.mode===2}connect(){const{canvas:e}=this.dependencies;e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerEnd),e.addEventListener("pointercancel",this.onPointerEnd),e.addEventListener("lostpointercapture",this.onLostPointerCapture),e.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown,{capture:!0}),window.addEventListener("keyup",this.onKeyUp,{capture:!0})}update(e){this.dependencies.cameraController.update(e),this.syncLightDirection()}preparePausedDraw(){this.syncLightDirection()&&this.dependencies.controls.paused&&this.dependencies.renderer.updateCaustics(this.dependencies.water)}cancelDrag(){this.stopDrag()}getRay(e,t){const{canvas:n,camera:i}=this.dependencies,s=n.getBoundingClientRect(),o=new De((e-s.left)/s.width*2-1,-((t-s.top)/s.height)*2+1),a=new dd;return a.setFromCamera(o,i),{origin:a.ray.origin.clone(),direction:a.ray.direction.clone()}}startDrag(e,t,n){var g;const{cameraController:i,camera:s,objects:o,controls:a}=this.dependencies;i.stopInertia();const{origin:c,direction:l}=this.getRay(e,t),u=c.clone().addScaledVector(l,-c.y/l.y),h=((g=o.active)==null?void 0:g.hitTest(c,l))??null,d=a.poolShape==="Box"?1:a.poolWidth,f=a.poolShape==="Box"?1:a.poolLength;h?(this.mode=2,this.previousHit=h,this.dragPlaneNormal=new C(0,0,-1).applyQuaternion(s.quaternion).negate()):Math.abs(u.x)<d&&Math.abs(u.z)<f?(this.mode=1,this.duringDrag(e,t,n)):(this.mode=3,i.beginOrbit(e,t,n))}duringDrag(e,t,n){const{water:i,renderer:s,objects:o,cameraController:a,controls:c,draw:l}=this.dependencies,u=c.poolShape==="Box"?1:c.poolWidth,h=c.poolShape==="Box"?1:c.poolHeight,d=c.poolShape==="Box"?1:c.poolLength;if(this.mode===1){const{origin:f,direction:g}=this.getRay(e,t),x=f.clone().addScaledVector(g,-f.y/g.y);i.addDrop(x.x/u,x.z/d,.03,.01,u,d),c.paused&&(i.updateNormals(u,d),s.updateCaustics(i))}else if(this.mode===2){if(!this.previousHit||!this.dragPlaneNormal||!o.active)return;const{origin:f,direction:g}=this.getRay(e,t),x=-this.dragPlaneNormal.dot(f.clone().sub(this.previousHit))/this.dragPlaneNormal.dot(g),m=f.clone().addScaledVector(g,x);o.active.moveBy(m.clone().sub(this.previousHit),u,h,d),s.setWaterOptics(o.optics),this.previousHit=m}else this.mode===3&&a.orbitTo(e,t,n);c.paused&&l()}stopDrag(){this.mode=0,this.previousHit=null,this.dragPlaneNormal=null,this.pendingMove=null,this.moveFrame!==0&&(cancelAnimationFrame(this.moveFrame),this.moveFrame=0)}finishPointer(e,t){const n=e.pointerId===this.activePointerId;if(e.pointerType==="touch"&&(this.touchPointers.delete(e.pointerId),this.pinching&&(this.touchPointers.size<2&&(this.pinchDistance=null),this.touchPointers.size===0&&(this.pinching=!1))),n){if(this.mode===2&&this.pendingMove){const s=this.pendingMove;this.pendingMove=null,this.duringDrag(s.x,s.y,s.time)}this.mode===3&&this.dependencies.cameraController.endOrbit(e.timeStamp),this.activePointerId=null,this.stopDrag()}const{canvas:i}=this.dependencies;t&&i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId)}getPinchDistance(){const[e,t]=Array.from(this.touchPointers.values());return e.distanceTo(t)}syncLightDirection(){return!this.settingLightDirection&&!this.dependencies.controls.lightFollowsCamera?!1:(this.dependencies.cameraController.getLightDirection(this.dependencies.renderer.lightDir),!0)}}async function qb(){const r="/threejs-water/",e=await new _l().loadAsync(`${r}tiles.jpg`);e.wrapS=yi,e.wrapT=yi,e.minFilter=Fn,e.generateMipmaps=!0;const t=await new zp().loadAsync([`${r}xpos.jpg`,`${r}xneg.jpg`,`${r}ypos.jpg`,`${r}ypos.jpg`,`${r}zpos.jpg`,`${r}zneg.jpg`]);return t.flipY=!0,t.colorSpace=Qn,t.minFilter=lt,t.magFilter=lt,t.generateMipmaps=!1,{tileTexture:e,cubemap:t}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class Hn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Hn.nextNameID=Hn.nextNameID||0,this.$name.id=`lil-gui-name-${++Hn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Yb extends Hn{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function tl(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const $b={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:tl,toHexString:tl},ms={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Zb={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=ms.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return ms.toHexString(i)}},Jb={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=ms.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return ms.toHexString(i)}},Qb=[$b,ms,Zb,Jb];function eS(r){return Qb.find(e=>e.match(r))}class tS extends Hn{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=eS(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=tl(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ja extends Hn{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class nS extends Hn{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,c,l,u,h;const d=5,f=v=>{a=v.clientX,c=l=v.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",x)},g=v=>{if(o){const _=v.clientX-a,y=v.clientY-c;Math.abs(y)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>d&&x()}if(!o){const _=v.clientY-l;h-=_*this._step*this._arrowKeyMultiplier(v),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}l=v.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",x)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,v,_,y,S)=>(p-v)/(_-v)*(S-y)+y,t=p=>{const v=this.$slider.getBoundingClientRect();let _=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(_)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,c=p.touches[0].clientY,o=!0):l(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(o){const v=p.touches[0].clientX-a,_=p.touches[0].clientY-c;Math.abs(v)>Math.abs(_)?l(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let x;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class iS extends Hn{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class rS extends Hn{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var sS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function oS(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Uh=!1;class Cl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!Uh&&a&&(oS(sS),Uh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new iS(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new nS(this,e,t,n,i,s);case"boolean":return new Yb(this,e,t);case"string":return new rS(this,e,t);case"function":return new ja(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new tS(this,e,t,n)}addFolder(e){const t=new Cl({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ja||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ja)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const aS=0;class cS{constructor(e,t){N(this,"paused",!1);N(this,"physicsEnabled",!1);N(this,"densityEnabled",!1);N(this,"density",.9);N(this,"lightFollowsCamera",!1);N(this,"poolShape","Box");N(this,"cornerRadius",.1);N(this,"poolWidth",1);N(this,"poolHeight",1);N(this,"poolLength",1);N(this,"instanceCount",1);N(this,"state",{object:"Sphere",gravity:!1,densityEnabled:!1,density:.9,paused:!1,lightFollowsCamera:!1,poolShape:"Box",cornerRadius:.1,poolWidth:1,poolHeight:1,poolLength:1,instanceCount:1,updateLightDirection:()=>{var e,t;(t=(e=this.callbacks).onUpdateLightDirection)==null||t.call(e)}});N(this,"gravityController");N(this,"densityEnabledController");N(this,"densityController");N(this,"pausedController");N(this,"cornerRadiusController");N(this,"poolWidthController");N(this,"poolHeightController");N(this,"poolLengthController");N(this,"updateLightDirectionController");N(this,"physicsAvailable",!0);this.callbacks=t;const n=new Cl({title:"Settings"});n.close(),n.domElement.style.left="0",n.domElement.style.right="auto";const i=n.addFolder("Scene");i.close(),this.pausedController=i.add(this.state,"paused").name("Paused").onChange(u=>{this.paused=u,t.onPausedChange(u)});const s=n.addFolder("Object");s.close(),s.add(this.state,"object",e).name("Object").onChange(u=>t.onObjectChange(u)),this.gravityController=s.add(this.state,"gravity").name("Toggle Gravity").onChange(u=>{this.physicsEnabled=u}),this.densityEnabledController=s.add(this.state,"densityEnabled").name("Enable Density").onChange(u=>{this.densityEnabled=u,this.updateDensityController()}),this.densityController=s.add(this.state,"density",.2,2,.01).name("Density").onChange(u=>{this.density=u});const o=s.add(this.state,"instanceCount").name("Instance Count").onChange(u=>{var d;const h=Math.max(0,Math.min(5,Math.round(u)));this.state.instanceCount=h,this.instanceCount=h,o.updateDisplay(),(d=t.onInstanceCountChange)==null||d.call(t,h)}),a=o.domElement.querySelector(".lil-widget, .widget");if(a){const u=a.querySelector("input");if(u){u.style.textAlign="center",u.style.width="32px",u.style.flex="none",u.style.padding="0",u.style.margin="0",u.style.borderRadius="0";const h=document.createElement("button");h.textContent="−",h.style.width="20px",h.style.height="20px",h.style.border="none",h.style.background="#444",h.style.color="#fff",h.style.fontSize="12px",h.style.fontWeight="bold",h.style.cursor="pointer",h.style.borderRadius="3px 0 0 3px",h.style.marginRight="1px",h.style.display="flex",h.style.alignItems="center",h.style.justifyContent="center",h.addEventListener("click",f=>{f.preventDefault();const g=Math.max(0,this.state.instanceCount-1);o.setValue(g)});const d=document.createElement("button");d.textContent="+",d.style.width="20px",d.style.height="20px",d.style.border="none",d.style.background="#444",d.style.color="#fff",d.style.fontSize="12px",d.style.fontWeight="bold",d.style.cursor="pointer",d.style.borderRadius="0 3px 3px 0",d.style.marginLeft="1px",d.style.display="flex",d.style.alignItems="center",d.style.justifyContent="center",d.addEventListener("click",f=>{f.preventDefault();const g=Math.min(5,this.state.instanceCount+1);o.setValue(g)}),a.insertBefore(h,u),a.appendChild(d),a.style.display="flex",a.style.alignItems="center",a.style.justifyContent="flex-end"}}const c=n.addFolder("Pool");c.close(),c.add(this.state,"poolShape",["Box","Rounded Box"]).name("Pool Shape").onChange(u=>{var h;this.poolShape=u,this.updatePoolShapeControllers(),(h=t.onPoolShapeChange)==null||h.call(t,u)}),this.cornerRadiusController=c.add(this.state,"cornerRadius",0,1,.01).name("Corner Radius").onChange(u=>{var d;const h=this.clampCornerRadius(u);this.cornerRadius=h,this.state.cornerRadius=h,this.cornerRadiusController.updateDisplay(),(d=t.onCornerRadiusChange)==null||d.call(t,h)}),this.poolWidthController=c.add(this.state,"poolWidth",.5,3,.05).name("Pool Width").onChange(u=>{var h;this.poolWidth=u,this.updateCornerRadiusLimit(),(h=t.onPoolWidthChange)==null||h.call(t,u)}),this.poolHeightController=c.add(this.state,"poolHeight",.3,2,.05).name("Pool Depth").onChange(u=>{var h;this.poolHeight=u,(h=t.onPoolHeightChange)==null||h.call(t,u)}),this.poolLengthController=c.add(this.state,"poolLength",.5,3,.05).name("Pool Length").onChange(u=>{var h;this.poolLength=u,this.updateCornerRadiusLimit(),(h=t.onPoolLengthChange)==null||h.call(t,u)});const l=n.addFolder("Light");l.close(),l.add(this.state,"lightFollowsCamera").name("Follow Camera").onChange(u=>{var h;this.lightFollowsCamera=u,this.updateLightDirectionButton(),(h=t.onLightFollowsCameraChange)==null||h.call(t)}),this.updateLightDirectionController=l.add(this.state,"updateLightDirection").name("Update Light Direction"),this.updateCornerRadiusLimit(),this.updateDensityController(),this.updatePoolShapeControllers(),this.updateLightDirectionButton()}togglePaused(){this.paused=!this.paused,this.state.paused=this.paused,this.pausedController.updateDisplay(),this.callbacks.onPausedChange(this.paused)}togglePhysics(){this.physicsEnabled=!this.physicsEnabled,this.state.gravity=this.physicsEnabled,this.gravityController.updateDisplay()}setPhysicsAvailable(e){this.physicsAvailable=e,this.gravityController.disable(!e),this.densityEnabledController.disable(!e),this.updateDensityController()}updateDensityController(){this.densityController.show(this.physicsAvailable&&this.densityEnabled)}updateCornerRadiusLimit(){var t,n;const e=this.clampCornerRadius(this.cornerRadius);this.cornerRadiusController.max(this.maxCornerRadius),e!==this.cornerRadius&&(this.cornerRadius=e,this.state.cornerRadius=e,this.cornerRadiusController.updateDisplay(),(n=(t=this.callbacks).onCornerRadiusChange)==null||n.call(t,e))}clampCornerRadius(e){return Math.min(e,this.maxCornerRadius)}get maxCornerRadius(){return Math.max(0,Math.min(this.poolWidth,this.poolLength)-aS)}updatePoolShapeControllers(){this.state.poolShape==="Rounded Box"?(this.cornerRadiusController.show(),this.poolWidthController.show(),this.poolHeightController.show(),this.poolLengthController.show()):(this.cornerRadiusController.hide(),this.poolWidthController.hide(),this.poolHeightController.hide(),this.poolLengthController.hide())}updateLightDirectionButton(){this.updateLightDirectionController.disable(this.lightFollowsCamera)}}class lS{constructor(){N(this,"gravity",new C(0,-4,0));N(this,"cameraController",new r_);N(this,"scene",new ul);N(this,"camera",new Jt(45,1,.01,100));N(this,"webglRenderer");N(this,"renderer");N(this,"water");N(this,"objects");N(this,"controls");N(this,"interaction");N(this,"previousTime",performance.now());N(this,"animate",e=>{this.controls.paused||(this.update((e-this.previousTime)/1e3),this.draw()),this.previousTime=e,requestAnimationFrame(this.animate)});N(this,"draw",()=>{var i;this.interaction.preparePausedDraw(),this.cameraController.apply(this.camera);const e=this.controls.poolShape==="Box"?1:this.controls.poolWidth,t=this.controls.poolShape==="Box"?1:this.controls.poolHeight,n=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.objects.prepareRender(this.water,e,t,n),this.renderer.updateObjectTextures(this.scene,this.camera,((i=this.objects.active)==null?void 0:i.mesh)??null),this.renderer.updateCaustics(this.water),this.renderer.renderPool(this.water),this.renderer.renderWater(this.water,this.camera),this.webglRenderer.render(this.scene,this.camera)});N(this,"resize",()=>{const e=document.getElementById("help"),n=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-e.clientWidth-20,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.webglRenderer.setSize(n,i),this.renderer.setSize(n,i),this.draw()});N(this,"selectSimulationObject",e=>{const t=this.controls.poolShape==="Box"?1:this.controls.poolWidth,n=this.controls.poolShape==="Box"?1:this.controls.poolHeight,i=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.objects.select(e,this.water,this.controls.instanceCount,t,n,i),this.renderer.setWaterOptics(this.objects.optics),this.interaction.cancelDrag(),this.controls.setPhysicsAvailable(e!==So),this.water.updateNormals(t,i),this.renderer.updateCaustics(this.water),this.draw()})}async init(){const e=document.getElementById("app"),t=document.getElementById("loading");this.webglRenderer=new t_({antialias:!0}),this.webglRenderer.setPixelRatio(window.devicePixelRatio),this.webglRenderer.setClearColor(0),e.appendChild(this.webglRenderer.domElement);const{tileTexture:n,cubemap:i}=await qb();this.water=new jb(this.webglRenderer),this.renderer=new By(this.webglRenderer,n,i),this.scene.add(this.renderer.getPoolMesh(),this.renderer.getWaterMesh(),this.renderer.getWaterMeshBack()),this.renderer.markWaterOpticsHidden(),this.objects=Fb(this.scene,this.renderer.objectRenderResources),this.renderer.setWaterOptics(this.objects.optics),this.controls=new cS(this.objects.options,{onObjectChange:this.selectSimulationObject,onInstanceCountChange:a=>{this.objects.active&&(this.objects.active.instanceCount=a,this.objects.active.setEnabled(!0,this.water),this.renderer.setWaterOptics(this.objects.optics),this.water.updateNormals(this.controls.poolShape==="Box"?1:this.controls.poolWidth,this.controls.poolShape==="Box"?1:this.controls.poolLength),this.renderer.updateCaustics(this.water),this.controls.paused&&this.draw())},onPausedChange:a=>{a&&this.draw()},onLightFollowsCameraChange:()=>{this.controls.paused&&this.draw()},onUpdateLightDirection:()=>{this.cameraController.getLightDirection(this.renderer.lightDir),this.controls.paused?this.draw():this.renderer.updateCaustics(this.water)},onPoolShapeChange:a=>{const c=a==="Box"?1:this.controls.poolWidth,l=a==="Box"?1:this.controls.poolHeight,u=a==="Box"?1:this.controls.poolLength;if(this.renderer.setPoolShape(a,this.controls.cornerRadius,c,l,u),this.objects.active){const h=this.objects.active.floorY(l);this.objects.active.position.y<h&&(this.objects.active.position.y=h,this.objects.active.velocity.y=0),this.objects.active.moveBy(new C(0,0,0),c,l,u),this.objects.active.syncPreviousPosition()}this.controls.paused&&this.draw()},onCornerRadiusChange:a=>{this.renderer.setPoolShape(this.controls.poolShape,a,this.controls.poolWidth,this.controls.poolHeight,this.controls.poolLength),this.controls.paused&&this.draw()},onPoolWidthChange:a=>{const c=this.controls.poolShape==="Box"?1:this.controls.poolHeight,l=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,a,c,l),this.objects.active&&(this.objects.active.moveBy(new C(0,0,0),a,c,l),this.objects.active.syncPreviousPosition()),this.controls.paused&&this.draw()},onPoolHeightChange:a=>{const c=this.controls.poolShape==="Box"?1:this.controls.poolWidth,l=this.controls.poolShape==="Box"?1:this.controls.poolLength;if(this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,c,a,l),this.objects.active){const u=this.objects.active.floorY(a);this.objects.active.position.y<u&&(this.objects.active.position.y=u,this.objects.active.velocity.y=0),this.objects.active.moveBy(new C(0,0,0),c,a,l),this.objects.active.syncPreviousPosition()}this.controls.paused&&this.draw()},onPoolLengthChange:a=>{const c=this.controls.poolShape==="Box"?1:this.controls.poolWidth,l=this.controls.poolShape==="Box"?1:this.controls.poolHeight;this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,c,l,a),this.objects.active&&(this.objects.active.moveBy(new C(0,0,0),c,l,a),this.objects.active.syncPreviousPosition()),this.controls.paused&&this.draw()}}),this.interaction=new Kb({canvas:this.webglRenderer.domElement,camera:this.camera,cameraController:this.cameraController,water:this.water,renderer:this.renderer,objects:this.objects,controls:this.controls,draw:this.draw}),this.interaction.connect(),this.seedWater(),t.innerHTML="";const s=document.getElementById("help"),o=document.getElementById("help-toggle");o.addEventListener("click",()=>{s.classList.toggle("collapsed"),o.textContent=s.classList.contains("collapsed")?"menu":"chevron_right"}),window.addEventListener("pointerdown",a=>{if(window.matchMedia("(max-width: 600px)").matches&&!s.classList.contains("collapsed")){const l=a.target;!s.contains(l)&&!o.contains(l)&&(s.classList.add("collapsed"),o.textContent="menu")}}),this.resize(),window.addEventListener("resize",this.resize),this.previousTime=performance.now(),requestAnimationFrame(this.animate)}seedWater(){const e=this.controls.poolShape==="Box"?1:this.controls.poolWidth,t=this.controls.poolShape==="Box"?1:this.controls.poolLength;for(let n=0;n<20;n++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.03,n%2===0?-.01:.01,e,t)}update(e){if(e>1)return;this.interaction.update(e);const t=this.controls.poolShape==="Box"?1:this.controls.poolWidth,n=this.controls.poolShape==="Box"?1:this.controls.poolHeight,i=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.objects.update(e,{dragging:this.interaction.draggingObject,physicsEnabled:this.controls.physicsEnabled,densityEnabled:this.controls.densityEnabled,density:this.controls.density,gravity:this.gravity,poolWidth:t,poolHeight:n,poolLength:i},this.water),this.water.stepSimulation(t,i),this.water.stepSimulation(t,i),this.water.updateNormals(t,i),this.renderer.setWaterOptics(this.objects.optics)}}new lS().init();
