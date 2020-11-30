export const SNAKE_SPEED = 2; //How many times per second the snake moves 

const snakeBody = [{x: 11, y: 11}]; // position of snake on grid

//currently writing function for the snake body to be updated as it moves.... 
export function update() {
    for (let i = snakeBody.length - 2; i >=0; i--) {
        snakeBody[i + 1] = {...snakeBody[i] }
    }
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div') //creating the snake element at a particular xy coordinate on the grid
        snakeElement.style.gridRowStart = segment.x //setting x position depending on grid row start
        snakeElement.style.gridColumnStart = segment.y //setting y position depending on grid col start 
        snakeElement.classList.add('snake') // adding class 'snake' to element to apply styles 
        gameBoard.appendChild(snakeElement) // adding snake element onto the end 
    })
}