(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,a,t){e.exports=t(58)},44:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(10),r=t.n(l),s=(t(44),t(18)),o=t(19),c=t(23),m=t(20),u=t(24);var g=function(e){var a=e.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#skill"},"Skills")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#work"},"Experience")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#edu"},"Education")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"Hi, I'm ",a.name," "),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},a.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},a.socialLinks&&a.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.className})))})),i.a.createElement("br",null),i.a.createElement("a",{href:"/IIT(ISM)_Piyush Raj.pdf",target:"_blank",rel:"noopener noreferrer",style:{color:"white"}},i.a.createElement("button",{type:"social",style:{color:"white"}},"Download resume \xa0",i.a.createElement("i",{className:"fa fa-external-link"}))))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},i.a.createElement("i",{className:"icon-down-circle"})))))};t(46);var p=function(e){var a=e.resumeData;return i.a.createElement("section",{className:"timeline-container",id:"work"},i.a.createElement("div",{className:"timeline"},i.a.createElement("br",null),i.a.createElement("h3",{style:{color:"white",fontWeight:"bold"}}," ","Work Experience"),i.a.createElement("ul",null,a.work.map(function(e,a){return i.a.createElement("li",{key:a.toString()},i.a.createElement("span",null,e.duration),i.a.createElement("div",{className:"content"},i.a.createElement("a",{href:e.companyLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("h3",null,e.companyName," - ",e.position)),i.a.createElement("p",null,e.desc)))}))))};var h=function(e){var a=e.resumeData;return i.a.createElement("section",{id:"edu"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),i.a.createElement("div",{className:"nine columns main-col"},a.education&&a.education.map(function(e){return i.a.createElement("div",{className:"row item",key:e.duration},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.UniversityName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.duration," ")),i.a.createElement("p",null,e.Achievements)))}))))};t(48);var d=function(e){var a=e.skills;return i.a.createElement("div",{className:"skills-section"},i.a.createElement("div",{className:"skills-container"},a&&a.map(function(e){return i.a.createElement("div",{className:"skills-box",key:e.name},i.a.createElement("div",{className:"skills-title"},i.a.createElement("div",{className:"skills-img"},i.a.createElement("img",{src:e.img,alt:"",className:"skills-icons"})),i.a.createElement("h5",null,e.name)))})))};var E=function(e){var a=e.resumeData;return i.a.createElement("section",{id:"skill",style:{backgroundColor:"#ccc"}},i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"nine columns main-col"},a.skills.map(function(e){return i.a.createElement("div",{key:e.category},i.a.createElement("h4",null,e.category),i.a.createElement(d,{skills:e.list}))}))))},f=t(79),b=t(87),y=t(27),v=t(91),k=t(90),w=t(80),N=t(81),j=t(75),S=t(82),I=t(83),z=t(84),C=t(85),D=t(86),x=t(78),O=(t(50),function(e){var a=e.project,t=e.handleClose,l=function(e){"Escape"===e.key&&t()};return Object(n.useEffect)(function(){return window.addEventListener("keydown",l),function(){return window.removeEventListener("onkeydown",l)}}),i.a.createElement("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",overflow:"auto",margin:"0",zIndex:"100",display:"flex",backgroundColor:"rgba(100, 100, 100, 0.4)"}},i.a.createElement("div",{className:"modal"},i.a.createElement(j.a,{gutterBottom:!0,variant:"h2",component:"h2",style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.title),i.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h5",style:{display:"flex",justifyContent:"center",alignItems:"center",color:"black"}},a.des),a.points?i.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h5",style:{display:"flex",justifyContent:"center",alignItems:"center",color:"black"}},i.a.createElement("ul",null,a.points.map(function(e,a){return i.a.createElement("li",{key:a.toString()}," \u2022 ",e)}))," "):"",i.a.createElement(x.a,{variant:"outlined",color:"primary",onClick:t},"Close")))}),P=(t(54),{largeIcon:{width:35,height:35,color:"black"}});function B(e){var a=e.project,t=i.a.createRef(),l=Object(n.useState)(a.intro),r=Object(y.a)(l,2),s=r[0],o=r[1],c=Object(n.useState)(!1),m=Object(y.a)(c,2),u=m[0],g=m[1],p=function(){o(13*a.intro.length<=10*t.current.offsetWidth?a.intro:a.intro.slice(0,10*t.current.offsetWidth/15).trim()+"...")};Object(n.useEffect)(function(){return p(),window.addEventListener("resize",p),function(){return window.removeEventListener("resize",p)}});return i.a.createElement(f.a,{item:!0,xs:12,sm:6,md:4},i.a.createElement(k.a,null,i.a.createElement(w.a,{component:"img",className:"project-image",alt:a.title,image:a.imgurl,title:a.title}),i.a.createElement(N.a,null,i.a.createElement(j.a,{gutterBottom:!0,variant:"h4",component:"h2",className:"one-line"},a.title),i.a.createElement(j.a,{variant:"body2",component:"p",className:"description",ref:t,gutterBottom:!0,style:{fontSize:"16px"}},s),i.a.createElement("div",{className:"chip-container"},a.techstack.map(function(e,a){return i.a.createElement(v.a,{className:"chip",size:"small",label:e,color:"primary",key:a.toString(),style:{fontSize:"1.30rem",margin:"1px"}})}))),i.a.createElement(S.a,{disableSpacing:!0,className:"card-actions"},i.a.createElement(I.a,{title:"More Info","aria-label":"More Info",onClick:function(){g(!0)},style:P.largeIcon},i.a.createElement(z.a,{fontSize:"large"})),u?i.a.createElement(O,{project:a,handleClose:function(){g(!1)}}):null,i.a.createElement(I.a,{title:"View Live","aria-label":"Launch Application",target:"_blank",href:a.links.launch,style:P.largeIcon},i.a.createElement(C.a,{fontSize:"large"})),i.a.createElement(I.a,{title:"View Source Code","aria-label":"Source Code On Github",target:"_blank",href:a.links.github,style:P.largeIcon},i.a.createElement(D.a,{fontSize:"large"})))))}var M=Object(b.a)({"spacing-xs-4":{width:"inherit",margin:0}});var L=function(e){var a=M(),t=e.resumeData.portfolio;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("h2",{style:{color:"black",fontSize:"2.2rem",marginTop:"-20px"}},"Projects"),i.a.createElement(f.a,{container:!0,spacing:4,style:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},classes:{"spacing-xs-4":a["spacing-xs-4"]}},t&&t.map(function(e,a){return i.a.createElement(B,{project:e,key:a})})))},T=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"contact"},i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.url},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"}))))))}}]),a}(n.Component),A={name:"Piyush Raj",role:"Software Engineer",linkedinId:"https://www.linkedin.com/in/piyush-raj-1272b320b/",skypeid:"live:piyush",roleDescription:"I am a final year undergraduate currently pursuing a B.Tech in Electrical Engineering from IIT(ISM) Dhanbad. I aspire to become a Software Engineer. My hobbies include playing chess and badminton, as well as engaging in competitive coding in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/piyush-raj-1272b320b/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/razzPiyush",className:"fa fa-github"},{name:"facebook",url:"https://www.facebook.com/profile.php?id=100009064647138",className:"fa fa-facebook"},{name:"mail",url:"mailto:piyushrazz0019@gmail.com",className:"fa fa-envelope"},{name:"instagram",url:"https://www.instagram.com/raz.piyush/",className:"fa fa-instagram"}],aboutme:"I am a final year undergraduate currently pursuing a B.Tech in Electrical Engineering from IIT(ISM) Dhanbad. I aspire to become a Software Engineer. My hobbies include playing chess and badminton, as well as engaging in competitive coding in my free time.",address:"India",website:"https://github.com/razzPiyush",education:[{UniversityName:"Indian Institute of Technology (ISM) Dhanbad",specialization:"B.Tech in Electrical Engineering",duration:"Nov 2020 - May 2024"},{UniversityName:"R.P.S Public School",specialization:"Science(PCM)",duration:"April 2019 - May 2020",Achievements:"Scored 90.40%"}],work:[{companyName:"Samsung Research Institute Bangalore",position:"Software Engineer Intern",duration:"June 2023 - Aug 2023",desc:"Worked on addressing data transfer issues from User Equipment (UE) to eNodeB/gNodeB in Beyond 5G team.",companyLink:"https://research.samsung.com/sri-b"}],skillsDescription:"Your skills here",skills:[{category:"Programming Languages",list:[{img:"/images/c.png",name:"C"},{img:"/images/cpp.png",name:"C++"},{img:"/images/javascript-icon-png-23.jpg",name:"JavaScript"},{img:"/images/python.png",name:"Python"}]},{category:"Databases",list:[{img:"/images/mongo.png",name:"mongoDB"},{img:"/images/mysql.png",name:"MYSQL"}]},{category:"Web Development",list:[{img:"/images/react.png",name:"React"},{img:"http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png",name:"Node.js"},{img:"/images/bootstrap.png",name:"Bootstrap"},{img:"/images/html-5-logo-png-transparent.png",name:"HTML"},{img:"https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",name:"CSS"}]},{category:"Others",list:[{img:"/images/git.png",name:"Git"},{img:"/images/postman.svg",name:"Postman"}]}],portfolio:[{title:"Shooting circle",intro:"A shooting game application in which user must hit the target and maximize their score. ",des:" ",points:["Created a web game allowing users to earn points by hitting targets with projectiles.","The game concludes if any target successfully hits the user.","Employed Object-Oriented Programming, creating classes like Player, Projectile, Enemy, and Particle."],imgurl:"/images/portfolio/shooting_circle.jpg",techstack:["HTML","CSS","JavaScript","Canvas","OOPs"],links:{launch:"https://razzpiyush.github.io/JS-Canvas-Game",github:"https://github.com/razzPiyush/JS-Canvas-Game"}},{title:"RJ Blogs",intro:"A blog application in which users can add their blogs and specific users which are currently logged in can edit and delete their blogs as well.",des:"Developed a blog application using the MERN stack.",points:["Implemented secure login/signup functionality to ensure user authentication.","Implemented CRUD operations for user-controlled blog creation, editing, and deletion.","Users could seamlessly explore and view blogs authored by others in a user-friendly interface.","Implemented auto-login for users with stored credentials by checking local storage for user ID."],imgurl:"/images/portfolio/rj_blogs.jpg",techstack:["React.js","Bootstrap","Node.js","Express.js","MongoDB"],links:{launch:"https://raj-blogs-frontend.vercel.app/",github:"https://github.com/razzPiyush/Raj-blogs"}},{title:"Manthan",intro:"A Web Application which facilitates the users to listen songs.  ",points:["A Web Application which facilitates the users to listen songs."],imgurl:"/images/portfolio/manthan.PNG",techstack:["HTML","CSS","JavaScript"],links:{launch:"https://razzpiyush.github.io/MusicWebsite/",github:"https://github.com/razzPiyush/MusicWebsite"}}]},W=(t(56),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,{resumeData:A}),i.a.createElement(L,{resumeData:A}),i.a.createElement(E,{resumeData:A}),i.a.createElement(p,{resumeData:A}),i.a.createElement(h,{resumeData:A}),i.a.createElement(T,{resumeData:A}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.60b7ff62.chunk.js.map