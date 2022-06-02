import { todoItems } from "./ToDoItems";
import { newItem } from "./newItem";

const home = () => {
    let homeBtn = document.getElementById("home");
    let main = document.querySelector("#todo-list");
    let newTodo = document.querySelector("#new-todo");
    let title = document.querySelector("#title");
    homeBtn.addEventListener("click", function(){
        title.innerHTML = "HOME";
        newTodo.style.display = "flex";
        todoItems();
    })
}

export { home };