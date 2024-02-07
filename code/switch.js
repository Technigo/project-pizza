// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to Javascript Restaurant! \nReady to start ordering? - Click 'OK' to begin.`
)

// Step 2 - Name
const customerName = prompt(
  `Hi! Welcome to our interactive food ordering experience. \nFirst and foremost, what is your name?`
)

// Step 3 - Food choice
alert(
`Nice of you to pop by, ${customerName}! Now let's get you some food, shall we?`
)

const food = prompt(
`What do you feel like eating today? \nChoose your preference by typing in the corresponding number.
1. Pizza 🍕
2. Pasta 🍝
3. Salad 🥗`
)

let foodChosen
let pizzaType
let pastaType
let saladType
let typeChosen


//I changed the order in this next section, and added the type choice right after the food choice, to not make it too messy

switch (food) {
    
    //PIZZA
    case "1":
        foodChosen = "pizza"
        alert(
            `You've chosen ${foodChosen}! Yummy!`
        )

    pizzaType = prompt(
        `Now let's decide what type of ${foodChosen} you're in the mood for. \nType the corresponding number below.
        1. Margherita
        2. Vesuvio
        3. Capricciosa`
    )

        switch (pizzaType) {
            case "1":
                typeChosen = "Margherita"
                alert(
                `A delicious ${typeChosen} ${foodChosen}, great choice!`
                )
            break

            case "2":
                typeChosen = "Vesuvio"
                alert(
                `A delicious ${typeChosen} ${foodChosen}, great choice!`
                )
            break

            case "3":    
                typeChosen = "Capricciosa"
                alert(
                `A delicious ${typeChosen} ${foodChosen}, great choice!`
                )
            break

            default:
                alert(
                `Looks like you tried to order something outside the menu. Unfortunately, we only serve three types of ${foodChosen}s at this restaurant, please try again.`
                )
            break
        }
    
    break


    //PASTA

    case "2":
        foodChosen = "pasta"
        alert(
            `You've chosen ${foodChosen}! Great choice! `
        )

    pastaType = prompt(
        `Now let's decide what type of ${foodChosen} you're in the mood for. \nType the corresponding number below.
        1. Pomodoro
        2. Bolognese
        3. Carbonara`
    )

        switch (pastaType) {
            case "1":
                typeChosen = "Pomodoro"
                alert(
                    `A delicious ${foodChosen} ${typeChosen}, love it!`
                )
            break

            case "2":
                typeChosen = "Bolognese"
                alert(
                    `A delicious ${foodChosen} ${typeChosen}, love it!`
                )
            break

            case "3":    
                typeChosen = "Carbonara"
                alert(
                    `A delicious ${foodChosen} ${typeChosen}, love it!`
                )
            break

            default:
                alert(
                    `Looks like you tried to order something outside the menu. Unfortunately, we only serve three types of ${foodChosen}s at this restaurant, please try again.`
                )
            break
        }

    break


    //SALAD
    case "3":
        foodChosen = "salad"
        alert(
            `You've chosen ${foodChosen}! Gotta get those vitamins, am I right?`
        )

    saladType = prompt(
        `Now let's decide what type of ${foodChosen} you're in the mood for. \nType in the corresponding number below.
        1. Caesar 
        2. Greek
        3. Niçoise`
    )

        switch (saladType) {
            case "1":
                typeChosen = "Caesar"
                alert(
                    `A delicious ${typeChosen} ${foodChosen}, yummy!`
                )
            break

            case "2":
                typeChosen = "Greek"
                alert(
                    `A delicious ${typeChosen} ${foodChosen}, yummy!`
                )
            break

            case "3":    
                typeChosen = "Niçoise"
                alert(
                    `A delicious ${typeChosen} ${foodChosen}, yummy!`
                )
            break

            default:
                alert(
                    `Looks like you tried to order something outside the menu. Unfortunately, we only serve three types of ${foodChosen}s at this restaurant, please try again.`
                )
            break
        }
    
    break


    //DEFAULT (because I want there to be different messages depending on at what stage you press the wrong button in the order flow)
    default:
        alert(
            `I'm sorry, looks like we don't have that on the menu. Please try again.`
        )
    break
}


// Step 5 - Age + Order confirmation

let adultPrice = 100 
let kidsPrice = 70

const customerAge = prompt(
  `Now we just need to calculate what size your ${foodChosen} should be, and what the total cost will be. Please enter your age below and we'll do the rest.`
)


// I couldn't use the same functionality on this switch setup since the values imported weren't fixed, so I had to use a boolean type switch.
switch (true) {
    case customerAge >= 15:
        orderConfirm = prompt(
            `You've ordered an adult size ${typeChosen} ${foodChosen}. Your total will be SEK ${adultPrice}. Is this correct? Enter a number below to confirm your order.
            1. Yes, I want to order.
            2. No, I want to cancel.`
        )
    switch (orderConfirm) {
            case "1":
            
                alert(
                    `Thank you for your order, ${customerName}! Your food will be ready soon!`
                )
            break

            case "2":
                alert(
                    `We're sad to see you go, ${customerName}! We will be here whenever you're ready to order again!`
                )
            break
        

            default:
                alert(
                    `We can't understand what you mean by that command, please try again.`
                )
        }

    break

    case customerAge <= 15:
        orderConfirm = prompt(
            `You've ordered a child size ${typeChosen} ${foodChosen}. Your total will be SEK ${kidsPrice}. Is this correct? Enter a number below to confirm your order.
            1. Yes, I want to order.
            2. No, I want to cancel.`
        )

        switch (orderConfirm) {
            case "1":
    
                alert(
                    `Thank you for your order, ${customerName}! Your food will be ready soon!`
                )
            break

            case "2":
                alert(
                    `We're sad to see you go, ${customerName}! We will be here whenever you're ready to order again!`
                )
            break
        

            default:
                alert(
                    `We can't understand what you mean by that command, please try again.`
                )
            break
        }

    break

}

