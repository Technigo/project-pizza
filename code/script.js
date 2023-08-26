// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const firstName = prompt("Please enter your name:");
alert (
  `Hello, ${firstName}! Let's get started.`);    

// Step 2 - Food choice
alert(`Time to choose what food you want!`)
const foodChoice = prompt(`What type of food would you like to order? 
Enter a number: 
1 - Pizza 
2 - Pasta 
3 - Salad
`);

let selectedFoodChoice = "";
if (foodChoice === "1") {
  selectedFoodChoice = "Pizza";
  alert(`You've chosen ${selectedFoodChoice}!`);
} else if (foodChoice === "2") {
  selectedFoodChoice = "Pasta";
  alert(`You've chosen ${selectedFoodChoice}!`);
} else if (foodChoice === "3") {
  selectedFoodChoice = "Salad";
  alert(`You've chosen ${selectedFoodChoice}!`);
} else {
  alert("Invaild choice. Please select a number between 1 and 3.");
}


// Step 3 - Subtype food choice
let pizzaType = ""
let pastaType = ""
let saladType = ""
let subtypeChoice = ""

if (selectedFoodChoice === "Pizza") {
  pizzaType = prompt(
    `Delicious! What kind of pizza do you want? Type a number.
    1 - Napolitiana
    2 - Hawaiian
    3 - Pepperoni`
  );
  if (pizzaType == 1) {
    subtypeChoice = "Napolitiana"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (pizzaType == 2) {
    subtypeChoice = "Hawaiian"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (pizzaType == 3) {
    subtypeChoice = "Pepperoni"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else {
    alert("Invalid choice. Please select a number between 1 and 3.");
  }
}

if (selectedFoodChoice === "Pasta") {
  pastaType = prompt(
    `Delicious! What kind of pasta do you want? Type a number.
    1 - Spaghetti Carbonara
    2 - Fettuccine Alfredo
    3 - Cheesy Tortellini`
  );
  if (pastaType == 1) {
    subtypeChoice = "Spaghetti Carbonara"
    alert(
      `You chose ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (pastaType == 2) {
    subtypeChoice = "Fettuccine Alfredo"
    alert(
      `You chose ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (pastaType == 3) {
    subtypeChoice = "Cheesy Tortellini"
    alert(
      `You chose ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else {
    alert("Invalid choice. Please select a number between 1 and 3.");
  }
}

if (selectedFoodChoice === "Salad") {
  saladType = prompt(
    `Delicious! What kind of salad do you want? Type a number.
    1 - Caesar 
    2 - Caprese 
    3 - Greek`
  );
  if (saladType == 1) {
    subtypeChoice = "Caesar"
    alert(
      `You chose ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (saladType == 2) {
    subtypeChoice = "Caprese"
    alert(
      `You chose ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (saladType == 3) {
    subtypeChoice = "Greek"
    alert(
      `You chose ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else {
    alert("Invalid choice. Please select a number between 1 and 3.");
  }
}


// Step 4 - Age 
// Price for regular sizes for adults
let foodCost = "";
switch (selectedFoodChoice) {
  case "Pizza":
    price = "120";
    break;
  case "Pasta":
    price = "110";
    break;
  case "Salad":
    price = "100";
    break;
}
// Cost for children is half the price
let foodCostChild = price/2;

// Ask for age from user
const customerAge = prompt(`Is this food order for an adult or a child? Enter your age in numbers down below please!`);

if (customerAge >= 18){
  alert(`You've selected ${subtypeChoice} ${selectedFoodChoice} regular size and the total will be ${price}kr! `);
} else if (customerAge < 18){
  alert(`You've selected ${subtypeChoice} ${selectedFoodChoice} children size and the total will be ${foodCostChild}kr!`);
} else {
  alert(`Invaild input, please try again!`);
}


// Step 5 - Order confirmation
let orderConfirmation = prompt(`Do you want to confirm your order? Please select the number down below.
1 - Yes
2 - No`);

// Convert the user input to a number
orderConfirmation = parseInt(orderConfirmation);

if (orderConfirmation === 1) {
  alert(`Thank you for your order! We will start to prepare your meal now.`);
} else if (orderConfirmation === 2) {
  alert(`Sorry to see you go... Should you ever change your mind or have any questions in the future, please don't hesitate to reach out. Have a nice day!`);
} else {
  alert(`Invalid input. Please select either 1 or 2.`);
}