import { weekList } from "./newItem";

const weekItems = () => {
    let todoList = document.getElementById("todo-list");
    weekList.forEach(function(item, index){
        todoList.appendChild(item);
    })
}

export { weekItems };