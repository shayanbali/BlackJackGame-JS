let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2

let sum = firstCard + secondCard 
let hasBlackjack = false
let isAlive = true

console.log(firstCard, secondCard, sum)


if (sum < 21) {
    console.log("Do you want to draw new card?")
} else if (sum == 21) {
    console.log("you have got blackjack")
    hasBlackjack = true
} else if (sum > 21) {
    console.log("You're out of the game :((")
    isAlive = false
}