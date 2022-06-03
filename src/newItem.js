import { item, todoListItems } from "./ToDoItems";
import { projList } from "./addProject";
import moment from 'moment';

// function groupBy(list, keyGetter) {
//     const map = new Map();
//     list.forEach((item) => {
//          const key = keyGetter(item);
//          const collection = map.get(key);
//          if (!collection) {
//              map.set(key, [item]);
//          } else {
//              collection.push(item);
//          }
//     });
//     return map;
// }

let oldHomeList= JSON.parse(localStorage.getItem('HOME') || "[]");
console.log(oldHomeList);

let todoArr = [];
let todayList = [];
let weekList = [];
let projectsList = document.querySelector(".projects-list");
let newProjList = [];
let grouped;

const oldItems = () => {
    for(let listItem of oldHomeList){
        let todoInput = document.getElementById("todo-input");
        let submitBtn = document.getElementById("submit");
        let date = document.getElementById("todo-date");
        let title = document.querySelector("#title");
        let todoValue, todoDate, today;
        let idx = 0;
    
        todoValue = listItem.todoValue;
    
        //get today's date
        today = moment().format('L');
        todoDate = listItem.todoDate;
        todoArr.push({todoValue, todoDate});
        let year = todoDate.substr(0, 4);
        let month = todoDate.substr(5, 2);
        let day = todoDate.substr(8, 2);
        let formattedDate = `${month}/${day}/${year}`
    
        let todoList = document.querySelector("#todo-list");
        let newItem = item(todoValue, todoDate);
        todoList.appendChild(newItem);
        todoListItems.push(newItem);

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
        }
    }
}

const newItem = () => {
    let todoInput = document.getElementById("todo-input");
    let submitBtn = document.getElementById("submit");
    let date = document.getElementById("todo-date");
    let title = document.querySelector("#title");
    let todoValue, todoDate, today;
    let idx = 0;

    let pageTitle = title.innerText;

    submitBtn.addEventListener("click", function(){
        if(!todoInput.value){
            alert("Input cannot be empty. Please enter a todo!")
        }else{
            todoValue = todoInput.value;
        }
        //get today's date
        today = moment().format('L');
        todoDate = date.value;
        todoArr.push({todoValue, todoDate});
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
        }

        // if(projectsList.hasChildNodes()){
        //     for(var i = 0; i < projList.length; i++){
        //         if(title.innerText == projList[i]){
        //             // newProjList.push({idx, todoValue, formattedDate, pageTitle});
        //             newProjList.push(newItem);
        //             idx++;
        //             // grouped = groupBy(newProjList, item => item.pageTitle);
        //             // console.log(grouped);
        //             // grouped.forEach( (val, key) => console.log(key, val));
        //         }
        //     }
        // }else{
        //     console.log("no children")
        // }
        // console.log(pageTitle, todoArr);
        localStorage.setItem(`${pageTitle}`, JSON.stringify(todoArr));
        console.log(localStorage[`${pageTitle}`]);

        todoInput.value = "";
        date.value = "";
    })
}

export { oldItems, newItem, todayList, weekList, newProjList, todoArr };