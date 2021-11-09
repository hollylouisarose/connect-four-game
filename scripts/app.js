const grid = document.querySelector('.grid')
const cells = []
let i = 0

const createGrid = () => {
  for (i = 0; i < 42; i++){
    const cell = document.createElement('div')
    cell.setAttribute('data-index', i)
    cells.push(cell)
    grid.appendChild(cell)
    cell.textContent = i
  }
}

createGrid()