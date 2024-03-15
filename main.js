const container = document.querySelector("#container");
const body = document.querySelector("html");

function createGrid(size) {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    
    const squareSize = 960 / size;
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        row.style.height = `${squareSize}px`;
        
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.backgroundColor = '#ccc';
            square.style.border = '1px solid #fff';
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const size = prompt("Enter a new grid size:");
    createGrid(size);
    // Contains all cells
const cell = document.querySelectorAll(".square");
// Leaving pixelated trail of the cells
cell.forEach(ce => ce.addEventListener("mouseover", () => {
    ce.style.backgroundColor = "gray";
}));
});

// Initialize grid with default size (16x16)
createGrid(16);

// Contains all cells
const cell = document.querySelectorAll(".square");
// Leaving pixelated trail of the cells
cell.forEach(ce => ce.addEventListener("mouseover", () => {
    ce.style.backgroundColor = "gray";
}));



