import{d as v,r as u,j as e,W as C,C as R,G as V}from"./index-DS6qm14V.js";import{N,D as B,S as l,A as G}from"./index-Dlsx_GZD.js";import{B as z,c as O,H as s,C as i}from"./index-B3S6f_Ni.js";import{$ as w,a as L}from"./index-Dxzn9o8H.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-DMTVrYN4.js";import"./index-Dz-xE_2J.js";import"./index-BBltJE_X.js";import"./index-BVjPIHQF.js";import"./index-DV0JX9yz.js";const k=v({base:"flex gap-x-2.5"}),c=u.forwardRef((n,r)=>{const{value:d,type:p="outline",options:m,size:h,className:x,style:f,onValueChange:y}=n,[b,g]=u.useState(d||""),j=u.useMemo(()=>p==="outline"?"border-brand-500":"border-0 bg-brand-500 text-white hover:bg-brand-500/90 active:bg-brand-600",[p]);return e.jsx(w,{ref:r,className:k({class:x}),style:f,onValueChange:a=>{g(a),y?.(a)},children:m.map(a=>e.jsx(L,{asChild:!0,disabled:a.disabled,value:a.value,children:e.jsx(z,{outline:!0,type:"text",shape:"square",size:h,className:O({[j]:b===a.value}),children:a.label})},a.value))})});c.displayName="RadioButtonGroup";const o=c,q=`\`\`\`ts
import RadioButtonGroup from 'your path/RadioButtonGroup';
import  type { CommonOption } from 'your path/types/components';
const options: CommonOption[] = [
  {
    label: 'S',
    value: 's',
  },
  {
    label: 'M',
    value: 'm',
  },
  {
    label: 'L',
    value: 'l',
  },
  {
    label: 'XL',
    value: 'xl',
    disabled: true,
  },
];
export default function Demo() {
  const handleOnValueChange = (value: string) => {
    console.log('you choose: ', value);
  };
  return (
    <RadioButtonGroup options={options} onValueChange={handleOnValueChange} />
  )
}
\`\`\`
`,S=`\`\`\`ts
import RadioButtonGroup from 'your path/RadioButtonGroup';
export default function Demo() {
  return (
    <div className="flex flex-col gap-y-2">
      <p>tiny</p>
      <RadioButtonGroup
        size="tiny"
        options={options}
        onValueChange={handleOnValueChange}
      />
      <p>small</p>
      <RadioButtonGroup
        size="small"
        options={options}
        onValueChange={handleOnValueChange}
      />
      <p>tiny</p>
      <RadioButtonGroup
        size="medium"
        options={options}
        onValueChange={handleOnValueChange}
      />
      <p>tiny</p>
      <RadioButtonGroup
        size="large"
        options={options}
        onValueChange={handleOnValueChange}
      />
    </div>
  )
}
\`\`\`
`,$=`\`\`\`ts
import RadioButtonGroup from 'your path/RadioButtonGroup';
export default function Demo() {
  return (
    <div className="flex flex-col gap-y-2">
      <p>type:outline</p>
      <RadioButtonGroup
        type="outline"
        options={options}
        onValueChange={handleOnValueChange}
      />
      <p>type:solid</p>
      <RadioButtonGroup
        type="solid"
        options={options}
        onValueChange={handleOnValueChange}
      />
    </div>
  )
}
\`\`\`
`,D=`\`\`\`ts
import RadioButtonGroup from 'your path/RadioButtonGroup';
import  type { CommonOption } from 'your path/types/components';
import { RiBankCardLine, RiAlipayLine, RiWechatPayLine } from '@remixicon/react';
const options: CommonOption[] = [
  {
    label: (
      <div className="flex flex-col items-center">
        <RiBankCardLine size={28} />
        <p>card</p>
      </div>
    ),
    value: 'bank',
  },
  {
    label: (
      <div className="flex flex-col items-center">
        <RiAlipayLine size={28} />
        <p>alipay</p>
      </div>
    ),
    value: 'alipay',
  },
  {
    label: (
      <div className="flex flex-col items-center">
        <RiWechatPayLine size={28} />
        <p>wechat-pay</p>
      </div>
    ),
    value: 'wechat-pay',
  },
];
export default function Demo() {
  const handleOnValueChange = (value: string) => {
    console.log('you choose: ', value);
  };
  return (
    <RadioButtonGroup className="[&_button]:w-[100px] [&_button]:h-[80px]" options={options} onValueChange={handleOnValueChange} />
  )
}
\`\`\`
`,H=[{prop:"value",desc:"value of radio",type:"string",required:!1,default:"-"},{prop:"options",desc:"radio button config options(see RadioGroup)",type:"link: CommonOption(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/components.ts)",required:!0,default:"-"},{prop:"type",desc:"appearance of radio button",type:"tag: outline | solid",required:!1,default:"outline"},{prop:"size",desc:"size of radio button",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onValueChange",desc:"radio change callback",type:"(value: string) => void",required:!1,default:"-"}],t=[{label:"S",value:"s"},{label:"M",value:"m"},{label:"L",value:"l"},{label:"XL",value:"xl",disabled:!0}],A=[{label:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(C,{size:28}),e.jsx("p",{children:"card"})]}),value:"bank"},{label:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(R,{size:28}),e.jsx("p",{children:"alipay"})]}),value:"alipay"},{label:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(V,{size:28}),e.jsx("p",{children:"wechat-pay"})]}),value:"wechat-pay"}];function U(){const n=r=>{console.log("you choose: ",r)};return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"RadioButtonGroup",sourceName:"RadioButtonGroup"}),e.jsx(B,{children:"Radio selection only one can be selected but with button style"}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(o,{options:t,onValueChange:n}),e.jsx(i,{content:q})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"type"}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("p",{children:"type:outline"}),e.jsx(o,{type:"outline",options:t,onValueChange:n}),e.jsx("p",{children:"type:solid"}),e.jsx(o,{type:"solid",options:t,onValueChange:n})]}),e.jsx(i,{content:$})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx("p",{children:"tiny"}),e.jsx(o,{size:"tiny",options:t,onValueChange:n}),e.jsx("p",{children:"small"}),e.jsx(o,{size:"small",options:t,onValueChange:n}),e.jsx("p",{children:"tiny"}),e.jsx(o,{size:"medium",options:t,onValueChange:n}),e.jsx("p",{children:"tiny"}),e.jsx(o,{size:"large",options:t,onValueChange:n})]}),e.jsx(i,{content:S})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"custom content"}),e.jsx(o,{className:"[&_button]:w-[100px] [&_button]:h-[80px]",options:A,onValueChange:n}),e.jsx(i,{content:D})]}),e.jsx(s,{as:"h2",className:"mb-4",children:"API"}),e.jsx(G,{rows:H})]})}export{U as default};
