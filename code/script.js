// Step 1 - Welcome and introduction
// Ordering process starts
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Asking for the customer name and storing it in a variable
const customerName = prompt(
  `First and foremost, what is you name?`
)

// Step 2 - Food choice
// The saved customer name is shown along with the three pizzakinds, promting the customer to choose one number
const foodType = prompt(
  `Happy to see you here ${customerName}!
  \nWhat do you feel like eating today? Choose a number.
  \n1. Pizza
  \n2. Pasta
  \n3. Salad`
)

// Step 3 - Subtype choice
// Defines a variable namned "choice", which save the chosen foodtype. 
let choice
let pizzaType
let pastaType
let saladType
let subtypeChoice

if (foodType == 1) {
  choice = "Pizza"
  pizzaType = prompt(`You chose ${choice}, yummy in my tummy!
  \nWhat kind of pizza do you want? Choose a number.
  \n1. Quattro Formaggio
  \n2. Margherita
  \n3. Swedish Kebab`
  ); if (pizzaType == 1) {
    subtypeChoice = "Quattro Formaggio"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  } else if (pizzaType == 2) {
    subtypeChoice = "Margherita"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  } else if (pizzaType == 3) {
    subtypeChoice = "Swedish Kebab"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  };

} else if (foodType == 2) {
  choice = "Pasta"
  pastaType = prompt(`You chose ${choice}, always a good choice!
  \nWhat kind of pasta do you want? Choose a number.
  \n1. Truffle
  \n2. Bolognese
  \n3. Cheesey Deluxe`
  ); if (pastaType == 1) {
    subtypeChoice = "Truffle"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  } else if (pastaType == 2) {
    subtypeChoice = "Bolognese"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  } else if (pastaType == 3) {
    subtypeChoice = "Cheesey Deluxe"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  };

} else if (foodType == 3) {
  choice = "Salad"
  saladType = prompt(`You chose ${choice}, let's make it a good day!
  \nWhat kind of pasta do you want? Choose a number.
  \n1. Ceasar
  \n2. Goat Cheese
  \n3. Vegan`
  ); if (saladType == 1) {
    subtypeChoice = "Ceasar"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  } else if (saladType == 2) {
    subtypeChoice = "Goat Cheese"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  } else if (saladType == 3) {
    subtypeChoice = "Vegan"
    alert(`A ${subtypeChoice} ${choice} coming up!`)
  };

} else {
  alert("Please try again")
}


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
