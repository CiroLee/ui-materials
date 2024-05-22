import{d as g,r as o,j as e}from"./index-DS6qm14V.js";import{N as B,D as z,S as t,A as q}from"./index-Dlsx_GZD.js";import{L as v,H as r,C as l}from"./index-B3S6f_Ni.js";const S=g({slots:{base:"browser-frame rounded-medium border border-zinc-200",header:"frame-header relative flex flex-center h-[32px] border-b border-zinc-200 px-[12px]",title:"frame-title inline-flex text-[14px] h-full text-zinc-700 items-center max-w-[30%] ellipsis",url:"h-[76%] block max-w-[36%] text-zinc-700 ellipsis px-[8px] rounded-small bg-zinc-100 text-[14px]",content:"frame-content relative h-[320px] overflow-auto"}});function D(){return e.jsxs("div",{className:"absolute left-[12px] flex flex-center h-full space-x-[6px] [&_li]:list-none [&_li]:size-[13px] [&_li]:rounded-full",children:[e.jsx("li",{className:"bg-[#ff5f57]"}),e.jsx("li",{className:"bg-[#febc2e]"}),e.jsx("li",{className:"bg-[#28c840]"})]})}function T(){return e.jsxs("div",{className:"absolute right-[12px] flex flex-center h-full space-x-[12px] [&_li]:list-none [&_li]:w-[12px]",children:[e.jsx("li",{className:"h-px bg-zinc-300"}),e.jsx("li",{className:"h-[12px] border-zinc-300 border"}),e.jsx("li",{className:`relative h-[12px] before:bg-zinc-300 before:rotate-45 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full 
      after:h-full after:bg-zinc-300 after:w-px after:-rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2`})]})}const i=o.forwardRef((m,f)=>{const{frameType:d="macos",asIframe:x,title:n,url:a,showUrl:u,children:p,className:h,style:w}=m,{base:b,header:j,title:N,url:y,content:F}=S();return e.jsxs("div",{ref:f,className:b({class:h}),style:w,children:[e.jsxs("header",{className:j(),children:[d==="macos"?e.jsx(D,{}):e.jsx(T,{}),u&&a?e.jsx(v,{href:a,isBlank:!0,className:y(),children:a}):o.isValidElement(n)?e.jsx(e.Fragment,{children:"title"}):e.jsx("span",{className:N(),children:n})]}),e.jsx("main",{className:F(),children:x&&a?e.jsx("iframe",{className:"w-full h-full border-none",src:a}):e.jsx(e.Fragment,{children:p})})]})});i.displayName="BrowserFrame";const s=i,c=`\`\`\`ts
import BrowserFrame from 'your path/BrowserFrame';

export default function Demo() {
  return (
    <>
      <BrowserFrame className="mb-4" />
      <BrowserFrame frameType="windows" />
    </>
  )
}
\`\`\`
`,R=`\`\`\`ts
import BrowserFrame from 'your path/BrowserFrame';

export default function Demo() {
  return (
    <>
      <BrowserFrame showUrl url="https://www.google.com" />
    </>
  )
}
\`\`\`
`,U=`\`\`\`ts
import BrowserFrame from 'your path/BrowserFrame';

export default function Demo() {
  return (
    <>
      <BrowserFrame showUrl asIframe url="https://cirolee.github.io/ui-materials"  />
    </>
  )
}
\`\`\`
`,C=`\`\`\`ts
import BrowserFrame from 'your path/BrowserFrame';

export default function Demo() {
  return (
    <>
      <BrowserFrame>
        <p className="p-4">custom content</p>
      </BrowserFrame>
    </>
  )
}
\`\`\`
`,M=[{prop:"frameType",desc:"type of frame, support macos and windows style",type:"tag: macos | windows",required:!1,default:"macos"},{prop:"title",desc:"title of frame",type:"React.ReactNode",required:!1,default:"-"},{prop:"url",desc:"url of frame",type:"string",required:!1,default:"-"},{prop:"showUrl",desc:"whether to show url",type:"boolean",required:!1,default:"false"},{prop:"asFrame",desc:"whether to render as frame, must be used with url",type:"boolean",required:!1,default:"false"},{prop:"children",desc:"children of frame",type:"ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}];function A(){return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"BrowserFrame",sourceName:"BrowserFrame"}),e.jsx(z,{children:"Display browser frame with macos style and windows style"}),e.jsxs(t,{className:"mb-4",children:[e.jsx(r,{as:"h4",className:"mb-2",children:"style"}),e.jsx(s,{className:"mb-4"}),e.jsx(s,{frameType:"windows"}),e.jsx(l,{content:c})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(r,{as:"h4",className:"mb-2",children:"title"}),e.jsx(s,{frameType:"macos",title:"macOS"}),e.jsx(l,{content:c})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(r,{as:"h4",className:"mb-2",children:"show url"}),e.jsx(s,{showUrl:!0,url:"https://www.google.com"}),e.jsx(l,{content:R})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(r,{as:"h4",className:"mb-2",children:"use as iframe"}),e.jsx(s,{showUrl:!0,asIframe:!0,url:"https://cirolee.github.io/ui-materials"}),e.jsx(l,{content:U})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(r,{as:"h4",className:"mb-2",children:"custom children"}),e.jsx(s,{children:e.jsx("p",{className:"p-4",children:"custom content"})}),e.jsx(l,{content:C})]}),e.jsx(r,{as:"h2",className:"mb-4",children:"API"}),e.jsx(q,{rows:M})]})}export{A as default};
