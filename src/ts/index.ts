import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { DOM } from "./dom";
import { createTodo } from "./template";
let draggableTodo;
DOM.listItems.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
});
export function dragStart() {
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
}
export function dragEnd() {
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
}
DOM.lists.forEach((list) => {
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", dragDrop);
});
function dragOver(e: DragEvent): void {
    e.preventDefault();
}
function dragEnter() {
    this.style.border = "3px solid #ccc";
}
function dragLeave() {
    this.style.border = "none";
}
function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo);
}
DOM.addTaskBtn.addEventListener("click", createTodo);