import{j as e,t as i}from"./index-DS6qm14V.js";import{N as c,D as o,S as r,A as l}from"./index-Dlsx_GZD.js";import{H as s,L as n,C as t}from"./index-B3S6f_Ni.js";const a=`\`\`\`ts
import Link from 'your path/Link';
export default function Demo() {
  return (
    <Link href="https://github.com">Link</Link>
  )
}
\`\`\`
`,h=`\`\`\`ts
import Link from 'your path/Link';
export default function Demo() {
  return (
   <div className="flex items-center gap-3">
      <Link size="tiny" href="https://github.com">
        tiny
      </Link>
      <Link size="small" href="https://github.com">
        small
      </Link>
      <Link size="medium" href="https://github.com">
        medium
      </Link>
      <Link size="large" href="https://github.com">
        large
      </Link>
  </div>
  )
}
\`\`\`
`,m=`\`\`\`ts
import Link from 'your path/Link';
export default function Demo() {
  return (
    <Link href="https://github.com" disabled>disabled Link</Link>
  )
}
\`\`\`
`,d=`\`\`\`ts
import Link from 'your path/Link';
export default function Demo() {
  return (
   <div className="flex items-center gap-3">
      <Link color="default" href="https://github.com">
        default
      </Link>
      <Link color="primary"  href="https://github.com">
        primary
      </Link>
      <Link color="success"  href="https://github.com">
        success
      </Link>
      <Link color="warn" href="https://github.com">
        warn
      <<Link color="danger" href="https://github.com">
        danger
      </Link>/Link>
  </div>
  )
}
\`\`\`
`,u=`\`\`\`ts
import Link from 'your path/Link';
export default function Demo() {
  return (
   <div className="flex items-center gap-3">
      <Link isBlock color="default" href="https://github.com">
        default
      </Link>
      <Link isBlock color="primary"  href="https://github.com">
        primary
      </Link>
      <Link isBlock color="success"  href="https://github.com">
        success
      </Link>
      <Link isBlock color="warn" href="https://github.com">
        warn
      <<Link isBlock color="danger" href="https://github.com">
        danger
      </Link>/Link>
  </div>
  )
}
\`\`\`
`,p=`\`\`\`ts
import Link from 'your path/Link';
export default function Demo() {
  return (
    <Link isBlank href="https://github.com">external Link</Link>
  )
}
\`\`\`
`,f=`\`\`\`ts
import Link from 'your path/Link';
import { RiShareBoxLine } from '@remixicon/react';

export default function Demo() {
  return (
    <Link href="#" isBlock anchorIcon={<RiShareBoxLine className="ml-1" size={16} />}>
      show anchorIcon
    </Link>
  )
}
\`\`\`
`,k=`\`\`\`ts
import Link from 'your path/Link';
export default function Demo() {
  return (
   <div className="flex items-center gap-3">
      <Link color="default" underline href="https://github.com">
        default
      </Link>
      <Link color="primary" underline href="https://github.com">
        primary
      </Link>
      <Link color="success" underline  href="https://github.com">
        success
      </Link>
      <Link color="warn" underline href="https://github.com">
        warn
      <<Link color="danger" underline href="https://github.com">
        danger
      </Link>/Link>
  </div>
  )
}
\`\`\`
`,x=[{prop:"href",desc:"link address",type:"string",required:!0,default:"-"},{prop:"size",desc:"link size",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"disabled",desc:"whether set link disabled",type:"boolean",required:!1,default:"false"},{prop:"underline",desc:"whether set link underline when hover",type:"boolean",required:!1,default:!1},{prop:"isBlock",desc:"whether set link as block width hover effect",type:"boolean",required:!1,default:"false"},{prop:"isBlank",desc:"whether open in new tab",type:"boolean",required:!1,default:"false"},{prop:"anchorIcon",desc:"link icon",type:"React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onClick",desc:"click event",type:"() => void",required:!1,default:"-"}];function j(){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Link",sourceName:"Link"}),e.jsx(o,{children:"A component used to navigate between pages"}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(n,{href:"https://github.com",children:"Link"}),e.jsx(t,{content:a})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{size:"tiny",href:"https://github.com",children:"tiny"}),e.jsx(n,{size:"small",href:"https://github.com",children:"small"}),e.jsx(n,{size:"medium",href:"https://github.com",children:"medium"}),e.jsx(n,{size:"large",href:"https://github.com",children:"large"})]}),e.jsx(t,{content:h})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"disabled"}),e.jsx(n,{href:"https://github.com",disabled:!0,children:"disabled Link"}),e.jsx(t,{content:m})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"color"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{color:"default",href:"https://github.com",children:"default"}),e.jsx(n,{color:"primary",href:"https://github.com",children:"primary"}),e.jsx(n,{color:"success",href:"https://github.com",children:"success"}),e.jsx(n,{color:"warn",href:"https://github.com",children:"warn"}),e.jsx(n,{color:"danger",href:"https://github.com",children:"danger"})]}),e.jsx(t,{content:d})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"underline"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{color:"default",underline:!0,href:"https://github.com",children:"default"}),e.jsx(n,{color:"primary",underline:!0,href:"https://github.com",children:"primary"}),e.jsx(n,{color:"success",underline:!0,href:"https://github.com",children:"success"}),e.jsx(n,{color:"warn",underline:!0,href:"https://github.com",children:"warn"}),e.jsx(n,{color:"danger",underline:!0,href:"https://github.com",children:"danger"})]}),e.jsx(t,{content:k})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"isBlock"}),e.jsxs("div",{className:"flex items-center gay-3",children:[e.jsx(n,{href:"https://github.com",isBlock:!0,children:"default"}),e.jsx(n,{href:"https://github.com",color:"primary",isBlock:!0,children:"primary"}),e.jsx(n,{href:"https://github.com",color:"success",isBlock:!0,children:"success"}),e.jsx(n,{href:"https://github.com",color:"warn",isBlock:!0,children:"warn"}),e.jsx(n,{href:"https://github.com",color:"danger",isBlock:!0,children:"danger"})]}),e.jsx(t,{content:u})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"isBlank"}),e.jsx(n,{href:"/Link",isBlank:!0,children:"external link"}),e.jsx(t,{content:p})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"anchorIcon"}),e.jsx(n,{href:"https://github.com",isBlock:!0,anchorIcon:e.jsx(i,{className:"ml-1",size:16}),children:"show anchorIcon"}),e.jsx(t,{content:f})]}),e.jsx(s,{as:"h2",className:"mb-2",children:"API"}),e.jsx(l,{rows:x})]})}export{j as default};
