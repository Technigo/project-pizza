// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. \nReady to Start? - Click 'OK' to begin.`
)
let person = prompt(`What's your name? :) `, `Write it here!`);
if (person !== null && person !== `Write it here!` ) {
alert(`Hi ${person}! Hope you're hungry to order!`);
} else { 
  alert(`No name, no worries. Let's continue!`)
} 

// Step 2 - Food choice
// A function to be able to call step 2 again if user don't type valid number.
chooseFoodType();
function chooseFoodType (){
let foodType
let foodTypeConfirm
foodType = prompt(`Can I take your order?
Choose from today's menu!
1. Pizza
2. Pasta
3. Salad`,
`Please enter the number of your dish`); 

foodTypeConfirm = "";
if(foodType === "1"){ foodTypeConfirm = `Pizza`;} 
else if(foodType === "2"){ foodTypeConfirm = `Pasta`;} 
else if(foodType === "3"){ foodTypeConfirm = `Salad`;} 
else { 
  alert("Sorry, we did not catch that. Please type a number.");
  return chooseFoodType ();
}
alert(`You have chosen ${foodTypeConfirm}. Click ok to see the menu.`);

}

// Step 3 - Subtype choice

let pizzaType
let pastaType
let saladType
let foodPrice
let foodOrder

if (foodTypeConfirm === `Pizza`){
  pizzaType = prompt(
    `Great! We have these to choose from:
    \n1. Margherita 11€
    \n2. Verdure    12€
    \n3. Surprise   14€`
  ); 
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
  alert(`You have ordered the Pizza ${foodOrder}! That'll be ${foodPrice} €, please.`)
} 

else if (foodTypeConfirm === `Pasta`){
  pastaType = prompt(
    `Great! We have these to choose from:
    1. Arrabbiata   12€
    2. Casio e Pepe 10€
    3. Alfredo      9€`
  ); 
  if (pastaType === "1"){
    foodOrder = `Arrabbiata`;
    foodPrice = 12;
  } 
  else if (pastaType === "2"){
    foodOrder = `Casio e Pepe`;
    foodPrice = 10;
  }
  else if (pastaType === "3"){
    foodOrder = `Alfredo`;
    foodPrice = 9;
  }
  alert(`You have ordered the Pasta, ${foodOrder}! That'll be ${foodPrice} €, please!`)
} 
else if (foodTypeConfirm === `Salad`){
saladType = prompt(
  `Great! We have these to choose from:
  \n1. Panzanella   6€
  \n2. Caprese      7€
  \n3. Giardiniera  8€`
); if (saladType === "1"){
  foodOrder = `Panzanella`;
  foodPrice = 6;
} if (saladType === "2"){
  foodOrder = `Caprese`;
  foodPrice = 7;
}if (saladType === "3"){
  foodOrder = `Giardiniera`;
  foodPrice = 8;
}
alert(`You have ordered the ${foodOrder} Salad! Thatll be ${foodPrice} €, thank you!`)
} else {(alert(`Please type a number, 1, 2 or 3!`))}

// Step 4 - Age
let babyPrice = (foodPrice/2)
let age = parseInt(prompt(`I forgot to ask, how old are you?
If under 16, you will get a smaller portion for half price! \nPlease type in your age!`));
if (age <= 16 ) { 
  alert(`Oh, there we go, a smaller plate for only ${babyPrice}€ !`)}
else { alert(`All in order! A big portion for ${foodPrice} €.`)}

// Step 5 - Order confirmation
if (age <= 16) {
  confirm(`Best ${person}! You have ordered the small ${foodTypeConfirm} ${foodOrder} for only ${babyPrice}. Is this correct?`)
}
if (age > 16) {
  confirm(`Best ${person}! You have ordered a ${foodTypeConfirm} ${foodOrder} for ${foodPrice}. Is this correct?`)
}
if (confirm == true){alert(`Fantastic! Your meal is being prepared!`)}
else {alert(`So sorry we got I wrong, please try again!`)}

