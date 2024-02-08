
// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//b)
const yourName = prompt(`What's your name? 😊`)

alert(
  `Hello ${yourName}!🌟`
)



// Step 2 - Food choice

const foodSelection = prompt(
  `We offer delicious Italian food. (Please select the food of your choice with the corresponding number).
  1 - 🍕 Pizza
  2 - 🍝 Pasta
  3 - 🥗 Sallad`
)

let selectedFood = ""

if (foodSelection === "1") {
  selectedFood = "Pizza"
} else if (foodSelection === "2") {
  selectedFood = "Pasta"
} else if (foodSelection === "3") {
  selectedFood = "Sallad"
} else {
  alert("Number input is invalid!☹️ please return and select a valid number.")
  exit(1)
}

alert(`You choose ${selectedFood}, Yummy!😃`)






// Step 3 - Subtype choice

let aSubtype = ""


 if (foodSelection === "1") {selectedSubtype = prompt(`Which type of pizza do you want to order?🍕\n (please select the pizza of your choice with the corresponding number )
  1 - Pizza Margharita
  2 - Pizza Vegetariana
  3 - Pasta Capriccosa`)

 if (selectedSubtype === "1") {
  aSubtype = "Pizza Margharita"
} else if (selectedSubtype === "2") { 
  aSubtype = "Pizza Vegetariana" 
} else if (selectedSubtype === "3") { 
  aSubtype = "Pizza Capriccosa" 
} else {
  alert("Number input is invalid!☹️ please return and select a valid number.")
  exit(1)
      }
}


if (foodSelection === "2") {selectedSubtype = prompt(`Which type of pasta do you want to order?🍝\n (please select the pasta of your choice with the corresponding number )
 1 - Pasta Fungi
 2 - Pasta Cacio e pepe
 3 - Pasta Bolognese`)

if (selectedSubtype === "1") {
 aSubtype = "Pasta Fungi"
} else if (selectedSubtype === "2") { 
 aSubtype = "Pasta Cacio e pepe" 
} else if (selectedSubtype === "3") { 
 aSubtype = "Pasta Bolognese" 
} else {
 alert("Number input is invalid!☹️ please return and select a valid number.")
 exit(1)
     }
}

if (foodSelection === "3") {selectedSubtype = prompt(`Which type of Sallad do you want to order?🥗\n(please select the sallad of your choice with the corresponding number )
 1 - Caesar Sallad
 2 - Scampi Sallad
 3 - Avocado Sallad`)

if (selectedSubtype === "1") {
 aSubtype = "Caesar Sallad"
} else if (selectedSubtype === "2") { 
 aSubtype = "Scampi Sallad" 
} else if (selectedSubtype === "3") { 
 aSubtype = "Avocado Sallad" 
} else {
 alert("Number input is invalid!☹️ please return and select a valid number.")
 exit(1)
     }
}

alert(`You choose ${aSubtype} If this is correct click 🆗`)


// Step 4 - Age
// Your code goes here



// Step 5 - Order confirmation
// Your code goes here
