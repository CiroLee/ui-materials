import{j as t,X as i,p as l,D as u}from"./index-DS6qm14V.js";import{H as n,B as e,C as s,a as o}from"./index-B3S6f_Ni.js";import{N as p,D as c,S as a,A as r}from"./index-Dlsx_GZD.js";const d=`\`\`\`typescript
import Checkbox from 'your path/Button';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button>primary</Button>
      <Button type="success">success</Button>
      <Button type="info">infomation</Button>
      <Button type="warn">warn</Button>
      <Button type="danger">danger</Button>
      <Button type="text">text</Button>
      <Button disabled outline type="primary">
        disabled
      </Button>
    </div>
  )
}
\`\`\`
`,m=`\`\`\`typescript
import Checkbox from 'your path/Button';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button outline>primary</Button>
      <Button outline type="success">success</Button>
      <Button outline type="info">infomation</Button>
      <Button outline type="warn">warn</Button>
      <Button outline type="danger">danger</Button>
      <Button outline type="text">text</Button>
    </div>
  )
}
\`\`\`
`,h=`\`\`\`typescript
import Checkbox from 'your path/Button';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button size="tiny">tiny</Button>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
    </div>
  )
}
\`\`\`
`,x=`\`\`\`typescript
import Checkbox from 'your path/Button';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button size="tiny" shape="default">default</Button>
      <Button size="small" shape="pill">round</Button>
      <Button size="medium" shape="circle">C</Button>
      <Button size="large" shape="square">S</Button>
    </div>
  )
}
\`\`\`
`,B=`\`\`\`typescript
import Checkbox from 'your path/Button';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button shape="pill" block>button</Button>
      <Button block>button</Button>
      <Button outline block>button</Button>
    </div>
  )
}
\`\`\`
`,f=`\`\`\`typescript
import Checkbox from 'your path/Button';
import { RiUserLine, RiUpload2Line, RiLoader2Line } from '@remixicon/react';
export default function Demo() {
  return (
    <div className="flex items-center [&_button:not(:first-child)]:ml-2">
      <Button type="primary">
        <RiUserLine size={16} className="mr-1" />
        <span>RiUserLine</span>
      </Button>
      <Button type="primary" shape="square">
        <RiUserLine size={16} />
      </Button>
      <Button type="primary">
        <span>upload</span>
        <RiUpload2Line size={16} className="ml-1" />
      </Button>
      <Button type="primary" loading>
        <RiLoader2Line size={16} className="mr-1 animate-spin" />
        <span>Loading</span>
      </Button>
    </div>
  )
}
\`\`\`
`,j=`\`\`\`typescript
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  return (
    <div className="flex flex-wrap space-x-3">
      <ButtonGroup className="mb-2">
        <Button>apple</Button>
        <Button>banana</Button>
        <Button>orange</Button>
      </ButtonGroup>
        <ButtonGroup className="mb-2">
        <Button outline>apple</Button>
        <Button outline>banana</Button>
        <Button outline>orange</Button>
      </ButtonGroup>
        <ButtonGroup className="mb-2">
        <Button shape="pill" outline>
            apple
        </Button>
        <Button shape="pill" outline>
            banana
        </Button>
        <Button shape="pill" outline>
            orange
        </Button>
      </ButtonGroup>
      <ButtonGroup className="mb-2">
        <Button outline shape="pill">
            apple
        </Button>
        <Button outline shape="pill">
            banana
        </Button>
      </ButtonGroup>
    </div>
  )
}
\`\`\`
`,y=[{prop:"type",desc:"button type",type:"tag: primary | success | info | warn | danger",required:!1,default:"primary"},{prop:"size",desc:"button size",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"outline",desc:"button outline",type:"boolean",required:!1,default:!1},{prop:"disabled",desc:"disable status",type:"boolean",required:!1,default:" false"},{prop:"block",desc:"width adjust to parent",type:"boolean",required:!1,default:!1},{prop:"loading",desc:"loading status",type:"boolean",required:!1,default:!1},{prop:"shape",desc:"button shape",type:"tag: default | pill | circle | square",required:!1,default:"default"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"children",type:"React.ReactNode",required:!1,default:"-"},{prop:"onClick",type:"(event: MouseEvent) => void",required:!1,default:"-"}],b=[{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"children",type:"React.ReactNode",required:!0,default:"-"}];function v(){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Button",sourceName:"Button"}),t.jsx(c,{children:"A common form component used to trigger actions"}),t.jsxs(a,{className:"mb-4",children:[t.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(e,{children:"primary"}),t.jsx(e,{type:"success",children:"success"}),t.jsx(e,{type:"info",children:"information"}),t.jsx(e,{type:"warn",children:"warn"}),t.jsx(e,{type:"danger",children:"danger"}),t.jsx(e,{type:"text",children:"text"}),t.jsx(e,{disabled:!0,outline:!0,type:"primary",children:"disabled"})]}),t.jsx(s,{content:d})]}),t.jsxs(a,{className:"mb-4",children:[t.jsx(n,{as:"h4",className:"mb-2",children:"outline"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(e,{outline:!0,children:"primary"}),t.jsx(e,{outline:!0,type:"success",children:"success"}),t.jsx(e,{outline:!0,type:"info",children:"information"}),t.jsx(e,{outline:!0,type:"warn",children:"warn"}),t.jsx(e,{outline:!0,type:"danger",children:"danger"}),t.jsx(e,{outline:!0,type:"text",children:"text"})]}),t.jsx(s,{content:m})]}),t.jsxs(a,{className:"mb-4",children:[t.jsx(n,{as:"h4",className:"mb-2",children:"size"}),t.jsxs("div",{className:"[&_button:not(:first-child)]:ml-2",children:[t.jsx(e,{size:"tiny",children:"tiny"}),t.jsx(e,{size:"small",children:"small"}),t.jsx(e,{size:"medium",children:"medium"}),t.jsx(e,{size:"large",children:"large"})]}),t.jsx(s,{content:h})]}),t.jsxs(a,{className:"mb-4",children:[t.jsx(n,{as:"h4",className:"mb-2",children:"shape"}),t.jsxs("div",{className:"[&_button:not(:first-child)]:ml-2",children:[t.jsx(e,{size:"tiny",shape:"default",children:"default"}),t.jsx(e,{size:"small",shape:"pill",children:"pill"}),t.jsx(e,{shape:"circle",children:"C"}),t.jsx(e,{size:"large",shape:"square",children:"S"})]}),t.jsx(s,{content:x})]}),t.jsxs(a,{className:"mb-4",children:[t.jsx(n,{as:"h4",className:"mb-2",children:"block"}),t.jsxs("div",{className:"[&_button:not(:first-child)]:mt-2",children:[t.jsx(e,{shape:"pill",block:!0,children:"button"}),t.jsx(e,{block:!0,children:"button"}),t.jsx(e,{outline:!0,block:!0,children:"button"})]}),t.jsx(s,{content:B})]}),t.jsxs(a,{className:"mb-4",children:[t.jsx(n,{as:"h4",className:"mb-2",children:"width icon"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsxs(e,{type:"primary",children:[t.jsx(i,{size:16,className:"mr-1"}),t.jsx("span",{children:"User"})]}),t.jsx(e,{type:"primary",shape:"square",children:t.jsx(i,{size:16})}),t.jsxs(e,{type:"primary",children:[t.jsx("span",{children:"Upload"}),t.jsx(l,{size:16,className:"ml-1"})]}),t.jsxs(e,{type:"primary",loading:!0,children:[t.jsx(u,{size:16,className:"mr-1 animate-spin"}),t.jsx("span",{children:"Loading"})]})]}),t.jsx(s,{content:f})]}),t.jsxs(a,{className:"mb-4",children:[t.jsx(n,{as:"h4",className:"mb-2",children:"buttonGroup"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsxs(o,{className:"mb-2",children:[t.jsx(e,{children:"apple"}),t.jsx(e,{children:"banana"}),t.jsx(e,{children:"orange"})]}),t.jsxs(o,{className:"mb-2",children:[t.jsx(e,{outline:!0,children:"apple"}),t.jsx(e,{outline:!0,children:"banana"}),t.jsx(e,{outline:!0,children:"orange"})]}),t.jsxs(o,{className:"mb-2",children:[t.jsx(e,{shape:"pill",outline:!0,children:"apple"}),t.jsx(e,{shape:"pill",outline:!0,children:"banana"}),t.jsx(e,{shape:"pill",outline:!0,children:"orange"})]}),t.jsxs(o,{className:"mb-2",children:[t.jsx(e,{outline:!0,shape:"pill",children:"apple"}),t.jsx(e,{outline:!0,shape:"pill",children:"banana"})]})]}),t.jsx(s,{content:j})]}),t.jsx(n,{as:"h2",className:"mb-2",children:"API"}),t.jsx(n,{as:"h4",className:"mb-2",children:"Button"}),t.jsx(r,{rows:y}),t.jsx(n,{as:"h4",className:"my-2",children:"ButtonGroup"}),t.jsx(r,{rows:b})]})}export{v as default};
