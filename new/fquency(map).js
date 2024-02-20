const array = [1,2,3,4,1,1,2,2,7,7,8,10];
const mp = new Map();

array.forEach(element => {
    if(mp.get(element)){
        mp.set(element, mp.get(element)+1);
    }
    else{
        mp.set(element, 1);
    }
});

for(let [key, value] of mp){
    console.log(key, value);
}