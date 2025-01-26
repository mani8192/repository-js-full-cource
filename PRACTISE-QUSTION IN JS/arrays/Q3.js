// create an array to store companies -> [" boombeng" ,  "microsoft" , " uber" , " google", "IBM" , "facebook"]; 

let companise = [" boombeng" ,  "microsoft" , " uber" , " google", "IBM" , "facebook"]; 
console.log(companise);

// a -  remove the first company from the array -- 
// companise.shift(companise);
// console.log(companise)

//  b -- remoove uber & Add ( OLA) in it place --
companise.splice(2,1,"OLA")
console.log(companise);


//  c -- add Amazon at the end --
companise.push("amazon");
console.log(companise);



