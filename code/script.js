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
// Note to self, you use the numbers to signify what the choice is to the code, the answ.er you write separaately, you dont "pull" the answer from the prompt
alert("We dont serve that number - Please select a valid number for the food you want");
process.exit(1);
}

alert(`Yum! Youve chosen ${selectedFood}!`);

// Step 3 - Subtype choice
// Your code goes here





// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
