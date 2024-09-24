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


//Functions
function defaultLayout(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    let row = document.createElement("div");
    row.setAttribute("class", "grid-rows");
    row.style.flex = "1 1 auto";
    row.style.display = "flex";
    row.style.flexDirection = "row";
    container.appendChild(row);

    for (let i = 0; i < gridSize; i++) {
      let grid = document.createElement("div");
      grid.setAttribute("class", "grid");
      grid.style.border = "1px solid lightgrey";
      grid.style.flex = "1 1 auto";
      row.appendChild(grid);
    };
  };
};

function askForNewGrid() {
  let newGridSize = parseInt(prompt("enter grid size"));
  if (newGridSize <= 100) {
    generateNewGrids(newGridSize);
    draw();
  }
  else {
    alert("Only under a 100 grids can be made")
  };
};

