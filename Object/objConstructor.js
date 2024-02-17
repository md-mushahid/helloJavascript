const o = new Object();
o.foo = 42;

console.log(o); // { foo: 42 }

function Tree(name) {
    this.name = name;
    this.age = 24;
  }
  
const theTree = new Tree("Redwood");
console.log(theTree);

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

