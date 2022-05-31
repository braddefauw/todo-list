const addProject = () => {
    let projectBtn = document.querySelector(".add-proj");
    let newTodo = document.querySelector("#new-todo");
    let main = document.querySelector("#todo-list");
    projectBtn.addEventListener("click", function(){
        newTodo.innerHTML = "NEW PROJECT";
        newTodo.style.fontSize = "2rem";
        main.innerHTML = "";
    })
}

export { addProject };