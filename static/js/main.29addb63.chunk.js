(this["webpackJsonpatt5g-app"]=this["webpackJsonpatt5g-app"]||[]).push([[0],{336:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var r=n(9),s=n.n(r),a=n(57),c=n.n(a),i=(n(62),n.p,n(63),n(64),n(3));var o=n(18);var u=function(){var e=[{questionText:" What year were the Indiana Pacers founded?",answerOptions:[{answerText:"1967",isCorrect:!0},{answerText:"1985",isCorrect:!1},{answerText:"1958",isCorrect:!1},{answerText:"1976",isCorrect:!1}]},{questionText:"Who once played for both the Indiana Pacers and the San Antonio Spurs in the same game?",answerOptions:[{answerText:"George Hill",isCorrect:!1},{answerText:"Stephen Jackson",isCorrect:!1},{answerText:"Kawhi Leonard",isCorrect:!1},{answerText:"Bob Netolicky",isCorrect:!0}]},{questionText:'Which Pacer was known as the "Knick Killer"?',answerOptions:[{answerText:"George McGinnis",isCorrect:!1},{answerText:"Alex English",isCorrect:!1},{answerText:"Chris Mullin",isCorrect:!1},{answerText:"Reggie Miller",isCorrect:!0}]},{questionText:"Which Pacers coach has the highest winning percentage?",answerOptions:[{answerText:"Larry Bird",isCorrect:!0},{answerText:"Bobby Leonard",isCorrect:!1},{answerText:"Larry Brown",isCorrect:!1},{answerText:"Frank Vogel",isCorrect:!1}]}],t=Object(r.useState)(0),n=Object(o.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)(!1),l=Object(o.a)(u,2),h=l[0],j=l[1],x=Object(r.useState)(""),d=Object(o.a)(x,2),b=(d[0],d[1],Object(r.useState)(0)),w=Object(o.a)(b,2),O=w[0],p=w[1],C=s.a.useState(4),T=Object(o.a)(C,2),g=T[0],m=T[1],f=(s.a.useRef(null),Object(r.useState)(0)),v=Object(o.a)(f,2),P=v[0],S=v[1];s.a.useEffect((function(){var t,n=g>0&&setInterval((function(){return m(g-1)}),1e3);if(0===g){var r=a+1;r<e.length?(c(r),m(g+4)):j(!0),t=2e3,new Promise((function(e){return setTimeout(e,t)}))}return function(){return clearInterval(n)}}),[g]);var N=document.getElementById("name");return console.log(N),Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)("div",{className:"PPcounter",children:Object(i.jsxs)("p",{children:[" Current PP: ",P]})}),Object(i.jsxs)("div",{className:"timer-text",children:["Time Left ",g]}),h?Object(i.jsxs)("div",{className:"score-section",children:["You scored ",O," out of ",e.length]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"question-section",children:[Object(i.jsxs)("div",{className:"question-count",children:[Object(i.jsx)("span",{children:a+1}),"/",e.length]}),Object(i.jsx)("div",{className:"question-text",children:e[a].questionText})]}),Object(i.jsx)("div",{className:"answer-section",children:e[a].answerOptions.map((function(t,n){return Object(i.jsx)("button",{onClick:function(){return function(t){t&&(p(O+1),S(P+1),m(4));var n=a+1;n<e.length?(c(n),m(4)):(j(!0),m(0))}(t.isCorrect)},children:t.answerText})}))})]})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,339)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))},h=n(21),j=n(22),x=n(24),d=n(23),b=(n(336),s.a.Component,s.a.Component,n(25));s.a.Component;c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),l()},62:function(e,t,n){},63:function(e,t,n){}},[[337,1,2]]]);
//# sourceMappingURL=main.29addb63.chunk.js.map