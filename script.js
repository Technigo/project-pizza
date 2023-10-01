// Start here
const comment = document.getElementById('comment');
// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("Please enter your name:");

if (userName !== null && userName.length != 0 ) {
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  alert(`Nice to meet you, ${userName}`);
} else {
  userName = 'misterious User'
  alert(`Your name will not be added, ${userName}`);
}

// Step 2 - Food choice

let foodChoice;

let foodChoiceInput = prompt(`What type of food would you like to order? Please, enter a number:
  1 - Pizza
  2 - Salad
  3 - Pasta
`);

switch(foodChoiceInput){
  case null:
    alert(`You have pressed 'Cancel'. Please, reload the page to start over.`);
    break;
  case '1':
    foodChoice = 'Pizza';
    alert(`Your choice is ${foodChoice}`);
    break;
  case '2':
    foodChoice = 'Salad';
    alert(`Your choice is ${foodChoice}`);
    break;
  case '3':
    foodChoice = 'Pasta';
    alert(`Your choice is ${foodChoice}`);
    break;
  default: 
    alert(`${foodChoiceInput} is invalid choice. Please, reload the page to start over.`);
    break;
  }

// Step 3 - Subtype choice
let foodTypeChoice;
let price;

if(foodChoice != undefined){
  switch(foodChoice){
    case 'Pizza':
      let pizzaChoiceInput = prompt(`What type of Pizza would you like to order? Please, enter a number:
      1 - Pepperoni
      2 - Napolitana
      3 - Hawaiian
      `);

      switch(pizzaChoiceInput){
        case null:
          alert(`You have pressed 'Cancel'. Please, reload the page to start over.`);
          break;
        case '1':
          foodTypeChoice = 'Pepperoni';
          price = 15;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        case '2':
          foodTypeChoice = 'Napoletana';
          price = 16;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        case '3':
          foodTypeChoice = 'Hawaiian';
          price = 17;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        default: 
          alert(`${pizzaChoiceInput} is invalid choice. Please, reload the page to start over.`);
          break;
        }
      break;
    case 'Pasta':
      let pastaChoiceInput = prompt(`What type of Pasta would you like to order? Please, enter a number:
      1 - Carbonara
      2 - Alfredo
      3 - Amatriciana
      `);
      switch(pastaChoiceInput){
        case null:
          alert(`You have pressed 'Cancel'. Please, reload the page to start over.`);
          break;
        case '1':
          foodTypeChoice = 'Carbonara';
          price = 15;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        case '2':
          foodTypeChoice = 'Alfredo';
          price = 16;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        case '3':
          foodTypeChoice = 'Amatriciana';
          price = 11;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        default: 
          alert(`${pastaChoiceInput} is invalid choice. Please, reload the page to start over.`);
          break;
        }
        break;
    case 'Salad':
      let saladChoiceInput = prompt(`What type of salad would you like to order? Please, enter a number:
      1 - Caesar Salad
      2 - Caprise Salad
      3 - Greek Salad
      `);
      switch(Number(saladChoiceInput)){
        case null:
          alert(`You have pressed 'Cancel'. Please, reload the page to start over.`);
          break;
        case 1:
          foodTypeChoice = 'Caesar';
          price = 10;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        case 2:
          foodTypeChoice = 'Caprise';
          price = 11;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        case 3:
          foodTypeChoice = 'Greek';
          price = 9;
          alert(`Your choice is ${foodTypeChoice}`);
          break;
        default: 
          alert(`${saladChoiceInput} is invalid choice. Please, reload the page to start over.`);
          break;
        }
        break;
    default:
    break;
  }
}

// Step 3 - Age
let portionSize;

if(foodTypeChoice != undefined) {
  let age = prompt('Is this food for a child or an adult? Please, enter your age:')
  age = Number(age);
  if(age === null) {
    alert(`You have pressed 'Cancel'. Please, reload the page to start over.`);
  } else if(isNaN(age)){
    alert(`It is an invalid choice. Please, reload the page to start over.`)
  } else {
    age = age < 15 ? 1 : 2;
    switch(age){
      case 1:
        portionSize = 'for child';
        price /= 2;
        break;
      case 2:
        portionSize = 'for adult';
        break;
      default:
        break;
    }
  }

}

if(portionSize != undefined) {

let confirmation = prompt(`Your order is one ${foodTypeChoice} ${foodChoice} ${portionSize}. The price is $${price}. Please, confirm  your order:
1 - Yes
2 - No`);

switch(confirmation){
  case null:
    alert(`You have pressed 'Cancel'. Please, reload the page to start over.`);
    break;
  case '1':
    alert(`Thank you for your order, ${userName}! ${foodTypeChoice} ${foodChoice} ${portionSize} will be delivered in 30 minutes.`);
    break;
  case '2':
    alert(`Your order is cancelled, ${userName}! $${price} will not be taken from your account..`);
    break;
  default: 
    alert(`${confirmation} is invalid choice. Please, reload the page to start over.`);
    break;
}

}

comment.textContent = `We hope to see you soon, ${userName}!`



