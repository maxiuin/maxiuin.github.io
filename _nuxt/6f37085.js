(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4],{455:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("399c7ddc",content,!0,{sourceMap:!1})},456:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("67a4ab99",content,!0,{sourceMap:!1})},459:function(t,e,n){"use strict";n.r(e);var o=n(183),r=(n(469),{name:"FlattenWave",props:{waves:{type:Array,default:function(){return[]}}}}),l=(n(461),n(14)),c={name:"BeforeFoot",components:{FlattenWave:Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{staticClass:"waves",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"}},[e("defs",[e("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),t._v(" "),e("g",{staticClass:"parallax"},t._l(t.waves,(function(t){return e("use",{attrs:{"xlink:href":"#gentle-wave",x:t.x,y:t.y,fill:t.fill}})})),0)])}),[],!1,null,null,null).exports},computed:{applyHref:function(){return Object(o.a)(this.$config)}}},d=(n(463),Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"before-foot w-full overflow-hidden"},[e("div",{staticClass:"block-try py-6 flex flex-column align-items-center relative"},[e("FlattenWave",{attrs:{waves:[{x:48,y:0,fill:"#71e6cbcc"},{x:48,y:4,fill:"#00AC8577"},{x:48,y:7,fill:"#E8F3F177"}]}}),t._v(" "),e("div",{staticClass:"text-2xl font-bold"},[t._v("用码小螈数字化您的企业")]),t._v(" "),e("div",{staticClass:"content"},[t._v("无论是大企还是创企，都有自己的数字化系统。叮，系统启动。")]),t._v(" "),e("a",{staticClass:"flex px-4 py-2 m-4 btn-second z-5",attrs:{href:t.applyHref}},[t._v("立刻试用")])],1)])}),[],!1,null,null,null));e.default=d.exports},461:function(t,e,n){"use strict";n(455)},462:function(t,e,n){var o=n(27)((function(i){return i[1]}));o.push([t.i,".waves{bottom:0;height:15vh;left:0;max-height:150px;min-height:100px;position:absolute;width:100%}.parallax>use{animation:move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite}.parallax>use:first-child{animation-delay:-2s;animation-duration:7s}.parallax>use:nth-child(2){animation-delay:-3s;animation-duration:10s}.parallax>use:nth-child(3){animation-delay:-4s;animation-duration:13s}.parallax>use:nth-child(4){animation-delay:-5s;animation-duration:20s}@keyframes move-forever{0%{transform:translate3d(-90px,0,0)}to{transform:translate3d(85px,0,0)}}@media (max-width:768px){.waves{height:40px;min-height:40px}}",""]),o.locals={},t.exports=o},463:function(t,e,n){"use strict";n(456)},464:function(t,e,n){var o=n(27)((function(i){return i[1]}));o.push([t.i,".before-foot{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff 30%)}.block-try{transform:scale(1);transition:background-color .3s ease,transform .3s ease}.block-try div{text-shadow:#fff 0 0 5px}.block-try .content,.block-try a{transition:transform .3s ease}.block-try:hover{background-color:rgba(84,84,121,.247);transform:scale(1.2)}.block-try:hover a{transform:translateY(-40px)}.block-try:hover .content{transform:translateY(60px)}",""]),o.locals={},t.exports=o},469:function(t,e,n){"use strict";var o=n(2),r=n(473),l=n(145);o({target:"Array",proto:!0},{fill:r}),l("fill")},470:function(t,e,n){"use strict";t.exports=n(475)},473:function(t,e,n){"use strict";var o=n(52),r=n(146),l=n(64);t.exports=function(t){for(var e=o(this),n=l(e),c=arguments.length,d=r(c>1?arguments[1]:void 0,n),f=c>2?arguments[2]:void 0,v=void 0===f?n:r(f,n);v>d;)e[d++]=t;return e}},475:function(t,e,n){"use strict";n.r(e);n(15),n(32),n(48),n(49),n(33),n(37);var o=n(23);n(5),n(24);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={props:{value:null},computed:{listeners:function(){var t=this;return l(l({},this.$listeners),{},{input:function(e){"insertCompositionText"!==e.inputType&&t.$emit("input",e.target.value)},compositionend:function(e){t.$emit("input",e.target.value)}})},filled:function(){return null!=this.value&&this.value.toString().length>0}}},d=n(14),component=Object(d.a)(c,(function(){var t=this;return(0,t._self._c)("input",t._g({class:["p-inputtext p-component p-inputtext-height",{"p-filled":t.filled}],domProps:{value:t.value}},t.listeners))}),[],!1,null,null,null);e.default=component.exports},512:function(t,e,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("26004fc6",content,!0,{sourceMap:!1})},568:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));n(33);var o={};function r(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:36e5,l={value:n,expired:Date.now()+r};t.sessionStorage?sessionStorage.setItem(e,JSON.stringify(l)):o[e]=l}function l(e){var n=t.sessionStorage?JSON.parse(sessionStorage.getItem(e)):o[e];if(n){if(!(Date.now()>n.expired))return n.value;delete o[e]}}}).call(this,n(40))},569:function(t,e,n){"use strict";n(512)},570:function(t,e,n){var o=n(27),r=n(147),l=n(571),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,".fp-page-template .banner-container{align-items:center;display:flex;flex-direction:column;height:350px;justify-content:center}.fp-page-template .banner-container .banner{background-image:url("+d+'),linear-gradient(to right top,#1b60b1,#1c8ac3,#5fb0cc,#a3d3d8,#e6f4f1);background-position:50% 50%;background-repeat:no-repeat;background-size:cover;height:350px;position:absolute;width:100%;z-index:-1}.fp-page-template .banner-container .slogan{color:#000;font-size:56px;font-weight:700;padding:16px;white-space:nowrap}@media screen and (max-width:750px){.fp-page-template .banner-container .slogan{font-size:calc(7.14286vw - 2.28571px)}}.fp-page-template .banner-container .slogan div{animation:change-width 8s linear infinite;overflow:hidden;position:relative}.fp-page-template .banner-container .slogan div:after{animation:flash .8s linear infinite;background:#333;content:" ";height:calc(100% - 16px);position:absolute;right:0;top:10px;width:3px}@keyframes flash{0%{opacity:1}80%{opacity:1}to{opacity:0}}@keyframes change-width{0%{width:1em}7%{width:1em}8%{width:3em}11%{width:3em}12%{width:4em}19%{width:4em}20%{width:6em}29%{width:6em}30%{width:8em}39%{width:8em}40%{width:10em}49%{width:10em}50%{width:13em}to{width:13em}}.fp-page-template .body{gap:15px;justify-content:center;min-height:400px;padding:8px}.fp-page-template .body .project{border:1px solid #ccc;border-radius:5px;cursor:pointer;width:300px}.fp-page-template .body .project .project-banner{background-position:50% 50%;background-repeat:no-repeat;background-size:cover;height:180px;position:relative}.fp-page-template .body .project .project-banner .project-type{left:10px;position:absolute}.fp-page-template .body .project .project-banner .project-type svg{height:60px;position:absolute;width:56px}.fp-page-template .body .project .project-banner .project-type span{color:#fff;display:flex;justify-content:center;position:relative;top:15px;width:50px}.fp-page-template .body .project .project-body{padding:0 8px}',""]),c.locals={},t.exports=c},571:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgOTZoMTQ1djE2MGgxNDZ2LTUwaDE0NXY0MGgxNDZ2NWgxNDVWNjFoMTQ2djIwNWgxNDV2OTVoMTQ2VjQ2aDE0NXY3NWgxNDZWODZoMTQ1djcwVjQ5djMwaC0xNDV2MzBoLTE0NlYxOWgtMTQ1djIyNWgtMTQ2di00MEg4NzNWOUg3Mjd2MTU1SDU4MnYtMzVINDM2di0xMEgyOTF2NDBIMTQ1VjM5SDBaIiBmaWxsPSIjYjliOWI5MmYiLz48cGF0aCBkPSJNMCAxODFoMTQ1djI3MGgxNDZWMzExaDE0NXY0NWgxNDZ2LTg1aDE0NVYxMzFoMTQ2djMzNWgxNDV2LTg1aDE0NlYxNjFoMTQ1djEwNWgxNDZWMTUxaDE0NXYxMzBWODRoLTE0NXYzNWgtMTQ2VjQ0aC0xNDV2MzE1aC0xNDZ2LTk1SDg3M1Y1OUg3Mjd2MTkwSDU4MnYtNUg0MzZ2LTQwSDI5MXY1MEgxNDVWOTRIMFoiIGZpbGw9IiM3Nzc3NzcyZiIvPjxwYXRoIGQ9Ik0wIDQyMWgxNDV2NzVoMTQ2VjM5NmgxNDV2LTE1aDE0NnY4MGgxNDV2LTgwaDE0NnY5MGgxNDV2MjBoMTQ2di01NWgxNDV2LTI1aDE0NnY2MGgxNDVWMTQ5aC0xNDV2MTE1aC0xNDZWMTU5aC0xNDV2MjIwaC0xNDZ2ODVIODczVjEyOUg3Mjd2MTQwSDU4MnY4NUg0MzZ2LTQ1SDI5MXYxNDBIMTQ1VjE3OUgwWiIgZmlsbD0iI2ZmZmZmZjdmIi8+PHBhdGggZD0iTTAgNTAxaDE2MDB2LTUyIDIwaC0xNDV2LTYwaC0xNDZ2MjVoLTE0NXY1NWgtMTQ2di0yMEg4NzN2LTkwSDcyN3Y4MEg1ODJ2LTgwSDQzNnYxNUgyOTF2MTAwSDE0NXYtNzVIMFoiIGZpbGw9IiMwMDAwMDA3ZiIvPjwvc3ZnPg=="},729:function(t,e,n){"use strict";n.r(e);n(38),n(13),n(32),n(46),n(50),n(5),n(56);var o=n(470),r=n.n(o),l=n(568),c=n(459),d={name:"TemplatePage",layout:function(){return"official"},head:function(){return{titleTemplate:"%s - 模板中心",meta:[{hid:"description",name:"description",content:"叮，恭喜宿主绑定系统成功。码小螈平台提供各种自主开发的软件和模板，降低开发成本，并提供demo让用户试用"},{hid:"keywords",name:"keywords",content:"码小螈,模板中心"}]}},components:{InputText:r.a,BeforeFoot:c.default},computed:{filterList:function(){var t=this;return this.list.filter((function(i){var e,n,o;return(null===(e=i.名称)||void 0===e?void 0:e.includes(t.keywords))||(null===(n=i.类型)||void 0===n?void 0:n.includes(t.keywords))||(null===(o=i.简介)||void 0===o?void 0:o.includes(t.keywords))}))}},data:function(){return{keywords:"",list:[]}},methods:{onHrefClick:function(t){fetch("".concat(this.$config.domain,"/api/v1/custom/63ff58c1fe81b83fdc94fe83/652e4736fda9ff1b1ca1de99?id=").concat(t))}},mounted:function(){var t=this,e=Object(l.a)("official-template-data");e?this.list=e:fetch("".concat(this.$config.domain,"/api/v1/custom/63ff58c1fe81b83fdc94fe83/64017a15c86cd6b55c9c66f8")).then((function(t){return t.json()})).then((function(n){n.entity;var o=n.fields,data=n.data;if(!(data.length<=0)){for(var r={},i=0;i<o.length;i++)r[o[i]._id]=o[i];e=data.map((function(t){for(var e in t){var n=r[e];n&&(t[n.name]=t[n._id])}return t})),t.list=e,Object(l.b)("official-template-data",e)}}))}},f=(n(569),n(14)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fp-page-template"},[e("div",{staticClass:"banner-container"},[t._m(0),t._v(" "),e("span",{staticClass:"p-input-icon-right"},[e("i",{staticClass:"pi pi-search"}),t._v(" "),e("InputText",{staticClass:"p-size-lg",attrs:{type:"text",placeholder:"请输入你要搜索的内容..."},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._v(" "),e("div",{staticClass:"banner"})]),t._v(" "),e("div",{staticClass:"body bg-white flex flex-wrap"},t._l(t.filterList,(function(n){var o;return e("a",{staticClass:"project shadow-box",attrs:{title:n.名称,href:"".concat(t.$config.demoDomain).concat(n.项目地址,"?token=").concat(t.$config.demoToken),target:"_blank"},on:{click:function(e){return t.onHrefClick(n.id)}}},[e("div",{staticClass:"project-banner",style:{backgroundImage:n.封面?"url('".concat(t.$config.cdnDomain).concat(n.封面,"')"):""},attrs:{p:t.$config.cdnDomain+n.封面}},[n.类型?e("div",{staticClass:"project-type",attrs:{title:t.$t("scene."+n.类型)}},[e("svg",[e("path",{attrs:{fill:"#0000007f",d:"m2 2 h 50 v 40 l -25 15 l -25 -15 z"}}),t._v(" "),e("path",{attrs:{fill:"var(--o-bg-color)",d:"m0 0 h 50 v 40 l -25 15 l -25 -15 z"}})]),t._v(" "),e("span",[t._v(t._s(n.类型.substr(0,3).toUpperCase()))])]):t._e()]),t._v(" "),e("div",{staticClass:"project-body"},[e("h2",[t._v(t._s(n.名称))]),t._v(" "),e("p",[t._v(t._s(n.简介))]),t._v(" "),e("p",[t._v("开发人员: "+t._s(null===(o=n.开发人员)||void 0===o?void 0:o.name))]),t._v(" "),e("p",{staticClass:"flex"},[e("span",{staticClass:"flex-1"},[t._v("开发天数: "+t._s(n.开发时间))]),t._v("\n          "+t._s(n.安装次数)+"次安装\n        ")])])])})),0),t._v(" "),e("BeforeFoot")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"slogan"},[t("div",[this._v("在这里，开启你的企业新形态")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BeforeFoot:n(459).default})}}]);