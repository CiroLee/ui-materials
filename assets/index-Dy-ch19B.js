import{j as e}from"./index-DS6qm14V.js";import{C as s,a as d}from"./CheckboxGroup-D0ppv6B2.js";import{H as n,C as o}from"./index-B3S6f_Ni.js";import{N as p,D as i,S as l,A as c}from"./index-Dlsx_GZD.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-BVjPIHQF.js";import"./index-DV0JX9yz.js";const h=[{prop:"value",desc:"current selected value",type:"tag: string | number",required:!1,default:"-"},{prop:"checked",desc:"whether the checkbox is checked",type:"boolean",required:!1,default:"false"},{prop:"disabled",desc:"whether the checkbox is disabled",type:"boolean",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"children",type:"React.ReactNode",required:!1,default:"-"},{prop:"onCheckedChange",desc:"checkbox change callback",type:"(checked: boolean, value?: string | number) => void",required:!1,default:"-"}],u=[{prop:"value",desc:"current selected value",type:"tag: string | number",required:!1,default:"-"},{prop:"options",desc:"checkbox config options",type:"CheckboxGroupOption[]",required:!0,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onCheckedChange",desc:"checkbox change callback",type:"(list: (string | number)[]) => void",required:!1,default:"-"}],b=`\`\`\`typescript
import Checkbox from 'your path/Checkbox';

export default function Demo() {
  return (
    <Checkbox
      checked
      value="apple"
      onCheckedChange={(checked, value) => console.log(checked, value)}
    >
      apple
    </Checkbox>
  )
}
\`\`\`
`,x=`\`\`\`typescript
import Checkbox from 'your path/Checkbox';

export default function Demo() {
  return (
    <div className="flex items-center [&>*]:mr-2">
      <Checkbox disabled>disabled</Checkbox>
      <Checkbox checked disabled>disabled</Checkbox>
    </div>
  )
}
\`\`\`
`,m=`\`\`\`typescript
import {type CheckboxProps, CheckboxGroup } from 'your path/Checkbox';

export default function Demo() {
  const checkboxGroup: CheckboxProps[] = [
    {
      value: 'apple',
      label: (
        <div>
          <p>apple</p>
          <p>🍎</p>
        </div>
      ),
    },
    {
      value: 'banana',
      label: (
        <div>
          <p>banana</p>
          <p>🍌</p>
        </div>
      ),
    },
    {
      value: 'orange',
      label: (
        <div>
          <p>orange</p>
          <p>🍊</p>
        </div>
      ),
      disabled: true,
    },
  ];
  return (
    <CheckboxGroup
      value="orange"
      className="flex [&>label]:mr-2 [&>label_button]:self-baseline [&_button]:mt-[6px]"
      options={checkboxGroup}
      onCheckedChange={(list) => console.log('what you choose:', list)}
    />
  )
}
\`\`\`
`;function w(){const r=[{value:"apple",label:e.jsxs("div",{children:[e.jsx("p",{children:"apple"}),e.jsx("p",{children:"🍎"})]})},{value:"banana",label:e.jsxs("div",{children:[e.jsx("p",{children:"banana"}),e.jsx("p",{children:"🍌"})]})},{value:"orange",label:e.jsxs("div",{children:[e.jsx("p",{children:"orange"}),e.jsx("p",{children:"🍊"})]}),disabled:!0}];return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Checkbox",sourceName:"Checkbox"}),e.jsx(i,{children:"A component allows for multiple selections"}),e.jsxs(l,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(s,{checked:!0,value:"apple",onCheckedChange:(a,t)=>console.log(a,t),children:"apple"}),e.jsx(o,{content:b})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"disabled"}),e.jsxs("div",{className:"flex items-center [&>*]:mr-2",children:[e.jsx(s,{disabled:!0,children:"disabled"}),e.jsx(s,{checked:!0,disabled:!0,children:"disabled"})]}),e.jsx(o,{content:x})]}),e.jsxs(l,{children:[e.jsx(n,{as:"h4",className:"mb-2",children:"checkbox group"}),e.jsx(d,{value:"orange",className:"flex [&>label]:mr-2 [&>label_button]:self-baseline [&_button]:mt-[6px]",options:r,onCheckedChange:a=>console.log("what you choose:",a)}),e.jsx(o,{content:m})]}),e.jsx(n,{as:"h2",className:"mb-2",children:"API"}),e.jsx(n,{as:"h4",className:"mb-2",children:"Checkbox"}),e.jsx(c,{rows:h}),e.jsx(n,{as:"h4",className:"my-2",children:"CheckboxGroup"}),e.jsx(c,{rows:u})]})}export{w as default};
