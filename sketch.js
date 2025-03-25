const gridLayout = document.querySelector(".grid.layout");
const colorChoice = document.querySelector("#color-choice");
let drawing = false;

function createGrid() {

    // Create 16 rows
    for(let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = "grid-row";
        gridLayout.appendChild(row);

        //create cols inrows
        for(let k = 0; k < 16; k++) {
            const col = document.createElement("div");
            col.className = "grid-col";
            row.appendChild(col);
            
            // Add event listeners to cols
            col.addEventListener('mousedown', () => {
                drawing = true;
                col.style.backgroundColor = colorChoice.value;
            });
            
            col.addEventListener('mouseenter', () => {
                if (drawing) {
                    col.style.backgroundColor = colorChoice.value;
                }
            });
        }
    }
}

// Stop drawing when mouse is released anywhere on page
document.addEventListener('mouseup', () => {
    drawing = false;
});

createGrid();





