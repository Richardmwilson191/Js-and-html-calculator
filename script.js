let calculate = [];
let answer = 0;

//Function that clears the calculator display (the C button).

function cls() {
  console.log(calculate)
  calculate = [];
  document.getElementById("calculator_display").innerHTML = calculate.join("");
}

// Function that adds each elements to an array then displays it on the
// calculator screen.

function addTo(objButton) {
  let num = objButton.innerHTML;
  if (answer != 0 && (num == "x" || num == "+" || num == "/" || num == "-")) {
    calculate = [];
    calculate.push(answer);
  }
  else {
    calculate.push(num);
    document.getElementById("calculator_display").innerHTML = calculate.join("");
  }
}

// Function that performs the calculations once the equal sign is pressed.

function equal() {
  let operator = [];
  let numbers = [[],[]];

  for (let i = 0; i < calculate.length; i++) {
    const element = calculate[i];
    if (element == "x" || element == "+" || element == "/" || element == "-") {   
      operator.push(element);
    }
    else {
      
      numbers[operator.length].push(element);
      console.log(numbers)
      if (operator.length >= 1) {
        let number_1 = Number(numbers[0].join(""));
        let number_2 = Number(numbers[1].join(""));
        switch (operator[0]) {
          case 'x':
            answer = number_1 * number_2;
            break;
          case '+':
            answer = number_1 + number_2;
            break;
          case '/':
            answer = number_1 / number_2;
            break;       
          case '-':
            answer = number_1 - number_2;
        }
      }
    } 
  }
  document.getElementById("calculator_display").innerHTML = answer;
}