
const foodSelection = prompt(
    `We offer delicious Italian food. (Please select the food of your choice with the corresponding number).
    1 - 🍕 Pizza
    2 - 🍝 Pasta
    3 - 🥗 Salad`
  )

let selectedFood = ""

if (foodSelection === "1") {
  selectedFood = "Pizza"
} else if (foodSelection === "2") {
  selectedFood = "Pasta"
} else if (foodSelection === "3") {
  selectedFood = "Salad"
} else {
  alert("Number input is invalid!☹️ please return and select a valid number.")
  exit(1)
} alert(`You choose ${selectedFood}, Yummy!😃`)

//test using switch

let foodType = ""
let foodNames = []

switch (selectedFood) {
    case "Pizza":
    foodType = parseInt(
    prompt(
        `Which type of pizza do you want to order?\n (please select the pizza of your choice with the corresponding number):
        1- Margherita
        2- Vegetariana
        3- Capriccosa`
        )
      )
    foodNames = ["Margherita", "Vegetariana", "Capriccosa"]
    break
    
    case "Pasta":
    foodType = parseInt(
    prompt(
        `Which type of pasta do you want to order?\n (please select the pasta of your choice with the corresponding number):
        1- Pasta Fungi
        2- Pasta Cacio e pepe
        3- Pasta Bolognese`
        )
      )
    foodNames = ["Pasta Fungi", "Pasta Cacio e pepe", "Pasta Bolognese"]
    break
        
    case "Salad":
    foodType = parseInt(
    prompt(
        `Which type of salad do you want to order?\n (please select the salad of your choice with the corresponding number):
        1- Caesar Salad
        2- Scampi Salad
        3- Avocado Salad`
        )
     )
    foodNames = ["Caesar Salad", "Scampi Salad", "Avocado Salad"]
    break

    default: ("Invalid number input🙁 please try again.")
    exit(1)
    }

if (foodType === 1) {
    alert(
      `Nice! You chose ${foodNames[0]}😃 `
    )
  } else if (foodType === 2) {
    alert(
      `Nice! You chose ${foodNames[1]}😃`
    )
  } else if (foodType === 3) {
    alert(
      `Nice! You chose ${foodNames[2]}😃 `
    )
  }