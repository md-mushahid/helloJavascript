let arr = [1, 2, 3, 4, 5];

const evenArray = arr.map(function (item){
    if(item % 2 == 0){
        return true;
    }
});

console.log(evenArray);

const newArray = arr.map(function (item){
    if(item % 2 == 0){
        return item;
    }
});

console.log(newArray);
