// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
  let userName = prompt("What is your name?");

if (userName) {
  alert(`Hello ${userName}! Welcome!`);
} else {
  alert(`Hello there! Welcome `);
}

// Step 2 - Food choice
let chosenPizza;

while (true) {

let userChoice = prompt(`Enter the number of your chosen Pizza: 
1. Margerita 
2. Pepperoni 
3. Hawaiian`);

if (userChoice === "1") {
  chosenPizza = "Margerita";
  break;
} else if (userChoice === "2") {
  chosenPizza = "Pepperoni";
  break;
} else if (userChoice === "3") {
  chosenPizza = "Hawaiian";
  break;
} else {
  alert("Invalid choise. Please select 1,2 or 3");
}

}
alert(`You chose a ${chosenPizza} pizza`);

// Step 3 - Subtype choice
let chosenSize;

while (true) {

let userChoice2 = prompt(`Please select size: 
1. Small 
2. Normal
3. Family-size `);

if (userChoice2 === "1") {
  chosenSize = "Small";
  break;
} else if (userChoice2 === "2") {
  chosenSize = "Normal";
  break;
} else if (userChoice2 === "3") {
  chosenSize = "Family-size";
  break;
} else {
  alert("Please select a size");
}

}
alert(`Thank you for choosing the ${chosenSize} ${chosenPizza} pizza`);



// Step 4 - Age
let userAge = prompt("Please enter your age:");

userAge = parseInt(userAge);

if (!isNaN(userAge)) {
  let price;
  if (userAge < 19) {
    price = 10; //Child price
  } else if (userAge >19 && userAge <=65) { //"&&" instead of "&" because it checks if both conditions are met
    price = 20; //adult price
  } else {
    price = 15; //senior price
  }

let priceAdjust= "";

if (chosenSize === "Small") {
  price *=1.0;
} else if (chosenSize === "Normal") {
  price *=1.2
} else if (chosenSize === "Family-size") {
  price*=1.5
}


alert(`Based on your age, the price will e ${price}.`);

// Step 5 - Order confirmation
let orderConfirmation =
 `You have ordered the ${chosenSize} ${chosenPizza} for ${price}. Would you like to confirm?`;

let isorderCorrect = (confirm(orderConfirmation));




if (isorderCorrect) {
  alert(`Thank you ${userName}, your order is confirmed. Please see your order details below:
  Pizza: ${chosenPizza}
  Size: ${chosenSize}
  Price: ${price}` )
}
else if (!isorderCorrect) {
  chosenPizza = "";
  chosenSize = "";
  price = 0;
  alert("Order is cancelled. We look forward to seeing you soon!");
}
}
;
