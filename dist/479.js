"use strict";(self.webpackChunkfloating_widget=self.webpackChunkfloating_widget||[]).push([[479],{935:(n,t,e)=>{e.r(t);var a=e(950),r=e.n(a),o=e(181),i=e.n(o),c=e(379),p=e.n(c),s=e(795),l=e.n(s),m=e(569),u=e.n(m),d=e(565),f=e.n(d),v=e(216),h=e.n(v),g=e(589),b=e.n(g),x=e(383),y={};y.styleTagTransform=b(),y.setAttributes=f(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=h(),p()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;const E=e.p+"src/components/calendar.854ec87aef1c5646b2d780ab41640151.svg",w=e.p+"src/components/contact.d6557b67a66ff4f0b2d5ab1ca7f77542.svg",_=e.p+"src/components/phone.84d2a935c29ed09a2830065f1ec082e3.svg",C=e.p+"src/components/wp.38decd4cba853aa4d2b2eb658df39fac.svg";var T=function(){return r().createElement("div",{id:"floating_nav"},r().createElement("a",{href:"#",id:"reservation"},r().createElement("span",null,"Reservar"),r().createElement("img",{src:E})),r().createElement("a",{href:"#",id:"contact"},r().createElement("span",null,"Contáctanos")," ",r().createElement("img",{src:w})),r().createElement("a",{href:"#",id:"phone"},r().createElement("span",null,"Teléfono"),r().createElement("img",{src:_})),r().createElement("a",{href:"#",id:"whatsapp"},r().createElement("span",null,"Whatsapp"),r().createElement("img",{src:C})))},A=function(){return r().createElement("div",{className:"container",id:"floating_widget_b"},r().createElement(T,null))};i().render(r().createElement(A,null),document.getElementById("app"))},383:(n,t,e)=>{e.d(t,{Z:()=>c});var a=e(81),r=e.n(a),o=e(645),i=e.n(o)()(r());i.push([n.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  font-size: 3rem;\n  margin: auto;\n  max-width: 800px;\n  margin-top: 20px;\n}\n#floating_nav\n{\n    position:fixed !important;\n    right:0 !important;\n    align-items:center !important;\n    z-index:100 !important;\n}\n\n#floating_nav  >a\n{\n    position:absolute !important;\n    right:10px !important;\n    transition:0.5s !important;\n    padding:15px !important;\n    width:20px !important;\n    height:20px !important;\n    line-height:14px !important;\n    text-decoration:none !important;\n    font-size:0.6em !important;\n    text-align:right !important;\n    color:white !important;\n    border-radius:25px !important;\n    background-color:#AA8371 !important;\n    \n}\n#floating_nav >a > span {\n    visibility:hidden !important;\n    position:absolute !important;\n    opacity:0 !important;\n    transition:opacity 0.5s linear !important;\n    }\n\n#floating_nav >a > img {\n    width:20px;\n}\n    \n#floating_nav >a:hover>span{\n    visibility:visible !important;\n    position:absolute !important;\n    display:flex !important;\n    color:black !important;\n    opacity:0.7 !important;\n}\n#floating_nav a:hover {\n    width:200px !important;\n    border-radius:26px 26px 26px 26px !important;\n}\n\n#floating_nav > #reservation{\n    top:25px !important;\n}\n#floating_nav > #contact{\n    top:80px !important;\n}\n#floating_nav > #phone{\n    top:135px !important;\n}\n#floating_nav > #whatsapp{\n    top:190px !important;\n}",""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",a=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),a&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),a&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(i[p]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,a=0;a<t.length;a++)if(t[a].identifier===n){e=a;break}return e}function a(n,a){for(var o={},i=[],c=0;c<n.length;c++){var p=n[c],s=a.base?p[0]+a.base:p[0],l=o[s]||0,m="".concat(s," ").concat(l);o[s]=l+1;var u=e(m),d={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)t[u].references++,t[u].updater(d);else{var f=r(d,a);a.byIndex=c,t.splice(c,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=e(o[i]);t[c].references--}for(var p=a(n,r),s=0;s<o.length;s++){var l=e(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=p}}},569:n=>{var t={};n.exports=function(n,e){var a=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,r&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}}]);