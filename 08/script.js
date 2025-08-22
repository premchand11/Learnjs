// arrow functions

//1.syntax
const sayHelllo = () => {
  console.log("Hello");
};

sayHelllo();

const add = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;
//2. argumnets key word is not available in arrow functions we need to use spread operator

const add3 = (...ar) => {
  return console.log(ar);
};

add3(1, 2, 3, 4, 5);
//3.Hoisting -> js functions are hoisted but arrow functions are not hoisted

//4. this keyword -> arrow functions do not have their own this context, they inherit it from the parent scope
