// Question 2--
// Write a function isEven that takes a number as input and checks if the number is even or odd. If even, print "The number is even"; otherwise, print "The number is odd."


function checks_number(number){
    if(number % 2 === 0){
    console.log("this is even number", number);
}
else{
    console.log("this is a odd number :-",number)
}
}

let user = parseInt(prompt("enter a number:-"))
checks_number(user)
