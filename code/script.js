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

if (foodOption === `1`) {
  let pizzaOption = prompt(`Which Pizza would you like to order?
  1 - Pizza Bianca 
  2 - Pizza con pomodorini 
  3 - Quattro Stagioni`);
  foodOptionText = `Pizza Bianca`
  if (pizzaOption === `1`) {
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
} else if (foodOption === `2`) {
  let pastaOption = prompt(`Which pasta would you like to order? 
  1 - Pasta Alio e Olio 
  2 - Pasta con Pomodorini 
  3 - Pasta allo Scoglio`);
  if (pastaOption === `1`) {
    foodOptionText = `Pasta Alio e Olio`
    alert(`You have choosen Pasta Alio e Olio, amazing!`);
  } else if (pastaOption === `2`) {
    foodOptionText = `Pasta con Pomodorini`
    alert(`You have choosen Pasta con Pomodorini, amazing!`);
  } else if (pastaOption === `1`) {
    foodOptionText = `Pasta allo Scoglio`
    alert(`You have choosen Pasta allo Scoglio, amazing!`);
  } else {
    alert(`Not hungry? Please choose a valid number`);
  }

} else if (foodOption === `3`) {
  let saladOption = prompt(`Which salad would you like to order? 
  1 - Tuna Salad 
  2 - Broccoli Salad 
  3 - Fruit Salad`);
  foodOptionText = `Tuna Salad`
  if (saladOption === `1`) {
    alert(`You have choosen Tuna Salad, amazing!`);
    foodOptionText = `Broccoli Salad`
  } if (saladOption === `2`) {
    alert(`You have choosen Broccoli Salad, amazing!`);
  } if (saladOption === `3`) {
    foodOptionText = `Fruit Salad`
    alert(`You have choosen Fruit Salad, amazing!`);
  } else {
    alert(`Not hungry? Please choose a valid number`);
  }
}

// Step 4 - Age
let ageOption = prompt(`How old are you?`);

if (ageOption >= 18) {
  alert(`You have ordered a ${foodOptionText} from the grown ups menu!`);
} else {
  alert(`you have ordered a ${foodOptionText} from the childrens menu!`);
}

// Step 5 - Order confirmation

if (ageOption >= 18) {
  let confirmation = prompt(`One ${foodOptionText} will be prepared for you. That will be 15€. Are you sure you want to proceed with your order? 
  Enter a number to confirm: 
  1 - yes 
  2 - no`);
  if (confirmation === `1`) {
    alert(`Thank you for your order! This is you confirmation.`);
  } else if (confirmation === `2`) {
    alert(`Are you not hungry anymore? refresh the page to start over. Otherwise, hope to see you next time!`)
  } else {
    alert(`Please choose a valid number`);
  }
} else {
  let confirmation = prompt(`One ${foodOptionText} will be prepared for you. That will be 10€. Are you sure you want to proceed with your order?
  Enter a number to confirm:
   1 - yes
   2 - no`);
  if (confirmation === `1`) {
    alert(`Thank you for your order! This is you confirmation.`);
  } else if (confirmation === `2`) {
    alert(`Are you not hungry anymore? refresh the page to start over. Otherwise, hope to see you next time!`)
  } else {
    alert(`Please choose a valid number`);
  }
}

