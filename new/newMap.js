const mp = new Map();

mp.set(0, 'uno');
mp.set(1, 'tos');
mp.set(2, 'tris');
mp.set(3, 'cuatro');

console.log(mp);

for(let key of mp){
    console.log(key);
}

for(let value of mp.values()){
    console.log(value);
}

for(let [key, value] of mp){
    console.log(key, value);
}

mp.delete(2);

mp.forEach((value, key)=>{
    console.log(key, value);
});

