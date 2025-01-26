// Question 1
// Write a function multiplyNumbers that takes two numbers as inputs and returns their product.
// Call the function with values 6 and 7 and print the result.--


// input for user --
let first = parseInt(prompt("enter a first number:-"));
let second = parseInt(prompt("enter a second number :-"));


//  function define --
function multiplyNumbers(first,second){
    let result = first * second ; 
    return result ;
}

//  function class --
let result = multiplyNumbers(first,second);
console.log("the total answer :-", result);
