import { todoItems } from "./ToDoItems";
import { todoInput } from "./todoInput";
import { newItem } from "./newItem";

const home = () => {
    let homeBtn = document.getElementById("home");
    let main = document.querySelector("#todo-list");
    let newTodo = document.querySelector("#new-todo");
    let title = document.querySelector("#title");
    let newProjToDo = document.querySelector(".new-proj-todo-text");
    homeBtn.addEventListener("click", function(){
        title.innerHTML = "HOME";
        main.innerHTML = "";
        newTodo.style.display = "flex";
        if(newTodo.hasChildNodes() === "false"){
            todoInput();
        }
        todoItems();
        newItem();
    })
}

export { home };