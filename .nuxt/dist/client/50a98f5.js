(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{569:function(t,e,n){"use strict";n(22),n(39),n(29),n(63);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},577:function(t,e,n){"use strict";n(22),n(39);e.a=function(element){window.addEventListener("scroll",(function(){var t=window.pageYOffset;element&&element.forEach((function(e){e.style.transform="translate3d(0, "+-.2*t+"px, 0)",e.style.opacity=1-t/600}))}))}},590:function(t){t.exports=JSON.parse('[{"id":1,"title":"<span style=\'font-size: 32px;\'>Elevate E-Commerce with Lyceum:<br> Redefining Success</span>","content":"At Lyceumerce, we\'re more than just a company; we\'re your dedicated partner in the world of ecommerce. We understand the challenges businesses face, and our personalized solutions and expert guidance are designed to help you succeed. Welcome to a journey of growth, together.","image":"/img/slid/02.jpg"},{"id":2,"title":"<span style=\'font-size: 39px;\'>Ecommerce Business Consultation For Clients</span>","content":"We offer tailored business consultation covering product evaluation, sourcing, budget management, market analysis, and account/store optimization. Our expertise helps you make informed decisions, boost efficiency, and stay competitive. Partner with us for strategic success..","image":"/img/slid/03.jpg"},{"id":3,"title":"Business value through digital products","content":"","image":"/img/slid/01.jpg"}]')},594:function(t,e,n){"use strict";n.r(e);n(29),n(63),n(87);var r=n(590),o=n(569),c=n(577),l={props:["sliderRef"],data:function(){return{intro1Data:r,swiperOptions:{speed:1e3,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},parallax:!0,pagination:{type:"fraction",clickable:!0,el:".swiper-pagination"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{handleSwiperReadied:function(t){setTimeout((function(){for(var i=0;i<t.slides.length;i++)t.slides[i].childNodes[0].setAttribute("data-swiper-parallax",.75*t.width)}))}},mounted:function(){Object(o.a)(),Object(c.a)(document.querySelectorAll(".fixed-slider .caption"))}},d=n(86),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("header",{ref:t.sliderRef,staticClass:"slider slider-prlx fixed-slider text-center"},[e("div",{staticClass:"swiper-container parallax-slider"},[e("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOptions},on:{ready:t.handleSwiperReadied}},t._l(t.intro1Data,(function(n){return e("swiper-slide",{key:n.id,staticClass:"swiper-slide"},[e("div",{staticClass:"bg-img valign",style:"background-image: url(".concat(n.image,")"),attrs:{"data-overlay-dark":"6"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"caption center mt-30"},[e("h1",{staticClass:"color-font",domProps:{innerHTML:t._s(n.title.replace(/\\n/g,"<br>"))}}),t._v(" "),n.content?e("p",[t._v("\n                      "+t._s(n.content)+"\n                    ")]):t._e(),t._v(" "),e("NuxtLink",{staticClass:"butn bord curve mt-30",attrs:{to:"#"}},[e("span",[t._v("Look More")])])],1)])])])])])})),1),t._v(" "),e("div",{staticClass:"setone setwo"},[e("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[e("i",{staticClass:"fas fa-chevron-right"})]),t._v(" "),e("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[e("i",{staticClass:"fas fa-chevron-left"})])]),t._v(" "),e("div",{ref:"paginationRef",staticClass:"swiper-pagination top botm"}),t._v(" "),e("div",{staticClass:"social-icon"},[e("NuxtLink",{attrs:{to:"#"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#"}},[e("i",{staticClass:"fab fa-behance"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#"}},[e("i",{staticClass:"fab fa-pinterest-p"})])],1)],1)])}),[],!1,null,"3f8ee556",null);e.default=component.exports}}]);