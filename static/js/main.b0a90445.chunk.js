(this.webpackJsonpmynewww=this.webpackJsonpmynewww||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(6),i=t.n(r),c=(t(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(13);var s=t(1),u=t(2),m=t(4),h=t(3),d=[{id:1,name:"Mubarak",email:"mubby123@gmail.com"},{id:2,name:"Mubby",email:"mubby123@gmail.com"},{id:3,name:"Adebayo",email:"Adeb@gmail"},{id:4,name:"Meedrokrick",email:"Meedrokrick@gmail.com"},{id:5,name:"Ummar",email:"Ummar@gmail.com"},{id:6,name:"Wasiu",email:"Wasiu@gmail.com"}];var f=function(e){var n=e.name,t=e.email,a=e.id;return o.a.createElement("div",{className:" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(a,'?100x100" alt="robotname"')}),o.a.createElement("div",null,o.a.createElement("h2",null," ",n,"  "),o.a.createElement("p",null," ",t," ")))},g=function(e){var n=e.Robot;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(f,{id:n[t].id,name:n[t].name,email:n[t].email})})))},v=function(e){e.Searchfield;var n=e.onchange;return o.a.createElement("input",{className:"bg-light-green",type:"search",placeholder:"search",onChange:n})},b=(t(14),function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)}),p=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(u.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null," Oops Thats not good "):this.props.children}}]),t}(a.Component),w=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).onchange=function(n){e.setState({Searchfield:n.target.value})},e.state={Robot:[],Searchfield:""},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({Robot:d})}))}},{key:"render",value:function(){var e=this.state,n=e.Robot,t=e.Searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?o.a.createElement("div",{className:"tc "},o.a.createElement("h2",{className:"header"},"ROBOT FRIEND"),o.a.createElement(v,{onchange:this.onchange}),o.a.createElement(b,null,o.a.createElement(p,null,o.a.createElement(g,{Robot:a})))):o.a.createElement("h1",null," LOADING....")}}]),t}(a.Component);i.a.render(o.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RobotFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/RobotFriends","/service-worker.js");c?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.b0a90445.chunk.js.map