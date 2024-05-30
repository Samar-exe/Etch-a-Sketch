function redrawPad() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let newGrid = prompt("Enter new layout!");
  if (newGrid > 100) {
    return alert("The limit is 100");
  }
  for (let i = 0; i < newGrid; i++) {
    const div = document.createElement("div");
    div.className = "child-div";
    container.appendChild(div);
  }
  trail();
}
//Code for Trailing Effect.
function trail() {
  const divs = document.querySelectorAll(".child-div");
  divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = 
        ` rgb(${Math.floor(Math.random() * 256)},${Math.floor(
          Math.random() * 256
        )},${Math.floor(Math.random() * 256)})`
      ;
    });
    // div.addEventListener("mouseleave", () => {
    //   div.setAttribute("style", "background-color:white;");
    // });
  });
}

const container = document.querySelector("#container");
let grid = 256;
const btn = document.querySelector("#btn");

//code for redrawing Sketch Pad.
btn.addEventListener("click", redrawPad);

//Code for Creating child nodes.
for (let i = 0; i < grid; i++) {
  const div = document.createElement("div");
  div.className = "child-div";
  container.appendChild(div);
}

trail();
