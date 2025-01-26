let f_price = [300, 800,7000,6000,500];
let i = 0;

for (let val of f_price){
    console.log(`the real price of items ${i} = ${val}`)
    i++ ; 
    
    let offer = val / 10 ;
    f_price[i] = f_price[i] - offer ;
    console.log(`after offer pricen  =  ${f_price[i]}`)
}










