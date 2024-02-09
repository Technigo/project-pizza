//Most of the variables are declared up here:
let mainDishNumber
let mainDish
let subtypeDishPrompt
let subtypeDishNumber
let subtypeDish
let userName

let unavailableOption = `Make sure you are typing one of the options available.
   
You have to start again.`

/* 
I tryied to create an array but then I couldn't figure out how I could use it:
  const menuOptions = {
  pizza:{subtypeDish: ["Margherita", "Cheese", "Caprichosa", "Pepperoni", "Meatballs"]},
  pasta:{subtypeDish: ["Spaghetti Carbonara", "Mac & Cheese", "Pesto", "Spaghetti and Meatballs", "Beef & Cheese Lasagna"]},
  sallad:{subtypeDish: ["Mediterranian", "Cesar", "Vegana", "Salmon", "Chèvre"]}
} 
*/

// Step 1 - Welcome and introduction

alert (`Welcome to our Javascript Pizzeria. Ready to Start?

Click 'OK' to begin.`)
userName = prompt(`What's your name?`)
alert (`Hi ${userName}! What a pretty name you have!
Welcome into our pizzeria,

Press Ok to continue.`)

console.log("User name:", userName)

// Step 2 - Food choice

mainDishNumber = parseInt(prompt(`What are you going to eat? You have 3 options:

  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗

(answer by typing 1, 2 or 3)
`))

switch (mainDishNumber){
  case 1:
    alert (`Pizza 🍕 Yumy! 
    
    OK to continue.`)
    mainDish = "pizza"
    break

  case 2:
    alert (`The HGI option:D Pasta!! 🍝 
    
    OK to continue.`)
    mainDish = "pasta"
    break

  case 3:
  alert (`Salad 🥗, the healthy choise! 
  
  OK to continue.`)
    mainDish = "salad"
    break

  default:
    alert (`${unavailableOption}`)
    exit(1)
}

/* Some testing in the console here: console.log(typeof mainDish) */
// Step 3 - Subtype choice

console.log ("mainDishNumber:", mainDishNumber)
console.log ("mainDish:", mainDish)

switch (mainDish){
  case "pizza":
    subtypeDishPrompt = (`Which pizza do you want?
    
    1 - Margherita
    2 - Cheese 
    3 - Caprichosa
    4 - Pepperoni
    5 - Meatballs`)
    break
    
  case "pasta":
    subtypeDishPrompt = (`Which kind of pasta do you want?
    
    1 - Spaghetti Carbonara
    2 - Mac & Cheese
    3 - Pesto
    4 - Spaghetti and Meatballs
    5 - Beef & Cheese Lasagna`)
    break

  case "salad":
    subtypeDishPrompt = (`What kind of salad do you want?
    
    1 - Mediterranian
    2 - Cesar 
    3 - Vegana
    4 - Salmon
    5 - Chèvre`)
    break
  }
    
subtypeDishNumber = parseInt(prompt (`${subtypeDishPrompt}

Type the number`))

console.log ("subtypeDishPromp", subtypeDishPrompt)
console.log (typeof(subtypeDishPrompt))
console.log ("subtypeDishNummer", subtypeDishNumber)
console.log (typeof(subtypeDishNumber))

switch (mainDish){
  case "pizza":
    switch (subtypeDishNumber){
      case 1:
      subtypeDish = "Margherita"
      break
        
      case 2:
      subtypeDish = "Cheese"           
      break
        
      case 3:
      subtypeDish = "Caprichosa"          
      break
          
      case 4:
      subtypeDish = "Pepperoni"        
      break
      
      case 5:
      subtypeDish = "Meatballs"  
      break

      default:
      alert (`${unavailableOption}`)
      exit(1)
  }
  break

  case "pasta":
    switch (subtypeDishNumber){
      case 1:
      subtypeDish = "Spaghetti Carbonara"
      break
        
      case 2:
      subtypeDish = "Mac & Cheese"           
      break
        
      case 3:
      subtypeDish = "Pesto"          
      break
          
      case 4:
      subtypeDish = "Spaghetti and Meatballs"        
      break
      
      case 5:
      subtypeDish = "Beef & Cheese Lasagna"  
      break

      default:
      alert (`${unavailableOption}`)
      exit(1)
  }
  break
  
  case "salad":
    switch (subtypeDishNumber){
      case 1:
      subtypeDish = "Mediterranian"
      break
        
      case 2:
      subtypeDish = "Cesar"           
      break
        
      case 3:
      subtypeDish = "Vegan"          
      break
          
      case 4:
      subtypeDish = "Salmon"        
      break
      
      case 5:
      subtypeDish = "Chèvre"  
      break

      default:
      alert (`${unavailableOption}`)
      exit(1)
  }
} 

console.log("subtypeDishNumber:", subtypeDishNumber)
console.log("subtypeDish:", subtypeDish)
  
alert (`Your order is a yumy ${subtypeDish} ${mainDish}

Ok to continue`)

// Step 4 - Age

let age = parseInt(prompt(`How old are you?

Adult size: 14€  >  over 16
Medium size: 12€ >  under 16
Child size: 10€  >  under 6
`))
let dishSize

switch (true){
  case age >= 16:    
    dishSize = (`Adult size: 14€`)
    break

  case age < 16 && age >= 6:    
    dishSize = (`Medium size: 12€`)
    break

  case age < 6:
    dishSize = (`Child menu: 10€`)
    break

  default:
    alert (`${unavailableOption}`)
    exit(1)
}

alert (`According to your age:
You will get a:

${dishSize}`)

// Step 5 - Order confirmation


orderConfirmation = parseInt(prompt (`To accept your delicious: 

${subtypeDish} ${mainDish} - ${dishSize}

Press:
1 - to Confirm
0 - to Cancel`
  
))

switch (orderConfirmation){
  case 1:
    alert (`Your order is in the way. 
  
  We will make sure you enjoy your meal😋push 

  Thank you! We hope to see you again soon, have a nice day 🌞`)
    break
   
  case 0:
    alert (`Order Canceled, start again if you would like to order some thing else.
    
    Otherways we hope to see you again in another ocasion. 
    
    Have a nice day 🌞`)
    break

  default:
    alert (`${unavailableOption}`)
    exit(1)
}

