// Start here

// Step 1 - Welcome and introduction
// Your code goes here//
alert(
  `Welcome to the Arts and craft of Javascript. Ready for this? - Click 'OK' get started.`
  )

//name//
const userName = prompt(`please enter your name`);

//greeting//
alert(`Hey ${userName}! Let's see what you want to dive into.`)

alert(`To the next step, choose :D`)


// Step 2 - craft selection
const craftChoice = prompt(`Select your craft:
  1 - Knitting
  2 - Tufting
  3 - Embroidery
  Please select the number that you're intrested in`);


// Step 3 - Subtype choice
// Your code goes here
 let selectedCraft = "";

 if (craftChoice === "1") {
    selectedCraft = "Knitting";
 }  else if (craftChoice === "2") {
    selectedCraft = "Tufting";
 }  else if (craftChoice === "3") {
    selectedCraft = "Embroidery";
 }

 //alert("This choice is invalid, choose another number");
//ProcessingInstruction.exit(1);

alert(`You've chosen ${selectedCraft}`);

let item = "";
let color = "";

switch (selectedCraft) {
  case "Knitting":
    item = prompt(`Select an item you want to knit:
    1 - Socs
    2 - Gloves
    3 - Scarf
    Please enter the number of your choice`);
      color = ["Socs", "Gloves", "Scarf"];
      break;

   case "Tufting":
    item = prompt(`Select an item you want to knit:
     1 - Rug
     2 - Sculpture
     3 - Jacket
    Please enter the number of your choice`);
    color = ["Rug", "Sculpture", "Jacket"];
    break;

  case "Embroidery":
    item = prompt(`Select an item you want to knit:
      1 - Tablecloth
      2 - Wallhangings
      3 - Badge
      Please enter the number of your choice`);
      color = ["Tablecloth", "Wallhangings", "Badge"];
      break;        
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
