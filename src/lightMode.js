const lightMode = () => {
    let clicked = false;
    
    const icon = document.querySelector(".icon");
    const header = document.querySelector(".header");
    const background = document.querySelector(".main-content");
    const todoText = document.querySelector('.new-todo-text');
    const todoList = document.querySelector('#todo-list');
    const footer = document.querySelector("footer");
    const footerh5 = document.querySelector(".fh5");
    const foooterImg = document.querySelector(".footer-img");
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
        footer.classList.toggle("light-footer");
        footerh5.classList.toggle("light-footer");
        foooterImg.classList.toggle("light-footer-image");
    })
}

export { lightMode };