(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n.n(a),l=n(0),u=n.n(l),r=n(2),c=function(e){return u.a.createElement("div",null,e.text,": ",u.a.createElement("input",{value:e.value,onChange:e.handler}))},i=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"submit"},e.text))},s=function(e){return u.a.createElement("form",{onSubmit:e.submit},u.a.createElement(c,{text:"Nimi",value:e.newName,handler:e.handleNameChange}),u.a.createElement(c,{text:"Numero",value:e.newNumber,handler:e.handleNumberChange}),u.a.createElement(i,{text:"Lis\xe4\xe4"}))},m=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{onClick:e.handleClick,id:e.id,name:e.name},e.text))},f=function(e){var t=e.name,n=e.number,a=e.id,o=e.eventHandler;return u.a.createElement("li",null,t," ",n," ",u.a.createElement(m,{text:"Poista",handleClick:o,id:a,name:t}))},g=function(e){console.log("Filter:",e.filter);var t=e.filter,n=e.persons,a=e.eventHandler,o=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e){return u.a.createElement(f,{key:e.name,name:e.name,number:e.number,id:e.id,eventHandler:a})});return u.a.createElement("ul",null,o)},d=function(e){var t=e.notification;return console.log("Notification: message",t.message),console.log("Notification: style",t.style),console.log("Notification:",t),null===t.message?null:u.a.createElement("div",{className:"notification ".concat(t.style)},t.message)},h=n(3),v=n.n(h),b="https://thawing-brook-56047.herokuapp.com/api/persons",p=function(){return v.a.get(b).then(function(e){return e.data})},E=function(e){return v.a.post(b,e).then(function(e){return e.data})},w=function(e,t){return v.a.put("".concat(b,"/").concat(e),t).then(function(e){return e.data})},y=function(e){return v.a.delete("".concat(b,"/").concat(e)).then(function(e){return e.data})},N=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(l.useState)(""),i=Object(r.a)(o,2),m=i[0],f=i[1],h=Object(l.useState)(""),v=Object(r.a)(h,2),b=v[0],N=v[1],C=Object(l.useState)(""),j=Object(r.a)(C,2),k=j[0],O=j[1],L=Object(l.useState)({message:null,style:null}),x=Object(r.a)(L,2),H=x[0],S=x[1];Object(l.useEffect)(function(){p().then(function(e){a(e)})},[]),console.log("render",n.length,"persons");return u.a.createElement("div",null,u.a.createElement("h1",null,"Puhelinluettelo"),u.a.createElement(d,{notification:H}),u.a.createElement(c,{text:"Rajaa n\xe4ytett\xe4vi\xe4",value:k,handler:function(e){console.log(e.target.value),O(e.target.value)}}),u.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),u.a.createElement(s,{submit:function(e){if(e.preventDefault(),console.log("persons",n),!n.some(function(e){return e.name.toLowerCase()===m.toLowerCase()})&&m.length>0&&b.length>0){var t={name:m,number:b};console.log("newPerson",t),E(t).then(function(e){a(n.concat(e)),f(""),N("")});var o={message:"Henkil\xf6 '".concat(t.name,"' lis\xe4ttiin"),style:"success"};S(o),setTimeout(function(){S({message:null,style:null})},5e3)}else if(n.some(function(e){return e.name.toLowerCase()===m.toLowerCase()})){if(window.confirm("".concat(m," on jo luettelossa. Korvataanko vanha uudella numerolla?"))){var l={name:m,number:b},u=n.find(function(e){return e.name.toLowerCase()===m.toLowerCase()});console.log("personUpdate",u);var r=u.id;console.log("id",r),w(r,l).then(function(){return p()}).then(function(e){a(e);var t={message:"Henkil\xf6 '".concat(l.name,"' muutettiin"),style:"success"};S(t),setTimeout(function(){S({message:null,style:null})},5e3)}).catch(function(e){var t={message:"Henkil\xf6 '".concat(l.name,"' oli jo poistettu"),style:"failure"};S(t),setTimeout(function(){S({message:null,style:null})},5e3),a(n.filter(function(e){return e.id!==r}))})}}else S({message:"Nimi tai numero puuttuu",style:"failure"}),setTimeout(function(){S({message:null,style:null})},5e3)},newName:m,handleNameChange:function(e){console.log(e.target.value),f(e.target.value)},newNumber:b,handleNumberChange:function(e){console.log(e.target.value),N(e.target.value)}}),u.a.createElement("h2",null,"Numerot"),u.a.createElement(g,{filter:k,persons:n,eventHandler:function(e){e.preventDefault(),console.log("Remove ID");var t=e.target.getAttribute("id"),n=e.target.getAttribute("name");console.log("ID",t),console.log("Name",n),window.confirm("Poistetaanko ".concat(n,"?"))&&y(t).then(function(){return p()}).then(function(e){a(e)});var o={message:"Henkil\xf6 '".concat(n,"' poistettiin"),style:"success"};S(o),setTimeout(function(){S({message:null,style:null})},5e3)}}))};n(37);o.a.render(u.a.createElement(N,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.974beee4.chunk.js.map