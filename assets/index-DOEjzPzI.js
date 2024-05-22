import{j as e}from"./index-DS6qm14V.js";import{H as t,C as r}from"./index-B3S6f_Ni.js";import{N as c,D as d,S as n,A as i}from"./index-Dlsx_GZD.js";import{A as s,a as l}from"./AvatarGroup-BZ_Nfxlo.js";import"./index-DxDs9eJJ.js";import"./index-MDj1YPAE.js";const o=[{prop:"src",desc:"avatar image url",type:"string",required:!1,default:"-"},{prop:"shape",desc:"avatar shape",type:"tag: circle | round",required:!1,default:"circle"},{prop:"size",desc:"avatar size",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"bordered",desc:"whether add border around the avatar",type:"boolean",required:!1,default:!1},{prop:"color",desc:"avatar border color",type:"string",required:!1,default:"#eae8e8"},{prop:"alt",desc:"alt text for avatar",type:"string",required:!1,default:"-"},{prop:"text",desc:"text content for avatar",type:"string",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],m=[{prop:"children",type:"React.ReactNode",required:!0,default:"-"},{prop:"direction",desc:"avatar direction",type:"tag: horizontal | vertical",required:!1,default:"horizontal"},{prop:"gap",desc:"gap between avatar",type:"string",required:!1,default:"-12px"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],x=`\`\`\`typescript
import Checkbox from 'your path/Avatar';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4 text-gray-600 text-sm">
      <div className="flex flex-col items-center justify-center">
        <Avatar size="tiny" src={IMG_URL} />
        <p>tiny</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Avatar size="small" src={IMG_URL} />
        <p>small</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Avatar size="medium" src={IMG_URL} />
        <p>medium</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Avatar size="large" src={IMG_URL} />
        <p>large</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Avatar size="large" />
        <p>fallback</p>
      </div>
    </div>
  )
}
\`\`\`
`,p=`\`\`\`typescript
import Checkbox from 'your path/Avatar';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4">
      <Avatar size="large" src={IMG_URL} />
      <Avatar size="large" shape="round" src={IMG_URL} />
    </div>
  )
}
\`\`\`
`,u=`\`\`\`typescript
import Checkbox from 'your path/Avatar';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4">
      <Avatar text="T" size="tiny" className="bg-purple-500 text-white" />
      <Avatar text="S" size="small" className="bg-orange-500 text-white" />
      <Avatar text="M" size="medium" className="bg-blue-500 text-white" />
      <Avatar text="L" size="large" className="bg-red-500 text-white text-[22px]" />
      <Avatar text="A" shape="round" size="large" className="bg-green-500 text-white text-[22px]" />
    </div>
  )
}
\`\`\`
`,f=`\`\`\`typescript
import Checkbox from 'your path/Avatar';

export default function Demo() {
  return (
    <AvatarGroup>
      <Avatar src={IMG_URL} />
      <Avatar src={IMG_URL} />
      <Avatar src={IMG_URL} />
      <Avatar text="+2" size="medium" className="bg-gray-300 text-white" />
    </AvatarGroup>
    <AvatarGroup className="mt-3" direction="vertical">
      <Avatar src={IMG_URL} />
      <Avatar src={IMG_URL} />
      <Avatar src={IMG_URL} />
      <Avatar text="+2" size="medium" className="bg-gray-300 text-white" />
    </AvatarGroup>
  )
}
\`\`\`
`,v=`\`\`\`typescript
import Checkbox from 'your path/Avatar';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4">
      <Avatar bordered src={IMG_URL} />
      <Avatar bordered color="#8749F5" src={IMG_URL} />
      <Avatar bordered shape="round" color="#65ca16" src={IMG_URL} />
    </div>
  )
}
\`\`\`
`,a="https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png";function A(){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Avatar",sourceName:"Avatar"}),e.jsx(d,{children:"A component display user profile image"}),e.jsxs(n,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"flex items-end [&>*]:mr-4 text-gray-600 text-sm",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(s,{size:"tiny",src:a}),e.jsx("p",{children:"tiny"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(s,{size:"small",src:a}),e.jsx("p",{children:"small"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(s,{size:"medium",src:a}),e.jsx("p",{children:"medium"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(s,{size:"large",src:a}),e.jsx("p",{children:"large"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(s,{size:"large"}),e.jsx("p",{children:"fallback"})]})]}),e.jsx(r,{content:x})]}),e.jsxs(n,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"shape"}),e.jsxs("div",{className:"flex items-end [&>*]:mr-4",children:[e.jsx(s,{size:"large",src:a}),e.jsx(s,{size:"large",shape:"round",src:a})]}),e.jsx(r,{content:p})]}),e.jsxs(n,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-4",children:"bordered"}),e.jsxs("div",{className:"flex items-end [&>*]:mr-4",children:[e.jsx(s,{bordered:!0,src:a}),e.jsx(s,{bordered:!0,color:"#8749F5",src:a}),e.jsx(s,{bordered:!0,shape:"round",color:"#65ca16",src:a})]}),e.jsx(r,{content:v})]}),e.jsxs(n,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"text avatar"}),e.jsxs("div",{className:"flex items-end [&>*]:mr-4",children:[e.jsx(s,{text:"T",size:"tiny",className:"bg-purple-500 text-white"}),e.jsx(s,{text:"S",size:"small",className:"bg-orange-500 text-white"}),e.jsx(s,{text:"M",size:"medium",className:"bg-blue-500 text-white"}),e.jsx(s,{text:"L",size:"large",className:"bg-red-500 text-white text-[22px]"}),e.jsx(s,{text:"A",shape:"round",size:"large",className:"bg-green-500 text-white text-[22px]"})]}),e.jsx(r,{content:u})]}),e.jsxs(n,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"avatar group"}),e.jsxs(l,{children:[e.jsx(s,{src:a}),e.jsx(s,{src:a}),e.jsx(s,{src:a}),e.jsx(s,{text:"+2",size:"medium",className:"bg-gray-300 text-white"})]}),e.jsxs(l,{className:"mt-3",direction:"vertical",children:[e.jsx(s,{src:a}),e.jsx(s,{src:a}),e.jsx(s,{src:a}),e.jsx(s,{text:"+2",size:"medium",className:"bg-gray-300 text-white"})]}),e.jsx(r,{content:f})]}),e.jsx(t,{as:"h2",className:"mb-2",children:"API"}),e.jsx(t,{as:"h4",className:"mb-2",children:"Avatar"}),e.jsx(i,{rows:o}),e.jsx(t,{as:"h4",className:"my-2",children:"AvatarGroup"}),e.jsx(i,{rows:m})]})}export{A as default};
