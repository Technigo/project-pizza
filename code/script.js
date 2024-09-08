// preloads the background img to avoid delays--------------------------
// URL of the background image
const bgImageUrl = "trattoria.jpg";

// Create a new Image object to preload the image
const img = new Image();
img.src = bgImageUrl;

// Wait for the background image to load
img.onload = function () {
  // Set the background image once it has been loaded
  document.body.style.backgroundImage = `url(${bgImageUrl})`;

  // Function to get valid user selection------------------------------
  // Two parameters (promptText: for questions), (options: for valid inputs)
  function getValidSelection(promptText, options) {
    // 1. Ask the user for input
    let userSelection = prompt(promptText);
    // 2. Check if input is valid
    if (options.includes(userSelection)) {
      // 3. Return input if valid
      return userSelection;
      // 4. Handle invalid input
    } else {
      alert("Invalid selection. Please choose a valid option.");
      return getValidSelection(promptText, options); // Recursive call, the function calls itself again asking the user to re-enter their input.
    }
  }

  // Function to start the order process-------------------------------
  function startOrder() {
    // Step 1 - Welcome and introduction
    alert(
      "Welcome to Trattoria Pizzeria. Ready to Start? - Click 'OK' to begin."
    );

    let userName;

    // Keep prompting the user until a valid name is entered
    // keeps running as long as userName is either empty or null
    while (!userName) {
      userName = prompt("Please enter your name:");
      // if nothing is entered, user is prompted
      if (!userName) {
        alert("No name entered. Please enter your name to continue.");
      }
    }

    alert(`Hi ${userName}, nice to meet you!`);

    // Step 2 - Food choice----------------------------------------------
    let foodType;
    const foodOptions = ["1", "2", "3"];
    const foodTypeOptions = {
      1: "Pizza",
      2: "Pasta",
      3: "Salad",
    };

    // getValidSelection() function is called to prompt the user to select a valid input (a number).
    let userSelection = getValidSelection(
      `What type of food would you like to order?
      Please select a number: 
      1 - Pizza
      2 - Pasta
      3 - Salad`,
      foodOptions // The foodOptions array (["1", "2", "3"]) is passed as the second argument to getValidSelection(). This ensures that the user can only select one of these valid options.
    );

    foodType = foodTypeOptions[userSelection]; // foodTypeOptions object maps the user's selection

    // Step 3 - Subtype choice-----------------------------------------------
    let subtypeSelection; // store the number (1, 2, 3)
    let subtype; //store the name of the specific subtype
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

    let subtypePrompt = {
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
      1 - Caprese
      2 - Insalata Russa
      3 - Giardiniera`,
    };

    //subtypeOptionsList generates an array of valid subtype option numbers (["1", "2", "3"])
    // Object.keys(subtypeOptions[foodType]) gets the keys (1, 2, 3) of the selected food type from subtypeOptions.
    let subtypeOptionsList = Object.keys(subtypeOptions[foodType]);

    // getValidSelection() function is called to prompt the user to select a subtype
    subtypeSelection = getValidSelection(
      // subtypeOptions object to maps the number to the corresponding subtype name
      subtypePrompt[foodType],
      subtypeOptionsList
    );

    //The selected subtype name is stored in the subtype variable
    subtype = subtypeOptions[foodType][subtypeSelection];

    // Step 4 - Age----------------------------------------------------------
    let age;
    let cost;
    let ageLabel; //child or adult

    //loop keeps prompting the user until valid input is provided
    while (true) {
      // converts the user’s input into an integer
      age = parseInt(
        prompt("Is this food for a child or an adult? Type your age:"),
        10
      );

      //isNaN (Not-a-Number) checks if the value in age is not a number
      if (isNaN(age)) {
        alert("Invalid input. Please type a valid number.");
      } else {
        ageLabel = age >= 18 ? "adult" : "child"; // ternary operator
        cost = age >= 18 ? "€15" : "€10";
        break; // Exit the loop when valid input is provided and proceed to the next step
      }
    }

    // Step 5 - Confirm order details-----------------------------------------------
    // confirm() Function: displays "OK", "Cancel" options
    let confirmation = confirm(
      `You have ordered ${foodType} (${subtype}) for one ${ageLabel}. That will be ${cost}. Click "OK" to confirm or "Cancel" to modify.`
    );

    if (confirmation) {
      alert("Thank you for your order! Your meal will be prepared.");
    } else {
      alert("Order cancelled. We hope to see you again!");
    }
  }
  // ------------Closing function startOrder---------------------

  // Add event listener to start the order process when "here" is clicked
  document
    //retrieves HTML element with the id of "startOrder"
    .getElementById("startOrder")
    //adds an event listener to the retrieved element
    .addEventListener("click", function (event) {
      //Prevents default link behavior
      //ensures that clicking the "startOrder" element does not cause any unintended behavior
      event.preventDefault();
      //calls startOrder function
      startOrder();
    });
};

//
// anonymous function handles errors if the image fails to load
img.onerror = function () {
  alert("Failed to load background image.");
};
