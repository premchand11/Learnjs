// datatypes
// numbers->

let num = 12.08;
let num2 = 6;

console.log(num + num2);

// strings

const firstName = "John";
const lastName = "Doe";
console.log(firstName + " Doe");

//boolean

const isLoggedIn = true;

console.log(isLoggedIn);

//null

const emptyValue = null;
console.log(emptyValue);

//undefined

const notAssigned = undefined;
console.log(notAssigned);

//objects  key value pairs

const person = {
  firstName: "prem",
  lastName: "chand",
  age: 20,
  isEmployee: true,
};

console.log(person);
console.log(person.lastName);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployee: false,
};

//operators

console.log(person.firstName + " " + person2.lastName);

//js 1-> true 0->false;

console.log(typeof person.firstName);
