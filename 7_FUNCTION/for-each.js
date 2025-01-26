//  for - each in a array --
let arr = [1,2,3,4,5];
arr.forEach((val) => {
    console.log(val, "manish")
});



//  for - each ---

let countries = ["India", "United States", "Canada", "Australia", "Germany", "France", "Japan", "Brazil", "South Africa", "United Kingdom"];

countries.forEach(function(element){
    console.log(countries)
});



// for each -- 

let color = ["red","green","black","white","orange","pink"]
color.forEach((colo , index) => {
    console.log(`index ${index} , student ${color}`)
});




//  with object an arrow function --

let stu_detail = {
    name : "manish tiwari",
    age : 20,
    cource : "BCA",
    job_company : "google",
};

// for each ---

Object.entries(stu_detail).forEach(([Key , value],index) =>{
    console.log(`index ${index} , key ${Key} value ${value}`)
});