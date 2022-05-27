import { todoItems } from "./ToDoItems";
import { todoInput } from "./todoInput";

const home = () => {
    let homeBtn = document.getElementById("home");
    let main = document.querySelector("#todo-list");
    let newTodo = document.querySelector("#new-todo");
    homeBtn.addEventListener("click", function(){
        console.log(newTodo);
        newTodo.innerHTML = "";
        newTodo.style.background = "rgba(77, 80, 102, 0.5)";
        main.innerHTML = "";
        todoInput();
        todoItems();
    })
}

export { home };