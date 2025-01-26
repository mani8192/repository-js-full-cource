//  method in array -- 

//  add a element in array--
//  1 - push () --

let fruit = ["mango" , "apple" , "orange", "banana",];
let fruits = fruit.push("grapesh", "papaya", "kiwi")
console.log(fruit,fruits)

//  2 -- unshift --

let color = ["red", "green", "black", "white"];
let color1 = color.unshift("blue","purpol", "skyblue");
console.log(color,color1);



//  remove in array --

//  pop --

let number = [2,3,4,5,6,7,8,9];
number.pop();
console.log(number)


//  shift ()--

let food_items = ["meggi" , "tamato", "patato", "burger","pizza", "noodels"];
food_items.shift();
console.log(food_items)



//  modifing --

//  1 - slice--

let hero_name = ["Superman" ,"Batman","Spider-Man","Iron_Man", "Captain_merica" , "Thor" , "Wonder_Woman" , "Hulk" , "Black_Panther" , "Aquaman"];
let sliced = hero_name.slice(0,7)
console.log(sliced,hero_name)
    


//  splice()---

let companys = ["Google" ,"Apple" ,"Microsoft" ,"Amazon" ," Facebook (Meta)" ,"Tesla" , "IBM", "Samsung", "Intel", "Oracle"];
let new_add = companys.splice(3,1,"Netflix") //add element
let new_data = companys.splice(6,1)  //delete element

console.log(new_add,companys);
console.log(new_data,companys);
console.log(companys.length) // length define --
