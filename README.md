# JavaScript Pizzeria

The assignment was to make a pizza order flow by using the JavaScript methods alert() and prompt(). 

## The Problem 
The biggest problem I had with this assignment was that the whole site stop to function when there’s something broken in the code. CSS and HTML are more ”forgiving”. 

Other minor "problems"
I ”coded along” in CodePen to Amelies and Damiens instruction videos, and used the if else (https://codepen.io/joheri1/pen/RwzeYWa) that Damien showed on the tutorial. I wrote the below, and it didn’t work. 

if (mealchoice === 1) {
  alert(”Thanks, ${name}! You wish to order Pizza!”)
}

After a while I figured that it must be because I’m using digits and not text. Tested ”, ’ and ´ until I spotted that the backtick/grave/grave accent was used in the first alert that came with the fork. Changed all string/text values to that specific tick and just like that, the code worked. This also made me discover that everything between two quotation marks turns into text, while the ${name} still function when using `.  So I used ”” for the meal choices (since it has to be only text) and for the alert I used ` since it has ${name} in it. 

Old variable? 
${name} turned into a strikethrough text. When I hovered over it, it said ”'name' is deprecated.” Googled it, and read that the warning is being shown because the name variable may be removed in future versions. Not sure if it really affects my code, but to avoid any issues I changed it to $userName and the strikethough disappeared. 

Nesting
At one point when my code didn't work, it was because of a nesting problem. That I couldn't solve myself, because everytime I saved the code, it moved to the left hand side. Asked ChatGPT how to solve this and to fix the nesting issue for me without edit the code itself, and it did. It also asked me to uncheck "formatOnSave" under settings, and I did.  

## If I had more time 
I would check if there's a way to avoid repeating different phrases (Like "`Thanks, ${userName}! You wish to order...") and parts of the code. I copy/pasted different sections of my code (like the Pizza else/if to the Pasta and Salad) and did minor changes. It must be an easier way to do this. 

I would also like to create a loop, so you don't have to start all over when you select a invalid option. 

Maybe add ingredients to the different dishes, that the orderer can deselect? Add more than one dish at the time, etc. 

## View it live
Netlify link: https://johannas-js-pizzeria.netlify.app/

