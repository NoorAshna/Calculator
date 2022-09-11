let input = document.getElementById("input");
buttons = document.querySelectorAll("button");
let screenValue = "";

function fact(num) {
  let sum = 1;
  for (j = 1; j <= num; j++) {
    sum *= j;
  }
  return sum;
}
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {  //Multiplication
      buttonText = "*";
      screenValue += buttonText;
      input.value = screenValue;
    } else if (buttonText == "+") { //Addition
      screenValue += buttonText;
      input.value = screenValue;
    } else if (buttonText == "-") { // Subtraction
      screenValue += buttonText;
      input.value = screenValue;
    } else if (buttonText == "/") { // division
      screenValue += buttonText;
      input.value = screenValue;
    } else if (buttonText == "%") { // Mode
      screenValue += buttonText;
      input.value = screenValue;
    } else if (buttonText == "=") {
      if (screenValue.includes("!")) {
        let num = screenValue.match(/(\d+)/);
        let sum = 1;
        if (num[0] == 0) {
          screenValue = 1;
        } else {
          for (j = 1; j <= num[0]; j++) {
            sum *= j;
          }
          screenValue = sum;
        }
      }
      // Combination calculation
      if (screenValue.includes("c")) {
        let number = screenValue.split("");
        let combination =
          fact(number[0]) / (fact(number[2]) * fact(number[0] - number[2]));
        screenValue = combination;
      } 
      // Permutation calculation
      else if (screenValue.includes("P")) {
        let eachnum = screenValue.split("");
        let permutation = fact(eachnum[0]) / fact(eachnum[0] - eachnum[2]);
        screenValue = permutation;
      }
      input.value = eval(screenValue);
      screenValue = eval(screenValue);
    } 
    else if (buttonText == "C") { //Reset screen value
      screenValue = "";
      input.value = screenValue;
    } else if (buttonText == "!") {  //Factorial calculation
      screenValue += buttonText;
      input.value = screenValue;
    } else {
      screenValue += buttonText;
      input.value = screenValue;
    }
  });
}
