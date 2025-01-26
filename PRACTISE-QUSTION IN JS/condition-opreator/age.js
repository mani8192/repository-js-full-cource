//  age check -- 

let user = prompt("Enter your age:");

if (user < 18) {
    console.log("Can't vote, you are under 18.");
} else if (user == 18) {
    console.log("You can vote, you just turned 18!");
} else {
    console.log("You can vote, you are above 18.");
}