//  promis in java-script --
let promise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("hello")
        resolve();
    },3000);
});