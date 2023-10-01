// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
customer_name = prompt(`Please enter your name`)

alert(`hi ${customer_name}!, nice to meet you`)
// Step 2 - Food choice
// Your code goes here
food_choice = prompt(`What type of food would you like to order?
  Enter a number:
  1- Pizza
  2- Pasta
  3- Salad`)

if (food_choice == 1) {
  alert(`You have chosed Pizza`)
  food_subchoice = prompt(`Select a pizza type:
  Enter a number:
  1 - Margarita
  2 - Pepperonni
  3 - Hawaian`)
  if(food_subchoice==1){
    alert(`you have choosen Margarita`)
  }
  else if(food_subchoice==2){
    alert(`you have choosen Pepperonni`)
  }
  else if(food_subchoice==3){
    alert(`you have choosen Hawaian`)
  }
  else {
  alert(`Invalid pizza type choice.`)
  }


} else if (food_choice == 2) {
  alert(`You have chosen Pasta`)
  food_subchoice = prompt(`Select a pasta type:
  Enter a number:
  1 - Spaghetti Carbonara
  2 - Fettuccine Alfredo
  3 - Cheesy Tortellini`)


  if(food_subchoice==1){
    alert(`you have choosen Spaghetti Carbonara`)
  }
  else if(food_subchoice==2){
    alert(`you have choosen Fettuccine Alfredo`)
  }
  else if(food_subchoice==3){
    alert(`you have choosen Cheesy Tortellini`)
  }
  else {
  alert(`Invalid pasta type choice.`)
  }



} else if (food_choice == 3) {
  alert(`You have chosen Salad`)
  food_subchoice = prompt(`Select a salad type:
  Enter a number:
  1 - Caesar Salad
  2 - Caprese Salad
  3 - Greek Salad`)


  if(food_subchoice==1){
    alert(`you have choosen Caesar Salad`)
  }
  else if(food_subchoice==2){
    alert(`you have choosen Caprese Salad`)
  }
  else if(food_subchoice==3){
    alert(`you have choosen Greek Salad`)
  }
  else {
  alert(`Invalid salad type choice.`)
  }


} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`)
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
