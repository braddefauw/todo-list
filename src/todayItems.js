import { today } from "./today";
import { item } from "./ToDoItems";

const todayItems = () => {
    let todayList = document.createElement("div");
    todayList.className.padEnd("today-list");
    console.log("this is today");
}

export { todayItems };