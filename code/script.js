// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to MamaMia Pizzeria. Ready to order? - Click 'OK' to begin.`
)

// Step 2 - What is your name? 

const name = prompt("What's your name?")
console.log('name is:', name)

alert(`Thank you for choosing our restaurant, ${name}! We’re here to make your experience memorable.`);

 // Step 3 - What type of food

const mealchoice = prompt (`What would you like to eat? Choose the dish number 1, 2 or 3 according to below"

1. Pizza
2. Pasta
3. Salad
`
)

if (mealchoice === "1") {

alert (
 `Thank you ${name},you have chosen nr 1, Pizza` 
)

} else if (mealchoice === "2") {
  alert (
  `Thank you ${name} you have chosen nr 2, Pasta`
  )

} else if (mealchoice === "3") {
    alert (
    `Thank you ${name} you have chosen nr 3, Salad`
  )
    
} else {
    alert (
    `I´m sorry ${name}, that is not a valid option. Please choose number 1, 2 or 3`
    )
}


  

// Step 3 - Subtype choice


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here