(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{271:function(t,n,e){"use strict";n.a=function(t){var n=[];if(!t.parentNode)return n;for(var e=t.parentNode.firstChild;e;)1===e.nodeType&&e!==t&&n.push(e),e=e.nextSibling;return n}},296:function(t,n,e){"use strict";e.r(n);e(18),e(35);var l=e(271),o=function(t,n){t.style.left=n},c=(e(82),function(time,t){setTimeout((function(){}),time)}),r=function(){function t(){window.scrollTo(0,0)}var n=!1,e=document.querySelector(".topnav.dark"),r=document.querySelector(".topnav.dark .logo img"),d=document.querySelector(".topnav .menu-icon"),v=document.querySelector(".topnav .menu-icon .text");d&&(d.addEventListener("click",(function(){n=!n,document.querySelector(".hamenu").classList.toggle("open"),n?(o(document.querySelector(".hamenu"),"0px"),v.classList.add("open"),e&&e.classList.add("navlit"),r&&r.setAttribute("src","/img/logo-light.png"),window.addEventListener("scroll",t)):(c(300,o(document.querySelector(".hamenu"),"-100%")),v.classList.remove("open"),e&&e.classList.remove("navlit"),r&&r.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",t))})),document.querySelectorAll(".main-menu a").forEach((function(n){n.addEventListener("click",(function(){c(300,o(document.querySelector(".hamenu"),"-100%")),v.classList.remove("open"),e&&e.classList.remove("navlit"),r&&r.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",t)}))}))),document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(t){t.addEventListener("mouseenter",(function(){this.style.opacity="1",Object(l.a)(this).forEach((function(t){t.style.opacity=".5"}))})),t.addEventListener("mouseleave",(function(){document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(t){t.style.opacity="1"}))}))})),document.querySelectorAll(".main-menu > li .dmenu").length&&document.querySelectorAll(".main-menu > li .dmenu").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".main-menu").classList.add("gosub"),Object(l.a)(this.parentNode.parentNode).forEach((function(t){t.childNodes[2]&&t.childNodes[2].classList.remove("sub-open")})),this.parentNode.parentNode.childNodes[2].classList.add("sub-open")}))})),document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length&&document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".main-menu").classList.remove("gosub"),document.querySelector(".main-menu").classList.remove("sub-open")}))}))},d={props:["theme"],mounted:function(){r()}},v=e(81),component=Object(v.a)(d,(function(){var t=this,n=t._self._c;return n("div",[n("div",{class:"topnav ".concat(t.theme&&"light"===t.theme?"light":""),attrs:{id:"navi"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"logo"},[n("NuxtLink",{attrs:{to:"#0"}},["light"===t.theme?n("img",{attrs:{src:"/img/logo-dark.png",alt:"logo"}}):n("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"hamenu"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-9 col-md-8"},[n("div",{staticClass:"menu-links"},[n("ul",{staticClass:"main-menu"},[n("li",[t._m(1),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(2),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home1-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Main Home\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home2-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("Creative Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home5-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Digital Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home4-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Business One Page\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home3-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Corporate\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home6-dark"}},[n("span",{staticClass:"nm"},[t._v("06.")]),t._v("Modern Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home7-dark"}},[n("span",{staticClass:"nm"},[t._v("07.")]),t._v("Freelancer\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home8-dark"}},[n("span",{staticClass:"nm"},[t._v("08.")]),t._v("Architecture\n                        ")])],1)])])])]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/about/about-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("About Us\n                  ")])],1)]),t._v(" "),n("li",[t._m(3),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(4),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase/showcase-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("ShowCase Parallax\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase3/showcase3-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("ShowCase Carousel\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase2/showcase2-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("ShowCase Circle\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works/works-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Portfolio Masonry\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works2/works2-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Portfolio Filtering\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works3/works3-dark"}},[n("span",{staticClass:"nm"},[t._v("06.")]),t._v("Portfolio Gallery\n                        ")])],1)])])])]),t._v(" "),n("li",[t._m(5),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(6),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog/blog-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Blog Standerd\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-list/blog-list-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("Blog List\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-grid/blog-grid-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Blog Grid\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-details/blog-details-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Blog Details\n                        ")])],1)])])])]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/contact/contact-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Contact\n                  ")])],1)])])])]),t._v(" "),t._m(7)])])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"menu-icon"},[n("span",{staticClass:"icon"},[n("i"),t._v(" "),n("i")]),t._v(" "),n("span",{staticClass:"text",attrs:{"data-splitting":""}},[n("span",{staticClass:"menu-text"},[t._v("Menu")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Home\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"o-hidden"},[t("span",{staticClass:"sub-link back"},[t("i",{staticClass:"pe-7s-angle-left"}),this._v(" Go Back\n                        ")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Works\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"o-hidden"},[t("span",{staticClass:"sub-link back"},[t("i",{staticClass:"pe-7s-angle-left"}),this._v(" Go Back\n                        ")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Blogs\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"o-hidden"},[t("span",{staticClass:"sub-link back"},[t("i",{staticClass:"pe-7s-angle-left"}),this._v(" Go Back\n                        ")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"cont-info"},[n("div",{staticClass:"item"},[n("h6",[t._v("Phone :")]),t._v(" "),n("p",[t._v("+03 762-2367-723")])]),t._v(" "),n("div",{staticClass:"item"},[n("h6",[t._v("Address :")]),t._v(" "),n("p",[t._v("541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io")])]),t._v(" "),n("div",{staticClass:"item"},[n("h6",[t._v("Email :")]),t._v(" "),n("p",[n("a",{attrs:{href:"#0"}},[t._v("Vie_website@gmail.com")])])])])])}],!1,null,"113f96cd",null);n.default=component.exports}}]);