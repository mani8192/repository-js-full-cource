//  callback function --
function add(num1,num2){
    return (num1 + num2);
}

function calculate(num1,num2,callback){
    console.log(callback(num1,num2));
}

calculate(10,20,add);





// callback function -- 

function user(name ){
    console.log("hello i am -", name)
    // callback()
}

function user2(){
    console.log("we are leran java- script " )
    // return user2
}

user("manish",name)


//  callback Hell -- 

function getData(dataId){
    console.log(dataId)
    setTimeout(() =>{
        console.log("heyy , we are devloper!")

    },2000)
}

getData(12345,);




function getData(getId,getNext){
    console.log("this ",getId)
    setTimeout(()=>{
        if( getNext){
            getNext();
        }
    
    },3000)
}
//  callback Hell --
getData(1,() =>{
        console.log("wait for next data  ")
    getData(2 ,() =>{
        console.log("wait for next data -3 ")
        getData(3,() =>{    
        });   
    });
    });







