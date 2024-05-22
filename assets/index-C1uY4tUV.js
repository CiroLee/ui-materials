import{d as k,r as n,j as e}from"./index-DS6qm14V.js";import{N as P,D as V,S as r,A as O}from"./index-Dlsx_GZD.js";import{H as t,C as s}from"./index-B3S6f_Ni.js";import{g as o}from"./input.style-BqcXTAcm.js";const G=k({slots:{base:`${o.base} w-fit`,input:"outline-none placeholder:text-black/30 bg-transparent p-[8px] leading-[1.3] min-h-[38px]",clear:`${o.clear} size-[16px] absolute before:h-[8px] after:h-[8px] right-[8px] bottom-[8px] z-[2]`,count:"text-[14px] text-black/50 absolute right-0 -bottom-[24px]"},variants:{resize:{both:{input:"resize"},horizontal:{input:"resize-x"},vertical:{input:"resize-y"},none:{input:"resize-none overflow-hidden"}},disabled:{true:{base:o.disabledBase,input:o.disabledInput}},showCount:{true:{base:"mb-[24px]"}},status:{error:{base:o.errorBase},warn:{base:o.warnBase},readonly:{}},allowClear:{true:{clear:"scale-1"}}},defaultVariants:{resize:"both"}}),j=n.forwardRef((T,v)=>{const{value:N,placeholder:g,resize:y,disabled:c,allowClear:u,showCount:i,status:p,rows:z=3,maxLength:d,autoHeight:h,className:C,style:H,onInput:q,onBlur:L,onChange:E,onFocus:A}=T,x=n.useRef(null),{base:D,input:R,clear:S,count:I}=G(),[l,m]=n.useState(N||""),[f,w]=n.useState(!1),$=n.useMemo(()=>{if(i)return d?`${l.length}/${d}`:`${l.length}`},[d,l.length,i]),B=()=>{l.length?w(!0):w(!1)},F=()=>{f&&m("")},M=()=>{x.current&&(x.current.style.height=x.current.scrollHeight+"px")},_=b=>{m(b.currentTarget.value),h&&M(),q?.(b)};return n.useEffect(()=>{u&&B()},[l.length]),e.jsxs("label",{ref:v,className:D({disabled:c,status:p,showCount:i}),style:H,children:[e.jsx("textarea",{ref:x,placeholder:g,disabled:c,maxLength:d,readOnly:p==="readonly",className:R({disabled:c,resize:h?"none":y,class:`${C}`}),rows:z,value:l,onInput:_,onChange:E,onBlur:L,onFocus:A}),u&&!c?e.jsx("div",{className:S({allowClear:f}),onClick:F}):null,i?e.jsx("div",{className:I(),children:$}):null]})});j.displayName="Textarea";const a=j,J=`\`\`\`ts
import Textarea from 'your path/Textarea';

export default function Demo() {
  return (
    <Textarea className="w-[400px]" placeholder="textarea" />
  )
}
\`\`\`
`,K=`\`\`\`ts
import Textarea from 'your path/Textarea';

export default function Demo() {
  return (
    <Textarea className="w-[400px]" rows={5} placeholder="rows=5" />
  )
}
\`\`\`
`,Q=`\`\`\`ts
import Textarea from 'your path/Textarea';

export default function Demo() {
  return (
    <Textarea className="w-[400px]" disabled placeholder="textarea" />
  )
}
\`\`\`
`,U=`\`\`\`ts
import Textarea from 'your path/Textarea';

export default function Demo() {
  return (
    <div className="flex flex-col space-y-3 [&_textarea]:w-[400px]">
      <Textarea placeholder="resize both" resize="both" />
      <Textarea placeholder="resize horizontal" resize="horizontal" />
      <Textarea placeholder="resize vertical" resize="vertical" />
      <Textarea placeholder="resize none" resize="none" />
    </div>
  )
}
\`\`\`
`,W=`\`\`\`ts
import Textarea from 'your path/Textarea';

export default function Demo() {
  return (
    <div className="flex flex-col space-y-3 [&_textarea]:w-[400px]">
      <Textarea status="error" placeholder="error" />
      <Textarea status="warn" placeholder="warn" />
      <Textarea status="readonly" value="readonly" />
    </div>
  )
}
\`\`\`
`,X=`\`\`\`ts
import Textarea from 'your path/Textarea';

export default function Demo() {
  return (
    <Textarea className="w-[400px]" allowClear placeholder="textarea" />
  )
}
\`\`\`
`,Y=`\`\`\`ts
import Textarea from 'your path/Textarea';

export default function Demo() {
  return (
    <Textarea className="w-[400px]" showCount allowClear placeholder="without maxLength" />
    <Textarea className="w-[400px]" maxLength={140} showCount allowClear placeholder="with maxLength" />
  )
}
\`\`\`
`,Z=[{prop:"value",desc:"textarea value",type:"string",required:!1,default:"-"},{prop:"placeholder",desc:"textarea placeholder",type:"string",required:!1,default:"-"},{prop:"rows",desc:"number of textarea rows",type:"number",required:!1,default:"3"},{prop:"maxLength",desc:"maximum number of characters",type:"number",required:!1,default:"-"},{prop:"resize",desc:"textarea resize",type:"tag: none | both | horizontal | vertical",required:!1,default:"both"},{prop:"disabled",desc:"whether to disable textarea",type:"boolean",required:!1,default:"false"},{prop:"status",desc:"textarea status",type:"tag: error | warn | readonly",required:!1,default:"-"},{prop:"allowClear",desc:"whether to allow textarea clear",type:"boolean",required:!1,default:"false"},{prop:"autoHeight",desc:"whether to auto-adjust textarea height",type:"boolean",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onChange",desc:"change event of Textarea",type:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void",required:"false",default:"-"},{prop:"onInput",desc:"input event of Textarea",type:"(e: React.FormEventHandler<HTMLTextAreaElement>) => void",required:"false",default:"-"},{prop:"onBlur",desc:"blur event of Textarea",type:"(e: React.FocusEventHandler<HTMLTextAreaElement>) => void",required:"false",default:"-"},{prop:"onFocus",desc:"focus event of Textarea",type:"(e: React.FocusEventHandler<HTMLTextAreaElement>) => void",required:"false",default:"-"}];function se(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Textarea",sourceName:"Textarea"}),e.jsx(V,{children:"A form component used to input multi-line input"}),e.jsxs(r,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(a,{className:"w-[82vw] md:w-[400px]",placeholder:"textarea"}),e.jsx(s,{content:J})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"rows"}),e.jsx(a,{className:"w-[82vw] md:w-[400px]",rows:5,placeholder:"rows=5"}),e.jsx(s,{content:K})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"disabled"}),e.jsx(a,{className:"w-[82vw] md:w-[400px]",disabled:!0,placeholder:"disabled"}),e.jsx(s,{content:Q})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"resize"}),e.jsxs("div",{className:"flex flex-col space-y-3 [&_textarea]:w-[82vw] md:w-[400px]",children:[e.jsx(a,{placeholder:"resize both",resize:"both"}),e.jsx(a,{placeholder:"resize horizontal",resize:"horizontal"}),e.jsx(a,{placeholder:"resize vertical",resize:"vertical"}),e.jsx(a,{placeholder:"resize none",resize:"none"})]}),e.jsx(s,{content:U})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"status"}),e.jsxs("div",{className:"flex flex-col space-y-3 [&_textarea]:w-[82vw] md:w-[400px]",children:[e.jsx(a,{status:"error",placeholder:"error"}),e.jsx(a,{status:"warn",placeholder:"warn"}),e.jsx(a,{status:"readonly",value:"readonly"})]}),e.jsx(s,{content:W})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"allowClear"}),e.jsx(a,{className:"w-[82vw] md:w-[400px]",allowClear:!0,placeholder:"textarea"}),e.jsx(s,{content:X})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"showCount"}),e.jsx(a,{className:"w-[82vw] md:w-[400px]",showCount:!0,allowClear:!0,placeholder:"without maxLength"}),e.jsx(a,{className:"w-[82vw] md:w-[400px]",maxLength:140,showCount:!0,allowClear:!0,placeholder:"with maxLength"}),e.jsx(s,{content:Y})]}),e.jsx(t,{as:"h2",className:"mb-4",children:"API"}),e.jsx(O,{rows:Z})]})}export{se as default};
