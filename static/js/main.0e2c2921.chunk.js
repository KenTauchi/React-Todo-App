(this["webpackJsonptodo-timer"]=this["webpackJsonptodo-timer"]||[]).push([[0],[,function(e,t,n){e.exports={OverDueList:"OverDueList_OverDueList__22nGn",Content:"OverDueList_Content__MS4hB",Due:"OverDueList_Due__1VqB3",Alert:"OverDueList_Alert__3o99Y"}},,,,,function(e,t,n){e.exports={TodoList:"TodoList_TodoList__TnEgK",Content:"TodoList_Content___unvV",Due:"TodoList_Due__o0Qea"}},,,,function(e,t,n){e.exports={Layout:"Layout_Layout__3SBgk"}},function(e,t,n){e.exports={InputForm:"InputForm_InputForm__3NvE0",inputForm:"InputForm_inputForm__10-Mc"}},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(9),c=n.n(r),i=(n(17),n(2)),l=n(3),u=n(5),s=n(4),m=(n(18),function(e){return e.children}),d=n(10),v=n.n(d),p=function(e){return a.a.createElement(m,null,a.a.createElement("main",{className:v.a.Layout},e.children))},f=n(7),g=n(11),_=n.n(g),E=function(e){return a.a.createElement("form",{className:_.a.InputForm,onSubmit:e.click},a.a.createElement("span",null,"Todo Description"),a.a.createElement("textarea",{name:"desc",type:"text",placeholder:"Please add your todo here"}),a.a.createElement("span",null,"Due Date"),a.a.createElement("input",{name:"datetime",type:"datetime-local"}),a.a.createElement("button",{type:"submit"},"Add"))},D=n(6),S=n.n(D),h=n(1),O=n.n(h),L=function(e){return a.a.createElement("li",{className:O.a.OverDueList},a.a.createElement("div",{className:O.a.Alert},"*Overdue"),a.a.createElement("div",{className:O.a.Due},"Due: ",e.time),a.a.createElement("div",{className:O.a.Content},e.content),a.a.createElement("button",{onClick:e.click},"Delete"))},b=function(e){var t=new Date(e.time).toLocaleString(),n=t.length,o=t.substring(0,n-6)+t.substring(n-3,n);return!1===new Date(e.time).toLocaleString()<new Date((new Date).toUTCString()).toLocaleString()?a.a.createElement(m,null,a.a.createElement("li",{className:S.a.TodoList},a.a.createElement("div",{className:S.a.Due},"Due: ",o),a.a.createElement("div",{className:S.a.Content},e.content),a.a.createElement("button",{onClick:e.click},"Delete"))):a.a.createElement(L,{content:e.content,time:o,click:e.click,id:e.id})},y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],overdue:[]},e.componentDidMount=function(){var t=localStorage.getItem("todo"),n=JSON.parse(localStorage.getItem("todo")),o=JSON.parse(localStorage.getItem("overdue"));t&&e.setState({todos:n,overdue:o})},e.addToOverdueStorage=function(e){localStorage.setItem("overdue",JSON.stringify(e))},e.addToList=function(t){t.preventDefault();var n=t.target.desc.value,o=t.target.datetime.value;e.setState((function(e){return{todos:[].concat(Object(f.a)(e.todos),[{todo:n,time:o}])}}),(function(){e.addToStorage(e.state.todos)}))},e.addToStorage=function(e){localStorage.setItem("todo",JSON.stringify(e))},e.deleteTodo=function(t){var n=Object(f.a)(e.state.todos);n.splice(t,1),e.setState({todos:n}),localStorage.setItem("todo",JSON.stringify(n))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(m,null,a.a.createElement(E,{click:this.addToList}),this.state.todos.map((function(t,n){return a.a.createElement(b,{content:t.todo,time:t.time,id:n,click:function(){e.deleteTodo(n)}})})))}}]),n}(o.Component),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(p,null,a.a.createElement(y,null))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.0e2c2921.chunk.js.map