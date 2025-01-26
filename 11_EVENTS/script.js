//  event in js --

let div = document.querySelector(".box1");
div.onmouseover = () =>{
    console.log("button is clicked");
}

let div1 = document.querySelector("#size");
div1.onclick = () => {
    div1.style.backgroundColor = "blue";
    console.log("color are changed");
}



//  event object ---

let btn = document.querySelector(".btn");
btn.onclick = (e) => {
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
}


//  event listener in js ---