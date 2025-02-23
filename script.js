allbutton = document.querySelectorAll(".buttons button")
screen = document.querySelector(".screen")
let expression = []
allbutton.forEach(button=>{
    button.addEventListener("click",()=>{
    screen.textContent = ""
    expression.push(button.textContent)
    screen.textContent = expression.join("")
    if(expression.length==3){
        operation(expression)
    }
    });
});

function operation(expres){
    
}

function add(a,b){
    return a,b
}

function sub(a,b){
    return a-b
}

function divide(a,b){
    if (b==0){
        return "who let you cook?"
    }
return a/b
}

function multi(a,b){
    return a*b
}

function clear(){
    screen.textContent = ""
    expression = []
}
