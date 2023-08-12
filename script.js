const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let currentOperator = "";
let prevInput = "";

buttons.forEach(button => 
{
  button.addEventListener("click", handleClick);
}
);

function handleClick(event) 
{
  const buttonValue = event.target.textContent;

  if (!isNaN(buttonValue) || buttonValue === ".") 
  {
    currentInput += buttonValue;
    display.value = currentInput;
  } 
  else if (buttonValue === "C") 
  {
    clearDisplay();
  } 
  else if (buttonValue === "=") 
  {
    calculate();
  }
   else 
  {
    currentOperator = buttonValue;
    prevInput = currentInput;
    currentInput = "";
  }
}
const switchButton = document.getElementById("switchButton");
switchButton.addEventListener("click", switchCalculator);

function switchCalculator() {
  const container = document.querySelector(".container");
  container.classList.toggle("scientific");
  const switchButtonText = switchButton.textContent;
  switchButton.textContent = switchButtonText === "Switch to Scientific" ? "Switch to Basic" : "Switch to Scientific";
  clearDisplay();
}
const sinButton = document.getElementById("sin");
const cosButton = document.getElementById("cos");
const tanButton = document.getElementById("tan");

sinButton.addEventListener("click", calculateSin);
cosButton.addEventListener("click", calculateCos);
tanButton.addEventListener("click", calculateTan);

function calculateSin() {
  const inputValue = parseFloat(display.value);
  const result = Math.sin(inputValue);
  display.value = result.toString();
  currentInput = result.toString();
  currentOperator = "";
  prevInput = "";
}

function calculateCos() {
  const inputValue = parseFloat(display.value);
  const result = Math.cos(inputValue);
  display.value = result.toString();
  currentInput = result.toString();
  currentOperator = "";
  prevInput = "";
}

function calculateTan() {
  const inputValue = parseFloat(display.value);
  const result = Math.tan(inputValue);
  display.value = result.toString();
  currentInput = result.toString();
  currentOperator = "";
  prevInput = "";
}
function clearDisplay() 
{
  currentInput = "";
  currentOperator = "";
  prevInput = "";
  display.value = "";
}
function calculate() 
{
  const num1 = parseFloat(prevInput);
  const num2 = parseFloat(currentInput);
  let result = 0.0;

  switch (currentOperator) 
  {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  display.value = result;
  currentInput = result.toString();
  currentOperator = "";
  prevInput = "";
}
