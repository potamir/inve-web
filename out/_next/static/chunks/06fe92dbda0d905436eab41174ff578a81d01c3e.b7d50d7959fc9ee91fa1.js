(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+shI":function(e,t,n){"use strict";var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),c=n("foSv"),u=n("8Kt/"),s=n.n(u),l=n("q1tI"),f=n.n(l),p=n("wx14"),d=n("zLVn"),v=n("TSYQ"),h=n.n(v),m=n("JCAc"),b=n("YdCC"),y=n("vUet"),g=f.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(d.a)(e,["bsPrefix","className","as"]);n=Object(y.a)(n,"navbar-brand");var i=a||(o.href?"a":"span");return f.a.createElement(i,Object(p.a)({},o,{ref:t,className:h()(r,n)}))}));g.displayName="NavbarBrand";var x=g,E=n("dI71"),O=n("7j6X"),j=n("SJxq"),w=n("GEtZ");j.a&&window;function C(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(w.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}var S=function(e,t,n){null==n&&(n=function(e){var t=Object(O.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=C(e,n),a=Object(w.a)(e,"transitionend",t);return function(){r(),a()}},k=(n("17x9"),n("i8i4")),P=n.n(k),N=!1,_=f.a.createContext(null),I="unmounted",R="exited",D="entering",T="entered",A=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=R,r.appearStatus=D):a=T:a=t.unmountOnExit||t.mountOnEnter?I:R,r.state={status:a},r.nextCallback=null,r}Object(E.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===I?{status:R}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==D&&n!==T&&(t=D):n!==D&&n!==T||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===D?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===R&&this.setState({status:I})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[P.a.findDOMNode(this),r],o=a[0],i=a[1],c=this.getTimeouts(),u=r?c.appear:c.enter;!e&&!n||N?this.safeSetState({status:T},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:D},(function(){t.props.onEntering(o,i),t.onTransitionEnd(u,(function(){t.safeSetState({status:T},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:P.a.findDOMNode(this);t&&!N?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:R},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:R},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:P.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===I)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(d.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return f.a.createElement(_.Provider,{value:null},"function"===typeof n?n(e,r):f.a.cloneElement(f.a.Children.only(n),r))},t}(f.a.Component);function L(){}A.contextType=_,A.propTypes={},A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:L,onEntering:L,onEntered:L,onExit:L,onExiting:L,onExited:L},A.UNMOUNTED=I,A.EXITED=R,A.ENTERING=D,A.ENTERED=T,A.EXITING="exiting";var M,K=A,q=n("Qg85");var U={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var J=((M={})[R]="collapse",M.exiting="collapsing",M[D]="collapsing",M[T]="collapse show",M),V={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=U[e];return n+parseInt(Object(O.a)(t,r[0]),10)+parseInt(Object(O.a)(t,r[1]),10)}},B=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",e.offsetHeight},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(E.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,a=t.onEntered,o=t.onExit,i=t.onExiting,c=t.className,u=t.children,s=Object(d.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete s.dimension,delete s.getDimensionValue;var l=Object(q.a)(this.handleEnter,n),v=Object(q.a)(this.handleEntering,r),m=Object(q.a)(this.handleEntered,a),b=Object(q.a)(this.handleExit,o),y=Object(q.a)(this.handleExiting,i);return f.a.createElement(K,Object(p.a)({addEndListener:S},s,{"aria-expanded":s.role?s.in:null,onEnter:l,onEntering:v,onEntered:m,onExit:b,onExiting:y}),(function(t,n){return f.a.cloneElement(u,Object(p.a)({},n,{className:h()(c,u.props.className,J[t],"width"===e.getDimension()&&"width")}))}))},t}(f.a.Component);B.defaultProps=V;var Q=B,Z=f.a.createContext(null),F=f.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(d.a)(e,["children","bsPrefix"]);return r=Object(y.a)(r,"navbar-collapse"),f.a.createElement(Z.Consumer,null,(function(e){return f.a.createElement(Q,Object(p.a)({in:!(!e||!e.expanded)},a),f.a.createElement("div",{ref:t,className:r},n))}))}));F.displayName="NavbarCollapse";var W=F,X=n("ZCiN"),G=f.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.label,i=e.as,c=void 0===i?"button":i,u=e.onClick,s=Object(d.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(y.a)(n,"navbar-toggler");var v=Object(l.useContext)(Z)||{},m=v.onToggle,b=v.expanded,g=Object(X.a)((function(e){u&&u(e),m&&m()}));return"button"===c&&(s.type="button"),f.a.createElement(c,Object(p.a)({},s,{ref:t,onClick:g,"aria-label":o,className:h()(r,n,!b&&"collapsed")}),a||f.a.createElement("span",{className:n+"-icon"}))}));G.displayName="NavbarToggle",G.defaultProps={label:"Toggle navigation"};var H=G,Y=f.a.createContext(),z=function(e,t){return null!=e?String(e):t||null},$=Y,ee=f.a.forwardRef((function(e,t){var n=Object(m.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,a=n.expand,o=n.variant,i=n.bg,c=n.fixed,u=n.sticky,s=n.className,v=n.children,b=n.as,g=void 0===b?"nav":b,x=n.expanded,E=n.onToggle,O=n.onSelect,j=n.collapseOnSelect,w=Object(d.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);r=Object(y.a)(r,"navbar");var C=Object(l.useCallback)((function(){O&&O.apply(void 0,arguments),j&&x&&E(!1)}),[O,j,x,E]);void 0===w.role&&"nav"!==g&&(w.role="navigation");var S=r+"-expand";"string"===typeof a&&(S=S+"-"+a);var k=Object(l.useMemo)((function(){return{onToggle:function(){return E(!x)},bsPrefix:r,expanded:x}}),[r,x,E]);return f.a.createElement(Z.Provider,{value:k},f.a.createElement($.Provider,{value:C},f.a.createElement(g,Object(p.a)({ref:t},w,{className:h()(s,r,a&&S,o&&r+"-"+o,i&&"bg-"+i,u&&"sticky-"+u,c&&"fixed-"+c)}),v)))}));ee.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ee.displayName="Navbar",ee.Brand=x,ee.Toggle=H,ee.Collapse=W,ee.Text=Object(b.a)("navbar-text",{Component:"span"});var te=ee,ne=(n("K9S6"),f.a.createContext(null)),re=n("Zeqi"),ae=n("YGJp"),oe=n("lcWJ"),ie=f.a.createContext(null),ce=f.a.createContext(null),ue=function(){},se=f.a.forwardRef((function(e,t){var n,r,a=e.as,o=void 0===a?"ul":a,i=e.onSelect,c=e.activeKey,u=e.role,s=e.onKeyDown,v=Object(d.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(ae.a)(),m=Object(l.useRef)(!1),b=Object(l.useContext)($),y=Object(l.useContext)(ce);y&&(u=u||"tablist",c=y.activeKey,n=y.getControlledId,r=y.getControllerId);var g=Object(l.useRef)(null),x=function(e){if(!g.current)return null;var t=Object(re.a)(g.current,"[data-rb-event-key]:not(.disabled)"),n=g.current.querySelector(".active"),r=t.indexOf(n);if(-1===r)return null;var a=r+e;return a>=t.length&&(a=0),a<0&&(a=t.length-1),t[a]},E=function(e,t){null!=e&&(i&&i(e,t),b&&b(e,t))};Object(l.useEffect)((function(){if(g.current&&m.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var O=Object(oe.a)(t,g);return f.a.createElement($.Provider,{value:E},f.a.createElement(ie.Provider,{value:{role:u,activeKey:z(c),getControlledId:n||ue,getControllerId:r||ue}},f.a.createElement(o,Object(p.a)({},v,{onKeyDown:function(e){var t;switch(s&&s(e),e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}t&&(e.preventDefault(),E(t.dataset.rbEventKey,e),m.current=!0,h())},ref:O,role:u}))))})),le=f.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.as,i=void 0===o?"div":o,c=Object(d.a)(e,["bsPrefix","className","children","as"]);return n=Object(y.a)(n,"nav-item"),f.a.createElement(i,Object(p.a)({},c,{ref:t,className:h()(r,n)}),a)}));le.displayName="NavItem";var fe=le,pe=n("dbZe"),de=(n("2W6z"),f.a.forwardRef((function(e,t){var n=e.active,r=e.className,a=e.tabIndex,o=e.eventKey,i=e.onSelect,c=e.onClick,u=e.as,s=Object(d.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),v=z(o,s.href),m=Object(l.useContext)($),b=Object(l.useContext)(ie),y=n;if(b){s.role||"tablist"!==b.role||(s.role="tab");var g=b.getControllerId(v),x=b.getControlledId(v);s["data-rb-event-key"]=v,s.id=g||s.id,s["aria-controls"]=x||s["aria-controls"],y=null==n&&null!=v?b.activeKey===v:n}"tab"===s.role&&(s.tabIndex=y?a:-1,s["aria-selected"]=y);var E=Object(X.a)((function(e){c&&c(e),null!=v&&(i&&i(v,e),m&&m(v,e))}));return f.a.createElement(u,Object(p.a)({},s,{ref:t,onClick:E,className:h()(r,y&&"active")}))})));de.defaultProps={disabled:!1};var ve=de,he={disabled:!1,as:pe.a},me=f.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,o=e.href,i=e.eventKey,c=e.onSelect,u=e.as,s=Object(d.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(y.a)(n,"nav-link"),f.a.createElement(ve,Object(p.a)({},s,{href:o,ref:t,eventKey:i,as:u,disabled:r,onSelect:c,className:h()(a,n,r&&"disabled")}))}));me.displayName="NavLink",me.defaultProps=he;var be=me,ye=f.a.forwardRef((function(e,t){var n,r,a,o=Object(m.a)(e,{activeKey:"onSelect"}),i=o.as,c=void 0===i?"div":i,u=o.bsPrefix,s=o.variant,v=o.fill,b=o.justify,g=o.navbar,x=o.className,E=o.children,O=o.activeKey,j=Object(d.a)(o,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);u=Object(y.a)(u,"nav");var w=Object(l.useContext)(Z),C=Object(l.useContext)(ne);return w?(r=w.bsPrefix,g=null==g||g):C&&(a=C.cardHeaderBsPrefix),f.a.createElement(se,Object(p.a)({as:c,ref:t,activeKey:O,className:h()(x,(n={},n[u]=!g,n[r+"-nav"]=g,n[a+"-"+s]=!!a,n[u+"-"+s]=!!s,n[u+"-fill"]=v,n[u+"-justified"]=b,n))},j),E)}));ye.displayName="Nav",ye.defaultProps={justify:!1,fill:!1},ye.Item=fe,ye.Link=be;var ge=ye,xe=(n("YFqc"),f.a.createElement);function Ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var Oe=function(e){Object(o.a)(n,e);var t=Ee(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(a.a)(n,[{key:"render",value:function(){return xe("div",null,xe(s.a,null,xe("title",null,"Investment App"),xe("link",{rel:"icon",href:"/favicon.ico"})),xe(te,{bg:"light",expand:"lg",className:"position-sticky col-12"},xe(te.Brand,{href:"/"},"Investment App"),xe(te.Toggle,{"aria-controls":"basic-navbar-nav"}),xe(te.Collapse,{id:"basic-navbar-nav"},xe(ge,{className:"mr-auto"},xe(ge.Link,{href:"/"},"Dashboard"),xe(ge.Link,{href:"/"},"Investment"),xe(ge.Link,{href:"/"},"History")),xe(ge.Link,{href:"/Login"},"Login"))))}}]),n}(l.Component);t.a=Oe},"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var o=/([A-Z])/g;var i=/^ms-/;function c(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!u.test(e))}(a)?n+=c(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],p=r[s]||new Set;p.has(l)?o=!1:(p.add(l),r[s]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var d=o.default();function v(e){var t=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}v.rewind=d.rewind,t.default=v},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,o=!1;try{var i={get passive(){return a=!0},get once(){return o=a=!0}};r.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(s){}var c=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!o){var i=r.once,c=r.capture,u=n;!o&&i&&(u=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=u),e.addEventListener(t,u,a?r:c)}e.addEventListener(t,n,r)};var u=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){u(e,t,n,r)}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("QLaP");function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(n,u){var s,l=n,f=l[i(u)],p=l[u],d=Object(a.a)(l,[i(u),u].map(c)),v=t[u],h=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],c=a[1],u=void 0!==e,s=r.current;return r.current=u,!u&&s&&i!==t&&c(t),[u?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(p,f,e[v]),m=h[0],b=h[1];return Object(r.a)({},d,((s={})[u]=m,s[v]=b,s))}),e)}n("dI71");function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function f(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}s.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,o=n.defaultProps,i=n.allowFallback,c=void 0!==i&&i,u=n.displayName,s=void 0===u?e.name||e.displayName:u,l=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!c?a.default.forwardRef(l):function(e){return l(e,null)},{displayName:s,propTypes:r,defaultProps:o})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,o,i,c],l=0;(u=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),o=n("i2R6"),i=n("48fX"),c=n("tCBg"),u=n("T0f4"),s=n("mPvQ");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){i(s,c);var u=l(s);function s(e){var o;return r(this,s),o=u.call(this,e),p&&(t.add(a(o)),n(a(o))),o}return o(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=/-(.)/g;var u=n("q1tI"),s=n.n(u),l=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e,t){var n=void 0===t?{}:t,o=n.displayName,c=void 0===o?f(e):o,u=n.Component,p=void 0===u?"div":u,d=n.defaultProps,v=s.a.forwardRef((function(t,n){var o=t.className,c=t.bsPrefix,u=t.as,f=void 0===u?p:u,d=Object(a.a)(t,["className","bsPrefix","as"]),v=Object(l.a)(c,e);return s.a.createElement(f,Object(r.a)({ref:n,className:i()(o,v)},d))}));return v.defaultProps=d,v.displayName=c,v}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("i2R6"),o=n("48fX"),i=n("tCBg"),c=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("AroE"),l=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),v=n("g/15"),h=s(n("nOHt")),m=n("elyg");function b(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,x={};function E(){return f||(g?f=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){o(n,e);var t=u(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(b(e)),as:t?(0,m.addBasePath)(b(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,c=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var u=window.location.pathname;i=(0,d.resolve)(u,i),c=c?(0,d.resolve)(u,c):i,e.preventDefault();var s=a.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[a.props.replace?"replace":"push"](i,c,{shallow:a.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,d.resolve)(e,n);return[a,r?(0,d.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=E();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),n}(p.Component);t.default=O},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("Qg85");function u(e){return!e||"#"===e.trim()}var s=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,s=e.disabled,l=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),p=function(e){var t=f.href,n=f.onClick;(s||u(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return u(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),s&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},f,{onClick:p,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),l)}))}));s.displayName="SafeAnchor",t.a=s},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("kG2m");e.exports=function(e){return r(e)||a(e)||o()}},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var a=n("JX7q");function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var c=a||"<<anonymous>>",u=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+u+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,o,u].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("wx14"),n("QA0p");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);