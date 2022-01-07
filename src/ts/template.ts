import { DOM } from "./dom";
import { dragStart, dragEnd } from "./index";
export function createTodo() {
    if (DOM.taskInput.value.trim().length === 0) {
        alert('Заполните поле!')
    } else {
        const todo_div = document.createElement("div");
        const span = document.createElement("span");
        const txt = document.createTextNode(DOM.taskInput.value);
        todo_div.classList.add("listItem");
        todo_div.setAttribute("draggable", "true");
        todo_div.appendChild(txt);
        const span_txt = document.createTextNode("\u00D7");
        span.classList.add("close");
        span.appendChild(span_txt);
        todo_div.appendChild(span);
        DOM.toDo.appendChild(todo_div);
        todo_div.addEventListener("dragstart", dragStart);
        todo_div.addEventListener("dragend", dragEnd);
        DOM.taskInput.value = "";
        span.addEventListener("click", () => {
            span.parentElement.style.display = "none";
        });
    }
}