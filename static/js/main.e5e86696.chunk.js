(this.webpackJsonptouch_menu=this.webpackJsonptouch_menu||[]).push([[0],{22:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(15),i=n.n(o),a=(n(22),n(3)),u=n(9),s=n(7),l=n(5),j=n(1),b=function(t){var e=t.onHandleClickGrabBoxItem,n=Object(c.useState)(!1),r=Object(u.a)(n,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){var t=setTimeout((function(){return i(!0)}),300);return function(){return clearTimeout(t)}}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"touchbar__modal",onClick:function(t){return e(t,"Modal")}}),Object(j.jsxs)("div",{className:"touchbar__grid".concat(o?" opacity":""),children:[Object(j.jsx)("div",{className:"touchbar__item",children:Object(j.jsxs)("button",{onClick:function(t){return e(t,"Menu")},children:[Object(j.jsx)(l.a,{size:"lg",icon:s.a}),Object(j.jsx)("div",{children:"Menu"})]})}),Object(j.jsx)("div",{className:"touchbar__item",children:Object(j.jsxs)("button",{onClick:function(t){return e(t,"Casino")},children:[Object(j.jsx)(l.a,{size:"lg",icon:s.b}),Object(j.jsx)("div",{children:"Casino"})]})}),Object(j.jsx)("div",{className:"touchbar__item",children:Object(j.jsxs)("button",{onClick:function(t){return e(t,"Search")},children:[Object(j.jsx)(l.a,{size:"lg",icon:s.d}),Object(j.jsx)("div",{children:"Search"})]})}),Object(j.jsx)("div",{className:"touchbar__item",children:Object(j.jsxs)("button",{onClick:function(t){return e(t,"Home")},children:[Object(j.jsx)(l.a,{size:"lg",icon:s.c}),Object(j.jsx)("div",{children:"Home"})]})})]})]})},h=function(){var t=window.innerWidth,e=window.innerHeight,n="all .25s linear",r="all 0s linear",o=Object(c.useRef)(!1),i=Object(c.useRef)(!1),s=Object(c.useRef)({top:e-70,left:10}),l=Object(c.useState)((function(){var t=JSON.parse(localStorage.getItem("TouchMenuCoords"));if(null===t)return{top:e-70,left:10,width:60,height:60};var n=t.left0;return{top:t.top0,left:n,width:60,height:60}})),h=Object(u.a)(l,2),d=h[0],f=h[1];return window.onunload=function(){o.current?localStorage.setItem("TouchMenuCoords",JSON.stringify({left0:s.current.left,top0:s.current.top})):localStorage.setItem("TouchMenuCoords",JSON.stringify({left0:d.left,top0:d.top}))},Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"touchbar__title",children:"Touch menu starts  Inner width less than 769 and in Mobile Devices!"}),Object(j.jsx)("div",{className:"touchbar",style:d,onTouchStart:function(n){f((function(t){return Object(a.a)(Object(a.a)({},t),{},{transition:r})}));var c=n.changedTouches[0].pageX-d.left,u=n.changedTouches[0].pageY-d.top;o.current?i.current=!0:document.ontouchmove=function(n){return function(n,c,r){i.current=!0;var o=n.changedTouches[0].pageX-c,u=n.changedTouches[0].pageY-r;o>0&&o<t-d.width&&u>0&&u<e-d.height&&f((function(t){return Object(a.a)(Object(a.a)({},t),{},{top:u,left:o})}))}(n,c,u)}},onTouchEnd:function(){if(document.ontouchmove=function(){return null},i.current)return i.current=!1,void(o.current||new Promise((function(c){!function(c){var r=(t-60)/2,o=(e-60)/2,i=d.left,u=d.top;if(i<=r&&u<=o){if(i>u)return void f((function(t){return Object(a.a)(Object(a.a)({},t),{},{top:0,transition:n})}));f((function(t){return Object(a.a)(Object(a.a)({},t),{},{left:0,transition:n})}))}else if(i>r&&u<=o){if(t-i-60>u)return void f((function(t){return Object(a.a)(Object(a.a)({},t),{},{top:0,transition:n})}));f((function(e){return Object(a.a)(Object(a.a)({},e),{},{left:t-60,transition:n})}))}else if(i<=r&&u>o){if(i>e-u-60)return void f((function(t){return Object(a.a)(Object(a.a)({},t),{},{top:e-60,transition:n})}));f((function(t){return Object(a.a)(Object(a.a)({},t),{},{left:0,transition:n})}))}else if(i>r&&u>o){if(t-i>e-u)return void f((function(t){return Object(a.a)(Object(a.a)({},t),{},{top:e-60,transition:n})}));f((function(e){return Object(a.a)(Object(a.a)({},e),{},{left:t-60,transition:n})}))}c()}(c)})).then((function(){return f((function(t){return Object(a.a)(Object(a.a)({},t),{},{transition:r})}))})));o.current=!0,o.current&&(s.current={left:d.left,top:d.top},f({transition:n,width:300,height:300,left:(t-300)/2,top:(e-300)/2}))},children:o.current?Object(j.jsx)(b,{onHandleClickGrabBoxItem:function(t,e){switch(t.stopPropagation(),o.current=!1,f({transition:n,width:60,height:60,left:s.current.left,top:s.current.top}),e){case"Menu":console.log("Menu");break;case"Casino":console.log("Casino");break;case"Search":console.log("Search");break;case"Home":console.log("Home");break;case"Chat":console.log("Chat")}}}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"touchbar_radius1",children:Object(j.jsx)("div",{className:"touchbar_radius2"})})})})]})},d=n(17);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(h,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e5e86696.chunk.js.map