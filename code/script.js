// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Step 2 - Food choice
// Your code goes here

const nameCustomer = prompt(`Please enter your name:`);
alert(`Nice to meet you, ${nameCustomer}!`);

const foodType = prompt(`${nameCustomer}, what type of food would you like to order?
Enter a number:
1 - Pizza 
2 - Pasta 
3 - Salad`);

// Step 3 - Subtype choice
// Your code goes here
let foodName
if (foodType === '1') {
  foodName = "Pizza";
} else if (foodType === '2') {
  foodName = "Pasta";
} else if(foodType === '3') {
  foodName = "Salad";
} else {
  alert('Please fill in a valid number 1-3.');
}

alert(`${nameCustomer},you've chosen ${foodName}!`);
// how to not show this if input is invalid?
// invalid input like letters, symbols and then come back to choose foodtype again?

// 1 and 2 need to be with '' or "".
// "=== but not just "="

const pizzaItem = {
  "1": "Napolitana",
  "2": "Hawaian",
  "3": "Pepperoni"
}

const pastaItem = {
  "1": "Fettuccine", 
  "2": "Pappardelle ",
  "3": "Macaroni"
}

const saladItem = {
  "1": "Caesar salad", 
  "2": "Greek salad",
  "3": "Fottoush"
}

let finalOrder
switch (foodName) {
  case 'Pizza':
    finalOrder = prompt(`Select a pizza type,
    Enter a number: 
    1 - ${pizzaItem["1"]} 
    2 - ${pizzaItem["2"]}
    3 - ${pizzaItem["3"]}`);
    break;
  case 'Pasta':
    finalOrder = prompt(`Select a pasta type,
    Enter a number: 
    1 - ${pastaItem["1"]} 
    2 - ${pastaItem["2"]}
    3 - ${pastaItem["3"]}`);
    break;
  case 'Salad':
    finalOrder = prompt(`Select a salad type,
    Enter a number:
    1 - ${saladItem["1"]}
    2 - ${saladItem["2"]}
    3 - ${saladItem["3"]} `);
    break;
  default:
    alert('Please fill in a valid number 1-3');
    //Why cannot use console.log? and write a custome name in console.log?
    // invalid input like letters, symbols?
}

finalOrder = parseInt(finalOrder);

let selectOrder; 
switch (foodName){
  case 'Pizza':
    selectOrder = pizzaItem[finalOrder];
    break;
  case 'Pasta':
    selectOrder = pastaItem[finalOrder];
    break;
  case 'Salad':
    selectOrder = saladItem[finalOrder];
    break;
} 

alert(`Nice ${nameCustomer}! You've chosen ${selectOrder}!`);


// Step 4 - Age
// Your code goes here

let kidPrice = {
  "Napolitana": "3 euro",
  "Hawaian": "2.5 euro",
  "Pepperoni": "3 euro",
  "Fettuccine": "3 euro",
  "Pappardelle": "3.5 euro",
  "Macaroni": "4 euro",
  "Caesar salad": "2.5 euro",
  "Greek salad": "3 euro",
  "Fottoush": "3.5 euro"
};

let adultPrice = {
  "Napolitana": "9 euro",
  "Hawaian": "8.5 euro",
  "Pepperoni": "9 euro",
  "Fettuccine": "9 euro",
  "Pappardelle": "9.5 euro",
  "Macaroni": "10 euro",
  "Caesar salad": "8.5 euro",
  "Greek salad": "9 euro",
  "Fottoush": "9.5 euro"
};


let customAge = prompt(`Is the ${selectOrder} for a child or an adult? Type your age:`);
customAge = parseInt(customAge);
let orderPrice;
let orderConfirmation;
switch (true){
  case (customAge < 12):
    orderPrice = kidPrice[selectOrder];
    orderConfirmation = prompt(`One child sized ${selectOrder} will be prepared for you. That'll be ${orderPrice}. Are you sure you want to order this?
        Enter a number to confirm:
        1 - Yes
        2 - No`);
  break;
  case (customAge >= 12):
    orderPrice = adultPrice[selectOrder];
    orderConfirmation = prompt(`One adult sized ${selectOrder} will be prepared for you. That'll be ${orderPrice}. Are you sure you want to order this?
        Enter a number to confirm:
        1 - Yes
        2 - No`);
  break;
  case (customAge <= 0 || customAge >= 150 || ""):
    alert('Please fill in a valid age.')
  break;
  }

// invalid input like letters, symbols?

// Step 5 - Order confirmation
// Your code goes here


if (orderConfirmation === "1") {
  alert(`Thank you for your order! Your delicious meal will be prepared. See you soon!`);
} else if (orderConfirmation === "2"){
  alert(`Sorry to see you go, ${nameCustomer}. You are welcome to fresh the page to rebook!`);
} else {
  alert('Please fill in a valid number 1-3.');
}