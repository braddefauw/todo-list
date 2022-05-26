import { todoItems } from "./ToDoItems";

const home = () => {
    let homeBtn = document.getElementById("home");
    let main = document.querySelector(".main-content");
    homeBtn.addEventListener("click", function(){
        main.clear();
        todoItems();
    })
}

export { home };