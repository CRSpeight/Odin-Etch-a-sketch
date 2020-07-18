const initGridSize = 16;
const grid = document.querySelector("#grid");
const cell = document.createElement("div");

grid.style.gridTemplateColumns = `repeat(${initGridSize}, 1fr)`;

for (let i = 1; i <= initGridSize * initGridSize; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = i;
  grid.appendChild(cell);
}

const gridCells = document.querySelectorAll(".cell");
gridCells.forEach((c) => {
  c.addEventListener("mouseover", (e) => {
    e.target.classList.add("coloredCell");
  });
});
