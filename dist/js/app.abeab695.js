(function(e){function t(t){for(var n,o,u=t[0],l=t[1],s=t[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("i",{staticClass:"fa fa-star"}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"cerca"},domProps:{value:e.query},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)},input:function(t){t.target.composing||(e.query=t.target.value)}}}),r("h1",[e._v("film")]),e._l(e.movies,(function(t){return r("div",{key:t.id},[r("img",{attrs:{src:e.imgUrl+e.imgSize+t.poster_path,alt:""}}),r("ul",[r("li",[e._v(e._s(t.title))]),r("li",[e._v(e._s(t.original_title))]),r("li",[e._v(e._s(t.original_language))]),r("li",[e._v(e._s(t.vote_average))])]),r("div"),r("img",{attrs:{src:e.flags[t.original_language],alt:""}})])})),r("h1",[e._v("serie tv")]),e._l(e.series,(function(t){return r("div",{key:t.id},[r("img",{attrs:{src:e.imgUrl+e.imgSize+t.poster_path,alt:""}}),r("ul",[r("li",[e._v(e._s(t.name))]),r("li",[e._v(e._s(t.original_name))]),r("li",[e._v(e._s(t.original_language))]),r("li",[e._v(e._s(t.vote_average))])]),r("img",{attrs:{src:e.flags[t.original_language],alt:""}})])}))],2)},a=[],o=r("bc3a"),u=r.n(o),l={name:"App",components:{},data:function(){return{apiKey:"ef9dd0c6f45121e37042289e7f1f1189",apiUrl:"https://api.themoviedb.org/3",movies:[],series:[],query:"",flags:{en:r("f903"),it:r("cdb4"),de:r("a295")},imgUrl:"https://image.tmdb.org/t/p/",imgSize:"w342"}},methods:{searchQuery:function(e,t,r){var n=this;u.a.get(this.apiUrl+e,{params:{api_key:this.apiKey,query:t,language:"it"}}).then((function(e){n[r]=e.data.results}))},search:function(){this.searchQuery("/search/movie",this.query,"movies"),this.searchQuery("/search/tv",this.query,"series"),console.log("ciao")},getImg:function(){}},computed:{vote:function(){return Math.round(this.movies.vote_average/2)}}},s=l,c=(r("5c0b"),r("2877")),p=Object(c["a"])(s,i,a,!1,null,null,null),f=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.abeab695.js.map