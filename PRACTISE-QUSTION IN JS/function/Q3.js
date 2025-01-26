//  Question 3--
// Create a function calculateDifference that takes two numbers as input and returns the absolute difference between them.Call the function with numbers 15 and 30. Print the result.

//  user input --
let first = parseInt(prompt("Enter the first number:"));
let second = parseInt(prompt("Enter the second number:"));

function calculateDifference(first, second) {
    let difference = first - second; 
    return difference;
}

let result = calculateDifference(first, second);
console.log("The difference between the numbers is:", result);



