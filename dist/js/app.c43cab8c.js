(function(e){function n(n){for(var c,r,o=n[0],i=n[1],h=n[2],f=0,d=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(d.length)d.shift()();return u.push.apply(u,h||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-02b81669":"6b4ce8b7","chunk-2a67b8c6":"e3fe236b","chunk-34290b19":"27e46401","chunk-349ba26e":"fdb8d64d","chunk-3c9398b0":"39364288","chunk-453383e6":"951a7929","chunk-5d32c477":"e4aca34c","chunk-5f947622":"d9979e5a","chunk-6bfe6605":"ab93e8a6","chunk-9ba3ab96":"644cfdc5","chunk-a71954f6":"52245c5c","chunk-551bbc70":"a5efe8cc","chunk-5f412d4e":"7b0fc1ba","chunk-b1621312":"1c6b4e1b","chunk-e2da0cf8":"b4f68d1f","chunk-e3c48d54":"97b0789a"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-02b81669":1,"chunk-2a67b8c6":1,"chunk-34290b19":1,"chunk-349ba26e":1,"chunk-3c9398b0":1,"chunk-453383e6":1,"chunk-5d32c477":1,"chunk-5f947622":1,"chunk-6bfe6605":1,"chunk-9ba3ab96":1,"chunk-a71954f6":1,"chunk-551bbc70":1,"chunk-5f412d4e":1,"chunk-b1621312":1,"chunk-e2da0cf8":1,"chunk-e3c48d54":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-02b81669":"af174dcb","chunk-2a67b8c6":"c2180bbf","chunk-34290b19":"4318b139","chunk-349ba26e":"22448d51","chunk-3c9398b0":"0d8ff85d","chunk-453383e6":"9ef70754","chunk-5d32c477":"a6ce4c52","chunk-5f947622":"820387d8","chunk-6bfe6605":"9184c735","chunk-9ba3ab96":"ca996443","chunk-a71954f6":"04ab30d5","chunk-551bbc70":"ff78d648","chunk-5f412d4e":"f760a6b3","chunk-b1621312":"0e564d5d","chunk-e2da0cf8":"741a7889","chunk-e3c48d54":"5c07df06"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var h=u[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===c||f===a))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],f=h.getAttribute("data-href");if(f===c||f===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var d=new Error;h=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}a[e]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:f})}),12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=n,h=h.slice();for(var d=0;d<h.length;d++)n(h[d]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("4cae")},2395:function(e,n,t){},"4cae":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("8bbf"),r=t.n(c),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],o=(t("7c55"),t("2877")),i={},h=Object(o["a"])(i,a,u,!1,null,null,null),f=h.exports,d=(t("d3b7"),t("6389")),l=t.n(d);r.a.use(l.a);var b=function(){return Promise.all([t.e("chunk-a71954f6"),t.e("chunk-5f412d4e")]).then(t.bind(null,"a55b"))},p=function(){return t.e("chunk-02b81669").then(t.bind(null,"cd56"))},s=function(){return t.e("chunk-9ba3ab96").then(t.bind(null,"bb51"))},k=function(){return t.e("chunk-2a67b8c6").then(t.bind(null,"9a0b"))},m=function(){return t.e("chunk-34290b19").then(t.bind(null,"29dd"))},g=function(){return t.e("chunk-6bfe6605").then(t.bind(null,"4c41"))},v=function(){return t.e("chunk-e2da0cf8").then(t.bind(null,"c84b"))},y=function(){return t.e("chunk-453383e6").then(t.bind(null,"76a1"))},w=function(){return t.e("chunk-349ba26e").then(t.bind(null,"5f65"))},x=function(){return t.e("chunk-e3c48d54").then(t.bind(null,"a821"))},S=function(){return t.e("chunk-3c9398b0").then(t.bind(null,"cf2a"))},j=function(){return t.e("chunk-b1621312").then(t.bind(null,"77be"))},O=function(){return t.e("chunk-5f947622").then(t.bind(null,"7c2a"))},P=function(){return Promise.all([t.e("chunk-a71954f6"),t.e("chunk-551bbc70")]).then(t.bind(null,"305b"))},E=function(){return t.e("chunk-5d32c477").then(t.bind(null,"2d3b"))},A=[{path:"/login",name:"Login",component:b},{path:"/main",name:"Main",component:p,children:[{path:"home",name:"Home",component:s},{path:"menu",name:"Menu",component:k},{path:"shopbag",name:"Shopbag",component:m},{path:"my",name:"My",component:g}]},{path:"/detail/:pid",name:"Detail",component:v},{path:"/pay",name:"Pay",component:y},{path:"/newAddress",name:"NewAddress",component:w},{path:"/address",name:"Address",component:x},{path:"/order",name:"Order",component:S},{path:"/account",name:"Account",component:j},{path:"/like",name:"Like",component:O},{path:"/secure",name:"Secure",component:P},{path:"/search",name:"Search",component:E},{path:"*",redirect:{name:"Home"}}],_=new l.a({routes:A}),M=_;t("499a"),t("4de4"),t("fb6a"),t("b680"),t("4d63"),t("ac1f"),t("25f0"),t("5319");r.a.filter("decimal",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toFixed(n)})),r.a.filter("formatDate",(function(e,n){var t=new Date(e),c=t.getFullYear().toString();if(/(y+)/.test(n)){var r=RegExp.$1;n=n.replace(r,c.slice(c.length-r.length))}var a={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var u in a){var o=new RegExp("(".concat(u,"+)"));if(o.test(n)){var i=RegExp.$1;n=n.replace(i,a[u]>=10?a[u]:2==i.length?"0"+a[u]:a[u])}}return n}));t("99af");var C=t("cebe"),L=t.n(C),N=t("2106"),T=t.n(N);L.a.defaults.baseURL="http://www.kangliuyong.com:10002",L.a.interceptors.request.use((function(e){if("post"==e.method){var n="";for(var t in e.data)n+="".concat(t,"=").concat(e.data[t],"&");e.data=n.slice(0,-1)}return e})),r.a.use(T.a,L.a),r.a.prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",r.a.config.productionTip=!1,new r.a({router:M,render:function(e){return e(f)}}).$mount("#app")},6389:function(e,n){e.exports=VueRouter},"7c55":function(e,n,t){"use strict";t("2395")},"8bbf":function(e,n){e.exports=Vue},cebe:function(e,n){e.exports=axios}});
//# sourceMappingURL=app.c43cab8c.js.map