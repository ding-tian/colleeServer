(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-453383e6"],{1276:function(t,e,s){"use strict";var i=s("d784"),a=s("44e7"),n=s("825a"),r=s("1d80"),o=s("4840"),c=s("8aa5"),l=s("50c4"),d=s("14c3"),u=s("9263"),f=s("d039"),p=[].push,h=Math.min,v=4294967295,m=!f((function(){return!RegExp(v,"y")}));i("split",2,(function(t,e,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(r(this)),n=void 0===s?v:s>>>0;if(0===n)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,n);var o,c,l,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=new RegExp(t.source,f+"g");while(o=u.call(m,i)){if(c=m.lastIndex,c>h&&(d.push(i.slice(h,o.index)),o.length>1&&o.index<i.length&&p.apply(d,o.slice(1)),l=o[0].length,h=c,d.length>=n))break;m.lastIndex===o.index&&m.lastIndex++}return h===i.length?!l&&m.test("")||d.push(""):d.push(i.slice(h)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var a=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a,s):i.call(String(a),e,s)},function(t,a){var r=s(i,t,this,a,i!==e);if(r.done)return r.value;var u=n(t),f=String(this),p=o(u,RegExp),g=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),_=new p(m?u:"^(?:"+u.source+")",b),C=void 0===a?v:a>>>0;if(0===C)return[];if(0===f.length)return null===d(_,f)?[f]:[];var x=0,y=0,I=[];while(y<f.length){_.lastIndex=m?y:0;var A,k=d(_,m?f:f.slice(y));if(null===k||(A=h(l(_.lastIndex+(m?0:y)),f.length))===x)y=c(f,y,g);else{if(I.push(f.slice(x,y)),I.length===C)return I;for(var $=1;$<=k.length-1;$++)if(I.push(k[$]),I.length===C)return I;y=x=A}}return I.push(f.slice(x)),I}]}),!m)},3174:function(t,e,s){},"514a":function(t,e,s){"use strict";s("ea41")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),a=s("5899"),n="["+a+"]",r=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},"76a1":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pay"},[s("van-nav-bar",{attrs:{title:"订单结算","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.back}}),s("div",{staticClass:"pay-box"},[s("div",{staticClass:"select-address"},[s("div",[s("span",{on:{click:t.showSelectAddressList}},[t._v("选择地址")]),s("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1),s("div",{staticClass:"user-box"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"user-name"},[t._v(t._s(t.currentAddress.name))]),s("div",{staticClass:"user-phone"},[t._v(t._s(t.currentAddress.tel))]),t.currentAddress.isDefault?s("div",{staticClass:"default-address"},[t._v(" 默认 ")]):t._e()]),s("div",{staticClass:"detail-address"},[t._v(t._s(t.currentAddress.address))])])]),s("div",{staticClass:"order-info"},[s("OrderList",{attrs:{"info-title-left":"订单信息",count:t.productInfo.count,total:t.productInfo.total}},t._l(t.products,(function(t,e){return s("OrderItem",{key:e,attrs:{item:t}})})),1)],1)]),s("div",{staticClass:"btn-box"},[s("van-button",{attrs:{type:"primary",block:"",round:"",color:"#422f29"},on:{click:t.payBox}},[t._v("立即结算")])],1),s("van-popup",{attrs:{"is-link":"",position:"bottom",closeable:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[s("div",{staticClass:"address-title"},[t._v("选择地址")]),s("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.newAddress,select:t.selectAddress},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)],1)},a=[],n=(s("99af"),s("d81d"),s("b0c0"),s("ac1f"),s("1276"),s("3174"),s("b059")),r=s("9d57"),o={name:"Pay",components:{OrderList:n["a"],OrderItem:r["a"]},data:function(){return{isOpen:!1,chosenAddressId:"",list:[],currentAddress:{},sids:[],products:[],productInfo:{count:0,total:0}}},created:function(){this.sids=this.$route.query.sids.split("-"),this.getShopbagBySids(),this.getAddressData()},methods:{back:function(){this.$router.go(-1)},newAddress:function(){this.$router.push({name:"NewAddress"})},selectAddress:function(t,e){this.isOpen=!1,this.currentAddress=t},showSelectAddressList:function(){this.isOpen=!0},getAddressData:function(){var t=this,e=localStorage.getItem("__tk");if(!e)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),700==e.data.code?t.$router.push({name:"Login"}):2e4==e.data.code&&(e.data.result.map((function(e){e.isDefault=Boolean(e.isDefault),e.id=e.aid,e.address="".concat(e.province).concat(e.city).concat(e.county).concat(e.addressDetail),e.isDefault&&(t.chosenAddressId=e.aid,t.currentAddress=e)})),t.list=e.data.result)})).catch((function(e){t.$toast.clear()}))},getShopbagBySids:function(){var t=this,e=localStorage.getItem("__tk");if(!e)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/commitShopcart",params:{appkey:this.appkey,tokenString:e,sids:JSON.stringify(this.sids)}}).then((function(e){if(t.$toast.clear(),700==e.data.code)t.$router.push({name:"Login"});else if(5e4==e.data.code){if(0==e.data.result.length)return t.$router.push({name:"Home"});e.data.result.map((function(e){t.productInfo.count+=e.count,t.productInfo.total+=e.count*e.price})),t.products=e.data.result}else t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))},pay:function(){var t=this,e=localStorage.getItem("__tk");if(!e)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/pay",data:{appkey:this.appkey,tokenString:e,sids:JSON.stringify(this.sids),phone:this.currentAddress.tel,address:this.currentAddress.address,receiver:this.currentAddress.name}}).then((function(e){t.$toast.clear(),700==e.data.code?t.$router.push({name:"Login"}):(t.$toast(e.data.msg),setTimeout((function(){t.$router.push({name:"Order"})})))})).catch((function(e){t.$toast.clear()}))},payBox:function(){var t=this;this.$dialog.confirm({title:"确认订单",message:"是否立即结算?",confirmButtonColor:"#0C34BA"}).then((function(){t.pay()})).catch((function(t){}))}}},c=o,l=s("2877"),d=Object(l["a"])(c,i,a,!1,null,null,null);e["default"]=d.exports},8549:function(t,e,s){},"9d57":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-item"},[s("div",{staticClass:"cell-item-box"},[s("div",{staticClass:"pro-info-box"},[s("div",{staticClass:"fl pro-img"},[s("img",{staticClass:"auto-img",attrs:{src:t.item.small_img||t.item.smallImg,alt:""}})]),s("div",{staticClass:"fl pro-info"},[s("div",{staticClass:"pro-info-text"},[s("div",{staticClass:"clearfix names"},[s("div",{staticClass:"fl pro-name"},[t._v(t._s(t.item.name))]),s("div",{staticClass:"fl pro-rule"},[t._v(t._s(t.item.rule))])]),s("div",{staticClass:"pro-enname"},[t._v(t._s(t.item.enname))])]),s("div",{staticClass:"pro-count-box"},[s("div",{staticClass:"fl pro-price"},[t._v("￥"+t._s(t.item.price))]),s("div",{staticClass:"fr step-box"},[t._v("x"+t._s(t.item.count))])])])])])])},a=[],n={name:"OrderItem",props:{item:{type:Object,default:function(){return{name:"名称",rule:"规格",enname:"英文名称",price:0,count:1}}}}},r=n,o=(s("b18a"),s("2877")),c=Object(o["a"])(r,i,a,!1,null,"41d016ed",null);e["a"]=c.exports},a9e3:function(t,e,s){"use strict";var i=s("83ab"),a=s("da84"),n=s("94ca"),r=s("6eeb"),o=s("5135"),c=s("c6b6"),l=s("7156"),d=s("c04e"),u=s("d039"),f=s("7c73"),p=s("241c").f,h=s("06cf").f,v=s("9bf2").f,m=s("58a8").trim,g="Number",b=a[g],_=b.prototype,C=c(f(_))==g,x=function(t){var e,s,i,a,n,r,o,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+l}for(n=l.slice(2),r=n.length,o=0;o<r;o++)if(c=n.charCodeAt(o),c<48||c>a)return NaN;return parseInt(n,i)}return+l};if(n(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof I&&(C?u((function(){_.valueOf.call(s)})):c(s)!=g)?l(new b(x(e)),s,I):x(e)},A=i?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;A.length>k;k++)o(b,y=A[k])&&!o(I,y)&&v(I,y,h(b,y));I.prototype=_,_.constructor=I,r(a,g,I)}},b059:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-list"},[s("div",{staticClass:"pro-box"},[s("div",{staticClass:"clearfix info-boxs"},[s("div",{staticClass:"info-title fl"},[t._v(t._s(t.infoTitleLeft))]),t.isRight?s("div",{staticClass:"fr re-info"},[t.isReceive?s("div",{staticClass:"clearfix"},[s("div",{staticClass:"fl"},[t._v("已完成")]),s("div",{staticClass:"fl delete",on:{click:t.remove}},[s("van-icon",{attrs:{size:"19",name:"delete"}})],1)]):s("div",{on:{click:t.confirmReceive}},[t._v("确认收货")])]):t._e()]),s("div",[s("div",{staticClass:"cell-list"},[t._t("default")],2),s("div",{staticClass:"bottom-into"},[t._m(0),""!=t.date?s("div",{staticClass:"date"},[t._v(t._s(t.date))]):t._e(),s("div",{staticClass:"clearfix"},[s("div",{staticClass:"fl"},[t._v("共计 "+t._s(t.count)+" 件")]),s("div",{staticClass:"fr total"},[t._v("合计 ￥"+t._s(t.total))])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle"},[s("div",{staticClass:"fl circle-box circle-left"}),s("div",{staticClass:"fr circle-box circle-right"})])}],n=(s("a9e3"),{name:"OrderList",props:{infoTitleLeft:{type:String,default:"左边标题"},isRight:{type:Boolean,default:!1},date:{type:String,default:"1970-01-01 00:00:00"},count:{type:Number,default:0},total:{type:[Number,String],default:0},isReceive:{type:Boolean,default:!1}},methods:{confirmReceive:function(){this.$emit("confirm-receive")},remove:function(){this.$emit("remove")}}}),r=n,o=(s("514a"),s("2877")),c=Object(o["a"])(r,i,a,!1,null,"bdbbb892",null);e["a"]=c.exports},b0c0:function(t,e,s){var i=s("83ab"),a=s("9bf2").f,n=Function.prototype,r=n.toString,o=/^\s*function ([^ (]*)/,c="name";i&&!(c in n)&&a(n,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},b18a:function(t,e,s){"use strict";s("8549")},d81d:function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").map,n=s("1dde"),r=s("ae40"),o=n("map"),c=r("map");i({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ea41:function(t,e,s){}}]);
//# sourceMappingURL=chunk-453383e6.951a7929.js.map