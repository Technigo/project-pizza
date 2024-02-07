// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria.🍕 Ready to Start? - Click 'OK' to begin.`
);

let userName = prompt("Write your name in the box below 👇");

console.log("Hello, " + userName + "!");
alert("👋 Hello, " + userName + "! Click 'OK' to unlock the menu!");

// Step 2 - Food choice
// Your code goes here
const foodType = prompt(
  `Choose your desired dish from the options below. Write the number of your choice and click 'OK'
  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗
  `
);

console.log(foodType);

let selectedDish = "";

if (foodType === "1") {
  selectedDish = "Pizza 🍕";
} else if (foodType === "2") {
  selectedDish = "Pasta 🍝";
} else if (foodType === "3") {
  selectedDish = "Salad 🥗";
} else {
  alert(
    "Oops! It seems like you didn't select a dish. Please try again and write the corresponding number in the box.🫢"
  );
}

if (selectedDish !== "") {
  alert(`You've selected ${selectedDish}. Click 'OK' to explore available options.`);
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
