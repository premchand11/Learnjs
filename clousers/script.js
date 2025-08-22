function adder(num) {
  function add(b) {
    console.log(num + b);
  }
  return add;
}
const add5 = adder(5);
add5(2); //
add5(10);
