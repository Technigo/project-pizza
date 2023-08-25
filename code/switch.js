// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let person = prompt(`Please enter you name`);
let enterName = true;

switch (enterName) {
    case person != null && enterName:
        alert(`Hello ${person}! that is a really cool name!`);

}

// Step 2 - Food choice

let foodOptionText;

let foodOption = prompt(`What would you like to order? 
  1 - Pizza
  2 - Pasta
  3 - Salad`);

// Alert foodOption answer
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
        alert(`Oh, not hungry? Please choose a valid number`);
        throw new Error(`Invalid choise`);
}

// Step 3 - Subtype choice
//prompt pizzaOption
switch (foodOption) {
    case `1`:
        let pizzaOption = prompt(`Which Pizza would you like to order?
     1 - Pizza Bianca 
     2 - Pizza con pomodorini 
     3 - Quattro Stagioni`);

        // Alert pizzaOption answer
        switch (pizzaOption) {
            case `1`:
                foodOptionText = `Pizza Bianca`
                alert(`You have choosen Pizza Bianca, amazing!`);
                break;
            case `2`:
                foodOptionText = `Pizza con Pomodorini`
                alert(`You have choosen Pizza con Pomodorini, amazing!`);
                break;
            case `3`:
                foodOptionText = `Quattro Stagioni`
                alert(`You have choosen Quattro Stagioni, amazing!`);
                break;
            default:
                alert(`Please choose a valid number`);
                throw new Error(`Invalid choise`);
        }
        break;
    //prompt pastaOption
    case `2`:
        let pastaOption = prompt(`Which pasta would you like to order? 
    1 - Pasta Alio e Olio 
    2 - Pasta con Pomodorini 
    3 - Pasta allo Scoglio`);

        // Alert pastaOption answer
        switch (pastaOption) {
            case `1`:
                foodOptionText = `Pasta Alio e Olio`
                alert(`You have choosen Pasta Alio e Olio, amazing!`);
                break;
            case `2`:
                foodOptionText = `Pasta con Pomodorini`
                alert(`You have choosen Pasta con Pomodorini, amazing!`);
                break;
            case `3`:
                foodOptionText = `Pasta allo Scoglio`
                alert(`You have choosen Pasta allo Scoglio, amazing!`);
                break;
            default:
                alert(`Please choose a valid number`);
                throw new Error(`Invalid choise`);
        }
        break;
    //prompt saladOption
    case `3`:
        let saladOption = prompt(`Which salad would you like to order? 
    1 - Tuna Salad 
    2 - Broccoli Salad 
    3 - Fruit Salad`);

        // Alert saladOption answer
        switch (saladOption) {
            case `1`:
                foodOptionText = `Tuna Salad`
                alert(`You have choosen Tuna Salad, amazing!`);
                break;
            case `2`:
                foodOptionText = `Broccoli Salad`
                alert(`You have choosen Broccoli Salad, amazing!`);
                break;
            case `3`:
                foodOptionText = `Fruit Salad`
                alert(`You have choosen Fruit Salad, amazing!`);
                break;
            default:
                alert(`Please choose a valid number`);
                throw new Error(`Invalid choise`);
        }
}

// Step 4 - Age

let ageOption = prompt(`How old are you?`);

// Alert ageOption answer
switch (true) {
    case ageOption >= 18:
        alert(`You have ordered a ${foodOptionText} from the grown ups menu!`);
        break;
    default:
        alert(`you have ordered a ${foodOptionText} from the childrens menu!`);
}

// Step 5 - Order confirmation
//Prompt confirmation if bigger or equal than 18
switch (true) {
    case ageOption >= 18:
        let confirmAdult = prompt(`One ${foodOptionText} will be prepared for you. That will be 15€. Are you sure you want to proceed with your order? 
    Enter a number to confirm: 
    1 - Yes 
    2 - No`);

        // Alert confirmation answer
        switch (confirmAdult) {
            case `1`:
                alert(`Thank you for your order, this is you confirmation. Enjoy your ${foodOptionText}!`);
                break;
            case `2`:
                alert(`Are you not hungry anymore? 
                refresh the page to start over if you are.
                Otherwise, hope to see you next time!`)
                break;
            default:
                alert(`Please choose a valid number`);
                throw new Error(`Invalid choise`);
        }
        break;
    //Prompt confirmation if less than 18
    default:
        let confirmChild = prompt(`One ${foodOptionText} will be prepared for you. That will be 10€. Are you sure you want to proceed with your order?
    Enter a number to confirm:
    1 - Yes
    2 - No`);

        // Alert confirmation answer
        switch (confirmChild) {
            case `1`:
                alert(`Thank you for your order, this is you confirmation. Enjoy your ${foodOptionText}!`);
                break;
            case `2`:
                alert(`Are you not hungry anymore? 
                refresh the page to start over if you are. Otherwise, hope to see you next time!`)
                break;
            default:
                alert(`Please choose a valid number`);
                throw new Error(`Invalid choise`);
        }
}
// End
