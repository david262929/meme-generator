(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),m=a.n(l);a(14),a(15),a(16);var r=function(){return o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem ap jan?"}),o.a.createElement("p",null,"Meme Generator"))},c=a(4),s=a(5),i=a(6),h=a(1),u=a(7),d=a(8),p=(a(17),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).usedImageIds=[],e.state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();for(var t,a=this.state.allMemeImgs;!t;){var n=a[Math.floor(Math.random()*this.state.allMemeImgs.length)],o=n.id;a.includes(o)||(this.usedImageIds.push(o),t=n.url)}this.setState({randomImg:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"meme-generator"},o.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"inputs"},o.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),o.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange})),o.a.createElement("button",null,"Generate")),o.a.createElement("div",{className:"meme"},o.a.createElement("img",{src:this.state.randomImg,alt:""}),o.a.createElement("h2",{className:"top"},this.state.topText),o.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component));var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r,null),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c5409010.chunk.js.map