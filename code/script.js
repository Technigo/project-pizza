// Start here


// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let person = prompt(`Please enter you name`);

if (person != null) {
  alert(`Hello ${person}! that is a really cool name!`);
}

// Step 2 - Food choice
let foodOptionText;

const foodOptions = [`Pizza`, `Pasta`, `Salad`];
const pizzaOptions = [`Pizza Bianca`, `Pizza con Pomodorini`, `Quattro Stagioni`];
const pastaOptions = [`Pasta Alio e Olio`, `Pasta con Pomodorini`, `Pasta allo Scoglio`];
const saladOptions = [`Tuna Salad`, `Broccoli Salad`, `Fruit Salad`];

// Step 2 - Prompt Food choice
let foodOption = prompt(`What would you like to order?
1 - ${foodOptions[0]}
2 - ${foodOptions[1]}
3 - ${foodOptions[2]}`);

// Alert foodOption answer
if (foodOption === `1`) {
  alert(`${foodOptions[0]} is a great choice!`);
} else if (foodOption === `2`) {
  alert(`Amazing! ${foodOptions[1]} here is delicious!`);
} else if (foodOption === `3`) {
  alert(`wow, ${foodOptions[2]}, that is a great choice!`);
} else {
  alert(`Oh...are you not hungry ?
  Please choose a valid number`);
  throw new Error(`Invalid food choise`); //Stops the code from running if invalid
}


// Step 3 - Subtype choice

//prompt pizzaOption
if (foodOption === `1`) {
  let pizzaOption = prompt(`Which Pizza would you like to order ?
  1 - ${pizzaOptions[0]}
  2 - ${pizzaOptions[1]} 
  3 - ${pizzaOptions[2]}`);

  // Alert pizzaOption answer
  if (pizzaOption === `1`) {
    foodOptionText = `Pizza Bianca`
    alert(`You have choosen ${pizzaOptions[0]}, amazing!`);
  } else if (pizzaOption === `2`) {
    foodOptionText = `Pizza con Pomodorini`
    alert(`You have choosen ${pizzaOptions[1]}, amazing!`);
  } else if (pizzaOption === `3`) {
    foodOptionText = "Quattro Stagioni"
    alert(`You have choosen ${pizzaOptions[2]}, amazing!`);
  } else {
    alert(`Not hungry ? Please choose a valid number`);
    throw new Error(`Invalid food choise`); //Stops the code from running if invalid
  }


  //prompt pastaOption
} else if (foodOption === `2`) {
  let pastaOption = prompt(`Which pasta would you like to order ?
  1 - ${pastaOptions[0]} 
  2 - ${pastaOptions[1]}  
  3 - ${pastaOptions[2]} `);

  // Alert pastaOption answer
  if (pastaOption === `1`) {
    foodOptionText = `Pasta Alio e Olio`
    alert(`You have choosen ${pastaOptions[0]}, amazing!`);
  } else if (pastaOption === `2`) {
    foodOptionText = `Pasta con Pomodorini`
    alert(`You have choosen ${pastaOptions[1]}, amazing!`);
  } else if (pastaOption === `3`) {
    foodOptionText = `Pasta allo Scoglio`
    alert(`You have choosen ${pastaOptions[2]}, amazing!`);
  } else {
    alert(`Not hungry ? Please choose a valid number`);
    throw new Error(`Invalid food choise`); //Stops the code from running if invalid
  }
  //prompt saladOption
} else if (foodOption === `3`) {
  let saladOption = prompt(`Which salad would you like to order ?
  1 - ${saladOptions[0]}
  2 - ${saladOptions[1]}
  3 - ${saladOptions[2]}`);

  // Alert saladOption answer
  if (saladOption === `1`) {
    foodOptionText = `Tuna Salad`
    alert(`You have choosen ${saladOptions[0]}, amazing!`);
  } else if (saladOption === `2`) {
    foodOptionText = `Broccoli Salad`
    alert(`You have choosen ${saladOptions[1]}, amazing!`);
  } else if (saladOption === `3`) {
    foodOptionText = `Fruit Salad`
    alert(`You have choosen ${saladOptions[2]}, amazing!`);
  } else {
    alert(`Not hungry ? Please choose a valid number`);
    throw new Error(`Invalid food choise`); //Stops the code from running if invalid
  }
}

// Step 4 - Age
let ageOption = prompt(`How old are you ? `);

// Alert ageOption answer
if (ageOption >= 18) {
  alert(`You have ordered a ${foodOptionText} from the grown ups menu!`);
} else {
  alert(`you have ordered a ${foodOptionText} from the childrens menu!`);
}

// Step 5 - Order confirmation
//Prompt confirmation if bigger or equal than 18
if (ageOption >= 18) {
  let confirmation = prompt(`One ${foodOptionText} will be prepared for you. 
That will be 15€. Are you sure you want to proceed with your order ?
  Enter a number to confirm:
1 - Yes
2 - No`);

  // Alert confirmation answer
  if (confirmation === `1`) {
    alert(`Thank you for your order, this is you confirmation.Enjoy your ${foodOptionText} !`);
  } else if (confirmation === `2`) {
    alert(`Are you not hungry anymore ?
  refresh the page to start over if you are.Otherwise, hope to see you next time!`)
  } else {
    throw new Error(`Invalid food choise`); //Stops the code from running if invalid
  }

}
//Prompt confirmation if less than 18
else {
  let confirmation = prompt(`One ${foodOptionText} will be prepared for you.
That will be 10€. Are you sure you want to proceed with your order ?
  Enter a number to confirm:
1 - Yes
2 - No`);

  // Alert confirmation answer
  if (confirmation === `1`) {
    alert(`Thank you for your order, this is you confirmation.Enjoy your ${foodOptionText} !`);
  } else if (confirmation === `2`) {
    alert(`Are you not hungry anymore ?
  refresh the page to start over if you are.Otherwise, hope to see you next time!`)
  } else {
    alert(`Please choose a valid number`);
    throw new Error(`Invalid food choise`); //Stops the code from running if invalid
  }
}
// End
