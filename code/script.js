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

if (choice === 1){
  prompt ("Choose extra: Please choose 1 for Margarita, 2 for Pepperoni or 3 for quatro")
} else if (choice === 2) {
  prompt ("Choose extra: Please choose 1 for Beetroot, 2 for Greek, 3 for special")
} else if (choice == 3) {
prompt ("Choose extra: Please choose 1 for Meetballs, 2 for Ketchup, 3 for ...")
} else if (choice >=4) {
  prompt ("You have to choose a number between 1 and 3 for your extra, no extra is your choice")}

  let initialChoice = prompt("Choose 1 for pizza, 2 for salad, or 3 for pasta:");

  if (initialChoice === "1") {
      let pizzaSubchoice = prompt("Choose pizza size: Small, Medium, or Large?")
      alert(`You chose pizza and selected ${pizzaSubchoice} size.`)
  } else if (initialChoice === "2") {
      let saladType = prompt("Choose salad type: Caesar or Garden?")
      alert(`You chose salad and selected ${saladType} type.`)
  } else if (initialChoice === "3") {
      let pastaStyle = prompt("Choose pasta style: Spaghetti or Penne?")
      alert(`You chose pasta and selected ${pastaStyle} style.`)
  } else {
      alert("Invalid choice. Please choose 1, 2, or 3.")
  }


// Step 4 - Age
// Your code goes here

 let age = prompt ("Please enter your age")
 if(age >= 17){
 alert ("You are above 18 and can proceed to the checkout")
} else {
  alert (`Kids menu, that will be $()`)
}



// Step 5 - Order confirmation
// Your code goes here
alert(
  'Order confirmation, please hold'
)

 //thank you message






