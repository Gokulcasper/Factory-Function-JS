// Constructor Function

function Person(name) {
  // Pascal case : MyFirstName
  this.name = name;
  this.greeting = function () {
    console.log(`This is ${this.name}`);
  };
}
let mani = new Person("Mani");
let sakthi = new Person("Sakthi");
mani.greeting();
sakthi.greeting();
