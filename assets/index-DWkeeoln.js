import{d as j,r as B,j as e,e as v,s as N}from"./index-DS6qm14V.js";import{H as s,C as r}from"./index-B3S6f_Ni.js";import{A as t}from"./AvatarGroup-BZ_Nfxlo.js";import{N as y,D as z,S as o,A as C}from"./index-Dlsx_GZD.js";import"./index-DxDs9eJJ.js";import"./index-MDj1YPAE.js";const R=j({base:"flex justify-center items-center absolute bg-[var(--bg-color)] text-[--text-color]  border-white box-border origin-center -translate-y-1/2",variants:{size:{small:"min-w-[16px] h-[16px] text-[10px] rounded-[8px]",medium:"min-w-[20px] h-[20px] text-[14px] rounded-[10px]",large:"min-w-[24px] h-[24px] text-[16px] rounded-[12px]"},placement:{"top-right":"","top-left":"","bottom-right":"","bottom-left":""},outline:{false:"border-0",true:"border-[2px]"}},compoundVariants:[{size:"small",placement:"top-right",class:"top-[10%] right-[10%] translate-x-1/2"},{size:"medium",placement:"top-right",class:"top-[8%] right-[8%] translate-x-1/2"},{size:"large",placement:"top-right",class:"top-[6%] right-[6%] translate-x-1/2"},{size:"small",placement:"top-left",class:"top-[10%] left-[10%] -translate-x-1/2"},{size:"medium",placement:"top-left",class:"top-[8%] left-[8%] -translate-x-1/2"},{size:"large",placement:"top-left",class:"top-[6%] left-[6%] -translate-x-1/2"},{size:"small",placement:"bottom-right",class:"bottom-[10%] right-[10%] translate-y-1/2 translate-x-1/2"},{size:"medium",placement:"bottom-right",class:"bottom-[8%] right-[8%] translate-y-1/2 translate-x-1/2"},{size:"large",placement:"bottom-right",class:"bottom-[6%] right-[6%] translate-y-1/2 translate-x-1/2"},{size:"small",placement:"bottom-left",class:"bottom-[10%] left-[10%] translate-y-1/2 -translate-x-1/2"},{size:"medium",placement:"bottom-left",class:"bottom-[8%] left-[8%] translate-y-1/2 -translate-x-1/2"},{size:"large",placement:"bottom-left",class:"bottom-[6%] left-[6%] translate-y-1/2 -translate-x-1/2"}],defaultVariants:{size:"medium",placement:"top-right"}}),l=B.forwardRef(function(c,i){const{size:d,placement:m,content:p,bgColor:x="#FF4C3F",textColor:g="#fff",outline:f=!0,children:h,className:b,style:u}=c;return e.jsxs("div",{className:"inline-flex relative box-border",ref:i,children:[h,e.jsx("div",{className:R({size:d,placement:m,outline:f,class:b}),style:{"--bg-color":x,"--text-color":g,...u},children:p})]})});l.displayName="Badge";const a=l,A=`\`\`\`typescript
import Checkbox from 'your path/Badge';

export default function Demo() {
  return (
    <div className="flex gap-4">
    <Badge size="small" content="9">
        <Avatar src={IMG_URL} />
    </Badge>
    <Badge size="medium" content="9">
    <Avatar src={IMG_URL} />
    </Badge>
    <Badge size="large" content="9">
    <Avatar src={IMG_URL} />
    </Badge>
    </div>
  )
}
\`\`\`
`,M=`\`\`\`typescript
import Checkbox from 'your path/Badge';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Badge content="2" bgColor="#8749F5">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="2" bgColor="#ffc000">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="2" bgColor="green" textColor="purple">
        <Avatar src={IMG_URL} />
      </Badge>
    </div>
  )
}
\`\`\`
`,L=`\`\`\`typescript
import Checkbox from 'your path/Badge';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Badge className="px-1" content="99+" placement="top-right">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="9" placement="bottom-right">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="9" placement="top-left">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="9" placement="bottom-left">
        <Avatar src={IMG_URL} />
      </Badge>
    </div>
  )
}
\`\`\`
`,I=`\`\`\`typescript
import Checkbox from 'your path/Badge';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Badge content="2" outline={false}>
        <Avatar shape="round" src={IMG_URL} />
        </Badge>
      <Badge content="2" outline={false}>
        <Avatar src={IMG_URL} />
      </Badge>
    </div>
  )
}
\`\`\`
`,U=`\`\`\`typescript
import Checkbox from 'your path/Badge';
import { RiNotification2Line, Check } from '@remixicon/react';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Badge content={<RiNotification2Line size={12} />}>
        <Avatar shape="round" src={IMG_URL} />
      </Badge>
        <Badge content={<RiCheckLine size={12} />} bgColor="#5bce5b">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge size="small" placement="bottom-right" bgColor="#5bce5b">
        <Avatar src={IMG_URL} />
      </Badge>
    </div>
  )
}
\`\`\`
`,_=[{prop:"content",desc:"badge content",type:"React.ReactNode",required:!1,default:"-"},{prop:"size",desc:"badge size",type:"tag: small | medium | large",required:!1,default:"medium"},{prop:"bgColor",desc:"badge background color",type:"string",required:!1,default:"#FF4C3F"},{prop:"textColor",desc:"badge text color",type:"string",required:!1,default:"#fff"},{prop:"placement",desc:"badge placement",type:"tag: top-right | top-left | bottom-right | bottom-left",required:!1,default:"top-right"},{prop:"children",type:"React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],n="https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png";function S(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Badge",sourceName:"Badge"}),e.jsx(z,{children:"A component to display count and status"}),e.jsxs(o,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-4",children:"size"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{size:"small",content:"9",children:e.jsx(t,{src:n})}),e.jsx(a,{size:"medium",content:"9",children:e.jsx(t,{src:n})}),e.jsx(a,{size:"large",content:"9",children:e.jsx(t,{src:n})})]}),e.jsx(r,{content:A})]}),e.jsxs(o,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-4",children:"bgColor & textColor"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{content:"2",bgColor:"#8749F5",children:e.jsx(t,{src:n})}),e.jsx(a,{content:"2",bgColor:"#ffc000",children:e.jsx(t,{src:n})}),e.jsx(a,{content:"2",bgColor:"green",textColor:"purple",children:e.jsx(t,{src:n})})]}),e.jsx(r,{content:M})]}),e.jsxs(o,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-4",children:"placements"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{className:"px-1",content:"99+",placement:"top-right",children:e.jsx(t,{src:n})}),e.jsx(a,{content:"9",placement:"bottom-right",children:e.jsx(t,{src:n})}),e.jsx(a,{content:"9",placement:"top-left",children:e.jsx(t,{src:n})}),e.jsx(a,{content:"9",placement:"bottom-left",children:e.jsx(t,{src:n})})]}),e.jsx(r,{content:L})]}),e.jsxs(o,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-4",children:"disabled outline"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{content:"2",outline:!1,children:e.jsx(t,{shape:"round",src:n})}),e.jsx(a,{content:"2",outline:!1,children:e.jsx(t,{src:n})})]}),e.jsx(r,{content:I})]}),e.jsxs(o,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-4",children:"custom content"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{content:e.jsx(v,{size:12}),children:e.jsx(t,{shape:"round",src:n})}),e.jsx(a,{content:e.jsx(N,{size:12}),bgColor:"#5bce5b",children:e.jsx(t,{src:n})}),e.jsx(a,{size:"small",placement:"bottom-right",bgColor:"#5bce5b",children:e.jsx(t,{bordered:!0,color:"#5bce5b",src:n})})]}),e.jsx(r,{content:U})]}),e.jsx(s,{as:"h4",className:"my-2",children:"API"}),e.jsx(C,{rows:_})]})}export{S as default};
