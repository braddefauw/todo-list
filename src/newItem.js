import { item, todoListItems } from "./ToDoItems";

import moment from 'moment';

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
        today = moment().format('L');
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

        let sevenDaysAgo = moment().subtract(7, 'days').calendar();
        let sevenDaysFromNow = moment().add(7, 'days').calendar();
        console.log(today, sevenDaysAgo, sevenDaysFromNow);
    })
}

export { newItem, todayList, weekList };