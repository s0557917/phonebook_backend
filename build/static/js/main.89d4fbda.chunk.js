(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(16),a=t.n(r),u=t(3),o=t(4),i=t.n(o),s="/api/entries",l={getAll:function(){return i.a.get(s).then((function(e){return e.data}))},create:function(e){return i.a.post(s,e).then((function(e){return e.data}))},update:function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return i.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))}},d=t(0),j=function(e){var n=e.message;return null===n?null:Object(d.jsx)("div",{className:"success",children:n})},h=function(e){var n=e.message;return null===n?null:Object(d.jsx)("div",{className:"error",children:n})},b=function(e){var n=e.addNewPerson,t=e.newName,c=e.newPhone,r=e.handleNameChange,a=e.handlePhoneChange;return Object(d.jsxs)("form",{onSubmit:n,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Name:"}),Object(d.jsx)("input",{value:t,onChange:r})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Phone:"}),Object(d.jsx)("input",{value:c,onChange:a})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"Add"})})]})},f=function(e){var n=e.person,t=e.deleteEntry;return Object(d.jsxs)("li",{children:[Object(d.jsxs)("p",{children:[n.name," -- ",n.number]}),Object(d.jsx)("button",{onClick:function(){return t(n.id)},children:"Delete"})]},n.id)},m=function(e){var n=e.people,t=e.setPeople;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)("ul",{children:n.map((function(e){return Object(d.jsx)(f,{person:e,deleteEntry:function(){return function(e){var c=n.filter((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ",c[0].name)&&l.deletePerson(e).then((function(c){t(n.filter((function(n){return n.id!==e})))}))}(e.id)}})}))})]})},O=function(e){var n=e.handleSearchChange,t=e.searchResults;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Search:"}),Object(d.jsx)("input",{onChange:n}),Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsxs)("li",{children:[e.name," -- ",e.number]},e.id)}))})]})},p=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),i=o[0],s=o[1],f=Object(c.useState)(""),p=Object(u.a)(f,2),x=p[0],v=p[1],g=Object(c.useState)([]),w=Object(u.a)(g,2),C=w[0],P=w[1],S=Object(c.useState)(null),N=Object(u.a)(S,2),y=N[0],k=N[1],A=Object(c.useState)(null),E=Object(u.a)(A,2),D=E[0],J=E[1];Object(c.useEffect)((function(){l.getAll().then((function(e){var n=e.map((function(e){return{id:e.id,name:e.name,number:e.number}}));r(n)}))}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(j,{message:y}),Object(d.jsx)(h,{message:D}),Object(d.jsx)(O,{handleSearchChange:function(e){var n=e.target.value;if(""!==n){var c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));P(c)}},searchResults:C}),Object(d.jsx)(b,{addNewPerson:function(e){e.preventDefault();var n={id:t.length+1,name:i,number:x},c=t.filter((function(e){return n.name===e.name}));(console.log("Match: ",c),0===c.length)?l.create(n).then((function(e){r(t.concat(e)),s(""),v(""),k("Succesfully added ".concat(e.name,"!")),setTimeout((function(){k(null)}),5e3)})).catch((function(e){return alert("An error occured: ",e)})):window.confirm("Do you want to change ".concat(n.name,"'s number?'"))&&l.update(c[0].id,n).then((function(e){r(t.map((function(n){return n.id===e.id?e:n})))})).catch((function(e){J("".concat(c[0].name,"'s information has already been removed from the server!'")),setTimeout((function(){J(null)}),5e3)}))},newName:i,newPhone:x,handleNameChange:function(e){s(e.target.value)},handlePhoneChange:function(e){v(e.target.value)}}),Object(d.jsx)(m,{people:t,setPeople:r})]})};t(40);a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.89d4fbda.chunk.js.map