// Start here

// Step 1 - Welcome and introduction
// Welcome message display
alert(
    `Welcome to Javascript Pizzeria. (Switch/array version) 
    Ready to Start? - Click 'OK' to begin with.`
);

// Prompt the customer to input their name 
const userName = prompt(`Please enter your name below:`);

// Greeting message including the customer's name
alert(`Hi ${userName}! Please proceed to place an order. `)

// Step 2 - Food choice
// Prompt the customer to choose a menu
const menuChoice = prompt(`Please select your menu:
  1- Pizza
  2- Pasta
  3- Salad
  Please enter the number of your choice:`)

//Create a variable storing the selected menu
let selectedMenu;

//Determine the selected menu accordingly to customer's choice (string).
switch (menuChoice) {
    case "1":
        selectedMenu = "Pizza";
        break;
    case "2":
        selectedMenu = "Pasta";
        break;
    case "3":
        selectedMenu = "Salad"
        break;
    default:
        alert(`Invalid choice.  
    Please select a valid number between 1-3.`);
        process.exit(1);
}

//Display the selected menu
alert(`You have chosen ${selectedMenu}.`)

// Step 3 - Subtype choice

//Prompt the customer to select a specific dish from the previously selected food

let subMenuChoice;
let finalChoice;


switch (selectedMenu) {
    case "Pizza":
        subMenuChoice = prompt(`Select a pizza:
        1- Margarita
        2- Vesuvio
        3- 4-cheese pizza
        Please enter the number of your choice:
      `);
        finalChoice = ["Margarita", "Vesuvio", "4-cheese pizza"]
        //Determine the food choice subtype using array
        break;
    case "Pasta":
        subMenuChoice = prompt(`Select a pasta dish:
        1- Pasta Bolognese
        2- Freshly-made tortellini
        3- Pasta Carbonara
        Please enter the number of your choice:
        `);
        finalChoice = ["Pasta Bolognese", "Freshly-made tortellini", "Pasta Carbonara"];
        //Determine the food choice subtype using array
        break;
    case "Salad":
        subMenuChoice = prompt(`Select a salad:
        1- Nicoise salad
        2- Caesar salad
        3- Goatcheese salad
        Please enter the number of your choice:
        `);
        finalChoice = ["Nicoise salad", "Caesar salad", "Goatcheese salad"];
        //Determine the food choice subtype using array
        break;
    default: alert(`Invalid menu choice.  Please start over.`);
        process.exit(1);
}

// Determine the customer's waiting time accordingly to the cooking

let waitingTime;

switch (subMenuChoice) {
    case "1":
        waitingTime = "10";
        break;
    case "2":
        waitingTime = "15";
        break;
    case "3":
        waitingTime = "20";
        break;
    default:
        alert(`Invalid dish choice.  Please select a number between 1-3. `);
        process.exit(1);
}

// Display the selected food choice subtype

if (subMenuChoice === "1") {
    alert(`Great ${userName}!  You have chosen ${finalChoice[0]} from the ${selectedMenu} menu!`)
} else if (subMenuChoice === "2") {
    alert(`Great ${userName}!  You have chosen ${finalChoice[1]} from the ${selectedMenu} menu!`)
} else if (subMenuChoice === "3") {
    alert(`Great ${userName}!  You have chosen ${finalChoice[2]} from the ${selectedMenu} menu!`)
    process.exit(1)
}

// Step 4 - Age

// Prompt the client to enter their age:
const userAge = prompt(`Please enter your age (years):`)

// Determine the cost of the selected dish according to the client's age
let costFood = (userAge >= 12) ? "15" : "9";

// Determine the word choice in confirmation message display
let costAge = (costFood === "15") ? "adult" : "child";

//Display the selected dish and the associated cost
alert(`One ${costAge} ${finalChoice} will be prepared for you.  That will be ${costFood} euros.`)


//Prompt the client to confirm their order
let confirmation = prompt(`Are you sure this is what you want to order?
    1- Yes
    2- No 
    Enter a number to confirm:`);

// Step 5 - Order confirmation

//Determine the client's confirmation

if (confirmation === "1") {
    alert(`Thank you ${userName} for placing your order!  Please wait while your food is being prepared (approx. ${waitingTime} min).  Bon apétit!`)
} else if (confirmation === "2") {
    alert(`No worries ${userName}!  Welcome back anytime to try our menu!`)
} else {
    alert(`Invalid choice.  Please choose between 1 or 2.`)
    process.exit(1);
}






