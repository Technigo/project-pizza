// Step 1 - Welcome and introduction
alert(
    `Welcome to this chick JavaScript Pizzeria! Ready to Start? - Click 'OK' to begin.`
);
  
const customerName = prompt("Enter your name:");

alert(`Hi, ${customerName}! Proceed to place an order.`);


// Step 2 - Food choice
const foodType = prompt(
    `What type of food would you like to order?
Enter a number:
1 - Pizza 🍕
2 - Pasta 🍝
3 - Salad 🥗`
);

let chosenFoodType;

  switch (foodType) {
    case "1":
        chosenFoodType = "Pizza";
        break;
    case "2":
        chosenFoodType = "Pasta";
        break;
    case "3":
        chosenFoodType = "Salad";
        break;
    default:
        alert("Invalid choice. Refresh and try again.");
        process.exit(1);
        break;
}
  
alert(`You've chosen ${chosenFoodType}!`);


// 3 - Subtype choice
let pizzaType;
let pastaType;
let saladType;

switch (chosenFoodType) {
    case "Pizza":
        pizzaType = prompt(`Select a Pizza type.
Enter a number:
1 - Hawaiian
2 - Pepperoni
3 - Veggie`);
        break;
    case "Pasta":
        pastaType = prompt(`Select a Pasta type.
Enter a number:
1 - Napolitana
2 - Penne Alla Vodka
3 - Creamy Tomato With Burrata`);
        break;
    case "Salad":
        saladType = prompt(`Select a Salad type.
Enter a number:
1 - Greek
2 - Caesar
3 - Fruit`);
        break;
    default:
        alert("Invalid choice. Refresh and try again.");process.exit(1);
        break;
}

// Input values for subtype choices
let finalOrder;

switch (chosenFoodType) {
    case "Pizza":
        switch (pizzaType) {
            case "1":
                finalOrder = "Hawaiian";
                break;
            case "2":
                finalOrder = "Pepperoni";
                break;
            case "3":
                finalOrder = "Veggie";
                break;
            default:
                alert("Invalid pizza choice. Refresh and try again.");
                process.exit(1);
                break;
        }
        break;
    case "Pasta":
        switch (pastaType) {
            case "1":
                finalOrder = "Napolitana";
                break;
            case "2":
                finalOrder = "Penne Alla Vodka";
                break;
            case "3":
                finalOrder = "Creamy Tomato With Burrata";
                break;
            default:
                alert("Invalid pasta choice. Refresh and try again.");
                process.exit(1);
                break;
        }
        break;
    case "Salad":
        switch (saladType) {
            case "1":
                finalOrder = "Greek";
                break;
            case "2":
                finalOrder = "Caesar";
                break;
            case "3":
                finalOrder = "Fruit";
                break;
            default:
                alert("Invalid salad choice. Refresh and try again.");
                process.exit(1);
                break;
        }
        break;

    default:
        alert("Invalid choice. Refresh and try again.");
        process.exit(1);
        break;
}

alert(
  `Great choice ${customerName}, you've chosen a ${finalOrder}!`
);


// Step 4 - Age
// parseInt for storing inputs in number- instead of string format
const customerAge = parseInt(prompt(
    `Is this food for a child or an adult?
Type your age:`
));
  
let size;
let cost;

// Values for size and cost
switch (true) {
    case customerAge >= 8:
        size = "adult";
        cost = "€10";
        break;
    case customerAge <= 8:
        size = "child";
        cost = "€5";
        break;
    default:
        alert("Invalid age. Refresh and try again.");process.exit(1);
        break;
}


// Step 5 - Order confirmation
const orderConfirmation = prompt(`One ${size} sized ${finalOrder} will be prepared for you. That'll be ${cost}. Are you sure you want to order this?
Enter number 1 to confirm:`);
  
switch (orderConfirmation) {
    case "1":
        alert(`Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼`)
        break;
    default:
        alert(`This order is cancelled. Come back and order anytime you want.`);
        break;
}