import { 
    createMoveBar, 
    hit, 
    createBall,
    timerAndScore
 } from './bar&ball.js'

import { moveGoal } from './moveGoal.js'

const main = document.querySelector('.main')

export const renderGame = () => {
    const mainGame = document.createElement('div')
    mainGame.classList.add('main__game')
    main.appendChild(mainGame)
    
    const text = document.createElement('div')
    text.classList.add('main__text')
    text.textContent = 'Press Any key To Start'
    mainGame.appendChild(text)

    const game = document.createElement('div')
    game.classList.add('game')
    mainGame.appendChild(game)
    
    const gameBar = document.createElement('div')
    gameBar.classList.add('game__bar')
    game.appendChild(gameBar)

    const gameGoal = document.createElement('div')
    gameGoal.classList.add('game__goal') 
    game.appendChild(gameGoal)
}

renderGame()

export const text = document.querySelector('.main__text')

const startGame = () => {
    text.textContent = "Press Space to Launch Ball"

    createBall()
    moveGoal()
    timerAndScore()

    window.removeEventListener('keypress', startGame)
    window.addEventListener('keydown', createMoveBar)
    window.addEventListener('keydown', hit)
}

window.addEventListener('keypress', startGame)
