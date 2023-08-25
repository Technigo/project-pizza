// Step 1 - Welcome and introduction

alert(
  `Welcome to my Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//UserName
const userName = prompt("Please enter your name")

alert(`Welcome ${userName}! Good to see you! Let's take a look at our different food options, shall we?`);


// Step 2 - Food choice
const foodChoice = prompt(`What would you like today?
1 - Pizza
2 - Salad
3 - Pasta
Please enter the number of your choice.`);

let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Salad";
} else if (foodChoice === "3") {
  selectedFood = "Pasta";
} else {
  alert("Invalid chioce! Please select a valid number :)");
}

alert(`You've chosen ${selectedFood}. Great choice!`);

// Step 3 - Subtype choice
// Your code goes here

let foodType = "";
let foodName = "";

switch (selectedFood) {
  case "Pizza":
    foodType = prompt(`Choose your type of pizza:
    1 - Margarita
    2 - Hawaii
    3 - Glava Special
    Enter the number of your preferred pizza:`);
    foodName = ["Margarita", "Hawaii", "Glava Special"];
    break;

  case "Salad":
    foodType = prompt(`Choose your type of salad:
      1 - Ceasar salad
      2 - Greek salad
      3 - Roadkill special
      Enter the number of your preferred salad:`);
    foodName = ["Ceasar salad", "Greek salad", "Roadkill special"];
    break;

  case "Pasta":
    foodType = prompt(`Choose your type of pasta:
      1 - Pasta Bolognese
      2 - Pasta Alfredo
      3 - Pasta la vista, baby! (surprice pasta!)
      Enter the number of your preferred pasta:`);
    foodName = ["Pasta Bolognese", "Pasta Alfredo", "Pasta la vista, baby! (surprice pasta!)"];
    break;

  //alert on default doesn't work
  //default: alert("Please select something else.");
  // process.exit(1);
}
alert(`You've chosen ${foodName[foodType - 1]}! We'll start making your food in a bit, but first one more question, ok?`);
//Not sure why I was supposed to write [foodType - 1] next to the $foodName. ChatGpT told me that it was needed.

// Step 4 - Age
const userAge = prompt("Is this food intended for a child (15yrs or younger) or an adult (above 15yrs)? Please insert the age of the person eating this meal");

if (userAge === "child") {
  alert(`You're ordering a childrens portion. The price for the food is 100 Sek.`);

} else (userAge === "adult"); {
  alert(`You're ordering an adult portion. The price for the food is 150Sek.`);
}


// Step 5 - Order confirmation
// Your code goes here
