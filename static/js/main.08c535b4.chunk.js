(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/photo.afa32bb7.png"},26:function(e,t,a){e.exports=a(65)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=a(1),c=a(2),s=a(4),u=a(3),p=a(5),m=a(24),v=a.n(m),h=(a(44),a(45),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-left"}),r.a.createElement("div",{className:"bottom-left"}),r.a.createElement("div",{className:"top-right"}),r.a.createElement("div",{className:"bottom-right"}))}}]),t}(n.Component)),d=(a(46),a(47),a(8)),y=(a(55),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay}};return r.a.createElement("div",{style:e.container},r.a.createElement("div",{className:"menu-item"},r.a.createElement(d.Link,{to:this.props.children,smooth:!0,duration:800,isDynamic:!0,onClick:this.props.onClick},this.props.children)),r.a.createElement("div",{className:"line"}))}}]),t}(n.Component)),b=a(10),f=(a(56),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!!a.props.open&&a.props.open,color:a.props.color?a.props.color:"black"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={buttonWrapper:{background:this.state.open?"inherit":"white",transitionDelay:this.state.open?null:"1s"},line:{height:"2px",width:"20px",background:this.state.open?"white":"black",transition:"all 0.7s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return r.a.createElement("div",{className:"button-wrapper d-flex justify-content-center fixed-top",style:Object(b.a)({},t.buttonWrapper)},r.a.createElement("div",{className:"menu-button",onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},r.a.createElement("div",{style:Object(b.a)({},t.line,t.lineTop)}),r.a.createElement("div",{style:Object(b.a)({},t.line,t.lineMiddle)}),r.a.createElement("div",{style:Object(b.a)({},t.line,t.lineBottom)})))}}]),t}(n.Component)),j=(a(57),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!!a.props.open&&a.props.open},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{position:"fixed",top:0,left:0,height:this.state.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"black",opacity:.96,color:"#fafafa",transition:"height 0.7s ease",zIndex:1},menuList:{paddingTop:"3rem"}};return r.a.createElement("div",{style:e.container},this.state.open?r.a.createElement("div",{style:e.menuList},this.props.children):null)}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={menuOpen:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t=["About","Timeline","Skills","Work","Contact Me"].map(function(t,a){return r.a.createElement(y,{key:a,delay:"".concat(.1*a,"s"),onClick:function(){e.handleLinkClick()}},t)});return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()}}),r.a.createElement("div",{className:"is-empty-elem"}),r.a.createElement(j,{open:this.state.menuOpen},t))}}]),t}(n.Component),k=(a(58),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-main d-flex justify-content-center align-items-center flex-column"},r.a.createElement("h1",null,"VLADYSLAV LIETUN"),r.a.createElement("p",null,"I'm a Full Stack Developer living in Kiev. Computers and technology were always a passion for me, but I found myself in development, so I decided to follow this path professionally, always giving the best of myself."),r.a.createElement(d.Link,{to:"About",smooth:!0,duration:800,isDynamic:!0,onClick:this.props.onClick},r.a.createElement("button",{className:"btn btn-lg"},"About")))}}]),t}(n.Component)),O=(a(59),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"downArrow bounce"},r.a.createElement(d.Link,{to:"About",smooth:!0,duration:800,isDynamic:!0,onClick:this.props.onClick},r.a.createElement("img",{alt:"arrow",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="})))}}]),t}(n.Component)),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"main-wrapper d-flex justify-content-between flex-column"},r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(O,null))}}]),t}(n.Component),w=(a(60),a(25)),M=a.n(w),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"about",id:"About"},r.a.createElement("div",{className:"about__wrapper"},r.a.createElement("img",{className:"about__wrapper__img",src:M.a,alt:""}),r.a.createElement("a",{href:"https://www.instagram.com/lietunvlad/",className:"about__wrapper__link d-flex justify-content-center align-items-center"},r.a.createElement("i",{className:"fab fa-instagram fa-3x"}))),r.a.createElement("div",{className:"about__description row"},r.a.createElement("div",{className:"about__description__wrapper col-md-4 mb-5"},r.a.createElement("h3",{className:"about__description__wrapper__title"},"I am hardworking"),r.a.createElement("p",null,"I believe that hard work is the path to success. That is why I make every day efforts to become one step higher. I never give up, even when difficult times come.",r.a.createElement("br",null),r.a.createElement("i",null,'"It takes 20 years to become an overnight success\u201d - Eddie Cantor'))),r.a.createElement("div",{className:"about__description__wrapper col-md-4 mb-5"},r.a.createElement("h3",null,"I am purposeful"),r.a.createElement("p",null,"Every person should have a goal in life, should strive for this goal and not give up. My long run goal is to contribute to products that solve real-world problems. I strive to become a part organizations and apply all your efforts and skills to achieve a positive result.")),r.a.createElement("div",{className:"about__description__wrapper col-md-4 mb-5"},r.a.createElement("h3",null,"I am talented"),r.a.createElement("p",null,"Hard work is a talent. Effort is driven by character traits like how ambitious, driven, self-disciplined, or focused you are. So it could be argued that the ability to give great effort is in fact a talent."))))}}]),t}(n.Component),N=(a(61),a(62),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={dot:{backgroundColor:"#ccc",border:"1px solid #ccc"}},t=this.props.content.map(function(t,a){return r.a.createElement("article",{className:"event",key:a},r.a.createElement("span",{className:"dot",style:t.month?null:e.dot}),r.a.createElement("span",{className:"event-month"},t.month),r.a.createElement("a",{href:t.url,className:"event-title"},t.title))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"event-wrapper row"},r.a.createElement("div",{className:"event-year d-flex justify-content-end col-4"},r.a.createElement("h3",null,this.props.year)),r.a.createElement("div",{className:"event-content col-8"},t)))}}]),t}(n.Component)),L=[{eventYear:{year:"2019",content:[{month:"",title:"",url:""},{month:"jun",title:"Startup NDB with Java Spring",url:"javascript: void(0)"},{month:"may",title:"Master's degree, Institute of High Technologies, KNU",url:"javascript: void(0)"},{month:"may",title:"Google keep on NodeJS",url:"javascript: void(0)"},{month:"apr",title:"Create react App (to do list)",url:"javascript: void(0)"},{month:"mar",title:"Tinder web application, team work",url:"javascript: void(0)"},{month:"feb",title:"Console Java application for booking air tickets",url:"javascript: void(0)"}]}},{eventYear:{year:"2018",content:[{month:"",title:"",url:""},{month:"nov",title:"Teamwork, Forkio project",url:"javascript: void(0)"},{month:"sep",title:"First web project (The Ham)",url:"javascript: void(0)"},{month:"jul",title:"Course Full Stack Developer DAN.IT education",url:"javascript: void(0)"}]}},{eventYear:{year:"2017",content:[{month:"",title:"",url:""},{month:"sep",title:"Trip to my mother in Greece, a long-awaited meeting 7 years later...",url:"javascript: void(0)"},{month:"jul",title:"Bachelor of Science, Physics",url:"javascript: void(0)"}]}},{eventYear:{year:"2015",content:[{month:"",title:"",url:""},{month:"jun",title:"Freelance. 3d artist architecture designer",url:"javascript: void(0)"}]}},{eventYear:{year:"2014",content:[{month:"",title:"",url:""},{month:"nov",title:"The dream of a startup game. Developer + 3d artist",url:"javascript: void(0)"}]}},{eventYear:{year:"2013",content:[{month:"",title:"",url:""},{month:"sep",title:"Hello, adult life. Relocate to Kiev, Ukraine",url:"javascript: void(0)"},{month:"aug",title:"I'm a young physicist, entering to the T. Shevchenko National University of Kyiv",url:"javascript: void(0)"},{month:"apr",title:"Second place in the city's football championship",url:"javascript: void(0)"},{month:"feb",title:"Winner city competitions GZR",url:"javascript: void(0)"}]}},{eventYear:{year:"2012",content:[{month:"",title:"",url:""},{month:"sep",title:"Immersion in education, training for ZNO",url:"javascript: void(0)"}]}},{eventYear:{year:"2007",content:[{month:"",title:"",url:""},{month:"sep",title:"Visit to the first math olympiad",url:"javascript: void(0)"},{month:"jun",title:"Yard football, the dream of becoming a professional football player",url:"javascript: void(0)"},{month:"mar",title:"First computer. Counter strike 1.6, NFS, Generals",url:"javascript: void(0)"}]}},{eventYear:{year:"2002",content:[{month:"",title:"",url:""},{month:"aug",title:"Relocate to Lugansk, Ukraine and went to the school",url:"javascript: void(0)"}]}},{eventYear:{year:"1995",content:[{month:"",title:"",url:"javascript: void(0)"},{month:"mar",title:"Hello, World! I was born in Sovetsk, Russia",url:"javascript: void(0)"}]}}],I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=L.map(function(e,t){return r.a.createElement(N,{key:t,year:e.eventYear.year,content:e.eventYear.content.map(function(e){return e})})});return r.a.createElement("section",{className:"timeline-overview",id:"Timeline"},e)}}]),t}(n.Component),S=(a(63),a(64),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.level;return r.a.createElement("div",{className:"skill"},r.a.createElement("span",{className:"skill-title"},t),r.a.createElement("span",{className:"skill-percent"},a,"%"),r.a.createElement("div",{className:"skill-line",style:{width:"".concat(a,"%")}}))}}]),t}(n.Component)),D=[{type:"Java Core",level:85},{type:"Java EE",level:80},{type:"OOP",level:80},{type:"Spring Boot",level:70},{type:"Spring MVC",level:70},{type:"Hibernate",level:70},{type:"SQL",level:75},{type:"NodeJS",level:65}],T=[{type:"HTML",level:90},{type:"CSS",level:90},{type:"JavaScript",level:80},{type:"jQuery",level:80},{type:"Bootstrap",level:90},{type:"React.js",level:80},{type:"Photoshop",level:95},{type:"Web Design",level:80}],z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=D.map(function(e,t){return r.a.createElement(S,{key:t,type:e.type,level:e.level})}),t=T.map(function(e,t){return r.a.createElement(S,{key:t,type:e.type,level:e.level})});return r.a.createElement("section",{className:"skill-bar row",id:"Skills"},r.a.createElement("div",{className:"skill-bar-data col-12 col-md-6 pr-md-5"},r.a.createElement("h2",null,"front end"),t),r.a.createElement("div",{className:"skill-bar-data col-12 col-md-6 pl-md-5"},r.a.createElement("h2",null,"back end"),e))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onLoaded",value:function(){var e=this;setTimeout(function(){e.setState({loading:!1})},1500)}},{key:"render",value:function(){var e=this.state.loading,t=e?r.a.createElement(h,{onLoaded:this.onLoaded()}):null,a=e?null:x;return r.a.createElement(r.a.Fragment,null,t,r.a.createElement(v.a,{transitionName:"example",transitionEnterTimeout:1500,transitionLeaveTimeout:300},a))}}]),t}(n.Component),x=r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(C,null),r.a.createElement(I,null),r.a.createElement(z,null)),_=A;o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.08c535b4.chunk.js.map