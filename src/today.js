import { todayItems } from "./todayItems";

const today = () => {
    let todayBtn = document.querySelector(".today");
    let newTodo = document.querySelector("#new-todo");
    let title = document.querySelector("#title");
    let main = document.querySelector("#todo-list");
    todayBtn.addEventListener("click", function(){
        title.innerHTML = "TODAY";
        newTodo.style.display = "none";
        main.innerHTML = "";
        todayItems();
    })
}

export { today };