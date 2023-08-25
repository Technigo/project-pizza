// Step 1 - Welcome and introduction

// "window.onload" function and "setTimeout"-function is used to make sure that the background image loads before the code is executing.

window.onload = function () {
  setTimeout(function() {

    alert(
      `Welcome to Tara's Pizzeria. Ready to Start? Click 'OK' to begin 🍕🍝🥗`
    )

    const guestName = prompt(`Let's start with your name. What do you call yourself?`)

    alert(
      `Hi ${guestName}! We are ready to take your order. `
    )

    // Step 2 - Main food choice

    const foodChoice = prompt(`Please choose which delicious food you would like to order:
      1 - Pizza
      2 - Pasta
      3 - Salad

      Please enter the number of your choice:`)

    let selectedFood = ""

    if (foodChoice === "1") {
      selectedFood = "pizza"
    } else if (foodChoice === "2") {
      selectedFood = "pasta"
    } else if (foodChoice === "3") {
      selectedFood = "salad"
    } else {
      alert(`You didn't pick any food. Please select a number from the list.`)
      process.exit(1)
    }
    alert(
      `You have chosen a yummy ${selectedFood}!`
    )

    // Step 3 - Submeny foodchoice, the dish after the main choice

    let subMenu = ""
    let dishName = ""
    let subDish = ""

    switch (selectedFood) {
      case "pizza":
        subMenu = prompt(`Select which pizza you would like:
      1 - Mexicana
      2 - Kebabpizza
      3 - Hawaii

      Please enter the number of your choice:`)
        dishName = ["Mexicana", "Kebabpizza", "Hawaii"]
        break

      case "pasta":
        subMenu = prompt(`Select which pasta you would like:
      1 - Spagetti Bolognese
      2 - Pasta Carbonara
      3 - Pasta Scampi

      Please enter the number of your choice:`)
        dishName = ["Spagetti Bolognese", "Pasta Carbonara", "Pasta Scampi"]
        break

      case "salad":
        subMenu = prompt(`Select which salad you would like:
      1 - Caesar Salad
      2 - Roasted Turkey Club Salad
      3 - Classic Greec Salad

      Please enter the number of your choice:`)
        dishName = ["Caesar Salad", "Roasted Turkey Club Salad", "Classic Greec Salad"]
        break
      default:
        alert(
          `Invalid Choice. You need to select a number.`
          )
        process.exit(1)
    }
    subDish = dishName[subMenu - 1]
    alert(
      `You have chosen a delicious ${subDish}!`
      )

    // Step 4 - Checking age to define which portion size the customer wants

    const guestAge = parseInt(
      prompt(`To determine which portion size to prepare, please type your age:`)
    )

    // The order message that defines what the customer has ordered and how much
    // they must pay. Kids up to 12 y.o. pay less. Age 13 and above pay full price  

    let orderMessage = ""
    if (guestAge <= 12) {
      orderMessage = `You have chosen a smaller size portion of ${subDish}. That will be £8.`
    } else if (guestAge >= 13) {
      orderMessage = `You have chosen a regular size portion of ${subDish}. That will be £11.`
    } else {
      alert(`Invalid age choice. Please insert a number.`)
      process.exit(1)
    }
    
    // Step 5 - Order confirmation
    const confirmationChice = parseInt(
      prompt(`${orderMessage}
        Would you like to place your order:
        1 - Yes, please!
        2 - No, I changed my mind.
      `)
    )

    if (confirmationChice === 1) {
      alert("Thank you for your order. Your food is being prepared and will be ready in about 15 minutes!🍕🍝🥗")
    } else if (confirmationChice === 2) {
      alert("No worries, we hope to see you back soon! 🍕🍝🥗")
    } else {
      alert("Invalid choice. Please select 1 or 2 above.")
    }
  }, 1200)
}
