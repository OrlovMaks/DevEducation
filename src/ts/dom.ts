export const DOM = {
    listItems: document.querySelectorAll('.listItem') as NodeListOf<Element>,
    lists: document.querySelectorAll('.list') as NodeListOf<Element>,
    addTaskBtn: document.querySelector(".addTaskBtn"),
    toDo: document.getElementById('toDo'),
    taskInput: (<HTMLInputElement>document.querySelector(".taskInput"))
}
