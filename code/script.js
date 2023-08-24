// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Asks for the user's name using prompt and stores the answer in a variable
const userName = prompt(`Please enter your name:`);
alert(`Hi ${userName}! Click 'OK' to choose type of food.`);

// Step 2 - Food choice
// Your code goes here

let selectedFood = prompt(`What food do you want?:
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please enter the number of your choice:`);

// Step 3 - Subtype choice
// Your code goes here

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

// Step 5 - Order confirmation
// Your code goes here