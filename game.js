const gridContainer = document.querySelector('.container');
const gridSide = 16;
const gridTotal = gridSide * gridSide;
const reset = document.querySelector('.reset');

function drawGrid(gridTotal, gridSide) {
    let sizeOfSquare = 500/gridSide;
    for (i = 0; i < gridTotal;i++) {
        div = document.createElement('div');
        div.setAttribute('id', 'gridBox');
        div.style.height = `${sizeOfSquare}px`;
        div.style.width = `${sizeOfSquare}px`;
        gridContainer.appendChild(div);
    }
}

function blackHover() {
    let boxes = document.querySelectorAll('#gridBox');
	boxes.forEach((box) => {
		box.addEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = 'green';
		});
	});
}

function createGridNew() {
    const number = prompt('How large should the new grid be?');
    let boxes = document.querySelectorAll('#gridBox');
    boxes.forEach((box) => {
        box.parentNode.removeChild(box);
    })
    drawGrid(number*number, number);
}

drawGrid(gridTotal,gridSide);
blackHover();

reset.addEventListener('click', () => {
    createGridNew();
    blackHover();
})

