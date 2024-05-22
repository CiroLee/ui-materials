import{j as e,g as n}from"./index-DS6qm14V.js";import{N as l,D as t,S as r,f as a,A as m}from"./index-Dlsx_GZD.js";import{H as s,C as i}from"./index-B3S6f_Ni.js";import{A as c}from"./AvatarGroup-BZ_Nfxlo.js";import"./index-DxDs9eJJ.js";import"./index-MDj1YPAE.js";const o=`\`\`\`typescript
import Tag from 'your path/Tag';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag size="tiny">tiny</Tag>
      <Tag size="small">small</Tag>
      <Tag size="medium">medium</Tag>
      <Tag size="large">large</Tag>
    </div>
  )
}
\`\`\`
`,d=`\`\`\`typescript
import Tag from 'your path/Tag';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag color="default">default</Tag>
      <Tag color="primary">primary</Tag>
      <Tag color="success">success</Tag>
      <Tag color="info">infomation</Tag>
      <Tag color="warn">warn</Tag>
      <Tag color="danger">danger</Tag>
      <Tag className="text-white bg-[#e64980]">#e64980</Tag>
      <Tag className="text-white bg-[#212529]">#212529</Tag>
    </div>
  )
}
\`\`\`
`,p=`\`\`\`typescript
import Tag from 'your path/Tag';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag size="medium" shape="default" color="primary">primary</Tag>
      <Tag size="medium" shape="pill" color="primary">primary</Tag>
    </div>
  )
}
\`\`\`
`,g=`\`\`\`typescript
import Tag from 'your path/Tag';
import { RiUserSmileLine } from '@remixicon/react';
import Avatar from 'your path/Avatar';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag color="primary">
        <RiUserSmileLine size={12} className="mr-1" />
          <span className="h-full">icon smile</span>
      </Tag>
      <Tag shape="pill">
        <Avatar src={IMG_URL} className="w-[12px] h-[12px] mr-1" />
        <span className="h-full">avatar</span>
      </Tag>
    </div>
  )
}
\`\`\`
`,h=[{prop:"size",desc:"size of tag",type:"tag:tiny | small | medium | large",required:!1,default:"small"},{prop:"color",desc:"color theme of tag",type:"tag: default | primary | success | info | warn | danger",required:!1,default:"default"},{prop:"shape",desc:"shape of tag",type:"tag: default | pill",required:!1,default:"default"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}],x="https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png";function v(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tag",sourceName:"Tag"}),e.jsx(t,{children:"Display short texts"}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"flex items-center [&>div]:mr-2",children:[e.jsx(a,{size:"tiny",children:"tiny"}),e.jsx(a,{size:"small",children:"small"}),e.jsx(a,{size:"medium",children:"medium"}),e.jsx(a,{size:"large",children:"large"})]}),e.jsx(i,{content:o})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-4",children:"color"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{color:"default",children:"default"}),e.jsx(a,{color:"primary",children:"primary"}),e.jsx(a,{color:"success",children:"success"}),e.jsx(a,{color:"info",children:"infomation"}),e.jsx(a,{color:"warn",children:"warn"}),e.jsx(a,{color:"danger",children:"danger"}),e.jsx(a,{className:"text-white bg-[#e64980]",children:"#e64980"}),e.jsx(a,{className:"text-white bg-[#212529]",children:"#212529"})]}),e.jsx(i,{content:d})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-4",children:"shape"}),e.jsxs("div",{className:"flex items-center [&>div]:mr-2",children:[e.jsx(a,{size:"medium",shape:"default",color:"primary",children:"primary"}),e.jsx(a,{size:"medium",shape:"pill",color:"primary",children:"primary"})]}),e.jsx(i,{content:p})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-4",children:"custom children"}),e.jsxs("div",{className:"flex items-center [&>div]:mr-2",children:[e.jsxs(a,{color:"primary",children:[e.jsx(n,{size:13,className:"mr-1"}),e.jsx("span",{className:"h-full",children:"icon smile"})]}),e.jsxs(a,{shape:"pill",children:[e.jsx(c,{src:x,className:"w-[12px] h-[12px] mr-1"}),e.jsx("span",{className:"h-full",children:"avatar"})]})]}),e.jsx(i,{content:g})]}),e.jsx(s,{as:"h2",className:"my-4",children:"API"}),e.jsx(m,{rows:h})]})}export{v as default};
