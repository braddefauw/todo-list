import { todayList } from "./newItem";

const todayItems = () => {
    let todoList = document.getElementById("todo-list");
    todoList.appendChild(todayList[0]);
    console.log(todayList);
}

export { todayItems };