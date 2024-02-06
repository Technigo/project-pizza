// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to 🍕Javascript Pizzeria🍕 Ready to Start? - Click 'OK' to begin.`
)

// Step 2 - Name
const customerName = prompt(
  `Hi! Welcome to our interactive pizza ordering experience. First and foremost, what is your name?`
)

// Step 3 - Food choice
alert(
`Nice of you to pop by, ${customerName}! Now let's get you some food, shall we?`
)
const food = prompt(
`What do you feel like eating today? Choose your preference by typing in the corresponding number.
1. Pizza 🍕
2. Pasta 🍝
3. Salad 🥗`
)

let foodChosen

if (food == 1) {
foodChosen = "pizza"
alert(
  `You've chosen ${foodChosen}! Yummy!`
)
}

if (food == 2) {
foodChosen = "pasta"
alert(
  `You've chosen ${foodChosen}! Great choice! `
)
}

if (food == 3) {
foodChosen = "salad"
alert(
  `You've chosen ${foodChosen}! Gotta get those vitamins, am I right?`
)
}

// Step 4 - Subtype choice
// Your code goes here

// Step 5 - Age
// Your code goes here

// Step 6 - Order confirmation
// Your code goes here
