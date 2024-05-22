import{r as n,j as r,A as ze,m as Ve,a as He,b as Ye,f as Xe,c as Ze,E as Je}from"./index-DS6qm14V.js";import{c as Qe,H as S,B as M,C as B}from"./index-B3S6f_Ni.js";import{$ as be,_ as x,a as G,b as J,c as en,d as he,e as nn}from"./index-DxDs9eJJ.js";import{$ as h,a as ge}from"./index-BFn4IUUH.js";import{$ as tn,a as on}from"./index-Dz-xE_2J.js";import{$ as we,a as ve,b as rn,c as cn,d as an,e as sn}from"./index-C9GaUZ8r.js";import{h as dn,$ as ln,a as un,R as fn}from"./Combination--BUSbBbP.js";import{$ as Z}from"./index-BBltJE_X.js";import{$ as ae}from"./index-DV0JX9yz.js";import{$ as ye,a as pn,b as mn}from"./index-DMTVrYN4.js";import{$ as Me}from"./index-MDj1YPAE.js";import{N as $n,D as xn,S as T,A as $e}from"./index-Dlsx_GZD.js";const re=["Enter"," "],bn=["ArrowDown","PageUp","Home"],_e=["ArrowUp","PageDown","End"],hn=[...bn,..._e],gn={ltr:[...re,"ArrowRight"],rtl:[...re,"ArrowLeft"]},wn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Q="Menu",[F,vn,yn]=tn(Q),[P,De]=be(Q,[yn,we,ye]),ee=we(),Ee=ye(),[Ce,N]=P(Q),[Mn,U]=P(Q),_n=e=>{const{__scopeMenu:o,open:t=!1,children:c,dir:s,onOpenChange:a,modal:d=!0}=e,l=ee(o),[p,$]=n.useState(null),f=n.useRef(!1),i=Me(a),m=on(s);return n.useEffect(()=>{const b=()=>{f.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},g=()=>f.current=!1;return document.addEventListener("keydown",b,{capture:!0}),()=>{document.removeEventListener("keydown",b,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),n.createElement(ve,l,n.createElement(Ce,{scope:o,open:t,onOpenChange:i,content:p,onContentChange:$},n.createElement(Mn,{scope:o,onClose:n.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:f,dir:m,modal:d},c)))},Se=n.forwardRef((e,o)=>{const{__scopeMenu:t,...c}=e,s=ee(t);return n.createElement(rn,x({},s,c,{ref:o}))}),Re="MenuPortal",[Dn,Ne]=P(Re,{forceMount:void 0}),En=e=>{const{__scopeMenu:o,forceMount:t,children:c,container:s}=e,a=N(Re,o);return n.createElement(Dn,{scope:o,forceMount:t},n.createElement(ae,{present:t||a.open},n.createElement(cn,{asChild:!0,container:s},c)))},D="MenuContent",[Cn,se]=P(D),Sn=n.forwardRef((e,o)=>{const t=Ne(D,e.__scopeMenu),{forceMount:c=t.forceMount,...s}=e,a=N(D,e.__scopeMenu),d=U(D,e.__scopeMenu);return n.createElement(F.Provider,{scope:e.__scopeMenu},n.createElement(ae,{present:c||a.open},n.createElement(F.Slot,{scope:e.__scopeMenu},d.modal?n.createElement(Rn,x({},s,{ref:o})):n.createElement(Nn,x({},s,{ref:o})))))}),Rn=n.forwardRef((e,o)=>{const t=N(D,e.__scopeMenu),c=n.useRef(null),s=G(o,c);return n.useEffect(()=>{const a=c.current;if(a)return dn(a)},[]),n.createElement(ie,x({},e,{ref:s,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:h(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),Nn=n.forwardRef((e,o)=>{const t=N(D,e.__scopeMenu);return n.createElement(ie,x({},e,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),ie=n.forwardRef((e,o)=>{const{__scopeMenu:t,loop:c=!1,trapFocus:s,onOpenAutoFocus:a,onCloseAutoFocus:d,disableOutsidePointerEvents:l,onEntryFocus:p,onEscapeKeyDown:$,onPointerDownOutside:f,onFocusOutside:i,onInteractOutside:m,onDismiss:b,disableOutsideScroll:g,...v}=e,I=N(D,t),A=U(D,t),q=ee(t),W=Ee(t),de=vn(t),[Fe,le]=n.useState(null),z=n.useRef(null),Ke=G(o,z,I.onContentChange),V=n.useRef(0),H=n.useRef(""),Ge=n.useRef(0),ne=n.useRef(null),ue=n.useRef("right"),te=n.useRef(0),Ue=g?fn:n.Fragment,qe=g?{as:en,allowPinchZoom:!0}:void 0,We=u=>{var w,y;const O=H.current+u,L=de().filter(C=>!C.disabled),oe=document.activeElement,fe=(w=L.find(C=>C.ref.current===oe))===null||w===void 0?void 0:w.textValue,Y=L.map(C=>C.textValue),k=Un(Y,O,fe),pe=(y=L.find(C=>C.textValue===k))===null||y===void 0?void 0:y.ref.current;(function C(me){H.current=me,window.clearTimeout(V.current),me!==""&&(V.current=window.setTimeout(()=>C(""),1e3))})(O),pe&&setTimeout(()=>pe.focus())};n.useEffect(()=>()=>window.clearTimeout(V.current),[]),ln();const j=n.useCallback(u=>{var w,y;return ue.current===((w=ne.current)===null||w===void 0?void 0:w.side)&&Wn(u,(y=ne.current)===null||y===void 0?void 0:y.area)},[]);return n.createElement(Cn,{scope:t,searchRef:H,onItemEnter:n.useCallback(u=>{j(u)&&u.preventDefault()},[j]),onItemLeave:n.useCallback(u=>{var w;j(u)||((w=z.current)===null||w===void 0||w.focus(),le(null))},[j]),onTriggerLeave:n.useCallback(u=>{j(u)&&u.preventDefault()},[j]),pointerGraceTimerRef:Ge,onPointerGraceIntentChange:n.useCallback(u=>{ne.current=u},[])},n.createElement(Ue,qe,n.createElement(un,{asChild:!0,trapped:s,onMountAutoFocus:h(a,u=>{var w;u.preventDefault(),(w=z.current)===null||w===void 0||w.focus()}),onUnmountAutoFocus:d},n.createElement(an,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:$,onPointerDownOutside:f,onFocusOutside:i,onInteractOutside:m,onDismiss:b},n.createElement(pn,x({asChild:!0},W,{dir:A.dir,orientation:"vertical",loop:c,currentTabStopId:Fe,onCurrentTabStopIdChange:le,onEntryFocus:h(p,u=>{A.isUsingKeyboardRef.current||u.preventDefault()})}),n.createElement(sn,x({role:"menu","aria-orientation":"vertical","data-state":je(I.open),"data-radix-menu-content":"",dir:A.dir},q,v,{ref:Ke,style:{outline:"none",...v.style},onKeyDown:h(v.onKeyDown,u=>{const y=u.target.closest("[data-radix-menu-content]")===u.currentTarget,O=u.ctrlKey||u.altKey||u.metaKey,L=u.key.length===1;y&&(u.key==="Tab"&&u.preventDefault(),!O&&L&&We(u.key));const oe=z.current;if(u.target!==oe||!hn.includes(u.key))return;u.preventDefault();const Y=de().filter(k=>!k.disabled).map(k=>k.ref.current);_e.includes(u.key)&&Y.reverse(),Kn(Y)}),onBlur:h(e.onBlur,u=>{u.currentTarget.contains(u.target)||(window.clearTimeout(V.current),H.current="")}),onPointerMove:h(e.onPointerMove,K(u=>{const w=u.target,y=te.current!==u.clientX;if(u.currentTarget.contains(w)&&y){const O=u.clientX>te.current?"right":"left";ue.current=O,te.current=u.clientX}}))})))))))}),On=n.forwardRef((e,o)=>{const{__scopeMenu:t,...c}=e;return n.createElement(J.div,x({role:"group"},c,{ref:o}))}),ce="MenuItem",xe="menu.itemSelect",Pn=n.forwardRef((e,o)=>{const{disabled:t=!1,onSelect:c,...s}=e,a=n.useRef(null),d=U(ce,e.__scopeMenu),l=se(ce,e.__scopeMenu),p=G(o,a),$=n.useRef(!1),f=()=>{const i=a.current;if(!t&&i){const m=new CustomEvent(xe,{bubbles:!0,cancelable:!0});i.addEventListener(xe,b=>c?.(b),{once:!0}),nn(i,m),m.defaultPrevented?$.current=!1:d.onClose()}};return n.createElement(Oe,x({},s,{ref:p,disabled:t,onClick:h(e.onClick,f),onPointerDown:i=>{var m;(m=e.onPointerDown)===null||m===void 0||m.call(e,i),$.current=!0},onPointerUp:h(e.onPointerUp,i=>{var m;$.current||(m=i.currentTarget)===null||m===void 0||m.click()}),onKeyDown:h(e.onKeyDown,i=>{const m=l.searchRef.current!=="";t||m&&i.key===" "||re.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})}))}),Oe=n.forwardRef((e,o)=>{const{__scopeMenu:t,disabled:c=!1,textValue:s,...a}=e,d=se(ce,t),l=Ee(t),p=n.useRef(null),$=G(o,p),[f,i]=n.useState(!1),[m,b]=n.useState("");return n.useEffect(()=>{const g=p.current;if(g){var v;b(((v=g.textContent)!==null&&v!==void 0?v:"").trim())}},[a.children]),n.createElement(F.ItemSlot,{scope:t,disabled:c,textValue:s??m},n.createElement(mn,x({asChild:!0},l,{focusable:!c}),n.createElement(J.div,x({role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":c||void 0,"data-disabled":c?"":void 0},a,{ref:$,onPointerMove:h(e.onPointerMove,K(g=>{c?d.onItemLeave(g):(d.onItemEnter(g),g.defaultPrevented||g.currentTarget.focus())})),onPointerLeave:h(e.onPointerLeave,K(g=>d.onItemLeave(g))),onFocus:h(e.onFocus,()=>i(!0)),onBlur:h(e.onBlur,()=>i(!1))}))))}),In="MenuRadioGroup";P(In,{value:void 0,onValueChange:()=>{}});const jn="MenuItemIndicator";P(jn,{checked:!1});const Tn=n.forwardRef((e,o)=>{const{__scopeMenu:t,...c}=e;return n.createElement(J.div,x({role:"separator","aria-orientation":"horizontal"},c,{ref:o}))}),Pe="MenuSub",[An,Ie]=P(Pe),Ln=e=>{const{__scopeMenu:o,children:t,open:c=!1,onOpenChange:s}=e,a=N(Pe,o),d=ee(o),[l,p]=n.useState(null),[$,f]=n.useState(null),i=Me(s);return n.useEffect(()=>(a.open===!1&&i(!1),()=>i(!1)),[a.open,i]),n.createElement(ve,d,n.createElement(Ce,{scope:o,open:c,onOpenChange:i,content:$,onContentChange:f},n.createElement(An,{scope:o,contentId:Z(),triggerId:Z(),trigger:l,onTriggerChange:p},t)))},X="MenuSubTrigger",kn=n.forwardRef((e,o)=>{const t=N(X,e.__scopeMenu),c=U(X,e.__scopeMenu),s=Ie(X,e.__scopeMenu),a=se(X,e.__scopeMenu),d=n.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:p}=a,$={__scopeMenu:e.__scopeMenu},f=n.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return n.useEffect(()=>f,[f]),n.useEffect(()=>{const i=l.current;return()=>{window.clearTimeout(i),p(null)}},[l,p]),n.createElement(Se,x({asChild:!0},$),n.createElement(Oe,x({id:s.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":s.contentId,"data-state":je(t.open)},e,{ref:he(o,s.onTriggerChange),onClick:i=>{var m;(m=e.onClick)===null||m===void 0||m.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:h(e.onPointerMove,K(i=>{a.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!t.open&&!d.current&&(a.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),f()},100))})),onPointerLeave:h(e.onPointerLeave,K(i=>{var m;f();const b=(m=t.content)===null||m===void 0?void 0:m.getBoundingClientRect();if(b){var g;const v=(g=t.content)===null||g===void 0?void 0:g.dataset.side,I=v==="right",A=I?-5:5,q=b[I?"left":"right"],W=b[I?"right":"left"];a.onPointerGraceIntentChange({area:[{x:i.clientX+A,y:i.clientY},{x:q,y:b.top},{x:W,y:b.top},{x:W,y:b.bottom},{x:q,y:b.bottom}],side:v}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(i),i.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:h(e.onKeyDown,i=>{const m=a.searchRef.current!=="";if(!(e.disabled||m&&i.key===" ")&&gn[c.dir].includes(i.key)){var b;t.onOpenChange(!0),(b=t.content)===null||b===void 0||b.focus(),i.preventDefault()}})})))}),Bn="MenuSubContent",Fn=n.forwardRef((e,o)=>{const t=Ne(D,e.__scopeMenu),{forceMount:c=t.forceMount,...s}=e,a=N(D,e.__scopeMenu),d=U(D,e.__scopeMenu),l=Ie(Bn,e.__scopeMenu),p=n.useRef(null),$=G(o,p);return n.createElement(F.Provider,{scope:e.__scopeMenu},n.createElement(ae,{present:c||a.open},n.createElement(F.Slot,{scope:e.__scopeMenu},n.createElement(ie,x({id:l.contentId,"aria-labelledby":l.triggerId},s,{ref:$,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var i;d.isUsingKeyboardRef.current&&((i=p.current)===null||i===void 0||i.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:h(e.onFocusOutside,f=>{f.target!==l.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:h(e.onEscapeKeyDown,f=>{d.onClose(),f.preventDefault()}),onKeyDown:h(e.onKeyDown,f=>{const i=f.currentTarget.contains(f.target),m=wn[d.dir].includes(f.key);if(i&&m){var b;a.onOpenChange(!1),(b=l.trigger)===null||b===void 0||b.focus(),f.preventDefault()}})})))))});function je(e){return e?"open":"closed"}function Kn(e){const o=document.activeElement;for(const t of e)if(t===o||(t.focus(),document.activeElement!==o))return}function Gn(e,o){return e.map((t,c)=>e[(o+c)%e.length])}function Un(e,o,t){const s=o.length>1&&Array.from(o).every($=>$===o[0])?o[0]:o,a=t?e.indexOf(t):-1;let d=Gn(e,Math.max(a,0));s.length===1&&(d=d.filter($=>$!==t));const p=d.find($=>$.toLowerCase().startsWith(s.toLowerCase()));return p!==t?p:void 0}function qn(e,o){const{x:t,y:c}=e;let s=!1;for(let a=0,d=o.length-1;a<o.length;d=a++){const l=o[a].x,p=o[a].y,$=o[d].x,f=o[d].y;p>c!=f>c&&t<($-l)*(c-p)/(f-p)+l&&(s=!s)}return s}function Wn(e,o){if(!o)return!1;const t={x:e.clientX,y:e.clientY};return qn(t,o)}function K(e){return o=>o.pointerType==="mouse"?e(o):void 0}const zn=_n,Vn=Se,Hn=En,Yn=Sn,Xn=On,Zn=Pn,Jn=Tn,Qn=Ln,et=kn,nt=Fn,Te="DropdownMenu",[tt,Yt]=be(Te,[De]),E=De(),[ot,Ae]=tt(Te),rt=e=>{const{__scopeDropdownMenu:o,children:t,dir:c,open:s,defaultOpen:a,onOpenChange:d,modal:l=!0}=e,p=E(o),$=n.useRef(null),[f=!1,i]=ge({prop:s,defaultProp:a,onChange:d});return n.createElement(ot,{scope:o,triggerId:Z(),triggerRef:$,contentId:Z(),open:f,onOpenChange:i,onOpenToggle:n.useCallback(()=>i(m=>!m),[i]),modal:l},n.createElement(zn,x({},p,{open:f,onOpenChange:i,dir:c,modal:l}),t))},ct="DropdownMenuTrigger",at=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,disabled:c=!1,...s}=e,a=Ae(ct,t),d=E(t);return n.createElement(Vn,x({asChild:!0},d),n.createElement(J.button,x({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":c?"":void 0,disabled:c},s,{ref:he(o,a.triggerRef),onPointerDown:h(e.onPointerDown,l=>{!c&&l.button===0&&l.ctrlKey===!1&&(a.onOpenToggle(),a.open||l.preventDefault())}),onKeyDown:h(e.onKeyDown,l=>{c||(["Enter"," "].includes(l.key)&&a.onOpenToggle(),l.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})))}),st=e=>{const{__scopeDropdownMenu:o,...t}=e,c=E(o);return n.createElement(Hn,x({},c,t))},it="DropdownMenuContent",dt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...c}=e,s=Ae(it,t),a=E(t),d=n.useRef(!1);return n.createElement(Yn,x({id:s.contentId,"aria-labelledby":s.triggerId},a,c,{ref:o,onCloseAutoFocus:h(e.onCloseAutoFocus,l=>{var p;d.current||(p=s.triggerRef.current)===null||p===void 0||p.focus(),d.current=!1,l.preventDefault()}),onInteractOutside:h(e.onInteractOutside,l=>{const p=l.detail.originalEvent,$=p.button===0&&p.ctrlKey===!0,f=p.button===2||$;(!s.modal||f)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),lt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...c}=e,s=E(t);return n.createElement(Xn,x({},s,c,{ref:o}))}),ut=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...c}=e,s=E(t);return n.createElement(Zn,x({},s,c,{ref:o}))}),ft=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...c}=e,s=E(t);return n.createElement(Jn,x({},s,c,{ref:o}))}),pt=e=>{const{__scopeDropdownMenu:o,children:t,open:c,onOpenChange:s,defaultOpen:a}=e,d=E(o),[l=!1,p]=ge({prop:c,defaultProp:a,onChange:s});return n.createElement(Qn,x({},d,{open:l,onOpenChange:p}),t)},mt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...c}=e,s=E(t);return n.createElement(et,x({},s,c,{ref:o}))}),$t=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...c}=e,s=E(t);return n.createElement(nt,x({},s,c,{ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),xt=rt,bt=at,Le=st,ht=dt,gt=lt,wt=ut,vt=ft,yt=pt,Mt=mt,_t=$t,Dt=e=>r.jsxs(wt,{onSelect:o=>{e.onSelect?.(o,e)},disabled:e.disabled,className:`outline-none h-[32px] flex items-center justify-between text-[#333] text-sm cursor-default 
      data-[disabled]:text-gray-400 data-[disabled]:cursor-not-allowed data-[highlighted]:bg-gray-100 p-[4px] rounded-[4px]`,children:[r.jsxs("div",{className:"flex items-center",children:[e.prefix,r.jsx("span",{children:e.label})]}),e.suffix]});function Et(e,o){return r.jsxs(yt,{children:[r.jsxs(Mt,{className:"outline-none h-[32px] flex justify-between items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-gray-100 p-[4px] rounded-[4px]",children:[r.jsxs("div",{className:"flex items-center",children:[e.prefix,r.jsx("span",{children:e.label})]}),r.jsx(He,{size:16,className:"text-zinc-400"})]}),r.jsx(Le,{children:r.jsx(_t,{className:"bg-white rounded-[6px] border border-gray-200 p-[4px]",children:ke(e.children,o)})})]},e.id)}function ke(e,o){return e.map(t=>t.type==="separator"?r.jsx(vt,{className:"h-[1px] my-[4px] bg-gray-200"},t.id||String(Date.now())):t.children?Et(t,o):r.jsx(Dt,{...t,onSelect:c=>o?.(c,t)},t.id))}const Be=n.forwardRef((e,o)=>{const[t,c]=n.useState(!1),s={open:{opacity:1,scale:1},closed:{opacity:0,scale:.96}},a=d=>{c(d),e.onOpenChange?.(d)};return r.jsxs(xt,{open:t,onOpenChange:a,children:[r.jsx(bt,{asChild:!0,children:e.children}),r.jsx(ze,{children:t?r.jsx(Le,{forceMount:!0,children:r.jsx(ht,{ref:o,loop:!0,side:e.side||"bottom",align:e.align||"start",sideOffset:8,className:Qe(e.className),style:e.style,children:r.jsx(Ve.div,{initial:"closed",animate:t?"open":"closed",exit:"closed",variants:s,children:r.jsx(gt,{className:"bg-white rounded-large border border-gray-200 p-[4px]",children:ke(e.menus,e.onSelect)})})})}):null})]})});Be.displayName="DropDown";const _=Be,Ct=[{prop:"menus",desc:"menu list",type:"MenuItem[]",required:!0,default:"-"},{prop:"align",desc:"alignment of menu",type:"tag: start | center | end",required:!1,default:"center"},{prop:"side",desc:"side of menu",type:"tag: top | right | bottom | left",required:!1,default:"bottom"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onOpenChange",desc:"open change event of dropdown",required:!1,type:"(open: boolean) => void",default:"-"},{prop:"onSelect",desc:"item select event of dropdown",type:"(event: Event, item: MenuItem) => void",required:!1,default:"-"}],St=[{prop:"id",desc:"menu item id",type:"string",required:"true(except for separator)",default:"-"},{prop:"label",desc:"menu item left label",type:"string",required:"true",default:"-"},{prop:"prefix",desc:"menu item prefix",type:"React.ReactNode",required:!1,default:"-"},{prop:"suffix",desc:"menu item suffix",type:"React.ReactNode",required:!1,default:"-"},{prop:"disabled",desc:"disable status of menu item",type:"boolean",required:!1,default:!1},{prop:"type",desc:"only separator type, as separator",type:"separator",required:!1,default:"-"},{prop:"children",desc:"menu item children",type:"MenuItem[]",required:!1,default:"-"}],Rt=`\`\`\`typescript
import Dropdown, { type MenuItem } from 'your path/Dropdown';
import Button from 'your path/Button';
const commonMenus: MenuItem[] = [
  {
    id: '001',
    label: 'item-001',
  },
  {
    id: '002',
    label: 'item-002',
  },
  {
    id: '003',
    label: 'item-003',
  },
  {
    id: '004',
    label: 'item-004',
  },
];
export default function Demo() {
  const handleOnItemSelect = (event: Event, item: MenuItem) => {
    console.log('you click:', event, item);
  };
  return (
    <div>
      <DropDown className="w-[120px]" menus={commonMenus} onSelect={handleOnItemSelect}>
        <Button>menu</Button>
      </DropDown>
      ;
    </div>
  );
}
\`\`\`
`,Nt=`\`\`\`typescript
import Dropdown, { type MenuItem } from 'your path/Dropdown';
import Button from 'your path/Button';
const commonMenus: MenuItem[] = [
  {
    id: '001',
    label: 'item-001',
  },
  {
    id: '002',
    label: 'item-002',
  },
  {
    id: '003',
    label: 'item-003',
  },
  {
    id: '004',
    label: 'item-004',
  },
];
export default function Demo() {
  return (
    <div className="[&_Button:not(:first-child)]:ml-2">
      <DropDown className="w-[120px]" menus={commonMenus} side="left">
        <Button>left</Button>
      </DropDown>
      <DropDown className="w-[120px]" menus={commonMenus} side="top">
        <Button>top</Button>
      </DropDown>
      <DropDown className="w-[120px]" menus={commonMenus} side="right">
        <Button>right</Button>
      </DropDown>
      <DropDown className="w-[120px]" menus={commonMenus} side="bottom">
        <Button>bottom</Button>
      </DropDown>
    </div>
  );
}
\`\`\`
`,Ot=`\`\`\`typescript
import Dropdown, { type MenuItem } from 'your path/Dropdown';
import Button from 'your path/Button';
const menuWidthSeparator: MenuItem[] = [
  {
    id: 'About',
    label: 'About',
  },
  {
    id: 'Set',
    label: 'Setting',
  },
  {
    type: 'separator',
  },
  {
    id: 'Exit',
    label: 'Exit',
  },
];
export default function Demo() {
  return (
    <DropDown className="w-[120px]" menus={menuWidthSeparator}>
      <Button>menu</Button>
    </DropDown>
  );
}
\`\`\`
`,Pt=`\`\`\`typescript
import Dropdown, { type MenuItem } from 'your path/Dropdown';
import Button from 'your path/Button';
const menuWithChildren: MenuItem[] = [
  {
    id: 'About',
    label: 'About',
  },
  {
    id: 'Set',
    label: 'Setting',
  },
  {
    id: 'Share',
    label: 'Share',
    children: [
      {
        id: 'email',
        label: 'Email',
      },
      {
        id: 'wehChat',
        label: 'weChat',
      },
    ],
  },
  {
    type: 'separator',
  },
  {
    id: 'Exit',
    label: 'Exit',
  },
];
export default function Demo() {
  const handleOnItemSelect = (event: Event, item: MenuItem) => {
    console.log('you click:', event, item);
  };
  return (
    <DropDown className="w-[120px]" menus={menuWithChildren} onSelect={handleOnItemSelect}>
      <Button>menu</Button>
    </DropDown>
  );
}
\`\`\`
`,It=`\`\`\`typescript
import Dropdown, { type MenuItem } from 'your path/Dropdown';
import { RiStackLine, RiDropLine, RiGlobalLine, RiSipLine } from '@remixicon/react';
import Button from 'your path/Button';
const menuWidthPreAndSuffix: MenuItem[] = [
  {
    id: 'layer',
    label: 'Layer',
    prefix: <RiStackLine size={16} className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + L</div>,
  },
  {
    id: 'opacity',
    label: 'Opacity',
    prefix: <RiDropLine size={16} className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + O</div>,
  },
  {
    id: 'more',
    label: 'More tools',
    prefix: <RiDropLine size={16} className="mr-1" />,
    children: [
      {
        id: 'tool-trans',
        label: 'Pipette',
        prefix: <RiSipLine size={15} className="mr-1" />,
        suffix: <div className="text-gray-400 ml-10">⌘ + ⌥ + T</div>,
      },
    ],
  },
];
export default function Demo() {
  const handleOnItemSelect = (event: Event, item: MenuItem) => {
    console.log('you click:', event, item);
  };
  return (
    <DropDown className="w-[200px]" menus={menuWidthPreAndSuffix} onSelect={handleOnItemSelect}>
      <Button>menu</Button>
    </DropDown>
  );
}
\`\`\`
`,R=[{id:"001",label:"item-001"},{id:"002",label:"item-002"},{id:"003",label:"item-003"},{id:"004",label:"item-004"}],jt=[{id:"About",label:"About"},{id:"Set",label:"Setting"},{type:"separator"},{id:"Exit",label:"Exit"}],Tt=[{id:"About",label:"About"},{id:"Set",label:"Setting"},{id:"Share",label:"Share",children:[{id:"email",label:"Email"},{id:"wehChat",label:"weChat"}]},{type:"separator"},{id:"Exit",label:"Exit"}],At=[{id:"layer",label:"Layer",prefix:r.jsx(Ye,{size:16,className:"mr-1"}),suffix:r.jsx("div",{className:"text-gray-400",children:"⌘ + L"})},{id:"opacity",label:"Opacity",prefix:r.jsx(Xe,{size:16,className:"mr-1"}),suffix:r.jsx("div",{className:"text-gray-400",children:"⌘ + O"})},{id:"more",label:"More tools",prefix:r.jsx(Ze,{size:16,className:"mr-1"}),children:[{id:"tool-trans",label:"Pipette",prefix:r.jsx(Je,{size:15,className:"mr-1"}),suffix:r.jsx("div",{className:"text-gray-400 ml-10",children:"⌘ + ⌥ + T"})}]}];function Xt(){const e=(o,t)=>{console.log("you click:",o,t)};return r.jsxs(r.Fragment,{children:[r.jsx($n,{title:"Dropdown",sourceName:"Dropdown"}),r.jsx(xn,{children:"Menus collection, often triggered by a button"}),r.jsxs(T,{className:"mt-4",children:[r.jsx(S,{as:"h4",className:"mb-2",children:"basic"}),r.jsx(_,{className:"w-[120px]",menus:R,onSelect:e,children:r.jsx(M,{type:"primary",children:"menu"})}),r.jsx(B,{content:Rt})]}),r.jsxs(T,{className:"mt-4",children:[r.jsx(S,{as:"h4",className:"mb-2",children:"side"}),r.jsxs("div",{className:"[&_Button:not(:first-child)]:ml-2",children:[r.jsx(_,{className:"w-[120px]",menus:R,side:"left",children:r.jsx(M,{type:"primary",children:"left"})}),r.jsx(_,{className:"w-[120px]",menus:R,side:"top",children:r.jsx(M,{type:"primary",children:"top"})}),r.jsx(_,{className:"w-[120px]",menus:R,side:"right",children:r.jsx(M,{type:"primary",children:"right"})}),r.jsx(_,{className:"w-[120px]",menus:R,side:"bottom",children:r.jsx(M,{type:"primary",children:"bottom"})})]}),r.jsx(B,{content:Nt})]}),r.jsxs(T,{className:"mt-4",children:[r.jsx(S,{as:"h4",className:"mb-2",children:"align"}),r.jsxs("div",{className:"[&_Button:not(:first-child)]:ml-2",children:[r.jsx(_,{className:"w-[120px]",menus:R,align:"start",children:r.jsx(M,{type:"primary",children:"start"})}),r.jsx(_,{className:"w-[120px]",menus:R,align:"center",children:r.jsx(M,{type:"primary",children:"center"})}),r.jsx(_,{className:"w-[120px]",menus:R,align:"end",children:r.jsx(M,{type:"primary",children:"end"})})]})]}),r.jsxs(T,{className:"mt-4",children:[r.jsx(S,{as:"h4",className:"mb-2",children:"separator"}),r.jsx(_,{className:"w-[120px]",menus:jt,children:r.jsx(M,{type:"primary",children:"menu"})}),r.jsx(B,{content:Ot})]}),r.jsxs(T,{className:"mt-4",children:[r.jsx(S,{as:"h4",className:"mb-2",children:"children menu"}),r.jsx(_,{className:"w-[120px]",menus:Tt,onSelect:e,children:r.jsx(M,{type:"primary",children:"menu"})}),r.jsx(B,{content:Pt})]}),r.jsxs(T,{className:"mt-4",children:[r.jsx(S,{as:"h4",className:"mb-2",children:"custom prefix and suffix"}),r.jsx(_,{className:"w-[200px]",menus:At,onSelect:e,children:r.jsx(M,{type:"primary",children:"menu"})}),r.jsx(B,{content:It})]}),r.jsx(S,{as:"h2",className:"mb-2",children:"API"}),r.jsx(S,{as:"h4",className:"mb-2",children:"Dropdown"}),r.jsx($e,{rows:Ct}),r.jsx(S,{as:"h4",className:"my-2",children:"MenuItem"}),r.jsx($e,{rows:St})]})}export{Xt as default};
