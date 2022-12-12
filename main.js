//function to add two numbers
function add(num1, num2) {
    return (num1+num2);
}

//function to subtract two numbers
function sub(num1, num2) {
    return (num1-num2);
}

//function to multiply two numbers
function multiply(num1, num2) {
    return (num1*num2);
}

//function to divide two numbers
function divide(num1, num2) {
    return (num1/num2);
}

//function to find reminder of two numbers
function mod(num1, num2) {
    return (num1%num2);
}

function operate(op,num1, num2) {
    switch(op) {
        case "+":
            return add(num1,num2);
        case "-":
            return sub(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        case "%":
            return mod(num1,num2);
    }
}

//store input,output and equal element
let input=document.getElementById("input");
let output=document.getElementById("output");
let equals=document.getElementById("equals");

//get the array of digit and operator elements
let number=document.querySelectorAll(".digit");
let operator=document.querySelectorAll(".operation");

//variables to store the input,result and temp number
let num1="";
let num2="";
let currentInput="";
let result=0;

//variable to store operator
let op="";

//for each element in the array of digits invoke getInput
number.forEach(num => {
    num.addEventListener("click", getInput1)
});


//function to get the inputs and store it in a separate variable
function getInput1(e){
        let temp=e.target;
        currentInput=currentInput+temp.value;
        //display currentInput 
        displayInput(currentInput);
}

//for each element in the operator array invole the getOperator function
operator.forEach(oper => {
    oper.addEventListener("click", getOperator)
    num2="";
});

//function to store the operator in the op
function getOperator(ev) {
    let temp=ev.target;
    op=temp.value;
    num2="";
    //move the value of cuurentInput to num1
    num1=currentInput;
    //when a operator is received, start collecting the digits to num2;
    input.innerHTML=""; //reset the display
    currentInput=""; //reset currentInput

    //event listener to get second input
    number.forEach(element => {
        //for each click call the getinput2 function and pass the operator as parameter
        element.addEventListener("click", (e)=> getInput2(e)
        )
    });
}

//function to collect operator, second input 
function getInput2(e){
    
    //reset currentInput
    currentInput="";
    let temp=e.target;
    currentInput=currentInput+temp.value;

    //display second input to users
    displayInput(currentInput); 

    num2=currentInput;
    currentInput="";
    
}


//when equals is clicked  call the operator to perform mathematical operation and display the output
equals.addEventListener("click", () => { 

        //call the operator function
        result=operate(op,parseInt(num1),parseInt(num2));

        //move the result to currentInput to store the value for recursive calculation
        currentInput=result;
        num2="";
        op="";
        displayOutput(result);
});


function displayInput(e) {
    input.innerHTML=e;
}

function displayOutput(res) {
    output.innerHTML=res;
}


//elements to clear value
let allClear=document.getElementById("all-clear");
let clear=document.getElementById("clear");

allClear.addEventListener("click",clearSlate);
clear.addEventListener("click",clearSlate);

function clearSlate(){
    num1="";
    num2="";
    op="";
    currentInput="";
    displayInput("input");
    displayOutput("output");
    number.forEach(element => {
        element.removeEventListener("click", getInput2);
        element.removeEventListener("click", getInput1);
        
    });

    number.forEach(num => {
        num.addEventListener("click", getInput1)
    });
}
