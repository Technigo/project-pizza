



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

alert(
  `What would you like to order?`
)

const mainMenu = prompt(`Please select:
  1 - Pizza
  2 - Pasta
  3 - Salad`);

let selectedMenu = ""
  if (mainMenu === 1){
    selectedMenu = "Pizza";
  }
  else if (mainMenu === 2 ){
    selectedMenu = "Pasta";
  }
  else if (mainMenu === 3){
    selectedMenu = "Salad";
  }
  else{
    alert(`Please select again.`);
    process.exit(1);
  }
alert (`You selected ${selectedMenu}.`)

// Step 3 - Subtype choice

alert(
  `Which pizza would you like to order?`
)
//select pizza
const pizzaChoice = prompt(`Please select:
  1 - Signature Hawaiian
  2 - Nodic smoked salmon pizza
  3 - Kabab pizza
  4 - Kimchi BBQ chicken pizza`);

let selectedPizza = "";

if(pizzaChoice === "1"){
  selectedPizza = "Signature Hawaiian";
}
else if(pizzaChoice === "2"){
  selectedPizza = "Nodic smoked salmon pizza";
}
else if(pizzaChoice = "3"){
  selectedPizza = "Kabab pizza";
}
else if(pizzaChoice = "4"){
  selectedPizza = "Kimchi BBQ chicken pizza";
}
else{
  alert("Please select your choice of pizza.");
  process.exit(1);
}

alert(`You selected ${selectedPizza}.`)

const pastaChoice = prompt(`Please select:
  1 - Spicy garlic butter linguini
  2 - Spaghetti Chicken Teriyaki
  3 - Cheesy taco pasta bake`);

let selectedPasta = "";

if(pastaChoice === "1"){
  selectedPasta = "Spicy garlic butter linguini";
}
else if(pastaChoice === "2"){
  selectedPasta = "Spaghetti Chicken Teriyaki";
}
else if(pastaChoice = "3"){
  selectedPasta = "Cheesy taco pasta bake";
}

else{
  alert("Please select your choice of pasta.");
  process.exit(1);
}

alert(`You selected ${selectedPasta}.`)

const saladChoice = prompt(`Please select:
  1 - Tropical Mango Salad
  2 - Vietnamese Rice Noodle Salad with Chicken
  3 - Caesar Salad with BBQ chicken`);

let selectedSalad = "";

if(saladChoice === "1"){
  selectedSalad = "Spicy garlic butter linguini";
}
else if(saladChoice === "2"){
  selectedSalad = "Spaghetti Chicken Teriyaki";
}
else if(salasdChoice = "3"){
  selectedSalad = "Cheesy taco pasta bake";
}

else{
  alert("Please select your choice of Salad.");
  process.exit(1);
}

alert(`You selected ${selectedSalad}.`)

let

// Step 4 - Age
const age = prompt (`Is this an order for kid? Please enter the age.`);
let userAge = "",
if(userAge => 18){
  alert(`You have ordered a ${}`)
}


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