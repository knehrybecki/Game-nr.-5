import { yGoal } from './moveGoal.js'
import { text } from './script.js'

const scores = document.querySelector('.score-time')

let score = 0
let time = 60

export const timerAndScore = () => {
    const timer = setInterval(() => {
        time--

        if (!time) {
            clearInterval(timer)

            alert(`The End Game! Your Score is: ${score}`)

            window.location.reload()
        }

        const result = time.toString().padStart(2, '0')

        scores.textContent = `00:${result} / Score: ${score}`
    }, 1000)
}

export const createBall = () => {
    const gameBar = document.querySelector('.game__bar')

    const ball = document.createElement('div')
    ball.classList.add('ball')
    gameBar.appendChild(ball)
}

let yBar = 0

export const createMoveBar = event => {    
    const gameBar = document.querySelector('.game__bar')

    if (event.key === 'ArrowUp') {
        if (yBar <= -200) {
            if (event.key === 'ArrowUp') {
                return
            }
        }

        yBar -= 10

        gameBar.style.transform = `translateY(${yBar}px)`
    }

    if (event.key === 'ArrowDown') {
        if (yBar >= 200) {
            if (event.key === 'ArrowDown') {
                return
            }
        }

        yBar += 10

        gameBar.style.transform = `translateY(${yBar}px)`
    }
}

export const hit = event => { 
    if (event.code === 'Space') {   
        ball() 

        text.style.display = "none"

        window.removeEventListener('keydown', createMoveBar)
        window.removeEventListener('keydown', hit)
    }
}

let x = 0
let rotate = 0

const ball = () => {
    const ball = document.querySelector('.ball')
    const gameGoal = document.querySelector('.game__goal')

    const move = setInterval(() => {
        x += 15
        rotate += 5

        ball.style.transform = `translate(${x}px)`
        ball.style.transform += `rotate(${rotate}deg)`

        if (x > 1000) {
            if (Math.sign(yGoal) === 1) {
                if (yBar <= yGoal + 50 && yBar >= yGoal - 50) {
                    score++
                    scores.textContent = `00:${time} / Score: ${score}`

                    gameGoal.classList.add('hit')
                    
                    setTimeout(() => {
                        gameGoal.classList.remove('hit')
                    }, 500);
                }
            }

            if (Math.sign(yGoal) === -1) {
                if (yBar >= yGoal - 50 && yBar <= yGoal + 50) {
                    score++
                    scores.textContent = `00:${time} / Score: ${score}`

                    gameGoal.classList.add('hit')

                    setTimeout(() => {
                        gameGoal.classList.remove('hit')
                    }, 500);
                }
            }

            window.addEventListener('keydown', createMoveBar)
            window.addEventListener('keydown', hit)

            x = 0
            rotate = 0

            ball.style.transform = `translate(${x}px)`
            ball.style.transform = `rotate(${rotate}deg)`

            clearInterval(move)  
        }
    }, 1000/60)
}
