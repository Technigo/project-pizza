// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let person = prompt("Please enter you name");

if (person != null) {
    alert("Hello " + person + "!" + " that is a really cool name!");
}

// Step 2 - Food choice
let foodOptionText;

let foodOption = prompt("What would you like to order? \n 1 Pizza \n 2 Pasta \n 3 Salad"); {

    if (foodOption == 1) {
        alert("Pizza is a great choice!");
    } else if (foodOption == 2) {
        alert("Amazing! Pasta here is delicious!");
    } else if (foodOption == 3) {
        alert("wow, salad, that is a great choice!");
    } else {
        alert("Oh... are you not hungry? Please choose one of the options!");
    }
}