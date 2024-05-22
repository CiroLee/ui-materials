import{r as s,d as ue,j as t}from"./index-DS6qm14V.js";import{N as fe,D as me,S as C,A as pe}from"./index-Dlsx_GZD.js";import{c as xe,H as E,C as P}from"./index-B3S6f_Ni.js";import{$ as he,a as K,_ as D,b as H}from"./index-DxDs9eJJ.js";import{a as be,$ as k,b as Se}from"./index-BFn4IUUH.js";import{$ as ve,a as $e}from"./index-Dz-xE_2J.js";import{$ as ge}from"./index-BVjPIHQF.js";import{S as we}from"./index-WaRToqb7.js";import"./index-MDj1YPAE.js";function J(e,[n,a]){return Math.min(a,Math.max(n,e))}const Q=["PageUp","PageDown"],Z=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ee={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},T="Slider",[L,ye,Ve]=ve(T),[te,ft]=he(T,[Ve]),[je,q]=te(T),Ee=s.forwardRef((e,n)=>{const{name:a,min:r=0,max:l=100,step:o=1,orientation:c="horizontal",disabled:d=!1,minStepsBetweenThumbs:m=0,defaultValue:p=[r],value:S,onValueChange:i=()=>{},onValueCommit:u=()=>{},inverted:w=!1,...$}=e,[x,v]=s.useState(null),y=K(n,h=>v(h)),N=s.useRef(new Set),f=s.useRef(0),V=c==="horizontal",z=x?!!x.closest("form"):!0,_=V?De:Ne,[g=[],ie]=be({prop:S,defaultProp:p,onChange:h=>{var j;(j=[...N.current][f.current])===null||j===void 0||j.focus(),i(h)}}),U=s.useRef(g);function le(h){const j=Ie(g,h);I(h,j)}function de(h){I(h,f.current)}function ce(){const h=U.current[f.current];g[f.current]!==h&&u(g)}function I(h,j,{commit:B}={commit:!1}){const Y=He(o),O=qe(Math.round((h-r)/o)*o+r,Y),A=J(O,[r,l]);ie((M=[])=>{const R=ke(M,A,j);if(Be(R,m*o)){f.current=R.indexOf(A);const X=String(R)!==String(M);return X&&B&&u(R),X?R:M}else return M})}return s.createElement(je,{scope:e.__scopeSlider,disabled:d,min:r,max:l,valueIndexToChangeRef:f,thumbs:N.current,values:g,orientation:c},s.createElement(L.Provider,{scope:e.__scopeSlider},s.createElement(L.Slot,{scope:e.__scopeSlider},s.createElement(_,D({"aria-disabled":d,"data-disabled":d?"":void 0},$,{ref:y,onPointerDown:k($.onPointerDown,()=>{d||(U.current=g)}),min:r,max:l,inverted:w,onSlideStart:d?void 0:le,onSlideMove:d?void 0:de,onSlideEnd:d?void 0:ce,onHomeKeyDown:()=>!d&&I(r,0,{commit:!0}),onEndKeyDown:()=>!d&&I(l,g.length-1,{commit:!0}),onStepKeyDown:({event:h,direction:j})=>{if(!d){const O=Q.includes(h.key)||h.shiftKey&&Z.includes(h.key)?10:1,A=f.current,M=g[A],R=o*O*j;I(M+R,A,{commit:!0})}}})))),z&&g.map((h,j)=>s.createElement(Me,{key:j,name:a?a+(g.length>1?"[]":""):void 0,value:h})))}),[ne,ae]=te(T,{startEdge:"left",endEdge:"right",size:"width",direction:1}),De=s.forwardRef((e,n)=>{const{min:a,max:r,dir:l,inverted:o,onSlideStart:c,onSlideMove:d,onSlideEnd:m,onStepKeyDown:p,...S}=e,[i,u]=s.useState(null),w=K(n,f=>u(f)),$=s.useRef(),x=$e(l),v=x==="ltr",y=v&&!o||!v&&o;function N(f){const V=$.current||i.getBoundingClientRect(),z=[0,V.width],g=F(z,y?[a,r]:[r,a]);return $.current=V,g(f-V.left)}return s.createElement(ne,{scope:e.__scopeSlider,startEdge:y?"left":"right",endEdge:y?"right":"left",direction:y?1:-1,size:"width"},s.createElement(re,D({dir:x,"data-orientation":"horizontal"},S,{ref:w,style:{...S.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:f=>{const V=N(f.clientX);c?.(V)},onSlideMove:f=>{const V=N(f.clientX);d?.(V)},onSlideEnd:()=>{$.current=void 0,m?.()},onStepKeyDown:f=>{const z=ee[y?"from-left":"from-right"].includes(f.key);p?.({event:f,direction:z?-1:1})}})))}),Ne=s.forwardRef((e,n)=>{const{min:a,max:r,inverted:l,onSlideStart:o,onSlideMove:c,onSlideEnd:d,onStepKeyDown:m,...p}=e,S=s.useRef(null),i=K(n,S),u=s.useRef(),w=!l;function $(x){const v=u.current||S.current.getBoundingClientRect(),y=[0,v.height],f=F(y,w?[r,a]:[a,r]);return u.current=v,f(x-v.top)}return s.createElement(ne,{scope:e.__scopeSlider,startEdge:w?"bottom":"top",endEdge:w?"top":"bottom",size:"height",direction:w?1:-1},s.createElement(re,D({"data-orientation":"vertical"},p,{ref:i,style:{...p.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:x=>{const v=$(x.clientY);o?.(v)},onSlideMove:x=>{const v=$(x.clientY);c?.(v)},onSlideEnd:()=>{u.current=void 0,d?.()},onStepKeyDown:x=>{const y=ee[w?"from-bottom":"from-top"].includes(x.key);m?.({event:x,direction:y?-1:1})}})))}),re=s.forwardRef((e,n)=>{const{__scopeSlider:a,onSlideStart:r,onSlideMove:l,onSlideEnd:o,onHomeKeyDown:c,onEndKeyDown:d,onStepKeyDown:m,...p}=e,S=q(T,a);return s.createElement(H.span,D({},p,{ref:n,onKeyDown:k(e.onKeyDown,i=>{i.key==="Home"?(c(i),i.preventDefault()):i.key==="End"?(d(i),i.preventDefault()):Q.concat(Z).includes(i.key)&&(m(i),i.preventDefault())}),onPointerDown:k(e.onPointerDown,i=>{const u=i.target;u.setPointerCapture(i.pointerId),i.preventDefault(),S.thumbs.has(u)?u.focus():r(i)}),onPointerMove:k(e.onPointerMove,i=>{i.target.hasPointerCapture(i.pointerId)&&l(i)}),onPointerUp:k(e.onPointerUp,i=>{const u=i.target;u.hasPointerCapture(i.pointerId)&&(u.releasePointerCapture(i.pointerId),o(i))})}))}),Ce="SliderTrack",Pe=s.forwardRef((e,n)=>{const{__scopeSlider:a,...r}=e,l=q(Ce,a);return s.createElement(H.span,D({"data-disabled":l.disabled?"":void 0,"data-orientation":l.orientation},r,{ref:n}))}),G="SliderRange",ze=s.forwardRef((e,n)=>{const{__scopeSlider:a,...r}=e,l=q(G,a),o=ae(G,a),c=s.useRef(null),d=K(n,c),m=l.values.length,p=l.values.map(u=>oe(u,l.min,l.max)),S=m>1?Math.min(...p):0,i=100-Math.max(...p);return s.createElement(H.span,D({"data-orientation":l.orientation,"data-disabled":l.disabled?"":void 0},r,{ref:d,style:{...e.style,[o.startEdge]:S+"%",[o.endEdge]:i+"%"}}))}),W="SliderThumb",Re=s.forwardRef((e,n)=>{const a=ye(e.__scopeSlider),[r,l]=s.useState(null),o=K(n,d=>l(d)),c=s.useMemo(()=>r?a().findIndex(d=>d.ref.current===r):-1,[a,r]);return s.createElement(_e,D({},e,{ref:o,index:c}))}),_e=s.forwardRef((e,n)=>{const{__scopeSlider:a,index:r,...l}=e,o=q(W,a),c=ae(W,a),[d,m]=s.useState(null),p=K(n,v=>m(v)),S=Se(d),i=o.values[r],u=i===void 0?0:oe(i,o.min,o.max),w=Ke(r,o.values.length),$=S?.[c.size],x=$?Ae($,u,c.direction):0;return s.useEffect(()=>{if(d)return o.thumbs.add(d),()=>{o.thumbs.delete(d)}},[d,o.thumbs]),s.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[c.startEdge]:`calc(${u}% + ${x}px)`}},s.createElement(L.ItemSlot,{scope:e.__scopeSlider},s.createElement(H.span,D({role:"slider","aria-label":e["aria-label"]||w,"aria-valuemin":o.min,"aria-valuenow":i,"aria-valuemax":o.max,"aria-orientation":o.orientation,"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,tabIndex:o.disabled?void 0:0},l,{ref:p,style:i===void 0?{display:"none"}:e.style,onFocus:k(e.onFocus,()=>{o.valueIndexToChangeRef.current=r})}))))}),Me=e=>{const{value:n,...a}=e,r=s.useRef(null),l=ge(n);return s.useEffect(()=>{const o=r.current,c=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(c,"value").set;if(l!==n&&m){const p=new Event("input",{bubbles:!0});m.call(o,n),o.dispatchEvent(p)}},[l,n]),s.createElement("input",D({style:{display:"none"}},a,{ref:r,defaultValue:n}))};function ke(e=[],n,a){const r=[...e];return r[a]=n,r.sort((l,o)=>l-o)}function oe(e,n,a){const o=100/(a-n)*(e-n);return J(o,[0,100])}function Ke(e,n){return n>2?`Value ${e+1} of ${n}`:n===2?["Minimum","Maximum"][e]:void 0}function Ie(e,n){if(e.length===1)return 0;const a=e.map(l=>Math.abs(l-n)),r=Math.min(...a);return a.indexOf(r)}function Ae(e,n,a){const r=e/2,o=F([0,50],[0,r]);return(r-o(n)*a)*a}function Te(e){return e.slice(0,-1).map((n,a)=>e[a+1]-n)}function Be(e,n){if(n>0){const a=Te(e);return Math.min(...a)>=n}return!0}function F(e,n){return a=>{if(e[0]===e[1]||n[0]===n[1])return n[0];const r=(n[1]-n[0])/(e[1]-e[0]);return n[0]+r*(a-e[0])}}function He(e){return(String(e).split(".")[1]||"").length}function qe(e,n){const a=Math.pow(10,n);return Math.round(e*a)/a}const Oe=Ee,Le=Pe,Fe=ze,Ue=Re,Ye=ue({slots:{base:"w-full rounded-full flex items-center select-none relative data-[disabled]:opacity-60 data-[disabled]:cursor-not-allowed group",track:"bg-zinc-200 grow relative",range:"absolute h-full data-[orientation=vertical]:h-[unset] data-[orientation=vertical]:w-full",thumb:"slider-thumb block rounded-full bg-white border-[2px] outline-none transition-all hover:scale-[1.15] data-[disabled]:pointer-events-none"},variants:{size:{tiny:{base:"min-h-[12px]",track:"rounded-[2px] h-[4px]",range:"rounded-tl-[2px] rounded-bl-[2px] [&.inverted]:rounded-0 [&.inverted]:rounded-tr-[2px] [&.inverted]:rounded-tl-[2px] [&.inverted]:rounded-br-[2px]",thumb:"size-[12px]"},small:{base:"min-h-[16px]",track:"rounded-[3px] h-[5px]",range:"rounded-tl-[3px] rounded-bl-[3px] [&.inverted]:rounded-0 [&.inverted]:rounded-tr-[3px] [&.inverted]:rounded-tl-[3px] [&.inverted]:rounded-br-[3px]",thumb:"size-[16px]"},medium:{base:"min-h-[20px]",track:"rounded-[3px] h-[6px]",range:"rounded-tl-[3px] rounded-bl-[3px] [&.inverted]:rounded-0 [&.inverted]:rounded-tr-[3px] [&.inverted]:rounded-tl-[3px] [&.inverted]:rounded-br-[3px]",thumb:"size-[20px]"},large:{base:"min-h-[24px]",track:"rounded-[4px] h-[8px]",range:"rounded-tl-[4px] rounded-bl-[4px] [&.inverted]:rounded-0 [&.inverted]:rounded-tr-[4px] [&.inverted]:rounded-tl-[4px] [&.inverted]:rounded-br-[4px]",thumb:"size-[24px] border-[3px]"}},colors:{primary:{range:"bg-brand-500",thumb:"border-brand-500"},info:{range:"bg-info-500",thumb:"border-info-500"},success:{range:"bg-success-500",thumb:"border-success-500"},warn:{range:"bg-warn-500",thumb:"border-warn-500"},danger:{range:"bg-danger-500",thumb:"border-danger-500"}},direction:{horizontal:"",vertical:{base:"w-fit h-full justify-center items-start",track:"h-full"}}},compoundVariants:[{direction:"vertical",size:"tiny",class:{track:"w-[4px]",range:"rounded-br-[2px]"}},{direction:"vertical",size:"small",class:{track:"w-[5px]",range:"rounded-br-[3px]"}},{direction:"vertical",size:"medium",class:{track:"w-[6px]",range:"rounded-br-[3px]"}},{direction:"vertical",size:"large",class:{track:"w-[8px]",range:"rounded-br-[4px]"}}],defaultVariants:{size:"medium",colors:"primary",direction:"horizontal"}}),se=s.forwardRef((e,n)=>{const{defaultValue:a,value:r,direction:l,min:o=0,max:c=100,step:d=1,size:m,colors:p,disabled:S,inverted:i,className:u,style:w,onValueChange:$}=e,{base:x,track:v,range:y,thumb:N}=Ye({size:m,colors:p,direction:l}),[f,V]=s.useState(a||[]),z=_=>{V(_),$?.(_)};return s.useEffect(()=>{r&&V(r)},[r]),t.jsxs(Oe,{ref:n,inverted:i,disabled:S,defaultValue:a,orientation:l,value:f,min:o,max:c,step:d,className:x({class:u}),style:w,onValueChange:z,children:[t.jsx(Le,{className:v(),children:t.jsx(Fe,{className:y({class:xe({inverted:i})})})}),f.map((_,g)=>t.jsx(Ue,{className:N()},g))]})});se.displayName="Slider";const b=se,Xe=`\`\`\`ts
import Slider from 'your path/Slider';

export default function Demo() {
  return <Slider defaultValue={[10]} className="w-[76%]" />
}
\`\`\`
`,Ge=`\`\`\`ts
import Slider from 'your path/Slider';

export default function Demo() {
  return (
    <div className="space-y-3 w-[76%]">
      <Slider size="tiny" defaultValue={[10]} />
      <Slider size="small" defaultValue={[10]} />
      <Slider size="medium" defaultValue={[10]} />
      <Slider size="large" defaultValue={[10]} />
    </div>
  )
}
\`\`\`
`,We=`\`\`\`ts
import Slider from 'your path/Slider';

export default function Demo() {
  return (
    <div className="space-y-3 w-[76%]">
      <Slider colors="primary" defaultValue={[10]} />
      <Slider colors="info" defaultValue={[10]} />
      <Slider colors="success" defaultValue={[10]} />
      <Slider colors="warn" defaultValue={[10]} />
      <Slider colors="danger" defaultValue={[10]} />
    </div>
  )
}
\`\`\`
`,Je=`\`\`\`ts
import Slider from 'your path/Slider';

export default function Demo() {
  return (
    <div className="space-y-3 w-[76%]">
      <Slider size="tiny" direction="vertical" defaultValue={[30]} />
      <Slider size="small" direction="vertical" defaultValue={[30]} />
      <Slider size="medium" direction="vertical" defaultValue={[30]} />
      <Slider size="large" direction="vertical" defaultValue={[30]} />
    </div>
  )
}
\`\`\`
`,Qe=`\`\`\`ts
import Slider from 'your path/Slider';

export default function Demo() {
  return <Slider className="w-[76%]" defaultValue={[10, 30, 80]} min={1} max={100} />
}
\`\`\`
`,Ze=`\`\`\`ts
import Slider from 'your path/Slider';

export default function Demo() {
  return <Slider defaultValue={[10]} className="w-[76%]" step={10} />
}
\`\`\`
`,et=`\`\`\`ts
import Slider from 'your path/Slider';

export default function Demo() {
  return <Slider defaultValue={[10]} disabled className="w-[76%]" />
}
\`\`\`
`,tt=`\`\`\`ts
import { useState } from 'react';
import Slider from 'your path/Slider';
import Switch from 'your path/Switch';

export default function Demo() {
  const [inverted, setInverted] = useState(false);
  return (
    <div className="flex items-center mb-2">
      <span className="mr-2">inverted:</span>
      <Switch size="small" checked={inverted} onCheckedChange={setInverted} />
    </div>
    <Slider className="w-[76%]" inverted={inverted} defaultValue={[10]} min={0} max={100} />
  )
}
\`\`\`
`,nt=[{prop:"defaultValue",desc:"default value array of slider",type:"number[]",required:!1,default:"-"},{prop:"value",desc:"value of slider, used for controlled component",type:"number[]",required:!1,default:"-"},{prop:"min",desc:"minimum value of slider",type:"number",required:!1,default:"1"},{prop:"max",desc:"maximum value of slider",type:"number",required:!1,default:"100"},{prop:"step",desc:"stepping interval of slider",type:"number",required:!1,default:"1"},{prop:"colors",desc:"colors of slider",type:"tag: primary | info | success | warn | danger",required:!1,default:"primary"},{prop:"disabled",desc:"disabled the interaction of slider",type:"boolean",required:!1,default:"false"},{prop:"inverted",desc:"set true, will invert the slider",type:"boolean",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onValueChange",desc:"callback when slider value changed",type:"(value: number[]) => void",required:!1,default:"-"}];function mt(){const[e,n]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(fe,{title:"Slider",sourceName:"Slider"}),t.jsx(me,{children:"A component allows for a range of selection"}),t.jsxs(C,{className:"mb-4",children:[t.jsx(E,{as:"h4",className:"mb-2",children:"basic"}),t.jsx(b,{defaultValue:[10],className:"w-[76%]"}),t.jsx(P,{content:Xe})]}),t.jsxs(C,{className:"mb-4",children:[t.jsx(E,{as:"h4",className:"mb-2",children:"size"}),t.jsxs("div",{className:"space-y-3 w-[76%]",children:[t.jsx(b,{size:"tiny",defaultValue:[10]}),t.jsx(b,{size:"small",defaultValue:[10]}),t.jsx(b,{size:"medium",defaultValue:[10]}),t.jsx(b,{size:"large",defaultValue:[10]})]}),t.jsx(P,{content:Ge})]}),t.jsxs(C,{className:"mb-4",children:[t.jsx(E,{as:"h4",className:"mb-2",children:"colors"}),t.jsxs("div",{className:"space-y-3 w-[76%]",children:[t.jsx(b,{colors:"primary",defaultValue:[10]}),t.jsx(b,{colors:"info",defaultValue:[10]}),t.jsx(b,{colors:"success",defaultValue:[10]}),t.jsx(b,{colors:"warn",defaultValue:[10]}),t.jsx(b,{colors:"danger",defaultValue:[10]})]}),t.jsx(P,{content:We})]}),t.jsxs(C,{className:"mb-4",children:[t.jsx(E,{as:"h4",className:"mb-2",children:"direction"}),t.jsxs("div",{className:"h-[300px] flex gap-x-8",children:[t.jsx(b,{size:"tiny",direction:"vertical",defaultValue:[30]}),t.jsx(b,{size:"small",direction:"vertical",defaultValue:[30]}),t.jsx(b,{direction:"vertical",defaultValue:[30]}),t.jsx(b,{size:"large",direction:"vertical",defaultValue:[30]})]}),t.jsx(P,{content:Je})]}),t.jsxs(C,{className:"mb-4",children:[t.jsx(E,{as:"h4",className:"mb-2",children:"multiple thumbs"}),t.jsx(b,{className:"w-[76%]",defaultValue:[10,30,80],min:1,max:100,onValueChange:a=>{console.log("value range is: ",a)}}),t.jsx(P,{content:Qe})]}),t.jsxs(C,{className:"mb-4",children:[t.jsx(E,{as:"h4",className:"mb-2",children:"step"}),t.jsx(b,{className:"w-[76%]",defaultValue:[10],step:10,min:0,max:100}),t.jsx(P,{content:Ze})]}),t.jsxs(C,{className:"mb-4",children:[t.jsx(E,{as:"h4",className:"mb-2",children:"disabled"}),t.jsx(b,{className:"w-[76%]",disabled:!0,defaultValue:[10],step:10,min:0,max:100}),t.jsx(P,{content:et})]}),t.jsxs(C,{className:"mb-4",children:[t.jsx(E,{as:"h4",className:"mb-2",children:"inverted"}),t.jsxs("div",{className:"flex items-center mb-2",children:[t.jsx("span",{className:"mr-2",children:"inverted:"}),t.jsx(we,{size:"small",checked:e,onCheckedChange:n})]}),t.jsx(b,{className:"w-[76%]",inverted:e,defaultValue:[10],min:0,max:100}),t.jsx(P,{content:tt})]}),t.jsx(E,{as:"h2",className:"mb-4",children:"API"}),t.jsx(pe,{rows:nt})]})}export{mt as default};
