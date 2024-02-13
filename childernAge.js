const fs = require('fs'); 

const jsonString = fs.readFileSync("childernAge.json", 'utf-8');

let obj = JSON.parse(jsonString);

let ans = 0;

function getChildrenAge(tmp){

    for(let key in tmp){
        if(key === 'age'){
            ans = ans + tmp[key];
        }
        
        if(Array.isArray(tmp[key])){ 

            tmp[key].forEach((item)=> {
                getChildrenAge(item);
            });
        }
        else if(key == 'object'){ 
            getChildrenAge(tmp[key]);
        }
    }
}

getChildrenAge(obj.person);

console.log("Total Age of Children is : ", ans);