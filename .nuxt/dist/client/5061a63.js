(window.webpackJsonp=window.webpackJsonp||[]).push([[110,8,15,25,27,29,43,55,61,79],{566:function(t,e,o){"use strict";o.r(e);var n={props:["hideBGCOLOR"]},l=o(86),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[t._m(1),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"img"},[e("NuxtLink",{attrs:{to:"#"}},[e("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sm-post"},[e("NuxtLink",{attrs:{to:"#"}},[e("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),e("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),e("li",[e("div",{staticClass:"img"},[e("NuxtLink",{attrs:{to:"#"}},[e("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sm-post"},[e("NuxtLink",{attrs:{to:"#"}},[e("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),e("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item"},[t._m(3),t._v(" "),e("div",{staticClass:"social"},[e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-youtube"})])],1),t._v(" "),e("div",{staticClass:"copy-right"},[e("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("ThemesCamp")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[e("div",{staticClass:"title"},[e("h5",[t._v("Contact Us")])]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Officeal Address")]),t._v(" "),e("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Email Us")]),t._v(" "),e("p",[t._v("support@gmail.com")])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-call"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Call Us")]),t._v(" "),e("p",[t._v("+87986451666")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Recent News")])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"subscribe"},[t("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),this._v(" "),t("span",{staticClass:"subs pe-7s-paper-plane"})])])},function(){var t=this._self._c;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])}],!1,null,"2e8392e9",null);e.default=component.exports;installComponents(component,{Footer:o(566).default})},567:function(t,e,o){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var o=t.parentNode.firstChild;o;)1===o.nodeType&&o!==t&&e.push(o),o=o.nextSibling;return e}},568:function(t,e,o){"use strict";o.r(e);o(48),o(49),o(22);var n=o(567),l={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(n.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},r=o(86),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,e("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Home\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home1-dark"}},[t._v("\n              Main Home\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home2-dark"}},[t._v("\n              Creative Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home5-dark"}},[t._v("\n              Digital Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home4-dark"}},[t._v("\n              Business One Page\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home3-dark"}},[t._v("\n              Corporate Business\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home6-dark"}},[t._v("\n              Modern Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home7-dark"}},[t._v("\n              Freelancer\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home8-dark"}},[t._v("\n              Architecture\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Works\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase/showcase-dark"}},[t._v("\n              Showcase Parallax\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase3/showcase3-dark"}},[t._v("\n              Showcase Carousel\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase2/showcase2-dark"}},[t._v("\n              Showcase Circle\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works/works-dark"}},[t._v("\n              Portfolio Masonry\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works2/works2-dark"}},[t._v("\n              Portfolio Filtering\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works3/works3-dark"}},[t._v("\n              Portfolio Gallery\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Blog\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog/blog-dark"}},[t._v("\n              Blog Standerd\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-list/blog-list-dark"}},[t._v("\n              Blog List\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-grid/blog-grid-dark"}},[t._v("\n              Blog Grid\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n              Blog Details\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contact\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"99068f48",null);e.default=component.exports},571:function(t,e,o){"use strict";o(22),o(39);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var o=document.querySelectorAll(".gallery-mons");o.length>=1&&o.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var n=document.querySelector(".filtering");if(n){var l=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};n.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var o=e.target.getAttribute("data-filter");t.arrange({filter:o})}}));for(var r=document.querySelectorAll(".filtering"),i=0,c=r.length;i<c;i++){l(r[i])}}}},574:function(t){t.exports=JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":3,"icon":"pe-7s-display1","title":"Social Media Marketing","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":4,"icon":"pe-7s-diskette","title":"Document Legal Policy","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]')},581:function(t,e,o){"use strict";o.r(e);o(88);var n={props:["withIMG","withCOLOR","noPadding","classText","showHead"],data:function(){return{settings:{dots:!1,infinite:!0,arrows:!0,centerMode:!0,autoplay:!0,rows:1,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:767,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:480,settings:{slidesToShow:1,centerMode:!1}}]}}},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()}},mounted:function(){document.querySelector(".slick-track").classList.remove("slick-center")}},l=o(86),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{class:"testimonials ".concat(t.withIMG?"section-padding bg-img":t.withCOLOR?"section-padding back-color":t.noPadding?"":"section-padding"," ").concat(t.classText?t.classText:""),style:"background-image: ".concat(t.withIMG?"url("+t.withIMG+")":"none")},[t.showHead?e("div",{staticClass:"container"},[t._m(0)]):t._e(),t._v(" "),e("div",{staticClass:"container-fluid position-re"},[e("div",{staticClass:"row wow fadeInUp",attrs:{"data-wow-delay":".5s"}},[e("div",{staticClass:"col-lg-12"},[e("VueSlickCarousel",t._b({ref:"carousel",staticClass:"slic-item",attrs:{"data-wow-delay":".5s"}},"VueSlickCarousel",t.settings,!1),[e("div",{staticClass:"item"},[e("div",{staticClass:"info valign"},[e("div",{staticClass:"cont"},[e("div",{staticClass:"author"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),e("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),e("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),e("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"info valign"},[e("div",{staticClass:"cont"},[e("div",{staticClass:"author"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),e("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),e("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),e("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"info valign"},[e("div",{staticClass:"cont"},[e("div",{staticClass:"author"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),e("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),e("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),e("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"info valign"},[e("div",{staticClass:"cont"},[e("div",{staticClass:"author"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),e("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),e("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),e("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])])])],1)]),t._v(" "),e("div",{staticClass:"arrows"},[e("div",{staticClass:"container"},[e("div",{staticClass:"next cursor-pointer",on:{click:t.showNext}},[e("span",{staticClass:"pe-7s-angle-right"})]),t._v(" "),e("div",{staticClass:"prev cursor-pointer",on:{click:t.showPrev}},[e("span",{staticClass:"pe-7s-angle-left"})])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"sec-head text-center"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Testimonials")]),t._v(" "),e("h3",{staticClass:"wow color-font"},[t._v("\n            We love our clients from all over the world.\n          ")])])])])}],!1,null,"03d9d631",null);e.default=component.exports},595:function(t,e,o){"use strict";o.r(e);var n={},l=o(86),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog-list section-padding sub-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"head md-mb50"},[e("h6",{staticClass:"back-color"},[t._v("Get The Latest News")]),t._v(" "),e("h3",[t._v("What Our Trending News.")]),t._v(" "),e("p",[t._v("\n            We provide company and finance service for startups and company\n            business.\n          ")]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("span",[t._v("More Blog Posts")])])],1)]),t._v(" "),e("div",{staticClass:"col-lg-7 offset-lg-1"},[e("div",{staticClass:"item wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[t._m(0),t._v(" "),e("div",{staticClass:"cont valign"},[e("div",[e("div",{staticClass:"info"},[e("NuxtLink",{staticClass:"date",attrs:{to:"#0"}},[e("span",[e("i",[t._v("06")]),t._v(" August")])]),t._v(" "),e("span",[t._v("/")]),t._v(" "),e("NuxtLink",{staticClass:"tag",attrs:{to:"#0"}},[e("span",[t._v("WordPress")])])],1),t._v(" "),e("h5",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)])])]),t._v(" "),e("div",{staticClass:"item wow fadeInUp",attrs:{"data-wow-delay":".5s"}},[t._m(1),t._v(" "),e("div",{staticClass:"cont valign"},[e("div",[e("div",{staticClass:"info"},[e("NuxtLink",{staticClass:"date",attrs:{to:"#0"}},[e("span",[e("i",[t._v("06")]),t._v(" August")])]),t._v(" "),e("span",[t._v("/")]),t._v(" "),e("NuxtLink",{staticClass:"tag",attrs:{to:"#0"}},[e("span",[t._v("WordPress")])])],1),t._v(" "),e("h5",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)])])]),t._v(" "),e("div",{staticClass:"item wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[t._m(2),t._v(" "),e("div",{staticClass:"cont valign"},[e("div",[e("div",{staticClass:"info"},[e("NuxtLink",{staticClass:"date",attrs:{to:"#0"}},[e("span",[e("i",[t._v("06")]),t._v(" August")])]),t._v(" "),e("span",[t._v("/")]),t._v(" "),e("NuxtLink",{staticClass:"tag",attrs:{to:"#0"}},[e("span",[t._v("WordPress")])])],1),t._v(" "),e("h5",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"img valign"},[t("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"img valign"},[t("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"img valign"},[t("img",{attrs:{src:"/img/blog/3.jpg",alt:""}})])}],!1,null,"691f4924",null);e.default=component.exports},600:function(t,e,o){t.exports={}},609:function(t,e,o){"use strict";o.r(e);var n={props:["noLine"]},l=o(86),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"contact-sec section-padding position-re"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"form wow fadeInUp",attrs:{"data-wow-delay":".5s"}},[e("form",{attrs:{id:"contact-form"}},[e("div",{staticClass:"messages"}),t._v(" "),e("div",{staticClass:"controls"},[e("div",{staticClass:"row"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"text-center"},[e("NuxtLink",{staticClass:"butn bord curve mt-30",attrs:{to:"#0"}},[e("span",[t._v("Send Massege")])])],1)])])])])])])])]),t._v(" "),t.noLine?t._e():e("div",{staticClass:"line bottom left"})])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"sec-head text-center"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Contact Us")]),t._v(" "),e("h3",{staticClass:"wow color-font"},[t._v("\n            Let's Get in Touch And Make Magic Together.\n          ")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"form-group"},[t("input",{attrs:{id:"form_name",type:"text",name:"name",placeholder:"Name",required:"required"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"form-group"},[t("input",{attrs:{id:"form_email",type:"email",name:"email",placeholder:"Email",required:"required"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"form-group"},[t("input",{attrs:{id:"form_name",type:"text",name:"name",placeholder:"Name",required:"required"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group"},[t("textarea",{attrs:{id:"form_message",name:"message",placeholder:"Message",rows:"4",required:"required"}})])])}],!1,null,"18e20fe4",null);e.default=component.exports},622:function(t,e,o){"use strict";o(600)},627:function(t,e,o){"use strict";o.r(e);o(22),o(39);var n=function(){document.querySelector(".about-cr .skills-box")&&window.addEventListener("scroll",(function(){document.querySelectorAll(".skill-progress .progres").forEach((function(t){var e=t.getAttribute("data-value");window.pageYOffset>document.querySelector(".about-cr").offsetTop-200&&(t.style.width=e)}))}))},l={mounted:function(){n()}},r=o(86),component=Object(r.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"about-cr"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 img md-mb50"},[e("img",{attrs:{src:"/img/intro/4.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"col-lg-5 valign"},[e("div",{staticClass:"cont full-width"},[e("h3",{staticClass:"color-font"},[t._v("UI / UX Designer")]),t._v(" "),e("h5",{staticClass:"co-tit mb-15"},[t._v("We help to create visual strategies.")]),t._v(" "),e("p",[t._v("\n            We are Vie. We create award-winning websites, remarkable brands\n            and cutting-edge apps.Nullam imperdie.\n          ")]),t._v(" "),e("div",{staticClass:"skills-box mt-40"},[e("div",{staticClass:"skill-item"},[e("h5",{staticClass:"fz-14 mb-15"},[t._v("UI / UX Design")]),t._v(" "),e("div",{staticClass:"skill-progress"},[e("div",{staticClass:"progres",attrs:{"data-value":"90%"}})])]),t._v(" "),e("div",{staticClass:"skill-item"},[e("h5",{staticClass:"fz-14 mb-15"},[t._v("Apps Development")]),t._v(" "),e("div",{staticClass:"skill-progress"},[e("div",{staticClass:"progres",attrs:{"data-value":"80%"}})])])])])])])])])}],!1,null,"11bf9138",null);e.default=component.exports},656:function(t,e,o){"use strict";o.r(e);var n={},l=(o(622),o(86)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"freelancre valign"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-8 valign"},[e("div",{staticClass:"cont"},[e("h1",{staticClass:"cd-headline clip"},[t._v("\n            Hello, My name is hisham i love design and i hope to make awesome\n            designs and also i create a\n            "),e("span",{staticClass:"cd-words-wrapper"},[e("VueTyper",{staticClass:"color-font fw-600",attrs:{text:["Mobile Apps","Landing Pages","Awesome Design"],repeat:1/0,"initial-action":"erasing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":250,"erase-style":"backspace","caret-animation":"smooth"}})],1)])])])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"line bottom left"})])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"img"},[t("img",{attrs:{src:"/img/hero.jpg",alt:""}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"states"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"flex"},[e("li",{staticClass:"flex"},[e("div",{staticClass:"numb valign"},[e("h3",[t._v("12")])]),t._v(" "),e("div",{staticClass:"text valign"},[e("p",[t._v("\n                Years "),e("br"),t._v("\n                Of Experience\n              ")])])]),t._v(" "),e("li",{staticClass:"flex"},[e("div",{staticClass:"numb valign"},[e("h3",[t._v("165")])]),t._v(" "),e("div",{staticClass:"text valign"},[e("p",[t._v("\n                Projects Completed "),e("br"),t._v("\n                In 19 Countries\n              ")])])]),t._v(" "),e("li",{staticClass:"mail-us"},[e("a",{attrs:{href:"mailto:your@email.com?subject=Subject"}},[e("div",{staticClass:"flex"},[e("div",{staticClass:"text valign"},[e("div",{staticClass:"full-width"},[e("p",[t._v("Get In Touch")]),t._v(" "),e("h6",[t._v("Vie_Support@Gmail.Com")])])]),t._v(" "),e("div",{staticClass:"mail-icon"},[e("div",{staticClass:"icon-box"},[e("span",{staticClass:"icon color-font pe-7s-mail"})])])])])])])])])}],!1,null,null,null);e.default=component.exports},657:function(t,e,o){"use strict";o.r(e);var n=o(574),l={data:function(){return{featuresData:n}}},r=o(86),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"services box lficon section-padding position-re"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},t._l(t.featuresData,(function(o,n){return e("div",{key:o.id,staticClass:"col-lg-6 wow fadeInLeft",attrs:{"data-wow-delay":0==n?".5s":1==n?".7s":2===n?".9s":".5s"}},[e("div",{staticClass:"item-box no-curve"},[e("div",[e("span",{class:"icon color-font ".concat(o.icon)})]),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v(t._s(o.title))]),t._v(" "),e("p",[t._v(t._s(o.content))])])])])})),0)]),t._v(" "),e("div",{staticClass:"line bottom right"})])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"sec-head text-center"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Best Features")]),t._v(" "),e("h3",{staticClass:"wow color-font"},[t._v("\n            We are a new digital product development agency\n          ")])])])])}],!1,null,"5327169a",null);e.default=component.exports},658:function(t,e,o){"use strict";o.r(e);o(87);var n=o(571),l={mounted:function(){setTimeout((function(){Object(n.a)()}),1e3)}},r=o(86),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"portfolio-frl section-padding pb-70"},[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(1),t._v(" "),e("div",{staticClass:"gallery full-width"},[e("div",{staticClass:"col-md-6 items graphic lg-mr wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[t._m(2),t._v(" "),e("NuxtLink",{staticClass:"rota",attrs:{to:"project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/freelancer/1.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})]),t._v(" "),e("div",{staticClass:"tags"},[e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("App")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Fitnes")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Creative")])],1)])],1)]),t._v(" "),e("div",{staticClass:"col-md-6 items web wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[t._m(3),t._v(" "),e("NuxtLink",{staticClass:"rota",attrs:{to:"project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/freelancer/2.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})]),t._v(" "),e("div",{staticClass:"tags"},[e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("App")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Fitnes")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Creative")])],1)])],1)]),t._v(" "),e("div",{staticClass:"col-md-6 items web wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[t._m(4),t._v(" "),e("NuxtLink",{staticClass:"rota",attrs:{to:"project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/freelancer/3.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})]),t._v(" "),e("div",{staticClass:"tags"},[e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("App")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Fitnes")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Creative")])],1)])],1)]),t._v(" "),e("div",{staticClass:"col-md-6 items web graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[t._m(5),t._v(" "),e("NuxtLink",{staticClass:"rota",attrs:{to:"project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/freelancer/4.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})]),t._v(" "),e("div",{staticClass:"tags"},[e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("App")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Fitnes")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Creative")])],1)])],1)]),t._v(" "),e("div",{staticClass:"col-md-6 items brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[t._m(6),t._v(" "),e("NuxtLink",{staticClass:"rota",attrs:{to:"project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/freelancer/5.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})]),t._v(" "),e("div",{staticClass:"tags"},[e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("App")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Fitnes")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Creative")])],1)])],1)]),t._v(" "),e("div",{staticClass:"col-md-6 items brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[t._m(7),t._v(" "),e("NuxtLink",{staticClass:"rota",attrs:{to:"project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/freelancer/6.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})]),t._v(" "),e("div",{staticClass:"tags"},[e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("App")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Fitnes")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Creative")])],1)])],1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"sec-head text-center"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Portfolio")]),t._v(" "),e("h3",{staticClass:"wow color-font"},[t._v("\n            Our Recent Web Design & "),e("br"),t._v("\n            Some Past Projects.\n          ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filtering col-12"},[e("div",{staticClass:"filter wow fadeIn",attrs:{"data-wow-delay":".5s"}},[e("span",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v(" All ")]),t._v(" "),e("span",{attrs:{"data-filter":".brand"}},[t._v("Branding")]),t._v(" "),e("span",{attrs:{"data-filter":".web"}},[t._v("Mobile App")]),t._v(" "),e("span",{attrs:{"data-filter":".graphic"}},[t._v("Creative")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Creative Mobile App")]),t._v(" "),e("p",[t._v("Ui / Ux creative mobile app design")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Creative Mobile App")]),t._v(" "),e("p",[t._v("Ui / Ux creative mobile app design")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Creative Mobile App")]),t._v(" "),e("p",[t._v("Ui / Ux creative mobile app design")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Creative Mobile App")]),t._v(" "),e("p",[t._v("Ui / Ux creative mobile app design")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Creative Mobile App")]),t._v(" "),e("p",[t._v("Ui / Ux creative mobile app design")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Creative Mobile App")]),t._v(" "),e("p",[t._v("Ui / Ux creative mobile app design")])])}],!1,null,"401b0c17",null);e.default=component.exports},718:function(t,e,o){"use strict";o.r(e);var n={layout:"dark",head:function(){return{titleTemplate:"%s - Freelancer Dark"}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},l=o(86),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar",{ref:"navbar"}),t._v(" "),e("FreelancreIntro"),t._v(" "),e("Services5"),t._v(" "),e("Works5"),t._v(" "),e("AboutUs5"),t._v(" "),e("FullTestimonials",{attrs:{showHead:""}}),t._v(" "),e("Blogs2"),t._v(" "),e("SContactForm",{attrs:{noLine:""}}),t._v(" "),e("Footer")],1)}),[],!1,null,"abd6661c",null);e.default=component.exports;installComponents(component,{Navbar:o(568).default,FreelancreIntro:o(656).default,Services5:o(657).default,Works5:o(658).default,AboutUs5:o(627).default,FullTestimonials:o(581).default,Blogs2:o(595).default,SContactForm:o(609).default,Footer:o(566).default})}}]);