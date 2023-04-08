

function maxnumber() {
let range = prompt("please enter the maximum number you want to guess between.");
    if (isNaN(range)) {
        alert("That is not a number please try again");
        return maxnumber();
    }
    else if (range <= 2) {
        alert("Please enter a larger range");
        return maxnumber();
    }
    else {
        return range;
    }
}
maxnumber();
console.log (range);


let num = Math.floor(Math.random() * 20) +1;

console.log(num);




function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message= document.getElementById("message");

    if(guess == num) {
        message.innerHTML = "You got it!";
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
    }
    else {
        message.innerHTML = "No, try a higher number.";
    }
}