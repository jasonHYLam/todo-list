(()=>{"use strict";const t=document.getElementById("wrapper");(()=>{const t=document.getElementById("wrapper");new class{constructor(t,e,n){this.title=t,this.description=e,this.dueDate=n}renderTodo=()=>{const e=document.createElement("div"),n=document.createElement("p");n.textContent=this.title;const o=document.createElement("p");o.textContent=this.description;const d=document.createElement("p");d.textContent=this.dueDate,e.appendChild(n),e.appendChild(o),e.appendChild(d),t.appendChild(e)}}("stare in mirror","in bathroom","11/09/2022").renderTodo()})();const e=document.getElementById("add-todo-button");console.log(e),document.getElementById("submit-todo-button"),e.addEventListener("click",(e=>{(()=>{const e=document.createElement("form"),n=document.createElement("input");n.setAttribute("placeholder","task: ");const o=document.createElement("input");o.setAttribute("placeholder","description: ");const d=document.createElement("input");d.setAttribute("placeholder","due date: ");const c=document.createElement("button");c.setAttribute("type","button"),c.id="submit-todo-button",c.textContent="add";const i=document.createElement("button");i.textContent="x",e.appendChild(n),e.appendChild(o),e.appendChild(d),e.appendChild(c),e.appendChild(i),t.appendChild(e)})()})),document.addEventListener("click",(t=>{console.log(t.target),"submit-todo-button"==t.target.id&&(console.log("hehe ttttttt"),console.log({titleInput,descInput,dueDate}))}))})();