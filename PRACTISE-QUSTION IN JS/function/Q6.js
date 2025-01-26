/*
Question 1: Find the Maximum Number
Ek function banao jo 3 numbers ko input ke roop mein lega aur unmein se sabse bada number return kare.

Function ka naam ho findMax.
Parameters: num1, num2, num3.
Return: Largest number from the three inputs.*/

let first = parseInt(prompt("Enter a first number:"));
let second = parseInt(prompt("Enter a second number:"));
let third = parseInt(prompt("Enter a third number:"));

function findMax(first, second, third) {
    let max;
    if (first >= second && first >= third) {
        max = first;
        console.log("First number is the largest: " + max);
    } else if (second >= first && second >= third) {
        max = second;
        console.log("Second number is the largest: " + max);
    } else {
        max = third;
        console.log("Third number is the largest: " + max);
    }

    // Returning the maximum number
    return max;
}

let result = findMax(first, second, third);
console.log("The largest number is: " + result);




