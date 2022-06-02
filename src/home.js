import { todoItems } from "./ToDoItems";

const home = () => {
    let homeBtn = document.getElementById("home");
    let newTodo = document.querySelector("#new-todo");
    let title = document.querySelector("#title");
    homeBtn.addEventListener("click", function(){
        title.innerHTML = "HOME";
        newTodo.style.display = "flex";
        todoItems();
    })
}

export { home };