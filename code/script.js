// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert (
  `Welcome to Mama Mia Pizzeria. Ready to order? - Click 'OK' to begin.`
)
const name = prompt(`What's your name?`)

alert(
  
  `Thank you for choosing our restaurant, ${name}! We’re here to make your experience memorable.`
);

// Step 2 - What type of food
const mealchoice = prompt(
  
  `What would you like to eat? Choose the dish number 1, 2 or 3 according to below:

  1. Pizza
  2. Pasta
  3. Salad
`
)

if (mealchoice === "1") {
  
  alert(
    
    `Thank you ${name}, you have chosen no 1, Pizza`
  
)

  // Step 3 - Subtype choice for Pizza
  const pizzatype = prompt(
    
    `What kind of Pizza would you like? Choose between no 1, 2 or 3 according to below:

    1. Capricciosa 
    2. Hawaii
    3. Kebab pizza
  `
)

  if (pizzatype === "1") {

    alert(
      
      `Thank you ${name}, you have chosen no 1, Capricciosa. Love your choice!`
  
)
  } else if (pizzatype === "2") {

    alert(
      
      `Thank you ${name}, you have chosen no 2, Hawaii. Aloha!`
)
  } else if (pizzatype === "3") {

    alert(
      
      `Thank you ${name}, you have chosen no 3, Kebab pizza. Great choice!`
    
)
  } else {
    
    alert(
      
      `I'm sorry ${name}, that is not a valid option. Please choose number 1, 2 or 3.`
)
  }

} else if (mealchoice === "2") {
  alert(
    
    `Thank you ${name}, you have chosen no 2, Pasta`
  
)

  // Step 3 - Subtype choice for Pasta
  const pastatype = prompt(
    
    `What kind of pasta would you like? Choose between no 1, 2 or 3 according to below:

    1. Bolognese 
    2. Carbonara
    3. Lasagna
  `
)

  if (pastatype === "1") {
    alert(
      
      `Thank you ${name}, you have chosen no 1, Bolognese. Great choice!`
)
  } else if (pastatype === "2") {

    alert(
      
      `Thank you ${name}, you have chosen no 2, Carbonara. Splendido!`
)
  } else if (pastatype === "3") {
    alert(
      
      `Thank you ${name}, you have chosen no 3, Lasagna. Delicious choice!`
)
  } else {

    alert(
      
      `I'm sorry ${name}, that is not a valid option. Please choose number 1, 2 or 3.`
)
  }

} else if (mealchoice === "3") {

  alert(
    
    `Thank you ${name}, you have chosen no 3, Salad`
)

  // Step 3 - Subtype choice for Salad
  const saladtype = prompt(
    
    ` What kind of salad would you like? Choose between no 1, 2 or 3 according to below:

    1. Caesar salad
    2. Greek salad
    3. Ham & cheese salad
  `
)

  if (saladtype === "1") {

    alert(
      
      `Thank you ${name}, you have chosen no 1, Caesar salad. Fresh choice!`
    
)
  } else if (saladtype === "2") {

    alert(
      
      `Thank you ${name}, you have chosen no 2, Greek salad. Healthy choice!`
)
  } else if (saladtype === "3") {
    alert(
      
      `Thank you ${name}, you have chosen no 3, Ham & cheese salad. Great choice!`
    
)
  } else {

    alert(
      
      `I'm sorry ${name}, that is not a valid option. Please choose number 1, 2 or 3.`
    
)
  }

} else {
  alert(
    
      `I'm sorry ${name}, that is not a valid option. Please choose number 1, 2 or 3.`)
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here/ // // 