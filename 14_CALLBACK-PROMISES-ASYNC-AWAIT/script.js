//  syncronous code --
function sub(a,b){
    return(a-b);    
}

function multi(a,b){
    return(a*b);    
}

console.log(multi(10,4));
console.log(sub(10,4));



//  asyncronous code --


function multi(a,b){
    setTimeout(() => {
        console.log("code are  succsful run")
    },2000);
    return (a*b);
}

console.log(multi(3,4))




//  asyncronous code  practise qustion  -- 
function add(num1,num2){
    num1 = parseInt(prompt("enter a first number:"))
    num2 = parseInt(prompt("enter a second number:-"))
    console.log("run before the statment");
    setTimeout(() =>{
        console.log("code are  succsful run after 6 seconds");
    },6000)
    return (num1 + num2)

}

console.log(add())