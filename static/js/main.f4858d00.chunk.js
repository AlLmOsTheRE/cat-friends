(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=n(9),i=n(2),l=n(18),u=n(19),h=(n(29),n(6)),d=n(7),E=n(10),p=n(8),m=n(11),g=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow tc"},a.a.createElement("img",{alt:"User: ".concat(n),src:"https://robohash.org/".concat(t,"?set=set4&size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},f=function(e){return e.users.map(function(e){return a.a.createElement(g,Object.assign({key:e.id},e))})},b=function(e){function t(){var e,n;Object(h.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(E.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops. That is not good."):this.props.children}}]),t}(r.Component),S=function(e){var t=e.children;return a.a.createElement("div",{style:{overflowY:"scroll",borderBottom:"1px solid black",borderTop:"1px solid black",height:"500px"}},t)},v=function(e){var t=e.handleChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search cats",onChange:t}))},y=(n(30),function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.handleSearchChange,c=e.users,o=e.isPending,s=c.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a.a.createElement("div",{className:"tc",style:{height:"100vh",width:"100vw"}},a.a.createElement("h1",{className:"f1"},o?"Loading...":"Cat friends"),!!c.length&&a.a.createElement(r.Fragment,null,a.a.createElement(v,{handleChange:n}),a.a.createElement(S,null,a.a.createElement(b,null,a.a.createElement(f,{users:s})))))}}]),t}(r.Component)),O=Object(s.b)(function(e){return{searchField:e.usersReducer.searchField,isPending:e.requestUsers.isPending,users:e.requestUsers.users}},function(e){return{handleSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},getUsers:function(){return e(function(e){e({type:"REQUEST_USERS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_USERS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_USERS_FAIL",payload:t})})})}}})(y),w=(n(31),n(4)),_={searchField:""},j={isPending:!1,users:[],error:""};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,C=Object(l.createLogger)(),R=[u.a,C],N=Object(i.c)({usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(w.a)({},e,{searchField:t.payload});default:return e}},requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_USERS_PENDING":return Object(w.a)({},e,{isPending:!0});case"REQUEST_USERS_SUCCESS":return Object(w.a)({},e,{users:t.payload,isPending:!1});case"REQUEST_USERS_FAIL":return Object(w.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),k=Object(i.e)(N,U(i.a.apply(void 0,R)));o.a.render(a.a.createElement(s.a,{store:k},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.f4858d00.chunk.js.map