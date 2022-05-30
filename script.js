//  Factory Function

function createPerson(name) {
  // camelcase : myFirstCase
  return {
    name, // or name:name,
    greeting() {
      // or greeting:funtion()
      let msg = `my name is ${this.name}`;
      console.log(msg);
    },
  };
}
let gokul = createPerson("Gokul");
let raj = createPerson("Raj");
gokul.greeting();
raj.greeting();
