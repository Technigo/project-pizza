// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const username = prompt(`What's your name?`);
alert(`Welcome ${username}! Happy having you here.`)

// Step 2 - Food choice
// Your code goes here
const foodChoice = parseInt( 
  prompt(`What is your order?
  Enter a number:
  1 – Pizza
  2 – Pasta
  3 – Salad`)
);

let foodType = "";
if (foodChoice === 1) {foodType = `Pizza`;}
else if (foodChoice === 2) {foodType = `Pasta`;}
else if (foodChoice === 3) {foodType = `Salad`;}
else {alert (`Please select one of the three numbers.`);
Process.exit(1);
}

alert(`You have chosen ${foodChoice}! It's a classic choice.`);
// Step 3 - Subtype choice
// Your code goes here
let subtypeChoice = 0;
if (foodChoice === 1) {subtypeChoice = parseInt(
  prompt(`Select from the following ${foodType} types. 
  Enter a number:
  1 – Napolitana
  2 – Funghi
  3 – Pepperoni`)
  );
} else if (foodChoice === 2) {subtypeChoice = parseInt(
  prompt(`Select from the following ${foodType} types.
  Enter a number:
  1 – Spaghetti Carbonara
  2 – Fettuccine Alfredo
  3 – Fiocchi Di Pera`)
);
} else if (foodChoice === 3) {subtypeChoice = parseInt(
  prompt(`Select a ${foodType} type.
  Enter a number:
  1 – Ceaser Salad
  2 – Chef Salad
  3 – Caprese Salad`)
);
} else {
  alert(`We only offer these three options. Please visit again.`);
  Process.exit(1);
}

let subtype = "";
if (foodType === `Pizza`) {
  if (subtypeChoice === 1) {subtype = 'Pizza Napolitana';}
  else if (subtypeChoice === 2) {subtype = `Pizza Funghi`;}
  else if (subtypeChoice === 3) {subtype = `Pizza Pepperoni`;}
  else {
    alert(`We do not offer this type of pizza. Sorry.`);
    Process.exit(1);
  }
}

else if (foodType === `Pasta`) {
  if (subtypeChoice === 1) {subtype = `Spaghetti Carbonara`;}
  else if (subtypeChoice === 2) {subtype = `Fettuccine Alfredo`;}
  else if (subtypeChoice === 3) {subtype = `Fiocchi Di Pera`;}
  else {
    alert(`We only serve these three pasta dishes. Sorry.`);
    Process.exit(1);
  }
}

else if (foodType === `Salad`) {
  if (subtypeChoice === 1) {subtype = `Ceaser Salad`};
}

// Step 4 - Age
// Your code goes here


// Step 5 - Order confirmation
// Your code goes here
