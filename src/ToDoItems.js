let index = 1;

const item = (title, due) => {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    let check = document.createElement("div");
    check.classList.add("checkmark");
    todoItem.appendChild(check);
    //checkmark change
    check.addEventListener("click", function(){
        check.innerHTML = "<img src='images/check-bold.svg' />";
        check.style.background = 'linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
    })

    let titleText = document.createElement("p");
    titleText.innerText = title;
    todoItem.appendChild(titleText);

   let remove = document.createElement("p");
   remove.innerText = "X";
   remove.classList.add("remove");
   todoItem.appendChild(remove);

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