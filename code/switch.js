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
  //Using parseInt to converts teh prompt into an integer
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

//Step 3 - Subtype choice
//The subtypes are already defined in step 2 as objects?
//Sub steps - prompt dishes - alert confirmation message of chosen dish - however the confirmation message depends on what the user prompted which means that I need to nest an if statement in another if statement?
//1. In other words, I will start by using a template literal inside the prompt because I will write a "string - sentence" mixed with functions and variables.
//2. I'll have to use the .map() function to list all the food options now allocated in the categoryDishes array
//3. In the map() function I will add an arrow function to define the index of the current dish. I will have to add +1 to the index to make it more user friendly since arrays start with 0 and not 1. 
//4. The expression inside the arrow function generates a formatted string for each dish ex. "1 - Margherita" but all the options will end up on the same line when displayed because now I have a mega array? I need to learn how to use the console man.
//5. The .join('\n') method is then used to join these strings together, separated by newline characters (\n). This creates a multiline string where each formatted dish option appears on a new line.



if (selectedCategory) {
    const categoryDishes = dishes[selectedCategory]; //The variable now holds the array of dishes related to the chosen category. the object is now an array?
  
    // Prompt user for specific dish (dishChoice will result in a value of 1, 2 or 3)
    let dishChoice = parseInt(prompt(`What type of ${selectedCategory} would you like? \nPick a dish:\n${categoryDishes.map((dish, index) => `${index + 1} - ${dish.name}`).join('\n')}`));
  
    //Check if the prompt is within 1 and the length of the array (validate teh user's choice and provide feedback)
    if (dishChoice >= 1 && dishChoice <= categoryDishes.length) {
    //If valid, retrieve the selected dish object (pizza, pasta or salad) and substract -1 from the promt to match with the correct index value
      const selectedDish = categoryDishes[dishChoice - 1];
      alert(`Excellent, you have chosen ${selectedDish.name}.`);
    } else {
      alert(`Invalid choice. Please choose a valid number between 1 and 3).`);
      process.exit(1)
    }
  }
  
