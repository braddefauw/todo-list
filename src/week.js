import { weekItems } from "./weekItems";

const week = () => {
    let weekBtn = document.querySelector(".week");
    let newTodo = document.querySelector("#new-todo");
    let title = document.querySelector("#title");
    let main = document.querySelector("#todo-list");
    weekBtn.addEventListener("click", function(){
        newTodo.style.display = "none";
        title.innerHTML = "THIS WEEK";
        main.innerHTML = "";
        weekItems();
    })
}

export { week };