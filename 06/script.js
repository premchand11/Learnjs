// if you know how many time to loop then use for loop

for (let i = 0; i < 5; i++) {
  console.log("Looping with for: " + i);
}

// if you don't know how many times to loop then use while loop

// while (true) {
//   console.log("Looping with while");
//   break; // This is just to prevent an infinite loop in this example
// }

let ip = 0;
let house = 20;
while (ip < house) {
  console.log("Current house number: " + ip);
  ip++;
}

// do while loop will always run at least once

let number = 20;
let guess = 0;
do {
  guess = parseInt(prompt("Guess a number between 1 and 100"));
  if (guess == number) {
    alert("You guessed it right!");
    break;
  }
} while (guess != number);


