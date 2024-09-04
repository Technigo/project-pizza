# JavaScript Pizzeria

The assignment was to make a pizza order flow by using the JavaScript methods alert() and prompt(). 

## The Problem 
The only real problem I had with this assignment was that the whole site stop to function when there’s something broken in the code. CSS and HTML are more ”forgiving”. 

Other minor "problems"
I ”coded along” in CodePen to Amelies and Damiens instruction videos, and used the if else (https://codepen.io/joheri1/pen/RwzeYWa) that Damien showed on the tutorial. I wrote the below, and it didn’t work. 

if (mealchoice === 1) {
  alert(”Thanks, ${name}! You wish to order Pizza!”)
} 

After a while I figured that it must be because I’m using digits and not text. Tested ”, ’ and ´ until I spotted that the backtick/grave/grave accent was used in the first alert that came with the fork. Changed all string/text values to that specific tick and just like that, the code worked. This also made me discover that everything between two quotation marks turns into text, while the ${name} still function when using `.  So I used ”” for the meal choices (since it has to be only text) and for the alert I used ` since it has ${name} in it. 

${name} turned into a strikethrough text. When I hovered over it, it said ”'name' is deprecated.” Googled it, and read that the warning is being shown because the name variable may be removed in future versions. Not sure if it really affects my code, but to avoid any issues I changed it to $userName and the strikethough disappeared. 

## View it live
Netlify link: https://johannas-js-pizzeria.netlify.app/

