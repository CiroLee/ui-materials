import{d as X,r as m,j as e,L as S,F as b,o as Y}from"./index-DS6qm14V.js";import{C as Z}from"./CheckboxGroup-D0ppv6B2.js";import{N as _,D as ee,S as i,A as ne}from"./index-Dlsx_GZD.js";import{H as l,C as p}from"./index-B3S6f_Ni.js";import{g as r}from"./input.style-BqcXTAcm.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-BVjPIHQF.js";import"./index-DV0JX9yz.js";const re=X({slots:{base:`${r.base} group`,input:r.input,prefix:r.prefix,rightBlock:"relative flex flex-col flex-center overflow-hidden",spinButton:`select-none relative bg-brand-500/10 flex flex-center opacity-0 transition-all duration-200 
    ease-linear group-hover:opacity-100 group/btn hover:bg-brand-500/20 rounded-[2px]`,spinArrow:"text-gray-400/60 group-hover/btn:text-brand-500"},variants:{size:{tiny:{base:r.tinyBase,input:`${r.smallInput} px-[6px]`,spinButton:"size-[10px]",spinArrow:"size-[10px]",rightBlock:"pr-[4px]"},small:{base:r.smallBase,input:`${r.smallInput} px-[6px]`,spinButton:"size-[10px]",spinArrow:"size-[10px]",rightBlock:"pr-[6px]"},medium:{base:r.mediumBase,input:`${r.mediumInput} px-[8px]`,spinButton:"size-[14px]",spinArrow:"size-[14px]",rightBlock:"pr-[8px]"},large:{base:r.largeBase,input:`${r.largeInput} px-[8px]`,spinButton:"size-[16px]",spinArrow:"size-[16px]",rightBlock:"pr-[8px]"}},disabled:{true:{base:r.disabledBase,input:r.disabledInput,rightBlock:"opacity-0"}},status:{error:{base:r.errorBase,prefix:"[&>*]:text-danger-500",suffix:"[&>*]:text-danger-500",spinButton:"bg-danger-500/10 hover:bg-danger-500/20"},warn:{base:r.warnBase,prefix:"[&>*]:text-warn-500",suffix:"[&>*]:text-warn-500",spinButton:"bg-warn-500/10 hover:bg-warn-500/20"},readonly:{}}},defaultVariants:{size:"medium"}}),H=m.forwardRef((y,v)=>{const{size:a,value:I,status:o,step:c=1,placeholder:R,min:d=-1/0,max:h=1/0,disabled:N,keyboard:w=!0,prefix:B,onChange:D,onInput:q,onBlur:A,onFocus:L,onStep:M,className:V,style:$}=y,{base:F,input:T,spinButton:z,spinArrow:k,rightBlock:E,prefix:K}=re(),P=m.useRef(null),[u,x]=m.useState(I??""),U=m.useMemo(()=>Number(u)>=h,[u]),O=m.useMemo(()=>Number(u)<=d,[u]),C=n=>n===""?null:Number(n),G=n=>{const t=n.currentTarget;x(t.value),q?.(C(t.value))},J=n=>{const t=n.currentTarget;D?.(C(t.value))},Q=n=>{const t=n.currentTarget;if(t.value==="")return;const j=Number(t.value);j>h?x(h.toString()):j<d&&x(d.toString()),A?.(n)},g=(n,t,j=!1)=>{const f=u?t==="increase"?Number(u)+n:Number(u)-n:n;if(t==="increase"&&f<d)x(String(d));else{if(f<d||f>h||o==="readonly")return;x(String(f))}j&&M?.(f,{step:n,type:t})},W=n=>{n.key!=="ArrowUp"&&n.key!=="ArrowDown"||(n.preventDefault(),[n.key==="ArrowUp",w].every(Boolean)&&g(c,"increase"),[n.key==="ArrowDown",w].every(Boolean)&&g(c,"decrease"))};return e.jsxs("label",{ref:v,className:F({size:a,status:o,disabled:N,class:V}),style:$,children:[B?e.jsx("div",{className:K({status:o}),children:B}):null,e.jsx("input",{ref:P,type:"number",value:u??"",disabled:N,placeholder:R,readOnly:o==="readonly",className:T({size:a,disabled:N,class:"input-number"}),onInput:G,onChange:J,onBlur:Q,onFocus:L,onKeyDown:W}),e.jsxs("div",{className:E({size:a,disabled:N}),children:[e.jsx("div",{className:z({status:o,size:a,class:`${U?"cursor-not-allowed":""}`}),onClick:()=>g(c,"increase",!0),children:e.jsx(S,{className:k()})}),e.jsx("div",{className:z({status:o,size:a,class:`${O?"cursor-not-allowed":""}`}),onClick:()=>g(c,"decrease",!0),children:e.jsx(S,{className:k({class:"rotate-180"})})})]})]})});H.displayName="InputNumber";const s=H,se=`\`\`\`ts
import { useState } from 'react';
import InputNumber from 'your path/InputNumber';
export default function Demo() {
  const [val, setVal] = useState<number | null>(null);
  return (
    <>
      <InputNumber className="w-[400px]" value={val} onChange={setVal} />
      <p className="mt-2">{val}</p>
    </>
  )
}
\`\`\`
`,te=`\`\`\`ts
import InputNumber from 'your path/InputNumber';

export default function Demo() {
  return (
    <>
      <div className="w-[400px] flex flex-col space-y-3">
        <InputNumber size="tiny" placeholder="tiny" />
        <InputNumber size="small" placeholder="small" />
        <InputNumber size="medium" placeholder="medium" />
        <InputNumber size="large" placeholder="large" />
      </div>
    </>
  )
}
\`\`\`
`,ae=`\`\`\`ts
import InputNumber from 'your path/InputNumber';
import { RiMoneyCnyBoxLine, RiBarChartLine } from '@remixicon/icon';

export default function Demo() {
  return (
    <>
      <div className="w-[400px] flex flex-col space-y-3">
        <InputNumber prefix={<RiMoneyCnyBoxLine size={18} />} />
        <InputNumber prefix={<RiBarChartLine size={18} />} />
      </div>
    </>
  )
}
\`\`\`
`,le=`\`\`\`ts
import InputNumber from 'your path/InputNumber';

export default function Demo() {
  return (
    <>
      <InputNumber className="w-[400px]" min={2} max={20} />
    </>
  )
}
\`\`\`
`,oe=`\`\`\`ts
import InputNumber from 'your path/InputNumber';

export default function Demo() {
  return (
    <>
      <InputNumber className="w-[400px]" step={2} />
    </>
  )
}
\`\`\`
`,ue=`\`\`\`ts
import InputNumber from 'your path/InputNumber';
import { RiMoneyCnyBoxLine } from '@remixicon/react';

export default function Demo() {
  return (
    <>
      <InputNumber className="w-[400px]" disabled value={10} prefix={<RIMoneyCnyBoxLine size={18} />} />
    </>
  )
}
\`\`\`
`,ie=`\`\`\`ts
import InputNumber from 'your path/InputNumber';
import { RiMoneyCnyBoxLine } from '@remixicon/react';

export default function Demo() {
  return (
    <>
      <div className="flex flex-col space-y-3 w-[400px]">
        <InputNumber status="error" prefix={<RiMoneyCnyBoxLine size={18} />} />
        <InputNumber status="warn" prefix={<RiMoneyCnyBoxLine size={18} />} />
        <InputNumber status="readonly" prefix={<RiMoneyCnyBoxLine size={18} />} value={666} />
      </div>
    </>
  )
}
\`\`\`
`,pe=`\`\`\`ts
import { useState } from 'react';
import InputNumber from 'your path/InputNumber';


export default function Demo() {
  const [keyboard, setKeyboard] = useState<boolean>(true);
  return (
    <>
      <Checkbox checked={keyboard} onCheckedChange={setKeyboard}>
          <span>keyboard enabled:{String(keyboard)}</span>
      </Checkbox>
      <InputNumber className="mt-2 w-[400px]" keyboard={keyboard} />
    </>
  )
}
\`\`\`
`,me=[{prop:"value",desc:"input value",type:"tag:number | null",required:!1,default:"-"},{prop:"size",desc:"input size",type:"tag: tiny | small| medium | large",required:!1,default:"medium"},{prop:"placeholder",desc:"input placeholder",type:"string",required:!1,default:"-"},{prop:"step",desc:"input step",type:"number",required:!1,default:"1"},{prop:"min",desc:"input min value",type:"number",required:!1,default:"-Infinity"},{prop:"max",desc:"input max value",type:"number",required:!1,default:"Infinity"},{prop:"disabled",desc:"whether set input disabled",type:"boolean",required:!1,default:"false"},{prop:"status",desc:"input status",type:"tag: error | warn | readonly",required:!1,default:"false"},{prop:"keyboard",desc:"whether enable using keyboard arrow to change input value",type:"boolean",required:!1,default:"true"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onChange",desc:"change event of InputNumber",type:"(value: number | null) => void;",required:"false",default:"-"},{prop:"onInput",desc:"input event of InputNumber",type:"(value: number | null) => void;",required:"false",default:"-"},{prop:"onBlur",desc:"blur event of InputNumber",type:"(e: React.FocusEventHandler<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onFocus",desc:"focus event of InputNumber",type:"(e: React.FocusEventHandler<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onStep",desc:"step event of InputNumber",type:"(value: number, option: { step: number; type: 'increase' | 'decrease' }) => void",required:!1,default:"-"}];function ve(){const[y,v]=m.useState(null),[a,I]=m.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"InputNumber",sourceName:"InputNumber"}),e.jsx(ee,{children:"A component only allows to input number"}),e.jsxs(i,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(s,{className:"max-w-[400px]",value:y,onChange:v}),e.jsx("p",{className:"mt-2",children:y}),e.jsx(p,{content:se})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"max-w-[400px] flex flex-col space-y-3",children:[e.jsx(s,{size:"tiny",placeholder:"tiny"}),e.jsx(s,{size:"small",placeholder:"small"}),e.jsx(s,{size:"medium",placeholder:"medium"}),e.jsx(s,{size:"large",placeholder:"large"})]}),e.jsx(p,{content:te})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"prefix"}),e.jsxs("div",{className:"max-w-[400px] flex flex-col space-y-3",children:[e.jsx(s,{prefix:e.jsx(b,{size:18})}),e.jsx(s,{prefix:e.jsx(Y,{size:18})})]}),e.jsx(p,{content:ae})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"min and max"}),e.jsx(s,{className:"max-w-[400px]",min:2,max:20}),e.jsx(p,{content:le})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"step"}),e.jsx(s,{className:"max-w-[400px]",step:2,onStep:(o,c)=>{console.log("value:",o,"option:",c)}}),e.jsx(p,{content:oe})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"disabled"}),e.jsx(s,{className:"max-w-[400px]",disabled:!0,value:10,prefix:e.jsx(b,{size:18})}),e.jsx(p,{content:ue})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"status"}),e.jsxs("div",{className:"flex flex-col space-y-3 max-w-[400px]",children:[e.jsx(s,{status:"error",prefix:e.jsx(b,{size:18})}),e.jsx(s,{status:"warn",prefix:e.jsx(b,{size:18})}),e.jsx(s,{status:"readonly",prefix:e.jsx(b,{size:18}),value:666})]}),e.jsx(p,{content:ie})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"keyboard"}),e.jsx(Z,{checked:a,onCheckedChange:I,children:e.jsxs("span",{children:["keyboard enabled:",String(a)]})}),e.jsx(s,{className:"mt-2 max-w-[400px]",keyboard:a}),e.jsx(p,{content:pe})]}),e.jsx(l,{as:"h2",className:"mb-2",children:"API"}),e.jsx(ne,{rows:me})]})}export{ve as default};
