import{l as o,ap as h,aq as p,ar as f,j as s,k as T,as as C,at as E,au as H,av as N,aw as R,ax as P}from"./index-CULRTGWT.js";function W(e,a){var n=e.values,t=p(e,["values"]),r=a.values,l=p(a,["values"]);return f(r,n)&&f(t,l)}function M(e){var a=h(),n=a.formatMessage,t=a.textComponent,r=t===void 0?o.Fragment:t,l=e.id,d=e.description,i=e.defaultMessage,c=e.values,m=e.children,g=e.tagName,x=g===void 0?r:g,F=e.ignoreTag,L={id:l,description:d,defaultMessage:i},u=n(L,c,{ignoreTag:F});return typeof m=="function"?m(Array.isArray(u)?u:[u]):x?o.createElement(x,null,o.Children.toArray(u)):o.createElement(o.Fragment,null,u)}M.displayName="FormattedMessage";var _=o.memo(M,W);_.displayName="MemoizedFormattedMessage";const w=(e,{id:a,values:n})=>e.formatMessage({id:a},n),k=({id:e,values:a})=>s.jsx(_,{id:e,values:a}),A="_pageWrapper_xm1u1_1",B="_withFixedHeader_xm1u1_16",v={pageWrapper:A,withFixedHeader:B},y=({withFixedHeader:e,children:a})=>s.jsx("div",{className:T(v.pageWrapper,{[v.withFixedHeader]:e}),children:a}),q=({children:e})=>s.jsx(y,{children:e}),O=({size:e=16,fill:a="var(--COLOR.SUBTEXT)"})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M3.82843 6.9999H16V8.9999H3.82843L9.1924 14.3638L7.7782 15.778L0 7.9999L7.7782 0.22168L9.1924 1.63589L3.82843 6.9999Z",fill:a})}),b=e=>{const a=C(e.url.scheme,e.url.params);if(!a)return null;const n={...e,url:void 0};return s.jsx(E,{to:a,...n,children:e.children})},V="_headContainer_23e7_1",$="_headRow_23e7_10",j={headContainer:V,headRow:$},z=({children:e,title:a,back:n})=>{const t=h(),r=w(t,{id:"components.templates.WithHeader.goBack"});return s.jsxs(y,{children:[s.jsxs("div",{className:j.headContainer,children:[n&&s.jsx("div",{className:j.headRow,children:s.jsxs(b,{url:n,children:[s.jsx(O,{}),s.jsx("p",{className:"text-style-thick",children:r})]})}),s.jsx("h1",{className:"pageTitle",children:a})]}),e]})},I={entry:q,withHeader:z},S=()=>{var n,t;const e=H();return(t=(n=(N(R,{...e,pathname:e.pathname.split("/~/")[0]})||[])[0])==null?void 0:n.route)==null?void 0:t.path},X=({back:e,children:a,template:n,title:t})=>{const r=h(),l=S(),{title:d}=P[l]||{},i=o.useMemo(()=>d?{id:d}:void 0,[d]);o.useLayoutEffect(()=>{document.title=t&&typeof t!="boolean"?t:w(r,i||{id:"components.organisms.Page.title"})},[t,i,r]);let c=null;t&&(typeof t!="boolean"?c=s.jsx(s.Fragment,{children:t}):i&&(c=s.jsx(k,{...i})));const m=I[n];return s.jsx(m,{title:c,back:e,children:a})};export{k as M,X as P,w as m};
