//   promises in javascript --
/*
let promise = new Promise((resolve,reject) =>{
    console.log("hey i am promises ")
    resolve("completely deliverd")
    // reject("msg not deliverd")

});

   

function getData(getId,getNext){
    return new Promise((resolve, reject) => {
        console.log("msg are passed")

        console.log("this ",getId)
        setTimeout(()=>{
            resolve("sucsses")
            if( getNext){
                getNext();
            }
        
        },3000)
    }
        
)};
   
getData()
 */

//   ----------------------------


// let promise = new Promise((resolve, reject) => {
//     console.log("Hey, I am a promise!");
//     resolve(); 
// });

// // Calling a new promise
// new Promise((resolve, reject) => {
//     console.log("Hey, I am another promise!");
//     resolve();
// });


// let getpromise = (() => {
//     return new Promise((resolve, reject) => {
//         console.log("Hey, I am a promise!");
//         reject("success");
//     });
// });

// let promise = getpromise(() => {
//     promise.then(() => {
//             console.log("fulfilled");
//     });
// });

// getpromise();









function asyncFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("code are run....")
        },3000)
        resolve("sucsssue")
        
    });
}

console.log("data geating .....")
let p1 = asyncFunc();
p1.then((res)=>{
    console.log(res)
});
// asyncFunc()











