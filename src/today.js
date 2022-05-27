import { todayItems } from "./todayItems";
import { todoInput } from "./todoInput";

const today = () => {
    let todayBtn = document.querySelector(".today");
    let newTodo = document.querySelector("#new-todo");
    let main = document.querySelector("#todo-list");
    todayBtn.addEventListener("click", function(){
        newTodo.innerHTML = "TODAY";
        newTodo.style.fontSize = "2rem";
        main.innerHTML = "";
        todayItems();
    })
}

export { today };