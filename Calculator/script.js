// Selecting the corresponding HTML elements
const count = document.querySelector(".count"),
  add = document.querySelector(".add"),
  sub = document.querySelector(".subtract"),
  divide = document.querySelector(".divide"),
  clear = document.querySelector(".clear"),
  enter = document.querySelector(".enter"),
  mult = document.querySelector(".multiply");

// buttons for the number elements 
const one = document.getElementById("one"),
  two = document.getElementById("two"),
  three = document.getElementById("three"),
  four = document.getElementById("four"),
  five = document.getElementById("five"),
  six = document.getElementById("six"),
  seven = document.getElementById("seven"),
  eight = document.getElementById("eight"),
  nine = document.getElementById("nine");

// create empty string for first number
  let currentInput = "";

// Event listener for operators 
// the count.append gives the visual representation of what is happening behind the scenes 
add.addEventListener("click", () => {
 // inputOperator("add");
  count.append("+");
});
sub.addEventListener("click", () => {
 // inputOperator("subtract");
  count.append("-");
});
divide.addEventListener("click", () => {
 // inputOperator("divide");
  count.append("/");
});
mult.addEventListener("click", () => {
//  inputOperator("multiply");
  count.append("x");
});



// Event listeners for numbers 
zero.addEventListener("click", () => {
    count.append("0");
    currentInput += "0";
    console.log(currentInput);
});
one.addEventListener("click", () => {
    count.append("1");
    currentInput += 1;
    console.log(currentInput);
});
two.addEventListener("click", () => {
    count.append("2");
    currentInput += 2;
});
three.addEventListener("click", () => {
    count.append("3");
    currentInput += 3;
});
four.addEventListener("click", () => {
    count.append("4");
    currentInput += 4;
});
five.addEventListener("click", () => {
    count.append("5");
    currentInput += 5;
});
six.addEventListener("click", () => {
    count.append("6");
    currentInput += 6;
});
seven.addEventListener("click", () => {
    count.append("7");
    currentInput += 7;
});
eight.addEventListener("click", () => {
    count.append("8");
    currentInput += 8;
});
nine.addEventListener("click", () => {
    count.append("9");
    currentInput += 9;
});

// Now this following code actually performs the operations

let operator = null;
let previousNum = null;

function appendNumber(num) {
  currentInput += num;

}

function inputOperator(op) {

previousNum = parseFloat(currentInput);
console.log("PREVIOUS NUM IS "+previousNum);
console.log(typeof(previousNum));


}

// implement enumeration format 
function calculateResult() {
  // let result;
  let currentNumber = parseFloat(currentInput);
  switch (operator) {
    case "add":
      result = previousValue + currentNumber;
 
    case "subtract":
      result = previousValue - currentNumber;

    case "divide":
      result = previousValue / currentNumber;

    case "multiply":
      result = previousValue * currentNumber;
  }
  previousValue = result;
  operator = null;
  currentInput = result.toString();
  count.innerHTML = result;
}

// Clear and reset
clear.addEventListener("click", () => {
    currentInput = "";
    previousValue = null;
    operator = null;
    count.innerHTML = 0;
  });
  
  enter.addEventListener("click", () => {
    // if (operator && previousValue !== null) {
    //   calculateResult();
    // }

    for (let index = 0; index < array.length; index++) {
       if (currentInput[index] === "+" || currentInput[index] === "-" || currentInput[index] === "/" || currentInput[index] === "x") {
        
       } else {
        
       }
        
    }
    

  });