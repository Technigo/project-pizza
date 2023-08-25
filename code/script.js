// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Asks for the user's name using prompt and stores the answer in a variable.
const userName = prompt(`Please enter your name:`);
alert(`Hi ${userName}! Click 'OK' to choose type of food.`);

// Step 2 - Food choice
// Your code goes here

// Prompts the user to choose a food item by entering a corresponding number.
let selectedFood = prompt(`What do you want to order?:
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please enter the number of your choice:`);

// Step 3 - Subtype choice
// Your code goes here

// A switch statement to prompt the user for a specific type of dish based on the previously selected food item.

let dishType = "";
let dishNames = "";

switch (selectedFood) {
    case "1":
        dishType = prompt(`What type of pizza do you want?:
          1 - Margherita
          2 - Capricciosa
          3 - Hawaii
          Please enter the number of your choice:`);
        dishNames = ["Margherita", "Capricciosa", "Hawaii"];
        break;
    case "2":
        dishType = prompt(`What type of pasta do you want?:
          1 - Arrabbiata
          2 - Vongole
          3 - Ravioli
          Please enter the number of your choice:`);
        dishNames = ["Arrabbiata", "Vongole", "Ravioli"];
        break;
    case "3":
        dishType = prompt(`What type of salad do you want?:
          1 - Caesar
          2 - Greek
          3 - Waldorf
          Please enter the number of your choice:`);
        dishNames = ["Caesar", "Greek", "Waldorf"];
        break;
    default:
        alert("Invalid choice.");
        process.exit(1);
}

// Step 4 - Age
// Your code goes here

// Asks who the food is for, creates an order message with chosen dish, and price, and shows it in an alert.

let customerType = prompt(`Is the food for a child or an adult?
  1 - Child
  2 - Adult
  Please enter the number of your choice:`);

let orderMessage = `You are ordering a ${customerType === "1" ? 'child' : 'adult'}s ${dishNames[dishType - 1]} ${selectedFood === "1" ? 'pizza' : selectedFood === "2" ? 'pasta' : 'salad'}.`;

let totalPrice = 0;

if (customerType === "1") {
    totalPrice = 5;
} else if (customerType === "2") {
    totalPrice = 10;
}

orderMessage += ` The total price is ${totalPrice}€.`;

alert(orderMessage);

// Step 5 - Order confirmation
// Your code goes here

// Seeks order confirmation through numeric input and responds with a message.

let confirmation = prompt(`Please confirm your order.
  1 - Yes
  2 - No
  Please enter the number of your choice:`);

if (confirmation === "1") {
    alert("Thank you for your order! Enjoy your meal!");
} else {
    alert("We hope to see you in the future. Have a great day!");
}