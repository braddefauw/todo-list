import { todayList } from "./newItem";

const todayItems = () => {
    let todoList = document.getElementById("todo-list");
    todayList.forEach(function(item, index){
        todoList.appendChild(item);
    })
}

export { todayItems };