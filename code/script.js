// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("What is your user name?")

alert(
  `Hi ${userName}`
)
// Step 2 - Food choice

const foodChoice = prompt("What would you like to order? For Pizza enter 1. For Pasta enter 2. For Salad enter 3.");
let selectedFood = "";
console.log(foodChoice);
if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  alert(
    `You haven't ordered any food!`
  );
  exit(1);
};

alert(
  `You have ordered ${selectedFood}!`
)

// Step 3 - Subtype choice

alert(`What would you like to order with your ${selectedFood}?`);
let subChoice;
if (selectedFood === "Pizza") {
subChoice = prompt("Choices: Coke. Pizza salad. Bread");
if (subChoice === null || subChoice === "") {
  alert("You didn't order a side");
 } else {
    alert(`You ordered ${subChoice} with your pizza.`);}
 } else if (selectedFood === "Pasta") {
  subChoice = prompt("Choices: Coke. Side salad. Bread");
  if (subChoice === null || subChoice === "") {
    alert("You didn't order a side");
   } else {
    alert(`You ordered ${subChoice} with your pasta.`);}
 } else if (selectedFood === "Salad") {
  subChoice = prompt("Choices: Coke. Bread. Hummus.");
  if (subChoice === null || subChoice === "") {
    alert("You didn't order a side");
   } else {
  alert(`You ordered ${subChoice} with your salad.`);}
 };


// Step 4 - Age
let age = prompt(`Is the food order intended for an adult or child? Enter 1 for adult. Enter 2 for child.`)
let size = "";
if (age === "1") {
  size = "adult";
  alert(`You ordered an ${size} sized meal`);
} else if (age === "2") {
  size = "child";
  alert(`You ordered an ${size} sized meal`);
} else {
  alert(`You didn't pick the size of the meal. Please try again to order.`);
  exit(1);
};


// Step 5 - Order confirmation
// Your code goes here

  alert(`Thank you for your order:
  Food: ${selectedFood} 
  Sides: ${subChoice !== "" ? subChoice : "No sides"}
  Size: ${size}
  `);


