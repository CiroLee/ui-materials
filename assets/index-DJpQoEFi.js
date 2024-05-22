import{d as B,r as u,j as e,J as I,a as A}from"./index-DS6qm14V.js";import{N as F,D as H,S as m,A as Y}from"./index-Dlsx_GZD.js";import{c as j,H as d,C as h,B as w}from"./index-B3S6f_Ni.js";import{S as R}from"./index-WaRToqb7.js";import{T as C}from"./index-BzJDyeHR.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-BVjPIHQF.js";import"./index-C9GaUZ8r.js";import"./index-BBltJE_X.js";import"./index-DV0JX9yz.js";class L{grid=42;generate(a){const{month:r,year:n,startWeekOnSunday:o}=a,s=this.getFirstDayOfMonth(r,n),f=this.getDaysInMonth(r,n),g=o?s.getDay():(s.getDay()+6)%7,p=[];for(let c=0;c<this.grid;c++)p.push(new Date(n,r-1,1+(c-g)));return{list:p,total:f}}getFirstDayOfMonth(a,r){return new Date(r,a-1,1)}getDaysInMonth(a,r){return new Date(r,a,0).getDate()}}const V=new L,P=B({slots:{base:"border rounded-medium relative p-[16px]",weekHead:"flex h-[32px] items-center mb-2",weekItem:"flex-1 text-end pr-[8px]",content:"grid grid-rows-6 grid-cols-7 relative",contentItem:"w-full max-h-[140px] min-h-[120px] overflow-hidden p-[8px] cursor-pointer border-t hover:bg-gray-200/40",unActive:"size-[30px] inline-flex rounded-full flex-center",active:"bg-brand-500 text-white",notInCurrentMonth:"text-zinc-300"}}),D=["日","一","二","三","四","五","六"];function $(l,a){return l.getFullYear()===a.getFullYear()&&l.getMonth()===a.getMonth()&&l.getDate()===a.getDate()}function E(l,a){return l.getFullYear()===a.getFullYear()&&l.getMonth()===a.getMonth()}const N=u.forwardRef((l,a)=>{const{defaultValue:r=new Date,headerContent:n,cellContent:o,startWeekOnSunday:s=!0,className:f,style:g}=l,{base:p,weekHead:c,weekItem:v,content:k,contentItem:b,unActive:S,active:M,notInCurrentMonth:O}=P(),[i,T]=u.useState(r),z=u.useMemo(()=>{const{list:t}=V.generate({year:i.getFullYear(),month:i.getMonth()+1,startWeekOnSunday:s});return t},[i,s]),W=u.useMemo(()=>{if(!s){const t=[...D],q=t.shift();return[...t,q]}return D},[s]),y=t=>{T(t),l.onChange?.(t)};return e.jsxs("div",{ref:a,className:p({class:f}),style:g,children:[n?n({onChange:y,value:i}):null,e.jsx("div",{className:c(),children:W.map(t=>e.jsx("div",{className:v(),children:t},t))}),e.jsxs("ul",{className:k(),children:[z.map(t=>e.jsxs("li",{className:b({class:j({[O()]:!E(i,t)})}),onClick:()=>y(t),children:[e.jsx("p",{className:"text-end",children:e.jsx("span",{className:S({class:j({[M()]:$(i,t)})}),children:t.getDate()})}),o?e.jsx("div",{className:"overflow-y-auto h-full mt-1",children:o(t)}):null]},t.getTime())),e.jsx("div",{className:"absolute absolute-center text-zinc-200/55 text-[14vw] font-bold -z-[1]",children:i.getMonth()+1})]})]})});N.displayName="Calendar";const x=N,J=`\`\`\`ts
import Calendar from 'your path/Calendar';

export default function Demo() {
  return <Calendar />
}
\`\`\`
`,G=`\`\`\`ts
import Calendar from 'your path/Calendar';
import Button from 'your path/Button';

export default function Demo() {
    const dateChangeHandler = (date: Date, type: 'prev' | 'next') => {
    const newDate = new Date(date);
    if (type === 'prev') {
      newDate.setMonth(date.getMonth() - 1);
    } else {
      newDate.setMonth(date.getMonth() + 1);
    }
    return newDate;
  };
    return (
        <Calendar
            headerContent={({ onChange, value }) => {
              return (
                <div className="flex justify-end items-center mb-2">
                    <Button
                        outline
                        size="small"
                        shape="square"
                        onClick={() => {
                        const newDate = dateChangeHandler(value, 'prev');
                        onChange(newDate);
                        }}>
                        <ChevronLeft strokeWidth={1.5} />
                    </Button>
                    <span className="mx-2 text-lg">{value.toLocaleDateString()}</span>
                    <Button
                        outline
                        size="small"
                        shape="square"
                        onClick={() => {
                        const newDate = dateChangeHandler(value, 'next');
                        onChange(newDate);
                        }}>
                        <ChevronRight strokeWidth={1.5} />
                    </Button>
                    <Button
                        outline
                        size="small"
                        className="ml-2"
                        onClick={() => {
                        onChange(new Date());
                        }}>
                        Today
                    </Button>
                </div>
              );
            }}
        />
    )
}
\`\`\`
`,K=`\`\`\`ts
import Calendar from 'your path/Calendar';
import Tooltip from 'your path/Tooltip';
export default function Demo() {
  return (
    <Calendar
      cellContent={(date) => {
        if (date.getDate() === 10) {
          return (
            <>
              <Tooltip title="deadline TODAY">
                <div className="whitespace-nowrap text-sm ellipsis">
                  <span className="size-[8px] rounded-[4px] bg-warn-500 inline-block" />
                  <span className="ml-2">deadline TODAY</span>
                </div>
              </Tooltip>
              <Tooltip title="salary day">
                <div className="whitespace-nowrap text-sm ellipsis">
                  <span className="size-[8px] rounded-[4px] bg-success-500 inline-block" />
                  <span className="ml-2">salary day</span>
                </div>
              </Tooltip>
              <Tooltip title="shopping after work">
                <div className="whitespace-nowrap text-sm ellipsis">
                  <span className="size-[8px] rounded-[4px] bg-success-500 inline-block" />
                  <span className="ml-2">shopping after work</span>
                </div>
              </Tooltip>
            </>
          );
        }
      }}
    />
  )
}
\`\`\`
`,Q=`\`\`\`ts
import { useState } from 'react';
import Calendar from 'your path/Calendar';
import Switch from 'your path/Switch';

export default function Demo() {
  const [startWeekOnSunday, setStartWeekOnSunday] = useState(true);
  return (
    <>
      <div className="flex items-center mb-2">
        <Switch checked={startWeekOnSunday} onCheckedChange={setStartWeekOnSunday} />
        <span className="ml-2">: {\`\${startWeekOnSunday}\`}</span>
      </div>
      <Calendar startWeekOnSunday={startWeekOnSunday} />
    </>
  )
}
\`\`\`
`,U=[{prop:"defaultValue",desc:"default date to show, if unset will show current date",type:"Date",required:!1,default:"new Date()"},{prop:"startWeekOnSunday",desc:"whether to start the week on Sunday, default is true",type:"boolean",required:!1,default:"true"},{prop:"headerContent",desc:"custom header content",type:"({ value, onChange }: {value: Date, onChange: (date: Date) => void}) => React.ReactNode",required:!1,default:"-"},{prop:"cellContent",desc:"custom cell content, using for add custom content to cell",type:"(value: Date) => React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onChange",desc:"triggered when date changes",type:"(date: Date) => void",required:!1,default:"-"}];function ce(){const[l,a]=u.useState(!0),r=(n,o)=>{const s=new Date(n);return o==="prev"?s.setMonth(n.getMonth()-1):s.setMonth(n.getMonth()+1),s};return e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Calendar",sourceName:"Calendar"}),e.jsx(H,{children:"A component to display calendar information"}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(x,{onChange:n=>{console.log("your have choose: ",n.toLocaleDateString())}}),e.jsx(h,{content:J})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h4",className:"mb-2",children:"headerContent"}),e.jsx(x,{headerContent:({onChange:n,value:o})=>e.jsxs("div",{className:"flex justify-end items-center mb-2",children:[e.jsx(w,{outline:!0,size:"small",shape:"square",onClick:()=>{const s=r(o,"prev");n(s)},children:e.jsx(I,{})}),e.jsx("span",{className:"mx-2 text-lg",children:o.toLocaleDateString()}),e.jsx(w,{outline:!0,size:"small",shape:"square",onClick:()=>{const s=r(o,"next");n(s)},children:e.jsx(A,{})}),e.jsx(w,{outline:!0,size:"small",className:"ml-2",onClick:()=>{n(new Date)},children:"Today"})]})}),e.jsx(h,{content:G})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h4",className:"mb-2",children:"startWeekOnSunday"}),e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx(R,{checked:l,onCheckedChange:a}),e.jsxs("span",{className:"ml-2",children:[": ",`${l}`]})]}),e.jsx(x,{startWeekOnSunday:l}),e.jsx(h,{content:Q})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h4",className:"mb-2",children:"cellContent"}),e.jsx(x,{cellContent:n=>{if(n.getDate()===10)return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"deadline TODAY",children:e.jsxs("div",{className:"whitespace-nowrap text-sm ellipsis",children:[e.jsx("span",{className:"size-[8px] rounded-[4px] bg-warn-500 inline-block"}),e.jsx("span",{className:"ml-2",children:"deadline TODAY"})]})}),e.jsx(C,{title:"salary day",children:e.jsxs("div",{className:"whitespace-nowrap text-sm ellipsis",children:[e.jsx("span",{className:"size-[8px] rounded-[4px] bg-success-500 inline-block"}),e.jsx("span",{className:"ml-2",children:"salary day"})]})}),e.jsx(C,{title:"shopping after work",children:e.jsxs("div",{className:"whitespace-nowrap text-sm ellipsis",children:[e.jsx("span",{className:"size-[8px] rounded-[4px] bg-success-500 inline-block"}),e.jsx("span",{className:"ml-2",children:"shopping after work"})]})})]})}}),e.jsx(h,{content:K})]}),e.jsx(d,{as:"h2",className:"mb-4",children:"API"}),e.jsx(Y,{rows:U})]})}export{ce as default};
