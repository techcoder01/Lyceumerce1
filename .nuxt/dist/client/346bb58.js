(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{305:function(e,r,t){"use strict";t.r(r);t(18),t(35);var o=function(){var e=document.querySelector(".cursor-inner"),r=document.querySelector(".cursor-outer");window.onmousemove=function(s){r.style.transform="translate("+s.clientX+"px, "+s.clientY+"px)",e.style.transform="translate("+s.clientX+"px, "+s.clientY+"px)",s.clientY,s.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),r.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),r.classList.remove("cursor-hover")})),e.style.visibility="visible",r.style.visibility="visible"),document.querySelectorAll("a").forEach((function(t){t.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),r.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(t){t.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),r.classList.remove("cursor-hover")}))})),e.style.visibility="visible",r.style.visibility="visible"},n={name:"MouseCursor",mounted:function(){o()}},c=t(81),component=Object(c.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",[e("div",{staticClass:"mouse-cursor cursor-outer"}),this._v(" "),e("div",{staticClass:"mouse-cursor cursor-inner"})])}],!1,null,"90db2d9a",null);r.default=component.exports}}]);