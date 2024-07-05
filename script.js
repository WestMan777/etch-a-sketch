const addButton = document.querySelector('#add-button');
const clearButton = document.querySelector('#remove-button');
const drawButton = document.querySelector('#draw-button');
const eraseButton = document.querySelector('#erase-button');

function addGrid(){
    const canvasContainer = document.querySelector('#canvas-container');

    const newGrid = document.createElement('div');
    newGrid.classList.add('grid');
    newGrid.classList.add('container');

    let gridCount = prompt('How many pixels in this new grid?');

    if(gridCount <= 100){
        for(let i = 0; i < gridCount; i++){
            const newRow = document.createElement('div');
            newRow.classList.add('grid-row');
            newRow.classList.add('container');

            for(let i = 0; i < gridCount; i++){
                const newColumn = document.createElement('div');
                newColumn.setAttribute('id', 'box');
                newColumn.classList.add('grid-column');

                newRow.appendChild(newColumn);
            }

            newGrid.appendChild(newRow);
        }
        canvasContainer.appendChild(newGrid);
    }
    else{
        alert('grid count must be less than 100!');
    }
}

function clearGrid(){
    const canvasContainer = document.querySelector('#canvas-container');
    const childGrid = document.querySelector('.grid');

    canvasContainer.removeChild(childGrid);
}

const canvasContainer = document.querySelector('#canvas-container');




function colorBox(){
    const box = document.querySelector('#box');

    box.addEventListener("click", () => {
        alert("eerm");
    });

    
    //box.classList.add('.grid-color-black');
}

canvasContainer.addEventListener('mouseover', colorBox);
addButton.addEventListener('click', addGrid);
clearButton.addEventListener('click', clearGrid);