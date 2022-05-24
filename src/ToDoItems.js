let index = 1;

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
    todoList.appendChild(
        item(
            "Run"
        )
    );
    todoList.appendChild(
        item(
            "Code"
        )
    );
    todoList.appendChild(
        item(
            "Eat"
        )
    );
}

export { todoItems };