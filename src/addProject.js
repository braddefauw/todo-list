const addProject = () => {
    let projectBtn = document.querySelector(".add-proj");
    let newTodo = document.querySelector("#new-todo");
    let main = document.querySelector("#todo-list");

    let newProjAdd = document.querySelector(".new-proj-add");
    let addProjPopup = document.querySelector(".add-project-popup")
    let addInput = document.querySelector(".add-proj-input")

    projectBtn.addEventListener("click", function(){
        addProjPopup.style.display = "block";
    })
    newProjAdd.addEventListener("click", function(){
        newTodo.innerHTML = addInput.value;
        newTodo.style.fontSize = "2rem";
        main.innerHTML = "";
    })
}

export { addProject };