// PLAN
// store btn1 as a variable
// // store div1 as a variable
// create function to change the colour of div1 each time btn1 is clicked:

// Don't used hex: hex needs to be converted because browsers may not store in the same format used.


const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  const div1 = document.getElementById("div1");
  // specify what you want to change in the targeted element: const currentColor = div1.style.backgroundColor;
  const currentColour = div1.style.backgroundColor;
  
  if (currentColour === "rgb(131, 197, 190)") {
    div1.style.backgroundColor = "rgb(255, 221, 202)";
  } else {
    div1.style.backgroundColor = "rgb(131, 197, 190)";
  }
});



