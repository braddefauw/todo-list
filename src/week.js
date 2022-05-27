import { todayItems } from "./todayItems";

const week = () => {
    let todayBtn = document.querySelector(".week");
    let newTodo = document.querySelector("#new-todo");
    let main = document.querySelector("#todo-list");
    todayBtn.addEventListener("click", function(){
        newTodo.innerHTML = "THIS WEEK";
        newTodo.style.fontSize = "2rem";
        main.innerHTML = "";
        weekItems();
    })
}

export { week };