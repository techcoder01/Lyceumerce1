(window.webpackJsonp=window.webpackJsonp||[]).push([[86,3,18,20,25,39,41,43,48,57,65,66,71],{270:function(t,e,n){"use strict";n.r(e);var l={props:["hideBGCOLOR"]},o=n(81),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[t._m(1),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"img"},[e("NuxtLink",{attrs:{to:"#"}},[e("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sm-post"},[e("NuxtLink",{attrs:{to:"#"}},[e("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),e("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),e("li",[e("div",{staticClass:"img"},[e("NuxtLink",{attrs:{to:"#"}},[e("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sm-post"},[e("NuxtLink",{attrs:{to:"#"}},[e("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),e("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item"},[t._m(3),t._v(" "),e("div",{staticClass:"social"},[e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-youtube"})])],1),t._v(" "),e("div",{staticClass:"copy-right"},[e("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("ThemesCamp")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[e("div",{staticClass:"title"},[e("h5",[t._v("Contact Us")])]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Officeal Address")]),t._v(" "),e("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Email Us")]),t._v(" "),e("p",[t._v("support@gmail.com")])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-call"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Call Us")]),t._v(" "),e("p",[t._v("+87986451666")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Recent News")])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"subscribe"},[t("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),this._v(" "),t("span",{staticClass:"subs pe-7s-paper-plane"})])])},function(){var t=this._self._c;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])}],!1,null,"2e8392e9",null);e.default=component.exports;installComponents(component,{Footer:n(270).default})},271:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},272:function(t,e,n){"use strict";n.r(e);n(43),n(44),n(18);var l=n(271),o={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(l.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,e("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Home\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home1-dark"}},[t._v("\n              Main Home\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home2-dark"}},[t._v("\n              Creative Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home5-dark"}},[t._v("\n              Digital Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home4-dark"}},[t._v("\n              Business One Page\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home3-dark"}},[t._v("\n              Corporate Business\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home6-dark"}},[t._v("\n              Modern Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home7-dark"}},[t._v("\n              Freelancer\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home8-dark"}},[t._v("\n              Architecture\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Works\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase/showcase-dark"}},[t._v("\n              Showcase Parallax\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase3/showcase3-dark"}},[t._v("\n              Showcase Carousel\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase2/showcase2-dark"}},[t._v("\n              Showcase Circle\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works/works-dark"}},[t._v("\n              Portfolio Masonry\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works2/works2-dark"}},[t._v("\n              Portfolio Filtering\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works3/works3-dark"}},[t._v("\n              Portfolio Gallery\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Blog\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog/blog-dark"}},[t._v("\n              Blog Standerd\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-list/blog-list-dark"}},[t._v("\n              Blog List\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-grid/blog-grid-dark"}},[t._v("\n              Blog Grid\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n              Blog Details\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contact\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"99068f48",null);e.default=component.exports},274:function(t,e,n){t.exports={}},276:function(t,e,n){"use strict";n(274)},277:function(t,e,n){"use strict";n.r(e);n(197);var l={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString:function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&null!==t[n]&&(e+=n+"="+t[n]+"&");return e.substr(0,e.length-1)},getYoutubeUrl:function(t,e){return"//www.youtube.com/embed/"+e+"?"+this.getQueryString(t)},getVimeoUrl:function(t,e){return"//player.vimeo.com/video/"+e+"?"+this.getQueryString(t)},getPadding:function(t){var e=t.split(":"),n=Number(e[0]);return 100*Number(e[1])/n+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(t){var e=this;this.$nextTick((function(){void 0!==e.$refs.closeBtn&&e.$refs.closeBtn.focus()}))},deep:!0}}},o=(n(276),n(81)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return t.isOpen?e("div",[e("div",{class:t.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":t.aria.openMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("update:isOpen",!1)}}},[e("div",{class:t.classNames.modalVideoBody},[e("button",{ref:"closeBtn",class:t.classNames.modalVideoCloseBtn,attrs:{"aria-label":t.aria.dismissBtnMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)}}}),t._v(" "),e("div",{class:t.classNames.modalVideoInner},[e("div",{class:t.classNames.modalVideoIframeWrap,style:{"padding-bottom":t.paddingBottom}},[e("iframe",{attrs:{src:t.fullVideoUrl,frameBorder:"0",allowFullScreen:t.allowFullScreen,tabIndex:"-1"}})])])])])]):t._e()}),[],!1,null,"fb8a83f8",null);e.default=component.exports},278:function(t){t.exports=JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":3,"icon":"pe-7s-display1","title":"Social Media Marketing","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":4,"icon":"pe-7s-diskette","title":"Document Legal Policy","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]')},279:function(t,e,n){"use strict";var l=n(4),o=n(23),r=n(13),c=/"/g,d=l("".replace);t.exports=function(t,e,n,l){var v=r(o(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+d(r(l),c,"&quot;")+'"'),m+">"+v+"</"+e+">"}},280:function(t,e,n){"use strict";var l=n(3);t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},282:function(t,e,n){"use strict";n(18),n(35),n(82),n(197);var l=0,o=0;function r(t,time){setInterval(function(t){l=Number(window.getComputedStyle(t).getPropertyValue("opacity")),l<1?(l+=1,t.style.opacity=l):clearInterval(o)}(t),time)}function c(t,time){setInterval(function(t){l=Number(window.getComputedStyle(t).getPropertyValue("opacity")),l>0?(l=0,t.style.opacity=l):clearInterval(o)}(t),time)}e.a=function(){var t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);var e=document.createElement("div");e.classList.add("div-tooltip-sub"),document.body.appendChild(e),document.querySelectorAll("[data-tooltip-tit]").forEach((function(e){t=document.querySelector(".div-tooltip-tit"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-tit")})),e.addEventListener("mousemove",(function(e){r(t,800),t.style.top=e.pageY+10+"px",t.style.left=e.pageX+20+"px",t.style.padding="0px 10px"})),e.addEventListener("mouseleave",(function(){c(t,800),t.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(t){e=document.querySelector(".div-tooltip-sub"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-sub")})),t.addEventListener("mousemove",(function(t){r(e,800),e.style.top=t.pageY-15+"px",e.style.left=t.pageX+30+"px",e.style.padding="5px 10px"})),t.addEventListener("mouseleave",(function(){c(e,800),e.style.padding=0}))}))}},283:function(t,e,n){"use strict";var l=n(2),o=n(279);l({target:"String",proto:!0,forced:n(280)("sub")},{sub:function(){return o(this,"sub","","")}})},284:function(t,e,n){"use strict";n.r(e);var l={props:["img"]},o=n(81),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"call-action section-padding sub-bg bg-img",style:"background-image: url(".concat(t.img?t.img:"/img/patrn.svg",")")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-4 col-lg-3 valign"},[e("NuxtLink",{staticClass:"butn bord curve wow fadeInUp",attrs:{to:"/contact/contact-dark","data-wow-delay":".5s"}},[e("span",[t._v("Get In Touch")])])],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-8 col-lg-9"},[e("div",{staticClass:"content sm-mb30"},[e("h6",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("Let’s Talk")]),t._v(" "),e("h2",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("\n            about your "),e("br"),t._v(" "),e("b",{staticClass:"back-color"},[t._v("next project")]),t._v(".\n          ")])])])}],!1,null,"84a898ca",null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);n(59);var l=n(278),o={props:["lines","oStyle"],data:function(){return{featuresData:l}}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:"services bords section-padding ".concat("4item"===t.oStyle?"lficon":t.lines?"":"pt-0")},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),"4item"===t.oStyle?e("div",{staticClass:"row"},t._l(t.featuresData,(function(n){return e("div",{key:n.id,staticClass:"col-lg-6 wow fadeInLeft",attrs:{"data-wow-delay":"".concat(1==n.id?".5":2===n.id?".7":3===n.id?".9":"1.1","s")}},[e("div",{staticClass:"item-box"},[e("div",[e("span",{class:"icon ".concat(n.icon)})]),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.content))])])])])})),0):e("div",{staticClass:"row"},t._l(t.featuresData.slice(0,3),(function(n){return e("div",{key:n.id,staticClass:"col-lg-4 wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[e("div",{staticClass:"item-box md-mb50"},[e("span",{class:"icon ".concat(n.icon)}),t._v(" "),e("h6",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.content))])])])})),0)]),t._v(" "),t.lines?e("div",{staticClass:"line top left"}):t._e(),t._v(" "),t.lines?e("div",{staticClass:"line bottom right"}):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"sec-head text-center"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Best Features")]),t._v(" "),e("h3",{staticClass:"wow color-font"},[t._v("\n            We are a new digital product development agency\n          ")])])])])}],!1,null,"ee8eff66",null);e.default=component.exports},288:function(t){t.exports=JSON.parse('{"teams":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"skills":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}')},289:function(t,e,n){"use strict";e.a=function(){var t=document.getElementsByClassName("thumparallax-down");t&&new simpleParallax(t,{orientation:"down",delay:1,scale:1.1})}},290:function(t){t.exports=JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/01.png","darkImage":"/img/clients/brands/dark/01.png","url":"www.Vie.com"},{"id":2,"lightImage":"/img/clients/brands/light/02.png","darkImage":"/img/clients/brands/dark/02.png","url":"www.Vie.com"},{"id":3,"lightImage":"/img/clients/brands/light/03.png","darkImage":"/img/clients/brands/dark/03.png","url":"www.Vie.com"},{"id":4,"lightImage":"/img/clients/brands/light/04.png","darkImage":"/img/clients/brands/dark/04.png","url":"www.Vie.com"},{"id":5,"lightImage":"/img/clients/brands/light/05.png","darkImage":"/img/clients/brands/dark/05.png","url":"www.Vie.com"},{"id":6,"lightImage":"/img/clients/brands/light/06.png","darkImage":"/img/clients/brands/dark/06.png","url":"www.Vie.com"},{"id":7,"lightImage":"/img/clients/brands/light/07.png","darkImage":"/img/clients/brands/dark/07.png","url":"www.Vie.com"},{"id":8,"lightImage":"/img/clients/brands/light/08.png","darkImage":"/img/clients/brands/dark/08.png","url":"www.Vie.com"}]')},292:function(t,e,n){"use strict";n.r(e);n(59),n(283),n(18),n(35);var l=function(){var t=document.querySelector(".team-crv");t&&window.addEventListener("scroll",(function(){document.querySelectorAll(".skill-progress .progres").forEach((function(e){var n=e.getAttribute("data-value");window.pageYOffset>t.offsetTop-200&&(e.style.width=n)}))}))},o=n(282),r=n(288),c={data:function(){return{teamData:r}},mounted:function(){Object(o.a)(),l()}},d=n(81),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"team-crv section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 valign"},[e("div",{staticClass:"content wow fadeInUp md-mb30",attrs:{"data-wow-delay":".5s"}},[t._m(0),t._v(" "),e("h3",{staticClass:"co-tit mb-15"},[t._v("We help to create visual strategies.")]),t._v(" "),e("p",[t._v("\n            We are Vie. We create award-winning websites, remarkable brands\n            and cutting-edge apps.Nullam imperdie.\n          ")]),t._v(" "),e("div",{staticClass:"skills-box mt-40"},t._l(t.teamData.skills,(function(n){return e("div",{key:n.id,staticClass:"skill-item"},[e("h6",{staticClass:"custom-font"},[t._v(t._s(n.text))]),t._v(" "),e("div",{staticClass:"skill-progress"},[e("div",{staticClass:"progres",attrs:{"data-value":n.value}})])])})),0)])]),t._v(" "),e("div",{staticClass:"col-lg-6 offset-lg-1"},[e("div",{staticClass:"img-box"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 toright"},[e("div",{staticClass:"full-width"},t._l(t.teamData.teams.slice(0,2),(function(n,l){return e("div",{key:n.id},[e("div",{class:"img sizxl ".concat(l+1!=t.teamData.teams.slice(0,2).length?"mb-30":null),attrs:{"data-tooltip-tit":n.title,"data-tooltip-sub":n.sub}},[e("img",{staticClass:"imago wow",attrs:{src:n.image,alt:""}})])])})),0)]),t._v(" "),e("div",{staticClass:"col-sm-6 toleft valign"},[e("div",{staticClass:"full-width text-left"},t._l(t.teamData.teams.slice(2,4),(function(n,l){return e("div",{key:n.id},[e("div",{class:"img sizxl ".concat(l+1!=t.teamData.teams.slice(2,4).length?"mb-30":null),attrs:{"data-tooltip-tit":n.title,"data-tooltip-sub":n.sub}},[e("img",{staticClass:"imago wow",attrs:{src:n.image,alt:"team image"}})])])})),0)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sub-title"},[e("h6",[t._v("Our Staff")]),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span")])}],!1,null,"742723ce",null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{videoIsOpen:!1,settings:{dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1}}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},o=n(81),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"block-sec"},[e("div",{staticClass:"background bg-img pt-100 pb-0 parallaxie",staticStyle:{"background-image":"url(/img/bg-vid.jpg)"},attrs:{"data-overlay-dark":"5"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"vid-area"},[e("span",{staticClass:"text"},[t._v("Watch Video")]),t._v(" "),e("ModalVideo",{attrs:{channel:t.videoChannel,videoId:t.videoId,isOpen:t.videoIsOpen},on:{"update:isOpen":function(e){t.videoIsOpen=e},"update:is-open":function(e){t.videoIsOpen=e}}}),t._v(" "),e("div",{staticClass:"vid-icon cursor-pointer",on:{click:t.openVideo}},[t._m(0)])],1)]),t._v(" "),e("div",{staticClass:"col-lg-5 offset-lg-1"},[e("div",{staticClass:"testim-box"},[t._m(1),t._v(" "),e("VueSlickCarousel",t._b({staticClass:"slic-item wow fadeInUp",attrs:{"data-wow-delay":".5s"}},"VueSlickCarousel",t.settings,!1),[e("div",{staticClass:"item"},[e("p",[t._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"img"},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})])]),t._v(" "),e("div",{staticClass:"cont"},[e("div",{staticClass:"author"},[e("h6",{staticClass:"author-name"},[t._v("Alex Regelman")]),t._v(" "),e("span",{staticClass:"author-details"},[t._v("\n                        Co-founder, Colabrio\n                      ")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("p",[t._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"img"},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:"/img/clients/2.jpg",alt:""}})])]),t._v(" "),e("div",{staticClass:"cont"},[e("div",{staticClass:"author"},[e("h6",{staticClass:"author-name"},[t._v("Alex Regelman")]),t._v(" "),e("span",{staticClass:"author-details"},[t._v("\n                        Co-founder, Colabrio\n                      ")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("p",[t._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"img"},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:"/img/clients/3.jpg",alt:""}})])]),t._v(" "),e("div",{staticClass:"cont"},[e("div",{staticClass:"author"},[e("h6",{staticClass:"author-name"},[t._v("Alex Regelman")]),t._v(" "),e("span",{staticClass:"author-details"},[t._v("\n                        Co-founder, Colabrio\n                      ")])])])])])])],1)])])])])])}),[function(){var t=this._self._c;return t("a",{staticClass:"vid"},[t("div",{staticClass:"vid-butn"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-play"})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"head-box"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Our Clients")]),t._v(" "),e("h4",{staticClass:"wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[t._v("\n                What Client's Say?\n              ")])])}],!1,null,"cf97af86",null);e.default=component.exports;installComponents(component,{ModalVideo:n(277).default})},308:function(t,e,n){"use strict";n.r(e);var l={props:["from","theme"]},o=n(81),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{class:"skills-circle pt-50 pb-50 ".concat(t.from&&"aboutPage"===t.from?"sub-bg":"")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("div",{},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"item wow fadeInLeft",attrs:{"data-wow-delay":".6"}},[e("div",{staticClass:"skill"},[e("client-only",[e("VueEllipseProgress",{attrs:{progress:90,legend:!0,legendValue:90,legendFormatter:function(t){return t.currentValue+"%"},color:"rgb(18, 194, 233)",emptyColor:"dark"==t.theme?"#0f1013":"#e5e5e5",thickness:2,emptyThickness:"2",size:110}})],1)],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"item wow fadeInLeft",attrs:{"data-wow-delay":".3"}},[e("div",{staticClass:"skill"},[e("client-only",[e("VueEllipseProgress",{attrs:{progress:75,legend:!0,legendValue:75,legendFormatter:function(t){return t.currentValue+"%"},color:"rgb(18, 194, 233)",emptyColor:"dark"==t.theme?"#0f1013":"#e5e5e5",thickness:2,emptyThickness:"2",size:110}})],1)],1),t._v(" "),t._m(1)])])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("span",[t._v("Project")]),t._v(" "),e("h6",[t._v("Consulting")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("span",[t._v("App")]),t._v(" "),e("h6",[t._v("Development")])])}],!1,null,"98de57a2",null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);n(59);var l=n(290),o={props:["theme"],data:function(){return{clientsData:l}}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"clients section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-8"},[e("div",[e("div",{staticClass:"row bord"},t._l(t.clientsData.slice(0,t.clientsData.length/2),(function(n){return e("div",{key:n.id,staticClass:"col-md-3 col-6 brands"},[e("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":"".concat(1==n.id?".3":2==n.id?".6":3==n.id?".8":4==n.id?".3":"","s")}},[e("div",{staticClass:"img"},["light"===t.theme?e("img",{attrs:{src:n.lightImage,alt:""}}):e("img",{attrs:{src:n.darkImage,alt:""}}),t._v(" "),e("NuxtLink",{staticClass:"link words chars splitting",attrs:{to:"#","data-splitting":""}},[t._v("\n                    "+t._s(n.url)+"\n                  ")])],1)])])})),0),t._v(" "),e("div",{staticClass:"row"},t._l(t.clientsData.slice(4,t.clientsData.length),(function(n){return e("div",{key:n.id,class:"".concat(5==n.id||6==n.id?"col-md-3 col-6 brands sm-mb30":7==n.id||8==n.id?"col-md-3 col-6 brands":"")},[e("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":"".concat(1==n.id?".4":2==n.id?".7":3==n.id?".5":4==n.id?".3":"","s")}},[e("div",{staticClass:"img"},["light"===t.theme?e("img",{attrs:{src:n.lightImage,alt:"client image"}}):e("img",{attrs:{src:n.darkImage,alt:"client image"}}),t._v(" "),e("NuxtLink",{staticClass:"link words chars splitting",attrs:{to:"#","data-splitting":""}},[t._v("\n                    "+t._s(n.url)+"\n                  ")])],1)])])})),0)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 valign md-mb50"},[e("div",{staticClass:"sec-head mb-0"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Best Features")]),t._v(" "),e("h3",{staticClass:"wow mb-20 color-font"},[t._v("Our Clients")]),t._v(" "),e("p",[t._v("\n            Our area of practice is quite wide: design, graphics, branding,\n            development.\n          ")])])])}],!1,null,"e960bef4",null);e.default=component.exports},316:function(t){t.exports=JSON.parse('{"id":1,"title":"Who We Are ?","paragraph1":"We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eut.","paragraph2":"lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed."}')},332:function(t,e,n){"use strict";n.r(e);var l={props:["imageLink"]},o=n(81),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"pages-header circle-bg valign"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont mt-100 mb-50 text-center"},[e("h1",{staticClass:"color-font fw-700"},[t._t("title")],2)])]),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.imageLink,alt:""}})])])])]),t._v(" "),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"half sub-bg"},[t("div",{staticClass:"circle-color"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"161cd85f",null);e.default=component.exports},333:function(t,e,n){"use strict";n.r(e);var l=n(316),o={data:function(){return{AboutInfo1Data:l}}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"intro-section section-padding pb-0"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3 col-md-4"},[e("div",{staticClass:"htit sm-mb30"},[e("h4",[t._v(t._s(t.AboutInfo1Data.title))])])]),t._v(" "),e("div",{staticClass:"col-lg-8 offset-lg-1 col-md-8"},[e("div",{staticClass:"text"},[e("p",{staticClass:"wow txt mb-10 words chars splitting",attrs:{"data-splitting":""}},[t._v("\n            "+t._s(t.AboutInfo1Data.paragraph1)+"\n          ")]),t._v(" "),e("p",{staticClass:"wow txt words chars splitting",attrs:{"data-splitting":""}},[t._v("\n            "+t._s(t.AboutInfo1Data.paragraph2)+"\n          ")])])])])])])}),[],!1,null,"43c4dd83",null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var l=n(289),o={mounted:function(){Object(l.a)()}},r=n(81),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"min-area sub-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"img"},[e("img",{staticClass:"thumparallax-down",attrs:{src:"/img/min-area.jpg",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-lg-6 valign"},[e("div",{staticClass:"content pt-0"},[e("h4",{staticClass:"wow color-font"},[t._v("About us.")]),t._v(" "),e("p",{staticClass:"wow txt",attrs:{"data-splitting":""}},[t._v("\n            Our creative Ad agency is ranked among the finest in the US. We\n            cultivate smart ideas for start-ups and seasoned players.\n          ")]),t._v(" "),e("ul",{staticClass:"feat"},[e("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":".2s"}},[e("h6",[e("span",[t._v("1")]),t._v(" Our Mission")]),t._v(" "),e("p",[t._v("\n                luctus massa ipsum at tempus eleifend congue lectus bibendum\n              ")])]),t._v(" "),e("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[e("h6",[e("span",[t._v("2")]),t._v(" Our Goals")]),t._v(" "),e("p",[t._v("\n                luctus massa ipsum at tempus eleifend congue lectus bibendum\n              ")])]),t._v(" "),e("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":".6s"}},[e("h6",[e("span",[t._v("3")]),t._v(" Why Us?")]),t._v(" "),e("p",[t._v("\n                luctus massa ipsum at tempus eleifend congue lectus bibendum\n              ")])])])])])])])])}],!1,null,"edb5285a",null);e.default=component.exports},399:function(t,e,n){"use strict";n.r(e);var l={layout:"dark",head:function(){return{titleTemplate:"%s - About Dark"}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},o=n(81),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar",{ref:"navbar"}),t._v(" "),e("PagesHeader",{attrs:{imageLink:"/img/slid/about.jpg"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      Our dedicated team of creatives is bursting with talent, experience and\n      passion for what we do.\n    ")]},proxy:!0}])}),t._v(" "),e("AboutIntro"),t._v(" "),e("Services1",{attrs:{oStyle:"4item"}}),t._v(" "),e("VideoWithTestimonials"),t._v(" "),e("SkillsCircle",{attrs:{from:"aboutPage"}}),t._v(" "),e("Team1"),t._v(" "),e("MinimalArea1"),t._v(" "),e("Clients1",{attrs:{theme:"dark"}}),t._v(" "),e("CallToAction"),t._v(" "),e("Footer")],1)}),[],!1,null,"e28761c4",null);e.default=component.exports;installComponents(component,{Navbar:n(272).default,PagesHeader:n(332).default,AboutIntro:n(333).default,Services1:n(286).default,VideoWithTestimonials:n(297).default,SkillsCircle:n(308).default,Team1:n(292).default,MinimalArea1:n(334).default,Clients1:n(309).default,CallToAction:n(284).default,Footer:n(270).default})}}]);