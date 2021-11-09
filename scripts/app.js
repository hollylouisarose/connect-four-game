const grid = document.querySelector('.grid')
const cells = []
let i = 0

const columnOne = []
const columnTwo = []
const columnThree = []
const columnFour = []
const columnFive = []
const columnSix = []

const createGrid = () => {
  for (i = 0; i < 42; i++){
    const cell = document.createElement('div')
    cell.setAttribute('id', i)
    cells.push(cell)
    grid.appendChild(cell)
    cell.textContent = i
  }
}

const setColumns = () => {
  for (i = 0; i <= 36; i += 6){
    cells.forEach(cell => {
      const id = parseFloat(cell.getAttribute('id'))
      if (id === i){
        cell.classList.add('column-one')
        columnOne.push(cell)
      }
    })
  }

  for (i = 1; i <= 37; i += 6){
    cells.forEach(cell => {
      const id = parseFloat(cell.getAttribute('id'))
      if (id === i){
        cell.classList.add('column-two')
        columnTwo.push(cell)
      }
    })
  }

  for (i = 2; i <= 38; i += 6){
    cells.forEach(cell => {
      const id = parseFloat(cell.getAttribute('id'))
      if (id === i){
        cell.classList.add('column-three')
        columnThree.push(cell)
      }
    })
  }

  for (i = 3; i <= 39; i += 6){
    cells.forEach(cell => {
      const id = parseFloat(cell.getAttribute('id'))
      if (id === i){
        cell.classList.add('column-four')
        columnFour.push(cell)
      }
    })
  }

  for (i = 4; i <= 40; i += 6){
    cells.forEach(cell => {
      const id = parseFloat(cell.getAttribute('id'))
      if (id === i){
        cell.classList.add('column-five')
        columnFive.push(cell)
      }
    })
  }

  for (i = 5; i <= 41; i += 6){
    cells.forEach(cell => {
      const id = parseFloat(cell.getAttribute('id'))
      if (id === i){
        cell.classList.add('column-six')
        columnSix.push(cell)
      }
    })
  }

}


const handleChoice = (e) => {
  cells.map((cell => {
    if (parseFloat(e.target.id) === parseFloat(cell.id)){
      console.log('choice', cell)
    }
  }))
}

grid.addEventListener('click', handleChoice)

createGrid()
setColumns()

