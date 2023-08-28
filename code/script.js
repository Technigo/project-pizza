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
let mealChoice=0;
let mealOption=[];
switch (selectedFood) 
{case "Pizza":
mealChoice=parseInt (prompt(`Which pizza do you like to order?
1-Bianco with mozzarella cheese and ham 
2-Tomatobased pizza with mushrooms
3-Sweet nutellapizza with berries
Please enter the number of your choice:`));
mealOption=["Bianco with mozzarella cheese and ham", "Tomatobased pizza with mushrooms", "Sweet nutellapizza with berries"];
break;
case "Kebab":
mealChoice=parseInt (prompt(`What kebab-dish do you like to order?
1-Kebab with bread
2-Kebab with pommes frites
3-Kebab of the house
Please enter the number of your choice:`))
mealOption=["Kebab with bread", "Kebab with pommes frites", "Kebab of the house"];
break;
case "Salad":
mealChoice=parseInt (prompt(`Which salad do you like to order?
1-Greek salad
2-Ceasar salad
3-Tuna salad
Please enter the number of your choice:`))
mealOption=["Greek salad", "Ceasar salad", "Tuna salad"];
break;
  default:
    alert("Invalid choice for meal subtype.");
}


if(mealChoice===1){alert(`Good choice! You've selected ${mealOption[mealChoice - 1]}`);}

else if(mealChoice===2) {alert(`Good choice! You've selected ${mealOption[mealChoice - 1]}`);}

else if(mealChoice===3) {alert(`Good choice, You've selected ${mealOption[mealChoice - 1]}`);}

else {alert("Oops, that is an invalid choice, please choose between number 1, 2 or 3");}


// Step 4 - Age
// Your code goes here
let age=prompt(`Please enter your age for current price!`)
if(age>=18)
{alert `You pay adult price, that will be 17€!`}
else 
{alert `You pay reduced price for kidz and teenager, that will be 12€!`}


// Step 5 - Order confirmation
// Your code goes here
let confirmation=prompt(`Do you want to order? Please type 1 to order or 2 to cancel order.`)
if(confirmation==="1" && age>=18)
{alert (`Your order is confirmed! You have ordered ${mealOption[mealChoice - 1]}, that will be 17€!`)}
else if (confirmation==="1" && age<18) 
{alert (`Your order is confirmed! You have ordered ${mealOption[mealChoice - 1]}, that will be 12€!`)}
else 
{alert `Your order is canceled, welcome back another time`}