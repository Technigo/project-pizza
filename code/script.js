// Start here

// Step 1 - Welcome and introduction
alert('Welcome to our Javascript Pizzeria. Ready to Start? - Click "OK" to begin.');

// Here I ask of the name of the user and greet them
const userName = prompt('Please enter your name:');
alert('Hi ' + userName + ' !');

// Step 2 - Food choice
// Here I ask the costumer to chose a dish to order
const foodChoice = prompt(`Please enter the number of the food that you would like to order:
  1 - Pizza
  2 - Pasta
  3 - Salad`);

// Here I make sure that the dish variable is a string
let dish = ''

// Then I store the food of their choice in the variable dish
if (foodChoice === '1') {dish = 'Pizza';}
else if (foodChoice === '2') {dish = 'Pasta';} 
else if (foodChoice === '3') {dish = 'Salad';}
else {alert('Wrong number, please start over again and select a dish with the right corresponding number of the dish of your choice');
      exit(1);
}

// Here I tell them what food they have ordered
alert('You gave ordered ' + dish + '!');

// Step 3 - Subtype choice
// First I make sure that the users input and our subtype is a string so it matches my code
let subypes = '';
let subtype = '';

// Then I have made a Switch statement with a nested if-else statement to alert the users of the right choice. I could have made an if-else statement with another if-else statement nested in that one but it would be more confusing for me to see what I am doing
switch (dish) {
  case 'Pizza':
    subtypes = prompt(
      `Here are our types of pizza:
      1 - Hawaii
      2 - Margherita
      3 - Pepperoni
      Please enter the number of your choice`);
    if (subtypes === '1') {
      subtype = 'Hawaii';
      alert('You have chosen Hawaii!');}
    else if (subtypes === '2') {
      subtype = 'Margherita';
      alert('You have chosen Margherita!');}
    else if (subtypes === '3') {
      subtype = 'Pepperoni';
      alert('You have chosen Pepperoni!');}
    else {alert('Error. Please start over again.');}
    break;

  case 'Pasta':
    subtypes = prompt(`Here are our types of pasta:
      1 - Lasagne
      2 - Carbonara
      3 - Bolognaise
      Please enter the number of your choice:`);
    if (subtypes === '1') {
      subtype = 'Lasagne';
      alert('You have chosen Lasagne!');}
    else if (subtypes === '2') {
      subtype = 'Carbonara';
      alert('You have chosen Carbonara!');}
    else if (subtypes === '3') {
      subtype = 'Bolagnaise';
      alert('You have chosen Bolagnaise!');}
    else {alert('Error. Please start over again.');}
    break;

  case 'Salad':
    subtypes = prompt(`Here are our types of pasta:
    1 - Avocado Salad
    2 - Greek Salad
    3 - Caesar Salad
    Please enter the number of your choice:`);
    if (subtypes === '1') {
      subtype = 'Avocado Salad';
      alert('You have chosen Avocado Salad!');}
    else if (subtypes === '2') {
      subtype = 'Greek Salad';
      alert('You have chosen Greek Salad!');}
    else if (subtypes === '3') {
      subtype = 'Caesar Salad';
      alert('You have chosen Caesar Salad!');}
    else {alert('Error. Please start over again.');}
    break;

  default:
    alert('Wrong choice. Please start over again.');
    exit(1);
}

// Step 4 - Age
// I create a variable sizeOfFood that contains a string
let sizeOfFood = ''

// We ask for their age
age = prompt('Type your age so we can determine if the food is for an adult or a child. Age:');

// Now we determine if they're an adult or a child and to match the size of their food
if (age >=18) {
  sizeOfFood = 'adult';
  alert('You are an adult');}
else if (0 < age < 18) {
  sizeOfFood = 'child';
  alert('You are a child');}
else {
  alert('You have typed in the wrong age. Please reload the page.');
  exit(1);
}

// Step 5 - Order confirmation
// I will ask them if they want to go through with their order
const order = prompt('One ' + sizeOfFood + 'sized ' + subtype + ' will be prepared now. That will be 10 dollars. Do you want to go through with your order? Type "1" to go through with your order and "2" to cancel it');

// Here I either welcome them back for another time or thank them for their order.
if (order === '1') {alert('Thank you for your order! You can pick it up soon!');}
else if (order === '2') {alert('You have cancelled your order. Hope to see you next time!');}
else {alert('Error! Start over again');
     exit(1);}
