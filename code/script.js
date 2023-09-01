// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(`Welcome to our place. Ready to Start? - Click 'OK' to begin.`)
var userName=prompt("how should we call you?")
alert(`welcome, ${userName}`)

// Step 2 - Food choice
// Your code goes here

var foodTypeNumber=prompt("which type of food do you want to have? here is what you can choose : 1. pizza 2. pasta 3. salad. give us one of these number so we can tell you what we have.")
var foodType;
if (foodTypeNumber === '1') {
  foodType = 'pizza';
} else if (foodTypeNumber === '2') {
  foodType = 'pasta';
} else if (foodTypeNumber === '3') {
  foodType = 'salad';
} else {
  foodType = 'unknown'
}
alert(`you have chosen ${foodType} and we will tell you which specific option we have based on your choice.`)

// Step 3 - Subtype choice
// Your code goes here

var foodOption
if (foodType === 'pizza') {
  foodOption = '1. napolitan, 2. hawaiian, 3. pepperoni'
} else if (foodType === 'pasta') {
  foodOption = '1. spaghetti carbonara, 2. fettuccine alfredo, 3. cheesy tortellini'
} else if (foodType === 'salad') {
  foodOption = '1. caesar salad, 2. carprese salad, 3. greek salad'
} else {
  foodOption = 'unknown'
}
alert(`here is available food option that you can choose:${foodOption}. choose the food, remember the number and press okay!`);
var foodChoice = prompt("give us the number that you have chosen!")

// Step 4 - Age
// Your code goes here

var userAge = prompt("how old are you? based on your age, you will get the appropriate portion.")
var userAgeGroup
if (userAge <= 15) {
  userAgeGroup = "child";
} else {
  userAgeGroup = "adult";
}
var foodCost
if (userAgeGroup === "child") {
  foodCost = 10;
} else {
  foodCost = 15;
}

// Step 5 - Order confirmation
// Your code goes here

var confirmation = confirm(`based on your age, you will get the portion for ${userAgeGroup}. the cost is ${foodCost}. will you proceed?`);
if (confirmation) {
  alert(`okay, we will do our best to make you happy for a moment! just wait a little bit`)
} else {
  alert(`did something went wrong? no worries, try again! and don't forget we are always here for you!`)
}

// thoughts: When I couldnt write or had questions, 
// I asked chatGPT so much, so that it is little bit hard to say that I did all these myself.
// next time when I am doing assignment, I want to write something that I can say it is written by myself,
// fully understood, so that I am able to apply those to many different cases!
