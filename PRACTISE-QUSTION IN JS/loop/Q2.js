// create a game where you start with any rondom game number . ask the usre to keep gussing the game number until enter  correct value . --

let gamenum = 20;
let user = prompt("enter a number:");
while (gamenum != user) {
    user = prompt("you entered a wrong number: -- guess again");
}
console.log("Congratulations");


