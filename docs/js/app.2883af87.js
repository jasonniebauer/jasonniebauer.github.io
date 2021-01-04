(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,b=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a5ef566d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ba7ef303"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){l=b[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var b=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",b.name="ChunkLoadError",b.type=r,b.request=o,n[1](b)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["d"])("Home"),c=Object(r["d"])("About"),a=Object(r["e"])("div",{class:"spacer"},null,-1),u=Object(r["e"])("svg",{viewBox:"0 0 32 32",width:"24",height:"24",fill:"currentcolor",class:"css-13o7eu2"},[Object(r["e"])("circle",{cx:"16",cy:"16",r:"14",fill:"none",stroke:"currentcolor","stroke-width":"4"}),Object(r["e"])("path",{d:"\r\n            M 16 0\r\n            A 16 16 0 0 0 16 32\r\n            z\r\n          "})],-1),i=Object(r["e"])("div",{class:"social"},[Object(r["e"])("a",{href:"https://github.com/jasonniebauer",title:"GitHub",class:"github-icon"},[Object(r["e"])("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 496 512",size:"24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[Object(r["e"])("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})])]),Object(r["e"])("a",{href:"https://www.linkedin.com/in/jasonniebauer/",title:"LinkedIn",class:"linkedin-icon"},[Object(r["e"])("svg",{style:{width:"30px",height:"30px"},viewBox:"0 0 24 24"},[Object(r["e"])("path",{fill:"currentColor",d:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"})])])],-1),l={class:"footer-nav"},s=Object(r["d"])("Home"),b=Object(r["d"])("About"),d=Object(r["e"])("div",{class:"spacer"},null,-1),h={class:"copyright"};function f(e,t,n,f,p,m){var j=Object(r["t"])("router-link"),O=Object(r["t"])("router-view");return Object(r["n"])(),Object(r["c"])("div",{class:["theme-container",[{"theme-light":"light"==p.theme},{"theme-dark":"dark"==p.theme}]]},[Object(r["e"])("header",null,[Object(r["e"])(j,{to:"/"},{default:Object(r["y"])((function(){return[o]})),_:1}),Object(r["e"])(j,{to:"/about"},{default:Object(r["y"])((function(){return[c]})),_:1}),a,Object(r["e"])("button",{title:"Cycle Color Mode",class:"theme-button",onClick:t[1]||(t[1]=function(){return m.cycleColorMode.apply(m,arguments)})},[u])]),Object(r["e"])(O),Object(r["e"])("footer",null,[i,Object(r["e"])("div",l,[Object(r["e"])(j,{to:"/"},{default:Object(r["y"])((function(){return[s]})),_:1}),Object(r["e"])(j,{to:"/about"},{default:Object(r["y"])((function(){return[b]})),_:1}),d,Object(r["e"])("div",h,"© "+Object(r["v"])(m.copyrightYear)+" Jason Niebauer",1)])])],2)}var p={data:function(){return{theme:"light"}},beforeMount:function(){var e=localStorage.getItem("theme-ui-color-mode");this.theme=e||"light"},methods:{cycleColorMode:function(){this.theme="light"===this.theme?"dark":"light",localStorage.setItem("theme-ui-color-mode",this.theme)}},computed:{copyrightYear:function(){var e=new Date;return e.getFullYear()}}};n("64be");p.render=f;var m=p,j=(n("d3b7"),n("6c02")),O=Object(r["z"])("data-v-43b8091c");Object(r["q"])("data-v-43b8091c");var v=Object(r["e"])("div",{class:"intro"},[Object(r["e"])("h1",null,"Jason Niebauer"),Object(r["e"])("p",null,[Object(r["d"])("Full-Stack Developer at "),Object(r["e"])("a",{href:"https://exencialwealth.com"},"Exencial Wealth"),Object(r["d"])(". Based in Frisco, TX")]),Object(r["e"])("ul",null,[Object(r["e"])("li",null,[Object(r["e"])("a",{href:"https://github.com/jasonniebauer"},"GitHub")])])],-1);Object(r["o"])();var g=O((function(e,t,n,o,c,a){return Object(r["n"])(),Object(r["c"])("main",null,[v])})),y={name:"Home",components:{},data:function(){return{}}};n("5a71");y.render=g,y.__scopeId="data-v-43b8091c";var w=y,k=[{path:"/",name:"Home",component:w},{path:"/blog",name:"Blog",component:function(){return n.e("about").then(n.bind(null,"fd3f"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=Object(j["a"])({history:Object(j["b"])("/"),routes:k}),A=C;Object(r["b"])(m).use(A).mount("#app")},"5a71":function(e,t,n){"use strict";n("a792")},"64be":function(e,t,n){"use strict";n("c894")},a792:function(e,t,n){},c894:function(e,t,n){}});
//# sourceMappingURL=app.2883af87.js.map