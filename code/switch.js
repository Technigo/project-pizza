// Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt("Please enter your name", "Hungry Hugo");

console.log("user name", userName);

alert(`Hello ${userName}! Are you ready to order som yummy food?`);

// Food choice
const foodName = parseInt(
  prompt(
    `What would you like to order

  1 = Pizza
  2 = Pasta
  3 = Salad
  
  Type the number of your choice here please!`
  )
);

console.log("food choice", typeof foodName, foodName);

let foodChoice;
let subChoice;
let lastChoice;

switch (foodName) {
  case 1:
    foodChoice = "Pizza";
    alert(`${foodChoice}, sounds great!`);
    subChoice = parseInt(
      prompt(`
      What kind of ${foodChoice} would you like to order?

      1 = Vegetarian pizza
      2 = Salami pizza
      3 = Calzone

      Type the number of your choice here please!`)
    );

    switch (subChoice) {
      case 1:
        lastChoice = "Vegetarian pizza";
        alert(`You selected the ${lastChoice}, yum!`);
        break;
      case 2:
        lastChoice = "Salami pizza";
        alert(`You selected the ${lastChoice}, yum!`);
        break;
      case 3:
        lastChoice = "Calzone";
        alert(`You selected the ${lastChoice}, yum!`);
        break;
      default:
        alert(
          "Hey, looks like you tried to order something else, please start over to order what you want!"
        );
        exit(1);
    }
  }
    console.log("sub choice", typeof lastChoice, lastChoice);

    switch (foodName) {
      case 2:
        foodChoice = "Pasta";
        alert(`${foodChoice}, sounds great!`);
        subChoice = parseInt(
          prompt(`
      What kind of ${foodChoice} would you like to order?

      1 = Vegetarian pasta
      2 = Meaty pasta
      3 = Seafood pasta

      Type the number of your choice here please!`)
        );

        switch (subChoice) {
          case 1:
            lastChoice = "Vegetarian pasta";
            alert(`You selected the ${lastChoice}, yum!`);
            break;
          case 2:
            lastChoice = "Meaty pasta";
            alert(`You selected the ${lastChoice}, yum!`);
            break;
          case 3:
            lastChoice = "Seafood pasta";
            alert(`You selected the ${lastChoice}, yum!`);
            break;
          default:
            alert(
              "Hey, looks like you tried to order something else, please start over to order what you want!"
            );
            exit(1);
        }
        console.log("sub choice", typeof subChoice, subChoice);
    }
  
    switch (foodName) {
      case 3:
        foodChoice = "Salad";
        alert(`${foodChoice}, sounds great!`);
        subChoice = parseInt(
          prompt(`
      What kind of ${foodChoice} would you like to order?

      1 = Vegetarian salad
      2 = Cheese salad
      3 = Shrimp salad

      Type the number of your choice here please!`)
        );

        switch (subChoice) {
          case 1:
            lastChoice = "Vegetarian salad";
            alert(`You selected the ${lastChoice}, yum!`);
            break;
          case 2:
            lastChoice = "Cheese salad";
            alert(`You selected the ${lastChoice}, yum!`);
            break;
          case 3:
            lastChoice = "Shrimp salad";
            alert(`You selected the ${lastChoice}, yum!`);
            break;
          default:
            alert(
              "Hey, looks like you tried to order something else, please start over to order what you want!"
            );
            exit(1);
        }
        console.log("sub choice", typeof lastChoice, lastChoice);
    }

// Step 4 - Age // Step 5 - Order confirmation

const age = parseInt(
  prompt(
    `Is the food intended for a child or an adult? 
    Please enter your age?`));
let portionSize = ""

switch(age)
case 1: 



// portionSize = age <= 13 ? "child-sized" : "adult-sized";


// if (age >= 13) {
//   confirmation =
//     prompt(`One adult size ${lastChoice} will be prepared for you and that will be 15$!
//   Do you want to confirm your order?
//   1 - Yes
//   2 - No
//   `);
// } else if (age <= 13) {
//   confirmation =
//     prompt(`One child size ${lastChoice} will be prepared for you and that will be 10$!
//   Do you want to confirm your order?
//   1 - Yes
//   2 - No
//   `);
// } else {
//   prompt("Invalid choice, please start over!");
// }
// console.log("age", age);

// if (confirmation === "1") {
//   alert(
//     `Your ${lastChoice} is being prepared! Thank you for ordering food from the Technigo Pizzeria!`
//   );
// } else if (confirmation === "2") {
//   alert(
//     `Ok! Please come back for some yummy food some other time! Have a great day!`
//   );
// } else {
//   exit(1);
// }
