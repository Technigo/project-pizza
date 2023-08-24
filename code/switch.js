// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
// Ask the user for their name and store the input in a variable
const userName = prompt(`Please enter your name:`);

// Display a greeting using the user's name
if (userName) {
  alert(`Hello, ${userName} ! Welcome to our Javascript Pizzeria. 🍕`);
} else {
  alert(`No name entered.☹️`);
};
// Step 2 - Food choice
const foodChoice = prompt(`What food would you like to order? 
 Enter a number:
 1 - Pizza
 2 - Pasta
 3 - Salad`);

let foodType;

switch (foodChoice) {
  case "1":
   foodType = "Pizza";
    alert(`You chose  pizza.`);
    break;
 case  "2" :
  foodType = "Pasta";
  alert(`You chose  pasta.`);
  break;
 case  "3":
  foodType = "Salad";
  alert(`You chose salad.`);
  break;
  default:
  alert("Invalid choice. Please select a valid option.");
  break;
};


// Step 3 - Subtype choice
// Your code goes here

let pizzaType;
let pastaType;
let saladType;

switch (foodType) {
  case "Pizza":
  pizzaType= prompt(`Choose a type of Pizza
  1 - Margherita
  2 - Pepperoni
  3 - Vegetarian `);

    switch (pizzaType) {
      case "1":
        alert(`You chose Margherita pizza.`);
        break;
      case "2":
      
          alert(`You chose Pepperoni pizza.`);
        break;
      case "3":
    
        alert(`You chose Vegetarian pizza.`);
        break;
      default:
        alert(`Invalid pizza type selection.`);
        break;
    }
  break;

case "Pasta":
  pastaType = prompt(`Choose a type of Pasta
  1 - Spaghetti
  2 - Alfredo
  3 - Penne`);

switch (pastaType) {
  case "1":
    alert(`You chose Spaghetti.`);
    break;
  case "2":
    alert(`You chose Alfredo.`);
    break;
  case "3":
    alert(`You chose Penne .`);
    break;
     default:
    alert(`Invalid pasta type selection.`);
    break
}
break
case "Salad":
   saladType = prompt(`CHoose a type of Salad
  1 - Caesar
  2 - Greek
  3 - Garden`);
switch (saladType) {
  case "1":
    alert(`You chose Caesar Salad.`);
    break;
  case "2":
    alert(`You chose Greek Salad.`);
    break;
  case "3":
    alert(`You chose Garden Salad.`);
    break;
  default:
    alert(`Invalid salad type selection.`);
    break;
      }
 default:
  alert("Something went wrong. Please try again.");
  break
};

// Step 4 - Age
// Your code goes here
 const ageChoice = prompt(`Who order? Write your age`)

let orderMessage;
switch (true) {
case ageChoice >= 18:
  orderMessage = `You've ordered a adult size ${foodType}. That will be 130 SEK`;
  break;
  case ageChoice < 18:
    orderMessage = `You've ordered a child size ${foodType}. That will be 100 SEK`;
    break;
default:
  orderMessage = "Invalid choice. Please specify 'child' or 'adult'.";
}
alert(orderMessage);

// Step 5 - Order confirmation
// Your code goes here
const confirmation = prompt("Would you like to confirm your order? (Yes/No)");

switch (confirmation) {
  case "yes":
  alert(`Thank you for your order !`)
    break;
case"no":
    alert(`We hope to serve you again in the future.`)
    break
default:
    alert("Invalid choice. Please specify 'Yes' or 'No'.");
    break
}
