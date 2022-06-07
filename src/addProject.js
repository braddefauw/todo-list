import { newProjList, todoArr, todayList, weekList } from "./newItem";
import { item, todoListItems } from "./ToDoItems";
import moment from 'moment';

let projList = [];
let pageTitle = title.innerText;
let today;

let oldProjList= JSON.parse(localStorage.getItem('projList') || "[]");

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

   for(let proj of oldProjList){
        proj = proj.projectText;
        //create new project div + class
        let newProj = document.createElement("div");
        newProj.classList. add("new-project");
        //project text
        let projectText = proj;
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
        projList.push({projectText});
        pageTitle = projectText;
        title.innerHTML = projectText;
        newTodo.style.display = "flex";
        addInput.value = "";
        main.innerHTML = "";
        for(var i = 0; i < oldProjList.length; i++){
            if(proj == oldProjList[i].projectText){
                // console.log(oldProjList, projTextUpper)
                let oldList = JSON.parse(localStorage.getItem(`${projTextUpper}`));
                let title = document.querySelector("#title");
                pageTitle = proj;
                let todoValue, todoDate, today;
                console.log(oldList, i, oldList);
                todoValue = oldList.todoValue;

                // get today's date
                today = moment().format('L');
                todoDate = oldList.todoDate;
                todoArr.push({todoValue, todoDate});
                let formattedDate;
                if(todoDate){
                    let year = todoDate.substr(0, 4);
                    let month = todoDate.substr(5, 2);
                    let day = todoDate.substr(8, 2);
                    formattedDate = `${month}/${day}/${year}`;
                    return formattedDate;
                }

                let todoList = document.querySelector("#todo-list");
                let newItem = item(todoValue, todoDate);
                todoList.appendChild(newItem);
                // console.log(todoList.childNodes);
                // newProjItems.push(newItem);

                if(formattedDate === today){
                    todayList.push(newItem);
                }

                let sevenDaysAgo = moment().subtract(7, 'days').calendar();
                let sevenDaysFromNow = moment().add(7, 'days').calendar();
                let isThisWeek = (formattedDate > sevenDaysAgo && formattedDate < sevenDaysFromNow);
                if(isThisWeek){
                    weekList.push(newItem);
                }

                if(projectsList.hasChildNodes()){
                    newProjList.push({todoValue, todoDate});
                }
                pageTitle = pageTitle.toUpperCase();
                // localStorage.setItem(`${pageTitle}`, JSON.stringify(newProjList));
            }
        }
        projectTextDiv.addEventListener("click", function(){
            pageTitle = projectText;
            title.innerHTML = projectText;
            newTodo.style.display = "flex";
            addInput.value = "";
            main.innerHTML = "";
            let projTextUpper = projectText.toUpperCase();
            let oldContent = JSON.parse(localStorage[`${projTextUpper}`]);
            for (const [key, value] of Object.entries(oldContent)) {
                // console.log(value.todoValue, value.todoDate);
                let todoList = document.querySelector("#todo-list");
                let newItem = item(value.todoValue, value.todoDate);
                todoList.appendChild(newItem);
            }
        })
    }

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
            addInput.value = "";
            //hide add project popup
            addProjPopup.style.display = "none";
            //add new project data index number
            newProj.dataset.indexNumber = index;
            index++;
            //convert project text to uppercase and push to project list
            let projTextUpper = projectText.toUpperCase();
            projList.push({projectText});
            localStorage.setItem(`projList`, JSON.stringify(projList));
            // console.log(localStorage);
            projectTextDiv.addEventListener("click", function(){
                pageTitle = projectText;
                title.innerHTML = projectText;
                newTodo.style.display = "flex";
                addInput.value = "";
                main.innerHTML = "";
                let projTextUpper = projectText.toUpperCase();
                let oldContent = JSON.parse(localStorage[`${projTextUpper}`]);
                for (const [key, value] of Object.entries(oldContent)) {
                    // console.log(value.todoValue, value.todoDate);
                    let newItem = item(value.todoValue, value.todoDate);
                    let todoList = document.querySelector("#todo-list");
                    todoList.appendChild(newItem);
                }
                // let oldList = JSON.parse(localStorage.getItem(`${projTextUpper}`))
                // if(!oldList){

                // }
                // console.log(pageTitle);
                // newProjList.forEach(function(item, index){
                //     main.appendChild(item);
                // })
            })
            xBtn.addEventListener("click", function(){
                pageTitle = projectText;
                this.parentElement.remove();
                addInput.value = "";
                let index = parseInt(newProj.dataset.indexNumber);
                if(index > -1){
                    projList.splice(index, 1)
                }
                localStorage.setItem(`projList`, JSON.stringify(projList));
            })
        }
    })
    newProjCancel.addEventListener("click", function (){
        addProjPopup.style.display = "none";
    })
}

export { addProject, projList };