import{r as u}from"./index-D1KJsCxW.js";import{a as ve,b as he,_ as me}from"./index-BugOsXht.js";import{$ as Y}from"./index-CwP2f8qY.js";let B=0;function ut(){u.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:G()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:G()),B++,()=>{B===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),B--}},[])}function G(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const _="focusScope.autoFocusOnMount",D="focusScope.autoFocusOnUnmount",z={bubbles:!1,cancelable:!0},it=u.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:c,onUnmountAutoFocus:i,...l}=e,[o,S]=u.useState(null),b=Y(c),g=Y(i),f=u.useRef(null),d=ve(t,a=>S(a)),h=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(r){let a=function(m){if(h.paused||!o)return;const p=m.target;o.contains(p)?f.current=p:C(f.current,{select:!0})},s=function(m){if(h.paused||!o)return;const p=m.relatedTarget;p!==null&&(o.contains(p)||C(f.current,{select:!0}))},v=function(m){if(document.activeElement===document.body)for(const y of m)y.removedNodes.length>0&&C(o)};document.addEventListener("focusin",a),document.addEventListener("focusout",s);const E=new MutationObserver(v);return o&&E.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",a),document.removeEventListener("focusout",s),E.disconnect()}}},[r,o,h.paused]),u.useEffect(()=>{if(o){q.add(h);const a=document.activeElement;if(!o.contains(a)){const v=new CustomEvent(_,z);o.addEventListener(_,b),o.dispatchEvent(v),v.defaultPrevented||(pe(Se(re(o)),{select:!0}),document.activeElement===a&&C(o))}return()=>{o.removeEventListener(_,b),setTimeout(()=>{const v=new CustomEvent(D,z);o.addEventListener(D,g),o.dispatchEvent(v),v.defaultPrevented||C(a??document.body,{select:!0}),o.removeEventListener(D,g),q.remove(h)},0)}}},[o,b,g,h]);const w=u.useCallback(a=>{if(!n&&!r||h.paused)return;const s=a.key==="Tab"&&!a.altKey&&!a.ctrlKey&&!a.metaKey,v=document.activeElement;if(s&&v){const E=a.currentTarget,[m,p]=ge(E);m&&p?!a.shiftKey&&v===p?(a.preventDefault(),n&&C(m,{select:!0})):a.shiftKey&&v===m&&(a.preventDefault(),n&&C(p,{select:!0})):v===E&&a.preventDefault()}},[n,r,h.paused]);return u.createElement(he.div,me({tabIndex:-1},l,{ref:d,onKeyDown:w}))});function pe(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(C(r,{select:t}),document.activeElement!==n)return}function ge(e){const t=re(e),n=Z(t,e),r=Z(t.reverse(),e);return[n,r]}function re(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const c=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||c?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Z(e,t){for(const n of e)if(!be(n,{upTo:t}))return n}function be(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function ye(e){return e instanceof HTMLInputElement&&"select"in e}function C(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&ye(e)&&t&&e.select()}}const q=Ee();function Ee(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Q(e,t),e.unshift(t)},remove(t){var n;e=Q(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Q(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Se(e){return e.filter(t=>t.tagName!=="A")}var we=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},T=new WeakMap,N=new WeakMap,F={},U=0,ae=function(e){return e&&(e.host||ae(e.parentNode))},$e=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=ae(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Ce=function(e,t,n,r){var c=$e(t,Array.isArray(e)?e:[e]);F[n]||(F[n]=new WeakMap);var i=F[n],l=[],o=new Set,S=new Set(c),b=function(f){!f||o.has(f)||(o.add(f),b(f.parentNode))};c.forEach(b);var g=function(f){!f||S.has(f)||Array.prototype.forEach.call(f.children,function(d){if(o.has(d))g(d);else{var h=d.getAttribute(r),w=h!==null&&h!=="false",a=(T.get(d)||0)+1,s=(i.get(d)||0)+1;T.set(d,a),i.set(d,s),l.push(d),a===1&&w&&N.set(d,!0),s===1&&d.setAttribute(n,"true"),w||d.setAttribute(r,"true")}})};return g(t),o.clear(),U++,function(){l.forEach(function(f){var d=T.get(f)-1,h=i.get(f)-1;T.set(f,d),i.set(f,h),d||(N.has(f)||f.removeAttribute(r),N.delete(f)),h||f.removeAttribute(n)}),U--,U||(T=new WeakMap,T=new WeakMap,N=new WeakMap,F={})}},lt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),c=t||we(e);return c?(r.push.apply(r,Array.from(c.querySelectorAll("[aria-live]"))),Ce(r,c,n,"aria-hidden")):function(){return null}},$=function(){return $=Object.assign||function(t){for(var n,r=1,c=arguments.length;r<c;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$.apply(this,arguments)};function oe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]]);return n}function Te(e,t,n){if(n||arguments.length===2)for(var r=0,c=t.length,i;r<c;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var M="right-scroll-bar-position",O="width-before-scroll-bar",ke="with-scroll-bars-hidden",Re="--removed-body-scroll-bar-size";function j(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ae(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var c=n.value;c!==r&&(n.value=r,n.callback(r,c))}}}})[0];return n.callback=t,n.facade}var J=new WeakMap;function xe(e,t){var n=Ae(t||null,function(r){return e.forEach(function(c){return j(c,r)})});return u.useLayoutEffect(function(){var r=J.get(n);if(r){var c=new Set(r),i=new Set(e),l=n.current;c.forEach(function(o){i.has(o)||j(o,null)}),i.forEach(function(o){c.has(o)||j(o,l)})}J.set(n,e)},[e]),n}function Ne(e){return e}function Fe(e,t){t===void 0&&(t=Ne);var n=[],r=!1,c={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(o){return o!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(o){return i(o)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var o=n;n=[],o.forEach(i),l=n}var S=function(){var g=l;l=[],g.forEach(i)},b=function(){return Promise.resolve().then(S)};b(),n={push:function(g){l.push(g),b()},filter:function(g){return l=l.filter(g),n}}}};return c}function Le(e){e===void 0&&(e={});var t=Fe(null);return t.options=$({async:!0,ssr:!1},e),t}var ce=function(e){var t=e.sideCar,n=oe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,$({},n))};ce.isSideCarExport=!0;function Pe(e,t){return e.useMedium(t),ce}var ue=Le(),H=function(){},I=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:H,onWheelCapture:H,onTouchMoveCapture:H}),c=r[0],i=r[1],l=e.forwardProps,o=e.children,S=e.className,b=e.removeScrollBar,g=e.enabled,f=e.shards,d=e.sideCar,h=e.noIsolation,w=e.inert,a=e.allowPinchZoom,s=e.as,v=s===void 0?"div":s,E=oe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),m=d,p=xe([n,t]),y=$($({},E),c);return u.createElement(u.Fragment,null,g&&u.createElement(m,{sideCar:ue,removeScrollBar:b,shards:f,noIsolation:h,inert:w,setCallbacks:i,allowPinchZoom:!!a,lockRef:n}),l?u.cloneElement(u.Children.only(o),$($({},y),{ref:p})):u.createElement(v,$({},y,{className:S,ref:p}),o))});I.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};I.classNames={fullWidth:O,zeroRight:M};var Me=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Oe(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Me();return t&&e.setAttribute("nonce",t),e}function Ie(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function We(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Be=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Oe())&&(Ie(t,n),We(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},_e=function(){var e=Be();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ie=function(){var e=_e(),t=function(n){var r=n.styles,c=n.dynamic;return e(r,c),null};return t},De={left:0,top:0,right:0,gap:0},K=function(e){return parseInt(e||"",10)||0},Ue=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],c=t[e==="padding"?"paddingRight":"marginRight"];return[K(n),K(r),K(c)]},je=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return De;var t=Ue(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},He=ie(),Ke=function(e,t,n,r){var c=e.left,i=e.top,l=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ke,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(M,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(O,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(M," .").concat(M,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(O," .").concat(O,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(Re,": ").concat(o,`px;
  }
`)},Ve=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,c=r===void 0?"margin":r,i=u.useMemo(function(){return je(c)},[c]);return u.createElement(He,{styles:Ke(i,!t,c,n?"":"!important")})},V=!1;if(typeof window<"u")try{var L=Object.defineProperty({},"passive",{get:function(){return V=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch{V=!1}var k=V?{passive:!1}:!1,Xe=function(e){return e.tagName==="TEXTAREA"},le=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Xe(e)&&n[t]==="visible")},Ye=function(e){return le(e,"overflowY")},Ge=function(e){return le(e,"overflowX")},ee=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=se(e,n);if(r){var c=fe(e,n),i=c[1],l=c[2];if(i>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ze=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ze=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},se=function(e,t){return e==="v"?Ye(t):Ge(t)},fe=function(e,t){return e==="v"?ze(t):Ze(t)},qe=function(e,t){return e==="h"&&t==="rtl"?-1:1},Qe=function(e,t,n,r,c){var i=qe(e,window.getComputedStyle(t).direction),l=i*r,o=n.target,S=t.contains(o),b=!1,g=l>0,f=0,d=0;do{var h=fe(e,o),w=h[0],a=h[1],s=h[2],v=a-s-i*w;(w||v)&&se(e,o)&&(f+=v,d+=w),o=o.parentNode}while(!S&&o!==document.body||S&&(t.contains(o)||t===o));return(g&&(c&&f===0||!c&&l>f)||!g&&(c&&d===0||!c&&-l>d))&&(b=!0),b},P=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},te=function(e){return[e.deltaX,e.deltaY]},ne=function(e){return e&&"current"in e?e.current:e},Je=function(e,t){return e[0]===t[0]&&e[1]===t[1]},et=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},tt=0,R=[];function nt(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),c=u.useState(tt++)[0],i=u.useState(function(){return ie()})[0],l=u.useRef(e);u.useEffect(function(){l.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var a=Te([e.lockRef.current],(e.shards||[]).map(ne),!0).filter(Boolean);return a.forEach(function(s){return s.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),a.forEach(function(s){return s.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var o=u.useCallback(function(a,s){if("touches"in a&&a.touches.length===2)return!l.current.allowPinchZoom;var v=P(a),E=n.current,m="deltaX"in a?a.deltaX:E[0]-v[0],p="deltaY"in a?a.deltaY:E[1]-v[1],y,W=a.target,A=Math.abs(m)>Math.abs(p)?"h":"v";if("touches"in a&&A==="h"&&W.type==="range")return!1;var x=ee(A,W);if(!x)return!0;if(x?y=A:(y=A==="v"?"h":"v",x=ee(A,W)),!x)return!1;if(!r.current&&"changedTouches"in a&&(m||p)&&(r.current=y),!y)return!0;var X=r.current||y;return Qe(X,s,a,X==="h"?m:p,!0)},[]),S=u.useCallback(function(a){var s=a;if(!(!R.length||R[R.length-1]!==i)){var v="deltaY"in s?te(s):P(s),E=t.current.filter(function(y){return y.name===s.type&&y.target===s.target&&Je(y.delta,v)})[0];if(E&&E.should){s.cancelable&&s.preventDefault();return}if(!E){var m=(l.current.shards||[]).map(ne).filter(Boolean).filter(function(y){return y.contains(s.target)}),p=m.length>0?o(s,m[0]):!l.current.noIsolation;p&&s.cancelable&&s.preventDefault()}}},[]),b=u.useCallback(function(a,s,v,E){var m={name:a,delta:s,target:v,should:E};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(p){return p!==m})},1)},[]),g=u.useCallback(function(a){n.current=P(a),r.current=void 0},[]),f=u.useCallback(function(a){b(a.type,te(a),a.target,o(a,e.lockRef.current))},[]),d=u.useCallback(function(a){b(a.type,P(a),a.target,o(a,e.lockRef.current))},[]);u.useEffect(function(){return R.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",S,k),document.addEventListener("touchmove",S,k),document.addEventListener("touchstart",g,k),function(){R=R.filter(function(a){return a!==i}),document.removeEventListener("wheel",S,k),document.removeEventListener("touchmove",S,k),document.removeEventListener("touchstart",g,k)}},[]);var h=e.removeScrollBar,w=e.inert;return u.createElement(u.Fragment,null,w?u.createElement(i,{styles:et(c)}):null,h?u.createElement(Ve,{gapMode:"margin"}):null)}const rt=Pe(ue,nt);var de=u.forwardRef(function(e,t){return u.createElement(I,$({},e,{ref:t,sideCar:rt}))});de.classNames=I.classNames;const st=de;export{ut as $,it as a,st as b,lt as h};
