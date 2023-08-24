// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)
  let messageName=prompt(`What is your name?`);
  alert(`Welcome ${messageName}! Let's look at the menu!`);

// Step 2 - Food choice
// Your code goes here
let foodChoice=prompt(`What would you like today: 
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
let mealChoice="";
switch (selectedFood) 
{case "Pizza":
mealChoice=prompt(`Which pizza do you like to order?
1-Bianco with mozzarella cheese and ham 
2-Tomatobased pizza with mushrooms
3-Sweet nutellapizza with berries
Please enter the number of your choice:`);
mealChoice=["Bianco with mozzarella cheese and ham", "Tomatobased pizza with mushrooms", "Sweet nutellapizza with berries"];
break;
case "Kebab":
mealChoice=prompt(`What kebab-dish do you like to order?
1-Kebab with bread
2-Kebab with pommes frites
3-Kebab of the house
Please enter the number of your choice:`)
mealChoice=["Kebab with bread", "Kebab with pommes frites", "Kebab of the house"];
break;
case "Salad":
mealChoice=prompt(`Which salad do you like to order?
1-Greek salad
2-Ceasar salad
3-Tuna salad
Please enter the number of your choice:`)
mealChoice=prompt["Greek salad", "Ceasar salad", "Tuna salad"]

}
if(mealChoice==="1")
{alert(`Good choice! You've selected ${mealChoice [0]}`);}
else if(mealChoice==="2")
{alert(`Good choice! You've selected ${mealChoice [1]}`);}
else if(mealChoice==="3")
{alert(`Good choice, You've selected ${mealChoice [2]}`);}
else
{alert("Oops, that is an invalid choice, please choose between number 1, 2 or 3");}

// Step 4 - Age
// Your code goes here
let age=prompt(`Please enter your age for current price!`)


// Step 5 - Order confirmation
// Your code goes here
