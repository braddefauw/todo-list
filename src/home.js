import { todoItems } from "./ToDoItems";

const home = () => {
    const homeBtn = document.getElementById("home");
    const newTodo = document.querySelector("#new-todo");
    let title = document.querySelector("#title");
    let todoList = document.getElementById("todo-list");
    homeBtn.addEventListener("click", function(){
        title.innerHTML = "HOME";
        newTodo.style.display = "flex";
        todoList.innerHTML = "";
        todoItems();
    })
}

export { home };