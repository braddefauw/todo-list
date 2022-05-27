import { item, todoListItems } from "./ToDoItems";

let todayList = [];
let weekList = [];

const newItem = () => {
    let todoInput = document.getElementById("todo-input");
    let submitBtn = document.getElementById("submit");
    let date = document.getElementById("todo-date");
    let todoValue, todoDate, today;

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
        let newItem = item(todoValue, todoDate);
        if(todoValue){
           todoList.appendChild(newItem);
           todoListItems.push(newItem);
        }
        if(date.value === today){
            todayList.push(newItem);
        }

        if(date.value === today){
            weekList.push(newItem);
        }
    })
}

export { newItem, todayList, weekList };