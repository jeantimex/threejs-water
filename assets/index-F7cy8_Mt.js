var Mu=Object.defineProperty;var Tu=(r,e,t)=>e in r?Mu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var U=(r,e,t)=>Tu(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="184",Eu=0,Ya=1,wu=2,Jr=1,Au=2,lr=3,$t=0,Ot=1,Kt=2,an=0,Fi=1,$a=2,Za=3,Ja=4,Ru=5,oi=100,Cu=101,Pu=102,Lu=103,Du=104,Iu=200,Nu=201,Fu=202,Uu=203,co=204,uo=205,Ou=206,Bu=207,zu=208,Hu=209,ku=210,Vu=211,Gu=212,Wu=213,Xu=214,ho=0,fo=1,po=2,Bi=3,mo=4,go=5,vo=6,_o=7,Tc=0,ju=1,Ku=2,bn=0,Ec=1,wc=2,Ac=3,Rc=4,Cc=5,Pc=6,Lc=7,Qa="attached",qu="detached",Dc=300,ui=301,zi=302,ys=303,Ss=304,ps=306,Zn=1e3,vn=1001,os=1002,bt=1003,Ic=1004,cr=1005,ot=1006,Qr=1007,_n=1008,qt=1009,Nc=1010,Fc=1011,pr=1012,la=1013,Mn=1014,Yt=1015,Tn=1016,ca=1017,ua=1018,mr=1020,Uc=35902,Oc=35899,Bc=1021,zc=1022,Ut=1023,On=1026,li=1027,ha=1028,da=1029,hi=1030,fa=1031,pa=1033,es=33776,ts=33777,ns=33778,is=33779,xo=35840,bo=35841,yo=35842,So=35843,Mo=36196,To=37492,Eo=37496,wo=37488,Ao=37489,as=37490,Ro=37491,Co=37808,Po=37809,Lo=37810,Do=37811,Io=37812,No=37813,Fo=37814,Uo=37815,Oo=37816,Bo=37817,zo=37818,Ho=37819,ko=37820,Vo=37821,Go=36492,Wo=36494,Xo=36495,jo=36283,Ko=36284,ls=36285,qo=36286,gr=2300,vr=2301,Ms=2302,el=2303,tl=2400,nl=2401,il=2402,Yu=2500,$u=0,Hc=1,Yo=2,Zu=3200,$o=0,Ju=1,Nn="",Ct="srgb",Zt="srgb-linear",cs="linear",$e="srgb",xi=7680,rl=519,Qu=512,eh=513,th=514,ma=515,nh=516,ih=517,ga=518,rh=519,Zo=35044,sl="300 es",xn=2e3,_r=2001;function sh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function oh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ah(){const r=xr("canvas");return r.style.display="block",r}const ol={};function us(...r){const e="THREE."+r.shift();console.log(e,...r)}function kc(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ye(...r){r=kc(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function we(...r){r=kc(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Jo(...r){const e=r.join(" ");e in ol||(ol[e]=!0,ye(...r))}function lh(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ch={[ho]:fo,[po]:vo,[mo]:_o,[Bi]:go,[fo]:ho,[vo]:po,[_o]:mo,[go]:Bi};class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const hr=Math.PI/180,Hi=180/Math.PI;function ln(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function We(r,e,t){return Math.max(e,Math.min(t,r))}function va(r,e){return(r%e+e)%e}function uh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function hh(r,e,t){return r!==e?(t-r)/(e-r):0}function dr(r,e,t){return(1-t)*r+t*e}function dh(r,e,t,n){return dr(r,e,1-Math.exp(-t*n))}function fh(r,e=1){return e-Math.abs(va(r,e*2)-e)}function ph(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function vh(r,e){return r+Math.random()*(e-r)}function _h(r){return r*(.5-Math.random())}function xh(r){r!==void 0&&(al=r);let e=al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bh(r){return r*hr}function yh(r){return r*Hi}function Sh(r){return(r&r-1)===0&&r!==0}function Mh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Th(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Eh(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*u,a*c);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:hr,RAD2DEG:Hi,generateUUID:ln,clamp:We,euclideanModulo:va,mapLinear:uh,inverseLerp:hh,lerp:dr,damp:dh,pingpong:fh,smoothstep:ph,smootherstep:mh,randInt:gh,randFloat:vh,randFloatSpread:_h,seededRandom:xh,degToRad:bh,radToDeg:yh,isPowerOfTwo:Sh,ceilPowerOfTwo:Mh,floorPowerOfTwo:Th,setQuaternionFromProperEuler:Eh,normalize:Ze,denormalize:sn},Ua=class Ua{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ua.prototype.isVector2=!0;let He=Ua;class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],g=s[o+2],b=s[o+3];if(d!==b||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*b;m<0&&(h=-h,f=-f,g=-g,b=-b,m=-m);let p=1-a;if(m<.9995){const _=Math.acos(m),S=Math.sin(_);p=Math.sin(p*_)/S,a=Math.sin(a*_)/S,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+b*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+b*a;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oa=class Oa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oa.prototype.isVector3=!0;let R=Oa;const Ts=new R,ll=new Bn,Ba=class Ba{constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],_=i[1],S=i[4],M=i[7],A=i[2],E=i[5],C=i[8];return s[0]=o*b+a*_+l*A,s[3]=o*m+a*S+l*E,s[6]=o*p+a*M+l*C,s[1]=c*b+u*_+d*A,s[4]=c*m+u*S+d*E,s[7]=c*p+u*M+d*C,s[2]=h*b+f*_+g*A,s[5]=h*m+f*S+g*E,s[8]=h*p+f*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=d*b,e[1]=(i*c-u*n)*b,e[2]=(a*n-i*o)*b,e[3]=h*b,e[4]=(u*t-i*l)*b,e[5]=(i*s-a*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ba.prototype.isMatrix3=!0;let Ie=Ba;const Es=new Ie,cl=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wh(){const r={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===$e&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===$e&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?cs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zt]:{primaries:e,whitePoint:n,transfer:cs,toXYZ:cl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:cl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),r}const Ge=wh();function Un(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ui(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bi;class Ah{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=xr("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Un(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rh=0;class _a{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ws(i[o].image)):s.push(ws(i[o]))}else s=ws(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ws(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}let Ch=0;const As=new R;class Pt extends di{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=vn,i=vn,s=ot,o=_n,a=Ut,l=qt,c=Pt.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ln(),this.name="",this.source=new _a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(As).x}get height(){return this.source.getSize(As).y}get depth(){return this.source.getSize(As).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Dc;Pt.DEFAULT_ANISOTROPY=1;const za=class za{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(f+1)/2,A=(p+1)/2,E=(u+h)/4,C=(d+b)/4,x=(g+m)/4;return S>M&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=E/n,s=C/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=x/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=C/s,i=x/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-b)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};za.prototype.isVector4=!0;let st=za;class Ph extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Pt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new _a(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lt extends Ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vc extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lh extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fs=class fs{constructor(e,t,n,i,s,o,a,l,c,u,d,h,f,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,d,h,f,g,b,m)}set(e,t,n,i,s,o,a,l,c,u,d,h,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),o=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,b=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-b*c,t[9]=-a*l,t[2]=b-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,b=c*d;t[0]=h+b*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=b+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,b=c*d;t[0]=h-b*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=b-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,b=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+b,t[1]=l*d,t[5]=b*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,b=a*c;t[0]=l*u,t[4]=b-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-b*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,b=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+b,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=b*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dh,e,Ih)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Vn.crossVectors(n,Xt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Vn.crossVectors(n,Xt)),Vn.normalize(),Mr.crossVectors(Xt,Vn),i[0]=Vn.x,i[4]=Mr.x,i[8]=Xt.x,i[1]=Vn.y,i[5]=Mr.y,i[9]=Xt.y,i[2]=Vn.z,i[6]=Mr.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],_=n[3],S=n[7],M=n[11],A=n[15],E=i[0],C=i[4],x=i[8],w=i[12],F=i[1],P=i[5],z=i[9],X=i[13],Y=i[2],N=i[6],G=i[10],B=i[14],Q=i[3],ee=i[7],ue=i[11],xe=i[15];return s[0]=o*E+a*F+l*Y+c*Q,s[4]=o*C+a*P+l*N+c*ee,s[8]=o*x+a*z+l*G+c*ue,s[12]=o*w+a*X+l*B+c*xe,s[1]=u*E+d*F+h*Y+f*Q,s[5]=u*C+d*P+h*N+f*ee,s[9]=u*x+d*z+h*G+f*ue,s[13]=u*w+d*X+h*B+f*xe,s[2]=g*E+b*F+m*Y+p*Q,s[6]=g*C+b*P+m*N+p*ee,s[10]=g*x+b*z+m*G+p*ue,s[14]=g*w+b*X+m*B+p*xe,s[3]=_*E+S*F+M*Y+A*Q,s[7]=_*C+S*P+M*N+A*ee,s[11]=_*x+S*z+M*G+A*ue,s[15]=_*w+S*X+M*B+A*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15],_=l*f-c*h,S=a*f-c*d,M=a*h-l*d,A=o*f-c*u,E=o*h-l*u,C=o*d-a*u;return t*(b*_-m*S+p*M)-n*(g*_-m*A+p*E)+i*(g*S-b*A+p*C)-s*(g*M-b*E+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],_=t*a-n*o,S=t*l-i*o,M=t*c-s*o,A=n*l-i*a,E=n*c-s*a,C=i*c-s*l,x=u*b-d*g,w=u*m-h*g,F=u*p-f*g,P=d*m-h*b,z=d*p-f*b,X=h*p-f*m,Y=_*X-S*z+M*P+A*F-E*w+C*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/Y;return e[0]=(a*X-l*z+c*P)*N,e[1]=(i*z-n*X-s*P)*N,e[2]=(b*C-m*E+p*A)*N,e[3]=(h*E-d*C-f*A)*N,e[4]=(l*F-o*X-c*w)*N,e[5]=(t*X-i*F+s*w)*N,e[6]=(m*M-g*C-p*S)*N,e[7]=(u*C-h*M+f*S)*N,e[8]=(o*z-a*F+c*x)*N,e[9]=(n*F-t*z-s*x)*N,e[10]=(g*E-b*M+p*_)*N,e[11]=(d*M-u*E-f*_)*N,e[12]=(a*w-o*P-l*x)*N,e[13]=(t*P-n*w+i*x)*N,e[14]=(b*S-g*A-m*_)*N,e[15]=(u*A-d*S+h*_)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,b=o*u,m=o*d,p=a*d,_=l*c,S=l*u,M=l*d,A=n.x,E=n.y,C=n.z;return i[0]=(1-(b+p))*A,i[1]=(f+M)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(h+p))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+S)*C,i[9]=(m-_)*C,i[10]=(1-(h+b))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=yi.set(i[0],i[1],i[2]).length();const a=yi.set(i[4],i[5],i[6]).length(),l=yi.set(i[8],i[9],i[10]).length();s<0&&(o=-o),tn.copy(this);const c=1/o,u=1/a,d=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=xn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let g,b;if(l)g=s/(o-s),b=o*s/(o-s);else if(a===xn)g=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===_r)g=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=xn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,b;if(l)g=1/(o-s),b=o/(o-s);else if(a===xn)g=-2/(o-s),b=-(o+s)/(o-s);else if(a===_r)g=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fs.prototype.isMatrix4=!0;let Le=fs;const yi=new R,tn=new Le,Dh=new R(0,0,0),Ih=new R(1,1,1),Vn=new R,Mr=new R,Xt=new R,hl=new Le,dl=new Bn;class Jn{constructor(e=0,t=0,n=0,i=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nh=0;const fl=new R,Si=new Bn,Rn=new Le,Tr=new R,Zi=new R,Fh=new R,Uh=new Bn,pl=new R(1,0,0),ml=new R(0,1,0),gl=new R(0,0,1),vl={type:"added"},Oh={type:"removed"},Mi={type:"childadded",child:null},Rs={type:"childremoved",child:null};class ft extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new R,t=new Jn,n=new Bn,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ie}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Zi,Tr,this.up):Rn.lookAt(Tr,Zi,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(Rn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(we("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new R(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yn extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bh={type:"move"};class Cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bh)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Ps(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=va(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ps(o,s,e+1/3),this.g=Ps(o,s,e),this.b=Ps(o,s,e-1/3)}return Ge.colorSpaceToWorking(this,i),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ge.workingToColorSpace(Nt.copy(this),e),Math.round(We(Nt.r*255,0,255))*65536+Math.round(We(Nt.g*255,0,255))*256+Math.round(We(Nt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,s=Nt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Ct){Ge.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Er);const n=dr(Gn.h,Er.h,t),i=dr(Gn.s,Er.s,t),s=dr(Gn.l,Er.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ce;Ce.NAMES=Gc;class ba extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nn=new R,Cn=new R,Ls=new R,Pn=new R,Ti=new R,Ei=new R,_l=new R,Ds=new R,Is=new R,Ns=new R,Fs=new st,Us=new st,Os=new st;class on{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){nn.subVectors(i,t),Cn.subVectors(n,t),Ls.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(Cn),l=nn.dot(Ls),c=Cn.dot(Cn),u=Cn.dot(Ls),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Fs.setScalar(0),Us.setScalar(0),Os.setScalar(0),Fs.fromBufferAttribute(e,t),Us.fromBufferAttribute(e,n),Os.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Fs,s.x),o.addScaledVector(Us,s.y),o.addScaledVector(Os,s.z),o}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),Cn.subVectors(e,t),nn.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),nn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ti.subVectors(i,n),Ei.subVectors(s,n),Ds.subVectors(e,n);const l=Ti.dot(Ds),c=Ei.dot(Ds);if(l<=0&&c<=0)return t.copy(n);Is.subVectors(e,i);const u=Ti.dot(Is),d=Ei.dot(Is);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ti,o);Ns.subVectors(e,s);const f=Ti.dot(Ns),g=Ei.dot(Ns);if(g>=0&&f<=g)return t.copy(s);const b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ei,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return _l.subVectors(s,i),a=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(_l,a);const p=1/(m+b+h);return o=b*p,a=h*p,t.copy(n).addScaledVector(Ti,o).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Ar.subVectors(this.max,Ji),wi.subVectors(e.a,Ji),Ai.subVectors(e.b,Ji),Ri.subVectors(e.c,Ji),Wn.subVectors(Ai,wi),Xn.subVectors(Ri,Ai),ei.subVectors(wi,Ri);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ei.z,ei.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ei.z,0,-ei.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ei.y,ei.x,0];return!Bs(t,wi,Ai,Ri,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,wi,Ai,Ri,Ar))?!1:(Rr.crossVectors(Wn,Xn),t=[Rr.x,Rr.y,Rr.z],Bs(t,wi,Ai,Ri,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new R,new R,new R,new R,new R,new R,new R,new R],rn=new R,wr=new cn,wi=new R,Ai=new R,Ri=new R,Wn=new R,Xn=new R,ei=new R,Ji=new R,Ar=new R,Rr=new R,ti=new R;function Bs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ti.fromArray(r,s);const a=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const St=new R,Cr=new He;let zh=0;class Ht extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wc extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xc extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hh=new cn,Qi=new R,zs=new R;class En{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(zs)),this.expandByPoint(Qi.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kh=0;const Qt=new Le,Hs=new ft,Ci=new R,jt=new cn,er=new cn,Rt=new R;class kt extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sh(e)?Xc:Wc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Hs.lookAt(e),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(jt.min,er.min),jt.expandByPoint(Rt),Rt.addVectors(jt.max,er.max),jt.expandByPoint(Rt)):(jt.expandByPoint(er.min),jt.expandByPoint(er.max))}jt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(e,c),Rt.add(Ci)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new R,l[x]=new R;const c=new R,u=new R,d=new R,h=new He,f=new He,g=new He,b=new R,m=new R;function p(x,w,F){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,F),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,F),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[x].add(b),a[w].add(b),a[F].add(b),l[x].add(m),l[w].add(m),l[F].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,w=_.length;x<w;++x){const F=_[x],P=F.start,z=F.count;for(let X=P,Y=P+z;X<Y;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const S=new R,M=new R,A=new R,E=new R;function C(x){A.fromBufferAttribute(i,x),E.copy(A);const w=a[x];S.copy(w),S.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(E,w);const P=M.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,P)}for(let x=0,w=_.length;x<w;++x){const F=_[x],P=F.start,z=F.count;for(let X=P,Y=P+z;X<Y;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?f=l[b]*a.data.stride+a.offset:f=l[b]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Ht(h,u,d)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zo,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new R;class ya{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){us("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){us("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Gh=0;class yn extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Fi,this.side=$t,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=uo,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==$t&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dn=new R,ks=new R,Pr=new R,jn=new R,Vs=new R,Lr=new R,Gs=new R;class ji{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ks.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(ks);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=jn.dot(this.direction),l=-jn.dot(Pr),c=jn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const b=1/u;d*=b,h*=b,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ks).addScaledVector(Pr,h),f}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,s){Vs.subVectors(t,e),Lr.subVectors(n,e),Gs.crossVectors(Vs,Lr);let o=this.direction.dot(Gs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(Lr.crossVectors(jn,Lr));if(l<0)return null;const c=a*this.direction.dot(Vs.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(Gs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ci extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xl=new Le,ni=new ji,Dr=new En,bl=new R,Ir=new R,Nr=new R,Fr=new R,Ws=new R,Ur=new R,yl=new R,Or=new R;class pt extends ft{constructor(e=new kt,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ur.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ws.fromBufferAttribute(d,e),o?Ur.addScaledVector(Ws,u):Ur.addScaledVector(Ws.sub(t),u))}t.add(Ur)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(Dr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Dr,bl)===null||ni.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(xl.copy(s).invert(),ni.copy(e.ray).applyMatrix4(xl),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=h.length;g<b;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,A=S;M<A;M+=3){const E=a.getX(M),C=a.getX(M+1),x=a.getX(M+2);i=Br(this,p,e,n,c,u,d,E,C,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const _=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);i=Br(this,o,e,n,c,u,d,_,S,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=h.length;g<b;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,A=S;M<A;M+=3){const E=M,C=M+1,x=M+2;i=Br(this,p,e,n,c,u,d,E,C,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const _=m,S=m+1,M=m+2;i=Br(this,o,e,n,c,u,d,_,S,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Wh(r,e,t,n,i,s,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===$t,a),l===null)return null;Or.copy(a),Or.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:r}}function Br(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ir),r.getVertexPosition(l,Nr),r.getVertexPosition(c,Fr);const u=Wh(r,e,t,n,Ir,Nr,Fr,yl);if(u){const d=new R;on.getBarycoord(yl,Ir,Nr,Fr,d),i&&(u.uv=on.getInterpolatedAttribute(i,a,l,c,d,new He)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,d,new He)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,d,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new R,materialIndex:0};on.getNormal(Ir,Nr,Fr,h.normal),u.face=h,u.barycoord=d}return u}const tr=new st,Sl=new st,Ml=new st,Xh=new st,Tl=new Le,zr=new R,Xs=new En,El=new Le,js=new ji;class jh extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qa,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingBox.expandByPoint(zr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingSphere.expandByPoint(zr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),e.ray.intersectsSphere(Xs)!==!1&&(El.copy(i).invert(),js.copy(e.ray).applyMatrix4(El),!(this.boundingBox!==null&&js.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qa?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qu?this.bindMatrixInverse.copy(this.bindMatrix).invert():ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sl.fromBufferAttribute(i.attributes.skinIndex,e),Ml.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(tr.copy(t),t.set(0,0,0,0)):(tr.set(...t,1),t.set(0,0,0)),tr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=Ml.getComponent(s);if(o!==0){const a=Sl.getComponent(s);Tl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Xh.copy(tr).applyMatrix4(Tl),o)}}return t.isVector4&&(t.w=tr.w),t.applyMatrix4(this.bindMatrixInverse)}}class jc extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sa extends Pt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=bt,u=bt,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wl=new Le,Kh=new Le;class Ma{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Kh;wl.multiplyMatrices(a,t[s]),wl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ma(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Sa(t,e,e,Ut,Yt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(ye("Skeleton: No bone found with UUID:",s),o=new jc),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Qo extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pi=new Le,Al=new Le,Hr=[],Rl=new cn,qh=new Le,nr=new pt,ir=new En;class Yh extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Rl.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Rl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),ir.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Pi),Al.multiplyMatrices(n,Pi),nr.matrixWorld=Al,nr.raycast(e,Hr);for(let o=0,a=Hr.length;o<a;o++){const l=Hr[o];l.instanceId=s,l.object=this,t.push(l)}Hr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sa(new Float32Array(i*this.count),i,this.count,ha,Yt));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ks=new R,$h=new R,Zh=new Ie;class si{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ks.subVectors(n,t).cross($h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Ks),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zh.getNormalMatrix(e),i=this.coplanarPoint(Ks).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new En,Jh=new He(.5,.5),kr=new R;class Ta{constructor(e=new si,t=new si,n=new si,i=new si,s=new si,o=new si){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],b=s[9],m=s[10],p=s[11],_=s[12],S=s[13],M=s[14],A=s[15];if(i[0].setComponents(c-o,f-u,p-g,A-_).normalize(),i[1].setComponents(c+o,f+u,p+g,A+_).normalize(),i[2].setComponents(c+a,f+d,p+b,A+S).normalize(),i[3].setComponents(c-a,f-d,p-b,A-S).normalize(),n)i[4].setComponents(l,h,m,M).normalize(),i[5].setComponents(c-l,f-h,p-m,A-M).normalize();else if(i[4].setComponents(c-l,f-h,p-m,A-M).normalize(),t===xn)i[5].setComponents(c+l,f+h,p+m,A+M).normalize();else if(t===_r)i[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=Jh.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(kr.x=i.normal.x>0?e.max.x:e.min.x,kr.y=i.normal.y>0?e.max.y:e.min.y,kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kc extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hs=new R,ds=new R,Cl=new Le,rr=new ji,Vr=new En,qs=new R,Pl=new R;class Ea extends ft{constructor(e=new kt,t=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hs.fromBufferAttribute(t,i-1),ds.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hs.distanceTo(ds);e.setAttribute("lineDistance",new Et(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Vr.radius+=s,e.ray.intersectsSphere(Vr)===!1)return;Cl.copy(i).invert(),rr.copy(e.ray).applyMatrix4(Cl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=c){const p=u.getX(b),_=u.getX(b+1),S=Gr(this,e,rr,l,p,_,b);S&&t.push(S)}if(this.isLineLoop){const b=u.getX(g-1),m=u.getX(f),p=Gr(this,e,rr,l,b,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=c){const p=Gr(this,e,rr,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=Gr(this,e,rr,l,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gr(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(hs.fromBufferAttribute(a,i),ds.fromBufferAttribute(a,s),t.distanceSqToSegment(hs,ds,qs,Pl)>n)return;qs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(qs);if(!(c<e.near||c>e.far))return{distance:c,point:Pl.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Ll=new R,Dl=new R;class Qh extends Ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ll.fromBufferAttribute(t,i),Dl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ll.distanceTo(Dl);e.setAttribute("lineDistance",new Et(n,1))}else ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ed extends Ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qc extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Il=new Le,ea=new ji,Wr=new En,Xr=new R;class td extends ft{constructor(e=new kt,t=new qc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=s,e.ray.intersectsSphere(Wr)===!1)return;Il.copy(i).invert(),ea.copy(e.ray).applyMatrix4(Il);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,b=f;g<b;g++){const m=c.getX(g);Xr.fromBufferAttribute(d,m),Nl(Xr,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,b=f;g<b;g++)Xr.fromBufferAttribute(d,g),Nl(Xr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nl(r,e,t,n,i,s,o){const a=ea.distanceSqToPoint(r);if(a<t){const l=new R;ea.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wa extends Pt{constructor(e=[],t=ui,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ki extends Pt{constructor(e,t,n=Mn,i,s,o,a=bt,l=bt,c,u=On,d=1){if(u!==On&&u!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _a(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nd extends ki{constructor(e,t=Mn,n=ui,i,s,o=bt,a=bt,l,c=On){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yc extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fi extends kt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function g(b,m,p,_,S,M,A,E,C,x,w){const F=M/C,P=A/x,z=M/2,X=A/2,Y=E/2,N=C+1,G=x+1;let B=0,Q=0;const ee=new R;for(let ue=0;ue<G;ue++){const xe=ue*P-X;for(let Te=0;Te<N;Te++){const Ke=Te*F-z;ee[b]=Ke*_,ee[m]=xe*S,ee[p]=Y,c.push(ee.x,ee.y,ee.z),ee[b]=0,ee[m]=0,ee[p]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Te/C),d.push(1-ue/x),B+=1}}for(let ue=0;ue<x;ue++)for(let xe=0;xe<C;xe++){const Te=h+xe+N*ue,Ke=h+xe+N*(ue+1),Qe=h+(xe+1)+N*(ue+1),Ue=h+(xe+1)+N*ue;l.push(Te,Ke,Ue),l.push(Ke,Qe,Ue),Q+=6}a.addGroup(f,Q,w),f+=Q,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pi extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],b=[],m=[];for(let p=0;p<u;p++){const _=p*h-o;for(let S=0;S<c;S++){const M=S*d-s;g.push(M,-_,0),b.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const S=_+c*p,M=_+c*(p+1),A=_+1+c*(p+1),E=_+1+c*p;f.push(S,M,E),f.push(M,A,E)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(b,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Aa extends kt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new R,h=new R,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const _=[],S=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const E=A/t;d.x=-e*Math.cos(i+E*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(i+E*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),b.push(h.x,h.y,h.z),m.push(E+M,1-S),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const S=u[p][_+1],M=u[p][_],A=u[p+1][_],E=u[p+1][_+1];(p!==0||o>0)&&f.push(S,M,E),(p!==n-1||l<Math.PI)&&f.push(M,A,E)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(b,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ra extends kt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],d=new R,h=new R,f=new R,g=new R,b=new R,m=new R,p=new R;for(let S=0;S<=n;++S){const M=S/n*s*Math.PI*2;_(M,s,o,e,f),_(M+.01,s,o,e,g),m.subVectors(g,f),p.addVectors(g,f),b.crossVectors(m,p),p.crossVectors(b,m),b.normalize(),p.normalize();for(let A=0;A<=i;++A){const E=A/i*Math.PI*2,C=-t*Math.cos(E),x=t*Math.sin(E);d.x=f.x+(C*p.x+x*b.x),d.y=f.y+(C*p.y+x*b.y),d.z=f.z+(C*p.z+x*b.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(S/n),u.push(A/i)}}for(let S=1;S<=n;S++)for(let M=1;M<=i;M++){const A=(i+1)*(S-1)+(M-1),E=(i+1)*S+(M-1),C=(i+1)*S+M,x=(i+1)*(S-1)+M;a.push(A,E,x),a.push(E,C,x)}this.setIndex(a),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(u,2));function _(S,M,A,E,C){const x=Math.cos(S),w=Math.sin(S),F=A/M*S,P=Math.cos(F);C.x=E*(2+P)*.5*x,C.y=E*(2+P)*w*.5,C.z=E*Math.sin(F)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Vi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Fl(i))i.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Fl(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function zt(r){const e={};for(let t=0;t<r.length;t++){const n=Vi(r[t]);for(const i in n)e[i]=n[i]}return e}function Fl(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function id(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $c(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const rd={clone:Vi,merge:zt};var sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ct extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ad extends ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ca extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wn extends Ca{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ld extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cd extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function jr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ud(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ul(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Zc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ki{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hd extends Ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nl:s=e,a=2*t-n;break;case il:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nl:o=e,l=2*n-t;break;case il:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-h*m+2*h*b-h*g,_=(1+h)*m+(-1.5-2*h)*b+(-.5+h)*g+1,S=(-1-f)*m+(1.5+f)*b+.5*g,M=f*m-f*b;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+_*o[c+A]+S*o[l+A]+M*o[d+A];return s}}class dd extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class fd extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pd extends Ki{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const b=(n-t)/(i-t),m=1-b;for(let p=0;p!==a;++p)s[p]=o[c+p]*m+o[l+p]*b;return s}const f=a*2,g=e-1;for(let b=0;b!==a;++b){const m=o[c+b],p=o[l+b],_=g*f+b*2,S=h[_],M=h[_+1],A=e*f+b*2,E=d[A],C=d[A+1];let x=(n-t)/(i-t),w,F,P,z,X;for(let Y=0;Y<8;Y++){w=x*x,F=w*x,P=1-x,z=P*P,X=z*P;const G=X*t+3*z*x*S+3*P*w*E+F*i-n;if(Math.abs(G)<1e-10)break;const B=3*z*(S-t)+6*P*x*(E-S)+3*w*(i-E);if(Math.abs(B)<1e-10)break;x=x-G/B,x=Math.max(0,Math.min(1,x))}s[b]=X*m+3*z*x*M+3*P*w*C+F*p}return s}}class un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new pd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Ms:t=this.InterpolantFactoryMethodSmooth;break;case el:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Ms;case this.InterpolantFactoryMethodBezier:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(we("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){we("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){we("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&oh(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){we("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ms,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const b=t[d+g];if(b!==t[h+g]||b!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=vr;class qi extends un{constructor(e,t,n){super(e,t,n)}}qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=gr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Jc extends un{constructor(e,t,n,i){super(e,t,n,i)}}Jc.prototype.ValueTypeName="color";class Gi extends un{constructor(e,t,n,i){super(e,t,n,i)}}Gi.prototype.ValueTypeName="number";class md extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Bn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Wi extends un{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new md(this.times,this.values,this.getValueSize(),e)}}Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends un{constructor(e,t,n){super(e,t,n)}}Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=gr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends un{constructor(e,t,n,i){super(e,t,n,i)}}Xi.prototype.ValueTypeName="vector";class gd{constructor(e="",t=-1,n=[],i=Yu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(_d(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(un.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=ud(l);l=Ul(l,1,u),c=Ul(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Gi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return we("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,b){if(f.length!==0){const m=[],p=[];Zc(f,m,p,g),m.length!==0&&b.push(new d(h,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let b=0;b<h[g].morphTargets.length;b++)f[h[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let _=0;_!==h[g].morphTargets.length;++_){const S=h[g];m.push(S.time),p.push(S.morphTarget===b?1:0)}i.push(new Gi(".morphTargetInfluence["+b+"]",m,p))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(Xi,f+".position",h,"pos",i),n(Wi,f+".quaternion",h,"rot",i),n(Xi,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function vd(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return Jc;case"quaternion":return Wi;case"bool":case"boolean":return qi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function _d(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vd(r.type);if(r.times===void 0){const t=[],n=[];Zc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Ol(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Ol(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Ol(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class xd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bd=new xd;class mi{constructor(e){this.manager=e!==void 0?e:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class yd extends Error{constructor(e,t){super(e),this.response=t}}class Qc extends mi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=In[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){_();function _(){d.read().then(({done:S,value:M})=>{if(S)p.close();else{b+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let E=0,C=u.length;E<C;E++){const x=u[E];x.onProgress&&x.onProgress(A)}p.enqueue(M),_()}},S=>{p.error(S)})}}});return new Response(m)}else throw new yd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Fn.add(`file:${e}`,c);const u=In[e];delete In[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=In[e];if(u===void 0)throw this.manager.itemError(e),c;delete In[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Li=new WeakMap;class eu extends mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Li.get(o);d===void 0&&(d=[],Li.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=xr("img");function l(){u(),t&&t(this);const d=Li.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Li.delete(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),Fn.remove(`image:${e}`);const h=Li.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}Li.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Sd extends mi{constructor(e){super(e)}load(e,t,n,i){const s=new wa;s.colorSpace=Ct;const o=new eu(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Pa extends mi{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,o=new eu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class La extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ys=new Le,Bl=new R,zl=new R;class Da{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zl),t.updateMatrixWorld(),Ys.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ys,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===_r||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kr=new R,qr=new Bn,fn=new R;class tu extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kr,qr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,qr,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Kr,qr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,qr,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new R,Hl=new He,kl=new He;class Ft extends tu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,kl),t.subVectors(kl,Hl)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Md extends Da{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Hi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Td extends La{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Md}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ed extends Da{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}}class wd extends La{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ed}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class gi extends tu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ad extends Da{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rd extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Ad}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $s=new WeakMap;class Cd extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{$s.has(o)===!0?(i&&i($s.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Fn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),$s.set(l,c),Fn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Fn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Di=-90,Ii=1;class Pd extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(Di,Ii,e,t);i.layers=this.layers,this.add(i);const s=new Ft(Di,Ii,e,t);s.layers=this.layers,this.add(s);const o=new Ft(Di,Ii,e,t);o.layers=this.layers,this.add(o);const a=new Ft(Di,Ii,e,t);a.layers=this.layers,this.add(a);const l=new Ft(Di,Ii,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Di,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ld extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ia="\\[\\]\\.:\\/",Dd=new RegExp("["+Ia+"]","g"),Na="[^"+Ia+"]",Id="[^"+Ia.replace("\\.","")+"]",Nd=/((?:WC+[\/:])*)/.source.replace("WC",Na),Fd=/(WCOD+)?/.source.replace("WCOD",Id),Ud=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Na),Od=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Na),Bd=new RegExp("^"+Nd+Fd+Ud+Od+"$"),zd=["material","materials","bones","map"];class Hd{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dd,"")}static parseTrackName(e){const t=Bd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);zd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;we("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=Hd;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Vl=new Le;class nu{constructor(e,t,n=0,i=1/0){this.ray=new ji(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):we("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vl),this}intersectObject(e,t=!0,n=[]){return ta(e,this,n,t),n.sort(Gl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ta(e[i],this,n,t);return n.sort(Gl),n}}function Gl(r,e){return r.distance-e.distance}function ta(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ta(s[o],e,t,!0)}}const Ha=class Ha{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Ha.prototype.isMatrix2=!0;let Wl=Ha;function Xl(r,e,t,n){const i=kd(n);switch(t){case Bc:return r*e;case ha:return r*e/i.components*i.byteLength;case da:return r*e/i.components*i.byteLength;case hi:return r*e*2/i.components*i.byteLength;case fa:return r*e*2/i.components*i.byteLength;case zc:return r*e*3/i.components*i.byteLength;case Ut:return r*e*4/i.components*i.byteLength;case pa:return r*e*4/i.components*i.byteLength;case es:case ts:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ns:case is:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bo:case So:return Math.max(r,16)*Math.max(e,8)/4;case xo:case yo:return Math.max(r,8)*Math.max(e,8)/2;case Mo:case To:case wo:case Ao:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eo:case as:case Ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Do:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Go:case Wo:case Xo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case jo:case Ko:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ls:case qo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kd(r){switch(r){case qt:case Nc:return{byteLength:1,components:1};case pr:case Fc:case Tn:return{byteLength:2,components:1};case ca:case ua:return{byteLength:2,components:4};case Mn:case la:case Yt:return{byteLength:4,components:1};case Uc:case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vd(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],b=d[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,d[h]=b)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const b=d[f];r.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
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
#endif`,Vf=`uniform sampler2D dfgLUT;
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
}`,Gf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,um=`#define NORMAL
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
}`,hm=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,fm=`#define PHONG
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,vm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Gd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:jd,alphatest_fragment:Kd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:$d,batching_pars_vertex:Zd,batching_vertex:Jd,begin_vertex:Qd,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:rf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:af,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:uf,color_pars_vertex:hf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:vf,emissivemap_fragment:_f,emissivemap_pars_fragment:xf,colorspace_fragment:bf,colorspace_pars_fragment:yf,envmap_fragment:Sf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:Tf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Uf,envmap_vertex:wf,fog_vertex:Af,fog_pars_vertex:Rf,fog_fragment:Cf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:If,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:Hf,lights_physical_fragment:kf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Gf,lights_fragment_maps:Wf,lights_fragment_end:Xf,lightprobes_pars_fragment:jf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:$f,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:Qf,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:rp,morphnormal_vertex:sp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:up,normal_pars_vertex:hp,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:vp,opaque_fragment:_p,packing:xp,premultiplied_alpha_fragment:bp,project_vertex:yp,dithering_fragment:Sp,dithering_pars_fragment:Mp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Ip,specularmap_fragment:Np,specularmap_pars_fragment:Fp,tonemapping_fragment:Up,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:Hp,uv_pars_vertex:kp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:jp,backgroundCube_frag:Kp,cube_vert:qp,cube_frag:Yp,depth_vert:$p,depth_frag:Zp,distance_vert:Jp,distance_frag:Qp,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:rm,meshbasic_frag:sm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:um,meshnormal_frag:hm,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:vm,points_vert:_m,points_frag:xm,shadow_vert:bm,shadow_frag:ym,sprite_vert:Sm,sprite_frag:Mm},ce={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},gn={basic:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:zt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:zt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:zt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:zt([ce.common,ce.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:zt([ce.lights,ce.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};gn.physical={uniforms:zt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Yr={r:0,b:0,g:0},Tm=new Le,ru=new Ie;ru.set(-1,0,0,0,1,0,0,0,1);function Em(r,e,t,n,i,s){const o=new Ce(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){const M=_.backgroundBlurriness>0;S=e.get(S,M)}return S}function g(_){let S=!1;const M=f(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(_,S){const M=f(S);M&&(M.isCubeTexture||M.mapping===ps)?(c===void 0&&(c=new pt(new fi(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Vi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ru),c.material.toneMapped=Ge.getTransfer(M.colorSpace)!==$e,(u!==M||d!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pt(new pi(2,2),new ct({name:"BackgroundMaterial",uniforms:Vi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(M.colorSpace)!==$e,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,S){_.getRGB(Yr,$c(r)),t.buffers.color.setClear(Yr.r,Yr.g,Yr.b,S,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:b,dispose:p}}function wm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(P,z,X,Y,N){let G=!1;const B=d(P,Y,X,z);s!==B&&(s=B,c(s.object)),G=f(P,Y,X,N),G&&g(P,Y,X,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(P,z,X,Y),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function d(P,z,X,Y){const N=Y.wireframe===!0;let G=n[z.id];G===void 0&&(G={},n[z.id]=G);const B=P.isInstancedMesh===!0?P.id:0;let Q=G[B];Q===void 0&&(Q={},G[B]=Q);let ee=Q[X.id];ee===void 0&&(ee={},Q[X.id]=ee);let ue=ee[N];return ue===void 0&&(ue=h(l()),ee[N]=ue),ue}function h(P){const z=[],X=[],Y=[];for(let N=0;N<t;N++)z[N]=0,X[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:Y,object:P,attributes:{},index:null}}function f(P,z,X,Y){const N=s.attributes,G=z.attributes;let B=0;const Q=X.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const xe=N[ee];let Te=G[ee];if(Te===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;B++}return s.attributesNum!==B||s.index!==Y}function g(P,z,X,Y){const N={},G=z.attributes;let B=0;const Q=X.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let xe=G[ee];xe===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor));const Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),N[ee]=Te,B++}s.attributes=N,s.attributesNum=B,s.index=Y}function b(){const P=s.newAttributes;for(let z=0,X=P.length;z<X;z++)P[z]=0}function m(P){p(P,0)}function p(P,z){const X=s.newAttributes,Y=s.enabledAttributes,N=s.attributeDivisors;X[P]=1,Y[P]===0&&(r.enableVertexAttribArray(P),Y[P]=1),N[P]!==z&&(r.vertexAttribDivisor(P,z),N[P]=z)}function _(){const P=s.newAttributes,z=s.enabledAttributes;for(let X=0,Y=z.length;X<Y;X++)z[X]!==P[X]&&(r.disableVertexAttribArray(X),z[X]=0)}function S(P,z,X,Y,N,G,B){B===!0?r.vertexAttribIPointer(P,z,X,N,G):r.vertexAttribPointer(P,z,X,Y,N,G)}function M(P,z,X,Y){b();const N=Y.attributes,G=X.getAttributes(),B=z.defaultAttributeValues;for(const Q in G){const ee=G[Q];if(ee.location>=0){let ue=N[Q];if(ue===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ue!==void 0){const xe=ue.normalized,Te=ue.itemSize,Ke=e.get(ue);if(Ke===void 0)continue;const Qe=Ke.buffer,Ue=Ke.type,$=Ke.bytesPerElement,fe=Ue===r.INT||Ue===r.UNSIGNED_INT||ue.gpuType===la;if(ue.isInterleavedBufferAttribute){const re=ue.data,Ae=re.stride,De=ue.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<ee.locationSize;Re++)p(ee.location+Re,re.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<ee.locationSize;Re++)m(ee.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Re=0;Re<ee.locationSize;Re++)S(ee.location+Re,Te/ee.locationSize,Ue,xe,Ae*$,(De+Te/ee.locationSize*Re)*$,fe)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)p(ee.location+re,ue.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<ee.locationSize;re++)m(ee.location+re);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let re=0;re<ee.locationSize;re++)S(ee.location+re,Te/ee.locationSize,Ue,xe,Te*$,Te/ee.locationSize*re*$,fe)}}else if(B!==void 0){const xe=B[Q];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(ee.location,xe);break;case 3:r.vertexAttrib3fv(ee.location,xe);break;case 4:r.vertexAttrib4fv(ee.location,xe);break;default:r.vertexAttrib1fv(ee.location,xe)}}}}_()}function A(){w();for(const P in n){const z=n[P];for(const X in z){const Y=z[X];for(const N in Y){const G=Y[N];for(const B in G)u(G[B].object),delete G[B];delete Y[N]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;const z=n[P.id];for(const X in z){const Y=z[X];for(const N in Y){const G=Y[N];for(const B in G)u(G[B].object),delete G[B];delete Y[N]}}delete n[P.id]}function C(P){for(const z in n){const X=n[z];for(const Y in X){const N=X[Y];if(N[P.id]===void 0)continue;const G=N[P.id];for(const B in G)u(G[B].object),delete G[B];delete N[P.id]}}}function x(P){for(const z in n){const X=n[z],Y=P.isInstancedMesh===!0?P.id:0,N=X[Y];if(N!==void 0){for(const G in N){const B=N[G];for(const Q in B)u(B[Q].object),delete B[Q];delete N[G]}delete X[Y],Object.keys(X).length===0&&delete n[z]}}}function w(){F(),o=!0,s!==i&&(s=i,c(s.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Am(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Rm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Ut&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qt&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Yt&&!x)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:E}}function Cm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new si,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:n,S=_*4;let M=p.clippingState||null;l.value=M,M=u(g,h,S,f);for(let A=0;A!==S;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const p=f+b*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==b;++S,M+=4)o.copy(d[S]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const $n=4,jl=[.125,.215,.35,.446,.526,.582],ai=20,Pm=256,sr=new gi,Kl=new Ce;let Zs=null,Js=0,Qs=0,eo=!1;const Lm=new R;class ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Lm}=s;Zs=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs,Js,Qs),this._renderer.xr.enabled=eo,e.scissorTest=!1,Ni(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ot,minFilter:ot,generateMipmaps:!1,type:Tn,format:Ut,colorSpace:Zt,depthBuffer:!1},i=Yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dm(s)),this._blurMaterial=Nm(s,e,t),this._ggxMaterial=Im(s,e,t)}return i}_compileMaterial(e){const t=new pt(new kt,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,n,i,s){const l=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Kl),d.toneMapping=bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new fi,new ci({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(Kl),p=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const A=this._cubeSize;Ni(i,M*A,S>2?A:0,A,A),d.setRenderTarget(i),p&&d.render(b,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ui||e.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ni(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-$n?n-g+$n:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ni(s,m,p,3*b,2*b),i.setRenderTarget(s),i.render(a,sr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ni(e,m,p,3*b,2*b),i.setRenderTarget(e),i.render(a,sr)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ai-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):ai;m>ai&&ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let _=0;for(let C=0;C<ai;++C){const x=C/b,w=Math.exp(-x*x/2);p.push(w),C===0?_+=w:C<m&&(_+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const M=this._sizeLods[i],A=3*M*(i>S-$n?i-S+$n:0),E=4*(this._cubeSize-M);Ni(t,A,E,3*M,2*M),l.setRenderTarget(t),l.render(d,sr)}}function Dm(r){const e=[],t=[],n=[];let i=r;const s=r-$n+1+jl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-$n?l=jl[o-r+$n-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,b=3,m=2,p=1,_=new Float32Array(b*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,x=E>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];_.set(w,b*g*E),S.set(h,m*g*E);const F=[E,E,E,E,E,E];M.set(F,p*g*E)}const A=new kt;A.setAttribute("position",new Ht(_,b)),A.setAttribute("uv",new Ht(S,m)),A.setAttribute("faceIndex",new Ht(M,p)),n.push(new pt(A,null)),i>$n&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yl(r,e,t){const n=new Lt(r,e,t);return n.texture.mapping=ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Im(r,e,t){return new ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ms(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Nm(r,e,t){const n=new Float32Array(ai),i=new R(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ms(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function $l(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Zl(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function ms(){return`

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
	`}class su extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fi(5,5,5),s=new ct({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:an});s.uniforms.tEquirect.value=t;const o=new pt(i,s),a=t.minFilter;return t.minFilter===_n&&(t.minFilter=ot),new Pd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function Fm(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===ys||f===Ss)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const b=new su(g.height);return b.fromEquirectangularTexture(r,h),e.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===ys||f===Ss,b=f===ui||f===zi;if(g||b){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new ql(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const _=h.image;return g&&_&&_.height>0||b&&_&&l(_)?(n===null&&(n=new ql(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===ys?h.mapping=ui:f===Ss&&(h.mapping=zi),h}function l(h){let f=0;const g=6;for(let b=0;b<g;b++)h[b]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Um(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Jo("WebGLRenderer: "+n+" extension not supported."),i}}}function Om(r,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let b=0;if(g===void 0)return;if(f!==null){const _=f.array;b=f.version;for(let S=0,M=_.length;S<M;S+=3){const A=_[S+0],E=_[S+1],C=_[S+2];h.push(A,E,E,C,C,A)}}else{const _=g.array;b=g.version;for(let S=0,M=_.length/3-1;S<M;S+=3){const A=S+0,E=S+1,C=S+2;h.push(A,E,E,C,C,A)}}const m=new(g.count>=65535?Xc:Wc)(h,1);m.version=b;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Bm(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let b=0;for(let m=0;m<f;m++)b+=h[m];t.update(b,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function zm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:we("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hm(r,e,t){const n=new WeakMap,i=new st;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let F=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",F)};var f=F;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),b===!0&&(M=2),m===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*E*4*d),x=new Vc(C,A,E,d);x.type=Yt,x.needsUpdate=!0;const w=M*4;for(let P=0;P<d;P++){const z=p[P],X=_[P],Y=S[P],N=A*E*4*P;for(let G=0;G<z.count;G++){const B=G*w;g===!0&&(i.fromBufferAttribute(z,G),C[N+B+0]=i.x,C[N+B+1]=i.y,C[N+B+2]=i.z,C[N+B+3]=0),b===!0&&(i.fromBufferAttribute(X,G),C[N+B+4]=i.x,C[N+B+5]=i.y,C[N+B+6]=i.z,C[N+B+7]=0),m===!0&&(i.fromBufferAttribute(Y,G),C[N+B+8]=i.x,C[N+B+9]=i.y,C[N+B+10]=i.z,C[N+B+11]=Y.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new He(A,E)},n.set(a,h),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",b),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function km(r,e,t,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Vm={[Ec]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[Ac]:"CINEON_TONE_MAPPING",[Rc]:"ACES_FILMIC_TONE_MAPPING",[Pc]:"AGX_TONE_MAPPING",[Lc]:"NEUTRAL_TONE_MAPPING",[Cc]:"CUSTOM_TONE_MAPPING"};function Gm(r,e,t,n,i){const s=new Lt(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new ki(e,t):void 0}),o=new Lt(e,t,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),a=new kt;a.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Et([0,2,0,0,2,0],2));const l=new ad({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new pt(a,l),u=new gi(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,b=null,m=[],p=!1;this.setSize=function(_,S){s.setSize(_,S),o.setSize(_,S);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(_,S)}},this.setEffects=function(_){m=_,p=m.length>0&&m[0].isRenderPass===!0;const S=s.width,M=s.height;for(let A=0;A<m.length;A++){const E=m[A];E.setSize&&E.setSize(S,M)}},this.begin=function(_,S){if(f||_.toneMapping===bn&&m.length===0)return!1;if(b=S,S!==null){const M=S.width,A=S.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return p===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=bn,!0},this.hasRenderPass=function(){return p},this.end=function(_,S){_.toneMapping=g,f=!0;let M=s,A=o;for(let E=0;E<m.length;E++){const C=m[E];if(C.enabled!==!1&&(C.render(_,A,M,S),C.needsSwap!==!1)){const x=M;M=A,A=x}}if(d!==_.outputColorSpace||h!==_.toneMapping){d=_.outputColorSpace,h=_.toneMapping,l.defines={},Ge.getTransfer(d)===$e&&(l.defines.SRGB_TRANSFER="");const E=Vm[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(b),_.render(c,u),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const ou=new Pt,na=new ki(1,1),au=new Vc,lu=new Lh,cu=new wa,Jl=[],Ql=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function $i(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Jl[i];if(s===void 0&&(s=new Float32Array(i),Jl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gs(r,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Wm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function qm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;nc.set(n),r.uniformMatrix2fv(this.addr,!1,nc),At(t,n)}}function Ym(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;tc.set(n),r.uniformMatrix3fv(this.addr,!1,tc),At(t,n)}}function $m(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;ec.set(n),r.uniformMatrix4fv(this.addr,!1,ec),At(t,n)}}function Zm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function Qm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function tg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function ig(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function sg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(na.compareFunction=t.isReversedDepthBuffer()?ga:ma,s=na):s=ou,t.setTexture2D(e||s,i)}function og(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lu,i)}function ag(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cu,i)}function lg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||au,i)}function cg(r){switch(r){case 5126:return Wm;case 35664:return Xm;case 35665:return jm;case 35666:return Km;case 35674:return qm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}function ug(r,e){r.uniform1fv(this.addr,e)}function hg(r,e){const t=$i(e,this.size,2);r.uniform2fv(this.addr,t)}function dg(r,e){const t=$i(e,this.size,3);r.uniform3fv(this.addr,t)}function fg(r,e){const t=$i(e,this.size,4);r.uniform4fv(this.addr,t)}function pg(r,e){const t=$i(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mg(r,e){const t=$i(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gg(r,e){const t=$i(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vg(r,e){r.uniform1iv(this.addr,e)}function _g(r,e){r.uniform2iv(this.addr,e)}function xg(r,e){r.uniform3iv(this.addr,e)}function bg(r,e){r.uniform4iv(this.addr,e)}function yg(r,e){r.uniform1uiv(this.addr,e)}function Sg(r,e){r.uniform2uiv(this.addr,e)}function Mg(r,e){r.uniform3uiv(this.addr,e)}function Tg(r,e){r.uniform4uiv(this.addr,e)}function Eg(r,e,t){const n=this.cache,i=e.length,s=gs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=na:o=ou;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function wg(r,e,t){const n=this.cache,i=e.length,s=gs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lu,s[o])}function Ag(r,e,t){const n=this.cache,i=e.length,s=gs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||cu,s[o])}function Rg(r,e,t){const n=this.cache,i=e.length,s=gs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||au,s[o])}function Cg(r){switch(r){case 5126:return ug;case 35664:return hg;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return vg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return bg;case 5125:return yg;case 36294:return Sg;case 36295:return Mg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}class Pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cg(t.type)}}class Lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cg(t.type)}}class Dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function ic(r,e){r.seq.push(e),r.map[e.id]=e}function Ig(r,e,t){const n=r.name,i=n.length;for(to.lastIndex=0;;){const s=to.exec(n),o=to.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ic(t,c===void 0?new Pg(a,r,e):new Lg(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Dg(a),ic(t,d)),t=d}}}class rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Ig(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function rc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ng=37297;let Fg=0;function Ug(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const sc=new Ie;function Og(r){Ge._getMatrix(sc,Ge.workingColorSpace,r);const e=`mat3( ${sc.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case cs:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function oc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Ug(r.getShaderSource(e),a)}else return s}function Bg(r,e){const t=Og(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zg={[Ec]:"Linear",[wc]:"Reinhard",[Ac]:"Cineon",[Rc]:"ACESFilmic",[Pc]:"AgX",[Lc]:"Neutral",[Cc]:"Custom"};function Hg(r,e){const t=zg[e];return t===void 0?(ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new R;function kg(){Ge.getLuminanceCoefficients($r);const r=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Gg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ur(r){return r!==""}function ac(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(r){return r.replace(Xg,Kg)}const jg=new Map;function Kg(r,e){let t=Be[e];if(t===void 0){const n=jg.get(e);if(n!==void 0)t=Be[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ia(t)}const qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(r){return r.replace(qg,Yg)}function Yg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function uc(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const $g={[Jr]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function Zg(r){return $g[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jg={[ui]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE_UV"};function Qg(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Jg[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const e0={[zi]:"ENVMAP_MODE_REFRACTION"};function t0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":e0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const n0={[Tc]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function i0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":n0[r.combine]||"ENVMAP_BLENDING_NONE"}function r0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zg(t),c=Qg(t),u=t0(t),d=i0(t),h=r0(t),f=Vg(t),g=Gg(s),b=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(m=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Be.tonemapping_pars_fragment:"",t.toneMapping!==bn?Hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Bg("linearToOutputTexel",t.outputColorSpace),kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=ia(o),o=ac(o,t),o=lc(o,t),a=ia(a),a=ac(a,t),a=lc(a,t),o=cc(o),a=cc(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=_+m+o,M=_+p+a,A=rc(i,i.VERTEX_SHADER,S),E=rc(i,i.FRAGMENT_SHADER,M);i.attachShader(b,A),i.attachShader(b,E),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function C(P){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(b)||"",X=i.getShaderInfoLog(A)||"",Y=i.getShaderInfoLog(E)||"",N=z.trim(),G=X.trim(),B=Y.trim();let Q=!0,ee=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,A,E);else{const ue=oc(i,A,"vertex"),xe=oc(i,E,"fragment");we("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+ue+`
`+xe)}else N!==""?ye("WebGLProgram: Program Info Log:",N):(G===""||B==="")&&(ee=!1);ee&&(P.diagnostics={runnable:Q,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(A),i.deleteShader(E),x=new rs(i,b),w=Wg(i,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(b,Ng)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=E,this}let o0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l0(e),t.set(e,n)),n}}class l0{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}}function c0(r){return r===hi||r===as||r===ls}function u0(r,e,t,n,i,s){const o=new xa,a=new a0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,w,F,P,z,X){const Y=P.fog,N=z.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||G,B),ee=Q&&Q.mapping===ps?Q.image.height:null,ue=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&ye("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const xe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Te=xe!==void 0?xe.length:0;let Ke=0;N.morphAttributes.position!==void 0&&(Ke=1),N.morphAttributes.normal!==void 0&&(Ke=2),N.morphAttributes.color!==void 0&&(Ke=3);let Qe,Ue,$,fe;if(ue){const Ne=gn[ue];Qe=Ne.vertexShader,Ue=Ne.fragmentShader}else Qe=x.vertexShader,Ue=x.fragmentShader,a.update(x),$=a.getVertexShaderID(x),fe=a.getFragmentShaderID(x);const re=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),De=z.isInstancedMesh===!0,Re=z.isBatchedMesh===!0,ht=!!x.map,Xe=!!x.matcap,et=!!Q,ut=!!x.aoMap,Ve=!!x.lightMap,Mt=!!x.bumpMap,dt=!!x.normalMap,Gt=!!x.displacementMap,D=!!x.emissiveMap,Tt=!!x.metalnessMap,je=!!x.roughnessMap,at=x.anisotropy>0,le=x.clearcoat>0,mt=x.dispersion>0,T=x.iridescence>0,v=x.sheen>0,O=x.transmission>0,K=at&&!!x.anisotropyMap,J=le&&!!x.clearcoatMap,te=le&&!!x.clearcoatNormalMap,ae=le&&!!x.clearcoatRoughnessMap,W=T&&!!x.iridescenceMap,q=T&&!!x.iridescenceThicknessMap,pe=v&&!!x.sheenColorMap,ve=v&&!!x.sheenRoughnessMap,se=!!x.specularMap,ne=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Oe=O&&!!x.transmissionMap,Ye=O&&!!x.thicknessMap,L=!!x.gradientMap,ie=!!x.alphaMap,j=x.alphaTest>0,me=!!x.alphaHash,oe=!!x.extensions;let Z=bn;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Z=r.toneMapping);const Se={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:Qe,fragmentShader:Ue,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Re,batchingColor:Re&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:Xe,envMap:et,envMapMode:et&&Q.mapping,envMapCubeUVHeight:ee,aoMap:ut,lightMap:Ve,bumpMap:Mt,normalMap:dt,displacementMap:Gt,emissiveMap:D,normalMapObjectSpace:dt&&x.normalMapType===Ju,normalMapTangentSpace:dt&&x.normalMapType===$o,packedNormalMap:dt&&x.normalMapType===$o&&c0(x.normalMap.format),metalnessMap:Tt,roughnessMap:je,anisotropy:at,anisotropyMap:K,clearcoat:le,clearcoatMap:J,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,dispersion:mt,iridescence:T,iridescenceMap:W,iridescenceThicknessMap:q,sheen:v,sheenColorMap:pe,sheenRoughnessMap:ve,specularMap:se,specularColorMap:ne,specularIntensityMap:Pe,transmission:O,transmissionMap:Oe,thicknessMap:Ye,gradientMap:L,opaque:x.transparent===!1&&x.blending===Fi&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:j,alphaHash:me,combine:x.combine,mapUv:ht&&g(x.map.channel),aoMapUv:ut&&g(x.aoMap.channel),lightMapUv:Ve&&g(x.lightMap.channel),bumpMapUv:Mt&&g(x.bumpMap.channel),normalMapUv:dt&&g(x.normalMap.channel),displacementMapUv:Gt&&g(x.displacementMap.channel),emissiveMapUv:D&&g(x.emissiveMap.channel),metalnessMapUv:Tt&&g(x.metalnessMap.channel),roughnessMapUv:je&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:J&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:se&&g(x.specularMap.channel),specularColorMapUv:ne&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:Oe&&g(x.transmissionMap.channel),thicknessMapUv:Ye&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(dt||at),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(ht||ie),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ke,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Z,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===$e,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===$e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kt,flipSided:x.side===Ot,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)w.push(F),w.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(p(w,x),_(w,x),w.push(r.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function S(x){const w=f[x.type];let F;if(w){const P=gn[w];F=rd.clone(P.uniforms)}else F=x.uniforms;return F}function M(x,w){let F=u.get(w);return F!==void 0?++F.usedTimes:(F=new s0(r,w,x,i),c.push(F),u.set(w,F)),F}function A(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function C(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:C}}function h0(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function d0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function hc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,b,m,p){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:p},r[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=g,_.materialVariant=o(h),_.groupOrder=b,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function l(h,f,g,b,m,p){const _=a(h,f,g,b,m,p);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function c(h,f,g,b,m,p){const _=a(h,f,g,b,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function u(h,f){t.length>1&&t.sort(h||d0),n.length>1&&n.sort(f||hc),i.length>1&&i.sort(f||hc)}function d(){for(let h=e,f=r.length;h<f;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function f0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new dc,r.set(n,[o])):i>=s.length?(o=new dc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function p0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ce};break;case"SpotLight":t={position:new R,direction:new R,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function m0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let g0=0;function v0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _0(r){const e=new p0,t=m0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,s=new Le,o=new Le;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,_=0,S=0,M=0,A=0,E=0,C=0;c.sort(v0);for(let w=0,F=c.length;w<F;w++){const P=c[w],z=P.color,X=P.intensity,Y=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*X,d+=z.g*X,h+=z.b*X;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],X);C++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,Q=t.get(P);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(X),G.distance=Y,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[b]=G;const B=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,B.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[b]=B.matrix,P.castShadow){const Q=t.get(P);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.spotShadow[b]=Q,n.spotShadowMap[b]=N,M++}b++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(z).multiplyScalar(X),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const B=P.shadow,Q=t.get(P);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,Q.shadowCameraNear=B.camera.near,Q.shadowCameraFar=B.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(X),G.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==b||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==_||x.numPointShadows!==S||x.numSpotShadows!==M||x.numSpotMaps!==A||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,x.directionalLength=f,x.pointLength=g,x.spotLength=b,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=_,x.numPointShadows=S,x.numSpotShadows=M,x.numSpotMaps=A,x.numLightProbes=C,n.version=g0++)}function l(c,u){let d=0,h=0,f=0,g=0,b=0;const m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const S=c[p];if(S.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(S.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const M=n.hemi[b];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:n}}function fc(r){const e=new _0(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function x0(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new fc(r),e.set(i,[a])):s>=o.length?(a=new fc(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
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
}`,S0=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],M0=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],pc=new Le,or=new R,no=new R;function T0(r,e,t){let n=new Ta;const i=new He,s=new He,o=new st,a=new ld,l=new cd,c={},u=t.maxTextureSize,d={[$t]:Ot,[Ot]:$t,[Kt]:Kt},h=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:b0,fragmentShader:y0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new pt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let p=this.type;this.render=function(E,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Au&&(ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jr);const w=r.getRenderTarget(),F=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),z=r.state;z.setBlending(an),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=p!==this.type;X&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(N=>N.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,N=E.length;Y<N;Y++){const G=E[Y],B=G.shadow;if(B===void 0){ye("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Q=B.getFrameExtents();i.multiply(Q),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,B.mapSize.y=s.y));const ee=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ee,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===lr){if(G.isPointLight){ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Lt(i.x,i.y,{format:hi,type:Tn,minFilter:ot,magFilter:ot,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new ki(i.x,i.y,Yt),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=On,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=bt,B.map.depthTexture.magFilter=bt}else G.isPointLight?(B.map=new su(i.x),B.map.depthTexture=new nd(i.x,Mn)):(B.map=new Lt(i.x,i.y),B.map.depthTexture=new ki(i.x,i.y,Mn)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=On,this.type===Jr?(B.map.depthTexture.compareFunction=ee?ga:ma,B.map.depthTexture.minFilter=ot,B.map.depthTexture.magFilter=ot):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=bt,B.map.depthTexture.magFilter=bt);B.camera.updateProjectionMatrix()}const ue=B.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ue;xe++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(B.map),r.clear());const Te=B.getViewport(xe);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),z.viewport(o)}if(G.isPointLight){const Te=B.camera,Ke=B.matrix,Qe=G.distance||Te.far;Qe!==Te.far&&(Te.far=Qe,Te.updateProjectionMatrix()),or.setFromMatrixPosition(G.matrixWorld),Te.position.copy(or),no.copy(Te.position),no.add(S0[xe]),Te.up.copy(M0[xe]),Te.lookAt(no),Te.updateMatrixWorld(),Ke.makeTranslation(-or.x,-or.y,-or.z),pc.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),B._frustum.setFromProjectionMatrix(pc,Te.coordinateSystem,Te.reversedDepth)}else B.updateMatrices(G);n=B.getFrustum(),M(C,x,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===lr&&_(B,x),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,F,P)};function _(E,C){const x=e.update(b);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Lt(i.x,i.y,{format:hi,type:Tn})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,x,h,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,x,f,b,null)}function S(E,C,x,w){let F=null;const P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)F=P;else if(F=x.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=F.uuid,X=C.uuid;let Y=c[z];Y===void 0&&(Y={},c[z]=Y);let N=Y[X];N===void 0&&(N=F.clone(),Y[X]=N,C.addEventListener("dispose",A)),F=N}if(F.visible=C.visible,F.wireframe=C.wireframe,w===lr?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:d[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const z=r.properties.get(F);z.light=x}return F}function M(E,C,x,w,F){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===lr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const X=e.update(E),Y=E.material;if(Array.isArray(Y)){const N=X.groups;for(let G=0,B=N.length;G<B;G++){const Q=N[G],ee=Y[Q.materialIndex];if(ee&&ee.visible){const ue=S(E,ee,w,F);E.onBeforeShadow(r,E,C,x,X,ue,Q),r.renderBufferDirect(x,null,X,ue,E,Q),E.onAfterShadow(r,E,C,x,X,ue,Q)}}}else if(Y.visible){const N=S(E,Y,w,F);E.onBeforeShadow(r,E,C,x,X,N,null),r.renderBufferDirect(x,null,X,N,E,null),E.onAfterShadow(r,E,C,x,X,N,null)}}const z=E.children;for(let X=0,Y=z.length;X<Y;X++)M(z[X],C,x,w,F)}function A(E){E.target.removeEventListener("dispose",A);for(const x in c){const w=c[x],F=E.target.uuid;F in w&&(w[F].dispose(),delete w[F])}}}function E0(r,e){function t(){let L=!1;const ie=new st;let j=null;const me=new st(0,0,0,0);return{setMask:function(oe){j!==oe&&!L&&(r.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){L=oe},setClear:function(oe,Z,Se,Ne,vt){vt===!0&&(oe*=Ne,Z*=Ne,Se*=Ne),ie.set(oe,Z,Se,Ne),me.equals(ie)===!1&&(r.clearColor(oe,Z,Se,Ne),me.copy(ie))},reset:function(){L=!1,j=null,me.set(-1,0,0,0)}}}function n(){let L=!1,ie=!1,j=null,me=null,oe=null;return{setReversed:function(Z){if(ie!==Z){const Se=e.get("EXT_clip_control");Z?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const Ne=oe;oe=null,this.setClear(Ne)}},getReversed:function(){return ie},setTest:function(Z){Z?re(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Z){j!==Z&&!L&&(r.depthMask(Z),j=Z)},setFunc:function(Z){if(ie&&(Z=ch[Z]),me!==Z){switch(Z){case ho:r.depthFunc(r.NEVER);break;case fo:r.depthFunc(r.ALWAYS);break;case po:r.depthFunc(r.LESS);break;case Bi:r.depthFunc(r.LEQUAL);break;case mo:r.depthFunc(r.EQUAL);break;case go:r.depthFunc(r.GEQUAL);break;case vo:r.depthFunc(r.GREATER);break;case _o:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Z}},setLocked:function(Z){L=Z},setClear:function(Z){oe!==Z&&(oe=Z,ie&&(Z=1-Z),r.clearDepth(Z))},reset:function(){L=!1,j=null,me=null,oe=null,ie=!1}}}function i(){let L=!1,ie=null,j=null,me=null,oe=null,Z=null,Se=null,Ne=null,vt=null;return{setTest:function(tt){L||(tt?re(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(tt){ie!==tt&&!L&&(r.stencilMask(tt),ie=tt)},setFunc:function(tt,An,hn){(j!==tt||me!==An||oe!==hn)&&(r.stencilFunc(tt,An,hn),j=tt,me=An,oe=hn)},setOp:function(tt,An,hn){(Z!==tt||Se!==An||Ne!==hn)&&(r.stencilOp(tt,An,hn),Z=tt,Se=An,Ne=hn)},setLocked:function(tt){L=tt},setClear:function(tt){vt!==tt&&(r.clearStencil(tt),vt=tt)},reset:function(){L=!1,ie=null,j=null,me=null,oe=null,Z=null,Se=null,Ne=null,vt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],b=null,m=!1,p=null,_=null,S=null,M=null,A=null,E=null,C=null,x=new Ce(0,0,0),w=0,F=!1,P=null,z=null,X=null,Y=null,N=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=Q>=2);let ue=null,xe={};const Te=r.getParameter(r.SCISSOR_BOX),Ke=r.getParameter(r.VIEWPORT),Qe=new st().fromArray(Te),Ue=new st().fromArray(Ke);function $(L,ie,j,me){const oe=new Uint8Array(4),Z=r.createTexture();r.bindTexture(L,Z),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<j;Se++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(ie+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return Z}const fe={};fe[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(Bi),Mt(!1),dt(Ya),re(r.CULL_FACE),ut(an);function re(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Ae(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function De(L,ie){return h[L]!==ie?(r.bindFramebuffer(L,ie),h[L]=ie,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ie),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(L,ie){let j=g,me=!1;if(L){j=f.get(ie),j===void 0&&(j=[],f.set(ie,j));const oe=L.textures;if(j.length!==oe.length||j[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Se=oe.length;Z<Se;Z++)j[Z]=r.COLOR_ATTACHMENT0+Z;j.length=oe.length,me=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,me=!0);me&&r.drawBuffers(j)}function ht(L){return b!==L?(r.useProgram(L),b=L,!0):!1}const Xe={[oi]:r.FUNC_ADD,[Cu]:r.FUNC_SUBTRACT,[Pu]:r.FUNC_REVERSE_SUBTRACT};Xe[Lu]=r.MIN,Xe[Du]=r.MAX;const et={[Iu]:r.ZERO,[Nu]:r.ONE,[Fu]:r.SRC_COLOR,[co]:r.SRC_ALPHA,[ku]:r.SRC_ALPHA_SATURATE,[zu]:r.DST_COLOR,[Ou]:r.DST_ALPHA,[Uu]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[Hu]:r.ONE_MINUS_DST_COLOR,[Bu]:r.ONE_MINUS_DST_ALPHA,[Vu]:r.CONSTANT_COLOR,[Gu]:r.ONE_MINUS_CONSTANT_COLOR,[Wu]:r.CONSTANT_ALPHA,[Xu]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(L,ie,j,me,oe,Z,Se,Ne,vt,tt){if(L===an){m===!0&&(Ae(r.BLEND),m=!1);return}if(m===!1&&(re(r.BLEND),m=!0),L!==Ru){if(L!==p||tt!==F){if((_!==oi||A!==oi)&&(r.blendEquation(r.FUNC_ADD),_=oi,A=oi),tt)switch(L){case Fi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $a:r.blendFunc(r.ONE,r.ONE);break;case Za:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ja:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:we("WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $a:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Za:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ja:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",L);break}S=null,M=null,E=null,C=null,x.set(0,0,0),w=0,p=L,F=tt}return}oe=oe||ie,Z=Z||j,Se=Se||me,(ie!==_||oe!==A)&&(r.blendEquationSeparate(Xe[ie],Xe[oe]),_=ie,A=oe),(j!==S||me!==M||Z!==E||Se!==C)&&(r.blendFuncSeparate(et[j],et[me],et[Z],et[Se]),S=j,M=me,E=Z,C=Se),(Ne.equals(x)===!1||vt!==w)&&(r.blendColor(Ne.r,Ne.g,Ne.b,vt),x.copy(Ne),w=vt),p=L,F=!1}function Ve(L,ie){L.side===Kt?Ae(r.CULL_FACE):re(r.CULL_FACE);let j=L.side===Ot;ie&&(j=!j),Mt(j),L.blending===Fi&&L.transparent===!1?ut(an):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;a.setTest(me),me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(L){P!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),P=L)}function dt(L){L!==Eu?(re(r.CULL_FACE),L!==z&&(L===Ya?r.cullFace(r.BACK):L===wu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),z=L}function Gt(L){L!==X&&(B&&r.lineWidth(L),X=L)}function D(L,ie,j){L?(re(r.POLYGON_OFFSET_FILL),(Y!==ie||N!==j)&&(Y=ie,N=j,o.getReversed()&&(ie=-ie),r.polygonOffset(ie,j))):Ae(r.POLYGON_OFFSET_FILL)}function Tt(L){L?re(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function je(L){L===void 0&&(L=r.TEXTURE0+G-1),ue!==L&&(r.activeTexture(L),ue=L)}function at(L,ie,j){j===void 0&&(ue===null?j=r.TEXTURE0+G-1:j=ue);let me=xe[j];me===void 0&&(me={type:void 0,texture:void 0},xe[j]=me),(me.type!==L||me.texture!==ie)&&(ue!==j&&(r.activeTexture(j),ue=j),r.bindTexture(L,ie||fe[L]),me.type=L,me.texture=ie)}function le(){const L=xe[ue];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function mt(){try{r.compressedTexImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function T(){try{r.compressedTexImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function v(){try{r.texSubImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function O(){try{r.texSubImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function te(){try{r.texStorage2D(...arguments)}catch(L){we("WebGLState:",L)}}function ae(){try{r.texStorage3D(...arguments)}catch(L){we("WebGLState:",L)}}function W(){try{r.texImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function q(){try{r.texImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function pe(L){return d[L]!==void 0?d[L]:r.getParameter(L)}function ve(L,ie){d[L]!==ie&&(r.pixelStorei(L,ie),d[L]=ie)}function se(L){Qe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function ne(L){Ue.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Ue.copy(L))}function Pe(L,ie){let j=c.get(ie);j===void 0&&(j=new WeakMap,c.set(ie,j));let me=j.get(L);me===void 0&&(me=r.getUniformBlockIndex(ie,L.name),j.set(L,me))}function Oe(L,ie){const me=c.get(ie).get(L);l.get(ie)!==me&&(r.uniformBlockBinding(ie,me,L.__bindingPointIndex),l.set(ie,me))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},ue=null,xe={},h={},f=new WeakMap,g=[],b=null,m=!1,p=null,_=null,S=null,M=null,A=null,E=null,C=null,x=new Ce(0,0,0),w=0,F=!1,P=null,z=null,X=null,Y=null,N=null,Qe.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ae,bindFramebuffer:De,drawBuffers:Re,useProgram:ht,setBlending:ut,setMaterial:Ve,setFlipSided:Mt,setCullFace:dt,setLineWidth:Gt,setPolygonOffset:D,setScissorTest:Tt,activeTexture:je,bindTexture:at,unbindTexture:le,compressedTexImage2D:mt,compressedTexImage3D:T,texImage2D:W,texImage3D:q,pixelStorei:ve,getParameter:pe,updateUBOMapping:Pe,uniformBlockBinding:Oe,texStorage2D:te,texStorage3D:ae,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:K,compressedTexSubImage3D:J,scissor:se,viewport:ne,reset:Ye}}function w0(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,v){return g?new OffscreenCanvas(T,v):xr("canvas")}function m(T,v,O){let K=1;const J=mt(T);if((J.width>O||J.height>O)&&(K=O/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const te=Math.floor(K*J.width),ae=Math.floor(K*J.height);h===void 0&&(h=b(te,ae));const W=v?b(te,ae):h;return W.width=te,W.height=ae,W.getContext("2d").drawImage(T,0,0,te,ae),ye("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+ae+")."),W}else return"data"in T&&ye("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function _(T){r.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(T,v,O,K,J,te=!1){if(T!==null){if(r[T]!==void 0)return r[T];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae;K&&(ae=e.get("EXT_texture_norm16"),ae||ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=v;if(v===r.RED&&(O===r.FLOAT&&(W=r.R32F),O===r.HALF_FLOAT&&(W=r.R16F),O===r.UNSIGNED_BYTE&&(W=r.R8),O===r.UNSIGNED_SHORT&&ae&&(W=ae.R16_EXT),O===r.SHORT&&ae&&(W=ae.R16_SNORM_EXT)),v===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.R8UI),O===r.UNSIGNED_SHORT&&(W=r.R16UI),O===r.UNSIGNED_INT&&(W=r.R32UI),O===r.BYTE&&(W=r.R8I),O===r.SHORT&&(W=r.R16I),O===r.INT&&(W=r.R32I)),v===r.RG&&(O===r.FLOAT&&(W=r.RG32F),O===r.HALF_FLOAT&&(W=r.RG16F),O===r.UNSIGNED_BYTE&&(W=r.RG8),O===r.UNSIGNED_SHORT&&ae&&(W=ae.RG16_EXT),O===r.SHORT&&ae&&(W=ae.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RG8UI),O===r.UNSIGNED_SHORT&&(W=r.RG16UI),O===r.UNSIGNED_INT&&(W=r.RG32UI),O===r.BYTE&&(W=r.RG8I),O===r.SHORT&&(W=r.RG16I),O===r.INT&&(W=r.RG32I)),v===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RGB8UI),O===r.UNSIGNED_SHORT&&(W=r.RGB16UI),O===r.UNSIGNED_INT&&(W=r.RGB32UI),O===r.BYTE&&(W=r.RGB8I),O===r.SHORT&&(W=r.RGB16I),O===r.INT&&(W=r.RGB32I)),v===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),O===r.UNSIGNED_INT&&(W=r.RGBA32UI),O===r.BYTE&&(W=r.RGBA8I),O===r.SHORT&&(W=r.RGBA16I),O===r.INT&&(W=r.RGBA32I)),v===r.RGB&&(O===r.UNSIGNED_SHORT&&ae&&(W=ae.RGB16_EXT),O===r.SHORT&&ae&&(W=ae.RGB16_SNORM_EXT),O===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),v===r.RGBA){const q=te?cs:Ge.getTransfer(J);O===r.FLOAT&&(W=r.RGBA32F),O===r.HALF_FLOAT&&(W=r.RGBA16F),O===r.UNSIGNED_BYTE&&(W=q===$e?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT&&ae&&(W=ae.RGBA16_EXT),O===r.SHORT&&ae&&(W=ae.RGBA16_SNORM_EXT),O===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function A(T,v){let O;return T?v===null||v===Mn||v===mr?O=r.DEPTH24_STENCIL8:v===Yt?O=r.DEPTH32F_STENCIL8:v===pr&&(O=r.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mn||v===mr?O=r.DEPTH_COMPONENT24:v===Yt?O=r.DEPTH_COMPONENT32F:v===pr&&(O=r.DEPTH_COMPONENT16),O}function E(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==bt&&T.minFilter!==ot?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){const v=T.target;v.removeEventListener("dispose",C),w(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(T){const v=T.target;v.removeEventListener("dispose",x),P(v)}function w(T){const v=n.get(T);if(v.__webglInit===void 0)return;const O=T.source,K=f.get(O);if(K){const J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(T),Object.keys(K).length===0&&f.delete(O)}n.remove(T)}function F(T){const v=n.get(T);r.deleteTexture(v.__webglTexture);const O=T.source,K=f.get(O);delete K[v.__cacheKey],o.memory.textures--}function P(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let J=0;J<v.__webglFramebuffer[K].length;J++)r.deleteFramebuffer(v.__webglFramebuffer[K][J]);else r.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)r.deleteFramebuffer(v.__webglFramebuffer[K]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let K=0,J=O.length;K<J;K++){const te=n.get(O[K]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(T)}let z=0;function X(){z=0}function Y(){return z}function N(T){z=T}function G(){const T=z;return T>=i.maxTextures&&ye("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),z+=1,T}function B(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Q(T,v){const O=n.get(T);if(T.isVideoTexture&&at(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const K=T.image;if(K===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,T,v);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+v)}function ee(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ae(O,T,v);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+v)}function ue(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ae(O,T,v);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+v)}function xe(T,v){const O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){De(O,T,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+v)}const Te={[Zn]:r.REPEAT,[vn]:r.CLAMP_TO_EDGE,[os]:r.MIRRORED_REPEAT},Ke={[bt]:r.NEAREST,[Ic]:r.NEAREST_MIPMAP_NEAREST,[cr]:r.NEAREST_MIPMAP_LINEAR,[ot]:r.LINEAR,[Qr]:r.LINEAR_MIPMAP_NEAREST,[_n]:r.LINEAR_MIPMAP_LINEAR},Qe={[Qu]:r.NEVER,[rh]:r.ALWAYS,[eh]:r.LESS,[ma]:r.LEQUAL,[th]:r.EQUAL,[ga]:r.GEQUAL,[nh]:r.GREATER,[ih]:r.NOTEQUAL};function Ue(T,v){if(v.type===Yt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ot||v.magFilter===Qr||v.magFilter===cr||v.magFilter===_n||v.minFilter===ot||v.minFilter===Qr||v.minFilter===cr||v.minFilter===_n)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,Te[v.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,Te[v.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,Te[v.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,Ke[v.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,Ke[v.minFilter]),v.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Qe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bt||v.minFilter!==cr&&v.minFilter!==_n||v.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));const K=v.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const te=B(v);if(te!==T.__cacheKey){J[te]===void 0&&(J[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[te].usedTimes++;const ae=J[T.__cacheKey];ae!==void 0&&(J[T.__cacheKey].usedTimes--,ae.usedTimes===0&&F(v)),T.__cacheKey=te,T.__webglTexture=J[te].texture}return O}function fe(T,v,O){return Math.floor(Math.floor(T/O)/v)}function re(T,v,O,K){const te=T.updateRanges;if(te.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,O,K,v.data);else{te.sort((ve,se)=>ve.start-se.start);let ae=0;for(let ve=1;ve<te.length;ve++){const se=te[ae],ne=te[ve],Pe=se.start+se.count,Oe=fe(ne.start,v.width,4),Ye=fe(se.start,v.width,4);ne.start<=Pe+1&&Oe===Ye&&fe(ne.start+ne.count-1,v.width,4)===Oe?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++ae,te[ae]=ne)}te.length=ae+1;const W=t.getParameter(r.UNPACK_ROW_LENGTH),q=t.getParameter(r.UNPACK_SKIP_PIXELS),pe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let ve=0,se=te.length;ve<se;ve++){const ne=te[ve],Pe=Math.floor(ne.start/4),Oe=Math.ceil(ne.count/4),Ye=Pe%v.width,L=Math.floor(Pe/v.width),ie=Oe,j=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Ye,L,ie,j,O,K,v.data)}T.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,W),t.pixelStorei(r.UNPACK_SKIP_PIXELS,q),t.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function Ae(T,v,O){let K=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=r.TEXTURE_3D);const J=$(T,v),te=v.source;t.bindTexture(K,T.__webglTexture,r.TEXTURE0+O);const ae=n.get(te);if(te.version!==ae.__version||J===!0){if(t.activeTexture(r.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=Ge.getPrimaries(Ge.workingColorSpace),me=v.colorSpace===Nn?null:Ge.getPrimaries(v.colorSpace),oe=v.colorSpace===Nn||j===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let q=m(v.image,!1,i.maxTextureSize);q=le(v,q);const pe=s.convert(v.format,v.colorSpace),ve=s.convert(v.type);let se=M(v.internalFormat,pe,ve,v.normalized,v.colorSpace,v.isVideoTexture);Ue(K,v);let ne;const Pe=v.mipmaps,Oe=v.isVideoTexture!==!0,Ye=ae.__version===void 0||J===!0,L=te.dataReady,ie=E(v,q);if(v.isDepthTexture)se=A(v.format===li,v.type),Ye&&(Oe?t.texStorage2D(r.TEXTURE_2D,1,se,q.width,q.height):t.texImage2D(r.TEXTURE_2D,0,se,q.width,q.height,0,pe,ve,null));else if(v.isDataTexture)if(Pe.length>0){Oe&&Ye&&t.texStorage2D(r.TEXTURE_2D,ie,se,Pe[0].width,Pe[0].height);for(let j=0,me=Pe.length;j<me;j++)ne=Pe[j],Oe?L&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ne.width,ne.height,pe,ve,ne.data):t.texImage2D(r.TEXTURE_2D,j,se,ne.width,ne.height,0,pe,ve,ne.data);v.generateMipmaps=!1}else Oe?(Ye&&t.texStorage2D(r.TEXTURE_2D,ie,se,q.width,q.height),L&&re(v,q,pe,ve)):t.texImage2D(r.TEXTURE_2D,0,se,q.width,q.height,0,pe,ve,q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,se,Pe[0].width,Pe[0].height,q.depth);for(let j=0,me=Pe.length;j<me;j++)if(ne=Pe[j],v.format!==Ut)if(pe!==null)if(Oe){if(L)if(v.layerUpdates.size>0){const oe=Xl(ne.width,ne.height,v.format,v.type);for(const Z of v.layerUpdates){const Se=ne.data.subarray(Z*oe/ne.data.BYTES_PER_ELEMENT,(Z+1)*oe/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,Z,ne.width,ne.height,1,pe,Se)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ne.width,ne.height,q.depth,pe,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,se,ne.width,ne.height,q.depth,0,ne.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ne.width,ne.height,q.depth,pe,ve,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,se,ne.width,ne.height,q.depth,0,pe,ve,ne.data)}else{Oe&&Ye&&t.texStorage2D(r.TEXTURE_2D,ie,se,Pe[0].width,Pe[0].height);for(let j=0,me=Pe.length;j<me;j++)ne=Pe[j],v.format!==Ut?pe!==null?Oe?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,ne.width,ne.height,pe,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,j,se,ne.width,ne.height,0,ne.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?L&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ne.width,ne.height,pe,ve,ne.data):t.texImage2D(r.TEXTURE_2D,j,se,ne.width,ne.height,0,pe,ve,ne.data)}else if(v.isDataArrayTexture)if(Oe){if(Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,se,q.width,q.height,q.depth),L)if(v.layerUpdates.size>0){const j=Xl(q.width,q.height,v.format,v.type);for(const me of v.layerUpdates){const oe=q.data.subarray(me*j/q.data.BYTES_PER_ELEMENT,(me+1)*j/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,q.width,q.height,1,pe,ve,oe)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,pe,ve,q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,q.width,q.height,q.depth,0,pe,ve,q.data);else if(v.isData3DTexture)Oe?(Ye&&t.texStorage3D(r.TEXTURE_3D,ie,se,q.width,q.height,q.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,pe,ve,q.data)):t.texImage3D(r.TEXTURE_3D,0,se,q.width,q.height,q.depth,0,pe,ve,q.data);else if(v.isFramebufferTexture){if(Ye)if(Oe)t.texStorage2D(r.TEXTURE_2D,ie,se,q.width,q.height);else{let j=q.width,me=q.height;for(let oe=0;oe<ie;oe++)t.texImage2D(r.TEXTURE_2D,oe,se,j,me,0,pe,ve,null),j>>=1,me>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){const j=r.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),q.parentNode!==j){j.appendChild(q),d.add(v),j.onpaint=Ne=>{const vt=Ne.changedElements;for(const tt of d)vt.includes(tt.image)&&(tt.needsUpdate=!0)},j.requestPaint();return}const me=0,oe=r.RGBA,Z=r.RGBA,Se=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,me,oe,Z,Se,q),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Oe&&Ye){const j=mt(Pe[0]);t.texStorage2D(r.TEXTURE_2D,ie,se,j.width,j.height)}for(let j=0,me=Pe.length;j<me;j++)ne=Pe[j],Oe?L&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,pe,ve,ne):t.texImage2D(r.TEXTURE_2D,j,se,pe,ve,ne);v.generateMipmaps=!1}else if(Oe){if(Ye){const j=mt(q);t.texStorage2D(r.TEXTURE_2D,ie,se,j.width,j.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,ve,q)}else t.texImage2D(r.TEXTURE_2D,0,se,pe,ve,q);p(v)&&_(K),ae.__version=te.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function De(T,v,O){if(v.image.length!==6)return;const K=$(T,v),J=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+O);const te=n.get(J);if(J.version!==te.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const ae=Ge.getPrimaries(Ge.workingColorSpace),W=v.colorSpace===Nn?null:Ge.getPrimaries(v.colorSpace),q=v.colorSpace===Nn||ae===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const pe=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,se=[];for(let Z=0;Z<6;Z++)!pe&&!ve?se[Z]=m(v.image[Z],!0,i.maxCubemapSize):se[Z]=ve?v.image[Z].image:v.image[Z],se[Z]=le(v,se[Z]);const ne=se[0],Pe=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type),Ye=M(v.internalFormat,Pe,Oe,v.normalized,v.colorSpace),L=v.isVideoTexture!==!0,ie=te.__version===void 0||K===!0,j=J.dataReady;let me=E(v,ne);Ue(r.TEXTURE_CUBE_MAP,v);let oe;if(pe){L&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ye,ne.width,ne.height);for(let Z=0;Z<6;Z++){oe=se[Z].mipmaps;for(let Se=0;Se<oe.length;Se++){const Ne=oe[Se];v.format!==Ut?Pe!==null?L?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Ne.width,Ne.height,Pe,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,Ye,Ne.width,Ne.height,0,Ne.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Ne.width,Ne.height,Pe,Oe,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,Ye,Ne.width,Ne.height,0,Pe,Oe,Ne.data)}}}else{if(oe=v.mipmaps,L&&ie){oe.length>0&&me++;const Z=mt(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ve){L?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,se[Z].width,se[Z].height,Pe,Oe,se[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,se[Z].width,se[Z].height,0,Pe,Oe,se[Z].data);for(let Se=0;Se<oe.length;Se++){const vt=oe[Se].image[Z].image;L?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,vt.width,vt.height,Pe,Oe,vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,Ye,vt.width,vt.height,0,Pe,Oe,vt.data)}}else{L?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,Oe,se[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Pe,Oe,se[Z]);for(let Se=0;Se<oe.length;Se++){const Ne=oe[Se];L?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,Pe,Oe,Ne.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,Ye,Pe,Oe,Ne.image[Z])}}}p(v)&&_(r.TEXTURE_CUBE_MAP),te.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Re(T,v,O,K,J,te){const ae=s.convert(O.format,O.colorSpace),W=s.convert(O.type),q=M(O.internalFormat,ae,W,O.normalized,O.colorSpace),pe=n.get(v),ve=n.get(O);if(ve.__renderTarget=v,!pe.__hasExternalTextures){const se=Math.max(1,v.width>>te),ne=Math.max(1,v.height>>te);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,te,q,se,ne,v.depth,0,ae,W,null):t.texImage2D(J,te,q,se,ne,0,ae,W,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),je(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,J,ve.__webglTexture,0,Tt(v)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,J,ve.__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(T,v,O){if(r.bindRenderbuffer(r.RENDERBUFFER,T),v.depthBuffer){const K=v.depthTexture,J=K&&K.isDepthTexture?K.type:null,te=A(v.stencilBuffer,J),ae=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt(v),te,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt(v),te,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,te,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,T)}else{const K=v.textures;for(let J=0;J<K.length;J++){const te=K[J],ae=s.convert(te.format,te.colorSpace),W=s.convert(te.type),q=M(te.internalFormat,ae,W,te.normalized,te.colorSpace);je(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt(v),q,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt(v),q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,q,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xe(T,v,O){const K=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,v.depthTexture);const pe=s.convert(v.depthTexture.format),ve=s.convert(v.depthTexture.type);let se;v.depthTexture.format===On?se=r.DEPTH_COMPONENT24:v.depthTexture.format===li&&(se=r.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,v.width,v.height,0,pe,ve,null)}}else Q(v.depthTexture,0);const te=J.__webglTexture,ae=Tt(v),W=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,q=v.depthTexture.format===li?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===On)je(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,W,te,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,q,W,te,0);else if(v.depthTexture.format===li)je(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,W,te,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,q,W,te,0);else throw new Error("Unknown depthTexture format")}function et(T){const v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=K}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)Xe(v.__webglFramebuffer[K],T,K);else{const K=T.texture.mipmaps;K&&K.length>0?Xe(v.__webglFramebuffer[0],T,0):Xe(v.__webglFramebuffer,T,0)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=r.createRenderbuffer(),ht(v.__webglDepthbuffer[K],T,!1);else{const J=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,te)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),ht(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,te)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(T,v,O){const K=n.get(T);v!==void 0&&Re(K.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&et(T)}function Ve(T){const v=T.texture,O=n.get(T),K=n.get(v);T.addEventListener("dispose",x);const J=T.textures,te=T.isWebGLCubeRenderTarget===!0,ae=J.length>1;if(ae||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,o.memory.textures++),te){O.__webglFramebuffer=[];for(let W=0;W<6;W++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[W]=[];for(let q=0;q<v.mipmaps.length;q++)O.__webglFramebuffer[W][q]=r.createFramebuffer()}else O.__webglFramebuffer[W]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let W=0;W<v.mipmaps.length;W++)O.__webglFramebuffer[W]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ae)for(let W=0,q=J.length;W<q;W++){const pe=n.get(J[W]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&je(T)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<J.length;W++){const q=J[W];O.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[W]);const pe=s.convert(q.format,q.colorSpace),ve=s.convert(q.type),se=M(q.internalFormat,pe,ve,q.normalized,q.colorSpace,T.isXRRenderTarget===!0),ne=Tt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,se,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,O.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,v);for(let W=0;W<6;W++)if(v.mipmaps&&v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)Re(O.__webglFramebuffer[W][q],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,q);else Re(O.__webglFramebuffer[W],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);p(v)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let W=0,q=J.length;W<q;W++){const pe=J[W],ve=n.get(pe);let se=r.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ve.__webglTexture),Ue(se,pe),Re(O.__webglFramebuffer,T,pe,r.COLOR_ATTACHMENT0+W,se,0),p(pe)&&_(se)}t.unbindTexture()}else{let W=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(W=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(W,K.__webglTexture),Ue(W,v),v.mipmaps&&v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)Re(O.__webglFramebuffer[q],T,v,r.COLOR_ATTACHMENT0,W,q);else Re(O.__webglFramebuffer,T,v,r.COLOR_ATTACHMENT0,W,0);p(v)&&_(W),t.unbindTexture()}T.depthBuffer&&et(T)}function Mt(T){const v=T.textures;for(let O=0,K=v.length;O<K;O++){const J=v[O];if(p(J)){const te=S(T),ae=n.get(J).__webglTexture;t.bindTexture(te,ae),_(te),t.unbindTexture()}}}const dt=[],Gt=[];function D(T){if(T.samples>0){if(je(T)===!1){const v=T.textures,O=T.width,K=T.height;let J=r.COLOR_BUFFER_BIT;const te=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(T),W=v.length>1;if(W)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const q=T.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),W){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[pe]);const ve=n.get(v[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,J,r.NEAREST),l===!0&&(dt.length=0,Gt.length=0,dt.push(r.COLOR_ATTACHMENT0+pe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(te),Gt.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Gt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[pe]);const ve=n.get(v[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Tt(T){return Math.min(i.maxSamples,T.samples)}function je(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function at(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function le(T,v){const O=T.colorSpace,K=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Zt&&O!==Nn&&(Ge.getTransfer(O)===$e?(K!==Ut||J!==qt)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",O)),v}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.getTextureUnits=Y,this.setTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ue,this.setTextureCube=xe,this.rebindTextures=ut,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function A0(r,e){function t(n,i=Nn){let s;const o=Ge.getTransfer(i);if(n===qt)return r.UNSIGNED_BYTE;if(n===ca)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Uc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nc)return r.BYTE;if(n===Fc)return r.SHORT;if(n===pr)return r.UNSIGNED_SHORT;if(n===la)return r.INT;if(n===Mn)return r.UNSIGNED_INT;if(n===Yt)return r.FLOAT;if(n===Tn)return r.HALF_FLOAT;if(n===Bc)return r.ALPHA;if(n===zc)return r.RGB;if(n===Ut)return r.RGBA;if(n===On)return r.DEPTH_COMPONENT;if(n===li)return r.DEPTH_STENCIL;if(n===ha)return r.RED;if(n===da)return r.RED_INTEGER;if(n===hi)return r.RG;if(n===fa)return r.RG_INTEGER;if(n===pa)return r.RGBA_INTEGER;if(n===es||n===ts||n===ns||n===is)if(o===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===bo||n===yo||n===So)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===To||n===Eo||n===wo||n===Ao||n===as||n===Ro)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mo||n===To)return o===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Eo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wo)return s.COMPRESSED_R11_EAC;if(n===Ao)return s.COMPRESSED_SIGNED_R11_EAC;if(n===as)return s.COMPRESSED_RG11_EAC;if(n===Ro)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Co||n===Po||n===Lo||n===Do||n===Io||n===No||n===Fo||n===Uo||n===Oo||n===Bo||n===zo||n===Ho||n===ko||n===Vo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Co)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Wo||n===Xo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Go)return o===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===Ko||n===ls||n===qo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===jo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ls)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C0=`
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

}`;class P0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ct({vertexShader:R0,fragmentShader:C0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L0 extends di{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const b=typeof XRWebGLBinding<"u",m=new P0,p={},_=t.getContextAttributes();let S=null,M=null;const A=[],E=[],C=new He;let x=null;const w=new Ft;w.viewport=new st;const F=new Ft;F.viewport=new st;const P=[w,F],z=new Ld;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=A[$];return fe===void 0&&(fe=new Cs,A[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=A[$];return fe===void 0&&(fe=new Cs,A[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=A[$];return fe===void 0&&(fe=new Cs,A[$]=fe),fe.getHandSpace()};function N($){const fe=E.indexOf($.inputSource);if(fe===-1)return;const re=A[fe];re!==void 0&&(re.update($.inputSource,$.frame,c||o),re.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",B);for(let $=0;$<A.length;$++){const fe=E[$];fe!==null&&(E[$]=null,A[$].disconnect(fe))}X=null,Y=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(S),f=null,h=null,d=null,i=null,M=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",G),i.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ae=null,De=null;_.depth&&(De=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?li:On,Ae=_.stencil?mr:Mn);const Re={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Re),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Lt(h.textureWidth,h.textureHeight,{format:Ut,type:qt,depthTexture:new ki(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Lt(f.framebufferWidth,f.framebufferHeight,{format:Ut,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B($){for(let fe=0;fe<$.removed.length;fe++){const re=$.removed[fe],Ae=E.indexOf(re);Ae>=0&&(E[Ae]=null,A[Ae].disconnect(re))}for(let fe=0;fe<$.added.length;fe++){const re=$.added[fe];let Ae=E.indexOf(re);if(Ae===-1){for(let Re=0;Re<A.length;Re++)if(Re>=E.length){E.push(re),Ae=Re;break}else if(E[Re]===null){E[Re]=re,Ae=Re;break}if(Ae===-1)break}const De=A[Ae];De&&De.connect(re)}}const Q=new R,ee=new R;function ue($,fe,re){Q.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);const Ae=Q.distanceTo(ee),De=fe.projectionMatrix.elements,Re=re.projectionMatrix.elements,ht=De[14]/(De[10]-1),Xe=De[14]/(De[10]+1),et=(De[9]+1)/De[5],ut=(De[9]-1)/De[5],Ve=(De[8]-1)/De[0],Mt=(Re[8]+1)/Re[0],dt=ht*Ve,Gt=ht*Mt,D=Ae/(-Ve+Mt),Tt=D*-Ve;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Tt),$.translateZ(D),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=ht+D,at=Xe+D,le=dt-Tt,mt=Gt+(Ae-Tt),T=et*Xe/at*je,v=ut*Xe/at*je;$.projectionMatrix.makePerspective(le,mt,T,v,je,at),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xe($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let fe=$.near,re=$.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(re=m.depthFar)),z.near=F.near=w.near=fe,z.far=F.far=w.far=re,(X!==z.near||Y!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),X=z.near,Y=z.far),z.layers.mask=$.layers.mask|6,w.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const Ae=$.parent,De=z.cameras;xe(z,Ae);for(let Re=0;Re<De.length;Re++)xe(De[Re],Ae);De.length===2?ue(z,w,F):z.projectionMatrix.copy(w.projectionMatrix),Te($,z,Ae)};function Te($,fe,re){re===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return p[$]};let Ke=null;function Qe($,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ae=!1;re.length!==z.cameras.length&&(z.cameras.length=0,Ae=!0);for(let Xe=0;Xe<re.length;Xe++){const et=re[Xe];let ut=null;if(f!==null)ut=f.getViewport(et);else{const Mt=d.getViewSubImage(h,et);ut=Mt.viewport,Xe===0&&(e.setRenderTargetTextures(M,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(M))}let Ve=P[Xe];Ve===void 0&&(Ve=new Ft,Ve.layers.enable(Xe),Ve.viewport=new st,P[Xe]=Ve),Ve.matrix.fromArray(et.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(et.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ut.x,ut.y,ut.width,ut.height),Xe===0&&(z.matrix.copy(Ve.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ae===!0&&z.cameras.push(Ve)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){d=n.getBinding();const Xe=d.getDepthInformation(re[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(De&&De.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<re.length;Xe++){const et=re[Xe].camera;if(et){let ut=p[et];ut||(ut=new Yc,p[et]=ut);const Ve=d.getCameraImage(et);ut.sourceTexture=Ve}}}}for(let re=0;re<A.length;re++){const Ae=E[re],De=A[re];Ae!==null&&De!==void 0&&De.update(Ae,fe,c||o)}Ke&&Ke($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ue=new iu;Ue.setAnimationLoop(Qe),this.setAnimationLoop=function($){Ke=$},this.dispose=function(){}}}const D0=new Le,uu=new Ie;uu.set(-1,0,0,0,1,0,0,0,1);function I0(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$c(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,S,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),S=_.envMap,M=_.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N0(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){const M=S.program;n.uniformBlockBinding(_,M)}function c(_,S){let M=i[_.id];M===void 0&&(g(_),M=u(_),i[_.id]=M,_.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(_,A);const E=e.render.frame;s[_.id]!==E&&(h(_),s[_.id]=E)}function u(_){const S=d();_.__bindingPointIndex=S;const M=r.createBuffer(),A=_.__size,E=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const S=i[_.id],M=_.uniforms,A=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,C=M.length;E<C;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let w=0,F=x.length;w<F;w++){const P=x[w];if(f(P,E,w,A)===!0){const z=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let N=0;N<X.length;N++){const G=X[N],B=b(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,z+Y,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):ArrayBuffer.isView(G)?P.__data.set(new G.constructor(G.buffer,G.byteOffset,P.__data.length)):(G.toArray(P.__data,Y),Y+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,S,M,A){const E=_.value,C=S+"_"+M;if(A[C]===void 0)return typeof E=="number"||typeof E=="boolean"?A[C]=E:ArrayBuffer.isView(E)?A[C]=E.slice():A[C]=E.clone(),!0;{const x=A[C];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return A[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function g(_){const S=_.uniforms;let M=0;const A=16;for(let C=0,x=S.length;C<x;C++){const w=Array.isArray(S[C])?S[C]:[S[C]];for(let F=0,P=w.length;F<P;F++){const z=w[F],X=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,N=X.length;Y<N;Y++){const G=X[Y],B=b(G),Q=M%A,ee=Q%B.boundary,ue=Q+ee;M+=ee,ue!==0&&A-ue<B.storage&&(M+=A-ue),z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=B.storage}}}const E=M%A;return E>0&&(M+=A-E),_.__size=M,_.__cache={},this}function b(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):ye("WebGLRenderer: Unsupported uniform value type.",_),S}function m(_){const S=_.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const F0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pn=null;function U0(){return pn===null&&(pn=new Sa(F0,16,16,hi,Tn),pn.name="DFG_LUT",pn.minFilter=ot,pn.magFilter=ot,pn.wrapS=vn,pn.wrapT=vn,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class O0{constructor(e={}){const{canvas:t=ah(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=qt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const b=f,m=new Set([pa,fa,da]),p=new Set([qt,Mn,pr,mr,ca,ua]),_=new Uint32Array(4),S=new Int32Array(4),M=new R;let A=null,E=null;const C=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let P=!1,z=null;this._outputColorSpace=Ct;let X=0,Y=0,N=null,G=-1,B=null;const Q=new st,ee=new st;let ue=null;const xe=new Ce(0);let Te=0,Ke=t.width,Qe=t.height,Ue=1,$=null,fe=null;const re=new st(0,0,Ke,Qe),Ae=new st(0,0,Ke,Qe);let De=!1;const Re=new Ta;let ht=!1,Xe=!1;const et=new Le,ut=new R,Ve=new st,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Gt(){return N===null?Ue:1}let D=n;function Tt(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${aa}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),D===null){const I="webgl2";if(D=Tt(I,y),D===null)throw Tt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw we("WebGLRenderer: "+y.message),y}let je,at,le,mt,T,v,O,K,J,te,ae,W,q,pe,ve,se,ne,Pe,Oe,Ye,L,ie,j;function me(){je=new Um(D),je.init(),L=new A0(D,je),at=new Rm(D,je,e,L),le=new E0(D,je),at.reversedDepthBuffer&&h&&le.buffers.depth.setReversed(!0),mt=new zm(D),T=new h0,v=new w0(D,je,le,T,at,L,mt),O=new Fm(F),K=new Vd(D),ie=new wm(D,K),J=new Om(D,K,mt,ie),te=new km(D,J,K,ie,mt),Pe=new Hm(D,at,v),ve=new Cm(T),ae=new u0(F,O,je,at,ie,ve),W=new I0(F,T),q=new f0,pe=new x0(je),ne=new Em(F,O,le,te,g,l),se=new T0(F,te,at),j=new N0(D,mt,at,le),Oe=new Am(D,je,mt),Ye=new Bm(D,je,mt),mt.programs=ae.programs,F.capabilities=at,F.extensions=je,F.properties=T,F.renderLists=q,F.shadowMap=se,F.state=le,F.info=mt}me(),b!==qt&&(w=new Gm(b,t.width,t.height,i,s));const oe=new L0(F,D);this.xr=oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(y){y!==void 0&&(Ue=y,this.setSize(Ke,Qe,!1))},this.getSize=function(y){return y.set(Ke,Qe)},this.setSize=function(y,I,V=!0){if(oe.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=y,Qe=I,t.width=Math.floor(y*Ue),t.height=Math.floor(I*Ue),V===!0&&(t.style.width=y+"px",t.style.height=I+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Ke*Ue,Qe*Ue).floor()},this.setDrawingBufferSize=function(y,I,V){Ke=y,Qe=I,Ue=V,t.width=Math.floor(y*V),t.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(b===qt){we("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){ye("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(re)},this.setViewport=function(y,I,V,H){y.isVector4?re.set(y.x,y.y,y.z,y.w):re.set(y,I,V,H),le.viewport(Q.copy(re).multiplyScalar(Ue).round())},this.getScissor=function(y){return y.copy(Ae)},this.setScissor=function(y,I,V,H){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,I,V,H),le.scissor(ee.copy(Ae).multiplyScalar(Ue).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(y){le.setScissorTest(De=y)},this.setOpaqueSort=function(y){$=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,V=!0){let H=0;if(y){let k=!1;if(N!==null){const de=N.texture.format;k=m.has(de)}if(k){const de=N.texture.type,_e=p.has(de),he=ne.getClearColor(),be=ne.getClearAlpha(),Me=he.r,Fe=he.g,ze=he.b;_e?(_[0]=Me,_[1]=Fe,_[2]=ze,_[3]=be,D.clearBufferuiv(D.COLOR,0,_)):(S[0]=Me,S[1]=Fe,S[2]=ze,S[3]=be,D.clearBufferiv(D.COLOR,0,S))}else H|=D.COLOR_BUFFER_BIT}I&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),ne.dispose(),q.dispose(),pe.dispose(),T.dispose(),O.dispose(),te.dispose(),ie.dispose(),j.dispose(),ae.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ka),oe.removeEventListener("sessionend",Va),Qn.stop()};function Z(y){y.preventDefault(),us("WebGLRenderer: Context Lost."),P=!0}function Se(){us("WebGLRenderer: Context Restored."),P=!1;const y=mt.autoReset,I=se.enabled,V=se.autoUpdate,H=se.needsUpdate,k=se.type;me(),mt.autoReset=y,se.enabled=I,se.autoUpdate=V,se.needsUpdate=H,se.type=k}function Ne(y){we("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function vt(y){const I=y.target;I.removeEventListener("dispose",vt),tt(I)}function tt(y){An(y),T.remove(y)}function An(y){const I=T.get(y).programs;I!==void 0&&(I.forEach(function(V){ae.releaseProgram(V)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,H,k,de){I===null&&(I=Mt);const _e=k.isMesh&&k.matrixWorld.determinant()<0,he=vu(y,I,V,H,k);le.setMaterial(H,_e);let be=V.index,Me=1;if(H.wireframe===!0){if(be=J.getWireframeAttribute(V),be===void 0)return;Me=2}const Fe=V.drawRange,ze=V.attributes.position;let Ee=Fe.start*Me,nt=(Fe.start+Fe.count)*Me;de!==null&&(Ee=Math.max(Ee,de.start*Me),nt=Math.min(nt,(de.start+de.count)*Me)),be!==null?(Ee=Math.max(Ee,0),nt=Math.min(nt,be.count)):ze!=null&&(Ee=Math.max(Ee,0),nt=Math.min(nt,ze.count));const _t=nt-Ee;if(_t<0||_t===1/0)return;ie.setup(k,H,he,V,be);let gt,it=Oe;if(be!==null&&(gt=K.get(be),it=Ye,it.setIndex(gt)),k.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*Gt()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(k.isLine){let Dt=H.linewidth;Dt===void 0&&(Dt=1),le.setLineWidth(Dt*Gt()),k.isLineSegments?it.setMode(D.LINES):k.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else k.isPoints?it.setMode(D.POINTS):k.isSprite&&it.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Dt=k._multiDrawStarts,ge=k._multiDrawCounts,Wt=k._multiDrawCount,qe=be?K.get(be).bytesPerElement:1,Jt=T.get(H).currentProgram.getUniforms();for(let dn=0;dn<Wt;dn++)Jt.setValue(D,"_gl_DrawID",dn),it.render(Dt[dn]/qe,ge[dn])}else if(k.isInstancedMesh)it.renderInstances(Ee,_t,k.count);else if(V.isInstancedBufferGeometry){const Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,Dt);it.renderInstances(Ee,_t,ge)}else it.render(Ee,_t)};function hn(y,I,V){y.transparent===!0&&y.side===Kt&&y.forceSinglePass===!1?(y.side=Ot,y.needsUpdate=!0,Sr(y,I,V),y.side=$t,y.needsUpdate=!0,Sr(y,I,V),y.side=Kt):Sr(y,I,V)}this.compile=function(y,I,V=null){V===null&&(V=y),E=pe.get(V),E.init(I),x.push(E),V.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),y!==V&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();const H=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const de=k.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const he=de[_e];hn(he,V,k),H.add(he)}else hn(de,V,k),H.add(de)}),E=x.pop(),H},this.compileAsync=function(y,I,V=null){const H=this.compile(y,I,V);return new Promise(k=>{function de(){if(H.forEach(function(_e){T.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){k(y);return}setTimeout(de,10)}je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let xs=null;function mu(y){xs&&xs(y)}function ka(){Qn.stop()}function Va(){Qn.start()}const Qn=new iu;Qn.setAnimationLoop(mu),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(y){xs=y,oe.setAnimationLoop(y),y===null?Qn.stop():Qn.start()},oe.addEventListener("sessionstart",ka),oe.addEventListener("sessionend",Va),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;z!==null&&z.renderStart(y,I);const V=oe.enabled===!0&&oe.isPresenting===!0,H=w!==null&&(N===null||V)&&w.begin(F,N);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(I),I=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(F,y,I,N),E=pe.get(y,x.length),E.init(I),E.state.textureUnits=v.getTextureUnits(),x.push(E),et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Re.setFromProjectionMatrix(et,xn,I.reversedDepth),Xe=this.localClippingEnabled,ht=ve.init(this.clippingPlanes,Xe),A=q.get(y,C.length),A.init(),C.push(A),oe.enabled===!0&&oe.isPresenting===!0){const _e=F.xr.getDepthSensingMesh();_e!==null&&bs(_e,I,-1/0,F.sortObjects)}bs(y,I,0,F.sortObjects),A.finish(),F.sortObjects===!0&&A.sort($,fe),dt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,dt&&ne.addToRenderList(A,y),this.info.render.frame++,ht===!0&&ve.beginShadows();const k=E.state.shadowsArray;if(se.render(k,y,I),ht===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&w.hasRenderPass())===!1){const _e=A.opaque,he=A.transmissive;if(E.setupLights(),I.isArrayCamera){const be=I.cameras;if(he.length>0)for(let Me=0,Fe=be.length;Me<Fe;Me++){const ze=be[Me];Wa(_e,he,y,ze)}dt&&ne.render(y);for(let Me=0,Fe=be.length;Me<Fe;Me++){const ze=be[Me];Ga(A,y,ze,ze.viewport)}}else he.length>0&&Wa(_e,he,y,I),dt&&ne.render(y),Ga(A,y,I)}N!==null&&Y===0&&(v.updateMultisampleRenderTarget(N),v.updateRenderTargetMipmap(N)),H&&w.end(F),y.isScene===!0&&y.onAfterRender(F,y,I),ie.resetDefaultState(),G=-1,B=null,x.pop(),x.length>0?(E=x[x.length-1],v.setTextureUnits(E.state.textureUnits),ht===!0&&ve.setGlobalState(F.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,z!==null&&z.renderEnd()};function bs(y,I,V,H){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Re.intersectsSprite(y)){H&&Ve.setFromMatrixPosition(y.matrixWorld).applyMatrix4(et);const _e=te.update(y),he=y.material;he.visible&&A.push(y,_e,he,V,Ve.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Re.intersectsObject(y))){const _e=te.update(y),he=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ve.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ve.copy(_e.boundingSphere.center)),Ve.applyMatrix4(y.matrixWorld).applyMatrix4(et)),Array.isArray(he)){const be=_e.groups;for(let Me=0,Fe=be.length;Me<Fe;Me++){const ze=be[Me],Ee=he[ze.materialIndex];Ee&&Ee.visible&&A.push(y,_e,Ee,V,Ve.z,ze)}}else he.visible&&A.push(y,_e,he,V,Ve.z,null)}}const de=y.children;for(let _e=0,he=de.length;_e<he;_e++)bs(de[_e],I,V,H)}function Ga(y,I,V,H){const{opaque:k,transmissive:de,transparent:_e}=y;E.setupLightsView(V),ht===!0&&ve.setGlobalState(F.clippingPlanes,V),H&&le.viewport(Q.copy(H)),k.length>0&&yr(k,I,V),de.length>0&&yr(de,I,V),_e.length>0&&yr(_e,I,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Wa(y,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Ee=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Lt(1,1,{generateMipmaps:!0,type:Ee?Tn:qt,minFilter:_n,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const de=E.state.transmissionRenderTarget[H.id],_e=H.viewport||Q;de.setSize(_e.z*F.transmissionResolutionScale,_e.w*F.transmissionResolutionScale);const he=F.getRenderTarget(),be=F.getActiveCubeFace(),Me=F.getActiveMipmapLevel();F.setRenderTarget(de),F.getClearColor(xe),Te=F.getClearAlpha(),Te<1&&F.setClearColor(16777215,.5),F.clear(),dt&&ne.render(V);const Fe=F.toneMapping;F.toneMapping=bn;const ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),ht===!0&&ve.setGlobalState(F.clippingPlanes,H),yr(y,V,H),v.updateMultisampleRenderTarget(de),v.updateRenderTargetMipmap(de),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let nt=0,_t=I.length;nt<_t;nt++){const gt=I[nt],{object:it,geometry:Dt,material:ge,group:Wt}=gt;if(ge.side===Kt&&it.layers.test(H.layers)){const qe=ge.side;ge.side=Ot,ge.needsUpdate=!0,Xa(it,V,H,Dt,ge,Wt),ge.side=qe,ge.needsUpdate=!0,Ee=!0}}Ee===!0&&(v.updateMultisampleRenderTarget(de),v.updateRenderTargetMipmap(de))}F.setRenderTarget(he,be,Me),F.setClearColor(xe,Te),ze!==void 0&&(H.viewport=ze),F.toneMapping=Fe}function yr(y,I,V){const H=I.isScene===!0?I.overrideMaterial:null;for(let k=0,de=y.length;k<de;k++){const _e=y[k],{object:he,geometry:be,group:Me}=_e;let Fe=_e.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),he.layers.test(V.layers)&&Xa(he,I,V,be,Fe,Me)}}function Xa(y,I,V,H,k,de){y.onBeforeRender(F,I,V,H,k,de),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(F,I,V,H,y,de),k.transparent===!0&&k.side===Kt&&k.forceSinglePass===!1?(k.side=Ot,k.needsUpdate=!0,F.renderBufferDirect(V,I,H,k,y,de),k.side=$t,k.needsUpdate=!0,F.renderBufferDirect(V,I,H,k,y,de),k.side=Kt):F.renderBufferDirect(V,I,H,k,y,de),y.onAfterRender(F,I,V,H,k,de)}function Sr(y,I,V){I.isScene!==!0&&(I=Mt);const H=T.get(y),k=E.state.lights,de=E.state.shadowsArray,_e=k.state.version,he=ae.getParameters(y,k.state,de,I,V,E.state.lightProbeGridArray),be=ae.getProgramCacheKey(he);let Me=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;const Fe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=O.get(y.envMap||H.environment,Fe),H.envMapRotation=H.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Me===void 0&&(y.addEventListener("dispose",vt),Me=new Map,H.programs=Me);let ze=Me.get(be);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===_e)return Ka(y,he),ze}else he.uniforms=ae.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,V,he),y.onBeforeCompile(he,F),ze=ae.acquireProgram(he,be),Me.set(be,ze),H.uniforms=he.uniforms;const Ee=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=ve.uniform),Ka(y,he),H.needsLights=xu(y),H.lightsStateVersion=_e,H.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=ze,H.uniformsList=null,ze}function ja(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=rs.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Ka(y,I){const V=T.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function gu(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let V=0,H=y.length;V<H;V++){const k=y[V];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function vu(y,I,V,H,k){I.isScene!==!0&&(I=Mt),v.resetTextureUnits();const de=I.fog,_e=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,he=N===null?F.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ge.workingColorSpace,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Me=O.get(H.envMap||_e,be),Fe=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color;let gt=bn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(gt=F.toneMapping);const it=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Dt=it!==void 0?it.length:0,ge=T.get(H),Wt=E.state.lights;if(ht===!0&&(Xe===!0||y!==B)){const lt=y===B&&H.id===G;ve.setState(H,y,lt)}let qe=!1;H.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Wt.state.version||ge.outputColorSpace!==he||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==Me||H.fog===!0&&ge.fog!==de||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==ve.numPlanes||ge.numIntersection!==ve.numIntersection)||ge.vertexAlphas!==Fe||ge.vertexTangents!==ze||ge.morphTargets!==Ee||ge.morphNormals!==nt||ge.morphColors!==_t||ge.toneMapping!==gt||ge.morphTargetsCount!==Dt||!!ge.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,ge.__version=H.version);let Jt=ge.currentProgram;qe===!0&&(Jt=Sr(H,I,k),z&&H.isNodeMaterial&&z.onUpdateProgram(H,Jt,ge));let dn=!1,zn=!1,vi=!1;const rt=Jt.getUniforms(),xt=ge.uniforms;if(le.useProgram(Jt.program)&&(dn=!0,zn=!0,vi=!0),H.id!==G&&(G=H.id,zn=!0),ge.needsLights){const lt=gu(E.state.lightProbeGridArray,k);ge.lightProbeGrid!==lt&&(ge.lightProbeGrid=lt,zn=!0)}if(dn||B!==y){le.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),rt.setValue(D,"projectionMatrix",y.projectionMatrix),rt.setValue(D,"viewMatrix",y.matrixWorldInverse);const kn=rt.map.cameraPosition;kn!==void 0&&kn.setValue(D,ut.setFromMatrixPosition(y.matrixWorld)),at.logarithmicDepthBuffer&&rt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&rt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),B!==y&&(B=y,zn=!0,vi=!0)}if(ge.needsLights&&(Wt.state.directionalShadowMap.length>0&&rt.setValue(D,"directionalShadowMap",Wt.state.directionalShadowMap,v),Wt.state.spotShadowMap.length>0&&rt.setValue(D,"spotShadowMap",Wt.state.spotShadowMap,v),Wt.state.pointShadowMap.length>0&&rt.setValue(D,"pointShadowMap",Wt.state.pointShadowMap,v)),k.isSkinnedMesh){rt.setOptional(D,k,"bindMatrix"),rt.setOptional(D,k,"bindMatrixInverse");const lt=k.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),rt.setValue(D,"boneTexture",lt.boneTexture,v))}k.isBatchedMesh&&(rt.setOptional(D,k,"batchingTexture"),rt.setValue(D,"batchingTexture",k._matricesTexture,v),rt.setOptional(D,k,"batchingIdTexture"),rt.setValue(D,"batchingIdTexture",k._indirectTexture,v),rt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&rt.setValue(D,"batchingColorTexture",k._colorsTexture,v));const Hn=V.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Pe.update(k,V,Jt),(zn||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,rt.setValue(D,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(xt.envMapIntensity.value=I.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=U0()),zn){if(rt.setValue(D,"toneMappingExposure",F.toneMappingExposure),ge.needsLights&&_u(xt,vi),de&&H.fog===!0&&W.refreshFogUniforms(xt,de),W.refreshMaterialUniforms(xt,H,Ue,Qe,E.state.transmissionRenderTarget[y.id]),ge.needsLights&&ge.lightProbeGrid){const lt=ge.lightProbeGrid;xt.probesSH.value=lt.texture,xt.probesMin.value.copy(lt.boundingBox.min),xt.probesMax.value.copy(lt.boundingBox.max),xt.probesResolution.value.copy(lt.resolution)}rs.upload(D,ja(ge),xt,v)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(rs.upload(D,ja(ge),xt,v),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&rt.setValue(D,"center",k.center),rt.setValue(D,"modelViewMatrix",k.modelViewMatrix),rt.setValue(D,"normalMatrix",k.normalMatrix),rt.setValue(D,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){const lt=H.uniformsGroups;for(let kn=0,_i=lt.length;kn<_i;kn++){const qa=lt[kn];j.update(qa,Jt),j.bind(qa,Jt)}}return Jt}function _u(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function xu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,I,V){const H=T.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),T.get(y.texture).__webglTexture=I,T.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const V=T.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const bu=D.createFramebuffer();this.setRenderTarget=function(y,I=0,V=0){N=y,X=I,Y=V;let H=null,k=!1,de=!1;if(y){const he=T.get(y);if(he.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),Q.copy(y.viewport),ee.copy(y.scissor),ue=y.scissorTest,le.viewport(Q),le.scissor(ee),le.setScissorTest(ue),G=-1;return}else if(he.__webglFramebuffer===void 0)v.setupRenderTarget(y);else if(he.__hasExternalTextures)v.rebindTextures(y,T.get(y.texture).__webglTexture,T.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Fe=y.depthTexture;if(he.__boundDepthTexture!==Fe){if(Fe!==null&&T.has(Fe)&&(y.width!==Fe.image.width||y.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(y)}}const be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(de=!0);const Me=T.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Me[I])?H=Me[I][V]:H=Me[I],k=!0):y.samples>0&&v.useMultisampledRTT(y)===!1?H=T.get(y).__webglMultisampledFramebuffer:Array.isArray(Me)?H=Me[V]:H=Me,Q.copy(y.viewport),ee.copy(y.scissor),ue=y.scissorTest}else Q.copy(re).multiplyScalar(Ue).floor(),ee.copy(Ae).multiplyScalar(Ue).floor(),ue=De;if(V!==0&&(H=bu),le.bindFramebuffer(D.FRAMEBUFFER,H)&&le.drawBuffers(y,H),le.viewport(Q),le.scissor(ee),le.setScissorTest(ue),k){const he=T.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,V)}else if(de){const he=I;for(let be=0;be<y.textures.length;be++){const Me=T.get(y.textures[be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+be,Me.__webglTexture,V,he)}}else if(y!==null&&V!==0){const he=T.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,V)}G=-1},this.readRenderTargetPixels=function(y,I,V,H,k,de,_e,he=0){if(!(y&&y.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=T.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){le.bindFramebuffer(D.FRAMEBUFFER,be);try{const Me=y.textures[he],Fe=Me.format,ze=Me.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!at.textureFormatReadable(Fe)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(ze)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-H&&V>=0&&V<=y.height-k&&D.readPixels(I,V,H,k,L.convert(Fe),L.convert(ze),de)}finally{const Me=N!==null?T.get(N).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,H,k,de,_e,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=T.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be)if(I>=0&&I<=y.width-H&&V>=0&&V<=y.height-k){le.bindFramebuffer(D.FRAMEBUFFER,be);const Me=y.textures[he],Fe=Me.format,ze=Me.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!at.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(I,V,H,k,L.convert(Fe),L.convert(ze),0);const nt=N!==null?T.get(N).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,nt);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await lh(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(Ee),D.deleteSync(_t),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,V=0){const H=Math.pow(2,-V),k=Math.floor(y.image.width*H),de=Math.floor(y.image.height*H),_e=I!==null?I.x:0,he=I!==null?I.y:0;v.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,_e,he,k,de),le.unbindTexture()};const yu=D.createFramebuffer(),Su=D.createFramebuffer();this.copyTextureToTexture=function(y,I,V=null,H=null,k=0,de=0){let _e,he,be,Me,Fe,ze,Ee,nt,_t;const gt=y.isCompressedTexture?y.mipmaps[de]:y.image;if(V!==null)_e=V.max.x-V.min.x,he=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,Me=V.min.x,Fe=V.min.y,ze=V.isBox3?V.min.z:0;else{const xt=Math.pow(2,-k);_e=Math.floor(gt.width*xt),he=Math.floor(gt.height*xt),y.isDataArrayTexture?be=gt.depth:y.isData3DTexture?be=Math.floor(gt.depth*xt):be=1,Me=0,Fe=0,ze=0}H!==null?(Ee=H.x,nt=H.y,_t=H.z):(Ee=0,nt=0,_t=0);const it=L.convert(I.format),Dt=L.convert(I.type);let ge;I.isData3DTexture?(v.setTexture3D(I,0),ge=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(v.setTexture2DArray(I,0),ge=D.TEXTURE_2D_ARRAY):(v.setTexture2D(I,0),ge=D.TEXTURE_2D),le.activeTexture(D.TEXTURE0),le.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),le.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),le.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Wt=le.getParameter(D.UNPACK_ROW_LENGTH),qe=le.getParameter(D.UNPACK_IMAGE_HEIGHT),Jt=le.getParameter(D.UNPACK_SKIP_PIXELS),dn=le.getParameter(D.UNPACK_SKIP_ROWS),zn=le.getParameter(D.UNPACK_SKIP_IMAGES);le.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),le.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),le.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),le.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),le.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const vi=y.isDataArrayTexture||y.isData3DTexture,rt=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const xt=T.get(y),Hn=T.get(I),lt=T.get(xt.__renderTarget),kn=T.get(Hn.__renderTarget);le.bindFramebuffer(D.READ_FRAMEBUFFER,lt.__webglFramebuffer),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let _i=0;_i<be;_i++)vi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,T.get(y).__webglTexture,k,ze+_i),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,T.get(I).__webglTexture,de,_t+_i)),D.blitFramebuffer(Me,Fe,_e,he,Ee,nt,_e,he,D.DEPTH_BUFFER_BIT,D.NEAREST);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||T.has(y)){const xt=T.get(y),Hn=T.get(I);le.bindFramebuffer(D.READ_FRAMEBUFFER,yu),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,Su);for(let lt=0;lt<be;lt++)vi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,k,ze+lt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,k),rt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hn.__webglTexture,de,_t+lt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hn.__webglTexture,de),k!==0?D.blitFramebuffer(Me,Fe,_e,he,Ee,nt,_e,he,D.COLOR_BUFFER_BIT,D.NEAREST):rt?D.copyTexSubImage3D(ge,de,Ee,nt,_t+lt,Me,Fe,_e,he):D.copyTexSubImage2D(ge,de,Ee,nt,Me,Fe,_e,he);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(ge,de,Ee,nt,_t,_e,he,be,it,Dt,gt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(ge,de,Ee,nt,_t,_e,he,be,it,gt.data):D.texSubImage3D(ge,de,Ee,nt,_t,_e,he,be,it,Dt,gt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,Ee,nt,_e,he,it,Dt,gt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,Ee,nt,gt.width,gt.height,it,gt.data):D.texSubImage2D(D.TEXTURE_2D,de,Ee,nt,_e,he,it,Dt,gt);le.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),le.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),le.pixelStorei(D.UNPACK_SKIP_PIXELS,Jt),le.pixelStorei(D.UNPACK_SKIP_ROWS,dn),le.pixelStorei(D.UNPACK_SKIP_IMAGES,zn),de===0&&I.generateMipmaps&&D.generateMipmap(ge),le.unbindTexture()},this.initRenderTarget=function(y){T.get(y).__webglFramebuffer===void 0&&v.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?v.setTextureCube(y,0):y.isData3DTexture?v.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?v.setTexture2DArray(y,0):v.setTexture2D(y,0),le.unbindTexture()},this.resetState=function(){X=0,Y=0,N=null,le.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const B0=2,z0=10,Zr=1080,io=-89.999,ro=89.999;class H0{constructor(){U(this,"target",new R(0,-.5,0));U(this,"angleX",-25);U(this,"angleY",-200.5);U(this,"distance",4);U(this,"velocityX",0);U(this,"velocityY",0);U(this,"lastX",0);U(this,"lastY",0);U(this,"lastTime",0);U(this,"orbiting",!1)}beginOrbit(e,t,n){this.lastX=e,this.lastY=t,this.lastTime=n,this.velocityX=0,this.velocityY=0,this.orbiting=!0}orbitTo(e,t,n){if(!this.orbiting)return;const i=e-this.lastX,s=t-this.lastY,o=Math.max((n-this.lastTime)/1e3,1/240);this.angleY-=i,this.angleX=Vt.clamp(this.angleX-s,io,ro),this.velocityY=Vt.clamp(-i/o,-Zr,Zr),this.velocityX=Vt.clamp(-s/o,-Zr,Zr),this.lastX=e,this.lastY=t,this.lastTime=n}endOrbit(e){if(!this.orbiting)return;const t=Math.exp(-6*Math.max(0,(e-this.lastTime)/1e3));this.velocityX*=t,this.velocityY*=t,this.orbiting=!1}stopInertia(){this.velocityX=0,this.velocityY=0,this.orbiting=!1}update(e){if(this.orbiting)return;this.angleY+=this.velocityY*e;const t=Vt.clamp(this.angleX+this.velocityX*e,io,ro);(t===io||t===ro)&&(this.velocityX=0),this.angleX=t;const n=Math.exp(-6*e);this.velocityX*=n,this.velocityY*=n,Math.abs(this.velocityX)<.01&&(this.velocityX=0),Math.abs(this.velocityY)<.01&&(this.velocityY=0)}zoomByWheel(e){this.zoomByScale(Math.exp(e*.001))}zoomByScale(e){this.distance=Vt.clamp(this.distance*e,B0,z0)}apply(e){const t=new R(0,0,this.distance);t.applyAxisAngle(new R(1,0,0),Vt.degToRad(this.angleX)),t.applyAxisAngle(new R(0,1,0),Vt.degToRad(this.angleY)),e.position.copy(this.target).add(t),e.up.set(0,1,0),e.lookAt(this.target)}getLightDirection(e){const t=Vt.degToRad(90-this.angleY),n=Vt.degToRad(-this.angleX);return e.set(Math.cos(t)*Math.cos(n),Math.sin(n),Math.sin(t)*Math.cos(n)).normalize()}}var k0=`const float IOR_AIR = 1.0; 
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
}`,V0=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const float poolHeight = 1.0;

uniform vec3 light; 
uniform vec3 sphereCenter; 
uniform float sphereRadius; 
uniform bool sphereEnabled; 
uniform vec3 cubeCenter; 
uniform vec3 cubeHalfSize; 
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
float cubeOcclusion(vec3 origin, vec3 direction) {
  vec2 hit = intersectCube(origin, direction, cubeCenter - cubeHalfSize, cubeCenter + cubeHalfSize);
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
 *      *
 *      * Method:
 *      * 1. Compute vector from surface point to sphere center (normalized by radius)
 *      * 2. Cross product with light direction gives "perpendicular area"
 *      * 3. This area metric indicates how much of the sphere subtends the light
 *      * 4. Sigmoid smoothstep creates smooth penumbra transition
 */
    vec3 dir = (sphereCenter - newPos) / sphereRadius; 
    vec3 area = cross(dir, refractedLight); 
    float shadow = dot(area, area); 

    
    float dist = dot(dir, -refractedLight);

    
    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);

    
    shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);

    
    shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
    gl_FragColor.g = shadow;

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

    float occlusion = 0.0;
    const float spread = 0.025; 

    
    for (int x = -1; x <= 1; x++) {
      for (int y = -1; y <= 1; y++) {
        vec3 sampleOrigin = newPos + right * float(x) * spread + up * float(y) * spread;
        occlusion += cubeOcclusion(sampleOrigin, shadowRay);
      }
    }
    gl_FragColor.g = 1.0 - occlusion / 9.0; 

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
}`,G0=`precision highp float;

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
}`,W0=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

uniform vec3 light;
uniform vec3 sphereCenter;
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;
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
float cubeOcclusion(vec3 origin, vec3 direction) {
  vec2 hit = intersectCube(origin, direction, cubeCenter - cubeHalfSize, cubeCenter + cubeHalfSize);
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
    
    vec3 dir = (sphereCenter - newPos) / sphereRadius;
    vec3 area = cross(dir, refractedLight);
    float shadow = dot(area, area);
    float dist = dot(dir, -refractedLight);
    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
    shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);
    shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
    gl_FragColor.g = shadow;
  } else if (cubeEnabled) {
    
    vec3 shadowRay = -refractedLight;
    vec3 right = normalize(cross(shadowRay, vec3(0.0, 1.0, 0.0)));
    vec3 up = normalize(cross(right, shadowRay));
    float occlusion = 0.0;
    const float spread = 0.025;

    for (int x = -1; x <= 1; x++) {
      for (int y = -1; y <= 1; y++) {
        vec3 sampleOrigin = newPos + right * float(x) * spread + up * float(y) * spread;
        occlusion += cubeOcclusion(sampleOrigin, shadowRay);
      }
    }
    gl_FragColor.g = 1.0 - occlusion / 9.0;
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
}`;class X0{constructor(e,t,n){U(this,"texture");U(this,"target");U(this,"scene",new ba);U(this,"camera",new gi(-1,1,1,-1,0,1));U(this,"mesh");U(this,"boxMaterial");U(this,"roundedBoxMaterial",null);this.renderer=e,this.state=t,this.objectShadowTexture=n,this.target=new Lt(1024,1024,{minFilter:ot,magFilter:ot,format:Ut}),this.texture=this.target.texture,this.boxMaterial=new ct({vertexShader:k0,fragmentShader:V0,uniforms:{light:{value:t.lightDirection.clone()},water:{value:null},objectShadowTex:{value:n},...t.createUniforms()},blending:an,side:Kt,depthTest:!1,depthWrite:!1}),this.mesh=new pt(new pi(2,2,200,200),this.boxMaterial),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}setPoolShape(e,t,n,i,s){e==="Box"?(this.camera.left=-1,this.camera.right=1,this.camera.top=1,this.camera.bottom=-1,this.camera.updateProjectionMatrix(),this.mesh.material=this.boxMaterial):(this.camera.left=-n,this.camera.right=n,this.camera.top=s,this.camera.bottom=-s,this.camera.updateProjectionMatrix(),this.roundedBoxMaterial?(this.roundedBoxMaterial.uniforms.cornerRadius.value=t,this.roundedBoxMaterial.uniforms.poolWidth.value=n,this.roundedBoxMaterial.uniforms.poolHeight.value=i,this.roundedBoxMaterial.uniforms.poolLength.value=s):this.roundedBoxMaterial=new ct({vertexShader:G0,fragmentShader:W0,uniforms:{light:{value:this.state.lightDirection.clone()},water:{value:null},objectShadowTex:{value:this.objectShadowTexture},...this.state.createUniforms(),cornerRadius:{value:t},poolWidth:{value:n},poolHeight:{value:i},poolLength:{value:s}},blending:an,side:Kt,depthTest:!1,depthWrite:!1}),this.mesh.material=this.roundedBoxMaterial)}update(e){const t=this.mesh.material;t.uniforms.water.value=e.textureA.texture,t.uniforms.light.value.copy(this.state.lightDirection),this.state.syncUniforms(t),t.uniformsNeedUpdate=!0,this.renderer.setRenderTarget(this.target),this.renderer.setClearColor(0,1),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}const j0=`
precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

uniform vec3 light;
uniform float poolWidth;
uniform float poolLength;

void main() {
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 refractedLight = refract(-normalize(light), vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec2 projected = 0.75 * (worldPosition.xz - worldPosition.y * refractedLight.xz / refractedLight.y);
  gl_Position = vec4(projected.x / poolWidth, projected.y / poolLength, 0.0, 1.0);
}
`,K0=`
precision highp float;

void main() {
  gl_FragColor = vec4(1.0);
}
`;class q0{constructor(e,t){U(this,"reflectionTarget");U(this,"clippedReflectionTarget");U(this,"refractionTarget");U(this,"shadowTarget");U(this,"reflectionViewProjectionMatrix",new Le);U(this,"viewProjectionMatrix",new Le);U(this,"reflectionCamera",new Ft);U(this,"shadowCamera",new gi(-1,1,1,-1,0,1));U(this,"shadowMaterial");U(this,"clearColor",new Ce);U(this,"previousClearColor",new Ce);this.renderer=e,this.lightDirection=t;const n={minFilter:ot,magFilter:ot,format:Ut,depthBuffer:!0,stencilBuffer:!1};this.reflectionTarget=new Lt(512,512,n),this.clippedReflectionTarget=new Lt(512,512,n),this.refractionTarget=new Lt(512,512,n),this.shadowTarget=new Lt(1024,1024,{minFilter:ot,magFilter:ot,format:Ut,depthBuffer:!1,stencilBuffer:!1}),this.shadowMaterial=new ct({vertexShader:j0,fragmentShader:K0,uniforms:{light:{value:t.clone()},poolWidth:{value:1},poolLength:{value:1}},depthTest:!1,depthWrite:!1,side:Kt})}setPoolBounds(e,t){this.shadowMaterial.uniforms.poolWidth.value=e,this.shadowMaterial.uniforms.poolLength.value=t}setSize(e,t){const n=Math.min(1,1024/Math.max(e,t));this.reflectionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n))),this.clippedReflectionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n))),this.refractionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n)))}update(e,t,n){var s,o,a;if(this.updateViewProjection(t),!n){this.withTransparentClear(()=>{this.clearTarget(this.reflectionTarget),this.clearTarget(this.clippedReflectionTarget),this.clearTarget(this.refractionTarget),this.clearTarget(this.shadowTarget)});return}const i=this.collectMaterials(n);for(const l of i)(s=l.uniforms)!=null&&s.isTexturePass&&(l.uniforms.isTexturePass.value=!0);this.withOnlyObjectVisible(e,n,()=>{this.withTransparentClear(()=>{this.renderRefraction(e,t,i),this.renderReflection(e,t,i),this.renderClippedReflection(e,i),this.renderShadow(e)})});for(const l of i)(o=l.uniforms)!=null&&o.isTexturePass&&(l.uniforms.isTexturePass.value=!1),(a=l.uniforms)!=null&&a.texturePassMode&&(l.uniforms.texturePassMode.value=0)}updateViewProjection(e){e.updateMatrixWorld(),this.viewProjectionMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)}renderRefraction(e,t,n){this.setTexturePassMode(n,1),this.renderer.setRenderTarget(this.refractionTarget),this.renderer.clear(),this.renderer.render(e,t)}renderReflection(e,t,n){const i=new R,s=new R,o=new R;t.getWorldPosition(i),t.getWorldDirection(s),o.copy(i).add(s),this.reflectionCamera.copy(t),this.reflectionCamera.position.set(i.x,-i.y,i.z),this.reflectionCamera.up.set(t.up.x,-t.up.y,t.up.z),this.reflectionCamera.lookAt(o.x,-o.y,o.z),this.reflectionCamera.updateMatrixWorld(),this.reflectionViewProjectionMatrix.multiplyMatrices(this.reflectionCamera.projectionMatrix,this.reflectionCamera.matrixWorldInverse),this.setTexturePassMode(n,1),this.renderer.setRenderTarget(this.reflectionTarget),this.renderer.clear(),this.renderer.render(e,this.reflectionCamera)}renderClippedReflection(e,t){this.setTexturePassMode(t,2),this.renderer.setRenderTarget(this.clippedReflectionTarget),this.renderer.clear(),this.renderer.render(e,this.reflectionCamera)}renderShadow(e){this.shadowMaterial.uniforms.light.value.copy(this.lightDirection),this.shadowMaterial.uniformsNeedUpdate=!0;const t=e.overrideMaterial;e.overrideMaterial=this.shadowMaterial,this.renderer.setRenderTarget(this.shadowTarget),this.renderer.clear(),this.renderer.render(e,this.shadowCamera),e.overrideMaterial=t}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.clear()}withTransparentClear(e){const t=this.renderer.getRenderTarget();this.renderer.getClearColor(this.previousClearColor);const n=this.renderer.getClearAlpha();this.renderer.setClearColor(this.clearColor,0),e(),this.renderer.setRenderTarget(t),this.renderer.setClearColor(this.previousClearColor,n)}withOnlyObjectVisible(e,t,n){const i=[];e.traverse(s=>{s!==e&&!this.isObjectOrDescendant(s,t)&&(i.push([s,s.visible]),s.visible=!1)}),n();for(const[s,o]of i)s.visible=o}isObjectOrDescendant(e,t){for(let n=e;n;n=n.parent)if(n===t)return!0;return!1}setTexturePassMode(e,t){var n;for(const i of e)(n=i.uniforms)!=null&&n.texturePassMode&&(i.uniforms.texturePassMode.value=t,i.uniformsNeedUpdate=!0)}collectMaterials(e){const t=[];return e.traverse(n=>{n instanceof pt&&n.material instanceof ct&&t.push(n.material)}),t}}var Y0=`const float poolHeight = 1.0; 

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
}`,$0=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float poolHeight = 1.0;
const float torusKnotShadowRadius = 0.13;

uniform vec3 light; 
uniform vec3 sphereCenter; 
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter; 
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter; 
uniform bool torusKnotEnabled;
uniform vec3 meshCenter; 
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
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
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
}`,Z0=`varying vec3 vPosition; 

void main() {
  
  vPosition = position.xyz;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,J0=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;
uniform vec3 sphereCenter;
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter;
uniform bool torusKnotEnabled;
uniform vec3 meshCenter;
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
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
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
}`;const Q0=0;function ev(r,e,t,n){const i=new kt,s=Math.min(r,Math.max(0,Math.min(e,n)-Q0)),o=[],a=[],l=[],c=-t,u=2/12,d=e-s,h=n-s,f=16,g=4*f,b=[];for(let _=0;_<4;_++){let S=0,M=0,A=0;_===0?(S=d,M=h,A=0):_===1?(S=-d,M=h,A=Math.PI/2):_===2?(S=-d,M=-h,A=Math.PI):(S=d,M=-h,A=1.5*Math.PI);for(let E=0;E<f;E++){const C=A+E/f*(Math.PI/2),x=S+s*Math.cos(C),w=M+s*Math.sin(C);b.push(new R(x,c,w))}}o.push(0,c,0),a.push(0,1,0);for(let _=0;_<g;_++){const S=b[_];o.push(S.x,S.y,S.z),a.push(0,1,0)}for(let _=0;_<g;_++){const S=(_+1)%g;l.push(0,S+1,_+1)}const m=[];for(let _=0;_<g;_++){const S=b[_],M=new R;if(s>0){const A=Math.sign(S.x)*d,E=Math.sign(S.z)*h;M.set(S.x-A,0,S.z-E).normalize().negate()}else Math.abs(S.x)>=e-.001?M.set(-Math.sign(S.x),0,0):M.set(0,0,-Math.sign(S.z));m.push(M)}const p=o.length/3;for(let _=0;_<g;_++){const S=b[_],M=m[_];o.push(S.x,c,S.z),a.push(M.x,M.y,M.z),o.push(S.x,u,S.z),a.push(M.x,M.y,M.z)}for(let _=0;_<g;_++){const S=(_+1)%g,M=p+2*_,A=p+2*_+1,E=p+2*S,C=p+2*S+1;l.push(M,E,C),l.push(M,C,A)}return i.setAttribute("position",new Et(o,3)),i.setAttribute("normal",new Et(a,3)),i.setIndex(l),i}class tv{constructor(e,t,n){U(this,"mesh");U(this,"boxGeometry");U(this,"boxMaterial");U(this,"roundedBoxGeometry",null);U(this,"roundedBoxMaterial",null);this.tileTexture=e,this.causticTexture=t,this.state=n,this.boxMaterial=new ct({vertexShader:Y0,fragmentShader:$0,uniforms:{light:{value:n.lightDirection.clone()},...n.createUniforms(),tiles:{value:e},causticTex:{value:t},water:{value:null}},side:$t,depthTest:!0,depthWrite:!0}),this.boxGeometry=this.createGeometry(),this.mesh=new pt(this.boxGeometry,this.boxMaterial),this.mesh.frustumCulled=!1}setPoolShape(e,t,n,i,s){e==="Box"?(this.mesh.geometry=this.boxGeometry,this.mesh.material=this.boxMaterial):(this.roundedBoxGeometry&&this.roundedBoxGeometry.dispose(),this.roundedBoxGeometry=ev(t,n,i,s),this.roundedBoxMaterial?(this.roundedBoxMaterial.uniforms.cornerRadius.value=t,this.roundedBoxMaterial.uniforms.poolWidth.value=n,this.roundedBoxMaterial.uniforms.poolHeight.value=i,this.roundedBoxMaterial.uniforms.poolLength.value=s):this.roundedBoxMaterial=new ct({vertexShader:Z0,fragmentShader:J0,uniforms:{light:{value:this.state.lightDirection.clone()},...this.state.createUniforms(),tiles:{value:this.tileTexture},causticTex:{value:this.causticTexture},water:{value:null},cornerRadius:{value:t},poolWidth:{value:n},poolHeight:{value:i},poolLength:{value:s}},side:$t,depthTest:!0,depthWrite:!0}),this.mesh.geometry=this.roundedBoxGeometry,this.mesh.material=this.roundedBoxMaterial)}prepare(e){const t=this.mesh.material;t.uniforms.water.value=e.textureA.texture,t.uniforms.light.value.copy(this.state.lightDirection),this.state.syncUniforms(t),t.uniformsNeedUpdate=!0}createGeometry(){const e=new fi(2,2,2),t=e.attributes.position,n=e.index,i=[];for(let s=0;s<n.count;s+=3){const o=n.getX(s),a=n.getX(s+1),l=n.getX(s+2);t.getY(o)<0&&t.getY(a)<0&&t.getY(l)<0||i.push(o,a,l)}return e.setIndex(i),e}}var nv=`uniform sampler2D water;

varying vec3 vPosition;

void main() {
  
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  
  
  vPosition = position.xzy;

  
  vPosition.y += info.r;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`,iv=`precision highp float;

const float IOR_AIR = 1.0; 
const float IOR_WATER = 1.333; 

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25); 
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0); 

const float poolHeight = 1.0; 
const float torusKnotShadowRadius = 0.13; 

uniform vec3 light;
uniform vec3 sphereCenter;
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter;
uniform bool torusKnotEnabled;
uniform vec3 meshCenter;
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
 * Traces a ray to intersect the Torus Knot SDF.
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
vec3 getSphereColor(vec3 point) {
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
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0); 
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0); 
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0); 

  
  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;

  
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
vec3 getCubeColor(vec3 point) {
  vec3 local = (point - cubeCenter) / cubeHalfSize;
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
vec3 getTorusKnotColor(vec3 point) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);
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
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
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

  
  float sphereDistance = sphereEnabled
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)
    : 1.0e6;

  vec2 cubeIntersection = intersectCube(
    origin,
    ray,
    cubeCenter - cubeHalfSize,
    cubeCenter + cubeHalfSize
  );
  bool cubeHit =
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
  float cubeDistance = cubeHit
    ? cubeIntersection.x > 0.0
      ? cubeIntersection.x
      : cubeIntersection.y > 0.0
        ? cubeIntersection.y
        : 1.0e6
    : 1.0e6;

  
  float torusKnotDistance =
    torusKnotEnabled && ray.y > 0.0
      ? intersectTorusKnot(origin, ray, torusKnotCenter)
      : 1.0e6;

  
  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);

  if (objectDistance < 1.0e6) {
    
    vec3 hit = origin + ray * objectDistance;
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit);
    } else {
      color = getTorusKnotColor(hit);
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
    vec4 refractedObject = sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
    vec4 reflectedObject = sampleObjectReflection(vPosition, reflectedRay, torusKnotCenter, 0.31);
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  } else if (meshEnabled) {
    vec4 refractedObject = sampleObjectRefraction(
      vPosition,
      refractedRay,
      meshCenter,
      meshBoundingRadius
    );
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
    
    vec4 reflectedObject = sampleProjectedTexture(
      objectClippedReflectionTex,
      reflectionViewProjectionMatrix,
      vPosition
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  }

  
  gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
}`,rv=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25); 
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0); 
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;
uniform vec3 sphereCenter;
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter;
uniform bool torusKnotEnabled;
uniform vec3 meshCenter;
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

vec3 getTorusKnotNormal(vec3 p, vec3 center) {
  const float eps = 0.001;
  vec3 n = vec3(
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)
  );
  return normalize(n);
}

vec3 getSphereColor(vec3 point) {
  vec3 color = vec3(0.5);
  color *= 1.0 - 0.6 / pow((poolWidth + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
  color *= 1.0 - 0.6 / pow((poolLength + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;
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

vec3 getCubeColor(vec3 point) {
  vec3 local = (point - cubeCenter) / cubeHalfSize;
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

vec3 getTorusKnotColor(vec3 point) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);
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
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
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

  
  float sphereDistance = sphereEnabled
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)
    : 1.0e6;
  vec2 cubeIntersection = intersectCube(
    origin,
    ray,
    cubeCenter - cubeHalfSize,
    cubeCenter + cubeHalfSize
  );
  bool cubeHit =
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
  float cubeDistance = cubeHit
    ? cubeIntersection.x > 0.0
      ? cubeIntersection.x
      : cubeIntersection.y > 0.0
        ? cubeIntersection.y
        : 1.0e6
    : 1.0e6;
  float torusKnotDistance =
    torusKnotEnabled && ray.y > 0.0
      ? intersectTorusKnot(origin, ray, torusKnotCenter)
      : 1.0e6;

  
  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);
  if (objectDistance < 1.0e6) {
    vec3 hit = origin + ray * objectDistance;
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit);
    } else {
      color = getTorusKnotColor(hit);
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
    vec4 refractedObject = sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
    vec4 reflectedObject = sampleObjectReflection(vPosition, reflectedRay, torusKnotCenter, 0.31);
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  } else if (meshEnabled) {
    vec4 refractedObject = sampleObjectRefraction(
      vPosition,
      refractedRay,
      meshCenter,
      meshBoundingRadius
    );
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
    vec4 reflectedObject = sampleProjectedTexture(
      objectClippedReflectionTex,
      reflectionViewProjectionMatrix,
      vPosition
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  }

  
  gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
}`,sv=`uniform sampler2D water;

varying vec3 vPosition;

void main() {
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  
  vPosition = position.xzy;

  
  vPosition.y += info.r;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`,ov=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float poolHeight = 1.0;
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;
uniform vec3 sphereCenter;
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter;
uniform bool torusKnotEnabled;
uniform vec3 meshCenter;
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
 * Traces a ray to intersect the Torus Knot SDF.
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
vec3 getSphereColor(vec3 point) {
  vec3 color = vec3(0.5);
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;
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
vec3 getCubeColor(vec3 point) {
  vec3 local = (point - cubeCenter) / cubeHalfSize;
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
vec3 getTorusKnotColor(vec3 point) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);
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
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
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
  float sphereDistance = sphereEnabled
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)
    : 1.0e6;
  vec2 cubeIntersection = intersectCube(
    origin,
    ray,
    cubeCenter - cubeHalfSize,
    cubeCenter + cubeHalfSize
  );
  bool cubeHit =
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
  float cubeDistance = cubeHit
    ? cubeIntersection.x > 0.0
      ? cubeIntersection.x
      : cubeIntersection.y > 0.0
        ? cubeIntersection.y
        : 1.0e6
    : 1.0e6;
  float torusKnotDistance =
    torusKnotEnabled && ray.y > 0.0
      ? intersectTorusKnot(origin, ray, torusKnotCenter)
      : 1.0e6;

  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);
  if (objectDistance < 1.0e6) {
    vec3 hit = origin + ray * objectDistance;
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit);
    } else {
      color = getTorusKnotColor(hit);
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
    refractedObject = max(
      refractedObject,
      sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31)
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
  } else if (meshEnabled) {
    vec4 reflectedObject = sampleObjectReflection(
      vPosition,
      reflectedRay,
      meshCenter,
      meshBoundingRadius
    );
    vec4 refractedObject = sampleObjectRefraction(
      vPosition,
      refractedRay,
      meshCenter,
      meshBoundingRadius
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
  }

  
  gl_FragColor = vec4(
    mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)),
    1.0
  );
}`,av=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;
uniform vec3 sphereCenter;
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter;
uniform bool torusKnotEnabled;
uniform vec3 meshCenter;
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

vec3 getTorusKnotNormal(vec3 p, vec3 center) {
  const float eps = 0.001;
  vec3 n = vec3(
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)
  );
  return normalize(n);
}

vec3 getSphereColor(vec3 point) {
  vec3 color = vec3(0.5);
  color *= 1.0 - 0.6 / pow((poolWidth + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
  color *= 1.0 - 0.6 / pow((poolLength + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;
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

vec3 getCubeColor(vec3 point) {
  vec3 local = (point - cubeCenter) / cubeHalfSize;
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

vec3 getTorusKnotColor(vec3 point) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);
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
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
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
  float sphereDistance = sphereEnabled
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)
    : 1.0e6;
  vec2 cubeIntersection = intersectCube(
    origin,
    ray,
    cubeCenter - cubeHalfSize,
    cubeCenter + cubeHalfSize
  );
  bool cubeHit =
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
  float cubeDistance = cubeHit
    ? cubeIntersection.x > 0.0
      ? cubeIntersection.x
      : cubeIntersection.y > 0.0
        ? cubeIntersection.y
        : 1.0e6
    : 1.0e6;
  float torusKnotDistance =
    torusKnotEnabled && ray.y > 0.0
      ? intersectTorusKnot(origin, ray, torusKnotCenter)
      : 1.0e6;

  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);
  if (objectDistance < 1.0e6) {
    vec3 hit = origin + ray * objectDistance;
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit);
    } else {
      color = getTorusKnotColor(hit);
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
    refractedObject = max(
      refractedObject,
      sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31)
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
  } else if (meshEnabled) {
    vec4 reflectedObject = sampleObjectReflection(
      vPosition,
      reflectedRay,
      meshCenter,
      meshBoundingRadius
    );
    vec4 refractedObject = sampleObjectRefraction(
      vPosition,
      refractedRay,
      meshCenter,
      meshBoundingRadius
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
  }

  gl_FragColor = vec4(
    mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)),
    1.0
  );
}`,mc=`uniform sampler2D water;

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
}`;class lv{constructor(e,t,n,i,s,o,a){U(this,"aboveMesh");U(this,"belowMesh");U(this,"aboveMaterial");U(this,"belowMaterial");U(this,"roundedBoxAboveMaterial",null);U(this,"roundedBoxBelowMaterial",null);this.tileTexture=e,this.cubemap=t,this.causticTexture=n,this.objectReflectionTexture=i,this.objectClippedReflectionTexture=s,this.objectRefractionTexture=o,this.state=a,this.aboveMaterial=this.createMaterial(nv,iv,Ot,e,t,n,i,s,o),this.belowMaterial=this.createMaterial(sv,ov,$t,e,t,n,i,s,o);const l=new pi(2,2,200,200);this.aboveMesh=new pt(l,this.aboveMaterial),this.belowMesh=new pt(l.clone(),this.belowMaterial),this.aboveMesh.frustumCulled=!1,this.belowMesh.frustumCulled=!1}setPoolShape(e,t,n,i,s){e==="Box"?(this.aboveMesh.material=this.aboveMaterial,this.belowMesh.material=this.belowMaterial):(this.roundedBoxAboveMaterial?(this.roundedBoxAboveMaterial.uniforms.cornerRadius.value=t,this.roundedBoxAboveMaterial.uniforms.poolWidth.value=n,this.roundedBoxAboveMaterial.uniforms.poolHeight.value=i,this.roundedBoxAboveMaterial.uniforms.poolLength.value=s,this.roundedBoxBelowMaterial.uniforms.cornerRadius.value=t,this.roundedBoxBelowMaterial.uniforms.poolWidth.value=n,this.roundedBoxBelowMaterial.uniforms.poolHeight.value=i,this.roundedBoxBelowMaterial.uniforms.poolLength.value=s):(this.roundedBoxAboveMaterial=this.createMaterial(mc,rv,Ot,this.tileTexture,this.cubemap,this.causticTexture,this.objectReflectionTexture,this.objectClippedReflectionTexture,this.objectRefractionTexture),this.roundedBoxAboveMaterial.uniforms.cornerRadius={value:t},this.roundedBoxAboveMaterial.uniforms.poolWidth={value:n},this.roundedBoxAboveMaterial.uniforms.poolHeight={value:i},this.roundedBoxAboveMaterial.uniforms.poolLength={value:s},this.roundedBoxBelowMaterial=this.createMaterial(mc,av,$t,this.tileTexture,this.cubemap,this.causticTexture,this.objectReflectionTexture,this.objectClippedReflectionTexture,this.objectRefractionTexture),this.roundedBoxBelowMaterial.uniforms.cornerRadius={value:t},this.roundedBoxBelowMaterial.uniforms.poolWidth={value:n},this.roundedBoxBelowMaterial.uniforms.poolHeight={value:i},this.roundedBoxBelowMaterial.uniforms.poolLength={value:s}),this.aboveMesh.material=this.roundedBoxAboveMaterial,this.belowMesh.material=this.roundedBoxBelowMaterial)}prepare(e,t,n){const i=new R;t.getWorldPosition(i),this.prepareMaterial(this.aboveMesh.material,e,i,n),this.prepareMaterial(this.belowMesh.material,e,i,n)}createMaterial(e,t,n,i,s,o,a,l,c){return new ct({vertexShader:e,fragmentShader:t,uniforms:{light:{value:this.state.lightDirection.clone()},...this.state.createUniforms(),tiles:{value:i},causticTex:{value:o},objectReflectionTex:{value:a},objectClippedReflectionTex:{value:l},objectRefractionTex:{value:c},viewProjectionMatrix:{value:new Le},reflectionViewProjectionMatrix:{value:new Le},water:{value:null},sky:{value:s},eye:{value:new R}},side:n,depthTest:!0,depthWrite:!0})}prepareMaterial(e,t,n,i){e.uniforms.water.value=t.textureA.texture,e.uniforms.eye.value.copy(n),e.uniforms.light.value.copy(this.state.lightDirection),e.uniforms.viewProjectionMatrix.value.copy(i.viewProjectionMatrix),e.uniforms.reflectionViewProjectionMatrix.value.copy(i.reflectionViewProjectionMatrix),this.state.syncUniforms(e),e.uniformsNeedUpdate=!0}}class cv{constructor(){U(this,"lightDirection",new R(2,2,-1).normalize());U(this,"sphereCenter",new R);U(this,"sphereRadius",.25);U(this,"sphereEnabled",!1);U(this,"cubeCenter",new R);U(this,"cubeHalfSize",new R(.25,.25,.25));U(this,"cubeEnabled",!1);U(this,"torusKnotCenter",new R);U(this,"torusKnotEnabled",!1);U(this,"meshCenter",new R);U(this,"meshBoundingRadius",.25);U(this,"meshShadowRadius",.25);U(this,"meshEnabled",!1)}apply(e){this.sphereEnabled=!1,this.cubeEnabled=!1,this.torusKnotEnabled=!1,this.meshEnabled=!1,e.kind==="sphere"?(this.sphereCenter.copy(e.center),this.sphereRadius=e.radius,this.sphereEnabled=!0):e.kind==="box"?(this.cubeCenter.copy(e.center),this.cubeHalfSize.copy(e.halfSize),this.cubeEnabled=!0):e.kind==="torusknot"?(this.torusKnotCenter.copy(e.center),this.torusKnotEnabled=!0):e.kind==="mesh"&&(this.meshCenter.copy(e.center),this.meshBoundingRadius=e.boundingRadius,this.meshShadowRadius=e.shadowRadius??e.boundingRadius,this.meshEnabled=!0)}createUniforms(){return{sphereCenter:{value:this.sphereCenter.clone()},sphereRadius:{value:this.sphereRadius},sphereEnabled:{value:this.sphereEnabled},cubeCenter:{value:this.cubeCenter.clone()},cubeHalfSize:{value:this.cubeHalfSize.clone()},cubeEnabled:{value:this.cubeEnabled},torusKnotCenter:{value:this.torusKnotCenter.clone()},torusKnotEnabled:{value:this.torusKnotEnabled},meshCenter:{value:this.meshCenter.clone()},meshBoundingRadius:{value:this.meshBoundingRadius},meshShadowRadius:{value:this.meshShadowRadius},meshEnabled:{value:this.meshEnabled}}}syncUniforms(e){e.uniforms.sphereCenter.value.copy(this.sphereCenter),e.uniforms.sphereRadius.value=this.sphereRadius,e.uniforms.sphereEnabled.value=this.sphereEnabled,e.uniforms.cubeCenter.value.copy(this.cubeCenter),e.uniforms.cubeHalfSize.value.copy(this.cubeHalfSize),e.uniforms.cubeEnabled.value=this.cubeEnabled,e.uniforms.torusKnotCenter&&e.uniforms.torusKnotCenter.value.copy(this.torusKnotCenter),e.uniforms.torusKnotEnabled&&(e.uniforms.torusKnotEnabled.value=this.torusKnotEnabled),e.uniforms.meshCenter&&e.uniforms.meshCenter.value.copy(this.meshCenter),e.uniforms.meshBoundingRadius&&(e.uniforms.meshBoundingRadius.value=this.meshBoundingRadius),e.uniforms.meshShadowRadius&&(e.uniforms.meshShadowRadius.value=this.meshShadowRadius),e.uniforms.meshEnabled&&(e.uniforms.meshEnabled.value=this.meshEnabled)}}const uv=0;class hv{constructor(e,t,n){U(this,"lightDir");U(this,"objectRenderResources");U(this,"opticsState");U(this,"objectTextures");U(this,"caustics");U(this,"pool");U(this,"waterSurface");this.opticsState=new cv,this.lightDir=this.opticsState.lightDirection,this.objectTextures=new q0(e,this.lightDir),this.caustics=new X0(e,this.opticsState,this.objectTextures.shadowTarget.texture),this.objectRenderResources={lightDirection:this.lightDir,causticTexture:this.caustics.texture},this.pool=new tv(t,this.caustics.texture,this.opticsState),this.waterSurface=new lv(t,n,this.caustics.texture,this.objectTextures.reflectionTarget.texture,this.objectTextures.clippedReflectionTarget.texture,this.objectTextures.refractionTarget.texture,this.opticsState)}setSize(e,t){this.objectTextures.setSize(e,t)}updateCaustics(e){this.caustics.update(e)}updateObjectTextures(e,t,n){const i=this.opticsState.torusKnotEnabled||this.opticsState.meshEnabled;this.objectTextures.update(e,t,i?n:null)}renderPool(e){this.pool.prepare(e)}renderWater(e,t){this.waterSurface.prepare(e,t,{viewProjectionMatrix:this.objectTextures.viewProjectionMatrix,reflectionViewProjectionMatrix:this.objectTextures.reflectionViewProjectionMatrix})}setWaterOptics(e){this.opticsState.apply(e)}setPoolShape(e,t,n,i,s){const o=Math.max(0,Math.min(n,s)-uv),a=e==="Box"?t:Math.min(t,o);this.pool.setPoolShape(e,a,n,i,s),this.caustics.setPoolShape(e,a,n,i,s),this.waterSurface.setPoolShape(e,a,n,i,s),this.objectTextures.setPoolBounds(n,s)}getPoolMesh(){return this.pool.mesh}getWaterMesh(){return this.waterSurface.aboveMesh}getWaterMeshBack(){return this.waterSurface.belowMesh}markWaterOpticsHidden(){this.pool.mesh.userData.waterOpticsHidden=!0,this.waterSurface.aboveMesh.userData.waterOpticsHidden=!0,this.waterSurface.belowMesh.userData.waterOpticsHidden=!0}}const dv={kind:"none"},ss="None";class fv{constructor(e){U(this,"objects",new Map);U(this,"activeObject",null);U(this,"sharedPosition",new R);this.scene=e}register(e,t=!1){if(this.objects.has(e.name))throw new Error(`Simulation object "${e.name}" is already registered`);return this.objects.set(e.name,e),this.scene.add(e.mesh),t&&(this.activeObject=e,this.sharedPosition.copy(e.position)),this}get options(){return[ss,...this.objects.keys()]}get active(){return this.activeObject}get optics(){var e;return((e=this.activeObject)==null?void 0:e.optics)??dv}select(e,t,n=1,i=1,s=1){const o=e===ss?null:this.objects.get(e);if(e!==ss&&!o)throw new Error(`Unknown simulation object "${e}"`);o!==this.activeObject&&(this.activeObject&&(this.sharedPosition.copy(this.activeObject.position),this.activeObject.setEnabled(!1,t)),this.activeObject=o??null,this.activeObject&&(this.activeObject.position.copy(this.sharedPosition),this.activeObject.position.y=Math.max(this.activeObject.position.y,this.activeObject.floorY(i)),this.activeObject.moveBy(new R(0,0,0),n,i,s),this.activeObject.setEnabled(!0,t)))}update(e,t,n){var i;(i=this.activeObject)==null||i.update(e,t,n)}prepareRender(e,t,n,i){var s;(s=this.activeObject)==null||s.prepareRender(e,t,n,i)}}var pv=`uniform vec3 cubeCenter; 
uniform vec3 cubeHalfSize; 

varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {
  
  
  
  vPosition = cubeCenter + position.xyz * cubeHalfSize * 2.0;

  
  vNormal = normal;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`,mv=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

uniform float poolWidth;
uniform float poolLength;
uniform float poolHeight;

uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;

uniform sampler2D water; 
uniform sampler2D causticTex; 

varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {
  
  vec3 color = vec3(0.5);

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  
  float litFactor = max(0.0, dot(normalize(vNormal), -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  color *= 1.0 - aoStrength / pow((poolWidth + cubeHalfSize.x - abs(vPosition.x)) / cubeHalfSize.x, 3.0);
  
  color *= 1.0 - aoStrength / pow((poolLength + cubeHalfSize.z - abs(vPosition.z)) / cubeHalfSize.z, 3.0);
  
  color *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + cubeHalfSize.y) / cubeHalfSize.y, 3.0);

  
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
}`;class gv{constructor(e){this.radius=e}move(e,t,n,i=1,s=1){e.moveSphere(t,n,this.radius,1,i,s)}}class vv{constructor(e){this.halfSize=e}move(e,t,n,i=1,s=1){e.moveCube(t,n,this.halfSize,i,s)}}class hu{constructor(e,t=1){U(this,"previousCenter",new R);U(this,"center",new R);this.spheres=e,this.displacementScale=t}move(e,t,n,i=1,s=1){for(const o of this.spheres)this.previousCenter.copy(t).add(o.offset),this.center.copy(n).add(o.offset),e.moveSphere(this.previousCenter,this.center,o.radius,this.displacementScale,i,s)}}function vs(r,e,t,n,i,s){if(n.dragging){t.set(0,0,0);return}if(!n.physicsEnabled)return;const o=n.densityEnabled?1/n.density:1.1,a=Vt.clamp((i-e.y)/(2*i),0,1);t.addScaledVector(n.gravity,r-o*r*a);const l=t.lengthSq();l>0&&t.addScaledVector(t.clone().normalize(),-a*r*l),e.addScaledVector(t,r);const c=s-n.poolHeight;e.y<c&&(e.y=c,t.y=Math.abs(t.y)*.7)}function _s(r,e,t,n,i,s,o,a){const l=t-s,c=i-o;r.add(e),r.x=Vt.clamp(r.x,-l,l),r.y=Vt.clamp(r.y,a-n,10),r.z=Vt.clamp(r.z,-c,c)}class _v{constructor(e){U(this,"name","Cube");U(this,"halfSize",new R(.25,.25,.25));U(this,"position",new R(-.4,this.halfSize.y-1,.2));U(this,"velocity",new R);U(this,"displacement",new vv(this.halfSize));U(this,"optics",{kind:"box",center:this.position,halfSize:this.halfSize});U(this,"mesh");U(this,"enabled",!1);U(this,"previousPosition",this.position.clone());U(this,"bounds",new cn);U(this,"material");this.resources=e,this.material=new ct({vertexShader:pv,fragmentShader:mv,uniforms:{light:{value:e.lightDirection.clone()},cubeCenter:{value:this.position.clone()},cubeHalfSize:{value:this.halfSize.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture}},depthTest:!0,depthWrite:!0}),this.mesh=new pt(new fi(1,1,1),this.material),this.mesh.frustumCulled=!1,this.mesh.visible=!1}floorY(e){return this.halfSize.y-e}setEnabled(e,t){if(e===this.enabled)return;const n=this.getInactivePosition();e?this.displacement.move(t,n,this.position):(this.displacement.move(t,this.position,n),this.velocity.set(0,0,0)),this.enabled=e,this.mesh.visible=e,this.previousPosition.copy(this.position)}syncPreviousPosition(){this.previousPosition.copy(this.position)}update(e,t,n){this.enabled&&(vs(e,this.position,this.velocity,t,this.halfSize.y,this.halfSize.y),this.displacement.move(n,this.previousPosition,this.position,t.poolWidth,t.poolLength),this.previousPosition.copy(this.position))}hitTest(e,t){return this.enabled?(this.bounds.set(this.position.clone().sub(this.halfSize),this.position.clone().add(this.halfSize)),new ji(e,t).intersectBox(this.bounds,new R)):null}moveBy(e,t=1,n=1,i=1){_s(this.position,e,t,n,i,this.halfSize.x,this.halfSize.z,this.halfSize.y)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.cubeCenter.value.copy(this.position),this.material.uniforms.cubeHalfSize.value.copy(this.halfSize),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0}getInactivePosition(){return new R(this.position.x,10,this.position.z)}}function gc(r,e){if(e===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Yo||e===Hc){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Yo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function xv(r){const e=new Map,t=new Map,n=r.clone();return du(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function du(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)du(r.children[n],e.children[n],t)}class bv extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ev(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new vc(t,ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new vc(t,ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bv(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=fr.extractUrlBase(e);o=fr.resolveURL(c,this.path)}else o=fr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Qc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fu){try{o[ke.KHR_BINARY_GLTF]=new zv(e)}catch(d){i&&i(d);return}s=JSON.parse(o[ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Jv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case ke.KHR_MATERIALS_UNLIT:o[d]=new Mv;break;case ke.KHR_DRACO_MESH_COMPRESSION:o[d]=new Hv(s,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:o[d]=new kv;break;case ke.KHR_MESH_QUANTIZATION:o[d]=new Vv;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function yv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function yt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Sv{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Rd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wd(u),c.distance=d;break;case"spot":c=new Td(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),mn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Mv{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ci}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(i)}}class Tv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Ev{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(s,s)}return Promise.all(i)}}class wv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Av{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Rv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Zt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ct)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Cv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Pv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(s[0],s[1],s[2],Zt),Promise.all(i)}}class Lv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class Dv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(s[0],s[1],s[2],Zt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ct)),Promise.all(i)}}class Iv{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Nv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return yt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Fv{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Uv{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Ov{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class vc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class Bv{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const b=new Le,m=new R,p=new Bn,_=new R(1,1,1),S=new Yh(g.geometry,g.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&_.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,b.compose(m,p,_));for(const M in l)if(M==="_COLOR_0"){const A=l[M];S.instanceColor=new Qo(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);ft.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const fu="glTF",ar=12,_c={JSON:1313821514,BIN:5130562};class zv{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ar,s=new DataView(e,ar);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===_c.JSON){const c=new Uint8Array(e,ar+o,a);this.content=n.decode(c)}else if(l===_c.BIN){const c=ar+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=ra[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=ra[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Oi[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const b=f.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}d(f)},a,c,Zt,h)})})}}class kv{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vv{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class pu extends Ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,b=g-c,m=-2*f+3*h,p=f-h,_=1-m,S=p-h+d;for(let M=0;M!==a;M++){const A=o[b+M+a],E=o[b+M+l]*u,C=o[g+M+a],x=o[g+M]*u;s[M]=_*A+S*E+m*C+p*x}return s}}const Gv=new Bn;class Wv extends pu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Gv.fromArray(s).normalize().toArray(s),s}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Oi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xc={9728:bt,9729:ot,9984:Ic,9985:Qr,9986:cr,9987:_n},bc={33071:vn,33648:os,10497:Zn},so={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ra={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xv={CUBICSPLINE:void 0,LINEAR:vr,STEP:gr},oo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ca({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$t})),r.DefaultMaterial}function ri(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kv(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;o.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function qv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yv(r){let e;const t=r.extensions&&r.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ao(t.attributes):e=r.indices+":"+ao(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ao(r.targets[n]);return e}function ao(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function sa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $v(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Zv=new Le;class Jv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Pa(this.options.manager):this.textureLoader=new Cd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ri(s,a,i),mn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(fr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=so[i.type],a=Oi[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ht(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=so[i.type],c=Oi[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(f&&f!==d){const p=Math.floor(h/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(_);S||(b=new c(a,p*f,i.count*f/u),S=new Vh(b,f/u),t.cache.add(_,S)),m=new ya(S,l,h%f/u,g)}else a===null?b=new c(i.count*l):b=new c(a,h,i.count*l),m=new Ht(b,l,g);if(i.sparse!==void 0){const p=so.SCALAR,_=Oi[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new _(o[1],S,i.sparse.count*p),E=new c(o[2],M,i.sparse.count*l);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,x=A.length;C<x;C++){const w=A[C];if(m.setX(w,E[C*l]),l>=2&&m.setY(w,E[C*l+1]),l>=3&&m.setZ(w,E[C*l+2]),l>=4&&m.setW(w,E[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=xc[h.magFilter]||ot,u.minFilter=xc[h.minFilter]||_n,u.wrapS=bc[h.wrapS]||Zn,u.wrapT=bc[h.wrapT]||Zn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==bt&&u.minFilter!==ot,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Pt(b);m.needsUpdate=!0,h(m)}),t.load(fr.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),mn(d,o),d.userData.mimeType=o.mimeType||$v(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new qc,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Kc,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ca}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ke.KHR_MATERIALS_UNLIT]){const d=i[ke.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Zt),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Ct)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Kt);const u=s.alphaMode||oo.OPAQUE;if(u===oo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===oo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ci&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==ci&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ci){const d=s.emissiveFactor;a.emissive=new Ce().setRGB(d[0],d[1],d[2],Zt)}return s.emissiveTexture!==void 0&&o!==ci&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),mn(d,s),t.associations.set(d,{materials:e}),s.extensions&&ri(i,d,s),d})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Yv(c),d=i[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=yc(new kt,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?jv(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const b=u[f],m=o[f];let p;const _=c[f];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new jh(b,_):new pt(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===en.TRIANGLE_STRIP?p.geometry=gc(p.geometry,Hc):m.mode===en.TRIANGLE_FAN&&(p.geometry=gc(p.geometry,Yo));else if(m.mode===en.LINES)p=new Qh(b,_);else if(m.mode===en.LINE_STRIP)p=new Ea(b,_);else if(m.mode===en.LINE_LOOP)p=new ed(b,_);else if(m.mode===en.POINTS)p=new td(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&qv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),mn(p,s),m.extensions&&ri(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&ri(i,d[0],s),d[0];const h=new Yn;s.extensions&&ri(i,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Vt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Le;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ma(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],b=d[3],m=d[4],p=[];for(let S=0,M=h.length;S<M;S++){const A=h[S],E=f[S],C=g[S],x=b[S],w=m[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const F=n._createAnimationTracks(A,E,C,x,w);if(F)for(let P=0;P<F.length;P++)p.push(F[P])}const _=new gd(s,void 0,p);return mn(_,i),_})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Zv)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,g=d[0];u.pivot=new R().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new jc:c.length>1?u=new Yn:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),mn(u,s),s.extensions&&ri(n,u,s),s.matrix!==void 0){const d=new Le;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Yn;n.name&&(s.name=i.createUniqueName(n.name)),mn(s,n),n.extensions&&ri(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++){const h=l[u];h.parent!==null?s.add(xv(h)):s.add(h)}const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof yn||h instanceof Pt)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}qn[s.path]===qn.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(qn[s.path]){case qn.weights:u=Gi;break;case qn.rotation:u=Wi;break;case qn.translation:case qn.scale:u=Xi;break;default:switch(n.itemSize){case 1:u=Gi;break;case 2:case 3:default:u=Xi;break}break}const d=i.interpolation!==void 0?Xv[i.interpolation]:vr,h=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const b=new u(l[f]+"."+qn[s.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),o.push(b)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sa(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Wi?Wv:pu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Qv(r,e,t){const n=e.attributes,i=new cn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){const u=sa(Oi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new R,l=new R;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const b=sa(Oi[h.componentType]);l.multiplyScalar(b)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new En;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function yc(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=ra[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ge.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),mn(r,e),Qv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Kv(r,e.targets,t):r})}var e_=`varying vec3 vPosition; 
varying vec3 vNormal; 
varying vec2 vUv; 

void main() {
  
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  
  
  vNormal = normalMatrix * normal;

  
  vUv = uv;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,t_=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

uniform float poolWidth;
uniform float poolLength;
uniform float poolHeight;

uniform vec3 meshCenter;

uniform sampler2D water; 
uniform sampler2D causticTex; 

uniform sampler2D modelTexture;

uniform int texturePassMode;

varying vec3 vPosition; 
varying vec3 vNormal; 
varying vec2 vUv; 

void main() {
  
  vec3 baseColor = texture2D(modelTexture, vUv).rgb;

  vec3 n = normalize(vNormal);

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  
  float litFactor = max(0.0, dot(n, -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(vPosition.x)) / 0.25, 3.0);
  
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(vPosition.z)) / 0.25, 3.0);
  
  baseColor *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + 0.25) / 0.25, 3.0);

  
  float diffuse = max(0.0, dot(-refractedLight, n)) * 0.6;

  
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
    
    diffuse *= caustic.r * 4.0;
  }

  
  vec3 color = baseColor * (0.4 + diffuse);

  
  if (vPosition.y < info.r) {
    color *= underwaterColor * 1.2;
  }

  gl_FragColor = vec4(color, 1.0);
}`;class n_{constructor(e){U(this,"name","Rubber Duck");U(this,"boundingRadius",.25);U(this,"floorClearance",.265);U(this,"position",new R(.4,this.floorClearance-1,-.2));U(this,"velocity",new R);U(this,"displacement");U(this,"optics",{kind:"mesh",center:this.position,boundingRadius:this.boundingRadius});U(this,"mesh");U(this,"enabled",!1);U(this,"previousPosition",this.position.clone());U(this,"material",null);U(this,"loaded",!1);this.resources=e,this.mesh=new Yn,this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.displacement=new hu(this.generateDisplacementSpheres(),.15),this.loadModel()}floorY(e){return this.floorClearance-e}generateDisplacementSpheres(){const e=[];return e.push({offset:new R(0,0,0),radius:.15}),e.push({offset:new R(0,.1,.1),radius:.08}),e.push({offset:new R(0,-.08,-.05),radius:.1}),e}async loadModel(){const e="/threejs-water/",t=new bv;try{const i=(await t.loadAsync(`${e}models/duck/Duck.gltf`)).scene,o=await new Pa().loadAsync(`${e}models/duck/DuckCM.png`);o.flipY=!1,this.material=new ct({vertexShader:e_,fragmentShader:t_,uniforms:{light:{value:this.resources.lightDirection.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},meshCenter:{value:this.position.clone()},water:{value:null},causticTex:{value:this.resources.causticTexture},modelTexture:{value:o},texturePassMode:{value:0}},depthTest:!0,depthWrite:!0}),i.traverse(f=>{f instanceof pt&&(f.material=this.material,f.frustumCulled=!1)});const a=new cn().setFromObject(i),l=a.getSize(new R),c=a.getCenter(new R),u=Math.max(l.x,l.y,l.z),h=this.boundingRadius*2/u;i.scale.setScalar(h),i.position.sub(c.multiplyScalar(h)),i.position.y-=a.min.y*h,this.mesh.add(i),this.loaded=!0}catch(n){console.error("Failed to load duck model:",n)}}setEnabled(e,t){if(e===this.enabled)return;const n=this.getInactivePosition();e?(this.position.y<=this.floorClearance-1&&(this.position.y=this.floorClearance-1),this.displacement.move(t,n,this.position),this.mesh.position.copy(this.position)):(this.displacement.move(t,this.position,n),this.mesh.position.copy(n),this.velocity.set(0,0,0)),this.enabled=e,this.mesh.visible=e&&this.loaded,this.previousPosition.copy(this.position)}syncPreviousPosition(){this.previousPosition.copy(this.position),this.mesh.position.copy(this.position)}update(e,t,n){this.enabled&&(!this.mesh.visible&&this.loaded&&(this.mesh.visible=!0),vs(e,this.position,this.velocity,t,this.boundingRadius,this.floorClearance),this.displacement.move(n,this.previousPosition,this.position,t.poolWidth,t.poolLength),this.previousPosition.copy(this.position),this.mesh.position.copy(this.position))}hitTest(e,t){if(!this.enabled||!this.loaded)return null;const n=e.clone().sub(this.position),i=t.lengthSq(),s=2*n.dot(t),o=n.lengthSq()-this.boundingRadius*this.boundingRadius,a=s*s-4*i*o;if(a<=0)return null;const l=(-s-Math.sqrt(a))/(2*i);return l>0?e.clone().addScaledVector(t,l):null}moveBy(e,t=1,n=1,i=1){_s(this.position,e,t,n,i,this.boundingRadius,this.boundingRadius,this.floorClearance),this.mesh.position.copy(this.position)}prepareRender(e,t=1,n=1,i=1){this.material&&(this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniforms.meshCenter.value.copy(this.position),this.material.uniformsNeedUpdate=!0)}getInactivePosition(){return new R(this.position.x,10,this.position.z)}}var i_=`uniform vec3 sphereCenter; 
uniform float sphereRadius; 

varying vec3 vPosition; 

void main() {
  
  
  vPosition = sphereCenter + position.xyz * sphereRadius;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`,r_=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

uniform vec3 sphereCenter;
uniform float sphereRadius;

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

  
  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec3 targetRefracted = refractedLight;

  
  
  float litFactor = max(0.0, dot(sphereNormal, -targetRefracted));
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  color *= 1.0 - aoStrength / pow((poolWidth + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
  
  color *= 1.0 - aoStrength / pow((poolLength + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
  
  color *= 1.0 - aoStrength / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  
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
}`;class s_{constructor(e){U(this,"name","Sphere");U(this,"position",new R(-.4,-.75,.2));U(this,"velocity",new R);U(this,"interactionRadius",.25);U(this,"displacement",new gv(this.interactionRadius));U(this,"optics",{kind:"sphere",center:this.position,radius:this.interactionRadius});U(this,"mesh");U(this,"enabled",!0);U(this,"previousPosition",this.position.clone());U(this,"material");this.resources=e,this.material=new ct({vertexShader:i_,fragmentShader:r_,uniforms:{light:{value:e.lightDirection.clone()},sphereCenter:{value:this.position.clone()},sphereRadius:{value:this.interactionRadius},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture}},depthTest:!0,depthWrite:!0}),this.mesh=new pt(new Aa(1,32,32),this.material),this.mesh.frustumCulled=!1}floorY(e){return this.interactionRadius-e}setEnabled(e,t){if(e===this.enabled)return;const n=this.getInactivePosition();e?this.displacement.move(t,n,this.position):(this.displacement.move(t,this.position,n),this.velocity.set(0,0,0)),this.enabled=e,this.mesh.visible=e,this.previousPosition.copy(this.position)}syncPreviousPosition(){this.previousPosition.copy(this.position)}update(e,t,n){this.enabled&&(vs(e,this.position,this.velocity,t,this.interactionRadius,this.interactionRadius),this.displacement.move(n,this.previousPosition,this.position,t.poolWidth,t.poolLength),this.previousPosition.copy(this.position))}hitTest(e,t){if(!this.enabled)return null;const n=e.clone().sub(this.position),i=t.lengthSq(),s=2*n.dot(t),o=n.lengthSq()-this.interactionRadius*this.interactionRadius,a=s*s-4*i*o;if(a<=0)return null;const l=(-s-Math.sqrt(a))/(2*i);return l>0?e.clone().addScaledVector(t,l):null}moveBy(e,t=1,n=1,i=1){_s(this.position,e,t,n,i,this.interactionRadius,this.interactionRadius,this.interactionRadius)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.sphereCenter.value.copy(this.position),this.material.uniforms.sphereRadius.value=this.interactionRadius,this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0}getInactivePosition(){return new R(this.position.x,10,this.position.z)}}var o_=`varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {
  
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  
  vNormal = normal;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,a_=`precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;

uniform vec3 torusKnotCenter;

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
}`;class l_{constructor(e){U(this,"name","TorusKnot");U(this,"boundingRadius",.31);U(this,"floorClearance",.13);U(this,"position",new R(-.4,this.floorClearance-1,.2));U(this,"velocity",new R);U(this,"displacement");U(this,"optics",{kind:"mesh",center:this.position,boundingRadius:this.boundingRadius,shadowRadius:.13});U(this,"mesh");U(this,"enabled",!1);U(this,"previousPosition",this.position.clone());U(this,"material");U(this,"raycaster",new nu);this.resources=e,this.material=new ct({vertexShader:o_,fragmentShader:a_,uniforms:{light:{value:e.lightDirection.clone()},torusKnotCenter:{value:this.position.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture},texturePassMode:{value:0}},depthTest:!0,depthWrite:!0});const t=new Ra(.17,.045,64,8);t.rotateX(Math.PI/2),this.mesh=new pt(t,this.material),this.mesh.frustumCulled=!1,this.mesh.visible=!1;const n=[],i=24,s=.17,o=.045,a=2,l=3;for(let c=0;c<i;c++){const u=c/i*Math.PI*2,d=s*(2+Math.cos(l*u))*.5,h=d*Math.cos(a*u),f=d*Math.sin(a*u),g=-s*Math.sin(l*u)*.5;n.push({offset:new R(h,g,f),radius:o*2})}this.displacement=new hu(n,.15)}floorY(e){return this.floorClearance-e}setEnabled(e,t){if(e===this.enabled)return;const n=this.getInactivePosition();e?(this.position.y<=this.boundingRadius-1&&(this.position.y=this.floorClearance-1),this.displacement.move(t,n,this.position),this.mesh.position.copy(this.position)):(this.displacement.move(t,this.position,n),this.mesh.position.copy(n),this.velocity.set(0,0,0)),this.enabled=e,this.mesh.visible=e,this.previousPosition.copy(this.position)}syncPreviousPosition(){this.previousPosition.copy(this.position),this.mesh.position.copy(this.position)}update(e,t,n){this.enabled&&(vs(e,this.position,this.velocity,t,this.boundingRadius,this.floorClearance),this.displacement.move(n,this.previousPosition,this.position,t.poolWidth,t.poolLength),this.previousPosition.copy(this.position),this.mesh.position.copy(this.position))}hitTest(e,t){if(!this.enabled)return null;this.mesh.position.copy(this.position),this.mesh.updateMatrixWorld(!0),this.raycaster.set(e,t);const n=this.raycaster.intersectObject(this.mesh);return n.length>0?n[0].point:null}moveBy(e,t=1,n=1,i=1){_s(this.position,e,t,n,i,this.boundingRadius,this.boundingRadius,this.floorClearance),this.mesh.position.copy(this.position)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.torusKnotCenter.value.copy(this.position),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0}getInactivePosition(){return new R(this.position.x,10,this.position.z)}}function c_(r,e){return new fv(r).register(new s_(e),!0).register(new _v(e)).register(new l_(e)).register(new n_(e))}var u_=`varying vec2 coord;

void main() {
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);
}`,h_=`precision highp float;

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
}`,d_=`varying vec2 coord;

void main() {
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);
}`,f_=`precision highp float;

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
}`,p_=`varying vec2 coord;

void main() {
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);
}`,m_=`precision highp float;

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
}`,Sc=`varying vec2 coord; 

void main() {
  
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);
}`,g_=`precision highp float;

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
}`,v_=`precision highp float;

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
}`;class __{constructor(e){U(this,"textureA");U(this,"textureB");U(this,"renderer");U(this,"plane");U(this,"camera");U(this,"scene");U(this,"dropMaterial");U(this,"updateMaterial");U(this,"normalMaterial");U(this,"sphereMaterial");U(this,"moveCubeMaterial");this.renderer=e;const t=256,i={type:this.getSimulationTextureType(),minFilter:bt,magFilter:bt,format:Ut,stencilBuffer:!1,depthBuffer:!1};this.textureA=new Lt(t,t,i),this.textureB=new Lt(t,t,i),this.camera=new gi(-1,1,1,-1,0,1),this.scene=new ba;const s=new pi(2,2);this.dropMaterial=new ct({vertexShader:u_,fragmentShader:h_,uniforms:{tInput:{value:null},center:{value:new He},radius:{value:0},strength:{value:0},poolWidth:{value:1},poolLength:{value:1}}}),this.updateMaterial=new ct({vertexShader:d_,fragmentShader:f_,uniforms:{tInput:{value:null},delta:{value:new He(1/t,1/t)},poolWidth:{value:1},poolLength:{value:1}}}),this.normalMaterial=new ct({vertexShader:p_,fragmentShader:m_,uniforms:{tInput:{value:null},delta:{value:new He(1/t,1/t)},poolWidth:{value:1},poolLength:{value:1}}}),this.sphereMaterial=new ct({vertexShader:Sc,fragmentShader:g_,uniforms:{tInput:{value:null},oldCenter:{value:new R},newCenter:{value:new R},radius:{value:0},displacementScale:{value:1},poolWidth:{value:1},poolLength:{value:1}}}),this.moveCubeMaterial=new ct({vertexShader:Sc,fragmentShader:v_,uniforms:{tInput:{value:null},oldCenter:{value:new R},newCenter:{value:new R},halfSize:{value:new R},poolWidth:{value:1},poolLength:{value:1}}}),this.plane=new pt(s,this.dropMaterial),this.scene.add(this.plane),this.clearTextures()}getSimulationTextureType(){return this.renderer.capabilities.isWebGL2&&this.renderer.extensions.has("EXT_color_buffer_float")&&this.renderer.extensions.has("OES_texture_float_linear")?Yt:Tn}clearTextures(){const e=this.renderer.getRenderTarget(),t=new Ce;this.renderer.getClearColor(t);const n=this.renderer.getClearAlpha();this.renderer.setClearColor(0,0),this.renderer.setRenderTarget(this.textureA),this.renderer.clear(),this.renderer.setRenderTarget(this.textureB),this.renderer.clear(),this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,n)}swapTextures(){const e=this.textureA;this.textureA=this.textureB,this.textureB=e}addDrop(e,t,n,i,s=1,o=1){this.plane.material=this.dropMaterial,this.dropMaterial.uniforms.tInput.value=this.textureA.texture,this.dropMaterial.uniforms.center.value.set(e,t),this.dropMaterial.uniforms.radius.value=n,this.dropMaterial.uniforms.strength.value=i,this.dropMaterial.uniforms.poolWidth.value=s,this.dropMaterial.uniforms.poolLength.value=o,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}moveSphere(e,t,n,i=1,s=1,o=1){this.plane.material=this.sphereMaterial,this.sphereMaterial.uniforms.tInput.value=this.textureA.texture,this.sphereMaterial.uniforms.oldCenter.value.copy(e),this.sphereMaterial.uniforms.newCenter.value.copy(t),this.sphereMaterial.uniforms.radius.value=n,this.sphereMaterial.uniforms.displacementScale.value=i,this.sphereMaterial.uniforms.poolWidth.value=s,this.sphereMaterial.uniforms.poolLength.value=o,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}moveCube(e,t,n,i=1,s=1){this.plane.material=this.moveCubeMaterial,this.moveCubeMaterial.uniforms.tInput.value=this.textureA.texture,this.moveCubeMaterial.uniforms.oldCenter.value.copy(e),this.moveCubeMaterial.uniforms.newCenter.value.copy(t),this.moveCubeMaterial.uniforms.halfSize.value.copy(n),this.moveCubeMaterial.uniforms.poolWidth.value=i,this.moveCubeMaterial.uniforms.poolLength.value=s,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}stepSimulation(e=1,t=1){this.plane.material=this.updateMaterial,this.updateMaterial.uniforms.tInput.value=this.textureA.texture,this.updateMaterial.uniforms.poolWidth.value=e,this.updateMaterial.uniforms.poolLength.value=t,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}updateNormals(e=1,t=1){this.plane.material=this.normalMaterial,this.normalMaterial.uniforms.tInput.value=this.textureA.texture,this.normalMaterial.uniforms.poolWidth.value=e,this.normalMaterial.uniforms.poolLength.value=t,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}}class x_{constructor(e){U(this,"mode",0);U(this,"previousHit",null);U(this,"dragPlaneNormal",null);U(this,"activePointerId",null);U(this,"touchPointers",new Map);U(this,"pinchDistance",null);U(this,"pinching",!1);U(this,"settingLightDirection",!1);U(this,"onPointerDown",e=>{if(!(e.pointerType==="mouse"&&e.button!==0)&&!(e.pointerType!=="touch"&&(this.activePointerId!==null||!e.isPrimary))&&!(e.pointerType==="touch"&&this.touchPointers.size>=2)){if(e.preventDefault(),this.dependencies.canvas.setPointerCapture(e.pointerId),e.pointerType==="touch"){if(this.touchPointers.set(e.pointerId,new He(e.clientX,e.clientY)),this.touchPointers.size===2){this.pinching=!0,this.pinchDistance=this.getPinchDistance(),this.activePointerId=null,this.dependencies.cameraController.stopInertia(),this.stopDrag();return}if(this.pinching||this.touchPointers.size>1)return}else if(this.activePointerId!==null)return;this.activePointerId=e.pointerId,this.startDrag(e.clientX,e.clientY,e.timeStamp)}});U(this,"onPointerMove",e=>{if(e.pointerType==="touch"&&this.touchPointers.has(e.pointerId)&&(this.touchPointers.get(e.pointerId).set(e.clientX,e.clientY),this.pinching&&this.pinchDistance!==null&&this.touchPointers.size>=2)){e.preventDefault();const t=this.getPinchDistance();t>0&&(this.dependencies.cameraController.zoomByScale(this.pinchDistance/t),this.pinchDistance=t,this.dependencies.controls.paused&&this.dependencies.draw());return}e.pointerId===this.activePointerId&&(e.preventDefault(),this.duringDrag(e.clientX,e.clientY,e.timeStamp))});U(this,"onPointerEnd",e=>this.finishPointer(e,!0));U(this,"onLostPointerCapture",e=>this.finishPointer(e,!1));U(this,"onWheel",e=>{e.preventDefault(),this.dependencies.cameraController.zoomByWheel(e.deltaY),this.dependencies.controls.paused&&this.dependencies.draw()});U(this,"onKeyDown",e=>{const{cameraController:t,renderer:n,water:i,controls:s,draw:o}=this.dependencies;e.code==="KeyL"?(this.settingLightDirection=!0,t.getLightDirection(n.lightDir),s.paused?o():n.updateCaustics(i)):e.code==="Space"&&!e.repeat?s.togglePaused():e.code==="KeyG"&&!e.repeat&&s.togglePhysics()});U(this,"onKeyUp",e=>{e.code==="KeyL"&&(this.settingLightDirection=!1)});this.dependencies=e}get draggingObject(){return this.mode===2}connect(){const{canvas:e}=this.dependencies;e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerEnd),e.addEventListener("pointercancel",this.onPointerEnd),e.addEventListener("lostpointercapture",this.onLostPointerCapture),e.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown,{capture:!0}),window.addEventListener("keyup",this.onKeyUp,{capture:!0})}update(e){this.dependencies.cameraController.update(e),this.syncLightDirection()}preparePausedDraw(){this.syncLightDirection()&&this.dependencies.controls.paused&&this.dependencies.renderer.updateCaustics(this.dependencies.water)}cancelDrag(){this.stopDrag()}getRay(e,t){const{canvas:n,camera:i}=this.dependencies,s=n.getBoundingClientRect(),o=new He((e-s.left)/s.width*2-1,-((t-s.top)/s.height)*2+1),a=new nu;return a.setFromCamera(o,i),{origin:a.ray.origin.clone(),direction:a.ray.direction.clone()}}startDrag(e,t,n){var g;const{cameraController:i,camera:s,objects:o,controls:a}=this.dependencies;i.stopInertia();const{origin:l,direction:c}=this.getRay(e,t),u=l.clone().addScaledVector(c,-l.y/c.y),d=((g=o.active)==null?void 0:g.hitTest(l,c))??null,h=a.poolShape==="Box"?1:a.poolWidth,f=a.poolShape==="Box"?1:a.poolLength;d?(this.mode=2,this.previousHit=d,this.dragPlaneNormal=new R(0,0,-1).applyQuaternion(s.quaternion).negate()):Math.abs(u.x)<h&&Math.abs(u.z)<f?(this.mode=1,this.duringDrag(e,t,n)):(this.mode=3,i.beginOrbit(e,t,n))}duringDrag(e,t,n){const{water:i,renderer:s,objects:o,cameraController:a,controls:l,draw:c}=this.dependencies,u=l.poolShape==="Box"?1:l.poolWidth,d=l.poolShape==="Box"?1:l.poolHeight,h=l.poolShape==="Box"?1:l.poolLength;if(this.mode===1){const{origin:f,direction:g}=this.getRay(e,t),b=f.clone().addScaledVector(g,-f.y/g.y);i.addDrop(b.x/u,b.z/h,.03,.01,u,h),l.paused&&(i.updateNormals(u,h),s.updateCaustics(i))}else if(this.mode===2){if(!this.previousHit||!this.dragPlaneNormal||!o.active)return;const{origin:f,direction:g}=this.getRay(e,t),b=-this.dragPlaneNormal.dot(f.clone().sub(this.previousHit))/this.dragPlaneNormal.dot(g),m=f.clone().addScaledVector(g,b);o.active.moveBy(m.clone().sub(this.previousHit),u,d,h),s.setWaterOptics(o.optics),this.previousHit=m,l.paused&&s.updateCaustics(i)}else this.mode===3&&a.orbitTo(e,t,n);l.paused&&c()}stopDrag(){this.mode=0,this.previousHit=null,this.dragPlaneNormal=null}finishPointer(e,t){const n=e.pointerId===this.activePointerId;e.pointerType==="touch"&&(this.touchPointers.delete(e.pointerId),this.pinching&&(this.touchPointers.size<2&&(this.pinchDistance=null),this.touchPointers.size===0&&(this.pinching=!1))),n&&(this.mode===3&&this.dependencies.cameraController.endOrbit(e.timeStamp),this.activePointerId=null,this.stopDrag());const{canvas:i}=this.dependencies;t&&i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId)}getPinchDistance(){const[e,t]=Array.from(this.touchPointers.values());return e.distanceTo(t)}syncLightDirection(){return!this.settingLightDirection&&!this.dependencies.controls.lightFollowsCamera?!1:(this.dependencies.cameraController.getLightDirection(this.dependencies.renderer.lightDir),!0)}}async function b_(){const r="/threejs-water/",e=await new Pa().loadAsync(`${r}tiles.jpg`);e.wrapS=Zn,e.wrapT=Zn,e.minFilter=_n,e.generateMipmaps=!0;const t=await new Sd().loadAsync([`${r}xpos.jpg`,`${r}xneg.jpg`,`${r}ypos.jpg`,`${r}ypos.jpg`,`${r}zpos.jpg`,`${r}zneg.jpg`]);return t.flipY=!0,t.colorSpace=Nn,t.minFilter=ot,t.magFilter=ot,t.generateMipmaps=!1,{tileTexture:e,cubemap:t}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class Sn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Sn.nextNameID=Sn.nextNameID||0,this.$name.id=`lil-gui-name-${++Sn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class y_ extends Sn{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function oa(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const S_={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:oa,toHexString:oa},br={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},M_={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=br.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return br.toHexString(i)}},T_={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=br.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return br.toHexString(i)}},E_=[S_,br,M_,T_];function w_(r){return E_.find(e=>e.match(r))}class A_ extends Sn{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=w_(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=oa(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class lo extends Sn{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class R_ extends Sn{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+_),this.$input.value=this.getValue())},i=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},s=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let o=!1,a,l,c,u,d;const h=5,f=_=>{a=_.clientX,l=c=_.clientY,o=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",b)},g=_=>{if(o){const S=_.clientX-a,M=_.clientY-l;Math.abs(M)>h?(_.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>h&&b()}if(!o){const S=_.clientY-c;d-=S*this._step*this._arrowKeyMultiplier(_),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=_.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",b)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,_,S,M,A)=>(p-_)/(S-_)*(A-M)+M,t=p=>{const _=this.$slider.getBoundingClientRect();let S=e(p,_.left,_.right,this._min,this._max);this._snapClampSetValue(S)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=p=>{if(o){const _=p.touches[0].clientX-a,S=p.touches[0].clientY-l;Math.abs(_)>Math.abs(S)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else p.preventDefault(),t(p.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},f=this._callOnFinishChange.bind(this),g=400;let b;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const S=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class C_ extends Sn{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class P_ extends Sn{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var L_=`.lil-gui {
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
}`;function D_(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Mc=!1;class Fa{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Mc&&a&&(D_(L_),Mc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new C_(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new R_(this,e,t,n,i,s);case"boolean":return new y_(this,e,t);case"string":return new P_(this,e,t);case"function":return new lo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new A_(this,e,t,n)}addFolder(e){const t=new Fa({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof lo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof lo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const I_=0;class N_{constructor(e,t){U(this,"paused",!1);U(this,"physicsEnabled",!1);U(this,"densityEnabled",!1);U(this,"density",.9);U(this,"lightFollowsCamera",!1);U(this,"poolShape","Box");U(this,"cornerRadius",.1);U(this,"poolWidth",1);U(this,"poolHeight",1);U(this,"poolLength",1);U(this,"state",{object:"Sphere",gravity:!1,densityEnabled:!1,density:.9,paused:!1,lightFollowsCamera:!1,poolShape:"Box",cornerRadius:.1,poolWidth:1,poolHeight:1,poolLength:1});U(this,"gravityController");U(this,"densityEnabledController");U(this,"densityController");U(this,"pausedController");U(this,"cornerRadiusController");U(this,"poolWidthController");U(this,"poolHeightController");U(this,"poolLengthController");U(this,"physicsAvailable",!0);this.callbacks=t;const n=new Fa({title:"Settings"});n.close(),n.domElement.style.left="0",n.domElement.style.right="auto";const i=n.addFolder("Scene");i.open(),this.pausedController=i.add(this.state,"paused").name("Paused").onChange(l=>{this.paused=l,t.onPausedChange(l)});const s=n.addFolder("Object");s.open(),s.add(this.state,"object",e).name("Object").onChange(l=>t.onObjectChange(l)),this.gravityController=s.add(this.state,"gravity").name("Toggle Gravity").onChange(l=>{this.physicsEnabled=l}),this.densityEnabledController=s.add(this.state,"densityEnabled").name("Enable Density").onChange(l=>{this.densityEnabled=l,this.updateDensityController()}),this.densityController=s.add(this.state,"density",.2,2,.01).name("Density").onChange(l=>{this.density=l});const o=n.addFolder("Pool");o.open(),o.add(this.state,"poolShape",["Box","Rounded Box"]).name("Pool Shape").onChange(l=>{var c;this.poolShape=l,this.updatePoolShapeControllers(),(c=t.onPoolShapeChange)==null||c.call(t,l)}),this.cornerRadiusController=o.add(this.state,"cornerRadius",0,1,.01).name("Corner Radius").onChange(l=>{var u;const c=this.clampCornerRadius(l);this.cornerRadius=c,this.state.cornerRadius=c,this.cornerRadiusController.updateDisplay(),(u=t.onCornerRadiusChange)==null||u.call(t,c)}),this.poolWidthController=o.add(this.state,"poolWidth",.5,3,.05).name("Pool Width").onChange(l=>{var c;this.poolWidth=l,this.updateCornerRadiusLimit(),(c=t.onPoolWidthChange)==null||c.call(t,l)}),this.poolHeightController=o.add(this.state,"poolHeight",.3,2,.05).name("Pool Depth").onChange(l=>{var c;this.poolHeight=l,(c=t.onPoolHeightChange)==null||c.call(t,l)}),this.poolLengthController=o.add(this.state,"poolLength",.5,3,.05).name("Pool Length").onChange(l=>{var c;this.poolLength=l,this.updateCornerRadiusLimit(),(c=t.onPoolLengthChange)==null||c.call(t,l)});const a=n.addFolder("Lights");a.open(),a.add(this.state,"lightFollowsCamera").name("Follow Camera").onChange(l=>{var c;this.lightFollowsCamera=l,(c=t.onLightFollowsCameraChange)==null||c.call(t)}),this.updateCornerRadiusLimit(),this.updateDensityController(),this.updatePoolShapeControllers()}togglePaused(){this.paused=!this.paused,this.state.paused=this.paused,this.pausedController.updateDisplay(),this.callbacks.onPausedChange(this.paused)}togglePhysics(){this.physicsEnabled=!this.physicsEnabled,this.state.gravity=this.physicsEnabled,this.gravityController.updateDisplay()}setPhysicsAvailable(e){this.physicsAvailable=e,this.gravityController.disable(!e),this.densityEnabledController.disable(!e),this.updateDensityController()}updateDensityController(){this.densityController.show(this.physicsAvailable&&this.densityEnabled)}updateCornerRadiusLimit(){var t,n;const e=this.clampCornerRadius(this.cornerRadius);this.cornerRadiusController.max(this.maxCornerRadius),e!==this.cornerRadius&&(this.cornerRadius=e,this.state.cornerRadius=e,this.cornerRadiusController.updateDisplay(),(n=(t=this.callbacks).onCornerRadiusChange)==null||n.call(t,e))}clampCornerRadius(e){return Math.min(e,this.maxCornerRadius)}get maxCornerRadius(){return Math.max(0,Math.min(this.poolWidth,this.poolLength)-I_)}updatePoolShapeControllers(){this.state.poolShape==="Rounded Box"?(this.cornerRadiusController.show(),this.poolWidthController.show(),this.poolHeightController.show(),this.poolLengthController.show()):(this.cornerRadiusController.hide(),this.poolWidthController.hide(),this.poolHeightController.hide(),this.poolLengthController.hide())}}class F_{constructor(){U(this,"gravity",new R(0,-4,0));U(this,"cameraController",new H0);U(this,"scene",new ba);U(this,"camera",new Ft(45,1,.01,100));U(this,"webglRenderer");U(this,"renderer");U(this,"water");U(this,"objects");U(this,"controls");U(this,"interaction");U(this,"previousTime",performance.now());U(this,"animate",e=>{this.controls.paused||(this.update((e-this.previousTime)/1e3),this.draw()),this.previousTime=e,requestAnimationFrame(this.animate)});U(this,"draw",()=>{var i;this.interaction.preparePausedDraw(),this.cameraController.apply(this.camera);const e=this.controls.poolShape==="Box"?1:this.controls.poolWidth,t=this.controls.poolShape==="Box"?1:this.controls.poolHeight,n=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.objects.prepareRender(this.water,e,t,n),this.renderer.updateObjectTextures(this.scene,this.camera,((i=this.objects.active)==null?void 0:i.mesh)??null),this.renderer.updateCaustics(this.water),this.renderer.renderPool(this.water),this.renderer.renderWater(this.water,this.camera),this.webglRenderer.render(this.scene,this.camera)});U(this,"resize",()=>{const e=document.getElementById("help"),n=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-e.clientWidth-20,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.webglRenderer.setSize(n,i),this.renderer.setSize(n,i),this.draw()});U(this,"selectSimulationObject",e=>{const t=this.controls.poolShape==="Box"?1:this.controls.poolWidth,n=this.controls.poolShape==="Box"?1:this.controls.poolHeight,i=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.objects.select(e,this.water,t,n,i),this.renderer.setWaterOptics(this.objects.optics),this.interaction.cancelDrag(),this.controls.setPhysicsAvailable(e!==ss),this.water.updateNormals(t,i),this.renderer.updateCaustics(this.water),this.draw()})}async init(){const e=document.getElementById("app"),t=document.getElementById("loading");this.webglRenderer=new O0({antialias:!0}),this.webglRenderer.setPixelRatio(window.devicePixelRatio),this.webglRenderer.setClearColor(0),e.appendChild(this.webglRenderer.domElement);const{tileTexture:n,cubemap:i}=await b_();this.water=new __(this.webglRenderer),this.renderer=new hv(this.webglRenderer,n,i),this.scene.add(this.renderer.getPoolMesh(),this.renderer.getWaterMesh(),this.renderer.getWaterMeshBack()),this.renderer.markWaterOpticsHidden(),this.objects=c_(this.scene,this.renderer.objectRenderResources),this.renderer.setWaterOptics(this.objects.optics),this.controls=new N_(this.objects.options,{onObjectChange:this.selectSimulationObject,onPausedChange:a=>{a&&this.draw()},onLightFollowsCameraChange:()=>{this.controls.paused&&this.draw()},onPoolShapeChange:a=>{const l=a==="Box"?1:this.controls.poolWidth,c=a==="Box"?1:this.controls.poolHeight,u=a==="Box"?1:this.controls.poolLength;if(this.renderer.setPoolShape(a,this.controls.cornerRadius,l,c,u),this.objects.active){const d=this.objects.active.floorY(c);this.objects.active.position.y<d&&(this.objects.active.position.y=d,this.objects.active.velocity.y=0),this.objects.active.moveBy(new R(0,0,0),l,c,u),this.objects.active.syncPreviousPosition()}this.controls.paused&&this.draw()},onCornerRadiusChange:a=>{this.renderer.setPoolShape(this.controls.poolShape,a,this.controls.poolWidth,this.controls.poolHeight,this.controls.poolLength),this.controls.paused&&this.draw()},onPoolWidthChange:a=>{const l=this.controls.poolShape==="Box"?1:this.controls.poolHeight,c=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,a,l,c),this.objects.active&&(this.objects.active.moveBy(new R(0,0,0),a,l,c),this.objects.active.syncPreviousPosition()),this.controls.paused&&this.draw()},onPoolHeightChange:a=>{const l=this.controls.poolShape==="Box"?1:this.controls.poolWidth,c=this.controls.poolShape==="Box"?1:this.controls.poolLength;if(this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,l,a,c),this.objects.active){const u=this.objects.active.floorY(a);this.objects.active.position.y<u&&(this.objects.active.position.y=u,this.objects.active.velocity.y=0),this.objects.active.moveBy(new R(0,0,0),l,a,c),this.objects.active.syncPreviousPosition()}this.controls.paused&&this.draw()},onPoolLengthChange:a=>{const l=this.controls.poolShape==="Box"?1:this.controls.poolWidth,c=this.controls.poolShape==="Box"?1:this.controls.poolHeight;this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,l,c,a),this.objects.active&&(this.objects.active.moveBy(new R(0,0,0),l,c,a),this.objects.active.syncPreviousPosition()),this.controls.paused&&this.draw()}}),this.interaction=new x_({canvas:this.webglRenderer.domElement,camera:this.camera,cameraController:this.cameraController,water:this.water,renderer:this.renderer,objects:this.objects,controls:this.controls,draw:this.draw}),this.interaction.connect(),this.seedWater(),t.innerHTML="";const s=document.getElementById("help"),o=document.getElementById("help-toggle");o.addEventListener("click",()=>{s.classList.toggle("collapsed"),o.textContent=s.classList.contains("collapsed")?"menu":"chevron_right"}),window.addEventListener("pointerdown",a=>{if(window.matchMedia("(max-width: 600px)").matches&&!s.classList.contains("collapsed")){const c=a.target;!s.contains(c)&&!o.contains(c)&&(s.classList.add("collapsed"),o.textContent="menu")}}),this.resize(),window.addEventListener("resize",this.resize),this.previousTime=performance.now(),requestAnimationFrame(this.animate)}seedWater(){const e=this.controls.poolShape==="Box"?1:this.controls.poolWidth,t=this.controls.poolShape==="Box"?1:this.controls.poolLength;for(let n=0;n<20;n++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.03,n%2===0?-.01:.01,e,t)}update(e){if(e>1)return;this.interaction.update(e);const t=this.controls.poolShape==="Box"?1:this.controls.poolWidth,n=this.controls.poolShape==="Box"?1:this.controls.poolHeight,i=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.objects.update(e,{dragging:this.interaction.draggingObject,physicsEnabled:this.controls.physicsEnabled,densityEnabled:this.controls.densityEnabled,density:this.controls.density,gravity:this.gravity,poolWidth:t,poolHeight:n,poolLength:i},this.water),this.water.stepSimulation(t,i),this.water.stepSimulation(t,i),this.water.updateNormals(t,i),this.renderer.setWaterOptics(this.objects.optics)}}new F_().init();
