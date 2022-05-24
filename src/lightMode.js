const lightMode = () => {
    let clicked = false;
    
    const icon = document.querySelector(".icon");
    const header = document.querySelector(".header");
    const background = document.querySelector(".main-content");
    const todoText = document.querySelector('.new-todo-text');
    const todoList = document.querySelector('#todo-list');
    icon.addEventListener("click", function(){
        if(icon.src = "./images/icon-sun.svg"){
            header.classList.toggle("light-header");
            background.classList.toggle("light-background");
            todoText.classList.toggle("light-overlay");
        }
        if(header.classList.contains("light-header")){
            icon.src = "./images/icon-moon.svg";
        }else{
            icon.src = "./images/icon-sun.svg";
        }
        if(clicked){
            todoList.style.background = 'rgba(77, 80, 102, 0.5)';
            clicked = false;
        }else{
            todoList.style.background = 'white';
            clicked = true;
        }
        console.log(clicked);
    })
}

export { lightMode };