/* 
name : "rahul sharma ,"
age : 20 ,
designation : "software devloper",
location : "delhi",

*/

let employe_id = {
    name : "Rahul Sharma",
    age : 25,
    designation : "SoftWare-devloper",
    location : "Delhi",
};

Object.entries(employe_id).forEach(([key , value],index)=>{
    console.log(`index : ${index} , key :${key} value of :-${value}`)
})