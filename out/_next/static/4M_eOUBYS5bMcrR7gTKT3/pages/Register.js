(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/DtR":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Register",function(){return t("RKCV")}])},RKCV:function(a,e,t){"use strict";t.r(e);var n=t("1OyB"),r=t("vuIU"),o=t("JX7q"),l=t("Ji7U"),u=t("md7G"),c=t("foSv"),i=t("+shI"),s=t("q1tI"),d=t.n(s),f=t("QojX"),p=t("cWnB"),h=d.a.createElement;function m(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,n=Object(c.a)(a);if(e){var r=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)}}var b=["BCA","BNI","BRI","MANDIRI","OCBC"],C=function(a){Object(l.a)(t,a);var e=m(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={birthdate:[1,1,(new Date).getFullYear()],bank:b},r.dateChecker=r.dateChecker.bind(Object(o.a)(r)),r.dateChangeHandler=r.dateChangeHandler.bind(Object(o.a)(r)),r}return Object(r.a)(t,[{key:"dateChecker",value:function(a){var e=this.state.birthdate,t=e[1],n=e[2],r=[];if("day"===a){if(4===t||6===t||9===t||11===t){for(var o=0;o<30;o++)r.push(o+1);return r}if(1===t||3===t||5===t||7==t||8===t||10===t||12===t){for(var l=0;l<31;l++)r.push(l+1);return r}if(n%4===0){for(var u=0;u<29;u++)r.push(u+1);return r}for(var c=0;c<28;c++)r.push(c+1);return r}for(var i=(new Date).getFullYear(),s=0;s<100;s++)r.push(i-s);return r}},{key:"dateChangeHandler",value:function(a,e){this.state.birthdate.splice(e,1,parseInt(a)),this.forceUpdate()}},{key:"render",value:function(){var a=this,e=this.state.bank;return h("div",null,h(i.a,null),h("div",{className:"login-main-div"},h(f.a,{className:"col-4 "},h(f.a.Group,{controlId:"formBasicName"},h(f.a.Label,null,"Nama"),h(f.a.Control,{type:"text",placeholder:"Masukkan Nama"})),h(f.a.Group,{controlId:"formBasicBirth"},h(f.a.Label,null,"Tanggal Lahir"),h("div",{className:"birthdate-wrapper"},h(f.a.Control,{as:"select",onChange:function(e){return a.dateChangeHandler(e.target.value,0)},className:"date-month"},this.dateChecker("day").map((function(a,e){return h("option",null,a)}))),h(f.a.Control,{as:"select",onChange:function(e){return a.dateChangeHandler(e.target.value,1)},className:"date-month"},[1,2,3,4,5,6,7,8,9,10,11,12].map((function(a,e){return h("option",null,a)}))),h(f.a.Control,{as:"select",onChange:function(e){return a.dateChangeHandler(e.target.value,2)},className:"year"},this.dateChecker("year").map((function(a,e){return h("option",null,a)}))))),h(f.a.Group,{controlId:"formBasicId"},h(f.a.Label,null,"KTP"),h(f.a.Control,{type:"number",placeholder:"Data Lain KTP"})),h(f.a.Group,{controlId:"formBasicEmail"},h(f.a.Label,null,"Email"),h(f.a.Control,{type:"email",placeholder:"Masukkan Email"})),h(f.a.Group,{controlId:"formBasicPhone"},h(f.a.Label,null,"Telfon"),h(f.a.Control,{type:"number",placeholder:"Masukkan Nomor Telfon"})),h(f.a.Group,{controlId:"formBasicPhone"},h(f.a.Label,null,"Bank"),h(f.a.Control,{as:"select"},e.map((function(a,e){return h("option",null,a)})))),h(f.a.Group,{controlId:"formBasicBank"},h(f.a.Label,null,"Rekening"),h(f.a.Control,{type:"number",placeholder:"Masukkan Nomor Rekening"})),h(f.a.Group,{controlId:"formBasicPassword"},h(f.a.Label,null,"Password"),h(f.a.Control,{type:"password",placeholder:"Masukkan Password"})),h("div",{className:"login-submit-btn"},h(p.a,{variant:"secondary",type:"submit"},"Submit")))))}}]),t}(s.Component);e.default=C}},[["/DtR",0,2,1,3,4]]]);