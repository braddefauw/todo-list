const addProject = () => {
    let projectBtn = document.querySelector(".add-proj");
    let title = document.querySelector("#title");
    let newTodo = document.querySelector("#new-todo");
    let main = document.querySelector("#todo-list");

    let newProjAdd = document.querySelector(".new-proj-add");
    let newProjCancel = document.querySelector(".new-proj-cancel")
    let addProjPopup = document.querySelector(".add-project-popup")
    let addInput = document.querySelector(".add-proj-input");
    let projectsList = document.querySelector(".projects-list");

    projectBtn.addEventListener("click", function(){
        addProjPopup.style.display = "block";
    })
    newProjAdd.addEventListener("click", function(){
        if(!addInput.value){
            alert("Please enter a project name");
        }else{
            let newProj = document.createElement("div");
            newProj.classList.add("new-project");
            let projectText = addInput.value;
            let projectTextDiv = document.createElement("div");
            projectTextDiv.classList.add("proj-text-div");
            projectTextDiv.innerText = projectText;
            newProj.appendChild(projectTextDiv);
            projectsList.appendChild(newProj);
            let xBtn = document.createElement("p");
            xBtn.innerText = "X";
            xBtn.classList.add("x-button");
            newProj.appendChild(xBtn);
            addProjPopup.style.display = "none";
            projectTextDiv.addEventListener("click", function(){
                title.innerHTML = projectText;
                newTodo.style.display = "flex";
                addInput.value = "";
                main.innerHTML = "";
            })
            xBtn.addEventListener("click", function(){
                this.parentElement.remove();
                addInput.value = "";
            })
        }
    })
    newProjCancel.addEventListener("click", function (){
        addProjPopup.style.display = "none";
    })
}

export { addProject };