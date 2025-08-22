// IIFE (Immediately Invoked Function Expression) -> A function that runs as soon as it is defined.
// Useful for creating a new scope and avoiding polluting the global namespace.
//executing asynchrounus fuctions


(function add(a, b) {
  console.log(a + b);
})(2, 3);

(() => {
  console.log("IIFE with arrow function");
})();
