const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "child-div";
  container.appendChild(div);
}
const divs = document.querySelectorAll(".child-div");
divs.forEach((div)=> {
    div.addEventListener("mouseenter",()=>{
        div.setAttribute("style","background-color:pink;");
    });
    div.addEventListener("mouseleave",()=>{
        div.setAttribute("style","background-color:white;");
    });
});
