// Step 1 - Welcome and introduction
alert(`
  🍕 Welcome to Petra's Pizzeria 🍕
         Click 'OK' to order food`);

let customerName = prompt("Please enter your name:");
if (customerName === "") customerName = "dear anonymous customer";
alert(`Nice to meet you ${customerName}!`);

// Step 2 - Food choice
const foodGenreNumber = prompt(`
  What kind of food would you like to order today?
  Please enter the number of your choice:

     1 -  🍕 Pizza
     2 - 🍝 Pasta
     3 - 🥗 Salad
  `);

let foodGenreName = "";

switch (foodGenreNumber) {
  case "1":
    foodGenreName = "Pizza";
    break;
  case "2":
    foodGenreName = "Pasta";
    break;
  case "3":
    foodGenreName = "Salad";
    break;
  default:
    // If the user enters an invalid choice, show an error message and exit the program.
    alert("That's not a valid number. Reload the page and try again.");
    process.exit(1);
}

alert(`${foodGenreName}, what a great choice!`);

// Step 3 - Subtype choice
let foodSelectionNumber = 0;
let foodSelectionName = "";

switch (foodGenreName) {
  case "Pizza":
    foodSelectionNumber = prompt(`
      Choose one of our delicious pizza's
      Please enter the number of your choice:
    
         1 - Pizza Napolitana
         2 - Pizza Hawaian
         3 - Pizza Pepperoni
      `);
    foodSelectionName = [
      "Pizza Napolitana",
      "Pizza Hawaian",
      "Pizza Pepperoni",
    ];
    break;
  case "Pasta":
    foodSelectionNumber = prompt(`
      Choose one of our delicious pasta's
      Please enter the number of your choice:

         1 - Spaghetti Carbonara
         2 - Fettuccine Alfredo
         3 - Cheesy Tortellini
      `);
    foodSelectionName = [
      "Spaghetti Carbonara",
      "Fettuccine Alfredo",
      "Cheesy Tortellini",
    ];
    break;
  case "Salad":
    foodSelectionNumber = prompt(`
      Choose one of our delicious salad's
      Please enter the number of your choice:

         1 - Caesar Salad
         2 - Caprese Salad
         3 - Greek Salad
      `);
    foodSelectionName = ["Caesar Salad", "Caprese Salad", "Greek Salad"];
    break;
  default:
    // If the user enters an invalid choice, show an error message and exit the program.
    alert("That's not a valid number. Reload the page and try again.");
    process.exit(1);
}
alert(`You've chosen ${foodSelectionName[foodSelectionNumber - 1]}.`);

// Step 4 - Age
const age = prompt("Is this food for a child or an adult? Type your age:");
let size = "full size";
let price = 15;
if (age >= 0 && age < 18) {
  size = "children's";
  price = 10;
}

// Step 5 - Order confirmation
const confirm = prompt(`
  You have ordered a ${size} ${
  foodSelectionName[foodSelectionNumber - 1]
} for €${price}.
  Enter a number to confirm or cancel your order:

     1 - Yes, I want to order
     2 - No, I've changed my mind
  `);

if (confirm === "1") {
  alert(`
    Thank you for your order!
    I will immediately prepare your delicious meal.
    See you soon! 👋🏼`);
} else {
  alert("No problem, come back and order anytime you want.");
}
