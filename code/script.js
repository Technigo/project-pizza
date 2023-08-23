// Start here

// Step 1 - Welcome and introduction
// Your code goes here

window.onload = function () {

  alert(
    `Welcome to Tara's Pizzeria. Ready to Start? - Click 'OK' to begin.`
  )

  const guestName = prompt(`What is your name?`)
  console.log(guestName)

  alert(
    `Hi ${guestName}! We will now take your order. `
  )

  // Step 2 - Food choice

  const foodChoice = prompt(`Please choose from the list:
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
    alert(`You haven't chosen a food. Please select a number from the list.`)
    Process.exit(1)
  }
  alert(
    `You have chosen a yummy ${selectedFood}!`
  )

  // Step 3 - Subtype choice

  let subMenu = ""
  let subDish = ""
  let selectedDish = ""

  switch (selectedFood) {
    case "pizza":
      subMenu = prompt(`Select a type of pizza:
    1 - Mexicana
    2 - Kebabpizza
    3 - Hawaii
    Please enter the number of your choice:`)
      subDish = ["Mexicana", "Kebabpizza", "Hawaii"]
      selectedDish = subDish[subMenu - 1]
      console.log(subDish[0] + "," + subDish[1] + "," + subDish[2])
      break

    case "pasta":
      subMenu = prompt(`Select a type of pasta:
    1 - Spagetti Bolognese
    2 - Pasta Carbonara
    3 - Pasta Scampi
    Please enter the number of your choice:`)
      subDish = ["Spagetti Bolognese", "Pasta Carbonara", "Pasta Scampi"]
      break

    case "salad":
      subMenu = prompt(`Select a type of salad:
    1 - Caesar Salad
    2 - Roasted Turkey Club Salad
    3 - Classic Greec Salad
    Please enter the number of your choice:`)
      subDish = ["Caesar Salad", "Roasted Turkey Club Salad", "Classic Greec Salad"]
      break
    default:
      alert(`"Invalid Choice. Please select a number."`)
      process.exit(1)
  }

  alert(`You have chosen ${selectedDish}`)
  console.log(subDish)




  // Step 4 - Age
  // Your code goes here

  // Step 5 - Order confirmation
  // Your code goes here
};
