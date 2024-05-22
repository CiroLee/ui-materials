import{d as H,r as a,j as e}from"./index-DS6qm14V.js";import{N as k,D as R,S as o,A as S}from"./index-Dlsx_GZD.js";import{H as i,C as u}from"./index-B3S6f_Ni.js";import{I as V}from"./index-DUYRg-gz.js";import"./input.style-BqcXTAcm.js";const A=H({slots:{base:"inline-flex gap-3",input:"aspect-square text-center [&_input]:p-0 [&_input]:text-center"}}),x=a.forwardRef((l,y)=>{const{quantity:c,type:h,size:j,disabled:I,onValueChange:b,onComplete:q,className:g,style:P}=l,{base:N,input:v}=A(),[m,w]=a.useState([]),[r,z]=a.useState([]);a.useEffect(()=>{w(Array(c).fill(null).map(()=>a.createRef()))},[c]);const C=(p,t)=>{const n=m[t+1],d=p.target;z(f=>(f[t]=d.value,[...f])),b?.(d.value),n?.current&&d.value&&n.current.focus()},D=(p,t)=>{if(p.key==="Backspace"&&r[t]===""){const n=m[t-1];n?.current&&n.current.focus()}};return a.useEffect(()=>{r.length===c&&r.every(Boolean)&&q?.(r)},[r]),e.jsx("div",{ref:y,className:N({class:g}),style:P,children:m.map((p,t)=>e.jsx(V,{inputRef:p,type:h,disabled:I,className:v(),maxLength:1,size:j,pwdIconVisible:!1,onInput:n=>C(n,t),onKeyDown:n=>D(n,t)},t))})});x.displayName="PinInput";const s=x,E=`\`\`\`ts
import PinInput from 'your path/PinInput';

export default Demo() {
  return (
    <PinInput quantity={4} onCompleteChange={(val) => {
      console.log('complete change: ', val)
    }}
  )
\`\`\`
`,B=`\`\`\`ts
import PinInput from 'your path/PinInput';

export default Demo() {
  return (
    <PinInput quantity={6} />
  )
\`\`\`
`,K=`\`\`\`ts
import PinInput from 'your path/PinInput';

export default Demo() {
  return (
    <PinInput quantity={4} type="password" />
  )
\`\`\`
`,O=`\`\`\`ts
import PinInput from 'your path/PinInput';

export default Demo() {
  return (
    <PinInput quantity={4} type="text" disabled />
  )
\`\`\`
`,T=`\`\`\`ts
import PinInput from 'your path/PinInput';

export default Demo() {
  return (
    <div className="flex flex-col gap-3">
      <p>tiny</p>
      <PinInput quantity={4} size="tiny" />
      <p>small</p>
      <PinInput quantity={4} size="small" />
      <p>medium</p>
      <PinInput quantity={4} size="medium" />
      <p>large</p>
      <PinInput quantity={4} size="large" />
    </div>
  )
\`\`\`
`,_=[{prop:"quantity",desc:"quantity of inputs",type:"number",required:!0,default:"-"},{prop:"type",desc:"input type, password type will hide contents",type:"tag: text | password",required:!1,default:"text"},{prop:"disabled",desc:"whether disabled input",type:"boolean",required:!1,default:"false"},{prop:"size",desc:"size of input",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onValueChange",desc:"callback on input change",type:"(value: string) => void",required:!1,default:"-"},{prop:"onComplete",type:"(value: string[]) => void",desc:"callback when all inputs have valid values",required:!1,default:"-"}];function M(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"PinInput",sourceName:"PinInput"}),e.jsx(R,{children:"A component allows verification codes with auto-focus transfer"}),e.jsxs(o,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(s,{quantity:4,onComplete:l=>{console.log("complete callback",l)}}),e.jsx(u,{content:E})]}),e.jsxs(o,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"quantity"}),e.jsx("div",{className:"flex flex-col",children:e.jsx(s,{quantity:6,onComplete:l=>{console.log("complete callback",l)}})}),e.jsx(u,{content:B})]}),e.jsxs(o,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"password"}),e.jsx(s,{type:"password",quantity:4}),e.jsx(u,{content:K})]}),e.jsxs(o,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"disabled"}),e.jsx(s,{quantity:4,disabled:!0}),e.jsx(u,{content:O})]}),e.jsxs(o,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{children:"tiny"}),e.jsx(s,{quantity:4,size:"tiny"}),e.jsx("p",{children:"small"}),e.jsx(s,{quantity:4,size:"small"}),e.jsx("p",{children:"medium"}),e.jsx(s,{quantity:4,size:"medium"}),e.jsx("p",{children:"large"}),e.jsx(s,{quantity:4,size:"large"})]}),e.jsx(u,{content:T})]}),e.jsx(i,{as:"h2",className:"mb-4",children:"API"}),e.jsx(S,{rows:_})]})}export{M as default};
