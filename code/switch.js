// Step 1 - Welcome and introduction
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt(
    `Hi hungry fellow! What's your name?`
)

alert(
    `Hello, ${userName}! Hit the button below whenever you are ready to order!`
)

// Step 2 - Food choice
const EnterChoice = "Please enter the number of your choice."

const mealchoice = prompt(
    `What would you like to order? Please enter the number of your choice.\n\n1. Pizza\n2. Pasta\n3. Salad`
)

let orderedFood = ""

// Pizza

if (mealchoice === "1") {
    const pizzachoice = prompt(
      `What type of Pizza would you like to order? ${EnterChoice}.\n\n1. Capricciosa\n2. Hawaii\n3. Vesuvius`
    )
    
    if (pizzachoice === "1") {
        orderedFood = "Capricciosa pizza"
    } else if (pizzachoice === "2") {
        orderedFood = "Hawaii pizza"
    } else if (pizzachoice === "3") {
        orderedFood = "Vesuvius pizza"
    } else {
        alert("Sorry, that's not a valid pizza choice.")
        //return // Stop the script here if an invalid pizza choice is made
    }

// Pasta
    
} else if (mealchoice === "2") { 
    const pastachoice = prompt(
      `What type of Pasta would you like to order? ${EnterChoice}\n\n1. Spaghetti Bolognese\n2. Pasta Carbonara\n3. Fettuccine Alfredo`
    )
    
    if (pastachoice === "1") {
        orderedFood = "Spaghetti Bolognese"
    } else if (pastachoice === "2") {
        orderedFood = "Pasta Carbonara"
    } else if (pastachoice === "3") {
        orderedFood = "Fettuccine Alfredo"
    } else {
        alert("Sorry, that's not a valid pasta choice.")
        //return // Stop the script here if an invalid pasta choice is made
    }

} else if (mealchoice === "3") { // Salad
    const saladchoice = prompt(
      `What type of Salad would you like to order? ${EnterChoice}\n\n1. Pasta salad\n2. Noodle salad\n3. Caesar salad`
    )
  
    if (saladchoice === "1") {
        orderedFood = "Pasta salad"
    } else if (saladchoice === "2") {
        orderedFood = "Noodle salad"
    } else if (saladchoice === "3") {
        orderedFood = "Caesar salad"
    } else {
        alert("Sorry, that's not a valid salad choice.")
        //return // Stop the script here if an invalid salad choice is made
    }

} else {
    alert(
      `Sorry, ${userName}! That's not a valid choice!`
    )
    //return // Stop the script here if an invalid meal choice is made
}

// Confirm the selected food choice
if (orderedFood) {
    alert(`Thanks ${userName}! You've chosen ${orderedFood}`)
}

// Step 4 - Age
const age = prompt (
    `Is this food for a child or an adult? Type your age:`
)
let portion = ""
if (parseInt(age) >= 18) {
    portion = "regular portion" 
} else {
    portion = "kid's meal"
}

alert(
    `You wish to order a ${portion}`
)

// Step 5 - Order confirmation
const confirmation = prompt(
    `Thank you, ${userName}, for your order of a ${portion} of ${orderedFood}!\n\nAre you sure you want to order this?\n\n1. Yes\n2. No`
)

if (confirmation === "1") {
    alert(`
    Thank you for your order, ${userName}! 
      
    Your ${orderedFood} (${portion}) will be prepared shortly. 
      
    We hope you enjoy your meal!`)
} else {
    alert(`No worries, ${userName}. 
      
  Thank you for visiting our Javascript Pizzeria. We hope to serve you next time!`);
}
