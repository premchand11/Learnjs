// arrays

const students = ["prem", "chand", "surya", "hem"];
console.log(students);
console.log(students.length);
students[0] = "samsung";
console.log(students);

students.push("vivo");
console.log(students);

students.pop();
console.log(students);

const myArray = [1, "prem", true, undefined, null];
console.log(myArray);

students.unshift("apple");
console.log(students);

console.log(students.indexOf("prem"));

function print(n) {
  console.log(n);
}

students.forEach(print);

students.map(print);
// map-> creates a new array with the results of calling a provided function on every element in the calling array
//forEach-> executes a provided function once for each array element but does not create a new array

let ans=students.findIndex((studnet) => studnet === "apple");
console.log(ans);
