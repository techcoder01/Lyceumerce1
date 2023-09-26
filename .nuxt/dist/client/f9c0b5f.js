(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{291:function(t,n,e){t.exports=function(t){function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var i={};return n.m=t,n.c=i,n.i=function(t){return t},n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/dist/",n(n.s=2)}([function(t,n,i){var e=i(4)(i(1),i(5),null,null);t.exports=e.exports},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(3);n.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,n,i,e){return i*(1-Math.pow(2,-10*t/e))*1024/1023+n}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,e.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,e.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,e.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,e.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var n=t-this.startTime;this.remaining=this.localDuration-n,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(n,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(n,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(n/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(n/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),n<this.localDuration?this.rAF=(0,e.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var n=(t+="").split("."),i=n[0],e=n.length>1?this.decimal+n[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+e+this.suffix}},destroyed:function(){(0,e.cancelAnimationFrame)(this.rAF)}}},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));n.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=0,a="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)n.requestAnimationFrame=r=function(){},n.cancelAnimationFrame=o=function(){};else{n.requestAnimationFrame=r=window.requestAnimationFrame,n.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!o);u++)s=a[u],n.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],n.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(n.requestAnimationFrame=r=function(t){var n=(new Date).getTime(),i=Math.max(0,16-(n-e)),a=window.setTimeout((function(){t(n+i)}),i);return e=n+i,a},n.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}n.requestAnimationFrame=r,n.cancelAnimationFrame=o},function(t,n){t.exports=function(t,n,i,e){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),i&&(s._scopeId=i),e){var u=Object.create(s.computed||null);Object.keys(e).forEach((function(t){var n=e[t];u[t]=function(){return n}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},349:function(t,n,e){"use strict";e.r(n);var r=e(291),o={components:{countTo:e.n(r).a},data:function(){return{counted:!1}},methods:{startCounter:function(){this.$refs.countUpRef1.start(),this.$refs.countUpRef2.start(),this.$refs.countUpRef3.start(),this.$refs.countUpRef4.start(),this.counted=!0}},mounted:function(){var t=this,n=this.$refs.funFacts2;window.addEventListener("scroll",(function(){n&&!t.counted&&window.pageYOffset>n.offsetTop-200&&t.startCounter()}))}},l=e(81),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("section",{ref:"funFacts2",staticClass:"block-sec section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"number-sec"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-6"},[n("div",{staticClass:"item md-mb50"},[n("span",{staticClass:"icon pe-7s-smile"}),t._v(" "),n("h3",{staticClass:"custom-font"},[n("countTo",{ref:"countUpRef1",attrs:{startVal:0,endVal:2400,duration:3e3,autoplay:!1}},[n("span",{staticClass:"count"},[t._v(" ")])])],1),t._v(" "),n("p",{staticClass:"wow words chars splitting txt",attrs:{"data-splitting":""}},[t._v("\n              Happy Clients\n            ")])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6"},[n("div",{staticClass:"item md-mb50"},[n("span",{staticClass:"icon pe-7s-portfolio"}),t._v(" "),n("h3",{staticClass:"custom-font"},[n("countTo",{ref:"countUpRef2",attrs:{startVal:0,endVal:133,duration:3e3,autoplay:!1}},[n("span",{staticClass:"count"},[t._v(" ")])])],1),t._v(" "),n("p",{staticClass:"wow txt words chars splitting",attrs:{"data-splitting":""}},[t._v("\n              Compleate Projects\n            ")])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6"},[n("div",{staticClass:"item sm-mb50"},[n("span",{staticClass:"icon pe-7s-cloud-download"}),t._v(" "),n("h3",{staticClass:"custom-font"},[n("countTo",{ref:"countUpRef3",attrs:{startVal:0,endVal:254,duration:3e3,autoplay:!1}},[n("span",{staticClass:"count"},[t._v(" ")])]),t._v("\n              k\n            ")],1),t._v(" "),n("p",{staticClass:"wow txt words chars splitting",attrs:{"data-splitting":""}},[t._v("\n              Files Downloaded\n            ")])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6"},[n("div",{staticClass:"item"},[n("span",{staticClass:"icon pe-7s-medal"}),t._v(" "),n("h3",{staticClass:"custom-font"},[n("countTo",{ref:"countUpRef4",attrs:{startVal:0,endVal:46,duration:3e3,autoplay:!1}},[n("span",{staticClass:"count"},[t._v(" ")])])],1),t._v(" "),n("p",{staticClass:"wow txt words chars splitting",attrs:{"data-splitting":""}},[t._v("\n              Award Win\n            ")])])])])])])])}),[],!1,null,"590fa5ca",null);n.default=component.exports}}]);