let myRandomNumber = Math.floor(Math.random() * 6 + 1)
let pcRandomNumber = Math.floor(Math.random() * 6 + 1)
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")
const button = document.getElementById("button")
const result = document.querySelector("h3")

// if (myRandomNumber > pcRandomNumber) {
//     console.log("Player won")
// } else if (myRandomNumber < pcRandomNumber) {
//     console.log("Player lost")
// } else {
//     console.log("That's a tie")
// }

let games_played = 0

button.addEventListener("click", () => {
    games_played++
    if (games_played > 3) {
        result.innerText = `Questa è la partita numero ${games_played} che giochi, mica sei un po' ludopatico?`
    }
    const animation1 = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 6 + 1)
        dice1.style.backgroundImage = `url(img/dice-${randomNumber}.png)`
    }, 50)
    const animation2 = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 6 + 1)
        dice2.style.backgroundImage = `url(img/dice-${randomNumber}.png)`
    }, 50)

    setTimeout(stopAnimation, 1000)
    function stopAnimation() {
        let stringDice1 = dice1.style.backgroundImage
        let stringDice2 = dice2.style.backgroundImage
        let arraydice1 = Array.from(stringDice1)
        let arraydice2 = Array.from(stringDice2)
        let numberdice1 = Number(arraydice1[14])
        let numberdice2 = Number(arraydice2[14])

        clearInterval(animation1)
        clearInterval(animation2)
        if (numberdice1 > numberdice2) {
            result.innerText = "Hai vinto! Clicca di nuovo per rigiocare"
        } else if (numberdice1 < numberdice2) {
            result.innerText = "Hai perso, mi dispiace! Clicca di nuovo per rigiocare"
        }
        else {
            result.innerText = "E' un pareggio"
        }
    }
})

result.innertext = "Ciao"




