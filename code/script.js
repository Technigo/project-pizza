// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`

)


let userName = prompt("Enter your name here")
let chosenName = userName;
alert ("Hello" + " " + chosenName + "!")

// Step 2 - Food choice
// Your code goes here

let choice = prompt (`What food are we getting today? 
Please choose 1 for Pizza,
 2 for Pasta
  and 3 for Salad` )
if (choice === 1){
  alert ("Pizza")
} else if (choice === 2) {
  alert ("Salad")
} else if (choice == 3) {
alert ("Pasta")
} else if (choice >=4) {
  alert ("Reload the page to continue ordering")}


switch (choice){
  case "1":
    alert("You chose pizza");
    break;
    case "2":
      alert("You chose Salad");
      break;
      case "3":
        alert("You chose Pasta");
        break;
        default:
          alert("Invalid choice. Please chose 1, 2 or 3")
        
}
// Step 3 - Subtype choice
// Your code goes here


// Step 4 - Age
// Your code goes here

 let age = prompt ("Please enter your age")
 let chosenAge = age;
 if(age >= 17){
 console.log ("You are above 18 and can proceed to the checkout")
} if (age <= 17) {
  console.log ("too young to proceed ")
}


// Step 5 - Order confirmation
// Your code goes here
alert(
  'Order confirmation, please hold'
)

 //thank you message






