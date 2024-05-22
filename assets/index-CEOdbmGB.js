import{I as X,r as S,M as fe,K as me,O as de,P as pe,T as Y,U as ee,V as F,Z as he,_ as xe,a0 as ge,a1 as ye,a2 as K,a3 as be,a4 as ve,a5 as we,a6 as Ae,a7 as Ne,a8 as Ce,a9 as Se,aa as te,ab as je,ac as Ve,ad as Ee,ae as Ie,af as ne,ag as Me,j as i,m as Te,ah as De}from"./index-DS6qm14V.js";import{H as I,C as D,c as R}from"./index-B3S6f_Ni.js";import{N as Re,D as qe,S as q,A as Le}from"./index-Dlsx_GZD.js";function se(e){const t=X(()=>me(e)),{isStatic:n}=S.useContext(fe);if(n){const[,s]=S.useState(e);S.useEffect(()=>t.on("change",s),[])}return t}const Fe=e=>e&&typeof e=="object"&&e.mix,Ke=e=>Fe(e)?e.mix:void 0;function Pe(...e){const t=!Array.isArray(e[0]),n=t?0:-1,s=e[0+n],o=e[1+n],r=e[2+n],a=e[3+n],c=de(o,r,{mixer:Ke(r[0]),...a});return t?c(s):c}function oe(e,t){const n=se(t()),s=()=>n.set(t());return s(),pe(()=>{const o=()=>ee.preRender(s,!1,!0),r=e.map(a=>a.on("change",o));return()=>{r.forEach(a=>a()),Y(s)}}),n}function _e(e){F.current=[],e();const t=oe(F.current,e);return F.current=void 0,t}function Ge(e,t,n,s){if(typeof e=="function")return _e(e);const o=typeof t=="function"?t:Pe(t,n,s);return Array.isArray(e)?Z(e,o):Z([e],([r])=>o(r))}function Z(e,t){const n=X(()=>[]);return oe(e,()=>{n.length=0;const s=e.length;for(let o=0;o<s;o++)n[o]=e[o].get();return t(n)})}function P(e,t,n){var s;if(typeof e=="string"){let o=document;n?((s=n[e])!==null&&s!==void 0||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}function ke(e,t){let n;const s=()=>{const{currentTime:o}=t,a=(o===null?0:o.value)/100;n!==a&&e(a),n=a};return ee.update(s,!0),()=>Y(s)}const ze=he(()=>window.ScrollTimeline!==void 0);class ae{constructor(t){this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let s=0;s<this.animations.length;s++)this.animations[s][t]=n}attachTimeline(t){const n=this.animations.map(s=>{if(ze()&&s.attachTimeline)s.attachTimeline(t);else return s.pause(),ke(o=>{s.time=s.duration*o},t)});return()=>{n.forEach((s,o)=>{s&&s(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function He(e){return typeof e=="object"&&!Array.isArray(e)}function Oe(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=xe(e)?new ge(t,{enableHardwareAcceleration:!1}):new ye(t,{enableHardwareAcceleration:!0});n.mount(e),K.set(e,n)}function Be(e,t=100){const n=be({keyframes:[0,t],...e}),s=Math.min(ve(n),we);return{type:"keyframes",ease:o=>n.next(s*o).value/t,duration:Ae(s)}}function $(e,t,n,s){var o;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:(o=s.get(t))!==null&&o!==void 0?o:e}const We=(e,t,n)=>{const s=t-e;return((n-e)%s+s)%s+e};function Ue(e,t){return Ne(e)?e[We(0,e.length,t)]:e}function Ze(e,t,n){for(let s=0;s<e.length;s++){const o=e[s];o.at>t&&o.at<n&&(Se(e,o),s--)}}function $e(e,t,n,s,o,r){Ze(e,o,r);for(let a=0;a<t.length;a++)e.push({value:t[a],at:Ce(o,r,s[a]),easing:Ue(n,a)})}function Je(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const Qe="easeInOut";function Xe(e,{defaultTransition:t={},...n}={},s){const o=t.duration||.3,r=new Map,a=new Map,c={},u=new Map;let x=0,l=0,y=0;for(let g=0;g<e.length;g++){const d=e[g];if(typeof d=="string"){u.set(d,l);continue}else if(!Array.isArray(d)){u.set(d.name,$(l,d.at,x,u));continue}let[b,h,m={}]=d;m.at!==void 0&&(l=$(l,m.at,x,u));let f=0;const N=(v,w,C,V=0,E=0)=>{const p=Ye(v),{delay:L=0,times:j=Ve(p),type:le="keyframes",...ce}=w;let{ease:_=t.ease||"easeOut",duration:A}=w;const G=typeof L=="function"?L(V,E):L,k=p.length;if(k<=2&&le==="spring"){let B=100;if(k===2&&nt(p)){const ue=p[1]-p[0];B=Math.abs(ue)}const W={...ce};A!==void 0&&(W.duration=Ie(A));const U=Be(W,B);_=U.ease,A=U.duration}A??(A=o);const z=l+G,H=z+A;j.length===1&&j[0]===0&&(j[1]=1);const O=j.length-p.length;O>0&&Ee(j,O),p.length===1&&p.unshift(null),$e(C,p,_,j,z,H),f=Math.max(G+A,f),y=Math.max(H,y)};if(te(b)){const v=J(b,a);N(h,m,Q("default",v))}else{const v=P(b,s,c),w=v.length;for(let C=0;C<w;C++){h=h,m=m;const V=v[C],E=J(V,a);for(const p in h)N(h[p],et(m,p),Q(p,E),C,w)}}x=l,l+=f}return a.forEach((g,d)=>{for(const b in g){const h=g[b];h.sort(Je);const m=[],f=[],N=[];for(let w=0;w<h.length;w++){const{at:C,value:V,easing:E}=h[w];m.push(V),f.push(je(0,y,C)),N.push(E||"easeOut")}f[0]!==0&&(f.unshift(0),m.unshift(m[0]),N.unshift(Qe)),f[f.length-1]!==1&&(f.push(1),m.push(null)),r.has(d)||r.set(d,{keyframes:{},transition:{}});const v=r.get(d);v.keyframes[b]=m,v.transition[b]={...t,duration:y,ease:N,times:f,...n}}}),r}function J(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function Q(e,t){return t[e]||(t[e]=[]),t[e]}function Ye(e){return Array.isArray(e)?e:[e]}function et(e,t){return e[t]?{...e,...e[t]}:{...e}}const tt=e=>typeof e=="number",nt=e=>e.every(tt);function re(e,t,n,s){const o=P(e),r=o.length,a=[];for(let c=0;c<r;c++){const u=o[c];K.has(u)||Oe(u);const x=K.get(u),l={...n};typeof l.delay=="function"&&(l.delay=l.delay(c,r)),a.push(...Me(x,{...t,transition:l},{}))}return new ae(a)}const st=e=>Array.isArray(e)&&Array.isArray(e[0]);function ot(e,t,n){const s=[];return Xe(e,t,n).forEach(({keyframes:r,transition:a},c)=>{let u;te(c)?u=ne(c,r.default,a.default):u=re(c,r,a),s.push(u)}),new ae(s)}const at=e=>{function t(n,s,o){let r;return st(n)?r=ot(n,s,e):He(s)?r=re(n,s,o):r=ne(n,s,o),r}return t},rt=at(),it={some:0,all:1};function lt(e,t,{root:n,margin:s,amount:o="some"}={}){const r=P(e),a=new WeakMap,c=x=>{x.forEach(l=>{const y=a.get(l.target);if(l.isIntersecting!==!!y)if(l.isIntersecting){const g=t(l);typeof g=="function"?a.set(l.target,g):u.unobserve(l.target)}else y&&(y(l),a.delete(l.target))})},u=new IntersectionObserver(c,{root:n,rootMargin:s,threshold:typeof o=="number"?o:it[o]});return r.forEach(x=>u.observe(x)),()=>u.disconnect()}function ct(e,{root:t,margin:n,amount:s,once:o=!1}={}){const[r,a]=S.useState(!1);return S.useEffect(()=>{if(!e.current||o&&r)return;const c=()=>(a(!0),o?void 0:()=>a(!1)),u={root:t&&t.current||void 0,margin:n,amount:s};return lt(e.current,c,u)},[t,e,n,o,s]),r}const ie=S.forwardRef((e,t)=>{const{from:n=0,decimal:s=0,to:o,isInView:r,duration:a=2e3,delay:c=0,prefix:u,suffix:x,className:l,style:y,onComplete:g}=e,d=se(n),b=Ge(d,f=>f.toFixed(s)),h=S.useRef(null),m=ct(h);return S.useEffect(()=>{const f=rt(d,o,{duration:a/1e3,delay:c/1e3,ease:"circOut",onUpdate:N=>{N===o&&g?.()}});return r&&(f.pause(),m&&f.play()),()=>f.stop()},[n,o,a,c,d,r,m]),i.jsxs("div",{ref:h,className:l,style:y,children:[u,i.jsx(Te.div,{className:"counter__value",ref:t,children:b}),x]})});ie.displayName="Counter";const M=ie,ut=`\`\`\`ts
import Counter from 'your path/Counter';
import clsx from 'clsx';
const countStyle =
'bg-white w-[140px] text-[42px] inline-flex rounded-3 justify-center items-end font-bold border p-6 [&_div]:leading-[1]';
export default function Demo() {
  return (
    <Counter className={countStyle} to={100} />
  )
}
\`\`\`
`,ft=`\`\`\`ts
import Counter from 'your path/Counter';
import clsx from 'clsx';
import { RiTempColdLine } from '@remixicon/react';
export default function Demo() {
  return (
    <div className="flex gap-4">
      <Counter
        className={clsx(countStyle, 'w-[170px]')}
        from={-12}
        to={42}
        prefix={<RiTempColdLine className="mr-1" size={24} />}
      />
      <Counter
        className={clsx(countStyle, 'w-[170px]')}
        from={0}
        to={100}
        suffix={<span className="text-sm ml-2">元</span>}
      />
    </div>
  )
}
\`\`\`
`,mt=`\`\`\`ts
import Counter from 'your path/Counter';
import clsx from 'clsx';
export default function Demo() {
  return (
    <Counter className={clsx(countStyle, 'w-[200px]')} from={0} to={100} decimal={2} />
  )
}
\`\`\`
`,dt=`\`\`\`ts
import Counter from 'your path/Counter';
import clsx from 'clsx';
export default function Demo() {
  return (
    <div className="h-[300px] overflow-auto mb-10">
      <div className="h-[1000px] bg-zinc-100 relative">
        <Counter
          className={clsx(countStyle, 'absolute left-2 bottom-2')}
          to={100}
          isInView
          delay={1000}
          duration={3000}
          onComplete={() => console.log('complete')}
        />
      </div>
    </div>
  )
}
\`\`\`
`,pt=[{prop:"from",desc:"start value of counter, default is 0",type:"number",required:!1,default:"0"},{prop:"to",desc:"end value of counter",type:"number",required:!0,default:"-"},{prop:"decimal",desc:"number of decimals to display, default is 0",type:"number",required:!1,default:"0"},{prop:"duration",desc:"duration of the animation in milliseconds",type:"number",required:!1,default:"2000"},{prop:"delay",desc:"delay before the animation starts in milliseconds",type:"number",required:!1,default:"0"},{prop:"prefix",desc:"prefix of the counter value",type:"React.ReactNode",required:!1,default:"-"},{prop:"suffix",desc:"suffix of the counter value",type:"React.ReactNode",required:!1,default:"-"},{prop:"isInView",desc:"whether animation starts when it scroll into viewport",type:"boolean",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onComplete",desc:"callback function when the animation completes",type:"() => void",required:!1,default:"-"}],T="bg-white w-[140px] text-[42px] inline-flex rounded-3 justify-center items-end font-bold border p-6 [&_div]:leading-[1]";function yt(){return i.jsxs(i.Fragment,{children:[i.jsx(Re,{title:"Counter",sourceName:"Counter"}),i.jsx(qe,{children:"A component allows for animating number from one state to another"}),i.jsxs(q,{className:"mb-4",children:[i.jsx(I,{as:"h4",className:"mb-2",children:"basic"}),i.jsx(M,{className:T,to:100}),i.jsx(D,{content:ut})]}),i.jsxs(q,{className:"mb-4",children:[i.jsx(I,{as:"h4",className:"mb-2",children:"prefix and suffix"}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx(M,{className:R(T,"w-[170px]"),from:-12,to:42,prefix:i.jsx(De,{className:"mr-1",size:24})}),i.jsx(M,{className:R(T,"w-[170px]"),from:0,to:100,suffix:i.jsx("span",{className:"text-sm ml-2",children:"元"})})]}),i.jsx(D,{content:ft})]}),i.jsxs(q,{className:"mb-4",children:[i.jsx(I,{as:"h4",className:"mb-2",children:"decimal"}),i.jsx(M,{className:R(T,"w-[200px]"),from:0,to:100,decimal:2}),i.jsx(D,{content:mt})]}),i.jsxs(q,{className:"mb-4 min-h-[380px]",children:[i.jsx(I,{as:"h4",className:"mb-2",children:"isInView"}),i.jsx("div",{className:"h-[300px] overflow-auto mb-10",children:i.jsx("div",{className:"h-[1000px] bg-zinc-100 relative",children:i.jsx(M,{className:R(T,"absolute left-2 bottom-2"),to:100,isInView:!0,delay:1e3,duration:3e3,onComplete:()=>console.log("complete")})})}),i.jsx(D,{content:dt})]}),i.jsx(I,{as:"h2",className:"mb-4",children:"API"}),i.jsx(Le,{rows:pt})]})}export{yt as default};
