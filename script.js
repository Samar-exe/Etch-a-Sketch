// Set default values;
let defaultGridSize = 16;
let penColor = "black";
let gridBorder = "1px solid lightgrey";
let showGridBorder = true;
// Declaring some dom elements.
let container = document.querySelector(".grid-container");
let sizeChanger = document.querySelector(".size-button");
let rainbowModeButton = document.querySelector(".rainbow-mode");
let rainbowModeEnbaled = false;
let showGridsButton = document.querySelector(".show-grid-button");

defaultLayout(defaultGridSize);
draw();


// Events
sizeChanger.addEventListener("click", askForNewGrid);
rainbowModeButton.addEventListener("click", () => {
  if (rainbowModeEnbaled === false) {
    rainbowModeEnbaled = true;
    penColor = getRainbowColors();
    rainbowModeButton.style.backgroundColor = "var(--secondary)"
    rainbowModeButton.style.color = "var(--on-secondary)"
  }
  else {
    rainbowModeEnbaled = false;
    penColor = "black";
    rainbowModeButton.style.backgroundColor = "var(--primary)"
    rainbowModeButton.style.color = "var(--on-primary)"
  };
});


function draw() {
  // Found this very cool solution here: https://stackoverflow.com/questions/30817534/how-to-implement-mousemove-while-mousedown-pressed-js
  grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    for (let i = 0; i < 10; i++) {
      grid.addEventListener("mousemove", (e) => {
        if (e.buttons == 1) {
          e.target.style.backgroundColor = penColor;
          //if(rainbowModeEnbaled === true){
          //  penColor = getRainbowColors();
          //}
        };
      });
    };
  });
  //This will change the penColor to any random color when mouse enters grid.
  grids.forEach(grid => {
    for (let i = 0; i < 10; i++) {
      grid.addEventListener("mouseenter", (e) => {
        if (e.buttons == 1) {
          e.target.style.backgroundColor = penColor;
          if (rainbowModeEnbaled === true) {
            penColor = getRainbowColors();
          }
        };
      });
    };
  });
};

showGridsButton.addEventListener("click", () => {
  if (showGridBorder === true) {
    showGridBorder = false;
    gridBorder = "0";
    document.querySelectorAll(".grid").forEach(grid=>{
      grid.style.border = gridBorder;
    })
  }
  else {
    showGridBorder = true;
    gridBorder = "1px solid lightgrey";
    document.querySelectorAll(".grid").forEach(grid=>{
      grid.style.border = gridBorder;
    })
  };
})


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
      grid.style.border = gridBorder;
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

function generateNewGrids(gridSize) {
  clearGrid();
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
      grid.style.border = gridBorder;
      grid.style.flex = "1 1 auto";
      row.appendChild(grid);
    };
  };
  grids = document.querySelectorAll(".grid")
};

function clearGrid() {
  for (let index = 0; index < defaultGridSize; index++) {
    let rows = document.querySelectorAll(".grid-rows");
    rows.forEach(row => {
      container.removeChild(row);
    });
  };
};

function getRainbowColors() {
  colors = ['red', 'blue', 'green', 'teal', 'yellow', 'pink', 'violet', 'orange'];
  currentColor = shuffleColors(colors);
  return currentColor;
}

function shuffleColors(colors) {
  let len = colors.length;
  let currCol = colors[Math.floor(Math.random() * len)];
  return currCol;
}
