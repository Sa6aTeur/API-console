(this["webpackJsonpreact-sendsay-console"]=this["webpackJsonpreact-sendsay-console"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/cancelFulScr.8f9c9ecd.svg"},101:function(e,t,a){e.exports=a.p+"static/media/full-screen.aea039be.svg"},102:function(e,t,a){e.exports=a.p+"static/media/format.7ac10753.svg"},103:function(e,t,a){e.exports=a.p+"static/media/EllipseGreen.c654d965.svg"},104:function(e,t,a){e.exports=a.p+"static/media/EllipseRed.d20475ce.svg"},108:function(e,t,a){e.exports=a(218)},113:function(e,t,a){},114:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(88),i=a.n(o),l=(a(113),a(114),a(57)),c=a(7),s=a(4),u=a(28),d=a(233),m=a(235),p=Object(d.a)((function(e){return{root:{height:"100%",width:"520px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}})),g=function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=p();return r.a.createElement(m.a,Object.assign({container:"main",maxWidth:"md",className:n.root},a),t)},f=Object(d.a)((function(e){return{root:{width:"520px",display:"flex",flexDirection:"column",left:"calc(50% - 520px / 2)",background:"#ffffff",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)",borderRadius:"5px",padding:"30px 30px"}}}));var b=function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=f();return r.a.createElement("form",Object.assign({className:n.root},a)," ",t," ")},x=a(236),h=a(9),v=Object(d.a)((function(e){return{root:{width:"460px",height:"40px",left:"calc(50% - 460px/2)",marginBottom:"25px",display:"flex",background:"#FFFFFF",paddingLeft:"7px",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"5px"},span:{display:"flex",marginBottom:"5px",fontSize:"16px"},error:{border:"1px solid red"},spanerror:{color:"red"}}})),E=Object(n.forwardRef)((function(e,t){var a=v();return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:Object(h.a)(a.span,e.iserror&&a.spanerror)},e.span),r.a.createElement(x.a,Object.assign({className:Object(h.a)(a.root,e.iserror&&a.error),disableUnderline:!0,ref:t},e)))})),y=Object(d.a)((function(e){return{root:{width:"110px",height:"40px",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4",borderRadius:"5px",border:"none","&:hover":{background:"linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;"},"&:active":{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;"}}}}));var O=function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=y();return r.a.createElement("button",Object.assign({type:"submit",className:n.root},a),t)},w=a(23),j=a(2),N=a(93),S=new(a.n(N).a);S.setSessionFromCookie("sendsay_session");var k=function e(){Object(j.a)(this,e)};k.sendsay=S;var C=function(e){return k.sendsay.login({login:e.login,sublogin:e.sublogin,password:e.password})},R=a(105),B=a(11),I=a(94),T=a.n(I),q=Object(n.createContext)(),L=function(e){var t=e.children,a=JSON.parse(localStorage.getItem("loginData")),o=Object(n.useState)(Object(B.a)({loading:!1},a)),i=Object(s.a)(o,2),l=i[0],c=i[1];return r.a.createElement(q.Provider,{value:{loginData:l,setLoginData:function(e){c((function(t){return Object(B.a)({},t,{},e)}))},login:function(e){document.cookie="sendsay_session=".concat(k.sendsay.session);var t=k.sendsay.session,a=e.login,n=e.sublogin;window.localStorage.setItem("loginData",JSON.stringify({login:a,sublogin:n,sessionKey:t})),c((function(a){return Object(B.a)({},a,{},e,{sessionKey:t})}))},logout:function(){c((function(e){return Object(B.a)({},e,{login:"",sublogin:"",sessionKey:""})})),T.a.remove("sendsay_session"),window.localStorage.removeItem("loginData"),window.localStorage.removeItem("consoleData")}}},t)},D=function(){return Object(n.useContext)(q)},F=Object(d.a)((function(e){return{root:{background:"rgba(207, 44, 0, 0.1)",borderRadius:"5px",padding:"10px 10px",marginBottom:"10px"},wrap:{display:"flex",alignItems:"flex-start"},titleWrap:{padding:"0 10px"},span:{padding:"0",color:"#CF2C00",fontSize:"12px",margin:"0"},title:{padding:"0",margin:"0",color:"#CF2C00",fontSize:"18px"}}})),W=a(95),G=a.n(W);var _=function(e){var t=F();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.wrap},r.a.createElement("img",{alt:"error",src:G.a}),r.a.createElement("div",{className:t.titleWrap},r.a.createElement("h3",{className:t.title},e.title),r.a.createElement("span",{className:t.span},e.message))))},J=a(49),M=J.a().shape({login:J.b().required(),password:J.b().required()}),U=Object(d.a)((function(e){return{headerText:{fontWeight:"400",fontSize:"24px",marginBottom:"30px"},logo:{marginBottom:"20px"}}}));var z=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"var(--spinner-color)",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto",fill:"var(--spinner-color)"},width:"24px",height:"24px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.a.createElement("g",{transform:"rotate(0 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(30 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(60 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(90 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(120 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(150 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(180 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(210 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(240 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(270 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(300 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(330 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"4.32",width:"6",height:"12",fill:"var(--spinner-color)"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))))},P={LOGO_TITLE:"API-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043a\u0430",REQUEST_NAME:"\u0417\u0430\u043f\u0440\u043e\u0441",SEND:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",LOGIN_BUTTON:"\u0412\u043e\u0439\u0442\u0438",LOGOUT_BUTTON:"\u0412\u044b\u0439\u0442\u0438",LOGIN:"\u041b\u043e\u0433\u0438\u043d",SUBLOGIN:"\u0421\u0443\u0431\u043b\u043e\u0433\u0438\u043d",PASSWORD:"\u041f\u0430\u0440\u043e\u043b\u044c",LOGIN_ERROR:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430",REQUEST:"\u0417\u0430\u043f\u0440\u043e\u0441",RESPONSE:"\u041e\u0442\u0432\u0435\u0442",FORMATTING:"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",DO_REQUEST:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c",COPY:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",COPIED:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e",DELETE:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"};var A=Object(c.g)((function(e){var t,a,o,i=e.history,l=Object(n.useState)({}),c=Object(s.a)(l,2),u=c[0],d=c[1],m=D(),p=m.loginData,f=m.setLoginData,x=m.login,h=p.loading,v=p.sessionKey,y=U(),j=!!(null===v||void 0===v?void 0:v.length),N=!!u.id;Object(n.useEffect)((function(){j&&i.push("/console")}),[i,j]);var S=Object(w.d)({mode:"onBlur",resolver:Object(R.a)(M)}),k=S.register,B=S.handleSubmit,I=S.formState.errors;return j?r.a.createElement(r.a.Fragment,null):r.a.createElement(g,null,r.a.createElement("img",{src:"/icons/logo.svg",alt:"",className:y.logo}),r.a.createElement(b,{onSubmit:B((function(e){f({loading:!0}),C(e).then((function(t){x({login:e.login,sublogin:e.sublogin}),f({loading:!1})})).catch((function(e){document.cookie="",f({loading:!1}),d(e)}))}))},r.a.createElement("h1",{className:y.headerText},P.LOGO_TITLE),N&&r.a.createElement(_,{title:P.LOGIN_ERROR,message:null===u||void 0===u?void 0:u.explain}),r.a.createElement(E,Object.assign({},k("login"),{name:"login",id:"login",span:P.LOGIN,type:"text",iserror:null===I||void 0===I?void 0:I.login,errormessage:null===I||void 0===I||null===(t=I.login)||void 0===t?void 0:t.message})),r.a.createElement(E,Object.assign({},k("sublogin"),{name:"sublogin",id:"sublogin",span:P.SUBLOGIN,type:"text",iserror:null===I||void 0===I?void 0:I.sublogin,errormessage:null===I||void 0===I||null===(a=I.sublogin)||void 0===a?void 0:a.message})),r.a.createElement(E,Object.assign({},k("password"),{name:"password",id:"password",span:P.PASSWORD,type:"text",iserror:null===I||void 0===I?void 0:I.password,errormessage:null===I||void 0===I||null===(o=I.password)||void 0===o?void 0:o.message})),r.a.createElement(O,{type:"submit"},h?r.a.createElement(z,null):P.LOGIN_BUTTON)))})),Y=Object(d.a)((function(e){return{root:{display:"flex",alignItems:"center",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",justifyContent:"space-between",width:"100%",padding:"10px 15px",background:"#E5E5E5","& h3":{fontWeight:"400"},"& div":{display:"flex",alignItems:"center"}},logo:{marginRight:"15px"},loginBlock:{display:"flex",marginRight:"30px",alignItems:"center",padding:"5px 10px",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"5px"},cancelBlock:{display:"flex",alignItems:"center",marginRight:"30px","& span":{marginRight:"7px"},"&:hover":{cursor:"pointer","& img":{transform:"translateY(-2px)  translateX(2px)",transition:" 0.3s "}}},fullscreen:{minWidth:"20px",minHeight:"20px","& img":{width:"18px",height:"18px"},"&:hover":{cursor:"pointer","& img":{width:"20px",height:"20px",transition:" 0.15s "}}},cancelFullscreen:{minWidth:"20px",minHeight:"20px","&:hover":{cursor:"pointer","& img":{width:"18px",height:"18px",transition:" 0.15s "}}}}})),H=a(99),Q=a.n(H),K=a(100),V=a.n(K),X=a(101),Z=a.n(X);var $=function(){return r.a.createElement("svg",{width:"115",height:"30",viewBox:"0 0 115 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"15",cy:"15",r:"15",fill:"var(--logo-color)"}),r.a.createElement("circle",{cx:"70",cy:"15",r:"15",fill:"var(--logo-color)"}),r.a.createElement("rect",{x:"35",width:"15",height:"30",fill:"var(--logo-color)"}),r.a.createElement("path",{d:"M100 0H115L100 30H85L100 0Z",fill:"var(--logo-color)"}))};var ee=function(){var e=D(),t=e.loginData,a=e.logout,o=t.login,i=t.sublogin,l=Y(),u=Object(c.f)(),d=Object(n.useState)(!1),m=Object(s.a)(d,2),p=m[0],g=m[1];return r.a.createElement("div",{className:l.root},r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement("h3",null,P.LOGO_TITLE)),r.a.createElement("div",null,r.a.createElement("div",{className:l.loginBlock},r.a.createElement("span",null,o)," ",i&&r.a.createElement("span",null," : ",i)),r.a.createElement("div",{className:l.cancelBlock,onClick:function(){a(),u.push("/")}},r.a.createElement("span",null,P.LOGOUT_BUTTON),r.a.createElement("img",{height:22,width:22,className:l.cancel,src:Q.a,alt:"logout"})),p?r.a.createElement("div",{className:l.cancelFullscreen,onClick:function(){document.exitFullscreen(),g(!1)}},r.a.createElement("img",{src:V.a,alt:"fullscreeen"})):r.a.createElement("div",{className:l.fullscreen,onClick:function(){document.documentElement.requestFullscreen(),g(!0)}},r.a.createElement("img",{src:Z.a,alt:"fullscreeen"}))))},te=Object(d.a)((function(e){return{wrap:{display:"flex",flexDirection:"column",width:"100%",backgroundColor:"#fff",height:"100%"},root:{display:"flex",justifyContent:"space-between",width:"100%",backgroundColor:"#fff",padding:"10px 15px",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",height:"100%"},imgWrap:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flex:"1"},blockWrap:{display:"flex",flexDirection:"column",width:"49.7%"},reqresBlock:{border:"1px solid rgba(0, 0, 0, 0.2)",width:"100%",borderRadius:"5px",padding:"10px 10px",height:"100%","& textarea":{width:"100%",height:"100%",border:"none",overflow:"auto",outline:"none",boxShadow:"none",fontSize:"14px"},"& pre":{width:"100%",height:"100%",border:"none",overflow:"auto",outline:"none",boxShadow:"none",fontSize:"14px"}},submitBlock:{padding:"10px 15px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between","& a":{textDecoration:"none",color:"#999999"}},formatingBlock:{display:"flex",alignItems:"center",justifyContent:"space-between","& span":{fontSize:"14px",marginLeft:"5px"},"&:hover":{cursor:"pointer","& img":{transform:"translateY(-2px)  translateX(2px)",transition:" 0.3s "}}},span:{color:"#999999",fontSize:"14px"},errorBlock:{border:"1px solid red"},error:{color:"red"}}})),ae=a(3),ne=Object(n.createContext)(),re=function(e){var t=e.children,a=JSON.parse(localStorage.getItem("consoleData")),o=Object(n.useState)(""),i=Object(s.a)(o,2),l=i[0],c=i[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),m=d[0],p=d[1],g=Object(n.useState)(Object(B.a)({requests:[]},a,{loading:!1,currentRequest:null})),f=Object(s.a)(g,2),b=f[0],x=f[1];return r.a.createElement(ne.Provider,{value:{consoleData:b,requestInputValue:l,needSubmit:m,setNeedSubmit:p,setRequestInputValue:c,setConsoleData:function(e){x((function(t){return Object(B.a)({},t,{},e)}))},deleteRequest:function(e){var t=b.requests.filter((function(t){return t.name!==e}));x({requests:t}),localStorage.setItem("consoleData",JSON.stringify({requests:Object(ae.a)(t)}))},copyRequest:function(e){var t=b.requests.find((function(t){return t.name===e}));navigator.clipboard.writeText(JSON.stringify(t.request,null,"\t"))},deleteHistory:function(){x((function(e){return Object(B.a)({},e,{requests:[]})})),localStorage.setItem("consoleData",JSON.stringify({requests:[]}))},doRequest:function(e){var t=b.requests.find((function(t){return t.name===e}));c(JSON.stringify(t.request,null,"\t")),p(!0)},addRequest:function(e){var t={name:e.request.action,request:e.request,response:e.response,success:e.success},a=b.requests.filter((function(e){return e.name!==t.name}));a.length>15&&a.splice(15),a.unshift(t),x((function(e){return Object(B.a)({},e,{requests:Object(ae.a)(a)})})),localStorage.setItem("consoleData",JSON.stringify({requests:Object(ae.a)(a)}))}}},t)},oe=function(){return Object(n.useContext)(ne)},ie=a(46),le=a.n(ie),ce=a(102),se=a.n(ce);var ue=function(){var e=te(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(!1),c=Object(s.a)(l,2),u=c[0],d=c[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),g=p[0],f=p[1],b=oe(),x=b.addRequest,v=b.requestInputValue,E=b.setRequestInputValue,y=b.needSubmit,w=b.setNeedSubmit,j=Object(n.useCallback)((function(){d(!1);try{var e=JSON.parse(v);k.sendsay.request(e).then((function(t){x({request:Object(B.a)({},e),response:Object(B.a)({},t),success:!0}),f(JSON.stringify(t,null,"\t"))})).catch((function(t){x({request:Object(B.a)({},e),response:Object(B.a)({},t),success:!1}),d(!0),f(JSON.stringify(t,null,"\t"))}))}catch(t){f(""),i(!0)}}),[v,x]);return Object(n.useEffect)((function(){y&&(j(),w(!1))}),[y,j,w]),r.a.createElement("div",{className:e.wrap},r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.blockWrap},r.a.createElement("span",{className:Object(h.a)(e.span,o&&e.error)},P.REQUEST),r.a.createElement("div",{className:Object(h.a)(e.reqresBlock,o&&e.errorBlock)},r.a.createElement("textarea",{name:"requestInput",id:"requestInput",value:v,type:"text",onChange:function(e){o&&i(!1),E(e.target.value)}}))),r.a.createElement("div",{className:e.imgWrap},r.a.createElement("img",{src:le.a,alt:"dots"})),r.a.createElement("div",{className:e.blockWrap},r.a.createElement("span",{className:Object(h.a)(e.span,u&&e.error)},P.RESPONSE),r.a.createElement("div",{className:Object(h.a)(e.reqresBlock,u&&e.errorBlock)},r.a.createElement("pre",null,g)))),r.a.createElement("div",{className:e.submitBlock},r.a.createElement(O,{type:"submit",onClick:j},P.SEND),r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:"https://github.com/Sa6aTeur"},"@github.com/Sa6aTeur")),r.a.createElement("div",{className:e.formatingBlock,onClick:function(){try{E(JSON.stringify(JSON.parse(v),null,"\t"))}catch(e){i(!0)}}},r.a.createElement("img",{src:se.a,alt:"format"}),r.a.createElement("span",null,P.FORMATTING))))},de=Object(d.a)((function(e){return{rel:{display:"flex",position:"relative",alignItems:"center",padding:"3px 5px",background:"#fff",borderRadius:"5px",marginRight:"5px"},dotsWrap:{display:"flex",position:"relative",padding:"0 0 0 5px","&:hover":{cursor:"pointer"}},copyWrap:{position:"absolute",borderRadius:"5px",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-90%)",zIndex:"5",pading:"2px 2px",background:"rgba(246, 246, 246, 1)"},copySpan:{fontSize:"10px"},imgWrap:{marginRight:"7px"},dropdown:{position:"fixed",display:"none",top:"0",left:"0",zIndex:"10",boxShadow:"0px 1px 4px rgba(0, 0, 0, 0.25)"},dropdownButton:{width:"90px",height:"30px",borderRadius:"0",border:"none",background:"#fff"},blueButton:{"&:hover":{background:"#0055FB",color:"#fff"}},redButton:{"&:hover":{background:"#CF2C00",color:"#fff"}}}}));var me=a(103),pe=a.n(me),ge=a(104),fe=a.n(ge),be=Object(d.a)((function(e){return{root:{borderTop:"1px solid rgba(0, 0, 0, 0.2)"}}}));var xe=function(e){var t=be();return r.a.createElement("div",{className:t.root},r.a.createElement("button",e,e.name))};var he=function(e){var t=e.name,a=e.success,o=(e.customref,e.onDelete,oe()),i=o.deleteRequest,l=o.copyRequest,c=o.doRequest,u=de(),d=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=function(){var a=t.current.getBoundingClientRect();e.current.style.top=String(Math.round(a.y+20))+"px",e.current.style.left=String(Math.round(a.x-20))+"px"},r=function(){var a=t.current.getBoundingClientRect();"none"===e.current.style.display||""===e.current.style.display?(e.current.style.top=String(Math.round(a.y+20))+"px",e.current.style.left=String(Math.round(a.x-20))+"px",e.current.style.display="block"):e.current.style.display="none"},o=function(a){!e.current||e.current.contains(a.target)||t.current.contains(a.target)||(e.current.style.display="none")};return Object(n.useEffect)((function(){var e=document.getElementById("scroll"),n=t.current;if(n&&e)return n.addEventListener("click",r),e.addEventListener("scroll",a),document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){n.removeEventListener("click",r),e.removeEventListener("scroll",a),document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}}),[]),[t,e]}(),m=Object(s.a)(d,2),p=m[0],g=m[1],f=Object(n.useState)(!1),b=Object(s.a)(f,2),x=b[0],v=b[1];return r.a.createElement("div",{className:u.rel},r.a.createElement("div",{className:u.imgWrap},a?r.a.createElement("img",{src:pe.a,alt:"green"}):r.a.createElement("img",{src:fe.a,alt:"red"})),x&&r.a.createElement("div",{className:u.copyWrap},r.a.createElement("span",{className:u.copySpan},P.COPIED)),r.a.createElement("span",null,t),r.a.createElement("div",{ref:p,className:u.dotsWrap},r.a.createElement("img",{src:le.a,alt:"dots"}),r.a.createElement("ul",{ref:g,className:u.dropdown},r.a.createElement(xe,{name:P.DO_REQUEST,onClick:function(){return c(t)},className:Object(h.a)(u.dropdownButton,u.blueButton)}),r.a.createElement(xe,{name:P.COPY,onClick:function(){l(t),v(!0),setInterval((function(){return v(!1)}),1e3)},className:Object(h.a)(u.dropdownButton,u.blueButton)}),r.a.createElement(xe,{name:P.DELETE,onClick:function(){return i(t)},className:Object(h.a)(u.dropdownButton,u.redButton)}))))},ve=Object(d.a)((function(e){return{root:{display:"flex",width:"100%",padding:"5px 0 5px 15px",alignItems:"center",position:"relative"},content:{width:"100%",height:"25px",overflow:"scroll",overflowY:"hidden",display:"flex",position:"relative","&::-webkit-scrollbar":{display:"none"}},gradient:{height:"40px",width:"10px",top:"0",right:"30px",position:"absolute",background:"linear-gradient(269.93deg, #F6F6F6 0.16%, rgba(246, 246, 246, 0.1) 99.93%)"},cross:{display:"flex",padding:"5px 5px"}}})),Ee=Object(d.a)((function(e){return{root:{display:"flex",padding:"5px 5px","&:hover":{cursor:"pointer"}}}}));var ye=function(e){var t=Ee();return r.a.createElement("div",Object.assign({className:t.root},e),r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"var(--cross-color)",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M1 1L19 19",stroke:"var(--cross-color)","stroke-width":"2","stroke-linecap":"round"}),r.a.createElement("path",{d:"M19 1L1 19",stroke:"var(--cross-color)","stroke-width":"2","stroke-linecap":"round"})))};var Oe=function(){var e=ve(),t=oe(),a=t.consoleData,n=t.deleteHistory,o=a.requests;return r.a.createElement("div",{className:e.root},r.a.createElement("div",{id:"scroll",className:e.content},o.map((function(e){return r.a.createElement(he,Object.assign({},e,{key:Math.random()}))}))),r.a.createElement("div",{className:e.gradient}),r.a.createElement(ye,{onClick:n}))},we=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column",flex:"1"}}}));var je=function(){var e=we();return r.a.createElement("div",{className:e.root},r.a.createElement(ee,null),r.a.createElement(Oe,null),r.a.createElement(ue,null))};var Ne=function(){return r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(L,null,r.a.createElement(re,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(A,null)),r.a.createElement(c.a,{path:"/console"},r.a.createElement(je,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){e.exports=a.p+"static/media/dots.81115c81.svg"},95:function(e,t,a){e.exports=a.p+"static/media/meh.aeb66b10.svg"},99:function(e,t,a){e.exports=a.p+"static/media/log-out.6fb60e45.svg"}},[[108,1,2]]]);
//# sourceMappingURL=main.9294e545.chunk.js.map