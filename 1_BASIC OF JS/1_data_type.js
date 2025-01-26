// Data types in JavaScript

// Primitive data types
let name = "manish tiwari"; // String

let number = 8279810463; // Number

let today_rain = true; // Boolean

let profession; // Undefined

console.log(profession); // Output: undefined

let empty_value = null; // Null
let large_number = 82798104639717478998n; // BigInt (add 'n' at the end for BigInt)
let uniqueId = Symbol("id"); // Symbol for unique ID

console.log(name, number, today_rain, profession, empty_value, large_number, uniqueId); 







// Non-primitive data type

// Object
let person = {
    name: "manish tiwari", 
    age: 20, 
    course: "bca" 
};
console.log("object with person-",person);




// arrys--
let fruits = ["apple"," banana" ,"papaya"];
console.log("array with fruits-",fruits)






// function --
function student_details(name , age ,  cource   )
{
    return `hello my name is ${name} my age ${age} cource ${cource}`  ; 
}
console.log(student_details ("manish" , 20 , "java-script" ))



;