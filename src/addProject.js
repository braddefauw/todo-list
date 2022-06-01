const addProject = () => {
    let projectBtn = document.querySelector(".add-proj");
    let newTodo = document.querySelector("#new-todo");
    let main = document.querySelector("#todo-list");

    let newProjAdd = document.querySelector(".new-proj-add");
    let addProjPopup = document.querySelector(".add-project-popup")
    let addInput = document.querySelector(".add-proj-input");
    let projectsList = document.querySelector(".projects-list");

    projectBtn.addEventListener("click", function(){
        addProjPopup.style.display = "block";
    })
    newProjAdd.addEventListener("click", function(){
        let newProj = document.createElement("div");
        newProj.classList.add("new-project")
        newProj.innerText = addInput.value;
        projectsList.appendChild(newProj);
        addProjPopup.style.display = "none";
        newProj.addEventListener("click", function(){
            newTodo.innerHTML = newProj.innerText;
            newTodo.style.fontSize = "2rem";
            main.innerHTML = "";
        })
    })
}

export { addProject };