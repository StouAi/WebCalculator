let alldigits = document.querySelectorAll(".operand")
let operators = document.querySelectorAll(".operator")
let screen = document.querySelector(".screen")
let num1 = undefined
let num2 = undefined
let operator = undefined
let expression = []
let equalbtn = document.querySelector(".equal")
let clearbtn = document.querySelector(".clear")
let isResultDisplayed  = false
equalbtn.addEventListener("click",()=>{
    num2 = parseFloat(expression.join(""))
    operation(num1,num2,operator)
    isResultDisplayed = true
    
});

alldigits.forEach(button=>{
    button.addEventListener("click",()=>{
    if (isResultDisplayed) {
        // Clear the screen and start a new calculation
        screen.textContent = "";
        expression = [];
        isResultDisplayed = false; // Reset the flag
    }
    screen.textContent += button.textContent
    expression.push(parseFloat(button.textContent))
    
    
    });
});

operators.forEach(button=>{
    button.addEventListener("click",()=>{
    if(expression.length===0 && num1===undefined){
        console.log("h1")
        return
    }
    if(num1===undefined){
        // Set num1 and operator for the first time
        num1 = parseFloat(expression.join(""));
        operator = button.textContent;
        expression = [];
        screen.textContent = "";
        return;
    }
    if(operator!==undefined && expression.length===0){
        operator = button.textContent
        console.log("h3")
        return 
    }
    console.log("h4")
    num2 = parseFloat(expression.join(""))
    operation(num1,num2,operator)
    operator = button.textContent
    isResultDisplayed = true; // Set flag to true after displaying result
    

    
    
    
    });
});

clearbtn.addEventListener('click',()=>{
    screen.textContent = ""
    expression = []
    num1 = undefined
    num2 = undefined
    operator = undefined
    isResultDisplayed = false; // Reset the flag
})

function operation(a,b,operator){
    if (a===undefined || b===undefined || operator===undefined) return
    let result =0
    if (operator=="+"){
        
        result = add(a,b)
    }
    else if(operator=="-"){
        result = sub(a,b)
    }
    else if(operator=="/"){
        result = divide(a,b)
    }
    else{
        result = multi(a,b)
    }
    
    screen.textContent = result;
    num1 = result; // Store the result for chaining operations
    num2 = undefined;
    operator = undefined;
    expression = [];
    isResultDisplayed = true; // Set flag to true after displaying result

}

function add(a,b){
    return a+b
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
    
}
