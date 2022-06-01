const todoInput = () => {
    let main = document.querySelector(".main-content");
    let newTodo = document.getElementById("new-todo");
    let newTodoText = document.createElement("div");
    let todoList = document.querySelector("#todo-list");
    newTodoText.classList.add("new-todo-text");
    newTodo.appendChild(newTodoText);

    let todoInput = document.createElement("input");
    todoInput.setAttribute("type", "text");
    todoInput.setAttribute("id", "todo-input");
    todoInput.setAttribute("name", "todo-input");
    todoInput.setAttribute("placeholder", "Create a new todo... ");
    newTodoText.appendChild(todoInput);

    let todoDate = document.createElement("input");
    todoDate.setAttribute("type", "date");
    todoDate.setAttribute("id", "todo-date");
    todoDate.setAttribute("name", "todo-date");
    newTodoText.appendChild(todoDate);

    let submitBtn = document.createElement("button");
    submitBtn.id = "submit";
    submitBtn.innerText = "Submit";
    newTodoText.appendChild(submitBtn);

    let cancel = document.createElement("button");
    cancel.id = "cancel";
    cancel.innerText = "Cancel";
    newTodoText.appendChild(cancel);

    main.insertBefore(newTodo, todoList)
}

export {todoInput}