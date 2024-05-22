import{j as n}from"./index-DS6qm14V.js";import{N as p,D as r,S as l,A as i}from"./index-Dlsx_GZD.js";import{H as e,C as s}from"./index-B3S6f_Ni.js";import{R as a}from"./index-D2p96pFu.js";import"./index-Dxzn9o8H.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-DMTVrYN4.js";import"./index-Dz-xE_2J.js";import"./index-BBltJE_X.js";import"./index-BVjPIHQF.js";import"./index-DV0JX9yz.js";const c=[{prop:"direction",desc:"item direction",type:"tag: horizontal | vertical",required:!1,default:"horizontal"},{prop:"value",desc:"current selected value",type:"string",required:!1,default:"-"},{prop:"options",desc:"radio config options",type:"CommonOption[]",required:!0,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onValueChange",desc:"radio change callback",type:"(value: string) => void",required:!1,default:"-"}],u=[{prop:"value",desc:"value to trigger when value change",type:"string",required:!0,default:"-"},{prop:"label",desc:"label of radio",type:"React.ReactNode",required:!0,default:"-"},{prop:"disabled",desc:"disable status",type:"boolean",required:!1,default:"false"}],d=`\`\`\`typescript
import RadioGroup, { type CommonOption } from 'your path/RadioGroup';

export default function Demo() {
const options: CommonOption[] = [
  {
    value: 'apple',
    label: 'apple',
  },
    {
    value: 'banana',
    label: 'banana',
  },
]
  return (
    <RadioGroup options={options} onValueChange={(v) => console.log('you choose: ', v)} />
  )
}
\`\`\`
`,m=`\`\`\`typescript
import RadioGroup, { type CommonOption } from 'your path/RadioGroup';

export default function Demo() {
const options: CommonOption[] = [
  {
    value: 'apple',
    label: 'apple',
  },
    {
    value: 'banana',
    label: 'banana',
  },
]
  return (
    <RadioGroup
      options={options}
      className="pb-3 mb-3 border-b"
      direction="horizontal"
      onValueChange={(v) => console.log('you choose: ', v)}
    />
    <RadioGroup options={options} direction="vertical" onValueChange={(v) => console.log('you choose: ', v)} />
  )
}
\`\`\`
`,b=`\`\`\`typescript
import RadioGroup, { type CommonOption } from 'your path/RadioGroup';

export default function Demo() {
const options: CommonOption[] = [
  {
    value: 'apple',
    label: 'apple',
  },
  {
    value: 'banana',
    label: 'banana',
  },
  {
    value: 'orange',
    label: 'orange',
    disabled: true,
  },
];
  return (
    <RadioGroup options={options} onValueChange={(v) => console.log('you choose: ', v)} />
  )
}
\`\`\`
`,h=`\`\`\`typescript
import RadioGroup, { type CommonOption } from 'your path/RadioGroup';

export default function Demo() {
const options: CommonOption[] = [
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
  },
];
  return (
    <RadioGroup
      className="[&>label_button]:self-baseline [&_button]:mt-[6px]"
      options={option}
      onValueChange={(v) => console.log('you choose: ', v)}
    />
  )
}
\`\`\`
`,t=[{value:"apple",label:"apple"},{value:"banana",label:"banana"}],v=[{value:"apple",label:"apple"},{value:"banana",label:"banana"},{value:"orange",label:"orange",disabled:!0}],x=[{value:"apple",label:n.jsxs("div",{children:[n.jsx("p",{children:"apple"}),n.jsx("p",{children:"🍎"})]})},{value:"banana",label:n.jsxs("div",{children:[n.jsx("p",{children:"banana"}),n.jsx("p",{children:"🍌"})]})},{value:"orange",label:n.jsxs("div",{children:[n.jsx("p",{children:"orange"}),n.jsx("p",{children:"🍊"})]})}];function H(){return n.jsxs(n.Fragment,{children:[n.jsx(p,{title:"RadioGroup",sourceName:"RadioGroup"}),n.jsx(r,{children:"Radio selection only on can be selected"}),n.jsxs(l,{className:"mb-4",children:[n.jsx(e,{as:"h4",className:"mb-2",children:"basic"}),n.jsx(a,{options:t,onValueChange:o=>console.log("you choose: ",o)}),n.jsx(s,{content:d})]}),n.jsxs(l,{className:"mb-4",children:[n.jsx(e,{as:"h4",className:"mb-2",children:"direction"}),n.jsx(a,{options:t,className:"pb-3 mb-3 border-b",direction:"horizontal",onValueChange:o=>console.log("you choose: ",o)}),n.jsx(a,{options:t,direction:"vertical",onValueChange:o=>console.log("you choose: ",o)}),n.jsx(s,{content:m})]}),n.jsxs(l,{className:"mb-4",children:[n.jsx(e,{as:"h4",className:"mb-2",children:"disabled"}),n.jsx(a,{options:v,onValueChange:o=>console.log("you choose: ",o)}),n.jsx(s,{content:b})]}),n.jsxs(l,{className:"mb-4",children:[n.jsx(e,{as:"h4",className:"mb-2",children:"custom"}),n.jsx(a,{className:"[&>label_button]:self-baseline [&_button]:mt-[6px]",options:x,onValueChange:o=>console.log("you choose: ",o)}),n.jsx(s,{content:h})]}),n.jsx(e,{as:"h2",className:"mb-2",children:"API"}),n.jsx(e,{as:"h4",className:"mb-2",children:"RadioGroup"}),n.jsx(i,{rows:c}),n.jsx(e,{as:"h4",className:"my-2",children:"CommonOption"}),n.jsx(i,{rows:u})]})}export{H as default};
