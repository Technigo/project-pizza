// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)
  const messageName=prompt(`What is your name?`);
  alert(`Welcome ${messageName}! Let's look at the menu!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice=prompt(`What would you like today: 
1-Pizza
2-Kebab
3-Salad
Please enter the number of your choice`);

let selectedFood=""

if(foodChoice==="1")
{selectedFood="Pizza";}

else if(foodChoice==="2")
{selectedFood="Kebab";}

else if(foodChoice==="3")
{selectedFood="Salad";}

else 
{alert ("Oops, that is an invalid choiche, please select number 1, 2 or 3");}

alert(`You have good taste! You've chosen ${selectedFood}!`);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
