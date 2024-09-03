// Start here

// Step 1 - Welcome and introduction
// Your code goes here
// 1:1
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// 1:2
let name = prompt("What is your name?"); 

// 1:3
alert(
  `Hello, ${name}!`
)  

// Step 2 - Food choice
// Your code goes here
let typeOfFood = prompt("We offer the following food:\n1. Pizza\n2. Pasta\n3. Sallad\n\nWhat type of food do you want to order? Type the number of the food.");

if (typeOfFood === "1") {
  alert(
    `You have chosen pizza!`
  )
} else if (typeOfFood === "2") {
  alert(
    `You have chosen pasta!`
  )
} else if (typeOfFood === "3") {
  alert(
    `You have chosen sallad!`
  )
}


// Step 3 - Subtype choice
// Your code goes here

if (typeOfFood === "1") {
  let choosePizza = prompt("What type of pizza do you want?\n1. Margaritha\n2. Hawaii\n3. Vesuvio");
  if (choosePizza === "1") {
    alert(
      `You have chosen Margaritha!`
    )
  } else if (choosePizza === "2") {
    alert(
      `You have chosen Hawaii!`
    )
  } else if (choosePizza === "3") {
    alert(
      `You have chosen Vesuvio!`
    )
  }
} else if (typeOfFood === "2") {
  let choosePasta = prompt("What type of pasta do you want?\n1. Bolognese\n2. Puttanesca\n3. Carbonara");
  if (choosePasta === "1") {
    alert(
      `You have chosen Bolognese!`
    )
  } else if (choosePasta === "2") {
    alert(
      `You have chosen Puttanesca!`
    )
  } else if (choosePasta === "3") {
    alert(
      `You have chosen Carbonara!`
    )
  }
} else if (typeOfFood === "3") {
  let chooseSallad = prompt("What type of sallad do you want?\n1. Greek\n2. Shrimp\n3. Falafel");
  if (chooseSallad === "1") {
    alert(
      `You have chosen Greek!`
    )
  } else if (chooseSallad === "2") {
    alert(
      `You have chosen Shrimp!`
    )
  } else if (chooseSallad === "3") {
    alert(
      `You have chosen Falafel!`
    )
  }
}






// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
