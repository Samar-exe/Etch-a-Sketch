// Set default values;
let defaultGridSize = 16;
let penColor = "black";

// Declaring some dom elements.
let sizeChanger = document.querySelector(".size-button")
let container = document.querySelector(".grid-container");


defaultLayout(defaultGridSize);
draw();


// Events
sizeChanger.addEventListener("click", askForNewGrid);

function draw() {
// Found this very cool solution here: https://stackoverflow.com/questions/30817534/how-to-implement-mousemove-while-mousedown-pressed-js
  grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    grid.addEventListener("mousemove", (e) => {
      if (e.buttons == 1) {
        e.target.style.backgroundColor = penColor;
      };
    });
  });
}


