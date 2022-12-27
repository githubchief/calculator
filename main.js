//function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

//function to subtract two numbers
function sub(num1, num2) {
  return num1 - num2;
}

//function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

//function to divide two numbers
function divide(num1, num2) {
  if (num2 != 0) return num1 / num2;
  else return "Infinity";
}

//function to find reminder of two numbers
function mod(num1, num2) {
  return num1 % num2;
}

function operate(op, num1, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return sub(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return mod(num1, num2);
  }
}

//store input,output and equal element
let input = document.getElementById("input");
let output = document.getElementById("output");
let equals = document.getElementById("equals");

//get the array of digit and operator elements
let number = document.querySelectorAll(".digit");
let operator = document.querySelectorAll(".operation");

//variables to store the input,result and temp number
let num1 = "";
let num2 = "";
let currentInput = "";
let result = 0;

//variable to store operator
let op = "";

//event listener to get number
number.forEach((num) => {
  num.addEventListener("click", getInput);
});

function getInput(e) {
  let temp = e.target;
  if (temp.value == ".") {
    if (currentInput.includes(".")) {
      return;
    }
  }
  currentInput = currentInput + temp.value;
  displayInput(currentInput);
}

//event listener to get operator
operator.forEach((oper) => {
  oper.addEventListener("click", getOperator);
});

let count = 0;
//get operator function to handle the operator event listener and store the input value in op
function getOperator(e) {
  let temp = e.target;
  op = temp.value;
  count++;

  //if operator function is called more than once, perform calculation for num1, num2 and store it in num1
  if (count >= 2) {
    if (num2 == "") {
      num2 = currentInput;
      currentInput = "";
    }

    let i = operate(op, parseInt(num1), parseInt(num2));
    //reset count nad num2 for next operation
    num2 = "";
    count = 1;
    num1 = i;
    displayOutput(i);
  }

  //if num1 is empty assign current input to num1
  else if (num1 == "") {
    num1 = currentInput;
    //clear current input to get next input value
    currentInput = "";
  }
}

//when equals is clicked  call the operator to perform mathematical operation and display the output
equals.addEventListener("click", () => {
  //call the operator function
  if (num2 == "") {
    num2 = currentInput;
    currentInput = "";
  }

  result = operate(op, parseFloat(num1), parseFloat(num2));
  num2 = "";
  count = 0;
  num1 = "";
  displayOutput(result);
});

//function to display inputs
function displayInput(inp) {
  input.innerHTML = inp;
}

//function to display outputs
function displayOutput(res) {
  output.innerHTML = res;
}

//elements to clear value
let allClear = document.getElementById("all-clear");
let clear = document.getElementById("clear");

//event listeners to clear the value and call the event listener function clearState
allClear.addEventListener("click", clearSlate);
clear.addEventListener("click", clearSlate);

//clear function to reset variables to initial condition and remove event listeners and add them again for num1
function clearSlate() {
  num1 = "";
  num2 = "";
  op = "";
  count = 0;
  currentInput = "";
  displayInput("input");
  displayOutput("output");
}
