(this["webpackJsonpreact-movie-search"]=this["webpackJsonpreact-movie-search"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(6),r=c(10),s=c(9),i=c(0),l=c(1),o=c.n(l),u=c(7),j=c.n(u),d=(c(16),c(3)),b=c.n(d),h=c(8),p=c(4);function m(e){var t=e.movie;function c(e){return e.release_date?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:Object(i.jsxs)("small",{children:["RELEASE DATE: ",e.release_date]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("small",{children:["RATING: ",e.vote_average]})})]}):Object(i.jsx)("di",{})}return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(i.jsxs)("div",{className:"card--content",children:[Object(i.jsx)("h3",{className:"card--title",children:t.title}),Object(i.jsx)(c,{}),Object(i.jsx)("p",{className:"card--desc",children:t.overview})]})]},t.id)}var v=function(){var e=Object(l.useState)(""),t=Object(p.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)([]),r=Object(p.a)(a,2),s=r[0],o=r[1],u=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=324c3a95be625de22fa0d97d8f4df471&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:return r=e.sent,e.next=11,r.results;case 11:if(!(e.sent.length>0)){e.next=17;break}return e.next=15,o(r.results);case 15:e.next=19;break;case 17:o([{id:"0",poster_path:"/q0ZdIhd9Zb8mu3E6GFMSBoNqzYl.jpg",title:"No Results",overview:"Sorry we could not find any results"}]);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("form",{className:"form",onSubmit:u,children:[Object(i.jsx)("label",{htmlFor:"query",className:"label"}),Object(i.jsx)("input",{type:"text",name:"query",className:"input",placeholder:"ie: jurassic park",value:c,onChange:function(e){return n(e.target.value)}}),Object(i.jsx)("button",{type:"submit",className:"button",children:"Search"})]}),Object(i.jsx)("div",{className:"card-list",children:s.filter((function(e){return e.poster_path})).map((function(e){return Object(i.jsx)(m,{movie:e},e.id)}))})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},O=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(i.jsx)(v,{})]})}}]),c}(o.a.Component);j.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.2b341c49.chunk.js.map