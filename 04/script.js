const age = 18;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}

// tenary operator

const age2 = 16;

age2 >= 18 ? console.log("You can vote.") : console.log("You cannot vote.");

//switch statement

const option = "A";

switch (option) {
  case "A": {
    console.log("You selected option A.");
    break;
  }
  case "B": {
    console.log("You selected option B.");
    break;
  }
  default: {
    console.log("Invalid option selected.");
    break;
  }
}
