import{r,q as S}from"./index-D3HKnlxg.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function y(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function x(...e){return t=>e.forEach(n=>y(n,t))}function V(...e){return r.useCallback(x(...e),e)}function j(e,t=[]){let n=[];function o(i,c){const l=r.createContext(c),a=n.length;n=[...n,c];function $(f){const{scope:u,children:m,...d}=f,C=(u==null?void 0:u[e][a])||l,E=r.useMemo(()=>d,Object.values(d));return r.createElement(C.Provider,{value:E},m)}function v(f,u){const m=(u==null?void 0:u[e][a])||l,d=r.useContext(m);if(d)return d;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${i}\``)}return $.displayName=i+"Provider",[$,v]}const s=()=>{const i=n.map(c=>r.createContext(c));return function(l){const a=(l==null?void 0:l[e])||i;return r.useMemo(()=>({[`__scope${e}`]:{...l,[e]:a}}),[l,a])}};return s.scopeName=e,[o,P(s,...t)]}function P(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const c=o.reduce((l,{useScope:a,scopeName:$})=>{const f=a(i)[`__scope${$}`];return{...l,...f}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}const b=r.forwardRef((e,t)=>{const{children:n,...o}=e,s=r.Children.toArray(n),i=s.find(w);if(i){const c=i.props.children,l=s.map(a=>a===i?r.Children.count(c)>1?r.Children.only(null):r.isValidElement(c)?c.props.children:null:a);return r.createElement(h,p({},o,{ref:t}),r.isValidElement(c)?r.cloneElement(c,void 0,l):null)}return r.createElement(h,p({},o,{ref:t}),n)});b.displayName="Slot";const h=r.forwardRef((e,t)=>{const{children:n,...o}=e;return r.isValidElement(n)?r.cloneElement(n,{...N(o,n.props),ref:t?x(t,n.ref):n.ref}):r.Children.count(n)>1?r.Children.only(null):null});h.displayName="SlotClone";const g=({children:e})=>r.createElement(r.Fragment,null,e);function w(e){return r.isValidElement(e)&&e.type===g}function N(e,t){const n={...t};for(const o in t){const s=e[o],i=t[o];/^on[A-Z]/.test(o)?s&&i?n[o]=(...l)=>{i(...l),s(...l)}:s&&(n[o]=s):o==="style"?n[o]={...s,...i}:o==="className"&&(n[o]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}const _=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],A=_.reduce((e,t)=>{const n=r.forwardRef((o,s)=>{const{asChild:i,...c}=o,l=i?b:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(l,p({},c,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function H(e,t){e&&S.flushSync(()=>e.dispatchEvent(t))}export{j as $,p as _,V as a,A as b,b as c,x as d,H as e,g as f};