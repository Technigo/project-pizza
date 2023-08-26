// Start here

// Step 1 - Welcome and introduction
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
  );
  
  //Ask user for their name using prompt method (when using conts the variable name doesn't appear in the alert. it says that it's deprecated)
  const userName = prompt(`What's your name? - ex. Maria`);
  
  //Display a greeting to confirm users name
  alert(`Hi ${userName}! Welcome to Javascript Pizzeria.`);
  
  
  // Step 2 - Food choice
  //In this .js file version I would like to explore how to use objects/arrays to be used combined with a switch condition
  //I think that using objects (probably an array would be just fine here as well) is a logical way of organizing values

  //Define dish objects (type and subtype)
  const dishes = {
    pizza: [
        {name: "Margherita"},
        {name: "Pepperoni"},
        {name: "Gorgonzola"}
    ],
    pasta: [
        {name: "Spaghetti Carbonara"},
        {name: "Fettucine Alfredo"},
        {name: "Penne Arrabbiata"}
    ],
    Salad: [
        {name: "Caesar Salad"},
        {name: "Greek Salad"},
        {name: "Caprese Salad"}
    ]
  };

  //Prompt user for dish category (pizza, pasta or salad)
  const categoryChoice = parseInt(prompt(`What type of food would you like to order? \nEnter a number:\n1 - Pizza\n2 - Pasta\n3 - Salad`));

  let selectedCategory;
switch (categoryChoice) {
  case 1:
    selectedCategory = 'pizza';
    break;
  case 2:
    selectedCategory = 'pasta';
    break;
  case 3:
    selectedCategory = 'salad';
    break;
  default:
    alert("Invalid choice. Please choose a number between 1 and 3.");
    break;
    process.exit(1)
}

//Message confirming what the user has selected 
if (selectedCategory) {
    alert(`Wonderful, you have selected ${selectedCategory}.`);
}


