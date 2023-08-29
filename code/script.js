// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. \nReady to Start? - Click 'OK' to begin.`
)
//NAME 
let person = prompt(`What's your name? :) `, `Write it here!`);

//NAME ANSWER
if (person !== null && person !== `Write it here!` ) {
alert(`Hi ${person}! Hope you're hungry to order!`);
} 
else { 
  alert(`No name, no worries. Let's continue!`)
} 

// Step 2 - Food choice
// This is where i put the content in a function to be able to call step 2 again if user don't type valid number.

//CHOICE OF FOOD TYPE
let foodType
let foodTypeSelected
foodType = prompt(`Can I take your order?
Choose from today's menu!
1. Pizza
2. Pasta
3. Salad`,
`Please enter the number of your dish`); 

//VALUES FOR EACH FOOD TYPE
foodTypeSelected = "";
if (foodType === "1"){
  foodTypeSelected = `Pizza`;
} 
else if (foodType === "2"){
  foodTypeSelected = `Pasta`;
}
else if(foodType === "3"){
  foodTypeSelected = `Salad`;
} 
else { 
  alert("Sorry, we did not catch that. Please type a number.");
  process.exit(1);
}
alert(`You have chosen ${foodTypeSelected}. Click ok to see the menu.`);



// Step 3 - Subtype choice

//CHOICE OF SPECIFIED FOOD

let pizzaType
let pastaType
let saladType
let foodPrice
let foodOrder

if (foodTypeSelected == `Pizza`){
  pizzaType = prompt(
    `Great! We have these to choose from:
    1. Margherita 11€
    2. Verdure    12€
    3. Surprise   14€`
    );
} 
else if (foodTypeSelected == `Pasta`){
  pastaType = prompt(
    `Great! We have these to choose from:
    1. Arrabbiata   12€
    2. Casio e Pepe 10€
    3. Alfredo      9€`
    );
} 
else if (foodTypeSelected == `Salad`){
  saladType = prompt(
    `Great! We have these to choose from:
    1. Panzanella   6€
    2. Caprese      7€
    3. Giardiniera  8€`
    );
} 
else {
  alert(`Sorry, we did not catch that. Type a number.`)
  process.exit(1);
}
// VALUE FOR INPUT
  if (foodTypeSelected == "Pizza"){
    if (pizzaType === "1"){
    foodOrder = `Margherita`;
    foodPrice = 11;
  } 
  else if (pizzaType === "2"){
    foodOrder = `Verdure`;
    foodPrice = 12;
  } 
  else if (pizzaType === "3"){
    foodOrder = `Surprise`;
    foodPrice = 14;
  }
  else {alert("Invalid choice. Refresh and try again.");
  process.exit(1);
  }
}
  
  else if (foodTypeSelected === "Pasta"){
  if (pastaType === 1){
    foodOrder = `Arrabbiata`;
    foodPrice = 12;
  } 
  else if (pastaType === 2){
    foodOrder = `Casio e Pepe`;
    foodPrice = 10;
  }
  else if (pastaType === 3){
    foodOrder = `Alfredo`;
    foodPrice = 9;
  }
  else {alert("Invalid choice. Refresh and try again.");
  process.exit(1);
  }
}
  
else if (foodTypeSelected === "Salad"){
if (saladType === 1){
  foodOrder = `Panzanella`;
  foodPrice = 6;
} 
else if (saladType === 2){
  foodOrder = `Caprese`;
  foodPrice = 7;
}
else if (saladType === 3){
  foodOrder = `Giardiniera`;
  foodPrice = 8;
}
else {alert("Invalid choice. Refresh and try again.");
  process.exit(1);
  }
}
else {alert("Invalid choice. Refresh and try again.");
process.exit(1);
}

alert(`You have ordered the ${foodOrder}! Thatll be ${foodPrice} €, thank you!`)

// Step 4 - Age
let babyPrice = (foodPrice/2)
let age = parseInt(prompt(`I forgot to ask, how old are you?
If under 16, you will get a smaller portion for half price! \nPlease type in your age!`));
if (age <= 16 ) { 
  alert(`Oh, there we go, a smaller plate for only ${babyPrice}€ !`)}
else { alert(`All in order! A big portion for ${foodPrice} €.`)}

// Step 5 - Order confirmation
let orderConfirmation;

if (age <= 16) {
  orderConfirmation = prompt(`Best ${person}! You have ordered the small ${foodTypeSelected} ${foodOrder} for only ${babyPrice}. Is this correct? Enter 1.`)
} 
else if (age > 16) {
  orderConfirmation = prompt(`Best ${person}! You have ordered a ${foodTypeSelected} ${foodOrder} for ${foodPrice}. Is this correct? Enter 1`)
} 
else {alert(`So sorry we got I wrong, please try again!`)
}


if (orderConfirmation == "1"){alert(`Fantastic! Your meal is being prepared!`)
}
else {alert(`So sorry we got I wrong, please try again!`)
}
