import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5; //How many times per second the snake moves 

const snakeBody = [{x: 11, y: 11}]; // position of snake on grid
let newSegments = 0;

//currently writing function for the snake body to be updated as it moves.... 
export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >=0; i--) {
        snakeBody[i + 1] =  {...snakeBody[i] } // setting ...snakeBody as a new object. creating a duplicate of snake at position i and set that to our snake at i+1 
    } // shifting each element by one position (where the parent is in the snakes body)

    //Updating the head to where we are moving 
    
    snakeBody[0].x += inputDirection.x                // X Position: head is at position 0 in the snake body, adding to it some movement. 
    snakeBody[0].y += inputDirection.y                // Y Position  Y means to move down the board, -Y means to move up the board 
}




export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div') //creating the snake element at a particular xy coordinate on the grid
        snakeElement.style.gridRowStart = segment.y //setting x position depending on grid row start
        snakeElement.style.gridColumnStart = segment.x //setting y position depending on grid col start 
        snakeElement.classList.add('snake') // adding class 'snake' to element to apply styles 
        gameBoard.appendChild(snakeElement) // adding snake element onto the end 
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(post1, post2) {
    return post1.x === post2.x && post1.y === post2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push ({...snakeBody[snakeBody.length -1] })
    }

    newSegments = 0
}