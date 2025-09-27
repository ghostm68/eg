(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();var pt=(e=>(e[e.DefaultRuntimeError=1]="DefaultRuntimeError",e[e.ReactiveProxyError=2]="ReactiveProxyError",e[e.DocCollectionError=3]="DocCollectionError",e[e.ModelCRUDError=4]="ModelCRUDError",e[e.ValueNotExists=5]="ValueNotExists",e[e.ValueNotInstanceOf=6]="ValueNotInstanceOf",e[e.ValueNotEqual=7]="ValueNotEqual",e[e.MigrationError=8]="MigrationError",e[e.SchemaValidateError=9]="SchemaValidateError",e[e.TransformerError=10]="TransformerError",e[e.InlineEditorError=11]="InlineEditorError",e[e.TransformerNotImplementedError=12]="TransformerNotImplementedError",e[e.EdgelessExportError=13]="EdgelessExportError",e[e.CommandError=14]="CommandError",e[e.EventDispatcherError=15]="EventDispatcherError",e[e.SelectionError=16]="SelectionError",e[e.GfxBlockElementError=17]="GfxBlockElementError",e[e.MissingViewModelError=18]="MissingViewModelError",e[e.DatabaseBlockError=19]="DatabaseBlockError",e[e.ParsingError=20]="ParsingError",e[e.UserAbortError=21]="UserAbortError",e[e.ExecutionError=22]="ExecutionError",e[e.DefaultFatalError=1e4]="DefaultFatalError",e[e.NoRootModelError=10001]="NoRootModelError",e[e.NoSurfaceModelError=10002]="NoSurfaceModelError",e[e.NoneSupportedSSRError=10003]="NoneSupportedSSRError",e))(pt||{});class it extends Error{constructor(t,s,n){super(s,n),this.name="BlockSuiteError",this.code=t,this.isFatal=t>=1e4}}it.ErrorCode=pt;function e_(e){if(!(e instanceof it))throw e;if(e.isFatal)throw new Error("A fatal error for BlockSuite occurs, please contact the team if you find this.",{cause:e});console.error("A runtime error for BlockSuite occurs, you can ignore this error if it won't break the user experience."),console.error(e.stack)}const As=()=>new Set,Gr=e=>e[e.length-1],$h=(e,t)=>{for(let s=0;s<t.length;s++)e.push(t[s])},ze=Array.from,Th=(e,t)=>{for(let s=0;s<e.length;s++)if(t(e[s],s,e))return!0;return!1},Oh=(e,t)=>{const s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n,s);return s},yo=Array.isArray,Rh=String.fromCharCode,Ih=e=>e.toLowerCase(),Dh=/^\s*/g,Lh=e=>e.replace(Dh,""),Mh=/([A-Z])/g,al=(e,t)=>Lh(e.replace(Mh,s=>`${t}${Ih(s)}`)),Ph=e=>{const t=unescape(encodeURIComponent(e)),s=t.length,n=new Uint8Array(s);for(let i=0;i<s;i++)n[i]=t.codePointAt(i);return n},Bn=typeof TextEncoder<"u"?new TextEncoder:null,Nh=e=>Bn.encode(e),zh=Bn?Nh:Ph;let Pn=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});Pn&&Pn.decode(new Uint8Array).length===1&&(Pn=null);const Vh=(e,t)=>Oh(t,()=>e).join(""),ht=()=>new Map,_o=e=>{const t=ht();return e.forEach((s,n)=>{t.set(n,s)}),t},Lt=(e,t,s)=>{let n=e.get(t);return n===void 0&&e.set(t,n=s()),n},Bh=(e,t)=>{const s=[];for(const[n,i]of e)s.push(t(i,n));return s},Fh=(e,t)=>{for(const[s,n]of e)if(t(n,s))return!0;return!1},ll=e=>e===void 0?null:e;class Uh{constructor(){this.map=new Map}setItem(t,s){this.map.set(t,s)}getItem(t){return this.map.get(t)}}let Mc=new Uh,Hh=!0;try{typeof localStorage<"u"&&localStorage&&(Mc=localStorage,Hh=!1)}catch{}const jh=Mc,Zh=Object.assign,Pc=Object.keys,Wh=(e,t)=>{for(const s in e)t(e[s],s)},cl=e=>Pc(e).length,ul=e=>Pc(e).length,qh=e=>{for(const t in e)return!1;return!0},Yh=(e,t)=>{for(const s in e)if(!t(e[s],s))return!1;return!0},Nc=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Gh=(e,t)=>e===t||ul(e)===ul(t)&&Yh(e,(s,n)=>(s!==void 0||Nc(t,n))&&t[n]===s),Kh=Object.freeze,zc=e=>{for(const t in e){const s=e[t];(typeof s=="object"||typeof s=="function")&&zc(e[t])}return Kh(e)},ia=(e,t,s=0)=>{try{for(;s<e.length;s++)e[s](...t)}finally{s<e.length&&ia(e,t,s+1)}},Vc=e=>e,Jh=(e,t)=>e===t,Kr=(e,t)=>{if(e==null||t==null)return Jh(e,t);if(e.constructor!==t.constructor)return!1;if(e===t)return!0;switch(e.constructor){case ArrayBuffer:e=new Uint8Array(e),t=new Uint8Array(t);case Uint8Array:{if(e.byteLength!==t.byteLength)return!1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;break}case Set:{if(e.size!==t.size)return!1;for(const s of e)if(!t.has(s))return!1;break}case Map:{if(e.size!==t.size)return!1;for(const s of e.keys())if(!t.has(s)||!Kr(e.get(s),t.get(s)))return!1;break}case Object:if(cl(e)!==cl(t))return!1;for(const s in e)if(!Nc(e,s)||!Kr(e[s],t[s]))return!1;break;case Array:if(e.length!==t.length)return!1;for(let s=0;s<e.length;s++)if(!Kr(e[s],t[s]))return!1;break;default:return!1}return!0},Xh=(e,t)=>t.includes(e);var Bc={};const Ys=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",Qh=typeof window<"u"&&typeof document<"u"&&!Ys;let ve;const tf=()=>{if(ve===void 0)if(Ys){ve=ht();const e=process.argv;let t=null;for(let s=0;s<e.length;s++){const n=e[s];n[0]==="-"?(t!==null&&ve.set(t,""),t=n):t!==null&&(ve.set(t,n),t=null)}t!==null&&ve.set(t,"")}else typeof location=="object"?(ve=ht(),(location.search||"?").slice(1).split("&").forEach(e=>{if(e.length!==0){const[t,s]=e.split("=");ve.set(`--${al(t,"-")}`,s),ve.set(`-${al(t,"-")}`,s)}})):ve=ht();return ve},wo=e=>tf().has(e),tr=e=>ll(Ys?Bc[e.toUpperCase().replaceAll("-","_")]:jh.getItem(e)),Fc=e=>wo("--"+e)||tr(e)!==null;Fc("production");const ef=Ys&&Xh(Bc.FORCE_COLOR,["true","1","2"]),sf=ef||!wo("--no-colors")&&!Fc("no-color")&&(!Ys||process.stdout.isTTY)&&(!Ys||wo("--color")||tr("COLORTERM")!==null||(tr("TERM")||"").includes("color")),ts=Math.floor,Zi=Math.abs,Uc=(e,t)=>e<t?e:t,Ns=(e,t)=>e>t?e:t,Hc=e=>e!==0?e<0:1/e<0,dl=1,hl=2,Jr=4,Xr=8,Fn=32,De=64,Ut=128,s_=1<<29,xr=31,xo=63,ws=127,nf=2147483647,jc=Number.MAX_SAFE_INTEGER,rf=Number.isInteger||(e=>typeof e=="number"&&isFinite(e)&&ts(e)===e);class vi{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const fn=()=>new vi,of=e=>{let t=e.cpos;for(let s=0;s<e.bufs.length;s++)t+=e.bufs[s].length;return t},Qt=e=>{const t=new Uint8Array(of(e));let s=0;for(let n=0;n<e.bufs.length;n++){const i=e.bufs[n];t.set(i,s),s+=i.length}return t.set(new Uint8Array(e.cbuf.buffer,0,e.cpos),s),t},af=(e,t)=>{const s=e.cbuf.length;s-e.cpos<t&&(e.bufs.push(new Uint8Array(e.cbuf.buffer,0,e.cpos)),e.cbuf=new Uint8Array(Ns(s,t)*2),e.cpos=0)},dt=(e,t)=>{const s=e.cbuf.length;e.cpos===s&&(e.bufs.push(e.cbuf),e.cbuf=new Uint8Array(s*2),e.cpos=0),e.cbuf[e.cpos++]=t},Un=dt,T=(e,t)=>{for(;t>ws;)dt(e,Ut|ws&t),t=ts(t/128);dt(e,ws&t)},kr=(e,t)=>{const s=Hc(t);for(s&&(t=-t),dt(e,(t>xo?Ut:0)|(s?De:0)|xo&t),t=ts(t/64);t>0;)dt(e,(t>ws?Ut:0)|ws&t),t=ts(t/128)},ko=new Uint8Array(3e4),lf=ko.length/3,cf=(e,t)=>{if(t.length<lf){const s=Bn.encodeInto(t,ko).written||0;T(e,s);for(let n=0;n<s;n++)dt(e,ko[n])}else Bt(e,zh(t))},uf=(e,t)=>{const s=unescape(encodeURIComponent(t)),n=s.length;T(e,n);for(let i=0;i<n;i++)dt(e,s.codePointAt(i))},xs=Bn&&Bn.encodeInto?cf:uf,df=(e,t)=>yi(e,Qt(t)),yi=(e,t)=>{const s=e.cbuf.length,n=e.cpos,i=Uc(s-n,t.length),r=t.length-i;e.cbuf.set(t.subarray(0,i),n),e.cpos+=i,r>0&&(e.bufs.push(e.cbuf),e.cbuf=new Uint8Array(Ns(s*2,r)),e.cbuf.set(t.subarray(i)),e.cpos=r)},Bt=(e,t)=>{T(e,t.byteLength),yi(e,t)},ra=(e,t)=>{af(e,t);const s=new DataView(e.cbuf.buffer,e.cpos,t);return e.cpos+=t,s},hf=(e,t)=>ra(e,4).setFloat32(0,t,!1),ff=(e,t)=>ra(e,8).setFloat64(0,t,!1),pf=(e,t)=>ra(e,8).setBigInt64(0,t,!1),fl=new DataView(new ArrayBuffer(4)),gf=e=>(fl.setFloat32(0,e),fl.getFloat32(0)===e),Hn=(e,t)=>{switch(typeof t){case"string":dt(e,119),xs(e,t);break;case"number":rf(t)&&Zi(t)<=nf?(dt(e,125),kr(e,t)):gf(t)?(dt(e,124),hf(e,t)):(dt(e,123),ff(e,t));break;case"bigint":dt(e,122),pf(e,t);break;case"object":if(t===null)dt(e,126);else if(yo(t)){dt(e,117),T(e,t.length);for(let s=0;s<t.length;s++)Hn(e,t[s])}else if(t instanceof Uint8Array)dt(e,116),Bt(e,t);else{dt(e,118);const s=Object.keys(t);T(e,s.length);for(let n=0;n<s.length;n++){const i=s[n];xs(e,i),Hn(e,t[i])}}break;case"boolean":dt(e,t?120:121);break;default:dt(e,127)}};class pl extends vi{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&T(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}}const gl=e=>{e.count>0&&(kr(e.encoder,e.count===1?e.s:-e.s),e.count>1&&T(e.encoder,e.count-2))};class Wi{constructor(){this.encoder=new vi,this.s=0,this.count=0}write(t){this.s===t?this.count++:(gl(this),this.count=1,this.s=t)}toUint8Array(){return gl(this),Qt(this.encoder)}}const ml=e=>{if(e.count>0){const t=e.diff*2+(e.count===1?0:1);kr(e.encoder,t),e.count>1&&T(e.encoder,e.count-2)}};class Qr{constructor(){this.encoder=new vi,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):(ml(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return ml(this),Qt(this.encoder)}}class mf{constructor(){this.sarr=[],this.s="",this.lensE=new Wi}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){const t=new vi;return this.sarr.push(this.s),this.s="",xs(t,this.sarr.join("")),yi(t,this.lensE.toUint8Array()),Qt(t)}}const es=e=>new Error(e),_e=()=>{throw es("Method unimplemented")},Nt=()=>{throw es("Unexpected case")},Zc=es("Unexpected end of array"),Wc=es("Integer out of Range");class Sr{constructor(t){this.arr=t,this.pos=0}}const xt=e=>new Sr(e),qc=e=>e.pos!==e.arr.length,bf=(e,t)=>{const s=new Uint8Array(e.arr.buffer,e.pos+e.arr.byteOffset,t);return e.pos+=t,s},Ft=e=>bf(e,L(e)),Gs=e=>e.arr[e.pos++],L=e=>{let t=0,s=1;const n=e.arr.length;for(;e.pos<n;){const i=e.arr[e.pos++];if(t=t+(i&ws)*s,s*=128,i<Ut)return t;if(t>jc)throw Wc}throw Zc},Cr=e=>{let t=e.arr[e.pos++],s=t&xo,n=64;const i=(t&De)>0?-1:1;if((t&Ut)===0)return i*s;const r=e.arr.length;for(;e.pos<r;){if(t=e.arr[e.pos++],s=s+(t&ws)*n,n*=128,t<Ut)return i*s;if(s>jc)throw Wc}throw Zc},vf=e=>{let t=L(e);if(t===0)return"";{let s=String.fromCodePoint(Gs(e));if(--t<100)for(;t--;)s+=String.fromCodePoint(Gs(e));else for(;t>0;){const n=t<1e4?t:1e4,i=e.arr.subarray(e.pos,e.pos+n);e.pos+=n,s+=String.fromCodePoint.apply(null,i),t-=n}return decodeURIComponent(escape(s))}},yf=e=>Pn.decode(Ft(e)),ks=Pn?yf:vf,oa=(e,t)=>{const s=new DataView(e.arr.buffer,e.arr.byteOffset+e.pos,t);return e.pos+=t,s},_f=e=>oa(e,4).getFloat32(0,!1),wf=e=>oa(e,8).getFloat64(0,!1),xf=e=>oa(e,8).getBigInt64(0,!1),kf=[e=>{},e=>null,Cr,_f,wf,xf,e=>!1,e=>!0,ks,e=>{const t=L(e),s={};for(let n=0;n<t;n++){const i=ks(e);s[i]=jn(e)}return s},e=>{const t=L(e),s=[];for(let n=0;n<t;n++)s.push(jn(e));return s},Ft],jn=e=>kf[127-Gs(e)](e);class bl extends Sr{constructor(t,s){super(t),this.reader=s,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),qc(this)?this.count=L(this)+1:this.count=-1),this.count--,this.s}}class qi extends Sr{constructor(t){super(t),this.s=0,this.count=0}read(){if(this.count===0){this.s=Cr(this);const t=Hc(this.s);this.count=1,t&&(this.s=-this.s,this.count=L(this)+2)}return this.count--,this.s}}class to extends Sr{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){const t=Cr(this),s=t&1;this.diff=ts(t/2),this.count=1,s&&(this.count=L(this)+2)}return this.s+=this.diff,this.count--,this.s}}class Sf{constructor(t){this.decoder=new qi(t),this.str=ks(this.decoder),this.spos=0}read(){const t=this.spos+this.decoder.read(),s=this.str.slice(this.spos,t);return this.spos=t,s}}const Cf=e=>new Uint8Array(e),Ef=e=>{let t="";for(let s=0;s<e.byteLength;s++)t+=Rh(e[s]);return btoa(t)},Af=e=>Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("base64"),n_=Qh?Ef:Af,$f=e=>{const t=Cf(e.byteLength);return t.set(e),t};class aa{constructor(){this._observers=ht()}on(t,s){return Lt(this._observers,t,As).add(s),s}once(t,s){const n=(...i)=>{this.off(t,n),s(...i)};this.on(t,n)}off(t,s){const n=this._observers.get(t);n!==void 0&&(n.delete(s),n.size===0&&this._observers.delete(t))}emit(t,s){return ze((this._observers.get(t)||ht()).values()).forEach(n=>n(...s))}destroy(){this._observers=ht()}}let i_=class{constructor(){this._observers=ht()}on(t,s){Lt(this._observers,t,As).add(s)}once(t,s){const n=(...i)=>{this.off(t,n),s(...i)};this.on(t,n)}off(t,s){const n=this._observers.get(t);n!==void 0&&(n.delete(s),n.size===0&&this._observers.delete(t))}emit(t,s){return ze((this._observers.get(t)||ht()).values()).forEach(n=>n(...s))}destroy(){this._observers=ht()}};const Tf=crypto.getRandomValues.bind(crypto),Yc=()=>Tf(new Uint32Array(1))[0],Of="10000000-1000-4000-8000"+-1e11,Rf=()=>Of.replace(/[018]/g,e=>(e^Yc()&15>>e/4).toString(16)),If=Date.now,vl=e=>new Promise(e);Promise.all.bind(Promise);class Df{constructor(t,s){this.left=t,this.right=s}}const Te=(e,t)=>new Df(e,t);typeof DOMParser<"u"&&new DOMParser;const Lf=e=>Bh(e,(t,s)=>`${s}:${t};`).join(""),He=Symbol,Gc=He(),Kc=He(),Mf=He(),Pf=He(),Nf=He(),Jc=He(),zf=He(),la=He(),Vf=He(),Bf=e=>{e.length===1&&e[0]?.constructor===Function&&(e=e[0]());const t=[],s=[];let n=0;for(;n<e.length;n++){const i=e[n];if(i===void 0)break;if(i.constructor===String||i.constructor===Number)t.push(i);else if(i.constructor===Object)break}for(n>0&&s.push(t.join(""));n<e.length;n++){const i=e[n];i instanceof Symbol||s.push(i)}return s},Ff={[Gc]:Te("font-weight","bold"),[Kc]:Te("font-weight","normal"),[Mf]:Te("color","blue"),[Nf]:Te("color","green"),[Pf]:Te("color","grey"),[Jc]:Te("color","red"),[zf]:Te("color","purple"),[la]:Te("color","orange"),[Vf]:Te("color","black")},Uf=e=>{e.length===1&&e[0]?.constructor===Function&&(e=e[0]());const t=[],s=[],n=ht();let i=[],r=0;for(;r<e.length;r++){const o=e[r],a=Ff[o];if(a!==void 0)n.set(a.left,a.right);else{if(o===void 0)break;if(o.constructor===String||o.constructor===Number){const l=Lf(n);r>0||l.length>0?(t.push("%c"+o),s.push(l)):t.push(o)}else break}}for(r>0&&(i=s,i.unshift(t.join("")));r<e.length;r++){const o=e[r];o instanceof Symbol||i.push(o)}return i},Xc=sf?Uf:Bf,So=(...e)=>{console.log(...Xc(e)),tu.forEach(t=>t.print(e))},Qc=(...e)=>{console.warn(...Xc(e)),e.unshift(la),tu.forEach(t=>t.print(e))},tu=As(),eu=e=>({[Symbol.iterator](){return this},next:e}),Hf=(e,t)=>eu(()=>{let s;do s=e.next();while(!s.done&&!t(s.value));return s}),eo=(e,t)=>eu(()=>{const{done:s,value:n}=e.next();return{done:s,value:s?void 0:t(n)}});class jf extends aa{constructor(t,s){super(),this.doc=t,this.awareness=s}}class ca{constructor(t,s){this.clock=t,this.len=s}}class pn{constructor(){this.clients=new Map}}const $s=(e,t,s)=>t.clients.forEach((n,i)=>{const r=e.doc.store.clients.get(i);for(let o=0;o<n.length;o++){const a=n[o];fu(e,r,a.clock,a.len,s)}}),Zf=(e,t)=>{let s=0,n=e.length-1;for(;s<=n;){const i=ts((s+n)/2),r=e[i],o=r.clock;if(o<=t){if(t<o+r.len)return i;s=i+1}else n=i-1}return null},zs=(e,t)=>{const s=e.clients.get(t.client);return s!==void 0&&Zf(s,t.clock)!==null},ua=e=>{e.clients.forEach(t=>{t.sort((i,r)=>i.clock-r.clock);let s,n;for(s=1,n=1;s<t.length;s++){const i=t[n-1],r=t[s];i.clock+i.len>=r.clock?i.len=Ns(i.len,r.clock+r.len-i.clock):(n<s&&(t[n]=r),n++)}t.length=n})},Ts=e=>{const t=new pn;for(let s=0;s<e.length;s++)e[s].clients.forEach((n,i)=>{if(!t.clients.has(i)){const r=n.slice();for(let o=s+1;o<e.length;o++)$h(r,e[o].clients.get(i)||[]);t.clients.set(i,r)}});return ua(t),t},Zn=(e,t,s,n)=>{Lt(e.clients,t,()=>[]).push(new ca(s,n))},Er=()=>new pn,da=e=>{const t=Er();return e.clients.forEach((s,n)=>{const i=[];for(let r=0;r<s.length;r++){const o=s[r];if(o.deleted){const a=o.id.clock;let l=o.length;if(r+1<s.length)for(let c=s[r+1];r+1<s.length&&c.deleted;c=s[++r+1])l+=c.length;i.push(new ca(a,l))}}i.length>0&&t.clients.set(n,i)}),t},ke=(e,t)=>{T(e.restEncoder,t.clients.size),ze(t.clients.entries()).sort((s,n)=>n[0]-s[0]).forEach(([s,n])=>{e.resetDsCurVal(),T(e.restEncoder,s);const i=n.length;T(e.restEncoder,i);for(let r=0;r<i;r++){const o=n[r];e.writeDsClock(o.clock),e.writeDsLen(o.len)}})},Ve=e=>{const t=new pn,s=L(e.restDecoder);for(let n=0;n<s;n++){e.resetDsCurVal();const i=L(e.restDecoder),r=L(e.restDecoder);if(r>0){const o=Lt(t.clients,i,()=>[]);for(let a=0;a<r;a++)o.push(new ca(e.readDsClock(),e.readDsLen()))}}return t},yl=(e,t,s)=>{const n=new pn,i=L(e.restDecoder);for(let r=0;r<i;r++){e.resetDsCurVal();const o=L(e.restDecoder),a=L(e.restDecoder),l=s.clients.get(o)||[],c=X(s,o);for(let u=0;u<a;u++){const d=e.readDsClock(),f=d+e.readDsLen();if(d<c){c<f&&Zn(n,o,c,f-c);let h=te(l,d),g=l[h];for(!g.deleted&&g.id.clock<d&&(l.splice(h+1,0,nr(t,g,d-g.id.clock)),h++);h<l.length&&(g=l[h++],g.id.clock<f);)g.deleted||(f<g.id.clock+g.length&&l.splice(h,0,nr(t,g,f-g.id.clock)),g.delete(t))}else Zn(n,o,d,f-d)}}if(n.clients.size>0){const r=new ce;return T(r.restEncoder,0),ke(r,n),r.toUint8Array()}return null},su=(e,t)=>{if(e.clients.size!==t.clients.size)return!1;for(const[s,n]of e.clients.entries()){const i=t.clients.get(s);if(i===void 0||n.length!==i.length)return!1;for(let r=0;r<n.length;r++){const o=n[r],a=i[r];if(o.clock!==a.clock||o.len!==a.len)return!1}}return!0},nu=Yc;class ds extends aa{constructor({guid:t=Rf(),collectionid:s=null,gc:n=!0,gcFilter:i=()=>!0,meta:r=null,autoLoad:o=!1,shouldLoad:a=!0}={}){super(),this.gc=n,this.gcFilter=i,this.clientID=nu(),this.guid=t,this.collectionid=s,this.share=new Map,this.store=new du,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=a,this.autoLoad=o,this.meta=r,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=vl(c=>{this.on("load",()=>{this.isLoaded=!0,c(this)})});const l=()=>vl(c=>{const u=d=>{(d===void 0||d===!0)&&(this.off("sync",u),c())};this.on("sync",u)});this.on("sync",c=>{c===!1&&this.isSynced&&(this.whenSynced=l()),this.isSynced=c===void 0||c===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=l()}load(){const t=this._item;t!==null&&!this.shouldLoad&&W(t.parent.doc,s=>{s.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(ze(this.subdocs).map(t=>t.guid))}transact(t,s=null){return W(this,t,s)}get(t,s=lt){const n=Lt(this.share,t,()=>{const r=new s;return r._integrate(this,null),r}),i=n.constructor;if(s!==lt&&i!==s)if(i===lt){const r=new s;r._map=n._map,n._map.forEach(o=>{for(;o!==null;o=o.left)o.parent=r}),r._start=n._start;for(let o=r._start;o!==null;o=o.right)o.parent=r;return r._length=n._length,this.share.set(t,r),r._integrate(this,null),r}else throw new Error(`Type with the name ${t} has already been defined with a different constructor`);return n}getArray(t=""){return this.get(t,Le)}getText(t=""){return this.get(t,Os)}getMap(t=""){return this.get(t,ss)}getXmlElement(t=""){return this.get(t,is)}getXmlFragment(t=""){return this.get(t,ns)}toJSON(){const t={};return this.share.forEach((s,n)=>{t[n]=s.toJSON()}),t}destroy(){this.isDestroyed=!0,ze(this.subdocs).forEach(s=>s.destroy());const t=this._item;if(t!==null){this._item=null;const s=t.content;s.doc=new ds({guid:this.guid,...s.opts,shouldLoad:!1}),s.doc._item=t,W(t.parent.doc,n=>{const i=s.doc;t.deleted||n.subdocsAdded.add(i),n.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}}class Wn{constructor(t){this.restDecoder=t}resetDsCurVal(){}readDsClock(){return L(this.restDecoder)}readDsLen(){return L(this.restDecoder)}}class se extends Wn{readLeftID(){return R(L(this.restDecoder),L(this.restDecoder))}readRightID(){return R(L(this.restDecoder),L(this.restDecoder))}readClient(){return L(this.restDecoder)}readInfo(){return Gs(this.restDecoder)}readString(){return ks(this.restDecoder)}readParentInfo(){return L(this.restDecoder)===1}readTypeRef(){return L(this.restDecoder)}readLen(){return L(this.restDecoder)}readAny(){return jn(this.restDecoder)}readBuf(){return $f(Ft(this.restDecoder))}readJSON(){return JSON.parse(ks(this.restDecoder))}readKey(){return ks(this.restDecoder)}}class iu{constructor(t){this.dsCurrVal=0,this.restDecoder=t}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=L(this.restDecoder),this.dsCurrVal}readDsLen(){const t=L(this.restDecoder)+1;return this.dsCurrVal+=t,t}}class Zt extends iu{constructor(t){super(t),this.keys=[],L(t),this.keyClockDecoder=new to(Ft(t)),this.clientDecoder=new qi(Ft(t)),this.leftClockDecoder=new to(Ft(t)),this.rightClockDecoder=new to(Ft(t)),this.infoDecoder=new bl(Ft(t),Gs),this.stringDecoder=new Sf(Ft(t)),this.parentInfoDecoder=new bl(Ft(t),Gs),this.typeRefDecoder=new qi(Ft(t)),this.lenDecoder=new qi(Ft(t))}readLeftID(){return new Ss(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new Ss(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return jn(this.restDecoder)}readBuf(){return Ft(this.restDecoder)}readJSON(){return jn(this.restDecoder)}readKey(){const t=this.keyClockDecoder.read();if(t<this.keys.length)return this.keys[t];{const s=this.stringDecoder.read();return this.keys.push(s),s}}}class Ks{constructor(){this.restEncoder=fn()}toUint8Array(){return Qt(this.restEncoder)}resetDsCurVal(){}writeDsClock(t){T(this.restEncoder,t)}writeDsLen(t){T(this.restEncoder,t)}}class hs extends Ks{writeLeftID(t){T(this.restEncoder,t.client),T(this.restEncoder,t.clock)}writeRightID(t){T(this.restEncoder,t.client),T(this.restEncoder,t.clock)}writeClient(t){T(this.restEncoder,t)}writeInfo(t){Un(this.restEncoder,t)}writeString(t){xs(this.restEncoder,t)}writeParentInfo(t){T(this.restEncoder,t?1:0)}writeTypeRef(t){T(this.restEncoder,t)}writeLen(t){T(this.restEncoder,t)}writeAny(t){Hn(this.restEncoder,t)}writeBuf(t){Bt(this.restEncoder,t)}writeJSON(t){xs(this.restEncoder,JSON.stringify(t))}writeKey(t){xs(this.restEncoder,t)}}class Ar{constructor(){this.restEncoder=fn(),this.dsCurrVal=0}toUint8Array(){return Qt(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(t){const s=t-this.dsCurrVal;this.dsCurrVal=t,T(this.restEncoder,s)}writeDsLen(t){t===0&&Nt(),T(this.restEncoder,t-1),this.dsCurrVal+=t}}class ce extends Ar{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new Qr,this.clientEncoder=new Wi,this.leftClockEncoder=new Qr,this.rightClockEncoder=new Qr,this.infoEncoder=new pl(Un),this.stringEncoder=new mf,this.parentInfoEncoder=new pl(Un),this.typeRefEncoder=new Wi,this.lenEncoder=new Wi}toUint8Array(){const t=fn();return T(t,0),Bt(t,this.keyClockEncoder.toUint8Array()),Bt(t,this.clientEncoder.toUint8Array()),Bt(t,this.leftClockEncoder.toUint8Array()),Bt(t,this.rightClockEncoder.toUint8Array()),Bt(t,Qt(this.infoEncoder)),Bt(t,this.stringEncoder.toUint8Array()),Bt(t,Qt(this.parentInfoEncoder)),Bt(t,this.typeRefEncoder.toUint8Array()),Bt(t,this.lenEncoder.toUint8Array()),yi(t,Qt(this.restEncoder)),Qt(t)}writeLeftID(t){this.clientEncoder.write(t.client),this.leftClockEncoder.write(t.clock)}writeRightID(t){this.clientEncoder.write(t.client),this.rightClockEncoder.write(t.clock)}writeClient(t){this.clientEncoder.write(t)}writeInfo(t){this.infoEncoder.write(t)}writeString(t){this.stringEncoder.write(t)}writeParentInfo(t){this.parentInfoEncoder.write(t?1:0)}writeTypeRef(t){this.typeRefEncoder.write(t)}writeLen(t){this.lenEncoder.write(t)}writeAny(t){Hn(this.restEncoder,t)}writeBuf(t){Bt(this.restEncoder,t)}writeJSON(t){Hn(this.restEncoder,t)}writeKey(t){const s=this.keyMap.get(t);s===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(t)):this.keyClockEncoder.write(s)}}const Wf=(e,t,s,n)=>{n=Ns(n,t[0].id.clock);const i=te(t,n);T(e.restEncoder,t.length-i),e.writeClient(s),T(e.restEncoder,n);const r=t[i];r.write(e,n-r.id.clock);for(let o=i+1;o<t.length;o++)t[o].write(e,0)},ha=(e,t,s)=>{const n=new Map;s.forEach((i,r)=>{X(t,r)>i&&n.set(r,i)}),_i(t).forEach((i,r)=>{s.has(r)||n.set(r,0)}),T(e.restEncoder,n.size),ze(n.entries()).sort((i,r)=>r[0]-i[0]).forEach(([i,r])=>{Wf(e,t.clients.get(i),i,r)})},qf=(e,t)=>{const s=ht(),n=L(e.restDecoder);for(let i=0;i<n;i++){const r=L(e.restDecoder),o=new Array(r),a=e.readClient();let l=L(e.restDecoder);s.set(a,{i:0,refs:o});for(let c=0;c<r;c++){const u=e.readInfo();switch(xr&u){case 0:{const d=e.readLen();o[c]=new Mt(R(a,l),d),l+=d;break}case 10:{const d=L(e.restDecoder);o[c]=new At(R(a,l),d),l+=d;break}default:{const d=(u&(De|Ut))===0,f=new j(R(a,l),null,(u&Ut)===Ut?e.readLeftID():null,null,(u&De)===De?e.readRightID():null,d?e.readParentInfo()?t.get(e.readString()):e.readLeftID():null,d&&(u&Fn)===Fn?e.readString():null,Gu(e,u));o[c]=f,l+=f.length}}}}return s},Yf=(e,t,s)=>{const n=[];let i=ze(s.keys()).sort((h,g)=>h-g);if(i.length===0)return null;const r=()=>{if(i.length===0)return null;let h=s.get(i[i.length-1]);for(;h.refs.length===h.i;)if(i.pop(),i.length>0)h=s.get(i[i.length-1]);else return null;return h};let o=r();if(o===null)return null;const a=new du,l=new Map,c=(h,g)=>{const b=l.get(h);(b==null||b>g)&&l.set(h,g)};let u=o.refs[o.i++];const d=new Map,f=()=>{for(const h of n){const g=h.id.client,b=s.get(g);b?(b.i--,a.clients.set(g,b.refs.slice(b.i)),s.delete(g),b.i=0,b.refs=[]):a.clients.set(g,[h]),i=i.filter(y=>y!==g)}n.length=0};for(;;){if(u.constructor!==At){const g=Lt(d,u.id.client,()=>X(t,u.id.client))-u.id.clock;if(g<0)n.push(u),c(u.id.client,u.id.clock-1),f();else{const b=u.getMissing(e,t);if(b!==null){n.push(u);const y=s.get(b)||{refs:[],i:0};if(y.refs.length===y.i)c(b,X(t,b)),f();else{u=y.refs[y.i++];continue}}else(g===0||g<u.length)&&(u.integrate(e,g),d.set(u.id.client,u.id.clock+u.length))}}if(n.length>0)u=n.pop();else if(o!==null&&o.i<o.refs.length)u=o.refs[o.i++];else{if(o=r(),o===null)break;u=o.refs[o.i++]}}if(a.clients.size>0){const h=new ce;return ha(h,a,new Map),T(h.restEncoder,0),{missing:l,update:h.toUint8Array()}}return null},Gf=(e,t)=>ha(e,t.doc.store,t.beforeState),fa=(e,t,s,n=new Zt(e))=>W(t,i=>{i.local=!1;let r=!1;const o=i.doc,a=o.store,l=qf(n,o),c=Yf(i,a,l),u=a.pendingStructs;if(u){for(const[f,h]of u.missing)if(h<X(a,f)){r=!0;break}if(c){for(const[f,h]of c.missing){const g=u.missing.get(f);(g==null||g>h)&&u.missing.set(f,h)}u.update=Yn([u.update,c.update])}}else a.pendingStructs=c;const d=yl(n,i,a);if(a.pendingDs){const f=new Zt(xt(a.pendingDs));L(f.restDecoder);const h=yl(f,i,a);d&&h?a.pendingDs=Yn([d,h]):a.pendingDs=d||h}else a.pendingDs=d;if(r){const f=a.pendingStructs.update;a.pendingStructs=null,$r(i.doc,f)}},s,!1),Kf=(e,t,s)=>fa(e,t,s,new se(e)),$r=(e,t,s,n=Zt)=>{const i=xt(t);fa(i,e,s,new n(i))},Jf=(e,t,s)=>$r(e,t,s,se),Xf=(e,t,s=new Map)=>{ha(e,t.store,s),ke(e,da(t.store))},ru=(e,t=new Uint8Array([0]),s=new ce)=>{const n=pa(t);Xf(s,e,n);const i=[s.toUint8Array()];if(e.store.pendingDs&&i.push(e.store.pendingDs),e.store.pendingStructs&&i.push(_a(e.store.pendingStructs.update,t)),i.length>1){if(s.constructor===hs)return _u(i.map((r,o)=>o===0?r:Cu(r)));if(s.constructor===ce)return Yn(i)}return i[0]},Qf=(e,t)=>ru(e,t,new hs),ou=e=>{const t=new Map,s=L(e.restDecoder);for(let n=0;n<s;n++){const i=L(e.restDecoder),r=L(e.restDecoder);t.set(i,r)}return t},pa=e=>ou(new Wn(xt(e))),ga=(e,t)=>(T(e.restEncoder,t.size),ze(t.entries()).sort((s,n)=>n[0]-s[0]).forEach(([s,n])=>{T(e.restEncoder,s),T(e.restEncoder,n)}),e),tp=(e,t)=>ga(e,_i(t.store)),ep=(e,t=new Ar)=>(e instanceof Map?ga(t,e):tp(t,e),t.toUint8Array()),sp=e=>ep(e,new Ks);class np{constructor(){this.l=[]}}const _l=()=>new np,wl=(e,t)=>e.l.push(t),xl=(e,t)=>{const s=e.l,n=s.length;e.l=s.filter(i=>t!==i),n===e.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},au=(e,t,s)=>ia(e.l,[t,s]);class Ss{constructor(t,s){this.client=t,this.clock=s}}const vs=(e,t)=>e===t||e!==null&&t!==null&&e.client===t.client&&e.clock===t.clock,R=(e,t)=>new Ss(e,t),kl=(e,t)=>{T(e,t.client),T(e,t.clock)},Sl=e=>R(L(e),L(e)),ma=e=>{for(const[t,s]of e.doc.share.entries())if(s===e)return t;throw Nt()},qn=(e,t)=>{for(;t!==null;){if(t.parent===e)return!0;t=t.parent._item}return!1},ip=e=>{const t=[];let s=e._start;for(;s;)t.push(s),s=s.right;console.log("Children: ",t),console.log("Children content: ",t.filter(n=>!n.deleted).map(n=>n.content))};class rp{constructor(t,s=t.getMap("users")){const n=new Map;this.yusers=s,this.doc=t,this.clients=new Map,this.dss=n;const i=(r,o)=>{const a=r.get("ds"),l=r.get("ids"),c=u=>this.clients.set(u,o);a.observe(u=>{u.changes.added.forEach(d=>{d.content.getContent().forEach(f=>{f instanceof Uint8Array&&this.dss.set(o,Ts([this.dss.get(o)||Er(),Ve(new Wn(xt(f)))]))})})}),this.dss.set(o,Ts(a.map(u=>Ve(new Wn(xt(u)))))),l.observe(u=>u.changes.added.forEach(d=>d.content.getContent().forEach(c))),l.forEach(c)};s.observe(r=>{r.keysChanged.forEach(o=>i(s.get(o),o))}),s.forEach(i)}setUserMapping(t,s,n,{filter:i=()=>!0}={}){const r=this.yusers;let o=r.get(n);o||(o=new ss,o.set("ids",new Le),o.set("ds",new Le),r.set(n,o)),o.get("ids").push([s]),r.observe(a=>{setTimeout(()=>{const l=r.get(n);if(l!==o){o=l,this.clients.forEach((d,f)=>{n===d&&o.get("ids").push([f])});const c=new Ks,u=this.dss.get(n);u&&(ke(c,u),o.get("ds").push([c.toUint8Array()]))}},0)}),t.on("afterTransaction",a=>{setTimeout(()=>{const l=o.get("ds"),c=a.deleteSet;if(a.local&&c.clients.size>0&&i(a,c)){const u=new Ks;ke(u,c),l.push([u.toUint8Array()])}})})}getUserByClientId(t){return this.clients.get(t)||null}getUserByDeletedId(t){for(const[s,n]of this.dss.entries())if(zs(n,t))return s;return null}}class Tr{constructor(t,s,n,i=0){this.type=t,this.tname=s,this.item=n,this.assoc=i}}const op=e=>{const t={};return e.type&&(t.type=e.type),e.tname&&(t.tname=e.tname),e.item&&(t.item=e.item),e.assoc!=null&&(t.assoc=e.assoc),t},ap=e=>new Tr(e.type==null?null:R(e.type.client,e.type.clock),e.tname??null,e.item==null?null:R(e.item.client,e.item.clock),e.assoc==null?0:e.assoc);class lu{constructor(t,s,n=0){this.type=t,this.index=s,this.assoc=n}}const lp=(e,t,s=0)=>new lu(e,t,s),Di=(e,t,s)=>{let n=null,i=null;return e._item===null?i=ma(e):n=R(e._item.id.client,e._item.id.clock),new Tr(n,i,t,s)},Co=(e,t,s=0)=>{let n=e._start;if(s<0){if(t===0)return Di(e,null,s);t--}for(;n!==null;){if(!n.deleted&&n.countable){if(n.length>t)return Di(e,R(n.id.client,n.id.clock+t),s);t-=n.length}if(n.right===null&&s<0)return Di(e,n.lastId,s);n=n.right}return Di(e,null,s)},cp=(e,t)=>{const{type:s,tname:n,item:i,assoc:r}=t;if(i!==null)T(e,0),kl(e,i);else if(n!==null)Un(e,1),xs(e,n);else if(s!==null)Un(e,2),kl(e,s);else throw Nt();return kr(e,r),e},up=e=>{const t=fn();return cp(t,e),Qt(t)},dp=e=>{let t=null,s=null,n=null;switch(L(e)){case 0:n=Sl(e);break;case 1:s=ks(e);break;case 2:t=Sl(e)}const i=qc(e)?Cr(e):0;return new Tr(t,s,n,i)},hp=e=>dp(xt(e)),fp=(e,t)=>{const s=Cs(e,t),n=t.clock-s.id.clock;return{item:s,diff:n}},Eo=(e,t,s=!0)=>{const n=t.store,i=e.item,r=e.type,o=e.tname,a=e.assoc;let l=null,c=0;if(i!==null){if(X(n,i.client)<=i.clock)return null;const u=s?Ro(n,i):fp(n,i),d=u.item;if(!(d instanceof j))return null;if(l=d.parent,l._item===null||!l._item.deleted){c=d.deleted||!d.countable?0:u.diff+(a>=0?0:1);let f=d.left;for(;f!==null;)!f.deleted&&f.countable&&(c+=f.length),f=f.left}}else{if(o!==null)l=t.get(o);else if(r!==null){if(X(n,r.client)<=r.clock)return null;const{item:u}=s?Ro(n,r):{item:Cs(n,r)};if(u instanceof j&&u.content instanceof ne)l=u.content.type;else return null}else throw Nt();a>=0?c=l._length:c=0}return lp(l,c,e.assoc)},pp=(e,t)=>e===t||e!==null&&t!==null&&e.tname===t.tname&&vs(e.item,t.item)&&vs(e.type,t.type)&&e.assoc===t.assoc;class ba{constructor(t,s){this.ds=t,this.sv=s}}const gp=(e,t)=>{const s=e.ds.clients,n=t.ds.clients,i=e.sv,r=t.sv;if(i.size!==r.size||s.size!==n.size)return!1;for(const[o,a]of i.entries())if(r.get(o)!==a)return!1;for(const[o,a]of s.entries()){const l=n.get(o)||[];if(a.length!==l.length)return!1;for(let c=0;c<a.length;c++){const u=a[c],d=l[c];if(u.clock!==d.clock||u.len!==d.len)return!1}}return!0},cu=(e,t=new Ar)=>(ke(t,e.ds),ga(t,e.sv),t.toUint8Array()),mp=e=>cu(e,new Ks),uu=(e,t=new iu(xt(e)))=>new ba(Ve(t),ou(t)),bp=e=>uu(e,new Wn(xt(e))),va=(e,t)=>new ba(e,t),vp=va(Er(),new Map),yp=e=>va(da(e.store),_i(e.store)),Ye=(e,t)=>t===void 0?!e.deleted:t.sv.has(e.id.client)&&(t.sv.get(e.id.client)||0)>e.id.clock&&!zs(t.ds,e.id),Ao=(e,t)=>{const s=Lt(e.meta,Ao,As),n=e.doc.store;s.has(t)||(t.sv.forEach((i,r)=>{i<X(n,r)&&wt(e,R(r,i))}),$s(e,t.ds,i=>{}),s.add(t))},_p=(e,t,s=new ds)=>{if(e.gc)throw new Error("Garbage-collection must be disabled in `originDoc`!");const{sv:n,ds:i}=t,r=new ce;return e.transact(o=>{let a=0;n.forEach(l=>{l>0&&a++}),T(r.restEncoder,a);for(const[l,c]of n){if(c===0)continue;c<X(e.store,l)&&wt(o,R(l,c));const u=e.store.clients.get(l)||[],d=te(u,c-1);T(r.restEncoder,d+1),r.writeClient(l),T(r.restEncoder,0);for(let f=0;f<=d;f++)u[f].write(r,0)}ke(r,i)}),$r(s,r.toUint8Array(),"snapshot"),s},wp=(e,t,s=Zt)=>{const n=new s(xt(t)),i=new fs(n,!1);for(let o=i.curr;o!==null;o=i.next())if((e.sv.get(o.id.client)||0)<o.id.clock+o.length)return!1;const r=Ts([e.ds,Ve(n)]);return su(e.ds,r)},xp=(e,t)=>wp(e,t,se);class du{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}}const _i=e=>{const t=new Map;return e.clients.forEach((s,n)=>{const i=s[s.length-1];t.set(n,i.id.clock+i.length)}),t},X=(e,t)=>{const s=e.clients.get(t);if(s===void 0)return 0;const n=s[s.length-1];return n.id.clock+n.length},hu=(e,t)=>{let s=e.clients.get(t.id.client);if(s===void 0)s=[],e.clients.set(t.id.client,s);else{const n=s[s.length-1];if(n.id.clock+n.length!==t.id.clock)throw Nt()}s.push(t)},te=(e,t)=>{let s=0,n=e.length-1,i=e[n],r=i.id.clock;if(r===t)return n;let o=ts(t/(r+i.length-1)*n);for(;s<=n;){if(i=e[o],r=i.id.clock,r<=t){if(t<r+i.length)return o;s=o+1}else n=o-1;o=ts((s+n)/2)}throw Nt()},kp=(e,t)=>{const s=e.clients.get(t.client);return s[te(s,t.clock)]},Cs=kp,$o=(e,t,s)=>{const n=te(t,s),i=t[n];return i.id.clock<s&&i instanceof j?(t.splice(n+1,0,nr(e,i,s-i.id.clock)),n+1):n},wt=(e,t)=>{const s=e.doc.store.clients.get(t.client);return s[$o(e,s,t.clock)]},To=(e,t,s)=>{const n=t.clients.get(s.client),i=te(n,s.clock),r=n[i];return s.clock!==r.id.clock+r.length-1&&r.constructor!==Mt&&n.splice(i+1,0,nr(e,r,s.clock-r.id.clock+1)),r},Sp=(e,t,s)=>{const n=e.clients.get(t.id.client);n[te(n,t.id.clock)]=s},fu=(e,t,s,n,i)=>{if(n===0)return;const r=s+n;let o=$o(e,t,s),a;do a=t[o++],r<a.id.clock+a.length&&$o(e,t,r),i(a);while(o<t.length&&t[o].id.clock<r)};class pu{constructor(t,s,n){this.doc=t,this.deleteSet=new pn,this.beforeState=_i(t.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=s,this.meta=new Map,this.local=n,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}}const Cl=(e,t)=>t.deleteSet.clients.size===0&&!Fh(t.afterState,(s,n)=>t.beforeState.get(n)!==s)?!1:(ua(t.deleteSet),Gf(e,t),ke(e,t.deleteSet),!0),El=(e,t,s)=>{const n=t._item;(n===null||n.id.clock<(e.beforeState.get(n.id.client)||0)&&!n.deleted)&&Lt(e.changed,t,As).add(s)},Yi=(e,t)=>{let s=e[t],n=e[t-1],i=t;for(;i>0;s=n,n=e[--i-1]){if(n.deleted===s.deleted&&n.constructor===s.constructor&&n.mergeWith(s)){s instanceof j&&s.parentSub!==null&&s.parent._map.get(s.parentSub)===s&&s.parent._map.set(s.parentSub,n);continue}break}const r=t-i;return r&&e.splice(t+1-r,r),r},gu=(e,t,s)=>{for(const[n,i]of e.clients.entries()){const r=t.clients.get(n);for(let o=i.length-1;o>=0;o--){const a=i[o],l=a.clock+a.len;for(let c=te(r,a.clock),u=r[c];c<r.length&&u.id.clock<l;u=r[++c]){const d=r[c];if(a.clock+a.len<=d.id.clock)break;d instanceof j&&d.deleted&&!d.keep&&s(d)&&d.gc(t,!1)}}}},mu=(e,t)=>{e.clients.forEach((s,n)=>{const i=t.clients.get(n);for(let r=s.length-1;r>=0;r--){const o=s[r],a=Uc(i.length-1,1+te(i,o.clock+o.len-1));for(let l=a,c=i[l];l>0&&c.id.clock>=o.clock;c=i[l])l-=1+Yi(i,l)}})},Cp=(e,t,s)=>{gu(e,t,s),mu(e,t)},bu=(e,t)=>{if(t<e.length){const s=e[t],n=s.doc,i=n.store,r=s.deleteSet,o=s._mergeStructs;try{ua(r),s.afterState=_i(s.doc.store),n.emit("beforeObserverCalls",[s,n]);const a=[];s.changed.forEach((l,c)=>a.push(()=>{(c._item===null||!c._item.deleted)&&c._callObserver(s,l)})),a.push(()=>{s.changedParentTypes.forEach((l,c)=>{c._dEH.l.length>0&&(c._item===null||!c._item.deleted)&&(l=l.filter(u=>u.target._item===null||!u.target._item.deleted),l.forEach(u=>{u.currentTarget=c,u._path=null}),l.sort((u,d)=>u.path.length-d.path.length),au(c._dEH,l,s))})}),a.push(()=>n.emit("afterTransaction",[s,n])),ia(a,[]),s._needFormattingCleanup&&Kp(s)}finally{n.gc&&gu(r,i,n.gcFilter),mu(r,i),s.afterState.forEach((u,d)=>{const f=s.beforeState.get(d)||0;if(f!==u){const h=i.clients.get(d),g=Ns(te(h,f),1);for(let b=h.length-1;b>=g;)b-=1+Yi(h,b)}});for(let u=o.length-1;u>=0;u--){const{client:d,clock:f}=o[u].id,h=i.clients.get(d),g=te(h,f);g+1<h.length&&Yi(h,g+1)>1||g>0&&Yi(h,g)}if(!s.local&&s.afterState.get(n.clientID)!==s.beforeState.get(n.clientID)&&(So(la,Gc,"[yjs] ",Kc,Jc,"Changed the client-id because another client seems to be using it."),n.clientID=nu()),n.emit("afterTransactionCleanup",[s,n]),n._observers.has("update")){const u=new hs;Cl(u,s)&&n.emit("update",[u.toUint8Array(),s.origin,n,s])}if(n._observers.has("updateV2")){const u=new ce;Cl(u,s)&&n.emit("updateV2",[u.toUint8Array(),s.origin,n,s])}const{subdocsAdded:a,subdocsLoaded:l,subdocsRemoved:c}=s;(a.size>0||c.size>0||l.size>0)&&(a.forEach(u=>{u.clientID=n.clientID,u.collectionid==null&&(u.collectionid=n.collectionid),n.subdocs.add(u)}),c.forEach(u=>n.subdocs.delete(u)),n.emit("subdocs",[{loaded:l,added:a,removed:c},n,s]),c.forEach(u=>u.destroy())),e.length<=t+1?(n._transactionCleanups=[],n.emit("afterAllTransactions",[n,e])):bu(e,t+1)}}},W=(e,t,s=null,n=!0)=>{const i=e._transactionCleanups;let r=!1,o=null;e._transaction===null&&(r=!0,e._transaction=new pu(e,s,n),i.push(e._transaction),i.length===1&&e.emit("beforeAllTransactions",[e]),e.emit("beforeTransaction",[e._transaction,e]));try{o=t(e._transaction)}finally{if(r){const a=e._transaction===i[0];e._transaction=null,a&&bu(i,0)}}return o};class Ep{constructor(t,s){this.insertions=s,this.deletions=t,this.meta=new Map}}const Al=(e,t,s)=>{$s(e,s.deletions,n=>{n instanceof j&&t.scope.some(i=>i===e.doc||qn(i,n))&&Ca(n,!1)})},$l=(e,t,s)=>{let n=null;const i=e.doc,r=e.scope;W(i,a=>{for(;t.length>0&&e.currStackItem===null;){const l=i.store,c=t.pop(),u=new Set,d=[];let f=!1;$s(a,c.insertions,h=>{if(h instanceof j){if(h.redone!==null){let{item:g,diff:b}=Ro(l,h.id);b>0&&(g=wt(a,R(g.id.client,g.id.clock+b))),h=g}!h.deleted&&r.some(g=>g===a.doc||qn(g,h))&&d.push(h)}}),$s(a,c.deletions,h=>{h instanceof j&&r.some(g=>g===a.doc||qn(g,h))&&!zs(c.insertions,h.id)&&u.add(h)}),u.forEach(h=>{f=Yu(a,h,u,c.insertions,e.ignoreRemoteMapChanges,e)!==null||f});for(let h=d.length-1;h>=0;h--){const g=d[h];e.deleteFilter(g)&&(g.delete(a),f=!0)}e.currStackItem=f?c:null}a.changed.forEach((l,c)=>{l.has(null)&&c._searchMarker&&(c._searchMarker.length=0)}),n=a},e);const o=e.currStackItem;if(o!=null){const a=n.changedParentTypes;e.emit("stack-item-popped",[{stackItem:o,type:s,changedParentTypes:a,origin:e},e]),e.currStackItem=null}return o};class Ap extends aa{constructor(t,{captureTimeout:s=500,captureTransaction:n=l=>!0,deleteFilter:i=()=>!0,trackedOrigins:r=new Set([null]),ignoreRemoteMapChanges:o=!1,doc:a=yo(t)?t[0].doc:t instanceof ds?t:t.doc}={}){super(),this.scope=[],this.doc=a,this.addToScope(t),this.deleteFilter=i,r.add(this),this.trackedOrigins=r,this.captureTransaction=n,this.undoStack=[],this.redoStack=[],this.undoing=!1,this.redoing=!1,this.currStackItem=null,this.lastChange=0,this.ignoreRemoteMapChanges=o,this.captureTimeout=s,this.afterTransactionHandler=l=>{if(!this.captureTransaction(l)||!this.scope.some(y=>l.changedParentTypes.has(y)||y===this.doc)||!this.trackedOrigins.has(l.origin)&&(!l.origin||!this.trackedOrigins.has(l.origin.constructor)))return;const c=this.undoing,u=this.redoing,d=c?this.redoStack:this.undoStack;c?this.stopCapturing():u||this.clear(!1,!0);const f=new pn;l.afterState.forEach((y,_)=>{const k=l.beforeState.get(_)||0,E=y-k;E>0&&Zn(f,_,k,E)});const h=If();let g=!1;if(this.lastChange>0&&h-this.lastChange<this.captureTimeout&&d.length>0&&!c&&!u){const y=d[d.length-1];y.deletions=Ts([y.deletions,l.deleteSet]),y.insertions=Ts([y.insertions,f])}else d.push(new Ep(l.deleteSet,f)),g=!0;!c&&!u&&(this.lastChange=h),$s(l,l.deleteSet,y=>{y instanceof j&&this.scope.some(_=>_===l.doc||qn(_,y))&&Ca(y,!0)});const b=[{stackItem:d[d.length-1],origin:l.origin,type:c?"redo":"undo",changedParentTypes:l.changedParentTypes},this];g?this.emit("stack-item-added",b):this.emit("stack-item-updated",b)},this.doc.on("afterTransaction",this.afterTransactionHandler),this.doc.on("destroy",()=>{this.destroy()})}addToScope(t){const s=new Set(this.scope);t=yo(t)?t:[t],t.forEach(n=>{s.has(n)||(s.add(n),(n instanceof lt?n.doc!==this.doc:n!==this.doc)&&Qc("[yjs#509] Not same Y.Doc"),this.scope.push(n))})}addTrackedOrigin(t){this.trackedOrigins.add(t)}removeTrackedOrigin(t){this.trackedOrigins.delete(t)}clear(t=!0,s=!0){(t&&this.canUndo()||s&&this.canRedo())&&this.doc.transact(n=>{t&&(this.undoStack.forEach(i=>Al(n,this,i)),this.undoStack=[]),s&&(this.redoStack.forEach(i=>Al(n,this,i)),this.redoStack=[]),this.emit("stack-cleared",[{undoStackCleared:t,redoStackCleared:s}])})}stopCapturing(){this.lastChange=0}undo(){this.undoing=!0;let t;try{t=$l(this,this.undoStack,"undo")}finally{this.undoing=!1}return t}redo(){this.redoing=!0;let t;try{t=$l(this,this.redoStack,"redo")}finally{this.redoing=!1}return t}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}destroy(){this.trackedOrigins.delete(this),this.doc.off("afterTransaction",this.afterTransactionHandler),super.destroy()}}function*$p(e){const t=L(e.restDecoder);for(let s=0;s<t;s++){const n=L(e.restDecoder),i=e.readClient();let r=L(e.restDecoder);for(let o=0;o<n;o++){const a=e.readInfo();if(a===10){const l=L(e.restDecoder);yield new At(R(i,r),l),r+=l}else if((xr&a)!==0){const l=(a&(De|Ut))===0,c=new j(R(i,r),null,(a&Ut)===Ut?e.readLeftID():null,null,(a&De)===De?e.readRightID():null,l?e.readParentInfo()?e.readString():e.readLeftID():null,l&&(a&Fn)===Fn?e.readString():null,Gu(e,a));yield c,r+=c.length}else{const l=e.readLen();yield new Mt(R(i,r),l),r+=l}}}}class fs{constructor(t,s){this.gen=$p(t),this.curr=null,this.done=!1,this.filterSkips=s,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===At);return this.curr}}const Tp=e=>vu(e,se),vu=(e,t=Zt)=>{const s=[],n=new t(xt(e)),i=new fs(n,!1);for(let o=i.curr;o!==null;o=i.next())s.push(o);So("Structs: ",s);const r=Ve(n);So("DeleteSet: ",r)},Op=e=>yu(e,se),yu=(e,t=Zt)=>{const s=[],n=new t(xt(e)),i=new fs(n,!1);for(let r=i.curr;r!==null;r=i.next())s.push(r);return{structs:s,ds:Ve(n)}};class ya{constructor(t){this.currClient=0,this.startClock=0,this.written=0,this.encoder=t,this.clientStructs=[]}}const _u=e=>Yn(e,se,hs),wu=(e,t=Ar,s=Zt)=>{const n=new t,i=new fs(new s(xt(e)),!1);let r=i.curr;if(r!==null){let o=0,a=r.id.client,l=r.id.clock!==0,c=l?0:r.id.clock+r.length;for(;r!==null;r=i.next())a!==r.id.client&&(c!==0&&(o++,T(n.restEncoder,a),T(n.restEncoder,c)),a=r.id.client,c=0,l=r.id.clock!==0),r.constructor===At&&(l=!0),l||(c=r.id.clock+r.length);c!==0&&(o++,T(n.restEncoder,a),T(n.restEncoder,c));const u=fn();return T(u,o),df(u,n.restEncoder),n.restEncoder=u,n.toUint8Array()}else return T(n.restEncoder,0),n.toUint8Array()},Rp=e=>wu(e,Ks,se),xu=(e,t=Zt)=>{const s=new Map,n=new Map,i=new fs(new t(xt(e)),!1);let r=i.curr;if(r!==null){let o=r.id.client,a=r.id.clock;for(s.set(o,a);r!==null;r=i.next())o!==r.id.client&&(n.set(o,a),s.set(r.id.client,r.id.clock),o=r.id.client),a=r.id.clock+r.length;n.set(o,a)}return{from:s,to:n}},Ip=e=>xu(e,se),Dp=(e,t)=>{if(e.constructor===Mt){const{client:s,clock:n}=e.id;return new Mt(R(s,n+t),e.length-t)}else if(e.constructor===At){const{client:s,clock:n}=e.id;return new At(R(s,n+t),e.length-t)}else{const s=e,{client:n,clock:i}=s.id;return new j(R(n,i+t),null,R(n,i+t-1),null,s.rightOrigin,s.parent,s.parentSub,s.content.splice(t))}},Yn=(e,t=Zt,s=ce)=>{if(e.length===1)return e[0];const n=e.map(u=>new t(xt(u)));let i=n.map(u=>new fs(u,!0)),r=null;const o=new s,a=new ya(o);for(;i=i.filter(f=>f.curr!==null),i.sort((f,h)=>{if(f.curr.id.client===h.curr.id.client){const g=f.curr.id.clock-h.curr.id.clock;return g===0?f.curr.constructor===h.curr.constructor?0:f.curr.constructor===At?1:-1:g}else return h.curr.id.client-f.curr.id.client}),i.length!==0;){const u=i[0],d=u.curr.id.client;if(r!==null){let f=u.curr,h=!1;for(;f!==null&&f.id.clock+f.length<=r.struct.id.clock+r.struct.length&&f.id.client>=r.struct.id.client;)f=u.next(),h=!0;if(f===null||f.id.client!==d||h&&f.id.clock>r.struct.id.clock+r.struct.length)continue;if(d!==r.struct.id.client)Ge(a,r.struct,r.offset),r={struct:f,offset:0},u.next();else if(r.struct.id.clock+r.struct.length<f.id.clock)if(r.struct.constructor===At)r.struct.length=f.id.clock+f.length-r.struct.id.clock;else{Ge(a,r.struct,r.offset);const g=f.id.clock-r.struct.id.clock-r.struct.length;r={struct:new At(R(d,r.struct.id.clock+r.struct.length),g),offset:0}}else{const g=r.struct.id.clock+r.struct.length-f.id.clock;g>0&&(r.struct.constructor===At?r.struct.length-=g:f=Dp(f,g)),r.struct.mergeWith(f)||(Ge(a,r.struct,r.offset),r={struct:f,offset:0},u.next())}}else r={struct:u.curr,offset:0},u.next();for(let f=u.curr;f!==null&&f.id.client===d&&f.id.clock===r.struct.id.clock+r.struct.length&&f.constructor!==At;f=u.next())Ge(a,r.struct,r.offset),r={struct:f,offset:0}}r!==null&&(Ge(a,r.struct,r.offset),r=null),wa(a);const l=n.map(u=>Ve(u)),c=Ts(l);return ke(o,c),o.toUint8Array()},_a=(e,t,s=Zt,n=ce)=>{const i=pa(t),r=new n,o=new ya(r),a=new s(xt(e)),l=new fs(a,!1);for(;l.curr;){const u=l.curr,d=u.id.client,f=i.get(d)||0;if(l.curr.constructor===At){l.next();continue}if(u.id.clock+u.length>f)for(Ge(o,u,Ns(f-u.id.clock,0)),l.next();l.curr&&l.curr.id.client===d;)Ge(o,l.curr,0),l.next();else for(;l.curr&&l.curr.id.client===d&&l.curr.id.clock+l.curr.length<=f;)l.next()}wa(o);const c=Ve(a);return ke(r,c),r.toUint8Array()},Lp=(e,t)=>_a(e,t,se,hs),ku=e=>{e.written>0&&(e.clientStructs.push({written:e.written,restEncoder:Qt(e.encoder.restEncoder)}),e.encoder.restEncoder=fn(),e.written=0)},Ge=(e,t,s)=>{e.written>0&&e.currClient!==t.id.client&&ku(e),e.written===0&&(e.currClient=t.id.client,e.encoder.writeClient(t.id.client),T(e.encoder.restEncoder,t.id.clock+s)),t.write(e.encoder,s),e.written++},wa=e=>{ku(e);const t=e.encoder.restEncoder;T(t,e.clientStructs.length);for(let s=0;s<e.clientStructs.length;s++){const n=e.clientStructs[s];T(t,n.written),yi(t,n.restEncoder)}},Or=(e,t,s,n)=>{const i=new s(xt(e)),r=new fs(i,!1),o=new n,a=new ya(o);for(let c=r.curr;c!==null;c=r.next())Ge(a,t(c),0);wa(a);const l=Ve(i);return ke(o,l),o.toUint8Array()},Su=({formatting:e=!0,subdocs:t=!0,yxml:s=!0}={})=>{let n=0;const i=ht(),r=ht(),o=ht(),a=ht();return a.set(null,null),l=>{switch(l.constructor){case Mt:case At:return l;case j:{const c=l,u=c.content;switch(u.constructor){case Rs:break;case ne:{if(s){const d=u.type;d instanceof is&&(d.nodeName=Lt(r,d.nodeName,()=>"node-"+n)),d instanceof Js&&(d.hookName=Lt(r,d.hookName,()=>"hook-"+n))}break}case Be:{const d=u;d.arr=d.arr.map(()=>n);break}case Vs:{const d=u;d.content=new Uint8Array([n]);break}case Bs:{const d=u;t&&(d.opts={},d.doc.guid=n+"");break}case je:{const d=u;d.embed={};break}case rt:{const d=u;e&&(d.key=Lt(o,d.key,()=>n+""),d.value=Lt(a,d.value,()=>({i:n})));break}case Xs:{const d=u;d.arr=d.arr.map(()=>n);break}case ee:{const d=u;d.str=Vh(n%10+"",d.str.length);break}default:Nt()}return c.parentSub&&(c.parentSub=Lt(i,c.parentSub,()=>n+"")),n++,l}default:Nt()}}},Mp=(e,t)=>Or(e,Su(t),se,hs),Pp=(e,t)=>Or(e,Su(t),Zt,ce),Np=e=>Or(e,Vc,se,ce),Cu=e=>Or(e,Vc,Zt,hs),Tl="You must not compute changes after the event-handler fired.";class wi{constructor(t,s){this.target=t,this.currentTarget=t,this.transaction=s,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=zp(this.currentTarget,this.target))}deletes(t){return zs(this.transaction.deleteSet,t.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw es(Tl);const t=new Map,s=this.target;this.transaction.changed.get(s).forEach(i=>{if(i!==null){const r=s._map.get(i);let o,a;if(this.adds(r)){let l=r.left;for(;l!==null&&this.adds(l);)l=l.left;if(this.deletes(r))if(l!==null&&this.deletes(l))o="delete",a=Gr(l.content.getContent());else return;else l!==null&&this.deletes(l)?(o="update",a=Gr(l.content.getContent())):(o="add",a=void 0)}else if(this.deletes(r))o="delete",a=Gr(r.content.getContent());else return;t.set(i,{action:o,oldValue:a})}}),this._keys=t}return this._keys}get delta(){return this.changes.delta}adds(t){return t.id.clock>=(this.transaction.beforeState.get(t.id.client)||0)}get changes(){let t=this._changes;if(t===null){if(this.transaction.doc._transactionCleanups.length===0)throw es(Tl);const s=this.target,n=As(),i=As(),r=[];if(t={added:n,deleted:i,delta:r,keys:this.keys},this.transaction.changed.get(s).has(null)){let a=null;const l=()=>{a&&r.push(a)};for(let c=s._start;c!==null;c=c.right)c.deleted?this.deletes(c)&&!this.adds(c)&&((a===null||a.delete===void 0)&&(l(),a={delete:0}),a.delete+=c.length,i.add(c)):this.adds(c)?((a===null||a.insert===void 0)&&(l(),a={insert:[]}),a.insert=a.insert.concat(c.content.getContent()),n.add(c)):((a===null||a.retain===void 0)&&(l(),a={retain:0}),a.retain+=c.length);a!==null&&a.retain===void 0&&l()}this._changes=t}return t}}const zp=(e,t)=>{const s=[];for(;t._item!==null&&t!==e;){if(t._item.parentSub!==null)s.unshift(t._item.parentSub);else{let n=0,i=t._item.parent._start;for(;i!==t._item&&i!==null;)!i.deleted&&i.countable&&(n+=i.length),i=i.right;s.unshift(n)}t=t._item.parent}return s},gt=()=>{Qc("Invalid access: Add Yjs type to a document before reading data.")},Eu=80;let xa=0;class Vp{constructor(t,s){t.marker=!0,this.p=t,this.index=s,this.timestamp=xa++}}const Bp=e=>{e.timestamp=xa++},Au=(e,t,s)=>{e.p.marker=!1,e.p=t,t.marker=!0,e.index=s,e.timestamp=xa++},Fp=(e,t,s)=>{if(e.length>=Eu){const n=e.reduce((i,r)=>i.timestamp<r.timestamp?i:r);return Au(n,t,s),n}else{const n=new Vp(t,s);return e.push(n),n}},Rr=(e,t)=>{if(e._start===null||t===0||e._searchMarker===null)return null;const s=e._searchMarker.length===0?null:e._searchMarker.reduce((r,o)=>Zi(t-r.index)<Zi(t-o.index)?r:o);let n=e._start,i=0;for(s!==null&&(n=s.p,i=s.index,Bp(s));n.right!==null&&i<t;){if(!n.deleted&&n.countable){if(t<i+n.length)break;i+=n.length}n=n.right}for(;n.left!==null&&i>t;)n=n.left,!n.deleted&&n.countable&&(i-=n.length);for(;n.left!==null&&n.left.id.client===n.id.client&&n.left.id.clock+n.left.length===n.id.clock;)n=n.left,!n.deleted&&n.countable&&(i-=n.length);return s!==null&&Zi(s.index-i)<n.parent.length/Eu?(Au(s,n,i),s):Fp(e._searchMarker,n,i)},Gn=(e,t,s)=>{for(let n=e.length-1;n>=0;n--){const i=e[n];if(s>0){let r=i.p;for(r.marker=!1;r&&(r.deleted||!r.countable);)r=r.left,r&&!r.deleted&&r.countable&&(i.index-=r.length);if(r===null||r.marker===!0){e.splice(n,1);continue}i.p=r,r.marker=!0}(t<i.index||s>0&&t===i.index)&&(i.index=Ns(t,i.index+s))}},Up=e=>{e.doc??gt();let t=e._start;const s=[];for(;t;)s.push(t),t=t.right;return s},Ir=(e,t,s)=>{const n=e,i=t.changedParentTypes;for(;Lt(i,e,()=>[]).push(s),e._item!==null;)e=e._item.parent;au(n._eH,s,t)};class lt{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=_l(),this._dEH=_l(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(t,s){this.doc=t,this._item=s}_copy(){throw _e()}clone(){throw _e()}_write(t){}get _first(){let t=this._start;for(;t!==null&&t.deleted;)t=t.right;return t}_callObserver(t,s){!t.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(t){wl(this._eH,t)}observeDeep(t){wl(this._dEH,t)}unobserve(t){xl(this._eH,t)}unobserveDeep(t){xl(this._dEH,t)}toJSON(){}}const $u=(e,t,s)=>{e.doc??gt(),t<0&&(t=e._length+t),s<0&&(s=e._length+s);let n=s-t;const i=[];let r=e._start;for(;r!==null&&n>0;){if(r.countable&&!r.deleted){const o=r.content.getContent();if(o.length<=t)t-=o.length;else{for(let a=t;a<o.length&&n>0;a++)i.push(o[a]),n--;t=0}}r=r.right}return i},Tu=e=>{e.doc??gt();const t=[];let s=e._start;for(;s!==null;){if(s.countable&&!s.deleted){const n=s.content.getContent();for(let i=0;i<n.length;i++)t.push(n[i])}s=s.right}return t},Hp=(e,t)=>{const s=[];let n=e._start;for(;n!==null;){if(n.countable&&Ye(n,t)){const i=n.content.getContent();for(let r=0;r<i.length;r++)s.push(i[r])}n=n.right}return s},Kn=(e,t)=>{let s=0,n=e._start;for(e.doc??gt();n!==null;){if(n.countable&&!n.deleted){const i=n.content.getContent();for(let r=0;r<i.length;r++)t(i[r],s++,e)}n=n.right}},Ou=(e,t)=>{const s=[];return Kn(e,(n,i)=>{s.push(t(n,i,e))}),s},jp=e=>{let t=e._start,s=null,n=0;return{[Symbol.iterator](){return this},next:()=>{if(s===null){for(;t!==null&&t.deleted;)t=t.right;if(t===null)return{done:!0,value:void 0};s=t.content.getContent(),n=0,t=t.right}const i=s[n++];return s.length<=n&&(s=null),{done:!1,value:i}}}},Ru=(e,t)=>{e.doc??gt();const s=Rr(e,t);let n=e._start;for(s!==null&&(n=s.p,t-=s.index);n!==null;n=n.right)if(!n.deleted&&n.countable){if(t<n.length)return n.content.getContent()[t];t-=n.length}},er=(e,t,s,n)=>{let i=s;const r=e.doc,o=r.clientID,a=r.store,l=s===null?t._start:s.right;let c=[];const u=()=>{c.length>0&&(i=new j(R(o,X(a,o)),i,i&&i.lastId,l,l&&l.id,t,null,new Be(c)),i.integrate(e,0),c=[])};n.forEach(d=>{if(d===null)c.push(d);else switch(d.constructor){case Number:case Object:case Boolean:case Array:case String:c.push(d);break;default:switch(u(),d.constructor){case Uint8Array:case ArrayBuffer:i=new j(R(o,X(a,o)),i,i&&i.lastId,l,l&&l.id,t,null,new Vs(new Uint8Array(d))),i.integrate(e,0);break;case ds:i=new j(R(o,X(a,o)),i,i&&i.lastId,l,l&&l.id,t,null,new Bs(d)),i.integrate(e,0);break;default:if(d instanceof lt)i=new j(R(o,X(a,o)),i,i&&i.lastId,l,l&&l.id,t,null,new ne(d)),i.integrate(e,0);else throw new Error("Unexpected content type in insert operation")}}}),u()},Iu=()=>es("Length exceeded!"),Du=(e,t,s,n)=>{if(s>t._length)throw Iu();if(s===0)return t._searchMarker&&Gn(t._searchMarker,s,n.length),er(e,t,null,n);const i=s,r=Rr(t,s);let o=t._start;for(r!==null&&(o=r.p,s-=r.index,s===0&&(o=o.prev,s+=o&&o.countable&&!o.deleted?o.length:0));o!==null;o=o.right)if(!o.deleted&&o.countable){if(s<=o.length){s<o.length&&wt(e,R(o.id.client,o.id.clock+s));break}s-=o.length}return t._searchMarker&&Gn(t._searchMarker,i,n.length),er(e,t,o,n)},Zp=(e,t,s)=>{let i=(t._searchMarker||[]).reduce((r,o)=>o.index>r.index?o:r,{index:0,p:t._start}).p;if(i)for(;i.right;)i=i.right;return er(e,t,i,s)},Lu=(e,t,s,n)=>{if(n===0)return;const i=s,r=n,o=Rr(t,s);let a=t._start;for(o!==null&&(a=o.p,s-=o.index);a!==null&&s>0;a=a.right)!a.deleted&&a.countable&&(s<a.length&&wt(e,R(a.id.client,a.id.clock+s)),s-=a.length);for(;n>0&&a!==null;)a.deleted||(n<a.length&&wt(e,R(a.id.client,a.id.clock+n)),a.delete(e),n-=a.length),a=a.right;if(n>0)throw Iu();t._searchMarker&&Gn(t._searchMarker,i,-r+n)},sr=(e,t,s)=>{const n=t._map.get(s);n!==void 0&&n.delete(e)},ka=(e,t,s,n)=>{const i=t._map.get(s)||null,r=e.doc,o=r.clientID;let a;if(n==null)a=new Be([n]);else switch(n.constructor){case Number:case Object:case Boolean:case Array:case String:a=new Be([n]);break;case Uint8Array:a=new Vs(n);break;case ds:a=new Bs(n);break;default:if(n instanceof lt)a=new ne(n);else throw new Error("Unexpected content type")}new j(R(o,X(r.store,o)),i,i&&i.lastId,null,null,t,s,a).integrate(e,0)},Sa=(e,t)=>{e.doc??gt();const s=e._map.get(t);return s!==void 0&&!s.deleted?s.content.getContent()[s.length-1]:void 0},Mu=e=>{const t={};return e.doc??gt(),e._map.forEach((s,n)=>{s.deleted||(t[n]=s.content.getContent()[s.length-1])}),t},Pu=(e,t)=>{e.doc??gt();const s=e._map.get(t);return s!==void 0&&!s.deleted},Wp=(e,t,s)=>{let n=e._map.get(t)||null;for(;n!==null&&(!s.sv.has(n.id.client)||n.id.clock>=(s.sv.get(n.id.client)||0));)n=n.left;return n!==null&&Ye(n,s)?n.content.getContent()[n.length-1]:void 0},Nu=(e,t)=>{const s={};return e._map.forEach((n,i)=>{let r=n;for(;r!==null&&(!t.sv.has(r.id.client)||r.id.clock>=(t.sv.get(r.id.client)||0));)r=r.left;r!==null&&Ye(r,t)&&(s[i]=r.content.getContent()[r.length-1])}),s},Li=e=>(e.doc??gt(),Hf(e._map.entries(),t=>!t[1].deleted));class zu extends wi{}class Le extends lt{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(t){const s=new Le;return s.push(t),s}_integrate(t,s){super._integrate(t,s),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new Le}clone(){const t=new Le;return t.insert(0,this.toArray().map(s=>s instanceof lt?s.clone():s)),t}get length(){return this.doc??gt(),this._length}_callObserver(t,s){super._callObserver(t,s),Ir(this,t,new zu(this,t))}insert(t,s){this.doc!==null?W(this.doc,n=>{Du(n,this,t,s)}):this._prelimContent.splice(t,0,...s)}push(t){this.doc!==null?W(this.doc,s=>{Zp(s,this,t)}):this._prelimContent.push(...t)}unshift(t){this.insert(0,t)}delete(t,s=1){this.doc!==null?W(this.doc,n=>{Lu(n,this,t,s)}):this._prelimContent.splice(t,s)}get(t){return Ru(this,t)}toArray(){return Tu(this)}slice(t=0,s=this.length){return $u(this,t,s)}toJSON(){return this.map(t=>t instanceof lt?t.toJSON():t)}map(t){return Ou(this,t)}forEach(t){Kn(this,t)}[Symbol.iterator](){return jp(this)}_write(t){t.writeTypeRef(fg)}}const qp=e=>new Le;class Vu extends wi{constructor(t,s,n){super(t,s),this.keysChanged=n}}class ss extends lt{constructor(t){super(),this._prelimContent=null,t===void 0?this._prelimContent=new Map:this._prelimContent=new Map(t)}_integrate(t,s){super._integrate(t,s),this._prelimContent.forEach((n,i)=>{this.set(i,n)}),this._prelimContent=null}_copy(){return new ss}clone(){const t=new ss;return this.forEach((s,n)=>{t.set(n,s instanceof lt?s.clone():s)}),t}_callObserver(t,s){Ir(this,t,new Vu(this,t,s))}toJSON(){this.doc??gt();const t={};return this._map.forEach((s,n)=>{if(!s.deleted){const i=s.content.getContent()[s.length-1];t[n]=i instanceof lt?i.toJSON():i}}),t}get size(){return[...Li(this)].length}keys(){return eo(Li(this),t=>t[0])}values(){return eo(Li(this),t=>t[1].content.getContent()[t[1].length-1])}entries(){return eo(Li(this),t=>[t[0],t[1].content.getContent()[t[1].length-1]])}forEach(t){this.doc??gt(),this._map.forEach((s,n)=>{s.deleted||t(s.content.getContent()[s.length-1],n,this)})}[Symbol.iterator](){return this.entries()}delete(t){this.doc!==null?W(this.doc,s=>{sr(s,this,t)}):this._prelimContent.delete(t)}set(t,s){return this.doc!==null?W(this.doc,n=>{ka(n,this,t,s)}):this._prelimContent.set(t,s),s}get(t){return Sa(this,t)}has(t){return Pu(this,t)}clear(){this.doc!==null?W(this.doc,t=>{this.forEach(function(s,n,i){sr(t,i,n)})}):this._prelimContent.clear()}_write(t){t.writeTypeRef(pg)}}const Yp=e=>new ss,Je=(e,t)=>e===t||typeof e=="object"&&typeof t=="object"&&e&&t&&Gh(e,t);class Oo{constructor(t,s,n,i){this.left=t,this.right=s,this.index=n,this.currentAttributes=i}forward(){switch(this.right===null&&Nt(),this.right.content.constructor){case rt:this.right.deleted||gn(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}}const Ol=(e,t,s)=>{for(;t.right!==null&&s>0;){switch(t.right.content.constructor){case rt:t.right.deleted||gn(t.currentAttributes,t.right.content);break;default:t.right.deleted||(s<t.right.length&&wt(e,R(t.right.id.client,t.right.id.clock+s)),t.index+=t.right.length,s-=t.right.length);break}t.left=t.right,t.right=t.right.right}return t},Mi=(e,t,s,n)=>{const i=new Map,r=n?Rr(t,s):null;if(r){const o=new Oo(r.p.left,r.p,r.index,i);return Ol(e,o,s-r.index)}else{const o=new Oo(null,t._start,0,i);return Ol(e,o,s)}},Bu=(e,t,s,n)=>{for(;s.right!==null&&(s.right.deleted===!0||s.right.content.constructor===rt&&Je(n.get(s.right.content.key),s.right.content.value));)s.right.deleted||n.delete(s.right.content.key),s.forward();const i=e.doc,r=i.clientID;n.forEach((o,a)=>{const l=s.left,c=s.right,u=new j(R(r,X(i.store,r)),l,l&&l.lastId,c,c&&c.id,t,null,new rt(a,o));u.integrate(e,0),s.right=u,s.forward()})},gn=(e,t)=>{const{key:s,value:n}=t;n===null?e.delete(s):e.set(s,n)},Fu=(e,t)=>{for(;e.right!==null;){if(!(e.right.deleted||e.right.content.constructor===rt&&Je(t[e.right.content.key]??null,e.right.content.value)))break;e.forward()}},Uu=(e,t,s,n)=>{const i=e.doc,r=i.clientID,o=new Map;for(const a in n){const l=n[a],c=s.currentAttributes.get(a)??null;if(!Je(c,l)){o.set(a,c);const{left:u,right:d}=s;s.right=new j(R(r,X(i.store,r)),u,u&&u.lastId,d,d&&d.id,t,null,new rt(a,l)),s.right.integrate(e,0),s.forward()}}return o},so=(e,t,s,n,i)=>{s.currentAttributes.forEach((f,h)=>{i[h]===void 0&&(i[h]=null)});const r=e.doc,o=r.clientID;Fu(s,i);const a=Uu(e,t,s,i),l=n.constructor===String?new ee(n):n instanceof lt?new ne(n):new je(n);let{left:c,right:u,index:d}=s;t._searchMarker&&Gn(t._searchMarker,s.index,l.getLength()),u=new j(R(o,X(r.store,o)),c,c&&c.lastId,u,u&&u.id,t,null,l),u.integrate(e,0),s.right=u,s.index=d,s.forward(),Bu(e,t,s,a)},Rl=(e,t,s,n,i)=>{const r=e.doc,o=r.clientID;Fu(s,i);const a=Uu(e,t,s,i);t:for(;s.right!==null&&(n>0||a.size>0&&(s.right.deleted||s.right.content.constructor===rt));){if(!s.right.deleted)switch(s.right.content.constructor){case rt:{const{key:l,value:c}=s.right.content,u=i[l];if(u!==void 0){if(Je(u,c))a.delete(l);else{if(n===0)break t;a.set(l,c)}s.right.delete(e)}else s.currentAttributes.set(l,c);break}default:n<s.right.length&&wt(e,R(s.right.id.client,s.right.id.clock+n)),n-=s.right.length;break}s.forward()}if(n>0){let l="";for(;n>0;n--)l+=`
`;s.right=new j(R(o,X(r.store,o)),s.left,s.left&&s.left.lastId,s.right,s.right&&s.right.id,t,null,new ee(l)),s.right.integrate(e,0),s.forward()}Bu(e,t,s,a)},Hu=(e,t,s,n,i)=>{let r=t;const o=ht();for(;r&&(!r.countable||r.deleted);){if(!r.deleted&&r.content.constructor===rt){const c=r.content;o.set(c.key,c)}r=r.right}let a=0,l=!1;for(;t!==r;){if(s===t&&(l=!0),!t.deleted){const c=t.content;switch(c.constructor){case rt:{const{key:u,value:d}=c,f=n.get(u)??null;(o.get(u)!==c||f===d)&&(t.delete(e),a++,!l&&(i.get(u)??null)===d&&f!==d&&(f===null?i.delete(u):i.set(u,f))),!l&&!t.deleted&&gn(i,c);break}}}t=t.right}return a},Gp=(e,t)=>{for(;t&&t.right&&(t.right.deleted||!t.right.countable);)t=t.right;const s=new Set;for(;t&&(t.deleted||!t.countable);){if(!t.deleted&&t.content.constructor===rt){const n=t.content.key;s.has(n)?t.delete(e):s.add(n)}t=t.left}},ju=e=>{let t=0;return W(e.doc,s=>{let n=e._start,i=e._start,r=ht();const o=_o(r);for(;i;){if(i.deleted===!1)switch(i.content.constructor){case rt:gn(o,i.content);break;default:t+=Hu(s,n,i,r,o),r=_o(o),n=i;break}i=i.right}}),t},Kp=e=>{const t=new Set,s=e.doc;for(const[n,i]of e.afterState.entries()){const r=e.beforeState.get(n)||0;i!==r&&fu(e,s.store.clients.get(n),r,i,o=>{!o.deleted&&o.content.constructor===rt&&o.constructor!==Mt&&t.add(o.parent)})}W(s,n=>{$s(e,e.deleteSet,i=>{if(i instanceof Mt||!i.parent._hasFormatting||t.has(i.parent))return;const r=i.parent;i.content.constructor===rt?t.add(r):Gp(n,i)});for(const i of t)ju(i)})},Il=(e,t,s)=>{const n=s,i=_o(t.currentAttributes),r=t.right;for(;s>0&&t.right!==null;){if(t.right.deleted===!1)switch(t.right.content.constructor){case ne:case je:case ee:s<t.right.length&&wt(e,R(t.right.id.client,t.right.id.clock+s)),s-=t.right.length,t.right.delete(e);break}t.forward()}r&&Hu(e,r,t.right,i,t.currentAttributes);const o=(t.left||t.right).parent;return o._searchMarker&&Gn(o._searchMarker,t.index,-n+s),t};class Zu extends wi{constructor(t,s,n){super(t,s),this.childListChanged=!1,this.keysChanged=new Set,n.forEach(i=>{i===null?this.childListChanged=!0:this.keysChanged.add(i)})}get changes(){if(this._changes===null){const t={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=t}return this._changes}get delta(){if(this._delta===null){const t=this.target.doc,s=[];W(t,n=>{const i=new Map,r=new Map;let o=this.target._start,a=null;const l={};let c="",u=0,d=0;const f=()=>{if(a!==null){let h=null;switch(a){case"delete":d>0&&(h={delete:d}),d=0;break;case"insert":(typeof c=="object"||c.length>0)&&(h={insert:c},i.size>0&&(h.attributes={},i.forEach((g,b)=>{g!==null&&(h.attributes[b]=g)}))),c="";break;case"retain":u>0&&(h={retain:u},qh(l)||(h.attributes=Zh({},l))),u=0;break}h&&s.push(h),a=null}};for(;o!==null;){switch(o.content.constructor){case ne:case je:this.adds(o)?this.deletes(o)||(f(),a="insert",c=o.content.getContent()[0],f()):this.deletes(o)?(a!=="delete"&&(f(),a="delete"),d+=1):o.deleted||(a!=="retain"&&(f(),a="retain"),u+=1);break;case ee:this.adds(o)?this.deletes(o)||(a!=="insert"&&(f(),a="insert"),c+=o.content.str):this.deletes(o)?(a!=="delete"&&(f(),a="delete"),d+=o.length):o.deleted||(a!=="retain"&&(f(),a="retain"),u+=o.length);break;case rt:{const{key:h,value:g}=o.content;if(this.adds(o)){if(!this.deletes(o)){const b=i.get(h)??null;Je(b,g)?g!==null&&o.delete(n):(a==="retain"&&f(),Je(g,r.get(h)??null)?delete l[h]:l[h]=g)}}else if(this.deletes(o)){r.set(h,g);const b=i.get(h)??null;Je(b,g)||(a==="retain"&&f(),l[h]=b)}else if(!o.deleted){r.set(h,g);const b=l[h];b!==void 0&&(Je(b,g)?b!==null&&o.delete(n):(a==="retain"&&f(),g===null?delete l[h]:l[h]=g))}o.deleted||(a==="insert"&&f(),gn(i,o.content));break}}o=o.right}for(f();s.length>0;){const h=s[s.length-1];if(h.retain!==void 0&&h.attributes===void 0)s.pop();else break}}),this._delta=s}return this._delta}}class Os extends lt{constructor(t){super(),this._pending=t!==void 0?[()=>this.insert(0,t)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??gt(),this._length}_integrate(t,s){super._integrate(t,s);try{this._pending.forEach(n=>n())}catch(n){console.error(n)}this._pending=null}_copy(){return new Os}clone(){const t=new Os;return t.applyDelta(this.toDelta()),t}_callObserver(t,s){super._callObserver(t,s);const n=new Zu(this,t,s);Ir(this,t,n),!t.local&&this._hasFormatting&&(t._needFormattingCleanup=!0)}toString(){this.doc??gt();let t="",s=this._start;for(;s!==null;)!s.deleted&&s.countable&&s.content.constructor===ee&&(t+=s.content.str),s=s.right;return t}toJSON(){return this.toString()}applyDelta(t,{sanitize:s=!0}={}){this.doc!==null?W(this.doc,n=>{const i=new Oo(null,this._start,0,new Map);for(let r=0;r<t.length;r++){const o=t[r];if(o.insert!==void 0){const a=!s&&typeof o.insert=="string"&&r===t.length-1&&i.right===null&&o.insert.slice(-1)===`
`?o.insert.slice(0,-1):o.insert;(typeof a!="string"||a.length>0)&&so(n,this,i,a,o.attributes||{})}else o.retain!==void 0?Rl(n,this,i,o.retain,o.attributes||{}):o.delete!==void 0&&Il(n,i,o.delete)}}):this._pending.push(()=>this.applyDelta(t))}toDelta(t,s,n){this.doc??gt();const i=[],r=new Map,o=this.doc;let a="",l=this._start;function c(){if(a.length>0){const d={};let f=!1;r.forEach((g,b)=>{f=!0,d[b]=g});const h={insert:a};f&&(h.attributes=d),i.push(h),a=""}}const u=()=>{for(;l!==null;){if(Ye(l,t)||s!==void 0&&Ye(l,s))switch(l.content.constructor){case ee:{const d=r.get("ychange");t!==void 0&&!Ye(l,t)?(d===void 0||d.user!==l.id.client||d.type!=="removed")&&(c(),r.set("ychange",n?n("removed",l.id):{type:"removed"})):s!==void 0&&!Ye(l,s)?(d===void 0||d.user!==l.id.client||d.type!=="added")&&(c(),r.set("ychange",n?n("added",l.id):{type:"added"})):d!==void 0&&(c(),r.delete("ychange")),a+=l.content.str;break}case ne:case je:{c();const d={insert:l.content.getContent()[0]};if(r.size>0){const f={};d.attributes=f,r.forEach((h,g)=>{f[g]=h})}i.push(d);break}case rt:Ye(l,t)&&(c(),gn(r,l.content));break}l=l.right}c()};return t||s?W(o,d=>{t&&Ao(d,t),s&&Ao(d,s),u()},"cleanup"):u(),i}insert(t,s,n){if(s.length<=0)return;const i=this.doc;i!==null?W(i,r=>{const o=Mi(r,this,t,!n);n||(n={},o.currentAttributes.forEach((a,l)=>{n[l]=a})),so(r,this,o,s,n)}):this._pending.push(()=>this.insert(t,s,n))}insertEmbed(t,s,n){const i=this.doc;i!==null?W(i,r=>{const o=Mi(r,this,t,!n);so(r,this,o,s,n||{})}):this._pending.push(()=>this.insertEmbed(t,s,n||{}))}delete(t,s){if(s===0)return;const n=this.doc;n!==null?W(n,i=>{Il(i,Mi(i,this,t,!0),s)}):this._pending.push(()=>this.delete(t,s))}format(t,s,n){if(s===0)return;const i=this.doc;i!==null?W(i,r=>{const o=Mi(r,this,t,!1);o.right!==null&&Rl(r,this,o,s,n)}):this._pending.push(()=>this.format(t,s,n))}removeAttribute(t){this.doc!==null?W(this.doc,s=>{sr(s,this,t)}):this._pending.push(()=>this.removeAttribute(t))}setAttribute(t,s){this.doc!==null?W(this.doc,n=>{ka(n,this,t,s)}):this._pending.push(()=>this.setAttribute(t,s))}getAttribute(t){return Sa(this,t)}getAttributes(){return Mu(this)}_write(t){t.writeTypeRef(gg)}}const Jp=e=>new Os;class no{constructor(t,s=()=>!0){this._filter=s,this._root=t,this._currentNode=t._start,this._firstCall=!0,t.doc??gt()}[Symbol.iterator](){return this}next(){let t=this._currentNode,s=t&&t.content&&t.content.type;if(t!==null&&(!this._firstCall||t.deleted||!this._filter(s)))do if(s=t.content.type,!t.deleted&&(s.constructor===is||s.constructor===ns)&&s._start!==null)t=s._start;else for(;t!==null;){const n=t.next;if(n!==null){t=n;break}else t.parent===this._root?t=null:t=t.parent._item}while(t!==null&&(t.deleted||!this._filter(t.content.type)));return this._firstCall=!1,t===null?{value:void 0,done:!0}:(this._currentNode=t,{value:t.content.type,done:!1})}}class ns extends lt{constructor(){super(),this._prelimContent=[]}get firstChild(){const t=this._first;return t?t.content.getContent()[0]:null}_integrate(t,s){super._integrate(t,s),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new ns}clone(){const t=new ns;return t.insert(0,this.toArray().map(s=>s instanceof lt?s.clone():s)),t}get length(){return this.doc??gt(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(t){return new no(this,t)}querySelector(t){t=t.toUpperCase();const n=new no(this,i=>i.nodeName&&i.nodeName.toUpperCase()===t).next();return n.done?null:n.value}querySelectorAll(t){return t=t.toUpperCase(),ze(new no(this,s=>s.nodeName&&s.nodeName.toUpperCase()===t))}_callObserver(t,s){Ir(this,t,new Wu(this,s,t))}toString(){return Ou(this,t=>t.toString()).join("")}toJSON(){return this.toString()}toDOM(t=document,s={},n){const i=t.createDocumentFragment();return n!==void 0&&n._createAssociation(i,this),Kn(this,r=>{i.insertBefore(r.toDOM(t,s,n),null)}),i}insert(t,s){this.doc!==null?W(this.doc,n=>{Du(n,this,t,s)}):this._prelimContent.splice(t,0,...s)}insertAfter(t,s){if(this.doc!==null)W(this.doc,n=>{const i=t&&t instanceof lt?t._item:t;er(n,this,i,s)});else{const n=this._prelimContent,i=t===null?0:n.findIndex(r=>r===t)+1;if(i===0&&t!==null)throw es("Reference item not found");n.splice(i,0,...s)}}delete(t,s=1){this.doc!==null?W(this.doc,n=>{Lu(n,this,t,s)}):this._prelimContent.splice(t,s)}toArray(){return Tu(this)}push(t){this.insert(this.length,t)}unshift(t){this.insert(0,t)}get(t){return Ru(this,t)}slice(t=0,s=this.length){return $u(this,t,s)}forEach(t){Kn(this,t)}_write(t){t.writeTypeRef(bg)}}const Xp=e=>new ns;class is extends ns{constructor(t="UNDEFINED"){super(),this.nodeName=t,this._prelimAttrs=new Map}get nextSibling(){const t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){const t=this._item?this._item.prev:null;return t?t.content.type:null}_integrate(t,s){super._integrate(t,s),this._prelimAttrs.forEach((n,i)=>{this.setAttribute(i,n)}),this._prelimAttrs=null}_copy(){return new is(this.nodeName)}clone(){const t=new is(this.nodeName),s=this.getAttributes();return Wh(s,(n,i)=>{typeof n=="string"&&t.setAttribute(i,n)}),t.insert(0,this.toArray().map(n=>n instanceof lt?n.clone():n)),t}toString(){const t=this.getAttributes(),s=[],n=[];for(const a in t)n.push(a);n.sort();const i=n.length;for(let a=0;a<i;a++){const l=n[a];s.push(l+'="'+t[l]+'"')}const r=this.nodeName.toLocaleLowerCase(),o=s.length>0?" "+s.join(" "):"";return`<${r}${o}>${super.toString()}</${r}>`}removeAttribute(t){this.doc!==null?W(this.doc,s=>{sr(s,this,t)}):this._prelimAttrs.delete(t)}setAttribute(t,s){this.doc!==null?W(this.doc,n=>{ka(n,this,t,s)}):this._prelimAttrs.set(t,s)}getAttribute(t){return Sa(this,t)}hasAttribute(t){return Pu(this,t)}getAttributes(t){return t?Nu(this,t):Mu(this)}toDOM(t=document,s={},n){const i=t.createElement(this.nodeName),r=this.getAttributes();for(const o in r){const a=r[o];typeof a=="string"&&i.setAttribute(o,a)}return Kn(this,o=>{i.appendChild(o.toDOM(t,s,n))}),n!==void 0&&n._createAssociation(i,this),i}_write(t){t.writeTypeRef(mg),t.writeKey(this.nodeName)}}const Qp=e=>new is(e.readKey());class Wu extends wi{constructor(t,s,n){super(t,n),this.childListChanged=!1,this.attributesChanged=new Set,s.forEach(i=>{i===null?this.childListChanged=!0:this.attributesChanged.add(i)})}}class Js extends ss{constructor(t){super(),this.hookName=t}_copy(){return new Js(this.hookName)}clone(){const t=new Js(this.hookName);return this.forEach((s,n)=>{t.set(n,s)}),t}toDOM(t=document,s={},n){const i=s[this.hookName];let r;return i!==void 0?r=i.createDom(this):r=document.createElement(this.hookName),r.setAttribute("data-yjs-hook",this.hookName),n!==void 0&&n._createAssociation(r,this),r}_write(t){t.writeTypeRef(vg),t.writeKey(this.hookName)}}const tg=e=>new Js(e.readKey());class Jn extends Os{get nextSibling(){const t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){const t=this._item?this._item.prev:null;return t?t.content.type:null}_copy(){return new Jn}clone(){const t=new Jn;return t.applyDelta(this.toDelta()),t}toDOM(t=document,s,n){const i=t.createTextNode(this.toString());return n!==void 0&&n._createAssociation(i,this),i}toString(){return this.toDelta().map(t=>{const s=[];for(const i in t.attributes){const r=[];for(const o in t.attributes[i])r.push({key:o,value:t.attributes[i][o]});r.sort((o,a)=>o.key<a.key?-1:1),s.push({nodeName:i,attrs:r})}s.sort((i,r)=>i.nodeName<r.nodeName?-1:1);let n="";for(let i=0;i<s.length;i++){const r=s[i];n+=`<${r.nodeName}`;for(let o=0;o<r.attrs.length;o++){const a=r.attrs[o];n+=` ${a.key}="${a.value}"`}n+=">"}n+=t.insert;for(let i=s.length-1;i>=0;i--)n+=`</${s[i].nodeName}>`;return n}).join("")}toJSON(){return this.toString()}_write(t){t.writeTypeRef(yg)}}const eg=e=>new Jn;class Dr{constructor(t,s){this.id=t,this.length=s}get deleted(){throw _e()}mergeWith(t){return!1}write(t,s,n){throw _e()}integrate(t,s){throw _e()}}const sg=0;class Mt extends Dr{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,s){s>0&&(this.id.clock+=s,this.length-=s),hu(t.doc.store,this)}write(t,s){t.writeInfo(sg),t.writeLen(this.length-s)}getMissing(t,s){return null}}class Vs{constructor(t){this.content=t}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new Vs(this.content)}splice(t){throw _e()}mergeWith(t){return!1}integrate(t,s){}delete(t){}gc(t){}write(t,s){t.writeBuf(this.content)}getRef(){return 3}}const ng=e=>new Vs(e.readBuf());class Rs{constructor(t){this.len=t}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new Rs(this.len)}splice(t){const s=new Rs(this.len-t);return this.len=t,s}mergeWith(t){return this.len+=t.len,!0}integrate(t,s){Zn(t.deleteSet,s.id.client,s.id.clock,this.len),s.markDeleted()}delete(t){}gc(t){}write(t,s){t.writeLen(this.len-s)}getRef(){return 1}}const ig=e=>new Rs(e.readLen()),qu=(e,t)=>new ds({guid:e,...t,shouldLoad:t.shouldLoad||t.autoLoad||!1});class Bs{constructor(t){t._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=t;const s={};this.opts=s,t.gc||(s.gc=!1),t.autoLoad&&(s.autoLoad=!0),t.meta!==null&&(s.meta=t.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new Bs(qu(this.doc.guid,this.opts))}splice(t){throw _e()}mergeWith(t){return!1}integrate(t,s){this.doc._item=s,t.subdocsAdded.add(this.doc),this.doc.shouldLoad&&t.subdocsLoaded.add(this.doc)}delete(t){t.subdocsAdded.has(this.doc)?t.subdocsAdded.delete(this.doc):t.subdocsRemoved.add(this.doc)}gc(t){}write(t,s){t.writeString(this.doc.guid),t.writeAny(this.opts)}getRef(){return 9}}const rg=e=>new Bs(qu(e.readString(),e.readAny()));class je{constructor(t){this.embed=t}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new je(this.embed)}splice(t){throw _e()}mergeWith(t){return!1}integrate(t,s){}delete(t){}gc(t){}write(t,s){t.writeJSON(this.embed)}getRef(){return 5}}const og=e=>new je(e.readJSON());class rt{constructor(t,s){this.key=t,this.value=s}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new rt(this.key,this.value)}splice(t){throw _e()}mergeWith(t){return!1}integrate(t,s){const n=s.parent;n._searchMarker=null,n._hasFormatting=!0}delete(t){}gc(t){}write(t,s){t.writeKey(this.key),t.writeJSON(this.value)}getRef(){return 6}}const ag=e=>new rt(e.readKey(),e.readJSON());class Xs{constructor(t){this.arr=t}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new Xs(this.arr)}splice(t){const s=new Xs(this.arr.slice(t));return this.arr=this.arr.slice(0,t),s}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,s){}delete(t){}gc(t){}write(t,s){const n=this.arr.length;t.writeLen(n-s);for(let i=s;i<n;i++){const r=this.arr[i];t.writeString(r===void 0?"undefined":JSON.stringify(r))}}getRef(){return 2}}const lg=e=>{const t=e.readLen(),s=[];for(let n=0;n<t;n++){const i=e.readString();i==="undefined"?s.push(void 0):s.push(JSON.parse(i))}return new Xs(s)},cg=tr("node_env")==="development";class Be{constructor(t){this.arr=t,cg&&zc(t)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new Be(this.arr)}splice(t){const s=new Be(this.arr.slice(t));return this.arr=this.arr.slice(0,t),s}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,s){}delete(t){}gc(t){}write(t,s){const n=this.arr.length;t.writeLen(n-s);for(let i=s;i<n;i++){const r=this.arr[i];t.writeAny(r)}}getRef(){return 8}}const ug=e=>{const t=e.readLen(),s=[];for(let n=0;n<t;n++)s.push(e.readAny());return new Be(s)};class ee{constructor(t){this.str=t}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new ee(this.str)}splice(t){const s=new ee(this.str.slice(t));this.str=this.str.slice(0,t);const n=this.str.charCodeAt(t-1);return n>=55296&&n<=56319&&(this.str=this.str.slice(0,t-1)+"�",s.str="�"+s.str.slice(1)),s}mergeWith(t){return this.str+=t.str,!0}integrate(t,s){}delete(t){}gc(t){}write(t,s){t.writeString(s===0?this.str:this.str.slice(s))}getRef(){return 4}}const dg=e=>new ee(e.readString()),hg=[qp,Yp,Jp,Qp,Xp,tg,eg],fg=0,pg=1,gg=2,mg=3,bg=4,vg=5,yg=6;class ne{constructor(t){this.type=t}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new ne(this.type._copy())}splice(t){throw _e()}mergeWith(t){return!1}integrate(t,s){this.type._integrate(t.doc,s)}delete(t){let s=this.type._start;for(;s!==null;)s.deleted?s.id.clock<(t.beforeState.get(s.id.client)||0)&&t._mergeStructs.push(s):s.delete(t),s=s.right;this.type._map.forEach(n=>{n.deleted?n.id.clock<(t.beforeState.get(n.id.client)||0)&&t._mergeStructs.push(n):n.delete(t)}),t.changed.delete(this.type)}gc(t){let s=this.type._start;for(;s!==null;)s.gc(t,!0),s=s.right;this.type._start=null,this.type._map.forEach(n=>{for(;n!==null;)n.gc(t,!0),n=n.left}),this.type._map=new Map}write(t,s){this.type._write(t)}getRef(){return 7}}const _g=e=>new ne(hg[e.readTypeRef()](e)),Ro=(e,t)=>{let s=t,n=0,i;do n>0&&(s=R(s.client,s.clock+n)),i=Cs(e,s),n=s.clock-i.id.clock,s=i.redone;while(s!==null&&i instanceof j);return{item:i,diff:n}},Ca=(e,t)=>{for(;e!==null&&e.keep!==t;)e.keep=t,e=e.parent._item},nr=(e,t,s)=>{const{client:n,clock:i}=t.id,r=new j(R(n,i+s),t,R(n,i+s-1),t.right,t.rightOrigin,t.parent,t.parentSub,t.content.splice(s));return t.deleted&&r.markDeleted(),t.keep&&(r.keep=!0),t.redone!==null&&(r.redone=R(t.redone.client,t.redone.clock+s)),t.right=r,r.right!==null&&(r.right.left=r),e._mergeStructs.push(r),r.parentSub!==null&&r.right===null&&r.parent._map.set(r.parentSub,r),t.length=s,r},Dl=(e,t)=>Th(e,s=>zs(s.deletions,t)),Yu=(e,t,s,n,i,r)=>{const o=e.doc,a=o.store,l=o.clientID,c=t.redone;if(c!==null)return wt(e,c);let u=t.parent._item,d=null,f;if(u!==null&&u.deleted===!0){if(u.redone===null&&(!s.has(u)||Yu(e,u,s,n,i,r)===null))return null;for(;u.redone!==null;)u=wt(e,u.redone)}const h=u===null?t.parent:u.content.type;if(t.parentSub===null){for(d=t.left,f=t;d!==null;){let _=d;for(;_!==null&&_.parent._item!==u;)_=_.redone===null?null:wt(e,_.redone);if(_!==null&&_.parent._item===u){d=_;break}d=d.left}for(;f!==null;){let _=f;for(;_!==null&&_.parent._item!==u;)_=_.redone===null?null:wt(e,_.redone);if(_!==null&&_.parent._item===u){f=_;break}f=f.right}}else if(f=null,t.right&&!i){for(d=t;d!==null&&d.right!==null&&(d.right.redone||zs(n,d.right.id)||Dl(r.undoStack,d.right.id)||Dl(r.redoStack,d.right.id));)for(d=d.right;d.redone;)d=wt(e,d.redone);if(d&&d.right!==null)return null}else d=h._map.get(t.parentSub)||null;const g=X(a,l),b=R(l,g),y=new j(b,d,d&&d.lastId,f,f&&f.id,h,t.parentSub,t.content.copy());return t.redone=b,Ca(y,!0),y.integrate(e,0),y};class j extends Dr{constructor(t,s,n,i,r,o,a,l){super(t,l.getLength()),this.origin=n,this.left=s,this.right=i,this.rightOrigin=r,this.parent=o,this.parentSub=a,this.redone=null,this.content=l,this.info=this.content.isCountable()?hl:0}set marker(t){(this.info&Xr)>0!==t&&(this.info^=Xr)}get marker(){return(this.info&Xr)>0}get keep(){return(this.info&dl)>0}set keep(t){this.keep!==t&&(this.info^=dl)}get countable(){return(this.info&hl)>0}get deleted(){return(this.info&Jr)>0}set deleted(t){this.deleted!==t&&(this.info^=Jr)}markDeleted(){this.info|=Jr}getMissing(t,s){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=X(s,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=X(s,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===Ss&&this.id.client!==this.parent.client&&this.parent.clock>=X(s,this.parent.client))return this.parent.client;if(this.origin&&(this.left=To(t,s,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=wt(t,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===Mt||this.right&&this.right.constructor===Mt)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===j?(this.parent=this.left.parent,this.parentSub=this.left.parentSub):this.right&&this.right.constructor===j&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===Ss){const n=Cs(s,this.parent);n.constructor===Mt?this.parent=null:this.parent=n.content.type}return null}integrate(t,s){if(s>0&&(this.id.clock+=s,this.left=To(t,t.doc.store,R(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(s),this.length-=s),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let n=this.left,i;if(n!==null)i=n.right;else if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start;const r=new Set,o=new Set;for(;i!==null&&i!==this.right;){if(o.add(i),r.add(i),vs(this.origin,i.origin)){if(i.id.client<this.id.client)n=i,r.clear();else if(vs(this.rightOrigin,i.rightOrigin))break}else if(i.origin!==null&&o.has(Cs(t.doc.store,i.origin)))r.has(Cs(t.doc.store,i.origin))||(n=i,r.clear());else break;i=i.right}this.left=n}if(this.left!==null){const n=this.left.right;this.right=n,this.left.right=this}else{let n;if(this.parentSub!==null)for(n=this.parent._map.get(this.parentSub)||null;n!==null&&n.left!==null;)n=n.left;else n=this.parent._start,this.parent._start=this;this.right=n}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(t)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),hu(t.doc.store,this),this.content.integrate(t,this),El(t,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(t)}else new Mt(this.id,this.length).integrate(t,0)}get next(){let t=this.right;for(;t!==null&&t.deleted;)t=t.right;return t}get prev(){let t=this.left;for(;t!==null&&t.deleted;)t=t.left;return t}get lastId(){return this.length===1?this.id:R(this.id.client,this.id.clock+this.length-1)}mergeWith(t){if(this.constructor===t.constructor&&vs(t.origin,this.lastId)&&this.right===t&&vs(this.rightOrigin,t.rightOrigin)&&this.id.client===t.id.client&&this.id.clock+this.length===t.id.clock&&this.deleted===t.deleted&&this.redone===null&&t.redone===null&&this.content.constructor===t.content.constructor&&this.content.mergeWith(t.content)){const s=this.parent._searchMarker;return s&&s.forEach(n=>{n.p===t&&(n.p=this,!this.deleted&&this.countable&&(n.index-=this.length))}),t.keep&&(this.keep=!0),this.right=t.right,this.right!==null&&(this.right.left=this),this.length+=t.length,!0}return!1}delete(t){if(!this.deleted){const s=this.parent;this.countable&&this.parentSub===null&&(s._length-=this.length),this.markDeleted(),Zn(t.deleteSet,this.id.client,this.id.clock,this.length),El(t,s,this.parentSub),this.content.delete(t)}}gc(t,s){if(!this.deleted)throw Nt();this.content.gc(t),s?Sp(t,this,new Mt(this.id,this.length)):this.content=new Rs(this.length)}write(t,s){const n=s>0?R(this.id.client,this.id.clock+s-1):this.origin,i=this.rightOrigin,r=this.parentSub,o=this.content.getRef()&xr|(n===null?0:Ut)|(i===null?0:De)|(r===null?0:Fn);if(t.writeInfo(o),n!==null&&t.writeLeftID(n),i!==null&&t.writeRightID(i),n===null&&i===null){const a=this.parent;if(a._item!==void 0){const l=a._item;if(l===null){const c=ma(a);t.writeParentInfo(!0),t.writeString(c)}else t.writeParentInfo(!1),t.writeLeftID(l.id)}else a.constructor===String?(t.writeParentInfo(!0),t.writeString(a)):a.constructor===Ss?(t.writeParentInfo(!1),t.writeLeftID(a)):Nt();r!==null&&t.writeString(r)}this.content.write(t,s)}}const Gu=(e,t)=>wg[t&xr](e),wg=[()=>{Nt()},ig,lg,ng,dg,og,ag,_g,ug,rg,()=>{Nt()}],xg=10;class At extends Dr{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,s){Nt()}write(t,s){t.writeInfo(xg),T(t.restEncoder,this.length-s)}getMissing(t,s){return null}}const Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},Ju="__ $YJS$ __";Ku[Ju]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");Ku[Ju]=!0;const o_=Object.freeze(Object.defineProperty({__proto__:null,AbsolutePosition:lu,AbstractConnector:jf,AbstractStruct:Dr,AbstractType:lt,Array:Le,ContentAny:Be,ContentBinary:Vs,ContentDeleted:Rs,ContentDoc:Bs,ContentEmbed:je,ContentFormat:rt,ContentJSON:Xs,ContentString:ee,ContentType:ne,Doc:ds,GC:Mt,ID:Ss,Item:j,Map:ss,PermanentUserData:rp,RelativePosition:Tr,Skip:At,Snapshot:ba,Text:Os,Transaction:pu,UndoManager:Ap,UpdateDecoderV1:se,UpdateDecoderV2:Zt,UpdateEncoderV1:hs,UpdateEncoderV2:ce,XmlElement:is,XmlFragment:ns,XmlHook:Js,XmlText:Jn,YArrayEvent:zu,YEvent:wi,YMapEvent:Vu,YTextEvent:Zu,YXmlEvent:Wu,applyUpdate:Jf,applyUpdateV2:$r,cleanupYTextFormatting:ju,compareIDs:vs,compareRelativePositions:pp,convertUpdateFormatV1ToV2:Np,convertUpdateFormatV2ToV1:Cu,createAbsolutePositionFromRelativePosition:Eo,createDeleteSet:Er,createDeleteSetFromStructStore:da,createDocFromSnapshot:_p,createID:R,createRelativePositionFromJSON:ap,createRelativePositionFromTypeIndex:Co,createSnapshot:va,decodeRelativePosition:hp,decodeSnapshot:bp,decodeSnapshotV2:uu,decodeStateVector:pa,decodeUpdate:Op,decodeUpdateV2:yu,diffUpdate:Lp,diffUpdateV2:_a,emptySnapshot:vp,encodeRelativePosition:up,encodeSnapshot:mp,encodeSnapshotV2:cu,encodeStateAsUpdate:Qf,encodeStateAsUpdateV2:ru,encodeStateVector:sp,encodeStateVectorFromUpdate:Rp,encodeStateVectorFromUpdateV2:wu,equalDeleteSets:su,equalSnapshots:gp,findIndexSS:te,findRootTypeKey:ma,getItem:Cs,getItemCleanEnd:To,getItemCleanStart:wt,getState:X,getTypeChildren:Up,isDeleted:zs,isParentOf:qn,iterateDeletedStructs:$s,logType:ip,logUpdate:Tp,logUpdateV2:vu,mergeDeleteSets:Ts,mergeUpdates:_u,mergeUpdatesV2:Yn,obfuscateUpdate:Mp,obfuscateUpdateV2:Pp,parseUpdateMeta:Ip,parseUpdateMetaV2:xu,readUpdate:Kf,readUpdateV2:fa,relativePositionToJSON:op,snapshot:yp,snapshotContainsUpdate:xp,transact:W,tryGc:Cp,typeListToArraySnapshot:Hp,typeMapGetAllSnapshot:Nu,typeMapGetSnapshot:Wp},Symbol.toStringTag,{value:"Module"}));var kg=Symbol.for("preact-signals");function Lr(){if(Qe>1)Qe--;else{for(var e,t=!1;Nn!==void 0;){var s=Nn;for(Nn=void 0,Io++;s!==void 0;){var n=s.o;if(s.o=void 0,s.f&=-3,!(8&s.f)&&td(s))try{s.c()}catch(i){t||(e=i,t=!0)}s=n}}if(Io=0,Qe--,t)throw e}}function a_(e){if(Qe>0)return e();Qe++;try{return e()}finally{Lr()}}var q=void 0,Nn=void 0,Qe=0,Io=0,ir=0;function Xu(e){if(q!==void 0){var t=e.n;if(t===void 0||t.t!==q)return t={i:0,S:e,p:q.s,n:void 0,t:q,e:void 0,x:void 0,r:t},q.s!==void 0&&(q.s.n=t),q.s=t,e.n=t,32&q.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=q.s,t.n=void 0,q.s.n=t,q.s=t),t}}function Tt(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}Tt.prototype.brand=kg;Tt.prototype.h=function(){return!0};Tt.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};Tt.prototype.U=function(e){if(this.t!==void 0){var t=e.e,s=e.x;t!==void 0&&(t.x=s,e.e=void 0),s!==void 0&&(s.e=t,e.x=void 0),e===this.t&&(this.t=s)}};Tt.prototype.subscribe=function(e){var t=this;return Mr(function(){var s=t.value,n=q;q=void 0;try{e(s)}finally{q=n}})};Tt.prototype.valueOf=function(){return this.value};Tt.prototype.toString=function(){return this.value+""};Tt.prototype.toJSON=function(){return this.value};Tt.prototype.peek=function(){var e=q;q=void 0;try{return this.value}finally{q=e}};Object.defineProperty(Tt.prototype,"value",{get:function(){var e=Xu(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Io>100)throw new Error("Cycle detected");this.v=e,this.i++,ir++,Qe++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Lr()}}}});function Qu(e){return new Tt(e)}function td(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function ed(e){for(var t=e.s;t!==void 0;t=t.n){var s=t.S.n;if(s!==void 0&&(t.r=s),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function sd(e){for(var t=e.s,s=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):s=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=s}function mn(e){Tt.call(this,void 0),this.x=e,this.s=void 0,this.g=ir-1,this.f=4}(mn.prototype=new Tt).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ir))return!0;if(this.g=ir,this.f|=1,this.i>0&&!td(this))return this.f&=-2,!0;var e=q;try{ed(this),q=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(s){this.v=s,this.f|=16,this.i++}return q=e,sd(this),this.f&=-2,!0};mn.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Tt.prototype.S.call(this,e)};mn.prototype.U=function(e){if(this.t!==void 0&&(Tt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};mn.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(mn.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Xu(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function l_(e){return new mn(e)}function nd(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Qe++;var s=q;q=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Ea(e),n}finally{q=s,Lr()}}}function Ea(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,nd(e)}function Sg(e){if(q!==this)throw new Error("Out-of-order effect");sd(this),q=e,this.f&=-2,8&this.f&&Ea(this),Lr()}function xi(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}xi.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};xi.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,nd(this),ed(this),Qe++;var e=q;return q=this,Sg.bind(this,e)};xi.prototype.N=function(){2&this.f||(this.f|=2,this.o=Nn,Nn=this)};xi.prototype.d=function(){this.f|=8,1&this.f||Ea(this)};function Mr(e){var t=new xi(e);try{t.c()}catch(s){throw t.d(),s}return t.d.bind(t)}var Do=function(e,t){return Do=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,n){s.__proto__=n}||function(s,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=n[i])},Do(e,t)};function Pr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Do(e,t);function s(){this.constructor=e}e.prototype=t===null?Object.create(t):(s.prototype=t.prototype,new s)}function c_(e,t,s,n){function i(r){return r instanceof s?r:new s(function(o){o(r)})}return new(s||(s=Promise))(function(r,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function l(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?r(u.value):i(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})}function u_(e,t){var s={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(s=0)),s;)try{if(n=1,i&&(r=c[0]&2?i.return:c[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,c[1])).done)return r;switch(i=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return s.label++,{value:c[1],done:!1};case 5:s.label++,i=c[1],c=[0];continue;case 7:c=s.ops.pop(),s.trys.pop();continue;default:if(r=s.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){s=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){s.label=c[1];break}if(c[0]===6&&s.label<r[1]){s.label=r[1],r=c;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(c);break}r[2]&&s.ops.pop(),s.trys.pop();continue}c=t.call(e,s)}catch(u){c=[6,u],i=0}finally{n=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Xn(e){var t=typeof Symbol=="function"&&Symbol.iterator,s=t&&e[t],n=0;if(s)return s.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lo(e,t){var s=typeof Symbol=="function"&&e[Symbol.iterator];if(!s)return e;var n=s.call(e),i,r=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(s=n.return)&&s.call(n)}finally{if(o)throw o.error}}return r}function Mo(e,t,s){if(s||arguments.length===2)for(var n=0,i=t.length,r;n<i;n++)(r||!(n in t))&&(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))}function Po(e){return this instanceof Po?(this.v=e,this):new Po(e)}function d_(e,t,s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=s.apply(e,t||[]),i,r=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),i[Symbol.asyncIterator]=function(){return this},i;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){n[h]&&(i[h]=function(b){return new Promise(function(y,_){r.push([h,b,y,_])>1||l(h,b)})},g&&(i[h]=g(i[h])))}function l(h,g){try{c(n[h](g))}catch(b){f(r[0][3],b)}}function c(h){h.value instanceof Po?Promise.resolve(h.value.v).then(u,d):f(r[0][2],h)}function u(h){l("next",h)}function d(h){l("throw",h)}function f(h,g){h(g),r.shift(),r.length&&l(r[0][0],r[0][1])}}function h_(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],s;return t?t.call(e):(e=typeof Xn=="function"?Xn(e):e[Symbol.iterator](),s={},n("next"),n("throw"),n("return"),s[Symbol.asyncIterator]=function(){return this},s);function n(r){s[r]=e[r]&&function(o){return new Promise(function(a,l){o=e[r](o),i(a,l,o.done,o.value)})}}function i(r,o,a,l){Promise.resolve(l).then(function(c){r({value:c,done:a})},o)}}function Me(e){return typeof e=="function"}function id(e){var t=function(n){Error.call(n),n.stack=new Error().stack},s=e(t);return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,s}var io=id(function(e){return function(s){e(this),this.message=s?s.length+` errors occurred during unsubscription:
`+s.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=s}});function No(e,t){if(e){var s=e.indexOf(t);0<=s&&e.splice(s,1)}}var ki=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,s,n,i,r;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Xn(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(b){t={error:b}}finally{try{l&&!l.done&&(s=a.return)&&s.call(a)}finally{if(t)throw t.error}}else o.remove(this);var u=this.initialTeardown;if(Me(u))try{u()}catch(b){r=b instanceof io?b.errors:[b]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var f=Xn(d),h=f.next();!h.done;h=f.next()){var g=h.value;try{Ll(g)}catch(b){r=r??[],b instanceof io?r=Mo(Mo([],Lo(r)),Lo(b.errors)):r.push(b)}}}catch(b){n={error:b}}finally{try{h&&!h.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}if(r)throw new io(r)}},e.prototype.add=function(t){var s;if(t&&t!==this)if(this.closed)Ll(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(s=this._finalizers)!==null&&s!==void 0?s:[]).push(t)}},e.prototype._hasParent=function(t){var s=this._parentage;return s===t||Array.isArray(s)&&s.includes(t)},e.prototype._addParent=function(t){var s=this._parentage;this._parentage=Array.isArray(s)?(s.push(t),s):s?[s,t]:t},e.prototype._removeParent=function(t){var s=this._parentage;s===t?this._parentage=null:Array.isArray(s)&&No(s,t)},e.prototype.remove=function(t){var s=this._finalizers;s&&No(s,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),rd=ki.EMPTY;function od(e){return e instanceof ki||e&&"closed"in e&&Me(e.remove)&&Me(e.add)&&Me(e.unsubscribe)}function Ll(e){Me(e)?e():e.unsubscribe()}var Cg={Promise:void 0},Eg={setTimeout:function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return setTimeout.apply(void 0,Mo([e,t],Lo(s)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function Ag(e){Eg.setTimeout(function(){throw e})}function Ml(){}function Gi(e){e()}var ad=function(e){Pr(t,e);function t(s){var n=e.call(this)||this;return n.isStopped=!1,s?(n.destination=s,od(s)&&s.add(n)):n.destination=Og,n}return t.create=function(s,n,i){return new zo(s,n,i)},t.prototype.next=function(s){this.isStopped||this._next(s)},t.prototype.error=function(s){this.isStopped||(this.isStopped=!0,this._error(s))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(s){this.destination.next(s)},t.prototype._error=function(s){try{this.destination.error(s)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(ki),$g=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var s=this.partialObserver;if(s.next)try{s.next(t)}catch(n){Pi(n)}},e.prototype.error=function(t){var s=this.partialObserver;if(s.error)try{s.error(t)}catch(n){Pi(n)}else Pi(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(s){Pi(s)}},e}(),zo=function(e){Pr(t,e);function t(s,n,i){var r=e.call(this)||this,o;return Me(s)||!s?o={next:s??void 0,error:n??void 0,complete:i??void 0}:o=s,r.destination=new $g(o),r}return t}(ad);function Pi(e){Ag(e)}function Tg(e){throw e}var Og={closed:!0,next:Ml,error:Tg,complete:Ml},Rg=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ig(e){return e}function Dg(e){return e.length===0?Ig:e.length===1?e[0]:function(s){return e.reduce(function(n,i){return i(n)},s)}}var Pl=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var s=new e;return s.source=this,s.operator=t,s},e.prototype.subscribe=function(t,s,n){var i=this,r=Mg(t)?t:new zo(t,s,n);return Gi(function(){var o=i,a=o.operator,l=o.source;r.add(a?a.call(r,l):l?i._subscribe(r):i._trySubscribe(r))}),r},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(s){t.error(s)}},e.prototype.forEach=function(t,s){var n=this;return s=Nl(s),new s(function(i,r){var o=new zo({next:function(a){try{t(a)}catch(l){r(l),o.unsubscribe()}},error:r,complete:i});n.subscribe(o)})},e.prototype._subscribe=function(t){var s;return(s=this.source)===null||s===void 0?void 0:s.subscribe(t)},e.prototype[Rg]=function(){return this},e.prototype.pipe=function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];return Dg(t)(this)},e.prototype.toPromise=function(t){var s=this;return t=Nl(t),new t(function(n,i){var r;s.subscribe(function(o){return r=o},function(o){return i(o)},function(){return n(r)})})},e.create=function(t){return new e(t)},e}();function Nl(e){var t;return(t=e??Cg.Promise)!==null&&t!==void 0?t:Promise}function Lg(e){return e&&Me(e.next)&&Me(e.error)&&Me(e.complete)}function Mg(e){return e&&e instanceof ad||Lg(e)&&od(e)}var Pg=id(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Re=function(e){Pr(t,e);function t(){var s=e.call(this)||this;return s.closed=!1,s.currentObservers=null,s.observers=[],s.isStopped=!1,s.hasError=!1,s.thrownError=null,s}return t.prototype.lift=function(s){var n=new zl(this,this);return n.operator=s,n},t.prototype._throwIfClosed=function(){if(this.closed)throw new Pg},t.prototype.next=function(s){var n=this;Gi(function(){var i,r;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var o=Xn(n.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(s)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}}})},t.prototype.error=function(s){var n=this;Gi(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=s;for(var i=n.observers;i.length;)i.shift().error(s)}})},t.prototype.complete=function(){var s=this;Gi(function(){if(s._throwIfClosed(),!s.isStopped){s.isStopped=!0;for(var n=s.observers;n.length;)n.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var s;return((s=this.observers)===null||s===void 0?void 0:s.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(s){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,s)},t.prototype._subscribe=function(s){return this._throwIfClosed(),this._checkFinalizedStatuses(s),this._innerSubscribe(s)},t.prototype._innerSubscribe=function(s){var n=this,i=this,r=i.hasError,o=i.isStopped,a=i.observers;return r||o?rd:(this.currentObservers=null,a.push(s),new ki(function(){n.currentObservers=null,No(a,s)}))},t.prototype._checkFinalizedStatuses=function(s){var n=this,i=n.hasError,r=n.thrownError,o=n.isStopped;i?s.error(r):o&&s.complete()},t.prototype.asObservable=function(){var s=new Pl;return s.source=this,s},t.create=function(s,n){return new zl(s,n)},t}(Pl),zl=function(e){Pr(t,e);function t(s,n){var i=e.call(this)||this;return i.destination=s,i.source=n,i}return t.prototype.next=function(s){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,s)},t.prototype.error=function(s){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,s)},t.prototype.complete=function(){var s,n;(n=(s=this.destination)===null||s===void 0?void 0:s.complete)===null||n===void 0||n.call(s)},t.prototype._subscribe=function(s){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(s))!==null&&i!==void 0?i:rd},t}(Re),B;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function s(i){throw new Error}e.assertNever=s,e.arrayToEnum=i=>{const r={};for(const o of i)r[o]=o;return r},e.getValidEnumValues=i=>{const r=e.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),o={};for(const a of r)o[a]=i[a];return e.objectValues(o)},e.objectValues=i=>e.objectKeys(i).map(function(r){return i[r]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const r=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&r.push(o);return r},e.find=(i,r)=>{for(const o of i)if(r(o))return o},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function n(i,r=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(r)}e.joinValues=n,e.jsonStringifyReplacer=(i,r)=>typeof r=="bigint"?r.toString():r})(B||(B={}));var Vo;(function(e){e.mergeShapes=(t,s)=>({...t,...s})})(Vo||(Vo={}));const x=B.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ie=e=>{switch(typeof e){case"undefined":return x.undefined;case"string":return x.string;case"number":return isNaN(e)?x.nan:x.number;case"boolean":return x.boolean;case"function":return x.function;case"bigint":return x.bigint;case"symbol":return x.symbol;case"object":return Array.isArray(e)?x.array:e===null?x.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?x.promise:typeof Map<"u"&&e instanceof Map?x.map:typeof Set<"u"&&e instanceof Set?x.set:typeof Date<"u"&&e instanceof Date?x.date:x.object;default:return x.unknown}},v=B.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Ng=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Ht extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const s=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,s):this.__proto__=s,this.name="ZodError",this.issues=t}format(t){const s=t||function(r){return r.message},n={_errors:[]},i=r=>{for(const o of r.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)n._errors.push(s(o));else{let a=n,l=0;for(;l<o.path.length;){const c=o.path[l];l===o.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(s(o))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return i(this),n}static assert(t){if(!(t instanceof Ht))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,B.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=s=>s.message){const s={},n=[];for(const i of this.issues)i.path.length>0?(s[i.path[0]]=s[i.path[0]]||[],s[i.path[0]].push(t(i))):n.push(t(i));return{formErrors:n,fieldErrors:s}}get formErrors(){return this.flatten()}}Ht.create=e=>new Ht(e);const Qs=(e,t)=>{let s;switch(e.code){case v.invalid_type:e.received===x.undefined?s="Required":s=`Expected ${e.expected}, received ${e.received}`;break;case v.invalid_literal:s=`Invalid literal value, expected ${JSON.stringify(e.expected,B.jsonStringifyReplacer)}`;break;case v.unrecognized_keys:s=`Unrecognized key(s) in object: ${B.joinValues(e.keys,", ")}`;break;case v.invalid_union:s="Invalid input";break;case v.invalid_union_discriminator:s=`Invalid discriminator value. Expected ${B.joinValues(e.options)}`;break;case v.invalid_enum_value:s=`Invalid enum value. Expected ${B.joinValues(e.options)}, received '${e.received}'`;break;case v.invalid_arguments:s="Invalid function arguments";break;case v.invalid_return_type:s="Invalid function return type";break;case v.invalid_date:s="Invalid date";break;case v.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(s=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(s=`${s} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?s=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?s=`Invalid input: must end with "${e.validation.endsWith}"`:B.assertNever(e.validation):e.validation!=="regex"?s=`Invalid ${e.validation}`:s="Invalid";break;case v.too_small:e.type==="array"?s=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?s=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?s=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?s=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:s="Invalid input";break;case v.too_big:e.type==="array"?s=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?s=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?s=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?s=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?s=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:s="Invalid input";break;case v.custom:s="Invalid input";break;case v.invalid_intersection_types:s="Intersection results could not be merged";break;case v.not_multiple_of:s=`Number must be a multiple of ${e.multipleOf}`;break;case v.not_finite:s="Number must be finite";break;default:s=t.defaultError,B.assertNever(e)}return{message:s}};let ld=Qs;function zg(e){ld=e}function rr(){return ld}const or=e=>{const{data:t,path:s,errorMaps:n,issueData:i}=e,r=[...s,...i.path||[]],o={...i,path:r};if(i.message!==void 0)return{...i,path:r,message:i.message};let a="";const l=n.filter(c=>!!c).slice().reverse();for(const c of l)a=c(o,{data:t,defaultError:a}).message;return{...i,path:r,message:a}},Vg=[];function w(e,t){const s=rr(),n=or({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,s,s===Qs?void 0:Qs].filter(i=>!!i)});e.common.issues.push(n)}class kt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,s){const n=[];for(const i of s){if(i.status==="aborted")return O;i.status==="dirty"&&t.dirty(),n.push(i.value)}return{status:t.value,value:n}}static async mergeObjectAsync(t,s){const n=[];for(const i of s){const r=await i.key,o=await i.value;n.push({key:r,value:o})}return kt.mergeObjectSync(t,n)}static mergeObjectSync(t,s){const n={};for(const i of s){const{key:r,value:o}=i;if(r.status==="aborted"||o.status==="aborted")return O;r.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),r.value!=="__proto__"&&(typeof o.value<"u"||i.alwaysSet)&&(n[r.value]=o.value)}return{status:t.value,value:n}}}const O=Object.freeze({status:"aborted"}),js=e=>({status:"dirty",value:e}),$t=e=>({status:"valid",value:e}),Bo=e=>e.status==="aborted",Fo=e=>e.status==="dirty",Is=e=>e.status==="valid",Qn=e=>typeof Promise<"u"&&e instanceof Promise;function ar(e,t,s,n){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function cd(e,t,s,n,i){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,s),s}var S;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(S||(S={}));var Rn,In;class Se{constructor(t,s,n,i){this._cachedPath=[],this.parent=t,this.data=s,this._path=n,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Vl=(e,t)=>{if(Is(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const s=new Ht(e.common.issues);return this._error=s,this._error}}};function I(e){if(!e)return{};const{errorMap:t,invalid_type_error:s,required_error:n,description:i}=e;if(t&&(s||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(o,a)=>{var l,c;const{message:u}=e;return o.code==="invalid_enum_value"?{message:u??a.defaultError}:typeof a.data>"u"?{message:(l=u??n)!==null&&l!==void 0?l:a.defaultError}:o.code!=="invalid_type"?{message:a.defaultError}:{message:(c=u??s)!==null&&c!==void 0?c:a.defaultError}},description:i}}class M{get description(){return this._def.description}_getType(t){return Ie(t.data)}_getOrReturnCtx(t,s){return s||{common:t.parent.common,data:t.data,parsedType:Ie(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new kt,ctx:{common:t.parent.common,data:t.data,parsedType:Ie(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const s=this._parse(t);if(Qn(s))throw new Error("Synchronous parse encountered promise.");return s}_parseAsync(t){const s=this._parse(t);return Promise.resolve(s)}parse(t,s){const n=this.safeParse(t,s);if(n.success)return n.data;throw n.error}safeParse(t,s){var n;const i={common:{issues:[],async:(n=s?.async)!==null&&n!==void 0?n:!1,contextualErrorMap:s?.errorMap},path:s?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Ie(t)},r=this._parseSync({data:t,path:i.path,parent:i});return Vl(i,r)}"~validate"(t){var s,n;const i={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Ie(t)};if(!this["~standard"].async)try{const r=this._parseSync({data:t,path:[],parent:i});return Is(r)?{value:r.value}:{issues:i.common.issues}}catch(r){!((n=(s=r?.message)===null||s===void 0?void 0:s.toLowerCase())===null||n===void 0)&&n.includes("encountered")&&(this["~standard"].async=!0),i.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:i}).then(r=>Is(r)?{value:r.value}:{issues:i.common.issues})}async parseAsync(t,s){const n=await this.safeParseAsync(t,s);if(n.success)return n.data;throw n.error}async safeParseAsync(t,s){const n={common:{issues:[],contextualErrorMap:s?.errorMap,async:!0},path:s?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Ie(t)},i=this._parse({data:t,path:n.path,parent:n}),r=await(Qn(i)?i:Promise.resolve(i));return Vl(n,r)}refine(t,s){const n=i=>typeof s=="string"||typeof s>"u"?{message:s}:typeof s=="function"?s(i):s;return this._refinement((i,r)=>{const o=t(i),a=()=>r.addIssue({code:v.custom,...n(i)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(t,s){return this._refinement((n,i)=>t(n)?!0:(i.addIssue(typeof s=="function"?s(n,i):s),!1))}_refinement(t){return new ue({schema:this,typeName:$.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:s=>this["~validate"](s)}}optional(){return we.create(this,this._def)}nullable(){return ls.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ae.create(this)}promise(){return en.create(this,this._def)}or(t){return ni.create([this,t],this._def)}and(t){return ii.create(this,t,this._def)}transform(t){return new ue({...I(this._def),schema:this,typeName:$.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const s=typeof t=="function"?t:()=>t;return new ci({...I(this._def),innerType:this,defaultValue:s,typeName:$.ZodDefault})}brand(){return new Aa({typeName:$.ZodBranded,type:this,...I(this._def)})}catch(t){const s=typeof t=="function"?t:()=>t;return new ui({...I(this._def),innerType:this,catchValue:s,typeName:$.ZodCatch})}describe(t){const s=this.constructor;return new s({...this._def,description:t})}pipe(t){return Si.create(this,t)}readonly(){return di.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Bg=/^c[^\s-]{8,}$/i,Fg=/^[0-9a-z]+$/,Ug=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Hg=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,jg=/^[a-z0-9_-]{21}$/i,Zg=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Wg=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,qg=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Yg="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ro;const Gg=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Kg=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Jg=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Xg=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Qg=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,tm=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ud="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",em=new RegExp(`^${ud}$`);function dd(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`),t}function sm(e){return new RegExp(`^${dd(e)}$`)}function hd(e){let t=`${ud}T${dd(e)}`;const s=[];return s.push(e.local?"Z?":"Z"),e.offset&&s.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${s.join("|")})`,new RegExp(`^${t}$`)}function nm(e,t){return!!((t==="v4"||!t)&&Gg.test(e)||(t==="v6"||!t)&&Jg.test(e))}function im(e,t){if(!Zg.test(e))return!1;try{const[s]=e.split("."),n=s.replace(/-/g,"+").replace(/_/g,"/").padEnd(s.length+(4-s.length%4)%4,"="),i=JSON.parse(atob(n));return!(typeof i!="object"||i===null||!i.typ||!i.alg||t&&i.alg!==t)}catch{return!1}}function rm(e,t){return!!((t==="v4"||!t)&&Kg.test(e)||(t==="v6"||!t)&&Xg.test(e))}class oe extends M{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==x.string){const r=this._getOrReturnCtx(t);return w(r,{code:v.invalid_type,expected:x.string,received:r.parsedType}),O}const n=new kt;let i;for(const r of this._def.checks)if(r.kind==="min")t.data.length<r.value&&(i=this._getOrReturnCtx(t,i),w(i,{code:v.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),n.dirty());else if(r.kind==="max")t.data.length>r.value&&(i=this._getOrReturnCtx(t,i),w(i,{code:v.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),n.dirty());else if(r.kind==="length"){const o=t.data.length>r.value,a=t.data.length<r.value;(o||a)&&(i=this._getOrReturnCtx(t,i),o?w(i,{code:v.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):a&&w(i,{code:v.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),n.dirty())}else if(r.kind==="email")qg.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"email",code:v.invalid_string,message:r.message}),n.dirty());else if(r.kind==="emoji")ro||(ro=new RegExp(Yg,"u")),ro.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"emoji",code:v.invalid_string,message:r.message}),n.dirty());else if(r.kind==="uuid")Hg.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"uuid",code:v.invalid_string,message:r.message}),n.dirty());else if(r.kind==="nanoid")jg.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"nanoid",code:v.invalid_string,message:r.message}),n.dirty());else if(r.kind==="cuid")Bg.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"cuid",code:v.invalid_string,message:r.message}),n.dirty());else if(r.kind==="cuid2")Fg.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"cuid2",code:v.invalid_string,message:r.message}),n.dirty());else if(r.kind==="ulid")Ug.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"ulid",code:v.invalid_string,message:r.message}),n.dirty());else if(r.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),w(i,{validation:"url",code:v.invalid_string,message:r.message}),n.dirty()}else r.kind==="regex"?(r.regex.lastIndex=0,r.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"regex",code:v.invalid_string,message:r.message}),n.dirty())):r.kind==="trim"?t.data=t.data.trim():r.kind==="includes"?t.data.includes(r.value,r.position)||(i=this._getOrReturnCtx(t,i),w(i,{code:v.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),n.dirty()):r.kind==="toLowerCase"?t.data=t.data.toLowerCase():r.kind==="toUpperCase"?t.data=t.data.toUpperCase():r.kind==="startsWith"?t.data.startsWith(r.value)||(i=this._getOrReturnCtx(t,i),w(i,{code:v.invalid_string,validation:{startsWith:r.value},message:r.message}),n.dirty()):r.kind==="endsWith"?t.data.endsWith(r.value)||(i=this._getOrReturnCtx(t,i),w(i,{code:v.invalid_string,validation:{endsWith:r.value},message:r.message}),n.dirty()):r.kind==="datetime"?hd(r).test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{code:v.invalid_string,validation:"datetime",message:r.message}),n.dirty()):r.kind==="date"?em.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{code:v.invalid_string,validation:"date",message:r.message}),n.dirty()):r.kind==="time"?sm(r).test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{code:v.invalid_string,validation:"time",message:r.message}),n.dirty()):r.kind==="duration"?Wg.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"duration",code:v.invalid_string,message:r.message}),n.dirty()):r.kind==="ip"?nm(t.data,r.version)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"ip",code:v.invalid_string,message:r.message}),n.dirty()):r.kind==="jwt"?im(t.data,r.alg)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"jwt",code:v.invalid_string,message:r.message}),n.dirty()):r.kind==="cidr"?rm(t.data,r.version)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"cidr",code:v.invalid_string,message:r.message}),n.dirty()):r.kind==="base64"?Qg.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"base64",code:v.invalid_string,message:r.message}),n.dirty()):r.kind==="base64url"?tm.test(t.data)||(i=this._getOrReturnCtx(t,i),w(i,{validation:"base64url",code:v.invalid_string,message:r.message}),n.dirty()):B.assertNever(r);return{status:n.value,value:t.data}}_regex(t,s,n){return this.refinement(i=>t.test(i),{validation:s,code:v.invalid_string,...S.errToObj(n)})}_addCheck(t){return new oe({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...S.errToObj(t)})}url(t){return this._addCheck({kind:"url",...S.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...S.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...S.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...S.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...S.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...S.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...S.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...S.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...S.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...S.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...S.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...S.errToObj(t)})}datetime(t){var s,n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(s=t?.offset)!==null&&s!==void 0?s:!1,local:(n=t?.local)!==null&&n!==void 0?n:!1,...S.errToObj(t?.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof t?.precision>"u"?null:t?.precision,...S.errToObj(t?.message)})}duration(t){return this._addCheck({kind:"duration",...S.errToObj(t)})}regex(t,s){return this._addCheck({kind:"regex",regex:t,...S.errToObj(s)})}includes(t,s){return this._addCheck({kind:"includes",value:t,position:s?.position,...S.errToObj(s?.message)})}startsWith(t,s){return this._addCheck({kind:"startsWith",value:t,...S.errToObj(s)})}endsWith(t,s){return this._addCheck({kind:"endsWith",value:t,...S.errToObj(s)})}min(t,s){return this._addCheck({kind:"min",value:t,...S.errToObj(s)})}max(t,s){return this._addCheck({kind:"max",value:t,...S.errToObj(s)})}length(t,s){return this._addCheck({kind:"length",value:t,...S.errToObj(s)})}nonempty(t){return this.min(1,S.errToObj(t))}trim(){return new oe({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new oe({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new oe({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxLength(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}}oe.create=e=>{var t;return new oe({checks:[],typeName:$.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...I(e)})};function om(e,t){const s=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,i=s>n?s:n,r=parseInt(e.toFixed(i).replace(".","")),o=parseInt(t.toFixed(i).replace(".",""));return r%o/Math.pow(10,i)}class rs extends M{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==x.number){const r=this._getOrReturnCtx(t);return w(r,{code:v.invalid_type,expected:x.number,received:r.parsedType}),O}let n;const i=new kt;for(const r of this._def.checks)r.kind==="int"?B.isInteger(t.data)||(n=this._getOrReturnCtx(t,n),w(n,{code:v.invalid_type,expected:"integer",received:"float",message:r.message}),i.dirty()):r.kind==="min"?(r.inclusive?t.data<r.value:t.data<=r.value)&&(n=this._getOrReturnCtx(t,n),w(n,{code:v.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),i.dirty()):r.kind==="max"?(r.inclusive?t.data>r.value:t.data>=r.value)&&(n=this._getOrReturnCtx(t,n),w(n,{code:v.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),i.dirty()):r.kind==="multipleOf"?om(t.data,r.value)!==0&&(n=this._getOrReturnCtx(t,n),w(n,{code:v.not_multiple_of,multipleOf:r.value,message:r.message}),i.dirty()):r.kind==="finite"?Number.isFinite(t.data)||(n=this._getOrReturnCtx(t,n),w(n,{code:v.not_finite,message:r.message}),i.dirty()):B.assertNever(r);return{status:i.value,value:t.data}}gte(t,s){return this.setLimit("min",t,!0,S.toString(s))}gt(t,s){return this.setLimit("min",t,!1,S.toString(s))}lte(t,s){return this.setLimit("max",t,!0,S.toString(s))}lt(t,s){return this.setLimit("max",t,!1,S.toString(s))}setLimit(t,s,n,i){return new rs({...this._def,checks:[...this._def.checks,{kind:t,value:s,inclusive:n,message:S.toString(i)}]})}_addCheck(t){return new rs({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:S.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:S.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:S.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:S.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:S.toString(t)})}multipleOf(t,s){return this._addCheck({kind:"multipleOf",value:t,message:S.toString(s)})}finite(t){return this._addCheck({kind:"finite",message:S.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:S.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:S.toString(t)})}get minValue(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxValue(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&B.isInteger(t.value))}get isFinite(){let t=null,s=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(s===null||n.value>s)&&(s=n.value):n.kind==="max"&&(t===null||n.value<t)&&(t=n.value)}return Number.isFinite(s)&&Number.isFinite(t)}}rs.create=e=>new rs({checks:[],typeName:$.ZodNumber,coerce:e?.coerce||!1,...I(e)});class os extends M{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==x.bigint)return this._getInvalidInput(t);let n;const i=new kt;for(const r of this._def.checks)r.kind==="min"?(r.inclusive?t.data<r.value:t.data<=r.value)&&(n=this._getOrReturnCtx(t,n),w(n,{code:v.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),i.dirty()):r.kind==="max"?(r.inclusive?t.data>r.value:t.data>=r.value)&&(n=this._getOrReturnCtx(t,n),w(n,{code:v.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),i.dirty()):r.kind==="multipleOf"?t.data%r.value!==BigInt(0)&&(n=this._getOrReturnCtx(t,n),w(n,{code:v.not_multiple_of,multipleOf:r.value,message:r.message}),i.dirty()):B.assertNever(r);return{status:i.value,value:t.data}}_getInvalidInput(t){const s=this._getOrReturnCtx(t);return w(s,{code:v.invalid_type,expected:x.bigint,received:s.parsedType}),O}gte(t,s){return this.setLimit("min",t,!0,S.toString(s))}gt(t,s){return this.setLimit("min",t,!1,S.toString(s))}lte(t,s){return this.setLimit("max",t,!0,S.toString(s))}lt(t,s){return this.setLimit("max",t,!1,S.toString(s))}setLimit(t,s,n,i){return new os({...this._def,checks:[...this._def.checks,{kind:t,value:s,inclusive:n,message:S.toString(i)}]})}_addCheck(t){return new os({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:S.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:S.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:S.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:S.toString(t)})}multipleOf(t,s){return this._addCheck({kind:"multipleOf",value:t,message:S.toString(s)})}get minValue(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxValue(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}}os.create=e=>{var t;return new os({checks:[],typeName:$.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...I(e)})};class ti extends M{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==x.boolean){const n=this._getOrReturnCtx(t);return w(n,{code:v.invalid_type,expected:x.boolean,received:n.parsedType}),O}return $t(t.data)}}ti.create=e=>new ti({typeName:$.ZodBoolean,coerce:e?.coerce||!1,...I(e)});class Ds extends M{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==x.date){const r=this._getOrReturnCtx(t);return w(r,{code:v.invalid_type,expected:x.date,received:r.parsedType}),O}if(isNaN(t.data.getTime())){const r=this._getOrReturnCtx(t);return w(r,{code:v.invalid_date}),O}const n=new kt;let i;for(const r of this._def.checks)r.kind==="min"?t.data.getTime()<r.value&&(i=this._getOrReturnCtx(t,i),w(i,{code:v.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),n.dirty()):r.kind==="max"?t.data.getTime()>r.value&&(i=this._getOrReturnCtx(t,i),w(i,{code:v.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),n.dirty()):B.assertNever(r);return{status:n.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Ds({...this._def,checks:[...this._def.checks,t]})}min(t,s){return this._addCheck({kind:"min",value:t.getTime(),message:S.toString(s)})}max(t,s){return this._addCheck({kind:"max",value:t.getTime(),message:S.toString(s)})}get minDate(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t!=null?new Date(t):null}}Ds.create=e=>new Ds({checks:[],coerce:e?.coerce||!1,typeName:$.ZodDate,...I(e)});class lr extends M{_parse(t){if(this._getType(t)!==x.symbol){const n=this._getOrReturnCtx(t);return w(n,{code:v.invalid_type,expected:x.symbol,received:n.parsedType}),O}return $t(t.data)}}lr.create=e=>new lr({typeName:$.ZodSymbol,...I(e)});class ei extends M{_parse(t){if(this._getType(t)!==x.undefined){const n=this._getOrReturnCtx(t);return w(n,{code:v.invalid_type,expected:x.undefined,received:n.parsedType}),O}return $t(t.data)}}ei.create=e=>new ei({typeName:$.ZodUndefined,...I(e)});class si extends M{_parse(t){if(this._getType(t)!==x.null){const n=this._getOrReturnCtx(t);return w(n,{code:v.invalid_type,expected:x.null,received:n.parsedType}),O}return $t(t.data)}}si.create=e=>new si({typeName:$.ZodNull,...I(e)});class tn extends M{constructor(){super(...arguments),this._any=!0}_parse(t){return $t(t.data)}}tn.create=e=>new tn({typeName:$.ZodAny,...I(e)});class Es extends M{constructor(){super(...arguments),this._unknown=!0}_parse(t){return $t(t.data)}}Es.create=e=>new Es({typeName:$.ZodUnknown,...I(e)});class Fe extends M{_parse(t){const s=this._getOrReturnCtx(t);return w(s,{code:v.invalid_type,expected:x.never,received:s.parsedType}),O}}Fe.create=e=>new Fe({typeName:$.ZodNever,...I(e)});class cr extends M{_parse(t){if(this._getType(t)!==x.undefined){const n=this._getOrReturnCtx(t);return w(n,{code:v.invalid_type,expected:x.void,received:n.parsedType}),O}return $t(t.data)}}cr.create=e=>new cr({typeName:$.ZodVoid,...I(e)});class ae extends M{_parse(t){const{ctx:s,status:n}=this._processInputParams(t),i=this._def;if(s.parsedType!==x.array)return w(s,{code:v.invalid_type,expected:x.array,received:s.parsedType}),O;if(i.exactLength!==null){const o=s.data.length>i.exactLength.value,a=s.data.length<i.exactLength.value;(o||a)&&(w(s,{code:o?v.too_big:v.too_small,minimum:a?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),n.dirty())}if(i.minLength!==null&&s.data.length<i.minLength.value&&(w(s,{code:v.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),n.dirty()),i.maxLength!==null&&s.data.length>i.maxLength.value&&(w(s,{code:v.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),n.dirty()),s.common.async)return Promise.all([...s.data].map((o,a)=>i.type._parseAsync(new Se(s,o,s.path,a)))).then(o=>kt.mergeArray(n,o));const r=[...s.data].map((o,a)=>i.type._parseSync(new Se(s,o,s.path,a)));return kt.mergeArray(n,r)}get element(){return this._def.type}min(t,s){return new ae({...this._def,minLength:{value:t,message:S.toString(s)}})}max(t,s){return new ae({...this._def,maxLength:{value:t,message:S.toString(s)}})}length(t,s){return new ae({...this._def,exactLength:{value:t,message:S.toString(s)}})}nonempty(t){return this.min(1,t)}}ae.create=(e,t)=>new ae({type:e,minLength:null,maxLength:null,exactLength:null,typeName:$.ZodArray,...I(t)});function Us(e){if(e instanceof J){const t={};for(const s in e.shape){const n=e.shape[s];t[s]=we.create(Us(n))}return new J({...e._def,shape:()=>t})}else return e instanceof ae?new ae({...e._def,type:Us(e.element)}):e instanceof we?we.create(Us(e.unwrap())):e instanceof ls?ls.create(Us(e.unwrap())):e instanceof Ce?Ce.create(e.items.map(t=>Us(t))):e}class J extends M{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),s=B.objectKeys(t);return this._cached={shape:t,keys:s}}_parse(t){if(this._getType(t)!==x.object){const c=this._getOrReturnCtx(t);return w(c,{code:v.invalid_type,expected:x.object,received:c.parsedType}),O}const{status:n,ctx:i}=this._processInputParams(t),{shape:r,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Fe&&this._def.unknownKeys==="strip"))for(const c in i.data)o.includes(c)||a.push(c);const l=[];for(const c of o){const u=r[c],d=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Se(i,d,i.path,c)),alwaysSet:c in i.data})}if(this._def.catchall instanceof Fe){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(c==="strict")a.length>0&&(w(i,{code:v.unrecognized_keys,keys:a}),n.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of a){const d=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Se(i,d,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const d=await u.key,f=await u.value;c.push({key:d,value:f,alwaysSet:u.alwaysSet})}return c}).then(c=>kt.mergeObjectSync(n,c)):kt.mergeObjectSync(n,l)}get shape(){return this._def.shape()}strict(t){return S.errToObj,new J({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(s,n)=>{var i,r,o,a;const l=(o=(r=(i=this._def).errorMap)===null||r===void 0?void 0:r.call(i,s,n).message)!==null&&o!==void 0?o:n.defaultError;return s.code==="unrecognized_keys"?{message:(a=S.errToObj(t).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new J({...this._def,unknownKeys:"strip"})}passthrough(){return new J({...this._def,unknownKeys:"passthrough"})}extend(t){return new J({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new J({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:$.ZodObject})}setKey(t,s){return this.augment({[t]:s})}catchall(t){return new J({...this._def,catchall:t})}pick(t){const s={};return B.objectKeys(t).forEach(n=>{t[n]&&this.shape[n]&&(s[n]=this.shape[n])}),new J({...this._def,shape:()=>s})}omit(t){const s={};return B.objectKeys(this.shape).forEach(n=>{t[n]||(s[n]=this.shape[n])}),new J({...this._def,shape:()=>s})}deepPartial(){return Us(this)}partial(t){const s={};return B.objectKeys(this.shape).forEach(n=>{const i=this.shape[n];t&&!t[n]?s[n]=i:s[n]=i.optional()}),new J({...this._def,shape:()=>s})}required(t){const s={};return B.objectKeys(this.shape).forEach(n=>{if(t&&!t[n])s[n]=this.shape[n];else{let r=this.shape[n];for(;r instanceof we;)r=r._def.innerType;s[n]=r}}),new J({...this._def,shape:()=>s})}keyof(){return fd(B.objectKeys(this.shape))}}J.create=(e,t)=>new J({shape:()=>e,unknownKeys:"strip",catchall:Fe.create(),typeName:$.ZodObject,...I(t)});J.strictCreate=(e,t)=>new J({shape:()=>e,unknownKeys:"strict",catchall:Fe.create(),typeName:$.ZodObject,...I(t)});J.lazycreate=(e,t)=>new J({shape:e,unknownKeys:"strip",catchall:Fe.create(),typeName:$.ZodObject,...I(t)});class ni extends M{_parse(t){const{ctx:s}=this._processInputParams(t),n=this._def.options;function i(r){for(const a of r)if(a.result.status==="valid")return a.result;for(const a of r)if(a.result.status==="dirty")return s.common.issues.push(...a.ctx.common.issues),a.result;const o=r.map(a=>new Ht(a.ctx.common.issues));return w(s,{code:v.invalid_union,unionErrors:o}),O}if(s.common.async)return Promise.all(n.map(async r=>{const o={...s,common:{...s.common,issues:[]},parent:null};return{result:await r._parseAsync({data:s.data,path:s.path,parent:o}),ctx:o}})).then(i);{let r;const o=[];for(const l of n){const c={...s,common:{...s.common,issues:[]},parent:null},u=l._parseSync({data:s.data,path:s.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!r&&(r={result:u,ctx:c}),c.common.issues.length&&o.push(c.common.issues)}if(r)return s.common.issues.push(...r.ctx.common.issues),r.result;const a=o.map(l=>new Ht(l));return w(s,{code:v.invalid_union,unionErrors:a}),O}}get options(){return this._def.options}}ni.create=(e,t)=>new ni({options:e,typeName:$.ZodUnion,...I(t)});const Oe=e=>e instanceof oi?Oe(e.schema):e instanceof ue?Oe(e.innerType()):e instanceof ai?[e.value]:e instanceof as?e.options:e instanceof li?B.objectValues(e.enum):e instanceof ci?Oe(e._def.innerType):e instanceof ei?[void 0]:e instanceof si?[null]:e instanceof we?[void 0,...Oe(e.unwrap())]:e instanceof ls?[null,...Oe(e.unwrap())]:e instanceof Aa||e instanceof di?Oe(e.unwrap()):e instanceof ui?Oe(e._def.innerType):[];class Nr extends M{_parse(t){const{ctx:s}=this._processInputParams(t);if(s.parsedType!==x.object)return w(s,{code:v.invalid_type,expected:x.object,received:s.parsedType}),O;const n=this.discriminator,i=s.data[n],r=this.optionsMap.get(i);return r?s.common.async?r._parseAsync({data:s.data,path:s.path,parent:s}):r._parseSync({data:s.data,path:s.path,parent:s}):(w(s,{code:v.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),O)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,s,n){const i=new Map;for(const r of s){const o=Oe(r.shape[t]);if(!o.length)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const a of o){if(i.has(a))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);i.set(a,r)}}return new Nr({typeName:$.ZodDiscriminatedUnion,discriminator:t,options:s,optionsMap:i,...I(n)})}}function Uo(e,t){const s=Ie(e),n=Ie(t);if(e===t)return{valid:!0,data:e};if(s===x.object&&n===x.object){const i=B.objectKeys(t),r=B.objectKeys(e).filter(a=>i.indexOf(a)!==-1),o={...e,...t};for(const a of r){const l=Uo(e[a],t[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(s===x.array&&n===x.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let r=0;r<e.length;r++){const o=e[r],a=t[r],l=Uo(o,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return s===x.date&&n===x.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class ii extends M{_parse(t){const{status:s,ctx:n}=this._processInputParams(t),i=(r,o)=>{if(Bo(r)||Bo(o))return O;const a=Uo(r.value,o.value);return a.valid?((Fo(r)||Fo(o))&&s.dirty(),{status:s.value,value:a.data}):(w(n,{code:v.invalid_intersection_types}),O)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([r,o])=>i(r,o)):i(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}ii.create=(e,t,s)=>new ii({left:e,right:t,typeName:$.ZodIntersection,...I(s)});class Ce extends M{_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.parsedType!==x.array)return w(n,{code:v.invalid_type,expected:x.array,received:n.parsedType}),O;if(n.data.length<this._def.items.length)return w(n,{code:v.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),O;!this._def.rest&&n.data.length>this._def.items.length&&(w(n,{code:v.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),s.dirty());const r=[...n.data].map((o,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Se(n,o,n.path,a)):null}).filter(o=>!!o);return n.common.async?Promise.all(r).then(o=>kt.mergeArray(s,o)):kt.mergeArray(s,r)}get items(){return this._def.items}rest(t){return new Ce({...this._def,rest:t})}}Ce.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ce({items:e,typeName:$.ZodTuple,rest:null,...I(t)})};class ri extends M{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.parsedType!==x.object)return w(n,{code:v.invalid_type,expected:x.object,received:n.parsedType}),O;const i=[],r=this._def.keyType,o=this._def.valueType;for(const a in n.data)i.push({key:r._parse(new Se(n,a,n.path,a)),value:o._parse(new Se(n,n.data[a],n.path,a)),alwaysSet:a in n.data});return n.common.async?kt.mergeObjectAsync(s,i):kt.mergeObjectSync(s,i)}get element(){return this._def.valueType}static create(t,s,n){return s instanceof M?new ri({keyType:t,valueType:s,typeName:$.ZodRecord,...I(n)}):new ri({keyType:oe.create(),valueType:t,typeName:$.ZodRecord,...I(s)})}}class ur extends M{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.parsedType!==x.map)return w(n,{code:v.invalid_type,expected:x.map,received:n.parsedType}),O;const i=this._def.keyType,r=this._def.valueType,o=[...n.data.entries()].map(([a,l],c)=>({key:i._parse(new Se(n,a,n.path,[c,"key"])),value:r._parse(new Se(n,l,n.path,[c,"value"]))}));if(n.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of o){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return O;(c.status==="dirty"||u.status==="dirty")&&s.dirty(),a.set(c.value,u.value)}return{status:s.value,value:a}})}else{const a=new Map;for(const l of o){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return O;(c.status==="dirty"||u.status==="dirty")&&s.dirty(),a.set(c.value,u.value)}return{status:s.value,value:a}}}}ur.create=(e,t,s)=>new ur({valueType:t,keyType:e,typeName:$.ZodMap,...I(s)});class Ls extends M{_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.parsedType!==x.set)return w(n,{code:v.invalid_type,expected:x.set,received:n.parsedType}),O;const i=this._def;i.minSize!==null&&n.data.size<i.minSize.value&&(w(n,{code:v.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),s.dirty()),i.maxSize!==null&&n.data.size>i.maxSize.value&&(w(n,{code:v.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),s.dirty());const r=this._def.valueType;function o(l){const c=new Set;for(const u of l){if(u.status==="aborted")return O;u.status==="dirty"&&s.dirty(),c.add(u.value)}return{status:s.value,value:c}}const a=[...n.data.values()].map((l,c)=>r._parse(new Se(n,l,n.path,c)));return n.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(t,s){return new Ls({...this._def,minSize:{value:t,message:S.toString(s)}})}max(t,s){return new Ls({...this._def,maxSize:{value:t,message:S.toString(s)}})}size(t,s){return this.min(t,s).max(t,s)}nonempty(t){return this.min(1,t)}}Ls.create=(e,t)=>new Ls({valueType:e,minSize:null,maxSize:null,typeName:$.ZodSet,...I(t)});class Ws extends M{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:s}=this._processInputParams(t);if(s.parsedType!==x.function)return w(s,{code:v.invalid_type,expected:x.function,received:s.parsedType}),O;function n(a,l){return or({data:a,path:s.path,errorMaps:[s.common.contextualErrorMap,s.schemaErrorMap,rr(),Qs].filter(c=>!!c),issueData:{code:v.invalid_arguments,argumentsError:l}})}function i(a,l){return or({data:a,path:s.path,errorMaps:[s.common.contextualErrorMap,s.schemaErrorMap,rr(),Qs].filter(c=>!!c),issueData:{code:v.invalid_return_type,returnTypeError:l}})}const r={errorMap:s.common.contextualErrorMap},o=s.data;if(this._def.returns instanceof en){const a=this;return $t(async function(...l){const c=new Ht([]),u=await a._def.args.parseAsync(l,r).catch(h=>{throw c.addIssue(n(l,h)),c}),d=await Reflect.apply(o,this,u);return await a._def.returns._def.type.parseAsync(d,r).catch(h=>{throw c.addIssue(i(d,h)),c})})}else{const a=this;return $t(function(...l){const c=a._def.args.safeParse(l,r);if(!c.success)throw new Ht([n(l,c.error)]);const u=Reflect.apply(o,this,c.data),d=a._def.returns.safeParse(u,r);if(!d.success)throw new Ht([i(u,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Ws({...this._def,args:Ce.create(t).rest(Es.create())})}returns(t){return new Ws({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,s,n){return new Ws({args:t||Ce.create([]).rest(Es.create()),returns:s||Es.create(),typeName:$.ZodFunction,...I(n)})}}class oi extends M{get schema(){return this._def.getter()}_parse(t){const{ctx:s}=this._processInputParams(t);return this._def.getter()._parse({data:s.data,path:s.path,parent:s})}}oi.create=(e,t)=>new oi({getter:e,typeName:$.ZodLazy,...I(t)});class ai extends M{_parse(t){if(t.data!==this._def.value){const s=this._getOrReturnCtx(t);return w(s,{received:s.data,code:v.invalid_literal,expected:this._def.value}),O}return{status:"valid",value:t.data}}get value(){return this._def.value}}ai.create=(e,t)=>new ai({value:e,typeName:$.ZodLiteral,...I(t)});function fd(e,t){return new as({values:e,typeName:$.ZodEnum,...I(t)})}class as extends M{constructor(){super(...arguments),Rn.set(this,void 0)}_parse(t){if(typeof t.data!="string"){const s=this._getOrReturnCtx(t),n=this._def.values;return w(s,{expected:B.joinValues(n),received:s.parsedType,code:v.invalid_type}),O}if(ar(this,Rn)||cd(this,Rn,new Set(this._def.values)),!ar(this,Rn).has(t.data)){const s=this._getOrReturnCtx(t),n=this._def.values;return w(s,{received:s.data,code:v.invalid_enum_value,options:n}),O}return $t(t.data)}get options(){return this._def.values}get enum(){const t={};for(const s of this._def.values)t[s]=s;return t}get Values(){const t={};for(const s of this._def.values)t[s]=s;return t}get Enum(){const t={};for(const s of this._def.values)t[s]=s;return t}extract(t,s=this._def){return as.create(t,{...this._def,...s})}exclude(t,s=this._def){return as.create(this.options.filter(n=>!t.includes(n)),{...this._def,...s})}}Rn=new WeakMap;as.create=fd;class li extends M{constructor(){super(...arguments),In.set(this,void 0)}_parse(t){const s=B.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(t);if(n.parsedType!==x.string&&n.parsedType!==x.number){const i=B.objectValues(s);return w(n,{expected:B.joinValues(i),received:n.parsedType,code:v.invalid_type}),O}if(ar(this,In)||cd(this,In,new Set(B.getValidEnumValues(this._def.values))),!ar(this,In).has(t.data)){const i=B.objectValues(s);return w(n,{received:n.data,code:v.invalid_enum_value,options:i}),O}return $t(t.data)}get enum(){return this._def.values}}In=new WeakMap;li.create=(e,t)=>new li({values:e,typeName:$.ZodNativeEnum,...I(t)});class en extends M{unwrap(){return this._def.type}_parse(t){const{ctx:s}=this._processInputParams(t);if(s.parsedType!==x.promise&&s.common.async===!1)return w(s,{code:v.invalid_type,expected:x.promise,received:s.parsedType}),O;const n=s.parsedType===x.promise?s.data:Promise.resolve(s.data);return $t(n.then(i=>this._def.type.parseAsync(i,{path:s.path,errorMap:s.common.contextualErrorMap})))}}en.create=(e,t)=>new en({type:e,typeName:$.ZodPromise,...I(t)});class ue extends M{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===$.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:s,ctx:n}=this._processInputParams(t),i=this._def.effect||null,r={addIssue:o=>{w(n,o),o.fatal?s.abort():s.dirty()},get path(){return n.path}};if(r.addIssue=r.addIssue.bind(r),i.type==="preprocess"){const o=i.transform(n.data,r);if(n.common.async)return Promise.resolve(o).then(async a=>{if(s.value==="aborted")return O;const l=await this._def.schema._parseAsync({data:a,path:n.path,parent:n});return l.status==="aborted"?O:l.status==="dirty"||s.value==="dirty"?js(l.value):l});{if(s.value==="aborted")return O;const a=this._def.schema._parseSync({data:o,path:n.path,parent:n});return a.status==="aborted"?O:a.status==="dirty"||s.value==="dirty"?js(a.value):a}}if(i.type==="refinement"){const o=a=>{const l=i.refinement(a,r);if(n.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return a.status==="aborted"?O:(a.status==="dirty"&&s.dirty(),o(a.value),{status:s.value,value:a.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>a.status==="aborted"?O:(a.status==="dirty"&&s.dirty(),o(a.value).then(()=>({status:s.value,value:a.value}))))}if(i.type==="transform")if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Is(o))return o;const a=i.transform(o.value,r);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:s.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>Is(o)?Promise.resolve(i.transform(o.value,r)).then(a=>({status:s.value,value:a})):o);B.assertNever(i)}}ue.create=(e,t,s)=>new ue({schema:e,typeName:$.ZodEffects,effect:t,...I(s)});ue.createWithPreprocess=(e,t,s)=>new ue({schema:t,effect:{type:"preprocess",transform:e},typeName:$.ZodEffects,...I(s)});class we extends M{_parse(t){return this._getType(t)===x.undefined?$t(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}we.create=(e,t)=>new we({innerType:e,typeName:$.ZodOptional,...I(t)});class ls extends M{_parse(t){return this._getType(t)===x.null?$t(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}ls.create=(e,t)=>new ls({innerType:e,typeName:$.ZodNullable,...I(t)});class ci extends M{_parse(t){const{ctx:s}=this._processInputParams(t);let n=s.data;return s.parsedType===x.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:s.path,parent:s})}removeDefault(){return this._def.innerType}}ci.create=(e,t)=>new ci({innerType:e,typeName:$.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...I(t)});class ui extends M{_parse(t){const{ctx:s}=this._processInputParams(t),n={...s,common:{...s.common,issues:[]}},i=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Qn(i)?i.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Ht(n.common.issues)},input:n.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Ht(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}ui.create=(e,t)=>new ui({innerType:e,typeName:$.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...I(t)});class dr extends M{_parse(t){if(this._getType(t)!==x.nan){const n=this._getOrReturnCtx(t);return w(n,{code:v.invalid_type,expected:x.nan,received:n.parsedType}),O}return{status:"valid",value:t.data}}}dr.create=e=>new dr({typeName:$.ZodNaN,...I(e)});const am=Symbol("zod_brand");class Aa extends M{_parse(t){const{ctx:s}=this._processInputParams(t),n=s.data;return this._def.type._parse({data:n,path:s.path,parent:s})}unwrap(){return this._def.type}}class Si extends M{_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.common.async)return(async()=>{const r=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return r.status==="aborted"?O:r.status==="dirty"?(s.dirty(),js(r.value)):this._def.out._parseAsync({data:r.value,path:n.path,parent:n})})();{const i=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return i.status==="aborted"?O:i.status==="dirty"?(s.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:n.path,parent:n})}}static create(t,s){return new Si({in:t,out:s,typeName:$.ZodPipeline})}}class di extends M{_parse(t){const s=this._def.innerType._parse(t),n=i=>(Is(i)&&(i.value=Object.freeze(i.value)),i);return Qn(s)?s.then(i=>n(i)):n(s)}unwrap(){return this._def.innerType}}di.create=(e,t)=>new di({innerType:e,typeName:$.ZodReadonly,...I(t)});function Bl(e,t){const s=typeof e=="function"?e(t):typeof e=="string"?{message:e}:e;return typeof s=="string"?{message:s}:s}function pd(e,t={},s){return e?tn.create().superRefine((n,i)=>{var r,o;const a=e(n);if(a instanceof Promise)return a.then(l=>{var c,u;if(!l){const d=Bl(t,n),f=(u=(c=d.fatal)!==null&&c!==void 0?c:s)!==null&&u!==void 0?u:!0;i.addIssue({code:"custom",...d,fatal:f})}});if(!a){const l=Bl(t,n),c=(o=(r=l.fatal)!==null&&r!==void 0?r:s)!==null&&o!==void 0?o:!0;i.addIssue({code:"custom",...l,fatal:c})}}):tn.create()}const lm={object:J.lazycreate};var $;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})($||($={}));const cm=(e,t={message:`Input not instance of ${e.name}`})=>pd(s=>s instanceof e,t),gd=oe.create,md=rs.create,um=dr.create,dm=os.create,bd=ti.create,hm=Ds.create,fm=lr.create,pm=ei.create,gm=si.create,mm=tn.create,bm=Es.create,vm=Fe.create,ym=cr.create,_m=ae.create,wm=J.create,xm=J.strictCreate,km=ni.create,Sm=Nr.create,Cm=ii.create,Em=Ce.create,Am=ri.create,$m=ur.create,Tm=Ls.create,Om=Ws.create,Rm=oi.create,Im=ai.create,Dm=as.create,Lm=li.create,Mm=en.create,Fl=ue.create,Pm=we.create,Nm=ls.create,zm=ue.createWithPreprocess,Vm=Si.create,Bm=()=>gd().optional(),Fm=()=>md().optional(),Um=()=>bd().optional(),Hm={string:e=>oe.create({...e,coerce:!0}),number:e=>rs.create({...e,coerce:!0}),boolean:e=>ti.create({...e,coerce:!0}),bigint:e=>os.create({...e,coerce:!0}),date:e=>Ds.create({...e,coerce:!0})},jm=O;var ps=Object.freeze({__proto__:null,defaultErrorMap:Qs,setErrorMap:zg,getErrorMap:rr,makeIssue:or,EMPTY_PATH:Vg,addIssueToContext:w,ParseStatus:kt,INVALID:O,DIRTY:js,OK:$t,isAborted:Bo,isDirty:Fo,isValid:Is,isAsync:Qn,get util(){return B},get objectUtil(){return Vo},ZodParsedType:x,getParsedType:Ie,ZodType:M,datetimeRegex:hd,ZodString:oe,ZodNumber:rs,ZodBigInt:os,ZodBoolean:ti,ZodDate:Ds,ZodSymbol:lr,ZodUndefined:ei,ZodNull:si,ZodAny:tn,ZodUnknown:Es,ZodNever:Fe,ZodVoid:cr,ZodArray:ae,ZodObject:J,ZodUnion:ni,ZodDiscriminatedUnion:Nr,ZodIntersection:ii,ZodTuple:Ce,ZodRecord:ri,ZodMap:ur,ZodSet:Ls,ZodFunction:Ws,ZodLazy:oi,ZodLiteral:ai,ZodEnum:as,ZodNativeEnum:li,ZodPromise:en,ZodEffects:ue,ZodTransformer:ue,ZodOptional:we,ZodNullable:ls,ZodDefault:ci,ZodCatch:ui,ZodNaN:dr,BRAND:am,ZodBranded:Aa,ZodPipeline:Si,ZodReadonly:di,custom:pd,Schema:M,ZodSchema:M,late:lm,get ZodFirstPartyTypeKind(){return $},coerce:Hm,any:mm,array:_m,bigint:dm,boolean:bd,date:hm,discriminatedUnion:Sm,effect:Fl,enum:Dm,function:Om,instanceof:cm,intersection:Cm,lazy:Rm,literal:Im,map:$m,nan:um,nativeEnum:Lm,never:vm,null:gm,nullable:Nm,number:md,object:wm,oboolean:Um,onumber:Fm,optional:Pm,ostring:Bm,pipeline:Vm,preprocess:zm,promise:Mm,record:Am,set:Tm,strictObject:xm,string:gd,symbol:fm,transformer:Fl,tuple:Em,undefined:pm,union:km,unknown:bm,void:ym,NEVER:jm,ZodIssueCode:v,quotelessJson:Ng,ZodError:Ht});class vd{constructor(){this._disposables=[],this._disposed=!1}get disposed(){return this._disposed}add(t){if(this._disposed){yd(t);return}this._disposables.push(t)}addFromEvent(t,s,n,i){this.add({dispose:()=>{t.removeEventListener(s,n,i)}}),t.addEventListener(s,n,i)}dispose(){Zm(this._disposables),this._disposables=[],this._disposed=!0}}function yd(e){try{e instanceof ki?e.unsubscribe():e instanceof Re?e.complete():typeof e=="function"?e():e.dispose()}catch(t){console.error(t)}}function Zm(e){e.forEach(yd)}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wm(e){class t extends e{connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this.__dispose)==null||n.call(this)}performUpdate(){var n;if(this.isUpdatePending===!1||this.isConnected===!1)return;(n=this.__dispose)==null||n.call(this);let i=!0;this.__dispose=Mr(()=>{i?(i=!1,super.performUpdate()):this.requestUpdate()})}}return t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $a=globalThis,hr=$a.trustedTypes,Ul=hr?hr.createPolicy("lit-html",{createHTML:e=>e}):void 0,_d="$lit$",Ke=`lit$${Math.random().toFixed(9).slice(2)}$`,wd="?"+Ke,qm=`<${wd}>`,Ms=document,hi=()=>Ms.createComment(""),fi=e=>e===null||typeof e!="object"&&typeof e!="function",Ta=Array.isArray,Ym=e=>Ta(e)||typeof e?.[Symbol.iterator]=="function",oo=`[ 	
\f\r]`,kn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hl=/-->/g,jl=/>/g,gs=RegExp(`>|${oo}(?:([^\\s"'>=/]+)(${oo}*=${oo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zl=/'/g,Wl=/"/g,xd=/^(?:script|style|textarea|title)$/i,kd=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),A=kd(1),f_=kd(2),Pt=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),ql=new WeakMap,ys=Ms.createTreeWalker(Ms,129);function Sd(e,t){if(!Ta(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ul!==void 0?Ul.createHTML(t):t}const Gm=(e,t)=>{const s=e.length-1,n=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=kn;for(let a=0;a<s;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(o.lastIndex=f,u=o.exec(l),u!==null);)f=o.lastIndex,o===kn?u[1]==="!--"?o=Hl:u[1]!==void 0?o=jl:u[2]!==void 0?(xd.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=gs):u[3]!==void 0&&(o=gs):o===gs?u[0]===">"?(o=i??kn,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?gs:u[3]==='"'?Wl:Zl):o===Wl||o===Zl?o=gs:o===Hl||o===jl?o=kn:(o=gs,i=void 0);const h=o===gs&&e[a+1].startsWith("/>")?" ":"";r+=o===kn?l+qm:d>=0?(n.push(c),l.slice(0,d)+_d+l.slice(d)+Ke+h):l+Ke+(d===-2?a:h)}return[Sd(e,r+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class pi{constructor({strings:t,_$litType$:s},n){let i;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[c,u]=Gm(t,s);if(this.el=pi.createElement(c,n),ys.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=ys.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(_d)){const f=u[o++],h=i.getAttribute(d).split(Ke),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:g[2],strings:h,ctor:g[1]==="."?Jm:g[1]==="?"?Xm:g[1]==="@"?Qm:zr}),i.removeAttribute(d)}else d.startsWith(Ke)&&(l.push({type:6,index:r}),i.removeAttribute(d));if(xd.test(i.tagName)){const d=i.textContent.split(Ke),f=d.length-1;if(f>0){i.textContent=hr?hr.emptyScript:"";for(let h=0;h<f;h++)i.append(d[h],hi()),ys.nextNode(),l.push({type:2,index:++r});i.append(d[f],hi())}}}else if(i.nodeType===8)if(i.data===wd)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(Ke,d+1))!==-1;)l.push({type:7,index:r}),d+=Ke.length-1}r++}}static createElement(t,s){const n=Ms.createElement("template");return n.innerHTML=t,n}}function sn(e,t,s=e,n){if(t===Pt)return t;let i=n!==void 0?s._$Co?.[n]:s._$Cl;const r=fi(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(e),i._$AT(e,s,n)),n!==void 0?(s._$Co??=[])[n]=i:s._$Cl=i),i!==void 0&&(t=sn(e,i._$AS(e,t.values),i,n)),t}let Km=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:n}=this._$AD,i=(t?.creationScope??Ms).importNode(s,!0);ys.currentNode=i;let r=ys.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new bn(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new tb(r,this,t)),this._$AV.push(c),l=n[++a]}o!==l?.index&&(r=ys.nextNode(),o++)}return ys.currentNode=Ms,i}p(t){let s=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,s),s+=n.strings.length-2):n._$AI(t[s])),s++}};class bn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,n,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=sn(this,t,s),fi(t)?t===G||t==null||t===""?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==Pt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ym(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&fi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ms.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=pi.createElement(Sd(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(s);else{const r=new Km(i,this),o=r.u(this.options);r.p(s),this.T(o),this._$AH=r}}_$AC(t){let s=ql.get(t.strings);return s===void 0&&ql.set(t.strings,s=new pi(t)),s}k(t){Ta(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let n,i=0;for(const r of t)i===s.length?s.push(n=new bn(this.O(hi()),this.O(hi()),this,this.options)):n=s[i],n._$AI(r),i++;i<s.length&&(this._$AR(n&&n._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class zr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,n,i,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=G}_$AI(t,s=this,n,i){const r=this.strings;let o=!1;if(r===void 0)t=sn(this,t,s,0),o=!fi(t)||t!==this._$AH&&t!==Pt,o&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=sn(this,a[n+l],s,l),c===Pt&&(c=this._$AH[l]),o||=!fi(c)||c!==this._$AH[l],c===G?t=G:t!==G&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Jm extends zr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class Xm extends zr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class Qm extends zr{constructor(t,s,n,i,r){super(t,s,n,i,r),this.type=5}_$AI(t,s=this){if((t=sn(this,t,s,0)??G)===Pt)return;const n=this._$AH,i=t===G&&n!==G||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==G&&(n===G||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tb{constructor(t,s,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){sn(this,t)}}const eb={I:bn},sb=$a.litHtmlPolyfillSupport;sb?.(pi,bn),($a.litHtmlVersions??=[]).push("3.2.1");const Oa=(e,t,s)=>{const n=s?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const r=s?.renderBefore??null;n._$litPart$=i=new bn(t.insertBefore(hi(),r),r,void 0,s??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:nb}=eb,ib=(e,t)=>e?._$litType$!==void 0,g_=e=>e?._$litType$?.h!=null,Cd=e=>e.strings===void 0,Yl=()=>document.createComment(""),Sn=(e,t,s)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(s===void 0){const r=n.insertBefore(Yl(),i),o=n.insertBefore(Yl(),i);s=new nb(r,o,e,e.options)}else{const r=s._$AB.nextSibling,o=s._$AM,a=o!==e;if(a){let l;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(l=e._$AU)!==o._$AU&&s._$AP(l)}if(r!==i||a){let l=s._$AA;for(;l!==r;){const c=l.nextSibling;n.insertBefore(l,i),l=c}}}return s},ms=(e,t,s=e)=>(e._$AI(t,s),e),rb={},Ed=(e,t=rb)=>e._$AH=t,ob=e=>e._$AH,ao=e=>{e._$AP?.(!1,!0);let t=e._$AA;const s=e._$AB.nextSibling;for(;t!==s;){const n=t.nextSibling;t.remove(),t=n}},m_=e=>{e._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},vn=e=>(...t)=>({_$litDirective$:e,values:t});let yn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zn=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),zn(n,t);return!0},fr=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},Ad=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),cb(t)}};function ab(e){this._$AN!==void 0?(fr(this),this._$AM=e,Ad(this)):this._$AM=e}function lb(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)zn(n[r],!1),fr(n[r]);else n!=null&&(zn(n,!1),fr(n));else zn(this,e)}const cb=e=>{e.type==re.CHILD&&(e._$AP??=lb,e._$AQ??=ab)};let ub=class extends yn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),Ad(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(zn(this,t),fr(this))}setValue(t){if(Cd(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=globalThis,Ra=Ki.ShadowRoot&&(Ki.ShadyCSS===void 0||Ki.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ia=Symbol(),Gl=new WeakMap;let pr=class{constructor(t,s,n){if(this._$cssResult$=!0,n!==Ia)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Ra&&t===void 0){const n=s!==void 0&&s.length===1;n&&(t=Gl.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Gl.set(s,t))}return t}toString(){return this.cssText}};const db=e=>new pr(typeof e=="string"?e:e+"",void 0,Ia),st=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((n,i,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new pr(s,e,Ia)},hb=(e,t)=>{if(Ra)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const n=document.createElement("style"),i=Ki.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=s.cssText,e.appendChild(n)}},Kl=Ra?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const n of t.cssRules)s+=n.cssText;return db(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fb,defineProperty:pb,getOwnPropertyDescriptor:gb,getOwnPropertyNames:mb,getOwnPropertySymbols:bb,getPrototypeOf:vb}=Object,Vr=globalThis,Jl=Vr.trustedTypes,yb=Jl?Jl.emptyScript:"",_b=Vr.reactiveElementPolyfillSupport,Vn=(e,t)=>e,nn={toAttribute(e,t){switch(t){case Boolean:e=e?yb:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Da=(e,t)=>!fb(e,t),Xl={attribute:!0,type:String,converter:nn,reflect:!1,hasChanged:Da};Symbol.metadata??=Symbol("metadata"),Vr.litPropertyMetadata??=new WeakMap;class Hs extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Xl){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,s);i!==void 0&&pb(this.prototype,t,i)}}static getPropertyDescriptor(t,s,n){const{get:i,set:r}=gb(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);r.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xl}static _$Ei(){if(this.hasOwnProperty(Vn("elementProperties")))return;const t=vb(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Vn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vn("properties"))){const s=this.properties,n=[...mb(s),...bb(s)];for(const i of n)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[n,i]of s)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[s,n]of this.elementProperties){const i=this._$Eu(s,n);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)s.unshift(Kl(i))}else t!==void 0&&s.push(Kl(t));return s}static _$Eu(t,s){const n=s.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const n of s.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hb(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,n){this._$AK(t,n)}_$EC(t,s){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const r=(n.converter?.toAttribute!==void 0?n.converter:nn).toAttribute(s,n.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,s){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=n.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:nn;this._$Em=i,this[i]=o.fromAttribute(s,r.type),this._$Em=null}}requestUpdate(t,s,n){if(t!==void 0){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??Da)(this[t],s))return;this.P(t,s,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,n){this._$AL.has(t)||this._$AL.set(t,s),n.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,r]of n)r.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],r)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(s)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(s=>this._$EC(s,this[s])),this._$EU()}updated(t){}firstUpdated(t){}}Hs.elementStyles=[],Hs.shadowRootOptions={mode:"open"},Hs[Vn("elementProperties")]=new Map,Hs[Vn("finalized")]=new Map,_b?.({ReactiveElement:Hs}),(Vr.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pe=class extends Hs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oa(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pt}};Pe._$litElement$=!0,Pe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Pe});const wb=globalThis.litElementPolyfillSupport;wb?.({LitElement:Pe});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w_=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xb={attribute:!0,type:String,converter:nn,reflect:!1,hasChanged:Da},kb=(e=xb,t,s)=>{const{kind:n,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(s.name,e),n==="accessor"){const{name:o}=s;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(n==="setter"){const{name:o}=s;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+n)};function m(e){return(t,s)=>typeof s=="object"?kb(e,t,s):((n,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(e){return m({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $d(e){return(t,s)=>{const n=typeof t=="function"?t:t[s];Object.assign(n,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Td=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e,t){return(s,n,i)=>{const r=o=>o.renderRoot?.querySelector(e)??null;return Td(s,n,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x_(e){return(t,s)=>Td(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k_(e,t,s){return e?t(e):s?.(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const La=Symbol.for(""),Sb=e=>{if(e?.r===La)return e?._$litStatic$},S_=e=>({_$litStatic$:e,r:La}),gr=(e,...t)=>({_$litStatic$:t.reduce((s,n,i)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:La}),Ql=new Map,Cb=e=>(t,...s)=>{const n=s.length;let i,r;const o=[],a=[];let l,c=0,u=!1;for(;c<n;){for(l=t[c];c<n&&(r=s[c],(i=Sb(r))!==void 0);)l+=i+t[++c],u=!0;c!==n&&a.push(r),o.push(l),c++}if(c===n&&o.push(t[n]),u){const d=o.join("$$lit$$");(t=Ql.get(d))===void 0&&(o.raw=o,Ql.set(d,t=o)),s=a}return e(t,...s)},Ji=Cb(A);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tc=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},Eb=vn(class extends yn{constructor(e){if(super(e),e.type!==re.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let o=0;for(const a of e)i[o]=n?n(a,o):o,r[o]=s(a,o),o++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=ob(e),{values:r,keys:o}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,f=i.length-1,h=0,g=r.length-1;for(;d<=f&&h<=g;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(a[d]===o[h])l[h]=ms(i[d],r[h]),d++,h++;else if(a[f]===o[g])l[g]=ms(i[f],r[g]),f--,g--;else if(a[d]===o[g])l[g]=ms(i[d],r[g]),Sn(e,l[g+1],i[d]),d++,g--;else if(a[f]===o[h])l[h]=ms(i[f],r[h]),Sn(e,i[d],i[f]),f--,h++;else if(c===void 0&&(c=tc(o,h,g),u=tc(a,d,f)),c.has(a[d]))if(c.has(a[f])){const b=u.get(o[h]),y=b!==void 0?i[b]:null;if(y===null){const _=Sn(e,i[d]);ms(_,r[h]),l[h]=_}else l[h]=ms(y,r[h]),Sn(e,i[d],y),i[b]=null;h++}else ao(i[f]),f--;else ao(i[d]),d++;for(;h<=g;){const b=Sn(e,l[g+1]);ms(b,r[h]),l[h++]=b}for(;d<=f;){const b=i[d++];b!==null&&ao(b)}return this.ut=o,Ed(e,l),Pt}});class Od extends Pe{static finalizeStyles(t){const s=super.finalizeStyles(t);return s.forEach(n=>{if(n instanceof pr&&typeof document<"u"){const i=document.head,r=document.createElement("style");r.textContent=n.cssText,i.append(r)}}),s}getConnectedCount(){var t,s;const n=this.constructor;return(s=(t=n.connectedCount.get(n))==null?void 0:t.get(this.getRootNode()))!=null?s:0}setConnectedCount(t){var s;const n=this.constructor;n.connectedCount.has(n)||n.connectedCount.set(n,new WeakMap),(s=n.connectedCount.get(n))==null||s.set(this.getRootNode(),t)}connectedCallback(){var t;super.connectedCallback();const s=this.getRootNode(),n=this.constructor,i=s instanceof ShadowRoot,r=this.getConnectedCount();if(r===0&&i){const o=n.elementStyles,a=[];o.forEach(l=>{if(l instanceof pr&&typeof document<"u"){const c=document.createElement("style");c.textContent=l.cssText,s.prepend(c),a.push(c)}}),n.onDisconnectedMap.has(n)||n.onDisconnectedMap.set(n,new WeakMap),(t=n.onDisconnectedMap.get(n))==null||t.set(s,()=>{a.forEach(l=>l.remove())})}this.setConnectedCount(r+1)}createRenderRoot(){return this}disconnectedCallback(){var t,s;const n=this.getRootNode();super.disconnectedCallback();const i=this.constructor;let r=this.getConnectedCount();r--,this.setConnectedCount(r),r===0&&((s=(t=i.onDisconnectedMap.get(i))==null?void 0:t.get(n))==null||s())}}Od.connectedCount=new WeakMap;Od.onDisconnectedMap=new WeakMap;var ec,sc,nc,ic,rc,oc;const mr=(sc=(ec=globalThis.navigator)==null?void 0:ec.userAgent)!=null?sc:"",Ma=(nc=globalThis.navigator)==null?void 0:nc.platform,Ab=typeof window<"u"&&typeof document<"u",Rd=/Apple Computer/.test((ic=globalThis.navigator)==null?void 0:ic.vendor),C_=Ab&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1,$b=/Android \d/.test(mr),Tb=Rd&&(/Mobile\/\w+/.test(mr)||((rc=globalThis.navigator)==null?void 0:rc.maxTouchPoints)>2),E_=/Mac/i.test(Ma),Ob=/iPad/i.test(Ma)||/iPad/i.test(mr)||/Macintosh/i.test(mr)&&((oc=globalThis.navigator)==null?void 0:oc.maxTouchPoints)>2,A_=/Win/.test(Ma),$_=Tb||Ob||$b;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Id="important",Rb=" !"+Id,It=vn(class extends yn{constructor(e){if(super(e),e.type!==re.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const n=e[s];return n==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const r=typeof i=="string"&&i.endsWith(Rb);n.includes("-")||r?s.setProperty(n,r?i.slice(0,-11):i,r?Id:""):s[n]=i}}return Pt}}),Ci=Rd?"‌":"​",T_="‌",br="data-v-root";function Ho(e,t){return e===t||(e&&t?Ib(e,t):!1)}function Ib(e,t){return e.index===t.index&&e.length===t.length}function Dd(e,t){return e.index<=t.index+t.length&&e.index+e.length>=t.index}function Db(e,t){if(!Dd(e,t))return null;const s=Math.max(e.index,t.index),n=Math.min(e.index+e.length,t.index+t.length)-s;return{index:s,length:n}}var Lb=Object.create,Ld=Object.defineProperty,Mb=Object.getOwnPropertyDescriptor,Md=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ei=e=>{throw TypeError(e)},Pb=(e,t,s)=>t in e?Ld(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Nb=e=>{var t;return[,,,Lb((t=e?.[Md("metadata")])!=null?t:null)]},Pd=["class","method","getter","setter","accessor","field","value","get","set"],Dn=e=>e!==void 0&&typeof e!="function"?Ei("Function expected"):e,zb=(e,t,s,n,i)=>({kind:Pd[e],name:t,metadata:n,addInitializer:r=>s._?Ei("Already initialized"):i.push(Dn(r||null))}),Vb=(e,t)=>Pb(t,Md("metadata"),e[3]),ye=(e,t,s,n)=>{for(var i=0,r=e[t>>1],o=r&&r.length;i<o;i++)t&1?r[i].call(s):n=r[i].call(s,n);return n},Ai=(e,t,s,n,i,r)=>{for(var o,a,l,c,u,d=t&7,f=!1,h=!1,g=e.length+1,b=Pd[d+5],y=e[g-1]=[],_=e[g]||(e[g]=[]),k=(i=i.prototype,Mb({get[s](){return Bb(this,r)},set[s](C){return Fb(this,r,C)}},s)),E=n.length-1;E>=0;E--)c=zb(d,s,l={},e[3],_),c.static=f,c.private=h,u=c.access={has:C=>s in C},u.get=C=>C[s],u.set=(C,D)=>C[s]=D,a=(0,n[E])({get:k.get,set:k.set},c),l._=1,a===void 0?Dn(a)&&(k[b]=a):typeof a!="object"||a===null?Ei("Object expected"):(Dn(o=a.get)&&(k.get=o),Dn(o=a.set)&&(k.set=o),Dn(o=a.init)&&y.unshift(o));return k&&Ld(i,s,k),i},Nd=(e,t,s)=>t.has(e)||Ei("Cannot "+s),Bb=(e,t,s)=>(Nd(e,t,"read from private field"),t.get(e)),Cn=(e,t,s)=>t.has(e)?Ei("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Fb=(e,t,s,n)=>(Nd(e,t,"write to private field"),t.set(e,s),s),zd,Vd,Bd,Fd,Ud,jo,ft,Pa,Na,za,Va,Ba;class Ae extends(jo=Wm(Pe),Ud=[m({type:Object})],Fd=[m({attribute:!1})],Bd=[m({attribute:!1})],Vd=[m({attribute:!1})],zd=[m({attribute:!1})],jo){constructor(){super(...arguments),this.disposables=new vd,this.selected=Qu(!1),Cn(this,Pa,ye(ft,8,this,{insert:Ci})),ye(ft,11,this),Cn(this,Na,ye(ft,12,this)),ye(ft,15,this),Cn(this,za,ye(ft,16,this)),ye(ft,19,this),Cn(this,Va,ye(ft,20,this)),ye(ft,23,this),Cn(this,Ba,ye(ft,24,this)),ye(ft,27,this)}connectedCallback(){super.connectedCallback(),this.disposables.add(Mr(()=>{const t=this.inlineEditor.inlineRange$.value;this.selected.value=!!t&&Dd(t,{index:this.startOffset,length:this.endOffset-this.startOffset})}))}createRenderRoot(){return this}async getUpdateComplete(){const t=await super.getUpdateComplete();await this.querySelector('[data-v-element="true"]').firstElementChild.updateComplete;const i=Array.from(this.querySelectorAll("v-text"));return await Promise.all(i.map(r=>r.updateComplete)),t}render(){const t=this.inlineEditor,s=t.attributeService.attributeRenderer,n={delta:this.delta,selected:this.selected.value,startOffset:this.startOffset,endOffset:this.endOffset,lineIndex:this.lineIndex,editor:t};if(t.isEmbed(this.delta)){if(this.delta.insert.length!==1)throw new it(pt.InlineEditorError,`The length of embed node should only be 1.
          This seems to be an internal issue with inline editor.
          Please go to https://github.com/toeverything/blocksuite/issues
          to report it.`);return A`<span
        data-v-embed="true"
        data-v-element="true"
        contenteditable="false"
        style=${It({userSelect:"none"})}
        >${s(n)}</span
      >`}return A`<span data-v-element="true"
      >${s(n)}</span
    >`}}ft=Nb(jo);Pa=new WeakMap;Na=new WeakMap;za=new WeakMap;Va=new WeakMap;Ba=new WeakMap;Ai(ft,4,"delta",Ud,Ae,Pa);Ai(ft,4,"endOffset",Fd,Ae,Na);Ai(ft,4,"inlineEditor",Bd,Ae,za);Ai(ft,4,"lineIndex",Vd,Ae,Va);Ai(ft,4,"startOffset",zd,Ae,Ba);Vb(ft,Ae);const Ni=A`<span
  data-v-embed-gap="true"
  style=${It({userSelect:"text",padding:"0 0.5px",outline:"none"})}
  ><v-text></v-text
></span>`;var Ub=Object.create,Hd=Object.defineProperty,Hb=Object.getOwnPropertyDescriptor,jd=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),$i=e=>{throw TypeError(e)},jb=(e,t,s)=>t in e?Hd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Zb=e=>{var t;return[,,,Ub((t=e?.[jd("metadata")])!=null?t:null)]},Zd=["class","method","getter","setter","accessor","field","value","get","set"],Ln=e=>e!==void 0&&typeof e!="function"?$i("Function expected"):e,Wb=(e,t,s,n,i)=>({kind:Zd[e],name:t,metadata:n,addInitializer:r=>s._?$i("Already initialized"):i.push(Ln(r||null))}),qb=(e,t)=>jb(t,jd("metadata"),e[3]),qe=(e,t,s,n)=>{for(var i=0,r=e[t>>1],o=r&&r.length;i<o;i++)t&1?r[i].call(s):n=r[i].call(s,n);return n},Br=(e,t,s,n,i,r)=>{for(var o,a,l,c,u,d=t&7,f=!1,h=!1,g=e.length+1,b=Zd[d+5],y=e[g-1]=[],_=e[g]||(e[g]=[]),k=(i=i.prototype,Hb({get[s](){return Yb(this,r)},set[s](C){return Gb(this,r,C)}},s)),E=n.length-1;E>=0;E--)c=Wb(d,s,l={},e[3],_),c.static=f,c.private=h,u=c.access={has:C=>s in C},u.get=C=>C[s],u.set=(C,D)=>C[s]=D,a=(0,n[E])({get:k.get,set:k.set},c),l._=1,a===void 0?Ln(a)&&(k[b]=a):typeof a!="object"||a===null?$i("Object expected"):(Ln(o=a.get)&&(k.get=o),Ln(o=a.set)&&(k.set=o),Ln(o=a.init)&&y.unshift(o));return k&&Hd(i,s,k),i},Wd=(e,t,s)=>t.has(e)||$i("Cannot "+s),Yb=(e,t,s)=>(Wd(e,t,"read from private field"),t.get(e)),zi=(e,t,s)=>t.has(e)?$i("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Gb=(e,t,s,n)=>(Wd(e,t,"write to private field"),t.set(e,s),s),qd,Yd,Gd,Kd,Zo,Dt,Fa,Ua,Ha,ja;class cs extends(Zo=Pe,Kd=[m({attribute:!1})],Gd=[m({attribute:!1})],Yd=[m({attribute:!1})],qd=[m({attribute:!1})],Zo){constructor(){super(...arguments),zi(this,Fa,qe(Dt,8,this,[])),qe(Dt,11,this),zi(this,Ua,qe(Dt,12,this)),qe(Dt,15,this),zi(this,Ha,qe(Dt,16,this)),qe(Dt,19,this),zi(this,ja,qe(Dt,20,this)),qe(Dt,23,this)}get inlineEditor(){const t=this.closest(`[${br}]`);if(!t)throw new it(it.ErrorCode.ValueNotExists,"v-line must be inside a v-root");const s=t.inlineEditor;if(!s)throw new it(it.ErrorCode.ValueNotExists,"v-line must be inside a v-root with inline-editor");return s}get vElements(){return Array.from(this.querySelectorAll("v-element"))}get vTextContent(){return this.vElements.reduce((t,s)=>t+s.delta.insert,"")}get vTextLength(){return this.vElements.reduce((t,s)=>t+s.delta.insert.length,0)}get vTexts(){return Array.from(this.querySelectorAll("v-text"))}createRenderRoot(){return this}firstUpdated(){this.style.display="block",this.addEventListener("mousedown",t=>{if(t.detail>=2&&this.startOffset===this.endOffset){t.preventDefault();return}t.detail>=3&&(t.preventDefault(),this.inlineEditor.setInlineRange({index:this.startOffset,length:this.endOffset-this.startOffset}))})}async getUpdateComplete(){const t=await super.getUpdateComplete();return await Promise.all(this.vElements.map(s=>s.updateComplete)),t}render(){if(this.isConnected)return this.inlineEditor.vLineRenderer?this.inlineEditor.vLineRenderer(this):this.renderVElements()}renderVElements(){if(this.elements.length===0)return A`<div><v-text .str=${Ci}></v-text></div>`;const t=this.inlineEditor,s=this.elements.flatMap(([n,i],r)=>{var o,a;if(t.isEmbed(i)){if(i.insert.length!==1)throw new it(pt.InlineEditorError,`The length of embed node should only be 1.
            This seems to be an internal issue with inline editor.
            Please go to https://github.com/toeverything/blocksuite/issues
            to report it.`);if(r===0){const l=(o=this.elements[r+1])==null?void 0:o[1];return!l||t.isEmbed(l)?[Ni,n,Ni]:[Ni,n]}else{const l=(a=this.elements[r+1])==null?void 0:a[1];return!l||t.isEmbed(l)?[n,Ni]:[n]}}return n});return A`<div style=${It({padding:"0 0.5px",display:"inline-block"})}>${s}</div>`}}Dt=Zb(Zo);Fa=new WeakMap;Ua=new WeakMap;Ha=new WeakMap;ja=new WeakMap;Br(Dt,4,"elements",Kd,cs,Fa);Br(Dt,4,"endOffset",Gd,cs,Ua);Br(Dt,4,"index",Yd,cs,Ha);Br(Dt,4,"startOffset",qd,cs,ja);qb(Dt,cs);var Kb=Object.create,Jd=Object.defineProperty,Jb=Object.getOwnPropertyDescriptor,Xd=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ti=e=>{throw TypeError(e)},Xb=(e,t,s)=>t in e?Jd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Qb=e=>{var t;return[,,,Kb((t=e?.[Xd("metadata")])!=null?t:null)]},Qd=["class","method","getter","setter","accessor","field","value","get","set"],Mn=e=>e!==void 0&&typeof e!="function"?Ti("Function expected"):e,tv=(e,t,s,n,i)=>({kind:Qd[e],name:t,metadata:n,addInitializer:r=>s._?Ti("Already initialized"):i.push(Mn(r||null))}),ev=(e,t)=>Xb(t,Xd("metadata"),e[3]),ac=(e,t,s,n)=>{for(var i=0,r=e[t>>1],o=r&&r.length;i<o;i++)t&1?r[i].call(s):n=r[i].call(s,n);return n},sv=(e,t,s,n,i,r)=>{for(var o,a,l,c,u,d=t&7,f=!1,h=!1,g=e.length+1,b=Qd[d+5],y=e[g-1]=[],_=e[g]||(e[g]=[]),k=(i=i.prototype,Jb({get[s](){return nv(this,r)},set[s](C){return rv(this,r,C)}},s)),E=n.length-1;E>=0;E--)c=tv(d,s,l={},e[3],_),c.static=f,c.private=h,u=c.access={has:C=>s in C},u.get=C=>C[s],u.set=(C,D)=>C[s]=D,a=(0,n[E])({get:k.get,set:k.set},c),l._=1,a===void 0?Mn(a)&&(k[b]=a):typeof a!="object"||a===null?Ti("Object expected"):(Mn(o=a.get)&&(k.get=o),Mn(o=a.set)&&(k.set=o),Mn(o=a.init)&&y.unshift(o));return k&&Jd(i,s,k),i},th=(e,t,s)=>t.has(e)||Ti("Cannot "+s),nv=(e,t,s)=>(th(e,t,"read from private field"),t.get(e)),iv=(e,t,s)=>t.has(e)?Ti("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),rv=(e,t,s,n)=>(th(e,t,"write to private field"),t.set(e,s),s),eh,Wo,gi,Za;class Wa extends(Wo=Pe,eh=[m({attribute:!1})],Wo){constructor(){super(...arguments),iv(this,Za,ac(gi,8,this,Ci)),ac(gi,11,this)}createRenderRoot(){return this}render(){return A`<span
      style=${It({"word-break":"break-word","text-wrap":"wrap","white-space-collapse":"break-spaces"})}
      data-v-text="true"
      >${this.str}</span
    >`}}gi=Qb(Wo);Za=new WeakMap;sv(gi,4,"str",eh,Wa,Za);ev(gi,Wa);class ov{constructor(t,s={}){this.editor=t,this.hooks=s}}function av(e){let t="";e.underline&&(t+="underline"),e.strike&&(t+=" line-through");let s={};return e.code&&(s={"font-family":'"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',"line-height":"normal",background:"rgba(135,131,120,0.15)",color:"#EB5757","border-radius":"3px","font-size":"85%",padding:"0.2em 0.4em"}),It({"font-weight":e.bold?"bold":"normal","font-style":e.italic?"italic":"normal","text-decoration":t.length>0?t:"none",...s})}const lv=()=>({delta:e})=>{const t=e.attributes?av(e.attributes):It({});return A`<span style=${t}
      ><v-text .str=${e.insert}></v-text
    ></span>`},cv=ps.object({bold:ps.literal(!0).optional().nullable().catch(void 0),italic:ps.literal(!0).optional().nullable().catch(void 0),underline:ps.literal(!0).optional().nullable().catch(void 0),strike:ps.literal(!0).optional().nullable().catch(void 0),code:ps.literal(!0).optional().nullable().catch(void 0),link:ps.string().optional().nullable().catch(void 0)});function uv(e){const t=[];let s=e.insert;for(;s.length>0;){const n=s.indexOf(`
`);if(n===-1){t.push({insert:s,attributes:e.attributes});break}s.slice(0,n).length>0&&t.push({insert:s.slice(0,n),attributes:e.attributes}),t.push(`
`),s=s.slice(n+1)}return t}function dv(e){if(e.length===0)return[[]];const t=e.flatMap(uv);function*s(n){let i=0;for(let r=0;r<n.length;r++)if(n[r]===`
`){const o=n.slice(i,r);i=r+1,yield o}else r===n.length-1&&(yield n.slice(i));n.at(-1)===`
`&&(yield[])}return Array.from(s(t))}function vr(e){var t;return e instanceof Element?e instanceof Ae?e.querySelector('[data-v-embed="true"]')!==null:!!e.closest('[data-v-embed="true"]'):!!((t=e.parentElement)==null?void 0:t.closest('[data-v-embed="true"]'))}function sh(e){const t=e instanceof Element?e:e.parentElement;return t?!!t.closest('[data-v-embed-gap="true"]'):!1}function hv(e,t){const s=[];for(const n of t)if(e.isEmbed(n)){const i=[...n.insert].map(r=>({insert:r,attributes:n.attributes}));s.push(...i)}else s.push(n);return s}function fv(e){var t;return e instanceof Text&&((t=e.parentElement)==null?void 0:t.dataset.vText)==="true"}function pv(e){return e instanceof HTMLElement&&(e.dataset.vElement==="true"||e instanceof Ae)}function gv(e){return e instanceof HTMLElement&&(e instanceof cs||e.parentElement instanceof cs)}function mv(e){const t=e instanceof Element?e:e.parentElement,s=t?.closest("v-line");return!!s&&s.vTextLength===0}function bv(e){return e instanceof HTMLElement&&e.dataset.vRoot==="true"}function mi(e){return e.wholeText===Ci?0:e.wholeText.length}function Ne(e){return Array.from(e.querySelectorAll('[data-v-text="true"]')).flatMap(n=>{const i=Array.from(n.childNodes).find(r=>r instanceof Text);return i||[]})}function qo(e,t){var s;if(fv(e))return[e,t];if(pv(e)){const i=Ne(e),r=(s=i[0].parentElement)==null?void 0:s.closest('[data-v-element="true"]');if(i.length===1&&r instanceof HTMLElement&&r.dataset.vEmbed==="true")return[i[0],0];if(i.length>0)return i[t]?[i[t],0]:null}if(gv(e)||bv(e))return Yo(e,t,!0);if(!(e instanceof Node))return null;const n=vv(e);return n?yv(n,e,t):null}function rn(e,t,s){if(s.dataset.vRoot!=="true")throw new it(pt.InlineEditorError,"textRangeToDomPoint should be called with editor root element");if(!s.contains(e))return null;const n=Ne(s);if(n.length===0)return null;const i=n.indexOf(e);let r=0;for(const c of n.slice(0,i))r+=mi(c);e.wholeText!==Ci&&(r+=t);const o=e.parentElement;if(!o)throw new it(pt.InlineEditorError,"text element parent not found");const a=o.closest("v-line");if(!a)throw new it(pt.InlineEditorError,"line element not found");const l=Array.from(s.querySelectorAll("v-line")).indexOf(a);return{text:e,index:r+l}}function vv(e){var t,s;const n=(t=e.parentElement)==null?void 0:t.closest("v-line");if(n)return Array.from(n.querySelectorAll("v-element"));const i=e instanceof Element?e.closest(`[${br}]`):(s=e.parentElement)==null?void 0:s.closest(`[${br}]`);return i?Array.from(i.querySelectorAll("v-line")):null}function yv(e,t,s){const n=e[0];for(let i=0;i<e.length;i++){const r=e[i];if(i===0&&cc(t,r))return Yo(n,s,!0);if(_v(t,r))return Yo(n,s,!1);if(i===e.length-1&&uc(t,r)||i<e.length-1&&uc(t,r)&&cc(t,e[i+1]))return lc(r)}return null}function lc(e){const t=Ne(e);if(t.length===0)return null;const s=t[t.length-1];return[s,mi(s)]}function Yo(e,t,s){const n=Ne(e);if(n.length===0)return null;const i=s?n[0]:n[n.length-1];return[i,t===0?t:i.length]}function _v(e,t){return t.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_CONTAINED_BY||t.compareDocumentPosition(e)===(Node.DOCUMENT_POSITION_CONTAINED_BY|Node.DOCUMENT_POSITION_FOLLOWING)}function cc(e,t){return e.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_FOLLOWING}function uc(e,t){return e.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_PRECEDING}const wv=({rootElement:e,startText:t,endText:s})=>e.contains(t)&&e.contains(s),xv=({rootElement:e,startText:t,endText:s,startTextOffset:n,endTextOffset:i})=>{const r=rn(t,n,e),o=rn(s,i,e);return!r||!o?null:{index:Math.min(r.index,o.index),length:Math.abs(r.index-o.index)}},kv=({rootElement:e,startText:t,endText:s})=>!e.contains(t)&&e.contains(s),Sv=({rootElement:e,endText:t,endTextOffset:s})=>{const n=rn(t,s,e);return n?{index:0,length:n.index}:null},Cv=({rootElement:e,startText:t,endText:s})=>e.contains(t)&&!e.contains(s),Ev=({yText:e,rootElement:t,startText:s,startTextOffset:n})=>{const i=rn(s,n,t);return i?{index:i.index,length:e.length-i.index}:null},Av=({rootElement:e,startText:t,endText:s,range:n})=>!e.contains(t)&&!e.contains(s)&&n.intersectsNode(e),$v=({yText:e})=>({index:0,length:e.length}),Tv=(e,t,s)=>{const{startContainer:n,startOffset:i,endContainer:r,endOffset:o}=e,a=qo(n,i),l=qo(r,o);if(!a||!l)return null;const[c,u]=a,[d,f]=l;return{rootElement:t,range:e,yText:s,startNode:n,startOffset:i,endNode:r,endOffset:o,startText:c,startTextOffset:u,endText:d,endTextOffset:f}};function Ov(e,t,s){const n=Tv(e,t,s);if(!n)return null;if(n.startNode&&n.startNode===n.endNode&&vr(n.startNode)){const i=rn(n.startText,n.startTextOffset,t);if(i)return{index:i.index,length:1}}return wv(n)?xv(n):kv(n)?Sv(n):Cv(n)?Ev(n):Av(n)?$v(n):null}function Rv(e,t){var s,n;const i=Array.from(e.querySelectorAll("v-line"));let r=null,o=null,a=0,l=0,c=0;for(let d=0;d<i.length&&!(r&&o);d++){const f=Ne(i[d]);if(f.length===0)return null;for(const h of f){const g=mi(h);if(!r&&c+g>=t.index&&(r=h,a=t.index-c),!o&&c+g>=t.index+t.length&&(o=h,l=t.index+t.length-c),r&&o)break;c+=g}c+=1}if(!r||!o)return null;if(vr(r)){const d=(s=r.parentElement)==null?void 0:s.closest("v-element");if(!d)throw new it(pt.InlineEditorError,"failed to find vElement for a text note in an embed element");const f=d.nextElementSibling;if(!f)throw new it(pt.InlineEditorError,"failed to find nextSibling sibling of an embed element");const h=Ne(f);if(h.length===0)throw new it(pt.InlineEditorError,"text node in v-text not found");f instanceof Ae?(r=h[h.length-1],a=mi(r)):(r=h[0],a=0)}if(vr(o)){const d=(n=o.parentElement)==null?void 0:n.closest("v-element");if(!d)throw new it(pt.InlineEditorError,"failed to find vElement for a text note in an embed element");const f=d.nextElementSibling;if(!f)throw new it(pt.InlineEditorError,"failed to find nextSibling sibling of an embed element");const h=Ne(f);if(h.length===0)throw new it(pt.InlineEditorError,"text node in v-text not found");o=h[0],l=0}const u=document.createRange();return u.setStart(r,a),u.setEnd(o,l),u}function Iv(e,t,s,n){t&&(s.insertText(e,t,n),s.setInlineRange({index:e.index+t.length,length:0}))}function Dv(e,t,s,n){s.getDeltasByInlineRange(e).forEach(i=>{n={...i[0].attributes,...n}}),t&&(s.insertText(e,t,n),s.setInlineRange({index:e.index+t.length,length:0}))}function Lv(e,t){t.insertLineBreak(e),t.setInlineRange({index:e.index+1,length:0})}function Mv(e,t){t.deleteText(e),t.setInlineRange({index:e.index,length:0})}function Pv(e,t,s,n,i){if(i.isValidInlineRange(n))if(e==="insertText")Iv(n,t,i,s);else if(e==="insertParagraph"||e==="insertLineBreak")Lv(n,i);else if(e.startsWith("delete"))Mv(n,i);else if(e==="insertReplacementText")Dv(n,t,i,s);else return}class Nv{constructor(t){this.editor=t,this._attributeRenderer=lv(),this._attributeSchema=cv,this._marks=null,this.getFormat=(s,n=!1)=>{const r=this.editor.deltaService.getDeltasByInlineRange(s).filter(([a,l])=>{const c=l.index,u=l.index+l.length,d=s.index,f=s.index+s.length;return d===f?c<d&&d<=u:u>d&&c<=f}).map(([a])=>a.attributes);return n?r.reduce((a,l)=>({...a,...l}),{}):!r.length||r.some(a=>!a)?{}:r.reduce((a,l)=>{const c={};for(const u in a){const d=u;a[d]===l[d]&&(c[d]=a[d])}return c})},this.normalizeAttributes=s=>{if(!s)return;const n=this._attributeSchema.safeParse(s);if(!n.success){console.error(n.error);return}return Object.fromEntries(Object.entries(n.data).filter(([i,r])=>r!==void 0))},this.resetMarks=()=>{this._marks=null},this.setAttributeRenderer=s=>{this._attributeRenderer=s},this.setAttributeSchema=s=>{this._attributeSchema=s},this.setMarks=s=>{this._marks=s}}get attributeRenderer(){return this._attributeRenderer}get marks(){return this._marks}}class zv{constructor(t){this.editor=t,this.getDeltaByRangeIndex=s=>{const n=this.editor.embedDeltas;let i=0;for(const r of n){if(i+r.insert.length>=s)return r;i+=r.insert.length}return null},this.getDeltasByInlineRange=s=>this.mapDeltasInInlineRange(s,(n,i)=>[n,{index:i,length:n.insert.length}]),this.mapDeltasInInlineRange=(s,n)=>{const i=this.editor.embedDeltas,r=[];return i.reduce((o,a,l)=>{const c=a.insert.length,u=s.index-c,d=s.index+s.length;if(o>=u&&(o<d||s.length===0&&o===s.index)){const h=n(a,o,l);r.push(h)}return o+c},0),r}}get embedDeltas(){return hv(this.editor,this.editor.yTextDeltas)}}class Vv{constructor(t){this.editor=t,this._compositionInlineRange=null,this._isComposing=!1,this._isRangeCompletelyInRoot=s=>{if(s.commonAncestorContainer.ownerDocument!==document)return!1;const n=this.editor.rootElement;if(!n)return!1;const i=document.createRange();return i.selectNode(n),s.startContainer.compareDocumentPosition(s.endContainer)&Node.DOCUMENT_POSITION_FOLLOWING?i.comparePoint(s.startContainer,s.startOffset)>=0&&i.comparePoint(s.endContainer,s.endOffset)<=0:i.comparePoint(s.endContainer,s.startOffset)>=0&&i.comparePoint(s.startContainer,s.endOffset)<=0},this._onBeforeInput=s=>{var n,i,r,o,a;const l=this.editor.rangeService.getNativeRange();if(this.editor.isReadonly||this._isComposing||!l||!this._isRangeCompletelyInRoot(l))return;let c=this.editor.toInlineRange(l);if(!c)return;let u=!0;if(s.inputType.startsWith("delete")&&(sh(l.commonAncestorContainer)&&c.length===0&&c.index>0?(c={index:c.index-1,length:1},u=!1):mv(l.commonAncestorContainer)&&c.length===0&&c.index>0&&(c={index:c.index-1,length:1},u=!1)),u){const f=s.getTargetRanges();if(f.length>0){const h=f[0],g=document.createRange();g.setStart(h.startContainer,h.startOffset),g.setEnd(h.endContainer,h.endOffset);const b=this.editor.toInlineRange(g);Ho(c,b)||(c=b)}}if(!c)return;s.preventDefault();const d={inlineEditor:this.editor,raw:s,inlineRange:c,data:(r=(i=s.data)!=null?i:(n=s.dataTransfer)==null?void 0:n.getData("text/plain"))!=null?r:null,attributes:{}};(a=(o=this.editor.hooks).beforeinput)==null||a.call(o,d),Pv(d.raw.inputType,d.data,d.attributes,d.inlineRange,this.editor),this.editor.slots.inputting.next()},this._onClick=s=>{var n;if(s.target instanceof Node&&vr(s.target)){const i=document.getSelection();if(!i)return;if(s.target instanceof HTMLElement){const r=s.target.closest("v-element");r&&i.selectAllChildren(r)}else{const r=(n=s.target.parentElement)==null?void 0:n.closest("v-element");r&&i.selectAllChildren(r)}}},this._onCompositionEnd=async s=>{var n,i;if(this._isComposing=!1,!this.editor.rootElement||!this.editor.rootElement.isConnected)return;const r=this.editor.rangeService.getNativeRange();if(this.editor.isReadonly||!r||!this._isRangeCompletelyInRoot(r))return;this.editor.rerenderWholeEditor(),await this.editor.waitForUpdate();const o=this._compositionInlineRange;if(!o)return;s.preventDefault();const a={inlineEditor:this.editor,raw:s,inlineRange:o,data:s.data,attributes:{}};(i=(n=this.editor.hooks).compositionEnd)==null||i.call(n,a);const{inlineRange:l,data:c}=a;c&&c.length>0&&(this.editor.insertText(l,c,a.attributes),this.editor.setInlineRange({index:l.index+c.length,length:0})),this.editor.slots.inputting.next()},this._onCompositionStart=()=>{if(this._isComposing=!0,!this.editor.rootElement)return;this.editor.rootElement.querySelectorAll('[data-v-embed="true"]').forEach(i=>{i.removeAttribute("contenteditable")});const n=this.editor.rangeService.getNativeRange();n?this._compositionInlineRange=this.editor.toInlineRange(n):this._compositionInlineRange=null},this._onCompositionUpdate=()=>{if(!this.editor.rootElement||!this.editor.rootElement.isConnected)return;const s=this.editor.rangeService.getNativeRange();this.editor.isReadonly||!s||!this._isRangeCompletelyInRoot(s)||this.editor.slots.inputting.next()},this._onKeyDown=s=>{const n=this.editor.getInlineRange();if(n&&(this.editor.slots.keydown.next(s),!s.shiftKey&&(s.key==="ArrowLeft"||s.key==="ArrowRight"))){if(n.length!==0)return;const i=()=>{s.preventDefault(),s.stopPropagation()},r=this.editor.getDeltasByInlineRange(n);if(r.length===2)s.key==="ArrowLeft"&&this.editor.isEmbed(r[0][0])?(i(),this.editor.setInlineRange({index:n.index-1,length:1})):s.key==="ArrowRight"&&this.editor.isEmbed(r[1][0])&&(i(),this.editor.setInlineRange({index:n.index,length:1}));else if(r.length===1){const o=r[0][0];this.editor.isEmbed(o)&&(s.key==="ArrowLeft"&&n.index-1>=0?(i(),this.editor.setInlineRange({index:n.index-1,length:1})):s.key==="ArrowRight"&&n.index+1<=this.editor.yTextLength&&(i(),this.editor.setInlineRange({index:n.index,length:1})))}}},this._onSelectionChange=()=>{const s=this.editor.rootElement;if(!s)return;const n=this.editor.getInlineRange();if(this._isComposing)return;const i=document.getSelection();if(!i)return;if(i.rangeCount===0){n!==null&&this.editor.setInlineRange(null);return}const r=i.getRangeAt(0);if(!r.intersectsNode(s))if(r.endContainer.contains(s)&&Array.from(r.endContainer.childNodes).filter(l=>l instanceof HTMLElement).length===1&&r.startContainer.contains(s)&&Array.from(r.startContainer.childNodes).filter(l=>l instanceof HTMLElement).length===1){this.editor.focusEnd();return}else{n!==null&&this.editor.setInlineRange(null);return}const o=this.editor.toInlineRange(i.getRangeAt(0));Ho(n,o)||(this.editor.rangeService.lockSyncInlineRange(),this.editor.setInlineRange(o),this.editor.rangeService.unlockSyncInlineRange())},this.mount=()=>{const s=this.editor.eventSource,n=this.editor.rootElement;if(this.editor.inlineRangeProviderOverride||this.editor.disposables.addFromEvent(document,"selectionchange",this._onSelectionChange),!s){console.error("Mount inline editor without event source ready");return}this.editor.disposables.addFromEvent(s,"beforeinput",this._onBeforeInput),this.editor.disposables.addFromEvent(s,"compositionstart",this._onCompositionStart),this.editor.disposables.addFromEvent(s,"compositionupdate",this._onCompositionUpdate),this.editor.disposables.addFromEvent(s,"compositionend",i=>{this._onCompositionEnd(i).catch(console.error)}),this.editor.disposables.addFromEvent(s,"keydown",this._onKeyDown),n&&this.editor.disposables.addFromEvent(n,"click",this._onClick)}}get isComposing(){return this._isComposing}}class Bv{constructor(t){this.editor=t,this._lastEndRelativePosition=null,this._lastStartRelativePosition=null,this.focusEnd=()=>{this.editor.setInlineRange({index:this.editor.yTextLength,length:0})},this.focusIndex=s=>{this.editor.setInlineRange({index:s,length:0})},this.focusStart=()=>{this.editor.setInlineRange({index:0,length:0})},this.getInlineRangeFromElement=s=>{var n,i;const r=document.createRange(),o=s.querySelector("[data-v-text]");if(!o)return null;const a=o.childNodes[1];return a instanceof Text?(r.setStart(a,0),r.setEnd(a,(i=(n=a.textContent)==null?void 0:n.length)!=null?i:0),this.toInlineRange(r)):null},this.getLine=s=>{const n=this.editor.rootElement;if(!n)return null;const i=Array.from(n.querySelectorAll("v-line"));let r=0;for(const[o,a]of i.entries()){if(s>=r&&s<r+a.vTextLength+1)return{line:a,lineIndex:o,rangeIndexRelatedToLine:s-r};r+=a.vTextLength+1}return console.error("failed to find line"),null},this.getNativeRange=()=>{const s=this.getNativeSelection();return s?s.getRangeAt(0):null},this.getNativeSelection=()=>{const s=document.getSelection();return!s||s.rangeCount===0?null:s},this.getTextPoint=s=>{const n=this.editor.rootElement;if(!n)return null;const i=Array.from(n.querySelectorAll("v-line"));let r=0;for(const o of i){const a=Ne(o);if(a.length===0)return null;for(const l of a.filter(c=>!sh(c))){if(!l.textContent)return null;if(r+l.textContent.length>=s)return[l,s-r];r+=mi(l)}r+=1}return null},this.isFirstLine=s=>{if(!s||s.length>0)return!1;const n=this.toDomRange(s);if(!n)return console.error("failed to convert inline range to domRange"),!1;if(this.editor.yTextString.slice(0,s.index).includes(`
`))return!1;const r=n.commonAncestorContainer.parentElement;if(!r)return console.error("failed to get container"),!1;const o=r.getBoundingClientRect(),a=n.getClientRects(),l=a[a.length-1];return Math.abs(l.top-o.top)<1},this.isLastLine=s=>{if(!s||s.length>0||this.editor.yTextString.slice(s.index).includes(`
`))return!1;const i=this.toDomRange(s);if(!i)return console.error("failed to convert inline range to domRange"),!1;const r=i.commonAncestorContainer.parentElement;if(!r)return console.error("failed to get container"),!1;const o=r.getBoundingClientRect(),a=i.getClientRects(),l=a[a.length-1];return Math.abs(l.bottom-o.bottom)<1},this.isValidInlineRange=s=>!(s&&(s.index<0||s.index+s.length>this.editor.yText.length)),this.mount=()=>{const s=this.editor;let n=s.inlineRange$.value;s.disposables.add(Mr(()=>{const i=s.inlineRange$.value;if(!s.mounted||Ho(n,i))return;n=i;const o=s.yText;if(i?(this._lastStartRelativePosition=Co(o,i.index),this._lastEndRelativePosition=Co(o,i.index+i.length)):(this._lastStartRelativePosition=null,this._lastEndRelativePosition=null),!s.inlineRangeProviderOverride)if(this.editor.renderService.rendering){const a=s.slots.renderComplete.subscribe(()=>{a.unsubscribe(),this.syncInlineRange(i)})}else this.syncInlineRange()}))},this.selectAll=()=>{this.editor.setInlineRange({index:0,length:this.editor.yTextLength})},this._syncInlineRangeLock=!1,this.lockSyncInlineRange=()=>{this._syncInlineRangeLock=!0},this.unlockSyncInlineRange=()=>{this._syncInlineRangeLock=!1},this.syncInlineRange=s=>{if(!this.editor.mounted||this._syncInlineRangeLock)return;s=s??this.editor.getInlineRange();const n=()=>{const i=document.getSelection();if(i&&this.editor.rootElement)if(s===null)i.rangeCount>0&&i.getRangeAt(0).intersectsNode(this.editor.rootElement)&&i.removeAllRanges();else try{const r=this.toDomRange(s);if(r)i.removeAllRanges(),i.addRange(r),this.editor.rootElement.focus(),this.editor.slots.inlineRangeSync.next(r);else{const o=this.editor.slots.renderComplete.subscribe(()=>{o.unsubscribe(),this.syncInlineRange(s)})}}catch(r){console.error("failed to apply inline range"),console.error(r)}};if(this.editor.renderService.rendering){const i=this.editor.slots.renderComplete.subscribe(()=>{i.unsubscribe(),n()})}else n()},this.toDomRange=s=>{const n=this.editor.rootElement;return n?Rv(n,s):null},this.toInlineRange=s=>{const{rootElement:n,yText:i}=this.editor;return!n||!i?null:Ov(s,n,i)}}get lastEndRelativePosition(){return this._lastEndRelativePosition}get lastStartRelativePosition(){return this._lastStartRelativePosition}}class Fv{constructor(t){this.editor=t,this._onYTextChange=(s,n)=>{if(this.editor.slots.textChange.next(),this.editor.yText.toString().includes("\r"))throw new it(pt.InlineEditorError,'yText must not contain "\\r" because it will break the range synchronization');if(this.render(),!this.editor.inlineRange$.peek()||n.local)return;const o=this.editor.lastStartRelativePosition,a=this.editor.lastEndRelativePosition;if(!o||!a)return;const l=this.editor.yText.doc;if(!l){console.error("doc is not found when syncing yText");return}const c=Eo(o,l),u=Eo(a,l),d=c?.index,f=u?.index;if(!d||!f)return;const h={index:d,length:f-d};this.editor.isValidInlineRange(h)&&(this.editor.setInlineRange(h),this.editor.syncInlineRange())},this.mount=()=>{const s=this.editor,n=s.yText;n.observe(this._onYTextChange),s.disposables.add({dispose:()=>{n.unobserve(this._onYTextChange)}})},this._rendering=!1,this.render=()=>{if(!this.editor.rootElement)return;this._rendering=!0;const s=this.editor.rootElement,n=this.editor.deltaService.embedDeltas,i=dv(n);let r=0;const o=i.map((a,l)=>{l>0&&(r+=1);const c=r;if(a.length>0){const u=a.map(d=>{const f=r;r+=d.insert.length;const h=r;return[A`<v-element
              .inlineEditor=${this.editor}
              .delta=${{insert:d.insert,attributes:this.editor.attributeService.normalizeAttributes(d.attributes)}}
              .startOffset=${f}
              .endOffset=${h}
              .lineIndex=${l}
            ></v-element>`,d]});return A`<v-line
          .elements=${u}
          .index=${l}
          .startOffset=${c}
          .endOffset=${r}
        ></v-line>`}else return A`<v-line
          .elements=${[]}
          .index=${l}
          .startOffset=${c}
          .endOffset=${r}
        ></v-line>`});try{Oa(Eb(o.map((a,l)=>({line:a,index:l})),a=>a.index,a=>a.line),s)}catch{this.editor.rerenderWholeEditor()}this.editor.waitForUpdate().then(()=>{this._rendering=!1,this.editor.slots.renderComplete.next(),this.editor.syncInlineRange()}).catch(console.error)},this.rerenderWholeEditor=()=>{const s=this.editor.rootElement;!s||!s.isConnected||(s.replaceChildren(),delete s._$litPart$,this.render())},this.waitForUpdate=async()=>{if(!this.editor.rootElement)return;const s=Array.from(this.editor.rootElement.querySelectorAll("v-line"));await Promise.all(s.map(n=>n.updateComplete))}}get rendering(){return this._rendering}}class Uv{constructor(t){this.editor=t,this.deleteText=s=>{this.editor.isReadonly||this.transact(()=>{this.yText.delete(s.index,s.length)})},this.formatText=(s,n,i={})=>{if(this.editor.isReadonly)return;const{match:r=()=>!0,mode:o="merge"}=i;this.editor.deltaService.getDeltasByInlineRange(s).filter(([l,c])=>r(l,c)).forEach(([l,c])=>{const u=this.editor.attributeService.normalizeAttributes(n);if(!u)return;const d=Db(s,c);d&&(o==="replace"&&this.resetText(d),this.transact(()=>{this.yText.format(d.index,d.length,u)}))})},this.insertLineBreak=s=>{this.editor.isReadonly||this.transact(()=>{this.yText.delete(s.index,s.length),this.yText.insert(s.index,`
`)})},this.insertText=(s,n,i={})=>{if(this.editor.isReadonly||!n||!n.length)return;this.editor.attributeService.marks&&(i={...i,...this.editor.attributeService.marks});const r=this.editor.attributeService.normalizeAttributes(i);this.transact(()=>{this.yText.delete(s.index,s.length),this.yText.insert(s.index,n,r)})},this.resetText=s=>{if(this.editor.isReadonly)return;const n=[];for(let r=s.index;r<=s.index+s.length;r++){const o=this.editor.getDeltaByRangeIndex(r);o&&n.push(o)}const i=Object.fromEntries(n.flatMap(r=>r.attributes?Object.keys(r.attributes).map(o=>[o,null]):[]));this.transact(()=>{this.yText.format(s.index,s.length,{...i})})},this.setText=(s,n={})=>{this.editor.isReadonly||this.transact(()=>{this.yText.delete(0,this.yText.length),this.yText.insert(0,s,n)})},this.transact=this.editor.transact}get yText(){return this.editor.yText}}class qa{constructor(t,s={}){if(this.disposables=new vd,this.attributeService=new Nv(this),this.getFormat=this.attributeService.getFormat,this.normalizeAttributes=this.attributeService.normalizeAttributes,this.resetMarks=this.attributeService.resetMarks,this.setAttributeRenderer=this.attributeService.setAttributeRenderer,this.setAttributeSchema=this.attributeService.setAttributeSchema,this.setMarks=this.attributeService.setMarks,this.textService=new Uv(this),this.deleteText=this.textService.deleteText,this.formatText=this.textService.formatText,this.insertLineBreak=this.textService.insertLineBreak,this.insertText=this.textService.insertText,this.resetText=this.textService.resetText,this.setText=this.textService.setText,this.deltaService=new zv(this),this.getDeltaByRangeIndex=this.deltaService.getDeltaByRangeIndex,this.getDeltasByInlineRange=this.deltaService.getDeltasByInlineRange,this.mapDeltasInInlineRange=this.deltaService.mapDeltasInInlineRange,this.rangeService=new Bv(this),this.focusEnd=this.rangeService.focusEnd,this.focusIndex=this.rangeService.focusIndex,this.focusStart=this.rangeService.focusStart,this.getInlineRangeFromElement=this.rangeService.getInlineRangeFromElement,this.isFirstLine=this.rangeService.isFirstLine,this.isLastLine=this.rangeService.isLastLine,this.isValidInlineRange=this.rangeService.isValidInlineRange,this.selectAll=this.rangeService.selectAll,this.syncInlineRange=this.rangeService.syncInlineRange,this.toDomRange=this.rangeService.toDomRange,this.toInlineRange=this.rangeService.toInlineRange,this.getLine=this.rangeService.getLine,this.getNativeRange=this.rangeService.getNativeRange,this.getNativeSelection=this.rangeService.getNativeSelection,this.getTextPoint=this.rangeService.getTextPoint,this.eventService=new Vv(this),this.renderService=new Fv(this),this.waitForUpdate=this.renderService.waitForUpdate,this.rerenderWholeEditor=this.renderService.rerenderWholeEditor,this.render=this.renderService.render,this._eventSource=null,this._isReadonly=!1,this._mounted=!1,this._rootElement=null,this.inlineRangeProvider={inlineRange$:Qu(null),setInlineRange:a=>{this.inlineRange$.value=a}},this.setInlineRange=a=>{this.inlineRangeProvider.setInlineRange(a)},this.getInlineRange=()=>this.inlineRange$.peek(),this.slots={mounted:new Re,unmounted:new Re,renderComplete:new Re,textChange:new Re,inlineRangeSync:new Re,inputting:new Re,keydown:new Re},!t.doc)throw new it(pt.InlineEditorError,"yText must be attached to a Y.Doc");if(t.toString().includes("\r"))throw new it(pt.InlineEditorError,'yText must not contain "\\r" because it will break the range synchronization');const{isEmbed:n=()=>!1,hooks:i={},inlineRangeProvider:r,vLineRenderer:o=null}=s;this._inlineRangeProviderOverride=!1,this.yText=t,this.isEmbed=n,this.vLineRenderer=o,this.hooksService=new ov(this,i),r&&(this.inlineRangeProvider=r,this._inlineRangeProviderOverride=!0)}get marks(){return this.attributeService.marks}get embedDeltas(){return this.deltaService.embedDeltas}get lastStartRelativePosition(){return this.rangeService.lastStartRelativePosition}get lastEndRelativePosition(){return this.rangeService.lastEndRelativePosition}get isComposing(){return this.eventService.isComposing}get rendering(){return this.renderService.rendering}get hooks(){return this.hooksService.hooks}get eventSource(){return this._eventSource}get isReadonly(){return this._isReadonly}get mounted(){return this._mounted}get rootElement(){return this._rootElement}get inlineRangeProviderOverride(){return this._inlineRangeProviderOverride}get inlineRange$(){return this.inlineRangeProvider.inlineRange$}get yTextDeltas(){return this.yText.toDelta()}get yTextLength(){return this.yText.length}get yTextString(){return this.yText.toString()}mount(t,s=t,n=!1){const i=t;i.inlineEditor=this,this._rootElement=i,this._eventSource=s,this._eventSource.style.outline="none",this._rootElement.dataset.vRoot="true",this.setReadonly(n),this._rootElement.replaceChildren(),delete this.rootElement._$litPart$,this.eventService.mount(),this.rangeService.mount(),this.renderService.mount(),this._mounted=!0,this.slots.mounted.next(),this.render()}unmount(){this.rootElement&&(this.rootElement.isConnected&&Oa(G,this.rootElement),this.rootElement.removeAttribute(br)),this._rootElement=null,this._mounted=!1,this.disposables.dispose(),this.slots.unmounted.next()}setReadonly(t){const s=t?"false":"true";this.rootElement&&this.rootElement.contentEditable!==s&&(this.rootElement.contentEditable=s),this.eventSource&&this.eventSource.contentEditable!==s&&(this.eventSource.contentEditable=s),this._isReadonly=t}transact(t){const s=this.yText.doc;if(!s)throw new it(pt.InlineEditorError,"yText is not attached to a doc");s.transact(t,s.clientID)}}qa.getTextNodesFromElement=Ne;qa.nativePointToTextPoint=qo;qa.textPointToDomPoint=rn;const nh=["top","right","bottom","left"],dc=["start","end"],hc=nh.reduce((e,t)=>e.concat(t,t+"-"+dc[0],t+"-"+dc[1]),[]),de=Math.min,_t=Math.max,yr=Math.round,Vi=Math.floor,xe=e=>({x:e,y:e}),Hv={left:"right",right:"left",bottom:"top",top:"bottom"},jv={start:"end",end:"start"};function Go(e,t,s){return _t(e,de(t,s))}function he(e,t){return typeof e=="function"?e(t):e}function Wt(e){return e.split("-")[0]}function le(e){return e.split("-")[1]}function Ya(e){return e==="x"?"y":"x"}function Ga(e){return e==="y"?"height":"width"}function Ue(e){return["top","bottom"].includes(Wt(e))?"y":"x"}function Ka(e){return Ya(Ue(e))}function ih(e,t,s){s===void 0&&(s=!1);const n=le(e),i=Ka(e),r=Ga(i);let o=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=wr(o)),[o,wr(o)]}function Zv(e){const t=wr(e);return[_r(e),t,_r(t)]}function _r(e){return e.replace(/start|end/g,t=>jv[t])}function Wv(e,t,s){const n=["left","right"],i=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return s?t?i:n:t?n:i;case"left":case"right":return t?r:o;default:return[]}}function qv(e,t,s,n){const i=le(e);let r=Wv(Wt(e),s==="start",n);return i&&(r=r.map(o=>o+"-"+i),t&&(r=r.concat(r.map(_r)))),r}function wr(e){return e.replace(/left|right|bottom|top/g,t=>Hv[t])}function Yv(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ja(e){return typeof e!="number"?Yv(e):{top:e,right:e,bottom:e,left:e}}function on(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function fc(e,t,s){let{reference:n,floating:i}=e;const r=Ue(t),o=Ka(t),a=Ga(o),l=Wt(t),c=r==="y",u=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,f=n[a]/2-i[a]/2;let h;switch(l){case"top":h={x:u,y:n.y-i.height};break;case"bottom":h={x:u,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:d};break;case"left":h={x:n.x-i.width,y:d};break;default:h={x:n.x,y:n.y}}switch(le(t)){case"start":h[o]-=f*(s&&c?-1:1);break;case"end":h[o]+=f*(s&&c?-1:1);break}return h}const Gv=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:o}=s,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=fc(c,n,l),f=n,h={},g=0;for(let b=0;b<a.length;b++){const{name:y,fn:_}=a[b],{x:k,y:E,data:C,reset:D}=await _({x:u,y:d,initialPlacement:n,placement:f,strategy:i,middlewareData:h,rects:c,platform:o,elements:{reference:e,floating:t}});u=k??u,d=E??d,h={...h,[y]:{...h[y],...C}},D&&g<=50&&(g++,typeof D=="object"&&(D.placement&&(f=D.placement),D.rects&&(c=D.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):D.rects),{x:u,y:d}=fc(c,f,l)),b=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:h}};async function an(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=he(t,e),g=Ja(h),y=a[f?d==="floating"?"reference":"floating":d],_=on(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(y)))==null||s?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),k=d==="floating"?{x:n,y:i,width:o.floating.width,height:o.floating.height}:o.reference,E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),C=await(r.isElement==null?void 0:r.isElement(E))?await(r.getScale==null?void 0:r.getScale(E))||{x:1,y:1}:{x:1,y:1},D=on(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:k,offsetParent:E,strategy:l}):k);return{top:(_.top-D.top+g.top)/C.y,bottom:(D.bottom-_.bottom+g.bottom)/C.y,left:(_.left-D.left+g.left)/C.x,right:(D.right-_.right+g.right)/C.x}}const Kv=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:n,placement:i,rects:r,platform:o,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=he(e,t)||{};if(c==null)return{};const d=Ja(u),f={x:s,y:n},h=Ka(i),g=Ga(h),b=await o.getDimensions(c),y=h==="y",_=y?"top":"left",k=y?"bottom":"right",E=y?"clientHeight":"clientWidth",C=r.reference[g]+r.reference[h]-f[h]-r.floating[g],D=f[h]-r.reference[h],nt=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let tt=nt?nt[E]:0;(!tt||!await(o.isElement==null?void 0:o.isElement(nt)))&&(tt=a.floating[E]||r.floating[g]);const Yt=C/2-D/2,Ct=tt/2-b[g]/2-1,F=de(d[_],Ct),ct=de(d[k],Ct),Et=F,Rt=tt-b[g]-ct,ut=tt/2-b[g]/2+Yt,me=Go(Et,ut,Rt),Gt=!l.arrow&&le(i)!=null&&ut!==me&&r.reference[g]/2-(ut<Et?F:ct)-b[g]/2<0,Kt=Gt?ut<Et?ut-Et:ut-Rt:0;return{[h]:f[h]+Kt,data:{[h]:me,centerOffset:ut-me-Kt,...Gt&&{alignmentOffset:Kt}},reset:Gt}}});function Jv(e,t,s){return(e?[...s.filter(i=>le(i)===e),...s.filter(i=>le(i)!==e)]:s.filter(i=>Wt(i)===i)).filter(i=>e?le(i)===e||(t?_r(i)!==i:!1):!0)}const Xv=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var s,n,i;const{rects:r,middlewareData:o,placement:a,platform:l,elements:c}=t,{crossAxis:u=!1,alignment:d,allowedPlacements:f=hc,autoAlignment:h=!0,...g}=he(e,t),b=d!==void 0||f===hc?Jv(d||null,h,f):f,y=await an(t,g),_=((s=o.autoPlacement)==null?void 0:s.index)||0,k=b[_];if(k==null)return{};const E=ih(k,r,await(l.isRTL==null?void 0:l.isRTL(c.floating)));if(a!==k)return{reset:{placement:b[0]}};const C=[y[Wt(k)],y[E[0]],y[E[1]]],D=[...((n=o.autoPlacement)==null?void 0:n.overflows)||[],{placement:k,overflows:C}],nt=b[_+1];if(nt)return{data:{index:_+1,overflows:D},reset:{placement:nt}};const tt=D.map(F=>{const ct=le(F.placement);return[F.placement,ct&&u?F.overflows.slice(0,2).reduce((Et,Rt)=>Et+Rt,0):F.overflows[0],F.overflows]}).sort((F,ct)=>F[1]-ct[1]),Ct=((i=tt.filter(F=>F[2].slice(0,le(F[0])?2:3).every(ct=>ct<=0))[0])==null?void 0:i[0])||tt[0][0];return Ct!==a?{data:{index:_+1,overflows:D},reset:{placement:Ct}}:{}}}},Qv=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...y}=he(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const _=Wt(i),k=Ue(a),E=Wt(a)===a,C=await(l.isRTL==null?void 0:l.isRTL(c.floating)),D=f||(E||!b?[wr(a)]:Zv(a)),nt=g!=="none";!f&&nt&&D.push(...qv(a,b,g,C));const tt=[a,...D],Yt=await an(t,y),Ct=[];let F=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&Ct.push(Yt[_]),d){const ut=ih(i,o,C);Ct.push(Yt[ut[0]],Yt[ut[1]])}if(F=[...F,{placement:i,overflows:Ct}],!Ct.every(ut=>ut<=0)){var ct,Et;const ut=(((ct=r.flip)==null?void 0:ct.index)||0)+1,me=tt[ut];if(me)return{data:{index:ut,overflows:F},reset:{placement:me}};let Gt=(Et=F.filter(Kt=>Kt.overflows[0]<=0).sort((Kt,be)=>Kt.overflows[1]-be.overflows[1])[0])==null?void 0:Et.placement;if(!Gt)switch(h){case"bestFit":{var Rt;const Kt=(Rt=F.filter(be=>{if(nt){const We=Ue(be.placement);return We===k||We==="y"}return!0}).map(be=>[be.placement,be.overflows.filter(We=>We>0).reduce((We,Ah)=>We+Ah,0)]).sort((be,We)=>be[1]-We[1])[0])==null?void 0:Rt[0];Kt&&(Gt=Kt);break}case"initialPlacement":Gt=a;break}if(i!==Gt)return{reset:{placement:Gt}}}return{}}}};function pc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function gc(e){return nh.some(t=>e[t]>=0)}const ty=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:s}=t,{strategy:n="referenceHidden",...i}=he(e,t);switch(n){case"referenceHidden":{const r=await an(t,{...i,elementContext:"reference"}),o=pc(r,s.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:gc(o)}}}case"escaped":{const r=await an(t,{...i,altBoundary:!0}),o=pc(r,s.floating);return{data:{escapedOffsets:o,escaped:gc(o)}}}default:return{}}}}};function rh(e){const t=de(...e.map(r=>r.left)),s=de(...e.map(r=>r.top)),n=_t(...e.map(r=>r.right)),i=_t(...e.map(r=>r.bottom));return{x:t,y:s,width:n-t,height:i-s}}function ey(e){const t=e.slice().sort((i,r)=>i.y-r.y),s=[];let n=null;for(let i=0;i<t.length;i++){const r=t[i];!n||r.y-n.y>n.height/2?s.push([r]):s[s.length-1].push(r),n=r}return s.map(i=>on(rh(i)))}const sy=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:s,elements:n,rects:i,platform:r,strategy:o}=t,{padding:a=2,x:l,y:c}=he(e,t),u=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(n.reference))||[]),d=ey(u),f=on(rh(u)),h=Ja(a);function g(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(y=>l>y.left-h.left&&l<y.right+h.right&&c>y.top-h.top&&c<y.bottom+h.bottom)||f;if(d.length>=2){if(Ue(s)==="y"){const F=d[0],ct=d[d.length-1],Et=Wt(s)==="top",Rt=F.top,ut=ct.bottom,me=Et?F.left:ct.left,Gt=Et?F.right:ct.right,Kt=Gt-me,be=ut-Rt;return{top:Rt,bottom:ut,left:me,right:Gt,width:Kt,height:be,x:me,y:Rt}}const y=Wt(s)==="left",_=_t(...d.map(F=>F.right)),k=de(...d.map(F=>F.left)),E=d.filter(F=>y?F.left===k:F.right===_),C=E[0].top,D=E[E.length-1].bottom,nt=k,tt=_,Yt=tt-nt,Ct=D-C;return{top:C,bottom:D,left:nt,right:tt,width:Yt,height:Ct,x:nt,y:C}}return f}const b=await r.getElementRects({reference:{getBoundingClientRect:g},floating:n.floating,strategy:o});return i.reference.x!==b.reference.x||i.reference.y!==b.reference.y||i.reference.width!==b.reference.width||i.reference.height!==b.reference.height?{reset:{rects:b}}:{}}}};async function ny(e,t){const{placement:s,platform:n,elements:i}=e,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),o=Wt(s),a=le(s),l=Ue(s)==="y",c=["left","top"].includes(o)?-1:1,u=r&&l?-1:1,d=he(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(h=a==="end"?g*-1:g),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}const iy=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,n;const{x:i,y:r,placement:o,middlewareData:a}=t,l=await ny(t,e);return o===((s=a.offset)==null?void 0:s.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:o}}}}},ry=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:y=>{let{x:_,y:k}=y;return{x:_,y:k}}},...l}=he(e,t),c={x:s,y:n},u=await an(t,l),d=Ue(Wt(i)),f=Ya(d);let h=c[f],g=c[d];if(r){const y=f==="y"?"top":"left",_=f==="y"?"bottom":"right",k=h+u[y],E=h-u[_];h=Go(k,h,E)}if(o){const y=d==="y"?"top":"left",_=d==="y"?"bottom":"right",k=g+u[y],E=g-u[_];g=Go(k,g,E)}const b=a.fn({...t,[f]:h,[d]:g});return{...b,data:{x:b.x-s,y:b.y-n,enabled:{[f]:r,[d]:o}}}}}},oy=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:s,y:n,placement:i,rects:r,middlewareData:o}=t,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=he(e,t),u={x:s,y:n},d=Ue(i),f=Ya(d);let h=u[f],g=u[d];const b=he(a,t),y=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(l){const E=f==="y"?"height":"width",C=r.reference[f]-r.floating[E]+y.mainAxis,D=r.reference[f]+r.reference[E]-y.mainAxis;h<C?h=C:h>D&&(h=D)}if(c){var _,k;const E=f==="y"?"width":"height",C=["top","left"].includes(Wt(i)),D=r.reference[d]-r.floating[E]+(C&&((_=o.offset)==null?void 0:_[d])||0)+(C?0:y.crossAxis),nt=r.reference[d]+r.reference[E]+(C?0:((k=o.offset)==null?void 0:k[d])||0)-(C?y.crossAxis:0);g<D?g=D:g>nt&&(g=nt)}return{[f]:h,[d]:g}}}},ay=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,n;const{placement:i,rects:r,platform:o,elements:a}=t,{apply:l=()=>{},...c}=he(e,t),u=await an(t,c),d=Wt(i),f=le(i),h=Ue(i)==="y",{width:g,height:b}=r.floating;let y,_;d==="top"||d==="bottom"?(y=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(_=d,y=f==="end"?"top":"bottom");const k=b-u.top-u.bottom,E=g-u.left-u.right,C=de(b-u[y],k),D=de(g-u[_],E),nt=!t.middlewareData.shift;let tt=C,Yt=D;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(Yt=E),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(tt=k),nt&&!f){const F=_t(u.left,0),ct=_t(u.right,0),Et=_t(u.top,0),Rt=_t(u.bottom,0);h?Yt=g-2*(F!==0||ct!==0?F+ct:_t(u.left,u.right)):tt=b-2*(Et!==0||Rt!==0?Et+Rt:_t(u.top,u.bottom))}await l({...t,availableWidth:Yt,availableHeight:tt});const Ct=await o.getDimensions(a.floating);return g!==Ct.width||b!==Ct.height?{reset:{rects:!0}}:{}}}};function Fr(){return typeof window<"u"}function _n(e){return oh(e)?(e.nodeName||"").toLowerCase():"#document"}function jt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function $e(e){var t;return(t=(oh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function oh(e){return Fr()?e instanceof Node||e instanceof jt(e).Node:!1}function fe(e){return Fr()?e instanceof Element||e instanceof jt(e).Element:!1}function Ee(e){return Fr()?e instanceof HTMLElement||e instanceof jt(e).HTMLElement:!1}function mc(e){return!Fr()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof jt(e).ShadowRoot}function Oi(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=pe(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!["inline","contents"].includes(i)}function ly(e){return["table","td","th"].includes(_n(e))}function Ur(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Hr(e){const t=Xa(),s=fe(e)?pe(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>s[n]?s[n]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(s.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(s.contain||"").includes(n))}function cy(e){let t=us(e);for(;Ee(t)&&!ln(t);){if(Hr(t))return t;if(Ur(t))return null;t=us(t)}return null}function Xa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ln(e){return["html","body","#document"].includes(_n(e))}function pe(e){return jt(e).getComputedStyle(e)}function jr(e){return fe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function us(e){if(_n(e)==="html")return e;const t=e.assignedSlot||e.parentNode||mc(e)&&e.host||$e(e);return mc(t)?t.host:t}function ah(e){const t=us(e);return ln(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ee(t)&&Oi(t)?t:ah(t)}function bi(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=ah(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),o=jt(i);if(r){const a=Ko(o);return t.concat(o,o.visualViewport||[],Oi(i)?i:[],a&&s?bi(a):[])}return t.concat(i,bi(i,[],s))}function Ko(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function lh(e){const t=pe(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Ee(e),r=i?e.offsetWidth:s,o=i?e.offsetHeight:n,a=yr(s)!==r||yr(n)!==o;return a&&(s=r,n=o),{width:s,height:n,$:a}}function Qa(e){return fe(e)?e:e.contextElement}function qs(e){const t=Qa(e);if(!Ee(t))return xe(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=lh(t);let o=(r?yr(s.width):s.width)/n,a=(r?yr(s.height):s.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const uy=xe(0);function ch(e){const t=jt(e);return!Xa()||!t.visualViewport?uy:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function dy(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==jt(e)?!1:t}function Ps(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=Qa(e);let o=xe(1);t&&(n?fe(n)&&(o=qs(n)):o=qs(e));const a=dy(r,s,n)?ch(r):xe(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(r){const f=jt(r),h=n&&fe(n)?jt(n):n;let g=f,b=Ko(g);for(;b&&n&&h!==g;){const y=qs(b),_=b.getBoundingClientRect(),k=pe(b),E=_.left+(b.clientLeft+parseFloat(k.paddingLeft))*y.x,C=_.top+(b.clientTop+parseFloat(k.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=E,c+=C,g=jt(b),b=Ko(g)}}return on({width:u,height:d,x:l,y:c})}function tl(e,t){const s=jr(e).scrollLeft;return t?t.left+s:Ps($e(e)).left+s}function uh(e,t,s){s===void 0&&(s=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(s?0:tl(e,n)),r=n.top+t.scrollTop;return{x:i,y:r}}function hy(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",o=$e(n),a=t?Ur(t.floating):!1;if(n===o||a&&r)return s;let l={scrollLeft:0,scrollTop:0},c=xe(1);const u=xe(0),d=Ee(n);if((d||!d&&!r)&&((_n(n)!=="body"||Oi(o))&&(l=jr(n)),Ee(n))){const h=Ps(n);c=qs(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}const f=o&&!d&&!r?uh(o,l,!0):xe(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+u.x+f.x,y:s.y*c.y-l.scrollTop*c.y+u.y+f.y}}function fy(e){return Array.from(e.getClientRects())}function py(e){const t=$e(e),s=jr(e),n=e.ownerDocument.body,i=_t(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=_t(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let o=-s.scrollLeft+tl(e);const a=-s.scrollTop;return pe(n).direction==="rtl"&&(o+=_t(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}function gy(e,t){const s=jt(e),n=$e(e),i=s.visualViewport;let r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;const c=Xa();(!c||c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a,y:l}}function my(e,t){const s=Ps(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=Ee(e)?qs(e):xe(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=i*r.x,c=n*r.y;return{width:o,height:a,x:l,y:c}}function bc(e,t,s){let n;if(t==="viewport")n=gy(e,s);else if(t==="document")n=py($e(e));else if(fe(t))n=my(t,s);else{const i=ch(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return on(n)}function dh(e,t){const s=us(e);return s===t||!fe(s)||ln(s)?!1:pe(s).position==="fixed"||dh(s,t)}function by(e,t){const s=t.get(e);if(s)return s;let n=bi(e,[],!1).filter(a=>fe(a)&&_n(a)!=="body"),i=null;const r=pe(e).position==="fixed";let o=r?us(e):e;for(;fe(o)&&!ln(o);){const a=pe(o),l=Hr(o);!l&&a.position==="fixed"&&(i=null),(r?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Oi(o)&&!l&&dh(e,o))?n=n.filter(u=>u!==o):i=a,o=us(o)}return t.set(e,n),n}function vy(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const o=[...s==="clippingAncestors"?Ur(t)?[]:by(t,this._c):[].concat(s),n],a=o[0],l=o.reduce((c,u)=>{const d=bc(t,u,i);return c.top=_t(d.top,c.top),c.right=de(d.right,c.right),c.bottom=de(d.bottom,c.bottom),c.left=_t(d.left,c.left),c},bc(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function yy(e){const{width:t,height:s}=lh(e);return{width:t,height:s}}function _y(e,t,s){const n=Ee(t),i=$e(t),r=s==="fixed",o=Ps(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=xe(0);if(n||!n&&!r)if((_n(t)!=="body"||Oi(i))&&(a=jr(t)),n){const f=Ps(t,!0,r,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&(l.x=tl(i));const c=i&&!n&&!r?uh(i,a):xe(0),u=o.left+a.scrollLeft-l.x-c.x,d=o.top+a.scrollTop-l.y-c.y;return{x:u,y:d,width:o.width,height:o.height}}function lo(e){return pe(e).position==="static"}function vc(e,t){if(!Ee(e)||pe(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return $e(e)===s&&(s=s.ownerDocument.body),s}function hh(e,t){const s=jt(e);if(Ur(e))return s;if(!Ee(e)){let i=us(e);for(;i&&!ln(i);){if(fe(i)&&!lo(i))return i;i=us(i)}return s}let n=vc(e,t);for(;n&&ly(n)&&lo(n);)n=vc(n,t);return n&&ln(n)&&lo(n)&&!Hr(n)?s:n||cy(e)||s}const wy=async function(e){const t=this.getOffsetParent||hh,s=this.getDimensions,n=await s(e.floating);return{reference:_y(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function xy(e){return pe(e).direction==="rtl"}const Xi={convertOffsetParentRelativeRectToViewportRelativeRect:hy,getDocumentElement:$e,getClippingRect:vy,getOffsetParent:hh,getElementRects:wy,getClientRects:fy,getDimensions:yy,getScale:qs,isElement:fe,isRTL:xy};function fh(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ky(e,t){let s=null,n;const i=$e(e);function r(){var a;clearTimeout(n),(a=s)==null||a.disconnect(),s=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:u,top:d,width:f,height:h}=c;if(a||t(),!f||!h)return;const g=Vi(d),b=Vi(i.clientWidth-(u+f)),y=Vi(i.clientHeight-(d+h)),_=Vi(u),E={rootMargin:-g+"px "+-b+"px "+-y+"px "+-_+"px",threshold:_t(0,de(1,l))||1};let C=!0;function D(nt){const tt=nt[0].intersectionRatio;if(tt!==l){if(!C)return o();tt?o(!1,tt):n=setTimeout(()=>{o(!1,1e-7)},1e3)}tt===1&&!fh(c,e.getBoundingClientRect())&&o(),C=!1}try{s=new IntersectionObserver(D,{...E,root:i.ownerDocument})}catch{s=new IntersectionObserver(D,E)}s.observe(e)}return o(!0),r}function Sy(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Qa(e),u=i||r?[...c?bi(c):[],...bi(t)]:[];u.forEach(_=>{i&&_.addEventListener("scroll",s,{passive:!0}),r&&_.addEventListener("resize",s)});const d=c&&a?ky(c,s):null;let f=-1,h=null;o&&(h=new ResizeObserver(_=>{let[k]=_;k&&k.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var E;(E=h)==null||E.observe(t)})),s()}),c&&!l&&h.observe(c),h.observe(t));let g,b=l?Ps(e):null;l&&y();function y(){const _=Ps(e);b&&!fh(b,_)&&s(),b=_,g=requestAnimationFrame(y)}return s(),()=>{var _;u.forEach(k=>{i&&k.removeEventListener("scroll",s),r&&k.removeEventListener("resize",s)}),d?.(),(_=h)==null||_.disconnect(),h=null,l&&cancelAnimationFrame(g)}}const Cy=iy,O_=Xv,Ey=ry,Ay=Qv,yc=ay,R_=ty,$y=Kv,I_=sy,D_=oy,Ty=(e,t,s)=>{const n=new Map,i={platform:Xi,...s},r={...i.platform,_c:n};return Gv(e,t,{...i,platform:r})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=vn(class extends yn{constructor(e){if(super(e),e.type!==re.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return Pt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oy=()=>new Ry;class Ry{}const co=new WeakMap,Iy=vn(class extends ub{render(e){return G}update(e,[t]){const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),G}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=co.get(t);s===void 0&&(s=new WeakMap,co.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?co.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??G;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dy=vn(class extends yn{constructor(e){if(super(e),e.type!==re.PROPERTY&&e.type!==re.ATTRIBUTE&&e.type!==re.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Cd(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Pt||t===G)return t;const s=e.element,n=e.name;if(e.type===re.PROPERTY){if(t===s[n])return Pt}else if(e.type===re.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(n))return Pt}else if(e.type===re.ATTRIBUTE&&s.getAttribute(n)===t+"")return Pt;return Ed(e),t}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jo=class extends yn{constructor(t){if(super(t),this.it=G,t.type!==re.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===G||t==null)return this._t=void 0,this.it=t;if(t===Pt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Jo.directiveName="unsafeHTML",Jo.resultType=1;const Ly=vn(Jo);function M_(){customElements.define("v-element",Ae),customElements.define("v-line",cs),customElements.define("v-text",Wa)}var My=st`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Xo=new Set,Zs=new Map;let bs,el="ltr",sl="en";const ph=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ph){const e=new MutationObserver(mh);el=document.documentElement.dir||"ltr",sl=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function gh(...e){e.map(t=>{const s=t.$code.toLowerCase();Zs.has(s)?Zs.set(s,Object.assign(Object.assign({},Zs.get(s)),t)):Zs.set(s,t),bs||(bs=t)}),mh()}function mh(){ph&&(el=document.documentElement.dir||"ltr",sl=document.documentElement.lang||navigator.language),[...Xo.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Py=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Xo.add(this.host)}hostDisconnected(){Xo.delete(this.host)}dir(){return`${this.host.dir||el}`.toLowerCase()}lang(){return`${this.host.lang||sl}`.toLowerCase()}getTranslationData(t){var s,n;const i=new Intl.Locale(t.replace(/_/g,"-")),r=i?.language.toLowerCase(),o=(n=(s=i?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&n!==void 0?n:"",a=Zs.get(`${r}-${o}`),l=Zs.get(r);return{locale:i,language:r,region:o,primary:a,secondary:l}}exists(t,s){var n;const{primary:i,secondary:r}=this.getTranslationData((n=s.lang)!==null&&n!==void 0?n:this.lang());return s=Object.assign({includeFallback:!1},s),!!(i&&i[t]||r&&r[t]||s.includeFallback&&bs&&bs[t])}term(t,...s){const{primary:n,secondary:i}=this.getTranslationData(this.lang());let r;if(n&&n[t])r=n[t];else if(i&&i[t])r=i[t];else if(bs&&bs[t])r=bs[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...s):r}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,s)}};var bh={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};gh(bh);var Ny=bh,ie=class extends Py{};gh(Ny);var at=st`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,vh=Object.defineProperty,zy=Object.defineProperties,Vy=Object.getOwnPropertyDescriptor,By=Object.getOwnPropertyDescriptors,_c=Object.getOwnPropertySymbols,Fy=Object.prototype.hasOwnProperty,Uy=Object.prototype.propertyIsEnumerable,uo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),nl=e=>{throw TypeError(e)},wc=(e,t,s)=>t in e?vh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ze=(e,t)=>{for(var s in t||(t={}))Fy.call(t,s)&&wc(e,s,t[s]);if(_c)for(var s of _c(t))Uy.call(t,s)&&wc(e,s,t[s]);return e},Ri=(e,t)=>zy(e,By(t)),p=(e,t,s,n)=>{for(var i=n>1?void 0:n?Vy(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(n?o(t,s,i):o(i))||i);return n&&i&&vh(t,s,i),i},yh=(e,t,s)=>t.has(e)||nl("Cannot "+s),Hy=(e,t,s)=>(yh(e,t,"read from private field"),t.get(e)),jy=(e,t,s)=>t.has(e)?nl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Zy=(e,t,s,n)=>(yh(e,t,"write to private field"),t.set(e,s),s),Wy=function(e,t){this[0]=e,this[1]=t},qy=e=>{var t=e[uo("asyncIterator")],s=!1,n,i={};return t==null?(t=e[uo("iterator")](),n=r=>i[r]=o=>t[r](o)):(t=t.call(e),n=r=>i[r]=o=>{if(s){if(s=!1,r==="throw")throw o;return o}return s=!0,{done:!1,value:new Wy(new Promise(a=>{var l=t[r](o);l instanceof Object||nl("Object expected"),a(l)}),1)}}),i[uo("iterator")]=()=>i,n("next"),"throw"in t?n("throw"):i.throw=r=>{throw r},"return"in t&&n("return"),i},Qi,K=class extends Pe{constructor(){super(),jy(this,Qi,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,Ze({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const n=customElements.get(e);if(!n){try{customElements.define(e,t,s)}catch{customElements.define(e,class extends t{},s)}return}let i=" (unknown version)",r=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in n&&n.version&&(r=" v"+n.version),!(i&&r&&i===r)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${r} has already been registered.`)}attributeChangedCallback(e,t,s){Hy(this,Qi)||(this.constructor.elementProperties.forEach((n,i)=>{n.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Zy(this,Qi,!0)),super.attributeChangedCallback(e,t,s)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,s)=>{e.has(s)&&this[s]==null&&(this[s]=t)})}};Qi=new WeakMap;K.version="2.20.1";K.dependencies={};p([m()],K.prototype,"dir",2);p([m()],K.prototype,"lang",2);var il=class extends K{constructor(){super(...arguments),this.localize=new ie(this)}render(){return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};il.styles=[at,My];var En=new WeakMap,An=new WeakMap,$n=new WeakMap,ho=new WeakSet,Bi=new WeakMap,Zr=class{constructor(e,t){this.handleFormData=s=>{const n=this.options.disabled(this.host),i=this.options.name(this.host),r=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!n&&!o&&typeof i=="string"&&i.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(a=>{s.formData.append(i,a.toString())}):s.formData.append(i,r.toString()))},this.handleFormSubmit=s=>{var n;const i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((n=En.get(this.form))==null||n.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!i&&!r(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Bi.set(this.host,[])},this.handleInteraction=s=>{const n=Bi.get(this.host);n.includes(s.type)||n.push(s.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const n of s)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const n of s)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Ze({form:s=>{const n=s.form;if(n){const r=s.getRootNode().querySelector(`#${n}`);if(r)return r}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var n;return(n=s.disabled)!=null?n:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,n)=>s.value=n,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Bi.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Bi.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,En.has(this.form)?En.get(this.form).add(this.host):En.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),An.has(this.form)||(An.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),$n.has(this.form)||($n.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=En.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),An.has(this.form)&&(this.form.reportValidity=An.get(this.form),An.delete(this.form)),$n.has(this.form)&&(this.form.checkValidity=$n.get(this.form),$n.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ho.add(e):ho.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",t&&(s.name=t.name,s.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&s.setAttribute(n,t.getAttribute(n))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,s=!!ho.has(t),n=!!t.required;t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&s),t.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},rl=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),N_=Object.freeze(Ri(Ze({},rl),{valid:!1,valueMissing:!0})),z_=Object.freeze(Ri(Ze({},rl),{valid:!1,customError:!0})),Yy=st`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Wr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const n=s.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Gy(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let s="";return[...t].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(s+=n.textContent)}),s}var Qo="";function xc(e){Qo=e}function Ky(e=""){if(!Qo){const t=[...document.getElementsByTagName("script")],s=t.find(n=>n.hasAttribute("data-shoelace"));if(s)xc(s.getAttribute("data-shoelace"));else{const n=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let i="";n&&(i=n.getAttribute("src")),xc(i.split("/").slice(0,-1).join("/"))}}return Qo.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Jy={name:"default",resolver:e=>Ky(`assets/icons/${e}.svg`)},Xy=Jy,kc={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Qy={name:"system",resolver:e=>e in kc?`data:image/svg+xml,${encodeURIComponent(kc[e])}`:""},t0=Qy,e0=[Xy,t0],ta=[];function s0(e){ta.push(e)}function n0(e){ta=ta.filter(t=>t!==e)}function Sc(e){return e0.find(t=>t.name===e)}var i0=st`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Y(e,t){const s=Ze({waitUntilFirstUpdate:!1},t);return(n,i)=>{const{update:r}=n,o=Array.isArray(e)?e:[e];n.update=function(a){o.forEach(l=>{const c=l;if(a.has(c)){const u=a.get(c),d=this[c];u!==d&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[i](u,d)}}),r.call(this,a)}}}var Tn=Symbol(),Fi=Symbol(),fo,po=new Map,Ot=class extends K{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let n;if(t?.spriteSheet)return this.svg=A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?Tn:Fi}catch{return Fi}try{const i=document.createElement("div");i.innerHTML=await n.text();const r=i.firstElementChild;if(((s=r?.tagName)==null?void 0:s.toLowerCase())!=="svg")return Tn;fo||(fo=new DOMParser);const a=fo.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Tn}catch{return Tn}}connectedCallback(){super.connectedCallback(),s0(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),n0(this)}getIconSource(){const e=Sc(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),n=s?Sc(this.library):void 0;if(!t){this.svg=null;return}let i=po.get(t);if(i||(i=this.resolveIcon(t,n),po.set(t,i)),!this.initialRender)return;const r=await i;if(r===Fi&&po.delete(t),t===this.getIconSource().url){if(ib(r)){if(this.svg=r,n){await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");typeof n.mutator=="function"&&o&&n.mutator(o)}return}switch(r){case Fi:case Tn:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=n?.mutator)==null||e.call(n,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Ot.styles=[at,i0];p([Q()],Ot.prototype,"svg",2);p([m({reflect:!0})],Ot.prototype,"name",2);p([m()],Ot.prototype,"src",2);p([m()],Ot.prototype,"label",2);p([m({reflect:!0})],Ot.prototype,"library",2);p([Y("label")],Ot.prototype,"handleLabelChange",1);p([Y(["name","src","library"])],Ot.prototype,"setIcon",1);var H=class extends K{constructor(){super(...arguments),this.formControlController=new Zr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Wr(this,"[default]","prefix","suffix"),this.localize=new ie(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:rl}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?gr`a`:gr`button`;return Ji`
      <${t}
        part="base"
        class=${ot({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:this.type)}
        title=${this.title}
        name=${N(e?void 0:this.name)}
        value=${N(e?void 0:this.value)}
        href=${N(e&&!this.disabled?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e?this.rel:void 0)}
        role=${N(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ji` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ji`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};H.styles=[at,Yy];H.dependencies={"sl-icon":Ot,"sl-spinner":il};p([U(".button")],H.prototype,"button",2);p([Q()],H.prototype,"hasFocus",2);p([Q()],H.prototype,"invalid",2);p([m()],H.prototype,"title",2);p([m({reflect:!0})],H.prototype,"variant",2);p([m({reflect:!0})],H.prototype,"size",2);p([m({type:Boolean,reflect:!0})],H.prototype,"caret",2);p([m({type:Boolean,reflect:!0})],H.prototype,"disabled",2);p([m({type:Boolean,reflect:!0})],H.prototype,"loading",2);p([m({type:Boolean,reflect:!0})],H.prototype,"outline",2);p([m({type:Boolean,reflect:!0})],H.prototype,"pill",2);p([m({type:Boolean,reflect:!0})],H.prototype,"circle",2);p([m()],H.prototype,"type",2);p([m()],H.prototype,"name",2);p([m()],H.prototype,"value",2);p([m()],H.prototype,"href",2);p([m()],H.prototype,"target",2);p([m()],H.prototype,"rel",2);p([m()],H.prototype,"download",2);p([m()],H.prototype,"form",2);p([m({attribute:"formaction"})],H.prototype,"formAction",2);p([m({attribute:"formenctype"})],H.prototype,"formEnctype",2);p([m({attribute:"formmethod"})],H.prototype,"formMethod",2);p([m({attribute:"formnovalidate",type:Boolean})],H.prototype,"formNoValidate",2);p([m({attribute:"formtarget"})],H.prototype,"formTarget",2);p([Y("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);H.define("sl-button");var r0=st`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,wn=class extends K{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=On(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=On(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=On(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=On(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const s=e.indexOf(t),n=On(t);n&&(n.toggleAttribute("data-sl-button-group__button",!0),n.toggleAttribute("data-sl-button-group__button--first",s===0),n.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<e.length-1),n.toggleAttribute("data-sl-button-group__button--last",s===e.length-1),n.toggleAttribute("data-sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return A`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};wn.styles=[at,r0];p([U("slot")],wn.prototype,"defaultSlot",2);p([Q()],wn.prototype,"disableRole",2);p([m()],wn.prototype,"label",2);function On(e){var t;const s="sl-button, sl-radio-button";return(t=e.closest(s))!=null?t:e.querySelector(s)}wn.define("sl-button-group");var o0=st`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,_h=class extends K{render(){return A` <slot></slot> `}};_h.styles=[at,o0];var a0=st`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,wh=(e="value")=>(t,s)=>{const n=t.constructor,i=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(r,o,a){var l;const c=n.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(r===u){const d=c.converter||nn,h=(typeof d=="function"?d:(l=d?.fromAttribute)!=null?l:nn.fromAttribute)(a,c.type);this[e]!==h&&(this[s]=h)}i.call(this,r,o,a)}},xh=st`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,P=class extends K{constructor(){super(...arguments),this.formControlController=new Zr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Wr(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,n="preserve"){const i=t??this.input.selectionStart,r=s??this.input.selectionEnd;this.input.setRangeText(e,i,r,n),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,n=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return A`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ot({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${N(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              min=${N(this.min)}
              max=${N(this.max)}
              step=${N(this.step)}
              .value=${Dy(this.value)}
              autocapitalize=${N(this.autocapitalize)}
              autocomplete=${N(this.autocomplete)}
              autocorrect=${N(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${N(this.pattern)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?A`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?A`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?A`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:A`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};P.styles=[at,xh,a0];P.dependencies={"sl-icon":Ot};p([U(".input__control")],P.prototype,"input",2);p([Q()],P.prototype,"hasFocus",2);p([m()],P.prototype,"title",2);p([m({reflect:!0})],P.prototype,"type",2);p([m()],P.prototype,"name",2);p([m()],P.prototype,"value",2);p([wh()],P.prototype,"defaultValue",2);p([m({reflect:!0})],P.prototype,"size",2);p([m({type:Boolean,reflect:!0})],P.prototype,"filled",2);p([m({type:Boolean,reflect:!0})],P.prototype,"pill",2);p([m()],P.prototype,"label",2);p([m({attribute:"help-text"})],P.prototype,"helpText",2);p([m({type:Boolean})],P.prototype,"clearable",2);p([m({type:Boolean,reflect:!0})],P.prototype,"disabled",2);p([m()],P.prototype,"placeholder",2);p([m({type:Boolean,reflect:!0})],P.prototype,"readonly",2);p([m({attribute:"password-toggle",type:Boolean})],P.prototype,"passwordToggle",2);p([m({attribute:"password-visible",type:Boolean})],P.prototype,"passwordVisible",2);p([m({attribute:"no-spin-buttons",type:Boolean})],P.prototype,"noSpinButtons",2);p([m({reflect:!0})],P.prototype,"form",2);p([m({type:Boolean,reflect:!0})],P.prototype,"required",2);p([m()],P.prototype,"pattern",2);p([m({type:Number})],P.prototype,"minlength",2);p([m({type:Number})],P.prototype,"maxlength",2);p([m()],P.prototype,"min",2);p([m()],P.prototype,"max",2);p([m()],P.prototype,"step",2);p([m()],P.prototype,"autocapitalize",2);p([m()],P.prototype,"autocorrect",2);p([m()],P.prototype,"autocomplete",2);p([m({type:Boolean})],P.prototype,"autofocus",2);p([m()],P.prototype,"enterkeyhint",2);p([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],P.prototype,"spellcheck",2);p([m()],P.prototype,"inputmode",2);p([Y("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);p([Y("step",{waitUntilFirstUpdate:!0})],P.prototype,"handleStepChange",1);p([Y("value",{waitUntilFirstUpdate:!0})],P.prototype,"handleValueChange",1);function go(e,t){function s(i){const r=e.getBoundingClientRect(),o=e.ownerDocument.defaultView,a=r.left+o.scrollX,l=r.top+o.scrollY,c=i.pageX-a,u=i.pageY-l;t?.onMove&&t.onMove(c,u)}function n(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",n),t?.onStop&&t.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",n),t?.initialEvent instanceof PointerEvent&&s(t.initialEvent)}var l0=st`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function*kh(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*qy(kh(e.shadowRoot.activeElement))))}function c0(){return[...kh()].pop()}var Cc=new WeakMap;function Sh(e){let t=Cc.get(e);return t||(t=window.getComputedStyle(e,null),Cc.set(e,t)),t}function u0(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Sh(e);return t.visibility!=="hidden"&&t.display!=="none"}function d0(e){const t=Sh(e),{overflowY:s,overflowX:n}=t;return s==="scroll"||n==="scroll"?!0:s!=="auto"||n!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&n==="auto"}function h0(e){const t=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const r=e.getRootNode(),o=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=r.querySelector(`${o}:checked`);return a?a===e:r.querySelector(o)===e}return u0(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:d0(e):!1}function f0(e){var t,s;const n=g0(e),i=(t=n[0])!=null?t:null,r=(s=n[n.length-1])!=null?s:null;return{start:i,end:r}}function p0(e,t){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==t}function g0(e){const t=new WeakMap,s=[];function n(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!s.includes(i)&&h0(i)&&s.push(i),i instanceof HTMLSlotElement&&p0(i,e)&&i.assignedElements({flatten:!0}).forEach(r=>{n(r)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&n(i.shadowRoot)}for(const r of i.children)n(r)}return n(e),s.sort((i,r)=>{const o=Number(i.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-o})}var m0=st`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;function b0(e){return v0(e)}function mo(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function v0(e){for(let t=e;t;t=mo(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=mo(e);t;t=mo(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||Hr(s)||t.tagName==="BODY"))return t}return null}function y0(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var Z=class extends K{constructor(){super(...arguments),this.localize=new ie(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let n=0,i=0,r=0,o=0,a=0,l=0,c=0,u=0;s?e.top<t.top?(n=e.left,i=e.bottom,r=e.right,o=e.bottom,a=t.left,l=t.top,c=t.right,u=t.top):(n=t.left,i=t.bottom,r=t.right,o=t.bottom,a=e.left,l=e.top,c=e.right,u=e.top):e.left<t.left?(n=e.right,i=e.top,r=t.left,o=t.top,a=e.right,l=e.bottom,c=t.left,u=t.bottom):(n=t.right,i=t.top,r=e.left,o=e.top,a=t.right,l=t.bottom,c=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||y0(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Sy(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Cy({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(yc({apply:({rects:s})=>{const n=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=n?`${s.reference.width}px`:"",this.popup.style.height=i?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ay({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ey({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(yc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:n})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${n}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push($y({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>Xi.getOffsetParent(s,b0):Xi.getOffsetParent;Ty(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ri(Ze({},Xi),{getOffsetParent:t})}).then(({x:s,y:n,middlewareData:i,placement:r})=>{const o=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${n}px`}),this.arrow){const l=i.arrow.x,c=i.arrow.y;let u="",d="",f="",h="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=o?g:"",h=o?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=o?"":g,h=o?g:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:f,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ot({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ot({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Z.styles=[at,m0];p([U(".popup")],Z.prototype,"popup",2);p([U(".popup__arrow")],Z.prototype,"arrowEl",2);p([m()],Z.prototype,"anchor",2);p([m({type:Boolean,reflect:!0})],Z.prototype,"active",2);p([m({reflect:!0})],Z.prototype,"placement",2);p([m({reflect:!0})],Z.prototype,"strategy",2);p([m({type:Number})],Z.prototype,"distance",2);p([m({type:Number})],Z.prototype,"skidding",2);p([m({type:Boolean})],Z.prototype,"arrow",2);p([m({attribute:"arrow-placement"})],Z.prototype,"arrowPlacement",2);p([m({attribute:"arrow-padding",type:Number})],Z.prototype,"arrowPadding",2);p([m({type:Boolean})],Z.prototype,"flip",2);p([m({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],Z.prototype,"flipFallbackPlacements",2);p([m({attribute:"flip-fallback-strategy"})],Z.prototype,"flipFallbackStrategy",2);p([m({type:Object})],Z.prototype,"flipBoundary",2);p([m({attribute:"flip-padding",type:Number})],Z.prototype,"flipPadding",2);p([m({type:Boolean})],Z.prototype,"shift",2);p([m({type:Object})],Z.prototype,"shiftBoundary",2);p([m({attribute:"shift-padding",type:Number})],Z.prototype,"shiftPadding",2);p([m({attribute:"auto-size"})],Z.prototype,"autoSize",2);p([m()],Z.prototype,"sync",2);p([m({type:Object})],Z.prototype,"autoSizeBoundary",2);p([m({attribute:"auto-size-padding",type:Number})],Z.prototype,"autoSizePadding",2);p([m({attribute:"hover-bridge",type:Boolean})],Z.prototype,"hoverBridge",2);var Ch=new Map,_0=new WeakMap;function w0(e){return e??{keyframes:[],options:{duration:0}}}function Ec(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function xn(e,t){Ch.set(e,w0(t))}function cn(e,t,s){const n=_0.get(e);if(n?.[t])return Ec(n[t],s.dir);const i=Ch.get(t);return i?Ec(i,s.dir):{keyframes:[],options:{duration:0}}}function un(e,t){return new Promise(s=>{function n(i){i.target===e&&(e.removeEventListener(t,n),s())}e.addEventListener(t,n)})}function dn(e,t,s){return new Promise(n=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Ri(Ze({},s),{duration:x0()?0:s.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})})}function Ac(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function x0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function hn(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{t.cancel(),requestAnimationFrame(s)})))}function V_(e,t){return e.map(s=>Ri(Ze({},s),{height:s.height==="auto"?`${t}px`:s.height}))}var bt=class extends K{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(n,i)=>{if(!n)return null;const r=n.closest(i);if(r)return r;const o=n.getRootNode();return o instanceof ShadowRoot?s(o.host,i):null};setTimeout(()=>{var n;const i=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?c0():document.activeElement;(!this.containingElement||s(i,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),n=s[0],i=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(n=>f0(n).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,un(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,un(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await hn(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=cn(this,"dropdown.show",{dir:this.localize.dir()});await dn(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await hn(this);const{keyframes:e,options:t}=cn(this,"dropdown.hide",{dir:this.localize.dir()});await dn(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return A`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${N(this.sync?this.sync:void 0)}
        class=${ot({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};bt.styles=[at,l0];bt.dependencies={"sl-popup":Z};p([U(".dropdown")],bt.prototype,"popup",2);p([U(".dropdown__trigger")],bt.prototype,"trigger",2);p([U(".dropdown__panel")],bt.prototype,"panel",2);p([m({type:Boolean,reflect:!0})],bt.prototype,"open",2);p([m({reflect:!0})],bt.prototype,"placement",2);p([m({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);p([m({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],bt.prototype,"stayOpenOnSelect",2);p([m({attribute:!1})],bt.prototype,"containingElement",2);p([m({type:Number})],bt.prototype,"distance",2);p([m({type:Number})],bt.prototype,"skidding",2);p([m({type:Boolean})],bt.prototype,"hoist",2);p([m({reflect:!0})],bt.prototype,"sync",2);p([Y("open",{waitUntilFirstUpdate:!0})],bt.prototype,"handleOpenChange",1);xn("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});xn("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var k0=st`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function Jt(e,t,s){const n=i=>Object.is(i,-0)?0:i;return e<t?n(t):e>s?n(s):n(e)}function mt(e,t){S0(e)&&(e="100%");const s=C0(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),s&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Ui(e){return Math.min(1,Math.max(0,e))}function S0(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function C0(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Eh(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Hi(e){return Number(e)<=1?`${Number(e)*100}%`:e}function _s(e){return e.length===1?"0"+e:String(e)}function E0(e,t,s){return{r:mt(e,255)*255,g:mt(t,255)*255,b:mt(s,255)*255}}function $c(e,t,s){e=mt(e,255),t=mt(t,255),s=mt(s,255);const n=Math.max(e,t,s),i=Math.min(e,t,s);let r=0,o=0;const a=(n+i)/2;if(n===i)o=0,r=0;else{const l=n-i;switch(o=a>.5?l/(2-n-i):l/(n+i),n){case e:r=(t-s)/l+(t<s?6:0);break;case t:r=(s-e)/l+2;break;case s:r=(e-t)/l+4;break}r/=6}return{h:r,s:o,l:a}}function bo(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*(6*s):s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function A0(e,t,s){let n,i,r;if(e=mt(e,360),t=mt(t,100),s=mt(s,100),t===0)i=s,r=s,n=s;else{const o=s<.5?s*(1+t):s+t-s*t,a=2*s-o;n=bo(a,o,e+1/3),i=bo(a,o,e),r=bo(a,o,e-1/3)}return{r:n*255,g:i*255,b:r*255}}function Tc(e,t,s){e=mt(e,255),t=mt(t,255),s=mt(s,255);const n=Math.max(e,t,s),i=Math.min(e,t,s);let r=0;const o=n,a=n-i,l=n===0?0:a/n;if(n===i)r=0;else{switch(n){case e:r=(t-s)/a+(t<s?6:0);break;case t:r=(s-e)/a+2;break;case s:r=(e-t)/a+4;break}r/=6}return{h:r,s:l,v:o}}function $0(e,t,s){e=mt(e,360)*6,t=mt(t,100),s=mt(s,100);const n=Math.floor(e),i=e-n,r=s*(1-t),o=s*(1-i*t),a=s*(1-(1-i)*t),l=n%6,c=[s,o,r,r,a,s][l],u=[a,s,s,o,r,r][l],d=[r,r,a,s,s,o][l];return{r:c*255,g:u*255,b:d*255}}function Oc(e,t,s,n){const i=[_s(Math.round(e).toString(16)),_s(Math.round(t).toString(16)),_s(Math.round(s).toString(16))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function T0(e,t,s,n,i){const r=[_s(Math.round(e).toString(16)),_s(Math.round(t).toString(16)),_s(Math.round(s).toString(16)),_s(R0(n))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function O0(e,t,s,n){const i=e/100,r=t/100,o=s/100,a=n/100,l=255*(1-i)*(1-a),c=255*(1-r)*(1-a),u=255*(1-o)*(1-a);return{r:l,g:c,b:u}}function Rc(e,t,s){let n=1-e/255,i=1-t/255,r=1-s/255,o=Math.min(n,i,r);return o===1?(n=0,i=0,r=0):(n=(n-o)/(1-o)*100,i=(i-o)/(1-o)*100,r=(r-o)/(1-o)*100),o*=100,{c:Math.round(n),m:Math.round(i),y:Math.round(r),k:Math.round(o)}}function R0(e){return Math.round(parseFloat(e)*255).toString(16)}function Ic(e){return Vt(e)/255}function Vt(e){return parseInt(e,16)}function I0(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const ea={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function D0(e){let t={r:0,g:0,b:0},s=1,n=null,i=null,r=null,o=!1,a=!1;return typeof e=="string"&&(e=P0(e)),typeof e=="object"&&(zt(e.r)&&zt(e.g)&&zt(e.b)?(t=E0(e.r,e.g,e.b),o=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):zt(e.h)&&zt(e.s)&&zt(e.v)?(n=Hi(e.s),i=Hi(e.v),t=$0(e.h,n,i),o=!0,a="hsv"):zt(e.h)&&zt(e.s)&&zt(e.l)?(n=Hi(e.s),r=Hi(e.l),t=A0(e.h,n,r),o=!0,a="hsl"):zt(e.c)&&zt(e.m)&&zt(e.y)&&zt(e.k)&&(t=O0(e.c,e.m,e.y,e.k),o=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(s=e.a)),s=Eh(s),{ok:o,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:s}}const L0="[-\\+]?\\d+%?",M0="[-\\+]?\\d*\\.\\d+%?",Xe="(?:"+M0+")|(?:"+L0+")",vo="[\\s|\\(]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")\\s*\\)?",ji="[\\s|\\(]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")\\s*\\)?",Xt={CSS_UNIT:new RegExp(Xe),rgb:new RegExp("rgb"+vo),rgba:new RegExp("rgba"+ji),hsl:new RegExp("hsl"+vo),hsla:new RegExp("hsla"+ji),hsv:new RegExp("hsv"+vo),hsva:new RegExp("hsva"+ji),cmyk:new RegExp("cmyk"+ji),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function P0(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(ea[e])e=ea[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=Xt.rgb.exec(e);return s?{r:s[1],g:s[2],b:s[3]}:(s=Xt.rgba.exec(e),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=Xt.hsl.exec(e),s?{h:s[1],s:s[2],l:s[3]}:(s=Xt.hsla.exec(e),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=Xt.hsv.exec(e),s?{h:s[1],s:s[2],v:s[3]}:(s=Xt.hsva.exec(e),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=Xt.cmyk.exec(e),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=Xt.hex8.exec(e),s?{r:Vt(s[1]),g:Vt(s[2]),b:Vt(s[3]),a:Ic(s[4]),format:t?"name":"hex8"}:(s=Xt.hex6.exec(e),s?{r:Vt(s[1]),g:Vt(s[2]),b:Vt(s[3]),format:t?"name":"hex"}:(s=Xt.hex4.exec(e),s?{r:Vt(s[1]+s[1]),g:Vt(s[2]+s[2]),b:Vt(s[3]+s[3]),a:Ic(s[4]+s[4]),format:t?"name":"hex8"}:(s=Xt.hex3.exec(e),s?{r:Vt(s[1]+s[1]),g:Vt(s[2]+s[2]),b:Vt(s[3]+s[3]),format:t?"name":"hex"}:!1))))))))))}function zt(e){return typeof e=="number"?!Number.isNaN(e):Xt.CSS_UNIT.test(e)}class et{constructor(t="",s={}){if(t instanceof et)return t;typeof t=="number"&&(t=I0(t)),this.originalInput=t;const n=D0(t);this.originalInput=t,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??n.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let s,n,i;const r=t.r/255,o=t.g/255,a=t.b/255;return r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*s+.7152*n+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=Eh(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=Tc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Tc(this.r,this.g,this.b),s=Math.round(t.h*360),n=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${s}, ${n}%, ${i}%)`:`hsva(${s}, ${n}%, ${i}%, ${this.roundA})`}toHsl(){const t=$c(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=$c(this.r,this.g,this.b),s=Math.round(t.h*360),n=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${s}, ${n}%, ${i}%)`:`hsla(${s}, ${n}%, ${i}%, ${this.roundA})`}toHex(t=!1){return Oc(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return T0(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),s=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${t}, ${s}, ${n})`:`rgba(${t}, ${s}, ${n}, ${this.roundA})`}toPercentageRgb(){const t=s=>`${Math.round(mt(s,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=s=>Math.round(mt(s,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Rc(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:s,y:n,k:i}=Rc(this.r,this.g,this.b);return`cmyk(${t}, ${s}, ${n}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Oc(this.r,this.g,this.b,!1);for(const[s,n]of Object.entries(ea))if(t===n)return s;return!1}toString(t){const s=!!t;t=t??this.format;let n=!1;const i=this.a<1&&this.a>=0;return!s&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),t==="cmyk"&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new et(this.toString())}lighten(t=10){const s=this.toHsl();return s.l+=t/100,s.l=Ui(s.l),new et(s)}brighten(t=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(t/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(t/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(t/100)))),new et(s)}darken(t=10){const s=this.toHsl();return s.l-=t/100,s.l=Ui(s.l),new et(s)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const s=this.toHsl();return s.s-=t/100,s.s=Ui(s.s),new et(s)}saturate(t=10){const s=this.toHsl();return s.s+=t/100,s.s=Ui(s.s),new et(s)}greyscale(){return this.desaturate(100)}spin(t){const s=this.toHsl(),n=(s.h+t)%360;return s.h=n<0?360+n:n,new et(s)}mix(t,s=50){const n=this.toRgb(),i=new et(t).toRgb(),r=s/100,o={r:(i.r-n.r)*r+n.r,g:(i.g-n.g)*r+n.g,b:(i.b-n.b)*r+n.b,a:(i.a-n.a)*r+n.a};return new et(o)}analogous(t=6,s=30){const n=this.toHsl(),i=360/s,r=[this];for(n.h=(n.h-(i*t>>1)+720)%360;--t;)n.h=(n.h+i)%360,r.push(new et(n));return r}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new et(t)}monochromatic(t=6){const s=this.toHsv(),{h:n}=s,{s:i}=s;let{v:r}=s;const o=[],a=1/t;for(;t--;)o.push(new et({h:n,s:i,v:r})),r=(r+a)%1;return o}splitcomplement(){const t=this.toHsl(),{h:s}=t;return[this,new et({h:(s+72)%360,s:t.s,l:t.l}),new et({h:(s+216)%360,s:t.s,l:t.l})]}onBackground(t){const s=this.toRgb(),n=new et(t).toRgb(),i=s.a+n.a*(1-s.a);return new et({r:(s.r*s.a+n.r*n.a*(1-s.a))/i,g:(s.g*s.a+n.g*n.a*(1-s.a))/i,b:(s.b*s.a+n.b*n.a*(1-s.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const s=this.toHsl(),{h:n}=s,i=[this],r=360/t;for(let o=1;o<t;o++)i.push(new et({h:(n+o*r)%360,s:s.s,l:s.l}));return i}equals(t){const s=new et(t);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var Dc="EyeDropper"in window,z=class extends K{constructor(){super(),this.formControlController=new Zr(this),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let i=this.value,r=this.value;s.focus(),e.preventDefault(),go(t,{onMove:o=>{this.alpha=Jt(o/n*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let i=this.value,r=this.value;s.focus(),e.preventDefault(),go(t,{onMove:o=>{this.hue=Jt(o/n*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),s=t.querySelector(".color-picker__grid-handle"),{width:n,height:i}=t.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,go(t,{onMove:(a,l)=>{this.saturation=Jt(a/n*100,0,100),this.brightness=Jt(100-l/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Jt(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Jt(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Jt(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Jt(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Jt(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Jt(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Jt(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Jt(this.brightness-t,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,s=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new et(e);if(!t.isValid)return null;const s=t.toHsl(),n={h:s.h,s:s.s*100,l:s.l*100,a:s.a},i=t.toRgb(),r=t.toHexString(),o=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(o)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Dc)return;new EyeDropper().open().then(t=>{const s=this.value;this.setColor(t.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,s,n=100){const i=new et(`hsva(${e}, ${t}%, ${s}%, ${n/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(t);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(i=>i.trim()!==""),n=A`
      <div
        part="base"
        class=${ot({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?A`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${It({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${ot({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${It({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${N(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${It({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${N(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?A`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${It({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${It({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${N(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${It({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":A`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Dc?A`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${s.length>0?A`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(i=>{const r=this.parseColor(i);return r?A`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${N(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${i}
                      @click=${()=>this.selectSwatch(i)}
                      @keydown=${o=>!this.disabled&&o.key==="Enter"&&this.setColor(r.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${It({backgroundColor:r.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${i}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?n:A`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${ot({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${It({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${n}
      </sl-dropdown>
    `}};z.styles=[at,k0];z.dependencies={"sl-button-group":wn,"sl-button":H,"sl-dropdown":bt,"sl-icon":Ot,"sl-input":P,"sl-visually-hidden":_h};p([U('[part~="base"]')],z.prototype,"base",2);p([U('[part~="input"]')],z.prototype,"input",2);p([U(".color-dropdown")],z.prototype,"dropdown",2);p([U('[part~="preview"]')],z.prototype,"previewButton",2);p([U('[part~="trigger"]')],z.prototype,"trigger",2);p([Q()],z.prototype,"hasFocus",2);p([Q()],z.prototype,"isDraggingGridHandle",2);p([Q()],z.prototype,"isEmpty",2);p([Q()],z.prototype,"inputValue",2);p([Q()],z.prototype,"hue",2);p([Q()],z.prototype,"saturation",2);p([Q()],z.prototype,"brightness",2);p([Q()],z.prototype,"alpha",2);p([m()],z.prototype,"value",2);p([wh()],z.prototype,"defaultValue",2);p([m()],z.prototype,"label",2);p([m()],z.prototype,"format",2);p([m({type:Boolean,reflect:!0})],z.prototype,"inline",2);p([m({reflect:!0})],z.prototype,"size",2);p([m({attribute:"no-format-toggle",type:Boolean})],z.prototype,"noFormatToggle",2);p([m()],z.prototype,"name",2);p([m({type:Boolean,reflect:!0})],z.prototype,"disabled",2);p([m({type:Boolean})],z.prototype,"hoist",2);p([m({type:Boolean})],z.prototype,"opacity",2);p([m({type:Boolean})],z.prototype,"uppercase",2);p([m()],z.prototype,"swatches",2);p([m({reflect:!0})],z.prototype,"form",2);p([m({type:Boolean,reflect:!0})],z.prototype,"required",2);p([$d({passive:!1})],z.prototype,"handleTouchMove",1);p([Y("format",{waitUntilFirstUpdate:!0})],z.prototype,"handleFormatChange",1);p([Y("opacity",{waitUntilFirstUpdate:!0})],z.prototype,"handleOpacityChange",1);p([Y("value")],z.prototype,"handleValueChange",1);z.define("sl-color-picker");var N0=st`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,qr=class extends K{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};qr.styles=[at,N0];p([m({type:Boolean,reflect:!0})],qr.prototype,"vertical",2);p([Y("vertical")],qr.prototype,"handleVerticalChange",1);qr.define("sl-divider");bt.define("sl-dropdown");Ot.define("sl-icon");var z0=st`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,St=class extends K{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?gr`a`:gr`button`;return Ji`
      <${t}
        part="base"
        class=${ot({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:"button")}
        href=${N(e?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e&&this.target?"noreferrer noopener":void 0)}
        role=${N(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${N(this.name)}
          library=${N(this.library)}
          src=${N(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};St.styles=[at,z0];St.dependencies={"sl-icon":Ot};p([U(".icon-button")],St.prototype,"button",2);p([Q()],St.prototype,"hasFocus",2);p([m()],St.prototype,"name",2);p([m()],St.prototype,"library",2);p([m()],St.prototype,"src",2);p([m()],St.prototype,"href",2);p([m()],St.prototype,"target",2);p([m()],St.prototype,"download",2);p([m()],St.prototype,"label",2);p([m({type:Boolean,reflect:!0})],St.prototype,"disabled",2);St.define("sl-icon-button");var V0=st`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,ol=class extends K{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath(),n=s.find(a=>{var l;return t.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!n||s.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const o=n;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let n=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?n++:e.key==="ArrowUp"?n--:e.key==="Home"?n=0:e.key==="End"&&(n=t.length-1),n<0&&(n=t.length-1),n>t.length-1&&(n=0),this.setCurrentItem(t[n]),t[n].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return A`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ol.styles=[at,V0];p([U("slot")],ol.prototype,"defaultSlot",2);ol.define("sl-menu");var B0=st`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,F0=class{constructor(e,t){this.popupRef=Oy(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var n;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(n=s.target.role)!=null&&n.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),n=s?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],i=getComputedStyle(this.host).direction==="rtl";if(!n)return;const{left:r,top:o,width:a,height:l}=n.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?r+a:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?r+a:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const n of t.assignedElements())if(s=n.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let n=1;n!==s.length;++n)s[n].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),n=["padding-top","border-top-width","margin-top"].reduce((i,r)=>{var o;const a=(o=t.get(r))!=null?o:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return i-c.value},0);this.skidding=n}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?A`
      <sl-popup
        ${Iy(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:A` <slot name="submenu" hidden></slot> `}},qt=class extends K{constructor(){super(...arguments),this.localize=new ie(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Wr(this,"submenu"),this.submenuController=new F0(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Gy(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return A`
      <div
        id="anchor"
        part="base"
        class=${ot({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?A` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};qt.styles=[at,B0];qt.dependencies={"sl-icon":Ot,"sl-popup":Z,"sl-spinner":il};p([U("slot:not([name])")],qt.prototype,"defaultSlot",2);p([U(".menu-item")],qt.prototype,"menuItem",2);p([m()],qt.prototype,"type",2);p([m({type:Boolean,reflect:!0})],qt.prototype,"checked",2);p([m()],qt.prototype,"value",2);p([m({type:Boolean,reflect:!0})],qt.prototype,"loading",2);p([m({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);p([Y("checked")],qt.prototype,"handleCheckedChange",1);p([Y("disabled")],qt.prototype,"handleDisabledChange",1);p([Y("type")],qt.prototype,"handleTypeChange",1);qt.define("sl-menu-item");var U0=st`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Fs=class extends K{constructor(){super(...arguments),this.localize=new ie(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return A`
      <span
        part="base"
        class=${ot({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?A`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Fs.styles=[at,U0];Fs.dependencies={"sl-icon-button":St};p([m({reflect:!0})],Fs.prototype,"variant",2);p([m({reflect:!0})],Fs.prototype,"size",2);p([m({type:Boolean,reflect:!0})],Fs.prototype,"pill",2);p([m({type:Boolean})],Fs.prototype,"removable",2);var H0=st`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function j0(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var sa=new Set;function Z0(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function W0(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function B_(e){if(sa.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Z0()+W0();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function F_(e){sa.delete(e),sa.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function na(e,t,s="vertical",n="smooth"){const i=j0(e,t),r=i.top+t.scrollTop,o=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,u=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(o<a?t.scrollTo({left:o,behavior:n}):o+e.clientWidth>l&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:n})),(s==="vertical"||s==="both")&&(r<c?t.scrollTo({top:r,behavior:n}):r+e.clientHeight>u&&t.scrollTo({top:r-t.offsetHeight+e.clientHeight,behavior:n}))}var V=class extends K{constructor(){super(...arguments),this.formControlController=new Zr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Wr(this,"help-text","label"),this.localize=new ie(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>A`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,n=t.closest("sl-icon-button")!==null;if(!(s||n)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),r=i.indexOf(this.currentOption);let o=Math.max(0,r);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(o=r+1,o>i.length-1&&(o=0)):e.key==="ArrowUp"?(o=r-1,o<0&&(o=i.length-1)):e.key==="Home"?o=0:e.key==="End"&&(o=i.length-1),this.setCurrentOption(i[o])}if(e.key&&e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const r of i)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(n=>n instanceof Element&&n.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),n=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(t)?t:[t],n=[];e.forEach(i=>n.push(i.value)),this.setSelectedOptions(e.filter(i=>s.includes(i.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(n=>n.selected=!1),s.length&&s.forEach(n=>n.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s;const n=this.getAllOptions();this.selectedOptions=n.filter(r=>r.selected);const i=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(r=>r.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const r=this.selectedOptions[0];this.value=(e=r?.value)!=null?e:"",this.displayLabel=(s=(t=r?.getTextLabel)==null?void 0:t.call(r))!=null?s:""}this.valueHasChanged=i,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return A`<div @sl-remove=${n=>this.handleTagRemove(n,e)}>
          ${typeof s=="string"?Ly(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return A`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return A``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,s){if(super.attributeChangedCallback(e,t,s),e==="value"){const n=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=n}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await hn(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=cn(this,"select.show",{dir:this.localize.dir()});await dn(this.popup.popup,e,t),this.currentOption&&na(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await hn(this);const{keyframes:e,options:t}=cn(this,"select.hide",{dir:this.localize.dir()});await dn(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,un(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,un(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,n=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return A`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":n})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${ot({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?A`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?A`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};V.styles=[at,xh,H0];V.dependencies={"sl-icon":Ot,"sl-popup":Z,"sl-tag":Fs};p([U(".select")],V.prototype,"popup",2);p([U(".select__combobox")],V.prototype,"combobox",2);p([U(".select__display-input")],V.prototype,"displayInput",2);p([U(".select__value-input")],V.prototype,"valueInput",2);p([U(".select__listbox")],V.prototype,"listbox",2);p([Q()],V.prototype,"hasFocus",2);p([Q()],V.prototype,"displayLabel",2);p([Q()],V.prototype,"currentOption",2);p([Q()],V.prototype,"selectedOptions",2);p([Q()],V.prototype,"valueHasChanged",2);p([m()],V.prototype,"name",2);p([Q()],V.prototype,"value",1);p([m({attribute:"value"})],V.prototype,"defaultValue",2);p([m({reflect:!0})],V.prototype,"size",2);p([m()],V.prototype,"placeholder",2);p([m({type:Boolean,reflect:!0})],V.prototype,"multiple",2);p([m({attribute:"max-options-visible",type:Number})],V.prototype,"maxOptionsVisible",2);p([m({type:Boolean,reflect:!0})],V.prototype,"disabled",2);p([m({type:Boolean})],V.prototype,"clearable",2);p([m({type:Boolean,reflect:!0})],V.prototype,"open",2);p([m({type:Boolean})],V.prototype,"hoist",2);p([m({type:Boolean,reflect:!0})],V.prototype,"filled",2);p([m({type:Boolean,reflect:!0})],V.prototype,"pill",2);p([m()],V.prototype,"label",2);p([m({reflect:!0})],V.prototype,"placement",2);p([m({attribute:"help-text"})],V.prototype,"helpText",2);p([m({reflect:!0})],V.prototype,"form",2);p([m({type:Boolean,reflect:!0})],V.prototype,"required",2);p([m()],V.prototype,"getTag",2);p([Y("disabled",{waitUntilFirstUpdate:!0})],V.prototype,"handleDisabledChange",1);p([Y(["defaultValue","value"],{waitUntilFirstUpdate:!0})],V.prototype,"handleValueChange",1);p([Y("open",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpenChange",1);xn("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});xn("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});V.define("sl-select");var q0=st`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Y0=0,ge=class extends K{constructor(){super(...arguments),this.localize=new ie(this),this.attrId=++Y0,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,A`
      <div
        part="base"
        class=${ot({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?A`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ge.styles=[at,q0];ge.dependencies={"sl-icon-button":St};p([U(".tab")],ge.prototype,"tab",2);p([m({reflect:!0})],ge.prototype,"panel",2);p([m({type:Boolean,reflect:!0})],ge.prototype,"active",2);p([m({type:Boolean,reflect:!0})],ge.prototype,"closable",2);p([m({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);p([m({type:Number,reflect:!0})],ge.prototype,"tabIndex",2);p([Y("active")],ge.prototype,"handleActiveChange",1);p([Y("disabled")],ge.prototype,"handleDisabledChange",1);ge.define("sl-tab");var G0=st`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,K0=st`
  :host {
    display: contents;
  }
`,Yr=class extends K{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],t.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};Yr.styles=[at,K0];p([m({type:Boolean,reflect:!0})],Yr.prototype,"disabled",2);p([Y("disabled",{waitUntilFirstUpdate:!0})],Yr.prototype,"handleDisabledChange",1);var vt=class extends K{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ie(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const s=t.filter(({target:n})=>{if(n===this)return!0;if(n.closest("sl-tab-group")!==this)return!1;const i=n.tagName.toLowerCase();return i==="sl-tab"||i==="sl-tab-panel"});if(s.length!==0){if(s.some(n=>!["aria-labelledby","aria-controls"].includes(n.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(n=>n.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(n=>n.attributeName==="active")){const i=s.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="sl-tab").map(r=>r.target).find(r=>r.active);i&&this.setActiveTab(i)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((s,n)=>{var i;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),n.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const s=e.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(e){const s=e.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(a=>a.matches(":focus")),r=this.localize.dir()==="rtl";let o=null;if(i?.tagName.toLowerCase()==="sl-tab"){if(e.key==="Home")o=this.focusableTabs[0];else if(e.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===i);o=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===i);o=this.findNextFocusableTab(a,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===o?0:-1}),["top","bottom"].includes(this.placement)&&na(o,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Ze({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const s=this.activeTab;this.activeTab=e,this.tabs.forEach(n=>{n.active=n===this.activeTab,n.tabIndex=n===this.activeTab?0:-1}),this.panels.forEach(n=>{var i;return n.active=n.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&na(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(s=>s.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,s=e.clientHeight,n=this.localize.dir()==="rtl",i=this.getAllTabs(),o=i.slice(0,i.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=n?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let s=null;const n=t==="forward"?1:-1;let i=e+n;for(;e<this.tabs.length;){if(s=this.tabs[i]||null,s===null){t==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;i+=n}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(s=>s.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        class=${ot({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${ot({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${ot({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};vt.styles=[at,G0];vt.dependencies={"sl-icon-button":St,"sl-resize-observer":Yr};p([U(".tab-group")],vt.prototype,"tabGroup",2);p([U(".tab-group__body")],vt.prototype,"body",2);p([U(".tab-group__nav")],vt.prototype,"nav",2);p([U(".tab-group__indicator")],vt.prototype,"indicator",2);p([Q()],vt.prototype,"hasScrollControls",2);p([Q()],vt.prototype,"shouldHideScrollStartButton",2);p([Q()],vt.prototype,"shouldHideScrollEndButton",2);p([m()],vt.prototype,"placement",2);p([m()],vt.prototype,"activation",2);p([m({attribute:"no-scroll-controls",type:Boolean})],vt.prototype,"noScrollControls",2);p([m({attribute:"fixed-scroll-controls",type:Boolean})],vt.prototype,"fixedScrollControls",2);p([$d({passive:!0})],vt.prototype,"updateScrollButtons",1);p([Y("noScrollControls",{waitUntilFirstUpdate:!0})],vt.prototype,"updateScrollControls",1);p([Y("placement",{waitUntilFirstUpdate:!0})],vt.prototype,"syncIndicator",1);vt.define("sl-tab-group");var J0=(e,t)=>{let s=0;return function(...n){window.clearTimeout(s),s=window.setTimeout(()=>{e.call(this,...n)},t)}},Lc=(e,t,s)=>{const n=e[t];e[t]=function(...i){n.call(this,...i),s.call(this,n,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,s=new WeakMap,n=r=>{for(const o of r.changedTouches)t.add(o.identifier)},i=r=>{for(const o of r.changedTouches)t.delete(o.identifier)};document.addEventListener("touchstart",n,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),Lc(EventTarget.prototype,"addEventListener",function(r,o){if(o!=="scrollend")return;const a=J0(()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",a,{passive:!0}),s.set(this,a)}),Lc(EventTarget.prototype,"removeEventListener",function(r,o){if(o!=="scrollend")return;const a=s.get(this);a&&r.call(this,"scroll",a,{passive:!0})})}})();var X0=st`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,yt=class extends K{constructor(){super(),this.localize=new ie(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Ac(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Ac(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await hn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:n}=cn(this,"tooltip.show",{dir:this.localize.dir()});await dn(this.popup.popup,s,n),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await hn(this.body);const{keyframes:s,options:n}=cn(this,"tooltip.hide",{dir:this.localize.dir()});await dn(this.popup.popup,s,n),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,un(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,un(this,"sl-after-hide")}render(){return A`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ot({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};yt.styles=[at,X0];yt.dependencies={"sl-popup":Z};p([U("slot:not([name])")],yt.prototype,"defaultSlot",2);p([U(".tooltip__body")],yt.prototype,"body",2);p([U("sl-popup")],yt.prototype,"popup",2);p([m()],yt.prototype,"content",2);p([m()],yt.prototype,"placement",2);p([m({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);p([m({type:Number})],yt.prototype,"distance",2);p([m({type:Boolean,reflect:!0})],yt.prototype,"open",2);p([m({type:Number})],yt.prototype,"skidding",2);p([m()],yt.prototype,"trigger",2);p([m({type:Boolean})],yt.prototype,"hoist",2);p([Y("open",{waitUntilFirstUpdate:!0})],yt.prototype,"handleOpenChange",1);p([Y(["content","distance","hoist","placement","skidding"])],yt.prototype,"handleOptionsChange",1);p([Y("disabled")],yt.prototype,"handleDisabledChange",1);xn("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});xn("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});yt.define("sl-tooltip");var Q0=st`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,t_=0,Ii=class extends K{constructor(){super(...arguments),this.attrId=++t_,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return A`
      <slot
        part="base"
        class=${ot({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ii.styles=[at,Q0];p([m({reflect:!0})],Ii.prototype,"name",2);p([m({type:Boolean,reflect:!0})],Ii.prototype,"active",2);p([Y("active")],Ii.prototype,"handleActiveChange",1);Ii.define("sl-tab-panel");export{x_ as $,go as A,Yr as B,$d as C,It as D,Ly as E,Zr as F,Yy as G,Wr as H,Ji as I,wn as J,z_ as K,ie as L,N_ as M,rl as N,Z as O,P,c0 as Q,g0 as R,Ot as S,kh as T,St as U,B_ as V,F_ as W,un as X,yt as Y,x0 as Z,p as _,Qf as a,ii as a$,M_ as a0,ds as a1,Ap as a2,Od as a3,qa as a4,cv as a5,ps as a6,G as a7,T_ as a8,Mr as a9,Re as aA,l_ as aB,Rf as aC,vd as aD,Td as aE,S_ as aF,Eb as aG,Pe as aH,e_ as aI,Wm as aJ,E_ as aK,$b as aL,Ob as aM,br as aN,Tt as aO,yd as aP,Sy as aQ,Ty as aR,Cy as aS,O_ as aT,Ey as aU,yc as aV,C_ as aW,Tb as aX,ci as aY,J as aZ,ni as a_,w_ as aa,Ut as ab,s_ as ac,n_ as ad,it as ae,pt as af,ss as ag,Os as ah,Qu as ai,Le as aj,Me as ak,Pr as al,ad as am,ki as an,Mo as ao,Lo as ap,No as aq,Pl as ar,Rg as as,d_ as at,u_ as au,Po as av,Ag as aw,Xn as ax,c_ as ay,h_ as az,Jf as b,a_ as b0,gd as b1,_m as b2,md as b3,bd as b4,bm as b5,vm as b6,vn as b7,yn as b8,Ed as b9,ts as bA,If as bB,Kr as bC,T as bD,xs as bE,fn as bF,Qt as bG,L as bH,ks as bI,xt as bJ,_u as bK,Lp as bL,Rp as bM,o_ as bN,xc as bO,$_ as ba,db as bb,Oy as bc,Iy as bd,Ay as be,f_ as bf,Oa as bg,lv as bh,Ci as bi,I_ as bj,dv as bk,gr as bl,Pt as bm,ib as bn,ob as bo,Sn as bp,m_ as bq,g_ as br,$y as bs,D_ as bt,Jo as bu,R_ as bv,A_ as bw,Eo as bx,Co as by,i_ as bz,at as c,U as d,sp as e,xh as f,wh as g,K as h,st as i,ot as j,il as k,Dy as l,hn as m,m as n,N as o,cn as p,dn as q,Q as r,xn as s,V_ as t,k_ as u,Jt as v,Y as w,A as x,_h as y,Fs as z};
//# sourceMappingURL=chunk.RY756JLP-BglrZjuI.js.map
