
// Step 1 - Welcome and introduction

alert(
  `Welcome to my JavaScript Pizzeria. Ready to Start? - Click 'OK' to begin.`
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
  alert("Invalid option or input! Please select a valid number :)");
  process.exit(1);
}

alert(`You've chosen ${selectedFood}. Great choice!`);

// Step 3 - Subtype choice

let foodType = "";
let foodName = "";
//foodType = parseInt(foodType); Do I need this? Don't think I do, unless I set a price to different foods.

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

  default:
    alert("Invalid option or input. Please select a valid number :)");
    process.exit;
  //the default doesnt work. Whyyyyyyyyyyy?!?
}


alert(`You've chosen ${foodName[foodType - 1]}! We'll start making your food in a bit, but first one more question, ok?`);
//Not sure why I was supposed to write [foodType - 1] next to the $foodName. ChatGpT told me that it was needed and it works.

// Step 4 - Age
const userAge = prompt("Is this food intended for a child (15yrs or younger) or an adult (above 15yrs)? Please insert the age of the person eating this meal");

if (userAge <= 15) {
  alert("You're ordering a childrens portion. The price for the food is 100 Sek.");

} else if (userAge > 15) {
  alert("You're ordering an adult portion. The price for the food is 150Sek.");
} else {
  alert("Invalid input. Please provide a valid age.");
  process.exit;
}



// Step 5 - Order confirmation


let result = window.confirm(`You've chosen ${foodName[foodType - 1]} for an ${userAge} year old. Is this correct?
please confirm your order by clicking the OK-button.
Not correct? Or do you want to cancel your order? You can easily do so by clicking the Cancel-button.`);

if (result) {
  // User clicked "OK"
  alert(`Thank you for choosing us! We will start making your food right away`);
} else {
  // User clicked "Cancel"
  alert(`No problem at all! Feel free to take your time and explore our menu. If you have any questions or need assistance, don't hesitate to ask. We're here to help, whether you decide to order now or later`);
}