/* 
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "White"
};
*/

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "White"
};

Object.entries(car).forEach(([key , value],index)=>{
    console.log(`index ${index} , key${key} , value${value}`)
});
