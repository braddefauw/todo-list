import { todoArr } from './newItem';

let index = 0;
let todoListItems = [];
let pageTitle = title.innerText;

const item = (title, due) => {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    let check = document.createElement("div");
    check.classList.add("checkmark");
    todoItem.appendChild(check);
    //checkmark change
    check.addEventListener("click", function(){
        check.classList.toggle("gradient");
        if (check.innerHTML === "") {
            check.innerHTML = "<img src='images/check-bold.svg' />";
        } else {
            check.innerHTML = "";
        }
        titleText.classList.toggle("strikethrough");
    })

    let titleText = document.createElement("p");
    titleText.innerText = title;
    todoItem.appendChild(titleText);

    let date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("id", "todo-date");
    date.setAttribute("name", "todo-date");
    date.setAttribute("value", due);
    todoItem.appendChild(date);

   let remove = document.createElement("p");
   remove.innerText = "X";
   remove.classList.add("remove");
   todoItem.appendChild(remove);

   remove.addEventListener("click", function(){
        // console.log(todoArr, todoItem.dataset.indexNumber);
        let index = parseInt(todoItem.dataset.indexNumber);
        // console.log(index, index>-1);
        if(index > -1){
            todoArr.splice(index, 1)
        }
        // console.log(todoArr);
        todoItem.remove();
        localStorage.setItem(`${pageTitle}`, JSON.stringify(todoArr));
        // console.log(localStorage);
        // console.log(localStorage[`${pageTitle}`]);
   })

    todoItem.dataset.indexNumber = index;
    index++;

    return todoItem;
}

const todoItems = () => {
    let todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";
    todoListItems.forEach(function(item, index){
        todoList.appendChild(item);
    })   
}

export { item, todoItems, todoListItems };