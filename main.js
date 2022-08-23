(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),d=n.n(a)()(r());d.push([t.id,"#wrapper {\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n}\n\n#below-header {\n    display: grid;\n    grid-template-columns: 2fr 5fr;\n    background-color: aquamarine;\n\n}\n\n#main-display {\n\n}\n\n#task-form-container {\n    display: absolute;\n}\n\n/* #task-container {\n    width: 60vw;\n    height: 30vh;\n    background-color: beige;\n}\n\n.form-for-task-to-be-edited {\n    width: 400px;\n    height: 200px;\n    background-color: aqua;\n}\n\n#project-container {\n    width: 60vw;\n    height: 30vh;\n    background-color: greenyellow;\n\n} */\n\n\n.drop-down {\n    position: relative;\n}\n\n.drop-content {\n   display: none; \n   position: absolute;\n   background-color: blue;\n}\n\n.drop-down:hover .drop-content {\n    display: block;\n    cursor: pointer;\n}",""]);const i=d},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var d={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&d[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},d=[],i=0;i<t.length;i++){var c=t[i],s=o.base?c[0]+o.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:h,references:1})}d.push(u)}return d}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var d=0;d<a.length;d++){var i=n(a[d]);e[i].references--}for(var c=o(t,r),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t=t=>Object.values(t).every((t=>""!=t));class e{constructor(t){this.title=t,this.tasksList=[]}addTasktoProject=t=>{this.tasksList.push(t)};removeTaskFromProject=t=>{this.tasksList.splice(t,1)}}let o=[];const r=()=>o,a=t=>new e(t),d=t=>{o.push(t)};class i{constructor(t,e,n,o,r){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.taskDone=r,this.projectsList=[]}}let c=[];const s=t=>{c.push(t)},l=()=>c,u=document.getElementById("wrapper"),p=document.getElementById("main-display"),m=document.getElementById("sidebar"),h=t=>{f("tasks"),v(t)},f=t=>{let e;for("tasks"==t?e=document.getElementById("task-container"):"projects"==t&&(e=document.getElementById("project-container"));e.lastChild;)e.removeChild(e.lastElementChild)},v=t=>{for(const e of t){const t=document.createElement("div");b(e,t),y(t),g(t)}},b=(t,e)=>{for(const[n,o]of Object.entries(t))if("title"==n||"description"==n||"dueDate"==n||"priority"==n){const t=document.createElement("div");t.textContent=o,e.appendChild(t)}},y=t=>{const e=document.createElement("input");e.classList.add("done-check-box"),e.setAttribute("type","checkbox");const n=document.createElement("button");n.classList.add("task-button"),n.classList.add("edit-button-for-task"),n.textContent="edit";const o=document.createElement("button");o.classList.add("task-button"),o.classList.add("delete-button-for-task"),o.textContent="delete",t.appendChild(e),t.appendChild(n),t.appendChild(o)},g=t=>{document.getElementById("task-container").appendChild(t)},k=t=>{f("projects");const e=document.querySelector("#project-container");for(const n of t){const t=document.createElement("div"),o=document.createElement("div");o.className="project-title",o.textContent=n.title,t.appendChild(o),document.createElement("div");const r=document.createElement("button");r.id="add-task-to-project-button",r.textContent="Add task",t.appendChild(r),e.appendChild(t)}};var E=n(379),C=n.n(E),x=n(795),w=n.n(x),L=n(569),j=n.n(L),A=n(565),I=n.n(A),B=n(216),N=n.n(B),T=n(589),S=n.n(T),O=n(426),q={};q.styleTagTransform=S(),q.setAttributes=I(),q.insert=j().bind(null,"head"),q.domAPI=w(),q.insertStyleElement=N(),C()(O.Z,q),O.Z&&O.Z.locals&&O.Z.locals,document.getElementById("add-todo-button").addEventListener("click",(t=>{(()=>{document.getElementById("main-display");const t=document.createElement("div");t.id="task-form-container";const e=document.createElement("form"),n=document.createElement("input");n.setAttribute("placeholder","task: "),n.id="task-title";const o=document.createElement("input");o.setAttribute("placeholder","description: "),o.id="task-desc";const r=document.createElement("input");r.setAttribute("placeholder","due date: "),r.id="task-due-date";const a=document.createElement("select");a.id="priority-select";const d=document.createElement("option");d.textContent="high";const i=document.createElement("option");i.textContent="med";const c=document.createElement("option");c.textContent="low",a.appendChild(d),a.appendChild(i),a.appendChild(c);const s=document.createElement("button");s.setAttribute("type","button"),s.id="submit-todo-button",s.textContent="add";const l=document.createElement("button");l.textContent="x",e.appendChild(n),e.appendChild(o),e.appendChild(r),e.appendChild(a),e.appendChild(s),e.appendChild(l),t.appendChild(e),u.appendChild(t)})()})),document.addEventListener("click",(e=>{if("submit-todo-button"==e.target.id){let e={titleValue:document.getElementById("task-title").value,descValue:document.getElementById("task-desc").value,dueDateValue:document.getElementById("task-due-date").value,priorityValue:document.getElementById("priority-select").value};if(t(e)){const t=new i((n=e).titleValue,n.descValue,n.dueDateValue,n.priorityValue);s(t),h(l())}}var n})),document.addEventListener("click",(function(t){if(t.target.classList.contains("delete-button-for-task")){let n=t.target.parentNode;e=Array.from(n.parentNode.children).indexOf(n),c.splice(e,1),h(l())}var e})),document.addEventListener("click",(function(t){if(t.target.classList.contains("edit-button-for-task")){let e=t.target.parentNode,n=Array.from(e.parentNode.children).indexOf(e);((t,e)=>{const n=document.createElement("div");n.classList.add("form-for-task-to-be-edited"),t.appendChild(n);const o=document.createElement("input");o.setAttribute("placeholder","task: "),o.id="edit-task-title",o.value=e.title;const r=document.createElement("input");r.setAttribute("placeholder","description: "),r.id="edit-task-desc",r.value=e.description;const a=document.createElement("input");a.setAttribute("placeholder","due date: "),a.id="edit-task-due-date",a.value=e.dueDate;const d=document.createElement("button");d.setAttribute("type","button"),d.id="submit-edit-todo-button",d.textContent="change";const i=document.createElement("button");i.textContent="x",n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(d),n.appendChild(i)})(e,l()[n])}})),document.addEventListener("click",(function(t){if("submit-edit-todo-button"==t.target.id){let e=t.target.parentNode.parentNode,n=document.querySelector("#edit-task-title").value,o=document.querySelector("#edit-task-desc").value,r=document.querySelector("#edit-task-due-date").value;((t,e,n,o)=>{const r=(t=>l()[t])(t);r.title=e,r.description=n,r.dueDate=o})(Array.from(e.parentNode.children).indexOf(e),n,o,r),h(l())}})),document.addEventListener("click",(function(t){"add-project-in-sidebar"==t.target.id&&(()=>{const t=document.createElement("div"),e=document.createElement("input");e.setAttribute("placeholder","project: "),e.id="project-title";const n=document.createElement("button"),o=document.createElement("button");n.id="submit-new-project-button",o.id="cancel-button",n.textContent="add",o.textContent="x",t.appendChild(e),t.appendChild(n),t.appendChild(o),m.appendChild(t)})()})),document.addEventListener("click",(function(e){if("submit-new-project-button"==e.target.id){let e=document.getElementById("project-title").value;if(t(e)){const t=a(e);d(t),k(r())}}})),document.addEventListener("click",(function(t){if(t.target.classList.contains("project-title")){let e=t.target.parentNode,n=Array.from(e.parentNode.children).indexOf(e);console.log(n),(t=>{(()=>{const t=document.getElementById("task-container");for(;t.lastChild;)t.removeChild(t.lastChild);console.log("did you do this")})();let e=r()[t];v(e.tasksList)})(n)}})),(()=>{const t=document.createElement("div");t.id="task-container",p.appendChild(t)})();const D=a("the great reckoning");d(D);const M=new i("walk","til me feet hurt","tomorrow","high"),V=new i("fish","catch 50","tomorrow","low"),P=new i("sing","for the queen","tomorrow","chicalo"),Z=new i("play","the donkey game","tomorrow","mcdonalds");s(M),s(V),s(P),s(Z),D.addTasktoProject(l()[1]),((t,e)=>{console.log(r());r()[0].tasksList.push(t)})(M),h(l()),(()=>{const t=document.createElement("div");t.id="project-container",m.appendChild(t)})(),k(r())})()})();