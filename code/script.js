// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let resultName = prompt(
  `Could we please have your name?`
)
console.log(resultName);

alert(`Hej ${resultName}!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(`What food can we get you today?
1 - Pizza
2 - Pasta 
3 - Salad
Please enter the number of your choice:`);

let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta"; 
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
// Note to self, you use the numbers to "target" what the choice is to the code, the answer you write separately, you dont "pull" the answer-word from the prompt
alert("We dont serve that number - Please select a valid number for the food you want");
process.exit(1);
}

alert(`Yum! Youve chosen ${selectedFood}!`);

// Step 3 - Subtype choice
// Your code goes here

let chosen = "";
let options = ""; 

switch (selectedFood) {
  case "Pizza":
    chosen = prompt(`Select your toppings apart from Cheese and Tomato:
    1 - Mushrooms and Ham
    2 - Pineapple and Banana
    3 - Beef and Bea
    Please enter the number of your choice:`);
  options = ["Mushrooms and Ham", "Pineapple and Banana","Beef and Bea"];
  break;
  case "Pasta":
    chosen = prompt(`Select your type of Pasta:
    1 - Creamy Lemon
    2 - Fresh Basil
    3 - Spicy Tomatoes
    Please enter the number of your choice:`);
  options = ["Creamy Lemon", "Fresh Basil","Spicy Tomatoes"];
  break;
  case "Salad":
    chosen = prompt(`Select your salad of choice:
    1 - Crunchy Broccoli
    2 - Leafy Lettuce
    3 - Sundried Feta
    Please enter the number of your choice:`);
  options = ["Crunchy Broccoli", "Leafy Lettuce","Sundried Feta"];
  break;
  default:
    alert("Invalid Choice!");
    process.exit(1);
}

if (chosen === "1") {
  alert(
    `You have selected ${options[0]} as toppings for your ${selectedFood}!`
    );
} else if (chosen === "2") {
  alert(
    `You have selected ${options[1]} version of ${selectedFood}!`
    );
} else if (chosen === "3") { 
  alert(
    `You have selected the ${options[2]}-${selectedFood}!`
    );
}

// Step 4 - Age
// Your code goes here

//In this iteration, the program should prompt the user to specify if the food is intended for a child or an adult. 
//The prompt() method should be used to present the question and get the user's input. 
//Based on the user's answer, an appropriate order message should be constructed. 
//The program should use the alert() method to display the order message and the associated cost. 
//The user's confirmation should be obtained using the prompt() method.

const age = prompt(
  `Is the dish for a child or an adult? Please type your age`);

let ageBracket = "";

if (age <= 17) {
  alert(`You have chosen a child sized meal!`)
} else if (age > 17 && age < 100) {
  alert(`You have chosen an adult sized meal!`)
} else {
  alert(`I'm afraid we only serve between ages 1-100!`)
}


// Note to self, you use the numbers to "target" what the choice is to the code, the answer you write separately, you dont "pull" the answer-word from the prompt



// if 
//alert(`Yum! You're ordering the ${ageBracket[0]-sized }! ${options[0]}-${selectedFood}`);
// alert(`Yum! You're ordering the ${ageBracket[0]-sized }! ${options[0]}-${selectedFood}`);
// alert(`Yum! You're ordering the ${ageBracket[0]-sized }! ${options[0]}-${selectedFood}`);

// One adult sized Caprese salad will be prepared for you. That'll be €15. Are you sure you want to order this?
//Enter a number to confirm: 
//1 - Ye'
//2 - No



// Step 5 - Order confirmation
// Your code goes her