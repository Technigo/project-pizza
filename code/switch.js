// Step 1 - Welcome and introduction
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
  );
  
  const userName = prompt("Please enter your name", "Hungry Hugo");
  console.log("user name", userName)
  
  alert(
    `Hello ${userName}! Are you ready to order som yummy food?`
  );
  
  // Step 2 - Food choice
  let menu = prompt(`What would you like to order
  1 = Pizza
  2 = Pasta
  3 = Salad
  
  Type the number of your choice here please!`);
  
  let foodName;
  
  if (menu === "1") {
    foodName = "Pizza";
  } else if (menu === "2"){
    foodName = "Pasta";
  } else if (menu === "3") {
    foodName = "Salad"
  } else {
    alert("We're sorry, we don't have that, please start over!")
    exit(1);
  }
  console.log("food name", foodName)
  
  alert(`${foodName}! What a lovely choice!`)
  
  
  // Step 3 - Subtype choice
  let subChoice;
  
  if (foodName === "Pizza") {
   subChoice = prompt(`Select the number of your type of pizza! 
   1 = Vegetarian
   2 = Salami
   3 = Calzone`)
  } else if (foodName === "Pasta") {
    subChoice = prompt(`Select the number of your type of pasta!
    1 = Vegetarian
    2 = Meat
    3 = Seafood`)
  } else if (foodName === "Salad") {
    subChoice = prompt(`Select the number of your type of salad! 
    1 = Vegetarian
    2 = Cheese
    3 = Shrimp`)
  } else {
    alert("We're sorry, we don't have that, please start over!");
  }
  
  let lastChoice;
  
  if (foodName === "Pizza"){
    if (subChoice === "1") {
      lastChoice = "Vegetarian pizza"
      alert(`You chose the ${lastChoice}!`)
    } else if (subChoice === "2") {
      lastChoice = "Salami pizza"
      alert(`You chose the ${lastChoice}!`)
    } else if (subChoice === "3") {
      lastChoice = "Calzone"
      alert(`You chose ${lastChoice}!`)
    } else {
        alert("We're sorry, we don't have that, please start over!");
    }
  }
  if (foodName === "Pasta"){
    if (subChoice === "1") {
      lastChoice = "Vegetarian pasta"
      alert(`You chose the ${lastChoice}!`)
    } else if (subChoice === "2") {
      lastChoice = "pasta with meat"
      alert(`You chose the ${lastChoice}!`)
    } else if (subChoice === "3") {
      lastChoice = "Seafood pasta"
      alert(`You chose ${lastChoice}!`)
    } else {
        alert("We're sorry, we don't have that, please start over!");
    }
  }
  
  if (foodName === "Salad"){
    if (subChoice === "1") {
      lastChoice = "Vegetarian salad"
      alert(`You chose the ${lastChoice}!`)
    } else if (subChoice === "2") {
      lastChoice = "Cheese salad"
      alert(`You chose the ${lastChoice}!`)
    } else if (subChoice === "3") {
      lastChoice = "Shrimp salad"
      alert(`You chose ${lastChoice}!`)
    } else {
        alert("We're sorry, we don't have that, please start over!");
    }
  }
  console.log("last choice", lastChoice)
  
  // Step 4 - Age // Step 5 - Order confirmation
  
  let age = prompt("Is the food for a child or an adult? Please enter your age?")
  let confirmation;
  
  if (age >= 18) {
    confirmation = prompt(`One adult size ${lastChoice} will be prepared for you and that will be 15$!
    Do you want to confirm your order?
    1 - Yes
    2 - No
    `)
  } else if (age <= 18) {
    confirmation = prompt(`One child size ${lastChoice} will be prepared for you and that will be 10$!
    Do you want to confirm your order?
    1 - Yes
    2 - No
    `)
  } else {
    prompt ("Invalid choice, please start over!")
  }
  console.log("age", age)
  
  
  if (confirmation === "1") {
    alert(`Your ${lastChoice} is being prepared! Thank you for ordering food from the Technigo Pizzeria!`)
  } else if (confirmation === "2") {
    alert(`Ok! Please come back for some yummy food some other time! Have a great day!`)
  } else {
    exit(1)
  }
  