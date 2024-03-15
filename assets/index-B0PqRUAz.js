import{j as a,d as f,r as n,K as V,q as $,M as L}from"./index-D1KJsCxW.js";import{H as q}from"./index-C4zB0jjx.js";function w(e){var t,r,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(r=w(e[t]))&&(s&&(s+=" "),s+=r)}else for(r in e)e[r]&&(s&&(s+=" "),s+=r);return s}function i(){for(var e,t,r=0,s="",l=arguments.length;r<l;r++)(e=arguments[r])&&(t=w(e))&&(s&&(s+=" "),s+=t);return s}function U(e){return a.jsx("div",{className:i("border border-dashed border-gray-300 rounded-sm p-4",e.className),children:e.children})}const A=f({compoundVariants:[{outline:!0,type:"primary",class:`border-brand-500 text-brand-500 hover:bg-brand-500/5 hover:border-brand-500/80
        active:text-brand-600 active:border-brand-600 active:bg-brand-500/10`},{outline:!0,type:"success",class:`border-success-500 text-success-500 hover:bg-success-500/5 hover:border-success-500/80 
        active:text-success-600 active:border-success-600 active:bg-success-500/10`},{outline:!0,type:"info",class:`border-info-500 text-info-500 hover:bg-info-500/5 hover:border-info-500/80 
        active:text-info-600 active:border-info-600 active:bg-info-500/10`},{outline:!0,type:"danger",class:`border-danger-500 text-danger-500 hover:bg-danger-500/5 hover:border-danger-500/80 
        active:text-danger-600 active:!bg-danger-500/10 active:border-danger-600`},{outline:!0,type:"warn",class:`border-warn-500 text-warn-500 hover:bg-warn-500/5 hover:border-warn-500/80 
        active:text-warn-600 active:border-warn-600 active:bg-warn-500/10`},{outline:!0,type:"text",class:"border-black/10"}]}),E=f({extend:A,base:"relative rounded-medium border-box text-[14px] outline-none cursor-default transition ease-linear [&:not(:disabled)]:active:scale-[98%]",variants:{type:{primary:"bg-brand-500 text-white hover:bg-brand-500/90 active:bg-brand-600",success:"bg-success-500 text-white hover:bg-success-500/90 active:bg-success-600",info:"bg-info-500 text-white hover:bg-info-500/90 active:bg-info-600",warn:"bg-warn-500 text-white hover:bg-warn-500/90 active:bg-warn-600",danger:"bg-danger-500 text-white hover:bg-danger-500/90 active:bg-danger-600",text:"bg-transparent text-black hover:bg-black/[0.03] active:bg-black/5"},size:{tiny:"h-global-ty px-button-ty",small:"h-global-sm px-button-sm",medium:"h-global-md px-button-md",large:"h-global-lg px-button-lg !text-[16px]"},shape:{default:"",pill:"!rounded-global-ty",circle:"aspect-square !p-0 !rounded-1/2",square:"aspect-square !p-0"},block:{true:"w-full active:!scale-[99.65%]"},outline:{true:"border bg-transparent"},disabled:{true:"disabled:cursor-not-allowed disabled:!text-black/20 disabled:border-0 disabled:bg-black/5"},loading:{true:"opacity-70 cursor-default active:scale-100"}},defaultVariants:{type:"primary",size:"medium",shaped:"default"}}),j=n.forwardRef((e,t)=>{const{size:r,type:s,shape:l,outline:o,block:d,disabled:c,loading:u,className:p,style:x,...h}=e;return a.jsx("button",{ref:t,disabled:c,...h,className:E({type:s,size:r,outline:o,block:d,shape:l,disabled:c,loading:u,class:p}),style:x,children:a.jsx("div",{className:"relative w-full h-full flex justify-center items-center",children:e.children})})});j.displayName="Button";const N=j,G=`[&_button:first-child]:!rounded-r-0 [&_button:not(:last-child,:first-child)]:rounded-0 [&_button:last-child]:!rounded-l-0 
[&_button:not(:last-child,:first-child)]:border-l-0 [&_button:not(:last-child,:first-child)]:border-r-0 [&_button:not(:last-child,:first-child)]:!rounded-0
[&_button:nth-child(2)]:!border-l-0`,k=n.forwardRef((e,t)=>a.jsx("div",{style:e.style,className:i("flex items-center",G,e.className),ref:t,children:e.children}));k.displayName="ButtonGroup";const Y=k,I=400,M=e=>{const t=n.useRef(null),[r,s]=n.useState(!1),[l,o]=n.useState(!1);return n.useEffect(()=>{if(t.current){const{height:d}=t.current.getBoundingClientRect();d>I&&s(!0)}},[]),a.jsxs("div",{className:i("relative my-[12px] rounded-[6px] overflow-hidden",{"max-h-[200px]":r&&!l}),children:[a.jsx("div",{ref:t,className:"text-[14px] [&_pre]:m-0 [&_pre]:p-3 [&_pre]:overflow-x-auto",dangerouslySetInnerHTML:{__html:e.content}}),r?a.jsx("div",{className:"absolute bottom-0 flex justify-center items-center w-full h-[60px] bg-gradient-to-b from-transparent to-gray-800",children:a.jsx(N,{size:"small",onClick:()=>o(!l),children:l?"collapse":"expand"})}):null]})},Z=M,z=n.forwardRef(({className:e,style:t,headerFixed:r,border:s,children:l},o)=>a.jsx("div",{className:i("rounded-[6px] box-border overflow-x-auto",{"border border-gray-200/80 [&_tr:last-child]:border-0":s,"overflow-y-auto [&_thead]:sticky [&_thead]:top-0":r},e),style:t,children:a.jsx("table",{ref:o,className:i("table-auto w-full border-collapse border-spacing-0"),children:l})}));z.displayName="Table";const B=n.forwardRef(({className:e,children:t},r)=>a.jsx("thead",{ref:r,className:i("w-full bg-gray-100 border-b-[1px] border-gray-200/80 text-[14px]",e),children:a.jsx(m,{children:t})}));B.displayName="TableHeader";const T=n.forwardRef(({className:e,children:t},r)=>a.jsx("tbody",{ref:r,className:i(e),children:t}));T.displayName="TableBody";const _=n.forwardRef(({className:e,children:t},r)=>a.jsx("th",{ref:r,className:i(`font-semibold p-cell text-start relative last:after:content-[unset] after:mr-1
         after:content-[''] after:absolute after:right-0 after:w-[1px] after:h-[40%] after:bg-gray-200 after:top-[50%] after:translate-y-[-50%]`,e),children:t}));_.displayName="TableHeaderCell";const m=n.forwardRef(({className:e,children:t},r)=>a.jsx("tr",{ref:r,className:i("transition-colors hover:bg-gray-200/30 border-b-[1px] border-gray-200/80",e),children:t}));m.displayName="TableRow";const b=n.forwardRef(({className:e,children:t},r)=>a.jsx("td",{ref:r,className:i("p-cell text-[14px]",e),children:t}));b.displayName="TableDataCell";const D=f({base:"inline-flex items-center",variants:{color:{default:"bg-[#ededed] text-black/80",primary:"bg-brand-500/10 text-brand-500",success:"bg-success-500/10 text-success-500",info:"bg-info-500/10 text-info-500",warn:"bg-warn-500/10 text-warn-500",danger:"bg-danger-500/10 text-danger-500"},size:{tiny:"h-[18px] px-1 text-[12px]",small:"h-[22px] px-2 text-[14px]",medium:"h-[26px] px-2 text-[16px]",large:"h-[30px] px-3 text-[18px]"},shape:{pill:"",default:""}},compoundVariants:[{size:"tiny",shape:"pill",class:"rounded-[9px]"},{size:"small",shape:"pill",class:"rounded-[11px]"},{size:"medium",shape:"pill",class:"rounded-[13px]"},{size:"large",shape:"pill",class:"rounded-[15px]"},{size:"tiny",shape:"default",class:"rounded-tiny"},{size:"small",shape:"default",class:"rounded-small"},{size:"medium",shape:"default",class:"rounded-medium"},{size:"large",shape:"default",class:"rounded-large"}],defaultVariants:{color:"default",size:"small",shape:"default"}}),R=n.forwardRef(function(t,r){const{color:s,size:l,shape:o,className:d,style:c}=t;return a.jsx("div",{ref:r,className:D({size:l,color:s,shape:o,class:d}),style:c,children:t.children})});R.displayName="Tag";const W=R,y=f({base:"cursor-pointer inline-flex items-center transition-colors",variants:{color:{default:"text-info-500 hover:text-info-500/80",primary:"text-brand-500 hover:text-brand-500/80",success:"text-success-500 hover:text-success-500/80",warn:"text-warn-500 hover:text-warn-500/80",danger:"text-danger-500 hover:text-danger-500/80"},size:{tiny:"text-[12px]",small:"text-[14px]",medium:"text-[16px]",large:"text-[18px]"},disabled:{true:"text-neutral-400 hover:bg-transparent hover:text-neutral cursor-not-allowed"},isBlock:{true:""}},compoundVariants:[{isBlock:!0,color:"default",class:"hover:bg-info-500/10 hover:text-info-600"},{isBlock:!0,color:"primary",class:"hover:bg-brand-500/10 hover:text-brand-600"},{isBlock:!0,color:"success",class:"hover:bg-success-500/10 hover:text-success-600"},{isBlock:!0,color:"warn",class:"hover:bg-warn-500/10 hover:text-warn-600"},{isBlock:!0,color:"danger",class:"hover:bg-danger-500/10 hover:text-danger-600"},{size:"tiny",isBlock:!0,class:"h-[20px] items-center px-[4px] rounded-small"},{size:"small",isBlock:!0,class:"h-[24px] items-center px-[4px] rounded-small"},{size:"medium",isBlock:!0,class:"h-[28px] items-center px-[8px] rounded-medium"},{size:"large",isBlock:!0,class:"h-[32px] items-center px-[8px] rounded-medium"}],defaultVariants:{size:"medium",color:"default",disabled:!1}}),C=n.forwardRef((e,t)=>{const{href:r,color:s,size:l,disabled:o,isBlock:d,isBlank:c,anchorIcon:u,children:p,onClick:x,className:h,style:g}=e,S=n.useMemo(()=>!r.startsWith("/"),[r]),v=H=>{if(o){H.preventDefault();return}x==null||x()};return S?a.jsxs("a",{href:r,ref:t,className:y({color:s,size:l,disabled:o,isBlock:d,class:h}),style:g,target:c?"_blank":"_self",rel:c?"noopener noreferrer":"",title:r,onClick:v,children:[p,u||null]}):a.jsxs(V,{ref:t,title:r,className:y({color:s,size:l,disabled:o,isBlock:d,class:h}),style:g,to:r,target:c?"_blank":"_self",rel:c?"noopener noreferrer":"",onClick:v,children:[p,u||null]})});C.displayName="Link";const F=C,K=["props","desc","type","required","default"];function O(e){if(e.startsWith("tag")){const t=e.replace(/^tag:/,"").split("|");return a.jsx(a.Fragment,{children:t.map((r,s)=>a.jsxs("div",{className:"inline-flex items-center relative",children:[a.jsx(W,{color:"primary",children:r}),s!==t.length-1&&a.jsx("span",{className:"relative inline-block w-px h-[16px] top-[10%] mx-2 bg-black/10"})]},s))})}else if(e.startsWith("link")){const t=/link: (\w+)\((https?:\/\/\S+)\)/,r=e.match(t);if(r)return a.jsx(F,{color:"primary",className:"text-[14px]",isBlank:!0,href:r[2],anchorIcon:a.jsx($,{className:"ml-1",size:16}),children:r[1]})}return e}const X=({rows:e})=>a.jsxs(z,{border:!0,children:[a.jsx(B,{children:K.map(t=>a.jsx(_,{children:t},t))}),a.jsx(T,{children:e.map((t,r)=>{var s;return a.jsxs(m,{children:[a.jsx(b,{children:t.prop}),a.jsx(b,{children:t.desc}),a.jsx(b,{className:"text-brand-500",children:O(t.type)}),a.jsx(b,{children:t.required.toString()}),a.jsx(b,{children:(s=t.default)==null?void 0:s.toString()})]},r)})})]}),ee=X;function J(e){const{name:t,className:r,style:s}=e;return a.jsx("a",{className:i("inline-block",r),style:s,target:"_blank",rel:"noopener noreferrer",href:`https://github.com/CiroLee/ui-materials/tree/main/src/packages/ui/${t}`,children:a.jsxs(N,{type:"text",outline:!0,size:"small",className:"cursor-pointer",children:[a.jsx(L,{className:"mr-1",size:"16px"}),a.jsx("span",{children:"Source"})]})})}function te(e){return a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx(q,{as:"h2",className:"mb-4",children:e.title}),a.jsx(J,{name:e.sourceName})]})}export{ee as A,N as B,Z as C,F as L,te as N,U as S,z as T,Y as a,B as b,i as c,_ as d,T as e,m as f,b as g,W as h};
