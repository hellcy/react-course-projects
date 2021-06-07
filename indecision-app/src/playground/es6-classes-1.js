/*
  Class, Constructor, Default parameter
  Inheritance, Override
*/

// setup constructor to take name and age (default to 0)
// getDescription - Yuan Cheng is 27 year(s) old.
// Anonymous is 0 year(s) old.
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    //return 'Hi ' + this.name + '!';
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// inheritance
class Student extends Person {
  // override the contructor function
  constructor(name, age, major) {
    // use super() as a function to call the parent constructor
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    // this.major can only be a string or undefined
    // 'test' = true
    // !'test' = false
    // !!'test' = true
    // undefined = undefined
    // !undefined = true
    // !!undefined = false
    return !!this.major
  }

  getDescription() {
    // use super. to access parent's functions
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traverler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let gretting = super.getGreeting();
    if (this.hasHomeLocation()) {
      gretting += ` I'm visiting ${this.homeLocation}`;
    }

    return gretting;
  }
}

const me = new Student('Yuan Cheng', 27, 'Computer Science');

//console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const other = new Student();

//console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());

const traverlerOne = new Traverler('Yuan Cheng', 27, 'Sydney');

console.log(traverlerOne.getGreeting());

const traverlerTwo = new Traverler('Nancy', 27);

console.log(traverlerTwo.getGreeting());