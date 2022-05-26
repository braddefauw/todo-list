import { todoItems } from "./ToDoItems";

const home = () => {
    let homeBtn = document.getElementById("home");
    let main = document.querySelector("#todo-list");
    homeBtn.addEventListener("click", function(){
        main.innerHTML = "";
        console.log(todoItems());
    })
}

export { home };