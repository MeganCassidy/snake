const GRID_SIZE = 21;

export function randomGridPosition() {  // Selecting random places on grid for food pieces 
    return {
        x: Math.floor(Math.random() * GRID_SIZE) +1,
        y: Math.floor(Math.random() * GRID_SIZE) +1 
    }
}

export function outsideGrid(position) {  // checking position on grid to determine if snake dies.
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}