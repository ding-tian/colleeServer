(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ba3ab96"],{"5db0":function(t,a,n){},bb51:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("van-nav-bar",{scopedSlots:t._u([{key:"left",fn:function(){return[n("div",{staticClass:"home-nav"},[n("div",{staticClass:"t1"},[t._v("下午好")]),n("div",{staticClass:"t2"},[t._v("Barista")])])]},proxy:!0},{key:"right",fn:function(){return[n("div",{staticClass:"home-search"},[n("van-search",{attrs:{placeholder:"输入商品名称"}})],1)]},proxy:!0}])}),n("div",{staticClass:"home-content"},[n("div",{staticClass:"banner-box"},[n("van-swipe",{attrs:{autoplay:5e3,loop:""},on:{change:t.changeCurrentIndex},scopedSlots:t._u([{key:"indicator",fn:function(){return[n("div",{staticClass:"index-box"},t._l(t.bannerData,(function(a,s){return n("div",{key:s,class:{active:s==t.currentIndex}})})),0)]},proxy:!0}])},t._l(t.bannerData,(function(a,s){return n("van-swipe-item",{key:s},[n("img",{staticClass:"auto-img",attrs:{src:a.bannerImg,alt:""},on:{click:function(n){return t.goDetail(a.pid)}}})])})),1)],1),n("div",{staticClass:"product-box"},[n("div",[t._m(0),n("div",{staticClass:"products clearfix"},t._l(t.hotProduct,(function(a,s){return n("div",{key:s,staticClass:"pro-item fl",on:{click:function(n){return t.goDetail(a.pid)}}},[n("div",{staticClass:"img-box"},[n("img",{staticClass:"auto-img",attrs:{src:a.smallImg}}),n("div",{staticClass:"hot"},[t._v("hot")])]),n("div",{staticClass:"pro-info"},[n("div",{staticClass:"pro-name one-text"},[t._v(t._s(a.name))]),n("div",{staticClass:"pro-enname one-text"},[t._v(t._s(a.enname))]),n("div",{staticClass:"pro-price"},[t._v("￥"+t._s(a.price))])])])})),0)])])])],1)},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"clearfix pro-title-box"},[n("span",{staticClass:"pro-title"},[t._v("热卖推荐")])])}],i=(n("5db0"),{name:"Home",data:function(){return{currentIndex:0,bannerData:[],hotProduct:[]}},created:function(){this.getBannerData(),this.getHotProduct()},methods:{changeCurrentIndex:function(t){this.currentIndex=t},getBannerData:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/banner",params:{appkey:this.appkey}}).then((function(a){t.$toast.clear(),300==a.data.code&&(t.bannerData=a.data.result)})).catch((function(a){t.$toast.clear()}))},getHotProduct:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/typeProducts",params:{appkey:this.appkey,key:"isHot",value:1}}).then((function(a){t.$toast.clear(),500==a.data.code&&(t.hotProduct=a.data.result)})).catch((function(a){t.$toast.clear()}))},goDetail:function(t){this.$router.push({name:"Detail",params:{pid:t}})}}}),o=i,r=n("2877"),c=Object(r["a"])(o,s,e,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-9ba3ab96.644cfdc5.js.map