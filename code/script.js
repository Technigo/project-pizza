// STEP 1 - Welcome and introduction//
//Alertmessage: Welcome
//Promptmessage: Please enter name
//Alertmessage: Thank you + name
alert(
  `Welcome to Mirela´s Pizzeria. Ready to start your order? - Click 'OK' to begin.`
)

let text;
let NAME = prompt("Please enter your full name");

alert(
  `Thank you ` + NAME + `! Now continue to your order.`
)
//STEP 1 END//


// STEP 2 - Food choice//
// Promptmessage: Asking the user to choose a meal out of a list of options:
const foodChoice = prompt(`Select your favourite meal!:
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please enter the number of your choice:`);

// Connect the customer choice to the list and response messages:
//Initialize a variable to store the selected food.//
let selectedChoice = "";

//Determine the selected food based on the user's choice.
if (foodChoice === "1") {
  selectedChoice = "Pizza";
} else if (foodChoice === "2") {
  selectedChoice = "Pasta";
} else if (foodChoice === "3") {
  selectedChoice = "Salad";
} else {
  //Invalid choice - Errormessage:
  alert(`Invalid choice - please select a number between 1-3 to make an order.`);
  process.exit(1);
}
//Alertmessage: Confirm the selceted food option.
alert(`You've chosen ${selectedChoice}!`);
// STEP 2 END //



// STEP 3 - Subtype choice//
// Depending on the previously chosen food type (Pizza, Pasta, Salad), the program will present the user with subtype options specific to that food type. //

let typeOfName = "";
let subType = "";

// Switch - Determine the selected subtype of food based on the user's choice.//
//NOT SURE WHY ELSE IF IS USED ABOVE AND SWITCH HERE, BUT IT WORKS.//

switch (selectedChoice) {
  case "Pizza":
    subType = prompt(`Select a Pizzatype:
    1 - Margharita
    2 - Pepperoni 
    3 - Hawaii
    Please enter the number of your choice:`);
    typeOfName = ["Margharita", "Pepperoni", "Hawaii"];
    break;
  case "Pasta":
    subType = prompt(`Select a Pasta type:
    1 - Carbonara
    2 - Mediterranian
    3 - Bolognese
    Please enter the number of your choice:`);
    typeOfName = ["Carbonara", "Mediterranian", "Bolognese"];
    break;
  case "Salad":
    subType = prompt(`Select a Salad:
    1 - Cesar
    2 - Greek 
    3 - Fruit
    Please enter the number of your choice:`);
    typeOfName = ["Cesar", "Greek", "Fruit"];
    break;
}

// Alertmessage: Confirm the selceted subType option.//
// Had trouble understanding the typeOfName 0,1,etc.. found that others had the same issues and copied the help they got - still dont fully understand it//
if (subType === "1") {
  alert(
    `Great Choice, You've chosen to order ${typeOfName[0]} ${selectedChoice}!`
  );
} else if (subType === "2") {
  alert(
    `Great Choice, You've chosen to order ${typeOfName[1]} ${selectedChoice}!`
  );
} else if (subType === "3") {
  alert(
    `Great Choice, You've chosen to order ${typeOfName[2]} ${selectedChoice}!`
  );
}
else {
  alert(`Invalid choise - please select a number between 1-3 to make an order.`)
}
//STEP 3 END//



// STEP 4 - Age//
//Ask user for their age and confirm whether the order is selected for adult or child. Ask user to confirm.//
// Promptmessage: Asking the user to type their age://
let age = prompt("Please enter your age to let us know wheter you are ordering a childrens portion or an adult portion.");

//Confrim the selected food size and price (adult or child portion) based on the user's choice.//
// Have had some trouble linking to the correct terms - propably lack of understanding in terms of what the different functions are, had to guess in the end and do not understand the logic//
if (age <= 18) {
  alert(`You have selected a childrens portion of ${selectedChoice} and ${typeOfName[parseInt(subType) - 1]} to the cost of €15.`);
} else if (age >= 18) {
  alert(`You have selected an adult portion of ${selectedChoice} and ${typeOfName[parseInt(subType) - 1]} to the cost of €25.`);
} else {
  //Invalid choice - Errormessage://
  alert(`Invalid choice. Please select a valid number.`);
}
// STEP 4 END //


// STEP 5 - Order confirmation//
//if the user confirms, a thank you message should be displayed using the alert() method, indicating that their meal will be prepared. If the user declines, a polite farewell message should be displayed using the alert() method, encouraging them to return for future orders. //

let order = prompt(`Do you wish to place your order? Please write yes or no.`);
if (order === "yes") {
  alert(`Thank you! Your order is received and will be ready shortly.`);
}
else if (order === "no") {
  alert(`Your order is canceled. We hope to see you again soon.`);
}
else {
  alert(`Ìnvalid choice.`);
}

//STEP 5 END //