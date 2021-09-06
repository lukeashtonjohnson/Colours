// selection of colours
let colours = [
  "Orangered",
  "Blue",
  "Yellow",
  "Green",
  "Orange",
  "Cyan",
  "DodgerBlue",
  "Violet",
  "Navy",
  "Purple",
  "YellowGreen",
  "OrangeRed",
  "SlateBlue",
  "Salmon",
  "Crimson",
  "HotPink",
  "Magenta"
];

// generate a random number
const randomNumber = max => Math.floor(Math.random() * max);

// collect how many colours there are in our selection of colours
let num = colours.length;

/* 
  using the DOM select the body and set the background colour 
  to a random colour found in the colours array
*/
const bgColor = () => document.body.style.backgroundColor = colours[randomNumber(num)];


/* 
  select the button with the id of #submit and add a click event, when the button is clicked call the bgColor function
*/
document.querySelector("#submit").addEventListener("click", bgColor);