const numBtns = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".ac");
const sign = document.querySelector(".pos-neg");
const percentage = document.querySelector(".percent");

const currentDisplay = document.querySelector(".current-num");
const prevDisplay = document.querySelector(".prev-num");
let currentNum = "";
let previousNum = "";
let operator = "";

equal.addEventListener("click", compute);
allClear.addEventListener("click", ac);
sign.addEventListener("click", flipSign);
percentage.addEventListener("click", findPercentage);

//Display
numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (currentNum.length <= 12) {
    currentNum += number;
    currentDisplay.textContent = currentNum;
  }
}

operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOp(e.target.textContent);
  });
});

function handleOp(op) {
  operator = op;
  previousNum = currentNum;
  prevDisplay.textContent = previousNum + " " + operator;
  currentNum = "";
  currentDisplay.textContent = "";
}

//compute function when = is pressed.
function compute() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  console.log(previousNum, currentNum, operator);
  if (operator === "+") {
    previousNum += currentNum;
    console.log(previousNum, currentNum);
  } else if (operator === "-") {
    previousNum -= currentNum;
    console.log(previousNum, currentNum);
  } else if (operator === "x") {
    previousNum *= currentNum;
    console.log(previousNum, currentNum);
  } else if (operator === "/") {
    if (currentNum <= 0) {
      previousNum = "Error!";
      displayResult();
      return;
    }
    previousNum /= currentNum;
    console.log(previousNum, currentNum);
  }
  previousNum = previousNum.toString();
  displayResult();
}

function displayResult() {
  prevDisplay.textContent = "";
  operator = "";
  if (previousNum.length <= 12) {
    currentDisplay.textContent = previousNum;
  } else {
    currentDisplay.textContent = previousNum.slice(0, 12) + "..";
  }
}

//Clear
function ac() {
  currentDisplay.textContent = "0";
  prevDisplay.textContent = "0";
  previousNum = "";
  currentNum = "";
  operator = "";
}

//Flip to negative number.
function flipSign() {
  const currentValue = parseFloat(currentDisplay.textContent);
  currentDisplay.textContent = -currentValue;
  currentNum = -currentValue;
}

//Divides current number by 100.
function findPercentage() {
  const currentValue = parseFloat(currentDisplay.textContent);
  const percentageValue = currentValue / 100;
  currentDisplay.textContent = percentageValue;
  currentNum = percentageValue;
}
