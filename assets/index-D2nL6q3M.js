import{r as l,j as e,s as r,y as d}from"./index-DS6qm14V.js";import{H as t,C as c}from"./index-B3S6f_Ni.js";import{N as o,D as h,S as i,A as m}from"./index-Dlsx_GZD.js";import{S as s}from"./index-WaRToqb7.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-BVjPIHQF.js";const u=[{prop:"defaultChecked",desc:"whether default is checked",type:"boolean",required:!1,default:"-"},{prop:"checked",desc:"whether checked",type:"boolean",required:!1,default:!1},{prop:"size",desc:"switch size",type:"tag: tiny | small| medium | large",required:!1,default:"medium"},{prop:"checkedThumb",desc:"checked thumb",type:"React.ReactNode",required:!1,default:"-"},{prop:"unCheckedThumb",desc:"unchecked thumb",type:"React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onCheckedChange",desc:"switch change callback",type:"(checked: boolean) => void",required:!1,default:"-"}],f=`\`\`\`typescript
import { useState } from 'react';
import Switch from 'your path/Switch';

export default function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Switch checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}
\`\`\`
`,p=`\`\`\`typescript
import Switch from 'your path/Switch';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Switch size="tiny" />
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </div>
  )
}
\`\`\`
`,x=`\`\`\`typescript
import Switch from 'your path/Switch';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Switch disabled />
      <Switch checked disabled />
    </div>
  )
}
\`\`\`
`,j=`\`\`\`typescript
import Switch from 'your path/Switch';
import { RiCheckLine, RiCloseLine } from '@remixicon/react';

export default function Demo() {
  return (
    <Switch
      checkedThumb={
        <div className="w-full h-full flex justify-center items-center">
            <RiCheckLine size={12} />
        </div>
        }
        unCheckedThumb={
        <div className="w-full h-full flex justify-center items-center">
            <RiCloseLine size={12} />
        </div>
        }
    />
  )
}
\`\`\`
`;function z(){const[n,a]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{title:"Switch",sourceName:"Switch"}),e.jsx(h,{children:"A component allows to toggle status"}),e.jsxs(i,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"basic"}),e.jsxs("p",{className:"mb-1",children:["switch: ",n?"on":"off"]}),e.jsx(s,{checked:n,onCheckedChange:a}),e.jsx(c,{content:f})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"[&_button:not(:first-child)]:ml-2",children:[e.jsx(s,{size:"tiny"}),e.jsx(s,{size:"small"}),e.jsx(s,{size:"medium"}),e.jsx(s,{size:"large"})]}),e.jsx(c,{content:p})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"disabled"}),e.jsxs("div",{className:"[&_button:not(:first-child)]:ml-2",children:[e.jsx(s,{disabled:!0}),e.jsx(s,{checked:!0,disabled:!0})]}),e.jsx(c,{content:x})]}),e.jsxs(i,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"custom thumb inner"}),e.jsx(s,{checkedThumb:e.jsx("div",{className:"w-full h-full flex justify-center items-center",children:e.jsx(r,{size:12})}),unCheckedThumb:e.jsx("div",{className:"w-full h-full flex justify-center items-center",children:e.jsx(d,{size:12})})}),e.jsx(c,{content:j})]}),e.jsx(t,{as:"h2",className:"mb-2",children:"API"}),e.jsx(m,{rows:u})]})}export{z as default};
