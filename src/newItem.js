const newItem = () => {
    let todoInput = document.getElementById("todo-input");
    let submitBtn = document.getElementById("submit");
    let date = document.getElementById("todo-date");
    submitBtn.addEventListener("click", function(){
        if(!todoInput.value){
            alert("Input cannot be empty. Please enter a todo!")
        }else{
           console.log(todoInput.value); 
        }
        console.log(date.value);
    })
}

export { newItem };