(this["webpackJsonppart2-app"]=this["webpackJsonppart2-app"]||[]).push([[0],{22:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var c=e(17),r=e.n(c),o=e(8),a=e(3),u=e(2),i=(e(22),e(0)),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"Make note important":"make important";return Object(i.jsxs)("li",{className:"note",children:[n.content," .",Object(i.jsx)("button",{onClick:e,children:c})]})},j=e(6),l=e.n(j),f="http://localhost:3001/api/notes",p=function(){return l.a.get(f).then((function(t){return t.data}))},b=function(t){return l.a.post(f,t).then((function(t){return t.data}))},d=function(t,n){return l.a.put("".concat(f,"/").concat(t),n).then((function(t){return t.data}))},h=function(t){var n=t.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},m=function(){var t=Object(u.useState)([]),n=Object(a.a)(t,2),e=n[0],c=n[1],r=Object(u.useState)(""),j=Object(a.a)(r,2),l=j[0],f=j[1],m=Object(u.useState)(!0),O=Object(a.a)(m,2),v=O[0],x=O[1],g=Object(u.useState)(null),S=Object(a.a)(g,2),k=S[0],w=S[1];Object(u.useEffect)((function(){p().then((function(t){c(t)}))}),[]);var I=v?e:e.filter((function(t){return!0===t.important}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Notes Taking App"}),Object(i.jsx)(h,{message:k}),Object(i.jsxs)("button",{onClick:function(){return x(!v)},children:["Show ",v?"Important":"All"]}),Object(i.jsx)("ul",{children:I.map((function(t,n){return Object(i.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),r=Object(o.a)(Object(o.a)({},n),{},{important:!n.important});d(t,r).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(r){w("The note ".concat(n.content," was already removed from server")),setTimeout((function(){w(null)}),5e3),c(e.filter((function(n){return n.id!==t})))}))}(t.id)}},n)}))}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:l,date:(new Date).toISOString(),important:Math.random()<.5};b(n).then((function(t){c(e.concat(t)),f("")}))},children:[Object(i.jsx)("input",{type:"text",value:l,onChange:function(t){f(t.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Save"})]})]})};r.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fce3bcda.chunk.js.map