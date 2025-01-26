//  for a given array with marks of stuent [85 , 44 , 55 , 78,66,47] find avrege marks of the entire class .. 

let number = [85 , 44 , 55 , 78,66,47];
let sum = 0;

for(let j = 0 ; j < number.length ; j++){ 
    sum += j
}
let avrage =   sum / number.length ;
console.log(`the sum of number = ${avrage}`)
