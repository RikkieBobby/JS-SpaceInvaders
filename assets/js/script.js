const gameArea = document.querySelector('.game-area')
let currentShooterIndex = 350

for (let i = 0; i < 360; i++) {
    const square = document.createElement('div')
    gameArea.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.game-area div'))

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    20,21,22,23,24,25,26,27,28,29,
    40,41,42,43,44,45,46,47,48,49
]

function placeInvaders() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
    }
}

placeInvaders()

function placeShooter() {
    squares[currentShooterIndex].classList.add('shooter')
}

placeShooter()