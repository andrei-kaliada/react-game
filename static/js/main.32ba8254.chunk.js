(this["webpackJsonpsnake-app"]=this["webpackJsonpsnake-app"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),c=s(8),o=s.n(c),i=(s(13),s(2)),r=s(3),d=s(5),l=s(4),u=s(6),m=(s(14),s(0));function j(t){return Object(m.jsx)("div",{children:t.snakeCordinates.map((function(t,e){var s={left:"".concat(t[0],"%"),top:"".concat(t[1],"%")};return Object(m.jsx)("div",{className:"snake-cordinates",style:s},e)}))})}s(16);function p(t){var e={left:"".concat(t.food[0],"%"),top:"".concat(t.food[1],"%")};return Object(m.jsx)("div",{className:"food",style:e})}function h(t){return Object(m.jsxs)("div",{children:["Lives:",Object(m.jsx)("span",{className:"lives",children:t.lives})]})}s(17);var f=s.p+"static/media/soundsOff.5c9aeea9.svg",b=s.p+"static/media/soundsOn.70bf0ded.svg",v=s.p+"static/media/musicOff.4d083f3f.svg",O=s.p+"static/media/musicOn.baa2ca42.svg";function S(t){var e=t.music,s=t.turnOnSounds,n=t.turnOffSounds,a=t.musicVolumUp,c=t.musicVolumDown,o=t.soundsVolumUp,i=t.soundsVolumDown;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"header__options",children:[Object(m.jsx)("button",{onClick:function(){return e.pause()},children:Object(m.jsx)("img",{src:v,alt:"musicOff"})}),Object(m.jsx)("button",{onClick:function(){return e.play()},children:Object(m.jsx)("img",{src:O,alt:"musicOn"})}),Object(m.jsx)("button",{onClick:function(){return n()},children:Object(m.jsx)("img",{src:f,alt:"soundsOff"})}),Object(m.jsx)("button",{onClick:function(){return s()},children:Object(m.jsx)("img",{src:b,alt:"soundsOn"})}),Object(m.jsx)("button",{onClick:function(){return a()},children:"Music volume Up"}),Object(m.jsx)("button",{onClick:function(){return c()},children:"Music volume Down"}),Object(m.jsx)("button",{onClick:function(){return o()},children:"Sounds volume Up"}),Object(m.jsx)("button",{onClick:function(){return i()},children:"Sounds volume Down"})]}),Object(m.jsxs)("div",{className:"header__info",children:[Object(m.jsxs)("div",{className:"score",children:["Score:",Object(m.jsx)("span",{children:t.score})]}),Object(m.jsxs)("div",{className:"high-score",children:["High Score:",Object(m.jsx)("span",{children:localStorage.getItem("highScore")&&localStorage.getItem("highScore").split(",")[0]})]}),Object(m.jsx)(h,{lives:t.lives})]})]})}var x=s.p+"static/media/dead.25ffc265.mp3",g=s.p+"static/media/eat.5ff4f174.mp3",k=s.p+"static/media/up.46ece3fb.mp3",w=s.p+"static/media/down.43ca33f5.mp3",N=s.p+"static/media/left.f6661b15.mp3",U=s.p+"static/media/right.a422b7d1.mp3",_=s.p+"static/media/mainSound.4c6110aa.mp3",y=function(t){Object(d.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).setRandomCordinates=function(){return[2*Math.floor((91*Math.random()+1)/2),2*Math.floor((91*Math.random()+1)/2)]},n.setKey=function(t){switch((t=t||window.event).keyCode){case 38:["UP","DOWN"].includes(n.state.direction)||(n.setState({direction:"UP"}),n.state.isSounds&&n.state.up.play());break;case 40:["UP","DOWN"].includes(n.state.direction)||(n.setState({direction:"DOWN"}),n.state.isSounds&&n.state.down.play());break;case 37:["LEFT","RIGHT"].includes(n.state.direction)||(n.setState({direction:"LEFT"}),n.state.isSounds&&n.state.left.play());break;case 39:["LEFT","RIGHT"].includes(n.state.direction)||(n.setState({direction:"RIGHT"}),n.state.isSounds&&n.state.right.play());break;case 13:n.restartGame()}},n.movementsSnake=function(){var t=Object(u.a)(n.state.snakeCordinates),e=t[t.length-1];switch(n.state.direction){case"RIGHT":e=[e[0]+2,e[1]];break;case"DOWN":e=[e[0],e[1]+2];break;case"LEFT":e=[e[0]-2,e[1]];break;case"UP":e=[e[0],e[1]-2]}t.push(e),t.shift(),n.setState({snakeCordinates:t})},n.collisionWalls=function(){var t=n.state.snakeCordinates[n.state.snakeCordinates.length-1];if(t[0]>=100||t[1]>=100||t[0]<0||t[1]<0){if(1==n.state.lives){var e="highScore",s=localStorage.getItem(e)||"";console.log(s);var a=""!=s?s.split(",").map((function(t){return+t})):[];console.log(a),a.push(n.state.score),a.sort((function(t,e){return e-t})),console.log(a);var c=a.length>10?10:a.length,o=a.splice(0,c);localStorage.setItem(e,"".concat(o.join(","))),n.state.isSounds&&n.state.dead.play(),n.state.mainSound.pause(),clearInterval(n.state.timer),n.setState({popUp:!0})}n.state.isSounds&&n.state.dead.play(),n.removeLive(),n.endGame()}},n.collisionSnake=function(){var t=Object(u.a)(n.state.snakeCordinates),e=t[t.length-1];t.pop(),t.forEach((function(t){e[0]==t[0]&&e[1]==t[1]&&(n.state.isSounds&&n.state.dead.play(),n.endGame(),n.removeLive())}))},n.collisionEat=function(){var t=n.state.snakeCordinates[n.state.snakeCordinates.length-1],e=n.state.food;t[0]==e[0]&&t[1]==e[1]&&(n.state.isSounds&&n.state.eat.play(),n.setState({food:n.setRandomCordinates(),score:n.state.score+10}),n.growSnake())},n.growSnake=function(){var t=Object(u.a)(n.state.snakeCordinates);t.unshift([]),n.setState({snakeCordinates:t})},n.removeLive=function(){n.setState({lives:n.state.lives-1})},n.endGame=function(){n.setState({snakeCordinates:[[0,0],[4,0]],direction:"RIGHT"})},n.restartGame=function(){n.setState((function(t){return{popUp:!1}})),n.props.startGame(!1)},n.turnOnSounds=function(){n.setState((function(t){return{isSounds:!0}}))},n.turnOffSounds=function(){n.setState((function(t){return{isSounds:!1}}))},n.musicVolumUp=function(){n.state.mainSound.volume<1&&(n.state.mainSound.volume+=.2)},n.musicVolumDown=function(){n.state.mainSound.volume>=.2&&(n.state.mainSound.volume-=.2)},n.soundsVolumDown=function(){[n.state.up,n.state.down,n.state.left,n.state.right,n.state.eat,n.state.dead].forEach((function(t){t.volume>=.2&&(t.volume-=.2)}))},n.soundsVolumUp=function(){[n.state.up,n.state.down,n.state.left,n.state.right,n.state.eat,n.state.dead].forEach((function(t){t.volume<1&&(t.volume+=.2)}))},n.state={snakeCordinates:[[0,0],[4,0]],food:n.setRandomCordinates(),direction:"RIGHT",speed:100,lives:3,score:0,hightScore:0,dead:new Audio,eat:new Audio,up:new Audio,right:new Audio,left:new Audio,down:new Audio,mainSound:new Audio,timer:0,popUp:!1,isSounds:!0},n.state.dead.src=x,n.state.eat.src=g,n.state.up.src=k,n.state.right.src=U,n.state.left.src=N,n.state.down.src=w,n.state.mainSound.src=_,n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.state.timer=setInterval(this.movementsSnake,this.state.speed),document.onkeydown=this.setKey,this.state.mainSound.play()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.speed)}},{key:"componentDidUpdate",value:function(){this.collisionWalls(),this.collisionSnake(),this.collisionEat()}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(S,{lives:this.state.lives,score:this.state.score,hightScore:this.state.hightScore,music:this.state.mainSound,turnOnSounds:this.turnOnSounds,turnOffSounds:this.turnOffSounds,musicVolumUp:this.musicVolumUp,musicVolumDown:this.musicVolumDown,soundsVolumUp:this.soundsVolumUp,soundsVolumDown:this.soundsVolumDown}),Object(m.jsxs)("div",{className:"area",children:[Object(m.jsx)(j,{snakeCordinates:this.state.snakeCordinates}),Object(m.jsx)(p,{food:this.state.food})]}),this.state.popUp?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"popUp",children:[Object(m.jsxs)("div",{className:"popUp__header",children:[Object(m.jsx)("h2",{className:"popUp__header-title",children:"Game over"}),Object(m.jsx)("div",{className:"popUp__header-subtitle",children:"High score table:"})]}),Object(m.jsx)("div",{className:"popUp__body",children:Object(m.jsx)("ul",{className:"popUp__list",children:localStorage.getItem("highScore")&&localStorage.getItem("highScore").split(",").map((function(t,e){return Object(m.jsx)("li",{className:"popUp__list-item",children:"".concat(e+1,") ").concat(t)},e)}))})}),Object(m.jsx)("div",{className:"popUp__footer",children:Object(m.jsxs)("div",{className:"popUp__footer-text",children:["Press ",Object(m.jsx)("span",{children:"Enter"})," to restart Game"]})})]}),Object(m.jsx)("div",{className:"darkWrapper"})]}):""]})})}}]),s}(a.a.Component),C=s.p+"static/media/arrowLeft.3cc76821.svg",G=s.p+"static/media/arrowRight.fb19f8f9.svg",D=s.p+"static/media/arrowUp.f950f788.svg",I=s.p+"static/media/arrowDown.243341a9.svg",V=function(t){Object(d.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).startGame=function(t){n.setState({redyGame:t})},n.setKey=function(t){13===(t=t||window.event).keyCode&&n.startGame(!0)},n.state={redyGame:!1},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){document.onkeydown=this.setKey}},{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"wrappApp",children:this.state.redyGame?Object(m.jsx)(y,{startGame:this.startGame}):Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"content-wrapper",children:[Object(m.jsx)("h2",{className:"heading",children:"Welcome to the snake game"}),Object(m.jsxs)("div",{className:"controls",children:[Object(m.jsx)("div",{className:"controls__title",children:"Controls:"}),Object(m.jsxs)("div",{className:"controls__buttons",children:[Object(m.jsxs)("div",{className:"controls__buttons-left",children:[Object(m.jsx)("img",{src:D,alt:"arrowUp"}),Object(m.jsx)("div",{className:"descr",children:"Press Up"})]}),Object(m.jsxs)("div",{className:"controls__buttons-right",children:[Object(m.jsx)("img",{src:G,alt:"arrowRight"}),Object(m.jsx)("div",{className:"descr",children:"Press Right"})]}),Object(m.jsxs)("div",{className:"controls__buttons-up",children:[Object(m.jsx)("img",{src:C,alt:"arrowLeft"}),Object(m.jsx)("div",{className:"descr",children:"Press Left"})]}),Object(m.jsxs)("div",{className:"controls__buttons-down",children:[Object(m.jsx)("img",{src:I,alt:"arrowDown"}),Object(m.jsx)("div",{className:"descr",children:"Press Down"})]})]})]})]}),Object(m.jsx)("a",{onClick:function(){return t.startGame(!0)},className:"button",children:"Start Game"})]})})}}]),s}(a.a.Component);o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.32ba8254.chunk.js.map