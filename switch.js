// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
  )
  
  let userName = prompt("Hi! What's your name?"
  )
  if (userName != null)
    alert((`Hi, ${userName}! Get ready to place your food order!`)
    )
  
  
  // Step 2 - Food choice
  // Your code goes here
  
  let foodChoice = parseInt (prompt (`
    What would you like to eat?
    1 - Pizza
    2 - Pan Pizza
    3 - Pasta
    Enter the number of your choice to proceed:`)
  )
  
  
  if (foodChoice === 1)
    alert ((`Great choice, ${userName}, you'll now get the opportunity to pimp your Pizza.`)
  )
  
  else if (foodChoice === 2)
    alert (`Great choice, ${userName}. You'll now get the opportunity to pimp your Pan Pizza.`
  )
  
  else if (foodChoice === 3)
    alert (`Great choice, ${userName}, you'll now get the opportunity to 
    pimp your Pasta.`
    ) 
  
  console.log ("plate number", foodChoice
  )
  
  // Step 3 - Subtype choice
  // Your code goes here
  
  
  //let modifyOptions = parseInt 
  //I struggled a lot with finding a variable for the following prompts
  //til I realised it was absolutely unneccesary
  //I understand that the JS runs all statements until the end
  
  if (foodChoice === 1)
  prompt((`
  Let's pimp your Pizza with:
  1 - Extra cheese
  2 - Extra everything
  3 - Extra oregano`
  ))
  
  else if (foodChoice === 2)
  prompt((`
  Let's pimp your Pan Pizza with:
  1 - Extra crusty border
  2 - Extra hot sauce
  3 - Extra olives
  `))
  
  
  else if (foodChoice === 3)
  prompt((`
  Let's pimp your Pasta with:
  1 - Extra parmesan
  2 - Extra salsiccia
  3 - Extra gambas
  `))
  
  alert ((`Nice one!`))
  
  
  
  // Step 4 - Age
  // Your code goes here
  
  let age = prompt 
    (`Are you ordering a meal for a child or an adult? Please enter your age:`)
  let price
  
  if (age >"1"){
    alert (`Hey kiddo, you got it!`)
    age = "child"
    price = "50 SEK"
    }
    
    else if (age >= "18"){
    alert (`Adult meal it is!`)
    age = "adult"
    price = "100 SEK"
    }
  
  
  console.log ("age", age)
  
  
  // Step 5 - Order confirmation
  // Your code goes here
  let orderConfirmation = parseInt (
  prompt (`
  Your ${age} meal for the price of ${price} will soon be prepared.
  Are you sure you want to order?
  Please enter a number:
  1 - for YES
  2 - for NO`))
  
  if (orderConfirmation === 1) {
    alert (`Thank you! Your meal is being prepared.`)
  }
  
  else if (orderConfirmation === 2) {
    alert (`Sorry to see you leave without an order. If you change your mind, you know where to find us!`)
  }
  