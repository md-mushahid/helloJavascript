const fs = require('fs'); 

const jsonString = fs.readFileSync("countMealAndDishes.json", 'utf-8');

let obj = JSON.parse(jsonString);

let { dateToDayId,dishIdToMealId,mealIdToDayId} = obj.calendar

let map = {};

for(let key in dishIdToMealId){
    let dishId = key;
    let mealId = dishIdToMealId[key];

    if(mealId in map){
        map[mealId].push(dishId);
    }
    else{
        map[mealId] = [];
        map[mealId].push(dishId);
    }
}

let object = {};

for(let key in mealIdToDayId){

    let mealId = key;
    let dayId = mealIdToDayId[key];

    if(dayId in object){

        object[dayId]["meals"].push(mealId);
        object[dayId]["mealCount"] = object[dayId]["mealCount"] + 1;

        let array = map[mealId];
        
        if(Array.isArray(array)){
            let len = array.length;
            object[dayId]["dishCount"] = object[dayId]["dishCount"] + len;
        }

    }
    else{
        object[dayId] = {
            "meals": [],
            "mealCount": 1,
            "dishs": [],
            "dishCount": 0
        };

        object[dayId]["meals"].push(mealId);

        let array = map[mealId];
        
        if(Array.isArray(array)){
            let len = array.length;
            object[dayId]["dishCount"] = object[dayId]["dishCount"] + len;
        }
    }
}

// console.log(object);

for(let key in dateToDayId){

    let keyOfobject = dateToDayId[key];

    if(object[keyOfobject]){
        console.log("MealCount = ", object[keyOfobject]['mealCount'], "DishCount = ", object[keyOfobject]['dishCount']);
    }
    else{
        console.log("MealCount =  0  DishCount = 0");
    }
}