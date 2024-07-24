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
            let rowNumber = i;
            const newRow = document.createElement('div');

            newRow.classList.add('grid-row');
            newRow.classList.add('container');
            newRow.setAttribute('id', 'row' + [i]);

            for(let i = 0; i < gridCount; i++){
                const newBox = document.createElement('div');

                newBox.classList.add('box');
                newBox.setAttribute('id', 'collumn' + [i] + 'row' + [rowNumber]);

                newRow.appendChild(newBox);
            }
            
            newGrid.appendChild(newRow);
        }
        canvasContainer.appendChild(newGrid);

        



        canvasContainer.addEventListener('mouseover', function(e){
            
            for(let i = 0; i < gridCount; i++){
                let rowNumber = i;

                for(let i = 0; i < gridCount; i++){
                    let boxCollumn = document.getElementById('collumn' + [i] + 'row' + [rowNumber]);

                    boxCollumn.addEventListener('mouseover', function(){
                        boxCollumn.style.backgroundColor = '#000';
                    });
                }
            }
        });
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

addButton.addEventListener('click', addGrid);
clearButton.addEventListener('click', clearGrid);