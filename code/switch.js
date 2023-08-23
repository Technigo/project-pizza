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
let foodOption = prompt(`What would you like to order? 
  1 - Pizza
  2 - Pasta
  3 - Salad`);

switch (foodOption) {
    case `1`:
        alert(`Pizza is a great choise!`);
        break;
    case `2`:
        alert(`Amazing, pasta is a great option!`);
        break;
    case `3`:
        alert(`Wow, salad, so good!`);
        break;
    default:
        alert(`Oh, not hungry? Please choose a valid number`)
}
// Step 3 - Subtype choice
if (foodOption === `1`) {
    let pizzaOption = prompt(`Which Pizza would you like to order?
1 - Pizza Bianca 
2 - Pizza con pomodorini 
3 - Quattro Stagioni`);

    switch (pizzaOption) {
        case `1`:
            alert(`You have choosen Pizza Bianca, amazing!`);
            break;
        case `2`:
            alert(`You have choosen Pizza con Pomodorini, amazing!`);
            break;
        case `3`: (`You have choosen Quattro Stagioni, amazing!`);
            break;
        default:
            alert(`Please choose a valid number`);
    }
}

if (foodOption === `2`) {
    let pastaOption = prompt(`Which pasta would you like to order? 
1 - Pasta Alio e Olio 
2 - Pasta con Pomodorini 
3 - Pasta allo Scoglio`);

    switch (pastaOption) {
        case `1`:
            alert(`You have choosen Pasta Alio e Olio, amazing!`);
            break;
        case `2`:
            alert(`You have choosen Pasta con Pomodorini, amazing!`);
            break;
        case `3`:
            alert(`You have choosen Pasta allo Scoglio, amazing!`);
            break;
        default:
            alert(`Please choose a valid number`);
    }
}
if (foodOption === `3`) {

    let saladOption = prompt(`Which salad would you like to order? 
  1 - Tuna Salad 
  2 - Broccoli Salad 
  3 - Fruit Salad`);

    switch (saladOption) {

        case `1`:
            alert(`You have choosen Tuna Salad, amazing!`);
            break;
        case `2`:
            alert(`You have choosen Broccoli Salad, amazing!`);
            break;
        case `3`:
            foodOptionText = `Fruit Salad`
            alert(`You have choosen Fruit Salad, amazing!`);
            break;
        default:
            alert(`Please choose a valid number`);
    }
}
// Step 4 - Age
let ageOption = prompt(`How old are you?`);

switch (ageOption) {
    case `ageOption >= 18`:
        alert(`You have ordered a ${foodOption} from the grown ups menu!`);
        break;
    default:
        alert(`you have ordered a ${foodOption} from the childrens menu!`);
}

// Step 5 - Order confirmation

if (ageOption >= 18) {
    let confirmation = prompt(`One ${foodOptionText} will be prepared for you. That will be 15€. Are you sure you want to proceed with your order? 
  Enter a number to confirm: 
  1 - yes 
  2 - no`);

    switch (ageOption) {
        case `1`:
            alert(`Thank you for your order! This is you confirmation.`);
            break;
        case `2`:
            alert(`Are you not hungry anymore? refresh the page to start over. Otherwise, hope to see you next time!`);
            break;
        default:
            alert(`Please choose a valid number`);
    }
}
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

