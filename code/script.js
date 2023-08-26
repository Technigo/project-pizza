// Start here

// Step 1 - Welcome and introduction
// Your code goes here//
alert(
  `Welcome to the Arts and craft of Javascript. Ready for this? - Click 'OK' get started.`
);

//name//
const userName = prompt(`please enter your name`);

//greeting//
alert(`Hey ${userName}! Let's see what you want to dive into.`);

// Step 2 - craft selection
const craftChoice = prompt(`Select your craft:
  1 - Knitting
  2 - Tufting
  3 - Embroidery
  Please select the number that you're intrested in`);

// Step 3 - Subtype choice
// Your code goes here

//user select craft
let selectedCraft = "";

if (craftChoice === "1") {
  selectedCraft = "Knitting";
} else if (craftChoice === "2") {
  selectedCraft = "Tufting";
} else if (craftChoice === "3") {
  selectedCraft = "Embroidery";
}

alert(`You've chosen ${selectedCraft}`);

//user selects item, subtype
let item = "";
let color = [];

switch (selectedCraft) {
  case "Knitting":
    item = prompt(`Select an item you want to knit:
    1 - Socs
    2 - Gloves
    3 - Scarf
    Please enter the number of your choice`);
    color = ["Socs", "Gloves", "Scarf"];
    break;

  case "Tufting":
    item = prompt(`Select an item you want to knit:
     1 - Rug
     2 - Sculpture
     3 - Jacket
    Please enter the number of your choice`);
    color = ["Rug", "Sculpture", "Jacket"];
    break;

  case "Embroidery":
    item = prompt(`Select an item you want to knit:
      1 - Tablecloth
      2 - Wallhangings
      3 - Badge
      Please enter the number of your choice`);
    color = ["Tablecloth", "Wallhangings", "Badge"];
    break;
  default:
    alert("invalid choice.");
    Process.exit(1);
}

//determine the users choice
if (item === "1") {
  alert(`Great choice, you've chosen ${selectedCraft} and ${color[0]}`);
} else if (item === "2") {
  alert(`Great choice, you've chosen ${selectedCraft} and ${color[1]}`);
} else if (item === "3") {
  alert(`Great choice, you've chosen ${selectedCraft} and ${color[2]}`);
}

// Step 4 - Age
// Your code goes here
// User specifys age and based on the answer they get lecture for adults or child.
const age = prompt(`Please enter your age`);
let cost = 0;

if (age >= 18) {
  cost = 15;
  alert(
    `Great! You will attend the lecture for oldies but GOLDIES. That'll be ${cost} euros.`
  );
} else if (age <= 17) {
  cost = 10;
  alert(
    `Hey! You will attend the lecture for youngsters! That'll be ${cost} euros.`
  );
}
//confirmation from user too proceed or exit
let userInput = prompt("Do you want to proceed? Type yes or no");

if (userInput === "yes") {
  alert("Let's go forward!");
} else if (userInput === "no") {
  alert("Okay, let's cancel the process.");
  Process.exit(1);
}

// Step 5 - Order confirmation
// Your code goes here
//Bookinginfo based on previous answer
if (craftChoice === "1") {
  alert(
    `Wonderful! You've reserved a spot at ${selectedCraft} class to do a ${color[0]} to a cost of ${cost} euros. In the next step you will confirm if this is correct.`
  );
} else if (craftChoice === "2") {
  alert(
    `Wonderful! You've reserved a spot at ${selectedCraft} class to do a ${color[1]} to a cost of ${cost} euros. In the next step you will confirm if this is correct.`
  );
} else if (craftChoice === "3") {
  alert(
    `Wonderful! You've reserved a spot at ${selectedCraft} class to do a ${color[2]} to a cost of ${cost} euros. In the next step you will confirm if this is correct.`
  );
}
//confirmation
let getUserInput = prompt("Is the booking correct? Type yes or no");

if (getUserInput === "yes") {
  alert(
    "This is great! We're preparing your lecture and you can find all info that you need to know on //our website. See you soon!"
  );
} else if (getUserInput === "no") {
  alert("Okay, so not this time but we hope to see you in the future!");
  Process.exit(1);
}
//goodbyemessage
alert("Goodbye and have a great day!");
