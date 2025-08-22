// and -> all conditions must be true

const age = 20;
const gender = "male";

if ((age) => 18 && gender == "male") {
  console.log("You are eligible to vote in male category.");
}

// || ->either condition can be true

// NOT -> negates the condition

const number = 5;
if (number % 2 != 0) {
  console.log("The number is odd.");
}
