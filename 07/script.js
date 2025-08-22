// functions

function sayHello() {
  console.log("Hello, World!");
}

sayHello();
sayHello();
//                     argumnets
function addTwoNumbers(a, b) {
  return a + b;
}
//            parameters
let b = addTwoNumbers(5, 3);
console.log(b);

function multiplyTwoNumbers(a, b) {
  return a * b;
}

let a = multiplyTwoNumbers(4, 6);
console.log(a);

function addNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let total = addNumbers(1, 2, 3, 4, 5);
console.log(total);

//spread operator
function addNumbersSpread(...numbers){
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
let totalSpread = addNumbersSpread(1, 2, 3, 4, 5);
console.log(totalSpread);