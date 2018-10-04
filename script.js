var calculate = [];

// Function that adds each elements to an array then displays it on the
// calculator screen.

function addTo(objButton) {
  calculate.push(objButton.innerHTML);
  document.getElementById("calculator_display").innerHTML = calculate.join("");
}

function equal() {
  let answer = 0;

  for (let i = 0; i < calculate.length; i++) {
    const element = calculate[i];
    
    if (element != "x" || element != "+" || element != "/" || element != "-") {
      let numbers = [[]];
      numbers[[operator.length]].push(element);
      if (operator.length == 2) {
        let number_1 = Number(numbers[1][0].join(""));
        let number_2 = Number(numbers[1][1].join(""));
      }
      
    } else if (element == "x" || element == "+" || element == "/" || element == "-") {
      let operator = [];
      operator.push(element);
    }
    
  }
}