import { todoItems } from "./ToDoItems";
import { todoInput } from "./todoInput";
import { newItem } from "./newItem";

const home = () => {
    let homeBtn = document.getElementById("home");
    let main = document.querySelector("#todo-list");
    let newTodo = document.querySelector("#new-todo");
    homeBtn.addEventListener("click", function(){
        newTodo.innerHTML = "";
        main.innerHTML = "";
        todoInput();
        todoItems();
        newItem();
    })
}

export { home };