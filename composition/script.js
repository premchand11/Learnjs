function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}
function addAndSquare(a, b) {
  return square(add(a, b));
}

console.log(addAndSquare(2, 3));

function composeTwoFunctions(func1, func2) {
  return function (a, b) {
    return func2(func1(a, b));
  };
}

const c2f = (f2, f1) => (a, b) => f2(f1(a, b));

const task = composeTwoFunctions(add, square);
console.log(task(2, 3)); //


function compose(...fns){
  return function(...values){
    fns.reduceRight((a,b)=> b(a),values)
  }
}