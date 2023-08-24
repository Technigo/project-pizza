
// Step 1 - Welcome and introduction
window.onload = function () {

  alert(
    `Welcome to Tara's Pizzeria. Ready to Start? - Click 'OK' to begin.`
  )

  const guestName = prompt(`What is your name?`)
  // console.log(guestName)

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
    process.exit(1)
  }
  alert(
    `You have chosen a yummy ${selectedFood}!`
  )

  // Step 3 - Subtype choice

  let subMenu = ""
  let dishName = ""
  let selectedDish = ""

  switch (selectedFood) {
    case "pizza":
      subMenu = prompt(`Select a type of pizza:
    1 - Mexicana
    2 - Kebabpizza
    3 - Hawaii
    Please enter the number of your choice:`)
      dishName = ["Mexicana", "Kebabpizza", "Hawaii"]
      break

    case "pasta":
      subMenu = prompt(`Select a type of pasta:
    1 - Spagetti Bolognese
    2 - Pasta Carbonara
    3 - Pasta Scampi
    Please enter the number of your choice:`)
      dishName = ["Spagetti Bolognese", "Pasta Carbonara", "Pasta Scampi"]
      break

    case "salad":
      subMenu = prompt(`Select a type of salad:
    1 - Caesar Salad
    2 - Roasted Turkey Club Salad
    3 - Classic Greec Salad
    Please enter the number of your choice:`)
      dishName = ["Caesar Salad", "Roasted Turkey Club Salad", "Classic Greec Salad"]
      break
    default:
      alert(`"Invalid Choice. Please select a number."`)
      process.exit(1)
  }
  selectedDish = dishName[subMenu - 1]
  console.log(`${dishName[0]}, ${dishName[1]}, ${dishName[2]}`)
  alert(`You have chosen ${selectedDish}!`)

  // Step 4 - Age
  const guestAge = parseInt(
     prompt(`Is this food for a child or an adult? Type your age:`)
   )

  let orderMessage = ""
  if (guestAge <= 12) {
    orderMessage = `You have chosen a small ${selectedDish}. That will be 70 kr.`
  } else if (guestAge >= 13) {
    orderMessage = `You have chosen a normal portion of ${selectedDish}. That will be 110 kr.`
  } else {
    alert(`Invalid age choice. Please insert a number.`)
     process.exit(1)
  }
  
  // Step 5 - Order confirmation
  const confirmationChice = parseInt(
    prompt(`${orderMessage}
      Choose a numer to confirm:
      1 - Yes, please
      2 - No, thanks
    `)
  )
  if (confirmationChice === 1) {
    alert("Thank you for your order. Your food is being prepared and will soon be ready")
  } else if (confirmationChice === 2) {
    alert("No worries, hope to see you back soon!")
  } else {
    alert("Invalid choice. Please select 1 or 2 above.")
  }

};
