(window.webpackJsonp=window.webpackJsonp||[]).push([[91,11,25,43,47],{270:function(t,o,e){"use strict";e.r(o);var n={props:["hideBGCOLOR"]},l=e(81),component=Object(l.a)(n,(function(){var t=this,o=t._self._c;return o("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[t._m(0),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item md-mb50"},[t._m(1),t._v(" "),o("ul",[o("li",[o("div",{staticClass:"img"},[o("NuxtLink",{attrs:{to:"#"}},[o("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])],1),t._v(" "),o("div",{staticClass:"sm-post"},[o("NuxtLink",{attrs:{to:"#"}},[o("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),o("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),o("li",[o("div",{staticClass:"img"},[o("NuxtLink",{attrs:{to:"#"}},[o("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])],1),t._v(" "),o("div",{staticClass:"sm-post"},[o("NuxtLink",{attrs:{to:"#"}},[o("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),o("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),t._m(2)])])]),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item"},[t._m(3),t._v(" "),o("div",{staticClass:"social"},[o("NuxtLink",{attrs:{to:"#0"}},[o("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),o("NuxtLink",{attrs:{to:"#0"}},[o("i",{staticClass:"fab fa-twitter"})]),t._v(" "),o("NuxtLink",{attrs:{to:"#0"}},[o("i",{staticClass:"fab fa-instagram"})]),t._v(" "),o("NuxtLink",{attrs:{to:"#0"}},[o("i",{staticClass:"fab fa-youtube"})])],1),t._v(" "),o("div",{staticClass:"copy-right"},[o("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),o("NuxtLink",{attrs:{to:"#0"}},[t._v("ThemesCamp")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item md-mb50"},[o("div",{staticClass:"title"},[o("h5",[t._v("Contact Us")])]),t._v(" "),o("ul",[o("li",[o("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Officeal Address")]),t._v(" "),o("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),o("li",[o("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Email Us")]),t._v(" "),o("p",[t._v("support@gmail.com")])])]),t._v(" "),o("li",[o("span",{staticClass:"icon pe-7s-call"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Call Us")]),t._v(" "),o("p",[t._v("+87986451666")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Recent News")])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"subscribe"},[t("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),this._v(" "),t("span",{staticClass:"subs pe-7s-paper-plane"})])])},function(){var t=this._self._c;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])}],!1,null,"2e8392e9",null);o.default=component.exports;installComponents(component,{Footer:e(270).default})},271:function(t,o,e){"use strict";o.a=function(t){var o=[];if(!t.parentNode)return o;for(var e=t.parentNode.firstChild;e;)1===e.nodeType&&e!==t&&o.push(e),e=e.nextSibling;return o}},272:function(t,o,e){"use strict";e.r(o);e(43),e(44),e(18);var n=e(271),l={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(n.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var o=t.target.parentElement.childNodes[2];o&&o.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},r=e(81),component=Object(r.a)(l,(function(){var t=this,o=t._self._c;return o("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[o("div",{staticClass:"container"},[o("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?o("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,o("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav ml-auto"},[o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Home\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home1-dark"}},[t._v("\n              Main Home\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home2-dark"}},[t._v("\n              Creative Agency\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home5-dark"}},[t._v("\n              Digital Agency\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home4-dark"}},[t._v("\n              Business One Page\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home3-dark"}},[t._v("\n              Corporate Business\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home6-dark"}},[t._v("\n              Modern Agency\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home7-dark"}},[t._v("\n              Freelancer\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home8-dark"}},[t._v("\n              Architecture\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item"},[o("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Works\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase/showcase-dark"}},[t._v("\n              Showcase Parallax\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase3/showcase3-dark"}},[t._v("\n              Showcase Carousel\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase2/showcase2-dark"}},[t._v("\n              Showcase Circle\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works/works-dark"}},[t._v("\n              Portfolio Masonry\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works2/works2-dark"}},[t._v("\n              Portfolio Filtering\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works3/works3-dark"}},[t._v("\n              Portfolio Gallery\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Blog\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog/blog-dark"}},[t._v("\n              Blog Standerd\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-list/blog-list-dark"}},[t._v("\n              Blog List\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-grid/blog-grid-dark"}},[t._v("\n              Blog Grid\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n              Blog Details\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item"},[o("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contact\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"99068f48",null);o.default=component.exports},287:function(t,o,e){"use strict";e.r(o);var n={props:["title","paragraph","classText"]},l=e(81),component=Object(l.a)(n,(function(){var t=this,o=t._self._c;return o("section",{class:"page-header ".concat(t.classText&&t.classText)},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-7 col-md-9"},[o("div",{staticClass:"cont text-center"},[o("h1",{staticClass:"mb-10 color-font"},[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.paragraph))])])])])])])}),[],!1,null,"1eba3886",null);o.default=component.exports},317:function(t){t.exports=JSON.parse('[{"id":1,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":3,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":4,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b4.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":5,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":6,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')},336:function(t,o,e){"use strict";e.r(o);var n=e(317),l={data:function(){return{blogs:n}}},r=e(81),component=Object(r.a)(l,(function(){var t=this,o=t._self._c;return o("section",{staticClass:"blog-pg blog section-padding pt-0"},[o("div",{staticClass:"container"},[o("div",{staticClass:"posts"},[o("div",{staticClass:"row"},[t._l(t.blogs,(function(e){return o("div",{key:e.id,staticClass:"col-lg-4"},[o("div",{staticClass:"item mb-80 wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[o("div",{staticClass:"img"},[o("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),o("div",{staticClass:"cont"},[o("div",[o("div",{staticClass:"info"},[o("NuxtLink",{staticClass:"date",attrs:{to:"/blog-details/blog-details-dark"}},[o("span",[o("i",[t._v(t._s(e.date.day))]),t._v("\n                      "+t._s(e.date.month)+"\n                    ")])]),t._v(" "),o("span",[t._v("/")]),t._v(" "),t._l(e.tags,(function(e,n){return o("NuxtLink",{key:n,staticClass:"tag",attrs:{to:"#0"}},[o("span",[t._v(t._s(e))])])}))],2),t._v(" "),o("h5",[o("NuxtLink",{attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n                    "+t._s(e.title.substr(0,55)+"...")+"\n                  ")])],1),t._v(" "),o("div",{staticClass:"btn-more"},[o("NuxtLink",{staticClass:"simple-btn",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n                    Read More\n                  ")])],1)])])])])})),t._v(" "),o("div",{staticClass:"pagination"},[o("span",{staticClass:"active"},[o("NuxtLink",{attrs:{to:"blog/blog-dark"}},[t._v("1")])],1),t._v(" "),o("span",[o("NuxtLink",{attrs:{to:"blog/blog-dark"}},[t._v("2")])],1),t._v(" "),o("span",[o("NuxtLink",{attrs:{to:"blog/blog-blogwindow.theme"}},[o("i",{staticClass:"fas fa-angle-right"})])],1)])],2)])])])}),[],!1,null,"06f807f3",null);o.default=component.exports},404:function(t,o,e){"use strict";e.r(o);var n={layout:"light",head:function(){return{titleTemplate:"%s - Blog-Grid Light"}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},l=e(81),component=Object(l.a)(n,(function(){var t=this,o=t._self._c;return o("div",[t._m(0),t._v(" "),o("Navbar",{ref:"navbar",attrs:{theme:"light"}}),t._v(" "),o("PageHeader",{attrs:{title:"Our News.",paragraph:"All the most current news and events of our creative team."}}),t._v(" "),o("BlogGrid"),t._v(" "),o("Footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"circle-bg"},[t("div",{staticClass:"circle-color fixed"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"93090684",null);o.default=component.exports;installComponents(component,{Navbar:e(272).default,PageHeader:e(287).default,BlogGrid:e(336).default,Footer:e(270).default})}}]);