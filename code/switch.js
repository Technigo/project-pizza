// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    `Welcome to our JavaScript Pizzeria. Ready to order? - Click 'OK' to begin.`
  )
  
  let userName = prompt(
    "What is your name?"
    )
  
  switch (userName) {
    case "":
        alert(`We didn't catch that, please refresh the page and try again!`)
        exit(1)
    break
    default:
         alert(`Ciao ${userName}, great to see you! Click 'OK' to begin your order.`
    )
    }
  
  // Step 2 - Food choice &
  // Step 3 - Subtype choice
  // Your code goes here
  
//foodselection is input for pizza/pasta/salad
let foodSelection = parseInt ( 
    prompt (
    `What do you want to order?
  Please enter the corresponding number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
  )
  )
  
  //selecteddish - variable food for template literals (pizza pasta salad)
  let selectedDish =""
  //dishselection - subtype input (ortolana margharita 4 formaggi)
  let dishSelection=""
  //subtypedish - variable subtype for template literals (ortolana/margherita/4formaggi)
  let subtypeDish=""
  
  switch (foodSelection) {
    case 1:
      selectedDish = "pizza"
      alert(`You have selected ${selectedDish}! Click 'OK' to continue.`)
      dishSelection = parseInt (
      prompt(
      `What kind of pizza would you like to order?
      Please enter the corresponding number:
      1 - Ortolana 
      2 - Margherita 
      3 - Quattro Formaggi
        `)
    )
        switch (dishSelection) {
          case 1:
            subtypeDish = "Ortolana"
            alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
          break
          case 2:
            subtypeDish = "Margherita"
            alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
          break
          case 3:
            subtypeDish = "Quattro Formaggi"
            alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
          break
          default:
            alert ("Invalid choice, please start again! 🍕")
            exit (1)
        } 
    
    break
  
    case 2:
      selectedDish = "pasta"
      alert(`You have selected ${selectedDish}! Click 'OK' to continue.`)
      dishSelection = parseInt (
      prompt(
      `What kind of pasta would you like to order?
      Please enter the corresponding number:
      1 - Carbonara 
      2 - Puttanesca 
      3 - Cacio e pepe
    `)
    )
        switch (dishSelection) {
          case 1:
            subtypeDish = "Carbonara"
            alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
          break
          case 2:
            subtypeDish = "Puttanesca"
            alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
          break
          case 3:
            subtypeDish = "Cacio e pepe"
            alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
          break
        } 
  
  
    break
  
    case 3:
        selectedDish = "salad"
        alert(`You have selected ${selectedDish}! Click 'OK' to continue.`)
        dishSelection = parseInt (
        prompt(
        `What kind of salad would you like to order?
        Please enter the corresponding number:
        1 - Salade niçoise 
        2 - Caesar salad
        3 - Caprese salad
        `)
      )
          switch (dishSelection) {
            case 1:
              subtypeDish = "Niçoise"
              alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
            break
            case 2:
              subtypeDish = "Caesar"
              alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
            break
            case 3:
              subtypeDish = "Caprese"
              alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)
            break
          } 
       
      break
      default:
        alert(`That is unfortunately not on our menu, please refresh the page and try again! 🍕`)
        exit(1)        
    }
  
  
  // Step 4 - Age
  // Your code goes here

  let ageInput = parseInt ( 
    prompt (
    `Is this order for a child or an adult? 
  Please enter your age:`
  )
  )
  
  let age =""
  
  if (ageInput >=18 && ageInput<=120) { age = "an adult",
    alert (`You are ordering ${age} size portion. That will be 150 SEK. Click 'OK' to continue 👉`)
  } else if (ageInput>=0 && ageInput<18) { age ="a child"
    alert (`You are ordering ${age} size portion. That will be 75 SEK. Click 'OK' to continue 👉`)
  } else {
    alert("Invalid choice, please try again! 🍕")
    exit(1)
  }
  
  /*
  // Step 5 - Order confirmation
  // Your code goes here
  
  let finalConfirmation = parseInt(
    prompt(`Order summary: ${subtypeDish} ${selectedDish} for ${age}. 
  Please confirm your order by typing the corresponding number:
  1 - 'Yes, I want to proceed with my order' 
  2 - 'No, I want to cancel'`)
  )
  
  if (finalConfirmation === 1) {
    alert (`Your order has been confirmed and we will start preparing your ${subtypeDish}. Enjoy your meal! 👋`)
  } else if (finalConfirmation === 2) {
    alert (`Your order has been cancelled. You're welcome back another time 👋`)
  } else {
    alert("Invalid choice, please try again! 🍕")
    exit(1)
  }*/