// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let username = prompt("What's your name?");

if (username != null) {
  alert("Welcome " + username + "!")
  };


// Step 2 - Food choice
// I found out that using parseInt is super handy with this as the user's inputs are numbers.
// During this section I also learned that using backticks is essential to make a line break within the strings.

let foodChoice = parseInt(prompt(
  `What would you like to eat today? Choose a number
  1 - Pizza
  2 - Pasta
  3 - Salad`
));

if (foodChoice === 1) {
  alert(`You have chosen Pizza. Good choice!`);
} else if (foodChoice === 2) {
  alert(`You have chosen Pasta. Good choice!`);
} else if (foodChoice === 3) {
  alert(`You have chosen Salad. Good choice!`);
} else {
  alert(`Please choose a number between 1-3 to continue.`);
}



// Step 3 - Subtype choice

let subtypeChoice;

if (foodChoice === 1) {
  subtypeChoice = parseInt(prompt(`What kind of Pizza would you like today? 
  1 - Margherita 
  2 - Veggie Pizza 
  3 - White Pizza`
  ));
  if (subtypeChoice === 1) {
    alert(`You have chosen Margherita.`);
  } else if (subtypeChoice === 2) {
    alert(`You have chosen Veggie Pizza.`);
  } else if (subtypeChoice === 3) {
    alert(`You have chosen White Pizza.`);
  } else {
    alert(`Please choose a number between 1-3 to continue.`);
  }

} else if (foodChoice === 2) {
  subtypeChoice = parseInt(prompt(`What kind of Pasta would you like today? 
  1 - Tomato pasta
  2 - Pasta all'Ortollana
  3 - Cheese pasta`
  ));
  if (subtypeChoice === 1) {
  alert(`You have chosen Tomato pasta.`);
  } else if (subtypeChoice === 2) {
  alert(`You have chosen Pasta all'Ortollana.`);
  } else if (subtypeChoice === 3) {
  alert(`You have chosen Cheese pasta.`);
  } else {
  alert(`Please choose a number between 1-3 to continue.`);
  }

} else if (foodChoice === 3) {
  subtypeChoice = parseInt(prompt(`What kind of Salad would you like today?
  1 - Caesar salad
  2 - Mediterranean salad
  3 - Tofu salad`
  ));
  if (subtypeChoice === 1) {
  alert(`You have chosen Caesar salad.`);
  } else if (subtypeChoice === 2) {
    alert(`You have chosen Mediterranean salad.`);
  } else if (subtypeChoice === 3) {
    alert(`You have chosen Tofu salad.`);
  } else {
    alert(`Please choose a number between 1-3 to continue.`);
  }

} else {
  alert(`Please choose a number between 1-3 to continue.`);
}

// Step 4 - Age

let age = parseInt(prompt(`Are you ordering for an adult or a child?
Please enter your age to continue.`));

// For a while couldn't wrap my head around why the program displays the adult-size message even though I typed an age below 16.
// Turns out it was because I had this >= the wrong way like this => and that was the issue.

let price;
if (age >= 16) {
  alert(`You have chosen adult-size portion. The total cost of your order is 15€.`);
} else if (age < 16) {
  alert(`You have chosen child-size portion. The total cost of your order is 10€.`);
} else {
  alert(`Please enter your age to continue.`);
}


// Step 5 - Order confirmation
// I realise part of the confirmation was advised in Step 4 but I decided to put all the confirmation stuff here.

let orderConfirmation = parseInt(prompt(`Would you like to confirm your order?
1 - Yes
2 - No`));
if (orderConfirmation === 1) {
  alert(`Thank you for your order! We will start preparing your meal right away.`);
} else if (orderConfirmation === 2) {
  alert(`Not hungry after all? See you another time!`);
} else {
  alert(`Please enter 1 or 2 to continue.`);
}
