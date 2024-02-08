// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
  )
  
  //Asking person for name with prompt
  
  let person = prompt("Please enter your name")
  
  switch (person) {
    case person:
        alert (
            `Hi and welcome ${person}`
        )
    break
    default:
        alert (
            `Hi and welcome anonymous.`
        )
    break
  } 

  /*if (person) {
    alert (
      `Hi and welcome ${person}`
      )
    } else {
    alert (
    `Hi and welcome anonymous.`
    )
    }*/
  
  
  // Step 2 - Food choice
  // Your code goes here
  
// We can use parseInt or use "1"

  let food = parseInt (
    prompt(`Please select your choice of Food by entering the number.
  1 - Pizza
  2 - Pasta
  3 - Lasagne`)
  )

  switch (food) {
    case 1:
        alert (
            `You chose Pizza.`
        )
    break
    case 2:
        alert (
            `You chose Pasta.`
        )
    break
    case 3:
        alert (
            `You chose Lasagne`
        )
    default:
        alert (
            `You haven't chosen anything.`
        ) 
        exit (1)
  }
    
  
  /*if (food == 1) {
    alert (
      `You choose Pizza.`
    )
  } else if (food == 2) {
    alert (
      `You choose Pasta.`
    )
  } else if (food == 3) {
    alert (
      `You choose Lasagne.`
    )
  } else {
    alert (
      `You haven't choosen anything.`
    )
  }*/
  
  
  // Step 3 - Subtype choice
  // Your code goes here
  
  let subtype = []
  if (food == 1) {
    subtype = ["1 - Margherita","2 - Pepperoni","3 - Hawaiian"]
  } else if (food == 2) {
    subtype = ["1 - Carbonara","2 - Bolognese","3 - Alfredo"]
  } else if (food == 3) {
    subtype = ["1 - With Meet","2 - Vegetarian","3 - Vegan"]
  } else {
    subtype = ["nothing"]
  }
  
  let choice = prompt (`Please select your meal from the following by entering the number\n ${subtype.join("\n")}`)
  
  if (food == 1 && choice == 1) {
    alert (
      `You choose Margherita.`
    )
  } else if (food == 1 && choice == 2) {
    alert (
      `You choose Pepperoni.`
    )
  } else if (food == 1 && choice == 3) {
    alert (
      `You choose Hawaiian.`
    )
  } else if (food == 2 && choice == 1) {
    alert (
      `You choose Carbonara.`
    )
  } else if (food == 2 && choice == 2) {
    alert (
      `You choose Bolognese.`
    )
  } else if (food == 2 && choice == 3) {
    alert (
      `You choose Alfredo.`
    )
  } else if (food == 3 && choice == 1) {
    alert (
      `You choose with meet.`
    )
  } else if (food == 3 && choice == 2) {
    alert (
      `You choose vegetarian.`
    )
  } else if (food == 3 && choice == 3) {
    alert (
      `You choose vegan.`
    )
  } else {
    alert (
      `You choose nothing.`
    )
  }
  
  
  // Step 4 - Age
  // Your code goes here
  
  
  let age = prompt (`Do you want to order the child menu or the adult menu. Please type your age:`)
  
  
  let foodName = ["Pizza", "Pasta", "Lasagne"]
  let subtypeName = [
    ["Margherita", "Pepperoni", "Hawaiian"],
    ["Carbonara", "Bolognese", "Alfredo"],
    ["with meet", "vegetarian", "vegan"]
  ]
  
  let foodResult = foodName [food - 1]
  
  let subtypeResult = subtypeName [food - 1] [choice - 1]
  
  
  if (age >= 18) {
    alert (`We will prepare one adult size ${foodResult} ${subtypeResult} for you. That'll cost 20 CHF in total. `)
  }
  else {
    alert (`We will prepare one child size ${foodResult} ${subtypeResult} for you. That'll cost 15 CHF in total.`)
  }
  
  
  // Step 5 - Order confirmation
  // Your code goes here
  
  let confirmation = prompt (`Are you sure you want to order this?
  Please select a number to confirm:
  1 - Yes
  2 - No`)
  
  if (confirmation == 1) {
    alert (`Thank you for your order. We will prepare it for you!`)
  } else {
    alert (`You cancelled your order. Please start from the beginning.`)
  }
  