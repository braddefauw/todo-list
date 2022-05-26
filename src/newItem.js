import { item } from "./ToDoItems";
import { todayItems } from "./todayItems";

const newItem = () => {
    let todoInput = document.getElementById("todo-input");
    let submitBtn = document.getElementById("submit");
    let date = document.getElementById("todo-date");
    let todoValue, todoDate, today;

    let todayList = [];

    submitBtn.addEventListener("click", function(){
        if(!todoInput.value){
            alert("Input cannot be empty. Please enter a todo!")
        }else{
            todoValue = todoInput.value;
            // console.log(toDoValue); 
        }
        //get today's date
        today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = `${yyyy}-${mm}-${dd}`;
        todoDate = date.value;
        // console.log(todoDate, today);
        // //test if date value matches current date
        // console.log(date.value === today);

        let todoList = document.querySelector("#todo-list");
        todoList.appendChild(item(todoValue, todoDate));

        if(date.value === today){
            todayList.push(item(todoValue, todoDate));
            console.log(todayList);
        }
    })
}

export { newItem };