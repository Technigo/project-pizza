// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
  )
  let name = prompt("Hey What should we call you?")
  alert(
    "Hey " + name + "!"
  )
  
  
  // Step 2 - Food choice
  // Your code goes here
  
  let category = prompt("Ok, " + name + " what would you like to order:\n1. Pizza\n2. Milkshake\n3. Salad")
  switch(category){
    case "1":
        var catName = "Pizza";
        break;
    case "2":
        var catName = "Milkshake";
        break;
    case "3":
        var catName = "Salad";
        break;
    default:
        alert("We cannot process orders outside of our categories.\nPlease restart the application.")
  }
  alert(catName + " is a great choice!")
  
  // Step 3 - Subtype choice
  // Your code goes here
  let subPizza;
  let subMilkshake;
  let subSalad;
  switch (catName){
    case "1":
        let subPizza = prompt("Pizza? Great choice. Which pizza would you like?\n1. Vesuvio\n2. Margherita\n3. Capricciosa")
        switch(subPizza){
            case "1":
                var subName = "Vesuvio";
                break;
            case "2":
                var subName = "Margherita";
                break;
            case "3":
                var subName = "Capricciosa";
                break;
            default:
                alert("We cannot process orders outside of our dishes.\nPlease restart the application.")
        };
        break;
    case "2":
        let subMilkshake = prompt("Milkshake? Great choice. Which flavour would you like?\n1. Vanilla\n2. Chocolate\n3. Strawberry")
        switch (subMilkshake){
            case "1":
                var subName = "Vanilla milkshake";
                break;
            case "2":
                var subName = "Chocolate milkshake";
                break;
            case "3":
                var subName = "Strawberry milkshake";
                break;
            default:
                alert("We cannot process orders outside of our dishes.\nPlease restart the application.")
        };
        break;  
    case "2":
        let subSalad = prompt("What type of salad would you like?\n1. Ceasar salad\n2. Halloumi salad\n3. Ham and cheese salad")
        switch (subSalad){
            case "1":
                var subName = "Ceasar salad";
                break;
            case "2":
                var subName = "Halloumi salad";
                break;
            case "3":
                var subName = "Ham and cheese";
                break;
            default:
                alert("We cannot process orders outside of our dishes.\nPlease restart the application.")
        };
        break; 
  }
  alert(subName + " is a great choice!")
  
  
  // Step 4 - Age
  // Your code goes here
  
  let age = prompt(name + ", we need to verify your age to determine the portion size:")
  
  // Step 5 - Order confirmation
  // Your code goes here
  
  if (age <= 12){
    var portion = "child "
  }
  else{
    var portion = "adult "
  }
  
  let confirm = prompt("To comfirm your order " + name + ", One " + portion + subName +", is this correct?\n1. Yes\n2. No")
  if (confirm === "1" || confirm === "Yes" || confirm === "yes"){
    alert("The order will be delivered shortly. Thank you!")
  }
  else {
    alert("You are welcome to place a new order anytime.")
  }