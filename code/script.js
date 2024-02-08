// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const customerName = prompt(
  `What is your name?`)
console.log(customerName)

alert(
  `Hello, ${customerName}!`
)
  
// Step 2 - Food choice

const foodChoice = prompt(
  `What would you like to order?
  Please enter the number of your choice:
  1 - Pizza
  2 - Pasta
  3 - Salad
  `
)


let selectedFood = ""

if (foodChoice === "1") {
  selectedFood = "Pizza"
} else if (foodChoice === "2") {
  selectedFood = "Pasta"
} else if (foodChoice === "3") {
  selectedFood = "Salad"
} else {
  alert("Invalid choice, please try again.")
  exit(1)
}

alert(
  `You chose ${selectedFood}, is that correct?`)


// Step 3 - Subtype choice

  // Pizza selection

if (selectedFood === "Pizza")
{
  const pizzaChoice = prompt(
    `What kind of pizza do you want?
      1 - Margherita
      2 - Salsiccia
      3 - Quattro Formaggi`
  )

let selectedPizza = ""

if (pizzaChoice === "1"){
  selectedPizza = "Margherita"
} else if (pizzaChoice === "2") {
  selectedPizza = "Salsiccia"
} else if (pizzaChoice === "3") {
  selectedPizza = "Quattro Formaggi"
} else {
    alert("Invalid choice, please try again.")
    exit(1)
}

alert(
  `You chose ${selectedPizza}, is that correct?`)
}


  // Pasta selection

  if (selectedFood === "Pasta") {
    const pastaChoice = prompt(
      `Which pasta would you like to order?
        1 - Spaghetti Carbonara
        2 - Pasta Bolognese
        3 - Pasta Pollo`
    )

let selectedPasta = ""

if (pastaChoice === "1"){
  selectedPasta = "Spaghetti Carbonara"
} else if (pastaChoice === "2") {
  selectedPasta = "Pasta Bolognese"
} else if (pastaChoice === "3") {
  selectedPasta = "Pasta Pollo"
} else {
    alert("Invalid choice, please try again.")
    exit(1)
}

alert(
  `You chose ${selectedPasta}, is that correct?`)
}

  // Salad selection

  if (selectedFood === "Salad")
  {
    const saladChoice = prompt(
      `Which salad would you like to order?
      1 - Caesar salad
      2 - Greek salad
      3 - Pasta salad`
    )
  
  let selectedSalad = ""
  
  if (saladChoice === "1"){
    selectedSalad = "Caesar salad"
  } else if (saladChoice === "2") {
    selectedSalad = "Greek salad"
  } else if (saladChoice === "3") {
    selectedSalad = "Pasta salad"
  } else {
      alert("Invalid choice, please try again.")
      exit(1)
  }
  
  alert(
    `You chose ${selectedSalad}, is that correct?`)
  }

// Step 4 - Age





// Step 5 - Order confirmation


