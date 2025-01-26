let heeading = document.getElementById("heading")
console.log(heeading)
// console.dir(window)
let cla = document.getElementsByClassName("impo")
console.log(cla)

// all slector --
const all = document.querySelector("h1")
// console.log(all)


const all1 = document.querySelectorAll("p")
console.log(all1)


 
// propeties in DOM --

//  innerHTML --
let a = document.querySelector("h1");
a.innerHTML = "I changed all elements with the help of innerHTML";


// tagName --
let b = document.querySelector("h1")
console.log(b.tagName)




//  accesssing childern --
let x = document.querySelector(".parent").children;
console.log(x)


// chnaging color ---

let y = document.querySelector("#heading");
y.style.color = "blue"
y.style.backgroundColor = "pink"


//  innerTaxt ----
let data = document.querySelector(".fruit-items").children[0];
console.log(data)
