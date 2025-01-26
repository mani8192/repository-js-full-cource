/*  cerate a function  using  the " function " keyword " that  take a string as an argument & return the  number of vavle is string ..*/

function count_vavle(thestring){
    let count = 0;
    for (let char of thestring.toLowerCase()){
        if(char === "a" || char === "i" || char === "e" || char ==="o" || char === "u"){
        count++
    }
}
return count; 
}

let final_char = count_vavle("mansih tiwari , we are devloper hum 10000000 LPA vale hai ");
console.log("vavle in this string",final_char);





//  same qustion with arrow function 

const count_vavl = (thestring) => {
    let count = 0;
    for (let char of thestring.toLowerCase()) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
};

let final1_char = count_vavl("mansih tiwari, we are devloper");
console.log(final1_char);



