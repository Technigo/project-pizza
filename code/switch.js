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