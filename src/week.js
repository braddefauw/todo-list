import { weekItems } from "./weekItems";

const week = () => {
    let weekBtn = document.querySelector(".week");
    let newTodo = document.querySelector("#new-todo");
    let main = document.querySelector("#todo-list");
    weekBtn.addEventListener("click", function(){
        newTodo.innerHTML = "THIS WEEK";
        newTodo.style.fontSize = "2rem";
        main.innerHTML = "";
        weekItems();
    })
}

export { week };