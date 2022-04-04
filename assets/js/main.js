const squareItem = document.querySelectorAll('.line-item')
const selectedPlayer = document.querySelector('#selected-player')
const btnReset = document.querySelector('.reset-btn')
const playerWinner = document.querySelector('#selected-winner')


squareItem.forEach(e => {
    e.addEventListener('click', square)
})

btnReset.addEventListener('click', reset)

let player, winner = null

playerChange('X')

function square(square) {

    if (winner !== null) {
        return
    }

    let id = square.target.id
    let squareEl = document.getElementById(id)

    if (squareEl.innerHTML !== '-') {
        return
    }

    squareEl.innerHTML = player
    squareEl.style.color = '#364146'

    if (player === 'X') {
        player = '0'
    } else {
        player = 'X'
    }

    playerChange(player)
    checkWinner()
}

function playerChange(value) {
    player = value
    selectedPlayer.innerHTML = player
}

function checkWinner() {
    let square1 = document.getElementById(1)
    let square2 = document.getElementById(2)
    let square3 = document.getElementById(3)
    let square4 = document.getElementById(4)
    let square5 = document.getElementById(5)
    let square6 = document.getElementById(6)
    let square7 = document.getElementById(7)
    let square8 = document.getElementById(8)
    let square9 = document.getElementById(9)

    checkSequence(square1, square2, square3)

    checkSequence(square4, square5, square6)

    checkSequence(square7, square8, square9)

    checkSequence(square1, square4, square7)

    checkSequence(square1, square4, square7)

    checkSequence(square2, square5, square8)

    checkSequence(square3, square6, square9)

    checkSequence(square1, square5, square9)

    checkSequence(square3, square5, square7)
}

function alterWinner(square) {
    winner = square.innerHTML
    playerWinner.innerHTML = winner
}

function alterSquareColor(square1, square2, square3) {
    let squares = [square1, square2, square3]
    squares.forEach(e => {
        e.style.background = '#00aeff'
        e.style.color = '#fff'
    })
}

function checkSequence(square1, square2, square3) {
    let equals = false

    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        equals = true
        alterWinner(square1)
        alterSquareColor(square1, square2, square3)
    }

    return equals
}

function reset() {
    winner = null
    playerWinner.innerHTML = ''

    squareItem.forEach(e => {
        e.innerHTML = '-'
        e.style.color = '#ddd'
        e.style.background = '#dddddd'
    })
}