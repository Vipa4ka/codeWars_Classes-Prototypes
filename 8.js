class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  }


  Object.defineProperty(Person.prototype, 'name', {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(name) {
        [this.firstName, this.lastName] = name.split(' ');
      }

  });

//   let marcusFenix = new Person('Marcus', 'Fenix');
// console.log(marcusFenix.firstName); // => 'Marcus'
// console.log(marcusFenix.lastName); // => 'Fenix'
// console.log(marcusFenix.getName()); // => 'Marcus Fenix'


let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'
  
//   Person.prototype.name = ???; // Will this work?
  
  // Maybe javascript provides the ability to add
  // getter and setters to an existing class?







// Introduction to getter and setter
// Javascript classes can declare getter and setters using the following format:
// class Engine {
//     constructor(watts) {
//       this.watts = watts;
//     }
//     get horsepower() {
//       return this.watts / 745.7;
//     }
//     set horsepower(hp) {
//       this.watts = 745.7 * hp;
//     }
//   }