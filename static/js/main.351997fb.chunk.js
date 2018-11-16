(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},21:function(e,t,a){e.exports=a(56)},29:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=(a(13),a(2)),l=a(3),i=a(5),m=a(4),u=a(6);a(27),a(29);function d(){return r.a.createElement("nav",{className:"navbar navbar-expend-lg navbar-dark bg-info py-0 mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},r.a.createElement("i",{className:"fas fa-film mr-2"}),"Movie Finder")))}var p=a(10),f=a(7),h=a.n(f),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClickResult=function(e){h.a.get("https://api.themoviedb.org/3/movie/".concat(e.id,"/recommendations?api_key=").concat("530f37829887c8327a9fd3f8c2e11a7b","&language=en-US&page=1\n    ")).then(function(t){a.props.onClickHandler({movie:e,recommendations:t.data.results})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"list-group mb-2 shadow pt-0"},this.props.results.map(function(t){var a=t.title,n=t.poster_path,c=t.release_date,o=t.id;return r.a.createElement("button",{key:o,onClick:e.onClickResult.bind(e,t),style:v.result,type:"button",className:"list-group-item list-group-item-action py-1"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n),style:v.poster,className:"mr-2"}),r.a.createElement("div",{style:v.movieName},r.a.createElement("h6",{style:v.movieName,className:"mr-1"},a),r.a.createElement("span",null,c.slice(0,4))))}))}}]),t}(n.Component),v={poster:{height:"".concat(60,"px"),width:"".concat(40,"px")},movieName:{display:"inline-block"},result:{cursor:"pointer"}},g=b,E=a(8),y=a(9),N=r.a.createContext(),O=function(e,t){switch(t.type){case"DELETE_MOVIE":return console.log(t.payload),Object(y.a)({},e,{selectedMovies:e.selectedMovies.filter(function(e){return e.id!==t.payload})});case"ADD_MOVIE":return Object(y.a)({},e,{selectedMovies:[t.payload.movie].concat(Object(E.a)(e.selectedMovies)),recommendations:Object(E.a)(t.payload.recommendations).concat(Object(E.a)(e.recommendations))});case"SET_RESULT":t.payload.poster="http://image.tmdb.org/t/p/w342/".concat(t.payload.poster_path);for(var a=t.payload.vote_average,n=[],c=1;c<a/2;c++)n.push(r.a.createElement("i",{className:"fas fa-star text-info",key:c}));a/2-Math.floor(a/2)>.5&&(n=Object(E.a)(n).concat([r.a.createElement("i",{className:"fas fa-star-half-alt text-info"})]));for(var o=n.length,s=0;s<5-o;s++)n=Object(E.a)(n).concat([r.a.createElement("i",{className:"far fa-star",key:5*s})]);return t.payload.rating=n,Object(y.a)({},e,{result:t.payload});default:return e}},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selectedMovies:[],recommendations:[],result:{},dispatch:function(e){return a.setState(function(t){return O(t,e)})}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.selectedMovies.forEach(function(t){h.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("530f37829887c8327a9fd3f8c2e11a7b","&query=").concat(t.title,"&page=1")).then(function(t){h.a.get("https://api.themoviedb.org/3/movie/".concat(t.data.results[0].id,"/recommendations?api_key=").concat("530f37829887c8327a9fd3f8c2e11a7b","&language=en-US&page=1")).then(function(t){e.setState({recommendations:Object(E.a)(t.data.results).concat(Object(E.a)(e.state.recommendations))})}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})})}},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=N.Consumer,w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchValue:"",results:[]},a.onChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value),function(){var e=a.state.searchValue;0===e.length&&a.setState({results:[]}),e.length>2&&h.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("530f37829887c8327a9fd3f8c2e11a7b","&query=").concat(e,"&page=1")).then(function(e){a.setState({results:e.data.results})}).catch(function(e){return console.log(e)})})},a.onClickAdd=function(e,t){a.setState({results:[],searchValue:""},function(){return e({type:"ADD_MOVIE",payload:t})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;this.state.searchValue;return r.a.createElement(k,null,function(t){var a=t.dispatch,n=e.state.results;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 text-center mb-2"},"Find Yours Next Movie"),r.a.createElement("p",{className:"lead text-center"},"Give us a list of yours favorite movies and we will find a movie for you"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",style:x.input,placeholder:"Enter Name...",name:"searchValue",value:e.state.searchValue,onChange:e.onChange}),r.a.createElement("button",{className:"btn bg-info text-white",style:x.searchIcon},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement(g,{results:n,onClickHandler:e.onClickAdd.bind(e,a)}))})}}]),t}(n.Component),x={input:{borderRight:"0"},searchIcon:{borderRadius:"0 0.25rem 0.25rem 0",cursor:"auto"}},C=w,_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onClickDelete=function(e,t){e({type:"DELETE_MOVIE",payload:t})},a.onClickFind=function(e,t,a){var n=[];a.forEach(function(e){n.forEach(function(t){t.id===e.id&&t.repeats++}),n.push(Object(y.a)({repeats:0},e))}),n.sort(function(e,t){return e.repeats<t.repeats?1:e.repeats>t.repeats?-1:0});var r=n[0];h.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("530f37829887c8327a9fd3f8c2e11a7b","&language=en-US\n")).then(function(t){var a=t.data.genres.filter(function(e){return r.genre_ids.includes(e.id)});r.genres=a,e({type:"SET_RESULT",payload:r})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(k,null,function(t){var a=t.selectedMovies,n=t.dispatch,c=t.recommendations,o=a.length>=6?"progress-bar bg-success":"progress-bar bg-info";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-sm-12 px-0"},r.a.createElement("div",{className:"progress mb-2"},r.a.createElement("div",{className:o,role:"progressbar",style:{width:"".concat(a.length/100*1667,"%")},"aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}))),r.a.createElement("div",{className:"row"},a.length>0&&a.map(function(t){var a="http://image.tmdb.org/t/p/w185/".concat(t.poster_path);return r.a.createElement("div",{className:"col-sm-2 mb-2 animated fadeInLeft",key:t.id},r.a.createElement("div",{className:"card h-100 w-100"},r.a.createElement("img",{src:a,alt:"movie-poster",className:"card-img-top",style:M.poster}),r.a.createElement("i",{className:"fas fa-trash-alt text-white",style:M.deleteIcon,onClick:e.onClickDelete.bind(e,n,t.id)})))})),a.length>=6&&r.a.createElement("button",{className:"btn btn-info animated bounceIn",onClick:e.onClickFind.bind(e,n,a,c)},r.a.createElement("i",{className:"fas fa-search mr-2"}),"Find Movie"))})}}]),t}(n.Component),M={span:{cursor:"pointer",fontSize:"0.8rem"},deleteIcon:{position:"absolute",bottom:"5px",right:"5px",display:"inline-block",borderRadius:"60px",boxShadow:"0px 0px 2px #888",padding:"0.5em 0.6em",backgroundColor:"rgba(255, 255, 255, 0.3)",cursor:"pointer"}},S=_,I=(a(50),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var t=e.result;return Object.getOwnPropertyNames(t).length>0?r.a.createElement("div",{className:"card animated zoomIn"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:t.poster,alt:"",className:"w-100"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-block p-3"},r.a.createElement("h4",{className:"card-title"},t.title,r.a.createElement("span",{className:"ml-1",style:A.yearText},t.release_date.slice(0,4))),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Rating: "),t.rating," ",r.a.createElement("br",null),r.a.createElement("strong",null,"Genres: ")," ",t.genres.map(function(e,a){return a!=t.genres.length-1?e.name+" | ":e.name})),r.a.createElement("p",{className:"card-text lead"},t.overview),r.a.createElement("a",{className:"btn btn-info text-white"},r.a.createElement("i",{className:"fab fa-imdb text-white mr-2"}),"IMDB Page"))))):null})}}]),t}(n.Component)),A={spinnerContainer:{marginTop:"100px"},yearText:{fontSize:"12px"}},D=I,V=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card mb-4 border-0"},r.a.createElement(C,null),r.a.createElement(S,null)),r.a.createElement(D,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.351997fb.chunk.js.map