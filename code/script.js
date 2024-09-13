// preloads the background img to avoid delays
// URL of the background image
const bgImageUrl = "trattoria.jpg";

// Create a new Image object to preload the image
const img = new Image();
img.src = bgImageUrl;

// Wait for the background image to load
img.onload = () => {
  // Set the background image once it has been loaded
  document.body.style.backgroundImage = `url(${bgImageUrl})`;

  // Function to get valid user selection
  // Two parameters (promptText: for questions), (options: for valid inputs)
  const getValidSelection = (promptText, options) => {
    // 1. Ask the user for input
    const userSelection = prompt(promptText);
    // 2. Check if input is valid
    if (options.includes(userSelection)) {
      // 3. Return input if valid
      return userSelection;
    } else {
      alert("Invalid selection. Please choose a valid option.");
      return getValidSelection(promptText, options); // Recursive call, ensures that the user keeps getting prompted until they provide a valid input
    }
  };

  // Function to start the order process---------------------------------------
  const startOrder = () => {
    // Step 1 - Welcome and introduction
    alert(
      "Welcome to Trattoria Pizzeria. Ready to Start? - Click 'OK' to begin."
    );

    let userName;

    // Keep prompting the user until a valid name is entered
    while (!userName) {
      userName = prompt("Please enter your name:");
      if (!userName) {
        alert("No name entered. Please enter your name to continue.");
      }
    }

    alert(`Hi ${userName}, nice to meet you!`);

    // Step 2 - Food choice
    const foodOptions = ["1", "2", "3"];
    const foodTypeOptions = {
      1: "Pizza",
      2: "Pasta",
      3: "Salad",
    };

    const userSelection = getValidSelection(
      `What type of food would you like to order?
      Please select a number: 

      1 - Pizza
      2 - Pasta
      3 - Salad`,
      foodOptions
    );

    const foodType = foodTypeOptions[userSelection];

    // Step 3 - Subtype choice
    const subtypeOptions = {
      Pizza: {
        1: "Napolitana",
        2: "Hawaiian",
        3: "Pepperoni",
      },
      Pasta: {
        1: "Carbonara",
        2: "Vongole",
        3: "Lasagna",
      },
      Salad: {
        1: "Greek Salad",
        2: "Insalata Russa",
        3: "Giardiniera",
      },
    };

    const subtypePrompt = {
      Pizza: `Select a Pizza type
      Enter a number: 

      1 - Napolitana
      2 - Hawaiian
      3 - Pepperoni`,
      Pasta: `Select a Pasta type
      Enter a number:

      1 - Carbonara
      2 - Vongole
      3 - Lasagna`,
      Salad: `Select a Salad type
      Enter a number: 

      1 - Greek Salad
      2 - Insalata Russa
      3 - Giardiniera`,
    };

    const subtypeOptionsList = Object.keys(subtypeOptions[foodType]);

    const subtypeSelection = getValidSelection(
      subtypePrompt[foodType],
      subtypeOptionsList
    );

    const subtype = subtypeOptions[foodType][subtypeSelection];

    // Step 4 - Age
    let age;
    let cost;
    let ageLabel;

    while (true) {
      age = parseInt(
        //convert a string into an integer
        prompt("Is this food for a child or an adult? Type your age:"),
        10
      );
      //checks if a value is Not a Number (NaN)
      if (isNaN(age)) {
        alert("Invalid input. Please type a valid number.");
      } else {
        ageLabel = age >= 18 ? "adult" : "child"; //ternary operator, a shorthand way of writing an if-else
        cost = age >= 18 ? "€15" : "€10";
        break; // stops the loop from running further
      }
    }

    // Step 5 - Confirm order details
    const confirmation = confirm(
      `You have ordered ${foodType} (${subtype}) for one ${ageLabel}. That will be ${cost}. Click "OK" to confirm or "Cancel" to modify.`
    );

    if (confirmation) {
      alert("Thank you for your order! Your meal will be prepared.");
    } else {
      alert("Order cancelled. We hope to see you again!");
    }
  }; // closing startOrder function----------------------------------------

  // Add event listener to start the order process when "here" is clicked
  document.getElementById("start-order").addEventListener("click", (event) => {
    event.preventDefault(); //the default action is stopped i.e promt
    startOrder();
  });
};

// Anonymous function handles errors if the image fails to load
img.onerror = () => {
  alert("Failed to load background image.");
};
