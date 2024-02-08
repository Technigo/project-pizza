// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to the Cheeziest Pizzeria. 
Ready to order some delicious food?
  
  Click 'OK' to begin.`
)
// Step 2 - Food choice
// Your code goes here


const nameInput = prompt(
  `What is your name?`
)

if (nameInput === "") {
  alert(
    `Please reload the page, write your name to procees`)
  exit(1)
} else if (nameInput != null) {
  alert(
    `Welcome ${nameInput}!
    
Let's begin.
We'll make sure to fill your belly!`
  )
}