const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

let myRandomColor = "#";



let RandomColor = function () {

 // console.log(colors[(Math.floor((Math.random()*4)))]); 
// return colors[(Math.floor((Math.random()*4)))];
for (i=0; i<6; i++)

{
myRandomColor += (hex[(Math.floor(Math.random()*hex.length))]);

}

return myRandomColor;

}


// add the "Eventhandler onto the button"
btn.onclick = function ()  {

myRandomColor = "#";
let BGcolour = RandomColor();
  // console.log(Math.floor((Math.random()*4)));
color.textContent = (BGcolour);

document.body.style.backgroundColor = (BGcolour);
 // console.log ("Button was clicked");



} 




// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }
//   // console.log(hexColor);

//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }
