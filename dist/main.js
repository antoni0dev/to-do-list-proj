(()=>{"use strict";var n,e,r,t,o,a,i,s,c,d,l,p,u,m,b={426:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap);"]),i.push([n.id,':root {\n    --primary: #EA40A4;\n    --business: #3A82EE;\n    --personal: var(--primary);\n    --light: #EEE;\n    --dark: #313154;\n    --grey: #888;\n    --danger: #FF5B57;\n\n    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n\n    --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);\n    --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);\n}\n\n* {\n    margin: 0; padding: 0;\n    box-sizing: border-box; \n    font-family: \'montserrat\', \'sans-serif\';\n    text-transform: capitalize;    \n}\n\ninput:not([type="radio"]):not([tyoe="checkbox"]), button {\n    appearance: none;   \n    border: none;\n    outline: none;\n    background: none;\n    cursor: initial;\n}\n\nbody {\n    background: var(--light);\n    color: var(--dark);   \n}\n\nsection {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n\nh3 {\n    color: var(--dark);\n    font-size: 1rem;\n    font-weight: 400;\n    margin-bottom: 0.5rem;\n}\n\nh4 {\n    color: var(--grey);\n    font-size: 0.875rem;\n    font-weight: 700;\n    margin-bottom: 0.5rem;\n}\n\n.greeting .title {\n    display: flex;\n}\n\n.greeting .title input {\n    margin-left: 0.5rem;\n    flex: 1 1 0%;\n    min-width: 0;\n}\n\n.greeting .title, \n.greeting .title input {\n    color: var(--dark);\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n.create-todo input[type="text"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: var(--dark);\n    background-color: #FFF;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    margin-bottom: 1.5rem;\n}\n\n.create-todo .options {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;  \n    margin-bottom: 1.5rem;\n}\n\n.create-todo .options label {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1.5rem;\n    background-color: #FFF;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    cursor: pointer;\n}\n\ninput[type="radio"],\ninput[type="checkbox"] {\n    display: none;\n}\n\n.bubble {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 2px solid var(--business);\n    box-shadow: var(--business-glow);\n}\n\n.bubble.personal {\n    border-color: var(--personal);\n    box-shadow: var(--personal-glow);\n}\n\n.bubble::after {\n    content: "";\n    display: block;\n    opacity: 0;\n    height: 0px;\n    width: 0px;\n    background-color: var(--business);\n    box-shadow: var(--business-glow);\n    border-radius: 50%;\n    transition: 0.2s ease-in;\n}\n\n.bubble.personal::after {\n    background-color: var(--personal);\n    box-shadow: var(--personal-glow);\n}\n\ninput:checked ~ .bubble::after {\n    width: 10px;\n    height: 10px;\n    opacity: 1;\n}\n\n.create-todo .options label div {\n    color: var(--dark);\n    font-size: 1.5rem;\n    margin-top: 1rem;\n}\n\n.create-todo input[type="submit"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: #FFF;\n    background-color: var(--primary);\n    border-radius: 0.5rem;\n    box-shadow: var(--personal-glow);\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.create-todo input[type="submit"]:hover {\n    opacity: 0.75;\n}\n\n.todo-list .list {\n    margin: 1rem 0;\n}\n\n.todo-list .todo-item {\n    display: flex;\n    align-items: center;\n    background-color: #FFF;\n    padding: 1rem;\n    border-radius: 0.5rem;  \n    box-shadow: var(--shadow);\n    margin-bottom: 1rem;\n}\n\n.todo-item label {\n    display: block;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\n.todo-item .todo-content {\n    flex: 1 1 0%;\n}\n\n.todo-item .todo-content input {\n    color: var(--dark);\n    font-size: 1.125rem;\n}\n\n.todo-item .actions {\n    display: flex;\n    align-items: center;\n}\n\n.todo-item .actions button {\n    display: block;\n    padding: .5rem;\n    border-radius: 0.25rem;\n    color: #FFF;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.todo-item .actions button:hover {\n    opacity: 0.75;\n}\n\n.todo-item .actions .edit {\n    margin-right: 0.5rem;\n    background-color: var(--primary);\n}\n\n.todo-item .actions .delete {\n    background-color: var(--danger);\n}\n\n.todo-item.done .todo-content input {\n    text-decoration: line-through;\n    color: var(--grey);\n}',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=r(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var b=o(m,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:b,references:1})}i.push(p)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=r(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},g={};function f(n){var e=g[n];if(void 0!==e)return e.exports;var r=g[n]={id:n,exports:{}};return b[n](r,r.exports,f),r.exports}f.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return f.d(e,{a:e}),e},f.d=(n,e)=>{for(var r in e)f.o(e,r)&&!f.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},f.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),f.nc=void 0,n=f(379),e=f.n(n),r=f(795),t=f.n(r),o=f(569),a=f.n(o),i=f(565),s=f.n(i),c=f(216),d=f.n(c),l=f(589),p=f.n(l),u=f(426),(m={}).styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=t(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals})();