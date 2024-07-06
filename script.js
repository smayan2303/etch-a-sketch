function CreateGrid(size) {
const container = document.querySelector(".container");
for(let i = 0; i < size; i++) {
    const col = document.createElement('div');
    col.classList.add("col");
    container.appendChild(col);

    for(let x = 0; x < size; x++) {
        const rows = document.createElement('div');
        rows.classList.add('row');
        col.appendChild(rows);
    }
}

const boxes = document.querySelectorAll("div.row");
boxes.forEach((div) => {
    div.addEventListener("mouseover", () =>
    {
        div.style.backgroundColor='rgb(200,0,255)';

    });
});
}

let gridSize;

const btn = document.querySelector("button");
btn.addEventListener("click", () =>{
    
    gridSize = parseInt(prompt("Enter the size of the square grid 1-100"));
    const divs = document.querySelectorAll("div.col");
    divs.forEach((element) => {
        element.remove();
    });
    CreateGrid(gridSize);
    btn.innerHTML = 'Change Grid Size';
});
