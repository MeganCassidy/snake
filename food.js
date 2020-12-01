import {onSnake, expandSnake} from './movement.js'
import {randomGridPosition} from './grid.js'
let food = getRandomFoodPosition();
const EXPANSION_RATE = 1; // the rate in which the snake grows as it eats pieces of food

export function update() {
    if (onSnake(food)) {  //if the snake is on the position 'food'
        expandSnake(EXPANSION_RATE)     // if true we will call the expand snake function
        food = getRandomFoodPosition() //setting the food to a new position 
    } 
}




export function draw(gameBoard) {
    
    const foodElement = document.createElement('div') //creating the food pieve at a particular xy coordinate on the grid
    foodElement.style.gridRowStart = food.y //setting x position depending on grid row start
    foodElement.style.gridColumnStart = food.x //setting y position depending on grid col start 
    foodElement.classList.add('food') // adding class 'food' to element to apply styles 
    gameBoard.appendChild(foodElement) // adding food element onto the gameboard
    
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}