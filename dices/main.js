let myRandomNumber = Math.floor(Math.random() * 6 + 1)
let pcRandomNumber = Math.floor(Math.random() * 6 + 1)

console.log(myRandomNumber)
console.log(pcRandomNumber)

if (myRandomNumber > pcRandomNumber) {
    console.log("Player won")
} else if (myRandomNumber < pcRandomNumber) {
    console.log("Player lost")
} else {
    console.log("That's a tie")
}