import { todoItems } from "./ToDoItems";

const home = () => {
    let homeBtn = document.getElementById("home");
    let newTodo = document.querySelector("#new-todo");
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