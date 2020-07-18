const grid = document.querySelector("#grid");
const cell = document.createElement("div");
const clrBtn = document.querySelector("#clearBtn");

function gridBuilder(gridSize = 16) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (let i = 1; i <= gridSize * gridSize; i++) {
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
}

function clearGrid() {
  let desiredCells = prompt(
    "How many squares wide and tall do you want the grid?",
    "16"
  );
  gridBuilder(desiredCells);
}

clrBtn.addEventListener("click", () => {
  clearGrid();
});

gridBuilder();
