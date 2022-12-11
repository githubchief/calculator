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

//store input,output dom element
let input=document.getElementById("input");
let output=document.getElementById("output");
let equals=document.getElementById("equals");

//get the array of digit elements
let number=document.querySelectorAll(".digit");

//variable to store the input number
let num1="";
let num2="";
let currentInput="";
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
        displayInput(currentInput);
}

//for each element in the operator array get the operator and store it in the op based on the click
let operator=document.querySelectorAll(".operation");
operator.forEach(oper => {
    oper.addEventListener("click", getOperator)
});

function getOperator(ev) {
    let temp=ev.target;
    op=temp.value;
    num1=currentInput;
    input.innerHTML="";
    currentInput="";
    //when a operator is received, collect the digits to num2;
    number.forEach(element => {
        element.addEventListener("click", (e)=> getInput2(e,op))
    });
}

function getInput2(e,op){

    currentInput="";
    let temp=e.target;
    currentInput=currentInput+temp.value;
    displayInput(currentInput);
    num2=currentInput;
}

let result=0;
//console.log(num2,num1,op);c
equals.addEventListener("click", () => { 
    result=operate(op,parseInt(num1),parseInt(num2));
    displayOutput(result);
});

//operate(op,num1,num2)

function displayInput(e) {
    //    input.textContent=input.textContent+e;
    input.innerHTML=e;
}

function displayOutput(res) {
    output.innerHTML=res;
}