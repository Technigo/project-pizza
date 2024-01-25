// Start here

// Step 1 - Welcome and introduction
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

const person = prompt("Please enter your name");
alert(`Welcome ${person}`);

// Step 2 - Food choice
let food = prompt("What's your craving today: 1 - Pizza  2 - Pasta  3- Salad Please enter the number of your choice!");
let selectedFood = "";

// Refactor to Switch Case
switch (food) {
    case "1":
        selectedFood = "Pizza";
        break;
    case "2":
        selectedFood = "Pasta";
        break;
    case "3":
        selectedFood = "Salad";
        break;
    default:
        alert("Invalid choice. Please select a valid number.");
        Process.exit(1);
}

alert(`You chose ${selectedFood}`);

// Step 3 - Subtype choice
let subtype = "";
let subtypeName = []; // Store names for the subtypes pizza, pasta, and salad

switch (selectedFood) {
    case "Pizza":
        subtype = prompt('Select the type of pizza you want: 1 - Margherita 2 - Veggie 3 - Nutella Please enter the number of your choice:');
        subtypeName = ["Margherita", "Veggie", "Nutella"];
        break;
    case "Pasta":
        subtype = prompt('Select the type of pasta you want: 1 - Shrimp pasta 2 - Veggie pasta 3 - Elf style pasta Please enter the number of your choice:');
        subtypeName = ["Shrimp", "Veggie", "Elf style"];
        break;
    case "Salad":
        subtype = prompt('Select the type of salad you want: 1 - Shrimp salad 2 - Greek salad 3 - Tomato salad Please enter the number of your choice:');
        subtypeName = ["Shrimp", "Greek", "Tomato"];
        break;
}

// You can refactor the following alert into a single line outside the switch, as it's the same for all cases.
alert(`You chose to order a  ${subtypeName[parseInt(subtype) - 1]} ${selectedFood} . Good choice!!.`);

// Step 4 - Age
let age = prompt("Type your age in numbers to help me figure out if you want a kid's size or an adult size portion");

// Refactor to Switch Case
switch (true) {
    case age >= 19:
        alert(`You chose and adult size portion. The price is 150 SEK`);
        break;
    case age <= 18:
        alert(`You chose a kid's size portion. The price is 100 SEK`);
        break;
}

// Step 5 - Order confirmation
let order = prompt("Do you want to place an order? Yes or No");
switch (order.toLowerCase()) {
    case "yes":
        alert(`Thank you for your order. Pick it up in 10 minutes!`);
        break;
    case "no":
        alert(`Sorry to hear you changed tour mind! Hope to see you again!`);
        break;
    default:
        alert(`Invalid response.`);
        break;
}
