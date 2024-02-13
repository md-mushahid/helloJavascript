const person = {
    name : 'mushahid',
    product : {
        apple : 10,
        banana: 20,
        coffe: 100,
        choclet: 190,
    }
};
const obj = person.product;
let purchase = [];
let totalPrice = 0;
for(let key in obj){
    const discount = (Math.random() * 101);
    if(discount >= 50){
        console.log(key);
        totalPrice += ((obj[key] * discount)/100);
    }
}
if(totalPrice == 0){
    console.log('buy nothing :(');
}
else{
    //console.log(purchase);
    console.log('Total Amount = ', totalPrice);
}

