import{S as t,i as e,s as n,v as l,p as i,P as s,c as o,m as r,t as a,a as c,d as f,e as h,b as x,f as p,g as d,h as g,x as u,j as $,k as m,l as y,y as S}from"./main2.js";import{a as w,D as z,P as k,W as b,S as v}from"./Screen2.js";import{S as T}from"./SketchWrapper2.js";function j(t,e,n){let{text:s}=e,{x:o}=e,{y:r}=e,{width:a}=e,{height:c}=e,{style:f={opacity:1,scale:1}}=e,{textStyle:h={}}=e,{fontSize:x=26}=e,{fill:p=0}=e;const{getApp:d,pixiStore:g}=l(w),u=d(),$=new z,m=new k.Text(s,{...h,fontSize:x,fill:p}),y=m;let S,v=!1;return g.editMode.subscribe((t=>{v=t,S&&S.showHelper(t)})),i((()=>{let t=new k.Graphics;t.lineStyle(0),t.drawRect(0,0,a,c),t.addChild(m),S=new b(t,u.renderer,u.screen,v),S.x=o,S.y=r,$.makeDraggable(S.group,S.sprite),u.stage.addChild(S.group);const e=()=>{m.text=s,m.alpha=f.opacity,m.setTransform(a/2-x*f.scale/2,c/2-x*f.scale/2,f.scale,f.scale),S.update()};u.ticker.add(e),g.destructors.update((t=>[...t,()=>{u.ticker.remove(e,this),console.log("TextElement destroyed")}]))})),t.$$set=t=>{"text"in t&&n(0,s=t.text),"x"in t&&n(1,o=t.x),"y"in t&&n(2,r=t.y),"width"in t&&n(3,a=t.width),"height"in t&&n(4,c=t.height),"style"in t&&n(5,f=t.style),"textStyle"in t&&n(6,h=t.textStyle),"fontSize"in t&&n(7,x=t.fontSize),"fill"in t&&n(8,p=t.fill)},t.$$.update=()=>{256&t.$$.dirty&&(m.tint=p)},[s,o,r,a,c,f,h,x,p,y]}class q extends t{constructor(t){super(),e(this,t,j,null,n,{text:0,x:1,y:2,width:3,height:4,style:5,textStyle:6,fontSize:7,fill:8,pixiObj:9})}get pixiObj(){return this.$$.ctx[9]}}function W(t,e,n){const l=t.slice();return l[1]=e[n],l}function C(t){let e,n;return e=new q({props:{text:t[1].value,style:t[1].style,x:t[1].x,y:t[1].y,width:t[1].width,height:t[1].height,fontSize:t[1].fontSize,fill:t[1].fill,textStyle:t[1].textStyle}}),{c(){o(e.$$.fragment)},m(t,l){r(e,t,l),n=!0},p:u,i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function E(t){let e,n,l=t[0],i=[];for(let e=0;e<l.length;e+=1)i[e]=C(W(t,l,e));const s=t=>c(i[t],1,1,(()=>{i[t]=null}));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=$()},m(t,l){for(let e=0;e<i.length;e+=1)i[e].m(t,l);d(t,e,l),n=!0},p(t,n){if(1&n){let o;for(l=t[0],o=0;o<l.length;o+=1){const s=W(t,l,o);i[o]?(i[o].p(s,n),a(i[o],1)):(i[o]=C(s),i[o].c(),a(i[o],1),i[o].m(e.parentNode,e))}for(m(),o=l.length;o<i.length;o+=1)s(o);y()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)a(i[t]);n=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)c(i[t]);n=!1},d(t){S(i,t),t&&g(e)}}}function M(t){let e,n;return e=new T({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment)},m(t,l){r(e,t,l),n=!0},p(t,n){const l={};16&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function A(t){let e,n,l,i,s,u,$,m;return s=new v({props:{class:"border shadow mx-auto",editMode:!0,width:"600",height:"400",$$slots:{default:[M]},$$scope:{ctx:t}}}),{c(){e=h("h1"),e.textContent="TextElement",n=x(),l=h("p"),l.textContent="A text element.",i=x(),o(s.$$.fragment),u=x(),$=h("pre"),p($,"class","language-null")},m(t,o){d(t,e,o),d(t,n,o),d(t,l,o),d(t,i,o),r(s,t,o),d(t,u,o),d(t,$,o),$.innerHTML='<code class="language-null">&lt;script&gt;\n  import &#123; Screen, SketchWrapper &#125; from &#39;@mmmapper/components&#39;;\n  import &#123; TextElement &#125; from &#39;@mmmapper/components&#39;;\n\n  let texts = [\n    &#123;\n      value: &#39;hello hello&#39;,\n      x: 250,\n      y: 100,\n      width: 200,\n      height: 50,\n      fontSize: 20,\n      fill: 0x000000,\n      style: &#123; opacity: 1, scale: 1 &#125;,\n    &#125;,\n    &#123;\n      value: &#39;あ&#39;,\n      x: 250,\n      y: 200,\n      width: 100,\n      height: 100,\n      fontSize: 60,\n      fill: 0xffffff,\n      style: &#123; opacity: 1, scale: 1.5 &#125;,\n      textStyle: &#123; lineJoin: &#39;bevel&#39;, strokeThickness: 2, fill: 0xffffff &#125;,\n    &#125;,\n  ];\n&lt;/script&gt;\n\n&lt;Screen class=&quot;border mx-auto&quot; editMode=&#123;true&#125; width=&quot;600&quot; height=&quot;400&quot;&gt;\n  &lt;SketchWrapper&gt;\n    &#123;#each texts as text&#125;\n      &lt;TextElement\n        text=&#123;text.value&#125;\n        style=&#123;text.style&#125;\n        x=&#123;text.x&#125;\n        y=&#123;text.y&#125;\n        width=&#123;text.width&#125;\n        height=&#123;text.height&#125;\n        fontSize=&#123;text.fontSize&#125;\n        fill=&#123;text.fill&#125;\n        textStyle=&#123;text.textStyle&#125; /&gt;\n    &#123;/each&#125;\n  &lt;/SketchWrapper&gt;\n&lt;/Screen&gt;</code>',m=!0},p(t,e){const n={};16&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){m||(a(s.$$.fragment,t),m=!0)},o(t){c(s.$$.fragment,t),m=!1},d(t){t&&g(e),t&&g(n),t&&g(l),t&&g(i),f(s,t),t&&g(u),t&&g($)}}}function D(t){let e,n;return e=new s({props:{$$slots:{default:[A]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment)},m(t,l){r(e,t,l),n=!0},p(t,[n]){const l={};16&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function H(t){return[[{value:"hello hello",x:250,y:100,width:200,height:50,fontSize:20,fill:0,style:{opacity:1,scale:1}},{value:"あ",x:250,y:200,width:100,height:100,fontSize:60,fill:16777215,style:{opacity:1,scale:1.5},textStyle:{lineJoin:"bevel",strokeThickness:2,fill:16777215}}]]}export default class extends t{constructor(t){super(),e(this,t,H,D,n,{})}}
//# sourceMappingURL=TextElement.js.map
