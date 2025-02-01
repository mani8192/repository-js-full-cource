 // let URL = [{"id":"6uf","url":"https://cdn2.thecatapi.com/images/6uf.jpg","width":640,"height":428}];
// let promise =  fetch(URL);
// console.log(promise)    


// let URL = [{"id":"MTYwNDgxNg","url":"https://cdn2.thecatapi.com/images/MTYwNDgxNg.jpg","width":2272,"height":1704}];


// let URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD"; // Your API link


let URl = "https://api.thecatapi.com/v1/images/0XYvRd7oD"; // Your API link

let getfetch =  async() =>{
    let Response = await fetch(URl);
    console.log("data" , Response.status)
}

getfetch()

