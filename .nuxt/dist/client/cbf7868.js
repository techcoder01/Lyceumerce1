(window.webpackJsonp=window.webpackJsonp||[]).push([[88,10,25,43,47],{270:function(t,n,e){"use strict";e.r(n);var o={props:["hideBGCOLOR"]},r=e(81),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[t._m(1),t._v(" "),n("ul",[n("li",[n("div",{staticClass:"img"},[n("NuxtLink",{attrs:{to:"#"}},[n("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])],1),t._v(" "),n("div",{staticClass:"sm-post"},[n("NuxtLink",{attrs:{to:"#"}},[n("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),n("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),n("li",[n("div",{staticClass:"img"},[n("NuxtLink",{attrs:{to:"#"}},[n("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])],1),t._v(" "),n("div",{staticClass:"sm-post"},[n("NuxtLink",{attrs:{to:"#"}},[n("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),n("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),t._m(2)])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item"},[t._m(3),t._v(" "),n("div",{staticClass:"social"},[n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"fab fa-instagram"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"fab fa-youtube"})])],1),t._v(" "),n("div",{staticClass:"copy-right"},[n("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),n("NuxtLink",{attrs:{to:"#0"}},[t._v("ThemesCamp")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[n("div",{staticClass:"title"},[n("h5",[t._v("Contact Us")])]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Officeal Address")]),t._v(" "),n("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),n("li",[n("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Email Us")]),t._v(" "),n("p",[t._v("support@gmail.com")])])]),t._v(" "),n("li",[n("span",{staticClass:"icon pe-7s-call"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Call Us")]),t._v(" "),n("p",[t._v("+87986451666")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Recent News")])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"subscribe"},[t("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),this._v(" "),t("span",{staticClass:"subs pe-7s-paper-plane"})])])},function(){var t=this._self._c;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])}],!1,null,"2e8392e9",null);n.default=component.exports;installComponents(component,{Footer:e(270).default})},271:function(t,n,e){"use strict";n.a=function(t){var n=[];if(!t.parentNode)return n;for(var e=t.parentNode.firstChild;e;)1===e.nodeType&&e!==t&&n.push(e),e=e.nextSibling;return n}},272:function(t,n,e){"use strict";e.r(n);e(43),e(44),e(18);var o=e(271),r={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(o.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var n=t.target.parentElement.childNodes[2];n&&n.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},l=e(81),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?n("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,n("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[n("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Home\n          ")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home1-dark"}},[t._v("\n              Main Home\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home2-dark"}},[t._v("\n              Creative Agency\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home5-dark"}},[t._v("\n              Digital Agency\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home4-dark"}},[t._v("\n              Business One Page\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home3-dark"}},[t._v("\n              Corporate Business\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home6-dark"}},[t._v("\n              Modern Agency\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home7-dark"}},[t._v("\n              Freelancer\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home8-dark"}},[t._v("\n              Architecture\n            ")])],1)]),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),n("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[n("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Works\n          ")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase/showcase-dark"}},[t._v("\n              Showcase Parallax\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase3/showcase3-dark"}},[t._v("\n              Showcase Carousel\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase2/showcase2-dark"}},[t._v("\n              Showcase Circle\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works/works-dark"}},[t._v("\n              Portfolio Masonry\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works2/works2-dark"}},[t._v("\n              Portfolio Filtering\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works3/works3-dark"}},[t._v("\n              Portfolio Gallery\n            ")])],1)]),t._v(" "),n("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[n("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Blog\n          ")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog/blog-dark"}},[t._v("\n              Blog Standerd\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-list/blog-list-dark"}},[t._v("\n              Blog List\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-grid/blog-grid-dark"}},[t._v("\n              Blog Grid\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n              Blog Details\n            ")])],1)]),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contact\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"99068f48",null);n.default=component.exports},287:function(t,n,e){"use strict";e.r(n);var o={props:["title","paragraph","classText"]},r=e(81),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("section",{class:"page-header ".concat(t.classText&&t.classText)},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-7 col-md-9"},[n("div",{staticClass:"cont text-center"},[n("h1",{staticClass:"mb-10 color-font"},[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.paragraph))])])])])])])}),[],!1,null,"1eba3886",null);n.default=component.exports},335:function(t,n,e){"use strict";e.r(n);var o={props:["theme"]},r=e(81),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"blog-pg single section-padding pt-0"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-11"},[n("div",{staticClass:"post"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"pagination"},[t._m(2),t._v(" "),n("span",{staticClass:"icon"},[n("NuxtLink",{attrs:{to:"/blog/blog-dark"}},[n("i",{staticClass:"fas fa-th-large"})])],1),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"comment-form"},[n("h5",[t._v("Add Comment :")]),t._v(" "),n("div",{staticClass:"form"},[n("form",{attrs:{action:""}},[n("div",{staticClass:"row"},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group text-center"},[n("NuxtLink",{class:"butn ".concat(t.theme?"light"===t.theme?"dark":"":"light"," curve full-width"),attrs:{to:"#0"}},[t._v("\n                        Comment\n                      ")])],1)])])])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"img"},[t("img",{attrs:{src:"/img/blog/single.jpg",alt:""}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"content pt-60"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-10"},[n("div",{staticClass:"cont"},[n("h4",{staticClass:"extra-title"},[t._v("\n                    Priorities that will pop up in any particular month.\n                  ")]),t._v(" "),n("div",{staticClass:"spacial"},[n("p",[t._v("\n                      Never ever think of giving up. Winners never quit and\n                      quitters never win. Take all negative words out of your\n                      mental dictionary and focus on the solutions with utmost\n                      conviction and patience. The battle is never lost until\n                      you've abandon your vision.\n                    ")])]),t._v(" "),n("p",[t._v("\n                    the main component of a healthy environment for self\n                    esteem is that it needs be nurturing. The main compont of\n                    a healthy environment for self esteem is that it needs be\n                    nurturing. The main component of a healthy env for self\n                    esteem The main compont be nurturing It should provide\n                    unconditional warmth. The main component of a healthy env\n                    for self esteem The main compont be nurturing It should\n                    provide unconditional\n                  ")]),t._v(" "),n("h6",[t._v("- We all intend to plan ahead.")]),t._v(" "),n("p",[t._v("\n                    We all intend to plan ahead, but too often let the\n                    day-to-day minutia get in the way of making a calendar for\n                    the year. Sure, you can't know every detail to anticipate.\n                    Heck, you can't know half the priorities that will pop up\n                    in any particular month. But you can plan for big picture\n                    seasonality, busy-times, and events.\n                  ")]),t._v(" "),n("ul",[n("li",[n("span",[t._v("01")]),t._v(" Integer in volutpat libero.")]),t._v(" "),n("li",[n("span",[t._v("02")]),t._v(" Vivamus maximus ultricies pulvinar.\n                    ")]),t._v(" "),n("li",[n("span",[t._v("03")]),t._v(" priorities that will pop up in any\n                      particular month.\n                    ")]),t._v(" "),n("li",[n("span",[t._v("04")]),t._v(" We all intend to plan ahead.")]),t._v(" "),n("li",[n("span",[t._v("05")]),t._v(" The main component of a healthy env for\n                      self esteem.\n                    ")])]),t._v(" "),n("div",{staticClass:"quotes text-center"},[n("p",[t._v("\n                      Never ever think of giving up. Winners never quit and\n                      quitters never win. Take all negative words out of your\n                      mental dictionary and focus on the solutions with utmost\n                      conviction and patience. The battle is never lost until\n                      you've abandon your vision.\n                    ")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"mb-10"},[n("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"mb-10"},[n("img",{attrs:{src:"/img/blog/3.jpg",alt:""}})])])]),t._v(" "),n("p",[t._v("\n                    We all intend to plan ahead, but too often let the\n                    day-to-day minutia get in the way of making a calendar for\n                    the year. Sure, you can't know every detail to anticipate.\n                    Heck, you can't know half the priorities that will pop up\n                    in any particular month. But you can plan for big picture\n                    seasonality, busy-times, and events.\n                  ")]),t._v(" "),n("div",{staticClass:"share-info"},[n("div",{staticClass:"social"},[n("a",{attrs:{href:"#0"}},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("a",{attrs:{href:"#0"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"#0"}},[n("i",{staticClass:"fab fa-behance"})])]),t._v(" "),n("div",{staticClass:"tags"},[n("a",{attrs:{href:"#0"}},[t._v("Web")]),t._v(","),n("a",{attrs:{href:"#0"}},[t._v("Themeforest")]),t._v(",\n                      "),n("a",{attrs:{href:"#0"}},[t._v("ThemesCamp")])])])]),t._v(" "),n("div",{staticClass:"author"},[n("div",{staticClass:"author-img"},[n("img",{attrs:{src:"/img/blog/01.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("h6",[n("span",[t._v("author :")]),t._v(" Jorden Griffin")]),t._v(" "),n("p",[t._v("\n                      the main component of a healthy environment for self\n                      esteem is that it needs be nurturing. The main compont\n                      of a healthy environment.\n                    ")]),t._v(" "),n("div",{staticClass:"social"},[n("a",{attrs:{href:"#0"}},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("a",{attrs:{href:"#0"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"#0"}},[n("i",{staticClass:"fab fa-behance"})])])])])])])])},function(){var t=this._self._c;return t("span",[t("a",{attrs:{href:"#0"}},[this._v("Prev Post")])])},function(){var t=this._self._c;return t("span",{staticClass:"text-right"},[t("a",{attrs:{href:"#0"}},[this._v("Next Post")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"comments-area"},[n("h5",[t._v("Comments :")]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"comment-img"},[n("img",{attrs:{src:"/img/blog/01.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("h6",[t._v("Jorden Griffin - "),n("span",[t._v(" 6 Aug 2022")])]),t._v(" "),n("span",{staticClass:"replay"},[n("a",{attrs:{href:"#0"}},[t._v(" Replay "),n("i",{staticClass:"fas fa-reply"})])]),t._v(" "),n("p",[t._v("\n                  the main component of a healthy environment for self esteem\n                  is that it needs be nurturing. The main compont of a healthy\n                  environment.\n                ")])])]),t._v(" "),n("div",{staticClass:"item relped"},[n("div",{staticClass:"comment-img"},[n("img",{attrs:{src:"/img/blog/01.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("h6",[t._v("Jorden Griffin - "),n("span",[t._v(" 6 Aug 2022")])]),t._v(" "),n("span",{staticClass:"replay"},[n("a",{attrs:{href:"#0"}},[t._v(" Replay "),n("i",{staticClass:"fas fa-reply"})])]),t._v(" "),n("p",[t._v("\n                  the main component of a healthy environment for self esteem\n                  is that it needs be nurturing. The main compont of a healthy\n                  environment.\n                ")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"comment-img"},[n("img",{attrs:{src:"/img/blog/01.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("h6",[t._v("Jorden Griffin - "),n("span",[t._v(" 6 Aug 2022")])]),t._v(" "),n("span",{staticClass:"replay"},[n("a",{attrs:{href:"#0"}},[t._v(" Replay "),n("i",{staticClass:"fas fa-reply"})])]),t._v(" "),n("p",[t._v("\n                  the main component of a healthy environment for self esteem\n                  is that it needs be nurturing. The main compont of a healthy\n                  environment.\n                ")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group"},[t("textarea",{attrs:{placeholder:"Your Comment"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("input",{attrs:{type:"text",placeholder:"Your Name"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("input",{attrs:{type:"email",placeholder:"Your Email"}})])])}],!1,null,"8711ae62",null);n.default=component.exports},401:function(t,n,e){"use strict";e.r(n);var o={layout:"dark",head:function(){return{titleTemplate:"%s - Blog Details Dark"}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},r=e(81),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",[t._m(0),t._v(" "),n("Navbar",{ref:"navbar"}),t._v(" "),n("PageHeader",{attrs:{title:"Blog Details.",paragraph:"All the most current news and events of our creative team."}}),t._v(" "),n("BlogDetails"),t._v(" "),n("Footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"circle-bg"},[t("div",{staticClass:"circle-color fixed"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"778429ce",null);n.default=component.exports;installComponents(component,{Navbar:e(272).default,PageHeader:e(287).default,BlogDetails:e(335).default,Footer:e(270).default})}}]);