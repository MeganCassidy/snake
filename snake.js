
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,
getSnakeHead, snakeIntersection } from './movement.js'
import {update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost! Press OK to restart.')) {
            window.location.reload();
        }
        return
    }



    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}


function draw() {
    gameBoard.innerHTML = '' // Clear everything in our view so the old segments are removed 
    drawSnake(gameBoard)
    drawFood(gameBoard)
}



function checkDeath() { // function that will run to establish is snake dies 
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}