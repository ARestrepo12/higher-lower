let maxNum = 0
while (true) {
    let enterNum = prompt('Plese enter the maximum number you want to guess between.')
    maxNum = Math.round(parseFloat(enterNum))
    if (!isNaN(maxNum) && maxNum > 0) {
        break
    }
    alert('Please enter a positive number')
}

let num = maxNum

let message2 = document.getElementById('message2')
message2.innerHTML = `Guess a number between 1 and ${num}`

let randomNum = Math.floor(Math.random() * num) + 1
console.log(randomNum)

let countGuess = 0
let count = []

let rightNum = false
while (!rightNum) {
    const guessBtn = document.getElementById('guessBtn')
    guessBtn.addEventListener('click', do_guess)

    function do_guess() {
        let inputguess = document.getElementById('guess').value
        let guess1 = Math.round(Number(inputguess))
        let message = document.getElementById('message')

        if (count.includes(guess1)) {
            message.innerHTML = 'You guessed that already, try another number.';
        } else if(isNaN(guess1)) {
            message.innerHTML = 'That input is not a number.'
        } else if (guess1 > num || guess1 < 1) {
            message.innerHTML = 'That number is not in range, please try again.'
        } else if (guess1 >= 1 && guess1 <= num) {
            count.push(guess1)
            countGuess++
            if (guess1 != randomNum) {
                const hint = 
                guess1 > randomNum ? ' a lower number' : ' a higher number'
                message.innerHTML = `try guessing ${hint}`
            } else {
                message.innerHTML = `Congratulations! you got it right (${guess1}), it took you ${count.length} tries and your guesses were ${count}.`
            }
        } else {
            return
        }
    }
    rightNum = true

}