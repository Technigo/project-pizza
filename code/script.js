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



const foodChoice = prompt(`What type of food would you like to order?
Enter a number:
1 - Pizza 
2 - Pasta 
3 - Salad`);


// Step 3 - Subtype choice
// Your code goes here

if (foodChoice === '1') {
  alert(`You've chosen pizza!`);
} else if (foodChoice === '2') {
  alert(`You've chosen pasta!`);
} else {
  alert(`You've chosen salad!`);
} 

// 1 and 2 need to be with ''.
// "=== but not just "="

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
