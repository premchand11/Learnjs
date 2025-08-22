function add(a, b, c) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // Outputs: 6

const add2 = (a) => (b) => (c) => a + b + c;

//automated email service
