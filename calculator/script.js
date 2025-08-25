const input = document.getElementById("number-input");
const res = document.getElementById("result");

let first = "";
let operator = "";
let second = "";

function handelClickButton(el) {
  const value = el.innerText;

  if (!isNaN(value)) {
    // number buttons
    if (!operator) {
      first += value;
      input.value = first;
    } else {
      second += value;
      input.value = first + operator + second;
    }
  } else if (["+", "-", "*", "/", "%"].includes(value)) {
    // operator buttons
    if (first && !operator) {
      operator = value;
      input.value = first + operator;
    }
  } else if (value === "clear") {
    first = "";
    operator = "";
    second = "";
    input.value = "";
    res.value = "";
  } else if (value === "=") {
    if (first && operator && second) {
      let result;
      switch (operator) {
        case "+":
          result = Number(first) + Number(second);
          break;
        case "-":
          result = Number(first) - Number(second);
          break;
        case "*":
          result = Number(first) * Number(second);
          break;
        case "/":
          result =
            Number(second) === 0 ? "Error" : Number(first) / Number(second);
          break;
        case "%":
          result =
            Number(second) === 0 ? "Error" : Number(first) % Number(second);
          break;
      }
      res.value = result; // show result
    }
  }
}

// function handelClickButton(el) {
//   console.log(el);
//   const exp = `${input.value}${el.innerText}`;
//   input.value = exp;
//   if (["+", "-", "*", "/", "%"].includes(el.innerText)) res.value = eval(exp);
// }

function reset() {
  input.value = "";
  res.value = "";
}
