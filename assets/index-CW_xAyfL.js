import{j as s}from"./index-DS6qm14V.js";import{N as a,D as o,S as l,A as d}from"./index-Dlsx_GZD.js";import{H as n,C as i}from"./index-B3S6f_Ni.js";import{C as e}from"./index-CYnvvJAA.js";const t=`\`\`\`ts
import Code from 'your path/Code';

export default function Demo() {
  return <Code>npm install tailwindcss -D</Code>;
}
\`\`\`
`,r=`\`\`\`ts
import Code from 'your path/Code';

export default function Demo() {
  return (
    <>
      <Code size="tiny">npm install tailwindcss -D</Code>
      <Code size="small">npm install tailwindcss -D</Code>
      <Code size="medium">npm install tailwindcss -D</Code>
      <Code size="large">npm install tailwindcss -D</Code>
    </>
  )
}
\`\`\`
`,c=`\`\`\`ts
import Code from 'your path/Code';

export default function Demo() {
  return (
    <>
      <Code color="default">npm install tailwindcss -D</Code>
      <Code color="primary">npm install tailwindcss -D</Code>
      <Code color="success">npm install tailwindcss -D</Code>
      <Code color="info">npm install tailwindcss -D</Code>
      <Code color="warn">npm install tailwindcss -D</Code>
      <Code color="error">npm install tailwindcss -D</Code>
    </>
  )
}
\`\`\`
`,m=[{prop:"children",desc:"content of code",type:"React.ReactNode",required:!0,default:"-"},{prop:"size",desc:"size of code",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"color",desc:"color of code",type:"tag: default | primary | success | info | warn | danger",required:!1,default:"default"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}];function f(){return s.jsxs(s.Fragment,{children:[s.jsx(a,{title:"Code",sourceName:"Code"}),s.jsx(o,{children:"A component to emphasize short code style"}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(e,{children:"npm install tailwindcss -D"}),s.jsx(i,{content:t})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"inline-flex flex-col gap-2",children:[s.jsxs("div",{children:[s.jsx("p",{children:"tiny:"}),s.jsx(e,{size:"tiny",children:"npm install tailwindcss -D"})]}),s.jsxs("div",{children:[s.jsx("p",{children:"small:"}),s.jsx(e,{size:"small",children:"npm install tailwindcss -D"})]}),s.jsxs("div",{children:[s.jsx("p",{children:"medium:"}),s.jsx(e,{size:"medium",children:"npm install tailwindcss -D"})]}),s.jsxs("div",{children:[s.jsx("p",{children:"large:"}),s.jsx(e,{size:"large",children:"npm install tailwindcss -D"})]})]}),s.jsx(i,{content:r})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"color"}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsx(e,{color:"default",children:"npm install tailwindcss -D"}),s.jsx(e,{color:"primary",children:"npm install tailwindcss -D"}),s.jsx(e,{color:"success",children:"npm install tailwindcss -D"}),s.jsx(e,{color:"info",children:"npm install tailwindcss -D"}),s.jsx(e,{color:"warn",children:"npm install tailwindcss -D"}),s.jsx(e,{color:"danger",children:"npm install tailwindcss -D"})]}),s.jsx(i,{content:c})]}),s.jsx(n,{as:"h2",className:"mb-4",children:"API"}),s.jsx(d,{rows:m})]})}export{f as default};
