(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RMQR:function(e,t,r){"use strict";r.r(t);var n=r("5h0R"),a=r("EJvs"),o=r("dNk1"),l=(r("f3/d"),r("hppA")),c={Grass:"green",Bug:"green",Poison:"green",Fairy:"grey",Normal:"grey",Dragon:"grey",Ground:"brown",Rock:"brown",Fighting:"brown",Water:"blue",Ice:"blue",Psychic:"purple",Ghost:"purple",Fire:"red",Electric:"yellow"},s=function(e){var t=e.queried,r=e.type;return n.createElement("div",{className:l.container},console.log("queried: ",t),console.log("type: ",r),t.filter((function(e){return e.types[0]===r||e.types[1]===r})).map((function(e){return n.createElement("div",{className:l.item,key:e.id,style:{backgroundColor:c[e.types[0]]}},n.createElement("a",{href:"pokemon/"+e.name.toLowerCase()},n.createElement("img",{className:l.image,src:e.image,alt:e.name}),n.createElement("p",{className:l+e.types[0]},"#",e.number," ",e.name," ",e.types[0])))})))},u=function(e){return n.createElement("select",{name:"type"},n.createElement("option",{value:"default"},"-"),n.createElement("option",{value:"grass"},"Grass"),n.createElement("option",{value:"water"},"Water"))};r.d(t,"query",(function(){return i}));t.default=function(e){var t=e.data;return n.createElement(a.a,null,n.createElement(o.a,{title:"Home"}),n.createElement(u,null),n.createElement(s,{queried:t.pokeAPI.pokemons}))};var i="72254329"}}]);
//# sourceMappingURL=component---users-luuk-desktop-published-projects-dutch-tv-shows-src-pages-index-tsx-c90c8ae6936858fd233f.js.map