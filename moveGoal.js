export let yAxis = 0

const randomMove = () => {
    return Math.floor(Math.random() * (325 - -325) + -325)
}

let random = randomMove()

export const moveGoal = () => {
    const gameGoal = document.querySelector('.game__goal')

    setInterval(() => {
        if (Math.sign(random) === -1) {
            yAxis -= 1

            gameGoal.style.transform = `translateY(${yAxis}px)`

            if (yAxis <= random) {
                random = randomMove()
            }
        }

        if (Math.sign(random) === 1) {
            yAxis += 1

            gameGoal.style.transform = `translateY(${yAxis}px)`

            if (yAxis >= random) {
                random = randomMove()
           }
        }
    }, 1000 / 60)
}
