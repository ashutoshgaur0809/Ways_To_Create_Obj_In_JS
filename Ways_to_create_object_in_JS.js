// In JavaScript, there are several ways to declare or construct an object.

// Object.
// using Class.
// using Function.
// Object Constructor

// 1.using object literal
var personObj = {
    name: "Alice",
    age: 25,
};
  
  console.log(personObj); 

// 2. Using Function
function createPerson(name, age) {
    return {
      name: name,
      age: age,
    };
  }
  
  var personFunc = createPerson("Bob", 35);
  console.log(personFunc);

// 3. Object Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  var personConstr = new Person("Charlie", 40);
  console.log(personConstr);

//   4.using class
class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const personClass = new PersonClass("David", 45);
  console.log(personClass); 