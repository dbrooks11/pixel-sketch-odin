const gridLayout = document.querySelector(".grid.layout");
const colorChoice = document.querySelector("#color-choice");
const rows = document.querySelector("#range-rows");
const cols = document.querySelector("#range-columns");
const button = document.querySelector("#clear");
let rowNums;
let colNums;

let drawing = false;

let rainbowColor = ()=>{
    const ran1 = Math.floor(Math.random()*256);
    const ran2 = Math.floor(Math.random()*256);
    const ran3 = Math.floor(Math.random()*256);
    return `rgb(${ran1}, ${ran2},${ran3})`;
}


function createGrid() {
    clearGrid();
  
    
    if(parseInt(rows.value) > 0 && parseInt(rows.value) <= 100)
        rowNums = parseInt(rows.value);
    else
    rowNums = 16;

    if(parseInt(cols.value) > 0 && parseInt(cols.value) <= 100)
        colNums = parseInt(cols.value);
    else
    colNums = 16;
    // rows
    for(let i = 0; i < rowNums; i++) {
        const row = document.createElement("div");
        row.className = "grid-row";
        gridLayout.appendChild(row);

        //create cols inrows
        for(let k = 0; k < colNums; k++) {
            const col = document.createElement("div");
            col.className = "grid-col";
            row.appendChild(col);
            
            col.addEventListener('mousedown', () => {
                drawing = true;
                if (colorChoice.value == "rainbow") {
                    col.style.backgroundColor = rainbowColor();
                } else {
                    col.style.backgroundColor = colorChoice.value;
                }
            });
            
            col.addEventListener('mouseenter', () => {
                if (drawing) {
                    if (colorChoice.value == "rainbow") {
                        col.style.backgroundColor = rainbowColor();
                    } else {
                        col.style.backgroundColor = colorChoice.value;
                    }
                }
            });
        }
    }
}

function clearGrid(){
 gridLayout.textContent = "";
}

function reloadGrid(){
    gridLayout.textContent = "";
    createGrid();
}

// stop drawing 
document.addEventListener('mouseup', () => {
    drawing = false;
});

 
button.addEventListener("click", reloadGrid);
rows.addEventListener("input", createGrid);
cols.addEventListener("input", createGrid);

createGrid();





