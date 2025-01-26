let a = document.querySelector(".heading")
// console.log(a)
// a.style.backgroundColor = "grren"
a.style.backgroundColor = "blue"
a.style.color = "white"
a.style.fontSize = "100px"
console.log(a)



//  attribute in DOM --

//  getAttribute() --
let b = document.querySelector(".para")
console.log(b)

let c = b.getAttribute("class")
console.log(c)


//  setAttribute() --
let x = document.querySelector(".para")
x.setAttribute("class","new_class")
console.log(x.getAttribute("class"))