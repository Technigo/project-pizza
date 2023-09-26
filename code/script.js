// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)



let name = prompt("What's your name?");

  alert("Hello, " + name +"! Nice to meet you.");




// Step 2 - Food choice
// Your code goes here



let foodOption = prompt("What type of food would you like to order? \n Please enter a number.\n 1 - Pizza \n 2 - Pasta \n 3- Salad");

let option;
let choice;



// Step 3 - Subtype choice
// Your code goes here



if (foodOption === "1") {
  option = "pizza"; 
  alert(
    `You've chosen pizza!`
    )

  let foodChoice; 
 

  foodChoice = prompt("Which pizza would you like? \n Please enter a number.\n\n 1 - Margerita \n 2 - Hawaii \n 3 - Quattro Formaggi");
   
  if (foodChoice === "1") {
    choice = "Margerita";

    alert(
      `A Margerita! Good choice.`
      )

    } else if (foodChoice === "2") {
      choice = "Hawaii";
      alert(
        `Hawaii it is! `
        )
    
    } else if (foodChoice === "3") {
      choice = "Quattro Formaggi";

      alert(
        `Quattro Formaggi for you.!`
        )
  
    } else {
    
      alert(
        `Invalid choice.`
      )
    }




} else if (foodOption === "2") {
  option = "pasta";

  alert(
    `You've chosen pasta!`
    )
  foodChoice = prompt("Which pasta would you like? \n Please enter a number.\n\n 1 - Al Funghi \n 2 - Bolognese \n 3 - Carbonara");

  if (foodChoice === "1") {
    choice = "Al Funghi"; 
    alert(
      `Al Funghi it is.`
      )

    } else if (foodChoice === "2") {
      choice = "Bolognese"; 
      alert(
        `Bolognese for you.`
        )
    
    } else if (foodChoice === "3") {
      choice = "Carbonara"; 
      alert(
        `Carbonara it is.`
        )
  
    } else {
    
      alert(
        `Invalid choice.`
      )
    }









} else if (foodOption === "3") {
  option = "salad";
  alert(
    `You've chosen salad!`
    )
  foodChoice = prompt("Which salad would you like? \n Please enter a number.\n\n 1 - Greek Salad \n 2 - Ceasar salad \n 3 - Tuna salad");


  if (foodChoice === "1") {
    choice = "Greek"; 
    alert(
      `Greek salad will be served`
      )

    } else if (foodChoice === "2") {
      choice = "Ceasar"; 
      alert(
        `Ceasar salad, good choice!`
        )
    
    } else if (foodChoice === "3") {
      choice = "Tuna"; 
      alert(
        `Tuna salad it is, then.`
        )
  
    } else {
    
      alert(
        `Invalid choice.`
      )
    }



} else {

  alert(
    `Invalid choice.`
  )
}



// Step 4 - Age
// Your code goes here

let age = prompt("Is this order for a child or an adult? \nType your age, please.")
let ageOption; 
let cost;


if (age <= 12) {
  ageOption = "child";
  cost = "80 SEK";


} else if (age >= 12) {
  ageOption = "adult"
  cost = "120 SEK"


} else {

  alert(
    `Invalid choice.`
  )

}




// Step 5 - Order confirmation
// Your code goes here

let orderConfirmation = prompt("One " + ageOption + " sized " + choice + " " + option + " for you, then. That will be a total cost of " + cost + ". \nAre you sure you want to order this? \nEnter a number to confirm: \n 1 - Yes \n 2 - No");


if (orderConfirmation === "1") {
  alert(
    `Thank you for your order! It will be done in 15 minutes.`
  )


} else if (orderConfirmation === "2") {
  alert(
    `Order cancelled. Welcome back!`
  )

} else {

  alert(
    `Invalid choice.`
  )

}










