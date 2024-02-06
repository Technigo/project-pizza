// Start here

// Defining some useful variables 
let orderedFood = "";

// Step 1 - Welcome and introduction

alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.");

const customer = prompt("Please enter your name:");

alert(`Happy to meet you, ${customer}!`);


// Step 2 - Food choice

const foodType = parseInt(prompt("What type of food would you like to order? \n  Please enter a number: \n  1 - Pizza \n  2 - Pasta \n  3 - Salad"))

switch (foodType) {
    case 1:
        alert("You've chosen Pizza!");
        break;
    case 2:
        alert("You've chosen Pasta!");
        break;
    case 3:
        alert("You've chosen Salad!");
        break;
    default:
        alert("Invalid food type. Please refresh site and try again.");
        throw new Error("Invalid choice");
}


// Step 3 - Subtype choice

// Pizza 

if (foodType === 1) {
    const pizzaType = parseInt(prompt("Please select a type of Pizza. \n  Enter a number: \n  1 - Vesuvius \n  2 - Hawaii \n  3 - Capricciosa"))
    switch (pizzaType) {
        case 1:
            orderedFood = "Vesuvius";
            break;
        case 2:
            orderedFood = "Hawaii";
            break;
        case 3:
            orderedFood = "Capricciosa";
            break;
        default:
            alert("Invalid pizza type. Please refresh site and try again");
            throw new Error("Invalid choice");      
    }

// Pasta 

} else if (foodType === 2) {
  const pastaType = parseInt(prompt("Please select a Pasta dish. \n  Enter a number: \n  1 - Spaghetti Bolognese \n  2 - Penne all’Arrabbiata \n  3 - Frutti de Mare"))
  switch (pastaType) {
    case 1:
        orderedFood = "Spaghetti Bolognese";
        break;
    case 2:
        orderedFood = "Penne all’Arrabbiata";
        break;
    case 3:
        orderedFood = "Frutti de Mare";
        break;
    default:
        alert("Invalid pasta type. Please refresh site and try again");
        throw new Error("Invalid choice");
  }

  // Salad 
  
} else if (foodType === 3) {
  const saladType = parseInt(prompt("Please select a Salad. \n  Enter a number: \n  1 - Caesar Salad \n  2 - Salade Niçoise \n  3 - Waldorf Salad"))
  switch (saladType) {
    case 1:
        orderedFood = "Caesar Salad";
        break;
    case 2:
        orderedFood = "Salade Niçoise";
        break;
    case 3:
        orderedFood = "Waldorf Salad";
        break;
    default: 
        alert("Invalid salad type. Please refresh site and try again");
        throw new Error("Invalid choice");        
  }
} 

alert(`You've chosen ${orderedFood}!`);


// Step 4 - Age

const age = (prompt("Is this food for a child or an adult? Type your age:"));

const portionSize = age <= 17 ? "child-sized" : "adult-sized";

const price = age <= 17 ? "€10" : "€15";


// Step 5 - Order confirmation

const confirmOrder = parseInt(prompt(`One ${portionSize} ${orderedFood} will be prepared for you. That'll be ${price}. Are you sure you want to order this? \n  Enter a number to confirm: \n 1 - Yes \n 2 - No`));

switch (confirmOrder) {
    case 1:
        alert("Thank you for your order! Your meal will be prepared."); 
        break;
    case 2: 
        alert("No worries, we'll be here if you change your mind.");
        break;  
    default:
        alert("Apologies, but that was neither a 'yes' nor a 'no'. Please try again.")
        break;
}