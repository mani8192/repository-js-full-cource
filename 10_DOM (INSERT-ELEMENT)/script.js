//  appendChild() -- adds at the end of the node --

// let new_btn = document.createElement("button");
// new_btn.innerText = "click me!-append"
// console.log(new_btn)

// let div = document.querySelector(".fruits");
// div.appendChild(new_btn);


// prependChild() -- adds at the start of the node --

// let str_btn = document.createElement("button");
// str_btn.innerText = "click me!-prepend"
// console.log(str_btn)

// let div1 = document.querySelector(".fruits");
// div1.prepend(str_btn);
// console.log(div1)


//  .before() -- adds before the node --

// let str_btn = document.createElement("button");
// str_btn.innerText = "click me!-before"
// console.log(str_btn)

// let div1 = document.querySelector(".fruits");
// div1.before(str_btn);
// console.log(div1)



// after() -- adds after the node --

let str_btn = document.createElement("button");
str_btn.innerText = "click me!-before"
console.log(str_btn)

let div1 = document.querySelector("p");
div1.after(str_btn);
console.log(div1)


