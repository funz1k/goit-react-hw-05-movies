"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{9947:function(e,t,n){n.r(t);var i=n(885),r=n(2791),a=n(6871),o=n(501),c=n(6611),s=n(8494),u=n(3328),d=n(184);t.default=function(){var e,t,n,l,h,v=(0,a.UO)().movieId,p=(0,r.useState)([]),f=(0,i.Z)(p,2),g=f[0],m=f[1];(0,r.useEffect)((function(){(0,c.Rx)(v).then((function(e){return m(e)}))}),[v]);var x=(null===g||void 0===g?void 0:g.poster_path)&&"https://image.tmdb.org/t/p/w500/".concat(null===g||void 0===g?void 0:g.poster_path),j=(0,a.TH)(),_=null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",b=null===j||void 0===j||null===(n=j.state)||void 0===n||null===(l=n.from)||void 0===l?void 0:l.search;return(0,d.jsx)(d.Fragment,{children:g&&(0,d.jsxs)("div",{children:[(0,d.jsxs)(o.rU,{to:_,children:[(0,d.jsx)("span",{children:(0,d.jsx)(s.Fjg,{style:{marginRight:8}})}),"Go back"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:g.poster_path?x:u,alt:"",width:300}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:g.title}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:g.overview}),(0,d.jsxs)("span",{children:["User Score: ",Math.round(10*g.vote_average)," %"]}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{children:null===g||void 0===g||null===(h=g.genres)||void 0===h?void 0:h.map((function(e){var t=e.id,n=e.name;return(0,d.jsx)("li",{children:n},t)}))})]})]}),(0,d.jsxs)("ul",{children:["Additional information",(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",state:{from:"/movies".concat(b)},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",state:{from:"/movies".concat(b)},children:"Reviews"})})]}),(0,d.jsx)(a.j3,{})]})})}},6611:function(e,t,n){n.d(t,{P7:function(){return d},Rx:function(){return s},S0:function(){return u},V0:function(){return o},bp:function(){return c}});var i=n(4569),r=n.n(i),a="c803001b4c6005c4076c37a3ee0a1f4e",o=function(){return r().get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat(a)).then((function(e){return e.data}))};function c(e){return r().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.data}))}function s(e){return r().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US")).then((function(e){return e.data}))}function u(e){return r().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US")).then((function(e){return e.data}))}function d(e){return r().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(e){return e.data}))}},3328:function(e,t,n){e.exports=n.p+"static/media/avatar.4440c226316335729b24.png"}}]);
//# sourceMappingURL=947.0a174009.chunk.js.map