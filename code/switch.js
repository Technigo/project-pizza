// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
  )
  
  let person = prompt("Please enter your name")
  
  switch (person) {
    case "Anna":
      alert (
        `Hi and welcome Anna.`
      )
    break
    case "Charlie":
      alert (
        `Hi and welcome Charlie.`
      )
    break
    case "Tom":
      alert (
        `Hi and welcome Tom.`
      )
    break
    default:
        alert (
            `I am sorry, I don't know your name. I am gonna call you Bob. Welcome Bob.`
        )
  } 
  
  
  // Step 2 - Food choice
  // Your code goes here
  

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
    break
    default:
        alert (
            `You haven't chosen anything.`
        ) 
        exit (1)
  }
    
  
  // Step 3 - Subtype choice
  // Your code goes here
  
  let subtype = []
  switch (food) {
    case 1:
      subtype = ["1 - Margherita","2 - Pepperoni","3 - Hawaiian"]
    break
    case 2:
      subtype = ["1 - Carbonara","2 - Bolognese","3 - Alfredo"]
    break
    case 3:
      subtype = ["1 - With Meet","2 - Vegetarian","3 - Vegan"]
    break
    default:
      subtype = ["nothing"]
      exit (1)
  }
  
  let choice = parseInt 
    (prompt (`Please select your meal from the following by entering the number\n ${subtype.join("\n")}`))

  switch (food) {
    case 1:
      switch (choice) {
        case 1:
          alert (`You chose Margherita.`)
        break
        case 2:
          alert (`You chose Pepperoni.`)
        break
        case 3:
          alert (`You chose Hawaiian.`)
        break
        default:
          alert (`You chose nothing.`)
          exit(1)
      }
    break
    case 2:
      switch (choice) {
        case 1:
          alert (`You chose Carbonara.`)
        break
        case 2:
          alert (`You chose Bolognese.`)
        break
        case 3:
          alert (`You chose Alfredo.`)
        break
        default:
          alert (`You chose nothing.`)
          exit (1)
      }
    break
    case 3:
      switch (choice) {
        case 1:
          alert (`You chose with meet.`)
        break
        case 2:
          alert (`You chose vegetarian.`)
        break
        case 3:
          alert (`You chose vegan.`)
        break
        default:
          alert (`You chose nothing.`)
          exit(1)
      }
    break
    default:
      alert (`You chose nothing.`)
      exit(1)
  } 

  console.log (choice)
  
  
  // Step 4 - Age
  // Your code goes here
  
  
  let age = parseInt 
  (prompt (`Do you want to order the child menu or the adult menu. Please type your age:`))

  console.log(typeof age)
  
  
  let foodName = ["Pizza", "Pasta", "Lasagne"]
  let subtypeName = [
    ["Margherita", "Pepperoni", "Hawaiian"],
    ["Carbonara", "Bolognese", "Alfredo"],
    ["with meet", "vegetarian", "vegan"]
  ]
  
  let foodResult = foodName [food - 1]
  
  let subtypeResult = subtypeName [food - 1] [choice - 1]
  
  switch (age) {
    case 100:
    case 99:
    case 98:
    case 97:
    case 96:
    case 95:
    case 94:
    case 93:
    case 92:
    case 91:
    case 90:
    case 89:
    case 88:
    case 87:
    case 86:
    case 85:
    case 84:
    case 83:
    case 82:
    case 81:
    case 80:
    case 79:
    case 78:
    case 77:
    case 76:
    case 75:
    case 74:
    case 73:
    case 72:
    case 71:
    case 70:
    case 69:
    case 68:
    case 67:
    case 66:
    case 65:
    case 64:
    case 63:
    case 62:
    case 61:
    case 60:
    case 59:
    case 58:
    case 57:
    case 56:
    case 55:
    case 54:
    case 53:
    case 52:
    case 51:
    case 50:
    case 49:
    case 48:
    case 47:
    case 46:
    case 45:
    case 44:
    case 43:
    case 42:
    case 41:
    case 40:
    case 39:
    case 38:
    case 37:
    case 36:
    case 35:
    case 34:
    case 33:
    case 32:
    case 31:
    case 30:
    case 29:
    case 28:
    case 27:
    case 26:
    case 25:
    case 24:
    case 23:
    case 22:
    case 21:
    case 20:
    case 19:
    case 18:
      alert (`We will prepare one adult size ${foodResult} ${subtypeResult} for you. That'll cost 20 CHF in total. `)
    break
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      alert (`We will prepare one child size ${foodResult} ${subtypeResult} for you. That'll cost 15 CHF in total.`)
    break
    default:
      alert (`You didn't enter a real number. Please try again.`)
      exit (1)
  }

  
  // Step 5 - Order confirmation
  // Your code goes here
  
  let confirmation = parseInt (prompt (`Are you sure you want to order this?
  Please select a number to confirm:
  1 - Yes
  2 - No`))
  
  switch (confirmation) {
    case 1:
      alert (`Thank you for your order. We will prepare it for you!`)
    break
    default:
      alert (`You cancelled your order. Please start from the beginning.`)
      exit(1)
  }
