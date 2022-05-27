let index = 1;
let todoListItems = [];

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
       todoItem.remove();
   })

    todoItem.dataset.indexNumber = index;
    index++;

    return todoItem;
}

const todoItems = () => {
    let todoList = document.querySelector("#todo-list");
    // let itemOne = item("Run", "2022-05-12");
    // let itemTwo = item("Code", "2022-05-26");
    // let itemThree = item("Eat", "2022-05-26");
    // todoListItems.push(itemOne, itemTwo, itemThree)
    todoListItems.forEach(function(item, index){
        todoList.appendChild(item);
    })   
}

export { item, todoItems, todoListItems };