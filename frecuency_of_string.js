const str = 'madam';

const obj = {
};
for(let i of str){
    let a = i;
    if(obj[a] == undefined){
        obj[a] = 1;
    }
    else{
        obj[a]++;
    }
}

console.log(obj);

console.log("---------------------IMON'S CODE----------------");

let mp = new Map();

const string = 'madam';

for(let i of string){
    if(mp.get(i)){
        mp.set(i, mp.get(i)+1);
    }
    else{
        mp.set(i, 1);
    }
}

console.log(mp);
