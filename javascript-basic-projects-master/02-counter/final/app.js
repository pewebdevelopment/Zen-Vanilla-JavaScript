// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log();

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e);
    // const classes = e.currentTarget.classList;
    const classes = e.target.classList;

    if (classes.contains("decrease")) {
      count--;
    }
    else if (classes.contains("increase")) {

      count++;
    }
    else {

      count = 0;
    }


    if (count > 0) {

      value.style.color = "green";
    }


    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;

  })

})



// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });
