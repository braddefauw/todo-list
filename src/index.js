import { lightMode } from './lightMode';
import { oldItems, newItem } from './newItem';
import { home } from './home';
import { today } from './today';
// import { todoInput } from './todoInput';
import { item, todoListItems, todoItems } from './ToDoItems';
import { week } from './week';
import { addProject } from './addProject';

console.log("this is working still");
// import { compareAsc, format } from 'date-fns'

// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// //=> '2014-02-11'

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]
// console.log(dates.sort(compareAsc));
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]

// document.getElementById('todo-date').value = new Date().toDateInputValue();

//page load
document.querySelector("body").onload = function() {myFunction()};

function myFunction() {
  let title = document.getElementById("title");
  title.innerText = "HOME";
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todoListItems.forEach(function(item, index){
    todoList.appendChild(item);
  })
}

//input old items
oldItems();

//input
// todoInput();

//bring in todo items
todoItems();

//light mode
lightMode();

//create new item
newItem();

//home navigation
home();

//today nav
today();

//week nav
week();

//add project
addProject();