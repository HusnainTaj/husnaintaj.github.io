import{s as C,n as m,c as p,d as O,e as T,u as F,g as L,f as k}from"../chunks/scheduler.ef563706.js";import{S as P,i as S,g as h,h as $,x as U,k as u,a as d,f as _,m as z,s as A,j as y,n as D,c as b,y as v,r as I,u as x,v as E,d as g,t as j,w as H}from"../chunks/index.223929de.js";import{p as W}from"../chunks/stores.3f542d81.js";const q=!0,Z=Object.freeze(Object.defineProperty({__proto__:null,prerender:q},Symbol.toStringTag,{value:"Module"}));function N(l){let e,s='<a href="/" title="Mouse DPI Analyzer">🏠 DPI Analyzer</a> <a href="/converter" title="Mouse Sensitivity Converter">🖱️ Sensitivity Converter</a> <a href="/about" title="About Us">🤔 About</a> <a href="/privacy" title="Privacy Policy">🔒 Privacy</a> <a href="/contact" title="Contact Us">☎️ Contact</a>';return{c(){e=h("footer"),e.innerHTML=s,this.h()},l(a){e=$(a,"FOOTER",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-cjj5x9"&&(e.innerHTML=s),this.h()},h(){u(e,"class","light svelte-36n6x1")},m(a,r){d(a,e,r)},p:m,i:m,o:m,d(a){a&&_(e)}}}class R extends P{constructor(e){super(),S(this,e,null,N,C,{})}}function V(l){let e,s,a,r,i,c,n,t;return{c(){e=h("nav"),s=h("a"),a=z("🏠 DPI Analyzer"),i=A(),c=h("a"),n=z("🖱️ Sensitivity Converter"),this.h()},l(o){e=$(o,"NAV",{class:!0});var f=y(e);s=$(f,"A",{href:!0,title:!0,class:!0});var w=y(s);a=D(w,"🏠 DPI Analyzer"),w.forEach(_),i=b(f),c=$(f,"A",{href:!0,title:!0,class:!0});var M=y(c);n=D(M,"🖱️ Sensitivity Converter"),M.forEach(_),f.forEach(_),this.h()},h(){u(s,"href","/"),u(s,"title","Mouse DPI Analyzer"),u(s,"class",r=p(l[0].url.pathname==="/"?"active":"")+" svelte-1owjs8d"),u(c,"href","/converter"),u(c,"title","Mouse Sensitivity Converter"),u(c,"class",t=p(l[0].url.pathname.startsWith("/converter")?"active":"")+" svelte-1owjs8d"),u(e,"class","dark font-mono svelte-1owjs8d")},m(o,f){d(o,e,f),v(e,s),v(s,a),v(e,i),v(e,c),v(c,n)},p(o,[f]){f&1&&r!==(r=p(o[0].url.pathname==="/"?"active":"")+" svelte-1owjs8d")&&u(s,"class",r),f&1&&t!==(t=p(o[0].url.pathname.startsWith("/converter")?"active":"")+" svelte-1owjs8d")&&u(c,"class",t)},i:m,o:m,d(o){o&&_(e)}}}function B(l,e,s){let a;return O(l,W,r=>s(0,a=r)),[a]}class G extends P{constructor(e){super(),S(this,e,B,V,C,{})}}function J(l){let e,s,a,r,i;e=new G({});const c=l[1].default,n=T(c,l,l[0],null);return r=new R({}),{c(){I(e.$$.fragment),s=A(),n&&n.c(),a=A(),I(r.$$.fragment)},l(t){x(e.$$.fragment,t),s=b(t),n&&n.l(t),a=b(t),x(r.$$.fragment,t)},m(t,o){E(e,t,o),d(t,s,o),n&&n.m(t,o),d(t,a,o),E(r,t,o),i=!0},p(t,[o]){n&&n.p&&(!i||o&1)&&F(n,c,t,t[0],i?k(c,t[0],o,null):L(t[0]),null)},i(t){i||(g(e.$$.fragment,t),g(n,t),g(r.$$.fragment,t),i=!0)},o(t){j(e.$$.fragment,t),j(n,t),j(r.$$.fragment,t),i=!1},d(t){t&&(_(s),_(a)),H(e,t),n&&n.d(t),H(r,t)}}}function K(l,e,s){let{$$slots:a={},$$scope:r}=e;return l.$$set=i=>{"$$scope"in i&&s(0,r=i.$$scope)},[r,a]}class ee extends P{constructor(e){super(),S(this,e,K,J,C,{})}}export{ee as component,Z as universal};
