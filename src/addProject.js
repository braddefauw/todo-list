const addProject = () => {
    let projectBtn = document.querySelector(".add-proj");
    let title = document.querySelector("#title");
    let newTodo = document.querySelector("#new-todo")
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
            newProj.classList.add("new-project")
            newProj.innerText = addInput.value;
            projectsList.appendChild(newProj);
            let xBtn = document.createElement("p");
            xBtn.innerText = "X";
            xBtn.classList.add("x-button");
            newProj.appendChild(xBtn);
            addProjPopup.style.display = "none";
            newProj.addEventListener("click", function(){
                title.innerHTML = newProj.innerText;
                title.style.fontSize = "2rem";
                main.innerHTML = "";
            })
        }
    })
    newProjCancel.addEventListener("click", function (){
        addProjPopup.style.display = "none";
    })
}

export { addProject };