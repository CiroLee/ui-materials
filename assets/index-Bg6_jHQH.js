import{d as b,r as x,j as e}from"./index-DS6qm14V.js";import{N as y,D as h,S as f,A as u}from"./index-Dlsx_GZD.js";import{C as t,H as a}from"./index-B3S6f_Ni.js";const K={command:"⌘",shift:"⇧",ctrl:"⌃",option:"⌥",enter:"⏎",delete:"⌦",escape:"⎋",tab:"⇥",capslock:"⇪",up:"↑",right:"→",down:"↓",left:"←",pageup:"⇞",pagedown:"⇟",home:"⇱",end:"⇲",help:"?",space:"␣"},k=b({base:`inline-flex flex-center relative px-[6px] border border-gray-200 shadow-[0_1px_1px_rgba(0,0,0,0.2)] shadow-inset-[0_1px_1px_rgba(255,255,255,0.7)]
   bg-gray-200/50 h-[24px] text-[14px] rounded-[4px] [&>span:not(:first-child)]:ml-1`}),d=x.forwardRef(function(o,r){const{keys:p,children:s,className:c,style:i}=o;return e.jsxs("div",{ref:r,className:k({class:c}),style:i,children:[p.map((l,m)=>e.jsx("span",{children:K[l]||""},m)),s?e.jsx("span",{children:s}):null]})});d.displayName="Kbd";const n=d,j=`\`\`\`typescript
import Kbd from 'your path/Kbd';
export default function Demo() {
  return (
      <div className="mb-4 [&>div]:mr-2">
        <Kbd keys={['command']} />
        <Kbd keys={['command']}>K</Kbd>
        <Kbd keys={['command', 'shift']}>T</Kbd>
        <Kbd keys={['option', 'command']}>D</Kbd>
      </div>
  );
}
\`\`\`
`,g=`\`\`\`typescript
type KbdKey =
  | 'command'
  | 'shift'
  | 'ctrl'
  | 'option'
  | 'enter'
  | 'delete'
  | 'escape'
  | 'tab'
  | 'capslock'
  | 'up'
  | 'right'
  | 'down'
  | 'left'
  | 'pageup'
  | 'pagedown'
  | 'home'
  | 'end'
  | 'help'
  | 'space';
\`\`\`
`,N=[{prop:"keys",desc:"keyboard keys",type:"KbdKey",required:!0,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}];function D(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Kbd",sourceName:"Kbd"}),e.jsx(h,{children:"A component to display keyboard input or hotkeys"}),e.jsxs(f,{className:"mb-4 [&>div]:mr-2",children:[e.jsx(n,{keys:["command"]}),e.jsx(n,{keys:["command"],children:"K"}),e.jsx(n,{keys:["command","shift"],children:"T"}),e.jsx(n,{keys:["option","command"],children:"D"})]}),e.jsx(t,{content:j}),e.jsx(a,{as:"h4",className:"my-4",children:"KbdKey"}),e.jsx(t,{content:g}),e.jsx(a,{as:"h4",className:"my-4",children:"API"}),e.jsx(u,{rows:N})]})}export{D as default};
