(window.webpackJsonp=window.webpackJsonp||[]).push([[54,41],{570:function(e,t,o){e.exports={}},572:function(e,t,o){"use strict";o(570)},573:function(e,t,o){"use strict";o.r(t);o(230);var n={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString:function(e){var t="";for(var o in e)e.hasOwnProperty(o)&&null!==e[o]&&(t+=o+"="+e[o]+"&");return t.substr(0,t.length-1)},getYoutubeUrl:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)},getVimeoUrl:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)},getPadding:function(e){var t=e.split(":"),o=Number(t[0]);return 100*Number(t[1])/o+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(e){var t=this;this.$nextTick((function(){void 0!==t.$refs.closeBtn&&t.$refs.closeBtn.focus()}))},deep:!0}}},l=(o(572),o(86)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return e.isOpen?t("div",[t("div",{class:e.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":e.aria.openMessage},on:{click:function(t){return e.$emit("update:isOpen",!1)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.$emit("update:isOpen",!1)}}},[t("div",{class:e.classNames.modalVideoBody},[t("button",{ref:"closeBtn",class:e.classNames.modalVideoCloseBtn,attrs:{"aria-label":e.aria.dismissBtnMessage},on:{click:function(t){return e.$emit("update:isOpen",!1)}}}),e._v(" "),t("div",{class:e.classNames.modalVideoInner},[t("div",{class:e.classNames.modalVideoIframeWrap,style:{"padding-bottom":e.paddingBottom}},[t("iframe",{attrs:{src:e.fullVideoUrl,frameBorder:"0",allowFullScreen:e.allowFullScreen,tabIndex:"-1"}})])])])])]):e._e()}),[],!1,null,"fb8a83f8",null);t.default=component.exports},681:function(e,t,o){"use strict";o.r(t);var n={props:["projectVideoData"],data:function(){return{videoIsOpen:!1}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},l=o(86),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"video-wrapper section-padding bg-img parallaxie valign",style:"\n          background-image: url(".concat(e.projectVideoData.projectHeaderImage,")"),attrs:{"data-overlay-dark":"4"}},[t("div",{staticClass:"full-width text-center"},[t("ModalVideo",{attrs:{channel:e.videoChannel,videoId:e.videoId,isOpen:e.videoIsOpen},on:{"update:isOpen":function(t){e.videoIsOpen=t},"update:is-open":function(t){e.videoIsOpen=t}}}),e._v(" "),t("a",{staticClass:"vid",on:{click:e.openVideo}},[e._m(0)])],1)])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"vid-butn"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-play"})])])}],!1,null,"27d4a85e",null);t.default=component.exports;installComponents(component,{ModalVideo:o(573).default})}}]);