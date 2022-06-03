import { newProjList, grouped } from "./newItem";

let projList = [];
let pageTitle = title.innerText;

const addProject = () => {
    let index = 0;
    
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
            //create new project div + class
            let newProj = document.createElement("div");
            newProj.classList.add("new-project");
            //project text
            let projectText = addInput.value;
            //parent div for project text, there is something specific to click on besides entire div
            let projectTextDiv = document.createElement("div");
            projectTextDiv.classList.add("proj-text-div");
            projectTextDiv.innerText = projectText;
            newProj.appendChild(projectTextDiv);
            //add new project to project list
            projectsList.appendChild(newProj);
            //delete button
            let xBtn = document.createElement("p");
            xBtn.innerText = "X";
            xBtn.classList.add("x-button");
            newProj.appendChild(xBtn);
            //hide add project popup
            addProjPopup.style.display = "none";
            //add new project data index number
            newProj.dataset.indexNumber = index;
            index++;
            //convert project text to uppercase and push to project list
            let projTextUpper = projectText.toUpperCase();
            projList.push(projTextUpper);

            projectTextDiv.addEventListener("click", function(){
                pageTitle = projectText;
                // for(var i = 0; i < localStorage.length; i++){
                //     for (const [key, value] of Object.entries(localStorage)) {
                //         console.log(localStorage.length, `${key}`);
                //     }
                // }
                // console.log(pageTitle);
                title.innerHTML = projectText;
                newTodo.style.display = "flex";
                addInput.value = "";
                main.innerHTML = "";
                return pageTitle;
                // newProjList.forEach(function(item, index){
                //     main.appendChild(item);
                // })
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

export { addProject, projList };