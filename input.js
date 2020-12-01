let inputDirection = { x:0, y:0 };
let lastInputDirection = { x:0, y:0 };

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break // if we are currently down, ignore the below code 
            inputDirection = { x: 0, y: -1} //-1 on the Y axis moves up 
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break // if we are currently up, ignore the below code 
            inputDirection = { x: 0, y: 1} //+1 on the Y axis moves down 
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break // if we are currently right, ignore the below code 
            inputDirection = { x: -1, y: 0} //-1 on the X axis moves left
            break 
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break // if we are currently left, ignore the below code 
            inputDirection = { x: 1, y: 0} //1 on the X axis moves right 
            break           
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection // Checks as the snake cannot move back on itself 
    return inputDirection
}

