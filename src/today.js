import { todoItems } from "./ToDoItems";

const today = () => {
    let todayBtn = document.querySelector(".today");
    let newTodo = document.querySelector(".new-todo");
    let main = document.querySelector("#todo-list");
    todayBtn.addEventListener("click", function(){
        newTodo.remove();
        main.innerHTML = "";
    })
}

export { today };