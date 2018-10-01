var calculate = [];

// Function that adds each key pressed to a variable
//function addTo() {


  // let calculate = document.getElementById("one");
  // let calculate = document.getElementById("two");
  // let calculate = document.getElementById("three");
  // let calculate = document.getElementById("four");
  // let calculate = document.getElementById("five");
  // let calculate = document.getElementById("six");
  // let calculate = document.getElementById("seven").innerHTML;
  // let calculate = document.getElementById("eight");
  // let calculate = document.getElementById("nine");
  
//   console.log(calculate);
//   document.getElementById("calculator_display").innerHTML = calculate;
// }

function addTo() {


  calculate.push(document.getElementById("one").value);
  calculate.push(document.getElementById("two").value);
  calculate.push(document.getElementById("three").value);
  calculate.push(document.getElementById("four").value);
  calculate.push(document.getElementById("five").value);
  calculate.push(document.getElementById("six").value);
  calculate.push(document.getElementById("seven").innerHTML);
  calculate.push(document.getElementById("eight").value);
  calculate.push(document.getElementById("nine").value);
  
  console.log(calculate);
  document.getElementById("calculator_display").innerHTML = calculate;
}

function addAddition() {
  calculate.push("+")
  document.getElementById("calculator_display").innerHTML = calculate;
}

function addSubtraction() {
  calculate.push("-")
  document.getElementById("calculator_display").innerHTML = calculate;
}

function addMultiplication() {
  calculate.push("x")
  document.getElementById("calculator_display").innerHTML = calculate;
}

function addDivision() {
  calculate.push("/")
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addDecimal() {
  calculate.push(".")
  document.getElementById("calculator_display").innerHTML = calculate;
}

function addZero() {
  calculate.push(0)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addOne() {
  calculate.push(1)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addTwo() {
  calculate.push(2)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addThree() {
  calculate.push(3)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addFour() {
  calculate.push(4)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addFive() {
  calculate.push(5)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addSix() {
  calculate.push(6)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addSeven() {
  calculate.push(7)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addEight() {
  calculate.push(8)
  document.getElementById("calculator_display").innerHTML = calculate;
}
function addNine() {
  calculate.push(9)
  document.getElementById("calculator_display").innerHTML = calculate;
}
console.log(calculate);