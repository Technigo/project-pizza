// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Gotlands best Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const username = prompt("Please enter your name!");
alert(`Hallo ${username} lets make your order!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(`What would you like to eat today?:
  1 - Pasta
  2 - Pizza
  3 - Sallad
  Please enter the number of your choice:`);

let chosenFood = "";

if (foodChoice === "1") {
  chosenFood = "Pasta";
} else if (foodChoice === "2") {
  chosenFood = "Pizza";
} else if (foodChoice === "3") {
  (chosenFood = "Sallad");
} else {
alert("Invalid choice, please select a valid number! ");
process.exit(1);
}

alert(`You've chosen to eat a ${chosenFood}!`);

// Step 3 - Subtype choice
// Your code goes here

let selectedDish = "";
let dishes = ""; // container for the array.

switch (chosenFood) {
  case "Pasta":
    selectedDish = prompt(`Please select your favorit Pasta:
    1 - Bolognese
    2 - Carbonara
    3 - Fettuccine
    Please enter the number of your choice!`);
    dishes = ["Bolognese, Carbonara, Fettuccine"];
    break;
  case "Pizza":
      selectedDish = prompt(`Please select your favorite Italian Pizza:
        1 - Margherita (Tomatosauce, mozarella, basil)
        2 - Caprese (tomato, buffalo mozarella, basil, oliveoil) 
        3 - Quattro formaggio (Mozarella, Gorgonzola, Provolone, Pecorino)
        Please enter the number of your choice!`);
        dishes = ["Margherita, Caprese, Quattro formaggio"];
    break;
  case "Sallad":
          selectedDish = prompt(`Please select your favorite sallad!:
          1 - Ceasarsallad (Chicken, omansallad, parmesan, ceasardressing)
          2 - Greeksallad (Lettuce, fetacheese, red onions, cucumber, tomato)
          3 - Shrimpsallas (Lettuce, corn, tomato, cucumber, shrimps , dressing)
          `);
          dishes = ["Ceasarsallad, Greeksallad, Shrimpsallad"];
          break;
          default:
            alert("Invalid choice, please select a valid number! ");
            process.exit(1);
}
// Step 4 - Age
// Your code goes here
const age = prompt(`please enter your age`);

if (age >= 15) {
  alert(You are a old enough to have a normal sized dish at )
}


// Step 5 - Order confirmation
// Your code goes here
