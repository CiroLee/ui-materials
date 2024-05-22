import{r as i,j as e,X as l,n as c}from"./index-DS6qm14V.js";import{N as u,D as d,S as t,A as m}from"./index-Dlsx_GZD.js";import{H as s,C as a}from"./index-B3S6f_Ni.js";import{I as n}from"./index-DUYRg-gz.js";import{C as x}from"./CheckboxGroup-D0ppv6B2.js";import"./input.style-BqcXTAcm.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-BVjPIHQF.js";import"./index-DV0JX9yz.js";const h=`\`\`\`ts
import Input from 'your path/Input';

export default function Demo() {
  const handler = (e, text: string) => {
    console.log(text, (e.target as HTMLInputElement).value);
  }
  return (
    <Input
      placeholder="input sth..."
      value="some texts"
      onInput={function(e) {
        handler(e, 'input')
      }}
      onChange={function(e) {
        handler(e, 'change')
      }}
      onBlur={function(e) {
        handler(e, 'blur')
      }}
      onFocus={function(e) {
        handler(e, 'focus')
      }}
    />
  )
}
\`\`\`
`,f=`\`\`\`ts
import Input from 'your path/Input';

export default function Demo() {
  return (
    <div className="w-[400px] space-y-3">
      <Input size="tiny" placeholder="tiny size" />
      <Input size="small" placeholder="small size" />
      <Input size="medium" placeholder="medium size" />
      <Input size="large" placeholder="large size" />
    </div>
  )
}
\`\`\`
`,j=`\`\`\`ts
import Input from 'your path/Input';
import { RiUserLine, RiSearchLine } from '@remixicon/react'

export default function Demo() {
  return (
    <div className="w-[400px] space-y-3">
      <Input placeholder="icon prefix..." prefix={<RiUserLine size={18} />} />
      <Input placeholder="text prefix..." prefix={<span>+86</span>} />
      <Input placeholder="icon suffix..." suffix={<RiSearchLine size={18} />} />
    </div>
  )
}
\`\`\`
`,I=`\`\`\`ts
import { useState } from 'react'
import Input from 'your path/Input';
import Checkbox from 'your path/Checkbox';

export default function Demo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="space-y-2 w-[400px]">
      <Checkbox checked={disabled} onCheckedChange={setDisabled}>
        <span>disabled: {\`\${disabled}\`}</span>
      </Checkbox>
      <Input disabled={!!disabled} placeholder="input sth..." prefix={<span>$</span>} />
    </div>
  )
}
\`\`\`
`,y=`\`\`\`ts
import Input from 'your path/Input';
import { RIUserLine } from '@remixicon/react';
export default function Demo() {

  return (
    <div className="w-[400px] space-y-3">
      <Input status="error" placeholder="error" prefix={<RiUserLine size={18} />} />
      <Input status="warn" placeholder="warn" prefix={<RiUserLine size={18} />} />
      <Input status="readonly" placeholder="readonly" value="readonly..." />
    </div>
  )
}
\`\`\`
`,w=`\`\`\`ts
import Input from 'your path/Input';
export default function Demo() {

  return (
    <Input className="w-[400px]" allowClear />
  )
}
\`\`\`
`,b=`\`\`\`ts
import Input from 'your path/Input';
export default function Demo() {

  return (
    <div className="w-[400px] space-y-3">
      <Input showCount />
      <Input maxLength={10} showCount />
    </div>
  )
}
\`\`\`
`,v=`\`\`\`ts
import Input from 'your path/Input';
export default function Demo() {

  return (
     <Input type="password" className="w-[400px]" placeholder="password" />
  )
}
\`\`\`
`,N=[{prop:"type",desc:"type of Input",type:"tag:text | password",required:"false",default:"text"},{prop:"value",desc:"value of Input",type:"string",required:"false",default:"-"},{prop:"placeholder",desc:"placeholder of Input",type:"string",required:"false",default:"-"},{prop:"showCount",desc:"whether show count of Input",type:"boolean",required:"false",default:"false"},{prop:"showClear",desc:"whether show clear button",type:"boolean",required:!1,default:"false"},{prop:"maxLength",desc:"max length of Input",type:"number",required:"false",default:"-"},{prop:"prefix",desc:"prefix node of Input",type:"React.ReactNode",required:"false",default:"-"},{prop:"suffix",desc:"suffix node of Input",type:"React.ReactNode",required:"false",default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onChange",desc:"change event of Input",type:"(e: React.ChangeEvent<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onInput",desc:"input event of Input",type:"(e: React.FormEventHandler<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onBlur",desc:"blur event of Input",type:"(e: React.FocusEventHandler<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onFocus",desc:"focus event of Input",type:"(e: React.FocusEventHandler<HTMLInputElement>) => void",required:"false",default:"-"}];function F(){const[o,p]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Input",sourceName:"Input"}),e.jsx(d,{children:"Form input component offen used to input one line words"}),e.jsxs(t,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(n,{className:"max-max-w-[400px]",placeholder:"input sth...",value:"some texts",onInput:r=>{console.log("input",r.target.value)},onChange:r=>{console.log("change",r.target.value)},onBlur:r=>{console.log("blur",r.target.value)},onFocus:r=>{console.log("focus",r.target.value)}}),e.jsx(a,{content:h})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"max-w-[400px] space-y-3",children:[e.jsx(n,{size:"tiny",placeholder:"tiny size"}),e.jsx(n,{size:"small",placeholder:"small size"}),e.jsx(n,{size:"medium",placeholder:"medium size"}),e.jsx(n,{size:"large",placeholder:"large size"})]}),e.jsx(a,{content:f})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"prefix and suffix"}),e.jsxs("div",{className:"max-w-[400px] space-y-3",children:[e.jsx(n,{placeholder:"icon prefix...",prefix:e.jsx(l,{size:18})}),e.jsx(n,{placeholder:"text prefix...",prefix:e.jsx("span",{children:"+86"})}),e.jsx(n,{placeholder:"icon suffix...",suffix:e.jsx(c,{size:18})})]}),e.jsx(a,{content:j})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"disabled"}),e.jsxs("div",{className:"space-y-2 max-w-[400px]",children:[e.jsx(x,{checked:o,onCheckedChange:p,children:e.jsxs("span",{children:["disabled: ",`${o}`]})}),e.jsx(n,{disabled:!!o,placeholder:"input sth...",prefix:e.jsx("span",{children:"$"})})]}),e.jsx(a,{content:I})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"status"}),e.jsxs("div",{className:"max-w-[400px] space-y-3",children:[e.jsx(n,{status:"error",placeholder:"error",prefix:e.jsx(l,{size:18})}),e.jsx(n,{status:"warn",placeholder:"warn",prefix:e.jsx(l,{size:18})}),e.jsx(n,{status:"readonly",placeholder:"readonly",value:"readonly..."})]}),e.jsx(a,{content:y})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"allow clear"}),e.jsx(n,{className:"max-w-[400px]",allowClear:!0}),e.jsx(a,{content:w})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"showCount"}),e.jsxs("div",{className:"max-w-[400px] space-y-3",children:[e.jsx(n,{placeholder:"without maxLength",showCount:!0}),e.jsx(n,{placeholder:"with maxLength",showCount:!0,maxLength:10})]}),e.jsx(a,{content:b})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"password"}),e.jsx(n,{type:"password",className:"max-w-[400px]",placeholder:"password"}),e.jsx(a,{content:v})]}),e.jsx(s,{as:"h2",className:"mb-4",children:"API"}),e.jsx(m,{rows:N})]})}export{F as default};
