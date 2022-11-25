const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");


const color = document.querySelector(".color");




const RandomColor = function () {

 // console.log(colors[(Math.floor((Math.random()*4)))]); 
return colors[(Math.floor((Math.random()*4)))];


}


// add the "Eventhandler onto the button"
btn.onclick = function ()  {

  // console.log(Math.floor((Math.random()*4)));
color.innerHTML = RandomColor ();

document.body.style.backgroundColor = RandomColor ();
 // console.log ("Button was clicked");



} 







// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
