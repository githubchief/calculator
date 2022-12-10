//function to add two numbers
function add(num1, num2) {
    return num1+num2;
}

//function to subtract two numbers
function sub(num1, num2) {
    return num1-num2;
}

//function to multiply two numbers
function multiply(num1, num2) {
    return num1*num2;
}

//function to divide two numbers
function divide(num1, num2) {
    return num1/num2;
}

//function to find reminder of two numbers
function mod(num1, num2) {
    return num1%num2;
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
