//  set timeout --
setTimeout(function(){
    console.log("hello,i am manish tiwari")
}, 2000)

////////////////////////

setTimeout(function(){
    console.log("hello,i am manish tiwari2")
},4000)



///////////////////////////////////////////////////////
//  call back function 2 --
function stu_details(name, age , cource){
    console.log("hello ",name,age,cource);
}

//////////////////////////////////////////////
// setTimeout(stu_details , 2000 , "manish tiwari" , 20 , "bca" ); 
function stu_details2(callback){
    console.log("hello","manish",20,"bca");
}
stu_details2();

///////////////////////////////////////////////////////////////////////////////////////////////
function getdata(getId){
    // console.log("hello");
    setTimeout(()=>{
        console.log("hello",getId)
    
    },2000)
}

getdata(199);