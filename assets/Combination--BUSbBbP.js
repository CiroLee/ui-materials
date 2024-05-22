import{r as u}from"./index-DS6qm14V.js";import{a as he,b as me,_ as pe}from"./index-DxDs9eJJ.js";import{$ as G}from"./index-MDj1YPAE.js";let _=0;function ft(){u.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:z()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:z()),_++,()=>{_===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),_--}},[])}function z(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const D="focusScope.autoFocusOnMount",U="focusScope.autoFocusOnUnmount",Z={bubbles:!1,cancelable:!0},dt=u.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:c,onUnmountAutoFocus:i,...s}=e,[o,S]=u.useState(null),b=G(c),g=G(i),f=u.useRef(null),v=he(t,a=>S(a)),h=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(r){let a=function(m){if(h.paused||!o)return;const p=m.target;o.contains(p)?f.current=p:$(f.current,{select:!0})},l=function(m){if(h.paused||!o)return;const p=m.relatedTarget;p!==null&&(o.contains(p)||$(f.current,{select:!0}))},d=function(m){if(document.activeElement===document.body)for(const y of m)y.removedNodes.length>0&&$(o)};document.addEventListener("focusin",a),document.addEventListener("focusout",l);const E=new MutationObserver(d);return o&&E.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",a),document.removeEventListener("focusout",l),E.disconnect()}}},[r,o,h.paused]),u.useEffect(()=>{if(o){Q.add(h);const a=document.activeElement;if(!o.contains(a)){const d=new CustomEvent(D,Z);o.addEventListener(D,b),o.dispatchEvent(d),d.defaultPrevented||(ge(we(oe(o)),{select:!0}),document.activeElement===a&&$(o))}return()=>{o.removeEventListener(D,b),setTimeout(()=>{const d=new CustomEvent(U,Z);o.addEventListener(U,g),o.dispatchEvent(d),d.defaultPrevented||$(a??document.body,{select:!0}),o.removeEventListener(U,g),Q.remove(h)},0)}}},[o,b,g,h]);const w=u.useCallback(a=>{if(!n&&!r||h.paused)return;const l=a.key==="Tab"&&!a.altKey&&!a.ctrlKey&&!a.metaKey,d=document.activeElement;if(l&&d){const E=a.currentTarget,[m,p]=be(E);m&&p?!a.shiftKey&&d===p?(a.preventDefault(),n&&$(m,{select:!0})):a.shiftKey&&d===m&&(a.preventDefault(),n&&$(p,{select:!0})):d===E&&a.preventDefault()}},[n,r,h.paused]);return u.createElement(me.div,pe({tabIndex:-1},s,{ref:v,onKeyDown:w}))});function ge(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if($(r,{select:t}),document.activeElement!==n)return}function be(e){const t=oe(e),n=q(t,e),r=q(t.reverse(),e);return[n,r]}function oe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const c=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||c?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function q(e,t){for(const n of e)if(!ye(n,{upTo:t}))return n}function ye(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ee(e){return e instanceof HTMLInputElement&&"select"in e}function $(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ee(e)&&t&&e.select()}}const Q=Se();function Se(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=J(e,t),e.unshift(t)},remove(t){var n;e=J(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function J(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function we(e){return e.filter(t=>t.tagName!=="A")}var Ce=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},k=new WeakMap,N=new WeakMap,F={},j=0,ce=function(e){return e&&(e.host||ce(e.parentNode))},$e=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=ce(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},ke=function(e,t,n,r){var c=$e(t,Array.isArray(e)?e:[e]);F[n]||(F[n]=new WeakMap);var i=F[n],s=[],o=new Set,S=new Set(c),b=function(f){!f||o.has(f)||(o.add(f),b(f.parentNode))};c.forEach(b);var g=function(f){!f||S.has(f)||Array.prototype.forEach.call(f.children,function(v){if(o.has(v))g(v);else try{var h=v.getAttribute(r),w=h!==null&&h!=="false",a=(k.get(v)||0)+1,l=(i.get(v)||0)+1;k.set(v,a),i.set(v,l),s.push(v),a===1&&w&&N.set(v,!0),l===1&&v.setAttribute(n,"true"),w||v.setAttribute(r,"true")}catch(d){console.error("aria-hidden: cannot operate on ",v,d)}})};return g(t),o.clear(),j++,function(){s.forEach(function(f){var v=k.get(f)-1,h=i.get(f)-1;k.set(f,v),i.set(f,h),v||(N.has(f)||f.removeAttribute(r),N.delete(f)),h||f.removeAttribute(n)}),j--,j||(k=new WeakMap,k=new WeakMap,N=new WeakMap,F={})}},vt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),c=Ce(e);return c?(r.push.apply(r,Array.from(c.querySelectorAll("[aria-live]"))),ke(r,c,n,"aria-hidden")):function(){return null}},C=function(){return C=Object.assign||function(t){for(var n,r=1,c=arguments.length;r<c;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},C.apply(this,arguments)};function ue(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]]);return n}function Ae(e,t,n){if(n||arguments.length===2)for(var r=0,c=t.length,i;r<c;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var I="right-scroll-bar-position",M="width-before-scroll-bar",Te="with-scroll-bars-hidden",Re="--removed-body-scroll-bar-size";function H(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function xe(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var c=n.value;c!==r&&(n.value=r,n.callback(r,c))}}}})[0];return n.callback=t,n.facade}var Le=typeof window<"u"?u.useLayoutEffect:u.useEffect,ee=new WeakMap;function Ne(e,t){var n=xe(null,function(r){return e.forEach(function(c){return H(c,r)})});return Le(function(){var r=ee.get(n);if(r){var c=new Set(r),i=new Set(e),s=n.current;c.forEach(function(o){i.has(o)||H(o,null)}),i.forEach(function(o){c.has(o)||H(o,s)})}ee.set(n,e)},[e]),n}function Fe(e){return e}function Pe(e,t){t===void 0&&(t=Fe);var n=[],r=!1,c={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(o){return o!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(o){return i(o)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var o=n;n=[],o.forEach(i),s=n}var S=function(){var g=s;s=[],g.forEach(i)},b=function(){return Promise.resolve().then(S)};b(),n={push:function(g){s.push(g),b()},filter:function(g){return s=s.filter(g),n}}}};return c}function Oe(e){e===void 0&&(e={});var t=Pe(null);return t.options=C({async:!0,ssr:!1},e),t}var ie=function(e){var t=e.sideCar,n=ue(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,C({},n))};ie.isSideCarExport=!0;function Ie(e,t){return e.useMedium(t),ie}var le=Oe(),K=function(){},W=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:K,onWheelCapture:K,onTouchMoveCapture:K}),c=r[0],i=r[1],s=e.forwardProps,o=e.children,S=e.className,b=e.removeScrollBar,g=e.enabled,f=e.shards,v=e.sideCar,h=e.noIsolation,w=e.inert,a=e.allowPinchZoom,l=e.as,d=l===void 0?"div":l,E=ue(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),m=v,p=Ne([n,t]),y=C(C({},E),c);return u.createElement(u.Fragment,null,g&&u.createElement(m,{sideCar:le,removeScrollBar:b,shards:f,noIsolation:h,inert:w,setCallbacks:i,allowPinchZoom:!!a,lockRef:n}),s?u.cloneElement(u.Children.only(o),C(C({},y),{ref:p})):u.createElement(d,C({},y,{className:S,ref:p}),o))});W.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};W.classNames={fullWidth:M,zeroRight:I};var Me=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function We(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Me();return t&&e.setAttribute("nonce",t),e}function Be(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function _e(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var De=function(){var e=0,t=null;return{add:function(n){e==0&&(t=We())&&(Be(t,n),_e(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Ue=function(){var e=De();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},se=function(){var e=Ue(),t=function(n){var r=n.styles,c=n.dynamic;return e(r,c),null};return t},je={left:0,top:0,right:0,gap:0},V=function(e){return parseInt(e||"",10)||0},He=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],c=t[e==="padding"?"paddingRight":"marginRight"];return[V(n),V(r),V(c)]},Ke=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return je;var t=He(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ve=se(),R="data-scroll-locked",Xe=function(e,t,n,r){var c=e.left,i=e.top,s=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Te,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(R,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(I,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(M,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(I," .").concat(I,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(M," .").concat(M,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(R,`] {
    `).concat(Re,": ").concat(o,`px;
  }
`)},te=function(){var e=parseInt(document.body.getAttribute(R)||"0",10);return isFinite(e)?e:0},Ye=function(){u.useEffect(function(){return document.body.setAttribute(R,(te()+1).toString()),function(){var e=te()-1;e<=0?document.body.removeAttribute(R):document.body.setAttribute(R,e.toString())}},[])},Ge=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,c=r===void 0?"margin":r;Ye();var i=u.useMemo(function(){return Ke(c)},[c]);return u.createElement(Ve,{styles:Xe(i,!t,c,n?"":"!important")})},X=!1;if(typeof window<"u")try{var P=Object.defineProperty({},"passive",{get:function(){return X=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch{X=!1}var A=X?{passive:!1}:!1,ze=function(e){return e.tagName==="TEXTAREA"},fe=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!ze(e)&&n[t]==="visible")},Ze=function(e){return fe(e,"overflowY")},qe=function(e){return fe(e,"overflowX")},ne=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=de(e,n);if(r){var c=ve(e,n),i=c[1],s=c[2];if(i>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Qe=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Je=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},de=function(e,t){return e==="v"?Ze(t):qe(t)},ve=function(e,t){return e==="v"?Qe(t):Je(t)},et=function(e,t){return e==="h"&&t==="rtl"?-1:1},tt=function(e,t,n,r,c){var i=et(e,window.getComputedStyle(t).direction),s=i*r,o=n.target,S=t.contains(o),b=!1,g=s>0,f=0,v=0;do{var h=ve(e,o),w=h[0],a=h[1],l=h[2],d=a-l-i*w;(w||d)&&de(e,o)&&(f+=d,v+=w),o=o.parentNode}while(!S&&o!==document.body||S&&(t.contains(o)||t===o));return(g&&(f===0||!c)||!g&&(v===0||!c))&&(b=!0),b},O=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},re=function(e){return[e.deltaX,e.deltaY]},ae=function(e){return e&&"current"in e?e.current:e},nt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},rt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},at=0,T=[];function ot(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),c=u.useState(at++)[0],i=u.useState(function(){return se()})[0],s=u.useRef(e);u.useEffect(function(){s.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var a=Ae([e.lockRef.current],(e.shards||[]).map(ae),!0).filter(Boolean);return a.forEach(function(l){return l.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),a.forEach(function(l){return l.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var o=u.useCallback(function(a,l){if("touches"in a&&a.touches.length===2)return!s.current.allowPinchZoom;var d=O(a),E=n.current,m="deltaX"in a?a.deltaX:E[0]-d[0],p="deltaY"in a?a.deltaY:E[1]-d[1],y,B=a.target,x=Math.abs(m)>Math.abs(p)?"h":"v";if("touches"in a&&x==="h"&&B.type==="range")return!1;var L=ne(x,B);if(!L)return!0;if(L?y=x:(y=x==="v"?"h":"v",L=ne(x,B)),!L)return!1;if(!r.current&&"changedTouches"in a&&(m||p)&&(r.current=y),!y)return!0;var Y=r.current||y;return tt(Y,l,a,Y==="h"?m:p,!0)},[]),S=u.useCallback(function(a){var l=a;if(!(!T.length||T[T.length-1]!==i)){var d="deltaY"in l?re(l):O(l),E=t.current.filter(function(y){return y.name===l.type&&y.target===l.target&&nt(y.delta,d)})[0];if(E&&E.should){l.cancelable&&l.preventDefault();return}if(!E){var m=(s.current.shards||[]).map(ae).filter(Boolean).filter(function(y){return y.contains(l.target)}),p=m.length>0?o(l,m[0]):!s.current.noIsolation;p&&l.cancelable&&l.preventDefault()}}},[]),b=u.useCallback(function(a,l,d,E){var m={name:a,delta:l,target:d,should:E};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(p){return p!==m})},1)},[]),g=u.useCallback(function(a){n.current=O(a),r.current=void 0},[]),f=u.useCallback(function(a){b(a.type,re(a),a.target,o(a,e.lockRef.current))},[]),v=u.useCallback(function(a){b(a.type,O(a),a.target,o(a,e.lockRef.current))},[]);u.useEffect(function(){return T.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",S,A),document.addEventListener("touchmove",S,A),document.addEventListener("touchstart",g,A),function(){T=T.filter(function(a){return a!==i}),document.removeEventListener("wheel",S,A),document.removeEventListener("touchmove",S,A),document.removeEventListener("touchstart",g,A)}},[]);var h=e.removeScrollBar,w=e.inert;return u.createElement(u.Fragment,null,w?u.createElement(i,{styles:rt(c)}):null,h?u.createElement(Ge,{gapMode:"margin"}):null)}const ct=Ie(le,ot);var ut=u.forwardRef(function(e,t){return u.createElement(W,C({},e,{ref:t,sideCar:ct}))});ut.classNames=W.classNames;export{ft as $,ut as R,dt as a,vt as h};