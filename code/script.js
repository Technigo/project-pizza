// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Zuum's Pizzeria. "Ok"`
);

const userName = prompt("Let me know your Name!");

alert(
  `Welcome ${userName}:) Lets get started with the order!`
);

// Step 2 - Food choice
const foodOption = prompt(`Using a number, what would you like to eat today?
1 - Margeritha
2 - Salame
3 - Vegano`);

// Step 3 - Subtype choice
let selectedFood = "";

if (foodOption === "1") {
    selectedFood = "Margeritha";
  } else if (foodOption === "2") {
    selectedFood = "Salume";
  } else if (foodOption === "3") {
    selectedFood = "Vegano";
  } else {
    alert("Please choose a number between 1-3 :)");
    process.exit(1);
  }
alert(`Great! One ${selectedFood} is getting ready for you soon.`);

// Step 3 - Subtype choice
const sideDish = prompt(`Using a number, what side dish would you like to have?
1 - Salat
2 - Cucumber
3 - Spicy tomato
4 - none`);
let selectedSideDish = "";

if (sideDish === "1") {
  selectedSideDish = "Salat";
  } else if (sideDish === "2") {
    selectedSideDish = "Cucumber";
  } else if (sideDish === "3") {
    selectedSideDish = "Spicy tomato";
  } else if (sideDish === "4") {
    selectedSideDish = "no side dish";
  } else {
    alert("Please choose a number between 1-4 :)");
    process.exit(1);
  }
alert(`Great! One ${selectedSideDish} is getting ready for you soon as well.`);

// Step 4 - Age
const adultChid = prompt(`Is this meal for a child or adult?`);
if (adultChid === 'child') {
  alert(`That will be 13 euros.`);
  } else {
    alert(`That will be 16 euros.`);
  }

// Step 5 - Order confirmation
const confirmation = confirm(`Delicious! Your todays meal is ${selectedFood} with ${selectedSideDish}.`);
if(confirmation) {
  alert(`Your order is getting prepared by now. We hope that your ${selectedFood} with ${selectedSideDish} is the best one you ever had. Enjoy! :))`);
} else {
  alert(`Please come again!`);
  process.exit(1);
}
