// sum of two number ;

function sum_and_sub(sub1 , sub2 , sum1 , sum2){
    let sub =  sub1 + sub2 ;
    let sum =  sum1 - sum2 ;
    return {sub: sub , sum: sum}
}

let result = sum_and_sub(20,30,40,70);

console.log("total number after subtraction :",result.sub);
console.log("total number after addition",result.sum)




//  qustion 
/*
Ek function calculate banao jo:
4 arguments le:
num1, num2, num3, num4
Kya karna hai:
sum: num1 aur num2 ka sum nikale.
mul: num3 aur num4 ka multiplication kare.
Return:
Ek object return kare, jisme:
sum ho sum ka result.
mul ho multiplication ka result.
Output:
Console mein sum aur multiplication ko alag-alag print karo.
*/


function sum_and_multi(sum1,sum2,multi1,multi2){
    let sum = sum1 + sum2 ;
    let multi =  multi1 * multi2 ;
    return {sum: sum , multi: multi}

}

let result1 = sum_and_multi(20,30,40,3)

console.log("the total number of sum :",result1.sum);
console.log("the total number of multi",result1.multi)
