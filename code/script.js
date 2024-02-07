// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`

)


let userName = prompt("Enter your name here")
let chosenName = userName;
alert ("Hello" + " " + chosenName + "!")

// Step 2 - Food choice
// Your code goes here

let choice = prompt (`What food are we getting today? 
Please choose 
1 for Pizza,
2 for Salad
3 for Pasta` )
switch (choice){
  case "1":
    alert("You chose Pizza");
    break;
    case "2":
      alert("You chose Salad");
      break;
      case "3":
        alert("You chose Pasta");
        break;
        default:
          alert("Invalid choice. Please chose 1, 2 or 3")
        
}
// Step 3 - Subtype choice
// Your code goes here

if (choice === "1"){
  let pizzaSubchoice = prompt ("Choose extra: Please choose Small, Medium or Grande")
  alert (`Yoou chose Pizza and selected ${pizzaSubchoice} size.`)
} else if (choice === "2") {
  let saladType = prompt ("Choose extra: Please choose Beetroot, Greek, Plane")
  alert(`You chose salad and selected ${saladType} type.`)
} else if (choice == "3") {
  let pastaStyle = prompt ("Choose extra: Please choose Penne, Spagetti, Tagliatelle, ")
  alert(`You chose pasta and selected ${pastaStyle} style.`)
} else {
  prompt ("Please choose a numner between 1 and 3")}


// Step 4 - Age
// Your code goes here

 let userAge = prompt ("Please enter your age")
 let age = parseInt(userAge)
 let price;
 if(age >= 18){
  price = 10;
 alert(`The price will be ${price}`)
} else if (age <18){
  price = 5;
  alert (`Kids menu, that will be ${price}`)
}


// Step 5 - Order confirmation
// Your code goes here

let payment = prompt("Confirm payment? Type in Yes or No");

if (payment === "Yes") {
    let confirmPurchase = confirm("Yes");

    if (confirmPurchase) {
        alert("Purchase confirmed. Thank you!");
      
    } else {
        alert("Purchase cancelled. If you change your mind, feel free to return!");
    }

  }
 //thank you message
alert ( `Have a nice day!`)