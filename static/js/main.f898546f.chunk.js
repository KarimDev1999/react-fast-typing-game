(this["webpackJsonpreact-typing"]=this["webpackJsonpreact-typing"]||[]).push([[0],{37:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),a=c.n(s),r=c(13),l=c.n(r),o=c(3),i=a.a.memo((function(t){var e=t.setShowResultAlert,c=t.setStartGame,a=Object(s.useState)(180),r=Object(o.a)(a,2),l=r[0],i=r[1],u=Object(s.useRef)(null);console.log("render");return 0===l&&setTimeout((function(){clearInterval(u.current),e(!0)})),Object(n.jsxs)("div",{className:"timer",children:[Object(n.jsx)("button",{className:"button",onClick:function(){c(!0),u.current=setInterval((function(){i((function(t){return t-1}))}),1e3)},children:"start"}),Object(n.jsx)("div",{className:"title",children:function(t){var e="0".concat(t%60).slice(-2),c="".concat(Math.floor(t/60));return"".concat(c," : ").concat(e)}(l)})]})})),u=function(t){var e=t.score,c=t.setShowResultAlert;return Object(n.jsxs)("div",{className:"result-alert",children:[Object(n.jsx)("h2",{className:"result-alert__title title",children:"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e, \u0438\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0435\u043d\u0430. \u0412\u0430\u0448 \u0441\u0447\u0435\u0442: ".concat(e)}),Object(n.jsx)("button",{onClick:function(){c(!1)},className:"result-alert__button button",children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430"})]})},j=c(14),b=c.n(j),h=(c(37),function(){var t=Object(s.useState)([]),e=Object(o.a)(t,2),c=e[0],a=e[1],r=Object(s.useState)(""),l=Object(o.a)(r,2),j=l[0],h=l[1],O=Object(s.useState)(0),m=Object(o.a)(O,2),d=m[0],f=m[1],x=Object(s.useState)(!1),v=Object(o.a)(x,2),g=v[0],p=v[1],N=Object(s.useState)(!1),S=Object(o.a)(N,2),_=S[0],w=S[1];Object(s.useEffect)((function(){b.a.get("https://fish-text.ru/get?format=json&number=1").then((function(t){var e=t.data;a(e.text.split(""))}))}),[d]);return Object(n.jsxs)("div",{className:"app",children:[g?Object(n.jsx)(u,{score:d,setShowResultAlert:p}):null,Object(n.jsx)("h1",{className:"title",children:"Fast typing game"}),Object(n.jsx)(i,{setStartGame:w,setShowResultAlert:p}),!g&&_?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h2",{className:"score title",children:["\u0421\u0447\u0435\u0442: ",d]}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"content__top",children:c.map((function(t,e){var c;return e<j.length&&(c=t===j[e]?"correct":"incorrect"),Object(n.jsx)("span",{className:c,children:"".concat(t)},e)}))}),Object(n.jsx)("div",{className:"content__bottoom",children:Object(n.jsx)("textarea",{value:j,onChange:function(t){var e=t.target.value;h(e),e===c.join("")&&c.length>0&&(h(""),f(d+1))},className:"content__bottom-input"})})]})]}):null]})}),O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};l.a.render(Object(n.jsx)(h,{}),document.getElementById("root")),O()}},[[38,1,2]]]);
//# sourceMappingURL=main.f898546f.chunk.js.map