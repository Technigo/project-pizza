// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let resultName = prompt(
  `Please state your name:`
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
alert("We dont serve that number - Please select a valid number for the food you want");
process.exit(1);
}

alert(`Yum! You've chosen ${selectedFood}!`);

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
let chosenOptions = "";
if (chosen === "1") {
  alert(
    `You have selected the ${options[0]}-${selectedFood}!`
    );
  chosenOptions = options[0]  
} else if (chosen === "2") {
  alert(
    `You have selected the ${options[1]}-${selectedFood}!`
    );
  chosenOptions = options[1]  
} else if (chosen === "3") { 
  alert(
    `You have selected the ${options[2]}-${selectedFood}!`
    );
  chosenOptions = options[2]  
} else {
  alert(`Oops that's not something we serve! Please try again.`)
  process.exit(1);
}


// Step 4 - Age
// Your code goes here


const ageBracket = parseInt( prompt(
  `Is the dish for a child or an adult? Please type your age`)
);


if (ageBracket <= 17) {
  alert( `You have chosen a child sized ${chosenOptions} meal! That will be £15.`);
} else if (ageBracket > 17 && ageBracket < 100) {
  alert(`You have chosen an adult sized ${chosenOptions} meal! That will be £25.`);
} else {
  alert(`Sorry, we only serve between ages 1-100, please type in a number.`)
  process.exit(1);
}

// Step 5 - Order confirmation

const finalOrder = parseInt(
  prompt(`
  Would you like to order this meal? 
  1 - Yes
  2 - No            
  Please choose either number to confirm`
)
);

if (finalOrder === 1) {
   alert("Your order will be ready soon - Thank you for choosing Javascript Pizzeria!")
} else if (finalOrder === 2) {
  alert("Ok, welcome back any time!"); 
} else {
alert("Please start over and pick either 1 or no! Sorry!");
process.exit(1);
}


