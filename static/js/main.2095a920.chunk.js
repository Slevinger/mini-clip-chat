(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,a,t){e.exports=t(197)},135:function(e,a,t){},180:function(e,a){},197:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),c=t.n(o),s=(t(135),t(103)),l=t.n(s),i=("http://localhost:".concat(3e3),"https://mini-clip-server.herokuapp.com/"),u=(l.a.create({baseURL:i}),t(104)),m="USER_JOIN",p="USER_JOINED",d="USER_LEFT",f="SET_ERROR",b="ADD_MESSAGE",g="SET_PROFILE_IMAGE",v="RESET",j="SET_LOADING",E=t.n(u)()(i);E.connect();var O=t(19),y=t(37),h=t(38),w=t(248),x=t(246),k=t(262),S=t(249),N=t(253),R=t(251),U=t(254),I=t(265),C=t(243),P=t(29),M=t(252);function D(){var e=Object(h.a)(["\n        pointer-events: none;\n      "]);return D=function(){return e},e}function T(){var e=Object(h.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  a {\n    text-decoration: none;\n    ","\n  }\n"]);return T=function(){return e},e}var _=P.b.div(T(),(function(e){return e.disabled&&Object(P.a)(D())})),F=Object(C.a)((function(e){return{avatarPicker:{padding:"0px",marginTop:"10px",borderWidth:"thin",flexDirection:"row",display:"flex",alignItems:"center",alignText:"center"}}})),B=function(e){var a=F(),t=e.state,o=e.setProfileImage,c=Object(y.a)(e,["state","setProfileImage"]),s=t.loading,l=function(e){var a=document.createElement("input");return a.setAttribute("type","file"),a.onchange=function(a){e(a.target.files[0])},a}(o),i=Object(n.useState)(null),u=Object(O.a)(i,2),m=u[0],p=u[1],d=Object(n.useCallback)((function(e){e&&c.joinRoom(e,t.imageUrl)}),[t]);return r.a.createElement(x.a,{"aria-labelledby":"simple-dialog-title",open:!t.username},r.a.createElement(w.a,null,"Sign In"),r.a.createElement(S.a,null,r.a.createElement(k.a,{error:t.error,id:"outlined-basic",label:"Username",variant:"outlined",value:m||"",helperText:t.error,onChange:function(e){p(e.target.value)}}),r.a.createElement(R.a,{className:a.avatarPicker},r.a.createElement(I.a,{alt:m,src:t.imageUrl}),r.a.createElement(_,{className:a.linkContainer},r.a.createElement("a",{href:"#",onClick:function(){l.click()}},"Choose Image")),s&&r.a.createElement(M.a,{size:20}))),r.a.createElement(N.a,null,r.a.createElement(U.a,{variant:"contained",color:"primary",onClick:function(){d(m)}},"SIGN IN")))},L=t(15),A=t(260),G=t(259),J=t(258),W=t(266),z=t(264),H=t(261),K=t(47),V=t(12),Y=t(263),$=t(111),q=t.n($),Q=t(255),X=t(257),Z=t(256);function ee(){var e=Object(h.a)(["\n        background-color: lightgrey;\n      "]);return ee=function(){return e},e}function ae(){var e=Object(h.a)(["\n  ","\n"]);return ae=function(){return e},e}var te=Object(P.b)(Q.a)(ae(),(function(e){return"System"===e.username&&Object(P.a)(ee())}));Y.a.addLocale(q.a);var ne=new Y.a("en-US"),re=function(e){var a=e.classes,t=e.user,n=Object(y.a)(e,["classes","user"]),o=n.message_id,c=n.sent_at,s=n.username,l=n.message,i=new Date(c);return r.a.createElement(te,{username:s,alignItems:"flex-start",key:o},r.a.createElement(Z.a,null,r.a.createElement(I.a,{alt:s,src:t.imageUrl})),r.a.createElement(X.a,{secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{variant:"h6",component:"span",color:"textPrimary"},s)," said  \u2014  ",r.a.createElement(K.a,{variant:"h6",component:"span",color:"textPrimary"},r.a.createElement(K.a,{stlye:{display:"table-caption"},variant:"h6",component:"span",color:"textPrimary"},"".concat(l)))),primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{component:"span",style:{alignSelf:"flex-end"},variant:"body2",className:a.inline,color:"textPrimary"},"".concat(ne.format(i))))}))},oe=t(112),ce=t(250),se=Object(C.a)((function(e){return{root:{height:"80vh",overflowY:"scroll",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})),le=function(e){var a=e.messages,t=e.users,o=se(),c=Object(n.useState)(!0),s=Object(O.a)(c,2),l=s[0],i=s[1],u=Object(n.useRef)(null);Object(n.useLayoutEffect)((function(){l&&u.current.scrollIntoView({behavior:"smooth"})}),[l,a.length]);var m=Object(oe.a)((function(){i(!0)}));return r.a.createElement(ce.a,{ref:m,className:o.root,onScroll:function(e){i(!1)}},a.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(re,Object.assign({classes:o,user:t[e.username]||{}},e)),r.a.createElement(J.a,{variant:"inset",component:"li"}))})),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:u}))},ie=Object(C.a)((function(e){return{root:{display:"flex",flexDirection:"row","& .MuiTextField-root":{width:"100%"}}}})),ue=function(e){var a=e.sendMessage,t=e.username,o=e.error,c=ie(),s=Object(n.useState)(""),l=Object(O.a)(s,2),i=l[0],u=l[1];return r.a.createElement("form",{className:c.root,noValidate:!0,autoComplete:"off"},r.a.createElement(k.a,{error:t&&o,helperText:t&&o,id:"outlined-multiline-static",label:"Message",multiline:!0,rows:4,value:i,variant:"outlined",onChange:function(e){u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&e.shiftKey&&(a(i),u(""))}}),r.a.createElement(U.a,{variant:"contained",color:"primary",onClick:function(){a(i),u("")}},"SEND"))},me=Object(C.a)((function(e){return{root:{overflowY:"scroll",backgroundColor:e.palette.background.paper}}})),pe=function(e){var a=e.users,t=me();return r.a.createElement(ce.a,{className:t.root,dense:!1},Object.values(a).filter(Boolean).map((function(e){var a=e.username,t=e.imageUrl;return r.a.createElement(Q.a,{key:a},r.a.createElement(Z.a,null,r.a.createElement(I.a,{alt:a,src:t})),r.a.createElement(X.a,{primary:a}))})))},de=Object(C.a)((function(e){var a;return{root:(a={display:"flex",paddingTop:"40px",flexDirectoion:"row"},Object(L.a)(a,"display","flex"),Object(L.a)(a,"overflow","none"),a),drawer:Object(L.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(L.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(L.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},toolbarHeader:{flexGrow:1,padding:e.spacing(3)},content:{width:"calc(100% - ".concat(240,"px)"),flex:1,display:"flex",flexDirection:"column"}}})),fe=function(e){var a=e.state,t=e.sendMessage,n=(Object(y.a)(e,["state","sendMessage"]),a.users),o=a.messages,c=a.error,s=a.username,l=de(),i=(Object(V.a)(),r.a.useState(!1)),u=Object(O.a)(i,2),m=u[0],p=u[1],d=r.a.createElement("div",null,r.a.createElement("div",{className:l.toolbar},r.a.createElement("div",{className:l.toolbarHeader},"Logged In Users")),r.a.createElement(J.a,null),r.a.createElement(pe,{users:n})),f=void 0!==window?function(){return window.document.body}:void 0;return r.a.createElement("div",{className:l.root},r.a.createElement(G.a,null),r.a.createElement("div",{className:l.drawer},r.a.createElement(z.a,{smUp:!0,implementation:"css"},r.a.createElement(W.a,{container:f,variant:"temporary",anchor:"left",open:m,onClose:function(){p(!m)},classes:{paper:l.drawerPaper},ModalProps:{keepMounted:!0}},d)),r.a.createElement(z.a,{xsDown:!0,implementation:"css"},r.a.createElement(W.a,{classes:{paper:l.drawerPaper},variant:"permanent",open:!0},d))),r.a.createElement("div",{className:l.content},r.a.createElement(A.a,{position:"fixed",className:l.appBar},r.a.createElement(H.a,{className:l.appBar},r.a.createElement(K.a,{variant:"h6",noWrap:!0},"Mini-Clip Chat"))),r.a.createElement(le,{users:n,messages:o}),r.a.createElement(ue,{error:c,sendMessage:t,username:s})))},be=t(32),ge=t.n(be),ve=t(59),je=t(11),Ee=t(60),Oe=function(e,a){return function(e,a,t){return{username:e,sent_at:a,message:t}}("System",new Date,function(e){var a;return a={},Object(L.a)(a,p,"".concat(e," joined the room.")),Object(L.a)(a,d,"".concat(e," left the room.")),a}(a)[e])},ye={error:"",messages:[],username:"",imageUrl:"",users:[],loading:!1},he=function(e,a){var t=a.type,n=a.payload,r=n.user;switch(t){case f:var o=n.error;return Object(je.a)(Object(je.a)({},e),{},{error:o,loading:!1});case b:var c=n.message;return Object(je.a)(Object(je.a)({},e),{},{error:"",loading:!1,messages:[].concat(Object(Ee.a)(e.messages),[c])});case m:var s=n.room,l=n.username;return Object(je.a)(Object(je.a)(Object(je.a)({},e),s),{},{loading:!0,username:l,error:""});case d:return Object(je.a)(Object(je.a)({},e),{},{users:Object(je.a)(Object(je.a)({},e.users),{},Object(L.a)({},r.username,null)),messages:[].concat(Object(Ee.a)(e.messages),[Oe(d,r.username)]),loading:!1,error:""});case p:return Object(je.a)(Object(je.a)({},e),{},{error:"",loading:!1,messages:[].concat(Object(Ee.a)(e.messages),[Oe(p,r.username)]),users:Object(je.a)(Object(je.a)({},e.users),{},Object(L.a)({},r.username,r))});case g:var i=n.imageUrl;return Object(je.a)(Object(je.a)({},e),{},{imageUrl:i,error:"",loading:!1});case j:var u=n.loading;return Object(je.a)(Object(je.a)({},e),{},{loading:u});case v:return Object(je.a)({},ye);default:return e}},we=function(){var e=Object(n.useReducer)(he,Object(je.a)({},ye)),a=Object(O.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(!1),c=Object(O.a)(o,2),s=c[0],l=c[1],i=t.username;Object(n.useEffect)((function(){i&&!s&&(!function(e,a){E.on("message",(function(a){e({type:b,payload:{message:a}})})),E.on("joinedRoom",(function(a){e({type:p,payload:{user:a}})})),E.on("leftRoom",(function(t){a===t.username?e({type:v,payload:{}}):e({type:d,payload:{user:t}})})),E.on("error",(function(e){console.log(e)}))}(r,i),l(!0))}),[i,s]);var u=Object(n.useCallback)(function(){var e=Object(ve.a)(ge.a.mark((function e(a,t){return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.emit("joinRoom",{username:a,imageUrl:t},(function(e,t){t?r({type:f,payload:{error:t}}):(r({type:m,payload:{room:e,username:a}}),l(!0))}));case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),[]),y={sendMessage:Object(n.useCallback)((function(e){E.emit("sendMessage",{username:i,message:e},(function(e,a){r(a?{type:f,payload:{error:a}}:{type:b,payload:{message:e}})}))}),[i]),joinRoom:u,setProfileImage:function(){var e=Object(ve.a)(ge.a.mark((function e(a){var t;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a.size>4e6)){e.next=5;break}r({type:f,payload:{error:"File Too Big"}}),e.next=11;break;case 5:return e.next=7,r({type:j,payload:{loading:!0}});case 7:(t=new FileReader).onload=function(){var e=Object(ve.a)(ge.a.mark((function e(a){var t;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target.result,r({type:g,payload:{imageUrl:t}});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t.readAsDataURL(a);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),r({type:f,payload:{error:"File Format Not Supported"}});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(a){return e.apply(this,arguments)}}()};return Object(je.a)({state:t},y)},xe=function(){var e=we();return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,e),r.a.createElement(fe,e))};var ke=function(){return r.a.createElement(xe,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.2095a920.chunk.js.map