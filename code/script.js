// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
)

// prompt (
//   "Please enter your name!"
// )

let yourName = prompt(`Please enter your name!`)
// console.log("Hi " + yourName + ", nice to see you!")

alert(
  `Hi ${yourName}, nice to see you!`
)

// Step 2 - Food choice
// Your code goes here

const preferedFood = prompt(
  `What do you want to eat today?

  1 - Pizza
  2 - Pasta
  3 - Salad

  Please enter the number of your choice.
  `
)

let selectedFood = ""

if (preferedFood === "1") {
  selectedFood = "Pizza"
} else if (preferedFood === "2") {
  selectedFood = "Pasta"
} else if (preferedFood === "3") {
  selectedFood = "Salad"
} else {
  alert("I'm afraid that's not an option. Please start again and select one of the options (1-3).")
  exit(1)
}

alert(
  `You chose ${selectedFood}. Great choise!`)

// Step 3 - Subtype choice
// Your code goes here

if (selectedFood === "Pizza"){
  let specifiedFood = prompt(
    `What pizza would you like?

    1 - Margerita
    2 - Capricciosa
    3 - Quattro Stagioni

    Please enter the number of your choice.
    `
  )}
  else if (selectedFood === "Pasta"){
    let specifiedFood = prompt(
      `What pasta would you like?

      1 - Spaghetti Carbonara
      2 - Fettuccine Alfredo
      3 - Cheesy Tortellini

      Please enter the number of your choice.
      `
  )}
  else if (selectedFood === "Salad"){
    let specifiedFood = prompt(
      `What salad would you like?

      1 - Caesar Salad
      2 - Caprese Salad
      3 - Greek Salad

      Please enter the number of your choice.
      `
  )}
  else {
    alert("I'm afraid that's not an option. Please start again and select one of the options (1-3).")
      exit(1)
  }



// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
