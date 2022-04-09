export let yGoal = 0

const randomMove = () => {
    return Math.floor(Math.random() * 400 - 200)
}

let random = randomMove()

export const moveGoal = () => {
    const gameGoal = document.querySelector('.game__goal')

    setInterval(() => {
        if (Math.sign(random) === -1) {
            yGoal -= 1

            gameGoal.style.transform = `translateY(${yGoal}px)`

            if (yGoal <= random) {
                random = randomMove()
            }
        }

        if (Math.sign(random) === 1) {
            yGoal += 1

            gameGoal.style.transform = `translateY(${yGoal}px)`

            if (yGoal >= random) {
                random = randomMove()
           }
        }
    }, 1000 / 60)
}
