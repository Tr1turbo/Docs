import{R as i}from"./chunks/theme.BY8Yu6Hj.js";import{R as o,a2 as u,a3 as c,a4 as l,a5 as f,a6 as d,a7 as m,a8 as h,a9 as g,aa as A,ab as v,d as P,u as R,v as w,s as y,ac as C,ad as b,ae as E,a0 as S}from"./chunks/framework.BDxlaA_J.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=R();return w(()=>{y(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),b(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=j(),a=_();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function _(){return g(T)}function j(){let e=o,a;return A(t=>{let n=v(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{D as createApp};