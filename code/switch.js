// This script includes the javascript with added switch and ternary operator. This script is connected to html.

//Step 1 - Welcome and introduction
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const username = prompt("What's your name?", "Confused Developer");

alert("Welcome! Let's order some yummy food " + username + "!");

// Step 2 - Food choice
let choosefood = prompt("What would you like to order? 1 = Pizza, 2 = Pasta, 3 = Salad", "Type your number of choice here");

let foodName;

switch (choosefood) {
    case "1":
        foodName = "Pizza";
        break;
    case "2":
        foodName = "Pasta";
        break;
    case "3":
        foodName = "Salad";
        break;
    default:
        alert(`Sorry, invalid number/choice. Please start over.`);
        process.exit(1);
}

alert("Yummy! " + foodName + "! What a great choice!");

// Step 3 - Choice depending on food choice
let specifyfood;

switch (foodName) {
    case "Pizza":
        specifyfood = prompt("Select a type of pizza: 1 = Spicy pizza, 2 = Yummy Pizza, 3= Yummy yummy pizza");
        break;
    case "Pasta":
        specifyfood = prompt("Select a type of pasta: 1 = Spicy spaghetti, 2 = Yummy spagetthi, 3 = Yummy yummy spagetthi", "Type your number of choice here");
        break;
    case "Salad":
        specifyfood = prompt("Select a type of salad: 1 = Spicy salad, 2 = Yummy salad, 3 = Yummy yummy salad", "Type your number of choice here");
        break;
    default:
        alert(`Sorry, invalid choice. Please start over.`);
        process.exit(1);
}

// Switch case to determining the chosen subtype and providing feedback using alert method to confirm the selection.

let finalchoice;

switch (foodName) {
    case "Pizza":
        switch (specifyfood) {
            case "1":
                finalchoice = "Spicy pizza";
                break;
            case "2":
                finalchoice = "Yummy pizza";
                break;
            case "3":
                finalchoice = "Yummy yummy pizza";
                break;
            default:
                alert(`Invalid choice. Please start over.`);
                process.exit(1);
        }
        break;
    case "Pasta":
        switch (specifyfood) {
            case "1":
                finalchoice = "Spicy spagetthi";
                break;
            case "2":
                finalchoice = "Yummy spagetthi";
                break;
            case "3":
                finalchoice = "Yummy yummy spagetthi";
                break;
            default:
                alert(`Invalid choice. Please start over.`);
                process.exit(1);
        }
        break;
    case "Salad":
        switch (specifyfood) {
            case "1":
                finalchoice = "Spicy salad";
                break;
            case "2":
                finalchoice = "Yummy salad";
                break;
            case "3":
                finalchoice = "Yummy yummy salad";
                break;
            default:
                alert(`Invalid choice. Please start over.`);
                process.exit(1);
        }
        break;
}

// Step 4 and 5 - Checking age: Adolescent/adult or child, price and confirmation with ternary operator and else-if.

let age = prompt("Portion sizes differ depending on if it's a child or adolescent/adult.", "Please type your age here");
let confirmation;

const priceMessage = age >= 16
    ? `One regular sized ${finalchoice}. That'll be 10 euros.`
    : `One child sized ${finalchoice}. That'll be 7 euros.`;

confirmation = prompt(priceMessage, 'Enter a number to confirm: 1: Yes, 2: No.');

if (confirmation === "1") {
    alert(`Your ${finalchoice} is being prepared. Yummy!`);
} else {
    alert(`Ok, we'll be happy to prepare a ${finalchoice} or another yummy meal for you another time! Welcome back!`);
    process.exit(1);
}







