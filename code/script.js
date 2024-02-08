// Start here

// Step 1 - Welcome and introduction
// Your code goes here
  // window.confirm gör att de finns en "OK" -knapp
window.confirm(`Welcome Josephines Pizzeria. Ready to Start? - Click 'OK' to begin.`)

//användaren skriver sitt namn (detta sammanfoga sträng med variabler ${userName} )
let userName = prompt (`Please enter your name:`)
window.confirm(`
   Hi, ${userName}👋🏼
   Are you ready to order?
   `
)



// Step 2 - pizza, pasta, salad
let food = prompt (`
   What do you want to eat?
   
   1 - 🍕Pizza
   2 - 🍝Pasta
   3 - 🥙Salade

   Select the number of your choice:
  `
)
 if ("1"===food) {
  alert(`
  You have chosen 🍕Pizza, Yummy!
  Move on to choose the type of pizza
  `
  )
}

 else if("2"===food) {
  alert(`
  You have chosen 🍝Pasta, Yummy!
  Move on to choose the type of pasta
  `
  )
 }

 else if("3"===food) {
  alert(`
  You have chosen 🥙Salad, Yummy!
  Move on to choose the type of salad
  `
  )
}
 

// Step 3 - olika pizza, pasta, salad
let foodTyp 

if("1"===food){
  foodTyp = prompt (`
   Choose type of pizza🍕 

   1 - pizza margherita
   2 - kebab
   3 - capricciosa

   Select the number of your choice:
   ` 
  )
  if("1"===foodTyp) {
   alert(`
    You have chosen a pizza margherita!
    `
   )
  }
  else if("2"===foodTyp) {
   alert(`
   you have chosen a kebab!
   `
   )
  }
  else if("3"===foodTyp) {
   alert(`
    You have chosen a pizza capricciosa
    `
   )
  }
}

else if("2"===food){
  foodTyp = prompt (`
   Choose type of pasta🍝

   1 - pasta carbonara
   2 - pasta bolognese
   3 - pasta alfredo

   Select the number of your choice:
   `
  )
  if("1"===foodTyp) {
    alert(`
     You have chosen a pasta carbonara!
     `
    )
  }
  else if("2"===foodTyp) {
    alert(`
     You have chosen a pasta bolognese!
     `
    )
  }
  else if("3"===foodTyp) {
    alert(`
     You have chosen a pasta alfredo!
     `
    )
  }
}

else if ("3"===food){
  foodTyp = prompt (`
   Choose type of salad🥙

   1 - caesar salad
   2 - greek salad
   3 - tuna salad

   Select the number of your choice:
   `
  )
  if("1"===foodTyp) {
    alert(`
      You have chosen a caesar salad!
      `
    )
  }
  else if("2"===foodTyp) {
    alert(`
      You have chosen a greek salad!
      `
    )
  }
  else if("3"===foodTyp) {
    alert(`
      You have chosen a tuna salad!
      `
    )
  }
}

// Step 4 - Age
let age = prompt(`
  Is this order for an adult or a child?
  Enter your age:
  `
  )

  //göra om från string till int
  age = parseInt(age)
  
  //om äver 18
   if (age >= 18) {
  //pizza
   if("1"===food) {
    if("1"===foodTyp) {
      alert(`
        You have choice a adult size
        pizza margherita
        the price will be 10€
        `
      )
    }
    else if("2"===foodTyp) {
      alert(`
        You have choice a adult size
        kebab pizza
        the price will be 10€
        `
      )
    }
    else if("3"===foodTyp) {
      alert(`
        You have choice a adult size
        pizza capricciosa,
        the price will be 10€
        `
      )
    }
   }
   //pasta
   else if("2"===food) {
    if("1"===foodTyp) {
      alert(`
        You have choice a adult size
        pasta carbonara
        the price will be 10€
        `
      )
    }
    else if("2"===foodTyp) {
      alert(`
        You have choice a adult size
        pasta bolognese
        the price will be 10€
        `
      )
    }
    else if("3"===foodTyp) {
      alert(`
        You have choice a adult size
        pasta alfredo
        the price will be 10€
        `
      )
    }
   }
   //salad
   else if("3"===food) {
    if("1"===foodTyp) {
      alert(`
        You have choice a adult size
        caesar salad
        the price will be 10€
        `
      )
    }
    else if("2"===foodTyp) {
      alert(`
        You have choice a adult size
        greek salad
        the price will be 10€
        `
      )
    }
    else if("3"===foodTyp) {
      alert(`
        You have choice a adult size
        tuna salad
        the price will be 10€
        `
      )
    }
   }
  }
   else if(age < 18) {
     //pizza
   if("1"===food) {
    if("1"===foodTyp) {
      alert(`
        You have choice a kid size
        pizza margarira
        the price will be 4,5€
        `
      )
    }
    else if("2"===foodTyp) {
      alert(`
        You have choice a kid size
        kebab pizza
        the price will be 4,5€
        `
      )
    }
    else if("3"===foodTyp) {
      alert(`
        You have choice a kid size
        pizza capricciosa
        the price will be 4,5€
        `
      )
    }
   }
   //pasta
   else if("2"===food) {
    if("1"===foodTyp) {
      alert(`
        You have choice a kid size
        pasta carbonara
        the price will be 4,5€
        `
      )
    }
    else if("2"===foodTyp) {
      alert(`
        You have choice a kid size
        pasta bolognese
        the price will be 4,5€
        `
      )
    }
    else if("3"===foodTyp) {
      alert(`
        You have choice a kid size
        pasta alfredo
        the price will be 4,5€
        `
      )
    }
   }
   //salad
   else if("3"===food) {
    if("1"===foodTyp) {
      alert(`
        You have choice a kid size
        caesar salad
        the price will be 4,5€
        `
      )
    }
    else if("2"===foodTyp) {
      alert(`
        You have choice a kid size
        greek salad
        the price will be 4,5€
        `
      )
    }
    else if("3"===foodTyp) {
      alert(`
        You have choice a kid size
        tuna salad
        the price will be 4,5€
        `
      )
    }
   }
   }


// Step 5 - Order confirmation
 let confirmation

  if (age >= 18) {
    //pizza
     if("1"===food) {
      if("1"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size pizza margherita
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("2"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size kebab pizza
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("3"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size pizza capricciosa
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
     }
     //pasta
     else if("2"===food) {
      if("1"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size pasta carbonara
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("2"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size pasta bolognese
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("3"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size pasta alfredo
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
     }
     //salad
     else if("3"===food) {
      if("1"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size caesar salad
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("2"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size greek salad
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("3"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           adult size tuna salad
           the price will be 10€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
     }
    }
     else if(age < 18) {
       //pizza
     if("1"===food) {
      if("1"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           kid size pizza margherita
           the price will be 4,5€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("2"===foodTyp) {
        confirmation = prompt(`
           you have ordered: 
           kid size kebab pizza
           the price will be 4,5€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("3"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           kid size pizza capricciosa
           the price will be 4,5€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
     }
     //pasta
     else if("2"===food) {
      if("1"===foodTyp) {
        confirmation = prompt(`
           you have ordered: 
           kid size pasta carbonara
           the price will be 4,5€
           Do you want to place your order?🛒
          
           Confirm with Yes or No:
           `
        )
      }
      else if("2"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           kid size pasta bolognese
           the price will be 4,5€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("3"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           kid size pasta alfredo
           the price will be 4,5€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
     }
     //salad
     else if("3"===food) {
      if("1"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           kid size caesar salad
           the price will be 4,5€
           Do you want to place your order?🛒
          
           Confirm with Yes or No:
           `
        )
      }
      else if("2"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           kid size greek salad
           the price will be 4,5€
           Do you want to place your order?🛒
           
           Confirm with Yes or No:
           `
        )
      }
      else if("3"===foodTyp) {
        confirmation = prompt(`
           you have ordered:
           kid size tuna salad
           the price will be 4,5€
           Do you want to place your order?🛒
          
           Confirm with Yes or No:
           `
        )
      }
     }
     }

     if (confirmation === "yes") {
      alert(`
        Thank you for ordering from us!
        Your order is being prepared 👩🏼‍🍳
        `
      )
     }
     else if (confirmation=== "no") {
      alert( 
        `why?`
      )
     }
