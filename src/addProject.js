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
        //create new project div + class
        let newProj = document.createElement("div");
        newProj.classList.add("new-project");
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
        projList.push(projTextUpper);
        projectTextDiv.addEventListener("click",function(){
            pageTitle = projectText;
            title.innerHTML = projectText;
            newTodo.style.display = "flex";
            addInput.value = "";
            main.innerHTML = "";
            for(var i = 0; i < localStorage.length; i++){
                for (const [key, value] of Object.entries(localStorage)) {
                    for(var i = 0; i < localStorage.length; i++){
                        if(key == projTextUpper){
                            let oldList = JSON.parse(localStorage.getItem(`${projTextUpper}`))
                            for(let listItem of oldList){
                                let newProjItems = [];
                                let title = document.querySelector("#title");
                                pageTitle = title.innerText;
                                let todoValue, todoDate, today;
                                
                                todoValue = listItem.todoValue;

                                //get today's date
                                today = moment().format('L');
                                todoDate = listItem.todoDate;
                                todoArr.push({todoValue, todoDate});
                                let year = todoDate.substr(0, 4);
                                let month = todoDate.substr(5, 2);
                                let day = todoDate.substr(8, 2);
                                let formattedDate = `${month}/${day}/${year}`

                                let todoList = document.querySelector("#todo-list");
                                let newItem = item(todoValue, todoDate);
                                todoList.appendChild(newItem);
                                console.log(todoList.childNodes);
                                newProjItems.push(newItem);

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
                                    newProjList.push(newItem);
                                }
                            }
                        }
                    }
                }
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
            //hide add project popup
            addProjPopup.style.display = "none";
            //add new project data index number
            newProj.dataset.indexNumber = index;
            index++;
            //convert project text to uppercase and push to project list
            let projTextUpper = projectText.toUpperCase();
            projList.push(projectText);
            localStorage.setItem(`projList`, JSON.stringify(projList));
            console.log(localStorage);

            projectTextDiv.addEventListener("click", function(){
                pageTitle = projectText;
                title.innerHTML = projectText;
                newTodo.style.display = "flex";
                addInput.value = "";
                main.innerHTML = "";
                for(var i = 0; i < localStorage.length; i++){
                    for (const [key, value] of Object.entries(localStorage)) {
                        for(var i = 0; i < localStorage.length; i++){
                            if(key == projTextUpper){
                                let oldList = JSON.parse(localStorage.getItem(`${projTextUpper}`))
                                for(let listItem of oldList){
                                    let newProjItems = [];
                                    let title = document.querySelector("#title");
                                    pageTitle = title.innerText;
                                    let todoValue, todoDate, today;
                                    
                                    todoValue = listItem.todoValue;

                                    //get today's date
                                    today = moment().format('L');
                                    todoDate = listItem.todoDate;
                                    todoArr.push({todoValue, todoDate});
                                    let year = todoDate.substr(0, 4);
                                    let month = todoDate.substr(5, 2);
                                    let day = todoDate.substr(8, 2);
                                    let formattedDate = `${month}/${day}/${year}`

                                    let todoList = document.querySelector("#todo-list");
                                    let newItem = item(todoValue, todoDate);
                                    todoList.appendChild(newItem);
                                    console.log(todoList.childNodes);
                                    newProjItems.push(newItem);

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
                                        newProjList.push(newItem);
                                    }
                                }
                            }
                        }
                    }
                }
                // console.log(pageTitle);
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