// Question 1:-- Write JavaScript code to do the following:
// 1-Select all <p> tags in the document.
// 2-Change the text of the second <p> tag to: "This is updated by JavaScript".
// 3-Change the background color of all <p> tags to lightblue.

let b = document.querySelector("#Qustion")
b.innerHTML = "This is updated by JavaScript" // text change
b.style.color = "red"  // color change--
console.log(b.tagName) // console --


let hello = document.querySelector(".h2")
console.log(hello.innerText);
hello.innerText = hello.innerText +" " + " by manish tiwari";
// h2.style.backgroundColor = "lightblue"


let bax = document.querySelectorAll(".box")
console.log(bax)
let idx = 0;
for(daba of bax){
    daba.innerText = "name is changed"
    daba.style.backgroundColor = "pink"
    idx++
}
console.log(`the total box of ${idx} and `)


