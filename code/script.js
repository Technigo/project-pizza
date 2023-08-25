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

let foodOption = prompt(`What would you like to order?
1 - Pizza 
2 - Pasta 
3 - Salad`); {

  // Alert foodOption answer
  if (foodOption === `1`) {
    alert(`Pizza is a great choice!`);
  } else if (foodOption === `2`) {
    alert(`Amazing! Pasta here is delicious!`);
  } else if (foodOption === `3`) {
    alert(`wow, salad, that is a great choice!`);
  } else {
    alert(`Oh... are you not hungry? 
    Please choose a valid number`);
  }
}

// Step 3 - Subtype choice
//prompt pizzaOption
if (foodOption === `1`) {
  let pizzaOption = prompt(`Which Pizza would you like to order?
  1 - Pizza Bianca 
  2 - Pizza con pomodorini 
  3 - Quattro Stagioni`);

  // Alert pizzaOption answer
  if (pizzaOption === `1`) {
    foodOptionText = `Pizza Bianca`
    alert(`You have choosen Pizza Bianca, amazing!`);
  } else if (pizzaOption === `2`) {
    foodOptionText = `Pizza con Pomodorini`
    alert(`You have choosen Pizza con Pomodorini, amazing!`);
  } else if (pizzaOption === `3`) {
    foodOptionText = "Quattro Stagioni"
    alert(`You have choosen Quattro Stagioni, amazing!`);
  } else {
    alert(`Not hungry? Please choose a valid number`);
  }

  //prompt pastaOption
} else if (foodOption === `2`) {
  let pastaOption = prompt(`Which pasta would you like to order? 
  1 - Pasta Alio e Olio 
  2 - Pasta con Pomodorini 
  3 - Pasta allo Scoglio`);

  // Alert pastaOption answer
  if (pastaOption === `1`) {
    foodOptionText = `Pasta Alio e Olio`
    alert(`You have choosen Pasta Alio e Olio, amazing!`);
  } else if (pastaOption === `2`) {
    foodOptionText = `Pasta con Pomodorini`
    alert(`You have choosen Pasta con Pomodorini, amazing!`);
  } else if (pastaOption === `3`) {
    foodOptionText = `Pasta allo Scoglio`
    alert(`You have choosen Pasta allo Scoglio, amazing!`);
  } else {
    alert(`Not hungry? Please choose a valid number`);
  }
  //prompt saladOption
} else if (foodOption === `3`) {
  let saladOption = prompt(`Which salad would you like to order? 
  1 - Tuna Salad 
  2 - Broccoli Salad 
  3 - Fruit Salad`);

  // Alert saladOption answer
  if (saladOption === `1`) {
    foodOptionText = `Tuna Salad`
    alert(`You have choosen Tuna Salad, amazing!`);
  } else if (saladOption === `2`) {
    foodOptionText = `Broccoli Salad`
    alert(`You have choosen Broccoli Salad, amazing!`);
  } else if (saladOption === `3`) {
    foodOptionText = `Fruit Salad`
    alert(`You have choosen Fruit Salad, amazing!`);
  } else {
    alert(`Not hungry? Please choose a valid number`);
  }
}

// Step 4 - Age
let ageOption = prompt(`How old are you?`);

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
That will be 15€. Are you sure you want to proceed with your order? 
Enter a number to confirm: 
  1 - Yes 
  2 - No`);

  // Alert confirmation answer
  if (confirmation === `1`) {
    alert(`Thank you for your order, this is you confirmation. Enjoy your ${foodOptionText}!`);
  } else if (confirmation === `2`) {
    alert(`Are you not hungry anymore? 
  refresh the page to start over if you are. Otherwise, hope to see you next time!`)
  } else {
    alert(`Please choose a valid number`);
  }

}
//Prompt confirmation if less than 18
else {
  let confirmation = prompt(`One ${foodOptionText} will be prepared for you.
That will be 10€. Are you sure you want to proceed with your order?
Enter a number to confirm:
   1 - Yes
   2 - No`);

  // Alert confirmation answer
  if (confirmation === `1`) {
    alert(`Thank you for your order, this is you confirmation. Enjoy your ${foodOptionText}!`);
  } else if (confirmation === `2`) {
    alert(`Are you not hungry anymore? 
  refresh the page to start over if you are. Otherwise, hope to see you next time!`)
  } else {
    alert(`Please choose a valid number`);
  }
}
// End
