const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(`Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`);
// Expected output: "Index of the last "dog" is 38"

console.log(paragraph.replace("Ruth's", 'my'));

const word = 'dog';

console.log(`The word "${word}" ${paragraph.includes(word) ? 'is' : 'is not'} in the sentence`);

"Blue Whale".includes("blue"); // returns false

const regex = /[A-Z]/g;

const found = paragraph.match(regex);

console.log(found); // ['I', 'R']

console.log(paragraph.replace('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your dog!"

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

console.log(paragraph.toLowerCase());