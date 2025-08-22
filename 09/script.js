// high order functions -> which take functions as arguments or return functions

function add(x, y, callback) {
  let result = x + y;
  callback(result);
}

add(5, 10, function (result) {
  console.log(result);
});

add(400, 69, (res) => console.log(res));
