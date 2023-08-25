const gameArea = document.querySelector('.game-area')

for (let i = 0; i < 342; i++) {
    const square = document.createElement('div')
    gameArea.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.game-area div'))

