// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start?? - Click 'OK' to begin.`
)
let firstName = prompt("Please enter your first name", "First Name")
let lastName = prompt("Please enter your last name", "Last Name")
alert("Welcome " + firstName + " " + lastName + "!")
//I dont need to devide first and last name in separate strings
// Step 2 - Food choice
// Your code goes here
const options = prompt(`Please select an option you would like to order:
1 - Pizza
2 - Pasta
3 - Salad
4 - Dessert`);
//Variable to store selected foodchoise? 
let selectedOption = "";
//Detmine selected foodchoise based on the users number choise. 
if (options === "1") {
  selectedOption = "Pizza"
  alert("You have chosen pizza")
}
else if (options === "2") {
  selectedOption = "Pasta"
  alert("You have chosen Pasta")
}
else if (options === "3") {
  selectedOption = "Salad"
  alert("You have chosen salad")
}
else if (options === "4") {
  selectedOption = "Dessert"
  alert("You have chosen dessert")
}
else {
  alert("Invalid choise. Please select a valid number");
  process.exit(1);
}//Reminder: check why/if I need process.exit

// Step 3 - Subtype choice
// Your code goes here
// Step 4 - Age
// Your code goes here
// Step 5 - Order confirmation
// Your code goes here