import { item, todoListItems } from "./ToDoItems";

import moment from 'moment';

let todayList = [];
let weekList = [];
let projectsList = document.querySelector(".projects-list");
let newProjList = [];

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
        }
        //get today's date
        today = moment().format('L');
        todoDate = date.value;
        let year = todoDate.substr(0, 4);
        let month = todoDate.substr(5, 2);
        let day = todoDate.substr(8, 2);
        let formattedDate = `${month}/${day}/${year}`

        let todoList = document.querySelector("#todo-list");
        let newItem = item(todoValue, todoDate);
        if(todoValue){
           todoList.appendChild(newItem);
           todoListItems.push(newItem);
        }
        if(formattedDate === today){
            todayList.push(newItem);
        }

        let sevenDaysAgo = moment().subtract(7, 'days').calendar();
        let sevenDaysFromNow = moment().add(7, 'days').calendar();
        let isThisWeek = (formattedDate > sevenDaysAgo && formattedDate < sevenDaysFromNow);
        if(isThisWeek){
            weekList.push(newItem);
        }

        if(projectsList.hasChildNodes()){
            newProjList.push(newItem);
        }else{
            console.log("no children")
        }

        todoInput.value = "";
        date.value = "";
    })
}

export { newItem, todayList, weekList, newProjList };