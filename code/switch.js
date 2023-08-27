// Step 1 - Welcome and introduction

alert(
    `Welcome to our Javascript Pizzeria. \nReady to Start? - Click 'OK' to begin.`
  )
  let person = prompt(`What's your name? :) `, `Write it here!`);
  
  if (person !== null && person !== `Write it here!` ) {
    alert(`Hi ${person}! Hope you're hungry to order!`);
  } 
  else { 
    alert(`No name, no worries. Let's continue!`)
  } 
  
// Step 2 - Food choice
  
let foodTypeSelected
const foodType = prompt(`Can I take your order?
Choose from today's menu!
1. Pizza
2. Pasta
3. Salad`,
`Please enter the number of your dish`); 
  
switch (foodType) {
    case "1": 
        foodTypeSelected = "Pizza";
        break;
    case "2": 
        foodTypeSelected = "Pasta";
        break;
    case "3": 
        foodTypeSelected = "Salad";
        break;
    default:
        alert("Sorry, we did not catch that. Please type a number.");
        process.exit(1);
}

alert(`You have chosen ${foodTypeConfirm}. Click ok to see the menu.`);
  
// Step 3 - Subtype choice
  
//PRESENTING THE MENU FOR EACH FOODTYPE

let pizzaType
let pastaType
let saladType

switch (foodTypeSelected) {
    case "Pizza":
        pizzaType = prompt(`Great! We have these to choose from:
        1. Margherita 11€
        2. Verdure    12€
        3. Surprise   14€`
        );
        break;
    case "Pasta":
        pastaType = prompt(`Great! We have these to choose from:
        1. Arrabbiata   12€
        2. Casio e Pepe 10€
        3. Alfredo      9€`
        );
        break;
    case "Salad":
        saladType = prompt(`Great! We have these to choose from:
        1. Panzanella   6€
        2. Caprese      7€
        3. Giardiniera  8€`
        );
        break;
    default: alert(`Sorry, we did not catch that. Type a number.`);
            process.exit(1);
}
//VALUES FOR EACH FOOD TYPE

let foodPrice
let foodOrder

switch (foodTypeSelected) {
    case "Pizza":
        switch (pizzaType){
            case "1":
                foodOrder = "Margherita";
                foodPrice = 11;
                break;
            case "2":
                foodOrder = "Verdure";
                foodPrice = 12;
                break;
            case "3":
                foodOrder = "Surprise";
                foodPrice = 14;
                break;
            default: alert("Invalid choice. Refresh and try again.");
            break;
        }
        break;
    case "Pasta":
        switch (pastaType){
            case "1":
                foodOrder = "Arrabbiata";
                foodPrice = 12;
                break;
            case "2":
                foodOrder = "Casio e Pepe";
                foodPrice = 10;
                break;
            case "3":
                foodOrder = "Alfredo";
                foodPrice = 9;
                break;
            default: alert("Invalid choice. Refresh and try again.");
            break;
        }
        break;
    case "Salad":
        switch (saladType){
            case "1":
                foodOrder = "Panzanella";
                foodPrice = 6;
                break;
            case "2":
                foodOrder = "Caprese";
                foodPrice = 7;
                break;
            case "3":
                foodOrder = "Giardiniera";
                foodPrice = 8;
                break;
            default: alert("Invalid choice. Refresh and try again.");
                process.exit(1);
        }
        break;
            
}
// ANSWER USER
alert(`You have ordered the ${foodOrder}! That'll be ${foodPrice} €, thank you!`)

//REST OF THE CODE IS SAME AS IN SCRIPT.JS !

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
    orderConfirmation = prompt(`Best ${person}! You have ordered the small ${foodTypeConfirm} ${foodOrder} for only ${babyPrice}. Is this correct? Enter 1.`)
  } 
  else if (age > 16) {
    orderConfirmation = prompt(`Best ${person}! You have ordered a ${foodTypeConfirm} ${foodOrder} for ${foodPrice}. Is this correct? Enter 1`)
  } 
  else {alert(`So sorry we got I wrong, please try again!`)
  }
  
  
  if (orderConfirmation == "1"){alert(`Fantastic! Your meal is being prepared!`)
}
  else {alert(`So sorry we got I wrong, please try again!`)
}
  