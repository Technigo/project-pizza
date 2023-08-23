
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our pineapple JS Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const userName = prompt(`What is your name?`);

alert(
  `Hi ${userName}! Don't worry, we don't judge you like pineapple on your pizza
   here:)`)

// Step 2 - Food choice
// Request information of what the customer would like to order
// User alert to confirm customer's choice

alert(
  `What would you like to order?`
)

const mainMenu = prompt(`Please select:
  1 - Pizza
  2 - Pasta
  3 - Salad`);

let selectedMenu = "";

  if (mainMenu === "1"){
    selectedMenu = "Pizza";
  }
  else if (mainMenu === "2" ){
    selectedMenu = "Pasta";
  }
  else if (mainMenu === "3"){
    selectedMenu = "Salad";
  }
  else{
    alert(`Please select again.`);
    process.exit(1);
  }
alert (`You have selected ${selectedMenu}.`)

// Step 3 - Subtype choice
// Initiate an array to store different menu
let foodName = "";
let selectedChoice = "";

//select pizza
switch (selectedMenu) {
  case "pizza":
    foodName = prompt ( `Which pizza would you like to order?
    1 - Signature Hawaiian
    2 - Nodic smoked salmon pizza
    3 - Kabab pizza
    4 - Kimchi BBQ chicken pizza
    Please select the number of your choice`);
    selectedChoice = ["Signature Hawaiian", "Nodic smoked salmon pizza", "Kabab pizza", "Kimchi BBQ chicken pizza"]
    break;
    case "pasta":
    foodName = prompt ( `Which pasta would you like to order?
    1 - Spicy garlic butter linguini
    2 - Spaghetti Chicken Teriyaki
    3 - Cheesy taco pasta bake
    Please select the number of your choice`);
    selectedChoice = ["Spicy garlic butter linguini", "Spaghetti Chicken Teriyaki", "Cheesy taco pasta bake"]
    break;
    case "salad":
    foodName = prompt ( `Which salad would you like to order?
    1 - Tropical Mango Salad
    2 - Vietnamese Rice Noodle Salad with Chicken
    3 - Caesar Salad with BBQ chicken
    Please select the number of your choice`);
    selectedChoice = ["Tropical Mango Salad", "Vietnamese Rice Noodle Salad with Chicken", "Caesar Salad with BBQ chicken"]
      //Error message will be shown if invalid input is selected  
      default:
      alert("Please select again.");
      process.exit(1);
}
alert(`You have selected ${selectedChoice}.`)

// Step 4 - Age
// const age = prompt (`Is this an order for kid? Please enter the age.`);
// let userAge = "",
// if(userAge => 18){
//   alert(`You have ordered a ${}`)
// }


// switch (selectedPizza) {
// case "Nodic smoked salmon pizza":
//   console.log("You picked Nodic smoked salmon pizza.");
//   break;
// case "Kabab pizza":
//   console.log("You picked kabab pizza.");
//   break;
// case "Spicy Italian pizza":
//   console.log("You picked Spicy Italian pizza.");
//   break;
// case "Kimchi BBQ chicken pizza":
//   console.log("You picked Kimchi BBQ chicken pizza.");
// defalut:
// console.log(`Sorry, we are out of ${pizzaChoice}.`);
// }