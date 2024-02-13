(function(){
    console.clear();
})();

const array = [1, 2, 3, 4, 5, 6,7, 8];

const arr = array.slice(1, 4);

console.log(arr);

const a = array.concat(arr); 

console.log(array);
console.log(arr);
console.log(a);

const str = a.join(''); 
console.log(str);

const str1 = array.toString(); 
console.log(str1);

a.sort();   

console.log(a);

const even = a.map((item)=>{
    if(item % 2 == 0){
        return item;
    }
});

console.log(even);

const odd = a.filter((item)=>{
    if(item % 2 == 0){
        return item;
    }
});

console.log(odd);

const ages = [3, 10, 18, 20];

const adult = ages.findIndex((age) => {
    return age > 18;
  });

console.log(adult);

const adult1 = ages.find((i)=>{
    return i > 18;
});

console.log(adult1);

console.log(array.some((item)=>{
    if(item % 2 == 0){
        return 1;
    }
}));

console.log(array.every((item)=>{
    if(item % 2 == 0){
        return 1;
    }
}));

const num = [1, 2, 3, 4, 5];
const intial = 0;
const sum = num.reduce((prevValue,currentValue) => {
    
    return prevValue + currentValue;

}, intial);

console.log(sum);

console.log(Math.max(...a));


