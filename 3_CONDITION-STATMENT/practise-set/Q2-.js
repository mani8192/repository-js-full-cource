//  write a code which can give grades to student according th=o thier score ..

/* 
90  - 100 A 
70 - 89 B
60 _ 69 C 
50 - 59 D 
0 - 49 fail .
*/

let marks = 900;
let grade ;

if (marks >= 90 && marks <=100){
    grade = "A";
}

else if(marks >= 70 && marks <=89){
    grade = "B";
}

else if (marks >= 60 && marks <= 69){
    grade = "C";
}

else if (marks >= 50 && marks <= 59){
    grade = "D";
}

else if (marks >= 0 && marks <= 49){
    grade = "fail";
}

else{
    grade = "invalide number"
}

console.log("your grade:",grade)