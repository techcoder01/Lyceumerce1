(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{279:function(t,e,n){"use strict";var l=n(4),o=n(23),r=n(13),c=/"/g,d=l("".replace);t.exports=function(t,e,n,l){var v=r(o(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+d(r(l),c,"&quot;")+'"'),m+">"+v+"</"+e+">"}},280:function(t,e,n){"use strict";var l=n(3);t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},282:function(t,e,n){"use strict";n(18),n(35),n(82),n(197);var l=0,o=0;function r(t,time){setInterval(function(t){l=Number(window.getComputedStyle(t).getPropertyValue("opacity")),l<1?(l+=1,t.style.opacity=l):clearInterval(o)}(t),time)}function c(t,time){setInterval(function(t){l=Number(window.getComputedStyle(t).getPropertyValue("opacity")),l>0?(l=0,t.style.opacity=l):clearInterval(o)}(t),time)}e.a=function(){var t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);var e=document.createElement("div");e.classList.add("div-tooltip-sub"),document.body.appendChild(e),document.querySelectorAll("[data-tooltip-tit]").forEach((function(e){t=document.querySelector(".div-tooltip-tit"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-tit")})),e.addEventListener("mousemove",(function(e){r(t,800),t.style.top=e.pageY+10+"px",t.style.left=e.pageX+20+"px",t.style.padding="0px 10px"})),e.addEventListener("mouseleave",(function(){c(t,800),t.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(t){e=document.querySelector(".div-tooltip-sub"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-sub")})),t.addEventListener("mousemove",(function(t){r(e,800),e.style.top=t.pageY-15+"px",e.style.left=t.pageX+30+"px",e.style.padding="5px 10px"})),t.addEventListener("mouseleave",(function(){c(e,800),e.style.padding=0}))}))}},283:function(t,e,n){"use strict";var l=n(2),o=n(279);l({target:"String",proto:!0,forced:n(280)("sub")},{sub:function(){return o(this,"sub","","")}})},288:function(t){t.exports=JSON.parse('{"teams":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"skills":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}')},292:function(t,e,n){"use strict";n.r(e);n(59),n(283),n(18),n(35);var l=function(){var t=document.querySelector(".team-crv");t&&window.addEventListener("scroll",(function(){document.querySelectorAll(".skill-progress .progres").forEach((function(e){var n=e.getAttribute("data-value");window.pageYOffset>t.offsetTop-200&&(e.style.width=n)}))}))},o=n(282),r=n(288),c={data:function(){return{teamData:r}},mounted:function(){Object(o.a)(),l()}},d=n(81),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"team-crv section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 valign"},[e("div",{staticClass:"content wow fadeInUp md-mb30",attrs:{"data-wow-delay":".5s"}},[t._m(0),t._v(" "),e("h3",{staticClass:"co-tit mb-15"},[t._v("We help to create visual strategies.")]),t._v(" "),e("p",[t._v("\n            We are Vie. We create award-winning websites, remarkable brands\n            and cutting-edge apps.Nullam imperdie.\n          ")]),t._v(" "),e("div",{staticClass:"skills-box mt-40"},t._l(t.teamData.skills,(function(n){return e("div",{key:n.id,staticClass:"skill-item"},[e("h6",{staticClass:"custom-font"},[t._v(t._s(n.text))]),t._v(" "),e("div",{staticClass:"skill-progress"},[e("div",{staticClass:"progres",attrs:{"data-value":n.value}})])])})),0)])]),t._v(" "),e("div",{staticClass:"col-lg-6 offset-lg-1"},[e("div",{staticClass:"img-box"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 toright"},[e("div",{staticClass:"full-width"},t._l(t.teamData.teams.slice(0,2),(function(n,l){return e("div",{key:n.id},[e("div",{class:"img sizxl ".concat(l+1!=t.teamData.teams.slice(0,2).length?"mb-30":null),attrs:{"data-tooltip-tit":n.title,"data-tooltip-sub":n.sub}},[e("img",{staticClass:"imago wow",attrs:{src:n.image,alt:""}})])])})),0)]),t._v(" "),e("div",{staticClass:"col-sm-6 toleft valign"},[e("div",{staticClass:"full-width text-left"},t._l(t.teamData.teams.slice(2,4),(function(n,l){return e("div",{key:n.id},[e("div",{class:"img sizxl ".concat(l+1!=t.teamData.teams.slice(2,4).length?"mb-30":null),attrs:{"data-tooltip-tit":n.title,"data-tooltip-sub":n.sub}},[e("img",{staticClass:"imago wow",attrs:{src:n.image,alt:"team image"}})])])})),0)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sub-title"},[e("h6",[t._v("Our Staff")]),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span")])}],!1,null,"742723ce",null);e.default=component.exports}}]);