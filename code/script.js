// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Ask for name
let userName = prompt(`What is your name?`);
console.log("Name:", userName);

//Welcome with name
alert(`Welcome ${userName}! Let's order some food`);

// Step 2 - Food choice

//Ask for type of food until answer is pizza, burger or salad
let foodChoice = "apple";

while (foodChoice === "apple") {
  let foodAnswer = prompt(
    `What do you want to eat? 
  Choose between pizza, burger or salad and write your answer.`
  );
  console.log("Answer:", foodAnswer);

  switch (foodAnswer) {
    case "pizza":
      foodChoice = "pizza";
      break;
    case "burger":
      foodChoice = "burger";
      break;
    case "salad":
      foodChoice = "salad";
      break;
    default:
      alert(`I'm sorry. We don't have ${foodAnswer}. Choose again!`);
  }
}

console.log("Choice:", foodChoice);

let pizzaMenu =
  ("Margerita (tomato, cheese)", "Al Funghi (tomato, cheese, mushrooms)");

// Step 3 - Subtype choice
// Your code goes here

/*if foodChoice === pizza {
  prompt ("What type of pizza do you want? Write the number on the menu:")
  table (pizzaMenu)
} else {
  prompt ("What type of salad do you want? Write the number on the menu:")
}*/

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
